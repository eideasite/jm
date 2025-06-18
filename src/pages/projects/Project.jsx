import React, { useEffect, useState, Suspense, lazy, useRef } from 'react';
import { Button, Tooltip, Row, Col, Spin, Skeleton } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

// Lazy load all 20 project components
const projectComponents = [
  lazy(() => import('./projectinfo/Project1')),
  lazy(() => import('./projectinfo/Project2')),
  lazy(() => import('./projectinfo/Project3')),
  lazy(() => import('./projectinfo/Project4')),
  lazy(() => import('./projectinfo/Project5')),
  lazy(() => import('./projectinfo/Project6')),
  lazy(() => import('./projectinfo/Project7')),
  lazy(() => import('./projectinfo/Project8')),
  lazy(() => import('./projectinfo/Project9')),
  lazy(() => import('./projectinfo/Project10')),
  lazy(() => import('./projectinfo/Project11')),
  lazy(() => import('./projectinfo/Project12')),
  lazy(() => import('./projectinfo/Project13')),
  lazy(() => import('./projectinfo/Project14')),
  lazy(() => import('./projectinfo/Project15')),
  lazy(() => import('./projectinfo/Project16')),
  lazy(() => import('./projectinfo/Project17')),
  lazy(() => import('./projectinfo/Project18')),
  lazy(() => import('./projectinfo/Project19')),
  lazy(() => import('./projectinfo/Project20')),
];

// ErrorBoundary component to catch loading errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Project loading error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: 16, textAlign: 'center' }}>
          Failed to load this project.
        </div>
      );
    }
    return this.props.children;
  }
}

// Component that shows skeleton for 1s then Suspense fallback spinner while lazy loading project
const ProjectWithSkeletonAndSpin = ({ Component }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 1000); // 1s skeleton
    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return (
      <Skeleton
        active
        paragraph={{ rows: 4 }}
        style={{ borderRadius: 8, marginBottom: 16 }}
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Spin size="large" tip="Loading..." />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const timeoutRef = useRef(null);

  // Initially load 1 to 4 projects progressively every 2 seconds
  useEffect(() => {
    let count = 1;
    const loadInitialProjects = () => {
      setVisibleCount(count);
      count++;
      if (count <= 4) {
        timeoutRef.current = setTimeout(loadInitialProjects, 2000);
      }
    };
    loadInitialProjects();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Recursive function to show all projects progressively every 4 seconds
  const showMoreProjects = (start) => {
    if (start > projectComponents.length) return;
    setVisibleCount(start);
    timeoutRef.current = setTimeout(() => {
      showMoreProjects(start + 1);
    }, 4000);
  };

  // Button click handler toggling showAll and progressive reveal/hide
  const handleToggle = () => {
    clearTimeout(timeoutRef.current);

    if (!showAll) {
      // Show all projects progressively from current visibleCount + 1
      showMoreProjects(visibleCount + 1);
    } else {
      // Show less: reset to 4 projects only
      setVisibleCount(4);
    }
    setShowAll(!showAll);
  };

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2>Projects</h2>
      </div>

      <Row gutter={[24, 24]}>
        {projectComponents.slice(0, visibleCount).map((Component, idx) => (
          <Col key={`project-${idx}`} xs={24} sm={24} md={12} lg={12}>
            <ErrorBoundary>
              <ProjectWithSkeletonAndSpin Component={Component} />
            </ErrorBoundary>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <Tooltip title="There are more than 20 projects done in last career">
          <Button
            type="default"
            icon={showAll ? <UpOutlined /> : <DownOutlined />}
            onClick={handleToggle}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              borderColor: '#000',
              borderRadius: 6,
              padding: '0 20px',
              height: 40,
              fontWeight: 500,
            }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Project;

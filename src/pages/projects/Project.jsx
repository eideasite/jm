import React, { useState, Suspense, lazy } from 'react';
import { Button, Tooltip, Row, Col, Spin } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

// Lazy load project components
const projects = [
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

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4); // ⬅️ Only show 4 by default

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <div className="projects-section" style={{ padding: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        <Suspense
          fallback={
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Spin size="large" tip="Loading Projects..." />
            </div>
          }
        >
          <Row gutter={[24, 24]}>
            {visibleProjects.map((Component, idx) => (
              <Col key={`${showAll ? 'all' : 'partial'}-${idx}`} xs={24} sm={24} md={12} lg={12}>
                <div className="project-card">
                  <Component />
                </div>
              </Col>
            ))}
          </Row>
        </Suspense>

        <div
          style={{
            width: '100%',
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tooltip title="There are more than 20 projects done in last career">
            <Button
              type="default"
              onClick={toggleShowAll}
              icon={showAll ? <UpOutlined /> : <DownOutlined />}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderColor: '#000',
                borderRadius: '6px',
                padding: '0 20px',
                height: '40px',
                fontWeight: 500,
                transition: 'all 0.3s ease',
              }}
            >
              {showAll ? ' Show Less' : ' Show More'}
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Project;

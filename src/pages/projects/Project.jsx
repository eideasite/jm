// src/components/project/Project.jsx
import React, { useState, Suspense, lazy } from 'react';
import { Button, Tooltip, Row, Col, Spin } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './Project.css';

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
  const visibleProjects = showAll ? projects : projects.slice(0, 8);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div
      className="projects-container"
      style={{
        padding: 16,
        display: 'flex', // flex column container
        flexDirection: 'column',
        minHeight: '600px', // adjust this height as needed
      }}
    >
      <Suspense
        fallback={
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" tip="Loading Projects..." />
          </div>
        }
      >
        <Row
          gutter={[24, 24]}
          style={{
            flexGrow: 1, // make projects grid expand
          }}
        >
          {visibleProjects.map((Component, idx) => (
            <Col
              key={`${showAll ? 'all' : 'partial'}-${idx}`}
              xs={24}
              sm={24}
              md={12}
              lg={12}
            >
              <div
                className="project-wrapper"
                style={{
                  border: '1px solid #f0f0f0',
                  borderRadius: 8,
                  padding: 16,
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  height: '100%',
                }}
              >
                <Component />
              </div>
            </Col>
          ))}
        </Row>
      </Suspense>

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'center',
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
              minWidth: 140,
            }}
          >
            {showAll ? ' Show Less' : ' Show More'}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Project;

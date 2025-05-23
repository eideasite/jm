import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

const hardSkills = [
  'Git',                       // 3
  'Linux',                     // 5
  'Figma',                     // 5
  'Cloud',                     // 5
  'Mobile',                    // 6
  'GitHub',                    // 6
  'Backend',                   // 7
  'JScript',                   // 7
  'Testing',                   // 7
  'Research',                  // 8
  'Analysis',                  // 8
  'Analytical',                // 10
  'Architecture',              // 12
  'System Design',             // 13
  'Developer Tools',           // 15
  'Web Development',           // 15
  'Mobile Development',        // 18
  'System Integration',        // 18
  'Software Development',      // 20
  'Software Architecture',     // 21
  'Artificial Intelligence',   // 22
  'Technical Documentation',   // 23
  'Agile Project Management',  // 24
  'Database Management System' // 26
];


const HardSkill = ({ darkMode }) => (
  <Card
    title={
      <span>
        <ToolOutlined style={{ marginRight: 8 }} />
        Technical Skills
      </span>
    }
    bordered={false}
    style={{
      marginBottom: 20,
      boxShadow: darkMode
        ? '0 2px 8px rgba(255, 255, 255, 0.08)'
        : '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <Row gutter={[12, 12]}>
      {hardSkills.map((skill, index) => (
        <Col key={index} xs={12} sm={8} md={6} lg={6} xl={4}>
          <Tag
            className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'} skill-shade-${index % 10}`}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '8px 12px',
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 50,
              whiteSpace: 'normal',
              lineHeight: '1.4',
              minHeight: 40,
              wordBreak: 'break-word',
              transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#000'; // dark background
              e.currentTarget.style.color = '#fff'; // white text
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.color = '';
            }}
          >
            {skill}
          </Tag>
        </Col>
      ))}
    </Row>
  </Card>
);

export default HardSkill;

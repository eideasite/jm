// 📄 src/components/skills/SoftSkill.jsx

import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const softSkills = [
  'Docs',                   // 4
  'Jira',                   // 4
  'Drive',                  // 5
  'Email',                  // 5
  'Excel',                  // 5
  'Gmail',                  // 5
  'Scrum',                  // 5
  'Design',                 // 6
  'UX Design',              // 9
  'Invoicing',              // 9
  'Execution',              // 9
  'Google Docs',            // 11
  'Prototyping',            // 11
  'Wireframing',            // 11
  'User Centered',          // 12
  'Facilitation',           // 12
  'Management',             // 10
  'Innovation',             // 10
  'Teamwork',               // 8
  'Communication',          // 13
  'Collaboration',          // 13
  'User Interface',         // 14
  'Problem Solving',        // 15
  'Risk Management',        // 15
  'Team Management',        // 15
  'Design Thinking',        // 15
  'Project Planning',       // 16
  'Business Analysis',      // 17
  'Project Management',     // 18
  'Strategic Thinking',     // 18
  'Process Management',     // 18
  'Product Development',    // 19
  'Requirements Gathering', // 22
  'Product Lifecycle Management' // 27
];


const SoftSkill = ({ darkMode }) => (
  <Card
    title={
      <span>
        <SmileOutlined style={{ marginRight: 8 }} />
        Soft Skills
      </span>
    }
    bordered={false}
    style={{
      marginBottom: 20,
      boxShadow: darkMode
        ? '0 2px 8px rgba(115, 0, 255, 0.08)'
        : '0 2px 8px rgba(136, 0, 255, 0.1)',
    }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <Row gutter={[12, 12]}>
      {softSkills.map((skill, index) => (
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

export default SoftSkill;

// 📄 src/components/skills/SoftSkill.jsx

import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

// Skill Titles Only
const softSkills = [
  'Business Analysis', 'Collaboration', 'Communication', 'Design',
  'Design Thinking', 'Docs', 'Documentation', 'Drive', 'Email', 'Excel',
  'Execution', 'Facilitation', 'Gmail', 'Google Docs', 'Innovation', 'Invoicing',
  'Jira', 'Management', 'Problem Solving', 'Process Management',
  'Product Development', 'Product Lifecycle Management', 'Project Management',
  'Project Planning', 'Prototyping', 'Requirements Gathering', 'Risk Management',
  'Scrum', 'Strategic Thinking', 'Team Management', 'Teamwork',
  'UX Design', 'User Centered', 'User Interface', 'Wireframing',
];

const tagColors = [
  'blue', 'green', 'orange', 'cyan', 'purple', 'magenta', 'volcano', 'gold', 'lime',
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
        ? '0 2px 8px rgba(255, 255, 255, 0.08)'
        : '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <Row gutter={[12, 12]}>
      {softSkills.map((skill, index) => (
        <Col key={index} xs={12} sm={8} md={6} lg={6} xl={4}>
          <Tag
            color={tagColors[index % tagColors.length]}
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

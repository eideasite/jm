import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

// 🎯 New hard skills (titles only)
const hardSkills = [
  'Agile Project Management',
  'Analysis',
  'Analytical',
  'Architecture',
  'Artificial Intelligence',
  'Backend',
  'Cloud',
  'Database Management System',
  'Developer Tools',
  'Figma',
  'Git',
  'GitHub',
  'JScript',
  'Linux',
  'Mobile',
  'Mobile Development',
  'Research',
  'Software Architecture',
  'Software Development',
  'System Design',
  'System Integration',
  'Technical Documentation',
  'Testing',
  'Web Development',
];

const tagColors = [
  'geekblue', 'green', 'purple', 'cyan', 'orange',
  'magenta', 'volcano', 'gold', 'lime', 'blue',
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

export default HardSkill;

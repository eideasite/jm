import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const softSkills = [
  'Docs',
  'Jira',
  'Drive',
  'Email',
  'Excel',
  'Gmail',
  'Scrum',
  'Design',
  'UX Design',
  'Invoicing',
  'Execution',
  'Google Docs',
  'Prototyping',
  'Wireframing',
  'User Centered',
  'Facilitation',
  'Management',
  'Innovation',
  'Teamwork',
  'Communication',
  'Collaboration',
  'User Interface',
  'Problem Solving',
  'Risk Management',
  'Team Management',
  'Design Thinking',
  'Project Planning',
  'Business Analysis',
  'Project Management',
  'Strategic Thinking',
  'Process Management',
  'Product Development',
  'Requirements Gathering',
  'Product Lifecycle Management',
];

const SoftSkill = ({ darkMode }) => (
  <div className={darkMode ? 'skill-section-dark' : 'skill-section-light'}>
    <Card
      title={
        <span><SmileOutlined style={{ marginRight: 8 }} />Soft Skills</span>
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
        {softSkills.map((skill, index) => {
          const slug = skill.replace(/\s+/g, '-').toLowerCase();
          return (
            <Col key={index} xs={12} sm={8} md={6} lg={6} xl={4}>
              <Tag className={`tag-hover color-${slug}`}>
                {skill}
              </Tag>
            </Col>
          );
        })}
      </Row>
    </Card>
  </div>
);

export default SoftSkill;

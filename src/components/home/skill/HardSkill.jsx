import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

const hardSkills = [
  'Git', 'Linux', 'Figma', 'Cloud', 'Mobile', 'GitHub', 'Backend', 'JScript',
  'Testing', 'Research', 'Analysis', 'Analytical', 'Architecture', 'System Design',
  'Developer Tools', 'Web Development', 'Mobile Development', 'System Integration',
  'Software Development', 'Software Architecture', 'Artificial Intelligence',
  'Technical Documentation', 'Agile Project Management', 'Database Management System',
];

const HardSkill = ({ darkMode }) => (
  <Card
    title={<span><ToolOutlined style={{ marginRight: 8 }} />Technical Skills</span>}
    bordered={false}
    style={{
      marginBottom: 20,
      boxShadow: darkMode
        ? '0 2px 8px rgba(255, 255, 255, 0.08)'
        : '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <div className={darkMode ? 'skill-section-dark' : 'skill-section-light'}>
      <Row gutter={[12, 12]}>
        {hardSkills.map((skill, index) => {
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
    </div>
  </Card>
);

export default HardSkill;

import React from 'react';
import { Badge, Card, Row, Col } from 'antd';

const softSkills = [
  { title: 'Communication', color: 'blue', description: 'Strong ability to express ideas clearly and effectively.' },
  { title: 'Teamwork', color: 'green', description: 'Experienced in collaborating with diverse teams.' },
  { title: 'Problem-Solving', color: 'orange', description: 'Ability to identify issues and provide solutions.' },
  { title: 'Time Management', color: 'purple', description: 'Expertise in managing time effectively and meeting deadlines.' },
];

const SoftSkill = ({ darkMode }) => (
  <Card
    title="Soft Skills"
    bordered={false}
    style={{ marginBottom: '20px' }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <Row gutter={[16, 16]}>
      {softSkills.map((skill, index) => (
        <Col key={index} span={6}>
          <Badge.Ribbon text={skill.title} color={skill.color}>
            <Card bordered={false}>
              <div>{skill.description}</div>
            </Card>
          </Badge.Ribbon>
        </Col>
      ))}
    </Row>
  </Card>
);

export default SoftSkill;
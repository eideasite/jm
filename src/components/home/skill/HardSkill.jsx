import React from 'react';
import { Badge, Card, Row, Col } from 'antd';

const hardSkills = [
  { title: 'JavaScript', color: 'red', description: 'Proficient in ES6+, async programming, and DOM manipulation.' },
  { title: 'React', color: 'cyan', description: 'Experienced in building single-page applications with React.' },
  { title: 'HTML/CSS', color: 'blue', description: 'Expertise in building responsive and accessible websites.' },
  { title: 'Node.js', color: 'magenta', description: 'Solid understanding of backend development with Node.js.' },
];

const HardSkill = ({ darkMode }) => (
  <Card
    title="Hard Skills"
    bordered={false}
    style={{ marginBottom: '20px' }}
    className={darkMode ? 'skill-card-dark' : 'skill-card-light'}
  >
    <Row gutter={[16, 16]}>
      {hardSkills.map((skill, index) => (
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

export default HardSkill;
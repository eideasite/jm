import React from 'react';
import { Space, Card, Typography } from 'antd';
import SoftSkill from './SoftSkill';
import HardSkill from './HardSkill';
import './skill.css';

const { Title } = Typography;

const Skill = ({ darkMode }) => {
  return (
    <section className={`skill-section ${darkMode ? 'skill-section-dark' : 'skill-section-light'}`}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card
            title="My Skillset"
            bordered={false}
            className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}
          >
            <Title level={3} style={{ color: darkMode ? '#fff' : '#000' }}>
              Overview of My Skills
            </Title>
            <p className={darkMode ? 'skill-text-dark' : 'skill-text-light'}>
              Below are some of the essential hard and soft skills that define my expertise as a Web Developer.
            </p>
          </Card>
          <Card bordered={false} className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}>
            <SoftSkill darkMode={darkMode} />
          </Card>
          <Card bordered={false} className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}>
            <HardSkill darkMode={darkMode} />
          </Card>
        </Space>
      </div>
    </section>
  );
};

export default Skill;
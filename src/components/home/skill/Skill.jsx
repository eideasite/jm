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
            title="T shaped Professional | Tech-Savvy | Business Analyst | Software Project Coordinator | Solution Analyst "
            bordered={false}
            className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}
          >
            <Title level={3} style={{ color: darkMode ? '#fff' : '#000' }}>
             I BELIEVE IN MY TALENTS. 
            </Title>
            <p className={darkMode ? 'skill-text-dark' : 'skill-text-light'}>
              I am JM — a tech-savvy Solution Analyst, Business Analyst, and Software Project Coordinator — skilled in leveraging modern technologies to drive innovation in scalable software solutions. I specialize in project planning, resource allocation, and ensuring timely product delivery while applying strategic thinking, analytical problem-solving, and risk management.
              My expertise includes user story mapping, wireframe modeling, functional prototyping, and workflow optimization. With strong client communication and cross-team collaboration skills, I am prepared to contribute effectively to impactful projects in the modern IT sector.
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
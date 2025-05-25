import React from 'react';
import PropTypes from 'prop-types';
import { Space, Card } from 'antd';
import SoftSkill from './SoftSkill';
import HardSkill from './HardSkill';
import './skill.css';

const Skill = ({ darkMode, softSkillsLoading, hardSkillsLoading }) => {
  return (
    <section
      role="region"
      aria-label="Skill section including soft and hard skills"
      className={`skill-section ${darkMode ? 'skill-section-dark' : 'skill-section-light'}`}
    >
      <div className="skill-container">
        <Space direction="vertical" size="large" className="skill-space">
          <Card
            bordered={false}
            className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}
          >
            {softSkillsLoading ? <p>Loading soft skills...</p> : <SoftSkill darkMode={darkMode} />}
          </Card>

          <Card
            bordered={false}
            className={`skill-card ${darkMode ? 'skill-card-dark' : 'skill-card-light'}`}
          >
            {hardSkillsLoading ? <p>Loading hard skills...</p> : <HardSkill darkMode={darkMode} />}
          </Card>
        </Space>
      </div>
    </section>
  );
};

Skill.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  softSkillsLoading: PropTypes.bool,
  hardSkillsLoading: PropTypes.bool,
};

Skill.defaultProps = {
  softSkillsLoading: false,
  hardSkillsLoading: false,
};

export default Skill;

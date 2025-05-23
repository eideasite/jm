import React, { useEffect } from 'react';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  CodeOutlined,
  GithubOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  FileDoneOutlined,
  UserOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { Card, Typography } from 'antd';
import './Experience.css';

const { Title } = Typography;

const experiences = [
  {
    side: 'left',
    title: 'Business Analyst',
    company: 'IYKONS',
    date: 'Sep 2024 – Feb 2025 · 6 months',
    location: 'Hybrid',
    description: 'Worked on analyzing and improving business systems and processes.',
    skills: [
      { icon: <DeploymentUnitOutlined />, label: 'Process Optimization' },
      { icon: <DatabaseOutlined />, label: 'Data Analysis' },
      { icon: <FileDoneOutlined />, label: 'Requirements Gathering' },
      { icon: <UserOutlined />, label: 'Stakeholder Communication' },
    ],
  },
  {
    side: 'right',
    title: 'Junior Business Analyst',
    company: 'IYKONS',
    date: 'Feb 2024 – Sep 2024 · 8 months',
    location: 'Remote',
    description: 'Supported projects with user-centered design and agile practices.',
    skills: [
      { icon: <FileDoneOutlined />, label: 'User-centered Design' },
      { icon: <ToolOutlined />, label: 'Jira' },
      { icon: <FileDoneOutlined />, label: 'Requirements Analysis' },
      { icon: <DeploymentUnitOutlined />, label: 'Technical Project Management' },
    ],
  },
  {
    side: 'left',
    title: 'Internship Trainee Business Analyst',
    company: 'IYKONS',
    date: 'Dec 2023 – Feb 2024 · 3 months',
    location: 'Remote',
    description: 'Assisted in developing user stories and wireframes to enhance user experience.',
    skills: [
      { icon: <FileDoneOutlined />, label: 'User Story Development' },
      { icon: <FileDoneOutlined />, label: 'User Story Mapping' },
      { icon: <FileDoneOutlined />, label: 'Wireframing' },
      { icon: <UserOutlined />, label: 'User Experience (UX)' },
    ],
  },
  {
    side: 'right',
    title: 'Intern Trainee Software Engineer',
    company: 'IYKONS',
    date: 'Jul 2023 – Nov 2023 · 5 months',
    location: 'London, England, United Kingdom · Remote',
    description: 'Contributed to web development projects using React JS, TypeScript, and Web API.',
    skills: [
      { icon: <CodeOutlined />, label: 'React JS' },
      { icon: <CodeOutlined />, label: 'TypeScript' },
      { icon: <ToolOutlined />, label: 'Web API' },
      { icon: <CodeOutlined />, label: 'C#' },
      { icon: <GithubOutlined />, label: 'Git & GitHub' },
      { icon: <CodeOutlined />, label: 'OOP' },
      { icon: <ToolOutlined />, label: 'Linux' },
      { icon: <DatabaseOutlined />, label: 'DBMS' },
      { icon: <ToolOutlined />, label: 'Web Development' },
    ],
  }
];

const Experience = ({ darkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <section className={`experience-container ${darkMode ? 'dark' : 'light'}`}>
      <Title level={3} className="experience-title">Work Experience</Title>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="experience-item"
            bordered={false}
            style={{ background: 'var(--card-bg)', color: 'var(--card-text)' }}
          >
            <div className="exp-header">
              <h3>{exp.company}</h3>
              <span className="exp-title">{exp.title}</span>
            </div>
            <div className="exp-meta">
              <p><CalendarOutlined /> {exp.date}</p>
              <p><EnvironmentOutlined /> {exp.location}</p>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <div className="skills-block">
              <p className="key-skills-heading"><strong>Key Skills:</strong></p>
              <div className="skills">
                {exp.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill.icon} <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;

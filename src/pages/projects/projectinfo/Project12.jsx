import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import {
  ProjectOutlined,
  LinkOutlined,
  CloudOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project12 = () => {
  const project = {
    name: 'Project Management Software (In-House Product)',
    country: 'United Kingdom',
    sector: 'Software / Product Development / SaaS',
    client: ['Internal Product (Iykons) – Later scaled to other sectors'],
    role: ['Business Analyst'],
    purpose: [
      'To build a scalable project management tool like Jira, tailored for internal needs and later enhanced for external sector sales.',
      'Supports task planning, sprint management, and documentation flow.',
    ],
    technologies: ['Vite + React ( FrontEnd ) | .net API (Back End )'],
    tools: ['Jira (reference)', 'Google Docs', 'Figma', 'Draw.io', 'Gmail'],
    experience: [
      'Collaborated with Product Manager (Project Lead)',
      'Coordinated with UX/UI designers and development team',
      'Designed workflows and documented user journeys',
      'Created Software Requirement Specifications (SRS)',
      'Wireframed and mocked up key features',
      'Supported UAT from QA side',
      'Participated in feature enhancements for external rollout',
    ],
    document: [
      'SRS Document',
      'Workflow Design Sheets',
      'User Flow Documentation',
      'Wireframes and Mockups',
      'QA/UAT Checklists',
      'Feature Implementation Reports',
    ],
    scope: [
      'Internal project lifecycle system',
      'Modular design for better scalability',
      'Workflow and sprint planning integration',
      'Designed for expansion into other industries',
    ],
    cloudDeployment: 'AWS',
    urls: ['https://projectmanagement.iykons.com/'],
    teamMembers: [
      {
        name: 'JM (You)',
        role: 'Business Analyst',
        icon: '🧑‍💼',
        technology: 'Analysis and Coordination',
      },
      {
        name: 'Product Manager',
        role: 'Project Lead',
        icon: '👔',
        technology: 'Management and Planning',
      },
      {
        name: 'UX/UI Designer',
        role: 'Design',
        icon: '🎨',
        technology: 'Figma & Wireframes',
      },
      {
        name: 'Development Team',
        role: 'Frontend & Backend',
        icon: '💻',
        technology: 'React + Backend',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <ProjectOutlined style={{ marginTop: 3 }} />
          <Text strong style={{ fontSize: 16, whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Collapse accordion>
        <Panel header="🌍 Country" key="1">
          <ul style={ulStyle}>
            <li>{project.country}</li>
          </ul>
        </Panel>

        <Panel header="💻 Sector" key="2">
          <ul style={ulStyle}>
            {project.sector.split(' / ').map((sector, i) => (
              <li key={i}>{sector}</li>
            ))}
          </ul>
        </Panel>

        {project.client.length > 0 && (
          <Panel header="🏢 Client" key="3">
            <ul style={ulStyle}>
              {project.client.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Panel>
        )}

        <Panel header="🔧 Role" key="4">
          <ul style={ulStyle}>
            {project.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🎯 Purpose" key="5">
          <ul style={ulStyle}>
            {project.purpose.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🧪 Key Technologies Used" key="6">
          <ul style={ulStyle}>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🛠 Tools Used" key="7">
          <ul style={ulStyle}>
            {project.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📘 Experience Gained" key="8">
          <ul style={ulStyle}>
            {project.experience.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📄 Documentation" key="9">
          <ul style={ulStyle}>
            {project.document.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📦 Project Scope" key="10">
          <ul style={ulStyle}>
            {project.scope.map((sc, i) => (
              <li key={i}>{sc}</li>
            ))}
          </ul>
        </Panel>

        <Panel
          header={
            <span>
              <CloudOutlined /> ☁️ Cloud Deployment
            </span>
          }
          key="11"
        >
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel
          header={
            <span>
              <LinkOutlined /> 🔗 URLs
            </span>
          }
          key="12"
        >
          <ul style={ulStyle}>
            {project.urls.map((url, i) => (
              <li key={i}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="13">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <Text style={{ fontSize: 20 }}>{member.icon}</Text>
                  <Text strong>{member.name}</Text>
                  <Text type="secondary">- {member.role}</Text>
                </div>
                <Text italic>{member.technology}</Text>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project12;

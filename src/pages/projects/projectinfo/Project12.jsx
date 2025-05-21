import React from 'react';
import {
  Card,
  Typography,
  Space,
  Collapse,
  Divider,
} from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const Project12 = () => {
  const project = {
    name: 'Project Management Software (In-House Product)',
    country: 'United Kingdom',
    sector: 'Software / Product Development / SaaS',
    client: ['Internal Product (Iykons) – Later scaled to other sectors'],
    role: ['Business Analyst'],
    purpose:
      'To build a scalable project management tool like Jira, tailored for internal needs and later enhanced for external sector sales. It supports task planning, sprint management, and documentation flow.',
    technologies: ['Vite + React ( FrontEnd ) | .net API (Back End ) '],
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
    cloudDeployment:
      'AWS',
    urls: ['https://projectmanagement.iykons.com/'],
    teamMembers: [
      {
        name: 'JM (You)',
        role: 'Business Analyst',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Analysis and Coordination',
      },
      {
        name: 'Product Manager',
        role: 'Project Lead',
        icon: '👔',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Management and Planning',
      },
      {
        name: 'UX/UI Designer',
        role: 'Design',
        icon: '🎨',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Figma & Wireframes',
      },
      {
        name: 'Development Team',
        role: 'Frontend & Backend',
        icon: '💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'React + Backend',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ color: '#13c2c2', marginTop: 3 }} />
          <Text strong style={{ fontSize: '16px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Section 1: Basic Info */}
        <Collapse ghost bordered={false}>
          <Panel header="🌍 Country" key="1"><ul><li>{project.country}</li></ul></Panel>
          <Panel header="💻 Sector" key="2"><ul><li>{project.sector}</li></ul></Panel>
          <Panel header="🏢 Client" key="3"><ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul></Panel>
          <Panel header="🔧 Role" key="4"><ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul></Panel>
          <Panel header="🎯 Purpose" key="5"><Text>{project.purpose}</Text></Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        {/* Section 2: Technical / Experience */}
        <Collapse ghost bordered={false}>
          <Panel header="🧪 Key Technologies Used" key="6">
            <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
          </Panel>
          <Panel header="📘 Experience Gained" key="7">
            <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
          </Panel>
          <Panel header="🛠 Tools Used" key="8">
            <ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
          </Panel>
          <Panel header="📄 Documentation" key="9">
            <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
          </Panel>
          <Panel header="📦 Project Scope" key="10">
            <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </Panel>
          <Panel header="☁️ Cloud Deployment" key="11"><Text>{project.cloudDeployment}</Text></Panel>
          <Panel header="🔗 URLs" key="12">
            <ul>{project.urls.map((url, i) => (
              <li key={i}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </Link>
              </li>
            ))}</ul>
          </Panel>
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        {/* Section 3: Team Members */}
        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="13">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <TeamOutlined style={{ color: '#1890ff', marginRight: 6 }} />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="14">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="15">
            <ul>
              {project.teamMembers.map((member, i) =>
                member.linkedin !== 'N/A' ? (
                  <li key={i}>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      {member.linkedin}
                    </Link>
                  </li>
                ) : (
                  <li key={i}>N/A</li>
                )
              )}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project12;

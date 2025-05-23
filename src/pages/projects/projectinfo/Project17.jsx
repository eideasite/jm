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

const { Text } = Typography;
const { Panel } = Collapse;

const Project17 = () => {
  const project = {
    name: 'Petchef POS System – BA & Workflow Redesign & UI Redesign',
    country: 'Australia',
    sector: 'Retail / Point of Sale (POS)',
    client: ['Kishore POS System – Rebranded as Petchef POS'],
    role: ['Business Analyst – UX/UI Coordination & Documentation'],
    purpose: [
      'Redesign outdated Kishore POS system interface under the Petchef POS System branding',
      'Improve user experience, visual consistency, and usability for in-store operations',
      'Collaborate with design team to build a modern UI aligned with retail standards',
      'Ensure the redesigned UI supports real-time sales and inventory processes',
    ],
    technologies: [
      'Platforms: POS System (Web + Touch Interface)',
      'Figma (UX/UI Prototypes)',
      'Balsamiq (Wireframes)',
      'Draw.io (Flow Mapping)',
      'Jira (Sprint & Task Tracking)',
      'Google Docs (Project Documentation)',
    ],
    experience: [
      'Analyze existing outdated UI of Kishore POS',
      'Create and refine low-fidelity wireframes for redesign',
      'Coordinate with UX/UI team for mockup validation',
      'Document UI flow, user interactions, and feedback',
      'Support frontend dev with detailed layout flows',
      'Align design updates with real business needs',
    ],
    document: [
      'UI Redesign Report',
      'Before/After User Flow Comparison',
      'Wireframe & Screen Layouts',
      'User Experience Feedback Summary',
      'POS Workflow Mapping',
      'Final UI Sign-off Sheet',
    ],
    scope: ['POS Web UI and touch interface'],
    cloudDeployment: 'Internal POS Network (Private)',
    urls: [],
    teamMembers: [
      { name: 'JM (You)', role: 'Analyst, Design Flow Coordinator, Documentation Lead', icon: '🧑‍💼' },
      { name: 'UX/UI Designers', role: 'Design improvement & prototype creation', icon: '🎨' },
      { name: 'Frontend Developer', role: 'UI Implementation', icon: '💻' },
      { name: 'POS Stakeholders', role: 'Feedback and validation', icon: '🧑‍💼' },
    ],
  };

  return (
    <Card
      hoverable
      bordered
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ProjectOutlined />
          <Text strong>{project.name}</Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Section 1: Basic Info */}
        <Collapse>
          <Panel header="🌍 Country" key="1">
            <ul>
              <li>{project.country}</li>
            </ul>
          </Panel>
          <Panel header="💻 Sector" key="2">
            <ul>
              <li>{project.sector}</li>
            </ul>
          </Panel>
          <Panel header="🏢 Client" key="3">
            <ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </Panel>
          <Panel header="🔧 Role" key="4">
            <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </Panel>
          <Panel header="🎯 Purpose" key="5">
            <ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </Panel>
        </Collapse>

        <Divider />

        {/* Section 2: Technical / Experience */}
        <Collapse>
          <Panel header="🧪 Key Technologies Used" key="6">
            <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
          </Panel>
          <Panel header="📘 Responsibilities (Experience Gained)" key="7">
            <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
          </Panel>
          <Panel header="📄 Documentation" key="8">
            <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
          </Panel>
          <Panel header="📦 Platform Scope" key="9">
            <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </Panel>
          <Panel header="☁️ Deployment" key="10">
            <Text>{project.cloudDeployment}</Text>
          </Panel>
          {project.urls.length > 0 && (
            <Panel header="🔗 URLs" key="11">
              <ul>
                {project.urls.map((url, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          )}
        </Collapse>

        <Divider dashed />

        {/* Section 3: Team Members */}
        <Collapse>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <TeamOutlined />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="13">
            <ul>{project.teamMembers.map((member, i) => <li key={i}>– {member.role}</li>)}</ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="14">
            <ul>{project.teamMembers.map((_, i) => <li key={i}>N/A</li>)}</ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project17;

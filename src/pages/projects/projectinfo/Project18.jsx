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

const Project19 = () => {
  const project = {
    name: 'Jura E-Commerce Trade Store Platform',
    country: 'United Kingdom',
    sector: 'E-Commerce / Retail Trade',
    client: ['Internal Retail System'],
    role: ['Business Analyst (BA) – Research, Documentation & Reporting'],
    purpose: [
      'Analyze customer-side product catalog and purchase flow',
      'Study internal SOPs and store-side interactions',
      'Identify UX insights and improvement opportunities',
      'Review WhatsApp API integration for support flow',
      'Document, wireframe, and improve platform interactions',
    ],
    technologies: [
      'Figma (Wireframes / Mockups)',
      'Draw.io (Process Flows)',
      'Google Docs / Sheets (SOPs & Reports)',
      'WhatsApp API (Integration Review)',
      'Jira (Task Coordination)',
    ],
    experience: [
      'Catalog and journey analysis',
      'Warehouse and SOP interaction mapping',
      'Intern coordination for research',
      'Report structuring and documentation ownership',
      'UX wireframes and platform experience validation',
      'Feature enhancement presentations',
    ],
    document: [
      'Customer Flow Analysis Report',
      'Store SOP Interaction Mapping',
      'WhatsApp API Review Report',
      'Low-Fidelity Wireframes',
      'Feature Improvement Documentation',
      'Presentation Decks',
    ],
    scope: ['E-Commerce Platform UX Research & API Support Mapping'],
    cloudDeployment: 'Not specified',
    urls: [],
    teamMembers: [
      { name: 'JM (You)', role: 'Lead Business Analyst and Documentation Head', icon: '📘' },
      { name: 'Intern Research Team', role: 'Data gathering and analysis', icon: '👥' },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      // no style override, use default Ant Design styles
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ProjectOutlined />
          <Text strong>{project.name}</Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Collapse bordered defaultActiveKey={['1']}>
          <Panel header="🌍 Country" key="1">
            <ul>
              <li>{project.country}</li>
            </ul>
          </Panel>
          <Panel header="🛍️ Sector" key="2">
            <ul>
              <li>{project.sector}</li>
            </ul>
          </Panel>
          <Panel header="🏢 Client" key="3">
            <ul>
              {project.client.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="🔧 Role" key="4">
            <ul>
              {project.role.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="🎯 Purpose" key="5">
            <ul>
              {project.purpose.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Panel>

          <Divider style={{ margin: '8px 0' }} />

          <Panel header="🧪 Key Technologies Used" key="6">
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="📘 Responsibilities (Experience Gained)" key="7">
            <ul>
              {project.experience.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="📄 Documentation" key="8">
            <ul>
              {project.document.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="📦 Platform Scope" key="9">
            <ul>
              {project.scope.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
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

          <Divider dashed style={{ margin: '8px 0' }} />

          <Panel header="👥 Team Members" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <TeamOutlined />
                  <span>{member.name} ({member.icon})</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header="💼 Job Role" key="13">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project19;

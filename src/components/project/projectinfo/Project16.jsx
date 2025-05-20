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

const Project16 = () => {
  const project = {
    name: 'HMRC client & API Integration for iykonnect',
    country: 'United Kingdom',
    sector: 'Finance / Tax / Compliance',
    client: ['Internal – iykonnect System'],
    role: ['Business Analyst – Documentation & Integration Analyst'],
    purpose: [
      'Restudy and enhance outdated HMRC API documentation',
      'Analyze and bridge gaps between HMRC manual portal and iConnect software',
      'Redefine and map relevant API fields for daily user workflow',
      'Support integration of HMRC functionalities into our advanced React-based system',
      'Enable seamless backend sandbox testing model',
    ],
    technologies: [
      'Tech Stack: React (Frontend), Custom Backend',
      'Jira',
      'Google Docs',
      'Figma',
      'Postman (API testing)',
      'HMRC Developer Sandbox Test with .net API Framework',
    ],
    experience: [
      'API reverse engineering and integration documentation',
      'Map outdated API data with updated functional fields',
      'Design new API introduction docs for internal dev use',
      'Work closely with backend developers to ensure proper R&D implementation',
      'Draft documentation on how HMRC API fits into iConnect system workflows',
      'Provide scenario-based API validation using sandbox testing',
    ],
    document: [
      'Updated HMRC API Documentation',
      'Field Mapping & Functionality Sheet',
      'Use Case Scenarios for Daily Workflow',
      'Integration Report: Bridging Manual & Digital Workflow',
      'Sandbox Testing Report',
      'Developer Notes for Seamless Integration',
    ],
    scope: ['HMRC API IYKONNECT Bridge system '],
    cloudDeployment: 'Secure Internal Testing Environment (Sandbox)',
    urls: [],
    teamMembers: [
      { name: 'jm', role: 'Documentation Lead, Business Workflow Mapping, Dev Coordination', icon: '🧑‍💼' },
      { name: 'Associate Backend Developer', role: 'Development & Sandbox Testing', icon: '👨‍💻' },
      { name: 'Intern Backend Developer', role: 'Field Mapping & Initial Testing', icon: '👨‍🎓' },
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
          <Panel header="🎯 Purpose" key="5"><ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul></Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        {/* Section 2: Technical / Experience */}
        <Collapse ghost bordered={false}>
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
          <Panel header="☁️ Deployment" key="10"><Text>{project.cloudDeployment}</Text></Panel>
          {project.urls.length > 0 && (
            <Panel header="🔗 URLs" key="11">
              <ul>{project.urls.map((url, i) => (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}</ul>
            </Panel>
          )}
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        {/* Section 3: Team Members */}
        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <TeamOutlined style={{ color: '#1890ff', marginRight: 6 }} />
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

export default Project16;

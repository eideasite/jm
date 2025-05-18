


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

const Project13 = () => {
  const project = {
    name: 'IYConnect – Feature Coordination & Documentation',
    country: 'United Kingdom (Assumed)',
    sector: 'Software / Fintech Management',
    client: ['In-House Product – IYKONS'],
    role: ['Business Analyst / Feature Coordinator'],
    purpose: [
      'Analyze and document software features',
      'Coordinate with product teams on feature additions',
      'Manage documentation organization and version control',
      'Implement vault system for secure document handling',
      'Assign and track features within the software',
      'Create detailed process analysis and reporting',
    ],
    technologies: [
      'Jira (Feature and task tracking)',
      'Figma / Balsamiq (Wireframing & prototyping)',
      'Google Docs (Documentation)',
      'Vault system (Document version control and security)',
      'Slack / Email (Communication)',
    ],
    experience: [
      'Feature analysis and documentation',
      'Coordinate between product managers, developers, and QA',
      'Organize document vault and control access',
      'Report on feature progress and process improvements',
      'Ensure smooth communication flow among teams',
    ],
    document: [
      'Feature analysis reports',
      'Organized documentation in vault system',
      'Coordination reports on feature assignment and progress',
      'Wireframes and process flow documentation',
    ],
    scope: ['Feature coordination across software modules'],
    cloudDeployment: 'Internal Vault System (Private)',
    urls: [],
    teamMembers: [
      { name: 'JM (You)', role: 'Business Analyst / Feature Coordinator', icon: '🧑‍💼' },
      { name: 'Product Manager', role: 'Product Strategy Lead', icon: '📊' },
      { name: 'QA Analyst', role: 'Testing and Quality Assurance', icon: '🔍' },
      { name: 'Developer', role: 'Feature Development', icon: '💻' },
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
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
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

export default Project13;

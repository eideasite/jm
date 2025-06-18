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
      {
        name: 'JM (You)',
        role: 'Business Analyst / Feature Coordinator',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Feature analysis & coordination',
      },
      {
        name: 'Product Manager',
        role: 'Product Strategy Lead',
        icon: '📊',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Product strategy and planning',
      },
      {
        name: 'QA Analyst',
        role: 'Testing and Quality Assurance',
        icon: '🔍',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Quality control and testing',
      },
      {
        name: 'Developer',
        role: 'Feature Development',
        icon: '💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Software development',
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

        <Panel header="📘 Experience Gained" key="7">
          <ul style={ulStyle}>
            {project.experience.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📄 Documentation" key="8">
          <ul style={ulStyle}>
            {project.document.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📦 Project Scope" key="9">
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
          key="10"
        >
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        {project.urls.length > 0 && (
          <Panel
            header={
              <span>
                <LinkOutlined /> 🔗 URLs
              </span>
            }
            key="11"
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
        )}

        <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
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
                {(member.email && member.email !== 'N/A') && (
                  <Text>
                    Email: <Link href={`mailto:${member.email}`}>{member.email}</Link>
                  </Text>
                )}
                {(member.linkedin && member.linkedin !== 'N/A') && (
                  <Text>
                    LinkedIn: <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.linkedin}</Link>
                  </Text>
                )}
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project13;

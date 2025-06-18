import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  AppstoreOutlined,
  UserOutlined,
  ToolOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  LinkOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project5 = () => {
  const project = {
    name: 'Alli Bhavan – Mobile App & Web Admin Panel',
    country: 'United Kingdom (UK)',
    sector: 'Food Services / E-commerce Integration',
    client: ['Alli Bhavan'],
    role: ['Intern Business Analyst', 'QA Coordinator'],
    purpose:
      'Develop a food ordering system with mobile app and web admin panel fully integrated with Shopify for real-time operations.',
    technologies: [
      'Mobile App (Android/iOS)',
      'Web Admin Panel',
      'Shopify API Integration',
    ],
    experience: [
      'Stakeholder communication',
      'Documentation handling and QA coordination',
      'Bug-user flow documentation',
      'System explanation support to stakeholders',
    ],
    tools: ['Google Docs', 'Email', 'Screenshots', 'Testing Platforms'],
    document: [
      'Mobile & Web Feature Docs',
      'Bug Flow Notes',
      'QA Meeting Logs',
      'Client Presentation Slides (Internal – Company Protected Documents)',
    ],
    urls: [], // No public URLs
    teamMembers: [
      {
        name: 'Associate Mobile Developer',
        role: 'Mobile App Development',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Android / iOS',
      },
      {
        name: 'Senior Backend Developer',
        role: 'API & Admin Panel Setup',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Shopify API, Web Admin',
      },
      {
        name: 'JM (You)',
        role: 'Documentation, QA Coordination',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Documentation, QA Tools',
      },
      {
        name: 'Imasha',
        role: 'Testing, Verification',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Testing Tools',
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
          <Text
            strong
            style={{
              fontSize: 16,
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
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
            <li>{project.sector}</li>
          </ul>
        </Panel>

        <Panel header="🏢 Client" key="3">
          <ul style={ulStyle}>
            {project.client.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🔧 Role" key="4">
          <ul style={ulStyle}>
            {project.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🎯 Purpose" key="5">
          <Text>{project.purpose}</Text>
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

        <Panel header="🛠 Tools Used" key="8">
          <ul style={ulStyle}>
            {project.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
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

        <Panel header="🔗 Project Link" key="10">
          <ul style={ulStyle}>
            {project.urls.length === 0 ? (
              <li>N/A</li>
            ) : (
              project.urls.map((url, i) => (
                <li key={i}>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="11">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  flexWrap: 'wrap',
                }}
              >
                <TeamOutlined />
                <Text
                  style={{
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                  }}
                >
                  {member.name}
                </Text>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="💼 Job Role" key="12">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.role}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🧪 Technology" key="13">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.technology}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🔗 LinkedIn" key="14">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>
                {member.linkedin !== 'N/A' ? (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.linkedin}
                  </Link>
                ) : (
                  'N/A'
                )}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="✉️ Email" key="15">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>
                {member.email !== 'N/A' ? (
                  <Link href={`mailto:${member.email}`}>{member.email}</Link>
                ) : (
                  'N/A'
                )}
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project5;

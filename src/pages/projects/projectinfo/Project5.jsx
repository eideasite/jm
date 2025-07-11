import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

// 🔧 List rendering helper
const renderList = (items = []) =>
  items.map((item, i) => <li key={`item-${i}`}>{item}</li>);

// 👤 Team member rendering helper
const renderTeamInfo = (members = []) =>
  members.map((member, i) => (
    <li key={`member-${i}`} style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <TeamOutlined />
      <Text>{member.name}</Text>
    </li>
  ));

const Project5 = () => {
  const project = {
    name: 'Alli Bhavan – Mobile App & Web Admin Panel',
    country: 'United Kingdom (UK)',
    sector: 'Food Services / E-commerce Integration',
    client: ['Alli Bhavan'],
    role: ['Intern Business Analyst', 'QA Coordinator'],
    purpose:
      'Develop a food ordering system with mobile app and web admin panel fully integrated with Shopify for real-time operations.',
    technologies: ['Mobile App (Android/iOS)', 'Web Admin Panel', 'Shopify API Integration'],
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
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ marginTop: 3 }} />
          <Text strong style={{ fontSize: 16 }}>{project.name}</Text>
        </div>
      }
    >
      <Collapse accordion>
        <Panel header="🌍 Country" key="1">
          <ul style={ulStyle}>{renderList([project.country])}</ul>
        </Panel>

        <Panel header="💻 Sector" key="2">
          <ul style={ulStyle}>{renderList([project.sector])}</ul>
        </Panel>

        <Panel header="🏢 Client" key="3">
          <ul style={ulStyle}>{renderList(project.client)}</ul>
        </Panel>

        <Panel header="🔧 Role" key="4">
          <ul style={ulStyle}>{renderList(project.role)}</ul>
        </Panel>

        <Panel header="🎯 Purpose" key="5">
          <ul style={ulStyle}>{renderList([project.purpose])}</ul>
        </Panel>

        <Panel header="🧪 Key Technologies Used" key="6">
          <ul style={ulStyle}>{renderList(project.technologies)}</ul>
        </Panel>

        <Panel header="📘 Experience Gained" key="7">
          <ul style={ulStyle}>{renderList(project.experience)}</ul>
        </Panel>

        <Panel header="🛠 Tools Used" key="8">
          <ul style={ulStyle}>{renderList(project.tools)}</ul>
        </Panel>

        <Panel header="📄 Documentation" key="9">
          <ul style={ulStyle}>{renderList(project.document)}</ul>
        </Panel>

        <Panel header="🔗 Project Link" key="10">
          <ul style={ulStyle}>
            {project.urls.length === 0 ? (
              <li>N/A</li>
            ) : (
              project.urls.map((url, i) => (
                <li key={`url-${i}`}>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="11">
          <ul style={ulStyle}>{renderTeamInfo(project.teamMembers)}</ul>
        </Panel>

        <Panel header="💼 Job Role" key="12">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.role))}</ul>
        </Panel>

        <Panel header="🧪 Technology" key="13">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.technology))}</ul>
        </Panel>

        <Panel header="🔗 LinkedIn" key="14">
          <ul style={ulStyle}>
            {project.teamMembers.map((m, i) => (
              <li key={`linkedin-${i}`}>
                {m.linkedin !== 'N/A' ? (
                  <Link href={m.linkedin} target="_blank" rel="noopener noreferrer">
                    {m.linkedin}
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
            {project.teamMembers.map((m, i) => (
              <li key={`email-${i}`}>
                {m.email !== 'N/A' ? (
                  <Link href={`mailto:${m.email}`}>{m.email}</Link>
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

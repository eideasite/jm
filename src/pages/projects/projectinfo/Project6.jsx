import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

// 🔁 Utility for list panels
const renderList = (items = []) =>
  items.map((item, i) => <li key={`item-${i}`}>{item}</li>);

// 👤 Utility for team member details
const renderTeamMemberInfo = (members = []) =>
  members.map((member, i) => (
    <li
      key={`member-${i}`}
      style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}
    >
      <TeamOutlined />
      <Text style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{member.name}</Text>
    </li>
  ));

const Project6 = () => {
  const project = {
    name: 'Sports Management System',
    country: 'Australia',
    sector: 'Sports Management',
    client: ['Domain Client (statscout.au.com)'],
    role: ['Intern Business Analyst', 'Coordinator / Project Manager Sprint Planner'],
    purpose: ['Sports Management website and system'],
    technologies: ['MVC', 'API', '.NET', 'C# (Web)'],
    experience: [
      'Requirement analysis',
      'Developer documentation',
      'Stakeholder communication',
      'Cloud deployment (AWS Elastic Beanstalk)',
      'Project coordination',
      'Wireframe creation',
    ],
    tools: ['Balsamiq', 'Google Docs', 'Microsoft Teams', 'Draw.io'],
    document: [
      'Software documentation, client email, communication, presentation, and confirmation reports',
    ],
    scope:
      'Sports club system: club, coach, team, player communication; player, club, coach registration; admin & parent verification, chat, email integration; scalable app design',
    cloudDeployment: 'AWS Elastic Beanstalk',
    teamMembers: [
      {
        name: 'Krishnarajah Thusanthan',
        role: 'Full Stack Developer',
        linkedin:
          'https://www.linkedin.com/in/thusanthan-krishnarajah',
        email: 'N/A',
        technology: 'N/A',
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
          <ul style={ulStyle}>{renderList(project.purpose)}</ul>
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

        <Panel header="📦 Project Scope" key="10">
          <Text>{project.scope}</Text>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
          <ul style={ulStyle}>{renderTeamMemberInfo(project.teamMembers)}</ul>
        </Panel>

        <Panel header="💼 Job Role" key="13">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.role))}</ul>
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

        <Panel header="🧪 Technology" key="16">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.technology))}</ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project6;

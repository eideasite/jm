import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

// 🔧 Helper to render list items
const renderList = (items = [], prefix = 'item') =>
  items.map((item, i) => <li key={`${prefix}-${i}`}>{item}</li>);

// 👥 Helper to render team info
const renderTeam = (members = []) =>
  members.map((member, i) => (
    <li key={`member-${i}`} style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <TeamOutlined />
      <Text style={{ wordBreak: 'break-word' }}>{member.name}</Text>
    </li>
  ));

const Project9 = () => {
  const project = {
    name: 'Bloo (Blood Bank System)',
    country: 'Malaysia',
    sector: 'Healthcare / IT Solution',
    client: ['PFI (Private Funded Initiative)'],
    role: ['Proposal Workflow Designer', 'Documentation Lead'],
    purpose:
      'To digitize the manual blood bank process into a fully automated, user-engaging system with donor tracking, scoring, and reminders.',
    technologies: [
      'Balsamiq (Prototype)',
      'Canva (Presentation)',
      'Google Docs (Documentation)',
    ],
    experience: [
      'Requirement gathering',
      'Stakeholder communication',
      'System proposal drafting',
      'Donor feature planning',
      'Early-stage workflow automation',
    ],
    tools: ['Gmail', 'Google Docs', 'Canva', 'Balsamiq'],
    document: [
      'Workflow Drafts',
      'Requirement Notes',
      'Presentation Slides',
      'Proposal Documentation',
      'Feature List Sheets',
    ],
    scope:
      'Manual blood bank flow converted into an automated digital system. Designed for mobile and web platforms (App + Admin Panel). Focused on user engagement and operational ease.',
    teamMembers: [
      {
        name: 'Company Director',
        role: 'Decision Maker / Approver',
        technology: '',
      },
      {
        name: 'Senior Backend Developer',
        role: 'Technical Consultant',
        technology: '',
      },
      {
        name: 'PFI Client',
        role: 'Proposal Reviewer / Funder',
        technology: '',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
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
          <Text>{project.purpose}</Text>
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

        <Panel header="🧑‍🤝‍🧑 Team Members" key="11">
          <ul style={ulStyle}>{renderTeam(project.teamMembers)}</ul>
        </Panel>

        <Panel header="💼 Job Role" key="12">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.role))}</ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project9;

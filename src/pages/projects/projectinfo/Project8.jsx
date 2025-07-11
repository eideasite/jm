import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

// 🔧 Reusable list renderer
const renderList = (items = [], prefix = 'item') =>
  items.map((item, i) => <li key={`${prefix}-${i}`}>{item}</li>);

// 👥 Reusable team member renderer
const renderTeam = (members = []) =>
  members.map((member, i) => (
    <li key={`member-${i}`} style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <TeamOutlined />
      <Text style={{ wordBreak: 'break-word' }}>{member.name}</Text>
    </li>
  ));

const Project8 = () => {
  const project = {
    name: 'Sabah State Water Management System – Mobile App & Dashboard Redesign',
    country: 'Malaysia',
    sector: 'Public Utilities / Government Service (Water Management)',
    client: ['Sabah State Water Department'],
    role: ['Junior Business Analyst', 'UI/UX Coordination Lead'],
    purpose:
      'To identify weaknesses in the current mobile app and dashboard, gather stakeholder requirements, and redesign the UI/UX for improved user experience and functionality—focusing especially on the Registered Plumber section.',
    technologies: ['Figma', 'Mobile UI Frameworks', 'Web UI Components'],
    experience: [
      'Requirement gathering and stakeholder communication',
      'Analyzing existing system flow',
      'Figma wireframing and prototyping',
      'Coordinating UI/UX improvements',
      'Delivering presentations and documentation to stakeholders',
    ],
    tools: ['Figma', 'Google Docs', 'Gmail', 'Canva', 'Presentation Tools'],
    document: [
      'UI/UX Proposal',
      'Wireframes',
      'Figma Prototypes',
      'User Flow Documentation',
      'Presentation Slides',
    ],
    scope:
      'Mobile app and dashboard UI analysis, Feature planning and redesign, Collaboration with UX/UI and development teams, Presentation of wireframes and user flows, Registered Plumber section enhancement',
    cloudDeployment: 'Not deployed – Design and proposal phase (Internal Review)',
    urls: ['https://water.sabah.gov.my/'],
    teamMembers: [
      {
        name: 'JM (You)',
        role: 'Junior Business Analyst / UI UX Coordination',
        technology: 'Business Analysis, UI/UX Coordination',
      },
      {
        name: 'Director',
        role: 'Project Stakeholder (Feedback & Approval)',
        technology: 'Project Oversight',
      },
      {
        name: 'UX/UI Team',
        role: 'Figma and Wireframe Designers',
        technology: 'UI/UX Design',
      },
      {
        name: 'Development Team',
        role: 'Web & Mobile Implementation Team (Internal)',
        technology: 'Web & Mobile Development',
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
          <Text>{project.scope || 'N/A'}</Text>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment || 'N/A'}</Text>
        </Panel>

        <Panel header="🔗 URLs" key="12">
          <ul style={ulStyle}>
            {project.urls.length ? (
              project.urls.map((url, i) => (
                <li key={`url-${i}`}>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="13">
          <ul style={ulStyle}>{renderTeam(project.teamMembers)}</ul>
        </Panel>

        <Panel header="💼 Job Role" key="14">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.role))}</ul>
        </Panel>

        <Panel header="🔧 Technologies Used by Team" key="15">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.technology))}</ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project8;

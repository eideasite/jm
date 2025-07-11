import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

// 🔧 List renderer
const renderList = (items = [], prefix = 'item') =>
  items.map((item, i) => <li key={`${prefix}-${i}`}>{item}</li>);

// 👥 Team info renderer
const renderTeam = (members = []) =>
  members.map((member, i) => (
    <li
      key={`member-${i}`}
      style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}
    >
      <TeamOutlined />
      <Text style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
        {member.name}
      </Text>
    </li>
  ));

const Project7 = () => {
  const project = {
    name: 'BPH – Bridge Park Hotel London',
    country: 'UK',
    sector: 'Hotel Services / Web Development',
    client: ['Bridge Park Hotel'],
    role: ['Junior Business Analyst', 'Intern Project Coordinator'],
    purpose: [
      'Client requirement gathering',
      'Siteminder technology documentation',
      'Stakeholder engagement and coordination',
      'Booking engine integration',
      'Developer coordination and project leadership',
      'Client communication from development to deployment',
      'UI/UX enhancement using Figma',
      'Backlog grooming and sprint planning',
      'Team coordination and project tracking'
    ],
    technologies: ['ReactJS', 'JavaScript', 'Figma', 'Stripe', 'Siteminder'],
    experience: [
      'UI/UX enhancement using Figma',
      'Stakeholder communication and requirement gathering',
      'Backlog grooming and sprint planning',
      'Team coordination and project tracking'
    ],
    tools: ['Figma', 'Jira', 'Slack', 'Zoom'],
    document: [
      'Project documentation',
      'Wireframes',
      'Stakeholder emails',
      'Sprint reports'
    ],
    scope: '',
    cloudDeployment: '',
    teamMembers: [
      {
        name: 'Thulirshan Kumaravel',
        role: 'React Developer',
        linkedin: 'https://www.linkedin.com/in/thulirshan-kumaravel-a236b1207/',
        email: 'N/A',
        technology: 'ReactJS, JavaScript'
      },
      {
        name: 'Fathima Farhana',
        role: 'Back-End Developer',
        linkedin: 'https://www.linkedin.com/in/fathima-farhana-316212248/',
        email: 'N/A',
        technology: 'Node.js, Express'
      },
      {
        name: 'Thanusiyanthan V. (Thanu)',
        role: 'Project Coordinator',
        linkedin: 'https://www.linkedin.com/in/thanusiyanthan28',
        email: 'svthanusiyanthan@gmail.com',
        technology: 'Project Management'
      },
      {
        name: 'Dussanthan Manoharan (Dhusa)',
        role: 'Developer',
        linkedin: 'N/A',
        email: 'N/A',
        technology: 'Full Stack Development'
      },
      {
        name: 'Radhika Nanayakkara',
        role: 'Developer',
        linkedin: 'https://www.linkedin.com/in/radhika-sewwandi',
        email: 'radhikasewwandi071@gmail.com',
        technology: 'Frontend Development'
      }
    ]
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
          <Text>{project.scope || 'N/A'}</Text>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment || 'N/A'}</Text>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
          <ul style={ulStyle}>{renderTeam(project.teamMembers)}</ul>
        </Panel>

        <Panel header="💼 Job Role" key="13">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.role))}</ul>
        </Panel>

        <Panel header="🔧 Technologies Used by Team" key="14">
          <ul style={ulStyle}>{renderList(project.teamMembers.map(m => m.technology))}</ul>
        </Panel>

        <Panel header="🔗 LinkedIn" key="15">
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

        <Panel header="✉️ Email" key="16">
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

export default Project7;

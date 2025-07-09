import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project6 = () => {
  const project = {
    name: 'Sports Management System',
    country: 'Australia', // line ~10
    sector: 'Sports Management', // line ~11
    client: ['Domain Client (statscout.au.com)'], // line ~12
    role: ['Intern Business Analyst', 'Coordinator / Project Manager Sprint Planner'], // line ~13
    purpose: 'Sports Management website and system', // line ~14
    technologies: ['MVC', 'API', '.NET', 'C# (Web)'], // line ~15
    experience: [
      'Requirement analysis',
      'Developer documentation',
      'Stakeholder communication',
      'Cloud deployment (AWS Elastic Beanstalk)',
      'Project coordination',
      'Wireframe creation',
    ], // line ~16-22
    tools: ['Balsamiq', 'Google Docs', 'Microsoft Teams', 'Draw.io'], // line ~23
    document: [
      'Software documentation, client email, communication, presentation, and confirmation reports',
    ], // line ~24
    scope: 'Sports club system: club, coach, team, player communication; player, club, coach registration; admin & parent verification, chat, email integration; scalable app design', // line ~25
    cloudDeployment: 'AWS Elastic Beanstalk', // line ~26
    teamMembers: [
      {
        name: 'Krishnarajah Thusanthan', // line ~27
        role: 'Full Stack Developer', // line ~28
        linkedin: 'https://www.linkedin.com/in/thusanthan-krishnarajah?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaV0dOo1LRgSUixfo438fzA%3D%3D', // line ~29
        email: 'N/A', // line ~30
        technology: 'N/A', // line ~31
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
  <ul style={ulStyle}>
    {project.purpose.map((r, i) => (
      <li key={i}>{r}</li>
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

        <Panel header="📦 Project Scope" key="10">
          <Text>{project.scope}</Text>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
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

        <Panel header="💼 Job Role" key="13">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.role}</li>
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

        <Panel header="🧪 Technology" key="16">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.technology}</li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project6;

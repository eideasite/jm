import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project7 = () => {
  const project = {
    name: 'BPH – Bridge Park Hotel London',       // ~line 10
    country: 'UK',                                 // ~line 11
    sector: 'Hotel Services / Web Development',   // ~line 12
    client: ['Bridge Park Hotel'],                 // ~line 13
    role: ['Junior Business Analyst', 'Intern Project Coordinator'], // ~line 14
    purpose:
      'UI/UX enhancement, backlog grooming, stakeholder communication, team coordination', // ~line 15
    technologies: ['ReactJS', 'JavaScript', 'Figma', 'Stripe', 'Siteminder'], // ~line 16
    experience: [
      'UI/UX enhancement using Figma',
      'Stakeholder communication and requirement gathering',
      'Backlog grooming and sprint planning',
      'Team coordination and project tracking',
    ],                                              // ~line 17-21
    tools: ['Figma', 'Jira', 'Slack', 'Zoom'],     // ~line 22
    document: [
      'Project documentation',
      'Wireframes',
      'Stakeholder emails',
      'Sprint reports',
    ],                                              // ~line 23
    scope:
      '',  // No explicit scope given; can omit or keep blank ~line 24
    cloudDeployment: '',                             // No cloud info provided ~line 25
    teamMembers: [                                   // ~line 26-?
      {
        name: 'Thulirshan Kumaravel',
        role: 'React Developer',
        linkedin: 'https://www.linkedin.com/in/thulirshan-kumaravel-a236b1207/',
        email: 'N/A',
        technology: 'ReactJS, JavaScript',
      },
      {
        name: 'Fathima Farhana',
        role: 'Back-End Developer',
        linkedin: 'https://www.linkedin.com/in/fathima-farhana-316212248/',
        email: 'N/A',
        technology: 'Node.js, Express',
      },
      {
        name: 'Thanusiyanthan V. (Thanu)',
        role: 'Project Coordinator',
        linkedin: 'https://www.linkedin.com/in/thanusiyanthan28',
        email: 'svthanusiyanthan@gmail.com',
        technology: 'Project Management',
      },
      {
        name: 'Dussanthan Manoharan (Dhusa)',
        role: 'Developer',
        linkedin: 'N/A',
        email: 'N/A',
        technology: 'Full Stack Development',
      },
      {
        name: 'Radhika Nanayakkara',
        role: 'Developer',
        linkedin: 'https://www.linkedin.com/in/radhika-sewwandi',
        email: 'radhikasewwandi071@gmail.com',
        technology: 'Frontend Development',
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

        <Panel header="📦 Project Scope" key="10">
          <Text>{project.scope || 'N/A'}</Text>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment || 'N/A'}</Text>
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

        <Panel header="🔧 Technologies Used by Team" key="14">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.technology}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🔗 LinkedIn" key="15">
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

        <Panel header="✉️ Email" key="16">
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

export default Project7;

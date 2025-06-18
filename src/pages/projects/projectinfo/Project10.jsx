import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project10 = () => {
  const project = {
    name: 'IYCONNECT – Help Desk UI Improvements',
    country: 'United Kingdom (UK)',
    sector: 'Internal Product / Customer Support Interface',
    client: ['IYCONNECT (Own Product)'],
    role: ['Intern Business Analyst', 'UI Improvement Coordinator'],
    purpose:
      'To enhance the user interface of the Help Desk module by analyzing the existing UI and proposing improved layouts and flows for better user experience.',
    technologies: ['UI Wireframing', 'Prototyping Tools'],
    experience: [
      'UI analysis',
      'Wireframe creation',
      'Prototype presentation',
      'Stakeholder requirement handling',
      'Direct appreciation from leadership ("Good Work")',
    ],
    tools: ['Wireframing Tools', 'Prototyping Software', 'Google Docs'],
    document: [
      'UI Suggestions Document',
      'Task Board (To Do / In Progress)',
      'Wireframes',
      'Prototype Screens',
    ],
    scope:
      'Focused UI enhancement of internal Help Desk module. Improvements included layout clarity, flow optimization, and task progress alignment with stakeholder goals.',
    teamMembers: [
      {
        name: 'Senior Backend Developer',
        role: 'Technical Guidance & Integration',
      },
      {
        name: 'Associate Mobile Developer',
        role: 'App-side UI Adjustment',
      },
      {
        name: 'JM (You)',
        role: 'BA / UI Improvement Lead',
      },
      {
        name: 'Director',
        role: 'Project Approval & Feedback ("Good Work")',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
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
          <Text>{project.scope}</Text>
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
                <Text style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
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
      </Collapse>
    </Card>
  );
};

export default Project10;

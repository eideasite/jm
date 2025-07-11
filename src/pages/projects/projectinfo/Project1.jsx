import React from 'react';
import {
  Card,
  Typography,
  Collapse,
} from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const Project1 = () => {
  const project = {
    name: 'Website WordPress Plugin Enhancement',
    country: 'UK (Remote)',
    sector: 'Web Development / IT',
    client: ['From IYKONS'],
    role: ['Web Developer', 'IT Team Member', 'Beginner'],
purpose: [
  'Website modernization',
  'Plugin enhancements',
  'Focus on UX and performance improvements',
],

    technologies: ['WordPress', 'Plugins', 'cPanel'],
    tools: ['WordPress Admin', 'Google Docs', 'Plugin Repositories', 'Theme Customizer'],
    experience: [
      'Beginner web technology learning',
      'Plugin usage',
      'UX improvements',
      'cPanel handling',
    ],
    document: ['WordPress Web Journey & UX Upgrade Report'],
    scope: [
      'Improved WordPress plugin configurations',
      'Theme customization updates',
      'UX refinement for public visitors',
    ],
    cloudDeployment: 'Shared Hosting (cPanel)',
    urls: [
      'https://gatesinstitute.org',
      'https://iykons.com',
      'https://singambay.co.uk',
      'https://www.flavoursfoods.co.uk',
    ],
    teamMembers: [
      {
        name: 'Sathiyaseelan Sajeenthiran',
        role: 'Mobile App Developer, Team Coordinator',
        icon: '📱',
        email: 'sasajeenthiran@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sathiyaseelan-sajeenthiran-42566aaa',
        technology: 'Flutter (iOS / Android)',
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
          <ul><li>{project.country}</li></ul>
        </Panel>

        <Panel header="💻 Sector" key="2">
          <ul><li>{project.sector}</li></ul>
        </Panel>

        <Panel header="🏢 Client" key="3">
          <ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </Panel>

        <Panel header="🔧 Role" key="4">
          <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
        </Panel>

<Panel header="🎯 Purpose" key="5">
  <ul>
    {project.purpose.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</Panel>


        <Panel header="🧪 Key Technologies Used" key="6">
          <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
        </Panel>

        <Panel header="📘 Experience Gained" key="7">
          <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
        </Panel>

        <Panel header="🛠 Tools Used" key="8">
          <ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
        </Panel>

        <Panel header="📄 Documentation" key="9">
          <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
        </Panel>

        <Panel header="📦 Project Scope" key="10">
          <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Panel>

        <Panel header="☁️ Cloud Deployment" key="11">
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel header="🔗 URLs" key="12">
          <ul>
            {project.urls.map((url, i) => (
              <li key={i}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="🧑‍🤝‍🧑 Team Members" key="13">
          <ul>
            {project.teamMembers.map((member, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <TeamOutlined style={{ marginRight: 6 }} />
                <Text>{member.name} ({member.icon})</Text>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="💼 Job Role" key="14">
          <ul>{project.teamMembers.map((member, i) => <li key={i}>– {member.role}</li>)}</ul>
        </Panel>

        <Panel header="🔗 LinkedIn" key="15">
          <ul>{project.teamMembers.map((member, i) => (
            <li key={i}>
              {member.linkedin !== 'N/A' ? (
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  {member.linkedin}
                </Link>
              ) : 'N/A'}
            </li>
          ))}</ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project1;

import React from 'react';
import { Card, Typography, Collapse, Divider } from 'antd';
import { ProjectOutlined, TeamOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const Project1 = () => {
  const project = {
    name: 'Website WordPress Plugin Enhancement',
    country: 'UK (Remote)',
    sector: 'Web Development / IT',
    client: ['From IYKONS'],
    role: ['Web Developer', 'IT Team Member', 'Beginner'],
    purpose: 'Website modernization and plugin enhancements',
    technologies: ['WordPress', 'Plugins', 'cPanel'],
    experience: [
      'Beginner web technology learning',
      'Plugin usage',
      'UX improvements',
      'cPanel handling',
    ],
    tools: ['WordPress Admin', 'Google Docs', 'Plugin Repositories', 'Theme Customizer'],
    document: 'WordPress Web Journey & UX Upgrade Report',
    url: {
      label: 'Project Links',
      links: [
        'https://gatesinstitute.org',
        'https://iykons.com',
        'https://singambay.co.uk',
        'https://www.flavoursfoods.co.uk',
      ],
    },
    teamMembers: [
      {
        name: 'Sathiyaseelan Sajeenthiran',
        role: 'Mobile App Developer, Team Coordinator',
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
      style={{
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: 24,
      }}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ fontSize: 18 }} />
          <Text strong style={{ fontSize: 18, wordBreak: 'break-word', margin: 0 }}>
            {project.name}
          </Text>
        </div>
      }
    >
      {/* General Project Info */}
      <Collapse
        ghost
        bordered={false}
        expandIconPosition="end"
      >
        <Panel header="🌍 Country" key="country">
          <ul>
            <li>{project.country}</li>
          </ul>
        </Panel>
        <Panel header="💻 Sector" key="sector">
          <ul>
            <li>{project.sector}</li>
          </ul>
        </Panel>
        <Panel header="🏢 Client" key="client">
          <ul>
            {project.client.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="🔧 Role" key="role">
          <ul>
            {project.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="🎯 Purpose" key="purpose">
          <Text>{project.purpose}</Text>
        </Panel>
      </Collapse>

      <Divider style={{ margin: '16px 0' }} />

      {/* Technical Info */}
      <Collapse
        ghost
        bordered={false}
        expandIconPosition="end"
      >
        <Panel header="🔧 Key Technologies Used" key="technologies">
          <ul>
            {project.technologies.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="📘 Experience Gained" key="experience">
          <ul>
            {project.experience.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="🛠 Tools Used" key="tools">
          <ul>
            {project.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="📄 Documentation" key="documentation">
          <Text>{project.document}</Text>
        </Panel>
        <Panel header="🔗 Project Links" key="links">
          <ul>
            {project.url.links.map((link, index) => (
              <li key={index}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>

      <Divider dashed style={{ margin: '16px 0' }} />

      {/* Team Info */}
      <Collapse
        ghost
        bordered={false}
        expandIconPosition="end"
      >
        <Panel header="🧑‍🤝‍🧑 Team Member" key="members">
          <ul>
            {project.teamMembers.map((member, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <TeamOutlined />
                {member.name}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel header="💼 Job Role" key="roles">
          <ul>
            {project.teamMembers.map((m, i) => (
              <li key={i}>{m.role}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="🧰 Technology" key="technology">
          <ul>
            {project.teamMembers.map((m, i) => (
              <li key={i}>{m.technology}</li>
            ))}
          </ul>
        </Panel>
        <Panel header="🔗 LinkedIn" key="linkedin">
          <ul>
            {project.teamMembers.map((m, i) => (
              <li key={i}>
                <Link href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  {m.linkedin}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel header="✉️ Email" key="email">
          <ul>
            {project.teamMembers.map((m, i) => (
              <li key={i}>
                <Link href={`mailto:${m.email}`}>{m.email}</Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project1;

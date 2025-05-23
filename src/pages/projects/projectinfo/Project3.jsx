import React from 'react';
import {
  Card,
  Typography,
  Space,
  Collapse,
  Divider,
} from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const Project3 = () => {
  const project = {
    name: 'Financial System Application',
    country: 'Colombo (On-site)',
    sector: 'Web Development / Software Industry',
    client: ['IYKONS (Own Product)'],
    role: ['Intern Front End Developer'],
    purpose: 'Financial System Application',
    technologies: ['JavaScript', 'ReactJS', 'TypeScript', 'API', 'React Framework (Front End)', '.NET API (Back End)'],
    experience: ['Learned front-end structure in a proper IT industry setup'],
    tools: [
      'Visual Studio Code',
      'API Documentation',
      'Linux',
      'Git',
      'GitHub',
      'Jira',
      'React Framework',
      'Slack',
    ],
    document: 'API Documentation from Backend Team',
    url: {
      label: 'New & Old URL',
      links: [
        'https://iyconnect.iykons.com/',
        'https://iyk.iykons.com/',
      ],
    },
    teamMembers: [
      {
        name: 'Shihara Molligoda',
        role: 'Operations / Project Manager',
        icon: '📋',
        email: '',
        linkedin: '',
        technology: '',
      },
      {
        name: 'Ashan Perera',
        role: 'Full-Stack Software Engineer',
        icon: '🧠',
        email: '',
        linkedin: 'https://www.linkedin.com/in/ashan-perera-31543257',
        technology: '',
      },
      {
        name: 'Anojan',
        role: 'Senior Front End Developer',
        icon: '💼',
        email: '',
        linkedin: '',
        technology: '',
      },
      {
        name: 'THULIRSHAN KUMARAVEL',
        role: 'Intern Team Member',
        icon: '👨‍💻',
        email: '',
        linkedin: 'https://www.linkedin.com/in/thulirshan-kumaravel-a236b1207',
        technology: '',
      },
      {
        name: 'Sri Sanujan',
        role: 'Intern Team Member',
        icon: '👨‍💻',
        email: '',
        linkedin: 'https://www.linkedin.com/in/sri-sanujan',
        technology: '',
      },
      {
        name: 'Elakkiya Selvathasan',
        role: 'Intern Team Member',
        icon: '👩‍💻',
        email: '',
        linkedin: 'https://www.linkedin.com/in/elakkiya-selvathasan-6883751a7',
        technology: '',
      },
    ],
  };

  const ulStyle = { paddingLeft: 20, margin: 0 };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined />
          <Text strong style={{ fontSize: '16px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Collapse ghost bordered={false}>
          <Panel header="🌍 Country" key="1">
            <ul style={ulStyle}><li>{project.country}</li></ul>
          </Panel>
          <Panel header="💻 Sector" key="2">
            <ul style={ulStyle}><li>{project.sector}</li></ul>
          </Panel>
          <Panel header="🏢 Client" key="3">
            <ul style={ulStyle}>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </Panel>
          <Panel header="🔧 Role" key="4">
            <ul style={ulStyle}>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </Panel>
          <Panel header="🎯 Purpose" key="5">
            <Text>{project.purpose}</Text>
          </Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        <Collapse ghost bordered={false}>
          <Panel header="🧪 Key Technologies Used" key="6">
            <ul style={ulStyle}>{project.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Panel>
          <Panel header="📘 Experience Gained" key="7">
            <ul style={ulStyle}>{project.experience.map((e, i) => <li key={i}>{e}</li>)}</ul>
          </Panel>
          <Panel header="🛠 Tools Used" key="8">
            <ul style={ulStyle}>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
          </Panel>
          <Panel header="📄 Documentation" key="9">
            <Text>{project.document}</Text>
          </Panel>
          <Panel header="🔗 Project Link" key="10">
            <ul style={ulStyle}>
              {project.url.links.map((link, i) => (
                <li key={i}>
                  <Link href={link} target="_blank" rel="noopener noreferrer">{link}</Link>
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="11">
            <ul style={ulStyle}>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <TeamOutlined style={{ marginRight: 6 }} />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header="💼 Job Role" key="12">
            <ul style={ulStyle}>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>
          <Panel header="🔗 LinkedIn" key="14">
            <ul style={ulStyle}>
              {project.teamMembers.filter(m => m.linkedin).map((member, i) => (
                <li key={i}>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    {member.linkedin}
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header="✉️ Email" key="15">
            <ul style={ulStyle}>
              {project.teamMembers.filter(m => m.email).map((member, i) => (
                <li key={i}>
                  <Link href={`mailto:${member.email}`}>{member.email}</Link>
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project3;

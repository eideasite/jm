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

const Project2 = () => {
  const project = {
    name: 'Online Job Recruitment System',
    country: 'UK Based (Remote)',
    sector: 'Web Development',
    client: ['IYKONS Clients'],
    role: ['Intern Back End Developer (JM)'],
    purpose: 'Job Profile System for Internal Staffs',
    technologies: ['.NET API', 'Entity Framework Core', 'C#'],
    experience: ['Learned back-end structure in web development'],
    tools: ['Visual Studio', 'MS SQL Server'],
    document: 'Online Job Recruitment System from (BA)',
    url: {
      label: 'Project Link',
      links: ['https://iykons.com/onlinejobrecruitment.com'],
    },
    teamMembers: [
      {
        name: 'Sathiyaseelan Sajeenthiran',
        role: 'Team Coordinator & Mobile App Developer',
        icon: '📱',
        email: 'sasajeenthiran@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sathiyaseelan-sajeenthiran-42566aaa',
        technology: '.NET API, C#, Entity Core',
      },
      {
        name: 'Thulirshan Kumaravel',
        role: 'Intern Backend Developer',
        icon: '💻',
        email: '1998thulir@gmail.com',
        linkedin: 'https://www.linkedin.com/in/thulirshan-kumaravel-a236b1207',
        technology: '.NET API, C#, Entity Core',
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
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ marginTop: 3 }} />
          <Text strong style={{ fontSize: 16, whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Info Panels */}
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

        {/* Technical Details */}
        <Collapse ghost bordered={false}>
          <Panel header="🔧 Key Technologies Used" key="6">
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

        <Divider dashed style={{ margin: '1px 0' }} />

        {/* Team Details */}
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

          <Panel header="🧪 Technology" key="13">
            <ul style={ulStyle}>
              {project.teamMembers.map((member, i) => (
                <li key={i}>{member.technology}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="14">
            <ul style={ulStyle}>
              {project.teamMembers.map((member, i) => (
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
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <Link href={`mailto:${member.email}`}>
                    {member.email}
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project2;

import React from 'react';
import {
  Card,
  Typography,
  Space,
  Collapse,
  Avatar,
  Divider,
} from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

const Project1 = () => {
  const project = {
    name: 'Website WordPress Plugin Enhancement ',
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
        'https://www.flavoursfoods.co.uk'
      ]
    },
    teamMembers: [
      {
        name: 'Sathiyaseelan Sajeenthiran',
        role: 'Mobile App Developer, Team Coordinator',
        email: 'sasajeenthiran@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sathiyaseelan-sajeenthiran-42566aaa',
        technology: 'Flutter (iOS / Android)',
      }
    ]
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ color: '#13c2c2', marginTop: 3 }} />
          <Text
            strong
            style={{
              fontSize: '16px',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            {project.name}
          </Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Info Panels */}
        <Collapse ghost bordered={false} style={{ backgroundColor: 'transparent' }}>
          <Panel header="🌍 Country" key="1">
            <ul>
              <li>{project.country}</li>
            </ul>
          </Panel>
          <Panel header="💻 Sector" key="2">
            <ul>
              <li>{project.sector}</li>
            </ul>
          </Panel>
          <Panel header="🏢 Client" key="3">
            <ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </Panel>
          <Panel header="🔧 Role" key="4">
            <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </Panel>
          <Panel header="🎯 Purpose" key="5">
            <Text>{project.purpose}</Text>
          </Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />
        <Collapse ghost bordered={false} style={{ backgroundColor: 'transparent' }}>
          <Panel header="🔧 Key Technologies Used" key="6">
            <ul>{project.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Panel>
          <Panel header="📘 Experience Gained" key="7">
            <ul>{project.experience.map((e, i) => <li key={i}>{e}</li>)}</ul>
          </Panel>
          <Panel header="🛠 Tools Used" key="8">
            <ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
          </Panel>
          <Panel header="📄 Documentation" key="9">
            <Text>{project.document}</Text>
          </Panel>
          <Panel header="🔗 Project Links" key="10">
            <ul style={{ paddingLeft: '20px' }}>
              {project.url.links.map((link, index) => (
                <li key={index}>
                  <Typography.Link href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </Typography.Link>
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>


        <Divider dashed style={{ margin: '1px 0' }} />
        {/* Team Member Section */}

        <Collapse ghost bordered={false} style={{ backgroundColor: 'transparent' }}>

          <Panel header="🧑‍🤝‍🧑 Team Member" key="6">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <TeamOutlined style={{ color: '#1890ff' }} />
                  {member.name}
                </li>
              ))}
            </ul>
          </Panel>


          <Panel header="💼 Job Role" key="7">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <Text style={{ fontSize: '13px' }}>{member.role}</Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="🧰 Technology" key="8">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>{member.technology}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="9">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <Typography.Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    {member.linkedin}
                  </Typography.Link>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="✉️ Email" key="10">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <Typography.Link href={`mailto:${member.email}`}>
                    {member.email}
                  </Typography.Link>
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>

      </Space>
    </Card>
  );
};

export default Project1;

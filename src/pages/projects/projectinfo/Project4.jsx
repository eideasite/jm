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

const { Text } = Typography;
const { Panel } = Collapse;

const Project4_BABusinessProfileSystem = () => {
  const project = {
    name: 'Mentoring-Based Business Investor Profile System',
    country: 'UK (Remote)',
    sector: 'Business Analysis / Mobile App Product Planning',
    client: ['Internal (Mentoring-based Business Investor Profile System)'],
    role: ['Intern Business Analyst'],
    purpose: 'Investor profile management and mentoring support platform',
    technologies: ['Kotlin', 'Flutter (Mobile Application Development)'],
    experience: [
      'System analysis',
      'Requirement gathering',
      'Documentation',
      'Wireframe development',
    ],
    tools: ['Balsamiq', 'Google Docs', 'Email'],
    document: 'User Story, Requirement Document, System Architecture, Feature List, Mobile App Wireframes',
    url: {
      label: '',
      links: [],
    },
    teamMembers: [
      {
        name: 'Sathiyaseelan Sajeenthiran',
        role: 'Associate Mobile App Developer',
        icon: '📱',
        email: 'sasajeenthiran@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sathiyaseelan-sajeenthiran-42566aaa',
        technology: '',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined />
          <Text strong>{project.name}</Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* General Info */}
        <Collapse ghost>
          <Panel header="🌍 Country" key="1"><ul><li>{project.country}</li></ul></Panel>
          <Panel header="💻 Sector" key="2"><ul><li>{project.sector}</li></ul></Panel>
          <Panel header="🏢 Client" key="3"><ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul></Panel>
          <Panel header="🔧 Role" key="4"><ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul></Panel>
          <Panel header="🎯 Purpose" key="5"><Text>{project.purpose}</Text></Panel>
        </Collapse>

        <Divider />

        {/* Technical Details */}
        <Collapse ghost>
          <Panel header="🧪 Key Technologies Used" key="6"><ul>{project.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul></Panel>
          <Panel header="📘 Experience Gained" key="7"><ul>{project.experience.map((e, i) => <li key={i}>{e}</li>)}</ul></Panel>
          <Panel header="🛠 Tools Used" key="8"><ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul></Panel>
          <Panel header="📄 Documentation" key="9"><Text>{project.document}</Text></Panel>
          {project.url.links.length > 0 && (
            <Panel header="🔗 Project Link" key="10">
              <ul>
                {project.url.links.map((link, index) => (
                  <li key={index}>
                    <Typography.Link href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </Typography.Link>
                  </li>
                ))}
              </ul>
            </Panel>
          )}
        </Collapse>

        <Divider dashed />

        {/* Team Info */}
        <Collapse ghost>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="11">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <TeamOutlined /> {member.name} ({member.icon})
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="12">
            <ul>{project.teamMembers.map((member, i) => (<li key={i}>– {member.role}</li>))}</ul>
          </Panel>

          <Panel header="🧪 Technology" key="13">
            <ul>{project.technologies.map((tech, i) => (<li key={i}>{tech}</li>))}</ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="14">
            <ul>
              {project.teamMembers
                .filter(member => member.linkedin)
                .map((member, i) => (
                  <li key={i}>
                    <Typography.Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      {member.linkedin}
                    </Typography.Link>
                  </li>
                ))}
            </ul>
          </Panel>

          <Panel header="✉️ Email" key="15">
            <ul>
              {project.teamMembers
                .filter(member => member.email)
                .map((member, i) => (
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

export default Project4_BABusinessProfileSystem;

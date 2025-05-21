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

const Project5_AlliBhavan = () => {
  const project = {
    name: 'Alli Bhavan – Mobile App & Web Admin Panel',
    country: 'United Kingdom (UK)',
    sector: 'Food Services / E-commerce Integration',
    client: ['Alli Bhavan'],
    role: ['Intern Business Analyst', 'QA Coordinator'],
    purpose:
      'To develop a food ordering system with mobile and admin interfaces, fully integrated with Shopify for real-time operations.',
    technologies: ['Mobile App (Android/iOS)', 'Web Admin Panel', 'Shopify API Integration'],
    experience: [
      'Stakeholder communication',
      'Documentation handling and QA coordination',
      'Bug-user flow documentation',
      'System explanation support to stakeholders',
    ],
    tools: ['Google Docs', 'Email', 'Screenshots', 'Testing Platforms'],
    document:
      'Mobile & Web Feature Docs, Bug Flow Notes, QA Meeting Logs, Client Presentation Slides (Internal – Company Privacy)',
    teamMembers: [
      {
        name: 'Associate Mobile Developer',
        role: 'Mobile App Development',
        icon: '📱',
        email: null,
        linkedin: null,
        technology: 'Android/iOS',
      },
      {
        name: 'Senior Backend Developer',
        role: 'API & Admin Panel Setup',
        icon: '🖥️',
        email: null,
        linkedin: null,
        technology: 'Shopify API, Web Admin',
      },
      {
        name: 'JM (You)',
        role: 'Intern BA / QA Flow Support',
        icon: '🧑‍💼',
        email: null,
        linkedin: null,
        technology: 'Documentation, QA Coordination',
      },
      {
        name: 'Imasha',
        role: 'QA Analyst – Bug Reporting & Verification',
        icon: '🧪',
        email: null,
        linkedin: null,
        technology: 'Testing, Verification',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
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
        <Collapse ghost bordered={false}>
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

        <Collapse ghost bordered={false}>
          <Panel header="🧪 Key Technologies Used" key="6">
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
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="10">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <TeamOutlined style={{ color: '#1890ff' }} />
                  <Text>
                    {member.name} ({member.icon})
                  </Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="11">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔧 Technologies Used by Team" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  {member.name}: {member.technology || 'N/A'}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="13">
            <ul>
              {project.teamMembers
                .filter((member) => member.linkedin)
                .map((member, i) => (
                  <li key={i}>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.linkedin}
                    </Link>
                  </li>
                ))}
            </ul>
          </Panel>

          <Panel header="✉️ Email" key="14">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>{member.email || 'N/A'}</li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project5_AlliBhavan;

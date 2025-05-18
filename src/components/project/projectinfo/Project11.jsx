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

const Project11 = () => {
  const project = {
    name: 'Pizza Da Valter – Web and Mobile App (iOS & Android)',
    country: 'United Kingdom',
    sector: 'Restaurant / Hospitality Tech',
    client: ['Pizza Da Valter'],
    role: [
      'Business Analyst',
      'Team Coordinator',
      'Project Manager',
      'Project Lead',
    ],
    purpose:
      'Develop website and mobile app with booking system, improve UX/UI, coordinate development teams, and ensure smooth project delivery.',
    technologies: [
      'Frontend: ReactJS',
      'Mobile App: Flutter, Kotlin',
      'Backend: API & DBMS',
      'Design/Flow: Draw.io, Figma',
    ],
    tools: ['Jira', 'Google Docs', 'Draw.io', 'Gmail', 'Canva'],
    experience: [
      'Feature gathering and requirement analysis',
      'Sprint planning and backlog management',
      'Booking system design and implementation',
      'UX/UI enhancements and user story mapping',
      'Privacy policy and data collection documentation',
      'Agile methodology support and coordination',
    ],
    document: [
      'Business Analysis Report',
      'UX/UI Wireframes',
      'Booking System Flowcharts',
      'Sprint Planning Sheets',
      'Privacy Policy & Data Collection Confirmation',
      'User Story Mapping',
    ],
    scope: [
      'New website and mobile app design',
      'Booking time-slot system integration',
      'Mobile and web screen flow documentation',
      '1-mile delivery map range research',
      'Content creation and deployment planning',
    ],
    cloudDeployment:
      'Web: Live at https://www.pizzadavalter.co.uk/ | Mobile: Cross-platform iOS and Android deployment (Flutter)',
    urls: [
      'https://www.pizzadavalter.co.uk/',
      'Android App: Google Play',
      'iOS App: Apple Store',
    ],
    teamMembers: [
      {
        name: 'JM (You)',
        role:
          'Business Analyst / Team Coordinator / Project Manager / Project Lead',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Leadership, Analysis & Coordination',
      },
      {
        name: 'Yasindu Weerakkody',
        role: 'UX/UI Lead',
        icon: '🎨',
        email: 'N/A',
        linkedin: 'LinkedIn',
        technology: 'UX/UI Design Leadership',
      },
      {
        name: 'Jessy',
        role: 'Associate UX/UI Designer',
        icon: '🎨',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'UX/UI Design',
      },
      {
        name: 'Kavi (Kavitharan K)',
        role: 'Associate Mobile App Developer',
        icon: '📱',
        email: 'N/A',
        linkedin: 'LinkedIn',
        technology: 'Flutter & Kotlin',
      },
      {
        name: 'Thanu',
        role: 'Intern React Developer',
        icon: '💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'React Frontend',
      },
      {
        name: 'Gobi',
        role: 'Intern React Developer',
        icon: '💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'React Frontend',
      },
      {
        name: 'Thushanthan',
        role: 'Backend Developer API/DBMS',
        icon: '🛠️',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'API and Database Management',
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
        {/* Section 1: Basic Info */}
        <Collapse ghost bordered={false}>
          <Panel header="🌍 Country" key="1"><ul><li>{project.country}</li></ul></Panel>
          <Panel header="💻 Sector" key="2"><ul><li>{project.sector}</li></ul></Panel>
          <Panel header="🏢 Client" key="3"><ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul></Panel>
          <Panel header="🔧 Role" key="4"><ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul></Panel>
          <Panel header="🎯 Purpose" key="5"><Text>{project.purpose}</Text></Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        {/* Section 2: Technical / Experience */}
        <Collapse ghost bordered={false}>
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
          <Panel header="☁️ Cloud Deployment" key="11"><Text>{project.cloudDeployment}</Text></Panel>
          <Panel header="🔗 URLs" key="12">
            <ul>{project.urls.map((url, i) => (
              <li key={i}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </Link>
              </li>
            ))}</ul>
          </Panel>
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        {/* Section 3: Team Members */}
        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="13">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <TeamOutlined style={{ color: '#1890ff', marginRight: 6 }} />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="14">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="15">
            <ul>
              {project.teamMembers.map((member, i) =>
                member.linkedin && member.linkedin !== 'N/A' ? (
                  <li key={i}>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      {member.linkedin}
                    </Link>
                  </li>
                ) : (
                  <li key={i}>N/A</li>
                )
              )}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project11;

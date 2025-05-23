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

const Project14 = () => {
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
      'https://play.google.com/store/apps/details?id=com.pizzadavalter',
      'https://apps.apple.com/app/id123456789',
    ],
    teamMembers: [
      {
        name: 'JM (You)',
        role:
          'Business Analyst / Team Coordinator / Project Manager / Project Lead',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: null,
        technology: 'Leadership, Analysis & Coordination',
      },
      {
        name: 'Yasindu Weerakkody',
        role: 'UX/UI Lead',
        icon: '🎨',
        email: 'N/A',
        linkedin: 'https://linkedin.com/in/yasinduweerakkody',
        technology: 'UX/UI Design Leadership',
      },
      {
        name: 'Jessy',
        role: 'Associate UX/UI Designer',
        icon: '🎨',
        email: 'N/A',
        linkedin: null,
        technology: 'UX/UI Design',
      },
      {
        name: 'Kavi (Kavitharan K)',
        role: 'Associate Mobile App Developer',
        icon: '📱',
        email: 'N/A',
        linkedin: 'https://linkedin.com/in/kavitharank',
        technology: 'Flutter & Kotlin',
      },
      {
        name: 'Thanu',
        role: 'Intern React Developer',
        icon: '💻',
        email: 'N/A',
        linkedin: null,
        technology: 'React Frontend',
      },
      {
        name: 'Gobi',
        role: 'Intern React Developer',
        icon: '💻',
        email: 'N/A',
        linkedin: null,
        technology: 'React Frontend',
      },
      {
        name: 'Thushanthan',
        role: 'Backend Developer API/DBMS',
        icon: '🛠️',
        email: 'N/A',
        linkedin: null,
        technology: 'API and Database Management',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{ borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
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

        <Panel header="🧪 Key Technologies Used" key="6">
          <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
        </Panel>

        <Panel header="🛠 Tools Used" key="7">
          <ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
        </Panel>

        <Panel header="📘 Experience Gained" key="8">
          <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
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
          <ul>
            {project.teamMembers.map((member, i) =>
              member.linkedin ? (
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
    </Card>
  );
};

export default Project14;

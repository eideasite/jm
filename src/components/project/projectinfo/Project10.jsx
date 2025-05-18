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

const Project10 = () => {
  const project = {
    name: 'Sabah State Water Management System – Mobile App & Dashboard Redesign',
    country: 'Malaysia',
    sector: 'Public Utilities / Government Service (Water Management)',
    client: ['Sabah State Water Department'],
    role: ['Junior Business Analyst', 'UI/UX Coordination Lead'],
    purpose:
      'To identify weaknesses in the current mobile app and dashboard, gather stakeholder requirements, and redesign the UI/UX for improved user experience and functionality—focusing especially on the Registered Plumber section.',
    technologies: ['Figma', 'Mobile UI Frameworks', 'Web UI Components'],
    tools: ['Figma', 'Google Docs', 'Gmail', 'Canva', 'Presentation Tools'],
    experience: [
      'Requirement gathering and stakeholder communication',
      'Analyzing existing system flow',
      'Figma wireframing and prototyping',
      'Coordinating UI/UX improvements',
      'Delivering presentations and documentation to stakeholders',
    ],
    document: [
      'UI/UX Proposal',
      'Wireframes',
      'Figma Prototypes',
      'User Flow Documentation',
      'Presentation Slides',
    ],
    scope: [
      'Mobile app and dashboard UI analysis',
      'Feature planning and redesign',
      'Collaboration with UX/UI and development teams',
      'Presentation of wireframes and user flows',
      'Registered Plumber section enhancement',
    ],
    cloudDeployment: 'Not deployed – Design and proposal phase (Internal Review)',
    urls: ['https://water.sabah.gov.my/'],
    teamMembers: [
      {
        name: 'JM (You)',
        role: 'Junior Business Analyst / UI UX Coordination',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Analysis & UI Coordination',
      },
      {
        name: 'Director',
        role: 'Project Stakeholder (Feedback & Approval)',
        icon: '👔',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Stakeholder Management',
      },
      {
        name: 'UX/UI Team',
        role: 'Figma and Wireframe Designers',
        icon: '🎨',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Design and Prototyping',
      },
      {
        name: 'Development Team',
        role: 'Web & Mobile Implementation Team (Internal)',
        icon: '💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Frontend & Backend',
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
                member.linkedin !== 'N/A' ? (
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

export default Project10;

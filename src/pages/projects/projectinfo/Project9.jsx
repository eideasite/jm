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

const Project9 = () => {
  const project = {
    name: 'Bloo (Blood Bank System)',
    country: 'Malaysia',
    sector: 'Healthcare / IT Solution',
    client: ['PFI (Private Funded Initiative)'],
    role: ['Proposal Workflow Designer', 'Documentation Lead'],
    purpose:
      'To digitize the manual blood bank process into a fully automated, user-engaging system with donor tracking, scoring, and reminders.',
    technologies: ['Balsamiq (Prototype)', 'Canva (Presentation)', 'Google Docs (Documentation)'],
    experience: [
      'Requirement gathering',
      'Stakeholder communication',
      'System proposal drafting',
      'Donor feature planning',
      'Early-stage workflow automation',
    ],
    tools: ['Gmail', 'Google Docs', 'Canva', 'Balsamiq'],
    scope:
      'Manual blood bank flow converted into an automated digital system. Designed for mobile and web platforms (App + Admin Panel). Focused on user engagement and operational ease.',
    document:
      'Workflow Drafts, Requirement Notes, Presentation Slides, Proposal Documentation, Feature List Sheets',
    cloudDeployment: 'N/A',
    urls: ['N/A'],
    teamMembers: [
      {
        name: 'Company Director',
        role: 'Decision Maker / Approver',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Leadership',
      },
      {
        name: 'Senior Backend Developer',
        role: 'Technical Consultant',
        icon: '👨‍💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Backend Architecture',
      },
      {
        name: 'PFI Client',
        role: 'Proposal Reviewer / Funder',
        icon: '🏢',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Funding & Review',
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
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Basic Info */}
        <Collapse ghost bordered={false}>
          <Panel header="🌍 Country" key="1"><ul><li>{project.country}</li></ul></Panel>
          <Panel header="💻 Sector" key="2"><ul><li>{project.sector}</li></ul></Panel>
          <Panel header="🏢 Client" key="3"><ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul></Panel>
          <Panel header="🔧 Role" key="4"><ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul></Panel>
          <Panel header="🎯 Purpose" key="5"><Text>{project.purpose}</Text></Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        {/* Tech & Experience */}
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
          <Panel header="📦 Project Scope" key="10">
            <Text>{project.scope}</Text>
          </Panel>
          <Panel header="☁️ Cloud Deployment" key="11">
            <Text>{project.cloudDeployment}</Text>
          </Panel>
          <Panel header="🔗 URLs" key="12">
            <ul>{project.urls.map((url, i) => (
              <li key={i}>
                {url === 'N/A' ? url : (
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                )}
              </li>
            ))}</ul>
          </Panel>
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        {/* Team Members */}
        <Collapse ghost bordered={false}>
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
            <ul>{project.teamMembers.map((member, i) => (
              <li key={i}>– {member.role}</li>
            ))}</ul>
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

export default Project9;

import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { MobileOutlined, TeamOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

const Project20 = () => {
  const project = {
    name: 'IYKONNECT – Mobile Application',
    country: 'United Kingdom',
    sector: 'Fintech / Internal Operations',
    client: ['Internal App Team'],
    role: ['Business Analyst / UI Coordinator'],
    purpose: [
      'Focused on improving mobile app user interface and experience',
      'Coordinated with the design and dev team for mobile-specific issues',
      'Addressed UI corrections and streamlined design inconsistencies',
      'Worked closely with UX team to improve overall usability',
      'Documented issues and proposed feature enhancements for mobile',
    ],
    technologies: [
      'Figma (Mobile Screens)',
      'Jira (Task Tracking)',
      'Slack / Google Docs (Coordination & Documentation)',
      'Internal Testing Tools (UX Feedback)',
    ],
    experience: [
      'UI/UX feedback collection and tracking',
      'Design review and validation for mobile version',
      'Coordination with mobile developers for implementation fixes',
      'Created clear UX experience documentation for reference',
      'Suggested improvement points based on testing and feedback',
    ],
    document: [
      'Mobile UI Correction Report',
      'UX Experience Documentation',
      'Feature Improvement Suggestions',
      'Coordination Tracker Notes',
    ],
    scope: ['Mobile App UX Coordination & Fix Tracking'],
    cloudDeployment: 'Internal Distribution (Mobile)',
    urls: [],
    teamMembers: [
      { name: 'JM (You)', role: 'UI Coordinator & UX Documentation', icon: '📱' },
      { name: 'Mobile Developer', role: 'Issue Fixing & UX Review', icon: '👨‍💻' },
      { name: 'UX Designer', role: 'Mobile Interface Validation', icon: '🎨' },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{ borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <MobileOutlined style={{ marginTop: 3, color: '#1890ff' }} />
          <Text strong style={{ fontSize: 16, whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Collapse accordion>
        <Panel header="🌍 Country" key="1">
          <ul><li>{project.country}</li></ul>
        </Panel>

        <Panel header="💻 Sector" key="2">
          <ul><li>{project.sector}</li></ul>
        </Panel>

        <Panel header="🏢 Client" key="3">
          <ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </Panel>

        <Panel header="🔧 Role" key="4">
          <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
        </Panel>

        <Panel header="📝 Overview / Purpose" key="5">
          <ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </Panel>

        <Panel header="🧪 Technologies & Tools" key="6">
          <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
        </Panel>

        <Panel header="📘 Key Responsibilities (Experience Gained)" key="7">
          <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
        </Panel>

        <Panel header="📄 Documentation / Deliverables" key="8">
          <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
        </Panel>

        <Panel header="📦 Project Scope" key="9">
          <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Panel>

        <Panel header="☁️ Deployment" key="10">
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel header="🔗 URLs" key="11">
          {project.urls.length === 0 ? (
            <Text>N/A</Text>
          ) : (
            <ul>
              {project.urls.map((url, i) => (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel header="👥 Team Members" key="12">
          <ul>
            {project.teamMembers.map((member, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <TeamOutlined style={{ color: '#52c41a' }} />
                <Text>{member.name} ({member.icon})</Text>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="💼 Job Roles" key="13">
          <ul>{project.teamMembers.map((member, i) => <li key={i}>– {member.role}</li>)}</ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project20;

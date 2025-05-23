import React from 'react';
import {
  Card,
  Typography,
  Space,
  Divider,
  Collapse,
} from 'antd';
import {
  MobileOutlined,
  TeamOutlined,
} from '@ant-design/icons';

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
      hoverable
      bordered
      // Removed dark background, borderColor and text color styles
      title={
        <div>
          <MobileOutlined style={{ marginRight: 8, color: '#1890ff' }} />
          <Text strong>{project.name}</Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>

        {/* Basic Info - Collapsible */}
        <Collapse expandIconPosition="right" bordered>
          <Panel header={<span>🌍 Country</span>} key="1">
            <ul><li>{project.country}</li></ul>
          </Panel>
          <Panel header={<span>🏢 Sector</span>} key="2">
            <ul><li>{project.sector}</li></ul>
          </Panel>
          <Panel header={<span>👥 Client</span>} key="3">
            <ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </Panel>
          <Panel header={<span>👤 Role</span>} key="4">
            <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </Panel>
          <Panel header={<span>📝 Overview / Purpose</span>} key="5">
            <ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </Panel>
        </Collapse>

        <Divider />

        {/* Tech & Experience */}
        <Collapse expandIconPosition="right" bordered>
          <Panel header={<span>🧪 Technologies & Tools</span>} key="6">
            <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
          </Panel>
          <Panel header={<span>📘 Key Responsibilities</span>} key="7">
            <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
          </Panel>
          <Panel header={<span>📄 Documentation / Deliverables</span>} key="8">
            <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
          </Panel>
          <Panel header={<span>📦 Project Scope</span>} key="9">
            <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </Panel>
          <Panel header={<span>☁️ Deployment</span>} key="10">
            <Text>{project.cloudDeployment}</Text>
          </Panel>
        </Collapse>

        <Divider dashed />

        {/* Team Info */}
        <Collapse expandIconPosition="right" bordered>
          <Panel header={<span>👥 Team Members</span>} key="11">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  <TeamOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header={<span>💼 Job Roles</span>} key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>
        </Collapse>

      </Space>
    </Card>
  );
};

export default Project20;

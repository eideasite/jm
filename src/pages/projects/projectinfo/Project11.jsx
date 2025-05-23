import React from 'react';
import {
  Card,
  Typography,
  Space,
  Divider,
  Collapse,          // << added
} from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;  // << added

const Project11 = () => {
  const project = {
    name: 'Smart Money Exchange – Mobile & Web App Analysis',
    country: 'United Kingdom',
    sector: 'Finance / Currency Exchange',
    client: [],
    role: ['Business Analyst / UAT & Workflow Analyst'],
    purpose: [
      'Analyze outdated mobile app features',
      'Conduct UAT on pre-released app version (APK testing in sandbox environment)',
      'Design improved workflows and UI enhancements',
      'Compare old vs new product features',
      'Analyze web admin portal functionalities',
      'Study remit workflow and bank account API integrations',
      'Recommend mobile app feature improvements',
      'Prepare user flow and workflow documentation',
      'Deliver mobile app comparison and improvement reports',
    ],
    technologies: [
      'Jira (Task management)',
      'Figma / Wireframing tools',
      'Google Docs (Documentation)',
      'API analysis tools',
      'Sandbox environment for APK testing',
    ],
    tools: [
      'Jira',
      'Figma',
      'Google Docs',
      'API Test Tools',
    ],
    experience: [
      'UAT analysis including APK testing in sandbox environment',
      'Workflow and user flow design',
      'Feature comparison and gap analysis',
      'Coordination with development and product teams',
      'Documentation of process and feature improvements',
      'Communicate with stakeholders for clarification',
    ],
    document: [
      'UAT & Sandbox APK Testing Report',
      'Mobile App Feature Comparison Report',
      'Workflow & User Flow Diagrams',
      'UI Improvement Suggestions',
      'API Integration Analysis',
      'Web Admin Portal Functional Analysis',
    ],
    scope: ['Mobile app enhancement and web admin portal analysis'],
    cloudDeployment: 'Web access and Play Store release phase',
    urls: [
      'https://play.google.com/store/apps/details?id=com.globalexchange.global&pcampaignid=web_share',
      'https://online.globalexchange.co.uk/',
    ],
    teamMembers: [
      { name: 'JM (You)', role: 'Business Analyst / UAT & Workflow Analyst', icon: '🧑‍💼' },
      { name: 'Mobile App Developer', role: 'Feature Implementation & APK Build', icon: '📱' },
      { name: 'Product Manager', role: 'Business Requirement Alignment', icon: '📊' },
    ],
  };

  // Removed Section component because Collapse/Panel handles this

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      style={{
        borderRadius: '12px',
      }}
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined />
          <Text strong style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {project.name}
          </Text>
        </div>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>

        <Collapse accordion>
          <Panel header="🌍 Country" key="1">
            <ul><li>{project.country}</li></ul>
          </Panel>

          <Panel header="💻 Sector" key="2">
            <ul><li>{project.sector}</li></ul>
          </Panel>

          <Panel header="🔧 Role" key="3">
            <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </Panel>

          <Panel header="🎯 Purpose" key="4">
            <ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </Panel>

          <Divider style={{ margin: '12px 0' }} />

          <Panel header="🧪 Key Technologies Used" key="5">
            <ul>{project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
          </Panel>

          <Panel header="📘 Responsibilities" key="6">
            <ul>{project.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
          </Panel>

          <Panel header="🛠 Tools Used" key="7">
            <ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul>
          </Panel>

          <Panel header="📄 Documentation" key="8">
            <ul>{project.document.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
          </Panel>

          <Panel header="📦 Platform Scope" key="9">
            <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </Panel>

          <Panel header="☁️ Deployment" key="10">
            <Text>{project.cloudDeployment}</Text>
          </Panel>

          <Panel header="🔗 URLs" key="11">
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

          <Divider dashed style={{ margin: '1px 0' }} />

          <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <TeamOutlined style={{ marginRight: 6 }} />
                  <Text>{member.name} ({member.icon})</Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="13">
            <ul>{project.teamMembers.map((member, i) => <li key={i}>– {member.role}</li>)}</ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="14">
            <ul>{project.teamMembers.map((_, i) => <li key={i}>N/A</li>)}</ul>
          </Panel>

        </Collapse>
      </Space>
    </Card>
  );
};

export default Project11;

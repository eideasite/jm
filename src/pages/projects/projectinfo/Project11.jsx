import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { ProjectOutlined, TeamOutlined, LinkOutlined, CloudOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const ulStyle = { paddingLeft: 24, marginBottom: 0 };

const Project11 = () => {
  const project = {
    name: 'Smart Money Exchange – Mobile & Web App Analysis',
    country: 'United Kingdom',
    sector: 'Finance / Currency Exchange',
    client: [], // no client info provided
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
    tools: ['Jira', 'Figma', 'Google Docs', 'API Test Tools'],
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
      <Collapse accordion>
        <Panel header="🌍 Country" key="1">
          <ul style={ulStyle}>
            <li>{project.country}</li>
          </ul>
        </Panel>

        <Panel header="💻 Sector" key="2">
          <ul style={ulStyle}>
            <li>{project.sector}</li>
          </ul>
        </Panel>

        {project.client.length > 0 && (
          <Panel header="🏢 Client" key="3">
            <ul style={ulStyle}>
              {project.client.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Panel>
        )}

        <Panel header="🔧 Role" key="4">
          <ul style={ulStyle}>
            {project.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🎯 Purpose" key="5">
          <ul style={ulStyle}>
            {project.purpose.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🧪 Key Technologies Used" key="6">
          <ul style={ulStyle}>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="🛠 Tools Used" key="7">
          <ul style={ulStyle}>
            {project.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📘 Experience Gained" key="8">
          <ul style={ulStyle}>
            {project.experience.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📄 Documentation" key="9">
          <ul style={ulStyle}>
            {project.document.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </Panel>

        <Panel header="📦 Project Scope" key="10">
          <ul style={ulStyle}>
            {project.scope.map((sc, i) => (
              <li key={i}>{sc}</li>
            ))}
          </ul>
        </Panel>

        <Panel
          header={
            <span>
              <CloudOutlined />  Cloud Deployment
            </span>
          }
          key="11"
        >
          <Text>{project.cloudDeployment}</Text>
        </Panel>

        <Panel
          header={
            <span>
              <LinkOutlined /> 🔗 URLs
            </span>
          }
          key="12"
        >
          <ul style={ulStyle}>
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
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  flexWrap: 'wrap',
                }}
              >
                <Text>{member.icon}</Text>
                <Text style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                  {member.name}
                </Text>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel header="💼 Job Role" key="14">
          <ul style={ulStyle}>
            {project.teamMembers.map((member, i) => (
              <li key={i}>{member.role}</li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Project11;

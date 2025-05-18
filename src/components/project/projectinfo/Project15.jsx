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

const Project15 = () => {
  const project = {
    name: 'IY Data – OCR-Based Invoice Processing System (Web & Mobile)',
    country: 'United Kingdom',
    sector: 'AI / Fintech / Invoice Processing',
    client: ['In-House Product – IYKONS'],
    role: ['Business Analyst / Coordination Lead'],
    purpose: [
      'Develop a dual-platform system (web & mobile)',
      'Automate invoice processing using OCR and AI',
      'Extract data from invoices automatically',
      'Auto-fill invoice fields to reduce manual entry',
      'Improve accuracy and efficiency',
      'Design workflow inspired by Dext-like software',
    ],
    technologies: [
      'React + Vite (Web frontend)',
      'Flutter (Mobile app)',
      'Google AI Invoice Model (Data prediction)',
      'Tesseract OCR (R&D and performance testing)',
    ],
    tools: [
      'Jira (Sprint planning and backlog management)',
      'Figma (UI/UX design and prototyping)',
      'Balsamiq (Wireframing)',
      'Google Docs & Gmail (Documentation and communication)',
    ],
    experience: [
      'Requirement gathering and stakeholder communication',
      'Coordinating with Product Manager, UX/UI, and developers',
      'Workflow design and documentation',
      'Creating wireframes and prototypes',
      'Explaining features and processes to QA for UAT',
      'Agile sprint planning and backlog management',
      'Managing and guiding intern and associate teams',
      'Ensuring clean project structure and documentation',
    ],
    document: [
      'Software Requirement Specifications (SRS)',
      'Workflow diagrams and process flows',
      'UI/UX wireframes and prototypes',
      'User flow documentation',
      'UAT test cases and reports',
    ],
    scope: ['React-based web app', 'Flutter-based mobile app for iOS and Android'],
    cloudDeployment: 'Live platform at https://ocr.iykons.com/home',
    urls: ['https://ocr.iykons.com/home'],
    teamMembers: [
      { name: 'JM (You)', role: 'Business Analyst / Coordination Lead', icon: '🧑‍💼' },
      { name: 'Senior Frontend Developer', role: 'React Web Platform Lead (Project Lead)', icon: '💻' },
      { name: 'Product Manager (PM)', role: 'Product Strategy & Agile Owner', icon: '📊' },
      { name: 'UX/UI Designer', role: 'UI/UX Design & Prototyping', icon: '🎨' },
      { name: 'Associate Mobile Developer', role: 'Flutter App Developer', icon: '📱' },
      { name: 'React Intern', role: 'Frontend Development Support', icon: '👨‍💻' },
      { name: 'UX/UI Intern', role: 'Design Support', icon: '🎓' },
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
          <Text strong style={{ fontSize: '16px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
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
          <Panel header="🎯 Purpose" key="5"><ul>{project.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul></Panel>
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
          <Panel header="📦 Platform Scope" key="10">
            <ul>{project.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </Panel>
          <Panel header="☁️ Deployment" key="11"><Text>{project.cloudDeployment}</Text></Panel>
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
            <ul>{project.teamMembers.map((member, i) => <li key={i}>– {member.role}</li>)}</ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="15">
            <ul>{project.teamMembers.map((_, i) => <li key={i}>N/A</li>)}</ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project15;
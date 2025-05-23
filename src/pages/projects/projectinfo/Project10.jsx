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
    name: 'IYCONNECT – Help Desk UI Improvements',
    country: 'United Kingdom (UK)',
    sector: 'Internal Product / Customer Support Interface',
    client: ['IYCONNECT (Own Product)'],
    role: ['Intern Business Analyst', 'UI Improvement Coordinator'],
    purpose:
      'To enhance the user interface of the Help Desk module by analyzing the existing UI and proposing improved layouts and flows for better user experience.',

    technologies: ['UI Wireframing', 'Prototyping Tools'],
    experience: [
      'UI analysis',
      'Wireframe creation',
      'Prototype presentation',
      'Stakeholder requirement handling',
      'Direct appreciation from leadership ("Good Work")',
    ],
    tools: ['Wireframing Tools', 'Prototyping Software', 'Google Docs'],
    scope:
      'Focused UI enhancement of internal Help Desk module. Improvements included layout clarity, flow optimization, and task progress alignment with stakeholder goals.',

    document:
      'UI Suggestions Document, Task Board (To Do / In Progress), Wireframes, Prototype Screens',
    cloudDeployment: 'Internal – Company Privacy',
    urls: ['[Internal Project – No Public URL]'],

    teamMembers: [
      {
        name: 'Senior Backend Developer',
        role: 'Technical Guidance & Integration',
        icon: '👨‍💻',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Backend Support',
      },
      {
        name: 'Associate Mobile Developer',
        role: 'App-side UI Adjustment',
        icon: '📱',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Mobile UI',
      },
      {
        name: 'JM (You)',
        role: 'BA / UI Improvement Lead',
        icon: '🧑‍💼',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Business Analysis / UI Coordination',
      },
      {
        name: 'Director',
        role: 'Project Approval & Feedback ("Good Work")',
        icon: '🏢',
        email: 'N/A',
        linkedin: 'N/A',
        technology: 'Leadership',
      },
    ],
  };

  return (
    <Card
      className="project-card"
      hoverable
      bordered
      // Removed all style props related to background, borderRadius, boxShadow, backdropFilter
      title={
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
          <ProjectOutlined style={{ marginTop: 3 }} />
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
          <Panel header="🌍 Country" key="1"><ul><li>{project.country}</li></ul></Panel>
          <Panel header="💻 Sector" key="2"><ul><li>{project.sector}</li></ul></Panel>
          <Panel header="🏢 Client" key="3"><ul>{project.client.map((c, i) => <li key={i}>{c}</li>)}</ul></Panel>
          <Panel header="🔧 Role" key="4"><ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul></Panel>
          <Panel header="🎯 Purpose" key="5"><Text>{project.purpose}</Text></Panel>
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

        <Collapse ghost bordered={false}>
          <Panel header="🧪 Key Technologies Used" key="6"><ul>{project.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul></Panel>
          <Panel header="📘 Experience Gained" key="7"><ul>{project.experience.map((e, i) => <li key={i}>{e}</li>)}</ul></Panel>
          <Panel header="🛠 Tools Used" key="8"><ul>{project.tools.map((tool, i) => <li key={i}>{tool}</li>)}</ul></Panel>
          <Panel header="📄 Documentation" key="9"><Text>{project.document}</Text></Panel>
          <Panel header="📦 Project Scope" key="10"><Text>{project.scope}</Text></Panel>
          <Panel header="☁️ Cloud Deployment" key="11"><Text>{project.cloudDeployment}</Text></Panel>
          <Panel header="🔗 URLs" key="12"><ul>{project.urls.map((url, i) => <li key={i}>{url}</li>)}</ul></Panel>
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

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

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

const Project7 = () => {
  const project = {
    name: 'BPH – Bridge Park Hotel London',
    country: 'UK',
    sector: 'Hotel Services / Web Development',
    client: ['Bridge Park Hotel'],
    role: ['Junior Business Analyst', 'Intern Project Coordinator'],
    purpose:
      'UI/UX enhancement, backlog grooming, stakeholder communication, team coordination',
    technologies: ['ReactJS', 'JavaScript', 'Figma', 'Stripe', 'Siteminder'],
    experience: [
      'UI/UX enhancement using Figma',
      'Stakeholder communication and requirement gathering',
      'Backlog grooming and sprint planning',
      'Team coordination and project tracking',
    ],
    tools: ['Figma', 'Jira', 'Slack', 'Zoom'],
    document:
      'Project documentation, wireframes, stakeholder emails, and sprint reports',
    teamMembers: [
      {
        name: 'Thulirshan Kumaravel',
        role: 'React Developer',
        icon: '👨‍💻',
        email: null,
        linkedin: 'https://www.linkedin.com/in/thulirshan-kumaravel-a236b1207/',
        technology: 'ReactJS, JavaScript',
      },
      {
        name: 'Fathima Farhana',
        role: 'Back-End Developer',
        icon: '👩‍💻',
        email: null,
        linkedin: 'https://www.linkedin.com/in/fathima-farhana-316212248/',
        technology: 'Node.js, Express',
      },
      {
        name: 'Thanusiyanthan V. (Thanu)',
        role: 'Project Coordinator',
        icon: '👨‍💻',
        email: 'svthanusiyanthan@gmail.com',
        linkedin: 'https://www.linkedin.com/in/thanusiyanthan28',
        technology: 'Project Management',
      },
      {
        name: 'Dussanthan Manoharan (Dhusa)',
        role: 'Developer',
        icon: '👨‍💻',
        email: null,
        linkedin: null,
        technology: 'Full Stack Development',
      },
      {
        name: 'Radhika Nanayakkara',
        role: 'Developer',
        icon: '👩‍💻',
        email: 'radhikasewwandi071@gmail.com',
        linkedin: 'https://www.linkedin.com/in/radhika-sewwandi',
        technology: 'Frontend Development',
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
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
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
        <Collapse ghost bordered={false}>
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
        </Collapse>

        <Divider style={{ margin: '12px 0' }} />

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
        </Collapse>

        <Divider dashed style={{ margin: '1px 0' }} />

        <Collapse ghost bordered={false}>
          <Panel header="🧑‍🤝‍🧑 Team Members" key="10">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <TeamOutlined style={{ color: '#1890ff' }} />
                  <Text>
                    {member.name} ({member.icon})
                  </Text>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="💼 Job Role" key="11">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>– {member.role}</li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔧 Technologies Used by Team" key="12">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>
                  {member.name}: {member.technology || 'N/A'}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel header="🔗 LinkedIn" key="13">
            <ul>
              {project.teamMembers
                .filter((member) => member.linkedin)
                .map((member, i) => (
                  <li key={i}>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.linkedin}
                    </Link>
                  </li>
                ))}
            </ul>
          </Panel>

          <Panel header="✉️ Email" key="14">
            <ul>
              {project.teamMembers.map((member, i) => (
                <li key={i}>{member.email || 'N/A'}</li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default Project7;

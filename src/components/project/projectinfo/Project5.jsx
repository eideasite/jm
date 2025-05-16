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

  const Project5 = () => {
    const project = {
      name: 'Sports Management System',
      country: 'Australia',
      sector: 'Sports Management',
      client: ['Domain Client (statscout.au.com)'],
      role: ['Intern Business Analyst', 'Coordinator / Project Manager Sprint Planner'],
      purpose: 'Sports Management website and system',
      technologies: ['MVC', 'API', '.NET', 'C# (Web)'],
      experience: [
        'Requirement analysis',
        'Developer documentation',
        'Stakeholder communication',
        'Cloud deployment (AWS Elastic Beanstalk)',
        'Project coordination',
        'Wireframe creation',
      ],
      tools: ['Balsamiq', 'Google Docs', 'Microsoft Teams', 'Draw.io'],
      scope:
        'Sports club system: club, coach, team, player communication; player, club, coach registration; admin & parent verification, chat, email integration; scalable app design',
      document:
        'Software documentation, client email, communication, presentation, and confirmation reports',
      cloudDeployment: 'AWS Elastic Beanstalk',
      teamMembers: [
        {
          name: 'Krishnarajah Thusanthan',
          role: 'Full Stack Developer',
          icon: '👨‍💻',
          email: 'thusanthan06@gmail.com',
          linkedin:
            'https://www.linkedin.com/in/thusanthan-krishnarajah?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaV0dOo1LRgSUixfo438fzA%3D%3D',
          technology: '',
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
            <Panel header="📦 Project Scope" key="10">
              <Text>{project.scope}</Text>
            </Panel>
            <Panel header="☁️ Cloud Deployment" key="11">
              <Text>{project.cloudDeployment}</Text>
            </Panel>
          </Collapse>

          <Divider dashed style={{ margin: '1px 0' }} />

          <Collapse ghost bordered={false}>
            <Panel header="🧑‍🤝‍🧑 Team Members" key="12">
              <ul>
                {project.teamMembers.map((member, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <TeamOutlined style={{ color: '#1890ff', marginRight: 6 }} />
                    <Text>{member.name} ({member.icon})</Text>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel header="💼 Job Role" key="13">
              <ul>
                {project.teamMembers.map((member, i) => (
                  <li key={i}>– {member.role}</li>
                ))}
              </ul>
            </Panel>

            <Panel header="🔗 LinkedIn" key="14">
              <ul>
                {project.teamMembers
                  .filter(member => member.linkedin)
                  .map((member, i) => (
                    <li key={i}>
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        {member.linkedin}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Panel>
          </Collapse>
        </Space>
      </Card>
    );
  };

  export default Project5;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

project code updated
>>>>>>>>>>>>>>>>>>>>>
import React from 'react';
import { Card, Col, Row, Typography, Space, Divider, Avatar, Tooltip } from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
  ToolOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import './project.css';

const { Title, Text } = Typography;

const projects = [
  {
    name: 'WordPress Website Analysis & Development',
    organization: 'Gates Institute, Singam Buy, Iykons (Projects from UK 🇬🇧)',
    activities: [
      'Analyze existing websites to identify feature gaps.',
      'Develop modern WordPress websites.',
      'Hands-on with plugins and CPanel handling.',
      'Reduced reload issues and improved UX and speed.',
    ],
    team: [
      {
        name: 'JM',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=15',
        role: 'Associate Mobile Developer (Flutter)',
        job: 'Supported UI optimization and device compatibility testing for mobile.',
      },
      {
        name: 'Training Supervisor',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=16',
        role: 'Team Lead / Mentor',
        job: 'Guided development flow, reviewed code, and monitored training objectives.',
      },
    ],
    role: 'Intern – Web Developer (Remote)',
    siteUrls: [
      {
        url: 'https://www.iykons.com/',
        label: 'Iykons Website',
      },
      {
        url: 'https://www.singambayrestaurant.co.uk/',
        label: 'Singam Bay Restaurant Website',
      },
      {
        url: 'https://gatesinstitute.org/',
        label: 'Gates Institute Website',
      },
    ],
  },
  {
    name: 'Backend Development – Online Job Recruitment Platform',
    organization: 'Internal / Training Project (Sri Lanka)',
    activities: [
      'Learn backend development by building a real-time job recruitment platform.',
      'Gained experience in API integration and designing backend logic.',
      'Practiced software documentation and followed real-world engineering standards.',
    ],
    team: [
      {
        name: 'JM',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=17',
        role: 'Backend Developer',
        job: 'Worked on data modeling, API routing, and service integration.',
      },
      {
        name: 'Backend Team Lead',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=18',
        role: 'Team Lead',
        job: 'Supervised backend architecture decisions and conducted code reviews.',
      },
    ],
    role: 'Intern – Backend Developer',
    siteUrls: [],
  },
  {
    name: 'React Web Development – IYCONNECT Product',
    organization: 'Internal Company – IYCONNECT Product Development (Sri Lanka)',
    activities: [
      'Developed a modern financial web application using React JS and TypeScript.',
      '7-month training with hands-on React JS, TypeScript, API integration, Jira, and Agile coordination.',
      'Followed Agile methodology with regular sprints and coordination with team leads.',
    ],
    team: [
      {
        name: 'JM',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=19',
        role: 'React Developer',
        job: 'Focused on UI component development, API binding, and TypeScript integration.',
      },
      {
        name: 'Project Manager',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=20',
        role: 'Team Lead',
        job: 'Oversaw project progress and ensured timely delivery within Agile sprints.',
      },
    ],
    role: 'React Developer – Intern',
    siteUrls: [],
  },
  {
    name: 'Company Website Rebuild Using React – IYKONS',
    organization: 'Internal – IYKONS Company (Sri Lanka / UK 🇱🇰🇬🇧)',
    activities: [
      'Transformed the company’s outdated WordPress website into a modern React-based web platform.',
      'Built full front-end with React and migrated existing WordPress content.',
      'Restructured UI components and improved load speed and user experience.',
    ],
    team: [
      {
        name: 'JM',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=21',
        role: 'Frontend Developer',
        job: 'Led component migration, layout structuring, and page responsiveness.',
      },
      {
        name: 'React Training Lead',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=22',
        role: 'Team Lead',
        job: 'Provided technical direction and conducted code reviews.',
      },
    ],
    role: 'Frontend Developer – Intern',
    siteUrls: [
      {
        url: 'https://www.iykons.com/',
        label: 'Iykons Rebuilt Website',
      },
    ],
  }
];

const Project = () => (
  <section className="project-section">
    <div className="header-container">
      <Title level={2} className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Project Experience
      </Title>
    </div>
    <Row gutter={[24, 24]}>
      {projects.map((project, index) => (
        <Col xs={24} sm={12} md={12} lg={8} key={index}>
          <Card
            className="project-card"
            hoverable
            bordered
            title={
              <Space>
                <ProjectOutlined />
                <Text strong>{project.name}</Text>
              </Space>
            }
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text>
                <TeamOutlined style={{ color: '#1890ff' }} />{' '}
                <strong>Organization:</strong> {project.organization}
              </Text>
              <Divider style={{ margin: '8px 0' }} />

              <Text>
                <ToolOutlined style={{ color: '#faad14' }} />{' '}
                <strong>Key Activities:</strong>
              </Text>
              <ul>
                {project.activities.map((activity, idx) => (
                  <li key={idx}>
                    <Text>{activity}</Text>
                  </li>
                ))}
              </ul>
              <Divider style={{ margin: '8px 0' }} />

              <Text>
                <InfoCircleOutlined style={{ color: '#722ed1' }} />{' '}
                <strong>Role:</strong> {project.role}
              </Text>

              <Divider dashed style={{ margin: '12px 0' }} />

              <Text strong>Team Involvement:</Text>
              <Divider style={{ margin: '8px 0' }} />
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {project.team.map((member, index) => (
                  <Space key={index} size="middle" style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={member.name}>
                      <Avatar src={member.avatar} style={{ marginRight: 8 }} />
                    </Tooltip>
                    <Text>
                      <strong>{member.role}:</strong> {member.job}
                    </Text>
                  </Space>
                ))}
              </Space>

              {project.siteUrls.length > 0 && (
                <>
                  <Divider style={{ margin: '12px 0' }} />
                  <Text strong>Visit the Project Websites:</Text>
                  <Space direction="vertical" size="middle">
                    {project.siteUrls.map((site, idx) => (
                      <Space key={idx}>
                        <LinkOutlined />
                        <Text>
                          <a href={site.url} target="_blank" rel="noopener noreferrer">{site.label}</a>
                        </Text>
                      </Space>
                    ))}
                  </Space>
                </>
              )}
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Project;


header code 
///* /**/ 

import React, { useState } from 'react';
import { Layout, Space, Menu, Switch } from 'antd';
import {
  SunOutlined,
  MoonOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const AppHeader = ({ darkMode, setDarkMode }) => {
  const [current, setCurrent] = useState('mail');

  const items = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Navigation Three',
      key: 'setting',
      icon: <SettingOutlined />,
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];

  const onClick = (e) => {
    if (e.key !== 'alipay') {
      setCurrent(e.key);
    }
  };

  return (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: darkMode ? '#000' : '#fff',
        color: darkMode ? '#fff' : '#000',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ flex: 1 }}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ color: darkMode ? '#fff' : '#000' }}
        />
      </div>

      <Space style={{ color: darkMode ? '#fff' : '#000' }}>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </Space>
    </Layout.Header>
  );
};

export default AppHeader;

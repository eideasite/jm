import React from 'react';
import { Descriptions, Tag, Card } from 'antd';

const colors = [

    'geekblue',
    'purple',
      'green',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'magenta',
  'cyan',
  'blue',


];

const data = [
  {
    project: 'WordPress Website Analysis',
    tools: 'Plugins, CPanel, UX',
    skills: 'Problem Solving, Documentation',
  },
  {
    project: 'Backend – Job Recruitment Platform',
    tools: 'APIs, Backend Logic',
    skills: 'API Integration, Documentation, Problem Solving',
  },
  {
    project: 'IYCONNECT – Web Product',
    tools: 'React, TypeScript, Jira, Agile',
    skills: 'React JS, Jira, Scrum Facilitation, Team Coordination',
  },
  {
    project: 'IYKONS – Website Rebuild',
    tools: 'React, HTML5, CSS3, UI/UX',
    skills: 'React JS, Problem Solving',
  },
  {
    project: 'BA Training – UK Business',
    tools: 'Wireframes, Stakeholder Meetings',
    skills: 'Requirement Gathering, Wireframing, Documentation, Client Communication',
  },
  {
    project: 'Stat Scout System',
    tools: 'MVC, Cloud, Team Flow',
    skills: 'System Analysis, Documentation, Team Coordination',
  },
  {
    project: 'Blood Bank System',
    tools: 'Workflow Diagrams, Proposals',
    skills: 'Requirement Gathering, Documentation, Client Communication',
  },
  {
    project: 'IYCONNECT – Financial Web App',
    tools: 'React, APIs, Scrum',
    skills: 'React JS, API Integration, Scrum Facilitation, Team Coordination',
  },
  {
    project: 'IYCONNECT – Financial App (Intern)',
    tools: 'Wireframes, Docs, Analysis',
    skills: 'Wireframing, System Analysis, Documentation, Team Coordination',
  },
  {
    project: 'IYCONNECT – Mobile Enhancements',
    tools: 'Flutter, UX',
    skills: 'Flutter, Problem Solving, Documentation, Team Coordination',
  },
  {
    project: 'Allie Bhavan – E-Commerce',
    tools: 'Shopify, Flutter, QA Docs',
    skills: 'Flutter, Documentation, Team Coordination, Problem Solving',
  },
  {
    project: 'Bridge Park Hotel System',
    tools: 'React, Stripe, SiteMinder, Jira',
    skills: 'React JS, Jira, Scrum Facilitation, Team Coordination, Leadership, Problem Solving',
  },
  {
    project: 'Smart Money Exchange',
    tools: 'System Flow Review',
    skills: 'System Analysis, Problem Solving, Documentation',
  },
  {
    project: 'IYConnect – Feature Docs',
    tools: 'Jira, Slack, Coordination',
    skills: 'Jira, Requirement Gathering, Documentation, Team Coordination, Client Communication',
  },
  {
    project: 'PMI – Project Management System',
    tools: 'Specs, Flowcharts, Jira',
    skills: 'Jira, System Analysis, Documentation, Scrum Facilitation, Team Coordination',
  },
  {
    project: 'Jura – E-Commerce Integration',
    tools: 'WhatsApp API, R&D',
    skills: 'API Integration, Requirement Gathering, Team Coordination, Client Communication, Leadership',
  },
  {
    project: 'Pizza Da Valter App & Website',
    tools: 'Flutter, React, .NET, Jira',
    skills: 'React JS, Flutter, API Integration, Jira, Scrum Facilitation, Team Coordination, Client Communication, Leadership',
  },
  {
    project: 'HMRC UK Tax Portal',
    tools: 'APIs, Testing, Analysis',
    skills: 'API Integration, System Analysis, Documentation, Client Communication',
  },
  {
    project: 'OCR Invoice System',
    tools: 'OCR, AI, React',
    skills: 'React JS, System Analysis, Documentation, Team Coordination',
  },
  {
    project: 'Austrian UX/UI Modernization',
    tools: 'Wireframes, UX, Leadership',
    skills: 'Wireframing, System Analysis, Team Coordination, Leadership, Client Communication',
  },
  {
    project: 'FatChef POS System',
    tools: 'React, Flutter, APIs',
    skills: 'React JS, Flutter, API Integration, Requirement Gathering, Documentation, Team Coordination, Client Communication',
  },
  {
    project: 'Water Billing System',
    tools: 'Workflows, Wireframes, Proposals',
    skills: 'Wireframing, System Analysis, Requirement Gathering, Documentation, Client Communication, Leadership',
  },
];

const App = () => (
  <div style={{ padding: 16, maxHeight: '80vh', overflowY: 'auto' }}>
    {data.map((item, index) => (
      <Card
        key={index}
        title={item.project}
        style={{ marginBottom: 24 }}
        bordered
        hoverable
      >
        <Descriptions
          bordered
          column={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
          size="middle"
        >
          <Descriptions.Item label="Tools / Tech Used">
            {item.tools.split(',').map((tool, idx) => (
              <Tag
                key={idx}
                color={colors[idx % colors.length]} // cycle colors
              >
                {tool.trim()}
              </Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Key Skills Mapped">
            {item.skills}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    ))}
  </div>
);

export default App;

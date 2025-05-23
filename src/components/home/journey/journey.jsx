import React from 'react';
import { Tabs, Table, Card, Descriptions, Tag } from 'antd';

const { TabPane } = Tabs;

const colors = [
  'geekblue', 'purple', 'green', 'red', 'volcano', 'orange',
  'gold', 'lime', 'magenta', 'cyan', 'blue',
];

const data = [
  { project: 'IYCONNECT – Web Product', tools: 'React, TypeScript, Jira, Agile', skills: 'React JS, Jira, Scrum Facilitation, Team Coordination' },
  { project: 'IYKONS – Website Rebuild', tools: 'React, HTML5, CSS3, UI/UX', skills: 'React JS, Problem Solving' },
  { project: 'BA Training – UK Business', tools: 'Wireframes, Stakeholder Meetings', skills: 'Requirement Gathering, Wireframing, Documentation, Client Communication' },
  { project: 'Backend – Job Recruitment Platform', tools: 'APIs, Backend Logic', skills: 'API Integration, Documentation, Problem Solving' },
  { project: 'WordPress Website Analysis', tools: 'Plugins, CPanel, UX', skills: 'Problem Solving, Documentation' },
  { project: 'Stat Scout System', tools: 'MVC, Cloud, Team Flow', skills: 'System Analysis, Documentation, Team Coordination' },
  { project: 'Blood Bank System', tools: 'Workflow Diagrams, Proposals', skills: 'Requirement Gathering, Documentation, Client Communication' },
  { project: 'IYCONNECT – Financial Web App', tools: 'React, APIs, Scrum', skills: 'React JS, API Integration, Scrum Facilitation, Team Coordination' },
  { project: 'IYCONNECT – Financial App (BA Intern)', tools: 'Wireframes, Docs, Analysis', skills: 'Wireframing, System Analysis, Documentation, Team Coordination' },
  { project: 'IYCONNECT – Mobile Enhancements', tools: 'Flutter, UX', skills: 'Flutter, Problem Solving, Documentation, Team Coordination' },
  { project: 'Allie Bhavan – E-Commerce', tools: 'Shopify, Flutter, QA Docs', skills: 'Flutter, Documentation, Team Coordination, Problem Solving' },
  { project: 'Bridge Park Hotel System', tools: 'React, Stripe, SiteMinder, Jira', skills: 'React JS, Jira, Scrum Facilitation, Team Coordination, Leadership, Problem Solving' },
  { project: 'Smart Money Exchange', tools: 'System Flow Review', skills: 'System Analysis, Problem Solving, Documentation' },
  { project: 'IYConnect – Feature Docs', tools: 'Jira, Slack, Coordination', skills: 'Jira, Requirement Gathering, Documentation, Team Coordination, Client Communication' },
  { project: 'PMI – Project Management System', tools: 'Specs, Flowcharts, Jira', skills: 'Jira, System Analysis, Documentation, Scrum Facilitation, Team Coordination' },
  { project: 'Jura – E-Commerce Integration', tools: 'WhatsApp API, R&D', skills: 'API Integration, Requirement Gathering, Team Coordination, Client Communication, Leadership' },
  { project: 'Pizza Da Valter App & Website', tools: 'Flutter, React, .NET, Jira', skills: 'React JS, Flutter, API Integration, Jira, Scrum Facilitation, Team Coordination, Client Communication, Leadership' },
  { project: 'HMRC UK Tax Portal', tools: 'APIs, Testing, Analysis', skills: 'API Integration, System Analysis, Documentation, Client Communication' },
  { project: 'OCR Invoice System', tools: 'OCR, AI, React', skills: 'React JS, System Analysis, Documentation, Team Coordination' },
  { project: 'Austrian UX/UI Modernization', tools: 'Wireframes, UX, Leadership', skills: 'Wireframing, System Analysis, Team Coordination, Leadership, Client Communication' },
  { project: 'FatChef POS System', tools: 'React, Flutter, APIs', skills: 'React JS, Flutter, API Integration, Requirement Gathering, Documentation, Team Coordination, Client Communication' },
  { project: 'Water Billing System', tools: 'Workflows, Wireframes, Proposals', skills: 'Wireframing, System Analysis, Requirement Gathering, Documentation, Client Communication, Leadership' },
];


const tableColumns = [
  { title: 'Project', dataIndex: 'project', key: 'project', ellipsis: true },
  { title: 'Tools', dataIndex: 'tools', key: 'tools', ellipsis: true },
  { title: 'Skills', dataIndex: 'skills', key: 'skills', ellipsis: true },
];

const Journey = () => (
  <Card
    style={{
      maxWidth: 960,
      margin: '20px auto',
      height: '85vh',
      padding: 16,
      overflowY: 'auto',  // Outer scroll bar controls vertical scroll
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: 8,
      backgroundColor: '#fff',
    }}
  >
    <Tabs defaultActiveKey="1" type="card" size="large">

      {/* === TAB 1: CARD VIEW === */}
      <TabPane tab="Card View" key="1">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.project}
            bordered
            hoverable
            style={{ marginBottom: 24 }}
          >
            <Descriptions
              bordered
              column={{ xs: 1, sm: 2, md: 3 }}
              size="middle"
              contentStyle={{ textAlign: 'center' }}
              labelStyle={{ textAlign: 'center', fontWeight: '600' }}
            >
              <Descriptions.Item label="Tools / Tech Used">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                  {item.tools.split(',').map((tool, idx) => (
                    <Tag key={idx} color={colors[idx % colors.length]}>
                      {tool.trim()}
                    </Tag>
                  ))}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Key Skills Mapped">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                  {item.skills.split(',').map((skill, idx) => (
                    <Tag key={idx} color={colors[(idx + 5) % colors.length]}>
                      {skill.trim()}
                    </Tag>
                  ))}
                </div>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        ))}
      </TabPane>

      {/* === TAB 2: TABLE VIEW === */}
      <TabPane tab="Table View" key="2">
        <Table
          dataSource={data}
          columns={tableColumns}
          rowKey={(record) => record.project}
          pagination={false}
          bordered
          size="middle"
          style={{ tableLayout: 'fixed' }} // tidy columns
        />
      </TabPane>
    </Tabs>
  </Card>
);

export default Journey;
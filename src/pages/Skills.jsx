import React from 'react';
import { Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

// Render green check icon if value is '✓'
const renderCheck = (val) =>
  val === '✓' ? <CheckOutlined style={{ color: 'green' }} /> : null;

// Table columns
const columns = [
  { title: 'Project Name', dataIndex: 'project', key: 'project', fixed: 'left', width: 200 },
  { title: 'React JS', dataIndex: 'react', key: 'react', render: renderCheck },
  { title: 'Flutter', dataIndex: 'flutter', key: 'flutter', render: renderCheck },
  { title: 'API Integration', dataIndex: 'api', key: 'api', render: renderCheck },
  { title: 'Jira', dataIndex: 'jira', key: 'jira', render: renderCheck },
  { title: 'Wireframing', dataIndex: 'wireframing', key: 'wireframing', render: renderCheck },
  { title: 'Requirement Gathering', dataIndex: 'requirement', key: 'requirement', render: renderCheck },
  { title: 'System Analysis', dataIndex: 'analysis', key: 'analysis', render: renderCheck },
  { title: 'Documentation', dataIndex: 'docs', key: 'docs', render: renderCheck },
  { title: 'Team Coordination', dataIndex: 'team', key: 'team', render: renderCheck },
  { title: 'Client Communication', dataIndex: 'client', key: 'client', render: renderCheck },
  { title: 'Leadership', dataIndex: 'leadership', key: 'leadership', render: renderCheck },
  { title: 'Problem Solving', dataIndex: 'problem', key: 'problem', render: renderCheck },
  { title: 'Scrum Facilitation', dataIndex: 'scrum', key: 'scrum', render: renderCheck },
];

// Table data
const data = [
  {
    key: '1',
    project: 'WordPress Website Analysis',
    docs: '✓',
    leadership: '✓',
  },
  {
    key: '2',
    project: 'Backend Dev – Job Platform',
    api: '✓',
    docs: '✓',
    leadership: '✓',
  },
  {
    key: '3',
    project: 'IYCONNECT React Dev',
    react: '✓',
    jira: '✓',
    client: '✓',
    leadership: '✓',
  },
  {
    key: '4',
    project: 'IYKONS Website Rebuild',
    react: '✓',
    leadership: '✓',
  },
  {
    key: '5',
    project: 'BA Training – UK Business',
    flutter: '✓',
    wireframing: '✓',
    requirement: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '6',
    project: 'Stat Scout System',
    analysis: '✓',
    docs: '✓',
  },
  {
    key: '7',
    project: 'Blood Bank System',
    flutter: '✓',
    requirement: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '8',
    project: 'IYCONNECT Financial App',
    react: '✓',
    api: '✓',
    client: '✓',
    leadership: '✓',
  },
  {
    key: '9',
    project: 'IYCONNECT BA Intern',
    jira: '✓',
    analysis: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '10',
    project: 'IYCONNECT Mobile Enhancements',
    flutter: '✓',
    client: '✓',
    team: '✓',
    leadership: '✓',
  },
  {
    key: '11',
    project: 'Allie Bhavan E-Commerce',
    flutter: '✓',
    client: '✓',
    team: '✓',
    leadership: '✓',
  },
  {
    key: '12',
    project: 'Bridge Park Hotel Booking',
    react: '✓',
    jira: '✓',
    client: '✓',
    team: '✓',
    leadership: '✓',
    problem: '✓',
    scrum: '✓',
  },
  {
    key: '13',
    project: 'Smart Money Exchange',
    analysis: '✓',
    docs: '✓',
    leadership: '✓',
  },
  {
    key: '14',
    project: 'IYConnect Feature Docs',
    api: '✓',
    requirement: '✓',
    docs: '✓',
    team: '✓',
    client: '✓',
  },
  {
    key: '15',
    project: 'PMI Project Management',
    api: '✓',
    analysis: '✓',
    docs: '✓',
    team: '✓',
    leadership: '✓',
  },
  {
    key: '16',
    project: 'Jura E-Commerce',
    flutter: '✓',
    wireframing: '✓',
    client: '✓',
    team: '✓',
    leadership: '✓',
  },
  {
    key: '17',
    project: 'Pizza Da Valter App',
    react: '✓',
    flutter: '✓',
    api: '✓',
    jira: '✓',
    client: '✓',
    team: '✓',
    leadership: '✓',
    problem: '✓',
  },
  {
    key: '18',
    project: 'HMRC UK Tax Portal',
    api: '✓',
    analysis: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '19',
    project: 'OCR Invoice System',
    react: '✓',
    analysis: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '20',
    project: 'Austrian UX/UI Modernization',
    jira: '✓',
    analysis: '✓',
    team: '✓',
    client: '✓',
  },
  {
    key: '21',
    project: 'FatChef POS System',
    react: '✓',
    flutter: '✓',
    api: '✓',
    wireframing: '✓',
    docs: '✓',
    team: '✓',
  },
  {
    key: '22',
    project: 'Water Billing System',
    jira: '✓',
    wireframing: '✓',
    requirement: '✓',
    analysis: '✓',
    team: '✓',
    client: '✓',
  },
];

const Journey = () => (
  <div style={{ padding: 24 }}>
    <h2 style={{ marginBottom: 16 }}>Project Journey Matrix</h2>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false} // Pagination removed
      scroll={{ x: 1600, y: 600 }} // Horizontal and vertical scroll enabled
      bordered
      size="middle"
    />
  </div>
);

export default Journey;



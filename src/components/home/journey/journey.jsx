import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Carousel,
  Col,
  Divider,
  Drawer,
  List,
  Row,
  Card,
  Button,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);


const projectSummaries = [
  {
    title: 'WordPress Website Analysis',
    tasks: [
      'Analyzed site using plugins and CPanel.',
      'Evaluated UX structure.',
      'Documented improvement suggestions.',
    ],
  },
  {
    title: 'IYKONS – Website Rebuild',
    tasks: [
      'WordPress website troubleshooted.',
      'Create website in React.',
      'HTML, CSS, React JS.',
      'Addressed and resolved UI-related issues.',
    ],
  },
  {
    title: 'IYCONNECT – Web Product',
    tasks: [
      'Developed frontend using React and TypeScript.',
      'Participated in Agile development using Jira.',
      'Facilitated Scrum meetings.',
      'Participated in team workflows and task assignments.',
    ],
  },
  {
    title: 'UK Business Profile',
    tasks: [
      'Conducted stakeholder meetings for requirements.',
      'BA Training',
      'Created wireframes and user flow documentation.',
      'Documented requirements and system design.',
      'Managed client communications via emails.',
    ],
  },
  {
    title: 'Backend – Job Recruitment Platform',
    tasks: [
      'Integrated backend APIs.',
      'Study the requirement of API and SRS documentation.',
      'Defined backend logic and data flow.',
      'Handled backend database and SQL.',
    ],
  },
  {
    title: 'Stat Scout System',
    tasks: [
      'Stakeholder communication, SRS and BRD documentation implementation.',
      'Project management and system design architecture purpose.',
      'Created cloud-based workflows using MVC.',
      'Coordinated with team for documentation and flow.',
    ],
  },
  {
    title: 'Blood Bank System',
    tasks: [
      'Gathered and documented requirements.',
      'Created workflow diagrams.',
      'Client meeting and requirement gathering.',
      'Communicated proposals to clients.',
    ],
  },
  {
    title: 'IYCONNECT – Financial App (BA Intern)',
    tasks: [
      'Designed wireframes for mobile and web.',
      'Conducted system analysis.',
      'Managed internal documentation and updates.',
    ],
  },
  {
    title: 'Allie Bhavan – E-Commerce',
    tasks: [
      'Integrated e-commerce platform using Shopify and Flutter.',
      'Conducted quality assurance documentation.',
      'Led frontend development and issue tracking.',
    ],
  },
  {
    title: 'IYCONNECT – Financial Web App',
    tasks: [
      'Built financial dashboard with UX.',
      'Task progress implementation support.',
      'Facilitated Scrum practices.',
      'Led team coordination activities.',
    ],
  },
  {
    title: 'IYCONNECT – Mobile Enhancements',
    tasks: [
      'Developed UI enhancements using Flutter.',
      'Solved UX and responsiveness issues.',
      'Coordinated documentation process.',
    ],
  },
  {
    title: 'Bridge Park Hotel System',
    tasks: [
      'Developed frontend with React and payment integration via Stripe.',
      'Integrated SiteMinder and booking features.',
      'Managed Jira tasks.',
      'Led team coordination and problem-solving.',
    ],
  },
  {
    title: 'Smart Money Exchange',
    tasks: [
      'Reviewed and optimized system flows.',
      'Conducted system analysis.',
      'Documented operational gaps and fixes.',
    ],
  },
  {
    title: 'IYConnect – Feature Docs',
    tasks: [
      'Managed Jira documentation.',
      'Gathered requirements.',
      'Facilitated client communications.',
      'Coordinated cross-functional team work.',
    ],
  },
  {
    title: 'PMI – Project Management System',
    tasks: [
      'Created system specifications and flowcharts.',
      'Used Jira for sprint planning.',
      'Performed system analysis and documentation.',
      'Facilitated Scrum coordination.',
    ],
  },
  {
    title: 'Jura – E-Commerce Integration',
    tasks: [
      'Researched and integrated WhatsApp API.',
      'Conducted requirement gathering.',
      'Managed client communication and leadership roles.',
    ],
  },
  {
    title: 'Pizza Da Valter App & Website',
    tasks: [
      'Developed using Flutter, React, .NET.',
      'Handled API integration.',
      'Led Scrum facilitation and Jira task management.',
      'Coordinated with team and clients.',
    ],
  },
  {
    title: 'HMRC UK Tax Portal',
    tasks: [
      'Integrated APIs for tax data processing.',
      'Performed testing and system analysis.',
      'Documented user and system level interactions.',
      'Sandbox data validation testing with API user and system level interactions.',
    ],
  },
  {
    title: 'OCR Invoice System',
    tasks: [
      'Applied OCR and AI technologies.',
      'Developed UI with React.',
      'Analyzed system for improvements.',
      'Managed technical documentation.',
    ],
  },
  {
    title: 'FAT CHEF System Austrian UX/UI Modernization',
    tasks: [
      'Designed UX wireframes.',
      'Led system and UI analysis.',
      'Coordinated leadership activities.',
      'Handled client communication.',
    ],
  },
  {
    title: 'FatChef POS System',
    tasks: [
      'Developed features using React and Flutter.',
      'Integrated third-party APIs.',
      'Managed documentation and requirement gathering.',
      'Coordinated project teams and clients.',
    ],
  },
  {
    title: 'Water Billing System',
    tasks: [
      'Created workflows and wireframes.',
      'Drafted proposals for system features.',
      'Conducted requirement gathering and documentation.',
      'Led communication with clients and internal teams.',
    ],
  },
];


const Journey = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [drawerWidth, setDrawerWidth] = useState(720);
  const [drawerPlacement, setDrawerPlacement] = useState('right');

  const showDrawer = (item) => {
    setSelectedProject(item);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDrawerWidth('100%');
        setDrawerPlacement('bottom'); // or 'right' if you prefer
      } else {
        setDrawerWidth(720);
        setDrawerPlacement('right');
      }
    };

    handleResize(); // initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>{`
  .ant-carousel .slick-dots li.slick-active button {
    background-color: rgb(87, 221, 255) !important;
  }
  .ant-carousel .slick-dots li button {
    background-color: rgb(95, 196, 255) !important;
  }

  @media (max-width: 768px) {
    .ant-drawer-bottom .ant-drawer-content {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
    }

    .ant-drawer-bottom .ant-drawer-body {
      padding: 16px 20px 40px;
      max-height: 80vh;
      overflow-y: auto;
    }

    .ant-drawer-bottom .ant-btn {
      position: absolute !important;
      top: 12px !important;
      left: 12px !important;
      background: none;
      box-shadow: none;
    }

    .site-description-item-profile-p {
      font-size: 16px;
      margin-top: 32px;
    }
  }
`}</style>


      <Carousel autoplay dotPosition="bottom" style={{ padding: '32px 0' }}>
        {projectSummaries.map((item, index) => (
          <div key={index} style={{ padding: '0 24px' }}>
            <Card
              title={item.title}
              bordered={false}
              extra={
                <Button type="link" onClick={() => showDrawer(item)}>
                  View Tasks
                </Button>
              }
              style={{
                maxWidth: 900,
                minHeight: 240,
                margin: 'auto',
                textAlign: 'left',
                borderRadius: 10,
                padding: 16,
                fontSize: '16px',
                lineHeight: '1.75',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
              }}
            >
              <List
                size="large"
                dataSource={item.tasks.slice(0, 3)}
                renderItem={(task) => (
                  <List.Item style={{ border: 'none', paddingLeft: 0 }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 12 }} />
                    <span>{task}</span>
                  </List.Item>
                )}
              />
            </Card>
          </div>
        ))}
      </Carousel>

      <Drawer
        width={drawerWidth}
        placement={drawerPlacement}
        closable={false}
        onClose={onClose}
        open={open}
        bodyStyle={{ padding: 24 }}
      >
        {selectedProject && (
          <>
            <Button
              type="text"
              onClick={onClose}
              icon={<CloseOutlined />}
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 1000,
                fontSize: 20,
                color: '#ff4d4f',
              }}
            />

            <p className="site-description-item-profile-p" style={{ marginBottom: 24, paddingTop: 40 }}>
              Project Overview
            </p>
            <Row>
              <Col span={24}>
                <DescriptionItem title="Project Title" content={selectedProject.title} />
              </Col>
            </Row>
            <Divider />
            <p className="site-description-item-profile-p">Detailed Tasks</p>
            <Row>
              <Col span={24}>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {selectedProject.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: 16,
                        display: 'flex',
                        alignItems: 'start',
                        fontSize: 15,
                        lineHeight: '1.7',
                      }}
                    >
                      <CheckCircleOutlined style={{ color: '#1890ff', marginRight: 12, paddingTop: 4 }} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </>
        )}
      </Drawer>
    </>
  );
};

export default Journey;
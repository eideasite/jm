import React, { useRef } from 'react';
import { Carousel, Typography, Card } from 'antd';
import './Journey.css';

const { Title, Paragraph } = Typography;

const PrevArrow = ({ onClick, darkMode }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={darkMode ? '#40a9ff' : '#1890ff'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 17 9 12 15 6" />
    </svg>
  </div>
);

const NextArrow = ({ onClick, darkMode }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={darkMode ? '#40a9ff' : '#1890ff'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 15 12 9 6" />
    </svg>
  </div>
);

const projectSummaries = [
  {
    title: 'IYCONNECT – Web Product',
    tasks: [
      'Developed frontend using React and TypeScript.',
      'Participated in Agile development using Jira.',
      'Facilitated Scrum meetings.',
      'Coordinated team workflows and task assignments.',
    ],
  },
  {
    title: 'IYKONS – Website Rebuild',
    tasks: [
      'Redesigned website with HTML5, CSS3, and React.',
      'Improved UI/UX components.',
      'Addressed and resolved UI-related issues.',
    ],
  },
  {
    title: 'BA Training – UK Business',
    tasks: [
      'Conducted stakeholder meetings for requirements.',
      'Created wireframes and user flow documentation.',
      'Documented requirements and system design.',
      'Managed client communications.',
    ],
  },
  {
    title: 'Backend – Job Recruitment Platform',
    tasks: [
      'Integrated backend APIs.',
      'Defined backend logic and data flow.',
      'Documented technical implementation.',
    ],
  },
  {
    title: 'WordPress Website Analysis',
    tasks: [
      'Analyzed site using plugins and CPanel.',
      'Evaluated UX structure.',
      'Documented improvement suggestions.',
    ],
  },
  {
    title: 'Stat Scout System',
    tasks: [
      'Performed system analysis.',
      'Created cloud-based workflows using MVC.',
      'Coordinated with team for documentation and flow.',
    ],
  },
  {
    title: 'Blood Bank System',
    tasks: [
      'Gathered and documented requirements.',
      'Created workflow diagrams.',
      'Communicated proposals to clients.',
    ],
  },
  {
    title: 'IYCONNECT – Financial Web App',
    tasks: [
      'Built financial dashboard with React.',
      'Integrated APIs for live data.',
      'Facilitated Scrum practices.',
      'Led team coordination activities.',
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
    title: 'IYCONNECT – Mobile Enhancements',
    tasks: [
      'Developed UI enhancements using Flutter.',
      'Solved UX and responsiveness issues.',
      'Coordinated documentation process.',
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
    title: 'Austrian UX/UI Modernization',
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

const Journey = ({ darkMode = false }) => {
  const carouselRef = useRef(null);

  return (
    <div className="journey-container">
      <PrevArrow
        darkMode={darkMode}
        onClick={() => carouselRef.current?.prev()}
      />
      <NextArrow
        darkMode={darkMode}
        onClick={() => carouselRef.current?.next()}
      />

      <Card bordered={false} className="journey-card">
        <Carousel
          ref={carouselRef}
          autoplay
          dots={false}
          draggable
          autoplaySpeed={5000}
        >
          {projectSummaries.map((project, index) => (
            <div key={index}>
              <div className="carousel-content">
                <Title level={4} className="carousel-title">
                  {project.title}
                </Title>
                <Paragraph className="carousel-tasks">
                  {project.tasks.map((task, i) => (
                    <div key={i} className="task-item">
                      • {task}
                    </div>
                  ))}
                </Paragraph>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
    </div>
  );
};

export default Journey;

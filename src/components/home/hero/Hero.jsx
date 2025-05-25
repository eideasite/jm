import React, { useState, useEffect } from 'react';
import { Card, Avatar, Typography, Row, Col, Space } from 'antd';
import './Hero.css';

const { Title, Text } = Typography;

// Static user profile data
const user = {
  name: 'Jeyamohan Manoharan',
  title:
    'Tech-Savvy Solution Analyst | Business Analyst | Software Project Coordinator specialize in project planning, resource allocation, and timely product delivery.',
  imageUrl: '/assets/images/4.jpg',
};

// Shared "About" content card
const AboutCard = () => (
<Card
  bordered={false}
  style={{
    marginTop: 20,
    background: 'var(--light-bg)',
    padding: 24,
  }}
  className="about-card"
>
  <h2>T shaped Professional | Tech-Savvy | Business Analyst | Software Project Coordinator | Solution Analyst</h2>

  <h1>I BELIEVE IN MY TALENTS.</h1>

  <h3>
    I am JM — a tech-savvy Solution Analyst, Business Analyst, and Software Project Coordinator — skilled in leveraging
    modern technologies to drive innovation in scalable software solutions. I specialize in project planning, resource
    allocation, and ensuring timely product delivery while applying strategic thinking, analytical problem-solving,
    and risk management. My expertise includes user story mapping, wireframe modeling, functional prototyping, and
    workflow optimization. With strong client communication and cross-team collaboration skills, I am prepared to
    contribute effectively to impactful projects in the modern IT sector.
  </h3>
</Card>

);

// Desktop layout (flex, horizontal)
const HeroDesktop = () => (
  <Row
    justify="center"
    style={{
      minHeight: '80vh',
      padding: '40px 0',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Col xs={24} sm={20} md={16} lg={12}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card
          hoverable
          style={{
            width: '100%',
            padding: 20,
            borderRadius: 10,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <div className="hero-content" style={{ maxWidth: 700, display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={user.imageUrl}
              alt={user.name}
              className="hero-avatar"
              size={220}
            />
            <div style={{ marginLeft: 24 }}>
              <Title level={3} style={{ margin: 0 }}>{user.name}</Title>
              <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
                {user.title}
              </Text>
            </div>
          </div>
        </Card>

        <AboutCard />
      </Space>
    </Col>
  </Row>
);

// Mobile layout (stacked, centered)
const HeroMobile = () => (
  <Row justify="center" style={{ padding: '20px 0' }}>
    <Col xs={24} sm={20} md={16} lg={12}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card
          hoverable
          style={{
            width: '100%',
            padding: 20,
            borderRadius: 10,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <Avatar
            src={user.imageUrl}
            alt={user.name}
            className="hero-avatar"
            size={140}
            style={{ marginBottom: 16 }}
          />
          <Title level={3} style={{ margin: 0 }}>{user.name}</Title>
          <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
            {user.title}
          </Text>
        </Card>

        <AboutCard />
      </Space>
    </Col>
  </Row>
);

// Device type detector: desktop or mobile
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;

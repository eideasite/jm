import React, { useState, useEffect } from 'react';
import { Card, Avatar, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const user = {
  name: 'Jeyamohan Manoharan',
  title:
    'Tech-Savvy Solution Analyst | Business Analyst | Software Project Coordinator specialize in project planning, resource allocation, and timely product delivery.',
  description: '',
  imageUrl: '/assets/images/4.jpg',
};

// Desktop version - avatar left, text left aligned
const HeroDesktop = () => (
  <Row justify="center" style={{ padding: '20px 0' }}>
    <Col xs={24} sm={20} md={16} lg={12}>
      <Card
        hoverable
        style={{
          width: '100%',
          padding: 20,
          textAlign: 'left',
          borderRadius: 10,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease',
          minWidth: 300,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={user.imageUrl}
            size={220}
            alt={user.name}
            style={{
              marginRight: 20,
              width: 220,
              height: 220,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          />
          <div>
            <Title level={3} style={{ margin: 0 }}>
              {user.name}
            </Title>
            <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
              {user.title}
            </Text>
            <p style={{ marginTop: 10 }}>{user.description}</p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
);

// Mobile version - avatar stacked, text centered
const HeroMobile = () => (
  <Row justify="center" style={{ padding: '20px 0' }}>
    <Col xs={24} sm={20} md={16} lg={12}>
      <Card
        hoverable
        style={{
          width: '100%',
          padding: 20,
          textAlign: 'center',
          borderRadius: 10,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease',
          minWidth: 300,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src={user.imageUrl}
            size={140}
            alt={user.name}
            style={{
              marginBottom: 16,
              width: 140,
              height: 140,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          />
          <div>
            <Title level={3} style={{ margin: 0 }}>
              {user.name}
            </Title>
            <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
              {user.title}
            </Text>
            <p style={{ marginTop: 10 }}>{user.description}</p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width on mount & resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;

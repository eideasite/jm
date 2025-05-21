// src/components/hero/Hero.jsx
import React from 'react';
import { Card, Avatar, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Hero = () => {
  const user = {
    name: 'John Doe',
    title: 'Web Developer',
    description: 'I am a passionate web developer who enjoys creating user-friendly websites and applications.',
    imageUrl: 'https://via.placeholder.com/150',
  };

  return (
    <Row justify="center" style={{ padding: '20px 0' }}>
      <Col xs={24} sm={18} md={12} lg={8}>
        <Card
          hoverable
          style={{
            width: '100%',
            padding: '20px',
            textAlign: 'left',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={user.imageUrl}
              size={120} // Increased avatar size
              alt={user.name}
              style={{ marginRight: 20 }}
            />
            <div>
              <Title level={3} style={{ margin: 0, textAlign: 'right' }}>
                {user.name}
              </Title>
              <Text type="secondary" style={{ display: 'block', textAlign: 'right' }}>
                {user.title}
              </Text>
            </div>
          </div>
          <p style={{ marginTop: 10, textAlign: 'left' }}>{user.description}</p>
        </Card>
      </Col>
    </Row>
  );
};

export default Hero;

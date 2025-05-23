import React, { useState } from 'react';
import { Layout, Row, Col, Button, Card, Tooltip } from 'antd';
import {
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { QRCode } from 'antd';

const { Footer } = Layout;

const AppFooter = ({ darkMode }) => {
  const [hovered, setHovered] = useState(null);

  const iconButtonStyle = (platform) => ({
    fontSize: '24px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hovered === platform ? socialColorMap[platform] : '#1f1f1f',
    color: '#fff',
    border: '1px solid #444',
    transition: 'all 0.3s ease',
  });

  const socialLinks = [
    {
      platform: 'Facebook',
      icon: <FacebookOutlined />,
      link: 'https://www.facebook.com/public/Jeya-Manoharan',
    },
    {
      platform: 'LinkedIn',
      icon: <LinkedinOutlined />,
      link: 'https://www.linkedin.com/posts/career4jm',
    },
    {
      platform: 'GitHub',
      icon: <GithubOutlined />,
      link: 'https://github.com/eideasite',
    },
    {
      platform: 'YouTube',
      icon: <YoutubeOutlined />,
      link: 'https://youtube.com/@whytechboost?si=L42uW-DXZ0G4wncR',
    },
  ];

  const socialColorMap = {
    Facebook: '#1877F2',
    LinkedIn: '#0077B5',
    GitHub: '#333333',
    YouTube: '#FF0000',
  };

  return (
    <Footer
      style={{
        background: darkMode ? '#1f1f1f' : '#fafafa',
        padding: '60px 20px',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <Card
        bordered={false}
        style={{
          width: '100%',
          borderRadius: '12px',
          padding: '40px 20px',
          boxShadow: darkMode
            ? '0px 4px 16px rgba(255, 255, 255, 0.05)'
            : '0px 4px 16px rgba(0, 0, 0, 0.05)',
          backgroundColor: darkMode ? '#2a2a2a' : '#fff',
          textAlign: 'center',
        }}
      >
        {/* Social Icons */}
        <Row justify="center" gutter={[16, 16]}>
          {socialLinks.map((item) => (
            <Col key={item.platform}>
              <Tooltip title={`Open ${item.platform}`} color={darkMode ? '#555' : '#1890ff'}>
                <Button
                  shape="circle"
                  icon={item.icon}
                  style={iconButtonStyle(item.platform)}
                  onClick={() => window.open(item.link, '_blank')}
                  onMouseEnter={() => setHovered(item.platform)}
                  onMouseLeave={() => setHovered(null)}
                />
              </Tooltip>
            </Col>
          ))}
        </Row>

        {/* WhatsApp QR Section */}
        <Row
          justify="center"
          align="middle"
          gutter={[24, 24]}
          style={{ marginTop: 40 }}
        >
          <Col>
            <QRCode value="https://wa.me/yourwhatsappnumber" size={120} />
          </Col>
          <Col>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                color: darkMode ? '#ddd' : '#333',
              }}
            >
              <WhatsAppOutlined
                style={{
                  fontSize: '20px',
                  marginRight: '8px',
                  color: '#25D366',
                }}
              />
              Chat with me on WhatsApp
            </div>
          </Col>
        </Row>

        {/* Footer bottom text */}
        <div
          style={{
            marginTop: '30px',
            fontSize: '14px',
            color: darkMode ? '#aaa' : '#888',
          }}
        >
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </Card>
    </Footer>
  );
};

export default AppFooter;

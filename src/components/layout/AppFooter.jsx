import React, { useState } from 'react';
import { Layout, Row, Col, Button, Card, Modal } from 'antd';
import {
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { QRCode } from 'antd';

const { Footer } = Layout;

const iconButtonStyle = {
  fontSize: '24px',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1f1f1f',
  color: '#fff',
  border: '1px solid #444',
};

const socialData = [
  {
    platform: 'Facebook',
    icon: <FacebookOutlined />,
    link: 'https://www.facebook.com/public/Jeya-Manoharan',
    emoji: '📘',
    description: (
      <div style={{ lineHeight: 1.6 }}>
        <p>📘 Connect with me on Facebook.</p>
        <p>🔗 <a href="https://www.facebook.com/public/Jeya-Manoharan" target="_blank" rel="noreferrer" style={{ color: '#1890ff' }}>https://www.facebook.com/public/Jeya-Manoharan</a></p>
      </div>
    ),
  },
  {
    platform: 'LinkedIn',
    icon: <LinkedinOutlined />,
    link: 'https://www.linkedin.com/posts/career4jm',
    emoji: '💼',
    description: (
      <div style={{ lineHeight: 1.6 }}>
        <p>💼 Explore career updates and professional highlights.</p>
        <p>🔗 <a href="https://www.linkedin.com/posts/career4jm" target="_blank" rel="noreferrer" style={{ color: '#1890ff' }}>https://www.linkedin.com/posts/career4jm</a></p>
      </div>
    ),
  },
  {
    platform: 'GitHub',
    icon: <GithubOutlined />,
    link: 'https://github.com/eideasite',
    emoji: '👨‍💻',
    description: (
      <div style={{ lineHeight: 1.6 }}>
        <p>👨‍💻 Browse my open source projects.</p>
        <p>🔗 <a href="https://github.com/eideasite" target="_blank" rel="noreferrer" style={{ color: '#1890ff' }}>https://github.com/eideasite</a></p>
      </div>
    ),
  },
  {
    platform: 'YouTube',
    icon: <YoutubeOutlined />,
    link: 'https://youtube.com/@whytechboost?si=L42uW-DXZ0G4wncR',
    emoji: '📺',
    description: (
      <div style={{ lineHeight: 1.6 }}>
        <p>📺 <strong>Squwave</strong></p>
        <p>💡 Learn more about technologies and include them in smart devices. Stay safe and secure with tech society.</p>
        <p>📧 Email: Not shown publicly</p>
        <p>📍 Location: Sri Lanka</p>
        <p>📅 Joined Nov 28, 2021</p>
        <p>👥 136 subscribers | 🎥 44 videos | 👁️‍🗨️ 35,107 views</p>
        <p>🔗 <a href="https://www.youtube.com/@WhyTechBoost" target="_blank" rel="noreferrer" style={{ color: '#1890ff' }}>www.youtube.com/@WhyTechBoost</a></p>
        <p>🔗 <a href="https://youtube.com/@whytechboost?si=L42uW-DXZ0G4wncR" target="_blank" rel="noreferrer" style={{ color: '#1890ff' }}>YouTube Channel Link</a></p>
      </div>
    ),
  },
];

const AppFooter = ({ darkMode }) => {
  const [modal, setModal] = useState({ visible: false, content: null });

  const openModal = (item) => {
    setModal({
      visible: true,
      content: item,
    });
  };

  const footerCardStyle = {
    width: '100%',
    borderRadius: '12px',
    padding: '40px 20px',
    boxShadow: darkMode
      ? '0px 4px 16px rgba(255, 255, 255, 0.05)'
      : '0px 4px 16px rgba(0, 0, 0, 0.05)',
    backgroundColor: darkMode ? '#2a2a2a' : '#fff',
    color: darkMode ? '#fff' : '#000',
    textAlign: 'center',
  };

  return (
    <Footer
      style={{
        background: darkMode ? '#1f1f1f' : '#fafafa',
        padding: '60px 20px',
      }}
    >
      <Card bordered={false} style={footerCardStyle}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={16}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              {socialData.map((item, index) => (
                <Button
                  key={index}
                  shape="circle"
                  style={iconButtonStyle}
                  icon={item.icon}
                  onClick={() => openModal(item)}
                />
              ))}
            </div>
          </Col>

          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{
                width: '100%',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                backgroundColor: darkMode ? '#1a1a1a' : '#fff',
              }}
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col>
                  <QRCode value="https://wa.me/yourwhatsappnumber" size={140} />
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
            </Card>
          </Col>
        </Row>

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

      <Modal
        title={`${modal.content?.emoji} ${modal.content?.platform}`}
        open={modal.visible}
        onCancel={() => setModal({ visible: false, content: null })}
        footer={null}
      >
        <div style={{ marginBottom: 12 }}>
          {typeof modal.content?.description === 'string'
            ? <p>{modal.content.description}</p>
            : modal.content?.description}
        </div>
        {/* Removed duplicated link here */}
      </Modal>
    </Footer>
  );
};

export default AppFooter;

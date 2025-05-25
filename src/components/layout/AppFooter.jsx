import React, { useState } from 'react';
import { Layout, Row, Col, Button, Card, Tooltip, Modal, Typography } from 'antd';
import {
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = ({ darkMode }) => {
  const [hovered, setHovered] = useState(null);
  const [isLinkedinModalVisible, setIsLinkedinModalVisible] = useState(false);
  const [isYoutubeModalVisible, setIsYoutubeModalVisible] = useState(false);
  const [isCopyrightModalVisible, setIsCopyrightModalVisible] = useState(false);

  const contactInfo = {
    profile: 'linkedin.com/in/career4jm',
    phone: '+94754977449',
    address: 'Colombo',
    email: 'jeyamohan98@gmail.com',
    im: 'career.in.jm@gmail.com',
    birthday: 'August 4',
  };

  const youtubeInfo = {
    channelName: 'Squwave',
    description:
      'Learn more about technologies and include that into our latest smart phones and laptops. Stay safe and secure with tech society.',
    moreInfo: 'Sign in to see email address',
    url: 'www.youtube.com/@WhyTechBoost',
    location: 'Sri Lanka',
    joined: 'Nov 28, 2021',
    subscribers: 136,
    videos: 44,
    views: '35,177',
  };

  const socialLinks = [
    {
      platform: 'Facebook',
      icon: <FacebookOutlined />,
      onClick: () => window.open('https://www.facebook.com/public/Jeya-Manoharan', '_blank'),
    },
    {
      platform: 'LinkedIn',
      icon: <LinkedinOutlined />,
      onClick: () => setIsLinkedinModalVisible(true),
    },
    {
      platform: 'GitHub',
      icon: <GithubOutlined />,
      onClick: () => window.open('https://github.com/eideasite', '_blank'),
    },
    {
      platform: 'YouTube',
      icon: <YoutubeOutlined />,
      onClick: () => setIsYoutubeModalVisible(true),
    },
  ];

  const socialColorMap = {
    Facebook: '#1877F2',
    LinkedIn: '#0077B5',
    GitHub: '#333333',
    YouTube: '#FF0000',
  };

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

  return (
    <>
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
                    onClick={item.onClick}
                    onMouseEnter={() => setHovered(item.platform)}
                    onMouseLeave={() => setHovered(null)}
                  />
                </Tooltip>
              </Col>
            ))}
          </Row>

          {/* WhatsApp QR Image + Link */}
          <Row
            justify="center"
            align="middle"
            gutter={[24, 24]}
            style={{ marginTop: 50, flexWrap: 'wrap' }}
          >
            <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
              <img
                src="/assets/images/WhatsApp QR.jpg"
                alt="WhatsApp QR"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: 12,
                  border: `2px solid ${darkMode ? '#444' : '#ccc'}`,
                }}
              />
            </Col>
            <Col xs={24} sm={12} md={10} style={{ textAlign: 'left' }}>
              <a
                href="https://wa.me/94754977449"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  wordBreak: 'break-word',
                }}
              >
                https://wa.me/94754977449
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: darkMode ? '#ddd' : '#333',
                  marginTop: 10,
                }}
              >
                <WhatsAppOutlined
                  style={{
                    fontSize: '24px',
                    marginRight: '10px',
                    color: '#25D366',
                  }}
                />
                Chat with me on WhatsApp
              </div>
            </Col>
          </Row>

          {/* Footer Text (clickable) */}
          <div
            style={{
              marginTop: '30px',
              fontSize: '14px',
              color: darkMode ? '#aaa' : '#888',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
            onClick={() => setIsCopyrightModalVisible(true)}
          >
            © {new Date().getFullYear()} Jeyamohan Manoharan. All rights reserved.
          </div>
        </Card>
      </Footer>

      {/* LinkedIn Modal */}
      <Modal
        title="Jeyamohan Manoharan - Contact Info"
        open={isLinkedinModalVisible}
        onCancel={() => setIsLinkedinModalVisible(false)}
        footer={null}
        centered
        bodyStyle={{ fontSize: 16, lineHeight: 1.5 }}
      >
        <p><strong>Your Profile:</strong> {contactInfo.profile}</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Address:</strong> {contactInfo.address}</p>
        <p><strong>Email:</strong> {contactInfo.email}</p>
        <p><strong>IM:</strong> {contactInfo.im}</p>
        <p><strong>Birthday:</strong> {contactInfo.birthday}</p>
      </Modal>

      {/* YouTube Modal */}
      <Modal
        title={`${youtubeInfo.channelName} - YouTube Channel Info`}
        open={isYoutubeModalVisible}
        onCancel={() => setIsYoutubeModalVisible(false)}
        footer={null}
        centered
        bodyStyle={{ fontSize: 16, lineHeight: 1.5 }}
      >
        <p><strong>Description:</strong> {youtubeInfo.description}</p>
        <p><strong>More info:</strong> {youtubeInfo.moreInfo}</p>
        <p><strong>Channel URL:</strong> {youtubeInfo.url}</p>
        <p><strong>Location:</strong> {youtubeInfo.location}</p>
        <p><strong>Joined:</strong> {youtubeInfo.joined}</p>
        <p><strong>Subscribers:</strong> {youtubeInfo.subscribers}</p>
        <p><strong>Videos:</strong> {youtubeInfo.videos}</p>
        <p><strong>Views:</strong> {youtubeInfo.views}</p>
        <Button
          type="primary"
          block
          onClick={() => window.open(`https://${youtubeInfo.url}`, '_blank')}
          style={{ marginTop: 20 }}
        >
          Visit Channel
        </Button>
      </Modal>
      {/* Copyright Modal */}
      <Modal
        title="Legal Disclaimer & Copyright Info"
        open={isCopyrightModalVisible}
        onCancel={() => setIsCopyrightModalVisible(false)}
        footer={null}
        centered
        bodyStyle={{
          fontSize: 14,
          lineHeight: 1.6,
          color: darkMode ? '#ddd' : '#222',
          backgroundColor: darkMode ? '#1f1f1f' : '#fff',
          padding: 24,
        }}
      >
        <p style={{ marginBottom: 12 }}>
          © {new Date().getFullYear()} Jeyamohan Manoharan. All rights reserved. This website is built on an open-source platform.
          Content, including text, images, code, CV, and documentation, may not be reproduced or distributed without express written permission.
        </p>

        <p style={{ marginBottom: 12 }}>
          CV and documentation are non-shareable. Recruiters must email{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=career.in.jm@gmail.com&su=Request%20for%20CV%20Access"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1890ff', textDecoration: 'underline' }}
          >
            career.in.jm@gmail.com
          </a>{' '}
          for access.
        </p>

        <p>
          Third-party content or links are not owned or controlled by Jeyamohan Manoharan; refer to their respective policies.
        </p>
      </Modal>

    </>
  );
};

export default AppFooter;

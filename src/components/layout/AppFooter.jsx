import React from 'react';
import { Layout, Row, Col, Button, Card } from 'antd';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
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
};

const socialStyles = {
  twitter: { backgroundColor: '#1DA1F2', color: '#fff' },
  youtube: { backgroundColor: '#FF0000', color: '#fff' },
  facebook: { backgroundColor: '#1877F2', color: '#fff' },
  linkedin: { backgroundColor: '#0077B5', color: '#fff' },
  github: { backgroundColor: '#333', color: '#fff' },
};

const AppFooter = ({ darkMode }) => {
  const footerCardStyle = {
    width: '100%',
    borderRadius: '12px',
    padding: '40px 20px',
    boxShadow: darkMode
      ? '0px 4px 16px rgba(255, 255, 255, 0.1)'
      : '0px 4px 16px rgba(0, 0, 0, 0.1)',
    backgroundColor: darkMode ? '#2a2a2a' : '#fff',
    color: darkMode ? '#fff' : '#000',
    textAlign: 'center',
  };

  return (
    <Footer
      style={{
        background: darkMode ? '#1f1f1f' : '#fffafa', // snow white
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
              <Button
                shape="circle"
                style={{ ...iconButtonStyle, ...socialStyles.twitter }}
                icon={<TwitterOutlined />}
                href="https://twitter.com/yourprofile"
                target="_blank"
              />
              <Button
                shape="circle"
                style={{ ...iconButtonStyle, ...socialStyles.youtube }}
                icon={<YoutubeOutlined />}
                href="https://youtube.com/yourchannel"
                target="_blank"
              />
              <Button
                shape="circle"
                style={{ ...iconButtonStyle, ...socialStyles.facebook }}
                icon={<FacebookOutlined />}
                href="https://facebook.com/yourprofile"
                target="_blank"
              />
              <Button
                shape="circle"
                style={{ ...iconButtonStyle, ...socialStyles.linkedin }}
                icon={<LinkedinOutlined />}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
              />
              <Button
                shape="circle"
                style={{ ...iconButtonStyle, ...socialStyles.github }}
                icon={<GithubOutlined />}
                href="https://github.com/yourgithubprofile"
                target="_blank"
              />
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

        <div style={{ marginTop: '30px', fontSize: '14px', color: darkMode ? '#aaa' : '#888' }}>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </Card>
    </Footer>
  );
};

export default AppFooter;

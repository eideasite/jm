import React, { useEffect } from 'react';
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LinkedinOutlined } from '@ant-design/icons'; // Make sure this is imported

const { Title, Paragraph, Text, Link } = Typography;

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        color: '#e0e0e0',
        padding: '24px',
        fontFamily: `'Times New Roman', Times, serif`,
        maxWidth: 900,
        margin: '0 auto',
        position: 'relative',
      }}
    >

      {/* Floating Home Button */}
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <Button
          type="primary"
          onClick={goToHome}
          style={{ backgroundColor: '#40a9ff', borderColor: '#40a9ff' }}
        >
          🏡  Back to Home
        </Button>
      </div>

      <Typography
        style={{
          textAlign: 'justify',
          color: '#40a9ff',
          userSelect: 'text',
        }}
      >
        <Title level={3} style={{ color: '#40a9ff' }}>
          Security & Professional Data Notice 🔐
        </Title>
        <Paragraph>
          <ul>
            <li>This platform presents authentic developer identities, documented project involvements, and validated team roles for the express purpose of career transparency and formal recognition.</li>
            <li>All displayed names, professional roles, and contact links (e.g., LinkedIn, email) are published only with verified individual consent.</li>
            <li>Any duplication, unauthorized reproduction, or exploitation of the data for non-consensual purposes (e.g., fraud, spam, or impersonation) is strictly prohibited.</li>
            <li>The platform does not host or retain sensitive identifiers, financial credentials, or confidential login data.</li>
            <li>Legal consequences will be pursued in cases of impersonation, malicious misuse, or violation of data governance laws.</li>
          </ul>
        </Paragraph>

        <Title level={3} style={{ color: '#40a9ff', marginTop: 32 }}>
          Privacy Policy 📄
        </Title>
        <Paragraph>
          Effective Date: <Text strong>{new Date().toLocaleDateString()}</Text><br />
          Maintained by: <Text strong>Jeyamohan Manoharan</Text><br />
          Email:{' '}
          <Link href="mailto:career.in.jm@gmail.com" style={{ color: '#1890ff' }}>
            career.in.jm@gmail.com
          </Link><br />
          Mobile : <Text code>+94 754 977 449</Text><br />
          LinkedIn:{' '}
          <LinkedinOutlined style={{ color: '#1890ff', marginRight: 8 }} />
          <Link
            href="https://linkedin.com/in/career4jm"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1890ff' }}
          >
            linkedin.com/in/career4jm
          </Link>
        </Paragraph>

        {[
          {
            title: '• Purpose of This Policy',
            items: [
              'Clarifies how shared professional data supports transparent career documentation.',
              'Data is published for educational, reference, and verification purposes only.',
              'All content aligns with voluntary, professional contributions.',
            ],
          },
          {
            title: '• What Information Is Collected',
            items: [
              'Names, titles, emails, and professional LinkedIn URLs',
              'Project roles, durations, responsibilities',
              'Voluntary contact information with consent',
            ],
          },
          {
            title: '• How Information Is Used',
            items: [
              'To authenticate project participation and technical scope',
              'To provide verifiable details for recruiters and collaborators',
              'To maintain an open, skill-validated digital profile',
            ],
          },
          {
            title: '• Consent and Use Policy',
            items: [
              'Only data with prior user approval is shown',
              'No content is used for commercial gain or marketing',
              'Communication is permitted solely through authorized channels',
            ],
          },
          {
            title: '• Security',
            items: [
              'No credential-based access is collected or stored',
              'Administrative controls restrict backend access',
              'Third-party data transfers are disallowed',
            ],
          },
          {
            title: '• Scam & Misuse Prevention',
            items: [
              'Unauthorized data harvesting or exploitation is banned',
              'Monitoring and legal measures apply to suspicious activities',
              'The site operates as a curated profile display, not a public database',
            ],
          },
          {
            title: '• User Rights',
            items: [
              'Featured individuals may request edits or removal of their data',
              'Report any misuse or misrepresentation',
              'Seek clarification through provided contacts',
            ],
          },
          {
            title: '• Third-Party Links',
            items: [
              'External profile links (e.g., LinkedIn) operate under independent policies',
              'We do not influence or track those third-party interactions',
            ],
          },
          {
            title: '• Policy Changes',
            items: [
              'Policy modifications will be transparently updated',
              'All amendments will be version-controlled for review',
            ],
          },
          {
            title: '• Information Collection',
            items: [
              'Personal information, including names, email contacts, and professional affiliations, is collected to curate a verified portfolio environment.',
              'The scope of data remains minimal and purpose-specific to prevent overreach.',
              'This ensures the dual goals of transparency and individual privacy protection.',
            ],
          },
          {
            title: '• Use of Information',
            items: [
              'Collected data is utilized strictly for showcasing documented competencies and contributions.',
              'The intention is to support career validation, industry recognition, and technical authorship.',
              'No data is exploited for commercial profiling or behavioral tracking.',
            ],
          },
          {
            title: '• Data Sharing and Disclosure',
            items: [
              'We do not commercialize personal data nor expose it to unsolicited entities.',
              'Data sharing occurs only under controlled, trust-based operational needs.',
              'Such protocols ensure ethical treatment and uphold reputational integrity.',
            ],
          },
          {
            title: '• Data Security',
            items: [
              'Security is enforced via backend authorization and encrypted management layers.',
              'No personal logins, passwords, or user submissions are processed or stored.',
              'Access is limited to maintainers directly responsible for platform oversight.',
            ],
          },
          {
            title: '• User Rights and Control',
            items: [
              'Users may request their content be updated, removed, or clarified at any time.',
              'This process guarantees personal control over professional representation.',
              'Support for such requests is provided without delay through direct channels.',
            ],
          },
          {
            title: '• Cookies and Tracking Technologies',
            items: [
              'This platform employs only essential technical cookies, avoiding invasive tracking.',
              'Cookies serve to ensure minimal operability and platform responsiveness.',
              'Users retain full discretion to disable such mechanisms through browser settings.',
            ],
          },
          {
            title: '• Third-Party Services',
            items: [
              'Any reference to third-party platforms (e.g., LinkedIn) is made via passive links.',
              'Our system does not monitor or extract data from external sources.',
              'Third-party compliance is verified prior to integration.',
            ],
          },
          {
            title: '• Policy Updates',
            items: [
              'Privacy provisions may evolve in accordance with updated regulations or platform features.',
              'All major amendments will be publicly announced and time-stamped.',
              'Historical versions are archived for review.',
            ],
          },
          {
            title: '• Contact Information',
            items: [
              'For questions, clarifications, or to request data adjustments, please contact:',
              'Email: career.in.jm@gmail.com',
              'Mobile: +94 754 977 449',
              'LinkedIn: https://linkedin.com/in/career4jm',
            ],
          },
        ].map(({ title, items }, index) => (
          <React.Fragment key={index}>
            <Title level={4} style={{ color: '#40a9ff' }}>
              {title}
            </Title>
            <Paragraph>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Paragraph>
          </React.Fragment>
        ))}
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;

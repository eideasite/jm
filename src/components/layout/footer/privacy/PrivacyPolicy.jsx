import React, { useEffect } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const PrivacyPolicy = () => {
  // Scroll to top on component mount automatically
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      style={{
        color: '#e0e0e0',
        padding: '24px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <Typography
        style={{
          textAlign: 'justify',
          color: '#e0e0e0',
          userSelect: 'text',
        }}
      >
        <Title level={3} style={{ color: '#40a9ff' }}>
         Security & Professional Data Notice  🔐 
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
          <Link
            href="https://linkedin.com/in/career4jm"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1890ff' }}
          >
            linkedin.com/in/career4jm
          </Link>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff', marginTop: 24 }}>
          • Purpose of This Policy
        </Title>
        <Paragraph>
          <ul>
            <li>Clarifies how shared professional data supports transparent career documentation.</li>
            <li>Data is published for educational, reference, and verification purposes only.</li>
            <li>All content aligns with voluntary, professional contributions.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • What Information Is Collected
        </Title>
        <Paragraph>
          <ul>
            <li>Names, titles, emails, and professional LinkedIn URLs</li>
            <li>Project roles, durations, responsibilities</li>
            <li>Voluntary contact information with consent</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • How Information Is Used
        </Title>
        <Paragraph>
          <ul>
            <li>To authenticate project participation and technical scope</li>
            <li>To provide verifiable details for recruiters and collaborators</li>
            <li>To maintain an open, skill-validated digital profile</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Consent and Use Policy
        </Title>
        <Paragraph>
          <ul>
            <li>Only data with prior user approval is shown</li>
            <li>No content is used for commercial gain or marketing</li>
            <li>Communication is permitted solely through authorized channels</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Security
        </Title>
        <Paragraph>
          <ul>
            <li>No credential-based access is collected or stored</li>
            <li>Administrative controls restrict backend access</li>
            <li>Third-party data transfers are disallowed</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Scam & Misuse Prevention
        </Title>
        <Paragraph>
          <ul>
            <li>Unauthorized data harvesting or exploitation is banned</li>
            <li>Monitoring and legal measures apply to suspicious activities</li>
            <li>The site operates as a curated profile display, not a public database</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • User Rights
        </Title>
        <Paragraph>
          <ul>
            <li>Featured individuals may request edits or removal of their data</li>
            <li>Report any misuse or misrepresentation</li>
            <li>Seek clarification through provided contacts</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Third-Party Links
        </Title>
        <Paragraph>
          <ul>
            <li>External profile links (e.g., LinkedIn) operate under independent policies</li>
            <li>We do not influence or track those third-party interactions</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Policy Changes
        </Title>
        <Paragraph>
          <ul>
            <li>Policy modifications will be transparently updated</li>
            <li>All amendments will be version-controlled for review</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Information Collection
        </Title>
        <Paragraph>
          <ul>
            <li>Personal information, including names, email contacts, and professional affiliations, is collected to curate a verified portfolio environment.</li>
            <li>The scope of data remains minimal and purpose-specific to prevent overreach.</li>
            <li>This ensures the dual goals of transparency and individual privacy protection.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Use of Information
        </Title>
        <Paragraph>
          <ul>
            <li>Collected data is utilized strictly for showcasing documented competencies and contributions.</li>
            <li>The intention is to support career validation, industry recognition, and technical authorship.</li>
            <li>No data is exploited for commercial profiling or behavioral tracking.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Data Sharing and Disclosure
        </Title>
        <Paragraph>
          <ul>
            <li>We do not commercialize personal data nor expose it to unsolicited entities.</li>
            <li>Data sharing occurs only under controlled, trust-based operational needs.</li>
            <li>Such protocols ensure ethical treatment and uphold reputational integrity.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Data Security
        </Title>
        <Paragraph>
          <ul>
            <li>Security is enforced via backend authorization and encrypted management layers.</li>
            <li>No personal logins, passwords, or user submissions are processed or stored.</li>
            <li>Access is limited to maintainers directly responsible for platform oversight.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • User Rights and Control
        </Title>
        <Paragraph>
          <ul>
            <li>Users may request their content be updated, removed, or clarified at any time.</li>
            <li>This process guarantees personal control over professional representation.</li>
            <li>Support for such requests is provided without delay through direct channels.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Cookies and Tracking Technologies
        </Title>
        <Paragraph>
          <ul>
            <li>This platform employs only essential technical cookies, avoiding invasive tracking.</li>
            <li>Cookies serve to ensure minimal operability and platform responsiveness.</li>
            <li>Users retain full discretion to disable such mechanisms through browser settings.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Third-Party Services
        </Title>
        <Paragraph>
          <ul>
            <li>Any reference to third-party platforms (e.g., LinkedIn) is made via passive links.</li>
            <li>Our system does not monitor or extract data from external sources.</li>
            <li>Third-party compliance is verified prior to integration.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Policy Updates
        </Title>
        <Paragraph>
          <ul>
            <li>Privacy provisions may evolve in accordance with updated regulations or platform features.</li>
            <li>All major amendments will be publicly announced and time-stamped.</li>
            <li>Historical versions are archived for review.</li>
          </ul>
        </Paragraph>

        <Title level={4} style={{ color: '#40a9ff' }}>
          • Contact Information
        </Title>
        <Paragraph>
          For questions, clarifications, or to request data adjustments, please contact:<br />
          <Link href="mailto:career.in.jm@gmail.com" style={{ color: '#1890ff' }}>
            career.in.jm@gmail.com
          </Link><br />
          Mobile: <Text code>+94 754 977 449</Text><br />
          LinkedIn:{' '}
          <Link
            href="https://linkedin.com/in/career4jm"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1890ff' }}
          >
            linkedin.com/in/career4jm
          </Link>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;

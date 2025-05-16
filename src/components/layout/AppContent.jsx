import React from 'react';
import { Layout } from 'antd';
import Hero from '../hero/Hero';
import Skill from '../skill/Skill';
import Project from '../project/Project';
import CVSection from '../cvSection/CVSection';
import Contact from '../contact/Contact';
import Experience from '../Experience/Experience';

const { Content } = Layout;

const AppContent = () => {
  const darkMode = false;

  return (
    <Content style={{ padding: '24px', minHeight: 'calc(100vh - 128px)' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Website</h1>
      <p style={{ textAlign: 'center' }}>This is your content area.</p>
      <Hero />
      <Skill darkMode={darkMode} />
      <Experience />
      <Project darkMode={darkMode} />
      <CVSection />
      <Contact />
    </Content>
  );
};

export default AppContent;
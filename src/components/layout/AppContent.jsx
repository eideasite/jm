import React from 'react';
import { Layout } from 'antd';

import Hero from '../hero/Hero';
import Skill from '../skill/Skill';
import Experience from '../Experience/Experience';
import Project from '../project/Project';
import CVSection from '../cvSection/CVSection';
import Journey from '../journey/journey';
import Contact from '../contact/Contact';

const { Content } = Layout;

const AppContent = ({ darkMode }) => {
  return (
    <Content style={{ padding: '24px', minHeight: 'calc(100vh - 128px)' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Website</h1>
      <p style={{ textAlign: 'center' }}>This is your content area.</p>

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skill darkMode={darkMode} />
      </section>



      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Journey Section */}
      <section id="journey">
        <Journey />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Project darkMode={darkMode} />
      </section>



      {/* Documents Section */}
      <section id="documents">
        <CVSection />
      </section>



      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </Content>
  );
};

export default AppContent;

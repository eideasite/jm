import React from 'react';
import { Layout } from 'antd';

import Hero from '../home/hero/Hero';
import Skill from '../home/skill/Skill';
import Journey from '../home/journey/journey';
import Experience from '../home/Experience/Experience';
import Project from '../../pages/projects/Project';
import CVSection from '../home/cvSection/CVSection';
import Contact from '../home/contact/Contact';

const { Content } = Layout;

const AppContent = ({ darkMode }) => {
  return (
    <Content style={{ padding: '24px', minHeight: 'calc(100vh - 128px)' }}>
      <h1 style={{ textAlign: 'center' }}></h1>
      <p style={{ textAlign: 'center' }}></p>

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

            {/*Experience Section - NEW */}
      <section id="experience">
        <Experience />
      </section>

      
      {/* Journey Section */}
      <section id="journey">
        <Journey />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skill darkMode={darkMode} />
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

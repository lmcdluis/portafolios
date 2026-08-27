import React from 'react';
import Backdrop from '../../components/layout/Backdrop';
import NavBar from '../../components/nav/NavBar';
import Hero from '../../components/hero/Hero';
import ProjectsSection from '../../components/projects/ProjectsSection';
import SkillsSection from '../../components/skills/SkillsSection';
import SystemSection from '../../components/system/SystemSection';
import TestimonialsSection from '../../components/testimonials/TestimonialsSection';
import ContactSection from '../../components/contact/ContactSection';
import SiteFooter from '../../components/footer/SiteFooter';

export const Home: React.FC = () => (
  <>
    <Backdrop />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <NavBar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <SystemSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  </>
);

export default Home;

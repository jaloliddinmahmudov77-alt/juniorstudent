/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#151515] flex flex-col font-sans selection:bg-[#FF5A1F]/20 selection:text-[#FF5A1F]">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with User Photo & Fade Effect */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section (3 real projects) */}
        <Projects onOpenProjectModal={(proj) => setSelectedProject(proj)} />

        {/* 5. Certificates Section (Replaced Yutuqlarim) */}
        <Certificates />

        {/* 6. Contact Section with @Mahmudov567 */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

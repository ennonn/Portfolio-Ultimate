import React, { useState, useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import ContactTrigger from './components/ContactTrigger';
import ChatBotBubble from './components/ChatBotBubble';
import ProjectDetailView from './components/ProjectDetailView';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Force window to scroll to top on page refresh and set light mode
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleSelectProject = (projectId) => {
    setActiveProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setActiveProjectId(null);
  };

  const selectedProject = portfolioData.projects.find((p) => p.id === activeProjectId);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoHome={handleBackToProjects}
      />

      {activeProjectId && selectedProject ? (
        <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <ProjectDetailView
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        </main>
      ) : (
        <main>
          <Hero />
          <AboutStats />
          <Projects onSelectProject={handleSelectProject} />
          <Experience />
          <TechStack />
          <Certifications />
          <ContactTrigger />
        </main>
      )}

      <ChatBotBubble />

      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '40px 20px',
          textAlign: 'center',
          color: 'var(--text-subtle)',
          fontSize: '0.85rem',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

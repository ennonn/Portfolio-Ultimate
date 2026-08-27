import React, { useState, useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Projects from './components/Projects';
import ProjectDetailView from './components/ProjectDetailView';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import ContactTrigger from './components/ContactTrigger';
import Footer from './components/Footer';
import ChatBotBubble from './components/ChatBotBubble';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoHome={() => setSelectedProject(null)}
      />

      {selectedProject ? (
        /* Dedicated Full Project Detail View (Reference Screenshot 2) */
        <ProjectDetailView
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        /* Main Portfolio Sections */
        <>
          <Hero />
          <AboutStats />
          <Projects onSelectProject={setSelectedProject} />
          <Experience />
          <TechStack />
          <Certifications />
          <ContactTrigger onOpenChat={() => setChatOpen(true)} />
        </>
      )}

      <Footer />

      {/* Global Interactive Utilities */}
      <ChatBotBubble isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
      <ScrollToTop />
    </div>
  );
}

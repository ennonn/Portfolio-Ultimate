import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, onGoHome }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    if (onGoHome) onGoHome();
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '16px' : '0px',
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0 clamp(16px, 3vw, 36px)' : '0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <nav
        style={{
          maxWidth: scrolled ? '1280px' : '100%',
          margin: '0 auto',
          padding: scrolled ? '10px 28px' : '20px clamp(20px, 4vw, 48px)',
          borderRadius: scrolled ? '9999px' : '0px',
          background: scrolled ? 'var(--bg-card)' : 'transparent',
          border: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          borderBottom: !scrolled ? '1px solid transparent' : '1px solid var(--border-subtle)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Brand Name */}
        <a
          href="#"
          onClick={handleLinkClick}
          style={{
            fontSize: '1.15rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            textDecoration: 'none',
          }}
        >
          {portfolioData.personal.name}
        </a>

        {/* Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls: Theme Toggle & Resume Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9999px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            className="btn btn-secondary"
            style={{
              padding: '7px 16px',
              fontSize: '0.85rem',
              borderRadius: '9999px',
            }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 800px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, onGoHome }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 24px',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Name */}
        <a
          href="#"
          onClick={handleLinkClick}
          style={{
            fontSize: '1.1rem',
            fontWeight: '700',
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
            gap: '24px',
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
                fontSize: '0.88rem',
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
              width: '36px',
              height: '36px',
              borderRadius: '8px',
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
              padding: '6px 14px',
              fontSize: '0.82rem',
              borderRadius: '6px',
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
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

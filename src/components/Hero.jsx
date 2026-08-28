import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Video, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const { personal } = portfolioData;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={18} />;
      case 'linkedin': return <LinkedinIcon size={18} />;
      case 'email': return <Mail size={18} />;
      case 'tiktok': return <Video size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: 'clamp(16px, 3vw, 36px)',
        paddingRight: 'clamp(16px, 3vw, 36px)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '56px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left Column: Intro & Headline */}
        <div>
          {/* Tagline Pill */}
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-subtle)',
              fontSize: '0.78rem',
              fontWeight: '700',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            AVAILABLE FOR ROLES & FREELANCE
          </div>

          {/* Name & Role */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: '10px',
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
            }}
          >
            {personal.name}
          </h1>

          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}
          >
            {personal.title}
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              maxWidth: '540px',
              lineHeight: 1.6,
            }}
          >
            {personal.bio}
          </p>

          {/* Rectangular Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            <a href="#projects" className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary" style={{ padding: '12px 24px' }}>
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons Container */}
          <div
            style={{
              display: 'inline-flex',
              gap: '8px',
              padding: '6px',
              borderRadius: '12px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Profile Image Box */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="clean-card"
            style={{
              width: '100%',
              maxWidth: '460px',
              padding: '14px',
              borderRadius: '18px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '380px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src={personal.heroImage}
                alt={personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '14px',
                paddingLeft: '6px',
                paddingRight: '6px',
                fontSize: '0.85rem',
                color: 'var(--text-subtle)',
                fontWeight: '500',
              }}
            >
              <span>{personal.location}</span>
              <span>Full-Stack Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

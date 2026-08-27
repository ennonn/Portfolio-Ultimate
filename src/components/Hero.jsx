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
        paddingBottom: '60px',
        maxWidth: '1040px',
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Intro & Headline */}
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Available for Roles & Freelance
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
              fontWeight: '800',
              lineHeight: 1.15,
              marginBottom: '12px',
              color: 'var(--text-main)',
            }}
          >
            {personal.name}
          </h1>

          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}
          >
            {personal.title}
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              marginBottom: '28px',
              maxWidth: '500px',
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
              marginBottom: '32px',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons Row */}
          <div style={{ display: 'flex', gap: '10px' }}>
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
              maxWidth: '380px',
              padding: '12px',
              borderRadius: '16px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '320px',
                borderRadius: '10px',
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
                paddingTop: '12px',
                paddingLeft: '4px',
                paddingRight: '4px',
                fontSize: '0.85rem',
                color: 'var(--text-subtle)',
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

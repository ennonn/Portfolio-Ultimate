import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Video, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const { personal } = portfolioData;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={20} />;
      case 'linkedin': return <LinkedinIcon size={20} />;
      case 'email': return <Mail size={20} />;
      case 'tiktok': return <Video size={20} />;
      default: return <Globe size={20} />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '120px',
        paddingBottom: '40px',
        maxWidth: '1320px',
        margin: '0 auto',
        paddingLeft: 'clamp(20px, 4vw, 48px)',
        paddingRight: 'clamp(20px, 4vw, 48px)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
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
              padding: '7px 16px',
              borderRadius: '8px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-subtle)',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            AVAILABLE FOR ROLES & FREELANCE
          </div>

          {/* Main Name & Title (Increased Font Sizes) */}
          <h1
            style={{
              fontSize: 'clamp(3.4rem, 6vw, 4.8rem)',
              fontWeight: '800',
              lineHeight: 1.05,
              marginBottom: '14px',
              color: 'var(--text-main)',
              letterSpacing: '-0.035em',
            }}
          >
            {personal.name}
          </h1>

          <h2
            style={{
              fontSize: '1.6rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              marginBottom: '24px',
            }}
          >
            {personal.title}
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              marginBottom: '36px',
              maxWidth: '580px',
              lineHeight: 1.6,
            }}
          >
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '40px',
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              style={{
                padding: '14px 28px',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              style={{
                padding: '14px 28px',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons Container */}
          <div
            style={{
              display: 'inline-flex',
              gap: '8px',
              padding: '6px',
              borderRadius: '14px',
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
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
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Image Box */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="clean-card"
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '14px',
              borderRadius: '22px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '420px',
                borderRadius: '14px',
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
                fontSize: '0.9rem',
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

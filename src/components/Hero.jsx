import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Video, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const { personal } = portfolioData;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={16} />;
      case 'linkedin': return <LinkedinIcon size={16} />;
      case 'email': return <Mail size={16} />;
      case 'tiktok': return <Video size={16} />;
      default: return <Globe size={16} />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '130px',
        paddingBottom: '60px',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: 'clamp(16px, 3vw, 36px)',
        paddingRight: 'clamp(16px, 3vw, 36px)',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
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

          {/* Main Name & Title */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 4.4rem)',
              fontWeight: '800',
              lineHeight: 1.05,
              marginBottom: '10px',
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
            }}
          >
            {personal.name}
          </h1>

          <h2
            style={{
              fontSize: '1.4rem',
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
              maxWidth: '520px',
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
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              style={{
                padding: '12px 26px',
                borderRadius: '9999px',
                fontSize: '0.92rem',
              }}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              style={{
                padding: '12px 26px',
                borderRadius: '9999px',
                fontSize: '0.92rem',
              }}
            >
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
                  width: '38px',
                  height: '38px',
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

        {/* Right Column: Profile Image Box */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="clean-card"
            style={{
              width: '100%',
              maxWidth: '480px',
              padding: '14px',
              borderRadius: '20px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '400px',
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

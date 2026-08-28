import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, RotateCw, UserCheck, MapPin, GraduationCap, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const { personal } = portfolioData;
  const [isFlipped, setIsFlipped] = useState(false);

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={20} />;
      case 'linkedin': return <LinkedinIcon size={20} />;
      case 'email': return <Mail size={20} />;
      default: return <Mail size={20} />;
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
          {/* Highlighted Status Tag Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-hover)',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: '700',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
              }}
            />
            Available for Roles & Freelance
          </div>

          {/* Main Name */}
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

          {/* Role Sub-heading with Shadcn Highlight Text Effect */}
          <h2
            style={{
              fontSize: '1.6rem',
              fontWeight: '600',
              marginBottom: '24px',
            }}
          >
            <span className="highlight-text">{personal.title}</span>
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

          {/* Social Icons Container (GitHub, LinkedIn, Email only) */}
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

        {/* Right Column: Interactive 3D Flip Profile Image Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className={`flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              width: '100%',
              maxWidth: '480px',
              height: '440px',
            }}
            title="Click card to view details"
          >
            <div className="flip-card-inner" style={{ height: '100%' }}>
              {/* FRONT SIDE (Profile Photo) */}
              <div className="flip-card-front clean-card" style={{ height: '100%', padding: '14px', borderRadius: '22px' }}>
                <div
                  style={{
                    width: '100%',
                    height: '370px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
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
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '6px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.65)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <RotateCw size={12} />
                    <span>Click to Flip</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '10px',
                    fontSize: '0.82rem',
                    color: 'var(--text-subtle)',
                    fontWeight: '500',
                    gap: '6px',
                  }}
                >
                  <UserCheck size={14} />
                  <span>Click card to reveal personal details</span>
                </div>
              </div>

              {/* BACK SIDE (Personal Information) */}
              <div className="flip-card-back clean-card" style={{ padding: '28px', borderRadius: '22px', background: 'var(--bg-card)' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
                      Personal Overview
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <RotateCw size={12} /> Flip Back
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <UserCheck size={18} color="var(--text-muted)" style={{ marginTop: '2px' }} />
                      <div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '600', textTransform: 'uppercase' }}>Full Name</p>
                        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{personal.name}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Code size={18} color="var(--text-muted)" style={{ marginTop: '2px' }} />
                      <div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '600', textTransform: 'uppercase' }}>Primary Role</p>
                        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{personal.title}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <MapPin size={18} color="var(--text-muted)" style={{ marginTop: '2px' }} />
                      <div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '600', textTransform: 'uppercase' }}>Location & Nationality</p>
                        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{personal.location} ({personal.nationality})</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <GraduationCap size={18} color="var(--text-muted)" style={{ marginTop: '2px' }} />
                      <div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '600', textTransform: 'uppercase' }}>Education</p>
                        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{personal.education}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: 'var(--text-subtle)',
                  }}
                >
                  Click anywhere on card to flip back to photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

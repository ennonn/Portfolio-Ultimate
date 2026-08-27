import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Server, FolderKanban, Code2, Check } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  const getCompanyLogo = (logoName) => {
    switch (logoName) {
      case 'Server': return <Server size={16} />;
      case 'FolderKanban': return <FolderKanban size={16} />;
      default: return <Code2 size={16} />;
    }
  };

  const currentRole = experience[activeTab];

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="tag">
          <span>Experience</span>
        </div>
        <h2>Work History & Internships</h2>
        <p>
          Software engineering internships and full-stack freelance projects.
        </p>
      </div>

      <div
        className="clean-card"
        style={{
          borderRadius: '16px',
          padding: '28px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Left Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {experience.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: activeTab === idx ? '1px solid var(--border-hover)' : '1px solid transparent',
                  background: activeTab === idx ? 'var(--btn-secondary-bg)' : 'transparent',
                  color: activeTab === idx ? 'var(--text-main)' : 'var(--text-muted)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ color: activeTab === idx ? 'var(--text-main)' : 'var(--text-subtle)' }}>
                  {getCompanyLogo(exp.logo)}
                </div>
                <span>{exp.company}</span>
              </button>
            ))}
          </div>

          {/* Right Role Content */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '18px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  marginBottom: '6px',
                }}
              >
                {currentRole.role} — <span style={{ color: 'var(--text-muted)' }}>{currentRole.company}</span>
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  fontSize: '0.82rem',
                  color: 'var(--text-subtle)',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} />
                  {currentRole.period}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} />
                  {currentRole.location}
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentRole.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  <Check
                    size={15}
                    color="var(--text-muted)"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  />
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

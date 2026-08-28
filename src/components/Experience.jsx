import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Server, FolderKanban, Code2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeId, setActiveId] = useState(experience[0].id);
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);

  const getCompanyLogo = (logoName) => {
    switch (logoName) {
      case 'Server': return <Server size={18} />;
      case 'FolderKanban': return <FolderKanban size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="tag">
          <span>Career Journey</span>
        </div>
        <h2>Work Experience & Engineering Roles</h2>
        <p>
          Software engineering roles, backend AI internships, and production full-stack systems.
        </p>
      </div>

      {/* Connected Circle Timeline Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '920px',
          margin: '0 auto',
        }}
      >
        {/* Experience Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experience.map((exp, idx) => {
            const isActive = activeId === exp.id;
            const isLast = idx === experience.length - 1;
            const isRevealed = !!visibleItems[exp.id];

            return (
              <div
                key={exp.id}
                data-id={exp.id}
                className="scroll-reveal-item"
                onClick={() => setActiveId(exp.id)}
                style={{
                  position: 'relative',
                  paddingLeft: '76px', // 76px left gutter for timeline
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.97)',
                  transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s`,
                }}
              >
                {/* 1. Vertical Line Segment */}
                {!isLast && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '25px',
                      top: '50%',
                      height: 'calc(100% + 40px)',
                      width: '2px',
                      background: 'linear-gradient(180deg, var(--border-hover) 0%, var(--border-subtle) 100%)',
                      zIndex: 1,
                      opacity: isRevealed ? 1 : 0,
                      transition: `opacity 0.6s ease ${idx * 0.12 + 0.2}s`,
                    }}
                  />
                )}

                {/* 2. Horizontal Connector Line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '25px',
                    top: '50%',
                    width: isRevealed ? '51px' : '0px',
                    height: '2px',
                    background: isActive ? 'var(--text-main)' : 'var(--border-subtle)',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    transition: `width 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12 + 0.1}s, background 0.2s ease`,
                  }}
                />

                {/* 3. Connected Circle Node (Pops into place on scroll reveal) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '25px',
                    top: '50%',
                    transform: isRevealed ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.4)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--btn-primary-bg)' : 'var(--bg-card)',
                    border: isActive ? '2px solid var(--text-main)' : '2px solid var(--border-subtle)',
                    color: isActive ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: isActive ? '0 0 16px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.12}s`,
                  }}
                >
                  {getCompanyLogo(exp.logo)}
                </div>

                {/* 4. Job Info Card (Rises up from below on scroll reveal) */}
                <div
                  className="clean-card"
                  style={{
                    flex: 1,
                    padding: '28px',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--border-hover)' : 'var(--border-subtle)',
                    background: 'var(--bg-card)',
                    boxShadow: isActive ? '0 8px 30px rgba(0, 0, 0, 0.06)' : 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {/* Job Header Info */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '16px',
                      paddingBottom: '16px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: '800',
                            color: 'var(--text-main)',
                            lineHeight: 1.2,
                          }}
                        >
                          {exp.role}
                        </h3>
                      </div>
                      <p style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                        {exp.company}
                      </p>
                    </div>

                    {/* Period & Location Chips */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '6px',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          background: 'var(--btn-secondary-bg)',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          color: 'var(--text-main)',
                        }}
                      >
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.78rem',
                          color: 'var(--text-subtle)',
                          fontWeight: '600',
                        }}
                      >
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          lineHeight: 1.55,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#10b981"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutStats() {
  const { mission } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when scrolling down into section view from top
        if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container"
      style={{
        paddingTop: '120px',
        paddingBottom: '100px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Quote Banner Section with 0.5s Staggered Text Morphing */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '44px',
          marginBottom: '160px',
        }}
      >
        <div style={{ maxWidth: '740px' }}>
          <p
            className={isVisible ? 'text-morph-active' : 'text-morph-hidden'}
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: '700',
              lineHeight: 1.3,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
            }}
          >
            “Don't just build a system that displays code, make it work reliably for real users.”
          </p>
        </div>

        <div style={{ maxWidth: '740px', alignSelf: 'flex-end', textAlign: 'right' }}>
          <p
            className={isVisible ? 'text-morph-active-delayed' : 'text-morph-hidden'}
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: '700',
              lineHeight: 1.3,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
            }}
          >
            “Engineering scalable applications with clean architecture and practical workflows.”
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="section-header">
        <div className="tag">
          <span>OVERVIEW</span>
        </div>
        <h2>{mission.tagline}</h2>
        <p>{mission.subtitle}</p>
      </div>

      {/* 3 Stat Cards Row matching Page 2 Mockup */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {mission.stats.map((stat) => (
          <div
            key={stat.label}
            className="clean-card"
            style={{
              padding: '24px 28px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-subtle)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: '700',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {stat.detail}
              </p>
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span
                style={{
                  fontSize: '1.7rem',
                  fontWeight: '800',
                  color: 'var(--text-main)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

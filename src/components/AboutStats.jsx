import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutStats() {
  const { mission } = portfolioData;
  const [isQuotesVisible, setIsQuotesVisible] = useState(false);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const quotesRef = useRef(null);
  const overviewRef = useRef(null);

  useEffect(() => {
    // Observer for Quotes Banner
    const quotesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
          setIsQuotesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    // Observer for Overview Header & Stat Cards
    const overviewObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
          setIsOverviewVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (quotesRef.current) quotesObserver.observe(quotesRef.current);
    if (overviewRef.current) overviewObserver.observe(overviewRef.current);

    return () => {
      if (quotesRef.current) quotesObserver.unobserve(quotesRef.current);
      if (overviewRef.current) overviewObserver.unobserve(overviewRef.current);
    };
  }, []);

  return (
    <section
      id="about"
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
      {/* Quote Banner Section with Sequential Text Morphing */}
      <div
        ref={quotesRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '160px',
        }}
      >
        <div style={{ maxWidth: '740px' }}>
          <p
            className={isQuotesVisible ? 'text-morph-active' : 'text-morph-hidden'}
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
            className={isQuotesVisible ? 'text-morph-active-delayed' : 'text-morph-hidden'}
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

      {/* Overview Section (Scroll Triggered: Text Slide Left & Cards Flow Below) */}
      <div ref={overviewRef}>
        <div
          className={`section-header ${isOverviewVisible ? 'overview-text-active' : 'overview-text-hidden'}`}
        >
          <div className="tag">
            <span>OVERVIEW</span>
          </div>
          <h2>{mission.tagline}</h2>
          <p>{mission.subtitle}</p>
        </div>

        {/* 3 Stat Cards Row Flowing from Below with Staggered Delays */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {mission.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`clean-card ${isOverviewVisible ? 'stat-card-active' : 'stat-card-hidden'}`}
              style={{
                padding: '24px 28px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                animationDelay: `${0.25 + idx * 0.2}s`,
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
      </div>
    </section>
  );
}

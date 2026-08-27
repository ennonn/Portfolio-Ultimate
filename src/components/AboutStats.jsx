import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutStats() {
  const { mission } = portfolioData;

  return (
    <section id="about" className="section-container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <div className="section-header">
        <div className="tag">
          <span>Overview</span>
        </div>
        <h2>{mission.tagline}</h2>
        <p>{mission.subtitle}</p>
      </div>

      {/* Sleek Horizontal Rectangular Cards Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {mission.stats.map((stat) => (
          <div
            key={stat.label}
            className="clean-card"
            style={{
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '80px',
            }}
          >
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '2px' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {stat.detail}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
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

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const { certifications, education } = portfolioData;

  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <div className="tag">
          <span>Qualifications</span>
        </div>
        <h2>Education & Certifications</h2>
        <p>
          Academic degree coursework and certified training completions.
        </p>
      </div>

      {/* Education Header Box */}
      <div
        className="clean-card"
        style={{
          padding: '24px',
          borderRadius: '14px',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <div style={{ color: 'var(--text-main)' }}>
            <GraduationCap size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)' }}>
              {education.institution}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {education.degree} ({education.major})
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
            {education.honors}
          </p>
          <span className="pill-badge">{education.period}</span>
        </div>
      </div>

      {/* Certifications Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}
      >
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="clean-card"
            style={{
              padding: '16px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={18} color="var(--text-muted)" />
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>

            <ExternalLink size={14} color="var(--text-subtle)" />
          </a>
        ))}
      </div>
    </section>
  );
}

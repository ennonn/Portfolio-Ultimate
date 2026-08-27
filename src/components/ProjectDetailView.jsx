import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Smartphone, Server, Layers, ShieldCheck, Database, Globe, CheckCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectDetailView({ project, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) return null;

  const { details } = project;

  return (
    <div className="section-container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="btn btn-secondary"
        style={{
          padding: '8px 16px',
          fontSize: '0.85rem',
          marginBottom: '28px',
        }}
      >
        <ArrowLeft size={16} />
        <span>All Projects</span>
      </button>

      {/* Project Title & Subtitle */}
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: '800',
            lineHeight: 1.15,
            marginBottom: '10px',
            color: 'var(--text-main)',
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            fontWeight: '500',
            maxWidth: '720px',
            marginBottom: '16px',
          }}
        >
          {details?.subtitle || project.shortDesc}
        </p>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', lineHeight: 1.6, maxWidth: '800px' }}>
          {details?.description || project.shortDesc}
        </p>
      </div>

      {/* Tech Tags Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="pill-badge" style={{ padding: '4px 12px', fontSize: '0.8rem' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Image Banner */}
      <div
        className="clean-card"
        style={{
          width: '100%',
          height: '420px',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '32px',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Project Links Bar */}
      <div
        className="clean-card"
        style={{
          padding: '20px 24px',
          borderRadius: '12px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '2px' }}>
            Project Links
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
            Open live application or inspect code repositories.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <ExternalLink size={15} />
              <span>Live Site</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <GithubIcon size={15} />
              <span>Web Repository</span>
            </a>
          )}
          {project.mobileUrl && (
            <a
              href={project.mobileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Smartphone size={15} />
              <span>Mobile Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* 2 Column Details Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '40px',
        }}
      >
        {/* Left Column: Coordinated Architecture & Security */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Coordinated Architecture */}
          <div className="clean-card" style={{ padding: '24px', borderRadius: '14px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} />
              <span>Coordinated Architecture</span>
            </h3>

            {details?.architecture ? (
              details.architecture.map((arch, i) => (
                <div key={i} style={{ marginBottom: '14px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '3px' }}>
                    {arch.role}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {arch.text}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Built with modern component architecture and serverless database integrations.
              </p>
            )}
          </div>

          {/* Security & Operations */}
          <div className="clean-card" style={{ padding: '24px', borderRadius: '14px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} />
              <span>Security & Core Features</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                  Device-Bound Verification
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  Generates cryptographic signatures verifying identity.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                  Location Check
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  Foreground GPS validation within assigned geofences.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                  Auditability
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  Structured reporting logs for audit trails.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Info Cards (Tech Stack, Context, Deployment) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Tech Stack Box */}
          <div className="clean-card" style={{ padding: '20px', borderRadius: '14px' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '700', marginBottom: '12px' }}>
              Tech Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="pill-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Context Box */}
          {details?.context && (
            <div className="clean-card" style={{ padding: '20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '700', marginBottom: '12px' }}>
                Context
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Type:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.context.type}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Clients:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.context.clients}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Scope:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.context.scope}</span>
                </div>
              </div>
            </div>
          )}

          {/* Deployment Box */}
          {details?.deployment && (
            <div className="clean-card" style={{ padding: '20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '700', marginBottom: '12px' }}>
                Deployment Stack
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Web:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.deployment.web}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Database:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.deployment.database}</span>
                </div>
                {details.deployment.mobile && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-subtle)' }}>Mobile:</span>
                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{details.deployment.mobile}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

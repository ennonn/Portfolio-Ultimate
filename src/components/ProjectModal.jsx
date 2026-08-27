import React from 'react';
import { X, ExternalLink, Smartphone, ShieldCheck, Server, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const { details } = project;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(7, 10, 18, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Back Link */}
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-indigo)',
            fontWeight: '600',
            fontSize: '0.85rem',
            marginBottom: '16px',
            cursor: 'pointer',
          }}
        >
          ← All Projects
        </button>

        {/* Header Title */}
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '8px',
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--accent-cyan)',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          {details?.subtitle || project.shortDesc}
        </p>

        {/* Full Image Banner */}
        <div
          style={{
            width: '100%',
            height: '320px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Action Links Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px',
            padding: '16px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
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
              <span>Mobile App</span>
            </a>
          )}
        </div>

        {/* Deep Dive Description */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#ffffff' }}>Project Overview</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            {details?.description || project.shortDesc}
          </p>
        </div>

        {/* Grid Breakdown: Architecture vs Tech Stack */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Left Column: Coordinated Architecture */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-indigo)',
              }}
            >
              <Server size={18} />
              <span>Coordinated Architecture</span>
            </h4>

            {details?.architecture ? (
              details.architecture.map((arch, i) => (
                <div key={i} style={{ marginBottom: '14px' }}>
                  <h5 style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: '600' }}>
                    {arch.role}
                  </h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {arch.text}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Built with modern component architecture and serverless backend pipelines.
              </p>
            )}
          </div>

          {/* Right Column: Deployment & Context */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-cyan)',
              }}
            >
              <Layers size={18} />
              <span>Deployment & Context</span>
            </h4>

            {details?.context && (
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>Context</p>
                <p style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: '600' }}>
                  {details.context.type} ({details.context.scope})
                </p>
              </div>
            )}

            {details?.deployment && (
              <div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>Deployment Stack</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <span className="pill-badge">Web: {details.deployment.web}</span>
                  <span className="pill-badge">DB: {details.deployment.database}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

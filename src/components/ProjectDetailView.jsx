import React from 'react';
import { ArrowLeft, ExternalLink, Play, CheckCircle2, Server, Database, Smartphone, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectDetailView({ project, onBack }) {
  const { details } = project;

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '120px clamp(20px, 4vw, 48px) 80px',
      }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '28px',
          padding: '4px 0',
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <ArrowLeft size={16} />
        <span>Back to All Projects</span>
      </button>

      {/* Project Title & Category */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '6px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {project.category}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            Production Release
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: '800',
            lineHeight: 1.1,
            color: 'var(--text-main)',
            marginBottom: '12px',
          }}
        >
          {project.title}
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px' }}>
          {details?.subtitle || project.shortDesc}
        </p>
      </div>

      {/* Video Walkthrough / Interactive Media Container */}
      <div
        className="clean-card"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '48px',
          background: '#000000',
        }}
      >
        <div
          style={{
            padding: '12px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={14} color="#10b981" />
            <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.04em' }}>
              VIDEO WALKTHROUGH & INTERACTIVE DEMONSTRATION
            </span>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Full HD Screen Recording
          </span>
        </div>

        <div style={{ width: '100%', maxHeight: '560px', overflow: 'hidden' }}>
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              poster={project.image}
              style={{
                width: '100%',
                maxHeight: '560px',
                objectFit: 'cover',
                display: 'block',
              }}
            >
              Your browser does not support HTML5 video playback.
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', maxHeight: '560px', objectFit: 'cover' }}
            />
          )}
        </div>
      </div>

      {/* Action Bar Links */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '48px',
        }}
      >
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '12px 24px', borderRadius: '9999px' }}
          >
            <span>Live Demonstration</span>
            <ExternalLink size={16} />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ padding: '12px 24px', borderRadius: '9999px' }}
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
        )}

        {project.mobileUrl && (
          <a
            href={project.mobileUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ padding: '12px 24px', borderRadius: '9999px' }}
          >
            <Smartphone size={16} />
            <span>Mobile App Code</span>
          </a>
        )}
      </div>

      {/* Overview & Context Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
        }}
      >
        {/* Project Description */}
        <div className="clean-card" style={{ padding: '32px', borderRadius: '18px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>
            System Scope & Overview
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            {details?.description || project.shortDesc}
          </p>
        </div>

        {/* System Context Box */}
        {details?.context && (
          <div className="clean-card" style={{ padding: '32px', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text-main)' }}>
              Deployment Metadata
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase' }}>System Architecture</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>{details.context.type}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase' }}>Clients & Interfaces</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>{details.context.clients}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase' }}>Primary Scope</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>{details.context.scope}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Key Architecture Features */}
      {details?.architecture && (
        <div className="clean-card" style={{ padding: '36px', borderRadius: '20px', marginBottom: '48px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text-main)' }}>
            Technical Architecture & Implementation Highlights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {details.architecture.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                    {item.role}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deployment Stack Tags */}
      <div className="clean-card" style={{ padding: '28px', borderRadius: '16px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>
          Technologies & Infrastructure
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'var(--text-main)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

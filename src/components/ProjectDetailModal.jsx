import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease forwards',
      }}
    >
      {/* Modal Dialog Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92vh',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Sticky Modal Top Header */}
        <div
          style={{
            padding: '18px 28px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-card)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
              {project.title.split('—')[0]}
            </span>
          </div>

          <button
            onClick={onClose}
            title="Close (Esc)"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--btn-secondary-bg)')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '28px 32px 40px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* 1. Main Title & Subtitle */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                color: 'var(--text-main)',
                marginBottom: '10px',
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {details?.description || project.shortDesc}
            </p>
          </div>

          {/* 2. Tech Stack Tag Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 3. CLEAN UNCROPPED GIF-STYLE VIDEO LOOP (No Controls, Standard height: auto, Zero Cropping) */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
            <video
              key={project.videoUrl}
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                maxWidth: '780px',
                height: 'auto',
                display: 'block',
                borderRadius: '0px',
                border: '1px solid var(--border-subtle)',
                background: '#000000',
              }}
            />
          </div>

          {/* 4. Action Links Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 22px', borderRadius: '9999px' }}
              >
                <span>Live Platform</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '10px 22px', borderRadius: '9999px' }}
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
              </a>
            )}
          </div>

          {/* 5. Key Architecture & Features */}
          {details?.architecture && (
            <div style={{ paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '16px', letterSpacing: '0.06em' }}>
                Key Architecture & Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {details.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      paddingBottom: '12px',
                      borderBottom: idx < details.architecture.length - 1 ? '1px dashed var(--border-subtle)' : 'none',
                    }}
                  >
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                        {item.role}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Context & Deployment Metadata Table */}
          {details?.context && (
            <div>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '16px', letterSpacing: '0.06em' }}>
                Deployment & System Metadata
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  padding: '20px',
                  borderRadius: '14px',
                  background: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>Type</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700' }}>{details.context.type}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>Clients</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700' }}>{details.context.clients}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>Scope</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700' }}>{details.context.scope}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

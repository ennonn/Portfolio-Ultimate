import React, { useState, useRef, useEffect } from 'react';

export default function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="clean-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'var(--border-hover)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      {/* Project Card Media Display (Shows Video First Frame as Thumbnail, Plays on Hover) */}
      <div
        style={{
          width: '100%',
          height: '210px',
          position: 'relative',
          overflow: 'hidden',
          background: '#09090b',
        }}
      >
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={`${project.videoUrl}#t=0.1`}
            preload="metadata"
            loop
            muted
            playsInline
            poster={project.image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}

        <span
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '4px 12px',
            borderRadius: '6px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.04em',
            zIndex: 2,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Project Card Info */}
      <div
        style={{
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: '800',
              marginBottom: '10px',
              color: 'var(--text-main)',
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              marginBottom: '18px',
              lineHeight: 1.5,
            }}
          >
            {project.shortDesc}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="pill-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

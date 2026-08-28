import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Layers } from 'lucide-react';

export default function Projects({ onSelectProject, onViewAllProjects }) {
  const topProjects = portfolioData.projects.slice(0, 5);

  return (
    <section id="projects" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="tag">
          <span>FEATURED WORK</span>
        </div>
        <h2>Shipped Products & Software Systems</h2>
        <p>Production web platforms, GovTech systems, and developer software.</p>
      </div>

      {/* Grid: 5 Top Projects + 1 "View All Projects" Card */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {topProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project.id)}
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
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            {/* Project Image Box */}
            <div
              style={{
                width: '100%',
                height: '210px',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--bg-surface)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
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
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Project Card Content */}
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
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="pill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 6th Card: View All Projects (15+) */}
        <div
          onClick={onViewAllProjects}
          className="clean-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '36px 24px',
            borderRadius: '16px',
            cursor: 'pointer',
            textAlign: 'center',
            minHeight: '380px',
            border: '2px dashed var(--border-hover)',
            background: 'var(--btn-secondary-bg)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'var(--text-main)';
            e.currentTarget.style.background = 'var(--bg-card-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.background = 'var(--btn-secondary-bg)';
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              marginBottom: '16px',
            }}
          >
            <Layers size={24} />
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>
            View All Projects
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', maxWidth: '240px' }}>
            Explore 15+ shipped applications, GovTech systems, and developer tools.
          </p>

          <div
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              borderRadius: '9999px',
            }}
          >
            <span>Browse Full Catalog</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Web App'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="tag">
          <span>Projects</span>
        </div>
        <h2>Crafted Projects</h2>
        <p>
          Featured web systems, operational platforms, and developer software.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: activeCategory === cat ? '1px solid var(--text-main)' : '1px solid var(--border-subtle)',
              background: activeCategory === cat ? 'var(--btn-primary-bg)' : 'var(--bg-card)',
              color: activeCategory === cat ? 'var(--btn-primary-text)' : 'var(--text-muted)',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects 2-Column Grid System */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="clean-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: '12px',
            }}
          >
            {/* Image Thumbnail */}
            <div
              style={{
                position: 'relative',
                height: '200px',
                width: '100%',
                overflow: 'hidden',
                background: 'var(--bg-surface)',
                cursor: 'pointer',
              }}
              onClick={() => onSelectProject(project)}
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
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                }}
              >
                {project.category}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectProject(project)}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.shortDesc}
              </p>

              {/* Tech Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '16px',
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="pill-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  onClick={() => onSelectProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <Eye size={15} />
                  <span>Inspect View</span>
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub Repository"
                      style={{
                        color: 'var(--text-muted)',
                        padding: '5px',
                        borderRadius: '4px',
                        background: 'var(--btn-secondary-bg)',
                        display: 'inline-flex',
                      }}
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Site"
                      style={{
                        color: 'var(--text-main)',
                        padding: '5px',
                        borderRadius: '4px',
                        background: 'var(--btn-secondary-bg)',
                        display: 'inline-flex',
                      }}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

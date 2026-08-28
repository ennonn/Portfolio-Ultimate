import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, Search, Filter } from 'lucide-react';

export default function AllProjectsView({ onBack, onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full-Stack', 'GovTech', 'Web App', 'Developer Tools', 'Frontend'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '120px clamp(20px, 4vw, 48px) 80px',
        minHeight: '90vh',
      }}
    >
      {/* Back Breadcrumb */}
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
        <span>Back to Overview</span>
      </button>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: '800',
            marginBottom: '12px',
            color: 'var(--text-main)',
          }}
        >
          All Shipped Products & Software Systems
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '680px' }}>
          Explore the full catalog of production applications, GovTech systems, and open-source tools.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px',
          padding: '16px',
          borderRadius: '14px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--text-main)' : 'var(--border-subtle)',
                background: selectedCategory === cat ? 'var(--btn-primary-bg)' : 'transparent',
                color: selectedCategory === cat ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px',
            borderRadius: '8px',
            background: 'var(--btn-secondary-bg)',
            border: '1px solid var(--border-subtle)',
            minWidth: '260px',
          }}
        >
          <Search size={16} color="var(--text-subtle)" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontSize: '0.88rem',
              width: '100%',
            }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project) => (
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
                transition: 'transform 0.2s ease, border-color 0.2s ease',
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
                  }}
                >
                  {project.category}
                </span>
              </div>

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

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem' }}>No projects match your current search criteria.</p>
        </div>
      )}
    </div>
  );
}

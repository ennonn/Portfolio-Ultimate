import React, { useState, useEffect, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { ArrowLeft, Search, ChevronLeft, ChevronRight, Layers, ArrowDownCircle } from 'lucide-react';

export default function AllProjectsView({ onBack, onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayMode, setDisplayMode] = useState('pagination'); // 'pagination' | 'infinite'
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    'All',
    'Full-Stack',
    'GovTech',
    'Web App',
    'Developer Tools',
    'Frontend',
    'FinTech',
    'Mobile App',
    'AI & ML'
  ];

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset page & count when category or search query changes
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCount(pageSize);
  }, [selectedCategory, searchQuery, pageSize]);

  // Calculated Projects for Pagination Mode
  const totalPages = Math.ceil(filteredProjects.length / pageSize) || 1;
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredProjects.slice(startIndex, startIndex + pageSize);
  }, [filteredProjects, currentPage, pageSize]);

  // Calculated Projects for Infinite / Load More Mode
  const infiniteProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const projectsToDisplay = displayMode === 'pagination' ? paginatedProjects : infiniteProjects;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + pageSize, filteredProjects.length));
  };

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: 'var(--text-main)',
              lineHeight: 1.15,
            }}
          >
            All Shipped Products & Software Systems
          </h1>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'var(--text-main)',
            }}
          >
            {portfolioData.projects.length} Total
          </span>
        </div>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '720px' }}>
          Explore the full catalog of production applications, GovTech systems, developer tools, and full-stack software.
        </p>
      </div>

      {/* Control Bar: Filters, Search, Display Mode & Page Size */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '40px',
          padding: '20px',
          borderRadius: '16px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}
      >
        {/* Top Row: Category Pills */}
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

        {/* Bottom Row: Search & Display Mode Selector */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '16px',
          }}
        >
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
              minWidth: '280px',
              flex: 1,
              maxWidth: '420px',
            }}
          >
            <Search size={16} color="var(--text-subtle)" />
            <input
              type="text"
              placeholder="Search 24+ projects or tech..."
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

          {/* Mode Selector & Page Size Options */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            {/* Page Size Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-subtle)' }}>
                Per Page:
              </span>
              {[6, 9, 12].map((size) => (
                <button
                  key={size}
                  onClick={() => setPageSize(size)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: pageSize === size ? 'var(--text-main)' : 'var(--border-subtle)',
                    background: pageSize === size ? 'var(--btn-secondary-bg)' : 'transparent',
                    color: pageSize === size ? 'var(--text-main)' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Display Mode Toggles */}
            <div
              style={{
                display: 'flex',
                background: 'var(--btn-secondary-bg)',
                padding: '3px',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <button
                onClick={() => setDisplayMode('pagination')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: 'none',
                  background: displayMode === 'pagination' ? 'var(--bg-card)' : 'transparent',
                  color: displayMode === 'pagination' ? 'var(--text-main)' : 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: displayMode === 'pagination' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <Layers size={14} />
                <span>Pagination</span>
              </button>

              <button
                onClick={() => setDisplayMode('infinite')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: 'none',
                  background: displayMode === 'infinite' ? 'var(--bg-card)' : 'transparent',
                  color: displayMode === 'infinite' ? 'var(--text-main)' : 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: displayMode === 'infinite' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <ArrowDownCircle size={14} />
                <span>Load More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {projectsToDisplay.length > 0 ? (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {projectsToDisplay.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onSelectProject(project.id)}
              />
            ))}
          </div>

          {/* PAGINATION CONTROLS (Displayed when mode is 'pagination') */}
          {displayMode === 'pagination' && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {/* Pagination Info Counter */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                Showing{' '}
                <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>
                  {Math.min((currentPage - 1) * pageSize + 1, filteredProjects.length)}–
                  {Math.min(currentPage * pageSize, filteredProjects.length)}
                </span>{' '}
                of <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>{filteredProjects.length}</span> projects
              </p>

              {/* Page Numbers Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-main)',
                    opacity: currentPage === 1 ? 0.4 : 1,
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: currentPage === pageNum ? 'var(--text-main)' : 'var(--border-subtle)',
                      background: currentPage === pageNum ? 'var(--btn-primary-bg)' : 'var(--bg-card)',
                      color: currentPage === pageNum ? 'var(--btn-primary-text)' : 'var(--text-main)',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-main)',
                    opacity: currentPage === totalPages ? 0.4 : 1,
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* INFINITE SCROLL / LOAD MORE CONTROLS (Displayed when mode is 'infinite') */}
          {displayMode === 'infinite' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                Showing{' '}
                <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>
                  {Math.min(visibleCount, filteredProjects.length)}
                </span>{' '}
                of <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>{filteredProjects.length}</span> projects
              </p>

              {visibleCount < filteredProjects.length ? (
                <button
                  onClick={handleLoadMore}
                  className="btn btn-primary"
                  style={{
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    fontSize: '0.92rem',
                    fontWeight: '700',
                  }}
                >
                  <span>Load More Projects ({filteredProjects.length - visibleCount} remaining)</span>
                  <ArrowDownCircle size={18} />
                </button>
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: '600' }}>
                  ✓ All {filteredProjects.length} projects loaded
                </p>
              )}
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem' }}>No projects match your current search criteria.</p>
        </div>
      )}
    </div>
  );
}

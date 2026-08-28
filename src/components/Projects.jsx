import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { ArrowRight, Layers } from 'lucide-react';

export default function Projects({ onSelectProject, onViewAllProjects }) {
  const topProjects = portfolioData.projects.slice(0, 5);
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.project-scroll-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-container">
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
        {topProjects.map((project, idx) => {
          const isRevealed = !!visibleItems[project.id];
          return (
            <div
              key={project.id}
              data-id={project.id}
              className="project-scroll-item"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.96)',
                transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
              }}
            >
              <ProjectCard
                project={project}
                onClick={() => onSelectProject(project.id)}
              />
            </div>
          );
        })}

        {/* 6th Card: View All Projects */}
        <div
          data-id="view-all-card"
          className="project-scroll-item"
          style={{
            opacity: !!visibleItems['view-all-card'] ? 1 : 0,
            transform: !!visibleItems['view-all-card'] ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.96)',
            transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
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
              height: '100%',
              border: '2px dashed var(--border-hover)',
              background: 'var(--btn-secondary-bg)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
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
              Explore 24+ shipped applications, GovTech systems, and developer tools.
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
      </div>
    </section>
  );
}

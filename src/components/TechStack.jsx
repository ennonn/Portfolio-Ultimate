import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Code, Globe, FileCode, Palette, Layout, Server, Zap, Terminal, Link as LinkIcon, Database, Layers, HardDrive, Cloud, Shield, GitBranch, Box, UploadCloud, CheckCircle } from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

export default function TechStack() {
  const { techStack } = portfolioData;

  const getTechIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={16} />;
      case 'Globe': return <Globe size={16} />;
      case 'FileCode': return <FileCode size={16} />;
      case 'Palette': return <Palette size={16} />;
      case 'Layout': return <Layout size={16} />;
      case 'Server': return <Server size={16} />;
      case 'Zap': return <Zap size={16} />;
      case 'Terminal': return <Terminal size={16} />;
      case 'Link': return <LinkIcon size={16} />;
      case 'Database': return <Database size={16} />;
      case 'Layers': return <Layers size={16} />;
      case 'HardDrive': return <HardDrive size={16} />;
      case 'Cloud': return <Cloud size={16} />;
      case 'Shield': return <Shield size={16} />;
      case 'GitBranch': return <GitBranch size={16} />;
      case 'Box': return <Box size={16} />;
      case 'Figma': return <FigmaIcon size={16} />;
      case 'UploadCloud': return <UploadCloud size={16} />;
      default: return <CheckCircle size={16} />;
    }
  };

  return (
    <section id="techstack" className="section-container">
      <div className="section-header">
        <div className="tag">
          <span>Tech Stack</span>
        </div>
        <h2>Technologies & Tools</h2>
        <p>
          Structured by domain expertise and daily toolsets.
        </p>
      </div>

      {/* Grid of Categories */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {techStack.map((category) => (
          <div
            key={category.category}
            className="clean-card"
            style={{
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '16px',
                color: 'var(--text-main)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '10px',
              }}
            >
              {category.category}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'var(--btn-secondary-bg)',
                    border: '1px solid var(--border-subtle)',
                    textDecoration: 'none',
                    color: 'var(--text-main)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.background = 'var(--bg-card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'var(--btn-secondary-bg)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: 'var(--text-muted)' }}>
                      {getTechIcon(item.icon)}
                    </div>
                    <span style={{ fontWeight: '500', fontSize: '0.88rem' }}>{item.name}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="pill-badge">{item.level}</span>
                    <ExternalLink size={12} color="var(--text-subtle)" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

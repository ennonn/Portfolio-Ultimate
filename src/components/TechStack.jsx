import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code,
  Globe,
  FileCode,
  Palette,
  Layout,
  Server,
  Zap,
  Terminal,
  Cpu,
  Database,
  Layers,
  HardDrive,
  Cloud,
  Shield,
  GitBranch,
  Box,
  UploadCloud,
  CheckCircle,
  Sparkles,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FigmaIcon, GisIcon, MapPinIcon } from './BrandIcons';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const getTechIcon = (iconName) => {
    switch (iconName) {
      case 'Gis': return <GisIcon size={18} color="var(--text-main)" />;
      case 'MapPin': return <MapPinIcon size={18} color="var(--text-main)" />;
      case 'Code': return <Code size={18} color="var(--text-main)" />;
      case 'Globe': return <Globe size={18} color="var(--text-main)" />;
      case 'FileCode': return <FileCode size={18} color="var(--text-main)" />;
      case 'Palette': return <Palette size={18} color="var(--text-main)" />;
      case 'Layout': return <Layout size={18} color="var(--text-main)" />;
      case 'Server': return <Server size={18} color="var(--text-main)" />;
      case 'Cpu': return <Cpu size={18} color="var(--text-main)" />;
      case 'Zap': return <Zap size={18} color="var(--text-main)" />;
      case 'Terminal': return <Terminal size={18} color="var(--text-main)" />;
      case 'Database': return <Database size={18} color="var(--text-main)" />;
      case 'Layers': return <Layers size={18} color="var(--text-main)" />;
      case 'HardDrive': return <HardDrive size={18} color="var(--text-main)" />;
      case 'Cloud': return <Cloud size={18} color="var(--text-main)" />;
      case 'Shield': return <Shield size={18} color="var(--text-main)" />;
      case 'GitBranch': return <GitBranch size={18} color="var(--text-main)" />;
      case 'Box': return <Box size={18} color="var(--text-main)" />;
      case 'Figma': return <FigmaIcon size={18} color="var(--text-main)" />;
      case 'UploadCloud': return <UploadCloud size={18} color="var(--text-main)" />;
      default: return <CheckCircle size={18} color="var(--text-main)" />;
    }
  };

  const getCategoryIcon = (catName) => {
    switch (catName) {
      case 'GIS': return <GisIcon size={22} color="var(--text-main)" />;
      case 'Frontend': return <Layout size={22} color="var(--text-main)" />;
      case 'Backend': return <Server size={22} color="var(--text-main)" />;
      case 'Database': return <Database size={22} color="var(--text-main)" />;
      case 'Development': return <Box size={22} color="var(--text-main)" />;
      default: return <Sparkles size={22} color="var(--text-main)" />;
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleMouseEnterBadge = (item, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredTool(item);
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 12,
    });
  };

  const totalCards = techStack.length;
  const angleStep = 360 / totalCards;

  return (
    <section id="techstack" className="section-container" style={{ overflow: 'hidden' }}>
      {/* Section Header */}
      <div className="section-header">
        <div className="tag">
          <span>INFINITE 3D CAROUSEL</span>
        </div>
        <h2>Technologies & Engineering Toolsets</h2>
        <p>Infinite 3D rotating vertical card carousel. Hover any tool badge to reveal floating tooltips.</p>
      </div>

      {/* Category Pills Header with Navigation */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '44px',
          maxWidth: '920px',
          margin: '0 auto 44px',
        }}
      >
        <button
          onClick={handlePrev}
          title="Rotate Left"
          style={{
            width: '42px',
            height: '42px',
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
        >
          <ChevronLeft size={20} />
        </button>

        {techStack.map((group, idx) => {
          // Wrap active index into 0..totalCards-1 range for category button highlighting
          const normalizedActive = ((activeIndex % totalCards) + totalCards) % totalCards;
          const isActive = normalizedActive === idx;

          return (
            <button
              key={group.category}
              onClick={() => {
                // Find shortest rotation path to target idx
                const currentNorm = normalizedActive;
                let diff = idx - currentNorm;
                if (diff > totalCards / 2) diff -= totalCards;
                if (diff < -totalCards / 2) diff += totalCards;
                setActiveIndex((prev) => prev + diff);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: isActive ? 'var(--text-main)' : 'var(--border-subtle)',
                background: isActive ? 'var(--btn-primary-bg)' : 'var(--bg-card)',
                color: isActive ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                fontSize: '0.88rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isActive ? '0 6px 18px rgba(0,0,0,0.14)' : 'none',
              }}
            >
              <span>{group.category}</span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: '800',
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--btn-secondary-bg)',
                  color: isActive ? 'var(--btn-primary-text)' : 'var(--text-subtle)',
                }}
              >
                {group.items.length}
              </span>
            </button>
          );
        })}

        <button
          onClick={handleNext}
          title="Rotate Right"
          style={{
            width: '42px',
            height: '42px',
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
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Infinite 3D Rotating Carousel Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          height: '560px',
          margin: '0 auto',
          perspective: '1200px',
        }}
      >
        {techStack.map((group, idx) => {
          // Compute infinite circular orbit angle for card idx
          const cardAngle = idx * angleStep;
          const currentRotationAngle = activeIndex * angleStep;
          let relativeAngle = (cardAngle - currentRotationAngle) % 360;
          if (relativeAngle > 180) relativeAngle -= 360;
          if (relativeAngle < -180) relativeAngle += 360;

          const isFront = Math.abs(relativeAngle) < 1;

          // 3D positioning calculations
          const rad = (relativeAngle * Math.PI) / 180;
          const translateX = Math.sin(rad) * 280;
          const translateZ = Math.cos(rad) * 220 - 220;
          const rotateY = -relativeAngle * 0.6;
          const opacity = Math.max(0.15, Math.cos(rad));
          const scale = 0.85 + Math.cos(rad) * 0.18;

          return (
            <div
              key={group.category}
              onClick={() => {
                let diff = idx - (((activeIndex % totalCards) + totalCards) % totalCards);
                if (diff > totalCards / 2) diff -= totalCards;
                if (diff < -totalCards / 2) diff += totalCards;
                setActiveIndex((prev) => prev + diff);
              }}
              className="clean-card"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                maxWidth: '420px',
                height: '540px',
                borderRadius: '28px',
                padding: '32px 28px',
                background: 'var(--bg-card)',
                border: isFront ? '2px solid var(--text-main)' : '1px solid var(--border-subtle)',
                boxShadow: isFront
                  ? '0 28px 70px rgba(0, 0, 0, 0.16), 0 0 0 1px var(--text-main)'
                  : '0 10px 30px rgba(0, 0, 0, 0.05)',
                transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.round(100 + Math.cos(rad) * 50),
                cursor: isFront ? 'default' : 'pointer',
                pointerEvents: opacity < 0.3 ? 'none' : 'auto',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Vertical Card Header */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'var(--btn-secondary-bg)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                      }}
                    >
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1.1 }}>
                        {group.category}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: '600' }}>
                        Revolving Card ({idx + 1} of {totalCards})
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: 'var(--btn-secondary-bg)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {group.items.length} Tools
                  </span>
                </div>

                {/* Vertical Rectangle Inner Tools Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxHeight: '380px',
                    overflowY: 'auto',
                    paddingRight: '4px',
                  }}
                >
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      onMouseEnter={(e) => handleMouseEnterBadge(item, e)}
                      onMouseLeave={() => setHoveredTool(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 18px',
                        borderRadius: '14px',
                        background: 'var(--btn-secondary-bg)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.92rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = 'var(--text-main)';
                        e.currentTarget.style.background = 'var(--bg-card-hover)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.background = 'var(--btn-secondary-bg)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {getTechIcon(item.icon)}
                        </div>
                        <span>{item.name}</span>
                      </div>

                      <Info size={14} color="var(--text-subtle)" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.78rem',
                  color: 'var(--text-subtle)',
                  fontWeight: '600',
                }}
              >
                <span>Hover badge for tool info</span>
                <span>Card {idx + 1} of {totalCards}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Glassmorphic Tooltip Popover on Badge Hover */}
      {hoveredTool && (
        <div
          style={{
            position: 'fixed',
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
            maxWidth: '300px',
            width: 'max-content',
            padding: '14px 18px',
            borderRadius: '16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--text-main)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'none',
            animation: 'tooltipPop 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            {getTechIcon(hoveredTool.icon)}
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)' }}>
              {hoveredTool.name}
            </h4>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, fontWeight: '500' }}>
            {hoveredTool.desc}
          </p>
        </div>
      )}

      {/* Popover Keyframe */}
      <style>{`
        @keyframes tooltipPop {
          0% { opacity: 0; transform: translate(-50%, -90%) scale(0.92); }
          100% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(7, 10, 18, 0.95)',
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p style={{ fontSize: '0.88rem', color: 'var(--text-subtle)' }}>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Designed & Built with <Heart size={14} color="var(--accent-purple)" style={{ verticalAlign: 'middle' }} /> in React
        </p>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MessageSquare, Check } from 'lucide-react';

export default function ContactTrigger({ onOpenChat }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '100px' }}>
      <div
        className="clean-card"
        style={{
          borderRadius: '16px',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <div className="tag" style={{ margin: '0 auto 12px auto', display: 'inline-block' }}>
          <span>Get in Touch</span>
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>
          Let's Work Together
        </h2>

        <p style={{ fontSize: '1rem', maxWidth: '520px', margin: '0 auto 28px auto', color: 'var(--text-muted)' }}>
          Reach out directly for software engineering opportunities, project inquiries, or general questions.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <button
            onClick={handleCopyEmail}
            className="btn btn-primary"
            style={{ padding: '12px 24px' }}
          >
            {copied ? <Check size={16} /> : <Mail size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
          </button>

          <button
            onClick={onOpenChat}
            className="btn btn-secondary"
            style={{ padding: '12px 24px' }}
          >
            <MessageSquare size={16} />
            <span>Open Quick Message</span>
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
          Direct Email: <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{personal.email}</span>
        </p>
      </div>
    </section>
  );
}

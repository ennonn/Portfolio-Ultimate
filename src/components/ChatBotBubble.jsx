import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatBotBubble({ isOpen, onToggle }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! Leave a quick message or ask about ${portfolioData.personal.name}'s projects and technical background.`
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    "What projects has Ian built?",
    "What is Ian's tech stack?",
    "How to contact Ian?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      let botResponse = `Thank you for your message! You can reach out directly via email at ${portfolioData.personal.email}`;
      const lower = query.toLowerCase();

      if (lower.includes('project')) {
        botResponse = `Ian has built applications including UA LabSign (Attendance System), AC-CORE (GovTech Spatial Routing), Grit (Resume Matcher), and SubVantage (FinTech Dashboard).`;
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('skill')) {
        botResponse = `Ian works with React, Next.js, TypeScript, Node.js, Express, Fastify, PostgreSQL, Prisma, MongoDB, and Tailwind CSS.`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
        botResponse = `Ian is open for engineering roles and freelance work. Email: ${portfolioData.personal.email}`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1500,
      }}
    >
      {/* Contact Drawer Box */}
      {isOpen && (
        <div
          className="clean-card"
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '0',
            width: '330px',
            height: '420px',
            borderRadius: '16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-surface)',
            }}
          >
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)' }}>Quick Contact</h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Direct Message Assistant</p>
            </div>

            <button
              onClick={onToggle}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: '14px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '8px 12px',
                    borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    background: msg.sender === 'user' ? 'var(--btn-primary-bg)' : 'var(--btn-secondary-bg)',
                    color: msg.sender === 'user' ? 'var(--btn-primary-text)' : 'var(--text-main)',
                    fontSize: '0.82rem',
                    lineHeight: 1.4,
                    fontWeight: msg.sender === 'user' ? '600' : '400',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Pills */}
          <div style={{ padding: '6px 10px', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1px solid var(--border-subtle)' }}>
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  background: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: '10px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              type="text"
              placeholder="Send message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSend()}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'var(--btn-primary-bg)',
                border: 'none',
                color: 'var(--btn-primary-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          borderRadius: '9999px',
          background: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-text)',
          fontWeight: '600',
          fontSize: '0.85rem',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.15s ease',
        }}
      >
        <MessageSquare size={16} />
        <span>Contact</span>
      </button>
    </div>
  );
}

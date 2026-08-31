import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Sparkles } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const defaultUrl = typeof window !== 'undefined' ? window.location.href : 'http://localhost:5173';
  const [url, setUrl] = useState(defaultUrl);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999,
      background: 'rgba(10, 22, 18, 0.75)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '520px',
        width: '100%',
        padding: '36px',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px',
            borderRadius: '50%',
            background: 'var(--bg-main)',
            color: 'var(--ink-600)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span className="badge badge-green">
            <Sparkles size={13} /> Presentation & PPT Ready
          </span>
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink-900)', marginBottom: '8px' }}>
          Scan to Open Showcase Hub
        </h3>

        <p style={{ fontSize: '14px', color: 'var(--ink-600)', marginBottom: '24px' }}>
          Display this QR on your PowerPoint slides for SIH judges to view system architecture, live lifecycle diagrams, and download the APKs.
        </p>

        {/* Big Crisp QR Code Container */}
        <div style={{
          display: 'inline-block',
          padding: '20px',
          background: '#ffffff',
          borderRadius: '20px',
          border: '2px solid var(--ink-200)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '24px',
        }}>
          <QRCodeSVG value={url} size={220} level="H" includeMargin />
        </div>

        {/* URL editor & copy field */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px',
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--ink-200)',
          marginBottom: '16px',
        }}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              padding: '8px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--ink-900)',
              outline: 'none',
            }}
          />
          <button
            onClick={handleCopy}
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--ink-400)' }}>
          Once hosted on Vercel / Netlify / Render, replace the link above with your live domain to generate the final high-res QR.
        </div>
      </div>
    </div>
  );
};

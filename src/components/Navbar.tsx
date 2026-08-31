import { QrCode, Download } from 'lucide-react';

interface NavbarProps {
  onOpenQrModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQrModal }) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--ink-200)',
      padding: '16px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.svg" alt="SahaKarya" style={{ width: '38px', height: '38px' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: 'var(--primary-deep)', letterSpacing: '-0.3px' }}>
              SahaKarya <span style={{ color: 'var(--gold-dark)', fontSize: '15px' }}>(सहकार्य)</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--ink-600)', fontWeight: 600, letterSpacing: '0.2px' }}>
              SIH26089 • Labour Cooperative Federation Platform
            </div>
          </div>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-links">
          <a href="#overview" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ink-600)' }}>Overview</a>
          <a href="#architecture" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ink-600)' }}>System Design</a>
          <a href="#workflow" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ink-600)' }}>Live Lifecycle</a>
          <a href="#ai-forecasting" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ink-600)' }}>AI Model</a>
          <a href="#downloads" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={16} /> APK Downloads
          </a>
        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={onOpenQrModal}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '13.5px' }}
            title="Generate QR code for live phone scanning in Presentation / PPT"
          >
            <QrCode size={16} color="var(--primary)" />
            <span>Generate PPT QR</span>
          </button>

          <a 
            href="#downloads" 
            className="btn btn-primary"
            style={{ padding: '8px 18px', fontSize: '13.5px' }}
          >
            <span>Get Apps</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

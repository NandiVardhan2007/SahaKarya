import { useState } from 'react';
import { QrCode, Download, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenQrModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQrModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--ink-200)',
      padding: '12px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.svg" alt="SahaKarya" style={{ width: '34px', height: '34px', flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', color: 'var(--forest-900)', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              SahaKarya <span style={{ color: 'var(--amber-600)', fontSize: '13px' }}>(सहकार्य)</span>
            </div>
            <div style={{ fontSize: '10.5px', color: 'var(--ink-500)', fontWeight: 600, letterSpacing: '0.2px' }}>
              SIH26089 • Labour Cooperative Platform
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#overview" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-700)' }}>Overview</a>
          <a href="#architecture" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-700)' }}>System Design</a>
          <a href="#workflow" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-700)' }}>Live Lifecycle</a>
          <a href="#ai-forecasting" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-700)' }}>AI Model</a>
          <a href="#downloads" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--forest-700)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Download size={15} /> APK Downloads
          </a>
        </div>

        {/* Desktop Action CTAs */}
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            onClick={onOpenQrModal}
            className="btn btn-outline"
            style={{ padding: '8px 14px', fontSize: '13px' }}
            title="Generate QR code for live phone scanning in Presentation / PPT"
          >
            <QrCode size={15} color="var(--forest-700)" />
            <span>PPT QR</span>
          </button>

          <a 
            href="#downloads" 
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <span>Get Apps</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            padding: '8px',
            borderRadius: '8px',
            background: 'var(--forest-50)',
            color: 'var(--forest-800)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--ink-200)',
          padding: '16px 20px',
          boxShadow: 'var(--shadow-elevated)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}>
          <a href="#overview" onClick={closeMenu} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink-800)', padding: '6px 0' }}>
            Overview
          </a>
          <a href="#architecture" onClick={closeMenu} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink-800)', padding: '6px 0' }}>
            System Design Topology
          </a>
          <a href="#workflow" onClick={closeMenu} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink-800)', padding: '6px 0' }}>
            5-Stage Live Lifecycle
          </a>
          <a href="#ai-forecasting" onClick={closeMenu} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink-800)', padding: '6px 0' }}>
            AI Demand Forecasting ML
          </a>
          <a href="#downloads" onClick={closeMenu} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--forest-700)', padding: '6px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={16} /> Direct APK Downloads
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '10px', borderTop: '1px solid var(--ink-200)' }}>
            <a
              href="/downloads/SIH2026_PS26089_Presentation.pptx"
              download="SIH2026_PS26089_Presentation.pptx"
              className="btn btn-gold"
              style={{ width: '100%', padding: '10px', fontSize: '14px' }}
            >
              <FileText size={16} /> Download Pitch Deck (.PPTX)
            </a>
            <button
              onClick={() => { closeMenu(); onOpenQrModal(); }}
              className="btn btn-outline"
              style={{ width: '100%', padding: '10px', fontSize: '14px' }}
            >
              <QrCode size={16} color="var(--forest-700)" /> Generate Presentation QR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

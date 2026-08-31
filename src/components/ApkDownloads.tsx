import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Smartphone, CheckCircle2, ShieldCheck, HardDrive, RefreshCw } from 'lucide-react';

export const ApkDownloads: React.FC = () => {
  // Allow switching base host for QR code testing (current browser origin or local network IP)
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';
  const [customHost, setCustomHost] = useState(currentOrigin);

  const customerApkUrl = `${customHost}/downloads/sahakarya-customer-app.apk`;
  const workerApkUrl = `${customHost}/downloads/sahakarya-partner-app.apk`;

  return (
    <section id="downloads" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid var(--ink-200)' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">Live Evaluation & Testing</div>
          <h2 className="title">Direct APK Downloads & Instant QR Codes</h2>
          <p className="desc">
            Scan with any Android phone camera to download and test the working Flutter applications right away.
          </p>
        </div>

        {/* Custom Host input (for testing on LAN / remote judges) */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 40px auto',
          padding: '14px 20px',
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--ink-200)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-800)' }}>
            QR Code Target Base URL:
          </span>
          <input
            type="text"
            value={customHost}
            onChange={(e) => setCustomHost(e.target.value)}
            placeholder="e.g. http://192.168.1.15:5173 or https://your-domain.vercel.app"
            style={{
              flex: 1,
              minWidth: '220px',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid var(--ink-200)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              background: '#ffffff',
            }}
          />
          <button
            onClick={() => setCustomHost(window.location.origin)}
            className="btn btn-outline"
            style={{ padding: '6px 12px', fontSize: '12px' }}
            title="Reset to current browser URL"
          >
            <RefreshCw size={13} /> Reset
          </button>
        </div>

        {/* 2 Dual Cards: Customer App & Worker App */}
        <div className="grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
          {/* 1. Customer App Card */}
          <div className="glass-card" style={{ padding: '36px', borderTop: '5px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}>
                  <Smartphone size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800 }}>SahaKarya (Customer App)</h3>
                  <span className="badge badge-green" style={{ fontSize: '11px', marginTop: '4px' }}>
                    v1.0.0+1 • Production Ready
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--ink-600)', lineHeight: 1.6, marginBottom: '20px' }}>
              Instant service discovery, interactive CartoDB Voyager live tracking maps, transparent tariff billing, in-trip chat, and peer evaluation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>Package: <code style={{ fontFamily: 'var(--font-mono)' }}>com.coopgig.customer_app</code></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>Features: One-Tap Instant Demo Mode, Location Permissions Explainer</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <HardDrive size={16} color="var(--primary)" />
                <span>Built Size: ~192 MB (Debug APK with all assets)</span>
              </div>
            </div>

            {/* QR Code and Direct Download Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px',
              background: 'var(--bg-main)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--ink-200)',
              gap: '16px',
            }}>
              <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--ink-200)' }}>
                <QRCodeSVG value={customerApkUrl} size={110} level="M" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--ink-600)', marginBottom: '8px' }}>
                  Scan with phone camera or download directly:
                </div>
                <a
                  href="/downloads/sahakarya-customer-app.apk"
                  download="sahakarya-customer-app.apk"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '14px' }}
                >
                  <Download size={16} /> Direct Download APK
                </a>
              </div>
            </div>
          </div>

          {/* 2. Worker App Card */}
          <div className="glass-card" style={{ padding: '36px', borderTop: '5px solid var(--gold-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink-900)',
                }}>
                  <Smartphone size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800 }}>SahaKarya Partner (Worker App)</h3>
                  <span className="badge badge-gold" style={{ fontSize: '11px', marginTop: '4px' }}>
                    v1.0.0+1 • Production Ready
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--ink-600)', lineHeight: 1.6, marginBottom: '20px' }}>
              Real-time gig offer sheets with 45s timers, GPS availability toggle, 95% instant payout breakdowns, and 5% non-extractable welfare fund claims.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--gold-dark)" />
                <span>Package: <code style={{ fontFamily: 'var(--font-mono)' }}>com.sahakarya.worker_app</code></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--gold-dark)" />
                <span>Features: One-Tap Demo Partner Mode, Cooperative Charter Policies</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <HardDrive size={16} color="var(--gold-dark)" />
                <span>Built Size: ~188 MB (Debug APK with all assets)</span>
              </div>
            </div>

            {/* QR Code and Direct Download Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px',
              background: 'var(--bg-main)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--ink-200)',
              gap: '16px',
            }}>
              <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--ink-200)' }}>
                <QRCodeSVG value={workerApkUrl} size={110} level="M" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--ink-600)', marginBottom: '8px' }}>
                  Scan with phone camera or download directly:
                </div>
                <a
                  href="/downloads/sahakarya-partner-app.apk"
                  download="sahakarya-partner-app.apk"
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '14px' }}
                >
                  <Download size={16} /> Direct Download APK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions Pill */}
        <div style={{
          padding: '20px 24px',
          background: 'var(--primary-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(13, 82, 56, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <ShieldCheck size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '13.5px', color: 'var(--ink-800)', lineHeight: 1.5 }}>
            <strong>Android Installation Note for Evaluators:</strong> Since these are direct debug builds, Android may display <em>"Install unknown apps"</em>. Tap <strong>Settings → Allow from this source</strong> to complete installation and explore immediately using the instant <strong>"🚀 Explore in Demo Mode"</strong> button.
          </div>
        </div>
      </div>
    </section>
  );
};

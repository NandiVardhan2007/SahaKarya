import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Smartphone, CheckCircle2, ShieldCheck, HardDrive, RefreshCw, Copy, Check } from 'lucide-react';

export const ApkDownloads: React.FC = () => {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5174';
  const [customHost, setCustomHost] = useState(currentOrigin);
  const [copiedCustomer, setCopiedCustomer] = useState(false);
  const [copiedWorker, setCopiedWorker] = useState(false);

  const customerApkUrl = `${customHost}/downloads/sahakarya-customer-app.apk`;
  const workerApkUrl = `${customHost}/downloads/sahakarya-partner-app.apk`;

  const copyLink = (url: string, isCustomer: boolean) => {
    navigator.clipboard.writeText(url);
    if (isCustomer) {
      setCopiedCustomer(true);
      setTimeout(() => setCopiedCustomer(false), 2000);
    } else {
      setCopiedWorker(true);
      setTimeout(() => setCopiedWorker(false), 2000);
    }
  };

  return (
    <section id="downloads" style={{ padding: '85px 0', background: '#ffffff', borderTop: '1px solid var(--ink-200)' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">
            <Smartphone size={15} /> Evaluator Deployment
          </div>
          <h2 className="title">Direct APK Downloads & Instant QR Codes</h2>
          <p className="desc">
            Tested on Android 8.0 through Android 16 (API 36). Scan with your phone camera or click direct download.
          </p>
        </div>

        {/* Custom Host input (for testing on LAN / remote judges) */}
        <div style={{
          maxWidth: '720px',
          margin: '0 auto 40px auto',
          padding: '16px 22px',
          background: 'var(--bg-canvas)',
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--ink-200)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          boxShadow: 'var(--shadow-subtle)',
        }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--ink-800)' }}>
            QR Target Base URL:
          </span>
          <input
            type="text"
            value={customHost}
            onChange={(e) => setCustomHost(e.target.value)}
            placeholder="e.g. http://192.168.1.3:5174 or https://sahakarya.vercel.app"
            style={{
              flex: 1,
              minWidth: '240px',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1.5px solid var(--ink-200)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              background: '#ffffff',
              outline: 'none',
            }}
          />
          <button
            onClick={() => setCustomHost(window.location.origin)}
            className="btn btn-outline"
            style={{ padding: '8px 14px', fontSize: '12px' }}
            title="Reset to current browser URL"
          >
            <RefreshCw size={13} /> Reset URL
          </button>
        </div>

        {/* 2 Dual Cards: Customer App & Worker App */}
        <div className="grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
          {/* 1. Customer App Card */}
          <div className="card-luxe" style={{ padding: '36px', borderTop: '5px solid var(--forest-700)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--forest-800) 0%, var(--forest-600) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(10, 56, 38, 0.2)',
                }}>
                  <Smartphone size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '21px', fontWeight: 800 }}>SahaKarya (Customer App)</h3>
                  <span className="badge badge-green" style={{ fontSize: '11px', marginTop: '4px' }}>
                    v1.0.0+1 • Release Ready
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--ink-700)', lineHeight: 1.6, marginBottom: '22px' }}>
              Instant service discovery, interactive CartoDB Voyager live tracking maps, transparent tariff billing, in-trip encrypted chat, and peer evaluation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--forest-600)" />
                <span>Package: <code style={{ fontFamily: 'var(--font-mono)' }}>com.sahakarya.customer_app</code></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--forest-600)" />
                <span>Features: One-Tap Instant Demo Mode, Location Permissions Explainer</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <HardDrive size={16} color="var(--forest-600)" />
                <span>Built Size: ~61 MB (Optimized standalone release APK)</span>
              </div>
            </div>

            {/* QR Code and Direct Download Button */}
            <div className="qr-download-row" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
              background: 'var(--bg-canvas)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--ink-200)',
              gap: '18px',
            }}>
              <div style={{ background: '#ffffff', padding: '10px', borderRadius: '12px', border: '1px solid var(--ink-200)', boxShadow: 'var(--shadow-subtle)' }}>
                <QRCodeSVG value={customerApkUrl} size={110} level="M" />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/downloads/sahakarya-customer-app.apk"
                  download="sahakarya-customer-app.apk"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '13.5px' }}
                >
                  <Download size={16} /> Download APK
                </a>
                <button
                  onClick={() => copyLink(customerApkUrl, true)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '8px 14px', fontSize: '12px' }}
                >
                  {copiedCustomer ? <Check size={14} color="var(--forest-600)" /> : <Copy size={14} />}
                  <span>{copiedCustomer ? 'Copied Download Link' : 'Copy APK Link'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2. Worker App Card */}
          <div className="card-luxe" style={{ padding: '36px', borderTop: '5px solid var(--amber-500)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--amber-500) 0%, var(--amber-400) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink-950)',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)',
                }}>
                  <Smartphone size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '21px', fontWeight: 800 }}>SahaKarya Partner (Worker App)</h3>
                  <span className="badge badge-gold" style={{ fontSize: '11px', marginTop: '4px' }}>
                    v1.0.0+1 • Release Ready
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--ink-700)', lineHeight: 1.6, marginBottom: '22px' }}>
              Real-time gig offer sheets with 45s timers, GPS availability toggle, 95% instant payout breakdowns, and 5% non-extractable welfare fund claims.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--amber-600)" />
                <span>Package: <code style={{ fontFamily: 'var(--font-mono)' }}>com.sahakarya.worker_app</code></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="var(--amber-600)" />
                <span>Features: One-Tap Demo Partner Mode, Cooperative Charter Policies</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <HardDrive size={16} color="var(--amber-600)" />
                <span>Built Size: ~59 MB (Optimized standalone release APK)</span>
              </div>
            </div>

            {/* QR Code and Direct Download Button */}
            <div className="qr-download-row" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
              background: 'var(--bg-canvas)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--ink-200)',
              gap: '18px',
            }}>
              <div style={{ background: '#ffffff', padding: '10px', borderRadius: '12px', border: '1px solid var(--ink-200)', boxShadow: 'var(--shadow-subtle)' }}>
                <QRCodeSVG value={workerApkUrl} size={110} level="M" />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/downloads/sahakarya-partner-app.apk"
                  download="sahakarya-partner-app.apk"
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '13.5px' }}
                >
                  <Download size={16} /> Download APK
                </a>
                <button
                  onClick={() => copyLink(workerApkUrl, false)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '8px 14px', fontSize: '12px' }}
                >
                  {copiedWorker ? <Check size={14} color="var(--forest-600)" /> : <Copy size={14} />}
                  <span>{copiedWorker ? 'Copied Download Link' : 'Copy APK Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions Pill */}
        <div style={{
          padding: '22px 28px',
          background: 'var(--forest-50)',
          borderRadius: 'var(--r-md)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
        }}>
          <ShieldCheck size={32} color="var(--forest-700)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '14px', color: 'var(--forest-900)', lineHeight: 1.55 }}>
            <strong>Android Evaluator Notice:</strong> Since these are direct APK packages, Android may display <em>"Install unknown apps"</em>. Tap <strong>Settings → Allow from this source</strong> to complete installation and explore immediately using the instant <strong>"🚀 Explore in Demo Mode"</strong> button.
          </div>
        </div>
      </div>
    </section>
  );
};

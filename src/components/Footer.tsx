import { ExternalLink, ShieldCheck, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--ink-900)',
      color: '#ffffff',
      padding: '60px 0 30px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Col 1: Platform */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src="/logo.svg" alt="SahaKarya" style={{ width: '32px', height: '32px' }} />
              <span style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                SahaKarya (सहकार्य)
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '16px' }}>
              Smart India Hackathon 2026 Grand Finale submission for Problem Statement <strong>SIH26089</strong> under the <strong>Ministry of Cooperation (NCCT)</strong>.
            </p>
            <div className="badge badge-green" style={{ fontSize: '11.5px' }}>
              <ShieldCheck size={14} /> 100% Cooperative Ownership
            </div>
          </div>

          {/* Col 2: Repositories */}
          <div>
            <h4 style={{ fontSize: '15px', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
              GitHub Source Code
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <a
                href="https://github.com/Sahakaryaa/backend.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Code2 size={15} /> Backend API & ML Model <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/Sahakaryaa/customer-app.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Code2 size={15} /> Customer App (Flutter) <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/Sahakaryaa/worker-app.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Code2 size={15} /> Worker App (Flutter) <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/Sahakaryaa/admin-dashboard.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Code2 size={15} /> Admin Dashboard (React) <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Col 3: Key Tech */}
          <div>
            <h4 style={{ fontSize: '15px', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
              Architecture Tech Stack
            </h4>
            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              • Flutter 3.x (Dart / Riverpod / GoRouter)<br />
              • FastAPI + Motor + Beanie ODM (Python 3.11)<br />
              • MongoDB Atlas with 2dsphere Geo-matching<br />
              • Socket.IO Full-Duplex Real-Time Dispatch<br />
              • Scikit-Learn Multi-Seasonal Gradient Boosting ML<br />
              • React 18 + Vite + TypeScript
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12.5px',
          color: 'rgba(255, 255, 255, 0.5)',
        }}>
          <div>
            © 2026 SahaKarya Team • Built with dignity for Indian Labour Cooperative Federations.
          </div>
          <div>
            Theme: Smart Automation • Ministry of Cooperation (NCCT)
          </div>
        </div>
      </div>
    </footer>
  );
};

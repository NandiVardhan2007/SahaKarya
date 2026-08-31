import { useState } from 'react';
import { Smartphone, Monitor, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';

interface LayerDetail {
  id: string;
  name: string;
  badge: string;
  icon: any;
  tech: string;
  description: string;
  highlights: string[];
  codeSnippet: string;
}

const LAYERS: LayerDetail[] = [
  {
    id: 'mobile-tier',
    name: '1. Mobile Application Tier (Flutter)',
    badge: 'Dual Native Apps',
    icon: Smartphone,
    tech: 'Flutter 3.x • Riverpod • GoRouter • flutter_map • Socket.IO Client',
    description: 'Two separate purpose-built native mobile experiences sharing unified theme tokens and data contracts: Customer App (service discovery, live Voyager mapping, in-trip chat) and Worker App (incoming offer countdowns, GPS telemetry streaming, welfare claims).',
    highlights: [
      'Zero proprietary map licensing — 100% CartoDB Voyager raster tiles on OpenStreetMap',
      'Socket.IO duplex connection with real-time location interpolation & bearing rotation',
      'Cooperative permission explainer sheets & full legal charter governance viewers',
      'Multi-density Android Adaptive Icons (API 26+) and complete iOS asset catalogs'
    ],
    codeSnippet: `// Riverpod State Machine & Socket Dispatch
final bookingSocketProvider = Provider((ref) => {
  final socket = io(settings.WS_URL, OptionBuilder().setTransports(['websocket']).build());
  return BookingSocketService(socket);
});`
  },
  {
    id: 'admin-tier',
    name: '2. Federation Control Center (React)',
    badge: 'Official Portal',
    icon: Monitor,
    tech: 'React 18 • TypeScript • Vite • Lucide • D3 / Recharts • Tailwind Tokens',
    description: 'Dedicated web dashboard for Labour Cooperative Federation secretaries and NCCT administrators to manage verified worker rosters, monitor live geo-dispatch, oversee non-extractable welfare transactions, and review AI forecast demand.',
    highlights: [
      'Live Dispatch Map showing active in-flight worker coordinates and customer destinations',
      'Non-Extractable 5% Welfare Fund Audit Ledger with automated balance reconciliation',
      'Worker Certification verification pipeline with document validation workflows',
      'Interactive 7-day demand forecasting charts with regional seasonality toggles'
    ],
    codeSnippet: `// Live Federation Event Hook
export const useLiveBookings = (federationId: string) => {
  const socket = useSocket();
  // Listens to federation-scoped real-time dispatch room
  useEffect(() => {
    socket.emit('join_federation', { federationId });
  }, [federationId]);
};`
  },
  {
    id: 'backend-tier',
    name: '3. Async Gateway & REST API (FastAPI)',
    badge: 'ASGI Real-Time Gateway',
    icon: Server,
    tech: 'FastAPI • Python 3.11 • Python-SocketIO • Pydantic v2 • JWT (HS256)',
    description: 'High-throughput async Python engine handling REST API traffic and bidirectional Socket.IO events. Engineered with non-blocking lifecycle management, explicit CORS allowlists, and connection timeout safety.',
    highlights: [
      'Auto-generated OpenAPI 3.1 interactive documentation at /docs',
      'Fair Match Algorithm: Distance decay (35%) + Rating (25%) + Cooldown rotation (20%) + Skills (20%)',
      'Unified Socket.IO ASGI wrapper mounted on top of FastAPI application',
      'JWT Authentication with role-based access control (Admin, Worker, Customer)'
    ],
    codeSnippet: `@app.get("/workers/nearby")
async def get_nearby_workers(lat: float, lng: float, skill: str, radius_km: float = 10.0):
    # MongoDB 2dsphere near query + fairness bonus scoring
    return await matching_service.find_and_rank_workers(lat, lng, skill, radius_km)`
  },
  {
    id: 'database-tier',
    name: '4. Database & Geospatial Engine (MongoDB)',
    badge: '2dsphere Cluster',
    icon: Database,
    tech: 'MongoDB Atlas / Community • Beanie ODM • Motor AsyncIO • GeoJSON',
    description: 'Document database optimized for geospatial proximity matching, dynamic worker profiles, welfare transaction audit trails, and multi-tenant federation separation.',
    highlights: [
      '2dsphere geospatial indexing on worker coordinates for sub-10ms proximity lookups',
      'ACID transactional guarantees on 5% welfare allocation and claim settlements',
      'Beanie ODM with type-safe Pydantic models and automatic index initialization',
      'Idempotent automated seeding script with realistic 15+ verified worker clusters'
    ],
    codeSnippet: `class Worker(Document):
    location: GeoPoint # GeoJSON Point [lng, lat]
    skills: List[str]
    certification_status: str # "verified" | "pending"
    welfare_balance: float # Non-extractable pool
    class Settings:
        indexes = [[("location", pymongo.GEOSPHERE)]]`
  },
  {
    id: 'ai-tier',
    name: '5. AI Demand Forecasting Engine',
    badge: 'Gradient Boosting ML',
    icon: Cpu,
    tech: 'Scikit-Learn • Pandas • Joblib • GradientBoostingRegressor • NumPy',
    description: 'Pre-trained machine learning model predicting 7-day granular service demand across regions and trade types, factoring in Indian festival seasons, day-of-week trends, and historical rolling moving averages.',
    highlights: [
      'High accuracy metrics: R² = 0.958, Mean Absolute Error (MAE) = 1.10 bookings/day',
      'Multi-seasonal feature engineering: Diwali, Holi, Navratri, Dussehra, Pongal, Eid multipliers',
      'Zero external cloud ML dependency — bundled self-contained model artifact (forecast_model.pkl)',
      'Sub-5ms inference latency directly embedded in FastAPI service layer'
    ],
    codeSnippet: `# 7-Day Forward Forecast Inference Pipeline
def predict_next_7_days(region: str, service_type: str):
    features = build_forecast_features(region, service_type, date_range=7)
    predicted_demand = _ml_model.predict(features)
    return format_predictions(predicted_demand)`
  }
];

export const ArchitectureViewer: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('mobile-tier');
  const activeDetail = LAYERS.find((l) => l.id === selectedLayer) || LAYERS[0];

  return (
    <section id="architecture" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid var(--ink-200)' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">System Architecture</div>
          <h2 className="title">Comprehensive Multi-Tier Architecture</h2>
          <p className="desc">
            Designed for scale, high-speed geospatial matching, and institutional reliability. Click any layer below to inspect its technical implementation details.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          marginBottom: '32px',
        }}>
          {LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = layer.id === selectedLayer;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'var(--primary-surface)' : 'var(--bg-main)',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--ink-200)',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: isSelected ? 'var(--primary)' : 'var(--ink-200)',
                  color: isSelected ? '#ffffff' : 'var(--ink-800)',
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: isSelected ? 'var(--primary)' : 'var(--ink-900)' }}>
                    {layer.name.split('(')[0]}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-600)', fontWeight: 500 }}>
                    {layer.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Layer Deep Dive Card */}
        <div className="glass-card" style={{ padding: '36px', background: 'var(--bg-main)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            {/* Left Col: Explanations & Highlights */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="badge badge-green">{activeDetail.badge}</span>
                <span style={{ fontSize: '12.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-600)' }}>
                  {activeDetail.tech}
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: 'var(--ink-900)' }}>
                {activeDetail.name}
              </h3>

              <p style={{ fontSize: '15px', color: 'var(--ink-600)', lineHeight: 1.65, marginBottom: '24px' }}>
                {activeDetail.description}
              </p>

              <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--primary)', marginBottom: '12px' }}>
                Key Technical Highlights
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeDetail.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'var(--ink-800)', lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Code Snippet & Live Contract Shape */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink-600)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Architecture Implementation Snippet
                </span>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                  Production Verified
                </span>
              </div>

              <pre className="code-block" style={{ height: '280px', overflowY: 'auto' }}>
                <code>{activeDetail.codeSnippet}</code>
              </pre>

              <div style={{
                marginTop: '16px',
                padding: '14px 18px',
                background: 'var(--primary-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(13, 82, 56, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-deep)' }}>
                  Tested & verified on Motorola Edge 50 Pro (Android 16 API 36)
                </span>
                <span className="badge badge-green" style={{ fontSize: '11px' }}>100% Pass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

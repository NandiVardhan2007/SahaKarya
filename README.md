# SahaKarya (सहकार्य) — SIH 2026 Showcase & Evaluator Hub

Interactive web presentation hub and evaluator testbed for **SahaKarya** (Problem Statement ID: 26089) — India's First Fair, Worker-Owned Hyperlocal Gig Cooperative Platform.

## 🚀 Live Features
- **Direct APK Downloads & QR Codes:** Instant scanning and download of standalone release APKs for both the **Customer App** (`com.sahakarya.customer_app`) and the **Worker App** (`com.sahakarya.worker_app`).
- **Interactive End-to-End Workflow Simulator:** 8-stage interactive simulator visualizing the complete booking-to-payout lifecycle with 95% instant payout breakdowns and 5% welfare fund allocation.
- **AI Forecasting & Fair Dispatch Simulator:** Interactive visualization of the embedded Random Forest ML model predicting localized service demand.
- **System Architecture & Data Topology Map:** Full-stack topology showcasing FastAPI ASGI, PostgreSQL with PostGIS geo-indexing, WebSocket pub/sub brokers, and zero-commission escrow mechanics.
- **Evaluator Slide Deck Download:** Direct download of the complete SIH 2026 PPT presentation deck.

## 📱 Mobile Applications (Flutter 3.47 / Dart 3.13)
- **Customer App:** Real-time discovery, CartoDB Voyager live tracking maps, transparent tariff cards, in-trip messaging, and evaluation ratings.
- **Worker Partner App:** Real-time gig offer sheets with 45s timers, GPS availability toggle, 95% instant payout breakdown, and 5% welfare fund claims.

## 🛠️ Build & Run

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle (with release APKs copied to dist/downloads/)
npm run build
```

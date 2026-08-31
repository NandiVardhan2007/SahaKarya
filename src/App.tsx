import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IdeaDeepDive } from './components/IdeaDeepDive';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { WorkflowSimulator } from './components/WorkflowSimulator';
import { AIForecastingSection } from './components/AIForecastingSection';
import { ApkDownloads } from './components/ApkDownloads';
import { QrModal } from './components/QrModal';
import { Footer } from './components/Footer';

export function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenQrModal={() => setIsQrModalOpen(true)} />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenQrModal={() => setIsQrModalOpen(true)} />
        <IdeaDeepDive />
        <ArchitectureViewer />
        <WorkflowSimulator />
        <AIForecastingSection />
        <ApkDownloads />
      </main>

      <Footer />

      <QrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}

export default App;

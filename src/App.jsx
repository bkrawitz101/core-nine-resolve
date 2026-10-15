import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BusinessDoor from './components/BusinessDoor';
import SageDoor from './components/SageDoor';
import Footer from './components/Footer';
import DiagnosticModal from './components/DiagnosticModal';
import SageModals from './components/SageModals';

export default function App() {
  const [currentDoor, setCurrentDoor] = useState('business'); // 'business' | 'sage'
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSageConsultOpen, setIsSageConsultOpen] = useState(false);
  const [isSageGroupOpen, setIsSageGroupOpen] = useState(false);

  // Sync data-theme attribute on document element for dual-theme CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentDoor);
    
    // Smoothly scroll to top when switching doors
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDoor]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      currentDoor === 'business' ? 'bg-[#F8FAFC]' : 'bg-[#FBF8F3]'
    }`}>
      {/* Global Dual-Door Header */}
      <Header
        currentDoor={currentDoor}
        setCurrentDoor={setCurrentDoor}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenSageModal={() => setIsSageConsultOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentDoor === 'business' ? (
          <BusinessDoor onOpenAuditModal={() => setIsAuditModalOpen(true)} />
        ) : (
          <SageDoor
            onOpenConsultationModal={() => setIsSageConsultOpen(true)}
            onOpenGroupModal={() => setIsSageGroupOpen(true)}
          />
        )}
      </main>

      {/* Global Architectural Footer */}
      <Footer
        currentDoor={currentDoor}
        setCurrentDoor={setCurrentDoor}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenSageModal={() => setIsSageConsultOpen(true)}
      />

      {/* Modal Dialogs */}
      <DiagnosticModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <SageModals
        isConsultationOpen={isSageConsultOpen}
        isGroupOpen={isSageGroupOpen}
        onCloseConsultation={() => setIsSageConsultOpen(false)}
        onCloseGroup={() => setIsSageGroupOpen(false)}
      />
    </div>
  );
}

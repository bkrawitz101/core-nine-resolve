import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck, Sparkles, Building2, HeartHandshake } from 'lucide-react';

export default function Header({ currentDoor, setCurrentDoor, onOpenAuditModal, onOpenSageModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBusiness = currentDoor === 'business';

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Utility Bar - The Dual Door Switcher */}
      <div className="h-9 bg-slate-950 text-slate-400 text-xs font-mono border-b border-slate-800">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-3 overflow-x-auto py-1">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider hidden sm:inline mr-1">Door:</span>
            
            <button
              onClick={() => setCurrentDoor('business')}
              className={`px-2.5 py-0.5 rounded transition-all text-[11px] sm:text-xs flex items-center gap-1.5 ${
                isBusiness
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>CORE9 RESOLVE™ // BUSINESS</span>
            </button>

            <button
              onClick={() => setCurrentDoor('sage')}
              className={`px-2.5 py-0.5 rounded transition-all text-[11px] sm:text-xs flex items-center gap-1.5 ${
                !isBusiness
                  ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              <HeartHandshake className="w-3 h-3 text-amber-400" />
              <span>SAGE by CORE9 RESOLVE™ // PERSONAL &amp; PLAYGROUND</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              9-Function Architecture
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">One Skeleton, Two Skins</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`h-20 border-b backdrop-blur-md transition-colors duration-300 ${
          isBusiness
            ? 'bg-white/95 border-slate-200 text-slate-900'
            : 'bg-[#FBF8F3]/95 border-[#E7E0D6] text-stone-900'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-left group"
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm ${
                  isBusiness ? 'bg-slate-950 text-amber-400 border border-slate-800' : 'bg-[#1C2826] text-amber-300'
                }`}>
                  9
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className={`text-lg sm:text-xl font-bold tracking-tight ${
                      isBusiness ? 'font-sans text-slate-900' : 'font-serif text-stone-900 italic text-2xl'
                    }`}>
                      {isBusiness ? 'CORE9 RESOLVE' : 'SAGE'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">TM</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    {isBusiness ? 'Living-System Architecture' : 'by CORE9 RESOLVE™'}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {isBusiness ? (
              <>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  Diagnostic Methodology
                </button>
                <button
                  onClick={() => scrollToSection('functional-engine')}
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  The Functional Engine
                </button>
                <button
                  onClick={() => scrollToSection('systemic-advantage')}
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  Our Systemic Advantage
                </button>
                <button
                  onClick={() => scrollToSection('engagement-pathways')}
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  Engagement Pathways
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => scrollToSection('sage-playground')}
                  className="text-stone-700 hover:text-lime-900 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  The Virtual Playground
                </button>
                <button
                  onClick={() => scrollToSection('sage-decks')}
                  className="text-stone-700 hover:text-lime-900 transition-colors"
                >
                  Metaphorical Decks
                </button>
                <button
                  onClick={() => scrollToSection('sage-dynamics')}
                  className="text-stone-700 hover:text-lime-900 transition-colors"
                >
                  Personal &amp; Relational Consultations
                </button>
                <button
                  onClick={() => scrollToSection('sage-roles')}
                  className="text-stone-700 hover:text-lime-900 transition-colors"
                >
                  Svetlana &amp; Alexandra
                </button>
              </>
            )}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            {isBusiness ? (
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Diagnostic Audit</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>
            ) : (
              <a
                href="#sage-decks"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sage-decks');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#3F6212] hover:bg-[#314f0d] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <span>Explore Decks on BAWA</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-6 py-6 space-y-4 shadow-xl ${
            isBusiness ? 'bg-white border-slate-200' : 'bg-[#FBF8F3] border-[#E7E0D6]'
          }`}>
            <div className="flex flex-col space-y-3 font-medium text-base">
              {isBusiness ? (
                <>
                  <button
                    onClick={() => scrollToSection('methodology')}
                    className="text-left py-2 text-slate-700 hover:text-blue-700 border-b border-slate-100"
                  >
                    Diagnostic Methodology
                  </button>
                  <button
                    onClick={() => scrollToSection('functional-engine')}
                    className="text-left py-2 text-slate-700 hover:text-blue-700 border-b border-slate-100"
                  >
                    The Functional Engine
                  </button>
                  <button
                    onClick={() => scrollToSection('systemic-advantage')}
                    className="text-left py-2 text-slate-700 hover:text-blue-700 border-b border-slate-100"
                  >
                    Our Systemic Advantage
                  </button>
                  <button
                    onClick={() => scrollToSection('engagement-pathways')}
                    className="text-left py-2 text-slate-700 hover:text-blue-700"
                  >
                    Engagement Pathways
                  </button>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenAuditModal();
                      }}
                      className="w-full bg-slate-900 text-white py-3 rounded-md font-medium text-center flex items-center justify-center gap-2"
                    >
                      <span>Request a Diagnostic Audit</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scrollToSection('sage-playground')}
                    className="text-left py-2 text-stone-800 hover:text-lime-900 border-b border-stone-200/50"
                  >
                    The Virtual Playground (BAWA)
                  </button>
                  <button
                    onClick={() => scrollToSection('sage-decks')}
                    className="text-left py-2 text-stone-800 hover:text-lime-900 border-b border-stone-200/50"
                  >
                    Metaphorical Decks
                  </button>
                  <button
                    onClick={() => scrollToSection('sage-dynamics')}
                    className="text-left py-2 text-stone-800 hover:text-lime-900 border-b border-stone-200/50"
                  >
                    Personal &amp; Relational Consultations
                  </button>
                  <button
                    onClick={() => scrollToSection('sage-roles')}
                    className="text-left py-2 text-stone-800 hover:text-lime-900"
                  >
                    Svetlana &amp; Alexandra
                  </button>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenSageModal();
                      }}
                      className="w-full bg-[#3F6212] text-white py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2"
                    >
                      <span>Book Personal Consultation</span>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import React from 'react';
import { ArrowUp, Building2, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Footer({ currentDoor, setCurrentDoor, onOpenAuditModal, onOpenSageModal }) {
  const isBusiness = currentDoor === 'business';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isBusiness
        ? 'bg-slate-950 text-slate-400 border-slate-800'
        : 'bg-[#1C2826] text-stone-300 border-emerald-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700 text-amber-400 font-mono font-bold flex items-center justify-center text-sm">
                9
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                CORE9 RESOLVE<span className="text-xs font-mono text-slate-400 ml-0.5">TM</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Proprietary living-system diagnostics, whole-system organizational blueprints, and executive guidance. Aligning human talent, operational roles, and commercial priorities into sustainable results.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  setCurrentDoor('business');
                  scrollToTop();
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono transition flex items-center gap-1.5 ${
                  isBusiness ? 'bg-blue-900/60 text-blue-300 border border-blue-500/50' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Business Door</span>
              </button>

              <button
                onClick={() => {
                  setCurrentDoor('sage');
                  scrollToTop();
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono transition flex items-center gap-1.5 ${
                  !isBusiness ? 'bg-amber-900/50 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                <span>SAGE Door</span>
              </button>
            </div>
          </div>

          {/* Quick Links: Business */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-semibold block">
              CORE9 RESOLVE™ Business
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#methodology" className="hover:text-blue-400 transition">
                  Diagnostic Methodology
                </a>
              </li>
              <li>
                <a href="#functional-engine" className="hover:text-blue-400 transition">
                  The Functional Engine (CORE • NINE • RESOLVE)
                </a>
              </li>
              <li>
                <a href="#systemic-advantage" className="hover:text-blue-400 transition">
                  Our Systemic Advantage
                </a>
              </li>
              <li>
                <a href="#engagement-pathways" className="hover:text-blue-400 transition">
                  Three-Step Advisory Pathway
                </a>
              </li>
              <li>
                <button onClick={onOpenAuditModal} className="text-amber-400 hover:underline text-left">
                  Request Diagnostic Audit →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: SAGE */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold block">
              SAGE by CORE9 RESOLVE™
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="https://bawa.cards" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition">
                  The Virtual Playground on BAWA ↗
                </a>
              </li>
              <li>
                <a href="#sage-decks" className="hover:text-lime-300 transition">
                  Metaphorical Decks (Card Fan)
                </a>
              </li>
              <li>
                <button onClick={onOpenSageModal} className="hover:text-lime-300 transition text-left">
                  Personal Consultations (Svetlana Pritzker)
                </button>
              </li>
              <li>
                <a href="#sage-roles" className="hover:text-lime-300 transition">
                  Creative Workshops (Svetlana &amp; Alexandra)
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              Platform Integration: Digital Decks supported via BAWA Virtual World
            </div>
          </div>
        </div>

        {/* Governance & Scope Disclosures */}
        <div className="py-8 border-b border-slate-800/80 text-xs text-slate-500 space-y-3 leading-relaxed">
          <div className="flex items-start gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong>Advisory &amp; Scope Boundary:</strong> CORE9 RESOLVE™ is a specialized analytical and strategic advisory practice. We diagnose organizational friction, architect functional blueprints, and advise leadership. Client internal teams and human resources own and execute the implementation. We do not provide contract staffing or general agency replacement.
            </div>
          </div>
          <div>
            <strong>The Guild Strategic Policy:</strong> The Guild represents an inspiring long-term vision for an extended practitioner ecosystem. Current delivery is managed directly by the core advisory partners: Svetlana Pritzker, Vasili, Brian, and Alexandra.
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} CORE9 RESOLVE™. All Rights Reserved. Protected Methodology.
          </div>

          <div className="flex items-center gap-6">
            <span>Architecture: "One Skeleton, Two Skins"</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

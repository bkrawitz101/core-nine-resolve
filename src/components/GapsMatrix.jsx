import React, { useState } from 'react';
import { GAPS_MATRIX } from '../data/contentData';
import { AlertCircle, HelpCircle, ArrowRight, ShieldAlert, ZapOff } from 'lucide-react';

export default function GapsMatrix() {
  const [selectedGap, setSelectedGap] = useState(GAPS_MATRIX[0]);

  return (
    <div className="w-full bg-slate-950 text-white rounded-xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-red-400 uppercase tracking-widest">[ COMPONENT 03 // DIAGNOSTIC MATRIX ]</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-xs text-slate-400">Replaces Abstract Energy Bleed Terminology</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          The Functional Gaps &amp; Performance Loss Matrix
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
          In a business ecosystem, organizational capacity is the collective ability to execute, innovate, and generate profit. It is generated when leadership, human talent, financial resources, operational processes, and structures work in full functional alignment.
        </p>
      </div>

      {/* Grid: Interactive Rows on Left, Detailed Diagnostic Inquiry Side Panel on Right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The 4 Interactive Rows */}
        <div className="lg:col-span-7 space-y-3">
          {GAPS_MATRIX.map((gap) => {
            const isSelected = selectedGap.id === gap.id;

            return (
              <div
                key={gap.id}
                onClick={() => setSelectedGap(gap)}
                onMouseEnter={() => setSelectedGap(gap)}
                className={`p-4 sm:p-5 rounded-lg border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-slate-900 border-red-500/70 shadow-lg shadow-red-950/20 translate-x-1'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-500 to-amber-500 rounded-l" />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-slate-500 font-semibold">{gap.id} //</span>
                      <h4 className={`text-base sm:text-lg font-bold tracking-tight ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}>
                        {gap.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                      <span className="text-slate-500 font-mono">Manifestation: </span>
                      {gap.manifestation}
                    </p>
                  </div>

                  <span className={`p-1.5 rounded text-xs font-mono transition-colors shrink-0 ${
                    isSelected ? 'bg-red-500/20 text-red-300' : 'bg-slate-800 text-slate-500'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {gap.stat}
                  </span>
                  <span>Click to dissect</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Deep-Inspection Panel */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-lg p-6 shadow-xl sticky top-28">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="font-mono text-xs text-red-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              SYSTEM DEFICIENCY STATE {selectedGap.id}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-900/50">
              HIGH IMPACT
            </span>
          </div>

          <h4 className="text-xl font-bold text-white mb-2">{selectedGap.title}</h4>

          <div className="space-y-4 text-sm mt-4">
            <div className="bg-slate-950/80 border border-slate-800/80 rounded p-3.5">
              <span className="font-mono text-xs text-slate-400 block mb-1 uppercase tracking-wider">
                Operational Manifestation:
              </span>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {selectedGap.manifestation}
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 rounded p-3.5">
              <span className="font-mono text-xs text-amber-400/90 block mb-1 uppercase tracking-wider">
                Strategic Business Consequence:
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedGap.consequence}
              </p>
            </div>

            <div className="bg-blue-950/30 border border-blue-900/40 rounded p-3.5">
              <span className="font-mono text-xs text-blue-400 flex items-center gap-1 mb-1 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                CORE9 Diagnostic Inquiry:
              </span>
              <p className="text-blue-100 text-xs sm:text-sm font-medium italic leading-relaxed">
                "{selectedGap.inquiry}"
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
            <span>Methodology: Living-System Diagnosis</span>
            <span className="text-emerald-400">Restorable via Blueprint</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { NINE_FUNCTIONS } from '../data/contentData';
import { ShieldCheck, ArrowUpRight, Check, Sparkles } from 'lucide-react';

export default function NineBentoGrid() {
  const [selectedFunction, setSelectedFunction] = useState(NINE_FUNCTIONS[8]); // Function 09 default

  return (
    <div className="w-full">
      {/* Section Introduction */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-blue-700 uppercase tracking-widest">[ 9-PART ARCHITECTURE // THE BENTO MATRIX ]</span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-xs text-slate-500">Living Intelligences</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          The Nine Functional Intelligences of the Living Enterprise
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Every sustainable organization requires the active, synchronized presence of all nine vital functions. When any function is missing, mistimed, or misallocated, systemic friction emerges.
        </p>
      </div>

      {/* 3x3 Bento Grid with Exposed 1px Structural Hairlines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        {NINE_FUNCTIONS.map((fn) => {
          const isGuardian = fn.isGuardian;
          const isSelected = selectedFunction.code === fn.code;

          return (
            <div
              key={fn.code}
              onClick={() => setSelectedFunction(fn)}
              className={`p-6 sm:p-8 cursor-pointer transition-all relative flex flex-col justify-between ${
                isGuardian
                  ? 'bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 border-t-2 border-amber-500'
                  : 'bg-white hover:bg-slate-50'
              } ${isSelected ? 'ring-2 ring-inset ring-blue-700/60 z-10' : ''}`}
            >
              <div>
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded font-medium ${
                    isGuardian
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {isGuardian ? '[ FUNCTION 09 // GUARDIAN OF WELL-BEING ]' : `FUNCTION ${fn.number}`}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {fn.code}
                  </span>
                </div>

                {/* Title & Role */}
                <h4 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                  isGuardian ? 'text-amber-950' : 'text-slate-900'
                }`}>
                  {fn.title}
                </h4>
                <p className="font-mono text-xs text-blue-700 uppercase tracking-wide mb-3">
                  {fn.role}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fn.desc}
                </p>
              </div>

              {/* Bottom Context Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="truncate max-w-[200px] text-[11px] text-slate-500">
                  {fn.businessContext}
                </span>
                <span className={`text-xs ${isSelected ? 'text-blue-700 font-bold' : 'text-slate-400'}`}>
                  {isSelected ? 'ACTIVE' : 'INSPECT'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Function Diagnostic Deep-Dive */}
      <div className="mt-6 bg-slate-900 text-white rounded-lg p-5 sm:p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE AUDIT FOCUS // {selectedFunction.code} — {selectedFunction.title.toUpperCase()}</span>
          </div>
          <p className="text-sm text-slate-300">
            <strong>Systemic Diagnostic Question:</strong> Is this function assigned to individuals whose natural working style naturally excels in this capacity, or is it an unowned operational gap?
          </p>
        </div>
        <div className="shrink-0 font-mono text-xs px-3 py-1.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
          Core Diagnostic Lens: Verified
        </div>
      </div>
    </div>
  );
}

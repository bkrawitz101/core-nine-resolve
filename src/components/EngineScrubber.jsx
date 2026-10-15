import React, { useState } from 'react';
import { ENGINE_STAGES } from '../data/contentData';
import { ArrowRight, ShieldCheck, ChevronRight, Layers, Cpu, Sparkles } from 'lucide-react';

export default function EngineScrubber() {
  const [activeStageKey, setActiveStageKey] = useState('CORE'); // 'CORE' | 'NINE' | 'RESOLVE'
  const currentStage = ENGINE_STAGES[activeStageKey];
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);

  const currentLetter = currentStage.letters[activeLetterIndex] || currentStage.letters[0];

  const handleStageChange = (key) => {
    setActiveStageKey(key);
    setActiveLetterIndex(0);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
      {/* Structural Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-blue-700 uppercase tracking-widest">[ COMPONENT 04 // THE FUNCTIONAL ENGINE ]</span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-xs text-slate-500">Methodological Operating Sequence</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          The Functional Engine: CORE • NINE • RESOLVE™
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          CORE9 RESOLVE™ is a functional methodology, not simply a name. <strong>CORE</strong> establishes the foundational process, <strong>NINE</strong> connects and elevates the system's vital functions, and <strong>RESOLVE</strong> guides purposeful transformation.
        </p>
      </div>

      {/* 3-Stage Segmented Control Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-lg border border-slate-200 mb-8">
        {Object.keys(ENGINE_STAGES).map((key, idx) => {
          const stage = ENGINE_STAGES[key];
          const isSelected = activeStageKey === key;
          const stageNumbers = ['STAGE 01', 'STAGE 02', 'STAGE 03'];

          return (
            <button
              key={key}
              onClick={() => handleStageChange(key)}
              className={`p-3.5 rounded-md text-left transition-all relative ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono tracking-widest uppercase ${
                  isSelected ? 'text-amber-400' : 'text-slate-500'
                }`}>
                  {stageNumbers[idx]}
                </span>
                <span className={`text-xs font-mono font-semibold ${
                  isSelected ? 'text-blue-300' : 'text-slate-500'
                }`}>
                  {key === 'NINE' ? '4 + Guardian' : `${stage.letters.length} Vectors`}
                </span>
              </div>
              <div className="text-base font-bold tracking-tight flex items-center gap-1.5">
                <span>{stage.name}</span>
                <span className={`text-xs font-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  — {stage.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Progress Vector Bar Across The Stage */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
          <span>VECTOR CADENCE: {activeStageKey}</span>
          <span className="text-blue-700 font-semibold">
            STEP {activeLetterIndex + 1} OF {currentStage.letters.length}: {currentLetter.word.toUpperCase()}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
          {currentStage.letters.map((l, i) => (
            <div
              key={i}
              className={`h-full transition-all duration-300 flex-1 mx-0.5 rounded-full ${
                i <= activeLetterIndex ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Letter Selector Pills */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
        {currentStage.letters.map((item, index) => {
          const isCurrent = activeLetterIndex === index;

          return (
            <button
              key={item.char + index}
              onClick={() => setActiveLetterIndex(index)}
              className={`px-4 py-2.5 rounded-md border text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                isCurrent
                  ? 'bg-blue-700 text-white border-blue-700 shadow-sm ring-2 ring-blue-700/20'
                  : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              <span className={`text-base ${isCurrent ? 'text-amber-300' : 'text-blue-700'}`}>
                {item.char}
              </span>
              <span className="text-xs font-normal">
                — {item.word}
              </span>
            </button>
          );
        })}
      </div>

      {/* Letter-by-Letter Active Detail Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 font-mono text-2xl font-bold flex items-center justify-center shadow-inner">
              {currentLetter.char}
            </span>
            <div>
              <span className="font-mono text-xs text-blue-700 uppercase tracking-widest font-semibold block">
                {activeStageKey} VECTOR {activeLetterIndex + 1}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentLetter.word}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Click letter pills to scrub sequence</span>
          </div>
        </div>

        {/* Action Directive */}
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
            Core Action Directive:
          </span>
          <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
            "{currentLetter.action}"
          </p>
        </div>

        {/* Detailed Operational Definition */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
            Operational Blueprint Context:
          </span>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {currentLetter.details}
          </p>
        </div>

        {/* NINE Stage Special Callout: Guardian of Well-Being */}
        {activeStageKey === 'NINE' && (
          <div className="mt-6 p-4 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900">
              <span className="font-mono font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                The Significance of Nine (Guardian of Well-Being):
              </span>
              Nine is central to the methodology, representing the ninth intelligence—the <strong>Guardian of Well-Being</strong>. Its essential function is safeguarding systemic integrity, bringing processes to fruitful completion, and establishing the most direct path toward operational alignment and material results.
            </div>
          </div>
        )}

        {/* Next Vector Button */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => {
              if (activeLetterIndex < currentStage.letters.length - 1) {
                setActiveLetterIndex(activeLetterIndex + 1);
              } else {
                const stages = ['CORE', 'NINE', 'RESOLVE'];
                const nextStageIndex = (stages.indexOf(activeStageKey) + 1) % stages.length;
                handleStageChange(stages[nextStageIndex]);
              }
            }}
            className="text-xs font-mono text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1.5"
          >
            <span>Advance to next operational vector</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

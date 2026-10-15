import React from 'react';
import { TEAM_MEMBERS } from '../data/contentData';
import { ShieldCheck, Eye, Users, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function SystemicAdvantage() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-blue-700 uppercase tracking-widest">[ PAGE 03 // OUR SYSTEMIC ADVANTAGE ]</span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-xs text-slate-500">The Delivery Model</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          A Complete Living System — Aligned for Performance
        </h3>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          CORE9 RESOLVE™ delivers proprietary, in-depth systemic diagnostics that reveal how people, functions, and processes can work together as one coherent, optimized, and profitable organization. We provide the analytical clarity and strategic guidance; your team brings the transformation to life.
        </p>
      </div>

      {/* Comparison Grid: Conventional Consulting vs. The Systemic Advantage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Card 1: The Diagnostic Reality */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>The Conventional Approach</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3">
            The Diagnostic Reality of Siloed Consulting
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Most business consultants address isolated symptoms—revising marketing copy, swapping software tools, or modifying sales targets. When systemic dysfunction remains unaddressed, these isolated adjustments fail to take root.
          </p>
          <ul className="space-y-2.5 text-xs text-slate-600 border-t border-slate-200 pt-4">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Treating departmental silos as independent islands</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Recommending new software to fix fundamental human misalignment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Imposing generic corporate playbooks that ignore internal living dynamics</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Our Systemic Advantage */}
        <div className="bg-slate-900 text-white border border-slate-800 rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Our Systemic Advantage</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">
            Whole-System Bird's-Eye Perspective
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Svetlana Pritzker and Vasili apply a comprehensive, bird’s-eye perspective to evaluate your entire enterprise ecosystem. We do not replace your team, nor do we perform everyone’s job. Our value lies in showing you how every role, department, and process can integrate to achieve outcomes that no single part could accomplish on its own.
          </p>
          <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full diagnostic visibility into hidden friction points across all 9 functions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Matching human talent and natural working styles to exact operational seats</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strategic advisory for executive and HR leaders to empower internal team execution</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Advisory & HR Enablement Callout */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 mb-16 shadow-sm">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-700 font-semibold block mb-2">
            ORGANIZATIONAL ARCHITECTURE &amp; TALENT ENABLEMENT
          </span>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Advisory &amp; HR Enablement: Auditing Talent Configurations
          </h4>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We advise executive leadership and support internal HR leaders in auditing talent configurations, uncovering hidden competencies, identifying mission-critical gaps, and structuring high-precision hiring specifications. When roles match innate competencies, friction evaporates and execution accelerates.
          </p>
        </div>
      </div>

      {/* The Core Delivery System: Team Profiles */}
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="font-mono text-xs text-blue-700 uppercase tracking-widest block mb-1">
              THE CORE DELIVERY SYSTEM
            </span>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Leadership &amp; Systemic Architecture
            </h4>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-slate-500">
            Unified Delivery Governance
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${member.color} text-white font-mono font-bold text-base flex items-center justify-center shadow-sm`}>
                      {member.initials}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900">{member.name}</h5>
                      <span className="text-xs font-mono text-blue-700 block">{member.role}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Functional Domain:
                  </span>
                  <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                    {member.focus}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{member.door}</span>
                <span className="text-blue-700 font-medium">Core Leadership</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

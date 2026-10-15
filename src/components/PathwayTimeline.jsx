import React from 'react';
import { ADVISORY_STEPS, ENGAGEMENT_PACKAGES } from '../data/contentData';
import { ShieldCheck, ArrowRight, CheckCircle2, Calendar, FileText, ArrowUpRight } from 'lucide-react';

export default function PathwayTimeline({ onOpenAuditModal }) {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-blue-700 uppercase tracking-widest">[ COMPONENT 05 // ENGAGEMENT PATHWAYS ]</span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-xs text-slate-500">Advisory Pipeline</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          The Three-Step Advisory Pathway
        </h3>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          CORE9 RESOLVE™ operates as a specialized analytical and strategic advisory practice. We provide high-fidelity systemic diagnostics and structural blueprints; your internal team brings the transformation to life.
        </p>
      </div>

      {/* 3-Step Pipeline Cards with Directional Bridges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-10">
        {ADVISORY_STEPS.map((step, index) => {
          return (
            <div
              key={step.step}
              className="bg-white rounded-lg border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              {/* Step Index & Timing */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="font-mono text-xs font-bold text-blue-700 tracking-wider">
                    {step.step}
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {step.duration}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {step.title}
                </h4>

                <div className="mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                    TAG: {step.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Phase {index + 1} of 3</span>
                <span className="text-blue-700 font-medium flex items-center gap-1">
                  Sequential <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Scope Guarantee Callout Badge */}
      <div className="bg-slate-950 text-white rounded-lg p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg mb-16">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block font-bold">
              SCOPE GUARANTEE &amp; BOUNDARY PLEDGE
            </span>
            <p className="text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
              "We diagnose, architect, and guide; your internal team builds and executes."
            </p>
            <p className="text-xs text-slate-400 mt-1">
              We do not replace your management, nor do we deploy generic contractor armies. We equip your leaders and HR with the systemic blueprint required for self-sustaining results.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenAuditModal}
          className="shrink-0 bg-blue-700 hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-xs font-mono font-medium transition flex items-center gap-2"
        >
          <span>Initiate Step 1 Audit</span>
          <ArrowUpRight className="w-4 h-4 text-amber-300" />
        </button>
      </div>

      {/* Engagement Formats (30–90 Day Cadences) */}
      <div className="mt-8">
        <div className="max-w-2xl mb-6">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Structured Engagement Formats (30–90 Day Cadences)
          </h4>
          <p className="text-sm text-slate-600 mt-1">
            Choose the engagement scope tailored to your organization’s immediate evolutionary phase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {pkg.timeline}
                  </span>
                </div>

                <h5 className="text-lg font-bold text-slate-900 mb-2">{pkg.title}</h5>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 mt-3">
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 block uppercase">Ideal For:</span>
                    <p className="text-slate-700">{pkg.audience}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 block uppercase">Advisory Scope:</span>
                    <p className="text-slate-700">{pkg.scope}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-mono text-[11px] text-blue-700 block uppercase font-semibold">Transformational Outcome:</span>
                    <p className="text-slate-800 font-medium">{pkg.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 hover:border-slate-900 py-2.5 rounded text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Request Intake for this Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

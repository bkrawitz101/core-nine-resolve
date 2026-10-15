import React from 'react';
import LivingSystemCanvas from './LivingSystemCanvas';
import GapsMatrix from './GapsMatrix';
import EngineScrubber from './EngineScrubber';
import NineBentoGrid from './NineBentoGrid';
import SystemicAdvantage from './SystemicAdvantage';
import PathwayTimeline from './PathwayTimeline';
import { ArrowUpRight, ArrowDown, CheckCircle2, ShieldCheck, Layers, GitMerge, Building2 } from 'lucide-react';

export default function BusinessDoor({ onOpenAuditModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-[#0F172A] transition-colors duration-300">
      {/* ─────────────────────────────────────────────────────────────
          PAGE 1: HOME — THE SURFACE-TO-DEPTH GATEWAY
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>CORE9 RESOLVE™ // WHOLE-SYSTEM DIAGNOSTICS &amp; ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6 font-sans">
              See the Whole System.<br />
              <span className="text-blue-700">Align Its Strengths.</span><br />
              Unlock Its Potential.
            </h1>

            <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              We diagnose the hidden functional gaps, structural misalignments, and underutilized competencies that limit organizational growth. We provide the diagnostic clarity and strategic architecture; your team brings the transformation to life.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-700 text-white px-7 py-4 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Diagnostic Audit</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => scrollTo('interactive-canvas')}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-7 py-4 rounded-md text-sm font-semibold transition-all shadow-sm"
              >
                <span>Explore the 9-Function System</span>
                <ArrowDown className="w-4 h-4 text-blue-700" />
              </button>
            </div>

            {/* Scope Boundary Guarantee Pill */}
            <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100/80 px-4 py-2 rounded-md border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strategic Advisory Model: We diagnose &amp; architect; your internal team executes.</span>
            </div>
          </div>

          {/* Component 2: Living-System Interactive Node Canvas (Hero Visual Anchor) */}
          <div id="interactive-canvas" className="scroll-mt-28">
            <LivingSystemCanvas />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PAGE 1 PART II: THE TARGET AUDIENCE & APPLICATION PROFILES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-700 font-semibold block mb-2">
              [ TARGET AUDIENCE EXPANDED // CORE TENETS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Built for Those Who Shape and Lead Living Organizations
            </h2>
            <blockquote className="text-base sm:text-lg text-slate-700 font-medium border-l-2 border-blue-700 pl-4 py-1 italic leading-relaxed">
              "CORE9 RESOLVE™ empowers business owners, entrepreneurs, visionaries, emerging leaders, and strategic thinkers to recognize their natural strengths, develop leadership capabilities, align people and resources, and turn ideas into effective, sustainable results."
            </blockquote>
          </div>

          {/* Application Profiles 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Established Organizations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Resolving operational friction, aligning departmental silos, restoring profitability, and architecting scalable operations without losing institutional continuity.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                Focus: Silo dissolution &amp; margin expansion
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Founders &amp; Emerging Ventures
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Validating operational viability, establishing structural integrity from day one, organizing functional roles, and navigating crucial growth transitions.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                Focus: Structural foundations &amp; de-risking scale
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Leaders &amp; Strategists
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Elevating executive decision-making, clarifying operational responsibilities, and unlocking the latent potential and natural competencies of internal teams.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                Focus: Executive clarity &amp; talent-to-seat alignment
              </div>
            </div>
          </div>

          {/* Section: The Core Premise: The Living System */}
          <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 sm:p-12 border border-slate-800">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
                THE FOUNDATIONAL PREMISE
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                A Business Is Not a Static Org Chart. It Is a Living System.
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                When an organization struggles, conventional analysis examines isolated departments, individual performance, or balance sheets. But businesses are dynamic living organisms. A breakdown in operational execution is rarely an isolated failure; it is often a symptom of functional misalignment, misallocated talent, or disconnected priorities originating elsewhere in the system.
              </p>

              <div className="border-t border-slate-800 pt-6">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-4">
                  THE FUNCTIONAL DIAGNOSTIC LENS:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-200 font-medium">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900 text-blue-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span>Is every essential function present and activated?</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900 text-blue-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span>Are key roles matched to the natural competencies of your people?</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900 text-blue-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span>Where are resources, communication, and momentum breaking down?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PAGE 2: THE DIAGNOSTIC METHODOLOGY & FUNCTIONAL ENGINE
      ───────────────────────────────────────────────────────────── */}
      <section id="methodology" className="py-20 md:py-28 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Component 3: The Functional Gaps & Performance Loss Matrix */}
          <div>
            <GapsMatrix />
          </div>

          {/* Component 4: The Functional Engine Scrubber */}
          <div id="functional-engine" className="scroll-mt-24">
            <EngineScrubber />
          </div>

          {/* 3x3 Bento Grid of the 9 Functions */}
          <div>
            <NineBentoGrid />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PAGE 3: OUR SYSTEMIC ADVANTAGE (THE DELIVERY MODEL)
      ───────────────────────────────────────────────────────────── */}
      <section id="systemic-advantage" className="py-20 md:py-28 border-b border-slate-200 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SystemicAdvantage />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PAGE 4: ENGAGEMENT PATHWAYS & STRATEGIC ENGAGEMENTS
      ───────────────────────────────────────────────────────────── */}
      <section id="engagement-pathways" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PathwayTimeline onOpenAuditModal={onOpenAuditModal} />
        </div>
      </section>
    </div>
  );
}

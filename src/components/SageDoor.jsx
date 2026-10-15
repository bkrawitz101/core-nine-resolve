import React, { useState } from 'react';
import { SAGE_METAPHORICAL_DECKS } from '../data/contentData';
import { Sparkles, ArrowRight, RotateCw, Heart, Users, User, ExternalLink, HelpCircle, Calendar, MessageSquare } from 'lucide-react';

export default function SageDoor({ onOpenConsultationModal, onOpenGroupModal }) {
  // Track flipped state of cards
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full bg-[#FBF8F3] text-stone-900 transition-colors duration-300">
      {/* SAGE Hero Section */}
      <section className="py-16 md:py-24 border-b border-[#E7E0D6] relative overflow-hidden">
        {/* Soft organic botanical background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EAE1] border border-[#E7E0D6] text-xs font-mono text-stone-600 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>SAGE by CORE9 RESOLVE™ // EXPERIENTIAL &amp; DEVELOPMENT DOOR</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif italic text-stone-900 tracking-tight leading-[1.1] mb-6">
              The Playground: A Welcoming Virtual World Where Discovery Begins Through Play.
            </h1>

            <p className="text-lg sm:text-xl font-sans text-stone-600 leading-relaxed mb-8">
              "Explore yourself, connect with others, and experience meaningful games guided by metaphorical decks. Come on your own, with friends, or with your children. Play, discover, connect, and grow together."
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#sage-decks"
                className="inline-flex items-center gap-2 bg-[#3F6212] hover:bg-[#314f0d] text-white px-6 py-3.5 rounded-2xl font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Interactive Deck Fan</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>

              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-2 bg-[#F2EAE1] hover:bg-[#ebdcd0] text-stone-800 border border-[#E7E0D6] px-6 py-3.5 rounded-2xl font-medium text-sm transition-all"
              >
                <User className="w-4 h-4 text-stone-600" />
                <span>Personal Consultations with Svetlana</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Component 6 Part A: The Virtual Playground & Metaphorical Deck Fan */}
      <section id="sage-decks" className="py-20 md:py-28 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3F6212] font-semibold block mb-2">
              [ COMPONENT 06 // PART A: METAPHORICAL DECK STAGE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight mb-4">
              Interactive 3D Deck Fan: Guided Inquiry on BAWA
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Featuring three uploaded metaphorical decks currently active on the virtual BAWA platform, plus expanding series in creation. Click any card to experience the tactile 3D flip and reveal its reflective self-discovery inquiry.
            </p>
          </div>

          {/* 3D Flip Card Fan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {SAGE_METAPHORICAL_DECKS.map((deck) => {
              const isFlipped = !!flippedCards[deck.id];

              return (
                <div
                  key={deck.id}
                  className="h-[430px] w-full cursor-pointer select-none group"
                  onClick={() => toggleFlip(deck.id)}
                >
                  <div
                    className={`relative w-full h-full rounded-2xl transition-transform duration-700 transform-style-3d shadow-md hover:shadow-xl ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front Face of Card */}
                    <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${deck.color} border ${deck.border} p-6 flex flex-col justify-between backface-hidden`}>
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-4">
                          <span className="uppercase tracking-wider">{deck.theme}</span>
                          <span className="flex items-center gap-1 text-[#3F6212]">
                            <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                            Flip
                          </span>
                        </div>

                        {/* Geometric / Botanical Abstract Card Art */}
                        <div className="w-full h-36 rounded-xl bg-white/70 border border-stone-200/60 flex items-center justify-center p-4 relative overflow-hidden mb-4">
                          {deck.illustrationType === 'geometric-gate' && (
                            <svg viewBox="0 0 100 100" className="w-24 h-24 text-amber-800/80">
                              <rect x="25" y="15" width="50" height="70" rx="25" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="50" cy="50" r="14" fill="#D97706" opacity="0.3" />
                              <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            </svg>
                          )}

                          {deck.illustrationType === 'dual-spiral' && (
                            <svg viewBox="0 0 100 100" className="w-24 h-24 text-lime-900/80">
                              <circle cx="40" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <circle cx="60" cy="50" r="22" fill="none" stroke="#3F6212" strokeWidth="1.5" />
                              <circle cx="50" cy="50" r="6" fill="#3F6212" opacity="0.4" />
                            </svg>
                          )}

                          {deck.illustrationType === 'radiant-sun' && (
                            <svg viewBox="0 0 100 100" className="w-24 h-24 text-amber-700">
                              <circle cx="50" cy="50" r="16" fill="#F59E0B" opacity="0.4" />
                              <circle cx="50" cy="50" r="16" fill="none" stroke="#D97706" strokeWidth="1.5" />
                              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                                <line
                                  key={idx}
                                  x1={50 + 22 * Math.cos((angle * Math.PI) / 180)}
                                  y1={50 + 22 * Math.sin((angle * Math.PI) / 180)}
                                  x2={50 + 29 * Math.cos((angle * Math.PI) / 180)}
                                  y2={50 + 29 * Math.sin((angle * Math.PI) / 180)}
                                  stroke="#D97706"
                                  strokeWidth="1.5"
                                />
                              ))}
                            </svg>
                          )}

                          {deck.illustrationType === 'dots-matrix' && (
                            <div className="flex flex-col items-center justify-center text-center p-2">
                              <Sparkles className="w-8 h-8 text-stone-400 mb-1 animate-pulse" />
                              <span className="text-xs font-mono text-stone-500 uppercase">In Creative Curation</span>
                            </div>
                          )}
                        </div>

                        <h4 className="text-lg font-bold text-stone-900 mb-1 leading-snug">
                          {deck.title}
                        </h4>
                        <span className="text-xs font-mono text-stone-500 block">
                          {deck.cardFront}
                        </span>
                      </div>

                      <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-mono text-stone-500">
                        <span>{deck.bawaRef}</span>
                        <span className="text-[#3F6212] font-semibold">Tap to flip →</span>
                      </div>
                    </div>

                    {/* Back Face of Card (Question & BAWA trigger) */}
                    <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#1C2826] text-white p-6 flex flex-col justify-between rotate-y-180 backface-hidden border border-emerald-900/60 shadow-2xl">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-4 pb-2 border-b border-stone-800">
                          <span>REFLECTIVE INQUIRY</span>
                          <span className="flex items-center gap-1 text-stone-400">
                            <RotateCw className="w-3.5 h-3.5" />
                            Return
                          </span>
                        </div>

                        <span className="font-mono text-[11px] text-lime-400 block uppercase mb-1">
                          Philosophical Key:
                        </span>
                        <blockquote className="text-sm font-serif italic text-stone-200 leading-relaxed mb-4">
                          "{deck.quote}"
                        </blockquote>

                        <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 text-xs text-stone-300">
                          <span className="font-mono text-[10px] text-amber-400 block uppercase mb-0.5">
                            Playground Inquiry Prompt:
                          </span>
                          <p>{deck.inquiryPrompt}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-stone-800">
                        <a
                          href="https://bawa.cards"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-[#3F6212] hover:bg-[#314f0d] text-white py-2.5 rounded-xl text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Enter Playground on BAWA</span>
                          <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BAWA Platform Integration Explainer */}
          <div className="mt-12 bg-[#F2EAE1] rounded-2xl border border-[#E7E0D6] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3F6212] font-semibold block mb-1">
                PLATFORM INTEGRATION &amp; GAME MECHANICS
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-stone-900 font-bold mb-2">
                A Welcoming Space for Both Adults and Children
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Hosted digitally through the BAWA platform, the virtual Playground provides an intuitive, non-judgmental environment for meaningful personal exploration, visual self-discovery, and shared family games.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://bawa.cards"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C2826] hover:bg-stone-800 text-white px-5 py-3 rounded-xl text-xs font-mono font-medium transition flex items-center gap-2"
              >
                <span>Launch BAWA Virtual Deck</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Component 6 Part B: Personal & Relational Dynamics (Role Matrix) */}
      <section id="sage-dynamics" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3F6212] font-semibold block mb-2">
              [ COMPONENT 06 // PART B: PERSONAL &amp; RELATIONAL DYNAMICS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight mb-4">
              Architectural Scenarios of Your Life
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Explore the patterns that shape your relationships, choices, and personal growth through meaningful conversations, guided experiences, and metaphorical tools.
            </p>
          </div>

          {/* Svetlana and Alexandra Invitation Cards Side-by-Side */}
          <div id="sage-roles" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Individual & Relational Consultations (Svetlana Pritzker) */}
            <div className="bg-[#F2EAE1] rounded-2xl border border-[#E7E0D6] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D6] mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-300">
                    INDIVIDUAL &amp; RELATIONAL CONSULTATIONS
                  </span>
                  <span className="text-xs font-mono text-stone-500">1-on-1 Sanctuary</span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-stone-800 text-white font-mono text-lg font-bold flex items-center justify-center shadow-md">
                    SP
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Svetlana Pritzker
                    </h3>
                    <span className="text-xs font-mono text-[#3F6212] font-semibold block">
                      Author of CORE9 RESOLVE™ &amp; Primary Consultant
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                  Transformational personal consultations are offered exclusively by Svetlana Pritzker. Discover the deep unconscious life scenarios, relational dynamics, and natural strengths shaping your path.
                </p>

                <div className="space-y-3 bg-white/70 rounded-xl p-4 border border-[#E7E0D6] mb-8 text-xs text-stone-700">
                  <div className="flex items-start gap-2">
                    <span className="text-[#3F6212] font-bold">✓</span>
                    <span><strong>Individual Systemic Consultations:</strong> Uncovering life scripts, personal blueprints, and internal vitality.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3F6212] font-bold">✓</span>
                    <span><strong>Relational &amp; Family Dynamics:</strong> Partnership alignment, parenting patterns, and interpersonal resonance.</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full bg-[#3F6212] hover:bg-[#314f0d] text-white py-3.5 rounded-xl font-medium text-sm transition-all shadow text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Book a Personal Consultation with Svetlana</span>
                </button>
                <span className="text-[11px] font-mono text-stone-500 block text-center mt-2">
                  Facilitated exclusively by Svetlana Pritzker
                </span>
              </div>
            </div>

            {/* Card 2: Creative Group Experiences (Svetlana & Alexandra) */}
            <div className="bg-[#F2EAE1] rounded-2xl border border-[#E7E0D6] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D6] mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#3F6212] font-semibold bg-lime-100/80 px-2.5 py-1 rounded-full border border-lime-300">
                    CREATIVE GROUP EXPERIENCES
                  </span>
                  <span className="text-xs font-mono text-stone-500">Communal Journey</span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex -space-x-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-stone-800 text-white font-mono text-lg font-bold flex items-center justify-center shadow-md ring-2 ring-white">
                      SP
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-600 to-amber-700 text-white font-mono text-lg font-bold flex items-center justify-center shadow-md ring-2 ring-white">
                      A
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Svetlana &amp; Alexandra
                    </h3>
                    <span className="text-xs font-mono text-[#3F6212] font-semibold block">
                      Creative Collaborator &amp; Co-Author of Metaphorical Decks
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                  Creative group experiences and interactive workshops are co-facilitated by Svetlana Pritzker and Alexandra. Immerse in artistic expression, shared metaphorical deck inquiries, and collective wisdom.
                </p>

                <div className="space-y-3 bg-white/70 rounded-xl p-4 border border-[#E7E0D6] mb-8 text-xs text-stone-700">
                  <div className="flex items-start gap-2">
                    <span className="text-[#3F6212] font-bold">✓</span>
                    <span><strong>Collaborative Group Workshops:</strong> Immersive journeys leveraging artistic cards and intuitive inquiry.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3F6212] font-bold">✓</span>
                    <span><strong>Communal Discovery Circles:</strong> Safe shared environments cultivating empathy and authentic mutual awareness.</span>
                  </div>
                  <div className="text-[11px] font-mono text-stone-500 italic pt-1">
                    *(Explicit scope rule: Individual 1-on-1 consultations are facilitated exclusively by Svetlana).*
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenGroupModal}
                  className="w-full bg-[#1C2826] hover:bg-stone-800 text-white py-3.5 rounded-xl font-medium text-sm transition-all shadow text-center flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4 text-amber-300" />
                  <span>Explore Upcoming Group Sessions</span>
                </button>
                <span className="text-[11px] font-mono text-stone-500 block text-center mt-2">
                  Co-led by Svetlana Pritzker &amp; Alexandra
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

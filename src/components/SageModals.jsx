import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, HeartHandshake, Users, Calendar, ArrowRight } from 'lucide-react';

export default function SageModals({
  isConsultationOpen,
  isGroupOpen,
  onCloseConsultation,
  onCloseGroup
}) {
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [groupSubmitted, setGroupSubmitted] = useState(false);

  const [consultForm, setConsultForm] = useState({
    name: '',
    email: '',
    sessionType: 'Individual Systemic Consultation',
    message: ''
  });

  const [groupForm, setGroupForm] = useState({
    name: '',
    email: '',
    participants: '1',
    message: ''
  });

  if (!isConsultationOpen && !isGroupOpen) return null;

  return (
    <>
      {/* Svetlana's Personal Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#FBF8F3] rounded-2xl border border-[#E7E0D6] shadow-2xl overflow-hidden my-8">
            <div className="bg-[#1C2826] text-white p-6 relative">
              <button
                onClick={onCloseConsultation}
                className="absolute top-5 right-5 text-stone-400 hover:text-white p-1 rounded transition"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                SAGE // PERSONAL CONSULTATION
              </span>
              <h3 className="text-2xl font-serif italic text-white">
                Book a Consultation with Svetlana Pritzker
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Facilitated exclusively by Svetlana Pritzker • Author of CORE9 RESOLVE™
              </p>
            </div>

            <div className="p-6">
              {consultSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-lime-100 text-[#3F6212] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Svetlana will review your request personally and contact you at <strong>{consultForm.email}</strong> to coordinate a sanctuary session.
                  </p>
                  <button
                    onClick={() => {
                      setConsultSubmitted(false);
                      onCloseConsultation();
                    }}
                    className="mt-4 bg-[#3F6212] text-white px-5 py-2 rounded-xl text-xs font-mono"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                      placeholder="e.g., Elena Vance"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                      placeholder="elena@example.com"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Session Orientation</label>
                    <select
                      value={consultForm.sessionType}
                      onChange={(e) => setConsultForm({ ...consultForm, sessionType: e.target.value })}
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    >
                      <option value="Individual Systemic Consultation">Individual Systemic Consultation</option>
                      <option value="Relational & Family Dynamics">Relational &amp; Family Dynamics</option>
                      <option value="Personal Vitality & Life Scenarios">Personal Vitality &amp; Life Scenarios</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Inquiry or Focus</label>
                    <textarea
                      rows="3"
                      value={consultForm.message}
                      onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                      placeholder="What pattern or question would you like to explore?"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onCloseConsultation}
                      className="px-4 py-2 border border-[#E7E0D6] rounded-xl text-xs font-mono text-stone-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#3F6212] hover:bg-[#314f0d] text-white px-5 py-2.5 rounded-xl text-xs font-mono transition flex items-center gap-1.5"
                    >
                      <span>Request Consultation</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Svetlana & Alexandra's Creative Group Experiences Modal */}
      {isGroupOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#FBF8F3] rounded-2xl border border-[#E7E0D6] shadow-2xl overflow-hidden my-8">
            <div className="bg-[#1C2826] text-white p-6 relative">
              <button
                onClick={onCloseGroup}
                className="absolute top-5 right-5 text-stone-400 hover:text-white p-1 rounded transition"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                SAGE // CREATIVE GROUP EXPERIENCES
              </span>
              <h3 className="text-2xl font-serif italic text-white">
                Workshops with Svetlana &amp; Alexandra
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Co-facilitated by Svetlana Pritzker &amp; Alexandra • Metaphorical Decks &amp; Play
              </p>
            </div>

            <div className="p-6">
              {groupSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-lime-100 text-[#3F6212] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">Registration Waitlist Added</h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Thank you! Svetlana and Alexandra will notify you at <strong>{groupForm.email}</strong> as soon as dates for the next creative group journey open.
                  </p>
                  <button
                    onClick={() => {
                      setGroupSubmitted(false);
                      onCloseGroup();
                    }}
                    className="mt-4 bg-[#3F6212] text-white px-5 py-2 rounded-xl text-xs font-mono"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setGroupSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="p-3 bg-lime-50 border border-lime-200 rounded-xl text-xs text-stone-700">
                    Group experiences combine art, intuitive metaphorical cards, and communal inquiry. <em>Note: individual consultations are conducted exclusively by Svetlana.</em>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={groupForm.name}
                      onChange={(e) => setGroupForm({ ...groupForm, name: e.target.value })}
                      placeholder="e.g., Maya Lin"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={groupForm.email}
                      onChange={(e) => setGroupForm({ ...groupForm, email: e.target.value })}
                      placeholder="maya@example.com"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Group Size / Interest</label>
                    <select
                      value={groupForm.participants}
                      onChange={(e) => setGroupForm({ ...groupForm, participants: e.target.value })}
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white"
                    >
                      <option value="1">1 Person (Joining Open Circle)</option>
                      <option value="2">2 People (Pair or Friends)</option>
                      <option value="Family">Family Circle</option>
                      <option value="Private">Private Creative Group (5+ People)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Notes or Interests</label>
                    <textarea
                      rows="2"
                      value={groupForm.message}
                      onChange={(e) => setGroupForm({ ...groupForm, message: e.target.value })}
                      placeholder="Any specific decks, themes, or timeframes you're interested in?"
                      className="w-full px-3 py-2 border border-[#E7E0D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6212] bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onCloseGroup}
                      className="px-4 py-2 border border-[#E7E0D6] rounded-xl text-xs font-mono text-stone-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1C2826] hover:bg-stone-800 text-white px-5 py-2.5 rounded-xl text-xs font-mono transition flex items-center gap-1.5"
                    >
                      <span>Join Workshop List</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

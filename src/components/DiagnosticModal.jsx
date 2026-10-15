import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Building, Mail, User, Phone, ArrowRight, HelpCircle } from 'lucide-react';

export default function DiagnosticModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    organizationSize: '11-50',
    primaryFriction: 'Operational Inefficiencies',
    teamDescription: '',
    immediateObjective: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              [ INTAKE // STEP 1 AUDIT ]
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-mono text-xs text-slate-400">Strictly Confidential</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Request a Comprehensive Systems Diagnostic Audit
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            For business owners, executive leaders, and emerging visionaries seeking root-cause structural clarity.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Diagnostic Request Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Svetlana Pritzker and Vasili will review your organizational profile and functional priorities. Our analytical team will reach out to <strong>{formData.email}</strong> within 1–2 business days.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono text-slate-600 max-w-md mx-auto text-left">
                <span className="font-bold block text-slate-800 mb-1">INTAKE RECORD SUMMARY:</span>
                <div>Organization: {formData.organization || 'Undisclosed'}</div>
                <div>Primary Deficiency State: {formData.primaryFriction}</div>
                <div>Team Scale: {formData.organizationSize} members</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-xs font-mono font-medium transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Scope Boundary Notice */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Advisory Scope:</strong> CORE9 RESOLVE™ diagnoses, architects, and guides; your internal leadership and HR teams build and execute the roadmap.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Alexandra Reynolds"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Executive Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Apex Living Systems"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Leadership Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Founder, CEO, VP Operations"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Organization Scale
                  </label>
                  <select
                    value={formData.organizationSize}
                    onChange={(e) => setFormData({ ...formData, organizationSize: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="1-10">1–10 people (Emerging Venture)</option>
                    <option value="11-50">11–50 people (Scaling Team)</option>
                    <option value="51-200">51–200 people (Established Mid-Tier)</option>
                    <option value="200+">200+ people (Enterprise System)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                    Primary Deficiency State
                  </label>
                  <select
                    value={formData.primaryFriction}
                    onChange={(e) => setFormData({ ...formData, primaryFriction: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Operational Inefficiencies">Operational Inefficiencies</option>
                    <option value="Functional Misalignment">Functional Misalignment</option>
                    <option value="Execution Gaps">Execution Gaps</option>
                    <option value="Performance & Resource Losses">Performance &amp; Resource Losses</option>
                    <option value="Whole System Transition">Whole System Transition / New Venture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1">
                  Immediate Strategic Constraint or Bottleneck
                </label>
                <textarea
                  rows="3"
                  value={formData.immediateObjective}
                  onChange={(e) => setFormData({ ...formData, immediateObjective: e.target.value })}
                  placeholder="Describe where momentum, communication, or margins are currently breaking down..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-300 rounded-md text-xs font-mono text-slate-600 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md text-xs font-mono font-medium transition flex items-center gap-2 shadow"
                >
                  <span>Submit Diagnostic Intake</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

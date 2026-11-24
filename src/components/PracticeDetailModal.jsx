import React from 'react';
import { X, CheckCircle, Scale, FileText, ArrowRight } from 'lucide-react';

export default function PracticeDetailModal({ area, onClose, onConsult, isDark }) {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`max-w-2xl w-full border rounded-2xl shadow-2xl overflow-hidden relative text-left max-h-[90vh] flex flex-col ${
        isDark ? 'bg-slate-900 border-amber-500/40 text-slate-200' : 'bg-[#fbf7f3] border-[#953a2e]/30 text-[#1a0f0c]'
      }`}>
        
        {/* Header */}
        <div className={`p-6 border-b flex items-start justify-between ${
          isDark ? 'bg-slate-950/90 border-amber-500/20' : 'bg-[#f8ece9] border-[#953a2e]/20'
        }`}>
          <div className="space-y-1 pr-6">
            <span className={`text-[11px] font-display font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
              isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-[#faf6f4] border-[#953a2e]/30 text-[#953a2e]'
            }`}>
              {area.category} Jurisdiction
            </span>
            <h3 className={`font-display text-xl sm:text-2xl font-bold ${
              isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
            }`}>
              {area.title}
            </h3>
            <p className={`font-garamond italic font-bold text-base sm:text-lg ${
              isDark ? 'text-amber-200' : 'text-[#64534f]'
            }`}>
              {area.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark 
                ? 'bg-slate-800 text-slate-400 hover:text-slate-200' 
                : 'bg-[#faf6f4] text-[#64534f] hover:text-[#1a0f0c] border border-[#953a2e]/15'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm font-sans">
          
          {/* Summary */}
          <div>
            <h4 className={`text-xs uppercase font-display font-bold tracking-wider mb-2 ${
              isDark ? 'text-slate-400' : 'text-[#8a7672]'
            }`}>
              Practice Overview & Scope
            </h4>
            <p className={`p-4 rounded-xl border leading-relaxed ${
              isDark ? 'bg-slate-950/60 border-slate-800 text-slate-200' : 'bg-[#faf6f4] border-[#953a2e]/15 text-[#333333]'
            }`}>
              {area.summary}
            </p>
          </div>

          {/* Key Proceedings & Specific Matters */}
          <div>
            <h4 className={`text-xs uppercase font-display font-bold tracking-wider mb-3 flex items-center gap-2 ${
              isDark ? 'text-amber-400' : 'text-[#953a2e]'
            }`}>
              <Scale className="w-4 h-4" />
              <span>Key Matters & Legal Interventions</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {area.details.map((detail, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border transition-colors ${
                    isDark 
                      ? 'bg-slate-800/40 border-slate-800 hover:border-amber-500/20 text-slate-300' 
                      : 'bg-[#faf6f4] border-[#953a2e]/10 hover:border-[#953a2e]/30 text-[#333333]'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    isDark ? 'text-amber-400' : 'text-[#953a2e]'
                  }`} />
                  <span className="text-xs sm:text-sm font-sans">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Governing Statutory Framework */}
          {area.governingLaws && (
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-[#f8ece9] border-[#953a2e]/20'
            }`}>
              <h4 className={`text-xs font-display font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 ${
                isDark ? 'text-amber-300' : 'text-[#953a2e]'
              }`}>
                <FileText className="w-3.5 h-3.5" />
                <span>Primary Governing Acts & Procedural Laws</span>
              </h4>
              <p className={`text-xs font-mono ${isDark ? 'text-slate-300' : 'text-[#443834]'}`}>
                {area.governingLaws}
              </p>
            </div>
          )}

          {/* Disclaimer Note */}
          <p className={`text-[11px] italic border-t pt-3 ${
            isDark ? 'border-slate-800 text-slate-500' : 'border-[#953a2e]/15 text-[#8a7672]'
          }`}>
            *All legal work is subject to professional engagement, applicable law, court jurisdiction and professional availability.
          </p>

        </div>

        {/* Footer Actions */}
        <div className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-amber-500/20' : 'bg-[#f8ece9] border-[#953a2e]/20'
        }`}>
          <span className={`text-xs font-sans ${isDark ? 'text-slate-400' : 'text-[#64534f]'}`}>
            High Courts of Telangana & Andhra Pradesh Practice
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-display font-semibold w-1/2 sm:w-auto border ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' 
                  : 'bg-[#faf6f4] border-[#953a2e]/20 text-[#64534f] hover:bg-[#f4efea]'
              }`}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(area.title);
              }}
              className={`px-5 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase shadow-md w-1/2 sm:w-auto flex items-center justify-center gap-1.5 ${
                isDark
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20'
                  : 'bg-[#953a2e] hover:bg-[#921e0f] text-white shadow-[#953a2e]/20'
              }`}
            >
              <span>Inquire on this Matter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

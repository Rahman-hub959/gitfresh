import React, { useState } from 'react';
import { 
  BookOpen, ChevronDown, ChevronUp 
} from 'lucide-react';
import { LEGAL_AWARENESS_GUIDES } from '../data/legalContent';

export default function LegalAwarenessSection({ isDark }) {
  const [openGuide, setOpenGuide] = useState(0);

  return (
    <section id="awareness" className={`py-28 lg:py-36 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark ? 'bg-slate-950 border-amber-500/20' : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background glow */}
      <div className={`absolute top-1/3 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-[#f8ece9] border-[#953a2e]/25 text-[#953a2e]'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Public Education & Rights Awareness</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
          }`}>
            Legal Awareness & <span className={isDark ? 'text-gold-gradient' : 'text-[#953a2e]'}>Public Education</span>
          </h2>

          <div className={`p-6 sm:p-8 rounded-2xl border max-w-3xl mx-auto shadow-lg ${
            isDark ? 'bg-slate-900/90 border-amber-500/35 shadow-amber-950/20' : 'bg-[#fbf7f3] border-[#953a2e]/25'
          }`}>
            <p className={`font-garamond italic font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-wide ${
              isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#1a0f0c]'
            }`}>
              “Legal awareness is an important foundation of an informed society.”
            </p>
          </div>

          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#64534f]'
          }`}>
            Understanding constitutional rights, property laws, consumer rights, family laws, cyber safety, banking regulations and criminal justice helps individuals make informed decisions. This platform aims to share general legal information and explain important legal concepts in an accessible manner.
          </p>
        </div>

        {/* Interactive Guides Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-5">
          {LEGAL_AWARENESS_GUIDES.map((guide, idx) => {
            const isOpen = openGuide === idx;

            return (
              <div
                key={guide.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                  isOpen
                    ? isDark
                      ? 'bg-slate-900 border-amber-500/60 shadow-xl'
                      : 'bg-[#fbf7f3] border-[#953a2e]/60 shadow-md shadow-[#953a2e]/10'
                    : isDark
                      ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/30'
                      : 'bg-[#fbf7f3] border-[#953a2e]/20 hover:border-[#953a2e]/40 shadow-sm'
                }`}
              >
                {/* Accordion Bar Header */}
                <button
                  onClick={() => setOpenGuide(isOpen ? -1 : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' 
                          : 'bg-[#f8ece9] border-[#953a2e]/30 text-[#953a2e]'
                      }`}>
                        {guide.category}
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-[#8a7672]'}`}>
                        {guide.readTime}
                      </span>
                    </div>

                    <h3 className={`font-display text-base sm:text-lg font-bold ${
                      isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                    }`}>
                      {guide.title}
                    </h3>
                  </div>

                  <div className={`p-2.5 rounded-xl transition-colors ${
                    isOpen 
                      ? isDark ? 'bg-amber-500 text-slate-950' : 'bg-[#953a2e] text-white' 
                      : isDark ? 'bg-slate-800 text-slate-400' : 'bg-[#faf6f4] text-[#64534f] border border-[#953a2e]/15'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Collapsible Body */}
                {isOpen && (
                  <div className={`px-6 sm:px-7 pb-7 pt-3 border-t space-y-5 animate-fade-in ${
                    isDark ? 'border-slate-800' : 'border-[#953a2e]/15'
                  }`}>
                    <div className={`p-4 rounded-xl border text-xs sm:text-sm font-display font-semibold ${
                      isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-[#f8ece9] border-[#953a2e]/25 text-[#953a2e]'
                    }`}>
                      💡 {guide.highlight}
                    </div>

                    <div className="space-y-3">
                      {guide.points.map((point, pIdx) => (
                        <div 
                          key={pIdx} 
                          className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border ${
                            isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-[#faf6f4] border-[#953a2e]/10'
                          }`}
                        >
                          <span className={`font-mono text-xs font-bold mt-0.5 flex-shrink-0 ${
                            isDark ? 'text-amber-400' : 'text-[#953a2e]'
                          }`}>
                            0{pIdx + 1}.
                          </span>
                          <span className={`text-xs sm:text-sm font-sans leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-[#333333]'
                          }`}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Public Education Disclaimer Notice */}
        <div className={`mt-12 max-w-3xl mx-auto p-4 rounded-2xl border text-center ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-[#fbf7f3] border-[#953a2e]/20 shadow-sm'
        }`}>
          <p className={`text-xs font-sans leading-relaxed italic ${
            isDark ? 'text-slate-400' : 'text-[#64534f]'
          }`}>
            <strong className={isDark ? 'text-slate-200' : 'text-[#1a0f0c]'}>Educational Disclaimer:</strong> The information published here is educational in nature and should not be treated as an individual legal opinion or substitute for professional legal advice. For specific case evaluation, consultation with the advocate in chambers is required.
          </p>
        </div>

      </div>
    </section>
  );
}

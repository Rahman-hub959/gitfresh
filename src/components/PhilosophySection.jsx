import React, { useState } from 'react';
import { Compass, BookCheck, ShieldAlert, Landmark, Sparkles } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/legalContent';

export default function PhilosophySection({ isDark }) {
  const [activePillar, setActivePillar] = useState(0);

  const icons = [Compass, BookCheck, ShieldAlert, Landmark];

  return (
    <section id="philosophy" className={`py-10 sm:py-14 md:py-18 lg:py-20 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark ? 'bg-slate-950 border-amber-500/20' : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background radial gradient */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border shadow-sm ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-white border-amber-500/30 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Ethical Foundations & Jurisprudence</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
          }`}>
            My <span className={isDark ? 'text-gold-gradient' : 'text-amber-600 dark:text-amber-400'}>Philosophy</span>
          </h2>

          <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
            isDark 
              ? 'bg-slate-900/85 border-amber-500/35 shadow-amber-950/20' 
              : 'bg-white border-amber-500/25 shadow-sm'
          }`}>
            <p className={`font-garamond italic font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-wide ${
              isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#0a0a0a]'
            }`}>
              “Justice is strengthened when knowledge meets responsibility.”
            </p>
          </div>

          <p className={`font-sans text-sm sm:text-base leading-relaxed pt-3 ${
            isDark ? 'text-slate-300' : 'text-[#333333]'
          }`}>
            I believe that every legal issue deserves careful consideration, every document deserves proper scrutiny, and every legal proceeding demands professional responsibility. My commitment to the legal profession is rooted in integrity, continuous learning, independent legal thought, and deep respect for the Constitution of India.
          </p>

          <p className={`font-sans text-xs sm:text-sm font-semibold tracking-wide pt-1 ${
            isDark ? 'text-amber-300/80' : 'text-[#953a2e]'
          }`}>
            The purpose of law is not only to resolve disputes but also to protect rights, uphold duties and strengthen society.
          </p>
        </div>

        {/* 4 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx] || Landmark;
            const isSelected = activePillar === idx;

            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setActivePillar(idx)}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? isDark
                      ? 'bg-slate-900 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/15 -translate-y-2'
                      : 'bg-[#f8ece9] border-2 border-[#953a2e] shadow-xl shadow-[#953a2e]/10 -translate-y-2'
                    : isDark
                      ? 'bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/85'
                      : 'bg-[#fbf7f3] border border-[#953a2e]/15 hover:border-[#953a2e]/40 shadow-sm'
                }`}
              >
                {/* Pillar Top Meta */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-2xl font-black ${
                      isDark ? 'text-amber-400/40' : 'text-[#953a2e]/30'
                    }`}>
                      {pillar.number}
                    </span>
                    <div className={`p-3 rounded-xl transition-colors ${
                      isSelected 
                        ? isDark
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'bg-[#953a2e] text-white shadow-md'
                        : isDark
                          ? 'bg-slate-800 text-amber-400'
                          : 'bg-[#faf6f4] text-[#953a2e]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`font-display text-lg font-bold mb-2 ${
                    isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                  }`}>
                    {pillar.title}
                  </h3>

                  <div className={`p-3 rounded-xl border mb-3 ${
                    isDark ? 'bg-slate-950/70 border-amber-500/25' : 'bg-[#faf6f4] border-[#953a2e]/15'
                  }`}>
                    <p className={`font-garamond italic font-bold text-base sm:text-lg leading-snug ${
                      isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#1a0f0c]'
                    }`}>
                      "{pillar.quote}"
                    </p>
                  </div>

                  <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-[#64534f]'
                  }`}>
                    {pillar.body}
                  </p>
                </div>

                {/* Bottom Status bar */}
                <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-sans ${
                  isDark ? 'border-slate-800 text-slate-500' : 'border-[#953a2e]/15 text-[#8a7672]'
                }`}>
                  <span className="uppercase tracking-wider font-semibold font-display">Pillar of Practice</span>
                  <span className={isSelected ? isDark ? 'text-amber-400 font-bold' : 'text-[#953a2e] font-bold' : ''}>
                    {isSelected ? 'Active Focus' : 'Explore'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Core Statement Callout */}
        <div className={`mt-12 p-6 rounded-2xl border max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left ${
          isDark 
            ? 'bg-slate-900/40 border-amber-500/20' 
            : 'bg-[#fbf7f3] border-[#953a2e]/20 shadow-sm'
        }`}>
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-[#f8ece9] border-[#953a2e]/25 text-[#953a2e]'
          }`}>
            <Landmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className={`font-display text-sm sm:text-base font-bold ${
              isDark ? 'text-amber-200' : 'text-[#1a0f0c]'
            }`}>
              Constitutional Governance & Independent Legal Thought
            </h4>
            <p className={`font-sans text-xs leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-[#64534f]'
            }`}>
              Every counsel argument before the court is structured upon rigorous analysis of constitutional principles, statutory intent, and binding precedents of the Supreme Court of India and High Courts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

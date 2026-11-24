import React from 'react';
import { Shield, Award, ArrowRight, FileText, CheckCircle2, Zap } from 'lucide-react';
import ScalesOfJustice3D from './ScalesOfJustice3D';
import { ADVOCATE_INFO } from '../data/legalContent';

export default function HeroSection({ onOpenUrgent, isDark }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={`relative overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 lg:py-20 border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-radial-gradient-justice border-amber-500/20' 
        : 'bg-gradient-to-b from-[#faf8f5] via-[#f2f6fa] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background ambient light */}
      <div className={`absolute top-1/4 left-1/10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />
      <div className={`absolute bottom-10 right-1/10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-blue-600/5' : 'bg-sky-200/30'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Top Badges: High Courts Association & Degrees */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-semibold tracking-wide shadow-sm border ${
            isDark 
              ? 'bg-slate-900/90 border-amber-500/30 text-amber-300' 
              : 'bg-white border-amber-500/30 text-amber-800 shadow-sm'
          }`}>
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            <span>High Court of Telangana & High Court of Andhra Pradesh</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium border ${
            isDark 
              ? 'bg-slate-900/60 border-slate-700/60 text-slate-300' 
              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}>
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>B.Sc. • MBA • LL.B. • LL.M. (Pursuing)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-center">
          
          {/* Left Column: Core Identity & Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Official Homepage Identity Card matching Advocate's Specification */}
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative backdrop-blur-md overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-[#0c1830] via-[#0f2142] to-[#070e1e] border-amber-500/40 shadow-amber-950/20' 
                : 'bg-gradient-to-br from-[#0b1b36] via-[#102952] to-[#09152b] text-white border-amber-400/60 shadow-2xl shadow-slate-900/15'
            }`}>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-7">
                {/* Advocate Portrait with 24K Gold Cameo Frame */}
                <div className="relative flex-shrink-0 group">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-600 shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/assets/advocate-namaste.jpg" 
                      alt="Advocate Simhadri Vasantha Lakshmi" 
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>
                  {/* Advocate Bands Seal Badge */}
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white p-0.5 shadow-lg border border-amber-400">
                    <img 
                      src="/assets/advocate-bands-seal.png" 
                      alt="Advocate Bands Insignia" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Identity Text matching exact official card */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-black tracking-wider uppercase text-amber-300 drop-shadow-sm">
                    SIMHADRI VASANTHA LAKSHMI
                  </h2>
                  <p className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                    ADVOCATE
                  </p>
                  <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-amber-200/90">
                    HIGH COURT OF TELANGANA & ANDHRA PRADESH
                  </p>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 my-2 mx-auto sm:mx-0" />
                  
                  <p className="font-garamond italic font-bold text-lg sm:text-xl text-amber-100 leading-snug drop-shadow-sm">
                    “Justice begins with awareness, grows through knowledge, and stands firm through the rule of law.”
                  </p>
                  
                  <p className="text-[10px] font-display font-bold tracking-widest uppercase text-amber-400/90 pt-1">
                    Professional Legal Practice
                  </p>
                </div>
              </div>
            </div>

            {/* Core Website Quotation Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl relative backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/85 border-l-4 border-l-amber-500 border-amber-500/30' 
                : 'bg-white/95 border-l-4 border-l-[#c59b27] border-amber-600/30 shadow-[#1a0f0c]/5'
            }`}>
              <div className={`font-garamond text-5xl absolute -top-3 left-4 select-none ${
                isDark ? 'text-amber-400/30' : 'text-[#c59b27]/30'
              }`}>“</div>
              <p className={`font-garamond italic font-bold text-xl sm:text-2xl lg:text-[26px] leading-relaxed pl-6 sm:pl-7 tracking-wide ${
                isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#0a0a0a]'
              }`}>
                “Let knowledge guide the argument, let integrity define the profession, and let justice remain the ultimate purpose.”
              </p>
              <div className={`mt-4 flex items-center justify-between text-xs border-t pt-3 pl-6 sm:pl-7 ${
                isDark ? 'border-amber-500/20 text-amber-300/80' : 'border-amber-600/20 text-[#4b5563]'
              }`}>
                <span className="font-display font-bold tracking-wider uppercase text-[11px] text-[#c59b27]">Core Professional Creed</span>
                <span className="font-garamond italic font-bold text-sm text-[#0a0a0a] dark:text-amber-200">Simhadri Vasantha Lakshmi</span>
              </div>
            </div>

            {/* Welcome Statement */}
            <div className={`space-y-3.5 py-1 font-sans text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-[#1c1c1c]'
            }`}>
              <p className={`font-bold text-base sm:text-lg ${isDark ? 'text-slate-100' : 'text-[#0a0a0a]'}`}>
                Law is not merely a system of rules; it is a foundation of justice, protection, responsibility and social order.
              </p>
              <p className={isDark ? 'text-slate-400 text-xs sm:text-sm leading-relaxed' : 'text-[#4b5563] text-xs sm:text-sm leading-relaxed'}>
                My approach to the legal profession is guided by professional ethics, legal knowledge, careful examination of facts and respect for the judicial process. This platform provides professional information, legal awareness, and rigorous guidance across civil, property, criminal, corporate, banking, cyber, and family jurisdictions.
              </p>
            </div>

            {/* Practice Tags Carousel */}
            <div className="flex flex-wrap gap-2.5 pt-2 pb-1">
              {[
                "Property & Civil Law",
                "Criminal Defence & Bail",
                "Corporate & Contracts",
                "Banking & Mortgages",
                "Cyber Law & Digital Fraud",
                "Family & Matrimonial",
                "Title Scrutiny & Opinions"
              ].map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 text-xs sm:text-[13px] rounded-lg font-sans font-medium transition-colors cursor-default border ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                      : 'bg-[#fbf7f3] border-[#953a2e]/20 text-[#64534f] hover:border-[#953a2e] hover:text-[#953a2e]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3.5 pb-2">
              <button
                onClick={() => scrollTo('#practice-areas')}
                className={`px-7 py-4 rounded-xl font-display font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group ${
                  isDark
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
                    : 'bg-[#0c0f17] hover:bg-[#17223b] text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-950/15'
                }`}
              >
                <span>Explore 10 Practice Areas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>

              <button
                onClick={() => scrollTo('#opinions')}
                className={`px-6 py-4 rounded-xl font-display font-semibold text-sm transition-all flex items-center justify-center gap-2 border ${
                  isDark
                    ? 'bg-slate-900/90 hover:bg-slate-800 border-amber-500/30 text-amber-200'
                    : 'bg-white hover:bg-[#f0f4f9] border-amber-500/30 text-[#0c0f17] shadow-sm'
                }`}
              >
                <FileText className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-[#b38728]'}`} />
                <span>Legal Opinions & Scrutiny</span>
              </button>

              <button
                onClick={onOpenUrgent}
                className={`px-5 py-4 rounded-xl font-display font-semibold text-sm transition-all flex items-center justify-center gap-1.5 border ${
                  isDark
                    ? 'bg-red-950/40 hover:bg-red-900/50 border-red-500/40 text-red-300'
                    : 'bg-red-50 hover:bg-red-100 border-red-300 text-red-700 shadow-sm'
                }`}
              >
                <Zap className="w-4 h-4 animate-pulse text-red-600 dark:text-red-400" />
                <span>Urgent Aid</span>
              </button>
            </div>

            {/* Jurisdiction Notice */}
            <div className={`text-[12px] sm:text-[13px] font-sans flex items-center gap-2 pt-3 border-t ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-[#953a2e]/15 text-[#64534f]'
            }`}>
              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isDark ? 'text-amber-400' : 'text-[#953a2e]'}`} />
              <span>Practice extends across High Courts of Telangana & AP, District Courts, Commissions & Tribunals.</span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Scales of Justice & Visual Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Ambient circular frame with border - Specifically styled with luxury warm cream parchment background */}
            <div className="relative w-full max-w-[500px] rounded-3xl border-2 border-amber-500/50 p-2.5 sm:p-3 shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden group bg-gradient-to-b from-[#FAF6EE] via-[#F5EFE0] to-[#EFE7D2]">
              
              {/* Inner Decorative Card Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-amber-600/30 rounded-t-2xl bg-[#EAE0CD]/95">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-600 shadow-sm animate-pulse" />
                  <span className="font-display text-xs font-bold tracking-wider text-amber-950">
                    THE SCALES OF JUSTICE
                  </span>
                </div>
                <span className="text-[11px] font-display font-semibold text-amber-800">
                  Symbol of Equity & Truth
                </span>
              </div>

              {/* 3D Canvas */}
              <div className="w-full relative">
                <ScalesOfJustice3D isDark={false} inCreamBox={true} />
              </div>

              {/* Identity Footer inside Card */}
              <div className="p-4 sm:p-5 border-t border-amber-600/30 rounded-b-2xl text-center space-y-1.5 bg-[#EAE0CD]/95">
                <p className="font-display text-xs font-bold tracking-wider text-amber-950">
                  HIGH COURT OF TELANGANA & ANDHRA PRADESH
                </p>
                <p className="font-garamond italic font-bold text-sm sm:text-base text-amber-950 leading-snug">
                  “Justice begins with awareness, grows through knowledge, and stands firm through the rule of law.”
                </p>
              </div>

            </div>

            {/* High Court Badges below 3D model */}
            <div className="w-full max-w-[500px] grid grid-cols-2 gap-3.5 mt-5">
              <div className={`p-3.5 sm:p-4 rounded-2xl border text-center ${
                isDark 
                  ? 'bg-slate-900/70 border-amber-500/20 shadow-lg' 
                  : 'bg-white border-amber-500/25 shadow-sm'
              }`}>
                <p className={`text-[10px] font-display font-semibold uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>Jurisdiction I</p>
                <p className={`text-xs font-display font-bold ${isDark ? 'text-slate-100' : 'text-[#0a0a0a]'}`}>
                  Telangana High Court
                </p>
                <p className={`text-[10px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Hyderabad Complex
                </p>
              </div>

              <div className={`p-3.5 sm:p-4 rounded-2xl border text-center ${
                isDark 
                  ? 'bg-slate-900/70 border-amber-500/20 shadow-lg' 
                  : 'bg-white border-amber-500/25 shadow-sm'
              }`}>
                <p className={`text-[10px] font-display font-semibold uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>Jurisdiction II</p>
                <p className={`text-xs font-display font-bold ${isDark ? 'text-slate-100' : 'text-[#0a0a0a]'}`}>
                  Andhra Pradesh High Court
                </p>
                <p className={`text-[10px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Amaravati Complex
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { User, Sparkles, ArrowUpRight, Scale, Shield, Award } from 'lucide-react';
import AcademicBook3D from './AcademicBook3D';
import { ADVOCATE_INFO } from '../data/legalContent';

export default function AboutSection({ 
  photoUrl, 
  isDark 
}) {
  return (
    <section id="about" className={`py-10 sm:py-14 md:py-18 lg:py-20 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark 
        ? 'bg-[#060b17] border-amber-500/20' 
        : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />
      <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-blue-600/5' : 'bg-sky-200/30'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border shadow-sm ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-white border-amber-500/30 text-amber-800'
          }`}>
            <User className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Academic Dossier & Credentials</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
          }`}>
            About the <span className={isDark ? 'text-gold-gradient' : 'text-amber-600 dark:text-amber-400'}>Advocate</span>
          </h2>

          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Explore Advocate Simhadri Vasantha Lakshmi’s multidisciplinary academic journey across science, business management, and constitutional law through this interactive 3D dossier.
          </p>
        </div>

        {/* 3D Realistic Interactive Academic Book Component */}
        <AcademicBook3D
          photoUrl={photoUrl}
          isDark={isDark}
        />

        {/* Court Affiliation Badge Below Book */}
        <div className={`mt-8 sm:mt-10 max-w-xl mx-auto flex items-center justify-center gap-4 p-5 rounded-2xl border backdrop-blur-xl shadow-md transition-all ${
          isDark ? 'bg-slate-900/60 border-amber-500/20' : 'bg-white border-amber-500/25 shadow-sm'
        }`}>
          <div className={`p-1.5 rounded-xl border w-12 h-12 flex items-center justify-center flex-shrink-0 ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-400/40 text-amber-800'
          }`}>
            <img 
              src="/assets/svl-advocate-seal.png" 
              alt="Advocate High Court Insignia" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left">
            <p className={`font-display text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-slate-200' : 'text-[#0a0a0a]'
            }`}>
              High Courts of Telangana & Andhra Pradesh
            </p>
            <p className={`text-[11px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Hyderabad Complex • Amaravati Complex
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

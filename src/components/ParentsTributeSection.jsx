import React, { useState } from 'react';
import { Heart, Sparkles, Flame, Flower2, Quote, Sun, ZoomIn, X, Users, User } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalContent';

export default function ParentsTributeSection({ isDark }) {
  const tribute = ADVOCATE_INFO.parentsTribute;
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Lightbox zoom
  const [viewMode, setViewMode] = useState('together'); // 'together' | 'individual'

  return (
    <section 
      id="parents-tribute" 
      className={`relative py-28 lg:py-36 overflow-hidden transition-colors duration-500 border-b ${
        isDark
          ? 'bg-gradient-to-b from-[#050914] via-[#091224] to-[#050914] border-amber-500/20 text-slate-100'
          : 'bg-gradient-to-b from-[#faf8f5] via-[#eef4f9] to-[#faf8f5] border-amber-500/20 text-[#0c0f17]'
      }`}
    >
      {/* Dynamic Ambient Background with Multi-layer Glow & Glass Reflections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Luminous Warm Light Orbs for Glass Refraction */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full blur-[120px] opacity-40 ${
          isDark ? 'bg-amber-500/15' : 'bg-amber-300/35'
        }`} />
        <div className={`absolute -bottom-10 left-10 w-96 h-96 rounded-full blur-[100px] opacity-30 ${
          isDark ? 'bg-sky-600/15' : 'bg-sky-200/50'
        }`} />
        <div className={`absolute top-10 right-10 w-80 h-80 rounded-full blur-[100px] opacity-25 ${
          isDark ? 'bg-amber-400/10' : 'bg-amber-200/40'
        }`} />

        {/* Traditional Sacred Jasmine Damask Watermark */}
        <svg 
          className={`absolute -top-16 -left-16 w-96 h-96 opacity-[0.05] ${isDark ? 'text-amber-100' : 'text-slate-900'}`}
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <path d="M50 0 C55 25 75 45 100 50 C75 55 55 75 50 100 C45 75 25 55 0 50 C25 45 45 25 50 0 Z" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <svg 
          className={`absolute -bottom-20 -right-20 w-[420px] h-[420px] opacity-[0.05] ${isDark ? 'text-amber-100' : 'text-slate-900'}`}
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <path d="M50 0 C55 25 75 45 100 50 C75 55 55 75 50 100 C45 75 25 55 0 50 C25 45 45 25 50 0 Z" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Floating White Jasmine Petals with gentle pulse */}
        <div className="absolute top-20 left-16 animate-pulse duration-1000 opacity-60">
          <svg className="w-6 h-6 text-amber-200/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 15 7 15 12C15 17 12 22 12 22C12 22 9 17 9 12C9 7 12 2 12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/5 animate-pulse duration-700 opacity-50">
          <svg className="w-5 h-5 text-amber-200/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 12C2 12 7 9 12 9C17 9 22 12 22 12C22 12 17 15 12 15C7 15 2 12 2 12Z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-20 animate-pulse duration-1000 opacity-60">
          <svg className="w-6 h-6 text-amber-200/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 15 7 15 12C15 17 12 22 12 22C12 22 9 17 9 12C9 7 12 2 12 2Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Memorial Header Pill with Glassmorphism */}
        <div className="text-center mb-14 space-y-4">
          <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-display font-semibold tracking-widest uppercase shadow-md backdrop-blur-xl border ${
            isDark 
              ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 shadow-amber-950/30' 
              : 'bg-white/80 border-amber-400/60 text-amber-800 shadow-amber-900/10'
          }`}>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Sacred Memorial & Eternal Inspiration</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
          
          <h2 className={`font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
          }`}>
            {tribute.sectionTitle}
          </h2>
          <div className="w-32 h-0.5 mx-auto mt-5 mb-4 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          {/* Portrait View Switcher (Glass Tabs) */}
          <div className="pt-2 flex items-center justify-center">
            <div className={`inline-flex items-center p-1.5 rounded-2xl border backdrop-blur-xl text-xs font-display font-semibold gap-1 ${
              isDark 
                ? 'bg-slate-900/70 border-amber-500/30' 
                : 'bg-white/70 border-amber-500/30 shadow-sm'
            }`}>
              <button
                type="button"
                onClick={() => setViewMode('together')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all ${
                  viewMode === 'together'
                    ? isDark ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'bg-gradient-to-r from-[#b38728] to-[#d4af37] text-white shadow-md font-bold'
                    : isDark ? 'text-slate-400 hover:text-amber-300' : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Together in Grace</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('individual')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all ${
                  viewMode === 'individual'
                    ? isDark ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'bg-gradient-to-r from-[#b38728] to-[#d4af37] text-white shadow-md font-bold'
                    : isDark ? 'text-slate-400 hover:text-amber-300' : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Individual Portraits</span>
              </button>
            </div>
          </div>
        </div>

        {/* Central Master Shrine Plaque with Multi-layer Spatial Glassmorphism */}
        <div className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 border transition-all duration-500 shadow-2xl backdrop-blur-2xl ${
          isDark
            ? 'bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/85 border-amber-500/30 shadow-amber-950/40'
            : 'bg-gradient-to-b from-white/85 via-white/70 to-[#f6f9fc]/85 border-white/80 shadow-2xl shadow-amber-950/10'
        }`}>

          {/* Golden Corner Floral Ornaments */}
          <div className="absolute top-4 left-4 text-amber-500/60 pointer-events-none select-none">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3h8M3 3v8M3 3l6 6" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 text-amber-500/60 pointer-events-none select-none">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 3h-8M21 3v8M21 3l-6 6" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 text-amber-500/60 pointer-events-none select-none">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21h8M3 21v-8M3 21l6-6" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 text-amber-500/60 pointer-events-none select-none">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 21h-8M21 21v-8M21 21l-6-6" />
            </svg>
          </div>

          {/* Sacred Diya (Eternal Flame) with Glass Refraction Halo */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="relative group">
              {/* Flame Glow Pulse */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-400/40 rounded-full blur-lg animate-ping" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-0.5 shadow-xl shadow-amber-500/40 flex items-center justify-center backdrop-blur-md">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${
                  isDark ? 'bg-slate-950/90' : 'bg-white/95'
                }`}>
                  <Flame className="w-8 h-8 text-amber-500 animate-pulse drop-shadow-[0_2px_10px_rgba(245,158,11,0.7)]" />
                </div>
              </div>
            </div>
            <span className={`text-[11px] font-display font-semibold tracking-widest uppercase mt-3 ${
              isDark ? 'text-amber-400/90' : 'text-amber-800'
            }`}>
              Eternal Light • Eternal Blessings
            </span>
          </div>

          {/* VIEW 1: TOGETHER IN GRACE (New High-Resolution Couple Photo in Luxury Glass Frame) */}
          {viewMode === 'together' && (
            <div className="max-w-3xl mx-auto mb-14 text-center animate-fade-in">
              {/* Luxury Glass Frame with Gold Trim */}
              <div 
                onClick={() => setSelectedPhoto({ 
                  url: tribute.togetherPhotoUrl, 
                  name: `${tribute.father} & ${tribute.mother}`, 
                  role: "Beloved Parents • Sacred Blessings" 
                })}
                className="relative cursor-pointer group/jointPhoto mx-auto"
                title="Click to view full portrait"
              >
                {/* Frosted Glass Outer Bevel with 24K Gold Trim */}
                <div className="p-2.5 sm:p-4 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-white/80 to-amber-400/50 backdrop-blur-2xl border-2 border-amber-400/60 shadow-2xl transition-all duration-300 group-hover/jointPhoto:scale-[1.01] group-hover/jointPhoto:shadow-amber-500/20">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/10] bg-slate-900 shadow-inner">
                    <img 
                      src={tribute.togetherPhotoUrl} 
                      alt="Late Sri Simhadri Prabhakar Rao & Late Smt. Simhadri Venkatalaxmi" 
                      className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.02]"
                    />
                    
                    {/* Subtle glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 opacity-60 pointer-events-none" />

                    {/* Hover Zoom Pill */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/jointPhoto:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-black/75 text-amber-300 text-xs font-display font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-xl border border-amber-400/40">
                        <ZoomIn className="w-4 h-4" /> Click to Expand Portrait
                      </span>
                    </div>

                    {/* Inset Gold Caption on Bottom Edge */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-left">
                      <div>
                        <p className="font-cinzel text-xs sm:text-sm md:text-base font-bold text-amber-200 drop-shadow">
                          Late Sri Simhadri Prabhakar Rao & Late Smt. Simhadri Venkatalaxmi
                        </p>
                        <p className="text-[10px] sm:text-xs font-sans text-amber-100/80">
                          Loving Parents • Eternal Guiding Light
                        </p>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[10px] font-display uppercase tracking-widest backdrop-blur-sm">
                        Forever in Our Hearts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glassmorphic Floral Ribbon Badge */}
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-amber-500/40 shadow-md backdrop-blur-xl text-xs font-display font-bold text-amber-800 dark:text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>United in Grace, Love & Virtues</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>

              {/* Both Names in Radiant 24K Gold Lettering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 pt-8 border-t border-amber-500/20 max-w-2xl mx-auto">
                <div className="space-y-1.5">
                  <h3 className="font-cinzel text-lg sm:text-xl lg:text-2xl font-black tracking-wide bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent drop-shadow-sm">
                    {tribute.father}
                  </h3>
                  <p className={`text-xs font-sans italic ${isDark ? 'text-amber-200/70' : 'text-amber-800/80'}`}>
                    Beloved Father • Foundation of Values
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-cinzel text-lg sm:text-xl lg:text-2xl font-black tracking-wide bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent drop-shadow-sm">
                    {tribute.mother}
                  </h3>
                  <p className={`text-xs font-sans italic ${isDark ? 'text-amber-200/70' : 'text-amber-800/80'}`}>
                    Beloved Mother • Unconditional Love
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: INDIVIDUAL GLASS-BORDERED PORTRAITS */}
          {viewMode === 'individual' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto mb-10 items-stretch animate-fade-in">
              
              {/* Father Glass Portrait Card */}
              <div className={`flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 backdrop-blur-xl ${
                isDark 
                  ? 'bg-slate-900/60 border-amber-500/30 shadow-lg shadow-slate-950/60' 
                  : 'bg-white/70 border-amber-500/30 shadow-xl shadow-amber-950/5'
              }`}>
                <div 
                  onClick={() => setSelectedPhoto({ url: tribute.fatherPhotoUrl, name: tribute.father, role: "Beloved Father" })}
                  className="relative cursor-pointer mb-5 group/photo"
                  title="Click to view full portrait"
                >
                  <div className="w-44 h-56 sm:w-52 sm:h-64 p-1.5 rounded-2xl bg-gradient-to-tr from-[#b38728] via-[#fbf5b7] to-[#d4af37] shadow-2xl relative overflow-hidden transition-transform duration-300 group-hover/photo:scale-[1.02]">
                    <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                      <img 
                        src={tribute.fatherPhotoUrl} 
                        alt={tribute.father} 
                        className="w-full h-full object-cover object-top filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end justify-center pb-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/75 text-amber-300 text-[11px] font-display flex items-center gap-1 shadow backdrop-blur-sm">
                          <ZoomIn className="w-3 h-3" /> View
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 text-slate-950 font-display text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Beloved Father
                  </div>
                </div>

                <div className="space-y-1 mt-2">
                  <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-black tracking-wide bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent drop-shadow-sm">
                    {tribute.father}
                  </h3>
                  <p className={`text-xs font-sans italic ${isDark ? 'text-amber-200/70' : 'text-amber-800/80'}`}>
                    Eternal Guidance & Foundation of Values
                  </p>
                </div>
              </div>

              {/* Mother Glass Portrait Card */}
              <div className={`flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 backdrop-blur-xl ${
                isDark 
                  ? 'bg-slate-900/60 border-amber-500/30 shadow-lg shadow-slate-950/60' 
                  : 'bg-white/70 border-amber-500/30 shadow-xl shadow-amber-950/5'
              }`}>
                <div 
                  onClick={() => setSelectedPhoto({ url: tribute.motherPhotoUrl, name: tribute.mother, role: "Beloved Mother" })}
                  className="relative cursor-pointer mb-5 group/photo"
                  title="Click to view full portrait"
                >
                  <div className="w-44 h-56 sm:w-52 sm:h-64 p-1.5 rounded-2xl bg-gradient-to-tr from-[#b38728] via-[#fbf5b7] to-[#d4af37] shadow-2xl relative overflow-hidden transition-transform duration-300 group-hover/photo:scale-[1.02]">
                    <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                      <img 
                        src={tribute.motherPhotoUrl} 
                        alt={tribute.mother} 
                        className="w-full h-full object-cover object-top filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end justify-center pb-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/75 text-amber-300 text-[11px] font-display flex items-center gap-1 shadow backdrop-blur-sm">
                          <ZoomIn className="w-3 h-3" /> View
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 text-slate-950 font-display text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Beloved Mother
                  </div>
                </div>

                <div className="space-y-1 mt-2">
                  <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-black tracking-wide bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent drop-shadow-sm">
                    {tribute.mother}
                  </h3>
                  <p className={`text-xs font-sans italic ${isDark ? 'text-amber-200/70' : 'text-amber-800/80'}`}>
                    Unconditional Love, Sacrifices & Strength
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Glassmorphic Special Quotation Banner */}
          <div className={`max-w-3xl mx-auto my-14 sm:my-16 p-8 sm:p-12 rounded-3xl border text-center relative overflow-hidden backdrop-blur-2xl shadow-xl transition-all ${
            isDark
              ? 'bg-amber-950/20 border-amber-500/35 shadow-amber-950/40'
              : 'bg-white/80 border-amber-400/50 shadow-xl shadow-amber-950/5'
          }`}>
            <Quote className={`w-9 h-9 mx-auto mb-4 opacity-30 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
            
            <p className={`font-garamond italic font-bold text-2xl sm:text-3xl md:text-4xl leading-relaxed tracking-wide ${
              isDark ? 'text-amber-100 drop-shadow-md' : 'text-[#0a0a0a]'
            }`}>
              {tribute.specialQuote}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-display font-medium tracking-wider uppercase border border-amber-500/30 bg-amber-500/10 text-amber-500 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tribute.dedicationTag}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Heartfelt Body Paragraphs (Spacious & Legible) */}
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7 text-center font-sans text-base sm:text-lg leading-relaxed">
            {tribute.bodyParagraphs.map((para, idx) => (
              <p 
                key={idx} 
                className={`${
                  isDark ? 'text-slate-300' : 'text-[#1c1c1c]'
                } ${idx === 0 ? 'font-medium' : ''}`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Sacred Daughter's Pledge & Dedication with Frosted Divider */}
          <div className={`mt-16 pt-10 border-t max-w-2xl mx-auto text-center space-y-5 ${
            isDark ? 'border-amber-500/20' : 'border-amber-600/20'
          }`}>
            <p className={`font-garamond italic font-bold text-xl sm:text-2xl md:text-3xl tracking-wide leading-snug ${
              isDark ? 'text-amber-200 drop-shadow-sm' : 'text-[#0a0a0a]'
            }`}>
              “{tribute.pledge}”
            </p>

            <p className={`font-garamond italic font-bold text-xl sm:text-2xl tracking-wider ${
              isDark ? 'text-amber-400' : 'text-amber-700'
            }`}>
              {tribute.closing}
            </p>

            <div className="pt-4">
              <p className={`font-display text-sm uppercase tracking-widest font-extrabold ${
                isDark ? 'text-slate-200' : 'text-[#0a0a0a]'
              }`}>
                — {tribute.signature}
              </p>
              <p className={`text-xs font-sans mt-1 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Advocate • High Courts of Telangana & Andhra Pradesh
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Portrait View */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`max-w-2xl w-full rounded-3xl p-4 sm:p-5 border relative backdrop-blur-2xl ${
              isDark ? 'bg-slate-900/90 border-amber-500/40' : 'bg-white/95 border-amber-500/40 shadow-2xl'
            }`}
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl max-h-[80vh] flex items-center justify-center bg-black">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.name} 
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
            <div className="text-center mt-4 space-y-1">
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-amber-500">
                {selectedPhoto.name}
              </h4>
              <p className="text-xs font-sans text-slate-400">
                {selectedPhoto.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

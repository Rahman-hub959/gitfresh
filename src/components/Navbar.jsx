import React, { useState, useEffect } from 'react';
import { Scale, AlertCircle, Menu, X, PhoneCall, Heart } from 'lucide-react';

export default function Navbar({ onOpenUrgent, contactData, isDark = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Concisely worded links to avoid horizontal congestion
  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Practice", href: "#practice-areas" },
    { name: "Opinions", href: "#opinions" },
    { name: "About", href: "#about" },
    { name: "Parents Tribute", href: "#parents-tribute", highlight: true },
    { name: "Awareness", href: "#awareness" },
    { name: "Chambers", href: "#chambers" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? isDark
          ? 'bg-[#070d18]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-xl shadow-slate-950/50' 
          : 'bg-[#faf8f5]/95 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-[#1a0f0c]/5'
        : isDark
          ? 'bg-[#070d18]/85 backdrop-blur-md border-b border-white/5'
          : 'bg-[#faf8f5]/90 backdrop-blur-md border-b border-amber-500/10'
    }`}>
      <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-4">
          
          {/* Logo & Identity (Fixed no-wrap to prevent awkward 2-line break) */}
          <a href="#" className="flex items-center gap-3.5 group text-left flex-shrink-0">
            <div className={`w-12 h-12 rounded-xl p-1 flex items-center justify-center transition-all duration-300 shadow-md flex-shrink-0 ${
              isDark 
                ? 'bg-slate-900 border border-amber-500/40 text-amber-400 group-hover:border-amber-400 shadow-amber-950/40' 
                : 'bg-white border border-amber-500/30 text-amber-800 shadow-sm group-hover:border-amber-500'
            }`}>
              <img 
                src="/assets/svl-advocate-seal.png" 
                alt="Advocate Simhadri Vasantha Lakshmi Logo" 
                className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform" 
              />
            </div>
            
            <div className="flex flex-col whitespace-nowrap">
              <span className={`font-display text-sm sm:text-base font-extrabold tracking-wide transition-colors ${
                isDark ? 'text-slate-100 group-hover:text-amber-300' : 'text-[#0a0a0a] group-hover:text-amber-700'
              }`}>
                SIMHADRI VASANTHA LAKSHMI
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-sans font-semibold tracking-wider uppercase">
                <span className={isDark ? 'text-amber-400' : 'text-amber-700'}>Advocate</span>
                <span className="opacity-35">•</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>High Courts of TG & AP</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Spacious, airy typography) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[12px] font-display font-semibold tracking-wider uppercase transition-all relative py-1 flex items-center gap-1 ${
                  link.highlight 
                    ? isDark ? 'text-amber-300 font-bold' : 'text-amber-800 font-bold'
                    : isDark
                      ? 'text-slate-300 hover:text-amber-300'
                      : 'text-[#2a2a2a] hover:text-amber-700'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.highlight && <Heart className="w-3 h-3 text-amber-500 fill-amber-500 animate-pulse" />}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Medium Screens (lg): Core Links only to prevent crowding */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4">
            {navLinks.filter(l => ["Philosophy", "Practice", "About", "Parents Tribute", "Chambers"].includes(l.name)).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] font-display font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                  link.highlight 
                    ? isDark ? 'text-amber-300 font-bold' : 'text-amber-800 font-bold'
                    : isDark
                      ? 'text-slate-300 hover:text-amber-300'
                      : 'text-[#2a2a2a] hover:text-amber-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Clean, Uncluttered & Spacious */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            {/* Urgent Assistance Button (Compact Pill) */}
            <button
              onClick={onOpenUrgent}
              title="Urgent Legal Assistance (Bail / Injunction)"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-200 border shadow-sm bg-red-950/40 border-red-500/40 text-red-300 hover:bg-red-900/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Urgent Aid</span>
            </button>

            {/* Consult Chambers CTA Button */}
            <a
              href="#chambers"
              onClick={(e) => handleLinkClick(e, "#chambers")}
              className="px-4 sm:px-5 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20"
            >
              <span>Consult Chambers</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border transition-colors bg-slate-900 border-slate-700 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-fade-in ${
          isDark ? 'bg-[#070d18]/98 border-slate-800' : 'bg-[#faf8f5]/98 border-amber-500/20 shadow-xl'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-xl text-xs font-display font-semibold tracking-wider uppercase transition-colors flex items-center justify-between ${
                  isDark ? 'text-slate-200 hover:bg-slate-800/60' : 'text-[#0a0a0a] hover:bg-amber-50'
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUrgent();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-red-600/10 text-red-700 dark:text-red-400 border border-red-500/30"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Urgent Legal Aid</span>
            </button>

            <a
              href="#chambers"
              onClick={(e) => handleLinkClick(e, "#chambers")}
              className={`w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-center transition-all ${
                isDark
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950'
                  : 'bg-[#0a0a0a] text-amber-300 border border-amber-500/40'
              }`}
            >
              Consult Chambers
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

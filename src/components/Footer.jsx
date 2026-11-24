import React from 'react';
import { Scale, ShieldCheck, ArrowUp } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalContent';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`border-t text-xs relative overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950 border-amber-500/20 text-slate-400' 
        : 'bg-[#1a0f0c] border-[#953a2e]/30 text-[#e5ded8]'
    }`}>
      {/* Top Banner with Quote */}
      <div className={`border-b py-8 sm:py-10 px-4 sm:px-8 text-center ${
        isDark ? 'border-slate-900 bg-[#040812]' : 'border-[#3d1812] bg-[#241511]'
      }`}>
        <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3">
          <p className="font-garamond italic font-bold text-xl sm:text-2xl lg:text-3xl text-amber-100 leading-relaxed tracking-wide drop-shadow-sm">
            “Let knowledge guide the argument, let integrity define the profession, and let justice remain the ultimate purpose.”
          </p>
          <p className={`text-[11px] font-display uppercase tracking-widest font-semibold ${
            isDark ? 'text-amber-400/80' : 'text-[#dba89f]'
          }`}>
            Simhadri Vasantha Lakshmi • Advocate
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-14">
          
          {/* Col 1: Identity */}
          <div className="space-y-3 md:col-span-2 text-left">
            <div className={`flex items-center gap-3 ${isDark ? 'text-amber-400' : 'text-[#dba89f]'}`}>
              <div className="w-10 h-10 rounded-xl border-2 border-amber-400/80 flex items-center justify-center p-0.5 overflow-hidden shadow-sm bg-white">
                <img 
                  src="/assets/svl-advocate-seal.png" 
                  alt="Simhadri Vasantha Lakshmi Logo" 
                  className="w-full h-full object-contain rounded-lg" 
                />
              </div>
              <span className="font-display text-base font-bold text-white tracking-wider">
                SIMHADRI VASANTHA LAKSHMI
              </span>
            </div>

            <p className="text-xs font-sans text-[#c7beba] max-w-md leading-relaxed">
              Advocate associated with the High Courts of Telangana and Andhra Pradesh. Practicing across civil & property matters, family disputes, criminal litigation, corporate & banking advisory, cyber law and title scrutiny.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#dba89f] font-mono">
              <span>B.Sc.</span>
              <span>•</span>
              <span>MBA</span>
              <span>•</span>
              <span>LL.B.</span>
              <span>•</span>
              <span>LL.M. (Pursuing)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="text-left space-y-2.5">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Practice Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-sans text-[#c7beba]">
              <li><a href="#philosophy" className="hover:text-white transition-colors">My Philosophy</a></li>
              <li><a href="#practice-areas" className="hover:text-white transition-colors">10 Practice Verticals</a></li>
              <li><a href="#opinions" className="hover:text-white transition-colors">Opinions & Title Scrutiny</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About the Advocate</a></li>
              <li><a href="#parents-tribute" className="hover:text-amber-400 transition-colors font-medium">My Inspiration – Parents Tribute</a></li>
              <li><a href="#awareness" className="hover:text-white transition-colors">Legal Awareness Guides</a></li>
              <li><a href="#chambers" className="hover:text-white transition-colors">Chambers & Consultations</a></li>
            </ul>
          </div>

          {/* Col 3: Regulatory & BCI Compliance */}
          <div className="text-left space-y-2.5">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#dba89f]" />
              <span>Bar Council Notice</span>
            </h4>
            <p className="text-[11px] font-sans text-[#c7beba] leading-relaxed">
              This platform adheres strictly to the Bar Council of India rules prohibiting solicitation and advertisement. All content is for educational awareness and academic orientation only.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3d1812] pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-[#8a7672] text-[11px] font-sans">
          <p>
            © {new Date().getFullYear()} Simhadri Vasantha Lakshmi, Advocate. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Jurisdictions: High Court of Telangana & High Court of Andhra Pradesh
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2b1713] hover:bg-[#3d1812] text-[#dba89f] hover:text-white text-xs font-display transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

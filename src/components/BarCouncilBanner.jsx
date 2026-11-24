import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function BarCouncilBanner({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('bci_disclaimer_acknowledged');
    if (!seen) {
      setIsOpen(true);
    } else {
      setAcknowledged(true);
    }
  }, []);

  const handleAcknowledge = () => {
    sessionStorage.setItem('bci_disclaimer_acknowledged', 'true');
    setIsOpen(false);
    setAcknowledged(true);
  };

  return (
    <>
      {/* Full Modal on First Visit */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className={`max-w-2xl w-full border rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left ${
            isDark ? 'bg-slate-900 border-amber-500/40' : 'bg-[#fbf7f3] border-[#953a2e]/30'
          }`}>
            <div className={`flex items-center gap-3 mb-4 ${isDark ? 'text-amber-400' : 'text-[#953a2e]'}`}>
              <div className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-amber-500/10 border-amber-500/30' : 'bg-[#f8ece9] border-[#953a2e]/25'
              }`}>
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-display text-lg sm:text-xl font-bold tracking-tight ${
                  isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                }`}>
                  Bar Council of India Disclaimer
                </h3>
                <p className={`text-xs font-sans ${isDark ? 'text-amber-300/80' : 'text-[#64534f]'}`}>
                  Compliance with Rule 36, Bar Council of India Rules
                </p>
              </div>
            </div>

            <div className={`text-sm font-sans space-y-3 leading-relaxed border-t border-b py-4 my-4 ${
              isDark ? 'border-slate-800 text-slate-300' : 'border-[#953a2e]/15 text-[#333333]'
            }`}>
              <p>
                As per the rules of the <strong>Bar Council of India</strong>, advocates are prohibited from soliciting work or advertising in any manner. 
              </p>
              <p>
                By proceeding to access this website (<strong>Simhadri Vasantha Lakshmi, Advocate</strong>), the user acknowledges and confirms that:
              </p>
              <ul className={`list-disc pl-5 space-y-2 text-xs sm:text-sm ${
                isDark ? 'text-slate-300' : 'text-[#443834]'
              }`}>
                <li>
                  You are seeking information relating to legal practice, academic credentials, and general legal awareness voluntarily of your own accord.
                </li>
                <li>
                  There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by the Advocate or her office.
                </li>
                <li>
                  The content published on this platform is purely educational and informative in nature and must not be construed as legal advice or creating an advocate-client relationship.
                </li>
                <li>
                  Any decision made on the basis of information on this website is solely at the user's discretion, and professional engagement requires independent consultation.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className={`text-xs font-sans text-center sm:text-left ${
                isDark ? 'text-slate-400' : 'text-[#64534f]'
              }`}>
                High Courts of Telangana & Andhra Pradesh Jurisdiction
              </span>
              <button
                onClick={handleAcknowledge}
                className={`w-full sm:w-auto px-6 py-2.5 font-display font-semibold rounded-xl text-sm transition-all duration-200 shadow-md active:scale-95 ${
                  isDark
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 shadow-amber-500/20'
                    : 'bg-[#953a2e] hover:bg-[#921e0f] text-white shadow-[#953a2e]/20'
                }`}
              >
                I Acknowledge & Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Dignified Minimal Badge on top of screen */}
      <div className={`border-b py-1.5 px-4 text-xs font-sans transition-colors ${
        isDark ? 'bg-slate-950 border-amber-500/15 text-slate-400' : 'bg-[#241511] border-[#3d1812] text-[#e5ded8]'
      }`}>
        <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className={isDark ? 'text-amber-200/90 font-medium' : 'text-white font-medium'}>
              Professional Practice Platform
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className={`hidden md:inline ${isDark ? 'text-slate-400' : 'text-[#c7beba]'}`}>
              Associated with High Courts of Telangana & Andhra Pradesh
            </span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`text-[11px] underline underline-offset-2 flex-shrink-0 ${
              isDark ? 'text-amber-400/80 hover:text-amber-300' : 'text-[#dba89f] hover:text-white'
            }`}
          >
            BCI Disclaimer
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { 
  FileSearch, CheckCircle2, ShieldCheck, 
  Sparkles, CheckSquare, Square 
} from 'lucide-react';
import { OPINION_PIPELINE } from '../data/legalContent';

export default function LegalOpinionsSection({ isDark }) {
  const [activeStep, setActiveStep] = useState(0);

  // Interactive Document Scrutiny Checklist
  const [checkedItems, setCheckedItems] = useState({
    parentDeeds: true,
    ec30Years: true,
    revenueRecord: false,
    layoutSanction: false,
    nalaPermission: false,
    sec22aCheck: false,
    taxReceipts: true,
  });

  const checklistItems = [
    { id: 'parentDeeds', label: 'Parent / Link Deeds (Trace uninterrupted link for 30+ years)', weight: 20 },
    { id: 'ec30Years', label: 'Nil Encumbrance Certificate (EC) from Sub-Registrar (30+ years)', weight: 20 },
    { id: 'revenueRecord', label: 'Revenue Records / Pattadar Passbook / Dharani or Meebhoomi 1-B', weight: 15 },
    { id: 'layoutSanction', label: 'Approved Layout Plan (HMDA / GHMC / APCRDA / DTCP approved)', weight: 15 },
    { id: 'nalaPermission', label: 'NALA Conversion (Non-Agricultural Land Assessment Order)', weight: 10 },
    { id: 'sec22aCheck', label: 'Section 22-A Clearance (Confirming land is not in Prohibited List)', weight: 10 },
    { id: 'taxReceipts', label: 'Latest Property Tax, Electricity & Municipal Dues Clearance', weight: 10 },
  ];

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const readinessScore = checklistItems.reduce((acc, item) => {
    return checkedItems[item.id] ? acc + item.weight : acc;
  }, 0);

  const getScoreVerdict = (score) => {
    if (score >= 85) return { 
      text: "High Document Preparedness", 
      color: isDark ? "text-emerald-400" : "text-emerald-700", 
      bg: isDark ? "bg-emerald-500/10 border-emerald-500/30" : "bg-emerald-50 border-emerald-300" 
    };
    if (score >= 50) return { 
      text: "Moderate Preparedness — Additional Scrutiny Needed", 
      color: isDark ? "text-amber-400" : "text-[#953a2e]", 
      bg: isDark ? "bg-amber-500/10 border-amber-500/30" : "bg-[#f8ece9] border-[#953a2e]/30" 
    };
    return { 
      text: "Preliminary Stage — Essential Title Records Missing", 
      color: isDark ? "text-red-400" : "text-red-700", 
      bg: isDark ? "bg-red-500/10 border-red-500/30" : "bg-red-50 border-red-300" 
    };
  };

  const verdict = getScoreVerdict(readinessScore);

  return (
    <section id="opinions" className={`py-10 sm:py-14 md:py-18 lg:py-20 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark ? 'bg-slate-950 border-amber-500/20' : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background accents */}
      <div className={`absolute top-1/2 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3.5 sm:space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-[#f8ece9] border-[#953a2e]/25 text-[#953a2e]'
          }`}>
            <FileSearch className="w-3.5 h-3.5" />
            <span>Title Verification & Drafting Precision</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
          }`}>
            Legal Opinions & <span className={isDark ? 'text-gold-gradient' : 'text-[#953a2e]'}>Documentation</span>
          </h2>

          <div className={`p-6 sm:p-8 rounded-2xl border max-w-3xl mx-auto shadow-lg ${
            isDark ? 'bg-slate-900/90 border-amber-500/35 shadow-amber-950/20' : 'bg-[#fbf7f3] border-[#953a2e]/25'
          }`}>
            <p className={`font-garamond italic font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-wide ${
              isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#1a0f0c]'
            }`}>
              “A legally sound decision begins with proper examination of documents.”
            </p>
          </div>

          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#64534f]'
          }`}>
            Property transactions, financial arrangements, business agreements and personal legal matters often require careful legal scrutiny. Legal documentation requires precision, clarity and compliance with applicable laws.
          </p>
        </div>

        {/* 4-Step Opinion Process Pipeline */}
        <div className="mb-12 sm:mb-16">
          <h3 className={`font-display text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 ${
            isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
          }`}>
            The 4-Stage Legal Opinion Protocol
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {OPINION_PIPELINE.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative rounded-2xl p-7 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between border ${
                    isSelected
                      ? isDark
                        ? 'bg-slate-900 border-2 border-amber-500 shadow-2xl -translate-y-1.5'
                        : 'bg-[#f8ece9] border-2 border-[#953a2e] shadow-lg shadow-[#953a2e]/10 -translate-y-1.5'
                      : isDark
                        ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40'
                        : 'bg-[#fbf7f3] border-[#953a2e]/15 hover:border-[#953a2e]/40 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-cinzel text-2xl font-black tracking-wide ${
                        isDark ? 'text-amber-400' : 'text-[#953a2e]'
                      }`}>
                        {item.step}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display uppercase tracking-widest font-extrabold transition-all border ${
                        isSelected 
                          ? isDark 
                            ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 border-amber-200 shadow-md shadow-amber-500/30' 
                            : 'bg-[#953a2e] text-white border-[#953a2e] shadow-md shadow-[#953a2e]/20' 
                          : isDark 
                            ? 'bg-slate-950/80 border-amber-500/30 text-amber-300 hover:border-amber-400/50 shadow-sm' 
                            : 'bg-white border-[#953a2e]/25 text-[#953a2e] shadow-sm'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isSelected 
                            ? isDark ? 'bg-slate-950 animate-pulse' : 'bg-white animate-pulse' 
                            : isDark ? 'bg-amber-400' : 'bg-[#953a2e]'
                        }`} />
                        <span>Stage {idx + 1}</span>
                      </span>
                    </div>

                    <h4 className={`font-display text-base font-bold mb-2 leading-snug ${
                      isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                    }`}>
                      {item.name}
                    </h4>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-[#64534f]'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-sans ${
                    isDark ? 'border-slate-800 text-amber-400/80' : 'border-[#953a2e]/15 text-[#953a2e]'
                  }`}>
                    <span className="font-semibold">Due Diligence Protocol</span>
                    <span>{isSelected ? 'Selected' : 'Click to View'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Property Title Scrutiny Tool */}
        <div className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl ${
          isDark ? 'bg-slate-900/80 border-amber-500/30 shadow-amber-950/20' : 'bg-[#fbf7f3] border-[#953a2e]/25 shadow-[#1a0f0c]/6'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-8 mb-8 ${
            isDark ? 'border-slate-800' : 'border-[#953a2e]/15'
          }`}>
            <div>
              <div className={`flex items-center gap-2 text-xs font-display font-semibold tracking-wider uppercase mb-1.5 ${
                isDark ? 'text-amber-400' : 'text-[#953a2e]'
              }`}>
                <Sparkles className="w-4 h-4" />
                <span>Interactive Client Scrutiny Tool</span>
              </div>
              <h3 className={`font-display text-xl sm:text-2xl font-bold ${
                isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
              }`}>
                Property Title Document Readiness Checklist
              </h3>
              <p className={`font-sans text-xs sm:text-sm mt-1.5 ${
                isDark ? 'text-slate-400' : 'text-[#64534f]'
              }`}>
                Select the documents currently in your possession to evaluate preliminary title scrutiny preparedness.
              </p>
            </div>

            {/* Score Pill */}
            <div className="flex flex-col items-center sm:items-end flex-shrink-0">
              <div className="flex items-baseline gap-1">
                <span className={`font-mono text-3xl sm:text-4xl font-extrabold ${
                  isDark ? 'text-amber-400' : 'text-[#953a2e]'
                }`}>{readinessScore}</span>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#64534f]'}`}>/ 100</span>
              </div>
              <div className={`mt-2 px-3.5 py-1 rounded-full text-[11px] font-display font-semibold border ${verdict.bg} ${verdict.color}`}>
                {verdict.text}
              </div>
            </div>
          </div>

          {/* Interactive Checklist items */}
          <div className="grid grid-cols-1 gap-3.5">
            {checklistItems.map((item) => {
              const isChecked = checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                    isChecked
                      ? isDark
                        ? 'bg-amber-500/10 border-amber-500/40 text-slate-100'
                        : 'bg-[#f8ece9] border-[#953a2e]/40 text-[#1a0f0c]'
                      : isDark
                        ? 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        : 'bg-[#faf6f4] border-[#953a2e]/15 text-[#64534f] hover:border-[#953a2e]/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {isChecked ? (
                      <CheckSquare className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? 'text-amber-400' : 'text-[#953a2e]'
                      }`} />
                    ) : (
                      <Square className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? 'text-slate-600' : 'text-[#8a7672]'
                      }`} />
                    )}
                    <span className="text-xs sm:text-sm font-sans font-medium">
                      {item.label}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border ml-2 flex-shrink-0 ${
                    isDark 
                      ? 'text-amber-400 bg-slate-900 border-slate-800' 
                      : 'text-[#953a2e] bg-[#ffffff] border-[#953a2e]/20'
                  }`}>
                    +{item.weight}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Scrutiny Advisory Note */}
          <div className={`mt-10 p-5 sm:p-6 rounded-2xl border text-xs space-y-2.5 ${
            isDark 
              ? 'bg-slate-950/80 border-amber-500/20 text-slate-400' 
              : 'bg-[#faf6f4] border-[#953a2e]/20 text-[#64534f]'
          }`}>
            <div className={`flex items-center gap-2 font-display font-semibold ${
              isDark ? 'text-amber-300' : 'text-[#953a2e]'
            }`}>
              <ShieldCheck className="w-4 h-4" />
              <span>Advocate Scrutiny Note</span>
            </div>
            <p className="font-sans leading-relaxed">
              The legal opinion process involves examination of relevant documents, verification of available records, identification of legal concerns, and preparation of a reasoned written opinion based on the material provided. Prior to investing life savings or commercial capital in immovable properties, independent verification before the High Court advocate is essential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

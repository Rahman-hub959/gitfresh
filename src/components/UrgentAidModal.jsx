import React from 'react';
import { 
  X, AlertTriangle, Zap, ArrowRight 
} from 'lucide-react';

export default function UrgentAidModal({ isOpen, onClose, onScheduleUrgent, isDark }) {
  if (!isOpen) return null;

  const urgentCategories = [
    {
      title: "Apprehension of Arrest / Bail",
      remedy: "Anticipatory Bail (BNSS Sec 482 / CrPC 438) & Interim Bail",
      immediateAction: "Do not switch off phone; preserve alibi records, summons or FIR copies; avoid signing blank papers.",
      timeframe: "Immediate High Court / Sessions Court Motion"
    },
    {
      title: "Illegal Demolition or Dispossession",
      remedy: "Order 39 Rules 1 & 2 CPC / High Court Writ Petition (Art 226)",
      immediateAction: "Gather registered title deed, latest tax receipt, mutation copy, and date-stamped photographs/videos of property.",
      timeframe: "Same-Day House Motion / Vacation Court Mention"
    },
    {
      title: "Domestic Violence & Physical Threat",
      remedy: "PWDV Act Section 12 Ex-Parte Protection & Residence Orders",
      immediateAction: "Secure immediate safety, preserve medical wound certificates, WhatsApp abuse evidence, and dial 181/112.",
      timeframe: "Immediate Magistrate Application"
    },
    {
      title: "Cyber Financial Fraud (Within 2-24 Hrs)",
      remedy: "Helpline 1930 & Section 43/66 IT Act Police Freeze",
      immediateAction: "Call 1930 immediately to freeze beneficiary bank accounts. File acknowledgment at cybercrime.gov.in.",
      timeframe: "Immediate 'Golden Hour' Action"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className={`max-w-2xl w-full border-2 rounded-2xl shadow-2xl overflow-hidden relative text-left max-h-[90vh] flex flex-col ${
        isDark ? 'bg-slate-900 border-red-500/50 text-slate-100' : 'bg-[#fbf7f3] border-[#953a2e]/50 text-[#1a0f0c]'
      }`}>
        
        {/* Urgent Header */}
        <div className={`p-6 border-b flex items-start justify-between ${
          isDark ? 'bg-red-950/40 border-red-500/30' : 'bg-[#f8ece9] border-[#953a2e]/30'
        }`}>
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className={`p-1 rounded ${isDark ? 'bg-red-500/20 text-red-400' : 'bg-[#eccfc9] text-[#953a2e]'}`}>
                <Zap className="w-4 h-4 animate-bounce" />
              </span>
              <span className={`text-xs font-display font-bold uppercase tracking-widest ${
                isDark ? 'text-red-400' : 'text-[#953a2e]'
              }`}>
                Time-Sensitive Protocol
              </span>
            </div>
            <h3 className={`font-display text-xl sm:text-2xl font-bold ${
              isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
            }`}>
              Urgent Legal Assistance
            </h3>
            <p className={`text-xs font-sans ${isDark ? 'text-red-200/80' : 'text-[#64534f]'}`}>
              Information and legal guidance relating to time-sensitive matters, including bail, domestic violence, urgent court proceedings and other immediate legal concerns.
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-[#faf6f4] text-[#64534f] hover:text-[#1a0f0c]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Urgent Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm font-sans">
          
          <div className={`p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${
            isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-[#f8ece9] border-[#953a2e]/25 text-[#953a2e]'
          }`}>
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              For court motions involving liberty or injunctions, courts require verifiable documentation. Review the checklist below before contacting chambers.
            </span>
          </div>

          <div className="space-y-3">
            {urgentCategories.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all space-y-2 ${
                  isDark 
                    ? 'bg-slate-950/70 border-slate-800 hover:border-red-500/30' 
                    : 'bg-[#faf6f4] border-[#953a2e]/15 hover:border-[#953a2e]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`font-display text-sm font-bold ${
                    isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                  }`}>
                    {item.title}
                  </h4>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    isDark 
                      ? 'text-red-400 bg-red-950/60 border-red-500/20' 
                      : 'text-[#953a2e] bg-[#f8ece9] border-[#953a2e]/20'
                  }`}>
                    {item.timeframe}
                  </span>
                </div>

                <p className={`text-xs font-semibold font-mono ${
                  isDark ? 'text-amber-300/90' : 'text-[#953a2e]'
                }`}>
                  Remedy: {item.remedy}
                </p>

                <p className={`text-xs font-sans leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#64534f]'
                }`}>
                  <strong>Critical Step:</strong> {item.immediateAction}
                </p>
              </div>
            ))}
          </div>

          <p className={`text-[11px] font-sans italic border-t pt-3 ${
            isDark ? 'border-slate-800 text-slate-500' : 'border-[#953a2e]/15 text-[#8a7672]'
          }`}>
            *All legal work is subject to professional engagement, applicable law, court jurisdiction and professional availability.
          </p>

        </div>

        {/* Footer Actions */}
        <div className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-red-500/20' : 'bg-[#f8ece9] border-[#953a2e]/20'
        }`}>
          <span className={`text-xs font-sans ${isDark ? 'text-slate-400' : 'text-[#64534f]'}`}>
            Emergency Chamber Liaison
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-display font-semibold w-1/2 sm:w-auto border ${
                isDark 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700' 
                  : 'bg-[#faf6f4] text-[#64534f] hover:bg-[#f4efea] border-[#953a2e]/20'
              }`}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onScheduleUrgent();
              }}
              className={`px-5 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase shadow-md w-1/2 sm:w-auto flex items-center justify-center gap-1.5 text-white ${
                isDark ? 'bg-gradient-to-r from-red-600 to-amber-600' : 'bg-[#953a2e] hover:bg-[#921e0f]'
              }`}
            >
              <span>Schedule Urgent Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

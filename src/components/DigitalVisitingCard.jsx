import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, Download, Sparkles, Scale, ExternalLink } from 'lucide-react';

export default function DigitalVisitingCard({ isDark }) {
  const [copied, setCopied] = useState(false);
  const [cardTheme, setCardTheme] = useState('executive'); // 'executive' (black & gold) | 'classic' (cream & gold)

  const cardData = {
    name: "Simhadri Vasantha Lakshmi",
    title: "Advocate",
    courts: "High Courts of Telangana & Andhra Pradesh",
    phone: "8019189343",
    phoneFormatted: "+91 80191 89343",
    email1: "legalsource.24@gmail.com",
    email2: "vasanthahr06@gmail.com",
    office: {
      line1: "Uniton Corporate Office,",
      line2: "3rd Floor, Raidurgam,",
      line3: "Near Metro, Hyderabad-500081."
    }
  };

  const copyToClipboard = () => {
    const text = `${cardData.name} - ${cardData.title}
${cardData.courts}
Mobile: ${cardData.phoneFormatted}
Email: ${cardData.email1} | ${cardData.email2}
Office: ${cardData.office.line1} ${cardData.office.line2} ${cardData.office.line3}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Lakshmi;Simhadri;Vasantha;;
FN:Simhadri Vasantha Lakshmi Advocate
TITLE:Advocate - High Courts of TG & AP
TEL;TYPE=CELL,VOICE:${cardData.phone}
EMAIL;TYPE=PREF,INTERNET:${cardData.email1}
EMAIL;TYPE=INTERNET:${cardData.email2}
ADR;TYPE=WORK:;;Uniton Corporate Office, 3rd Floor, Raidurgam, Near Metro;Hyderabad;Telangana;500081;India
NOTE:Advocate practicing before High Courts of Telangana & Andhra Pradesh.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Advocate_Simhadri_Vasantha_Lakshmi.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isExec = cardTheme === 'executive';

  return (
    <div className="w-full space-y-4">
      {/* Theme Switcher & Actions bar above card */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 p-1 rounded-xl border bg-black/5 dark:bg-white/5 border-amber-500/20 text-xs">
          <button
            type="button"
            onClick={() => setCardTheme('executive')}
            className={`px-2.5 py-1 rounded-lg font-display text-[11px] font-semibold transition-all ${
              isExec 
                ? 'bg-slate-900 text-amber-300 shadow-sm border border-amber-500/30' 
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Executive Black
          </button>
          <button
            type="button"
            onClick={() => setCardTheme('classic')}
            className={`px-2.5 py-1 rounded-lg font-display text-[11px] font-semibold transition-all ${
              !isExec 
                ? 'bg-amber-100/80 text-amber-900 shadow-sm border border-amber-300' 
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Platinum Cream
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-display font-semibold transition-all active:scale-95 shadow-sm"
            title="Copy full contact details to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy Card"}</span>
          </button>

          <button
            type="button"
            onClick={downloadVCard}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-700/30 bg-slate-900/10 hover:bg-slate-900/20 text-slate-800 dark:text-slate-200 text-xs font-display font-semibold transition-all active:scale-95 shadow-sm"
            title="Download vCard to your phone contacts"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save vCard</span>
          </button>
        </div>
      </div>

      {/* The Luxury Business Card Template */}
      <div 
        className={`relative w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 shadow-2xl overflow-hidden select-none group ${
          isExec
            ? 'bg-gradient-to-br from-[#0a0f1d] via-[#111827] to-[#060a14] border-amber-500/40 text-slate-100 shadow-amber-950/20'
            : 'bg-gradient-to-br from-[#ffffff] via-[#fcfbf9] to-[#f4f7fa] border-amber-400/50 text-[#0c0f17] shadow-xl shadow-slate-900/10'
        }`}
      >
        {/* Subtle Geometric Card Accents matching the visiting card's diagonal cut */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 opacity-60" />
        
        {/* Subtle Watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-[0.04] pointer-events-none">
          <Scale className="w-48 h-48" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left Column: Authentic 3D Gold Insignia Logo */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r pb-5 md:pb-0 md:pr-6 border-amber-500/20">
            <div className="relative mb-2 flex items-center justify-center w-full">
              <img 
                src="/assets/svl-advocate-logo.png" 
                alt="Advocate Simhadri Vasantha Lakshmi Logo" 
                className="w-48 sm:w-52 h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(217,119,6,0.35)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className={`font-cinzel text-xs font-bold tracking-widest uppercase mt-1 ${
              isExec ? 'text-amber-300' : 'text-[#8c671a]'
            }`}>
              Lex & Justitia
            </p>
            <p className="text-[10px] font-sans opacity-70">
              High Courts of TG & AP
            </p>
          </div>

          {/* Right Column: Extracted Typography and Details */}
          <div className="md:col-span-7 space-y-4 text-left">
            
            {/* Header: Name and Title */}
            <div className="space-y-1">
              <h3 className={`font-display text-xl sm:text-2xl font-black tracking-tight leading-tight ${
                isExec 
                  ? 'bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 bg-clip-text text-transparent' 
                  : 'text-[#0a0a0a]'
              }`}>
                {cardData.name}
              </h3>
              <p className={`font-display text-xs sm:text-sm font-bold tracking-widest uppercase ${
                isExec ? 'text-amber-400' : 'text-[#8c671a]'
              }`}>
                {cardData.title}
              </p>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-gradient-to-r from-amber-500/40 via-amber-500/10 to-transparent" />

            {/* Contact Details Grid */}
            <div className="space-y-2.5 text-xs font-sans">
              
              {/* Phone */}
              <div className="flex items-center gap-2.5 group/item">
                <div className={`p-1.5 rounded-lg ${
                  isExec ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100/80 text-amber-800'
                }`}>
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`tel:${cardData.phone}`}
                  className={`font-semibold tracking-wide transition-colors ${
                    isExec 
                      ? 'text-slate-100 hover:text-amber-300' 
                      : 'text-[#0a0a0a] hover:text-[#8c671a]'
                  }`}
                >
                  {cardData.phone}
                </a>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-2.5 group/item">
                <div className={`p-1.5 rounded-lg mt-0.5 ${
                  isExec ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100/80 text-amber-800'
                }`}>
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <a 
                    href={`mailto:${cardData.email1}`}
                    className={`font-medium transition-colors ${
                      isExec ? 'text-slate-200 hover:text-amber-300' : 'text-[#1a1a1a] hover:text-[#8c671a]'
                    }`}
                  >
                    {cardData.email1}
                  </a>
                  <a 
                    href={`mailto:${cardData.email2}`}
                    className={`font-medium transition-colors ${
                      isExec ? 'text-slate-200 hover:text-amber-300' : 'text-[#1a1a1a] hover:text-[#8c671a]'
                    }`}
                  >
                    {cardData.email2}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-2.5 group/item">
                <div className={`p-1.5 rounded-lg mt-0.5 ${
                  isExec ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100/80 text-amber-800'
                }`}>
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className={`text-[11px] leading-relaxed ${
                  isExec ? 'text-slate-300' : 'text-[#333333]'
                }`}>
                  <p className="font-semibold">{cardData.office.line1}</p>
                  <p>{cardData.office.line2}</p>
                  <p>{cardData.office.line3}</p>
                </div>
              </div>

            </div>

            {/* Quick Click-to-Action Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={`tel:${cardData.phone}`}
                className={`px-3 py-1 rounded-lg text-[11px] font-display font-semibold transition-all flex items-center gap-1.5 ${
                  isExec
                    ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30'
                    : 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm'
                }`}
              >
                <Phone className="w-3 h-3" />
                <span>Call Chambers</span>
              </a>

              <a
                href={`mailto:${cardData.email1}`}
                className={`px-3 py-1 rounded-lg text-[11px] font-display font-semibold transition-all flex items-center gap-1.5 border ${
                  isExec
                    ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-amber-400'
                    : 'bg-white border-amber-400 text-amber-900 hover:bg-amber-50'
                }`}
              >
                <Mail className="w-3 h-3" />
                <span>Email Brief</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

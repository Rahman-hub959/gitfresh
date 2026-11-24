import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Scale 
} from 'lucide-react';
import { ADVOCATE_INFO, PRACTICE_AREAS } from '../data/legalContent';
import DigitalVisitingCard from './DigitalVisitingCard';

export default function ContactSection({ profileData, preselectedMatter, isDark }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: preselectedMatter || 'Property & Civil Law',
    jurisdiction: 'High Court of Telangana (Hyderabad)',
    urgency: 'Standard',
    consultationMode: 'In-person Chambers',
    summary: '',
    agreedBCI: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Advocate Simhadri Vasantha Lakshmi,\nI am contacting your chambers regarding a legal matter in ${formData.practiceArea || 'High Court'}. Please advise on an appointment for legal consultation.`
    );
    const cleanPhone = (profileData.phone || ADVOCATE_INFO.contact.phone).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="chambers" className={`py-10 sm:py-14 md:py-18 lg:py-20 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark 
        ? 'bg-[#060b17] border-amber-500/20' 
        : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3.5 sm:space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border shadow-sm ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-white border-amber-500/30 text-amber-800'
          }`}>
            <Scale className="w-3.5 h-3.5 text-amber-500" />
            <span>Professional Engagement & Chambers</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
          }`}>
            Chambers & <span className={isDark ? 'text-gold-gradient' : 'text-amber-600 dark:text-amber-400'}>Legal Consultation</span>
          </h2>

          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Legal consultations and document scrutiny are conducted at chambers by prior appointment, ensuring focused consideration of every legal issue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Chambers Locations & Direct Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Corporate Office Card */}
            <div className={`p-6 sm:p-7 rounded-2xl border shadow-md space-y-3.5 relative overflow-hidden ${
              isDark ? 'bg-slate-900/80 border-amber-500/35' : 'bg-white border-amber-500/30 shadow-[#1a0f0c]/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                  isDark ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-800 border-amber-400/40'
                }`}>
                  Main Corporate Office
                </span>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Raidurgam</span>
              </div>

              <h3 className={`font-display text-base sm:text-lg font-bold ${
                isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
              }`}>
                Uniton Corporate Office
              </h3>

              <div className={`flex items-start gap-2.5 text-xs font-sans ${
                isDark ? 'text-slate-300' : 'text-[#222222]'
              }`}>
                <MapPin className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                <span>Uniton Corporate Office, 3rd Floor, Raidurgam, Near Metro, Hyderabad-500081.</span>
              </div>
            </div>

            {/* High Courts Chambers Dual Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Telangana High Court */}
              <div className={`p-5 rounded-xl border space-y-2 ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <span className={`text-[10px] font-display font-bold uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>Telangana High Court</span>
                <p className={`text-xs font-display font-bold ${isDark ? 'text-slate-200' : 'text-[#0a0a0a]'}`}>
                  Hyderabad Complex
                </p>
                <p className={`text-[11px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ghansi Bazaar, Hyderabad
                </p>
              </div>

              {/* Andhra Pradesh High Court */}
              <div className={`p-5 rounded-xl border space-y-2 ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <span className={`text-[10px] font-display font-bold uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>AP High Court</span>
                <p className={`text-xs font-display font-bold ${isDark ? 'text-slate-200' : 'text-[#0a0a0a]'}`}>
                  Amaravati Complex
                </p>
                <p className={`text-[11px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Nelapadu, Amaravati
                </p>
              </div>
            </div>

            {/* Contact Channels Card */}
            <div className={`p-6 sm:p-7 rounded-2xl border space-y-5 ${
              isDark ? 'bg-slate-900/80 border-amber-500/25' : 'bg-white border-amber-500/25 shadow-sm'
            }`}>
              <h4 className={`font-display text-xs font-bold uppercase tracking-widest ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}>
                Official Direct Communication
              </h4>

              <div className="space-y-3.5 text-xs font-sans">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Mobile / WhatsApp</p>
                    <a href="tel:8019189343" className={`font-bold text-sm transition-colors ${
                      isDark ? 'text-slate-100 hover:text-amber-400' : 'text-[#0a0a0a] hover:text-amber-700'
                    }`}>
                      +91 80191 89343 / 8019189343
                    </a>
                  </div>
                </div>

                {/* Primary Email */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Primary Legal Email</p>
                    <a href="mailto:legalsource.24@gmail.com" className={`font-semibold transition-colors ${
                      isDark ? 'text-slate-100 hover:text-amber-400' : 'text-[#0a0a0a] hover:text-amber-700'
                    }`}>
                      legalsource.24@gmail.com
                    </a>
                  </div>
                </div>

                {/* Secondary Email */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Secondary Email</p>
                    <a href="mailto:vasanthahr06@gmail.com" className={`font-semibold transition-colors ${
                      isDark ? 'text-slate-100 hover:text-amber-400' : 'text-[#0a0a0a] hover:text-amber-700'
                    }`}>
                      vasanthahr06@gmail.com
                    </a>
                  </div>
                </div>

                {/* Consultation Timings */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Consultation Timings</p>
                    <p className={`font-medium ${isDark ? 'text-slate-200' : 'text-[#1a1a1a]'}`}>
                      Monday to Saturday: 10:00 AM – 7:30 PM (Prior Appointment)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full mt-4 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-display font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp (+91 80191 89343)</span>
              </button>
            </div>

            {/* Interactive Luxury Digital Visiting Card Component */}
            <div className="pt-3">
              <DigitalVisitingCard isDark={isDark} />
            </div>

            {/* Engagement Notice */}
            <div className={`p-5 rounded-xl border text-[11px] font-sans space-y-1.5 ${
              isDark ? 'bg-slate-900/40 border-amber-500/15 text-slate-400' : 'bg-[#fbf7f3] border-[#953a2e]/15 text-[#64534f]'
            }`}>
              <p className={`font-semibold ${isDark ? 'text-amber-300' : 'text-[#953a2e]'}`}>
                Notice on Professional Consultations:
              </p>
              <p className="leading-relaxed">
                *All legal work is subject to professional engagement, applicable law, court jurisdiction and professional availability. No consultation creates an advocate-client relationship until formal engagement is executed.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl border p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl text-left relative ${
              isDark ? 'bg-slate-900/80 border-amber-500/30 shadow-amber-950/20' : 'bg-[#fbf7f3] border-[#953a2e]/25 shadow-[#1a0f0c]/6'
            }`}>
              
              {submitted ? (
                <div className="py-16 px-4 text-center space-y-5 animate-fade-in">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto ${
                    isDark ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'bg-emerald-50 border-emerald-500 text-emerald-600'
                  }`}>
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`font-display text-2xl font-bold ${
                    isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                  }`}>
                    Inquiry Received
                  </h3>
                  <p className={`text-sm font-sans max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-[#64534f]'
                  }`}>
                    Thank you, <strong>{formData.fullName}</strong>. Your consultation request regarding <strong>{formData.practiceArea}</strong> has been noted. Chambers will review the information and get in touch to coordinate the consultation slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`mt-6 px-7 py-3 rounded-xl text-xs font-display font-semibold ${
                      isDark ? 'bg-slate-800 hover:bg-slate-700 text-amber-300' : 'bg-[#953a2e] text-white hover:bg-[#921e0f]'
                    }`}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className={`font-display text-xl sm:text-2xl font-bold ${
                      isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                    }`}>
                      Request Legal Consultation
                    </h3>
                    <p className={`text-xs font-sans mt-1 ${isDark ? 'text-slate-400' : 'text-[#64534f]'}`}>
                      Provide basic details of the matter. Confidentiality is strictly respected.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 00000"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email & Jurisdiction */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Court Jurisdiction
                      </label>
                      <select
                        name="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      >
                        <option>High Court of Telangana (Hyderabad)</option>
                        <option>High Court of Andhra Pradesh (Amaravati)</option>
                        <option>District Courts / City Civil Courts</option>
                        <option>Consumer Commission / DRT / NCLT</option>
                        <option>Non-Litigation / Documentation Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Practice Area & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Area of Law
                      </label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      >
                        {PRACTICE_AREAS.map(p => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                      }`}>
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none border transition-all ${
                          isDark 
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                        }`}
                      >
                        <option value="Standard">Standard (Within 2-3 business days)</option>
                        <option value="Urgent">Urgent (Within 24-48 hours)</option>
                        <option value="Immediate">Immediate Court Action (Bail / Injunction)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Mode */}
                  <div>
                    <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                    }`}>
                      Preferred Mode of Consultation
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {["In-person Chambers", "Video Conference / Online"].map((mode) => (
                        <label
                          key={mode}
                          className={`p-3 rounded-xl border text-xs font-display font-medium cursor-pointer flex items-center gap-2.5 transition-all ${
                            formData.consultationMode === mode
                              ? isDark
                                ? 'bg-amber-500/15 border-amber-500/60 text-amber-200'
                                : 'bg-[#f8ece9] border-[#953a2e] text-[#953a2e]'
                              : isDark
                                ? 'bg-slate-950/60 border-slate-800 text-slate-400'
                                : 'bg-[#ffffff] border-[#953a2e]/20 text-[#64534f]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="consultationMode"
                            value={mode}
                            checked={formData.consultationMode === mode}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            formData.consultationMode === mode 
                              ? isDark ? 'border-amber-400 bg-amber-400' : 'border-[#953a2e] bg-[#953a2e]'
                              : 'border-slate-400'
                          }`}>
                            {formData.consultationMode === mode && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span>{mode}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Summary of Facts */}
                  <div>
                    <label className={`block text-xs font-display font-semibold uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
                    }`}>
                      Brief Summary of Facts / Query
                    </label>
                    <textarea
                      name="summary"
                      rows={4}
                      value={formData.summary}
                      onChange={handleChange}
                      placeholder="Briefly describe the key facts, property details, dispute nature, or documentation required..."
                      className={`w-full px-4 py-3 rounded-xl text-xs font-sans focus:outline-none resize-none border transition-all ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400' 
                            : 'bg-[#ffffff] border-[#953a2e]/25 text-[#1a0f0c] focus:border-[#953a2e]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-xl ${
                        isDark
                          ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
                          : 'bg-[#953a2e] hover:bg-[#921e0f] text-white shadow-[#953a2e]/25'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Legal Consultation Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

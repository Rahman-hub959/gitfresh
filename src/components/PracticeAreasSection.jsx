import React, { useState } from 'react';
import { 
  Building2, Users, ShieldAlert, Briefcase, Scale, Landmark, 
  FileSearch, FileSignature, Terminal, Zap, ChevronRight 
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalContent';
import PracticeDetailModal from './PracticeDetailModal';

export default function PracticeAreasSection({ onSelectMatter, isDark }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArea, setSelectedArea] = useState(null);

  const iconMap = {
    Building2,
    Users,
    ShieldAlert,
    Briefcase,
    Scale,
    Landmark,
    FileSearch,
    FileSignature,
    Terminal,
    Zap
  };

  const categories = ["All", "Civil", "Criminal", "Corporate", "Banking", "Documentation", "Cyber", "Urgent"];

  const filteredAreas = activeCategory === "All" 
    ? PRACTICE_AREAS 
    : PRACTICE_AREAS.filter(area => area.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="practice-areas" className={`py-28 lg:py-36 relative border-b transition-colors duration-300 overflow-hidden ${
      isDark ? 'bg-[#060b17] border-amber-500/20' : 'bg-gradient-to-b from-[#faf8f5] via-[#f0f4f9] to-[#faf8f5] border-amber-500/20'
    }`}>
      {/* Background decorations */}
      <div className={`absolute top-1/3 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-300/15'
      }`} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border shadow-sm ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-white border-amber-500/30 text-amber-800'
          }`}>
            <Scale className="w-3.5 h-3.5 text-amber-500" />
            <span>Comprehensive Legal Verticals</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-[#0a0a0a]'
          }`}>
            Areas of <span className={isDark ? 'text-gold-gradient' : 'text-amber-600 dark:text-amber-400'}>Legal Practice</span>
          </h2>

          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            My professional interests encompass civil and property matters, family and matrimonial disputes, criminal law, corporate matters, consumer protection, banking and finance, cyber law, legal documentation, and urgent court assistance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-display font-semibold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-slate-950 shadow-md shadow-amber-500/25 scale-105'
                      : 'bg-[#953a2e] border-[#953a2e] text-white shadow-md shadow-[#953a2e]/20 scale-105'
                    : isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40'
                      : 'bg-[#fbf7f3] border-[#953a2e]/20 text-[#64534f] hover:text-[#953a2e] hover:border-[#953a2e]/40'
                }`}
              >
                {cat === "All" ? `All Verticals (${PRACTICE_AREAS.length})` : cat}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {filteredAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Scale;
            const isUrgent = area.category === "Urgent";

            return (
              <div
                key={area.id}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isUrgent 
                    ? isDark
                      ? 'bg-gradient-to-br from-red-950/30 via-slate-900 to-slate-900 border-2 border-red-500/40 shadow-xl'
                      : 'bg-[#f8ece9] border-2 border-[#953a2e] shadow-md shadow-[#953a2e]/10'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:-translate-y-1'
                      : 'bg-[#fbf7f3] border-[#953a2e]/18 hover:border-[#953a2e]/50 hover:bg-[#ffffff] shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 border ${
                      isUrgent
                        ? isDark
                          ? 'bg-red-500/20 text-red-400 border-red-500/40'
                          : 'bg-[#eccfc9] text-[#953a2e] border-[#953a2e]/30'
                        : isDark
                          ? 'bg-slate-800/90 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950'
                          : 'bg-[#f8ece9] text-[#953a2e] border-[#953a2e]/20 group-hover:bg-[#953a2e] group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      isUrgent
                        ? isDark
                          ? 'bg-red-900/40 text-red-300 border-red-500/40'
                          : 'bg-[#eccfc9] text-[#953a2e] border-[#953a2e]/40'
                        : isDark
                          ? 'bg-slate-800 text-slate-400 border-slate-700'
                          : 'bg-[#faf6f4] text-[#64534f] border-[#953a2e]/15'
                    }`}>
                      {area.category}
                    </span>
                  </div>

                  <h3 className={`font-display text-lg sm:text-xl font-bold mb-2 transition-colors ${
                    isDark ? 'text-slate-100 group-hover:text-amber-300' : 'text-[#1a0f0c] group-hover:text-[#953a2e]'
                  }`}>
                    {area.title}
                  </h3>

                  <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-400' : 'text-[#64534f]'
                  }`}>
                    {area.summary}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className={`pt-4 border-t ${isDark ? 'border-slate-800/80' : 'border-[#953a2e]/10'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-sans font-medium ${
                      isDark ? 'text-amber-400/80' : 'text-[#953a2e]'
                    }`}>
                      High Court & Trial Courts
                    </span>
                    <button
                      onClick={() => setSelectedArea(area)}
                      className={`inline-flex items-center gap-1 text-xs font-display font-semibold hover:underline underline-offset-4 ${
                        isDark ? 'text-amber-400 hover:text-amber-300' : 'text-[#953a2e] hover:text-[#921e0f]'
                      }`}
                    >
                      <span>Explore Scope</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mandatory Bar Engagement Notice */}
        <div className={`mt-14 max-w-3xl mx-auto text-center p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/60 border-amber-500/20' : 'bg-[#fbf7f3] border-[#953a2e]/20 shadow-sm'
        }`}>
          <p className={`font-garamond italic font-bold text-sm sm:text-base ${isDark ? 'text-amber-200' : 'text-[#1a0f0c]'}`}>
            *All legal work is subject to professional engagement, applicable law, court jurisdiction and professional availability.
          </p>
        </div>

      </div>

      {/* Detail Slideover / Modal */}
      {selectedArea && (
        <PracticeDetailModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
          isDark={isDark}
          onConsult={(title) => {
            if (onSelectMatter) onSelectMatter(title);
            const target = document.querySelector('#chambers');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      )}
    </section>
  );
}

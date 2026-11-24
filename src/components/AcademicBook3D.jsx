import React, { useState, useRef } from 'react';
import { 
  BookOpen, ChevronRight, ChevronLeft, Bookmark, 
  Sparkles, Scale, CheckCircle2, RotateCcw, Volume2, VolumeX 
} from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalContent';

export default function AcademicBook3D({ 
  photoUrl, 
  isDark 
}) {
  const [currentPage, setCurrentPage] = useState(0); // 0 = Cover, 1 = B.Sc., 2 = MBA, 3 = LL.B., 4 = LL.M., 5 = Synthesis
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); // 'next' | 'prev'
  const [flipFromPage, setFlipFromPage] = useState(0);
  const [flipToPage, setFlipToPage] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const totalPages = 6;
  const flipTimerRef = useRef(null);

  // Web Audio API synthesized realistic paper turn sound
  const playPageTurnSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const bufferSize = Math.floor(ctx.sampleRate * 0.22); // 220ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Organic paper rustle & slide envelope
      for (let i = 0; i < bufferSize; i++) {
        const progress = i / bufferSize;
        const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 3.5);
        // Pink-like random noise
        data[i] = (Math.random() * 2 - 1) * envelope * 0.18;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to match crisp parchment sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.2);
      filter.Q.value = 1.6;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) {
      // Graceful fallback if audio is not permitted
    }
  };

  const pages = [
    {
      type: "cover",
      title: "Academic & Jurisprudential Dossier",
      subtitle: "Official Qualifications & Professional Competency Record",
    },
    {
      type: "degree",
      chapter: "Chapter I",
      degree: "Bachelor of Science",
      code: "B.Sc.",
      discipline: "Sciences & Analytical Forensics",
      colorTag: "Sciences",
      coreIdea: "Analytical reasoning, factual forensics, objective observation and scientific logic applied to evidential scrutiny.",
      breakdowns: [
        {
          heading: "Forensic Examination of Evidence",
          text: "Application of scientific methodology to scrutinize questioned documents, signature consistency, digital metadata trails, and chain-of-custody integrity."
        },
        {
          heading: "Objective Fact-Finding",
          text: "Cross-examination of forensic experts, chemical reports, ballistic findings, and technical opinions with empirical precision before trial courts."
        },
        {
          heading: "Systematic Fact Deduction",
          text: "Deconstructing convoluted factual matrices into verifiable, sequential proof structures required for judicial determination."
        }
      ],
      shelfBooks: [
        "Forensic Document Scrutiny",
        "Principles of Empirical Evidence",
        "Scientific Logic & Legal Proof"
      ]
    },
    {
      type: "degree",
      chapter: "Chapter II",
      degree: "Master of Business Administration",
      code: "MBA",
      discipline: "Corporate Management & Commercial Strategy",
      colorTag: "Management",
      coreIdea: "Deep comprehension of commercial dynamics, organizational structures, corporate finance, financial appraisal and contractual risks.",
      breakdowns: [
        {
          heading: "Commercial Contract Engineering",
          text: "Drafting, reviewing, and negotiating complex commercial pacts, Master Service Agreements (MSAs), joint ventures, and shareholder rights charters."
        },
        {
          heading: "Banking & Financial Security Scrutiny",
          text: "Legal scrutiny of mortgaged property assets, corporate loan covenants, recovery under SARFAESI Act, and Debt Recovery Tribunal (DRT) proceedings."
        },
        {
          heading: "Corporate Governance & Compliance",
          text: "Advising corporate boards, partnerships, and LLPs on statutory compliance under the Companies Act, liability containment, and dispute pre-emption."
        }
      ],
      shelfBooks: [
        "Corporate Governance & Contracts",
        "Banking Securities & Mortgages",
        "Commercial Risk & Dispute Resolution"
      ]
    },
    {
      type: "degree",
      chapter: "Chapter III",
      degree: "Bachelor of Laws",
      code: "LL.B.",
      discipline: "Substantive & Procedural Jurisprudence",
      colorTag: "Law",
      coreIdea: "Substantive and procedural legal mastery, civil procedure, criminal jurisprudence, constitutional law, trial and appellate advocacy.",
      breakdowns: [
        {
          heading: "High Court Appellate & Writ Practice",
          text: "Formulation of Writ Petitions under Article 226/227 of the Constitution of India, High Court Civil Appeals, Revisions, and Special Motions."
        },
        {
          heading: "Civil Litigation & Property Due Diligence",
          text: "Handling complex title suits, partition, declaratory reliefs, and injunctions under the Transfer of Property Act, CPC, and Specific Relief Act."
        },
        {
          heading: "Criminal Defense & Liberty Safeguards",
          text: "Anticipatory bail motions, criminal complaints under Sec 138 NI Act, and defending personal liberty under the Bharatiya Nagarik Suraksha Sanhita."
        }
      ],
      shelfBooks: [
        "The Constitution of India",
        "Code of Civil Procedure, 1908",
        "Bharatiya Nagarik Suraksha Sanhita"
      ]
    },
    {
      type: "degree",
      chapter: "Chapter IV",
      degree: "Master of Laws",
      code: "LL.M. (Pursuing)",
      discipline: "Advanced Jurisprudence & Statutory Reform",
      colorTag: "Advanced",
      coreIdea: "Specialized post-graduate research, continuous advancement in modern legal developments, statutory reforms and comparative jurisprudence.",
      breakdowns: [
        {
          heading: "Evolving Precedent Tracking",
          text: "Deep analysis of landmark Supreme Court of India constitutional bench rulings and authoritative High Court precedents."
        },
        {
          heading: "New Age Digital Jurisprudence",
          text: "Advanced study of cyber offences, digital personal data protection, electronic evidence admissibility, and emerging corporate liabilities."
        },
        {
          heading: "Academic Scholarly Rigor",
          text: "Integrating contemporary statutory enactments with timeless constitutional safeguards to build persuasive, unassailable court arguments."
        }
      ],
      shelfBooks: [
        "Comparative Constitutional Jurisprudence",
        "Modern Interpretation of Statutes",
        "Cyber Laws & Digital Evidence"
      ]
    },
    {
      type: "synthesis",
      chapter: "Epilogue",
      title: "The Multidisciplinary Advocate",
      subtitle: "Uniting Science, Management & Jurisprudence into Holistic Advocacy"
    }
  ];

  // Initiate realistic 3D page turn
  const turnToPage = (targetIdx) => {
    if (isFlipping || targetIdx === currentPage || targetIdx < 0 || targetIdx >= totalPages) return;

    const dir = targetIdx > currentPage ? 'next' : 'prev';
    setFlipDirection(dir);
    setFlipFromPage(currentPage);
    setFlipToPage(targetIdx);
    setIsFlipping(true);

    playPageTurnSound();

    if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
    flipTimerRef.current = setTimeout(() => {
      setCurrentPage(targetIdx);
      setIsFlipping(false);
    }, 650);
  };

  const nextPage = () => turnToPage(currentPage + 1);
  const prevPage = () => turnToPage(currentPage - 1);

  // Helper to render page contents cleanly for both static base and turning leaf
  const renderPageContent = (pageIdx) => {
    const item = pages[pageIdx];
    if (!item) return null;

    if (item.type === "cover") {
      return (
        <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 space-y-7">
          <div className={`p-4 rounded-full border-2 shadow-inner transition-transform hover:scale-105 duration-300 ${
            isDark ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' : 'bg-[#f8ece9] border-[#953a2e]/30 text-[#953a2e]'
          }`}>
            <Scale className="w-12 h-12" />
          </div>

          <div className="space-y-2 max-w-xl">
            <p className={`text-xs font-display font-semibold tracking-widest uppercase ${
              isDark ? 'text-amber-400' : 'text-[#953a2e]'
            }`}>
              Academic & Professional Dossier
            </p>
            
            <h3 className={`font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
            }`}>
              SIMHADRI <br />
              <span className={isDark ? 'text-gold-gradient' : 'text-[#953a2e]'}>
                VASANTHA LAKSHMI
              </span>
            </h3>

            <p className={`text-sm sm:text-base font-display font-medium tracking-wide ${
              isDark ? 'text-amber-200/90' : 'text-[#64534f]'
            }`}>
              Advocate • High Courts of Telangana & Andhra Pradesh
            </p>
          </div>

          {photoUrl ? (
            <div className="relative group/cameo">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-xl overflow-hidden">
                <img 
                  src={photoUrl} 
                  alt={ADVOCATE_INFO.name} 
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
            </div>
          ) : (
            <div className={`p-2 px-3.5 rounded-xl text-xs font-display flex items-center gap-1.5 border ${
              isDark ? 'bg-slate-950/60 border-amber-500/20 text-slate-300' : 'bg-[#faf6f4] border-[#953a2e]/20 text-[#64534f]'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>4 Multidisciplinary Degrees: B.Sc. • MBA • LL.B. • LL.M.</span>
            </div>
          )}

          <p className={`font-garamond italic font-bold text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed tracking-wide ${
            isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#1a0f0c]'
          }`}>
            “Let knowledge guide the argument, let integrity define the profession, and let justice remain the ultimate purpose.”
          </p>

          <button
            onClick={nextPage}
            className={`px-8 py-3.5 rounded-2xl font-display font-bold text-xs tracking-wider uppercase shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 ${
              isDark
                ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 shadow-amber-500/25'
                : 'bg-[#953a2e] hover:bg-[#921e0f] text-white shadow-[#953a2e]/25'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Dossier & Turn Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      );
    }

    if (item.type === "degree") {
      return (
        <div className="space-y-6 text-left py-2">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-amber-500/20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-black text-amber-500/80">
                {item.code}
              </span>
              <div>
                <p className={`text-[11px] font-display font-semibold uppercase tracking-widest ${
                  isDark ? 'text-amber-400' : 'text-[#953a2e]'
                }`}>
                  {item.chapter} • Academic Qualification
                </p>
                <h4 className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                }`}>
                  {item.degree}
                </h4>
              </div>
            </div>

            <span className={`text-xs font-display font-semibold uppercase px-3 py-1 rounded-full border ${
              isDark 
                ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' 
                : 'bg-[#f8ece9] border-[#953a2e]/30 text-[#953a2e]'
            }`}>
              {item.colorTag}
            </span>
          </div>

          <div className={`p-5 sm:p-6 rounded-2xl border shadow-sm relative ${
            isDark 
              ? 'bg-slate-950/70 border-l-4 border-l-amber-500 border-amber-500/20' 
              : 'bg-[#ffffff] border-l-4 border-l-[#953a2e] border-[#953a2e]/20 shadow-[#1a0f0c]/5'
          }`}>
            <p className={`font-garamond italic font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide ${
              isDark ? 'text-amber-100 drop-shadow-sm' : 'text-[#1a0f0c]'
            }`}>
              “{item.coreIdea}”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {item.breakdowns.map((b, bIdx) => (
              <div
                key={bIdx}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 space-y-2 ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90'
                    : 'bg-[#ffffff]/80 border-[#953a2e]/15 hover:border-[#953a2e]/40 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isDark ? 'text-amber-400' : 'text-[#953a2e]'
                  }`} />
                  <h5 className={`font-display text-xs sm:text-sm font-bold ${
                    isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
                  }`}>
                    {b.heading}
                  </h5>
                </div>
                <p className={`font-sans text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#64534f]'
                }`}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
            isDark ? 'bg-slate-950/50 border-amber-500/15' : 'bg-[#f8ece9] border-[#953a2e]/15'
          }`}>
            <div className="flex items-center gap-2">
              <BookOpen className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-[#953a2e]'}`} />
              <span className={`font-display font-semibold ${
                isDark ? 'text-slate-300' : 'text-[#1a0f0c]'
              }`}>
                Associated Treatises & Case Authorities:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.shelfBooks.map((sb, sbIdx) => (
                <span
                  key={sbIdx}
                  className={`px-2.5 py-0.5 rounded-md font-sans text-[11px] font-medium border ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 text-amber-300' 
                      : 'bg-white border-[#953a2e]/20 text-[#953a2e]'
                  }`}
                >
                  📖 {sb}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "synthesis") {
      return (
        <div className="space-y-6 text-left py-2">
          <div className="border-b pb-4 border-amber-500/20 text-center sm:text-left">
            <p className={`text-[11px] font-display font-semibold uppercase tracking-widest ${
              isDark ? 'text-amber-400' : 'text-[#953a2e]'
            }`}>
              Comprehensive Legal Synthesis
            </p>
            <h4 className={`font-display text-2xl sm:text-3xl font-extrabold ${
              isDark ? 'text-slate-100' : 'text-[#1a0f0c]'
            }`}>
              The Multidisciplinary Advocate Matrix
            </h4>
            <p className={`text-xs font-sans mt-1 ${isDark ? 'text-slate-400' : 'text-[#64534f]'}`}>
              How Science, Business Management, and Substantive Jurisprudence unite into comprehensive High Court advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: "B.Sc. Rigor", desc: "Forensic logic, metadata scrutiny, empirical examination of witnesses & facts." },
              { title: "MBA Strategy", desc: "Corporate contract engineering, commercial viability, banking loan analysis." },
              { title: "LL.B. Mastery", desc: "High Court writ petitions, substantive trials, civil & criminal litigation." },
              { title: "LL.M. Scholar", desc: "Advanced constitutional jurisprudence, precedent evolution, statutory reform." },
            ].map((matrix, mIdx) => (
              <div
                key={mIdx}
                className={`p-4 rounded-xl border space-y-1.5 ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800' 
                    : 'bg-white border-[#953a2e]/20 shadow-sm'
                }`}
              >
                <h5 className={`font-display text-sm font-bold ${
                  isDark ? 'text-amber-300' : 'text-[#953a2e]'
                }`}>
                  {matrix.title}
                </h5>
                <p className={`text-xs font-sans leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#64534f]'
                }`}>
                  {matrix.desc}
                </p>
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row items-center gap-5 p-4 sm:p-5 rounded-2xl border ${
            isDark 
              ? 'bg-slate-900/60 border-amber-500/20' 
              : 'bg-white border-amber-500/30 shadow-sm'
          }`}>
            <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-amber-400/40 shadow-md">
              <img 
                src="/assets/advocate-highcourt.jpg" 
                alt="Advocate Simhadri Vasantha Lakshmi before High Court" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left text-xs font-sans space-y-1">
              <p className="font-display font-bold text-amber-600 dark:text-amber-400">
                High Court Practice • Telangana & Andhra Pradesh
              </p>
              <p className={isDark ? 'text-slate-300' : 'text-[#333333]'}>
                Actively representing clients before the High Courts of Telangana & Andhra Pradesh, civil & criminal trial courts, appellate tribunals, and corporate boards.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border text-center font-garamond italic font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed shadow-md ${
            isDark ? 'bg-slate-950/70 border-amber-500/30 text-amber-100 drop-shadow-sm' : 'bg-[#faf6f4] border-amber-500/25 text-[#1a0f0c]'
          }`}>
            “I believe that the legal profession demands continuous learning, independent thinking, discipline and an unwavering commitment to professional ethics.”
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* Top Chapter Bookmark Tabs (Spatial Floating Pills) & Sound Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-8 px-2">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {pages.map((p, idx) => {
            const isActive = (isFlipping ? flipToPage : currentPage) === idx;
            let label = "Cover";
            if (idx === 1) label = "I. B.Sc.";
            if (idx === 2) label = "II. MBA";
            if (idx === 3) label = "III. LL.B.";
            if (idx === 4) label = "IV. LL.M.";
            if (idx === 5) label = "Synthesis";

            return (
              <button
                key={idx}
                onClick={() => turnToPage(idx)}
                disabled={isFlipping}
                className={`px-3.5 py-2 rounded-xl text-xs font-display font-semibold transition-all duration-300 flex items-center gap-1.5 border backdrop-blur-md shadow-sm ${
                  isActive
                    ? isDark
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/25 scale-105'
                      : 'bg-[#953a2e] text-white border-[#953a2e] shadow-[#953a2e]/25 scale-105'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-700/60 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                      : 'bg-[#fbf7f3] border-[#953a2e]/20 text-[#64534f] hover:border-[#953a2e] hover:text-[#953a2e]'
                }`}
              >
                <Bookmark className={`w-3 h-3 ${isActive ? 'fill-current' : 'opacity-50'}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Audio feedback toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "Mute Page Turn Sound" : "Enable Page Turn Sound"}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display border transition-colors ${
            isDark ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-amber-300' : 'bg-white border-[#953a2e]/20 text-[#64534f] hover:text-[#953a2e]'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-500" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
          <span className="hidden md:inline text-[10px]">{soundEnabled ? "Sound ON" : "Sound OFF"}</span>
        </button>
      </div>

      {/* 3D Realistic Bound Book Stage */}
      <div className="book-3d-stage relative">
        <div className={`relative rounded-3xl p-6 sm:p-10 md:p-12 border shadow-2xl backdrop-blur-2xl overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1224]/90 to-slate-950/95 border-amber-500/30 shadow-slate-950/70' 
            : 'bg-gradient-to-br from-[#fbf7f3]/95 via-[#f8ece9]/90 to-[#f4efea]/95 border-[#953a2e]/25 shadow-[#1a0f0c]/12'
        }`}>
          
          {/* Book Spine Decoration on the Left Edge */}
          <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-6 bg-gradient-to-r from-black/35 via-white/5 to-transparent rounded-l-3xl pointer-events-none border-r border-amber-500/20 z-30" />

          {/* Stacked Paper Block Edges on Right (Tactile physical depth) */}
          <div className="absolute top-4 bottom-4 right-1 w-2.5 bg-gradient-to-r from-slate-700/20 via-white/10 to-slate-900/40 rounded-r-md pointer-events-none border-l border-amber-500/10 z-20 flex flex-col justify-around py-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-amber-500/20" />
            ))}
          </div>

          {/* Gilded Corner Brackets (Classical Book Ornaments) */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/60 rounded-tl-lg pointer-events-none z-30" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/60 rounded-tr-lg pointer-events-none z-30" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/60 rounded-bl-lg pointer-events-none z-30" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/60 rounded-br-lg pointer-events-none z-30" />

          {/* Golden Ribbon Bookmark (Top Right Hanging) */}
          <div className="absolute -top-3 right-10 sm:right-16 w-6 h-14 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600 shadow-md rounded-b flex items-end justify-center pb-1 z-30 pointer-events-none">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[8px] border-b-slate-900/80 -mb-1" />
          </div>

          {/* Main Book Content Stage */}
          <div className="relative min-h-[500px] sm:min-h-[540px] flex flex-col justify-between pl-4 sm:pl-8 pr-5 sm:pr-8 py-3">
            
            {/* 1. Underlying Base Page (Target page that is revealed) */}
            <div className="w-full">
              {renderPageContent(isFlipping ? flipToPage : currentPage)}
            </div>

            {/* 2. 3D Flipping Leaf Overlay (The animated turning page with front & back faces) */}
            {isFlipping && (
              <div 
                className={`absolute inset-0 pl-4 sm:pl-8 pr-5 sm:pr-8 py-3 rounded-2xl z-20 pointer-events-none ${
                  flipDirection === 'next' ? 'animate-page-flip-forward book-leaf' : 'animate-page-flip-backward book-leaf-back'
                } ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-900 via-[#0a1224] to-slate-950 border border-amber-500/30' 
                    : 'bg-gradient-to-br from-[#fbf7f3] via-[#f8ece9] to-[#f4efea] border border-[#953a2e]/30'
                }`}
              >
                {/* Front face of flipping page */}
                <div className="w-full h-full overflow-hidden">
                  {renderPageContent(flipDirection === 'next' ? flipFromPage : flipToPage)}
                </div>

                {/* Dynamic paper fold shadow sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-950/20 to-black/35 pointer-events-none animate-shadow-sweep" />
              </div>
            )}

            {/* Bottom Book Navigation Controls */}
            <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs font-display font-semibold z-10 ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-[#953a2e]/15 text-[#64534f]'
            }`}>
              
              {/* Previous Page Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                  currentPage === 0 || isFlipping
                    ? 'opacity-30 cursor-not-allowed'
                    : isDark 
                      ? 'hover:bg-slate-800 hover:text-amber-300 text-slate-200' 
                      : 'hover:bg-[#faf6f4] hover:text-[#953a2e] text-[#1a0f0c]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              {/* Page Number & Return to Cover */}
              <div className="flex items-center gap-2">
                <span className={`font-mono text-xs font-bold ${isDark ? 'text-amber-400' : 'text-[#953a2e]'}`}>
                  {currentPage === 0 ? "Cover Page" : `Page ${currentPage} of ${totalPages - 1}`}
                </span>
                {currentPage > 0 && (
                  <button
                    onClick={() => turnToPage(0)}
                    disabled={isFlipping}
                    className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                      isDark ? 'bg-slate-800 border-amber-500/30 text-amber-300 hover:bg-slate-700' : 'bg-white border-[#953a2e]/30 text-[#953a2e] hover:bg-[#faf6f4]'
                    }`}
                    title="Return to Cover Page"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cover</span>
                  </button>
                )}
              </div>

              {/* Next Page Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1 || isFlipping}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                  currentPage === totalPages - 1 || isFlipping
                    ? 'opacity-30 cursor-not-allowed'
                    : isDark 
                      ? 'hover:bg-slate-800 hover:text-amber-300 text-slate-200' 
                      : 'hover:bg-[#faf6f4] hover:text-[#953a2e] text-[#1a0f0c]'
                }`}
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

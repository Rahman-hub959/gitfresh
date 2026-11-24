// Structured legal content based on user's exact specifications and official visiting card details

export const ADVOCATE_INFO = {
  name: "Simhadri Vasantha Lakshmi",
  title: "Advocate",
  courts: "High Courts of Telangana & Andhra Pradesh",
  insigniaUrl: "/assets/advocate-bands-seal.png",
  photoNamasteUrl: "/assets/advocate-namaste.jpg",
  photoSquareUrl: "/assets/advocate-portrait-square.jpg",
  photoHighCourtUrl: "/assets/advocate-highcourt.jpg",
  contact: {
    phone: "8019189343",
    phoneDisplay: "+91 80191 89343",
    emailPrimary: "legalsource.24@gmail.com",
    emailSecondary: "vasanthahr06@gmail.com",
    corporateOffice: "Uniton Corporate Office, 3rd Floor, Raidurgam, Near Metro, Hyderabad-500081.",
    officeHours: "Monday to Saturday: 10:00 AM – 7:30 PM (By Prior Appointment)",
    disclaimer: "All legal work is subject to professional engagement, applicable law, court jurisdiction and professional availability."
  },
  jurisdictions: [
    {
      court: "High Court of Telangana",
      location: "Hyderabad",
      chambers: "High Court Complex, Ghansi Bazaar, Hyderabad, Telangana",
      corporate: "Uniton Corporate Office, 3rd Floor, Raidurgam, Near Metro, Hyderabad-500081",
      badge: "State of Telangana"
    },
    {
      court: "High Court of Andhra Pradesh",
      location: "Nelapadu, Amaravati",
      chambers: "High Court Buildings Complex, Nelapadu, Amaravati, Andhra Pradesh",
      corporate: "Consultation & Briefing by Prior Appointment",
      badge: "State of Andhra Pradesh"
    }
  ],
  parentsTribute: {
    sectionTitle: "My Inspiration – My Beloved Parents",
    father: "Late Sri Simhadri Prabhakar Rao",
    mother: "Late Smt. Simhadri Venkatalaxmi",
    togetherPhotoUrl: "/assets/parents-together.jpg",
    fatherPhotoUrl: "/assets/father-cameo-new.jpg",
    motherPhotoUrl: "/assets/mother-cameo-new.jpg",
    specialQuote: "“I am the dream they nurtured, the values they taught, and the legacy of love they left behind.”",
    dedicationTag: "Dedicated to my beloved parents",
    bodyParagraphs: [
      "Whatever I am today is because of the love, sacrifices, guidance and values of my beloved parents.",
      "Though they are no longer beside me, their teachings continue to guide my journey, their values shape my character, and their blessings remain my greatest strength.",
      "I dedicate every achievement, every milestone and every step towards my dreams to their loving memory."
    ],
    pledge: "I carry their names with pride, their values with dignity, and their love in my heart forever.",
    closing: "Forever my strength. Forever my inspiration.",
    signature: "Simhadri Vasantha Lakshmi"
  },
  academicBackground: [
    {
      degree: "Bachelor of Science (B.Sc.)",
      short: "B.Sc.",
      discipline: "Sciences & Analytical Forensics",
      description: "Analytical reasoning, factual forensics, objective observation and scientific logic applied to evidential scrutiny."
    },
    {
      degree: "Master of Business Administration (MBA)",
      short: "MBA",
      discipline: "Corporate Management & Commercial Strategy",
      description: "Deep comprehension of commercial dynamics, organizational structures, corporate finance, financial appraisal and contractual risks."
    },
    {
      degree: "Bachelor of Laws (LL.B.)",
      short: "LL.B.",
      discipline: "Substantive & Procedural Jurisprudence",
      description: "Substantive and procedural legal mastery, civil procedure, criminal jurisprudence, constitutional law, trial and appellate advocacy."
    },
    {
      degree: "Master of Laws (LL.M.)",
      status: "Pursuing",
      short: "LL.M. (Pursuing)",
      discipline: "Advanced Jurisprudence & Research",
      description: "Specialized post-graduate research, continuous advancement in modern legal developments, statutory reforms and comparative jurisprudence."
    }
  ],
  quotations: {
    heroTagline: "Justice begins with awareness, grows through knowledge, and stands firm through the rule of law.",
    websiteMotto: "Let knowledge guide the argument, let integrity define the profession, and let justice remain the ultimate purpose.",
    philosophyCore: "Justice is strengthened when knowledge meets responsibility."
  }
};

export const PRACTICE_AREAS = [
  {
    id: "property-civil",
    category: "Civil",
    title: "Property & Civil Law",
    icon: "Building2",
    tagline: "Securing ownership, title clarity, and peaceful possession of property.",
    summary: "Property disputes, title verification, ownership matters, partition, injunctions, succession, land documentation and civil litigation.",
    details: [
      "Title verification & 30-year ancestral encumbrance search",
      "Partition suits, declaratory decrees & possession recovery",
      "Perpetual & temporary injunctions against unlawful interference",
      "Succession, legal heir certificates & mutation of revenue records",
      "Agricultural land scrutiny (ROR / Pattadar passbooks under Record of Rights Acts)",
      "Civil appeals, revisions & writ petitions before High Courts"
    ],
    governingLaws: "Transfer of Property Act, 1882; Specific Relief Act, 1963; Code of Civil Procedure, 1908; Indian Succession Act, 1925."
  },
  {
    id: "family-matrimonial",
    category: "Family",
    title: "Family & Matrimonial Law",
    icon: "Users",
    tagline: "Empathetic, principled dispute resolution and rights protection in familial matters.",
    summary: "Matrimonial disputes, divorce, maintenance, child custody, domestic violence matters and family dispute resolution.",
    details: [
      "Mutual consent & contested divorce proceedings",
      "Interim & permanent maintenance for spouse and children",
      "Child custody, visitation rights & guardianship petitions",
      "Protection orders & relief under the Protection of Women from Domestic Violence Act (PWDVA)",
      "Restitution of conjugal rights & settlement through pre-litigation mediation",
      "Partition of joint family and ancestral estates"
    ],
    governingLaws: "Hindu Marriage Act, 1955; Special Marriage Act, 1954; PWDV Act, 2005; Guardians and Wards Act, 1890; Section 144 BNSS / 125 CrPC."
  },
  {
    id: "criminal-law",
    category: "Criminal",
    title: "Criminal Law",
    icon: "ShieldAlert",
    tagline: "Rigorous defence, safeguarding personal liberty, and constitutional due process.",
    summary: "Criminal complaints, bail-related matters, criminal defence, cheque dishonour proceedings, FIR-related remedies and criminal litigation.",
    details: [
      "Anticipatory bail & regular bail applications before Sessions Courts & High Court",
      "Quashing of FIRs & charge sheets under Section 528 BNSS / Section 482 CrPC",
      "Defence in financial offences, corporate fraud & trial proceedings",
      "Cheque dishonour complaints under Section 138 of the Negotiable Instruments Act",
      "Filing private complaints & statutory criminal revisions",
      "Remedies against illegal detention, police inaction & procedural violations"
    ],
    governingLaws: "Bharatiya Nyaya Sanhita (BNS) / IPC; Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC; Negotiable Instruments Act, 1881."
  },
  {
    id: "corporate-commercial",
    category: "Corporate",
    title: "Corporate & Commercial Law",
    icon: "Briefcase",
    tagline: "Fostering sound commercial governance, resilient contracts, and business viability.",
    summary: "Business agreements, commercial contracts, legal documentation, contractual disputes and corporate legal matters.",
    details: [
      "Drafting & negotiation of Master Services Agreements (MSA), NDAs & vendor contracts",
      "Commercial contractual breach, recovery & specific performance proceedings",
      "Partnership deed formulations, LLP agreements & shareholder dispute advisory",
      "Commercial court litigation & arbitration proceedings",
      "Corporate compliance advisory & statutory regulatory adherence",
      "Employment contracts, non-compete clauses & confidential data protection"
    ],
    governingLaws: "Companies Act, 2013; Indian Contract Act, 1872; Commercial Courts Act, 2015; Arbitration and Conciliation Act, 1996."
  },
  {
    id: "consumer-service",
    category: "Civil",
    title: "Consumer Protection & Service Law",
    icon: "Scale",
    tagline: "Remedying consumer grievances, unfair trade practices, and service deficiencies.",
    summary: "Consumer disputes, deficiency in services, unfair trade practices, product liability and consumer protection proceedings.",
    details: [
      "Complaints before District, State & National Consumer Disputes Redressal Commissions (NCDRC)",
      "Redressal against real estate developers for delayed possession and non-compliance",
      "Insurance claim rejections (health, life, motor) & arbitrary repudiations",
      "Banking & financial service deficiency claims",
      "Product liability actions for defective goods causing loss or damage",
      "Unfair contract terms & deceptive trade advertisements"
    ],
    governingLaws: "Consumer Protection Act, 2019 (CPA 2019) & Consumer Protection Rules."
  },
  {
    id: "banking-finance",
    category: "Banking",
    title: "Banking & Finance Law",
    icon: "Landmark",
    tagline: "Scrutinizing financial securities, mortgage compliance, and debt resolution.",
    summary: "Bank loan documentation, mortgage scrutiny, property title verification, banking disputes, recovery matters and loan-related legal opinions.",
    details: [
      "Title search reports (TSR) & legal audit for nationalized & private banks / NBFCs",
      "Mortgage deed scrutiny, equitable mortgage verification & deposit of title deeds",
      "Advisory on SARFAESI Act proceedings and Debt Recovery Tribunal (DRT) matters",
      "Review of syndicated loan agreements, hypothecation and guarantee bonds",
      "Recovery dispute resolution & negotiated one-time settlements (OTS)",
      "Insolvency and Bankruptcy Code (IBC) corporate and individual creditor advisory"
    ],
    governingLaws: "SARFAESI Act, 2002; Recovery of Debts and Bankruptcy Act, 1993; Banking Regulation Act, 1949; IBC 2016."
  },
  {
    id: "legal-opinions",
    category: "Documentation",
    title: "Legal Opinions & Property Verification",
    icon: "FileSearch",
    tagline: "Uncompromising investigative due diligence to shield your property acquisitions.",
    summary: "Property title scrutiny, verification of ownership documents, encumbrance examination, legal due diligence and written legal opinions.",
    details: [
      "Exhaustive chain-of-title trace spanning minimum 30 to 40 years",
      "Encumbrance Certificate (EC) scrutiny from Sub-Registrar records",
      "Verification of municipal / Gram Panchayat layouts, HMDA / APCRDA approvals",
      "Analysis of Land Ceiling, Inam, Wakf, Endowment & Government land restrictions (Sec 22-A list)",
      "Identification of pending court litigations (Lis Pendens) & mortgage liens",
      "Furnishing structured, reasoned formal written legal opinion certificates"
    ],
    governingLaws: "Registration Act, 1908; Indian Stamp Act, 1899; Urban Development Regulations (HMDA/APCRDA); Sec 22-A Registration Act."
  },
  {
    id: "drafting-documentation",
    category: "Documentation",
    title: "Legal Documentation & Drafting",
    icon: "FileSignature",
    tagline: "Meticulous legal instruments drafted to avert future litigation.",
    summary: "Agreements, sale deeds, gift deeds, settlement deeds, affidavits, declarations, legal notices and other legal instruments.",
    details: [
      "Sale deeds, conveyance deeds, development agreements (DAGPA) & tripartite pacts",
      "Family settlement deeds, partition deeds, relinquishment deeds & gift deeds",
      "Last Will and Testament drafting, codicils & probate guidance",
      "Formal statutory legal notices, demand notices & replies to notices",
      "General & Special Powers of Attorney (GPA / SPA)",
      "Commercial leases, licensing agreements & indemnification covenants"
    ],
    governingLaws: "Indian Contract Act, 1872; Registration Act, 1908; Indian Stamp Act, 1899; Powers of Attorney Act, 1882."
  },
  {
    id: "cyber-law",
    category: "Cyber",
    title: "Cyber Law & Digital Offences",
    icon: "Terminal",
    tagline: "Protecting digital rights, online financial integrity, and countering cyber fraud.",
    summary: "Online financial fraud, UPI scams, identity theft, cyber harassment, social media impersonation and legal remedies relating to cyber offences.",
    details: [
      "Remedies for online banking fraud, phishing, OTP/SIM swapping & illicit UPI deductions",
      "Coordinating with cyber crime police cells & assistance in freezing beneficiary accounts",
      "Legal recourse for cyber stalking, harassment, non-consensual content sharing & defamatory posts",
      "Identity theft, email spoofing, ransomware & impersonation on digital platforms",
      "Adjudication petitions before the State Cyber Adjudicating Officer for compensation",
      "Intermediary liability & takedown notices under the IT Intermediary Rules"
    ],
    governingLaws: "Information Technology Act, 2000 (as amended); IT Intermediary Guidelines; Bharatiya Nyaya Sanhita (BNS)."
  },
  {
    id: "urgent-assistance",
    category: "Urgent",
    title: "Urgent Legal Assistance",
    icon: "Zap",
    tagline: "Prompt legal action when liberty, property, or safety are under immediate threat.",
    summary: "Information and legal guidance relating to time-sensitive matters, including bail, domestic violence, urgent court proceedings and other immediate legal concerns.",
    details: [
      "Urgent move for Anticipatory Bail upon threat of imminent arrest",
      "Interim Status Quo / Ex-parte Ad-Interim Injunctions to stop unlawful demolition or dispossession",
      "Immediate protection orders & safe residence relief in domestic violence emergencies",
      "Habeas Corpus writ petitions before the High Court for illegal police custody",
      "Urgent mentions before vacation or special division benches of High Courts",
      "Immediate reply to statutory notice windows (e.g. 15-day cheque notice or 30-day demand)"
    ],
    governingLaws: "Articles 226/227 of the Constitution of India; BNSS Section 482/483; Section 12 PWDV Act; Order 39 CPC."
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Careful Consideration",
    quote: "Every legal issue deserves careful consideration.",
    body: "No matter is treated as routine. Every factual complexity is examined in its unique constitutional and contextual backdrop to formulate strategic legal remedies."
  },
  {
    number: "02",
    title: "Proper Scrutiny",
    quote: "Every document deserves proper scrutiny.",
    body: "A single unverified clause or missing revenue entry can jeopardize years of investments or freedom. Scrutiny is conducted with thorough, forensic discipline."
  },
  {
    number: "03",
    title: "Professional Responsibility",
    quote: "Every legal proceeding demands professional responsibility.",
    body: "Advocacy requires profound respect for judicial decorum, honesty towards the bench, and uncompromising loyalty to the client's legitimate interests."
  },
  {
    number: "04",
    title: "Constitutional Integrity",
    quote: "Rooted in integrity, continuous learning and respect for the Constitution of India.",
    body: "The true purpose of law is not only to resolve disputes but also to protect fundamental rights, uphold citizen duties and strengthen the fabric of our society."
  }
];

export const LEGAL_AWARENESS_GUIDES = [
  {
    id: "property-checklist",
    category: "Property Law",
    title: "Essential Property Title Due Diligence: 5 Golden Rules",
    readTime: "4 min read",
    highlight: "Crucial prior to executing any sale deed or advance agreement.",
    points: [
      "Verify Chain of Title: Inspect uninterrupted registered title deeds for at least the preceding 30 years.",
      "Encumbrance Certificate (EC): Obtain Nil Encumbrance Certificate for 30+ years from the concerned Sub-Registrar.",
      "Revenue Records & Mutation: Check Pattadar Passbook, ROR 1-B records, Dharani portal (Telangana) / Meebhoomi portal (AP).",
      "Section 22-A Prohibited List: Confirm that the land is not notified under Section 22-A (Endowment, Wakf, assigned or government land).",
      "Layout & Master Plan Approvals: Check sanction from municipal corporations (GHMC, VMRDA) or regional bodies (HMDA, APCRDA)."
    ]
  },
  {
    id: "cyber-fraud-guide",
    category: "Cyber Safety",
    title: "What to Do Within the 'Golden Hour' of Online Financial Fraud",
    readTime: "3 min read",
    highlight: "Immediate action significantly increases the chance of recovering lost funds.",
    points: [
      "Call Cyber Crime Helpline 1930 immediately to freeze the money trail across beneficiary accounts.",
      "Register a complaint on cybercrime.gov.in and obtain an acknowledgement number.",
      "Notify your bank branch manager in writing within 3 business days to claim zero liability under RBI guidelines.",
      "Preserve all transaction IDs, SMS alerts, UPI reference numbers, screenshot receipts and WhatsApp chat histories.",
      "File a police complaint at the nearest Cyber Crime Police Station or approach the High Court / Cyber Adjudicator if inaction occurs."
    ]
  },
  {
    id: "cheque-bounce-guide",
    category: "Commercial & Criminal",
    title: "Cheque Dishonour: Statutory Timelines Under Section 138 NI Act",
    readTime: "3 min read",
    highlight: "Strict adherence to statutory limitation periods is mandatory.",
    points: [
      "Bank Return Memo: Receive the memo showing reasons such as 'Funds Insufficient' or 'Account Closed'.",
      "30-Day Notice Window: Demand notice must be dispatched via registered post within 30 days of receiving the return memo.",
      "15-Day Payment Opportunity: The drawer must be afforded 15 clear days from notice receipt to pay the amount.",
      "30-Day Filing Period: If the amount remains unpaid, a formal criminal complaint must be filed before the Magistrate within 30 days thereafter.",
      "Civil Recovery: You may also concurrently initiate a summary suit under Order 37 of the CPC for monetary recovery."
    ]
  },
  {
    id: "urgent-bail-rights",
    category: "Criminal Procedure",
    title: "Arrest & Bail: Constitutional Safeguards Every Citizen Must Know",
    readTime: "4 min read",
    highlight: "Articles 21 & 22 of the Constitution guarantee inviolable procedural protections.",
    points: [
      "Notice of Appearance: Under Section 35 BNSS (formerly 41A CrPC), for offences punishable with up to 7 years imprisonment, police must first issue a notice instead of arrest.",
      "Right to Know Grounds: The arresting officer must inform you of the full grounds of arrest and notify a chosen relative immediately.",
      "Medical Examination & 24-Hour Production: Mandatory production before the nearest Judicial Magistrate within 24 hours of arrest.",
      "Anticipatory Bail: If there is reasonable apprehension of arrest in a non-bailable accusation, an application can be preferred before the Sessions Court or High Court.",
      "Right to Legal Representation: Right to consult and be defended by an advocate of your choice is an inviolable fundamental right."
    ]
  }
];

export const OPINION_PIPELINE = [
  {
    step: "01",
    name: "Document Intake & Preliminary Scrutiny",
    desc: "Systematic cataloguing of all link deeds, title documents, revenue extracts, agreements or pleadings provided by the client."
  },
  {
    step: "02",
    name: "Verification of Public Records & Encumbrances",
    desc: "Independent verification against Sub-Registrar records, municipal sanction maps, government prohibited property portals and court dockets."
  },
  {
    step: "03",
    name: "Identification of Legal Vulnerabilities & Precedents",
    desc: "Rigorous legal research evaluating statutory compliance, potential third-party claims, limitation risks and landmark Supreme Court & High Court rulings."
  },
  {
    step: "04",
    name: "Preparation of Reasoned Written Opinion",
    desc: "Delivery of a comprehensive, unambiguous written legal opinion setting out factual findings, legal merits, risks, and proactive recommendations."
  }
];

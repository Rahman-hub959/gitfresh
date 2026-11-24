import os
import subprocess

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Typography & Font Specification Guide — Advocate Simhadri Vasantha Lakshmi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Poppins:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 10mm 8mm 10mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body {
      font-family: 'Source Sans 3', -apple-system, sans-serif;
      color: #1a202c;
      background: #ffffff;
      font-size: 8pt;
      line-height: 1.3;
    }
    
    /* Header Container */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #d4af37;
      padding-bottom: 6px;
      margin-bottom: 7px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-logo {
      width: 40px;
      height: 40px;
      object-fit: contain;
      border: 1.5px solid #d4af37;
      border-radius: 7px;
      padding: 2px;
      background: #ffffff;
    }
    .header-title h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 12pt;
      font-weight: 800;
      color: #070d18;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .header-title p {
      font-family: 'Poppins', sans-serif;
      font-size: 7.2pt;
      font-weight: 600;
      color: #b38728;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .header-meta {
      text-align: right;
      font-size: 7pt;
      color: #4a5568;
    }
    .header-meta strong {
      color: #070d18;
      font-family: 'Poppins', sans-serif;
    }

    /* Section Cards */
    .section-title {
      font-family: 'Poppins', sans-serif;
      font-size: 8.8pt;
      font-weight: 800;
      color: #0c1830;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      border-left: 3px solid #b38728;
      padding-left: 5px;
      margin: 6px 0 4px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .section-tag {
      font-size: 6.8pt;
      font-weight: 600;
      color: #b38728;
      text-transform: none;
      letter-spacing: normal;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 5px;
      font-size: 7.2pt;
    }
    th {
      background: #0f1c34;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 6.8pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 3px 5px;
      text-align: left;
      border: 1px solid #0f1c34;
    }
    td {
      padding: 3px 5px;
      border: 1px solid #e2e8f0;
      vertical-align: middle;
      line-height: 1.25;
    }
    tr:nth-child(even) {
      background: #f8fafc;
    }
    .font-badge {
      display: inline-block;
      font-size: 6.8pt;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 3px;
      letter-spacing: 0.3px;
    }
    .badge-garamond { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; font-family: 'Cormorant Garamond', serif; font-size: 8pt; font-style: italic; font-weight: 700; }
    .badge-poppins { background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; font-family: 'Poppins', sans-serif; }
    .badge-cinzel { background: #fae8ff; color: #86198f; border: 1px solid #f5d0fe; font-family: 'Cinzel', serif; font-weight: 700; }
    .badge-sans { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; font-family: 'Source Sans 3', sans-serif; }

    /* Highlights Grid */
    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
      margin-bottom: 5px;
    }
    .highlight-card {
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      padding: 4px 6px;
      background: #ffffff;
      border-top: 2px solid #d4af37;
    }
    .highlight-card h4 {
      font-family: 'Poppins', sans-serif;
      font-size: 6.8pt;
      font-weight: 700;
      color: #070d18;
      text-transform: uppercase;
      margin-bottom: 1px;
    }
    .highlight-card .sample {
      margin: 1px 0;
      line-height: 1.15;
    }
    .highlight-card p {
      font-size: 6.4pt;
      color: #64748b;
      line-height: 1.2;
    }

    /* Callout Note */
    .callout {
      background: #faf7ee;
      border: 1px solid #e5c158;
      border-left: 3px solid #b38728;
      border-radius: 4px;
      padding: 4px 7px;
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .callout-text {
      font-size: 6.8pt;
      color: #78350f;
      line-height: 1.25;
    }
    .callout-text strong {
      color: #070d18;
      font-family: 'Poppins', sans-serif;
    }

    /* Footer */
    .footer {
      border-top: 1px solid #cbd5e1;
      padding-top: 4px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 6.5pt;
      color: #64748b;
    }
    .footer strong {
      color: #070d18;
    }
  </style>
</head>
<body>

  <!-- Top Header -->
  <div class="header">
    <div class="header-left">
      <img src="d:/advocate/public/assets/svl-advocate-seal-white.jpg" alt="Logo" class="header-logo">
      <div class="header-title">
        <h1>Simhadri Vasantha Lakshmi</h1>
        <p>Advocate &bull; High Courts of Telangana & Andhra Pradesh</p>
      </div>
    </div>
    <div class="header-meta">
      <div><strong>Document:</strong> Typography & Font Size Specification</div>
      <div><strong>Application:</strong> High Court Law Practice Web Platform</div>
      <div><strong>Theme:</strong> Royal Midnight Sapphire & 24K Gold Foil</div>
    </div>
  </div>

  <!-- SECTION 1: 4 Core Font Families -->
  <div class="section-title">
    <span>1. Core Font System (4 Primary Font Families)</span>
    <span class="section-tag">Imported via Google Fonts</span>
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 22%;">Font Family</th>
        <th style="width: 15%;">Classification</th>
        <th style="width: 20%;">Weights in Code</th>
        <th style="width: 43%;">Primary Architectural Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="font-badge badge-poppins">Poppins</span></td>
        <td>Geometric Sans-Serif</td>
        <td>Bold (700), ExtraBold (800), Black (900)</td>
        <td><strong>Primary Branding & Structural Headings:</strong> Section headers, navigation bar, CTA action buttons, category filter tabs, form field labels.</td>
      </tr>
      <tr>
        <td><span class="font-badge badge-garamond">Cormorant Garamond</span></td>
        <td>Classical High-Contrast Serif</td>
        <td>SemiBold (600), Bold (700), Italic</td>
        <td><strong>All Philosophical Quotations & Legal Creeds:</strong> Core creed cards, memorial quotes, sacred daughter pledge, footer maxim, book inscriptions.</td>
      </tr>
      <tr>
        <td><span class="font-badge badge-cinzel">Cinzel</span></td>
        <td>Classical Roman Inscriptional</td>
        <td>SemiBold (600), Bold (700), Black (900)</td>
        <td><strong>Monumental & Memorial Typography:</strong> Parents memorial title, mother & father gold names, protocol numerals (01–04), Latin motto ("Lex & Justitia").</td>
      </tr>
      <tr>
        <td><span class="font-badge badge-sans">Source Sans 3</span></td>
        <td>Humanist Editorial Sans</td>
        <td>Regular (400), Medium (500), SemiBold (600)</td>
        <td><strong>All Prose, Reading Body & Due Diligence:</strong> Editorial body copy, practice descriptions, title checklist points, legal awareness guides, form inputs.</td>
      </tr>
    </tbody>
  </table>

  <!-- SECTION 2: Font Sizes & Exact Where-Used Mapping -->
  <div class="section-title">
    <span>2. Comprehensive Font Size, Weight & Usage Mapping</span>
    <span class="section-tag">Responsive Desktop & Mobile Specs</span>
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 13%;">Font Size</th>
        <th style="width: 12%;">Pixels / Rem</th>
        <th style="width: 20%;">Font & Weight</th>
        <th style="width: 33%;">Exact Where-Used Across Platform</th>
        <th style="width: 22%;">Sample / CSS Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Display H1 / H2</strong></td>
        <td>36px – 48px<br><span style="color:#64748b;">(2.25rem–3.0rem)</span></td>
        <td><span class="font-badge badge-poppins">Poppins</span> 800 ExtraBold<br><span class="font-badge badge-cinzel">Cinzel</span> 700 Bold</td>
        <td>&bull; <strong>Main Section Headings:</strong> "Areas of Legal Practice", "Legal Opinions & Documentation", "My Philosophy", "About the Advocate", "Chambers".<br>&bull; <strong>Parents Memorial:</strong> Section Title.</td>
        <td><code>text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight</code></td>
      </tr>
      <tr>
        <td><strong>Grand Quotations</strong></td>
        <td>24px – 36px<br><span style="color:#64748b;">(1.5rem–2.25rem)</span></td>
        <td><span class="font-badge badge-garamond">C. Garamond</span> <strong>700 Bold</strong><br><em>Italic style</em></td>
        <td>&bull; <strong>Philosophy Central Quote:</strong> "Justice is strengthened when knowledge meets responsibility."<br>&bull; <strong>Legal Opinions Banner:</strong> "A legally sound decision begins with proper examination..."<br>&bull; <strong>Parents Memorial Banner:</strong> "I am the dream they nurtured..."</td>
        <td><code>font-garamond italic font-bold text-2xl sm:text-3xl lg:text-4xl text-amber-100</code></td>
      </tr>
      <tr>
        <td><strong>Card Headings & Numerals</strong></td>
        <td>20px – 24px<br><span style="color:#64748b;">(1.25rem–1.5rem)</span></td>
        <td><span class="font-badge badge-cinzel">Cinzel</span> 900 Black<br><span class="font-badge badge-poppins">Poppins</span> 700 Bold</td>
        <td>&bull; <strong>Protocol Numerals:</strong> 01, 02, 03, 04 in Legal Opinions.<br>&bull; <strong>Parents Names:</strong> Late Sri Simhadri Prabhakar Rao & Late Smt. Simhadri Venkatalaxmi.<br>&bull; <strong>Card Titles:</strong> Scrutiny checklist title, practice modal headings.</td>
        <td><code>font-cinzel text-2xl sm:text-3xl font-black text-amber-400</code></td>
      </tr>
      <tr>
        <td><strong>Sub-Headings & Creeds</strong></td>
        <td>18px – 20px<br><span style="color:#64748b;">(1.125rem–1.25rem)</span></td>
        <td><span class="font-badge badge-garamond">C. Garamond</span> <strong>700 Bold</strong><br><span class="font-badge badge-poppins">Poppins</span> 600 SemiBold</td>
        <td>&bull; <strong>Hero Core Creed:</strong> "Let knowledge guide the argument, let integrity define the profession..."<br>&bull; <strong>Footer Signature Banner:</strong> Full maxim quotation.<br>&bull; <strong>Sacred Daughter's Pledge:</strong> “I carry their names with pride...”</td>
        <td><code>font-garamond italic font-bold text-xl sm:text-2xl text-amber-100</code></td>
      </tr>
      <tr>
        <td><strong>Standard Body Text</strong></td>
        <td>15px – 16px<br><span style="color:#64748b;">(0.938rem–1.0rem)</span></td>
        <td><span class="font-badge badge-sans">Source Sans 3</span> 400 Reg / 500 Med</td>
        <td>&bull; <strong>Editorial Paragraphs:</strong> Philosophy introductory narrative, practice area summaries, parents tribute body paragraphs.<br>&bull; <strong>About Section:</strong> Advocate bio and academic synthesis paragraphs.</td>
        <td><code>font-sans text-sm sm:text-base leading-relaxed text-slate-300</code></td>
      </tr>
      <tr>
        <td><strong>Compact Body & Lists</strong></td>
        <td>13px – 14px<br><span style="color:#64748b;">(0.813rem–0.875rem)</span></td>
        <td><span class="font-badge badge-sans">Source Sans 3</span> 400 Reg / 500 Med</td>
        <td>&bull; <strong>Practice Area Cards:</strong> High Court / Trial Courts scope copy.<br>&bull; <strong>Title Scrutiny Tool:</strong> Document item names (Parent deeds, 30-yr EC).<br>&bull; <strong>Legal Awareness:</strong> 5 Golden Rules checklist & NI Act timelines.<br>&bull; <strong>Chambers Form:</strong> Input fields (Name, Phone, Email, Facts textarea).</td>
        <td><code>font-sans text-xs sm:text-sm leading-relaxed text-slate-300 / text-[#333]</code></td>
      </tr>
      <tr>
        <td><strong>Buttons, Pills & Badges</strong></td>
        <td>11px – 12px<br><span style="color:#64748b;">(0.688rem–0.75rem)</span></td>
        <td><span class="font-badge badge-poppins">Poppins</span> 700 Bold<br><em>Uppercase + tracking</em></td>
        <td>&bull; <strong>Primary Action Buttons:</strong> "CONSULT CHAMBERS", "SUBMIT REQUEST".<br>&bull; <strong>Section Eyebrow Pills:</strong> "ETHICAL FOUNDATIONS", "COMPREHENSIVE LEGAL VERTICALS".<br>&bull; <strong>Header Navigation:</strong> Philosophy, Practice, Opinions, About, Chambers.</td>
        <td><code>font-display text-xs font-bold uppercase tracking-wider</code></td>
      </tr>
      <tr>
        <td><strong>Micro Metadata & Monospace</strong></td>
        <td>10px – 11px<br><span style="color:#64748b;">(0.625rem–0.688rem)</span></td>
        <td><code>font-mono</code> 600 SemiBold<br><span class="font-badge badge-poppins">Poppins</span> 700 Bold</td>
        <td>&bull; <strong>Qualifications Tag:</strong> "B.Sc. &bull; MBA &bull; LL.B. &bull; LL.M. (Pursuing)" in Header & Hero.<br>&bull; <strong>Court Subtitles:</strong> "Hyderabad Complex &bull; Amaravati Complex".<br>&bull; <strong>Readiness Score:</strong> "50 / 100", reading times ("3 min read"), BCI notices.</td>
        <td><code>text-[10px] / text-[11px] font-mono / font-display tracking-widest</code></td>
      </tr>
    </tbody>
  </table>

  <!-- SECTION 3: Visual Style Demonstrations -->
  <div class="section-title">
    <span>3. Style & Character Reference Snapshot</span>
    <span class="section-tag">Visual Preview</span>
  </div>
  <div class="highlights-grid">
    <div class="highlight-card">
      <h4>Primary Display</h4>
      <div class="sample" style="font-family:'Poppins',sans-serif; font-size:10pt; font-weight:800; color:#0c1830;">
        Areas of Practice
      </div>
      <p>Clean, bold, modern geometric sans-serif ensuring instant authority and structural prominence.</p>
    </div>
    <div class="highlight-card">
      <h4>Quotation Maxim</h4>
      <div class="sample" style="font-family:'Cormorant Garamond',serif; font-size:11pt; font-weight:700; font-style:italic; color:#92400e;">
        “Justice begins with awareness...”
      </div>
      <p>High-contrast calligraphic serif strictly configured in <strong>bold italic</strong> for solemnity and dignity.</p>
    </div>
    <div class="highlight-card">
      <h4>Classical Inscription</h4>
      <div class="sample" style="font-family:'Cinzel',serif; font-size:10pt; font-weight:900; color:#070d18; letter-spacing:0.5px;">
        01 &bull; LEX & JUSTITIA
      </div>
      <p>Roman capital proportions inspired by classical judicial inscriptions and monumental stone carving.</p>
    </div>
    <div class="highlight-card">
      <h4>Editorial Body</h4>
      <div class="sample" style="font-family:'Source Sans 3',sans-serif; font-size:8.5pt; font-weight:500; color:#334155;">
        Thorough scrutiny of parent deeds for 30+ uninterrupted years.
      </div>
      <p>Highly legible humanist text type designed for continuous reading on screen and high-resolution print.</p>
    </div>
  </div>

  <!-- Bottom Mandatory Rule Note -->
  <div class="callout">
    <div class="callout-text">
      <strong>Core Design Mandate Enforced:</strong> ALL quotations across every section (Hero, Philosophy, Opinions, Memorial, Awareness, Footer) are strictly styled with <strong>bold weight (font-bold)</strong>, italic slant, and luminous gold tone (<code>text-amber-100</code> / <code>drop-shadow</code>) for maximum legibility and executive High Court presence.
    </div>
  </div>

  <!-- Document Signoff Footer -->
  <div class="footer">
    <div><strong>Platform:</strong> <a href="https://advocateprotfolio.vercel.app" style="color:#0369a1; text-decoration:none;">advocateprotfolio.vercel.app</a> &bull; GitHub: <code>Rahman-hub959/gitfresh</code></div>
    <div>Certified Design System &bull; Simhadri Vasantha Lakshmi, Advocate &bull; High Courts of TG & AP</div>
  </div>

</body>
</html>
"""

html_path = 'd:/advocate/typography-specification.html'
pdf_path = 'd:/advocate/public/Advocate_Typography_Specification_Guide.pdf'
pdf_root = 'd:/advocate/Advocate_Typography_Specification_Guide.pdf'

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"HTML written to {html_path}")

# Run headless Edge to print pixel-perfect A4 PDF
edge_cmd = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "--headless",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_path}",
    html_path
]

res = subprocess.run(edge_cmd, capture_output=True, text=True)
print("Edge returncode:", res.returncode)

# Copy to root as well
import shutil
shutil.copyfile(pdf_path, pdf_root)
print(f"PDF successfully generated at {pdf_path} and {pdf_root}!")

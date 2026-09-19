window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv75 - Acute Coronary Syndrome and MI Part II: Management and Outcomes
// (M. Mourad, D.O.).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv75-stemi-ecg-evolution"] = {
  title: "How a STEMI evolves on the ECG",
  caption:
    "Six frames of one lead over time, in the order of Slide 22. The highlight walks left to right: the <strong>hyperacute T wave</strong> " +
    "appears within minutes and is the first sign of injury; <strong>ST elevation</strong> follows within minutes to hours; " +
    "<strong>Q waves</strong> appear from 1 to 12 hours; over days the T wave <strong>inverts</strong> while the ST segment is still up; " +
    "after weeks to months the T wave recovers, and the <strong>pathologic Q wave</strong> is what remains - the permanent marker of a prior MI. " +
    "Waveform shapes are schematic, not to scale.",
  svg: `
<svg viewBox="0 0 630 250" role="img" aria-label="Six small ECG panels in a row showing STEMI evolution over time. Panel one, normal beat. Panel two, minutes: tall peaked hyperacute T wave. Panel three, minutes to hours: ST segment elevation. Panel four, 1 to 12 hours: ST elevation with a new Q wave. Panel five, days: ST elevation with T wave inversion. Panel six, weeks to months: T wave upright again with a persistent pathologic Q wave indicating prior MI. A highlight moves from left to right across the panels.">
  <style>
    .dg75a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg75a-hi    { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: .12; animation: dg75aWalk 12s linear infinite; }
    .dg75a-base  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 3; }
    .dg75a-trace { fill: none; stroke: var(--dg-ink); stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg75a-key   { fill: none; stroke: var(--dg-warm); stroke-width: 2.8; stroke-linejoin: round; stroke-linecap: round; }
    .dg75a-time  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg75a-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg75a-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg75a-axis  { stroke: var(--dg-muted); stroke-width: 1.4; }
    .dg75a-d1 { animation-delay: 0s; }
    .dg75a-d2 { animation-delay: 2s; }
    .dg75a-d3 { animation-delay: 4s; }
    .dg75a-d4 { animation-delay: 6s; }
    .dg75a-d5 { animation-delay: 8s; }
    .dg75a-d6 { animation-delay: 10s; }
    @keyframes dg75aWalk { 0% { opacity: .12 } 3% { opacity: 1 } 15% { opacity: 1 } 18% { opacity: .12 } 100% { opacity: .12 } }
  </style>

  <line x1="12" y1="22" x2="604" y2="22" class="dg75a-axis"/>
  <polygon points="604,17 616,22 604,27" fill="var(--dg-muted)"/>
  <text x="14" y="14" class="dg75a-sub">time since coronary occlusion</text>

  <text x="18"  y="42" class="dg75a-time">Baseline</text>
  <text x="120" y="42" class="dg75a-time">Minutes</text>
  <text x="222" y="42" class="dg75a-time">Minutes-hours</text>
  <text x="324" y="42" class="dg75a-time">1-12 hours</text>
  <text x="426" y="42" class="dg75a-time">Days</text>
  <text x="528" y="42" class="dg75a-time">Weeks-months</text>

  <g transform="translate(12,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d1"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80 L37,86 L42,30 L47,90 L50,80 L60,80 Q68,64 76,80 L90,80"/>
  </g>
  <g transform="translate(114,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d2"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80 L37,86 L42,30 L47,90 L50,80 L56,80"/>
    <path class="dg75a-key" d="M56,80 Q66,26 80,80 L90,80"/>
  </g>
  <g transform="translate(216,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d3"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80 L37,86 L42,30 L46,60"/>
    <path class="dg75a-key" d="M46,60 C54,50 66,48 74,62 L80,80 L90,80"/>
  </g>
  <g transform="translate(318,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d4"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80"/>
    <path class="dg75a-key" d="M34,80 L37,100 L42,42 L46,60 C54,50 66,48 74,62 L80,80 L90,80"/>
  </g>
  <g transform="translate(420,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d5"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80 L37,100 L42,46 L46,64 L56,66"/>
    <path class="dg75a-key" d="M56,66 Q66,106 76,80 L90,80"/>
  </g>
  <g transform="translate(522,50)">
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-box"/>
    <rect x="0" y="0" width="94" height="120" rx="8" class="dg75a-hi dg75a-d6"/>
    <line x1="4" y1="80" x2="90" y2="80" class="dg75a-base"/>
    <path class="dg75a-trace" d="M4,80 L14,80 Q20,72 26,80 L34,80"/>
    <path class="dg75a-key" d="M34,80 L37,100 L42,48"/>
    <path class="dg75a-trace" d="M42,48 L47,80 L60,80 Q68,64 76,80 L90,80"/>
  </g>

  <text x="18"  y="190" class="dg75a-lbl">Normal</text>
  <text x="120" y="190" class="dg75a-lbl">Hyperacute T</text>
  <text x="120" y="204" class="dg75a-sub">first sign of injury</text>
  <text x="222" y="190" class="dg75a-lbl">ST elevation</text>
  <text x="222" y="204" class="dg75a-sub">transmural injury</text>
  <text x="324" y="190" class="dg75a-lbl">ST elev + Q wave</text>
  <text x="324" y="204" class="dg75a-sub">Q deepens, widens</text>
  <text x="426" y="190" class="dg75a-lbl">T inversion</text>
  <text x="426" y="204" class="dg75a-sub">ST still elevated</text>
  <text x="528" y="190" class="dg75a-lbl">T recovers + Q</text>
  <text x="528" y="204" class="dg75a-sub">Q wave = prior MI</text>

  <text x="18" y="236" class="dg75a-sub">Orange = the change that defines each stage (Slide 22).</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv75-biomarker-reinfarction-window"] = {
  title: "Troponin vs. CK-MB: why CK-MB catches reinfarction",
  caption:
    "Both markers rise within hours of an MI, but they clear at very different speeds: <strong>troponin</strong> rises at about 4 hours, peaks at 24 hours " +
    "and stays up for <strong>7-10 days</strong>; <strong>CK-MB</strong> rises at 4-8 hours, peaks at 16-24 hours and is back to baseline by " +
    "<strong>48-72 hours</strong> (Slides 33-34). Follow the sweep to day 5, the lecturer's example of new chest pain after a treated STEMI: troponin is still " +
    "elevated from the first infarct and cannot flag a new one, but CK-MB had already normalized, so a <strong>fresh CK-MB rise means reinfarction</strong>. " +
    "Curve heights are schematic.",
  svg: `
<svg viewBox="0 0 630 290" role="img" aria-label="Graph of cardiac biomarker level against days after myocardial infarction, from day 0 to day 10. The troponin curve rises within hours, peaks at day 1, and slowly falls back to normal around days 7 to 10. The CK-MB curve is lower, peaks at about day 1, and returns to normal by days 2 to 3. At day 5 a dashed second CK-MB peak appears, labelled reinfarction, while the troponin curve is still above normal. A vertical line sweeps from left to right across the days.">
  <style>
    .dg75b-ax    { stroke: var(--dg-line); stroke-width: 1.3; }
    .dg75b-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 5; opacity: .7; }
    .dg75b-trop  { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg75b-ck    { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg75b-re    { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 6 4; stroke-linecap: round; animation: dg75bRe 10s ease-in-out infinite; }
    .dg75b-zone  { fill: var(--dg-good); opacity: .12; }
    .dg75b-sweep { stroke: var(--dg-ink); stroke-width: 1.4; opacity: .45; animation: dg75bSweep 10s linear infinite; }
    .dg75b-lbl   { font-size: 11px; font-weight: 700; }
    .dg75b-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg75b-tick  { font-size: 9.5px; fill: var(--dg-muted); }
    @keyframes dg75bSweep { from { transform: translateX(0) } to { transform: translateX(520px) } }
    @keyframes dg75bRe { 0%,48% { opacity: .35 } 56%,92% { opacity: 1 } 100% { opacity: .35 } }
  </style>

  <text x="14" y="18" class="dg75b-lbl" fill="var(--dg-accent)">BIOMARKER LEVEL AFTER MI</text>

  <rect x="200" y="40" width="390" height="190" class="dg75b-zone"/>
  <text x="208" y="54" class="dg75b-sub" fill="var(--dg-good)">after ~3 days: CK-MB should be normal</text>

  <line x1="70" y1="40" x2="70" y2="230" class="dg75b-ax"/>
  <line x1="70" y1="230" x2="596" y2="230" class="dg75b-ax"/>
  <line x1="70" y1="214" x2="590" y2="214" class="dg75b-grid"/>
  <text x="14" y="217" class="dg75b-sub">normal limit</text>

  <line x1="122" y1="40" x2="122" y2="230" class="dg75b-grid"/>
  <line x1="226" y1="40" x2="226" y2="230" class="dg75b-grid"/>
  <line x1="330" y1="40" x2="330" y2="230" class="dg75b-grid"/>
  <line x1="434" y1="40" x2="434" y2="230" class="dg75b-grid"/>
  <line x1="538" y1="40" x2="538" y2="230" class="dg75b-grid"/>
  <text x="66"  y="246" class="dg75b-tick">0</text>
  <text x="118" y="246" class="dg75b-tick">1</text>
  <text x="222" y="246" class="dg75b-tick">3</text>
  <text x="326" y="246" class="dg75b-tick">5</text>
  <text x="430" y="246" class="dg75b-tick">7</text>
  <text x="534" y="246" class="dg75b-tick">9</text>
  <text x="270" y="264" class="dg75b-sub">days after MI onset</text>

  <path class="dg75b-trop" d="M70,229 L79,226 C95,150 106,58 122,58 C160,58 200,150 260,188 C330,210 430,214 512,216 L590,217"/>
  <path class="dg75b-ck" d="M70,229 L84,226 C96,200 104,166 114,166 C136,166 162,214 196,222 L590,224"/>
  <path class="dg75b-re" d="M346,222 C360,196 368,170 380,170 C400,170 420,210 456,222"/>

  <text x="204" y="92" class="dg75b-lbl" fill="var(--dg-cool)">Troponin</text>
  <text x="130" y="160" class="dg75b-lbl" fill="var(--dg-warm)">CK-MB</text>

  <line x1="420" y1="76" x2="444" y2="76" class="dg75b-trop"/>
  <text x="450" y="80" class="dg75b-sub">Troponin: ~4 h, 24 h, 7-10 d</text>
  <line x1="420" y1="96" x2="444" y2="96" class="dg75b-ck"/>
  <text x="450" y="100" class="dg75b-sub">CK-MB: 4-8 h, 16-24 h, 48-72 h</text>
  <text x="420" y="116" class="dg75b-sub">rise, peak, back to baseline</text>

  <text x="388" y="152" class="dg75b-lbl" fill="var(--dg-warm)">New CK-MB rise</text>
  <text x="388" y="165" class="dg75b-sub">day 5 chest pain = reinfarction</text>
  <text x="270" y="200" class="dg75b-sub" fill="var(--dg-cool)">troponin still up</text>

  <line x1="70" y1="40" x2="70" y2="230" class="dg75b-sweep"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv75-post-mi-complication-timeline"] = {
  title: "Post-MI complications on the clock",
  caption:
    "The complications track the healing infarct, using this lecture's windows (Slides 50-54): <strong>0-24 hours</strong> electrically unstable muscle " +
    "(VT/VF); <strong>1-3 days</strong> inflamed surface (fibrinous pericarditis); <strong>3-5 days</strong> soft necrotic muscle tears inside the heart " +
    "(papillary muscle with an RCA infarct, septum with an LAD infarct); <strong>5-14 days</strong> the free wall tears or is walled off as a pseudoaneurysm; " +
    "<strong>2 weeks to months</strong> scar (true aneurysm, persistent ST elevation) and an autoimmune pericarditis (Dressler). " +
    "The bands are equal width for legibility - the time axis is not to scale.",
  svg: `
<svg viewBox="0 0 630 280" role="img" aria-label="A timeline with five equal bands after myocardial infarction. Zero to 24 hours: ventricular arrhythmias, VT or VF, reentry. One to three days: early fibrinous pericarditis. Three to five days: papillary muscle rupture with RCA infarct causing acute mitral regurgitation, and septal rupture with LAD infarct causing oxygen step-up in the right ventricle. Five to fourteen days: pseudoaneurysm and free wall rupture causing tamponade. Two weeks to months: true aneurysm with persistent ST elevation, and Dressler syndrome, autoimmune pericarditis. A marker travels along the timeline highlighting each band in turn.">
  <style>
    .dg75c-band  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg75c-hi    { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: .12; animation: dg75cStep 10s linear infinite; }
    .dg75c-e1 { animation-delay: 0s; }
    .dg75c-e2 { animation-delay: 2s; }
    .dg75c-e3 { animation-delay: 4s; }
    .dg75c-e4 { animation-delay: 6s; }
    .dg75c-e5 { animation-delay: 8s; }
    @keyframes dg75cStep { 0% { opacity: .12 } 3% { opacity: 1 } 18% { opacity: 1 } 21% { opacity: .12 } 100% { opacity: .12 } }
    .dg75c-axis  { stroke: var(--dg-muted); stroke-width: 1.6; }
    .dg75c-dot   { fill: var(--dg-accent); animation: dg75cMove 10s linear infinite; }
    @keyframes dg75cMove { from { transform: translateX(0) } to { transform: translateX(590px) } }
    .dg75c-time  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg75c-kind  { font-size: 9px; font-weight: 700; letter-spacing: .06em; }
    .dg75c-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg75c-sub   { font-size: 9.5px; fill: var(--dg-muted); }
  </style>

  <line x1="12" y1="30" x2="610" y2="30" class="dg75c-axis"/>
  <polygon points="610,25 622,30 610,35" fill="var(--dg-muted)"/>
  <circle cx="14" cy="30" r="6" class="dg75c-dot"/>

  <text x="18"  y="54" class="dg75c-time">0-24 h</text>
  <text x="138" y="54" class="dg75c-time">1-3 days</text>
  <text x="258" y="54" class="dg75c-time">3-5 days</text>
  <text x="378" y="54" class="dg75c-time">5-14 days</text>
  <text x="498" y="54" class="dg75c-time">2 wk-months</text>

  <rect x="12"  y="62" width="114" height="200" rx="8" class="dg75c-band"/>
  <rect x="132" y="62" width="114" height="200" rx="8" class="dg75c-band"/>
  <rect x="252" y="62" width="114" height="200" rx="8" class="dg75c-band"/>
  <rect x="372" y="62" width="114" height="200" rx="8" class="dg75c-band"/>
  <rect x="492" y="62" width="126" height="200" rx="8" class="dg75c-band"/>
  <rect x="12"  y="62" width="114" height="200" rx="8" class="dg75c-hi dg75c-e1"/>
  <rect x="132" y="62" width="114" height="200" rx="8" class="dg75c-hi dg75c-e2"/>
  <rect x="252" y="62" width="114" height="200" rx="8" class="dg75c-hi dg75c-e3"/>
  <rect x="372" y="62" width="114" height="200" rx="8" class="dg75c-hi dg75c-e4"/>
  <rect x="492" y="62" width="126" height="200" rx="8" class="dg75c-hi dg75c-e5"/>

  <text x="20" y="80" class="dg75c-kind" fill="var(--dg-warm)">ELECTRICAL</text>
  <text x="20" y="100" class="dg75c-lbl">Ventricular</text>
  <text x="20" y="114" class="dg75c-lbl">arrhythmias</text>
  <text x="20" y="130" class="dg75c-sub">VT or VF</text>
  <text x="20" y="144" class="dg75c-sub">reentrant circuits</text>
  <text x="20" y="158" class="dg75c-sub">most common early</text>
  <text x="20" y="172" class="dg75c-sub">complication</text>

  <text x="140" y="80" class="dg75c-kind" fill="var(--dg-cool)">INFLAMMATORY</text>
  <text x="140" y="100" class="dg75c-lbl">Early</text>
  <text x="140" y="114" class="dg75c-lbl">pericarditis</text>
  <text x="140" y="130" class="dg75c-sub">fibrinous</text>
  <text x="140" y="144" class="dg75c-sub">pleuritic pain, rub</text>
  <text x="140" y="158" class="dg75c-sub">self-limited, NSAIDs</text>

  <text x="260" y="80" class="dg75c-kind" fill="var(--dg-warm)">MECHANICAL</text>
  <text x="260" y="100" class="dg75c-lbl">Papillary muscle</text>
  <text x="260" y="114" class="dg75c-lbl">rupture</text>
  <text x="260" y="130" class="dg75c-sub">posteromedial, RCA</text>
  <text x="260" y="144" class="dg75c-sub">acute MR, pulm edema</text>
  <text x="260" y="170" class="dg75c-lbl">Septal rupture</text>
  <text x="260" y="186" class="dg75c-sub">LAD infarct</text>
  <text x="260" y="200" class="dg75c-sub">L-to-R shunt</text>
  <text x="260" y="214" class="dg75c-sub">O2 step-up in RV</text>

  <text x="380" y="80" class="dg75c-kind" fill="var(--dg-warm)">MECHANICAL</text>
  <text x="380" y="100" class="dg75c-lbl">Pseudoaneurysm</text>
  <text x="380" y="116" class="dg75c-sub">contained rupture</text>
  <text x="380" y="130" class="dg75c-sub">narrow neck</text>
  <text x="380" y="156" class="dg75c-lbl">Free wall</text>
  <text x="380" y="170" class="dg75c-lbl">rupture</text>
  <text x="380" y="186" class="dg75c-sub">tamponade, PEA,</text>
  <text x="380" y="200" class="dg75c-sub">sudden death</text>

  <text x="500" y="80" class="dg75c-kind" fill="var(--dg-good)">SCAR / IMMUNE</text>
  <text x="500" y="100" class="dg75c-lbl">True aneurysm</text>
  <text x="500" y="116" class="dg75c-sub">scarred myocardium</text>
  <text x="500" y="130" class="dg75c-sub">persistent ST elev</text>
  <text x="500" y="156" class="dg75c-lbl">Dressler</text>
  <text x="500" y="170" class="dg75c-lbl">syndrome</text>
  <text x="500" y="186" class="dg75c-sub">autoimmune</text>
  <text x="500" y="200" class="dg75c-sub">pericarditis, fever</text>
  <text x="500" y="214" class="dg75c-sub">NSAIDs, colchicine</text>
</svg>`,
};

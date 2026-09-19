window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv58 - The Abnormal Cardiovascular Examination and Clinical Decision Making
// (P. Happel, DO).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv58-valve-cycle"] = {
  title: "Which valves are open: systole vs diastole",
  caption:
    "In <strong>systole</strong> the ventricles contract and the <strong>aortic and pulmonic</strong> valves open (LV to aorta, RV to pulmonary arteries). " +
    "In <strong>diastole</strong> the ventricles relax and the <strong>tricuspid and mitral</strong> valves open (RA to RV, LA to LV) (Slide 9). " +
    "The strip below runs one beat from S1 to S2 to the next S1. The carotid upstroke falls inside systole, which is why a murmur that coincides with it is systolic (Slide 13). " +
    "The recording calls the semilunar valves 'involved' in diastole; they are closed then, as the slide shows.",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Two side-by-side panels. Left panel, systole, ventricles contract: aortic valve open with blood moving from left ventricle to aorta, pulmonic valve open with blood moving from right ventricle to pulmonary arteries, tricuspid and mitral valves closed. Right panel, diastole, ventricles relax: aortic and pulmonic valves closed, tricuspid valve open with blood moving from right atrium to right ventricle, mitral valve open with blood moving from left atrium to left ventricle. The panels light up in turn. Below, a timeline runs from S1 to S2 to S1, with systole between S1 and S2 containing the carotid upstroke, and diastole between S2 and the next S1. A cursor sweeps along the timeline.">
  <style>
    .dg58a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg58a-ring  { fill: none; stroke: var(--dg-accent); stroke-width: 3; }
    .dg58a-hdr   { font-size: 13px; font-weight: 700; }
    .dg58a-lbl   { font-size: 12px; }
    .dg58a-open  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg58a-shut  { font-size: 11px; fill: var(--dg-muted); }
    .dg58a-leaf  { stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; }
    .dg58a-bar   { stroke: var(--dg-muted); stroke-width: 4; stroke-linecap: round; }
    .dg58a-dot   { fill: var(--dg-accent); }
    .dg58a-ax    { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg58a-tick  { stroke: var(--dg-ink); stroke-width: 3; }
    .dg58a-sys   { fill: var(--dg-warm); opacity: .14; }
    .dg58a-dia   { fill: var(--dg-cool); opacity: .14; }
    .dg58a-wave  { fill: none; stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg58a-sub   { font-size: 10px; fill: var(--dg-muted); }
    .dg58a-cur   { stroke: var(--dg-ink); stroke-width: 1.5; opacity: .6; }
    .dg58a-r1 { animation: dg58aSys 6s linear infinite; }
    .dg58a-r2 { animation: dg58aDia 6s linear infinite; }
    .dg58a-f1 { animation: dg58aFlowS 6s linear infinite; }
    .dg58a-f2 { animation: dg58aFlowD 6s linear infinite; }
    .dg58a-cur { animation: dg58aSweep 6s linear infinite; }
    @keyframes dg58aSys { 0%,46% { opacity: 1 } 50%,96% { opacity: .12 } 100% { opacity: 1 } }
    @keyframes dg58aDia { 0%,46% { opacity: .12 } 50%,96% { opacity: 1 } 100% { opacity: .12 } }
    @keyframes dg58aFlowS { 0% { transform: translateX(0); opacity: 0 } 6% { opacity: 1 } 42% { transform: translateX(46px); opacity: 1 } 47%,100% { transform: translateX(46px); opacity: 0 } }
    @keyframes dg58aFlowD { 0%,50% { transform: translateX(0); opacity: 0 } 56% { opacity: 1 } 92% { transform: translateX(46px); opacity: 1 } 97%,100% { transform: translateX(46px); opacity: 0 } }
    @keyframes dg58aSweep { from { transform: translateX(0) } to { transform: translateX(480px) } }
  </style>

  <rect x="8" y="8" width="296" height="176" rx="12" class="dg58a-panel"/>
  <rect x="8" y="8" width="296" height="176" rx="12" class="dg58a-ring dg58a-r1"/>
  <text x="22" y="30" class="dg58a-hdr" fill="var(--dg-warm)">SYSTOLE - ventricles contract</text>

  <text x="22" y="62" class="dg58a-lbl">Aortic</text>
  <line x1="104" y1="50" x2="112" y2="42" class="dg58a-leaf"/>
  <line x1="104" y1="66" x2="112" y2="74" class="dg58a-leaf"/>
  <circle cx="92" cy="58" r="4" class="dg58a-dot dg58a-f1"/>
  <text x="160" y="62" class="dg58a-open">OPEN: LV to aorta</text>

  <text x="22" y="98" class="dg58a-lbl">Pulmonic</text>
  <line x1="104" y1="86" x2="112" y2="78" class="dg58a-leaf"/>
  <line x1="104" y1="102" x2="112" y2="110" class="dg58a-leaf"/>
  <circle cx="92" cy="94" r="4" class="dg58a-dot dg58a-f1"/>
  <text x="160" y="98" class="dg58a-open">OPEN: RV to pulm. arteries</text>

  <text x="22" y="134" class="dg58a-lbl">Tricuspid</text>
  <line x1="108" y1="120" x2="108" y2="140" class="dg58a-bar"/>
  <text x="160" y="134" class="dg58a-shut">closed</text>

  <text x="22" y="170" class="dg58a-lbl">Mitral</text>
  <line x1="108" y1="156" x2="108" y2="176" class="dg58a-bar"/>
  <text x="160" y="170" class="dg58a-shut">closed</text>

  <rect x="316" y="8" width="296" height="176" rx="12" class="dg58a-panel"/>
  <rect x="316" y="8" width="296" height="176" rx="12" class="dg58a-ring dg58a-r2"/>
  <text x="330" y="30" class="dg58a-hdr" fill="var(--dg-cool)">DIASTOLE - ventricles relax</text>

  <text x="330" y="62" class="dg58a-lbl">Aortic</text>
  <line x1="416" y1="48" x2="416" y2="68" class="dg58a-bar"/>
  <text x="468" y="62" class="dg58a-shut">closed</text>

  <text x="330" y="98" class="dg58a-lbl">Pulmonic</text>
  <line x1="416" y1="84" x2="416" y2="104" class="dg58a-bar"/>
  <text x="468" y="98" class="dg58a-shut">closed</text>

  <text x="330" y="134" class="dg58a-lbl">Tricuspid</text>
  <line x1="412" y1="122" x2="420" y2="114" class="dg58a-leaf"/>
  <line x1="412" y1="138" x2="420" y2="146" class="dg58a-leaf"/>
  <circle cx="400" cy="130" r="4" class="dg58a-dot dg58a-f2"/>
  <text x="468" y="134" class="dg58a-open">OPEN: RA to RV</text>

  <text x="330" y="170" class="dg58a-lbl">Mitral</text>
  <line x1="412" y1="158" x2="420" y2="150" class="dg58a-leaf"/>
  <line x1="412" y1="174" x2="420" y2="182" class="dg58a-leaf"/>
  <circle cx="400" cy="166" r="4" class="dg58a-dot dg58a-f2"/>
  <text x="468" y="170" class="dg58a-open">OPEN: LA to LV</text>

  <rect x="70" y="206" width="230" height="56" class="dg58a-sys"/>
  <rect x="300" y="206" width="250" height="56" class="dg58a-dia"/>
  <line x1="60" y1="252" x2="560" y2="252" class="dg58a-ax"/>
  <line x1="70" y1="212" x2="70" y2="262" class="dg58a-tick"/>
  <line x1="300" y1="212" x2="300" y2="262" class="dg58a-tick"/>
  <line x1="550" y1="212" x2="550" y2="262" class="dg58a-tick"/>
  <text x="62" y="280" class="dg58a-lbl" font-weight="700">S1</text>
  <text x="292" y="280" class="dg58a-lbl" font-weight="700">S2</text>
  <text x="542" y="280" class="dg58a-lbl" font-weight="700">S1</text>
  <path d="M 80 250 C 110 250, 115 218, 140 218 C 175 218, 200 244, 290 248" class="dg58a-wave"/>
  <text x="150" y="232" class="dg58a-sub">carotid upstroke</text>
  <text x="120" y="280" class="dg58a-sub">systole</text>
  <text x="400" y="280" class="dg58a-sub">diastole</text>
  <line x1="70" y1="206" x2="70" y2="262" class="dg58a-cur"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv58-murmur-shapes"] = {
  title: "Murmur timing and shape, one beat",
  caption:
    "Each row is one beat, S1 to S2 (systole) and then S2 to the next S1 (diastole). Stenoses are in warm color and regurgitations in cool color. " +
    "Systolic shapes light up while the cursor is in systole and diastolic shapes while it is in diastole; the continuous PDA murmur stays lit across S2. " +
    "Read it as the lecture's algorithm (Slide 17): a systolic diamond is aortic or pulmonic stenosis; a holosystolic plateau is mitral or tricuspid regurgitation; " +
    "an early diastolic decrescendo is aortic or pulmonic regurgitation; a mid-late diastolic rumble is mitral or tricuspid stenosis (use the bell); a continuous murmur is patent ductus arteriosus.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Five murmur rows drawn on a single beat from S1 to S2 to S1. Row one, a diamond-shaped crescendo-decrescendo murmur between S1 and S2, labeled aortic or pulmonic stenosis. Row two, a flat holosystolic band filling S1 to S2, labeled mitral or tricuspid regurgitation. Row three, a decrescendo wedge starting right after S2, labeled aortic or pulmonic regurgitation. Row four, a band in mid to late diastole ending at the next S1, labeled mitral or tricuspid stenosis. Row five, a continuous band running through both systole and diastole across S2, labeled patent ductus arteriosus. A cursor sweeps from S1 to the next S1, and the shapes brighten when the cursor is in their phase.">
  <style>
    .dg58b-sys  { fill: var(--dg-warm); opacity: .10; }
    .dg58b-dia  { fill: var(--dg-cool); opacity: .10; }
    .dg58b-tick { stroke: var(--dg-ink); stroke-width: 3; }
    .dg58b-rule { stroke: var(--dg-line); stroke-width: 1; }
    .dg58b-hdr  { font-size: 12px; font-weight: 700; }
    .dg58b-lbl  { font-size: 12px; font-weight: 700; }
    .dg58b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg58b-sten { fill: var(--dg-warm); }
    .dg58b-regu { fill: var(--dg-cool); }
    .dg58b-shnt { fill: var(--dg-good); }
    .dg58b-cur  { stroke: var(--dg-ink); stroke-width: 1.5; opacity: .6; animation: dg58bSweep 5s linear infinite; }
    .dg58b-ps   { animation: dg58bSysGlow 5s linear infinite; }
    .dg58b-pd   { animation: dg58bDiaGlow 5s linear infinite; }
    .dg58b-pc   { animation: dg58bAll 5s ease-in-out infinite; }
    @keyframes dg58bSweep { from { transform: translateX(0) } to { transform: translateX(380px) } }
    @keyframes dg58bSysGlow { 0%,45% { opacity: 1 } 50%,97% { opacity: .3 } 100% { opacity: 1 } }
    @keyframes dg58bDiaGlow { 0%,45% { opacity: .3 } 50%,97% { opacity: 1 } 100% { opacity: .3 } }
    @keyframes dg58bAll { 0%,100% { opacity: .75 } 50% { opacity: 1 } }
  </style>

  <rect x="220" y="30" width="180" height="262" class="dg58b-sys"/>
  <rect x="400" y="30" width="200" height="262" class="dg58b-dia"/>
  <text x="212" y="22" class="dg58b-hdr">S1</text>
  <text x="392" y="22" class="dg58b-hdr">S2</text>
  <text x="592" y="22" class="dg58b-hdr">S1</text>
  <text x="280" y="22" class="dg58b-sub">SYSTOLE</text>
  <text x="470" y="22" class="dg58b-sub">DIASTOLE</text>

  <line x1="220" y1="30" x2="220" y2="292" class="dg58b-tick"/>
  <line x1="400" y1="30" x2="400" y2="292" class="dg58b-tick"/>
  <line x1="600" y1="30" x2="600" y2="292" class="dg58b-tick"/>

  <text x="10" y="56" class="dg58b-lbl" fill="var(--dg-warm)">Aortic / pulmonic stenosis</text>
  <text x="10" y="71" class="dg58b-sub">crescendo-decrescendo systolic</text>
  <polygon points="230,60 310,42 390,60 310,78" class="dg58b-sten dg58b-ps"/>
  <line x1="10" y1="84" x2="630" y2="84" class="dg58b-rule"/>

  <text x="10" y="108" class="dg58b-lbl" fill="var(--dg-cool)">Mitral / tricuspid regurg.</text>
  <text x="10" y="123" class="dg58b-sub">holosystolic plateau</text>
  <rect x="228" y="102" width="164" height="22" class="dg58b-regu dg58b-ps"/>
  <line x1="10" y1="136" x2="630" y2="136" class="dg58b-rule"/>

  <text x="10" y="160" class="dg58b-lbl" fill="var(--dg-cool)">Aortic / pulmonic regurg.</text>
  <text x="10" y="175" class="dg58b-sub">early diastolic decrescendo</text>
  <polygon points="408,150 408,176 540,164 540,162" class="dg58b-regu dg58b-pd"/>
  <line x1="10" y1="188" x2="630" y2="188" class="dg58b-rule"/>

  <text x="10" y="212" class="dg58b-lbl" fill="var(--dg-warm)">Mitral / tricuspid stenosis</text>
  <text x="10" y="227" class="dg58b-sub">mid-late diastolic rumble (bell)</text>
  <rect x="478" y="208" width="114" height="16" class="dg58b-sten dg58b-pd"/>
  <line x1="10" y1="240" x2="630" y2="240" class="dg58b-rule"/>

  <text x="10" y="264" class="dg58b-lbl" fill="var(--dg-good)">Patent ductus arteriosus</text>
  <text x="10" y="279" class="dg58b-sub">continuous, through S2</text>
  <polygon points="228,264 400,254 592,264 592,272 400,282 228,272" class="dg58b-shnt dg58b-pc"/>

  <line x1="220" y1="30" x2="220" y2="292" class="dg58b-cur"/>
</svg>`,
};

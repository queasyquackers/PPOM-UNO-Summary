window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv65 - Pathology of Atherosclerosis and Ischemic Heart Disease (M. Plummer, MD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv65-atherogenesis-steps"] = {
  title: "Atherogenesis in five steps",
  caption:
    "A cross-section of the arterial wall, lumen at the top and media at the bottom, read left to right as the lecture's five steps (Slides 18-20). " +
    "<strong>1</strong> Risk factors injure the endothelium, opening a leaky, sticky gap. <strong>2</strong> LDL leaks through it into the intima. " +
    "<strong>3</strong> Monocytes bind adhesion molecules (VCAM-1), cross into the intima and become macrophages. " +
    "<strong>4</strong> LDL is oxidized and eaten through the scavenger receptor, turning macrophages into foam cells, the fatty streak. " +
    "<strong>5</strong> PDGF and FGF pull smooth muscle cells <strong>up from the media into the intima</strong>, where they proliferate and lay down the collagen of the fibrous cap. " +
    "The steps are really a continuum, as the lecturer stresses, but the direction of each movement is the testable part.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Cross-section of an artery wall with the lumen on top, the intima in the middle and the media at the bottom, showing five numbered steps from left to right. Step 1: a gap in the endothelium marks injury. Step 2: LDL particles pass down through the gap into the intima. Step 3: a monocyte sticks to the endothelium and migrates into the intima, becoming a macrophage. Step 4: a macrophage filled with oxidized lipid droplets becomes a foam cell, forming the fatty streak. Step 5: smooth muscle cells migrate upward from the media into the intima under the influence of PDGF and FGF and form a collagen fibrous cap over a lipid core.">
  <style>
    .dg65a-lumen { fill: var(--dg-panel); }
    .dg65a-media { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg65a-endo  { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg65a-iel   { stroke: var(--dg-muted); stroke-width: 1.4; stroke-dasharray: 6 4; }
    .dg65a-gap   { stroke: var(--dg-warm); stroke-width: 3; fill: none; }
    .dg65a-lbl   { font-size: 11px; }
    .dg65a-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg65a-hdr   { font-size: 10px; font-weight: 700; }
    .dg65a-num   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg65a-numt  { font-size: 11px; font-weight: 700; }
    .dg65a-ldl   { fill: var(--dg-warm); }
    .dg65a-mono  { fill: var(--dg-cool); opacity: .85; }
    .dg65a-foam  { fill: var(--dg-cool); opacity: .35; stroke: var(--dg-cool); stroke-width: 1.5; }
    .dg65a-drop  { fill: var(--dg-warm); }
    .dg65a-smc   { fill: var(--dg-good); opacity: .85; }
    .dg65a-core  { fill: var(--dg-warm); opacity: .18; }
    .dg65a-cap   { stroke: var(--dg-accent); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg65a-arrow { stroke: var(--dg-muted); stroke-width: 1.3; fill: none; stroke-dasharray: 3 3; }
    .dg65a-s1 { animation: dg65aBlink 10s ease-in-out infinite; }
    .dg65a-s2 { animation: dg65aLeak 10s ease-in-out infinite; }
    .dg65a-s3 { animation: dg65aMono 10s ease-in-out infinite; }
    .dg65a-s4 { animation: dg65aFoam 10s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .dg65a-s5 { animation: dg65aRise 10s ease-in-out infinite; }
    .dg65a-s6 { animation: dg65aCap 10s ease-in-out infinite; }
    @keyframes dg65aBlink { 0%,100% { opacity: .35 } 6%,16% { opacity: 1 } }
    @keyframes dg65aLeak { 0%,12% { transform: translateY(-62px); opacity: 0 } 16% { opacity: 1 } 30%,100% { transform: translateY(0); opacity: 1 } }
    @keyframes dg65aMono { 0%,28% { transform: translateY(-64px); opacity: 0 } 32% { opacity: 1 } 38% { transform: translateY(-40px) } 50%,100% { transform: translateY(0); opacity: 1 } }
    @keyframes dg65aFoam { 0%,48% { transform: scale(.6); opacity: .3 } 64%,100% { transform: scale(1); opacity: 1 } }
    @keyframes dg65aRise { 0%,62% { transform: translateY(70px); opacity: .4 } 82%,100% { transform: translateY(0); opacity: 1 } }
    @keyframes dg65aCap { 0%,78% { opacity: .15 } 92%,100% { opacity: 1 } }
  </style>

  <rect x="20" y="28" width="600" height="72" class="dg65a-lumen"/>
  <text x="28" y="44" class="dg65a-hdr" fill="var(--dg-accent)">LUMEN (BLOOD)</text>
  <text x="28" y="148" class="dg65a-sub">INTIMA</text>
  <rect x="20" y="194" width="600" height="56" class="dg65a-media"/>
  <text x="28" y="244" class="dg65a-sub">MEDIA (smooth muscle)</text>

  <line x1="20" y1="100" x2="132" y2="100" class="dg65a-endo"/>
  <line x1="168" y1="100" x2="620" y2="100" class="dg65a-endo"/>
  <path d="M132,100 L141,94 L150,106 L159,94 L168,100" class="dg65a-gap dg65a-s1"/>
  <line x1="20" y1="194" x2="620" y2="194" class="dg65a-iel"/>

  <circle cx="112" cy="80" r="9" class="dg65a-num"/><text x="108" y="84" class="dg65a-numt">1</text>
  <text x="66" y="62" class="dg65a-lbl">endothelial injury</text>

  <path d="M152,70 L152,122" class="dg65a-arrow"/>
  <g class="dg65a-s2">
    <circle cx="150" cy="130" r="5" class="dg65a-ldl"/>
    <circle cx="165" cy="146" r="5" class="dg65a-ldl"/>
    <circle cx="140" cy="158" r="5" class="dg65a-ldl"/>
  </g>
  <circle cx="192" cy="80" r="9" class="dg65a-num"/><text x="188" y="84" class="dg65a-numt">2</text>
  <text x="112" y="186" class="dg65a-sub">LDL leaks in</text>

  <path d="M282,60 L282,140" class="dg65a-arrow"/>
  <g class="dg65a-s3">
    <circle cx="282" cy="140" r="11" class="dg65a-mono"/>
  </g>
  <circle cx="306" cy="80" r="9" class="dg65a-num"/><text x="302" y="84" class="dg65a-numt">3</text>
  <text x="236" y="172" class="dg65a-sub">monocyte -></text>
  <text x="236" y="184" class="dg65a-sub">macrophage (VCAM-1)</text>

  <g class="dg65a-s4">
    <circle cx="376" cy="138" r="17" class="dg65a-foam"/>
    <circle cx="370" cy="132" r="3.5" class="dg65a-drop"/>
    <circle cx="382" cy="136" r="3.5" class="dg65a-drop"/>
    <circle cx="372" cy="145" r="3.5" class="dg65a-drop"/>
    <circle cx="384" cy="147" r="3" class="dg65a-drop"/>
  </g>
  <circle cx="394" cy="80" r="9" class="dg65a-num"/><text x="390" y="84" class="dg65a-numt">4</text>
  <text x="352" y="166" class="dg65a-sub">oxidized LDL via</text>
  <text x="352" y="177" class="dg65a-sub">scavenger receptor</text>
  <text x="352" y="188" class="dg65a-sub">-> foam cell</text>

  <ellipse cx="540" cy="150" rx="62" ry="30" class="dg65a-core"/>
  <path d="M470,116 Q540,96 610,116" class="dg65a-cap dg65a-s6"/>
  <path d="M500,232 L500,140" class="dg65a-arrow"/>
  <path d="M560,232 L560,140" class="dg65a-arrow"/>
  <g class="dg65a-s5">
    <ellipse cx="500" cy="132" rx="13" ry="5" class="dg65a-smc"/>
    <ellipse cx="560" cy="128" rx="13" ry="5" class="dg65a-smc"/>
  </g>
  <ellipse cx="480" cy="214" rx="13" ry="5" class="dg65a-smc"/>
  <ellipse cx="530" cy="222" rx="13" ry="5" class="dg65a-smc"/>
  <ellipse cx="590" cy="212" rx="13" ry="5" class="dg65a-smc"/>
  <circle cx="600" cy="80" r="9" class="dg65a-num"/><text x="596" y="84" class="dg65a-numt">5</text>
  <text x="452" y="62" class="dg65a-lbl">fibrous cap (collagen)</text>
  <text x="572" y="178" class="dg65a-sub">PDGF, FGF</text>

  <text x="20" y="272" class="dg65a-lbl">1 injury   2 LDL enters intima   3 monocytes enter   4 foam cells (fatty streak)</text>
  <text x="20" y="289" class="dg65a-lbl">5 smooth muscle moves media -> intima and builds the cap; calcification comes late</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv65-plaque-to-syndrome"] = {
  title: "What the vessel is doing in each syndrome",
  caption:
    "Four coronary segments, after the lecture's Slide 50. <strong>Stable angina:</strong> a stable plaque narrows the lumen (symptoms from about 70-75%), but blood still flows, so pain comes only when exertion raises demand. " +
    "<strong>Prinzmetal:</strong> no plaque; the wall itself clamps down in spasm, at rest. " +
    "<strong>Unstable angina:</strong> the cap ruptures and a thrombus forms, but it is <strong>non-occlusive</strong>, so flow squeezes past. " +
    "<strong>MI:</strong> the thrombus becomes occlusive and flow stops, so the territory downstream dies. " +
    "The last two, with sudden cardiac death, are the acute coronary syndromes, and the culprit plaque was often under 70% stenotic before it ruptured.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four side-by-side coronary artery segments with blood flowing left to right. First, stable angina: a plaque with a thick cap narrows the lumen partially and flow continues. Second, Prinzmetal angina: no plaque, and the vessel walls pinch inward in spasm. Third, unstable angina: a ruptured plaque with a partial thrombus leaves a narrow channel so some flow continues. Fourth, myocardial infarction: the thrombus fills the lumen completely and flow stops. The third and fourth panels are bracketed as acute coronary syndromes.">
  <style>
    .dg65b-wall  { fill: var(--dg-line); }
    .dg65b-lumen { fill: var(--dg-panel); }
    .dg65b-plq   { fill: var(--dg-warm); opacity: .3; stroke: var(--dg-warm); stroke-width: 1; }
    .dg65b-cap   { stroke: var(--dg-accent); stroke-width: 4; fill: none; stroke-linecap: round; }
    .dg65b-brk   { stroke: var(--dg-warm); stroke-width: 2; fill: none; }
    .dg65b-thr   { fill: var(--dg-warm); opacity: .85; }
    .dg65b-hdr   { font-size: 11px; font-weight: 700; }
    .dg65b-lbl   { font-size: 9.5px; }
    .dg65b-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg65b-dot   { fill: var(--dg-cool); }
    .dg65b-acs   { stroke: var(--dg-accent); stroke-width: 1.5; fill: none; }
    .dg65b-f1 { animation: dg65bFlow 3s linear infinite; }
    .dg65b-f2 { animation: dg65bFlow 3s linear infinite 1s; }
    .dg65b-f3 { animation: dg65bFlow 3s linear infinite 2s; }
    .dg65b-slow { animation: dg65bFlow 4.5s linear infinite; }
    .dg65b-stop { animation: dg65bStop 3s ease-in infinite; }
    .dg65b-stop2 { animation: dg65bStop 3s ease-in infinite 1.5s; }
    .dg65b-top { animation: dg65bSqzT 4s ease-in-out infinite; }
    .dg65b-bot { animation: dg65bSqzB 4s ease-in-out infinite; }
    .dg65b-grow { animation: dg65bGrow 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
    @keyframes dg65bFlow { 0% { transform: translateX(0); opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { transform: translateX(120px); opacity: 0 } }
    @keyframes dg65bStop { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 60%,100% { transform: translateX(34px); opacity: 0 } }
    @keyframes dg65bSqzT { 0%,100% { transform: translateY(0) } 45%,60% { transform: translateY(22px) } }
    @keyframes dg65bSqzB { 0%,100% { transform: translateY(0) } 45%,60% { transform: translateY(-22px) } }
    @keyframes dg65bGrow { 0%,100% { transform: scaleY(.8) } 50% { transform: scaleY(1) } }
  </style>

  <text x="12" y="24" class="dg65b-hdr">Stable angina</text>
  <text x="172" y="24" class="dg65b-hdr">Prinzmetal angina</text>
  <text x="332" y="24" class="dg65b-hdr">Unstable angina</text>
  <text x="492" y="24" class="dg65b-hdr">Myocardial infarction</text>
  <path d="M332,34 L332,30 L628,30 L628,34" class="dg65b-acs"/>
  <text x="440" y="42" class="dg65b-sub" fill="var(--dg-accent)">acute coronary syndromes</text>

  <rect x="10" y="52" width="140" height="14" class="dg65b-wall"/>
  <rect x="10" y="66" width="140" height="82" class="dg65b-lumen"/>
  <rect x="10" y="148" width="140" height="14" class="dg65b-wall"/>
  <path d="M40,148 Q80,96 120,148 Z" class="dg65b-plq"/>
  <path d="M42,144 Q80,92 118,144" class="dg65b-cap"/>
  <circle cx="16" cy="84" r="4" class="dg65b-dot dg65b-f1"/>
  <circle cx="16" cy="92" r="4" class="dg65b-dot dg65b-f2"/>
  <circle cx="16" cy="80" r="4" class="dg65b-dot dg65b-f3"/>

  <rect x="170" y="52" width="140" height="14" class="dg65b-wall dg65b-top"/>
  <rect x="170" y="66" width="140" height="82" class="dg65b-lumen"/>
  <rect x="170" y="148" width="140" height="14" class="dg65b-wall dg65b-bot"/>
  <path d="M230,70 L240,80 M250,70 L240,80" class="dg65b-brk"/>
  <path d="M230,144 L240,134 M250,144 L240,134" class="dg65b-brk"/>
  <circle cx="176" cy="104" r="4" class="dg65b-dot dg65b-f1"/>
  <circle cx="176" cy="112" r="4" class="dg65b-dot dg65b-f3"/>

  <rect x="330" y="52" width="140" height="14" class="dg65b-wall"/>
  <rect x="330" y="66" width="140" height="82" class="dg65b-lumen"/>
  <rect x="330" y="148" width="140" height="14" class="dg65b-wall"/>
  <path d="M360,148 Q400,100 440,148 Z" class="dg65b-plq"/>
  <path d="M362,144 Q376,122 390,112" class="dg65b-cap"/>
  <path d="M390,112 L396,106 L402,114" class="dg65b-brk"/>
  <path d="M378,118 Q400,82 424,116 Z" class="dg65b-thr dg65b-grow"/>
  <circle cx="336" cy="74" r="3.5" class="dg65b-dot dg65b-slow"/>

  <rect x="490" y="52" width="140" height="14" class="dg65b-wall"/>
  <rect x="490" y="66" width="140" height="82" class="dg65b-lumen"/>
  <rect x="490" y="148" width="140" height="14" class="dg65b-wall"/>
  <path d="M520,148 Q560,100 600,148 Z" class="dg65b-plq"/>
  <rect x="534" y="66" width="52" height="82" rx="10" class="dg65b-thr"/>
  <circle cx="496" cy="96" r="4" class="dg65b-dot dg65b-stop"/>
  <circle cx="496" cy="112" r="4" class="dg65b-dot dg65b-stop2"/>
  <text x="592" y="104" class="dg65b-sub">no flow</text>

  <text x="12" y="186" class="dg65b-lbl">Stable plaque, fixed</text>
  <text x="12" y="200" class="dg65b-lbl">partial stenosis</text>
  <text x="12" y="218" class="dg65b-sub">pain on exertion</text>
  <text x="12" y="232" class="dg65b-sub">(70-75%); relieved by</text>
  <text x="12" y="246" class="dg65b-sub">rest or nitroglycerin</text>

  <text x="172" y="186" class="dg65b-lbl">Coronary spasm,</text>
  <text x="172" y="200" class="dg65b-lbl">usually no plaque</text>
  <text x="172" y="218" class="dg65b-sub">at rest; uncommon;</text>
  <text x="172" y="232" class="dg65b-sub">cocaine can trigger;</text>
  <text x="172" y="246" class="dg65b-sub">nitroglycerin or CCB</text>

  <text x="332" y="186" class="dg65b-lbl">Plaque rupture +</text>
  <text x="332" y="200" class="dg65b-lbl">NON-occlusive thrombus</text>
  <text x="332" y="218" class="dg65b-sub">more frequent, longer,</text>
  <text x="332" y="232" class="dg65b-sub">at rest; troponin normal</text>
  <text x="332" y="246" class="dg65b-sub">(no necrosis)</text>

  <text x="492" y="186" class="dg65b-lbl">Occlusive thrombus</text>
  <text x="492" y="200" class="dg65b-lbl">on disrupted plaque</text>
  <text x="492" y="218" class="dg65b-sub">necrosis; CK-MB and</text>
  <text x="492" y="232" class="dg65b-sub">troponin rise; plaque</text>
  <text x="492" y="246" class="dg65b-sub">often under 70% before</text>

  <text x="12" y="282" class="dg65b-sub">Flow keeps moving past a fixed or partial narrowing; only the occlusive thrombus stops it - ischemia vs infarction.</text>
</svg>`
};

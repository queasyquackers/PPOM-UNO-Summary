window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv111-atelectasis-shift"] = {
  title: "Which way the mediastinum moves",
  caption:
    "Left: a mucus plug blocks the bronchus, capillary blood absorbs the trapped gas and the lung shrinks, so the trachea and mediastinum are pulled TOWARD the collapsed side (with an elevated diaphragm). " +
    "Right: fluid or air fills the pleural space and compresses the lung, so the trachea and mediastinum are pushed AWAY toward the healthy lung. " +
    "Same collapsed lung, opposite shift - the direction tells you the mechanism (Slides 6-7).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two chest outlines. In resorption atelectasis a plugged bronchus leads to a shrunken left lung and the trachea shifts toward it. In compression atelectasis pleural fluid squeezes the left lung and the trachea shifts away toward the healthy right lung.">
  <style>
    .dg111a-chest { fill: none; stroke: var(--dg-line); stroke-width: 2; }
    .dg111a-lung  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg111a-sm    { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg111a-trach { stroke: var(--dg-ink); stroke-width: 7; stroke-linecap: round; }
    .dg111a-plug  { fill: var(--dg-warm); }
    .dg111a-fluid { fill: var(--dg-cool); opacity: .35; }
    .dg111a-hd    { font-size: 14px; font-weight: 700; }
    .dg111a-lbl   { font-size: 12px; }
    .dg111a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg111a-arr   { stroke: var(--dg-accent); stroke-width: 3; fill: none; }
    .dg111a-head  { fill: var(--dg-accent); }
    .dg111a-toward { animation: dg111aL 3.6s ease-in-out infinite; }
    .dg111a-away   { animation: dg111aR 3.6s ease-in-out infinite; }
    .dg111a-shrink { transform-origin: 95px 160px; animation: dg111aS 3.6s ease-in-out infinite; }
    @keyframes dg111aL { 0%,100% { transform: translateX(0) } 50% { transform: translateX(-12px) } }
    @keyframes dg111aR { 0%,100% { transform: translateX(0) } 50% { transform: translateX(12px) } }
    @keyframes dg111aS { 0%,100% { transform: scale(1) } 50% { transform: scale(.88) } }
  </style>

  <text x="20" y="24" class="dg111a-hd">Resorption (obstructive)</text>
  <text x="20" y="42" class="dg111a-sub">mucus plug, foreign body, tumor</text>
  <path d="M30 70 Q30 55 60 55 L240 55 Q270 55 270 70 L270 250 L30 250 Z" class="dg111a-chest"/>
  <g class="dg111a-shrink"><ellipse cx="95" cy="160" rx="45" ry="65" class="dg111a-sm"/></g>
  <ellipse cx="210" cy="160" rx="52" ry="82" class="dg111a-lung"/>
  <g class="dg111a-toward">
    <line x1="150" y1="50" x2="140" y2="110" class="dg111a-trach"/>
    <circle cx="136" cy="112" r="6" class="dg111a-plug"/>
  </g>
  <path d="M170 275 L118 275" class="dg111a-arr"/>
  <polygon points="118,268 104,275 118,282" class="dg111a-head"/>
  <text x="176" y="279" class="dg111a-lbl">shift TOWARD</text>
  <text x="62" y="240" class="dg111a-sub">airless, perfused</text>

  <text x="350" y="24" class="dg111a-hd">Compression</text>
  <text x="350" y="42" class="dg111a-sub">effusion, hemothorax, pneumothorax</text>
  <path d="M360 70 Q360 55 390 55 L570 55 Q600 55 600 70 L600 250 L360 250 Z" class="dg111a-chest"/>
  <path d="M366 70 L440 62 L440 246 L366 246 Z" class="dg111a-fluid"/>
  <ellipse cx="452" cy="170" rx="30" ry="55" class="dg111a-sm"/>
  <ellipse cx="545" cy="160" rx="48" ry="82" class="dg111a-lung"/>
  <g class="dg111a-away">
    <line x1="490" y1="50" x2="498" y2="110" class="dg111a-trach"/>
  </g>
  <path d="M440 275 L498 275" class="dg111a-arr"/>
  <polygon points="498,268 512,275 498,282" class="dg111a-head"/>
  <text x="340" y="279" class="dg111a-lbl">shift AWAY</text>
  <text x="372" y="100" class="dg111a-sub">fluid</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv111-edema-forces"] = {
  title: "Pressure edema vs leak edema",
  caption:
    "Left: in hemodynamic edema the capillary wall is intact, but raised left atrial and pulmonary venous pressure raises capillary hydrostatic pressure (and hypoalbuminemia lowers oncotic pressure), so a protein-poor transudate is pushed out. " +
    "Right: in microvascular injury the endothelium itself is damaged, so fluid AND protein leak through the gaps - an inflammatory exudate, as in ARDS (Slides 10, 13).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="Two capillary segments. On the left an intact wall with high hydrostatic pressure pushes small water droplets out into the interstitium. On the right a damaged wall with gaps lets both water droplets and larger protein particles leak out.">
  <style>
    .dg111b-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg111b-wall  { stroke: var(--dg-ink); stroke-width: 3; }
    .dg111b-hd    { font-size: 14px; font-weight: 700; }
    .dg111b-lbl   { font-size: 12px; }
    .dg111b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg111b-h2o   { fill: var(--dg-cool); }
    .dg111b-prot  { fill: var(--dg-warm); }
    .dg111b-pres  { stroke: var(--dg-accent); stroke-width: 5; stroke-linecap: round; }
    .dg111b-phead { fill: var(--dg-accent); }
    .dg111b-d1 { animation: dg111bOut 3s linear infinite; }
    .dg111b-d2 { animation: dg111bOut 3s linear infinite 1s; }
    .dg111b-d3 { animation: dg111bOut 3s linear infinite 2s; }
    @keyframes dg111bOut {
      0%   { transform: translateY(0);    opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(70px); opacity: 0 }
    }
  </style>

  <text x="20" y="24" class="dg111b-hd">Hemodynamic (pressure)</text>
  <text x="20" y="42" class="dg111b-sub">heart failure, hypoalbuminemia</text>
  <rect x="20" y="60" width="270" height="70" rx="10" class="dg111b-lumen"/>
  <line x1="20" y1="130" x2="290" y2="130" class="dg111b-wall"/>
  <line x1="70" y1="95" x2="140" y2="95" class="dg111b-pres"/>
  <polygon points="140,86 158,95 140,104" class="dg111b-phead"/>
  <text x="168" y="99" class="dg111b-lbl">high hydrostatic P</text>
  <circle cx="200" cy="80" r="7" class="dg111b-prot"/>
  <circle cx="240" cy="80" r="7" class="dg111b-prot"/>
  <text x="178" y="72" class="dg111b-sub">albumin stays in</text>
  <g class="dg111b-d1"><circle cx="60"  cy="120" r="4" class="dg111b-h2o"/></g>
  <g class="dg111b-d2"><circle cx="150" cy="120" r="4" class="dg111b-h2o"/></g>
  <g class="dg111b-d3"><circle cx="240" cy="120" r="4" class="dg111b-h2o"/></g>
  <text x="20" y="225" class="dg111b-lbl">Interstitium: transudate</text>
  <text x="20" y="243" class="dg111b-sub">pale pink, protein-poor</text>

  <text x="350" y="24" class="dg111b-hd">Microvascular injury (leak)</text>
  <text x="350" y="42" class="dg111b-sub">ARDS, pneumonia, aspiration, O2 injury</text>
  <rect x="350" y="60" width="270" height="70" rx="10" class="dg111b-lumen"/>
  <line x1="350" y1="130" x2="400" y2="130" class="dg111b-wall"/>
  <line x1="420" y1="130" x2="480" y2="130" class="dg111b-wall"/>
  <line x1="500" y1="130" x2="560" y2="130" class="dg111b-wall"/>
  <line x1="580" y1="130" x2="620" y2="130" class="dg111b-wall"/>
  <text x="470" y="99" class="dg111b-lbl">damaged endothelium</text>
  <g class="dg111b-d1"><circle cx="410" cy="120" r="4" class="dg111b-h2o"/><circle cx="490" cy="118" r="7" class="dg111b-prot"/></g>
  <g class="dg111b-d2"><circle cx="570" cy="120" r="4" class="dg111b-h2o"/><circle cx="410" cy="112" r="7" class="dg111b-prot"/></g>
  <g class="dg111b-d3"><circle cx="490" cy="120" r="4" class="dg111b-h2o"/><circle cx="570" cy="112" r="7" class="dg111b-prot"/></g>
  <text x="350" y="225" class="dg111b-lbl">Interstitium: exudate</text>
  <text x="350" y="243" class="dg111b-sub">fluid + protein, inflammatory</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv111-ards-phases"] = {
  title: "ARDS: three phases over three weeks",
  caption:
    "The marker walks the lecture's timeline. Days 1-7 (exudative): neutrophils destroy the alveolar-capillary barrier and protein-rich edema forms hyaline membranes. " +
    "Weeks 1-3 (proliferative): type II pneumocytes regenerate, make surfactant again and drain edema, while myofibroblasts proliferate. " +
    "After 3 weeks (fibrotic): collagen that is not removed obliterates capillaries and leaves rigid alveoli; in most patients the granulation tissue instead resolves (Slide 16).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="A timeline with three boxes. Exudative phase, days 1 to 7: neutrophils, edema, hyaline membranes. Proliferative phase, weeks 1 to 3: type II pneumocyte regeneration, surfactant, myofibroblasts. Fibrotic phase, after 3 weeks: collagen, capillary obliteration, rigid alveoli. A marker moves along the timeline.">
  <style>
    .dg111c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg111c-b1   { stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg111c-b2   { stroke: var(--dg-good); stroke-width: 2.5; }
    .dg111c-b3   { stroke: var(--dg-muted); stroke-width: 2.5; }
    .dg111c-hd   { font-size: 14px; font-weight: 700; }
    .dg111c-tm   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg111c-lbl  { font-size: 11.5px; }
    .dg111c-axis { stroke: var(--dg-ink); stroke-width: 2; }
    .dg111c-dot  { fill: var(--dg-accent); animation: dg111cWalk 9s ease-in-out infinite; }
    .dg111c-p1 { animation: dg111cH1 9s ease-in-out infinite; }
    .dg111c-p2 { animation: dg111cH2 9s ease-in-out infinite; }
    .dg111c-p3 { animation: dg111cH3 9s ease-in-out infinite; }
    @keyframes dg111cWalk { 0% { transform: translateX(0) } 30% { transform: translateX(0) } 36% { transform: translateX(205px) } 63% { transform: translateX(205px) } 69% { transform: translateX(410px) } 100% { transform: translateX(410px) } }
    @keyframes dg111cH1 { 0%,30% { opacity: 1 } 36%,100% { opacity: .55 } }
    @keyframes dg111cH2 { 0%,30% { opacity: .55 } 36%,63% { opacity: 1 } 69%,100% { opacity: .55 } }
    @keyframes dg111cH3 { 0%,63% { opacity: .55 } 69%,100% { opacity: 1 } }
  </style>

  <line x1="20" y1="40" x2="620" y2="40" class="dg111c-axis"/>
  <circle cx="115" cy="40" r="9" class="dg111c-dot"/>
  <text x="20" y="22" class="dg111c-tm">Day 1</text>
  <text x="200" y="22" class="dg111c-tm">1 week</text>
  <text x="405" y="22" class="dg111c-tm">3 weeks</text>

  <g class="dg111c-p1">
    <rect x="20" y="62" width="190" height="170" rx="10" class="dg111c-box dg111c-b1"/>
    <text x="32" y="86" class="dg111c-hd">Exudative</text>
    <text x="32" y="104" class="dg111c-tm">days 1-7</text>
    <text x="32" y="130" class="dg111c-lbl">Neutrophils, ROS, proteases</text>
    <text x="32" y="150" class="dg111c-lbl">Barrier destroyed</text>
    <text x="32" y="170" class="dg111c-lbl">Hemorrhage, edema</text>
    <text x="32" y="190" class="dg111c-lbl">Hyaline membranes</text>
    <text x="32" y="210" class="dg111c-lbl">Compliance falls</text>
  </g>
  <g class="dg111c-p2">
    <rect x="225" y="62" width="190" height="170" rx="10" class="dg111c-box dg111c-b2"/>
    <text x="237" y="86" class="dg111c-hd">Proliferative</text>
    <text x="237" y="104" class="dg111c-tm">weeks 1-3</text>
    <text x="237" y="130" class="dg111c-lbl">Type II pneumocytes regrow</text>
    <text x="237" y="150" class="dg111c-lbl">Surfactant restored</text>
    <text x="237" y="170" class="dg111c-lbl">Edema drained</text>
    <text x="237" y="190" class="dg111c-lbl">Myofibroblasts proliferate</text>
    <text x="237" y="210" class="dg111c-lbl">Endothelial proliferation</text>
  </g>
  <g class="dg111c-p3">
    <rect x="430" y="62" width="190" height="170" rx="10" class="dg111c-box dg111c-b3"/>
    <text x="442" y="86" class="dg111c-hd">Fibrotic</text>
    <text x="442" y="104" class="dg111c-tm">after 3 weeks</text>
    <text x="442" y="130" class="dg111c-lbl">Collagen not removed</text>
    <text x="442" y="150" class="dg111c-lbl">Interstitial fibrosis</text>
    <text x="442" y="170" class="dg111c-lbl">Capillaries obliterated</text>
    <text x="442" y="190" class="dg111c-lbl">Rigid alveoli</text>
  </g>
</svg>`,
};

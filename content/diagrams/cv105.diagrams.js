window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv105-vegetation"] = {
  title: "Building a vegetation",
  caption:
    "Endothelial injury exposes matrix, platelets and fibrin form a sterile thrombus (NBTE), transient microbes in the blood stick to it and divide, and the mass grows into a vegetation of platelets, fibrin and microbes (Slide 4). " +
    "The vegetation damages the valve locally (regurgitation) and sheds septic emboli: to the lungs from the right side, which is less common, or into the systemic circulation from the left side, which is more common. " +
    "S. aureus is the exception that can skip the sterile-thrombus step by binding healthy endothelium.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Four panels in sequence: endothelial injury, a sterile platelet-fibrin thrombus, microbes adhering and dividing, and a full vegetation. Below, the vegetation causes local valve regurgitation, right-sided emboli to the lungs, and more common left-sided systemic emboli.">
  <style>
    .dg105a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg105a-hi    { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: 0; }
    .dg105a-surf  { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; fill: none; }
    .dg105a-tear  { stroke: var(--dg-warm); stroke-width: 3; fill: none; }
    .dg105a-clot  { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.5; }
    .dg105a-bug   { fill: var(--dg-accent); }
    .dg105a-arrow { stroke: var(--dg-muted); stroke-width: 2; fill: var(--dg-muted); }
    .dg105a-lbl   { font-size: 12px; font-weight: 700; }
    .dg105a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg105a-out   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg105a-warm  { fill: var(--dg-warm); }
    .dg105a-cool  { fill: var(--dg-cool); }
    .dg105a-bus   { stroke: var(--dg-muted); stroke-width: 1.5; fill: none; }
    .dg105a-s1 { animation: dg105a-step 8s infinite; }
    .dg105a-s2 { animation: dg105a-step 8s infinite 2s; }
    .dg105a-s3 { animation: dg105a-step 8s infinite 4s; }
    .dg105a-s4 { animation: dg105a-step 8s infinite 6s; }
    @keyframes dg105a-step { 0% { opacity: 0 } 4% { opacity: 1 } 24% { opacity: 1 } 28% { opacity: 0 } 100% { opacity: 0 } }
    .dg105a-fall { animation: dg105a-drop 2.6s ease-in infinite; }
    @keyframes dg105a-drop { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateY(40px); opacity: 0 } }
    .dg105a-embR { animation: dg105a-toR 4s linear infinite; }
    .dg105a-embL { animation: dg105a-toL 4s linear infinite 2s; }
    @keyframes dg105a-toR { 0% { transform: translate(0, 0); opacity: 0 } 10% { opacity: 1 } 70% { transform: translate(-224px, 0) } 90% { transform: translate(-224px, 20px); opacity: 1 } 100% { transform: translate(-224px, 20px); opacity: 0 } }
    @keyframes dg105a-toL { 0% { transform: translate(0, 0); opacity: 0 } 10% { opacity: 1 } 70% { transform: translate(-10px, 0) } 90% { transform: translate(-10px, 20px); opacity: 1 } 100% { transform: translate(-10px, 20px); opacity: 0 } }
  </style>

  <rect x="10"  y="14" width="140" height="112" rx="10" class="dg105a-box"/>
  <rect x="168" y="14" width="140" height="112" rx="10" class="dg105a-box"/>
  <rect x="326" y="14" width="140" height="112" rx="10" class="dg105a-box"/>
  <rect x="484" y="14" width="140" height="112" rx="10" class="dg105a-box"/>
  <rect x="10"  y="14" width="140" height="112" rx="10" class="dg105a-hi dg105a-s1"/>
  <rect x="168" y="14" width="140" height="112" rx="10" class="dg105a-hi dg105a-s2"/>
  <rect x="326" y="14" width="140" height="112" rx="10" class="dg105a-hi dg105a-s3"/>
  <rect x="484" y="14" width="140" height="112" rx="10" class="dg105a-hi dg105a-s4"/>

  <line x1="20" y1="106" x2="70" y2="106" class="dg105a-surf"/>
  <polyline points="70,106 75,113 80,101 85,113 90,106" class="dg105a-tear"/>
  <line x1="90" y1="106" x2="140" y2="106" class="dg105a-surf"/>

  <path d="M 208 106 Q 238 66 268 106 Z" class="dg105a-clot"/>
  <line x1="178" y1="106" x2="298" y2="106" class="dg105a-surf"/>

  <path d="M 366 106 Q 396 66 426 106 Z" class="dg105a-clot"/>
  <line x1="336" y1="106" x2="456" y2="106" class="dg105a-surf"/>
  <circle cx="388" cy="96" r="4" class="dg105a-bug"/>
  <circle cx="400" cy="89" r="4" class="dg105a-bug"/>
  <circle cx="410" cy="98" r="4" class="dg105a-bug"/>
  <circle cx="398" cy="34" r="4" class="dg105a-bug dg105a-fall"/>

  <path d="M 504 106 Q 554 26 604 106 Z" class="dg105a-clot"/>
  <line x1="494" y1="106" x2="614" y2="106" class="dg105a-surf"/>
  <circle cx="534" cy="96" r="4" class="dg105a-bug"/>
  <circle cx="546" cy="84" r="4" class="dg105a-bug"/>
  <circle cx="556" cy="72" r="4" class="dg105a-bug"/>
  <circle cx="562" cy="92" r="4" class="dg105a-bug"/>
  <circle cx="576" cy="82" r="4" class="dg105a-bug"/>
  <circle cx="584" cy="98" r="4" class="dg105a-bug"/>

  <line x1="151" y1="66" x2="160" y2="66" class="dg105a-arrow"/><polygon points="160,60 167,66 160,72" class="dg105a-arrow"/>
  <line x1="309" y1="66" x2="318" y2="66" class="dg105a-arrow"/><polygon points="318,60 325,66 318,72" class="dg105a-arrow"/>
  <line x1="467" y1="66" x2="476" y2="66" class="dg105a-arrow"/><polygon points="476,60 483,66 476,72" class="dg105a-arrow"/>

  <text x="16"  y="144" class="dg105a-lbl">1 Endothelial injury</text>
  <text x="16"  y="159" class="dg105a-sub">matrix exposed</text>
  <text x="174" y="144" class="dg105a-lbl">2 Sterile thrombus</text>
  <text x="174" y="159" class="dg105a-sub">platelets + fibrin</text>
  <text x="174" y="172" class="dg105a-sub">(NBTE, marantic)</text>
  <text x="332" y="144" class="dg105a-lbl">3 Microbes adhere</text>
  <text x="332" y="159" class="dg105a-sub">transient bacteremia,</text>
  <text x="332" y="172" class="dg105a-sub">divide, recruit proteins</text>
  <text x="490" y="144" class="dg105a-lbl">4 Vegetation</text>
  <text x="490" y="159" class="dg105a-sub">platelets + fibrin</text>
  <text x="490" y="172" class="dg105a-sub">+ microbes</text>

  <polyline points="554,180 554,200 104,200 104,214" class="dg105a-bus"/>
  <line x1="330" y1="200" x2="330" y2="214" class="dg105a-bus"/>
  <line x1="544" y1="200" x2="544" y2="214" class="dg105a-bus"/>

  <rect x="10"  y="214" width="190" height="66" rx="8" class="dg105a-out"/>
  <text x="20"  y="236" class="dg105a-lbl">Local damage</text>
  <text x="20"  y="252" class="dg105a-sub">tissue destruction</text>
  <text x="20"  y="266" class="dg105a-sub">-> valvular regurgitation</text>

  <rect x="226" y="214" width="190" height="66" rx="8" class="dg105a-out"/>
  <text x="236" y="236" class="dg105a-lbl">Right-sided emboli</text>
  <text x="236" y="252" class="dg105a-sub">-> pulmonary embolism</text>
  <text x="236" y="266" class="dg105a-sub">less common (tricuspid)</text>

  <rect x="440" y="214" width="190" height="66" rx="8" class="dg105a-out"/>
  <text x="450" y="236" class="dg105a-lbl">Left-sided emboli</text>
  <text x="450" y="252" class="dg105a-sub">-> systemic, anywhere</text>
  <text x="450" y="266" class="dg105a-sub">more common (mitral)</text>

  <circle cx="554" cy="194" r="5" class="dg105a-cool dg105a-embR"/>
  <circle cx="554" cy="194" r="5" class="dg105a-warm dg105a-embL"/>
</svg>`,
};

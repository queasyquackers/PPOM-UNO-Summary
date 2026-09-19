window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv100-fpr-sequence"] = {
  title: "The FPR sequence and the muscle spindle reset",
  caption:
    "FPR always runs in the same order: neutralize the dysfunction, add a facilitating force (compression, traction or torque), " +
    "keep that force on while guiding the dysfunction into its freedoms for 3-5 seconds, then release to baseline and reassess. " +
    "The proposed effect, shown in the bars, is that compression past neutral quiets gamma motor gain to the muscle spindle, so the muscle's tension and hypertonicity reset (Slides 5, 6 and 20).",
  svg: `
<svg viewBox="0 0 620 270" role="img" aria-label="Four step boxes in order: 1 neutralize, 2 add facilitating force of compression, traction or torque, 3 guide into freedoms and hold 3 to 5 seconds, 4 release to baseline and reassess. Below, two bars compare muscle spindle gamma gain and muscle tone: high before treatment and reduced after the hold.">
  <style>
    .dg100a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg100a-lit  { fill: none; stroke: var(--dg-accent); stroke-width: 3.5; opacity: 0; }
    .dg100a-l1 { animation: dg100aStep 8s linear infinite 0s; }
    .dg100a-l2 { animation: dg100aStep 8s linear infinite 2s; }
    .dg100a-l3 { animation: dg100aStep 8s linear infinite 4s; }
    .dg100a-l4 { animation: dg100aStep 8s linear infinite 6s; }
    @keyframes dg100aStep {
      0%   { opacity: 0 }
      4%   { opacity: 1 }
      22%  { opacity: 1 }
      26%  { opacity: 0 }
      100% { opacity: 0 }
    }
    .dg100a-num  { font-size: 20px; font-weight: 700; fill: var(--dg-accent); }
    .dg100a-lbl  { font-size: 13px; font-weight: 700; }
    .dg100a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg100a-arr  { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg100a-tip  { fill: var(--dg-ink); }
    .dg100a-hi   { fill: var(--dg-warm); }
    .dg100a-lo   { fill: var(--dg-good); }
    .dg100a-track { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg100a-shrink { transform-box: fill-box; transform-origin: left center; animation: dg100aShrink 8s ease-in-out infinite; }
    @keyframes dg100aShrink {
      0%, 50%  { transform: scaleX(1) }
      62%, 94% { transform: scaleX(0.35) }
      100%     { transform: scaleX(1) }
    }
  </style>

  <rect x="12" y="20" width="135" height="95" rx="12" class="dg100a-box"/>
  <rect x="12" y="20" width="135" height="95" rx="12" class="dg100a-lit dg100a-l1"/>
  <text x="24" y="46" class="dg100a-num">1</text>
  <text x="24" y="70" class="dg100a-lbl">Neutralize</text>
  <text x="24" y="88" class="dg100a-sub">no flex/extension,</text>
  <text x="24" y="102" class="dg100a-sub">rotation, sidebend</text>

  <rect x="167" y="20" width="135" height="95" rx="12" class="dg100a-box"/>
  <rect x="167" y="20" width="135" height="95" rx="12" class="dg100a-lit dg100a-l2"/>
  <text x="179" y="46" class="dg100a-num">2</text>
  <text x="179" y="70" class="dg100a-lbl">Facilitating force</text>
  <text x="179" y="88" class="dg100a-sub">compress (usual),</text>
  <text x="179" y="102" class="dg100a-sub">or traction / torque</text>

  <rect x="322" y="20" width="135" height="95" rx="12" class="dg100a-box"/>
  <rect x="322" y="20" width="135" height="95" rx="12" class="dg100a-lit dg100a-l3"/>
  <text x="334" y="46" class="dg100a-num">3</text>
  <text x="334" y="70" class="dg100a-lbl">Into freedoms</text>
  <text x="334" y="88" class="dg100a-sub">force maintained,</text>
  <text x="334" y="102" class="dg100a-sub">hold 3-5 seconds</text>

  <rect x="477" y="20" width="135" height="95" rx="12" class="dg100a-box"/>
  <rect x="477" y="20" width="135" height="95" rx="12" class="dg100a-lit dg100a-l4"/>
  <text x="489" y="46" class="dg100a-num">4</text>
  <text x="489" y="70" class="dg100a-lbl">Release, reassess</text>
  <text x="489" y="88" class="dg100a-sub">back to baseline</text>
  <text x="489" y="102" class="dg100a-sub">position, recheck</text>

  <path d="M148 67 L162 67" class="dg100a-arr"/>
  <polygon points="159,62 167,67 159,72" class="dg100a-tip"/>
  <path d="M303 67 L317 67" class="dg100a-arr"/>
  <polygon points="314,62 322,67 314,72" class="dg100a-tip"/>
  <path d="M458 67 L472 67" class="dg100a-arr"/>
  <polygon points="469,62 477,67 469,72" class="dg100a-tip"/>

  <text x="12" y="150" class="dg100a-lbl">Muscle spindle: gamma motor gain and muscle tone</text>

  <text x="12" y="183" class="dg100a-sub">Before FPR</text>
  <rect x="150" y="170" width="400" height="18" rx="5" class="dg100a-track"/>
  <rect x="150" y="170" width="380" height="18" rx="5" class="dg100a-hi"/>
  <text x="560" y="183" class="dg100a-sub">hypertonic</text>

  <text x="12" y="215" class="dg100a-sub">After 3-5 s hold</text>
  <rect x="150" y="202" width="400" height="18" rx="5" class="dg100a-track"/>
  <rect x="150" y="202" width="140" height="18" rx="5" class="dg100a-lo"/>
  <text x="560" y="215" class="dg100a-sub">reset</text>

  <text x="12" y="247" class="dg100a-sub">During steps</text>
  <rect x="150" y="234" width="400" height="18" rx="5" class="dg100a-track"/>
  <rect x="150" y="234" width="380" height="18" rx="5" class="dg100a-hi dg100a-shrink"/>
  <text x="560" y="247" class="dg100a-sub">quiets</text>
</svg>`
};

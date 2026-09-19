window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv89-brain-osmoles"] = {
  title: "The brain in hyponatremia and overcorrection",
  caption: "Four frames of one osmotic story (Slides 24-28). Acute hyponatremia makes the ECF hypotonic, so water enters neurons and the brain swells toward herniation. Given time, neurons export K+ and Na+ salts and then organic osmoles to reach a new equilibrium - so aggressive hypertonic saline now makes the ECF the concentrated side, pulling water out of neurons and causing osmotic demyelination, classically of the pons, a day or more later.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four panels of a neuron. Normal: no net water movement. Acute hyponatremia: water arrows point into a swollen neuron, labelled cerebral edema and herniation. Adaptation: osmole dots leave the neuron, K plus and Na plus salts first then organic osmoles, giving a new equilibrium. Overcorrection with hypertonic saline: water arrows point out of a shrunken neuron, labelled osmotic demyelination of the pons.">
  <style>
    .dg89a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg89a-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg89a-head  { font-size: 13px; font-weight: 700; }
    .dg89a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg89a-key   { font-size: 11px; font-weight: 700; }
    .dg89a-in    { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg89a-out   { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg89a-good  { fill: var(--dg-good); }
    .dg89a-shaft { stroke-width: 3.5; stroke-linecap: round; }
    .dg89a-osm   { fill: var(--dg-accent); }
    .dg89a-swell { transform-box: fill-box; transform-origin: center; animation: dg89aswell 3.6s ease-in-out infinite; }
    @keyframes dg89aswell { 0%,100% { transform: scale(1) } 50% { transform: scale(1.14) } }
    .dg89a-shrink { transform-box: fill-box; transform-origin: center; animation: dg89ashrink 3.6s ease-in-out infinite; }
    @keyframes dg89ashrink { 0%,100% { transform: scale(1) } 50% { transform: scale(0.82) } }
    .dg89a-flowin { animation: dg89apulse 1.8s ease-in-out infinite; }
    .dg89a-flowout { animation: dg89apulse 1.8s ease-in-out infinite .9s; }
    @keyframes dg89apulse { 0%,100% { opacity: .4 } 50% { opacity: 1 } }
    .dg89a-leave { animation: dg89aleave 3.6s linear infinite; }
    .dg89a-leave2 { animation: dg89aleave 3.6s linear infinite 1.8s; }
    @keyframes dg89aleave { 0% { transform: translateX(0); opacity: 1 } 80% { opacity: 1 } 100% { transform: translateX(44px); opacity: 0 } }
  </style>

  <rect x="4" y="30" width="150" height="230" rx="12" class="dg89a-panel"/>
  <rect x="164" y="30" width="150" height="230" rx="12" class="dg89a-panel"/>
  <rect x="324" y="30" width="150" height="230" rx="12" class="dg89a-panel"/>
  <rect x="484" y="30" width="150" height="230" rx="12" class="dg89a-panel"/>

  <text x="14" y="20" class="dg89a-head">1 Normal</text>
  <text x="174" y="20" class="dg89a-head">2 Acute hypoNa</text>
  <text x="334" y="20" class="dg89a-head">3 Adaptation</text>
  <text x="494" y="20" class="dg89a-head">4 Overcorrection</text>

  <circle cx="79" cy="140" r="40" class="dg89a-cell"/>
  <text x="79" y="136" text-anchor="middle" class="dg89a-sub">ICF</text>
  <text x="79" y="150" text-anchor="middle" class="dg89a-sub">= ECF</text>
  <text x="79" y="208" text-anchor="middle" class="dg89a-key dg89a-good">No net water</text>
  <text x="79" y="224" text-anchor="middle" class="dg89a-sub">movement</text>

  <g transform="translate(160,0)">
    <circle cx="79" cy="140" r="40" class="dg89a-cell dg89a-swell"/>
    <text x="79" y="144" text-anchor="middle" class="dg89a-sub">neuron swells</text>
    <g class="dg89a-flowin">
      <line x1="10" y1="140" x2="30" y2="140" class="dg89a-in dg89a-shaft"/>
      <polygon points="30,133 40,140 30,147" class="dg89a-in"/>
      <line x1="148" y1="140" x2="128" y2="140" class="dg89a-in dg89a-shaft"/>
      <polygon points="128,133 118,140 128,147" class="dg89a-in"/>
    </g>
    <text x="79" y="70" text-anchor="middle" class="dg89a-sub">ECF hypotonic</text>
    <text x="79" y="208" text-anchor="middle" class="dg89a-key dg89a-in">Water IN</text>
    <text x="79" y="224" text-anchor="middle" class="dg89a-sub">cerebral edema,</text>
    <text x="79" y="238" text-anchor="middle" class="dg89a-sub">herniation</text>
  </g>

  <g transform="translate(320,0)">
    <circle cx="79" cy="140" r="40" class="dg89a-cell"/>
    <circle cx="70" cy="128" r="5" class="dg89a-osm"/>
    <circle cx="88" cy="150" r="5" class="dg89a-osm"/>
    <g class="dg89a-leave"><circle cx="96" cy="124" r="5" class="dg89a-osm"/></g>
    <g class="dg89a-leave2"><rect x="92" y="156" width="9" height="9" class="dg89a-osm"/></g>
    <circle cx="136" cy="110" r="5" class="dg89a-osm"/>
    <rect x="133" y="170" width="9" height="9" class="dg89a-osm"/>
    <text x="79" y="70" text-anchor="middle" class="dg89a-sub">osmoles pumped OUT</text>
    <text x="79" y="208" text-anchor="middle" class="dg89a-key dg89a-good">New equilibrium</text>
    <text x="79" y="224" text-anchor="middle" class="dg89a-sub">1st K+/Na+ salts (circles)</text>
    <text x="79" y="238" text-anchor="middle" class="dg89a-sub">then organic (squares)</text>
  </g>

  <g transform="translate(480,0)">
    <circle cx="79" cy="140" r="40" class="dg89a-cell dg89a-shrink"/>
    <text x="79" y="144" text-anchor="middle" class="dg89a-sub">neuron shrinks</text>
    <g class="dg89a-flowout">
      <line x1="30" y1="140" x2="16" y2="140" class="dg89a-out dg89a-shaft"/>
      <polygon points="16,133 6,140 16,147" class="dg89a-out"/>
      <line x1="128" y1="140" x2="142" y2="140" class="dg89a-out dg89a-shaft"/>
      <polygon points="142,133 152,140 142,147" class="dg89a-out"/>
    </g>
    <text x="79" y="70" text-anchor="middle" class="dg89a-sub">hypertonic saline</text>
    <text x="79" y="208" text-anchor="middle" class="dg89a-key dg89a-out">Water OUT</text>
    <text x="79" y="224" text-anchor="middle" class="dg89a-sub">osmotic demyelination</text>
    <text x="79" y="238" text-anchor="middle" class="dg89a-sub">(pons, 1+ days later)</text>
  </g>

  <text x="320" y="286" text-anchor="middle" class="dg89a-sub">Limit: never raise Na+ more than 10 mEq/L in any 24 hours</text>
</svg>`
};

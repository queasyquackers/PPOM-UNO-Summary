window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv154-ards-spiral"] = {
  title: "The ARDS spiral",
  caption:
    "A stiff cage (splinting from pain, rib somatic dysfunction from cough) hands the work of breathing to the diaphragm, while edema makes the lung heavier and less compliant. " +
    "The diaphragm fatigues and flattens, so breathing turns rapid, shallow and inefficient, which weakens the pressure gradients that move lymph. " +
    "Less lymph flow means more edema, the loop tightens, and a diaphragm like this eventually fails: ventilatory failure (Slides 6 and 9).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A loop of four boxes. A stiff thoracic cage feeds into the first box, the diaphragm carrying more of the load. Arrows run to the diaphragm fatiguing and flattening, then to rapid shallow breathing with weaker pressure gradients, then to less lymph flow with more edema and a heavier lung, and back to the diaphragm carrying more load. An exit arrow from the fatigued diaphragm leads to ventilatory failure.">
  <style>
    .dg154a-node  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg154a-in    { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .dg154a-out   { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg154a-ring  { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: 0; }
    .dg154a-lbl   { font-size: 13px; font-weight: 700; }
    .dg154a-sub   { font-size: 11.5px; fill: var(--dg-muted); }
    .dg154a-warm  { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg154a-cool  { font-size: 12px; font-weight: 700; fill: var(--dg-cool); }
    .dg154a-mid   { font-size: 15px; font-weight: 700; fill: var(--dg-accent); }
    .dg154a-flow  { stroke: var(--dg-accent); stroke-width: 3; fill: none; stroke-dasharray: 7 5; animation: dg154aflow 1.1s linear infinite; }
    .dg154a-feed  { stroke: var(--dg-cool); stroke-width: 2; fill: none; }
    .dg154a-exit  { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; }
    .dg154a-hd    { fill: var(--dg-accent); }
    .dg154a-hdc   { fill: var(--dg-cool); }
    .dg154a-hdw   { fill: var(--dg-warm); }
    @keyframes dg154aflow { to { stroke-dashoffset: -24; } }
    .dg154a-r1 { animation: dg154aglow 8s linear infinite; }
    .dg154a-r2 { animation: dg154aglow 8s linear infinite 2s; }
    .dg154a-r3 { animation: dg154aglow 8s linear infinite 4s; }
    .dg154a-r4 { animation: dg154aglow 8s linear infinite 6s; }
    @keyframes dg154aglow { 0% { opacity: 0; } 4%, 22% { opacity: 1; } 27%, 100% { opacity: 0; } }
    .dg154a-fail { animation: dg154afail 8s ease-in-out infinite; }
    @keyframes dg154afail { 0%, 30%, 100% { opacity: 1; } 15% { opacity: .55; } }
  </style>

  <rect x="10" y="16" width="170" height="50" rx="10" class="dg154a-in"/>
  <text x="95" y="37" text-anchor="middle" class="dg154a-cool">Stiff thoracic cage</text>
  <text x="95" y="55" text-anchor="middle" class="dg154a-sub">splinting, cough rib SD</text>
  <line x1="180" y1="41" x2="214" y2="41" class="dg154a-feed"/>
  <polygon points="214,35 226,41 214,47" class="dg154a-hdc"/>

  <rect x="230" y="14" width="180" height="54" rx="12" class="dg154a-node"/>
  <rect x="225" y="9" width="190" height="64" rx="15" class="dg154a-ring dg154a-r1"/>
  <text x="320" y="37" text-anchor="middle" class="dg154a-lbl">Diaphragm carries</text>
  <text x="320" y="56" text-anchor="middle" class="dg154a-lbl">more of the load</text>

  <rect x="440" y="116" width="190" height="54" rx="12" class="dg154a-node"/>
  <rect x="435" y="111" width="200" height="64" rx="15" class="dg154a-ring dg154a-r2"/>
  <text x="535" y="139" text-anchor="middle" class="dg154a-lbl">Diaphragm fatigues</text>
  <text x="535" y="158" text-anchor="middle" class="dg154a-lbl">and flattens</text>

  <rect x="210" y="232" width="220" height="56" rx="12" class="dg154a-node"/>
  <rect x="205" y="227" width="230" height="66" rx="15" class="dg154a-ring dg154a-r3"/>
  <text x="320" y="255" text-anchor="middle" class="dg154a-lbl">Rapid, shallow breathing</text>
  <text x="320" y="275" text-anchor="middle" class="dg154a-sub">weaker pressure gradients for lymph</text>

  <rect x="10" y="116" width="190" height="54" rx="12" class="dg154a-node"/>
  <rect x="5" y="111" width="200" height="64" rx="15" class="dg154a-ring dg154a-r4"/>
  <text x="105" y="139" text-anchor="middle" class="dg154a-lbl">Less lymph flow</text>
  <text x="105" y="158" text-anchor="middle" class="dg154a-sub">more edema, heavier lung</text>

  <line x1="412" y1="58" x2="490" y2="104" class="dg154a-flow"/>
  <polygon points="487,109 500,110 493,99" class="dg154a-hd"/>
  <line x1="505" y1="172" x2="440" y2="226" class="dg154a-flow"/>
  <polygon points="436,221 431,234 444,231" class="dg154a-hd"/>
  <line x1="208" y1="248" x2="140" y2="182" class="dg154a-flow"/>
  <polygon points="144,178 131,174 136,186" class="dg154a-hd"/>
  <line x1="140" y1="114" x2="216" y2="66" class="dg154a-flow"/>
  <polygon points="219,71 226,60 213,61" class="dg154a-hd"/>

  <text x="320" y="138" text-anchor="middle" class="dg154a-mid">Each step feeds the next</text>
  <text x="320" y="158" text-anchor="middle" class="dg154a-sub">edema spirals up, breathing gets harder</text>

  <line x1="580" y1="114" x2="580" y2="76" class="dg154a-exit"/>
  <polygon points="573,78 580,64 587,78" class="dg154a-hdw"/>
  <rect x="490" y="14" width="140" height="48" rx="10" class="dg154a-out dg154a-fail"/>
  <text x="560" y="35" text-anchor="middle" class="dg154a-warm">Ventilatory</text>
  <text x="560" y="53" text-anchor="middle" class="dg154a-warm">failure</text>
</svg>`,
};

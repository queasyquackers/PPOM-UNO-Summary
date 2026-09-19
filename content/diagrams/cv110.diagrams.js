window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv110-cftr-trafficking"] = {
  title: "Two CFTR defects, two drugs",
  caption:
    "Left: in delta F508, the most common CF mutation, CFTR misfolds and stays in the endoplasmic reticulum, so no channel reaches the membrane. " +
    "Lumacaftor (a modulator, for F508del homozygotes) increases transport of the protein out of the ER to the surface. " +
    "Right: in gating mutations the channel is already at the membrane but its chloride gate is locked. Ivacaftor (a potentiator) opens the locked gate so chloride can flow. " +
    "Match the drug to where the protein is stuck.",
  svg: `
<svg viewBox="0 0 620 280" role="img" aria-label="Two panels. Left panel: a misfolded CFTR protein held in the endoplasmic reticulum is carried up to the cell membrane by lumacaftor. Right panel: a CFTR channel already in the membrane has a locked gate that ivacaftor opens, letting chloride ions pass out of the cell.">
  <style>
    .dg110a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg110a-mem   { stroke: var(--dg-ink); stroke-width: 3; }
    .dg110a-er    { fill: none; stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 6 4; }
    .dg110a-h     { font-size: 14px; font-weight: 700; fill: var(--dg-ink); }
    .dg110a-lbl   { font-size: 12px; fill: var(--dg-ink); }
    .dg110a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg110a-drug  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg110a-prot  { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1; }
    .dg110a-path  { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; stroke-dasharray: 5 5; }
    .dg110a-arrow { fill: var(--dg-accent); }
    .dg110a-chan  { fill: var(--dg-cool); stroke: var(--dg-ink); stroke-width: 1; }
    .dg110a-gate  { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1; }
    .dg110a-ion   { fill: var(--dg-good); }
    .dg110a-iontx { font-size: 10px; font-weight: 700; fill: var(--dg-good); }
    .dg110a-move  { animation: dg110a-rise 4s ease-in-out infinite; }
    @keyframes dg110a-rise { 0%, 15% { transform: translate(0, 0); } 70%, 100% { transform: translate(0, -118px); } }
    .dg110a-swing { transform-box: fill-box; transform-origin: left center; animation: dg110a-open 4s ease-in-out infinite; }
    @keyframes dg110a-open { 0%, 20% { transform: rotate(0deg); } 50%, 100% { transform: rotate(-75deg); } }
    .dg110a-flow  { animation: dg110a-out 4s linear infinite; }
    .dg110a-flow2 { animation: dg110a-out 4s linear infinite 0.6s; }
    @keyframes dg110a-out { 0%, 45% { transform: translate(0, 0); opacity: 0; } 55% { opacity: 1; } 100% { transform: translate(0, -110px); opacity: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .dg110a-move, .dg110a-swing, .dg110a-flow, .dg110a-flow2 { animation: none; }
    }
  </style>

  <rect class="dg110a-panel" x="10" y="10" width="290" height="260" rx="10"/>
  <rect class="dg110a-panel" x="320" y="10" width="290" height="260" rx="10"/>

  <text class="dg110a-h" x="155" y="34" text-anchor="middle">Delta F508: stuck in ER</text>
  <text class="dg110a-h" x="465" y="34" text-anchor="middle">Gating mutation: gate locked</text>

  <line class="dg110a-mem" x1="30" y1="80" x2="280" y2="80"/>
  <text class="dg110a-sub" x="36" y="72">cell membrane</text>
  <line class="dg110a-mem" x1="340" y1="80" x2="590" y2="80"/>
  <text class="dg110a-sub" x="346" y="72">cell membrane</text>

  <rect class="dg110a-er" x="70" y="170" width="170" height="70" rx="30"/>
  <text class="dg110a-sub" x="155" y="258" text-anchor="middle">endoplasmic reticulum</text>

  <path class="dg110a-path" d="M 110 190 L 110 96"/>
  <polygon class="dg110a-arrow" points="103,100 117,100 110,86"/>
  <text class="dg110a-drug" x="124" y="130">Lumacaftor</text>
  <text class="dg110a-sub" x="124" y="146">moves protein out of ER</text>

  <circle class="dg110a-prot" cx="110" cy="80" r="9" opacity="0.35"/>
  <g class="dg110a-move">
    <circle class="dg110a-prot" cx="110" cy="198" r="11"/>
  </g>
  <text class="dg110a-lbl" x="185" y="208" text-anchor="middle">misfolded CFTR</text>

  <rect class="dg110a-chan" x="440" y="66" width="18" height="30"/>
  <rect class="dg110a-chan" x="478" y="66" width="18" height="30"/>
  <rect class="dg110a-gate dg110a-swing" x="458" y="92" width="20" height="6"/>
  <text class="dg110a-lbl" x="512" y="112">CFTR in place</text>

  <circle class="dg110a-ion dg110a-flow" cx="468" cy="200" r="6"/>
  <circle class="dg110a-ion dg110a-flow2" cx="468" cy="200" r="6"/>
  <circle class="dg110a-ion" cx="440" cy="215" r="6"/>
  <circle class="dg110a-ion" cx="496" cy="222" r="6"/>
  <text class="dg110a-iontx" x="468" y="245" text-anchor="middle">Cl- inside cell</text>

  <text class="dg110a-drug" x="345" y="150">Ivacaftor</text>
  <text class="dg110a-sub" x="345" y="166">opens the locked gate</text>
  <text class="dg110a-iontx" x="468" y="52" text-anchor="middle">Cl- out</text>
</svg>`
};

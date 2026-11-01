window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv124-pelvic-lymph-route"] = {
  title: "Lymph runs up, treatment runs down",
  caption:
    "Pelvic lymph climbs the chain on Slide 10, from the iliac nodes through the lumbar trunk and cisterna chyli to the subclavian vein and venous circulation. " +
    "The Case 1 treatment order runs the other way: the thoracic inlet first, then the respiratory diaphragm, then the focus on the pelvic diaphragm. " +
    "Node regions on the left are the slide's own brackets; the positions of the three diaphragms are schematic, because the slide does not draw them.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A vertical chain of pelvic lymph drainage. Internal and external iliac nodes lead up to common iliac nodes, lateral aortic nodes, the lumbar trunk, the cisterna chyli at L2 on the right, the thoracic or right lymphatic duct, and the subclavian vein and venous circulation. Three dashed lines mark the thoracic inlet, respiratory diaphragm and pelvic diaphragm, numbered one to three from top to bottom to show that treatment starts at the thoracic inlet and ends with the focus on the pelvic diaphragm.">
  <style>
    .dg124a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg124a-end   { fill: var(--dg-panel); stroke: var(--dg-good); stroke-width: 2; }
    .dg124a-lbl   { font-size: 12px; }
    .dg124a-reg   { font-size: 11px; font-weight: 700; }
    .dg124a-gtxt  { font-size: 12px; font-weight: 700; }
    .dg124a-note  { font-size: 11px; font-weight: 700; }
    .dg124a-brk   { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; }
    .dg124a-up    { fill: var(--dg-cool); stroke: none; }
    .dg124a-gate  { stroke: var(--dg-warm); stroke-width: 2.5; stroke-dasharray: 8 5; }
    .dg124a-num   { fill: var(--dg-warm); stroke: none; }
    .dg124a-numt  { font-size: 12px; font-weight: 700; }
    .dg124a-link  { fill: none; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 5 5; animation: dg124aflow 1.6s linear infinite; }
    .dg124a-dot   { fill: var(--dg-cool); stroke: none; }
    .dg124a-d1    { animation: dg124arise 6s linear infinite; }
    .dg124a-d2    { animation: dg124arise 6s linear infinite 2s; }
    .dg124a-d3    { animation: dg124arise 6s linear infinite 4s; }
    .dg124a-g1    { animation: dg124agate 4.5s ease-in-out infinite; }
    .dg124a-g2    { animation: dg124agate 4.5s ease-in-out infinite 1.5s; }
    .dg124a-g3    { animation: dg124agate 4.5s ease-in-out infinite 3s; }
    @keyframes dg124arise {
      0%   { transform: translateY(0);      opacity: 0 }
      8%   { opacity: 1 }
      92%  { opacity: 1 }
      100% { transform: translateY(-232px); opacity: 0 }
    }
    @keyframes dg124agate { 0%,100% { opacity: .35 } 18%,36% { opacity: 1 } 60% { opacity: .35 } }
    @keyframes dg124aflow { from { stroke-dashoffset: 10 } to { stroke-dashoffset: 0 } }
  </style>

  <path d="M128 8 L134 8 L134 32 L128 32" class="dg124a-brk"/>
  <text x="122" y="24" text-anchor="end" class="dg124a-reg">Thoracic outlet/inlet</text>
  <path d="M128 52 L134 52 L134 76 L128 76" class="dg124a-brk"/>
  <text x="122" y="68" text-anchor="end" class="dg124a-reg">T5-6 region</text>
  <path d="M128 96 L134 96 L134 156 L128 156" class="dg124a-brk"/>
  <text x="122" y="130" text-anchor="end" class="dg124a-reg">Lumbar</text>
  <path d="M128 168 L134 168 L134 264 L128 264" class="dg124a-brk"/>
  <text x="122" y="220" text-anchor="end" class="dg124a-reg">Pelvis</text>

  <rect x="150" y="6" width="260" height="26" rx="6" class="dg124a-end"/>
  <text x="280" y="24" text-anchor="middle" class="dg124a-lbl" font-weight="700">Subclavian vein, venous circulation</text>
  <rect x="150" y="50" width="260" height="26" rx="6" class="dg124a-box"/>
  <text x="280" y="68" text-anchor="middle" class="dg124a-lbl">Thoracic duct / right lymphatic duct</text>
  <rect x="150" y="94" width="260" height="26" rx="6" class="dg124a-box"/>
  <text x="280" y="112" text-anchor="middle" class="dg124a-lbl">Cisterna chyli (L2, right)</text>
  <rect x="150" y="130" width="260" height="26" rx="6" class="dg124a-box"/>
  <text x="280" y="148" text-anchor="middle" class="dg124a-lbl">Lumbar trunk</text>
  <rect x="150" y="166" width="260" height="26" rx="6" class="dg124a-box"/>
  <text x="280" y="184" text-anchor="middle" class="dg124a-lbl">Lateral aortic</text>
  <rect x="150" y="202" width="260" height="26" rx="6" class="dg124a-box"/>
  <text x="280" y="220" text-anchor="middle" class="dg124a-lbl">Common iliac</text>
  <rect x="150" y="238" width="124" height="26" rx="6" class="dg124a-box"/>
  <text x="212" y="256" text-anchor="middle" class="dg124a-lbl">Internal iliac</text>
  <rect x="286" y="238" width="124" height="26" rx="6" class="dg124a-box"/>
  <text x="348" y="256" text-anchor="middle" class="dg124a-lbl">External iliac</text>

  <polygon points="212,230 206,237 218,237" class="dg124a-up"/>
  <polygon points="348,230 342,237 354,237" class="dg124a-up"/>
  <polygon points="280,194 274,201 286,201" class="dg124a-up"/>
  <polygon points="280,158 274,165 286,165" class="dg124a-up"/>
  <polygon points="280,122 274,129 286,129" class="dg124a-up"/>

  <circle cx="400" cy="251" r="5" class="dg124a-dot dg124a-d1"/>
  <circle cx="400" cy="251" r="5" class="dg124a-dot dg124a-d2"/>
  <circle cx="400" cy="251" r="5" class="dg124a-dot dg124a-d3"/>

  <g class="dg124a-g1">
    <line x1="142" y1="41" x2="420" y2="41" class="dg124a-gate"/>
    <polygon points="280,34 274,40 286,40" class="dg124a-up"/>
    <circle cx="436" cy="41" r="11" class="dg124a-num"/>
    <text x="436" y="45" text-anchor="middle" class="dg124a-numt" style="fill: var(--dg-surface)">1</text>
    <text x="453" y="45" class="dg124a-gtxt">Thoracic inlet: first</text>
  </g>
  <g class="dg124a-g2">
    <line x1="142" y1="85" x2="420" y2="85" class="dg124a-gate"/>
    <polygon points="280,78 274,84 286,84" class="dg124a-up"/>
    <circle cx="436" cy="85" r="11" class="dg124a-num"/>
    <text x="436" y="89" text-anchor="middle" class="dg124a-numt" style="fill: var(--dg-surface)">2</text>
    <text x="453" y="89" class="dg124a-gtxt">Respiratory diaphragm</text>
  </g>
  <g class="dg124a-g3">
    <line x1="142" y1="275" x2="420" y2="275" class="dg124a-gate"/>
    <circle cx="436" cy="275" r="11" class="dg124a-num"/>
    <text x="436" y="279" text-anchor="middle" class="dg124a-numt" style="fill: var(--dg-surface)">3</text>
    <text x="453" y="279" class="dg124a-gtxt">Pelvic diaphragm: the focus</text>
  </g>

  <line x1="436" y1="54" x2="436" y2="72" class="dg124a-link"/>
  <line x1="436" y1="98" x2="436" y2="262" class="dg124a-link"/>

  <text x="150" y="304" class="dg124a-note">Blue: lymph flows up the chain</text>
  <text x="424" y="304" class="dg124a-note">Orange: treatment order runs down</text>
</svg>`,
};

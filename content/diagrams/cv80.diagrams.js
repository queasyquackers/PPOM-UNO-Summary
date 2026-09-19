window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv80-three-spaces"] = {
  title: "Three spaces, one bundle",
  caption:
    "The neurovascular bundle passes three tight spots on its way from neck to arm. The brachial plexus and subclavian artery run through the interscalene triangle, but the subclavian vein passes anterior and medial to it and joins them only in the costoclavicular space, where it is the structure most often compressed. " +
    "Beyond the clavicle the vessels become the axillary artery and vein and pass beneath the pectoralis minor, a site almost as common as the interscalene triangle (Slides 20, 36-38). The pulsing outline marks what each space most often compresses.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three boxes left to right: interscalene triangle, costoclavicular space and subcoracoid space. Brachial plexus and artery lines pass through all three. The vein line runs below the first box and enters only at the costoclavicular space. The first box highlights the plexus, the second the vein, and the third the whole bundle.">
  <style>
    .dg80a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg80a-ttl  { font-size: 13px; font-weight: 700; }
    .dg80a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg80a-lane { font-size: 11px; font-weight: 700; }
    .dg80a-nrv  { stroke: var(--dg-accent); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg80a-art  { stroke: var(--dg-warm); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg80a-vn   { stroke: var(--dg-cool); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg80a-flow { stroke-dasharray: 3 14; stroke-width: 5; fill: none; stroke-linecap: round; animation: dg80aflow 1.6s linear infinite; }
    @keyframes dg80aflow { from { stroke-dashoffset: 34; } to { stroke-dashoffset: 0; } }
    .dg80a-hit  { fill: none; stroke: var(--dg-good); stroke-width: 3; animation: dg80apulse 2.4s ease-in-out infinite; }
    .dg80a-h2   { animation-delay: .8s; }
    .dg80a-h3   { animation-delay: 1.6s; }
    @keyframes dg80apulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
  </style>

  <text x="10" y="112" class="dg80a-lane" fill="var(--dg-accent)">Plexus</text>
  <text x="10" y="147" class="dg80a-lane" fill="var(--dg-warm)">Artery</text>
  <text x="10" y="212" class="dg80a-lane" fill="var(--dg-cool)">Vein</text>

  <rect x="100" y="70" width="150" height="100" rx="10" class="dg80a-box"/>
  <rect x="275" y="70" width="150" height="160" rx="10" class="dg80a-box"/>
  <rect x="450" y="70" width="150" height="160" rx="10" class="dg80a-box"/>

  <text x="108" y="40" class="dg80a-ttl">Interscalene triangle</text>
  <text x="108" y="56" class="dg80a-sub">ant. + middle scalene, rib 1</text>
  <text x="283" y="40" class="dg80a-ttl">Costoclavicular space</text>
  <text x="283" y="56" class="dg80a-sub">subclavius, clavicle, ant. scalene, rib 1</text>
  <text x="458" y="40" class="dg80a-ttl">Subcoracoid space</text>
  <text x="458" y="56" class="dg80a-sub">coracoid, pec minor, upper ribs</text>

  <path d="M60 108 H630" class="dg80a-nrv"/>
  <path d="M60 143 H630" class="dg80a-art"/>
  <path d="M60 208 H630" class="dg80a-vn"/>
  <path d="M60 108 H630" class="dg80a-flow" stroke="var(--dg-surface)"/>
  <path d="M60 143 H630" class="dg80a-flow" stroke="var(--dg-surface)"/>
  <path d="M60 208 H630" class="dg80a-flow" stroke="var(--dg-surface)"/>

  <rect x="110" y="96" width="130" height="24" rx="12" class="dg80a-hit"/>
  <rect x="285" y="196" width="130" height="24" rx="12" class="dg80a-hit dg80a-h2"/>
  <rect x="460" y="92" width="130" height="130" rx="12" class="dg80a-hit dg80a-h3"/>

  <text x="104" y="184" class="dg80a-sub">vein passes anterior-medial,</text>
  <text x="104" y="197" class="dg80a-sub">not through the triangle</text>

  <text x="108" y="258" class="dg80a-sub">most common site of</text>
  <text x="108" y="272" class="dg80a-sub">plexus impingement</text>
  <text x="283" y="258" class="dg80a-sub">subclavian vein most</text>
  <text x="283" y="272" class="dg80a-sub">commonly compressed</text>
  <text x="458" y="258" class="dg80a-sub">axillary vessels; bundle compressed</text>
  <text x="458" y="272" class="dg80a-sub">almost as often as the triangle</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv80-rib1-costoclavicular"] = {
  title: "Rib 1 inhalation SD",
  caption:
    "Left: a normal first rib leaves room between the clavicle and rib 1 for the subclavian vein, artery and plexus. Right: a first rib held elevated by an inhalation somatic dysfunction rises toward the clavicle, narrowing the costoclavicular space and compressing its contents, the vein most of all. " +
    "This is the compressive effect the lecture targets with rib 1 inhalation muscle energy (Slides 21, 37, 49).",
  svg: `
<svg viewBox="0 0 620 260" role="img" aria-label="Two panels. In the left panel a first rib sits well below the clavicle with an open vein between them. In the right panel the first rib rises toward the clavicle and the vein between them is flattened.">
  <style>
    .dg80b-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg80b-vein { fill: var(--dg-cool); opacity: .85; }
    .dg80b-ttl  { font-size: 13px; font-weight: 700; }
    .dg80b-lbl  { font-size: 11.5px; }
    .dg80b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg80b-gap  { stroke: var(--dg-good); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg80b-rib  { animation: dg80brise 4s ease-in-out infinite; }
    @keyframes dg80brise { 0%,15% { transform: translateY(28px); } 55%,100% { transform: translateY(0); } }
    .dg80b-sq   { transform-box: fill-box; transform-origin: center; animation: dg80bsquash 4s ease-in-out infinite; }
    @keyframes dg80bsquash { 0%,15% { transform: scaleY(1.9); } 55%,100% { transform: scaleY(1); } }
    .dg80b-arr  { fill: var(--dg-warm); animation: dg80bfade 4s ease-in-out infinite; }
    @keyframes dg80bfade { 0%,20% { opacity: .2; } 55%,100% { opacity: 1; } }
  </style>

  <text x="40" y="30" class="dg80b-ttl">Normal first rib</text>
  <rect x="40" y="60" width="220" height="24" rx="12" class="dg80b-bone"/>
  <text x="48" y="76" class="dg80b-lbl">Clavicle</text>
  <ellipse cx="150" cy="118" rx="26" ry="22" class="dg80b-vein"/>
  <text x="182" y="122" class="dg80b-lbl">Subclavian vein</text>
  <rect x="40" y="152" width="220" height="24" rx="12" class="dg80b-bone"/>
  <text x="48" y="168" class="dg80b-lbl">Rib 1</text>
  <line x1="30" y1="84" x2="30" y2="152" class="dg80b-gap"/>
  <text x="40" y="206" class="dg80b-sub">costoclavicular space open</text>

  <text x="350" y="30" class="dg80b-ttl">Rib 1 inhalation SD</text>
  <rect x="350" y="60" width="220" height="24" rx="12" class="dg80b-bone"/>
  <text x="358" y="76" class="dg80b-lbl">Clavicle</text>
  <ellipse cx="460" cy="98" rx="30" ry="11" class="dg80b-vein dg80b-sq"/>
  <text x="496" y="102" class="dg80b-lbl">Vein compressed</text>
  <g class="dg80b-rib">
    <rect x="350" y="112" width="220" height="24" rx="12" class="dg80b-bone"/>
    <text x="358" y="128" class="dg80b-lbl">Rib 1 elevated</text>
    <polygon points="590,140 600,122 610,140" class="dg80b-arr"/>
  </g>
  <text x="350" y="206" class="dg80b-sub">space narrowed: compressive effect</text>
  <text x="350" y="222" class="dg80b-sub">at the thoracic outlet</text>
</svg>`,
};

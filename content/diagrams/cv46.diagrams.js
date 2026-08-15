/*
 * CV46 - Lung Mechanics: Pressures Acting on the System.
 * Authoring rules live in lecture_diagrams.js (CSS keyframes only, themed
 * colors only, viewBox with no fixed size, nothing hover-only, readable when
 * frozen). Every number below is this lecture's own.
 */
window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Slide 33 - the combined chart: volume, alveolar and pleural pressure across
// one quiet breath, with the transpulmonary gap shaded between the curves.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv46-pressure-cycle"] = {
  title: "One breath, three pressures",
  caption:
    "A sweep line walks through one quiet breath. Atmospheric pressure is the zero reference. " +
    "Intrapleural pressure starts at &#8722;5, falls to &#8722;8 at the end of inspiration and returns to &#8722;5. " +
    "Alveolar pressure runs 0 &#8594; &#8722;1 (air in) &#8594; 0 &#8594; +1 (air out) &#8594; 0, and is the only one of the two that ever turns positive. " +
    "The shaded gap between the curves is transpulmonary pressure (alveolar minus pleural), largest at end-inspiration when the stretched lung recoils hardest. " +
    "Values are this lecture's (Slides 26-33).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="Chart of one quiet breath. Tidal volume rises from zero to five hundred millilitres and returns. Alveolar pressure falls from zero to minus one during inspiration and rises to plus one during expiration. Intrapleural pressure falls from minus five to minus eight during inspiration and returns to minus five. The shaded band between the two pressure curves is transpulmonary pressure, widest at the end of inspiration.">
  <style>
    .dg46a-ax   { stroke: var(--dg-line); stroke-width: 1.1; }
    .dg46a-zero { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg46a-tick { font-size: 10px; fill: var(--dg-muted); }
    .dg46a-note { font-size: 9.5px; fill: var(--dg-muted); }
    .dg46a-key  { font-size: 11px; font-weight: 700; }
    .dg46a-ph   { font-size: 10.5px; font-weight: 700; fill: var(--dg-muted); }
    .dg46a-vol  { fill: none; stroke: var(--dg-accent); stroke-width: 2.2; }
    .dg46a-alv  { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; }
    .dg46a-plr  { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; }
    .dg46a-band { fill: var(--dg-accent); fill-opacity: .13; stroke: none; }
    .dg46a-gap  { stroke: var(--dg-good); stroke-width: 1.6; stroke-dasharray: 3 3; }
    .dg46a-dotw { fill: var(--dg-warm); }
    .dg46a-dotc { fill: var(--dg-cool); }
    .dg46a-sweep { animation: dg46aSweep 7s linear infinite; }
    @keyframes dg46aSweep { from { transform: translateX(0) } to { transform: translateX(490px) } }
    .dg46a-ph1 { animation: dg46aPh1 7s linear infinite; }
    @keyframes dg46aPh1 { 0%, 44% { opacity: 1 } 56%, 100% { opacity: .4 } }
    .dg46a-ph2 { animation: dg46aPh2 7s linear infinite; }
    @keyframes dg46aPh2 { 0%, 44% { opacity: .4 } 56%, 100% { opacity: 1 } }
    .dg46a-puff { animation: dg46aPuff 7s ease-in-out infinite; }
    @keyframes dg46aPuff { 0%, 100% { opacity: .35 } 50% { opacity: 1 } }
  </style>

  <text x="70" y="24" class="dg46a-note">tidal volume (mL)</text>
  <line x1="70" y1="84" x2="560" y2="84" class="dg46a-ax"/>
  <path class="dg46a-vol" d="M70,84 C150,84 180,40 315,40 C450,40 480,84 560,84"/>
  <text x="62" y="44" class="dg46a-tick" text-anchor="end">500</text>
  <text x="62" y="88" class="dg46a-tick" text-anchor="end">0</text>
  <text x="566" y="88" class="dg46a-note">V(T)</text>

  <text x="70" y="136" class="dg46a-note">pressure (cm H2O)</text>

  <path class="dg46a-band" d="M70,175 C108,186 150,188 192,187 C250,185 282,181 315,175 C350,169 384,164 438,163 C486,162 522,169 560,175 L560,235 C480,249 398,274 315,271 C232,268 150,242 70,235 Z"/>
  <line x1="70" y1="175" x2="560" y2="175" class="dg46a-zero"/>

  <path class="dg46a-alv" d="M70,175 C108,186 150,188 192,187 C250,185 282,181 315,175 C350,169 384,164 438,163 C486,162 522,169 560,175"/>
  <path class="dg46a-plr" d="M70,235 C150,242 232,268 315,271 C398,274 480,249 560,235"/>

  <line x1="315" y1="175" x2="315" y2="271" class="dg46a-gap"/>
  <circle cx="315" cy="175" r="3.6" class="dg46a-dotw"/>
  <circle cx="315" cy="271" r="3.6" class="dg46a-dotc"/>

  <text x="62" y="167" class="dg46a-tick" text-anchor="end">+1</text>
  <text x="62" y="179" class="dg46a-tick" text-anchor="end">0</text>
  <text x="62" y="191" class="dg46a-tick" text-anchor="end">&#8722;1</text>
  <text x="62" y="239" class="dg46a-tick" text-anchor="end">&#8722;5</text>
  <text x="62" y="275" class="dg46a-tick" text-anchor="end">&#8722;8</text>

  <text x="566" y="179" class="dg46a-key" fill="var(--dg-warm)">P(A)</text>
  <text x="566" y="239" class="dg46a-key" fill="var(--dg-cool)">P(pl)</text>

  <text x="80" y="212" class="dg46a-note">P(L) = P(A) &#8722; P(pl)</text>
  <text x="322" y="222" class="dg46a-note" fill="var(--dg-good)">widest here: &#8722;1 &#8722; (&#8722;8) = +7</text>

  <g class="dg46a-sweep">
    <line x1="70" y1="30" x2="70" y2="292" class="dg46a-ax" stroke-dasharray="3 4"/>
  </g>

  <text x="192" y="306" class="dg46a-ph dg46a-ph1" text-anchor="middle">INSPIRATION &#183; air in</text>
  <text x="438" y="306" class="dg46a-ph dg46a-ph2" text-anchor="middle">EXPIRATION &#183; air out</text>
  <circle cx="118" cy="303" r="4" class="dg46a-dotw dg46a-puff"/>
  <circle cx="530" cy="303" r="4" class="dg46a-dotc dg46a-puff"/>
</svg>`,
};

// --------------------------------------------------------------------------
// Slides 20-22 - the tug of war that keeps pleural pressure negative, and
// what happens the moment the pleural space is opened.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv46-pleural-balance"] = {
  title: "Why pleural pressure is negative",
  caption:
    "Left: the lung recoils inward, the chest wall recoils outward, and the two pulls are equal and opposite at the end of a quiet expiration. " +
    "That standoff, helped by lymphatic drainage of pleural fluid, holds pleural pressure at about &#8722;5 cm H2O, so transpulmonary pressure of +5 keeps the lung open. " +
    "Right: air entering the pleural space cuts the rope - pleural pressure rises toward 0 (strongly positive in tension pneumothorax), transpulmonary pressure falls to zero, and unopposed elastic recoil collapses the lung. " +
    "The mediastinal membrane keeps the opposite lung inflated (Slides 20-22).",
  svg: `
<svg viewBox="0 0 640 258" role="img" aria-label="Two panels. On the left a normal lung inside the chest with inward lung recoil arrows and outward chest wall recoil arrows balancing, pleural pressure minus five and transpulmonary pressure plus five. On the right air enters through a hole in the chest wall, pleural pressure rises toward zero, transpulmonary pressure falls to zero and that lung collapses while the lung on the other side of the mediastinum stays inflated.">
  <style>
    .dg46b-card { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg46b-wall { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg46b-lung { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.2; }
    .dg46b-ttl  { font-size: 11.5px; font-weight: 700; letter-spacing: .03em; }
    .dg46b-lbl  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg46b-val  { font-size: 11px; font-weight: 700; }
    .dg46b-in   { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg46b-out  { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg46b-arm  { stroke-width: 5; stroke-linecap: round; }
    .dg46b-pullA { animation: dg46bPull 3.6s ease-in-out infinite; }
    .dg46b-pullB { animation: dg46bPull 3.6s ease-in-out infinite 1.8s; }
    @keyframes dg46bPull { 0%, 100% { opacity: .4 } 50% { opacity: 1 } }
    .dg46b-breathe { transform-origin: 160px 133px; animation: dg46bBreathe 3.6s ease-in-out infinite; }
    @keyframes dg46bBreathe { 0%, 100% { transform: scale(1) } 50% { transform: scale(1.04) } }
    .dg46b-collapse { transform-origin: 414px 133px; animation: dg46bCollapse 4.4s ease-in-out infinite; }
    @keyframes dg46bCollapse { 0%, 12% { transform: scale(1) } 55%, 100% { transform: scale(.42) } }
    .dg46b-ok { transform-origin: 548px 133px; animation: dg46bOk 3.6s ease-in-out infinite; }
    @keyframes dg46bOk { 0%, 100% { transform: scale(1) } 50% { transform: scale(1.05) } }
    .dg46b-air { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 6 9; animation: dg46bAir 1.2s linear infinite; }
    @keyframes dg46bAir { to { stroke-dashoffset: -30 } }
  </style>

  <rect x="8" y="18" width="304" height="222" rx="12" class="dg46b-card"/>
  <text x="22" y="40" class="dg46b-ttl" fill="var(--dg-accent)">NORMAL &#183; BALANCED PULL</text>
  <rect x="28" y="56" width="264" height="152" rx="26" class="dg46b-wall"/>
  <text x="160" y="74" class="dg46b-lbl" text-anchor="middle">pleural space</text>
  <g class="dg46b-breathe">
    <ellipse cx="160" cy="133" rx="76" ry="46" class="dg46b-lung"/>
  </g>

  <g class="dg46b-pullA">
    <line x1="112" y1="133" x2="142" y2="133" class="dg46b-in dg46b-arm"/>
    <polygon points="142,125 160,133 142,141" class="dg46b-in"/>
    <line x1="208" y1="133" x2="178" y2="133" class="dg46b-in dg46b-arm"/>
    <polygon points="178,125 160,133 178,141" class="dg46b-in"/>
    <text x="160" y="158" class="dg46b-lbl" text-anchor="middle" fill="var(--dg-warm)">lung recoils IN</text>
  </g>
  <g class="dg46b-pullB">
    <line x1="72" y1="133" x2="48" y2="133" class="dg46b-out dg46b-arm"/>
    <polygon points="48,125 32,133 48,141" class="dg46b-out"/>
    <line x1="248" y1="133" x2="272" y2="133" class="dg46b-out dg46b-arm"/>
    <polygon points="272,125 288,133 272,141" class="dg46b-out"/>
    <text x="160" y="198" class="dg46b-lbl" text-anchor="middle" fill="var(--dg-cool)">chest wall recoils OUT</text>
  </g>
  <text x="22" y="228" class="dg46b-val" fill="var(--dg-good)">P(pl) = &#8722;5 &#8594; P(L) = 0 &#8722; (&#8722;5) = +5, lung stays open</text>

  <rect x="328" y="18" width="304" height="222" rx="12" class="dg46b-card"/>
  <text x="342" y="40" class="dg46b-ttl" fill="var(--dg-warm)">PNEUMOTHORAX &#183; ROPE CUT</text>
  <rect x="348" y="56" width="264" height="152" rx="26" class="dg46b-wall"/>
  <rect x="344" y="122" width="9" height="22" fill="var(--dg-surface)"/>
  <line x1="326" y1="133" x2="392" y2="133" class="dg46b-air"/>
  <polygon points="392,126 406,133 392,140" fill="var(--dg-warm)"/>
  <text x="360" y="108" class="dg46b-lbl" fill="var(--dg-warm)">air enters</text>
  <g class="dg46b-collapse">
    <ellipse cx="414" cy="133" rx="48" ry="34" class="dg46b-lung"/>
  </g>
  <text x="414" y="192" class="dg46b-lbl" text-anchor="middle" fill="var(--dg-warm)">collapses</text>
  <line x1="484" y1="60" x2="484" y2="204" stroke="var(--dg-ink)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="484" y="218" class="dg46b-lbl" text-anchor="middle">mediastinum</text>
  <g class="dg46b-ok">
    <ellipse cx="548" cy="133" rx="48" ry="36" class="dg46b-lung"/>
  </g>
  <text x="548" y="192" class="dg46b-lbl" text-anchor="middle">stays inflated</text>
  <text x="342" y="234" class="dg46b-val" fill="var(--dg-warm)">P(pl) &#8594; 0 (positive if tension) &#8594; P(L) = 0</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Slide 12 - the two rib motions the lecturer asks students to remember.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv46-rib-motions"] = {
  title: "Bucket handle vs pump handle",
  caption:
    "Both motions are driven by the external intercostals lifting the ribs upward and forward during inspiration. " +
    "Bucket handle (seen from above) swings the rib shafts laterally and widens the chest side to side. " +
    "Pump handle (seen from the side) hinges the sternal end upward like an old water-pump handle and deepens the chest front to back, " +
    "increasing anterior-posterior thickness by at least 20 percent in this lecture's figure (Slides 10, 12).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="Two panels of rib motion. On the left, a view from above shows the rib shafts swinging outward like bucket handles, widening the chest from side to side. On the right, a side view shows the ribs and sternum hinging upward at the vertebral column like a water pump handle, deepening the chest from front to back.">
  <style>
    .dg46c-card { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg46c-ttl  { font-size: 11.5px; font-weight: 700; letter-spacing: .03em; fill: var(--dg-accent); }
    .dg46c-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg46c-cap  { font-size: 10px; font-weight: 700; }
    .dg46c-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg46c-rib  { fill: none; stroke: var(--dg-ink); stroke-width: 3.2; stroke-linecap: round; }
    .dg46c-arw  { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 4; stroke-linecap: round; }
    .dg46c-bucket { transform-origin: 160px 140px; animation: dg46cBucket 3.8s ease-in-out infinite; }
    @keyframes dg46cBucket { 0%, 100% { transform: scaleX(1) } 50% { transform: scaleX(1.16) } }
    .dg46c-pump { transform-origin: 374px 116px; animation: dg46cPump 3.8s ease-in-out infinite; }
    @keyframes dg46cPump { 0%, 100% { transform: rotate(0deg) } 50% { transform: rotate(-11deg) } }
    .dg46c-puff { animation: dg46cPuff 3.8s ease-in-out infinite; }
    @keyframes dg46cPuff { 0%, 100% { opacity: .35 } 50% { opacity: 1 } }
  </style>

  <rect x="8" y="14" width="304" height="224" rx="12" class="dg46c-card"/>
  <text x="22" y="36" class="dg46c-ttl">BUCKET HANDLE</text>
  <text x="22" y="50" class="dg46c-sub">viewed from above &#183; ribs swing out sideways</text>
  <rect x="150" y="66" width="20" height="16" rx="4" class="dg46c-bone"/>
  <text x="160" y="62" class="dg46c-sub" text-anchor="middle">vertebra</text>
  <rect x="152" y="196" width="16" height="26" rx="4" class="dg46c-bone"/>
  <text x="160" y="234" class="dg46c-sub" text-anchor="middle">sternum</text>
  <g class="dg46c-bucket">
    <path class="dg46c-rib" d="M150,76 C78,86 62,150 152,198"/>
    <path class="dg46c-rib" d="M170,76 C242,86 258,150 168,198"/>
  </g>
  <g class="dg46c-puff">
    <line x1="60" y1="140" x2="38" y2="140" class="dg46c-arw"/>
    <polygon points="38,132 22,140 38,148" fill="var(--dg-cool)"/>
    <line x1="260" y1="140" x2="282" y2="140" class="dg46c-arw"/>
    <polygon points="282,132 298,140 282,148" fill="var(--dg-cool)"/>
  </g>
  <text x="160" y="176" class="dg46c-cap" text-anchor="middle" fill="var(--dg-cool)">lateral (transverse) volume &#8593;</text>

  <rect x="328" y="14" width="304" height="224" rx="12" class="dg46c-card"/>
  <text x="342" y="36" class="dg46c-ttl">PUMP HANDLE</text>
  <text x="342" y="50" class="dg46c-sub">viewed from the side &#183; sternal end lifts</text>
  <rect x="356" y="70" width="18" height="132" rx="5" class="dg46c-bone"/>
  <text x="365" y="216" class="dg46c-sub" text-anchor="middle">spine</text>
  <g class="dg46c-pump">
    <line x1="374" y1="106" x2="556" y2="132" class="dg46c-rib"/>
    <line x1="374" y1="142" x2="556" y2="166" class="dg46c-rib"/>
    <line x1="556" y1="120" x2="556" y2="178" class="dg46c-rib"/>
  </g>
  <text x="556" y="200" class="dg46c-sub" text-anchor="middle">sternum</text>
  <g class="dg46c-puff">
    <line x1="574" y1="126" x2="598" y2="102" class="dg46c-arw"/>
    <polygon points="592,96 608,92 604,108" fill="var(--dg-cool)"/>
  </g>
  <text x="480" y="228" class="dg46c-cap" text-anchor="middle" fill="var(--dg-cool)">anterior-posterior volume &#8593; (&#8805; 20%)</text>
</svg>`,
};

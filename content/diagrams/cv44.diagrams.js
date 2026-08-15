/*
 * cv44 - Pulmonary Anatomy and Histology (Lecture #44, B. Beatty, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 * All numbers below come from slides.txt (Slides 9, 14, 15, 18, 21).
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The three branchings of the bronchial buds - a sequence, so it animates.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv44-bronchial-branching"] = {
  title: "Three branchings, three sets of numbers",
  caption:
    "The airway tree is built by three successive branchings of the respiratory diverticulum, and each one hands you a number worth memorising. " +
    "The part of the diverticulum <b>proximal</b> to the first bifurcation becomes trachea and larynx; the first branching gives the two mainstem (primary) bronchi; " +
    "the second gives the lobar (secondary) bronchi &#8212; 3 on the right, 2 on the left, which is why the lungs have 3 and 2 lobes; " +
    "the third, in the <b>6th week</b>, gives 10 segmental (tertiary) bronchi per lung, the future bronchopulmonary segments (Slide 14). " +
    "Branching then continues throughout the fetal period.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A branching tree growing left to right from a foregut pouch. A single tube for the trachea and larynx splits into two mainstem bronchi, the upper one splits into three right lobar bronchi and the lower into two left lobar bronchi, and each of those fans out into segmental bronchi, ten per lung, formed in the sixth week.">
  <style>
    .dg44a-lbl   { font-size: 12px; font-weight: 700; }
    .dg44a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg44a-air   { stroke: var(--dg-accent); fill: none; stroke-width: 4.5; stroke-linecap: round; }
    .dg44a-air2  { stroke: var(--dg-accent); fill: none; stroke-width: 3.2; stroke-linecap: round; }
    .dg44a-air3  { stroke: var(--dg-cool); fill: none; stroke-width: 1.8; stroke-linecap: round; }
    .dg44a-pouch { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg44a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg44a-tl    { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg44a-node  { fill: var(--dg-accent); }

    .dg44a-s1 { animation: dg44aA 10s ease-in-out infinite; }
    .dg44a-s2 { animation: dg44aB 10s ease-in-out infinite; }
    .dg44a-s3 { animation: dg44aC 10s ease-in-out infinite; }
    .dg44a-s4 { animation: dg44aD 10s ease-in-out infinite; }
    @keyframes dg44aA { 0%, 3%  { opacity: .16 } 9%,  100% { opacity: 1 } }
    @keyframes dg44aB { 0%, 24% { opacity: .16 } 30%, 100% { opacity: 1 } }
    @keyframes dg44aC { 0%, 46% { opacity: .16 } 52%, 100% { opacity: 1 } }
    @keyframes dg44aD { 0%, 68% { opacity: .16 } 74%, 100% { opacity: 1 } }
  </style>

  <g class="dg44a-s1">
    <ellipse cx="56" cy="138" rx="18" ry="27" class="dg44a-pouch"/>
    <path d="M74 138 L150 138" class="dg44a-air"/>
    <text x="30" y="186" class="dg44a-sub">foregut pouch</text>
    <text x="80" y="128" class="dg44a-sub">trachea + larynx</text>
  </g>

  <g class="dg44a-s2">
    <path d="M150 138 L232 92" class="dg44a-air"/>
    <path d="M150 138 L232 184" class="dg44a-air"/>
    <circle cx="232" cy="92" r="4.5" class="dg44a-node"/>
    <circle cx="232" cy="184" r="4.5" class="dg44a-node"/>
  </g>

  <g class="dg44a-s3">
    <path d="M232 92 L330 46" class="dg44a-air2"/>
    <path d="M232 92 L330 92" class="dg44a-air2"/>
    <path d="M232 92 L330 138" class="dg44a-air2"/>
    <path d="M232 184 L330 178" class="dg44a-air2"/>
    <path d="M232 184 L330 222" class="dg44a-air2"/>
    <text x="338" y="30" class="dg44a-lbl">RIGHT: 3 lobar &#8594; 3 lobes</text>
    <text x="338" y="246" class="dg44a-lbl">LEFT: 2 lobar &#8594; 2 lobes</text>
  </g>

  <g class="dg44a-s4">
    <path d="M330 46 L420 36 M330 46 L420 46 M330 46 L420 56" class="dg44a-air3"/>
    <path d="M330 92 L420 82 M330 92 L420 92 M330 92 L420 102" class="dg44a-air3"/>
    <path d="M330 138 L420 128 M330 138 L420 138 M330 138 L420 148" class="dg44a-air3"/>
    <path d="M330 178 L420 168 M330 178 L420 178 M330 178 L420 188" class="dg44a-air3"/>
    <path d="M330 222 L420 212 M330 222 L420 222 M330 222 L420 232" class="dg44a-air3"/>
    <rect x="446" y="84" width="176" height="94" rx="10" class="dg44a-box"/>
    <text x="458" y="106" class="dg44a-lbl">10 segmental / lung</text>
    <text x="458" y="126" class="dg44a-sub">right 3 upper, 2 middle, 5 lower</text>
    <text x="458" y="144" class="dg44a-sub">left 5 upper, 5 lower</text>
    <text x="458" y="164" class="dg44a-sub">= bronchopulmonary segments</text>
  </g>

  <line x1="26" y1="266" x2="614" y2="266" class="dg44a-tl"/>
  <line x1="30" y1="260" x2="30" y2="272" class="dg44a-tl"/>
  <line x1="174" y1="260" x2="174" y2="272" class="dg44a-tl"/>
  <line x1="304" y1="260" x2="304" y2="272" class="dg44a-tl"/>
  <line x1="456" y1="260" x2="456" y2="272" class="dg44a-tl"/>
  <text x="26" y="286" class="dg44a-sub">Wk 4&#8211;5 diverticulum</text>
  <text x="170" y="286" class="dg44a-sub">1st &#8594; 2 primary</text>
  <text x="300" y="286" class="dg44a-sub">2nd &#8594; 3 R / 2 L lobar</text>
  <text x="452" y="286" class="dg44a-sub">Wk 6, 3rd &#8594; 10 / lung</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Cartilage thins out down the tree - and that is what makes bronchioles
//    collapsible. Motion shows the same compression having two different
//    outcomes at two points along one airway.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv44-cartilage-collapse"] = {
  title: "Where the cartilage stops",
  caption:
    "One airway, compressed at two points. Proximally, C-shaped rings and then irregular cartilage <b>plates</b> hold the lumen open. " +
    "The plates diminish progressively and disappear in airways of about <b>1 mm</b> diameter &#8212; and an airway with no cartilage is, by definition, a <b>bronchiole</b> (Slide 15). " +
    "Bronchioles and alveolar ducts therefore collapse when compressed; the only thing opposing that collapse is the outward pull of the attached alveolar septa. " +
    "The ghosted line in the distal airway is the collapsed lumen.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="A single airway narrowing from left to right. The proximal part carries C-shaped cartilage rings and then irregular cartilage plates and stays open when arrows press on it. Past a dashed line marked about one millimetre in diameter the cartilage is gone, the airway is a bronchiole, and the same pressing arrows collapse its lumen; short tethers labelled alveolar septa pull outward against the collapse. At the far right the airway opens into alveolar ducts and alveoli.">
  <style>
    .dg44b-lbl  { font-size: 12px; font-weight: 700; }
    .dg44b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg44b-wall { stroke: var(--dg-ink); stroke-width: 2.2; fill: none; }
    .dg44b-lum  { fill: var(--dg-panel); }
    .dg44b-cart { fill: var(--dg-accent); }
    .dg44b-alv  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg44b-dash { stroke: var(--dg-line); stroke-width: 1.6; stroke-dasharray: 5 5; }
    .dg44b-arw  { stroke: var(--dg-warm); stroke-width: 2.6; fill: var(--dg-warm); }
    .dg44b-teth { stroke: var(--dg-good); stroke-width: 2; }
    .dg44b-shut { stroke: var(--dg-warm); stroke-width: 3.4; stroke-linecap: round; }

    .dg44b-dn { animation: dg44bDn 3.6s ease-in-out infinite; }
    .dg44b-up { animation: dg44bUp 3.6s ease-in-out infinite; }
    @keyframes dg44bDn { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(11px) } }
    @keyframes dg44bUp { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-11px) } }

    .dg44b-fade { animation: dg44bFade 3.6s ease-in-out infinite; }
    @keyframes dg44bFade { 0%, 18% { opacity: .3 } 48%, 62% { opacity: 1 } 88%, 100% { opacity: .3 } }

    .dg44b-pull { animation: dg44bPull 3.6s ease-in-out infinite; }
    @keyframes dg44bPull { 0%, 100% { opacity: .45 } 50% { opacity: 1 } }
  </style>

  <path d="M60 72 L230 84 L390 100 L520 112 L520 128 L390 140 L230 156 L60 168 Z" class="dg44b-lum"/>
  <path d="M60 72 L230 84 L390 100 L520 112" class="dg44b-wall"/>
  <path d="M60 168 L230 156 L390 140 L520 128" class="dg44b-wall"/>

  <g class="dg44b-cart">
    <rect x="74" y="64" width="22" height="7" rx="3.5"/>
    <rect x="106" y="66" width="22" height="7" rx="3.5"/>
    <rect x="138" y="68" width="22" height="7" rx="3.5"/>
    <rect x="170" y="71" width="22" height="7" rx="3.5"/>
    <rect x="202" y="73" width="22" height="7" rx="3.5"/>
    <rect x="74" y="167" width="22" height="7" rx="3.5"/>
    <rect x="106" y="165" width="22" height="7" rx="3.5"/>
    <rect x="138" y="163" width="22" height="7" rx="3.5"/>
    <rect x="170" y="160" width="22" height="7" rx="3.5"/>
    <rect x="202" y="158" width="22" height="7" rx="3.5"/>
    <rect x="248" y="76" width="17" height="6" rx="3"/>
    <rect x="292" y="80" width="12" height="6" rx="3"/>
    <rect x="336" y="86" width="9" height="5" rx="2.5"/>
    <rect x="248" y="157" width="17" height="6" rx="3"/>
    <rect x="292" y="152" width="12" height="6" rx="3"/>
    <rect x="336" y="146" width="9" height="5" rx="2.5"/>
  </g>

  <text x="66" y="46" class="dg44b-lbl">C-shaped rings</text>
  <text x="66" y="60" class="dg44b-sub">trachea, large bronchi</text>
  <text x="244" y="52" class="dg44b-lbl">irregular plates</text>
  <text x="244" y="66" class="dg44b-sub">diminish distally</text>

  <line x1="400" y1="34" x2="400" y2="220" class="dg44b-dash"/>
  <text x="408" y="46" class="dg44b-lbl">&#8776;1 mm diameter</text>
  <text x="408" y="60" class="dg44b-sub">no cartilage = BRONCHIOLE</text>

  <g class="dg44b-arw dg44b-dn">
    <line x1="150" y1="22" x2="150" y2="48"/>
    <polygon points="144,46 156,46 150,58"/>
  </g>
  <g class="dg44b-arw dg44b-up">
    <line x1="150" y1="218" x2="150" y2="192"/>
    <polygon points="144,194 156,194 150,182"/>
  </g>
  <text x="112" y="240" class="dg44b-sub">compressed: stays open</text>

  <g class="dg44b-arw dg44b-dn">
    <line x1="466" y1="52" x2="466" y2="78"/>
    <polygon points="460,76 472,76 466,88"/>
  </g>
  <g class="dg44b-arw dg44b-up">
    <line x1="466" y1="200" x2="466" y2="174"/>
    <polygon points="460,176 472,176 466,164"/>
  </g>
  <line x1="416" y1="120" x2="516" y2="120" class="dg44b-shut dg44b-fade" opacity=".5"/>
  <text x="420" y="240" class="dg44b-sub">compressed: collapses</text>

  <g class="dg44b-teth dg44b-pull">
    <line x1="432" y1="104" x2="424" y2="86"/>
    <line x1="470" y1="110" x2="470" y2="90"/>
    <line x1="432" y1="136" x2="424" y2="154"/>
    <line x1="470" y1="130" x2="470" y2="150"/>
  </g>
  <text x="404" y="266" class="dg44b-sub">alveolar septa (S) pull outward and oppose collapse</text>

  <g class="dg44b-alv">
    <circle cx="552" cy="102" r="15"/>
    <circle cx="586" cy="118" r="15"/>
    <circle cx="552" cy="138" r="15"/>
    <circle cx="606" cy="94" r="12"/>
  </g>
  <text x="528" y="172" class="dg44b-sub">alveolar ducts + alveoli</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. An 8 um red cell through a 6 um capillary: single file, deformed, 0.75 s.
//    The whole point is the deformation, which only reads in motion.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv44-capillary-transit"] = {
  title: "8 &#956;m cell, 6 &#956;m tube",
  caption:
    "Pulmonary capillaries average about <b>6 &#956;m</b> in diameter and the average red cell is about <b>8 &#956;m</b>, so red cells must <b>change shape</b> and pass essentially single file (Slide 21). " +
    "A red cell spends roughly <b>4&#8211;5 s</b> crossing the whole pulmonary circulation at rest but only about <b>0.75 s</b> in the capillaries themselves &#8212; that is the entire window for gas exchange across the type I pneumocyte. " +
    "The lower lane is the lecturer's point about sickle cell: a cell that cannot deform obstructs a bed built on deformability.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="An alveolar air space above a long capillary. Round red cells about eight micrometres wide enter from the left, flatten into elongated shapes to pass single file through a capillary about six micrometres wide, while oxygen dots cross downward from the alveolus into the blood. Timing labels read zero point seven five seconds in the capillary and four to five seconds for the whole pulmonary circuit. A lower lane shows a crescent shaped sickled cell wedged in a capillary with cells stacked up behind it.">
  <style>
    .dg44c-lbl  { font-size: 12px; font-weight: 700; }
    .dg44c-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg44c-alv  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg44c-bar  { stroke: var(--dg-ink); stroke-width: 2; }
    .dg44c-tube { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg44c-rbc  { fill: var(--dg-warm); }
    .dg44c-o2   { fill: var(--dg-cool); }
    .dg44c-jam  { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1.4; }

    .dg44c-flow { animation: dg44cFlow 4.5s linear infinite; }
    @keyframes dg44cFlow { from { transform: translateX(0) } to { transform: translateX(120px) } }

    .dg44c-d1 { animation: dg44cDrop 2.6s ease-in infinite; }
    .dg44c-d2 { animation: dg44cDrop 2.6s ease-in infinite .8s; }
    .dg44c-d3 { animation: dg44cDrop 2.6s ease-in infinite 1.6s; }
    @keyframes dg44cDrop {
      0%   { transform: translateY(0);    opacity: 0 }
      20%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(38px); opacity: 0 }
    }

    .dg44c-bump { animation: dg44cBump 2.8s ease-in-out infinite; }
    @keyframes dg44cBump { 0%, 100% { transform: translateX(0) } 45% { transform: translateX(9px) } }

    .dg44c-pulse { animation: dg44cPulse 2.8s ease-in-out infinite; }
    @keyframes dg44cPulse { 0%, 100% { opacity: .55 } 45% { opacity: 1 } }
  </style>

  <clipPath id="dg44cClip"><rect x="66" y="124" width="500" height="30"/></clipPath>

  <rect x="86" y="26" width="470" height="62" rx="16" class="dg44c-alv"/>
  <text x="98" y="50" class="dg44c-lbl">alveolar air space</text>
  <text x="98" y="68" class="dg44c-sub">~300 million alveoli, 280 billion capillaries</text>

  <line x1="86" y1="106" x2="556" y2="106" class="dg44c-bar"/>
  <text x="374" y="100" class="dg44c-sub">type I pneumocyte = blood-air barrier</text>

  <g class="dg44c-o2">
    <circle cx="180" cy="92" r="4.5" class="dg44c-d1"/>
    <circle cx="300" cy="92" r="4.5" class="dg44c-d2"/>
    <circle cx="420" cy="92" r="4.5" class="dg44c-d3"/>
  </g>

  <rect x="18" y="112" width="50" height="54" rx="10" class="dg44c-tube"/>
  <circle cx="43" cy="139" r="13" class="dg44c-rbc"/>
  <text x="12" y="184" class="dg44c-sub">~8 &#956;m RBC</text>

  <rect x="66" y="124" width="500" height="30" rx="8" class="dg44c-tube"/>
  <g clip-path="url(#dg44cClip)">
    <g class="dg44c-rbc dg44c-flow">
      <ellipse cx="96" cy="139" rx="17" ry="9"/>
      <ellipse cx="216" cy="139" rx="17" ry="9"/>
      <ellipse cx="336" cy="139" rx="17" ry="9"/>
      <ellipse cx="456" cy="139" rx="17" ry="9"/>
    </g>
  </g>
  <text x="576" y="144" class="dg44c-sub">&#8594;</text>
  <text x="150" y="184" class="dg44c-sub">~6 &#956;m capillary &#8212; cells deform and pass single file</text>

  <text x="18" y="212" class="dg44c-lbl">~0.75 s in the capillaries</text>
  <text x="230" y="212" class="dg44c-sub">of a ~4&#8211;5 s pulmonary circuit at rest</text>

  <rect x="18" y="236" width="290" height="28" rx="8" class="dg44c-tube"/>
  <g class="dg44c-rbc dg44c-bump">
    <ellipse cx="52" cy="250" rx="16" ry="9"/>
    <ellipse cx="90" cy="250" rx="16" ry="9"/>
  </g>
  <path d="M150 236 A16 16 0 1 1 150 264 A11 11 0 1 0 150 236 Z" class="dg44c-jam dg44c-pulse"/>
  <text x="320" y="248" class="dg44c-lbl">sickled cell cannot deform</text>
  <text x="320" y="264" class="dg44c-sub">&#8594; obstructs a bed built on deformability</text>
</svg>`,
};

/*
 * cv52 - Ventilation / Perfusion Relationships
 * (Lecture #52, J. R. Leheste, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Hypoxic vasoconstriction. A static picture can show a narrow vessel, but
//    only motion shows that the blood does not disappear - it is REDIRECTED to
//    the neighbouring alveolus, which is the entire point of the reflex.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv52-hypoxic-vasoconstriction"] = {
  title: "Hypoxic vasoconstriction redirects flow",
  caption:
    "Two alveoli share one arterial trunk. When the right alveolus stops being ventilated its alveolar PO2 falls below the 70 mmHg threshold, " +
    "oxygen stops reaching the surrounding vascular smooth muscle, and that arteriole constricts - so the flow it was carrying shifts to the well-ventilated alveolus on the left. " +
    "This is the opposite of every other capillary bed, where hypoxia causes dilation. Nitric oxide relaxes the same smooth muscle and reverses the constriction. " +
    "Threshold and direction are this lecture's (Slides 7-8).",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Two alveoli share one pulmonary arterial trunk. The left alveolus is well ventilated with an alveolar oxygen pressure of 100 millimetres of mercury and its arteriole stays wide open, carrying more blood. The right alveolus is not ventilated, its alveolar oxygen pressure falls below 70 millimetres of mercury, and its arteriole constricts so that blood is redirected to the well ventilated left alveolus.">
  <style>
    .dg52a-alv  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg52a-aw   { stroke: var(--dg-ink); stroke-width: 7; fill: none; stroke-linecap: round; opacity: .8; }
    .dg52a-awd  { stroke: var(--dg-ink); stroke-width: 7; fill: none; stroke-linecap: round; opacity: .2; }
    .dg52a-blk  { stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; }
    .dg52a-ves  { fill: none; stroke: var(--dg-cool); stroke-linecap: round; }
    .dg52a-hd   { font-size: 12.5px; font-weight: 700; }
    .dg52a-lbl  { font-size: 11.5px; }
    .dg52a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg52a-warm { fill: var(--dg-warm); font-size: 11.5px; font-weight: 700; }
    .dg52a-good { fill: var(--dg-good); font-size: 11.5px; font-weight: 700; }

    .dg52a-open { stroke-width: 17; animation: dg52aOpen 7s ease-in-out infinite; }
    .dg52a-shut { stroke-width: 3.5; stroke: var(--dg-warm); animation: dg52aShut 7s ease-in-out infinite; }
    @keyframes dg52aOpen { 0%, 16% { stroke-width: 12 } 40%, 100% { stroke-width: 17 } }
    @keyframes dg52aShut { 0%, 16% { stroke-width: 12; stroke: var(--dg-cool) } 40%, 100% { stroke-width: 3.5; stroke: var(--dg-warm) } }

    .dg52a-dim { animation: dg52aDim 7s ease-in-out infinite; }
    @keyframes dg52aDim { 0%, 16% { opacity: 1 } 40%, 100% { opacity: .1 } }

    .dg52a-lift { animation: dg52aLift 7s ease-in-out infinite; }
    @keyframes dg52aLift { 0%, 16% { opacity: .35 } 40%, 100% { opacity: 1 } }

    .dg52a-p1 { animation: dg52aRise 2.1s linear infinite; }
    .dg52a-p2 { animation: dg52aRise 2.1s linear infinite 1.05s; }
    .dg52a-p3 { animation: dg52aRise 2.1s linear infinite .5s; }
    @keyframes dg52aRise {
      0%   { transform: translateY(0);     opacity: 0 }
      18%  { opacity: 1 }
      82%  { opacity: 1 }
      100% { transform: translateY(-86px); opacity: 0 }
    }
  </style>

  <text x="16" y="18" class="dg52a-sub">Principal stimulus: the partial pressure of oxygen in ALVEOLAR gas, not in arterial blood</text>

  <ellipse cx="170" cy="104" rx="72" ry="48" class="dg52a-alv"/>
  <line x1="170" y1="32" x2="170" y2="58" class="dg52a-aw"/>
  <text x="170" y="94"  class="dg52a-hd"   text-anchor="middle">well ventilated</text>
  <text x="170" y="114" class="dg52a-good" text-anchor="middle">PAO2 100 mmHg</text>
  <text x="170" y="133" class="dg52a-sub"  text-anchor="middle">O2 reaches the smooth muscle</text>

  <ellipse cx="470" cy="104" rx="72" ry="48" class="dg52a-alv"/>
  <line x1="470" y1="32" x2="470" y2="58" class="dg52a-awd"/>
  <line x1="461" y1="36" x2="479" y2="54" class="dg52a-blk"/>
  <line x1="479" y1="36" x2="461" y2="54" class="dg52a-blk"/>
  <text x="470" y="94"  class="dg52a-hd"   text-anchor="middle">poorly ventilated</text>
  <text x="470" y="114" class="dg52a-warm" text-anchor="middle">PAO2 below 70 mmHg</text>
  <text x="470" y="133" class="dg52a-sub"  text-anchor="middle">O2 shortage sensed locally</text>

  <line x1="60" y1="242" x2="590" y2="242" class="dg52a-ves" stroke-width="13"/>
  <polygon points="52,232 30,242 52,252" fill="var(--dg-cool)"/>
  <text x="30" y="268" class="dg52a-sub">mixed venous inflow</text>

  <line x1="170" y1="242" x2="170" y2="156" class="dg52a-ves dg52a-open"/>
  <line x1="470" y1="242" x2="470" y2="156" class="dg52a-ves dg52a-shut"/>

  <g class="dg52a-lift">
    <g class="dg52a-p1"><circle cx="170" cy="236" r="5" fill="var(--dg-accent)"/></g>
    <g class="dg52a-p2"><circle cx="170" cy="236" r="5" fill="var(--dg-accent)"/></g>
    <g class="dg52a-p3"><circle cx="170" cy="236" r="5" fill="var(--dg-accent)"/></g>
  </g>
  <g class="dg52a-dim">
    <g class="dg52a-p1"><circle cx="470" cy="236" r="5" fill="var(--dg-accent)"/></g>
    <g class="dg52a-p2"><circle cx="470" cy="236" r="5" fill="var(--dg-accent)"/></g>
  </g>

  <text x="248" y="196" class="dg52a-good">flow increases here</text>
  <text x="500" y="196" class="dg52a-warm">arteriole constricts</text>
  <text x="316" y="268" class="dg52a-sub">Antidote: nitric oxide relaxes this smooth muscle and reopens the vessel</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The gravitational gradient. The counter-intuitive part is that ventilation
//    and perfusion BOTH rise toward the base while the ratio FALLS; a marker
//    travelling down the lung makes that opposition visible.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv52-vq-gradient"] = {
  title: "V/Q from apex to base",
  caption:
    "A highlight travels down the upright lung while the paired bars show what happens in each zone. Gravity pulls blood downward much more than it pulls air, " +
    "so ventilation and perfusion both increase toward the base - but perfusion increases far more. The ratio therefore falls from about 3 at the apex to 0.8 in the middle " +
    "to about 0.6 at the base (the lecturer quotes 0.63 on the gas-exchange plot). 0.8 is the ideal, so a high apical ratio is a mismatch too, not an advantage. " +
    "Bar lengths are relative and deliberately unlabelled: this lecture gives ratios, not absolute flows (Slides 12-13).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="An upright lung divided into three zones beside three pairs of bars. At the apex, zone one, the ventilation bar is short and the perfusion bar is much shorter, giving a ventilation to perfusion ratio of about 3. In the middle, zone two, the two bars are nearly equal, giving the ideal ratio of 0.8. At the base, zone three, both bars are long but the perfusion bar is much longer, giving a ratio of about 0.6.">
  <style>
    .dg52b-lung { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg52b-div  { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 4 4; }
    .dg52b-lbl  { font-size: 11.5px; }
    .dg52b-hd   { font-size: 12px; font-weight: 700; }
    .dg52b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg52b-val  { font-size: 14px; font-weight: 700; }
    .dg52b-v    { fill: var(--dg-accent); }
    .dg52b-q    { fill: var(--dg-cool); }
    .dg52b-ideal{ fill: var(--dg-good); }
    .dg52b-off  { fill: var(--dg-warm); }

    .dg52b-band { fill: var(--dg-accent); opacity: .15; animation: dg52bDrop 9s ease-in-out infinite; }
    @keyframes dg52bDrop {
      0%, 22%   { transform: translateY(0) }
      33%, 55%  { transform: translateY(74px) }
      66%, 88%  { transform: translateY(148px) }
      100%      { transform: translateY(0) }
    }
    .dg52b-r1 { animation: dg52bR1 9s ease-in-out infinite; }
    .dg52b-r2 { animation: dg52bR2 9s ease-in-out infinite; }
    .dg52b-r3 { animation: dg52bR3 9s ease-in-out infinite; }
    @keyframes dg52bR1 { 0%, 24% { opacity: 1 } 34%, 96% { opacity: .45 } 100% { opacity: 1 } }
    @keyframes dg52bR2 { 0%, 24% { opacity: .45 } 34%, 57% { opacity: 1 } 67%, 100% { opacity: .45 } }
    @keyframes dg52bR3 { 0%, 57% { opacity: .45 } 67%, 90% { opacity: 1 } 100% { opacity: .45 } }
  </style>

  <path d="M124,42 C172,46 192,90 192,142 C192,208 178,258 124,258 C70,258 56,208 56,142 C56,90 76,46 124,42 Z" class="dg52b-lung"/>
  <line x1="58" y1="116" x2="190" y2="116" class="dg52b-div"/>
  <line x1="58" y1="190" x2="190" y2="190" class="dg52b-div"/>
  <rect x="56" y="42" width="136" height="74" rx="6" class="dg52b-band"/>

  <text x="124" y="80"  class="dg52b-hd" text-anchor="middle">Zone 1 apex</text>
  <text x="124" y="156" class="dg52b-hd" text-anchor="middle">Zone 2</text>
  <text x="124" y="230" class="dg52b-hd" text-anchor="middle">Zone 3 base</text>

  <polygon points="30,60 22,60 26,52" fill="var(--dg-muted)"/>
  <line x1="26" y1="60" x2="26" y2="240" stroke="var(--dg-line)" stroke-width="1.6"/>
  <polygon points="20,232 32,232 26,246" fill="var(--dg-muted)"/>
  <text transform="rotate(-90 12 152)" x="12" y="152" class="dg52b-sub" text-anchor="middle">gravity</text>

  <rect x="230" y="20" width="14" height="9" rx="2" class="dg52b-v"/>
  <text x="250" y="28" class="dg52b-sub">ventilation</text>
  <rect x="322" y="20" width="14" height="9" rx="2" class="dg52b-q"/>
  <text x="342" y="28" class="dg52b-sub">perfusion</text>
  <text x="500" y="28" class="dg52b-sub">ideal V/Q = 0.8</text>

  <g class="dg52b-r1">
    <rect x="230" y="60"  width="42"  height="13" rx="3" class="dg52b-v"/>
    <rect x="230" y="79"  width="14"  height="13" rx="3" class="dg52b-q"/>
    <text x="500" y="79" class="dg52b-val dg52b-off">V/Q ~ 3</text>
    <text x="500" y="96" class="dg52b-sub">both low, perfusion far lower</text>
  </g>
  <g class="dg52b-r2">
    <rect x="230" y="134" width="96"  height="13" rx="3" class="dg52b-v"/>
    <rect x="230" y="153" width="120" height="13" rx="3" class="dg52b-q"/>
    <text x="500" y="153" class="dg52b-val dg52b-ideal">V/Q 0.8</text>
    <text x="500" y="170" class="dg52b-sub">matched: PaO2 100, PaCO2 40</text>
  </g>
  <g class="dg52b-r3">
    <rect x="230" y="208" width="132" height="13" rx="3" class="dg52b-v"/>
    <rect x="230" y="227" width="220" height="13" rx="3" class="dg52b-q"/>
    <text x="500" y="227" class="dg52b-val dg52b-off">V/Q ~ 0.6</text>
    <text x="500" y="244" class="dg52b-sub">both high, perfusion higher</text>
  </g>

  <text x="230" y="286" class="dg52b-sub">Cause of the whole gradient: gravity acting on blood more than on air</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. The V/Q spectrum. Motion carries the lesson: air moves in the right two
//    units but not the shunt, blood moves in the left two but not the dead
//    space, and the gas numbers at each end follow directly from that.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv52-vq-spectrum"] = {
  title: "Shunt, normal, dead space",
  caption:
    "Three alveolar-capillary units. On the left the airway is plugged, so blood flows past without exchanging and leaves exactly as it arrived - mixed venous, PO2 40 and PCO2 46, V/Q = 0. " +
    "In the middle both move and alveolar gas equilibrates with arterial blood at PO2 100 and PCO2 40. On the right the capillary is plugged, air still moves, and the alveolus equilibrates " +
    "with ambient air instead: PO2 150 (160 minus water vapour) and PCO2 0, V/Q = infinity. Watch which arrows keep moving in each unit - that is the whole classification. " +
    "All values are this lecture's (Slides 14-15).",
  svg: `
<svg viewBox="0 0 650 300" role="img" aria-label="Three alveolar capillary units side by side. In the shunt unit the airway is blocked, blood flows through unchanged and leaves with the mixed venous values of oxygen 40 and carbon dioxide 46, so the ventilation perfusion ratio is zero. In the normal unit both air and blood move and the values equilibrate at oxygen 100 and carbon dioxide 40, ratio 0.8. In the dead space unit the capillary is blocked, only air moves, and the alveolus equilibrates with ambient air at oxygen 150 and carbon dioxide 0, so the ratio is infinity.">
  <style>
    .dg52c-alv  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg52c-aw   { stroke: var(--dg-ink); stroke-width: 6.5; fill: none; stroke-linecap: round; opacity: .8; }
    .dg52c-awd  { stroke: var(--dg-ink); stroke-width: 6.5; fill: none; stroke-linecap: round; opacity: .18; }
    .dg52c-cap  { fill: none; stroke: var(--dg-cool); stroke-width: 11; stroke-linecap: round; }
    .dg52c-capd { fill: none; stroke: var(--dg-cool); stroke-width: 11; stroke-linecap: round; opacity: .2; }
    .dg52c-blk  { stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; }
    .dg52c-hd   { font-size: 12px; font-weight: 700; }
    .dg52c-val  { font-size: 11.5px; font-weight: 700; }
    .dg52c-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg52c-rat  { font-size: 14px; font-weight: 700; }
    .dg52c-warm { fill: var(--dg-warm); }
    .dg52c-good { fill: var(--dg-good); }

    .dg52c-air1 { animation: dg52cAir 2.4s linear infinite; }
    .dg52c-air2 { animation: dg52cAir 2.4s linear infinite 1.2s; }
    @keyframes dg52cAir {
      0%   { transform: translateY(-16px); opacity: 0 }
      20%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(30px);  opacity: 0 }
    }
    .dg52c-bl1 { animation: dg52cBlood 3.2s linear infinite; }
    .dg52c-bl2 { animation: dg52cBlood 3.2s linear infinite 1.6s; }
    @keyframes dg52cBlood {
      0%   { transform: translateX(0);     opacity: 0 }
      15%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(148px); opacity: 0 }
    }
  </style>

  <text x="112" y="20" class="dg52c-hd" text-anchor="middle">Shunt perfusion</text>
  <text x="325" y="20" class="dg52c-hd" text-anchor="middle">Matched</text>
  <text x="538" y="20" class="dg52c-hd" text-anchor="middle">Dead space</text>
  <text x="112" y="35" class="dg52c-sub" text-anchor="middle">airway obstructed</text>
  <text x="325" y="35" class="dg52c-sub" text-anchor="middle">normal unit</text>
  <text x="538" y="35" class="dg52c-sub" text-anchor="middle">pulmonary embolus</text>

  <line x1="112" y1="48" x2="112" y2="74" class="dg52c-awd"/>
  <line x1="103" y1="52" x2="121" y2="70" class="dg52c-blk"/>
  <line x1="121" y1="52" x2="103" y2="70" class="dg52c-blk"/>
  <line x1="325" y1="48" x2="325" y2="74" class="dg52c-aw"/>
  <line x1="538" y1="48" x2="538" y2="74" class="dg52c-aw"/>

  <g class="dg52c-air1"><circle cx="325" cy="60" r="4" fill="var(--dg-accent)"/></g>
  <g class="dg52c-air2"><circle cx="325" cy="60" r="4" fill="var(--dg-accent)"/></g>
  <g class="dg52c-air1"><circle cx="538" cy="60" r="4" fill="var(--dg-accent)"/></g>
  <g class="dg52c-air2"><circle cx="538" cy="60" r="4" fill="var(--dg-accent)"/></g>

  <ellipse cx="112" cy="120" rx="74" ry="42" class="dg52c-alv"/>
  <ellipse cx="325" cy="120" rx="74" ry="42" class="dg52c-alv"/>
  <ellipse cx="538" cy="120" rx="74" ry="42" class="dg52c-alv"/>

  <text x="112" y="115" class="dg52c-val dg52c-warm" text-anchor="middle">no fresh gas</text>
  <text x="112" y="133" class="dg52c-sub" text-anchor="middle">nothing to exchange with</text>
  <text x="325" y="115" class="dg52c-val dg52c-good" text-anchor="middle">PAO2 100 / PACO2 40</text>
  <text x="325" y="133" class="dg52c-sub" text-anchor="middle">mixed with residual air</text>
  <text x="538" y="115" class="dg52c-val dg52c-warm" text-anchor="middle">PAO2 150 / PACO2 0</text>
  <text x="538" y="133" class="dg52c-sub" text-anchor="middle">equilibrates with ambient air</text>

  <path d="M32,200 C60,178 164,178 192,200" class="dg52c-cap"/>
  <path d="M245,200 C273,178 377,178 405,200" class="dg52c-cap"/>
  <path d="M458,200 C486,178 590,178 618,200" class="dg52c-capd"/>
  <line x1="529" y1="177" x2="547" y2="195" class="dg52c-blk"/>
  <line x1="547" y1="177" x2="529" y2="195" class="dg52c-blk"/>

  <g class="dg52c-bl1"><circle cx="40" cy="192" r="4.5" fill="var(--dg-warm)"/></g>
  <g class="dg52c-bl2"><circle cx="40" cy="192" r="4.5" fill="var(--dg-warm)"/></g>
  <g class="dg52c-bl1"><circle cx="253" cy="192" r="4.5" fill="var(--dg-warm)"/></g>
  <g class="dg52c-bl2"><circle cx="253" cy="192" r="4.5" fill="var(--dg-warm)"/></g>

  <text x="112" y="228" class="dg52c-val" text-anchor="middle">in 40 / 46 &#8594; out 40 / 46</text>
  <text x="112" y="243" class="dg52c-sub" text-anchor="middle">unchanged mixed venous blood</text>
  <text x="325" y="228" class="dg52c-val" text-anchor="middle">in CO2 45 &#8594; out 100 / 40</text>
  <text x="325" y="243" class="dg52c-sub" text-anchor="middle">arterial gas equals alveolar gas</text>
  <text x="538" y="228" class="dg52c-val dg52c-warm" text-anchor="middle">no blood flow</text>
  <text x="538" y="243" class="dg52c-sub" text-anchor="middle">wasted ventilation</text>

  <text x="112" y="272" class="dg52c-rat dg52c-warm" text-anchor="middle">V/Q = 0</text>
  <text x="325" y="272" class="dg52c-rat dg52c-good" text-anchor="middle">V/Q = 0.8</text>
  <text x="538" y="272" class="dg52c-rat dg52c-warm" text-anchor="middle">V/Q = &#8734;</text>

  <text x="325" y="292" class="dg52c-sub" text-anchor="middle">Either extreme is a V/Q defect, and every V/Q defect causes hypoxemia AND hypercapnia</text>
</svg>`,
};

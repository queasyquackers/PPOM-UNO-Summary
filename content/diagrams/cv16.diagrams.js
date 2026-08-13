window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv16 - Hemodynamics and Circulation.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv16-velocity-vs-total-area"] = {
  title: "Velocity vs total cross-sectional area",
  caption:
    "One stream of blood, three speeds. In the aorta the whole cardiac output squeezes through a total area of " +
    "3.14 cm&#178; and races at about 1,752 cm/min; the same flow spreads across the capillaries' 2,500 cm&#178; of " +
    "total cross-sectional area and crawls at 2.2 cm/min; then the channel converges again and velocity rises. " +
    "Count the cells crossing any dashed plane per second and the answer is identical everywhere &#8212; that is " +
    "Q staying constant while v = Q/A changes. The five slow lanes deliver exactly as many cells per second as the " +
    "one fast lane, which is the whole point: total area, not single-vessel diameter, sets velocity. " +
    "Numbers are this lecture's Slide 11 worked example (CO 5.5 L/min; normal CO is about 5 L/min). " +
    "The real velocity ratio is roughly 800-fold; it is compressed to about 11-fold here so both ends stay visible.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A blood channel that is narrow at the aorta, fans out into five parallel capillary lanes, then narrows again at the venae cavae. Cells race through the aorta, crawl across the wide capillary bed and speed up again on the venous side, while the same number of cells crosses each of three dashed measuring planes every second: flow stays 5.5 litres per minute while velocity falls from about 1752 centimetres per minute in the aorta to 2.2 centimetres per minute in the capillaries.">
  <style>
    .dg16a-wall  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg16a-lane  { fill: none; stroke: var(--dg-line); stroke-width: 1; }
    .dg16a-plane { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 4; opacity: .85; }
    .dg16a-cap   { font-size: 10.5px; font-weight: 700; letter-spacing: .06em; }
    .dg16a-min   { font-size: 9.5px; fill: var(--dg-muted); letter-spacing: .04em; }
    .dg16a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg16a-val   { font-size: 12.5px; font-weight: 700; }
    .dg16a-art   { fill: var(--dg-warm); }
    .dg16a-mid   { fill: var(--dg-accent); }
    .dg16a-ven   { fill: var(--dg-cool); }
    .dg16a-meter { fill: var(--dg-good); }
    .dg16a-fast  { animation: dg16aFast .6s linear infinite; }
    @keyframes dg16aFast { from { transform: translate(0,0) } to { transform: translate(63px,0) } }
    .dg16a-crawl { animation: dg16aCrawl 3s linear infinite; }
    @keyframes dg16aCrawl { from { transform: translate(0,0) } to { transform: translate(28px,0) } }
    .dg16a-fu2 { animation: dg16aFu2 3s linear infinite; }
    @keyframes dg16aFu2 { 0% { transform: translate(0,0); opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { transform: translate(90px,-68px); opacity: 0 } }
    .dg16a-fu1 { animation: dg16aFu1 3s linear infinite; }
    @keyframes dg16aFu1 { 0% { transform: translate(0,0); opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { transform: translate(90px,-34px); opacity: 0 } }
    .dg16a-f0  { animation: dg16aF0 3s linear infinite; }
    @keyframes dg16aF0 { 0% { transform: translate(0,0); opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { transform: translate(90px,0); opacity: 0 } }
    .dg16a-fd1 { animation: dg16aFd1 3s linear infinite; }
    @keyframes dg16aFd1 { 0% { transform: translate(0,0); opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { transform: translate(90px,34px); opacity: 0 } }
    .dg16a-fd2 { animation: dg16aFd2 3s linear infinite; }
    @keyframes dg16aFd2 { 0% { transform: translate(0,0); opacity: 0 } 14% { opacity: 1 } 84% { opacity: 1 } 100% { transform: translate(90px,68px); opacity: 0 } }
    .dg16a-tick { animation: dg16aTick .6s ease-out infinite; }
    @keyframes dg16aTick { 0% { opacity: 1 } 40%, 100% { opacity: .2 } }
    .dg16a-d1 { animation-delay: -.6s }
    .dg16a-d2 { animation-delay: -1.2s }
    .dg16a-d3 { animation-delay: -1.8s }
    .dg16a-d4 { animation-delay: -2.4s }
  </style>

  <text x="20" y="18" class="dg16a-sub">v = Q / A &#183; each dashed plane is crossed by the same number of cells per second</text>
  <rect x="470" y="6" width="150" height="22" rx="6" fill="none" stroke="var(--dg-good)" stroke-width="1.2"/>
  <text x="482" y="21" class="dg16a-cap" fill="var(--dg-good)">Q = 5.5 L/min</text>

  <text x="28"  y="44" class="dg16a-cap">AORTA</text>
  <text x="166" y="44" class="dg16a-min">arterioles</text>
  <text x="252" y="44" class="dg16a-cap">CAPILLARY BED</text>
  <text x="396" y="44" class="dg16a-min">venules</text>
  <text x="478" y="44" class="dg16a-cap">VENAE CAVAE</text>

  <path class="dg16a-wall" d="M28 117 L160 117 L250 50 L390 50 L480 117 L612 117 L612 143 L480 143 L390 210 L250 210 L160 143 L28 143 Z"/>
  <path class="dg16a-lane" d="M28 130 H160 M160 130 L250 62 M160 130 L250 96 M160 130 L250 130 M160 130 L250 164 M160 130 L250 198 M250 62 H390 M250 96 H390 M250 130 H390 M250 164 H390 M250 198 H390 M390 62 L480 130 M390 96 L480 130 M390 130 L480 130 M390 164 L480 130 M390 198 L480 130 M480 130 H612"/>

  <line x1="110" y1="106" x2="110" y2="154" class="dg16a-plane"/>
  <line x1="340" y1="48"  x2="340" y2="212" class="dg16a-plane"/>
  <line x1="546" y1="106" x2="546" y2="154" class="dg16a-plane"/>
  <circle cx="110" cy="160" r="3.5" class="dg16a-meter dg16a-tick"/>
  <circle cx="340" cy="222" r="3.5" class="dg16a-meter dg16a-tick"/>
  <circle cx="546" cy="160" r="3.5" class="dg16a-meter dg16a-tick"/>

  <g class="dg16a-fast">
    <circle cx="34" cy="130" r="5" class="dg16a-art"/>
    <circle cx="97" cy="130" r="5" class="dg16a-art"/>
  </g>

  <circle cx="160" cy="130" r="4.5" class="dg16a-art dg16a-fu2" transform="translate(45,-34)"/>
  <circle cx="160" cy="130" r="4.5" class="dg16a-art dg16a-fu1 dg16a-d1" transform="translate(45,-17)"/>
  <circle cx="160" cy="130" r="4.5" class="dg16a-art dg16a-f0 dg16a-d2" transform="translate(45,0)"/>
  <circle cx="160" cy="130" r="4.5" class="dg16a-art dg16a-fd1 dg16a-d3" transform="translate(45,17)"/>
  <circle cx="160" cy="130" r="4.5" class="dg16a-art dg16a-fd2 dg16a-d4" transform="translate(45,34)"/>

  <g class="dg16a-crawl">
    <circle cx="250" cy="62" r="4" class="dg16a-mid"/><circle cx="278" cy="62" r="4" class="dg16a-mid"/><circle cx="306" cy="62" r="4" class="dg16a-mid"/><circle cx="334" cy="62" r="4" class="dg16a-mid"/><circle cx="362" cy="62" r="4" class="dg16a-mid"/>
  </g>
  <g class="dg16a-crawl dg16a-d1">
    <circle cx="250" cy="96" r="4" class="dg16a-mid"/><circle cx="278" cy="96" r="4" class="dg16a-mid"/><circle cx="306" cy="96" r="4" class="dg16a-mid"/><circle cx="334" cy="96" r="4" class="dg16a-mid"/><circle cx="362" cy="96" r="4" class="dg16a-mid"/>
  </g>
  <g class="dg16a-crawl dg16a-d2">
    <circle cx="250" cy="130" r="4" class="dg16a-mid"/><circle cx="278" cy="130" r="4" class="dg16a-mid"/><circle cx="306" cy="130" r="4" class="dg16a-mid"/><circle cx="334" cy="130" r="4" class="dg16a-mid"/><circle cx="362" cy="130" r="4" class="dg16a-mid"/>
  </g>
  <g class="dg16a-crawl dg16a-d3">
    <circle cx="250" cy="164" r="4" class="dg16a-mid"/><circle cx="278" cy="164" r="4" class="dg16a-mid"/><circle cx="306" cy="164" r="4" class="dg16a-mid"/><circle cx="334" cy="164" r="4" class="dg16a-mid"/><circle cx="362" cy="164" r="4" class="dg16a-mid"/>
  </g>
  <g class="dg16a-crawl dg16a-d4">
    <circle cx="250" cy="198" r="4" class="dg16a-mid"/><circle cx="278" cy="198" r="4" class="dg16a-mid"/><circle cx="306" cy="198" r="4" class="dg16a-mid"/><circle cx="334" cy="198" r="4" class="dg16a-mid"/><circle cx="362" cy="198" r="4" class="dg16a-mid"/>
  </g>

  <circle cx="390" cy="62"  r="4.5" class="dg16a-ven dg16a-fd2" transform="translate(45,34)"/>
  <circle cx="390" cy="96"  r="4.5" class="dg16a-ven dg16a-fd1 dg16a-d1" transform="translate(45,17)"/>
  <circle cx="390" cy="130" r="4.5" class="dg16a-ven dg16a-f0 dg16a-d2" transform="translate(45,0)"/>
  <circle cx="390" cy="164" r="4.5" class="dg16a-ven dg16a-fu1 dg16a-d3" transform="translate(45,-17)"/>
  <circle cx="390" cy="198" r="4.5" class="dg16a-ven dg16a-fu2 dg16a-d4" transform="translate(45,-34)"/>

  <g class="dg16a-fast">
    <circle cx="486" cy="130" r="5" class="dg16a-ven"/>
    <circle cx="549" cy="130" r="5" class="dg16a-ven"/>
  </g>

  <text x="28"  y="238" class="dg16a-sub">total area 3.14 cm&#178;</text>
  <text x="246" y="238" class="dg16a-sub">total area 2,500 cm&#178;</text>
  <text x="458" y="238" class="dg16a-sub">total area falls again</text>
  <text x="28"  y="256" class="dg16a-val" fill="var(--dg-warm)">v &#8776; 1,752 cm/min</text>
  <text x="246" y="256" class="dg16a-val" fill="var(--dg-accent)">v = 2.2 cm/min</text>
  <text x="458" y="256" class="dg16a-val" fill="var(--dg-cool)">v rises again</text>
  <text x="28"  y="282" class="dg16a-sub">Slide 11 worked example: five slow lanes carry the same Q as one fast lane.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv16-poiseuille-r4"] = {
  title: "Radius to the fourth power",
  caption:
    "Two catheters on one clock, identical driving pressure, identical length, identical viscosity &#8212; only the " +
    "radius differs (2r vs r). Because Q = (&#916;P &#215; &#960; &#215; r&#8308;) / (8 &#215; L &#215; viscosity), " +
    "the wide catheter delivers 2&#8308; = 16 volumes in the time the narrow one delivers 1: watch its cylinder fill " +
    "while the other barely wets the bottom, and watch the cells rush down one tube and drip down the other. " +
    "The volume scale is arbitrary units chosen so the wide catheter reads 16. " +
    "The lever bars are this lecture's transfusion answer: doubling the radius (or diameter) beats doubling the " +
    "driving pressure, halving viscosity, or anything done to length &#8212; a second identical catheter also only " +
    "doubles flow, and raising the pressure risks hemolyzing the red cells.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="Two catheters fed by the same pressure source empty into two identical graduated cylinders on one clock. The wide catheter, of double radius, runs a fast stream of cells and fills its cylinder to 16 volumes while the narrow catheter drips slowly and reaches only 1 volume. A panel on the right ranks the levers on flow: doubling the radius gives sixteen times flow, doubling the driving pressure or halving viscosity gives two times, and doubling the length halves flow.">
  <style>
    .dg16b-body  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg16b-glass { fill: none; stroke: var(--dg-line); stroke-width: 1.5; }
    .dg16b-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 3; }
    .dg16b-blood { fill: var(--dg-warm); }
    .dg16b-lbl   { font-size: 11px; font-weight: 700; }
    .dg16b-sub   { font-size: 10px; fill: var(--dg-muted); }
    .dg16b-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg16b-big   { font-size: 12.5px; font-weight: 700; }
    .dg16b-eq    { font-size: 11px; }
    .dg16b-wide  { animation: dg16bWide .25s linear infinite; }
    @keyframes dg16bWide { from { transform: translate(0,0) } to { transform: translate(0,32px) } }
    .dg16b-narrow { animation: dg16bNarrow 4s linear infinite; }
    @keyframes dg16bNarrow { from { transform: translate(0,0) } to { transform: translate(0,32px) } }
    .dg16b-fillW { transform: translate(0,0); animation: dg16bFillW 8s linear infinite; }
    @keyframes dg16bFillW { 0% { transform: translate(0,128px) } 78%, 100% { transform: translate(0,0) } }
    .dg16b-fillN { transform: translate(0,120px); animation: dg16bFillN 8s linear infinite; }
    @keyframes dg16bFillN { 0% { transform: translate(0,128px) } 78%, 100% { transform: translate(0,120px) } }
    .dg16b-clock { transform: translate(190px,0); animation: dg16bClock 8s linear infinite; }
    @keyframes dg16bClock { 0% { transform: translate(0,0) } 78%, 100% { transform: translate(190px,0) } }
    .dg16b-glow  { opacity: .9; animation: dg16bGlow 8s ease-in-out infinite; }
    @keyframes dg16bGlow { 0%, 100% { opacity: .45 } 50% { opacity: 1 } }
  </style>
  <clipPath id="poisGlassW"><rect x="44" y="120" width="68" height="128"/></clipPath>
  <clipPath id="poisGlassN"><rect x="166" y="120" width="68" height="128"/></clipPath>

  <text x="26" y="20" class="dg16b-sub">Same &#916;P &#183; same length &#183; same viscosity &#183; same clock</text>
  <rect x="26" y="26" width="234" height="18" rx="4" class="dg16b-body"/>
  <text x="34" y="39" class="dg16b-tiny">pressure source</text>

  <rect x="62"  y="44" width="32" height="68" class="dg16b-body"/>
  <rect x="192" y="44" width="16" height="68" class="dg16b-body"/>
  <text x="100" y="66" class="dg16b-lbl">radius 2r</text>
  <text x="214" y="66" class="dg16b-lbl">radius r</text>

  <g class="dg16b-wide">
    <circle cx="78" cy="50" r="6" class="dg16b-blood"/>
    <circle cx="78" cy="82" r="6" class="dg16b-blood"/>
  </g>
  <g class="dg16b-narrow">
    <circle cx="200" cy="50" r="4" class="dg16b-blood"/>
    <circle cx="200" cy="82" r="4" class="dg16b-blood"/>
  </g>

  <g clip-path="url(#poisGlassW)">
    <g class="dg16b-fillW">
      <rect x="44" y="120" width="68" height="128" fill="var(--dg-warm)" opacity=".32"/>
      <line x1="44" y1="120" x2="112" y2="120" stroke="var(--dg-warm)" stroke-width="3"/>
    </g>
  </g>
  <g clip-path="url(#poisGlassN)">
    <g class="dg16b-fillN">
      <rect x="166" y="120" width="68" height="128" fill="var(--dg-warm)" opacity=".32"/>
      <line x1="166" y1="120" x2="234" y2="120" stroke="var(--dg-warm)" stroke-width="3"/>
    </g>
  </g>

  <line x1="44" y1="120" x2="234" y2="120" class="dg16b-grid"/>
  <line x1="44" y1="152" x2="234" y2="152" class="dg16b-grid"/>
  <line x1="44" y1="184" x2="234" y2="184" class="dg16b-grid"/>
  <line x1="44" y1="216" x2="234" y2="216" class="dg16b-grid"/>
  <rect x="44"  y="120" width="68" height="128" class="dg16b-glass"/>
  <rect x="166" y="120" width="68" height="128" class="dg16b-glass"/>
  <text x="240" y="110" class="dg16b-tiny">volumes</text>
  <text x="240" y="124" class="dg16b-tiny">16</text>
  <text x="240" y="156" class="dg16b-tiny">12</text>
  <text x="240" y="188" class="dg16b-tiny">8</text>
  <text x="240" y="220" class="dg16b-tiny">4</text>

  <text x="44"  y="268" class="dg16b-big" fill="var(--dg-good)">16 volumes</text>
  <text x="166" y="268" class="dg16b-big" fill="var(--dg-warm)">1 volume</text>
  <text x="44"  y="284" class="dg16b-sub">wide catheter</text>
  <text x="166" y="284" class="dg16b-sub">narrow catheter</text>

  <line x1="44" y1="298" x2="234" y2="298" stroke="var(--dg-line)" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="44" cy="298" r="4.5" fill="var(--dg-good)" class="dg16b-clock"/>
  <text x="44" y="314" class="dg16b-sub">one clock, both timed together</text>

  <line x1="286" y1="18" x2="286" y2="302" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="306" y="32" class="dg16b-big">Which lever moves flow most?</text>
  <text x="306" y="52" class="dg16b-eq">Q = &#916;P &#215; &#960; &#215; r&#8308; / (8 &#215; L &#215; viscosity)</text>

  <rect x="300" y="66" width="326" height="54" rx="6" fill="var(--dg-panel)" class="dg16b-glow"/>
  <text x="308" y="84" class="dg16b-lbl">Double the radius</text>
  <text x="500" y="84" class="dg16b-big" fill="var(--dg-good)">16&#215; flow</text>
  <rect x="308" y="90" width="96" height="9" rx="2" fill="var(--dg-good)"/>
  <text x="308" y="113" class="dg16b-tiny">2 &#215; 2 &#215; 2 &#215; 2 = 16</text>

  <text x="308" y="146" class="dg16b-lbl">Double the driving &#916;P</text>
  <text x="500" y="146" class="dg16b-big">2&#215; flow</text>
  <rect x="308" y="152" width="12" height="9" rx="2" fill="var(--dg-muted)"/>

  <text x="308" y="186" class="dg16b-lbl">Halve the viscosity</text>
  <text x="500" y="186" class="dg16b-big">2&#215; flow</text>
  <rect x="308" y="192" width="12" height="9" rx="2" fill="var(--dg-muted)"/>

  <text x="308" y="226" class="dg16b-lbl">Double the length</text>
  <text x="500" y="226" class="dg16b-big" fill="var(--dg-warm)">0.5&#215; flow</text>
  <rect x="308" y="232" width="3" height="9" rx="1.5" fill="var(--dg-warm)"/>

  <text x="306" y="266" class="dg16b-sub">A second identical catheter also only doubles flow;</text>
  <text x="306" y="282" class="dg16b-sub">more pressure only doubles it &#8212; and can hemolyze cells.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv16-cardiorenal-loop"] = {
  title: "The cardiorenal loop in decompensated heart failure",
  caption:
    "Follow the signal around the circuit as each arrow lights in turn. The pump fails, so cardiac output falls; " +
    "renal artery perfusion pressure falls with it (renal Q = &#916;P / R, the same Ohm's-law circuit as everywhere " +
    "else), GFR drops, the renin-angiotensin system is activated, and the result is vasoconstriction &#8212; the " +
    "compensation. Reduced baroreceptor stretch drives the same vasoconstriction by a second, faster route. " +
    "The arrow then returns to the pump it started from: the compensation becomes the injury. " +
    "The lecture (Slide 18) states the cascade, the vasoconstriction and the volume overload; the afterload label on " +
    "the return arrow uses this lecture's own Slide 40 rule that stroke volume falls when afterload rises. " +
    "Baroreceptor detail is deferred to the blood pressure regulation lectures.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A closed feedback loop. A failing pump lowers cardiac output, which lowers renal artery perfusion pressure, which lowers GFR, which activates the renin-angiotensin system, which causes vasoconstriction with raised afterload and volume overload, and the arrow returns to the already failing pump. A second branch runs from the failing pump through reduced baroreceptor stretch to the same vasoconstriction node.">
  <style>
    .dg16c-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg16c-t1    { font-size: 11px; font-weight: 700; }
    .dg16c-t2    { font-size: 10px; fill: var(--dg-muted); }
    .dg16c-note  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg16c-mid1  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .06em; }
    .dg16c-arrow { fill: var(--dg-accent); stroke: var(--dg-accent); stroke-width: 2.2; opacity: .5; animation: dg16cPulse 7.2s linear infinite; }
    .dg16c-back  { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg16c-line  { fill: none; }
    @keyframes dg16cPulse { 0% { opacity: .35 } 5% { opacity: 1 } 18% { opacity: 1 } 30% { opacity: .35 } 100% { opacity: .35 } }
    .dg16c-halo  { fill: var(--dg-accent); opacity: 0; animation: dg16cHalo 7.2s linear infinite; }
    @keyframes dg16cHalo { 0% { opacity: 0 } 4% { opacity: .5 } 16% { opacity: .45 } 30% { opacity: 0 } 100% { opacity: 0 } }
    .dg16c-p1 { animation-delay: .6s }
    .dg16c-p2 { animation-delay: 1.2s }
    .dg16c-p3 { animation-delay: 1.8s }
    .dg16c-p4 { animation-delay: 2.4s }
    .dg16c-p5 { animation-delay: 3s }
    .dg16c-p6 { animation-delay: 3.6s }
    .dg16c-p7 { animation-delay: 4.2s }
    .dg16c-p8 { animation-delay: 4.8s }
    .dg16c-p9 { animation-delay: 5.4s }
  </style>

  <rect x="20"  y="20"  width="156" height="60" rx="10" class="dg16c-halo dg16c-p9"/>
  <rect x="244" y="20"  width="156" height="60" rx="10" class="dg16c-halo dg16c-p1"/>
  <rect x="468" y="20"  width="152" height="60" rx="10" class="dg16c-halo dg16c-p3"/>
  <rect x="468" y="112" width="152" height="60" rx="10" class="dg16c-halo dg16c-p5"/>
  <rect x="244" y="204" width="232" height="64" rx="10" class="dg16c-halo dg16c-p7"/>
  <rect x="20"  y="112" width="176" height="60" rx="10" class="dg16c-halo dg16c-p1"/>

  <g class="dg16c-arrow dg16c-line">
    <line x1="170" y1="50" x2="242" y2="50"/>
    <polygon points="242,44 254,50 242,56" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-line dg16c-p2">
    <line x1="394" y1="50" x2="466" y2="50"/>
    <polygon points="466,44 478,50 466,56" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-line dg16c-p4">
    <line x1="544" y1="74" x2="544" y2="110"/>
    <polygon points="538,110 544,122 550,110" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-line dg16c-p6">
    <polyline points="544,166 544,236 482,236" fill="none"/>
    <polygon points="482,230 470,236 482,242" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-line">
    <line x1="60" y1="74" x2="60" y2="106"/>
    <polygon points="54,106 60,118 66,106" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-line dg16c-p2">
    <polyline points="108,166 108,250 238,250" fill="none"/>
    <polygon points="238,244 250,250 238,256" stroke="none"/>
  </g>
  <g class="dg16c-arrow dg16c-back dg16c-line dg16c-p8">
    <polyline points="250,222 208,222 208,92 110,92 110,86" fill="none"/>
    <polygon points="104,86 110,74 116,86" stroke="none"/>
  </g>
  <text x="120" y="86" class="dg16c-note" fill="var(--dg-warm)">the compensation now loads the failing pump</text>

  <rect x="26"  y="26"  width="144" height="48" rx="8" class="dg16c-box"/>
  <text x="38" y="46" class="dg16c-t1">Failing pump</text>
  <text x="38" y="62" class="dg16c-t2">cardiac output &#8595;</text>

  <rect x="250" y="26"  width="144" height="48" rx="8" class="dg16c-box"/>
  <text x="262" y="46" class="dg16c-t1">Renal artery</text>
  <text x="262" y="62" class="dg16c-t2">perfusion pressure &#8595;</text>

  <rect x="474" y="26"  width="140" height="48" rx="8" class="dg16c-box"/>
  <text x="486" y="46" class="dg16c-t1">Glomerulus</text>
  <text x="486" y="62" class="dg16c-t2">GFR &#8595;</text>

  <rect x="474" y="118" width="140" height="48" rx="8" class="dg16c-box"/>
  <text x="486" y="138" class="dg16c-t1">Renin released</text>
  <text x="486" y="154" class="dg16c-t2">renin&#8211;angiotensin on</text>

  <rect x="250" y="210" width="220" height="52" rx="8" class="dg16c-box"/>
  <text x="262" y="232" class="dg16c-t1" fill="var(--dg-warm)">Vasoconstriction (compensatory)</text>
  <text x="262" y="250" class="dg16c-t2">afterload &#8593; &#183; volume overload</text>

  <rect x="26"  y="118" width="164" height="48" rx="8" class="dg16c-box"/>
  <text x="38" y="138" class="dg16c-t1">Baroreceptor stretch &#8595;</text>
  <text x="38" y="154" class="dg16c-t2">&#8594; vasoconstriction too</text>

  <text x="340" y="142" class="dg16c-mid1" text-anchor="middle">CARDIORENAL LOOP</text>
  <text x="340" y="160" class="dg16c-t2" text-anchor="middle">the compensation feeds the injury</text>
  <text x="340" y="178" class="dg16c-t2" text-anchor="middle">renal Q = &#916;P / R falls with the pump</text>

  <text x="26" y="300" class="dg16c-t2">Decompensated: dyspnea, chest discomfort, leg swelling &#183; baroreceptor detail deferred to the BP lecture.</text>
</svg>`,
};

// Animated diagrams for CV13 - Introduction to Osteopathy in the Cranial Field.
// Shared stylesheet and authoring rules live in ../../lecture_diagrams.js.

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// The primary respiratory mechanism as ONE coupled cycle (Slides 17-24).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv13-prm-phase-cycle"] = {
  title: "Inhalation and exhalation: one coupled motion",
  caption:
    "One motion, not eight separate facts. Inhalation (flexion): midline bones flex, paired bones externally rotate, " +
    "the transverse diameter widens while the A-P and vertical dimensions narrow, the sphenobasilar junction (SBJ) moves " +
    "superiorly, the CNS coils (shortens and widens), the falx sickles and shortens A-P while the tentorium flattens " +
    "transversely, and the sacral base swings postero-superior. Exhalation (extension) is the exact mirror. " +
    "All midline bones of the cranial base rotate through transverse axes, adjacent bones in opposite directions, " +
    "gear-like (Slide 18) - the direction drawn is the one required by counter-rotation plus a rising SBJ. " +
    "The sacrum follows because the dura attaches anteriorly at S2 (Slide 24). Teal marks the inhalation phase and " +
    "orange the exhalation phase; the excursion is exaggerated so it can be seen.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Two linked views of one primary respiratory cycle. In a sagittal cranium the sphenoid and occiput counter-rotate like meshed gears while the sphenobasilar junction between them rises, the falx shortens front to back, the central nervous system coils, and the sacral base swings postero-superior on its S2 dural attachment. In a coronal view the cranium widens transversely and shortens vertically, the paired bones flare into external rotation and the tentorium flattens. A table lists all eight changes for the inhalation and exhalation phases.">
  <style>
    .d13a-hd   { font-size: 9.5px; font-weight: 700; letter-spacing: .07em; fill: var(--dg-muted); }
    .d13a-lbl  { font-size: 9.5px; }
    .d13a-note { font-size: 9px; fill: var(--dg-muted); }
    .d13a-cell { font-size: 10px; }
    .d13a-colh { font-size: 9.5px; font-weight: 700; letter-spacing: .04em; }
    .d13a-skull{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .d13a-bone { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.4; }
    .d13a-cns  { fill: var(--dg-accent); fill-opacity: .16; stroke: var(--dg-accent); stroke-width: 1.2; }
    .d13a-falx { fill: var(--dg-accent); fill-opacity: .10; stroke: var(--dg-accent); stroke-width: 1.4; }
    .d13a-mem  { fill: none; stroke: var(--dg-accent); stroke-width: 2; }
    .d13a-wall { fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .d13a-lead { fill: none; stroke: var(--dg-line); stroke-width: 1; }
    .d13a-dim  { stroke: var(--dg-muted); stroke-width: 1; fill: var(--dg-muted); }
    .d13a-in   { fill: var(--dg-accent); stroke: var(--dg-accent); }
    .d13a-ex   { fill: var(--dg-warm);   stroke: var(--dg-warm); }
    .d13a-inT  { fill: var(--dg-accent); }
    .d13a-exT  { fill: var(--dg-warm); }

    .d13a-skullA { animation: d13aSkull 6.4s ease-in-out infinite; transform-origin: 148px 96px; }
    @keyframes d13aSkull { 0%,100% { transform: scale(1.045,1.055) } 50% { transform: scale(.95,.925) } }
    .d13a-cnsA { animation: d13aCns 6.4s ease-in-out infinite; transform-origin: 150px 100px; }
    @keyframes d13aCns { 0%,100% { transform: scale(.93,1.1) } 50% { transform: scale(1.1,.86) } }
    .d13a-falxA { animation: d13aFalx 6.4s ease-in-out infinite; transform-origin: 150px 104px; }
    @keyframes d13aFalx { 0%,100% { transform: scale(1.06,.94) } 50% { transform: scale(.9,1.12) } }
    .d13a-gearL { animation: d13aGearL 6.4s ease-in-out infinite; transform-origin: 131px 140px; }
    @keyframes d13aGearL { 0%,100% { transform: rotate(7deg) } 50% { transform: rotate(-7deg) } }
    .d13a-gearR { animation: d13aGearR 6.4s ease-in-out infinite; transform-origin: 165px 140px; }
    @keyframes d13aGearR { 0%,100% { transform: rotate(-7deg) } 50% { transform: rotate(7deg) } }
    .d13a-sbjA { animation: d13aSbj 6.4s ease-in-out infinite; transform-origin: 148px 140px; }
    @keyframes d13aSbj { 0%,100% { transform: translateY(5px) } 50% { transform: translateY(-6px) } }
    .d13a-linkA { stroke-dasharray: 5 5; animation: d13aLink 6.4s ease-in-out infinite; }
    @keyframes d13aLink { 0%,100% { stroke-dashoffset: 10 } 50% { stroke-dashoffset: -10 } }
    .d13a-sacA { animation: d13aSac 6.4s ease-in-out infinite; transform-origin: 168px 240px; }
    @keyframes d13aSac { 0%,100% { transform: translate(-2px,3px) rotate(-3deg) } 50% { transform: translate(2px,-3px) rotate(4deg) } }
    .d13a-coro { animation: d13aCoro 6.4s ease-in-out infinite; transform-origin: 444px 92px; }
    @keyframes d13aCoro { 0%,100% { transform: scale(.94,1.06) } 50% { transform: scale(1.12,.9) } }
    .d13a-tentA { animation: d13aTent 6.4s ease-in-out infinite; transform-origin: 444px 100px; }
    @keyframes d13aTent { 0%,100% { transform: scale(.96,1.35) } 50% { transform: scale(1.12,.3) } }
    .d13a-pairL { animation: d13aPairL 6.4s ease-in-out infinite; transform-origin: 410px 92px; }
    @keyframes d13aPairL { 0%,100% { transform: rotate(-6deg) } 50% { transform: rotate(11deg) } }
    .d13a-pairR { animation: d13aPairR 6.4s ease-in-out infinite; transform-origin: 478px 92px; }
    @keyframes d13aPairR { 0%,100% { transform: rotate(6deg) } 50% { transform: rotate(-11deg) } }
    .d13a-inA { opacity: .62; animation: d13aInPh 6.4s ease-in-out infinite; }
    @keyframes d13aInPh { 0%,100% { opacity: .18 } 50% { opacity: 1 } }
    .d13a-exA { opacity: .62; animation: d13aExPh 6.4s ease-in-out infinite; }
    @keyframes d13aExPh { 0%,100% { opacity: 1 } 50% { opacity: .18 } }
    .d13a-colI { fill: var(--dg-accent); opacity: .07; animation: d13aColI 6.4s ease-in-out infinite; }
    @keyframes d13aColI { 0%,100% { opacity: .03 } 50% { opacity: .15 } }
    .d13a-colE { fill: var(--dg-warm); opacity: .07; animation: d13aColE 6.4s ease-in-out infinite; }
    @keyframes d13aColE { 0%,100% { opacity: .15 } 50% { opacity: .03 } }
    .d13a-swing { animation: d13aSwing 6.4s ease-in-out infinite; }
    @keyframes d13aSwing { 0%,100% { transform: translateX(102px) } 50% { transform: translateX(0) } }
  </style>

  <line x1="318" y1="8" x2="318" y2="312" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="14" y="16" class="d13a-hd">SAGITTAL (FRONT AT THE LEFT)</text>
  <text x="336" y="16" class="d13a-hd">CORONAL (FROM THE FRONT)</text>

  <g class="d13a-skullA">
    <ellipse cx="148" cy="96" rx="100" ry="70" class="d13a-skull"/>
    <polygon points="48,92 34,112 52,118" class="d13a-skull"/>
  </g>

  <path class="d13a-falx d13a-falxA" d="M80,100 C96,38 206,34 230,96 C196,66 122,68 80,100 Z"/>
  <ellipse cx="150" cy="100" rx="66" ry="20" class="d13a-cns d13a-cnsA"/>
  <text x="150" y="103" class="d13a-lbl d13a-inT" text-anchor="middle">CNS</text>
  <text x="96" y="52" class="d13a-lbl d13a-inT" text-anchor="middle">falx</text>

  <polygon class="d13a-bone d13a-gearL" points="151,140 143.1,147 141,157.3 131,154 121,157.3 118.9,147 111,140 118.9,133 121,122.7 131,126 141,122.7 143.1,133"/>
  <polygon class="d13a-bone d13a-gearR" points="182.3,150 172,152.1 165,160 158,152.1 147.7,150 151,140 147.7,130 158,127.9 165,120 172,127.9 182.3,130 179,140"/>
  <text x="86" y="154" class="d13a-lbl" text-anchor="end">sphenoid</text>
  <line x1="88" y1="150" x2="112" y2="143" class="d13a-lead"/>
  <text x="212" y="154" class="d13a-lbl">occiput</text>
  <line x1="210" y1="150" x2="184" y2="143" class="d13a-lead"/>

  <circle cx="148" cy="140" r="4.5" class="d13a-in d13a-sbjA"/>
  <line x1="146" y1="146" x2="112" y2="174" class="d13a-lead"/>
  <text x="108" y="178" class="d13a-lbl d13a-inT" text-anchor="end">SBJ</text>

  <line x1="190" y1="166" x2="190" y2="208" stroke="var(--dg-accent)" stroke-width="2" class="d13a-linkA"/>
  <text x="180" y="198" class="d13a-note" text-anchor="end">core link (dura)</text>

  <g class="d13a-sacA">
    <path d="M162,216 L210,210 L198,272 L186,286 L168,244 Z" class="d13a-skull"/>
    <circle cx="165" cy="238" r="3.2" class="d13a-in"/>
    <text x="174" y="242" class="d13a-note" fill="var(--dg-ink)">S2</text>
  </g>
  <text x="110" y="206" class="d13a-lbl" text-anchor="end">sacral base</text>
  <line x1="114" y1="203" x2="158" y2="213" class="d13a-lead"/>
  <g class="d13a-inA">
    <line x1="186" y1="212" x2="220" y2="190" class="d13a-in" stroke-width="2.4"/>
    <polygon points="226,186 220.6,194.3 216.2,187.5" class="d13a-in"/>
  </g>
  <g class="d13a-exA">
    <line x1="182" y1="216" x2="150" y2="242" class="d13a-ex" stroke-width="2.4"/>
    <polygon points="145,246 154.5,243.4 149.5,237.2" class="d13a-ex"/>
  </g>
  <text x="14" y="306" class="d13a-note">the dura attaches anteriorly at S2, so the sacrum follows</text>

  <ellipse cx="444" cy="92" rx="46" ry="48" class="d13a-skull d13a-coro"/>
  <line x1="444" y1="48" x2="444" y2="88" class="d13a-mem"/>
  <path d="M404,100 L444,84 L484,100" class="d13a-mem d13a-tentA"/>
  <path d="M418,58 C404,76 404,108 418,126" class="d13a-wall d13a-pairL"/>
  <path d="M470,58 C484,76 484,108 470,126" class="d13a-wall d13a-pairR"/>
  <text x="504" y="64" class="d13a-lbl">falx</text>
  <line x1="500" y1="61" x2="450" y2="58" class="d13a-lead"/>
  <text x="504" y="100" class="d13a-lbl">tentorium</text>
  <line x1="500" y1="97" x2="486" y2="99" class="d13a-lead"/>
  <text x="504" y="132" class="d13a-lbl">paired bones</text>
  <line x1="500" y1="129" x2="474" y2="124" class="d13a-lead"/>

  <line x1="392" y1="154" x2="496" y2="154" class="d13a-dim"/>
  <polygon points="392,154 400,150 400,158" class="d13a-dim"/>
  <polygon points="496,154 488,150 488,158" class="d13a-dim"/>
  <text x="444" y="168" class="d13a-note" text-anchor="middle">transverse</text>
  <line x1="376" y1="46" x2="376" y2="138" class="d13a-dim"/>
  <polygon points="376,46 372,54 380,54" class="d13a-dim"/>
  <polygon points="376,138 372,130 380,130" class="d13a-dim"/>
  <text x="370" y="96" class="d13a-note" text-anchor="end">vertical</text>

  <rect x="452" y="180" width="100" height="130" class="d13a-colI" rx="4"/>
  <rect x="556" y="180" width="96" height="130" class="d13a-colE" rx="4"/>
  <line x1="502" y1="176" x2="604" y2="176" stroke="var(--dg-line)" stroke-width="1"/>
  <polygon points="496,170 508,170 502,178" fill="var(--dg-ink)" class="d13a-swing"/>
  <text x="458" y="192" class="d13a-colh d13a-inT">INHALATION</text>
  <text x="458" y="203" class="d13a-note">(flexion)</text>
  <text x="562" y="192" class="d13a-colh d13a-exT">EXHALATION</text>
  <text x="562" y="203" class="d13a-note">(extension)</text>
  <line x1="336" y1="210" x2="652" y2="210" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="336" y="222" class="d13a-cell">midline bones</text>
  <text x="458" y="222" class="d13a-cell">flex</text>
  <text x="562" y="222" class="d13a-cell">extend</text>
  <text x="336" y="234" class="d13a-cell">paired bones</text>
  <text x="458" y="234" class="d13a-cell">external rotation</text>
  <text x="562" y="234" class="d13a-cell">internal rotation</text>
  <text x="336" y="246" class="d13a-cell">transverse diameter</text>
  <text x="458" y="246" class="d13a-cell">widens</text>
  <text x="562" y="246" class="d13a-cell">narrows</text>
  <text x="336" y="258" class="d13a-cell">A-P + vertical</text>
  <text x="458" y="258" class="d13a-cell">narrow</text>
  <text x="562" y="258" class="d13a-cell">increase</text>
  <text x="336" y="270" class="d13a-cell">SBJ</text>
  <text x="458" y="270" class="d13a-cell">superior &#8593;</text>
  <text x="562" y="270" class="d13a-cell">inferior &#8595;</text>
  <text x="336" y="282" class="d13a-cell">sacral base</text>
  <text x="458" y="282" class="d13a-cell">postero-superior</text>
  <text x="562" y="282" class="d13a-cell">antero-inferior</text>
  <text x="336" y="294" class="d13a-cell">CNS</text>
  <text x="458" y="294" class="d13a-cell">coils, widens</text>
  <text x="562" y="294" class="d13a-cell">uncoils, narrows</text>
  <text x="336" y="306" class="d13a-cell">falx / tentorium</text>
  <text x="458" y="306" class="d13a-cell">sickles / flattens</text>
  <text x="562" y="306" class="d13a-cell">lengthens / tents</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Venous drainage through the dural folds, and the suture that supports it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv13-venous-sinus-drainage"] = {
  title: "Venous drainage out of the skull",
  caption:
    "Sinus means space: the dural folds come together and create the spaces through which venous blood drains. " +
    "This lecture's stated route runs with the falx cerebri down toward the confluence of sinuses, involves the " +
    "tentorium cerebelli and straight sinus, then the sigmoid sinus, exits at the jugular foramen and becomes the " +
    "jugular vein returning to the heart; the transverse segment linking confluence to sigmoid is drawn because the " +
    "route passes through it, but the summary does not name it. Veins and sinuses cannot pump blood, so drainage " +
    "depends on mobile, patent surroundings - and the site of greatest sutural motion, the serrate sagittal suture, " +
    "lies directly over the sagittal sinus (Slide 15). In the second half of each loop the suture is held still: " +
    "the flow crawls and congestion builds.",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="A lateral view of the skull traces venous drainage: blood flows backwards along the superior sagittal sinus in the falx cerebri to the confluence of sinuses, is joined there by the straight sinus running along the tentorium, then passes through the transverse and sigmoid sinuses, exits the jugular foramen and descends as the internal jugular vein toward the heart. An inset shows the serrate sagittal suture rocking directly over the sinus; while it is held still the flow slows and blood pools.">
  <style>
    .d13b-hd   { font-size: 9.5px; font-weight: 700; letter-spacing: .07em; fill: var(--dg-muted); }
    .d13b-key  { font-size: 10px; font-weight: 700; letter-spacing: .06em; fill: var(--dg-accent); }
    .d13b-lbl  { font-size: 9.5px; }
    .d13b-note { font-size: 9px; fill: var(--dg-muted); }
    .d13b-item { font-size: 10.5px; }
    .d13b-num  { font-size: 9px; font-weight: 700; fill: var(--dg-accent); }
    .d13b-skull{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .d13b-falx { fill: var(--dg-accent); fill-opacity: .10; stroke: var(--dg-accent); stroke-width: 1.2; }
    .d13b-lumen{ fill: none; stroke: var(--dg-line); stroke-width: 9; stroke-linecap: round; stroke-linejoin: round; }
    .d13b-flow { fill: none; stroke: var(--dg-cool); stroke-width: 6; stroke-dasharray: 11 25;
                 animation: d13bFlow 9s linear infinite; }
    .d13b-tent { fill: none; stroke: var(--dg-muted); stroke-width: 1.4; stroke-dasharray: 4 3; }
    .d13b-node { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .d13b-head { fill: var(--dg-cool); }
    .d13b-plate{ fill: none; stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; }
    .d13b-sut  { fill: none; stroke: var(--dg-ink); stroke-width: 1.6; }
    .d13b-sss  { fill: var(--dg-cool); fill-opacity: .5; stroke: var(--dg-cool); stroke-width: 1; }
    .d13b-mem  { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; }
    .d13b-pool { fill: none; stroke: var(--dg-warm); stroke-width: 17; stroke-linecap: round;
                 opacity: .08; animation: d13bPool 9s ease-in-out infinite; }

    @keyframes d13bFlow { 0% { stroke-dashoffset: 0 } 52% { stroke-dashoffset: -216 } 100% { stroke-dashoffset: -252 } }
    @keyframes d13bPool { 0%,50% { opacity: 0 } 64%,94% { opacity: .5 } 100% { opacity: 0 } }
    .d13b-rockL { animation: d13bRockL 9s ease-in-out infinite; transform-origin: 78px 54px; }
    @keyframes d13bRockL {
      0% { transform: rotate(0deg) }   7% { transform: rotate(-4deg) } 14% { transform: rotate(4deg) }
      21% { transform: rotate(-4deg) } 28% { transform: rotate(4deg) } 35% { transform: rotate(-4deg) }
      42% { transform: rotate(4deg) }  50%,100% { transform: rotate(0deg) }
    }
    .d13b-rockR { animation: d13bRockR 9s ease-in-out infinite; transform-origin: 78px 54px; }
    @keyframes d13bRockR {
      0% { transform: rotate(0deg) }   7% { transform: rotate(4deg) }  14% { transform: rotate(-4deg) }
      21% { transform: rotate(4deg) }  28% { transform: rotate(-4deg) } 35% { transform: rotate(4deg) }
      42% { transform: rotate(-4deg) } 50%,100% { transform: rotate(0deg) }
    }
    .d13b-stA { opacity: .85; animation: d13bStA 9s ease-in-out infinite; }
    @keyframes d13bStA { 0%,46% { opacity: 1 } 56%,100% { opacity: .22 } }
    .d13b-stB { opacity: .85; animation: d13bStB 9s ease-in-out infinite; }
    @keyframes d13bStB { 0%,46% { opacity: .22 } 56%,100% { opacity: 1 } }
  </style>

  <text x="14" y="16" class="d13b-hd">THE MOST MOBILE SUTURE</text>
  <text x="172" y="16" class="d13b-hd">LATERAL VIEW (FRONT AT THE LEFT)</text>

  <path d="M28,106 A50,50 0 0 1 128,106 Z" class="d13b-skull"/>
  <path d="M30,102 C32,76 50,58 74,52" class="d13b-plate d13b-rockL"/>
  <path d="M126,102 C124,76 106,58 82,52" class="d13b-plate d13b-rockR"/>
  <path d="M78,44 l5,5 l-10,5 l10,5 l-10,5 l5,5" class="d13b-sut"/>
  <polygon points="68,84 88,84 78,70" class="d13b-sss"/>
  <line x1="78" y1="84" x2="78" y2="104" class="d13b-mem"/>
  <text x="14" y="124" class="d13b-lbl">serrate sagittal suture</text>
  <text x="14" y="136" class="d13b-note">sits directly over the</text>
  <text x="14" y="147" class="d13b-note">superior sagittal sinus</text>

  <g class="d13b-stA">
    <rect x="14" y="162" width="3" height="26" fill="var(--dg-accent)"/>
    <text x="24" y="172" class="d13b-lbl" fill="var(--dg-accent)">suture rocking:</text>
    <text x="24" y="184" class="d13b-note">venous return supported</text>
  </g>
  <g class="d13b-stB">
    <rect x="14" y="202" width="3" height="26" fill="var(--dg-warm)"/>
    <text x="24" y="212" class="d13b-lbl" fill="var(--dg-warm)">suture held still:</text>
    <text x="24" y="224" class="d13b-note">flow slows, blood pools</text>
  </g>

  <ellipse cx="290" cy="118" rx="118" ry="88" class="d13b-skull"/>
  <polygon points="172,120 156,132 174,140" class="d13b-skull"/>
  <path d="M206,96 C216,40 358,42 378,146 C320,110 250,102 206,96 Z" class="d13b-falx"/>
  <text x="244" y="92" class="d13b-lbl" fill="var(--dg-accent)">falx cerebri</text>
  <path d="M376,150 C340,164 312,172 286,176" class="d13b-tent"/>
  <text x="218" y="188" class="d13b-note">tentorium cerebelli</text>
  <line x1="308" y1="188" x2="292" y2="180" stroke="var(--dg-line)" stroke-width="1"/>

  <path d="M206,96 C216,40 358,42 378,146" class="d13b-pool"/>
  <path d="M286,116 C318,124 350,134 374,144" class="d13b-lumen"/>
  <path d="M286,116 C318,124 350,134 374,144" class="d13b-flow"/>
  <path d="M206,96 C216,40 358,42 378,146 C368,158 338,156 318,168 C304,178 322,184 330,196 C340,220 336,254 340,286" class="d13b-lumen"/>
  <path d="M206,96 C216,40 358,42 378,146 C368,158 338,156 318,168 C304,178 322,184 330,196 C340,220 336,254 340,286" class="d13b-flow"/>
  <polygon points="296,44 308,49 296,54" class="d13b-head"/>
  <polygon points="342,164 356,157 353,168" class="d13b-head"/>
  <polygon points="334,262 340,278 346,262" class="d13b-head"/>
  <text x="352" y="284" class="d13b-lbl">to the heart</text>

  <circle cx="252" cy="56" r="7.5" class="d13b-node"/>
  <text x="252" y="59.5" class="d13b-num" text-anchor="middle">1</text>
  <circle cx="378" cy="146" r="7.5" class="d13b-node"/>
  <text x="378" y="149.5" class="d13b-num" text-anchor="middle">2</text>
  <circle cx="302" cy="122" r="7.5" class="d13b-node"/>
  <text x="302" y="125.5" class="d13b-num" text-anchor="middle">3</text>
  <circle cx="348" cy="158" r="7.5" class="d13b-node"/>
  <text x="348" y="161.5" class="d13b-num" text-anchor="middle">4</text>
  <circle cx="310" cy="174" r="7.5" class="d13b-node"/>
  <text x="310" y="177.5" class="d13b-num" text-anchor="middle">5</text>
  <circle cx="336" cy="200" r="7.5" class="d13b-node"/>
  <text x="336" y="203.5" class="d13b-num" text-anchor="middle">6</text>
  <circle cx="342" cy="250" r="7.5" class="d13b-node"/>
  <text x="342" y="253.5" class="d13b-num" text-anchor="middle">7</text>

  <text x="420" y="40" class="d13b-key">ROUTE OUT OF THE SKULL</text>
  <circle cx="430" cy="58" r="7.5" class="d13b-node"/>
  <text x="430" y="61.5" class="d13b-num" text-anchor="middle">1</text>
  <text x="446" y="62" class="d13b-item">superior sagittal sinus (falx)</text>
  <circle cx="430" cy="75" r="7.5" class="d13b-node"/>
  <text x="430" y="78.5" class="d13b-num" text-anchor="middle">2</text>
  <text x="446" y="79" class="d13b-item">confluence of sinuses</text>
  <circle cx="430" cy="92" r="7.5" class="d13b-node"/>
  <text x="430" y="95.5" class="d13b-num" text-anchor="middle">3</text>
  <text x="446" y="96" class="d13b-item">straight sinus (tentorium) joins</text>
  <circle cx="430" cy="109" r="7.5" class="d13b-node"/>
  <text x="430" y="112.5" class="d13b-num" text-anchor="middle">4</text>
  <text x="446" y="113" class="d13b-item">transverse sinus</text>
  <circle cx="430" cy="126" r="7.5" class="d13b-node"/>
  <text x="430" y="129.5" class="d13b-num" text-anchor="middle">5</text>
  <text x="446" y="130" class="d13b-item">sigmoid sinus</text>
  <circle cx="430" cy="143" r="7.5" class="d13b-node"/>
  <text x="430" y="146.5" class="d13b-num" text-anchor="middle">6</text>
  <text x="446" y="147" class="d13b-item">jugular foramen (exit)</text>
  <circle cx="430" cy="160" r="7.5" class="d13b-node"/>
  <text x="430" y="163.5" class="d13b-num" text-anchor="middle">7</text>
  <text x="446" y="164" class="d13b-item">internal jugular vein &#8594; heart</text>

  <text x="420" y="196" class="d13b-key">SINUS MEANS SPACE</text>
  <text x="420" y="212" class="d13b-note">The dural folds come together and create</text>
  <text x="420" y="223" class="d13b-note">the spaces venous blood drains through.</text>
  <text x="420" y="242" class="d13b-note">Veins and sinuses cannot pump blood, so</text>
  <text x="420" y="253" class="d13b-note">drainage depends on mobile surroundings.</text>
  <text x="420" y="272" class="d13b-note" fill="var(--dg-accent)">The site of greatest sutural motion lies</text>
  <text x="420" y="283" class="d13b-note" fill="var(--dg-accent)">directly over the sagittal sinus.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// OA decompression: the standard technique in order, and the atlas-directed
// alternative for the pediatric population (Slides 30-32).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv13-oa-decompression"] = {
  title: "OA decompression, step by step",
  caption:
    "Every element of this technique is a direction. Start with the middle finger on the inion and slide down to the " +
    "C1 posterior tubercle - if you are at the spinous process of C2 you have gone too far. The patient tucks the chin " +
    "to the chest, flexing the head and not the neck, so the motion is a nod at C0-C1 only. The physician curls the " +
    "finger toward the glabella, stabilizing the atlas, while the other hand applies slight pressure to hold the head " +
    "in flexion. The hold is sustained: muscle and soft tissues relax first, and only then is there a sense of the " +
    "occipital condyles becoming decompressed from the receiving condyles of the C1 superior facets - then reassess. " +
    "This standard technique is not to be used on infants and small children (consider from roughly age 8 to 10 " +
    "onward); the atlas-directed alternative on the right applies caudad pressure to the posterior arches to separate " +
    "the facets from the condylar parts and carry the condyles posteriorly.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Left, a sagittal section at the occipitoatlantal joint: the physician's middle finger slides from the inion down to the C1 posterior tubercle, with the C2 spinous process marked as too far; the patient tucks the chin so the head nods at C0 to C1 without the neck flexing; the finger curls toward the glabella to stabilize the atlas; and after a sustained hold the occipital condyles lift and translate posteriorly out of the C1 superior facets. Centre, the four steps in order. Right, the atlas-directed alternative in which the pads of both middle fingers apply caudad pressure to the posterior arches of the atlas, separating the facets from the condylar parts.">
  <style>
    .d13c-hd   { font-size: 10px; font-weight: 700; letter-spacing: .06em; fill: var(--dg-accent); }
    .d13c-sub  { font-size: 9px; fill: var(--dg-muted); }
    .d13c-lbl  { font-size: 9px; }
    .d13c-note { font-size: 9px; fill: var(--dg-muted); }
    .d13c-ped  { font-size: 8.8px; fill: var(--dg-muted); }
    .d13c-ttl  { font-size: 10px; font-weight: 700; }
    .d13c-num  { font-size: 9px; font-weight: 700; fill: var(--dg-accent); }
    .d13c-skull{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .d13c-bone { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.4; }
    .d13c-arch { fill: none; stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    .d13c-lead { fill: none; stroke: var(--dg-line); stroke-width: 1; }
    .d13c-warm { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .d13c-acc  { fill: var(--dg-accent); stroke: var(--dg-accent); }
    .d13c-node { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .d13c-guide{ fill: none; stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 3; }

    .d13c-fing { animation: d13cFing 12s ease-in-out infinite; }
    @keyframes d13cFing { 0%,4% { transform: translateY(-52px) } 18%,94% { transform: translateY(0px) } 100% { transform: translateY(-52px) } }
    .d13c-headA { animation: d13cHead 12s ease-in-out infinite; transform-origin: 168px 158px; }
    @keyframes d13cHead {
      0%,22%  { transform: translate(0px,0px) rotate(0deg) }
      36%,58% { transform: translate(0px,0px) rotate(-5deg) }
      78%,92% { transform: translate(4px,-4px) rotate(-5deg) }
      100%    { transform: translate(0px,0px) rotate(0deg) }
    }
    .d13c-gap { fill: var(--dg-accent); opacity: .8; animation: d13cGap 12s ease-in-out infinite; transform-origin: 169px 170px; }
    @keyframes d13cGap {
      0%,58%  { opacity: 0; transform: scaleY(.08) }
      78%,92% { opacity: .85; transform: scaleY(1) }
      100%    { opacity: 0; transform: scaleY(.08) }
    }
    .d13c-hold { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; opacity: 0;
                 animation: d13cHold 12s ease-in-out infinite; transform-origin: 216px 186px; }
    @keyframes d13cHold {
      0%,56%  { opacity: 0; transform: scale(.6) }
      64%     { opacity: .8; transform: scale(1) }
      78%,100%{ opacity: 0; transform: scale(1.8) }
    }
    .d13c-curl { opacity: .45; animation: d13cCurl 12s ease-in-out infinite; }
    @keyframes d13cCurl { 0%,38% { opacity: .25 } 44%,92% { opacity: 1 } 100% { opacity: .25 } }
    .d13c-s1 { opacity: 1; animation: d13cS1 12s ease-in-out infinite; }
    @keyframes d13cS1 { 0% { opacity: .42 } 4%,20% { opacity: 1 } 26%,100% { opacity: .42 } }
    .d13c-s2 { opacity: 1; animation: d13cS2 12s ease-in-out infinite; }
    @keyframes d13cS2 { 0%,22% { opacity: .42 } 26%,38% { opacity: 1 } 44%,100% { opacity: .42 } }
    .d13c-s3 { opacity: 1; animation: d13cS3 12s ease-in-out infinite; }
    @keyframes d13cS3 { 0%,40% { opacity: .42 } 44%,56% { opacity: 1 } 62%,100% { opacity: .42 } }
    .d13c-s4 { opacity: 1; animation: d13cS4 12s ease-in-out infinite; }
    @keyframes d13cS4 { 0%,58% { opacity: .42 } 62%,92% { opacity: 1 } 97%,100% { opacity: .42 } }
    .d13c-pedA { animation: d13cPed 12s ease-in-out infinite; }
    @keyframes d13cPed { 0%,58% { transform: translateY(0px) } 78%,92% { transform: translateY(3px) } 100% { transform: translateY(0px) } }
    .d13c-arr { opacity: .8; animation: d13cArr 12s ease-in-out infinite; }
    @keyframes d13cArr { 0%,50% { opacity: .4 } 70%,92% { opacity: 1 } 100% { opacity: .4 } }
  </style>

  <line x1="300" y1="8" x2="300" y2="312" stroke="var(--dg-line)" stroke-width="1"/>
  <line x1="490" y1="8" x2="490" y2="312" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="12" y="16" class="d13c-hd">STANDARD TECHNIQUE</text>
  <text x="12" y="28" class="d13c-sub">sagittal section, front at the left</text>

  <g class="d13c-headA">
    <ellipse cx="142" cy="98" rx="92" ry="64" class="d13c-skull"/>
    <polygon points="50,94 38,112 52,118" class="d13c-skull"/>
    <circle cx="60" cy="78" r="3" class="d13c-acc"/>
    <circle cx="214" cy="132" r="3" fill="var(--dg-ink)"/>
    <ellipse cx="168" cy="160" rx="12" ry="6.5" class="d13c-bone"/>
  </g>
  <text x="10" y="72" class="d13c-lbl">glabella</text>
  <line x1="48" y1="76" x2="58" y2="79" class="d13c-lead"/>
  <text x="230" y="128" class="d13c-lbl">inion</text>
  <line x1="228" y1="130" x2="217" y2="132" class="d13c-lead"/>

  <rect x="152" y="163" width="34" height="7" rx="2" class="d13c-gap"/>
  <text x="10" y="178" class="d13c-lbl" fill="var(--dg-accent)">condyles lift +</text>
  <text x="10" y="189" class="d13c-lbl" fill="var(--dg-accent)">carry posteriorly</text>
  <line x1="80" y1="181" x2="146" y2="170" class="d13c-lead"/>

  <rect x="150" y="170" width="38" height="22" rx="4" class="d13c-bone"/>
  <path d="M188,176 C198,176 204,180 206,184" class="d13c-arch"/>
  <circle cx="210" cy="186" r="6" class="d13c-bone"/>
  <rect x="116" y="174" width="16" height="16" rx="4" class="d13c-bone"/>
  <line x1="132" y1="182" x2="150" y2="182" stroke="var(--dg-ink)" stroke-width="2"/>
  <text x="140" y="206" class="d13c-lbl" text-anchor="end">C1 posterior tubercle</text>
  <line x1="144" y1="203" x2="204" y2="192" class="d13c-lead"/>

  <rect x="118" y="214" width="56" height="28" rx="5" class="d13c-bone"/>
  <path d="M140,214 L140,196 L152,196 L152,214" class="d13c-bone"/>
  <path d="M174,224 L200,230 L208,226 L208,236 L200,232 L174,234 Z" class="d13c-bone"/>
  <line x1="206" y1="226" x2="218" y2="238" class="d13c-warm" stroke-width="2"/>
  <line x1="218" y1="226" x2="206" y2="238" class="d13c-warm" stroke-width="2"/>
  <text x="226" y="230" class="d13c-note">C2 spinous</text>
  <text x="226" y="244" class="d13c-lbl" fill="var(--dg-warm)">too far</text>

  <path d="M214,138 L214,172" class="d13c-guide"/>
  <polygon points="209,172 214,181 219,172" fill="var(--dg-muted)"/>
  <g class="d13c-curl">
    <line x1="210" y1="180" x2="72" y2="88" stroke="var(--dg-accent)" stroke-width="1.2" stroke-dasharray="5 4"/>
    <polygon points="64,82 74.8,83.8 69.8,91.2" class="d13c-acc"/>
    <text x="110" y="96" class="d13c-lbl" fill="var(--dg-accent)">toward glabella</text>
  </g>

  <g class="d13c-fing">
    <line x1="256" y1="216" x2="216" y2="186" stroke="var(--dg-ink)" stroke-width="15" stroke-linecap="round" opacity=".8"/>
    <circle cx="216" cy="186" r="5.5" class="d13c-acc"/>
  </g>
  <circle cx="216" cy="186" r="10" class="d13c-hold"/>

  <text x="10" y="272" class="d13c-note">the head nods at C0-C1; the neck does not flex</text>
  <text x="10" y="286" class="d13c-note">hold until the soft tissues relax, then the condyles separate</text>

  <text x="306" y="16" class="d13c-hd">IN ORDER</text>

  <g class="d13c-s1">
    <circle cx="318" cy="56" r="9" class="d13c-node"/>
    <text x="318" y="59.5" class="d13c-num" text-anchor="middle">1</text>
    <text x="334" y="60" class="d13c-ttl">Land on the C1 tubercle</text>
    <text x="334" y="73" class="d13c-note">middle finger on the inion, then</text>
    <text x="334" y="84" class="d13c-note">slide down to the posterior</text>
    <text x="334" y="95" class="d13c-note" fill="var(--dg-warm)">tubercle; C2 spinous = too far</text>
  </g>
  <g class="d13c-s2">
    <circle cx="318" cy="122" r="9" class="d13c-node"/>
    <text x="318" y="125.5" class="d13c-num" text-anchor="middle">2</text>
    <text x="334" y="126" class="d13c-ttl">Chin tuck</text>
    <text x="334" y="139" class="d13c-note">the patient flexes the head, not</text>
    <text x="334" y="150" class="d13c-note">the neck: a nod at C0-C1 only</text>
  </g>
  <g class="d13c-s3">
    <circle cx="318" cy="188" r="9" class="d13c-node"/>
    <text x="318" y="191.5" class="d13c-num" text-anchor="middle">3</text>
    <text x="334" y="192" class="d13c-ttl">Curl toward the glabella</text>
    <text x="334" y="205" class="d13c-note">the finger curls anteriorly and</text>
    <text x="334" y="216" class="d13c-note">stabilizes the atlas; the other</text>
    <text x="334" y="227" class="d13c-note">hand holds the head in flexion</text>
  </g>
  <g class="d13c-s4">
    <circle cx="318" cy="254" r="9" class="d13c-node"/>
    <text x="318" y="257.5" class="d13c-num" text-anchor="middle">4</text>
    <text x="334" y="258" class="d13c-ttl">Hold, then decompress</text>
    <text x="334" y="271" class="d13c-note">soft tissues relax first, then</text>
    <text x="334" y="282" class="d13c-note">the condyles decompress from</text>
    <text x="334" y="293" class="d13c-note">the C1 superior facets. Reassess.</text>
  </g>

  <text x="496" y="16" class="d13c-hd">ALTERNATIVE</text>
  <text x="496" y="28" class="d13c-sub">atlas-directed: the option</text>
  <text x="496" y="39" class="d13c-sub">for the pediatric population</text>

  <path d="M512,104 A62,44 0 0 1 636,104 Z" class="d13c-skull"/>
  <text x="574" y="86" class="d13c-note" text-anchor="middle">occiput</text>
  <ellipse cx="552" cy="108" rx="11" ry="6" class="d13c-bone"/>
  <ellipse cx="596" cy="108" rx="11" ry="6" class="d13c-bone"/>
  <rect x="542" y="113" width="20" height="7" rx="2" class="d13c-gap"/>
  <rect x="586" y="113" width="20" height="7" rx="2" class="d13c-gap"/>
  <g class="d13c-pedA">
    <path d="M516,140 C536,126 612,126 632,140" class="d13c-arch"/>
    <rect x="542" y="120" width="20" height="10" rx="3" class="d13c-bone"/>
    <rect x="586" y="120" width="20" height="10" rx="3" class="d13c-bone"/>
    <circle cx="574" cy="129" r="5" class="d13c-bone"/>
    <circle cx="534" cy="133" r="7" fill="var(--dg-ink)" opacity=".8"/>
    <circle cx="614" cy="133" r="7" fill="var(--dg-ink)" opacity=".8"/>
    <g class="d13c-arr">
      <line x1="534" y1="144" x2="534" y2="158" class="d13c-acc" stroke-width="2.4"/>
      <polygon points="534,166 529,156 539,156" class="d13c-acc"/>
      <line x1="614" y1="144" x2="614" y2="158" class="d13c-acc" stroke-width="2.4"/>
      <polygon points="614,166 609,156 619,156" class="d13c-acc"/>
    </g>
  </g>
  <text x="574" y="176" class="d13c-lbl" fill="var(--dg-accent)" text-anchor="middle">caudad pressure</text>

  <text x="496" y="196" class="d13c-ped">Pads of both middle fingers slide</text>
  <text x="496" y="207" class="d13c-ped">down to the posterior arches of</text>
  <text x="496" y="218" class="d13c-ped">the atlas.</text>
  <text x="496" y="236" class="d13c-ped">Caudad pressure separates the</text>
  <text x="496" y="247" class="d13c-ped">facets from the condylar parts;</text>
  <text x="496" y="258" class="d13c-ped">the condyles carry posteriorly.</text>
  <text x="496" y="276" class="d13c-ped" fill="var(--dg-warm)">The standard technique is NOT for</text>
  <text x="496" y="287" class="d13c-ped" fill="var(--dg-warm)">infants or small children (consider</text>
  <text x="496" y="298" class="d13c-ped" fill="var(--dg-warm)">from about age 8 to 10 onward).</text>
</svg>`,
};

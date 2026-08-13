window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv19 - Histology of the blood vessels and lymphatics.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv19-elastic-recoil-windkessel"] = {
  title: "Elastic recoil between beats",
  caption:
    "The lecture's claim about large elastic arteries is a <em>timing</em> claim: during systole pressure distends the elastic wall, " +
    "and during diastole <strong>elastic recoil maintains arterial pressure and flow</strong> (Slide 12). " +
    "Top row - the valve opens, and part of the stroke volume is held by the distending, elastin-loaded media " +
    "(<strong>50-70 elastin sheets in the aorta</strong>, Slide 11); when the valve shuts the wall recoils and delivers that stored blood, " +
    "so the downstream beads never stop moving. Bottom row - the same two beats through a rigid tube that can store nothing, " +
    "so downstream flow exists only while the valve is open. The paired traces are the consequence: a smooth systolic-to-diastolic taper " +
    "versus the <strong>dramatic beat-by-beat plunge</strong> the lecture describes. The sweeping line marks the same instant on both traces. " +
    "The traces are deliberately unlabelled in mmHg - this lecture gives no pressure values for the aorta, so none are invented here. " +
    "(The AnKing tie-in calls this Windkessel-like pressure maintenance; the lecture itself says only “elastic recoil”.)",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Two rows compare the same two heartbeats. In the top row an elastic artery, the aorta with fifty to seventy elastin sheets, distends during systole so part of the stroke volume is stored in the wall; when the valve shuts the wall recoils and pushes that blood downstream, so downstream flow continues without stopping, and its pressure trace tapers smoothly from systolic to diastolic without reaching zero. In the bottom row a rigid tube cannot distend, so blood only moves downstream while the valve is open and stops the moment it shuts, and its pressure trace plunges from the systolic peak toward zero between beats. A vertical sweeping line marks the same moment on both traces.">
  <style>
    .dg19a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg19a-hdr   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .05em; }
    .dg19a-lbl   { font-size: 9.5px; }
    .dg19a-sub   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg19a-wallE { fill: none; stroke: var(--dg-accent); stroke-width: 7; stroke-linecap: round; }
    .dg19a-wallR { fill: none; stroke: var(--dg-muted); stroke-width: 7; stroke-linecap: round; }
    .dg19a-rest  { fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg19a-leaf  { fill: none; stroke: var(--dg-ink); stroke-width: 2.8; stroke-linecap: round; }
    .dg19a-blood { fill: var(--dg-cool); }
    .dg19a-ds    { fill: none; stroke: var(--dg-cool); stroke-width: 4.5; stroke-linecap: round; stroke-dasharray: 6 14; }
    .dg19a-trE   { fill: none; stroke: var(--dg-accent); stroke-width: 2.2; stroke-linejoin: round; }
    .dg19a-trR   { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; stroke-linejoin: round; }
    .dg19a-zero  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg19a-div   { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 3 5; }
    .dg19a-sweep { stroke: var(--dg-ink); stroke-width: 1.2; opacity: .38; animation: dg19aSweep 8s linear infinite; }
    .dg19a-wt { animation: dg19aWallT 4s ease-in-out infinite; }
    .dg19a-wb { animation: dg19aWallB 4s ease-in-out infinite; }
    .dg19a-vu { animation: dg19aValveU 4s ease-in-out infinite; }
    .dg19a-vd { animation: dg19aValveD 4s ease-in-out infinite; }
    .dg19a-bolE { animation: dg19aBolusE 4s ease-in-out infinite; }
    .dg19a-bolR { animation: dg19aBolusR 4s ease-in-out infinite; }
    .dg19a-dsE { animation: dg19aRun 1.7s linear infinite; }
    .dg19a-dsR { animation: dg19aStop 4s linear infinite; }
    @keyframes dg19aWallT { 0% { transform: translateY(0) } 30% { transform: translateY(-10px) } 88%,100% { transform: translateY(0) } }
    @keyframes dg19aWallB { 0% { transform: translateY(0) } 30% { transform: translateY(10px) } 88%,100% { transform: translateY(0) } }
    @keyframes dg19aValveU { 0%,2% { transform: translateY(0) } 7%,28% { transform: translateY(-7px) } 33%,100% { transform: translateY(0) } }
    @keyframes dg19aValveD { 0%,2% { transform: translateY(0) } 7%,28% { transform: translateY(7px) } 33%,100% { transform: translateY(0) } }
    @keyframes dg19aBolusE {
      0%   { transform: translateX(-92px); opacity: 0 }
      9%   { opacity: 1 }
      30%  { transform: translateX(0); opacity: 1 }
      36%  { transform: translateX(0); opacity: 1 }
      86%  { transform: translateX(114px); opacity: 1 }
      95%  { transform: translateX(136px); opacity: 0 }
      100% { transform: translateX(-92px); opacity: 0 }
    }
    @keyframes dg19aBolusR {
      0%   { transform: translateX(-92px); opacity: 0 }
      7%   { opacity: 1 }
      27%  { transform: translateX(114px); opacity: 1 }
      33%  { transform: translateX(136px); opacity: 0 }
      100% { transform: translateX(136px); opacity: 0 }
    }
    @keyframes dg19aRun { to { stroke-dashoffset: -20 } }
    @keyframes dg19aStop {
      0%   { stroke-dashoffset: 0; opacity: .12 }
      6%   { opacity: 1 }
      28%  { stroke-dashoffset: -60; opacity: 1 }
      34%  { stroke-dashoffset: -60; opacity: .12 }
      100% { stroke-dashoffset: -60; opacity: .12 }
    }
    @keyframes dg19aSweep { from { transform: translateX(0) } to { transform: translateX(288px) } }
  </style>

  <rect x="12" y="28" width="636" height="132" rx="12" class="dg19a-panel"/>
  <text x="24" y="46" class="dg19a-hdr">ELASTIC ARTERY (aorta) &#8226; 50-70 elastin sheets</text>
  <text x="56" y="76" class="dg19a-sub">systole: the wall distends and stores blood</text>

  <path class="dg19a-rest" d="M56,96 C110,91 196,91 250,96"/>
  <path class="dg19a-rest" d="M56,132 C110,137 196,137 250,132"/>
  <path class="dg19a-wallE dg19a-wt" d="M56,96 C110,91 196,91 250,96"/>
  <path class="dg19a-wallE dg19a-wb" d="M56,132 C110,137 196,137 250,132"/>
  <text x="254" y="88" class="dg19a-sub">resting</text>
  <path class="dg19a-rest" d="M250,96 L262,92"/>

  <path class="dg19a-leaf dg19a-vu" d="M52,97 L64,111"/>
  <path class="dg19a-leaf dg19a-vd" d="M52,131 L64,117"/>
  <text x="47" y="118" class="dg19a-sub" text-anchor="end">valve</text>

  <g class="dg19a-bolE">
    <circle cx="150" cy="114" r="5" class="dg19a-blood"/>
    <circle cx="170" cy="105" r="4.2" class="dg19a-blood"/>
    <circle cx="170" cy="123" r="4.2" class="dg19a-blood"/>
    <circle cx="190" cy="114" r="5" class="dg19a-blood"/>
  </g>

  <line x1="252" y1="114" x2="320" y2="114" class="dg19a-ds dg19a-dsE"/>
  <polygon points="320,107 336,114 320,121" fill="var(--dg-cool)"/>
  <text x="254" y="102" class="dg19a-sub">flow continues</text>
  <text x="56" y="156" class="dg19a-sub">diastole: recoil pushes stored blood on, valve shut</text>

  <line x1="340" y1="36" x2="340" y2="152" class="dg19a-div"/>
  <text x="348" y="56" class="dg19a-sub">pressure over time</text>
  <text x="452" y="56" class="dg19a-sub">smooth systolic-to-diastolic taper</text>
  <line x1="348" y1="150" x2="636" y2="150" class="dg19a-zero"/>
  <text x="632" y="146" class="dg19a-sub" text-anchor="end">0</text>
  <path class="dg19a-trE" d="M348,118 C355,72 364,62 374,64 C388,66 394,86 408,100 C428,120 460,116 492,118 C499,72 508,62 518,64 C532,66 538,86 552,100 C572,120 604,116 636,118"/>
  <line x1="348" y1="60" x2="348" y2="150" class="dg19a-sweep"/>

  <rect x="12" y="172" width="636" height="132" rx="12" class="dg19a-panel"/>
  <text x="24" y="190" class="dg19a-hdr" fill="var(--dg-warm)">RIGID TUBE (no elastin) &#8226; same beats, nothing stored</text>
  <text x="56" y="222" class="dg19a-sub">the wall cannot distend, so nothing is stored</text>

  <path class="dg19a-wallR" d="M56,240 C110,240 196,240 250,240"/>
  <path class="dg19a-wallR" d="M56,276 C110,276 196,276 250,276"/>

  <path class="dg19a-leaf dg19a-vu" d="M52,241 L64,255"/>
  <path class="dg19a-leaf dg19a-vd" d="M52,275 L64,261"/>
  <text x="47" y="262" class="dg19a-sub" text-anchor="end">valve</text>

  <g class="dg19a-bolR">
    <circle cx="150" cy="258" r="5" class="dg19a-blood"/>
    <circle cx="170" cy="249" r="4.2" class="dg19a-blood"/>
    <circle cx="170" cy="267" r="4.2" class="dg19a-blood"/>
    <circle cx="190" cy="258" r="5" class="dg19a-blood"/>
  </g>

  <line x1="252" y1="258" x2="320" y2="258" class="dg19a-ds dg19a-dsR"/>
  <polygon points="320,251 336,258 320,265" fill="var(--dg-cool)" opacity=".55"/>
  <text x="254" y="246" class="dg19a-sub">flow stops</text>
  <text x="56" y="296" class="dg19a-sub">downstream flow stops the moment the valve shuts</text>

  <line x1="340" y1="180" x2="340" y2="296" class="dg19a-div"/>
  <text x="348" y="200" class="dg19a-sub">same two beats</text>
  <text x="452" y="200" class="dg19a-sub">dramatic beat-by-beat plunge toward zero</text>
  <line x1="348" y1="294" x2="636" y2="294" class="dg19a-zero"/>
  <text x="632" y="288" class="dg19a-sub" text-anchor="end">0</text>
  <path class="dg19a-trR" d="M348,294 C354,224 362,206 372,208 C382,210 386,252 394,274 C400,288 404,294 410,294 L492,294 C498,224 506,206 516,208 C526,210 530,252 538,274 C544,288 548,294 554,294 L636,294"/>
  <line x1="348" y1="206" x2="348" y2="294" class="dg19a-sweep"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv19-av-shunt-thermoregulation"] = {
  title: "Skin AV shunt and heat loss",
  caption:
    "This is the section students invert, because it can be stated from two directions. " +
    "The lecture states it from the <em>shunt's</em> side: <strong>closing</strong> a skin AV shunt forces blood through the capillary bed and " +
    "<strong>enhances heat loss</strong>; when shunts are <strong>open</strong> (capillary sphincters constricted) blood bypasses the skin capillaries, " +
    "does not warm the skin, and heat is <strong>conserved</strong> (Slide 23). The animation states the identical thing from the <em>sphincters'</em> side, " +
    "which is how the two boxes are labelled: sphincters open = shunt closed = bed perfused = heat lost; sphincters closed = shunt open = " +
    "blood straight down the thoroughfare = heat conserved. The proximal segment of the thoroughfare is the <strong>metarteriole</strong>, " +
    "and the dashed marker at the venous end is the structural reason the shortcut works at all - the lecture's point that there are " +
    "<strong>no precapillary sphincters at the venous end</strong>, so that route is always available. " +
    "Precapillary sphincters are only slight thickenings of smooth muscle at the origin of the capillary bed (Slide 17). " +
    "Normal sites for these shunts: fingertips, nose, lips, erectile tissue.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Blood arrives from an arteriole into a metarteriole, the proximal segment of a preferential thoroughfare that runs on to a venule. Two precapillary sphincters sit where capillary loops leave the metarteriole toward the fingertip skin surface. When the sphincters are open the capillary loops fill with blood and heat radiates out of the skin, which is the state in which the arteriovenous shunt is closed and heat is lost. When the sphincters constrict, the loops empty and blood runs straight along the shunt channel to the venule, so the skin is bypassed and heat is conserved. A dashed marker at the venous end of the channel notes that there is no precapillary sphincter there, so that route is always open.">
  <style>
    .dg19b-lbl  { font-size: 9.5px; }
    .dg19b-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg19b-hdr  { font-size: 10px; font-weight: 700; }
    .dg19b-vess { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg19b-cap  { fill: none; stroke: var(--dg-line); stroke-width: 7; stroke-linecap: round; }
    .dg19b-flow { fill: none; stroke: var(--dg-accent); stroke-width: 3.4; stroke-linecap: round; stroke-dasharray: 5 15; }
    .dg19b-box  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg19b-musc { fill: var(--dg-ink); }
    .dg19b-lead { stroke: var(--dg-line); stroke-width: 1.1; fill: none; }
    .dg19b-wave { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; stroke-linecap: round; }
    .dg19b-in   { animation: dg19bRun 2.2s linear infinite; }
    .dg19b-capf { animation: dg19bCap 10s linear infinite; }
    .dg19b-shun { animation: dg19bShunt 10s linear infinite; }
    .dg19b-sl   { animation: dg19bPinchA 10s ease-in-out infinite; }
    .dg19b-sr   { animation: dg19bPinchB 10s ease-in-out infinite; }
    .dg19b-heat { animation: dg19bHeat 10s ease-in-out infinite; }
    .dg19b-h2   { animation-delay: .5s; }
    .dg19b-h3   { animation-delay: 1s; }
    .dg19b-actL { animation: dg19bActL 10s linear infinite; }
    .dg19b-actR { animation: dg19bActR 10s linear infinite; }
    @keyframes dg19bRun { to { stroke-dashoffset: -20 } }
    @keyframes dg19bCap {
      0%   { stroke-dashoffset: 0; opacity: 0 }
      4%   { opacity: 1 }
      44%  { stroke-dashoffset: -300; opacity: 1 }
      50%  { stroke-dashoffset: -320; opacity: 0 }
      100% { stroke-dashoffset: -320; opacity: 0 }
    }
    @keyframes dg19bShunt {
      0%   { stroke-dashoffset: 0; opacity: .25 }
      45%  { stroke-dashoffset: -60; opacity: .25 }
      50%  { stroke-dashoffset: -80; opacity: 1 }
      95%  { stroke-dashoffset: -440; opacity: 1 }
      100% { stroke-dashoffset: -460; opacity: .25 }
    }
    @keyframes dg19bPinchA { 0%,44% { transform: translateX(0) } 50%,96% { transform: translateX(5px) } 100% { transform: translateX(0) } }
    @keyframes dg19bPinchB { 0%,44% { transform: translateX(0) } 50%,96% { transform: translateX(-5px) } 100% { transform: translateX(0) } }
    @keyframes dg19bHeat {
      0%   { opacity: 0; transform: translateY(8px) }
      12%  { opacity: .95 }
      40%  { opacity: .95; transform: translateY(-8px) }
      47%  { opacity: 0; transform: translateY(-10px) }
      100% { opacity: 0; transform: translateY(8px) }
    }
    @keyframes dg19bActL { 0%,44% { opacity: 1 } 48%,100% { opacity: 0 } }
    @keyframes dg19bActR { 0%,44% { opacity: 0 } 50%,95% { opacity: 1 } 99%,100% { opacity: 0 } }
  </style>

  <text x="150" y="16" class="dg19b-sub">skin surface (fingertip, nose, lips)</text>
  <rect x="150" y="22" width="400" height="9" rx="4.5" fill="var(--dg-line)"/>

  <g class="dg19b-heat">
    <path class="dg19b-wave" d="M290,70 c7,-7 -7,-10 0,-16 c7,-7 -7,-10 0,-16"/>
  </g>
  <g class="dg19b-heat dg19b-h2">
    <path class="dg19b-wave" d="M340,70 c7,-7 -7,-10 0,-16 c7,-7 -7,-10 0,-16"/>
  </g>
  <g class="dg19b-heat dg19b-h3">
    <path class="dg19b-wave" d="M390,70 c7,-7 -7,-10 0,-16 c7,-7 -7,-10 0,-16"/>
    <text x="410" y="52" class="dg19b-hdr" fill="var(--dg-warm)">heat radiates out</text>
  </g>

  <path class="dg19b-cap" d="M228,160 C246,74 412,74 430,160"/>
  <path class="dg19b-cap" d="M252,160 C270,104 388,104 406,160"/>

  <rect x="440" y="154" width="196" height="30" rx="15" class="dg19b-vess"/>
  <rect x="28" y="161" width="428" height="18" rx="9" class="dg19b-vess"/>

  <path class="dg19b-flow dg19b-capf" d="M228,160 C246,74 412,74 430,160"/>
  <path class="dg19b-flow dg19b-capf" d="M252,160 C270,104 388,104 406,160"/>
  <line x1="36" y1="170" x2="222" y2="170" class="dg19b-flow dg19b-in"/>
  <line x1="258" y1="170" x2="624" y2="170" class="dg19b-flow dg19b-shun"/>

  <ellipse cx="221" cy="150" rx="5" ry="7.5" class="dg19b-musc dg19b-sl"/>
  <ellipse cx="235" cy="150" rx="5" ry="7.5" class="dg19b-musc dg19b-sr"/>
  <ellipse cx="245" cy="148" rx="5" ry="7.5" class="dg19b-musc dg19b-sl"/>
  <ellipse cx="259" cy="148" rx="5" ry="7.5" class="dg19b-musc dg19b-sr"/>

  <text x="100" y="118" class="dg19b-lbl">precapillary sphincters</text>
  <path class="dg19b-lead" d="M196,124 L220,142"/>
  <path class="dg19b-lead" d="M203,124 L246,140"/>
  <text x="330" y="150" text-anchor="middle" class="dg19b-lbl">capillary bed</text>

  <ellipse cx="462" cy="170" rx="17" ry="19" fill="none" stroke="var(--dg-good)" stroke-width="1.8" stroke-dasharray="4 4"/>
  <path class="dg19b-lead" d="M476,146 L470,152"/>
  <text x="482" y="130" class="dg19b-lbl" fill="var(--dg-good)">no sphincter at the venous end</text>
  <text x="482" y="142" class="dg19b-sub">so this route is always open</text>

  <line x1="150" y1="184" x2="150" y2="190" stroke="var(--dg-line)" stroke-width="1.2"/>
  <line x1="250" y1="184" x2="250" y2="190" stroke="var(--dg-line)" stroke-width="1.2"/>
  <line x1="440" y1="188" x2="440" y2="194" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="32" y="200" class="dg19b-lbl">Arteriole</text>
  <text x="156" y="200" class="dg19b-lbl">Metarteriole</text>
  <text x="156" y="211" class="dg19b-sub">(proximal segment)</text>
  <text x="300" y="200" class="dg19b-lbl">Thoroughfare / shunt channel</text>
  <text x="516" y="204" class="dg19b-lbl">Venule</text>

  <rect x="14" y="222" width="310" height="82" rx="8" class="dg19b-box"/>
  <text x="28" y="242" class="dg19b-hdr">Sphincters OPEN &#8226; shunt CLOSED</text>
  <text x="28" y="260" class="dg19b-lbl">blood is forced through the skin capillary bed</text>
  <text x="28" y="279" class="dg19b-hdr" fill="var(--dg-warm)">&#8594; HEAT LOST</text>
  <text x="28" y="295" class="dg19b-sub">lecture: closing a skin AV shunt enhances heat loss</text>
  <rect x="14" y="222" width="310" height="82" rx="8" fill="none" stroke="var(--dg-warm)" stroke-width="2.4" opacity="0" class="dg19b-actL"/>

  <rect x="336" y="222" width="310" height="82" rx="8" class="dg19b-box"/>
  <text x="350" y="242" class="dg19b-hdr">Sphincters CLOSED &#8226; shunt OPEN</text>
  <text x="350" y="260" class="dg19b-lbl">blood runs straight down the shunt channel</text>
  <text x="350" y="279" class="dg19b-hdr" fill="var(--dg-cool)">&#8594; HEAT CONSERVED</text>
  <text x="350" y="295" class="dg19b-sub">skin capillaries are bypassed and not warmed</text>
  <rect x="336" y="222" width="310" height="82" rx="8" fill="none" stroke="var(--dg-cool)" stroke-width="2.4" opacity="0" class="dg19b-actR"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv19-lymph-uptake-and-propulsion"] = {
  title: "Lymph: uptake, then ratchet",
  caption:
    "Left - a lymphatic capillary begins as a <strong>blind-ended tube</strong> with <strong>no continuous basal lamina</strong>, which is why it is " +
    "<strong>more permeable than a blood capillary</strong> and can take up protein-rich fluid. As tissue fluid builds up, the <strong>anchoring filaments</strong> " +
    "running from the incomplete basal lamina to perivascular collagen pull the vessel open rather than letting it collapse, so fluid flows in " +
    "through the <strong>gaps between the endothelial cells</strong> (the lecture's wording; drawn here as the overlapping flaps those cells form) - " +
    "the reason edema <em>increases</em> uptake instead of collapsing the vessel. Once inside, that fluid is called <strong>lymph</strong>. " +
    "Middle - there is <strong>no central pump</strong>: skeletal muscle compression squeezes the vessel, the valve behind the column shuts, and the column " +
    "ratchets one step centrally; the beads deliberately pause between squeezes, which is what the valves are for and why the lecturer expects " +
    "OMM lymphatic techniques to matter. Right - lymph passes a <strong>lymph node</strong> and <strong>picks up white blood cells</strong>, then continues through " +
    "vessels whose walls thicken toward the heart (layering stays indistinct, even in the thoracic duct). The <strong>thoracic duct</strong> drains most of the " +
    "body and empties on the left, at the <strong>junction of the internal jugular and subclavian veins</strong>. Flow is one-way, out of the tissues only, " +
    "and the lumen carries <strong>WBCs but NO RBCs</strong> - the slide-identification rule.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Three stages of lymph flow. On the left, interstitial fluid droplets collect in tissue around a blind-ended lymphatic capillary; anchoring filaments tie the vessel wall to surrounding collagen and hold it open, and the overlapping endothelial flaps of the top wall lift so the droplets enter and become lymph. In the middle, skeletal muscle bellies above and below the vessel squeeze inward; the column of lymph advances one step and then pauses while the valves close behind it, so flow is one-way without any pump. On the right, the vessel passes through a lymph node where white blood cells are added, then continues as a thicker-walled duct that empties into the blood; the lumen contains white blood cells but no red blood cells.">
  <style>
    .dg19c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg19c-hdr   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .05em; }
    .dg19c-lbl   { font-size: 9.5px; }
    .dg19c-sub   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg19c-tube  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg19c-thick { fill: none; stroke: var(--dg-line); stroke-width: 3.4; stroke-linecap: round; }
    .dg19c-lymph { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-linecap: round; stroke-dasharray: 6 14; animation: dg19cRatchet 8s ease-in-out infinite; }
    .dg19c-drop  { fill: var(--dg-accent); opacity: .85; }
    .dg19c-fil   { stroke: var(--dg-ink); stroke-width: 1.6; opacity: .9; animation: dg19cTug 8s ease-in-out infinite; }
    .dg19c-anch  { stroke: var(--dg-muted); stroke-width: 2.6; stroke-linecap: round; }
    .dg19c-flap  { stroke: var(--dg-ink); stroke-width: 4.5; stroke-linecap: round; transform: translate(-2px,-7px); animation: dg19cFlap 8s ease-in-out infinite; }
    .dg19c-musc  { fill: var(--dg-warm); fill-opacity: .3; stroke: var(--dg-warm); stroke-width: 1.4; }
    .dg19c-mt    { animation: dg19cMuscT 8s ease-in-out infinite; }
    .dg19c-mb    { animation: dg19cMuscB 8s ease-in-out infinite; }
    .dg19c-leaf  { fill: none; stroke: var(--dg-ink); stroke-width: 2.4; stroke-linecap: round; }
    .dg19c-vu    { animation: dg19cValveU 8s ease-in-out infinite; }
    .dg19c-vd    { animation: dg19cValveD 8s ease-in-out infinite; }
    .dg19c-wbc   { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 1.8; }
    .dg19c-d1 { animation: dg19cDropA 8s ease-in-out infinite; }
    .dg19c-d2 { animation: dg19cDropB 8s ease-in-out infinite; }
    .dg19c-d3 { animation: dg19cDropC 8s ease-in-out infinite; }
    @keyframes dg19cRatchet {
      0%,8%   { stroke-dashoffset: 0 }
      30%,55% { stroke-dashoffset: -120 }
      78%,100%{ stroke-dashoffset: -240 }
    }
    @keyframes dg19cTug { 0%,10% { opacity: .4 } 30%,62% { opacity: 1 } 86%,100% { opacity: .4 } }
    @keyframes dg19cFlap { 0%,12% { transform: translate(0,0) } 30%,62% { transform: translate(-2px,-9px) } 84%,100% { transform: translate(0,0) } }
    @keyframes dg19cMuscT { 0%,4% { transform: translateY(0) } 12%,28% { transform: translateY(12px) } 40%,54% { transform: translateY(0) } 62%,78% { transform: translateY(12px) } 90%,100% { transform: translateY(0) } }
    @keyframes dg19cMuscB { 0%,4% { transform: translateY(0) } 12%,28% { transform: translateY(-12px) } 40%,54% { transform: translateY(0) } 62%,78% { transform: translateY(-12px) } 90%,100% { transform: translateY(0) } }
    @keyframes dg19cValveU { 0%,4% { transform: translateY(0) } 12%,28% { transform: translateY(-9px) } 38%,54% { transform: translateY(0) } 62%,78% { transform: translateY(-9px) } 88%,100% { transform: translateY(0) } }
    @keyframes dg19cValveD { 0%,4% { transform: translateY(0) } 12%,28% { transform: translateY(9px) } 38%,54% { transform: translateY(0) } 62%,78% { transform: translateY(9px) } 88%,100% { transform: translateY(0) } }
    @keyframes dg19cDropA {
      0%   { transform: translate(0,0); opacity: 0 }
      10%  { opacity: .9 }
      36%  { transform: translate(44px,52px); opacity: .9 }
      44%  { transform: translate(44px,58px); opacity: 0 }
      100% { transform: translate(44px,58px); opacity: 0 }
    }
    @keyframes dg19cDropB {
      0%   { transform: translate(0,0); opacity: 0 }
      16%  { opacity: .9 }
      42%  { transform: translate(-32px,54px); opacity: .9 }
      50%  { transform: translate(-32px,60px); opacity: 0 }
      100% { transform: translate(-32px,60px); opacity: 0 }
    }
    @keyframes dg19cDropC {
      0%   { transform: translate(0,0); opacity: 0 }
      22%  { opacity: .9 }
      48%  { transform: translate(-16px,64px); opacity: .9 }
      56%  { transform: translate(-16px,70px); opacity: 0 }
      100% { transform: translate(-16px,70px); opacity: 0 }
    }
  </style>

  <text x="18" y="32" class="dg19c-hdr">1 &#8226; UPTAKE</text>
  <text x="250" y="32" class="dg19c-hdr">2 &#8226; PROPULSION</text>
  <text x="474" y="32" class="dg19c-hdr">3 &#8226; NODE, THEN BLOOD</text>

  <rect x="14" y="42" width="224" height="194" rx="10" class="dg19c-panel"/>
  <text x="48" y="62" class="dg19c-sub">interstitial fluid builds up</text>

  <path class="dg19c-tube" d="M636,142 L74,142 Q44,142 44,157 Q44,172 74,172 L636,172 Z"/>
  <path class="dg19c-thick" d="M430,142 L636,142"/>
  <path class="dg19c-thick" d="M430,172 L636,172"/>

  <line x1="56" y1="116" x2="68" y2="116" class="dg19c-anch"/>
  <line x1="100" y1="116" x2="112" y2="116" class="dg19c-anch"/>
  <line x1="194" y1="116" x2="206" y2="116" class="dg19c-anch"/>
  <line x1="62" y1="116" x2="76" y2="142" class="dg19c-fil"/>
  <line x1="106" y1="116" x2="112" y2="142" class="dg19c-fil"/>
  <line x1="200" y1="116" x2="190" y2="142" class="dg19c-fil"/>
  <text x="44" y="108" class="dg19c-sub">anchoring filaments</text>

  <path class="dg19c-flap" d="M104,143 L132,137"/>
  <path class="dg19c-flap" d="M164,143 L192,137"/>
  <text x="134" y="130" class="dg19c-sub">flaps</text>

  <circle cx="74" cy="86" r="5" class="dg19c-drop dg19c-d1"/>
  <circle cx="150" cy="84" r="4.5" class="dg19c-drop dg19c-d2"/>
  <circle cx="196" cy="74" r="4.5" class="dg19c-drop dg19c-d3"/>

  <text x="44" y="190" class="dg19c-lbl">blind-ended lymphatic capillary</text>
  <text x="44" y="203" class="dg19c-sub">no continuous basal lamina</text>
  <text x="44" y="214" class="dg19c-sub">= more permeable than a blood capillary</text>
  <text x="44" y="229" class="dg19c-lbl" fill="var(--dg-accent)" font-weight="700">fluid that enters = LYMPH</text>

  <ellipse cx="516" cy="157" rx="36" ry="27" fill="var(--dg-panel)" stroke="var(--dg-line)" stroke-width="1.4"/>
  <line x1="60" y1="157" x2="630" y2="157" class="dg19c-lymph"/>

  <text x="250" y="48" class="dg19c-sub">no central pump: valves + skeletal muscle compression</text>
  <rect x="286" y="98" width="112" height="30" rx="14" class="dg19c-musc dg19c-mt"/>
  <rect x="286" y="186" width="112" height="30" rx="14" class="dg19c-musc dg19c-mb"/>
  <text x="342" y="92" text-anchor="middle" class="dg19c-lbl" fill="var(--dg-warm)">skeletal muscle</text>

  <path class="dg19c-leaf dg19c-vu" d="M262,142 C270,150 274,153 278,156"/>
  <path class="dg19c-leaf dg19c-vd" d="M262,172 C270,164 274,161 278,158"/>
  <path class="dg19c-leaf dg19c-vu" d="M342,142 C350,150 354,153 358,156"/>
  <path class="dg19c-leaf dg19c-vd" d="M342,172 C350,164 354,161 358,158"/>
  <path class="dg19c-leaf dg19c-vu" d="M424,142 C432,150 436,153 440,156"/>
  <path class="dg19c-leaf dg19c-vd" d="M424,172 C432,164 436,161 440,158"/>
  <path class="dg19c-leaf dg19c-vu" d="M592,142 C600,150 604,153 608,156"/>
  <path class="dg19c-leaf dg19c-vd" d="M592,172 C600,164 604,161 608,158"/>
  <text x="246" y="136" class="dg19c-sub">valves</text>
  <text x="250" y="234" class="dg19c-sub">squeeze, the valve behind shuts, the column steps forward</text>

  <circle cx="500" cy="146" r="4" class="dg19c-wbc"/>
  <circle cx="524" cy="166" r="4" class="dg19c-wbc"/>
  <circle cx="530" cy="144" r="4" class="dg19c-wbc"/>
  <text x="516" y="118" text-anchor="middle" class="dg19c-lbl">lymph node</text>
  <text x="516" y="130" text-anchor="middle" class="dg19c-sub">lymph picks up WBCs</text>
  <circle cx="566" cy="150" r="4" class="dg19c-wbc"/>
  <circle cx="578" cy="164" r="4" class="dg19c-wbc"/>
  <circle cx="620" cy="150" r="4" class="dg19c-wbc"/>
  <polygon points="636,148 654,157 636,166" fill="var(--dg-accent)"/>
  <text x="646" y="198" text-anchor="end" class="dg19c-sub">lumen: WBCs but NO RBCs</text>
  <text x="646" y="210" text-anchor="end" class="dg19c-sub">walls thicken toward the heart</text>

  <line x1="14" y1="246" x2="646" y2="246" stroke="var(--dg-line)" stroke-width="1.1" opacity=".7"/>
  <text x="18" y="264" class="dg19c-sub"><tspan font-weight="700" fill="var(--dg-accent)">1 </tspan>Swelling tensions the filaments and pulls</text>
  <text x="18" y="276" class="dg19c-sub">the vessel open, so more tissue fluid means</text>
  <text x="18" y="288" class="dg19c-sub">more uptake, not collapse.</text>
  <text x="250" y="264" class="dg19c-sub"><tspan font-weight="700" fill="var(--dg-accent)">2 </tspan>Flow is one-way out of the tissues.</text>
  <text x="250" y="276" class="dg19c-sub">The pause between squeezes is the point:</text>
  <text x="250" y="288" class="dg19c-sub">valves hold the gain. No pump.</text>
  <text x="474" y="264" class="dg19c-sub"><tspan font-weight="700" fill="var(--dg-accent)">3 </tspan>Thoracic duct drains most of the</text>
  <text x="474" y="276" class="dg19c-sub">body and empties on the left, at the</text>
  <text x="474" y="288" class="dg19c-sub">internal jugular-subclavian junction.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv63 - Lipid Metabolism Part 3: Dyslipidemias (D. Zhang, PhD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv63-lipoprotein-blocks"] = {
  title: "Where each disorder breaks lipoprotein traffic",
  caption:
    "Particles flow left to right through four steps: <strong>MTP</strong> loads lipid onto ApoB-48 and ApoB-100 to build chylomicrons and VLDL; " +
    "<strong>LPL</strong>, switched on by <strong>ApoC-II</strong>, unloads their triglyceride; <strong>ApoE</strong> lets receptors take up the remnants; " +
    "and <strong>ApoB-100 on LDL</strong> docks on the <strong>LDL receptor</strong> for hepatic uptake. Each flashing mark is a disorder from this lecture " +
    "(Slides 6-10, 14). The rule to take away: what sits upstream of the block accumulates and what is downstream falls - so Type I raises " +
    "chylomicrons and VLDL but lowers LDL, while abetalipoproteinemia lowers every ApoB particle. Type IV is the exception: nothing is blocked, " +
    "excess glucose simply makes too much VLDL.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A left-to-right lipoprotein pathway with four steps: MTP assembly of chylomicrons and VLDL, lipoprotein lipase with ApoC-II unloading triglyceride, ApoE-mediated remnant uptake, and LDL receptor uptake of LDL via ApoB-100. Below each step a box names the disorder that blocks it: abetalipoproteinemia with all ApoB particles low, Type I with chylomicrons and VLDL high and no added coronary risk, Type III with chylomicrons and VLDL high, and Type IIa with LDL and cholesterol high. Above the pathway, Type IV feeds excess glucose into VLDL overproduction.">
  <style>
    .dg63a-track { stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg63a-st    { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg63a-hd    { font-size: 10.5px; font-weight: 700; }
    .dg63a-sm    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg63a-pt    { font-size: 9.5px; font-weight: 700; fill: var(--dg-cool); }
    .dg63a-bx    { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 1.5; }
    .dg63a-bt    { font-size: 10.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg63a-link  { stroke: var(--dg-warm); stroke-width: 1.3; stroke-dasharray: 3 3; }
    .dg63a-x     { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg63a-t4    { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 1.5; }
    .dg63a-g4    { font-size: 10.5px; font-weight: 700; fill: var(--dg-good); }
    .dg63a-ar    { stroke: var(--dg-good); stroke-width: 2; fill: none; }
    .dg63a-ah    { fill: var(--dg-good); }
    .dg63a-dot   { fill: var(--dg-cool); }
    .dg63a-d1 { animation: dg63aFlow 6s linear infinite; }
    .dg63a-d2 { animation: dg63aFlow 6s linear infinite 2s; }
    .dg63a-d3 { animation: dg63aFlow 6s linear infinite 4s; }
    @keyframes dg63aFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      6%   { opacity: 1 }
      92%  { opacity: 1 }
      100% { transform: translateX(560px); opacity: 0 }
    }
    .dg63a-b1 { animation: dg63aFlash 8s ease-in-out infinite; }
    .dg63a-b2 { animation: dg63aFlash 8s ease-in-out infinite 2s; }
    .dg63a-b3 { animation: dg63aFlash 8s ease-in-out infinite 4s; }
    .dg63a-b4 { animation: dg63aFlash 8s ease-in-out infinite 6s; }
    @keyframes dg63aFlash {
      0%, 30%, 100% { opacity: .45 }
      10%, 20%      { opacity: 1 }
    }
  </style>

  <line x1="30" y1="130" x2="610" y2="130" class="dg63a-track"/>
  <g class="dg63a-d1"><circle cx="40" cy="130" r="6" class="dg63a-dot"/></g>
  <g class="dg63a-d2"><circle cx="40" cy="130" r="6" class="dg63a-dot"/></g>
  <g class="dg63a-d3"><circle cx="40" cy="130" r="6" class="dg63a-dot"/></g>

  <rect x="30"  y="106" width="100" height="48" rx="9" class="dg63a-st"/>
  <text x="80"  y="126" text-anchor="middle" class="dg63a-hd">MTP</text>
  <text x="80"  y="142" text-anchor="middle" class="dg63a-sm">loads ApoB-48/100</text>

  <rect x="190" y="106" width="100" height="48" rx="9" class="dg63a-st"/>
  <text x="240" y="126" text-anchor="middle" class="dg63a-hd">LPL + ApoC-II</text>
  <text x="240" y="142" text-anchor="middle" class="dg63a-sm">unloads TG</text>

  <rect x="350" y="106" width="100" height="48" rx="9" class="dg63a-st"/>
  <text x="400" y="126" text-anchor="middle" class="dg63a-hd">ApoE</text>
  <text x="400" y="142" text-anchor="middle" class="dg63a-sm">remnant uptake</text>

  <rect x="510" y="106" width="100" height="48" rx="9" class="dg63a-st"/>
  <text x="560" y="126" text-anchor="middle" class="dg63a-hd">LDLR + ApoB-100</text>
  <text x="560" y="142" text-anchor="middle" class="dg63a-sm">LDL uptake</text>

  <text x="160" y="100" text-anchor="middle" class="dg63a-pt">chylo, VLDL</text>
  <text x="320" y="100" text-anchor="middle" class="dg63a-pt">remnants, IDL</text>
  <text x="480" y="100" text-anchor="middle" class="dg63a-pt">LDL</text>

  <rect x="120" y="14" width="230" height="44" rx="8" class="dg63a-t4"/>
  <text x="235" y="32" text-anchor="middle" class="dg63a-g4">Type IV: excess glucose</text>
  <text x="235" y="48" text-anchor="middle" class="dg63a-sm">acetyl-CoA &#8594; TG &#8594; too much VLDL</text>
  <path d="M160 58 L160 84" class="dg63a-ar"/>
  <polygon points="154,82 166,82 160,90" class="dg63a-ah"/>

  <g class="dg63a-b1">
    <line x1="72" y1="100" x2="88" y2="116" class="dg63a-x"/><line x1="88" y1="100" x2="72" y2="116" class="dg63a-x"/>
    <line x1="80" y1="154" x2="80" y2="180" class="dg63a-link"/>
    <rect x="12" y="180" width="140" height="70" rx="8" class="dg63a-bx"/>
    <text x="82" y="200" text-anchor="middle" class="dg63a-bt">Abetalipoproteinemia</text>
    <text x="82" y="216" text-anchor="middle" class="dg63a-sm">chylo, VLDL, IDL, LDL</text>
    <text x="82" y="229" text-anchor="middle" class="dg63a-sm">all low</text>
  </g>
  <g class="dg63a-b2">
    <line x1="232" y1="100" x2="248" y2="116" class="dg63a-x"/><line x1="248" y1="100" x2="232" y2="116" class="dg63a-x"/>
    <line x1="240" y1="154" x2="240" y2="180" class="dg63a-link"/>
    <rect x="170" y="180" width="140" height="70" rx="8" class="dg63a-bx"/>
    <text x="240" y="200" text-anchor="middle" class="dg63a-bt">Type I</text>
    <text x="240" y="216" text-anchor="middle" class="dg63a-sm">chylo, VLDL high</text>
    <text x="240" y="229" text-anchor="middle" class="dg63a-sm">LDL, HDL low</text>
    <text x="240" y="242" text-anchor="middle" class="dg63a-sm">no added coronary risk</text>
  </g>
  <g class="dg63a-b3">
    <line x1="392" y1="100" x2="408" y2="116" class="dg63a-x"/><line x1="408" y1="100" x2="392" y2="116" class="dg63a-x"/>
    <line x1="400" y1="154" x2="400" y2="180" class="dg63a-link"/>
    <rect x="330" y="180" width="140" height="70" rx="8" class="dg63a-bx"/>
    <text x="400" y="200" text-anchor="middle" class="dg63a-bt">Type III</text>
    <text x="400" y="216" text-anchor="middle" class="dg63a-sm">chylo, VLDL high</text>
    <text x="400" y="229" text-anchor="middle" class="dg63a-sm">coronary risk up</text>
  </g>
  <g class="dg63a-b4">
    <line x1="552" y1="100" x2="568" y2="116" class="dg63a-x"/><line x1="568" y1="100" x2="552" y2="116" class="dg63a-x"/>
    <line x1="560" y1="154" x2="560" y2="180" class="dg63a-link"/>
    <rect x="490" y="180" width="140" height="70" rx="8" class="dg63a-bx"/>
    <text x="560" y="200" text-anchor="middle" class="dg63a-bt">Type IIa (FH)</text>
    <text x="560" y="216" text-anchor="middle" class="dg63a-sm">LDL, cholesterol high</text>
    <text x="560" y="229" text-anchor="middle" class="dg63a-sm">coronary risk up</text>
  </g>

  <text x="320" y="280" text-anchor="middle" class="dg63a-hd">Upstream of the block accumulates; downstream falls.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv63-pcsk9-ldlr"] = {
  title: "PCSK9 and the LDL receptor",
  caption:
    "Left: secreted <strong>PCSK9</strong>, a serine protease, binds the LDL receptor and escorts it to the <strong>lysosome</strong>, so fewer receptors " +
    "reach the hepatocyte surface and LDL stays in the blood. Right: <strong>alirocumab or evolocumab</strong>, human monoclonal antibodies, trap PCSK9; " +
    "the receptor delivers its LDL and returns to the surface to take up more (Slide 8). The chain to remember is " +
    "<strong>PCSK9 inhibition &#8594; LDLR &#8593; &#8594; LDL uptake &#8593; &#8594; LDL-cholesterol &#8595;</strong> - and why a PCSK9 mutation is one of " +
    "the three causes of familial hypercholesterolemia.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two hepatocyte panels. Left, PCSK9 active: a PCSK9 molecule bound to an LDL receptor moves down from the cell surface into a lysosome where the receptor is degraded; only two receptors remain at the surface and LDL stays high in blood. Right, PCSK9 blocked by an antibody: the receptor carries LDL inward, the LDL goes to the lysosome, and the receptor cycles back up to the surface; four receptors are at the surface, LDL uptake rises and LDL cholesterol falls.">
  <style>
    .dg63b-pan  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg63b-mem  { stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg63b-hd   { font-size: 12px; font-weight: 700; }
    .dg63b-sm   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg63b-rec  { stroke: var(--dg-accent); stroke-width: 3; fill: none; stroke-linecap: round; }
    .dg63b-ldl  { fill: var(--dg-cool); }
    .dg63b-pc   { fill: var(--dg-warm); }
    .dg63b-ab   { stroke: var(--dg-good); stroke-width: 3; fill: none; stroke-linecap: round; }
    .dg63b-lys  { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 1.8; }
    .dg63b-end  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .dg63b-bad  { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .dg63b-good { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg63b-ret  { stroke: var(--dg-accent); stroke-width: 1.5; fill: none; stroke-dasharray: 4 3; }
    .dg63b-sink { animation: dg63bSink 5s ease-in infinite; }
    @keyframes dg63bSink {
      0%, 15% { transform: translateY(0);     opacity: 1 }
      80%     { transform: translateY(126px); opacity: 1 }
      100%    { transform: translateY(126px); opacity: 0 }
    }
    .dg63b-cycle { animation: dg63bCycle 5s ease-in-out infinite; }
    @keyframes dg63bCycle {
      0%, 10%   { transform: translateY(0) }
      45%, 55%  { transform: translateY(80px) }
      90%, 100% { transform: translateY(0) }
    }
    .dg63b-drop { animation: dg63bDrop 5s ease-in-out infinite; }
    @keyframes dg63bDrop {
      0%, 10%  { transform: translate(0, 0);        opacity: 1 }
      45%      { transform: translate(0, 80px);     opacity: 1 }
      75%      { transform: translate(60px, 140px); opacity: 1 }
      90%      { transform: translate(60px, 140px); opacity: 0 }
      100%     { transform: translate(0, 0);        opacity: 0 }
    }
  </style>

  <rect x="10"  y="8" width="300" height="284" rx="12" class="dg63b-pan"/>
  <rect x="330" y="8" width="300" height="284" rx="12" class="dg63b-pan"/>
  <text x="160" y="28" text-anchor="middle" class="dg63b-hd">PCSK9 active</text>
  <text x="480" y="28" text-anchor="middle" class="dg63b-hd">PCSK9 blocked by antibody</text>

  <text x="24"  y="50" class="dg63b-sm">blood</text>
  <text x="344" y="50" class="dg63b-sm">blood</text>
  <line x1="20"  y1="100" x2="300" y2="100" class="dg63b-mem"/>
  <line x1="340" y1="100" x2="620" y2="100" class="dg63b-mem"/>
  <text x="24"  y="118" class="dg63b-sm">hepatocyte</text>
  <text x="344" y="118" class="dg63b-sm">hepatocyte</text>

  <circle cx="60"  cy="62" r="8" class="dg63b-ldl"/>
  <circle cx="110" cy="54" r="8" class="dg63b-ldl"/>
  <circle cx="150" cy="66" r="8" class="dg63b-ldl"/>
  <circle cx="275" cy="58" r="8" class="dg63b-ldl"/>
  <text x="104" y="84" class="dg63b-sm">LDL stays in blood</text>

  <path d="M84 100 L84 90 M78 84 L84 90 L90 84" class="dg63b-rec"/>
  <path d="M254 100 L254 90 M248 84 L254 90 L260 84" class="dg63b-rec"/>

  <g class="dg63b-sink">
    <path d="M200 100 L200 90 M194 84 L200 90 L206 84" class="dg63b-rec"/>
    <polygon points="200,70 208,78 200,86 192,78" class="dg63b-pc"/>
  </g>
  <text x="212" y="70" class="dg63b-sm">PCSK9</text>

  <circle cx="200" cy="228" r="28" class="dg63b-lys"/>
  <text x="200" y="226" text-anchor="middle" class="dg63b-sm">lysosome:</text>
  <text x="200" y="238" text-anchor="middle" class="dg63b-sm">LDLR degraded</text>
  <text x="30" y="160" class="dg63b-bad">Fewer surface LDLR</text>
  <text x="30" y="176" class="dg63b-bad">LDL &#8593; in blood</text>

  <path d="M372 58 L380 50 M388 58 L380 50 L380 38" class="dg63b-ab"/>
  <polygon points="380,56 388,64 380,72 372,64" class="dg63b-pc"/>
  <text x="396" y="46" class="dg63b-sm">antibody traps PCSK9</text>

  <path d="M372 100 L372 90 M366 84 L372 90 L378 84" class="dg63b-rec"/>
  <path d="M420 100 L420 90 M414 84 L420 90 L426 84" class="dg63b-rec"/>
  <path d="M560 100 L560 90 M554 84 L560 90 L566 84" class="dg63b-rec"/>
  <path d="M600 100 L600 90 M594 84 L600 90 L606 84" class="dg63b-rec"/>
  <circle cx="560" cy="78" r="7" class="dg63b-ldl"/>

  <g class="dg63b-cycle">
    <path d="M480 100 L480 90 M474 84 L480 90 L486 84" class="dg63b-rec"/>
  </g>
  <g class="dg63b-drop">
    <circle cx="480" cy="80" r="7" class="dg63b-ldl"/>
  </g>
  <ellipse cx="480" cy="180" rx="30" ry="18" class="dg63b-end"/>
  <text x="480" y="184" text-anchor="middle" class="dg63b-sm">endosome</text>
  <path d="M450 172 C420 150 425 120 440 106" class="dg63b-ret"/>
  <text x="352" y="146" class="dg63b-sm">LDLR recycles</text>

  <circle cx="540" cy="228" r="28" class="dg63b-lys"/>
  <text x="540" y="226" text-anchor="middle" class="dg63b-sm">lysosome:</text>
  <text x="540" y="238" text-anchor="middle" class="dg63b-sm">LDL digested</text>
  <text x="350" y="272" class="dg63b-good">More surface LDLR &#8594; LDL uptake &#8593;</text>
  <text x="350" y="286" class="dg63b-good">LDL-cholesterol &#8595;</text>
</svg>`,
};

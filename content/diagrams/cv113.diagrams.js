window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv113-lymph-formation"] = {
  title: "How tissue movement forms lymph",
  caption:
    "The heart's hydrostatic gradient ends at the vessel edge, so lymph forms because the tissue itself moves. " +
    "Expansion pulls on the anchoring filaments, the terminal lymphatic's volume increases and fluid is drawn in between the overlapping endothelial cells. " +
    "Recoil collapses those cells into a valve and forces the fluid on into the lymph stream. " +
    "Breathing does this in the lung, peristalsis in the gut, contraction in skeletal muscle, and the pulse wave along arteries (Slides 19-21).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels of a terminal lymphatic. In panel 1 the tissue expands, anchoring filaments pull the wall open, volume increases and interstitial fluid is drawn in between overlapping endothelial cells. In panel 2 the tissue recoils, the overlapped cells collapse and act as a valve, volume falls, and fluid is forced along past a valve into the lymph stream.">
  <style>
    .dg113a-card { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg113a-tissue { fill: var(--dg-line); }
    .dg113a-wall { fill: none; stroke: var(--dg-ink); stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
    .dg113a-valve { fill: none; stroke: var(--dg-ink); stroke-width: 2.5; stroke-linecap: round; vector-effect: non-scaling-stroke; }
    .dg113a-fil { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; vector-effect: non-scaling-stroke; }
    .dg113a-ring { fill: none; stroke: var(--dg-accent); stroke-width: 2; vector-effect: non-scaling-stroke; }
    .dg113a-in { stroke: var(--dg-cool); stroke-width: 4; stroke-linecap: round; }
    .dg113a-intip { fill: var(--dg-cool); }
    .dg113a-on { stroke: var(--dg-accent); stroke-width: 4; stroke-linecap: round; }
    .dg113a-ontip { fill: var(--dg-accent); }
    .dg113a-sq { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg113a-sqtip { fill: var(--dg-warm); }
    .dg113a-dotin { fill: var(--dg-cool); }
    .dg113a-doton { fill: var(--dg-accent); }
    .lecture-diagram text.dg113a-h { font-size: 12.5px; font-weight: 700; }
    .lecture-diagram text.dg113a-b { font-size: 12px; font-weight: 700; }
    .lecture-diagram text.dg113a-s { font-size: 11px; fill: var(--dg-muted); }

    .dg113a-pl { animation: dg113aPl 8s ease-in-out infinite; }
    .dg113a-pr { animation: dg113aPr 8s ease-in-out infinite; }
    @keyframes dg113aPl { 0%, 46% { opacity: 1 } 52%, 94% { opacity: .4 } 100% { opacity: 1 } }
    @keyframes dg113aPr { 0%, 46% { opacity: .4 } 52%, 94% { opacity: 1 } 100% { opacity: .4 } }

    .dg113a-lves { transform-box: fill-box; transform-origin: center; animation: dg113aLv 8s ease-in-out infinite; }
    .dg113a-lft { transform-box: fill-box; transform-origin: center top; animation: dg113aLft 8s ease-in-out infinite; }
    .dg113a-lfb { transform-box: fill-box; transform-origin: center bottom; animation: dg113aLfb 8s ease-in-out infinite; }
    @keyframes dg113aLv { 0%, 4% { transform: scaleY(.62) } 36%, 58% { transform: scaleY(1) } 100% { transform: scaleY(.62) } }
    @keyframes dg113aLft { 0%, 4% { transform: scaleY(1.34) } 36%, 58% { transform: scaleY(1) } 100% { transform: scaleY(1.34) } }
    @keyframes dg113aLfb { 0%, 4% { transform: scaleY(1.32) } 36%, 58% { transform: scaleY(1) } 100% { transform: scaleY(1.32) } }

    .dg113a-rves { transform-box: fill-box; transform-origin: center; animation: dg113aRv 8s ease-in-out infinite; }
    .dg113a-rft { transform-box: fill-box; transform-origin: center top; animation: dg113aRft 8s ease-in-out infinite; }
    .dg113a-rfb { transform-box: fill-box; transform-origin: center bottom; animation: dg113aRfb 8s ease-in-out infinite; }
    @keyframes dg113aRv { 0%, 50% { transform: scaleY(1.9) } 80%, 94% { transform: scaleY(1) } 100% { transform: scaleY(1.9) } }
    @keyframes dg113aRft { 0%, 50% { transform: scaleY(.7) } 80%, 94% { transform: scaleY(1) } 100% { transform: scaleY(.7) } }
    @keyframes dg113aRfb { 0%, 50% { transform: scaleY(.72) } 80%, 94% { transform: scaleY(1) } 100% { transform: scaleY(.72) } }

    .dg113a-d1 { animation: dg113aIn 8s linear infinite 0s; }
    .dg113a-d2 { animation: dg113aIn 8s linear infinite .35s; }
    .dg113a-d3 { animation: dg113aIn 8s linear infinite .7s; }
    @keyframes dg113aIn {
      0%   { transform: translate(0, -44px); opacity: 0 }
      6%   { opacity: 1 }
      36%  { transform: translate(-8px, 30px); opacity: 1 }
      44%, 100% { transform: translate(-8px, 30px); opacity: 0 }
    }
    .dg113a-e1 { animation: dg113aOn 8s linear infinite 0s; }
    .dg113a-e2 { animation: dg113aOn 8s linear infinite .3s; }
    .dg113a-e3 { animation: dg113aOn 8s linear infinite .6s; }
    @keyframes dg113aOn {
      0%, 52% { transform: translateX(-12px); opacity: 0 }
      58%  { opacity: 1 }
      90%  { transform: translateX(112px); opacity: 1 }
      95%, 100% { transform: translateX(112px); opacity: 0 }
    }
  </style>

  <text x="14" y="18" class="dg113a-h">1. Tissue expands: inhale, or pulse wave peak</text>
  <text x="332" y="18" class="dg113a-h">2. Tissue recoils: exhale, or pulse wave trough</text>

  <rect x="8" y="26" width="306" height="270" rx="10" class="dg113a-card"/>
  <rect x="326" y="26" width="306" height="270" rx="10" class="dg113a-card"/>

  <g class="dg113a-pl">
    <rect x="18" y="34" width="286" height="8" rx="2" class="dg113a-tissue"/>
    <rect x="18" y="280" width="286" height="8" rx="2" class="dg113a-tissue"/>
    <text x="24" y="58" class="dg113a-s">tissue</text>

    <path d="M82 42 L82 104 M118 42 L118 104 M214 42 L214 104 M280 42 L280 104" class="dg113a-fil dg113a-lft"/>
    <path d="M62 214 L62 280 M292 214 L292 280" class="dg113a-fil dg113a-lfb"/>
    <g class="dg113a-lves">
      <path d="M34 159 C34 124 54 104 94 104 L140 104" class="dg113a-wall"/>
      <path d="M164 134 L186 104 L300 104" class="dg113a-wall"/>
      <path d="M256 104 L276 142" class="dg113a-valve"/>
      <path d="M34 159 C34 194 54 214 94 214 L300 214" class="dg113a-wall"/>
      <path d="M256 214 L276 176" class="dg113a-valve"/>
    </g>

    <line x1="152" y1="52" x2="152" y2="112" class="dg113a-in"/>
    <polygon points="145,110 159,110 152,124" class="dg113a-intip"/>

    <circle cx="146" cy="96" r="4.5" class="dg113a-dotin dg113a-d1"/>
    <circle cx="158" cy="84" r="4" class="dg113a-dotin dg113a-d2"/>
    <circle cx="150" cy="72" r="3.5" class="dg113a-dotin dg113a-d3"/>

    <text x="46" y="152" class="dg113a-b">volume increases</text>
    <text x="46" y="169" class="dg113a-s">fluid drawn in</text>

    <text x="74" y="236" class="dg113a-s">Anchoring filaments pull the</text>
    <text x="74" y="251" class="dg113a-s">wall open. Overlapped cells part:</text>
    <text x="74" y="266" class="dg113a-s">there are no tight junctions.</text>
  </g>

  <g class="dg113a-pr">
    <rect x="336" y="34" width="286" height="8" rx="2" class="dg113a-tissue"/>
    <rect x="336" y="280" width="286" height="8" rx="2" class="dg113a-tissue"/>
    <text x="342" y="58" class="dg113a-s">tissue</text>

    <path d="M400 42 L400 130 M436 42 L436 130 M578 42 L578 130 M606 42 L606 130" class="dg113a-fil dg113a-rft"/>
    <path d="M380 188 L380 280 M610 188 L610 280" class="dg113a-fil dg113a-rfb"/>
    <g class="dg113a-rves">
      <path d="M352 159 C352 144 370 130 410 130 L486 130" class="dg113a-wall"/>
      <path d="M452 139 L498 130 L618 130" class="dg113a-wall"/>
      <path d="M574 130 L592 150" class="dg113a-valve"/>
      <ellipse cx="470" cy="134" rx="27" ry="13" class="dg113a-ring"/>
      <path d="M352 159 C352 174 370 188 410 188 L618 188" class="dg113a-wall"/>
      <path d="M574 188 L592 168" class="dg113a-valve"/>
    </g>

    <line x1="530" y1="62" x2="530" y2="88" class="dg113a-sq"/>
    <polygon points="524,86 536,86 530,98" class="dg113a-sqtip"/>
    <line x1="530" y1="232" x2="530" y2="222" class="dg113a-sq"/>
    <polygon points="524,224 536,224 530,212" class="dg113a-sqtip"/>

    <line x1="598" y1="159" x2="616" y2="159" class="dg113a-on"/>
    <polygon points="614,152 614,166 628,159" class="dg113a-ontip"/>

    <circle cx="452" cy="159" r="4.5" class="dg113a-doton dg113a-e1"/>
    <circle cx="482" cy="159" r="4.5" class="dg113a-doton dg113a-e2"/>
    <circle cx="512" cy="159" r="4.5" class="dg113a-doton dg113a-e3"/>

    <text x="372" y="163" class="dg113a-b">volume falls</text>

    <text x="392" y="244" class="dg113a-s">Overlapped cells collapse: a valve.</text>
    <text x="392" y="259" class="dg113a-s">Fluid is forced on into the lymph</text>
    <text x="392" y="274" class="dg113a-s">stream, where peristalsis takes it.</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv113-facilitation-loop"] = {
  title: "Why a facilitated segment cycles up",
  caption:
    "Visceral and somatic afferents converge on the same interneurons, and two inputs on one interneuron do more than their sum. " +
    "Output to the tissue creates strain, the strain sends somatic afferent input back to the same spot, and the signal grows with each pass, like a speaker placed in front of a mic. " +
    "The facilitated segment also sends exaggerated input upward (hyperesthesia, referred pain) and alters autonomic outflow to the viscera (Slides 28-29).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Feedback loop at a spinal cord interneuron. Visceral afferents from an inflamed viscus reach the interneuron, whose threshold is reduced. Alpha motor and autonomic output strains the somatic tissue, and somatic afferents return to the same interneuron, so a pulse grows larger with each pass. The interneuron also sends ascending input to higher centers, causing hyperesthesia and referred pain, and altered autonomic outflow back to the viscus.">
  <style>
    .dg113b-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg113b-glow { fill: none; stroke: var(--dg-accent); stroke-width: 3.5; opacity: 0; animation: dg113bGlow 12s linear infinite; }
    @keyframes dg113bGlow { 0% { opacity: .1 } 33% { opacity: .4 } 66% { opacity: .7 } 96% { opacity: 1 } 100% { opacity: .1 } }
    .dg113b-cool { fill: none; stroke: var(--dg-cool); stroke-width: 3; }
    .dg113b-warm { fill: none; stroke: var(--dg-warm); stroke-width: 3; }
    .dg113b-dash { fill: none; stroke: var(--dg-warm); stroke-width: 2.5; stroke-dasharray: 7 5; }
    .dg113b-cooltip { fill: var(--dg-cool); }
    .dg113b-warmtip { fill: var(--dg-warm); }
    .lecture-diagram text.dg113b-t { font-size: 13px; font-weight: 700; text-anchor: middle; }
    .lecture-diagram text.dg113b-s { font-size: 11px; fill: var(--dg-muted); text-anchor: middle; }
    .lecture-diagram text.dg113b-l { font-size: 11px; }
    .lecture-diagram text.dg113b-k { font-size: 12.5px; font-weight: 700; fill: var(--dg-accent); text-anchor: middle; }

    .dg113b-pulse { fill: var(--dg-accent); }
    .dg113b-p1 { transform: translate(476px, 126px); animation: dg113bLoop 4s linear infinite; }
    .dg113b-p2 { transform: translate(423px, 253px); animation: dg113bLoop 4s linear infinite; }
    .dg113b-p3 { transform: translate(367px, 227px); animation: dg113bLoop 4s linear infinite; }
    @keyframes dg113bLoop {
      0%   { transform: translate(415px, 116px) }
      14%  { transform: translate(476px, 126px) }
      28%  { transform: translate(526px, 154px) }
      40%  { transform: translate(556px, 196px) }
      48%  { transform: translate(559px, 236px) }
      56%  { transform: translate(490px, 250px) }
      68%  { transform: translate(423px, 253px) }
      80%  { transform: translate(367px, 227px) }
      92%  { transform: translate(336px, 172px) }
      100% { transform: translate(415px, 116px) }
    }
    .dg113b-w1 { animation: dg113bShow 12s linear infinite 0s; }
    .dg113b-w2 { animation: dg113bShow 12s linear infinite -8s; }
    .dg113b-w3 { animation: dg113bShow 12s linear infinite -4s; }
    @keyframes dg113bShow { 0%, 32% { opacity: 1 } 33.4%, 100% { opacity: 0 } }

    .dg113b-drive { fill: var(--dg-cool); transform: translate(123px, 166px); animation: dg113bDrive 4s linear infinite; }
    @keyframes dg113bDrive {
      0%   { transform: translate(96px, 206px); opacity: 0 }
      10%  { opacity: 1 }
      33%  { transform: translate(123px, 166px) }
      66%  { transform: translate(168px, 139px) }
      92%  { opacity: 1 }
      100% { transform: translate(222px, 126px); opacity: 0 }
    }
  </style>

  <rect x="235" y="6" width="170" height="46" rx="9" class="dg113b-box"/>
  <text x="320" y="25" class="dg113b-t">Higher centers</text>
  <text x="320" y="42" class="dg113b-s">hyperesthesia, referred pain</text>

  <rect x="225" y="92" width="190" height="68" rx="10" class="dg113b-box"/>
  <rect x="225" y="92" width="190" height="68" rx="10" class="dg113b-glow"/>
  <text x="320" y="112" class="dg113b-t">Spinal cord interneuron</text>
  <text x="320" y="130" class="dg113b-s">two inputs: more than their sum</text>
  <text x="320" y="147" class="dg113b-s">firing threshold reduced</text>

  <rect x="12" y="206" width="138" height="60" rx="10" class="dg113b-box"/>
  <text x="81" y="230" class="dg113b-t">Inflamed viscus</text>
  <text x="81" y="248" class="dg113b-s">nociceptors, mediators</text>

  <rect x="490" y="206" width="138" height="60" rx="10" class="dg113b-box"/>
  <text x="559" y="230" class="dg113b-t">Somatic tissue</text>
  <text x="559" y="248" class="dg113b-s">strain, somatic dysfunction</text>

  <line x1="320" y1="92" x2="320" y2="66" class="dg113b-warm"/>
  <polygon points="313,66 327,66 320,53" class="dg113b-warmtip"/>
  <text x="330" y="80" class="dg113b-l">ascending tracts</text>

  <path d="M96 206 C110 160 170 130 212 127" class="dg113b-cool"/>
  <polygon points="211,120 225,126 212,134" class="dg113b-cooltip"/>
  <text x="30" y="168" class="dg113b-l">visceral afferent</text>

  <path d="M415 116 C480 116 540 150 554 194" class="dg113b-warm"/>
  <polygon points="547,195 561,191 559,206" class="dg113b-warmtip"/>
  <text x="440" y="104" class="dg113b-l">alpha motor and autonomic output</text>

  <path d="M490 250 C420 268 350 240 337 174" class="dg113b-cool"/>
  <polygon points="330,176 344,173 335,160" class="dg113b-cooltip"/>
  <text x="410" y="284" class="dg113b-l" text-anchor="middle">somatic afferent: back to the same spot</text>

  <path d="M262 160 C258 210 210 238 164 238" class="dg113b-dash"/>
  <polygon points="165,231 165,245 151,238" class="dg113b-warmtip"/>
  <text x="170" y="266" class="dg113b-l">altered autonomic outflow</text>

  <text x="432" y="192" class="dg113b-k">output becomes input</text>
  <text x="432" y="209" class="dg113b-s">cycles up with each pass</text>

  <circle r="4" class="dg113b-drive"/>
  <g class="dg113b-w1"><circle r="5" class="dg113b-pulse dg113b-p1"/></g>
  <g class="dg113b-w2"><circle r="8" class="dg113b-pulse dg113b-p2"/></g>
  <g class="dg113b-w3"><circle r="12" class="dg113b-pulse dg113b-p3"/></g>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv73-dvt-to-pe-route"] = {
  title: "From leg DVT to pulmonary embolus",
  caption:
    "A piece of a proximal deep leg vein clot breaks off, travels up the inferior vena cava, through the right atrium and right ventricle, " +
    "and lodges in the pulmonary artery where the vessels narrow. As in the lecture's 'simple plumbing' picture, flow backs up behind the block: " +
    "the right ventricle strains and can fail, and less blood reaches the left heart, which is how a big clot causes syncope, shock and death.",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Schematic of a clot fragment travelling from a deep leg vein through the inferior vena cava, right atrium and right ventricle into the pulmonary artery, where it lodges in the narrowing branches. Arrows show flow backing up toward the right ventricle, and a note shows less blood reaching the left heart.">
  <style>
    .dg73a-vessel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg73a-tick   { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .dg73a-lbl    { font-size: 12px; font-weight: 700; }
    .dg73a-sub    { font-size: 11px; fill: var(--dg-muted); }
    .dg73a-clot   { fill: var(--dg-warm); }
    .dg73a-ghost  { fill: none; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg73a-flow   { stroke: var(--dg-cool); stroke-width: 3; fill: none; }
    .dg73a-back   { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg73a-warn   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg73a-move { animation: dg73a-travel 6s ease-in-out infinite; }
    @keyframes dg73a-travel {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { transform: translateX(0);     opacity: 1 }
      55%  { transform: translateX(428px); opacity: 1 }
      90%  { transform: translateX(428px); opacity: 1 }
      100% { transform: translateX(428px); opacity: 0 }
    }
    .dg73a-pulse { animation: dg73a-strain 6s ease-in-out infinite; }
    @keyframes dg73a-strain {
      0%, 50%  { opacity: .35 }
      65%, 90% { opacity: 1 }
      100%     { opacity: .35 }
    }
  </style>

  <rect x="30" y="112" width="400" height="36" rx="18" class="dg73a-vessel"/>
  <polygon points="420,112 500,121 500,139 420,148" class="dg73a-vessel"/>
  <polygon points="498,121 612,64 616,74 502,131" class="dg73a-vessel"/>
  <polygon points="502,129 616,186 612,196 498,139" class="dg73a-vessel"/>

  <line x1="140" y1="104" x2="140" y2="156" class="dg73a-tick"/>
  <line x1="230" y1="104" x2="230" y2="156" class="dg73a-tick"/>
  <line x1="330" y1="104" x2="330" y2="156" class="dg73a-tick"/>
  <line x1="420" y1="104" x2="420" y2="156" class="dg73a-tick"/>

  <text x="36" y="96" class="dg73a-lbl">Proximal leg DVT</text>
  <text x="36" y="82" class="dg73a-sub">iliac, femoral, popliteal</text>
  <text x="170" y="96" class="dg73a-lbl">IVC</text>
  <text x="240" y="96" class="dg73a-lbl">Right atrium</text>
  <text x="336" y="96" class="dg73a-lbl">Right ventricle</text>
  <text x="430" y="58" class="dg73a-lbl">Pulmonary artery</text>

  <line x1="40" y1="130" x2="410" y2="130" class="dg73a-flow" stroke-dasharray="2 10" opacity=".7"/>
  <polygon points="408,124 420,130 408,136" fill="var(--dg-cool)"/>

  <ellipse cx="490" cy="130" rx="14" ry="10" class="dg73a-ghost"/>
  <text x="436" y="172" class="dg73a-sub">clot lodges where</text>
  <text x="436" y="186" class="dg73a-sub">vessels narrow</text>

  <g class="dg73a-move">
    <ellipse cx="62" cy="130" rx="14" ry="10" class="dg73a-clot"/>
  </g>

  <g class="dg73a-pulse">
    <line x1="410" y1="206" x2="300" y2="206" class="dg73a-back" stroke-width="5" stroke-linecap="round"/>
    <polygon points="302,196 282,206 302,216" class="dg73a-back"/>
    <text x="36" y="211" class="dg73a-warn">Flow backs up: RV strains and can fail</text>
  </g>

  <text x="36" y="250" class="dg73a-lbl">Less blood reaches the left heart</text>
  <text x="36" y="266" class="dg73a-sub">low output: syncope, shock, death with a large clot</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv73-anticoag-vs-lysis"] = {
  title: "Anticoagulate vs lyse",
  caption:
    "Left: an anticoagulant stops new clot from being added, so propagation and recurrence fall, but the existing clot stays the same size and is cleared " +
    "later by the body's own fibrinolysis, fragmentation or organization. Right: a thrombolytic (tPA, streptokinase, urokinase) turns plasminogen into plasmin " +
    "and actually dissolves the clot. Because lysis carries the major bleeding risk, it is reserved for massive PE with shock (systolic pressure below 90 mm Hg).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two panels. Left, anticoagulant: new clot material approaching an existing clot fades away before joining, and the clot keeps its size. Right, thrombolytic: plasminogen is converted to plasmin and the clot shrinks toward a small dashed outline.">
  <style>
    .dg73b-panel  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg73b-vessel { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg73b-head   { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg73b-lbl    { font-size: 12px; font-weight: 700; }
    .dg73b-sub    { font-size: 11px; fill: var(--dg-muted); }
    .dg73b-clot   { fill: var(--dg-warm); }
    .dg73b-ghost  { fill: none; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg73b-bit    { fill: var(--dg-warm); opacity: .8; }
    .dg73b-stop   { stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; }
    .dg73b-enz    { fill: var(--dg-cool); }
    .dg73b-good   { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg73b-warn   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg73b-feed { animation: dg73b-approach 4s ease-in infinite; }
    @keyframes dg73b-approach {
      0%   { transform: translateX(0);     opacity: 0 }
      15%  { opacity: .9 }
      70%  { transform: translateX(-70px); opacity: .9 }
      85%  { transform: translateX(-80px); opacity: 0 }
      100% { transform: translateX(-80px); opacity: 0 }
    }
    .dg73b-shrink { transform-box: fill-box; transform-origin: center; animation: dg73b-lyse 5s ease-in-out infinite; }
    @keyframes dg73b-lyse {
      0%, 10%  { transform: scale(1) }
      70%, 90% { transform: scale(.35) }
      100%     { transform: scale(1) }
    }
    .dg73b-flow { animation: dg73b-drift 5s linear infinite; }
    @keyframes dg73b-drift {
      0%   { transform: translateX(0);    opacity: 0 }
      20%  { opacity: 1 }
      70%  { transform: translateX(60px); opacity: 1 }
      100% { transform: translateX(70px); opacity: 0 }
    }
  </style>

  <rect x="10" y="10" width="300" height="270" rx="12" class="dg73b-panel"/>
  <rect x="330" y="10" width="300" height="270" rx="12" class="dg73b-panel"/>

  <text x="26" y="36" class="dg73b-head">Anticoagulant</text>
  <text x="26" y="54" class="dg73b-sub">heparin, LMWH, NOACs, warfarin</text>
  <rect x="26" y="84" width="268" height="60" rx="30" class="dg73b-vessel"/>
  <ellipse cx="120" cy="114" rx="44" ry="22" class="dg73b-clot"/>
  <line x1="182" y1="94" x2="182" y2="134" class="dg73b-stop"/>
  <g class="dg73b-feed">
    <circle cx="262" cy="104" r="6" class="dg73b-bit"/>
    <circle cx="250" cy="124" r="5" class="dg73b-bit"/>
  </g>
  <text x="194" y="164" class="dg73b-sub">new clot blocked</text>
  <text x="26" y="196" class="dg73b-good">Prevents propagation and recurrence</text>
  <text x="26" y="220" class="dg73b-warn">Does NOT lyse the existing clot</text>
  <text x="26" y="244" class="dg73b-sub">body clears it: fibrinolysis, fragmentation,</text>
  <text x="26" y="260" class="dg73b-sub">organization. Stable PE and DVT.</text>

  <text x="346" y="36" class="dg73b-head">Thrombolytic</text>
  <text x="346" y="54" class="dg73b-sub">tPA, streptokinase, urokinase</text>
  <rect x="346" y="84" width="268" height="60" rx="30" class="dg73b-vessel"/>
  <ellipse cx="520" cy="114" rx="44" ry="22" class="dg73b-ghost" opacity=".45"/>
  <ellipse cx="520" cy="114" rx="15" ry="8" class="dg73b-ghost"/>
  <ellipse cx="520" cy="114" rx="44" ry="22" class="dg73b-clot dg73b-shrink"/>
  <g class="dg73b-flow">
    <circle cx="398" cy="104" r="5" class="dg73b-enz"/>
    <circle cx="410" cy="124" r="5" class="dg73b-enz"/>
  </g>
  <text x="352" y="164" class="dg73b-sub">plasminogen to plasmin</text>
  <text x="346" y="196" class="dg73b-good">Dissolves the clot</text>
  <text x="346" y="220" class="dg73b-warn">Major risk: bleeding, incl. brain</text>
  <text x="346" y="244" class="dg73b-sub">for massive PE: shock, systolic</text>
  <text x="346" y="260" class="dg73b-sub">pressure below 90 mm Hg</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv61-srebp-scap"] = {
  title: "SREBP-SCAP: the cholesterol sensor",
  caption:
    "Top lane: when cholesterol is high it binds SCAP, and the SCAP-SREBP complex is trapped in the ER membrane, so HMG CoA reductase is not transcribed. " +
    "Bottom lane: when cholesterol is low, SCAP-SREBP travels to the Golgi, SCAP activates proteases that cut SREBP, and the released DNA-binding domain enters the nucleus, binds the SRE and switches on HMG CoA reductase and other cholesterol-synthesis genes. " +
    "Statins lower hepatocyte cholesterol and so drive the bottom lane (Slides 25 and 29).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two lanes. With high cholesterol, cholesterol binds SCAP and SREBP stays in the endoplasmic reticulum, so the HMG CoA reductase gene is off. With low cholesterol, SCAP-SREBP moves to the Golgi, is cleaved by proteases, and the DNA-binding fragment enters the nucleus, binds the SRE and turns on HMG CoA reductase transcription.">
  <style>
    .dg61a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg61a-dim   { opacity: .45; }
    .dg61a-lane  { font-size: 13px; font-weight: 700; }
    .dg61a-lbl   { font-size: 12px; font-weight: 700; }
    .dg61a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg61a-hi    { fill: var(--dg-warm); }
    .dg61a-lo    { fill: var(--dg-cool); }
    .dg61a-on    { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg61a-off   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg61a-arrow { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg61a-head  { fill: var(--dg-ink); }
    .dg61a-block { stroke: var(--dg-warm); stroke-width: 3; }
    .dg61a-pill  { fill: var(--dg-accent); }
    .dg61a-pilltxt { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg61a-stuck { animation: dg61aStuck 2.4s ease-in-out infinite; }
    @keyframes dg61aStuck { 0%,100% { transform: translateX(0) } 30% { transform: translateX(14px) } 45% { transform: translateX(0) } }
    .dg61a-move { animation: dg61aMove 6s ease-in-out infinite; }
    @keyframes dg61aMove {
      0%   { transform: translateX(0);     opacity: 1 }
      35%  { transform: translateX(215px); opacity: 1 }
      50%  { transform: translateX(215px); opacity: 0 }
      100% { transform: translateX(215px); opacity: 0 }
    }
    .dg61a-frag { opacity: 0; animation: dg61aFrag 6s ease-in-out infinite; }
    @keyframes dg61aFrag {
      0%, 45% { transform: translateX(0);     opacity: 0 }
      50%     { transform: translateX(0);     opacity: 1 }
      80%     { transform: translateX(200px); opacity: 1 }
      100%    { transform: translateX(200px); opacity: 1 }
    }
    .dg61a-glow { animation: dg61aGlow 6s ease-in-out infinite; }
    @keyframes dg61aGlow { 0%, 75% { opacity: .35 } 85%, 100% { opacity: 1 } }
  </style>

  <text x="20" y="22" class="dg61a-lane dg61a-hi">Cholesterol HIGH</text>
  <rect x="20" y="34" width="170" height="92" rx="12" class="dg61a-box"/>
  <text x="32" y="54" class="dg61a-lbl">ER membrane</text>
  <g class="dg61a-stuck">
    <rect x="36" y="76" width="118" height="24" rx="12" class="dg61a-pill"/>
    <text x="48" y="92" class="dg61a-pilltxt">SCAP-SREBP</text>
    <circle cx="164" cy="88" r="8" class="dg61a-hi"/>
  </g>
  <text x="32" y="118" class="dg61a-sub">cholesterol bound to SCAP</text>
  <line x1="196" y1="80" x2="244" y2="80" class="dg61a-arrow dg61a-dim"/>
  <line x1="212" y1="68" x2="230" y2="92" class="dg61a-block"/>
  <line x1="230" y1="68" x2="212" y2="92" class="dg61a-block"/>
  <rect x="250" y="34" width="160" height="92" rx="12" class="dg61a-box dg61a-dim"/>
  <text x="262" y="54" class="dg61a-lbl dg61a-dim">Golgi</text>
  <text x="262" y="92" class="dg61a-sub">no cleavage</text>
  <rect x="450" y="34" width="170" height="92" rx="12" class="dg61a-box"/>
  <text x="462" y="54" class="dg61a-lbl">Nucleus</text>
  <text x="462" y="86" class="dg61a-off">HMG CoA reductase</text>
  <text x="462" y="104" class="dg61a-off">gene OFF</text>

  <line x1="20" y1="146" x2="620" y2="146" stroke="var(--dg-line)" stroke-width="1" stroke-dasharray="4 4"/>

  <text x="20" y="172" class="dg61a-lane dg61a-lo">Cholesterol LOW</text>
  <rect x="20" y="184" width="170" height="96" rx="12" class="dg61a-box"/>
  <text x="32" y="204" class="dg61a-lbl">ER membrane</text>
  <text x="32" y="270" class="dg61a-sub">SCAP free of cholesterol</text>
  <path d="M192 236 L244 236" class="dg61a-arrow"/>
  <polygon points="244,230 254,236 244,242" class="dg61a-head"/>
  <rect x="256" y="184" width="160" height="96" rx="12" class="dg61a-box"/>
  <text x="268" y="204" class="dg61a-lbl">Golgi</text>
  <text x="268" y="270" class="dg61a-sub">proteases cleave SREBP</text>
  <path d="M418 236 L444 236" class="dg61a-arrow"/>
  <polygon points="444,230 454,236 444,242" class="dg61a-head"/>
  <rect x="456" y="184" width="164" height="96" rx="12" class="dg61a-box"/>
  <text x="468" y="204" class="dg61a-lbl">Nucleus: binds SRE</text>
  <g class="dg61a-glow">
    <text x="468" y="258" class="dg61a-on">HMG CoA reductase ON</text>
  </g>
  <text x="468" y="274" class="dg61a-sub">transcription rises</text>

  <g class="dg61a-move">
    <rect x="36" y="224" width="118" height="24" rx="12" class="dg61a-pill"/>
    <text x="48" y="240" class="dg61a-pilltxt">SCAP-SREBP</text>
  </g>
  <g class="dg61a-frag">
    <rect x="286" y="224" width="96" height="24" rx="12" class="dg61a-pill"/>
    <text x="294" y="240" class="dg61a-pilltxt">DNA-binding</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv61-enterohepatic"] = {
  title: "Enterohepatic circulation of bile salts",
  caption:
    "Bile salts made from cholesterol in the liver (7-alpha-hydroxylase is the rate-limiting step) are stored in the gallbladder, emulsify fat in the intestine, and are mostly reabsorbed (over 95% at the ileum per Slide 35) to return to the liver by the portal vein. " +
    "The small fraction lost in feces is how bile acid excretion removes cholesterol from the body. " +
    "Cholestyramine and dietary fiber trap bile salts in the gut, widening that exit and lowering cholesterol (Slides 31 and 35).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A loop: liver makes bile salts from cholesterol, bile flows to the gallbladder for storage and then to the intestine where bile salts emulsify fat; most bile salts are reabsorbed at the ileum and return to the liver through the portal vein. A small fraction exits in feces, and cholestyramine or fiber increase that loss.">
  <style>
    .dg61b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg61b-lbl  { font-size: 13px; font-weight: 700; }
    .dg61b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg61b-loop { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-linecap: round; stroke-dasharray: 10 12; animation: dg61bFlow 2.2s linear infinite; }
    @keyframes dg61bFlow { from { stroke-dashoffset: 44 } to { stroke-dashoffset: 0 } }
    .dg61b-head { fill: var(--dg-accent); }
    .dg61b-exit { stroke: var(--dg-warm); stroke-width: 4; fill: none; }
    .dg61b-exithead { fill: var(--dg-warm); }
    .dg61b-exitlbl { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg61b-pulse { animation: dg61bPulse 2.2s ease-in-out infinite; }
    @keyframes dg61bPulse { 0%,100% { opacity: .5 } 50% { opacity: 1 } }
    .dg61b-in   { stroke: var(--dg-cool); stroke-width: 3; fill: none; }
    .dg61b-inhead { fill: var(--dg-cool); }
    .dg61b-inlbl { font-size: 11px; font-weight: 700; fill: var(--dg-cool); }
  </style>

  <path d="M170 76 L236 76" class="dg61b-loop"/>
  <path d="M356 76 L436 76" class="dg61b-loop"/>
  <path d="M520 112 L520 184" class="dg61b-loop"/>
  <path d="M440 224 L150 224 L150 116" class="dg61b-loop"/>
  <polygon points="232,70 244,76 232,82" class="dg61b-head"/>
  <polygon points="432,70 444,76 432,82" class="dg61b-head"/>
  <polygon points="514,180 520,192 526,180" class="dg61b-head"/>
  <polygon points="144,120 150,108 156,120" class="dg61b-head"/>

  <rect x="30" y="40" width="140" height="72" rx="12" class="dg61b-box"/>
  <text x="44" y="66" class="dg61b-lbl">Liver</text>
  <text x="44" y="84" class="dg61b-sub">cholesterol to</text>
  <text x="44" y="98" class="dg61b-sub">primary bile acids</text>

  <rect x="244" y="44" width="112" height="64" rx="12" class="dg61b-box"/>
  <text x="256" y="70" class="dg61b-lbl">Gallbladder</text>
  <text x="256" y="90" class="dg61b-sub">stores bile</text>

  <rect x="444" y="40" width="170" height="72" rx="12" class="dg61b-box"/>
  <text x="456" y="64" class="dg61b-lbl">Intestine</text>
  <text x="456" y="82" class="dg61b-sub">bile salts emulsify fat;</text>
  <text x="456" y="96" class="dg61b-sub">bacteria make secondary</text>

  <rect x="444" y="192" width="170" height="64" rx="12" class="dg61b-box"/>
  <text x="456" y="216" class="dg61b-lbl">Ileum</text>
  <text x="456" y="236" class="dg61b-sub">most reabsorbed (over 95%)</text>

  <text x="200" y="214" class="dg61b-sub">portal vein back to the liver</text>
  <text x="190" y="66" class="dg61b-sub">bile duct</text>

  <path d="M60 188 L60 124" class="dg61b-in"/>
  <polygon points="54,128 60,116 66,128" class="dg61b-inhead"/>
  <text x="20" y="204" class="dg61b-inlbl">7-alpha-hydroxylase</text>
  <text x="20" y="218" class="dg61b-sub">rate-limiting step</text>

  <g class="dg61b-pulse">
    <path d="M580 258 L580 284 L484 284" class="dg61b-exit"/>
    <polygon points="488,278 476,284 488,290" class="dg61b-exithead"/>
  </g>
  <text x="170" y="270" class="dg61b-exitlbl">Feces: bile salts lost here remove cholesterol</text>
  <text x="170" y="288" class="dg61b-sub">cholestyramine and fiber trap bile salts here</text>
</svg>`,
};

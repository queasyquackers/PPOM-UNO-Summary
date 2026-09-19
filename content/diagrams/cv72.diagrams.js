window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv72 - Pharmacological Management of Dyslipidemia (M. Pino, PhD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv72-lipoprotein-drug-sites"] = {
  title: "Lipoprotein traffic and where the drugs hit it",
  caption:
    "Top row: dietary fat absorbed in the small intestine leaves as a chylomicron (ApoB-48); <strong>lipoprotein lipase (LPL)</strong> in the endothelium unloads its triglyceride, sending free fatty acids to muscle and fat and remnants to the liver. " +
    "Bottom row: the liver exports VLDL, and LPL acts again to make IDL and then LDL (ApoB-100), which is cleared by the LDL receptor (Slides 6-7, 11). " +
    "Red tags block a step (ezetimibe at absorption, niacin at VLDL secretion, lomitapide at MTP assembly); green tags boost a step (fibrates, omega-3s and evinacumab raise lipase activity; statins, resins, PCSK9 inhibitors and inclisiran raise receptor number).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two-row lipoprotein pathway. Top row: small intestine, chylomicron with ApoB-48, lipoprotein lipase in the endothelium, then free fatty acids to muscle and fat and remnants returning to the liver. Bottom row: liver exports VLDL, lipoprotein lipase converts VLDL to IDL and IDL to LDL, and LDL binds the LDL receptor through ApoB-100. Ezetimibe blocks intestinal absorption, niacin lowers VLDL secretion, lomitapide blocks MTP assembly of ApoB-48 and ApoB-100 particles, fibrates, omega-3 fatty acids and evinacumab increase lipoprotein lipase, and statins, resins, PCSK9 inhibitors and inclisiran increase LDL receptors.">
  <style>
    .dg72a-track { stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg72a-ret   { stroke: var(--dg-muted); stroke-width: 1.6; stroke-dasharray: 5 4; fill: none; }
    .dg72a-bx    { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg72a-lpl   { fill: var(--dg-panel); stroke: var(--dg-good); stroke-width: 2; }
    .dg72a-hd    { font-size: 11px; font-weight: 700; }
    .dg72a-sm    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg72a-pt    { font-size: 10px; font-weight: 700; fill: var(--dg-cool); }
    .dg72a-blk   { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }
    .dg72a-bst   { font-size: 10px; font-weight: 700; fill: var(--dg-good); }
    .dg72a-dot   { fill: var(--dg-cool); }
    .dg72a-d1 { animation: dg72aFlow 5s linear infinite; }
    .dg72a-d2 { animation: dg72aFlow 5s linear infinite 2.5s; }
    .dg72a-d3 { animation: dg72aFlow 5s linear infinite 1.25s; }
    .dg72a-d4 { animation: dg72aFlow 5s linear infinite 3.75s; }
    @keyframes dg72aFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      90%  { opacity: 1 }
      100% { transform: translateX(480px); opacity: 0 }
    }
    .dg72a-tag { animation: dg72aTag 5s ease-in-out infinite; }
    @keyframes dg72aTag { 0%, 100% { opacity: .55 } 50% { opacity: 1 } }
  </style>

  <line x1="75" y1="85" x2="565" y2="85" class="dg72a-track"/>
  <line x1="75" y1="195" x2="565" y2="195" class="dg72a-track"/>
  <g class="dg72a-d1"><circle cx="80" cy="85" r="7" class="dg72a-dot"/></g>
  <g class="dg72a-d2"><circle cx="80" cy="85" r="7" class="dg72a-dot"/></g>
  <g class="dg72a-d3"><circle cx="80" cy="195" r="6" class="dg72a-dot"/></g>
  <g class="dg72a-d4"><circle cx="80" cy="195" r="6" class="dg72a-dot"/></g>

  <path d="M562 108 L562 140 L75 140 L75 172" class="dg72a-ret"/>
  <text x="320" y="134" text-anchor="middle" class="dg72a-sm">remnants return to the liver</text>

  <rect x="20" y="62" width="110" height="46" rx="9" class="dg72a-bx"/>
  <text x="75" y="81" text-anchor="middle" class="dg72a-hd">Small intestine</text>
  <text x="75" y="97" text-anchor="middle" class="dg72a-sm">absorbs dietary fat</text>

  <text x="197" y="77" text-anchor="middle" class="dg72a-pt">chylomicron</text>
  <text x="197" y="103" text-anchor="middle" class="dg72a-sm">ApoB-48</text>

  <rect x="265" y="62" width="110" height="46" rx="9" class="dg72a-lpl"/>
  <text x="320" y="81" text-anchor="middle" class="dg72a-hd">LPL (endothelium)</text>
  <text x="320" y="97" text-anchor="middle" class="dg72a-sm">hydrolyzes TG</text>

  <text x="440" y="77" text-anchor="middle" class="dg72a-pt">TG unloaded</text>

  <rect x="505" y="62" width="115" height="46" rx="9" class="dg72a-bx"/>
  <text x="562" y="81" text-anchor="middle" class="dg72a-hd">FFA to muscle, fat</text>
  <text x="562" y="97" text-anchor="middle" class="dg72a-sm">remnants to liver</text>

  <rect x="20" y="172" width="110" height="46" rx="9" class="dg72a-bx"/>
  <text x="75" y="191" text-anchor="middle" class="dg72a-hd">Liver</text>
  <text x="75" y="207" text-anchor="middle" class="dg72a-sm">exports VLDL</text>

  <text x="160" y="187" text-anchor="middle" class="dg72a-pt">VLDL</text>

  <rect x="190" y="172" width="100" height="46" rx="9" class="dg72a-lpl"/>
  <text x="240" y="191" text-anchor="middle" class="dg72a-hd">LPL</text>
  <text x="240" y="207" text-anchor="middle" class="dg72a-sm">VLDL &#8594; IDL</text>

  <text x="320" y="187" text-anchor="middle" class="dg72a-pt">IDL</text>

  <rect x="350" y="172" width="100" height="46" rx="9" class="dg72a-lpl"/>
  <text x="400" y="191" text-anchor="middle" class="dg72a-hd">LPL</text>
  <text x="400" y="207" text-anchor="middle" class="dg72a-sm">IDL &#8594; LDL</text>

  <text x="478" y="187" text-anchor="middle" class="dg72a-pt">LDL</text>

  <rect x="505" y="172" width="115" height="46" rx="9" class="dg72a-bx"/>
  <text x="562" y="191" text-anchor="middle" class="dg72a-hd">LDL receptor</text>
  <text x="562" y="207" text-anchor="middle" class="dg72a-sm">binds ApoB-100</text>

  <g class="dg72a-tag">
    <text x="75" y="50" text-anchor="middle" class="dg72a-blk">ezetimibe &#8595; absorption</text>
    <text x="320" y="50" text-anchor="middle" class="dg72a-bst">&#8593; LPL: fibrates, omega-3, evinacumab</text>
    <text x="75" y="238" text-anchor="middle" class="dg72a-blk">niacin &#8595; VLDL secretion</text>
    <text x="562" y="238" text-anchor="middle" class="dg72a-bst">&#8593; receptors: statins, resins,</text>
    <text x="562" y="252" text-anchor="middle" class="dg72a-bst">PCSK9 inhibitors, inclisiran</text>
    <text x="20" y="278" class="dg72a-blk">lomitapide blocks MTP: no ApoB-48 chylomicron or ApoB-100 VLDL assembly</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv72-ldl-receptor-cycle"] = {
  title: "The LDL receptor cycle and PCSK9",
  caption:
    "LDL docks on its receptor through ApoB-100 and is taken in by <strong>receptor-mediated endocytosis</strong>; the LDL is broken down and the receptor normally <strong>recycles to the surface</strong> to clear more (Slide 9). " +
    "PCSK9 diverts the receptor to destruction instead. Alirocumab and evolocumab neutralize PCSK9, and inclisiran stops it being made, so receptors stay at the membrane (Slides 25-26). " +
    "Statins, resins and bempedoic acid work from the other side: less cholesterol in the hepatocyte means more receptors are made. The takeaway is the lecturer's: LDL clearance depends on receptor number, not just diet.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="An LDL particle binds its receptor on the hepatocyte membrane through ApoB-100 and enters by receptor-mediated endocytosis into an endosome. From the endosome the receptor either recycles back to the membrane or, when tagged by PCSK9, goes to the lysosome and is destroyed. PCSK9 antibodies alirocumab and evolocumab and the mRNA-silencing drug inclisiran block the destruction path. Statins, bile acid resins and bempedoic acid lower cell cholesterol so more receptors are made.">
  <style>
    .dg72b-mem   { stroke: var(--dg-ink); stroke-width: 3; }
    .dg72b-rec   { stroke: var(--dg-accent); stroke-width: 3; fill: none; stroke-linecap: round; }
    .dg72b-ldl   { fill: var(--dg-cool); }
    .dg72b-ves   { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg72b-lys   { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg72b-cyc   { stroke: var(--dg-good); stroke-width: 3; fill: none; }
    .dg72b-cyh   { fill: var(--dg-good); }
    .dg72b-deg   { stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 6 4; fill: none; }
    .dg72b-bar   { stroke: var(--dg-good); stroke-width: 6; stroke-linecap: round; }
    .dg72b-hd    { font-size: 11px; font-weight: 700; }
    .dg72b-sm    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg72b-gd    { font-size: 10px; font-weight: 700; fill: var(--dg-good); }
    .dg72b-wm    { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }
    .dg72b-bx    { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 1.5; }
    .dg72b-in  { animation: dg72bIn 6s ease-in-out infinite; }
    @keyframes dg72bIn {
      0%   { transform: translate(0, 0);      opacity: 0 }
      10%  { opacity: 1 }
      40%  { transform: translate(70px, 38px) }
      75%  { transform: translate(70px, 112px); opacity: 1 }
      90%  { transform: translate(70px, 112px); opacity: 0 }
      100% { transform: translate(0, 0);      opacity: 0 }
    }
    .dg72b-back { animation: dg72bBack 6s ease-in-out infinite; }
    @keyframes dg72bBack {
      0%, 55% { transform: translate(0, 0);        opacity: 0 }
      62%     { opacity: 1 }
      95%     { transform: translate(106px, -64px); opacity: 1 }
      100%    { transform: translate(106px, -64px); opacity: 0 }
    }
    .dg72b-flash { animation: dg72bFlash 3s ease-in-out infinite; }
    @keyframes dg72bFlash { 0%, 100% { opacity: .45 } 50% { opacity: 1 } }
  </style>

  <text x="24" y="28" class="dg72b-sm">blood</text>
  <text x="24" y="124" class="dg72b-sm">hepatocyte</text>
  <line x1="20" y1="104" x2="420" y2="104" class="dg72b-mem"/>

  <path d="M160 104 L160 90 M152 82 L160 90 L168 82" class="dg72b-rec"/>
  <path d="M290 104 L290 90 M282 82 L290 90 L298 82" class="dg72b-rec"/>
  <path d="M360 104 L360 90 M352 82 L360 90 L368 82" class="dg72b-rec"/>
  <text x="325" y="72" text-anchor="middle" class="dg72b-sm">LDL receptors</text>

  <g class="dg72b-in"><circle cx="90" cy="44" r="10" class="dg72b-ldl"/></g>
  <circle cx="90" cy="44" r="10" class="dg72b-ldl" opacity=".35"/>
  <text x="108" y="36" class="dg72b-hd">LDL</text>
  <text x="108" y="50" class="dg72b-sm">ligand: ApoB-100</text>

  <circle cx="160" cy="170" r="26" class="dg72b-ves"/>
  <text x="160" y="167" text-anchor="middle" class="dg72b-sm">endosome</text>
  <text x="160" y="179" text-anchor="middle" class="dg72b-sm">LDL broken down</text>
  <text x="54" y="160" class="dg72b-sm">receptor-mediated</text>
  <text x="54" y="172" class="dg72b-sm">endocytosis</text>

  <line x1="182" y1="156" x2="282" y2="112" class="dg72b-cyc"/>
  <polygon points="276,106 292,108 282,120" class="dg72b-cyh"/>
  <text x="248" y="158" class="dg72b-gd">receptor recycles</text>
  <g class="dg72b-back"><circle cx="184" cy="170" r="5" fill="var(--dg-accent)"/></g>

  <g class="dg72b-flash">
    <line x1="160" y1="196" x2="160" y2="250" class="dg72b-deg"/>
    <text x="54" y="226" class="dg72b-wm">PCSK9 tag</text>
  </g>
  <line x1="138" y1="222" x2="182" y2="222" class="dg72b-bar"/>
  <text x="190" y="226" class="dg72b-gd">blocked by PCSK9 inhibitors, inclisiran</text>
  <rect x="112" y="252" width="96" height="36" rx="8" class="dg72b-lys"/>
  <text x="160" y="268" text-anchor="middle" class="dg72b-wm">lysosome</text>
  <text x="160" y="281" text-anchor="middle" class="dg72b-sm">receptor destroyed</text>

  <rect x="440" y="18" width="186" height="62" rx="8" class="dg72b-bx"/>
  <text x="450" y="37" class="dg72b-hd">Alirocumab, evolocumab</text>
  <text x="450" y="53" class="dg72b-sm">antibody neutralizes PCSK9</text>
  <text x="450" y="68" class="dg72b-sm">SQ every 2 weeks or monthly</text>

  <rect x="440" y="92" width="186" height="62" rx="8" class="dg72b-bx"/>
  <text x="450" y="111" class="dg72b-hd">Inclisiran</text>
  <text x="450" y="127" class="dg72b-sm">binds PCSK9 mRNA, none is made</text>
  <text x="450" y="142" class="dg72b-sm">SQ twice a year</text>

  <rect x="440" y="166" width="186" height="62" rx="8" class="dg72b-bx"/>
  <text x="450" y="185" class="dg72b-hd">Statins, resins, bempedoic acid</text>
  <text x="450" y="201" class="dg72b-sm">less cholesterol in the cell</text>
  <text x="450" y="216" class="dg72b-sm">&#8594; more receptors made</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv72-cholesterol-synthesis"] = {
  title: "Cholesterol synthesis, bile acids and the drug blocks",
  caption:
    "Cholesterol is built from acetyl-CoA via HMG-CoA; <strong>HMG-CoA reductase</strong> is the rate-limiting step and is competitively inhibited by statins, while <strong>bempedoic acid</strong> blocks further upstream at <strong>ATP citrate lyase</strong> (citrate to acetyl-CoA). " +
    "The liver spends cholesterol making bile acids through <strong>7-alpha-hydroxylase</strong>, the rate-limiting step of bile acid synthesis: resins increase it, fibrates decrease it, which leaves more cholesterol in bile and causes gallstones (Slides 13, 16, 23, 29). " +
    "Every LDL-lowering step here ends the same way - less cholesterol inside the hepatocyte, more LDL receptors, lower plasma LDL.",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="A left-to-right pathway: citrate to acetyl-CoA by ATP citrate lyase, blocked by bempedoic acid; acetyl-CoA to HMG-CoA; HMG-CoA to cholesterol by HMG-CoA reductase, the rate-limiting step, blocked by statins; cholesterol to bile acids by 7-alpha-hydroxylase, increased by bile acid resins and decreased by fibrates, which causes gallstones. Below, less hepatocyte cholesterol leads to more LDL receptors and lower plasma LDL.">
  <style>
    .dg72c-track { stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg72c-bx    { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg72c-hd    { font-size: 11px; font-weight: 700; }
    .dg72c-en    { font-size: 9.5px; fill: var(--dg-cool); font-weight: 700; }
    .dg72c-sm    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg72c-wm    { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }
    .dg72c-gd    { font-size: 10px; font-weight: 700; fill: var(--dg-good); }
    .dg72c-x     { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg72c-res   { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 1.5; }
    .dg72c-ar    { stroke: var(--dg-good); stroke-width: 2; fill: none; }
    .dg72c-dot   { fill: var(--dg-cool); }
    .dg72c-d1 { animation: dg72cFlow 5s linear infinite; }
    .dg72c-d2 { animation: dg72cFlow 5s linear infinite 2.5s; }
    @keyframes dg72cFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      90%  { opacity: 1 }
      100% { transform: translateX(520px); opacity: 0 }
    }
    .dg72c-blk { animation: dg72cBlk 2.5s ease-in-out infinite; }
    @keyframes dg72cBlk { 0%, 100% { opacity: .4 } 50% { opacity: 1 } }
  </style>

  <line x1="65" y1="120" x2="585" y2="120" class="dg72c-track"/>
  <g class="dg72c-d1"><circle cx="65" cy="120" r="6" class="dg72c-dot"/></g>
  <g class="dg72c-d2"><circle cx="65" cy="120" r="6" class="dg72c-dot"/></g>

  <rect x="20"  y="98" width="90" height="44" rx="9" class="dg72c-bx"/>
  <text x="65"  y="124" text-anchor="middle" class="dg72c-hd">Citrate</text>
  <rect x="150" y="98" width="90" height="44" rx="9" class="dg72c-bx"/>
  <text x="195" y="124" text-anchor="middle" class="dg72c-hd">Acetyl-CoA</text>
  <rect x="280" y="98" width="90" height="44" rx="9" class="dg72c-bx"/>
  <text x="325" y="124" text-anchor="middle" class="dg72c-hd">HMG-CoA</text>
  <rect x="410" y="98" width="90" height="44" rx="9" class="dg72c-bx"/>
  <text x="455" y="124" text-anchor="middle" class="dg72c-hd">Cholesterol</text>
  <rect x="540" y="98" width="90" height="44" rx="9" class="dg72c-bx"/>
  <text x="585" y="124" text-anchor="middle" class="dg72c-hd">Bile acids</text>

  <text x="130" y="86" text-anchor="middle" class="dg72c-en">ATP citrate lyase</text>
  <text x="390" y="72" text-anchor="middle" class="dg72c-en">HMG-CoA reductase</text>
  <text x="390" y="86" text-anchor="middle" class="dg72c-sm">rate-limiting step</text>
  <text x="560" y="86" text-anchor="middle" class="dg72c-en">7-alpha-hydroxylase</text>

  <g class="dg72c-blk">
    <line x1="130" y1="106" x2="130" y2="134" class="dg72c-x"/>
    <line x1="390" y1="106" x2="390" y2="134" class="dg72c-x"/>
  </g>
  <text x="130" y="40" text-anchor="middle" class="dg72c-wm">bempedoic acid</text>
  <text x="130" y="54" text-anchor="middle" class="dg72c-sm">blocks, less myopathy</text>
  <text x="390" y="40" text-anchor="middle" class="dg72c-wm">statins</text>
  <text x="390" y="54" text-anchor="middle" class="dg72c-sm">competitive inhibitors</text>
  <text x="560" y="40" text-anchor="middle" class="dg72c-gd">resins &#8593;</text>
  <text x="560" y="54" text-anchor="middle" class="dg72c-wm">fibrates &#8595; = gallstones</text>

  <path d="M455 142 L455 176" class="dg72c-ar"/>
  <polygon points="449,172 455,184 461,172" fill="var(--dg-good)"/>
  <rect x="200" y="186" width="420" height="42" rx="9" class="dg72c-res"/>
  <text x="410" y="204" text-anchor="middle" class="dg72c-gd">less cholesterol in the hepatocyte &#8594; more LDL receptors</text>
  <text x="410" y="220" text-anchor="middle" class="dg72c-sm">&#8594; LDL pulled out of plasma (statins 25-45%, resins about 30%)</text>
</svg>`,
};

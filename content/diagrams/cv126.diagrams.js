window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv126 - Primary push and compensatory pull on the pH (Slides 4, 9).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv126-compensation"] = {
  title: "Primary process, then compensation",
  caption:
    "Each lane is one of the four simple disorders on Slide 9, read the way Dr. Gindi reads an ABG: 7.4 is the dividing line, not the ends of the normal range. " +
    "The primary process pushes the pH away from 7.4, then compensation pulls it back but stops short, because the body does not overcorrect. " +
    "Primary and compensatory values always move in the same direction. Marker positions are schematic, not measured pH values.",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Four lanes, one per simple acid-base disorder. In each lane the pH marker is pushed away from 7.4 by the primary change, then pulled back toward 7.4 by compensation but never reaches it. Respiratory acidosis: PCO2 up, HCO3- up. Respiratory alkalosis: PCO2 down, HCO3- down. Metabolic acidosis: HCO3- down, PCO2 down. Metabolic alkalosis: HCO3- up, PCO2 up.">
  <style>
    .dg126a-name { font-size: 13px; font-weight: 700; }
    .dg126a-sub  { font-size: 11px; }
    .dg126a-tag  { font-size: 10px; }
    .dg126a-head { font-size: 11px; font-weight: 700; }
    .lecture-diagram text.dg126a-mute { fill: var(--dg-muted); }
    .lecture-diagram text.dg126a-acid { fill: var(--dg-warm); }
    .lecture-diagram text.dg126a-alk  { fill: var(--dg-cool); }
    .lecture-diagram text.dg126a-comp { fill: var(--dg-good); }
    .dg126a-track { stroke: var(--dg-line); stroke-width: 2; }
    .dg126a-mid   { stroke: var(--dg-ink); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg126a-ghosta { fill: none; stroke: var(--dg-warm); stroke-width: 1.5; stroke-dasharray: 3 3; }
    .dg126a-ghostb { fill: none; stroke: var(--dg-cool); stroke-width: 1.5; stroke-dasharray: 3 3; }
    .dg126a-dota { fill: var(--dg-warm); }
    .dg126a-dotb { fill: var(--dg-cool); }
    .dg126a-pull { stroke: var(--dg-good); stroke-width: 2.5; }
    .dg126a-head-good { fill: var(--dg-good); }
    .dg126a-l { animation: dg126aL 6.5s ease-in-out infinite; }
    .dg126a-r { animation: dg126aR 6.5s ease-in-out infinite; }
    .dg126a-c { animation: dg126aC 6.5s ease-in-out infinite; }
    @keyframes dg126aL {
      0%, 8%    { transform: translateX(30px) }
      36%, 50%  { transform: translateX(-50px) }
      80%, 100% { transform: translateX(0) }
    }
    @keyframes dg126aR {
      0%, 8%    { transform: translateX(-30px) }
      36%, 50%  { transform: translateX(50px) }
      80%, 100% { transform: translateX(0) }
    }
    @keyframes dg126aC {
      0%, 48%   { opacity: .3 }
      64%, 100% { opacity: 1 }
    }
  </style>

  <text x="10" y="20" class="dg126a-head">Disorder and primary change</text>
  <text x="250" y="20" class="dg126a-head dg126a-acid" text-anchor="middle">acidemic</text>
  <text x="336" y="20" class="dg126a-head" text-anchor="middle">pH 7.4</text>
  <text x="422" y="20" class="dg126a-head dg126a-alk" text-anchor="middle">alkalemic</text>
  <text x="474" y="20" class="dg126a-head dg126a-comp">Compensation</text>

  <line x1="336" y1="28" x2="336" y2="270" class="dg126a-mid"/>

  <text x="10" y="56" class="dg126a-name">Respiratory acidosis</text>
  <text x="10" y="72" class="dg126a-sub">Primary: PCO2 &#8593;</text>
  <line x1="226" y1="62" x2="446" y2="62" class="dg126a-track"/>
  <circle cx="256" cy="62" r="7" class="dg126a-ghosta"/>
  <text x="256" y="48" class="dg126a-tag dg126a-mute" text-anchor="middle">primary</text>
  <line x1="266" y1="62" x2="292" y2="62" class="dg126a-pull"/>
  <polygon points="292,57 300,62 292,67" class="dg126a-head-good"/>
  <text x="306" y="48" class="dg126a-tag dg126a-comp" text-anchor="middle">after</text>
  <g class="dg126a-l"><circle cx="306" cy="62" r="8" class="dg126a-dota"/></g>
  <g class="dg126a-c">
    <text x="474" y="56" class="dg126a-name dg126a-comp">HCO3- &#8593;</text>
    <text x="474" y="72" class="dg126a-sub">kidneys keep bicarb</text>
  </g>

  <text x="10" y="116" class="dg126a-name">Respiratory alkalosis</text>
  <text x="10" y="132" class="dg126a-sub">Primary: PCO2 &#8595;</text>
  <line x1="226" y1="122" x2="446" y2="122" class="dg126a-track"/>
  <circle cx="416" cy="122" r="7" class="dg126a-ghostb"/>
  <text x="416" y="108" class="dg126a-tag dg126a-mute" text-anchor="middle">primary</text>
  <line x1="406" y1="122" x2="380" y2="122" class="dg126a-pull"/>
  <polygon points="380,117 372,122 380,127" class="dg126a-head-good"/>
  <text x="366" y="108" class="dg126a-tag dg126a-comp" text-anchor="middle">after</text>
  <g class="dg126a-r"><circle cx="366" cy="122" r="8" class="dg126a-dotb"/></g>
  <g class="dg126a-c">
    <text x="474" y="116" class="dg126a-name dg126a-comp">HCO3- &#8595;</text>
    <text x="474" y="132" class="dg126a-sub">kidneys get rid of bicarb</text>
  </g>

  <text x="10" y="176" class="dg126a-name">Metabolic acidosis</text>
  <text x="10" y="192" class="dg126a-sub">Primary: HCO3- &#8595;</text>
  <line x1="226" y1="182" x2="446" y2="182" class="dg126a-track"/>
  <circle cx="256" cy="182" r="7" class="dg126a-ghosta"/>
  <text x="256" y="168" class="dg126a-tag dg126a-mute" text-anchor="middle">primary</text>
  <line x1="266" y1="182" x2="292" y2="182" class="dg126a-pull"/>
  <polygon points="292,177 300,182 292,187" class="dg126a-head-good"/>
  <text x="306" y="168" class="dg126a-tag dg126a-comp" text-anchor="middle">after</text>
  <g class="dg126a-l"><circle cx="306" cy="182" r="8" class="dg126a-dota"/></g>
  <g class="dg126a-c">
    <text x="474" y="176" class="dg126a-name dg126a-comp">PCO2 &#8595;</text>
    <text x="474" y="192" class="dg126a-sub">lungs blow off CO2</text>
  </g>

  <text x="10" y="236" class="dg126a-name">Metabolic alkalosis</text>
  <text x="10" y="252" class="dg126a-sub">Primary: HCO3- &#8593;</text>
  <line x1="226" y1="242" x2="446" y2="242" class="dg126a-track"/>
  <circle cx="416" cy="242" r="7" class="dg126a-ghostb"/>
  <text x="416" y="228" class="dg126a-tag dg126a-mute" text-anchor="middle">primary</text>
  <line x1="406" y1="242" x2="380" y2="242" class="dg126a-pull"/>
  <polygon points="380,237 372,242 380,247" class="dg126a-head-good"/>
  <text x="366" y="228" class="dg126a-tag dg126a-comp" text-anchor="middle">after</text>
  <g class="dg126a-r"><circle cx="366" cy="242" r="8" class="dg126a-dotb"/></g>
  <g class="dg126a-c">
    <text x="474" y="236" class="dg126a-name dg126a-comp">PCO2 &#8593;</text>
    <text x="474" y="252" class="dg126a-sub">you breathe less</text>
  </g>

  <text x="320" y="292" class="dg126a-sub dg126a-mute" text-anchor="middle">Dashed ring: pushed by the primary process. Solid dot: after compensation, still short of 7.4.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv126 - CHF back pressure versus ARDS barrier leak (Slides 39, 42).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv126-wedge-leak"] = {
  title: "Same white lungs, different cause",
  caption:
    "The balloon of a Swan-Ganz catheter sits at the start of the pulmonary capillaries and reads the back pressure coming from the left heart. " +
    "In CHF a failing left ventricle sends pressure back through the capillaries, and that pressure pushes fluid out, so PCWP is above 18 mm Hg. " +
    "In ARDS the left ventricle pumps normally and pressure stays normal or low, but the barrier is violated and fluid leaks through it. " +
    "Cutoffs are this lecture's (Slides 37, 39 and 42).",
  svg: `
<svg viewBox="0 0 640 286" role="img" aria-label="Two panels. Left, CHF: a failing left ventricle sends back pressure through the pulmonary capillary, fluid is pushed into the alveolus across an intact barrier, and wedge pressure is above 18 millimetres of mercury. Right, ARDS: the left ventricle pumps normally, wedge pressure is 18 or less, and fluid leaks through gaps in a damaged barrier.">
  <style>
    .dg126b-title { font-size: 14px; font-weight: 700; }
    .dg126b-lbl   { font-size: 11px; }
    .dg126b-val   { font-size: 14px; font-weight: 700; }
    .lecture-diagram text.dg126b-mute { fill: var(--dg-muted); }
    .lecture-diagram text.dg126b-warm { fill: var(--dg-warm); }
    .lecture-diagram text.dg126b-good { fill: var(--dg-good); }
    .dg126b-air  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg126b-cap  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg126b-heart { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg126b-wall { stroke: var(--dg-ink); stroke-width: 3; }
    .dg126b-brk  { stroke: var(--dg-ink); stroke-width: 3; stroke-dasharray: 16 14; }
    .dg126b-flu  { fill: var(--dg-cool); }
    .dg126b-back { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg126b-backh { fill: var(--dg-warm); }
    .dg126b-fwd  { stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; }
    .dg126b-fwdh { fill: var(--dg-good); }
    .dg126b-bal  { fill: var(--dg-accent); }
    .dg126b-cath { stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg126b-rise { animation: dg126bRise 3.2s ease-in infinite; }
    .dg126b-rise2 { animation: dg126bRise 3.2s ease-in infinite 1.1s; }
    .dg126b-rise3 { animation: dg126bRise 3.2s ease-in infinite 2.1s; }
    .dg126b-wave { animation: dg126bWave 1.6s ease-in-out infinite; }
    @keyframes dg126bRise {
      0%   { transform: translateY(46px); opacity: 0 }
      25%  { opacity: 1 }
      100% { transform: translateY(0); opacity: 1 }
    }
    @keyframes dg126bWave {
      0%, 100% { opacity: .45 }
      50%      { opacity: 1 }
    }
  </style>

  <text x="10" y="20" class="dg126b-title">CHF: too much pressure</text>
  <rect x="52" y="34" width="210" height="60" rx="10" class="dg126b-air"/>
  <text x="62" y="52" class="dg126b-lbl dg126b-mute">alveolus</text>
  <line x1="52" y1="100" x2="262" y2="100" class="dg126b-wall"/>
  <text x="262" y="114" class="dg126b-lbl dg126b-mute" text-anchor="end">barrier intact</text>
  <rect x="52" y="118" width="210" height="44" rx="8" class="dg126b-cap"/>
  <text x="62" y="176" class="dg126b-lbl dg126b-mute">pulmonary capillary</text>
  <rect x="266" y="112" width="44" height="56" rx="8" class="dg126b-heart"/>
  <text x="288" y="136" class="dg126b-lbl" text-anchor="middle">Left</text>
  <text x="288" y="150" class="dg126b-lbl" text-anchor="middle">heart</text>
  <line x1="10" y1="140" x2="46" y2="140" class="dg126b-cath"/>
  <circle cx="54" cy="140" r="10" class="dg126b-bal"/>
  <g class="dg126b-wave">
    <line x1="244" y1="140" x2="100" y2="140" class="dg126b-back"/>
    <polygon points="100,131 82,140 100,149" class="dg126b-backh"/>
  </g>
  <circle cx="110" cy="74" r="6" class="dg126b-flu dg126b-rise"/>
  <circle cx="160" cy="66" r="6" class="dg126b-flu dg126b-rise2"/>
  <circle cx="210" cy="76" r="6" class="dg126b-flu dg126b-rise3"/>
  <text x="10" y="204" class="dg126b-val dg126b-warm">PCWP above 18 mm Hg</text>
  <text x="10" y="224" class="dg126b-lbl">Failing left ventricle: sluggish on ultrasound</text>
  <text x="10" y="242" class="dg126b-lbl">Back pressure pushes fluid out</text>
  <text x="10" y="260" class="dg126b-lbl">Pleural effusions on x-ray</text>

  <line x1="322" y1="10" x2="322" y2="270" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="334" y="20" class="dg126b-title">ARDS: a violated barrier</text>
  <rect x="376" y="34" width="210" height="60" rx="10" class="dg126b-air"/>
  <text x="386" y="52" class="dg126b-lbl dg126b-mute">alveolus</text>
  <line x1="376" y1="100" x2="586" y2="100" class="dg126b-brk"/>
  <text x="586" y="114" class="dg126b-lbl dg126b-mute" text-anchor="end">barrier damaged</text>
  <rect x="376" y="118" width="210" height="44" rx="8" class="dg126b-cap"/>
  <text x="386" y="176" class="dg126b-lbl dg126b-mute">pulmonary capillary</text>
  <rect x="590" y="112" width="44" height="56" rx="8" class="dg126b-heart"/>
  <text x="612" y="136" class="dg126b-lbl" text-anchor="middle">Left</text>
  <text x="612" y="150" class="dg126b-lbl" text-anchor="middle">heart</text>
  <line x1="334" y1="140" x2="370" y2="140" class="dg126b-cath"/>
  <circle cx="378" cy="140" r="10" class="dg126b-bal"/>
  <line x1="410" y1="140" x2="550" y2="140" class="dg126b-fwd"/>
  <polygon points="550,131 568,140 550,149" class="dg126b-fwdh"/>
  <circle cx="405" cy="76" r="6" class="dg126b-flu dg126b-rise"/>
  <circle cx="465" cy="66" r="6" class="dg126b-flu dg126b-rise2"/>
  <circle cx="525" cy="76" r="6" class="dg126b-flu dg126b-rise3"/>
  <text x="334" y="204" class="dg126b-val dg126b-good">PCWP 18 mm Hg or less</text>
  <text x="334" y="224" class="dg126b-lbl">Left ventricle pumps normally</text>
  <text x="334" y="242" class="dg126b-lbl">Pressure is normal or low; the leak is the problem</text>
  <text x="334" y="260" class="dg126b-lbl">White out, usually no effusions</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv126 - PEEP keeps the alveolus open during exhalation (Slides 45-46).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv126-peep-exhale"] = {
  title: "What PEEP adds during exhalation",
  caption:
    "Both alveoli have the protein exudate of ARDS between them and the capillary. Without PEEP the machine shuts off and exhalation is passive, so the alveolus shrinks to the dashed ring. " +
    "With PEEP the machine still blows a little air, so the alveolus stays open at the larger dashed ring. " +
    "The extra open time adds gas exchange during exhalation, which is why he wants at least 5 cm H2O and probably more. Ring sizes are schematic.",
  svg: `
<svg viewBox="0 0 640 276" role="img" aria-label="Two alveoli with exudate breathing side by side. Without PEEP the alveolus shrinks far on exhalation. With PEEP of at least 5 centimetres of water it stays open, and oxygen keeps crossing to the capillary during exhalation.">
  <style>
    .dg126c-title { font-size: 14px; font-weight: 700; }
    .dg126c-lbl   { font-size: 11px; }
    .lecture-diagram text.dg126c-mute { fill: var(--dg-muted); }
    .lecture-diagram text.dg126c-acc  { fill: var(--dg-accent); }
    .dg126c-way  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg126c-alv  { fill: var(--dg-cool); opacity: .28; stroke: var(--dg-cool); stroke-width: 2; transform-box: fill-box; transform-origin: center; }
    .dg126c-ring { fill: none; stroke: var(--dg-ink); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg126c-exu  { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg126c-cap  { fill: var(--dg-warm); opacity: .35; }
    .dg126c-o2   { fill: var(--dg-good); }
    .dg126c-a { animation: dg126cA 4.5s ease-in-out infinite; }
    .dg126c-b { animation: dg126cB 4.5s ease-in-out infinite; }
    .dg126c-g1 { animation: dg126cG1 4.5s linear infinite; }
    .dg126c-g2 { animation: dg126cG2 4.5s linear infinite; }
    @keyframes dg126cA {
      0%, 100% { transform: scale(1) }
      55%, 70% { transform: scale(.52) }
    }
    @keyframes dg126cB {
      0%, 100% { transform: scale(1) }
      55%, 70% { transform: scale(.8) }
    }
    @keyframes dg126cG1 {
      0%, 100% { transform: translateY(-34px); opacity: 0 }
      6%       { transform: translateY(-34px); opacity: 1 }
      34%      { transform: translateY(0); opacity: 1 }
      40%      { transform: translateY(0); opacity: 0 }
    }
    @keyframes dg126cG2 {
      0%, 46%  { transform: translateY(-34px); opacity: 0 }
      52%      { transform: translateY(-34px); opacity: 1 }
      84%      { transform: translateY(0); opacity: 1 }
      92%, 100% { transform: translateY(0); opacity: 0 }
    }
  </style>

  <text x="20" y="20" class="dg126c-title">Without PEEP</text>
  <rect x="146" y="30" width="28" height="64" class="dg126c-way"/>
  <circle cx="160" cy="112" r="50" class="dg126c-alv dg126c-a"/>
  <circle cx="160" cy="112" r="26" class="dg126c-ring"/>
  <path d="M84 170 Q160 196 236 170 L236 182 Q160 208 84 182 Z" class="dg126c-exu"/>
  <path d="M84 188 Q160 214 236 188 L236 204 Q160 230 84 204 Z" class="dg126c-cap"/>
  <circle cx="160" cy="196" r="5" class="dg126c-o2 dg126c-g1"/>
  <text x="246" y="182" class="dg126c-lbl dg126c-mute">exudate</text>
  <text x="246" y="204" class="dg126c-lbl dg126c-mute">capillary</text>
  <text x="20" y="246" class="dg126c-lbl">Machine shuts off on exhalation; air leaves passively</text>
  <text x="20" y="264" class="dg126c-lbl">Gas exchange happens mainly on inhalation</text>

  <line x1="322" y1="10" x2="322" y2="268" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="340" y="20" class="dg126c-title">With PEEP (at least 5 cm H2O)</text>
  <rect x="466" y="30" width="28" height="64" class="dg126c-way"/>
  <circle cx="480" cy="112" r="50" class="dg126c-alv dg126c-b"/>
  <circle cx="480" cy="112" r="40" class="dg126c-ring"/>
  <path d="M404 170 Q480 196 556 170 L556 182 Q480 208 404 182 Z" class="dg126c-exu"/>
  <path d="M404 188 Q480 214 556 188 L556 204 Q480 230 404 204 Z" class="dg126c-cap"/>
  <circle cx="462" cy="194" r="5" class="dg126c-o2 dg126c-g1"/>
  <circle cx="498" cy="194" r="5" class="dg126c-o2 dg126c-g2"/>
  <text x="566" y="182" class="dg126c-lbl dg126c-mute">exudate</text>
  <text x="566" y="204" class="dg126c-lbl dg126c-mute">capillary</text>
  <text x="340" y="246" class="dg126c-lbl">Machine still blows a little air; alveolus stays open</text>
  <text x="340" y="264" class="dg126c-lbl dg126c-acc">Gas exchange continues during exhalation</text>
</svg>`,
};

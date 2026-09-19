window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv59 - Pathophysiology: Acid-Base Disorders (J. Leheste, PhD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv59-anion-gap-bars"] = {
  title: "Where the lost bicarbonate goes",
  caption:
    "Plasma stays electroneutral: the Na+ column always equals the anion column. Normal values are this lecture's " +
    "(Slide 13): Na+ 140, Cl- 104, HCO3- 24, so the gap of unmeasured anions is <strong>140 - (104 + 24) = 12 mEq/L</strong>. " +
    "Watch the two acidoses lose the same HCO3-. In <strong>increased-gap acidosis</strong> an unmeasured acid anion takes its place, " +
    "so the gap widens by as much as HCO3- falls - the equality the delta-delta tool checks (Slides 14-15). In " +
    "<strong>normal-gap (hyperchloremic) acidosis</strong> chloride fills the space, so the gap does not move (Slide 16). " +
    "The disorder bars are drawn to scale only relative to normal; they are not patient values.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three pairs of stacked bars comparing cations and anions in plasma. In the normal pair, sodium 140 balances chloride 104, bicarbonate 24 and an anion gap of 12. In increased anion gap metabolic acidosis, bicarbonate shrinks and the anion gap grows by the same amount while chloride stays the same. In normal anion gap hyperchloremic metabolic acidosis, bicarbonate shrinks and chloride grows by the same amount while the anion gap stays the same.">
  <style>
    .dg59a-na   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg59a-cl   { fill: var(--dg-cool); opacity: .32; }
    .dg59a-hc   { fill: var(--dg-good); opacity: .6; }
    .dg59a-ag   { fill: var(--dg-warm); opacity: .55; }
    .dg59a-edge { fill: none; stroke: var(--dg-ink); stroke-width: 1.2; opacity: .6; }
    .dg59a-hdr  { font-size: 11px; font-weight: 700; }
    .dg59a-lbl  { font-size: 10px; }
    .dg59a-sub  { font-size: 9px; fill: var(--dg-muted); }
    .dg59a-in   { font-size: 10px; font-weight: 700; }
    .dg59a-shrink { transform-box: fill-box; transform-origin: 50% 100%; animation: dg59aShrink 6s ease-in-out infinite; }
    .dg59a-grow   { transform-box: fill-box; transform-origin: 50% 100%; animation: dg59aGrow 6s ease-in-out infinite; }
    .dg59a-flag   { animation: dg59aFlag 6s ease-in-out infinite; }
    @keyframes dg59aShrink { 0%,18% { transform: scaleY(2) } 58%,100% { transform: scaleY(1) } }
    @keyframes dg59aGrow   { 0%,18% { transform: scaleY(.897) } 58%,100% { transform: scaleY(1) } }
    @keyframes dg59aFlag   { 0%,40% { opacity: .25 } 62%,100% { opacity: 1 } }
  </style>

  <text x="16" y="24" class="dg59a-hdr" fill="var(--dg-accent)">NORMAL</text>
  <text x="226" y="24" class="dg59a-hdr" fill="var(--dg-accent)">INCREASED-GAP ACIDOSIS</text>
  <text x="436" y="24" class="dg59a-hdr" fill="var(--dg-accent)">NORMAL-GAP (HYPERCHLOREMIC)</text>

  <rect x="16" y="50" width="54" height="200" class="dg59a-na"/>
  <text x="43" y="155" class="dg59a-in" text-anchor="middle">Na+</text>
  <text x="43" y="170" class="dg59a-sub" text-anchor="middle">140</text>
  <rect x="74" y="101.4" width="54" height="148.6" class="dg59a-cl"/>
  <rect x="74" y="67.1" width="54" height="34.3" class="dg59a-hc"/>
  <rect x="74" y="50" width="54" height="17.1" class="dg59a-ag"/>
  <rect x="74" y="50" width="54" height="200" class="dg59a-edge"/>
  <text x="134" y="62" class="dg59a-lbl">AG 12</text>
  <text x="134" y="88" class="dg59a-lbl">HCO3- 24</text>
  <text x="134" y="180" class="dg59a-lbl">Cl- 104</text>

  <rect x="226" y="50" width="54" height="200" class="dg59a-na"/>
  <text x="253" y="155" class="dg59a-in" text-anchor="middle">Na+</text>
  <rect x="284" y="101.4" width="54" height="148.6" class="dg59a-cl"/>
  <rect x="284" y="50" width="54" height="51.4" class="dg59a-ag"/>
  <rect x="284" y="84.3" width="54" height="17.1" class="dg59a-hc dg59a-shrink"/>
  <rect x="284" y="50" width="54" height="200" class="dg59a-edge"/>
  <g class="dg59a-flag">
    <text x="344" y="70" class="dg59a-lbl" font-weight="700" fill="var(--dg-warm)">AG up</text>
    <text x="344" y="96" class="dg59a-lbl" fill="var(--dg-good)">HCO3- down</text>
  </g>
  <text x="344" y="180" class="dg59a-lbl">Cl- same</text>

  <rect x="436" y="50" width="54" height="200" class="dg59a-na"/>
  <text x="463" y="155" class="dg59a-in" text-anchor="middle">Na+</text>
  <rect x="494" y="67.1" width="54" height="34.3" class="dg59a-hc"/>
  <rect x="494" y="50" width="54" height="17.1" class="dg59a-ag"/>
  <rect x="494" y="84.3" width="54" height="165.7" fill="var(--dg-surface)" class="dg59a-grow"/>
  <rect x="494" y="84.3" width="54" height="165.7" class="dg59a-cl dg59a-grow"/>
  <rect x="494" y="50" width="54" height="200" class="dg59a-edge"/>
  <text x="554" y="62" class="dg59a-lbl">AG same</text>
  <g class="dg59a-flag">
    <text x="554" y="80" class="dg59a-lbl" fill="var(--dg-good)">HCO3- down</text>
    <text x="554" y="180" class="dg59a-lbl" font-weight="700" fill="var(--dg-cool)">Cl- up</text>
  </g>

  <text x="16" y="270" class="dg59a-sub">cations | anions</text>
  <text x="16" y="286" class="dg59a-sub">gap = Na+ - (Cl- + HCO3-)</text>
  <text x="226" y="270" class="dg59a-sub">acid anion replaces HCO3-</text>
  <text x="226" y="286" class="dg59a-sub">HCO3- fall = gap rise</text>
  <text x="436" y="270" class="dg59a-sub">chloride replaces HCO3-</text>
  <text x="436" y="286" class="dg59a-sub">diarrhea, renal tubular acidosis</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv59-metabolic-acidosis-sequence"] = {
  title: "Metabolic acidosis: the sequence of events",
  caption:
    "The five steps of Slide 28 in order. Fixed H+ is added, HCO3- in the ECF titrates it away (so HCO3- falls), and cells take up " +
    "H+ in exchange for K+ (so plasma K+ rises). The <strong>carotid chemoreceptors</strong> then drive hyperventilation - the immediate " +
    "respiratory compensation that lowers PCO2 and pulls pH back up but leaves PCO2 non-physiologic. Only the <strong>kidney</strong> " +
    "finishes the job, excreting H+ as NH4+ and making new HCO3- over days. Metabolic alkalosis runs the same script in reverse " +
    "(H+ leaves cells for K+, hypoventilation, renal HCO3- excretion).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="Five boxes in a row joined by arrows, lit one after another. Step 1, gain of fixed hydrogen ion, pH falls. Step 2, bicarbonate in extracellular fluid buffers it, bicarbonate falls. Step 3, intracellular buffering by proteins and organic phosphates, hydrogen ion enters cells and potassium leaves, hyperkalemia. Step 4, carotid chemoreceptors drive hyperventilation, PCO2 falls and pH rises. Step 5, the kidney excretes hydrogen ion as ammonium and makes new bicarbonate over days. A time band marks steps 1 to 4 as immediate and step 5 as days.">
  <style>
    .dg59b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg59b-hot  { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; opacity: .15; }
    .dg59b-num  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg59b-t    { font-size: 9.5px; }
    .dg59b-res  { font-size: 10px; font-weight: 700; }
    .dg59b-arr  { stroke: var(--dg-muted); stroke-width: 1.6; }
    .dg59b-head { fill: var(--dg-muted); }
    .dg59b-band { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg59b-sub  { font-size: 9px; fill: var(--dg-muted); }
    .dg59b-s1 { animation: dg59bLit 10s ease-in-out infinite; }
    .dg59b-s2 { animation: dg59bLit 10s ease-in-out infinite 1.6s; }
    .dg59b-s3 { animation: dg59bLit 10s ease-in-out infinite 3.2s; }
    .dg59b-s4 { animation: dg59bLit 10s ease-in-out infinite 4.8s; }
    .dg59b-s5 { animation: dg59bLit 10s ease-in-out infinite 6.4s; }
    @keyframes dg59bLit { 0%,100% { opacity: .15 } 6%,22% { opacity: 1 } 34% { opacity: .15 } }
  </style>

  <text x="14" y="22" class="dg59b-num">SLIDE 28 - FROM ACID LOAD TO RENAL CORRECTION</text>

  <rect x="14" y="42" width="112" height="150" rx="10" class="dg59b-box"/>
  <rect x="14" y="42" width="112" height="150" rx="10" class="dg59b-hot dg59b-s1"/>
  <text x="24" y="62" class="dg59b-num">1 Acid load</text>
  <text x="24" y="82" class="dg59b-t">Gain of fixed H+:</text>
  <text x="24" y="96" class="dg59b-t">production,</text>
  <text x="24" y="110" class="dg59b-t">ingestion, or</text>
  <text x="24" y="124" class="dg59b-t">failed excretion</text>
  <text x="24" y="176" class="dg59b-res" fill="var(--dg-warm)">pH falls</text>

  <rect x="138" y="42" width="112" height="150" rx="10" class="dg59b-box"/>
  <rect x="138" y="42" width="112" height="150" rx="10" class="dg59b-hot dg59b-s2"/>
  <text x="148" y="62" class="dg59b-num">2 ECF buffer</text>
  <text x="148" y="82" class="dg59b-t">HCO3- in blood</text>
  <text x="148" y="96" class="dg59b-t">titrates the</text>
  <text x="148" y="110" class="dg59b-t">excess H+ away</text>
  <text x="148" y="176" class="dg59b-res" fill="var(--dg-warm)">HCO3- falls</text>

  <rect x="262" y="42" width="112" height="150" rx="10" class="dg59b-box"/>
  <rect x="262" y="42" width="112" height="150" rx="10" class="dg59b-hot dg59b-s3"/>
  <text x="272" y="62" class="dg59b-num">3 ICF buffer</text>
  <text x="272" y="82" class="dg59b-t">Proteins, organic</text>
  <text x="272" y="96" class="dg59b-t">phosphates bind H+;</text>
  <text x="272" y="110" class="dg59b-t">H+ enters cells,</text>
  <text x="272" y="124" class="dg59b-t">K+ leaves</text>
  <text x="272" y="176" class="dg59b-res" fill="var(--dg-warm)">hyperkalemia</text>

  <rect x="386" y="42" width="112" height="150" rx="10" class="dg59b-box"/>
  <rect x="386" y="42" width="112" height="150" rx="10" class="dg59b-hot dg59b-s4"/>
  <text x="396" y="62" class="dg59b-num">4 Lungs</text>
  <text x="396" y="82" class="dg59b-t">Carotid chemo-</text>
  <text x="396" y="96" class="dg59b-t">receptors drive</text>
  <text x="396" y="110" class="dg59b-t">hyperventilation</text>
  <text x="396" y="124" class="dg59b-t">(1.2 rule)</text>
  <text x="396" y="162" class="dg59b-res" fill="var(--dg-cool)">PCO2 falls,</text>
  <text x="396" y="176" class="dg59b-res" fill="var(--dg-cool)">pH rises</text>

  <rect x="510" y="42" width="116" height="150" rx="10" class="dg59b-box"/>
  <rect x="510" y="42" width="116" height="150" rx="10" class="dg59b-hot dg59b-s5"/>
  <text x="520" y="62" class="dg59b-num">5 Kidney</text>
  <text x="520" y="82" class="dg59b-t">H+ excreted as</text>
  <text x="520" y="96" class="dg59b-t">NH4+; HCO3-</text>
  <text x="520" y="110" class="dg59b-t">recovered and</text>
  <text x="520" y="124" class="dg59b-t">newly produced</text>
  <text x="520" y="176" class="dg59b-res" fill="var(--dg-good)">correction</text>

  <line x1="126" y1="117" x2="134" y2="117" class="dg59b-arr"/>
  <polygon points="133,112 138,117 133,122" class="dg59b-head"/>
  <line x1="250" y1="117" x2="258" y2="117" class="dg59b-arr"/>
  <polygon points="257,112 262,117 257,122" class="dg59b-head"/>
  <line x1="374" y1="117" x2="382" y2="117" class="dg59b-arr"/>
  <polygon points="381,112 386,117 381,122" class="dg59b-head"/>
  <line x1="498" y1="117" x2="506" y2="117" class="dg59b-arr"/>
  <polygon points="505,112 510,117 505,122" class="dg59b-head"/>

  <rect x="14" y="208" width="484" height="22" rx="6" class="dg59b-band"/>
  <text x="256" y="223" class="dg59b-sub" text-anchor="middle">immediate: buffering and respiratory compensation</text>
  <rect x="510" y="208" width="116" height="22" rx="6" class="dg59b-band"/>
  <text x="568" y="223" class="dg59b-sub" text-anchor="middle">days to a week</text>
  <text x="14" y="250" class="dg59b-sub">Respiratory compensation alone leaves PCO2 non-physiologic; the chronic fix is always renal.</text>
</svg>`,
};

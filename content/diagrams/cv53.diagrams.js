/*
 * cv53 - Control Mechanisms of Respiration
 * (Lecture #53, J. R. Leheste, Ph.D., M.Sc.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Brainstem wiring. A static picture cannot show the one fact students miss:
//    the VRG is SILENT during quiet breathing and only switches on for forced
//    breathing. The diagram alternates between those two states.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv53-brainstem-wiring"] = {
  title: "Who wires onto the DRG",
  caption:
    "Every brainstem center in this lecture is defined by its sign onto the dorsal respiratory group. " +
    "The apneustic center is the only positive input and it sets breathing DEPTH; the pneumotaxic center and the pre-Botzinger complex both inhibit the DRG. " +
    "Watch the right-hand panel cycle: during quiet tidal breathing the ventral respiratory group is dark because it does not fire at all, " +
    "and it only lights up when the state switches to forced inspiration or forced expiration. " +
    "Output always leaves by the phrenic nerve to the diaphragm (Slides 4-5).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Brainstem breathing centers. In the pons, the pneumotaxic center sends an inhibitory input and the apneustic center sends an excitatory input to the dorsal respiratory group in the medulla. The pre-Botzinger complex also inhibits the dorsal respiratory group. The ventral respiratory group is inactive during quiet breathing and becomes active only during forced breathing. Output leaves the medulla through the phrenic nerve to the diaphragm.">
  <style>
    .dg53a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg53a-node  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg53a-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .12em; fill: var(--dg-muted); }
    .dg53a-lbl   { font-size: 11.5px; font-weight: 700; }
    .dg53a-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg53a-tag   { font-size: 10.5px; font-weight: 700; letter-spacing: .08em; }
    .dg53a-ar    { stroke-width: 2.4; fill: none; stroke-linecap: round; }
    .dg53a-pos   { stroke: var(--dg-good); }
    .dg53a-posf  { fill: var(--dg-good); }
    .dg53a-neg   { stroke: var(--dg-warm); }
    .dg53a-negf  { fill: var(--dg-warm); }
    .dg53a-out   { stroke: var(--dg-accent); }
    .dg53a-outf  { fill: var(--dg-accent); }

    .dg53a-quiet  { animation: dg53aQuiet 10s ease-in-out infinite; }
    .dg53a-forced { animation: dg53aForced 10s ease-in-out infinite; }
    @keyframes dg53aQuiet  { 0% { opacity: 1 } 46% { opacity: 1 } 52% { opacity: .18 } 94% { opacity: .18 } 100% { opacity: 1 } }
    @keyframes dg53aForced { 0% { opacity: .18 } 46% { opacity: .18 } 52% { opacity: 1 } 94% { opacity: 1 } 100% { opacity: .18 } }

    .dg53a-spark { animation: dg53aRun 2.5s linear infinite; }
    @keyframes dg53aRun {
      0%   { transform: translateY(0);    opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(66px); opacity: 0 }
    }
  </style>

  <text x="16" y="16" class="dg53a-sub">Cerebral cortex overrides all of these (voluntary breath-hold, voluntary hyperventilation)</text>

  <rect x="16" y="26" width="400" height="62" rx="10" class="dg53a-panel"/>
  <text x="26" y="42" class="dg53a-hd">PONS</text>
  <rect x="30" y="46" width="164" height="34" rx="8" class="dg53a-node"/>
  <text x="112" y="61" class="dg53a-lbl" text-anchor="middle">Pneumotaxic</text>
  <text x="112" y="74" class="dg53a-sub" text-anchor="middle">limits tidal volume; rate</text>
  <rect x="238" y="46" width="164" height="34" rx="8" class="dg53a-node"/>
  <text x="320" y="61" class="dg53a-lbl" text-anchor="middle">Apneustic</text>
  <text x="320" y="74" class="dg53a-sub" text-anchor="middle">breathing intensity / depth</text>

  <line x1="112" y1="84" x2="150" y2="112" class="dg53a-ar dg53a-neg"/>
  <line x1="142" y1="106" x2="160" y2="120" class="dg53a-ar dg53a-neg"/>
  <text x="96" y="106" class="dg53a-tag dg53a-negf">minus</text>

  <line x1="320" y1="84" x2="282" y2="112" class="dg53a-ar dg53a-pos"/>
  <polygon points="286,104 272,120 292,118" class="dg53a-posf"/>
  <text x="330" y="106" class="dg53a-tag dg53a-posf">plus</text>

  <rect x="16" y="112" width="400" height="94" rx="10" class="dg53a-panel"/>
  <text x="26" y="128" class="dg53a-hd">MEDULLARY RESPIRATORY CENTER</text>

  <rect x="26" y="136" width="106" height="52" rx="8" class="dg53a-node"/>
  <text x="79" y="156" class="dg53a-lbl" text-anchor="middle">pre-Botzinger</text>
  <text x="79" y="170" class="dg53a-sub" text-anchor="middle">rhythm</text>
  <text x="79" y="182" class="dg53a-sub" text-anchor="middle">generation</text>

  <line x1="134" y1="162" x2="158" y2="162" class="dg53a-ar dg53a-neg"/>
  <line x1="158" y1="152" x2="158" y2="172" class="dg53a-ar dg53a-neg"/>

  <rect x="164" y="132" width="120" height="60" rx="8" fill="var(--dg-surface)" stroke="var(--dg-accent)" stroke-width="2.6"/>
  <text x="224" y="154" class="dg53a-lbl" text-anchor="middle">DRG</text>
  <text x="224" y="169" class="dg53a-sub" text-anchor="middle">generates inspiration</text>
  <text x="224" y="182" class="dg53a-sub" text-anchor="middle">sets respiratory rate</text>

  <g class="dg53a-forced">
    <rect x="300" y="136" width="106" height="52" rx="8" class="dg53a-node"/>
    <text x="353" y="156" class="dg53a-lbl" text-anchor="middle">VRG</text>
    <text x="353" y="170" class="dg53a-sub" text-anchor="middle">mainly</text>
    <text x="353" y="182" class="dg53a-sub" text-anchor="middle">expiratory</text>
    <line x1="353" y1="192" x2="353" y2="228" class="dg53a-ar dg53a-out"/>
    <polygon points="347,228 353,240 359,228" class="dg53a-outf"/>
  </g>

  <line x1="224" y1="196" x2="224" y2="228" class="dg53a-ar dg53a-out"/>
  <polygon points="218,228 224,240 230,228" class="dg53a-outf"/>
  <g class="dg53a-spark">
    <circle cx="224" cy="198" r="5" class="dg53a-outf"/>
  </g>
  <text x="234" y="220" class="dg53a-sub">phrenic nerve</text>

  <rect x="120" y="244" width="266" height="40" rx="10" class="dg53a-node"/>
  <text x="253" y="262" class="dg53a-lbl" text-anchor="middle">DIAPHRAGM</text>
  <text x="253" y="276" class="dg53a-sub" text-anchor="middle">plus the other respiratory muscles</text>

  <rect x="428" y="26" width="196" height="258" rx="10" class="dg53a-panel"/>
  <g class="dg53a-quiet">
    <text x="444" y="52" class="dg53a-tag dg53a-outf">QUIET (TIDAL) BREATHING</text>
    <text x="444" y="72" class="dg53a-sub">DRG and pre-Botzinger set the</text>
    <text x="444" y="86" class="dg53a-sub">rhythm; pontine centers trim it</text>
    <text x="444" y="106" class="dg53a-lbl">VRG is SILENT</text>
    <text x="444" y="120" class="dg53a-sub">no firing at all</text>
  </g>
  <g class="dg53a-forced">
    <text x="444" y="156" class="dg53a-tag dg53a-outf">FORCED BREATHING</text>
    <text x="444" y="176" class="dg53a-sub">forced inspiration OR forced</text>
    <text x="444" y="190" class="dg53a-sub">expiration recruits the VRG</text>
    <text x="444" y="210" class="dg53a-lbl">VRG ENGAGES</text>
  </g>
  <line x1="444" y1="226" x2="608" y2="226" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="444" y="244" class="dg53a-sub"><tspan class="dg53a-posf">plus</tspan> = excitatory onto DRG</text>
  <text x="444" y="260" class="dg53a-sub"><tspan class="dg53a-negf">minus</tspan> = inhibitory onto DRG</text>
  <text x="444" y="276" class="dg53a-sub">only the apneustic center is plus</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The central chemoreceptor reflex. The point is that it is a LOOP with a
//    specific order, and that the sensed molecule (H+) is not the molecule that
//    started the problem (CO2). Motion carries the particle across the barrier.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv53-central-chemoreceptor-loop"] = {
  title: "CO2 in, hydrogen ion sensed",
  caption:
    "Follow one CO2 molecule. Rising activity raises capillary CO2; because CO2 is lipophilic it crosses into the medulla and the CSF, " +
    "where it re-enters the bicarbonate buffer system and pushes it toward carbonic acid and then bicarbonate plus a proton. " +
    "The central chemoreceptor never senses the CO2 itself - it senses that liberated hydrogen ion, which is why the lecture says pH directly, CO2 indirectly. " +
    "It then releases serotonin onto the DRG, which drives hyperventilation defined as increased frequency AND volume. " +
    "The dashed return arrow closes the loop: blowing off CO2 removes the stimulus (Slides 6-7).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A carbon dioxide molecule made by increased activity raises capillary carbon dioxide, diffuses across into the cerebrospinal fluid of the medulla, and joins the bicarbonate buffer system, forming carbonic acid and then bicarbonate plus a hydrogen ion. The central chemoreceptor senses the hydrogen ion, releases serotonin onto the dorsal respiratory group, and the dorsal respiratory group produces hyperventilation with increased breathing frequency and volume, which blows off carbon dioxide and closes the feedback loop.">
  <style>
    .dg53b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg53b-node  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg53b-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .12em; fill: var(--dg-muted); }
    .dg53b-lbl   { font-size: 11.5px; font-weight: 700; }
    .dg53b-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg53b-rx    { font-size: 12.5px; font-weight: 700; }
    .dg53b-ar    { stroke-width: 2.2; fill: none; stroke-linecap: round; }
    .dg53b-ink   { stroke: var(--dg-ink); }
    .dg53b-acc   { stroke: var(--dg-accent); }
    .dg53b-accf  { fill: var(--dg-accent); }
    .dg53b-warmf { fill: var(--dg-warm); }
    .dg53b-warm  { stroke: var(--dg-warm); }
    .dg53b-goodf { fill: var(--dg-good); }
    .dg53b-good  { stroke: var(--dg-good); }
    .dg53b-wall  { stroke: var(--dg-ink); stroke-width: 2.2; stroke-dasharray: 5 4; opacity: .7; }

    .dg53b-cross { animation: dg53bCross 9s linear infinite; }
    @keyframes dg53bCross {
      0%   { transform: translateX(0);    opacity: 0 }
      6%   { opacity: 1 }
      20%  { transform: translateX(112px); opacity: 1 }
      26%  { transform: translateX(112px); opacity: 0 }
      100% { transform: translateX(112px); opacity: 0 }
    }
    .dg53b-s1 { animation: dg53bStep 9s ease-in-out infinite 1.6s; }
    .dg53b-s2 { animation: dg53bStep 9s ease-in-out infinite 2.5s; }
    .dg53b-s3 { animation: dg53bStep 9s ease-in-out infinite 3.4s; }
    @keyframes dg53bStep { 0% { opacity: .3 } 8% { opacity: 1 } 55% { opacity: 1 } 70% { opacity: .3 } 100% { opacity: .3 } }

    .dg53b-hdrop { animation: dg53bH 9s ease-in-out infinite; }
    @keyframes dg53bH {
      0%   { transform: translate(0,0);     opacity: 0 }
      44%  { transform: translate(0,0);     opacity: 0 }
      50%  { opacity: 1 }
      60%  { transform: translate(-24px,44px); opacity: 1 }
      66%  { transform: translate(-24px,44px); opacity: 0 }
      100% { transform: translate(-24px,44px); opacity: 0 }
    }
    .dg53b-ser { animation: dg53bSer 9s ease-in-out infinite; }
    @keyframes dg53bSer {
      0%   { transform: translateX(0);    opacity: 0 }
      64%  { transform: translateX(0);    opacity: 0 }
      70%  { opacity: 1 }
      80%  { transform: translateX(96px); opacity: 1 }
      86%  { transform: translateX(96px); opacity: 0 }
      100% { transform: translateX(96px); opacity: 0 }
    }
    .dg53b-fire { animation: dg53bFire 9s ease-in-out infinite; }
    @keyframes dg53bFire { 0% { opacity: .3 } 80% { opacity: .3 } 86% { opacity: 1 } 97% { opacity: 1 } 100% { opacity: .3 } }
  </style>

  <rect x="14" y="60" width="132" height="116" rx="10" class="dg53b-panel"/>
  <text x="24" y="76" class="dg53b-hd">CAPILLARY</text>
  <text x="80" y="106" class="dg53b-lbl" text-anchor="middle">CO2 rises</text>
  <text x="80" y="122" class="dg53b-sub" text-anchor="middle">increased activity</text>
  <text x="80" y="146" class="dg53b-sub" text-anchor="middle">CO2 is lipophilic,</text>
  <text x="80" y="158" class="dg53b-sub" text-anchor="middle">so it crosses freely</text>

  <line x1="160" y1="50" x2="160" y2="186" class="dg53b-wall"/>
  <g class="dg53b-cross">
    <circle cx="60" cy="188" r="9" class="dg53b-accf"/>
    <text x="60" y="192" font-size="9" text-anchor="middle" fill="var(--dg-surface)">CO2</text>
  </g>

  <rect x="176" y="40" width="216" height="146" rx="10" class="dg53b-panel"/>
  <text x="186" y="56" class="dg53b-hd">CSF, VENTROLATERAL MEDULLA</text>
  <g class="dg53b-s1">
    <text x="284" y="82" class="dg53b-rx" text-anchor="middle">CO2 + H2O</text>
    <line x1="284" y1="90" x2="284" y2="102" class="dg53b-ar dg53b-acc"/>
    <polygon points="278,102 284,113 290,102" class="dg53b-accf"/>
  </g>
  <g class="dg53b-s2">
    <text x="284" y="130" class="dg53b-rx" text-anchor="middle">H2CO3</text>
    <line x1="284" y1="138" x2="284" y2="148" class="dg53b-ar dg53b-acc"/>
    <polygon points="278,148 284,159 290,148" class="dg53b-accf"/>
  </g>
  <g class="dg53b-s3">
    <text x="262" y="176" class="dg53b-rx" text-anchor="middle">HCO3-</text>
    <text x="316" y="176" class="dg53b-rx dg53b-warmf" text-anchor="middle">+ H+</text>
  </g>
  <g class="dg53b-hdrop">
    <circle cx="326" cy="182" r="6" class="dg53b-warmf"/>
  </g>

  <rect x="176" y="198" width="216" height="46" rx="9" class="dg53b-node"/>
  <text x="284" y="217" class="dg53b-lbl" text-anchor="middle">Central chemoreceptor</text>
  <text x="284" y="233" class="dg53b-sub" text-anchor="middle">senses pH of CSF directly, CO2 indirectly</text>

  <line x1="396" y1="221" x2="452" y2="221" class="dg53b-ar dg53b-good"/>
  <polygon points="452,214 466,221 452,228" class="dg53b-goodf"/>
  <text x="424" y="212" class="dg53b-sub" text-anchor="middle">serotonin</text>
  <g class="dg53b-ser">
    <circle cx="400" cy="221" r="5" class="dg53b-goodf"/>
  </g>

  <rect x="470" y="196" width="156" height="50" rx="9" class="dg53b-node"/>
  <text x="548" y="216" class="dg53b-lbl" text-anchor="middle">DRG</text>
  <text x="548" y="232" class="dg53b-sub" text-anchor="middle">the inspiratory center</text>

  <g class="dg53b-fire">
    <line x1="548" y1="192" x2="548" y2="152" class="dg53b-ar dg53b-acc"/>
    <polygon points="542,152 548,140 554,152" class="dg53b-accf"/>
    <rect x="446" y="76" width="180" height="60" rx="9" fill="var(--dg-surface)" stroke="var(--dg-accent)" stroke-width="2.4"/>
    <text x="536" y="98" class="dg53b-lbl" text-anchor="middle">HYPERVENTILATION</text>
    <text x="536" y="114" class="dg53b-sub" text-anchor="middle">increased frequency</text>
    <text x="536" y="127" class="dg53b-sub" text-anchor="middle">AND increased volume</text>
  </g>

  <path d="M446,92 C380,20 180,16 80,50" class="dg53b-ar dg53b-ink" stroke-dasharray="6 5" opacity=".55"/>
  <polygon points="86,42 68,56 92,58" fill="var(--dg-ink)" opacity=".55"/>
  <text x="266" y="24" class="dg53b-sub" text-anchor="middle">CO2 is blown off, the stimulus is removed, and the loop closes</text>

  <text x="14" y="266" class="dg53b-sub">Expiratory neurons of the ventral respiratory group use GABA, not serotonin.</text>
  <text x="14" y="282" class="dg53b-sub">Central chemoreceptors sit in the rostral, intermediate and caudate areas of the ventrolateral medulla, next door to the DRG.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Altitude. Everything here is one stimulus branching into responses on
//    three different clocks. A static list loses the timing, which is the whole
//    point; the highlight sweeps from the minutes lane down to the weeks lane.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv53-altitude-cascade"] = {
  title: "One stimulus, three clocks",
  caption:
    "A single stimulus, a low inspired PO2, drives responses that arrive on very different timescales, and the sweeping highlight walks through them in order. " +
    "Minutes: hyperventilation blows off CO2, pulls the bicarbonate buffer system to the left and produces respiratory alkalosis, which acetazolamide counters by inhibiting carbonic anhydrase. " +
    "Hours to days: hypoxic pulmonary vasoconstriction raises pulmonary vascular resistance, and if it persists the right ventricle hypertrophies. " +
    "Days to weeks: 2,3-DPG rises because glycolysis is upregulated, right-shifting the curve, and renal EPO produces polycythemia whose cost is viscosity. " +
    "All values are this lecture's (Slide 12).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="High altitude lowers the partial pressure of inspired oxygen to about 47 millimetres of mercury on Mount Everest compared with about 160 at sea level, which lowers alveolar and arterial oxygen. Within minutes, hyperventilation blows off carbon dioxide and causes respiratory alkalosis, treated with acetazolamide. Within hours to days, hypoxic pulmonary vasoconstriction raises pulmonary vascular resistance and can cause right ventricular hypertrophy. Within days to weeks, 2,3-DPG rises and shifts the oxygen hemoglobin curve to the right, and erythropoietin from the kidney causes polycythemia, which increases blood viscosity.">
  <style>
    .dg53c-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .12em; fill: var(--dg-muted); }
    .dg53c-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg53c-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg53c-top   { font-size: 12px; font-weight: 700; }
    .dg53c-box   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg53c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg53c-ar    { stroke-width: 2; fill: none; stroke-linecap: round; }
    .dg53c-acc   { stroke: var(--dg-accent); }
    .dg53c-accf  { fill: var(--dg-accent); }
    .dg53c-warm  { stroke: var(--dg-warm); }
    .dg53c-warmf { fill: var(--dg-warm); }
    .dg53c-cool  { stroke: var(--dg-cool); }
    .dg53c-coolf { fill: var(--dg-cool); }
    .dg53c-goodf { fill: var(--dg-good); }
    .dg53c-good  { stroke: var(--dg-good); }

    .dg53c-l1 { animation: dg53cLane 12s ease-in-out infinite 0.6s; }
    .dg53c-l2 { animation: dg53cLane 12s ease-in-out infinite 4.2s; }
    .dg53c-l3 { animation: dg53cLane 12s ease-in-out infinite 7.8s; }
    @keyframes dg53cLane { 0% { opacity: .34 } 4% { opacity: 1 } 28% { opacity: 1 } 34% { opacity: .34 } 100% { opacity: .34 } }

    .dg53c-drip { animation: dg53cDrip 12s linear infinite; }
    @keyframes dg53cDrip {
      0%   { transform: translateY(0);   opacity: 1 }
      100% { transform: translateY(196px); opacity: 1 }
    }
  </style>

  <rect x="14" y="14" width="612" height="42" rx="9" class="dg53c-panel"/>
  <text x="26" y="34" class="dg53c-top">Inspired PO2 falls: about 160 mmHg where we live, about 47 mmHg on Mount Everest</text>
  <text x="26" y="48" class="dg53c-sub">Lower alveolar PO2, then lower arterial PO2. Hyperventilation is triggered once PaO2 reaches 60 mmHg or lower.</text>

  <line x1="30" y1="60" x2="30" y2="290" stroke="var(--dg-line)" stroke-width="2"/>
  <g class="dg53c-drip">
    <circle cx="30" cy="66" r="5" class="dg53c-accf"/>
  </g>

  <g class="dg53c-l1">
    <text x="44" y="80" class="dg53c-hd">MINUTES</text>
    <rect x="44" y="86" width="116" height="40" rx="8" class="dg53c-box"/>
    <text x="102" y="102" class="dg53c-lbl" text-anchor="middle">Hyperventilation</text>
    <text x="102" y="116" class="dg53c-sub" text-anchor="middle">rate and volume up</text>
    <line x1="162" y1="106" x2="182" y2="106" class="dg53c-ar dg53c-acc"/>
    <polygon points="182,100 194,106 182,112" class="dg53c-accf"/>
    <rect x="198" y="86" width="140" height="40" rx="8" class="dg53c-box"/>
    <text x="268" y="102" class="dg53c-lbl" text-anchor="middle">CO2 blown off</text>
    <text x="268" y="116" class="dg53c-sub" text-anchor="middle">buffer system shifts LEFT</text>
    <line x1="340" y1="106" x2="360" y2="106" class="dg53c-ar dg53c-acc"/>
    <polygon points="360,100 372,106 360,112" class="dg53c-accf"/>
    <rect x="376" y="86" width="118" height="40" rx="8" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="2.2"/>
    <text x="435" y="102" class="dg53c-lbl dg53c-coolf" text-anchor="middle">Respiratory</text>
    <text x="435" y="116" class="dg53c-lbl dg53c-coolf" text-anchor="middle">alkalosis</text>
    <line x1="496" y1="106" x2="516" y2="106" class="dg53c-ar dg53c-good"/>
    <polygon points="516,100 528,106 516,112" class="dg53c-goodf"/>
    <rect x="532" y="86" width="94" height="40" rx="8" class="dg53c-box"/>
    <text x="579" y="102" class="dg53c-lbl" text-anchor="middle">acetazolamide</text>
    <text x="579" y="116" class="dg53c-sub" text-anchor="middle">blocks carb. anhydrase</text>
  </g>

  <g class="dg53c-l2">
    <text x="44" y="150" class="dg53c-hd">HOURS TO DAYS</text>
    <rect x="44" y="156" width="150" height="40" rx="8" class="dg53c-box"/>
    <text x="119" y="172" class="dg53c-lbl" text-anchor="middle">Hypoxic pulmonary</text>
    <text x="119" y="186" class="dg53c-lbl" text-anchor="middle">vasoconstriction</text>
    <line x1="196" y1="176" x2="216" y2="176" class="dg53c-ar dg53c-warm"/>
    <polygon points="216,170 228,176 216,182" class="dg53c-warmf"/>
    <rect x="232" y="156" width="150" height="40" rx="8" class="dg53c-box"/>
    <text x="307" y="172" class="dg53c-lbl" text-anchor="middle">Pulmonary resistance up</text>
    <text x="307" y="186" class="dg53c-sub" text-anchor="middle">PA must push harder</text>
    <line x1="384" y1="176" x2="404" y2="176" class="dg53c-ar dg53c-warm"/>
    <polygon points="404,170 416,176 404,182" class="dg53c-warmf"/>
    <rect x="420" y="156" width="206" height="40" rx="8" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="2.2"/>
    <text x="523" y="172" class="dg53c-lbl dg53c-warmf" text-anchor="middle">Right ventricular hypertrophy</text>
    <text x="523" y="186" class="dg53c-sub" text-anchor="middle">only if the situation persists</text>
  </g>

  <g class="dg53c-l3">
    <text x="44" y="220" class="dg53c-hd">DAYS TO WEEKS</text>
    <rect x="44" y="226" width="150" height="44" rx="8" class="dg53c-box"/>
    <text x="119" y="242" class="dg53c-lbl" text-anchor="middle">2,3-DPG rises</text>
    <text x="119" y="256" class="dg53c-sub" text-anchor="middle">glycolysis upregulated</text>
    <text x="119" y="266" class="dg53c-sub" text-anchor="middle">under hypoxia</text>
    <line x1="196" y1="248" x2="216" y2="248" class="dg53c-ar dg53c-acc"/>
    <polygon points="216,242 228,248 216,254" class="dg53c-accf"/>
    <rect x="232" y="226" width="150" height="44" rx="8" class="dg53c-box"/>
    <text x="307" y="244" class="dg53c-lbl" text-anchor="middle">Curve shifts RIGHT</text>
    <text x="307" y="258" class="dg53c-sub" text-anchor="middle">P50 up, affinity down</text>
    <rect x="420" y="226" width="206" height="44" rx="8" class="dg53c-box"/>
    <text x="523" y="242" class="dg53c-lbl" text-anchor="middle">Kidney EPO, then polycythemia</text>
    <text x="523" y="256" class="dg53c-sub" text-anchor="middle">more O2 capacity, but more viscous</text>
    <text x="523" y="266" class="dg53c-sub" text-anchor="middle">blood is harder to push through the lung</text>
    <line x1="384" y1="248" x2="404" y2="248" class="dg53c-ar dg53c-acc" opacity=".45"/>
  </g>

  <text x="14" y="300" class="dg53c-sub">Acute altitude sickness: headache, fatigue, dizziness, nausea, palpitations, insomnia.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv131 - what happens after Mycobacterium tuberculosis is inhaled (Slide 15).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv131-tb-course"] = {
  title: "Course of tuberculosis after inhalation",
  caption:
    "Inhaled droplet nuclei are engulfed by alveolar macrophages, where the bacilli evade destruction and replicate. " +
    "Recruited lymphocytes and macrophages wall them into a caseating granuloma: the Ghon focus, which with hilar " +
    "lymphadenopathy makes the Ghon complex of primary TB. The branch is the whole lecture - about 90% becomes latent " +
    "TB (dormant, not infectious) and less than 10% continues as primary progressive TB, which favours the upper lobes " +
    "because the apices are more oxygen rich for an aerobe. Latent disease can reactivate later (the lecturer put that " +
    "at roughly 10%), and bloodstream spread from either active form gives miliary or extrapulmonary disease. " +
    "Percentages are this lecture's (Slide 15).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Flow chart: inhaled droplet nuclei enter alveolar macrophages, form a caseating granuloma known as the Ghon complex, and then branch into latent tuberculosis in about ninety percent of people or primary progressive upper lobe tuberculosis in under ten percent, with reactivation from latency and bloodstream spread to miliary or extrapulmonary disease.">
  <style>
    .dg131a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; rx: 9; }
    .dg131a-key   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; rx: 9; }
    .dg131a-lbl   { font-size: 12px; font-weight: 600; }
    .dg131a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg131a-tag   { font-size: 10.5px; font-weight: 700; }
    .dg131a-good  { fill: var(--dg-good); }
    .dg131a-warm  { fill: var(--dg-warm); }
    .dg131a-line  { stroke: var(--dg-ink); stroke-width: 2; fill: none; opacity: .55; }
    .dg131a-flow  { stroke: var(--dg-accent); stroke-width: 2.5; fill: none;
                    stroke-dasharray: 7 7; animation: dg131aflow 1.8s linear infinite; }
    .dg131a-slow  { stroke: var(--dg-warm); stroke-width: 2; fill: none;
                    stroke-dasharray: 4 8; animation: dg131aflow 3.2s linear infinite; }
    .dg131a-head  { fill: var(--dg-ink); opacity: .55; }
    .dg131a-cell  { fill: var(--dg-accent); animation: dg131apulse 3s ease-in-out infinite; }
    .dg131a-cell2 { fill: var(--dg-accent); animation: dg131apulse 3s ease-in-out infinite .8s; }
    @keyframes dg131aflow { to { stroke-dashoffset: -28; } }
    @keyframes dg131apulse { 0%,100% { opacity: .35 } 50% { opacity: 1 } }
  </style>

  <rect class="dg131a-box" x="8" y="118" width="118" height="54"></rect>
  <text class="dg131a-lbl" x="67" y="139" text-anchor="middle">Droplet nuclei</text>
  <text class="dg131a-sub" x="67" y="156" text-anchor="middle">cough, sneeze, speech</text>
  <circle class="dg131a-cell" cx="34" cy="106" r="4"></circle>
  <circle class="dg131a-cell2" cx="56" cy="100" r="3"></circle>
  <circle class="dg131a-cell" cx="78" cy="104" r="3.5"></circle>

  <path class="dg131a-flow" d="M130 145 H 166"></path>
  <polygon class="dg131a-head" points="166,139 178,145 166,151"></polygon>

  <rect class="dg131a-box" x="182" y="118" width="114" height="54"></rect>
  <text class="dg131a-lbl" x="239" y="139" text-anchor="middle">Alveolar</text>
  <text class="dg131a-lbl" x="239" y="154" text-anchor="middle">macrophage</text>

  <path class="dg131a-flow" d="M300 145 H 336"></path>
  <polygon class="dg131a-head" points="336,139 348,145 336,151"></polygon>

  <rect class="dg131a-key" x="352" y="108" width="128" height="74"></rect>
  <text class="dg131a-lbl" x="416" y="128" text-anchor="middle">Caseating</text>
  <text class="dg131a-lbl" x="416" y="143" text-anchor="middle">granuloma</text>
  <text class="dg131a-sub" x="416" y="160" text-anchor="middle">Ghon focus + hilar</text>
  <text class="dg131a-sub" x="416" y="174" text-anchor="middle">nodes = Ghon complex</text>

  <path class="dg131a-line" d="M480 130 H 500 V 62 H 516"></path>
  <polygon class="dg131a-head" points="516,56 528,62 516,68"></polygon>
  <path class="dg131a-line" d="M480 160 H 500 V 216 H 516"></path>
  <polygon class="dg131a-head" points="516,210 528,216 516,222"></polygon>

  <text class="dg131a-tag dg131a-good" x="498" y="96" text-anchor="end">about 90%</text>
  <text class="dg131a-tag dg131a-warm" x="498" y="196" text-anchor="end">under 10%</text>

  <rect class="dg131a-box" x="532" y="36" width="102" height="52"></rect>
  <text class="dg131a-lbl" x="583" y="56" text-anchor="middle">Latent TB</text>
  <text class="dg131a-sub" x="583" y="72" text-anchor="middle">dormant, not</text>
  <text class="dg131a-sub" x="583" y="84" text-anchor="middle">infectious</text>

  <rect class="dg131a-key" x="532" y="190" width="102" height="52"></rect>
  <text class="dg131a-lbl" x="583" y="210" text-anchor="middle">Primary</text>
  <text class="dg131a-lbl" x="583" y="224" text-anchor="middle">progressive</text>
  <text class="dg131a-sub" x="583" y="238" text-anchor="middle">upper lobes, aerobe</text>

  <path class="dg131a-slow" d="M583 92 V 186"></path>
  <polygon class="dg131a-head" points="577,186 583,197 589,186"></polygon>
  <text class="dg131a-tag dg131a-warm" x="573" y="142" text-anchor="end">reactivation</text>

  <path class="dg131a-line" d="M532 216 H 440 V 262 H 404"></path>
  <polygon class="dg131a-head" points="404,256 392,262 404,268"></polygon>

  <rect class="dg131a-box" x="248" y="236" width="142" height="52"></rect>
  <text class="dg131a-lbl" x="319" y="256" text-anchor="middle">Miliary /</text>
  <text class="dg131a-lbl" x="319" y="270" text-anchor="middle">extrapulmonary TB</text>
  <text class="dg131a-sub" x="319" y="284" text-anchor="middle">bone, kidney, brain</text>

  <text class="dg131a-sub" x="436" y="252" text-anchor="middle">bloodstream</text>
</svg>`
};

// --------------------------------------------------------------------------
// cv131 - anthrax toxin: one B subunit, two enzymatic A subunits (Slide 21).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv131-anthrax-toxin"] = {
  title: "Anthrax toxin: one channel, two enzymes",
  caption:
    "Anthrax toxin is two AB exotoxins that share a single binding subunit. Protective antigen binds the host cell and " +
    "forms a membrane channel; edema factor and lethal factor are the catalytic subunits that pass through it. Inside " +
    "the cell edema factor acts as an adenylate cyclase, raising cAMP and driving fluid out of the cell as tissue " +
    "edema, while lethal factor is a protease that stops MAP kinase signalling, inhibiting growth and causing apoptosis " +
    "and necrosis. The name protective antigen describes its use, not its job: antibodies raised against this binding " +
    "subunit prevent disease (Slide 21).",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Diagram of anthrax toxin: protective antigen forms a channel in the host cell membrane through which edema factor and lethal factor enter the cytosol, where edema factor raises cyclic A M P causing tissue edema and lethal factor blocks M A P kinase causing apoptosis and necrosis.">
  <style>
    .dg131b-mem   { fill: var(--dg-line); opacity: .5; }
    .dg131b-cyto  { fill: var(--dg-panel); opacity: .5; }
    .dg131b-box   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; rx: 9; }
    .dg131b-pa    { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg131b-lbl   { font-size: 12px; font-weight: 600; }
    .dg131b-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg131b-tag   { font-size: 11px; font-weight: 700; }
    .dg131b-ef    { fill: var(--dg-cool); }
    .dg131b-lf    { fill: var(--dg-warm); }
    .dg131b-efT   { fill: var(--dg-cool); }
    .dg131b-lfT   { fill: var(--dg-warm); }
    .dg131b-line  { stroke: var(--dg-ink); stroke-width: 2; fill: none; opacity: .5; }
    .dg131b-head  { fill: var(--dg-ink); opacity: .5; }
    .dg131b-dropE { animation: dg131bdropE 4s ease-in-out infinite; }
    .dg131b-dropL { animation: dg131bdropL 4s ease-in-out infinite; }
    @keyframes dg131bdropE {
      0%, 8%   { transform: translateY(0); opacity: 1 }
      48%, 100% { transform: translateY(96px); opacity: .25 }
    }
    @keyframes dg131bdropL {
      0%, 18%  { transform: translateY(0); opacity: 1 }
      58%, 100% { transform: translateY(96px); opacity: .25 }
    }
  </style>

  <rect class="dg131b-cyto" x="0" y="104" width="640" height="176"></rect>
  <rect class="dg131b-mem" x="0" y="92" width="640" height="14"></rect>
  <text class="dg131b-sub" x="12" y="86">outside the cell</text>
  <text class="dg131b-sub" x="12" y="124">cytosol</text>

  <rect class="dg131b-pa" x="286" y="86" width="68" height="26" rx="5"></rect>
  <text class="dg131b-lbl" x="320" y="76" text-anchor="middle">Protective antigen</text>
  <text class="dg131b-sub" x="320" y="60" text-anchor="middle">binding (B) subunit forms the channel</text>

  <g class="dg131b-dropE">
    <circle class="dg131b-ef" cx="303" cy="36" r="13"></circle>
    <text class="dg131b-tag" x="303" y="40" text-anchor="middle" fill="var(--dg-surface)">EF</text>
  </g>
  <g class="dg131b-dropL">
    <circle class="dg131b-lf" cx="337" cy="36" r="13"></circle>
    <text class="dg131b-tag" x="337" y="40" text-anchor="middle" fill="var(--dg-surface)">LF</text>
  </g>

  <path class="dg131b-line" d="M300 150 H 214"></path>
  <polygon class="dg131b-head" points="214,144 202,150 214,156"></polygon>
  <path class="dg131b-line" d="M340 150 H 426"></path>
  <polygon class="dg131b-head" points="426,144 438,150 426,156"></polygon>

  <rect class="dg131b-box" x="14" y="170" width="188" height="86"></rect>
  <text class="dg131b-lbl dg131b-efT" x="108" y="192" text-anchor="middle">Edema factor</text>
  <text class="dg131b-sub" x="108" y="210" text-anchor="middle">adenylate cyclase</text>
  <text class="dg131b-lbl" x="108" y="229" text-anchor="middle">cAMP rises</text>
  <text class="dg131b-sub" x="108" y="247" text-anchor="middle">fluid leaves cells, tissue edema</text>

  <rect class="dg131b-box" x="438" y="170" width="188" height="86"></rect>
  <text class="dg131b-lbl dg131b-lfT" x="532" y="192" text-anchor="middle">Lethal factor</text>
  <text class="dg131b-sub" x="532" y="210" text-anchor="middle">protease</text>
  <text class="dg131b-lbl" x="532" y="229" text-anchor="middle">MAP kinase blocked</text>
  <text class="dg131b-sub" x="532" y="247" text-anchor="middle">growth inhibited, apoptosis</text>

  <text class="dg131b-sub" x="320" y="268" text-anchor="middle">Poly D-glutamate capsule blocks phagocytosis while the toxins act</text>
</svg>`
};

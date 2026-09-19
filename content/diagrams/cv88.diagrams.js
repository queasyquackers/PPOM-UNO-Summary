window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv88-adh-aquaporin"] = {
  title: "ADH inserts aquaporin-2",
  caption:
    "ADH (vasopressin) arrives from the blood side and binds the V2 receptor on the basolateral membrane of the collecting-duct principal cell. " +
    "Adenylyl cyclase raises cAMP, protein kinase A is activated, and vesicles carrying aquaporin-2 move to the luminal membrane, so water can leave the urine and be reabsorbed. " +
    "When ADH stops, the channels are retrieved by endocytosis; with no ADH (central DI) or no response to it (nephrogenic DI, e.g. lithium) the urine stays dilute.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="A collecting duct principal cell between the tubular lumen on the left and the blood on the right. ADH binds the V2 receptor on the blood side, activating adenylyl cyclase, cAMP and protein kinase A, which move aquaporin-2 vesicles to the luminal membrane so water flows from the urine through the cell into the blood.">
  <style>
    .dg88a-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg88a-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg88a-lbl   { font-size: 13px; font-weight: 700; }
    .dg88a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg88a-chain { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg88a-adh   { fill: var(--dg-warm); }
    .dg88a-rec   { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1; }
    .dg88a-aqp   { fill: var(--dg-cool); stroke: var(--dg-ink); stroke-width: 1; }
    .dg88a-ves   { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 2; }
    .dg88a-h2o   { fill: var(--dg-cool); }
    .dg88a-arrow { stroke: var(--dg-accent); stroke-width: 2.5; fill: none; }
    .dg88a-head  { fill: var(--dg-accent); }
    .dg88a-bind  { animation: dg88abind 4s ease-in-out infinite; }
    @keyframes dg88abind {
      0%   { transform: translateX(70px); opacity: 0 }
      20%  { opacity: 1 }
      45%  { transform: translateX(0); opacity: 1 }
      100% { transform: translateX(0); opacity: 1 }
    }
    .dg88a-move { animation: dg88amove 4s ease-in-out infinite; }
    @keyframes dg88amove {
      0%, 40% { transform: translateX(150px) }
      80%, 100% { transform: translateX(0) }
    }
    .dg88a-flow { animation: dg88aflow 4s linear infinite; }
    @keyframes dg88aflow {
      0%   { transform: translateX(0); opacity: 0 }
      10%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(430px); opacity: 0 }
    }
  </style>

  <rect x="10" y="30" width="150" height="220" rx="12" class="dg88a-lumen"/>
  <text x="20" y="22" class="dg88a-lbl">Tubular lumen (urine)</text>
  <rect x="160" y="30" width="300" height="220" rx="4" class="dg88a-cell"/>
  <text x="250" y="22" class="dg88a-lbl">Principal cell</text>
  <text x="478" y="22" class="dg88a-lbl">Blood side</text>
  <text x="166" y="46" class="dg88a-sub">luminal membrane</text>
  <text x="454" y="46" class="dg88a-sub" text-anchor="end">basolateral membrane</text>

  <rect x="452" y="78" width="16" height="28" rx="3" class="dg88a-rec"/>
  <text x="440" y="124" class="dg88a-sub" text-anchor="end">V2 receptor</text>
  <g class="dg88a-bind">
    <circle cx="486" cy="92" r="11" class="dg88a-adh"/>
    <text x="504" y="97" class="dg88a-lbl">ADH</text>
  </g>

  <text x="430" y="97" class="dg88a-chain" text-anchor="end">adenylyl cyclase -> cAMP -> PKA</text>
  <path d="M330,108 L330,140 L230,140" class="dg88a-arrow"/>
  <polygon points="232,133 218,140 232,147" class="dg88a-head"/>

  <rect x="154" y="150" width="12" height="18" class="dg88a-aqp"/>
  <rect x="154" y="186" width="12" height="18" class="dg88a-aqp"/>
  <text x="148" y="166" class="dg88a-sub" text-anchor="end">AQP2</text>
  <text x="148" y="202" class="dg88a-sub" text-anchor="end">AQP2</text>

  <g class="dg88a-move">
    <circle cx="192" cy="178" r="17" class="dg88a-ves"/>
    <rect x="186" y="166" width="12" height="9" class="dg88a-aqp"/>
    <rect x="186" y="181" width="12" height="9" class="dg88a-aqp"/>
  </g>
  <text x="200" y="214" class="dg88a-sub">AQP2 vesicles move to the lumen side</text>

  <g class="dg88a-flow">
    <circle cx="60" cy="228" r="5" class="dg88a-h2o"/>
    <circle cx="36" cy="228" r="4" class="dg88a-h2o" opacity=".7"/>
    <circle cx="84" cy="228" r="4" class="dg88a-h2o" opacity=".7"/>
  </g>
  <text x="200" y="240" class="dg88a-sub">water reabsorbed: urine becomes concentrated</text>

  <text x="10" y="278" class="dg88a-sub">No ADH or no V2/AQP2 response: channels retrieved by endocytosis, water permeability low, urine dilute (DI).</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv88-desmopressin-test"] = {
  title: "Water restriction, then desmopressin",
  caption:
    "During fluid restriction a normal kidney concentrates the urine on its own; in diabetes insipidus urine osmolality stays low. " +
    "Desmopressin then separates the two types: in central DI urine osmolality rises by more than 100% (about 175 to about 500 mOsm on the lecture's graph), while in nephrogenic DI it is unchanged because the kidney cannot respond to ADH. " +
    "The normal curve is shown for shape only; the lecture gave no values for it.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Graph of urine osmolality over time. During water deprivation the normal curve rises while both diabetes insipidus curves stay low. After desmopressin, the central diabetes insipidus curve jumps from about 175 to about 500, and the nephrogenic curve stays flat.">
  <style>
    .dg88b-axis { stroke: var(--dg-ink); stroke-width: 1.5; fill: none; }
    .dg88b-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg88b-lbl  { font-size: 13px; font-weight: 700; }
    .dg88b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg88b-line { fill: none; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 600; stroke-dashoffset: 0; }
    .dg88b-norm { stroke: var(--dg-muted); }
    .dg88b-cen  { stroke: var(--dg-good); }
    .dg88b-neph { stroke: var(--dg-warm); }
    .dg88b-tn   { fill: var(--dg-muted); }
    .dg88b-tc   { fill: var(--dg-good); }
    .dg88b-tp   { fill: var(--dg-warm); }
    .dg88b-dd   { stroke: var(--dg-accent); stroke-width: 2; stroke-dasharray: 6 4; }
    .dg88b-da   { fill: var(--dg-accent); font-size: 12px; font-weight: 700; }
    .dg88b-draw1 { animation: dg88bdraw 5s ease-out infinite; }
    .dg88b-draw2 { animation: dg88bdraw 5s ease-out infinite .3s; }
    .dg88b-draw3 { animation: dg88bdraw 5s ease-out infinite .6s; }
    @keyframes dg88bdraw {
      0%   { stroke-dashoffset: 600 }
      70%  { stroke-dashoffset: 0 }
      100% { stroke-dashoffset: 0 }
    }
  </style>

  <path d="M60,36 L60,232 L470,232" class="dg88b-axis"/>
  <text x="18" y="140" class="dg88b-lbl" transform="rotate(-90 18 140)" text-anchor="middle">Urine osmolality</text>
  <text x="190" y="252" class="dg88b-sub" text-anchor="middle">Water deprivation (hours)</text>
  <text x="395" y="252" class="dg88b-sub" text-anchor="middle">After desmopressin</text>

  <line x1="60" y1="110" x2="470" y2="110" class="dg88b-grid"/>
  <line x1="60" y1="202" x2="470" y2="202" class="dg88b-grid"/>
  <text x="54" y="114" class="dg88b-sub" text-anchor="end">~500</text>
  <text x="54" y="206" class="dg88b-sub" text-anchor="end">~175</text>

  <line x1="320" y1="30" x2="320" y2="232" class="dg88b-dd"/>
  <text x="326" y="30" class="dg88b-da">Desmopressin given</text>

  <path d="M60,190 C160,120 250,72 320,64 L470,62" class="dg88b-line dg88b-norm dg88b-draw1"/>
  <path d="M60,204 L320,202 L350,112 L470,110" class="dg88b-line dg88b-cen dg88b-draw2"/>
  <path d="M60,216 L320,214 L470,214" class="dg88b-line dg88b-neph dg88b-draw3"/>

  <text x="478" y="66" class="dg88b-lbl dg88b-tn">Normal</text>
  <text x="478" y="80" class="dg88b-sub">concentrates on its own</text>
  <text x="478" y="106" class="dg88b-lbl dg88b-tc">Central DI</text>
  <text x="478" y="120" class="dg88b-sub">rises more than 100%</text>
  <text x="478" y="210" class="dg88b-lbl dg88b-tp">Nephrogenic DI</text>
  <text x="478" y="224" class="dg88b-sub">unchanged</text>

  <text x="60" y="280" class="dg88b-sub">Both DI curves stay low during restriction: dilute urine despite dehydration and hypernatremia.</text>
</svg>`,
};

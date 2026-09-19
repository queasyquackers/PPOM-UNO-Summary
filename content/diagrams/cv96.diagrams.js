window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv96-compensation-loop"] = {
  title: "The two compensatory arms and where the drugs cut in",
  caption: "A fall in cardiac output is sensed twice: the carotid sinus fires less, which unleashes sympathetic overdrive, and the kidney sees less blood flow, which switches on RAAS. Both arms load the heart further and drive remodeling, so the loop feeds itself. Beta blockers cut the sympathetic arm and the RAAS drugs (ACEI, ARB, ARNI, MRA) cut the renal arm - the backbone of chronic CHF therapy (Slides 5, 7).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Loop diagram: falling cardiac output reduces carotid sinus firing, causing sympathetic overdrive blocked by beta blockers, and reduces renal blood flow, activating RAAS blocked by ACE inhibitors, ARBs, ARNI and MRAs; both arms cause remodeling that further lowers cardiac output.">
  <style>
    .dg96a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg96a-key { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2; }
    .dg96a-lbl { font-size: 12px; }
    .dg96a-hd { font-size: 13px; font-weight: 700; }
    .dg96a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg96a-flow { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 8 6; animation: dg96aflow 1.6s linear infinite; }
    .dg96a-head { fill: var(--dg-warm); }
    .dg96a-drug { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2; }
    .dg96a-drugtxt { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg96a-bar { stroke: var(--dg-good); stroke-width: 5; stroke-linecap: round; animation: dg96apulse 2.4s ease-in-out infinite; }
    @keyframes dg96aflow { to { stroke-dashoffset: -28; } }
    @keyframes dg96apulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
  </style>

  <rect x="225" y="12" width="190" height="44" rx="10" class="dg96a-key"/>
  <text x="320" y="31" text-anchor="middle" class="dg96a-hd">Falling cardiac output</text>
  <text x="320" y="47" text-anchor="middle" class="dg96a-sub">failing left ventricle</text>

  <rect x="20" y="84" width="200" height="40" rx="8" class="dg96a-box"/>
  <text x="120" y="108" text-anchor="middle" class="dg96a-lbl">Carotid sinus firing falls</text>
  <rect x="20" y="160" width="200" height="52" rx="8" class="dg96a-box"/>
  <text x="120" y="181" text-anchor="middle" class="dg96a-hd">Sympathetic overdrive</text>
  <text x="120" y="199" text-anchor="middle" class="dg96a-sub">NE raises HR, force, preload</text>

  <rect x="420" y="84" width="200" height="40" rx="8" class="dg96a-box"/>
  <text x="520" y="108" text-anchor="middle" class="dg96a-lbl">Renal blood flow falls</text>
  <rect x="420" y="160" width="200" height="52" rx="8" class="dg96a-box"/>
  <text x="520" y="181" text-anchor="middle" class="dg96a-hd">RAAS activation</text>
  <text x="520" y="199" text-anchor="middle" class="dg96a-sub">Ang II, aldosterone: afterload, fluid</text>

  <rect x="220" y="238" width="200" height="50" rx="8" class="dg96a-box"/>
  <text x="320" y="259" text-anchor="middle" class="dg96a-hd">Cardiac remodeling</text>
  <text x="320" y="277" text-anchor="middle" class="dg96a-sub">fibrosis, collagen, stiff ventricle</text>

  <path d="M 240 50 Q 150 55 120 82" class="dg96a-flow"/>
  <path d="M 400 50 Q 490 55 520 82" class="dg96a-flow"/>
  <path d="M 120 124 L 120 156" class="dg96a-flow"/>
  <path d="M 520 124 L 520 156" class="dg96a-flow"/>
  <path d="M 120 212 Q 130 258 216 262" class="dg96a-flow"/>
  <path d="M 520 212 Q 510 258 424 262" class="dg96a-flow"/>
  <path d="M 320 236 L 320 60" class="dg96a-flow"/>
  <polygon points="313,66 320,56 327,66" class="dg96a-head"/>
  <text x="330" y="96" class="dg96a-sub">load and stiffness</text>
  <text x="330" y="110" class="dg96a-sub">worsen output</text>

  <line x1="232" y1="176" x2="232" y2="200" class="dg96a-bar"/>
  <rect x="150" y="128" width="112" height="26" rx="13" class="dg96a-drug"/>
  <text x="206" y="146" text-anchor="middle" class="dg96a-drugtxt">Beta blocker</text>
  <line x1="408" y1="176" x2="408" y2="200" class="dg96a-bar"/>
  <rect x="340" y="128" width="170" height="26" rx="13" class="dg96a-drug"/>
  <text x="425" y="146" text-anchor="middle" class="dg96a-drugtxt">ACEI / ARB / ARNI / MRA</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv96-inotrope-camp"] = {
  title: "Three inotropes, one endpoint: more calcium",
  caption: "Dobutamine is direct: a beta-1 Gs agonist that drives adenylyl cyclase, cAMP and protein kinase A. Milrinone is indirect: it blocks PDE3, the enzyme that breaks cAMP down, so the same PKA signal persists. Digoxin skips cAMP entirely - blocking the Na+/K+-ATPase lets Na+ build up, so the Na+/Ca2+ exchanger pushes out less Ca2+. All three are for acute decompensated failure, not daily use (Slides 10-15).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Pathway diagram: dobutamine stimulates beta-1 receptors, adenylyl cyclase, cAMP and protein kinase A; milrinone blocks PDE3 so cAMP is not degraded; digoxin blocks the sodium-potassium ATPase so sodium builds up and the sodium-calcium exchanger removes less calcium; all three raise myocyte calcium and contractility.">
  <style>
    .dg96b-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg96b-drug { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg96b-end { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2.5; }
    .dg96b-lbl { font-size: 12px; }
    .dg96b-hd { font-size: 12px; font-weight: 700; }
    .dg96b-sub { font-size: 10.5px; fill: var(--dg-muted); }
    .dg96b-go { fill: none; stroke: var(--dg-cool); stroke-width: 2.5; stroke-dasharray: 7 5; animation: dg96bflow 1.4s linear infinite; }
    .dg96b-deg { fill: none; stroke: var(--dg-muted); stroke-width: 2; }
    .dg96b-stop { stroke: var(--dg-warm); stroke-width: 3; }
    .dg96b-bar { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; animation: dg96bpulse 2.2s ease-in-out infinite; }
    .dg96b-glow { animation: dg96bpulse 2.2s ease-in-out infinite; }
    @keyframes dg96bflow { to { stroke-dashoffset: -24; } }
    @keyframes dg96bpulse { 0%,100% { opacity: .5; } 50% { opacity: 1; } }
  </style>

  <text x="10" y="14" class="dg96b-sub">DIRECT</text>
  <rect x="10" y="22" width="100" height="34" rx="8" class="dg96b-drug"/>
  <text x="60" y="44" text-anchor="middle" class="dg96b-hd">Dobutamine</text>
  <rect x="135" y="22" width="100" height="34" rx="8" class="dg96b-box"/>
  <text x="185" y="44" text-anchor="middle" class="dg96b-lbl">Beta-1 (Gs)</text>
  <rect x="260" y="22" width="115" height="34" rx="8" class="dg96b-box"/>
  <text x="317" y="44" text-anchor="middle" class="dg96b-lbl">Adenylyl cyclase</text>
  <rect x="400" y="22" width="70" height="34" rx="8" class="dg96b-box dg96b-glow"/>
  <text x="435" y="44" text-anchor="middle" class="dg96b-hd">cAMP</text>
  <rect x="495" y="22" width="70" height="34" rx="8" class="dg96b-box"/>
  <text x="530" y="44" text-anchor="middle" class="dg96b-lbl">PKA</text>
  <path d="M 110 39 L 133 39" class="dg96b-go"/>
  <path d="M 235 39 L 258 39" class="dg96b-go"/>
  <path d="M 375 39 L 398 39" class="dg96b-go"/>
  <path d="M 470 39 L 493 39" class="dg96b-go"/>
  <path d="M 530 56 L 530 128" class="dg96b-go"/>

  <text x="10" y="92" class="dg96b-sub">INDIRECT</text>
  <rect x="10" y="100" width="100" height="34" rx="8" class="dg96b-drug"/>
  <text x="60" y="122" text-anchor="middle" class="dg96b-hd">Milrinone</text>
  <rect x="400" y="100" width="70" height="34" rx="8" class="dg96b-box"/>
  <text x="435" y="122" text-anchor="middle" class="dg96b-hd">PDE3</text>
  <path d="M 435 58 L 435 98" class="dg96b-deg"/>
  <text x="300" y="80" class="dg96b-sub">PDE3 degrades cAMP</text>
  <line x1="110" y1="117" x2="390" y2="117" class="dg96b-stop"/>
  <line x1="392" y1="105" x2="392" y2="129" class="dg96b-bar"/>

  <rect x="470" y="140" width="160" height="50" rx="10" class="dg96b-end"/>
  <text x="550" y="162" text-anchor="middle" class="dg96b-hd">More Ca2+ in myocyte</text>
  <text x="550" y="179" text-anchor="middle" class="dg96b-sub">positive inotropy</text>

  <text x="10" y="210" class="dg96b-sub">PUMP BLOCK</text>
  <rect x="10" y="218" width="100" height="34" rx="8" class="dg96b-drug"/>
  <text x="60" y="240" text-anchor="middle" class="dg96b-hd">Digoxin</text>
  <rect x="135" y="218" width="110" height="34" rx="8" class="dg96b-box"/>
  <text x="190" y="240" text-anchor="middle" class="dg96b-lbl">Na+/K+-ATPase</text>
  <line x1="110" y1="235" x2="126" y2="235" class="dg96b-stop"/>
  <line x1="128" y1="223" x2="128" y2="247" class="dg96b-bar"/>
  <rect x="270" y="218" width="100" height="34" rx="8" class="dg96b-box dg96b-glow"/>
  <text x="320" y="240" text-anchor="middle" class="dg96b-lbl">Na+ builds up</text>
  <rect x="395" y="218" width="235" height="34" rx="8" class="dg96b-box"/>
  <text x="512" y="240" text-anchor="middle" class="dg96b-lbl">Na+/Ca2+ exchanger removes less Ca2+</text>
  <path d="M 245 235 L 268 235" class="dg96b-go"/>
  <path d="M 370 235 L 393 235" class="dg96b-go"/>
  <path d="M 550 216 L 550 192" class="dg96b-go"/>
  <text x="10" y="278" class="dg96b-sub">Low K+ strengthens the digoxin arm: more Ca2+ loading, delayed afterdepolarizations</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv96-k-h-aldosterone"] = {
  title: "Potassium and hydrogen travel together",
  caption: "Loops and thiazides deplete volume, RAAS rises, and aldosterone makes the collecting duct secrete K+ and H+ into the urine together: hypokalemia with metabolic alkalosis. Mineralocorticoid receptor antagonists block aldosterone, so both ions stay in the blood: hyperkalemia with acidosis (impaired intercalated-cell H+ secretion). One rule predicts both electrolyte pictures (Slides 28-34).",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Two panels. Left: loop or thiazide diuretic causes volume loss and more aldosterone, so potassium and hydrogen ions move from the tubule cell into the urine, giving hypokalemia and alkalosis. Right: aldosterone blocker keeps potassium and hydrogen ions moving back into the blood, giving hyperkalemia and acidosis.">
  <style>
    .dg96c-blood { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg96c-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg96c-urine { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .dg96c-hd { font-size: 13px; font-weight: 700; }
    .dg96c-lbl { font-size: 11.5px; }
    .dg96c-sub { font-size: 10.5px; fill: var(--dg-muted); }
    .dg96c-k { fill: var(--dg-cool); }
    .dg96c-h { fill: var(--dg-warm); }
    .dg96c-ion { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg96c-res { font-size: 12.5px; font-weight: 700; fill: var(--dg-good); }
    .dg96c-out { animation: dg96cout 3s ease-in-out infinite; }
    .dg96c-in { animation: dg96cin 3s ease-in-out infinite; }
    .dg96c-arrow { stroke: var(--dg-muted); stroke-width: 2; fill: none; }
    @keyframes dg96cout { 0% { transform: translateX(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateX(95px); opacity: 0; } }
    @keyframes dg96cin { 0% { transform: translateX(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateX(-95px); opacity: 0; } }
  </style>

  <text x="160" y="18" text-anchor="middle" class="dg96c-hd">Loop or thiazide</text>
  <text x="160" y="36" text-anchor="middle" class="dg96c-sub">volume loss, RAAS up, aldosterone UP</text>
  <rect x="15" y="50" width="75" height="130" rx="8" class="dg96c-blood"/>
  <rect x="100" y="50" width="120" height="130" rx="8" class="dg96c-cell"/>
  <rect x="230" y="50" width="75" height="130" rx="8" class="dg96c-urine"/>
  <text x="52" y="198" text-anchor="middle" class="dg96c-sub">blood</text>
  <text x="160" y="198" text-anchor="middle" class="dg96c-sub">duct cell</text>
  <text x="267" y="198" text-anchor="middle" class="dg96c-sub">urine</text>
  <g class="dg96c-out">
    <circle cx="160" cy="95" r="13" class="dg96c-k"/><text x="160" y="99" text-anchor="middle" class="dg96c-ion">K+</text>
    <circle cx="160" cy="140" r="13" class="dg96c-h"/><text x="160" y="144" text-anchor="middle" class="dg96c-ion">H+</text>
  </g>
  <path d="M 185 118 L 250 118 M 242 112 L 250 118 L 242 124" class="dg96c-arrow"/>
  <text x="160" y="226" text-anchor="middle" class="dg96c-res">Hypokalemia + metabolic alkalosis</text>
  <text x="160" y="246" text-anchor="middle" class="dg96c-sub">both ions lost in the urine</text>

  <line x1="320" y1="10" x2="320" y2="255" stroke="var(--dg-line)" stroke-width="1.5"/>

  <text x="480" y="18" text-anchor="middle" class="dg96c-hd">MRA (spironolactone, eplerenone)</text>
  <text x="480" y="36" text-anchor="middle" class="dg96c-sub">aldosterone receptor BLOCKED</text>
  <rect x="335" y="50" width="75" height="130" rx="8" class="dg96c-blood"/>
  <rect x="420" y="50" width="120" height="130" rx="8" class="dg96c-cell"/>
  <rect x="550" y="50" width="75" height="130" rx="8" class="dg96c-urine"/>
  <text x="372" y="198" text-anchor="middle" class="dg96c-sub">blood</text>
  <text x="480" y="198" text-anchor="middle" class="dg96c-sub">duct cell</text>
  <text x="587" y="198" text-anchor="middle" class="dg96c-sub">urine</text>
  <g class="dg96c-in">
    <circle cx="480" cy="95" r="13" class="dg96c-k"/><text x="480" y="99" text-anchor="middle" class="dg96c-ion">K+</text>
    <circle cx="480" cy="140" r="13" class="dg96c-h"/><text x="480" y="144" text-anchor="middle" class="dg96c-ion">H+</text>
  </g>
  <path d="M 455 118 L 390 118 M 398 112 L 390 118 L 398 124" class="dg96c-arrow"/>
  <text x="480" y="226" text-anchor="middle" class="dg96c-res">Hyperkalemia + acidosis</text>
  <text x="480" y="246" text-anchor="middle" class="dg96c-sub">both ions retained in the blood</text>
</svg>`
};

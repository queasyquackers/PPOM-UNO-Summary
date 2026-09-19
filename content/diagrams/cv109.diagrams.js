window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv109-cftr-airway-vs-sweat"] = {
  title: "One CFTR defect, two tissues",
  caption:
    "Left: airway epithelium cannot secrete chloride, so it reabsorbs excess sodium and water and the mucus layer dehydrates, which is why secretions are not cleared and S. aureus and P. aeruginosa colonize. " +
    "Right: the sweat duct cannot reabsorb chloride, sodium follows chloride and stays in the lumen, and the sweat is salty. " +
    "The same broken channel moves salt the wrong way in both tissues (Slide 8).",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Two panels. Airway: chloride secretion into the lumen is blocked, sodium and water move from the lumen into the cell, and the mucus layer becomes thin and dehydrated. Sweat duct: chloride reabsorption from the lumen is blocked, sodium stays in the lumen with chloride, producing salty sweat.">
  <style>
    .dg109a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg109a-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg109a-mucus { fill: var(--dg-warm); opacity: .28; }
    .dg109a-h     { font-size: 14px; font-weight: 700; }
    .dg109a-lbl   { font-size: 12px; }
    .dg109a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg109a-cl    { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg109a-na    { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg109a-bad   { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg109a-shaft { stroke-width: 4; stroke-linecap: round; }
    .dg109a-ion   { font-size: 12px; font-weight: 700; }
    .dg109a-in    { animation: dg109a-down 3s linear infinite; }
    .dg109a-in2   { animation: dg109a-down 3s linear infinite 1.5s; }
    @keyframes dg109a-down {
      0%   { transform: translateY(0);    opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(70px); opacity: 0 }
    }
    .dg109a-thin  { animation: dg109a-shrink 6s ease-in-out infinite; transform-origin: 160px 96px; }
    @keyframes dg109a-shrink { 0%,100% { transform: scaleY(1) } 50% { transform: scaleY(.45) } }
    .dg109a-bob   { animation: dg109a-bob 2.4s ease-in-out infinite; }
    @keyframes dg109a-bob { 0%,100% { transform: translateX(0) } 50% { transform: translateX(10px) } }
  </style>

  <text x="20" y="22" class="dg109a-h">Airway epithelium</text>
  <text x="330" y="22" class="dg109a-h">Sweat duct</text>

  <rect x="20" y="34" width="280" height="80" rx="10" class="dg109a-panel"/>
  <text x="30" y="52" class="dg109a-sub">Airway lumen</text>
  <rect x="30" y="78" width="260" height="18" rx="4" class="dg109a-mucus dg109a-thin"/>
  <text x="200" y="72" class="dg109a-sub">mucus layer</text>
  <rect x="20" y="124" width="280" height="96" rx="10" class="dg109a-cell"/>
  <text x="30" y="212" class="dg109a-sub">Epithelial cell</text>

  <line x1="70" y1="190" x2="70" y2="104" class="dg109a-cl dg109a-shaft"/>
  <polygon points="62,108 70,94 78,108" class="dg109a-cl"/>
  <text x="80" y="170" class="dg109a-ion dg109a-cl">Cl-</text>
  <line x1="56" y1="132" x2="84" y2="160" class="dg109a-bad"/>
  <line x1="84" y1="132" x2="56" y2="160" class="dg109a-bad"/>

  <g class="dg109a-in">
    <text x="160" y="96" class="dg109a-ion dg109a-na">Na+</text>
  </g>
  <g class="dg109a-in2">
    <text x="220" y="96" class="dg109a-ion dg109a-cl">H2O</text>
  </g>
  <line x1="260" y1="100" x2="260" y2="180" class="dg109a-na dg109a-shaft"/>
  <polygon points="252,176 260,192 268,176" class="dg109a-na"/>

  <text x="20" y="242" class="dg109a-lbl">Cl- secretion blocked; excess Na+ and water reabsorbed</text>
  <text x="20" y="260" class="dg109a-lbl" font-weight="700">Dehydrated mucus, poor clearance</text>
  <text x="20" y="278" class="dg109a-sub">colonization: S. aureus, P. aeruginosa</text>

  <rect x="330" y="34" width="270" height="80" rx="10" class="dg109a-panel"/>
  <text x="340" y="52" class="dg109a-sub">Duct lumen (sweat)</text>
  <rect x="330" y="124" width="270" height="96" rx="10" class="dg109a-cell"/>
  <text x="340" y="212" class="dg109a-sub">Duct cell</text>

  <line x1="390" y1="70" x2="390" y2="170" class="dg109a-cl dg109a-shaft"/>
  <polygon points="382,166 390,182 398,166" class="dg109a-cl"/>
  <text x="400" y="80" class="dg109a-ion dg109a-cl">Cl-</text>
  <line x1="376" y1="132" x2="404" y2="160" class="dg109a-bad"/>
  <line x1="404" y1="132" x2="376" y2="160" class="dg109a-bad"/>

  <g class="dg109a-bob">
    <text x="470" y="80" class="dg109a-ion dg109a-na">Na+</text>
    <text x="510" y="96" class="dg109a-ion dg109a-cl">Cl-</text>
    <text x="545" y="72" class="dg109a-ion dg109a-na">Na+</text>
  </g>
  <text x="460" y="150" class="dg109a-sub">Na+ follows Cl-,</text>
  <text x="460" y="166" class="dg109a-sub">stays in the lumen</text>

  <text x="330" y="242" class="dg109a-lbl">Cl- reabsorption blocked</text>
  <text x="330" y="260" class="dg109a-lbl" font-weight="700">Salty sweat</text>
  <text x="330" y="278" class="dg109a-sub">basis of the sweat chloride test</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv109-meconium-ball-valve"] = {
  title: "Meconium ball-valve effect",
  caption:
    "Aspirated meconium partly plugs an airway. On inspiration the airway widens and air slips past the plug into the alveoli; on expiration the airway narrows onto the plug and the air cannot leave. " +
    "Breath after breath the distal lung over-inflates, which is the air trapping behind the increased A-P diameter and flattened diaphragms on the x-ray (Slide 34). " +
    "The lecture names the ball-valve effect; the widening and narrowing of the airway with each breath is the standard explanation of how it works.",
  svg: `
<svg viewBox="0 0 620 260" role="img" aria-label="An airway with a partial meconium plug. Air flows past the plug into the alveolus on inspiration, but the expiratory arrow is blocked at the plug, so the alveolus over-inflates, producing air trapping with increased A-P diameter and flattened diaphragms.">
  <style>
    .dg109b-wall  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg109b-plug  { fill: var(--dg-warm); opacity: .85; }
    .dg109b-alv   { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg109b-h     { font-size: 13px; font-weight: 700; }
    .dg109b-lbl   { font-size: 12px; }
    .dg109b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg109b-inarr { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg109b-exarr { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg109b-shaft { stroke-width: 5; stroke-linecap: round; }
    .dg109b-bad   { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg109b-air   { fill: var(--dg-cool); animation: dg109b-flow 2.8s linear infinite; }
    .dg109b-air2  { fill: var(--dg-cool); animation: dg109b-flow 2.8s linear infinite 1.4s; }
    @keyframes dg109b-flow {
      0%   { transform: translateX(0);     opacity: 0 }
      15%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(300px); opacity: 0 }
    }
    .dg109b-grow  { animation: dg109b-grow 5.6s ease-in-out infinite; transform-origin: 470px 112px; }
    @keyframes dg109b-grow { 0%,100% { transform: scale(.92) } 50% { transform: scale(1.08) } }
  </style>

  <text x="20" y="24" class="dg109b-h">Bronchiole with aspirated meconium</text>
  <text x="400" y="24" class="dg109b-h">Distal alveoli</text>

  <rect x="20" y="86" width="360" height="52" rx="8" class="dg109b-wall"/>
  <ellipse cx="250" cy="112" rx="26" ry="20" class="dg109b-plug"/>
  <text x="222" y="160" class="dg109b-sub">meconium plug</text>

  <circle cx="60" cy="100" r="5" class="dg109b-air"/>
  <circle cx="60" cy="124" r="5" class="dg109b-air2"/>

  <circle cx="470" cy="112" r="62" class="dg109b-alv dg109b-grow"/>
  <text x="440" y="116" class="dg109b-lbl" font-weight="700">trapped air</text>

  <line x1="40" y1="62" x2="170" y2="62" class="dg109b-inarr dg109b-shaft"/>
  <polygon points="166,54 182,62 166,70" class="dg109b-inarr"/>
  <text x="40" y="50" class="dg109b-lbl dg109b-inarr">Inspiration: airway widens, air passes</text>

  <line x1="370" y1="196" x2="250" y2="196" class="dg109b-exarr dg109b-shaft"/>
  <polygon points="254,188 238,196 254,204" class="dg109b-exarr"/>
  <line x1="222" y1="184" x2="246" y2="208" class="dg109b-bad"/>
  <line x1="246" y1="184" x2="222" y2="208" class="dg109b-bad"/>
  <text x="264" y="222" class="dg109b-lbl dg109b-exarr">Expiration: airway narrows onto plug</text>

  <text x="20" y="246" class="dg109b-lbl" font-weight="700">Air trapping</text>
  <text x="120" y="246" class="dg109b-sub">x-ray: increased A-P diameter, flattened diaphragms</text>
</svg>`,
};

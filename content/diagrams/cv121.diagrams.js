window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv121-reversible-to-fixed"] = {
  title: "Reversible attacks, then a fixed airway",
  caption:
    "Left: early asthma. During an attack the smooth muscle tightens and the lumen narrows, and with treatment it reopens, so the obstruction is reversible. " +
    "Right: after years of chronic inflammation, remodeling has thickened the wall and hypertrophied the muscle, so the lumen stays narrow and no longer reopens. " +
    "That patient behaves like COPD, as in the lecturer's case of completely fixed obstruction. " +
    "This is a qualitative sketch; the lecture gives no measurements (Slides 22, 24-25).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two airway cross sections. On the left an airway narrows during an attack and then reopens, showing reversible obstruction. An arrow labeled years of chronic inflammation leads to the right, where a remodeled airway has a thick wall and a small lumen that stays narrow, showing fixed obstruction.">
  <style>
    .dg121a-wall   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg121a-thick  { fill: var(--dg-warm); opacity: .35; }
    .dg121a-mucosa { fill: var(--dg-warm); opacity: .2; }
    .dg121a-muscle { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-dasharray: 9 6; }
    .dg121a-hyper  { fill: none; stroke: var(--dg-accent); stroke-width: 10; stroke-dasharray: 11 5; }
    .dg121a-lumen  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg121a-title  { font-size: 15px; font-weight: 700; }
    .dg121a-note   { font-size: 12px; }
    .dg121a-small  { font-size: 12px; font-weight: 700; }
    .dg121a-link   { fill: none; stroke: var(--dg-muted); stroke-width: 3; stroke-dasharray: 9 7; animation: dg121aflow 1.4s linear infinite; }
    .dg121a-tip    { fill: var(--dg-muted); }
    .dg121a-attack { transform-box: fill-box; transform-origin: center; animation: dg121aattack 5s ease-in-out infinite; }
    .dg121a-ring   { transform-box: fill-box; transform-origin: center; animation: dg121aring 5s ease-in-out infinite; }
    @keyframes dg121aattack { 0%, 20%, 100% { transform: scale(1) } 50%, 65% { transform: scale(.42) } }
    @keyframes dg121aring   { 0%, 20%, 100% { transform: scale(1) } 50%, 65% { transform: scale(.78) } }
    @keyframes dg121aflow   { to { stroke-dashoffset: -32 } }
  </style>

  <text x="160" y="22" text-anchor="middle" class="dg121a-title">Reversible obstruction</text>
  <circle cx="160" cy="125" r="88" class="dg121a-wall"/>
  <circle cx="160" cy="125" r="66" class="dg121a-muscle dg121a-ring"/>
  <circle cx="160" cy="125" r="56" class="dg121a-mucosa dg121a-ring"/>
  <circle cx="160" cy="125" r="44" class="dg121a-lumen dg121a-attack"/>
  <text x="160" y="240" text-anchor="middle" class="dg121a-note">Attack: smooth muscle tightens, lumen narrows</text>
  <text x="160" y="258" text-anchor="middle" class="dg121a-note">With treatment: the airway reopens</text>

  <text x="320" y="96" text-anchor="middle" class="dg121a-small">Years of chronic</text>
  <text x="320" y="112" text-anchor="middle" class="dg121a-small">inflammation</text>
  <line x1="262" y1="126" x2="366" y2="126" class="dg121a-link"/>
  <polygon points="366,116 386,126 366,136" class="dg121a-tip"/>

  <text x="480" y="22" text-anchor="middle" class="dg121a-title">Fixed obstruction</text>
  <circle cx="480" cy="125" r="88" class="dg121a-wall"/>
  <circle cx="480" cy="125" r="74" class="dg121a-thick"/>
  <circle cx="480" cy="125" r="46" class="dg121a-hyper"/>
  <circle cx="480" cy="125" r="20" class="dg121a-lumen"/>
  <text x="480" y="240" text-anchor="middle" class="dg121a-note">Remodeling: thick wall, muscle hypertrophy</text>
  <text x="480" y="258" text-anchor="middle" class="dg121a-note">Lumen stays narrow, acting like COPD</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv121-silent-chest"] = {
  title: "Why a quiet chest is a bad sign",
  caption:
    "Read left to right as a severe attack worsens. Air movement keeps falling. Wheeze is loud while air still moves, then fades as the patient tires and too little air moves to wheeze: the silent chest. " +
    "PCO2 starts low from hyperventilation (respiratory alkalosis) and climbs only at the end, so a normal or rising value means pending respiratory failure. " +
    "Curves are a qualitative sketch of the lecture's sequence, not measured values (Slides 23, 37, 46).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three lanes across a worsening asthma attack. Air movement falls steadily. Wheeze is loud early, then fades to nothing, labeled silent chest. PCO2 stays below normal early, then rises through normal into respiratory acidosis at the stage of pending respiratory failure.">
  <style>
    .dg121b-stage { font-size: 12px; font-weight: 700; }
    .dg121b-lane  { font-size: 12px; font-weight: 700; }
    .dg121b-note  { font-size: 11px; }
    .dg121b-div   { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg121b-norm  { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 6 5; }
    .dg121b-air   { fill: none; stroke: var(--dg-cool); stroke-width: 4; stroke-linecap: round; }
    .dg121b-co2   { fill: none; stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg121b-bar   { fill: var(--dg-accent); }
    .lecture-diagram svg text.dg121b-warm { fill: var(--dg-warm); font-weight: 700; }
    .dg121b-loud  { animation: dg121bpulse 1.1s ease-in-out infinite; }
    .dg121b-soft  { opacity: .6; animation: dg121bfade 2.2s ease-in-out infinite; }
    .dg121b-sweep { stroke: var(--dg-ink); stroke-width: 2; animation: dg121bsweep 11s linear infinite; }
    @keyframes dg121bpulse { 0%, 100% { opacity: .55 } 50% { opacity: 1 } }
    @keyframes dg121bfade  { 0%, 100% { opacity: .35 } 50% { opacity: .7 } }
    @keyframes dg121bsweep { from { transform: translateX(0) } to { transform: translateX(500px) } }
  </style>

  <text x="195" y="16" text-anchor="middle" class="dg121b-stage">Early attack</text>
  <text x="360" y="16" text-anchor="middle" class="dg121b-stage">Tiring</text>
  <text x="525" y="16" text-anchor="middle" class="dg121b-stage">Pending respiratory failure</text>
  <line x1="280" y1="24" x2="280" y2="272" class="dg121b-div"/>
  <line x1="440" y1="24" x2="440" y2="272" class="dg121b-div"/>

  <text x="8" y="72" class="dg121b-lane">Air movement</text>
  <path d="M110,40 C240,44 400,66 610,98" class="dg121b-air"/>

  <text x="8" y="150" class="dg121b-lane">Wheeze</text>
  <g class="dg121b-loud">
    <rect x="116" y="135" width="8" height="20" rx="2" class="dg121b-bar"/>
    <rect x="136" y="131" width="8" height="28" rx="2" class="dg121b-bar"/>
    <rect x="156" y="127" width="8" height="36" rx="2" class="dg121b-bar"/>
    <rect x="176" y="123" width="8" height="44" rx="2" class="dg121b-bar"/>
    <rect x="196" y="119" width="8" height="52" rx="2" class="dg121b-bar"/>
    <rect x="216" y="117" width="8" height="56" rx="2" class="dg121b-bar"/>
    <rect x="236" y="115" width="8" height="60" rx="2" class="dg121b-bar"/>
    <rect x="256" y="115" width="8" height="60" rx="2" class="dg121b-bar"/>
    <rect x="276" y="115" width="8" height="60" rx="2" class="dg121b-bar"/>
    <rect x="296" y="117" width="8" height="56" rx="2" class="dg121b-bar"/>
    <rect x="316" y="120" width="8" height="50" rx="2" class="dg121b-bar"/>
    <rect x="336" y="123" width="8" height="44" rx="2" class="dg121b-bar"/>
  </g>
  <g class="dg121b-soft">
    <rect x="356" y="126" width="8" height="38" rx="2" class="dg121b-bar"/>
    <rect x="376" y="129" width="8" height="32" rx="2" class="dg121b-bar"/>
    <rect x="396" y="132" width="8" height="26" rx="2" class="dg121b-bar"/>
    <rect x="416" y="135" width="8" height="20" rx="2" class="dg121b-bar"/>
    <rect x="436" y="138" width="8" height="14" rx="2" class="dg121b-bar"/>
    <rect x="456" y="140" width="8" height="10" rx="2" class="dg121b-bar"/>
    <rect x="476" y="142" width="8" height="6" rx="2" class="dg121b-bar"/>
  </g>
  <rect x="496" y="143" width="8" height="4" rx="2" class="dg121b-bar" opacity=".35"/>
  <rect x="516" y="144" width="8" height="2" rx="1" class="dg121b-bar" opacity=".35"/>
  <rect x="536" y="144" width="8" height="2" rx="1" class="dg121b-bar" opacity=".35"/>
  <rect x="556" y="144" width="8" height="2" rx="1" class="dg121b-bar" opacity=".35"/>
  <rect x="576" y="144" width="8" height="2" rx="1" class="dg121b-bar" opacity=".35"/>
  <rect x="596" y="144" width="8" height="2" rx="1" class="dg121b-bar" opacity=".35"/>
  <text x="550" y="130" text-anchor="middle" class="dg121b-warm">Silent chest</text>
  <text x="150" y="190" class="dg121b-note">Loud while air still moves</text>

  <text x="8" y="232" class="dg121b-lane">PCO2</text>
  <line x1="110" y1="226" x2="610" y2="226" class="dg121b-norm"/>
  <text x="114" y="221" class="dg121b-note">normal</text>
  <path d="M110,250 L420,250 C470,250 500,240 530,226 S590,196 610,192" class="dg121b-co2"/>
  <text x="114" y="267" class="dg121b-note">Low: hyperventilation, respiratory alkalosis</text>
  <text x="450" y="267" class="dg121b-note">Rising: respiratory acidosis</text>

  <line x1="110" y1="24" x2="110" y2="272" class="dg121b-sweep"/>

  <text x="320" y="292" text-anchor="middle" class="dg121b-stage">Quieter is not better: wheeze fades as air stops moving, and CO2 climbs last</text>
</svg>`,
};

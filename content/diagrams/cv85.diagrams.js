window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv85-digoxin-calcium"] = {
  title: "Digoxin: from pump block to calcium load",
  caption:
    "Digoxin inhibits the Na+/K+ ATPase, so sodium builds up inside the myocyte. The Na+/Ca2+ exchanger (3 Na+ in for 1 Ca2+ out) loses its gradient, calcium stays in, and contractility rises (positive inotropy). " +
    "Push the same chain too far - especially with hypokalemia, which strengthens the pump block - and the calcium overload fires delayed afterdepolarizations after phase 4, the digoxin arrhythmia that magnesium treats by blocking calcium influx.",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Chain of four boxes: digoxin blocks the sodium potassium pump, intracellular sodium rises, the sodium calcium exchanger removes less calcium, intracellular calcium rises. The calcium branch splits into increased contractility and delayed afterdepolarizations. Low potassium strengthens the pump block; magnesium blocks calcium influx.">
  <style>
    .dg85a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg85a-hot   { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg85a-good  { fill: var(--dg-panel); stroke: var(--dg-good); stroke-width: 2; }
    .dg85a-lbl   { font-size: 13px; font-weight: 700; }
    .dg85a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg85a-warm  { fill: var(--dg-warm); }
    .dg85a-cool  { fill: var(--dg-cool); }
    .dg85a-grn   { fill: var(--dg-good); }
    .dg85a-arrow { stroke: var(--dg-ink); stroke-width: 2.5; fill: none; }
    .dg85a-head  { fill: var(--dg-ink); }
    .dg85a-s1 { animation: dg85aglow 6s ease-in-out infinite; }
    .dg85a-s2 { animation: dg85aglow 6s ease-in-out infinite 1s; }
    .dg85a-s3 { animation: dg85aglow 6s ease-in-out infinite 2s; }
    .dg85a-s4 { animation: dg85aglow 6s ease-in-out infinite 3s; }
    .dg85a-s5 { animation: dg85aglow 6s ease-in-out infinite 4s; }
    @keyframes dg85aglow { 0%,100% { opacity: .55 } 15%,35% { opacity: 1 } }
    .dg85a-ca { animation: dg85afill 6s ease-in-out infinite; }
    @keyframes dg85afill { 0%,40% { transform: scaleY(.35) } 70%,100% { transform: scaleY(1) } }
  </style>

  <g class="dg85a-s1">
    <rect x="12" y="40" width="138" height="70" rx="10" class="dg85a-hot"/>
    <text x="24" y="64" class="dg85a-lbl">Digoxin blocks</text>
    <text x="24" y="82" class="dg85a-lbl">Na+/K+ ATPase</text>
    <text x="24" y="100" class="dg85a-sub">(also vagal: HR, AV node down)</text>
  </g>
  <path d="M152 75 L172 75" class="dg85a-arrow"/><polygon points="172,69 182,75 172,81" class="dg85a-head"/>

  <g class="dg85a-s2">
    <rect x="184" y="40" width="124" height="70" rx="10" class="dg85a-box"/>
    <text x="196" y="64" class="dg85a-lbl">Na+ inside</text>
    <text x="196" y="84" class="dg85a-lbl dg85a-warm">rises</text>
  </g>
  <path d="M310 75 L330 75" class="dg85a-arrow"/><polygon points="330,69 340,75 330,81" class="dg85a-head"/>

  <g class="dg85a-s3">
    <rect x="342" y="40" width="140" height="70" rx="10" class="dg85a-box"/>
    <text x="354" y="64" class="dg85a-lbl">Na+/Ca2+ exchanger</text>
    <text x="354" y="82" class="dg85a-sub">3 Na+ in : 1 Ca2+ out</text>
    <text x="354" y="100" class="dg85a-lbl dg85a-cool">removes less Ca2+</text>
  </g>
  <path d="M484 75 L504 75" class="dg85a-arrow"/><polygon points="504,69 514,75 504,81" class="dg85a-head"/>

  <g class="dg85a-s4">
    <rect x="516" y="30" width="112" height="90" rx="10" class="dg85a-hot"/>
    <text x="528" y="52" class="dg85a-lbl">Ca2+ inside</text>
    <rect x="590" y="60" width="22" height="52" rx="4" class="dg85a-box"/>
    <rect x="590" y="60" width="22" height="52" rx="4" class="dg85a-warm dg85a-ca" style="transform-origin: 601px 112px"/>
    <text x="528" y="80" class="dg85a-lbl dg85a-warm">rises</text>
  </g>

  <path d="M560 122 L560 150 L470 150 L470 170" class="dg85a-arrow"/><polygon points="464,170 470,180 476,170" class="dg85a-head"/>
  <path d="M580 122 L580 170" class="dg85a-arrow"/><polygon points="574,170 580,180 586,170" class="dg85a-head"/>

  <g class="dg85a-s5">
    <rect x="380" y="182" width="150" height="60" rx="10" class="dg85a-good"/>
    <text x="392" y="206" class="dg85a-lbl dg85a-grn">Contractility up</text>
    <text x="392" y="226" class="dg85a-sub">positive inotropy (CHF)</text>
    <rect x="540" y="182" width="96" height="84" rx="10" class="dg85a-hot"/>
    <text x="550" y="204" class="dg85a-lbl dg85a-warm">Delayed</text>
    <text x="550" y="220" class="dg85a-lbl dg85a-warm">afterdepol.</text>
    <text x="550" y="238" class="dg85a-sub">after phase 4</text>
    <text x="550" y="254" class="dg85a-sub">= toxicity</text>
  </g>

  <rect x="12" y="150" width="300" height="46" rx="10" class="dg85a-box"/>
  <text x="24" y="170" class="dg85a-lbl dg85a-warm">Low K+ (loop/thiazide diuretics)</text>
  <text x="24" y="188" class="dg85a-sub">strengthens the pump block -> more Ca2+</text>
  <rect x="12" y="210" width="300" height="46" rx="10" class="dg85a-box"/>
  <text x="24" y="230" class="dg85a-lbl dg85a-grn">Magnesium</text>
  <text x="24" y="248" class="dg85a-sub">inhibits Ca2+ influx into the cytosol</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv85-wpw-af"] = {
  title: "WPW + AF: why AV node blockers are dangerous",
  caption:
    "Atrial fibrillation bombards the ventricles with impulses. Normally the AV node acts as a filter and lets only some through. In Wolff-Parkinson-White an accessory pathway (bundle of Kent) has no filtering capacity. " +
    "Suppress the AV node (verapamil, diltiazem, adenosine, digoxin, beta blockers) and the impulses are diverted down the bundle of Kent, driving the ventricles at 200-300/min. Use procainamide or amiodarone instead.",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Two panels. Left: atrial fibrillation impulses pass through the AV node filter and a few reach the ventricle. Right: the AV node is blocked by a drug, so impulses travel down the bundle of Kent unfiltered and the ventricular rate reaches 200 to 300 per minute.">
  <style>
    .dg85b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg85b-lbl   { font-size: 13px; font-weight: 700; }
    .dg85b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg85b-path  { stroke: var(--dg-ink); stroke-width: 3; fill: none; }
    .dg85b-kent  { stroke: var(--dg-warm); stroke-width: 3; fill: none; stroke-dasharray: 6 4; }
    .dg85b-node  { fill: var(--dg-accent); }
    .dg85b-block { stroke: var(--dg-warm); stroke-width: 4; }
    .dg85b-imp   { fill: var(--dg-cool); }
    .dg85b-fast  { fill: var(--dg-warm); }
    .dg85b-warm  { fill: var(--dg-warm); }
    .dg85b-grn   { fill: var(--dg-good); }
    .dg85b-slow { animation: dg85bdown 3s linear infinite; }
    .dg85b-quick1 { animation: dg85bdown 1s linear infinite; }
    .dg85b-quick2 { animation: dg85bdown 1s linear infinite .5s; }
    @keyframes dg85bdown { 0% { transform: translateY(0); opacity: 0 } 10% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateY(120px); opacity: 0 } }
    .dg85b-jit { animation: dg85bjit .4s steps(2) infinite; }
    @keyframes dg85bjit { 0% { transform: translate(0,0) } 100% { transform: translate(3px,-2px) } }
  </style>

  <rect x="10" y="10" width="300" height="260" rx="12" class="dg85b-panel"/>
  <text x="24" y="32" class="dg85b-lbl">AV node conducting: it filters</text>
  <rect x="330" y="10" width="300" height="260" rx="12" class="dg85b-panel"/>
  <text x="344" y="32" class="dg85b-lbl dg85b-warm">AV node suppressed in WPW</text>

  <g class="dg85b-jit">
    <text x="40" y="58" class="dg85b-sub">atria: chaotic impulses</text>
    <circle cx="60" cy="72" r="4" class="dg85b-imp"/><circle cx="90" cy="68" r="4" class="dg85b-imp"/><circle cx="130" cy="74" r="4" class="dg85b-imp"/><circle cx="170" cy="66" r="4" class="dg85b-imp"/><circle cx="210" cy="72" r="4" class="dg85b-imp"/>
    <text x="360" y="58" class="dg85b-sub">atria: chaotic impulses</text>
    <circle cx="380" cy="72" r="4" class="dg85b-imp"/><circle cx="410" cy="68" r="4" class="dg85b-imp"/><circle cx="450" cy="74" r="4" class="dg85b-imp"/><circle cx="490" cy="66" r="4" class="dg85b-imp"/><circle cx="530" cy="72" r="4" class="dg85b-imp"/>
  </g>

  <path d="M120 90 L120 220" class="dg85b-path"/>
  <circle cx="120" cy="130" r="12" class="dg85b-node"/>
  <text x="140" y="134" class="dg85b-sub">AV node = filter</text>
  <path d="M240 90 L240 220" class="dg85b-kent" opacity=".35"/>
  <text x="200" y="160" class="dg85b-sub">Kent (minor)</text>
  <circle cx="120" cy="96" r="5" class="dg85b-imp dg85b-slow"/>
  <text x="24" y="246" class="dg85b-lbl dg85b-grn">Ventricle: rate controlled</text>

  <path d="M440 90 L440 220" class="dg85b-path" opacity=".4"/>
  <circle cx="440" cy="130" r="12" class="dg85b-node"/>
  <line x1="424" y1="114" x2="456" y2="146" class="dg85b-block"/>
  <line x1="456" y1="114" x2="424" y2="146" class="dg85b-block"/>
  <text x="352" y="176" class="dg85b-sub">verapamil, diltiazem,</text>
  <text x="352" y="190" class="dg85b-sub">adenosine, digoxin, BB</text>
  <path d="M560 90 L560 220" class="dg85b-kent"/>
  <text x="572" y="134" class="dg85b-sub">bundle</text>
  <text x="572" y="148" class="dg85b-sub">of Kent</text>
  <text x="572" y="162" class="dg85b-sub">no filter</text>
  <circle cx="560" cy="96" r="5" class="dg85b-fast dg85b-quick1"/>
  <circle cx="560" cy="96" r="5" class="dg85b-fast dg85b-quick2"/>
  <text x="344" y="246" class="dg85b-lbl dg85b-warm">Ventricle: 200-300/min</text>
  <text x="344" y="262" class="dg85b-sub">Use procainamide or amiodarone</text>
</svg>`,
};

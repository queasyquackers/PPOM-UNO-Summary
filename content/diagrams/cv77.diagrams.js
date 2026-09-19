window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv77-carotid-bifurcation"] = {
  title: "Carotid bifurcation: plaque to amaurosis fugax",
  caption:
    "Laminar flow in the common carotid keeps the endothelium healthy; at the bifurcation flow separates along the outer wall, and that low shear stress region is where plaque forms. " +
    "A fragment breaking off (atheroembolus) travels up the internal carotid, which has no extracranial branches, and can lodge in its first branch, the ophthalmic artery, blinding the same-side eye. " +
    "A cerebral embolus from the same plaque gives TIA symptoms on the opposite side of the body (Slides 24-27).",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Carotid bifurcation. Laminar flow in the common carotid artery, a swirl of low shear stress on the outer wall of the internal carotid where plaque forms, and a fragment of plaque travelling up the branchless internal carotid into the ophthalmic artery. The external carotid has many branches.">
  <style>
    .dg77a-wall { fill: none; stroke: var(--dg-line); stroke-width: 34; stroke-linecap: round; stroke-linejoin: round; }
    .dg77a-lumen { fill: none; stroke: var(--dg-panel); stroke-width: 28; stroke-linecap: round; stroke-linejoin: round; }
    .dg77a-br { fill: none; stroke: var(--dg-line); stroke-width: 9; stroke-linecap: round; }
    .dg77a-oph { fill: none; stroke: var(--dg-accent); stroke-width: 9; stroke-linecap: round; }
    .dg77a-flow { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-dasharray: 10 12; animation: dg77aflow 1.6s linear infinite; }
    @keyframes dg77aflow { from { stroke-dashoffset: 44; } to { stroke-dashoffset: 0; } }
    .dg77a-plaque { fill: var(--dg-warm); }
    .dg77a-eddy { fill: none; stroke: var(--dg-warm); stroke-width: 2.5; transform-box: fill-box; transform-origin: center; animation: dg77aspin 2.4s linear infinite; }
    @keyframes dg77aspin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
    .dg77a-emb { fill: var(--dg-warm); animation: dg77aemb 5s ease-in-out infinite; }
    @keyframes dg77aemb {
      0%, 15% { transform: translate(0, 0); opacity: 0; }
      22% { opacity: 1; }
      50% { transform: translate(-37px, -34px); opacity: 1; }
      70% { transform: translate(-76px, -90px); opacity: 1; }
      90%, 100% { transform: translate(-130px, -101px); opacity: 1; }
    }
    .dg77a-skull { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 5; }
    .dg77a-lbl { font-size: 13px; font-weight: 700; }
    .dg77a-sub { font-size: 11.5px; fill: var(--dg-muted); }
    .dg77a-key { font-size: 12px; }
    .dg77a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
  </style>

  <line x1="60" y1="62" x2="560" y2="62" class="dg77a-skull"/>
  <text x="96" y="76" class="dg77a-sub">skull base</text>

  <path d="M468 68 L512 60" class="dg77a-br"/>
  <path d="M446 81 L496 92" class="dg77a-br"/>
  <path d="M420 97 L466 114" class="dg77a-br"/>
  <path d="M394 113 L432 134" class="dg77a-br"/>

  <path d="M300 292 L300 200 Q300 176 280 156 L190 76 L180 30" class="dg77a-wall"/>
  <path d="M300 200 Q300 176 322 158 L480 60" class="dg77a-wall"/>
  <path d="M300 292 L300 200 Q300 176 280 156 L190 76 L180 30" class="dg77a-lumen"/>
  <path d="M300 200 Q300 176 322 158 L480 60" class="dg77a-lumen"/>

  <path d="M184 48 L120 44" class="dg77a-oph"/>

  <path d="M300 288 L300 204" class="dg77a-flow"/>
  <path d="M290 288 L290 204" class="dg77a-flow"/>
  <path d="M310 288 L310 204" class="dg77a-flow"/>

  <ellipse cx="259" cy="151" rx="12" ry="5" transform="rotate(41.6 259 151)" class="dg77a-plaque"/>
  <circle cx="276" cy="160" r="6" class="dg77a-eddy" stroke-dasharray="26 12"/>

  <circle cx="262" cy="146" r="5" class="dg77a-emb"/>

  <text x="280" y="262" text-anchor="end" class="dg77a-lbl">Common carotid</text>
  <text x="280" y="278" text-anchor="end" class="dg77a-sub">laminar flow: healthy endothelium</text>

  <text x="20" y="176" class="dg77a-lbl">Outer wall of bifurcation</text>
  <text x="20" y="192" class="dg77a-sub">flow separates &#8594; low shear stress</text>
  <text x="20" y="207" class="dg77a-sub">&#8594; plaque forms here</text>

  <text x="20" y="112" class="dg77a-lbl">Internal carotid</text>
  <text x="20" y="128" class="dg77a-sub">no extracranial branches</text>

  <text x="20" y="30" class="dg77a-lbl">Ophthalmic artery</text>
  <text x="20" y="46" class="dg77a-sub">1st ICA branch</text>

  <text x="436" y="196" class="dg77a-lbl">External carotid</text>
  <text x="436" y="212" class="dg77a-sub">many branches</text>

  <rect x="400" y="226" width="206" height="66" rx="8" class="dg77a-box"/>
  <text x="410" y="244" class="dg77a-key" font-weight="700">Right ICA plaque embolizes:</text>
  <text x="410" y="262" class="dg77a-key">Ophthalmic a. &#8594; RIGHT eye</text>
  <text x="410" y="280" class="dg77a-key">Brain (MCA) &#8594; LEFT body TIA</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv77-venous-valves"] = {
  title: "Muscle pump, valves and reflux",
  caption:
    "Left: deep veins lie within the calf musculature, so each contraction squeezes blood toward the heart and competent one-way valves stop it falling back. " +
    "Right: when the valves are incompetent, blood refluxes and pools, and the unsupported superficial vein dilates into a varicose vein. " +
    "Remove the pump (a sedentary lifestyle) or the valves and venous return fails - the basis of chronic venous insufficiency (Slides 32-34).",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Two leg veins side by side. On the left, calf muscles squeeze a deep vein and closed valves let blood move only upward toward the heart. On the right, valve cusps do not meet, blood moves up and then falls back, and the vein is dilated.">
  <style>
    .dg77b-vein { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 2; }
    .dg77b-mus { fill: var(--dg-accent); opacity: .35; }
    .dg77b-sqL { transform-box: fill-box; transform-origin: left center; animation: dg77bsqL 2.4s ease-in-out infinite; }
    .dg77b-sqR { transform-box: fill-box; transform-origin: right center; animation: dg77bsqR 2.4s ease-in-out infinite; }
    @keyframes dg77bsqL { 0%, 100% { transform: scaleX(1); } 40% { transform: scaleX(1.16); } }
    @keyframes dg77bsqR { 0%, 100% { transform: scaleX(1); } 40% { transform: scaleX(1.16); } }
    .dg77b-valve { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg77b-bad { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg77b-rbc { fill: var(--dg-cool); }
    .dg77b-rbcw { fill: var(--dg-warm); }
    .dg77b-up1 { animation: dg77bup 2.4s linear infinite; }
    .dg77b-up2 { animation: dg77bup 2.4s linear infinite .8s; }
    .dg77b-up3 { animation: dg77bup 2.4s linear infinite 1.6s; }
    @keyframes dg77bup { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(-180px); opacity: 0; } }
    .dg77b-re1 { animation: dg77bre 3s ease-in-out infinite; }
    .dg77b-re2 { animation: dg77bre 3s ease-in-out infinite 1s; }
    .dg77b-re3 { animation: dg77bre 3s ease-in-out infinite 2s; }
    @keyframes dg77bre { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-46px); } 75% { transform: translateY(10px); } }
    .dg77b-lbl { font-size: 13px; font-weight: 700; }
    .dg77b-sub { font-size: 11.5px; fill: var(--dg-muted); }
    .dg77b-div { stroke: var(--dg-line); stroke-width: 1.2; }
  </style>

  <text x="150" y="20" text-anchor="middle" class="dg77b-lbl">Competent valves + calf pump</text>
  <text x="150" y="36" text-anchor="middle" class="dg77b-sub">to heart</text>
  <polygon points="150,42 142,56 158,56" fill="var(--dg-good)"/>

  <rect x="130" y="60" width="40" height="200" rx="6" class="dg77b-vein"/>
  <rect x="84" y="120" width="40" height="110" rx="14" class="dg77b-mus dg77b-sqL"/>
  <rect x="176" y="120" width="40" height="110" rx="14" class="dg77b-mus dg77b-sqR"/>
  <text x="60" y="250" class="dg77b-sub">calf muscle</text>

  <line x1="132" y1="118" x2="150" y2="104" class="dg77b-valve"/>
  <line x1="168" y1="118" x2="150" y2="104" class="dg77b-valve"/>
  <line x1="132" y1="198" x2="150" y2="184" class="dg77b-valve"/>
  <line x1="168" y1="198" x2="150" y2="184" class="dg77b-valve"/>

  <circle cx="150" cy="250" r="6" class="dg77b-rbc dg77b-up1"/>
  <circle cx="150" cy="250" r="6" class="dg77b-rbc dg77b-up2"/>
  <circle cx="150" cy="250" r="6" class="dg77b-rbc dg77b-up3"/>

  <text x="150" y="282" text-anchor="middle" class="dg77b-sub">one-way flow; no backflow</text>

  <line x1="310" y1="20" x2="310" y2="290" class="dg77b-div"/>

  <text x="465" y="20" text-anchor="middle" class="dg77b-lbl">Valve incompetence</text>
  <text x="465" y="36" text-anchor="middle" class="dg77b-sub">reflux, stasis and pooling</text>

  <path d="M438 60 Q418 110 436 150 Q412 200 436 260 L494 260 Q518 200 494 150 Q512 110 492 60 Z" class="dg77b-vein"/>

  <line x1="428" y1="118" x2="448" y2="106" class="dg77b-bad"/>
  <line x1="502" y1="118" x2="482" y2="106" class="dg77b-bad"/>
  <line x1="426" y1="198" x2="446" y2="186" class="dg77b-bad"/>
  <line x1="504" y1="198" x2="484" y2="186" class="dg77b-bad"/>

  <circle cx="465" cy="232" r="6" class="dg77b-rbcw dg77b-re1"/>
  <circle cx="452" cy="160" r="6" class="dg77b-rbcw dg77b-re2"/>
  <circle cx="478" cy="236" r="6" class="dg77b-rbcw dg77b-re3"/>

  <text x="530" y="112" class="dg77b-sub">cusps</text>
  <text x="530" y="126" class="dg77b-sub">do not meet</text>
  <text x="530" y="226" class="dg77b-sub">dilated</text>
  <text x="530" y="240" class="dg77b-sub">(varicose)</text>

  <text x="465" y="282" text-anchor="middle" class="dg77b-sub">blood falls back and pools</text>
</svg>`,
};

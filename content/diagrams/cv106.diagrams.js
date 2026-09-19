window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv106-rf-mimicry"] = {
  title: "Molecular mimicry in rheumatic fever",
  caption:
    "Group A strep pharyngitis prompts antibodies against the streptococcal M protein. About 3 weeks later (Slide 4) those same antibodies meet host proteins that look alike - cardiac myosin and valve laminin - and bind them, a type II hypersensitivity (Slide 6). " +
    "No bacteria reach the heart: the lag is the time it takes to make the antibodies, and the damage is the host's own immune response.",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Three panels left to right: strep throat infection displaying M protein, antibodies made against M protein over about three weeks, and the same antibodies binding look-alike cardiac myosin and valve laminin, causing pancarditis.">
  <style>
    .dg106a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg106a-h { font-size: 14px; font-weight: 700; }
    .dg106a-t { font-size: 12px; }
    .dg106a-s { font-size: 11px; fill: var(--dg-muted); }
    .dg106a-bug { fill: var(--dg-cool); }
    .dg106a-m { stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg106a-self { fill: var(--dg-warm); }
    .dg106a-ab { stroke: var(--dg-accent); stroke-width: 3; fill: none; stroke-linecap: round; }
    .dg106a-arrow { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg106a-head { fill: var(--dg-ink); }
    .dg106a-hit { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; }
    .dg106a-move { animation: dg106amove 5s ease-in-out infinite; }
    @keyframes dg106amove {
      0% { transform: translateX(-190px); opacity: 0 }
      15% { opacity: 1 }
      55% { transform: translateX(0); opacity: 1 }
      100% { transform: translateX(0); opacity: 1 }
    }
    .dg106a-flash { animation: dg106aflash 5s ease-in-out infinite; }
    @keyframes dg106aflash { 0%, 55% { opacity: .25 } 70%, 100% { opacity: 1 } }
  </style>

  <rect x="10" y="30" width="190" height="180" rx="12" class="dg106a-panel"/>
  <text x="22" y="22" class="dg106a-h">1. Pharyngitis</text>
  <circle cx="70" cy="100" r="11" class="dg106a-bug"/>
  <circle cx="94" cy="100" r="11" class="dg106a-bug"/>
  <circle cx="118" cy="100" r="11" class="dg106a-bug"/>
  <circle cx="142" cy="100" r="11" class="dg106a-bug"/>
  <line x1="70" y1="89" x2="70" y2="78" class="dg106a-m"/>
  <line x1="94" y1="89" x2="94" y2="78" class="dg106a-m"/>
  <line x1="118" y1="89" x2="118" y2="78" class="dg106a-m"/>
  <line x1="142" y1="89" x2="142" y2="78" class="dg106a-m"/>
  <text x="24" y="140" class="dg106a-t">Group A strep in chains</text>
  <text x="24" y="158" class="dg106a-t">surface M protein (spikes)</text>
  <text x="24" y="190" class="dg106a-s">Immune response starts</text>

  <line x1="204" y1="120" x2="222" y2="120" class="dg106a-arrow"/>
  <polygon points="222,114 232,120 222,126" class="dg106a-head"/>

  <rect x="236" y="30" width="180" height="180" rx="12" class="dg106a-panel"/>
  <text x="248" y="22" class="dg106a-h">2. About 3 weeks</text>
  <path d="M300 110 L300 88 M300 88 L288 72 M300 88 L312 72" class="dg106a-ab"/>
  <path d="M350 110 L350 88 M350 88 L338 72 M350 88 L362 72" class="dg106a-ab"/>
  <text x="250" y="140" class="dg106a-t">Antibodies against</text>
  <text x="250" y="158" class="dg106a-t">M protein are made</text>
  <text x="250" y="190" class="dg106a-s">The lag = antibody production</text>

  <line x1="420" y1="120" x2="438" y2="120" class="dg106a-arrow"/>
  <polygon points="438,114 448,120 438,126" class="dg106a-head"/>

  <rect x="452" y="30" width="180" height="180" rx="12" class="dg106a-panel"/>
  <text x="464" y="22" class="dg106a-h">3. Heart</text>
  <rect x="480" y="112" width="40" height="14" rx="4" class="dg106a-self"/>
  <rect x="560" y="112" width="40" height="14" rx="4" class="dg106a-self"/>
  <g class="dg106a-move">
    <path d="M500 108 L500 88 M500 88 L488 72 M500 88 L512 72" class="dg106a-ab"/>
    <path d="M580 108 L580 88 M580 88 L568 72 M580 88 L592 72" class="dg106a-ab"/>
  </g>
  <circle cx="500" cy="119" r="20" class="dg106a-hit dg106a-flash"/>
  <circle cx="580" cy="119" r="20" class="dg106a-hit dg106a-flash"/>
  <text x="466" y="156" class="dg106a-t">Cardiac myosin</text>
  <text x="466" y="172" class="dg106a-t">and valve laminin</text>
  <text x="466" y="196" class="dg106a-s">Cross-reaction: pancarditis</text>

  <text x="10" y="248" class="dg106a-s">Type II (antibody-mediated) hypersensitivity - molecular mimicry. Worst on the mitral valve.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv106-rmsf-rash"] = {
  title: "Where the RMSF rash starts",
  caption:
    "After 7-10 days of bacteremia, Rickettsia rickettsii invades vascular endothelial cells and the resulting vasculitis and hemorrhage produce the rash (Slides 11-12). " +
    "It appears first on the wrists and ankles (1), then spreads up the extremities (2) to the trunk (3). A severe headache from vasculitis of cerebral vessels often comes first.",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="A body outline on which macules appear first at the wrists and ankles, then along the arms and legs, and finally on the trunk, showing the rash spreading from the extremities inward.">
  <style>
    .dg106b-body { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg106b-limb { stroke: var(--dg-line); stroke-width: 16; stroke-linecap: round; }
    .dg106b-dot { fill: var(--dg-warm); }
    .dg106b-h { font-size: 14px; font-weight: 700; }
    .dg106b-t { font-size: 12px; }
    .dg106b-s { font-size: 11px; fill: var(--dg-muted); }
    .dg106b-n { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg106b-arrow { stroke: var(--dg-accent); stroke-width: 2.5; fill: none; }
    .dg106b-head { fill: var(--dg-accent); }
    .dg106b-w1 { animation: dg106bshow 6s linear infinite; }
    .dg106b-w2 { animation: dg106bshow2 6s linear infinite; }
    .dg106b-w3 { animation: dg106bshow3 6s linear infinite; }
    @keyframes dg106bshow { 0% { opacity: 0 } 8%, 92% { opacity: 1 } 100% { opacity: 0 } }
    @keyframes dg106bshow2 { 0%, 30% { opacity: 0 } 40%, 92% { opacity: 1 } 100% { opacity: 0 } }
    @keyframes dg106bshow3 { 0%, 58% { opacity: 0 } 68%, 92% { opacity: 1 } 100% { opacity: 0 } }
  </style>

  <circle cx="150" cy="40" r="22" class="dg106b-body"/>
  <line x1="126" y1="82" x2="70" y2="170" class="dg106b-limb"/>
  <line x1="174" y1="82" x2="230" y2="170" class="dg106b-limb"/>
  <line x1="136" y1="180" x2="116" y2="276" class="dg106b-limb"/>
  <line x1="164" y1="180" x2="184" y2="276" class="dg106b-limb"/>
  <rect x="120" y="66" width="60" height="120" rx="14" class="dg106b-body"/>

  <g class="dg106b-w1">
    <circle cx="72" cy="164" r="4" class="dg106b-dot"/>
    <circle cx="80" cy="170" r="3.5" class="dg106b-dot"/>
    <circle cx="228" cy="164" r="4" class="dg106b-dot"/>
    <circle cx="220" cy="170" r="3.5" class="dg106b-dot"/>
    <circle cx="118" cy="268" r="4" class="dg106b-dot"/>
    <circle cx="112" cy="260" r="3.5" class="dg106b-dot"/>
    <circle cx="182" cy="268" r="4" class="dg106b-dot"/>
    <circle cx="188" cy="260" r="3.5" class="dg106b-dot"/>
  </g>
  <g class="dg106b-w2">
    <circle cx="96" cy="128" r="3.5" class="dg106b-dot"/>
    <circle cx="110" cy="104" r="3.5" class="dg106b-dot"/>
    <circle cx="204" cy="128" r="3.5" class="dg106b-dot"/>
    <circle cx="190" cy="104" r="3.5" class="dg106b-dot"/>
    <circle cx="126" cy="226" r="3.5" class="dg106b-dot"/>
    <circle cx="174" cy="226" r="3.5" class="dg106b-dot"/>
    <circle cx="130" cy="202" r="3.5" class="dg106b-dot"/>
    <circle cx="170" cy="202" r="3.5" class="dg106b-dot"/>
  </g>
  <g class="dg106b-w3">
    <circle cx="138" cy="92" r="3.5" class="dg106b-dot"/>
    <circle cx="162" cy="100" r="3.5" class="dg106b-dot"/>
    <circle cx="146" cy="120" r="3.5" class="dg106b-dot"/>
    <circle cx="164" cy="138" r="3.5" class="dg106b-dot"/>
    <circle cx="136" cy="150" r="3.5" class="dg106b-dot"/>
    <circle cx="156" cy="168" r="3.5" class="dg106b-dot"/>
  </g>

  <text x="40" y="196" class="dg106b-n">1</text>
  <text x="222" y="196" class="dg106b-n">1</text>
  <text x="84" y="116" class="dg106b-n">2</text>
  <text x="144" y="112" class="dg106b-n">3</text>

  <text x="300" y="40" class="dg106b-h">Rash spreads from the extremities inward</text>
  <text x="300" y="76" class="dg106b-n">1</text>
  <text x="318" y="76" class="dg106b-t">Wrists and ankles first (macules)</text>
  <text x="300" y="106" class="dg106b-n">2</text>
  <text x="318" y="106" class="dg106b-t">Up the rest of the extremities</text>
  <text x="300" y="136" class="dg106b-n">3</text>
  <text x="318" y="136" class="dg106b-t">Trunk last</text>
  <line x1="300" y1="164" x2="560" y2="164" class="dg106b-arrow"/>
  <polygon points="560,158 572,164 560,170" class="dg106b-head"/>
  <text x="300" y="190" class="dg106b-s">Cause: endothelial infection, vasculitis, hemorrhage</text>
  <text x="300" y="210" class="dg106b-s">Earlier clue: severe headache (cerebral vasculitis)</text>
  <text x="300" y="240" class="dg106b-t">Tick exposure + this rash: start doxycycline now</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv106-tcruzi-cycle"] = {
  title: "Trypanosoma cruzi: travel form to hiding form",
  caption:
    "The reduviid bug bites the face at night and defecates while feeding; trypomastigotes in the feces enter the wound (Slide 16). " +
    "The trypomastigote - flagellum plus undulating membrane - is the infective form in the blood early on; after invading muscle, liver, spleen or nerve cells it becomes the amastigote, which has neither, divides, and packs the cell as a pseudocyst with no cyst wall (Slide 15). " +
    "That shift is why acute Chagas is diagnosed on a blood smear and chronic Chagas by serology.",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Three stages left to right: trypomastigotes in reduviid bug feces at the bite, a C-shaped flagellated trypomastigote travelling in the blood, and a host muscle cell filled with dividing round amastigotes forming a pseudocyst.">
  <style>
    .dg106c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg106c-h { font-size: 14px; font-weight: 700; }
    .dg106c-t { font-size: 12px; }
    .dg106c-s { font-size: 11px; fill: var(--dg-muted); }
    .dg106c-tryp { stroke: var(--dg-cool); stroke-width: 3; fill: none; stroke-linecap: round; }
    .dg106c-fl { stroke: var(--dg-cool); stroke-width: 1.5; fill: none; }
    .dg106c-ama { fill: var(--dg-warm); }
    .dg106c-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg106c-nuc { fill: var(--dg-line); }
    .dg106c-arrow { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg106c-head { fill: var(--dg-ink); }
    .dg106c-swim { animation: dg106cswim 4s ease-in-out infinite; }
    @keyframes dg106cswim { 0%, 100% { transform: translateX(-14px) } 50% { transform: translateX(14px) } }
    .dg106c-d1 { animation: dg106cgrow 6s ease-in-out infinite; }
    .dg106c-d2 { animation: dg106cgrow 6s ease-in-out infinite 1s; }
    .dg106c-d3 { animation: dg106cgrow 6s ease-in-out infinite 2s; }
    @keyframes dg106cgrow { 0% { opacity: .15 } 30%, 100% { opacity: 1 } }
  </style>

  <rect x="10" y="30" width="180" height="190" rx="12" class="dg106c-panel"/>
  <text x="22" y="22" class="dg106c-h">1. Bite (face, night)</text>
  <ellipse cx="100" cy="92" rx="46" ry="18" class="dg106c-cell"/>
  <text x="70" y="96" class="dg106c-s">bug feces</text>
  <path d="M70 130 q10 -14 22 0" class="dg106c-tryp"/>
  <path d="M110 136 q10 -14 22 0" class="dg106c-tryp"/>
  <text x="22" y="170" class="dg106c-t">Trypomastigotes enter</text>
  <text x="22" y="186" class="dg106c-t">the bite or conjunctiva</text>
  <text x="22" y="208" class="dg106c-s">Chagoma / Romana sign</text>

  <line x1="194" y1="125" x2="214" y2="125" class="dg106c-arrow"/>
  <polygon points="214,119 224,125 214,131" class="dg106c-head"/>

  <rect x="228" y="30" width="190" height="190" rx="12" class="dg106c-panel"/>
  <text x="240" y="22" class="dg106c-h">2. Blood (early)</text>
  <g class="dg106c-swim">
    <path d="M290 110 q34 -40 68 0" class="dg106c-tryp"/>
    <path d="M292 104 q32 -32 64 0" class="dg106c-fl"/>
    <path d="M358 110 q10 12 22 6" class="dg106c-fl"/>
  </g>
  <text x="240" y="160" class="dg106c-t">Trypomastigote: C-shaped,</text>
  <text x="240" y="176" class="dg106c-t">undulating membrane, flagellum</text>
  <text x="240" y="208" class="dg106c-s">Infective form - seen on smear</text>

  <line x1="422" y1="125" x2="442" y2="125" class="dg106c-arrow"/>
  <polygon points="442,119 452,125 442,131" class="dg106c-head"/>

  <rect x="456" y="30" width="176" height="190" rx="12" class="dg106c-panel"/>
  <text x="468" y="22" class="dg106c-h">3. Tissue (invaded)</text>
  <rect x="478" y="56" width="132" height="84" rx="10" class="dg106c-cell"/>
  <circle cx="496" cy="98" r="8" class="dg106c-nuc"/>
  <g class="dg106c-d1"><circle cx="530" cy="80" r="5" class="dg106c-ama"/><circle cx="546" cy="84" r="5" class="dg106c-ama"/></g>
  <g class="dg106c-d2"><circle cx="562" cy="80" r="5" class="dg106c-ama"/><circle cx="534" cy="100" r="5" class="dg106c-ama"/><circle cx="550" cy="102" r="5" class="dg106c-ama"/></g>
  <g class="dg106c-d3"><circle cx="566" cy="100" r="5" class="dg106c-ama"/><circle cx="582" cy="92" r="5" class="dg106c-ama"/><circle cx="540" cy="120" r="5" class="dg106c-ama"/><circle cx="558" cy="120" r="5" class="dg106c-ama"/><circle cx="576" cy="116" r="5" class="dg106c-ama"/></g>
  <text x="468" y="160" class="dg106c-t">Amastigotes: no flagellum,</text>
  <text x="468" y="176" class="dg106c-t">divide into a pseudocyst</text>
  <text x="468" y="208" class="dg106c-s">Heart, gut nerves: chronic</text>

  <text x="10" y="258" class="dg106c-s">Muscle (incl. heart), liver, spleen, CNS and PNS. Chronic disease years later: dilated cardiomyopathy, megaesophagus, megacolon.</text>
</svg>`,
};

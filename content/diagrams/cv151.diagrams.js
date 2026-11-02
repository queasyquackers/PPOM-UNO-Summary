window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv151-tma-shear"] = {
  title: "Thrombi shear passing red cells",
  caption: "A schematic, not a lecture image. Endothelial injury and platelet activation build a thrombus in a capillary or arteriole. Round red cells enter from the left, are sheared where the thrombus disturbs flow, and leave as fragments, which is the microangiopathic hemolytic anemia of HUS, TTP and malignant hypertension. Platelets stick to the thrombus and few reach the far side, and the narrowed vessel leaves downstream tissue ischemic (Slide 14).",
  svg: `<svg viewBox="0 0 620 300" role="img" aria-label="A capillary drawn left to right with a thrombus on an injured wall. Round red cells and platelets flow in from the left. Past the thrombus only red cell fragments continue. Three boxes below name the results: sheared red cells cause microangiopathic hemolytic anemia, platelets are used up causing thrombocytopenia, and vessel occlusion causes tissue ischemia.">
  <style>
    .dg151a-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg151a-wall { stroke: var(--dg-ink); stroke-width: 2.5; opacity: .7; }
    .dg151a-hurt { fill: none; stroke: var(--dg-warm); stroke-width: 3; }
    .dg151a-clot { fill: var(--dg-accent); opacity: .85; }
    .dg151a-plt { fill: var(--dg-accent); }
    .dg151a-rbc { fill: var(--dg-warm); }
    .dg151a-lbl { font-size: 12px; }
    .dg151a-hd { font-size: 12px; font-weight: 700; }
    .dg151a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg151a-box { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg151a-tie { stroke: var(--dg-muted); stroke-width: 1.2; }
    .dg151a-belt { animation: dg151abelt 1.9s linear infinite; }
    .dg151a-in { animation: dg151ain 1.9s linear infinite; }
    .dg151a-out { animation: dg151aout 1.9s linear infinite; }
    @keyframes dg151abelt { from { transform: translateX(0) } to { transform: translateX(70px) } }
    @keyframes dg151ain { 0% { transform: translateX(0); opacity: 0 } 40% { opacity: 1 } 100% { transform: translateX(70px); opacity: 1 } }
    @keyframes dg151aout { 0% { transform: translateX(0); opacity: 1 } 60% { opacity: 1 } 100% { transform: translateX(70px); opacity: 0 } }
  </style>

  <text x="20" y="20" class="dg151a-hd">Capillary or arteriole</text>
  <text x="20" y="36" class="dg151a-sub">Blood flows left to right</text>

  <rect x="20" y="48" width="580" height="104" rx="18" class="dg151a-lumen"/>
  <line x1="36" y1="48" x2="584" y2="48" class="dg151a-wall"/>
  <line x1="36" y1="152" x2="584" y2="152" class="dg151a-wall"/>

  <polyline points="256,48 268,42 280,48 292,42 304,48 316,42 328,48 340,42 352,48" class="dg151a-hurt"/>
  <text x="304" y="34" text-anchor="middle" class="dg151a-lbl">Endothelial injury</text>

  <path d="M262 49 C266 86 288 104 304 106 C322 104 342 86 346 49 Z" class="dg151a-clot"/>
  <text x="304" y="78" text-anchor="middle" font-size="12" font-weight="700" style="fill: var(--dg-surface)">Thrombus</text>

  <g class="dg151a-in"><circle cx="46" cy="126" r="10" class="dg151a-rbc"/></g>
  <g class="dg151a-belt"><circle cx="116" cy="126" r="10" class="dg151a-rbc"/></g>
  <g class="dg151a-belt"><circle cx="186" cy="126" r="10" class="dg151a-rbc"/></g>
  <g class="dg151a-out"><circle cx="256" cy="128" r="10" class="dg151a-rbc"/></g>

  <g class="dg151a-in"><circle cx="46" cy="82" r="3.5" class="dg151a-plt"/><circle cx="62" cy="96" r="3" class="dg151a-plt"/></g>
  <g class="dg151a-belt"><circle cx="116" cy="82" r="3.5" class="dg151a-plt"/><circle cx="132" cy="96" r="3" class="dg151a-plt"/></g>
  <g class="dg151a-out"><circle cx="192" cy="82" r="3.5" class="dg151a-plt"/><circle cx="212" cy="74" r="3" class="dg151a-plt"/></g>

  <g class="dg151a-in"><path d="M352 118 l14 5 l-9 10 Z" class="dg151a-rbc"/></g>
  <g class="dg151a-belt"><path d="M422 118 l12 8 l-13 7 Z" class="dg151a-rbc"/><path d="M444 132 l8 -9 l5 11 Z" class="dg151a-rbc"/></g>
  <g class="dg151a-belt"><path d="M492 120 l15 3 l-11 11 Z" class="dg151a-rbc"/></g>
  <g class="dg151a-out"><path d="M522 118 l12 8 l-13 7 Z" class="dg151a-rbc"/></g>

  <line x1="116" y1="152" x2="116" y2="192" class="dg151a-tie"/>
  <line x1="310" y1="106" x2="310" y2="192" class="dg151a-tie"/>
  <line x1="504" y1="152" x2="504" y2="192" class="dg151a-tie"/>

  <rect x="20" y="192" width="186" height="92" rx="10" class="dg151a-box"/>
  <text x="32" y="214" class="dg151a-hd">Platelets used up</text>
  <text x="32" y="234" class="dg151a-sub">Activated and aggregated</text>
  <text x="32" y="250" class="dg151a-sub">into the thrombus</text>
  <text x="32" y="270" class="dg151a-lbl">Thrombocytopenia</text>

  <rect x="217" y="192" width="186" height="92" rx="10" class="dg151a-box"/>
  <text x="229" y="214" class="dg151a-hd">Red cells sheared</text>
  <text x="229" y="234" class="dg151a-sub">Disturbed flow past the thrombus</text>
  <text x="229" y="250" class="dg151a-sub">Schistocytes on smear</text>
  <text x="229" y="270" class="dg151a-lbl">MAHA</text>

  <rect x="414" y="192" width="186" height="92" rx="10" class="dg151a-box"/>
  <text x="426" y="214" class="dg151a-hd">Vessel occluded</text>
  <text x="426" y="234" class="dg151a-sub">Less blood reaches the</text>
  <text x="426" y="250" class="dg151a-sub">tissue downstream</text>
  <text x="426" y="270" class="dg151a-lbl">Tissue ischemia</text>
</svg>`
};
window.LECTURE_DIAGRAMS["cv151-rvh-kidneys"] = {
  title: "One stenosis, two kidneys",
  caption: "A schematic, not a lecture image. A plaque limits flow to the ischemic kidney, so that kidney raises renin, and the RAS pathway elevates blood pressure. The stenosis shields the ischemic kidney's own arterioles from the excess pressure, while the contralateral kidney takes it and may show severe arteriolosclerosis. Follow the thick line to see why the kidney without the plaque is the one whose arterioles scar (Slide 22).",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="An aorta in the center gives a renal artery to each side. The left renal artery has a plaque, so only a thin flow reaches the ischemic kidney, which sends renin to the RAS pathway. The RAS pathway raises blood pressure in the aorta. A thick flow reaches the contralateral kidney, which develops severe arteriolosclerosis, while the arterioles of the ischemic kidney are protected.">
  <style>
    .dg151b-aorta { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg151b-kid { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg151b-kidhot { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 3; }
    .dg151b-plaque { fill: var(--dg-accent); }
    .dg151b-box { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg151b-hd { font-size: 13px; font-weight: 700; }
    .dg151b-lbl { font-size: 12px; }
    .dg151b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg151b-flow { fill: none; stroke-linecap: round; stroke-dasharray: 10 12; animation: dg151bdash 1.1s linear infinite; }
    .dg151b-high { stroke: var(--dg-warm); stroke-width: 9; }
    .dg151b-low { stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg151b-renin { stroke: var(--dg-accent); stroke-width: 3; stroke-dasharray: 3 8; animation: dg151bdash2 1.5s linear infinite; }
    .dg151b-pulse { animation: dg151bpulse 2.2s ease-in-out infinite; }
    @keyframes dg151bdash { to { stroke-dashoffset: -44 } }
    @keyframes dg151bdash2 { to { stroke-dashoffset: -22 } }
    @keyframes dg151bpulse { 0%,100% { opacity: .45 } 50% { opacity: 1 } }
  </style>

  <rect x="296" y="92" width="48" height="196" rx="8" class="dg151b-aorta"/>
  <text x="320" y="278" text-anchor="middle" class="dg151b-sub">Aorta</text>

  <path d="M296 168 L232 168" class="dg151b-flow dg151b-high"/>
  <path d="M212 168 L132 168" class="dg151b-flow dg151b-low"/>
  <path d="M344 168 L508 168" class="dg151b-flow dg151b-high"/>
  <path d="M320 248 L320 112" class="dg151b-flow dg151b-high"/>

  <path d="M236 150 C226 158 216 158 208 150 L208 186 C216 178 226 178 236 186 Z" class="dg151b-plaque"/>
  <text x="222" y="208" text-anchor="middle" class="dg151b-lbl">Plaque</text>
  <text x="222" y="224" text-anchor="middle" class="dg151b-sub">renal artery stenosis</text>

  <ellipse cx="90" cy="168" rx="46" ry="66" class="dg151b-kid"/>
  <text x="90" y="164" text-anchor="middle" class="dg151b-lbl">Ischemic</text>
  <text x="90" y="180" text-anchor="middle" class="dg151b-lbl">kidney</text>

  <ellipse cx="552" cy="168" rx="46" ry="66" class="dg151b-kidhot"/>
  <text x="552" y="164" text-anchor="middle" class="dg151b-lbl">Contralateral</text>
  <text x="552" y="180" text-anchor="middle" class="dg151b-lbl">kidney</text>

  <path d="M90 100 L90 44 L234 44" class="dg151b-renin" fill="none"/>
  <text x="102" y="36" class="dg151b-lbl">Renin raised</text>

  <rect x="236" y="20" width="168" height="48" rx="10" class="dg151b-box"/>
  <text x="320" y="40" text-anchor="middle" class="dg151b-hd">RAS pathway</text>
  <text x="320" y="58" text-anchor="middle" class="dg151b-sub">elevates blood pressure</text>
  <path d="M320 68 L320 90" stroke="var(--dg-accent)" stroke-width="3" class="dg151b-pulse"/>

  <text x="90" y="256" text-anchor="middle" class="dg151b-hd">Arterioles protected</text>
  <text x="90" y="274" text-anchor="middle" class="dg151b-sub">Less pressure gets through</text>

  <text x="520" y="256" text-anchor="middle" class="dg151b-hd" style="fill: var(--dg-warm)">Severe arteriolosclerosis</text>
  <text x="520" y="274" text-anchor="middle" class="dg151b-sub">Takes the excess pressure</text>
</svg>`
};

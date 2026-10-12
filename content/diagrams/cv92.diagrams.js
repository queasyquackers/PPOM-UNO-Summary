window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv92-fetal-shunts"] = {
  title: "Fetal circulation: three shunts",
  caption:
    "Oxygenated blood leaves the placenta in the single umbilical vein and reaches the aorta by skipping two organs the fetus does not need yet. " +
    "The ductus venosus bypasses the liver, the foramen ovale carries blood from right atrium to left atrium, and the ductus arteriosus carries right ventricular output from the pulmonary artery to the aorta, so the fluid-filled, high-pressure lungs are bypassed twice. " +
    "Two umbilical arteries return blood to the placenta (Slides 6-7).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Flow chart of the fetal circulation. Blood runs from the placenta through the umbilical vein and ductus venosus, past the liver, to the right atrium, across the foramen ovale to the left atrium, left ventricle and aorta. A second route runs from right atrium to right ventricle to pulmonary artery and through the ductus arteriosus to the aorta, bypassing the lungs. Two umbilical arteries return blood to the placenta.">
  <style>
    .dg92a-node  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg92a-skip  { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg92a-lbl   { font-size: 12px; font-weight: 700; }
    .dg92a-sub.dg92a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg92a-shunt.dg92a-shunt { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg92a-oxy   { stroke: var(--dg-warm); stroke-width: 4; fill: none; stroke-linecap: round; }
    .dg92a-mix   { stroke: var(--dg-cool); stroke-width: 4; fill: none; stroke-linecap: round; }
    .dg92a-thin  { stroke: var(--dg-muted); stroke-width: 1.5; fill: none; stroke-dasharray: 4 4; }
    .dg92a-hot   { fill: var(--dg-warm); }
    .dg92a-cold  { fill: var(--dg-cool); }
    .dg92a-d1 { animation: dg92aRun 5s linear infinite; }
    .dg92a-d2 { animation: dg92aLoop 5s linear infinite; }
    .dg92a-d3 { animation: dg92aBack 7s linear infinite; }
    @keyframes dg92aRun { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 92% { opacity: 1 } 100% { transform: translateX(476px); opacity: 0 } }
    @keyframes dg92aLoop { 0% { transform: translate(0,0); opacity: 0 } 10% { opacity: 1 } 20% { transform: translate(0,77px) } 80% { transform: translate(313px,77px) } 92% { opacity: 1 } 100% { transform: translate(313px,0); opacity: 0 } }
    @keyframes dg92aBack { 0% { transform: translate(0,0); opacity: 0 } 8% { opacity: 1 } 22% { transform: translate(0,186px) } 78% { transform: translate(-571px,186px) } 92% { opacity: 1 } 100% { transform: translate(-571px,0); opacity: 0 } }
  </style>

  <line x1="80" y1="69" x2="250" y2="69" class="dg92a-oxy"/>
  <line x1="306" y1="69" x2="372" y2="69" class="dg92a-oxy"/>
  <line x1="428" y1="69" x2="448" y2="69" class="dg92a-oxy"/>
  <line x1="504" y1="69" x2="556" y2="69" class="dg92a-oxy"/>
  <polygon points="240,61 254,69 240,77" class="dg92a-hot"/>
  <polygon points="362,61 376,69 362,77" class="dg92a-hot"/>
  <polygon points="546,61 560,69 546,77" class="dg92a-hot"/>

  <polyline points="278,86 278,167 360,167" class="dg92a-mix"/>
  <polyline points="440,167 591,167 591,90" class="dg92a-mix"/>
  <polygon points="583,100 591,84 599,100" class="dg92a-cold"/>
  <polyline points="616,86 616,276 45,276 45,90" class="dg92a-mix"/>
  <polygon points="37,100 45,84 53,100" class="dg92a-cold"/>

  <line x1="160" y1="69" x2="160" y2="98" class="dg92a-thin"/>
  <line x1="400" y1="184" x2="400" y2="208" class="dg92a-thin"/>

  <rect x="10" y="52" width="70" height="34" rx="8" class="dg92a-node"/>
  <text x="45" y="73" text-anchor="middle" class="dg92a-lbl">Placenta</text>
  <rect x="250" y="52" width="56" height="34" rx="8" class="dg92a-node"/>
  <text x="278" y="73" text-anchor="middle" class="dg92a-lbl">RA</text>
  <rect x="372" y="52" width="56" height="34" rx="8" class="dg92a-node"/>
  <text x="400" y="73" text-anchor="middle" class="dg92a-lbl">LA</text>
  <rect x="448" y="52" width="56" height="34" rx="8" class="dg92a-node"/>
  <text x="476" y="73" text-anchor="middle" class="dg92a-lbl">LV</text>
  <rect x="556" y="52" width="70" height="34" rx="8" class="dg92a-node"/>
  <text x="591" y="73" text-anchor="middle" class="dg92a-lbl">Aorta</text>
  <rect x="250" y="150" width="56" height="34" rx="8" class="dg92a-node"/>
  <text x="278" y="171" text-anchor="middle" class="dg92a-lbl">RV</text>
  <rect x="360" y="150" width="80" height="34" rx="8" class="dg92a-node"/>
  <text x="400" y="171" text-anchor="middle" class="dg92a-lbl">Pulm. artery</text>

  <rect x="126" y="98" width="68" height="30" rx="8" class="dg92a-skip"/>
  <text x="160" y="117" text-anchor="middle" class="dg92a-sub">Liver</text>
  <rect x="340" y="208" width="120" height="30" rx="8" class="dg92a-skip"/>
  <text x="400" y="227" text-anchor="middle" class="dg92a-sub">Lungs: high pressure</text>

  <text x="88" y="38" class="dg92a-sub">umbilical vein (1), oxygenated</text>
  <text x="165" y="58" text-anchor="middle" class="dg92a-shunt">Ductus venosus</text>
  <text x="339" y="38" text-anchor="middle" class="dg92a-shunt">Foramen ovale</text>
  <text x="339" y="52" text-anchor="middle" class="dg92a-sub">RA to LA</text>
  <text x="512" y="158" text-anchor="middle" class="dg92a-shunt">Ductus arteriosus</text>
  <text x="512" y="186" text-anchor="middle" class="dg92a-sub">pulmonary artery to aorta</text>
  <text x="330" y="264" text-anchor="middle" class="dg92a-sub">aorta to brain and body, then 2 umbilical arteries back to the placenta</text>

  <circle cx="84" cy="69" r="6" class="dg92a-hot dg92a-d1"/>
  <circle cx="278" cy="90" r="6" class="dg92a-cold dg92a-d2"/>
  <circle cx="616" cy="90" r="5" class="dg92a-cold dg92a-d3"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv92-parallel-circuits"] = {
  title: "Transposition: two loops that never meet",
  caption:
    "With the great vessels switched, deoxygenated blood circles body, right heart and aorta while oxygenated blood circles lungs, left heart and pulmonary artery. " +
    "Nothing reaches the body with oxygen unless blood crosses a bridge: an ASD, a VSD if one is present, or the PDA. " +
    "That is why treatment is prostaglandin to hold the PDA open and a Rashkind balloon to create an ASD, before the Jatene arterial switch (Slides 16-17).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two separate circulation loops in transposition of the great vessels. The left loop carries deoxygenated blood from the body to the right atrium, right ventricle and aorta and back to the body. The right loop carries oxygenated blood from the lungs to the left atrium, left ventricle and pulmonary artery and back to the lungs. Three bridges between the loops allow mixing: an atrial septal defect, a ventricular septal defect and the patent ductus arteriosus.">
  <style>
    .dg92b-blue  { fill: none; stroke: var(--dg-cool); stroke-width: 4; }
    .dg92b-red   { fill: none; stroke: var(--dg-warm); stroke-width: 4; }
    .dg92b-node  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg92b-lbl   { font-size: 12px; font-weight: 700; }
    .dg92b-h     { font-size: 13px; font-weight: 700; }
    .dg92b-sub.dg92b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg92b-brg   { stroke: var(--dg-accent); stroke-width: 3; stroke-dasharray: 6 4; }
    .dg92b-bl.dg92b-bl    { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg92b-cold  { fill: var(--dg-cool); }
    .dg92b-hot   { fill: var(--dg-warm); }
    .dg92b-acc   { fill: var(--dg-accent); }
    .dg92b-l { animation: dg92bLeft 6s linear infinite; }
    .dg92b-r { animation: dg92bRight 6s linear infinite; }
    .dg92b-m1 { animation: dg92bMix 3s ease-in-out infinite; }
    .dg92b-m2 { animation: dg92bMix 3s ease-in-out infinite 1.5s; }
    @keyframes dg92bLeft { 0% { transform: translate(0,0) } 13% { transform: translate(95px,0) } 37% { transform: translate(95px,170px) } 63% { transform: translate(-95px,170px) } 87% { transform: translate(-95px,0) } 100% { transform: translate(0,0) } }
    @keyframes dg92bRight { 0% { transform: translate(0,0) } 13% { transform: translate(-95px,0) } 37% { transform: translate(-95px,170px) } 63% { transform: translate(95px,170px) } 87% { transform: translate(95px,0) } 100% { transform: translate(0,0) } }
    @keyframes dg92bMix { 0%,100% { transform: translateX(0) } 50% { transform: translateX(64px) } }
  </style>

  <text x="155" y="34" text-anchor="middle" class="dg92b-h">Deoxygenated loop</text>
  <text x="485" y="34" text-anchor="middle" class="dg92b-h">Oxygenated loop</text>

  <rect x="60" y="60" width="190" height="170" rx="12" class="dg92b-blue"/>
  <rect x="390" y="60" width="190" height="170" rx="12" class="dg92b-red"/>

  <polygon points="194,53 206,60 194,67" class="dg92b-cold"/>
  <polygon points="161,223 149,230 161,237" class="dg92b-cold"/>
  <polygon points="446,53 434,60 446,67" class="dg92b-hot"/>
  <polygon points="479,223 491,230 479,237" class="dg92b-hot"/>
  <line x1="282" y1="95" x2="358" y2="95" class="dg92b-brg"/>
  <line x1="282" y1="145" x2="358" y2="145" class="dg92b-brg"/>
  <line x1="282" y1="195" x2="358" y2="195" class="dg92b-brg"/>
  <text x="320" y="87" text-anchor="middle" class="dg92b-bl">ASD</text>
  <text x="320" y="137" text-anchor="middle" class="dg92b-bl">VSD</text>
  <text x="320" y="187" text-anchor="middle" class="dg92b-bl">PDA</text>

  <rect x="26" y="131" width="68" height="28" rx="8" class="dg92b-node"/>
  <text x="60" y="150" text-anchor="middle" class="dg92b-lbl">Body</text>
  <rect x="218" y="81" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="250" y="100" text-anchor="middle" class="dg92b-lbl">RA</text>
  <rect x="218" y="131" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="250" y="150" text-anchor="middle" class="dg92b-lbl">RV</text>
  <rect x="218" y="181" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="250" y="200" text-anchor="middle" class="dg92b-lbl">Aorta</text>

  <rect x="358" y="81" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="390" y="100" text-anchor="middle" class="dg92b-lbl">LA</text>
  <rect x="358" y="131" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="390" y="150" text-anchor="middle" class="dg92b-lbl">LV</text>
  <rect x="358" y="181" width="64" height="28" rx="8" class="dg92b-node"/>
  <text x="390" y="200" text-anchor="middle" class="dg92b-lbl">PA</text>
  <rect x="546" y="131" width="68" height="28" rx="8" class="dg92b-node"/>
  <text x="580" y="150" text-anchor="middle" class="dg92b-lbl">Lungs</text>

  <circle cx="155" cy="60" r="6" class="dg92b-cold dg92b-l"/>
  <circle cx="485" cy="60" r="6" class="dg92b-hot dg92b-r"/>
  <circle cx="288" cy="95" r="5" class="dg92b-acc dg92b-m1"/>
  <circle cx="288" cy="195" r="5" class="dg92b-acc dg92b-m2"/>

  <text x="320" y="254" text-anchor="middle" class="dg92b-sub">Bridges let the loops mix. No bridge, no oxygen to the body.</text>
  <text x="320" y="272" text-anchor="middle" class="dg92b-sub">Prostaglandin keeps the PDA open; a Rashkind balloon creates an ASD.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv92-tet-spell-squat"] = {
  title: "Tet spell versus squat",
  caption:
    "Right ventricular blood in tetralogy of Fallot has two exits: through the stenotic outflow tract to the lungs, or across the VSD into the aorta. " +
    "Crying or stress releases catecholamines that tighten the infundibular stenosis, so more blood shunts right to left and the child turns blue. " +
    "Squatting, or knees to chest in an infant, raises systemic vascular resistance, which pushes blood back toward the lungs (Slides 20, 22, 23).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels comparing a tet spell with squatting in tetralogy of Fallot. In the tet spell panel the pulmonary outflow is tightly narrowed, a thin arrow reaches the lungs and a thick arrow crosses the ventricular septal defect to the aorta, labelled right-to-left shunt increased and cyanosis. In the squat panel systemic vascular resistance is raised, the arrow to the aorta is thin and the arrow to the lungs is thick, labelled more pulmonary blood flow and oxygenation.">
  <style>
    .dg92c-node  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg92c-h     { font-size: 14px; font-weight: 700; }
    .dg92c-lbl   { font-size: 12px; font-weight: 700; }
    .dg92c-sub.dg92c-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg92c-bad.dg92c-bad   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg92c-ok.dg92c-ok    { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg92c-div   { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg92c-blue  { stroke: var(--dg-cool); fill: none; stroke-linecap: round; }
    .dg92c-red   { stroke: var(--dg-good); fill: none; stroke-linecap: round; }
    .dg92c-cold  { fill: var(--dg-cool); }
    .dg92c-hot   { fill: var(--dg-good); }
    .dg92c-pinch { fill: var(--dg-ink); }
    .dg92c-sq    { transform-box: fill-box; transform-origin: center; animation: dg92cSqueeze 2.4s ease-in-out infinite; }
    .dg92c-go1 { animation: dg92cShunt 2.4s linear infinite; }
    .dg92c-go2 { animation: dg92cLung 2.4s linear infinite; }
    @keyframes dg92cSqueeze { 0%,100% { transform: scaleX(1) } 50% { transform: scaleX(.55) } }
    @keyframes dg92cShunt { 0% { transform: translate(0,0); opacity: 0 } 10% { opacity: 1 } 55% { transform: translate(116px,0) } 90% { opacity: 1 } 100% { transform: translate(116px,-96px); opacity: 0 } }
    @keyframes dg92cLung { 0% { transform: translateY(0); opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { transform: translateY(-96px); opacity: 0 } }
  </style>

  <line x1="320" y1="14" x2="320" y2="286" class="dg92c-div"/>

  <text x="160" y="26" text-anchor="middle" class="dg92c-h">Tet spell: crying, stress</text>
  <rect x="34" y="52" width="88" height="30" rx="8" class="dg92c-node"/>
  <text x="78" y="72" text-anchor="middle" class="dg92c-lbl">Lungs</text>
  <rect x="190" y="52" width="100" height="30" rx="8" class="dg92c-node"/>
  <text x="240" y="72" text-anchor="middle" class="dg92c-lbl">Aorta to body</text>
  <rect x="34" y="178" width="88" height="44" rx="8" class="dg92c-node"/>
  <text x="78" y="205" text-anchor="middle" class="dg92c-lbl">RV</text>
  <line x1="78" y1="178" x2="78" y2="86" class="dg92c-red" stroke-width="2"/>
  <polygon points="72,94 78,82 84,94" class="dg92c-hot"/>
  <g class="dg92c-sq">
    <polygon points="52,120 72,130 52,140" class="dg92c-pinch"/>
    <polygon points="104,120 84,130 104,140" class="dg92c-pinch"/>
  </g>
  <text x="112" y="126" class="dg92c-sub">stenosis tightens</text>
  <text x="112" y="140" class="dg92c-sub">(catecholamines)</text>
  <polyline points="122,200 240,200 240,90" class="dg92c-blue" stroke-width="9"/>
  <polygon points="228,98 240,80 252,98" class="dg92c-cold"/>
  <text x="180" y="190" text-anchor="middle" class="dg92c-sub">across VSD</text>
  <text x="160" y="250" text-anchor="middle" class="dg92c-bad">Right-to-left shunt increased</text>
  <text x="160" y="268" text-anchor="middle" class="dg92c-bad">Less lung flow: cyanosis</text>
  <circle cx="124" cy="200" r="5" class="dg92c-cold dg92c-go1"/>

  <text x="480" y="26" text-anchor="middle" class="dg92c-h">Squat or knees to chest</text>
  <rect x="354" y="52" width="88" height="30" rx="8" class="dg92c-node"/>
  <text x="398" y="72" text-anchor="middle" class="dg92c-lbl">Lungs</text>
  <rect x="510" y="52" width="100" height="30" rx="8" class="dg92c-node"/>
  <text x="560" y="72" text-anchor="middle" class="dg92c-lbl">Aorta to body</text>
  <rect x="354" y="178" width="88" height="44" rx="8" class="dg92c-node"/>
  <text x="398" y="205" text-anchor="middle" class="dg92c-lbl">RV</text>
  <line x1="398" y1="178" x2="398" y2="92" class="dg92c-red" stroke-width="8"/>
  <polygon points="386,98 398,80 410,98" class="dg92c-hot"/>
  <polyline points="442,200 560,200 560,90" class="dg92c-blue" stroke-width="2"/>
  <polygon points="554,96 560,84 566,96" class="dg92c-cold"/>
  <text x="500" y="190" text-anchor="middle" class="dg92c-sub">across VSD</text>
  <rect x="540" y="124" width="40" height="8" rx="2" class="dg92c-pinch"/>
  <rect x="540" y="138" width="40" height="8" rx="2" class="dg92c-pinch"/>
  <text x="532" y="132" text-anchor="end" class="dg92c-lbl">SVR raised</text>
  <text x="532" y="146" text-anchor="end" class="dg92c-sub">leg vessels kinked</text>
  <text x="480" y="250" text-anchor="middle" class="dg92c-ok">Right-to-left shunt decreased</text>
  <text x="480" y="268" text-anchor="middle" class="dg92c-ok">More lung flow and oxygenation</text>
  <circle cx="398" cy="176" r="5" class="dg92c-hot dg92c-go2"/>
</svg>`,
};

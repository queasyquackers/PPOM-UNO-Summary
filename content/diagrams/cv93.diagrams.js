window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv93-fixed-split-s2"] = {
  title: "Why the ASD split is fixed",
  caption:
    "Top row: in a normal heart a deep breath pulls extra blood into the right side, so pulmonic closure (P2) drifts later on inspiration and returns on expiration. " +
    "Bottom row: with an ASD the shunt keeps the right side overfilled all the time, so P2 is always late and the gap does not move with breathing. " +
    "The lecture gives no millisecond values, so spacing here is schematic (Slide 11).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="Two heart sound timelines. In the normal heart the pulmonic component of S2 moves away from the aortic component during inspiration and back during expiration. In atrial septal defect the pulmonic component stays late in both phases, giving a fixed split S2.">
  <style>
    .dg93a-base  { stroke: var(--dg-line); stroke-width: 2; }
    .dg93a-s1    { fill: var(--dg-ink); }
    .dg93a-a2    { fill: var(--dg-cool); }
    .dg93a-p2    { fill: var(--dg-warm); }
    .dg93a-ghost { fill: none; stroke: var(--dg-warm); stroke-width: 1.5; stroke-dasharray: 3 3; }
    .dg93a-h     { font-size: 15px; font-weight: 700; }
    .dg93a-lbl   { font-size: 12px; }
    .dg93a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg93a-fix   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg93a-move  { animation: dg93aP2 4s ease-in-out infinite; }
    .dg93a-in    { animation: dg93aIn 4s ease-in-out infinite; }
    .dg93a-out   { animation: dg93aOut 4s ease-in-out infinite; }
    @keyframes dg93aP2  { 0%,100% { transform: translateX(0) } 50% { transform: translateX(28px) } }
    @keyframes dg93aIn  { 0%,100% { opacity: .25 } 50% { opacity: 1 } }
    @keyframes dg93aOut { 0%,100% { opacity: 1 } 50% { opacity: .25 } }
  </style>

  <text x="470" y="22" class="dg93a-lbl dg93a-in">inspiration</text>
  <text x="550" y="22" class="dg93a-lbl dg93a-out">expiration</text>

  <text x="20" y="80" class="dg93a-h">Normal</text>
  <line x1="120" y1="100" x2="620" y2="100" class="dg93a-base"/>
  <rect x="170" y="56" width="10" height="44" class="dg93a-s1"/>
  <text x="175" y="118" text-anchor="middle" class="dg93a-lbl">S1</text>
  <rect x="380" y="56" width="8" height="44" class="dg93a-a2"/>
  <text x="380" y="118" text-anchor="middle" class="dg93a-lbl">A2</text>
  <rect x="420" y="56" width="8" height="44" class="dg93a-ghost"/>
  <rect x="392" y="56" width="8" height="44" class="dg93a-p2 dg93a-move"/>
  <text x="412" y="118" class="dg93a-lbl">P2</text>
  <text x="446" y="72" class="dg93a-sub">P2 later on inspiration,</text>
  <text x="446" y="88" class="dg93a-sub">back on expiration</text>

  <text x="20" y="190" class="dg93a-h">ASD</text>
  <line x1="120" y1="210" x2="620" y2="210" class="dg93a-base"/>
  <rect x="170" y="166" width="10" height="44" class="dg93a-s1"/>
  <text x="175" y="228" text-anchor="middle" class="dg93a-lbl">S1</text>
  <rect x="380" y="166" width="8" height="44" class="dg93a-a2"/>
  <text x="380" y="228" text-anchor="middle" class="dg93a-lbl">A2</text>
  <rect x="420" y="166" width="8" height="44" class="dg93a-p2"/>
  <text x="424" y="228" text-anchor="middle" class="dg93a-lbl">P2</text>
  <text x="446" y="182" class="dg93a-fix">P2 always late: fixed split</text>
  <text x="446" y="198" class="dg93a-sub">no change with breathing</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv93-eisenmenger-reversal"] = {
  title: "Eisenmenger syndrome: the shunt turns around",
  caption:
    "Left: early on, left-sided pressure is higher, so oxygenated blood crosses the defect left to right and overloads the right heart and lungs; the child stays pink. " +
    "Right: after years of volume overload the right ventricle has thickened and right-sided pressure exceeds left, so deoxygenated blood crosses right to left into the systemic circulation and cyanosis appears (Slide 16).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="Two panels of a heart with a septal defect. Early panel: blood flows from the higher pressure left heart to the right heart. Later panel: the right heart wall is thick, right-sided pressure is higher, and blood flows from the right heart to the left heart, causing cyanosis.">
  <style>
    .dg93b-ch    { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg93b-thick { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 7; }
    .dg93b-gap   { fill: var(--dg-panel); stroke: none; }
    .dg93b-h     { font-size: 14px; font-weight: 700; }
    .dg93b-lbl   { font-size: 12px; }
    .dg93b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg93b-oxy   { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg93b-deox  { fill: var(--dg-cool); stroke: var(--dg-cool); }
    .dg93b-arrow { stroke-width: 4; stroke-linecap: round; }
    .dg93b-time  { stroke: var(--dg-muted); stroke-width: 1.5; fill: var(--dg-muted); }
    .dg93b-l2r   { animation: dg93bL 2.4s linear infinite; }
    .dg93b-r2l   { animation: dg93bR 2.4s linear infinite; }
    @keyframes dg93bL { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(-80px); opacity: 0 } }
    @keyframes dg93bR { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(80px); opacity: 0 } }
  </style>

  <text x="160" y="22" text-anchor="middle" class="dg93b-h">Early: left-to-right shunt</text>
  <text x="160" y="40" text-anchor="middle" class="dg93b-sub">left-sided pressure is higher</text>
  <rect x="30" y="60" width="115" height="110" rx="10" class="dg93b-ch"/>
  <rect x="175" y="60" width="115" height="110" rx="10" class="dg93b-ch"/>
  <rect x="143" y="98" width="34" height="34" class="dg93b-gap"/>
  <text x="87" y="84" text-anchor="middle" class="dg93b-lbl">Right heart</text>
  <text x="232" y="84" text-anchor="middle" class="dg93b-lbl">Left heart</text>
  <line x1="205" y1="108" x2="128" y2="108" class="dg93b-oxy dg93b-arrow"/>
  <polygon points="128,100 112,108 128,116" class="dg93b-oxy"/>
  <g class="dg93b-l2r">
    <circle cx="215" cy="124" r="4" class="dg93b-oxy"/>
    <circle cx="232" cy="122" r="3" class="dg93b-oxy"/>
  </g>
  <text x="160" y="194" text-anchor="middle" class="dg93b-lbl">extra volume to right heart and lungs</text>
  <text x="160" y="212" text-anchor="middle" class="dg93b-sub">oxygenated blood recirculates: child is pink</text>

  <line x1="302" y1="115" x2="330" y2="115" class="dg93b-time"/>
  <polygon points="330,110 340,115 330,120" class="dg93b-time"/>
  <text x="320" y="102" text-anchor="middle" class="dg93b-sub">years</text>

  <text x="480" y="22" text-anchor="middle" class="dg93b-h">Later: shunt REVERSAL</text>
  <text x="480" y="40" text-anchor="middle" class="dg93b-sub">right-sided pressure is now higher</text>
  <rect x="352" y="62" width="113" height="106" rx="10" class="dg93b-thick"/>
  <rect x="495" y="60" width="115" height="110" rx="10" class="dg93b-ch"/>
  <rect x="461" y="98" width="36" height="34" class="dg93b-gap"/>
  <text x="408" y="86" text-anchor="middle" class="dg93b-lbl">Right heart</text>
  <text x="552" y="84" text-anchor="middle" class="dg93b-lbl">Left heart</text>
  <line x1="432" y1="108" x2="512" y2="108" class="dg93b-deox dg93b-arrow"/>
  <polygon points="512,100 528,108 512,116" class="dg93b-deox"/>
  <g class="dg93b-r2l">
    <circle cx="420" cy="124" r="4" class="dg93b-deox"/>
    <circle cx="403" cy="122" r="3" class="dg93b-deox"/>
  </g>
  <text x="480" y="194" text-anchor="middle" class="dg93b-lbl">deoxygenated blood reaches the body</text>
  <text x="480" y="212" text-anchor="middle" class="dg93b-sub">thick right ventricle, late cyanosis</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv93-coarctation-gradient"] = {
  title: "Coarctation: one narrowing, two circulations",
  caption:
    "The aorta narrows after the arch. Upstream, the head and arms sit at high pressure (arm hypertension, risk of aneurysm rupture and stroke). Downstream, the legs get less flow at lower pressure, so the femoral pulse is weak and arrives late compared with the brachial pulse, or is absent. " +
    "Intercostal collaterals carry blood around the narrowing and erode the ribs over years, which is why rib notching is a late finding (Slides 21-23).",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="An aorta with a narrowing after the arch. Before the narrowing, pressure is high and the brachial pulse is strong and on time. After the narrowing, pressure and flow are low and the femoral pulse is weak and delayed. A collateral vessel bypasses the narrowing and causes rib notching.">
  <style>
    .dg93c-tube  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg93c-coll  { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-dasharray: 6 4; }
    .dg93c-h     { font-size: 14px; font-weight: 700; }
    .dg93c-hi    { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg93c-lo    { font-size: 13px; font-weight: 700; fill: var(--dg-cool); }
    .dg93c-lbl   { font-size: 12px; }
    .dg93c-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg93c-acc   { font-size: 11px; fill: var(--dg-accent); }
    .dg93c-warm  { fill: var(--dg-warm); }
    .dg93c-cool  { fill: var(--dg-cool); }
    .dg93c-beat  { transform-box: fill-box; transform-origin: center; }
    .dg93c-br    { animation: dg93cBr 1.6s ease-out infinite; }
    .dg93c-fe    { animation: dg93cFe 1.6s ease-out infinite .45s; }
    .dg93c-up    { animation: dg93cUp 1.6s linear infinite; }
    .dg93c-down  { animation: dg93cDown 3.2s linear infinite; }
    @keyframes dg93cBr   { 0%,60%,100% { transform: scale(1) } 15% { transform: scale(1.5) } }
    @keyframes dg93cFe   { 0%,60%,100% { transform: scale(1) } 15% { transform: scale(1.15) } }
    @keyframes dg93cUp   { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(170px); opacity: 0 } }
    @keyframes dg93cDown { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: .7 } 85% { opacity: .7 } 100% { transform: translateX(170px); opacity: 0 } }
  </style>

  <text x="60" y="24" class="dg93c-h">Before the narrowing</text>
  <text x="60" y="42" class="dg93c-hi">HIGH pressure</text>
  <text x="390" y="24" class="dg93c-h">After the narrowing</text>
  <text x="390" y="42" class="dg93c-lo">LOW pressure, low flow</text>

  <path d="M150 60 L150 110 L60 110 L60 150 L280 150 L310 136 L340 150 L590 150 L590 110 L340 110 L310 124 L280 110 L182 110 L182 60 Z" class="dg93c-tube"/>
  <text x="192" y="76" class="dg93c-lbl">to head and arms</text>
  <text x="310" y="100" text-anchor="middle" class="dg93c-sub">coarctation</text>
  <text x="560" y="134" text-anchor="end" class="dg93c-lbl">to legs</text>

  <g class="dg93c-up">
    <circle cx="80" cy="130" r="7" class="dg93c-warm"/>
    <circle cx="100" cy="124" r="5" class="dg93c-warm"/>
  </g>
  <g class="dg93c-down">
    <circle cx="350" cy="130" r="4" class="dg93c-cool"/>
  </g>

  <path d="M250 150 C 262 196, 368 196, 380 150" class="dg93c-coll"/>
  <text x="315" y="204" text-anchor="middle" class="dg93c-acc">intercostal collaterals: rib notching (late)</text>

  <circle cx="80" cy="244" r="10" class="dg93c-warm dg93c-beat dg93c-br"/>
  <text x="100" y="240" class="dg93c-lbl">Brachial pulse</text>
  <text x="100" y="256" class="dg93c-sub">strong, on time; arm hypertension</text>
  <circle cx="400" cy="244" r="6" class="dg93c-cool dg93c-beat dg93c-fe"/>
  <text x="418" y="240" class="dg93c-lbl">Femoral pulse</text>
  <text x="418" y="256" class="dg93c-sub">weak, delayed or absent</text>
</svg>`,
};

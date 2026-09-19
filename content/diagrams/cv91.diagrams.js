window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv91-aortic-stenosis-cascade"] = {
  title: "Calcific aortic stenosis cascade",
  caption:
    "Calcium narrowing the aortic valve raises the pressure gradient across it, so the left ventricle must generate a higher pressure to eject. " +
    "The ventricle hypertrophies to cope, the thickened muscle becomes ischemic (angina, syncope), and when compensation is exhausted the patient enters heart failure. " +
    "The highlight walks the chain in the order the lecture gives it (Slide 8).",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Six-step chain: calcified narrowed aortic valve, increased pressure gradient, increased left ventricular pressure, left ventricular hypertrophy, ischemia with angina and syncope, and finally heart failure when compensation is exhausted.">
  <style>
    .dg91a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg91a-hot  { fill: none; stroke: var(--dg-warm); stroke-width: 3; opacity: .15; }
    .dg91a-lbl  { font-size: 13px; font-weight: 700; }
    .dg91a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg91a-arr  { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg91a-head { fill: var(--dg-ink); }
    .dg91a-end  { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg91a-s1 { animation: dg91apulse 6s ease-in-out infinite 0s; }
    .dg91a-s2 { animation: dg91apulse 6s ease-in-out infinite 1s; }
    .dg91a-s3 { animation: dg91apulse 6s ease-in-out infinite 2s; }
    .dg91a-s4 { animation: dg91apulse 6s ease-in-out infinite 3s; }
    .dg91a-s5 { animation: dg91apulse 6s ease-in-out infinite 4s; }
    .dg91a-s6 { animation: dg91apulse 6s ease-in-out infinite 5s; }
    @keyframes dg91apulse { 0%, 30%, 100% { opacity: .15 } 8%, 18% { opacity: 1 } }
  </style>

  <rect x="20"  y="30" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="20"  y="30" width="180" height="70" rx="10" class="dg91a-hot dg91a-s1"/>
  <text x="110" y="60" text-anchor="middle" class="dg91a-lbl">Calcified, narrowed</text>
  <text x="110" y="78" text-anchor="middle" class="dg91a-lbl">aortic valve</text>
  <text x="110" y="94" text-anchor="middle" class="dg91a-sub">obstruction</text>

  <rect x="230" y="30" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="230" y="30" width="180" height="70" rx="10" class="dg91a-hot dg91a-s2"/>
  <text x="320" y="60" text-anchor="middle" class="dg91a-lbl">Increased pressure</text>
  <text x="320" y="78" text-anchor="middle" class="dg91a-lbl">gradient</text>
  <text x="320" y="94" text-anchor="middle" class="dg91a-sub">across the valve</text>

  <rect x="440" y="30" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="440" y="30" width="180" height="70" rx="10" class="dg91a-hot dg91a-s3"/>
  <text x="530" y="60" text-anchor="middle" class="dg91a-lbl">Increased LV</text>
  <text x="530" y="78" text-anchor="middle" class="dg91a-lbl">pressure</text>
  <text x="530" y="94" text-anchor="middle" class="dg91a-sub">pressure overload</text>

  <rect x="440" y="170" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="440" y="170" width="180" height="70" rx="10" class="dg91a-hot dg91a-s4"/>
  <text x="530" y="200" text-anchor="middle" class="dg91a-lbl">LV hypertrophy</text>
  <text x="530" y="218" text-anchor="middle" class="dg91a-sub">compensation</text>

  <rect x="230" y="170" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="230" y="170" width="180" height="70" rx="10" class="dg91a-hot dg91a-s5"/>
  <text x="320" y="200" text-anchor="middle" class="dg91a-lbl">Ischemia</text>
  <text x="320" y="218" text-anchor="middle" class="dg91a-sub">angina, syncope</text>

  <rect x="20" y="170" width="180" height="70" rx="10" class="dg91a-box"/>
  <rect x="20" y="170" width="180" height="70" rx="10" class="dg91a-hot dg91a-s6"/>
  <text x="110" y="200" text-anchor="middle" class="dg91a-end">Heart failure</text>
  <text x="110" y="218" text-anchor="middle" class="dg91a-sub">compensation exhausted</text>

  <line x1="202" y1="65" x2="222" y2="65" class="dg91a-arr"/>
  <polygon points="222,59 230,65 222,71" class="dg91a-head"/>
  <line x1="412" y1="65" x2="432" y2="65" class="dg91a-arr"/>
  <polygon points="432,59 440,65 432,71" class="dg91a-head"/>
  <line x1="530" y1="102" x2="530" y2="160" class="dg91a-arr"/>
  <polygon points="524,160 530,168 536,160" class="dg91a-head"/>
  <line x1="438" y1="205" x2="418" y2="205" class="dg91a-arr"/>
  <polygon points="418,199 410,205 418,211" class="dg91a-head"/>
  <line x1="228" y1="205" x2="208" y2="205" class="dg91a-arr"/>
  <polygon points="208,199 200,205 208,211" class="dg91a-head"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv91-mvp-systolic-prolapse"] = {
  title: "Mitral valve prolapse in systole",
  caption:
    "In systole a normal mitral valve closes flat at the annulus, held by taut chordae. " +
    "In myxomatous degeneration the floppy posterior leaflet, on weakened and elongated chordae and a dilated annulus, balloons (hoods) back into the left atrium; " +
    "the resulting leak is a chronic volume load that dilates the atrium over time (Slides 9-10).",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Two mitral valves in systole. On the left a normal valve closes flat at the annulus with taut chordae. On the right a myxomatous posterior leaflet on long, weak chordae balloons up into a dilated left atrium, with a small backward leak into the atrium.">
  <style>
    .dg91b-ch   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg91b-lbl  { font-size: 13px; font-weight: 700; }
    .dg91b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg91b-ann  { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg91b-lf   { stroke: var(--dg-accent); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg91b-bad  { stroke: var(--dg-warm); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg91b-cd   { stroke: var(--dg-ink); stroke-width: 1.5; opacity: .7; }
    .dg91b-cdw  { stroke: var(--dg-warm); stroke-width: 1.5; stroke-dasharray: 3 3; }
    .dg91b-pap  { fill: var(--dg-ink); opacity: .6; }
    .dg91b-jet  { stroke: var(--dg-warm); stroke-width: 3; fill: none; }
    .dg91b-jeth { fill: var(--dg-warm); }
    .dg91b-billow { transform-box: fill-box; transform-origin: 50% 100%; animation: dg91bbillow 3s ease-in-out infinite; }
    .dg91b-leak { animation: dg91bleak 3s ease-in-out infinite; }
    @keyframes dg91bbillow { 0%, 100% { transform: scaleY(.15) } 45%, 70% { transform: scaleY(1) } }
    @keyframes dg91bleak { 0%, 30%, 100% { opacity: 0 } 50%, 70% { opacity: 1 } }
  </style>

  <text x="160" y="22" text-anchor="middle" class="dg91b-lbl">Normal valve, systole</text>
  <rect x="40" y="40" width="240" height="72" rx="12" class="dg91b-ch"/>
  <text x="160" y="80" text-anchor="middle" class="dg91b-sub">Left atrium</text>
  <line x1="40" y1="124" x2="280" y2="124" class="dg91b-ann"/>
  <line x1="62" y1="124" x2="158" y2="126" class="dg91b-lf"/>
  <line x1="258" y1="124" x2="162" y2="126" class="dg91b-lf"/>
  <rect x="40" y="136" width="240" height="120" rx="12" class="dg91b-ch"/>
  <line x1="120" y1="126" x2="110" y2="218" class="dg91b-cd"/>
  <line x1="200" y1="126" x2="210" y2="218" class="dg91b-cd"/>
  <ellipse cx="110" cy="226" rx="16" ry="10" class="dg91b-pap"/>
  <ellipse cx="210" cy="226" rx="16" ry="10" class="dg91b-pap"/>
  <text x="160" y="250" text-anchor="middle" class="dg91b-sub">Left ventricle: taut chordae</text>

  <text x="480" y="22" text-anchor="middle" class="dg91b-lbl">Myxomatous valve, systole</text>
  <rect x="340" y="30" width="280" height="82" rx="12" class="dg91b-ch"/>
  <text x="400" y="52" text-anchor="middle" class="dg91b-sub">Dilated left atrium</text>
  <line x1="340" y1="124" x2="620" y2="124" class="dg91b-ann"/>
  <text x="614" y="140" text-anchor="end" class="dg91b-sub">dilated annulus</text>
  <line x1="352" y1="124" x2="468" y2="126" class="dg91b-lf"/>
  <path d="M 604 124 C 590 50, 500 50, 474 126" class="dg91b-bad dg91b-billow"/>
  <text x="560" y="62" text-anchor="middle" class="dg91b-sub">posterior leaflet hoods</text>
  <g class="dg91b-leak">
    <line x1="470" y1="116" x2="430" y2="70" class="dg91b-jet"/>
    <polygon points="424,76 426,62 438,70" class="dg91b-jeth"/>
  </g>
  <rect x="340" y="136" width="280" height="120" rx="12" class="dg91b-ch"/>
  <line x1="410" y1="126" x2="420" y2="218" class="dg91b-cd"/>
  <line x1="540" y1="104" x2="530" y2="218" class="dg91b-cdw"/>
  <ellipse cx="420" cy="226" rx="16" ry="10" class="dg91b-pap"/>
  <ellipse cx="530" cy="226" rx="16" ry="10" class="dg91b-pap"/>
  <text x="480" y="250" text-anchor="middle" class="dg91b-sub">Weak, elongated chordae</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv91-mitral-stenosis-backpressure"] = {
  title: "Rheumatic mitral stenosis: pressure backs up",
  caption:
    "Blood normally flows right ventricle -> lungs -> left atrium -> mitral valve -> left ventricle. " +
    "A fish-mouth rheumatic mitral valve obstructs the last step, so pressure backs up upstream: the left atrium dilates and can harbor mural thrombi that embolize, " +
    "the lungs congest, and over time the right ventricle hypertrophies (Slide 19).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="Four chambers in a row from right ventricle to lungs to left atrium to a narrowed fish-mouth mitral valve and the left ventricle. Forward flow runs left to right; a back-pressure wave travels right to left from the stenotic valve to the right ventricle. The dilated left atrium contains a mural thrombus that can embolize.">
  <style>
    .dg91c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg91c-big  { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg91c-lbl  { font-size: 13px; font-weight: 700; }
    .dg91c-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg91c-bad  { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .dg91c-fwd  { stroke: var(--dg-cool); stroke-width: 2; opacity: .55; }
    .dg91c-fwdh { fill: var(--dg-cool); opacity: .55; }
    .dg91c-valve { fill: none; stroke: var(--dg-ink); stroke-width: 3; }
    .dg91c-clot { fill: var(--dg-warm); }
    .dg91c-wave { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; animation: dg91cback 4s linear infinite; }
    .dg91c-emb  { fill: var(--dg-warm); animation: dg91cemb 4s ease-in infinite; }
    @keyframes dg91cback { 0% { transform: translateX(0); opacity: 0 } 10% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(-400px); opacity: 0 } }
    @keyframes dg91cemb { 0%, 40% { transform: translate(0, 0); opacity: 0 } 50% { opacity: 1 } 100% { transform: translate(40px, 70px); opacity: 0 } }
  </style>

  <rect x="20"  y="70" width="110" height="80" rx="12" class="dg91c-box"/>
  <text x="75" y="104" text-anchor="middle" class="dg91c-lbl">Right</text>
  <text x="75" y="120" text-anchor="middle" class="dg91c-lbl">ventricle</text>
  <text x="75" y="172" text-anchor="middle" class="dg91c-bad">hypertrophy</text>

  <rect x="160" y="70" width="120" height="80" rx="12" class="dg91c-box"/>
  <text x="220" y="112" text-anchor="middle" class="dg91c-lbl">Lungs</text>
  <text x="220" y="172" text-anchor="middle" class="dg91c-bad">congestion</text>

  <rect x="310" y="50" width="150" height="120" rx="16" class="dg91c-big"/>
  <text x="385" y="80" text-anchor="middle" class="dg91c-lbl">Left atrium</text>
  <text x="385" y="192" text-anchor="middle" class="dg91c-bad">dilated</text>
  <ellipse cx="340" cy="146" rx="14" ry="9" class="dg91c-clot"/>
  <text x="362" y="150" class="dg91c-sub">mural thrombus</text>
  <circle cx="340" cy="160" r="4" class="dg91c-emb"/>
  <text x="310" y="238" class="dg91c-bad">emboli</text>

  <path d="M 478 92 Q 490 110 478 128" class="dg91c-valve"/>
  <path d="M 498 92 Q 486 110 498 128" class="dg91c-valve"/>
  <text x="488" y="62" text-anchor="middle" class="dg91c-sub">fish-mouth</text>
  <text x="488" y="150" text-anchor="middle" class="dg91c-sub">mitral valve</text>

  <rect x="520" y="70" width="100" height="80" rx="12" class="dg91c-box"/>
  <text x="570" y="104" text-anchor="middle" class="dg91c-lbl">Left</text>
  <text x="570" y="120" text-anchor="middle" class="dg91c-lbl">ventricle</text>

  <line x1="130" y1="30" x2="590" y2="30" class="dg91c-fwd"/>
  <polygon points="590,24 602,30 590,36" class="dg91c-fwdh"/>
  <text x="140" y="22" class="dg91c-sub">forward flow</text>

  <line x1="500" y1="214" x2="72" y2="214" stroke="var(--dg-warm)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <polygon points="72,208 60,214 72,220" class="dg91c-clot"/>
  <line x1="470" y1="214" x2="500" y2="214" class="dg91c-wave"/>
  <text x="620" y="218" text-anchor="end" class="dg91c-sub">back-pressure</text>
</svg>`,
};

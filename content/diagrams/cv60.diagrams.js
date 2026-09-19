/*
 * cv60 - Pathology: Pulmonary Vascular Disease
 * (Lecture #60, William Zaloga, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The two consequences of a pulmonary embolus: a ventilated-but-unperfused
//    segment and a pressure load on the right ventricle.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv60-pe-two-hits"] = {
  title: "Two hits from one embolus",
  caption:
    "Left: air still reaches the alveolus beyond the clot, but blood stops at the embolus, so that segment is ventilated but not perfused - the respiratory compromise (V/Q mismatch). " +
    "Right: the same obstruction raises resistance to pulmonary blood flow, so the right ventricle pumps against a rising load - the hemodynamic compromise. " +
    "Depending on size and spread, that load ends in sudden death, acute cor pulmonale, or (small, recurrent emboli) pulmonary hypertension (Slide 5).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Left panel: an alveolus receives inhaled air while blood in its capillary stops at an embolus, so the segment is ventilated but not perfused. Right panel: the right ventricle pumps into a pulmonary artery blocked by an embolus, pressure behind the clot rises, and the outcomes listed are sudden death, acute cor pulmonale and pulmonary hypertension.">
  <style>
    .dg60a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg60a-hd    { font-size: 11px; font-weight: 700; letter-spacing: .1em; fill: var(--dg-muted); }
    .dg60a-lbl   { font-size: 12px; font-weight: 700; }
    .dg60a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg60a-alv   { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 2; }
    .dg60a-cap   { fill: none; stroke: var(--dg-warm); stroke-width: 10; stroke-linecap: round; opacity: .35; }
    .dg60a-clot  { fill: var(--dg-ink); }
    .dg60a-air   { fill: var(--dg-cool); }
    .dg60a-rbc   { fill: var(--dg-warm); }
    .dg60a-rv    { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg60a-pa    { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg60a-bar   { fill: var(--dg-warm); }
    .dg60a-out   { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg60a-ar    { stroke: var(--dg-accent); stroke-width: 2.2; fill: none; }
    .dg60a-arf   { fill: var(--dg-accent); }

    .dg60a-airmove { animation: dg60aAir 2.8s linear infinite; }
    .dg60a-airmove2 { animation: dg60aAir 2.8s linear infinite 1.4s; }
    @keyframes dg60aAir { 0% { transform: translateY(-40px); opacity: 0 } 20% { opacity: 1 } 80% { opacity: 1 } 100% { transform: translateY(0); opacity: 0 } }
    .dg60a-rbcmove  { animation: dg60aRbc 2.4s linear infinite; }
    .dg60a-rbcmove2 { animation: dg60aRbc 2.4s linear infinite 1.2s; }
    @keyframes dg60aRbc { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 75% { transform: translateX(78px); opacity: 1 } 100% { transform: translateX(78px); opacity: 0 } }
    .dg60a-press { transform-box: fill-box; transform-origin: bottom; animation: dg60aPress 3.2s ease-in-out infinite; }
    @keyframes dg60aPress { 0%,100% { transform: scaleY(.45) } 55% { transform: scaleY(1) } }
    .dg60a-beat { transform-box: fill-box; transform-origin: center; animation: dg60aBeat 1.1s ease-in-out infinite; }
    @keyframes dg60aBeat { 0%,100% { transform: scale(1) } 40% { transform: scale(.93) } }
  </style>

  <rect x="10" y="10" width="300" height="270" rx="12" class="dg60a-panel"/>
  <text x="24" y="32" class="dg60a-hd">RESPIRATORY COMPROMISE</text>
  <text x="160" y="58" class="dg60a-sub" text-anchor="middle">inhaled air still arrives</text>
  <g class="dg60a-airmove"><circle cx="150" cy="110" r="4" class="dg60a-air"/><circle cx="168" cy="118" r="3" class="dg60a-air"/></g>
  <g class="dg60a-airmove2"><circle cx="160" cy="104" r="3.5" class="dg60a-air"/></g>
  <circle cx="160" cy="130" r="44" class="dg60a-alv"/>
  <text x="160" y="134" class="dg60a-lbl" text-anchor="middle">Alveolus</text>
  <path d="M40 200 Q160 176 280 200" class="dg60a-cap"/>
  <g class="dg60a-rbcmove"><circle cx="46" cy="198" r="5" class="dg60a-rbc"/></g>
  <g class="dg60a-rbcmove2"><circle cx="58" cy="195" r="5" class="dg60a-rbc"/></g>
  <rect x="132" y="178" width="22" height="24" rx="6" class="dg60a-clot"/>
  <text x="143" y="222" class="dg60a-lbl" text-anchor="middle">embolus</text>
  <text x="222" y="186" class="dg60a-sub" text-anchor="middle">no blood past here</text>
  <text x="160" y="250" class="dg60a-lbl" text-anchor="middle">Ventilated, not perfused</text>
  <text x="160" y="267" class="dg60a-sub" text-anchor="middle">V/Q mismatch</text>

  <rect x="330" y="10" width="300" height="270" rx="12" class="dg60a-panel"/>
  <text x="344" y="32" class="dg60a-hd">HEMODYNAMIC COMPROMISE</text>
  <ellipse cx="392" cy="130" rx="40" ry="52" class="dg60a-rv dg60a-beat"/>
  <text x="392" y="134" class="dg60a-lbl" text-anchor="middle">RV</text>
  <path d="M430 110 L540 110 M430 150 L540 150" class="dg60a-pa"/>
  <rect x="520" y="112" width="22" height="36" rx="6" class="dg60a-clot"/>
  <text x="485" y="100" class="dg60a-sub" text-anchor="middle">pulmonary artery</text>
  <text x="531" y="166" class="dg60a-sub" text-anchor="middle">embolus</text>
  <rect x="450" y="118" width="16" height="26" rx="2" class="dg60a-bar dg60a-press"/>
  <text x="496" y="136" class="dg60a-sub">resistance up</text>
  <path d="M392 188 L392 208" class="dg60a-ar"/>
  <polygon points="386,206 392,216 398,206" class="dg60a-arf"/>
  <text x="480" y="210" class="dg60a-sub" text-anchor="middle">RV pumps against a rising load</text>
  <text x="344" y="236" class="dg60a-out">Sudden death</text>
  <text x="344" y="252" class="dg60a-out">Acute cor pulmonale (acute RV failure)</text>
  <text x="344" y="268" class="dg60a-out">Pulmonary hypertension (small, recurrent)</text>
</svg>`
};

// --------------------------------------------------------------------------
// 2. Antemortem vs postmortem clot. Motion shows HOW each forms: layers laid
//    down one by one in flowing blood vs gravity sedimentation in still blood.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv60-lines-of-zahn"] = {
  title: "Lines of Zahn vs postmortem clot",
  caption:
    "In flowing blood a thrombus grows layer by layer on the vessel wall: pale bands of platelets and fibrin alternate with dark bands of red cells - the lines of Zahn, which prove the clot formed before death. " +
    "After death nothing flows, so the components simply settle by gravity: red cells sink into a dark red currant-jelly layer under a yellow chicken-fat layer of serum and proteins, and the clot is usually not attached to the wall (Slide 7).",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Left panel, antemortem: in a vessel with flowing blood, a thrombus attached to the wall builds up alternating pale platelet-fibrin layers and dark red cell layers, the lines of Zahn. Right panel, postmortem: in still blood, red cells settle to the bottom forming a currant jelly layer below a yellow chicken fat layer, not attached to the wall.">
  <style>
    .dg60b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg60b-hd    { font-size: 11px; font-weight: 700; letter-spacing: .1em; fill: var(--dg-muted); }
    .dg60b-lbl   { font-size: 12px; font-weight: 700; }
    .dg60b-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg60b-wall  { stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg60b-pale  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1; }
    .dg60b-dark  { fill: var(--dg-warm); }
    .dg60b-fat   { fill: var(--dg-good); opacity: .35; }
    .dg60b-jelly { fill: var(--dg-warm); opacity: .85; }
    .dg60b-tube  { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg60b-flow  { fill: var(--dg-warm); }
    .dg60b-ar    { stroke: var(--dg-accent); stroke-width: 2; fill: none; }
    .dg60b-arf   { fill: var(--dg-accent); }

    .dg60b-f1 { animation: dg60bFlow 2.2s linear infinite; }
    .dg60b-f2 { animation: dg60bFlow 2.2s linear infinite .75s; }
    .dg60b-f3 { animation: dg60bFlow 2.2s linear infinite 1.5s; }
    @keyframes dg60bFlow { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(230px); opacity: 0 } }
    .dg60b-L1 { animation: dg60bGrow 8s ease-out infinite 0s; }
    .dg60b-L2 { animation: dg60bGrow 8s ease-out infinite 1s; }
    .dg60b-L3 { animation: dg60bGrow 8s ease-out infinite 2s; }
    .dg60b-L4 { animation: dg60bGrow 8s ease-out infinite 3s; }
    .dg60b-L5 { animation: dg60bGrow 8s ease-out infinite 4s; }
    @keyframes dg60bGrow { 0% { opacity: .2 } 10% { opacity: 1 } 100% { opacity: 1 } }
    .dg60b-sink  { animation: dg60bSink 5s ease-in infinite; }
    .dg60b-sink2 { animation: dg60bSink 5s ease-in infinite 1.6s; }
    .dg60b-sink3 { animation: dg60bSink 5s ease-in infinite 3.2s; }
    @keyframes dg60bSink { 0% { transform: translateY(0); opacity: 1 } 70% { transform: translateY(70px); opacity: 1 } 100% { transform: translateY(70px); opacity: 0 } }
  </style>

  <rect x="10" y="10" width="300" height="260" rx="12" class="dg60b-panel"/>
  <text x="24" y="32" class="dg60b-hd">ANTEMORTEM - FLOWING BLOOD</text>
  <line x1="40" y1="70" x2="290" y2="70" class="dg60b-wall"/>
  <line x1="40" y1="200" x2="290" y2="200" class="dg60b-wall"/>
  <g class="dg60b-f1"><circle cx="46" cy="96" r="4" class="dg60b-flow"/></g>
  <g class="dg60b-f2"><circle cx="46" cy="110" r="4" class="dg60b-flow"/></g>
  <g class="dg60b-f3"><circle cx="46" cy="90" r="4" class="dg60b-flow"/></g>
  <path d="M250 126 L270 126" class="dg60b-ar"/>
  <polygon points="268,121 277,126 268,131" class="dg60b-arf"/>
  <text x="222" y="120" class="dg60b-sub">flow</text>
  <rect x="100" y="186" width="130" height="14" class="dg60b-pale dg60b-L1"/>
  <rect x="104" y="174" width="122" height="12" class="dg60b-dark dg60b-L2"/>
  <rect x="108" y="162" width="114" height="12" class="dg60b-pale dg60b-L3"/>
  <rect x="112" y="150" width="106" height="12" class="dg60b-dark dg60b-L4"/>
  <rect x="116" y="138" width="98" height="12" class="dg60b-pale dg60b-L5"/>
  <text x="165" y="222" class="dg60b-lbl" text-anchor="middle">Lines of Zahn, attached to wall</text>
  <text x="165" y="240" class="dg60b-sub" text-anchor="middle">pale = platelets + fibrin; dark = red cells</text>
  <text x="165" y="256" class="dg60b-sub" text-anchor="middle">formed before death</text>

  <rect x="330" y="10" width="300" height="260" rx="12" class="dg60b-panel"/>
  <text x="344" y="32" class="dg60b-hd">POSTMORTEM - STILL BLOOD</text>
  <rect x="420" y="58" width="120" height="146" rx="10" class="dg60b-tube"/>
  <rect x="424" y="62" width="112" height="70" rx="8" class="dg60b-fat"/>
  <rect x="424" y="132" width="112" height="68" rx="8" class="dg60b-jelly"/>
  <g class="dg60b-sink"><circle cx="450" cy="70" r="4" class="dg60b-flow"/></g>
  <g class="dg60b-sink2"><circle cx="480" cy="66" r="4" class="dg60b-flow"/></g>
  <g class="dg60b-sink3"><circle cx="510" cy="72" r="4" class="dg60b-flow"/></g>
  <text x="558" y="100" class="dg60b-sub">chicken fat</text>
  <text x="558" y="114" class="dg60b-sub">(serum, proteins)</text>
  <text x="558" y="164" class="dg60b-sub">currant jelly</text>
  <text x="558" y="178" class="dg60b-sub">(red cells)</text>
  <path d="M400 80 L400 180" class="dg60b-ar"/>
  <polygon points="395,178 400,188 405,178" class="dg60b-arf"/>
  <text x="394" y="76" class="dg60b-sub" text-anchor="end">gravity</text>
  <text x="480" y="222" class="dg60b-lbl" text-anchor="middle">Sedimented, not attached</text>
  <text x="480" y="240" class="dg60b-sub" text-anchor="middle">no flow, so no alternating layers</text>
  <text x="480" y="256" class="dg60b-sub" text-anchor="middle">formed after death</text>
</svg>`
};

// --------------------------------------------------------------------------
// 3. Pulmonary hypertension grades. A highlight walks grade 1 -> 6 so the
//    student watches the wall thicken and the lumen close, and sees exactly
//    where reversibility is lost.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv60-ph-grades"] = {
  title: "PH grades: where reversibility ends",
  caption:
    "Six arterial cross-sections from the lecture's grading table. Medial hypertrophy comes first (grade 1), then intimal cell proliferation (2), then intimal fibrosis narrowing the lumen (3). " +
    "Grades 1-2 are potentially reversible and grade 3 is borderline; once plexiform lesions appear (grade 4), followed by angiomatoid lesions (5) and necrotizing arteritis (6), the disease is irreversible (Slides 15-17).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="Six pulmonary artery cross-sections labeled grades 1 to 6. The media thickens and the lumen narrows from grade 1 to 3; grade 4 shows a web-like plexiform lesion, grade 5 angiomatoid lesions and grade 6 necrotizing arteritis. A bar underneath marks grades 1 and 2 potentially reversible, grade 3 borderline, and grades 4 to 6 irreversible.">
  <style>
    .dg60c-media { fill: var(--dg-warm); opacity: .35; stroke: var(--dg-warm); stroke-width: 1.5; }
    .dg60c-intima { fill: var(--dg-accent); opacity: .45; }
    .dg60c-fib   { fill: var(--dg-muted); opacity: .6; }
    .dg60c-lumen { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg60c-web   { stroke: var(--dg-ink); stroke-width: 1.2; fill: none; }
    .dg60c-nec   { fill: var(--dg-ink); opacity: .7; }
    .dg60c-num   { font-size: 14px; font-weight: 700; }
    .dg60c-sub   { font-size: 10px; fill: var(--dg-muted); }
    .dg60c-good  { fill: var(--dg-good); opacity: .8; }
    .dg60c-mid   { fill: var(--dg-accent); opacity: .8; }
    .dg60c-bad   { fill: var(--dg-warm); opacity: .8; }
    .dg60c-band  { font-size: 11px; font-weight: 700; fill: var(--dg-surface); }
    .dg60c-hl    { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; opacity: 0; }
    .dg60c-h1 { animation: dg60cHl 12s linear infinite 0s; }
    .dg60c-h2 { animation: dg60cHl 12s linear infinite 2s; }
    .dg60c-h3 { animation: dg60cHl 12s linear infinite 4s; }
    .dg60c-h4 { animation: dg60cHl 12s linear infinite 6s; }
    .dg60c-h5 { animation: dg60cHl 12s linear infinite 8s; }
    .dg60c-h6 { animation: dg60cHl 12s linear infinite 10s; }
    @keyframes dg60cHl { 0% { opacity: 0 } 2% { opacity: 1 } 15% { opacity: 1 } 17% { opacity: 0 } 100% { opacity: 0 } }
  </style>

  <rect x="12" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h1"/>
  <rect x="116" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h2"/>
  <rect x="220" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h3"/>
  <rect x="324" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h4"/>
  <rect x="428" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h5"/>
  <rect x="532" y="14" width="96" height="150" rx="10" class="dg60c-hl dg60c-h6"/>

  <circle cx="60" cy="80" r="36" class="dg60c-media"/>
  <circle cx="60" cy="80" r="22" class="dg60c-lumen"/>
  <text x="60" y="136" class="dg60c-num" text-anchor="middle">1</text>
  <text x="60" y="152" class="dg60c-sub" text-anchor="middle">medial hypertrophy</text>

  <circle cx="164" cy="80" r="38" class="dg60c-media"/>
  <circle cx="164" cy="80" r="22" class="dg60c-intima"/>
  <circle cx="164" cy="80" r="16" class="dg60c-lumen"/>
  <text x="164" y="136" class="dg60c-num" text-anchor="middle">2</text>
  <text x="164" y="152" class="dg60c-sub" text-anchor="middle">+ intimal proliferation</text>

  <circle cx="268" cy="80" r="40" class="dg60c-media"/>
  <circle cx="268" cy="80" r="24" class="dg60c-fib"/>
  <circle cx="268" cy="80" r="8" class="dg60c-lumen"/>
  <text x="268" y="136" class="dg60c-num" text-anchor="middle">3</text>
  <text x="268" y="152" class="dg60c-sub" text-anchor="middle">+ intimal fibrosis</text>

  <circle cx="372" cy="80" r="40" class="dg60c-media"/>
  <circle cx="372" cy="80" r="26" class="dg60c-fib"/>
  <path d="M356 70 L388 90 M356 90 L388 70 M372 58 L372 102 M352 80 L392 80" class="dg60c-web"/>
  <circle cx="364" cy="74" r="3" class="dg60c-lumen"/><circle cx="380" cy="86" r="3" class="dg60c-lumen"/><circle cx="378" cy="72" r="2.5" class="dg60c-lumen"/>
  <text x="372" y="136" class="dg60c-num" text-anchor="middle">4</text>
  <text x="372" y="152" class="dg60c-sub" text-anchor="middle">plexiform lesion</text>

  <circle cx="476" cy="80" r="40" class="dg60c-media"/>
  <circle cx="462" cy="72" r="10" class="dg60c-lumen"/><circle cx="488" cy="70" r="9" class="dg60c-lumen"/><circle cx="476" cy="94" r="10" class="dg60c-lumen"/>
  <text x="476" y="136" class="dg60c-num" text-anchor="middle">5</text>
  <text x="476" y="152" class="dg60c-sub" text-anchor="middle">angiomatoid lesions</text>

  <circle cx="580" cy="80" r="40" class="dg60c-media"/>
  <path d="M556 64 L572 58 L590 66 L604 62 L600 84 L606 98 L584 104 L566 98 L552 88 Z" class="dg60c-nec"/>
  <text x="580" y="136" class="dg60c-num" text-anchor="middle">6</text>
  <text x="580" y="152" class="dg60c-sub" text-anchor="middle">necrotizing arteritis</text>

  <rect x="12" y="180" width="200" height="30" rx="6" class="dg60c-good"/>
  <text x="112" y="200" class="dg60c-band" text-anchor="middle">1-2 potentially reversible</text>
  <rect x="220" y="180" width="96" height="30" rx="6" class="dg60c-mid"/>
  <text x="268" y="200" class="dg60c-band" text-anchor="middle">3 borderline</text>
  <rect x="324" y="180" width="304" height="30" rx="6" class="dg60c-bad"/>
  <text x="476" y="200" class="dg60c-band" text-anchor="middle">4-6 irreversible</text>
  <text x="320" y="234" class="dg60c-sub" text-anchor="middle">Medial hypertrophy is present in every form of pulmonary hypertension</text>
</svg>`
};

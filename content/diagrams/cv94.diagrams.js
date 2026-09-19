window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv94-cardiomyopathy-physiology"] = {
  title: "Three cardiomyopathies, two failures",
  caption:
    "Each ventricle beats between its filled and emptied size. The dilated ventricle is large and thin-walled but barely shrinks: a pumping (systolic) defect with a low ejection fraction. " +
    "The hypertrophic ventricle has a thick wall and a small cavity: little blood gets in, but it is nearly all ejected, so the ejection fraction is high and the defect is filling (diastolic). " +
    "The restrictive ventricle has near-normal wall and volume but is too stiff to fill, so the atrium enlarges (Slides 32-35).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three beating ventricles. Dilated: large cavity, thin wall, small change in size, systolic dysfunction with low ejection fraction. Hypertrophic: thick wall, small cavity that empties almost completely, diastolic dysfunction with high ejection fraction. Restrictive: near-normal wall and cavity that barely expands, with an enlarged atrium above, diastolic dysfunction.">
  <style>
    .dg94a-wall  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg94a-blood { fill: var(--dg-warm); opacity: .8; }
    .dg94a-atr   { fill: var(--dg-panel); stroke: var(--dg-muted); stroke-width: 1.5; }
    .dg94a-atbig { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg94a-h     { font-size: 15px; font-weight: 700; }
    .dg94a-lbl   { font-size: 12px; }
    .dg94a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg94a-sys   { font-size: 13px; font-weight: 700; fill: var(--dg-cool); }
    .dg94a-dia   { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg94a-beat  { transform-box: fill-box; transform-origin: center; }
    .dg94a-d { animation: dg94aD 1.6s ease-in-out infinite; }
    .dg94a-h1 { animation: dg94aH 1.6s ease-in-out infinite; }
    .dg94a-r { animation: dg94aR 1.6s ease-in-out infinite; }
    @keyframes dg94aD { 0%,100% { transform: scale(1) } 50% { transform: scale(.88) } }
    @keyframes dg94aH { 0%,100% { transform: scale(1) } 50% { transform: scale(.3) } }
    @keyframes dg94aR { 0%,100% { transform: scale(1) } 50% { transform: scale(.72) } }
  </style>

  <text x="110" y="24" text-anchor="middle" class="dg94a-h">Dilated</text>
  <ellipse cx="110" cy="72" rx="34" ry="18" class="dg94a-atr"/>
  <text x="110" y="76" text-anchor="middle" class="dg94a-sub">atrium</text>
  <ellipse cx="110" cy="160" rx="82" ry="66" class="dg94a-wall"/>
  <ellipse cx="110" cy="160" rx="74" ry="58" class="dg94a-blood dg94a-beat dg94a-d"/>
  <text x="110" y="248" text-anchor="middle" class="dg94a-lbl">big cavity, thin wall</text>
  <text x="110" y="268" text-anchor="middle" class="dg94a-sys">Systolic - low EF</text>
  <text x="110" y="286" text-anchor="middle" class="dg94a-sub">cannot squeeze</text>

  <text x="320" y="24" text-anchor="middle" class="dg94a-h">Hypertrophic</text>
  <ellipse cx="320" cy="72" rx="34" ry="18" class="dg94a-atr"/>
  <text x="320" y="76" text-anchor="middle" class="dg94a-sub">atrium</text>
  <ellipse cx="320" cy="160" rx="70" ry="60" class="dg94a-wall"/>
  <ellipse cx="320" cy="160" rx="26" ry="20" class="dg94a-blood dg94a-beat dg94a-h1"/>
  <text x="320" y="248" text-anchor="middle" class="dg94a-lbl">thick wall, small cavity</text>
  <text x="320" y="268" text-anchor="middle" class="dg94a-dia">Diastolic - high EF</text>
  <text x="320" y="286" text-anchor="middle" class="dg94a-sub">cannot fill, pumps it all out</text>

  <text x="530" y="24" text-anchor="middle" class="dg94a-h">Restrictive</text>
  <ellipse cx="530" cy="72" rx="56" ry="30" class="dg94a-atbig"/>
  <text x="530" y="76" text-anchor="middle" class="dg94a-lbl">enlarged atrium</text>
  <ellipse cx="530" cy="168" rx="60" ry="52" class="dg94a-wall"/>
  <ellipse cx="530" cy="168" rx="46" ry="38" class="dg94a-blood dg94a-beat dg94a-r"/>
  <text x="530" y="248" text-anchor="middle" class="dg94a-lbl">near-normal wall and volume</text>
  <text x="530" y="268" text-anchor="middle" class="dg94a-dia">Diastolic - stiff walls</text>
  <text x="530" y="286" text-anchor="middle" class="dg94a-sub">poor compliance</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv94-kawasaki-coronary-stages"] = {
  title: "Untreated Kawasaki: the coronary artery over time",
  caption:
    "The same coronary segment through the four stages of untreated disease. Inflammation (0-2 weeks) weakens the wall into an aneurysm (2-4 weeks); flow slows in the widened sac, so blood stagnates and thromboses, which can occlude the artery and cause an infarct. " +
    "Inflammation subsides but the aneurysm may persist (4-8 weeks), and after 8 weeks the wall scars and calcifies into a stenosis with a recanalized lumen. " +
    "20% of untreated children develop coronary artery disease, which is why IVIG is given within the first 10 days (Slides 48, 50).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Four panels of one coronary artery. Stage 1, first 2 weeks: inflamed wall. Stage 2, 2 to 4 weeks: aneurysm with slowed flow and a thrombus. Stage 3, 4 to 8 weeks: inflammation gone, aneurysm persists. Stage 4, after 8 weeks: scarred, calcified wall with stenosis and recanalization. A highlight moves from stage to stage in order.">
  <style>
    .dg94b-box   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg94b-hi    { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: 0; }
    .dg94b-wall  { fill: none; stroke: var(--dg-ink); stroke-width: 3; }
    .dg94b-hot   { fill: none; stroke: var(--dg-warm); stroke-width: 6; opacity: .75; }
    .dg94b-lumen { fill: var(--dg-panel); }
    .dg94b-clot  { fill: var(--dg-warm); }
    .dg94b-calc  { fill: var(--dg-muted); }
    .dg94b-h     { font-size: 14px; font-weight: 700; }
    .dg94b-t     { font-size: 12px; fill: var(--dg-accent); font-weight: 700; }
    .dg94b-lbl   { font-size: 11px; }
    .dg94b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg94b-flow  { fill: var(--dg-cool); }
    .dg94b-s1 { animation: dg94bOn 8s linear infinite; }
    .dg94b-s2 { animation: dg94bOn 8s linear infinite 2s; }
    .dg94b-s3 { animation: dg94bOn 8s linear infinite 4s; }
    .dg94b-s4 { animation: dg94bOn 8s linear infinite 6s; }
    @keyframes dg94bOn { 0% { opacity: 1 } 24% { opacity: 1 } 25% { opacity: 0 } 100% { opacity: 0 } }
    .dg94b-fast { animation: dg94bFast 1.2s linear infinite; }
    .dg94b-slow { animation: dg94bSlow 3.6s linear infinite; }
    @keyframes dg94bFast { from { transform: translateX(0) } to { transform: translateX(110px) } }
    @keyframes dg94bSlow { from { transform: translateX(0) } to { transform: translateX(110px) } }
  </style>

  <rect x="8" y="8" width="148" height="236" rx="10" class="dg94b-box"/>
  <rect x="164" y="8" width="148" height="236" rx="10" class="dg94b-box"/>
  <rect x="320" y="8" width="148" height="236" rx="10" class="dg94b-box"/>
  <rect x="476" y="8" width="148" height="236" rx="10" class="dg94b-box"/>
  <rect x="8" y="8" width="148" height="236" rx="10" class="dg94b-hi dg94b-s1"/>
  <rect x="164" y="8" width="148" height="236" rx="10" class="dg94b-hi dg94b-s2"/>
  <rect x="320" y="8" width="148" height="236" rx="10" class="dg94b-hi dg94b-s3"/>
  <rect x="476" y="8" width="148" height="236" rx="10" class="dg94b-hi dg94b-s4"/>

  <text x="82" y="32" text-anchor="middle" class="dg94b-h">Stage 1</text>
  <text x="82" y="50" text-anchor="middle" class="dg94b-t">first 2 weeks</text>
  <rect x="22" y="102" width="120" height="36" class="dg94b-lumen"/>
  <line x1="22" y1="102" x2="142" y2="102" class="dg94b-hot"/>
  <line x1="22" y1="138" x2="142" y2="138" class="dg94b-hot"/>
  <line x1="22" y1="102" x2="142" y2="102" class="dg94b-wall"/>
  <line x1="22" y1="138" x2="142" y2="138" class="dg94b-wall"/>
  <g class="dg94b-fast"><circle cx="26" cy="120" r="4" class="dg94b-flow"/></g>
  <text x="82" y="190" text-anchor="middle" class="dg94b-lbl">acute vasculitis</text>
  <text x="82" y="206" text-anchor="middle" class="dg94b-sub">of the coronary</text>
  <text x="82" y="222" text-anchor="middle" class="dg94b-sub">arteries</text>

  <text x="238" y="32" text-anchor="middle" class="dg94b-h">Stage 2</text>
  <text x="238" y="50" text-anchor="middle" class="dg94b-t">2-4 weeks</text>
  <path d="M178 102 H208 C212 70 264 70 268 102 H298 V138 H268 C264 170 212 170 208 138 H178 Z" class="dg94b-lumen"/>
  <path d="M178 102 H208 C212 70 264 70 268 102 H298" class="dg94b-hot"/>
  <path d="M178 138 H208 C212 170 264 170 268 138 H298" class="dg94b-hot"/>
  <path d="M178 102 H208 C212 70 264 70 268 102 H298" class="dg94b-wall"/>
  <path d="M178 138 H208 C212 170 264 170 268 138 H298" class="dg94b-wall"/>
  <ellipse cx="238" cy="148" rx="20" ry="9" class="dg94b-clot"/>
  <g class="dg94b-slow"><circle cx="182" cy="120" r="4" class="dg94b-flow"/></g>
  <text x="238" y="190" text-anchor="middle" class="dg94b-lbl">aneurysm: flow slows</text>
  <text x="238" y="206" text-anchor="middle" class="dg94b-sub">stagnant blood -> thrombus</text>
  <text x="238" y="222" text-anchor="middle" class="dg94b-sub">-> obstruction, MI</text>

  <text x="394" y="32" text-anchor="middle" class="dg94b-h">Stage 3</text>
  <text x="394" y="50" text-anchor="middle" class="dg94b-t">4-8 weeks</text>
  <path d="M334 102 H364 C368 70 420 70 424 102 H454 V138 H424 C420 170 368 170 364 138 H334 Z" class="dg94b-lumen"/>
  <path d="M334 102 H364 C368 70 420 70 424 102 H454" class="dg94b-wall"/>
  <path d="M334 138 H364 C368 170 420 170 424 138 H454" class="dg94b-wall"/>
  <text x="394" y="190" text-anchor="middle" class="dg94b-lbl">inflammation subsides</text>
  <text x="394" y="206" text-anchor="middle" class="dg94b-sub">aneurysm may persist</text>

  <text x="550" y="32" text-anchor="middle" class="dg94b-h">Stage 4</text>
  <text x="550" y="50" text-anchor="middle" class="dg94b-t">more than 8 weeks</text>
  <path d="M490 102 H520 C530 112 570 112 580 102 H610 V138 H580 C570 128 530 128 520 138 H490 Z" class="dg94b-lumen"/>
  <path d="M490 102 H520 C530 112 570 112 580 102 H610" class="dg94b-wall"/>
  <path d="M490 138 H520 C530 128 570 128 580 138 H610" class="dg94b-wall"/>
  <circle cx="536" cy="104" r="4" class="dg94b-calc"/>
  <circle cx="556" cy="106" r="4" class="dg94b-calc"/>
  <circle cx="546" cy="134" r="4" class="dg94b-calc"/>
  <circle cx="566" cy="133" r="4" class="dg94b-calc"/>
  <text x="550" y="190" text-anchor="middle" class="dg94b-lbl">scar + calcification</text>
  <text x="550" y="206" text-anchor="middle" class="dg94b-sub">stenosis, recanalization,</text>
  <text x="550" y="222" text-anchor="middle" class="dg94b-sub">myocardial fibrosis</text>

  <text x="320" y="272" text-anchor="middle" class="dg94b-lbl">20% of untreated children develop coronary artery disease</text>
</svg>`,
};

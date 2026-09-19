window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv107-effusion-rate"] = {
  title: "Effusion: rate beats volume",
  caption:
    "Left: fluid that accumulates slowly gives the pericardium time to remodel, so the sac stretches outward and the heart keeps filling; a chronic effusion under 500 mL may show only an enlarged water-bottle heart shadow. " +
    "Right: fluid that accumulates rapidly meets a sac that cannot stretch, so as little as 200-300 mL (classically hemopericardium from a ruptured MI or type A dissection) squeezes the thin-walled atria and venae cavae and the heart cannot fill - cardiac tamponade. " +
    "Values are this lecture's (Slide 20).",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Two panels. In the slow panel the pericardial sac enlarges as fluid collects and the heart stays full size, labelled under 500 mL, function maintained. In the rapid panel the sac stays fixed and the fluid compresses the heart inward, labelled 200 to 300 mL, cardiac tamponade.">
  <style>
    .dg107a-head { font-size: 14px; font-weight: 700; }
    .dg107a-lbl  { font-size: 12px; }
    .dg107a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg107a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg107a-sac  { fill: var(--dg-cool); fill-opacity: .22; stroke: var(--dg-cool); stroke-width: 2.5; }
    .dg107a-rigid { fill: var(--dg-cool); fill-opacity: .22; stroke: var(--dg-ink); stroke-width: 4; }
    .dg107a-heart { fill: var(--dg-warm); fill-opacity: .85; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg107a-press { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; fill: none; }
    .dg107a-tip  { fill: var(--dg-warm); }
    .dg107a-ok   { font-size: 13px; font-weight: 700; fill: var(--dg-good); }
    .dg107a-bad  { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg107a-grow { transform-box: fill-box; transform-origin: center; animation: dg107agrow 6s ease-in-out infinite; }
    .dg107a-squeeze { transform-box: fill-box; transform-origin: center; animation: dg107asqueeze 6s ease-in-out infinite; }
    .dg107a-pulse { animation: dg107apulse 6s ease-in-out infinite; }
    @keyframes dg107agrow { 0% { transform: scale(.7) } 70% { transform: scale(1) } 100% { transform: scale(1) } }
    @keyframes dg107asqueeze { 0% { transform: scale(1.3) } 70% { transform: scale(1) } 100% { transform: scale(1) } }
    @keyframes dg107apulse { 0% { opacity: .15 } 70% { opacity: 1 } 100% { opacity: 1 } }
  </style>

  <rect x="10" y="10" width="290" height="270" rx="14" class="dg107a-panel"/>
  <rect x="320" y="10" width="290" height="270" rx="14" class="dg107a-panel"/>

  <text x="26" y="36" class="dg107a-head">Slow (chronic) accumulation</text>
  <text x="336" y="36" class="dg107a-head">Rapid (acute) accumulation</text>

  <ellipse cx="155" cy="135" rx="100" ry="82" class="dg107a-sac dg107a-grow"/>
  <ellipse cx="155" cy="135" rx="52" ry="45" class="dg107a-heart"/>
  <text x="155" y="139" text-anchor="middle" class="dg107a-lbl">heart</text>
  <text x="155" y="68" text-anchor="middle" class="dg107a-sub">sac remodels and stretches</text>

  <ellipse cx="465" cy="135" rx="80" ry="68" class="dg107a-rigid"/>
  <ellipse cx="465" cy="135" rx="40" ry="34" class="dg107a-heart dg107a-squeeze"/>
  <text x="465" y="139" text-anchor="middle" class="dg107a-lbl">heart</text>
  <text x="465" y="58" text-anchor="middle" class="dg107a-sub">sac has no time to stretch</text>

  <g class="dg107a-pulse">
    <line x1="382" y1="135" x2="412" y2="135" class="dg107a-press"/>
    <polygon points="412,128 424,135 412,142" class="dg107a-tip"/>
    <line x1="548" y1="135" x2="518" y2="135" class="dg107a-press"/>
    <polygon points="518,128 506,135 518,142" class="dg107a-tip"/>
    <line x1="465" y1="198" x2="465" y2="178" class="dg107a-press"/>
    <polygon points="458,178 465,167 472,178" class="dg107a-tip"/>
  </g>

  <text x="155" y="240" text-anchor="middle" class="dg107a-lbl">Under 500 mL: water-bottle heart shadow</text>
  <text x="155" y="262" text-anchor="middle" class="dg107a-ok">Cardiac function maintained</text>

  <text x="465" y="240" text-anchor="middle" class="dg107a-lbl">Only 200-300 mL: heart cannot fill</text>
  <text x="465" y="262" text-anchor="middle" class="dg107a-bad">Cardiac tamponade</text>
</svg>`,
};

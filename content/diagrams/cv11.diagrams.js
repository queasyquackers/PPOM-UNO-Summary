/*
 * CV11 - Introduction to Osteopathy in the Cranial Field (H. Ettlinger, D.O.)
 *
 * Follows the authoring rules in lecture_diagrams.js: CSS keyframes only,
 * themed var(--dg-*) colors, viewBox with no fixed width/height, and a static
 * reading that still teaches under prefers-reduced-motion (every animated
 * element rests at its inhalation-phase value, which is the labelled state).
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// One full PRM cycle: the coupled shape change (Slides 23-25) plus the
// midline/paired coupling of the cranial bones (Slides 31-34).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv11-prm-inhalation-exhalation-cycle"] = {
  title: "One cycle of the primary respiratory mechanism",
  caption:
    "The overall movement of the PRM is a change in shape, not volume. In the inhalation phase the transverse diameter widens " +
    "while the AP and vertical diameters shorten by an equal amount (Ernie: wide and short); exhalation reverses all three " +
    "(Bert: narrow and tall). Both happen in the same instant everywhere: the midline base bones - occiput, sphenoid, ethmoid, " +
    "all formed in cartilage - rotate about transverse axes in opposite, gear-like fashion, so the sphenobasilar junction moves " +
    "upward in flexion and downward in extension, while the paired vault bones externally rotate on inhalation and internally " +
    "rotate on exhalation. Dashed outlines mark the neutral mid-cycle shape and the neutral vault height; small dots mark the " +
    "transverse axes. Because volume never changes, fluid is not displaced - it is only moved back and forth, which is the " +
    "premise for fluctuation. Frozen, the drawing sits in the inhalation phase. (Slides 23-25, 31-34.)",
  svg: `
<svg viewBox="0 0 640 318" role="img" aria-label="Two views of one cycle of the primary respiratory mechanism. Seen from above, the skull outline widens side to side while shortening front to back during inhalation, then narrows and lengthens during exhalation. In the lateral view of the cranial base the sphenoid and occiput rotate in opposite directions about transverse axes so the sphenobasilar junction rises during flexion while the vault height drops below its neutral level. A bar underneath names the two phases: inhalation is flexion of the midline bones with external rotation of the paired bones and the junction up; exhalation is extension with internal rotation and the junction down.">
  <style>
    .dg11a-panel  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg11a-ref    { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 5; opacity: .85; }
    .dg11a-shell  { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg11a-arc    { fill: none; stroke: var(--dg-cool); stroke-width: 6; stroke-linecap: round; }
    .dg11a-bone   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg11a-cool   { fill: var(--dg-cool); stroke: var(--dg-cool); }
    .dg11a-warm   { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg11a-good   { fill: var(--dg-good); stroke: var(--dg-good); }
    .dg11a-rot    { fill: none; stroke: var(--dg-ink); stroke-width: 2; opacity: .8; }
    .dg11a-head   { stroke: none; }
    .dg11a-ttl    { font-size: 10px; font-weight: 700; fill: var(--dg-muted); letter-spacing: .05em; }
    .dg11a-sub    { font-size: 10px; fill: var(--dg-muted); }
    .dg11a-tag    { font-size: 10px; }
    .dg11a-phase  { font-size: 11px; font-weight: 700; }
    .dg11a-line2  { font-size: 10px; }
    .dg11a-shape  { transform-origin: 156px 138px; transform: scale(1.16, .88); animation: dg11aShape 6s ease-in-out infinite; }
    @keyframes dg11aShape {
      0%, 100% { transform: scale(1, 1) }
      25%      { transform: scale(1.16, .88) }
      50%      { transform: scale(1, 1) }
      75%      { transform: scale(.9, 1.1) }
    }
    .dg11a-dome   { transform-origin: 462px 192px; transform: scale(.94, .9); animation: dg11aDome 6s ease-in-out infinite; }
    @keyframes dg11aDome {
      0%, 100% { transform: scale(1, 1) }
      25%      { transform: scale(.94, .9) }
      50%      { transform: scale(1, 1) }
      75%      { transform: scale(1.05, 1.07) }
    }
    .dg11a-sph    { transform-origin: 430px 178px; transform: translateY(-2px) rotate(-7deg); animation: dg11aSph 6s ease-in-out infinite; }
    @keyframes dg11aSph {
      0%, 100% { transform: translateY(0) rotate(0deg) }
      25%      { transform: translateY(-2px) rotate(-7deg) }
      50%      { transform: translateY(0) rotate(0deg) }
      75%      { transform: translateY(2px) rotate(5deg) }
    }
    .dg11a-occ    { transform-origin: 498px 178px; transform: translateY(-2px) rotate(7deg); animation: dg11aOcc 6s ease-in-out infinite; }
    @keyframes dg11aOcc {
      0%, 100% { transform: translateY(0) rotate(0deg) }
      25%      { transform: translateY(-2px) rotate(7deg) }
      50%      { transform: translateY(0) rotate(0deg) }
      75%      { transform: translateY(2px) rotate(-5deg) }
    }
    .dg11a-sbj    { transform: translateY(-6px); animation: dg11aSbj 6s ease-in-out infinite; }
    @keyframes dg11aSbj {
      0%, 100% { transform: translateY(0) }
      25%      { transform: translateY(-6px) }
      50%      { transform: translateY(0) }
      75%      { transform: translateY(4px) }
    }
    .dg11a-mark   { transform: translateX(140px); animation: dg11aMark 6s linear infinite; }
    @keyframes dg11aMark {
      0%   { transform: translateX(0);     opacity: .15 }
      8%   { opacity: 1 }
      92%  { opacity: 1 }
      100% { transform: translateX(560px); opacity: .15 }
    }
  </style>

  <text x="20" y="26" class="dg11a-ttl">SUPERIOR VIEW (from above)</text>
  <text x="308" y="26" class="dg11a-ttl">LATERAL VIEW (cranial base)</text>

  <rect x="20" y="34" width="272" height="204" rx="12" class="dg11a-panel"/>
  <rect x="308" y="34" width="308" height="204" rx="12" class="dg11a-panel"/>

  <ellipse cx="156" cy="138" rx="54" ry="72" class="dg11a-ref"/>
  <g class="dg11a-shape">
    <ellipse cx="156" cy="138" rx="54" ry="72" class="dg11a-shell" vector-effect="non-scaling-stroke"/>
    <path d="M 109,102 A 54,72 0 0 0 109,174" class="dg11a-arc" vector-effect="non-scaling-stroke"/>
    <path d="M 203,102 A 54,72 0 0 1 203,174" class="dg11a-arc" vector-effect="non-scaling-stroke"/>
  </g>

  <line x1="156" y1="44" x2="156" y2="58" class="dg11a-warm" stroke-width="2.5"/>
  <polygon points="150,57 162,57 156,67" class="dg11a-warm dg11a-head"/>
  <text x="166" y="52" class="dg11a-tag" fill="var(--dg-warm)">AP shortens</text>
  <line x1="156" y1="232" x2="156" y2="218" class="dg11a-warm" stroke-width="2.5"/>
  <polygon points="150,219 162,219 156,209" class="dg11a-warm dg11a-head"/>

  <line x1="98" y1="138" x2="88" y2="138" class="dg11a-cool" stroke-width="2.5"/>
  <polygon points="88,132 88,144 78,138" class="dg11a-cool dg11a-head"/>
  <line x1="214" y1="138" x2="224" y2="138" class="dg11a-cool" stroke-width="2.5"/>
  <polygon points="224,132 224,144 234,138" class="dg11a-cool dg11a-head"/>

  <line x1="398" y1="78" x2="526" y2="78" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 5"/>
  <text x="532" y="82" class="dg11a-sub">neutral height</text>
  <g class="dg11a-dome">
    <path d="M 358,192 C 358,40 566,40 566,192" class="dg11a-shell" vector-effect="non-scaling-stroke"/>
  </g>
  <line x1="462" y1="50" x2="462" y2="62" class="dg11a-warm" stroke-width="2.5"/>
  <polygon points="456,61 468,61 462,71" class="dg11a-warm dg11a-head"/>
  <text x="474" y="58" class="dg11a-tag" fill="var(--dg-warm)">vertical shortens</text>

  <line x1="352" y1="192" x2="572" y2="192" stroke="var(--dg-line)" stroke-width="1.3" stroke-dasharray="4 5"/>

  <g class="dg11a-sph">
    <rect x="398" y="165" width="64" height="26" rx="7" class="dg11a-bone" vector-effect="non-scaling-stroke"/>
    <circle cx="430" cy="178" r="2.2" fill="var(--dg-muted)"/>
  </g>
  <g class="dg11a-occ">
    <rect x="466" y="165" width="64" height="26" rx="7" class="dg11a-bone" vector-effect="non-scaling-stroke"/>
    <circle cx="498" cy="178" r="2.2" fill="var(--dg-muted)"/>
  </g>

  <path d="M 451,157 A 24,24 0 0 0 405,157" class="dg11a-rot"/>
  <polygon points="399,150 411,153 402,164" fill="var(--dg-ink)" opacity=".8"/>
  <path d="M 477,157 A 24,24 0 0 1 523,157" class="dg11a-rot"/>
  <polygon points="529,150 517,153 526,164" fill="var(--dg-ink)" opacity=".8"/>

  <g class="dg11a-sbj">
    <circle cx="464" cy="174" r="4.5" class="dg11a-good"/>
    <line x1="464" y1="166" x2="464" y2="152" class="dg11a-good" stroke-width="2"/>
    <polygon points="458,153 470,153 464,143" class="dg11a-good dg11a-head"/>
  </g>
  <text x="464" y="128" text-anchor="middle" class="dg11a-tag" font-weight="700" fill="var(--dg-good)">SBJ rises in flexion</text>

  <text x="424" y="212" text-anchor="middle" class="dg11a-sub">sphenoid</text>
  <text x="504" y="212" text-anchor="middle" class="dg11a-sub">occiput</text>

  <text x="156" y="252" text-anchor="middle" class="dg11a-line2" fill="var(--dg-cool)">transverse widens as the paired bones rotate out</text>
  <text x="462" y="252" text-anchor="middle" class="dg11a-line2" fill="var(--dg-ink)">midline base bones rotate opposite ways about transverse axes</text>

  <rect x="40" y="262" width="560" height="48" rx="10" class="dg11a-panel"/>
  <line x1="320" y1="262" x2="320" y2="310" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="180" y="279" text-anchor="middle" class="dg11a-phase" fill="var(--dg-cool)">INHALATION (Ernie) &#8212; wide + short</text>
  <text x="180" y="293" text-anchor="middle" class="dg11a-line2">midline bones: flexion &#183; SBJ up</text>
  <text x="180" y="305" text-anchor="middle" class="dg11a-line2">paired bones: external rotation</text>
  <text x="460" y="279" text-anchor="middle" class="dg11a-phase" fill="var(--dg-warm)">EXHALATION (Bert) &#8212; narrow + tall</text>
  <text x="460" y="293" text-anchor="middle" class="dg11a-line2">midline bones: extension &#183; SBJ down</text>
  <text x="460" y="305" text-anchor="middle" class="dg11a-line2">paired bones: internal rotation</text>
  <g class="dg11a-mark">
    <circle cx="40" cy="262" r="5" fill="var(--dg-accent)"/>
  </g>
</svg>`,
};

// --------------------------------------------------------------------------
// Fluctuation vs. circulation - Sutherland's bathtub (Slides 57-60).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv11-fluctuation-vs-circulation"] = {
  title: "Fluctuation vs. circulation at the interstitium",
  caption:
    "Sutherland's bathtub. Left: circulation alone - a drip in at the faucet and an equal drip out at the drain. Volume never " +
    "changes, and interstitial pressure is negative, so fluid will not move itself; solute settles at the exchange site and " +
    "cellular exchange stalls. Right: the same tub with the PRM's to-and-fro fluctuation added - the hand stirring the water. " +
    "Solute is swept back and forth with no change in volume, so concentration gradients across the cell membrane keep changing " +
    "and exchange continues (the blue arrow is nutrients and oxygen entering, the orange arrow is waste and CO2 leaving). " +
    "Circulation delivers supply to the general area; fluctuation determines what happens at the interstitial space - the " +
    "microcirculation. Frozen, the left tub shows the settled, stalled state and the right shows exchange still running. " +
    "(Slides 57-60.)",
  svg: `
<svg viewBox="0 0 640 266" role="img" aria-label="Two side-by-side tanks of interstitial fluid, each with an equal drip in at the top and drip out at the bottom and a cell sitting at the bottom. In the left tank, labelled circulation alone, dissolved solute drifts downward and settles into a stagnant layer on the cell membrane and the exchange arrows across that membrane fade almost to nothing. In the right tank, labelled circulation plus fluctuation, a double-headed arrow shows a to-and-fro tide that sweeps the same solute back and forth without changing the volume, and the exchange arrows across the membrane keep pulsing.">
  <style>
    .dg11b-tub    { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg11b-cell   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.8; }
    .dg11b-solute { fill: var(--dg-accent); }
    .dg11b-cool   { fill: var(--dg-cool); stroke: var(--dg-cool); }
    .dg11b-warm   { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg11b-acc    { fill: var(--dg-accent); stroke: var(--dg-accent); }
    .dg11b-head   { stroke: none; }
    .dg11b-ttl    { font-size: 11px; font-weight: 700; }
    .dg11b-tag    { font-size: 10px; }
    .dg11b-out    { font-size: 10.5px; font-weight: 700; }
    .dg11b-foot   { font-size: 10px; fill: var(--dg-muted); }
    .dg11b-s1, .dg11b-s2, .dg11b-s3 { transform: translateY(0); }
    .dg11b-s1 { animation: dg11bSettle 7s ease-in infinite; }
    .dg11b-s2 { animation: dg11bSettle 7s ease-in infinite .9s; }
    .dg11b-s3 { animation: dg11bSettle 7s ease-in infinite 1.8s; }
    @keyframes dg11bSettle {
      0%   { transform: translateY(-70px) }
      60%  { transform: translateY(0) }
      100% { transform: translateY(0) }
    }
    .dg11b-band { opacity: .32; animation: dg11bBand 7s ease-in infinite; }
    @keyframes dg11bBand {
      0%   { opacity: 0 }
      60%  { opacity: .32 }
      100% { opacity: .32 }
    }
    .dg11b-fade { opacity: .26; animation: dg11bFade 7s ease-in-out infinite; }
    @keyframes dg11bFade {
      0%   { opacity: 1 }
      55%  { opacity: .26 }
      100% { opacity: .26 }
    }
    .dg11b-sweep { transform: translateX(0); animation: dg11bSweep 6s ease-in-out infinite; }
    @keyframes dg11bSweep {
      0%, 100% { transform: translateX(-26px) }
      50%      { transform: translateX(26px) }
    }
    .dg11b-tide { transform: translateX(0); animation: dg11bTide 6s ease-in-out infinite; }
    @keyframes dg11bTide {
      0%, 100% { transform: translateX(-84px) }
      50%      { transform: translateX(84px) }
    }
    .dg11b-pulse { opacity: 1; animation: dg11bPulse 6s ease-in-out infinite; }
    .dg11b-pulse2 { opacity: 1; animation: dg11bPulse 6s ease-in-out infinite 3s; }
    @keyframes dg11bPulse {
      0%, 100% { opacity: .45 }
      50%      { opacity: 1 }
    }
  </style>

  <text x="24" y="22" class="dg11b-ttl" fill="var(--dg-warm)">Circulation alone</text>
  <text x="340" y="22" class="dg11b-ttl" fill="var(--dg-accent)">Circulation + PRM fluctuation</text>

  <rect x="24" y="34" width="276" height="166" rx="10" class="dg11b-tub"/>
  <rect x="340" y="34" width="276" height="166" rx="10" class="dg11b-tub"/>

  <line x1="48" y1="42" x2="48" y2="56" class="dg11b-cool" stroke-width="2.5"/>
  <polygon points="42,55 54,55 48,65" class="dg11b-cool dg11b-head"/>
  <text x="58" y="58" class="dg11b-tag" fill="var(--dg-cool)">drip in</text>
  <line x1="276" y1="164" x2="276" y2="178" class="dg11b-warm" stroke-width="2.5"/>
  <polygon points="270,177 282,177 276,187" class="dg11b-warm dg11b-head"/>
  <text x="266" y="176" text-anchor="end" class="dg11b-tag" fill="var(--dg-warm)">equal drip out</text>

  <line x1="364" y1="42" x2="364" y2="56" class="dg11b-cool" stroke-width="2.5"/>
  <polygon points="358,55 370,55 364,65" class="dg11b-cool dg11b-head"/>
  <text x="374" y="58" class="dg11b-tag" fill="var(--dg-cool)">drip in</text>
  <line x1="592" y1="164" x2="592" y2="178" class="dg11b-warm" stroke-width="2.5"/>
  <polygon points="586,177 598,177 592,187" class="dg11b-warm dg11b-head"/>
  <text x="582" y="176" text-anchor="end" class="dg11b-tag" fill="var(--dg-warm)">equal drip out</text>

  <rect x="98" y="141" width="128" height="10" rx="4" fill="var(--dg-muted)" class="dg11b-band"/>
  <g class="dg11b-s1"><circle cx="110" cy="134" r="4.5" class="dg11b-solute"/></g>
  <g class="dg11b-s2"><circle cx="132" cy="133" r="4.5" class="dg11b-solute"/></g>
  <g class="dg11b-s3"><circle cx="154" cy="134" r="4.5" class="dg11b-solute"/></g>
  <g class="dg11b-s2"><circle cx="176" cy="133" r="4.5" class="dg11b-solute"/></g>
  <g class="dg11b-s1"><circle cx="198" cy="134" r="4.5" class="dg11b-solute"/></g>
  <g class="dg11b-s3"><circle cx="218" cy="133" r="4.5" class="dg11b-solute"/></g>

  <rect x="96" y="152" width="132" height="36" rx="9" class="dg11b-cell"/>
  <text x="162" y="175" text-anchor="middle" class="dg11b-tag" fill="var(--dg-accent)" font-weight="700">cell</text>
  <g class="dg11b-fade">
    <line x1="118" y1="126" x2="118" y2="156" class="dg11b-cool" stroke-width="2.5"/>
    <polygon points="112,155 124,155 118,165" class="dg11b-cool dg11b-head"/>
    <line x1="206" y1="165" x2="206" y2="136" class="dg11b-warm" stroke-width="2.5"/>
    <polygon points="200,137 212,137 206,127" class="dg11b-warm dg11b-head"/>
  </g>

  <text x="478" y="70" text-anchor="middle" class="dg11b-tag" fill="var(--dg-accent)">to-and-fro &#8212; volume unchanged</text>
  <line x1="394" y1="86" x2="562" y2="86" class="dg11b-acc" stroke-width="2.5"/>
  <polygon points="394,80 394,92 384,86" class="dg11b-acc dg11b-head"/>
  <polygon points="562,80 562,92 572,86" class="dg11b-acc dg11b-head"/>
  <g class="dg11b-tide"><circle cx="478" cy="86" r="5" fill="var(--dg-accent)"/></g>

  <g class="dg11b-sweep">
    <circle cx="400" cy="112" r="4.5" class="dg11b-solute"/>
    <circle cx="432" cy="124" r="4.5" class="dg11b-solute"/>
    <circle cx="464" cy="110" r="4.5" class="dg11b-solute"/>
    <circle cx="496" cy="126" r="4.5" class="dg11b-solute"/>
    <circle cx="528" cy="112" r="4.5" class="dg11b-solute"/>
    <circle cx="556" cy="124" r="4.5" class="dg11b-solute"/>
    <circle cx="416" cy="138" r="4.5" class="dg11b-solute"/>
    <circle cx="540" cy="138" r="4.5" class="dg11b-solute"/>
  </g>

  <rect x="412" y="152" width="132" height="36" rx="9" class="dg11b-cell"/>
  <text x="478" y="175" text-anchor="middle" class="dg11b-tag" fill="var(--dg-accent)" font-weight="700">cell</text>
  <g class="dg11b-pulse">
    <line x1="434" y1="128" x2="434" y2="156" class="dg11b-cool" stroke-width="2.5"/>
    <polygon points="428,155 440,155 434,165" class="dg11b-cool dg11b-head"/>
  </g>
  <g class="dg11b-pulse2">
    <line x1="522" y1="165" x2="522" y2="138" class="dg11b-warm" stroke-width="2.5"/>
    <polygon points="516,139 528,139 522,129" class="dg11b-warm dg11b-head"/>
  </g>

  <text x="162" y="218" text-anchor="middle" class="dg11b-out" fill="var(--dg-warm)">in = out, yet the exchange site goes still</text>
  <text x="478" y="218" text-anchor="middle" class="dg11b-out" fill="var(--dg-good)">stirring keeps the gradients changing</text>
  <text x="320" y="240" text-anchor="middle" class="dg11b-foot">interstitial pressure is negative &#8212; fluid will not move itself against it</text>
  <text x="320" y="258" text-anchor="middle" class="dg11b-foot">circulation delivers supply to the area &#183; fluctuation runs the exchange (microcirculation)</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Motility of the brain and cord: the developmental path, then the living
// coiling and uncoiling that retraces it (Slides 49-53).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv11-neural-tube-coiling"] = {
  title: "Motility: coiling along the path of development",
  caption:
    "Left, the embryologic path drawn in sequence: the nervous system starts as a tube with a bud, the tube elongates while the " +
    "bud that becomes the brain dips down, and then the cortical buds coil outward to form the cortex. The C-shaped curve is the " +
    "lateral ventricle - its shape is the record of the sweep the cortex made. Right, the living motion. Sutherland's word for it " +
    "is motility: the brain and cord move themselves, unlike the bones and membranes, which have mobility and must be moved. The " +
    "tissue follows the path of its development - with inhalation the CNS coils, becoming shorter and fatter (the same shape " +
    "change as the cranium) and the cord lifts like a tadpole's tail; with exhalation it uncoils. The dashed outline is the " +
    "uncoiled exhalation shape. Sutherland believed motion originated from the brain but did not consider motility the drive of " +
    "the PRM - that role belongs to the fluid. (Slides 49-53.)",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="On the left, three stages of neural development drawn in sequence: a straight neural tube with a bud, then the tube elongated with the bud dipping downward, then the cortex formed by buds coiling outward with a C-shaped lateral ventricle traced inside it. On the right, the same coiled nervous system in motion: the brain shortens and widens as it coils during inhalation, with the spinal cord lifting like a tadpole tail, and returns toward the dashed uncoiled outline during exhalation.">
  <style>
    .dg11c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg11c-tube  { fill: none; stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; }
    .dg11c-bud   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg11c-vent  { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linecap: round; }
    .dg11c-ghost { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 5; opacity: .85; }
    .dg11c-cool  { fill: var(--dg-cool); stroke: var(--dg-cool); }
    .dg11c-head  { stroke: none; }
    .dg11c-ttl   { font-size: 10px; font-weight: 700; fill: var(--dg-muted); letter-spacing: .05em; }
    .dg11c-stage { font-size: 10px; fill: var(--dg-muted); }
    .dg11c-note  { font-size: 10px; }
    .dg11c-foot  { font-size: 10.5px; }
    .dg11c-d1 { stroke-dasharray: 108; stroke-dashoffset: 0; animation: dg11cD1 7.5s ease-in-out infinite; }
    @keyframes dg11cD1 {
      0%   { stroke-dashoffset: 108 }
      20%  { stroke-dashoffset: 0 }
      100% { stroke-dashoffset: 0 }
    }
    .dg11c-d2 { stroke-dasharray: 78; stroke-dashoffset: 0; animation: dg11cD2 7.5s ease-in-out infinite; }
    @keyframes dg11cD2 {
      0%, 24% { stroke-dashoffset: 78 }
      46%     { stroke-dashoffset: 0 }
      100%    { stroke-dashoffset: 0 }
    }
    .dg11c-d3 { stroke-dasharray: 132; stroke-dashoffset: 0; animation: dg11cD3 7.5s ease-in-out infinite; }
    @keyframes dg11cD3 {
      0%, 50% { stroke-dashoffset: 132 }
      78%     { stroke-dashoffset: 0 }
      100%    { stroke-dashoffset: 0 }
    }
    .dg11c-brain { transform-origin: 504px 104px; transform: scale(1.14, .86); animation: dg11cCoil 6s ease-in-out infinite; }
    @keyframes dg11cCoil {
      0%, 100% { transform: scale(.92, 1.1) }
      50%      { transform: scale(1.14, .86) }
    }
    .dg11c-tail { transform-origin: 504px 146px; transform: translateY(-6px) rotate(-14deg); animation: dg11cTail 6s ease-in-out infinite; }
    @keyframes dg11cTail {
      0%, 100% { transform: translateY(2px) rotate(4deg) }
      50%      { transform: translateY(-6px) rotate(-14deg) }
    }
  </style>

  <text x="20" y="24" class="dg11c-ttl">EMBRYOLOGIC PATH</text>
  <text x="388" y="24" class="dg11c-ttl">INHERENT MOTILITY</text>

  <rect x="20" y="32" width="352" height="200" rx="12" class="dg11c-panel"/>
  <rect x="388" y="32" width="232" height="200" rx="12" class="dg11c-panel"/>

  <line x1="84" y1="74" x2="84" y2="178" class="dg11c-tube dg11c-d1"/>
  <circle cx="84" cy="64" r="13" class="dg11c-bud"/>
  <text x="84" y="204" text-anchor="middle" class="dg11c-stage">1 &#183; tube + bud</text>

  <line x1="196" y1="70" x2="196" y2="190" class="dg11c-tube"/>
  <path d="M 196,76 C 178,66 160,82 162,100" class="dg11c-tube dg11c-d2" stroke-width="4"/>
  <ellipse cx="160" cy="108" rx="15" ry="12" class="dg11c-bud"/>
  <text x="196" y="204" text-anchor="middle" class="dg11c-stage">2 &#183; bud dips down</text>

  <ellipse cx="308" cy="100" rx="46" ry="36" class="dg11c-bud"/>
  <line x1="308" y1="136" x2="308" y2="190" class="dg11c-tube"/>
  <path d="M 292,120 C 274,110 274,84 292,78 C 308,72 328,80 330,96" class="dg11c-vent dg11c-d3"/>
  <path d="M 322,60 A 36,36 0 0 1 348,94" fill="none" stroke="var(--dg-cool)" stroke-width="2"/>
  <polygon points="342,88 354,90 347,102" class="dg11c-cool dg11c-head"/>
  <text x="308" y="204" text-anchor="middle" class="dg11c-stage">3 &#183; cortical buds</text>
  <text x="308" y="218" text-anchor="middle" class="dg11c-stage">coil outward</text>

  <text x="504" y="50" text-anchor="middle" class="dg11c-stage">dashed = uncoiled (exhalation)</text>
  <ellipse cx="504" cy="104" rx="40" ry="46" class="dg11c-ghost"/>
  <g class="dg11c-brain">
    <ellipse cx="504" cy="104" rx="44" ry="42" class="dg11c-bud" vector-effect="non-scaling-stroke"/>
    <path d="M 490,124 C 474,114 476,88 494,82 C 510,76 528,86 528,100" class="dg11c-vent" vector-effect="non-scaling-stroke"/>
  </g>
  <g class="dg11c-tail">
    <path d="M 504,146 C 508,176 498,196 486,210" fill="none" stroke="var(--dg-ink)" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  </g>
  <line x1="452" y1="198" x2="452" y2="184" class="dg11c-cool" stroke-width="2.5"/>
  <polygon points="446,185 458,185 452,175" class="dg11c-cool dg11c-head"/>
  <text x="444" y="204" text-anchor="end" class="dg11c-note" fill="var(--dg-cool)">cord lifts</text>

  <text x="196" y="252" text-anchor="middle" class="dg11c-foot" fill="var(--dg-accent)">the C-shaped curve is the lateral ventricle</text>
  <text x="196" y="270" text-anchor="middle" class="dg11c-foot" fill="var(--dg-muted)">it records the path the cortex swept</text>
  <text x="504" y="252" text-anchor="middle" class="dg11c-foot" fill="var(--dg-cool)">inhalation: coils, shorter + fatter</text>
  <text x="504" y="270" text-anchor="middle" class="dg11c-foot" fill="var(--dg-warm)">exhalation: uncoils</text>
  <text x="320" y="292" text-anchor="middle" class="dg11c-foot" fill="var(--dg-ink)">motility = the tissue moves itself, retracing the path of its development</text>
</svg>`,
};

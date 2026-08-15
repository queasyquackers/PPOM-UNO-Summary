/*
 * cv34 - OMM Lab #34 Prep: OCF Diagnosis and Treatment (Lecture #34, R. Abu-Sbaih, DO).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Direct vs indirect balanced membranous tension - same endpoint, opposite
//    starting direction, and the balance point moves after every release.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv34-bmt-direct-indirect"] = {
  title: "Direct vs indirect BMT",
  caption:
    "One strain pattern, one range of motion, two ways in. <b>Direct BMT</b> carries the pattern toward its <b>barrier</b>; " +
    "<b>indirect BMT</b> exaggerates it toward its <b>freedom</b> - the direction the dysfunction is named for. " +
    "Both stack tissue to a point of balanced tension and wait; when release comes, the balance point itself shifts further along, " +
    "and you follow it rather than letting the pattern retrace its steps (Slide 19).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="A horizontal range of motion runs from barrier on the left, through neutral in the middle, to freedom on the right. On the upper track, labelled direct balanced membranous tension, a marker starting at the resting strain pattern moves left toward the barrier, pauses at a point of balanced tension, then advances further left after the release. On the lower track, labelled indirect balanced membranous tension, the same marker moves right toward the freedom, pauses at its point of balanced tension, then advances further right after the release.">
  <style>
    .dg34a-lbl  { font-size: 11px; font-weight: 700; }
    .dg34a-cap  { font-size: 10px; fill: var(--dg-muted); }
    .dg34a-row  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg34a-track{ stroke: var(--dg-line); stroke-width: 5; stroke-linecap: round; }
    .dg34a-gd   { stroke-dasharray: 4 5; stroke-width: 1.4; }
    .dg34a-warm { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg34a-cool { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg34a-mute { stroke: var(--dg-line); }
    .dg34a-mk   { fill: var(--dg-accent); stroke: var(--dg-surface); stroke-width: 2; }
    .dg34a-ring { fill: none; stroke: var(--dg-good); stroke-width: 2.4; }
    .dg34a-hint { stroke-width: 3; stroke-linecap: round; opacity: .5; }

    .dg34a-dirD { animation: dg34aDir 6s ease-in-out infinite; }
    @keyframes dg34aDir {
      0%   { transform: translateX(0);      opacity: 0 }
      7%   { opacity: 1 }
      28%  { transform: translateX(-200px) }
      58%  { transform: translateX(-200px) }
      70%  { transform: translateX(-240px) }
      94%  { transform: translateX(-240px); opacity: 1 }
      100% { transform: translateX(-240px); opacity: 0 }
    }
    .dg34a-indD { animation: dg34aInd 6s ease-in-out infinite; }
    @keyframes dg34aInd {
      0%   { transform: translateX(0);     opacity: 0 }
      7%   { opacity: 1 }
      28%  { transform: translateX(115px) }
      58%  { transform: translateX(115px) }
      70%  { transform: translateX(155px) }
      94%  { transform: translateX(155px); opacity: 1 }
      100% { transform: translateX(155px); opacity: 0 }
    }
    .dg34a-pls { animation: dg34aPls 6s ease-in-out infinite; }
    @keyframes dg34aPls {
      0%,24% { opacity: .25 }
      32%    { opacity: 1 }
      58%    { opacity: 1 }
      68%    { opacity: .25 }
      100%   { opacity: .25 }
    }
  </style>

  <text x="120" y="24" text-anchor="middle" class="dg34a-lbl" fill="var(--dg-warm)">BARRIER</text>
  <text x="360" y="24" text-anchor="middle" class="dg34a-cap">neutral</text>
  <text x="600" y="24" text-anchor="middle" class="dg34a-lbl" fill="var(--dg-cool)">FREEDOM</text>

  <line x1="120" y1="34" x2="120" y2="212" class="dg34a-warm dg34a-gd"/>
  <line x1="360" y1="34" x2="360" y2="212" class="dg34a-mute dg34a-gd"/>
  <line x1="600" y1="34" x2="600" y2="212" class="dg34a-cool dg34a-gd"/>

  <text x="8" y="88" class="dg34a-row">DIRECT</text>
  <line x1="120" y1="96" x2="600" y2="96" class="dg34a-track"/>
  <line x1="404" y1="96" x2="266" y2="96" class="dg34a-warm dg34a-hint"/>
  <polygon points="266,88 246,96 266,104" class="dg34a-warm"/>
  <circle cx="230" cy="96" r="15" class="dg34a-ring dg34a-pls"/>
  <text x="230" y="122" text-anchor="middle" class="dg34a-cap">POBT, then follow it</text>
  <g class="dg34a-dirD"><circle cx="430" cy="96" r="8" class="dg34a-mk"/></g>

  <text x="8" y="178" class="dg34a-row">INDIRECT</text>
  <line x1="120" y1="186" x2="600" y2="186" class="dg34a-track"/>
  <line x1="456" y1="186" x2="514" y2="186" class="dg34a-cool dg34a-hint"/>
  <polygon points="514,178 534,186 514,194" class="dg34a-cool"/>
  <circle cx="545" cy="186" r="15" class="dg34a-ring dg34a-pls"/>
  <text x="545" y="212" text-anchor="middle" class="dg34a-cap">POBT, then follow it</text>
  <g class="dg34a-indD"><circle cx="430" cy="186" r="8" class="dg34a-mk"/></g>

  <circle cx="430" cy="141" r="3.5" fill="var(--dg-ink)"/>
  <text x="430" y="146" text-anchor="middle" class="dg34a-cap" dy="-9">resting strain pattern</text>

  <text x="320" y="240" text-anchor="middle" class="dg34a-cap">Hold, wait for the release, then chase the new balance point - never let the pattern retrace.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. V-spread with directing the tide at the occipitomastoid suture: the wave
//    goes out, bounces back, is redirected, and the suture finally spreads.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv34-vspread-tide"] = {
  title: "V-spread and directing the tide",
  caption:
    "Two fingers straddle the restricted occipitomastoid suture and gently disengage it, while the other hand sits at the point " +
    "of greatest distance - for the OM suture, the frontal - and uses <b>intention</b>, not pressure, to start a fluid fluctuation. " +
    "The wave travels to the suture, bounces back to the initiating hand, and is received and redirected for several cycles until " +
    "the suture softens, spreads, and the wave stops returning. The jugular foramen sits right there: CN IX, X, XI and the internal jugular vein (Slides 20-22).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="A skull seen from the side. A hand marked two rests on the frontal bone at the front, and two fingers marked one straddle the occipitomastoid suture at the lower back of the skull. A fluid wave travels from the frontal hand back to the suture, then a returning wave travels forward again to the frontal hand, repeating until the suture spreads open. A label notes the jugular foramen carrying cranial nerves nine, ten and eleven and the internal jugular vein.">
  <style>
    .dg34b-skull { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg34b-hand  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.4; }
    .dg34b-num   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg34b-lbl   { font-size: 11px; }
    .dg34b-cap   { font-size: 10px; fill: var(--dg-muted); }
    .dg34b-sut   { stroke: var(--dg-ink); stroke-width: 3.2; stroke-linecap: round; }
    .dg34b-out   { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg34b-back  { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg34b-jug   { fill: var(--dg-good); }

    .dg34b-go { animation: dg34bGo 5s linear infinite; }
    @keyframes dg34bGo {
      0%   { transform: translate(0, 0);        opacity: 0 }
      8%   { opacity: 1 }
      40%  { transform: translate(348px, 66px); opacity: 1 }
      47%  { transform: translate(348px, 66px); opacity: 0 }
      100% { transform: translate(348px, 66px); opacity: 0 }
    }
    .dg34b-rt { animation: dg34bRt 5s linear infinite; }
    @keyframes dg34bRt {
      0%   { transform: translate(0, 0);          opacity: 0 }
      48%  { transform: translate(0, 0);          opacity: 0 }
      55%  { opacity: 1 }
      88%  { transform: translate(-348px, -66px); opacity: 1 }
      95%  { transform: translate(-348px, -66px); opacity: 0 }
      100% { transform: translate(-348px, -66px); opacity: 0 }
    }
    .dg34b-op1 { animation: dg34bOp1 5s ease-in-out infinite; }
    @keyframes dg34bOp1 {
      0%,36% { transform: translate(0, 0) }
      52%    { transform: translate(-5px, 4px) }
      74%    { transform: translate(-5px, 4px) }
      100%   { transform: translate(0, 0) }
    }
    .dg34b-op2 { animation: dg34bOp2 5s ease-in-out infinite; }
    @keyframes dg34bOp2 {
      0%,36% { transform: translate(0, 0) }
      52%    { transform: translate(5px, -4px) }
      74%    { transform: translate(5px, -4px) }
      100%   { transform: translate(0, 0) }
    }
    .dg34b-soft { animation: dg34bSoft 5s ease-in-out infinite; }
    @keyframes dg34bSoft {
      0%,40% { opacity: 0 }
      56%    { opacity: 1 }
      78%    { opacity: 1 }
      100%   { opacity: 0 }
    }
  </style>

  <ellipse cx="310" cy="122" rx="228" ry="86" class="dg34b-skull"/>
  <text x="120" y="52" class="dg34b-cap">anterior</text>
  <text x="500" y="52" class="dg34b-cap">posterior</text>

  <circle cx="112" cy="118" r="17" class="dg34b-hand"/>
  <text x="112" y="123" text-anchor="middle" class="dg34b-num">2</text>
  <text x="30" y="168" class="dg34b-lbl">frontal:</text>
  <text x="30" y="184" class="dg34b-cap">intention starts the wave,</text>
  <text x="30" y="198" class="dg34b-cap">it does not push fluid</text>

  <g class="dg34b-op1"><line x1="432" y1="158" x2="470" y2="186" class="dg34b-sut"/></g>
  <g class="dg34b-op2"><line x1="478" y1="192" x2="516" y2="220" class="dg34b-sut"/></g>
  <circle cx="440" cy="196" r="13" class="dg34b-hand"/>
  <text x="440" y="201" text-anchor="middle" class="dg34b-num">1</text>
  <circle cx="512" cy="164" r="13" class="dg34b-hand"/>
  <text x="512" y="169" text-anchor="middle" class="dg34b-num">1</text>
  <text x="636" y="196" text-anchor="end" class="dg34b-lbl">O-M suture</text>
  <text x="636" y="212" text-anchor="end" class="dg34b-cap">treat the heavier,</text>
  <text x="636" y="225" text-anchor="end" class="dg34b-cap">more compressed side first</text>

  <circle cx="474" cy="190" r="5" class="dg34b-jug"/>
  <text x="352" y="240" class="dg34b-cap" fill="var(--dg-good)">jugular foramen: CN IX, X, XI + internal jugular vein</text>

  <g class="dg34b-go">
    <path d="M120 128 q10 12 0 24" class="dg34b-out"/>
    <path d="M136 126 q12 14 0 28" class="dg34b-out" opacity=".7"/>
    <path d="M152 124 q14 16 0 32" class="dg34b-out" opacity=".45"/>
  </g>
  <g class="dg34b-rt">
    <path d="M424 190 q-10 -12 0 -24" class="dg34b-back"/>
    <path d="M408 192 q-12 -14 0 -28" class="dg34b-back" opacity=".7"/>
    <path d="M392 194 q-14 -16 0 -32" class="dg34b-back" opacity=".45"/>
  </g>

  <text x="474" y="146" text-anchor="middle" class="dg34b-cap dg34b-soft" fill="var(--dg-good)">softens + spreads</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. CV4 - where the thenar eminences go, and what the CRI does while you hold.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv34-cv4-stillpoint"] = {
  title: "CV4: hand placement and the still point",
  caption:
    "The thenar eminences sit <b>inferior to the inion and posteromedial to the occipitomastoid sutures</b> - inside them. " +
    "On the mastoid processes instead, the same medial compression bilaterally externally rotates the temporals and can cause extreme untoward reactions. " +
    "You encourage extension by medial springing (the head narrows in extension) and then simply resist flexion, holding until the CRI amplitude falls to a " +
    "still point; on release the mechanism resumes with a newfound excursion (Slides 23-24).",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="On the left, a posterior view of the occiput with the inion marked at the top and the two occipitomastoid sutures running down and outward. Two thenar contacts sit inside those sutures with arrows pressing medially toward each other, while the mastoid processes outside the sutures are crossed out as the wrong place. On the right, a trace of the cranial rhythmic impulse shows a large amplitude wave that decays to a flat still point and then resumes with a larger amplitude than before.">
  <style>
    .dg34c-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg34c-sut  { stroke: var(--dg-ink); stroke-width: 2.2; stroke-dasharray: 6 4; }
    .dg34c-hand { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.4; }
    .dg34c-arw  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 3.6; stroke-linecap: round; }
    .dg34c-bad  { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg34c-lbl  { font-size: 11px; font-weight: 700; }
    .dg34c-cap  { font-size: 10px; fill: var(--dg-muted); }
    .dg34c-wave { fill: none; stroke: var(--dg-cool); stroke-width: 2.4; stroke-linejoin: round; }
    .dg34c-axis { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg34c-band { fill: var(--dg-good); }
    .dg34c-scan { stroke: var(--dg-accent); stroke-width: 2; }

    .dg34c-pL { animation: dg34cPL 3.2s ease-in-out infinite; }
    @keyframes dg34cPL { 0%,100% { transform: translateX(0) } 50% { transform: translateX(9px) } }
    .dg34c-pR { animation: dg34cPR 3.2s ease-in-out infinite; }
    @keyframes dg34cPR { 0%,100% { transform: translateX(0) } 50% { transform: translateX(-9px) } }

    .dg34c-run { animation: dg34cRun 6.4s linear infinite; }
    @keyframes dg34cRun {
      0%   { transform: translateX(0);     opacity: 0 }
      5%   { opacity: 1 }
      95%  { transform: translateX(300px); opacity: 1 }
      100% { transform: translateX(300px); opacity: 0 }
    }
    .dg34c-glow { animation: dg34cGlow 6.4s linear infinite; }
    @keyframes dg34cGlow {
      0%,48% { opacity: .1 }
      58%    { opacity: .35 }
      70%    { opacity: .35 }
      80%    { opacity: .1 }
      100%   { opacity: .1 }
    }
  </style>

  <ellipse cx="146" cy="142" rx="104" ry="84" class="dg34c-bone"/>
  <circle cx="146" cy="72" r="5" fill="var(--dg-ink)"/>
  <text x="146" y="52" text-anchor="middle" class="dg34c-lbl">inion</text>
  <line x1="96" y1="98" x2="62" y2="204" class="dg34c-sut"/>
  <line x1="196" y1="98" x2="230" y2="204" class="dg34c-sut"/>
  <text x="146" y="240" text-anchor="middle" class="dg34c-cap">occipital squama, posterior view</text>

  <g class="dg34c-pL">
    <circle cx="110" cy="150" r="18" class="dg34c-hand"/>
    <line x1="118" y1="150" x2="134" y2="150" class="dg34c-arw"/>
    <polygon points="134,143 148,150 134,157" class="dg34c-arw"/>
  </g>
  <g class="dg34c-pR">
    <circle cx="184" cy="150" r="18" class="dg34c-hand"/>
    <line x1="176" y1="150" x2="160" y2="150" class="dg34c-arw"/>
    <polygon points="160,143 146,150 160,157" class="dg34c-arw"/>
  </g>

  <circle cx="48" cy="206" r="13" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="2"/>
  <line x1="41" y1="199" x2="55" y2="213" class="dg34c-bad"/>
  <line x1="55" y1="199" x2="41" y2="213" class="dg34c-bad"/>
  <circle cx="244" cy="206" r="13" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="2"/>
  <line x1="237" y1="199" x2="251" y2="213" class="dg34c-bad"/>
  <line x1="251" y1="199" x2="237" y2="213" class="dg34c-bad"/>
  <text x="146" y="262" text-anchor="middle" class="dg34c-cap" fill="var(--dg-warm)">never on the mastoids: bilateral external rotation of the temporals</text>

  <line x1="320" y1="150" x2="628" y2="150" class="dg34c-axis"/>
  <text x="320" y="46" class="dg34c-lbl">CRI amplitude</text>
  <rect x="478" y="102" width="48" height="96" class="dg34c-band dg34c-glow"/>
  <polyline class="dg34c-wave" points="320,150 332,118 345,150 357,182 370,150 382,120 395,150 407,180 420,150 432,158 445,150 456,157 466,150 474,153 482,150 522,150 534,110 547,150 559,190 572,150 584,106 597,150 609,194 621,150"/>
  <text x="502" y="94" text-anchor="middle" class="dg34c-cap" fill="var(--dg-good)">still point</text>
  <text x="578" y="222" text-anchor="middle" class="dg34c-cap">newfound excursion</text>
  <text x="376" y="222" text-anchor="middle" class="dg34c-cap">hold, amplitude falls</text>
  <g class="dg34c-run"><line x1="322" y1="96" x2="322" y2="204" class="dg34c-scan"/></g>
  <text x="474" y="262" text-anchor="middle" class="dg34c-cap">resist flexion - do not force extension</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. The occiput drives the temporal: midline flexion turns the petrous
//    portion into external rotation, and extension reverses it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv34-temporal-rotation"] = {
  title: "The occiput drives the temporal",
  caption:
    "Superior view, anterior at the top. The midline bones - sphenoid, occiput, ethmoid - go into <b>flexion and extension</b>; " +
    "the paired lateral bones go into <b>external and internal rotation</b> about an axis running along the petrous portion. " +
    "As the occiput comes forward into flexion during inhalation it drives the petrous portion into external rotation, and the superior part of " +
    "the temporal travels anterolaterally in the lecturer's &quot;wobbly wheel&quot; fashion; exhalation reverses it (Slide 28).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Superior view of the skull base with anterior at the top. In the centre a column of midline bones, ethmoid, sphenoid and occiput, rocks forward and back in flexion and extension. On each side a temporal bone is drawn as a wheel with a dashed axis running along its petrous portion toward the midline; the wheels rock in opposite mirror directions, carrying the superior part of each temporal anterolaterally during inhalation and back again during exhalation.">
  <style>
    .dg34d-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg34d-whl  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg34d-axis { stroke: var(--dg-accent); stroke-width: 2.2; stroke-dasharray: 7 5; }
    .dg34d-spk  { stroke: var(--dg-cool); stroke-width: 3.4; stroke-linecap: round; }
    .dg34d-pole { fill: var(--dg-cool); }
    .dg34d-lbl  { font-size: 11px; font-weight: 700; }
    .dg34d-cap  { font-size: 10px; fill: var(--dg-muted); }
    .dg34d-er   { fill: none; stroke: var(--dg-warm); stroke-width: 2.4; }
    .dg34d-erf  { fill: var(--dg-warm); }

    .dg34d-mid { animation: dg34dMid 4.4s ease-in-out infinite; }
    @keyframes dg34dMid { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-9px) } }

    .dg34d-rotL {
      transform-box: fill-box; transform-origin: 50% 50%;
      animation: dg34dRotL 4.4s ease-in-out infinite;
    }
    @keyframes dg34dRotL { 0%,100% { transform: rotate(9deg) } 50% { transform: rotate(-9deg) } }
    .dg34d-rotR {
      transform-box: fill-box; transform-origin: 50% 50%;
      animation: dg34dRotR 4.4s ease-in-out infinite;
    }
    @keyframes dg34dRotR { 0%,100% { transform: rotate(-9deg) } 50% { transform: rotate(9deg) } }
  </style>

  <text x="320" y="20" text-anchor="middle" class="dg34d-cap">superior view &#8212; anterior at the top</text>

  <g class="dg34d-mid">
    <rect x="302" y="32" width="36" height="22" rx="5" class="dg34d-bone"/>
    <rect x="290" y="60" width="60" height="40" rx="7" class="dg34d-bone"/>
    <line x1="294" y1="104" x2="346" y2="104" stroke="var(--dg-warm)" stroke-width="3"/>
    <rect x="286" y="110" width="68" height="94" rx="11" class="dg34d-bone"/>
    <text x="320" y="48" text-anchor="middle" class="dg34d-cap">ethmoid</text>
    <text x="320" y="84" text-anchor="middle" class="dg34d-cap">sphenoid</text>
    <text x="320" y="162" text-anchor="middle" class="dg34d-cap">occiput</text>
  </g>
  <text x="360" y="108" class="dg34d-cap" fill="var(--dg-warm)">SBS</text>

  <g class="dg34d-rotL">
    <circle cx="160" cy="150" r="60" class="dg34d-whl"/>
    <line x1="118" y1="192" x2="202" y2="108" class="dg34d-axis"/>
    <line x1="160" y1="150" x2="124" y2="114" class="dg34d-spk"/>
    <circle cx="124" cy="114" r="7" class="dg34d-pole"/>
  </g>
  <path d="M160 74 a76 76 0 0 0 -60 30" class="dg34d-er"/>
  <polygon points="102,96 96,110 110,110" class="dg34d-erf"/>
  <text x="86" y="128" class="dg34d-cap" fill="var(--dg-warm)">ER</text>
  <text x="160" y="234" text-anchor="middle" class="dg34d-lbl">left temporal</text>

  <g class="dg34d-rotR">
    <circle cx="480" cy="150" r="60" class="dg34d-whl"/>
    <line x1="522" y1="192" x2="438" y2="108" class="dg34d-axis"/>
    <line x1="480" y1="150" x2="516" y2="114" class="dg34d-spk"/>
    <circle cx="516" cy="114" r="7" class="dg34d-pole"/>
  </g>
  <path d="M480 74 a76 76 0 0 1 60 30" class="dg34d-er"/>
  <polygon points="538,96 544,110 530,110" class="dg34d-erf"/>
  <text x="546" y="128" class="dg34d-cap" fill="var(--dg-warm)">ER</text>
  <text x="480" y="234" text-anchor="middle" class="dg34d-lbl">right temporal</text>

  <text x="160" y="250" text-anchor="middle" class="dg34d-cap">axis along the petrous portion</text>
  <text x="480" y="250" text-anchor="middle" class="dg34d-cap">blue pole = superior part</text>
  <text x="320" y="276" text-anchor="middle" class="dg34d-cap">inhalation: midline flexion &#8594; temporal EXTERNAL rotation &#8226; exhalation: extension &#8594; internal rotation</text>
</svg>`,
};

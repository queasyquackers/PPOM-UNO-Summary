/*
 * cv45 - Basic Concepts in Respiratory Physiology (Lecture #45, V. Rajagopalan, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The spirogram: one continuous breathing trace generating four volumes
//    and four capacities, with residual volume marked as unreachable.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv45-volumes-capacities"] = {
  title: "One breath, four volumes, four capacities",
  caption:
    "Watch the pen draw the trace and the figure builds itself: quiet tidal breathing, then one maximal inspiration, then one maximal expiration. " +
    "The <b>four volumes never overlap</b> &#8212; VT 500, IRV 3,000, ERV 1,000 (about a third of IRV: you can breathe in far more than you can breathe out), RV 1,200 mL. " +
    "The <b>capacities are just volumes added together</b>, and the two bracket columns show the same total two different ways: TLC = IC + FRC = VC + RV = 5,700 mL. " +
    "FRC (2,200 mL) is the level the trace returns to after every normal breath &#8212; the relaxed volume where chest wall recoil outward equals lung recoil inward. " +
    "The shaded RV block pulses because it is the one thing a spirometer can never blow out or measure, which is also why FRC and TLC cannot be read off this trace alone. " +
    "Values are this lecture's (Slides 7&#8211;11).",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="A spirogram. A breathing trace runs left to right: several small tidal breaths oscillating around the functional residual capacity level, then a large rise to total lung capacity at maximal inspiration, then a deep fall to the residual volume level at maximal expiration, then a return to tidal breathing. To the right, the same trace is redrawn as a stacked column of four non-overlapping volumes: inspiratory reserve volume three thousand millilitres on top, tidal volume five hundred, expiratory reserve volume one thousand, and residual volume twelve hundred at the bottom, shaded because spirometry cannot measure it. Two bracket columns to the right of the stack show inspiratory capacity three thousand five hundred above functional residual capacity two thousand two hundred, and vital capacity four thousand five hundred above residual volume twelve hundred, each pair summing to a total lung capacity of five thousand seven hundred millilitres.">
  <style>
    .dg45a-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg45a-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg45a-ghost{ fill: none; stroke: var(--dg-line); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    .dg45a-trace{ fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    .dg45a-meas { fill: var(--dg-cool); opacity: .3; stroke: var(--dg-line); stroke-width: 1; }
    .dg45a-rv   { fill: var(--dg-warm); opacity: .55; stroke: var(--dg-line); stroke-width: 1; }
    .dg45a-brk  { stroke: var(--dg-accent); stroke-width: 1.6; fill: none; }
    .dg45a-lbl  { font-size: 10px; font-weight: 700; }
    .dg45a-val  { font-size: 9.5px; }
    .dg45a-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg45a-ax   { font-size: 9px; fill: var(--dg-muted); }
    .dg45a-cur  { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .7; }

    .dg45a-mask { transform-box: view-box; transform: translateX(318px); animation: dg45aWipe 9s linear infinite; }
    .dg45a-pen  { transform-box: view-box; transform: translateX(318px); animation: dg45aWipe 9s linear infinite; }
    @keyframes dg45aWipe { from { transform: translateX(0) } to { transform: translateX(318px) } }

    .dg45a-pulse { animation: dg45aPulse 9s ease-in-out infinite; }
    @keyframes dg45aPulse { 0%, 52% { opacity: .3 } 66%, 84% { opacity: .85 } 100% { opacity: .3 } }
  </style>

  <text x="8" y="14" class="dg45a-ax">volume (mL)</text>

  <rect x="90" y="16" width="330" height="252" rx="6" class="dg45a-plot"/>
  <line x1="90" y1="24"  x2="500" y2="24"  class="dg45a-grid"/>
  <line x1="90" y1="150" x2="500" y2="150" class="dg45a-grid"/>
  <line x1="90" y1="171" x2="500" y2="171" class="dg45a-grid"/>
  <line x1="90" y1="213" x2="500" y2="213" class="dg45a-grid"/>
  <line x1="90" y1="264" x2="500" y2="264" class="dg45a-grid"/>

  <text x="84" y="28"  class="dg45a-ax" text-anchor="end">5,700</text>
  <text x="84" y="154" class="dg45a-ax" text-anchor="end">2,700</text>
  <text x="84" y="176" class="dg45a-ax" text-anchor="end">2,200</text>
  <text x="84" y="217" class="dg45a-ax" text-anchor="end">1,200</text>
  <text x="84" y="268" class="dg45a-ax" text-anchor="end">0</text>

  <path class="dg45a-ghost" d="M96 171 Q108 147 120 150 Q132 153 144 171 Q156 147 168 150 Q180 153 192 171 C206 168 224 44 244 24 L266 24 C284 32 296 196 318 213 L338 213 C352 211 360 178 374 171 Q386 149 396 151 Q406 155 414 171"/>
  <clipPath id="wipeCv45a" clipPathUnits="userSpaceOnUse">
    <rect class="dg45a-mask" x="-234" y="14" width="330" height="256"/>
  </clipPath>
  <g clip-path="url(#wipeCv45a)">
    <path class="dg45a-trace" d="M96 171 Q108 147 120 150 Q132 153 144 171 Q156 147 168 150 Q180 153 192 171 C206 168 224 44 244 24 L266 24 C284 32 296 196 318 213 L338 213 C352 211 360 178 374 171 Q386 149 396 151 Q406 155 414 171"/>
  </g>

  <text x="98" y="40"  class="dg45a-tiny">maximal inspiration = TLC</text>
  <text x="98" y="188" class="dg45a-tiny">quiet tidal breathing, back to FRC each time</text>
  <text x="98" y="246" class="dg45a-tiny">maximal expiration &#8212; RV stays behind</text>

  <rect x="436" y="24"  width="64" height="126" class="dg45a-meas"/>
  <rect x="436" y="150" width="64" height="21"  class="dg45a-meas"/>
  <rect x="436" y="171" width="64" height="42"  class="dg45a-meas"/>
  <rect x="436" y="213" width="64" height="51"  class="dg45a-rv dg45a-pulse"/>

  <text x="468" y="82"  class="dg45a-lbl" text-anchor="middle">IRV</text>
  <text x="468" y="96"  class="dg45a-val" text-anchor="middle">3,000</text>
  <text x="468" y="165" class="dg45a-val" text-anchor="middle">TV 500</text>
  <text x="468" y="197" class="dg45a-val" text-anchor="middle">ERV 1,000</text>
  <text x="468" y="236" class="dg45a-lbl" text-anchor="middle">RV</text>
  <text x="468" y="250" class="dg45a-val" text-anchor="middle">1,200</text>

  <path class="dg45a-brk" d="M510 24 H516 V171 H510"/>
  <path class="dg45a-brk" d="M510 171 H516 V264 H510"/>
  <text x="522" y="90"  class="dg45a-lbl">IC 3,500</text>
  <text x="522" y="102" class="dg45a-tiny">VT + IRV</text>
  <text x="522" y="212" class="dg45a-lbl">FRC 2,200</text>
  <text x="522" y="224" class="dg45a-tiny">RV + ERV</text>

  <path class="dg45a-brk" d="M590 24 H596 V213 H590"/>
  <path class="dg45a-brk" d="M590 213 H596 V264 H590"/>
  <text x="602" y="108" class="dg45a-lbl">VC 4,500</text>
  <text x="602" y="120" class="dg45a-tiny">= FVC</text>
  <text x="602" y="238" class="dg45a-lbl">RV 1,200</text>

  <text x="90"  y="286" class="dg45a-val">TLC 5,700 = IC + FRC = VC + RV</text>
  <text x="436" y="286" class="dg45a-tiny">spirometry can never reach the shaded RV</text>

  <line class="dg45a-cur dg45a-pen" x1="96" y1="16" x2="96" y2="268"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Forced expiration: the first second separates obstructive from restrictive.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv45-fev1-obstructive-restrictive"] = {
  title: "The first second tells them apart",
  caption:
    "Three patients blow out as hard and fast as they can; the cursor sweeps six seconds of forced expiration and the curves are drawn in real time. " +
    "At the <b>1-second mark</b> the FEV1 values appear: normal 4.0 L, restrictive (fibrosis) 2.8 L, obstructive (COPD/asthma) 1.3 L. " +
    "Notice the trap the lecturer builds: the two diseased patients finish at the <b>same FVC of 3.1 L</b>, so FVC alone cannot separate them &#8212; " +
    "only the ratio does. Obstruction drops FEV1 far more than FVC, so FEV1/FVC falls; fibrosis drops FVC more than FEV1 (stiff lungs recoil hard and empty fast), so the ratio is normal or high. " +
    "Percentages shown are computed from this lecture's stated FEV1 and FVC values; the lecturer's normal reference is roughly 70&#8211;80% (Slides 20, 25&#8211;26).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A volume against time plot of forced expiration for three patients over six seconds, with a vertical line marking one second. The normal curve rises fastest, reaching four litres at one second and plateauing at a forced vital capacity of five litres. The restrictive fibrosis curve reaches two point eight litres at one second and plateaus early at three point one litres. The obstructive COPD curve reaches only one point three litres at one second and creeps slowly up to the same three point one litres by six seconds. A table on the right lists forced expiratory volume in one second, forced vital capacity and their ratio for each: normal four, five and eighty percent; COPD one point three, three point one and forty two percent; fibrosis two point eight, three point one and ninety percent, and notes that residual volume and functional residual capacity rise in COPD and fall in fibrosis.">
  <style>
    .dg45b-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg45b-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg45b-sec  { stroke: var(--dg-accent); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg45b-norm { fill: none; stroke: var(--dg-good); stroke-width: 3; stroke-linecap: round; }
    .dg45b-obs  { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg45b-res  { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg45b-fnorm{ fill: var(--dg-good); }
    .dg45b-fobs { fill: var(--dg-warm); }
    .dg45b-fres { fill: var(--dg-cool); }
    .dg45b-lbl  { font-size: 10px; font-weight: 700; }
    .dg45b-val  { font-size: 9.5px; font-weight: 700; }
    .dg45b-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg45b-ax   { font-size: 9px; fill: var(--dg-muted); }
    .dg45b-row  { stroke: var(--dg-line); stroke-width: 1; }
    .dg45b-cur  { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .7; }

    .dg45b-mask { transform-box: view-box; transform: translateX(336px); animation: dg45bWipe 7.5s linear infinite; }
    .dg45b-pen  { transform-box: view-box; transform: translateX(336px); animation: dg45bWipe 7.5s linear infinite; }
    @keyframes dg45bWipe { from { transform: translateX(0) } to { transform: translateX(336px) } }

    .dg45b-pop { opacity: 1; animation: dg45bPop 7.5s linear infinite; }
    @keyframes dg45bPop { 0%, 14% { opacity: 0 } 18%, 100% { opacity: 1 } }
  </style>

  <text x="8" y="14" class="dg45b-ax">volume expired (L)</text>

  <rect x="76" y="30" width="344" height="228" rx="6" class="dg45b-plot"/>

  <rect x="86" y="38" width="10" height="10" rx="2" class="dg45b-fnorm"/>
  <text x="100" y="47" class="dg45b-tiny">normal</text>
  <rect x="146" y="38" width="10" height="10" rx="2" class="dg45b-fobs"/>
  <text x="160" y="47" class="dg45b-tiny">COPD / asthma (obstructive)</text>
  <rect x="288" y="38" width="10" height="10" rx="2" class="dg45b-fres"/>
  <text x="302" y="47" class="dg45b-tiny">fibrosis (restrictive)</text>

  <line x1="76" y1="66"  x2="420" y2="66"  class="dg45b-grid"/>
  <line x1="76" y1="103" x2="420" y2="103" class="dg45b-grid"/>
  <line x1="76" y1="140" x2="420" y2="140" class="dg45b-grid"/>
  <line x1="76" y1="177" x2="420" y2="177" class="dg45b-grid"/>
  <line x1="76" y1="213" x2="420" y2="213" class="dg45b-grid"/>
  <line x1="76" y1="250" x2="420" y2="250" class="dg45b-row"/>

  <text x="72" y="70"  class="dg45b-ax" text-anchor="end">5</text>
  <text x="72" y="107" class="dg45b-ax" text-anchor="end">4</text>
  <text x="72" y="144" class="dg45b-ax" text-anchor="end">3</text>
  <text x="72" y="181" class="dg45b-ax" text-anchor="end">2</text>
  <text x="72" y="217" class="dg45b-ax" text-anchor="end">1</text>
  <text x="72" y="254" class="dg45b-ax" text-anchor="end">0</text>

  <line x1="136" y1="34" x2="136" y2="258" class="dg45b-sec"/>
  <text x="140" y="272" class="dg45b-lbl" fill="var(--dg-accent)">1 s</text>
  <text x="192" y="272" class="dg45b-ax" text-anchor="middle">2</text>
  <text x="248" y="272" class="dg45b-ax" text-anchor="middle">3</text>
  <text x="304" y="272" class="dg45b-ax" text-anchor="middle">4</text>
  <text x="360" y="272" class="dg45b-ax" text-anchor="middle">5</text>
  <text x="416" y="272" class="dg45b-ax" text-anchor="middle">6</text>
  <text x="248" y="288" class="dg45b-tiny" text-anchor="middle">time from start of forced expiration (seconds)</text>

  <clipPath id="wipeCv45b" clipPathUnits="userSpaceOnUse">
    <rect class="dg45b-mask" x="-260" y="28" width="340" height="232"/>
  </clipPath>
  <g clip-path="url(#wipeCv45b)">
    <path class="dg45b-norm" d="M80 250 C98 196 116 128 136 103 C168 76 208 68 248 66 L416 66"/>
    <path class="dg45b-res"  d="M80 250 C96 212 118 160 136 147 C154 140 172 136 192 136 L416 136"/>
    <path class="dg45b-obs"  d="M80 250 C94 234 118 214 136 202 C208 176 316 148 416 136"/>
  </g>

  <g class="dg45b-pop">
    <circle cx="136" cy="103" r="4.5" class="dg45b-fnorm"/>
    <circle cx="136" cy="147" r="4.5" class="dg45b-fres"/>
    <circle cx="136" cy="202" r="4.5" class="dg45b-fobs"/>
    <text x="130" y="99"  class="dg45b-val" text-anchor="end" fill="var(--dg-good)">4.0</text>
    <text x="130" y="151" class="dg45b-val" text-anchor="end" fill="var(--dg-cool)">2.8</text>
    <text x="130" y="206" class="dg45b-val" text-anchor="end" fill="var(--dg-warm)">1.3</text>
  </g>

  <text x="352" y="60"  class="dg45b-val" fill="var(--dg-good)">FVC 5.0</text>
  <text x="300" y="130" class="dg45b-val" fill="var(--dg-cool)">FVC 3.1 &#8212; both</text>

  <text x="440" y="46" class="dg45b-lbl">Spirometry pattern</text>
  <line x1="440" y1="54" x2="632" y2="54" class="dg45b-row"/>
  <text x="446" y="70" class="dg45b-tiny">patient</text>
  <text x="536" y="70" class="dg45b-tiny" text-anchor="middle">FEV1</text>
  <text x="576" y="70" class="dg45b-tiny" text-anchor="middle">FVC</text>
  <text x="616" y="70" class="dg45b-tiny" text-anchor="middle">ratio</text>
  <line x1="440" y1="76" x2="632" y2="76" class="dg45b-row"/>

  <text x="446" y="94" class="dg45b-val" fill="var(--dg-good)">normal</text>
  <text x="536" y="94" class="dg45b-val" text-anchor="middle">4.0</text>
  <text x="576" y="94" class="dg45b-val" text-anchor="middle">5.0</text>
  <text x="616" y="94" class="dg45b-val" text-anchor="middle">80%</text>

  <text x="446" y="118" class="dg45b-val" fill="var(--dg-warm)">COPD</text>
  <text x="536" y="118" class="dg45b-val" text-anchor="middle">1.3</text>
  <text x="576" y="118" class="dg45b-val" text-anchor="middle">3.1</text>
  <text x="616" y="118" class="dg45b-val" text-anchor="middle">42%</text>

  <text x="446" y="142" class="dg45b-val" fill="var(--dg-cool)">fibrosis</text>
  <text x="536" y="142" class="dg45b-val" text-anchor="middle">2.8</text>
  <text x="576" y="142" class="dg45b-val" text-anchor="middle">3.1</text>
  <text x="616" y="142" class="dg45b-val" text-anchor="middle">90%</text>
  <line x1="440" y1="154" x2="632" y2="154" class="dg45b-row"/>

  <text x="440" y="176" class="dg45b-tiny">FEV1 falls MORE than FVC &#8594; ratio down</text>
  <text x="440" y="190" class="dg45b-tiny">FVC falls MORE than FEV1 &#8594; ratio up</text>

  <text x="440" y="216" class="dg45b-lbl">RV and FRC move too</text>
  <text x="440" y="232" class="dg45b-val" fill="var(--dg-warm)">COPD / asthma: RV &#8593; FRC &#8593;</text>
  <text x="440" y="248" class="dg45b-val" fill="var(--dg-cool)">fibrosis: RV &#8595; FRC &#8595;</text>
  <text x="440" y="266" class="dg45b-tiny">air trapping fills the lung;</text>
  <text x="440" y="278" class="dg45b-tiny">stiff lungs cannot hold as much</text>

  <line class="dg45b-cur dg45b-pen" x1="80" y1="30" x2="80" y2="258"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Dead space: air that moves but never exchanges.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv45-dead-space"] = {
  title: "Dead space: ventilation without exchange",
  caption:
    "The air packets shuttle in and out of the conducting airways and never do anything &#8212; that shaded corridor from nose or mouth through pharynx and trachea down to the terminal bronchioles is the " +
    "<b>anatomic dead space, about 150 mL</b>, and it has no alveoli, so it cannot exchange gas no matter how well it is ventilated. " +
    "Past that boundary the two alveolar units look identical and are ventilated identically, but only the top one has blood moving past it, so only the top one exchanges O&#8322; and CO&#8322;. " +
    "The bottom unit is <b>ventilated but not perfused</b> &#8212; alveolar dead space. Together they are the physiologic (total) dead space, or wasted ventilation. " +
    "Because dead-space gas sits closest to the mouth, it is also the gas expired first, which is exactly what Fowler's method exploits (Slides 29&#8211;33).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A schematic airway. On the left a shaded corridor holds the conducting airways from mouth and nose through the trachea and bronchi to the terminal bronchioles, labelled anatomic dead space about one hundred and fifty millilitres, with air packets sliding in and back out again without changing. A dashed vertical line marks the terminal bronchioles. To the right of that line are two identical alveolar clusters. The upper cluster sits on a capillary with blood cells flowing through it and oxygen and carbon dioxide crossing between alveolus and blood, labelled ventilated and perfused, gas exchange occurs. The lower cluster sits on an empty dashed capillary with no flow, labelled ventilated but not perfused, alveolar dead space. Text beneath gives the two measurement methods: Fowler's nitrogen method measures anatomic dead space only, and the Bohr Enghoff carbon dioxide equation measures anatomic plus alveolar, the physiologic dead space.">
  <style>
    .dg45c-zone { fill: var(--dg-warm); opacity: .13; }
    .dg45c-tube { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg45c-br   { fill: none; stroke: var(--dg-ink); stroke-width: 2; opacity: .9; }
    .dg45c-brf  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg45c-alv  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg45c-cap  { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 1.6; }
    .dg45c-capx { fill: none; stroke: var(--dg-line); stroke-width: 1.6; stroke-dasharray: 5 4; }
    .dg45c-bnd  { stroke: var(--dg-accent); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg45c-air  { fill: var(--dg-accent); }
    .dg45c-rbc  { fill: var(--dg-warm); }
    .dg45c-o2   { fill: var(--dg-cool); }
    .dg45c-co2  { fill: var(--dg-muted); }
    .dg45c-lbl  { font-size: 10px; font-weight: 700; }
    .dg45c-val  { font-size: 9.5px; }
    .dg45c-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg45c-rule { stroke: var(--dg-line); stroke-width: 1; }
    .dg45c-no   { stroke: var(--dg-muted); stroke-width: 2; }

    .dg45c-tide { transform-box: view-box; animation: dg45cTide 8s ease-in-out infinite; }
    @keyframes dg45cTide {
      0%   { transform: translateX(0) }
      35%  { transform: translateX(216px) }
      45%  { transform: translateX(216px) }
      80%  { transform: translateX(0) }
      100% { transform: translateX(0) }
    }
    .dg45c-flow { transform-box: view-box; animation: dg45cFlow 3.2s linear infinite; }
    @keyframes dg45cFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(232px); opacity: 0 }
    }
    .dg45c-down { transform-box: view-box; animation: dg45cDown 8s ease-in-out infinite; }
    @keyframes dg45cDown {
      0%, 34% { transform: translateY(0);   opacity: 0 }
      42%     { transform: translateY(9px); opacity: 1 }
      56%     { transform: translateY(20px);opacity: 1 }
      62%, 100% { transform: translateY(20px); opacity: 0 }
    }
    .dg45c-up { transform-box: view-box; animation: dg45cUp 8s ease-in-out infinite; }
    @keyframes dg45cUp {
      0%, 34% { transform: translateY(0);    opacity: 0 }
      42%     { transform: translateY(-9px); opacity: 1 }
      56%     { transform: translateY(-20px);opacity: 1 }
      62%, 100% { transform: translateY(-20px); opacity: 0 }
    }
    .dg45c-d1 { animation-delay: .5s }
    .dg45c-d2 { animation-delay: 1s }
    .dg45c-d3 { animation-delay: 1.6s }
  </style>

  <rect x="20" y="60" width="272" height="146" rx="10" class="dg45c-zone"/>

  <text x="20" y="40" class="dg45c-val" font-weight="700">CONDUCTING ZONE</text>
  <text x="20" y="53" class="dg45c-tiny">nose / mouth &#8594; pharynx &#8594; trachea &#8594; bronchi &#8594; bronchioles</text>

  <rect x="30" y="104" width="152" height="42" rx="14" class="dg45c-tube"/>
  <path class="dg45c-br" d="M182 116 C220 108 250 96 286 88" stroke-width="15" stroke-linecap="round" opacity=".35"/>
  <path class="dg45c-br" d="M182 134 C220 142 250 160 286 172" stroke-width="15" stroke-linecap="round" opacity=".35"/>

  <g class="dg45c-air dg45c-tide">
    <circle cx="48" cy="118" r="5"/>
    <circle cx="48" cy="132" r="5"/>
    <circle cx="66" cy="125" r="5"/>
  </g>

  <text x="26" y="184" class="dg45c-lbl">ANATOMIC DEAD SPACE &#8776; 150 mL</text>
  <text x="26" y="197" class="dg45c-tiny">no alveoli here &#8594; ventilated, never exchanges</text>

  <line x1="292" y1="34" x2="292" y2="212" class="dg45c-bnd"/>
  <text x="292" y="28" class="dg45c-tiny" text-anchor="middle">terminal bronchioles</text>

  <circle cx="320" cy="74" r="15" class="dg45c-alv"/>
  <circle cx="348" cy="62" r="17" class="dg45c-alv"/>
  <circle cx="345" cy="90" r="14" class="dg45c-alv"/>
  <rect x="308" y="102" width="252" height="15" rx="7.5" class="dg45c-cap"/>
  <g class="dg45c-rbc dg45c-flow"><circle cx="318" cy="109" r="4.5"/></g>
  <g class="dg45c-rbc dg45c-flow dg45c-d1"><circle cx="318" cy="109" r="4.5"/></g>
  <g class="dg45c-rbc dg45c-flow dg45c-d2"><circle cx="318" cy="109" r="4.5"/></g>
  <g class="dg45c-o2 dg45c-down"><circle cx="338" cy="96" r="3.5"/></g>
  <g class="dg45c-co2 dg45c-up"><circle cx="352" cy="112" r="3.5"/></g>
  <text x="376" y="66" class="dg45c-lbl">VENTILATED + PERFUSED</text>
  <text x="376" y="79" class="dg45c-tiny">blood is moving past &#8594; gas exchange happens</text>
  <text x="566" y="112" class="dg45c-tiny">flow &#8594;</text>

  <circle cx="320" cy="160" r="15" class="dg45c-alv"/>
  <circle cx="348" cy="148" r="17" class="dg45c-alv"/>
  <circle cx="345" cy="176" r="14" class="dg45c-alv"/>
  <rect x="308" y="188" width="252" height="15" rx="7.5" class="dg45c-capx"/>
  <line x1="428" y1="182" x2="446" y2="209" class="dg45c-no"/>
  <line x1="446" y1="182" x2="428" y2="209" class="dg45c-no"/>
  <text x="376" y="152" class="dg45c-lbl">VENTILATED, NOT PERFUSED</text>
  <text x="376" y="165" class="dg45c-tiny">same air arrives, no blood &#8594; ALVEOLAR DEAD SPACE</text>
  <text x="460" y="199" class="dg45c-tiny">no flow</text>

  <line x1="20" y1="222" x2="620" y2="222" class="dg45c-rule"/>
  <text x="20" y="240" class="dg45c-lbl">Physiologic (total) dead space = anatomic + alveolar = wasted ventilation</text>
  <text x="20" y="260" class="dg45c-val">Fowler (N&#8322; after one breath of 100% O&#8322;) &#8212; ANATOMIC only: VD = gray &#215; VE / (pink + gray) &#8594; 30 &#215; 500 / 100 = 150 mL</text>
  <text x="20" y="278" class="dg45c-val">Bohr-Enghoff (CO&#8322;) &#8212; anatomic + alveolar: VD/VT = (PACO&#8322; &#8722; PECO&#8322;) / PACO&#8322;, arterial PaCO&#8322; substituted for PACO&#8322;</text>
  <text x="20" y="294" class="dg45c-tiny">Fowler works because dead-space gas is nearest the mouth and is therefore expired first &#8212; the early expired air contains no nitrogen.</text>
</svg>`,
};

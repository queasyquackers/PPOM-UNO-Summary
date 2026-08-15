/*
 * cv26 - Physiological Basis of the Basic ECG: Leads, Vectors, and Intervals
 * (Lecture #26, E. Tale D.O. / T. Cohen M.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The conduction chain mapped, in time order, onto one ECG complex.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv26-conduction-to-complex"] = {
  title: "One pathway, one complex",
  caption:
    "A sweep bar moves left to right through the conduction chain while the same horizontal position on the tracing below lights up, " +
    "because on an ECG horizontal position IS time. " +
    "SA node firing plus atrial spread produces the <b>P wave</b>; the slow AV node is electrically quiet on the surface and shows up as the flat <b>PR segment</b>; " +
    "His, bundle branches and Purkinje fibers depolarize the ventricles as the <b>QRS</b>; the depolarized, contracting ventricle gives the isoelectric <b>ST segment</b>, " +
    "and repolarization gives the <b>T wave</b>. Note the complex is NOT an action potential (Slide 6) - it is the summed surface signal of the whole chamber.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A chain of six boxes reading SA node, atria, AV node, His and bundle branches, Purkinje fibers, and ventricles, drawn left to right above an ECG complex. Brackets link the SA node and atria boxes to the P wave, the AV node box to the flat PR segment, the His and Purkinje boxes to the QRS complex, and the ventricles box to the ST segment and T wave. A vertical bar sweeps across both rows together.">
  <style>
    .dg26a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg26a-txt   { font-size: 11px; font-weight: 700; text-anchor: middle; }
    .dg26a-sub   { font-size: 10.5px; fill: var(--dg-muted); text-anchor: middle; }
    .dg26a-hdr   { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg26a-brk   { stroke: var(--dg-line); stroke-width: 1.4; fill: none; }
    .dg26a-trace { fill: none; stroke: var(--dg-ink); stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; }
    .dg26a-flow  { stroke: var(--dg-accent); stroke-width: 2; fill: none; }
    .dg26a-tip   { fill: var(--dg-accent); }
    .dg26a-mark  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); text-anchor: middle; }

    .dg26a-sweep { stroke: var(--dg-accent); stroke-width: 2; opacity: .55;
                   animation: dg26aSweep 7s linear infinite; }
    @keyframes dg26aSweep { from { transform: translateX(0) } to { transform: translateX(604px) } }

    .dg26a-p1 { animation: dg26aP1 7s linear infinite; }
    .dg26a-p2 { animation: dg26aP2 7s linear infinite; }
    .dg26a-p3 { animation: dg26aP3 7s linear infinite; }
    .dg26a-p4 { animation: dg26aP4 7s linear infinite; }
    @keyframes dg26aP1 { 0%   { opacity: .3 } 6%, 26% { opacity: 1 } 34%, 100% { opacity: .3 } }
    @keyframes dg26aP2 { 0%, 30% { opacity: .3 } 36%, 46% { opacity: 1 } 54%, 100% { opacity: .3 } }
    @keyframes dg26aP3 { 0%, 50% { opacity: .3 } 56%, 72% { opacity: 1 } 80%, 100% { opacity: .3 } }
    @keyframes dg26aP4 { 0%, 76% { opacity: .3 } 82%, 96% { opacity: 1 } 100% { opacity: .3 } }
  </style>

  <text x="16" y="22" class="dg26a-hdr">Conduction chain</text>
  <text x="470" y="22" class="dg26a-sub">time runs left to right</text>

  <g class="dg26a-p1">
    <rect x="16"  y="34" width="92" height="38" rx="9" class="dg26a-box"/>
    <text x="62"  y="52" class="dg26a-txt">SA node</text>
    <text x="62"  y="65" class="dg26a-sub">60-100/min</text>
    <rect x="118" y="34" width="92" height="38" rx="9" class="dg26a-box"/>
    <text x="164" y="58" class="dg26a-txt">Atria</text>
  </g>
  <g class="dg26a-p2">
    <rect x="220" y="34" width="92" height="38" rx="9" class="dg26a-box"/>
    <text x="266" y="52" class="dg26a-txt">AV node</text>
    <text x="266" y="65" class="dg26a-sub">40-60/min, slow</text>
  </g>
  <g class="dg26a-p3">
    <rect x="322" y="34" width="92" height="38" rx="9" class="dg26a-box"/>
    <text x="368" y="52" class="dg26a-txt">His / bundles</text>
    <text x="368" y="65" class="dg26a-sub">R + L, 2 fascicles</text>
    <rect x="424" y="34" width="92" height="38" rx="9" class="dg26a-box"/>
    <text x="470" y="58" class="dg26a-txt">Purkinje</text>
  </g>
  <g class="dg26a-p4">
    <rect x="526" y="34" width="94" height="38" rx="9" class="dg26a-box"/>
    <text x="573" y="52" class="dg26a-txt">Ventricles</text>
    <text x="573" y="65" class="dg26a-sub">contract, recover</text>
  </g>

  <g class="dg26a-flow">
    <line x1="108" y1="53" x2="114" y2="53"/>
    <line x1="210" y1="53" x2="216" y2="53"/>
    <line x1="312" y1="53" x2="318" y2="53"/>
    <line x1="414" y1="53" x2="420" y2="53"/>
    <line x1="516" y1="53" x2="522" y2="53"/>
  </g>

  <path class="dg26a-brk dg26a-p1" d="M18 96 L18 106 L208 106 L208 96"/>
  <text x="113" y="122" class="dg26a-mark dg26a-p1">P wave</text>
  <path class="dg26a-brk dg26a-p2" d="M222 96 L222 106 L310 106 L310 96"/>
  <text x="266" y="122" class="dg26a-mark dg26a-p2">PR segment</text>
  <path class="dg26a-brk dg26a-p3" d="M324 96 L324 106 L514 106 L514 96"/>
  <text x="419" y="122" class="dg26a-mark dg26a-p3">QRS</text>
  <path class="dg26a-brk dg26a-p4" d="M528 96 L528 106 L618 106 L618 96"/>
  <text x="573" y="122" class="dg26a-mark dg26a-p4">ST, then T</text>

  <line x1="16" y1="252" x2="620" y2="252" stroke="var(--dg-line)" stroke-width="1" stroke-dasharray="4 4"/>

  <path class="dg26a-trace dg26a-p1" d="M18 252 L58 252 Q113 214 168 252 L208 252"/>
  <path class="dg26a-trace dg26a-p2" d="M208 252 L310 252"/>
  <path class="dg26a-trace dg26a-p3" d="M310 252 L336 252 L348 268 L366 176 L384 276 L398 252 L514 252"/>
  <path class="dg26a-trace dg26a-p4" d="M514 252 L534 252 Q573 214 610 252 L620 252"/>

  <text x="113" y="214" class="dg26a-sub dg26a-p1">atrial depolarization</text>
  <text x="266" y="242" class="dg26a-sub dg26a-p2">120-200 ms from P start</text>
  <text x="419" y="168" class="dg26a-sub dg26a-p3">&#60;120 ms</text>
  <text x="573" y="214" class="dg26a-sub dg26a-p4">repolarization</text>

  <line x1="16" y1="30" x2="16" y2="288" class="dg26a-sweep"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Voltage direction: toward the lead is positive, away is negative.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv26-vector-polarity"] = {
  title: "Toward = up, away = down",
  caption:
    "The single rule the lecturer repeats twice: <b>voltage is positive when depolarization travels toward the lead and negative when it travels away from it</b> (Slide 22). " +
    "Each lane shows a wavefront crossing a strip of myocardium and the QRS that the electrode on the right records. " +
    "Toward the lead gives R taller than S; away gives S deeper than R; a wavefront moving perpendicular to the lead gives an equiphasic (biphasic) complex. " +
    "This is exactly why R-wave progression works: the R grows from V1 to V3 as the leads sit more over the direction of ventricular depolarization, with the equiphasic transition normally between V3 and V4.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three lanes. In the top lane a depolarization wavefront moves rightward toward an electrode and the recorded QRS points upward. In the middle lane the wavefront moves leftward away from the electrode and the QRS points downward. In the bottom lane the wavefront moves perpendicular to the electrode and the QRS is equally up and down.">
  <style>
    .dg26b-strip { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg26b-front { fill: var(--dg-cool); }
    .dg26b-arrow { stroke: var(--dg-accent); stroke-width: 2.4; fill: none; }
    .dg26b-head  { fill: var(--dg-accent); }
    .dg26b-lead  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg26b-plus  { font-size: 13px; font-weight: 700; text-anchor: middle; }
    .dg26b-cap   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg26b-verd  { font-size: 12px; font-weight: 700; }
    .dg26b-note  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg26b-base  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg26b-trace { fill: none; stroke-width: 2.8; stroke-linejoin: round; stroke-linecap: round;
                   stroke-dasharray: 260; stroke-dashoffset: 0; }
    .dg26b-up    { stroke: var(--dg-good); animation: dg26bDraw 3.4s linear infinite; }
    .dg26b-dn    { stroke: var(--dg-warm); animation: dg26bDraw 3.4s linear infinite; }
    .dg26b-eq    { stroke: var(--dg-ink);  animation: dg26bDraw 3.4s linear infinite; }
    @keyframes dg26bDraw { 0% { stroke-dashoffset: 260 } 55%, 100% { stroke-dashoffset: 0 } }

    .dg26b-w1 { animation: dg26bRight 3.4s linear infinite; }
    .dg26b-w2 { animation: dg26bLeft  3.4s linear infinite; }
    .dg26b-w3 { animation: dg26bDown  3.4s linear infinite; }
    @keyframes dg26bRight { 0% { transform: translateX(0) }    100% { transform: translateX(186px) } }
    @keyframes dg26bLeft  { 0% { transform: translateX(186px) } 100% { transform: translateX(0) } }
    @keyframes dg26bDown  { 0% { transform: translateY(-16px) } 100% { transform: translateY(16px) } }
  </style>

  <rect x="24" y="34" width="212" height="42" rx="9" class="dg26b-strip"/>
  <rect x="30" y="38" width="13" height="34" rx="4" class="dg26b-front dg26b-w1"/>
  <line x1="120" y1="22" x2="196" y2="22" class="dg26b-arrow"/>
  <polygon points="196,15 216,22 196,29" class="dg26b-head"/>
  <circle cx="266" cy="55" r="12" class="dg26b-lead"/>
  <text x="266" y="60" class="dg26b-plus">+</text>
  <text x="266" y="86" class="dg26b-cap" text-anchor="middle">lead</text>
  <line x1="300" y1="55" x2="470" y2="55" class="dg26b-base"/>
  <path class="dg26b-trace dg26b-up" d="M300 55 L332 55 L342 66 L358 16 L374 72 L386 55 L470 55"/>
  <text x="486" y="50" class="dg26b-verd">Toward the lead</text>
  <text x="486" y="68" class="dg26b-note">positive: R taller than S</text>

  <rect x="24" y="124" width="212" height="42" rx="9" class="dg26b-strip"/>
  <rect x="30" y="128" width="13" height="34" rx="4" class="dg26b-front dg26b-w2"/>
  <line x1="196" y1="112" x2="120" y2="112" class="dg26b-arrow"/>
  <polygon points="120,105 100,112 120,119" class="dg26b-head"/>
  <circle cx="266" cy="145" r="12" class="dg26b-lead"/>
  <text x="266" y="150" class="dg26b-plus">+</text>
  <text x="266" y="176" class="dg26b-cap" text-anchor="middle">lead</text>
  <line x1="300" y1="145" x2="470" y2="145" class="dg26b-base"/>
  <path class="dg26b-trace dg26b-dn" d="M300 145 L332 145 L342 134 L354 145 L368 196 L380 145 L470 145"/>
  <text x="486" y="140" class="dg26b-verd">Away from the lead</text>
  <text x="486" y="158" class="dg26b-note">negative: S deeper than R</text>

  <rect x="24" y="214" width="212" height="42" rx="9" class="dg26b-strip"/>
  <rect x="60" y="229" width="46" height="12" rx="4" class="dg26b-front dg26b-w3"/>
  <line x1="200" y1="198" x2="200" y2="274" class="dg26b-arrow"/>
  <polygon points="193,198 200,184 207,198" class="dg26b-head"/>
  <polygon points="193,274 200,288 207,274" class="dg26b-head"/>
  <circle cx="266" cy="235" r="12" class="dg26b-lead"/>
  <text x="266" y="240" class="dg26b-plus">+</text>
  <text x="266" y="266" class="dg26b-cap" text-anchor="middle">lead</text>
  <line x1="300" y1="235" x2="470" y2="235" class="dg26b-base"/>
  <path class="dg26b-trace dg26b-eq" d="M300 235 L330 235 L342 200 L354 235 L368 270 L380 235 L470 235"/>
  <text x="486" y="230" class="dg26b-verd">Perpendicular</text>
  <text x="486" y="248" class="dg26b-note">equiphasic / biphasic</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Axis: leads I and aVF are perpendicular, so their polarity boxes the axis.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv26-axis-quadrants"] = {
  title: "Finding the axis with I and aVF",
  caption:
    "Einthoven's triangle redrawn as a compass. Lead I is set at 0 degrees, counterclockwise angles are negative and clockwise angles positive (Slide 29). " +
    "Leads I and aVF are used together because they are perpendicular: if the QRS is upright in both, the mean vector must lie between 0 and +90 degrees, which is a normal non-deviated axis (Slide 30). " +
    "The shaded wedge is this lecture's stated normal range, <b>-30 to +60 degrees</b> - note that is narrower than the -30 to +90 many books quote, so use the lecturer's numbers. " +
    "The sweeping arrow shows the mean vector staying inside that wedge, pointing down and to the left toward the thicker left ventricle.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A compass with lead I drawn horizontally at zero degrees and lead aVF drawn vertically at plus ninety degrees. A shaded wedge from minus thirty to plus sixty degrees marks the normal axis, and an arrow sweeps back and forth inside it. On the right, upright QRS complexes in lead I and lead aVF lead to the conclusion that the axis is normal.">
  <style>
    .dg26c-ring  { fill: none; stroke: var(--dg-line); stroke-width: 1.4; }
    .dg26c-axis  { stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg26c-wedge { fill: var(--dg-good); opacity: .18; }
    .dg26c-lbl   { font-size: 11.5px; font-weight: 700; }
    .dg26c-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg26c-good  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg26c-warn  { font-size: 10.5px; fill: var(--dg-warm); }
    .dg26c-base  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg26c-trace { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; }
    .dg26c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg26c-vecl  { stroke: var(--dg-accent); stroke-width: 4.5; stroke-linecap: round; }
    .dg26c-vech  { fill: var(--dg-accent); }

    .dg26c-vec {
      transform: translate(160px, 150px) rotate(15deg);
      animation: dg26cSweep 6s ease-in-out infinite;
    }
    @keyframes dg26cSweep {
      0%, 100% { transform: translate(160px, 150px) rotate(-30deg) }
      50%      { transform: translate(160px, 150px) rotate(60deg) }
    }
  </style>

  <circle cx="160" cy="150" r="110" class="dg26c-ring"/>
  <path class="dg26c-wedge" d="M160 150 L255 95 A110 110 0 0 1 215 245 Z"/>
  <line x1="44" y1="150" x2="276" y2="150" class="dg26c-axis"/>
  <line x1="160" y1="34" x2="160" y2="266" class="dg26c-axis"/>

  <text x="282" y="146" class="dg26c-lbl">I</text>
  <text x="282" y="160" class="dg26c-sub">0&#176;</text>
  <text x="160" y="286" class="dg26c-lbl" text-anchor="middle">aVF  +90&#176;</text>
  <text x="160" y="26" class="dg26c-sub" text-anchor="middle">&#8722;90&#176;</text>

  <text x="262" y="86" class="dg26c-sub">&#8722;30&#176;</text>
  <text x="222" y="262" class="dg26c-sub">+60&#176;</text>
  <text x="250" y="212" class="dg26c-good">normal</text>
  <text x="58"  y="104" class="dg26c-warn">left axis deviation</text>
  <text x="240" y="250" class="dg26c-warn">right axis</text>

  <g class="dg26c-vec">
    <line x1="0" y1="0" x2="86" y2="0" class="dg26c-vecl"/>
    <polygon points="86,-8 106,0 86,8" class="dg26c-vech"/>
  </g>
  <circle cx="160" cy="150" r="4" fill="var(--dg-ink)"/>

  <text x="336" y="46" class="dg26c-lbl">Lead I</text>
  <line x1="336" y1="76" x2="612" y2="76" class="dg26c-base"/>
  <path class="dg26c-trace" d="M336 76 L392 76 L404 88 L420 34 L436 94 L448 76 L612 76"/>
  <text x="470" y="52" class="dg26c-good">upright</text>

  <text x="336" y="126" class="dg26c-lbl">aVF</text>
  <line x1="336" y1="156" x2="612" y2="156" class="dg26c-base"/>
  <path class="dg26c-trace" d="M336 156 L392 156 L404 168 L420 114 L436 174 L448 156 L612 156"/>
  <text x="470" y="132" class="dg26c-good">upright</text>

  <rect x="336" y="196" width="278" height="66" rx="10" class="dg26c-panel"/>
  <text x="352" y="222" class="dg26c-lbl">Both upright &#8594; 0&#176; to +90&#176;</text>
  <text x="352" y="244" class="dg26c-sub">normal, non-deviated axis</text>
</svg>`,
};

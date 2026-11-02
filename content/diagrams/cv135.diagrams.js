window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv135-pump-timing"] = {
  title: "Thoracic pump pressure through the breath",
  caption:
    "All three midline methods open with the same downward press that exaggerates exhalation; the line shows what happens to that pressure next. " +
    "The thoracic pump stays on the chest and pumps at about 2 compressions per second from end exhalation, and the top dot moves at that real rate. " +
    "Exaggerated respiration releases on each inhalation for 5-10 cycles, and the atelectasis modification holds through inhalations, then lets go suddenly on the last one. " +
    "Line height shows the order of events, not a measured pressure.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three timelines of pressure on the rib cage. The thoracic pump rises during exhalation, then stays high with small rapid pulses. Exaggerated respiration rises on each exhalation and falls on each inhalation. The atelectasis modification rises on exhalation, stays high through two inhalations, then drops abruptly on the last inhalation.">
  <style>
    .dg135a-band  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg135a-name  { font-size: 13px; font-weight: 700; }
    .dg135a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg135a-lbl   { font-size: 11px; text-anchor: middle; fill: var(--dg-muted); }
    .dg135a-trace { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    .dg135a-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 4; }
    .dg135a-head  { stroke: var(--dg-muted); stroke-width: 1; opacity: .55; }
    .dg135a-dot   { fill: var(--dg-warm); stroke: var(--dg-surface); stroke-width: 2; }
    .dg135a-x     { animation: dg135ax 8s linear infinite; }
    .dg135a-y1    { animation: dg135ay1 8s linear infinite; }
    .dg135a-y2    { animation: dg135ay2 8s linear infinite; }
    .dg135a-y3    { animation: dg135ay3 8s linear infinite; }
    @keyframes dg135ax { from { transform: translateX(0) } to { transform: translateX(480px) } }
    @keyframes dg135ay1 {
      0% { transform: translateY(0) }
      25%, 31.25%, 37.5%, 43.75%, 50%, 56.25%, 62.5%, 68.75%, 75%, 81.25%, 87.5%, 93.75%, 100% { transform: translateY(-38px) }
      28.125%, 34.375%, 40.625%, 46.875%, 53.125%, 59.375%, 65.625%, 71.875%, 78.125%, 84.375%, 90.625%, 96.875% { transform: translateY(-30px) }
    }
    @keyframes dg135ay2 {
      0%, 50%, 100% { transform: translateY(0) }
      25%, 75% { transform: translateY(-38px) }
    }
    @keyframes dg135ay3 {
      0% { transform: translateY(0) }
      25%, 75% { transform: translateY(-38px) }
      76%, 100% { transform: translateY(0) }
    }
  </style>

  <text x="150" y="13" class="dg135a-sub">Pressure on the rib cage, higher line = more pressure</text>

  <rect x="146" y="22" width="488" height="84" rx="8" class="dg135a-band"/>
  <rect x="146" y="116" width="488" height="84" rx="8" class="dg135a-band"/>
  <rect x="146" y="210" width="488" height="84" rx="8" class="dg135a-band"/>

  <line x1="270" y1="26" x2="270" y2="102" class="dg135a-grid"/>
  <line x1="270" y1="120" x2="270" y2="196" class="dg135a-grid"/>
  <line x1="390" y1="120" x2="390" y2="196" class="dg135a-grid"/>
  <line x1="510" y1="120" x2="510" y2="196" class="dg135a-grid"/>
  <line x1="270" y1="214" x2="270" y2="290" class="dg135a-grid"/>
  <line x1="390" y1="214" x2="390" y2="290" class="dg135a-grid"/>
  <line x1="510" y1="214" x2="510" y2="290" class="dg135a-grid"/>

  <text x="4" y="52" class="dg135a-name">Thoracic pump</text>
  <text x="4" y="69" class="dg135a-sub">several minutes</text>
  <text x="4" y="146" class="dg135a-name">Exaggerated</text>
  <text x="4" y="162" class="dg135a-name">respiration</text>
  <text x="4" y="178" class="dg135a-sub">5-10 cycles</text>
  <text x="4" y="240" class="dg135a-name">Atelectasis</text>
  <text x="4" y="256" class="dg135a-name">modification</text>
  <text x="4" y="272" class="dg135a-sub">forces a rapid deep breath</text>

  <polyline class="dg135a-trace" points="150,84 270,46 285,54 300,46 315,54 330,46 345,54 360,46 375,54 390,46 405,54 420,46 435,54 450,46 465,54 480,46 495,54 510,46 525,54 540,46 555,54 570,46 585,54 600,46 615,54 630,46"/>
  <polyline class="dg135a-trace" points="150,178 270,140 390,178 510,140 630,178"/>
  <polyline class="dg135a-trace" points="150,272 270,234 510,234 515,272 630,272"/>

  <text x="210" y="99" class="dg135a-lbl">Exhale: press down</text>
  <text x="450" y="99" class="dg135a-lbl">From end of exhalation: pump at about 2 per second</text>
  <text x="210" y="193" class="dg135a-lbl">Exhale: press</text>
  <text x="330" y="193" class="dg135a-lbl">Inhale: release</text>
  <text x="450" y="193" class="dg135a-lbl">Exhale: press</text>
  <text x="570" y="193" class="dg135a-lbl">Inhale: release</text>
  <text x="210" y="287" class="dg135a-lbl">Exhale: press</text>
  <text x="330" y="287" class="dg135a-lbl">Inhale: hold</text>
  <text x="450" y="287" class="dg135a-lbl">Inhale: hold</text>
  <text x="572" y="287" class="dg135a-lbl">Last inhale: let go</text>

  <g class="dg135a-x"><line x1="150" y1="22" x2="150" y2="294" class="dg135a-head"/></g>
  <g class="dg135a-x"><g class="dg135a-y1"><circle cx="150" cy="84" r="6" class="dg135a-dot"/></g></g>
  <g class="dg135a-x"><g class="dg135a-y2"><circle cx="150" cy="178" r="6" class="dg135a-dot"/></g></g>
  <g class="dg135a-x"><g class="dg135a-y3"><circle cx="150" cy="272" r="6" class="dg135a-dot"/></g></g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv135-asis-lift"] = {
  title: "PT10-12: which ASIS you lift",
  caption:
    "Both panels show a prone patient seen from the feet, each with a left-sided tender point so the two rules compare directly; the slides' own examples are a left T11 spinous point and a right T11 transverse process point. " +
    "Lifting an ASIS turns the front of the pelvis, marked by the triangle, toward that side; the dashed outline is the pelvis before the lift. " +
    "Lift the same-side ASIS for spinous process and inferolateral points (pelvis toward, torso away) and the opposite ASIS for transverse process points (pelvis away, torso toward).",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Two panels of a prone patient seen from the feet, each with a left tender point. In the left panel the left ASIS is lifted, so the pelvis turns toward the tender point and the torso away. In the right panel the right ASIS is lifted, so the pelvis turns away from the tender point and the torso toward it.">
  <style>
    .dg135b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg135b-head  { font-size: 13px; font-weight: 700; text-anchor: middle; }
    .dg135b-sub   { font-size: 11px; fill: var(--dg-muted); text-anchor: middle; }
    .dg135b-side  { font-size: 10px; fill: var(--dg-muted); text-anchor: middle; }
    .dg135b-res   { font-size: 12px; font-weight: 700; text-anchor: middle; fill: var(--dg-accent); }
    .dg135b-table { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg135b-torso { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.5; }
    .dg135b-pelv  { fill: var(--dg-surface); fill-opacity: .85; stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg135b-ghost { fill: none; stroke: var(--dg-accent); stroke-width: 1.5; stroke-dasharray: 5 4; opacity: .6; }
    .dg135b-front { fill: var(--dg-accent); }
    .dg135b-ghostf { fill: var(--dg-accent); opacity: .35; }
    .dg135b-asis  { fill: var(--dg-cool); }
    .dg135b-pt    { fill: var(--dg-warm); }
    .dg135b-lift  { stroke: var(--dg-good); fill: var(--dg-good); stroke-width: 3; }
    .dg135b-cw    { transform: rotate(13deg); animation: dg135bcw 4s ease-in-out infinite alternate; }
    .dg135b-ccw   { transform: rotate(-13deg); animation: dg135bccw 4s ease-in-out infinite alternate; }
    .dg135b-pulse { animation: dg135bpulse 4s ease-in-out infinite alternate; }
    @keyframes dg135bcw  { from { transform: rotate(0deg) } to { transform: rotate(13deg) } }
    @keyframes dg135bccw { from { transform: rotate(0deg) } to { transform: rotate(-13deg) } }
    @keyframes dg135bpulse { from { opacity: .35 } to { opacity: 1 } }
  </style>

  <rect x="6" y="6" width="306" height="258" rx="10" class="dg135b-panel"/>
  <rect x="328" y="6" width="306" height="258" rx="10" class="dg135b-panel"/>

  <text x="159" y="26" class="dg135b-head">Spinous process, inferolateral</text>
  <text x="159" y="42" class="dg135b-sub">Lift the ASIS on the tender point side</text>
  <text x="481" y="26" class="dg135b-head">Transverse process</text>
  <text x="481" y="42" class="dg135b-sub">Lift the ASIS opposite the tender point</text>

  <ellipse cx="159" cy="110" rx="104" ry="40" class="dg135b-torso"/>
  <text x="159" y="86" class="dg135b-side">torso</text>
  <circle cx="133" cy="100" r="6" class="dg135b-pt"/>
  <text x="133" y="118" class="dg135b-side">tender point</text>

  <ellipse cx="481" cy="110" rx="104" ry="40" class="dg135b-torso"/>
  <text x="481" y="86" class="dg135b-side">torso</text>
  <circle cx="433" cy="100" r="6" class="dg135b-pt"/>
  <text x="433" y="118" class="dg135b-side">tender point</text>

  <line x1="40" y1="222" x2="278" y2="222" class="dg135b-table"/>
  <line x1="362" y1="222" x2="600" y2="222" class="dg135b-table"/>

  <g transform="translate(219 214)">
    <ellipse cx="-60" cy="-34" rx="86" ry="34" class="dg135b-ghost"/>
    <polygon points="-68,-2 -52,-2 -60,10" class="dg135b-ghostf"/>
    <g class="dg135b-cw">
      <ellipse cx="-60" cy="-34" rx="86" ry="34" class="dg135b-pelv"/>
      <polygon points="-68,-2 -52,-2 -60,10" class="dg135b-front"/>
      <circle cx="-120" cy="-10" r="5" class="dg135b-asis"/>
      <circle cx="0" cy="-10" r="5" class="dg135b-asis"/>
    </g>
  </g>
  <text x="159" y="184" class="dg135b-side">pelvis</text>
  <g class="dg135b-pulse">
    <line x1="48" y1="212" x2="48" y2="176" class="dg135b-lift"/>
    <polygon points="40,178 56,178 48,164" class="dg135b-lift"/>
  </g>

  <g transform="translate(421 214)">
    <ellipse cx="60" cy="-34" rx="86" ry="34" class="dg135b-ghost"/>
    <polygon points="52,-2 68,-2 60,10" class="dg135b-ghostf"/>
    <g class="dg135b-ccw">
      <ellipse cx="60" cy="-34" rx="86" ry="34" class="dg135b-pelv"/>
      <polygon points="52,-2 68,-2 60,10" class="dg135b-front"/>
      <circle cx="0" cy="-10" r="5" class="dg135b-asis"/>
      <circle cx="120" cy="-10" r="5" class="dg135b-asis"/>
    </g>
  </g>
  <text x="481" y="184" class="dg135b-side">pelvis</text>
  <g class="dg135b-pulse">
    <line x1="592" y1="212" x2="592" y2="176" class="dg135b-lift"/>
    <polygon points="584,178 600,178 592,164" class="dg135b-lift"/>
  </g>

  <text x="48" y="236" class="dg135b-side">Patient's left</text>
  <text x="270" y="236" class="dg135b-side">Patient's right</text>
  <text x="370" y="236" class="dg135b-side">Patient's left</text>
  <text x="592" y="236" class="dg135b-side">Patient's right</text>

  <text x="159" y="254" class="dg135b-res">Pelvis toward the point, torso away</text>
  <text x="481" y="254" class="dg135b-res">Pelvis away, torso toward the point</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv145-night-architecture"] = {
  title: "A night of sleep: SWS early, REM late",
  caption:
    "A schematic hypnogram of about seven and a half hours. NREM and REM alternate roughly every 90 minutes, the first REM episode arrives about 70 to 100 minutes after sleep onset, " +
    "slow-wave sleep (N3) crowds the first third of the night, and REM episodes lengthen toward the last third as slow-wave sleep fades. The moving line scans the night from start to finish; the shape is schematic, not measured data.",
  svg: `
<svg viewBox="0 0 640 280" role="img" aria-label="Schematic hypnogram across seven and a half hours of sleep. Stages from top: wake, REM, N1, N2, N3. Deep N3 sleep is concentrated in the first third of the night. REM episodes recur about every ninety minutes and get longer in the last third while N3 disappears.">
  <style>
    .dg145a-lab  { font-size: 11px; fill: var(--dg-muted); text-anchor: end; }
    .dg145a-grid { stroke: var(--dg-line); stroke-width: 1; }
    .dg145a-path { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    .dg145a-sws  { fill: var(--dg-cool); opacity: .13; }
    .dg145a-rem  { fill: var(--dg-warm); opacity: .13; }
    .dg145a-note { font-size: 12px; font-weight: 700; text-anchor: middle; }
    .dg145a-tick { font-size: 10.5px; fill: var(--dg-muted); text-anchor: middle; }
    .dg145a-foot { font-size: 11.5px; fill: var(--dg-muted); text-anchor: middle; }
    .dg145a-cur  { stroke: var(--dg-ink); stroke-width: 2; opacity: .7; animation: dg145asweep 14s linear infinite; }
    @keyframes dg145asweep {
      0%   { transform: translateX(0); }
      100% { transform: translateX(540px); }
    }
  </style>

  <rect x="60" y="34" width="180" height="176" class="dg145a-sws"/>
  <rect x="420" y="34" width="180" height="176" class="dg145a-rem"/>
  <text x="150" y="26" class="dg145a-note" style="fill: var(--dg-cool)">First third: slow-wave sleep</text>
  <text x="510" y="26" class="dg145a-note" style="fill: var(--dg-warm)">Last third: REM</text>

  <line x1="60" y1="50" x2="600" y2="50" class="dg145a-grid"/>
  <line x1="60" y1="85" x2="600" y2="85" class="dg145a-grid"/>
  <line x1="60" y1="115" x2="600" y2="115" class="dg145a-grid"/>
  <line x1="60" y1="150" x2="600" y2="150" class="dg145a-grid"/>
  <line x1="60" y1="190" x2="600" y2="190" class="dg145a-grid"/>
  <text x="52" y="54" class="dg145a-lab">Wake</text>
  <text x="52" y="89" class="dg145a-lab">REM</text>
  <text x="52" y="119" class="dg145a-lab">N1</text>
  <text x="52" y="154" class="dg145a-lab">N2</text>
  <text x="52" y="194" class="dg145a-lab">N3 (SWS)</text>

  <path class="dg145a-path" d="M60,50 L66,115 L78,150 L100,190 L140,190 L160,150 L172,85 L186,85 L192,150 L200,150 L215,190 L245,190 L258,150 L272,85 L300,85 L306,115 L316,150 L340,150 L352,190 L362,190 L372,150 L382,85 L420,85 L428,150 L445,115 L460,150 L472,85 L520,85 L530,115 L542,150 L558,85 L590,85 L598,50"/>

  <line x1="60" y1="34" x2="60" y2="210" class="dg145a-cur"/>

  <text x="60" y="226" class="dg145a-tick">0 h</text>
  <text x="132" y="226" class="dg145a-tick">1</text>
  <text x="204" y="226" class="dg145a-tick">2</text>
  <text x="276" y="226" class="dg145a-tick">3</text>
  <text x="348" y="226" class="dg145a-tick">4</text>
  <text x="420" y="226" class="dg145a-tick">5</text>
  <text x="492" y="226" class="dg145a-tick">6</text>
  <text x="564" y="226" class="dg145a-tick">7 h</text>
  <text x="330" y="252" class="dg145a-foot">First REM about 70 to 100 min after sleep onset, then NREM and REM alternate about every 90 min</text>
  <text x="330" y="270" class="dg145a-foot">Sleep is entered through NREM; REM is 20% to 25% of the night, in four to six episodes</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv145-cheyne-stokes"] = {
  title: "Cheyne-Stokes: the delayed feedback loop",
  caption:
    "Cheyne-Stokes breathing is a central apnea of end-stage heart failure: hyperpnea alternating with apnea. The heart pumps so weakly that blood takes a long time to reach the brain, so the brain responds to old blood gases, overshoots, then stops breathing. " +
    "The highlight steps through the loop, and the line sweeps across the breathing trace. Normal circulation corrects within a second or two, so the cycle never builds.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Breathing trace of repeated bursts of rapid deep breaths separated by flat apnea, above a four-step loop. Step one: weak heart means slow circulation. Step two: brain senses high carbon dioxide and low oxygen late. Step three: hyperpnea overshoots so carbon dioxide falls and oxygen rises. Step four: that low carbon dioxide blood reaches the brain late and breathing stops. The loop then repeats.">
  <style>
    .dg145b-trace { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; stroke-linejoin: round; }
    .dg145b-zero  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg145b-tag   { font-size: 11.5px; font-weight: 700; text-anchor: middle; }
    .dg145b-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg145b-num   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg145b-txt   { font-size: 12px; fill: var(--dg-ink); text-anchor: middle; }
    .dg145b-arr   { fill: none; stroke: var(--dg-muted); stroke-width: 2; stroke-linecap: round; }
    .dg145b-head  { fill: var(--dg-muted); }
    .dg145b-note  { font-size: 11px; fill: var(--dg-muted); text-anchor: middle; }
    .dg145b-cur   { stroke: var(--dg-ink); stroke-width: 2; opacity: .6; animation: dg145bsweep 14s linear infinite; }
    .dg145b-s1, .dg145b-s2, .dg145b-s3, .dg145b-s4 { animation: dg145bstep 14s linear infinite both; }
    .dg145b-s2 { animation-delay: 3.5s; }
    .dg145b-s3 { animation-delay: 7s; }
    .dg145b-s4 { animation-delay: 10.5s; }
    @keyframes dg145bsweep {
      0%   { transform: translateX(0); }
      100% { transform: translateX(600px); }
    }
    @keyframes dg145bstep {
      0%   { opacity: .3; }
      3%   { opacity: 1; }
      22%  { opacity: 1; }
      26%  { opacity: .3; }
      100% { opacity: .3; }
    }
  </style>

  <line x1="20" y1="65" x2="620" y2="65" class="dg145b-zero"/>
  <path class="dg145b-trace" d="M20,65 L100,65 L114,57 L128,79 L142,43 L156,95 L170,43 L184,79 L198,57 L212,65 L300,65 L314,57 L328,79 L342,43 L356,95 L370,43 L384,79 L398,57 L412,65 L500,65 L514,57 L528,79 L542,43 L556,95 L570,43 L584,79 L598,57 L612,65"/>
  <line x1="20" y1="22" x2="20" y2="112" class="dg145b-cur"/>
  <text x="156" y="24" class="dg145b-tag" style="fill: var(--dg-good)">Hyperpnea</text>
  <text x="356" y="24" class="dg145b-tag" style="fill: var(--dg-good)">Hyperpnea</text>
  <text x="556" y="24" class="dg145b-tag" style="fill: var(--dg-good)">Hyperpnea</text>
  <text x="256" y="106" class="dg145b-tag" style="fill: var(--dg-warm)">Apnea</text>
  <text x="456" y="106" class="dg145b-tag" style="fill: var(--dg-warm)">Apnea</text>

  <g class="dg145b-s1">
    <rect x="20" y="140" width="130" height="100" rx="8" class="dg145b-box"/>
    <text x="30" y="160" class="dg145b-num">1</text>
    <text x="85" y="182" class="dg145b-txt">Weak heart:</text>
    <text x="85" y="200" class="dg145b-txt">slow blood</text>
    <text x="85" y="218" class="dg145b-txt">circulation</text>
  </g>
  <g class="dg145b-s2">
    <rect x="170" y="140" width="130" height="100" rx="8" class="dg145b-box"/>
    <text x="180" y="160" class="dg145b-num">2</text>
    <text x="235" y="182" class="dg145b-txt">Brain senses</text>
    <text x="235" y="200" class="dg145b-txt">high CO2, low O2</text>
    <text x="235" y="218" class="dg145b-txt">late</text>
  </g>
  <g class="dg145b-s3">
    <rect x="320" y="140" width="130" height="100" rx="8" class="dg145b-box"/>
    <text x="330" y="160" class="dg145b-num">3</text>
    <text x="385" y="182" class="dg145b-txt">Hyperpnea</text>
    <text x="385" y="200" class="dg145b-txt">overshoots:</text>
    <text x="385" y="218" class="dg145b-txt">CO2 falls, O2 rises</text>
  </g>
  <g class="dg145b-s4">
    <rect x="470" y="140" width="130" height="100" rx="8" class="dg145b-box"/>
    <text x="480" y="160" class="dg145b-num">4</text>
    <text x="535" y="182" class="dg145b-txt">Low-CO2 blood</text>
    <text x="535" y="200" class="dg145b-txt">arrives late:</text>
    <text x="535" y="218" class="dg145b-txt">breathing stops</text>
  </g>

  <path class="dg145b-arr" d="M152,190 L166,190"/>
  <path class="dg145b-head" d="M168,190 L160,185 L160,195 Z"/>
  <path class="dg145b-arr" d="M302,190 L316,190"/>
  <path class="dg145b-head" d="M318,190 L310,185 L310,195 Z"/>
  <path class="dg145b-arr" d="M452,190 L466,190"/>
  <path class="dg145b-head" d="M468,190 L460,185 L460,195 Z"/>
  <path class="dg145b-arr" d="M535,242 L535,266 L235,266 L235,248"/>
  <path class="dg145b-head" d="M235,243 L230,251 L240,251 Z"/>
  <text x="385" y="284" class="dg145b-note">The cycle repeats: each step responds to blood from the previous swing</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv145-obstructive-vs-central"] = {
  title: "Obstructive vs central apnea on the PSG",
  caption:
    "Both panels show airflow stopping for more than 10 seconds with a falling oxygen saturation. The difference is the chest and abdominal belts: in obstructive apnea they keep moving against a blocked pharynx, " +
    "in central apnea they are flat because the drive to the respiratory pump muscles is gone. The moving line scans each tracing; traces are schematic.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two schematic polysomnogram panels. Left, obstructive apnea: airflow flat for the pause but the chest and abdomen trace keeps moving, and oxygen saturation falls. Right, central apnea: airflow flat and the chest and abdomen trace also flat, with oxygen saturation falling.">
  <style>
    .dg145c-title { font-size: 13px; font-weight: 700; }
    .dg145c-row   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg145c-zone  { fill: var(--dg-panel); }
    .dg145c-flow  { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; stroke-linejoin: round; }
    .dg145c-eff   { fill: none; stroke: var(--dg-cool); stroke-width: 2.5; stroke-linejoin: round; }
    .dg145c-spo2  { fill: none; stroke: var(--dg-warm); stroke-width: 2.5; stroke-linejoin: round; }
    .dg145c-note  { font-size: 11px; font-weight: 700; text-anchor: middle; }
    .dg145c-cap   { font-size: 11px; fill: var(--dg-muted); text-anchor: middle; }
    .dg145c-cur   { stroke: var(--dg-ink); stroke-width: 2; opacity: .6; animation: dg145csweep 9s linear infinite; }
    @keyframes dg145csweep {
      0%   { transform: translateX(0); }
      100% { transform: translateX(270px); }
    }
  </style>

  <text x="165" y="24" class="dg145c-title" style="text-anchor: middle; fill: var(--dg-accent)">Obstructive: airway blocked</text>
  <text x="465" y="24" class="dg145c-title" style="text-anchor: middle; fill: var(--dg-cool)">Central: drive lost</text>

  <rect x="100" y="60" width="130" height="180" class="dg145c-zone"/>
  <rect x="400" y="60" width="130" height="180" class="dg145c-zone"/>

  <text x="30" y="74" class="dg145c-row">Airflow</text>
  <text x="30" y="134" class="dg145c-row">Chest and abdomen</text>
  <text x="30" y="194" class="dg145c-row">Oxygen saturation</text>
  <text x="330" y="74" class="dg145c-row">Airflow</text>
  <text x="330" y="134" class="dg145c-row">Chest and abdomen</text>
  <text x="330" y="194" class="dg145c-row">Oxygen saturation</text>

  <path class="dg145c-flow" d="M30,92 q10,-14 20,0 t20,0 t20,0 L100,92 H230 q10,-14 20,0 t20,0 t20,0"/>
  <path class="dg145c-eff" d="M30,152 q10,-12 20,0 t20,0 t20,0 L100,152 q12,-18 24,0 t24,0 t24,0 t24,0 t24,0 L220,152 H230 q10,-12 20,0 t20,0 t20,0"/>
  <path class="dg145c-spo2" d="M30,210 H100 L215,232 L260,212 H290"/>

  <path class="dg145c-flow" d="M330,92 q10,-14 20,0 t20,0 t20,0 L400,92 H530 q10,-14 20,0 t20,0 t20,0"/>
  <path class="dg145c-eff" d="M330,152 q10,-12 20,0 t20,0 t20,0 L400,152 H530 q10,-12 20,0 t20,0 t20,0"/>
  <path class="dg145c-spo2" d="M330,210 H400 L515,232 L560,212 H590"/>

  <line x1="30" y1="58" x2="30" y2="244" class="dg145c-cur"/>
  <line x1="330" y1="58" x2="330" y2="244" class="dg145c-cur"/>

  <text x="165" y="172" class="dg145c-note" style="fill: var(--dg-cool)">Still trying to breathe</text>
  <text x="465" y="172" class="dg145c-note" style="fill: var(--dg-warm)">No effort at all</text>
  <text x="165" y="258" class="dg145c-cap">Apnea: no airflow for more than 10 s</text>
  <text x="465" y="258" class="dg145c-cap">Apnea: no airflow for more than 10 s</text>
  <text x="320" y="280" class="dg145c-cap">Central apnea: CPAP rarely helps; treat the underlying problem</text>
</svg>`,
};

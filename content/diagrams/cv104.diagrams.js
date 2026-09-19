window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv104-diaphragm-excursion"] = {
  title: "Diaphragmatic excursion by percussion",
  caption:
    "Percuss down the posterior chest from resonant lung until the note turns dull; that change marks the diaphragm. " +
    "Mark it on full expiration and again on full inspiration - the distance between the two levels is the excursion, normally about 3-5.5 cm. " +
    "On the right-hand side of the figure dullness begins abnormally high, which suggests a pleural effusion or an elevated hemidiaphragm (Slides 37-39).",
  svg: `
<svg viewBox="0 0 620 280" role="img" aria-label="Two panels of the posterior chest. On the normal side, percussion notes change from resonant to dull at the diaphragm, which moves down between full expiration and full inspiration by 3 to 5.5 centimetres. On the abnormal side, dullness begins abnormally high, suggesting pleural effusion or an elevated hemidiaphragm.">
  <style>
    .dg104a-body { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg104a-hd   { font-size: 13px; font-weight: 700; }
    .dg104a-lbl  { font-size: 12px; }
    .dg104a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg104a-dome { fill: none; stroke: var(--dg-ink); stroke-width: 3; }
    .dg104a-lvl  { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 5 4; }
    .dg104a-res  { fill: var(--dg-cool); }
    .dg104a-dull { fill: var(--dg-warm); }
    .dg104a-fluid { fill: var(--dg-warm); opacity: .2; }
    .dg104a-br   { stroke: var(--dg-good); stroke-width: 2.5; fill: none; }
    .dg104a-good { fill: var(--dg-good); font-size: 12px; font-weight: 700; }
    .dg104a-move { animation: dg104abreathe 5s ease-in-out infinite; }
    @keyframes dg104abreathe {
      0%, 15%  { transform: translateY(0); }
      45%, 65% { transform: translateY(36px); }
      95%, 100% { transform: translateY(0); }
    }
    .dg104a-tap { animation: dg104atap 5s linear infinite; }
    @keyframes dg104atap {
      0%, 100% { opacity: .35; }
      4%, 12%  { opacity: 1; }
      20%      { opacity: .35; }
    }
    .dg104a-t2 { animation-delay: .5s; }
    .dg104a-t3 { animation-delay: 1s; }
    .dg104a-t4 { animation-delay: 1.5s; }
    .dg104a-t5 { animation-delay: 2s; }
    .dg104a-t6 { animation-delay: 2.5s; }
  </style>

  <text x="40" y="30" class="dg104a-hd">Normal side</text>
  <rect x="40" y="42" width="200" height="222" rx="30" class="dg104a-body"/>
  <line x1="44" y1="157" x2="250" y2="157" class="dg104a-lvl"/>
  <line x1="44" y1="193" x2="250" y2="193" class="dg104a-lvl"/>
  <g class="dg104a-move">
    <path d="M55 175 Q140 135 225 175" class="dg104a-dome"/>
  </g>
  <circle cx="110" cy="70"  r="7" class="dg104a-res dg104a-tap"/>
  <circle cx="110" cy="95"  r="7" class="dg104a-res dg104a-tap dg104a-t2"/>
  <circle cx="110" cy="120" r="7" class="dg104a-res dg104a-tap dg104a-t3"/>
  <circle cx="110" cy="145" r="7" class="dg104a-res dg104a-tap dg104a-t4"/>
  <circle cx="110" cy="210" r="7" class="dg104a-dull dg104a-tap dg104a-t5"/>
  <circle cx="110" cy="235" r="7" class="dg104a-dull dg104a-tap dg104a-t6"/>
  <text x="124" y="99"  class="dg104a-lbl">resonant</text>
  <text x="124" y="239" class="dg104a-lbl">dull</text>
  <path d="M258 157 L264 157 L264 193 L258 193" class="dg104a-br"/>
  <text x="272" y="153" class="dg104a-sub">full expiration</text>
  <text x="272" y="179" class="dg104a-good">3-5.5 cm</text>
  <text x="272" y="205" class="dg104a-sub">full inspiration</text>

  <text x="380" y="30" class="dg104a-hd">Abnormal side</text>
  <rect x="380" y="42" width="200" height="222" rx="30" class="dg104a-body"/>
  <path d="M382 128 L578 128 L578 234 Q578 264 548 264 L412 264 Q382 264 382 234 Z" class="dg104a-fluid"/>
  <path d="M395 140 Q480 100 565 140" class="dg104a-dome"/>
  <circle cx="450" cy="70"  r="7" class="dg104a-res dg104a-tap"/>
  <circle cx="450" cy="95"  r="7" class="dg104a-res dg104a-tap dg104a-t2"/>
  <circle cx="450" cy="145" r="7" class="dg104a-dull dg104a-tap dg104a-t3"/>
  <circle cx="450" cy="170" r="7" class="dg104a-dull dg104a-tap dg104a-t4"/>
  <text x="464" y="99"  class="dg104a-lbl">resonant</text>
  <text x="464" y="174" class="dg104a-lbl">dull - too high</text>
  <text x="396" y="214" class="dg104a-lbl">pleural effusion or</text>
  <text x="396" y="232" class="dg104a-lbl">elevated hemidiaphragm</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv104-breath-sound-timing"] = {
  title: "Normal breath sounds: duration, loudness, location",
  caption:
    "Each ramp is one breath: width is how long the phase lasts, height is how loud it is. " +
    "Vesicular sound is soft and mostly inspiratory, fading early in expiration; moving toward the large central airways the sound gets louder and higher-pitched and expiration lengthens, until bronchial sound is expiration-dominant. " +
    "Every one of these is normal in its own place - a bronchial pattern heard where vesicular sound belongs means consolidation (Slides 42-44).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four normal breath sounds drawn as inspiration and expiration ramps. Vesicular: soft, long inspiration and short fading expiration, over most lung fields. Bronchovesicular: intermediate, equal phases, first and second interspaces and between the scapulae. Bronchial: loud, short inspiration and longer expiration, over the manubrium. Tracheal: very loud, almost equal phases, over the trachea.">
  <style>
    .dg104b-name { font-size: 13px; font-weight: 700; }
    .dg104b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg104b-ins  { fill: var(--dg-cool); opacity: .85; }
    .dg104b-exp  { fill: var(--dg-warm); opacity: .85; }
    .dg104b-base { stroke: var(--dg-line); stroke-width: 1; }
    .dg104b-head { stroke: var(--dg-accent); stroke-width: 2; }
    .dg104b-sweep { animation: dg104bsweep 4.5s linear infinite; }
    @keyframes dg104bsweep {
      0%   { transform: translateX(0); opacity: 0; }
      6%   { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateX(290px); opacity: 0; }
    }
  </style>

  <rect x="210" y="12" width="12" height="10" class="dg104b-ins"/>
  <text x="228" y="21" class="dg104b-sub">inspiration</text>
  <rect x="300" y="12" width="12" height="10" class="dg104b-exp"/>
  <text x="318" y="21" class="dg104b-sub">expiration</text>
  <text x="400" y="21" class="dg104b-sub">width = duration, height = loudness</text>

  <text x="10" y="62" class="dg104b-name">Vesicular</text>
  <text x="10" y="76" class="dg104b-sub">soft, low-pitched</text>
  <text x="10" y="89" class="dg104b-sub">most of the lung fields</text>
  <line x1="205" y1="84" x2="500" y2="84" class="dg104b-base"/>
  <polygon points="210,84 370,68 370,84" class="dg104b-ins"/>
  <polygon points="370,84 370,68 430,84" class="dg104b-exp"/>

  <text x="10" y="127" class="dg104b-name">Bronchovesicular</text>
  <text x="10" y="141" class="dg104b-sub">intermediate intensity and pitch</text>
  <text x="10" y="154" class="dg104b-sub">1st-2nd ICS, between scapulae</text>
  <line x1="205" y1="152" x2="500" y2="152" class="dg104b-base"/>
  <polygon points="210,152 320,130 320,152" class="dg104b-ins"/>
  <polygon points="335,152 335,130 445,152" class="dg104b-exp"/>

  <text x="10" y="192" class="dg104b-name">Bronchial</text>
  <text x="10" y="206" class="dg104b-sub">loud, harsh, high-pitched</text>
  <text x="10" y="219" class="dg104b-sub">over the manubrium</text>
  <line x1="205" y1="220" x2="500" y2="220" class="dg104b-base"/>
  <polygon points="210,220 290,192 290,220" class="dg104b-ins"/>
  <polygon points="310,220 310,192 470,220" class="dg104b-exp"/>

  <text x="10" y="257" class="dg104b-name">Tracheal</text>
  <text x="10" y="271" class="dg104b-sub">very loud, harsh, high-pitched</text>
  <text x="10" y="284" class="dg104b-sub">over the trachea in the neck</text>
  <line x1="205" y1="288" x2="500" y2="288" class="dg104b-base"/>
  <polygon points="210,288 340,254 340,288" class="dg104b-ins"/>
  <polygon points="355,288 355,254 485,288" class="dg104b-exp"/>

  <text x="512" y="80"  class="dg104b-sub">I longer than E</text>
  <text x="512" y="148" class="dg104b-sub">I about equal to E</text>
  <text x="512" y="216" class="dg104b-sub">E longer than I</text>
  <text x="512" y="284" class="dg104b-sub">I almost equal to E</text>

  <g class="dg104b-sweep">
    <line x1="210" y1="34" x2="210" y2="292" class="dg104b-head"/>
  </g>
</svg>`,
};

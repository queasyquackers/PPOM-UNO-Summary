window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv49 a - Recruitment and distension keep PVR from rising.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv49-recruitment-distension"] = {
  title: "Recruitment and distension",
  caption:
    "Pulmonary blood flow climbs from 3.5 to 25 L/min/m2 of body surface during exercise, and capillary blood volume goes from 70 to 200 mL, yet pulmonary vascular resistance does not rise. " +
    "Watch the three solid channels widen (distension) while the three faint dashed channels fill in and start carrying blood (recruitment). " +
    "Because every new route is parallel rather than serial, there is nowhere for pressure to build - which is why PVR actually falls as flow increases. Values are this lecture's (Slides 6, 12).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A pulmonary capillary bed between an inflow trunk and an outflow trunk. Three open channels widen while three dashed closed channels open and begin carrying blood, illustrating distension and recruitment, with flow rising from 3.5 to 25 litres per minute per square metre and resistance falling.">
  <style>
    .dg49a-h    { font-size: 13px; font-weight: 700; }
    .dg49a-tag  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg49a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg49a-num  { font-size: 12px; font-weight: 700; }
    .dg49a-trunk{ stroke: var(--dg-ink); stroke-width: 13; stroke-linecap: round; opacity: .85; }
    .dg49a-open { stroke: var(--dg-cool); stroke-linecap: round; fill: none; stroke-width: 5; }
    .dg49a-ghost{ stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 7 6; fill: none; }
    .dg49a-recr { stroke: var(--dg-good); stroke-linecap: round; fill: none; stroke-width: 4; opacity: .5; }
    .dg49a-d1 { animation: dg49awide 6s ease-in-out infinite; }
    .dg49a-d2 { animation: dg49awide 6s ease-in-out infinite .15s; }
    .dg49a-d3 { animation: dg49awide 6s ease-in-out infinite .3s; }
    @keyframes dg49awide {
      0%, 22%   { stroke-width: 5 }
      52%, 78%  { stroke-width: 12 }
      100%      { stroke-width: 5 }
    }
    .dg49a-r1 { animation: dg49arecruit 6s ease-in-out infinite .2s; }
    .dg49a-r2 { animation: dg49arecruit 6s ease-in-out infinite .45s; }
    .dg49a-r3 { animation: dg49arecruit 6s ease-in-out infinite .7s; }
    @keyframes dg49arecruit {
      0%, 22%   { stroke-width: 3;  opacity: .28 }
      52%, 78%  { stroke-width: 10; opacity: 1 }
      100%      { stroke-width: 3;  opacity: .28 }
    }
    .dg49a-dot  { fill: var(--dg-accent); animation: dg49aflow 2.2s linear infinite; }
    .dg49a-dot2 { animation-delay: .7s; }
    .dg49a-dot3 { animation-delay: 1.4s; }
    @keyframes dg49aflow {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: 1 }
      88%  { opacity: 1 }
      100% { transform: translateX(392px); opacity: 0 }
    }
    .dg49a-fall { animation: dg49afall 6s ease-in-out infinite; }
    @keyframes dg49afall {
      0%, 22%  { transform: translateY(0) }
      52%,78%  { transform: translateY(11px) }
      100%     { transform: translateY(0) }
    }
  </style>

  <text x="20" y="22" class="dg49a-h">Pulmonary capillary bed: rest to exercise</text>
  <text x="112" y="46" class="dg49a-tag">DISTENSION &#8212; channels already open get wider</text>

  <path d="M26 138 H112" class="dg49a-trunk"/>
  <path d="M508 138 H614" class="dg49a-trunk"/>
  <line x1="112" y1="60" x2="112" y2="216" class="dg49a-trunk"/>
  <line x1="508" y1="60" x2="508" y2="216" class="dg49a-trunk"/>
  <text x="26" y="122" class="dg49a-sub">pulmonary artery</text>
  <text x="524" y="122" class="dg49a-sub">to left atrium</text>

  <line x1="112" y1="68"  x2="508" y2="68"  class="dg49a-open dg49a-d1"/>
  <line x1="112" y1="124" x2="508" y2="124" class="dg49a-open dg49a-d2"/>
  <line x1="112" y1="180" x2="508" y2="180" class="dg49a-open dg49a-d3"/>

  <line x1="112" y1="96"  x2="508" y2="96"  class="dg49a-ghost"/>
  <line x1="112" y1="152" x2="508" y2="152" class="dg49a-ghost"/>
  <line x1="112" y1="208" x2="508" y2="208" class="dg49a-ghost"/>
  <line x1="112" y1="96"  x2="508" y2="96"  class="dg49a-recr dg49a-r1"/>
  <line x1="112" y1="152" x2="508" y2="152" class="dg49a-recr dg49a-r2"/>
  <line x1="112" y1="208" x2="508" y2="208" class="dg49a-recr dg49a-r3"/>

  <circle cx="118" cy="68"  r="4" class="dg49a-dot"/>
  <circle cx="118" cy="68"  r="4" class="dg49a-dot dg49a-dot2"/>
  <circle cx="118" cy="124" r="4" class="dg49a-dot dg49a-dot3"/>
  <circle cx="118" cy="180" r="4" class="dg49a-dot dg49a-dot2"/>

  <text x="112" y="240" class="dg49a-tag">RECRUITMENT &#8212; closed channels open up</text>

  <text x="20" y="268" class="dg49a-num">Q 3.5 &#8594; 25 L/min/m2</text>
  <text x="212" y="268" class="dg49a-num">capillary blood 70 &#8594; 200 mL</text>
  <g class="dg49a-fall">
    <text x="470" y="268" class="dg49a-num" fill="var(--dg-good)">PVR &#8595; falls</text>
  </g>
  <text x="20" y="290" class="dg49a-sub">Parallel routes, not serial: more channels means pressure cannot build.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv49 b - Zones of West in the upright lung.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv49-zones-of-west"] = {
  title: "Zones of West (upright lung)",
  caption:
    "Gravity costs 0.74 mmHg per centimetre of height above the heart, about 7.4 mmHg across the roughly 10 cm lung height this lecture uses - against a left atrial pressure of only 8 mmHg. " +
    "At the apex alveolar pressure wins and the capillary is crushed, so no droplets move. In the middle zone arterial pressure beats alveolar pressure only during systole, so flow is biphasic - the droplets move, then stop. At the base arterial and venous pressures both exceed alveolar pressure and flow never stops. " +
    "Lying supine equalises the heights and abolishes all three zones (Slides 13-14).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three horizontal bands of lung from apex to base. At the apex an alveolus compresses the capillary and no blood moves. In the middle band blood moves in bursts during systole only. At the base blood flows continuously. A gravity arrow on the right shows hydrostatic pressure rising by 0.74 millimetres of mercury per centimetre toward the base.">
  <style>
    .dg49b-band { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg49b-alv  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg49b-vess { stroke: var(--dg-cool); fill: none; stroke-linecap: round; }
    .dg49b-lbl  { font-size: 12.5px; font-weight: 700; }
    .dg49b-eq   { font-size: 12px; fill: var(--dg-muted); }
    .dg49b-tiny { font-size: 10.5px; fill: var(--dg-muted); }
    .dg49b-warn { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg49b-dot  { fill: var(--dg-accent); }
    .dg49b-sq   { animation: dg49bsqueeze 2.6s ease-in-out infinite; transform-origin: 170px 62px; }
    @keyframes dg49bsqueeze { 0%,100% { opacity:.35 } 50% { opacity:1 } }
    .dg49b-c2 { animation: dg49bbiphasic 2.6s ease-in-out infinite; }
    .dg49b-c2b{ animation-delay: .3s; }
    @keyframes dg49bbiphasic {
      0%   { transform: translateX(0);     opacity: 0 }
      6%   { opacity: 1 }
      42%  { transform: translateX(126px); opacity: 1 }
      50%  { transform: translateX(126px); opacity: 0 }
      100% { transform: translateX(126px); opacity: 0 }
    }
    .dg49b-c3 { animation: dg49bsteady 2.6s linear infinite; }
    .dg49b-c3b{ animation-delay: .65s; }
    .dg49b-c3c{ animation-delay: 1.3s; }
    @keyframes dg49bsteady {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      90%  { opacity: 1 }
      100% { transform: translateX(132px); opacity: 0 }
    }
    .dg49b-grav { animation: dg49bdrop 2.8s ease-in infinite; }
    @keyframes dg49bdrop {
      0%   { transform: translateY(0);   opacity: 0 }
      15%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateY(196px); opacity: 0 }
    }
  </style>

  <text x="20" y="20" class="dg49b-lbl">Upright lung, apex to base</text>

  <rect x="34" y="32"  width="252" height="76" rx="10" class="dg49b-band"/>
  <rect x="34" y="114" width="252" height="76" rx="10" class="dg49b-band"/>
  <rect x="34" y="196" width="252" height="76" rx="10" class="dg49b-band"/>

  <circle cx="170" cy="60" r="19" class="dg49b-alv"/>
  <text x="163" y="64" class="dg49b-tiny">P_A</text>
  <g class="dg49b-sq">
    <polygon points="158,80 182,80 170,92" class="dg49b-warn"/>
  </g>
  <line x1="48" y1="98" x2="272" y2="98" class="dg49b-vess" stroke-width="1.5"/>
  <text x="196" y="52" class="dg49b-tiny" fill="var(--dg-warm)">crushed</text>

  <circle cx="170" cy="142" r="19" class="dg49b-alv"/>
  <text x="163" y="146" class="dg49b-tiny">P_A</text>
  <line x1="48" y1="180" x2="272" y2="180" class="dg49b-vess" stroke-width="5"/>
  <circle cx="72" cy="180" r="4.5" class="dg49b-dot dg49b-c2"/>
  <circle cx="72" cy="180" r="4.5" class="dg49b-dot dg49b-c2 dg49b-c2b"/>
  <text x="196" y="134" class="dg49b-tiny">systole only</text>

  <circle cx="170" cy="224" r="19" class="dg49b-alv"/>
  <text x="163" y="228" class="dg49b-tiny">P_A</text>
  <line x1="48" y1="262" x2="272" y2="262" class="dg49b-vess" stroke-width="9"/>
  <circle cx="66" cy="262" r="5" class="dg49b-dot dg49b-c3"/>
  <circle cx="66" cy="262" r="5" class="dg49b-dot dg49b-c3 dg49b-c3b"/>
  <circle cx="66" cy="262" r="5" class="dg49b-dot dg49b-c3 dg49b-c3c"/>
  <text x="196" y="216" class="dg49b-tiny">always open</text>

  <text x="302" y="58"  class="dg49b-lbl">Zone 1 &#8212; apex</text>
  <text x="302" y="78"  class="dg49b-eq">P_A &gt; P_a &gt; P_v</text>
  <text x="302" y="96"  class="dg49b-eq">little to no flow</text>

  <text x="302" y="140" class="dg49b-lbl">Zone 2 &#8212; middle</text>
  <text x="302" y="160" class="dg49b-eq">P_a &gt; P_A &gt; P_v</text>
  <text x="302" y="178" class="dg49b-eq">biphasic: flows in systole</text>

  <text x="302" y="222" class="dg49b-lbl">Zone 3 &#8212; base</text>
  <text x="302" y="242" class="dg49b-eq">P_a &gt; P_v &gt; P_A</text>
  <text x="302" y="260" class="dg49b-eq">continuous flow</text>

  <line x1="600" y1="40" x2="600" y2="252" stroke="var(--dg-line)" stroke-width="2"/>
  <polygon points="593,252 607,252 600,266" fill="var(--dg-line)"/>
  <g class="dg49b-grav">
    <circle cx="600" cy="46" r="5" fill="var(--dg-warm)"/>
  </g>
  <text x="520" y="34" class="dg49b-tiny">gravity</text>
  <text x="470" y="286" class="dg49b-tiny">+0.74 mmHg per cm</text>

  <text x="20" y="292" class="dg49b-tiny">~7.4 mmHg apex to base over ~10 cm; left atrial pressure is only 8 mmHg.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv49 c - Total PVR against lung volume: two opposing vessel populations.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv49-pvr-lung-volume"] = {
  title: "PVR versus lung volume",
  caption:
    "The lung holds two mechanically opposite vessel populations. Extra-alveolar vessels are pulled open by radial traction, so their resistance is high at low volume and low at high volume. Alveolar and septal capillaries are squeezed by stretching alveolar walls, so their resistance is low at low volume and high at high volume. " +
    "The sweeping marker shows the sum: total PVR is a U-curve with its minimum at functional residual capacity, rising below FRC and rising steeply toward total lung capacity (Slides 15-17).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A graph of pulmonary vascular resistance against lung volume. A dashed falling line marks extra-alveolar vessel resistance, a dashed rising line marks alveolar vessel resistance, and a solid U-shaped curve marks total resistance with its minimum at functional residual capacity. A marker sweeps from residual volume to total lung capacity and back.">
  <style>
    .dg49c-ax   { stroke: var(--dg-line); stroke-width: 1.6; }
    .dg49c-lbl  { font-size: 12px; font-weight: 700; }
    .dg49c-tiny { font-size: 11px; fill: var(--dg-muted); }
    .dg49c-ex   { stroke: var(--dg-warm); fill: none; stroke-width: 2.4; stroke-dasharray: 7 5; }
    .dg49c-al   { stroke: var(--dg-cool); fill: none; stroke-width: 2.4; stroke-dasharray: 7 5; }
    .dg49c-tot  { stroke: var(--dg-accent); fill: none; stroke-width: 4; stroke-linecap: round; }
    .dg49c-sweep{ animation: dg49csweep 8s ease-in-out infinite; }
    @keyframes dg49csweep {
      0%   { transform: translateX(0) }
      50%  { transform: translateX(390px) }
      100% { transform: translateX(0) }
    }
    .dg49c-ring { animation: dg49cping 2.4s ease-out infinite; transform-origin: 250px 208px; }
    @keyframes dg49cping {
      0%   { transform: scale(.5); opacity: .95 }
      100% { transform: scale(2.1); opacity: 0 }
    }
    .dg49c-lung { animation: dg49cbreathe 8s ease-in-out infinite; transform-origin: 0 0; }
    @keyframes dg49cbreathe {
      0%   { transform: translateX(0)      scale(.72) }
      50%  { transform: translateX(390px)  scale(1.35) }
      100% { transform: translateX(0)      scale(.72) }
    }
  </style>

  <text x="20" y="20" class="dg49c-lbl">Total PVR is the sum of two opposite curves</text>

  <line x1="70" y1="48" x2="70" y2="248" class="dg49c-ax"/>
  <line x1="70" y1="248" x2="600" y2="248" class="dg49c-ax"/>
  <text x="20" y="54" class="dg49c-tiny">PVR</text>
  <text x="20" y="66" class="dg49c-tiny">high</text>
  <text x="20" y="244" class="dg49c-tiny">low</text>

  <path d="M92 84 C 190 152, 320 196, 574 224" class="dg49c-ex"/>
  <path d="M92 224 C 300 214, 430 176, 574 76" class="dg49c-al"/>
  <path d="M92 74 C 160 168, 200 208, 250 208 C 330 208, 430 158, 574 62" class="dg49c-tot"/>

  <circle cx="250" cy="208" r="6" fill="var(--dg-good)"/>
  <circle cx="250" cy="208" r="6" fill="none" stroke="var(--dg-good)" stroke-width="2" class="dg49c-ring"/>
  <text x="212" y="234" class="dg49c-lbl" fill="var(--dg-good)">FRC: minimum</text>

  <g class="dg49c-sweep">
    <line x1="92" y1="52" x2="92" y2="248" stroke="var(--dg-ink)" stroke-width="1.6" opacity=".55"/>
  </g>
  <g class="dg49c-lung">
    <circle cx="128" cy="62" r="13" fill="var(--dg-panel)" stroke="var(--dg-ink)" stroke-width="2"/>
  </g>

  <text x="380" y="212" class="dg49c-tiny" fill="var(--dg-warm)">extra-alveolar (radial traction)</text>
  <text x="330" y="96" class="dg49c-tiny" fill="var(--dg-cool)">alveolar + septal (squeezed)</text>

  <text x="74" y="266" class="dg49c-tiny">RV</text>
  <text x="232" y="266" class="dg49c-tiny">FRC</text>
  <text x="558" y="266" class="dg49c-tiny">TLC</text>
  <text x="270" y="288" class="dg49c-tiny">lung volume &#8594;</text>
  <text x="20" y="288" class="dg49c-tiny">Below FRC the extra-alveolar vessels win; toward TLC the alveolar vessels win.</text>
</svg>`,
};

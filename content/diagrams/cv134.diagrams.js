window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv134-excursion-pump"] = {
  title: "Excursion runs the lung's lymph pump",
  caption:
    "The same initial lymphatic in two lungs. A full breath pulls on the anchoring filaments, opens the vessel and draws fluid in; " +
    "exhalation closes the overlapping cells and propels the fluid forward. " +
    "Over a pneumonia, consolidation diminishes local excursion, so the vessel barely swings, less lymph moves and the drain clogs. " +
    "That is why restoring excursion outlasts any lymph pump. " +
    "Sizes are illustrative, because the lecture gives no measurements (Slides 20-22, 26).",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Two panels of the same lung lymph capillary. On the left, with full excursion, the tissue swings widely, anchoring filaments pull the vessel wide open on inhalation, fluid enters between overlapping cells, and on exhalation the cells close and a large stream of lymph moves forward. On the right, over a pneumonia, excursion is diminished, the vessel barely opens, inflammatory fluid pools around it, and only a trickle of lymph leaves, so the drain clogs.">
  <style>
    .dg134a-card { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg134a-tissue { fill: var(--dg-line); }
    .dg134a-ves { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 3; vector-effect: non-scaling-stroke; }
    .dg134a-gap { fill: var(--dg-surface); }
    .dg134a-cell { fill: var(--dg-ink); }
    .dg134a-fil { fill: none; stroke: var(--dg-muted); stroke-width: 1.6; }
    .dg134a-dot { fill: var(--dg-cool); }
    .dg134a-pool { fill: var(--dg-warm); opacity: .75; }
    .dg134a-on { stroke: var(--dg-accent); stroke-linecap: round; }
    .dg134a-ontip { fill: var(--dg-accent); }
    .lecture-diagram text.dg134a-h { font-size: 13px; font-weight: 700; }
    .lecture-diagram text.dg134a-s { font-size: 11px; fill: var(--dg-muted); }
    .lecture-diagram text.dg134a-t { font-size: 10.5px; fill: var(--dg-muted); text-anchor: middle; }
    .lecture-diagram text.dg134a-w { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .lecture-diagram text.dg134a-a { font-size: 11px; fill: var(--dg-accent); font-weight: 700; }
    .lecture-diagram text.dg134a-b { font-size: 12px; }
    .dg134a-in { fill: var(--dg-cool); font-weight: 700; }
    .dg134a-ex { fill: var(--dg-accent); font-weight: 700; }

    .dg134a-lt { animation: dg134aLt 6.5s ease-in-out infinite; }
    .dg134a-lb { animation: dg134aLb 6.5s ease-in-out infinite; }
    .dg134a-lv { transform-box: fill-box; transform-origin: center; animation: dg134aLv 6.5s ease-in-out infinite; }
    @keyframes dg134aLt { 0%, 4% { transform: translateY(16px) } 42%, 54% { transform: translateY(0) } 96%, 100% { transform: translateY(16px) } }
    @keyframes dg134aLb { 0%, 4% { transform: translateY(-16px) } 42%, 54% { transform: translateY(0) } 96%, 100% { transform: translateY(-16px) } }
    @keyframes dg134aLv { 0%, 4% { transform: scaleY(.58) } 42%, 54% { transform: scaleY(1) } 96%, 100% { transform: scaleY(.58) } }

    .dg134a-rt { animation: dg134aRt 6.5s ease-in-out infinite; }
    .dg134a-rb { animation: dg134aRb 6.5s ease-in-out infinite; }
    .dg134a-rv { transform-box: fill-box; transform-origin: center; animation: dg134aRv 6.5s ease-in-out infinite; }
    @keyframes dg134aRt { 0%, 4% { transform: translateY(5px) } 42%, 54% { transform: translateY(0) } 96%, 100% { transform: translateY(5px) } }
    @keyframes dg134aRb { 0%, 4% { transform: translateY(-5px) } 42%, 54% { transform: translateY(0) } 96%, 100% { transform: translateY(-5px) } }
    @keyframes dg134aRv { 0%, 4% { transform: scaleY(.79) } 42%, 54% { transform: scaleY(1) } 96%, 100% { transform: scaleY(.79) } }

    .dg134a-fl { transform-box: fill-box; transform-origin: 100% 50%; transform: rotate(-24deg); animation: dg134aFl 6.5s ease-in-out infinite; }
    @keyframes dg134aFl { 0%, 4% { transform: rotate(0deg) } 42%, 54% { transform: rotate(-24deg) } 88%, 100% { transform: rotate(0deg) } }
    .dg134a-fr { transform-box: fill-box; transform-origin: 100% 50%; transform: rotate(-9deg); animation: dg134aFr 6.5s ease-in-out infinite; }
    @keyframes dg134aFr { 0%, 4% { transform: rotate(0deg) } 42%, 54% { transform: rotate(-9deg) } 88%, 100% { transform: rotate(0deg) } }

    .dg134a-d1 { animation: dg134aDot 6.5s linear infinite 0s; }
    .dg134a-d2 { animation: dg134aDot 6.5s linear infinite .22s; }
    .dg134a-d3 { animation: dg134aDot 6.5s linear infinite .44s; }
    @keyframes dg134aDot {
      0%, 6% { transform: translate(0, -48px); opacity: 0 }
      12% { opacity: 1 }
      40%, 56% { transform: translate(0, 0); opacity: 1 }
      90% { transform: translate(94px, 0); opacity: 1 }
      96%, 100% { transform: translate(94px, 0); opacity: 0 }
    }
    .dg134a-d4 { animation: dg134aSlow 6.5s linear infinite 0s; }
    @keyframes dg134aSlow {
      0%, 6% { transform: translate(0, -30px); opacity: 0 }
      14% { opacity: 1 }
      40%, 56% { transform: translate(0, 0); opacity: 1 }
      90% { transform: translate(52px, 0); opacity: 1 }
      96%, 100% { transform: translate(52px, 0); opacity: 0 }
    }

    .dg134a-p1 { animation: dg134aP1 6.5s ease-in-out infinite; }
    .dg134a-p2 { animation: dg134aP2 6.5s ease-in-out infinite; }
    @keyframes dg134aP1 { 0%, 4% { opacity: .45 } 12%, 48% { opacity: 1 } 56%, 100% { opacity: .45 } }
    @keyframes dg134aP2 { 0%, 48% { opacity: .45 } 56%, 94% { opacity: 1 } 100% { opacity: .45 } }
  </style>

  <rect x="6" y="6" width="308" height="222" rx="10" class="dg134a-card"/>
  <rect x="326" y="6" width="308" height="222" rx="10" class="dg134a-card"/>

  <text x="18" y="26" class="dg134a-h">Full excursion</text>
  <text x="18" y="42" class="dg134a-s">Big breath, big swing of the vessel</text>
  <text x="338" y="26" class="dg134a-h">Pneumonia: local excursion diminished</text>
  <text x="338" y="42" class="dg134a-s">Small swing, fluid backs up around the vessel</text>

  <rect x="36" y="97" width="212" height="76" rx="30" class="dg134a-ves dg134a-lv"/>

  <g class="dg134a-lt">
    <rect x="24" y="62" width="232" height="10" rx="3" class="dg134a-tissue"/>
    <line x1="58" y1="72" x2="58" y2="98" class="dg134a-fil"/>
    <line x1="94" y1="72" x2="94" y2="97" class="dg134a-fil"/>
    <line x1="200" y1="72" x2="200" y2="97" class="dg134a-fil"/>
    <line x1="234" y1="72" x2="234" y2="100" class="dg134a-fil"/>
    <text x="146" y="87" class="dg134a-t">overlapping cells</text>
    <rect x="134" y="94" width="26" height="6" class="dg134a-gap"/>
    <rect x="112" y="95" width="30" height="4" rx="2" class="dg134a-cell"/>
    <rect x="136" y="98" width="30" height="4" rx="2" class="dg134a-cell dg134a-fl"/>
  </g>

  <g class="dg134a-lb">
    <rect x="24" y="196" width="232" height="10" rx="3" class="dg134a-tissue"/>
    <line x1="58" y1="172" x2="58" y2="196" class="dg134a-fil"/>
    <line x1="94" y1="173" x2="94" y2="196" class="dg134a-fil"/>
    <line x1="200" y1="173" x2="200" y2="196" class="dg134a-fil"/>
    <line x1="234" y1="170" x2="234" y2="196" class="dg134a-fil"/>
    <text x="146" y="189" class="dg134a-t">anchoring filaments</text>
  </g>

  <circle cx="150" cy="122" r="5" class="dg134a-dot dg134a-d1"/>
  <circle cx="138" cy="136" r="5" class="dg134a-dot dg134a-d2"/>
  <circle cx="156" cy="148" r="5" class="dg134a-dot dg134a-d3"/>

  <line x1="252" y1="135" x2="284" y2="135" stroke-width="8" class="dg134a-on"/>
  <polygon points="282,122 304,135 282,148" class="dg134a-ontip"/>
  <text x="256" y="116" class="dg134a-a">lymph flow</text>

  <rect x="356" y="111" width="212" height="48" rx="22" class="dg134a-ves dg134a-rv"/>

  <g class="dg134a-rt">
    <rect x="344" y="78" width="232" height="10" rx="3" class="dg134a-tissue"/>
    <line x1="378" y1="88" x2="378" y2="112" class="dg134a-fil"/>
    <line x1="414" y1="88" x2="414" y2="111" class="dg134a-fil"/>
    <line x1="520" y1="88" x2="520" y2="111" class="dg134a-fil"/>
    <line x1="554" y1="88" x2="554" y2="113" class="dg134a-fil"/>
    <rect x="454" y="108" width="26" height="6" class="dg134a-gap"/>
    <rect x="432" y="109" width="30" height="4" rx="2" class="dg134a-cell"/>
    <rect x="456" y="112" width="30" height="4" rx="2" class="dg134a-cell dg134a-fr"/>
  </g>

  <g class="dg134a-rb">
    <rect x="344" y="182" width="232" height="10" rx="3" class="dg134a-tissue"/>
    <line x1="378" y1="158" x2="378" y2="182" class="dg134a-fil"/>
    <line x1="414" y1="159" x2="414" y2="182" class="dg134a-fil"/>
    <line x1="520" y1="159" x2="520" y2="182" class="dg134a-fil"/>
    <line x1="554" y1="157" x2="554" y2="182" class="dg134a-fil"/>
  </g>

  <circle cx="362" cy="99" r="3" class="dg134a-pool"/>
  <circle cx="396" cy="96" r="3" class="dg134a-pool"/>
  <circle cx="404" cy="104" r="3" class="dg134a-pool"/>
  <circle cx="428" cy="97" r="3" class="dg134a-pool"/>
  <circle cx="500" cy="99" r="3" class="dg134a-pool"/>
  <circle cx="492" cy="104" r="3" class="dg134a-pool"/>
  <circle cx="536" cy="97" r="3" class="dg134a-pool"/>
  <circle cx="542" cy="105" r="3" class="dg134a-pool"/>
  <circle cx="362" cy="170" r="3" class="dg134a-pool"/>
  <circle cx="396" cy="174" r="3" class="dg134a-pool"/>
  <circle cx="402" cy="166" r="3" class="dg134a-pool"/>
  <circle cx="436" cy="172" r="3" class="dg134a-pool"/>
  <circle cx="466" cy="168" r="3" class="dg134a-pool"/>
  <circle cx="498" cy="174" r="3" class="dg134a-pool"/>
  <circle cx="536" cy="172" r="3" class="dg134a-pool"/>
  <circle cx="540" cy="165" r="3" class="dg134a-pool"/>

  <circle cx="470" cy="134" r="5" class="dg134a-dot dg134a-d4"/>

  <line x1="572" y1="135" x2="598" y2="135" stroke-width="2.5" class="dg134a-on"/>
  <polygon points="596,130 608,135 596,140" class="dg134a-ontip"/>
  <text x="570" y="120" class="dg134a-w">drain clogs</text>

  <g class="dg134a-p1">
    <text x="10" y="248" class="dg134a-b"><tspan class="dg134a-in">Inhale:</tspan> lung expands, filaments pull the vessel open, volume up, pressure down, fluid drawn in</text>
  </g>
  <g class="dg134a-p2">
    <text x="10" y="268" class="dg134a-b"><tspan class="dg134a-ex">Exhale:</tspan> overlapping cells close, preventing leak, and fluid is propelled forward</text>
  </g>
  <text x="10" y="292" class="dg134a-s">Less excursion means less local lymph pumping, so inflammation stays where it started.</text>
</svg>`,
};

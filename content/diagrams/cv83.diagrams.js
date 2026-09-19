window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv83-avnrt-reentry"] = {
  title: "How a PAC starts AVNRT",
  caption:
    "The AV node holds two pathways: a fast pathway that conducts quickly but has a long refractory period, and a slow pathway that conducts slowly but recovers quickly. " +
    "A premature atrial contraction reaches the fast pathway while it is still refractory, so it is blocked there and travels down the slow pathway (a longer PR), then turns back up the recovered fast pathway to re-excite the atria (a retrograde P wave) - and the loop repeats at 150-250 bpm. " +
    "Because the circuit lives in the AV node, vagal maneuvers or adenosine that block the node break it (Slides 22-23).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Diagram of the AV node with a fast pathway on the left and a slow pathway on the right. A premature atrial beat is blocked at the top of the refractory fast pathway, conducts down the slow pathway to the His bundle and ventricles, then returns up the fast pathway to the atria as a retrograde P wave, forming a re-entry loop.">
  <style>
    .dg83a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg83a-lbl   { font-size: 13px; font-weight: 700; }
    svg text.dg83a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg83a-step  { font-size: 11.5px; }
    svg text.dg83a-num   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg83a-fast  { fill: none; stroke: var(--dg-cool); stroke-width: 5; stroke-linecap: round; }
    .dg83a-slow  { fill: none; stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg83a-com   { fill: none; stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    svg text.dg83a-fl { fill: var(--dg-cool); }
    svg text.dg83a-sl { fill: var(--dg-warm); }
    .dg83a-pac   { fill: var(--dg-accent); }
    .dg83a-blk   { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg83a-cool  { fill: var(--dg-cool); }
    .dg83a-warm  { fill: var(--dg-warm); }
    .dg83a-good  { fill: var(--dg-good); }
    .dg83a-dash  { stroke-dasharray: 9 7; animation: dg83aflow 1s linear infinite; }
    @keyframes dg83aflow { to { stroke-dashoffset: -32; } }
    .dg83a-t1 { animation: dg83aon 6s ease-in-out infinite 0s; }
    .dg83a-t2 { animation: dg83aon 6s ease-in-out infinite 1.1s; }
    .dg83a-t3 { animation: dg83aon 6s ease-in-out infinite 2.2s; }
    .dg83a-t4 { animation: dg83aon 6s ease-in-out infinite 3.3s; }
    .dg83a-t5 { animation: dg83aon 6s ease-in-out infinite 4.4s; }
    @keyframes dg83aon { 0%, 100% { opacity: .35 } 6%, 24% { opacity: 1 } 34% { opacity: .35 } }
  </style>

  <rect x="150" y="18" width="240" height="40" rx="10" class="dg83a-box"/>
  <text x="270" y="43" text-anchor="middle" class="dg83a-lbl">Atria</text>
  <g class="dg83a-t5">
    <text x="270" y="74" text-anchor="middle" class="dg83a-sub">retrograde P (after or buried in QRS)</text>
  </g>

  <g class="dg83a-t1">
    <circle cx="112" cy="38" r="9" class="dg83a-pac"/>
    <text x="112" y="14" text-anchor="middle" class="dg83a-lbl">PAC</text>
    <line x1="124" y1="44" x2="262" y2="88" class="dg83a-com"/>
  </g>

  <path d="M270 88 C 350 110, 350 188, 270 210" class="dg83a-slow dg83a-dash dg83a-t2"/>
  <path d="M270 210 C 190 188, 190 110, 270 88" class="dg83a-fast dg83a-dash dg83a-t4"/>
  <line x1="270" y1="58" x2="270" y2="88" class="dg83a-com dg83a-t5"/>

  <g class="dg83a-t1">
    <line x1="222" y1="96" x2="242" y2="116" class="dg83a-blk"/>
    <line x1="242" y1="96" x2="222" y2="116" class="dg83a-blk"/>
  </g>

  <polygon points="330,142 342,142 336,156" class="dg83a-warm"/>
  <polygon points="198,156 210,156 204,142" class="dg83a-cool"/>

  <text x="20" y="130" class="dg83a-lbl dg83a-fl">Fast pathway</text>
  <text x="20" y="147" class="dg83a-sub">conducts fast</text>
  <text x="20" y="162" class="dg83a-sub">long refractory period</text>
  <text x="356" y="118" class="dg83a-lbl dg83a-sl">Slow pathway</text>
  <text x="356" y="135" class="dg83a-sub">conducts slowly</text>
  <text x="356" y="150" class="dg83a-sub">short refractory period</text>

  <g class="dg83a-t3">
    <line x1="270" y1="210" x2="270" y2="248" class="dg83a-com"/>
    <rect x="170" y="248" width="200" height="36" rx="10" class="dg83a-box"/>
    <text x="270" y="271" text-anchor="middle" class="dg83a-lbl">His bundle - ventricles</text>
  </g>
  <text x="282" y="236" class="dg83a-sub">narrow QRS</text>

  <text x="486" y="36" class="dg83a-lbl">Sequence</text>
  <text x="486" y="62" class="dg83a-num">1</text>
  <text x="500" y="62" class="dg83a-step">PAC blocked in</text>
  <text x="500" y="77" class="dg83a-step">refractory fast path</text>
  <text x="486" y="104" class="dg83a-num">2</text>
  <text x="500" y="104" class="dg83a-step">Down slow path</text>
  <text x="500" y="119" class="dg83a-step">(longer PR)</text>
  <text x="486" y="146" class="dg83a-num">3</text>
  <text x="500" y="146" class="dg83a-step">Ventricles fire</text>
  <text x="486" y="173" class="dg83a-num">4</text>
  <text x="500" y="173" class="dg83a-step">Back up fast path</text>
  <text x="486" y="200" class="dg83a-num">5</text>
  <text x="500" y="200" class="dg83a-step">Atria re-excited:</text>
  <text x="500" y="215" class="dg83a-step">loop at 150-250 bpm</text>
  <text x="486" y="248" class="dg83a-sub">Break it at the AV node:</text>
  <text x="486" y="263" class="dg83a-sub">vagal maneuvers, adenosine</text>
</svg>`,
};

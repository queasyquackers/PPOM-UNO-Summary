window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv56-still-sequence"] = {
  title: "Still technique: indirect, then direct",
  caption:
    "The dysfunctional segment starts at neutral, is guided into its position of ease (indirect phase, where compression quiets gamma motor gain to the muscle spindle), " +
    "and then, with the gentle compression of less than 2 lb (1 kg) still held, is carried back across neutral and through the restrictive barrier (direct, articulatory phase). " +
    "It is then passively returned to neutral and retested. The compression arrow travels with the segment because it is maintained the whole way (Slides 5-7, 21).",
  svg: `
<svg viewBox="0 0 620 270" role="img" aria-label="A horizontal range of motion with the position of ease on the left, neutral in the middle and the restrictive barrier on the right. A segment moves from neutral to ease, gains a small downward compression arrow, is carried with compression held through the barrier, and then returns to neutral for retesting.">
  <style>
    .dg56a-track { stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg56a-ease { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg56a-barrier { stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 6 5; }
    .dg56a-tick { stroke: var(--dg-muted); stroke-width: 2; }
    .dg56a-lbl { font-size: 13px; font-weight: 700; }
    .dg56a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg56a-cool { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg56a-warm { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg56a-mut { stroke: var(--dg-muted); fill: var(--dg-muted); }
    .dg56a-path { stroke-width: 3; fill: none; }
    .dg56a-seg { fill: var(--dg-accent); }
    .dg56a-comp { stroke: var(--dg-good); fill: var(--dg-good); }
    .dg56a-mover { animation: dg56amove 8s ease-in-out infinite; }
    .dg56a-press { animation: dg56apress 8s ease-in-out infinite; }
    @keyframes dg56amove {
      0% { transform: translateX(0) }
      18% { transform: translateX(-160px) }
      34% { transform: translateX(-160px) }
      62% { transform: translateX(200px) }
      76% { transform: translateX(200px) }
      94% { transform: translateX(0) }
      100% { transform: translateX(0) }
    }
    @keyframes dg56apress {
      0%, 18% { opacity: 0 }
      24%, 64% { opacity: 1 }
      72%, 100% { opacity: 0 }
    }
  </style>

  <rect x="50" y="70" width="170" height="80" rx="12" class="dg56a-ease"/>
  <text x="60" y="62" class="dg56a-lbl">Position of ease (freedom)</text>
  <text x="60" y="166" class="dg56a-sub">muscle spindle: gamma gain quieted</text>

  <line x1="60" y1="120" x2="570" y2="120" class="dg56a-track"/>
  <line x1="300" y1="104" x2="300" y2="136" class="dg56a-tick"/>
  <text x="282" y="150" class="dg56a-sub">neutral</text>

  <line x1="460" y1="60" x2="460" y2="150" class="dg56a-barrier"/>
  <text x="400" y="52" class="dg56a-lbl">Restrictive barrier</text>
  <text x="440" y="166" class="dg56a-sub">articulatory: joint level</text>

  <g class="dg56a-mover">
    <g class="dg56a-press">
      <line x1="300" y1="76" x2="300" y2="100" class="dg56a-comp" stroke-width="4"/>
      <polygon points="292,98 308,98 300,110" class="dg56a-comp"/>
    </g>
    <circle cx="300" cy="120" r="11" class="dg56a-seg"/>
  </g>

  <line x1="290" y1="196" x2="152" y2="196" class="dg56a-cool dg56a-path"/>
  <polygon points="152,190 140,196 152,202" class="dg56a-cool"/>
  <text x="150" y="190" class="dg56a-sub">1 indirect: to ease</text>

  <line x1="140" y1="222" x2="506" y2="222" class="dg56a-warm dg56a-path"/>
  <polygon points="506,216 518,222 506,228" class="dg56a-warm"/>
  <text x="150" y="216" class="dg56a-sub">2 compress, less than 2 lb (1 kg), held  3 direct: through barrier</text>

  <line x1="510" y1="248" x2="312" y2="248" class="dg56a-mut dg56a-path"/>
  <polygon points="312,242 300,248 312,254" class="dg56a-mut"/>
  <text x="320" y="264" class="dg56a-sub">4 passive return to neutral, retest</text>
</svg>`,
};

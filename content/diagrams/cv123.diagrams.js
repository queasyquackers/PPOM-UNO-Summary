window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv123-facilitation"] = {
  title: "One organ, one segment, many targets",
  caption:
    "Follow the numbers. (1) Afferents from an irritated uterus enter the dorsal horn, where afferents from the colon, bladder and body wall lie close together (Slide 27). " +
    "(2) The shared segment is facilitated. (3) Other organs supplied by those segments are affected, the viscero-visceral reflex and cross-sensitization of Slides 21 and 28, " +
    "and the body wall shows it as TART changes, the viscero-somatic reflex. Musculoskeletal TART changes in the same area can exacerbate the facilitation (Slide 21). Schematic only.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three numbered steps. An irritated uterus sends afferent signals to the dorsal horn at the thoracolumbar segments. The shared segment becomes facilitated. Signals then affect the colon and bladder, which share the segment, and the somatic tissue of the body wall, which shows TART changes.">
  <style>
    .dg123a-organ  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg123a-source { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg123a-cord   { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg123a-seg    { fill: var(--dg-accent); opacity: .85; }
    .dg123a-in     { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg123a-out    { stroke: var(--dg-accent); stroke-width: 3; stroke-linecap: round; }
    .dg123a-inhd   { fill: var(--dg-warm); }
    .dg123a-outhd  { fill: var(--dg-accent); }
    .dg123a-dotin  { fill: var(--dg-warm); }
    .dg123a-dotout { fill: var(--dg-accent); }
    .dg123a-lbl    { font-size: 13px; font-weight: 700; }
    .dg123a-sub    { font-size: 11px; }
    .dg123a-step   { font-size: 12px; font-weight: 700; }
    .dg123a-d1 { animation: dg123ad1 6s ease-in-out infinite; }
    .dg123a-glow { animation: dg123aglow 6s ease-in-out infinite; }
    .dg123a-d2 { animation: dg123ad2 6s ease-in-out infinite; }
    .dg123a-d3 { animation: dg123ad3 6s ease-in-out infinite; }
    .dg123a-d4 { animation: dg123ad4 6s ease-in-out infinite; }
    @keyframes dg123ad1 {
      0%      { transform: translate(0, 0); opacity: 0 }
      4%      { transform: translate(0, 0); opacity: 1 }
      30%     { transform: translate(112px, 0); opacity: 1 }
      34%,100% { transform: translate(112px, 0); opacity: 0 }
    }
    @keyframes dg123aglow {
      0%,28%  { opacity: .2 }
      38%,88% { opacity: .95 }
      100%    { opacity: .2 }
    }
    @keyframes dg123ad2 {
      0%,40%  { transform: translate(0, 0); opacity: 0 }
      44%     { transform: translate(0, 0); opacity: 1 }
      76%     { transform: translate(-112px, -62px); opacity: 1 }
      80%,100% { transform: translate(-112px, -62px); opacity: 0 }
    }
    @keyframes dg123ad3 {
      0%,40%  { transform: translate(0, 0); opacity: 0 }
      44%     { transform: translate(0, 0); opacity: 1 }
      76%     { transform: translate(-112px, 34px); opacity: 1 }
      80%,100% { transform: translate(-112px, 34px); opacity: 0 }
    }
    @keyframes dg123ad4 {
      0%,40%  { transform: translate(0, 0); opacity: 0 }
      44%     { transform: translate(0, 0); opacity: 1 }
      76%     { transform: translate(84px, 0); opacity: 1 }
      80%,100% { transform: translate(84px, 0); opacity: 0 }
    }
  </style>

  <rect x="16" y="36" width="130" height="48" rx="10" class="dg123a-organ"/>
  <text x="81" y="66" text-anchor="middle" class="dg123a-lbl">Colon</text>
  <rect x="16" y="110" width="130" height="48" rx="10" class="dg123a-source"/>
  <text x="81" y="131" text-anchor="middle" class="dg123a-lbl">Uterus</text>
  <text x="81" y="147" text-anchor="middle" class="dg123a-sub">irritated organ</text>
  <rect x="16" y="184" width="130" height="48" rx="10" class="dg123a-organ"/>
  <text x="81" y="214" text-anchor="middle" class="dg123a-lbl">Bladder</text>

  <rect x="270" y="74" width="120" height="120" rx="14" class="dg123a-cord"/>
  <text x="330" y="96" text-anchor="middle" class="dg123a-lbl">Dorsal horn</text>
  <text x="330" y="112" text-anchor="middle" class="dg123a-sub">T10-L2 segments</text>
  <circle cx="330" cy="150" r="24" class="dg123a-seg"/>
  <circle cx="330" cy="150" r="30" fill="none" stroke="var(--dg-warm)" stroke-width="3" class="dg123a-glow"/>
  <text x="330" y="212" text-anchor="middle" class="dg123a-step">2. Segment facilitated</text>

  <rect x="490" y="110" width="134" height="64" rx="10" class="dg123a-organ"/>
  <text x="557" y="133" text-anchor="middle" class="dg123a-lbl">Body wall</text>
  <text x="557" y="150" text-anchor="middle" class="dg123a-sub">TART changes at</text>
  <text x="557" y="164" text-anchor="middle" class="dg123a-sub">the same segments</text>

  <line x1="150" y1="134" x2="258" y2="134" class="dg123a-in"/>
  <polygon points="256,126 270,134 256,142" class="dg123a-inhd"/>
  <circle cx="152" cy="134" r="6" class="dg123a-dotin dg123a-d1"/>
  <text x="206" y="124" text-anchor="middle" class="dg123a-step">1. Afferents</text>

  <line x1="268" y1="124" x2="162" y2="66" class="dg123a-out"/>
  <polygon points="168,57 148,60 160,75" class="dg123a-outhd"/>
  <circle cx="264" cy="122" r="6" class="dg123a-dotout dg123a-d2"/>

  <line x1="268" y1="172" x2="162" y2="204" class="dg123a-out"/>
  <polygon points="160,194 148,208 168,213" class="dg123a-outhd"/>
  <circle cx="264" cy="173" r="6" class="dg123a-dotout dg123a-d3"/>

  <text x="222" y="30" text-anchor="middle" class="dg123a-step">3. Viscero-visceral</text>
  <text x="222" y="45" text-anchor="middle" class="dg123a-sub">neighbors affected</text>

  <line x1="392" y1="134" x2="478" y2="134" class="dg123a-out"/>
  <polygon points="476,126 490,134 476,142" class="dg123a-outhd"/>
  <circle cx="394" cy="134" r="6" class="dg123a-dotout dg123a-d4"/>
  <text x="470" y="88" text-anchor="middle" class="dg123a-step">3. Viscero-somatic</text>
  <text x="470" y="103" text-anchor="middle" class="dg123a-sub">body wall affected</text>

  <text x="320" y="268" text-anchor="middle" class="dg123a-sub">Facilitation by one organ can affect the other organs supplied by the same segments.</text>
</svg>
`
};

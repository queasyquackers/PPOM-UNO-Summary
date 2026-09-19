window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv101-upper-cross"] = {
  title: "The upper cross: two lines, four stations",
  caption:
    "Side view, facing right. One diagonal joins the tight, facilitated type I muscles: pectoralis major and minor in front and upper trapezius with levator scapulae behind. " +
    "The other diagonal joins the weak, inhibited type II muscles: deep neck flexors in front and rhomboids, serratus anterior and lower trapezius behind. " +
    "Weak neck flexors let the head drift forward of the plumb line; find one station and the X predicts the other three (Slides 19-23).",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Side-view outline of the head and upper trunk facing right with two crossing lines. A tight line runs from the pectorals in front up to the upper trapezius and levator scapulae behind. A weak line runs from the deep neck flexors in front down to the rhomboids and lower trapezius behind. The head sits forward of a vertical plumb line.">
  <style>
    .dg101a-body  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg101a-plumb { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 4 5; }
    .dg101a-lbl   { font-size: 13px; font-weight: 700; }
    .dg101a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg101a-tight { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; stroke-dasharray: 14 8; animation: dg101aflow 1.6s linear infinite; }
    .dg101a-weak  { stroke: var(--dg-cool); stroke-width: 6; stroke-linecap: round; stroke-dasharray: 14 8; animation: dg101aflow 1.6s linear infinite reverse; }
    .dg101a-tdot  { fill: var(--dg-warm); animation: dg101apulse 3.2s ease-in-out infinite; }
    .dg101a-wdot  { fill: var(--dg-cool); animation: dg101apulse 3.2s ease-in-out infinite 1.6s; }
    .dg101a-tt    { fill: var(--dg-warm); }
    .dg101a-wt    { fill: var(--dg-cool); }
    .dg101a-head  { animation: dg101adrift 4s ease-in-out infinite; }
    @keyframes dg101aflow  { to { stroke-dashoffset: -44; } }
    @keyframes dg101apulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
    @keyframes dg101adrift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(10px); } }
  </style>

  <line x1="262" y1="20" x2="262" y2="292" class="dg101a-plumb"/>
  <text x="200" y="16" class="dg101a-sub">plumb line</text>

  <path d="M236 108 C 214 150, 206 200, 220 292 L 340 292 C 350 230, 356 180, 332 150 C 318 132, 312 122, 308 108 Z" class="dg101a-body"/>
  <g class="dg101a-head">
    <circle cx="292" cy="70" r="36" class="dg101a-body"/>
    <text x="276" y="74" class="dg101a-sub">head</text>
  </g>

  <line x1="340" y1="172" x2="228" y2="116" class="dg101a-tight"/>
  <line x1="306" y1="114" x2="216" y2="206" class="dg101a-weak"/>

  <circle cx="340" cy="172" r="8" class="dg101a-tdot"/>
  <circle cx="228" cy="116" r="8" class="dg101a-tdot"/>
  <circle cx="306" cy="114" r="8" class="dg101a-wdot"/>
  <circle cx="216" cy="206" r="8" class="dg101a-wdot"/>

  <text x="360" y="112" class="dg101a-lbl dg101a-wt">Deep neck flexors</text>
  <text x="360" y="127" class="dg101a-sub">anterior - weak, inhibited</text>
  <text x="360" y="176" class="dg101a-lbl dg101a-tt">Pectoralis major / minor</text>
  <text x="360" y="191" class="dg101a-sub">anterior - tight, facilitated</text>

  <text x="16" y="104" class="dg101a-lbl dg101a-tt">Upper trapezius,</text>
  <text x="16" y="119" class="dg101a-lbl dg101a-tt">levator scapulae</text>
  <text x="16" y="134" class="dg101a-sub">posterior - tight, facilitated</text>
  <text x="16" y="200" class="dg101a-lbl dg101a-wt">Rhomboids, serratus</text>
  <text x="16" y="215" class="dg101a-lbl dg101a-wt">anterior, lower trapezius</text>
  <text x="16" y="230" class="dg101a-sub">posterior - weak, inhibited</text>

  <line x1="380" y1="240" x2="410" y2="240" class="dg101a-tight"/>
  <text x="420" y="244" class="dg101a-sub">Type I postural line: stretch</text>
  <line x1="380" y1="266" x2="410" y2="266" class="dg101a-weak"/>
  <text x="420" y="270" class="dg101a-sub">Type II phasic line: strengthen</text>
</svg>`,
};

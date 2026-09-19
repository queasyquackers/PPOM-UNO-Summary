window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv68-art-barrier-cycle"] = {
  title: "The articulatory cycle",
  caption:
    "Each row is one stage of an ART treatment on the same joint. The physician carries the joint a short distance through the restrictive barrier for 1-2 seconds, then releases for a similar time back to a point just short of it - not to neutral. " +
    "As the patient responds, the restrictive barrier shifts outward, so each later cycle re-engages the new barrier. Treatment stops at a plateau or at full physiologic range, and the anatomic barrier is never exceeded (Slide 6).",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Three rows show a joint's range of motion from neutral to the anatomic barrier. In each successive row the restrictive barrier sits farther right, and a marker moves back and forth from just short of the barrier to a short distance through it. The anatomic barrier on the right is never crossed.">
  <style>
    .dg68a-axis { stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg68a-free { stroke: var(--dg-accent); stroke-width: 6; stroke-linecap: round; opacity: .55; }
    .dg68a-rb   { stroke: var(--dg-warm); stroke-width: 3; }
    .dg68a-ab   { stroke: var(--dg-ink); stroke-width: 4; }
    .dg68a-pb   { stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 5 4; }
    .dg68a-lbl  { font-size: 12px; }
    .dg68a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg68a-hot  { font-size: 11px; fill: var(--dg-warm); font-weight: 700; }
    .dg68a-dot  { fill: var(--dg-cool); }
    .dg68a-move { animation: dg68aosc 3.2s ease-in-out infinite; }
    .dg68a-d2 { animation-delay: .4s; }
    .dg68a-d3 { animation-delay: .8s; }
    @keyframes dg68aosc {
      0%, 100% { transform: translateX(0); }
      35%, 50% { transform: translateX(34px); }
      85% { transform: translateX(0); }
    }
  </style>

  <text x="60" y="30" class="dg68a-lbl" font-weight="700">Neutral</text>
  <text x="436" y="30" class="dg68a-sub">physiologic</text>
  <text x="530" y="30" class="dg68a-lbl" font-weight="700">Anatomic</text>
  <text x="530" y="44" class="dg68a-sub">never exceeded</text>

  <line x1="505" y1="52" x2="505" y2="250" class="dg68a-pb"/>
  <line x1="548" y1="52" x2="548" y2="250" class="dg68a-ab"/>

  <text x="10" y="94" class="dg68a-sub">Cycle 1</text>
  <line x1="70" y1="90" x2="548" y2="90" class="dg68a-axis"/>
  <line x1="70" y1="90" x2="250" y2="90" class="dg68a-free"/>
  <line x1="250" y1="70" x2="250" y2="110" class="dg68a-rb"/>
  <text x="222" y="126" class="dg68a-hot">restrictive barrier</text>
  <g class="dg68a-move"><circle cx="238" cy="90" r="9" class="dg68a-dot"/></g>

  <text x="10" y="164" class="dg68a-sub">Later</text>
  <line x1="70" y1="160" x2="548" y2="160" class="dg68a-axis"/>
  <line x1="70" y1="160" x2="330" y2="160" class="dg68a-free"/>
  <line x1="250" y1="148" x2="250" y2="172" stroke="var(--dg-line)" stroke-width="2"/>
  <line x1="330" y1="140" x2="330" y2="180" class="dg68a-rb"/>
  <text x="300" y="196" class="dg68a-hot">new barrier</text>
  <g class="dg68a-move dg68a-d2"><circle cx="318" cy="160" r="9" class="dg68a-dot"/></g>

  <text x="10" y="234" class="dg68a-sub">Plateau</text>
  <line x1="70" y1="230" x2="548" y2="230" class="dg68a-axis"/>
  <line x1="70" y1="230" x2="430" y2="230" class="dg68a-free"/>
  <line x1="430" y1="210" x2="430" y2="250" class="dg68a-rb"/>
  <text x="380" y="266" class="dg68a-hot">no further gain - stop, reassess</text>
  <g class="dg68a-move dg68a-d3"><circle cx="418" cy="230" r="9" class="dg68a-dot"/></g>

  <text x="70" y="280" class="dg68a-sub">Marker: 1-2 s stretch through the barrier, similar release to just short of it</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv68-mfr-creep"] = {
  title: "Holding for fascial creep",
  caption:
    "In MFR the hand moves the captured tissue to the chosen barrier and holds there without relieving pressure. After roughly 20-30 seconds tissue compliance changes and the tissue moves through the originally determined barrier - fascial creep. " +
    "The physician follows each change and re-engages; there may be several compliance changes before creep stops, and then the tissue is reassessed (Slide 17).",
  svg: `
<svg viewBox="0 0 620 260" role="img" aria-label="A hand marker holds tissue against a barrier line. After each hold of about 20 to 30 seconds the marker steps forward through the old barrier. Three steps occur, then the marker stops at a final line labelled no further creep, reassess.">
  <style>
    .dg68b-track { stroke: var(--dg-line); stroke-width: 10; stroke-linecap: round; }
    .dg68b-old   { stroke: var(--dg-warm); stroke-width: 3; }
    .dg68b-ghost { stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 4 4; opacity: .7; }
    .dg68b-end   { stroke: var(--dg-good); stroke-width: 3; }
    .dg68b-hand  { fill: var(--dg-accent); }
    .dg68b-lbl   { font-size: 12px; }
    .dg68b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg68b-hold  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg68b-go    { animation: dg68bstep 9s ease-in-out infinite; }
    @keyframes dg68bstep {
      0%, 22% { transform: translateX(0); }
      28%, 50% { transform: translateX(80px); }
      56%, 78% { transform: translateX(150px); }
      84%, 100% { transform: translateX(200px); }
    }
  </style>

  <text x="40" y="36" class="dg68b-lbl" font-weight="700">Ease</text>
  <text x="520" y="36" class="dg68b-lbl" font-weight="700">Bind</text>
  <line x1="40" y1="110" x2="580" y2="110" class="dg68b-track"/>

  <line x1="200" y1="76" x2="200" y2="144" class="dg68b-old"/>
  <text x="150" y="68" class="dg68b-lbl">original barrier</text>
  <line x1="280" y1="84" x2="280" y2="136" class="dg68b-ghost"/>
  <line x1="350" y1="84" x2="350" y2="136" class="dg68b-ghost"/>
  <line x1="400" y1="76" x2="400" y2="144" class="dg68b-end"/>
  <text x="372" y="68" class="dg68b-lbl">no further creep</text>

  <g class="dg68b-go">
    <rect x="170" y="94" width="26" height="32" rx="6" class="dg68b-hand"/>
  </g>

  <rect x="120" y="170" width="80" height="26" rx="5" class="dg68b-hold"/>
  <text x="130" y="187" class="dg68b-sub">hold 20-30 s</text>
  <rect x="210" y="170" width="70" height="26" rx="5" class="dg68b-hold"/>
  <text x="222" y="187" class="dg68b-sub">creep 1</text>
  <rect x="290" y="170" width="60" height="26" rx="5" class="dg68b-hold"/>
  <text x="300" y="187" class="dg68b-sub">creep 2</text>
  <rect x="360" y="170" width="60" height="26" rx="5" class="dg68b-hold"/>
  <text x="368" y="187" class="dg68b-sub">creep 3</text>
  <text x="440" y="187" class="dg68b-lbl" font-weight="700">reassess</text>

  <text x="40" y="232" class="dg68b-sub">Pressure is never relieved during the hold; skin moves with the hand, one level lighter than soft tissue.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv146-abcde-read"] = {
  title: "The ABCDE film read",
  caption:
    "The sequence Dr. Mazzie wants you to use when you first start reading films. Each letter lights up the part of the film it checks, in order: " +
    "airway, bones, cardiac contour, diaphragm and costophrenic angles, then everything else. " +
    "The last step is where lung markings should taper out by the outer one-third (dashed band). Rib counts are his values (Slide 3 film).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Schematic frontal chest film beside the five steps of the ABCDE read. A, airway straight down to the bifurcation. B, bones, count the posterior ribs, nine to ten is a good breath in. C, cardiac contour not enlarged. D, diaphragm, costophrenic angles sharp on both sides. E, everything else, lung markings taper out by the outer one third.">
  <style>
    .dg146a-lung { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg146a-air  { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; }
    .dg146a-rib  { fill: none; stroke: var(--dg-muted); stroke-width: 2.5; stroke-linecap: round; }
    .dg146a-card { fill: var(--dg-line); stroke: var(--dg-cool); stroke-width: 3; }
    .dg146a-dia  { fill: none; stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; }
    .dg146a-cp   { fill: var(--dg-warm); }
    .dg146a-band { fill: none; stroke: var(--dg-good); stroke-width: 2; stroke-dasharray: 5 4; }
    .dg146a-mk   { fill: none; stroke: var(--dg-good); stroke-width: 1.5; stroke-linecap: round; }
    .dg146a-disc { fill: var(--dg-surface); stroke-width: 2.5; }
    .dg146a-ltr  { font-size: 15px; font-weight: 700; text-anchor: middle; }
    .dg146a-ttl  { font-size: 14px; font-weight: 700; }
    .dg146a-sub  { font-size: 11.5px; fill: var(--dg-muted); }
    .dg146a-tag  { font-size: 12px; font-weight: 700; fill: var(--dg-muted); }
    .dg146a-s1, .dg146a-s2, .dg146a-s3, .dg146a-s4, .dg146a-s5 {
      animation: dg146astep 12.5s linear infinite both;
    }
    .dg146a-s2 { animation-delay: 2.5s; }
    .dg146a-s3 { animation-delay: 5s; }
    .dg146a-s4 { animation-delay: 7.5s; }
    .dg146a-s5 { animation-delay: 10s; }
    @keyframes dg146astep {
      0%   { opacity: .28 }
      3%   { opacity: 1 }
      19%  { opacity: 1 }
      23%  { opacity: .28 }
      100% { opacity: .28 }
    }
  </style>

  <path d="M150,62 C110,62 60,120 50,244 C86,252 128,246 150,226 Z" class="dg146a-lung"/>
  <path d="M180,62 C220,62 270,120 280,244 C244,252 202,246 180,226 Z" class="dg146a-lung"/>

  <text x="28" y="30" class="dg146a-tag">R</text>
  <text x="294" y="30" class="dg146a-tag">L</text>

  <g class="dg146a-s5">
    <path d="M122,84 C92,110 72,168 66,240" class="dg146a-band"/>
    <path d="M208,84 C238,110 258,168 264,240" class="dg146a-band"/>
    <path d="M146,120 L122,132 L100,162 M122,132 L108,124 M146,170 L120,180 L96,204" class="dg146a-mk"/>
    <path d="M196,120 L216,132 L232,162 M216,132 L230,124" class="dg146a-mk"/>
  </g>

  <g class="dg146a-s2">
    <path d="M148,80 C112,82 84,106 72,136" class="dg146a-rib"/>
    <path d="M148,106 C110,108 78,132 64,168" class="dg146a-rib"/>
    <path d="M148,132 C108,136 72,160 58,200" class="dg146a-rib"/>
    <path d="M148,158 C108,164 70,188 56,226" class="dg146a-rib"/>
    <path d="M182,80 C218,82 246,106 258,136" class="dg146a-rib"/>
    <path d="M182,106 C220,108 252,132 266,168" class="dg146a-rib"/>
    <path d="M182,132 C222,136 258,160 272,200" class="dg146a-rib"/>
    <path d="M182,158 C222,164 260,188 274,226" class="dg146a-rib"/>
  </g>

  <g class="dg146a-s3">
    <path d="M150,132 C138,150 132,176 142,214 C160,232 216,236 232,214 C240,186 214,144 180,126 C168,122 158,124 150,132 Z" class="dg146a-card"/>
  </g>

  <g class="dg146a-s1">
    <path d="M165,14 L165,96 M165,96 L146,122 M165,96 L186,122" class="dg146a-air"/>
  </g>

  <g class="dg146a-s4">
    <path d="M50,244 C86,214 126,216 150,232" class="dg146a-dia"/>
    <path d="M180,232 C206,216 244,214 280,244" class="dg146a-dia"/>
    <circle cx="50" cy="244" r="6" class="dg146a-cp"/>
    <circle cx="280" cy="244" r="6" class="dg146a-cp"/>
  </g>

  <g class="dg146a-s1">
    <circle cx="344" cy="42" r="15" class="dg146a-disc" stroke="var(--dg-accent)"/>
    <text x="344" y="47" class="dg146a-ltr">A</text>
    <text x="370" y="38" class="dg146a-ttl">Airway</text>
    <text x="370" y="54" class="dg146a-sub">Straight, bifurcation into both main bronchi</text>
  </g>
  <g class="dg146a-s2">
    <circle cx="344" cy="96" r="15" class="dg146a-disc" stroke="var(--dg-muted)"/>
    <text x="344" y="101" class="dg146a-ltr">B</text>
    <text x="370" y="92" class="dg146a-ttl">Bones</text>
    <text x="370" y="108" class="dg146a-sub">Count posterior ribs: 9-10 is a good breath in</text>
  </g>
  <g class="dg146a-s3">
    <circle cx="344" cy="150" r="15" class="dg146a-disc" stroke="var(--dg-cool)"/>
    <text x="344" y="155" class="dg146a-ltr">C</text>
    <text x="370" y="146" class="dg146a-ttl">Cardiac</text>
    <text x="370" y="162" class="dg146a-sub">Contour: make sure it is not enlarged</text>
  </g>
  <g class="dg146a-s4">
    <circle cx="344" cy="204" r="15" class="dg146a-disc" stroke="var(--dg-warm)"/>
    <text x="344" y="209" class="dg146a-ltr">D</text>
    <text x="370" y="200" class="dg146a-ttl">Diaphragm</text>
    <text x="370" y="216" class="dg146a-sub">Costophrenic angles sharp on both sides</text>
  </g>
  <g class="dg146a-s5">
    <circle cx="344" cy="258" r="15" class="dg146a-disc" stroke="var(--dg-good)"/>
    <text x="344" y="263" class="dg146a-ltr">E</text>
    <text x="370" y="254" class="dg146a-ttl">Everything else</text>
    <text x="370" y="270" class="dg146a-sub">Lung markings taper out by the outer one-third</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv146-silhouette-lobes"] = {
  title: "Which border disappears",
  caption:
    "Filled alveoli are soft tissue density, so the border they touch vanishes. Each number lights a lobe and fades the border it touches, as on the deck's yellow and orange diagrams (Slides 44-59). " +
    "Read the film as you would on a viewbox: the patient's right is on your left. Nuance from Slide 51: only the medial segment of the middle lobe touches the right heart border, so a lateral segment pneumonia can spare it.",
  svg: `
<svg viewBox="0 0 640 310" role="img" aria-label="Schematic frontal chest with five numbered consolidations. One, right middle lobe, loses the right heart border. Two, lingula, loses the left heart border. Three, left lower lobe, loses the spine and posterior diaphragm. Four, right lower lobe, loses the right hemidiaphragm. Five, right upper lobe, loses the medial mediastinum.">
  <style>
    .dg146b-lung { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg146b-heart { fill: var(--dg-line); }
    .dg146b-edge { fill: none; stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg146b-blob { fill: var(--dg-accent); opacity: .5; }
    .dg146b-num  { font-size: 13px; font-weight: 700; text-anchor: middle; }
    .dg146b-disc { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg146b-tag  { font-size: 12px; font-weight: 700; fill: var(--dg-muted); }
    .dg146b-ttl  { font-size: 13.5px; font-weight: 700; }
    .dg146b-sub  { font-size: 11.5px; fill: var(--dg-muted); }
    .dg146b-h1 { font-size: 11px; font-weight: 700; fill: var(--dg-muted); letter-spacing: .05em; }
    .dg146b-b1, .dg146b-b2, .dg146b-b3, .dg146b-b4, .dg146b-b5 {
      animation: dg146bblob 15s linear infinite both;
    }
    .dg146b-e1, .dg146b-e2, .dg146b-e3, .dg146b-e4, .dg146b-e5 {
      animation: dg146bedge 15s linear infinite both;
    }
    .dg146b-r1, .dg146b-r2, .dg146b-r3, .dg146b-r4, .dg146b-r5 {
      animation: dg146brow 15s linear infinite both;
    }
    .dg146b-b2, .dg146b-e2, .dg146b-r2 { animation-delay: 3s; }
    .dg146b-b3, .dg146b-e3, .dg146b-r3 { animation-delay: 6s; }
    .dg146b-b4, .dg146b-e4, .dg146b-r4 { animation-delay: 9s; }
    .dg146b-b5, .dg146b-e5, .dg146b-r5 { animation-delay: 12s; }
    @keyframes dg146bblob {
      0%   { opacity: .12 }
      4%   { opacity: .9 }
      17%  { opacity: .9 }
      20%  { opacity: .12 }
      100% { opacity: .12 }
    }
    @keyframes dg146bedge {
      0%   { opacity: 1 }
      4%   { opacity: .06 }
      17%  { opacity: .06 }
      20%  { opacity: 1 }
      100% { opacity: 1 }
    }
    @keyframes dg146brow {
      0%   { opacity: .4 }
      3%   { opacity: 1 }
      17%  { opacity: 1 }
      20%  { opacity: .4 }
      100% { opacity: .4 }
    }
  </style>

  <path d="M150,28 C104,30 54,104 42,262 C82,276 134,268 158,240 L158,28 Z" class="dg146b-lung"/>
  <path d="M182,28 C228,30 284,104 298,262 C260,276 206,268 182,240 L182,28 Z" class="dg146b-lung"/>
  <text x="22" y="24" class="dg146b-tag">R</text>
  <text x="308" y="24" class="dg146b-tag">L</text>

  <path d="M152,118 C136,146 130,178 142,218 C164,240 224,244 246,214 C252,180 216,132 184,112 C172,106 160,108 152,118 Z" class="dg146b-heart"/>

  <path d="M102,64 C124,48 148,52 152,62 L150,116 C136,122 114,122 94,116 C90,98 94,78 102,64 Z" class="dg146b-blob dg146b-b5"/>
  <path d="M100,144 C118,134 130,134 138,142 C128,168 128,192 136,214 C118,204 94,174 100,144 Z" class="dg146b-blob dg146b-b1"/>
  <path d="M60,244 C60,210 84,206 100,192 C118,204 132,216 150,234 C118,226 88,226 60,244 Z" class="dg146b-blob dg146b-b4"/>
  <path d="M206,118 C232,124 254,160 256,204 C248,210 246,190 236,166 C228,146 216,130 206,118 Z" class="dg146b-blob dg146b-b2"/>
  <path d="M176,238 L176,176 C196,190 214,216 222,240 C208,244 192,246 176,238 Z" class="dg146b-blob dg146b-b3"/>

  <path d="M152,118 C136,146 130,178 142,218" class="dg146b-edge dg146b-e1"/>
  <path d="M184,112 C216,132 252,180 246,214" class="dg146b-edge dg146b-e2"/>
  <path d="M174,172 L174,240 M178,241 C192,246 206,244 224,240" class="dg146b-edge dg146b-e3"/>
  <path d="M46,262 C86,224 126,226 156,240" class="dg146b-edge dg146b-e4"/>
  <path d="M152,56 L152,112" class="dg146b-edge dg146b-e5"/>

  <circle cx="114" cy="172" r="10" class="dg146b-disc"/><text x="114" y="177" class="dg146b-num">1</text>
  <circle cx="246" cy="146" r="10" class="dg146b-disc"/><text x="246" y="151" class="dg146b-num">2</text>
  <circle cx="196" cy="214" r="10" class="dg146b-disc"/><text x="196" y="219" class="dg146b-num">3</text>
  <circle cx="88" cy="228" r="10" class="dg146b-disc"/><text x="88" y="233" class="dg146b-num">4</text>
  <circle cx="122" cy="88" r="10" class="dg146b-disc"/><text x="122" y="93" class="dg146b-num">5</text>

  <text x="346" y="26" class="dg146b-h1">LOBE, THEN THE BORDER IT ERASES</text>

  <g class="dg146b-r1">
    <text x="346" y="58" class="dg146b-ttl">1  Right middle lobe</text>
    <text x="346" y="74" class="dg146b-sub">Right heart border; overlies heart on lateral</text>
  </g>
  <g class="dg146b-r2">
    <text x="346" y="110" class="dg146b-ttl">2  Lingula</text>
    <text x="346" y="126" class="dg146b-sub">Left heart border; overlies heart on lateral</text>
  </g>
  <g class="dg146b-r3">
    <text x="346" y="162" class="dg146b-ttl">3  Left lower lobe</text>
    <text x="346" y="178" class="dg146b-sub">Spine and posterior diaphragm; heart border stays</text>
  </g>
  <g class="dg146b-r4">
    <text x="346" y="214" class="dg146b-ttl">4  Right lower lobe</text>
    <text x="346" y="230" class="dg146b-sub">Right hemidiaphragm; can climb to the mid-lung</text>
  </g>
  <g class="dg146b-r5">
    <text x="346" y="266" class="dg146b-ttl">5  Right upper lobe</text>
    <text x="346" y="282" class="dg146b-sub">Medial part of the mediastinum</text>
  </g>
</svg>`,
};

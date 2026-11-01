window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv114-rib-axis"] = {
  title: "One rotated vertebra swaps rib motion",
  caption:
    "Viewed from above, as in the half-and-half Kapandji figure on Slide 14: a lower rib on the left of each panel and an upper rib on the right. " +
    "The angle of a rib's articulations with the spine sets its motion, so the lower rib swings laterally (bucket handle) and the upper rib swings anteriorly (pump handle). " +
    "Rotate the vertebra and both angles change: the lower rib lines up for pump handle motion and the upper rib for bucket handle motion, while the neighboring ribs keep moving normally. " +
    "That mismatch is the dyscoordinate pattern you see as one little spot with the whole chest moving around it. Schematic only; the lecture gives no angle values.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels viewed from above. With a neutral vertebra the lower rib swings laterally as a bucket handle and the upper rib swings anteriorly as a pump handle. With a rotated vertebra the lower rib moves anteriorly and the upper rib moves laterally, each out of step with its neighbors.">
  <style>
    .dg114a-rest { fill: none; stroke: var(--dg-line); stroke-width: 6; stroke-linecap: round; }
    .dg114a-rib  { fill: none; stroke: var(--dg-accent); stroke-width: 6; stroke-linecap: round; }
    .dg114a-bad  { fill: none; stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; }
    .dg114a-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg114a-axis { stroke: var(--dg-ink); stroke-width: 2; stroke-dasharray: 5 4; }
    .dg114a-div  { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg114a-good { stroke: var(--dg-accent); fill: var(--dg-accent); }
    .dg114a-warn { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg114a-shaft { stroke-width: 4; stroke-linecap: round; }
    .dg114a-head { font-size: 13px; font-weight: 700; }
    .dg114a-lbl  { font-size: 12px; font-weight: 700; }
    .dg114a-sub  { font-size: 11px; }
    .dg114a-left  { animation: dg114aleft 3.2s ease-in-out infinite; }
    .dg114a-right { animation: dg114aright 3.2s ease-in-out infinite; }
    .dg114a-down  { animation: dg114adown 3.2s ease-in-out infinite; }
    @keyframes dg114aleft  { 0%,100% { transform: translateX(0) } 50% { transform: translateX(-10px) } }
    @keyframes dg114aright { 0%,100% { transform: translateX(0) } 50% { transform: translateX(10px) } }
    @keyframes dg114adown  { 0%,100% { transform: translateY(0) } 50% { transform: translateY(10px) } }
  </style>

  <line x1="320" y1="6" x2="320" y2="272" class="dg114a-div"/>
  <text x="160" y="14" text-anchor="middle" class="dg114a-head">Neutral vertebra</text>
  <text x="480" y="14" text-anchor="middle" class="dg114a-head">Rotated vertebra</text>

  <path d="M118 78 C30 70 10 215 130 238" class="dg114a-rest"/>
  <path d="M202 78 C290 70 305 215 190 236" class="dg114a-rest"/>
  <path d="M118 78 C30 70 10 215 130 238" class="dg114a-rib dg114a-left"/>
  <path d="M202 78 C290 70 305 215 190 236" class="dg114a-rib dg114a-down"/>
  <g>
    <rect x="153" y="24" width="14" height="34" rx="6" class="dg114a-bone"/>
    <rect x="110" y="50" width="100" height="14" rx="7" class="dg114a-bone"/>
    <circle cx="160" cy="88" r="22" class="dg114a-bone"/>
  </g>
  <line x1="96" y1="36" x2="140" y2="112" class="dg114a-axis"/>
  <line x1="240" y1="52" x2="164" y2="96" class="dg114a-axis"/>
  <text x="105" y="150" text-anchor="middle" class="dg114a-lbl">Lower rib</text>
  <text x="105" y="166" text-anchor="middle" class="dg114a-sub">bucket handle</text>
  <text x="105" y="181" text-anchor="middle" class="dg114a-sub">lateral swing</text>
  <text x="216" y="150" text-anchor="middle" class="dg114a-lbl">Upper rib</text>
  <text x="216" y="166" text-anchor="middle" class="dg114a-sub">pump handle</text>
  <text x="216" y="181" text-anchor="middle" class="dg114a-sub">anterior swing</text>
  <line x1="40" y1="118" x2="22" y2="118" class="dg114a-good dg114a-shaft"/>
  <polygon points="24,110 8,118 24,126" class="dg114a-good"/>
  <line x1="225" y1="242" x2="225" y2="258" class="dg114a-good dg114a-shaft"/>
  <polygon points="217,256 225,272 233,256" class="dg114a-good"/>

  <path d="M438 78 C350 70 330 215 450 238" class="dg114a-rest"/>
  <path d="M522 78 C610 70 625 215 510 236" class="dg114a-rest"/>
  <path d="M438 78 C350 70 330 215 450 238" class="dg114a-bad dg114a-down"/>
  <path d="M522 78 C610 70 625 215 510 236" class="dg114a-bad dg114a-right"/>
  <g transform="rotate(-30 480 70)">
    <rect x="473" y="24" width="14" height="34" rx="6" class="dg114a-bone"/>
    <rect x="430" y="50" width="100" height="14" rx="7" class="dg114a-bone"/>
    <circle cx="480" cy="88" r="22" class="dg114a-bone"/>
  </g>
  <line x1="400" y1="52" x2="476" y2="96" class="dg114a-axis"/>
  <line x1="544" y1="36" x2="500" y2="112" class="dg114a-axis"/>
  <text x="425" y="150" text-anchor="middle" class="dg114a-lbl">Lower rib</text>
  <text x="425" y="166" text-anchor="middle" class="dg114a-sub">now aligned</text>
  <text x="425" y="181" text-anchor="middle" class="dg114a-sub">for pump handle</text>
  <text x="536" y="150" text-anchor="middle" class="dg114a-lbl">Upper rib</text>
  <text x="536" y="166" text-anchor="middle" class="dg114a-sub">now aligned</text>
  <text x="536" y="181" text-anchor="middle" class="dg114a-sub">for bucket handle</text>
  <line x1="395" y1="246" x2="395" y2="258" class="dg114a-warn dg114a-shaft"/>
  <polygon points="387,256 395,272 403,256" class="dg114a-warn"/>
  <line x1="604" y1="118" x2="618" y2="118" class="dg114a-warn dg114a-shaft"/>
  <polygon points="616,110 632,118 616,126" class="dg114a-warn"/>

  <text x="320" y="292" text-anchor="middle" class="dg114a-sub">Viewed from above, anterior at the bottom. Dashed lines mark the rib axes.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv114-paradoxical-ribs"] = {
  title: "Paradoxical motion of the ribs",
  caption:
    "A domed diaphragm has vertical fibers (Slide 28), so contraction lowers the dome and swings the lower ribs out, increasing the transverse diameter. " +
    "When the diaphragm is flattened, as in asthma and COPD, that lateral effect is lost and contraction can pull the rib cage inward: paradoxical motion of the ribs (Slide 30). " +
    "Dotted lines mark the resting position, as on the slide. Do not confuse this with paradoxical motion of the belly, which is a sign of diaphragm fatigue.",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Two front-view chest outlines. With a domed diaphragm, contraction lowers the dome and the lower ribs swing outward. With a flattened diaphragm, contraction pulls the rib cage inward, which is called paradoxical motion of the ribs.">
  <style>
    .dg114b-rest { fill: none; stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 5 5; }
    .dg114b-wall { fill: none; stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    .dg114b-dome { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-linecap: round; }
    .dg114b-flat { fill: none; stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg114b-div  { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg114b-good { stroke: var(--dg-accent); fill: var(--dg-accent); }
    .dg114b-warn { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg114b-shaft { stroke-width: 4; stroke-linecap: round; }
    .dg114b-head { font-size: 13px; font-weight: 700; }
    .dg114b-lbl  { font-size: 12px; font-weight: 700; }
    .dg114b-sub  { font-size: 11px; }
    .dg114b-aL { transform-origin: 140px 40px; animation: dg114baL 3.6s ease-in-out infinite; }
    .dg114b-aR { transform-origin: 190px 40px; animation: dg114baR 3.6s ease-in-out infinite; }
    .dg114b-aD { transform-origin: 165px 215px; animation: dg114baD 3.6s ease-in-out infinite; }
    .dg114b-bL { transform-origin: 450px 40px; animation: dg114bbL 3.6s ease-in-out infinite; }
    .dg114b-bR { transform-origin: 500px 40px; animation: dg114bbR 3.6s ease-in-out infinite; }
    .dg114b-bD { transform-origin: 475px 205px; animation: dg114bbD 3.6s ease-in-out infinite; }
    @keyframes dg114baL { 0%,100% { transform: rotate(-3.9deg) } 50% { transform: rotate(0deg) } }
    @keyframes dg114baR { 0%,100% { transform: rotate(3.9deg) } 50% { transform: rotate(0deg) } }
    @keyframes dg114baD { 0%,100% { transform: scale(.897, 1.5) } 50% { transform: scale(1, 1) } }
    @keyframes dg114bbL { 0%,100% { transform: rotate(4.8deg) } 50% { transform: rotate(0deg) } }
    @keyframes dg114bbR { 0%,100% { transform: rotate(-4.8deg) } 50% { transform: rotate(0deg) } }
    @keyframes dg114bbD { 0%,100% { transform: scaleX(1.135) } 50% { transform: scaleX(1) } }
  </style>

  <line x1="320" y1="6" x2="320" y2="262" class="dg114b-div"/>
  <text x="165" y="16" text-anchor="middle" class="dg114b-head">Domed diaphragm</text>
  <text x="475" y="16" text-anchor="middle" class="dg114b-head">Flattened diaphragm</text>

  <path d="M140 40 Q165 28 190 40" class="dg114b-wall"/>
  <path d="M140 40 C95 70 65 140 60 215" class="dg114b-rest"/>
  <path d="M190 40 C235 70 265 140 270 215" class="dg114b-rest"/>
  <path d="M60 215 Q165 95 270 215" class="dg114b-rest"/>
  <path d="M140 40 C91 70 55 140 48 215" class="dg114b-wall dg114b-aL"/>
  <path d="M190 40 C239 70 275 140 282 215" class="dg114b-wall dg114b-aR"/>
  <path d="M48 215 Q165 135 282 215" class="dg114b-dome dg114b-aD"/>
  <line x1="165" y1="112" x2="165" y2="132" class="dg114b-good dg114b-shaft"/>
  <polygon points="157,130 165,146 173,130" class="dg114b-good"/>
  <line x1="42" y1="190" x2="28" y2="190" class="dg114b-good dg114b-shaft"/>
  <polygon points="30,182 14,190 30,198" class="dg114b-good"/>
  <line x1="288" y1="190" x2="302" y2="190" class="dg114b-good dg114b-shaft"/>
  <polygon points="300,182 316,190 300,198" class="dg114b-good"/>
  <text x="165" y="206" text-anchor="middle" class="dg114b-sub">vertical fibers</text>
  <text x="165" y="238" text-anchor="middle" class="dg114b-lbl">Dome descends, lower ribs swing out</text>
  <text x="165" y="256" text-anchor="middle" class="dg114b-sub">Transverse diameter increases</text>

  <path d="M450 40 Q475 28 500 40" class="dg114b-wall"/>
  <path d="M450 40 C397 70 363 140 357 205" class="dg114b-rest"/>
  <path d="M500 40 C553 70 587 140 593 205" class="dg114b-rest"/>
  <path d="M357 205 Q475 190 593 205" class="dg114b-rest"/>
  <path d="M450 40 C403 70 375 140 371 205" class="dg114b-wall dg114b-bL"/>
  <path d="M500 40 C547 70 575 140 579 205" class="dg114b-wall dg114b-bR"/>
  <path d="M371 205 Q475 190 579 205" class="dg114b-flat dg114b-bD"/>
  <line x1="330" y1="175" x2="344" y2="175" class="dg114b-warn dg114b-shaft"/>
  <polygon points="342,167 358,175 342,183" class="dg114b-warn"/>
  <line x1="620" y1="175" x2="606" y2="175" class="dg114b-warn dg114b-shaft"/>
  <polygon points="608,167 592,175 608,183" class="dg114b-warn"/>
  <text x="475" y="170" text-anchor="middle" class="dg114b-sub">fibers no longer vertical</text>
  <text x="475" y="238" text-anchor="middle" class="dg114b-lbl">Contraction pulls the rib cage inward</text>
  <text x="475" y="256" text-anchor="middle" class="dg114b-sub">Paradoxical motion of the ribs (dotted = rest)</text>
</svg>`,
};

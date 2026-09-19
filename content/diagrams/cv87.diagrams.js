window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv87-pth-loop"] = {
  title: "PTH: the calcium feedback loop",
  caption:
    "A fall in ionized calcium is sensed by the calcium-sensing receptor on the parathyroid, which releases PTH. " +
    "PTH raises plasma calcium at three sites at once: osteoclastic bone resorption, active distal nephron reabsorption through TRPV5 " +
    "(while phosphate is lost in the urine), and gut absorption through the 1,25-dihydroxyvitamin D the kidney makes. " +
    "The dashed loop is the key to every workup in this lecture: once calcium is high, a normal gland turns PTH down, so hypercalcemia with a low PTH means the cause is outside the parathyroid.",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Feedback loop: falling ionized calcium is sensed by the parathyroid calcium-sensing receptor, which releases PTH. PTH acts on bone, kidney and gut to raise calcium, and the risen calcium feeds back to suppress PTH.">
  <style>
    .dg87a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg87a-key  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg87a-hd   { font-size: 13px; font-weight: 700; }
    .dg87a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg87a-arr  { stroke: var(--dg-accent); stroke-width: 3; fill: none; }
    .dg87a-tip  { fill: var(--dg-accent); }
    .dg87a-fb   { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; stroke-dasharray: 8 6; animation: dg87aMarch 1.6s linear infinite; }
    .dg87a-fbt  { fill: var(--dg-warm); }
    .dg87a-fbl  { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg87a-s1 { animation: dg87aPulse 4s ease-in-out infinite; }
    .dg87a-s2 { animation: dg87aPulse 4s ease-in-out infinite .6s; }
    .dg87a-s3 { animation: dg87aPulse 4s ease-in-out infinite 1.2s; }
    @keyframes dg87aPulse { 0%,100% { opacity: .5 } 40% { opacity: 1 } }
    @keyframes dg87aMarch { to { stroke-dashoffset: -28; } }
  </style>

  <rect x="15" y="110" width="120" height="50" rx="10" class="dg87a-box"/>
  <text x="75" y="131" text-anchor="middle" class="dg87a-hd">Ionized Ca</text>
  <text x="75" y="149" text-anchor="middle" class="dg87a-sub">falls</text>

  <rect x="165" y="110" width="120" height="50" rx="10" class="dg87a-box"/>
  <text x="225" y="131" text-anchor="middle" class="dg87a-hd">Parathyroid</text>
  <text x="225" y="149" text-anchor="middle" class="dg87a-sub">CaSR senses it</text>

  <rect x="315" y="115" width="70" height="40" rx="10" class="dg87a-key"/>
  <text x="350" y="140" text-anchor="middle" class="dg87a-hd">PTH</text>

  <g class="dg87a-s1">
    <line x1="135" y1="135" x2="155" y2="135" class="dg87a-arr"/>
    <polygon points="155,129 165,135 155,141" class="dg87a-tip"/>
    <line x1="285" y1="135" x2="305" y2="135" class="dg87a-arr"/>
    <polygon points="305,129 315,135 305,141" class="dg87a-tip"/>
  </g>

  <g class="dg87a-s2">
    <line x1="385" y1="130" x2="414" y2="62" class="dg87a-arr"/>
    <polygon points="409,58 422,54 419,67" class="dg87a-tip"/>
    <line x1="385" y1="135" x2="413" y2="135" class="dg87a-arr"/>
    <polygon points="413,129 423,135 413,141" class="dg87a-tip"/>
    <line x1="385" y1="140" x2="414" y2="208" class="dg87a-arr"/>
    <polygon points="419,203 422,216 409,212" class="dg87a-tip"/>
  </g>

  <g class="dg87a-s3">
    <rect x="425" y="30" width="185" height="52" rx="10" class="dg87a-box"/>
    <text x="437" y="51" class="dg87a-hd">Bone</text>
    <text x="437" y="70" class="dg87a-sub">osteoclasts resorb, Ca released</text>

    <rect x="425" y="104" width="185" height="62" rx="10" class="dg87a-box"/>
    <text x="437" y="124" class="dg87a-hd">Kidney</text>
    <text x="437" y="141" class="dg87a-sub">distal TRPV5 reabsorbs Ca</text>
    <text x="437" y="157" class="dg87a-sub">makes 1,25-D; phosphate lost</text>

    <rect x="425" y="188" width="185" height="52" rx="10" class="dg87a-box"/>
    <text x="437" y="209" class="dg87a-hd">Gut</text>
    <text x="437" y="228" class="dg87a-sub">1,25-D raises TRPV6 uptake</text>
  </g>

  <path d="M517 240 L517 282 L225 282 L225 172" class="dg87a-fb"/>
  <polygon points="219,174 225,162 231,174" class="dg87a-fbt"/>
  <text x="250" y="274" class="dg87a-fbl">Ca rises: a normal gland turns PTH down</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv87-nephron-sites"] = {
  title: "Where calcium and magnesium are reclaimed",
  caption:
    "Follow the filtrate from proximal tubule to distal nephron; arrow thickness is the share of filtered load reabsorbed in each segment, using this lecture's numbers (Slides 6 and 38). " +
    "Calcium is mostly reclaimed passively in the proximal tubule, but only the distal step (TRPV5) is active and regulated. " +
    "Magnesium is the mirror image: about 70% is taken back in the thick ascending limb through claudin-16 and claudin-19, which is why loop diuretics and hypercalcemia waste magnesium. " +
    "The slide's calcium percentages add up to slightly more than 100; they are shown as given.",
  svg: `
<svg viewBox="0 0 620 270" role="img" aria-label="Two rows of nephron segments. Calcium: 70 percent proximal tubule, 20 percent thick ascending limb, 15 percent distal nephron (active, TRPV5). Magnesium: 20 percent proximal tubule, 70 percent thick ascending limb, 10 percent distal tubule.">
  <style>
    .dg87b-tube { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg87b-div  { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg87b-seg  { font-size: 12px; font-weight: 700; }
    .dg87b-row  { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg87b-val  { font-size: 13px; font-weight: 700; }
    .dg87b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg87b-ca   { stroke: var(--dg-cool); stroke-linecap: round; }
    .dg87b-mg   { stroke: var(--dg-good); stroke-linecap: round; }
    .dg87b-act  { stroke: var(--dg-warm); stroke-linecap: round; }
    .dg87b-flow { fill: var(--dg-muted); font-size: 11px; }
    .dg87b-p1 { animation: dg87bPulse 3.6s ease-in-out infinite; }
    .dg87b-p2 { animation: dg87bPulse 3.6s ease-in-out infinite 1.2s; }
    .dg87b-p3 { animation: dg87bPulse 3.6s ease-in-out infinite 2.4s; }
    @keyframes dg87bPulse { 0%,100% { opacity: .45 } 30% { opacity: 1 } }
  </style>

  <text x="115" y="24" text-anchor="middle" class="dg87b-seg">Proximal tubule</text>
  <text x="315" y="24" text-anchor="middle" class="dg87b-seg">Thick ascending limb</text>
  <text x="510" y="24" text-anchor="middle" class="dg87b-seg">Distal nephron</text>
  <text x="600" y="44" text-anchor="end" class="dg87b-flow">filtrate flows left to right</text>

  <text x="20" y="66" class="dg87b-row">Calcium</text>
  <rect x="20" y="110" width="580" height="26" rx="13" class="dg87b-tube"/>
  <line x1="215" y1="110" x2="215" y2="136" class="dg87b-div"/>
  <line x1="415" y1="110" x2="415" y2="136" class="dg87b-div"/>
  <g class="dg87b-p1">
    <line x1="115" y1="106" x2="115" y2="74" stroke-width="14" class="dg87b-ca"/>
    <text x="132" y="88" class="dg87b-val">70%</text>
    <text x="132" y="102" class="dg87b-sub">passive, with Na</text>
  </g>
  <g class="dg87b-p2">
    <line x1="315" y1="106" x2="315" y2="74" stroke-width="5" class="dg87b-ca"/>
    <text x="328" y="88" class="dg87b-val">20%</text>
    <text x="328" y="102" class="dg87b-sub">paracellular, claudin-16</text>
  </g>
  <g class="dg87b-p3">
    <line x1="510" y1="106" x2="510" y2="74" stroke-width="4" class="dg87b-act"/>
    <text x="523" y="88" class="dg87b-val">15%</text>
    <text x="523" y="102" class="dg87b-sub">ACTIVE, TRPV5</text>
  </g>

  <text x="20" y="176" class="dg87b-row">Magnesium</text>
  <rect x="20" y="220" width="580" height="26" rx="13" class="dg87b-tube"/>
  <line x1="215" y1="220" x2="215" y2="246" class="dg87b-div"/>
  <line x1="415" y1="220" x2="415" y2="246" class="dg87b-div"/>
  <g class="dg87b-p1">
    <line x1="115" y1="216" x2="115" y2="184" stroke-width="5" class="dg87b-mg"/>
    <text x="128" y="198" class="dg87b-val">20%</text>
  </g>
  <g class="dg87b-p2">
    <line x1="315" y1="216" x2="315" y2="184" stroke-width="14" class="dg87b-mg"/>
    <text x="332" y="198" class="dg87b-val">70%</text>
    <text x="332" y="212" class="dg87b-sub">claudin-16 and -19</text>
  </g>
  <g class="dg87b-p3">
    <line x1="510" y1="216" x2="510" y2="184" stroke-width="3" class="dg87b-mg"/>
    <text x="523" y="198" class="dg87b-val">10%</text>
    <text x="523" y="212" class="dg87b-sub">fine-tuning (DCT)</text>
  </g>
</svg>`,
};

/*
 * cv9 - Transport of Potassium, Calcium, Magnesium & Phosphate (B. Askari).
 * Authoring rules live in the header of ../../lecture_diagrams.js.
 * Colour convention used across these three diagrams:
 *   var(--dg-good) = potassium itself,  var(--dg-cool) = reabsorption / inward,
 *   var(--dg-warm) = protons, secretion, blockade / failure,
 *   var(--dg-accent) = structures and transporter names.
 * Every number is this lecture's own (Slides 9-14, 21-26).
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Slide 14 - K+ recycling through ROMK builds the lumen-positive Vte, and a
// loop diuretic collapses it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv9-tal-k-recycling-vte"] = {
  title: "Thick ascending limb: K+ recycling makes the voltage",
  caption:
    "NKCC carries 1 Na+, 1 K+ and 2 Cl- into the cell, but the K+ leaks straight back to the lumen through apical ROMK. " +
    "Watch the same potassium go in and come out again: because it returns, the lumen ends up losing 2 Cl- against only 1 Na+, " +
    "and the leftover positive charge accumulates as the lumen-positive Vte of +6 mV. That voltage - not a pump - is what drags " +
    "Na+, K+, Ca++ and Mg++ through the paracellular route between the cells. The right-hand panel is the same segment with a loop " +
    "diuretic on board: NKCC is blocked, there is no K+ to recycle, Vte falls to 0 and all four cations stay in the lumen, which is " +
    "hypokalemia plus calcium and magnesium wasting in one picture. Green = potassium, blue = reabsorption, orange = the blockade. " +
    "Values are this lecture's (Slide 14; segment totals from Slides 12, 23 and 26).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Left panel: a thick ascending limb cell. NKCC on the apical membrane carries one sodium, one potassium and two chloride into the cell; the potassium returns to the lumen through apical ROMK, so the lumen loses two chloride against only one sodium and becomes positive at plus 6 millivolts, driving sodium, potassium, calcium and magnesium through the paracellular route between cells. Right panel: with a loop diuretic, NKCC is blocked, the voltage falls to zero millivolts and all four cations remain stranded in the lumen while cellular potassium leaves basolaterally through ROMK.">
  <style>
    .dg9a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg9a-gap   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 3; }
    .dg9a-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg9a-mem   { stroke: var(--dg-ink); stroke-width: 2.6; }
    .dg9a-tr    { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.8; }
    .dg9a-trd   { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.3; stroke-dasharray: 3 3; }
    .dg9a-h     { font-size: 12px; font-weight: 700; }
    .dg9a-l     { font-size: 10.5px; }
    .dg9a-s     { font-size: 9px; fill: var(--dg-muted); }
    .dg9a-xs    { font-size: 8.5px; fill: var(--dg-muted); }
    .dg9a-ion   { font-size: 9.5px; font-weight: 700; }
    .dg9a-ac    { fill: var(--dg-accent); }
    .dg9a-k     { fill: var(--dg-good); }
    .dg9a-cool  { fill: var(--dg-cool); }
    .dg9a-warm  { fill: var(--dg-warm); }
    .dg9a-lane  { stroke: var(--dg-line); stroke-width: 1.6; }
    .dg9a-blk   { stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg9a-flow  { stroke: var(--dg-cool); stroke-width: 2.6; stroke-dasharray: 7 7;
                  animation: dg9aDash 1.4s linear infinite; }
    .dg9a-in1   { animation: dg9aIn 7s ease-in-out infinite; }
    .dg9a-in2   { animation: dg9aIn 7s ease-in-out infinite .18s; }
    .dg9a-in3   { animation: dg9aIn 7s ease-in-out infinite .36s; }
    .dg9a-out   { animation: dg9aOut 7s ease-in-out infinite; }
    .dg9a-c1    { animation: dg9aCharge 7s ease-in-out infinite; }
    .dg9a-c2    { animation: dg9aCharge 7s ease-in-out infinite .3s; }
    .dg9a-c3    { animation: dg9aCharge 7s ease-in-out infinite .6s; }
    .dg9a-vte   { animation: dg9aVte 7s ease-in-out infinite; }
    .dg9a-para  { animation: dg9aPara 7s ease-in-out infinite; }
    .dg9a-j1    { animation: dg9aJig 1.9s ease-in-out infinite; }
    .dg9a-j2    { animation: dg9aJig 1.9s ease-in-out infinite .3s; }
    .dg9a-j3    { animation: dg9aJig 1.9s ease-in-out infinite .6s; }
    .dg9a-j4    { animation: dg9aJig 1.9s ease-in-out infinite .9s; }
    .dg9a-pulse { animation: dg9aPulse 2.6s ease-in-out infinite; }
    @keyframes dg9aDash  { to { stroke-dashoffset: -28; } }
    @keyframes dg9aIn {
      0%   { transform: translateX(0);    opacity: .25 }
      8%   { opacity: 1 }
      30%  { transform: translateX(62px); opacity: 1 }
      86%  { transform: translateX(62px); opacity: 1 }
      100% { transform: translateX(62px); opacity: .25 }
    }
    @keyframes dg9aOut {
      0%,22% { transform: translateX(0);     opacity: 1 }
      44%    { transform: translateX(-84px); opacity: 1 }
      88%    { transform: translateX(-84px); opacity: 1 }
      100%   { transform: translateX(-84px); opacity: .2 }
    }
    @keyframes dg9aCharge { 0%,30% { opacity: 0 } 46%,92% { opacity: 1 } 100% { opacity: 0 } }
    @keyframes dg9aVte    { 0%,34% { opacity: .45 } 52%,94% { opacity: 1 } 100% { opacity: .45 } }
    @keyframes dg9aPara   { 0%,50% { opacity: .5 } 64%,96% { opacity: 1 } 100% { opacity: .5 } }
    @keyframes dg9aJig {
      0%,100% { transform: translateX(-3px) }
      50%     { transform: translateX(3px) }
    }
    @keyframes dg9aPulse  { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
  </style>

  <line x1="404" y1="30" x2="404" y2="312" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="14"  y="20" class="dg9a-h">Intact thick ascending limb</text>
  <text x="412" y="20" class="dg9a-h dg9a-warm">Loop diuretic: NKCC blocked</text>

  <rect x="20" y="44" width="88" height="228" rx="6" class="dg9a-panel"/>
  <text x="26" y="60" class="dg9a-s">LUMEN</text>
  <rect x="108" y="88" width="178" height="184" rx="8" class="dg9a-cell"/>
  <line x1="108" y1="88" x2="108" y2="272" class="dg9a-mem"/>
  <line x1="286" y1="88" x2="286" y2="272" class="dg9a-mem"/>
  <text x="294" y="60" class="dg9a-s">interstitium</text>

  <text x="108" y="42" class="dg9a-xs">paracellular route between the cells</text>
  <rect x="108" y="48" width="182" height="38" rx="5" class="dg9a-gap"/>
  <g class="dg9a-para">
    <text x="120" y="68" class="dg9a-ion dg9a-cool">Na+</text>
    <text x="150" y="68" class="dg9a-ion dg9a-k">K+</text>
    <text x="180" y="68" class="dg9a-ion dg9a-cool">Ca++</text>
    <text x="218" y="68" class="dg9a-ion dg9a-cool">Mg++</text>
    <line x1="120" y1="79" x2="268" y2="79" class="dg9a-flow"/>
    <polygon points="268,73 284,79 268,85" fill="var(--dg-cool)"/>
  </g>

  <rect x="98" y="104" width="20" height="28" rx="4" class="dg9a-tr"/>
  <text x="124" y="100" class="dg9a-l dg9a-ac">ROMK</text>
  <line x1="170" y1="118" x2="96" y2="118" class="dg9a-lane"/>
  <polygon points="96,113 84,118 96,123" fill="var(--dg-good)"/>
  <g class="dg9a-out">
    <circle cx="170" cy="118" r="10" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.6"/>
    <text x="170" y="121.5" class="dg9a-ion dg9a-k" text-anchor="middle">K+</text>
  </g>

  <rect x="98" y="156" width="20" height="52" rx="4" class="dg9a-tr"/>
  <text x="126" y="150" class="dg9a-l dg9a-ac">NKCC</text>
  <line x1="80" y1="166" x2="136" y2="166" class="dg9a-lane"/>
  <polygon points="136,161 148,166 136,171" fill="var(--dg-line)"/>
  <line x1="80" y1="182" x2="136" y2="182" class="dg9a-lane"/>
  <polygon points="136,177 148,182 136,187" fill="var(--dg-line)"/>
  <line x1="80" y1="198" x2="136" y2="198" class="dg9a-lane"/>
  <polygon points="136,193 148,198 136,203" fill="var(--dg-line)"/>
  <g class="dg9a-in1">
    <rect x="44" y="158" width="32" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.2"/>
    <text x="60" y="169.5" class="dg9a-ion dg9a-cool" text-anchor="middle">Na+</text>
  </g>
  <g class="dg9a-in2">
    <rect x="44" y="174" width="32" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.2"/>
    <text x="60" y="185.5" class="dg9a-ion dg9a-k" text-anchor="middle">K+</text>
  </g>
  <g class="dg9a-in3">
    <rect x="40" y="190" width="40" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-accent)" stroke-width="1.2"/>
    <text x="60" y="201.5" class="dg9a-ion dg9a-ac" text-anchor="middle">2 Cl-</text>
  </g>
  <text x="124" y="222" class="dg9a-s">1 Na+ + 1 K+ + 2 Cl- in</text>

  <line x1="240" y1="240" x2="300" y2="240" class="dg9a-lane"/>
  <polygon points="300,235 312,240 300,245" fill="var(--dg-accent)"/>
  <text x="240" y="233" class="dg9a-ion dg9a-ac">2 Cl- out</text>
  <rect x="276" y="192" width="20" height="32" rx="4" class="dg9a-tr"/>
  <text x="270" y="203" class="dg9a-s" text-anchor="end">Na+/K+</text>
  <text x="270" y="214" class="dg9a-s" text-anchor="end">ATPase</text>

  <g class="dg9a-c1"><text x="30" y="98" class="dg9a-ion dg9a-cool">+</text></g>
  <g class="dg9a-c2"><text x="48" y="92" class="dg9a-ion dg9a-cool">+</text></g>
  <g class="dg9a-c3"><text x="66" y="99" class="dg9a-ion dg9a-cool">+</text></g>
  <text x="26" y="228" class="dg9a-xs">lumen loses</text>
  <text x="26" y="239" class="dg9a-xs">1 Na+ and 2 Cl-</text>
  <text x="26" y="250" class="dg9a-xs">but the K+ returns</text>
  <text x="64" y="268" class="dg9a-vte" font-size="15px" font-weight="700" fill="var(--dg-cool)" text-anchor="middle">+6 mV</text>

  <rect x="418" y="44" width="62" height="228" rx="6" class="dg9a-panel"/>
  <text x="422" y="60" class="dg9a-s">LUMEN</text>
  <text x="480" y="42" class="dg9a-xs">no driving force</text>
  <rect x="480" y="48" width="104" height="38" rx="5" class="dg9a-gap"/>
  <g class="dg9a-pulse">
    <line x1="518" y1="55" x2="546" y2="79" class="dg9a-blk"/>
    <line x1="546" y1="55" x2="518" y2="79" class="dg9a-blk"/>
  </g>
  <rect x="480" y="88" width="104" height="184" rx="8" class="dg9a-cell"/>
  <line x1="480" y1="88" x2="480" y2="272" class="dg9a-mem"/>
  <line x1="584" y1="88" x2="584" y2="272" class="dg9a-mem"/>

  <rect x="470" y="104" width="20" height="28" rx="4" class="dg9a-trd"/>
  <text x="498" y="112" class="dg9a-l" fill="var(--dg-muted)">ROMK</text>
  <text x="498" y="124" class="dg9a-xs">nothing to recycle</text>

  <rect x="470" y="156" width="20" height="52" rx="4" class="dg9a-tr"/>
  <g class="dg9a-pulse">
    <line x1="466" y1="158" x2="494" y2="206" class="dg9a-blk"/>
    <line x1="494" y1="158" x2="466" y2="206" class="dg9a-blk"/>
  </g>
  <text x="500" y="150" class="dg9a-l dg9a-ac">NKCC</text>
  <text x="500" y="176" class="dg9a-ion dg9a-warm">blocked</text>

  <g class="dg9a-j1">
    <rect x="424" y="102" width="50" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.2"/>
    <text x="449" y="113.5" class="dg9a-ion dg9a-cool" text-anchor="middle">Na+</text>
  </g>
  <g class="dg9a-j2">
    <rect x="424" y="130" width="50" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.2"/>
    <text x="449" y="141.5" class="dg9a-ion dg9a-k" text-anchor="middle">K+</text>
  </g>
  <g class="dg9a-j3">
    <rect x="424" y="158" width="50" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.2"/>
    <text x="449" y="169.5" class="dg9a-ion dg9a-cool" text-anchor="middle">Ca++</text>
  </g>
  <g class="dg9a-j4">
    <rect x="424" y="186" width="50" height="16" rx="8" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.2"/>
    <text x="449" y="197.5" class="dg9a-ion dg9a-cool" text-anchor="middle">Mg++</text>
  </g>
  <text x="449" y="240" font-size="15px" font-weight="700" fill="var(--dg-warm)" text-anchor="middle">0 mV</text>
  <text x="449" y="254" class="dg9a-xs" text-anchor="middle">(was +6)</text>

  <rect x="574" y="210" width="20" height="30" rx="4" class="dg9a-tr"/>
  <text x="568" y="206" class="dg9a-xs" text-anchor="end">cell K+ leaves here</text>
  <line x1="598" y1="228" x2="630" y2="228" class="dg9a-lane"/>
  <polygon points="630,223 642,228 630,233" fill="var(--dg-good)"/>
  <text x="606" y="220" class="dg9a-ion dg9a-k">K+</text>

  <text x="14" y="292" class="dg9a-s">The basolateral Na+/K+ ATPase (3 Na+ out, 2 K+ in) builds the gradient NKCC needs.</text>
  <text x="14" y="306" class="dg9a-s">TAL totals: K+ ~10%, Ca++ ~25%, Mg++ ~70% of the filtered load.</text>
  <text x="412" y="292" class="dg9a-s">Vte 0: all four cations stay in the lumen.</text>
  <text x="412" y="306" class="dg9a-s">Remaining cell K+ exits basolaterally via ROMK.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Slides 11-13 - the filtered K+ load travelling the nephron, with Vte
// alongside and the low-K+ / high-K+ diet fork.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv9-k-journey-down-nephron"] = {
  title: "One filtered potassium load down the nephron",
  caption:
    "Travel with the load: 810 mmol/day is filtered, the PCT takes ~80% of it back, the thin descending limb secretes some " +
    "(the lecture does not quantify this, so the bump is schematic), the TAL takes ~10%, and about 10% of the filtered load " +
    "reaches the DCT. The ribbon is that running balance drawn against the dashed 100% line. Underneath runs the transepithelial " +
    "voltage - PCT S1 -3, PCT S3 +3, TAL +6, DCT -24 to -14, CCT -74 mV - and the sign flip is the whole story: while the lumen is " +
    "positive, K+ is pushed out of it; once the lumen turns strongly negative, the distal segments can push K+ into it instead. " +
    "That is why the fork at the end goes two ways: on a low or normal K+ diet the distal system reabsorbs and only 1-3% of the " +
    "filtered load is excreted, while on a chronically high K+ diet it secretes and excretion can exceed 150% of the filtered load - " +
    "more potassium out than was filtered. Voltage bars are indicative, not to scale. Values are this lecture's (Slides 11-13).",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="An unrolled nephron. 810 millimoles per day of potassium is filtered; the proximal tubule reabsorbs about 80 percent, the thin descending limb secretes, the thick ascending limb reabsorbs about 10 percent and about 10 percent of the filtered load reaches the distal convoluted tubule. A ribbon shows the remaining load falling from 100 percent to about 10 percent. Below, transepithelial voltage is plotted: minus 3 in proximal segment 1, plus 3 in segment 3, plus 6 in the thick ascending limb, minus 24 to minus 14 in the distal convoluted tubule and minus 74 millivolts in the cortical collecting tubule. At the end the path forks: a low potassium diet excretes 1 to 3 percent of the filtered load, a high potassium diet excretes more than 150 percent.">
  <style>
    .dg9b-tube  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg9b-div   { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg9b-seg   { font-size: 10px; font-weight: 700; }
    .dg9b-do    { font-size: 9px; }
    .dg9b-s     { font-size: 8.5px; fill: var(--dg-muted); }
    .dg9b-lab   { font-size: 9px; font-weight: 700; }
    .dg9b-cool  { fill: var(--dg-cool); }
    .dg9b-warm  { fill: var(--dg-warm); }
    .dg9b-k     { fill: var(--dg-good); }
    .dg9b-band  { fill: var(--dg-accent); fill-opacity: .16; stroke: var(--dg-accent); stroke-width: 1.4; }
    .dg9b-ref   { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 3 4; }
    .dg9b-zero  { stroke: var(--dg-ink); stroke-width: 1.4; }
    .dg9b-barP  { stroke: var(--dg-cool); stroke-width: 7; stroke-linecap: round; }
    .dg9b-barN  { stroke: var(--dg-warm); stroke-width: 7; stroke-linecap: round; }
    .dg9b-forkH { stroke: var(--dg-warm); stroke-width: 2.2; stroke-dasharray: 5 4; fill: none; }
    .dg9b-forkL { stroke: var(--dg-cool); stroke-width: 2.2; stroke-dasharray: 5 4; fill: none; }
    .dg9b-flow  { stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 6 9;
                  animation: dg9bDash 1.8s linear infinite; }
    .dg9b-trav  { animation: dg9bTravel 9s linear infinite; }
    .dg9b-l1 { animation: dg9bLit 9s linear infinite; }
    .dg9b-l2 { animation: dg9bLit 9s linear infinite 1.7s; }
    .dg9b-l3 { animation: dg9bLit 9s linear infinite 3.1s; }
    .dg9b-l4 { animation: dg9bLit 9s linear infinite 4.5s; }
    .dg9b-l5 { animation: dg9bLit 9s linear infinite 5.9s; }
    .dg9b-altA { animation: dg9bAltA 9s ease-in-out infinite; }
    .dg9b-altB { animation: dg9bAltB 9s ease-in-out infinite; }
    @keyframes dg9bDash { to { stroke-dashoffset: -30; } }
    @keyframes dg9bTravel {
      0%   { transform: translateX(0);     opacity: 0 }
      4%   { opacity: 1 }
      92%  { transform: translateX(440px); opacity: 1 }
      100% { transform: translateX(440px); opacity: 0 }
    }
    @keyframes dg9bLit { 0% { opacity: .55 } 6%,18% { opacity: 1 } 28%,100% { opacity: .55 } }
    @keyframes dg9bAltA { 0%,42% { opacity: 1 } 54%,96% { opacity: .45 } 100% { opacity: 1 } }
    @keyframes dg9bAltB { 0%,42% { opacity: .45 } 54%,96% { opacity: 1 } 100% { opacity: .45 } }
  </style>

  <text x="14" y="44" class="dg9b-s">filtered</text>
  <text x="14" y="57" class="dg9b-lab" fill="var(--dg-accent)" font-size="11px">810 mmol/day</text>
  <line x1="90" y1="52" x2="104" y2="52" stroke="var(--dg-ink)" stroke-width="1.5"/>
  <polygon points="104,47 114,52 104,57" fill="var(--dg-ink)"/>

  <rect x="110" y="34" width="476" height="36" rx="9" class="dg9b-tube"/>
  <line x1="238" y1="34" x2="238" y2="70" class="dg9b-div"/>
  <line x1="296" y1="34" x2="296" y2="70" class="dg9b-div"/>
  <line x1="384" y1="34" x2="384" y2="70" class="dg9b-div"/>
  <line x1="448" y1="34" x2="448" y2="70" class="dg9b-div"/>
  <line x1="114" y1="42" x2="582" y2="42" class="dg9b-flow"/>

  <text x="174" y="28" class="dg9b-seg" text-anchor="middle">PCT</text>
  <text x="267" y="28" class="dg9b-seg" text-anchor="middle" font-size="9.5px">thin desc.</text>
  <text x="340" y="28" class="dg9b-seg" text-anchor="middle">TAL</text>
  <text x="416" y="28" class="dg9b-seg" text-anchor="middle">DCT</text>
  <text x="517" y="28" class="dg9b-seg" text-anchor="middle">CNT / CCT / MCD</text>

  <text x="174" y="61" class="dg9b-do dg9b-l1" text-anchor="middle">reabsorbs ~80%</text>
  <text x="267" y="61" class="dg9b-do dg9b-l2" text-anchor="middle" font-size="8.5px" fill="var(--dg-warm)">secretes K+</text>
  <text x="340" y="61" class="dg9b-do dg9b-l3" text-anchor="middle">reabsorbs ~10%</text>
  <text x="416" y="61" class="dg9b-do dg9b-l4" text-anchor="middle" font-size="8.5px">~10% arrives</text>
  <text x="517" y="61" class="dg9b-do dg9b-l5" text-anchor="middle">sets urinary K+</text>

  <g class="dg9b-trav">
    <circle cx="126" cy="44" r="9" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.6"/>
    <text x="126" y="47.5" class="dg9b-lab dg9b-k" text-anchor="middle">K+</text>
  </g>

  <line x1="588" y1="52" x2="602" y2="52" stroke="var(--dg-ink)" stroke-width="1.5"/>
  <polygon points="602,47 612,52 602,57" fill="var(--dg-ink)"/>
  <text x="616" y="44" class="dg9b-s">urine</text>
  <text x="616" y="58" class="dg9b-lab dg9b-k" font-size="11px">~60</text>
  <text x="616" y="68" class="dg9b-s">mmol/day</text>

  <text x="14" y="110" class="dg9b-s">100% of the</text>
  <text x="14" y="120" class="dg9b-s">filtered load</text>
  <line x1="110" y1="114" x2="586" y2="114" class="dg9b-ref"/>
  <polygon points="110,170 110,114 238,159 296,155 384,164 448,164 448,170" class="dg9b-band"/>
  <line x1="110" y1="170" x2="586" y2="170" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="236" y="147" class="dg9b-s" text-anchor="end">20% left</text>
  <text x="270" y="140" class="dg9b-s" text-anchor="middle" fill="var(--dg-warm)">+ secretion</text>
  <text x="444" y="156" class="dg9b-s" text-anchor="end">~10% reaches the DCT</text>

  <g class="dg9b-altB">
    <line x1="448" y1="164" x2="556" y2="96" class="dg9b-forkH"/>
    <polygon points="556,96 543,99 548,108" fill="var(--dg-warm)"/>
    <text x="562" y="94" class="dg9b-lab dg9b-warm">high K+ diet</text>
    <text x="562" y="105" class="dg9b-s">secretes: over 150%</text>
  </g>
  <g class="dg9b-altA">
    <line x1="448" y1="164" x2="552" y2="169" class="dg9b-forkL"/>
    <polygon points="558,169 546,165 546,173" fill="var(--dg-cool)"/>
    <text x="562" y="165" class="dg9b-lab dg9b-cool">low K+ diet</text>
    <text x="562" y="176" class="dg9b-s">reabsorbs: 1-3%</text>
  </g>

  <text x="14" y="200" class="dg9b-s">transepithelial</text>
  <text x="14" y="210" class="dg9b-s">voltage (mV)</text>
  <line x1="110" y1="210" x2="586" y2="210" class="dg9b-zero"/>
  <text x="104" y="207" class="dg9b-s" text-anchor="end">0</text>

  <line x1="150" y1="210" x2="150" y2="220" class="dg9b-barN"/>
  <text x="150" y="232" class="dg9b-s" text-anchor="middle">S1 -3</text>
  <line x1="212" y1="210" x2="212" y2="200" class="dg9b-barP"/>
  <text x="212" y="193" class="dg9b-s" text-anchor="middle">S3 +3</text>
  <line x1="340" y1="210" x2="340" y2="192" class="dg9b-barP"/>
  <text x="340" y="186" class="dg9b-lab dg9b-cool" text-anchor="middle">+6</text>
  <line x1="416" y1="210" x2="416" y2="236" class="dg9b-barN"/>
  <text x="416" y="248" class="dg9b-s" text-anchor="middle">-24 to -14</text>
  <line x1="517" y1="210" x2="517" y2="262" class="dg9b-barN"/>
  <text x="517" y="274" class="dg9b-lab dg9b-warm" text-anchor="middle">-74</text>

  <text x="14" y="292" class="dg9b-s">Lumen-positive Vte pushes K+ out of the lumen; lumen-negative Vte lets the distal segments secrete it back in.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Slides 9-10 - acidosis drives K+ out of the muscle cell; alkalosis is the
// same picture with every arrow reversed.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv9-acidosis-k-shift"] = {
  title: "Acidosis and the muscle cell: why K+ comes out",
  caption:
    "Muscle holds ~75% of body potassium, so what happens at this membrane sets the plasma [K+]. The steps are staged in order " +
    "because the order is the lesson: (1) extracellular protons stall the Na+/H+ exchanger by mass action, (2) protons consume the " +
    "bicarbonate the Na+/HCO3- cotransporter needs, (3) NKCC is inhibited - three closed Na+ entry routes - so (4) intracellular " +
    "Na+ falls and only then does the Na+/K+ ATPase run out of substrate and stop importing K+, while (5) protons entering the cell " +
    "protonate proteins and displace K+, which leaks out through K+ channels. The pump fails downstream of the exchangers, not " +
    "beside them. The right-hand panel is the identical picture with every arrow reversed, which is exactly how the lecture states " +
    "alkalosis (Slide 10; it lists NKCC inhibition only on the acidosis side). Values and mechanism are this lecture's (Slides 9-10).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="Left panel: a muscle cell during acidosis. Excess extracellular protons block the sodium hydrogen exchanger, consume the bicarbonate needed by the sodium bicarbonate cotransporter and inhibit NKCC, so intracellular sodium falls and the sodium potassium ATPase is starved of substrate; protons entering the cell protonate proteins and displace potassium, which leaks out through potassium channels, producing hyperkalemia. Right panel: in alkalosis every arrow reverses, protons leave, bicarbonate enters, intracellular sodium rises, the pump is stimulated and potassium is pushed into the cell, producing hypokalemia.">
  <style>
    .dg9c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg9c-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg9c-mem   { stroke: var(--dg-ink); stroke-width: 2.6; }
    .dg9c-tr    { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.8; }
    .dg9c-trd   { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.4; stroke-dasharray: 3 3; }
    .dg9c-h     { font-size: 12px; font-weight: 700; }
    .dg9c-l     { font-size: 10px; }
    .dg9c-m     { font-size: 9.5px; }
    .dg9c-s     { font-size: 8.5px; fill: var(--dg-muted); }
    .dg9c-xs    { font-size: 8px; fill: var(--dg-muted); }
    .dg9c-ion   { font-size: 9px; font-weight: 700; }
    .dg9c-warm  { fill: var(--dg-warm); }
    .dg9c-cool  { fill: var(--dg-cool); }
    .dg9c-k     { fill: var(--dg-good); }
    .dg9c-blk   { stroke: var(--dg-warm); stroke-width: 2.4; stroke-linecap: round; }
    .dg9c-lane  { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg9c-st1 { animation: dg9cStep 8s ease-in-out infinite; }
    .dg9c-st2 { animation: dg9cStep 8s ease-in-out infinite 1.1s; }
    .dg9c-st3 { animation: dg9cStep 8s ease-in-out infinite 2.2s; }
    .dg9c-st4 { animation: dg9cStep 8s ease-in-out infinite 3.3s; }
    .dg9c-st5 { animation: dg9cStep 8s ease-in-out infinite 4.4s; }
    .dg9c-h1  { animation: dg9cJig 2.2s ease-in-out infinite; }
    .dg9c-h2  { animation: dg9cJig 2.2s ease-in-out infinite .4s; }
    .dg9c-h3  { animation: dg9cJig 2.2s ease-in-out infinite .8s; }
    .dg9c-h4  { animation: dg9cJig 2.2s ease-in-out infinite 1.2s; }
    .dg9c-ko1 { animation: dg9cOut 8s ease-in-out infinite 4.4s; }
    .dg9c-ko2 { animation: dg9cOut 8s ease-in-out infinite 5s; }
    .dg9c-ki1 { animation: dg9cIn 8s ease-in-out infinite 4.4s; }
    .dg9c-ki2 { animation: dg9cIn 8s ease-in-out infinite 5s; }
    @keyframes dg9cStep { 0% { opacity: .55 } 5%,20% { opacity: 1 } 32%,100% { opacity: .55 } }
    @keyframes dg9cJig {
      0%,100% { transform: translate(0,0) }
      50%     { transform: translate(3px,-2px) }
    }
    @keyframes dg9cOut {
      0%   { transform: translateX(0);     opacity: 1 }
      22%  { transform: translateX(-48px); opacity: 1 }
      34%  { transform: translateX(-48px); opacity: 0 }
      100% { transform: translateX(-48px); opacity: 0 }
    }
    @keyframes dg9cIn {
      0%   { transform: translateX(0);    opacity: 1 }
      22%  { transform: translateX(40px); opacity: 1 }
      34%  { transform: translateX(40px); opacity: 0 }
      100% { transform: translateX(40px); opacity: 0 }
    }
  </style>

  <line x1="416" y1="28" x2="416" y2="306" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="14"  y="18" class="dg9c-h dg9c-warm">Acidosis: K+ leaves the cell</text>
  <text x="424" y="18" class="dg9c-h dg9c-cool">Alkalosis: every arrow reverses</text>

  <rect x="20" y="32" width="74" height="234" rx="6" class="dg9c-panel"/>
  <text x="26" y="46" class="dg9c-l" font-weight="700">ECF</text>
  <text x="26" y="58" class="dg9c-ion dg9c-warm">excess H+</text>
  <g class="dg9c-h1"><text x="34" y="82" class="dg9c-ion dg9c-warm">H+</text></g>
  <g class="dg9c-h2"><text x="60" y="94" class="dg9c-ion dg9c-warm">H+</text></g>
  <g class="dg9c-h3"><text x="32" y="110" class="dg9c-ion dg9c-warm">H+</text></g>
  <g class="dg9c-h4"><text x="62" y="122" class="dg9c-ion dg9c-warm">H+</text></g>

  <rect x="94" y="32" width="312" height="234" rx="8" class="dg9c-cell"/>
  <line x1="94" y1="32" x2="94" y2="266" class="dg9c-mem"/>
  <text x="398" y="46" class="dg9c-s" text-anchor="end">muscle cell</text>

  <g class="dg9c-st1">
    <rect x="84" y="66" width="20" height="28" rx="4" class="dg9c-tr"/>
    <line x1="80" y1="68" x2="108" y2="92" class="dg9c-blk"/>
    <line x1="108" y1="68" x2="80" y2="92" class="dg9c-blk"/>
    <circle cx="118" cy="80" r="8.5" fill="var(--dg-accent)"/>
    <text x="118" y="83.5" class="dg9c-ion" fill="var(--dg-surface)" text-anchor="middle">1</text>
    <text x="134" y="76" class="dg9c-l">Na+/H+ exchanger stalls (mass action)</text>
    <text x="134" y="88" class="dg9c-s">H+ cannot leave, so Na+ cannot enter</text>
  </g>

  <g class="dg9c-st2">
    <rect x="84" y="108" width="20" height="28" rx="4" class="dg9c-tr"/>
    <line x1="80" y1="110" x2="108" y2="134" class="dg9c-blk"/>
    <line x1="108" y1="110" x2="80" y2="134" class="dg9c-blk"/>
    <circle cx="118" cy="122" r="8.5" fill="var(--dg-accent)"/>
    <text x="118" y="125.5" class="dg9c-ion" fill="var(--dg-surface)" text-anchor="middle">2</text>
    <text x="134" y="118" class="dg9c-l">Na+/HCO3- cotransporter loses substrate</text>
    <text x="134" y="130" class="dg9c-s">H+ consumes HCO3- to make H2CO3</text>
  </g>

  <g class="dg9c-st3">
    <rect x="84" y="150" width="20" height="28" rx="4" class="dg9c-tr"/>
    <line x1="80" y1="152" x2="108" y2="176" class="dg9c-blk"/>
    <line x1="108" y1="152" x2="80" y2="176" class="dg9c-blk"/>
    <circle cx="118" cy="164" r="8.5" fill="var(--dg-accent)"/>
    <text x="118" y="167.5" class="dg9c-ion" fill="var(--dg-surface)" text-anchor="middle">3</text>
    <text x="134" y="160" class="dg9c-l">NKCC inhibited</text>
    <text x="134" y="172" class="dg9c-s">a third Na+ entry route closes</text>
  </g>

  <g class="dg9c-st4">
    <rect x="84" y="192" width="20" height="34" rx="4" class="dg9c-trd"/>
    <circle cx="118" cy="209" r="8.5" fill="var(--dg-accent)"/>
    <text x="118" y="212.5" class="dg9c-ion" fill="var(--dg-surface)" text-anchor="middle">4</text>
    <text x="134" y="205" class="dg9c-l">Na+/K+ ATPase runs out of substrate</text>
    <text x="134" y="217" class="dg9c-s">intracellular Na+ has fallen: no K+ pumped in</text>
  </g>

  <g class="dg9c-st5">
    <rect x="84" y="238" width="20" height="26" rx="4" class="dg9c-tr"/>
    <circle cx="118" cy="251" r="8.5" fill="var(--dg-accent)"/>
    <text x="118" y="254.5" class="dg9c-ion" fill="var(--dg-surface)" text-anchor="middle">5</text>
    <text x="134" y="246" class="dg9c-l">K+ leaks out through K+ channels</text>
    <text x="134" y="258" class="dg9c-s">H+ protonates proteins and displaces K+</text>
  </g>
  <line x1="104" y1="251" x2="52" y2="251" class="dg9c-lane"/>
  <polygon points="52,247 42,251 52,255" fill="var(--dg-good)"/>
  <g class="dg9c-ko1">
    <circle cx="96" cy="251" r="8" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.5"/>
    <text x="96" y="254.5" class="dg9c-ion dg9c-k" text-anchor="middle">K+</text>
  </g>
  <g class="dg9c-ko2">
    <circle cx="74" cy="251" r="8" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.5"/>
    <text x="74" y="254.5" class="dg9c-ion dg9c-k" text-anchor="middle">K+</text>
  </g>

  <rect x="20" y="274" width="386" height="28" rx="6" fill="var(--dg-panel)" stroke="var(--dg-warm)" stroke-width="1.6"/>
  <text x="34" y="292" class="dg9c-l dg9c-warm" font-weight="700">Result: K+ moves out of cells &#8594; HYPERKALEMIA</text>

  <rect x="428" y="32" width="48" height="234" rx="6" class="dg9c-panel"/>
  <text x="432" y="46" class="dg9c-m" font-weight="700">ECF</text>
  <text x="432" y="58" class="dg9c-ion dg9c-cool">low H+</text>
  <rect x="476" y="32" width="170" height="234" rx="8" class="dg9c-cell"/>
  <line x1="476" y1="32" x2="476" y2="266" class="dg9c-mem"/>

  <rect x="466" y="66" width="20" height="28" rx="4" class="dg9c-tr"/>
  <line x1="462" y1="80" x2="444" y2="80" class="dg9c-lane"/>
  <polygon points="444,76 434,80 444,84" fill="var(--dg-warm)"/>
  <text x="492" y="78" class="dg9c-m">H+ leaves the cell</text>
  <text x="492" y="90" class="dg9c-xs">via the Na+/H+ exchanger</text>

  <rect x="466" y="108" width="20" height="28" rx="4" class="dg9c-tr"/>
  <line x1="436" y1="122" x2="454" y2="122" class="dg9c-lane"/>
  <polygon points="454,118 464,122 454,126" fill="var(--dg-cool)"/>
  <text x="492" y="120" class="dg9c-m">HCO3- enters with Na+</text>
  <text x="492" y="132" class="dg9c-xs">via the Na+/HCO3- cotransporter</text>

  <text x="492" y="164" class="dg9c-m">Intracellular Na+ rises</text>
  <text x="492" y="176" class="dg9c-xs">the entry routes are open again</text>

  <rect x="466" y="192" width="20" height="34" rx="4" class="dg9c-tr"/>
  <text x="492" y="205" class="dg9c-m">Na+/K+ ATPase stimulated</text>
  <text x="492" y="217" class="dg9c-xs">substrate restored</text>

  <rect x="466" y="238" width="20" height="26" rx="4" class="dg9c-tr"/>
  <line x1="432" y1="251" x2="486" y2="251" class="dg9c-lane"/>
  <polygon points="486,247 496,251 486,255" fill="var(--dg-good)"/>
  <g class="dg9c-ki1">
    <circle cx="438" cy="251" r="7.5" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.5"/>
    <text x="438" y="254.5" class="dg9c-ion dg9c-k" text-anchor="middle">K+</text>
  </g>
  <g class="dg9c-ki2">
    <circle cx="458" cy="251" r="7.5" fill="var(--dg-surface)" stroke="var(--dg-good)" stroke-width="1.5"/>
    <text x="458" y="254.5" class="dg9c-ion dg9c-k" text-anchor="middle">K+</text>
  </g>
  <text x="506" y="254" class="dg9c-m">K+ pushed into the cell</text>

  <rect x="428" y="274" width="218" height="28" rx="6" fill="var(--dg-panel)" stroke="var(--dg-cool)" stroke-width="1.6"/>
  <text x="438" y="292" class="dg9c-l dg9c-cool" font-weight="700">K+ into cells &#8594; HYPOKALEMIA</text>

  <text x="14" y="315" class="dg9c-s">Bidirectional: hyperkalemia produces extracellular acidosis; hypokalemia produces extracellular alkalosis.</text>
</svg>`,
};

/*
 * CV7 - GFR, Renal Blood Flow and Clearance.
 * Authoring rules live in lecture_diagrams.js (CSS keyframes only, themed
 * colors only, viewBox with no fixed size, nothing hover-only, readable when
 * frozen). Every number below is this lecture's own.
 */
window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Slide 10 + Slide 21 golden rule - the four arteriolar maneuvers.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv7-arteriolar-tone-gfr"] = {
  title: "Arteriolar tone and GFR",
  caption:
    "The glomerular tuft sits between two adjustable gates. Squeeze the ENTRANCE (afferent) and less blood gets in: " +
    "the lecture's Boron figure (Slide 10) has glomerular capillary pressure falling 60 &#8594; 40 mmHg with renal artery pressure ~100. " +
    "Relax the afferent and it rises again. The EXIT (efferent) does the reverse - closing it traps blood in the tuft, so pressure and GFR RISE; " +
    "opening it drains the tuft, so both fall. Only the 60 &#8594; 40 figure is given a number in this lecture, so the other three cases are shown as directions, " +
    "not values. Mnemonic (Slide 21): \"close the exit, fill the room\". Line thickness is vessel calibre, the moving dashes are blood flow, " +
    "the shading inside the tuft is how full it is, and the arrow into Bowman's space is filtrate.",
  svg: `
<svg viewBox="0 0 640 318" role="img" aria-label="Four panels comparing arteriolar tone. Afferent constriction starves the tuft and drops glomerular capillary pressure from 60 to 40, so GFR falls. Afferent dilation lets more blood in, so pressure and GFR rise. Efferent constriction traps blood in the tuft, so pressure and GFR rise. Efferent dilation drains the tuft, so pressure and GFR fall.">
  <style>
    .dg7t-card { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg7t-head { font-size: 11.5px; font-weight: 700; letter-spacing: .03em; }
    .dg7t-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg7t-res  { font-size: 11.5px; font-weight: 700; }
    .dg7t-pg   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg7t-pv   { font-size: 12px; font-weight: 700; }
    .dg7t-tube { fill: none; stroke-linecap: round; }
    .dg7t-base { stroke: var(--dg-line); }
    .dg7t-live { stroke: var(--dg-accent); stroke-dasharray: 7 13; }
    .dg7t-idle { stroke: var(--dg-muted); stroke-dasharray: 7 13; opacity: .5; }
    .dg7t-fast { animation: dg7tflow 1.05s linear infinite; }
    .dg7t-mid  { animation: dg7tflow 1.9s linear infinite; }
    .dg7t-slow { animation: dg7tflow 3.4s linear infinite; }
    @keyframes dg7tflow { to { stroke-dashoffset: -40; } }
    .dg7t-tuft { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg7t-full { fill: var(--dg-accent); fill-opacity: .58; animation: dg7tswell 2.8s ease-in-out infinite; }
    .dg7t-low  { fill: var(--dg-accent); fill-opacity: .13; animation: dg7tebb 2.8s ease-in-out infinite; }
    @keyframes dg7tswell { 0%,100% { fill-opacity: .44; } 50% { fill-opacity: .76; } }
    @keyframes dg7tebb   { 0%,100% { fill-opacity: .08; } 50% { fill-opacity: .20; } }
    .dg7t-bow  { stroke: var(--dg-ink); stroke-width: 1.3; stroke-dasharray: 4 4; opacity: .55; }
    .dg7t-fil  { fill: none; stroke: var(--dg-accent); stroke-linecap: round; stroke-dasharray: 5 9; }
    .dg7t-heavy{ animation: dg7tdrip 1s linear infinite; }
    .dg7t-light{ animation: dg7tdrip 2.6s linear infinite; }
    @keyframes dg7tdrip { to { stroke-dashoffset: -42; } }
  </style>

  <g transform="translate(7,6)">
    <rect x="0.5" y="0.5" width="305" height="147" rx="10" class="dg7t-card"/>
    <text x="14" y="23" class="dg7t-head">1 &#183; AFFERENT CONSTRICTS</text>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-base" stroke-width="5"/>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-live dg7t-slow" stroke-width="5"/>
    <text x="57" y="86" class="dg7t-sub" text-anchor="middle">afferent: narrowed</text>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-base" stroke-width="12"/>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-idle dg7t-slow" stroke-width="12"/>
    <text x="236" y="86" class="dg7t-sub" text-anchor="middle">efferent: unchanged</text>
    <circle cx="146" cy="62" r="31" class="dg7t-tuft"/>
    <circle cx="146" cy="62" r="27" class="dg7t-low"/>
    <text x="146" y="56" class="dg7t-pg" text-anchor="middle">P(GC) mmHg</text>
    <text x="146" y="74" class="dg7t-pv" text-anchor="middle" fill="var(--dg-warm)">60 &#8594; 40</text>
    <line x1="146" y1="95" x2="146" y2="116" class="dg7t-fil dg7t-light" stroke-width="3"/>
    <polygon points="141,114 151,114 146,128" fill="var(--dg-accent)" opacity=".85"/>
    <line x1="104" y1="126" x2="188" y2="126" class="dg7t-bow"/>
    <text x="194" y="130" class="dg7t-sub">Bowman's space</text>
    <text x="14" y="141" class="dg7t-res" fill="var(--dg-warm)">GFR &#8595; &#183; less blood enters</text>
  </g>

  <g transform="translate(327,6)">
    <rect x="0.5" y="0.5" width="305" height="147" rx="10" class="dg7t-card"/>
    <text x="14" y="23" class="dg7t-head">2 &#183; AFFERENT DILATES</text>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-base" stroke-width="20"/>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-live dg7t-fast" stroke-width="20"/>
    <text x="57" y="86" class="dg7t-sub" text-anchor="middle">afferent: relaxed</text>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-base" stroke-width="12"/>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-idle dg7t-fast" stroke-width="12"/>
    <text x="236" y="86" class="dg7t-sub" text-anchor="middle">efferent: unchanged</text>
    <circle cx="146" cy="62" r="31" class="dg7t-tuft"/>
    <circle cx="146" cy="62" r="27" class="dg7t-full"/>
    <text x="146" y="56" class="dg7t-pg" text-anchor="middle">P(GC)</text>
    <text x="146" y="78" class="dg7t-pv" text-anchor="middle" font-size="16" fill="var(--dg-good)">&#8593;</text>
    <line x1="146" y1="95" x2="146" y2="116" class="dg7t-fil dg7t-heavy" stroke-width="9"/>
    <polygon points="137,114 155,114 146,130" fill="var(--dg-accent)" opacity=".85"/>
    <line x1="104" y1="126" x2="188" y2="126" class="dg7t-bow"/>
    <text x="194" y="130" class="dg7t-sub">Bowman's space</text>
    <text x="14" y="141" class="dg7t-res" fill="var(--dg-good)">GFR &#8593; &#183; more blood enters</text>
  </g>

  <g transform="translate(7,164)">
    <rect x="0.5" y="0.5" width="305" height="147" rx="10" class="dg7t-card"/>
    <text x="14" y="23" class="dg7t-head">3 &#183; EFFERENT CONSTRICTS</text>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-base" stroke-width="12"/>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-idle dg7t-mid" stroke-width="12"/>
    <text x="57" y="86" class="dg7t-sub" text-anchor="middle">afferent: unchanged</text>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-base" stroke-width="5"/>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-live dg7t-slow" stroke-width="5"/>
    <text x="236" y="86" class="dg7t-sub" text-anchor="middle">efferent: narrowed</text>
    <circle cx="146" cy="62" r="31" class="dg7t-tuft"/>
    <circle cx="146" cy="62" r="27" class="dg7t-full"/>
    <text x="146" y="56" class="dg7t-pg" text-anchor="middle">P(GC)</text>
    <text x="146" y="78" class="dg7t-pv" text-anchor="middle" font-size="16" fill="var(--dg-good)">&#8593;</text>
    <line x1="146" y1="95" x2="146" y2="116" class="dg7t-fil dg7t-heavy" stroke-width="9"/>
    <polygon points="137,114 155,114 146,130" fill="var(--dg-accent)" opacity=".85"/>
    <line x1="104" y1="126" x2="188" y2="126" class="dg7t-bow"/>
    <text x="194" y="130" class="dg7t-sub">Bowman's space</text>
    <text x="14" y="141" class="dg7t-res" fill="var(--dg-good)">GFR &#8593; &#183; blood piles up inside</text>
  </g>

  <g transform="translate(327,164)">
    <rect x="0.5" y="0.5" width="305" height="147" rx="10" class="dg7t-card"/>
    <text x="14" y="23" class="dg7t-head">4 &#183; EFFERENT DILATES</text>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-base" stroke-width="12"/>
    <line x1="12" y1="62" x2="102" y2="62" class="dg7t-tube dg7t-idle dg7t-mid" stroke-width="12"/>
    <text x="57" y="86" class="dg7t-sub" text-anchor="middle">afferent: unchanged</text>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-base" stroke-width="20"/>
    <line x1="192" y1="62" x2="280" y2="62" class="dg7t-tube dg7t-live dg7t-fast" stroke-width="20"/>
    <text x="236" y="86" class="dg7t-sub" text-anchor="middle">efferent: relaxed</text>
    <circle cx="146" cy="62" r="31" class="dg7t-tuft"/>
    <circle cx="146" cy="62" r="27" class="dg7t-low"/>
    <text x="146" y="56" class="dg7t-pg" text-anchor="middle">P(GC)</text>
    <text x="146" y="78" class="dg7t-pv" text-anchor="middle" font-size="16" fill="var(--dg-warm)">&#8595;</text>
    <line x1="146" y1="95" x2="146" y2="116" class="dg7t-fil dg7t-light" stroke-width="3"/>
    <polygon points="141,114 151,114 146,128" fill="var(--dg-accent)" opacity=".85"/>
    <line x1="104" y1="126" x2="188" y2="126" class="dg7t-bow"/>
    <text x="194" y="130" class="dg7t-sub">Bowman's space</text>
    <text x="14" y="141" class="dg7t-res" fill="var(--dg-warm)">GFR &#8595; &#183; the tuft drains out</text>
  </g>
</svg>`,
};

// --------------------------------------------------------------------------
// Slide 5 - the arterial route and the cortex / medulla split.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv7-renal-blood-flow-path"] = {
  title: "Renal blood flow, aorta to vasa recta",
  caption:
    "One bolus of blood, in the order the lecture asks you to recite it: aorta &#8594; renal &#8594; segmental &#8594; interlobar &#8594; arcuate " +
    "&#8594; interlobular &#8594; afferent arteriole &#8594; glomerulus &#8594; efferent arteriole. Every branch adds resistance, so pressure falls from a MAP of " +
    "70-105 mmHg to about 50-60 mmHg by the afferent arteriole. Past the efferent the stream splits, and the thickness of each line is the point: " +
    "most of the flow stays in the cortex as peritubular capillaries (net reabsorption), while only 5-10% descends as vasa recta into the medulla - " +
    "enough to preserve the salt gradient, little enough that the medulla is the first thing to die in a low-flow state (ATN). " +
    "The 60 mmHg glomerular capillary pressure itself is shown in the Starling-forces figure, not here.",
  svg: `
<svg viewBox="0 0 640 318" role="img" aria-label="A bolus of blood traced from the aorta through renal, segmental, interlobar, arcuate and interlobular arteries, then afferent arteriole, glomerulus and efferent arteriole. Pressure falls from a mean arterial pressure of 70 to 105 down to about 50 to 60 at the afferent arteriole. After the efferent arteriole a thick stream feeds cortical peritubular capillaries while a thin stream carrying only 5 to 10 percent descends as vasa recta into the medulla.">
  <style>
    .dg7p-chip { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg7p-cn   { font-size: 10.5px; font-weight: 600; }
    .dg7p-lbl  { font-size: 10.5px; }
    .dg7p-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg7p-key  { font-size: 10px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .06em; }
    .dg7p-warn { font-size: 9.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg7p-tube { fill: none; stroke-linecap: round; }
    .dg7p-base { stroke: var(--dg-line); }
    .dg7p-flow { stroke: var(--dg-accent); stroke-dasharray: 8 14; animation: dg7pflow 1.3s linear infinite; }
    .dg7p-trick{ stroke: var(--dg-warm); stroke-dasharray: 6 16; animation: dg7pflow 4.4s linear infinite; }
    @keyframes dg7pflow { to { stroke-dashoffset: -44; } }
    .dg7p-bolus { fill: var(--dg-accent); animation: dg7phop 7s ease-in-out infinite; }
    @keyframes dg7phop {
      0%,12%   { transform: translateX(0); }
      15%,27%  { transform: translateX(105px); }
      30%,42%  { transform: translateX(210px); }
      45%,57%  { transform: translateX(315px); }
      60%,72%  { transform: translateX(420px); }
      75%,100% { transform: translateX(525px); }
    }
    .dg7p-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg7p-tuft { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg7p-cap  { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; opacity: .85; }
    .dg7p-tip  { fill: var(--dg-muted); opacity: .8; }
  </style>

  <circle cx="56" cy="15" r="5" class="dg7p-bolus"/>

  <rect x="10"  y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="56"  y="43" class="dg7p-cn" text-anchor="middle">Aorta</text>
  <polygon points="105,39 114,43 105,47" class="dg7p-tip"/>
  <rect x="115" y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="161" y="43" class="dg7p-cn" text-anchor="middle">Renal artery</text>
  <polygon points="210,39 219,43 210,47" class="dg7p-tip"/>
  <rect x="220" y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="266" y="43" class="dg7p-cn" text-anchor="middle">Segmental</text>
  <polygon points="315,39 324,43 315,47" class="dg7p-tip"/>
  <rect x="325" y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="371" y="43" class="dg7p-cn" text-anchor="middle">Interlobar</text>
  <polygon points="420,39 429,43 420,47" class="dg7p-tip"/>
  <rect x="430" y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="476" y="43" class="dg7p-cn" text-anchor="middle">Arcuate</text>
  <polygon points="525,39 534,43 525,47" class="dg7p-tip"/>
  <rect x="535" y="24" width="92" height="30" rx="7" class="dg7p-chip"/>
  <text x="581" y="43" class="dg7p-cn" text-anchor="middle">Interlobular</text>

  <text x="330" y="78" class="dg7p-sub" text-anchor="middle">pressure falls as resistance climbs: MAP 70-105 mmHg down to ~50-60 mmHg at the afferent arteriole</text>
  <path d="M 627 56 C 627 82 606 88 578 88 L 96 88 C 62 88 44 100 42 126 L 42 138" class="dg7p-tube dg7p-base" stroke-width="3.5"/>
  <path d="M 627 56 C 627 82 606 88 578 88 L 96 88 C 62 88 44 100 42 126 L 42 138" class="dg7p-tube dg7p-flow" stroke-width="3.5"/>
  <polygon points="36,136 48,136 42,150" fill="var(--dg-accent)"/>

  <line x1="28" y1="150" x2="150" y2="150" class="dg7p-tube dg7p-base" stroke-width="13"/>
  <line x1="28" y1="150" x2="150" y2="150" class="dg7p-tube dg7p-flow" stroke-width="13"/>
  <text x="89" y="176" class="dg7p-lbl" text-anchor="middle">Afferent arteriole</text>

  <circle cx="196" cy="150" r="38" class="dg7p-tuft"/>
  <path d="M 174 152 C 180 134 198 128 210 138 C 220 146 214 162 200 166 C 188 169 178 164 174 152" class="dg7p-cap"/>
  <text x="196" y="204" class="dg7p-lbl" text-anchor="middle">Glomerulus</text>

  <line x1="242" y1="150" x2="362" y2="150" class="dg7p-tube dg7p-base" stroke-width="11"/>
  <line x1="242" y1="150" x2="362" y2="150" class="dg7p-tube dg7p-flow" stroke-width="11"/>
  <text x="302" y="176" class="dg7p-lbl" text-anchor="middle">Efferent arteriole</text>

  <path d="M 356 146 C 386 146 392 140 416 140" class="dg7p-tube dg7p-base" stroke-width="12"/>
  <path d="M 356 146 C 386 146 392 140 416 140" class="dg7p-tube dg7p-flow" stroke-width="12"/>
  <path d="M 356 156 C 390 160 396 206 416 214" class="dg7p-tube dg7p-base" stroke-width="3"/>
  <path d="M 356 156 C 390 160 396 206 416 214" class="dg7p-tube dg7p-trick" stroke-width="3"/>

  <rect x="416" y="112" width="212" height="62" rx="9" class="dg7p-box"/>
  <text x="428" y="132" class="dg7p-key">CORTEX</text>
  <text x="428" y="150" class="dg7p-lbl">Peritubular capillaries</text>
  <text x="428" y="166" class="dg7p-sub">most of the flow; net reabsorption</text>

  <rect x="416" y="192" width="212" height="92" rx="9" class="dg7p-box"/>
  <text x="428" y="212" class="dg7p-key">MEDULLA</text>
  <text x="428" y="230" class="dg7p-lbl">Vasa recta</text>
  <text x="428" y="248" class="dg7p-warn">only 5-10% of renal blood flow</text>
  <text x="428" y="264" class="dg7p-sub">keeps the salt gradient concentrated</text>
  <text x="428" y="278" class="dg7p-sub">hypoxia-prone: ATN hits here first</text>

  <text x="28" y="236" class="dg7p-key">RBF ~1 L/min = 20% of cardiac output</text>
  <text x="28" y="252" class="dg7p-sub">on organs that are 0.5% of body weight</text>

  <text x="28" y="296" class="dg7p-sub">Unique in the body: arteriole &#8594; capillary &#8594; arteriole, not venule.</text>
  <text x="28" y="310" class="dg7p-sub">Out: renal vein &#8594; IVC; the left renal vein is longer and takes the left gonadal vein.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Slide 21 - tubuloglomerular feedback, the loop that closes on itself.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv7-tubuloglomerular-feedback"] = {
  title: "Tubuloglomerular feedback",
  caption:
    "Filtrate leaves the glomerulus, runs the proximal tubule and loop of Henle, and the straight distal tubule then doubles back to touch " +
    "its OWN afferent arteriole - that contact is the juxtaglomerular apparatus, with the macula densa sensing NaCl and the JG (granular) cells " +
    "storing renin. High NaCl means GFR is running too high, so ATP and thromboxane A2 constrict the afferent and GFR and RBF fall; low NaCl means " +
    "the opposite, so prostaglandins and renin dilate the afferent and GFR and RBF rise. Because the sensor reads a signal that the arteriole " +
    "upstream of it produced, the correction is self-limiting: NaCl at the macula densa returns to set point. Note the diabetic hijack at the bottom - " +
    "proximal glucose and sodium reabsorption starve the macula densa, so this same loop dilates the afferent and drives early hyperfiltration.",
  svg: `
<svg viewBox="0 0 640 318" role="img" aria-label="The tubuloglomerular feedback loop. Filtrate leaves the glomerulus into the proximal tubule, descends and ascends the loop of Henle, and the straight distal tubule returns to the macula densa, which touches the afferent arteriole of the same nephron. High sodium chloride triggers ATP and thromboxane A2 and the afferent arteriole constricts, lowering GFR and renal blood flow. Low sodium chloride triggers prostaglandins and renin and the afferent arteriole dilates, raising GFR and renal blood flow.">
  <style>
    .dg7f-chipA { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 1.4; }
    .dg7f-chipB { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 1.4; }
    .dg7f-ln    { font-size: 10px; font-weight: 700; }
    .dg7f-ln2   { font-size: 10px; }
    .dg7f-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg7f-lbl   { font-size: 9.5px; }
    .dg7f-tube  { fill: none; stroke-linecap: round; }
    .dg7f-base  { stroke: var(--dg-line); }
    .dg7f-blood { stroke: var(--dg-accent); stroke-dasharray: 7 13; animation: dg7fpump 1.8s linear infinite; }
    @keyframes dg7fpump { to { stroke-dashoffset: -40; } }
    .dg7f-filt  { stroke: var(--dg-accent); stroke-dasharray: 10 16; animation: dg7fdrift 4.6s linear infinite; }
    @keyframes dg7fdrift { to { stroke-dashoffset: -52; } }
    .dg7f-tuft  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg7f-cap   { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; opacity: .85; }
    .dg7f-md    { fill: var(--dg-warm); fill-opacity: .3; stroke: var(--dg-warm); stroke-width: 1.3;
                  animation: dg7fsense 2.6s ease-in-out infinite; }
    @keyframes dg7fsense { 0%,100% { fill-opacity: .16; } 50% { fill-opacity: .58; } }
    .dg7f-armA  { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; animation: dg7farm 3.4s ease-in-out infinite; }
    .dg7f-armB  { fill: none; stroke: var(--dg-good); stroke-width: 2.2; animation: dg7farm 3.4s ease-in-out infinite 1.7s; }
    @keyframes dg7farm { 0%,100% { opacity: .45; } 45% { opacity: 1; } }
    .dg7f-tip   { fill: var(--dg-muted); opacity: .85; }
  </style>

  <rect x="196" y="10" width="436" height="38" rx="8" class="dg7f-chipA"/>
  <text x="208" y="26" class="dg7f-ln" fill="var(--dg-warm)">NaCl HIGH at the macula densa = GFR is running too high</text>
  <text x="208" y="41" class="dg7f-ln2">ATP + thromboxane A2 &#8594; AFFERENT CONSTRICTS &#8594; GFR &#8595;, RBF &#8595;</text>

  <rect x="196" y="54" width="436" height="38" rx="8" class="dg7f-chipB"/>
  <text x="208" y="70" class="dg7f-ln" fill="var(--dg-good)">NaCl LOW = GFR is running too low</text>
  <text x="208" y="85" class="dg7f-ln2">prostaglandins + renin &#8594; AFFERENT DILATES (and RAAS) &#8594; GFR &#8593;, RBF &#8593;</text>

  <path d="M 196 29 C 152 29 122 46 120 100" class="dg7f-armA"/>
  <polygon points="114,100 126,100 120,111" fill="var(--dg-warm)"/>
  <path d="M 196 73 C 172 73 154 82 150 100" class="dg7f-armB"/>
  <polygon points="144,100 156,100 150,111" fill="var(--dg-good)"/>

  <line x1="24" y1="116" x2="172" y2="116" class="dg7f-tube dg7f-base" stroke-width="13"/>
  <line x1="24" y1="116" x2="172" y2="116" class="dg7f-tube dg7f-blood" stroke-width="13"/>
  <text x="24" y="102" class="dg7f-lbl">Afferent arteriole</text>
  <circle cx="76" cy="123" r="5.5" fill="var(--dg-good)" opacity=".65"/>
  <text x="24" y="143" class="dg7f-sub">JG cells: renin</text>

  <circle cx="200" cy="134" r="32" class="dg7f-tuft"/>
  <path d="M 182 136 C 187 121 203 116 213 124 C 222 131 217 145 205 149 C 194 152 184 147 182 136" class="dg7f-cap"/>
  <text x="238" y="110" class="dg7f-lbl">glomerulus</text>
  <line x1="228" y1="150" x2="298" y2="164" class="dg7f-tube dg7f-base" stroke-width="9"/>
  <line x1="228" y1="150" x2="298" y2="164" class="dg7f-tube dg7f-blood" stroke-width="9"/>
  <text x="302" y="168" class="dg7f-sub">efferent arteriole</text>

  <rect x="108" y="124" width="56" height="15" rx="4" class="dg7f-md"/>
  <text x="98" y="177" class="dg7f-sub" text-anchor="middle">macula densa</text>
  <text x="98" y="191" class="dg7f-sub" text-anchor="middle">senses NaCl</text>

  <path d="M 204 166 L 204 178 Q 204 190 224 190 L 462 190 Q 492 190 492 216 L 492 262 Q 492 288 466 288 Q 440 288 440 262 L 440 238 Q 440 224 416 224 L 160 224 Q 136 224 136 200 L 136 141" class="dg7f-tube dg7f-base" stroke-width="9"/>
  <path d="M 204 166 L 204 178 Q 204 190 224 190 L 462 190 Q 492 190 492 216 L 492 262 Q 492 288 466 288 Q 440 288 440 262 L 440 238 Q 440 224 416 224 L 160 224 Q 136 224 136 200 L 136 141" class="dg7f-tube dg7f-filt" stroke-width="9"/>
  <polygon points="336,185 348,190 336,195" class="dg7f-tip"/>
  <polygon points="487,236 497,236 492,247" class="dg7f-tip"/>
  <polygon points="306,219 306,229 294,224" class="dg7f-tip"/>
  <polygon points="131,180 141,180 136,169" class="dg7f-tip"/>
  <text x="250" y="184" class="dg7f-sub">proximal tubule</text>
  <text x="502" y="252" class="dg7f-sub">loop of Henle</text>
  <text x="170" y="240" class="dg7f-sub">straight distal tubule returns to its own glomerulus</text>

  <text x="14" y="296" class="dg7f-sub">Negative feedback: the correction lands on the arteriole that created the signal.</text>
  <text x="14" y="310" class="dg7f-sub">Early diabetes: proximal glucose and Na reabsorption starve the macula densa, so the afferent dilates.</text>
</svg>`,
};

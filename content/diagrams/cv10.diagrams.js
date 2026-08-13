/*
 * CV10 - Transport of Urea, Glucose & Organic Solutes (B. Askari, Ph.D.)
 *
 * Authoring rules live in the header of ../../lecture_diagrams.js and are
 * enforced by scripts/check_diagrams.py. Every value below is this lecture's.
 *
 * Note on the doubled class selectors (".dg10a-sub.dg10a-sub"): the shared
 * stylesheet sets ".lecture-diagram svg text { fill: var(--dg-ink) }", which is
 * specificity (0,1,2) and therefore beats a plain single-class rule - colored
 * label text silently renders as ink, and white-on-accent text disappears
 * entirely. Repeating the class lifts the rule to (0,2,0), which wins, without
 * hardcoding the wrapper class or resorting to inline styles.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Urea: one filtered cohort followed down an unrolled nephron, then the same
// path replayed at low, normal and high urine flow.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv10-urea-nephron-journey"] = {
  title: "Urea down the nephron: out, back in, out again",
  caption:
    "The nephron is unrolled left to right; the badges are a running count of how much of the FILTERED load is still in the lumen. " +
    "100% is filtered, the proximal tubule takes back ~50% <em>around</em> the cells (paracellular: solvent drag plus diffusion across tight junctions), " +
    "the thin limbs secrete an equal amount straight back in (transcellular, UT-A2 of the SLC14 family), and the medullary collecting duct reclaims ~50% of what is there " +
    "via UT-A1 on the apical side and UT-A3 on the basolateral side. Two reabsorption steps and one secretion step still leave ~50% of the filtered load excreted. " +
    "Note the direction rather than the drawing: lumen &#8594; blood is reabsorption no matter which way the loop is drawn. " +
    "The lower panel replays the same nephron at different urine flows &#8212; the lecture's ~15% at low flow (dehydration, low GFR), ~50% at normal flow, ~70% at high flow (Slides 9-10).",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="An unrolled nephron following filtered urea: 100 percent filtered, minus 50 percent reabsorbed paracellularly in the proximal tubule, plus 50 percent secreted back in the thin limbs by UT-A2, minus 50 percent reabsorbed in the medullary collecting duct by UT-A1 and UT-A3, leaving about 50 percent of the filtered load excreted. A lower panel shows excretion of about 15 percent at low urine flow, 50 percent at normal flow and 70 percent at high urine flow.">
  <style>
    .dg10a-strip  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg10a-div    { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg10a-seg.dg10a-seg     { font-size: 10px; fill: var(--dg-muted); }
    .dg10a-cnt    { font-size: 15px; font-weight: 700; }
    .dg10a-tick   { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 3; }
    .dg10a-hdr    { font-size: 10.5px; font-weight: 700; }
    .dg10a-sub.dg10a-sub     { font-size: 9px; fill: var(--dg-muted); }
    .dg10a-shaft  { stroke-width: 5; stroke-linecap: round; fill: none; }
    .dg10a-shpRe  { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg10a-shpSe  { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg10a-txtRe.dg10a-txtRe { fill: var(--dg-cool); }
    .dg10a-txtSe.dg10a-txtSe { fill: var(--dg-warm); }
    .dg10a-txtEx.dg10a-txtEx { fill: var(--dg-good); }
    .dg10a-band   { fill: var(--dg-panel); opacity: .6; }
    .dg10a-tok    { animation: dg10a-run 10s linear infinite; }
    @keyframes dg10a-run {
      0%   { transform: translateX(0);     opacity: 0 }
      3%   { opacity: 1 }
      96%  { opacity: 1 }
      100% { transform: translateX(470px); opacity: 0 }
    }
    .dg10a-drop  { opacity: .9; }
    .dg10a-d1 { animation: dg10a-down1 10s linear infinite; }
    @keyframes dg10a-down1 {
      0%,13%   { opacity: 0; transform: translateY(0) }
      16%      { opacity: 1; transform: translateY(6px) }
      24%      { opacity: 1; transform: translateY(50px) }
      27%,100% { opacity: 0; transform: translateY(50px) }
    }
    .dg10a-d2 { animation: dg10a-up2 10s linear infinite; }
    @keyframes dg10a-up2 {
      0%,48%   { opacity: 0; transform: translateY(0) }
      52%      { opacity: 1; transform: translateY(-6px) }
      60%      { opacity: 1; transform: translateY(-50px) }
      63%,100% { opacity: 0; transform: translateY(-50px) }
    }
    .dg10a-d3 { animation: dg10a-down3 10s linear infinite; }
    @keyframes dg10a-down3 {
      0%,81%   { opacity: 0; transform: translateY(0) }
      84%      { opacity: 1; transform: translateY(6px) }
      92%      { opacity: 1; transform: translateY(50px) }
      95%,100% { opacity: 0; transform: translateY(50px) }
    }
    .dg10a-b1 { animation: dg10a-hl1 10s linear infinite; }
    .dg10a-b2 { animation: dg10a-hl2 10s linear infinite; }
    .dg10a-b3 { animation: dg10a-hl3 10s linear infinite; }
    .dg10a-b4 { animation: dg10a-hl4 10s linear infinite; }
    @keyframes dg10a-hl1 { 0%,13%{ opacity:1 } 20%,100%{ opacity:.3 } }
    @keyframes dg10a-hl2 { 0%,13%{ opacity:.3 } 20%,48%{ opacity:1 } 55%,100%{ opacity:.3 } }
    @keyframes dg10a-hl3 { 0%,48%{ opacity:.3 } 55%,81%{ opacity:1 } 88%,100%{ opacity:.3 } }
    @keyframes dg10a-hl4 { 0%,81%{ opacity:.3 } 88%,100%{ opacity:1 } }
    .dg10a-f1 { animation: dg10a-flow 7.5s linear infinite; }
    .dg10a-f2 { animation: dg10a-flow 4s linear infinite; }
    .dg10a-f3 { animation: dg10a-flow 2.2s linear infinite; }
    @keyframes dg10a-flow {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: .8 }
      90%  { opacity: .8 }
      100% { transform: translateX(238px); opacity: 0 }
    }
  </style>

  <text x="20" y="26" class="dg10a-sub">urea still in the lumen, as % of the filtered load</text>

  <g class="dg10a-b1"><text x="90"  y="62" class="dg10a-cnt" text-anchor="middle">100%</text></g>
  <g class="dg10a-b2"><text x="232" y="62" class="dg10a-cnt" text-anchor="middle">50%</text></g>
  <g class="dg10a-b3"><text x="402" y="62" class="dg10a-cnt" text-anchor="middle">100%</text></g>
  <g class="dg10a-b4"><text x="545" y="62" class="dg10a-cnt dg10a-txtEx" text-anchor="middle">50%</text></g>
  <line x1="90"  y1="68" x2="90"  y2="86" class="dg10a-tick"/>
  <line x1="232" y1="68" x2="232" y2="86" class="dg10a-tick"/>
  <line x1="402" y1="68" x2="402" y2="86" class="dg10a-tick"/>
  <line x1="545" y1="68" x2="545" y2="86" class="dg10a-tick"/>

  <circle cx="32" cy="107" r="15" fill="var(--dg-panel)" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="32" y="140" class="dg10a-sub" text-anchor="middle">glomerulus</text>
  <line x1="49" y1="107" x2="62" y2="107" stroke="var(--dg-ink)" stroke-width="2"/>

  <rect x="64" y="86" width="506" height="42" rx="8" class="dg10a-strip"/>
  <line x1="232" y1="86" x2="232" y2="128" class="dg10a-div"/>
  <line x1="402" y1="86" x2="402" y2="128" class="dg10a-div"/>
  <line x1="520" y1="86" x2="520" y2="128" class="dg10a-div"/>
  <text x="148" y="121" class="dg10a-seg" text-anchor="middle">proximal tubule</text>
  <text x="317" y="121" class="dg10a-seg" text-anchor="middle">thin limbs</text>
  <text x="461" y="121" class="dg10a-seg" text-anchor="middle">medullary CD</text>
  <text x="545" y="121" class="dg10a-seg" text-anchor="middle">urine</text>

  <g class="dg10a-tok">
    <circle cx="76" cy="101" r="6" fill="var(--dg-accent)"/>
    <circle cx="62" cy="101" r="3.5" fill="var(--dg-accent)" opacity=".55"/>
  </g>

  <rect x="64" y="150" width="506" height="14" class="dg10a-band"/>
  <text x="566" y="161" class="dg10a-sub" text-anchor="end">peritubular blood and interstitium</text>

  <line x1="148" y1="128" x2="148" y2="140" class="dg10a-shaft dg10a-shpRe"/>
  <polygon points="140,140 156,140 148,152" class="dg10a-shpRe"/>
  <g class="dg10a-d1 dg10a-drop"><circle cx="148" cy="101" r="4.5" fill="var(--dg-cool)"/></g>

  <line x1="317" y1="152" x2="317" y2="140" class="dg10a-shaft dg10a-shpSe"/>
  <polygon points="309,140 325,140 317,128" class="dg10a-shpSe"/>
  <g class="dg10a-d2 dg10a-drop"><circle cx="317" cy="151" r="4.5" fill="var(--dg-warm)"/></g>

  <line x1="470" y1="128" x2="470" y2="140" class="dg10a-shaft dg10a-shpRe"/>
  <polygon points="462,140 478,140 470,152" class="dg10a-shpRe"/>
  <g class="dg10a-d3 dg10a-drop"><circle cx="470" cy="101" r="4.5" fill="var(--dg-cool)"/></g>

  <line x1="572" y1="101" x2="600" y2="101" class="dg10a-shaft" stroke="var(--dg-good)"/>
  <polygon points="600,93 616,101 600,109" fill="var(--dg-good)"/>
  <text x="616" y="124" class="dg10a-sub dg10a-txtEx" text-anchor="end">excreted</text>

  <text x="148" y="182" class="dg10a-hdr dg10a-txtRe" text-anchor="middle">&#8722;50% reabsorbed</text>
  <text x="148" y="195" class="dg10a-sub" text-anchor="middle">paracellular: solvent drag</text>
  <text x="148" y="206" class="dg10a-sub" text-anchor="middle">+ diffusion across tight junctions</text>

  <text x="317" y="182" class="dg10a-hdr dg10a-txtSe" text-anchor="middle">+50% secreted</text>
  <text x="317" y="195" class="dg10a-sub" text-anchor="middle">transcellular, UT-A2 (SLC14)</text>
  <text x="317" y="206" class="dg10a-sub" text-anchor="middle">restores luminal urea</text>

  <text x="470" y="182" class="dg10a-hdr dg10a-txtRe" text-anchor="middle">&#8722;50% reabsorbed</text>
  <text x="470" y="195" class="dg10a-sub" text-anchor="middle">UT-A1 apical, UT-A3 basolateral</text>
  <text x="470" y="206" class="dg10a-sub" text-anchor="middle">lumen to blood = reabsorption</text>

  <line x1="20" y1="222" x2="620" y2="222" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="20" y="240" class="dg10a-hdr">Same nephron, different urine flow</text>
  <text x="620" y="240" class="dg10a-sub" text-anchor="end">more water reabsorbed = more urea reabsorbed</text>

  <text x="20" y="262" class="dg10a-sub">low flow (dehydration)</text>
  <rect x="200" y="253" width="240" height="11" rx="5" fill="var(--dg-panel)" stroke="var(--dg-line)"/>
  <rect x="200" y="253" width="36" height="11" rx="5" fill="var(--dg-good)" opacity=".85"/>
  <g class="dg10a-f1"><circle cx="206" cy="258.5" r="4" fill="var(--dg-ink)" opacity=".55"/></g>
  <text x="450" y="262" class="dg10a-sub">~15% excreted</text>

  <text x="20" y="285" class="dg10a-sub">normal flow</text>
  <rect x="200" y="276" width="240" height="11" rx="5" fill="var(--dg-panel)" stroke="var(--dg-line)"/>
  <rect x="200" y="276" width="120" height="11" rx="5" fill="var(--dg-good)" opacity=".85"/>
  <g class="dg10a-f2"><circle cx="206" cy="281.5" r="4" fill="var(--dg-ink)" opacity=".55"/></g>
  <text x="450" y="285" class="dg10a-sub">~50% excreted</text>

  <text x="20" y="308" class="dg10a-sub">high flow (IV fluids)</text>
  <rect x="200" y="299" width="240" height="11" rx="5" fill="var(--dg-panel)" stroke="var(--dg-line)"/>
  <rect x="200" y="299" width="168" height="11" rx="5" fill="var(--dg-good)" opacity=".85"/>
  <g class="dg10a-f3"><circle cx="206" cy="304.5" r="4" fill="var(--dg-ink)" opacity=".55"/></g>
  <text x="450" y="308" class="dg10a-sub">~70% excreted</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Glucose: the sodium gradient as the engine behind apical SGLT2 / SGLT1 and
// basolateral GLUT exit in one polarized proximal tubule cell.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv10-proximal-cell-sodium-gradient"] = {
  title: "The sodium gradient runs the proximal tubule",
  caption:
    "Read it in the numbered order, which is also the order the animation runs. (1) The BASOLATERAL Na+/K+-ATPase burns ATP to push Na+ out of the cell, " +
    "so cytosolic Na+ stays low and an inward Na+ gradient exists across the APICAL membrane. Only then can (2) SGLT2 (S1/PCT, 1 Na+ : 1 Glc, high-capacity/low-affinity, ~90% of the load) " +
    "and (3) SGLT1 (S3/PST, 2 Na+ : 1 Glc, low-capacity/high-affinity) drag glucose uphill out of the lumen &#8212; SGLT1's two sodium ions per glucose are why it builds the largest apical gradient " +
    "and can scavenge where luminal glucose is nearly gone. (4) Glucose then leaves down its own gradient through GLUT1/GLUT2: basolateral only, Na+-independent facilitated diffusion, channels rather than cotransporters. " +
    "SGLT2 and SGLT1 actually sit in different segments (S1 vs S3) and are drawn on one cell only to compare them. The pump's Na+:K+ stoichiometry is left unlabelled because this lecture does not state it. " +
    "This same engine reappears for amino acids, oligopeptides and carboxylates (Slide 5).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A polarized proximal tubule cell with lumen on the left and peritubular blood on the right. The basolateral sodium-potassium ATPase pumps sodium out, keeping cytosolic sodium low and creating an inward sodium gradient. Apical SGLT2 in the S1 segment moves one sodium per glucose and handles about 90 percent; apical SGLT1 in the S3 segment moves two sodium per glucose and builds the largest apical gradient. Glucose then leaves basolaterally through GLUT1 and GLUT2 by sodium-independent facilitated diffusion.">
  <style>
    .dg10b-pane  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg10b-cell  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg10b-mem   { stroke: var(--dg-ink); stroke-width: 3.5; }
    .dg10b-cap.dg10b-cap     { font-size: 10px; font-weight: 700; letter-spacing: .06em; fill: var(--dg-muted); }
    .dg10b-name  { font-size: 11.5px; font-weight: 700; }
    .dg10b-sub.dg10b-sub     { font-size: 9px; fill: var(--dg-muted); }
    .dg10b-tiny  { font-size: 8px; }
    .dg10b-boxA  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg10b-boxW  { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2; }
    .dg10b-boxG  { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2; }
    .dg10b-tA.dg10b-tA       { fill: var(--dg-accent); }
    .dg10b-tW.dg10b-tW       { fill: var(--dg-warm); }
    .dg10b-tG.dg10b-tG       { fill: var(--dg-good); }
    .dg10b-tC.dg10b-tC       { fill: var(--dg-cool); }
    .dg10b-step  { fill: var(--dg-accent); }
    .dg10b-stepT.dg10b-stepT { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg10b-grad  { stroke: var(--dg-cool); stroke-width: 2.5; stroke-dasharray: 7 5; fill: none; }
    .dg10b-ion   { opacity: .92; }
    .dg10b-na    { fill: var(--dg-cool); }
    .dg10b-k     { fill: var(--dg-muted); }
    .dg10b-glc   { fill: var(--dg-good); }
    .dg10b-p1 { animation: dg10b-out1 8s linear infinite; }
    @keyframes dg10b-out1 {
      0%       { opacity: 0; transform: translateX(0) }
      5%       { opacity: .92 }
      22%      { opacity: .92; transform: translateX(158px) }
      27%,100% { opacity: 0;  transform: translateX(158px) }
    }
    .dg10b-p2 { animation: dg10b-in2 8s linear infinite; }
    @keyframes dg10b-in2 {
      0%,5%    { opacity: 0; transform: translateX(0) }
      9%       { opacity: .92 }
      27%      { opacity: .92; transform: translateX(-158px) }
      32%,100% { opacity: 0;  transform: translateX(-158px) }
    }
    .dg10b-p3 { animation: dg10b-in3 8s linear infinite; }
    @keyframes dg10b-in3 {
      0%,26%   { opacity: 0; transform: translateX(0) }
      31%      { opacity: .92 }
      55%      { opacity: .92; transform: translateX(250px) }
      60%,100% { opacity: 0;  transform: translateX(250px) }
    }
    .dg10b-p4 { animation: dg10b-in4 8s linear infinite; }
    @keyframes dg10b-in4 {
      0%,36%   { opacity: 0; transform: translateX(0) }
      41%      { opacity: .92 }
      65%      { opacity: .92; transform: translateX(240px) }
      70%,100% { opacity: 0;  transform: translateX(240px) }
    }
    .dg10b-p5 { animation: dg10b-out5 8s linear infinite; }
    @keyframes dg10b-out5 {
      0%,66%   { opacity: 0; transform: translateX(0) }
      71%      { opacity: .92 }
      95%      { opacity: .92; transform: translateX(258px) }
      99%,100% { opacity: 0;  transform: translateX(258px) }
    }
    .dg10b-glow  { animation: dg10b-fire 8s linear infinite; }
    @keyframes dg10b-fire {
      0%,24%   { opacity: 1 }
      34%,100% { opacity: .4 }
    }
    .dg10b-glow2 { animation: dg10b-fire2 8s linear infinite; }
    @keyframes dg10b-fire2 {
      0%,20%   { opacity: .4 }
      28%,64%  { opacity: 1 }
      72%,100% { opacity: .4 }
    }
  </style>

  <text x="14"  y="42" class="dg10b-cap">TUBULAR LUMEN</text>
  <text x="140" y="42" class="dg10b-cap">PROXIMAL TUBULE CELL</text>
  <text x="494" y="42" class="dg10b-cap">PERITUBULAR BLOOD</text>

  <rect x="14"  y="52" width="112" height="210" rx="6" class="dg10b-pane"/>
  <rect x="132" y="52" width="354" height="210" rx="6" class="dg10b-cell"/>
  <rect x="492" y="52" width="154" height="210" rx="6" class="dg10b-pane"/>
  <line x1="132" y1="52" x2="132" y2="262" class="dg10b-mem"/>
  <line x1="486" y1="52" x2="486" y2="262" class="dg10b-mem"/>
  <text x="132" y="276" class="dg10b-sub" text-anchor="middle">apical membrane</text>
  <text x="486" y="276" class="dg10b-sub" text-anchor="middle">basolateral membrane</text>

  <text x="70"  y="76" class="dg10b-name dg10b-tC" text-anchor="middle">Na+ high</text>
  <text x="150" y="76" class="dg10b-name dg10b-tC">Na+ low inside</text>
  <g class="dg10b-glow2">
    <line x1="60" y1="96" x2="228" y2="96" class="dg10b-grad"/>
    <polygon points="228,88 244,96 228,104" fill="var(--dg-cool)"/>
  </g>
  <text x="150" y="116" class="dg10b-sub">the inward Na+ gradient does the work</text>

  <rect x="470" y="80" width="32" height="44" rx="5" class="dg10b-boxW"/>
  <text x="486" y="107" class="dg10b-tiny dg10b-tW" text-anchor="middle">ATP</text>
  <circle cx="470" cy="68" r="9" class="dg10b-step"/>
  <text x="470" y="71.5" class="dg10b-stepT" text-anchor="middle">1</text>
  <text x="456" y="72" class="dg10b-name dg10b-tW" text-anchor="end">Na+/K+-ATPase</text>
  <g class="dg10b-glow">
    <line x1="436" y1="92" x2="586" y2="92" stroke="var(--dg-cool)" stroke-width="2.5"/>
    <polygon points="586,85 602,92 586,99" fill="var(--dg-cool)"/>
    <line x1="602" y1="112" x2="452" y2="112" stroke="var(--dg-muted)" stroke-width="2"/>
    <polygon points="452,105 436,112 452,119" fill="var(--dg-muted)"/>
  </g>
  <text x="608" y="78"  class="dg10b-sub dg10b-tC" text-anchor="end">Na+ out</text>
  <text x="608" y="130" class="dg10b-sub" text-anchor="end">K+ in</text>
  <text x="500" y="150" class="dg10b-sub">keeps cytosolic Na+ low</text>

  <rect x="116" y="140" width="32" height="36" rx="5" class="dg10b-boxA"/>
  <circle cx="172" cy="142" r="9" class="dg10b-step"/>
  <text x="172" y="145.5" class="dg10b-stepT" text-anchor="middle">2</text>
  <text x="186" y="146" class="dg10b-name dg10b-tA">SGLT2 &#183; S1 / PCT &#183; ~90%</text>
  <text x="186" y="176" class="dg10b-sub">1 Na+ : 1 Glc &#183; high capacity, low affinity</text>

  <rect x="116" y="200" width="32" height="36" rx="5" class="dg10b-boxA"/>
  <circle cx="172" cy="202" r="9" class="dg10b-step"/>
  <text x="172" y="205.5" class="dg10b-stepT" text-anchor="middle">3</text>
  <text x="186" y="206" class="dg10b-name dg10b-tA">SGLT1 &#183; S3 / PST &#183; the remainder</text>
  <text x="186" y="236" class="dg10b-sub">2 Na+ : 1 Glc &#183; high affinity, largest apical gradient</text>

  <rect x="470" y="200" width="32" height="36" rx="5" class="dg10b-boxG"/>
  <circle cx="486" cy="186" r="9" class="dg10b-step"/>
  <text x="486" y="189.5" class="dg10b-stepT" text-anchor="middle">4</text>
  <text x="510" y="192" class="dg10b-name dg10b-tG">GLUT1 / GLUT2</text>
  <text x="510" y="208" class="dg10b-sub">basolateral only, channels</text>
  <text x="510" y="220" class="dg10b-sub">Na+-independent</text>
  <text x="510" y="232" class="dg10b-sub">facilitated diffusion</text>

  <text x="70" y="248" class="dg10b-sub" text-anchor="middle">filtered glucose</text>

  <g class="dg10b-p1 dg10b-ion"><circle cx="440" cy="92" r="5.5" class="dg10b-na"/></g>
  <g class="dg10b-p2 dg10b-ion"><circle cx="598" cy="112" r="5.5" class="dg10b-k"/></g>
  <g class="dg10b-p3 dg10b-ion">
    <circle cx="44" cy="158" r="5.5" class="dg10b-na"/>
    <circle cx="62" cy="158" r="6.5" class="dg10b-glc"/>
  </g>
  <g class="dg10b-p4 dg10b-ion">
    <circle cx="30" cy="218" r="5.5" class="dg10b-na"/>
    <circle cx="46" cy="218" r="5.5" class="dg10b-na"/>
    <circle cx="66" cy="218" r="6.5" class="dg10b-glc"/>
  </g>
  <g class="dg10b-p5 dg10b-ion"><circle cx="330" cy="218" r="6.5" class="dg10b-glc"/></g>

  <circle cx="24" cy="298" r="5.5" class="dg10b-na"/>
  <text x="34"  y="302" class="dg10b-sub">Na+</text>
  <circle cx="86" cy="298" r="6.5" class="dg10b-glc"/>
  <text x="97"  y="302" class="dg10b-sub">glucose</text>
  <circle cx="164" cy="298" r="5.5" class="dg10b-k"/>
  <text x="174" y="302" class="dg10b-sub">K+</text>
  <text x="646" y="302" class="dg10b-sub" text-anchor="end">brush border = enormous apical surface, densely packed with SGLT2</text>
</svg>`,
};

// --------------------------------------------------------------------------
// The glucose titration curve, built as plasma glucose is swept upward.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv10-glucose-titration-curve"] = {
  title: "Glucose titration curve: threshold, Tm and splay",
  caption:
    "Plasma glucose is swept upward on a constant IV infusion (not an oral load) and the three curves are drawn as the sweep passes. " +
    "Filtration is passive, so the FILTERED LOAD rises linearly and never saturates. REABSORPTION is carrier-mediated, so it bends over and flattens at the transport maximum, ~400 mg/min, where the apical SGLTs are fully saturated &#8212; " +
    "watch the binding sites fill as the sweep advances. EXCRETION is not a curve to memorize: it is the shaded gap between the other two. " +
    "It starts at the threshold of 200 mg/dL, well above the normal plasma glucose of ~100 mg/dL, which is why healthy people never spill glucose and people with diabetes do not until they cross 200. " +
    "Splay is the gradual rather than abrupt bend, because nephrons are not identical &#8212; a larger glomerulus delivers a larger load and SGLT1/SGLT2 densities differ, so each nephron reaches its own saturation point at a different plasma glucose. " +
    "Only the two values this lecture states (threshold 200 mg/dL, Tm ~400 mg/min) are marked; the lecture gives no GFR, so the slope of the filtered-load line is illustrative rather than calculated (Slide 7).",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="Glucose titration curve. Filtered load rises as a straight line and never saturates. Reabsorption follows it until it bends through the splay region and plateaus at the transport maximum of about 400 milligrams per minute. Excretion is the widening gap between the two curves and begins at the renal threshold of 200 milligrams per decilitre, double the normal plasma glucose of 100. A row of apical SGLT binding sites fills up as plasma glucose is swept upward.">
  <style>
    .dg10c-ax.dg10c-ax       { font-size: 9.5px; fill: var(--dg-muted); }
    .dg10c-axis  { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg10c-tick  { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg10c-lbl   { font-size: 9.5px; font-weight: 700; }
    .dg10c-note.dg10c-note   { font-size: 9px; fill: var(--dg-muted); }
    .dg10c-curve { fill: none; stroke-width: 3; stroke-linecap: round; }
    .dg10c-fl    { stroke: var(--dg-cool); stroke-dasharray: 560; stroke-dashoffset: 0; animation: dg10c-d1 12s linear infinite; }
    .dg10c-re    { stroke: var(--dg-accent); stroke-dasharray: 540; stroke-dashoffset: 0; animation: dg10c-d2 12s linear infinite; }
    .dg10c-ex    { stroke: var(--dg-good); stroke-dasharray: 340; stroke-dashoffset: 0; animation: dg10c-d3 12s linear infinite; }
    @keyframes dg10c-d1 { 0% { stroke-dashoffset: 560 } 78%,100% { stroke-dashoffset: 0 } }
    @keyframes dg10c-d2 { 0% { stroke-dashoffset: 540 } 78%,100% { stroke-dashoffset: 0 } }
    @keyframes dg10c-d3 { 0%,31% { stroke-dashoffset: 340 } 78%,100% { stroke-dashoffset: 0 } }
    .dg10c-gap   { fill: var(--dg-good); opacity: .13; animation: dg10c-fade 12s linear infinite; }
    @keyframes dg10c-fade { 0%,33% { opacity: 0 } 58%,100% { opacity: .13 } }
    .dg10c-thr   { stroke: var(--dg-warm); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg10c-tm    { stroke: var(--dg-accent); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg10c-tW.dg10c-tW       { fill: var(--dg-warm); }
    .dg10c-tA.dg10c-tA       { fill: var(--dg-accent); }
    .dg10c-tC.dg10c-tC       { fill: var(--dg-cool); }
    .dg10c-tG.dg10c-tG       { fill: var(--dg-good); }
    .dg10c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg10c-site  { fill: var(--dg-accent); fill-opacity: 1; stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg10c-s1 { animation: dg10c-f1 12s linear infinite; }
    .dg10c-s2 { animation: dg10c-f2 12s linear infinite; }
    .dg10c-s3 { animation: dg10c-f3 12s linear infinite; }
    .dg10c-s4 { animation: dg10c-f4 12s linear infinite; }
    .dg10c-s5 { animation: dg10c-f5 12s linear infinite; }
    .dg10c-s6 { animation: dg10c-f6 12s linear infinite; }
    @keyframes dg10c-f1 { 0%,4%  { fill-opacity: .08 } 10%,100% { fill-opacity: 1 } }
    @keyframes dg10c-f2 { 0%,13% { fill-opacity: .08 } 19%,100% { fill-opacity: 1 } }
    @keyframes dg10c-f3 { 0%,22% { fill-opacity: .08 } 28%,100% { fill-opacity: 1 } }
    @keyframes dg10c-f4 { 0%,31% { fill-opacity: .08 } 37%,100% { fill-opacity: 1 } }
    @keyframes dg10c-f5 { 0%,40% { fill-opacity: .08 } 46%,100% { fill-opacity: 1 } }
    @keyframes dg10c-f6 { 0%,49% { fill-opacity: .08 } 55%,100% { fill-opacity: 1 } }
    .dg10c-sweep { animation: dg10c-run 12s linear infinite; }
    @keyframes dg10c-run { 0% { transform: translateX(-490px) } 78%,100% { transform: translateX(0) } }
    .dg10c-mark  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg10c-markT.dg10c-markT { font-size: 10px; font-weight: 700; fill: var(--dg-ink); }
  </style>

  <text transform="rotate(-90 20 150)" x="20" y="150" class="dg10c-ax" text-anchor="middle">glucose, mg/min</text>
  <line x1="70" y1="24" x2="70" y2="250" class="dg10c-axis"/>
  <line x1="70" y1="250" x2="575" y2="250" class="dg10c-axis"/>

  <path class="dg10c-gap" d="M266,162 L560,31 L560,110 C500,110 440,116 384,126 C320,140 285,152 266,162 Z"/>

  <line x1="70" y1="110" x2="575" y2="110" class="dg10c-tm"/>
  <text x="76" y="104" class="dg10c-lbl dg10c-tA">Tm ~400 mg/min</text>

  <line x1="266" y1="30" x2="266" y2="250" class="dg10c-thr"/>
  <text x="272" y="44" class="dg10c-lbl dg10c-tW">threshold 200 mg/dL</text>
  <text x="272" y="56" class="dg10c-note">glucosuria begins</text>

  <rect x="86" y="34" width="172" height="54" rx="6" class="dg10c-panel"/>
  <text x="94" y="50" class="dg10c-note">apical SGLT binding sites</text>
  <circle cx="104" cy="70" r="7" class="dg10c-site dg10c-s1"/>
  <circle cx="132" cy="70" r="7" class="dg10c-site dg10c-s2"/>
  <circle cx="160" cy="70" r="7" class="dg10c-site dg10c-s3"/>
  <circle cx="188" cy="70" r="7" class="dg10c-site dg10c-s4"/>
  <circle cx="216" cy="70" r="7" class="dg10c-site dg10c-s5"/>
  <circle cx="244" cy="70" r="7" class="dg10c-site dg10c-s6"/>

  <path class="dg10c-curve dg10c-fl" d="M70,250 L560,31"/>
  <path class="dg10c-curve dg10c-re" d="M70,250 L240,174 C285,152 320,140 384,126 C440,116 500,110 560,110"/>
  <path class="dg10c-curve dg10c-ex" d="M266,250 C310,249 340,244 380,236 C420,228 470,209 560,170"/>

  <text x="556" y="26"  class="dg10c-lbl dg10c-tC" text-anchor="end">filtered load &#183; linear, never saturates</text>
  <text x="556" y="128" class="dg10c-lbl dg10c-tA" text-anchor="end">reabsorption &#183; plateau = Tm</text>
  <text x="556" y="150" class="dg10c-lbl dg10c-tG" text-anchor="end">excretion = filtered &#8722; reabsorbed</text>

  <line x1="330" y1="190" x2="330" y2="148" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="330" y="198" class="dg10c-note" text-anchor="middle">splay: each nephron saturates at its own plasma glucose</text>

  <circle cx="160" cy="232" r="9" class="dg10c-mark"/>
  <text x="160" y="235.5" class="dg10c-markT" text-anchor="middle">A</text>
  <circle cx="400" cy="218" r="9" class="dg10c-mark"/>
  <text x="400" y="221.5" class="dg10c-markT" text-anchor="middle">B</text>
  <circle cx="520" cy="172" r="9" class="dg10c-mark"/>
  <text x="520" y="175.5" class="dg10c-markT" text-anchor="middle">C</text>

  <g class="dg10c-sweep">
    <line x1="560" y1="24" x2="560" y2="250" stroke="var(--dg-ink)" stroke-width="1.5" opacity=".45"/>
    <polygon points="553,250 567,250 560,240" fill="var(--dg-ink)" opacity=".55"/>
  </g>

  <line x1="168" y1="250" x2="168" y2="256" class="dg10c-tick"/>
  <line x1="266" y1="250" x2="266" y2="256" class="dg10c-tick"/>
  <text x="168" y="266" class="dg10c-ax" text-anchor="middle">100 normal</text>
  <text x="266" y="266" class="dg10c-ax" text-anchor="middle">200 threshold</text>
  <text x="470" y="266" class="dg10c-ax" text-anchor="middle">plasma glucose, mg/dL</text>

  <text x="20" y="296" class="dg10c-note">A: all reabsorbed, clearance = 0 &#160;&#183;&#160; B: excretion climbs &#160;&#183;&#160; C: Tm plateau, SGLTs saturated</text>
</svg>`,
};

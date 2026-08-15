// Animated diagrams for CV14 - Physiology: Transport of Acids and Bases.
// Shared stylesheet and authoring rules live in ../../lecture_diagrams.js.

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Bicarbonate reclamation: the eight-step cycle that adds no new base (Slide 9).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv14-bicarb-reclamation"] = {
  title: "Reclaiming filtered bicarbonate",
  caption:
    "Follow one proton. It is secreted into the lumen on NHE3 (1), titrates a filtered HCO3- to H2CO3 (2), " +
    "apical CA IV splits that to H2O and CO2 (3), the CO2 diffuses into the cell as a gas (4), cytosolic CA II " +
    "rebuilds H2CO3 (5) which dissociates to HCO3- and H+ (6), the HCO3- leaves basolaterally on NBCe1 (7), " +
    "and the same proton is recycled back to the lumen (8). The bicarbonate returned to blood is NOT the one " +
    "that was filtered - the filtered molecule was destroyed and an identical one rebuilt, so net new base is zero. " +
    "The only ATP spent is by the basolateral Na+/K+-ATPase maintaining the sodium gradient. This lecture's " +
    "filtered load is 4,320 mmol/d; reabsorption is PCT 80 percent, thick ascending limb 10 percent, DCT 6 percent, " +
    "medullary collecting duct 4 percent, with about 0.01 percent reaching urine.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A proximal tubule cell drawn between the tubular lumen on the left and blood on the right. A proton is pumped out into the lumen, titrates filtered bicarbonate to carbonic acid, apical carbonic anhydrase four splits that into water and carbon dioxide, the carbon dioxide diffuses into the cell, cytosolic carbonic anhydrase two rebuilds carbonic acid which splits into bicarbonate and a proton, the bicarbonate leaves to the blood on a sodium bicarbonate cotransporter, and the proton is recycled back to the lumen. A banner states that net new base added to the body is zero.">
  <style>
    .dg14a-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg14a-txt   { font-size: 9.5px; }
    .dg14a-sub   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg14a-warnT { font-size: 8.5px; fill: var(--dg-warm); }
    .dg14a-cell  { fill: var(--dg-panel); stroke: none; }
    .dg14a-mem   { stroke: var(--dg-ink); stroke-width: 3; }
    .dg14a-badge { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .dg14a-bl    { font-size: 8.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg14a-aOut  { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg14a-aIn   { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg14a-aNew  { stroke: var(--dg-good); fill: var(--dg-good); }
    .dg14a-shaft { stroke-width: 2.4; stroke-linecap: round; }
    .dg14a-tokT  { font-size: 7.5px; font-weight: 700; fill: var(--dg-surface); }
    .dg14a-loop  { fill: none; stroke: var(--dg-warm); stroke-width: 1.6; stroke-dasharray: 5 5; }
    .dg14a-banner{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }

    .dg14a-loopA { animation: dg14aLoop 6s linear infinite; }
    @keyframes dg14aLoop { to { stroke-dashoffset: -60 } }
    .dg14a-t1 { animation: dg14aT1 6s ease-in-out infinite; }
    @keyframes dg14aT1 {
      0%   { transform: translateX(0);     opacity: 0 }
      6%   { opacity: 1 }
      28%  { transform: translateX(-76px); opacity: 1 }
      36%  { transform: translateX(-76px); opacity: 0 }
      100% { transform: translateX(-76px); opacity: 0 }
    }
    .dg14a-t2 { animation: dg14aT2 6s ease-in-out infinite; }
    @keyframes dg14aT2 {
      0%,36% { transform: translateX(0);    opacity: 0 }
      42%    { opacity: 1 }
      62%    { transform: translateX(72px); opacity: 1 }
      70%    { transform: translateX(72px); opacity: 0 }
      100%   { transform: translateX(72px); opacity: 0 }
    }
    .dg14a-t3 { animation: dg14aT3 6s ease-in-out infinite; }
    @keyframes dg14aT3 {
      0%,70% { transform: translateX(0);    opacity: 0 }
      76%    { opacity: 1 }
      94%    { transform: translateX(70px); opacity: 1 }
      100%   { transform: translateX(70px); opacity: 0 }
    }
    .dg14a-glow { animation: dg14aGlow 6s ease-in-out infinite; }
    @keyframes dg14aGlow { 0%,100% { opacity: .35 } 22% { opacity: 1 } 55% { opacity: 1 } }
  </style>

  <text x="18"  y="18" class="dg14a-hd">TUBULAR LUMEN</text>
  <text x="246" y="18" class="dg14a-hd">PROXIMAL TUBULE CELL</text>
  <text x="470" y="18" class="dg14a-hd">BLOOD</text>

  <rect x="236" y="30" width="200" height="238" class="dg14a-cell"/>
  <line x1="236" y1="30" x2="236" y2="268" class="dg14a-mem"/>
  <line x1="436" y1="30" x2="436" y2="268" class="dg14a-mem"/>
  <text x="240" y="280" class="dg14a-sub">apical</text>
  <text x="386" y="280" class="dg14a-sub">basolateral</text>

  <text x="18" y="44" class="dg14a-sub">filtered HCO3-   4,320 mmol/d</text>

  <line x1="230" y1="72" x2="160" y2="72" class="dg14a-aOut dg14a-shaft"/>
  <polygon points="160,65 144,72 160,79" class="dg14a-aOut"/>
  <text x="18" y="66" class="dg14a-txt">1  NHE3 secretes H+</text>
  <g class="dg14a-t1">
    <circle cx="222" cy="72" r="9" fill="var(--dg-warm)"/>
    <text x="222" y="75" class="dg14a-tokT" text-anchor="middle">H+</text>
  </g>

  <text x="18" y="102" class="dg14a-txt">2  H+ + filtered HCO3- gives H2CO3</text>

  <rect x="212" y="116" width="46" height="19" rx="4" class="dg14a-badge dg14a-glow"/>
  <text x="235" y="129" class="dg14a-bl" text-anchor="middle">CA IV</text>
  <text x="18" y="130" class="dg14a-txt">3  H2CO3 gives H2O + CO2</text>
  <text x="18" y="152" class="dg14a-warnT">sulfonamides (acetazolamide) block the CAs</text>

  <line x1="160" y1="180" x2="228" y2="180" class="dg14a-aIn dg14a-shaft"/>
  <polygon points="228,173 244,180 228,187" class="dg14a-aIn"/>
  <text x="18" y="184" class="dg14a-txt">4  CO2 diffuses in</text>
  <g class="dg14a-t2">
    <circle cx="166" cy="180" r="10" fill="var(--dg-cool)"/>
    <text x="166" y="183" class="dg14a-tokT" text-anchor="middle">CO2</text>
  </g>

  <rect x="242" y="196" width="52" height="19" rx="4" class="dg14a-badge"/>
  <text x="268" y="209" class="dg14a-bl" text-anchor="middle">CA II</text>
  <text x="300" y="209" class="dg14a-txt">5  CO2 + H2O to H2CO3</text>
  <text x="242" y="234" class="dg14a-txt">6  H2CO3 gives HCO3- + H+</text>

  <path class="dg14a-loop dg14a-loopA" d="M372,230 L418,230 L418,152 L262,152 L262,90 L252,90"/>
  <polygon points="238,90 252,83 252,97" fill="var(--dg-warm)"/>
  <text x="272" y="143" class="dg14a-warnT">8  the same H+ is recycled</text>

  <line x1="440" y1="254" x2="516" y2="254" class="dg14a-aNew dg14a-shaft"/>
  <polygon points="516,247 532,254 516,261" class="dg14a-aNew"/>
  <text x="444" y="242" class="dg14a-txt">7  NBCe1: HCO3- to plasma</text>
  <g class="dg14a-t3">
    <rect x="442" y="246" width="38" height="16" rx="5" fill="var(--dg-good)"/>
    <text x="461" y="257" class="dg14a-tokT" text-anchor="middle">HCO3-</text>
  </g>
  <text x="444" y="186" class="dg14a-sub">Na+/K+-ATPase here is the</text>
  <text x="444" y="198" class="dg14a-sub">ONLY ATP spent in this cycle</text>

  <rect x="16" y="288" width="608" height="26" rx="6" class="dg14a-banner"/>
  <text x="320" y="305" class="dg14a-txt" text-anchor="middle">Net new base added = 0: the filtered HCO3- is destroyed and an identical one rebuilt.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Reclaim versus generate: the two accounting lines (Slides 8, 9, 10, 11).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv14-new-bicarbonate"] = {
  title: "Reclaim versus generate: the acid ledger",
  caption:
    "Two jobs that students merge into one. On the left, all 4,320 mmol/d of filtered HCO3- is reabsorbed - which " +
    "only returns the body to zero and adds no new base. On the right, every proton handed to a NON-bicarbonate " +
    "buffer leaves a brand-new HCO3- behind: titratable acid (phosphate, creatinine, urate) carries about 30 mmol/d " +
    "and ammonium made from glutamine carries about 40 mmol/d, together the 70 mmol/d of urinary H+ loss and the " +
    "70 mmol/d of de novo HCO3- that exactly offsets the daily nonvolatile acid load. The bars fill in proportion " +
    "to those numbers. All values are this lecture's (Slides 5, 8, 10, 11).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="A two column ledger. The left column, labelled reclaim, shows four thousand three hundred twenty millimoles per day of bicarbonate filtered and the same amount reabsorbed, giving zero new base. The right column, labelled generate, shows titratable acid carrying thirty millimoles per day and ammonium carrying forty millimoles per day, together seventy millimoles per day of urinary proton loss and seventy millimoles per day of newly made bicarbonate returned to the blood. A footer gives the net acid excretion equation.">
  <style>
    .dg14b-hd   { font-size: 10px; font-weight: 700; letter-spacing: .1em; fill: var(--dg-accent); }
    .dg14b-txt  { font-size: 9.5px; }
    .dg14b-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg14b-big  { font-size: 22px; font-weight: 700; }
    .dg14b-mid  { font-size: 13px; font-weight: 700; }
    .dg14b-panel{ fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg14b-track{ fill: var(--dg-panel); }
    .dg14b-warm { fill: var(--dg-warm); }
    .dg14b-cool { fill: var(--dg-cool); }
    .dg14b-good { fill: var(--dg-good); }
    .dg14b-gray { fill: var(--dg-muted); }
    .dg14b-foot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }

    .dg14b-f1 { transform-origin: 26px 0; animation: dg14bFill 6.4s ease-in-out infinite; }
    .dg14b-f2 { transform-origin: 26px 0; animation: dg14bFill 6.4s ease-in-out infinite .5s; }
    .dg14b-f3 { transform-origin: 340px 0; animation: dg14bFill 6.4s ease-in-out infinite 1.4s; }
    .dg14b-f4 { transform-origin: 340px 0; animation: dg14bFill 6.4s ease-in-out infinite 2s; }
    .dg14b-f5 { transform-origin: 340px 0; animation: dg14bFill 6.4s ease-in-out infinite 2.8s; }
    @keyframes dg14bFill {
      0%   { transform: scaleX(.02) }
      26%  { transform: scaleX(1) }
      88%  { transform: scaleX(1) }
      100% { transform: scaleX(.02) }
    }
    .dg14b-zero { animation: dg14bZero 6.4s ease-in-out infinite; }
    @keyframes dg14bZero { 0%,100% { opacity: .4 } 40%,80% { opacity: 1 } }
    .dg14b-sum { animation: dg14bSum 6.4s ease-in-out infinite; }
    @keyframes dg14bSum { 0%,45% { opacity: .3 } 62%,92% { opacity: 1 } 100% { opacity: .3 } }
  </style>

  <rect x="14" y="28" width="296" height="222" rx="8" class="dg14b-panel"/>
  <rect x="330" y="28" width="296" height="222" rx="8" class="dg14b-panel"/>

  <text x="26"  y="20" class="dg14b-hd">RECLAIM  (Slide 9)</text>
  <text x="342" y="20" class="dg14b-hd">GENERATE  (Slides 10-11)</text>

  <text x="26" y="50" class="dg14b-txt">HCO3- filtered</text>
  <text x="298" y="50" class="dg14b-txt" text-anchor="end">4,320 mmol/d</text>
  <rect x="26" y="56" width="272" height="12" rx="3" class="dg14b-track"/>
  <rect x="26" y="56" width="272" height="12" rx="3" class="dg14b-gray dg14b-f1"/>

  <text x="26" y="92" class="dg14b-txt">HCO3- reabsorbed</text>
  <text x="298" y="92" class="dg14b-txt" text-anchor="end">4,320 mmol/d</text>
  <rect x="26" y="98" width="272" height="12" rx="3" class="dg14b-track"/>
  <rect x="26" y="98" width="272" height="12" rx="3" class="dg14b-gray dg14b-f2"/>

  <line x1="26" y1="130" x2="298" y2="130" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="26" y="152" class="dg14b-txt">new base added to the body</text>
  <text x="26" y="192" class="dg14b-big dg14b-gray dg14b-zero">0 mmol/d</text>
  <text x="26" y="214" class="dg14b-sub">the filtered molecule is destroyed as CO2</text>
  <text x="26" y="228" class="dg14b-sub">and an identical one rebuilt inside the cell</text>

  <text x="340" y="50" class="dg14b-txt">titratable acid: H+ onto HPO4 2-</text>
  <text x="614" y="50" class="dg14b-txt" text-anchor="end">30 mmol/d</text>
  <rect x="340" y="56" width="272" height="12" rx="3" class="dg14b-track"/>
  <rect x="340" y="56" width="117" height="12" rx="3" class="dg14b-warm dg14b-f3"/>

  <text x="340" y="92" class="dg14b-txt">ammonium: glutamine to NH4+</text>
  <text x="614" y="92" class="dg14b-txt" text-anchor="end">40 mmol/d</text>
  <rect x="340" y="98" width="272" height="12" rx="3" class="dg14b-track"/>
  <rect x="340" y="98" width="155" height="12" rx="3" class="dg14b-cool dg14b-f4"/>

  <line x1="340" y1="130" x2="612" y2="130" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="340" y="152" class="dg14b-txt">urinary H+ loss = 70 mmol/d</text>
  <rect x="340" y="158" width="272" height="12" rx="3" class="dg14b-track"/>
  <rect x="340" y="158" width="272" height="12" rx="3" class="dg14b-good dg14b-f5"/>
  <text x="340" y="200" class="dg14b-big dg14b-good dg14b-sum">70 mmol/d</text>
  <text x="340" y="220" class="dg14b-mid dg14b-good dg14b-sum">de novo HCO3- to blood</text>
  <text x="340" y="238" class="dg14b-sub">exactly offsets the 70 mmol/d nonvolatile acid load</text>

  <rect x="14" y="258" width="612" height="26" rx="6" class="dg14b-foot"/>
  <text x="320" y="275" class="dg14b-txt" text-anchor="middle">Net H+ excretion  =  [H+ bound to nonvolatile acids]  +  [H+ bound to NH3]  -  [HCO3- excreted]</text>
</svg>`,
};

// --------------------------------------------------------------------------
// The five processes of ammonium handling and the medullary gradient
// (Slides 11-13).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv14-ammonium-recycling"] = {
  title: "Ammonium: made, recycled, trapped",
  caption:
    "Ammonia is the only major buffer the kidney SYNTHESIZES rather than filters - plasma ammonia is essentially " +
    "zero, so filtration contributes nothing. Watch the loop: the proximal tubule makes about 40 mmol/d of NH4+ " +
    "from glutamine (also yielding new HCO3- for the blood), the thick ascending limb pulls NH4+ back out of the " +
    "lumen by letting it ride NKCC2 in place of K+ and slip through ROMK, and the NH4+ piles up in the medullary " +
    "interstitium. From there it re-enters the thin descending limb, crosses into the medullary collecting duct " +
    "through the RhBG and RhCG gas channels where luminal H+ traps it, or washes into the vasa recta for hepatic " +
    "detoxification. Routing NH4+ straight from the loop to the medullary collecting duct bypasses the cortex, " +
    "which is what prevents cortical NH3 loss and limits toxic NH3 returning to the circulation. The shading " +
    "deepening toward the papilla is the corticomedullary NH4+ gradient (Slides 11-13).",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A nephron drawn as a hairpin with a collecting duct and a vasa recta beside it. Numbered arrows show the proximal tubule secreting forty millimoles per day of ammonium into the lumen, the thick ascending limb reabsorbing ammonium into the interstitium, ammonium recycling back into the thin descending limb, ammonium entering the medullary collecting duct through gas channels, and ammonium washing into the vasa recta toward the liver. The medullary interstitium darkens toward the papilla to show the ammonium gradient. A numbered legend repeats the five processes.">
  <style>
    .dg14c-hd   { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg14c-txt  { font-size: 9px; }
    .dg14c-sub  { font-size: 8px; fill: var(--dg-muted); }
    .dg14c-num  { font-size: 8.5px; font-weight: 700; fill: var(--dg-surface); }
    .dg14c-numC { fill: var(--dg-accent); }
    .dg14c-tube { fill: none; stroke: var(--dg-ink); stroke-width: 2.6; stroke-linejoin: round; }
    .dg14c-duct { fill: none; stroke: var(--dg-ink); stroke-width: 2.6; }
    .dg14c-vasa { fill: none; stroke: var(--dg-cool); stroke-width: 2.4; }
    .dg14c-box  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg14c-med  { fill: var(--dg-panel); }
    .dg14c-arr  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2; stroke-linecap: round; }
    .dg14c-arw  { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 2; stroke-linecap: round; }
    .dg14c-arc  { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2; stroke-linecap: round; }
    .dg14c-tok  { fill: var(--dg-accent); }
    .dg14c-tokT { font-size: 7px; font-weight: 700; fill: var(--dg-surface); }
    .dg14c-line { stroke: var(--dg-line); stroke-width: 1; }

    .dg14c-grad1 { animation: dg14cG 7s ease-in-out infinite; }
    .dg14c-grad2 { animation: dg14cG 7s ease-in-out infinite .6s; }
    .dg14c-grad3 { animation: dg14cG 7s ease-in-out infinite 1.2s; }
    @keyframes dg14cG { 0%,100% { opacity: .18 } 55% { opacity: .95 } }
    .dg14c-s1 { animation: dg14cS1 7s ease-in-out infinite; }
    @keyframes dg14cS1 {
      0%   { transform: translate(0,0);      opacity: 0 }
      5%   { opacity: 1 }
      20%  { transform: translate(0,124px);  opacity: 1 }
      26%  { transform: translate(0,124px);  opacity: 0 }
      100% { transform: translate(0,124px);  opacity: 0 }
    }
    .dg14c-s2 { animation: dg14cS2 7s ease-in-out infinite; }
    @keyframes dg14cS2 {
      0%,26% { transform: translate(0,0);      opacity: 0 }
      31%    { opacity: 1 }
      46%    { transform: translate(58px,-6px); opacity: 1 }
      52%    { transform: translate(58px,-6px); opacity: 0 }
      100%   { transform: translate(58px,-6px); opacity: 0 }
    }
    .dg14c-s3 { animation: dg14cS3 7s ease-in-out infinite; }
    @keyframes dg14cS3 {
      0%,52% { transform: translate(0,0);      opacity: 0 }
      57%    { opacity: 1 }
      74%    { transform: translate(46px,0);   opacity: 1 }
      80%    { transform: translate(46px,0);   opacity: 0 }
      100%   { transform: translate(46px,0);   opacity: 0 }
    }
    .dg14c-s4 { animation: dg14cS4 7s ease-in-out infinite; }
    @keyframes dg14cS4 {
      0%,74% { transform: translate(0,0);      opacity: 0 }
      79%    { opacity: 1 }
      96%    { transform: translate(0,-176px); opacity: 1 }
      100%   { transform: translate(0,-176px); opacity: 0 }
    }
  </style>

  <text x="16"  y="16" class="dg14c-hd">CORTEX</text>
  <rect x="12" y="150" width="368" height="150" rx="6" class="dg14c-med" opacity=".45"/>
  <rect x="12" y="196" width="368" height="104" class="dg14c-med dg14c-grad1" opacity=".3"/>
  <rect x="12" y="238" width="368" height="62" class="dg14c-med dg14c-grad2" opacity=".3"/>
  <rect x="12" y="270" width="368" height="30" class="dg14c-med dg14c-grad3" opacity=".3"/>
  <text x="16" y="164" class="dg14c-hd">MEDULLA</text>
  <text x="16" y="294" class="dg14c-sub">interstitial NH4+ rises toward the papilla</text>
  <line x1="12" y1="150" x2="380" y2="150" class="dg14c-line"/>

  <rect x="36" y="40" width="86" height="28" rx="6" class="dg14c-box"/>
  <text x="79" y="58" class="dg14c-txt" text-anchor="middle">PCT</text>
  <text x="36" y="82" class="dg14c-sub">glutamine to alpha-KG</text>
  <text x="36" y="93" class="dg14c-sub">gives 2 NH4+ + new HCO3-</text>

  <path class="dg14c-tube" d="M122,54 L166,54 L166,268 L214,268 L214,54 L262,54"/>
  <text x="140" y="118" class="dg14c-sub">tDLH</text>
  <text x="220" y="118" class="dg14c-sub">tALH</text>
  <text x="220" y="130" class="dg14c-sub">NKCC2 / ROMK</text>

  <path class="dg14c-duct" d="M262,54 L300,54 L300,300"/>
  <text x="306" y="70" class="dg14c-sub">CD</text>
  <text x="306" y="252" class="dg14c-sub">MCD</text>
  <text x="306" y="264" class="dg14c-sub">RhBG / RhCG</text>

  <path class="dg14c-vasa" d="M356,300 L356,40"/>
  <polygon points="356,32 350,46 362,46" fill="var(--dg-cool)"/>
  <text x="336" y="24" class="dg14c-sub">to liver</text>

  <circle cx="150" cy="70" r="8" class="dg14c-numC"/>
  <text x="150" y="73" class="dg14c-num" text-anchor="middle">1</text>
  <g class="dg14c-s1">
    <circle cx="166" cy="86" r="9" class="dg14c-tok"/>
    <text x="166" y="89" class="dg14c-tokT" text-anchor="middle">NH4+</text>
  </g>

  <line x1="218" y1="212" x2="256" y2="206" class="dg14c-arr"/>
  <polygon points="256,199 270,206 256,213" class="dg14c-arr"/>
  <circle cx="232" cy="192" r="8" class="dg14c-numC"/>
  <text x="232" y="195" class="dg14c-num" text-anchor="middle">2</text>
  <g class="dg14c-s2">
    <circle cx="212" cy="212" r="9" class="dg14c-tok"/>
    <text x="212" y="215" class="dg14c-tokT" text-anchor="middle">NH4+</text>
  </g>

  <line x1="200" y1="236" x2="178" y2="236" class="dg14c-arw"/>
  <polygon points="178,229 164,236 178,243" class="dg14c-arw"/>
  <circle cx="190" cy="222" r="8" class="dg14c-numC"/>
  <text x="190" y="225" class="dg14c-num" text-anchor="middle">3</text>

  <line x1="254" y1="272" x2="284" y2="272" class="dg14c-arr"/>
  <polygon points="284,265 298,272 284,279" class="dg14c-arr"/>
  <circle cx="268" cy="256" r="8" class="dg14c-numC"/>
  <text x="268" y="259" class="dg14c-num" text-anchor="middle">4</text>
  <g class="dg14c-s3">
    <circle cx="250" cy="272" r="9" class="dg14c-tok"/>
    <text x="250" y="275" class="dg14c-tokT" text-anchor="middle">NH4+</text>
  </g>

  <line x1="316" y1="220" x2="340" y2="220" class="dg14c-arc"/>
  <polygon points="340,213 354,220 340,227" class="dg14c-arc"/>
  <circle cx="330" cy="204" r="8" class="dg14c-numC"/>
  <text x="330" y="207" class="dg14c-num" text-anchor="middle">5</text>
  <g class="dg14c-s4">
    <circle cx="356" cy="288" r="9" fill="var(--dg-cool)"/>
    <text x="356" y="291" class="dg14c-tokT" text-anchor="middle">NH4+</text>
  </g>

  <line x1="392" y1="16" x2="392" y2="304" class="dg14c-line"/>
  <text x="406" y="30" class="dg14c-hd">FIVE PROCESSES</text>
  <text x="406" y="52" class="dg14c-txt">1  PCT secretes ~40 mmol/d NH4+</text>
  <text x="418" y="64" class="dg14c-sub">into the lumen, via NHE3</text>
  <text x="406" y="90" class="dg14c-txt">2  tALH reabsorbs NH4+ into the</text>
  <text x="418" y="102" class="dg14c-sub">interstitium (NH4+ rides NKCC2</text>
  <text x="418" y="113" class="dg14c-sub">in place of K+, plus ROMK)</text>
  <text x="406" y="139" class="dg14c-txt">3  some recycles back into the</text>
  <text x="418" y="151" class="dg14c-sub">proximal straight tubule / tDLH</text>
  <text x="406" y="177" class="dg14c-txt">4  interstitial NH4+ enters the</text>
  <text x="418" y="189" class="dg14c-sub">collecting duct lumen; luminal H+</text>
  <text x="418" y="200" class="dg14c-sub">traps it as NH4+</text>
  <text x="406" y="226" class="dg14c-txt">5  some enters the vasa recta and</text>
  <text x="418" y="238" class="dg14c-sub">leaves for hepatic detoxification</text>
  <text x="406" y="266" class="dg14c-sub">Bypassing the cortex prevents</text>
  <text x="406" y="277" class="dg14c-sub">cortical NH3 loss and limits toxic</text>
  <text x="406" y="288" class="dg14c-sub">NH3 return to the circulation.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Four disturbances, two compensating organs, and why compensation stops
// short of 7.4 (Slides 14-17, 23).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv14-compensation-map"] = {
  title: "Four disturbances, partial compensation",
  caption:
    "Each row is one of the four fundamental disturbances. The first arrow is the PRIMARY change dragging pH off " +
    "the 7.37 to 7.42 band; the second, green arrow is compensation pulling it back - and stopping short. Note the " +
    "asymmetry the lecture stresses: the two respiratory disorders have NO respiratory response and are compensated " +
    "by the kidney alone, while the two metabolic disorders are answered first by ventilation. The only pH value " +
    "the lecture attaches a number to is the roughly 7.3 reached by chronic compensation in respiratory acidosis; " +
    "the other excursions are drawn schematically, not to scale. Bicarbonate directions are from the Slide 17 table. " +
    "The ski vignette is the third row: altitude lowers PO2, ventilation rises, PaCO2 falls, pH rises, and the " +
    "kidney answers with bicarbonaturia and an alkaline urine (Slide 23).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A pH scale from seven point zero to seven point eight with a green band marking the normal range of seven point three seven to seven point four two. Four rows, one per disorder. In respiratory acidosis and metabolic acidosis an orange arrow drags pH left of the band and a green arrow pulls it partway back. In respiratory alkalosis and metabolic alkalosis a blue arrow drags pH right of the band and a green arrow pulls it partway back. Labels name the primary change and the compensating organ for each row.">
  <style>
    .dg14d-hd   { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg14d-nm   { font-size: 9.5px; font-weight: 700; }
    .dg14d-txt  { font-size: 8.5px; }
    .dg14d-sub  { font-size: 8px; fill: var(--dg-muted); }
    .dg14d-axis { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg14d-band { fill: var(--dg-good); opacity: .18; }
    .dg14d-bedge{ stroke: var(--dg-good); stroke-width: 1; stroke-dasharray: 3 3; }
    .dg14d-rowl { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 2 4; }
    .dg14d-acid { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg14d-alk  { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2.6; stroke-linecap: round; }
    .dg14d-comp { stroke: var(--dg-good); fill: var(--dg-good); stroke-width: 2.6; stroke-linecap: round; }
    .dg14d-acidT{ fill: var(--dg-warm); }
    .dg14d-alkT { fill: var(--dg-cool); }
    .dg14d-compT{ fill: var(--dg-good); }

    .dg14d-p1 { animation: dg14dP1 7s ease-in-out infinite; }
    .dg14d-p2 { animation: dg14dP2 7s ease-in-out infinite; }
    .dg14d-p3 { animation: dg14dP3 7s ease-in-out infinite; }
    .dg14d-p4 { animation: dg14dP4 7s ease-in-out infinite; }
    @keyframes dg14dP1 {
      0%,6%   { transform: translateX(0) }
      30%,42% { transform: translateX(-120px) }
      66%,94% { transform: translateX(-45px) }
      100%    { transform: translateX(0) }
    }
    @keyframes dg14dP2 {
      0%,6%   { transform: translateX(0) }
      30%,42% { transform: translateX(110px) }
      66%,94% { transform: translateX(60px) }
      100%    { transform: translateX(0) }
    }
    @keyframes dg14dP3 {
      0%,6%   { transform: translateX(0) }
      30%,42% { transform: translateX(-105px) }
      66%,94% { transform: translateX(-35px) }
      100%    { transform: translateX(0) }
    }
    @keyframes dg14dP4 {
      0%,6%   { transform: translateX(0) }
      30%,42% { transform: translateX(95px) }
      66%,94% { transform: translateX(45px) }
      100%    { transform: translateX(0) }
    }
    .dg14d-fade { animation: dg14dFade 7s ease-in-out infinite; }
    @keyframes dg14dFade { 0%,20% { opacity: .3 } 40%,100% { opacity: 1 } }
  </style>

  <rect x="316" y="26" width="23" height="252" class="dg14d-band"/>
  <line x1="316" y1="26" x2="316" y2="278" class="dg14d-bedge"/>
  <line x1="339" y1="26" x2="339" y2="278" class="dg14d-bedge"/>
  <line x1="150" y1="26" x2="612" y2="26" class="dg14d-axis"/>
  <text x="150" y="18" class="dg14d-sub">pH 7.0</text>
  <text x="327" y="18" class="dg14d-sub" text-anchor="middle">7.37 - 7.42</text>
  <text x="512" y="18" class="dg14d-sub">7.8</text>
  <text x="196" y="292" class="dg14d-sub dg14d-acidT">acidemia</text>
  <text x="430" y="292" class="dg14d-sub dg14d-alkT">alkalemia</text>
  <text x="14" y="18" class="dg14d-hd">DISORDER</text>

  <line x1="150" y1="70" x2="612" y2="70" class="dg14d-rowl"/>
  <text x="14" y="56" class="dg14d-nm">Respiratory acidosis</text>
  <text x="14" y="68" class="dg14d-txt dg14d-acidT">primary: pCO2 up, HCO3- up</text>
  <text x="14" y="80" class="dg14d-sub">renal only: H+ pumps acutely,</text>
  <text x="14" y="90" class="dg14d-sub">NHE3 + NBCe1 chronically</text>
  <line x1="326" y1="70" x2="222" y2="70" class="dg14d-acid"/>
  <polygon points="222,63 208,70 222,77" class="dg14d-acid"/>
  <line x1="212" y1="86" x2="276" y2="86" class="dg14d-comp dg14d-fade"/>
  <polygon points="276,79 290,86 276,93" class="dg14d-comp dg14d-fade"/>
  <text x="296" y="90" class="dg14d-sub dg14d-compT">stops near 7.3</text>
  <circle cx="326" cy="70" r="6" class="dg14d-acidT dg14d-p1"/>

  <line x1="150" y1="130" x2="612" y2="130" class="dg14d-rowl"/>
  <text x="14" y="116" class="dg14d-nm">Respiratory alkalosis</text>
  <text x="14" y="128" class="dg14d-txt dg14d-alkT">primary: pCO2 down, HCO3- down</text>
  <text x="14" y="140" class="dg14d-sub">renal only: less HCO3-</text>
  <text x="14" y="150" class="dg14d-sub">reabsorption, alkaline urine</text>
  <line x1="329" y1="130" x2="432" y2="130" class="dg14d-alk"/>
  <polygon points="432,123 446,130 432,137" class="dg14d-alk"/>
  <line x1="442" y1="146" x2="386" y2="146" class="dg14d-comp dg14d-fade"/>
  <polygon points="386,139 372,146 386,153" class="dg14d-comp dg14d-fade"/>
  <text x="452" y="150" class="dg14d-sub dg14d-compT">the altitude case</text>
  <circle cx="329" cy="130" r="6" class="dg14d-alkT dg14d-p2"/>

  <line x1="150" y1="190" x2="612" y2="190" class="dg14d-rowl"/>
  <text x="14" y="176" class="dg14d-nm">Metabolic acidosis</text>
  <text x="14" y="188" class="dg14d-txt dg14d-acidT">primary: HCO3- down, pCO2 down</text>
  <text x="14" y="200" class="dg14d-sub">lungs first (hyperventilation),</text>
  <text x="14" y="210" class="dg14d-sub">then renal H+ and NH3</text>
  <line x1="326" y1="190" x2="236" y2="190" class="dg14d-acid"/>
  <polygon points="236,183 222,190 236,197" class="dg14d-acid"/>
  <line x1="226" y1="206" x2="284" y2="206" class="dg14d-comp dg14d-fade"/>
  <polygon points="284,199 298,206 284,213" class="dg14d-comp dg14d-fade"/>
  <text x="304" y="210" class="dg14d-sub dg14d-compT">chronic cost: calcium stones</text>
  <circle cx="326" cy="190" r="6" class="dg14d-acidT dg14d-p3"/>

  <line x1="150" y1="250" x2="612" y2="250" class="dg14d-rowl"/>
  <text x="14" y="236" class="dg14d-nm">Metabolic alkalosis</text>
  <text x="14" y="248" class="dg14d-txt dg14d-alkT">primary: HCO3- up, pCO2 up</text>
  <text x="14" y="260" class="dg14d-sub">lungs first (hypoventilation),</text>
  <text x="14" y="270" class="dg14d-sub">then beta-intercalated cells</text>
  <line x1="329" y1="250" x2="418" y2="250" class="dg14d-alk"/>
  <polygon points="418,243 432,250 418,257" class="dg14d-alk"/>
  <line x1="428" y1="266" x2="380" y2="266" class="dg14d-comp dg14d-fade"/>
  <polygon points="380,259 366,266 380,273" class="dg14d-comp dg14d-fade"/>
  <text x="438" y="270" class="dg14d-sub dg14d-compT">HCO3- secreted into lumen</text>
  <circle cx="329" cy="250" r="6" class="dg14d-alkT dg14d-p4"/>
</svg>`,
};

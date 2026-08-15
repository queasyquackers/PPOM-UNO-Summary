// Animated diagrams for CV15 - Physiology: Urine Concentration & Dilution.
// Shared stylesheet and authoring rules live in ../../lecture_diagrams.js.

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// The TF/P osmolality profile along the nephron, antidiuresis vs water
// diuresis. The whole point is that the two states are IDENTICAL until the
// fluid leaves the DCT (Slides 10-12).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv15-nephron-osmolality"] = {
  title: "One nephron, two destinations",
  caption:
    "Watch the antidiuresis curve draw first, then the water diuresis curve. They are the SAME line until the " +
    "fluid leaves the distal convoluted tubule. The proximal tubule reabsorbs two thirds of the filtered fluid " +
    "isosmotically, so the ratio never moves. The thin descending limb is permeable to water and impermeable to " +
    "electrolytes, so water leaves and the fluid turns hypertonic. The thick ascending limb - the diluting segment - " +
    "is impermeable to water and permeable to electrolytes, so NaCl leaves and the fluid turns hypotonic. Fluid " +
    "leaving the DCT is hypo-osmotic no matter what the final urine looks like. Only the last segments fork, and " +
    "the fork is set entirely by AVP/ADH. Plasma is 300 mOsm; this lecture's urine range is 40 mOsm (maximal water " +
    "diuresis) to 1200 mOsm (maximal antidiuresis). The curve shapes are schematic - only those three osmolalities " +
    "are stated values (Slides 6, 10, 11, 12).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A graph of tubular fluid osmolality along the nephron. Both curves are flat and isosmotic with plasma through the proximal tubule, rise above plasma in the thin descending limb, and fall well below plasma in the thick ascending limb. After the distal convoluted tubule the two curves separate: with antidiuretic hormone high the curve climbs steeply to twelve hundred milliosmoles in the medullary collecting duct, and with antidiuretic hormone suppressed the curve keeps falling toward forty milliosmoles. A bracket marks the last segments as the antidiuretic hormone sensitive part of the nephron.">
  <style>
    .dg15a-ax    { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg15a-iso   { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 5 4; }
    .dg15a-seg   { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 2 4; }
    .dg15a-lbl   { font-size: 9.5px; font-weight: 700; }
    .dg15a-sub   { font-size: 8px; fill: var(--dg-muted); }
    .dg15a-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg15a-anti  { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg15a-diur  { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg15a-ghost { opacity: .22; }
    .dg15a-antiT { fill: var(--dg-warm); }
    .dg15a-diurT { fill: var(--dg-cool); }
    .dg15a-brk   { stroke: var(--dg-accent); stroke-width: 1.6; fill: none; }
    .dg15a-brkT  { fill: var(--dg-accent); font-size: 8px; font-weight: 700; }

    .dg15a-drawA { stroke-dasharray: 800; animation: dg15aA 10s ease-in-out infinite; }
    @keyframes dg15aA {
      0%   { stroke-dashoffset: 800 }
      38%  { stroke-dashoffset: 0 }
      94%  { stroke-dashoffset: 0 }
      100% { stroke-dashoffset: 800 }
    }
    .dg15a-drawD { stroke-dasharray: 800; animation: dg15aD 10s ease-in-out infinite; }
    @keyframes dg15aD {
      0%,46% { stroke-dashoffset: 800 }
      84%    { stroke-dashoffset: 0 }
      94%    { stroke-dashoffset: 0 }
      100%   { stroke-dashoffset: 800 }
    }
    .dg15a-tagA { animation: dg15aTagA 10s ease-in-out infinite; }
    @keyframes dg15aTagA { 0%,18% { opacity: .3 } 38%,100% { opacity: 1 } }
    .dg15a-tagD { animation: dg15aTagD 10s ease-in-out infinite; }
    @keyframes dg15aTagD { 0%,58% { opacity: .3 } 84%,100% { opacity: 1 } }
  </style>

  <text x="16" y="16" class="dg15a-hd">OSMOLALITY OF TUBULAR FLUID</text>

  <line x1="88" y1="34" x2="88" y2="258" class="dg15a-ax"/>
  <line x1="88" y1="258" x2="626" y2="258" class="dg15a-ax"/>

  <line x1="200" y1="34" x2="200" y2="258" class="dg15a-seg"/>
  <line x1="268" y1="34" x2="268" y2="258" class="dg15a-seg"/>
  <line x1="352" y1="34" x2="352" y2="258" class="dg15a-seg"/>
  <line x1="410" y1="34" x2="410" y2="258" class="dg15a-seg"/>
  <line x1="490" y1="34" x2="490" y2="258" class="dg15a-seg"/>

  <line x1="88" y1="176" x2="626" y2="176" class="dg15a-iso"/>
  <text x="94" y="170" class="dg15a-sub">plasma 300 mOsm</text>
  <text x="94" y="196" class="dg15a-sub">2/3 reabsorbed isosmotically</text>
  <text x="238" y="106" class="dg15a-sub">hypertonic</text>
  <text x="278" y="238" class="dg15a-sub">hypotonic: the diluting segment</text>

  <path class="dg15a-anti dg15a-ghost" d="M92,176 L200,176 C226,176 246,130 268,122 C296,112 324,208 352,214 L410,220 C444,220 462,112 492,96 L612,54"/>
  <path class="dg15a-diur dg15a-ghost" d="M92,176 L200,176 C226,176 246,130 268,122 C296,112 324,208 352,214 L410,220 C444,222 466,236 492,242 L612,250"/>
  <path class="dg15a-anti dg15a-drawA" d="M92,176 L200,176 C226,176 246,130 268,122 C296,112 324,208 352,214 L410,220 C444,220 462,112 492,96 L612,54"/>
  <path class="dg15a-diur dg15a-drawD" d="M92,176 L200,176 C226,176 246,130 268,122 C296,112 324,208 352,214 L410,220 C444,222 466,236 492,242 L612,250"/>

  <text x="618" y="46" class="dg15a-lbl dg15a-antiT dg15a-tagA" text-anchor="end">ADH high: up to 1200 mOsm</text>
  <text x="618" y="232" class="dg15a-lbl dg15a-diurT dg15a-tagD" text-anchor="end">ADH suppressed: down to 40 mOsm</text>

  <text x="146" y="272" class="dg15a-sub" text-anchor="middle">PT</text>
  <text x="234" y="272" class="dg15a-sub" text-anchor="middle">tDLH</text>
  <text x="310" y="272" class="dg15a-sub" text-anchor="middle">tALH</text>
  <text x="381" y="272" class="dg15a-sub" text-anchor="middle">DCT</text>
  <text x="450" y="272" class="dg15a-sub" text-anchor="middle">ICT / CCT</text>
  <text x="551" y="272" class="dg15a-sub" text-anchor="middle">OMCD / IMCD</text>

  <path class="dg15a-brk" d="M412,282 L412,288 L610,288 L610,282"/>
  <text x="511" y="298" class="dg15a-brkT" text-anchor="middle">AVP/ADH-sensitive: here water reabsorption is variable</text>
</svg>`,
};

// --------------------------------------------------------------------------
// AVP/ADH at the V2 receptor: the cAMP cascade that puts AQP2 in the LUMINAL
// membrane (Slide 13, with the lecturer's spoken correction of the slide).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv15-avp-aqp2"] = {
  title: "V2 receptor to AQP2: the only regulated step",
  caption:
    "Follow the sequence. AVP/ADH arrives from the blood and binds the V2 receptor on the basolateral side of the " +
    "collecting duct cell. V2 is a GPCR that activates adenylate cyclase, cAMP rises, and cAMP drives both " +
    "transcription of AQP2 and insertion of AQP2-bearing vesicles into the membrane facing the LUMEN. Only then " +
    "does water follow its gradient out of the tubule. The basolateral aquaporins are a different isoform, are " +
    "always present, and are NOT regulated by ADH - so AQP2 insertion is the single controlled step in the whole " +
    "pathway. Slide 13 prints basolateral for the AQP2 insertion site; the lecturer corrected this out loud to the " +
    "luminal membrane, which is the side that has to be regulated. Caffeine inhibits the phosphodiesterase that " +
    "degrades cAMP, which the lecturer offered as part of the pharmacology behind coffee and urinary urgency.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A collecting duct principal cell drawn with the tubular lumen on the left and blood on the right. Antidiuretic hormone travels from the blood and docks on the V2 receptor in the basolateral membrane. An arrow leads to adenylate cyclase, which converts ATP to cyclic AMP. A vesicle carrying aquaporin two then travels leftward and inserts into the luminal membrane, after which water crosses from the lumen through the cell and out into the blood. A label notes that the basolateral aquaporins are a different isoform and are not regulated by antidiuretic hormone, and a footer notes that slide thirteen says basolateral but the lecturer corrected it to luminal.">
  <style>
    .dg15b-hd    { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg15b-txt   { font-size: 9px; }
    .dg15b-sub   { font-size: 8px; fill: var(--dg-muted); }
    .dg15b-cell  { fill: var(--dg-panel); }
    .dg15b-mem   { stroke: var(--dg-ink); stroke-width: 3; }
    .dg15b-badge { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .dg15b-bl    { font-size: 8.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg15b-arr   { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.2; stroke-linecap: round; }
    .dg15b-wat   { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2.2; stroke-linecap: round; }
    .dg15b-tokT  { font-size: 7px; font-weight: 700; fill: var(--dg-surface); }
    .dg15b-chan  { fill: var(--dg-good); }
    .dg15b-note  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg15b-warmT { fill: var(--dg-warm); font-size: 8px; }

    .dg15b-avp { animation: dg15bAvp 8s ease-in-out infinite; }
    @keyframes dg15bAvp {
      0%   { transform: translateX(0);     opacity: 0 }
      4%   { opacity: 1 }
      16%  { transform: translateX(-84px); opacity: 1 }
      100% { transform: translateX(-84px); opacity: 1 }
    }
    .dg15b-ac { animation: dg15bAc 8s ease-in-out infinite; }
    @keyframes dg15bAc { 0%,16% { opacity: .3 } 26%,100% { opacity: 1 } }
    .dg15b-camp { animation: dg15bCamp 8s ease-in-out infinite; }
    @keyframes dg15bCamp {
      0%,22% { transform: scale(.4); opacity: 0 }
      34%    { transform: scale(1);  opacity: 1 }
      100%   { transform: scale(1);  opacity: 1 }
    }
    .dg15b-ves { animation: dg15bVes 8s ease-in-out infinite; }
    @keyframes dg15bVes {
      0%,36% { transform: translateX(0);     opacity: 1 }
      58%    { transform: translateX(-128px); opacity: 1 }
      64%    { transform: translateX(-128px); opacity: 0 }
      100%   { transform: translateX(-128px); opacity: 0 }
    }
    .dg15b-pore { animation: dg15bPore 8s ease-in-out infinite; }
    @keyframes dg15bPore { 0%,56% { opacity: .12 } 62%,100% { opacity: 1 } }
    .dg15b-w1 { animation: dg15bW 8s linear infinite; }
    .dg15b-w2 { animation: dg15bW 8s linear infinite .8s; }
    @keyframes dg15bW {
      0%,62% { transform: translateX(0);    opacity: 0 }
      66%    { opacity: 1 }
      96%    { transform: translateX(460px); opacity: 1 }
      100%   { transform: translateX(460px); opacity: 0 }
    }
  </style>

  <text x="16"  y="16" class="dg15b-hd">TUBULAR LUMEN</text>
  <text x="196" y="16" class="dg15b-hd">COLLECTING DUCT PRINCIPAL CELL</text>
  <text x="556" y="16" class="dg15b-hd">BLOOD</text>

  <rect x="170" y="30" width="280" height="222" class="dg15b-cell"/>
  <line x1="170" y1="30" x2="170" y2="252" class="dg15b-mem"/>
  <line x1="450" y1="30" x2="450" y2="252" class="dg15b-mem"/>
  <text x="176" y="248" class="dg15b-sub">luminal (apical)</text>
  <text x="386" y="248" class="dg15b-sub">basolateral</text>

  <rect x="436" y="70" width="28" height="34" rx="5" class="dg15b-badge"/>
  <text x="450" y="92" class="dg15b-bl" text-anchor="middle">V2</text>
  <g class="dg15b-avp">
    <circle cx="556" cy="87" r="12" fill="var(--dg-accent)"/>
    <text x="556" y="90" class="dg15b-tokT" text-anchor="middle">AVP</text>
  </g>
  <text x="470" y="120" class="dg15b-sub">V1 on vascular smooth</text>
  <text x="470" y="131" class="dg15b-sub">muscle instead raises Ca2+</text>
  <text x="470" y="142" class="dg15b-sub">and constricts, raising BP</text>

  <line x1="430" y1="87" x2="400" y2="87" class="dg15b-arr"/>
  <polygon points="400,80 386,87 400,94" class="dg15b-arr"/>

  <rect x="286" y="74" width="98" height="24" rx="5" class="dg15b-badge dg15b-ac"/>
  <text x="335" y="90" class="dg15b-bl" text-anchor="middle">adenylate cyclase</text>

  <g class="dg15b-camp">
    <circle cx="335" cy="130" r="19" fill="var(--dg-good)" opacity=".9"/>
    <text x="335" y="133" class="dg15b-tokT" text-anchor="middle">cAMP</text>
  </g>
  <text x="240" y="126" class="dg15b-sub" text-anchor="end">ATP</text>
  <line x1="248" y1="122" x2="302" y2="128" class="dg15b-arr"/>
  <polygon points="302,121 316,129 301,135" class="dg15b-arr"/>

  <rect x="368" y="150" width="42" height="20" rx="5" class="dg15b-badge"/>
  <text x="389" y="164" class="dg15b-bl" text-anchor="middle">PDE</text>
  <text x="416" y="164" class="dg15b-warmT">caffeine inhibits PDE</text>

  <text x="196" y="176" class="dg15b-txt">cAMP: AQP2 transcription + insertion</text>
  <g class="dg15b-ves">
    <circle cx="312" cy="200" r="17" fill="var(--dg-surface)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="312" y="203" class="dg15b-bl" text-anchor="middle">AQP2</text>
  </g>
  <line x1="290" y1="200" x2="216" y2="200" class="dg15b-arr"/>
  <polygon points="216,193 202,200 216,207" class="dg15b-arr"/>

  <rect x="164" y="190" width="12" height="24" rx="3" class="dg15b-chan dg15b-pore"/>
  <rect x="444" y="190" width="12" height="24" rx="3" class="dg15b-chan"/>
  <text x="470" y="198" class="dg15b-sub">AQP3/4: always there,</text>
  <text x="470" y="209" class="dg15b-sub">NOT regulated by ADH</text>

  <line x1="40" y1="202" x2="152" y2="202" class="dg15b-wat"/>
  <polygon points="152,195 166,202 152,209" class="dg15b-wat"/>
  <text x="40" y="192" class="dg15b-sub">H2O follows the gradient</text>
  <g class="dg15b-w1">
    <circle cx="46" cy="202" r="9" fill="var(--dg-cool)"/>
    <text x="46" y="205" class="dg15b-tokT" text-anchor="middle">H2O</text>
  </g>
  <g class="dg15b-w2">
    <circle cx="46" cy="202" r="9" fill="var(--dg-cool)" opacity=".6"/>
  </g>

  <rect x="14" y="266" width="612" height="26" rx="6" class="dg15b-note"/>
  <text x="320" y="283" class="dg15b-txt" text-anchor="middle">AQP2 insertion is the ONLY regulated step. Slide 13 prints basolateral; the lecturer corrected it to the luminal membrane.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// The countercurrent multiplier: a 200 mOsm single effect multiplied to a
// 900 mOsm cortex-to-papilla gradient (Slides 14, 15, 17).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv15-countercurrent"] = {
  title: "Countercurrent multiplier",
  caption:
    "Two hairpins side by side, running in opposite directions. The thick ascending limb pumps NaCl into the " +
    "interstitium through a wall that is impermeable to water: that is the single effect, and by itself NaCl " +
    "transport generates only a 200 mOsm gradient across any portion of the ascending limb. The thin descending " +
    "limb, freely permeable to water and impermeable to NaCl, then loses water into that saltier interstitium and " +
    "delivers an even saltier fluid to the bend - which is what makes the effect multiply rather than merely repeat. " +
    "The interstitial bands deepen from cortex to papilla as that multiplication runs. Beside it, blood in the vasa " +
    "recta flows opposite to the tubular fluid; medullary vessels have lower flow, permeability and volume than " +
    "cortical vessels, so solutes accumulate instead of washing away. Countercurrent exchange multiplies the single " +
    "effect to a 900 mOsm gradient between cortex and papilla (Slide 15). Steady state is reached when salt added " +
    "to the medulla from the tubules is matched by salt leaving in the ascending vasa recta.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A loop of Henle hairpin next to a vasa recta hairpin, both inside a medullary interstitium that shades progressively darker from cortex at the top to papilla at the bottom. Arrows show sodium chloride leaving the thick ascending limb into the interstitium and water leaving the thin descending limb. Tubular fluid flows down the descending limb and up the ascending limb, while blood flows down the descending vasa recta and up the ascending vasa recta, opposite in direction to the neighbouring tubule. Labels state that sodium chloride transport alone generates only a two hundred milliosmole single effect and that countercurrent exchange multiplies this to a nine hundred milliosmole gradient between cortex and papilla.">
  <style>
    .dg15c-hd   { font-size: 9px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg15c-txt  { font-size: 8.5px; }
    .dg15c-sub  { font-size: 7.5px; fill: var(--dg-muted); }
    .dg15c-med  { fill: var(--dg-panel); }
    .dg15c-tube { fill: none; stroke: var(--dg-ink); stroke-width: 2.6; stroke-linejoin: round; }
    .dg15c-vasa { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-linejoin: round; }
    .dg15c-salt { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 2; stroke-linecap: round; }
    .dg15c-wat  { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2; stroke-linecap: round; }
    .dg15c-dirI { fill: var(--dg-ink); }
    .dg15c-dirC { fill: var(--dg-cool); }
    .dg15c-tokT { font-size: 6.5px; font-weight: 700; fill: var(--dg-surface); }
    .dg15c-line { stroke: var(--dg-line); stroke-width: 1; }
    .dg15c-key  { font-size: 8px; font-weight: 700; fill: var(--dg-accent); }
    .dg15c-good { fill: var(--dg-good); font-size: 9px; font-weight: 700; }

    .dg15c-b1 { animation: dg15cB 7s ease-in-out infinite; }
    .dg15c-b2 { animation: dg15cB 7s ease-in-out infinite .5s; }
    .dg15c-b3 { animation: dg15cB 7s ease-in-out infinite 1s; }
    .dg15c-b4 { animation: dg15cB 7s ease-in-out infinite 1.5s; }
    @keyframes dg15cB { 0%,100% { opacity: .16 } 55% { opacity: .9 } }

    .dg15c-s1 { animation: dg15cS 7s ease-in-out infinite; }
    .dg15c-s2 { animation: dg15cS 7s ease-in-out infinite .6s; }
    .dg15c-s3 { animation: dg15cS 7s ease-in-out infinite 1.2s; }
    @keyframes dg15cS {
      0%   { transform: translateX(0);    opacity: 0 }
      8%   { opacity: 1 }
      40%  { transform: translateX(62px); opacity: 1 }
      50%  { transform: translateX(62px); opacity: 0 }
      100% { transform: translateX(62px); opacity: 0 }
    }
    .dg15c-h1 { animation: dg15cH 7s ease-in-out infinite .3s; }
    .dg15c-h2 { animation: dg15cH 7s ease-in-out infinite 1.1s; }
    @keyframes dg15cH {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      40%  { transform: translateX(-54px); opacity: 1 }
      50%  { transform: translateX(-54px); opacity: 0 }
      100% { transform: translateX(-54px); opacity: 0 }
    }
    .dg15c-bl { animation: dg15cBl 7s linear infinite; }
    @keyframes dg15cBl {
      0%   { transform: translate(0,0);      opacity: 0 }
      6%   { opacity: 1 }
      44%  { transform: translate(0,196px);  opacity: 1 }
      52%  { transform: translate(66px,214px); opacity: 1 }
      94%  { transform: translate(66px,10px); opacity: 1 }
      100% { transform: translate(66px,10px); opacity: 0 }
    }
  </style>

  <text x="16" y="16" class="dg15c-hd">CORTEX</text>
  <rect x="86" y="88" width="342" height="212" rx="6" class="dg15c-med" opacity=".4"/>
  <rect x="86" y="140" width="342" height="160" class="dg15c-med dg15c-b1" opacity=".3"/>
  <rect x="86" y="184" width="342" height="116" class="dg15c-med dg15c-b2" opacity=".3"/>
  <rect x="86" y="224" width="342" height="76"  class="dg15c-med dg15c-b3" opacity=".3"/>
  <rect x="86" y="262" width="342" height="38"  class="dg15c-med dg15c-b4" opacity=".3"/>
  <line x1="86" y1="88" x2="428" y2="88" class="dg15c-line"/>
  <text x="16" y="102" class="dg15c-hd">MEDULLA</text>
  <text x="16" y="296" class="dg15c-hd">PAPILLA</text>
  <text x="16" y="130" class="dg15c-sub">interstitial</text>
  <text x="16" y="141" class="dg15c-sub">osmolality</text>
  <text x="16" y="152" class="dg15c-sub">rises</text>

  <path class="dg15c-tube" d="M140,54 L140,272 Q140,286 156,286 L190,286 Q206,286 206,272 L206,54"/>
  <text x="112" y="46" class="dg15c-sub">tDLH</text>
  <text x="192" y="46" class="dg15c-sub">tALH</text>
  <polygon points="134,110 146,110 140,124" class="dg15c-dirI"/>
  <polygon points="200,124 212,124 206,110" class="dg15c-dirI"/>

  <path class="dg15c-vasa" d="M300,54 L300,272 Q300,286 316,286 L350,286 Q366,286 366,272 L366,54"/>
  <text x="272" y="46" class="dg15c-sub">DVR</text>
  <text x="352" y="46" class="dg15c-sub">AVR</text>
  <polygon points="294,110 306,110 300,124" class="dg15c-dirC"/>
  <polygon points="360,124 372,124 366,110" class="dg15c-dirC"/>
  <g class="dg15c-bl">
    <circle cx="300" cy="70" r="7" fill="var(--dg-cool)"/>
  </g>

  <line x1="214" y1="150" x2="266" y2="150" class="dg15c-salt"/>
  <polygon points="266,144 278,150 266,156" class="dg15c-salt"/>
  <line x1="214" y1="196" x2="266" y2="196" class="dg15c-salt"/>
  <polygon points="266,190 278,196 266,202" class="dg15c-salt"/>
  <line x1="214" y1="242" x2="266" y2="242" class="dg15c-salt"/>
  <polygon points="266,236 278,242 266,248" class="dg15c-salt"/>
  <g class="dg15c-s1"><circle cx="220" cy="150" r="8" fill="var(--dg-warm)"/><text x="220" y="153" class="dg15c-tokT" text-anchor="middle">NaCl</text></g>
  <g class="dg15c-s2"><circle cx="220" cy="196" r="8" fill="var(--dg-warm)"/><text x="220" y="199" class="dg15c-tokT" text-anchor="middle">NaCl</text></g>
  <g class="dg15c-s3"><circle cx="220" cy="242" r="8" fill="var(--dg-warm)"/><text x="220" y="245" class="dg15c-tokT" text-anchor="middle">NaCl</text></g>

  <line x1="132" y1="172" x2="106" y2="172" class="dg15c-wat"/>
  <polygon points="106,166 94,172 106,178" class="dg15c-wat"/>
  <line x1="132" y1="218" x2="106" y2="218" class="dg15c-wat"/>
  <polygon points="106,212 94,218 106,224" class="dg15c-wat"/>
  <g class="dg15c-h1"><circle cx="126" cy="172" r="8" fill="var(--dg-cool)"/><text x="126" y="175" class="dg15c-tokT" text-anchor="middle">H2O</text></g>
  <g class="dg15c-h2"><circle cx="126" cy="218" r="8" fill="var(--dg-cool)"/><text x="126" y="221" class="dg15c-tokT" text-anchor="middle">H2O</text></g>

  <line x1="440" y1="30" x2="440" y2="304" class="dg15c-line"/>

  <text x="452" y="46" class="dg15c-key">tALH: the single effect</text>
  <text x="452" y="59" class="dg15c-txt">Reabsorbs solute without water.</text>
  <text x="452" y="71" class="dg15c-txt">IMPERMEABLE to H2O, so the lumen</text>
  <text x="452" y="83" class="dg15c-txt">is diluted and the interstitium salted.</text>
  <text x="452" y="97" class="dg15c-sub">NaCl transport alone gives only a</text>
  <text x="452" y="108" class="dg15c-sub">200 mOsm gradient across any</text>
  <text x="452" y="119" class="dg15c-sub">portion of the ascending limb.</text>

  <text x="452" y="142" class="dg15c-key">tDLH: the amplifier</text>
  <text x="452" y="155" class="dg15c-txt">Freely permeable to H2O,</text>
  <text x="452" y="167" class="dg15c-txt">impermeable to NaCl - so water</text>
  <text x="452" y="179" class="dg15c-txt">leaves and the bend gets saltier.</text>

  <text x="452" y="202" class="dg15c-key">Vasa recta: countercurrent</text>
  <text x="452" y="215" class="dg15c-txt">Blood runs opposite to the fluid in</text>
  <text x="452" y="227" class="dg15c-txt">the neighbouring tubule. Flow,</text>
  <text x="452" y="239" class="dg15c-txt">permeability and volume are all</text>
  <text x="452" y="251" class="dg15c-txt">lower than in the cortex, so solutes</text>
  <text x="452" y="263" class="dg15c-txt">accumulate instead of washing out.</text>

  <text x="452" y="288" class="dg15c-good">Multiplied: 900 mOsm</text>
  <text x="452" y="301" class="dg15c-sub">cortex to papilla (Slide 15)</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Urea recycling: the luminal load falls, is restored by secretion, and falls
// again, leaving urea trapped in the inner medulla (Slide 16).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv15-urea-recycling"] = {
  title: "Urea recycling along the nephron",
  caption:
    "Each bar is the urea still inside the lumen, as a percent of the filtered load, and they fill in order. " +
    "100 percent is filtered, the proximal tubule reabsorbs half of it, then the thin limbs of juxtamedullary " +
    "nephrons SECRETE urea back in so the load returns to essentially 100 percent by the time fluid enters the " +
    "thick ascending limb - which is exactly why luminal urea is several-fold higher than plasma there. " +
    "Reabsorption along the tALH through the cortical collecting duct brings it to about 70 percent, and the inner " +
    "medullary collecting duct takes most of the rest, leaving roughly 15 percent to be excreted. The dashed arrow " +
    "is the recycling limb: urea leaving the IMCD does not stay put, it re-enters the loop of Henle and the vasa " +
    "recta and goes round again. The percentages are the lecturer's; the fractional excretion range is Slide 16.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="A bar chart of luminal urea as a percent of the filtered load at five points along the nephron. One hundred percent is filtered at the glomerulus, fifty percent remains after the proximal tubule reabsorbs half, the load returns to about one hundred percent after the thin limbs secrete urea back into the lumen, about seventy percent remains after reabsorption from the thick ascending limb through the cortical collecting duct, and about fifteen percent remains after the inner medullary collecting duct reabsorbs urea. A dashed arrow loops from the last station back to the loop of Henle to show recycling.">
  <style>
    .dg15d-hd   { font-size: 9.5px; font-weight: 700; letter-spacing: .08em; fill: var(--dg-muted); }
    .dg15d-txt  { font-size: 8.5px; }
    .dg15d-sub  { font-size: 7.5px; fill: var(--dg-muted); }
    .dg15d-val  { font-size: 13px; font-weight: 700; }
    .dg15d-base { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg15d-track{ fill: var(--dg-panel); }
    .dg15d-barA { fill: var(--dg-accent); }
    .dg15d-barW { fill: var(--dg-warm); }
    .dg15d-barG { fill: var(--dg-good); }
    .dg15d-loop { fill: none; stroke: var(--dg-warm); stroke-width: 1.6; stroke-dasharray: 6 5; }
    .dg15d-foot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg15d-num  { font-size: 8px; font-weight: 700; fill: var(--dg-surface); }
    .dg15d-numC { fill: var(--dg-accent); }

    .dg15d-g1 { transform-origin: 82px 236px;  animation: dg15dGrow 8s ease-in-out infinite; }
    .dg15d-g2 { transform-origin: 190px 236px; animation: dg15dGrow 8s ease-in-out infinite .9s; }
    .dg15d-g3 { transform-origin: 300px 236px; animation: dg15dGrow 8s ease-in-out infinite 1.8s; }
    .dg15d-g4 { transform-origin: 410px 236px; animation: dg15dGrow 8s ease-in-out infinite 2.7s; }
    .dg15d-g5 { transform-origin: 528px 236px; animation: dg15dGrow 8s ease-in-out infinite 3.6s; }
    @keyframes dg15dGrow {
      0%   { transform: scaleY(.04) }
      14%  { transform: scaleY(1) }
      88%  { transform: scaleY(1) }
      100% { transform: scaleY(.04) }
    }
    .dg15d-loopA { animation: dg15dLoop 8s linear infinite; }
    @keyframes dg15dLoop { to { stroke-dashoffset: -88 } }
  </style>

  <text x="16" y="16" class="dg15d-hd">UREA REMAINING IN THE LUMEN (% OF FILTERED LOAD)</text>

  <line x1="40" y1="236" x2="620" y2="236" class="dg15d-base"/>

  <rect x="59"  y="116" width="46" height="120" rx="3" class="dg15d-track"/>
  <rect x="59"  y="116" width="46" height="120" rx="3" class="dg15d-barA dg15d-g1"/>
  <text x="82"  y="108" class="dg15d-val dg15d-barA" text-anchor="middle">100%</text>
  <text x="82"  y="250" class="dg15d-txt" text-anchor="middle">glomerulus</text>
  <text x="82"  y="262" class="dg15d-sub" text-anchor="middle">filtered load</text>

  <rect x="167" y="176" width="46" height="60"  rx="3" class="dg15d-track"/>
  <rect x="167" y="176" width="46" height="60"  rx="3" class="dg15d-barW dg15d-g2"/>
  <text x="190" y="168" class="dg15d-val dg15d-barW" text-anchor="middle">50%</text>
  <text x="190" y="250" class="dg15d-txt" text-anchor="middle">proximal tubule</text>
  <text x="190" y="262" class="dg15d-sub" text-anchor="middle">reabsorbs 50%</text>

  <rect x="277" y="116" width="46" height="120" rx="3" class="dg15d-track"/>
  <rect x="277" y="116" width="46" height="120" rx="3" class="dg15d-barA dg15d-g3"/>
  <text x="300" y="108" class="dg15d-val dg15d-barA" text-anchor="middle">100%</text>
  <text x="300" y="250" class="dg15d-txt" text-anchor="middle">tDLH / tALH</text>
  <text x="300" y="262" class="dg15d-sub" text-anchor="middle">SECRETE urea back in</text>

  <rect x="387" y="152" width="46" height="84"  rx="3" class="dg15d-track"/>
  <rect x="387" y="152" width="46" height="84"  rx="3" class="dg15d-barW dg15d-g4"/>
  <text x="410" y="144" class="dg15d-val dg15d-barW" text-anchor="middle">70%</text>
  <text x="410" y="250" class="dg15d-txt" text-anchor="middle">tALH to CCT</text>
  <text x="410" y="262" class="dg15d-sub" text-anchor="middle">reabsorption</text>

  <rect x="505" y="218" width="46" height="18"  rx="3" class="dg15d-track"/>
  <rect x="505" y="218" width="46" height="18"  rx="3" class="dg15d-barG dg15d-g5"/>
  <text x="528" y="210" class="dg15d-val dg15d-barG" text-anchor="middle">15%</text>
  <text x="528" y="250" class="dg15d-txt" text-anchor="middle">IMCD</text>
  <text x="528" y="262" class="dg15d-sub" text-anchor="middle">excreted in urine</text>

  <circle cx="82"  cy="88" r="8" class="dg15d-numC"/><text x="82"  y="91" class="dg15d-num" text-anchor="middle">1</text>
  <circle cx="190" cy="88" r="8" class="dg15d-numC"/><text x="190" y="91" class="dg15d-num" text-anchor="middle">2</text>
  <circle cx="300" cy="88" r="8" class="dg15d-numC"/><text x="300" y="91" class="dg15d-num" text-anchor="middle">3</text>
  <circle cx="410" cy="88" r="8" class="dg15d-numC"/><text x="410" y="91" class="dg15d-num" text-anchor="middle">4</text>
  <circle cx="528" cy="88" r="8" class="dg15d-numC"/><text x="528" y="91" class="dg15d-num" text-anchor="middle">5</text>

  <path class="dg15d-loop dg15d-loopA" d="M528,196 C534,60 400,40 316,58"/>
  <polygon points="316,50 300,60 318,66" fill="var(--dg-warm)"/>
  <text x="356" y="38" class="dg15d-sub" text-anchor="middle">recycled: IMCD urea returns to the loop of Henle and the vasa recta</text>

  <text x="60" y="60" class="dg15d-sub">ADH raises H2O and urea permeability in the IMCD; urea supplies about half</text>
  <text x="60" y="72" class="dg15d-sub">the total osmolality of the deepest inner medulla.</text>

  <rect x="14" y="270" width="612" height="18" rx="5" class="dg15d-foot"/>
  <text x="320" y="283" class="dg15d-txt" text-anchor="middle">Net effect: the kidney excretes LESS urea than it filters. FE(urea) = 15% at minimal urine flow, over 65% at maximal flow.</text>
</svg>`,
};

/*
 * cv30 - Pharmacology of Diuretic Agents, Part 1 (Lecture #30, L. Goldstein, Pharm.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The principal cell: why some diuretics waste K+ and others spare it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv30-k-wasting-sparing"] = {
  title: "Potassium wasting vs potassium sparing",
  caption:
    "Both effects are the same electrical story read in opposite directions, and the current is what moves. " +
    "<b>Left (wasting):</b> any diuretic that blocks Na&#8314; upstream (carbonic anhydrase inhibitor, loop, thiazide) dumps a larger Na&#8314; load onto the principal cells of the late DCT, connecting tubule and collecting duct. Na&#8314; entering through ENaC leaves the lumen more negative, and that lumen-negative gradient is what pulls K&#8314; out through ROMK. Volume depletion then adds RAAS/aldosterone, which raises ENaC, Na&#8314;/K&#8314; ATPase and ROMK activity and deepens the loss &#8212; hypokalemia. " +
    "<b>Right (sparing):</b> block ENaC directly, or block the mineralocorticoid receptor, and Na&#8314; entry falls, the lumen-negative potential fades, and K&#8314; secretion stops. " +
    "Take-away from the lecture: the lumen-negative transepithelial potential created by ENaC is the key determinant of K&#8314; secretion in the distal nephron (Slides 18-19, 23).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two principal cells side by side. On the left, an upstream diuretic delivers a large sodium load to the lumen, sodium enters the cell through the epithelial sodium channel, the lumen becomes more negative, and potassium leaves the cell through the ROMK channel into the lumen, causing potassium wasting and hypokalemia. On the right, the epithelial sodium channel and the mineralocorticoid receptor are blocked, sodium bounces off the closed channel, the lumen negative potential fades, and potassium stays inside the cell, which is the potassium sparing effect.">
  <style>
    .dg30a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg30a-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg30a-gate { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg30a-pump { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg30a-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg30a-lbl  { font-size: 10.5px; font-weight: 700; }
    .dg30a-t    { font-size: 10.5px; }
    .dg30a-s    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg30a-na   { fill: var(--dg-cool); }
    .dg30a-k    { fill: var(--dg-good); }
    .dg30a-neg  { font-size: 15px; font-weight: 700; fill: var(--dg-cool); }
    .dg30a-x    { stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; }

    .dg30a-in1 { animation: dg30aIn 3.6s linear infinite; }
    .dg30a-in2 { animation: dg30aIn 3.6s linear infinite 1.2s; }
    .dg30a-in3 { animation: dg30aIn 3.6s linear infinite 2.4s; }
    @keyframes dg30aIn {
      0%   { transform: translateX(0);    opacity: 0 }
      18%  { opacity: 1 }
      82%  { opacity: 1 }
      100% { transform: translateX(80px); opacity: 0 }
    }
    .dg30a-out1 { animation: dg30aOut 3.6s linear infinite .5s; }
    .dg30a-out2 { animation: dg30aOut 3.6s linear infinite 1.7s; }
    .dg30a-out3 { animation: dg30aOut 3.6s linear infinite 2.9s; }
    @keyframes dg30aOut {
      0%   { transform: translateX(0);     opacity: 0 }
      18%  { opacity: 1 }
      82%  { opacity: 1 }
      100% { transform: translateX(-80px); opacity: 0 }
    }
    .dg30a-pmp { animation: dg30aPmp 3.6s linear infinite; }
    @keyframes dg30aPmp {
      0%   { transform: translateX(0);     opacity: 0 }
      20%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(-38px); opacity: 0 }
    }
    .dg30a-neg1 { animation: dg30aNeg 3.6s ease-in-out infinite .2s; }
    .dg30a-neg2 { animation: dg30aNeg 3.6s ease-in-out infinite .4s; }
    .dg30a-neg3 { animation: dg30aNeg 3.6s ease-in-out infinite .6s; }
    @keyframes dg30aNeg { 0%, 100% { opacity: .3 } 55% { opacity: 1 } }

    .dg30a-bnc1 { animation: dg30aBnc 3.6s ease-in-out infinite; }
    .dg30a-bnc2 { animation: dg30aBnc 3.6s ease-in-out infinite 1.4s; }
    @keyframes dg30aBnc {
      0%, 100% { transform: translateX(0) }
      42%      { transform: translateX(20px) }
      60%      { transform: translateX(4px) }
    }
    .dg30a-jig1 { animation: dg30aJig 3.6s ease-in-out infinite; }
    .dg30a-jig2 { animation: dg30aJig 3.6s ease-in-out infinite .9s; }
    @keyframes dg30aJig {
      0%, 100% { transform: translate(0, 0) }
      33%      { transform: translate(4px, -4px) }
      66%      { transform: translate(-4px, 3px) }
    }
  </style>

  <text x="16" y="22" class="dg30a-hdr">1 &#183; K&#8314; WASTING &#8212; Na&#8314; blocked UPSTREAM</text>
  <text x="340" y="22" class="dg30a-hdr">2 &#183; K&#8314; SPARING &#8212; blocked AT the cell</text>

  <text x="20" y="50" class="dg30a-s">LUMEN</text>
  <text x="76" y="50" class="dg30a-s">PRINCIPAL CELL</text>
  <text x="234" y="50" class="dg30a-s">BLOOD</text>
  <rect x="16" y="56" width="54" height="184" rx="4" class="dg30a-box"/>
  <rect x="70" y="56" width="160" height="184" class="dg30a-cell"/>
  <rect x="230" y="56" width="54" height="184" rx="4" class="dg30a-box"/>

  <text x="20" y="74" class="dg30a-lbl">&#8593;Na&#8314;</text>
  <rect x="62" y="84" width="16" height="26" rx="4" class="dg30a-gate"/>
  <text x="84" y="80" class="dg30a-lbl">ENaC</text>
  <rect x="62" y="176" width="16" height="26" rx="4" class="dg30a-gate"/>
  <text x="84" y="172" class="dg30a-lbl">ROMK</text>
  <circle cx="230" cy="136" r="15" class="dg30a-pump"/>
  <text x="146" y="140" class="dg30a-s">Na&#8314;/K&#8314; ATPase</text>

  <circle cx="32" cy="97" r="6" class="dg30a-na dg30a-in1"/>
  <circle cx="32" cy="97" r="6" class="dg30a-na dg30a-in2"/>
  <circle cx="32" cy="97" r="6" class="dg30a-na dg30a-in3"/>
  <circle cx="112" cy="189" r="6" class="dg30a-k dg30a-out1"/>
  <circle cx="112" cy="189" r="6" class="dg30a-k dg30a-out2"/>
  <circle cx="112" cy="189" r="6" class="dg30a-k dg30a-out3"/>
  <circle cx="252" cy="136" r="6" class="dg30a-k dg30a-pmp"/>

  <text x="36" y="126" class="dg30a-neg dg30a-neg1">&#8722;</text>
  <text x="36" y="146" class="dg30a-neg dg30a-neg2">&#8722;</text>
  <text x="36" y="166" class="dg30a-neg dg30a-neg3">&#8722;</text>
  <text x="48" y="146" class="dg30a-s">lumen</text>
  <text x="48" y="158" class="dg30a-s">&#8722;ve</text>

  <text x="84" y="218" class="dg30a-s">aldosterone &#8593; ENaC, ATPase, ROMK</text>
  <text x="16" y="262" class="dg30a-t">Upstream Na&#8314; block &#8594; &#8593; Na&#8314; delivery &#8594; ENaC entry</text>
  <text x="16" y="278" class="dg30a-t">&#8594; lumen &#8722;ve &#8594; K&#8314; out via ROMK &#8594; hypokalemia</text>

  <text x="344" y="50" class="dg30a-s">LUMEN</text>
  <text x="400" y="50" class="dg30a-s">PRINCIPAL CELL</text>
  <text x="558" y="50" class="dg30a-s">BLOOD</text>
  <rect x="340" y="56" width="54" height="184" rx="4" class="dg30a-box"/>
  <rect x="394" y="56" width="160" height="184" class="dg30a-cell"/>
  <rect x="554" y="56" width="54" height="184" rx="4" class="dg30a-box"/>

  <rect x="386" y="84" width="16" height="26" rx="4" class="dg30a-gate"/>
  <line x1="382" y1="82" x2="406" y2="112" class="dg30a-x"/>
  <line x1="406" y1="82" x2="382" y2="112" class="dg30a-x"/>
  <text x="410" y="80" class="dg30a-lbl">ENaC blocked</text>
  <text x="410" y="94" class="dg30a-s">amiloride, triamterene</text>
  <rect x="386" y="176" width="16" height="26" rx="4" class="dg30a-gate"/>
  <text x="408" y="172" class="dg30a-lbl">ROMK quiet</text>
  <circle cx="470" cy="142" r="15" class="dg30a-pump"/>
  <text x="462" y="146" class="dg30a-lbl">MR</text>
  <line x1="456" y1="130" x2="484" y2="156" class="dg30a-x"/>
  <line x1="484" y1="130" x2="456" y2="156" class="dg30a-x"/>
  <text x="410" y="176" class="dg30a-s">spironolactone, eplerenone</text>
  <circle cx="554" cy="136" r="15" class="dg30a-pump"/>

  <circle cx="356" cy="97" r="6" class="dg30a-na dg30a-bnc1"/>
  <circle cx="352" cy="118" r="6" class="dg30a-na dg30a-bnc2"/>
  <circle cx="424" cy="196" r="6" class="dg30a-k dg30a-jig1"/>
  <circle cx="444" cy="208" r="6" class="dg30a-k dg30a-jig2"/>
  <text x="360" y="126" class="dg30a-neg" opacity=".22">&#8722;</text>
  <text x="360" y="146" class="dg30a-neg" opacity=".22">&#8722;</text>
  <text x="360" y="166" class="dg30a-neg" opacity=".22">&#8722;</text>
  <text x="372" y="152" class="dg30a-s">fades</text>
  <text x="410" y="222" class="dg30a-s">K&#8314; stays in the cell and the blood</text>

  <text x="340" y="262" class="dg30a-t">ENaC or MR blocked &#8594; lumen &#8722;ve potential fades</text>
  <text x="340" y="278" class="dg30a-t">&#8594; K&#8314; secretion stops &#8594; K&#8314;-sparing effect</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Why the CAI diuretic effect brakes in 2-4 days while the acidosis does not.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv30-cai-self-limited"] = {
  title: "The CAI brake: diuresis fades, acidosis does not",
  caption:
    "Three quantities tracked over the 2-4 days of continuous acetazolamide the lecturer describes. " +
    "The natriuresis/diuresis collapses because it is fuelled by <i>filtered</i> bicarbonate: as urinary HCO&#8323;&#8722; loss drives plasma HCO&#8323;&#8722; down, the filtered load falls, less Na&#8314; is left to block in the proximal tubule, and ECF contraction plus the acidosis recruit aldosterone, which upregulates ENaC and reclaims Na&#8314; distally. " +
    "The metabolic acidosis does <b>not</b> fade, because HCO&#8323;&#8722; reabsorption stays blocked and blood buffering capacity is depleted &#8212; which is exactly why acetazolamide keeps working for acute mountain sickness, and why glaucoma (bicarbonate <i>production</i> in the ciliary epithelium, not filtered bicarbonate) is unaffected by the brake. " +
    "Bar heights are schematic; the 2-4 day timing is this lecture's (Slides 27, 29, 32).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three vertical bars tracked from day zero to day four of continuous carbonic anhydrase inhibitor therapy. The natriuresis and diuresis bar falls almost to nothing, the plasma bicarbonate bar falls part way, and the metabolic acidosis bar rises from nothing to full and stays there. Dashed lines mark each bar's day four level, and a text panel on the right explains that the diuretic effect is self limited because it depends on filtered bicarbonate while the acidosis is not self limited, so mountain sickness and glaucoma treatment keep working.">
  <style>
    .dg30b-axis  { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg30b-ghost { fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg30b-end   { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 5 4; opacity: .7; }
    .dg30b-b1    { fill: var(--dg-accent); opacity: .85; }
    .dg30b-b2    { fill: var(--dg-cool); opacity: .85; }
    .dg30b-b3    { fill: var(--dg-warm); opacity: .85; }
    .dg30b-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg30b-lbl   { font-size: 10px; font-weight: 700; }
    .dg30b-t     { font-size: 10.5px; }
    .dg30b-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg30b-cur   { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .55; }

    .dg30b-g1 { transform-box: view-box; transform-origin: 102px 236px; animation: dg30bDrop1 8s ease-in-out infinite; }
    .dg30b-g2 { transform-box: view-box; transform-origin: 208px 236px; animation: dg30bDrop2 8s ease-in-out infinite; }
    .dg30b-g3 { transform-box: view-box; transform-origin: 314px 236px; animation: dg30bRise 8s ease-in-out infinite; }
    @keyframes dg30bDrop1 { 0%, 8% { transform: scaleY(1) } 78%, 100% { transform: scaleY(.12) } }
    @keyframes dg30bDrop2 { 0%, 8% { transform: scaleY(1) } 78%, 100% { transform: scaleY(.44) } }
    @keyframes dg30bRise  { 0%, 8% { transform: scaleY(.08) } 70%, 100% { transform: scaleY(1) } }
    .dg30b-sweep { animation: dg30bSweep 8s ease-in-out infinite; }
    @keyframes dg30bSweep { 0%, 8% { transform: translateX(0) } 78%, 100% { transform: translateX(300px) } }
  </style>

  <text x="16" y="22" class="dg30b-hdr">CONTINUOUS ACETAZOLAMIDE &#8212; DAY 0 TO DAY 4</text>

  <line x1="56" y1="236" x2="360" y2="236" class="dg30b-axis"/>
  <text x="52" y="252" class="dg30b-s">day 0</text>
  <text x="330" y="252" class="dg30b-s">day 4</text>
  <line x1="60" y1="60" x2="60" y2="232" class="dg30b-cur dg30b-sweep"/>

  <rect x="70" y="70" width="64" height="166" class="dg30b-ghost"/>
  <rect x="176" y="70" width="64" height="166" class="dg30b-ghost"/>
  <rect x="282" y="70" width="64" height="166" class="dg30b-ghost"/>

  <g class="dg30b-g1"><rect x="70" y="70" width="64" height="166" class="dg30b-b1"/></g>
  <g class="dg30b-g2"><rect x="176" y="70" width="64" height="166" class="dg30b-b2"/></g>
  <g class="dg30b-g3"><rect x="282" y="70" width="64" height="166" class="dg30b-b3"/></g>

  <line x1="64" y1="216" x2="140" y2="216" class="dg30b-end"/>
  <line x1="170" y1="163" x2="246" y2="163" class="dg30b-end"/>
  <line x1="276" y1="70" x2="352" y2="70" class="dg30b-end"/>

  <text x="70" y="192" class="dg30b-s">day 4</text>
  <text x="176" y="156" class="dg30b-s">day 4</text>
  <text x="282" y="64" class="dg30b-s">day 4</text>

  <text x="66" y="268" class="dg30b-lbl">natriuresis</text>
  <text x="66" y="281" class="dg30b-lbl">/ diuresis</text>
  <text x="170" y="268" class="dg30b-lbl">plasma</text>
  <text x="170" y="281" class="dg30b-lbl">HCO&#8323;&#8722;</text>
  <text x="276" y="268" class="dg30b-lbl">metabolic</text>
  <text x="276" y="281" class="dg30b-lbl">acidosis</text>

  <line x1="382" y1="46" x2="382" y2="284" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="398" y="62" class="dg30b-lbl">WHY THE DIURESIS BRAKES</text>
  <text x="398" y="82" class="dg30b-t">HCO&#8323;&#8722; lost in urine &#8594; plasma</text>
  <text x="398" y="98" class="dg30b-t">HCO&#8323;&#8722; falls &#8594; filtered load falls</text>
  <text x="398" y="114" class="dg30b-t">&#8594; less Na&#8314; left to block</text>
  <text x="398" y="136" class="dg30b-t">&#8595; ECF + acidosis &#8594; aldosterone</text>
  <text x="398" y="152" class="dg30b-t">&#8594; ENaC &#8593; &#8594; Na&#8314; reclaimed distally</text>
  <text x="398" y="180" class="dg30b-lbl">WHY THE ACIDOSIS DOES NOT</text>
  <text x="398" y="200" class="dg30b-t">Drug keeps blocking HCO&#8323;&#8722;</text>
  <text x="398" y="216" class="dg30b-t">reabsorption; buffer depleted</text>
  <text x="398" y="238" class="dg30b-t">&#8594; mountain sickness keeps working</text>
  <text x="398" y="254" class="dg30b-t">&#8594; glaucoma too (aqueous humour</text>
  <text x="398" y="270" class="dg30b-t">uses MADE, not filtered, HCO&#8323;&#8722;)</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Loop diuretics collapse the medullary gradient.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv30-medullary-gradient"] = {
  title: "Loop diuretics erase the medullary gradient",
  caption:
    "The thick ascending limb is impermeable to water, so the salt it pulls out via NKCC2 goes into the interstitium <i>without</i> water. That does two jobs at once: it dilutes the tubular fluid heading for the DCT, and it builds the hypertonic medulla that later pulls water out of the collecting duct through AQP2 when ADH is present. " +
    "Block NKCC2 and both jobs fail together, which is why a loop diuretic patient can neither concentrate urine during hydropenia (the gradient is gone, even with vasopressin on board) nor excrete maximally dilute urine during a water load (the tubular fluid is never diluted, roughly a floor of 200 mOsm/kg). " +
    "The TAL normally reabsorbs about 25% of the filtered Na&#8314; load, which is also where the class's high efficacy comes from (Slides 36, 38).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two kidney medulla panels. On the left, normal function: salt particles move out of the thick ascending limb into the interstitium, whose shading deepens toward the bottom to show the hypertonic medullary gradient, and water is drawn out of the collecting duct into that concentrated medulla so urine can be concentrated. On the right, with a loop diuretic, the NKCC2 transporter is crossed out, the salt particles bounce back into the tubule, the interstitial shading is uniformly pale to show the collapsed gradient, and water travels down the collecting duct instead of leaving it, so urine can be neither concentrated nor maximally diluted.">
  <style>
    .dg30c-frame { fill: none; stroke: var(--dg-line); stroke-width: 1.2; }
    .dg30c-tube  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg30c-gate  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg30c-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg30c-lbl   { font-size: 10px; font-weight: 700; }
    .dg30c-t     { font-size: 10.5px; }
    .dg30c-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg30c-salt  { fill: var(--dg-cool); }
    .dg30c-h2o   { fill: var(--dg-accent); }
    .dg30c-med   { fill: var(--dg-warm); }
    .dg30c-x     { stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; }
    .dg30c-up    { fill: var(--dg-muted); }

    .dg30c-s1 { animation: dg30cSalt 3.8s linear infinite; }
    .dg30c-s2 { animation: dg30cSalt 3.8s linear infinite 1.3s; }
    .dg30c-s3 { animation: dg30cSalt 3.8s linear infinite 2.6s; }
    @keyframes dg30cSalt {
      0%   { transform: translateX(0);    opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(72px); opacity: 0 }
    }
    .dg30c-w1 { animation: dg30cWater 3.8s linear infinite .6s; }
    .dg30c-w2 { animation: dg30cWater 3.8s linear infinite 2.5s; }
    @keyframes dg30cWater {
      0%   { transform: translateX(0);     opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(-70px); opacity: 0 }
    }
    .dg30c-b1 { animation: dg30cBounce 3.8s ease-in-out infinite; }
    .dg30c-b2 { animation: dg30cBounce 3.8s ease-in-out infinite 1.9s; }
    @keyframes dg30cBounce {
      0%, 100% { transform: translateX(0) }
      40%      { transform: translateX(16px) }
      58%      { transform: translateX(2px) }
    }
    .dg30c-d1 { animation: dg30cDown 3.8s linear infinite; }
    .dg30c-d2 { animation: dg30cDown 3.8s linear infinite 1.9s; }
    @keyframes dg30cDown {
      0%   { transform: translateY(0);    opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(96px); opacity: 0 }
    }
  </style>

  <text x="16" y="22" class="dg30c-hdr">NORMAL &#8212; salt out, water stays behind</text>
  <text x="340" y="22" class="dg30c-hdr">LOOP DIURETIC &#8212; NKCC2 blocked</text>

  <g>
    <rect x="16" y="58" width="284" height="46" class="dg30c-med" opacity=".05"/>
    <rect x="16" y="104" width="284" height="46" class="dg30c-med" opacity=".14"/>
    <rect x="16" y="150" width="284" height="46" class="dg30c-med" opacity=".25"/>
    <rect x="16" y="196" width="284" height="46" class="dg30c-med" opacity=".38"/>
    <rect x="16" y="58" width="284" height="184" class="dg30c-frame"/>
  </g>
  <text x="44" y="52" class="dg30c-lbl">TAL</text>
  <text x="196" y="52" class="dg30c-lbl">collecting duct</text>
  <rect x="50" y="58" width="32" height="184" class="dg30c-tube"/>
  <rect x="222" y="58" width="32" height="184" class="dg30c-tube"/>
  <polygon points="66,64 60,76 72,76" class="dg30c-up"/>
  <rect x="74" y="110" width="16" height="24" rx="4" class="dg30c-gate"/>
  <text x="94" y="104" class="dg30c-s">NKCC2</text>

  <circle cx="66" cy="122" r="6" class="dg30c-salt dg30c-s1"/>
  <circle cx="66" cy="122" r="6" class="dg30c-salt dg30c-s2"/>
  <circle cx="66" cy="176" r="6" class="dg30c-salt dg30c-s3"/>
  <circle cx="238" cy="200" r="6" class="dg30c-h2o dg30c-w1"/>
  <circle cx="238" cy="168" r="6" class="dg30c-h2o dg30c-w2"/>

  <text x="98" y="140" class="dg30c-s">salt out, no water</text>
  <text x="98" y="196" class="dg30c-s">gradient deepens &#8595;</text>
  <text x="120" y="228" class="dg30c-s">H&#8322;O pulled out (AQP2 + ADH)</text>
  <text x="16" y="264" class="dg30c-t">Hypertonic medulla &#8594; urine can be concentrated;</text>
  <text x="16" y="280" class="dg30c-t">dilute tubular fluid &#8594; urine can be diluted.</text>

  <g>
    <rect x="340" y="58" width="284" height="46" class="dg30c-med" opacity=".07"/>
    <rect x="340" y="104" width="284" height="46" class="dg30c-med" opacity=".07"/>
    <rect x="340" y="150" width="284" height="46" class="dg30c-med" opacity=".07"/>
    <rect x="340" y="196" width="284" height="46" class="dg30c-med" opacity=".07"/>
    <rect x="340" y="58" width="284" height="184" class="dg30c-frame"/>
  </g>
  <text x="368" y="52" class="dg30c-lbl">TAL</text>
  <text x="520" y="52" class="dg30c-lbl">collecting duct</text>
  <rect x="374" y="58" width="32" height="184" class="dg30c-tube"/>
  <rect x="546" y="58" width="32" height="184" class="dg30c-tube"/>
  <polygon points="390,64 384,76 396,76" class="dg30c-up"/>
  <rect x="398" y="110" width="16" height="24" rx="4" class="dg30c-gate"/>
  <line x1="394" y1="108" x2="418" y2="136" class="dg30c-x"/>
  <line x1="418" y1="108" x2="394" y2="136" class="dg30c-x"/>
  <text x="422" y="104" class="dg30c-s">NKCC2 blocked</text>

  <circle cx="390" cy="122" r="6" class="dg30c-salt dg30c-b1"/>
  <circle cx="390" cy="176" r="6" class="dg30c-salt dg30c-b2"/>
  <circle cx="562" cy="100" r="6" class="dg30c-h2o dg30c-d1"/>
  <circle cx="562" cy="76" r="6" class="dg30c-h2o dg30c-d2"/>

  <text x="422" y="150" class="dg30c-s">solutes stay in the tubule</text>
  <text x="422" y="196" class="dg30c-s">medulla iso-osmotic</text>
  <text x="422" y="222" class="dg30c-s">H&#8322;O stays in duct, even with ADH</text>
  <text x="340" y="264" class="dg30c-t">Gradient gone &#8594; cannot concentrate; solute-rich</text>
  <text x="340" y="280" class="dg30c-t">fluid &#8594; cannot dilute below &#8776;200 mOsm/kg.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. The triple hit on glomerular filtration pressure.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv30-triple-hit-gfr"] = {
  title: "The triple hit: NSAID + ACEi/ARB + diuretic",
  caption:
    "Glomerular filtration pressure survives on two opposing arteriolar tones, and this combination attacks both ends plus the supply line. " +
    "The NSAID removes prostaglandin-mediated afferent vasodilation, so the afferent arteriole constricts and less blood enters; the ACE inhibitor or ARB removes angiotensin II-mediated efferent constriction, so the efferent arteriole dilates and pressure escapes downstream; the diuretic drops effective circulating volume, so renal blood flow falls at the source. " +
    "Any one of the three is usually tolerated. Together, filtration pressure and GFR collapse, and the patient presents like the lecture's 75-year-old on lisinopril, furosemide and naproxen &#8212; dizziness and a sharp rise in serum creatinine (Slides 21, 49).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="A glomerulus with an afferent arteriole entering from the left and an efferent arteriole leaving to the right. The afferent vessel narrows because an NSAID has removed prostaglandin mediated dilation, the efferent vessel widens because an ACE inhibitor or ARB has removed angiotensin two mediated constriction, and an arrow from below shows the diuretic lowering effective circulating volume and renal blood flow. A gauge on the right falls to show glomerular filtration pressure and GFR collapsing, with acute kidney injury as the result.">
  <style>
    .dg30d-vessel { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg30d-ghost  { fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg30d-glom   { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg30d-coil   { fill: none; stroke: var(--dg-accent); stroke-width: 2; }
    .dg30d-hdr    { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg30d-lbl    { font-size: 10.5px; font-weight: 700; }
    .dg30d-t      { font-size: 10.5px; }
    .dg30d-s      { font-size: 9.5px; fill: var(--dg-muted); }
    .dg30d-dot    { fill: var(--dg-cool); }
    .dg30d-gauge  { fill: var(--dg-warm); opacity: .85; }
    .dg30d-arrow  { stroke: var(--dg-warm); stroke-width: 2; fill: var(--dg-warm); }

    .dg30d-aff { transform-box: view-box; transform-origin: 128px 133px; animation: dg30dAff 6s ease-in-out infinite; }
    @keyframes dg30dAff { 0%, 10% { transform: scaleY(1) } 72%, 100% { transform: scaleY(.32) } }
    .dg30d-eff { transform-box: view-box; transform-origin: 375px 133px; animation: dg30dEff 6s ease-in-out infinite; }
    @keyframes dg30dEff { 0%, 10% { transform: scaleY(1) } 72%, 100% { transform: scaleY(1.8) } }
    .dg30d-bar { transform-box: view-box; transform-origin: 502px 228px; animation: dg30dBar 6s ease-in-out infinite; }
    @keyframes dg30dBar { 0%, 10% { transform: scaleY(1) } 72%, 100% { transform: scaleY(.26) } }

    .dg30d-f1 { animation: dg30dFlow 6s linear infinite; }
    .dg30d-f2 { animation: dg30dFlow 6s linear infinite 2s; }
    .dg30d-f3 { animation: dg30dFlow 6s linear infinite 4s; }
    @keyframes dg30dFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      12%  { opacity: .95 }
      70%  { opacity: .35 }
      100% { transform: translateX(150px); opacity: 0 }
    }
  </style>

  <text x="16" y="22" class="dg30d-hdr">THREE HITS ON GLOMERULAR FILTRATION PRESSURE</text>

  <text x="46" y="104" class="dg30d-lbl">afferent arteriole</text>
  <rect x="46" y="116" width="164" height="34" rx="8" class="dg30d-ghost"/>
  <g class="dg30d-aff"><rect x="46" y="116" width="164" height="34" rx="8" class="dg30d-vessel"/></g>
  <circle cx="56" cy="133" r="5" class="dg30d-dot dg30d-f1"/>
  <circle cx="56" cy="133" r="5" class="dg30d-dot dg30d-f2"/>
  <circle cx="56" cy="133" r="5" class="dg30d-dot dg30d-f3"/>
  <text x="46" y="172" class="dg30d-t">1 &#183; NSAID removes PGE&#8322;/PGI&#8322;</text>
  <text x="46" y="187" class="dg30d-t">dilation &#8594; afferent CONSTRICTS</text>

  <circle cx="256" cy="133" r="42" class="dg30d-glom"/>
  <path class="dg30d-coil" d="M232 133 q10 -18 22 0 q12 18 24 0"/>
  <path class="dg30d-coil" d="M232 149 q10 -18 22 0 q12 18 24 0"/>
  <text x="234" y="106" class="dg30d-s">glomerulus</text>

  <text x="302" y="104" class="dg30d-lbl">efferent arteriole</text>
  <rect x="302" y="122" width="148" height="22" rx="8" class="dg30d-ghost"/>
  <g class="dg30d-eff"><rect x="302" y="122" width="148" height="22" rx="8" class="dg30d-vessel"/></g>
  <text x="286" y="172" class="dg30d-t">2 &#183; ACE inhibitor / ARB removes</text>
  <text x="286" y="187" class="dg30d-t">ANG II tone &#8594; efferent DILATES</text>

  <line x1="120" y1="248" x2="120" y2="216" class="dg30d-arrow"/>
  <polygon points="114,218 120,206 126,218" class="dg30d-arrow"/>
  <text x="46" y="264" class="dg30d-t">3 &#183; Diuretic &#8595; effective circulating volume &#8594; &#8595; renal blood flow</text>

  <rect x="478" y="64" width="48" height="170" class="dg30d-ghost"/>
  <g class="dg30d-bar"><rect x="484" y="70" width="36" height="158" class="dg30d-gauge"/></g>
  <text x="534" y="96" class="dg30d-lbl">glomerular</text>
  <text x="534" y="111" class="dg30d-lbl">filtration</text>
  <text x="534" y="126" class="dg30d-lbl">pressure</text>
  <text x="534" y="152" class="dg30d-t">&#8595;&#8595; GFR</text>
  <text x="534" y="176" class="dg30d-t">&#8594; AKI risk</text>
  <text x="478" y="252" class="dg30d-s">&#8593; serum creatinine</text>
</svg>`,
};

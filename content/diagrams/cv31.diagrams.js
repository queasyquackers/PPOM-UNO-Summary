/*
 * cv31 - Pharmacology of Diuretic Agents, Part 2 (Lecture #31, L. Goldstein, Pharm.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Why blocking sodium in the DCT ends up conserving calcium.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv31-dct-calcium"] = {
  title: "Thiazides block Na+ and keep Ca2+",
  caption:
    "The one place a diuretic <i>retains</i> a cation, and the coupling is electrochemical rather than direct. " +
    "Blocking luminal NCC drops intracellular Na&#8314;, which steepens the gradient the basolateral NCX1 exchanger runs on (3 Na&#8314; in, 1 Ca&#178;&#8314; out). " +
    "NCX1 therefore works harder, intracellular Ca&#178;&#8314; falls, and Ca&#178;&#8314; is pulled in from the lumen through apical TRPV5, shuttled across on calbindin, and exported to the blood. PMCA1b is only a fine-tuner, not the main exit. " +
    "Net effect: urinary calcium falls (useful in hypercalciuric stone formers) while frank hypercalcemia stays uncommon because PTH holds serum calcium tightly (Slides 11, 18).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A distal convoluted tubule cell with lumen on the left and blood on the right. The sodium chloride cotransporter on the luminal membrane is crossed out by a thiazide, so sodium and chloride bounce back and are excreted in the urine. Intracellular sodium falls, so the basolateral sodium calcium exchanger NCX1 runs harder, bringing three sodium ions in and moving one calcium ion out to the blood. Calcium then enters the cell from the lumen through the apical TRPV5 channel and crosses on calbindin, while PMCA1b only fine tunes export. A text panel on the right lists the four steps and the result: less urinary calcium and preserved serum calcium.">
  <style>
    .dg31a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg31a-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg31a-gate { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg31a-pump { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg31a-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg31a-lbl  { font-size: 10.5px; font-weight: 700; }
    .dg31a-t    { font-size: 10.5px; }
    .dg31a-s    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg31a-na   { fill: var(--dg-cool); }
    .dg31a-ca   { fill: var(--dg-good); }
    .dg31a-x    { stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; }

    .dg31a-bnc1 { animation: dg31aBnc 4s ease-in-out infinite; }
    .dg31a-bnc2 { animation: dg31aBnc 4s ease-in-out infinite 1.9s; }
    @keyframes dg31aBnc {
      0%, 100% { transform: translateX(0) }
      38%      { transform: translateX(16px) }
      56%      { transform: translateX(2px) }
    }
    .dg31a-down1 { animation: dg31aDown 4s linear infinite; }
    .dg31a-down2 { animation: dg31aDown 4s linear infinite 2s; }
    @keyframes dg31aDown {
      0%   { transform: translateY(0);    opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(78px); opacity: 0 }
    }
    .dg31a-nain1 { animation: dg31aNaIn 4s linear infinite; }
    .dg31a-nain2 { animation: dg31aNaIn 4s linear infinite 1.3s; }
    .dg31a-nain3 { animation: dg31aNaIn 4s linear infinite 2.6s; }
    @keyframes dg31aNaIn {
      0%   { transform: translateX(0);     opacity: 0 }
      20%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(-42px); opacity: 0 }
    }
    .dg31a-cain { animation: dg31aCaIn 4s linear infinite; }
    @keyframes dg31aCaIn {
      0%   { transform: translateX(0);    opacity: 0 }
      20%  { opacity: 1 }
      82%  { opacity: 1 }
      100% { transform: translateX(56px); opacity: 0 }
    }
    .dg31a-cacross { animation: dg31aCaCross 4s ease-in-out infinite 1s; }
    @keyframes dg31aCaCross {
      0%   { transform: translate(0, 0);        opacity: 0 }
      18%  { opacity: 1 }
      84%  { opacity: 1 }
      100% { transform: translate(150px, -56px); opacity: 0 }
    }
    .dg31a-caout { animation: dg31aCaOut 4s linear infinite 2.2s; }
    @keyframes dg31aCaOut {
      0%   { transform: translateX(0);    opacity: 0 }
      22%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(46px); opacity: 0 }
    }
  </style>

  <text x="16" y="22" class="dg31a-hdr">DISTAL CONVOLUTED TUBULE CELL</text>

  <text x="20" y="44" class="dg31a-s">LUMEN</text>
  <text x="86" y="44" class="dg31a-s">DCT CELL</text>
  <text x="272" y="44" class="dg31a-s">BLOOD</text>
  <rect x="16" y="50" width="52" height="200" rx="4" class="dg31a-box"/>
  <rect x="68" y="50" width="200" height="200" class="dg31a-cell"/>
  <rect x="268" y="50" width="52" height="200" rx="4" class="dg31a-box"/>

  <rect x="60" y="78" width="16" height="26" rx="4" class="dg31a-gate"/>
  <line x1="56" y1="76" x2="80" y2="108" class="dg31a-x"/>
  <line x1="80" y1="76" x2="56" y2="108" class="dg31a-x"/>
  <text x="86" y="72" class="dg31a-lbl">NCC blocked</text>
  <text x="86" y="86" class="dg31a-s">thiazide</text>

  <circle cx="34" cy="90" r="5.5" class="dg31a-na dg31a-bnc1"/>
  <circle cx="30" cy="106" r="5.5" class="dg31a-na dg31a-bnc2"/>
  <circle cx="42" cy="130" r="5" class="dg31a-na dg31a-down1"/>
  <circle cx="42" cy="130" r="5" class="dg31a-na dg31a-down2"/>
  <text x="20" y="238" class="dg31a-s">Na&#8314; Cl&#8315;</text>
  <text x="20" y="248" class="dg31a-s">excreted</text>

  <text x="86" y="130" class="dg31a-lbl">&#8595; Na&#8314; inside the cell</text>

  <circle cx="268" cy="158" r="16" class="dg31a-pump"/>
  <text x="196" y="150" class="dg31a-lbl">NCX1</text>
  <text x="196" y="164" class="dg31a-s">3 Na&#8314; in / 1 Ca&#178;&#8314; out</text>
  <circle cx="292" cy="150" r="5.5" class="dg31a-na dg31a-nain1"/>
  <circle cx="292" cy="150" r="5.5" class="dg31a-na dg31a-nain2"/>
  <circle cx="292" cy="150" r="5.5" class="dg31a-na dg31a-nain3"/>
  <circle cx="248" cy="170" r="5.5" class="dg31a-ca dg31a-caout"/>

  <rect x="60" y="196" width="16" height="26" rx="4" class="dg31a-gate"/>
  <text x="86" y="192" class="dg31a-lbl">TRPV5</text>
  <circle cx="36" cy="209" r="5.5" class="dg31a-ca dg31a-cain"/>
  <circle cx="100" cy="209" r="5.5" class="dg31a-ca dg31a-cacross"/>
  <text x="86" y="216" class="dg31a-s">Ca&#178;&#8314; binds calbindin, crosses the cell</text>

  <circle cx="268" cy="226" r="11" class="dg31a-pump"/>
  <text x="176" y="243" class="dg31a-s">PMCA1b: fine-tuner only</text>

  <line x1="336" y1="40" x2="336" y2="286" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="352" y="62" class="dg31a-lbl">THE CHAIN</text>
  <text x="352" y="84" class="dg31a-t">1 &#183; NCC blocked &#8594; &#8595; intracellular Na&#8314;</text>
  <text x="352" y="102" class="dg31a-t">2 &#183; Steeper gradient &#8594; NCX1 runs harder</text>
  <text x="352" y="120" class="dg31a-t">3 &#183; &#8595; intracellular Ca&#178;&#8314; &#8594; Ca&#178;&#8314; enters</text>
  <text x="366" y="136" class="dg31a-t">from the lumen via TRPV5</text>
  <text x="352" y="154" class="dg31a-t">4 &#183; Exported to blood by NCX1</text>
  <text x="352" y="182" class="dg31a-lbl">RESULT</text>
  <text x="352" y="204" class="dg31a-t">&#8595; urinary Ca&#178;&#8314; &#8594; fewer calcium stones</text>
  <text x="352" y="224" class="dg31a-t">Serum Ca&#178;&#8314; preserved; hypercalcemia is</text>
  <text x="352" y="240" class="dg31a-t">uncommon &#8212; PTH holds it tightly</text>
  <text x="352" y="266" class="dg31a-s">Contrast: loop diuretics WASTE calcium</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The counterintuitive one: a diuretic that lowers urine output.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv31-thiazide-paradox"] = {
  title: "Thiazide in vasopressin resistance",
  caption:
    "The step that makes this make sense is that the drug never touches the collecting duct. " +
    "In vasopressin resistance the collecting duct cannot answer ADH, so free water is lost no matter what; the only lever left is to send less fluid there in the first place. " +
    "Mild thiazide-induced volume contraction activates RAAS and lowers GFR, and the sodium that is still filtered is reclaimed proximally along with water, so the filtrate arriving at the ADH-insensitive segment falls sharply. " +
    "This lecture's number: overall urine output drops by up to 30-50%, and a new lower steady state persists as long as the drug is taken. Works best with long-acting chlorthalidone, and is combined with a low-sodium, low-protein diet plus an NSAID (Slides 14, 18).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A five step cascade on the left, each step lighting up in turn: thiazide causes mild extracellular volume contraction, which activates the renin angiotensin aldosterone system and lowers glomerular filtration rate, which increases proximal sodium and water reabsorption, which reduces the filtrate reaching the ADH insensitive collecting duct, so overall urine output falls. On the right, two bars compare urine output off the drug and on the thiazide, with the second bar shrinking to show a thirty to fifty percent reduction.">
  <style>
    .dg31b-step { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg31b-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg31b-lbl  { font-size: 10.5px; font-weight: 700; }
    .dg31b-t    { font-size: 10.5px; }
    .dg31b-s    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg31b-arw  { stroke: var(--dg-accent); stroke-width: 1.6; fill: var(--dg-accent); }
    .dg31b-ghost{ fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg31b-bar  { fill: var(--dg-accent); opacity: .85; }
    .dg31b-bar2 { fill: var(--dg-good); opacity: .85; }

    .dg31b-c1 { animation: dg31bStep 7s ease-in-out infinite 0s; }
    .dg31b-c2 { animation: dg31bStep 7s ease-in-out infinite .7s; }
    .dg31b-c3 { animation: dg31bStep 7s ease-in-out infinite 1.4s; }
    .dg31b-c4 { animation: dg31bStep 7s ease-in-out infinite 2.1s; }
    .dg31b-c5 { animation: dg31bStep 7s ease-in-out infinite 2.8s; }
    @keyframes dg31bStep {
      0%   { opacity: .3 }
      9%   { opacity: 1 }
      93%  { opacity: 1 }
      100% { opacity: .3 }
    }
    .dg31b-shrink {
      transform-box: view-box;
      transform-origin: 540px 252px;
      animation: dg31bShrink 7s ease-in-out infinite;
    }
    @keyframes dg31bShrink {
      0%, 34%   { transform: scaleY(1) }
      66%, 100% { transform: scaleY(.6) }
    }
  </style>

  <text x="16" y="22" class="dg31b-hdr">A DIURETIC THAT REDUCES URINE OUTPUT</text>

  <g class="dg31b-c1">
    <rect x="16" y="44" width="286" height="32" rx="6" class="dg31b-step"/>
    <text x="28" y="64" class="dg31b-t">Thiazide &#8594; mild ECF volume contraction</text>
  </g>
  <polygon points="152,78 146,86 158,86" class="dg31b-arw"/>
  <g class="dg31b-c2">
    <rect x="16" y="88" width="286" height="32" rx="6" class="dg31b-step"/>
    <text x="28" y="108" class="dg31b-t">RAAS activation and &#8595; GFR</text>
  </g>
  <polygon points="152,122 146,130 158,130" class="dg31b-arw"/>
  <g class="dg31b-c3">
    <rect x="16" y="132" width="286" height="32" rx="6" class="dg31b-step"/>
    <text x="28" y="152" class="dg31b-t">&#8593; proximal Na&#8314; and water reabsorption</text>
  </g>
  <polygon points="152,166 146,174 158,174" class="dg31b-arw"/>
  <g class="dg31b-c4">
    <rect x="16" y="176" width="286" height="32" rx="6" class="dg31b-step"/>
    <text x="28" y="196" class="dg31b-t">&#8595; filtrate reaching the collecting duct</text>
  </g>
  <polygon points="152,210 146,218 158,218" class="dg31b-arw"/>
  <g class="dg31b-c5">
    <rect x="16" y="220" width="286" height="32" rx="6" class="dg31b-step"/>
    <text x="28" y="240" class="dg31b-t">Urine output &#8595; up to 30-50%</text>
  </g>
  <text x="16" y="272" class="dg31b-s">Collecting duct still cannot answer ADH &#8212; it simply</text>
  <text x="16" y="286" class="dg31b-s">receives much less fluid. Add low Na&#8314;/low protein diet + NSAID.</text>

  <line x1="330" y1="40" x2="330" y2="286" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="348" y="62" class="dg31b-lbl">DAILY URINE VOLUME</text>

  <line x1="396" y1="252" x2="612" y2="252" stroke="var(--dg-line)" stroke-width="1.4"/>
  <rect x="414" y="82" width="56" height="170" class="dg31b-bar"/>
  <text x="404" y="270" class="dg31b-s">off drug</text>

  <rect x="512" y="82" width="56" height="170" class="dg31b-ghost"/>
  <g class="dg31b-shrink"><rect x="512" y="82" width="56" height="170" class="dg31b-bar2"/></g>
  <text x="498" y="270" class="dg31b-s">on thiazide</text>
  <text x="490" y="286" class="dg31b-s">new lower steady state</text>
  <text x="484" y="74" class="dg31b-lbl">&#8595; 30-50%</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Lithium gets into the principal cell and cannot get out.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv31-lithium-principal-cell"] = {
  title: "Lithium, ENaC and AQP2",
  caption:
    "Lithium-induced vasopressin resistance is a one-way-door problem, which is why the fix is at the door. " +
    "<b>Left:</b> Li&#8314; rides into the principal cell through ENaC because the channel does not discriminate, but the Na&#8314;/K&#8314; ATPase will not pump it back out. Chronic accumulation downregulates AQP2 expression and trafficking (with principal cell injury and collecting duct remodeling), so the duct is impermeable to water even when ADH is present &#8212; polyuria. " +
    "<b>Right:</b> amiloride blocks ENaC, Li&#8314; never enters, AQP2 is preserved. A thiazide is added on top for the volume-contraction effect that lowers distal delivery. " +
    "Lecturer's caveat: stopping lithium is still the best answer; this is for patients who must stay on it, and severe tubular injury may be irreversible (Slides 27, 36).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two principal cells side by side. On the left, lithium ions enter from the lumen through the open epithelial sodium channel, accumulate inside the cell because the sodium potassium ATPase does not pump them out, and the aquaporin two channels are crossed out, so water stays in the lumen and flows onward as polyuria. On the right, amiloride blocks the epithelial sodium channel, lithium bounces off and stays in the lumen, aquaporin two channels are intact, and water is reabsorbed into the blood so polyuria is reduced.">
  <style>
    .dg31c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg31c-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg31c-gate { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg31c-pump { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg31c-hdr  { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg31c-lbl  { font-size: 10px; font-weight: 700; }
    .dg31c-t    { font-size: 10px; }
    .dg31c-s    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg31c-li   { fill: var(--dg-warm); }
    .dg31c-h2o  { fill: var(--dg-cool); }
    .dg31c-x    { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }

    .dg31c-in1 { animation: dg31cIn 4.2s linear infinite; }
    .dg31c-in2 { animation: dg31cIn 4.2s linear infinite 2.1s; }
    @keyframes dg31cIn {
      0%   { transform: translateX(0);    opacity: 0 }
      20%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(54px); opacity: 0 }
    }
    .dg31c-trap1 { animation: dg31cTrap 4.2s ease-in-out infinite; }
    .dg31c-trap2 { animation: dg31cTrap 4.2s ease-in-out infinite 1.1s; }
    .dg31c-trap3 { animation: dg31cTrap 4.2s ease-in-out infinite 2.4s; }
    @keyframes dg31cTrap {
      0%, 100% { transform: translate(0, 0) }
      30%      { transform: translate(6px, -5px) }
      65%      { transform: translate(-5px, 4px) }
    }
    .dg31c-flow1 { animation: dg31cFlow 4.2s linear infinite; }
    .dg31c-flow2 { animation: dg31cFlow 4.2s linear infinite 2.1s; }
    @keyframes dg31cFlow {
      0%   { transform: translateY(0);    opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(84px); opacity: 0 }
    }
    .dg31c-bnc1 { animation: dg31cBnc 4.2s ease-in-out infinite; }
    .dg31c-bnc2 { animation: dg31cBnc 4.2s ease-in-out infinite 2.1s; }
    @keyframes dg31cBnc {
      0%, 100% { transform: translateX(0) }
      38%      { transform: translateX(14px) }
      56%      { transform: translateX(2px) }
    }
    .dg31c-abs1 { animation: dg31cAbs 4.2s linear infinite .4s; }
    .dg31c-abs2 { animation: dg31cAbs 4.2s linear infinite 2.5s; }
    @keyframes dg31cAbs {
      0%   { transform: translateX(0);     opacity: 0 }
      20%  { opacity: 1 }
      82%  { opacity: 1 }
      100% { transform: translateX(168px); opacity: 0 }
    }
  </style>

  <text x="16" y="20" class="dg31c-hdr">LITHIUM ALONE &#8212; ENaC is the way in</text>
  <text x="340" y="20" class="dg31c-hdr">AMILORIDE &#8212; the door is shut</text>

  <text x="20" y="42" class="dg31c-s">LUMEN</text>
  <text x="72" y="42" class="dg31c-s">PRINCIPAL CELL</text>
  <text x="218" y="42" class="dg31c-s">BLOOD</text>
  <rect x="16" y="48" width="46" height="176" rx="4" class="dg31c-box"/>
  <rect x="62" y="48" width="152" height="176" class="dg31c-cell"/>
  <rect x="214" y="48" width="46" height="176" rx="4" class="dg31c-box"/>

  <rect x="54" y="70" width="16" height="24" rx="4" class="dg31c-gate"/>
  <text x="76" y="66" class="dg31c-lbl">ENaC open</text>
  <circle cx="32" cy="82" r="5.5" class="dg31c-li dg31c-in1"/>
  <circle cx="32" cy="82" r="5.5" class="dg31c-li dg31c-in2"/>

  <circle cx="214" cy="120" r="13" class="dg31c-pump"/>
  <text x="132" y="118" class="dg31c-s">Na&#8314;/K&#8314; ATPase</text>
  <text x="132" y="130" class="dg31c-s">does not export Li&#8314;</text>

  <circle cx="104" cy="104" r="5.5" class="dg31c-li dg31c-trap1"/>
  <circle cx="122" cy="146" r="5.5" class="dg31c-li dg31c-trap2"/>
  <circle cx="92" cy="160" r="5.5" class="dg31c-li dg31c-trap3"/>
  <text x="76" y="184" class="dg31c-lbl">Li&#8314; accumulates</text>

  <rect x="206" y="182" width="16" height="24" rx="4" class="dg31c-gate"/>
  <line x1="202" y1="180" x2="226" y2="210" class="dg31c-x"/>
  <line x1="226" y1="180" x2="202" y2="210" class="dg31c-x"/>
  <text x="86" y="204" class="dg31c-s">AQP2 down &#8212; ADH cannot work</text>

  <circle cx="38" cy="128" r="5" class="dg31c-h2o dg31c-flow1"/>
  <circle cx="38" cy="128" r="5" class="dg31c-h2o dg31c-flow2"/>
  <text x="16" y="246" class="dg31c-t">Water stays in the duct &#8594; POLYURIA</text>
  <text x="16" y="264" class="dg31c-s">vasopressin resistance</text>
  <text x="16" y="282" class="dg31c-s">(nephrogenic diabetes insipidus)</text>

  <text x="344" y="42" class="dg31c-s">LUMEN</text>
  <text x="396" y="42" class="dg31c-s">PRINCIPAL CELL</text>
  <text x="542" y="42" class="dg31c-s">BLOOD</text>
  <rect x="340" y="48" width="46" height="176" rx="4" class="dg31c-box"/>
  <rect x="386" y="48" width="152" height="176" class="dg31c-cell"/>
  <rect x="538" y="48" width="46" height="176" rx="4" class="dg31c-box"/>

  <rect x="378" y="70" width="16" height="24" rx="4" class="dg31c-gate"/>
  <line x1="374" y1="68" x2="398" y2="98" class="dg31c-x"/>
  <line x1="398" y1="68" x2="374" y2="98" class="dg31c-x"/>
  <text x="402" y="66" class="dg31c-lbl">ENaC blocked</text>
  <text x="402" y="80" class="dg31c-s">amiloride</text>
  <circle cx="356" cy="86" r="5.5" class="dg31c-li dg31c-bnc1"/>
  <circle cx="352" cy="108" r="5.5" class="dg31c-li dg31c-bnc2"/>
  <text x="340" y="246" class="dg31c-t">Li&#8314; never enters &#8594; AQP2 preserved</text>

  <rect x="530" y="150" width="16" height="24" rx="4" class="dg31c-gate"/>
  <text x="424" y="146" class="dg31c-lbl">AQP2 intact</text>
  <circle cx="368" cy="162" r="5" class="dg31c-h2o dg31c-abs1"/>
  <circle cx="368" cy="162" r="5" class="dg31c-h2o dg31c-abs2"/>
  <text x="404" y="184" class="dg31c-s">ADH now reabsorbs free water</text>
  <text x="340" y="264" class="dg31c-s">Add a thiazide for volume contraction:</text>
  <text x="340" y="282" class="dg31c-s">less distal delivery, further &#8595; polyuria</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Mannitol: where the water goes, and the price of moving it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv31-mannitol-shift"] = {
  title: "Mannitol moves water through the plasma",
  caption:
    "Mannitol is pharmacologically inert; the whole drug effect is a solute gradient, and the plasma is the corridor every molecule of water has to pass through. " +
    "Distributed only in extracellular fluid, mannitol raises plasma osmolality and pulls water out of brain parenchyma and eye into the vasculature &#8212; that is the ICP and IOP benefit. It is then freely filtered, not reabsorbed, and holds water in the water-permeable segments (proximal tubule, descending limb) so it leaves as urine. " +
    "The danger sits in the middle box: plasma volume expands first, so preload and pulmonary capillary pressure rise before the kidney can clear it. In left-sided heart failure, renal impairment or anuria the water never leaves, and the result is florid pulmonary edema. " +
    "This lecture's numbers: ICP falls in about 15-30 minutes, duration 1.5-6 hours, terminal half-life ~5 hours, given as IV boluses rather than continuous infusion (Slides 39-42, 46).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three boxes in a row. On the left, cells of the brain parenchyma and eye; in the middle, the extracellular fluid of plasma and interstitium where mannitol molecules stay; on the right, the nephron lumen at the proximal tubule and descending limb, leading to urine. Water droplets move from the cells into the plasma and then from the plasma into the nephron and out as urine. Below the middle box, a second chain shows plasma volume rising, then preload, then pulmonary capillary pressure, ending in pulmonary edema in patients with heart failure, renal impairment or volume overload.">
  <style>
    .dg31d-box  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg31d-ecf  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg31d-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg31d-lbl  { font-size: 10.5px; font-weight: 700; }
    .dg31d-t    { font-size: 10px; }
    .dg31d-s    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg31d-h2o  { fill: var(--dg-cool); }
    .dg31d-man  { fill: var(--dg-accent); }
    .dg31d-risk { fill: var(--dg-warm); }
    .dg31d-arw  { stroke: var(--dg-warm); stroke-width: 1.6; fill: var(--dg-warm); }

    .dg31d-w1 { animation: dg31dW1 5s linear infinite; }
    .dg31d-w2 { animation: dg31dW1 5s linear infinite 1.6s; }
    .dg31d-w3 { animation: dg31dW1 5s linear infinite 3.2s; }
    @keyframes dg31dW1 {
      0%   { transform: translateX(0);    opacity: 0 }
      16%  { opacity: 1 }
      78%  { opacity: 1 }
      100% { transform: translateX(96px); opacity: 0 }
    }
    .dg31d-w4 { animation: dg31dW2 5s linear infinite .9s; }
    .dg31d-w5 { animation: dg31dW2 5s linear infinite 2.6s; }
    .dg31d-w6 { animation: dg31dW2 5s linear infinite 4.2s; }
    @keyframes dg31dW2 {
      0%   { transform: translateX(0);     opacity: 0 }
      16%  { opacity: 1 }
      78%  { opacity: 1 }
      100% { transform: translateX(132px); opacity: 0 }
    }
    .dg31d-j1 { animation: dg31dJig 5s ease-in-out infinite; }
    .dg31d-j2 { animation: dg31dJig 5s ease-in-out infinite 1.3s; }
    .dg31d-j3 { animation: dg31dJig 5s ease-in-out infinite 2.7s; }
    @keyframes dg31dJig {
      0%, 100% { transform: translate(0, 0) }
      35%      { transform: translate(5px, -4px) }
      70%      { transform: translate(-4px, 5px) }
    }
    .dg31d-swell {
      transform-box: view-box;
      transform-origin: 316px 116px;
      animation: dg31dSwell 5s ease-in-out infinite;
    }
    @keyframes dg31dSwell {
      0%, 20%   { transform: scale(1) }
      60%, 100% { transform: scale(1.04) }
    }
    .dg31d-pulse1 { animation: dg31dPulse 5s ease-in-out infinite 1.6s; }
    .dg31d-pulse2 { animation: dg31dPulse 5s ease-in-out infinite 2.2s; }
    .dg31d-pulse3 { animation: dg31dPulse 5s ease-in-out infinite 2.8s; }
    @keyframes dg31dPulse { 0%, 100% { opacity: .35 } 55% { opacity: 1 } }
  </style>

  <text x="16" y="22" class="dg31d-hdr">WATER FOLLOWS THE SOLUTE &#8212; CELLS &#8594; PLASMA &#8594; URINE</text>

  <rect x="16" y="52" width="132" height="128" rx="8" class="dg31d-box"/>
  <text x="26" y="74" class="dg31d-lbl">CELLS</text>
  <text x="26" y="90" class="dg31d-s">brain parenchyma,</text>
  <text x="26" y="102" class="dg31d-s">eye tissue</text>
  <text x="26" y="126" class="dg31d-s">no mannitol here</text>
  <text x="26" y="166" class="dg31d-s">&#8595; ICP / &#8595; IOP</text>

  <g class="dg31d-swell">
    <rect x="180" y="52" width="272" height="128" rx="8" class="dg31d-ecf"/>
  </g>
  <text x="192" y="74" class="dg31d-lbl">EXTRACELLULAR FLUID</text>
  <text x="192" y="90" class="dg31d-s">plasma + interstitium &#8212; mannitol stays here</text>
  <rect x="196" y="104" width="11" height="11" rx="2" class="dg31d-man dg31d-j1"/>
  <rect x="252" y="128" width="11" height="11" rx="2" class="dg31d-man dg31d-j2"/>
  <rect x="318" y="110" width="11" height="11" rx="2" class="dg31d-man dg31d-j3"/>
  <text x="192" y="166" class="dg31d-s">&#8593; plasma osmolality &#8594; &#8593; plasma volume</text>

  <rect x="484" y="52" width="140" height="128" rx="8" class="dg31d-box"/>
  <text x="494" y="74" class="dg31d-lbl">NEPHRON LUMEN</text>
  <text x="494" y="90" class="dg31d-s">freely filtered,</text>
  <text x="494" y="102" class="dg31d-s">not reabsorbed</text>
  <text x="494" y="126" class="dg31d-s">proximal tubule +</text>
  <text x="494" y="138" class="dg31d-s">descending limb</text>
  <text x="494" y="166" class="dg31d-lbl">&#8594; URINE</text>

  <circle cx="156" cy="118" r="5.5" class="dg31d-h2o dg31d-w1"/>
  <circle cx="156" cy="140" r="5.5" class="dg31d-h2o dg31d-w2"/>
  <circle cx="156" cy="96" r="5.5" class="dg31d-h2o dg31d-w3"/>
  <circle cx="344" cy="118" r="5.5" class="dg31d-h2o dg31d-w4"/>
  <circle cx="344" cy="142" r="5.5" class="dg31d-h2o dg31d-w5"/>
  <circle cx="344" cy="96" r="5.5" class="dg31d-h2o dg31d-w6"/>

  <line x1="316" y1="184" x2="316" y2="204" class="dg31d-arw"/>
  <polygon points="310,202 316,214 322,202" class="dg31d-arw"/>

  <rect x="88" y="222" width="118" height="30" rx="6" class="dg31d-box dg31d-pulse1"/>
  <text x="100" y="241" class="dg31d-t">&#8593; venous return</text>
  <rect x="222" y="222" width="150" height="30" rx="6" class="dg31d-box dg31d-pulse2"/>
  <text x="234" y="241" class="dg31d-t">&#8593; preload, &#8593; PCWP</text>
  <rect x="388" y="222" width="164" height="30" rx="6" class="dg31d-box dg31d-pulse3"/>
  <text x="400" y="241" class="dg31d-t">florid PULMONARY EDEMA</text>
  <polygon points="208,231 220,237 208,243" class="dg31d-arw"/>
  <polygon points="374,231 386,237 374,243" class="dg31d-arw"/>

  <text x="88" y="276" class="dg31d-s">At risk: left-sided heart failure, renal impairment / anuria, existing volume overload.</text>
  <text x="88" y="290" class="dg31d-s">Given as IV boluses, never continuous infusion. ICP falls in 15-30 min, lasts 1.5-6 h.</text>
</svg>`,
};

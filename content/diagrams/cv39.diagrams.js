/*
 * cv39 - Clinical Hypertension Part 2: Management
 * (Lecture #39, Mervat Mourad, DO, FACP, FACOI).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. How fast you are allowed to drop the pressure in a hypertensive emergency,
//    and what happens to cerebral perfusion if you go faster.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv39-bp-descent"] = {
  title: "The controlled descent",
  caption:
    "The green line is the permitted rate of blood pressure reduction in a hypertensive <b>emergency</b> (Slide 23): " +
    "mean arterial pressure down <b>no more than 20% in the first hour</b>, a further <b>5-10% over the next 23 hours</b> to roughly <b>160/110</b>, " +
    "and only then normalization between <b>24 and 48 hours</b>. " +
    "The orange line is what happens if you obey the instinct to fix the number now - the pressure falls below the range over which cerebral vessels can still dilate to defend flow, " +
    "so autoregulation is lost and the patient can stroke. " +
    "For hypertensive <b>urgency</b> treated with oral drugs, the lecturer's ceiling is a total fall of <b>25-30% across the first 24 hours</b>. " +
    "All values are this lecture's.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A graph of blood pressure against time over forty-eight hours. A green stepped line falls from above 180 over 120 by no more than twenty percent of mean arterial pressure in the first hour, then by a further five to ten percent to about 160 over 110 by twenty-four hours, then to normal between twenty-four and forty-eight hours. An orange line instead plunges immediately into a shaded band at the bottom labelled loss of cerebral autoregulation and hypoperfusion.">
  <style>
    .dg39a-lbl   { font-size: 12px; font-weight: 700; }
    .dg39a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg39a-ax    { font-size: 10.5px; fill: var(--dg-muted); }
    .dg39a-axis  { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg39a-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg39a-zoneb { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 1.2; stroke-dasharray: 5 4; }
    .dg39a-warmt { fill: var(--dg-warm); font-size: 11px; font-weight: 700; }
    .dg39a-goodt { fill: var(--dg-good); font-size: 11px; font-weight: 700; }

    .dg39a-safe {
      fill: none; stroke: var(--dg-good); stroke-width: 3.4;
      stroke-linecap: round; stroke-linejoin: round;
      stroke-dasharray: 700; stroke-dashoffset: 0;
      animation: dg39aDraw 8s ease-in-out infinite;
    }
    @keyframes dg39aDraw {
      0%, 6%   { stroke-dashoffset: 700 }
      58%,100% { stroke-dashoffset: 0 }
    }

    .dg39a-fast {
      fill: none; stroke: var(--dg-warm); stroke-width: 3.4;
      stroke-linecap: round; stroke-linejoin: round;
      stroke-dasharray: 700; stroke-dashoffset: 0; opacity: .95;
      animation: dg39aCrash 8s ease-in-out infinite;
    }
    @keyframes dg39aCrash {
      0%, 60%  { stroke-dashoffset: 700; opacity: .2 }
      70%      { stroke-dashoffset: 0;   opacity: 1 }
      80%      { opacity: .35 }
      88%      { opacity: 1 }
      100%     { stroke-dashoffset: 0;   opacity: .95 }
    }

    .dg39a-zone { opacity: 1; animation: dg39aZone 8s ease-in-out infinite; }
    @keyframes dg39aZone {
      0%, 66% { opacity: .4 }
      74%,92% { opacity: 1 }
      100%    { opacity: .4 }
    }

    .dg39a-step1 { animation: dg39aS1 8s ease-in-out infinite; }
    .dg39a-step2 { animation: dg39aS2 8s ease-in-out infinite; }
    .dg39a-step3 { animation: dg39aS3 8s ease-in-out infinite; }
    @keyframes dg39aS1 { 0%,8% { opacity:.3 } 16%,100% { opacity:1 } }
    @keyframes dg39aS2 { 0%,24% { opacity:.3 } 34%,100% { opacity:1 } }
    @keyframes dg39aS3 { 0%,46% { opacity:.3 } 56%,100% { opacity:1 } }
  </style>

  <text x="16" y="20" class="dg39a-lbl">Blood pressure</text>
  <rect x="300" y="12" width="20" height="4" rx="2" fill="var(--dg-good)"/>
  <text x="326" y="20" class="dg39a-sub">emergency: controlled, IV, in the ICU</text>
  <rect x="300" y="28" width="20" height="4" rx="2" fill="var(--dg-warm)"/>
  <text x="326" y="36" class="dg39a-sub">dropping it to 150/90 "ASAP"</text>

  <line x1="88" y1="50" x2="88" y2="266" class="dg39a-axis"/>
  <line x1="88" y1="266" x2="612" y2="266" class="dg39a-axis"/>

  <line x1="168" y1="50" x2="168" y2="266" class="dg39a-grid"/>
  <line x1="392" y1="50" x2="392" y2="266" class="dg39a-grid"/>
  <line x1="584" y1="50" x2="584" y2="266" class="dg39a-grid"/>

  <text x="96"  y="284" class="dg39a-ax">0 h</text>
  <text x="156" y="284" class="dg39a-ax">1 h</text>
  <text x="376" y="284" class="dg39a-ax">24 h</text>
  <text x="566" y="284" class="dg39a-ax">48 h</text>

  <text x="16" y="62"  class="dg39a-ax">&#8805;180/&#8805;120</text>
  <text x="16" y="154" class="dg39a-ax">160/110</text>
  <text x="16" y="196" class="dg39a-ax">normal</text>

  <g class="dg39a-zone">
    <rect x="88" y="212" width="524" height="40" rx="6" class="dg39a-zoneb"/>
    <text x="350" y="237" class="dg39a-warmt" text-anchor="middle">cerebral autoregulation lost &#8594; hypoperfusion, stroke</text>
  </g>

  <path class="dg39a-safe" d="M96,58 L168,116 L392,152 L584,192"/>
  <path class="dg39a-fast" d="M96,58 L168,232 L584,232"/>

  <circle cx="96"  cy="58"  r="5" fill="var(--dg-ink)"/>
  <circle cx="168" cy="116" r="5" fill="var(--dg-good)" class="dg39a-step1"/>
  <circle cx="392" cy="152" r="5" fill="var(--dg-good)" class="dg39a-step2"/>
  <circle cx="584" cy="192" r="5" fill="var(--dg-good)" class="dg39a-step3"/>

  <text x="178" y="98"  class="dg39a-goodt dg39a-step1">hour 1: MAP down &#8804;20%</text>
  <text x="216" y="142" class="dg39a-goodt dg39a-step2">next 23 h: 5-10% more &#8594; 160/110</text>
  <text x="424" y="182" class="dg39a-goodt dg39a-step3">24-48 h: normalize</text>
  <text x="180" y="252" class="dg39a-sub">short-acting IV agent, e.g. hydralazine, titrated - never a bolus race to target</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The reassessment loop the lecturer called the take-home message of the
//    JNC 8 algorithm slide: hypertension care is a cycle, not a prescription.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv39-goal-loop"] = {
  title: "Every visit is the same question",
  caption:
    "The lecturer's take-home from the JNC 8 algorithm (Slide 25): do not memorize the boxes, memorize the loop. " +
    "At every follow-up you ask one question - is this patient at goal? " +
    "If yes, you continue and still reinforce the lifestyle measures; if no, you check lifestyle adherence <i>first</i> and only then increase the dose or add a second drug. " +
    "The animation alternates between the two exits to show that the loop never ends: antihypertensive therapy is usually lifelong, and the reassessment repeats at every visit.",
  svg: `
<svg viewBox="0 0 640 268" role="img" aria-label="A closed loop diagram. A box labelled recheck blood pressure at follow-up leads to a decision box asking whether the patient is at goal. The yes exit leads to continue current therapy and keep reinforcing lifestyle. The no exit leads to review lifestyle adherence first, then increase the dose or add a second drug. Both exits return by a curved arrow to the recheck box.">
  <style>
    .dg39b-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .dg39b-q     { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg39b-t     { font-size: 12px; font-weight: 700; }
    .dg39b-s     { font-size: 11px; fill: var(--dg-muted); }
    .dg39b-tag   { font-size: 11px; font-weight: 700; }
    .dg39b-arrow { stroke: var(--dg-ink); stroke-width: 2.2; fill: none; }
    .dg39b-ret   { stroke: var(--dg-accent); stroke-width: 2.2; fill: none; stroke-dasharray: 6 5; }

    .dg39b-yes { opacity: 1; animation: dg39bYes 9s ease-in-out infinite; }
    .dg39b-no  { opacity: 1; animation: dg39bNo  9s ease-in-out infinite; }
    @keyframes dg39bYes { 0%,6% { opacity:.28 } 16%,44% { opacity:1 } 54%,100% { opacity:.28 } }
    @keyframes dg39bNo  { 0%,50% { opacity:.28 } 60%,88% { opacity:1 } 96%,100% { opacity:.28 } }

    .dg39b-pulse { animation: dg39bPulse 9s ease-in-out infinite; }
    @keyframes dg39bPulse { 0%,100% { opacity:1 } 46%,52% { opacity:.45 } }

    .dg39b-flow { stroke-dasharray: 7 6; animation: dg39bFlow 2.2s linear infinite; }
    @keyframes dg39bFlow { to { stroke-dashoffset: -26 } }
  </style>

  <rect x="18" y="86" width="140" height="56" rx="10" class="dg39b-box dg39b-pulse"/>
  <text x="88" y="110" class="dg39b-t" text-anchor="middle">Recheck BP</text>
  <text x="88" y="128" class="dg39b-s" text-anchor="middle">at follow-up</text>

  <line x1="158" y1="114" x2="212" y2="114" class="dg39b-arrow dg39b-flow"/>
  <polygon points="212,108 230,114 212,120" fill="var(--dg-ink)"/>

  <rect x="232" y="88" width="112" height="52" rx="26" class="dg39b-q"/>
  <text x="288" y="119" class="dg39b-t" text-anchor="middle">At goal?</text>

  <g class="dg39b-yes">
    <path d="M344,102 L378,102 L378,54 L406,54" class="dg39b-arrow"/>
    <polygon points="406,48 424,54 406,60" fill="var(--dg-ink)"/>
    <text x="352" y="76" class="dg39b-tag" fill="var(--dg-good)">YES</text>
    <rect x="426" y="28" width="196" height="52" rx="10" class="dg39b-box"/>
    <text x="524" y="50" class="dg39b-t" text-anchor="middle">Continue therapy</text>
    <text x="524" y="68" class="dg39b-s" text-anchor="middle">keep reinforcing lifestyle</text>
  </g>

  <g class="dg39b-no">
    <path d="M344,126 L378,126 L378,176 L406,176" class="dg39b-arrow"/>
    <polygon points="406,170 424,176 406,182" fill="var(--dg-ink)"/>
    <text x="352" y="164" class="dg39b-tag" fill="var(--dg-warm)">NO</text>
    <rect x="426" y="148" width="196" height="58" rx="10" class="dg39b-box"/>
    <text x="524" y="170" class="dg39b-t" text-anchor="middle">Lifestyle adherence first</text>
    <text x="524" y="188" class="dg39b-s" text-anchor="middle">then titrate up or add a drug</text>
  </g>

  <path d="M524,206 L524,240 L88,240 L88,146" class="dg39b-ret dg39b-flow"/>
  <polygon points="82,146 88,128 94,146" fill="var(--dg-accent)"/>
  <text x="306" y="256" class="dg39b-s" text-anchor="middle">therapy is usually lifelong - the loop repeats at every visit</text>
</svg>`,
};

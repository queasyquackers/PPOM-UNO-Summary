/*
 * cv33 - "Short Leg Syndrome" and Heel Lift Therapy (Lecture #33, P. Kooyman, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The compensation chain: the problem starts at the floor and is paid for
//    at every level above it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv33-compensation-chain"] = {
  title: "The compensation chain, ground up",
  caption:
    "Short Leg Syndrome is a chain reaction read from the floor upward, which is why the complaint is usually nowhere near the leg. " +
    "A shorter right side drops the sacral base on the right; the innominates rotate to compensate; and the caudal (lower lumbar) curve side-bends <b>away</b> from the low sacral base &#8212; the pattern on Slide 4 and the most prevalent finding (patterns A and B) in the 738-patient frequency distribution on Slides 26-27. " +
    "The lecturer's warning matters as much as the rule: some patients show a straight lumbar spine with no compensating curve, and some tip <i>into</i> the short side (the double-asterisked atypical responses). Those patients load the opposite side's muscles and ligaments harder and tend to hurt more.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A posterior view schematic of a standing patient whose right side is shorter. Numbered markers point to four levels in sequence: one, the short right leg at the floor; two, the sacral base tipped low on the right; three, compensatory innominate rotation across the pelvis; and four, the lower lumbar spine side bending away from the low side, toward the patient's left. A panel on the right lists the same four steps in order, and notes underneath that patterns A and B are the most prevalent of 738 patients, while a straight lumbar spine or a curve tipping into the short side are atypical responses that tend to cause more pain.">
  <style>
    .dg33a-floor { stroke: var(--dg-line); stroke-width: 2.4; }
    .dg33a-bone  { stroke: var(--dg-ink); stroke-width: 3.2; stroke-linecap: round; fill: none; }
    .dg33a-head  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg33a-sac   { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg33a-base  { stroke: var(--dg-warm); stroke-width: 2.4; stroke-dasharray: 6 4; }
    .dg33a-spine { fill: none; stroke: var(--dg-accent); stroke-width: 3.6; stroke-linecap: round; }
    .dg33a-lead  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg33a-mark  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.8; }
    .dg33a-arw   { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.2; }
    .dg33a-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg33a-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg33a-num   { font-size: 10.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg33a-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg33a-step  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg33a-hi    { fill: var(--dg-accent); }

    .dg33a-k1 { animation: dg33aPulse 8s ease-in-out infinite 0s; }
    .dg33a-k2 { animation: dg33aPulse 8s ease-in-out infinite 1.7s; }
    .dg33a-k3 { animation: dg33aPulse 8s ease-in-out infinite 3.4s; }
    .dg33a-k4 { animation: dg33aPulse 8s ease-in-out infinite 5.1s; }
    @keyframes dg33aPulse { 0%, 100% { opacity: .18 } 6%, 18% { opacity: 1 } }

    .dg33a-sb { animation: dg33aSb 8s ease-in-out infinite 5.1s; }
    @keyframes dg33aSb { 0%, 100% { opacity: .3 } 8%, 22% { opacity: 1 } }
  </style>

  <text x="16" y="22" class="dg33a-hdr">ONE ASYMMETRY, FOUR LEVELS OF COMPENSATION</text>
  <text x="40" y="42" class="dg33a-s">posterior view</text>

  <line x1="34" y1="278" x2="292" y2="278" class="dg33a-floor"/>
  <text x="96" y="293" class="dg33a-lbl">R</text>
  <text x="228" y="293" class="dg33a-lbl">L</text>
  <text x="112" y="293" class="dg33a-s">(short)</text>

  <line x1="100" y1="212" x2="100" y2="278" class="dg33a-bone"/>
  <line x1="232" y1="196" x2="232" y2="278" class="dg33a-bone"/>
  <circle cx="100" cy="208" r="8" class="dg33a-head"/>
  <circle cx="232" cy="192" r="8" class="dg33a-head"/>

  <path class="dg33a-bone" d="M78 212 Q166 190 254 190"/>
  <polygon class="dg33a-sac" points="146,202 198,196 172,242"/>
  <line x1="134" y1="205" x2="210" y2="196" class="dg33a-base"/>

  <path class="dg33a-spine" d="M172 198 C 148 176, 146 142, 168 114"/>

  <g class="dg33a-sb">
    <line x1="172" y1="104" x2="222" y2="104" class="dg33a-arw"/>
    <polygon points="222,97 240,104 222,111" class="dg33a-arw"/>
    <text x="150" y="94" class="dg33a-s">side-bends AWAY from the low side</text>
  </g>

  <line x1="60" y1="250" x2="94" y2="250" class="dg33a-lead"/>
  <circle cx="50" cy="250" r="10" class="dg33a-mark dg33a-k1"/>
  <circle cx="50" cy="250" r="10" fill="none" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="47" y="254" class="dg33a-num">1</text>

  <line x1="60" y1="206" x2="132" y2="204" class="dg33a-lead"/>
  <circle cx="50" cy="206" r="10" class="dg33a-mark dg33a-k2"/>
  <circle cx="50" cy="206" r="10" fill="none" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="47" y="210" class="dg33a-num">2</text>

  <line x1="266" y1="216" x2="240" y2="200" class="dg33a-lead"/>
  <circle cx="276" cy="220" r="10" class="dg33a-mark dg33a-k3"/>
  <circle cx="276" cy="220" r="10" fill="none" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="273" y="224" class="dg33a-num">3</text>

  <line x1="60" y1="146" x2="146" y2="146" class="dg33a-lead"/>
  <circle cx="50" cy="146" r="10" class="dg33a-mark dg33a-k4"/>
  <circle cx="50" cy="146" r="10" fill="none" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="47" y="150" class="dg33a-num">4</text>

  <rect x="316" y="42" width="308" height="42" rx="6" class="dg33a-step"/>
  <rect x="316" y="42" width="5" height="42" rx="2" class="dg33a-hi dg33a-k1"/>
  <text x="332" y="60" class="dg33a-num">1</text>
  <text x="348" y="60" class="dg33a-lbl">Shorter right side at the floor</text>
  <text x="348" y="76" class="dg33a-s">may not be a true short bone - the name is a misnomer</text>

  <rect x="316" y="94" width="308" height="42" rx="6" class="dg33a-step"/>
  <rect x="316" y="94" width="5" height="42" rx="2" class="dg33a-hi dg33a-k2"/>
  <text x="332" y="112" class="dg33a-num">2</text>
  <text x="348" y="112" class="dg33a-lbl">Sacral base unlevels, low on the right</text>
  <text x="348" y="128" class="dg33a-s">this is the number the Heilig formula divides</text>

  <rect x="316" y="146" width="308" height="42" rx="6" class="dg33a-step"/>
  <rect x="316" y="146" width="5" height="42" rx="2" class="dg33a-hi dg33a-k3"/>
  <text x="332" y="164" class="dg33a-num">3</text>
  <text x="348" y="164" class="dg33a-lbl">Compensatory innominate rotation</text>
  <text x="348" y="180" class="dg33a-s">strains iliolumbar fibres 1 (anterior) or 2 (posterior)</text>

  <rect x="316" y="198" width="308" height="42" rx="6" class="dg33a-step"/>
  <rect x="316" y="198" width="5" height="42" rx="2" class="dg33a-hi dg33a-k4"/>
  <text x="332" y="216" class="dg33a-num">4</text>
  <text x="348" y="216" class="dg33a-lbl">Caudal lumbar curve side-bends away</text>
  <text x="348" y="232" class="dg33a-s">most often, NOT always - patterns A and B of N = 738</text>

  <text x="316" y="262" class="dg33a-s">Atypical (Slides 26-27): lumbar spine stays straight, or tips INTO the short side.</text>
  <text x="316" y="277" class="dg33a-s">The opposite side then works far harder to stay upright - more pain.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The hip drop test - a movement test, so the movement is the point.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv33-hip-drop"] = {
  title: "Hip drop test (lateral lumbar flexion)",
  caption:
    "The name says hip, but the test grades the <b>lumbar spine</b>, not the hip joint (Slides 21-23). " +
    "The patient stands facing away, feet flat and 4-6 inches apart, and bends one knee at a time; the pelvis and iliac crest drop on the <i>bent-knee</i> side while the lumbar spine curves laterally to compensate. " +
    "In this figure the right crest drops far more than the left, so the lumbar spine side-bends most to the left &#8212; and by the rule on Slide 23 the side of greatest drop is the side of <b>restricted</b> side-bending, here the right. Even drops on both sides is the zero-degree, unrestricted finding, and the curve should be smooth and unimpeded.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A posterior view of a standing patient seen from behind, feet four to six inches apart. Two ghost outlines show the pelvis position when each knee is bent. When the right knee bends, the right iliac crest drops through a large angle and the lumbar spine curves toward the left. When the left knee bends, the left iliac crest drops through a much smaller angle. A solid pelvis bar alternates between the two positions. A panel on the right lists the steps of the test and states that the iliac crest dropping the greatest amount marks the side of restricted lumbar side bending, and that the test assesses lumbar involvement rather than the hip joint.">
  <style>
    .dg33b-floor { stroke: var(--dg-line); stroke-width: 2.4; }
    .dg33b-bone  { stroke: var(--dg-ink); stroke-width: 3.2; stroke-linecap: round; fill: none; }
    .dg33b-ghost { stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 5 4; fill: none; }
    .dg33b-spine { fill: none; stroke: var(--dg-accent); stroke-width: 3.4; stroke-linecap: round; }
    .dg33b-arc   { fill: none; stroke: var(--dg-warm); stroke-width: 1.8; }
    .dg33b-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg33b-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg33b-t     { font-size: 10.5px; }
    .dg33b-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg33b-warn  { font-size: 10.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg33b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }

    .dg33b-pelvis { transform-box: view-box; transform-origin: 166px 196px; animation: dg33bTilt 8s ease-in-out infinite; }
    @keyframes dg33bTilt {
      0%, 6%    { transform: rotate(0deg) }
      20%, 38%  { transform: rotate(11deg) }
      48%, 54%  { transform: rotate(0deg) }
      66%, 84%  { transform: rotate(-4deg) }
      96%, 100% { transform: rotate(0deg) }
    }
    .dg33b-lum { transform-box: view-box; transform-origin: 166px 196px; animation: dg33bLum 8s ease-in-out infinite; }
    @keyframes dg33bLum {
      0%, 6%    { transform: translateX(0) }
      20%, 38%  { transform: translateX(13px) }
      48%, 54%  { transform: translateX(0) }
      66%, 84%  { transform: translateX(-5px) }
      96%, 100% { transform: translateX(0) }
    }
    .dg33b-kneeR { animation: dg33bKneeR 8s ease-in-out infinite; }
    @keyframes dg33bKneeR { 0%, 8%, 46%, 100% { opacity: .12 } 20%, 38% { opacity: 1 } }
    .dg33b-kneeL { animation: dg33bKneeL 8s ease-in-out infinite; }
    @keyframes dg33bKneeL { 0%, 54%, 92%, 100% { opacity: .12 } 66%, 84% { opacity: 1 } }
  </style>

  <text x="16" y="22" class="dg33b-hdr">BEND ONE KNEE - WATCH THE LUMBAR SPINE, NOT THE HIP</text>

  <line x1="40" y1="276" x2="296" y2="276" class="dg33b-floor"/>
  <text x="86" y="292" class="dg33b-lbl">R</text>
  <text x="240" y="292" class="dg33b-lbl">L</text>
  <text x="128" y="292" class="dg33b-s">feet 4-6 in apart, flat</text>

  <line x1="92" y1="200" x2="92" y2="276" class="dg33b-bone"/>
  <line x1="240" y1="200" x2="240" y2="276" class="dg33b-bone"/>

  <line x1="88" y1="224" x2="72" y2="224" class="dg33b-bone dg33b-kneeR"/>
  <text x="34" y="228" class="dg33b-s dg33b-kneeR">knee bent</text>
  <line x1="244" y1="224" x2="260" y2="224" class="dg33b-bone dg33b-kneeL"/>
  <text x="266" y="228" class="dg33b-s dg33b-kneeL">knee bent</text>

  <line x1="88" y1="224" x2="244" y2="182" class="dg33b-ghost"/>
  <line x1="90" y1="182" x2="246" y2="200" class="dg33b-ghost"/>
  <path class="dg33b-arc" d="M226 196 A 62 62 0 0 0 224 178"/>
  <text x="252" y="172" class="dg33b-s">L drop: small</text>
  <text x="26" y="196" class="dg33b-s">R drop: large</text>

  <g class="dg33b-pelvis">
    <path class="dg33b-bone" d="M88 200 Q166 184 244 200"/>
    <circle cx="92" cy="200" r="7" fill="var(--dg-panel)" stroke="var(--dg-ink)" stroke-width="1.6"/>
    <circle cx="240" cy="200" r="7" fill="var(--dg-panel)" stroke="var(--dg-ink)" stroke-width="1.6"/>
    <polygon points="150,192 186,190 168,224" fill="var(--dg-panel)" stroke="var(--dg-ink)" stroke-width="1.6"/>
  </g>

  <g class="dg33b-lum">
    <path class="dg33b-spine" d="M166 190 C 152 164, 152 132, 168 108"/>
  </g>
  <text x="176" y="112" class="dg33b-s">lumbar spine curves laterally</text>

  <rect x="320" y="40" width="304" height="146" rx="8" class="dg33b-panel"/>
  <text x="336" y="60" class="dg33b-lbl">HOW IT IS DONE</text>
  <text x="336" y="78" class="dg33b-t">Patient faces away, weight even, feet flat</text>
  <text x="336" y="94" class="dg33b-t">and 4-6 in apart; physician's eyes level</text>
  <text x="336" y="110" class="dg33b-t">with the lumbar region (kneel or squat).</text>
  <text x="336" y="130" class="dg33b-t">Bend ONE knee, other knee straight; allow</text>
  <text x="336" y="146" class="dg33b-t">the weight shift. The crest drops on the</text>
  <text x="336" y="162" class="dg33b-t">BENT-KNEE side. Repeat, then compare.</text>
  <text x="336" y="178" class="dg33b-s">Note fluidity, amount of motion, degrees of drop.</text>

  <text x="320" y="212" class="dg33b-warn">Greater drop = RESTRICTED side-bending on that side</text>
  <text x="320" y="230" class="dg33b-t">Here: right crest drops more, so the lumbar spine</text>
  <text x="320" y="246" class="dg33b-t">side-bends most to the LEFT and right side-bending</text>
  <text x="320" y="262" class="dg33b-t">is restricted. Equal drops = 0 degrees, unrestricted.</text>
  <text x="320" y="282" class="dg33b-s">Assesses LUMBAR involvement, not the hip joint.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Where the lift material goes, and why anything past 1/2 inch has to be
//    split front and back.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv33-lift-placement"] = {
  title: "Lift placement: 1/4 in, 1/2 in, then split it",
  caption:
    "Heel lift height is measured at the midcalcaneal line, and it is capped twice (Slides 48-49). " +
    "A maximum of <b>1/4 inch</b> can sit inside the shoe &#8212; more and the heel is uncomfortable and slips out. A further 1/4 inch can be added to the outside of the heel, giving a maximum of <b>1/2 inch</b> between the patient's heel and the floor. " +
    "Past 1/2 inch, height added at the heel alone rotates the whole pelvic bowl in the transverse plane <i>away</i> from the lift side. Adding the same increment to the anterior sole pulls the pelvis back toward the lift side and derotates it, which is why every increment above 1/2 inch goes on both the front and the back of that shoe.",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Three shoe cross sections in side view with a calcaneus bone drawn above each heel. In the first, a quarter inch lift sits inside the shoe, the maximum allowed inside. In the second, another quarter inch is added under the outside of the heel, giving the half inch maximum measured from the heel to the floor at the midcalcaneal line. In the third, more than half an inch is needed, so the extra material is added to both the heel and the anterior sole. Below, two views of the pelvic bowl from above show that adding height at the heel alone rotates the pelvis away from the lift side, while adding the same increment anteriorly rotates it back toward midline.">
  <style>
    .dg33c-shoe  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg33c-bone  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg33c-liftA { fill: var(--dg-accent); opacity: .55; }
    .dg33c-liftB { fill: var(--dg-cool); opacity: .55; }
    .dg33c-liftC { fill: var(--dg-warm); opacity: .6; }
    .dg33c-mid   { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 4 3; opacity: .7; }
    .dg33c-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg33c-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg33c-t     { font-size: 10.5px; }
    .dg33c-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg33c-warn  { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }
    .dg33c-good  { font-size: 10px; font-weight: 700; fill: var(--dg-good); }
    .dg33c-bowl  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg33c-axis  { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 3; }

    .dg33c-g1 { animation: dg33cShow 9s ease-in-out infinite 0.4s; }
    .dg33c-g2 { animation: dg33cShow 9s ease-in-out infinite 2.6s; }
    .dg33c-g3 { animation: dg33cShow 9s ease-in-out infinite 4.8s; }
    @keyframes dg33cShow { 0%, 100% { opacity: .25 } 8%, 26% { opacity: 1 } }

    .dg33c-rot { transform-box: view-box; transform-origin: 178px 252px; animation: dg33cRot 9s ease-in-out infinite; }
    @keyframes dg33cRot { 0%, 10% { transform: rotate(0deg) } 46%, 100% { transform: rotate(13deg) } }
    .dg33c-fix { transform-box: view-box; transform-origin: 470px 252px; animation: dg33cFix 9s ease-in-out infinite; }
    @keyframes dg33cFix { 0%, 10% { transform: rotate(13deg) } 46%, 100% { transform: rotate(0deg) } }
  </style>

  <text x="16" y="20" class="dg33c-hdr">MEASURED AT THE MIDCALCANEAL LINE</text>

  <g class="dg33c-g1">
    <circle cx="52" cy="66" r="15" class="dg33c-bone"/>
    <line x1="52" y1="52" x2="52" y2="120" class="dg33c-mid"/>
    <path class="dg33c-shoe" d="M28 96 L150 96 L172 108 L172 116 L28 116 Z"/>
    <rect x="30" y="86" width="52" height="10" class="dg33c-liftA"/>
    <text x="16" y="136" class="dg33c-lbl">B - 1/4 in INSIDE the shoe</text>
    <text x="16" y="150" class="dg33c-s">the maximum that fits inside; more and</text>
    <text x="16" y="163" class="dg33c-s">the heel slips out and is uncomfortable</text>
  </g>

  <g class="dg33c-g2">
    <circle cx="252" cy="66" r="15" class="dg33c-bone"/>
    <line x1="252" y1="52" x2="252" y2="130" class="dg33c-mid"/>
    <path class="dg33c-shoe" d="M228 96 L350 96 L372 108 L372 116 L228 116 Z"/>
    <rect x="230" y="86" width="52" height="10" class="dg33c-liftA"/>
    <rect x="228" y="116" width="58" height="10" class="dg33c-liftB"/>
    <text x="216" y="136" class="dg33c-lbl">C - plus 1/4 in on the OUTSIDE heel</text>
    <text x="216" y="150" class="dg33c-s">1/2 in is the maximum between the</text>
    <text x="216" y="163" class="dg33c-s">patient's heel and the floor</text>
  </g>

  <g class="dg33c-g3">
    <circle cx="452" cy="66" r="15" class="dg33c-bone"/>
    <line x1="452" y1="52" x2="452" y2="134" class="dg33c-mid"/>
    <path class="dg33c-shoe" d="M428 96 L550 96 L572 108 L572 116 L428 116 Z"/>
    <rect x="430" y="86" width="52" height="10" class="dg33c-liftA"/>
    <rect x="428" y="116" width="58" height="10" class="dg33c-liftB"/>
    <rect x="428" y="126" width="58" height="6" class="dg33c-liftC"/>
    <rect x="490" y="116" width="84" height="6" class="dg33c-liftC"/>
    <text x="416" y="136" class="dg33c-lbl">D - above 1/2 in: split it</text>
    <text x="416" y="150" class="dg33c-s">every further increment goes on BOTH</text>
    <text x="416" y="163" class="dg33c-s">the heel and the anterior sole</text>
  </g>

  <line x1="16" y1="182" x2="624" y2="182" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="16" y="202" class="dg33c-hdr">WHY THE ANTERIOR HALF IS NOT OPTIONAL - PELVIC BOWL FROM ABOVE</text>

  <line x1="178" y1="216" x2="178" y2="292" class="dg33c-axis"/>
  <g class="dg33c-rot">
    <ellipse cx="178" cy="252" rx="72" ry="26" class="dg33c-bowl"/>
    <line x1="106" y1="252" x2="250" y2="252" stroke="var(--dg-ink)" stroke-width="1.4"/>
  </g>
  <text x="60" y="228" class="dg33c-warn">heel-only lift above 1/2 in</text>
  <text x="60" y="292" class="dg33c-t">pelvis rotates AWAY from the lift side</text>

  <line x1="470" y1="216" x2="470" y2="292" class="dg33c-axis"/>
  <g class="dg33c-fix">
    <ellipse cx="470" cy="252" rx="72" ry="26" class="dg33c-bowl"/>
    <line x1="398" y1="252" x2="542" y2="252" stroke="var(--dg-ink)" stroke-width="1.4"/>
  </g>
  <text x="360" y="228" class="dg33c-good">add the same increment anteriorly</text>
  <text x="360" y="292" class="dg33c-t">pelvis comes back toward the lift side - derotated</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Heilig's formula: same unleveling, four very different lifts.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv33-heilig-denominator"] = {
  title: "Heilig's formula: the denominator does the work",
  caption:
    "All four of the lecture's worked cases start from the identical 1/2 inch sacral base unleveling, so the only thing that changes the prescription is the denominator D + C (Slides 30-45). " +
    "Each bar begins at the full 1/2 inch and is cut down by duration plus compensation: Case 1 (new injury, no compensation, D1 + C0) keeps the whole 1/2 inch, while Case 3 (60 years, endplate spurring and marked rotation, D3 + C2) gets only 1/10 inch. " +
    "The counter-intuitive rule to carry away: the longer the asymmetry has been present and the more the body has structurally compensated around it, the <b>smaller</b> the initial lift &#8212; and because the formula reads 'less than or equal to', you may start lower still and build up.",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Four vertical bars, each starting from a dashed outline representing the same one half inch sacral base unleveling. The first bar, for duration one plus compensation zero, stays at the full one half inch. The second, for duration two plus compensation zero, falls to one quarter inch. The third, for duration two plus compensation one, falls to one sixth inch. The fourth, for duration three plus compensation two, falls to one tenth inch. A note explains that the same unleveling gives a smaller lift the longer it has been present and the more the body has structurally compensated.">
  <style>
    .dg33d-ghost { fill: none; stroke: var(--dg-line); stroke-width: 1.3; stroke-dasharray: 4 4; }
    .dg33d-bar   { fill: var(--dg-accent); opacity: .85; }
    .dg33d-axis  { stroke: var(--dg-line); stroke-width: 1.6; }
    .dg33d-hdr   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg33d-lbl   { font-size: 11px; font-weight: 700; }
    .dg33d-t     { font-size: 10.5px; }
    .dg33d-s     { font-size: 9.5px; fill: var(--dg-muted); }
    .dg33d-val   { font-size: 13px; font-weight: 700; fill: var(--dg-good); }
    .dg33d-ref   { stroke: var(--dg-warm); stroke-width: 1.4; stroke-dasharray: 6 4; }

    .dg33d-c1 { transform-box: view-box; transform-origin: 118px 250px; animation: dg33dS1 9s ease-in-out infinite; }
    .dg33d-c2 { transform-box: view-box; transform-origin: 248px 250px; animation: dg33dS2 9s ease-in-out infinite; }
    .dg33d-c3 { transform-box: view-box; transform-origin: 378px 250px; animation: dg33dS3 9s ease-in-out infinite; }
    .dg33d-c4 { transform-box: view-box; transform-origin: 508px 250px; animation: dg33dS4 9s ease-in-out infinite; }
    @keyframes dg33dS1 { 0%, 100% { transform: scaleY(1) } }
    @keyframes dg33dS2 { 0%, 14% { transform: scaleY(1) } 40%, 100% { transform: scaleY(.5) } }
    @keyframes dg33dS3 { 0%, 20% { transform: scaleY(1) } 46%, 100% { transform: scaleY(.3333) } }
    @keyframes dg33dS4 { 0%, 26% { transform: scaleY(1) } 52%, 100% { transform: scaleY(.2) } }
  </style>

  <text x="16" y="22" class="dg33d-hdr">L &#8804; SBU / (D + C)   -   SAME 1/2 IN SBU IN ALL FOUR CASES</text>

  <line x1="60" y1="250" x2="596" y2="250" class="dg33d-axis"/>
  <line x1="60" y1="90" x2="596" y2="90" class="dg33d-ref"/>
  <text x="600" y="86" class="dg33d-s">1/2 in</text>
  <text x="600" y="99" class="dg33d-s">SBU</text>

  <rect x="88" y="90" width="60" height="160" class="dg33d-ghost"/>
  <rect x="218" y="90" width="60" height="160" class="dg33d-ghost"/>
  <rect x="348" y="90" width="60" height="160" class="dg33d-ghost"/>
  <rect x="478" y="90" width="60" height="160" class="dg33d-ghost"/>

  <g class="dg33d-c1"><rect x="88" y="90" width="60" height="160" class="dg33d-bar"/></g>
  <g class="dg33d-c2"><rect x="218" y="90" width="60" height="160" class="dg33d-bar"/></g>
  <g class="dg33d-c3"><rect x="348" y="90" width="60" height="160" class="dg33d-bar"/></g>
  <g class="dg33d-c4"><rect x="478" y="90" width="60" height="160" class="dg33d-bar"/></g>

  <text x="88" y="82" class="dg33d-val">1/2 in</text>
  <text x="218" y="162" class="dg33d-val">1/4 in</text>
  <text x="348" y="188" class="dg33d-val">1/6 in</text>
  <text x="478" y="210" class="dg33d-val">1/10 in</text>

  <text x="84" y="268" class="dg33d-lbl">Case 1</text>
  <text x="84" y="283" class="dg33d-t">D1 + C0 = 1</text>
  <text x="84" y="297" class="dg33d-s">new, no compensation</text>

  <text x="214" y="268" class="dg33d-lbl">Case 4</text>
  <text x="214" y="283" class="dg33d-t">D2 + C0 = 2</text>
  <text x="214" y="297" class="dg33d-s">14 y, no compensation</text>

  <text x="344" y="268" class="dg33d-lbl">Case 2</text>
  <text x="344" y="283" class="dg33d-t">D2 + C1 = 3</text>
  <text x="344" y="297" class="dg33d-s">25 y, SB and rotation</text>

  <text x="474" y="268" class="dg33d-lbl">Case 3</text>
  <text x="474" y="283" class="dg33d-t">D3 + C2 = 5</text>
  <text x="474" y="297" class="dg33d-s">60 y, spurring, marked rot.</text>

  <text x="60" y="60" class="dg33d-t">Longer duration + more structural compensation = SMALLER initial lift.</text>
</svg>`,
};

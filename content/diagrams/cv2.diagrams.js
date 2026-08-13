// Animated concept diagrams for CV2 - BLT (cervical, thoracic, lumbosacral, fibula).
// Registered into the shared registry defined in lecture_diagrams.js.

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Fibula - the ligamentous seesaw vs. the membranous total motion.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv2-fibula-seesaw"] = {
  title: "Fibula: seesaw motion vs. total motion",
  caption:
    "BLT of the fibula works two structures at once. Left: the fibula behaves like a lever on a pivot point (fulcrum), " +
    "so the two ends move in opposite directions - a posterior fibular head (the more common finding) pairs with an " +
    "anteriorly positioned lateral malleolus. Pushing anteriorly on the part you are holding also carries it slightly " +
    "superiorly; the lecturer notes that for an anterior fibular head whether the same superior motion applies is debatable. " +
    "Right: after the anterior motion is taken up, both hands move the fibula the SAME direction - superiorly or inferiorly - " +
    "a total motion that engages the interosseous membrane, which sits between tibia and fibula and spans the length of the " +
    "fibula. Contacts are firm enough to engage the bony level; any true movement is minuscule, so a large movement means you " +
    "are sliding on the skin. Reassessment uses these same two directions: shift anterior-posterior, then superior-inferior, " +
    "checking for improved ease and evenness of motion.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels. Left: the fibula drawn as a rod on a mid-shaft fulcrum, with anterior pressure at the fibular head carrying it anteriorly and slightly superiorly while the lateral malleolus swings posteriorly. Right: tibia and fibula joined by the oblique fibres of the interosseous membrane, with both hands moving the whole fibula superiorly and inferiorly together.">
  <style>
    .dgcv2f-panel { fill: none; stroke: var(--dg-line); stroke-width: 1.2; }
    .dgcv2f-h    { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2f-lbl  { font-size: 11px; }
    .dgcv2f-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dgcv2f-foot { font-size: 10.5px; fill: var(--dg-muted); }
    .dgcv2f-bone { stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; }
    .dgcv2f-end  { fill: var(--dg-accent); }
    .dgcv2f-hand { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; stroke-dasharray: 3 3; }
    .dgcv2f-ghost{ stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 4 4; }
    .dgcv2f-arw  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.4; stroke-linecap: round; }
    .dgcv2f-fill { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dgcv2f-mem  { stroke: var(--dg-warm); stroke-width: 2; opacity: .6; }
    .dgcv2f-lead { stroke: var(--dg-line); stroke-width: 1; }
    .dgcv2f-rock { transform-origin: 164px 164px; animation: dgcv2fRock 5.4s ease-in-out infinite; }
    @keyframes dgcv2fRock {
      0%, 10%   { transform: translateY(0) rotate(0deg); }
      45%, 62%  { transform: translateY(-3px) rotate(6deg); }
      95%, 100% { transform: translateY(0) rotate(0deg); }
    }
    .dgcv2f-slide { animation: dgcv2fSlide 5.4s ease-in-out infinite; }
    @keyframes dgcv2fSlide {
      0%, 100% { transform: translateY(0); }
      28%      { transform: translateY(-6px); }
      72%      { transform: translateY(6px); }
    }
    .dgcv2f-skew { transform-origin: 424px 152px; animation: dgcv2fSkew 5.4s ease-in-out infinite; }
    @keyframes dgcv2fSkew {
      0%, 100% { transform: skewY(0deg); }
      28%      { transform: skewY(-4deg); }
      72%      { transform: skewY(4deg); }
    }
  </style>

  <text x="16" y="32" class="dgcv2f-h">1 &#183; Seesaw &#8212; the hands move OPPOSITE</text>
  <rect x="16" y="44" width="296" height="230" rx="12" class="dgcv2f-panel"/>
  <text x="26" y="62" class="dgcv2f-sub">&#8592; posterior</text>
  <text x="302" y="62" text-anchor="end" class="dgcv2f-sub">anterior &#8594;</text>

  <line x1="164" y1="96" x2="164" y2="232" class="dgcv2f-ghost"/>
  <polygon points="126,154 126,174 148,164" fill="var(--dg-muted)" opacity=".8"/>
  <text x="122" y="168" text-anchor="end" class="dgcv2f-sub">fulcrum</text>

  <g class="dgcv2f-rock">
    <line x1="164" y1="96" x2="164" y2="232" class="dgcv2f-bone"/>
    <ellipse cx="164" cy="96" rx="12" ry="9" class="dgcv2f-end"/>
    <ellipse cx="164" cy="232" rx="10" ry="8" class="dgcv2f-end"/>
    <circle cx="164" cy="96" r="19" class="dgcv2f-hand"/>
    <circle cx="164" cy="232" r="17" class="dgcv2f-hand"/>
  </g>

  <text x="164" y="74" text-anchor="middle" class="dgcv2f-lbl">fibular head</text>
  <text x="164" y="264" text-anchor="middle" class="dgcv2f-lbl">lateral malleolus</text>

  <line x1="184" y1="88" x2="212" y2="73" class="dgcv2f-arw"/>
  <polygon points="220,69 211,79 205,69" class="dgcv2f-arw"/>
  <text x="224" y="88" class="dgcv2f-sub">anterior +</text>
  <text x="224" y="100" class="dgcv2f-sub">slightly superior</text>

  <line x1="144" y1="232" x2="116" y2="232" class="dgcv2f-arw"/>
  <polygon points="104,232 116,227 116,237" class="dgcv2f-arw"/>
  <text x="110" y="220" text-anchor="middle" class="dgcv2f-sub">posterior</text>

  <text x="328" y="32" class="dgcv2f-h">2 &#183; Total motion &#8212; the hands move TOGETHER</text>
  <rect x="328" y="44" width="296" height="230" rx="12" class="dgcv2f-panel"/>

  <rect x="396" y="100" width="26" height="146" rx="6" class="dgcv2f-fill"/>
  <text x="409" y="92" text-anchor="middle" class="dgcv2f-sub">tibia</text>

  <g class="dgcv2f-skew">
    <line x1="424" y1="108" x2="504" y2="124" class="dgcv2f-mem"/>
    <line x1="424" y1="132" x2="504" y2="148" class="dgcv2f-mem"/>
    <line x1="424" y1="156" x2="504" y2="172" class="dgcv2f-mem"/>
    <line x1="424" y1="180" x2="504" y2="196" class="dgcv2f-mem"/>
    <line x1="424" y1="204" x2="504" y2="220" class="dgcv2f-mem"/>
  </g>
  <line x1="452" y1="256" x2="452" y2="214" class="dgcv2f-lead"/>
  <text x="452" y="268" text-anchor="middle" class="dgcv2f-lbl">interosseous membrane</text>

  <g class="dgcv2f-slide">
    <line x1="520" y1="100" x2="520" y2="246" class="dgcv2f-bone"/>
    <ellipse cx="520" cy="100" rx="12" ry="9" class="dgcv2f-end"/>
    <ellipse cx="520" cy="246" rx="10" ry="8" class="dgcv2f-end"/>
    <circle cx="520" cy="100" r="19" class="dgcv2f-hand"/>
    <circle cx="520" cy="246" r="17" class="dgcv2f-hand"/>
  </g>
  <text x="520" y="76" text-anchor="middle" class="dgcv2f-lbl">fibula</text>

  <line x1="560" y1="82" x2="560" y2="120" class="dgcv2f-arw"/>
  <polygon points="560,74 555,86 565,86" class="dgcv2f-arw"/>
  <polygon points="560,128 555,116 565,116" class="dgcv2f-arw"/>
  <line x1="560" y1="226" x2="560" y2="264" class="dgcv2f-arw"/>
  <polygon points="560,218 555,230 565,230" class="dgcv2f-arw"/>
  <polygon points="560,272 555,260 565,260" class="dgcv2f-arw"/>
  <text x="570" y="152" class="dgcv2f-sub">both hands</text>
  <text x="570" y="164" class="dgcv2f-sub">together:</text>
  <text x="570" y="176" class="dgcv2f-sub">superior or</text>
  <text x="570" y="188" class="dgcv2f-sub">inferior</text>

  <text x="16" y="292" class="dgcv2f-foot">Any true movement is minuscule &#8212; a large movement means you are sliding on the skin.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Cervical C3 ERS right - one lift, three effects; then translation.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv2-cervical-lift-and-translate"] = {
  title: "C3 ERS right: one lift, three effects",
  caption:
    "C3 extended, rotated and side bent right, patient supine. The contacts are deliberately opposite - a finger on the " +
    "LEFT articular pillar of C3 and one on the RIGHT articular pillar of C4. A single lift toward the ceiling does three " +
    "things at once: it gets you through the paraspinal soft tissue so you can sense and control the segments, it naturally " +
    "extends the cervical spine (lift further for more extension, back off for less), and - because the two contacts sit on " +
    "opposite sides of the midline - it creates right rotation of C3 relative to C4, with the C4 contact acting as a " +
    "counterbalance that prevents C4 from rotating right along with it. Side bending is added by translating BOTH fingers " +
    "toward the LEFT: left translation creates right side bending. In panel 2, C3 is drawn smaller than C4 only so both can " +
    "be seen from above. Extras not in the handout: for a flexed dysfunction (C3 FRS right) lift the head and upper neck " +
    "slightly rather than only backing off the lift; lift/flex the neck further to reach C6-C7; and if your fingers are not " +
    "strong enough to translate adequately you may side bend the neck toward the level (right, here) instead of or in " +
    "addition to translating.",
  svg: `
<svg viewBox="0 0 650 320" role="img" aria-label="Three panels for cervical balanced ligamentous tension at C3 on C4. Panel one, side view: two fingers lift through the paraspinal soft tissue and the neck bows into extension. Panel two, top view: the same lift on the left C3 pillar rotates C3 to the right while the right C4 pillar is held still as a counterbalance. Panel three, rear view: translating both fingers to the left produces right side bending.">
  <style>
    .dgcv2c-panel { fill: none; stroke: var(--dg-line); stroke-width: 1.2; }
    .dgcv2c-h    { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2c-h2   { font-size: 10px; fill: var(--dg-muted); }
    .dgcv2c-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dgcv2c-lbl  { font-size: 9.5px; }
    .dgcv2c-acc  { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2c-foot { font-size: 10.5px; fill: var(--dg-muted); }
    .dgcv2c-vert { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dgcv2c-bold { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.2; }
    .dgcv2c-ghost{ fill: none; stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 4 3; }
    .dgcv2c-finger { fill: var(--dg-accent); opacity: .75; }
    .dgcv2c-arw  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.4; stroke-linecap: round; }
    .dgcv2c-curve{ fill: none; stroke: var(--dg-accent); stroke-width: 2; stroke-dasharray: 5 4; }
    .dgcv2c-lead { stroke: var(--dg-line); stroke-width: 1; }
    .dgcv2c-lift  { animation: dgcv2cLift 5.2s ease-in-out infinite; }
    .dgcv2c-lift2 { animation: dgcv2cLift2 5.2s ease-in-out infinite; }
    @keyframes dgcv2cLift {
      0%, 12%   { transform: translateY(0); }
      45%, 62%  { transform: translateY(-8px); }
      95%, 100% { transform: translateY(0); }
    }
    @keyframes dgcv2cLift2 {
      0%, 12%   { transform: translateY(0); }
      45%, 62%  { transform: translateY(-3px); }
      95%, 100% { transform: translateY(0); }
    }
    .dgcv2c-rot { transform-origin: 325px 190px; animation: dgcv2cRot 5.2s ease-in-out infinite; }
    @keyframes dgcv2cRot {
      0%, 12%   { transform: rotate(0deg); }
      45%, 62%  { transform: rotate(8deg); }
      95%, 100% { transform: rotate(0deg); }
    }
    .dgcv2c-tr  { animation: dgcv2cTr 5.2s ease-in-out infinite 2.6s; }
    @keyframes dgcv2cTr {
      0%, 12%   { transform: translateX(0); }
      45%, 62%  { transform: translateX(-11px); }
      95%, 100% { transform: translateX(0); }
    }
    .dgcv2c-tip { transform-origin: 535px 135px; animation: dgcv2cTip 5.2s ease-in-out infinite 2.6s; }
    @keyframes dgcv2cTip {
      0%, 12%   { transform: rotate(0deg); }
      45%, 62%  { transform: rotate(6deg); }
      95%, 100% { transform: rotate(0deg); }
    }
  </style>

  <text x="14" y="26" class="dgcv2c-h">1 &#183; Lift both fingers</text>
  <text x="14" y="40" class="dgcv2c-h2">soft tissue + EXTENSION</text>
  <rect x="14" y="52" width="202" height="232" rx="12" class="dgcv2c-panel"/>
  <text x="115" y="72" text-anchor="middle" class="dgcv2c-sub">side view &#183; head left, ceiling up</text>

  <path d="M 46 146 Q 115 112 184 146" class="dgcv2c-curve"/>
  <text x="115" y="104" text-anchor="middle" class="dgcv2c-acc">extension</text>

  <rect x="42" y="180" width="144" height="8" fill="var(--dg-line)" opacity=".55"/>

  <g class="dgcv2c-lift2">
    <rect x="42" y="156" width="30" height="22" rx="3" class="dgcv2c-vert"/>
    <text x="57" y="171" text-anchor="middle" class="dgcv2c-lbl">C2</text>
    <rect x="156" y="156" width="30" height="22" rx="3" class="dgcv2c-vert"/>
    <text x="171" y="171" text-anchor="middle" class="dgcv2c-lbl">C5</text>
  </g>

  <g class="dgcv2c-lift">
    <rect x="80" y="156" width="30" height="22" rx="3" class="dgcv2c-bold"/>
    <text x="95" y="171" text-anchor="middle" class="dgcv2c-lbl">C3</text>
    <rect x="118" y="156" width="30" height="22" rx="3" class="dgcv2c-bold"/>
    <text x="133" y="171" text-anchor="middle" class="dgcv2c-lbl">C4</text>
    <line x1="95" y1="196" x2="95" y2="185" class="dgcv2c-arw"/>
    <polygon points="95,178 90,189 100,189" class="dgcv2c-arw"/>
    <line x1="133" y1="196" x2="133" y2="185" class="dgcv2c-arw"/>
    <polygon points="133,178 128,189 138,189" class="dgcv2c-arw"/>
    <rect x="84" y="198" width="22" height="18" rx="8" class="dgcv2c-finger"/>
    <rect x="122" y="198" width="22" height="18" rx="8" class="dgcv2c-finger"/>
  </g>

  <line x1="176" y1="236" x2="176" y2="188" class="dgcv2c-lead"/>
  <text x="115" y="248" text-anchor="middle" class="dgcv2c-sub">paraspinal soft tissue</text>

  <text x="224" y="26" class="dgcv2c-h">2 &#183; The same lift</text>
  <text x="224" y="40" class="dgcv2c-h2">C3 rotates RIGHT on C4</text>
  <rect x="224" y="52" width="202" height="232" rx="12" class="dgcv2c-panel"/>
  <text x="325" y="72" text-anchor="middle" class="dgcv2c-sub">top view &#183; anterior up</text>

  <path d="M 285 138 Q 325 122 365 138" class="dgcv2c-curve"/>
  <polygon points="369,140 357,140 361,131" fill="var(--dg-accent)"/>

  <polygon points="295,172 355,172 369,196 325,216 281,196" class="dgcv2c-ghost"/>
  <text x="248" y="196" text-anchor="middle" class="dgcv2c-sub">pt. L</text>
  <text x="402" y="196" text-anchor="middle" class="dgcv2c-sub">pt. R</text>
  <text x="325" y="232" text-anchor="middle" class="dgcv2c-lbl">C4</text>

  <g class="dgcv2c-rot">
    <polygon points="303,177 347,177 357,194 325,209 293,194" class="dgcv2c-bold"/>
    <text x="325" y="197" text-anchor="middle" class="dgcv2c-lbl">C3</text>
    <circle cx="293" cy="194" r="4.5" fill="var(--dg-accent)"/>
  </g>
  <circle cx="369" cy="196" r="5" fill="none" stroke="var(--dg-muted)" stroke-width="2"/>

  <line x1="289" y1="190" x2="270" y2="172" class="dgcv2c-arw"/>
  <polygon points="264,166 275,170 269,177" class="dgcv2c-arw"/>
  <text x="258" y="162" text-anchor="end" class="dgcv2c-acc">lift</text>

  <circle cx="236" cy="245" r="4.5" fill="var(--dg-accent)"/>
  <text x="248" y="249" class="dgcv2c-lbl">left C3 pillar &#8212; you lift</text>
  <circle cx="236" cy="263" r="5" fill="none" stroke="var(--dg-muted)" stroke-width="2"/>
  <text x="248" y="267" class="dgcv2c-lbl">right C4 pillar &#8212; held still</text>

  <text x="434" y="26" class="dgcv2c-h">3 &#183; Translate both LEFT</text>
  <text x="434" y="40" class="dgcv2c-h2">C3 and C4 fingers together</text>
  <rect x="434" y="52" width="202" height="232" rx="12" class="dgcv2c-panel"/>
  <text x="535" y="72" text-anchor="middle" class="dgcv2c-sub">rear view &#183; patient's L and R</text>
  <text x="452" y="120" text-anchor="middle" class="dgcv2c-sub">L</text>
  <text x="620" y="120" text-anchor="middle" class="dgcv2c-sub">R</text>

  <rect x="508" y="124" width="54" height="22" rx="3" transform="rotate(6 535 135)" class="dgcv2c-ghost"/>

  <g class="dgcv2c-tip">
    <rect x="508" y="124" width="54" height="22" rx="3" class="dgcv2c-vert"/>
    <text x="535" y="139" text-anchor="middle" class="dgcv2c-lbl">C2</text>
  </g>
  <rect x="508" y="208" width="54" height="22" rx="3" class="dgcv2c-vert"/>
  <text x="535" y="223" text-anchor="middle" class="dgcv2c-lbl">C5</text>

  <g class="dgcv2c-tr">
    <rect x="508" y="152" width="54" height="22" rx="3" class="dgcv2c-bold"/>
    <text x="535" y="167" text-anchor="middle" class="dgcv2c-lbl">C3</text>
    <circle cx="515" cy="163" r="4.5" fill="var(--dg-accent)"/>
    <line x1="506" y1="163" x2="482" y2="163" class="dgcv2c-arw"/>
    <polygon points="474,163 484,158 484,168" class="dgcv2c-arw"/>
    <rect x="508" y="180" width="54" height="22" rx="3" class="dgcv2c-bold"/>
    <text x="535" y="195" text-anchor="middle" class="dgcv2c-lbl">C4</text>
    <circle cx="555" cy="191" r="4.5" fill="var(--dg-accent)"/>
    <line x1="506" y1="191" x2="482" y2="191" class="dgcv2c-arw"/>
    <polygon points="474,191 484,186 484,196" class="dgcv2c-arw"/>
  </g>

  <text x="535" y="262" text-anchor="middle" class="dgcv2c-acc">left translation &#8594; RIGHT side bending</text>

  <text x="16" y="306" class="dgcv2c-foot">One lift = through the soft tissue, into extension, and into right rotation of C3 on a counterbalanced C4.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// T1 FRS right - the technique is performed through T2 (relative motion).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv2-t1-relative-motion"] = {
  title: "T1 FRS right: treated through T2",
  caption:
    "T1 flexed, rotated and side bent right RELATIVE TO T2 (Nicholas Atlas, supine; possibly usable at T3-T4 depending on " +
    "finger length, but for testing purposes limited to T1 and T2). Index fingers take the T1 transverse processes and the " +
    "middle fingers take T2 - yet most of the technique is performed through the T2 contact. Lifting or relaxing the fingers " +
    "on the T2 transverse processes tunes the flexion-extension balance point, and it is okay to be pushing on the lower of " +
    "the two segments as long as you monitor the motion and forces BETWEEN T1 and T2. T2 is then side bent and rotated to the " +
    "LEFT: T1 itself is never taken left, and being left behind is exactly what places T1 relatively rotated and side bent " +
    "RIGHT - the somatic dysfunction. Only at the end is T1 itself fine-tuned to the right. The lecture's sequence-logic line " +
    "labels steps B, C, D as flexion, then rotation, then side bending, although as written steps C and D each combine side " +
    "bending with rotation. The top view shows rotation; the side bending of T2 goes the same way (left).",
  svg: `
<svg viewBox="0 0 650 300" role="img" aria-label="Left panel, side view: index finger on T1 and middle finger on T2, with the T2 finger lifting and relaxing while the motion between T1 and T2 is monitored. Right panel, top view: T1 stays still while T2 side bends and rotates to the patient's left, which leaves T1 relatively rotated right, after which T1 is fine-tuned right. Below, a four-step timeline: contact, flexion, rotation, side bending.">
  <style>
    .dgcv2t-panel { fill: none; stroke: var(--dg-line); stroke-width: 1.2; }
    .dgcv2t-h    { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2t-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dgcv2t-seg  { font-size: 11px; font-weight: 700; }
    .dgcv2t-acc  { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2t-foot { font-size: 10.5px; fill: var(--dg-muted); }
    .dgcv2t-vert { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dgcv2t-fix  { fill: none; stroke: var(--dg-ink); stroke-width: 2.4; }
    .dgcv2t-mov  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dgcv2t-finger { fill: var(--dg-accent); opacity: .75; }
    .dgcv2t-arw  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.2; stroke-linecap: round; }
    .dgcv2t-ink  { stroke: var(--dg-ink); fill: var(--dg-ink); stroke-width: 2.2; stroke-linecap: round; }
    .dgcv2t-mon  { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; stroke-dasharray: 4 3; }
    .dgcv2t-lead { stroke: var(--dg-line); stroke-width: 1; }
    .dgcv2t-chip { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dgcv2t-hi   { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; }
    .dgcv2t-badge{ font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dgcv2t-head { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); }
    .dgcv2t-fine { font-size: 9px; }
    .dgcv2t-b { animation: dgcv2tB 9s ease-in-out infinite; }
    @keyframes dgcv2tB {
      0%, 18%   { transform: translateY(0); }
      25%       { transform: translateY(-7px); }
      32%       { transform: translateY(3px); }
      38%, 100% { transform: translateY(0); }
    }
    .dgcv2t-t2 { transform-origin: 481px 116px; animation: dgcv2tT2 9s ease-in-out infinite; }
    @keyframes dgcv2tT2 {
      0%, 38%   { transform: rotate(0deg); }
      55%, 88%  { transform: rotate(-9deg); }
      100%      { transform: rotate(0deg); }
    }
    .dgcv2t-t1 { transform-origin: 481px 116px; animation: dgcv2tT1 9s ease-in-out infinite; }
    @keyframes dgcv2tT1 {
      0%, 60%   { transform: rotate(0deg); }
      72%, 88%  { transform: rotate(4deg); }
      100%      { transform: rotate(0deg); }
    }
    .dgcv2t-hiA { animation: dgcv2tHiA 9s linear infinite; }
    .dgcv2t-hiB { animation: dgcv2tHiB 9s linear infinite; }
    .dgcv2t-hiC { animation: dgcv2tHiC 9s linear infinite; }
    .dgcv2t-hiD { animation: dgcv2tHiD 9s linear infinite; }
    @keyframes dgcv2tHiA { 0%, 16% { opacity: 1 } 20%, 100% { opacity: 0 } }
    @keyframes dgcv2tHiB { 0%, 16% { opacity: 0 } 20%, 36% { opacity: 1 } 40%, 100% { opacity: 0 } }
    @keyframes dgcv2tHiC { 0%, 36% { opacity: 0 } 40%, 58% { opacity: 1 } 62%, 100% { opacity: 0 } }
    @keyframes dgcv2tHiD { 0%, 58% { opacity: 0 } 62%, 86% { opacity: 1 } 90%, 100% { opacity: 0 } }
  </style>

  <text x="14" y="24" class="dgcv2t-h">SIDE VIEW &#183; head left, ceiling up &#183; step B</text>
  <rect x="14" y="38" width="302" height="170" rx="12" class="dgcv2t-panel"/>
  <text x="165" y="64" text-anchor="middle" class="dgcv2t-sub">monitor the motion between T1 and T2</text>
  <line x1="152" y1="70" x2="147" y2="94" class="dgcv2t-lead"/>

  <rect x="86" y="94" width="54" height="26" rx="4" class="dgcv2t-vert"/>
  <text x="113" y="112" text-anchor="middle" class="dgcv2t-seg">T1</text>
  <line x1="113" y1="140" x2="113" y2="129" class="dgcv2t-ink"/>
  <polygon points="113,122 108,133 118,133" class="dgcv2t-ink"/>
  <rect x="102" y="142" width="22" height="18" rx="8" class="dgcv2t-finger"/>

  <g class="dgcv2t-b">
    <rect x="150" y="104" width="54" height="26" rx="4" class="dgcv2t-vert"/>
    <text x="177" y="122" text-anchor="middle" class="dgcv2t-seg">T2</text>
    <line x1="177" y1="150" x2="177" y2="139" class="dgcv2t-arw"/>
    <polygon points="177,132 172,143 182,143" class="dgcv2t-arw"/>
    <rect x="166" y="152" width="22" height="18" rx="8" class="dgcv2t-finger"/>
  </g>

  <circle cx="146" cy="110" r="15" class="dgcv2t-mon"/>

  <line x1="214" y1="132" x2="214" y2="176" class="dgcv2t-arw"/>
  <polygon points="214,124 209,136 219,136" class="dgcv2t-arw"/>
  <polygon points="214,184 209,172 219,172" class="dgcv2t-arw"/>
  <text x="226" y="150" class="dgcv2t-acc">lift</text>
  <text x="226" y="163" class="dgcv2t-acc">or relax</text>

  <text x="165" y="196" text-anchor="middle" class="dgcv2t-sub">index fingers on T1 TPs &#183; middle fingers on T2 TPs</text>

  <text x="326" y="24" class="dgcv2t-h">TOP VIEW &#183; anterior up &#183; steps C, D</text>
  <rect x="326" y="38" width="310" height="170" rx="12" class="dgcv2t-panel"/>
  <text x="440" y="56" text-anchor="middle" class="dgcv2t-sub">T1 stays put &#8212; T2 does the moving</text>

  <path d="M 449 80 Q 481 66 513 80" fill="none" stroke="var(--dg-ink)" stroke-width="2" stroke-dasharray="5 4"/>
  <polygon points="518,85 507,85 511,76" fill="var(--dg-ink)"/>
  <text x="530" y="76" class="dgcv2t-fine">T1: fine-tune</text>
  <text x="530" y="88" class="dgcv2t-fine">RIGHT (last)</text>

  <text x="352" y="122" text-anchor="middle" class="dgcv2t-sub">pt. L</text>
  <text x="610" y="122" text-anchor="middle" class="dgcv2t-sub">pt. R</text>

  <g class="dgcv2t-t2">
    <polygon points="451,98 511,98 525,122 481,142 437,122" class="dgcv2t-mov"/>
    <circle cx="437" cy="122" r="5" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
    <circle cx="525" cy="122" r="5" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  </g>
  <text x="541" y="130" class="dgcv2t-seg">T2</text>
  <line x1="538" y1="126" x2="529" y2="123" class="dgcv2t-lead"/>

  <g class="dgcv2t-t1">
    <polygon points="459,103 503,103 513,120 481,135 449,120" class="dgcv2t-fix"/>
    <text x="481" y="122" text-anchor="middle" class="dgcv2t-seg">T1</text>
    <circle cx="449" cy="120" r="4" fill="var(--dg-ink)"/>
    <circle cx="513" cy="120" r="4" fill="var(--dg-ink)"/>
  </g>

  <path d="M 437 160 Q 481 178 525 160" fill="none" stroke="var(--dg-accent)" stroke-width="2" stroke-dasharray="5 4"/>
  <polygon points="529,158 521,167 517,158" fill="var(--dg-accent)"/>
  <text x="481" y="196" text-anchor="middle" class="dgcv2t-acc">T2: side bend + rotate LEFT</text>

  <rect x="14" y="220" width="144" height="52" rx="8" class="dgcv2t-chip"/>
  <circle cx="31" cy="238" r="10" fill="var(--dg-accent)"/>
  <text x="31" y="242" text-anchor="middle" class="dgcv2t-badge">A</text>
  <text x="47" y="242" class="dgcv2t-head">CONTACT</text>
  <text x="25" y="256" class="dgcv2t-fine">index fingers on T1</text>
  <text x="25" y="267" class="dgcv2t-fine">middle fingers on T2</text>
  <rect x="14" y="220" width="144" height="52" rx="8" class="dgcv2t-hi dgcv2t-hiA" opacity="0"/>

  <rect x="172" y="220" width="144" height="52" rx="8" class="dgcv2t-chip"/>
  <circle cx="189" cy="238" r="10" fill="var(--dg-accent)"/>
  <text x="189" y="242" text-anchor="middle" class="dgcv2t-badge">B</text>
  <text x="205" y="242" class="dgcv2t-head">FLEXION</text>
  <text x="183" y="256" class="dgcv2t-fine">lift / relax the fingers</text>
  <text x="183" y="267" class="dgcv2t-fine">on the T2 TPs</text>
  <rect x="172" y="220" width="144" height="52" rx="8" class="dgcv2t-hi dgcv2t-hiB" opacity="0"/>

  <rect x="330" y="220" width="144" height="52" rx="8" class="dgcv2t-chip"/>
  <circle cx="347" cy="238" r="10" fill="var(--dg-accent)"/>
  <text x="347" y="242" text-anchor="middle" class="dgcv2t-badge">C</text>
  <text x="363" y="242" class="dgcv2t-head">ROTATION</text>
  <text x="341" y="256" class="dgcv2t-fine">SB + rotate T2 LEFT</text>
  <text x="341" y="267" class="dgcv2t-fine">&#8594; T1 relatively RIGHT</text>
  <rect x="330" y="220" width="144" height="52" rx="8" class="dgcv2t-hi dgcv2t-hiC" opacity="0"/>

  <rect x="488" y="220" width="144" height="52" rx="8" class="dgcv2t-chip"/>
  <circle cx="505" cy="238" r="10" fill="var(--dg-accent)"/>
  <text x="505" y="242" text-anchor="middle" class="dgcv2t-badge">D</text>
  <text x="521" y="242" class="dgcv2t-head">SIDE BENDING</text>
  <text x="499" y="256" class="dgcv2t-fine">fine-tune T1 RIGHT</text>
  <text x="499" y="267" class="dgcv2t-fine">the only move on T1</text>
  <rect x="488" y="220" width="144" height="52" rx="8" class="dgcv2t-hi dgcv2t-hiD" opacity="0"/>

  <text x="16" y="292" class="dgcv2t-foot">T1 is never taken left &#8212; T2 goes left, and T1 being left behind IS the right-sided dysfunction.</text>
</svg>`,
};

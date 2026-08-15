/*
 * cv32 - Scoliosis (Lecture #32, P. Kooyman, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Adams forward bend + side bending: functional vs structural.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv32-forward-bend"] = {
  title: "Side bending sorts the curve",
  caption:
    "Both patients are forward bent with knees extended, and both show a right rib hump. " +
    "The physician then asks each to side bend toward the side of the hump and watches from behind. " +
    "The <b>functional</b> curve flattens - it was being held by soft tissue and posture. " +
    "The <b>structural</b> curve does not change, because the deformity is in the vertebrae, discs and ligaments themselves (Slides 11, 35). " +
    "Hump heights are schematic; the direction of the finding is this lecture's.",
  svg: `
<svg viewBox="0 0 630 252" role="img" aria-label="Two side-by-side panels showing the back of a forward-bent patient with a right rib hump. In the left panel, labelled functional curve, the spine tilts into side bending and the rib hump flattens down to the level of the rest of the back. In the right panel, labelled structural curve, the same side bending occurs but the rib hump stays exactly as prominent.">
  <style>
    .dg32a-t    { font-size: 12.5px; font-weight: 700; }
    .dg32a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg32a-back { fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg32a-hump { fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg32a-mid  { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg32a-spine{ stroke: var(--dg-accent); stroke-width: 4; stroke-linecap: round; }
    .dg32a-div  { stroke: var(--dg-line); stroke-width: 1; }

    .dg32a-humpF { transform-box: view-box; transform-origin: 218px 168px;
                   animation: dg32aFlat 6.5s ease-in-out infinite; }
    @keyframes dg32aFlat { 0%, 22% { transform: scaleY(1) } 54%, 82% { transform: scaleY(.08) } 100% { transform: scaleY(1) } }

    .dg32a-humpS { transform-box: view-box; transform-origin: 528px 168px;
                   animation: dg32aStay 6.5s ease-in-out infinite; }
    @keyframes dg32aStay { 0%, 22% { transform: scaleY(1) } 54%, 82% { transform: scaleY(.94) } 100% { transform: scaleY(1) } }

    .dg32a-tiltF { transform-box: view-box; transform-origin: 165px 162px;
                   animation: dg32aTilt 6.5s ease-in-out infinite; }
    .dg32a-tiltS { transform-box: view-box; transform-origin: 475px 162px;
                   animation: dg32aTilt 6.5s ease-in-out infinite; }
    @keyframes dg32aTilt { 0%, 22% { transform: rotate(0deg) } 54%, 82% { transform: rotate(16deg) } 100% { transform: rotate(0deg) } }

    .dg32a-verdict { animation: dg32aShow 6.5s ease-in-out infinite; }
    @keyframes dg32aShow { 0%, 40% { opacity: .25 } 58%, 82% { opacity: 1 } 96%, 100% { opacity: .25 } }
  </style>

  <text x="24"  y="22" class="dg32a-t" fill="var(--dg-good)">Functional curve</text>
  <text x="24"  y="38" class="dg32a-sub">rib hump reduces with side bending</text>
  <text x="334" y="22" class="dg32a-t" fill="var(--dg-warm)">Structural curve</text>
  <text x="334" y="38" class="dg32a-sub">rib hump persists</text>

  <line x1="315" y1="14" x2="315" y2="238" class="dg32a-div"/>

  <text x="165" y="72" class="dg32a-sub" text-anchor="middle">side bend toward the hump</text>
  <text x="475" y="72" class="dg32a-sub" text-anchor="middle">side bend toward the hump</text>

  <g class="dg32a-tiltF"><line x1="165" y1="86" x2="165" y2="162" class="dg32a-spine"/></g>
  <g class="dg32a-tiltS"><line x1="475" y1="86" x2="475" y2="162" class="dg32a-spine"/></g>

  <line x1="165" y1="108" x2="165" y2="196" class="dg32a-mid"/>
  <line x1="475" y1="108" x2="475" y2="196" class="dg32a-mid"/>

  <path class="dg32a-back" d="M46 168 L165 168"/>
  <g class="dg32a-humpF"><path class="dg32a-hump" d="M165 168 Q218 112 270 168"/></g>
  <text x="222" y="106" class="dg32a-sub" text-anchor="middle">right rib hump</text>

  <path class="dg32a-back" d="M356 168 L475 168"/>
  <g class="dg32a-humpS"><path class="dg32a-hump" d="M475 168 Q528 112 580 168"/></g>
  <text x="532" y="106" class="dg32a-sub" text-anchor="middle">right rib hump</text>

  <text x="80" y="192" class="dg32a-sub">left (concave)</text>
  <text x="228" y="192" class="dg32a-sub">right (convex)</text>
  <text x="390" y="192" class="dg32a-sub">left (concave)</text>
  <text x="538" y="192" class="dg32a-sub">right (convex)</text>

  <text x="24"  y="220" class="dg32a-t dg32a-verdict" fill="var(--dg-good)">Hump flattens &#8594; functional</text>
  <text x="334" y="220" class="dg32a-t dg32a-verdict" fill="var(--dg-warm)">Hump unchanged &#8594; structural</text>
  <text x="24"  y="240" class="dg32a-sub">Curve is named for the convexity; the apical vertebra is the most deviated and rotated one (Slide 7).</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Constructing the Cobb angle, step by step.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv32-cobb-angle"] = {
  title: "Building the Cobb angle",
  caption:
    "The construction runs in four steps. Find the <b>highest vertebra inclined toward the concavity</b> and draw a line along its <b>superior</b> border; " +
    "find the <b>lowest vertebra inclined toward the concavity</b> and draw a line along its <b>inferior</b> border; " +
    "then drop a perpendicular from each. The angle where the two perpendiculars intersect is the Cobb angle, and it equals the angle at which the two endplate lines themselves converge (Slide 46). " +
    "The perpendiculars exist because in a large curve the endplate lines meet far off the film. " +
    "A curve of 10 degrees or more measured this way is scoliosis (Slide 6). Geometry is schematic - no degree value is implied.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="A schematic scoliotic column of eight vertebrae curving to the right. The top end vertebra is highlighted and a line is drawn along its superior border extending to the right; the bottom end vertebra is highlighted and a line is drawn along its inferior border. A perpendicular is dropped from each line, and the two perpendiculars cross at an angle equal to the angle where the two endplate lines converge further to the right.">
  <style>
    .dg32b-v    { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg32b-hlx  { fill: var(--dg-accent); opacity: .85; }
    .dg32b-lbl  { font-size: 11px; font-weight: 700; }
    .dg32b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg32b-end  { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-linecap: round; }
    .dg32b-perp { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg32b-arc  { fill: none; stroke: var(--dg-good); stroke-width: 2.6; }
    .dg32b-lead { stroke: var(--dg-line); stroke-width: 1.2; }

    .dg32b-lineA { stroke-dasharray: 462; animation: dg32bA 12s linear infinite; }
    @keyframes dg32bA { 0%, 8% { stroke-dashoffset: 462 } 26%, 100% { stroke-dashoffset: 0 } }
    .dg32b-lineB { stroke-dasharray: 462; animation: dg32bB 12s linear infinite; }
    @keyframes dg32bB { 0%, 34% { stroke-dashoffset: 462 } 52%, 100% { stroke-dashoffset: 0 } }
    .dg32b-p1 { stroke-dasharray: 140; animation: dg32bP1 12s linear infinite; }
    @keyframes dg32bP1 { 0%, 56% { stroke-dashoffset: 140 } 68%, 100% { stroke-dashoffset: 0 } }
    .dg32b-p2 { stroke-dasharray: 140; animation: dg32bP2 12s linear infinite; }
    @keyframes dg32bP2 { 0%, 66% { stroke-dashoffset: 140 } 78%, 100% { stroke-dashoffset: 0 } }

    .dg32b-h1 { animation: dg32bH1 12s linear infinite; }
    @keyframes dg32bH1 { 0%, 2% { opacity: 0 } 7%, 100% { opacity: .85 } }
    .dg32b-h2 { animation: dg32bH2 12s linear infinite; }
    @keyframes dg32bH2 { 0%, 28% { opacity: 0 } 33%, 100% { opacity: .85 } }
    .dg32b-ang { animation: dg32bAng 12s linear infinite; }
    @keyframes dg32bAng { 0%, 80% { opacity: 0 } 88%, 100% { opacity: 1 } }
  </style>

  <text x="58" y="14" class="dg32b-sub">1. superior border of the highest vertebra inclined toward the concavity</text>

  <rect class="dg32b-v" x="91"  y="37.5"  width="54" height="17" transform="rotate(-16 118 46)"/>
  <rect class="dg32b-hlx dg32b-h1" x="91" y="37.5" width="54" height="17" transform="rotate(-16 118 46)"/>
  <rect class="dg32b-v" x="115" y="65.5"  width="54" height="17" transform="rotate(-12 142 74)"/>
  <rect class="dg32b-v" x="137" y="93.5"  width="54" height="17" transform="rotate(-7 164 102)"/>
  <rect class="dg32b-v" x="151" y="121.5" width="54" height="17" transform="rotate(-2 178 130)"/>
  <rect class="dg32b-v" x="155" y="149.5" width="54" height="17" transform="rotate(3 182 158)"/>
  <rect class="dg32b-v" x="147" y="177.5" width="54" height="17" transform="rotate(8 174 186)"/>
  <rect class="dg32b-v" x="131" y="205.5" width="54" height="17" transform="rotate(12 158 214)"/>
  <rect class="dg32b-v" x="109" y="237.5" width="54" height="17" transform="rotate(16 136 246)"/>
  <rect class="dg32b-hlx dg32b-h2" x="109" y="237.5" width="54" height="17" transform="rotate(16 136 246)"/>

  <line x1="30" y1="158" x2="150" y2="158" class="dg32b-lead"/>
  <text x="4" y="154" class="dg32b-sub">apex</text>

  <line x1="56" y1="20"  x2="496" y2="145" class="dg32b-end dg32b-lineA"/>
  <line x1="56" y1="268" x2="496" y2="143" class="dg32b-end dg32b-lineB"/>
  <text x="58" y="288" class="dg32b-sub">2. inferior border of the lowest vertebra inclined toward the concavity</text>

  <line x1="352" y1="58"  x2="315" y2="187" class="dg32b-perp dg32b-p1"/>
  <line x1="352" y1="230" x2="315" y2="101" class="dg32b-perp dg32b-p2"/>
  <text x="360" y="52"  class="dg32b-sub" fill="var(--dg-warm)">3. perpendicular</text>
  <text x="360" y="244" class="dg32b-sub" fill="var(--dg-warm)">4. perpendicular</text>

  <g class="dg32b-ang">
    <path class="dg32b-arc" d="M335 119 A26 26 0 0 1 335 169"/>
    <text x="348" y="150" class="dg32b-lbl" fill="var(--dg-good)">Cobb angle</text>
    <path class="dg32b-arc" d="M475 138 A22 22 0 0 0 475 150"/>
    <circle cx="496" cy="144" r="3.5" fill="var(--dg-cool)"/>
    <text x="508" y="148" class="dg32b-sub" fill="var(--dg-good)">same angle</text>
  </g>

  <text x="4" y="306" class="dg32b-sub">In a large curve the two endplate lines meet off the film, so the angle is read where the perpendiculars cross.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Risser sign: ossification of the iliac apophysis vs remaining growth.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv32-risser"] = {
  title: "Risser sign: reading the growth left",
  caption:
    "The iliac apophysis ossifies in a stepwise fashion from <b>anterolateral to posteromedial</b> along the iliac crest, and the Risser sign grades how far that has gone: " +
    "0 none, 1 up to 25 percent, 2 is 26 to 50, 3 is 51 to 75, 4 is over 76, 5 is full bony fusion (Slides 51-53). " +
    "The wedge underneath shrinks as the crest fills, because a lower Risser grade means more growth remaining and therefore greater risk of curve progression. " +
    "That is why the brace window sits at Risser 0-2 with Sanders stage 1-3, and why bracing is contraindicated once the ring apophyses are fused at Risser 4-5 (Slides 68-69). " +
    "Note that Risser 1 appears only after peak height velocity has already passed.",
  svg: `
<svg viewBox="0 0 640 268" role="img" aria-label="An arc representing the iliac crest fills progressively from left to right as ossification proceeds from anterolateral to posteromedial, with grade markers dividing it into quarters labelled one through four and full fusion at the right end labelled five. Beneath it a wedge representing remaining growth and progression risk tapers from tall on the left to thin on the right, with a marker travelling along it in step with the ossification. Two boxes on the right state that Risser zero to two with Sanders one to three is the bracing window and that Risser four to five is skeletally mature, where bracing is contraindicated.">
  <style>
    .dg32c-t    { font-size: 12px; font-weight: 700; }
    .dg32c-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg32c-num  { font-size: 12.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg32c-trk  { fill: none; stroke: var(--dg-line); stroke-width: 13; stroke-linecap: round; }
    .dg32c-oss  { fill: none; stroke: var(--dg-accent); stroke-width: 13; stroke-linecap: round; }
    .dg32c-tick { stroke: var(--dg-surface); stroke-width: 2.4; }
    .dg32c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg32c-wedge{ fill: var(--dg-warm); opacity: .35; }
    .dg32c-edge { fill: none; stroke: var(--dg-warm); stroke-width: 1.6; }

    .dg32c-fill { stroke-dasharray: 366; animation: dg32cGrow 11s linear infinite; }
    @keyframes dg32cGrow { 0% { stroke-dashoffset: 366 } 86%, 100% { stroke-dashoffset: 0 } }

    .dg32c-mk { animation: dg32cRun 11s linear infinite; }
    @keyframes dg32cRun { 0% { transform: translateX(0) } 86%, 100% { transform: translateX(340px) } }
  </style>

  <text x="24" y="20" class="dg32c-t">Iliac apophysis: ossifies anterolateral &#8594; posteromedial</text>

  <path class="dg32c-trk" d="M80 150 Q250 60 420 150"/>
  <path class="dg32c-oss dg32c-fill" d="M80 150 Q250 60 420 150"/>

  <line x1="165" y1="108" x2="165" y2="124" class="dg32c-tick"/>
  <line x1="250" y1="97"  x2="250" y2="113" class="dg32c-tick"/>
  <line x1="335" y1="108" x2="335" y2="124" class="dg32c-tick"/>

  <text x="122" y="118" class="dg32c-num" text-anchor="middle">1</text>
  <text x="207" y="96"  class="dg32c-num" text-anchor="middle">2</text>
  <text x="292" y="96"  class="dg32c-num" text-anchor="middle">3</text>
  <text x="377" y="118" class="dg32c-num" text-anchor="middle">4</text>

  <text x="28"  y="170" class="dg32c-sub">0 = none</text>
  <text x="424" y="170" class="dg32c-sub">5 = fused</text>

  <text x="24" y="192" class="dg32c-sub">1: up to 25%    2: 26-50%    3: 51-75%    4: over 76%    5: full bony fusion</text>
  <text x="24" y="210" class="dg32c-sub">Growth remaining and risk of curve progression</text>

  <polygon class="dg32c-wedge" points="80,216 420,241 420,246 80,246"/>
  <polyline class="dg32c-edge" points="80,216 420,241"/>
  <g class="dg32c-mk"><circle cx="80" cy="232" r="6" fill="var(--dg-warm)"/></g>

  <text x="24" y="262" class="dg32c-sub">Risser 1 appears only AFTER peak height velocity has passed.</text>

  <rect class="dg32c-box" x="454" y="44" width="176" height="56" rx="10"/>
  <text x="468" y="66" class="dg32c-t" fill="var(--dg-good)">Risser 0-2, Sanders 1-3</text>
  <text x="468" y="84" class="dg32c-sub">skeletally immature: brace window</text>

  <rect class="dg32c-box" x="454" y="116" width="176" height="70" rx="10"/>
  <text x="468" y="138" class="dg32c-t" fill="var(--dg-warm)">Risser 4-5, Sanders 4-8</text>
  <text x="468" y="156" class="dg32c-sub">ring apophyses fused, mature:</text>
  <text x="468" y="172" class="dg32c-sub">bracing contraindicated</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Crankshaft phenomenon after isolated posterior fusion.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv32-crankshaft"] = {
  title: "Crankshaft phenomenon",
  caption:
    "A posterior spinal fusion locks the back of the spine, but in a skeletally immature child - classically one with <b>open triradiate cartilages</b> - the vertebral bodies in front keep growing. " +
    "The anterior column lengthens against a tethered posterior column, so the extra length has nowhere to go but into a twist, producing a severe alignment deformity both <b>rotationally and in the sagittal plane</b> (Slides 17, 80). " +
    "The dashed outlines mark where the spine started. " +
    "This is what a combined anterior plus posterior fusion is meant to prevent, though modern segmental instrumentation is now thought to obviate the anterior procedure.",
  svg: `
<svg viewBox="0 0 620 264" role="img" aria-label="On the left, a side view of four vertebral bodies stacked in front of a solid posterior fusion mass and rod. The vertebral body column grows taller past a dashed line marking its original height while the fused posterior column stays the same length. On the right, an axial view of a vertebra rotates away from a dashed outline of its original position, showing the resulting rotational deformity.">
  <style>
    .dg32d-t    { font-size: 12px; font-weight: 700; }
    .dg32d-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg32d-body { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg32d-fuse { fill: var(--dg-accent); opacity: .55; }
    .dg32d-rod  { stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    .dg32d-ref  { fill: none; stroke: var(--dg-line); stroke-width: 1.6; stroke-dasharray: 5 4; }
    .dg32d-vert { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.2; }
    .dg32d-div  { stroke: var(--dg-line); stroke-width: 1; }
    .dg32d-arr  { fill: var(--dg-warm); }

    .dg32d-grow { transform-box: view-box; transform-origin: 114px 206px;
                  transform: scaleY(1.25);
                  animation: dg32dGrow 7.5s ease-in-out infinite; }
    @keyframes dg32dGrow { 0%, 12% { transform: scaleY(1) } 68%, 100% { transform: scaleY(1.25) } }

    .dg32d-up1 { animation: dg32dUp 7.5s ease-in-out infinite; }
    .dg32d-up2 { animation: dg32dUp 7.5s ease-in-out infinite .5s; }
    @keyframes dg32dUp {
      0%, 14% { transform: translateY(0); opacity: 0 }
      26%     { opacity: .95 }
      72%     { opacity: .95 }
      100%    { transform: translateY(-40px); opacity: 0 }
    }

    .dg32d-rot { transform-box: view-box; transform-origin: 470px 130px;
                 transform: rotate(30deg);
                 animation: dg32dTwist 7.5s ease-in-out infinite; }
    @keyframes dg32dTwist { 0%, 12% { transform: rotate(0deg) } 68%, 100% { transform: rotate(30deg) } }
  </style>

  <text x="24"  y="20" class="dg32d-t" fill="var(--dg-warm)">Anterior column keeps growing</text>
  <text x="24"  y="36" class="dg32d-sub">open triradiate cartilages = growth left</text>
  <text x="344" y="20" class="dg32d-t">Result: the spine twists</text>
  <text x="344" y="36" class="dg32d-sub">rotational and sagittal deformity</text>

  <line x1="318" y1="14" x2="318" y2="250" class="dg32d-div"/>

  <line x1="76" y1="92" x2="160" y2="92" class="dg32d-ref"/>
  <text x="24" y="88" class="dg32d-sub">start</text>

  <g class="dg32d-grow">
    <rect class="dg32d-body" x="88" y="182" width="52" height="24" rx="4"/>
    <rect class="dg32d-body" x="88" y="152" width="52" height="24" rx="4"/>
    <rect class="dg32d-body" x="88" y="122" width="52" height="24" rx="4"/>
    <rect class="dg32d-body" x="88" y="92"  width="52" height="24" rx="4"/>
  </g>

  <g class="dg32d-up1"><polygon class="dg32d-arr" points="70,120 62,134 78,134"/></g>
  <g class="dg32d-up2"><polygon class="dg32d-arr" points="70,160 62,174 78,174"/></g>

  <rect class="dg32d-fuse" x="168" y="92" width="28" height="114" rx="8"/>
  <line x1="182" y1="98" x2="182" y2="200" class="dg32d-rod"/>
  <text x="202" y="120" class="dg32d-t" fill="var(--dg-accent)">Posterior</text>
  <text x="202" y="136" class="dg32d-sub">fusion mass</text>
  <text x="202" y="152" class="dg32d-sub">and rod:</text>
  <text x="202" y="168" class="dg32d-sub">tethered,</text>
  <text x="202" y="184" class="dg32d-sub">no growth</text>

  <line x1="88" y1="212" x2="196" y2="212" class="dg32d-div"/>
  <text x="24" y="236" class="dg32d-sub">Front lengthens, back cannot &#8594; the extra length becomes a twist.</text>

  <g>
    <ellipse class="dg32d-ref" cx="470" cy="130" rx="48" ry="30"/>
    <line x1="470" y1="160" x2="470" y2="196" class="dg32d-ref"/>
  </g>
  <g class="dg32d-rot">
    <ellipse class="dg32d-vert" cx="470" cy="130" rx="48" ry="30"/>
    <line x1="470" y1="160" x2="470" y2="196" stroke="var(--dg-ink)" stroke-width="4" stroke-linecap="round"/>
  </g>
  <text x="344" y="222" class="dg32d-sub">dashed = original position; solid = after continued anterior growth</text>
  <text x="344" y="240" class="dg32d-sub">Prevented by adding an anterior spinal fusion (Slide 80).</text>
</svg>`,
};

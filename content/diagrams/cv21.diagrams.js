/*
 * cv21 - OMM Lab #33 prep: cranial strain patterns, condylar decompression
 * and the cranial lifts (M. Terzella, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// The four physiologic patterns as they arrive under the vault hold.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv21-vault-hold-strain-patterns"] = {
  title: "Physiologic strain patterns under the vault hold",
  caption:
    "Top view of the vault hold: the vertex is at the top, the patient's feet at the bottom, and because you are looking down on a supine patient, " +
    "the patient's RIGHT &#8212; the side your right hand holds &#8212; is on the LEFT of each panel. The lower pad is your index finger on the greater wing " +
    "of the sphenoid, the upper pad your pinky on the occiput; a pad that grows is rising toward you. " +
    "Flexion and extension are two phases of ONE continuous cycle: hands and fingers spread and travel caudad, palms moving laterally, then approximate " +
    "and travel cephalad with the palms moving medially. " +
    "Right torsion: the hands rotate in opposite directions &#8212; the right index finger comes up toward the operator while the right pinky moves toward the feet, " +
    "and the left hand does the opposite; the hand rotating cephalad is on the side whose greater wing moves cephalad, and that is the side the torsion is named for. " +
    "Right sidebending-rotation: the right hand travels caudad with the fingers spreading (side of the convexity) while the left hand travels cephalad with the " +
    "fingers narrowing (side of the concavity); left SBR is the exact mirror image. All directions are this lecture's (Slide 4).",
  svg: `
<svg viewBox="0 0 660 308" role="img" aria-label="Three panels showing a vault hold seen from above, with the sphenoid and occiput drawn inside the head and the operator's index and pinky finger pads outside it. Panel one cycles between flexion, in which the hands spread and travel toward the feet, and extension, in which they approximate and travel toward the vertex. Panel two shows right torsion: the right index pad rises toward the operator while the right pinky pad travels toward the feet, and the left hand does the opposite. Panel three shows right sidebending-rotation: the right hand travels toward the feet with its pads spreading on the side of the convexity, while the left hand travels toward the vertex with its pads narrowing on the side of the concavity.">
  <style>
    .dg21a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg21a-head  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg21a-nose  { fill: var(--dg-ink); opacity: .5; }
    .dg21a-sph   { fill: var(--dg-cool); stroke: var(--dg-ink); stroke-width: 1.2; opacity: .55; }
    .dg21a-occ   { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1.2; opacity: .5; }
    .dg21a-sbs   { fill: var(--dg-good); stroke: var(--dg-ink); stroke-width: 1; }
    .dg21a-pad   { fill: var(--dg-accent); opacity: .88; }
    .dg21a-bar   { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .5; }
    .dg21a-hdr   { font-size: 10.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .03em; }
    .dg21a-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg21a-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg21a-txt   { font-size: 9.5px; fill: var(--dg-ink); }
    .dg21a-key   { font-size: 9px; fill: var(--dg-muted); }

    .dg21a-p1head { transform-box: view-box; transform-origin: 116px 136px; animation: dg21aHead 7s ease-in-out infinite; }
    .dg21a-p1sph  { transform-box: view-box; transform-origin: 116px 162px; animation: dg21aSph 7s ease-in-out infinite; }
    .dg21a-p1occ  { transform-box: view-box; transform-origin: 116px 102px; animation: dg21aOcc 7s ease-in-out infinite; }
    .dg21a-p1hL   { animation: dg21aHandL 7s ease-in-out infinite; }
    .dg21a-p1hR   { animation: dg21aHandR 7s ease-in-out infinite; }
    .dg21a-p1idx  { animation: dg21aIdx 7s ease-in-out infinite; }
    .dg21a-p1pky  { animation: dg21aPky 7s ease-in-out infinite; }

    @keyframes dg21aHead  { 0%, 100% { transform: scale(.94, 1.05) } 50% { transform: scale(1.08, .95) } }
    @keyframes dg21aSph   { 0%, 100% { transform: translateY(-4px) scaleX(.94) } 50% { transform: translateY(6px) scaleX(1.08) } }
    @keyframes dg21aOcc   { 0%, 100% { transform: translateY(-3px) scaleX(.95) } 50% { transform: translateY(4px) scaleX(1.07) } }
    @keyframes dg21aHandL { 0%, 100% { transform: translate(6px, -8px) }  50% { transform: translate(-8px, 10px) } }
    @keyframes dg21aHandR { 0%, 100% { transform: translate(-6px, -8px) } 50% { transform: translate(8px, 10px) } }
    @keyframes dg21aIdx   { 0%, 100% { transform: translateY(-5px) } 50% { transform: translateY(6px) } }
    @keyframes dg21aPky   { 0%, 100% { transform: translateY(5px) }  50% { transform: translateY(-6px) } }

    .dg21a-p2wR { transform-box: view-box; transform-origin: 304px 172px; animation: dg21aUp 6s ease-in-out infinite; }
    .dg21a-p2wL { transform-box: view-box; transform-origin: 356px 172px; animation: dg21aDn 6s ease-in-out infinite; }
    .dg21a-p2iR { transform-box: view-box; transform-origin: 267px 173px; animation: dg21aUp 6s ease-in-out infinite; }
    .dg21a-p2pR { transform-box: view-box; transform-origin: 267px 97px;  animation: dg21aDn 6s ease-in-out infinite; }
    .dg21a-p2iL { transform-box: view-box; transform-origin: 393px 173px; animation: dg21aDn 6s ease-in-out infinite; }
    .dg21a-p2pL { transform-box: view-box; transform-origin: 393px 97px;  animation: dg21aUp 6s ease-in-out infinite; }
    .dg21a-p2occ{ transform-box: view-box; transform-origin: 330px 102px; animation: dg21aTilt 6s ease-in-out infinite; }

    @keyframes dg21aUp   { 0%, 100% { transform: none } 50% { transform: translateY(-6px) scale(1.3) } }
    @keyframes dg21aDn   { 0%, 100% { transform: none } 50% { transform: translateY(7px) scale(.84) } }
    @keyframes dg21aTilt { 0%, 100% { transform: none } 50% { transform: rotate(4deg) } }

    .dg21a-p3head { transform-box: view-box; transform-origin: 592px 136px; animation: dg21aBulge 6.5s ease-in-out infinite; }
    .dg21a-p3sph  { transform-box: view-box; transform-origin: 544px 178px; animation: dg21aSphSB 6.5s ease-in-out infinite; }
    .dg21a-p3occ  { transform-box: view-box; transform-origin: 544px 86px;  animation: dg21aOccSB 6.5s ease-in-out infinite; }
    .dg21a-p3sbs  { animation: dg21aSbsSB 6.5s ease-in-out infinite; }
    .dg21a-p3hR   { animation: dg21aCaud 6.5s ease-in-out infinite; }
    .dg21a-p3hL   { animation: dg21aCeph 6.5s ease-in-out infinite; }
    .dg21a-p3spI  { animation: dg21aSpI 6.5s ease-in-out infinite; }
    .dg21a-p3spP  { animation: dg21aSpP 6.5s ease-in-out infinite; }
    .dg21a-p3nrI  { animation: dg21aNrI 6.5s ease-in-out infinite; }
    .dg21a-p3nrP  { animation: dg21aNrP 6.5s ease-in-out infinite; }

    @keyframes dg21aBulge { 0%, 100% { transform: none } 50% { transform: scaleX(1.08) } }
    @keyframes dg21aSphSB { 0%, 100% { transform: none } 50% { transform: rotate(-5deg) } }
    @keyframes dg21aOccSB { 0%, 100% { transform: none } 50% { transform: rotate(5deg) } }
    @keyframes dg21aSbsSB { 0%, 100% { transform: none } 50% { transform: translateX(-8px) } }
    @keyframes dg21aCaud  { 0%, 100% { transform: none } 50% { transform: translateY(11px) } }
    @keyframes dg21aCeph  { 0%, 100% { transform: none } 50% { transform: translateY(-10px) } }
    @keyframes dg21aSpI   { 0%, 100% { transform: none } 50% { transform: translateY(7px) } }
    @keyframes dg21aSpP   { 0%, 100% { transform: none } 50% { transform: translateY(-7px) } }
    @keyframes dg21aNrI   { 0%, 100% { transform: none } 50% { transform: translateY(-6px) } }
    @keyframes dg21aNrP   { 0%, 100% { transform: none } 50% { transform: translateY(6px) } }
  </style>

  <text x="14" y="12" class="dg21a-key">VAULT HOLD FROM ABOVE &#8212; vertex &#8593;, feet &#8595;; screen LEFT = patient's RIGHT (your right hand)</text>
  <text x="14" y="25" class="dg21a-key">Lower pad = INDEX on the greater wing &#183; upper pad = PINKY on the occiput &#183; a pad that GROWS is rising toward you</text>

  <rect x="14" y="34" width="204" height="192" rx="10" class="dg21a-panel"/>
  <rect x="228" y="34" width="204" height="192" rx="10" class="dg21a-panel"/>
  <rect x="442" y="34" width="204" height="192" rx="10" class="dg21a-panel"/>

  <text x="24" y="50" class="dg21a-hdr">FLEXION &#8646; EXTENSION</text>
  <text x="24" y="62" class="dg21a-sub">two phases of one cycle</text>
  <g class="dg21a-p1head">
    <ellipse cx="116" cy="136" rx="48" ry="62" class="dg21a-head"/>
    <polygon points="109,198 123,198 116,208" class="dg21a-nose"/>
  </g>
  <g class="dg21a-p1occ"><ellipse cx="116" cy="102" rx="32" ry="16" class="dg21a-occ"/></g>
  <circle cx="116" cy="128" r="4" class="dg21a-sbs"/>
  <text x="126" y="132" class="dg21a-tiny">SBS</text>
  <g class="dg21a-p1sph">
    <rect x="106" y="144" width="20" height="16" rx="4" class="dg21a-sph"/>
    <ellipse cx="90" cy="172" rx="13" ry="8" class="dg21a-sph"/>
    <ellipse cx="142" cy="172" rx="13" ry="8" class="dg21a-sph"/>
  </g>
  <g class="dg21a-p1hR">
    <line x1="53" y1="102" x2="53" y2="168" class="dg21a-bar"/>
    <g class="dg21a-p1pky"><rect x="44" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
    <g class="dg21a-p1idx"><rect x="44" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  </g>
  <g class="dg21a-p1hL">
    <line x1="179" y1="102" x2="179" y2="168" class="dg21a-bar"/>
    <g class="dg21a-p1pky"><rect x="170" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
    <g class="dg21a-p1idx"><rect x="170" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  </g>
  <text x="53" y="86" class="dg21a-tiny" text-anchor="middle">R pinky</text>
  <text x="179" y="86" class="dg21a-tiny" text-anchor="middle">L pinky</text>
  <text x="53" y="192" class="dg21a-tiny" text-anchor="middle">R index</text>
  <text x="179" y="192" class="dg21a-tiny" text-anchor="middle">L index</text>

  <text x="238" y="50" class="dg21a-hdr">RIGHT TORSION</text>
  <text x="238" y="62" class="dg21a-sub">hands rotate opposite ways</text>
  <ellipse cx="330" cy="136" rx="48" ry="62" class="dg21a-head"/>
  <polygon points="323,198 337,198 330,208" class="dg21a-nose"/>
  <g class="dg21a-p2occ"><ellipse cx="330" cy="102" rx="32" ry="16" class="dg21a-occ"/></g>
  <circle cx="330" cy="128" r="4" class="dg21a-sbs"/>
  <rect x="320" y="144" width="20" height="16" rx="4" class="dg21a-sph"/>
  <g class="dg21a-p2wR"><ellipse cx="304" cy="172" rx="13" ry="8" class="dg21a-sph"/></g>
  <g class="dg21a-p2wL"><ellipse cx="356" cy="172" rx="13" ry="8" class="dg21a-sph"/></g>
  <line x1="267" y1="102" x2="267" y2="168" class="dg21a-bar"/>
  <line x1="393" y1="102" x2="393" y2="168" class="dg21a-bar"/>
  <g class="dg21a-p2pR"><rect x="258" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  <g class="dg21a-p2iR"><rect x="258" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  <g class="dg21a-p2pL"><rect x="384" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  <g class="dg21a-p2iL"><rect x="384" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  <text x="267" y="86" class="dg21a-tiny" text-anchor="middle">R hand</text>
  <text x="393" y="86" class="dg21a-tiny" text-anchor="middle">L hand</text>
  <text x="267" y="192" class="dg21a-tiny" text-anchor="middle">index rises</text>
  <text x="393" y="192" class="dg21a-tiny" text-anchor="middle">index sinks</text>

  <text x="452" y="50" class="dg21a-hdr">RIGHT SBR</text>
  <text x="452" y="62" class="dg21a-sub">sidebending-rotation</text>
  <g class="dg21a-p3head">
    <ellipse cx="544" cy="136" rx="48" ry="62" class="dg21a-head"/>
    <polygon points="537,198 551,198 544,208" class="dg21a-nose"/>
  </g>
  <g class="dg21a-p3occ"><ellipse cx="544" cy="102" rx="32" ry="16" class="dg21a-occ"/></g>
  <g class="dg21a-p3sbs"><circle cx="544" cy="128" r="4" class="dg21a-sbs"/></g>
  <g class="dg21a-p3sph">
    <rect x="534" y="144" width="20" height="16" rx="4" class="dg21a-sph"/>
    <ellipse cx="518" cy="172" rx="13" ry="8" class="dg21a-sph"/>
    <ellipse cx="570" cy="172" rx="13" ry="8" class="dg21a-sph"/>
  </g>
  <g class="dg21a-p3hR">
    <line x1="481" y1="102" x2="481" y2="168" class="dg21a-bar"/>
    <g class="dg21a-p3spP"><rect x="472" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
    <g class="dg21a-p3spI"><rect x="472" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  </g>
  <g class="dg21a-p3hL">
    <line x1="607" y1="102" x2="607" y2="168" class="dg21a-bar"/>
    <g class="dg21a-p3nrP"><rect x="598" y="92" width="18" height="10" rx="5" class="dg21a-pad"/></g>
    <g class="dg21a-p3nrI"><rect x="598" y="168" width="18" height="10" rx="5" class="dg21a-pad"/></g>
  </g>
  <text x="481" y="86" class="dg21a-tiny" text-anchor="middle">R hand</text>
  <text x="607" y="86" class="dg21a-tiny" text-anchor="middle">L hand</text>
  <text x="481" y="192" class="dg21a-tiny" text-anchor="middle">convexity</text>
  <text x="607" y="192" class="dg21a-tiny" text-anchor="middle">concavity</text>

  <text x="16" y="244" class="dg21a-txt">FLEXION: hands and fingers SPREAD,</text>
  <text x="16" y="258" class="dg21a-txt">palms move laterally, travel CAUDAD.</text>
  <text x="16" y="272" class="dg21a-txt">EXTENSION: hands and fingers narrow,</text>
  <text x="16" y="286" class="dg21a-txt">palms move medially, travel CEPHALAD.</text>
  <text x="16" y="300" class="dg21a-tiny">One cycle, two phases &#8212; not two postures.</text>

  <text x="230" y="244" class="dg21a-txt">Hands rotate in OPPOSITE directions.</text>
  <text x="230" y="258" class="dg21a-txt">R index comes UP toward the operator;</text>
  <text x="230" y="272" class="dg21a-txt">R pinky moves toward the FEET.</text>
  <text x="230" y="286" class="dg21a-txt">L hand does the opposite (L index &#8595;).</text>
  <text x="230" y="300" class="dg21a-tiny">Named for the wing that goes cephalad.</text>

  <text x="444" y="244" class="dg21a-txt">R hand: CAUDAD, fingers SPREAD apart</text>
  <text x="444" y="258" class="dg21a-txt">&#8212; the side of the CONVEXITY.</text>
  <text x="444" y="272" class="dg21a-txt">L hand: CEPHALAD, fingers NARROW</text>
  <text x="444" y="286" class="dg21a-txt">&#8212; the side of the CONCAVITY.</text>
  <text x="444" y="300" class="dg21a-tiny">Left SBR is the exact mirror image.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Why a RIGHT lateral strain drives the index fingers LEFT - plus the shears.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv21-lateral-strain-naming"] = {
  title: "Lateral strains and shears: named for the basisphenoid",
  caption:
    "Non-physiologic strains move the sphenoid and the occiput the SAME direction about PARALLEL axes &#8212; something the SBS is not built to do. " +
    "Left panel, top view (vertex up, feet down, screen left = the patient's right): both bones turn the same way about parallel vertical axes. " +
    "Traverse the lever and the naming trap dissolves &#8212; the basisphenoid, behind the sphenoid's pivot, slides to the patient's RIGHT (so the pattern is a " +
    "RIGHT lateral strain, which the lecture's chart names for the side of the pinkies), while the greater wings in front of the same pivot swing the other way, " +
    "carrying your INDEX fingers to the patient's LEFT; the occiput turning the same way carries your PINKIES to the RIGHT, and the SBS itself shears into a parallelogram. " +
    "Left lateral strain is the mirror image: index fingers right, pinkies left. " +
    "Right panel: the same trick about a horizontal axis. Superior shear &#8212; index fingers toward the feet, pinkies toward the head, hands rotating anteriorly; " +
    "inferior shear &#8212; index fingers toward the head, pinkies toward the feet, hands rotating posteriorly (Slides 5, 7).",
  svg: `
<svg viewBox="0 0 660 308" role="img" aria-label="Left panel: a top view of the head in a vault hold. The sphenoid and the occiput are each drawn as a lever on a vertical pivot, and both turn the same way. The basisphenoid behind the sphenoid pivot slides toward the patient's right, naming the pattern a right lateral strain, while the greater wings in front of the pivot swing toward the patient's left and carry the operator's index finger pads with them; the pinky pads follow the occipital squama toward the patient's right and the sphenobasilar junction shears into a parallelogram. Right panel: two rows showing vertical shears, with the basisphenoid riding up in a superior shear while the index pads travel toward the feet and the pinky pads toward the head, and the reverse in an inferior shear.">
  <style>
    .dg21b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg21b-head  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg21b-nose  { fill: var(--dg-ink); opacity: .5; }
    .dg21b-sph   { fill: var(--dg-cool); stroke: var(--dg-ink); stroke-width: 1.2; opacity: .6; }
    .dg21b-occ   { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1.2; opacity: .55; }
    .dg21b-mark  { fill: var(--dg-good); stroke: var(--dg-ink); stroke-width: 1; }
    .dg21b-pad   { fill: var(--dg-accent); opacity: .88; }
    .dg21b-pivot { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg21b-arrow { fill: none; stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg21b-head2 { fill: var(--dg-ink); }
    .dg21b-ref   { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg21b-box   { fill: none; stroke: var(--dg-good); stroke-width: 1.4; stroke-dasharray: 3 3; }
    .dg21b-hdr   { font-size: 10.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .03em; }
    .dg21b-row   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg21b-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg21b-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg21b-in    { font-size: 8px; fill: var(--dg-ink); }
    .dg21b-txt   { font-size: 9.5px; fill: var(--dg-ink); }
    .dg21b-key   { font-size: 9px; fill: var(--dg-muted); }

    .dg21b-sphRot { transform-box: view-box; transform-origin: 193px 164px; animation: dg21bSph 5.5s ease-in-out infinite; }
    .dg21b-occRot { transform-box: view-box; transform-origin: 193px 104px; animation: dg21bOcc 5.5s ease-in-out infinite; }
    .dg21b-shear  { transform-box: view-box; transform-origin: 193px 129px; animation: dg21bSkew 5.5s ease-in-out infinite; }
    .dg21b-idx    { animation: dg21bIdx 5.5s ease-in-out infinite; }
    .dg21b-pky    { animation: dg21bPky 5.5s ease-in-out infinite; }

    @keyframes dg21bSph  { 0%, 100% { transform: none } 55% { transform: rotate(-13deg) } }
    @keyframes dg21bOcc  { 0%, 100% { transform: none } 55% { transform: rotate(-15deg) } }
    @keyframes dg21bSkew { 0%, 100% { transform: none } 55% { transform: skewX(-10deg) } }
    @keyframes dg21bIdx  { 0%, 100% { transform: none } 55% { transform: translateX(9px) } }
    @keyframes dg21bPky  { 0%, 100% { transform: none } 55% { transform: translateX(-9px) } }

    .dg21b-up { animation: dg21bUp7 5s ease-in-out infinite; }
    .dg21b-dn { animation: dg21bDn7 5s ease-in-out infinite; }

    @keyframes dg21bUp7 { 0%, 100% { transform: none } 55% { transform: translateY(-7px) } }
    @keyframes dg21bDn7 { 0%, 100% { transform: none } 55% { transform: translateY(7px) } }
  </style>

  <text x="14" y="12" class="dg21b-key">NON-PHYSIOLOGIC PATTERNS &#8212; sphenoid and occiput move the SAME direction about PARALLEL axes</text>
  <text x="14" y="25" class="dg21b-key">Top view at left: vertex &#8593;, feet &#8595;, screen LEFT = patient's RIGHT &#183; named for the BASISPHENOID, never for your index fingers</text>

  <rect x="14" y="34" width="358" height="190" rx="10" class="dg21b-panel"/>
  <rect x="384" y="34" width="262" height="190" rx="10" class="dg21b-panel"/>

  <text x="24" y="50" class="dg21b-hdr">RIGHT LATERAL STRAIN</text>
  <text x="24" y="62" class="dg21b-sub">two parallel VERTICAL axes, turned the same way</text>
  <text x="20" y="76" class="dg21b-tiny">patient's RIGHT</text>
  <text x="366" y="76" class="dg21b-tiny" text-anchor="end">patient's LEFT</text>

  <ellipse cx="193" cy="140" rx="54" ry="66" class="dg21b-head"/>
  <polygon points="186,206 200,206 193,216" class="dg21b-nose"/>

  <g class="dg21b-occRot">
    <rect x="169" y="80" width="48" height="12" rx="6" class="dg21b-occ"/>
    <rect x="187" y="92" width="12" height="32" rx="4" class="dg21b-occ"/>
    <rect x="183" y="116" width="20" height="10" rx="3" class="dg21b-mark"/>
  </g>
  <g class="dg21b-sphRot">
    <rect x="187" y="132" width="12" height="58" rx="4" class="dg21b-sph"/>
    <rect x="183" y="132" width="20" height="10" rx="3" class="dg21b-mark"/>
    <ellipse cx="171" cy="186" rx="13" ry="8" class="dg21b-sph"/>
    <ellipse cx="215" cy="186" rx="13" ry="8" class="dg21b-sph"/>
  </g>
  <g class="dg21b-shear"><rect x="175" y="114" width="36" height="30" rx="3" class="dg21b-box"/></g>

  <circle cx="193" cy="104" r="3.5" class="dg21b-pivot"/>
  <circle cx="193" cy="164" r="3.5" class="dg21b-pivot"/>
  <path d="M 204 104 A 11 11 0 0 0 193 93" class="dg21b-arrow"/>
  <polygon points="196,89 187,93 196,97" class="dg21b-head2"/>
  <path d="M 204 164 A 11 11 0 0 0 193 153" class="dg21b-arrow"/>
  <polygon points="196,149 187,153 196,157" class="dg21b-head2"/>

  <g class="dg21b-pky">
    <rect x="117" y="82" width="18" height="10" rx="5" class="dg21b-pad"/>
    <rect x="251" y="82" width="18" height="10" rx="5" class="dg21b-pad"/>
  </g>
  <g class="dg21b-idx">
    <rect x="117" y="186" width="18" height="10" rx="5" class="dg21b-pad"/>
    <rect x="251" y="186" width="18" height="10" rx="5" class="dg21b-pad"/>
  </g>
  <text x="126" y="106" class="dg21b-tiny" text-anchor="middle">pinky</text>
  <text x="260" y="106" class="dg21b-tiny" text-anchor="middle">pinky</text>
  <text x="126" y="180" class="dg21b-tiny" text-anchor="middle">index</text>
  <text x="260" y="180" class="dg21b-tiny" text-anchor="middle">index</text>
  <text x="26" y="140" class="dg21b-tiny">occipital</text>
  <text x="26" y="151" class="dg21b-tiny">squama</text>
  <text x="26" y="200" class="dg21b-tiny">greater</text>
  <text x="26" y="211" class="dg21b-tiny">wings</text>
  <text x="290" y="130" class="dg21b-tiny">basisphenoid</text>
  <text x="290" y="141" class="dg21b-tiny">shears on the</text>
  <text x="290" y="152" class="dg21b-tiny">basiocciput</text>

  <text x="394" y="50" class="dg21b-hdr">VERTICAL SHEARS</text>
  <text x="394" y="62" class="dg21b-sub">same trick, HORIZONTAL axis</text>

  <text x="394" y="80" class="dg21b-row">SUPERIOR SHEAR</text>
  <line x1="390" y1="102" x2="466" y2="102" class="dg21b-ref"/>
  <g class="dg21b-up">
    <rect x="394" y="94" width="32" height="16" rx="3" class="dg21b-sph"/>
    <text x="410" y="106" class="dg21b-in" text-anchor="middle">sph</text>
  </g>
  <rect x="430" y="94" width="32" height="16" rx="3" class="dg21b-occ"/>
  <text x="446" y="106" class="dg21b-in" text-anchor="middle">occ</text>
  <text x="392" y="124" class="dg21b-tiny">basisphenoid rides &#8593;</text>
  <g class="dg21b-up">
    <rect x="516" y="86" width="16" height="9" rx="4.5" class="dg21b-pad"/>
    <rect x="548" y="86" width="16" height="9" rx="4.5" class="dg21b-pad"/>
  </g>
  <g class="dg21b-dn">
    <rect x="516" y="110" width="16" height="9" rx="4.5" class="dg21b-pad"/>
    <rect x="548" y="110" width="16" height="9" rx="4.5" class="dg21b-pad"/>
  </g>
  <text x="572" y="94" class="dg21b-tiny">pinkies</text>
  <text x="572" y="118" class="dg21b-tiny">index</text>

  <text x="394" y="146" class="dg21b-row">INFERIOR SHEAR</text>
  <line x1="390" y1="166" x2="466" y2="166" class="dg21b-ref"/>
  <g class="dg21b-dn">
    <rect x="394" y="158" width="32" height="16" rx="3" class="dg21b-sph"/>
    <text x="410" y="170" class="dg21b-in" text-anchor="middle">sph</text>
  </g>
  <rect x="430" y="158" width="32" height="16" rx="3" class="dg21b-occ"/>
  <text x="446" y="170" class="dg21b-in" text-anchor="middle">occ</text>
  <text x="392" y="188" class="dg21b-tiny">basisphenoid rides &#8595;</text>
  <g class="dg21b-dn">
    <rect x="516" y="150" width="16" height="9" rx="4.5" class="dg21b-pad"/>
    <rect x="548" y="150" width="16" height="9" rx="4.5" class="dg21b-pad"/>
  </g>
  <g class="dg21b-up">
    <rect x="516" y="174" width="16" height="9" rx="4.5" class="dg21b-pad"/>
    <rect x="548" y="174" width="16" height="9" rx="4.5" class="dg21b-pad"/>
  </g>
  <text x="572" y="158" class="dg21b-tiny">pinkies</text>
  <text x="572" y="182" class="dg21b-tiny">index</text>

  <text x="16" y="244" class="dg21b-txt">Both bones turn the SAME way about parallel VERTICAL axes.</text>
  <text x="16" y="258" class="dg21b-txt">The basisphenoid slides to the patient's RIGHT, so the pattern is</text>
  <text x="16" y="272" class="dg21b-txt">named RIGHT (the chart names it for the side of the pinkies).</text>
  <text x="16" y="286" class="dg21b-txt">Across the pivot the greater wings swing the other way, so your</text>
  <text x="16" y="300" class="dg21b-txt">INDEX fingers drift to the patient's LEFT, pinkies to the RIGHT.</text>

  <text x="386" y="244" class="dg21b-key">SUPERIOR shear: index fingers toward the FEET,</text>
  <text x="386" y="258" class="dg21b-key">pinkies toward the HEAD; hands rotate anteriorly.</text>
  <text x="386" y="272" class="dg21b-key">INFERIOR shear: index fingers toward the HEAD,</text>
  <text x="386" y="286" class="dg21b-key">pinkies toward the FEET; hands rotate posteriorly.</text>
  <text x="386" y="300" class="dg21b-key">Both are named for the basisphenoid, not your fingers.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// The maxillary sinus pump, and what happens when the zygoma is locked.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv21-maxillary-sinus-pump"] = {
  title: "The maxillary sinus pump &#8212; and the stalled pump",
  caption:
    "Coronal view of one maxillary sinus, with the nasal cavity at the midline on the left of each panel and the zygoma lateral on the right. " +
    "The ostium sits HIGH on the medial sidewall, so this sinus has to drain uphill. " +
    "Left: the pump the lecture describes &#8212; the movement between the maxilla and the zygoma during primary respiration squeezes the sinus, and each cycle " +
    "walks secretions up the medial wall and out through the ostium into the nose. The maxilla also hangs from the frontal bone, so the frontal has to be " +
    "moving for the maxilla to move. " +
    "Right: lock the zygoma (or the frontal, or the maxilla &#8212; a restriction anywhere in that mechanism does it) and the cycle stops; the droplets fall back " +
    "and the fluid level climbs but never reaches the ostium. That is the lecture's explanation for the maxillary sinus being the most common site of sinusitis, " +
    "and the rationale for the zygomatic lift (Slides 29-33).",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="Two coronal panels of a maxillary sinus with the nasal cavity at the midline on the left and the zygoma lateral on the right. In the working panel the zygoma rocks against the maxilla, the sinus is squeezed, and droplets of secretion climb the medial wall and pass out through the ostium high on that wall into the nose. In the restricted panel the zygoma is crossed out and does not move, the droplets rise a little and fall back, and the fluid level in the sinus climbs but stays below the high ostium.">
  <style>
    .dg21c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg21c-bone  { fill: var(--dg-accent); fill-opacity: .18; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg21c-zygo  { fill: var(--dg-accent); fill-opacity: .42; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg21c-air   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.4; }
    .dg21c-gap   { fill: var(--dg-surface); stroke: none; }
    .dg21c-lip   { stroke: var(--dg-ink); stroke-width: 1.4; fill: none; }
    .dg21c-fluid { fill: var(--dg-cool); fill-opacity: .45; }
    .dg21c-drop  { fill: var(--dg-cool); }
    .dg21c-lock  { stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg21c-grav  { stroke: var(--dg-muted); stroke-width: 1.3; }
    .dg21c-gravh { fill: var(--dg-muted); }
    .dg21c-pumph { fill: var(--dg-ink); }
    .dg21c-hdr   { font-size: 10.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .03em; }
    .dg21c-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg21c-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg21c-in    { font-size: 8.5px; fill: var(--dg-ink); }
    .dg21c-warnt { font-size: 9px; font-weight: 700; fill: var(--dg-warm); }
    .dg21c-txt   { font-size: 9.5px; fill: var(--dg-ink); }
    .dg21c-key   { font-size: 9px; fill: var(--dg-muted); }

    .dg21c-zyg { animation: dg21cZyg 4.2s ease-in-out infinite; }
    .dg21c-max { transform-box: view-box; transform-origin: 56px 150px; animation: dg21cSqueeze 4.2s ease-in-out infinite; }
    .dg21c-d1  { animation: dg21cClimb 4.2s linear infinite; }
    .dg21c-d2  { animation: dg21cClimb 4.2s linear infinite 1.4s; }
    .dg21c-d3  { animation: dg21cClimb 4.2s linear infinite 2.8s; }

    @keyframes dg21cZyg     { 0%, 100% { transform: none } 50% { transform: translateX(-6px) } }
    @keyframes dg21cSqueeze { 0%, 100% { transform: none } 50% { transform: scaleX(.955) } }
    @keyframes dg21cClimb {
      0%   { transform: translate(0, 0);        opacity: .25 }
      12%  { opacity: 1 }
      45%  { transform: translate(0, -72px);    opacity: 1 }
      60%  { transform: translate(-38px, -73px); opacity: 1 }
      88%  { transform: translate(-38px, 10px);  opacity: 1 }
      100% { transform: translate(-38px, 18px);  opacity: 0 }
    }

    .dg21c-pool { transform-box: view-box; transform-origin: 464px 198px; animation: dg21cPool 5.4s ease-in-out infinite; }
    .dg21c-f1   { animation: dg21cStall 3.4s ease-in-out infinite; }
    .dg21c-f2   { animation: dg21cStall 3.4s ease-in-out infinite 1.2s; }

    @keyframes dg21cPool  { 0% { transform: none } 70%, 100% { transform: scaleY(2.6) } }
    @keyframes dg21cStall {
      0%   { transform: translate(0, 0);   opacity: .35 }
      30%  { transform: translate(0, -30px); opacity: 1 }
      70%  { transform: translate(0, -4px);  opacity: .8 }
      100% { transform: translate(0, 0);   opacity: .35 }
    }
  </style>

  <text x="14" y="12" class="dg21c-key">CORONAL VIEW of one maxillary sinus &#8212; nasal cavity at the midline (left of frame), zygoma lateral (right of frame)</text>
  <text x="14" y="25" class="dg21c-key">The ostium sits HIGH on the MEDIAL sidewall, so this sinus drains UPHILL &#183; droplets = secretions</text>

  <rect x="14" y="34" width="308" height="198" rx="10" class="dg21c-panel"/>
  <rect x="336" y="34" width="310" height="198" rx="10" class="dg21c-panel"/>

  <text x="24" y="50" class="dg21c-hdr">PUMP WORKING</text>
  <text x="24" y="62" class="dg21c-sub">maxilla and zygoma moving together</text>

  <rect x="100" y="70" width="168" height="14" rx="4" class="dg21c-bone"/>
  <text x="106" y="81" class="dg21c-in">frontal &#8212; the maxilla hangs from it</text>
  <line x1="120" y1="84" x2="120" y2="88" class="dg21c-lip"/>
  <line x1="220" y1="84" x2="220" y2="88" class="dg21c-lip"/>

  <rect x="30" y="88" width="26" height="120" rx="4" class="dg21c-air"/>
  <g class="dg21c-max">
    <rect x="56" y="88" width="172" height="124" rx="8" class="dg21c-bone"/>
    <rect x="68" y="100" width="148" height="102" rx="8" class="dg21c-air"/>
  </g>
  <rect x="52" y="106" width="20" height="14" class="dg21c-gap"/>
  <path d="M52 106 H72 M52 120 H72" class="dg21c-lip"/>
  <text x="80" y="116" class="dg21c-tiny">&#8592; ostium (high, medial)</text>
  <text x="150" y="150" class="dg21c-tiny" text-anchor="middle">maxillary sinus</text>
  <text x="30" y="220" class="dg21c-tiny">nasal cavity</text>

  <rect x="72" y="178" width="140" height="20" rx="3" class="dg21c-fluid"/>
  <g class="dg21c-d1"><circle cx="80" cy="186" r="5" class="dg21c-drop"/></g>
  <g class="dg21c-d2"><circle cx="80" cy="186" r="4" class="dg21c-drop"/></g>
  <g class="dg21c-d3"><circle cx="80" cy="186" r="4.5" class="dg21c-drop"/></g>

  <g class="dg21c-zyg"><rect x="232" y="108" width="36" height="64" rx="8" class="dg21c-zygo"/></g>
  <text x="250" y="184" class="dg21c-tiny" text-anchor="middle">zygoma</text>
  <line x1="234" y1="96" x2="270" y2="96" class="dg21c-grav"/>
  <polygon points="230,96 238,92 238,100" class="dg21c-pumph"/>
  <polygon points="274,96 266,92 266,100" class="dg21c-pumph"/>
  <line x1="300" y1="110" x2="300" y2="164" class="dg21c-grav"/>
  <polygon points="300,174 295,162 305,162" class="dg21c-gravh"/>
  <text x="300" y="188" class="dg21c-tiny" text-anchor="middle">gravity</text>

  <text x="346" y="50" class="dg21c-hdr">ZYGOMA RESTRICTED</text>
  <text x="346" y="62" class="dg21c-sub">the pump stops</text>

  <rect x="422" y="70" width="168" height="14" rx="4" class="dg21c-bone"/>
  <text x="428" y="81" class="dg21c-in">frontal</text>
  <line x1="442" y1="84" x2="442" y2="88" class="dg21c-lip"/>
  <line x1="542" y1="84" x2="542" y2="88" class="dg21c-lip"/>

  <rect x="352" y="88" width="26" height="120" rx="4" class="dg21c-air"/>
  <rect x="378" y="88" width="172" height="124" rx="8" class="dg21c-bone"/>
  <rect x="390" y="100" width="148" height="102" rx="8" class="dg21c-air"/>
  <rect x="374" y="106" width="20" height="14" class="dg21c-gap"/>
  <path d="M374 106 H394 M374 120 H394" class="dg21c-lip"/>
  <text x="402" y="116" class="dg21c-tiny">&#8592; ostium never reached</text>
  <text x="352" y="220" class="dg21c-tiny">nasal cavity</text>

  <g class="dg21c-pool"><rect x="394" y="178" width="140" height="20" rx="3" class="dg21c-fluid"/></g>
  <text x="464" y="140" class="dg21c-warnt" text-anchor="middle">secretions pool</text>
  <g class="dg21c-f1"><circle cx="402" cy="186" r="5" class="dg21c-drop"/></g>
  <g class="dg21c-f2"><circle cx="418" cy="186" r="4" class="dg21c-drop"/></g>

  <rect x="554" y="108" width="36" height="64" rx="8" class="dg21c-zygo"/>
  <path d="M556 110 L588 170 M588 110 L556 170" class="dg21c-lock"/>
  <text x="572" y="184" class="dg21c-warnt" text-anchor="middle">locked</text>
  <line x1="622" y1="110" x2="622" y2="164" class="dg21c-grav"/>
  <polygon points="622,174 617,162 627,162" class="dg21c-gravh"/>
  <text x="622" y="188" class="dg21c-tiny" text-anchor="middle">gravity</text>

  <text x="16" y="250" class="dg21c-txt">Maxilla&#8211;zygoma motion in primary respiration squeezes</text>
  <text x="16" y="264" class="dg21c-txt">the sinus, walking secretions UP the medial wall and out</text>
  <text x="16" y="278" class="dg21c-txt">through the ostium. The maxilla hangs from the FRONTAL,</text>
  <text x="16" y="292" class="dg21c-txt">so the frontal has to move too (Slides 30-32).</text>

  <text x="338" y="250" class="dg21c-txt">Lock the zygoma (or the frontal, or the maxilla) and the</text>
  <text x="338" y="264" class="dg21c-txt">pump stops: secretions pool below the HIGH medial ostium</text>
  <text x="338" y="278" class="dg21c-txt">&#8212; why the maxillary sinus is the most common site of</text>
  <text x="338" y="292" class="dg21c-txt">sinusitis (Slide 29). Treat with the zygomatic lift (Slide 33).</text>
</svg>`,
};

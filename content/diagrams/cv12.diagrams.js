/*
 * cv12 - Sphenobasilar synchondrosis (SBS) strain patterns.
 * Diagrams for Lecture #12 (Sheldon C. Yao, DO, FAAO).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Flexion / extension: base motion translated into what the fingers feel.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv12-flexion-extension-vault-translation"] = {
  title: "Flexion and extension: base motion &#8594; vault hold",
  caption:
    "Left: the two parallel transverse axes (one through the body of the sphenoid, one through the occiput at the foramen magnum). " +
    "The gears turn in OPPOSITE directions &#8212; physiologic. In flexion the sphenoid rotates anteriorly and the occiput posteriorly, so the SBS rises; " +
    "extension reverses both and the SBS drops. Right: the same instant in the vault hold, seen from above with the patient supine and the face toward the bottom. " +
    "Because the greater wings and occipital squama drop as the head widens, the fingers SPREAD and travel inferiorly toward the feet in flexion, and approximate and travel " +
    "superiorly toward the vertex in extension &#8212; the palms never twist or approximate (Slides 26-28). " +
    "The loop runs at about 8-9 cycles per minute, inside this lecture's stated 6-12 per minute.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="Two linked panels. On the left, a side view of the cranial base: the sphenoid and the occiput rock in opposite directions about two parallel transverse axes, drawn as meshing gears, so the sphenobasilar synchondrosis between them rises in flexion and drops in extension. On the right, the same cycle seen in a vault hold from above: the head widens and shortens while the operator's fingers spread apart and slide toward the patient's feet in flexion, then approximate and slide toward the vertex in extension.">
  <style>
    .dg12a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg12a-bone  { stroke: var(--dg-ink); stroke-width: 2; stroke-linejoin: round; }
    .dg12a-sph   { fill: var(--dg-cool); opacity: .28; }
    .dg12a-occ   { fill: var(--dg-warm); opacity: .28; }
    .dg12a-gear  { stroke: var(--dg-ink); stroke-width: 1.6; fill: none; }
    .dg12a-hub   { fill: var(--dg-ink); }
    .dg12a-ref   { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg12a-sbs   { fill: var(--dg-good); stroke: var(--dg-ink); stroke-width: 1.4; }
    .dg12a-head  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg12a-nose  { fill: var(--dg-ink); opacity: .55; }
    .dg12a-pad   { fill: var(--dg-accent); opacity: .85; }
    .dg12a-hdr   { font-size: 11px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg12a-lbl   { font-size: 10px; fill: var(--dg-ink); }
    .dg12a-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg12a-cap   { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg12a-txt   { font-size: 10.5px; fill: var(--dg-ink); }
    .dg12a-lead  { stroke: var(--dg-muted); stroke-width: 1; }

    .dg12a-rotS { transform-box: view-box; transform-origin: 150px 152px;
                  animation: dg12aRotS 7s ease-in-out infinite; }
    .dg12a-rotO { transform-box: view-box; transform-origin: 250px 168px;
                  animation: dg12aRotO 7s ease-in-out infinite; }
    .dg12a-rise { transform-box: view-box;
                  animation: dg12aRise 7s ease-in-out infinite; }
    .dg12a-vault{ transform-box: view-box; transform-origin: 472px 122px;
                  animation: dg12aVault 7s ease-in-out infinite; }
    .dg12a-handL{ transform-box: view-box;
                  animation: dg12aHandL 7s ease-in-out infinite; }
    .dg12a-handR{ transform-box: view-box;
                  animation: dg12aHandR 7s ease-in-out infinite; }

    @keyframes dg12aRotS { 0%, 100% { transform: rotate(7deg) }  50% { transform: rotate(-7deg) } }
    @keyframes dg12aRotO { 0%, 100% { transform: rotate(-7deg) } 50% { transform: rotate(7deg) } }
    @keyframes dg12aRise { 0%, 100% { transform: translateY(7px) } 50% { transform: translateY(-9px) } }
    @keyframes dg12aVault{ 0%, 100% { transform: scale(.93, 1.06) } 50% { transform: scale(1.09, .95) } }
    @keyframes dg12aHandL{ 0%, 100% { transform: translate(9px, -11px) } 50% { transform: translate(-11px, 13px) } }
    @keyframes dg12aHandR{ 0%, 100% { transform: translate(-9px, -11px) } 50% { transform: translate(11px, 13px) } }
  </style>

  <text x="16" y="18" class="dg12a-hdr">CRANIAL BASE, SIDE VIEW (face to the left)</text>
  <text x="330" y="18" class="dg12a-hdr">VAULT HOLD, FROM ABOVE (patient supine)</text>

  <rect x="14" y="26" width="292" height="192" rx="10" class="dg12a-panel"/>
  <rect x="318" y="26" width="308" height="192" rx="10" class="dg12a-panel"/>

  <text x="24" y="42" class="dg12a-tiny">anterior</text>
  <text x="296" y="42" class="dg12a-tiny" text-anchor="end">posterior</text>
  <line x1="40" y1="152" x2="284" y2="152" class="dg12a-ref"/>

  <g class="dg12a-rotS">
    <rect x="116" y="138" width="72" height="28" rx="9" class="dg12a-bone dg12a-sph"/>
    <polygon points="122,142 94,102 72,116 104,152" class="dg12a-bone dg12a-sph"/>
    <circle cx="150" cy="152" r="13" class="dg12a-gear"/>
    <path d="M163 152h5 M159.2 161.2l3.5 3.5 M150 165v5 M140.8 161.2l-3.5 3.5 M137 152h-5 M140.8 142.8l-3.5-3.5 M150 139v-5 M159.2 142.8l3.5-3.5" class="dg12a-gear"/>
    <circle cx="150" cy="152" r="2.6" class="dg12a-hub"/>
  </g>

  <g class="dg12a-rotO">
    <rect x="198" y="140" width="66" height="28" rx="9" class="dg12a-bone dg12a-occ"/>
    <polygon points="254,142 282,104 300,120 272,156" class="dg12a-bone dg12a-occ"/>
    <circle cx="250" cy="168" r="13" class="dg12a-gear"/>
    <path d="M263 168h5 M259.2 177.2l3.5 3.5 M250 181v5 M240.8 177.2l-3.5 3.5 M237 168h-5 M240.8 158.8l-3.5-3.5 M250 155v-5 M259.2 158.8l3.5-3.5" class="dg12a-gear"/>
    <circle cx="250" cy="168" r="2.6" class="dg12a-hub"/>
  </g>

  <g class="dg12a-rise">
    <circle cx="193" cy="152" r="6.5" class="dg12a-sbs"/>
  </g>
  <line x1="193" y1="124" x2="193" y2="142" class="dg12a-lead"/>
  <text x="193" y="118" class="dg12a-lbl" text-anchor="middle" font-weight="700">SBS</text>

  <line x1="66" y1="76" x2="88" y2="104" class="dg12a-lead"/>
  <text x="62" y="72" class="dg12a-lbl" text-anchor="end">sphenoid +</text>
  <text x="62" y="84" class="dg12a-lbl" text-anchor="end">greater wing</text>
  <line x1="290" y1="80" x2="296" y2="108" class="dg12a-lead"/>
  <text x="298" y="74" class="dg12a-lbl" text-anchor="end">occiput</text>

  <text x="22" y="198" class="dg12a-tiny">2 parallel TRANSVERSE axes: sphenoid body, foramen magnum</text>
  <text x="22" y="211" class="dg12a-tiny">gear-like &#8212; the two bones turn OPPOSITE ways (physiologic)</text>

  <text x="324" y="46" class="dg12a-tiny">&#8593; vertex</text>
  <text x="324" y="212" class="dg12a-tiny">&#8595; toward the feet</text>

  <g class="dg12a-vault">
    <ellipse cx="472" cy="122" rx="64" ry="78" class="dg12a-head"/>
    <polygon points="464,198 480,198 472,210" class="dg12a-nose"/>
  </g>

  <g class="dg12a-handL">
    <rect x="372" y="59" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="372" y="87" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="372" y="115" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="372" y="147" width="21" height="11" rx="5.5" class="dg12a-pad"/>
  </g>
  <g class="dg12a-handR">
    <rect x="551" y="59" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="551" y="87" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="551" y="115" width="21" height="11" rx="5.5" class="dg12a-pad"/>
    <rect x="551" y="147" width="21" height="11" rx="5.5" class="dg12a-pad"/>
  </g>

  <text x="366" y="68" class="dg12a-tiny" text-anchor="end">pinky</text>
  <text x="366" y="96" class="dg12a-tiny" text-anchor="end">ring</text>
  <text x="366" y="124" class="dg12a-tiny" text-anchor="end">middle</text>
  <text x="366" y="156" class="dg12a-tiny" text-anchor="end">index</text>
  <text x="578" y="68" class="dg12a-tiny">occiput</text>
  <text x="578" y="96" class="dg12a-tiny">temporal,</text>
  <text x="578" y="108" class="dg12a-tiny">around</text>
  <text x="578" y="120" class="dg12a-tiny">the ear</text>
  <text x="578" y="152" class="dg12a-tiny">greater</text>
  <text x="578" y="164" class="dg12a-tiny">wing</text>

  <text x="16" y="242" class="dg12a-cap">FLEXION (inhalation) &#8212; SBS RISES</text>
  <text x="16" y="259" class="dg12a-txt">sphenoid rotates ANTERIORLY, occiput POSTERIORLY</text>
  <text x="16" y="274" class="dg12a-txt">paired vault bones EXTERNALLY rotate</text>
  <text x="16" y="289" class="dg12a-txt">transverse &#8593;; AP and vertical &#8595; &#8212; wide "Ernie" head</text>
  <text x="16" y="305" class="dg12a-txt" font-weight="700">fingers SPREAD, move toward the FEET</text>

  <text x="330" y="242" class="dg12a-cap">EXTENSION (exhalation) &#8212; SBS DROPS</text>
  <text x="330" y="259" class="dg12a-txt">sphenoid rotates POSTERIORLY, occiput ANTERIORLY</text>
  <text x="330" y="274" class="dg12a-txt">paired vault bones INTERNALLY rotate</text>
  <text x="330" y="289" class="dg12a-txt">transverse &#8595;; AP and vertical &#8593; &#8212; tall "Bert" head</text>
  <text x="330" y="305" class="dg12a-txt" font-weight="700">fingers APPROXIMATE, move toward the VERTEX</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Sidebending-rotation: two motions, three axes, separated in time.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv12-sidebending-rotation-three-axes"] = {
  title: "Sidebending-rotation: two motions on three axes",
  caption:
    "Step 1 (from above, face at the top, patient's right on the right): the sphenoid and occiput rotate in OPPOSITE directions about two parallel VERTICAL axes " +
    "(body of the sphenoid, foramen magnum). Both midline ends swing toward one side, so the base gaps open there &#8212; a convexity on the right, a concavity on the left. " +
    "Step 2 (looking forward along the nasion-to-opisthion AP axis, the same axis as torsion): both bones now rotate in the SAME direction toward that convexity, " +
    "carrying the convex side more inferior. In the vault hold the convex side therefore reads DOWN and OUT while the concave side goes up and in, and the pattern is " +
    "named for the CONVEXITY &#8212; not for the side the sphenoid appears to sidebend toward (Slides 31-35). " +
    "The lecture calls this the most confusing physiologic pattern because both motions happen at once; they are unstacked here in time so each component is visible.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="Sidebending-rotation shown in two steps. Step one, seen from above with the face at the top: the sphenoid and occiput rotate in opposite directions about two parallel vertical axes, so both midline ends swing to the patient's right and the base gaps open into a right convexity while the left side becomes concave. Step two, looking forward along the front-to-back axis: both bones now roll in the same direction toward that convexity, dropping the right side, so the operator's fingers on the convex side move down and out while the fingers on the concave side move up and in.">
  <style>
    .dg12b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg12b-bone  { stroke: var(--dg-ink); stroke-width: 1.8; stroke-linejoin: round; }
    .dg12b-sph   { fill: var(--dg-cool); opacity: .3; }
    .dg12b-occ   { fill: var(--dg-warm); opacity: .3; }
    .dg12b-head  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg12b-axis  { fill: none; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg12b-hub   { fill: var(--dg-ink); }
    .dg12b-sbs   { fill: var(--dg-good); stroke: var(--dg-ink); stroke-width: 1.3; }
    .dg12b-ref   { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg12b-pad   { fill: var(--dg-accent); opacity: .85; }
    .dg12b-arw   { stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg12b-arwf  { fill: var(--dg-ink); }
    .dg12b-gd    { stroke: var(--dg-good); stroke-width: 2; }
    .dg12b-gdf   { fill: var(--dg-good); }
    .dg12b-arc   { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linecap: round; }
    .dg12b-arcm  { fill: none; stroke: var(--dg-muted); stroke-width: 2.2; stroke-linecap: round; }
    .dg12b-step  { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg12b-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg12b-tiny  { font-size: 9.5px; fill: var(--dg-ink); }
    .dg12b-side  { font-size: 9.5px; font-weight: 700; fill: var(--dg-ink); }
    .dg12b-cap   { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg12b-txt   { font-size: 10.5px; fill: var(--dg-ink); }
    .dg12b-note  { font-size: 9.5px; fill: var(--dg-muted); }

    .dg12b-bendS { transform-box: view-box; transform-origin: 160px 96px;
                   animation: dg12bBendS 9s ease-in-out infinite; }
    .dg12b-bendO { transform-box: view-box; transform-origin: 160px 150px;
                   animation: dg12bBendO 9s ease-in-out infinite; }
    .dg12b-shift { transform-box: view-box; animation: dg12bShift 9s ease-in-out infinite; }
    .dg12b-roll  { transform-box: view-box; transform-origin: 480px 110px;
                   animation: dg12bRoll 9s ease-in-out infinite; }
    .dg12b-padR  { transform-box: view-box; animation: dg12bPadR 9s ease-in-out infinite; }
    .dg12b-padL  { transform-box: view-box; animation: dg12bPadL 9s ease-in-out infinite; }
    .dg12b-s1    { animation: dg12bStep1 9s ease-in-out infinite; }
    .dg12b-s2    { animation: dg12bStep2 9s ease-in-out infinite; }

    @keyframes dg12bBendS { 0%, 8% { transform: rotate(0deg) } 30%, 88% { transform: rotate(-9deg) } 100% { transform: rotate(0deg) } }
    @keyframes dg12bBendO { 0%, 8% { transform: rotate(0deg) } 30%, 88% { transform: rotate(9deg) }  100% { transform: rotate(0deg) } }
    @keyframes dg12bShift { 0%, 8% { transform: translateX(0) } 30%, 88% { transform: translateX(9px) } 100% { transform: translateX(0) } }
    @keyframes dg12bRoll  { 0%, 35% { transform: rotate(0deg) } 58%, 88% { transform: rotate(10deg) } 100% { transform: rotate(0deg) } }
    @keyframes dg12bPadR  { 0%, 35% { transform: translate(0, 0) } 58%, 88% { transform: translate(13px, 15px) } 100% { transform: translate(0, 0) } }
    @keyframes dg12bPadL  { 0%, 35% { transform: translate(0, 0) } 58%, 88% { transform: translate(11px, -13px) } 100% { transform: translate(0, 0) } }
    @keyframes dg12bStep1 { 0%, 30% { opacity: 1 } 42%, 100% { opacity: .4 } }
    @keyframes dg12bStep2 { 0%, 35% { opacity: .4 } 58%, 90% { opacity: 1 } 100% { opacity: .4 } }
  </style>

  <g class="dg12b-s1">
    <text x="12" y="14" class="dg12b-step">STEP 1 &#8212; SIDEBEND</text>
    <text x="12" y="26" class="dg12b-sub">2 parallel VERTICAL axes, OPPOSITE directions</text>
  </g>
  <g class="dg12b-s2">
    <text x="332" y="14" class="dg12b-step">STEP 2 &#8212; ROTATE</text>
    <text x="332" y="26" class="dg12b-sub">1 AP axis (nasion &#8594; opisthion), SAME direction</text>
  </g>

  <rect x="12" y="32" width="296" height="170" rx="10" class="dg12b-panel"/>
  <rect x="332" y="32" width="296" height="170" rx="10" class="dg12b-panel"/>

  <text x="20" y="46" class="dg12b-sub">from above &#8212; face at top</text>
  <text x="160" y="58" class="dg12b-tiny" text-anchor="middle">sphenoid</text>
  <text x="160" y="192" class="dg12b-tiny" text-anchor="middle">occiput</text>

  <g class="dg12b-bendS">
    <rect x="105" y="78" width="110" height="18" rx="9" class="dg12b-bone dg12b-sph"/>
    <rect x="146" y="92" width="28" height="24" rx="5" class="dg12b-bone dg12b-sph"/>
    <circle cx="160" cy="96" r="7" class="dg12b-axis"/>
    <circle cx="160" cy="96" r="2.4" class="dg12b-hub"/>
  </g>
  <g class="dg12b-bendO">
    <rect x="146" y="126" width="28" height="22" rx="5" class="dg12b-bone dg12b-occ"/>
    <rect x="110" y="144" width="100" height="22" rx="11" class="dg12b-bone dg12b-occ"/>
    <circle cx="160" cy="150" r="7" class="dg12b-axis"/>
    <circle cx="160" cy="150" r="2.4" class="dg12b-hub"/>
  </g>
  <g class="dg12b-shift">
    <circle cx="160" cy="121" r="6" class="dg12b-sbs"/>
  </g>

  <line x1="216" y1="70" x2="200" y2="70" class="dg12b-arw"/>
  <polygon points="200,65 192,70 200,75" class="dg12b-arwf"/>
  <line x1="216" y1="176" x2="200" y2="176" class="dg12b-arw"/>
  <polygon points="200,171 192,176 200,181" class="dg12b-arwf"/>
  <line x1="182" y1="121" x2="196" y2="121" class="dg12b-gd"/>
  <polygon points="196,116 204,121 196,126" class="dg12b-gdf"/>

  <path d="M246 84 Q264 121 246 158" class="dg12b-arc"/>
  <path d="M76 84 Q94 121 76 158" class="dg12b-arcm"/>

  <text x="282" y="116" class="dg12b-side" text-anchor="middle">CONVEX</text>
  <text x="282" y="128" class="dg12b-sub" text-anchor="middle">(pt. R)</text>
  <text x="44" y="116" class="dg12b-side" text-anchor="middle">CONCAVE</text>
  <text x="44" y="128" class="dg12b-sub" text-anchor="middle">(pt. L)</text>

  <text x="340" y="46" class="dg12b-sub">looking forward along the AP axis</text>
  <text x="338" y="66" class="dg12b-side">pt. L</text>
  <text x="622" y="66" class="dg12b-side" text-anchor="end">pt. R</text>

  <ellipse cx="480" cy="110" rx="74" ry="60" class="dg12b-head"/>
  <line x1="398" y1="110" x2="562" y2="110" class="dg12b-ref"/>
  <g class="dg12b-roll">
    <rect x="418" y="92" width="124" height="14" rx="7" class="dg12b-bone dg12b-sph"/>
    <rect x="418" y="116" width="124" height="14" rx="7" class="dg12b-bone dg12b-occ"/>
  </g>
  <circle cx="480" cy="110" r="8" class="dg12b-axis"/>
  <circle cx="480" cy="110" r="2.6" class="dg12b-hub"/>

  <g class="dg12b-padL">
    <rect x="382" y="74" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="382" y="96" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="382" y="118" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="382" y="144" width="20" height="10" rx="5" class="dg12b-pad"/>
  </g>
  <g class="dg12b-padR">
    <rect x="558" y="74" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="558" y="96" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="558" y="118" width="20" height="10" rx="5" class="dg12b-pad"/>
    <rect x="558" y="144" width="20" height="10" rx="5" class="dg12b-pad"/>
  </g>

  <text x="340" y="190" class="dg12b-sub">concave side: up and in</text>
  <text x="620" y="190" class="dg12b-side" text-anchor="end">convex side: DOWN and OUT</text>

  <text x="12" y="228" class="dg12b-cap">NAMED FOR THE SIDE OF THE CONVEXITY (here, the RIGHT)</text>
  <text x="12" y="245" class="dg12b-txt">&#8212; like scoliosis; not the side the sphenoid appears to sidebend toward.</text>
  <text x="12" y="262" class="dg12b-txt">Vault hold: the convex side goes DOWN and OUT; the concave side goes up and in.</text>
  <text x="12" y="279" class="dg12b-txt">Egg analogy: crack the egg open (sidebending), then spill the contents (rotation).</text>
  <text x="12" y="296" class="dg12b-note">Both motions happen at the same instant on three axes; separated here to show each component.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// The core link: cranial base to C2-C3 to sacrum, in both directions.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv12-core-link-cranium-to-sacrum"] = {
  title: "The core link: SBS to sacrum, both ways",
  caption:
    "The cranial dura continues down the spinal canal and attaches at C2-C3 and at the sacrum, so the two ends move as one system (Slide 18). " +
    "Side view, face to the left. As the SBS rises in craniosacral flexion the dural tube is drawn SUPERIORLY, and the sacrum answers by COUNTERNUTATING &#8212; " +
    "rotating POSTERIORLY, which is why the sacral response carries the opposite name to the cranial phase; extension drops the SBS and the sacrum nutates anteriorly. " +
    "The travelling dashes show the pull propagating, and the sacrum turns a beat after the SBS moves. " +
    "The same tube transmits force upward: a hard sit-down fall, a postpartum sacrum stuck forward, or a short leg tilting the sacrum pulls on the head, " +
    "so a restricted upper neck may be driven from above or from below (Slides 18-19).",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A side view of the head, dural tube and sacrum with the face to the left. When the sphenobasilar synchondrosis rises in craniosacral flexion, dashes travel up the dural tube and the sacrum counternutates, rotating posteriorly; when the synchondrosis drops in extension the dashes travel back down and the sacrum nutates anteriorly. Panels at the right state both phases and note that a fall on the buttocks, a postpartum sacrum stuck forward, or a short leg transmits pull up the same tube and restricts the head.">
  <style>
    .dg12c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg12c-bone  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; stroke-linejoin: round; }
    .dg12c-tube  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg12c-flowl { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linecap: round;
                   stroke-dasharray: 6 10; }
    .dg12c-sbsd  { fill: var(--dg-good); stroke: var(--dg-ink); stroke-width: 1.3; }
    .dg12c-att   { stroke: var(--dg-accent); stroke-width: 2.4; stroke-linecap: round; }
    .dg12c-lead  { stroke: var(--dg-muted); stroke-width: 1; }
    .dg12c-face  { fill: var(--dg-ink); opacity: .55; }
    .dg12c-hdr   { font-size: 11px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg12c-cap   { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .03em; }
    .dg12c-txt   { font-size: 10.5px; fill: var(--dg-ink); }
    .dg12c-key   { font-size: 10.5px; font-weight: 700; fill: var(--dg-ink); }
    .dg12c-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg12c-lbl   { font-size: 9.5px; fill: var(--dg-ink); }
    .dg12c-arw   { stroke: var(--dg-accent); stroke-width: 2.2; }
    .dg12c-arwf  { fill: var(--dg-accent); }

    .dg12c-sbs  { transform-box: view-box; animation: dg12cSbs 8s ease-in-out infinite; }
    .dg12c-sac  { transform-box: view-box; transform-origin: 105px 246px;
                  animation: dg12cSac 8s ease-in-out infinite; }
    .dg12c-flow { animation: dg12cFlow 8s ease-in-out infinite; }
    .dg12c-b1   { animation: dg12cB1 8s ease-in-out infinite; }
    .dg12c-b2   { animation: dg12cB2 8s ease-in-out infinite; }

    @keyframes dg12cSbs  { 0%, 4% { transform: translateY(6px) } 18%, 46% { transform: translateY(-7px) } 62%, 100% { transform: translateY(6px) } }
    @keyframes dg12cSac  { 0%, 10% { transform: rotate(-6deg) } 26%, 46% { transform: rotate(6deg) } 70%, 100% { transform: rotate(-6deg) } }
    @keyframes dg12cFlow { 0%, 4% { stroke-dashoffset: 0 } 46%, 54% { stroke-dashoffset: 96 } 100% { stroke-dashoffset: 0 } }
    @keyframes dg12cB1   { 0%, 46% { opacity: 1 } 58%, 100% { opacity: .42 } }
    @keyframes dg12cB2   { 0%, 46% { opacity: .42 } 58%, 96% { opacity: 1 } 100% { opacity: .42 } }
  </style>

  <text x="12" y="18" class="dg12c-hdr">CORE LINK (side view)</text>
  <rect x="12" y="26" width="196" height="280" rx="10" class="dg12c-panel"/>
  <text x="20" y="44" class="dg12c-tiny">&#8592; anterior (face)</text>

  <ellipse cx="104" cy="84" rx="48" ry="34" class="dg12c-bone"/>
  <polygon points="57,86 45,92 57,98" class="dg12c-face"/>
  <text x="104" y="68" class="dg12c-lbl" text-anchor="middle" font-weight="700">SBS</text>
  <g class="dg12c-sbs">
    <circle cx="104" cy="88" r="5.5" class="dg12c-sbsd"/>
  </g>

  <path d="M94 112 C90 150 90 196 94 240 L120 240 C124 196 124 150 120 112 Z" class="dg12c-tube"/>
  <path d="M107 116 C103 152 103 198 107 236" class="dg12c-flowl dg12c-flow"/>

  <line x1="90" y1="150" x2="124" y2="150" class="dg12c-att"/>
  <line x1="90" y1="162" x2="124" y2="162" class="dg12c-att"/>
  <line x1="128" y1="156" x2="152" y2="156" class="dg12c-lead"/>
  <text x="156" y="159" class="dg12c-lbl">C2-C3</text>

  <text x="16" y="196" class="dg12c-lbl">dural</text>
  <text x="16" y="208" class="dg12c-lbl">tube</text>
  <line x1="52" y1="200" x2="88" y2="200" class="dg12c-lead"/>

  <g class="dg12c-sac">
    <polygon points="84,238 126,238 105,280" class="dg12c-bone"/>
  </g>
  <line x1="130" y1="258" x2="152" y2="258" class="dg12c-lead"/>
  <text x="156" y="261" class="dg12c-lbl">sacrum</text>
  <text x="20" y="296" class="dg12c-tiny">dura attaches at C2-C3 and the sacrum</text>

  <g class="dg12c-b1">
    <rect x="216" y="26" width="412" height="78" rx="10" class="dg12c-panel"/>
    <text x="230" y="48" class="dg12c-cap">CRANIOSACRAL FLEXION</text>
    <text x="230" y="68" class="dg12c-txt">SBS RISES &#8212; the dural tube is drawn SUPERIORLY</text>
    <text x="230" y="88" class="dg12c-key">&#8594; sacrum COUNTERNUTATES (rotates POSTERIORLY)</text>
    <line x1="596" y1="44" x2="596" y2="78" class="dg12c-arw"/>
    <polygon points="590,78 596,90 602,78" class="dg12c-arwf"/>
  </g>

  <g class="dg12c-b2">
    <rect x="216" y="112" width="412" height="78" rx="10" class="dg12c-panel"/>
    <text x="230" y="134" class="dg12c-cap">CRANIOSACRAL EXTENSION</text>
    <text x="230" y="154" class="dg12c-txt">SBS DROPS &#8212; that superior pull is released</text>
    <text x="230" y="174" class="dg12c-key">&#8594; sacrum NUTATES (rotates ANTERIORLY)</text>
    <line x1="596" y1="130" x2="596" y2="164" class="dg12c-arw"/>
    <polygon points="590,164 596,176 602,164" class="dg12c-arwf"/>
  </g>

  <rect x="216" y="198" width="412" height="108" rx="10" class="dg12c-panel"/>
  <text x="230" y="220" class="dg12c-cap">THE SAME TUBE PULLS UPWARD</text>
  <text x="230" y="240" class="dg12c-txt">A hard sit-down fall, a postpartum sacrum stuck forward, or a</text>
  <text x="230" y="258" class="dg12c-txt">short leg tilting the sacrum transmits pull UP the dural tube</text>
  <text x="230" y="276" class="dg12c-txt">and restricts the head &#8212; so a restricted upper neck may be</text>
  <text x="230" y="294" class="dg12c-key">driven from above or from below.</text>
  <line x1="596" y1="288" x2="596" y2="240" class="dg12c-arw"/>
  <polygon points="590,240 596,228 602,240" class="dg12c-arwf"/>
</svg>`,
};

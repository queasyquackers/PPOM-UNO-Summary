window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv18 - Histology of the heart.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv18-transmural-fiber-rotation"] = {
  title: "One cut, one wall, three different pictures",
  caption:
    "A transmural section is a single cut through a wall whose fibers keep turning. Across the ventricular wall myocyte " +
    "direction rotates about <strong>180 degrees</strong> from endocardium to epicardium - the lecture's " +
    "<strong>&#8220;Japanese fan&#8221;</strong> (Slide 15). Follow the reading band down the stack: where the bundles run " +
    "<em>across</em> the plane of section (endo at 0&#176; and epi at 180&#176;) the knife catches them end-on, so the slide " +
    "shows <strong>cross-sectioned profiles</strong>; where they run <em>along</em> the plane (mid-wall, 90&#176;) the very same " +
    "cells appear <strong>longitudinal</strong>. The oblique middle panel is the geometric consequence of that rotation - the " +
    "lecture names only the two extremes. Capillaries run parallel with the myocytes at a ratio of about " +
    "<strong>1:1 in adults, humans included</strong>, so every profile carries its own capillary. The numbers of cells drawn " +
    "(6 per cross-section panel, 4 per longitudinal panel) are schematic; only the 1:1 ratio and the ~180&#176; rotation are " +
    "the lecture's values.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left: a stack of five layers of the ventricular wall from endocardium to epicardium, each showing myocyte bundles drawn at zero, forty-five, ninety, one hundred thirty-five and one hundred eighty degrees, with a dashed vertical line marking the plane of section and a highlight band stepping down through the layers. Right: three histology fields showing what that one section looks like at each depth - irregular cross-sectioned myocyte profiles with one capillary each at the endocardial and epicardial surfaces, oblique profiles in between, and longitudinal myocyte bands with capillaries running alongside them in the mid-wall.">
  <style>
    .d18a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .d18a-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .d18a-fld   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .d18a-fib   { stroke: var(--dg-ink); stroke-width: 3.4; stroke-linecap: round; opacity: .85; }
    .d18a-cut   { stroke: var(--dg-accent); stroke-width: 1.8; stroke-dasharray: 6 5; opacity: .9; }
    .d18a-myo   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.3; }
    .d18a-cap   { fill: var(--dg-warm); }
    .d18a-capl  { stroke: var(--dg-warm); stroke-width: 2.2; stroke-linecap: round; }
    .d18a-disc  { stroke: var(--dg-ink); stroke-width: 1.2; opacity: .32; }
    .d18a-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .d18a-lbl   { font-size: 9.5px; }
    .d18a-bold  { font-size: 9.5px; font-weight: 700; }
    .d18a-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .d18a-ang   { font-size: 9px; fill: var(--dg-muted); }
    .d18a-sweep { animation: d18aSweep 12s ease-in-out infinite; }
    .d18a-pa    { animation: d18aOnA 12s ease-in-out infinite; }
    .d18a-pb    { animation: d18aOnB 12s ease-in-out infinite; }
    .d18a-pc    { animation: d18aOnC 12s ease-in-out infinite; }
    @keyframes d18aSweep {
      0%,16%   { transform: translateY(0px) }
      20%,36%  { transform: translateY(40px) }
      40%,56%  { transform: translateY(80px) }
      60%,76%  { transform: translateY(120px) }
      80%,96%  { transform: translateY(160px) }
      100%     { transform: translateY(0px) }
    }
    @keyframes d18aOnA { 0%,17% { opacity:1 } 22%,77% { opacity:.28 } 82%,100% { opacity:1 } }
    @keyframes d18aOnB { 0%,17% { opacity:.28 } 22%,37% { opacity:1 } 42%,57% { opacity:.28 } 62%,77% { opacity:1 } 82%,100% { opacity:.28 } }
    @keyframes d18aOnC { 0%,37% { opacity:.28 } 42%,57% { opacity:1 } 62%,100% { opacity:.28 } }
  </style>
  <defs>
    <polygon id="cv18aC1" points="-14,-2 -9,-11 3,-13 13,-6 12,6 2,12 -10,9"/>
    <polygon id="cv18aC2" points="-13,2 -10,-9 2,-13 12,-8 13,4 5,12 -8,11"/>
  </defs>

  <text x="10" y="22" class="d18a-hdr">TRANSMURAL DEPTH: ENDO &#8594; EPI</text>
  <rect x="10" y="32" width="302" height="256" rx="12" class="d18a-panel"/>
  <text x="171" y="52" text-anchor="middle" class="d18a-tiny">plane of section</text>

  <rect x="76" y="60"  width="190" height="30" rx="6" class="d18a-card"/>
  <rect x="76" y="100" width="190" height="30" rx="6" class="d18a-card"/>
  <rect x="76" y="140" width="190" height="30" rx="6" class="d18a-card"/>
  <rect x="76" y="180" width="190" height="30" rx="6" class="d18a-card"/>
  <rect x="76" y="220" width="190" height="30" rx="6" class="d18a-card"/>

  <g class="d18a-fib">
    <line x1="85"  y1="75" x2="111" y2="75"/>
    <line x1="121" y1="75" x2="147" y2="75"/>
    <line x1="158" y1="75" x2="184" y2="75"/>
    <line x1="195" y1="75" x2="221" y2="75"/>
    <line x1="231" y1="75" x2="257" y2="75"/>

    <line x1="89"  y1="124" x2="107" y2="106"/>
    <line x1="125" y1="124" x2="143" y2="106"/>
    <line x1="162" y1="124" x2="180" y2="106"/>
    <line x1="199" y1="124" x2="217" y2="106"/>
    <line x1="235" y1="124" x2="253" y2="106"/>

    <line x1="98"  y1="142" x2="98"  y2="168"/>
    <line x1="134" y1="142" x2="134" y2="168"/>
    <line x1="171" y1="142" x2="171" y2="168"/>
    <line x1="208" y1="142" x2="208" y2="168"/>
    <line x1="244" y1="142" x2="244" y2="168"/>

    <line x1="89"  y1="186" x2="107" y2="204"/>
    <line x1="125" y1="186" x2="143" y2="204"/>
    <line x1="162" y1="186" x2="180" y2="204"/>
    <line x1="199" y1="186" x2="217" y2="204"/>
    <line x1="235" y1="186" x2="253" y2="204"/>

    <line x1="85"  y1="235" x2="111" y2="235"/>
    <line x1="121" y1="235" x2="147" y2="235"/>
    <line x1="158" y1="235" x2="184" y2="235"/>
    <line x1="195" y1="235" x2="221" y2="235"/>
    <line x1="231" y1="235" x2="257" y2="235"/>
  </g>
  <line x1="171" y1="56" x2="171" y2="256" class="d18a-cut"/>

  <text x="16" y="72"  class="d18a-bold" fill="var(--dg-accent)">ENDO</text>
  <text x="16" y="83"  class="d18a-tiny">surface</text>
  <text x="16" y="159" class="d18a-bold" fill="var(--dg-accent)">MID</text>
  <text x="16" y="170" class="d18a-tiny">wall</text>
  <text x="16" y="232" class="d18a-bold" fill="var(--dg-accent)">EPI</text>
  <text x="16" y="243" class="d18a-tiny">surface</text>

  <text x="272" y="79"  class="d18a-ang">0&#176;</text>
  <text x="272" y="119" class="d18a-ang">45&#176;</text>
  <text x="272" y="159" class="d18a-ang">90&#176;</text>
  <text x="272" y="199" class="d18a-ang">135&#176;</text>
  <text x="272" y="239" class="d18a-ang">180&#176;</text>

  <rect class="d18a-sweep" x="72" y="56" width="198" height="38" rx="8"
        fill="var(--dg-accent)" fill-opacity=".10" stroke="var(--dg-accent)" stroke-width="2"/>

  <text x="20" y="272" class="d18a-lbl">&#8776;180&#176; of rotation, endo to epi - the "Japanese fan"</text>

  <text x="334" y="22" class="d18a-hdr">WHAT ONE SECTION SHOWS AT THAT DEPTH</text>
  <use href="#cv18aC1" class="d18a-myo" x="340" y="36"/>
  <text x="358" y="40" class="d18a-tiny">myocyte</text>
  <circle cx="408" cy="36" r="2.8" class="d18a-cap"/>
  <text x="416" y="40" class="d18a-tiny">capillary - one per myocyte (&#8776;1:1)</text>

  <g class="d18a-pa" transform="translate(336,52)">
    <rect x="0" y="0" width="90" height="92" rx="8" class="d18a-fld"/>
    <use href="#cv18aC1" class="d18a-myo" x="24" y="18"/>
    <use href="#cv18aC2" class="d18a-myo" x="66" y="18"/>
    <use href="#cv18aC2" class="d18a-myo" x="24" y="46"/>
    <use href="#cv18aC1" class="d18a-myo" x="66" y="46"/>
    <use href="#cv18aC1" class="d18a-myo" x="24" y="74"/>
    <use href="#cv18aC2" class="d18a-myo" x="66" y="74"/>
    <circle cx="45" cy="18" r="2.8" class="d18a-cap"/>
    <circle cx="45" cy="46" r="2.8" class="d18a-cap"/>
    <circle cx="45" cy="74" r="2.8" class="d18a-cap"/>
    <circle cx="24" cy="32" r="2.8" class="d18a-cap"/>
    <circle cx="66" cy="32" r="2.8" class="d18a-cap"/>
    <circle cx="66" cy="60" r="2.8" class="d18a-cap"/>
  </g>

  <g class="d18a-pb" transform="translate(435,52)">
    <rect x="0" y="0" width="90" height="92" rx="8" class="d18a-fld"/>
    <ellipse cx="24" cy="18" rx="13" ry="6" class="d18a-myo" transform="rotate(32 24 18)"/>
    <ellipse cx="62" cy="26" rx="13" ry="6" class="d18a-myo" transform="rotate(32 62 26)"/>
    <ellipse cx="28" cy="52" rx="13" ry="6" class="d18a-myo" transform="rotate(32 28 52)"/>
    <ellipse cx="64" cy="60" rx="13" ry="6" class="d18a-myo" transform="rotate(32 64 60)"/>
    <ellipse cx="36" cy="82" rx="13" ry="6" class="d18a-myo" transform="rotate(32 36 82)"/>
    <ellipse cx="46" cy="10" rx="4.5" ry="1.8" class="d18a-cap" transform="rotate(32 46 10)"/>
    <ellipse cx="14" cy="38" rx="4.5" ry="1.8" class="d18a-cap" transform="rotate(32 14 38)"/>
    <ellipse cx="50" cy="44" rx="4.5" ry="1.8" class="d18a-cap" transform="rotate(32 50 44)"/>
    <ellipse cx="20" cy="72" rx="4.5" ry="1.8" class="d18a-cap" transform="rotate(32 20 72)"/>
    <ellipse cx="60" cy="80" rx="4.5" ry="1.8" class="d18a-cap" transform="rotate(32 60 80)"/>
  </g>

  <g class="d18a-pc" transform="translate(534,52)">
    <rect x="0" y="0" width="90" height="92" rx="8" class="d18a-fld"/>
    <rect x="4" y="8"  width="82" height="13" rx="3" class="d18a-myo"/>
    <rect x="4" y="30" width="82" height="13" rx="3" class="d18a-myo"/>
    <rect x="4" y="52" width="82" height="13" rx="3" class="d18a-myo"/>
    <rect x="4" y="74" width="82" height="13" rx="3" class="d18a-myo"/>
    <line x1="4" y1="3.5"  x2="86" y2="3.5"  class="d18a-capl"/>
    <line x1="4" y1="25.5" x2="86" y2="25.5" class="d18a-capl"/>
    <line x1="4" y1="47.5" x2="86" y2="47.5" class="d18a-capl"/>
    <line x1="4" y1="69.5" x2="86" y2="69.5" class="d18a-capl"/>
    <g class="d18a-disc">
      <line x1="30" y1="8"  x2="30" y2="21"/>
      <line x1="58" y1="8"  x2="58" y2="21"/>
      <line x1="30" y1="30" x2="30" y2="43"/>
      <line x1="58" y1="30" x2="58" y2="43"/>
      <line x1="30" y1="52" x2="30" y2="65"/>
      <line x1="58" y1="52" x2="58" y2="65"/>
      <line x1="30" y1="74" x2="30" y2="87"/>
      <line x1="58" y1="74" x2="58" y2="87"/>
    </g>
  </g>

  <text x="381" y="158" text-anchor="middle" class="d18a-bold">cross-sectioned</text>
  <text x="381" y="170" text-anchor="middle" class="d18a-tiny">endo and epi surfaces</text>
  <text x="480" y="158" text-anchor="middle" class="d18a-bold">oblique</text>
  <text x="480" y="170" text-anchor="middle" class="d18a-tiny">in between</text>
  <text x="579" y="158" text-anchor="middle" class="d18a-bold">longitudinal</text>
  <text x="579" y="170" text-anchor="middle" class="d18a-tiny">mid-wall</text>

  <text x="334" y="200" class="d18a-lbl">Same cells, same slide. The profile changes only</text>
  <text x="334" y="213" class="d18a-lbl">because the fibers have rotated with depth.</text>
  <text x="334" y="234" class="d18a-tiny">Capillaries run with the myocytes: about one capillary</text>
  <text x="334" y="246" class="d18a-tiny">per myocyte (&#8776;1:1 in adults, humans included).</text>
  <text x="334" y="268" class="d18a-tiny">Cross-sections at the surfaces, longitudinal in the</text>
  <text x="334" y="280" class="d18a-tiny">middle - one wall, one cut (Slide 15).</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv18-capillary-reserve-recruitment"] = {
  title: "Capillary reserve: what is left to recruit",
  caption:
    "Reserve is not a state, it is what remains unopened. Normal LV myocardium carries " +
    "<strong>&#8776;4,000 capillaries/mm&#178;</strong> with only about <strong>1 in 4 perfused at rest</strong>, so recruiting " +
    "the closed ones can <strong>quadruple</strong> myocardial blood flow. In hypertension the myocytes hypertrophy (increase in " +
    "diameter) and <strong>push the capillaries apart</strong>; capillaries do not proliferate, so density falls to " +
    "<strong>&#8776;2,500/mm&#178;</strong>, and the greater oxygen demand of the overworked heart keeps about " +
    "<strong>half of them already open at rest</strong>. Ride the same exertion ramp in both fields: the normal field keeps " +
    "switching capillaries on all the way to &#215;4, while the hypertensive field runs out of unopened capillaries at &#215;2 and " +
    "then has nothing left to give - <strong>reduced capillary reserve, reduced exercise capacity, chest pain on exertion</strong> " +
    "(Slide 3). The 12 and 8 capillaries drawn are schematic stand-ins chosen to give the lecture's exact fractions (1/4 and 1/2); " +
    "the density values 4,000 and 2,500 per mm&#178; are the lecture's own.",
  svg: `
<svg viewBox="0 0 640 304" role="img" aria-label="Two fields of left ventricular myocardium side by side. Normal myocardium at about four thousand capillaries per square millimetre: twelve capillaries, three of them open at rest, and the other nine switch on as the exertion ramp rises, so flow rises to four times resting. Hypertensive myocardium at about two thousand five hundred capillaries per square millimetre: the myocytes are larger and the capillaries are spread further apart, only eight are present and four are already open at rest, so only four can be recruited and flow reaches just twice resting before the reserve is exhausted, giving angina on exertion.">
  <style>
    .d18b-fld   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .d18b-myo   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.3; }
    .d18b-ghost { fill: none; stroke: var(--dg-muted); stroke-width: 1.3; stroke-dasharray: 4 3; }
    .d18b-open  { fill: var(--dg-warm); }
    .d18b-ring  { fill: none; stroke: var(--dg-accent); stroke-width: 1.5; }
    .d18b-trk   { stroke: var(--dg-line); stroke-width: 9; stroke-linecap: round; }
    .d18b-tick  { stroke: var(--dg-muted); stroke-width: 1.2; }
    .d18b-ttl   { font-size: 11px; font-weight: 700; }
    .d18b-sub   { font-size: 9px; fill: var(--dg-muted); }
    .d18b-lbl   { font-size: 9px; }
    .d18b-bold  { font-size: 9.5px; font-weight: 700; }
    .d18b-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .d18b-barN  { stroke: var(--dg-good); stroke-width: 9; stroke-linecap: round;
                  stroke-dasharray: 180 180; stroke-dashoffset: 0;
                  animation: d18bFlowN 14s linear infinite; }
    .d18b-barH  { stroke: var(--dg-warm); stroke-width: 9; stroke-linecap: round;
                  stroke-dasharray: 60 60; stroke-dashoffset: 0;
                  animation: d18bFlowH 14s linear infinite; }
    .d18b-dem   { stroke: var(--dg-accent); stroke-width: 8; stroke-linecap: round;
                  stroke-dasharray: 484 484; stroke-dashoffset: 0;
                  animation: d18bDemand 14s linear infinite; }
    .d18b-w1 { animation: d18bOpen1 14s ease-in-out infinite; }
    .d18b-w2 { animation: d18bOpen2 14s ease-in-out infinite; }
    .d18b-w3 { animation: d18bOpen3 14s ease-in-out infinite; }
    .d18b-alarm { animation: d18bAlarm 14s ease-in-out infinite; }
    @keyframes d18bOpen1 { 0%,20% { opacity:0 } 26%,88% { opacity:1 } 94%,100% { opacity:0 } }
    @keyframes d18bOpen2 { 0%,36% { opacity:0 } 42%,88% { opacity:1 } 94%,100% { opacity:0 } }
    @keyframes d18bOpen3 { 0%,52% { opacity:0 } 58%,88% { opacity:1 } 94%,100% { opacity:0 } }
    @keyframes d18bFlowN { 0%,14% { stroke-dashoffset:180 } 68%,88% { stroke-dashoffset:0 } 96%,100% { stroke-dashoffset:180 } }
    @keyframes d18bFlowH { 0%,14% { stroke-dashoffset:60 } 46%,88% { stroke-dashoffset:0 } 96%,100% { stroke-dashoffset:60 } }
    @keyframes d18bDemand { 0%,14% { stroke-dashoffset:484 } 68%,88% { stroke-dashoffset:0 } 96%,100% { stroke-dashoffset:484 } }
    @keyframes d18bAlarm {
      0%,46% { opacity:.35 } 52% { opacity:1 } 60% { opacity:.55 }
      68% { opacity:1 } 76% { opacity:.55 } 84%,88% { opacity:1 } 94%,100% { opacity:.35 }
    }
  </style>
  <defs>
    <polygon id="cv18bM1" points="-26,-2 -18,-13 -2,-15 16,-11 25,1 15,13 -6,15 -20,11"/>
    <polygon id="cv18bM2" points="-25,3 -20,-10 -4,-15 14,-13 26,-3 20,11 2,15 -14,13"/>
    <polygon id="cv18bH1" points="-32,-4 -22,-19 -2,-23 20,-18 31,-1 19,19 -6,23 -24,16"/>
    <polygon id="cv18bH2" points="-31,4 -24,-14 -4,-23 18,-20 32,-4 24,15 4,23 -18,18"/>
  </defs>

  <text x="14" y="20" class="d18b-ttl" fill="var(--dg-accent)">NORMAL LV MYOCARDIUM</text>
  <text x="14" y="34" class="d18b-sub">&#8776;4,000 capillaries/mm&#178; &#183; 1 in 4 open at rest</text>
  <text x="334" y="20" class="d18b-ttl" fill="var(--dg-warm)">HYPERTENSIVE LV MYOCARDIUM</text>
  <text x="334" y="34" class="d18b-sub">&#8776;2,500 capillaries/mm&#178; &#183; 1 in 2 open at rest</text>

  <rect x="14" y="42" width="292" height="126" rx="10" class="d18b-fld"/>
  <g transform="translate(14,42)">
    <use href="#cv18bM1" class="d18b-myo" x="40"  y="24"/>
    <use href="#cv18bM2" class="d18b-myo" x="110" y="24"/>
    <use href="#cv18bM1" class="d18b-myo" x="180" y="24"/>
    <use href="#cv18bM2" class="d18b-myo" x="250" y="24"/>
    <use href="#cv18bM2" class="d18b-myo" x="40"  y="63"/>
    <use href="#cv18bM1" class="d18b-myo" x="110" y="63"/>
    <use href="#cv18bM2" class="d18b-myo" x="180" y="63"/>
    <use href="#cv18bM1" class="d18b-myo" x="250" y="63"/>
    <use href="#cv18bM1" class="d18b-myo" x="40"  y="102"/>
    <use href="#cv18bM2" class="d18b-myo" x="110" y="102"/>
    <use href="#cv18bM1" class="d18b-myo" x="180" y="102"/>
    <use href="#cv18bM2" class="d18b-myo" x="250" y="102"/>

    <circle cx="75"  cy="43"  r="3.6" class="d18b-open"/>
    <circle cx="215" cy="82"  r="3.6" class="d18b-open"/>
    <circle cx="145" cy="119" r="3.6" class="d18b-open"/>

    <circle cx="145" cy="43"  r="5.2" class="d18b-ring"/>
    <circle cx="75"  cy="82"  r="5.2" class="d18b-ring"/>
    <circle cx="215" cy="119" r="5.2" class="d18b-ring"/>
    <circle cx="215" cy="43"  r="5.2" class="d18b-ring"/>
    <circle cx="145" cy="82"  r="5.2" class="d18b-ring"/>
    <circle cx="285" cy="119" r="5.2" class="d18b-ring"/>
    <circle cx="285" cy="43"  r="5.2" class="d18b-ring"/>
    <circle cx="285" cy="82"  r="5.2" class="d18b-ring"/>
    <circle cx="75"  cy="119" r="5.2" class="d18b-ring"/>

    <g class="d18b-w1">
      <circle cx="145" cy="43"  r="3.4" class="d18b-open"/>
      <circle cx="75"  cy="82"  r="3.4" class="d18b-open"/>
      <circle cx="215" cy="119" r="3.4" class="d18b-open"/>
    </g>
    <g class="d18b-w2">
      <circle cx="215" cy="43"  r="3.4" class="d18b-open"/>
      <circle cx="145" cy="82"  r="3.4" class="d18b-open"/>
      <circle cx="285" cy="119" r="3.4" class="d18b-open"/>
    </g>
    <g class="d18b-w3">
      <circle cx="285" cy="43"  r="3.4" class="d18b-open"/>
      <circle cx="285" cy="82"  r="3.4" class="d18b-open"/>
      <circle cx="75"  cy="119" r="3.4" class="d18b-open"/>
    </g>
  </g>

  <rect x="334" y="42" width="292" height="126" rx="10" class="d18b-fld"/>
  <g transform="translate(334,42)">
    <use href="#cv18bH1" class="d18b-myo" x="38"  y="32"/>
    <use href="#cv18bH2" class="d18b-myo" x="112" y="32"/>
    <use href="#cv18bH1" class="d18b-myo" x="186" y="32"/>
    <use href="#cv18bH2" class="d18b-myo" x="258" y="32"/>
    <use href="#cv18bH2" class="d18b-myo" x="38"  y="92"/>
    <use href="#cv18bH1" class="d18b-myo" x="112" y="92"/>
    <use href="#cv18bH2" class="d18b-myo" x="186" y="92"/>
    <use href="#cv18bH1" class="d18b-myo" x="258" y="92"/>

    <use href="#cv18bM1" class="d18b-ghost" x="186" y="32"/>

    <circle cx="75"  cy="32" r="3.6" class="d18b-open"/>
    <circle cx="222" cy="32" r="3.6" class="d18b-open"/>
    <circle cx="149" cy="92" r="3.6" class="d18b-open"/>
    <circle cx="38"  cy="62" r="3.6" class="d18b-open"/>

    <circle cx="149" cy="32" r="5.2" class="d18b-ring"/>
    <circle cx="75"  cy="92" r="5.2" class="d18b-ring"/>
    <circle cx="222" cy="92" r="5.2" class="d18b-ring"/>
    <circle cx="258" cy="62" r="5.2" class="d18b-ring"/>

    <g class="d18b-w1">
      <circle cx="149" cy="32" r="3.4" class="d18b-open"/>
      <circle cx="75"  cy="92" r="3.4" class="d18b-open"/>
    </g>
    <g class="d18b-w2">
      <circle cx="222" cy="92" r="3.4" class="d18b-open"/>
      <circle cx="258" cy="62" r="3.4" class="d18b-open"/>
    </g>
  </g>

  <circle cx="26" cy="173" r="3.6" class="d18b-open"/>
  <text x="36" y="177" class="d18b-tiny">open at rest</text>
  <circle cx="108" cy="173" r="5.2" class="d18b-ring"/>
  <circle cx="108" cy="173" r="3.4" class="d18b-open"/>
  <text x="120" y="177" class="d18b-tiny">closed at rest, recruited on exertion</text>
  <circle cx="300" cy="173" r="5" class="d18b-ghost"/>
  <text x="312" y="177" class="d18b-tiny">dashed = normal myocyte size</text>

  <line x1="30" y1="196" x2="210" y2="196" class="d18b-trk"/>
  <line x1="30" y1="196" x2="210" y2="196" class="d18b-barN"/>
  <g class="d18b-tick">
    <line x1="30"  y1="203" x2="30"  y2="207"/>
    <line x1="90"  y1="203" x2="90"  y2="207"/>
    <line x1="150" y1="203" x2="150" y2="207"/>
    <line x1="210" y1="203" x2="210" y2="207"/>
  </g>
  <text x="30"  y="216" text-anchor="middle" class="d18b-tiny">&#215;1 rest</text>
  <text x="90"  y="216" text-anchor="middle" class="d18b-tiny">&#215;2</text>
  <text x="150" y="216" text-anchor="middle" class="d18b-tiny">&#215;3</text>
  <text x="210" y="216" text-anchor="middle" class="d18b-tiny">&#215;4</text>
  <text x="222" y="200" class="d18b-bold" fill="var(--dg-good)">&#215;4 flow</text>

  <line x1="350" y1="196" x2="530" y2="196" class="d18b-trk"/>
  <line x1="350" y1="196" x2="410" y2="196" class="d18b-barH"/>
  <g class="d18b-tick">
    <line x1="350" y1="203" x2="350" y2="207"/>
    <line x1="410" y1="203" x2="410" y2="207"/>
    <line x1="470" y1="203" x2="470" y2="207"/>
    <line x1="530" y1="203" x2="530" y2="207"/>
  </g>
  <text x="350" y="216" text-anchor="middle" class="d18b-tiny">&#215;1 rest</text>
  <text x="410" y="216" text-anchor="middle" class="d18b-tiny">&#215;2</text>
  <text x="470" y="216" text-anchor="middle" class="d18b-tiny">&#215;3</text>
  <text x="530" y="216" text-anchor="middle" class="d18b-tiny">&#215;4</text>
  <text x="418" y="187" class="d18b-bold" fill="var(--dg-warm)">&#215;2 flow, then nothing left</text>

  <text x="14" y="234" class="d18b-lbl">12 capillaries drawn &#183; 3 open at rest (1 in 4)</text>
  <text x="14" y="247" class="d18b-lbl">Recruit the other 9 &#8594; flow can quadruple</text>
  <text x="14" y="261" class="d18b-bold" fill="var(--dg-good)">HIGH CAPILLARY RESERVE</text>

  <text x="334" y="234" class="d18b-lbl">8 drawn, spread apart &#183; 4 open at rest (1 in 2)</text>
  <text x="334" y="247" class="d18b-lbl">Only 4 left to recruit &#8594; flow can only double</text>
  <text x="334" y="261" class="d18b-bold d18b-alarm" fill="var(--dg-warm)">REDUCED RESERVE &#8594; ANGINA ON EXERTION</text>

  <text x="320" y="278" text-anchor="middle" class="d18b-sub">the same exertion ramp drives both hearts</text>
  <line x1="76" y1="290" x2="560" y2="290" class="d18b-trk"/>
  <line x1="76" y1="290" x2="560" y2="290" class="d18b-dem"/>
  <text x="68" y="293" text-anchor="end" class="d18b-tiny">rest</text>
  <text x="568" y="293" class="d18b-tiny">peak exertion</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv18-sarcomere-addition-remodeling"] = {
  title: "Parallel vs. series: the cell decides the chamber",
  caption:
    "Whatever the chamber does, the cell did first - the principle established in the lecturer's own laboratory (Slide 34). " +
    "<strong>Pressure overload</strong> (most commonly hypertension) thickens the LV wall by increasing myocyte " +
    "<strong>DIAMETER</strong>: new sarcomere rows dock <em>alongside</em> the existing ones, the cell widens, and the wall grows " +
    "inward around a small cavity. <strong>Volume overload / dilatation</strong> lengthens the myocyte by <strong>SERIES</strong> " +
    "addition of sarcomeres: new sarcomeres dock <em>end-to-end</em>, the cell elongates, and the chamber balloons with a thinner " +
    "wall. Note the wording: the lecture states \"increase in myocyte diameter\" for pressure overload and explicitly \"series " +
    "addition of sarcomeres\" for dilatation - \"in parallel\" is the standard name for the diameter-increasing counterpart and is " +
    "labelled as such here. This is also why hypertrophy costs capillary reserve: only the <em>widening</em> cell pushes its " +
    "capillaries apart (Slide 3), while lengthening does not. Normal LV wall thickness 1.3-1.5 cm is the lecture's value (Slide 4); " +
    "the lecture gives no thickness for the remodelled walls, so none is drawn.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two rows of remodelling. Top row, pressure overload from hypertension: sarcomere rows dock alongside a normal myocyte so the cell grows in diameter, and the matching left ventricular short axis shows a thickened wall growing inward around a small cavity. Bottom row, volume overload and chamber dilatation: sarcomeres dock end to end so the cell grows in length, and the matching short axis shows a ballooned chamber with a large cavity and a thin wall, the dashed outline marking the normal size.">
  <style>
    .d18c-band { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .d18c-blk  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: .9; }
    .d18c-add  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .d18c-wall { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .d18c-cav  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .d18c-ghost{ fill: none; stroke: var(--dg-muted); stroke-width: 1.3; stroke-dasharray: 5 4; }
    .d18c-guide{ stroke: var(--dg-muted); stroke-width: 1; stroke-dasharray: 3 3; }
    .d18c-brk  { fill: none; stroke: var(--dg-ink); stroke-width: 1.2; }
    .d18c-hdr  { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .d18c-ttl  { font-size: 10px; font-weight: 700; }
    .d18c-lbl  { font-size: 9.5px; }
    .d18c-bold { font-size: 9.5px; font-weight: 700; }
    .d18c-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .d18c-arw  { fill: none; stroke: var(--dg-accent); stroke-width: 2; marker-end: url(#cv18cTip); }
    .d18c-top  { animation: d18cDockTop 10s ease-in-out infinite; }
    .d18c-bot  { animation: d18cDockBot 10s ease-in-out infinite; }
    .d18c-r1   { animation: d18cDockR1 10s ease-in-out infinite; }
    .d18c-r2   { animation: d18cDockR2 10s ease-in-out infinite; }
    .d18c-r3   { animation: d18cDockR3 10s ease-in-out infinite; }
    .d18c-grow { animation: d18cGrow 10s ease-in-out infinite; }
    .d18c-ball { animation: d18cBalloon 10s ease-in-out infinite; }
    @keyframes d18cDockTop {
      0%,6%    { opacity:0; transform: translateY(-24px) }
      20%,86%  { opacity:1; transform: translateY(0) }
      94%,100% { opacity:0; transform: translateY(-24px) }
    }
    @keyframes d18cDockBot {
      0%,14%   { opacity:0; transform: translateY(24px) }
      28%,86%  { opacity:1; transform: translateY(0) }
      94%,100% { opacity:0; transform: translateY(24px) }
    }
    @keyframes d18cDockR1 {
      0%,6%    { opacity:0; transform: translateX(28px) }
      20%,86%  { opacity:1; transform: translateX(0) }
      94%,100% { opacity:0; transform: translateX(28px) }
    }
    @keyframes d18cDockR2 {
      0%,14%   { opacity:0; transform: translateX(30px) }
      28%,86%  { opacity:1; transform: translateX(0) }
      94%,100% { opacity:0; transform: translateX(30px) }
    }
    @keyframes d18cDockR3 {
      0%,22%   { opacity:0; transform: translateX(32px) }
      36%,86%  { opacity:1; transform: translateX(0) }
      94%,100% { opacity:0; transform: translateX(32px) }
    }
    @keyframes d18cGrow { 0%,24% { opacity:0 } 38%,86% { opacity:1 } 94%,100% { opacity:0 } }
    @keyframes d18cBalloon { 0%,30% { opacity:0 } 44%,86% { opacity:1 } 94%,100% { opacity:0 } }
  </style>
  <defs>
    <rect id="cv18cBlk" width="16" height="9" rx="1.5"/>
    <marker id="cv18cTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-accent)"/>
    </marker>
  </defs>

  <text x="10" y="22" class="d18c-hdr">MYOCYTE SHAPE REFLECTS VENTRICULAR ANATOMY (SLIDE 34)</text>

  <rect x="10" y="32" width="620" height="122" rx="12" class="d18c-band"/>
  <text x="22" y="54"  class="d18c-ttl" fill="var(--dg-warm)">PRESSURE OVERLOAD</text>
  <text x="22" y="67"  class="d18c-tiny">e.g. hypertension - most common</text>
  <text x="22" y="86"  class="d18c-lbl">sarcomeres added</text>
  <text x="22" y="98"  class="d18c-bold">in PARALLEL</text>
  <text x="22" y="117" class="d18c-bold">&#8594; myocyte DIAMETER &#8593;</text>
  <text x="22" y="131" class="d18c-lbl">= LV wall thickens</text>
  <text x="22" y="145" class="d18c-tiny">and capillaries get pushed apart</text>

  <text x="170" y="74" class="d18c-tiny">normal myocyte</text>
  <g class="d18c-blk">
    <use href="#cv18cBlk" x="170" y="80"/><use href="#cv18cBlk" x="186" y="80"/><use href="#cv18cBlk" x="202" y="80"/><use href="#cv18cBlk" x="218" y="80"/><use href="#cv18cBlk" x="234" y="80"/>
    <use href="#cv18cBlk" x="170" y="89"/><use href="#cv18cBlk" x="186" y="89"/><use href="#cv18cBlk" x="202" y="89"/><use href="#cv18cBlk" x="218" y="89"/><use href="#cv18cBlk" x="234" y="89"/>
    <use href="#cv18cBlk" x="170" y="98"/><use href="#cv18cBlk" x="186" y="98"/><use href="#cv18cBlk" x="202" y="98"/><use href="#cv18cBlk" x="218" y="98"/><use href="#cv18cBlk" x="234" y="98"/>
  </g>
  <path class="d18c-arw" d="M258,93 L286,93"/>

  <g class="d18c-blk">
    <use href="#cv18cBlk" x="296" y="79"/><use href="#cv18cBlk" x="312" y="79"/><use href="#cv18cBlk" x="328" y="79"/><use href="#cv18cBlk" x="344" y="79"/><use href="#cv18cBlk" x="360" y="79"/>
    <use href="#cv18cBlk" x="296" y="88"/><use href="#cv18cBlk" x="312" y="88"/><use href="#cv18cBlk" x="328" y="88"/><use href="#cv18cBlk" x="344" y="88"/><use href="#cv18cBlk" x="360" y="88"/>
    <use href="#cv18cBlk" x="296" y="97"/><use href="#cv18cBlk" x="312" y="97"/><use href="#cv18cBlk" x="328" y="97"/><use href="#cv18cBlk" x="344" y="97"/><use href="#cv18cBlk" x="360" y="97"/>
  </g>
  <g class="d18c-add d18c-top">
    <use href="#cv18cBlk" x="296" y="70"/><use href="#cv18cBlk" x="312" y="70"/><use href="#cv18cBlk" x="328" y="70"/><use href="#cv18cBlk" x="344" y="70"/><use href="#cv18cBlk" x="360" y="70"/>
  </g>
  <g class="d18c-add d18c-bot">
    <use href="#cv18cBlk" x="296" y="106"/><use href="#cv18cBlk" x="312" y="106"/><use href="#cv18cBlk" x="328" y="106"/><use href="#cv18cBlk" x="344" y="106"/><use href="#cv18cBlk" x="360" y="106"/>
  </g>
  <g class="d18c-guide">
    <line x1="376" y1="79"  x2="392" y2="79"/>
    <line x1="376" y1="106" x2="392" y2="106"/>
  </g>
  <path class="d18c-brk" d="M386,70 L392,70 L392,115 L386,115"/>
  <text x="398" y="86" class="d18c-bold" fill="var(--dg-warm)">diameter</text>
  <text x="398" y="98" class="d18c-bold" fill="var(--dg-warm)">&#8593;</text>
  <text x="296" y="130" class="d18c-tiny">new rows dock alongside (parallel)</text>

  <text x="556" y="46" text-anchor="middle" class="d18c-tiny">LV short axis (dashed = normal)</text>
  <circle cx="556" cy="93" r="38" class="d18c-wall"/>
  <circle cx="556" cy="93" r="22" class="d18c-ghost"/>
  <circle cx="556" cy="93" r="13" class="d18c-cav"/>
  <g class="d18c-grow">
    <path d="M556,93 m-22,0 a22,22 0 1,0 44,0 a22,22 0 1,0 -44,0 M556,93 m-13,0 a13,13 0 1,1 26,0 a13,13 0 1,1 -26,0"
          fill="var(--dg-warm)" fill-rule="evenodd" opacity=".35"/>
  </g>
  <text x="546" y="145" text-anchor="middle" class="d18c-lbl">wall thickens INWARD, small cavity</text>

  <rect x="10" y="164" width="620" height="122" rx="12" class="d18c-band"/>
  <text x="22" y="186" class="d18c-ttl" fill="var(--dg-cool)">VOLUME OVERLOAD</text>
  <text x="22" y="199" class="d18c-tiny">chamber dilatation, dilated HF</text>
  <text x="22" y="218" class="d18c-lbl">sarcomeres added</text>
  <text x="22" y="230" class="d18c-bold">in SERIES</text>
  <text x="22" y="249" class="d18c-bold">&#8594; myocyte LENGTH &#8593;</text>
  <text x="22" y="263" class="d18c-lbl">= chamber balloons</text>
  <text x="22" y="277" class="d18c-tiny">capillaries are not spread apart</text>

  <text x="170" y="206" class="d18c-tiny">normal myocyte</text>
  <g class="d18c-blk">
    <use href="#cv18cBlk" x="170" y="212"/><use href="#cv18cBlk" x="186" y="212"/><use href="#cv18cBlk" x="202" y="212"/><use href="#cv18cBlk" x="218" y="212"/><use href="#cv18cBlk" x="234" y="212"/>
    <use href="#cv18cBlk" x="170" y="221"/><use href="#cv18cBlk" x="186" y="221"/><use href="#cv18cBlk" x="202" y="221"/><use href="#cv18cBlk" x="218" y="221"/><use href="#cv18cBlk" x="234" y="221"/>
    <use href="#cv18cBlk" x="170" y="230"/><use href="#cv18cBlk" x="186" y="230"/><use href="#cv18cBlk" x="202" y="230"/><use href="#cv18cBlk" x="218" y="230"/><use href="#cv18cBlk" x="234" y="230"/>
  </g>
  <path class="d18c-arw" d="M258,225 L286,225"/>

  <g class="d18c-blk">
    <use href="#cv18cBlk" x="296" y="212"/><use href="#cv18cBlk" x="312" y="212"/><use href="#cv18cBlk" x="328" y="212"/><use href="#cv18cBlk" x="344" y="212"/><use href="#cv18cBlk" x="360" y="212"/>
    <use href="#cv18cBlk" x="296" y="221"/><use href="#cv18cBlk" x="312" y="221"/><use href="#cv18cBlk" x="328" y="221"/><use href="#cv18cBlk" x="344" y="221"/><use href="#cv18cBlk" x="360" y="221"/>
    <use href="#cv18cBlk" x="296" y="230"/><use href="#cv18cBlk" x="312" y="230"/><use href="#cv18cBlk" x="328" y="230"/><use href="#cv18cBlk" x="344" y="230"/><use href="#cv18cBlk" x="360" y="230"/>
  </g>
  <g class="d18c-add d18c-r1">
    <use href="#cv18cBlk" x="376" y="212"/><use href="#cv18cBlk" x="376" y="221"/><use href="#cv18cBlk" x="376" y="230"/>
  </g>
  <g class="d18c-add d18c-r2">
    <use href="#cv18cBlk" x="392" y="212"/><use href="#cv18cBlk" x="392" y="221"/><use href="#cv18cBlk" x="392" y="230"/>
  </g>
  <g class="d18c-add d18c-r3">
    <use href="#cv18cBlk" x="408" y="212"/><use href="#cv18cBlk" x="408" y="221"/><use href="#cv18cBlk" x="408" y="230"/>
  </g>
  <line x1="376" y1="239" x2="376" y2="252" class="d18c-guide"/>
  <path class="d18c-brk" d="M296,246 L296,252 L424,252 L424,246"/>
  <text x="360" y="266" text-anchor="middle" class="d18c-bold" fill="var(--dg-cool)">length &#8593;</text>
  <text x="296" y="206" class="d18c-tiny">new sarcomeres dock end-to-end (series)</text>

  <g class="d18c-ball">
    <circle cx="556" cy="225" r="46" class="d18c-wall"/>
    <circle cx="556" cy="225" r="36" class="d18c-cav"/>
  </g>
  <circle cx="556" cy="225" r="38" class="d18c-ghost"/>
  <circle cx="556" cy="225" r="22" class="d18c-ghost"/>
  <text x="556" y="280" text-anchor="middle" class="d18c-lbl">big cavity, thinner wall</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv28 - Physiology of the cardiac cycle, Part I: pressure and volume changes.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv28-wiggers-walkthrough"] = {
  title: "One beat across the Wiggers diagram",
  caption:
    "The whole lecture is a single left-to-right walk, so the playhead does the walking. Four traces share one clock: aortic pressure (dashed), " +
    "left ventricular pressure (solid), atrial pressure (dotted) and ventricular volume (blue). The panel underneath names the phase the playhead " +
    "is standing in, and the two valve lamps show whether the mitral and aortic valves are open or shut at that instant. " +
    "Watch the volume trace against the lamps: it is <strong>flat exactly twice</strong>, during isovolumetric contraction and isovolumetric relaxation, and those are " +
    "the only two moments when all four valves are shut - blood is incompressible, so a closed chamber can change pressure but not volume. " +
    "Volume runs from an end-diastolic ~140 mL down to an end-systolic residue, because the LV never fully empties. " +
    "The crossover matters: LV pressure sits <em>above</em> aortic pressure in rapid ejection and <em>below</em> it in reduced ejection, where inertia rather than a " +
    "pressure gradient keeps blood moving. S1 fires at mitral closure, S2 at aortic closure with the dicrotic notch beside it. " +
    "Pressures are this lecture's: aortic ~120/80 and LV 100-140 over 3-12 mmHg (Slides 6, 30, 31). The trace shapes are schematic, not measured recordings.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A Wiggers diagram animated by a moving playhead. Four stacked traces share one time axis: aortic pressure drawn dashed, left ventricular pressure drawn solid, atrial pressure drawn dotted with its a, c, v waves, and ventricular volume drawn in blue below them, with an electrocardiogram showing P wave, QRS complex and T wave. As the playhead sweeps left to right it highlights each of the seven phases in turn: atrial systole, isovolumetric contraction, rapid ejection, reduced ejection, isovolumetric relaxation, rapid filling, and reduced filling or diastasis. A panel beneath names the current phase, and two lamps show whether the mitral valve and the aortic valve are open or closed at that moment. The ventricular volume trace is flat during isovolumetric contraction at end-diastolic volume of about 140 millilitres and flat again during isovolumetric relaxation at end-systolic volume, and these are exactly the two intervals when both lamps read closed. Left ventricular pressure rises above aortic pressure during rapid ejection and falls slightly below it during reduced ejection while blood is still being ejected by inertia. The first heart sound is marked at mitral closure and the second heart sound at aortic closure, next to the dicrotic notch on the aortic trace.">
  <style>
    .dg28a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg28a-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg28a-axis  { stroke: var(--dg-line); stroke-width: 1.1; }
    .dg28a-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 2 4; opacity: .7; }
    .dg28a-ao    { fill: none; stroke: var(--dg-ink); stroke-width: 2; stroke-dasharray: 7 4; }
    .dg28a-vp    { fill: none; stroke: var(--dg-warm); stroke-width: 2.4; }
    .dg28a-ap    { fill: none; stroke: var(--dg-muted); stroke-width: 1.6; stroke-dasharray: 2 3; }
    .dg28a-vv    { fill: none; stroke: var(--dg-cool); stroke-width: 2.4; }
    .dg28a-ecg   { fill: none; stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg28a-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .dg28a-lbl   { font-size: 9px; }
    .dg28a-val   { font-size: 9px; font-weight: 700; }
    .dg28a-mini  { font-size: 8px; fill: var(--dg-muted); }
    .dg28a-tiny  { font-size: 7.5px; fill: var(--dg-muted); }
    .dg28a-zone  { opacity: .09; }
    .dg28a-play  { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .9; transform: translateX(0); animation: dg28aSweep 14s linear infinite; }
    .dg28a-z1 { animation: dg28aZ1 14s linear infinite; }
    .dg28a-z2 { animation: dg28aZ2 14s linear infinite; }
    .dg28a-z3 { animation: dg28aZ3 14s linear infinite; }
    .dg28a-z4 { animation: dg28aZ4 14s linear infinite; }
    .dg28a-z5 { animation: dg28aZ5 14s linear infinite; }
    .dg28a-z6 { animation: dg28aZ6 14s linear infinite; }
    .dg28a-z7 { animation: dg28aZ7 14s linear infinite; }
    .dg28a-n1 { opacity: 0; animation: dg28aZ1 14s linear infinite; }
    .dg28a-n2 { opacity: 0; animation: dg28aZ2 14s linear infinite; }
    .dg28a-n3 { opacity: 0; animation: dg28aZ3 14s linear infinite; }
    .dg28a-n4 { opacity: 0; animation: dg28aZ4 14s linear infinite; }
    .dg28a-n5 { opacity: 0; animation: dg28aZ5 14s linear infinite; }
    .dg28a-n6 { opacity: 0; animation: dg28aZ6 14s linear infinite; }
    .dg28a-n7 { opacity: 0; animation: dg28aZ7 14s linear infinite; }
    .dg28a-mOpen  { animation: dg28aMitralOpen  14s linear infinite; }
    .dg28a-mShut  { animation: dg28aMitralShut  14s linear infinite; }
    .dg28a-aOpen  { animation: dg28aAorticOpen  14s linear infinite; }
    .dg28a-aShut  { animation: dg28aAorticShut  14s linear infinite; }
    @keyframes dg28aSweep { 0% { transform: translateX(0) } 92%,100% { transform: translateX(524px) } }
    @keyframes dg28aZ1 { 0%,0.1% { opacity: 1 } 12%,100% { opacity: 0 } }
    @keyframes dg28aZ2 { 0%,12% { opacity: 0 } 12.1%,20% { opacity: 1 } 20.1%,100% { opacity: 0 } }
    @keyframes dg28aZ3 { 0%,20% { opacity: 0 } 20.1%,36% { opacity: 1 } 36.1%,100% { opacity: 0 } }
    @keyframes dg28aZ4 { 0%,36% { opacity: 0 } 36.1%,50% { opacity: 1 } 50.1%,100% { opacity: 0 } }
    @keyframes dg28aZ5 { 0%,50% { opacity: 0 } 50.1%,58% { opacity: 1 } 58.1%,100% { opacity: 0 } }
    @keyframes dg28aZ6 { 0%,58% { opacity: 0 } 58.1%,70% { opacity: 1 } 70.1%,100% { opacity: 0 } }
    @keyframes dg28aZ7 { 0%,70% { opacity: 0 } 70.1%,92% { opacity: 1 } 92.1%,100% { opacity: 0 } }
    @keyframes dg28aMitralOpen { 0%,12% { opacity: 1 } 12.1%,58% { opacity: 0 } 58.1%,100% { opacity: 1 } }
    @keyframes dg28aMitralShut { 0%,12% { opacity: 0 } 12.1%,58% { opacity: 1 } 58.1%,100% { opacity: 0 } }
    @keyframes dg28aAorticOpen { 0%,20% { opacity: 0 } 20.1%,50% { opacity: 1 } 50.1%,100% { opacity: 0 } }
    @keyframes dg28aAorticShut { 0%,20% { opacity: 1 } 20.1%,50% { opacity: 0 } 50.1%,100% { opacity: 1 } }
  </style>

  <text x="12" y="14" class="dg28a-hdr">PRESSURE (mmHg)</text>
  <text x="644" y="14" text-anchor="end" class="dg28a-mini">aortic &#183;&#183;&#183; dashed &#183; LV solid &#183; atrial dotted &#183; volume blue</text>

  <rect x="12" y="20" width="636" height="128" rx="9" class="dg28a-panel"/>
  <rect class="dg28a-zone dg28a-z1" x="100" y="21" width="64" height="126" fill="var(--dg-accent)"/>
  <rect class="dg28a-zone dg28a-z2" x="164" y="21" width="42" height="126" fill="var(--dg-warm)"/>
  <rect class="dg28a-zone dg28a-z3" x="206" y="21" width="84" height="126" fill="var(--dg-accent)"/>
  <rect class="dg28a-zone dg28a-z4" x="290" y="21" width="74" height="126" fill="var(--dg-accent)"/>
  <rect class="dg28a-zone dg28a-z5" x="364" y="21" width="42" height="126" fill="var(--dg-warm)"/>
  <rect class="dg28a-zone dg28a-z6" x="406" y="21" width="64" height="126" fill="var(--dg-accent)"/>
  <rect class="dg28a-zone dg28a-z7" x="470" y="21" width="146" height="126" fill="var(--dg-accent)"/>

  <line class="dg28a-grid" x1="100" y1="46" x2="640" y2="46"/>
  <line class="dg28a-grid" x1="100" y1="88" x2="640" y2="88"/>
  <line class="dg28a-grid" x1="100" y1="136" x2="640" y2="136"/>
  <text x="96" y="49" text-anchor="end" class="dg28a-tiny">120</text>
  <text x="96" y="91" text-anchor="end" class="dg28a-tiny">80</text>
  <text x="96" y="139" text-anchor="end" class="dg28a-tiny">0</text>

  <path class="dg28a-ao" d="M100,96 L164,100 L206,96 C 240,60 268,46 290,46 C 320,48 344,58 364,74 L370,86 L376,78 L382,84 C 402,98 430,104 470,108 C 520,112 580,104 616,100"/>
  <path class="dg28a-vp" d="M100,132 L120,126 L140,130 L164,132 C 176,120 192,72 206,58 C 232,42 268,40 290,44 C 316,54 344,68 364,82 C 372,104 380,126 392,132 C 400,134 406,134 410,134 L470,131 C 510,130 560,128 590,128 L616,132"/>
  <path class="dg28a-ap" d="M100,140 L112,124 L124,138 L164,140 L176,132 L188,140 L206,138 C 240,130 290,120 330,116 C 350,116 358,120 364,126 C 380,136 400,140 410,140 L470,138 C 520,138 570,140 616,140"/>

  <text x="112" y="118" class="dg28a-tiny" fill="var(--dg-muted)">a</text>
  <text x="176" y="126" class="dg28a-tiny" fill="var(--dg-muted)">c</text>
  <text x="330" y="112" class="dg28a-tiny" fill="var(--dg-muted)">v</text>
  <text x="386" y="68" class="dg28a-tiny" fill="var(--dg-ink)">dicrotic notch</text>
  <line x1="384" y1="71" x2="378" y2="79" stroke="var(--dg-ink)" stroke-width="1"/>
  <text x="470" y="36" class="dg28a-tiny" fill="var(--dg-warm)">Rapid ejection: LV &gt; aortic</text>
  <text x="470" y="58" class="dg28a-tiny" fill="var(--dg-warm)">Reduced ejection: LV &lt; aortic,</text>
  <text x="470" y="71" class="dg28a-tiny" fill="var(--dg-warm)">inertia keeps blood moving</text>

  <text x="12" y="164" class="dg28a-hdr">VOLUME (mL)</text>
  <rect x="12" y="168" width="636" height="62" rx="9" class="dg28a-panel"/>
  <rect class="dg28a-zone dg28a-z2" x="164" y="169" width="42" height="60" fill="var(--dg-warm)"/>
  <rect class="dg28a-zone dg28a-z5" x="364" y="169" width="42" height="60" fill="var(--dg-warm)"/>
  <line class="dg28a-grid" x1="100" y1="180" x2="640" y2="180"/>
  <line class="dg28a-grid" x1="100" y1="220" x2="640" y2="220"/>
  <text x="96" y="183" text-anchor="end" class="dg28a-tiny">140</text>
  <text x="96" y="223" text-anchor="end" class="dg28a-tiny">ESV</text>
  <path class="dg28a-vv" d="M100,192 C 116,186 140,181 164,180 L206,180 C 226,190 250,208 290,216 C 320,220 348,220 364,220 L406,220 C 424,212 448,198 470,192 C 520,186 570,183 616,181"/>
  <text x="172" y="176" class="dg28a-val" fill="var(--dg-cool)">FLAT</text>
  <text x="212" y="176" class="dg28a-tiny">EDV &#8776;140 mL</text>
  <text x="372" y="213" class="dg28a-val" fill="var(--dg-cool)">FLAT</text>
  <text x="410" y="213" class="dg28a-tiny">LV never fully empties</text>

  <rect x="12" y="236" width="636" height="34" rx="9" class="dg28a-panel"/>
  <path class="dg28a-ecg" d="M100,258 L108,258 C 112,258 114,250 118,250 C 122,250 124,258 128,258 L164,258 L168,258 L172,264 L180,240 L188,268 L194,258 L290,258 C 306,258 312,244 328,244 C 344,244 350,258 366,258 L616,258"/>
  <text x="118" y="272" class="dg28a-tiny">P</text>
  <text x="180" y="272" text-anchor="middle" class="dg28a-tiny">QRS</text>
  <text x="328" y="272" text-anchor="middle" class="dg28a-tiny">T</text>
  <text x="16" y="256" class="dg28a-mini">ECG</text>
  <text x="130" y="250" class="dg28a-tiny">PR</text>
  <text x="240" y="250" class="dg28a-tiny">ST segment</text>

  <line class="dg28a-play" x1="100" y1="22" x2="100" y2="270"/>

  <rect x="12" y="276" width="352" height="38" rx="9" class="dg28a-card"/>
  <text x="24" y="290" class="dg28a-mini">PHASE AT THE PLAYHEAD</text>
  <g class="dg28a-n1"><text x="24" y="306" class="dg28a-val" fill="var(--dg-accent)">1 &#183; Atrial systole &#8212; the &#8220;a&#8221; wave, +10 mL kick</text></g>
  <g class="dg28a-n2"><text x="24" y="306" class="dg28a-val" fill="var(--dg-warm)">2 &#183; Isovolumetric contraction &#8212; isometric, S1</text></g>
  <g class="dg28a-n3"><text x="24" y="306" class="dg28a-val" fill="var(--dg-accent)">3 &#183; Rapid ejection &#8212; isotonic, LV &gt; aorta</text></g>
  <g class="dg28a-n4"><text x="24" y="306" class="dg28a-val" fill="var(--dg-accent)">4 &#183; Reduced ejection &#8212; inertia, ends at T wave</text></g>
  <g class="dg28a-n5"><text x="24" y="306" class="dg28a-val" fill="var(--dg-warm)">5 &#183; Isovolumetric relaxation &#8212; S2, volume = ESV</text></g>
  <g class="dg28a-n6"><text x="24" y="306" class="dg28a-val" fill="var(--dg-accent)">6 &#183; Rapid filling &#8212; AV valves open, S3 if present</text></g>
  <g class="dg28a-n7"><text x="24" y="306" class="dg28a-val" fill="var(--dg-accent)">7 &#183; Reduced filling (diastasis) &#8212; ends at next P</text></g>

  <rect x="372" y="276" width="276" height="38" rx="9" class="dg28a-card"/>
  <text x="384" y="290" class="dg28a-mini">MITRAL VALVE</text>
  <g class="dg28a-mOpen"><circle cx="388" cy="303" r="5" fill="var(--dg-good)"/><text x="399" y="306" class="dg28a-val" fill="var(--dg-good)">OPEN</text></g>
  <g class="dg28a-mShut"><circle cx="388" cy="303" r="5" fill="var(--dg-warm)"/><text x="399" y="306" class="dg28a-val" fill="var(--dg-warm)">CLOSED</text></g>
  <text x="512" y="290" class="dg28a-mini">AORTIC VALVE</text>
  <g class="dg28a-aOpen"><circle cx="516" cy="303" r="5" fill="var(--dg-good)"/><text x="527" y="306" class="dg28a-val" fill="var(--dg-good)">OPEN</text></g>
  <g class="dg28a-aShut"><circle cx="516" cy="303" r="5" fill="var(--dg-warm)"/><text x="527" y="306" class="dg28a-val" fill="var(--dg-warm)">CLOSED</text></g>

  <text x="104" y="164" class="dg28a-val" fill="var(--dg-muted)">S4</text>
  <text x="168" y="164" class="dg28a-val" fill="var(--dg-warm)">S1</text>
  <text x="368" y="164" class="dg28a-val" fill="var(--dg-warm)">S2</text>
  <text x="412" y="164" class="dg28a-val" fill="var(--dg-muted)">S3</text>
  <text x="440" y="164" class="dg28a-tiny">S3/S4 only if present</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv28-atrial-pressure-waves"] = {
  title: "a, c, x, v, y - one cause each",
  caption:
    "The atrial pressure curve is five deflections with five separate mechanical causes, and each cause is a picture of the atrium doing something. " +
    "The playhead moves along the curve while the little atrium-and-ventricle inset on the right shows what is physically happening: the atrium squeezing (a), " +
    "the ventricle contracting underneath and bulging the closed AV valve up into it (c), the atrium letting go (x descent), venous blood piling up behind a " +
    "still-shut AV valve (v), and finally the valve yielding so the atrium drains into the ventricle (y descent). " +
    "Note the two waves that belong to <strong>atrial diastole</strong>: c and v both occur while the atrium is relaxed, which is the point students most often get backwards - only " +
    "the &ldquo;a&rdquo; wave belongs to atrial systole. The ECG strip underneath fixes the timing the lecturer gives: the P wave leads the &ldquo;a&rdquo; wave by about 0.1 s, " +
    "and the c wave arrives just after the peak of the QRS. Recorded clinically by floating a catheter through the jugular vein into the right atrium (Slides 14-15). " +
    "The curve shape is schematic; the lecture supplies timing, not absolute pressures, for these deflections.",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="An atrial pressure tracing labelled with its five deflections in order, a wave, c wave, x descent, v wave and y descent, with an electrocardiogram strip beneath it and an explanation panel to the right. A playhead sweeps along the tracing. When it reaches the a wave the panel explains that atrial contraction raises atrial pressure and that this is the only deflection belonging to atrial systole, and a small heart inset shows the atrium squeezing. At the c wave the panel explains that the ventricle has begun contracting and compresses the atrium, bulging the closed atrioventricular valve upward, and that this arrives just after the peak of the QRS complex. At the x descent the panel explains that the atrium is relaxing. At the v wave the panel explains that venous blood accumulates in the atrium while the atrioventricular valve is still closed during ventricular systole. At the y descent the panel explains that the atrioventricular valve has opened and the atrium empties into the ventricle. The electrocardiogram shows the P wave leading the a wave by about one tenth of a second, and the QRS peak immediately preceding the c wave. A footer band marks which deflections belong to atrial systole, only the a wave, and which belong to atrial diastole, namely c, x, v and y.">
  <style>
    .dg28b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg28b-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg28b-curve { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linejoin: round; }
    .dg28b-ecg   { fill: none; stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg28b-axis  { stroke: var(--dg-line); stroke-width: 1.1; }
    .dg28b-mark  { stroke: var(--dg-muted); stroke-width: 1; stroke-dasharray: 3 3; }
    .dg28b-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .dg28b-big   { font-size: 13px; font-weight: 700; }
    .dg28b-val   { font-size: 9px; font-weight: 700; }
    .dg28b-lbl   { font-size: 9px; }
    .dg28b-mini  { font-size: 8px; fill: var(--dg-muted); }
    .dg28b-atr   { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg28b-ven   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg28b-play  { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .9; transform: translateX(0); animation: dg28bSweep 12.5s linear infinite; }
    .dg28b-s1 { animation: dg28bS1 12.5s linear infinite; }
    .dg28b-s2 { animation: dg28bS2 12.5s linear infinite; }
    .dg28b-s3 { animation: dg28bS3 12.5s linear infinite; }
    .dg28b-s4 { animation: dg28bS4 12.5s linear infinite; }
    .dg28b-s5 { animation: dg28bS5 12.5s linear infinite; }
    .dg28b-c1 { opacity: 0; animation: dg28bS1 12.5s linear infinite; }
    .dg28b-c2 { opacity: 0; animation: dg28bS2 12.5s linear infinite; }
    .dg28b-c3 { opacity: 0; animation: dg28bS3 12.5s linear infinite; }
    .dg28b-c4 { opacity: 0; animation: dg28bS4 12.5s linear infinite; }
    .dg28b-c5 { opacity: 0; animation: dg28bS5 12.5s linear infinite; }
    .dg28b-sqA { animation: dg28bSqA 12.5s linear infinite; transform-box: fill-box; transform-origin: center; }
    .dg28b-sqV { animation: dg28bSqV 12.5s linear infinite; transform-box: fill-box; transform-origin: center; }
    @keyframes dg28bSweep { 0% { transform: translateX(0) } 92%,100% { transform: translateX(374px) } }
    @keyframes dg28bS1 { 0%,0.1% { opacity: 1 } 18%,100% { opacity: 0 } }
    @keyframes dg28bS2 { 0%,18% { opacity: 0 } 18.1%,36% { opacity: 1 } 36.1%,100% { opacity: 0 } }
    @keyframes dg28bS3 { 0%,36% { opacity: 0 } 36.1%,52% { opacity: 1 } 52.1%,100% { opacity: 0 } }
    @keyframes dg28bS4 { 0%,52% { opacity: 0 } 52.1%,74% { opacity: 1 } 74.1%,100% { opacity: 0 } }
    @keyframes dg28bS5 { 0%,74% { opacity: 0 } 74.1%,92% { opacity: 1 } 92.1%,100% { opacity: 0 } }
    @keyframes dg28bSqA { 0%,4% { transform: scale(1) } 10% { transform: scale(.82) } 17%,100% { transform: scale(1) } }
    @keyframes dg28bSqV { 0%,19% { transform: scale(1) } 26% { transform: scale(.84) } 50%,100% { transform: scale(1) } }
  </style>

  <text x="12" y="14" class="dg28b-hdr">ATRIAL PRESSURE CURVE</text>
  <text x="424" y="14" class="dg28b-hdr">WHAT THE ATRIUM IS DOING</text>

  <rect x="12" y="20" width="398" height="120" rx="9" class="dg28b-panel"/>
  <path class="dg28b-curve" d="M40,104 L56,58 L74,100 L96,66 L120,110 C 160,106 210,88 262,60 L286,52 L302,74 C 330,100 360,110 396,108"/>
  <circle class="dg28b-s1" cx="56"  cy="58"  r="5" fill="var(--dg-accent)"/>
  <circle class="dg28b-s2" cx="96"  cy="66"  r="5" fill="var(--dg-accent)"/>
  <circle class="dg28b-s3" cx="120" cy="110" r="5" fill="var(--dg-accent)"/>
  <circle class="dg28b-s4" cx="286" cy="52"  r="5" fill="var(--dg-accent)"/>
  <circle class="dg28b-s5" cx="340" cy="102" r="5" fill="var(--dg-accent)"/>
  <text x="56"  y="48"  text-anchor="middle" class="dg28b-big" fill="var(--dg-accent)">a</text>
  <text x="98"  y="56"  text-anchor="middle" class="dg28b-big" fill="var(--dg-accent)">c</text>
  <text x="124" y="126" text-anchor="middle" class="dg28b-big" fill="var(--dg-accent)">x</text>
  <text x="286" y="42"  text-anchor="middle" class="dg28b-big" fill="var(--dg-accent)">v</text>
  <text x="348" y="124" text-anchor="middle" class="dg28b-big" fill="var(--dg-accent)">y</text>
  <text x="20" y="34" class="dg28b-mini">pressure &#8593;</text>

  <rect x="12" y="146" width="398" height="52" rx="9" class="dg28b-panel"/>
  <path class="dg28b-ecg" d="M28,178 L36,178 C 40,178 42,168 46,168 C 50,168 52,178 56,178 L82,178 L86,178 L90,184 L96,158 L102,188 L108,178 L232,178 C 246,178 252,164 266,164 C 280,164 286,178 300,178 L396,178"/>
  <text x="46"  y="192" text-anchor="middle" class="dg28b-val">P</text>
  <text x="118" y="192" text-anchor="middle" class="dg28b-val">QRS</text>
  <text x="266" y="192" text-anchor="middle" class="dg28b-val">T</text>
  <text x="16" y="158" class="dg28b-mini">ECG</text>
  <path d="M46,150 L46,155 M56,150 L56,155 M46,152 L56,152" fill="none" stroke="var(--dg-warm)" stroke-width="1.1"/>
  <text x="62" y="155" class="dg28b-mini" fill="var(--dg-warm)">P leads &#8220;a&#8221; by &#8776;0.1 s</text>
  <line class="dg28b-mark" x1="96" y1="70" x2="96" y2="160"/>
  <text x="150" y="170" class="dg28b-mini">c arrives just after the QRS peak</text>

  <line class="dg28b-play" x1="28" y1="24" x2="28" y2="196"/>

  <rect x="12" y="204" width="398" height="26" rx="8" class="dg28b-card"/>
  <rect x="14" y="206" width="72" height="22" rx="7" fill="var(--dg-warm)" opacity=".14"/>
  <text x="50" y="221" text-anchor="middle" class="dg28b-val" fill="var(--dg-warm)">atrial systole</text>
  <text x="240" y="221" text-anchor="middle" class="dg28b-val" fill="var(--dg-muted)">atrial diastole &#8212; c, x, v and y all live here</text>

  <rect x="12" y="236" width="398" height="52" rx="9" class="dg28b-card"/>
  <text x="24" y="252" class="dg28b-val" fill="var(--dg-accent)">a-c-x-v-y</text>
  <text x="24" y="266" class="dg28b-mini">a = Atrial contraction &#183; c = ventricular Contraction Compresses the atrium</text>
  <text x="24" y="279" class="dg28b-mini">x = rela&#88;ation &#183; v = Venous filling behind a shut valve &#183; y = valve Yields</text>

  <rect x="424" y="20" width="224" height="152" rx="9" class="dg28b-panel"/>
  <ellipse class="dg28b-atr dg28b-sqA" cx="566" cy="92" rx="36" ry="22"/>
  <path class="dg28b-ven dg28b-sqV" d="M534,116 C 534,152 550,164 566,164 C 582,164 598,152 598,116 Z"/>
  <line x1="534" y1="114" x2="598" y2="114" stroke="var(--dg-ink)" stroke-width="2"/>
  <text x="566" y="96" text-anchor="middle" class="dg28b-mini">atrium</text>
  <text x="566" y="146" text-anchor="middle" class="dg28b-mini">ventricle</text>
  <line x1="566" y1="52" x2="566" y2="68" stroke="var(--dg-muted)" stroke-width="1.6"/>
  <text x="572" y="46" class="dg28b-mini">veins in</text>

  <rect x="424" y="180" width="224" height="108" rx="9" class="dg28b-card"/>
  <g class="dg28b-c1">
    <text x="436" y="200" class="dg28b-big" fill="var(--dg-accent)">a wave</text>
    <text x="436" y="220" class="dg28b-lbl">Atrium contracts.</text>
    <text x="436" y="236" class="dg28b-lbl">Pressure rises a little.</text>
    <text x="436" y="256" class="dg28b-mini">The ONLY deflection in atrial systole;</text>
    <text x="436" y="268" class="dg28b-mini">absent in atrial fibrillation.</text>
  </g>
  <g class="dg28b-c2">
    <text x="436" y="200" class="dg28b-big" fill="var(--dg-accent)">c wave</text>
    <text x="436" y="220" class="dg28b-lbl">Ventricle starts contracting.</text>
    <text x="436" y="236" class="dg28b-lbl">It compresses the atrium.</text>
    <text x="436" y="256" class="dg28b-mini">Just after the peak of the QRS.</text>
    <text x="436" y="268" class="dg28b-mini">Atrial diastole has already begun.</text>
  </g>
  <g class="dg28b-c3">
    <text x="436" y="200" class="dg28b-big" fill="var(--dg-accent)">x descent</text>
    <text x="436" y="220" class="dg28b-lbl">Atrium relaxes.</text>
    <text x="436" y="236" class="dg28b-lbl">Pressure falls.</text>
    <text x="436" y="256" class="dg28b-mini">Absent in tricuspid regurgitation.</text>
  </g>
  <g class="dg28b-c4">
    <text x="436" y="200" class="dg28b-big" fill="var(--dg-accent)">v wave</text>
    <text x="436" y="220" class="dg28b-lbl">AV valve still shut.</text>
    <text x="436" y="236" class="dg28b-lbl">Venous blood piles up.</text>
    <text x="436" y="256" class="dg28b-mini">Pressure climbs slowly as the atrium</text>
    <text x="436" y="268" class="dg28b-mini">fills during ventricular systole.</text>
  </g>
  <g class="dg28b-c5">
    <text x="436" y="200" class="dg28b-big" fill="var(--dg-accent)">y descent</text>
    <text x="436" y="220" class="dg28b-lbl">AV valve opens.</text>
    <text x="436" y="236" class="dg28b-lbl">Atrium drains, pressure drops.</text>
    <text x="436" y="256" class="dg28b-mini">This is ventricular filling. Absent in</text>
    <text x="436" y="268" class="dg28b-mini">tamponade, slow in tricuspid stenosis.</text>
  </g>
</svg>`,
};

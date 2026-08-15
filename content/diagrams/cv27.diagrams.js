window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv27 - EKG Introduction: coronary territories, ischaemic depth, rate ladder.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv27-territories"] = {
  title: "Which leads watch which artery",
  caption:
    "The 12-lead is an electrical map of coronary anatomy, so the four SALI views light up one at a time beside the wall " +
    "they belong to. Septal V1-V2 and anterior V3-V4 are both LAD, which is why V1-V4 is reported as one territory; " +
    "lateral V5, V6, I and aVL is left circumflex; inferior II, III and aVF is right coronary. Each lead box carries its " +
    "SALI tag permanently, so the map still reads when the animation is stopped. Note aVR: it is tagged with a dash " +
    "because this lecture assigns it to no coronary territory. Two lit boxes in the same colour are anatomically " +
    "contiguous and satisfy the STEMI rule; leads I and II never light together, which is exactly why ST elevation in " +
    "I and II alone cannot localise an infarct (Slides 7-9, 14-15).",
  svg: `
<svg viewBox="0 0 660 300" role="img" aria-label="On the left, a short-axis cross-section of the left ventricle divided into four wedges labelled anterior with left anterior descending artery at the top, lateral with left circumflex artery on the right, inferior with right coronary artery at the bottom, and septal with left anterior descending artery on the left. On the right, the twelve leads of an electrocardiogram are laid out in a four by three grid: leads one, two and three in the first column, aVR, aVL and aVF in the second, V1, V2 and V3 in the third, and V4, V5 and V6 in the fourth. Each lead box carries a small tag letter S for septal, A for anterior, L for lateral or I for inferior, and aVR carries a dash because it belongs to no territory. The animation lights one wall wedge and its matching leads at a time: septal with V1 and V2, anterior with V3 and V4, lateral with V5, V6, lead one and aVL, and inferior with leads two, three and aVF.">
  <style>
    .dg27a-wall  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg27a-lit   { fill: var(--dg-accent); opacity: 0; }
    .dg27a-box   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; rx: 5; }
    .dg27a-lead  { font-size: 13px; font-weight: 700; }
    .dg27a-tag   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dg27a-tagx  { font-size: 10px; font-weight: 700; fill: var(--dg-muted); }
    .dg27a-wl    { font-size: 10px; font-weight: 700; }
    .dg27a-wa    { font-size: 9.5px; fill: var(--dg-muted); }
    .dg27a-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .09em; }
    .dg27a-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg27a-stat  { font-size: 12.5px; font-weight: 700; opacity: 0; }
    .dg27a-p1 { animation: dg27aP1 14s linear infinite; }
    .dg27a-p2 { animation: dg27aP2 14s linear infinite; }
    .dg27a-p3 { animation: dg27aP3 14s linear infinite; }
    .dg27a-p4 { animation: dg27aP4 14s linear infinite; }
    .dg27a-t1 { animation: dg27aT1 14s linear infinite; }
    .dg27a-t2 { animation: dg27aT2 14s linear infinite; }
    .dg27a-t3 { animation: dg27aT3 14s linear infinite; }
    .dg27a-t4 { animation: dg27aT4 14s linear infinite; }
    @keyframes dg27aP1 { 0% { opacity: .3 } 22% { opacity: .3 } 25% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aP2 { 0% { opacity: 0 } 25% { opacity: 0 } 28% { opacity: .3 } 47% { opacity: .3 } 50% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aP3 { 0% { opacity: 0 } 50% { opacity: 0 } 53% { opacity: .3 } 72% { opacity: .3 } 75% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aP4 { 0% { opacity: 0 } 75% { opacity: 0 } 78% { opacity: .3 } 97% { opacity: .3 } 100% { opacity: 0 } }
    @keyframes dg27aT1 { 0% { opacity: 1 } 22% { opacity: 1 } 25% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aT2 { 0% { opacity: 0 } 25% { opacity: 0 } 28% { opacity: 1 } 47% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aT3 { 0% { opacity: 0 } 50% { opacity: 0 } 53% { opacity: 1 } 72% { opacity: 1 } 75% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27aT4 { 0% { opacity: 0 } 75% { opacity: 0 } 78% { opacity: 1 } 97% { opacity: 1 } 100% { opacity: 0 } }
  </style>

  <text x="30" y="42" class="dg27a-hdr">LEFT VENTRICLE, SHORT AXIS</text>

  <path class="dg27a-wall" d="M160 165 L92.8 97.8 A95 95 0 0 1 227.2 97.8 Z"/>
  <path class="dg27a-wall" d="M160 165 L227.2 97.8 A95 95 0 0 1 227.2 232.2 Z"/>
  <path class="dg27a-wall" d="M160 165 L227.2 232.2 A95 95 0 0 1 92.8 232.2 Z"/>
  <path class="dg27a-wall" d="M160 165 L92.8 232.2 A95 95 0 0 1 92.8 97.8 Z"/>

  <path class="dg27a-lit dg27a-p2" d="M160 165 L92.8 97.8 A95 95 0 0 1 227.2 97.8 Z"/>
  <path class="dg27a-lit dg27a-p3" d="M160 165 L227.2 97.8 A95 95 0 0 1 227.2 232.2 Z"/>
  <path class="dg27a-lit dg27a-p4" d="M160 165 L227.2 232.2 A95 95 0 0 1 92.8 232.2 Z"/>
  <path class="dg27a-lit dg27a-p1" d="M160 165 L92.8 232.2 A95 95 0 0 1 92.8 97.8 Z"/>

  <text x="160" y="116" class="dg27a-wl" text-anchor="middle">ANTERIOR</text>
  <text x="160" y="129" class="dg27a-wa" text-anchor="middle">LAD</text>
  <text x="199" y="161" class="dg27a-wl" text-anchor="middle">LATERAL</text>
  <text x="199" y="174" class="dg27a-wa" text-anchor="middle">LCx</text>
  <text x="160" y="207" class="dg27a-wl" text-anchor="middle">INFERIOR</text>
  <text x="160" y="220" class="dg27a-wa" text-anchor="middle">RCA</text>
  <text x="121" y="161" class="dg27a-wl" text-anchor="middle">SEPTAL</text>
  <text x="121" y="174" class="dg27a-wa" text-anchor="middle">LAD</text>

  <text x="160" y="281" class="dg27a-sub" text-anchor="middle">one vessel, two views: LAD owns septal + anterior</text>

  <text x="326" y="42" class="dg27a-hdr">THE 12 LEADS</text>
  <text x="326" y="60" class="dg27a-sub">tag letter = SALI view; aVR belongs to no territory</text>

  <rect class="dg27a-box" x="326" y="72" width="70" height="44"/>
  <rect class="dg27a-box" x="326" y="124" width="70" height="44"/>
  <rect class="dg27a-box" x="326" y="176" width="70" height="44"/>
  <rect class="dg27a-box" x="406" y="72" width="70" height="44"/>
  <rect class="dg27a-box" x="406" y="124" width="70" height="44"/>
  <rect class="dg27a-box" x="406" y="176" width="70" height="44"/>
  <rect class="dg27a-box" x="486" y="72" width="70" height="44"/>
  <rect class="dg27a-box" x="486" y="124" width="70" height="44"/>
  <rect class="dg27a-box" x="486" y="176" width="70" height="44"/>
  <rect class="dg27a-box" x="566" y="72" width="70" height="44"/>
  <rect class="dg27a-box" x="566" y="124" width="70" height="44"/>
  <rect class="dg27a-box" x="566" y="176" width="70" height="44"/>

  <rect class="dg27a-lit dg27a-p1" x="486" y="72" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p1" x="486" y="124" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p2" x="486" y="176" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p2" x="566" y="72" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p3" x="566" y="124" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p3" x="566" y="176" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p3" x="326" y="72" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p3" x="406" y="124" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p4" x="326" y="124" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p4" x="326" y="176" width="70" height="44" rx="5"/>
  <rect class="dg27a-lit dg27a-p4" x="406" y="176" width="70" height="44" rx="5"/>

  <text x="336" y="94" class="dg27a-lead">I</text>
  <text x="386" y="94" class="dg27a-tag" text-anchor="end">L</text>
  <text x="336" y="146" class="dg27a-lead">II</text>
  <text x="386" y="146" class="dg27a-tag" text-anchor="end">I</text>
  <text x="336" y="198" class="dg27a-lead">III</text>
  <text x="386" y="198" class="dg27a-tag" text-anchor="end">I</text>

  <text x="416" y="94" class="dg27a-lead">aVR</text>
  <text x="466" y="94" class="dg27a-tagx" text-anchor="end">&#8212;</text>
  <text x="416" y="146" class="dg27a-lead">aVL</text>
  <text x="466" y="146" class="dg27a-tag" text-anchor="end">L</text>
  <text x="416" y="198" class="dg27a-lead">aVF</text>
  <text x="466" y="198" class="dg27a-tag" text-anchor="end">I</text>

  <text x="496" y="94" class="dg27a-lead">V1</text>
  <text x="546" y="94" class="dg27a-tag" text-anchor="end">S</text>
  <text x="496" y="146" class="dg27a-lead">V2</text>
  <text x="546" y="146" class="dg27a-tag" text-anchor="end">S</text>
  <text x="496" y="198" class="dg27a-lead">V3</text>
  <text x="546" y="198" class="dg27a-tag" text-anchor="end">A</text>

  <text x="576" y="94" class="dg27a-lead">V4</text>
  <text x="626" y="94" class="dg27a-tag" text-anchor="end">A</text>
  <text x="576" y="146" class="dg27a-lead">V5</text>
  <text x="626" y="146" class="dg27a-tag" text-anchor="end">L</text>
  <text x="576" y="198" class="dg27a-lead">V6</text>
  <text x="626" y="198" class="dg27a-tag" text-anchor="end">L</text>

  <text x="326" y="248" class="dg27a-stat dg27a-t1" fill="var(--dg-accent)">S &#8212; septal &#8212; V1, V2 &#8212; LAD</text>
  <text x="326" y="248" class="dg27a-stat dg27a-t2" fill="var(--dg-accent)">A &#8212; anterior &#8212; V3, V4 &#8212; LAD</text>
  <text x="326" y="248" class="dg27a-stat dg27a-t3" fill="var(--dg-accent)">L &#8212; lateral &#8212; V5, V6, I, aVL &#8212; LCx</text>
  <text x="326" y="248" class="dg27a-stat dg27a-t4" fill="var(--dg-accent)">I &#8212; inferior &#8212; II, III, aVF &#8212; RCA</text>

  <text x="326" y="272" class="dg27a-sub">STEMI = ST elevation in 2 or more leads sharing one artery</text>
  <text x="326" y="288" class="dg27a-sub">V1 + V2 are contiguous; I + II are not</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv27-st-layers"] = {
  title: "How deep the ischaemia is decides which way the ST goes",
  caption:
    "Both tracings mean ischaemia; only the depth of wall involvement differs, and the depth is what flips the ST " +
    "segment. Top: injury confined to the inner layer &#8212; subendocardial &#8212; drives the ST segment BELOW the baseline. " +
    "Bottom: injury through endocardium, myocardium and epicardium &#8212; transmural &#8212; drives it ABOVE, and that is the " +
    "emergency. The dashed line in each panel is the TP segment, not the ST segment itself: TP runs from the end of the " +
    "T wave to the start of the next P wave, when the heart sits in diastole at complete electrical rest, so it is the " +
    "only trustworthy baseline. The ST bar drifts back to that line and away again so you can see the displacement being " +
    "measured; the diagram rests in the displaced position, which is the abnormal state being taught (Slides 11, 32).",
  svg: `
<svg viewBox="0 0 640 292" role="img" aria-label="Two stacked panels. The top panel shows a ventricular wall drawn as three stacked strips labelled epicardium, myocardium and endocardium, with only the innermost endocardial strip shaded to indicate subendocardial ischaemia; beside it an electrocardiogram complex is drawn against a dashed TP baseline, and its ST segment sits below that baseline with a downward arrow labelled ST depression. The bottom panel shows the same wall with all three strips shaded to indicate transmural ischaemia, and its electrocardiogram complex has an ST segment sitting above the dashed TP baseline with an upward arrow labelled ST elevation, marked as the emergency.">
  <style>
    .dg27b-strip { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg27b-isch  { fill: var(--dg-warm); opacity: .22; animation: dg27bPulse 3.6s ease-in-out infinite; }
    .dg27b-lyr   { font-size: 9px; fill: var(--dg-muted); }
    .dg27b-ttl   { font-size: 11.5px; font-weight: 700; }
    .dg27b-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg27b-tp    { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg27b-trace { fill: none; stroke: var(--dg-ink); stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg27b-bar   { stroke-width: 5; stroke-linecap: round; }
    .dg27b-warm  { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg27b-cool  { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg27b-lbl   { font-size: 10.5px; font-weight: 700; }
    .dg27b-down  { animation: dg27bDown 3.6s ease-in-out infinite; }
    .dg27b-up    { animation: dg27bUp 3.6s ease-in-out infinite; }
    @keyframes dg27bPulse { 0% { opacity: .42 } 55% { opacity: .42 } 80% { opacity: .18 } 95% { opacity: .18 } 100% { opacity: .42 } }
    @keyframes dg27bDown { 0% { transform: translateY(11px) } 55% { transform: translateY(11px) } 80% { transform: translateY(0) } 95% { transform: translateY(0) } 100% { transform: translateY(11px) } }
    @keyframes dg27bUp   { 0% { transform: translateY(-11px) } 55% { transform: translateY(-11px) } 80% { transform: translateY(0) } 95% { transform: translateY(0) } 100% { transform: translateY(-11px) } }
  </style>

  <text x="40" y="30" class="dg27b-ttl">ST DEPRESSION</text>
  <text x="40" y="44" class="dg27b-sub">subendocardial ischaemia &#8212; inner layer only</text>

  <rect class="dg27b-strip" x="40" y="52" width="150" height="22"/>
  <rect class="dg27b-strip" x="40" y="74" width="150" height="22"/>
  <rect class="dg27b-strip" x="40" y="96" width="150" height="22"/>
  <rect class="dg27b-isch" x="41" y="97" width="148" height="20"/>
  <text x="48" y="67" class="dg27b-lyr">epicardium</text>
  <text x="48" y="89" class="dg27b-lyr">myocardium</text>
  <text x="48" y="111" class="dg27b-lyr">endocardium</text>
  <text x="115" y="132" class="dg27b-sub" text-anchor="middle">lumen below</text>

  <line class="dg27b-tp" x1="235" y1="88" x2="600" y2="88"/>
  <text x="600" y="102" class="dg27b-sub" text-anchor="end">TP baseline</text>
  <path class="dg27b-trace" d="M250 88 h20 q6 -9 12 0 h12 l4 5 l6 -28 l5 26 l3 -3"/>
  <path class="dg27b-trace" d="M352 88 q16 -16 32 0 h150"/>
  <g class="dg27b-down">
    <line class="dg27b-bar dg27b-cool" x1="312" y1="88" x2="352" y2="88"/>
    <polygon class="dg27b-cool" points="298,80 306,80 302,90"/>
  </g>
  <text x="400" y="118" class="dg27b-lbl dg27b-cool" fill="var(--dg-cool)">ST below the TP line</text>

  <text x="40" y="150" class="dg27b-ttl">ST ELEVATION</text>
  <text x="40" y="164" class="dg27b-sub">transmural ischaemia &#8212; all three layers &#8212; EMERGENCY</text>

  <rect class="dg27b-strip" x="40" y="172" width="150" height="22"/>
  <rect class="dg27b-strip" x="40" y="194" width="150" height="22"/>
  <rect class="dg27b-strip" x="40" y="216" width="150" height="22"/>
  <rect class="dg27b-isch" x="41" y="173" width="148" height="64"/>
  <text x="48" y="187" class="dg27b-lyr">epicardium</text>
  <text x="48" y="209" class="dg27b-lyr">myocardium</text>
  <text x="48" y="231" class="dg27b-lyr">endocardium</text>
  <text x="115" y="252" class="dg27b-sub" text-anchor="middle">lumen below</text>

  <line class="dg27b-tp" x1="235" y1="208" x2="600" y2="208"/>
  <text x="600" y="222" class="dg27b-sub" text-anchor="end">TP baseline</text>
  <path class="dg27b-trace" d="M250 208 h20 q6 -9 12 0 h12 l4 5 l6 -28 l5 26 l3 -3"/>
  <path class="dg27b-trace" d="M352 208 q16 -16 32 0 h150"/>
  <g class="dg27b-up">
    <line class="dg27b-bar dg27b-warm" x1="312" y1="208" x2="352" y2="208"/>
    <polygon class="dg27b-warm" points="298,216 306,216 302,206"/>
  </g>
  <text x="400" y="186" class="dg27b-lbl dg27b-warm" fill="var(--dg-warm)">ST above the TP line</text>

  <text x="40" y="278" class="dg27b-sub">Both denote ischaemia or injury. Only the depth differs &#8212; and the depth sets the urgency.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv27-rate-ladder"] = {
  title: "The 300-150-100-75-60-50 ladder",
  caption:
    "The second R wave steps one large box further away each cycle and the rate readout falls with it, which is the whole " +
    "point of the ladder: distance and rate are inverse. Start from an R wave sitting on a heavy line, count large boxes " +
    "to the next R peak, and read off 300, 150, 100, 75, 60, 50. One large box is 0.2 s, so the same answer comes from " +
    "dividing 300 by the number of large boxes &#8212; the two methods are one calculation. The lecturer's worked example sits " +
    "between the fourth and fifth rungs, giving 75 to 60 bpm, the normal range. This only works on a REGULAR rhythm: with " +
    "an irregular rhythm the answer changes with whichever pair of complexes you pick, so count every QRS on the " +
    "10-second strip and multiply by 6 instead (Slides 19-20).",
  svg: `
<svg viewBox="0 0 640 250" role="img" aria-label="A strip of electrocardiogram graph paper with six large boxes. A fixed R wave spike sits on the heavy line at the left edge. A second R wave spike steps one large box further to the right on each cycle of the animation, and above each heavy line the corresponding rate is printed: three hundred at one box, one hundred fifty at two boxes, one hundred at three, seventy-five at four, sixty at five and fifty at six beats per minute. A highlight follows the moving spike along that row of numbers, and a readout on the right shows the current calculation, three hundred divided by the number of large boxes, together with the resulting rate in beats per minute.">
  <style>
    .dg27c-sm   { stroke: var(--dg-line); stroke-width: .6; opacity: .55; }
    .dg27c-bg   { stroke: var(--dg-line); stroke-width: 1.6; }
    .dg27c-base { stroke: var(--dg-ink); stroke-width: 1.4; opacity: .5; }
    .dg27c-r    { fill: none; stroke: var(--dg-ink); stroke-width: 2.6; stroke-linejoin: round; }
    .dg27c-rm   { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linejoin: round; }
    .dg27c-num  { font-size: 11px; font-weight: 700; }
    .dg27c-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg27c-hdr  { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .09em; }
    .dg27c-big  { font-size: 26px; font-weight: 700; fill: var(--dg-good); opacity: 0; }
    .dg27c-calc { font-size: 11px; fill: var(--dg-muted); opacity: 0; }
    .dg27c-mark { fill: var(--dg-accent); opacity: .18; }
    .dg27c-walk { animation: dg27cWalk 12s steps(1, end) infinite; }
    .dg27c-s1 { animation: dg27cS1 12s steps(1, end) infinite; }
    .dg27c-s2 { animation: dg27cS2 12s steps(1, end) infinite; }
    .dg27c-s3 { animation: dg27cS3 12s steps(1, end) infinite; }
    .dg27c-s4 { animation: dg27cS4 12s steps(1, end) infinite; }
    .dg27c-s5 { animation: dg27cS5 12s steps(1, end) infinite; }
    .dg27c-s6 { animation: dg27cS6 12s steps(1, end) infinite; }
    @keyframes dg27cWalk {
      0%     { transform: translateX(60px) }
      16.6%  { transform: translateX(120px) }
      33.3%  { transform: translateX(180px) }
      50%    { transform: translateX(240px) }
      66.6%  { transform: translateX(300px) }
      83.3%  { transform: translateX(360px) }
      100%   { transform: translateX(60px) }
    }
    @keyframes dg27cS1 { 0% { opacity: 1 } 16.6% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27cS2 { 0% { opacity: 0 } 16.6% { opacity: 1 } 33.3% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27cS3 { 0% { opacity: 0 } 33.3% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27cS4 { 0% { opacity: 0 } 50% { opacity: 1 } 66.6% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27cS5 { 0% { opacity: 0 } 66.6% { opacity: 1 } 83.3% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg27cS6 { 0% { opacity: 0 } 83.3% { opacity: 1 } 100% { opacity: 0 } }
  </style>

  <text x="60" y="26" class="dg27c-hdr">COUNT LARGE BOXES TO THE NEXT R WAVE</text>

  <rect class="dg27c-mark dg27c-walk" x="35" y="34" width="50" height="20" rx="4"/>
  <text x="120" y="49" class="dg27c-num" text-anchor="middle">300</text>
  <text x="180" y="49" class="dg27c-num" text-anchor="middle">150</text>
  <text x="240" y="49" class="dg27c-num" text-anchor="middle">100</text>
  <text x="300" y="49" class="dg27c-num" text-anchor="middle">75</text>
  <text x="360" y="49" class="dg27c-num" text-anchor="middle">60</text>
  <text x="420" y="49" class="dg27c-num" text-anchor="middle">50</text>

  <line class="dg27c-sm" x1="72" y1="60" x2="72" y2="180"/>
  <line class="dg27c-sm" x1="84" y1="60" x2="84" y2="180"/>
  <line class="dg27c-sm" x1="96" y1="60" x2="96" y2="180"/>
  <line class="dg27c-sm" x1="108" y1="60" x2="108" y2="180"/>
  <line class="dg27c-sm" x1="132" y1="60" x2="132" y2="180"/>
  <line class="dg27c-sm" x1="144" y1="60" x2="144" y2="180"/>
  <line class="dg27c-sm" x1="156" y1="60" x2="156" y2="180"/>
  <line class="dg27c-sm" x1="168" y1="60" x2="168" y2="180"/>
  <line class="dg27c-sm" x1="192" y1="60" x2="192" y2="180"/>
  <line class="dg27c-sm" x1="204" y1="60" x2="204" y2="180"/>
  <line class="dg27c-sm" x1="216" y1="60" x2="216" y2="180"/>
  <line class="dg27c-sm" x1="228" y1="60" x2="228" y2="180"/>
  <line class="dg27c-sm" x1="252" y1="60" x2="252" y2="180"/>
  <line class="dg27c-sm" x1="264" y1="60" x2="264" y2="180"/>
  <line class="dg27c-sm" x1="276" y1="60" x2="276" y2="180"/>
  <line class="dg27c-sm" x1="288" y1="60" x2="288" y2="180"/>
  <line class="dg27c-sm" x1="312" y1="60" x2="312" y2="180"/>
  <line class="dg27c-sm" x1="324" y1="60" x2="324" y2="180"/>
  <line class="dg27c-sm" x1="336" y1="60" x2="336" y2="180"/>
  <line class="dg27c-sm" x1="348" y1="60" x2="348" y2="180"/>
  <line class="dg27c-sm" x1="372" y1="60" x2="372" y2="180"/>
  <line class="dg27c-sm" x1="384" y1="60" x2="384" y2="180"/>
  <line class="dg27c-sm" x1="396" y1="60" x2="396" y2="180"/>
  <line class="dg27c-sm" x1="408" y1="60" x2="408" y2="180"/>
  <line class="dg27c-sm" x1="60" y1="72" x2="420" y2="72"/>
  <line class="dg27c-sm" x1="60" y1="84" x2="420" y2="84"/>
  <line class="dg27c-sm" x1="60" y1="96" x2="420" y2="96"/>
  <line class="dg27c-sm" x1="60" y1="108" x2="420" y2="108"/>
  <line class="dg27c-sm" x1="60" y1="132" x2="420" y2="132"/>
  <line class="dg27c-sm" x1="60" y1="144" x2="420" y2="144"/>
  <line class="dg27c-sm" x1="60" y1="156" x2="420" y2="156"/>
  <line class="dg27c-sm" x1="60" y1="168" x2="420" y2="168"/>

  <line class="dg27c-bg" x1="60" y1="60" x2="60" y2="180"/>
  <line class="dg27c-bg" x1="120" y1="60" x2="120" y2="180"/>
  <line class="dg27c-bg" x1="180" y1="60" x2="180" y2="180"/>
  <line class="dg27c-bg" x1="240" y1="60" x2="240" y2="180"/>
  <line class="dg27c-bg" x1="300" y1="60" x2="300" y2="180"/>
  <line class="dg27c-bg" x1="360" y1="60" x2="360" y2="180"/>
  <line class="dg27c-bg" x1="420" y1="60" x2="420" y2="180"/>
  <line class="dg27c-bg" x1="60" y1="60" x2="420" y2="60"/>
  <line class="dg27c-bg" x1="60" y1="120" x2="420" y2="120"/>
  <line class="dg27c-bg" x1="60" y1="180" x2="420" y2="180"/>

  <line class="dg27c-base" x1="60" y1="160" x2="420" y2="160"/>
  <path class="dg27c-r" d="M52 160 L60 84 L68 160"/>
  <text x="60" y="196" class="dg27c-sub" text-anchor="middle">R on a heavy line</text>

  <g class="dg27c-walk">
    <path class="dg27c-rm" d="M52 160 L60 84 L68 160"/>
  </g>

  <text x="240" y="216" class="dg27c-sub" text-anchor="middle">1 large box = 5 small boxes = 0.2 s</text>
  <text x="240" y="234" class="dg27c-sub" text-anchor="middle">irregular rhythm? count every QRS on the 10-s strip and multiply by 6</text>

  <text x="470" y="70" class="dg27c-hdr">RATE</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s1">300 &#247; 1 large box</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s2">300 &#247; 2 large boxes</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s3">300 &#247; 3 large boxes</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s4">300 &#247; 4 large boxes</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s5">300 &#247; 5 large boxes</text>
  <text x="470" y="112" class="dg27c-calc dg27c-s6">300 &#247; 6 large boxes</text>
  <text x="470" y="148" class="dg27c-big dg27c-s1">300</text>
  <text x="470" y="148" class="dg27c-big dg27c-s2">150</text>
  <text x="470" y="148" class="dg27c-big dg27c-s3">100</text>
  <text x="470" y="148" class="dg27c-big dg27c-s4">75</text>
  <text x="470" y="148" class="dg27c-big dg27c-s5">60</text>
  <text x="470" y="148" class="dg27c-big dg27c-s6">50</text>
  <text x="470" y="168" class="dg27c-sub">beats per minute</text>
  <text x="470" y="196" class="dg27c-sub">normal 60-100</text>
  <text x="470" y="212" class="dg27c-sub">brady &#60;60, tachy &#62;100</text>
</svg>`,
};

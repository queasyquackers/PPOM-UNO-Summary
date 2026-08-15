window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv29 - Cardiac cycle part 2: loops, laws and cardiac output.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv29-pv-loop"] = {
  title: "The pressure-volume loop, corner by corner",
  caption:
    "The loop is the Wiggers diagram rotated onto two axes, and it is traversed <strong>counterclockwise</strong> once per beat - " +
    "which is exactly what a static drawing cannot show. Watch the order: filling along the bottom with the mitral valve open " +
    "until volume reaches <strong>EDV, about 120 mL</strong>; the mitral valve shuts and the right-hand vertical is " +
    "<strong>isovolumetric contraction</strong> (volume fixed, pressure only); the aortic valve opens and the top limb is " +
    "<strong>rapid then reduced ejection</strong>, ending at <strong>ESV, about 50 mL</strong> when the aortic valve shuts; " +
    "the left-hand vertical is <strong>isovolumetric relaxation</strong>, and the mitral valve reopens only once pressure has " +
    "fallen close to - not exactly - zero. The width of the loop is the <strong>stroke volume, EDV &#8722; ESV &#8776; 70 mL</strong>. " +
    "Volumes are this lecture's stated values (Slide 5); pressures are drawn to scale but the lecture gives no numeric pressure marks.",
  svg: `
<svg viewBox="0 0 640 310" role="img" aria-label="A left ventricular pressure-volume loop with volume on the horizontal axis and pressure on the vertical axis. The loop is drawn progressively in a counterclockwise direction. Starting at the lower left at an end-systolic volume of about 50 millilitres, the bottom limb is diastolic filling with the mitral valve open, running rightward to an end-diastolic volume of about 120 millilitres where the mitral valve closes. The right-hand vertical limb is isovolumetric contraction, in which volume does not change and pressure rises until the aortic valve opens. The top limb is ejection, first rapid then reduced, running leftward back to the end-systolic volume where the aortic valve closes. The left-hand vertical limb is isovolumetric relaxation, in which pressure falls steeply at fixed volume until the mitral valve opens again. A bracket beneath the loop marks the stroke volume, end-diastolic volume minus end-systolic volume, about 70 millilitres.">
  <style>
    .dg29a-ax   { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg29a-tick { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg29a-lbl  { font-size: 9.5px; }
    .dg29a-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg29a-hdr  { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg29a-ghost{ fill: none; stroke: var(--dg-line); stroke-width: 5; stroke-linejoin: round; }
    .dg29a-live { fill: none; stroke: var(--dg-accent); stroke-width: 3.2; stroke-linejoin: round;
                  stroke-dasharray: 960; animation: dg29aDraw 9s linear infinite; }
    .dg29a-evt  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg29a-ph   { opacity: .4; }
    .dg29a-p1   { animation: dg29aP1 9s linear infinite; }
    .dg29a-p2   { animation: dg29aP2 9s linear infinite; }
    .dg29a-p3   { animation: dg29aP3 9s linear infinite; }
    .dg29a-p4   { animation: dg29aP4 9s linear infinite; }
    @keyframes dg29aDraw { 0% { stroke-dashoffset: 960 } 100% { stroke-dashoffset: 0 } }
    @keyframes dg29aP1 { 0%,33% { opacity: 1 } 38%,100% { opacity: .4 } }
    @keyframes dg29aP2 { 0%,33% { opacity: .4 } 38%,46% { opacity: 1 } 51%,100% { opacity: .4 } }
    @keyframes dg29aP3 { 0%,46% { opacity: .4 } 51%,84% { opacity: 1 } 89%,100% { opacity: .4 } }
    @keyframes dg29aP4 { 0%,84% { opacity: .4 } 89%,100% { opacity: 1 } }
  </style>

  <text x="96" y="30" text-anchor="end" class="dg29a-sub">LV pressure (mmHg)</text>
  <line x1="100" y1="40" x2="100" y2="248" class="dg29a-ax"/>
  <line x1="100" y1="248" x2="565" y2="248" class="dg29a-ax"/>
  <line x1="94" y1="248" x2="100" y2="248" class="dg29a-tick"/>
  <line x1="94" y1="158" x2="100" y2="158" class="dg29a-tick"/>
  <line x1="94" y1="68"  x2="100" y2="68"  class="dg29a-tick"/>
  <text x="90" y="251" text-anchor="end" class="dg29a-sub">0</text>
  <text x="90" y="161" text-anchor="end" class="dg29a-sub">60</text>
  <text x="90" y="71"  text-anchor="end" class="dg29a-sub">120</text>

  <path class="dg29a-ghost" d="M167,240 C260,244 400,240 493,233 L493,128 C455,88 370,78 292,86 C245,91 195,104 167,113 Z"/>
  <path class="dg29a-live"  d="M167,240 C260,244 400,240 493,233 L493,128 C455,88 370,78 292,86 C245,91 195,104 167,113 Z"/>

  <circle cx="493" cy="233" r="4.5" class="dg29a-evt"/>
  <circle cx="493" cy="128" r="4.5" class="dg29a-evt"/>
  <circle cx="167" cy="113" r="4.5" class="dg29a-evt"/>
  <circle cx="167" cy="240" r="4.5" class="dg29a-evt"/>

  <text x="502" y="236" class="dg29a-lbl">MV closes</text>
  <text x="502" y="124" class="dg29a-lbl">AV opens</text>
  <text x="160" y="106" text-anchor="end" class="dg29a-lbl">AV closes</text>
  <text x="160" y="238" text-anchor="end" class="dg29a-lbl">MV opens</text>

  <g class="dg29a-ph dg29a-p1">
    <text x="330" y="224" text-anchor="middle" class="dg29a-hdr">1 &#8226; FILLING</text>
    <text x="330" y="235" text-anchor="middle" class="dg29a-sub">mitral open, ventricle relaxes and dilates</text>
  </g>
  <g class="dg29a-ph dg29a-p2">
    <text x="502" y="180" class="dg29a-hdr">2 &#8226; ISOVOLUMETRIC</text>
    <text x="502" y="191" class="dg29a-hdr">CONTRACTION</text>
    <text x="502" y="203" class="dg29a-sub">both valves shut</text>
    <text x="502" y="214" class="dg29a-sub">pressure only</text>
  </g>
  <g class="dg29a-ph dg29a-p3">
    <text x="300" y="60" text-anchor="middle" class="dg29a-hdr">3 &#8226; EJECTION: rapid &#8594; reduced</text>
  </g>
  <g class="dg29a-ph dg29a-p4">
    <text x="196" y="166" class="dg29a-hdr">4 &#8226; ISOVOLUMETRIC</text>
    <text x="196" y="178" class="dg29a-hdr">RELAXATION</text>
    <text x="196" y="190" class="dg29a-sub">pressure falls to near zero</text>
  </g>

  <line x1="167" y1="248" x2="167" y2="256" class="dg29a-tick"/>
  <line x1="493" y1="248" x2="493" y2="256" class="dg29a-tick"/>
  <text x="167" y="268" text-anchor="middle" class="dg29a-sub">ESV 50 mL</text>
  <text x="493" y="268" text-anchor="middle" class="dg29a-sub">EDV 120 mL</text>

  <line x1="167" y1="280" x2="493" y2="280" stroke="var(--dg-good)" stroke-width="1.6"/>
  <line x1="167" y1="275" x2="167" y2="285" stroke="var(--dg-good)" stroke-width="1.6"/>
  <line x1="493" y1="275" x2="493" y2="285" stroke="var(--dg-good)" stroke-width="1.6"/>
  <text x="330" y="298" text-anchor="middle" class="dg29a-lbl" fill="var(--dg-good)" font-weight="700">STROKE VOLUME = EDV &#8722; ESV &#8776; 70 mL</text>
  <text x="600" y="292" text-anchor="end" class="dg29a-sub">LV volume (mL) &#8594;</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv29-espvr-edpvr"] = {
  title: "The two boundaries: EDPVR and ESPVR",
  caption:
    "The loop cannot go wherever it likes - it is hemmed in by two curves, and every pathology in this lecture moves one of them. " +
    "Left: the <strong>EDPVR</strong> is the <em>passive</em> boundary, defining stiffness and compliance during filling. " +
    "A hypertrophied, abnormally thickened ventricle (hypertrophic cardiomyopathy, severe hypertension) is stiffer and less compliant, " +
    "so the slope of the filling curve rises and the curve shifts <strong>up and to the left</strong>; a dilated ventricle " +
    "(dilated cardiomyopathy, valve disease) has higher passive compliance, so the slope falls and the curve shifts " +
    "<strong>right and flatter</strong>. Right: the <strong>ESPVR</strong> is the <em>active</em> boundary - the maximal pressure the " +
    "ventricle can develop at any given left ventricular volume - and it represents the inotropic state. " +
    "Poor contractility (myocardial infarction, heart failure) shifts it <strong>right</strong>; increased contractility " +
    "(the lecture's high-output examples) shifts it <strong>left</strong>. Watching each state light up in turn is the point: the shift " +
    "direction, not the absolute position, is what is tested (Slide 8).",
  svg: `
<svg viewBox="0 0 660 310" role="img" aria-label="Two panels, each with volume on the horizontal axis and pressure on the vertical axis. The left panel shows the end-diastolic pressure-volume relationship, the passive filling curve. A normal curve rises gently to the right. A hypertrophy curve rises much more steeply and sits up and to the left of normal, meaning a stiffer, less compliant ventricle. A dilated cardiomyopathy curve is flatter and shifted to the right, meaning a more compliant ventricle. The three states are highlighted one after another. The right panel shows the end-systolic pressure-volume relationship, a straight line whose slope represents contractility. A control line sits in the middle. An increased contractility line is steeper and shifted to the left. A reduced contractility line, as in myocardial infarction or heart failure, is flatter and shifted to the right. The three states are again highlighted in turn.">
  <style>
    .dg29b-ax   { stroke: var(--dg-line); stroke-width: 1.3; }
    .dg29b-hdr  { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg29b-lbl  { font-size: 9px; }
    .dg29b-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg29b-cv   { fill: none; stroke-width: 2.6; stroke-linecap: round; opacity: .3; }
    .dg29b-norm { stroke: var(--dg-ink); }
    .dg29b-stiff{ stroke: var(--dg-warm); }
    .dg29b-soft { stroke: var(--dg-cool); }
    .dg29b-s1   { animation: dg29bS1 9s linear infinite; }
    .dg29b-s2   { animation: dg29bS2 9s linear infinite; }
    .dg29b-s3   { animation: dg29bS3 9s linear infinite; }
    .dg29b-t    { opacity: .35; }
    .dg29b-u1   { animation: dg29bU1 9s linear infinite; }
    .dg29b-u2   { animation: dg29bU2 9s linear infinite; }
    .dg29b-u3   { animation: dg29bU3 9s linear infinite; }
    @keyframes dg29bS1 { 0%,30% { opacity: 1; stroke-width: 3.6 } 34%,100% { opacity: .3; stroke-width: 2.6 } }
    @keyframes dg29bS2 { 0%,30% { opacity: .3; stroke-width: 2.6 } 34%,63% { opacity: 1; stroke-width: 3.6 } 67%,100% { opacity: .3; stroke-width: 2.6 } }
    @keyframes dg29bS3 { 0%,63% { opacity: .3; stroke-width: 2.6 } 67%,97% { opacity: 1; stroke-width: 3.6 } 100% { opacity: .3; stroke-width: 2.6 } }
    @keyframes dg29bU1 { 0%,30% { opacity: 1 } 34%,100% { opacity: .35 } }
    @keyframes dg29bU2 { 0%,30% { opacity: .35 } 34%,63% { opacity: 1 } 67%,100% { opacity: .35 } }
    @keyframes dg29bU3 { 0%,63% { opacity: .35 } 67%,97% { opacity: 1 } 100% { opacity: .35 } }
  </style>

  <text x="14" y="20" class="dg29b-hdr">EDPVR &#8226; PASSIVE: STIFFNESS AND COMPLIANCE</text>
  <line x1="60" y1="36" x2="60" y2="230" class="dg29b-ax"/>
  <line x1="60" y1="230" x2="312" y2="230" class="dg29b-ax"/>
  <text x="54" y="44" text-anchor="end" class="dg29b-sub">P</text>
  <text x="312" y="244" text-anchor="end" class="dg29b-sub">volume &#8594;</text>

  <path class="dg29b-cv dg29b-soft dg29b-s3"  d="M70,228 C150,227 232,224 302,206"/>
  <path class="dg29b-cv dg29b-norm dg29b-s1"  d="M70,226 C140,223 208,210 266,162"/>
  <path class="dg29b-cv dg29b-stiff dg29b-s2" d="M70,224 C118,218 160,196 200,88"/>

  <g class="dg29b-t dg29b-u1">
    <circle cx="20" cy="255" r="4" fill="var(--dg-ink)"/>
    <text x="32" y="259" class="dg29b-lbl">Normal filling curve</text>
  </g>
  <g class="dg29b-t dg29b-u2">
    <circle cx="20" cy="273" r="4" fill="var(--dg-warm)"/>
    <text x="32" y="277" class="dg29b-lbl">Hypertrophy (HCM, severe HTN):</text>
    <text x="32" y="289" class="dg29b-sub">stiffer, less compliant &#8594; steeper, UP and LEFT</text>
  </g>
  <g class="dg29b-t dg29b-u3">
    <circle cx="20" cy="303" r="4" fill="var(--dg-cool)"/>
    <text x="32" y="307" class="dg29b-lbl">Dilated CM / valve disease: flatter, RIGHT</text>
  </g>

  <line x1="326" y1="14" x2="326" y2="296" stroke="var(--dg-line)" stroke-width="1.2" stroke-dasharray="3 5"/>

  <text x="344" y="20" class="dg29b-hdr">ESPVR &#8226; ACTIVE: INOTROPIC STATE</text>
  <line x1="392" y1="36" x2="392" y2="230" class="dg29b-ax"/>
  <line x1="392" y1="230" x2="646" y2="230" class="dg29b-ax"/>
  <text x="386" y="44" text-anchor="end" class="dg29b-sub">P</text>
  <text x="646" y="244" text-anchor="end" class="dg29b-sub">volume &#8594;</text>

  <path class="dg29b-cv dg29b-soft dg29b-s3"  d="M402,226 L616,150"/>
  <path class="dg29b-cv dg29b-norm dg29b-s1"  d="M402,226 L530,86"/>
  <path class="dg29b-cv dg29b-stiff dg29b-s2" d="M402,226 L474,60"/>

  <text x="486" y="44" class="dg29b-sub">maximal pressure at any LV volume</text>

  <g class="dg29b-t dg29b-u1">
    <circle cx="352" cy="255" r="4" fill="var(--dg-ink)"/>
    <text x="364" y="259" class="dg29b-lbl">Control (broken black line on the slide)</text>
  </g>
  <g class="dg29b-t dg29b-u2">
    <circle cx="352" cy="273" r="4" fill="var(--dg-warm)"/>
    <text x="364" y="277" class="dg29b-lbl">Contractility HIGH: steeper, shifts LEFT</text>
  </g>
  <g class="dg29b-t dg29b-u3">
    <circle cx="352" cy="303" r="4" fill="var(--dg-cool)"/>
    <text x="364" y="295" class="dg29b-lbl">Contractility POOR (MI, heart failure):</text>
    <text x="364" y="307" class="dg29b-sub">flatter, whole loop shifts RIGHT</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv29-calcium-digoxin"] = {
  title: "Calcium in, calcium out - and where digoxin cuts in",
  caption:
    "Contractility is ultimately a calcium-availability question, and this is a <em>cycle</em>, which is why it is animated. " +
    "First half: an action potential lets a small amount of calcium in through the <strong>L-type calcium channel</strong>; that trigger " +
    "opens the <strong>ryanodine receptor</strong> and the sarcoplasmic reticulum releases a much larger amount " +
    "(<strong>calcium-induced calcium release</strong>); calcium binds troponin and the sarcomere contracts. Removal then runs by two routes - " +
    "<strong>SERCA</strong> pumps calcium back into the SR, and the <strong>Na/Ca exchanger</strong> rides 3 Na inward down its gradient to " +
    "carry 1 Ca uphill out of the cell. Second half: <strong>digoxin</strong> blocks the Na/K ATPase, intracellular Na rises, the exchanger " +
    "loses its driving gradient and slows, so calcium stays in the cytoplasm and force rises. " +
    "Follow the chain backwards the way the lecturer did: want more force, so want more calcium, so want more sodium, so block the sodium pump " +
    "(Slides 18-22).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A cardiac myocyte with three membrane proteins. On the left an L-type calcium channel lets a small amount of calcium into the cytoplasm; this trigger reaches the ryanodine receptor on the sarcoplasmic reticulum, which releases a much larger amount of calcium, and that calcium travels to the sarcomere where it binds troponin and produces force. Calcium is then removed by two routes: SERCA pumps it back into the sarcoplasmic reticulum, and in the middle of the membrane the sodium-calcium exchanger carries three sodium ions into the cell down their gradient while moving one calcium ion out of the cell against its gradient. On the right the sodium-potassium ATPase normally moves potassium in and sodium out. In the second half of the animation a digoxin tablet blocks the sodium-potassium ATPase, sodium accumulates inside the cell, the sodium-calcium exchanger slows and dims, calcium accumulates in the cytoplasm, and the force bar at the sarcomere grows.">
  <style>
    .dg29c-cell { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg29c-memb { fill: var(--dg-line); opacity: .55; }
    .dg29c-box  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg29c-org  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg29c-lbl  { font-size: 9px; }
    .dg29c-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg29c-hdr  { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .04em; }
    .dg29c-ca   { fill: none; stroke: var(--dg-accent); stroke-width: 3.4; stroke-linecap: round; stroke-dasharray: 5 12; }
    .dg29c-na   { fill: none; stroke: var(--dg-cool); stroke-width: 3.4; stroke-linecap: round; stroke-dasharray: 5 12; }
    .dg29c-run  { animation: dg29cRun 1.8s linear infinite; }
    .dg29c-fade { animation: dg29cFade 12s linear infinite; }
    .dg29c-show { opacity: 0; animation: dg29cShow 12s linear infinite; }
    .dg29c-grow { opacity: 0; animation: dg29cShow 12s linear infinite; }
    .dg29c-st   { opacity: .3; }
    .dg29c-c1   { animation: dg29cC1 12s linear infinite; }
    .dg29c-c2   { animation: dg29cC2 12s linear infinite; }
    .dg29c-c3   { animation: dg29cC3 12s linear infinite; }
    .dg29c-c4   { animation: dg29cC4 12s linear infinite; }
    @keyframes dg29cRun  { to { stroke-dashoffset: -34 } }
    @keyframes dg29cFade { 0%,44% { opacity: 1 } 52%,100% { opacity: .18 } }
    @keyframes dg29cShow { 0%,44% { opacity: 0 } 52%,100% { opacity: 1 } }
    @keyframes dg29cC1 { 0%,44% { opacity: .3 } 50%,62% { opacity: 1 } 68%,100% { opacity: .3 } }
    @keyframes dg29cC2 { 0%,58% { opacity: .3 } 64%,74% { opacity: 1 } 80%,100% { opacity: .3 } }
    @keyframes dg29cC3 { 0%,70% { opacity: .3 } 76%,86% { opacity: 1 } 92%,100% { opacity: .3 } }
    @keyframes dg29cC4 { 0%,82% { opacity: .3 } 88%,100% { opacity: 1 } }
  </style>

  <text x="24" y="18" class="dg29c-sub">EXTRACELLULAR FLUID &#8226; calcium source 1</text>
  <rect x="24" y="60" width="612" height="14" rx="7" class="dg29c-memb"/>
  <rect x="24" y="74" width="612" height="166" rx="10" class="dg29c-cell"/>
  <text x="30" y="90" class="dg29c-sub">CYTOPLASM</text>

  <rect x="96" y="52" width="30" height="30" rx="5" class="dg29c-box"/>
  <rect x="316" y="52" width="30" height="30" rx="5" class="dg29c-box"/>
  <rect x="506" y="52" width="30" height="30" rx="5" class="dg29c-box"/>
  <text x="111" y="100" text-anchor="middle" class="dg29c-lbl">L-type Ca</text>
  <text x="331" y="100" text-anchor="middle" class="dg29c-lbl">NCX</text>
  <text x="521" y="100" text-anchor="middle" class="dg29c-lbl">Na/K ATPase</text>

  <line x1="111" y1="26" x2="111" y2="118" class="dg29c-ca dg29c-run"/>
  <polygon points="105,118 111,130 117,118" fill="var(--dg-accent)"/>
  <text x="122" y="34" class="dg29c-sub">small Ca trigger in</text>

  <rect x="88" y="146" width="184" height="66" rx="12" class="dg29c-org"/>
  <text x="180" y="186" text-anchor="middle" class="dg29c-lbl">SARCOPLASMIC RETICULUM</text>
  <text x="180" y="198" text-anchor="middle" class="dg29c-sub">calcium source 2</text>
  <rect x="98" y="139" width="34" height="14" rx="5" class="dg29c-box"/>
  <text x="115" y="133" text-anchor="middle" class="dg29c-sub">RyR</text>
  <rect x="226" y="139" width="38" height="14" rx="5" class="dg29c-box"/>
  <text x="245" y="133" text-anchor="middle" class="dg29c-sub">SERCA</text>

  <path class="dg29c-ca dg29c-run" d="M132,142 C190,118 250,124 300,150"/>
  <polygon points="298,143 312,155 296,157" fill="var(--dg-accent)"/>
  <text x="176" y="122" text-anchor="middle" class="dg29c-sub">large SR release (CICR)</text>

  <rect x="316" y="150" width="180" height="70" rx="12" class="dg29c-org"/>
  <text x="406" y="172" text-anchor="middle" class="dg29c-lbl">SARCOMERE</text>
  <text x="406" y="184" text-anchor="middle" class="dg29c-sub">Ca binds troponin</text>
  <text x="330" y="207" class="dg29c-sub">force</text>
  <rect x="360" y="199" width="62" height="9" rx="4.5" fill="var(--dg-accent)"/>
  <rect x="422" y="199" width="52" height="9" rx="4.5" fill="var(--dg-warm)" class="dg29c-grow"/>

  <path class="dg29c-ca dg29c-run" d="M322,150 C288,138 268,138 258,142"/>
  <polygon points="266,136 252,142 266,148" fill="var(--dg-accent)"/>
  <text x="286" y="130" text-anchor="middle" class="dg29c-sub">SERCA uptake</text>

  <g class="dg29c-fade">
    <line x1="331" y1="130" x2="331" y2="42" class="dg29c-ca dg29c-run"/>
    <polygon points="325,42 331,30 337,42" fill="var(--dg-accent)"/>
    <text x="342" y="34" class="dg29c-sub">1 Ca out (uphill)</text>
  </g>
  <line x1="360" y1="30" x2="360" y2="118" class="dg29c-na dg29c-run"/>
  <polygon points="354,118 360,130 366,118" fill="var(--dg-cool)"/>
  <text x="370" y="120" class="dg29c-sub">3 Na in, downhill</text>

  <g class="dg29c-fade">
    <line x1="514" y1="120" x2="514" y2="42" class="dg29c-na dg29c-run"/>
    <polygon points="508,42 514,30 520,42" fill="var(--dg-cool)"/>
    <text x="470" y="26" text-anchor="middle" class="dg29c-sub">Na out</text>
    <line x1="540" y1="30" x2="540" y2="118" class="dg29c-na dg29c-run"/>
    <polygon points="534,118 540,130 546,118" fill="var(--dg-cool)"/>
    <text x="556" y="26" class="dg29c-sub">K in</text>
  </g>

  <g class="dg29c-show">
    <rect x="566" y="34" width="66" height="20" rx="10" fill="var(--dg-warm)"/>
    <text x="599" y="48" text-anchor="middle" class="dg29c-sub" fill="var(--dg-surface)" font-weight="700">DIGOXIN</text>
    <line x1="500" y1="50" x2="542" y2="84" stroke="var(--dg-warm)" stroke-width="4" stroke-linecap="round"/>
    <line x1="542" y1="50" x2="500" y2="84" stroke="var(--dg-warm)" stroke-width="4" stroke-linecap="round"/>
    <text x="521" y="128" text-anchor="middle" class="dg29c-lbl" fill="var(--dg-warm)" font-weight="700">Na &#8593; inside</text>
    <text x="196" y="232" class="dg29c-lbl" fill="var(--dg-warm)" font-weight="700">Ca &#8593; in cytoplasm</text>
  </g>

  <text x="24" y="262" class="dg29c-hdr">DIGOXIN CHAIN</text>
  <text x="112" y="262" class="dg29c-lbl dg29c-st dg29c-c1">block Na/K ATPase</text>
  <text x="228" y="262" class="dg29c-lbl dg29c-st dg29c-c2">&#8594; intracellular Na &#8593;</text>
  <text x="358" y="262" class="dg29c-lbl dg29c-st dg29c-c3">&#8594; NCX slows, Ca stays in</text>
  <text x="516" y="262" class="dg29c-lbl dg29c-st dg29c-c4">&#8594; force &#8593;</text>
  <line x1="24" y1="272" x2="636" y2="272" stroke="var(--dg-line)" stroke-width="1.1" opacity=".7"/>
  <text x="24" y="288" class="dg29c-sub">Two calcium sources: extracellular fluid and the SR. Two removal routes: SERCA back into the SR, NCX out of the cell.</text>
  <text x="24" y="302" class="dg29c-sub">NCX stoichiometry: 3 Na in, down its electrochemical gradient, to move 1 Ca out against its gradient.</text>
  <text x="24" y="316" class="dg29c-sub">Faster SR uptake by SERCA also speeds isovolumetric relaxation (a more negative maximum &#8722;dP/dt).</text>
</svg>`,
};

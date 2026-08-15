window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv54 - Introduction to Exercise Physiology (J. Donoghue, PhD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv54-energy-system-handoff"] = {
  title: "Three energy systems, handed off over time",
  caption:
    "The three systems are not a relay where one stops and the next starts - the lecturer's stick-shift image is that " +
    "<strong>the gears you are not in are still turning in the background</strong>. The phosphagen (ATP-PC) system carries the first " +
    "<strong>0-10 seconds</strong> and is limited by stored creatine phosphate; <strong>glycolysis</strong> covers roughly " +
    "<strong>10-90 seconds</strong> anaerobically and is limited by acid-base balance; <strong>oxidative phosphorylation</strong> takes over " +
    "beyond <strong>90 seconds to 2 minutes</strong> (Slides 11, 14). Watch the sweep pass 10 seconds: phosphagen output has already " +
    "collapsed while glycolysis is climbing, which is why an all-out sprint cannot be held. The shaded recovery window shows the " +
    "point students miss - during easy walking the aerobic system <strong>restores creatine phosphate</strong>, so a second sprint is possible.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A graph of relative energy contribution against time. The phosphagen or ATP-PC curve starts at maximum and falls steeply, ending near zero by about thirty seconds. The glycolysis curve rises from low, peaks at around thirty seconds, then declines. The oxidative phosphorylation curve rises slowly, overtakes glycolysis at about ninety seconds to two minutes, and plateaus high thereafter. A vertical sweeping line moves left to right along the time axis, brightening whichever curve is dominant at that moment. Below the axis a band maps activity duration to the primary system: zero to ten seconds phosphagen, ten to thirty seconds phosphagen plus fast glycolysis, thirty seconds to two minutes fast glycolysis, two to three minutes fast glycolysis plus oxidative, and beyond three minutes oxidative. A shaded recovery window notes that easy activity lets the aerobic system restore creatine phosphate so another sprint is possible.">
  <style>
    .dg54a-ax   { stroke: var(--dg-line); stroke-width: 1.3; }
    .dg54a-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 5; opacity: .7; }
    .dg54a-lbl  { font-size: 10px; }
    .dg54a-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg54a-hdr  { font-size: 10px; font-weight: 700; }
    .dg54a-c1   { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg54a-c2   { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linecap: round; }
    .dg54a-c3   { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg54a-band { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg54a-rec  { fill: var(--dg-good); opacity: .13; }
    .dg54a-p1 { animation: dg54aGlow 9s ease-in-out infinite; }
    .dg54a-p2 { animation: dg54aGlow 9s ease-in-out infinite 2.4s; }
    .dg54a-p3 { animation: dg54aGlow 9s ease-in-out infinite 4.8s; }
    .dg54a-sweep { stroke: var(--dg-ink); stroke-width: 1.3; opacity: .4; animation: dg54aSweep 9s linear infinite; }
    .dg54a-dot   { fill: var(--dg-good); animation: dg54aRestock 9s ease-in-out infinite; }
    @keyframes dg54aGlow { 0%,100% { opacity: .42 } 22% { opacity: 1 } 44% { opacity: .42 } }
    @keyframes dg54aSweep { from { transform: translateX(0) } to { transform: translateX(536px) } }
    @keyframes dg54aRestock { 0%,55% { opacity: 0; transform: translateY(0) } 70% { opacity: .95; transform: translateY(-9px) } 92%,100% { opacity: 0; transform: translateY(-16px) } }
  </style>

  <text x="14" y="18" class="dg54a-hdr" fill="var(--dg-accent)">RELATIVE CONTRIBUTION TO ATP SUPPLY</text>

  <line x1="60" y1="40" x2="60" y2="222" class="dg54a-ax"/>
  <line x1="60" y1="222" x2="608" y2="222" class="dg54a-ax"/>
  <text x="16" y="46" class="dg54a-sub">high</text>
  <text x="16" y="220" class="dg54a-sub">low</text>

  <line x1="132" y1="40" x2="132" y2="222" class="dg54a-grid"/>
  <line x1="204" y1="40" x2="204" y2="222" class="dg54a-grid"/>
  <line x1="318" y1="40" x2="318" y2="222" class="dg54a-grid"/>
  <line x1="430" y1="40" x2="430" y2="222" class="dg54a-grid"/>

  <rect x="204" y="40" width="114" height="182" class="dg54a-rec"/>
  <text x="212" y="54" class="dg54a-sub" fill="var(--dg-good)">recovery window:</text>
  <text x="212" y="65" class="dg54a-sub" fill="var(--dg-good)">CP is restocked here</text>
  <circle cx="292" cy="86" r="4" class="dg54a-dot"/>
  <circle cx="276" cy="94" r="3" class="dg54a-dot"/>

  <path class="dg54a-c1 dg54a-p1" d="M60,58 L118,74 C148,92 176,168 204,192 C238,214 264,218 300,219 L608,220"/>
  <path class="dg54a-c2 dg54a-p2" d="M60,212 C104,208 142,158 176,120 C192,102 204,96 218,97 C252,102 288,144 336,168 C398,196 500,204 608,206"/>
  <path class="dg54a-c3 dg54a-p3" d="M60,217 C118,214 156,206 196,190 C240,172 274,142 306,120 C348,92 392,80 442,76 C512,72 560,72 608,72"/>

  <text x="70" y="46" class="dg54a-lbl" fill="var(--dg-warm)">Phosphagen (ATP-PC)</text>
  <text x="70" y="57" class="dg54a-sub">limited by creatine phosphate</text>
  <text x="222" y="90" class="dg54a-lbl" fill="var(--dg-accent)">Glycolysis</text>
  <text x="222" y="101" class="dg54a-sub">anaerobic, limited by acid-base</text>
  <text x="452" y="62" class="dg54a-lbl" fill="var(--dg-cool)">Oxidative phosphorylation</text>
  <text x="452" y="73" class="dg54a-sub">36-38 ATP/glucose, needs O&#8322;</text>

  <line x1="60" y1="40" x2="60" y2="222" class="dg54a-sweep"/>

  <text x="60" y="236" class="dg54a-sub" text-anchor="middle">0</text>
  <text x="132" y="236" class="dg54a-sub" text-anchor="middle">10 s</text>
  <text x="204" y="236" class="dg54a-sub" text-anchor="middle">30 s</text>
  <text x="318" y="236" class="dg54a-sub" text-anchor="middle">2 min</text>
  <text x="430" y="236" class="dg54a-sub" text-anchor="middle">3 min</text>
  <text x="604" y="236" class="dg54a-sub" text-anchor="end">longer</text>

  <rect x="14" y="248" width="612" height="42" rx="8" class="dg54a-band"/>
  <text x="24" y="264" class="dg54a-hdr">Slide 14 &#8226; duration &#8594; primary system</text>
  <text x="24" y="281" class="dg54a-sub">0-10 s phosphagen &#8226; 10-30 s phosphagen + fast glycolysis &#8226; 30 s-2 min fast glycolysis &#8226; 2-3 min fast glycolysis + oxidative &#8226; &gt;3 min oxidative</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv54-threshold-crossover"] = {
  title: "The threshold, and where the test stops",
  caption:
    "This is the single graph the lecture builds toward. As intensity rises, <strong>VO&#8322;</strong> and <strong>VCO&#8322;</strong> climb linearly together and " +
    "<strong>ventilation</strong> tracks them - until an inflection where VCO&#8322; crosses above VO&#8322;, ventilation breaks upward, and " +
    "<strong>blood lactate</strong> spikes. That single point is the <strong>ventilatory / anaerobic (lactate) threshold</strong>, and the lecture's clinical " +
    "move is to read the <strong>heart rate</strong> off the x-axis there and prescribe training at it. Ventilation departs from linearity at about " +
    "<strong>60% of maximal capacity</strong>, or <strong>40-50% in untrained people</strong> (Slide 24); lactate threshold sits at <strong>50-60% of VO&#8322;max " +
    "untrained and 75-85% in trained athletes</strong> (Slide 26). The flags on the axis are the disease version of the same idea - " +
    "angina or ST depression, desaturation with dyspnea, and claudication each define a personal ceiling that rehab then trains up to (Slide 28).",
  svg: `
<svg viewBox="0 0 660 310" role="img" aria-label="A graph of physiological response against exercise intensity. Oxygen consumption and carbon dioxide production both rise linearly together, then at an inflection point carbon dioxide production crosses above oxygen consumption. Ventilation rises with them and then breaks sharply upward at the same point, and blood lactate, which was flat, spikes there. A vertical dashed line marks that point as the ventilatory or anaerobic lactate threshold, with the heart rate at that intensity labelled as the training target of about one hundred sixty to one hundred seventy beats per minute in the lecture's athlete example. To the left the region is labelled aerobic and to the right anaerobic. Along the intensity axis three flags mark clinical stopping points at lower intensities: angina with ST depression, oxygen desaturation to about ninety percent with dyspnea rated plus three to plus four at a heart rate of one hundred twenty-five, and claudication calf pain. A sweeping vertical line advances along the intensity axis.">
  <style>
    .dg54b-ax   { stroke: var(--dg-line); stroke-width: 1.3; }
    .dg54b-lbl  { font-size: 10px; }
    .dg54b-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg54b-hdr  { font-size: 10px; font-weight: 700; }
    .dg54b-vo2  { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-linecap: round; }
    .dg54b-vco2 { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg54b-ve   { fill: none; stroke: var(--dg-good); stroke-width: 2.6; stroke-linecap: round; }
    .dg54b-lac  { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linecap: round; }
    .dg54b-thr  { stroke: var(--dg-ink); stroke-width: 1.6; stroke-dasharray: 5 4; }
    .dg54b-zone { fill: var(--dg-panel); opacity: .55; }
    .dg54b-flag { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.1; }
    .dg54b-pin  { stroke: var(--dg-warm); stroke-width: 1.4; }
    .dg54b-sweep { stroke: var(--dg-ink); stroke-width: 1.3; opacity: .35; animation: dg54bSweep 9s linear infinite; }
    .dg54b-burst { animation: dg54bBurst 9s ease-in-out infinite; }
    .dg54b-tag   { animation: dg54bTag 9s ease-in-out infinite; }
    @keyframes dg54bSweep { from { transform: translateX(0) } to { transform: translateX(548px) } }
    @keyframes dg54bBurst { 0%,58% { opacity: .4 } 70%,94% { opacity: 1 } 100% { opacity: .4 } }
    @keyframes dg54bTag { 0%,56% { opacity: .25 } 68%,96% { opacity: 1 } 100% { opacity: .25 } }
  </style>

  <text x="14" y="18" class="dg54b-hdr" fill="var(--dg-accent)">RESPONSE vs EXERCISE INTENSITY (watts or speed)</text>

  <rect x="58" y="30" width="330" height="182" class="dg54b-zone"/>
  <text x="70" y="44" class="dg54b-sub">AEROBIC &#8226; linear, matched</text>
  <text x="402" y="44" class="dg54b-sub">ANAEROBIC &#8226; lactate and CO&#8322; climb</text>

  <line x1="58" y1="30" x2="58" y2="212" class="dg54b-ax"/>
  <line x1="58" y1="212" x2="606" y2="212" class="dg54b-ax"/>

  <path class="dg54b-vo2" d="M58,204 C140,178 250,140 340,116 C392,102 440,96 486,94 C530,93 570,93 604,93"/>
  <path class="dg54b-vco2" d="M58,208 C140,184 250,148 336,122 C382,106 420,86 452,70 C486,54 540,44 604,40"/>
  <path class="dg54b-ve" d="M58,200 C136,180 250,152 334,132 C374,120 400,102 424,80 C452,56 500,40 604,32"/>
  <path class="dg54b-lac" d="M58,206 C150,204 250,202 330,198 C368,194 396,178 418,152 C444,122 490,90 604,64"/>

  <line x1="388" y1="30" x2="388" y2="212" class="dg54b-thr"/>
  <g class="dg54b-tag">
    <rect x="396" y="140" width="204" height="52" rx="8" class="dg54b-flag"/>
    <text x="406" y="156" class="dg54b-hdr">VENTILATORY / ANAEROBIC</text>
    <text x="406" y="169" class="dg54b-hdr">(LACTATE) THRESHOLD</text>
    <text x="406" y="184" class="dg54b-sub">read the HR here &#8594; train at it (e.g. 160-170)</text>
  </g>
  <circle cx="388" cy="119" r="5" fill="var(--dg-accent)" class="dg54b-burst"/>

  <text x="612" y="96" class="dg54b-sub" text-anchor="end">VO&#8322;</text>
  <text x="612" y="52" class="dg54b-sub" text-anchor="end">VCO&#8322;</text>
  <text x="612" y="28" class="dg54b-sub" text-anchor="end">Ve</text>
  <text x="612" y="76" class="dg54b-sub" text-anchor="end">lactate</text>

  <line x1="58" y1="30" x2="58" y2="212" class="dg54b-sweep"/>

  <line x1="150" y1="212" x2="150" y2="228" class="dg54b-pin"/>
  <line x1="242" y1="212" x2="242" y2="228" class="dg54b-pin"/>
  <line x1="320" y1="212" x2="320" y2="228" class="dg54b-pin"/>
  <text x="150" y="240" class="dg54b-sub" text-anchor="middle">claudication</text>
  <text x="242" y="240" class="dg54b-sub" text-anchor="middle">desaturation</text>
  <text x="320" y="240" class="dg54b-sub" text-anchor="middle">angina</text>

  <rect x="14" y="252" width="632" height="46" rx="8" fill="var(--dg-panel)" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="24" y="268" class="dg54b-hdr">Slide 28 &#8226; the disease population has its own ceiling</text>
  <text x="24" y="285" class="dg54b-sub">Angina or ST depression &#8226; SpO&#8322; falling to ~90% with dyspnea +3 to +4 (note the HR, e.g. 125) &#8226; claudication calf pain &#8594; stop the test, then rehab trains up to that point</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv54-preload-afterload-remodeling"] = {
  title: "Volume load vs pressure load on the left ventricle",
  caption:
    "Two chronic loads, two opposite chambers. Left: <strong>cardiovascular exercise</strong> is a chronic <strong>preload / volume overload</strong> - " +
    "venous return stretches the ventricle before contraction, elasticity and chamber size increase, and stroke volume and cardiac output rise. " +
    "Slide 33 names this <strong>eccentric hypertrophy</strong>: the wall thickens but the chamber gets <em>larger</em>. Right: heavy resistance training " +
    "with the <strong>Valsalva maneuver</strong> (and hypertension, or any outflow obstruction) is a chronic <strong>afterload / pressure overload</strong> - " +
    "the wall thickens inward, the chamber and stroke volume get <em>smaller</em>, and constant valve pressure can end in " +
    "<strong>aortic valve narrowing</strong>. Slide 33 names that <strong>concentric hypertrophy</strong>. " +
    "Note: in the audio the lecturer calls the resistance-training pattern &#8220;eccentric&#8221; while describing thickening with a smaller chamber; " +
    "Slide 33 labels that pattern concentric, and the slide labels are the ones to use.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels compare chronic loads on the left ventricle. On the left, chronic preload from cardiovascular exercise: blood returning stretches the ventricle, and the solid chamber outline is drawn larger than the dashed baseline outline, with the wall only slightly thicker. This is eccentric hypertrophy, volume overload, with increased stroke volume and cardiac output. On the right, chronic afterload from resistance training with the Valsalva maneuver or from hypertension: the wall is drawn much thicker and the solid chamber outline is smaller than the dashed baseline, which is concentric hypertrophy, pressure overload, with reduced stroke volume, and an arrow notes constant valve pressure leading to aortic valve narrowing. Each chamber gently pulses between its baseline and its adapted shape.">
  <style>
    .dg54c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.1; }
    .dg54c-hdr   { font-size: 10px; font-weight: 700; }
    .dg54c-lbl   { font-size: 9.5px; }
    .dg54c-sub   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg54c-base  { fill: none; stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 4 4; }
    .dg54c-wallA { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 9; }
    .dg54c-wallB { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 18; animation: dg54cThick 6s ease-in-out infinite; }
    .dg54c-grow  { animation: dg54cGrow 6s ease-in-out infinite; transform-origin: 152px 148px; }
    .dg54c-shrink{ animation: dg54cShrink 6s ease-in-out infinite; transform-origin: 470px 148px; }
    .dg54c-in    { fill: var(--dg-cool); animation: dg54cFill 6s ease-in-out infinite; }
    .dg54c-squeeze { stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; animation: dg54cPress 6s ease-in-out infinite; }
    @keyframes dg54cGrow { 0%,8% { transform: scale(.84) } 52%,88% { transform: scale(1) } 100% { transform: scale(.84) } }
    @keyframes dg54cShrink { 0%,8% { transform: scale(1.3) } 52%,88% { transform: scale(1) } 100% { transform: scale(1.3) } }
    @keyframes dg54cThick { 0%,8% { stroke-width: 9 } 52%,88% { stroke-width: 18 } 100% { stroke-width: 9 } }
    @keyframes dg54cFill { 0% { opacity: 0; transform: translateX(-46px) } 18% { opacity: 1 } 46% { opacity: 1; transform: translateX(0) } 60%,100% { opacity: 0; transform: translateX(0) } }
    @keyframes dg54cPress { 0%,12% { opacity: .2 } 40%,86% { opacity: 1 } 100% { opacity: .2 } }
  </style>

  <rect x="12" y="26" width="302" height="216" rx="10" class="dg54c-panel"/>
  <text x="24" y="46" class="dg54c-hdr" fill="var(--dg-cool)">CHRONIC PRELOAD &#8226; VOLUME OVERLOAD</text>
  <text x="24" y="60" class="dg54c-sub">cardiovascular exercise; venous return stretches the LV</text>

  <ellipse cx="152" cy="148" rx="46" ry="60" class="dg54c-base"/>
  <g class="dg54c-grow">
    <ellipse cx="152" cy="148" rx="55" ry="71" class="dg54c-wallA"/>
  </g>
  <g class="dg54c-in">
    <circle cx="90" cy="112" r="5"/>
    <circle cx="74" cy="126" r="4"/>
  </g>
  <text x="60" y="100" class="dg54c-sub">blood in</text>

  <text x="24" y="196" class="dg54c-lbl" fill="var(--dg-cool)">ECCENTRIC hypertrophy (Slide 33)</text>
  <text x="24" y="210" class="dg54c-sub">chamber becomes LARGER; elasticity increases</text>
  <text x="24" y="223" class="dg54c-sub">&#8593; stroke volume &#8594; &#8593; cardiac output</text>
  <text x="24" y="236" class="dg54c-sub">dashed outline = where it started</text>

  <rect x="326" y="26" width="302" height="216" rx="10" class="dg54c-panel"/>
  <text x="338" y="46" class="dg54c-hdr" fill="var(--dg-warm)">CHRONIC AFTERLOAD &#8226; PRESSURE OVERLOAD</text>
  <text x="338" y="60" class="dg54c-sub">resistance training + Valsalva; hypertension; stiff vessels</text>

  <ellipse cx="470" cy="148" rx="46" ry="60" class="dg54c-base"/>
  <g class="dg54c-shrink">
    <ellipse cx="470" cy="148" rx="34" ry="48" class="dg54c-wallB"/>
  </g>
  <line x1="404" y1="112" x2="424" y2="128" class="dg54c-squeeze"/>
  <line x1="536" y1="112" x2="516" y2="128" class="dg54c-squeeze"/>
  <line x1="404" y1="184" x2="424" y2="168" class="dg54c-squeeze"/>
  <line x1="536" y1="184" x2="516" y2="168" class="dg54c-squeeze"/>
  <text x="386" y="102" class="dg54c-sub">pressure the LV must overcome</text>

  <text x="338" y="196" class="dg54c-lbl" fill="var(--dg-warm)">CONCENTRIC hypertrophy (Slide 33)</text>
  <text x="338" y="210" class="dg54c-sub">wall thickens INWARD; chamber becomes SMALLER</text>
  <text x="338" y="223" class="dg54c-sub">&#8595; stroke volume, &#8595; cardiac output</text>
  <text x="338" y="236" class="dg54c-sub">constant valve pressure &#8594; aortic valve narrowing</text>

  <rect x="12" y="252" width="616" height="38" rx="8" fill="var(--dg-surface)" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="24" y="268" class="dg54c-hdr">The one-line rule</text>
  <text x="24" y="283" class="dg54c-sub">Volume stretches the chamber out (eccentric, endurance). Pressure squeezes the wall in (concentric, lifting). Preload helps stroke volume; afterload costs it.</text>
</svg>`,
};

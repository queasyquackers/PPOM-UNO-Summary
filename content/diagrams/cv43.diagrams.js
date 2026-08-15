/*
 * cv43 - Cardiac Prevention and Improving Communication
 * (Lecture #43, W. Palmer, M.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The three levels of prevention are positions on a timeline, not a list.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv43-prevention-timeline"] = {
  title: "Where each level of prevention acts",
  caption:
    "One patient walks left to right along the disease timeline while each prevention level lights up as he passes through it. " +
    "<b>Primary</b> acts before any health effect exists - diet, inactivity, tobacco - and the lecturer's example is simply checking the blood pressure of someone who never comes in. " +
    "<b>Secondary</b> is screening that catches disease already present but still silent: two elevated blood pressures, a high cholesterol, treated before the stroke or heart attack. " +
    "<b>Tertiary</b> starts after the diagnosis and aims only at preventing the next event. " +
    "The level you are in dictates what the plan is allowed to say (Slide 3).",
  svg: `
<svg viewBox="0 0 640 268" role="img" aria-label="A cardiovascular disease timeline running left to right with three prevention panels above it. Primary prevention acts while the patient is healthy and targets diet, physical inactivity and tobacco. Secondary prevention screens for disease that is present but still silent, such as two high blood pressure readings or a high cholesterol, and treats it before symptoms. Tertiary prevention begins after a stroke or heart attack has occurred and aims to prevent the next event.">
  <style>
    .dg43a-hd   { font-size: 12.5px; font-weight: 700; letter-spacing: .06em; }
    .dg43a-lbl  { font-size: 11.5px; }
    .dg43a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg43a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg43a-axis { stroke: var(--dg-line); stroke-width: 2.2; stroke-linecap: round; }
    .dg43a-tick { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg43a-pfill { fill: var(--dg-good); }
    .dg43a-sfill { fill: var(--dg-accent); }
    .dg43a-tfill { fill: var(--dg-warm); }
    .dg43a-pstr  { stroke: var(--dg-good); }
    .dg43a-sstr  { stroke: var(--dg-accent); }
    .dg43a-tstr  { stroke: var(--dg-warm); }
    .dg43a-rail  { stroke-width: 5; fill: none; stroke-linecap: round; }

    .dg43a-g1 { animation: dg43aG1 12s linear infinite; }
    .dg43a-g2 { animation: dg43aG2 12s linear infinite; }
    .dg43a-g3 { animation: dg43aG3 12s linear infinite; }
    @keyframes dg43aG1 { 0% { opacity: 1 } 28% { opacity: 1 } 34% { opacity: .3 } 94% { opacity: .3 } 100% { opacity: 1 } }
    @keyframes dg43aG2 { 0% { opacity: .3 } 30% { opacity: .3 } 36% { opacity: 1 } 66% { opacity: 1 } 72% { opacity: .3 } 100% { opacity: .3 } }
    @keyframes dg43aG3 { 0% { opacity: .3 } 68% { opacity: .3 } 74% { opacity: 1 } 98% { opacity: 1 } 100% { opacity: .3 } }

    .dg43a-pt { animation: dg43aWalk 12s linear infinite; }
    @keyframes dg43aWalk { from { transform: translateX(0) } to { transform: translateX(520px) } }
  </style>

  <text x="30" y="20" class="dg43a-sub">one patient, one timeline - the level of prevention is decided by where he is standing</text>

  <g class="dg43a-g1">
    <rect x="30" y="34" width="180" height="106" rx="10" class="dg43a-box"/>
    <rect x="30" y="34" width="180" height="6" rx="3" class="dg43a-pfill"/>
    <text x="44" y="62" class="dg43a-hd dg43a-pfill">PRIMARY</text>
    <text x="44" y="82" class="dg43a-lbl">before health effects</text>
    <text x="44" y="102" class="dg43a-sub">diet - inactivity - tobacco</text>
    <text x="44" y="120" class="dg43a-sub">check the BP of someone</text>
    <text x="44" y="134" class="dg43a-sub">who never sees a doctor</text>
  </g>

  <g class="dg43a-g2">
    <rect x="228" y="34" width="180" height="106" rx="10" class="dg43a-box"/>
    <rect x="228" y="34" width="180" height="6" rx="3" class="dg43a-sfill"/>
    <text x="242" y="62" class="dg43a-hd dg43a-sfill">SECONDARY</text>
    <text x="242" y="82" class="dg43a-lbl">disease present, still silent</text>
    <text x="242" y="102" class="dg43a-sub">screen: hypertension,</text>
    <text x="242" y="116" class="dg43a-sub">hyperlipidemia</text>
    <text x="242" y="134" class="dg43a-sub">treat before the event</text>
  </g>

  <g class="dg43a-g3">
    <rect x="426" y="34" width="180" height="106" rx="10" class="dg43a-box"/>
    <rect x="426" y="34" width="180" height="6" rx="3" class="dg43a-tfill"/>
    <text x="440" y="62" class="dg43a-hd dg43a-tfill">TERTIARY</text>
    <text x="440" y="82" class="dg43a-lbl">after the diagnosis</text>
    <text x="440" y="102" class="dg43a-sub">manage disease to slow</text>
    <text x="440" y="116" class="dg43a-sub">or stop progression</text>
    <text x="440" y="134" class="dg43a-sub">prevent the NEXT event</text>
  </g>

  <line x1="40" y1="182" x2="600" y2="182" class="dg43a-axis"/>
  <polygon points="600,174 618,182 600,190" fill="var(--dg-line)"/>

  <line x1="120" y1="176" x2="120" y2="188" class="dg43a-tick"/>
  <line x1="318" y1="176" x2="318" y2="188" class="dg43a-tick"/>
  <line x1="516" y1="176" x2="516" y2="188" class="dg43a-tick"/>

  <g class="dg43a-g1">
    <line x1="46" y1="160" x2="200" y2="160" class="dg43a-pstr dg43a-rail"/>
  </g>
  <g class="dg43a-g2">
    <line x1="240" y1="160" x2="398" y2="160" class="dg43a-sstr dg43a-rail"/>
  </g>
  <g class="dg43a-g3">
    <line x1="438" y1="160" x2="596" y2="160" class="dg43a-tstr dg43a-rail"/>
  </g>

  <text x="120" y="206" class="dg43a-sub" text-anchor="middle">no diagnosis</text>
  <text x="120" y="220" class="dg43a-sub" text-anchor="middle">risk behaviours only</text>
  <text x="318" y="206" class="dg43a-sub" text-anchor="middle">2 high BP readings,</text>
  <text x="318" y="220" class="dg43a-sub" text-anchor="middle">high cholesterol - no symptoms</text>
  <text x="516" y="206" class="dg43a-sub" text-anchor="middle">stroke or heart attack</text>
  <text x="516" y="220" class="dg43a-sub" text-anchor="middle">has already happened</text>

  <g class="dg43a-pt">
    <circle cx="70" cy="182" r="8" fill="var(--dg-ink)" opacity=".85"/>
    <circle cx="70" cy="182" r="14" fill="none" stroke="var(--dg-ink)" stroke-width="1.2" opacity=".35"/>
  </g>

  <text x="30" y="252" class="dg43a-sub">Same person, three different plans: counsel behaviour - screen and treat early - prevent recurrence.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The note as a single thread: every plan item traces back to data.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv43-note-thread"] = {
  title: "Drawing the line through the note",
  caption:
    "A tracer runs top to bottom through the case note while each connecting link is drawn in turn. " +
    "The lecturer's recap test (Slide 45) is that a reader should be able to draw a line from any plan item back to an assessment, " +
    "and from any assessment back to the subjective or objective data that produced it. " +
    "Here the palpation finding promotes costochondritis to number one, the risk factors are what keep angina on the list, " +
    "and the documented osteopathic structural exam is what licenses the MET recommendation in the plan. " +
    "All content is the Danny Thomas case as documented on Slides 14, 21, 25 and 35.",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="The four sections of a SOAP note stacked vertically for the case patient, with curved arrows on the right showing that history risk factors support the angina entry in the assessment, the tender left ribs on exam promote costochondritis to the number one diagnosis, and every plan item connects back to an assessment.">
  <style>
    .dg43b-hd   { font-size: 11px; font-weight: 700; letter-spacing: .1em; }
    .dg43b-txt  { font-size: 11px; }
    .dg43b-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg43b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg43b-spine{ stroke: var(--dg-line); stroke-width: 3; stroke-linecap: round; }
    .dg43b-s    { fill: var(--dg-cool); }
    .dg43b-o    { fill: var(--dg-accent); }
    .dg43b-a    { fill: var(--dg-warm); }
    .dg43b-p    { fill: var(--dg-good); }
    .dg43b-arc  { fill: none; stroke-width: 2.4; stroke-dasharray: 260; stroke-dashoffset: 0; }
    .dg43b-arc1 { stroke: var(--dg-cool);   animation: dg43bDraw 12s linear infinite; }
    .dg43b-arc2 { stroke: var(--dg-accent); animation: dg43bDraw 12s linear infinite 2.6s; }
    .dg43b-arc3 { stroke: var(--dg-good);   animation: dg43bDraw 12s linear infinite 5.2s; }
    @keyframes dg43bDraw {
      0%   { stroke-dashoffset: 260; opacity: .35 }
      6%   { opacity: 1 }
      18%  { stroke-dashoffset: 0 }
      55%  { stroke-dashoffset: 0; opacity: 1 }
      70%  { opacity: .35 }
      100% { stroke-dashoffset: 0; opacity: .35 }
    }
    .dg43b-run { animation: dg43bRun 12s linear infinite; }
    @keyframes dg43bRun { from { transform: translateY(0) } to { transform: translateY(238px) } }
  </style>

  <line x1="18" y1="30" x2="18" y2="284" class="dg43b-spine"/>
  <g class="dg43b-run">
    <circle cx="18" cy="34" r="6" fill="var(--dg-ink)" opacity=".85"/>
  </g>

  <rect x="34" y="18" width="298" height="62" rx="9" class="dg43b-box"/>
  <text x="46" y="36" class="dg43b-hd dg43b-s">SUBJECTIVE</text>
  <text x="46" y="53" class="dg43b-txt">sharp 8/10 left chest pain, worse with</text>
  <text x="46" y="67" class="dg43b-txt">breathing and moving, after yard work</text>
  <text x="200" y="36" class="dg43b-sub">HTN - 1ppd x 30y - father MI</text>

  <rect x="34" y="90" width="298" height="58" rx="9" class="dg43b-box"/>
  <text x="46" y="108" class="dg43b-hd dg43b-o">OBJECTIVE</text>
  <text x="46" y="125" class="dg43b-txt">BP 140/90 - tender to palpation left ribs</text>
  <text x="46" y="139" class="dg43b-txt">no murmurs - OSE ribs 5-10 inhalation</text>

  <rect x="34" y="158" width="298" height="66" rx="9" class="dg43b-box"/>
  <text x="46" y="176" class="dg43b-hd dg43b-a">ASSESSMENT</text>
  <text x="46" y="193" class="dg43b-txt">1 costochondritis  2 angina  3 pleurisy</text>
  <text x="46" y="209" class="dg43b-sub">plus: hypertension, inactivity, poor diet</text>

  <rect x="34" y="234" width="298" height="56" rx="9" class="dg43b-box"/>
  <text x="46" y="252" class="dg43b-hd dg43b-p">PLAN</text>
  <text x="46" y="269" class="dg43b-txt">DASH diet - 90-150 min/wk aerobic</text>
  <text x="46" y="283" class="dg43b-txt">MET for somatic dysfunction</text>

  <path class="dg43b-arc dg43b-arc1" d="M332 44 C 420 44 420 186 344 190"/>
  <polygon points="352,184 336,190 352,196" fill="var(--dg-cool)"/>
  <text x="432" y="42" class="dg43b-sub">risk factors are the</text>
  <text x="432" y="56" class="dg43b-sub">rationale for angina</text>

  <path class="dg43b-arc dg43b-arc2" d="M332 126 C 400 126 400 172 344 176"/>
  <polygon points="352,170 336,176 352,182" fill="var(--dg-accent)"/>
  <text x="432" y="124" class="dg43b-sub">reproducible tenderness</text>
  <text x="432" y="138" class="dg43b-sub">makes it the number 1</text>

  <path class="dg43b-arc dg43b-arc3" d="M332 200 C 400 200 400 250 344 254"/>
  <polygon points="352,248 336,254 352,260" fill="var(--dg-good)"/>
  <text x="432" y="212" class="dg43b-sub">every order needs a</text>
  <text x="432" y="226" class="dg43b-sub">direct assessment tie-in</text>

  <text x="432" y="282" class="dg43b-sub">no OSE in the objective,</text>
  <text x="432" y="296" class="dg43b-sub">no credit for the OMM plan</text>
</svg>`,
};

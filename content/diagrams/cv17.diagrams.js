window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv17 - Arterial blood pressure regulation.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv17-raas-cascade-jga"] = {
  title: "RAAS as a route through the body",
  caption:
    "Renin, angiotensinogen and ACE are made in three different organs, so this cascade is a journey rather than a list. " +
    "Inside the juxtaglomerular apparatus two independent signals arrive and converge on the granular (JG) cells: " +
    "baroreceptors <em>inside the afferent arteriole</em> sensing a fall in renal perfusion pressure (badge 1), and the " +
    "<strong>macula densa</strong> - a distal-tubule sodium sensor that loops back until it touches the arteriole - sensing low NaCl (badge 2). " +
    "The macula densa only senses; only the granular cells secrete renin. Renin then meets liver-made angiotensinogen already " +
    "circulating in plasma and cleaves it to angiotensin I, which the lecture stresses has no effect until ACE, produced chiefly by " +
    "lung endothelial cells, converts it to angiotensin II. Four AT1 destinations are drawn (vessel wall, adrenal cortex, pituitary, renal tubule); " +
    "the lecture's STAAR-V list adds two more angiotensin II effects that are not drawn here - sympathetic activation and increased thirst - " +
    "and both also raise BP. The two drug interception points are marked because they sit at different places on the route. " +
    "No pressure values appear because this lecture gives none for the cascade (Slides 7, 31, 35, 42).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="The renin-angiotensin cascade drawn as a route. On the left, a zoom into the juxtaglomerular apparatus shows the glomerulus with afferent and efferent arterioles and the distal tubule looping back so the macula densa touches the afferent arteriole. Low renal perfusion pressure reduces afferent arteriolar stretch and low sodium chloride passes the macula densa; both signals converge on the granular cells, which release renin into the blood. Renin cleaves liver-made angiotensinogen into inactive angiotensin one, which travels to the lung where ACE in the endothelium converts it to angiotensin two. Angiotensin two then binds AT1 receptors on the vessel wall, adrenal cortex, pituitary and renal tubule, and every output raises mean arterial pressure, which equals cardiac output times total peripheral resistance.">
  <style>
    .d17a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17a-node  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17a-ttl   { font-size: 11px; font-weight: 700; }
    .d17a-lbl   { font-size: 10px; }
    .d17a-sub   { font-size: 9px; fill: var(--dg-muted); }
    .d17a-mini  { font-size: 8.5px; fill: var(--dg-muted); }
    .d17a-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .d17a-vessel{ fill: none; stroke: var(--dg-line); stroke-width: 11; stroke-linecap: round; }
    .d17a-tube  { fill: none; stroke: var(--dg-line); stroke-width: 8; stroke-linecap: round; }
    .d17a-acc   { fill: var(--dg-accent); }
    .d17a-arrow { fill: none; stroke: var(--dg-muted); stroke-width: 1.6; marker-end: url(#cv17aTip); }
    .d17a-arrowA{ fill: none; stroke: var(--dg-accent); stroke-width: 1.8; marker-end: url(#cv17aTipA); }
    .d17a-arrowW{ fill: none; stroke: var(--dg-warm); stroke-width: 1.6; marker-end: url(#cv17aTipW); }
    .d17a-arrowC{ fill: none; stroke: var(--dg-cool); stroke-width: 1.6; marker-end: url(#cv17aTipC); }
    .d17a-hl    { fill: var(--dg-accent); opacity: .12; }
    .d17a-sig   { opacity: .55; }
    .d17a-fan   { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; opacity: .5; marker-end: url(#cv17aTipA); }
    .d17a-f1 { animation: d17aFire 12s ease-in-out infinite .3s; }
    .d17a-f2 { animation: d17aFire 12s ease-in-out infinite 1.5s; }
    .d17a-f3 { animation: d17aFire 12s ease-in-out infinite 2.6s; }
    .d17a-g1 { animation: d17aGlow 12s ease-in-out infinite 3.9s; }
    .d17a-g2 { animation: d17aGlow 12s ease-in-out infinite 4.9s; }
    .d17a-g3 { animation: d17aGlow 12s ease-in-out infinite 5.9s; }
    .d17a-g4 { animation: d17aGlow 12s ease-in-out infinite 6.9s; }
    .d17a-g5 { animation: d17aGlow 12s ease-in-out infinite 8.0s; }
    .d17a-g6 { animation: d17aGlow 12s ease-in-out infinite 9.0s; }
    .d17a-g7 { animation: d17aGlow 12s ease-in-out infinite 9.3s; }
    .d17a-g8 { animation: d17aGlow 12s ease-in-out infinite 9.6s; }
    .d17a-g9 { animation: d17aGlow 12s ease-in-out infinite 9.9s; }
    .d17a-g10{ animation: d17aGlow 12s ease-in-out infinite 10.6s; }
    .d17a-n1 { animation: d17aFire 12s ease-in-out infinite 8.8s; }
    .d17a-n2 { animation: d17aFire 12s ease-in-out infinite 9.1s; }
    .d17a-n3 { animation: d17aFire 12s ease-in-out infinite 9.4s; }
    .d17a-n4 { animation: d17aFire 12s ease-in-out infinite 9.7s; }
    .d17a-renin { animation: d17aRenin 12s ease-in-out infinite; }
    @keyframes d17aGlow { 0%,4% { opacity: .10 } 9%,17% { opacity: .42 } 26%,100% { opacity: .10 } }
    @keyframes d17aFire { 0%,4% { opacity: .5 } 9%,17% { opacity: 1 } 26%,100% { opacity: .5 } }
    @keyframes d17aRenin {
      0%,19%   { transform: translate(0,0); opacity: 0 }
      23%      { opacity: 1 }
      33%      { transform: translate(100px,-20px); opacity: 1 }
      38%,100% { transform: translate(100px,-20px); opacity: 0 }
    }
  </style>
  <defs>
    <marker id="cv17aTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-muted)"/></marker>
    <marker id="cv17aTipA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-accent)"/></marker>
    <marker id="cv17aTipW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-warm)"/></marker>
    <marker id="cv17aTipC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-cool)"/></marker>
  </defs>

  <rect x="10" y="26" width="196" height="282" rx="12" class="d17a-panel"/>
  <text x="20" y="44" class="d17a-ttl">Juxtaglomerular apparatus</text>

  <path class="d17a-tube" d="M144,120 C 140,140 128,148 110,150 L 80,152 C 62,154 56,132 60,112 L 64,102"/>
  <line class="d17a-vessel" x1="18" y1="88" x2="130" y2="90"/>
  <line class="d17a-vessel" x1="166" y1="112" x2="196" y2="136"/>
  <line x1="30" y1="88" x2="62" y2="88" stroke="var(--dg-warm)" stroke-width="11" stroke-linecap="round" opacity=".4"/>
  <circle cx="150" cy="96" r="24" fill="var(--dg-surface)" stroke="var(--dg-line)" stroke-width="1.5"/>
  <path d="M140,88 c5,-8 15,-6 18,1 c4,7 -3,11 -9,8 c-7,-3 -12,3 -7,9 c4,5 13,4 16,-2" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" opacity=".75"/>
  <text x="14" y="110" class="d17a-sub">afferent</text>
  <text x="156" y="152" class="d17a-sub">efferent</text>
  <text x="100" y="142" class="d17a-sub">distal tubule</text>

  <g class="d17a-sig d17a-f1">
    <path class="d17a-arrowW" d="M64,78 L96,82"/>
    <line x1="46" y1="75" x2="46" y2="81" stroke="var(--dg-warm)" stroke-width="1.4"/>
    <circle cx="46" cy="66" r="8.5" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.6"/>
    <text x="46" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="var(--dg-warm)">1</text>
  </g>

  <g class="d17a-sig d17a-f2">
    <ellipse cx="68" cy="99" rx="9" ry="6" fill="var(--dg-cool)" opacity=".85"/>
    <path class="d17a-arrowC" d="M78,101 L98,95"/>
    <line x1="82" y1="113" x2="74" y2="105" stroke="var(--dg-cool)" stroke-width="1.4"/>
    <circle cx="88" cy="120" r="8.5" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.6"/>
    <text x="88" y="124" text-anchor="middle" font-size="10" font-weight="700" fill="var(--dg-cool)">2</text>
  </g>
  <text x="100" y="124" font-size="9" fill="var(--dg-cool)" font-weight="700">macula densa</text>

  <g class="d17a-sig d17a-f3">
    <circle cx="104" cy="82" r="4.6" class="d17a-acc"/>
    <circle cx="113" cy="82" r="4" class="d17a-acc"/>
    <circle cx="108" cy="95" r="4.2" class="d17a-acc"/>
  </g>
  <text x="98" y="64" class="d17a-lbl" font-weight="700" fill="var(--dg-accent)">JG cells</text>
  <path d="M104,68 L107,77" fill="none" stroke="var(--dg-accent)" stroke-width="1.2" opacity=".8"/>

  <circle cx="22" cy="222" r="8.5" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.6"/>
  <text x="22" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="var(--dg-warm)">1</text>
  <text x="38" y="219" class="d17a-lbl">Low perfusion pressure</text>
  <text x="38" y="232" class="d17a-sub">= less afferent stretch</text>
  <circle cx="22" cy="256" r="8.5" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.6"/>
  <text x="22" y="260" text-anchor="middle" font-size="10" font-weight="700" fill="var(--dg-cool)">2</text>
  <text x="38" y="253" class="d17a-lbl">Low NaCl at macula densa</text>
  <text x="38" y="266" class="d17a-sub">a tubular sodium sensor</text>
  <text x="20" y="290" class="d17a-ttl" fill="var(--dg-accent)">Both converge on JG cells</text>
  <text x="20" y="303" class="d17a-lbl" fill="var(--dg-accent)">&#8594; they release RENIN</text>

  <text x="216" y="38" class="d17a-hdr">RENIN TRAVELS IN THE BLOOD</text>
  <path class="d17a-arrowA" d="M124,70 L212,52"/>
  <g class="d17a-renin">
    <circle cx="110" cy="76" r="3.6" class="d17a-acc"/>
    <circle cx="102" cy="72" r="3" class="d17a-acc"/>
    <circle cx="118" cy="70" r="2.6" class="d17a-acc"/>
  </g>

  <rect x="216" y="46" width="78" height="44" rx="9" class="d17a-node"/>
  <rect x="216" y="46" width="78" height="44" rx="9" class="d17a-hl d17a-g1"/>
  <text x="255" y="68" text-anchor="middle" class="d17a-ttl">Renin</text>
  <text x="255" y="82" text-anchor="middle" class="d17a-sub">enzyme</text>
  <path class="d17a-arrow" d="M298,68 L318,68"/>

  <rect x="322" y="46" width="112" height="44" rx="9" class="d17a-node"/>
  <rect x="322" y="46" width="112" height="44" rx="9" class="d17a-hl d17a-g2"/>
  <text x="378" y="68" text-anchor="middle" class="d17a-lbl" font-weight="700">Angiotensinogen</text>
  <text x="378" y="82" text-anchor="middle" class="d17a-sub">made by the liver</text>
  <path class="d17a-arrow" d="M438,68 L458,68"/>

  <rect x="462" y="46" width="100" height="44" rx="9" class="d17a-node"/>
  <rect x="462" y="46" width="100" height="44" rx="9" class="d17a-hl d17a-g3"/>
  <text x="512" y="68" text-anchor="middle" class="d17a-lbl" font-weight="700">Angiotensin I</text>
  <text x="512" y="82" text-anchor="middle" class="d17a-sub">inactive</text>
  <path class="d17a-arrow" d="M566,68 L604,68 L604,106"/>
  <text x="570" y="60" class="d17a-mini">to the lung</text>

  <rect x="452" y="110" width="200" height="52" rx="10" class="d17a-node"/>
  <rect x="452" y="110" width="200" height="52" rx="10" class="d17a-hl d17a-g4"/>
  <path d="M474,122 C 462,126 458,140 462,150 C 466,156 474,154 474,146 Z" fill="var(--dg-panel)" stroke="var(--dg-line)" stroke-width="1.2"/>
  <path d="M482,122 C 494,126 498,140 494,150 C 490,156 482,154 482,146 Z" fill="var(--dg-panel)" stroke="var(--dg-line)" stroke-width="1.2"/>
  <line x1="478" y1="118" x2="478" y2="128" stroke="var(--dg-line)" stroke-width="1.6"/>
  <text x="500" y="132" class="d17a-ttl">ACE &#8212; lung endothelium</text>
  <text x="500" y="148" class="d17a-sub">converts angiotensin I to II</text>

  <path class="d17a-arrowA" d="M448,136 L412,136"/>
  <line x1="430" y1="122" x2="430" y2="150" stroke="var(--dg-warm)" stroke-width="3"/>
  <text x="430" y="104" text-anchor="middle" class="d17a-mini" fill="var(--dg-warm)">ACE inhibitors</text>

  <rect x="232" y="110" width="176" height="52" rx="10" class="d17a-node"/>
  <rect x="232" y="110" width="176" height="52" rx="10" class="d17a-hl d17a-g5"/>
  <text x="320" y="134" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-accent)">Angiotensin II</text>
  <text x="320" y="150" text-anchor="middle" class="d17a-sub">most potent vasoconstrictor</text>

  <path d="M320,162 L320,168 M266,168 L602,168" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" opacity=".5"/>
  <path class="d17a-fan d17a-n1" d="M266,168 L266,180"/>
  <path class="d17a-fan d17a-n2" d="M378,168 L378,180"/>
  <path class="d17a-fan d17a-n3" d="M490,168 L490,180"/>
  <path class="d17a-fan d17a-n4" d="M602,168 L602,180"/>

  <rect x="216" y="182" width="100" height="60" rx="9" class="d17a-node"/>
  <rect x="216" y="182" width="100" height="60" rx="9" class="d17a-hl d17a-g6"/>
  <text x="266" y="197" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--dg-accent)">AT1 receptor</text>
  <text x="266" y="213" text-anchor="middle" class="d17a-lbl" font-weight="700">Vessel wall</text>
  <text x="266" y="227" text-anchor="middle" class="d17a-sub">vasoconstriction</text>
  <text x="266" y="239" text-anchor="middle" font-size="9" fill="var(--dg-good)">TPR &#8593;</text>

  <rect x="328" y="182" width="100" height="60" rx="9" class="d17a-node"/>
  <rect x="328" y="182" width="100" height="60" rx="9" class="d17a-hl d17a-g7"/>
  <text x="378" y="197" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--dg-accent)">AT1 receptor</text>
  <text x="378" y="213" text-anchor="middle" class="d17a-lbl" font-weight="700">Adrenal cortex</text>
  <text x="378" y="227" text-anchor="middle" class="d17a-sub">aldosterone: Na+</text>
  <text x="378" y="239" text-anchor="middle" font-size="9" fill="var(--dg-good)">CO &#8593;</text>

  <rect x="440" y="182" width="100" height="60" rx="9" class="d17a-node"/>
  <rect x="440" y="182" width="100" height="60" rx="9" class="d17a-hl d17a-g8"/>
  <text x="490" y="197" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--dg-accent)">AT1 receptor</text>
  <text x="490" y="213" text-anchor="middle" class="d17a-lbl" font-weight="700">Pituitary</text>
  <text x="490" y="227" text-anchor="middle" class="d17a-sub">ADH: water kept</text>
  <text x="490" y="239" text-anchor="middle" font-size="9" fill="var(--dg-good)">CO &#8593;</text>

  <rect x="552" y="182" width="100" height="60" rx="9" class="d17a-node"/>
  <rect x="552" y="182" width="100" height="60" rx="9" class="d17a-hl d17a-g9"/>
  <text x="602" y="197" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--dg-accent)">AT1 receptor</text>
  <text x="602" y="213" text-anchor="middle" class="d17a-lbl" font-weight="700">Renal tubule</text>
  <text x="602" y="227" text-anchor="middle" class="d17a-sub">direct Na+/water</text>
  <text x="602" y="239" text-anchor="middle" font-size="9" fill="var(--dg-good)">CO &#8593;</text>

  <path class="d17a-arrow" d="M266,242 L266,256"/>
  <path class="d17a-arrow" d="M378,242 L378,256"/>
  <path class="d17a-arrow" d="M490,242 L490,256"/>
  <path class="d17a-arrow" d="M602,242 L602,256"/>

  <rect x="216" y="258" width="436" height="44" rx="10" class="d17a-node"/>
  <rect x="216" y="258" width="436" height="44" rx="10" class="d17a-hl d17a-g10"/>
  <text x="434" y="280" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-good)">MAP = CO &#215; TPR &#8593;</text>
  <text x="434" y="295" text-anchor="middle" class="d17a-sub">more volume &#8594; more venous return &#8594; CO &#8593;; arteriolar constriction &#8594; TPR &#8593;</text>
  <text x="216" y="315" class="d17a-mini" fill="var(--dg-warm)">Two drug interception points: ACE inhibitors in the lung; ARBs at the AT1 receptor.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv17-baroreflex-loop"] = {
  title: "Baroreceptor reflex, both directions",
  caption:
    "The reflex is encoded in a rate, not a state: wall stretch sets baroreceptor firing frequency, so the two indicator dots " +
    "blink fast for the stretched wall and slowly for the slack wall (a visual stand-in - this lecture gives no firing rates). " +
    "The wiring is the lecture's: carotid sinus afferents run in CN IX, aortic arch afferents in CN X, both to the nucleus tractus " +
    "solitarius (NTS) in the medulla, whose efferents reach the heart, vascular smooth muscle and the adrenal medulla (Slide 11 " +
    "lists the adrenal medulla as an effector even though it is not on the lecture's figure). Both directions are drawn at once and the " +
    "highlight alternates between them every seven seconds rather than using a toggle, because a touch screen has no hover and the " +
    "diagram must still read when frozen. Follow the return arrow: the effector response changes wall stretch again, which is what makes " +
    "this a self-terminating loop instead of a one-way chain - the same loop behind the vagal maneuvers, the vagotomy question, and the " +
    "reflex bradycardia of the Cushing response (Slides 9-13, 16).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A closed baroreceptor reflex loop. An arterial wall widens and narrows; two firing rows show that a stretched wall fires fast and a slack wall fires slowly. Afferents from the carotid sinus travel in cranial nerve nine and from the aortic arch in cranial nerve ten to the nucleus tractus solitarius in the medulla, whose efferents reach the heart, vascular smooth muscle and adrenal medulla. Two response tracks are shown: when blood pressure is high, parasympathetic output rises and sympathetic falls, lowering heart rate, contractility and vessel tone so cardiac output and resistance fall and pressure comes back down; when blood pressure is low, sympathetic output rises and parasympathetic falls, raising heart rate, contractility and vasoconstriction so pressure rises. A return arrow closes the loop back to the arterial wall.">
  <style>
    .d17b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17b-node  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17b-ttl   { font-size: 11px; font-weight: 700; }
    .d17b-lbl   { font-size: 9.5px; }
    .d17b-sub   { font-size: 9px; fill: var(--dg-muted); }
    .d17b-mini  { font-size: 8.5px; fill: var(--dg-muted); }
    .d17b-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .d17b-wall  { stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; opacity: .8; }
    .d17b-tick  { stroke: var(--dg-ink); stroke-width: 2; }
    .d17b-base  { stroke: var(--dg-line); stroke-width: 1.4; }
    .d17b-arrow { fill: none; stroke: var(--dg-muted); stroke-width: 1.7; marker-end: url(#cv17bTip); }
    .d17b-hl    { opacity: .12; }
    .d17b-warm  { fill: var(--dg-warm); }
    .d17b-cool  { fill: var(--dg-cool); }
    .d17b-top   { animation: d17bTop 14s ease-in-out infinite; }
    .d17b-bot   { animation: d17bBot 14s ease-in-out infinite; }
    .d17b-pA    { animation: d17bPhase 14s ease-in-out infinite; }
    .d17b-pB    { animation: d17bPhase 14s ease-in-out infinite 7s; }
    .d17b-blipA { animation: d17bBlink .5s ease-in-out infinite; }
    .d17b-blipB { animation: d17bBlink 1.5s ease-in-out infinite; }
    .d17b-cell  { animation: d17bFlow 3.2s linear infinite; }
    @keyframes d17bTop { 0%,45% { transform: translateY(-6px) } 52%,95% { transform: translateY(6px) } 100% { transform: translateY(-6px) } }
    @keyframes d17bBot { 0%,45% { transform: translateY(6px) } 52%,95% { transform: translateY(-6px) } 100% { transform: translateY(6px) } }
    @keyframes d17bPhase { 0%,3% { opacity: .10 } 7%,45% { opacity: .34 } 52%,100% { opacity: .10 } }
    @keyframes d17bBlink { 0%,35% { opacity: 1 } 55%,100% { opacity: .15 } }
    @keyframes d17bFlow { 0% { transform: translateX(0); opacity: 0 } 12% { opacity: .9 } 80% { opacity: .9 } 100% { transform: translateX(168px); opacity: 0 } }
  </style>
  <defs>
    <marker id="cv17bTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-muted)"/></marker>
  </defs>

  <text x="12" y="22" class="d17b-hdr">SENSOR: ARTERIAL WALL</text>
  <text x="268" y="22" class="d17b-hdr">CONTROL CENTER</text>
  <text x="412" y="22" class="d17b-hdr">RESPONSE &#8212; BOTH DIRECTIONS</text>

  <rect x="12" y="30" width="228" height="74" rx="10" class="d17b-panel"/>
  <g class="d17b-top"><line class="d17b-wall" x1="22" y1="52" x2="230" y2="52"/></g>
  <g class="d17b-bot"><line class="d17b-wall" x1="22" y1="82" x2="230" y2="82"/></g>
  <g class="d17b-cell">
    <circle cx="40" cy="67" r="4" fill="var(--dg-accent)"/>
    <circle cx="24" cy="60" r="3" fill="var(--dg-accent)"/>
    <circle cx="26" cy="74" r="3" fill="var(--dg-accent)"/>
  </g>
  <text x="22" y="99" class="d17b-mini">carotid sinus &#8594; CN IX</text>
  <text x="140" y="99" class="d17b-mini">aortic arch &#8594; CN X</text>

  <rect x="12" y="110" width="228" height="42" rx="8" fill="var(--dg-warm)" class="d17b-hl d17b-pA"/>
  <text x="16" y="130" font-size="9.5" font-weight="700" fill="var(--dg-warm)">stretch &#8593;</text>
  <text x="16" y="143" class="d17b-mini">fast firing</text>
  <circle cx="86" cy="135" r="4.5" class="d17b-warm d17b-blipA"/>
  <line class="d17b-base" x1="96" y1="142" x2="234" y2="142"/>
  <path class="d17b-tick" d="M100,142 v-14 M112,142 v-14 M124,142 v-14 M136,142 v-14 M148,142 v-14 M160,142 v-14 M172,142 v-14 M184,142 v-14 M196,142 v-14 M208,142 v-14 M220,142 v-14 M232,142 v-14"/>

  <rect x="12" y="156" width="228" height="42" rx="8" fill="var(--dg-cool)" class="d17b-hl d17b-pB"/>
  <text x="16" y="176" font-size="9.5" font-weight="700" fill="var(--dg-cool)">stretch &#8595;</text>
  <text x="16" y="189" class="d17b-mini">slow firing</text>
  <circle cx="86" cy="181" r="4.5" class="d17b-cool d17b-blipB"/>
  <line class="d17b-base" x1="96" y1="188" x2="234" y2="188"/>
  <path class="d17b-tick" d="M100,188 v-14 M132,188 v-14 M164,188 v-14 M196,188 v-14 M228,188 v-14"/>

  <path class="d17b-arrow" d="M244,152 L276,138"/>
  <text x="244" y="124" class="d17b-mini">afferent</text>

  <rect x="284" y="96" width="110" height="64" rx="12" class="d17b-node"/>
  <text x="339" y="122" text-anchor="middle" font-size="15" font-weight="700" fill="var(--dg-accent)">NTS</text>
  <text x="339" y="137" text-anchor="middle" class="d17b-sub">nucleus tractus</text>
  <text x="339" y="149" text-anchor="middle" class="d17b-sub">solitarius, medulla</text>
  <path class="d17b-arrow" d="M339,160 L339,176"/>

  <rect x="272" y="180" width="128" height="88" rx="10" class="d17b-panel"/>
  <text x="282" y="198" font-size="8.5" font-weight="700" fill="var(--dg-accent)" letter-spacing=".07em">EFFECTORS</text>
  <circle cx="284" cy="213" r="3" fill="var(--dg-accent)"/>
  <text x="292" y="217" class="d17b-sub">heart: rate + force</text>
  <circle cx="284" cy="233" r="3" fill="var(--dg-accent)"/>
  <text x="292" y="237" class="d17b-sub">vascular smooth muscle</text>
  <circle cx="284" cy="253" r="3" fill="var(--dg-accent)"/>
  <text x="292" y="257" class="d17b-sub">adrenal medulla</text>

  <path class="d17b-arrow" d="M394,118 L408,80"/>
  <path class="d17b-arrow" d="M394,142 L408,198"/>

  <rect x="412" y="34" width="240" height="112" rx="10" class="d17b-node"/>
  <rect x="412" y="34" width="240" height="112" rx="10" fill="var(--dg-warm)" class="d17b-hl d17b-pA"/>
  <text x="424" y="56" class="d17b-ttl" fill="var(--dg-warm)">BP &#8593;: more stretch, faster firing</text>
  <text x="424" y="74" class="d17b-lbl">parasympathetic &#8593;, sympathetic &#8595;</text>
  <text x="424" y="90" class="d17b-sub">more ACh, less NE</text>
  <text x="424" y="108" class="d17b-sub">HR &#8595;, contractility &#8595;, vasodilation</text>
  <text x="424" y="128" class="d17b-lbl" font-weight="700" fill="var(--dg-good)">CO &#8595;, TPR &#8595; &#8594; BP falls back</text>

  <rect x="412" y="156" width="240" height="112" rx="10" class="d17b-node"/>
  <rect x="412" y="156" width="240" height="112" rx="10" fill="var(--dg-cool)" class="d17b-hl d17b-pB"/>
  <text x="424" y="178" class="d17b-ttl" fill="var(--dg-cool)">BP &#8595;: less stretch, slower firing</text>
  <text x="424" y="196" class="d17b-lbl">sympathetic &#8593;, parasympathetic &#8595;</text>
  <text x="424" y="212" class="d17b-sub">more NE, less ACh</text>
  <text x="424" y="230" class="d17b-sub">HR &#8593;, contractility &#8593;, vasoconstriction</text>
  <text x="424" y="250" class="d17b-lbl" font-weight="700" fill="var(--dg-good)">CO &#8593;, TPR &#8593; &#8594; BP rises</text>

  <path class="d17b-arrow" d="M640,272 L640,296 L70,296 L70,204"/>
  <text x="180" y="290" class="d17b-sub">the corrected pressure re-stretches the wall &#8212; the loop closes</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv17-cushing-stacked-reflexes"] = {
  title: "Cushing: two reflexes, in order",
  caption:
    "The counterintuitive part of the Cushing response is purely temporal, so both reflexes share one clock. " +
    "Reflex 1 (steps 1-4) is the CNS ischemic response: rising intracranial pressure squeezes cerebral arterioles, cerebral blood flow falls, " +
    "CO2 accumulates and pH drops, the vasomotor center is excited, and powerful systemic vasoconstriction raises the pressure. " +
    "Only after that hypertension exists does reflex 2 begin (steps 5-6): the aortic arch and carotid sinus baroreceptors, now over-stretched, " +
    "fire faster and drive vagal output that slows the heart. Watch the strip - cerebral flow falls at the same moment systemic pressure climbs " +
    "(opposite directions, same instant), and the heart-rate spikes only spread apart after the dashed line. " +
    "The bradycardia is therefore a downstream answer to the hypertension, not a direct effect of the brain injury, which is the lecturer's point. " +
    "The values 200/110 mmHg and 42/min are this lecture's own practice vignette; the traces are schematic because the lecture calibrates nothing else (Slides 19-20).",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="The Cushing response staged in time. On the left, six numbered steps: rising intracranial pressure squeezes cerebral arterioles; cerebral blood flow falls and ischemia raises CO2 and lowers pH; the vasomotor center is excited and drives powerful systemic vasoconstriction; systemic blood pressure rises. Only then does reflex two begin: the aortic arch and carotid sinus baroreceptors are over-stretched and fire faster, and rising vagal output produces bradycardia. On the right, a vitals strip on one clock shows cerebral blood flow falling while systemic blood pressure rises to about 200 over 110, and only after a dashed line marking where reflex two begins do the heart-rate spikes spread apart to about 42 per minute, with respiration becoming slow and shallow.">
  <style>
    .d17c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17c-step  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .d17c-ttl   { font-size: 10px; font-weight: 700; }
    .d17c-sub   { font-size: 9px; fill: var(--dg-muted); }
    .d17c-mini  { font-size: 8.5px; fill: var(--dg-muted); }
    .d17c-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .d17c-num   { font-size: 10px; font-weight: 700; }
    .d17c-tr    { fill: none; stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .d17c-arrow { fill: none; stroke: var(--dg-muted); stroke-width: 1.6; marker-end: url(#cv17cTip); }
    .d17c-hl    { opacity: .12; }
    .d17c-cover { fill: var(--dg-panel); opacity: .72; transform: translateX(242px); animation: d17cSweep 11s linear infinite; }
    .d17c-play  { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .8; transform: translateX(242px); animation: d17cSweep 11s linear infinite; }
    .d17c-squ1  { animation: d17cSqueezeA 11s ease-in-out infinite; }
    .d17c-squ2  { animation: d17cSqueezeB 11s ease-in-out infinite; }
    .d17c-s1 { animation: d17cLit 11s ease-in-out infinite .4s; }
    .d17c-s2 { animation: d17cLit 11s ease-in-out infinite 1.6s; }
    .d17c-s3 { animation: d17cLit 11s ease-in-out infinite 2.8s; }
    .d17c-s4 { animation: d17cLit 11s ease-in-out infinite 4.0s; }
    .d17c-s5 { animation: d17cLit 11s ease-in-out infinite 5.6s; }
    .d17c-s6 { animation: d17cLit 11s ease-in-out infinite 7.0s; }
    @keyframes d17cSweep { 0% { transform: translateX(0) } 90%,100% { transform: translateX(242px) } }
    @keyframes d17cLit { 0%,3% { opacity: .10 } 7%,20% { opacity: .45 } 30%,100% { opacity: .10 } }
    @keyframes d17cSqueezeA { 0% { transform: translateY(0) } 30%,100% { transform: translateY(4px) } }
    @keyframes d17cSqueezeB { 0% { transform: translateY(0) } 30%,100% { transform: translateY(-4px) } }
  </style>
  <defs>
    <marker id="cv17cTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-muted)"/></marker>
    <clipPath id="cv17cClip"><rect x="316" y="28" width="336" height="266" rx="10"/></clipPath>
  </defs>

  <text x="12" y="22" class="d17c-hdr">REFLEX 1 &#8212; CNS ISCHEMIC RESPONSE</text>

  <rect x="12" y="30" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="30" width="288" height="34" rx="8" fill="var(--dg-warm)" class="d17c-hl d17c-s1"/>
  <circle cx="30" cy="47" r="9" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.5"/>
  <text x="30" y="51" text-anchor="middle" class="d17c-num" fill="var(--dg-warm)">1</text>
  <text x="48" y="45" class="d17c-ttl">Intracranial pressure rises</text>
  <text x="48" y="58" class="d17c-sub">cerebral arterioles squeezed</text>
  <g class="d17c-squ1"><line x1="214" y1="42" x2="266" y2="42" stroke="var(--dg-ink)" stroke-width="3" stroke-linecap="round" opacity=".75"/></g>
  <g class="d17c-squ2"><line x1="214" y1="54" x2="266" y2="54" stroke="var(--dg-ink)" stroke-width="3" stroke-linecap="round" opacity=".75"/></g>
  <path class="d17c-arrow" d="M30,64 L30,70"/>

  <rect x="12" y="72" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="72" width="288" height="34" rx="8" fill="var(--dg-warm)" class="d17c-hl d17c-s2"/>
  <circle cx="30" cy="89" r="9" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.5"/>
  <text x="30" y="93" text-anchor="middle" class="d17c-num" fill="var(--dg-warm)">2</text>
  <text x="48" y="87" class="d17c-ttl">Cerebral blood flow falls</text>
  <text x="48" y="100" class="d17c-sub">ischemia: CO2 accumulates, pH drops</text>
  <path class="d17c-arrow" d="M30,106 L30,112"/>

  <rect x="12" y="114" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="114" width="288" height="34" rx="8" fill="var(--dg-warm)" class="d17c-hl d17c-s3"/>
  <circle cx="30" cy="131" r="9" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.5"/>
  <text x="30" y="135" text-anchor="middle" class="d17c-num" fill="var(--dg-warm)">3</text>
  <text x="48" y="129" class="d17c-ttl">Vasomotor center excited</text>
  <text x="48" y="142" class="d17c-sub">powerful systemic vasoconstriction</text>
  <path class="d17c-arrow" d="M30,148 L30,154"/>

  <rect x="12" y="156" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="156" width="288" height="34" rx="8" fill="var(--dg-warm)" class="d17c-hl d17c-s4"/>
  <circle cx="30" cy="173" r="9" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="1.5"/>
  <text x="30" y="177" text-anchor="middle" class="d17c-num" fill="var(--dg-warm)">4</text>
  <text x="48" y="171" class="d17c-ttl" fill="var(--dg-warm)">SYSTEMIC BP RISES</text>
  <text x="48" y="184" class="d17c-sub">reflex 1 has now created the hypertension</text>

  <text x="12" y="208" class="d17c-hdr" fill="var(--dg-cool)">REFLEX 2 &#8212; STARTS ONLY NOW</text>

  <rect x="12" y="216" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="216" width="288" height="34" rx="8" fill="var(--dg-cool)" class="d17c-hl d17c-s5"/>
  <circle cx="30" cy="233" r="9" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.5"/>
  <text x="30" y="237" text-anchor="middle" class="d17c-num" fill="var(--dg-cool)">5</text>
  <text x="48" y="231" class="d17c-ttl">Baroreceptors over-stretched</text>
  <text x="48" y="244" class="d17c-sub">aortic arch + carotid sinus fire faster</text>
  <path class="d17c-arrow" d="M30,250 L30,256"/>

  <rect x="12" y="258" width="288" height="34" rx="8" class="d17c-step"/>
  <rect x="12" y="258" width="288" height="34" rx="8" fill="var(--dg-cool)" class="d17c-hl d17c-s6"/>
  <circle cx="30" cy="275" r="9" fill="var(--dg-surface)" stroke="var(--dg-cool)" stroke-width="1.5"/>
  <text x="30" y="279" text-anchor="middle" class="d17c-num" fill="var(--dg-cool)">6</text>
  <text x="48" y="273" class="d17c-ttl" fill="var(--dg-cool)">Vagal output &#8593; &#8594; BRADYCARDIA</text>
  <text x="48" y="286" class="d17c-sub">the slow heart answers the hypertension</text>

  <text x="12" y="311" class="d17c-sub">Cushing triad: hypertension + bradycardia + respiratory depression</text>
  <text x="612" y="311" class="d17c-mini">time &#8594;</text>

  <text x="316" y="22" class="d17c-hdr">ONE CLOCK</text>
  <text x="524" y="22" class="d17c-mini" fill="var(--dg-cool)">reflex 2 begins here</text>
  <rect x="316" y="30" width="336" height="262" rx="10" class="d17c-panel"/>

  <text x="322" y="70" class="d17c-mini" fill="var(--dg-cool)">cerebral flow &#8595;</text>
  <path class="d17c-tr" stroke="var(--dg-cool)" d="M404,66 L446,66 C 468,66 476,92 500,94 L644,96"/>

  <text x="322" y="146" class="d17c-mini" fill="var(--dg-warm)">systemic BP &#8593;</text>
  <path class="d17c-tr" stroke="var(--dg-warm)" d="M404,158 L452,158 C 476,158 480,130 508,128 L644,128"/>
  <text x="576" y="120" class="d17c-mini" fill="var(--dg-warm)">200/110 mmHg</text>

  <text x="322" y="214" class="d17c-mini">heart rate &#8595;</text>
  <line x1="404" y1="228" x2="644" y2="228" stroke="var(--dg-line)" stroke-width="1.4"/>
  <path class="d17c-tr" stroke="var(--dg-ink)" d="M408,228 L411,204 L414,228 M424,228 L427,204 L430,228 M440,228 L443,204 L446,228 M456,228 L459,204 L462,228 M472,228 L475,204 L478,228 M488,228 L491,204 L494,228 M504,228 L507,204 L510,228 M534,228 L537,204 L540,228 M568,228 L571,204 L574,228 M602,228 L605,204 L608,228 M636,228 L639,204 L642,228"/>
  <text x="576" y="200" class="d17c-mini" fill="var(--dg-cool)">42 / min</text>

  <text x="322" y="272" class="d17c-mini">respiration &#8595;</text>
  <path class="d17c-tr" stroke="var(--dg-muted)" d="M404,274 q8,-14 16,0 q8,14 16,0 q8,-14 16,0 q8,14 16,0 q8,-14 16,0 q8,14 16,0 q8,-14 16,0 L516,274 L536,274 q10,-7 20,0 L596,274 q10,-7 20,0 L644,274"/>

  <line x1="520" y1="26" x2="520" y2="292" stroke="var(--dg-cool)" stroke-width="1.4" stroke-dasharray="5 4" opacity=".85"/>

  <g clip-path="url(#cv17cClip)">
    <rect class="d17c-cover" x="404" y="34" width="242" height="256"/>
    <line class="d17c-play" x1="404" y1="34" x2="404" y2="290"/>
  </g>
</svg>`,
};

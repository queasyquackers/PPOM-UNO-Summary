/*
 * cv35 - Antihypertensive Agents Part 1: Renin-Angiotensin System Antagonists
 * (Lecture #35, L. Goldstein, Pharm.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Three independent switches that turn on renin secretion (Slide 13).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv35-renin-triggers"] = {
  title: "Three switches that release renin",
  caption:
    "Renin secretion has three independent triggers, and each fires in turn as the sweep runs. " +
    "(1) Renal <b>hypoperfusion</b> from hypotension or hypovolemia, sensed by baroreceptors in the wall of the <b>afferent arteriole</b> &#8212; the lecturer calls hypoperfusion the key event. " +
    "(2) Cardiac and arterial baroreceptors plus circulating catecholamines acting on <b>beta-1 receptors of the juxtaglomerular apparatus</b>. " +
    "(3) <b>Reduced NaCl delivery to the macula densa</b>. " +
    "Any one of them is enough; they do not have to act together. Once renin is out, the cascade below it is fixed: angiotensinogen to angiotensin I to angiotensin II (Slides 13, 26).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three input boxes on the left feed arrows into a juxtaglomerular cell in the centre. The inputs are renal hypoperfusion sensed by afferent arteriolar baroreceptors, sympathetic catecholamines acting on beta-one receptors, and reduced sodium chloride delivery to the macula densa. Each lights up in turn, and renin granules then travel from the juxtaglomerular cell to the right, where angiotensinogen is converted to angiotensin one and then angiotensin two.">
  <style>
    .dg35a-lbl  { font-size: 12px; font-weight: 700; }
    .dg35a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg35a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg35a-arw  { stroke: var(--dg-accent); stroke-width: 2.6; fill: none; stroke-linecap: round; }
    .dg35a-head { fill: var(--dg-accent); }
    .dg35a-cell { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.4; }
    .dg35a-num  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg35a-cas  { font-size: 11.5px; }

    .dg35a-t1 { animation: dg35aFire 7s ease-in-out infinite; }
    .dg35a-t2 { animation: dg35aFire 7s ease-in-out infinite .55s; }
    .dg35a-t3 { animation: dg35aFire 7s ease-in-out infinite 1.1s; }
    @keyframes dg35aFire { 0%, 4% { opacity: .38 } 12%, 44% { opacity: 1 } 60%, 100% { opacity: .38 } }

    .dg35a-g1 { animation: dg35aOut 7s linear infinite 1.7s; }
    .dg35a-g2 { animation: dg35aOut 7s linear infinite 2.1s; }
    .dg35a-g3 { animation: dg35aOut 7s linear infinite 2.5s; }
    @keyframes dg35aOut {
      0%   { transform: translateX(0);    opacity: 0 }
      12%  { opacity: 1 }
      64%  { opacity: 1 }
      100% { transform: translateX(66px); opacity: 0 }
    }

    .dg35a-c1 { animation: dg35aStep 7s linear infinite 2.4s; }
    .dg35a-c2 { animation: dg35aStep 7s linear infinite 3.1s; }
    @keyframes dg35aStep { 0%, 6% { opacity: .35 } 16%, 100% { opacity: 1 } }
  </style>

  <text x="12" y="22" class="dg35a-lbl">Stimuli for renin secretion</text>
  <text x="452" y="22" class="dg35a-lbl">Cascade</text>

  <g class="dg35a-t1">
    <rect x="12" y="44" width="252" height="50" rx="9" class="dg35a-box"/>
    <text x="24" y="64" class="dg35a-num">1</text>
    <text x="40" y="64" class="dg35a-lbl">Renal hypoperfusion</text>
    <text x="40" y="82" class="dg35a-sub">hypotension / hypovolemia &#8594; afferent</text>
    <text x="40" y="94" class="dg35a-sub">arteriolar wall baroreceptors</text>
    <path class="dg35a-arw" d="M268 70 H302"/>
    <polygon points="302,63 318,70 302,77" class="dg35a-head"/>
  </g>

  <g class="dg35a-t2">
    <rect x="12" y="110" width="252" height="50" rx="9" class="dg35a-box"/>
    <text x="24" y="130" class="dg35a-num">2</text>
    <text x="40" y="130" class="dg35a-lbl">Sympathetic drive</text>
    <text x="40" y="148" class="dg35a-sub">cardiac / arterial baroreceptors and</text>
    <text x="40" y="160" class="dg35a-sub">catecholamines &#8594; beta-1 on the JG cell</text>
    <path class="dg35a-arw" d="M268 136 H302"/>
    <polygon points="302,129 318,136 302,143" class="dg35a-head"/>
  </g>

  <g class="dg35a-t3">
    <rect x="12" y="176" width="252" height="50" rx="9" class="dg35a-box"/>
    <text x="24" y="196" class="dg35a-num">3</text>
    <text x="40" y="196" class="dg35a-lbl">Low NaCl at macula densa</text>
    <text x="40" y="214" class="dg35a-sub">reduced salt delivery to the</text>
    <text x="40" y="226" class="dg35a-sub">macula densa cells</text>
    <path class="dg35a-arw" d="M268 202 H302"/>
    <polygon points="302,195 318,202 302,209" class="dg35a-head"/>
  </g>

  <circle cx="368" cy="136" r="44" class="dg35a-cell"/>
  <text x="368" y="128" class="dg35a-lbl" text-anchor="middle">JG</text>
  <text x="368" y="146" class="dg35a-sub" text-anchor="middle">apparatus</text>
  <text x="368" y="200" class="dg35a-sub" text-anchor="middle">renin release</text>

  <g class="dg35a-g1"><circle cx="404" cy="118" r="5" fill="var(--dg-accent)"/></g>
  <g class="dg35a-g2"><circle cx="404" cy="136" r="5" fill="var(--dg-accent)"/></g>
  <g class="dg35a-g3"><circle cx="404" cy="154" r="5" fill="var(--dg-accent)"/></g>

  <text x="452" y="66"  class="dg35a-cas" font-weight="700">Renin</text>
  <text x="452" y="96"  class="dg35a-cas">Angiotensinogen</text>
  <text x="452" y="118" class="dg35a-sub">&#8595;</text>
  <text x="452" y="142" class="dg35a-cas dg35a-c1">Angiotensin I</text>
  <text x="452" y="164" class="dg35a-sub dg35a-c1">&#8595; ACE</text>
  <text x="452" y="188" class="dg35a-cas dg35a-c2" font-weight="700">Angiotensin II</text>
  <text x="452" y="212" class="dg35a-sub dg35a-c2">vasoconstriction</text>
  <text x="452" y="226" class="dg35a-sub dg35a-c2">aldosterone release</text>

  <text x="12" y="256" class="dg35a-sub">Each trigger acts on its own &#8212; hypoperfusion is the key event the lecturer stresses (Slide 13).</text>
  <text x="12" y="274" class="dg35a-sub">Any drop in blood pressure a drug causes will switch renin on: that is the compensatory response (Slide 10).</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Where each of the three RAS inhibitor classes cuts the chain.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv35-raas-block-points"] = {
  title: "Three places to break the chain",
  caption:
    "The upper lane is the pressor cascade; the lower lane is the reason ACE inhibitors and ARBs are not the same drug. " +
    "The moving token is substrate travelling the chain, and each block marker pulses in turn: the <b>direct renin inhibitor (aliskiren)</b> stops angiotensinogen reaching renin's active site, the <b>ACE inhibitor</b> stops angiotensin I becoming angiotensin II, and the <b>ARB</b> blocks the AT1 receptor downstream so angiotensin II is still made but cannot act there. " +
    "ACE is not a dedicated angiotensin enzyme &#8212; it also inactivates bradykinin and substance P, so an ACE inhibitor makes those vasodilating peptides pile up, which is where dry cough (5&#8211;20%) and angioedema (0.1&#8211;0.7%) come from. " +
    "ARBs leave that lane untouched (Slides 30, 33, 38).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="An upper horizontal chain runs angiotensinogen to angiotensin one to angiotensin two to the AT1 receptor, producing vasoconstriction and aldosterone release. Three block markers sit on the chain and pulse in turn, labelled direct renin inhibitor at renin, ACE inhibitor at the converting enzyme, and ARB at the AT1 receptor. A lower lane shows bradykinin and substance P being inactivated by the same converting enzyme; when the ACE inhibitor marker is active those peptides accumulate, labelled cough and angioedema.">
  <style>
    .dg35b-lbl  { font-size: 11.5px; font-weight: 700; }
    .dg35b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg35b-node { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg35b-path { stroke: var(--dg-line); stroke-width: 2.4; fill: none; }
    .dg35b-bar  { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg35b-tag  { font-size: 10.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg35b-enz  { font-size: 10.5px; font-weight: 700; fill: var(--dg-accent); }

    .dg35b-tok { fill: var(--dg-accent); animation: dg35bRun 9s linear infinite; }
    @keyframes dg35bRun {
      0%   { transform: translateX(0);    opacity: 0 }
      6%   { opacity: 1 }
      88%  { opacity: 1 }
      100% { transform: translateX(414px); opacity: 0 }
    }

    .dg35b-k1 { animation: dg35bMark 9s ease-in-out infinite; }
    .dg35b-k2 { animation: dg35bMark 9s ease-in-out infinite 3s; }
    .dg35b-k3 { animation: dg35bMark 9s ease-in-out infinite 6s; }
    @keyframes dg35bMark { 0%, 4% { opacity: .3 } 12%, 30% { opacity: 1 } 40%, 100% { opacity: .3 } }

    .dg35b-p1 { animation: dg35bPile 9s ease-in-out infinite 3.1s; }
    .dg35b-p2 { animation: dg35bPile 9s ease-in-out infinite 3.4s; }
    .dg35b-p3 { animation: dg35bPile 9s ease-in-out infinite 3.7s; }
    @keyframes dg35bPile { 0%, 33% { opacity: 0 } 40%, 66% { opacity: 1 } 74%, 100% { opacity: 0 } }
  </style>

  <text x="12" y="20" class="dg35b-lbl">Pressor cascade</text>

  <rect x="12"  y="56" width="104" height="34" rx="8" class="dg35b-node"/>
  <text x="64"  y="70" class="dg35b-sub" text-anchor="middle">Angiotensino-</text>
  <text x="64"  y="83" class="dg35b-sub" text-anchor="middle">gen</text>

  <path class="dg35b-path" d="M116 73 H196"/>
  <text x="156" y="50" class="dg35b-enz" text-anchor="middle">renin</text>
  <g class="dg35b-k1">
    <line x1="156" y1="58" x2="156" y2="90" class="dg35b-bar"/>
    <text x="156" y="110" class="dg35b-tag" text-anchor="middle">DRI</text>
    <text x="156" y="123" class="dg35b-sub" text-anchor="middle">aliskiren</text>
  </g>

  <rect x="196" y="56" width="94" height="34" rx="8" class="dg35b-node"/>
  <text x="243" y="77" class="dg35b-sub" text-anchor="middle">Angiotensin I</text>

  <path class="dg35b-path" d="M290 73 H370"/>
  <text x="330" y="50" class="dg35b-enz" text-anchor="middle">ACE</text>
  <g class="dg35b-k2">
    <line x1="330" y1="58" x2="330" y2="90" class="dg35b-bar"/>
    <text x="330" y="110" class="dg35b-tag" text-anchor="middle">ACE inhibitor</text>
    <text x="330" y="123" class="dg35b-sub" text-anchor="middle">-pril</text>
  </g>

  <rect x="370" y="56" width="94" height="34" rx="8" class="dg35b-node"/>
  <text x="417" y="77" class="dg35b-sub" text-anchor="middle">Angiotensin II</text>

  <path class="dg35b-path" d="M464 73 H532"/>
  <text x="498" y="50" class="dg35b-enz" text-anchor="middle">AT1</text>
  <g class="dg35b-k3">
    <line x1="498" y1="58" x2="498" y2="90" class="dg35b-bar"/>
    <text x="498" y="110" class="dg35b-tag" text-anchor="middle">ARB</text>
    <text x="498" y="123" class="dg35b-sub" text-anchor="middle">-sartan</text>
  </g>

  <rect x="532" y="52" width="98" height="42" rx="8" class="dg35b-node"/>
  <text x="581" y="68" class="dg35b-sub" text-anchor="middle">vasoconstriction</text>
  <text x="581" y="84" class="dg35b-sub" text-anchor="middle">aldosterone</text>

  <circle class="dg35b-tok" cx="122" cy="73" r="6"/>

  <line x1="12" y1="152" x2="628" y2="152" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="12" y="176" class="dg35b-lbl">Same enzyme, second job</text>

  <rect x="12" y="192" width="142" height="44" rx="8" class="dg35b-node"/>
  <text x="83" y="210" class="dg35b-sub" text-anchor="middle">Bradykinin +</text>
  <text x="83" y="226" class="dg35b-sub" text-anchor="middle">substance P</text>

  <path class="dg35b-path" d="M154 214 H262"/>
  <text x="208" y="204" class="dg35b-enz" text-anchor="middle">ACE</text>
  <g class="dg35b-k2"><line x1="208" y1="200" x2="208" y2="230" class="dg35b-bar"/></g>

  <rect x="262" y="196" width="118" height="36" rx="8" class="dg35b-node"/>
  <text x="321" y="218" class="dg35b-sub" text-anchor="middle">inactive fragments</text>

  <g class="dg35b-p1"><circle cx="102" cy="176" r="6" fill="var(--dg-warm)"/></g>
  <g class="dg35b-p2"><circle cx="124" cy="184" r="6" fill="var(--dg-warm)"/></g>
  <g class="dg35b-p3"><circle cx="146" cy="176" r="6" fill="var(--dg-warm)"/></g>

  <text x="400" y="200" class="dg35b-lbl" fill="var(--dg-warm)">ACE inhibitor only:</text>
  <text x="400" y="216" class="dg35b-sub">vasodilating peptides accumulate</text>
  <text x="400" y="230" class="dg35b-sub">dry cough 5&#8211;20%, angioedema 0.1&#8211;0.7%</text>

  <text x="12" y="264" class="dg35b-sub">ARBs act below the enzyme: angiotensin II is still made, bradykinin metabolism is untouched, so cough and angioedema are uncommon.</text>
  <text x="12" y="282" class="dg35b-sub">Never combine two of these three blocks &#8212; hypotension, syncope, hyperkalemia, kidney dysfunction, and no added benefit (Slide 41).</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Efferent arteriolar dilation: the same lever protects and injures.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv35-efferent-arteriole"] = {
  title: "Efferent arteriole: same lever, opposite sign",
  caption:
    "The animation toggles between the untreated glomerulus and the same glomerulus on an ACE inhibitor or ARB. " +
    "Angiotensin II holds the <b>efferent</b> arteriole constricted; remove it and the efferent vessel relaxes, so <b>glomerular capillary pressure falls</b>. " +
    "Two things follow from that single change: <b>proteinuria falls</b> (why these drugs slow proteinuric diabetic and non-diabetic chronic kidney disease) and <b>GFR falls</b> (why creatinine ticks up). " +
    "The lecturer's rule is that the modest GFR drop is harmless in a patient who is not otherwise at risk, but in a patient whose intrarenal perfusion pressure is already reduced the same drop causes <b>acute kidney injury</b> (Slides 34, 36, 37).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A glomerular tuft with an afferent arteriole entering on the left and an efferent arteriole leaving on the right. The view alternates between two states. Untreated, the efferent arteriole is narrow, the glomerular pressure bar is long, and protein particles cross into the filtrate. On a RAS inhibitor the efferent arteriole widens, the pressure bar shortens, and the protein particles stop crossing. A side panel notes that the resulting modest fall in glomerular filtration rate is harmless with normal perfusion but causes acute kidney injury when renal perfusion pressure is already reduced.">
  <style>
    .dg35c-lbl   { font-size: 11.5px; font-weight: 700; }
    .dg35c-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg35c-vess  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg35c-tuft  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2.2; }
    .dg35c-caps  { stroke: var(--dg-accent); stroke-width: 2; fill: none; opacity: .65; }
    .dg35c-track { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg35c-space { fill: none; stroke: var(--dg-line); stroke-width: 1.3; stroke-dasharray: 5 4; }

    .dg35c-eff { transform-box: view-box; transform-origin: 372px 140px;
                 animation: dg35cDilate 8s ease-in-out infinite; }
    @keyframes dg35cDilate { 0%, 38% { transform: scaleY(.5) } 52%, 100% { transform: scaleY(1.25) } }

    .dg35c-press { transform-box: view-box; transform-origin: 214px 0px;
                   animation: dg35cDrop 8s ease-in-out infinite; }
    @keyframes dg35cDrop { 0%, 38% { transform: scaleX(1) } 52%, 100% { transform: scaleX(.42) } }

    .dg35c-off { animation: dg35cOff 8s ease-in-out infinite; }
    @keyframes dg35cOff { 0%, 40% { opacity: 1 } 50%, 100% { opacity: .12 } }

    .dg35c-on  { animation: dg35cOn 8s ease-in-out infinite; }
    @keyframes dg35cOn  { 0%, 40% { opacity: .12 } 50%, 100% { opacity: 1 } }

    .dg35c-pr1 { animation: dg35cLeak 8s linear infinite; }
    .dg35c-pr2 { animation: dg35cLeak 8s linear infinite .5s; }
    .dg35c-pr3 { animation: dg35cLeak 8s linear infinite 1s; }
    @keyframes dg35cLeak {
      0%   { transform: translateY(0);   opacity: 0 }
      6%   { opacity: .95 }
      30%  { opacity: .95 }
      38%  { transform: translateY(46px); opacity: 0 }
      100% { transform: translateY(46px); opacity: 0 }
    }
  </style>

  <text x="12" y="20" class="dg35c-lbl dg35c-off" fill="var(--dg-warm)">Untreated: angiotensin II constricts the efferent arteriole</text>
  <text x="12" y="20" class="dg35c-lbl dg35c-on" fill="var(--dg-good)">On an ACE inhibitor or ARB: the efferent arteriole relaxes</text>

  <text x="34" y="106" class="dg35c-sub">afferent</text>
  <rect class="dg35c-vess" x="34" y="122" width="110" height="36" rx="12"/>

  <ellipse cx="214" cy="140" rx="66" ry="52" class="dg35c-tuft"/>
  <path class="dg35c-caps" d="M176 122 C196 108 234 108 252 122"/>
  <path class="dg35c-caps" d="M172 158 C196 172 234 172 256 158"/>
  <text x="214" y="94" class="dg35c-sub" text-anchor="middle">glomerulus</text>

  <rect class="dg35c-track" x="214" y="134" width="120" height="12" rx="6" opacity="0"/>
  <rect class="dg35c-press" x="214" y="134" width="104" height="12" rx="6" fill="var(--dg-warm)" opacity=".8"/>
  <text x="214" y="128" class="dg35c-sub">glomerular capillary pressure</text>

  <text x="382" y="106" class="dg35c-sub">efferent</text>
  <rect class="dg35c-vess dg35c-eff" x="284" y="124" width="176" height="32" rx="12"/>

  <rect class="dg35c-space" x="150" y="212" width="188" height="48" rx="10"/>
  <text x="164" y="232" class="dg35c-lbl">Filtrate</text>
  <text x="164" y="250" class="dg35c-sub dg35c-off" fill="var(--dg-warm)">protein crossing: proteinuria</text>
  <text x="164" y="250" class="dg35c-sub dg35c-on" fill="var(--dg-good)">protein retained: proteinuria falls</text>

  <g class="dg35c-pr1"><circle cx="184" cy="190" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg35c-pr2"><circle cx="216" cy="190" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg35c-pr3"><circle cx="248" cy="190" r="5" fill="var(--dg-warm)"/></g>

  <line x1="472" y1="60" x2="472" y2="268" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="488" y="80"  class="dg35c-lbl" fill="var(--dg-good)">Wanted</text>
  <text x="488" y="98"  class="dg35c-sub">lower intraglomerular pressure</text>
  <text x="488" y="112" class="dg35c-sub">less protein excretion</text>
  <text x="488" y="126" class="dg35c-sub">slows proteinuric CKD</text>

  <text x="488" y="164" class="dg35c-lbl" fill="var(--dg-warm)">Unavoidable</text>
  <text x="488" y="182" class="dg35c-sub">GFR falls with the pressure</text>
  <text x="488" y="196" class="dg35c-sub">modest, harmless if perfusion</text>
  <text x="488" y="210" class="dg35c-sub">is normal</text>

  <text x="488" y="240" class="dg35c-lbl" fill="var(--dg-warm)">Dangerous</text>
  <text x="488" y="258" class="dg35c-sub">perfusion already low &#8594; AKI</text>

  <text x="12" y="288" class="dg35c-sub">The efferent arteriole is the whole story: it is the therapeutic mechanism in CKD and the toxic mechanism in a hypoperfused kidney.</text>
</svg>`,
};

/*
 * cv37 - Antihypertensive Agents Part 3: Alpha Blockers, Centrally Acting
 * Sympatholytics and Vasodilators (Lecture #37, L. Goldstein, Pharm.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Methyldopa: two enzymes, one swapped vesicle, a false transmitter.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv37-methyldopa-false-transmitter"] = {
  title: "Methyldopa becomes a false transmitter",
  caption:
    "Methyldopa is pulled out of plasma into the presynaptic vesicle and converted there in two steps &#8212; " +
    "<b>aromatic L-amino acid decarboxylase</b> to alpha-methyldopamine, then <b>dopamine beta-hydroxylase</b> to <b>alpha-methylnorepinephrine</b> (Slide 19). " +
    "Watch the vesicle contents swap: methylnorepinephrine <i>replaces</i> norepinephrine and is released in its place. " +
    "Norepinephrine would hit alpha-1, alpha-2 and beta-1; the false transmitter acts on <b>alpha-2</b>, so brainstem alpha-2 activation lowers sympathetic outflow. " +
    "This is also why the plasma half-life is only 1.5&#8211;2 hours while the effect lasts 24&#8211;48 hours (Slide 15): the drug leaves the blood fast, but the vesicle stores persist.",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Methyldopa is converted in two enzymatic steps, first by aromatic L-amino acid decarboxylase to alpha-methyldopamine and then by dopamine beta-hydroxylase to alpha-methylnorepinephrine. Inside a presynaptic nerve terminal a storage vesicle labelled norepinephrine is relabelled methylnorepinephrine, the vesicle releases the false transmitter across the synapse onto a brainstem alpha-2 receptor, and sympathetic outflow falls.">
  <style>
    .dg37a-lbl  { font-size: 11.5px; font-weight: 700; }
    .dg37a-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg37a-enz  { font-size: 9.5px; fill: var(--dg-accent); font-weight: 700; }
    .dg37a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg37a-line { stroke: var(--dg-line); stroke-width: 1.6; fill: none; }
    .dg37a-head { fill: var(--dg-line); }
    .dg37a-cell { fill: none; stroke: var(--dg-ink); stroke-width: 1.8; opacity: .55; }
    .dg37a-ves  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.2; }

    .dg37a-s1 { animation: dg37aStep 10s linear infinite; }
    .dg37a-s2 { animation: dg37aStep 10s linear infinite 1.1s; }
    .dg37a-s3 { animation: dg37aStep 10s linear infinite 2.2s; }
    @keyframes dg37aStep { 0%, 3% { opacity: .3 } 11%, 92% { opacity: 1 } 100% { opacity: .3 } }

    .dg37a-ne { animation: dg37aOut 10s linear infinite; }
    .dg37a-me { animation: dg37aIn  10s linear infinite; }
    @keyframes dg37aOut { 0%, 26% { opacity: 1 } 34%, 100% { opacity: 0 } }
    @keyframes dg37aIn  { 0%, 26% { opacity: 0 } 34%, 100% { opacity: 1 } }

    .dg37a-drop { animation: dg37aCross 10s linear infinite; }
    @keyframes dg37aCross {
      0%, 46% { transform: translateX(0);     opacity: 0 }
      54%     { opacity: 1 }
      86%     { opacity: 1 }
      100%    { transform: translateX(148px); opacity: 0 }
    }
    .dg37a-hit { animation: dg37aHit 10s linear infinite; }
    @keyframes dg37aHit { 0%, 78% { opacity: .35 } 86%, 96% { opacity: 1 } 100% { opacity: .35 } }
  </style>

  <g class="dg37a-s1">
    <rect class="dg37a-box" x="8" y="34" width="132" height="34" rx="8"/>
    <text x="74" y="55" class="dg37a-lbl" text-anchor="middle">METHYLDOPA</text>
  </g>
  <path class="dg37a-line" d="M144 51 H236"/>
  <polygon class="dg37a-head" points="236,45 252,51 236,57"/>
  <text x="146" y="26" class="dg37a-enz">aromatic L-amino</text>
  <text x="146" y="38" class="dg37a-enz">acid decarboxylase</text>

  <g class="dg37a-s2">
    <rect class="dg37a-box" x="256" y="34" width="152" height="34" rx="8"/>
    <text x="332" y="55" class="dg37a-lbl" text-anchor="middle">alpha-METHYLDOPAMINE</text>
  </g>
  <path class="dg37a-line" d="M412 51 H478"/>
  <polygon class="dg37a-head" points="478,45 494,51 478,57"/>
  <text x="412" y="26" class="dg37a-enz">dopamine</text>
  <text x="412" y="38" class="dg37a-enz">beta-hydroxylase</text>

  <g class="dg37a-s3">
    <rect class="dg37a-box" x="498" y="30" width="136" height="42" rx="8"/>
    <text x="566" y="47" class="dg37a-lbl" text-anchor="middle">alpha-METHYL-</text>
    <text x="566" y="63" class="dg37a-lbl" text-anchor="middle">NOREPINEPHRINE</text>
  </g>

  <text x="8" y="102" class="dg37a-lbl">Presynaptic sympathetic neuron</text>
  <path class="dg37a-cell" d="M8 114 H286 V248 H8"/>
  <text x="14" y="270" class="dg37a-sub">both conversions happen inside the vesicle</text>

  <circle class="dg37a-ves" cx="94" cy="178" r="40"/>
  <text x="94" y="174" class="dg37a-lbl dg37a-ne" text-anchor="middle" fill="var(--dg-muted)">NE</text>
  <text x="94" y="190" class="dg37a-sub dg37a-ne" text-anchor="middle">stored</text>
  <text x="94" y="174" class="dg37a-lbl dg37a-me" text-anchor="middle" fill="var(--dg-accent)">MeNE</text>
  <text x="94" y="190" class="dg37a-sub dg37a-me" text-anchor="middle">replaces NE</text>

  <path class="dg37a-line" d="M138 178 H232" stroke-dasharray="5 4"/>
  <polygon class="dg37a-head" points="232,172 248,178 232,184"/>
  <text x="146" y="168" class="dg37a-sub">exocytosis</text>

  <line x1="290" y1="114" x2="290" y2="248" stroke="var(--dg-line)" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="298" y="128" class="dg37a-sub">synapse</text>

  <g class="dg37a-drop">
    <circle cx="308" cy="178" r="7" fill="var(--dg-accent)"/>
  </g>

  <text x="470" y="102" class="dg37a-lbl">Brainstem neuron</text>
  <path class="dg37a-cell" d="M634 114 H466 V248 H634"/>
  <g class="dg37a-hit">
    <path d="M466 178 H486 M454 166 L466 178 L454 190" stroke="var(--dg-accent)" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <text x="492" y="174" class="dg37a-lbl" fill="var(--dg-accent)">alpha-2 receptor</text>
    <text x="492" y="190" class="dg37a-sub">Gi: cAMP down</text>
  </g>
  <text x="466" y="220" class="dg37a-lbl">Sympathetic outflow down</text>
  <text x="466" y="236" class="dg37a-sub">BP, HR and contractility fall</text>

  <text x="320" y="292" class="dg37a-sub" text-anchor="middle">NE acts on alpha-1, alpha-2 and beta-1; the false transmitter MeNE acts on alpha-2.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Clonidine withdrawal - the taper ORDER is the whole point.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv37-clonidine-withdrawal"] = {
  title: "Clonidine withdrawal: which drug comes off first",
  caption:
    "Both lanes show the same patient on clonidine plus a beta blocker; only the <i>order</i> of withdrawal differs (Slide 21). " +
    "<b>Top:</b> clonidine stopped first. The catecholamine surge arrives while beta-2 mediated vasodilation is still blocked, so it meets <b>unopposed vasoconstriction</b> and pressure overshoots far above baseline &#8212; headache, apprehension, tremors, abdominal pain, sweating, tachycardia. " +
    "<b>Bottom:</b> the beta blocker is tapered off several days first, then clonidine is tapered, and the trace returns to baseline with no rebound. " +
    "Trace shapes are schematic; the sequence and the mechanism are this lecture's.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two blood pressure traces over time. In the upper lane clonidine is stopped abruptly while the beta blocker is still on board and the trace spikes far above the pre-treatment baseline, labelled rebound hypertension from unopposed vasoconstriction. In the lower lane the beta blocker is tapered off several days first and clonidine is tapered afterwards, and the trace returns smoothly to baseline with no overshoot.">
  <style>
    .dg37b-lbl  { font-size: 11.5px; font-weight: 700; }
    .dg37b-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg37b-base { stroke: var(--dg-line); stroke-width: 1.3; stroke-dasharray: 5 4; }
    .dg37b-bad  { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; }
    .dg37b-good { fill: none; stroke: var(--dg-good); stroke-width: 3.2; stroke-linecap: round; }
    .dg37b-mark { stroke: var(--dg-ink); stroke-width: 1.4; stroke-dasharray: 4 3; opacity: .65; }
    .dg37b-pill { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }

    .dg37b-cur { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .8;
                 animation: dg37bSweep 9s linear infinite; }
    @keyframes dg37bSweep { from { transform: translateX(0) } to { transform: translateX(374px) } }

    .dg37b-surge { animation: dg37bSurge 9s linear infinite; }
    @keyframes dg37bSurge { 0%, 42% { opacity: .25 } 52%, 88% { opacity: 1 } 100% { opacity: .25 } }

    .dg37b-calm { animation: dg37bCalm 9s linear infinite; }
    @keyframes dg37bCalm { 0%, 32% { opacity: .25 } 42%, 100% { opacity: 1 } }

    .dg37b-cat  { fill: var(--dg-warm); animation: dg37bRain 9s linear infinite; }
    .dg37b-cat2 { fill: var(--dg-warm); animation: dg37bRain 9s linear infinite .35s; }
    .dg37b-cat3 { fill: var(--dg-warm); animation: dg37bRain 9s linear infinite .7s; }
    @keyframes dg37bRain {
      0%, 44% { transform: translateY(0);   opacity: 0 }
      54%     { opacity: 1 }
      76%     { opacity: 1 }
      100%    { transform: translateY(24px); opacity: 0 }
    }
  </style>

  <text x="8" y="18" class="dg37b-lbl" fill="var(--dg-warm)">WRONG ORDER: clonidine stopped first</text>

  <text x="8" y="90" class="dg37b-sub">BP</text>
  <line x1="96" y1="86" x2="470" y2="86" class="dg37b-base"/>
  <path class="dg37b-bad" d="M96 106 L280 106 C306 104 318 46 356 36 C392 28 410 52 436 68 C450 76 460 82 470 84"/>
  <line x1="280" y1="30" x2="280" y2="116" class="dg37b-mark"/>

  <circle class="dg37b-cat"  cx="300" cy="22" r="4"/>
  <circle class="dg37b-cat2" cx="320" cy="22" r="4"/>
  <circle class="dg37b-cat3" cx="340" cy="22" r="4"/>

  <rect class="dg37b-pill" x="120" y="120" width="350" height="18" rx="9"/>
  <text x="295" y="133" class="dg37b-sub" text-anchor="middle">clonidine stopped abruptly, beta blocker still on board</text>

  <g class="dg37b-surge">
    <text x="486" y="40" class="dg37b-lbl" fill="var(--dg-warm)">Catecholamine surge</text>
    <text x="486" y="56" class="dg37b-sub">meets blocked beta-2</text>
    <text x="486" y="70" class="dg37b-sub">unopposed vasoconstriction</text>
    <text x="486" y="90" class="dg37b-lbl" fill="var(--dg-warm)">Rebound hypertension</text>
    <text x="486" y="106" class="dg37b-sub">headache, tremor, sweating</text>
    <text x="486" y="120" class="dg37b-sub">abdominal pain, tachycardia</text>
  </g>

  <line x1="8" y1="150" x2="632" y2="150" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="8" y="176" class="dg37b-lbl" fill="var(--dg-good)">RIGHT ORDER: beta blocker off first</text>

  <text x="8" y="252" class="dg37b-sub">BP</text>
  <line x1="96" y1="248" x2="470" y2="248" class="dg37b-base"/>
  <path class="dg37b-good" d="M96 268 L230 268 C290 266 350 258 410 252 C440 250 458 248 470 248"/>
  <line x1="230" y1="196" x2="230" y2="276" class="dg37b-mark"/>
  <line x1="360" y1="196" x2="360" y2="276" class="dg37b-mark"/>

  <rect class="dg37b-pill" x="140" y="280" width="150" height="18" rx="9"/>
  <text x="215" y="293" class="dg37b-sub" text-anchor="middle">taper the beta blocker</text>
  <rect class="dg37b-pill" x="300" y="280" width="170" height="18" rx="9"/>
  <text x="385" y="293" class="dg37b-sub" text-anchor="middle">then taper clonidine</text>

  <g class="dg37b-calm">
    <text x="486" y="212" class="dg37b-lbl" fill="var(--dg-good)">No overshoot</text>
    <text x="486" y="228" class="dg37b-sub">beta-2 vasodilation is</text>
    <text x="486" y="242" class="dg37b-sub">available again</text>
    <text x="486" y="262" class="dg37b-sub">several days apart,</text>
    <text x="486" y="276" class="dg37b-sub">sometimes a week or more</text>
  </g>

  <line x1="96" y1="16" x2="96" y2="292" class="dg37b-cur"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. The compensatory loop that makes vasodilator monotherapy fail.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv37-vasodilator-reflex-loop"] = {
  title: "Why a vasodilator is never given alone",
  caption:
    "Hydralazine or minoxidil relaxes arteriolar smooth muscle, dropping systemic vascular resistance and mean arterial pressure. " +
    "Because the sympathetic reflex arc is fully intact, the signal runs the loop: baroreceptors drive sympathetic outflow and renin release, and two return arms push pressure back up &#8212; " +
    "<b>reflex tachycardia</b> raising cardiac output, and <b>renin, angiotensin II and aldosterone</b> causing salt and water retention (Slides 28&#8211;29). " +
    "The two badges are where the partner drugs cut the loop: a <b>beta blocker</b> on the tachycardia arm, a <b>diuretic</b> on the salt-and-water arm; the travelling dots stop dead at them. " +
    "Reflex tachycardia is not cosmetic &#8212; it raises myocardial oxygen consumption and can provoke angina or an ischemic arrhythmia (Slide 31).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="A feedback loop. An arteriolar vasodilator lowers systemic vascular resistance, which lowers mean arterial pressure, which activates baroreceptors and the sympathetic nervous system plus renin. Two return arms carry the signal back leftward: an upper arm producing reflex tachycardia and increased cardiac output, cut by a beta blocker badge, and a lower arm producing angiotensin two and aldosterone driven salt and water retention, cut by a diuretic badge. Unblocked, both arms would raise blood pressure again and cancel the drug.">
  <style>
    .dg37c-lbl  { font-size: 11px; font-weight: 700; }
    .dg37c-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg37c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg37c-arw  { stroke: var(--dg-line); stroke-width: 1.8; fill: none; }
    .dg37c-head { fill: var(--dg-line); }
    .dg37c-stop { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2.2; }
    .dg37c-bar  { stroke: var(--dg-good); stroke-width: 2.6; stroke-linecap: round; }

    .dg37c-p1 { fill: var(--dg-accent); animation: dg37cTop 8s linear infinite; }
    @keyframes dg37cTop {
      0%   { transform: translateX(0);     opacity: 0 }
      6%   { opacity: 1 }
      34%  { transform: translateX(396px); opacity: 1 }
      40%  { transform: translateX(396px); opacity: 0 }
      100% { transform: translateX(396px); opacity: 0 }
    }
    .dg37c-p2 { fill: var(--dg-warm); animation: dg37cArmA 8s linear infinite; }
    @keyframes dg37cArmA {
      0%, 40% { transform: translateX(0);      opacity: 0 }
      46%     { opacity: 1 }
      68%     { transform: translateX(-130px); opacity: 1 }
      76%     { transform: translateX(-130px); opacity: 0 }
      100%    { transform: translateX(-130px); opacity: 0 }
    }
    .dg37c-p3 { fill: var(--dg-warm); animation: dg37cArmB 8s linear infinite .4s; }
    @keyframes dg37cArmB {
      0%, 40% { transform: translateX(0);      opacity: 0 }
      46%     { opacity: 1 }
      68%     { transform: translateX(-110px); opacity: 1 }
      76%     { transform: translateX(-110px); opacity: 0 }
      100%    { transform: translateX(-110px); opacity: 0 }
    }
    .dg37c-blk { animation: dg37cFlash 8s linear infinite; }
    @keyframes dg37cFlash { 0%, 64% { opacity: .5 } 72%, 90% { opacity: 1 } 100% { opacity: .5 } }
  </style>

  <rect class="dg37c-box" x="8" y="26" width="128" height="42" rx="9"/>
  <text x="72" y="43" class="dg37c-lbl" text-anchor="middle">Vasodilator</text>
  <text x="72" y="58" class="dg37c-sub" text-anchor="middle">arteriolar relaxation</text>

  <path class="dg37c-arw" d="M140 47 H196"/>
  <polygon class="dg37c-head" points="196,41 212,47 196,53"/>
  <rect class="dg37c-box" x="216" y="26" width="112" height="42" rx="9"/>
  <text x="272" y="43" class="dg37c-lbl" text-anchor="middle">SVR down</text>
  <text x="272" y="58" class="dg37c-sub" text-anchor="middle">vascular resistance</text>

  <path class="dg37c-arw" d="M332 47 H384"/>
  <polygon class="dg37c-head" points="384,41 400,47 384,53"/>
  <rect class="dg37c-box" x="404" y="26" width="106" height="42" rx="9"/>
  <text x="457" y="43" class="dg37c-lbl" text-anchor="middle">MAP down</text>
  <text x="457" y="58" class="dg37c-sub" text-anchor="middle">arterial pressure</text>

  <path class="dg37c-arw" d="M514 47 H556 V94"/>
  <polygon class="dg37c-head" points="550,94 556,110 562,94"/>
  <circle class="dg37c-p1" cx="146" cy="47" r="5"/>

  <rect class="dg37c-box" x="476" y="112" width="156" height="44" rx="9"/>
  <text x="554" y="130" class="dg37c-lbl" text-anchor="middle">Baroreceptors + SNS</text>
  <text x="554" y="145" class="dg37c-sub" text-anchor="middle">plus renin release</text>

  <path class="dg37c-arw" d="M554 160 V186 H332"/>
  <polygon class="dg37c-head" points="332,180 316,186 332,192"/>
  <rect class="dg37c-box" x="176" y="168" width="138" height="38" rx="9"/>
  <text x="245" y="184" class="dg37c-lbl" text-anchor="middle">Reflex tachycardia</text>
  <text x="245" y="198" class="dg37c-sub" text-anchor="middle">cardiac output up</text>
  <circle class="dg37c-p2" cx="500" cy="186" r="5"/>

  <path class="dg37c-arw" d="M554 160 V250 H352"/>
  <polygon class="dg37c-head" points="352,244 336,250 352,256"/>
  <rect class="dg37c-box" x="164" y="232" width="170" height="38" rx="9"/>
  <text x="249" y="248" class="dg37c-lbl" text-anchor="middle">Salt and water retention</text>
  <text x="249" y="262" class="dg37c-sub" text-anchor="middle">ANG II and aldosterone</text>
  <circle class="dg37c-p3" cx="500" cy="250" r="5"/>

  <g class="dg37c-blk">
    <line x1="360" y1="172" x2="360" y2="200" class="dg37c-bar"/>
    <rect class="dg37c-stop" x="366" y="164" width="88" height="20" rx="10"/>
    <text x="410" y="178" class="dg37c-sub" text-anchor="middle" fill="var(--dg-good)">BETA BLOCKER</text>
  </g>
  <g class="dg37c-blk">
    <line x1="380" y1="236" x2="380" y2="264" class="dg37c-bar"/>
    <rect class="dg37c-stop" x="386" y="228" width="72" height="20" rx="10"/>
    <text x="422" y="242" class="dg37c-sub" text-anchor="middle" fill="var(--dg-good)">DIURETIC</text>
  </g>

  <path class="dg37c-arw" d="M172 187 H72 V84" stroke-dasharray="6 4"/>
  <polygon class="dg37c-head" points="66,84 72,68 78,84"/>
  <path class="dg37c-arw" d="M160 251 H72 V190" stroke-dasharray="6 4"/>
  <text x="8" y="128" class="dg37c-sub">BP back</text>
  <text x="8" y="142" class="dg37c-sub">up if the</text>
  <text x="8" y="156" class="dg37c-sub">arms run</text>

  <text x="8" y="290" class="dg37c-sub">Both arms would push BP back up and cancel the drug, which is why a beta blocker and a diuretic are given with it.</text>
  <text x="8" y="304" class="dg37c-sub">Sympathetic reflexes stay intact, so hydralazine and minoxidil do NOT cause orthostatic hypotension (Slides 28, 31).</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Nitroprusside: a saturable detox pathway that runs out of sulfur.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv37-nitroprusside-cyanide"] = {
  title: "Nitroprusside: the sulfur donor runs out",
  caption:
    "Red blood cells take up nitroprusside and split it into <b>nitric oxide</b>, which activates guanylyl cyclase and raises cGMP for vasodilation, and <b>cyanide</b>, which must be detoxified (Slides 24, 27). " +
    "Mitochondrial <b>rhodanese</b> transfers sulfur from a donor onto cyanide to make thiocyanate, eliminated renally with a half-life of about 3 days &#8212; which may lengthen two- to threefold in renal failure. " +
    "Watch the sulfur reservoir drain: the reaction is <b>saturable</b>, so a large or prolonged infusion exhausts the donor supply and free cyanide begins to accumulate. " +
    "Both antidotes act on this picture directly &#8212; sodium nitrite followed by sodium thiosulfate refills the sulfur donor, and hydroxocobalamin binds cyanide to form nontoxic cyanocobalamin (Slide 32).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Nitroprusside enters a red blood cell and is split into nitric oxide and cyanide. Nitric oxide activates guanylyl cyclase, raising cyclic GMP and relaxing arteries and veins. Cyanide passes to mitochondrial rhodanese, which uses sulfur from a reservoir to make thiocyanate for renal elimination with a three day half-life. The sulfur reservoir bar drains over time, and once it is empty free cyanide accumulates. Two antidotes are listed: sodium nitrite then sodium thiosulfate to refill the sulfur donor, and hydroxocobalamin to bind cyanide as cyanocobalamin.">
  <style>
    .dg37d-lbl  { font-size: 11px; font-weight: 700; }
    .dg37d-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg37d-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg37d-arw  { stroke: var(--dg-line); stroke-width: 1.7; fill: none; }
    .dg37d-head { fill: var(--dg-line); }
    .dg37d-rbc  { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg37d-tank { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }

    .dg37d-drain { fill: var(--dg-good); transform-box: view-box; transform-origin: 236px 272px;
                   animation: dg37dDrain 11s linear infinite; }
    @keyframes dg37dDrain { 0%, 6% { transform: scaleY(1) } 70%, 100% { transform: scaleY(.05) } }

    .dg37d-warn { animation: dg37dWarn 11s linear infinite; }
    @keyframes dg37dWarn { 0%, 60% { opacity: .2 } 74%, 96% { opacity: 1 } 100% { opacity: .2 } }

    .dg37d-ok { animation: dg37dOk 11s linear infinite; }
    @keyframes dg37dOk { 0%, 54% { opacity: 1 } 68%, 100% { opacity: .25 } }

    .dg37d-c1 { fill: var(--dg-warm); animation: dg37dPile 11s linear infinite; }
    .dg37d-c2 { fill: var(--dg-warm); animation: dg37dPile 11s linear infinite .5s; }
    .dg37d-c3 { fill: var(--dg-warm); animation: dg37dPile 11s linear infinite 1s; }
    @keyframes dg37dPile { 0%, 64% { opacity: 0 } 78%, 96% { opacity: 1 } 100% { opacity: 0 } }

    .dg37d-flow { fill: var(--dg-accent); animation: dg37dFlow 11s linear infinite; }
    @keyframes dg37dFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      40%  { transform: translateX(94px);  opacity: 1 }
      48%  { transform: translateX(94px);  opacity: 0 }
      100% { transform: translateX(94px);  opacity: 0 }
    }
  </style>

  <rect class="dg37d-box" x="8" y="96" width="106" height="40" rx="9"/>
  <text x="61" y="113" class="dg37d-lbl" text-anchor="middle">Nitroprusside</text>
  <text x="61" y="128" class="dg37d-sub" text-anchor="middle">I.V. infusion</text>
  <path class="dg37d-arw" d="M118 116 H150"/>
  <polygon class="dg37d-head" points="150,110 166,116 150,122"/>
  <circle class="dg37d-flow" cx="124" cy="116" r="4"/>

  <ellipse class="dg37d-rbc" cx="212" cy="116" rx="42" ry="30"/>
  <text x="212" y="113" class="dg37d-lbl" text-anchor="middle">RBC</text>
  <text x="212" y="127" class="dg37d-sub" text-anchor="middle">uptake</text>

  <path class="dg37d-arw" d="M254 102 C286 84 300 72 328 66"/>
  <polygon class="dg37d-head" points="328,60 344,66 328,73"/>
  <rect class="dg37d-box" x="348" y="34" width="284" height="58" rx="9"/>
  <text x="360" y="52" class="dg37d-lbl" fill="var(--dg-cool)">NITRIC OXIDE</text>
  <text x="360" y="68" class="dg37d-sub">activates guanylyl cyclase, cGMP up</text>
  <text x="360" y="83" class="dg37d-sub">smooth muscle relaxes: arteries AND veins</text>

  <path class="dg37d-arw" d="M254 132 C286 152 300 162 330 168"/>
  <polygon class="dg37d-head" points="330,162 346,169 330,175"/>
  <text x="262" y="188" class="dg37d-lbl" fill="var(--dg-warm)">CYANIDE</text>

  <rect class="dg37d-box" x="350" y="150" width="118" height="42" rx="9"/>
  <text x="409" y="167" class="dg37d-lbl" text-anchor="middle">RHODANESE</text>
  <text x="409" y="182" class="dg37d-sub" text-anchor="middle">mitochondria</text>

  <g class="dg37d-ok">
    <path class="dg37d-arw" d="M472 171 H508"/>
    <polygon class="dg37d-head" points="508,165 524,171 508,177"/>
    <text x="528" y="167" class="dg37d-lbl" fill="var(--dg-good)">Thiocyanate</text>
    <text x="528" y="182" class="dg37d-sub">renal, t half ~3 days</text>
    <text x="528" y="195" class="dg37d-sub">2-3x in renal failure</text>
  </g>

  <text x="196" y="212" class="dg37d-lbl">Sulfur donor</text>
  <rect class="dg37d-tank" x="196" y="222" width="80" height="52" rx="6"/>
  <rect class="dg37d-drain" x="198" y="224" width="76" height="48" rx="5"/>
  <text x="8" y="288" class="dg37d-sub">saturable: a large or prolonged infusion drains the donor supply</text>
  <path class="dg37d-arw" d="M280 248 H352 V198" stroke-dasharray="5 4"/>
  <polygon class="dg37d-head" points="346,198 352,184 358,198"/>

  <g class="dg37d-warn">
    <text x="380" y="222" class="dg37d-lbl" fill="var(--dg-warm)">Sulfur exhausted: cyanide accumulates</text>
    <circle class="dg37d-c1" cx="386" cy="238" r="5"/>
    <circle class="dg37d-c2" cx="402" cy="238" r="5"/>
    <circle class="dg37d-c3" cx="418" cy="238" r="5"/>
    <text x="432" y="242" class="dg37d-sub" fill="var(--dg-warm)">cyanide toxicity</text>
    <text x="380" y="262" class="dg37d-sub">Antidote 1: sodium nitrite, then sodium thiosulfate</text>
    <text x="380" y="276" class="dg37d-sub">Antidote 2: hydroxocobalamin gives cyanocobalamin</text>
  </g>
</svg>`,
};

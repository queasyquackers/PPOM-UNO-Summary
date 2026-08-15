/*
 * cv36 - Antihypertensive Agents Part 2: Calcium Channel Blockers and Beta
 * Blockers (Lecture #36, L. Goldstein, Pharm.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Immediate-release vs extended-release: peaks are what cause reflex tachycardia.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv36-ir-vs-er-peaks"] = {
  title: "Why the peaks matter, not the dose",
  caption:
    "A 24-hour clock sweeps across two plasma-level curves for the same dihydropyridine. " +
    "<b>Immediate-release nifedipine</b> is given three times daily (every 8 hours, Slide 10) and each dose overshoots the therapeutic window and then falls below it, " +
    "producing the three things the lecturer warns about: a rapid drop in blood pressure, oscillations in blood-pressure control, and a concurrent surge of sympathetic reflex activity (Slide 11). " +
    "Watch the reflex lane light up only at the steep IR peaks. " +
    "<b>Extended-release nifedipine (once daily) and amlodipine</b> stay inside the window with minimal peaks and troughs, which is why they cause less reflex tachycardia (Slide 10). " +
    "The curve shapes are schematic; the dosing intervals and the therapeutic-window logic are this lecture's.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Two plasma drug concentration curves over 24 hours. The immediate-release curve spikes above the therapeutic window three times, once every eight hours, and falls below the window in between, while the extended-release curve rises once and stays inside the window all day. A lower lane shows sympathetic reflex activity, which spikes only at the three immediate-release peaks and stays flat for the extended-release curve.">
  <style>
    .dg36b-lbl  { font-size: 12px; font-weight: 700; }
    .dg36b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg36b-ax   { font-size: 10px; fill: var(--dg-muted); }
    .dg36b-band { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg36b-axis { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg36b-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg36b-ir   { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg36b-er   { fill: none; stroke: var(--dg-good); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg36b-dose { fill: var(--dg-warm); }
    .dg36b-dose2{ fill: var(--dg-good); }
    .dg36b-flat { stroke: var(--dg-good); stroke-width: 2.4; fill: none; }
    .dg36b-spk  { stroke: var(--dg-warm); stroke-width: 2.4; fill: none; }

    .dg36b-cursor { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .8;
                    animation: dg36bSweep 9s linear infinite; }
    @keyframes dg36bSweep { from { transform: translateX(0) } to { transform: translateX(540px) } }

    .dg36b-r1 { animation: dg36bR1 9s linear infinite; }
    .dg36b-r2 { animation: dg36bR2 9s linear infinite; }
    .dg36b-r3 { animation: dg36bR3 9s linear infinite; }
    @keyframes dg36bR1 { 0%, 2% { opacity: .2 } 6%, 13% { opacity: 1 } 20%, 100% { opacity: .2 } }
    @keyframes dg36bR2 { 0%, 35% { opacity: .2 } 39%, 46% { opacity: 1 } 53%, 100% { opacity: .2 } }
    @keyframes dg36bR3 { 0%, 68% { opacity: .2 } 72%, 79% { opacity: 1 } 86%, 100% { opacity: .2 } }

    .dg36b-pk1 { animation: dg36bR1 9s linear infinite; }
    .dg36b-pk2 { animation: dg36bR2 9s linear infinite; }
    .dg36b-pk3 { animation: dg36bR3 9s linear infinite; }
  </style>

  <text x="18" y="22" class="dg36b-lbl">Plasma level</text>
  <rect x="330" y="12" width="22" height="4" rx="2" fill="var(--dg-warm)"/>
  <text x="358" y="20" class="dg36b-sub">immediate release, 3x daily</text>
  <rect x="330" y="28" width="22" height="4" rx="2" fill="var(--dg-good)"/>
  <text x="358" y="36" class="dg36b-sub">extended release / amlodipine</text>

  <rect x="70" y="72" width="540" height="46" rx="4" class="dg36b-band"/>
  <text x="76" y="88" class="dg36b-ax">therapeutic window</text>
  <line x1="70" y1="46" x2="610" y2="46" class="dg36b-grid"/>
  <text x="64" y="50" class="dg36b-ax" text-anchor="end">high</text>
  <text x="64" y="150" class="dg36b-ax" text-anchor="end">low</text>

  <path class="dg36b-ir" d="M70 148 L92 46 C120 78 160 120 250 146 L272 46 C300 78 340 120 430 146 L452 46 C480 78 520 120 610 146"/>
  <path class="dg36b-er" d="M70 148 C110 132 132 108 172 101 C284 97 400 101 610 107"/>

  <circle cx="92"  cy="46" r="6" class="dg36b-dose dg36b-pk1"/>
  <circle cx="272" cy="46" r="6" class="dg36b-dose dg36b-pk2"/>
  <circle cx="452" cy="46" r="6" class="dg36b-dose dg36b-pk3"/>

  <line x1="70" y1="152" x2="610" y2="152" class="dg36b-axis"/>
  <text x="70"  y="168" class="dg36b-ax" text-anchor="middle">0</text>
  <text x="250" y="168" class="dg36b-ax" text-anchor="middle">8 h</text>
  <text x="430" y="168" class="dg36b-ax" text-anchor="middle">16 h</text>
  <text x="610" y="168" class="dg36b-ax" text-anchor="middle">24 h</text>

  <polygon points="70,160 64,172 76,172" class="dg36b-dose"/>
  <polygon points="250,160 244,172 256,172" class="dg36b-dose"/>
  <polygon points="430,160 424,172 436,172" class="dg36b-dose"/>
  <text x="92" y="186" class="dg36b-sub">IR dose every 8 h &#8212; three overshoots, three troughs</text>

  <text x="18" y="212" class="dg36b-lbl">Sympathetic reflex</text>
  <line x1="70" y1="256" x2="610" y2="256" class="dg36b-axis"/>
  <g class="dg36b-r1"><path class="dg36b-spk" d="M78 256 L96 214 L116 256"/></g>
  <g class="dg36b-r2"><path class="dg36b-spk" d="M258 256 L276 214 L296 256"/></g>
  <g class="dg36b-r3"><path class="dg36b-spk" d="M438 256 L456 214 L476 256"/></g>
  <path class="dg36b-flat" d="M70 250 C200 249 420 249 610 249" stroke-dasharray="6 5"/>
  <text x="330" y="242" class="dg36b-sub">extended release: no peak, no reflex surge</text>
  <text x="70" y="278" class="dg36b-sub">Each IR peak = abrupt vasodilation &#8594; baroreceptor reflex &#8594; tachycardia (Slides 10&#8211;11, 22)</text>

  <line x1="70" y1="40" x2="70" y2="262" class="dg36b-cursor"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Use-dependence: why verapamil/diltiazem work best on a fast node.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv36-ccb-use-dependence"] = {
  title: "Use-dependent (frequency-dependent) block",
  caption:
    "Verapamil and diltiazem bind the L-type channel from the inner side of the membrane and bind far better to <b>open</b> and <b>inactivated</b> channels than to resting ones, " +
    "and they slow the channel's rate of recovery (Slides 16&#8211;17). Each vertical tick is one depolarization. " +
    "The block bar under each lane fills as the sweep passes the ticks: at a resting rate few channels are caught, but during a supraventricular tachycardia the channel is open or inactivated most of the time and block accumulates. " +
    "That is why verapamil and diltiazem slow a fast AV node much more than a normal one (verapamil &gt; diltiazem), and why dihydropyridines &#8212; which do <i>not</i> alter the channel's rate of recovery &#8212; show no such effect at the AV node. " +
    "Bar heights are schematic; the direction of the effect is this lecture's.",
  svg: `
<svg viewBox="0 0 630 264" role="img" aria-label="Two lanes compare depolarization frequency. The upper lane, labelled resting heart rate, has widely spaced depolarization ticks and its accumulated block bar fills only slightly. The lower lane, labelled supraventricular tachycardia, has closely spaced ticks and its block bar fills almost completely, showing that block by verapamil and diltiazem accumulates with the frequency of stimulation.">
  <style>
    .dg36c-lbl  { font-size: 12px; font-weight: 700; }
    .dg36c-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg36c-lane { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg36c-tick { stroke: var(--dg-ink); stroke-width: 2.4; opacity: .55; }
    .dg36c-track{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg36c-fill { fill: var(--dg-accent); }
    .dg36c-hot  { fill: var(--dg-warm); }

    .dg36c-sweep { fill: var(--dg-accent); opacity: .16;
                   animation: dg36cSweep 8s linear infinite; }
    @keyframes dg36cSweep { from { transform: translateX(0) } to { transform: translateX(348px) } }

    .dg36c-b1 { transform-box: view-box; transform-origin: 190px 0px;
                animation: dg36cFillLow 8s linear infinite; }
    .dg36c-b2 { transform-box: view-box; transform-origin: 190px 0px;
                animation: dg36cFillHigh 8s linear infinite; }
    @keyframes dg36cFillLow  { 0% { transform: scaleX(.02) } 92%, 100% { transform: scaleX(.34) } }
    @keyframes dg36cFillHigh { 0% { transform: scaleX(.02) } 92%, 100% { transform: scaleX(.92) } }
  </style>

  <text x="16" y="22" class="dg36c-lbl">Depolarizations</text>
  <text x="404" y="22" class="dg36c-lbl">Channel block</text>

  <text x="16" y="62" class="dg36c-lbl">Resting rate</text>
  <text x="16" y="78" class="dg36c-sub">normal AV node</text>
  <rect x="190" y="42" width="348" height="44" rx="7" class="dg36c-lane"/>
  <line x1="216" y1="48" x2="216" y2="80" class="dg36c-tick"/>
  <line x1="288" y1="48" x2="288" y2="80" class="dg36c-tick"/>
  <line x1="360" y1="48" x2="360" y2="80" class="dg36c-tick"/>
  <line x1="432" y1="48" x2="432" y2="80" class="dg36c-tick"/>
  <line x1="504" y1="48" x2="504" y2="80" class="dg36c-tick"/>
  <rect class="dg36c-sweep" x="190" y="42" width="26" height="44" rx="6"/>
  <rect x="190" y="96" width="348" height="14" rx="7" class="dg36c-track"/>
  <rect class="dg36c-fill dg36c-b1" x="190" y="96" width="348" height="14" rx="7"/>
  <text x="546" y="107" class="dg36c-sub">little block</text>

  <text x="16" y="164" class="dg36c-lbl">SVT / fast AV node</text>
  <text x="16" y="180" class="dg36c-sub">channel open or</text>
  <text x="16" y="194" class="dg36c-sub">inactivated more often</text>
  <rect x="190" y="144" width="348" height="44" rx="7" class="dg36c-lane"/>
  <line x1="204" y1="150" x2="204" y2="182" class="dg36c-tick"/>
  <line x1="230" y1="150" x2="230" y2="182" class="dg36c-tick"/>
  <line x1="256" y1="150" x2="256" y2="182" class="dg36c-tick"/>
  <line x1="282" y1="150" x2="282" y2="182" class="dg36c-tick"/>
  <line x1="308" y1="150" x2="308" y2="182" class="dg36c-tick"/>
  <line x1="334" y1="150" x2="334" y2="182" class="dg36c-tick"/>
  <line x1="360" y1="150" x2="360" y2="182" class="dg36c-tick"/>
  <line x1="386" y1="150" x2="386" y2="182" class="dg36c-tick"/>
  <line x1="412" y1="150" x2="412" y2="182" class="dg36c-tick"/>
  <line x1="438" y1="150" x2="438" y2="182" class="dg36c-tick"/>
  <line x1="464" y1="150" x2="464" y2="182" class="dg36c-tick"/>
  <line x1="490" y1="150" x2="490" y2="182" class="dg36c-tick"/>
  <line x1="516" y1="150" x2="516" y2="182" class="dg36c-tick"/>
  <rect class="dg36c-sweep" x="190" y="144" width="26" height="44" rx="6"/>
  <rect x="190" y="198" width="348" height="14" rx="7" class="dg36c-track"/>
  <rect class="dg36c-fill dg36c-b2" x="190" y="198" width="348" height="14" rx="7"/>
  <text x="546" y="209" class="dg36c-sub">deep block</text>

  <text x="16" y="242" class="dg36c-sub">Non-DHP only: block is enhanced as the frequency of stimulation increases (verapamil &gt; diltiazem).</text>
  <text x="16" y="257" class="dg36c-sub">DHPs do not affect the channel's rate of recovery and do not slow AV conduction (Slide 17).</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Dihydropyridine ankle edema - a pressure problem, not a volume problem.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv36-dhp-edema"] = {
  title: "DHP peripheral edema: pressure, not volume",
  caption:
    "Dihydropyridines relax <b>arteriolar</b> smooth muscle only &#8212; they do not dilate venules or veins. " +
    "The precapillary vessel therefore opens while the postcapillary venule reflexly constricts, so capillary hydrostatic pressure and permeability both rise and fluid redistributes into the interstitium (Slide 22). " +
    "Gravity puts the result in the feet and ankles. " +
    "The clinically important consequence, emphasised by the lecturer, is that this is a redistribution of fluid rather than volume overload, so a diuretic will not improve it &#8212; the fix is dose reduction or a different agent.",
  svg: `
<svg viewBox="0 0 630 268" role="img" aria-label="A precapillary arteriole on the left widens while the postcapillary venule on the right narrows. Pressure inside the capillary between them rises and droplets of fluid cross the capillary wall downward into the interstitium, producing ankle edema. A note states that this is not volume overload and that diuretics do not improve it.">
  <style>
    .dg36a-lbl   { font-size: 12px; font-weight: 700; }
    .dg36a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg36a-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg36a-tissue{ fill: none; stroke: var(--dg-line); stroke-width: 1.3; stroke-dasharray: 5 4; }
    .dg36a-flow  { stroke: var(--dg-line); stroke-width: 1.6; fill: none; }

    .dg36a-art { transform-box: view-box; transform-origin: 128px 118px;
                 animation: dg36aDilate 6.5s ease-in-out infinite; }
    .dg36a-ven { transform-box: view-box; transform-origin: 499px 118px;
                 animation: dg36aSqueeze 6.5s ease-in-out infinite; }
    @keyframes dg36aDilate  { 0%, 8%  { transform: scaleY(.58) } 40%, 100% { transform: scaleY(1.18) } }
    @keyframes dg36aSqueeze { 0%, 22% { transform: scaleY(1) }   54%, 100% { transform: scaleY(.42) } }

    .dg36a-press { transform-box: view-box; transform-origin: 224px 118px;
                   animation: dg36aPress 6.5s ease-in-out infinite; }
    @keyframes dg36aPress { 0%, 24% { transform: scaleX(.08) } 62%, 100% { transform: scaleX(1) } }

    .dg36a-d1 { animation: dg36aLeak 6.5s ease-in-out infinite; }
    .dg36a-d2 { animation: dg36aLeak 6.5s ease-in-out infinite .45s; }
    .dg36a-d3 { animation: dg36aLeak 6.5s ease-in-out infinite .9s; }
    @keyframes dg36aLeak {
      0%, 46% { transform: translateY(0);    opacity: 0 }
      56%     { opacity: .95 }
      92%     { opacity: .95 }
      100%    { transform: translateY(52px); opacity: 0 }
    }
  </style>

  <text x="46"  y="30" class="dg36a-lbl" fill="var(--dg-warm)">Precapillary arteriole</text>
  <text x="46"  y="46" class="dg36a-sub">DHP CCB dilates it</text>
  <text x="216" y="30" class="dg36a-lbl">Capillary</text>
  <text x="216" y="46" class="dg36a-sub">pressure and permeability rise</text>
  <text x="416" y="30" class="dg36a-lbl" fill="var(--dg-cool)">Postcapillary venule</text>
  <text x="416" y="46" class="dg36a-sub">reflex constriction; not dilated</text>

  <path class="dg36a-flow" d="M50 70 H556"/>
  <polygon points="556,64 574,70 556,76" fill="var(--dg-line)"/>
  <text x="50" y="64" class="dg36a-sub">blood flow</text>

  <rect class="dg36a-lumen dg36a-art" x="48"  y="100" width="160" height="36" rx="12"/>
  <rect class="dg36a-lumen"           x="212" y="110" width="196" height="16" rx="7"/>
  <rect class="dg36a-lumen dg36a-ven" x="412" y="100" width="174" height="36" rx="12"/>

  <rect class="dg36a-press" x="220" y="113" width="180" height="10" rx="5" fill="var(--dg-warm)" opacity=".85"/>
  <text x="220" y="106" class="dg36a-sub" fill="var(--dg-warm)">P capillary &#8593;</text>

  <g class="dg36a-d1"><circle cx="252" cy="130" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg36a-d2"><circle cx="308" cy="130" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg36a-d3"><circle cx="364" cy="130" r="5" fill="var(--dg-warm)"/></g>

  <rect class="dg36a-tissue" x="196" y="176" width="248" height="58" rx="12"/>
  <text x="210" y="200" class="dg36a-lbl">Interstitium</text>
  <text x="210" y="218" class="dg36a-sub">pitting edema, feet and ankles</text>

  <text x="460" y="196" class="dg36a-lbl" fill="var(--dg-accent)">Not volume overload</text>
  <text x="460" y="214" class="dg36a-sub">diuretics do not improve it</text>
  <text x="460" y="230" class="dg36a-sub">(Slide 22)</text>

  <text x="46" y="258" class="dg36a-sub">Peripheral edema is the most common adverse effect of the dihydropyridines.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Beta blocker withdrawal syndrome - receptor upregulation meets catecholamines.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv36-bb-withdrawal"] = {
  title: "Beta blocker withdrawal syndrome",
  caption:
    "During chronic blockade the membrane adds beta adrenoceptors &#8212; upregulation and supersensitivity (Slide 54). " +
    "The blocked receptors are harmless while the drug is present, but if the drug is stopped abruptly the caps come off all at once and circulating norepinephrine and epinephrine reach a receptor pool larger than the one the patient started with. " +
    "The solid trace shows the result: blood pressure and heart rate overshoot <i>above</i> the pre-treatment level, with nervousness, tachycardia, increased intensity of angina, and an increased risk of myocardial infarction and sudden death. " +
    "The dashed trace is the correct alternative &#8212; a gradual taper, which the lecturer specifies as at least a week and often longer depending on how long the patient has been treated.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A timeline in three phases. During chronic beta blockade blood pressure sits below the pre-treatment line while beta receptors accumulate on the membrane, each capped by drug. At the abrupt stop the caps disappear, catecholamines reach every receptor, and the blood pressure trace overshoots above the pre-treatment baseline before settling. A dashed alternative trace shows a gradual taper returning smoothly to baseline without any overshoot.">
  <style>
    .dg36d-lbl  { font-size: 11.5px; font-weight: 700; }
    .dg36d-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg36d-base { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg36d-stop { stroke: var(--dg-warm); stroke-width: 1.6; stroke-dasharray: 4 4; }
    .dg36d-tr   { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; }
    .dg36d-tp   { fill: none; stroke: var(--dg-good); stroke-width: 2.8; stroke-dasharray: 7 5; stroke-linecap: round; }
    .dg36d-mem  { stroke: var(--dg-line); stroke-width: 2.4; }
    .dg36d-rec  { stroke: var(--dg-ink); stroke-width: 2.2; fill: none; stroke-linecap: round; }

    .dg36d-cursor { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .75;
                    animation: dg36dSweep 10s linear infinite; }
    @keyframes dg36dSweep { from { transform: translateX(0) } to { transform: translateX(540px) } }

    .dg36d-n2 { animation: dg36dGrow 10s linear infinite; }
    .dg36d-n3 { animation: dg36dGrow 10s linear infinite .9s; }
    .dg36d-n4 { animation: dg36dGrow 10s linear infinite 1.8s; }
    .dg36d-n5 { animation: dg36dGrow 10s linear infinite 2.7s; }
    .dg36d-n6 { animation: dg36dGrow 10s linear infinite 3.6s; }
    @keyframes dg36dGrow { 0%, 4% { opacity: 0 } 12%, 100% { opacity: 1 } }

    .dg36d-cap { fill: var(--dg-accent); animation: dg36dCap 10s linear infinite; }
    @keyframes dg36dCap { 0%, 48% { opacity: 1 } 53%, 96% { opacity: 0 } 100% { opacity: 1 } }

    .dg36d-cat  { fill: var(--dg-warm); animation: dg36dRain 10s linear infinite; }
    .dg36d-cat2 { fill: var(--dg-warm); animation: dg36dRain 10s linear infinite .5s; }
    .dg36d-cat3 { fill: var(--dg-warm); animation: dg36dRain 10s linear infinite 1s; }
    @keyframes dg36dRain {
      0%, 52% { transform: translateY(0);    opacity: 0 }
      60%     { opacity: 1 }
      82%     { opacity: 1 }
      100%    { transform: translateY(34px); opacity: 0 }
    }
  </style>

  <text x="58"  y="22" class="dg36d-lbl">1. Chronic blockade</text>
  <text x="316" y="22" class="dg36d-lbl" fill="var(--dg-warm)">2. Abrupt stop</text>
  <text x="440" y="22" class="dg36d-lbl" fill="var(--dg-warm)">3. Rebound overshoot</text>

  <text x="12" y="104" class="dg36d-sub">BP / HR</text>
  <line x1="58" y1="104" x2="600" y2="104" class="dg36d-base"/>
  <text x="604" y="100" class="dg36d-sub" text-anchor="end">pre-treatment level</text>

  <path class="dg36d-tr" d="M58 104 C86 118 108 124 150 124 L300 124 C328 122 340 62 382 54 C424 48 442 64 472 74 C520 86 560 94 600 98"/>
  <path class="dg36d-tp" d="M306 124 C364 122 420 116 470 110 C522 106 560 104 600 104"/>
  <text x="470" y="128" class="dg36d-sub" fill="var(--dg-good)">gradual taper: no overshoot</text>
  <text x="396" y="44"  class="dg36d-sub" fill="var(--dg-warm)">above baseline</text>

  <line x1="306" y1="40" x2="306" y2="140" class="dg36d-stop"/>

  <text x="12" y="182" class="dg36d-lbl">Beta receptors on the membrane</text>
  <text x="12" y="198" class="dg36d-sub">upregulation / supersensitivity during blockade</text>
  <line x1="58" y1="264" x2="600" y2="264" class="dg36d-mem"/>

  <g>
    <path class="dg36d-rec" d="M92 264 V246 M84 236 L92 246 L100 236"/>
    <rect class="dg36d-cap" x="82" y="226" width="20" height="8" rx="4"/>
  </g>
  <g class="dg36d-n2">
    <path class="dg36d-rec" d="M152 264 V246 M144 236 L152 246 L160 236"/>
    <rect class="dg36d-cap" x="142" y="226" width="20" height="8" rx="4"/>
  </g>
  <g class="dg36d-n3">
    <path class="dg36d-rec" d="M212 264 V246 M204 236 L212 246 L220 236"/>
    <rect class="dg36d-cap" x="202" y="226" width="20" height="8" rx="4"/>
  </g>
  <g class="dg36d-n4">
    <path class="dg36d-rec" d="M272 264 V246 M264 236 L272 246 L280 236"/>
    <rect class="dg36d-cap" x="262" y="226" width="20" height="8" rx="4"/>
  </g>
  <g class="dg36d-n5">
    <path class="dg36d-rec" d="M332 264 V246 M324 236 L332 246 L340 236"/>
    <rect class="dg36d-cap" x="322" y="226" width="20" height="8" rx="4"/>
  </g>
  <g class="dg36d-n6">
    <path class="dg36d-rec" d="M392 264 V246 M384 236 L392 246 L400 236"/>
    <rect class="dg36d-cap" x="382" y="226" width="20" height="8" rx="4"/>
  </g>

  <circle class="dg36d-cat"  cx="212" cy="212" r="5"/>
  <circle class="dg36d-cat2" cx="332" cy="212" r="5"/>
  <circle class="dg36d-cat3" cx="392" cy="212" r="5"/>
  <text x="440" y="216" class="dg36d-sub" fill="var(--dg-warm)">norepinephrine / epinephrine now reach every receptor</text>
  <text x="440" y="248" class="dg36d-sub">Taper over a week or more &#8212;</text>
  <text x="440" y="262" class="dg36d-sub">never stop a beta blocker abruptly.</text>

  <line x1="58" y1="36" x2="58" y2="272" class="dg36d-cursor"/>
</svg>`,
};

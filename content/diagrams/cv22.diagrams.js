/*
 * cv22 - Cardiac Action Potentials (Lecture #22, Y. Zhang, M.D., Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The fast-response AP drawn in real time by the currents underneath it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv22-fast-ap-phases-currents"] = {
  title: "Fast-response AP: the currents draw the curve",
  caption:
    "One time cursor sweeps across the ventricular action potential and the five current lanes together, so each phase appears as the currents that make it. " +
    "<b>Phase 0:</b> an incoming AP lifts Vm to threshold (~ &#8722;55 mV) and fast Na&#8314; channels drive Vm from ~ &#8722;90 mV to ~ +20&#8211;30 mV &#8212; explosive, then self-inactivating. " +
    "<b>Phase 1:</b> the transient outward K&#8314; current (I_to) blips, dropping the peak toward ~0 mV. " +
    "<b>Phase 2:</b> the plateau is a live tug-of-war &#8212; inward L-type Ca&#178;&#8314; current (opens slowly, lasts long) is nearly cancelled by outward delayed rectifier K&#8314; current (I_Kr rapid, I_Ks slow, I_Kur ultra-rapid); the slight net outward current is the gentle downslope. " +
    "<b>Phase 3:</b> L-type Ca&#178;&#8314; channels close as delayed rectifier K&#8314; peaks, and once Vm falls below &#8722;30 mV the inward rectifier I_K1 switches on and finishes the job. " +
    "<b>Phase 4:</b> Na&#8314; and Ca&#178;&#8314; channels are shut and I_K1 alone holds Vm near E(K&#8314;) &#8776; &#8722;96 mV while the pumps restore the gradients. " +
    "Voltages and the 300&#8211;400 ms duration are this lecture's (Slides 15&#8211;23). Lane heights are schematic: they show <i>when</i> a current is on, not its true amplitude.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A ventricular fast-response action potential traced left to right above five ion-current lanes, with a time cursor crossing all of them at once. The fast sodium current flashes and dies during the phase 0 upstroke; the transient outward potassium current blips during the phase 1 notch; the L-type calcium current opens slowly and stays on through the phase 2 plateau, where it is nearly cancelled by the delayed rectifier potassium current; and the inward rectifier current I K one, which is off while the cell is depolarized, switches back on once repolarization passes minus 30 millivolts and then holds the resting potential through phase 4.">
  <style>
    .dg22a-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg22a-note { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg22a-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; fill: none; }
    .dg22a-thr  { stroke: var(--dg-accent); stroke-width: 1.2; stroke-dasharray: 5 4; opacity: .85; }
    .dg22a-ghost{ fill: none; stroke: var(--dg-line); stroke-width: 3.4; stroke-linejoin: round; stroke-linecap: round; }
    .dg22a-trace{ fill: none; stroke: var(--dg-ink); stroke-width: 3.4; stroke-linejoin: round; stroke-linecap: round; }
    .dg22a-in   { fill: var(--dg-warm); }
    .dg22a-out  { fill: var(--dg-cool); }
    .dg22a-sin  { stroke: var(--dg-warm); }
    .dg22a-sout { stroke: var(--dg-cool); }
    .dg22a-lane { stroke: var(--dg-line); stroke-width: 1; }
    .dg22a-lbl  { font-size: 10px; font-weight: 700; }
    .dg22a-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg22a-ax   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg22a-ph   { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg22a-dot  { fill: var(--dg-accent); }
    .dg22a-cur  { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .7; }

    .dg22a-sweep { transform-box: view-box; transform: translateX(0); animation: dg22aSweep 7s linear infinite; }
    .dg22a-mask  { transform-box: view-box; transform: translateX(520px); animation: dg22aSweep 7s linear infinite; }
    @keyframes dg22aSweep { from { transform: translateX(0) } to { transform: translateX(520px) } }

    .dg22a-cNa { opacity: .8; animation: dg22aNa 7s linear infinite; }
    .dg22a-cTo { opacity: .8; animation: dg22aTo 7s linear infinite; }
    .dg22a-cCa { opacity: .8; animation: dg22aCa 7s linear infinite; }
    .dg22a-cKd { opacity: .8; animation: dg22aKd 7s linear infinite; }
    .dg22a-cK1 { opacity: .8; animation: dg22aK1 7s linear infinite; }
    @keyframes dg22aNa { 0%, 8.5% { opacity: .2 } 10.5%, 12.5% { opacity: 1 } 15%, 100% { opacity: .2 } }
    @keyframes dg22aTo { 0%, 10.5% { opacity: .2 } 13%, 15.5% { opacity: 1 } 19%, 100% { opacity: .2 } }
    @keyframes dg22aCa { 0%, 11% { opacity: .2 } 20%, 60% { opacity: 1 } 68%, 100% { opacity: .2 } }
    @keyframes dg22aKd { 0%, 16% { opacity: .2 } 30% { opacity: .6 } 55%, 68% { opacity: 1 } 78%, 100% { opacity: .2 } }
    @keyframes dg22aK1 { 0%, 9% { opacity: 1 } 11%, 63% { opacity: .2 } 66%, 100% { opacity: 1 } }

    .dg22a-tugIn  { animation: dg22aTugIn 7s linear infinite; }
    .dg22a-tugOut { animation: dg22aTugOut 7s linear infinite; }
    @keyframes dg22aTugIn  { 0%, 20% { opacity: .35 } 28% { opacity: 1 } 42% { opacity: .45 } 56% { opacity: 1 } 64%, 100% { opacity: .35 } }
    @keyframes dg22aTugOut { 0%, 20% { opacity: .35 } 35% { opacity: 1 } 49% { opacity: .45 } 62% { opacity: 1 } 66%, 100% { opacity: .35 } }
  </style>

  <text x="8" y="20" class="dg22a-ax">Vm (mV)</text>
  <rect x="352" y="11" width="11" height="11" rx="2.5" class="dg22a-in"/>
  <text x="368" y="20" class="dg22a-tiny">inward (depolarizing)</text>
  <rect x="484" y="11" width="11" height="11" rx="2.5" class="dg22a-out"/>
  <text x="500" y="20" class="dg22a-tiny">outward (repolarizing)</text>

  <rect x="80" y="32" width="520" height="106" rx="6" class="dg22a-plot"/>
  <line x1="80" y1="62" x2="600" y2="62" class="dg22a-grid"/>
  <line x1="80" y1="85" x2="600" y2="85" class="dg22a-grid"/>
  <line x1="80" y1="104" x2="232" y2="104" class="dg22a-thr"/>

  <text x="76" y="44"  class="dg22a-ax" text-anchor="end">+30</text>
  <text x="76" y="66"  class="dg22a-ax" text-anchor="end">0</text>
  <text x="76" y="88"  class="dg22a-ax" text-anchor="end">&#8722;30</text>
  <text x="76" y="108" class="dg22a-ax" text-anchor="end">&#8722;55</text>
  <text x="76" y="133" class="dg22a-ax" text-anchor="end">&#8722;90</text>
  <text x="86" y="100" class="dg22a-tiny">threshold</text>

  <path class="dg22a-ghost" d="M80 130 H130 L136 40 C142 42 148 56 162 62 C240 65 320 70 400 74 C420 82 432 112 446 122 C456 129 466 130 478 130 H600"/>
  <clipPath id="wipeCv22a" clipPathUnits="userSpaceOnUse">
    <rect class="dg22a-mask" x="-440" y="30" width="520" height="112"/>
  </clipPath>
  <g clip-path="url(#wipeCv22a)">
    <path class="dg22a-trace" d="M80 130 H130 L136 40 C142 42 148 56 162 62 C240 65 320 70 400 74 C420 82 432 112 446 122 C456 129 466 130 478 130 H600"/>
  </g>

  <text x="98"  y="124" class="dg22a-ph">4</text>
  <text x="118" y="80"  class="dg22a-ph">0</text>
  <text x="156" y="52"  class="dg22a-ph">1</text>
  <text x="290" y="56"  class="dg22a-ph">2</text>
  <text x="452" y="96"  class="dg22a-ph">3</text>
  <text x="540" y="122" class="dg22a-ph">4</text>

  <circle cx="415" cy="85" r="4" class="dg22a-dot"/>
  <line x1="419" y1="83" x2="466" y2="68" class="dg22a-lane"/>
  <text x="470" y="70" class="dg22a-tiny">I_K1 switches on below &#8722;30 mV</text>
  <line x1="415" y1="90" x2="415" y2="268" class="dg22a-grid"/>

  <rect x="232" y="86" width="168" height="46" rx="7" class="dg22a-note"/>
  <text x="240" y="100" class="dg22a-tiny" font-weight="700">PHASE 2: Ca&#178;&#8314; in &#8776; K&#8314; out</text>
  <g class="dg22a-tugIn">
    <line x1="248" y1="106" x2="248" y2="122" class="dg22a-sin" stroke-width="4"/>
    <polygon points="243,120 248,130 253,120" class="dg22a-in"/>
  </g>
  <g class="dg22a-tugOut">
    <line x1="264" y1="128" x2="264" y2="112" class="dg22a-sout" stroke-width="4"/>
    <polygon points="259,114 264,104 269,114" class="dg22a-out"/>
  </g>
  <text x="280" y="115" class="dg22a-tiny">slight net OUTWARD</text>
  <text x="280" y="127" class="dg22a-tiny">&#8594; gentle downslope</text>

  <line x1="80" y1="174" x2="600" y2="174" class="dg22a-lane"/>
  <line x1="80" y1="202" x2="600" y2="202" class="dg22a-lane"/>
  <line x1="80" y1="230" x2="600" y2="230" class="dg22a-lane"/>
  <line x1="80" y1="258" x2="600" y2="258" class="dg22a-lane"/>
  <line x1="80" y1="286" x2="600" y2="286" class="dg22a-lane"/>

  <text x="74" y="171" class="dg22a-lbl" text-anchor="end">I_Na fast</text>
  <text x="74" y="199" class="dg22a-lbl" text-anchor="end">I_to</text>
  <text x="74" y="227" class="dg22a-lbl" text-anchor="end">I_Ca L-type</text>
  <text x="74" y="255" class="dg22a-lbl" text-anchor="end">I_K delayed</text>
  <text x="74" y="283" class="dg22a-lbl" text-anchor="end">I_K1</text>

  <path class="dg22a-in dg22a-cNa" d="M130 174 C134 174 135 158 138 153 C141 158 145 170 154 174 Z"/>
  <text x="160" y="166" class="dg22a-tiny">explosive, then INACTIVATES on its own</text>

  <path class="dg22a-out dg22a-cTo" d="M138 202 C144 202 146 190 151 187 C158 191 164 199 174 202 Z"/>
  <text x="180" y="194" class="dg22a-tiny">brief blip &#8594; the phase 1 notch</text>

  <path class="dg22a-in dg22a-cCa" d="M140 230 C168 230 182 218 206 214 C270 212 330 213 372 216 C396 219 410 227 430 230 Z"/>
  <text x="436" y="222" class="dg22a-tiny">opens SLOWLY, lasts LONG</text>

  <path class="dg22a-out dg22a-cKd" d="M168 258 C240 256 300 251 370 245 C392 242 410 242 428 246 C450 251 466 256 484 258 Z"/>
  <text x="490" y="250" class="dg22a-tiny">I_Kr, I_Ks, I_Kur</text>

  <g class="dg22a-out dg22a-cK1">
    <path d="M80 286 L80 271 L124 271 C128 275 130 281 131 286 Z"/>
    <path d="M414 286 C420 279 428 272 440 271 L600 271 L600 286 Z"/>
  </g>
  <text x="272" y="281" class="dg22a-tiny" text-anchor="middle">shut while the cell is depolarized</text>
  <text x="452" y="268" class="dg22a-tiny">holds Vm near E(K&#8314;) &#8776; &#8722;96 mV</text>

  <line x1="130" y1="298" x2="478" y2="298" class="dg22a-lane"/>
  <line x1="130" y1="294" x2="130" y2="302" class="dg22a-lane"/>
  <line x1="478" y1="294" x2="478" y2="302" class="dg22a-lane"/>
  <text x="304" y="312" class="dg22a-tiny" text-anchor="middle">one action potential &#8212; 300&#8211;400 ms (a nerve AP is ~1 ms)</text>
  <text x="8" y="312" class="dg22a-tiny">numbers = phases</text>
  <text x="600" y="312" class="dg22a-tiny" text-anchor="end">time &#8594;</text>

  <line class="dg22a-cur dg22a-sweep" x1="80" y1="32" x2="80" y2="292"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The two Na+ gates and the refractory periods they create.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv22-na-gates-refractory"] = {
  title: "Two gates, one window &#8212; and the refractory periods",
  caption:
    "The fast Na&#8314; channel has an <b>activation (fast) gate</b> and an <b>inactivation (slow) gate</b>. " +
    "At rest the activation gate is shut and the inactivation gate is open. At threshold the activation gate snaps open while the inactivation gate only begins to close, " +
    "so Na&#8314; flows through the brief <b>window when both are open</b> (green band; drawn much wider than life so it is visible). " +
    "The channel is then <b>inactivated</b> and cannot reopen until Vm falls back below threshold at the end of phase 3 &#8212; which is exactly why the " +
    "<b>effective (absolute) refractory period</b> runs from phase 0 through phase 3 (probe 1: no AP at any stimulus strength), why the " +
    "<b>relative refractory period</b> runs from that threshold crossing to the start of phase 4 (probe 2: a stronger stimulus gives a smaller AP, because only some gates have reset), " +
    "and why a phase 4 stimulus gives a normal AP (probe 3). " +
    "Same logic explains hyperkalemia: a sustained less-negative resting Vm strands Na&#8314; channels inactivated, slowing phase 0 and widening the QRS. " +
    "Refractory-period definitions are this lecture's (Slides 16&#8211;17, 34&#8211;39).",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A cardiac action potential with two bars beneath it running on the same time axis. The first bar marks the effective refractory period from phase zero until repolarization crosses threshold, then the relative refractory period until the start of phase four. The second bar gives the state of the fast sodium channel: gates reset, then a narrow band where both gates are open and sodium flows, then a long inactivated stretch that cannot reopen until membrane voltage falls below threshold, then recovery and reset. Five channel icons show the gate positions for each state, and three panels show what a test stimulus produces at three moments: no action potential inside the effective refractory period, a small one in the relative refractory period, and a full one in phase four.">
  <style>
    .dg22b-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg22b-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 4; }
    .dg22b-thr  { stroke: var(--dg-accent); stroke-width: 1.2; stroke-dasharray: 5 4; opacity: .85; }
    .dg22b-trace{ fill: none; stroke: var(--dg-ink); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg22b-erp  { fill: var(--dg-warm); opacity: .3; }
    .dg22b-rrp  { fill: var(--dg-cool); opacity: .3; }
    .dg22b-seg  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg22b-segI { fill: var(--dg-warm); opacity: .28; }
    .dg22b-segR { fill: var(--dg-cool); opacity: .28; }
    .dg22b-wall { fill: var(--dg-muted); opacity: .45; }
    .dg22b-gate { fill: var(--dg-ink); }
    .dg22b-half { fill: var(--dg-ink); opacity: .4; }
    .dg22b-pnl  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg22b-hi   { fill: var(--dg-accent); opacity: 0; }
    .dg22b-bad  { fill: var(--dg-accent); }
    .dg22b-badT { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg22b-lbl  { font-size: 10px; font-weight: 700; }
    .dg22b-mid  { font-size: 9px; }
    .dg22b-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg22b-ax   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg22b-ph   { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg22b-big  { font-size: 13px; font-weight: 700; }
    .dg22b-ring { fill: none; stroke: var(--dg-accent); stroke-width: 2; opacity: 0; }
    .dg22b-pc   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.6; }
    .dg22b-pcT  { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dg22b-cur  { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .7; }
    .dg22b-base { stroke: var(--dg-muted); stroke-width: 1.4; }
    .dg22b-stim { stroke: var(--dg-warm); stroke-width: 2; }
    .dg22b-bump { fill: none; stroke: var(--dg-ink); stroke-width: 2; }

    .dg22b-sweep { transform-box: view-box; transform: translateX(0); animation: dg22bSweep 7s linear infinite; }
    @keyframes dg22bSweep { from { transform: translateX(0) } to { transform: translateX(550px) } }

    .dg22b-win { fill: var(--dg-good); opacity: .3; animation: dg22bWin 7s linear infinite; }
    @keyframes dg22bWin { 0%, 10% { opacity: .3 } 13%, 17% { opacity: .85 } 20%, 100% { opacity: .3 } }

    .dg22b-ions { fill: var(--dg-warm); transform-box: view-box; transform: translateY(26px); opacity: .9; animation: dg22bIons 7s linear infinite; }
    @keyframes dg22bIons {
      0%, 11.5% { opacity: 0; transform: translateY(0) }
      13%       { opacity: 1; transform: translateY(6px) }
      18%       { opacity: 1; transform: translateY(44px) }
      19.5%, 100% { opacity: 0; transform: translateY(44px) }
    }

    .dg22b-r1 { animation: dg22bR1 7s linear infinite; }
    .dg22b-r2 { animation: dg22bR2 7s linear infinite; }
    .dg22b-r3 { animation: dg22bR3 7s linear infinite; }
    .dg22b-r4 { animation: dg22bR4 7s linear infinite; }
    .dg22b-r5 { animation: dg22bR5 7s linear infinite; }
    @keyframes dg22bR1 { 0%, 9% { opacity: .9 } 12%, 100% { opacity: 0 } }
    @keyframes dg22bR2 { 0%, 11% { opacity: 0 } 13%, 18% { opacity: .9 } 20%, 100% { opacity: 0 } }
    @keyframes dg22bR3 { 0%, 19% { opacity: 0 } 22%, 64% { opacity: .9 } 67%, 100% { opacity: 0 } }
    @keyframes dg22bR4 { 0%, 65% { opacity: 0 } 68%, 77% { opacity: .9 } 80%, 100% { opacity: 0 } }
    @keyframes dg22bR5 { 0%, 79% { opacity: 0 } 82%, 100% { opacity: .9 } }

    .dg22b-p1 { animation: dg22bP1 7s linear infinite; }
    .dg22b-p2 { animation: dg22bP2 7s linear infinite; }
    .dg22b-p3 { animation: dg22bP3 7s linear infinite; }
    @keyframes dg22bP1 { 0%, 36% { opacity: 0 } 40%, 47% { opacity: .16 } 51%, 100% { opacity: 0 } }
    @keyframes dg22bP2 { 0%, 68% { opacity: 0 } 72%, 79% { opacity: .16 } 83%, 100% { opacity: 0 } }
    @keyframes dg22bP3 { 0%, 85% { opacity: 0 } 89%, 96% { opacity: .16 } 99%, 100% { opacity: 0 } }

    .dg22b-q1 { animation: dg22bQ1 7s linear infinite; }
    .dg22b-q2 { animation: dg22bQ2 7s linear infinite; }
    .dg22b-q3 { animation: dg22bQ3 7s linear infinite; }
    @keyframes dg22bQ1 { 0%, 36% { opacity: 0 } 40%, 47% { opacity: .9 } 51%, 100% { opacity: 0 } }
    @keyframes dg22bQ2 { 0%, 68% { opacity: 0 } 72%, 79% { opacity: .9 } 83%, 100% { opacity: 0 } }
    @keyframes dg22bQ3 { 0%, 85% { opacity: 0 } 89%, 96% { opacity: .9 } 99%, 100% { opacity: 0 } }
  </style>

  <text x="8" y="24" class="dg22b-ax">Vm (mV)</text>
  <rect x="70" y="30" width="550" height="98" rx="6" class="dg22b-plot"/>
  <rect class="dg22b-win" x="140" y="30" width="26" height="138"/>
  <line x1="70" y1="58" x2="620" y2="58" class="dg22b-grid"/>
  <line x1="70" y1="95" x2="620" y2="95" class="dg22b-thr"/>

  <text x="64" y="42"  class="dg22b-ax" text-anchor="end">+30</text>
  <text x="64" y="61"  class="dg22b-ax" text-anchor="end">0</text>
  <text x="64" y="98"  class="dg22b-ax" text-anchor="end">&#8722;55</text>
  <text x="64" y="121" class="dg22b-ax" text-anchor="end">&#8722;90</text>
  <text x="74" y="91"  class="dg22b-tiny">threshold</text>

  <path class="dg22b-trace" d="M70 118 H140 L147 38 C153 40 160 54 172 58 C250 61 320 65 390 68 C420 76 440 104 462 114 C474 118 484 118 500 118 H620"/>

  <text x="178" y="34" class="dg22b-mid" fill="var(--dg-ink)">both gates open here &#8212; Na&#8314; rushes in</text>
  <text x="110" y="110" class="dg22b-ph">4</text>
  <text x="128" y="78"  class="dg22b-ph">0</text>
  <text x="180" y="52"  class="dg22b-ph">1</text>
  <text x="300" y="56"  class="dg22b-ph">2</text>
  <text x="424" y="58"  class="dg22b-ph">3</text>
  <text x="560" y="112" class="dg22b-ph">4</text>

  <circle cx="436" cy="95" r="4" fill="var(--dg-accent)"/>
  <line x1="436" y1="99" x2="436" y2="152" class="dg22b-grid"/>

  <circle class="dg22b-ring dg22b-q1" cx="290" cy="84" r="13"/>
  <circle class="dg22b-pc" cx="290" cy="84" r="8.5"/>
  <text x="290" y="88" class="dg22b-pcT" text-anchor="middle">1</text>
  <circle class="dg22b-ring dg22b-q2" cx="476" cy="84" r="13"/>
  <circle class="dg22b-pc" cx="476" cy="84" r="8.5"/>
  <text x="476" y="88" class="dg22b-pcT" text-anchor="middle">2</text>
  <circle class="dg22b-ring dg22b-q3" cx="560" cy="84" r="13"/>
  <circle class="dg22b-pc" cx="560" cy="84" r="8.5"/>
  <text x="560" y="88" class="dg22b-pcT" text-anchor="middle">3</text>

  <text x="64" y="142" class="dg22b-lbl" text-anchor="end">refractory</text>
  <rect class="dg22b-erp" x="140" y="130" width="296" height="14" rx="3"/>
  <rect class="dg22b-rrp" x="436" y="130" width="64" height="14" rx="3"/>
  <text x="288" y="141" class="dg22b-tiny" text-anchor="middle" font-weight="700" fill="var(--dg-ink)">EFFECTIVE (ABSOLUTE) REFRACTORY PERIOD</text>
  <text x="468" y="141" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-ink)">relative RP</text>
  <text x="560" y="141" class="dg22b-tiny" text-anchor="middle">fully excitable</text>

  <text x="64" y="164" class="dg22b-lbl" text-anchor="end">Na&#8314; channel</text>
  <rect class="dg22b-seg"  x="70"  y="152" width="70"  height="16" rx="3"/>
  <rect class="dg22b-segI" x="166" y="152" width="270" height="16" rx="3"/>
  <rect class="dg22b-segR" x="436" y="152" width="64"  height="16" rx="3"/>
  <rect class="dg22b-seg"  x="500" y="152" width="120" height="16" rx="3"/>
  <text x="105" y="164" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-ink)">gates reset</text>
  <text x="301" y="164" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-ink)">INACTIVATED &#8212; cannot reopen until Vm falls below threshold</text>
  <text x="468" y="164" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-ink)">recovering</text>
  <text x="560" y="164" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-ink)">reset, ready</text>

  <rect class="dg22b-ring dg22b-r1" x="89"  y="172" width="32" height="36" rx="6"/>
  <rect class="dg22b-wall" x="93"  y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-wall" x="112" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-gate" x="98"  y="182" width="14" height="4.5" rx="1.5"/>
  <rect class="dg22b-gate" x="98"  y="194" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="108.5" y="194" width="3.5" height="4.5" rx="1"/>
  <text x="86" y="187" class="dg22b-tiny" text-anchor="end">activation</text>
  <text x="86" y="199" class="dg22b-tiny" text-anchor="end">inactivation</text>
  <text x="105" y="214" class="dg22b-tiny" text-anchor="middle">at rest</text>

  <rect class="dg22b-ring dg22b-r2" x="139" y="172" width="32" height="36" rx="6"/>
  <rect class="dg22b-wall" x="143" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-wall" x="162" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-gate" x="148" y="182" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="158.5" y="182" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="148" y="194" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="158.5" y="194" width="3.5" height="4.5" rx="1"/>
  <g class="dg22b-ions">
    <circle cx="155" cy="164" r="3"/>
    <circle cx="155" cy="156" r="3"/>
    <circle cx="155" cy="148" r="3"/>
  </g>
  <text x="176" y="188" class="dg22b-mid" fill="var(--dg-warm)" font-weight="700">Na&#8314;</text>
  <text x="155" y="214" class="dg22b-tiny" text-anchor="middle" fill="var(--dg-good)" font-weight="700">BOTH OPEN</text>

  <rect class="dg22b-ring dg22b-r3" x="284" y="172" width="32" height="36" rx="6"/>
  <rect class="dg22b-wall" x="288" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-wall" x="307" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-gate" x="293" y="182" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="303.5" y="182" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="293" y="194" width="14" height="4.5" rx="1.5"/>
  <text x="300" y="214" class="dg22b-tiny" text-anchor="middle">inactivated</text>

  <rect class="dg22b-ring dg22b-r4" x="452" y="172" width="32" height="36" rx="6"/>
  <rect class="dg22b-wall" x="456" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-wall" x="475" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-gate" x="461" y="182" width="14" height="4.5" rx="1.5"/>
  <rect class="dg22b-half" x="461" y="194" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-half" x="471.5" y="194" width="3.5" height="4.5" rx="1"/>
  <text x="468" y="214" class="dg22b-tiny" text-anchor="middle">recovering</text>

  <rect class="dg22b-ring dg22b-r5" x="544" y="172" width="32" height="36" rx="6"/>
  <rect class="dg22b-wall" x="548" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-wall" x="567" y="176" width="5" height="28" rx="2"/>
  <rect class="dg22b-gate" x="553" y="182" width="14" height="4.5" rx="1.5"/>
  <rect class="dg22b-gate" x="553" y="194" width="3.5" height="4.5" rx="1"/>
  <rect class="dg22b-gate" x="563.5" y="194" width="3.5" height="4.5" rx="1"/>
  <text x="560" y="214" class="dg22b-tiny" text-anchor="middle">ready again</text>

  <text x="70" y="228" class="dg22b-tiny">activation gate = FAST, opens at threshold &#183; inactivation gate = SLOW, resets only below threshold</text>

  <rect class="dg22b-pnl" x="12"  y="234" width="196" height="68" rx="8"/>
  <rect class="dg22b-hi dg22b-p1" x="12" y="234" width="196" height="68" rx="8"/>
  <circle class="dg22b-bad" cx="28" cy="248" r="8.5"/>
  <text x="28" y="252" class="dg22b-badT" text-anchor="middle">1</text>
  <text x="42" y="252" class="dg22b-mid" font-weight="700">stimulus inside the ERP</text>
  <text x="24" y="280" class="dg22b-big" fill="var(--dg-warm)">NO AP</text>
  <line class="dg22b-base" x1="124" y1="288" x2="196" y2="288"/>
  <line class="dg22b-stim" x1="140" y1="288" x2="140" y2="272"/>
  <polygon points="136,274 140,264 144,274" fill="var(--dg-warm)"/>
  <text x="22" y="297" class="dg22b-tiny">any strength fails: gates inactivated</text>

  <rect class="dg22b-pnl" x="216" y="234" width="196" height="68" rx="8"/>
  <rect class="dg22b-hi dg22b-p2" x="216" y="234" width="196" height="68" rx="8"/>
  <circle class="dg22b-bad" cx="232" cy="248" r="8.5"/>
  <text x="232" y="252" class="dg22b-badT" text-anchor="middle">2</text>
  <text x="246" y="252" class="dg22b-mid" font-weight="700">stimulus in the relative RP</text>
  <text x="228" y="280" class="dg22b-big" fill="var(--dg-cool)">SMALL AP</text>
  <line class="dg22b-base" x1="328" y1="288" x2="400" y2="288"/>
  <line class="dg22b-stim" x1="338" y1="288" x2="338" y2="266"/>
  <polygon points="334,268 338,258 342,268" fill="var(--dg-warm)"/>
  <path class="dg22b-bump" d="M348 288 Q358 270 368 288"/>
  <text x="226" y="297" class="dg22b-tiny">stronger stimulus, only some gates reset</text>

  <rect class="dg22b-pnl" x="424" y="234" width="204" height="68" rx="8"/>
  <rect class="dg22b-hi dg22b-p3" x="424" y="234" width="204" height="68" rx="8"/>
  <circle class="dg22b-bad" cx="440" cy="248" r="8.5"/>
  <text x="440" y="252" class="dg22b-badT" text-anchor="middle">3</text>
  <text x="454" y="252" class="dg22b-mid" font-weight="700">stimulus in phase 4</text>
  <text x="436" y="280" class="dg22b-big" fill="var(--dg-good)">FULL AP</text>
  <line class="dg22b-base" x1="536" y1="288" x2="616" y2="288"/>
  <line class="dg22b-stim" x1="546" y1="288" x2="546" y2="272"/>
  <polygon points="542,274 546,264 550,274" fill="var(--dg-warm)"/>
  <path class="dg22b-bump" d="M556 288 L562 260 Q566 257 570 262 L578 288"/>
  <text x="434" y="297" class="dg22b-tiny">all gates reset &#8212; normal fast upstroke</text>

  <text x="12" y="314" class="dg22b-tiny">Because the ERP covers contraction and most of relaxation, a second AP cannot be summated &#8212; cardiac muscle cannot tetanize.</text>

  <line class="dg22b-cur dg22b-sweep" x1="70" y1="28" x2="70" y2="230"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Excitation-contraction coupling: CICR as a path through the cell.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv22-cicr-calcium-cycle"] = {
  title: "Excitation&#8211;contraction coupling: CICR",
  caption:
    "Follow the signal through the cell. <b>1</b> The AP travels along the sarcolemma and <b>2</b> dives inward along the <b>T-tubule</b> &#8212; which is why the tubule exists: it carries the voltage change deep enough to reach the SR. " +
    "<b>3</b> Voltage-gated <b>L-type Ca&#178;&#8314; channels (dihydropyridine receptors)</b> open and admit a <i>small</i> trigger current of Ca&#178;&#8314;. " +
    "<b>4</b> That trigger Ca&#178;&#8314; binds the <b>ryanodine receptor</b> on the sarcoplasmic reticulum, which dumps a <i>much larger</i> store &#8212; <b>calcium-induced calcium release</b>; " +
    "note the size and number of the moving dots: SR release, not the trigger, is the <b>major</b> source of the systolic Ca&#178;&#8314; rise. <b>5</b> Contraction. " +
    "<b>6</b> In diastole cytosolic Ca&#178;&#8314; leaves by two different routes: <b>SERCA</b> pumps it back into the SR, and the <b>Na&#8314;/Ca&#178;&#8314; exchanger</b> pumps 1 Ca&#178;&#8314; out of the cell in exchange for 3 Na&#8314; in. " +
    "That second route is the one digoxin bends: inhibiting the Na&#8314;/K&#8314;-ATPase raises intracellular Na&#8314;, the exchanger runs in reverse, Ca&#178;&#8314; accumulates, and contractility rises (Slides 14, 28).",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="A cardiac myocyte in cross section. An action potential pulse runs along the sarcolemma at the top and then down a T-tubule that dives into the cell. On the tubule wall an L-type calcium channel, also called the dihydropyridine receptor, lets a few small calcium ions into the dyadic cleft, where they reach the ryanodine receptor on the sarcoplasmic reticulum. The reticulum then releases a much larger flood of calcium ions that stream down to a sarcomere, which shortens. During relaxation calcium is taken back up into the reticulum by SERCA and pumped out of the cell by the sodium calcium exchanger, which carries one calcium out for three sodium in.">
  <style>
    .dg22c-ecf  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg22c-mem  { stroke: var(--dg-ink); stroke-width: 5; opacity: .35; stroke-linecap: round; }
    .dg22c-tub  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.4; opacity: .95; }
    .dg22c-sr   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg22c-prot { fill: var(--dg-accent); stroke: var(--dg-ink); stroke-width: 1; opacity: .85; }
    .dg22c-ryr  { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1; }
    .dg22c-ca   { fill: var(--dg-warm); }
    .dg22c-na   { fill: var(--dg-cool); }
    .dg22c-pulse{ fill: var(--dg-accent); }
    .dg22c-z    { fill: var(--dg-ink); opacity: .55; }
    .dg22c-fil  { stroke: var(--dg-ink); stroke-width: 1.6; opacity: .45; }
    .dg22c-myo  { fill: var(--dg-ink); opacity: .3; }
    .dg22c-lbl  { font-size: 9.5px; font-weight: 700; }
    .dg22c-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg22c-bad  { fill: var(--dg-accent); }
    .dg22c-badT { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg22c-lead { stroke: var(--dg-muted); stroke-width: 1; }

    .dg22c-apm { transform-box: view-box; transform: translateX(0); opacity: .9; animation: dg22cApm 9s linear infinite; }
    @keyframes dg22cApm {
      0%   { transform: translateX(0);     opacity: 1 }
      13%  { transform: translateX(190px); opacity: 1 }
      17%, 100% { transform: translateX(190px); opacity: 0 }
    }
    .dg22c-apt { transform-box: view-box; transform: translateY(0); opacity: .9; animation: dg22cApt 9s linear infinite; }
    @keyframes dg22cApt {
      0%, 12%  { transform: translateY(0); opacity: 0 }
      15%      { transform: translateY(8px); opacity: 1 }
      25%      { transform: translateY(84px); opacity: 1 }
      29%, 100% { transform: translateY(84px); opacity: 0 }
    }
    .dg22c-ltype { animation: dg22cLtype 9s linear infinite; }
    @keyframes dg22cLtype { 0%, 20% { opacity: .45 } 24%, 40% { opacity: 1 } 46%, 100% { opacity: .45 } }
    .dg22c-ryrA { animation: dg22cRyrA 9s linear infinite; }
    @keyframes dg22cRyrA { 0%, 28% { opacity: .5 } 32%, 55% { opacity: 1 } 60%, 100% { opacity: .5 } }

    .dg22c-trig { transform-box: view-box; opacity: .9; animation: dg22cTrig 9s linear infinite; }
    @keyframes dg22cTrig {
      0%, 22% { opacity: 0; transform: translate(0, 0) }
      25%     { opacity: 1; transform: translate(8px, 1px) }
      38%     { opacity: 1; transform: translate(62px, 10px) }
      42%, 100% { opacity: 0; transform: translate(62px, 10px) }
    }
    .dg22c-flood { transform-box: view-box; opacity: .85; animation: dg22cFlood 9s linear infinite; }
    @keyframes dg22cFlood {
      0%, 29% { opacity: 0; transform: translate(0, 0) }
      33%     { opacity: 1; transform: translate(-20px, 11px) }
      52%     { opacity: 1; transform: translate(-142px, 76px) }
      57%, 100% { opacity: 0; transform: translate(-142px, 76px) }
    }
    .dg22c-up { transform-box: view-box; opacity: .85; animation: dg22cUp 9s linear infinite; }
    @keyframes dg22cUp {
      0%, 54% { opacity: 0; transform: translateY(0) }
      58%     { opacity: 1; transform: translateY(-6px) }
      80%     { opacity: 1; transform: translateY(-56px) }
      85%, 100% { opacity: 0; transform: translateY(-56px) }
    }
    .dg22c-out { transform-box: view-box; opacity: .85; animation: dg22cOut 9s linear infinite; }
    @keyframes dg22cOut {
      0%, 56% { opacity: 0; transform: translateY(0) }
      60%     { opacity: 1; transform: translateY(-6px) }
      82%     { opacity: 1; transform: translateY(-62px) }
      88%, 100% { opacity: 0; transform: translateY(-62px) }
    }
    .dg22c-in { transform-box: view-box; opacity: .85; animation: dg22cIn 9s linear infinite; }
    @keyframes dg22cIn {
      0%, 56% { opacity: 0; transform: translateY(0) }
      60%     { opacity: 1; transform: translateY(6px) }
      82%     { opacity: 1; transform: translateY(56px) }
      88%, 100% { opacity: 0; transform: translateY(56px) }
    }
    .dg22c-sarc { transform-box: view-box; transform-origin: 135px 248px; transform: scaleX(1); animation: dg22cSquash 9s ease-in-out infinite; }
    @keyframes dg22cSquash { 0%, 36% { transform: scaleX(1) } 50%, 60% { transform: scaleX(.78) } 78%, 100% { transform: scaleX(1) } }

    .dg22c-d1 { animation-delay: .2s }
    .dg22c-d2 { animation-delay: .4s }
    .dg22c-d3 { animation-delay: .6s }
    .dg22c-d4 { animation-delay: .8s }
    .dg22c-d5 { animation-delay: 1s }
  </style>

  <rect class="dg22c-ecf" x="8" y="14" width="624" height="38" rx="6"/>
  <text x="16" y="30" class="dg22c-tiny" font-weight="700">EXTRACELLULAR</text>
  <rect x="300" y="20" width="10" height="10" rx="2" class="dg22c-ca"/>
  <text x="314" y="29" class="dg22c-tiny">Ca&#178;&#8314;</text>
  <rect x="352" y="20" width="10" height="10" rx="2" class="dg22c-na"/>
  <text x="366" y="29" class="dg22c-tiny">Na&#8314;</text>
  <rect x="404" y="20" width="10" height="10" rx="2" class="dg22c-pulse"/>
  <text x="418" y="29" class="dg22c-tiny">action potential</text>

  <line class="dg22c-mem" x1="10" y1="52" x2="238" y2="52"/>
  <line class="dg22c-mem" x1="262" y1="52" x2="508" y2="52"/>
  <line class="dg22c-mem" x1="548" y1="52" x2="630" y2="52"/>
  <text x="60" y="66" class="dg22c-tiny">sarcolemma</text>
  <text x="16" y="100" class="dg22c-tiny" font-weight="700">CYTOSOL</text>

  <path class="dg22c-tub" d="M238 52 V176 C238 190 262 190 262 176 V52"/>

  <rect class="dg22c-pulse dg22c-apm" x="14" y="47" width="42" height="10" rx="5"/>
  <rect class="dg22c-pulse dg22c-apt" x="240" y="58" width="20" height="12" rx="5"/>

  <rect class="dg22c-prot dg22c-ltype" x="254" y="108" width="18" height="24" rx="5"/>
  <text x="232" y="96"  class="dg22c-lbl" text-anchor="end">L-type Ca&#178;&#8314; channel (DHP)</text>
  <text x="232" y="118" class="dg22c-tiny" text-anchor="end">T-tubule</text>
  <text x="232" y="130" class="dg22c-tiny" text-anchor="end">carries the AP inside the cell</text>
  <line class="dg22c-lead" x1="236" y1="93" x2="252" y2="110"/>

  <text x="296" y="100" class="dg22c-tiny" text-anchor="middle">trigger Ca&#178;&#8314; &#8212; SMALL</text>
  <g class="dg22c-ca dg22c-trig"><circle cx="276" cy="112" r="3.5"/></g>
  <g class="dg22c-ca dg22c-trig dg22c-d1"><circle cx="276" cy="121" r="3.5"/></g>
  <g class="dg22c-ca dg22c-trig dg22c-d2"><circle cx="276" cy="130" r="3.5"/></g>

  <rect class="dg22c-sr" x="350" y="106" width="190" height="64" rx="16"/>
  <text x="445" y="126" class="dg22c-lbl" text-anchor="middle">SARCOPLASMIC RETICULUM</text>
  <text x="445" y="139" class="dg22c-tiny" text-anchor="middle">Ca&#178;&#8314; store &#8212; the MAJOR source</text>
  <rect class="dg22c-ryr dg22c-ryrA" x="343" y="124" width="15" height="26" rx="4"/>
  <text x="344" y="120" class="dg22c-tiny" text-anchor="middle" font-weight="700" fill="var(--dg-ink)">RyR</text>

  <g class="dg22c-ca dg22c-flood"><circle cx="366" cy="150" r="5"/></g>
  <g class="dg22c-ca dg22c-flood dg22c-d1"><circle cx="380" cy="156" r="5"/></g>
  <g class="dg22c-ca dg22c-flood dg22c-d2"><circle cx="368" cy="162" r="5"/></g>
  <g class="dg22c-ca dg22c-flood dg22c-d3"><circle cx="394" cy="150" r="5"/></g>
  <g class="dg22c-ca dg22c-flood dg22c-d4"><circle cx="392" cy="163" r="5"/></g>
  <g class="dg22c-ca dg22c-flood dg22c-d5"><circle cx="408" cy="157" r="5"/></g>

  <text x="96" y="178" class="dg22c-lbl">SR Ca&#178;&#8314; release &#8212; the flood</text>
  <text x="96" y="190" class="dg22c-tiny">calcium-induced calcium release (CICR)</text>

  <g class="dg22c-sarc">
    <rect class="dg22c-z" x="44" y="224" width="7" height="46" rx="2"/>
    <rect class="dg22c-z" x="219" y="224" width="7" height="46" rx="2"/>
    <rect class="dg22c-myo" x="100" y="234" width="70" height="26" rx="6"/>
    <line class="dg22c-fil" x1="51" y1="232" x2="120" y2="232"/>
    <line class="dg22c-fil" x1="51" y1="247" x2="120" y2="247"/>
    <line class="dg22c-fil" x1="51" y1="262" x2="120" y2="262"/>
    <line class="dg22c-fil" x1="150" y1="232" x2="219" y2="232"/>
    <line class="dg22c-fil" x1="150" y1="247" x2="219" y2="247"/>
    <line class="dg22c-fil" x1="150" y1="262" x2="219" y2="262"/>
  </g>

  <rect class="dg22c-prot" x="468" y="163" width="34" height="14" rx="5"/>
  <text x="466" y="196" class="dg22c-lbl">SERCA</text>
  <text x="466" y="208" class="dg22c-tiny">Ca&#178;&#8314; back into the SR</text>
  <g class="dg22c-ca dg22c-up"><circle cx="474" cy="226" r="4"/></g>
  <g class="dg22c-ca dg22c-up dg22c-d1"><circle cx="486" cy="232" r="4"/></g>
  <g class="dg22c-ca dg22c-up dg22c-d2"><circle cx="497" cy="226" r="4"/></g>

  <rect class="dg22c-prot" x="508" y="42" width="40" height="20" rx="6"/>
  <text x="632" y="84"  class="dg22c-lbl"  text-anchor="end">Na&#8314;/Ca&#178;&#8314;</text>
  <text x="632" y="96"  class="dg22c-lbl"  text-anchor="end">exchanger</text>
  <text x="632" y="110" class="dg22c-tiny" text-anchor="end">1 Ca&#178;&#8314; out, 3 Na&#8314; in</text>
  <g class="dg22c-ca dg22c-out"><circle cx="516" cy="100" r="4"/></g>
  <g class="dg22c-na dg22c-in"><circle cx="528" cy="38" r="3.5"/></g>
  <g class="dg22c-na dg22c-in dg22c-d1"><circle cx="536" cy="38" r="3.5"/></g>
  <g class="dg22c-na dg22c-in dg22c-d2"><circle cx="544" cy="38" r="3.5"/></g>

  <circle class="dg22c-bad" cx="30" cy="72" r="9"/>
  <text x="30" y="76" class="dg22c-badT" text-anchor="middle">1</text>
  <circle class="dg22c-bad" cx="222" cy="70" r="9"/>
  <text x="222" y="74" class="dg22c-badT" text-anchor="middle">2</text>
  <circle class="dg22c-bad" cx="286" cy="152" r="9"/>
  <text x="286" y="156" class="dg22c-badT" text-anchor="middle">3</text>
  <circle class="dg22c-bad" cx="372" cy="94" r="9"/>
  <text x="372" y="98" class="dg22c-badT" text-anchor="middle">4</text>
  <circle class="dg22c-bad" cx="30" cy="288" r="9"/>
  <text x="30" y="292" class="dg22c-badT" text-anchor="middle">5</text>
  <text x="44" y="286" class="dg22c-lbl">CONTRACTION (systole)</text>
  <text x="44" y="298" class="dg22c-tiny">the sarcomere shortens</text>
  <circle class="dg22c-bad" cx="452" cy="192" r="9"/>
  <text x="452" y="196" class="dg22c-badT" text-anchor="middle">6</text>
  <circle class="dg22c-bad" cx="566" cy="66" r="9"/>
  <text x="566" y="70" class="dg22c-badT" text-anchor="middle">6</text>

  <text x="196" y="310" class="dg22c-tiny">6 = diastole: two exits for cytosolic Ca&#178;&#8314; &#8212; SERCA into the SR, exchanger out of the cell</text>
</svg>`,
};

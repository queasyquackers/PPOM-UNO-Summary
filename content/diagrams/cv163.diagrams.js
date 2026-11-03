window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv163-stress-pressure"] = {
  title: "Why a cough leaks in stress incontinence",
  caption: "Each cough pushes abdominal pressure down onto the bladder, and bladder pressure rises by the same amount in both panels. On the left the levator ani and connective tissue hold the urethra up, so its resistance stays above that pressure and nothing leaks. On the right the support is broken, the urethra moves, its resistance falls, and the same cough pushes urine past it (Slides 18-19). Intrinsic sphincter deficiency, the lead pipe urethra, lowers resistance by a different route. The lecture gives no pressure values, so the bars show direction only.",
  svg: `<svg viewBox="0 0 620 270" role="img" aria-label="Two panels. In each, a cough pushes abdominal pressure down onto the bladder and bladder pressure rises to the same height. On the left, a levator ani hammock supports the urethra, the urethral resistance line sits above the bladder pressure bar, and there is no leak. On the right, the support is broken, the urethra drops, the urethral resistance line sits below the same bladder pressure bar, and drops of urine leak from the urethra.">
  <style>
    .dg163a-head { font-size: 13px; font-weight: 700; }
    .lecture-diagram text.dg163a-sub { font-size: 11px; fill: var(--dg-muted); }
    .lecture-diagram text.dg163a-good { font-size: 12.5px; font-weight: 700; fill: var(--dg-good); }
    .lecture-diagram text.dg163a-bad { font-size: 12.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg163a-div { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg163a-axis { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg163a-bladder { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg163a-urine { fill: var(--dg-cool); opacity: .3; }
    .dg163a-ureth { stroke: var(--dg-ink); stroke-width: 7; stroke-linecap: round; }
    .dg163a-sling { fill: none; stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; }
    .dg163a-broken { fill: none; stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 5 6; }
    .dg163a-press { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg163a-flow { stroke-width: 5; stroke-linecap: round; }
    .dg163a-bar { fill: var(--dg-cool); }
    .dg163a-res { stroke: var(--dg-ink); stroke-width: 2.5; stroke-dasharray: 6 4; }
    .dg163a-drop { fill: var(--dg-cool); }
    .dg163a-cough { animation: dg163apulse 3.2s ease-in-out infinite; }
    @keyframes dg163apulse { 0%, 100% { opacity: .35 } 30%, 45% { opacity: 1 } 70% { opacity: .35 } }
    .dg163a-rise { transform-box: fill-box; transform-origin: 50% 100%; animation: dg163arise 3.2s ease-in-out infinite; }
    @keyframes dg163arise { 0%, 100% { transform: scaleY(.35) } 30%, 45% { transform: scaleY(1) } 70% { transform: scaleY(.35) } }
    .dg163a-shift { animation: dg163ashift 3.2s ease-in-out infinite; }
    @keyframes dg163ashift { 0%, 15%, 75%, 100% { transform: translateY(0) } 32%, 50% { transform: translateY(8px) } }
    .dg163a-leak { animation: dg163aleak 3.2s ease-in infinite; }
    @keyframes dg163aleak { 0%, 28% { opacity: 0; transform: translateY(-6px) } 38% { opacity: 1; transform: translateY(0) } 62% { opacity: 1; transform: translateY(12px) } 74%, 100% { opacity: 0; transform: translateY(12px) } }
  </style>

  <line x1="310" y1="8" x2="310" y2="262" class="dg163a-div"/>

  <g>
    <text x="14" y="20" class="dg163a-head">Supported urethra</text>
    <g class="dg163a-cough">
      <line x1="80" y1="32" x2="80" y2="54" class="dg163a-press dg163a-flow"/>
      <polygon points="71,52 80,66 89,52" class="dg163a-press"/>
    </g>
    <text x="96" y="46" class="dg163a-sub">cough: abdominal pressure</text>
    <ellipse cx="80" cy="100" rx="50" ry="30" class="dg163a-bladder"/>
    <ellipse cx="80" cy="108" rx="40" ry="17" class="dg163a-urine"/>
    <line x1="80" y1="132" x2="80" y2="166" class="dg163a-ureth"/>
    <path d="M42 160 Q80 198 118 160" class="dg163a-sling"/>
    <text x="22" y="212" class="dg163a-sub">levator ani hammock holds it up</text>

    <line x1="164" y1="172" x2="280" y2="172" class="dg163a-axis"/>
    <rect x="180" y="100" width="28" height="72" class="dg163a-bar dg163a-rise"/>
    <line x1="168" y1="80" x2="220" y2="80" class="dg163a-res"/>
    <text x="224" y="78" class="dg163a-sub">urethral</text>
    <text x="224" y="91" class="dg163a-sub">resistance</text>
    <text x="164" y="188" class="dg163a-sub">bladder pressure</text>

    <text x="14" y="240" class="dg163a-good">Resistance stays above pressure</text>
    <text x="14" y="257" class="dg163a-sub">The urethra holds: continent</text>
  </g>

  <g transform="translate(316,0)">
    <text x="14" y="20" class="dg163a-head">Lost support: hypermobile urethra</text>
    <g class="dg163a-cough">
      <line x1="80" y1="32" x2="80" y2="54" class="dg163a-press dg163a-flow"/>
      <polygon points="71,52 80,66 89,52" class="dg163a-press"/>
    </g>
    <text x="96" y="46" class="dg163a-sub">the same cough</text>
    <ellipse cx="80" cy="100" rx="50" ry="30" class="dg163a-bladder"/>
    <ellipse cx="80" cy="108" rx="40" ry="17" class="dg163a-urine"/>
    <g class="dg163a-shift">
      <line x1="80" y1="132" x2="80" y2="166" class="dg163a-ureth"/>
    </g>
    <path d="M42 166 Q56 184 68 188" class="dg163a-broken"/>
    <path d="M94 190 Q106 186 118 168" class="dg163a-broken"/>
    <g class="dg163a-leak">
      <circle cx="80" cy="184" r="3.5" class="dg163a-drop"/>
      <circle cx="76" cy="195" r="3" class="dg163a-drop"/>
      <circle cx="84" cy="204" r="3" class="dg163a-drop"/>
    </g>
    <text x="22" y="224" class="dg163a-sub">support broken: the urethra moves</text>

    <line x1="164" y1="172" x2="280" y2="172" class="dg163a-axis"/>
    <rect x="180" y="100" width="28" height="72" class="dg163a-bar dg163a-rise"/>
    <line x1="168" y1="132" x2="220" y2="132" class="dg163a-res"/>
    <text x="224" y="130" class="dg163a-sub">urethral</text>
    <text x="224" y="143" class="dg163a-sub">resistance</text>
    <text x="164" y="188" class="dg163a-sub">bladder pressure</text>

    <text x="14" y="244" class="dg163a-bad">Pressure exceeds resistance</text>
    <text x="14" y="261" class="dg163a-sub">Urine leaks with the cough</text>
  </g>
</svg>`,
};

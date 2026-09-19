window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv84-av-block-strips"] = {
  title: "The four AV blocks, least to most severe",
  caption: "Blue bumps are P waves, black spikes are QRS complexes and the teal bar under each beat is the PR interval. First degree keeps one long, fixed PR; Mobitz I stretches the PR beat by beat until a P wave is dropped; Mobitz II drops a P wave with no warning from a fixed PR; in third degree the P waves and the wide QRS complexes each keep their own steady spacing but never relate. The bottom two are the ones you pace (Slides 5-14).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four rhythm strips from least to most severe AV block. First degree: every P wave is followed by a QRS after the same long PR interval. Mobitz I: the PR interval grows over three beats and the fourth P wave is dropped. Mobitz II: the PR interval stays the same and one P wave is suddenly dropped. Third degree: P waves and wide QRS complexes each march at their own regular rate with no relationship.">
  <style>
    .dg84a-lbl  { font-size: 13px; font-weight: 700; }
    .dg84a-sub.dg84a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg84a-base { stroke: var(--dg-line); stroke-width: 1; }
    .dg84a-p    { fill: none; stroke: var(--dg-cool); stroke-width: 2; }
    .dg84a-qrs  { fill: none; stroke: var(--dg-ink); stroke-width: 2; stroke-linejoin: round; }
    .dg84a-pr   { stroke: var(--dg-accent); stroke-width: 3; stroke-linecap: round; }
    .dg84a-drop { stroke: var(--dg-warm); animation: dg84ablink 2.4s ease-in-out infinite; }
    .dg84a-dropt.dg84a-dropt { font-size: 10px; fill: var(--dg-warm); }
    .dg84a-tag.dg84a-tag  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg84a-scan { stroke: var(--dg-accent); stroke-width: 2; opacity: .5; animation: dg84ascan 6s linear infinite; }
    @keyframes dg84ablink { 0%,100% { opacity: .35 } 50% { opacity: 1 } }
    @keyframes dg84ascan { 0% { transform: translateX(0) } 100% { transform: translateX(480px) } }
  </style>
  <line x1="150" y1="18" x2="150" y2="292" class="dg84a-scan"/>
  <text x="10" y="52" class="dg84a-lbl">1st degree</text>
  <text x="10" y="68" class="dg84a-sub">PR long (over 200 ms), fixed</text>
  <line x1="150" y1="60" x2="630" y2="60" class="dg84a-base"/>
  <path d="M170 60 q8 -16 16 0" class="dg84a-p"/>
  <line x1="170" y1="74" x2="216" y2="74" class="dg84a-pr"/>
  <polyline points="216,60 219,65 223,26 227,68 230,60" class="dg84a-qrs"/>
  <path d="M270 60 q8 -16 16 0" class="dg84a-p"/>
  <line x1="270" y1="74" x2="316" y2="74" class="dg84a-pr"/>
  <polyline points="316,60 319,65 323,26 327,68 330,60" class="dg84a-qrs"/>
  <path d="M370 60 q8 -16 16 0" class="dg84a-p"/>
  <line x1="370" y1="74" x2="416" y2="74" class="dg84a-pr"/>
  <polyline points="416,60 419,65 423,26 427,68 430,60" class="dg84a-qrs"/>
  <path d="M470 60 q8 -16 16 0" class="dg84a-p"/>
  <line x1="470" y1="74" x2="516" y2="74" class="dg84a-pr"/>
  <polyline points="516,60 519,65 523,26 527,68 530,60" class="dg84a-qrs"/>
  <path d="M570 60 q8 -16 16 0" class="dg84a-p"/>
  <line x1="570" y1="74" x2="616" y2="74" class="dg84a-pr"/>
  <polyline points="616,60 619,65 623,26 627,68 630,60" class="dg84a-qrs"/>
  <text x="10" y="122" class="dg84a-lbl">Mobitz I</text>
  <text x="10" y="138" class="dg84a-sub">PR longer, longer, drop</text>
  <line x1="150" y1="130" x2="630" y2="130" class="dg84a-base"/>
  <path d="M170 130 q8 -16 16 0" class="dg84a-p"/>
  <line x1="170" y1="144" x2="188" y2="144" class="dg84a-pr"/>
  <polyline points="188,130 191,135 195,96 199,138 202,130" class="dg84a-qrs"/>
  <path d="M270 130 q8 -16 16 0" class="dg84a-p"/>
  <line x1="270" y1="144" x2="302" y2="144" class="dg84a-pr"/>
  <polyline points="302,130 305,135 309,96 313,138 316,130" class="dg84a-qrs"/>
  <path d="M370 130 q8 -16 16 0" class="dg84a-p"/>
  <line x1="370" y1="144" x2="416" y2="144" class="dg84a-pr"/>
  <polyline points="416,130 419,135 423,96 427,138 430,130" class="dg84a-qrs"/>
  <path d="M470 130 q8 -16 16 0" class="dg84a-p dg84a-drop"/>
  <text x="462" y="156" class="dg84a-dropt">dropped</text>
  <path d="M570 130 q8 -16 16 0" class="dg84a-p"/>
  <line x1="570" y1="144" x2="588" y2="144" class="dg84a-pr"/>
  <polyline points="588,130 591,135 595,96 599,138 602,130" class="dg84a-qrs"/>
  <text x="10" y="192" class="dg84a-lbl">Mobitz II</text>
  <text x="10" y="208" class="dg84a-sub">PR fixed, then sudden drop</text>
  <line x1="150" y1="200" x2="630" y2="200" class="dg84a-base"/>
  <path d="M170 200 q8 -16 16 0" class="dg84a-p"/>
  <line x1="170" y1="214" x2="194" y2="214" class="dg84a-pr"/>
  <polyline points="194,200 197,205 201,166 205,208 208,200" class="dg84a-qrs"/>
  <path d="M270 200 q8 -16 16 0" class="dg84a-p"/>
  <line x1="270" y1="214" x2="294" y2="214" class="dg84a-pr"/>
  <polyline points="294,200 297,205 301,166 305,208 308,200" class="dg84a-qrs"/>
  <path d="M370 200 q8 -16 16 0" class="dg84a-p dg84a-drop"/>
  <text x="362" y="226" class="dg84a-dropt">dropped</text>
  <path d="M470 200 q8 -16 16 0" class="dg84a-p"/>
  <line x1="470" y1="214" x2="494" y2="214" class="dg84a-pr"/>
  <polyline points="494,200 497,205 501,166 505,208 508,200" class="dg84a-qrs"/>
  <path d="M570 200 q8 -16 16 0" class="dg84a-p"/>
  <line x1="570" y1="214" x2="594" y2="214" class="dg84a-pr"/>
  <polyline points="594,200 597,205 601,166 605,208 608,200" class="dg84a-qrs"/>
  <text x="100" y="192" class="dg84a-tag">pace</text>
  <text x="10" y="262" class="dg84a-lbl">3rd degree</text>
  <text x="10" y="278" class="dg84a-sub">PP equal, RR equal, unrelated</text>
  <line x1="150" y1="270" x2="630" y2="270" class="dg84a-base"/>
  <path d="M160 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M230 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M300 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M370 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M440 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M510 270 q8 -16 16 0" class="dg84a-p"/>
  <path d="M580 270 q8 -16 16 0" class="dg84a-p"/>
  <polyline points="190,270 194,276 200,240 208,280 214,270" class="dg84a-qrs"/>
  <polyline points="335,270 339,276 345,240 353,280 359,270" class="dg84a-qrs"/>
  <polyline points="480,270 484,276 490,240 498,280 504,270" class="dg84a-qrs"/>
  <text x="100" y="262" class="dg84a-tag">pace</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv84-bbb-septum"] = {
  title: "Which way V1 turns",
  caption: "V1 sits over the right ventricle and V6 over the left. In LBBB (left) the septum fires right to left and the left ventricle fires last, both away from V1, so V1 shows a wide, deep, negative 'W' - the turn signal points down. In RBBB (right) the left ventricle fires normally and the right ventricle fires late toward V1, adding the second R wave of the rSR' 'M' or bunny ears - the turn signal points up. Both need a QRS over 120 ms (Slides 16-21).",
  svg: `
<svg viewBox="0 0 640 270" role="img" aria-label="Two schematic ventricles with V1 on the right-ventricle side and V6 on the left-ventricle side. Left bundle branch block: the left bundle is crossed out, the septum depolarizes right to left and the left ventricle last, away from V1, giving a wide, deep, negative W-shaped QRS in V1. Right bundle branch block: the right bundle is crossed out, the left ventricle depolarizes first and the right ventricle late, toward V1, giving a wide rSR prime M-shaped QRS in V1.">
  <style>
    .dg84b-lbl  { font-size: 13px; font-weight: 700; }
    .dg84b-sub.dg84b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg84b-v    { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg84b-sep  { stroke: var(--dg-ink); stroke-width: 3; opacity: .6; }
    .dg84b-el   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg84b-elt  { font-size: 9px; font-weight: 700; }
    .dg84b-x.dg84b-x    { font-size: 18px; font-weight: 700; fill: var(--dg-warm); }
    .dg84b-arr  { stroke: var(--dg-cool); stroke-width: 4; stroke-linecap: round; }
    .dg84b-head { fill: var(--dg-cool); }
    .dg84b-late { stroke: var(--dg-good); }
    .dg84b-lateh { fill: var(--dg-good); }
    .dg84b-base { stroke: var(--dg-line); stroke-width: 1; }
    .dg84b-trace { fill: none; stroke: var(--dg-ink); stroke-width: 2.2; stroke-linejoin: round; }
    .dg84b-s1 { animation: dg84bfirst 4s ease-in-out infinite; }
    .dg84b-s2 { animation: dg84bsecond 4s ease-in-out infinite; }
    @keyframes dg84bfirst  { 0% { opacity: .25 } 15%,45% { opacity: 1 } 70%,100% { opacity: .25 } }
    @keyframes dg84bsecond { 0%,35% { opacity: .25 } 55%,85% { opacity: 1 } 100% { opacity: .25 } }
  </style>
  <text x="30" y="24" class="dg84b-lbl">Left bundle branch block</text>
  <rect x="40" y="50" width="90" height="110" rx="18" class="dg84b-v"/>
  <rect x="136" y="50" width="100" height="110" rx="18" class="dg84b-v"/>
  <text x="75" y="150" class="dg84b-sub">RV</text>
  <text x="176" y="150" class="dg84b-sub">LV</text>
  <line x1="133" y1="44" x2="133" y2="160" class="dg84b-sep"/>
  <text x="112" y="44" class="dg84b-sub">septum</text>
  <circle cx="26" cy="105" r="11" class="dg84b-el"/><text x="17" y="109" class="dg84b-elt">V1</text>
  <circle cx="252" cy="105" r="11" class="dg84b-el"/><text x="243" y="109" class="dg84b-elt">V6</text>
  <text x="164" y="78" class="dg84b-x">X</text>
  <g class="dg84b-s1"><line x1="100" y1="95" x2="158" y2="95" class="dg84b-arr"/><polygon points="158,88 170,95 158,102" class="dg84b-head"/></g>
  <g class="dg84b-s2"><line x1="140" y1="122" x2="216" y2="122" class="dg84b-arr dg84b-late"/><polygon points="216,115 228,122 216,129" class="dg84b-head dg84b-lateh"/></g>
  <text x="30" y="182" class="dg84b-sub">septum reversed: right to left, away from V1</text>
  <text x="30" y="196" class="dg84b-sub">Lead V1, QRS over 120 ms</text>
  <line x1="30" y1="240" x2="260" y2="240" class="dg84b-base"/>
  <polyline points="30,240 80,240 86,234 94,258 104,268 114,262 124,268 136,252 144,240 170,240 190,250 210,240 260,240" class="dg84b-trace"/>
  <text x="355" y="24" class="dg84b-lbl">Right bundle branch block</text>
  <rect x="365" y="50" width="90" height="110" rx="18" class="dg84b-v"/>
  <rect x="461" y="50" width="100" height="110" rx="18" class="dg84b-v"/>
  <text x="400" y="150" class="dg84b-sub">RV</text>
  <text x="501" y="150" class="dg84b-sub">LV</text>
  <line x1="458" y1="44" x2="458" y2="160" class="dg84b-sep"/>
  <text x="437" y="44" class="dg84b-sub">septum</text>
  <circle cx="351" cy="105" r="11" class="dg84b-el"/><text x="342" y="109" class="dg84b-elt">V1</text>
  <circle cx="577" cy="105" r="11" class="dg84b-el"/><text x="568" y="109" class="dg84b-elt">V6</text>
  <text x="409" y="78" class="dg84b-x">X</text>
  <g class="dg84b-s1"><line x1="495" y1="95" x2="437" y2="95" class="dg84b-arr"/><polygon points="437,88 425,95 437,102" class="dg84b-head"/></g>
  <g class="dg84b-s2"><line x1="449" y1="122" x2="383" y2="122" class="dg84b-arr dg84b-late"/><polygon points="383,115 371,122 383,129" class="dg84b-head dg84b-lateh"/></g>
  <text x="355" y="182" class="dg84b-sub">LV first, then late spread toward V1</text>
  <text x="355" y="196" class="dg84b-sub">Lead V1, QRS over 120 ms</text>
  <line x1="355" y1="240" x2="585" y2="240" class="dg84b-base"/>
  <polyline points="355,240 405,240 411,228 419,250 431,206 443,214 451,240 495,240 515,250 535,240 585,240" class="dg84b-trace"/>
</svg>`
};

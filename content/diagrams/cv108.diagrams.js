window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv108-vegetation-sequence"] = {
  title: "How a vegetation forms",
  caption:
    "A vegetation needs two events in order: endothelial injury that gathers a sterile platelet-fibrin thrombus, then a transient bacteremia whose microbes attach to it and divide. " +
    "The growing vegetation destroys the valve (regurgitation, the new murmur) and sheds septic emboli - to the lungs from the right heart, anywhere systemic from the left. " +
    "Marantic (nonbacterial thrombotic) endocarditis stops at step 2, and S. aureus is the exception that can start on a healthy valve (Slide 4).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Four steps left to right: endothelial injury on a valve leaflet, a sterile platelet and fibrin thrombus, bacteria from the blood attaching to the thrombus, and an enlarged infected vegetation that causes regurgitation and sheds septic emboli to the lungs from the right heart or to the systemic circulation from the left heart.">
  <style>
    .dg108a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg108a-leaf  { fill: none; stroke: var(--dg-ink); stroke-width: 6; stroke-linecap: round; }
    .dg108a-hurt  { fill: none; stroke: var(--dg-warm); stroke-width: 3; }
    .dg108a-clot  { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 2; }
    .dg108a-veg   { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg108a-bug   { fill: var(--dg-warm); }
    .dg108a-arrow { stroke: var(--dg-muted); stroke-width: 2.5; fill: none; }
    .dg108a-head  { fill: var(--dg-muted); }
    .dg108a-num   { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg108a-lbl   { font-size: 12px; font-weight: 700; }
    .dg108a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg108a-out   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg108a-s1 { animation: dg108apulse 8s ease-in-out infinite; }
    .dg108a-s2 { animation: dg108apulse 8s ease-in-out infinite 2s; }
    .dg108a-s3 { animation: dg108apulse 8s ease-in-out infinite 4s; }
    .dg108a-s4 { animation: dg108apulse 8s ease-in-out infinite 6s; }
    @keyframes dg108apulse { 0%, 30%, 100% { opacity: .55 } 8%, 22% { opacity: 1 } }
    .dg108a-seed { animation: dg108aseed 4s ease-in infinite; }
    @keyframes dg108aseed {
      0%   { transform: translate(-26px, -44px); opacity: 0 }
      20%  { opacity: 1 }
      70%  { transform: translate(0, 0); opacity: 1 }
      100% { transform: translate(0, 0); opacity: 1 }
    }
    .dg108a-emb { animation: dg108aemb 3.2s ease-out infinite; }
    @keyframes dg108aemb {
      0%   { transform: translate(-18px, 14px); opacity: 0 }
      25%  { opacity: 1 }
      100% { transform: translate(16px, -12px); opacity: 0 }
    }
  </style>

  <g class="dg108a-s1">
    <rect x="12" y="30" width="138" height="150" rx="12" class="dg108a-panel"/>
    <text x="24" y="52" class="dg108a-num">1</text>
    <text x="38" y="52" class="dg108a-lbl">Endothelial injury</text>
    <path d="M30 140 Q81 112 132 140" class="dg108a-leaf"/>
    <path d="M70 124 l6 -9 l6 9 l6 -9" class="dg108a-hurt"/>
    <text x="24" y="166" class="dg108a-sub">matrix exposed</text>
  </g>

  <g class="dg108a-s2">
    <rect x="170" y="30" width="138" height="150" rx="12" class="dg108a-panel"/>
    <text x="182" y="52" class="dg108a-num">2</text>
    <text x="196" y="52" class="dg108a-lbl">Sterile thrombus</text>
    <path d="M188 140 Q239 112 290 140" class="dg108a-leaf"/>
    <ellipse cx="239" cy="112" rx="20" ry="12" class="dg108a-clot"/>
    <text x="182" y="166" class="dg108a-sub">platelets + fibrin</text>
  </g>

  <g class="dg108a-s3">
    <rect x="328" y="30" width="138" height="150" rx="12" class="dg108a-panel"/>
    <text x="340" y="52" class="dg108a-num">3</text>
    <text x="354" y="52" class="dg108a-lbl">Bacteremia seeds</text>
    <path d="M346 140 Q397 112 448 140" class="dg108a-leaf"/>
    <ellipse cx="397" cy="112" rx="20" ry="12" class="dg108a-clot"/>
    <g class="dg108a-seed">
      <circle cx="388" cy="108" r="4" class="dg108a-bug"/>
      <circle cx="400" cy="104" r="4" class="dg108a-bug"/>
      <circle cx="406" cy="114" r="4" class="dg108a-bug"/>
    </g>
    <text x="340" y="166" class="dg108a-sub">microbes attach, divide</text>
  </g>

  <g class="dg108a-s4">
    <rect x="486" y="30" width="142" height="150" rx="12" class="dg108a-panel"/>
    <text x="498" y="52" class="dg108a-num">4</text>
    <text x="512" y="52" class="dg108a-lbl">Vegetation</text>
    <path d="M504 140 Q555 112 606 140" class="dg108a-leaf"/>
    <ellipse cx="552" cy="104" rx="30" ry="20" class="dg108a-veg"/>
    <circle cx="540" cy="100" r="4" class="dg108a-bug"/>
    <circle cx="552" cy="94" r="4" class="dg108a-bug"/>
    <circle cx="562" cy="106" r="4" class="dg108a-bug"/>
    <circle cx="548" cy="112" r="4" class="dg108a-bug"/>
    <g class="dg108a-emb">
      <circle cx="596" cy="80" r="5" class="dg108a-bug"/>
      <circle cx="608" cy="92" r="3.5" class="dg108a-bug"/>
    </g>
    <text x="498" y="166" class="dg108a-sub">valve destroyed, leaks</text>
  </g>

  <line x1="152" y1="105" x2="164" y2="105" class="dg108a-arrow"/>
  <polygon points="164,100 170,105 164,110" class="dg108a-head"/>
  <line x1="310" y1="105" x2="322" y2="105" class="dg108a-arrow"/>
  <polygon points="322,100 328,105 322,110" class="dg108a-head"/>
  <line x1="468" y1="105" x2="480" y2="105" class="dg108a-arrow"/>
  <polygon points="480,100 486,105 480,110" class="dg108a-head"/>

  <text x="170" y="204" class="dg108a-sub">Marantic endocarditis stops at step 2: no microbes, sterile vegetation</text>

  <line x1="557" y1="182" x2="557" y2="222" class="dg108a-arrow"/>
  <polygon points="552,222 557,230 562,222" class="dg108a-head"/>
  <text x="628" y="250" text-anchor="end" class="dg108a-out">Regurgitation: new murmur</text>
  <text x="628" y="270" text-anchor="end" class="dg108a-out">Septic emboli: right heart to lungs, left heart to systemic</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv108-tamponade-vs-constriction"] = {
  title: "Tamponade vs constriction",
  caption:
    "Both complications lower output because the ventricles cannot fill, but for different reasons. " +
    "In tamponade an effusion accumulates, pericardial pressure rises and the heart is squeezed smaller, so cardiac output falls. " +
    "In constrictive pericarditis chronic inflammation leaves a fibrotic, calcified pericardium: the heart pushes outward but the rigid sac stops it, so ventricular filling falls; TB is the most common cause in resource-limited countries (Slide 24).",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Left panel, cardiac tamponade: fluid fills the pericardial sac, pressure rises and the heart is compressed, lowering cardiac output. Right panel, constrictive pericarditis: a thick calcified pericardium stops the heart from expanding, lowering ventricular filling.">
  <style>
    .dg108b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg108b-sac   { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg108b-fluid { fill: var(--dg-cool); opacity: .25; stroke: var(--dg-cool); stroke-width: 2; }
    .dg108b-heart { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 3; }
    .dg108b-rigid { fill: none; stroke: var(--dg-warm); stroke-width: 9; stroke-dasharray: 14 5; }
    .dg108b-press { stroke: var(--dg-cool); stroke-width: 3; fill: none; }
    .dg108b-phead { fill: var(--dg-cool); }
    .dg108b-ttl   { font-size: 14px; font-weight: 700; }
    .dg108b-lbl   { font-size: 12px; }
    .dg108b-res   { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg108b-mid   { font-size: 11px; fill: var(--dg-muted); }
    .dg108b-squeeze { transform-box: fill-box; transform-origin: center; animation: dg108bsqueeze 4s ease-in-out infinite; }
    @keyframes dg108bsqueeze { 0%, 100% { transform: scale(1.12) } 55%, 75% { transform: scale(.88) } }
    .dg108b-flood { transform-box: fill-box; transform-origin: center; animation: dg108bflood 4s ease-in-out infinite; }
    @keyframes dg108bflood { 0%, 100% { opacity: .1 } 55%, 75% { opacity: .35 } }
    .dg108b-push { transform-box: fill-box; transform-origin: center; animation: dg108bpush 1.6s ease-in-out infinite; }
    @keyframes dg108bpush { 0%, 100% { transform: scale(.96) } 50% { transform: scale(1.03) } }
  </style>

  <rect x="12" y="12" width="300" height="266" rx="14" class="dg108b-panel"/>
  <text x="28" y="38" class="dg108b-ttl">Cardiac tamponade</text>
  <text x="28" y="56" class="dg108b-mid">problem = fluid under pressure</text>
  <ellipse cx="162" cy="150" rx="92" ry="72" class="dg108b-fluid dg108b-flood"/>
  <ellipse cx="162" cy="150" rx="92" ry="72" class="dg108b-sac"/>
  <ellipse cx="162" cy="150" rx="54" ry="42" class="dg108b-heart dg108b-squeeze"/>
  <text x="162" y="154" text-anchor="middle" class="dg108b-lbl">heart</text>
  <line x1="100" y1="100" x2="118" y2="116" class="dg108b-press"/>
  <polygon points="113,120 124,121 121,110" class="dg108b-phead"/>
  <line x1="224" y1="100" x2="206" y2="116" class="dg108b-press"/>
  <polygon points="211,120 200,121 203,110" class="dg108b-phead"/>
  <text x="28" y="244" class="dg108b-lbl">Effusion -> pericardial pressure up</text>
  <text x="28" y="264" class="dg108b-res">Heart compressed -> cardiac output down</text>

  <rect x="328" y="12" width="300" height="266" rx="14" class="dg108b-panel"/>
  <text x="344" y="38" class="dg108b-ttl">Constrictive pericarditis</text>
  <text x="344" y="56" class="dg108b-mid">problem = rigid wall (fibrosis, calcification)</text>
  <ellipse cx="478" cy="150" rx="74" ry="58" class="dg108b-rigid"/>
  <ellipse cx="478" cy="150" rx="64" ry="48" class="dg108b-heart dg108b-push"/>
  <text x="478" y="154" text-anchor="middle" class="dg108b-lbl">heart</text>
  <text x="344" y="244" class="dg108b-lbl">Sac cannot expand; TB common cause</text>
  <text x="344" y="264" class="dg108b-res">Ventricular filling down</text>
</svg>`,
};

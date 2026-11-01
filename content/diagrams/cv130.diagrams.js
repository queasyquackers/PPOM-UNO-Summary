window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv130a - Bordetella pertussis: three toxins, three targets, one cough.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv130-pertussis-toxins"] = {
  title: "Pertussis: three toxins, one cough",
  caption:
    "The organism anchors to ciliated epithelium with fimbriae and filamentous hemagglutinin and never invades deeper, so everything that follows is toxin-driven. " +
    "Pertussis toxin raises adenylate cyclase activity and cyclic AMP (mucosal edema plus lymphocytosis), adenylate cyclase toxin converts ATP to cyclic AMP inside phagocytes and paralyzes them, and tracheal cytotoxin destroys the ciliated cells themselves - watch the cilia stop and the mucus layer build. " +
    "That failed mucociliary escalator is why macrolides kill the organism but the paroxysmal cough still runs its course (Slide 16).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Bordetella pertussis attached to ciliated airway epithelium releases three toxins: pertussis toxin raising cyclic AMP to cause mucosal edema and lymphocytosis, adenylate cyclase toxin paralysing phagocytes, and tracheal cytotoxin killing ciliated cells so mucus accumulates and a paroxysmal cough follows.">
  <style>
    .dg130a-lbl   { font-size: 12.5px; }
    .dg130a-tox   { font-size: 13px; font-weight: 700; fill: var(--dg-accent); }
    .dg130a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg130a-head  { font-size: 12px; font-weight: 700; }
    .dg130a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg130a-arrow { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 3; stroke-linecap: round; }
    .dg130a-epi   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg130a-cell  { fill: var(--dg-accent); opacity: .85; }
    .dg130a-cilia { stroke: var(--dg-good); stroke-width: 2.4; stroke-linecap: round; }
    .dg130a-r1 { animation: dg130apulse 7.2s ease-in-out infinite; }
    .dg130a-r2 { animation: dg130apulse 7.2s ease-in-out infinite 1.2s; }
    .dg130a-r3 { animation: dg130apulse 7.2s ease-in-out infinite 2.4s; }
    @keyframes dg130apulse { 0%, 55%, 100% { opacity: .45 } 12%, 34% { opacity: 1 } }
    .dg130a-sway { animation: dg130asway 7.2s ease-in-out infinite; transform-origin: bottom center; }
    @keyframes dg130asway {
      0%, 30%   { transform: rotate(-12deg) }
      15%       { transform: rotate(12deg) }
      45%       { transform: rotate(0deg); opacity: 1 }
      60%, 95%  { transform: rotate(0deg); opacity: .15 }
      100%      { transform: rotate(-12deg); opacity: 1 }
    }
    .dg130a-mucus { animation: dg130amucus 7.2s ease-in-out infinite; transform-origin: bottom center; }
    @keyframes dg130amucus {
      0%, 45%  { transform: scaleY(.12); opacity: .35 }
      70%, 95% { transform: scaleY(1); opacity: .9 }
      100%     { transform: scaleY(.12); opacity: .35 }
    }
  </style>

  <text x="16" y="20" class="dg130a-head">B. pertussis on ciliated epithelium</text>
  <text x="16" y="36" class="dg130a-sub">anchored by fimbriae + filamentous hemagglutinin</text>

  <ellipse cx="74" cy="78" rx="21" ry="12" class="dg130a-cell"/>
  <ellipse cx="112" cy="96" rx="15" ry="9" class="dg130a-cell" opacity=".55"/>

  <g class="dg130a-r1">
    <line x1="150" y1="72" x2="236" y2="72" class="dg130a-arrow"/>
    <polygon points="236,64 256,72 236,80" class="dg130a-arrow"/>
  </g>
  <text x="150" y="62" class="dg130a-tox">Pertussis toxin</text>
  <g class="dg130a-r1">
    <rect x="266" y="50" width="358" height="44" rx="9" class="dg130a-box"/>
    <text x="280" y="68" class="dg130a-lbl">Adenylate cyclase activity up, cyclic AMP up</text>
    <text x="280" y="85" class="dg130a-sub">edema in respiratory mucosa + lymphocytosis</text>
  </g>

  <g class="dg130a-r2">
    <line x1="150" y1="134" x2="236" y2="134" class="dg130a-arrow"/>
    <polygon points="236,126 256,134 236,142" class="dg130a-arrow"/>
  </g>
  <text x="150" y="124" class="dg130a-tox">Adenylate cyclase toxin</text>
  <g class="dg130a-r2">
    <rect x="266" y="112" width="358" height="44" rx="9" class="dg130a-box"/>
    <text x="280" y="130" class="dg130a-lbl">ATP converted to cyclic AMP inside phagocytes</text>
    <text x="280" y="147" class="dg130a-sub">macrophages and neutrophils paralyzed</text>
  </g>

  <g class="dg130a-r3">
    <line x1="150" y1="196" x2="236" y2="196" class="dg130a-arrow"/>
    <polygon points="236,188 256,196 236,204" class="dg130a-arrow"/>
  </g>
  <text x="150" y="186" class="dg130a-tox">Tracheal cytotoxin</text>
  <g class="dg130a-r3">
    <rect x="266" y="174" width="358" height="44" rx="9" class="dg130a-box"/>
    <text x="280" y="192" class="dg130a-lbl">Ciliated epithelial cells destroyed</text>
    <text x="280" y="209" class="dg130a-sub">mucociliary escalator fails</text>
  </g>

  <rect x="16" y="258" width="608" height="22" rx="5" class="dg130a-epi"/>
  <g class="dg130a-mucus">
    <rect x="16" y="236" width="608" height="20" rx="5" fill="var(--dg-warm)" opacity=".5"/>
  </g>
  <g class="dg130a-cilia">
    <g class="dg130a-sway"><line x1="40" y1="258" x2="40" y2="240"/></g>
    <g class="dg130a-sway"><line x1="90" y1="258" x2="90" y2="240"/></g>
    <g class="dg130a-sway"><line x1="140" y1="258" x2="140" y2="240"/></g>
    <g class="dg130a-sway"><line x1="190" y1="258" x2="190" y2="240"/></g>
    <g class="dg130a-sway"><line x1="240" y1="258" x2="240" y2="240"/></g>
    <g class="dg130a-sway"><line x1="290" y1="258" x2="290" y2="240"/></g>
    <g class="dg130a-sway"><line x1="340" y1="258" x2="340" y2="240"/></g>
    <g class="dg130a-sway"><line x1="390" y1="258" x2="390" y2="240"/></g>
    <g class="dg130a-sway"><line x1="440" y1="258" x2="440" y2="240"/></g>
    <g class="dg130a-sway"><line x1="490" y1="258" x2="490" y2="240"/></g>
    <g class="dg130a-sway"><line x1="540" y1="258" x2="540" y2="240"/></g>
    <g class="dg130a-sway"><line x1="590" y1="258" x2="590" y2="240"/></g>
  </g>
  <text x="16" y="294" class="dg130a-sub">cilia stop, mucus accumulates - the paroxysmal cough with its inspiratory whoop</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv130b - Chlamydophila: the elementary body / reticulate body cycle.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv130-chlamydia-cycle"] = {
  title: "Elementary body and reticulate body",
  caption:
    "Chlamydophila cannot make enough ATP of its own, so it lives inside the host cell as an energy parasite - and that forces two different forms rather than one. " +
    "The elementary body is small, dense, inert and the only infectious form; it enters by endocytosis and converts to the metabolically active reticulate body, which divides inside a cytoplasmic inclusion. " +
    "The progeny mature back into elementary bodies and are released to infect new cells, which is why Giemsa stain shows reticulate bodies and inclusions inside cells rather than free organisms (Slide 20).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="An elementary body enters a host cell by endocytosis, converts into a reticulate body that divides inside a cytoplasmic inclusion, and the progeny mature back into elementary bodies that are released to infect new cells.">
  <style>
    .dg130b-lbl  { font-size: 12.5px; }
    .dg130b-name { font-size: 13px; font-weight: 700; }
    .dg130b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg130b-cell { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg130b-incl { fill: none; stroke: var(--dg-accent); stroke-width: 1.6; stroke-dasharray: 6 5; opacity: .8; }
    .dg130b-eb   { fill: var(--dg-ink); }
    .dg130b-rb   { fill: var(--dg-cool); opacity: .75; }
    .dg130b-path { stroke: var(--dg-line); stroke-width: 2; fill: none; }
    .dg130b-arw  { stroke: var(--dg-accent); fill: var(--dg-accent); stroke-width: 2.5; }
    .dg130b-in   { animation: dg130bin 8s ease-in-out infinite; }
    @keyframes dg130bin {
      0%   { transform: translateX(0); opacity: 1 }
      22%  { transform: translateX(132px); opacity: 1 }
      30%  { transform: translateX(132px); opacity: 0 }
      100% { transform: translateX(132px); opacity: 0 }
    }
    .dg130b-grow { animation: dg130bgrow 8s ease-in-out infinite; transform-origin: center; }
    @keyframes dg130bgrow {
      0%, 24%   { transform: scale(0); opacity: 0 }
      34%       { transform: scale(1); opacity: .75 }
      72%       { transform: scale(1); opacity: .75 }
      80%, 100% { transform: scale(0); opacity: 0 }
    }
    .dg130b-d2 { animation: dg130bdiv 8s ease-in-out infinite; transform-origin: center; }
    .dg130b-d3 { animation: dg130bdiv 8s ease-in-out infinite .6s; transform-origin: center; }
    .dg130b-d4 { animation: dg130bdiv 8s ease-in-out infinite 1.2s; transform-origin: center; }
    @keyframes dg130bdiv {
      0%, 38%   { transform: scale(0); opacity: 0 }
      48%, 72%  { transform: scale(1); opacity: .75 }
      80%, 100% { transform: scale(0); opacity: 0 }
    }
    .dg130b-out { animation: dg130bout 8s ease-in-out infinite; }
    @keyframes dg130bout {
      0%, 72%  { transform: translateX(0); opacity: 0 }
      78%      { opacity: 1 }
      96%      { transform: translateX(126px); opacity: 1 }
      100%     { transform: translateX(126px); opacity: 0 }
    }
  </style>

  <rect x="150" y="54" width="340" height="190" rx="42" class="dg130b-cell"/>
  <text x="166" y="78" class="dg130b-sub">host cell</text>
  <circle cx="320" cy="150" r="66" class="dg130b-incl"/>
  <text x="320" y="238" class="dg130b-sub" text-anchor="middle">cytoplasmic inclusion</text>

  <text x="12" y="112" class="dg130b-name">Elementary body</text>
  <text x="12" y="129" class="dg130b-sub">small, dense, inert</text>
  <text x="12" y="145" class="dg130b-sub">the infectious form</text>
  <g class="dg130b-in">
    <circle cx="56" cy="166" r="9" class="dg130b-eb"/>
  </g>
  <line x1="72" y1="190" x2="176" y2="190" class="dg130b-path"/>
  <polygon points="176,184 192,190 176,196" class="dg130b-arw"/>
  <text x="74" y="208" class="dg130b-sub">endocytosis</text>

  <g class="dg130b-grow">
    <circle cx="320" cy="150" r="22" class="dg130b-rb"/>
  </g>
  <g class="dg130b-d2"><circle cx="286" cy="124" r="14" class="dg130b-rb"/></g>
  <g class="dg130b-d3"><circle cx="356" cy="128" r="14" class="dg130b-rb"/></g>
  <g class="dg130b-d4"><circle cx="330" cy="186" r="14" class="dg130b-rb"/></g>
  <text x="320" y="92" class="dg130b-name" text-anchor="middle">Reticulate body</text>
  <text x="320" y="108" class="dg130b-sub" text-anchor="middle">metabolically active, divides</text>

  <line x1="452" y1="150" x2="534" y2="150" class="dg130b-path"/>
  <polygon points="534,144 550,150 534,156" class="dg130b-arw"/>
  <g class="dg130b-out">
    <circle cx="466" cy="150" r="8" class="dg130b-eb"/>
  </g>
  <text x="560" y="134" class="dg130b-sub">new</text>
  <text x="560" y="150" class="dg130b-sub">EBs</text>
  <text x="560" y="166" class="dg130b-sub">released</text>

  <path d="M 596 196 L 596 272 L 44 272 L 44 196" class="dg130b-path"/>
  <polygon points="38,196 44,180 50,196" class="dg130b-arw"/>
  <text x="320" y="288" class="dg130b-sub" text-anchor="middle">matured elementary bodies infect new cells</text>
</svg>`,
};

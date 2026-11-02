window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv147 - the routes filtrate takes, and where albumin is turned back.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv147-filtration-routes"] = {
  title: "Two routes through the glomerulus",
  caption:
    "Filtrate crosses three layers in order: fenestrated endothelium, the negatively charged GBM, then the podocyte slit diaphragm. " +
    "Albumin carries a negative charge, so the GBM repels it and it stays in the blood. " +
    "About 85% of filtration takes this route, and about 15% enters the mesangium and filters back out into Bowman's capsule. " +
    "The 85/15 split is this lecture's own figure (Slides 11-12). Schematic, not to scale.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Cross-section of the filtration barrier. Water and small solutes pass from the capillary lumen through fenestrated endothelium, the negatively charged basement membrane and the podocyte slit diaphragm into Bowman's space, about 85 percent of filtration. Albumin is repelled at the basement membrane and turns back. About 15 percent of filtration enters the mesangium and passes back out into Bowman's capsule.">
  <style>
    .dg147a-space { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg147a-gbm   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg147a-endo  { stroke: var(--dg-ink); stroke-width: 5; stroke-dasharray: 16 8; fill: none; }
    .dg147a-foot  { fill: var(--dg-accent); opacity: .85; }
    .dg147a-mcell { fill: var(--dg-line); stroke: var(--dg-muted); stroke-width: 1; }
    .dg147a-route { stroke: var(--dg-cool); stroke-width: 2.5; stroke-dasharray: 7 5; fill: none; }
    .dg147a-head  { fill: var(--dg-cool); }
    .dg147a-back  { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; }
    .dg147a-headb { fill: var(--dg-warm); }
    .dg147a-lbl   { font-size: 12.5px; font-weight: 700; }
    .dg147a-sub   { font-size: 12px; fill: var(--dg-muted); }
    .dg147a-neg   { font-size: 15px; font-weight: 700; fill: var(--dg-accent); text-anchor: middle; }
    .dg147a-alb   { fill: var(--dg-warm); }
    .dg147a-albt  { font-size: 14px; font-weight: 700; fill: var(--dg-surface); text-anchor: middle; }
    .dg147a-dot   { fill: var(--dg-cool); }
    .dg147a-run1 { animation: dg147across 4.2s linear infinite; }
    .dg147a-run2 { animation: dg147across 4.2s linear infinite 1.4s; opacity: 0; }
    .dg147a-run3 { animation: dg147across 4.2s linear infinite 2.8s; opacity: 0; }
    @keyframes dg147across {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      90%  { opacity: 1 }
      100% { transform: translateX(410px); opacity: 0 }
    }
    .dg147a-repel { animation: dg147repel 4.2s ease-in-out infinite; }
    @keyframes dg147repel {
      0%, 100% { transform: translateX(0) }
      45%      { transform: translateX(73px) }
      55%      { transform: translateX(73px) }
    }
    .dg147a-mes { animation: dg147mes 6.3s linear infinite; }
    @keyframes dg147mes {
      0%   { transform: translate(0, 0);        opacity: 0 }
      6%   { opacity: 1 }
      20%  { transform: translate(0, 52px) }
      78%  { transform: translate(370px, 52px) }
      94%  { opacity: 1 }
      100% { transform: translate(370px, 0);    opacity: 0 }
    }
  </style>

  <rect x="20" y="42" width="184" height="150" rx="12" class="dg147a-space"/>
  <rect x="338" y="42" width="282" height="150" rx="12" class="dg147a-space"/>
  <text x="32" y="62" class="dg147a-lbl">Capillary lumen</text>
  <text x="608" y="62" class="dg147a-lbl" text-anchor="end">Bowman's space</text>

  <line x1="222" y1="42" x2="222" y2="192" class="dg147a-endo"/>
  <rect x="244" y="42" width="40" height="150" class="dg147a-gbm"/>
  <text x="264" y="66" class="dg147a-neg">&#8722;</text>
  <text x="264" y="122" class="dg147a-neg">&#8722;</text>
  <text x="264" y="150" class="dg147a-neg">&#8722;</text>
  <text x="264" y="178" class="dg147a-neg">&#8722;</text>

  <rect x="300" y="44"  width="20" height="22" rx="5" class="dg147a-foot"/>
  <rect x="300" y="72"  width="20" height="22" rx="5" class="dg147a-foot"/>
  <rect x="300" y="100" width="20" height="22" rx="5" class="dg147a-foot"/>
  <rect x="300" y="128" width="20" height="22" rx="5" class="dg147a-foot"/>
  <rect x="300" y="156" width="20" height="22" rx="5" class="dg147a-foot"/>

  <text x="228" y="34" class="dg147a-sub" text-anchor="end">Fenestrated endothelium</text>
  <text x="264" y="16" class="dg147a-sub" text-anchor="middle">GBM (negative charge)</text>
  <text x="300" y="34" class="dg147a-sub">Podocyte slit diaphragm</text>

  <line x1="120" y1="97" x2="556" y2="97" class="dg147a-route"/>
  <polygon points="556,89 572,97 556,105" class="dg147a-head"/>
  <text x="350" y="86" class="dg147a-lbl">About 85% crosses all three layers</text>
  <circle cx="132" cy="97" r="5" class="dg147a-dot dg147a-run1"/>
  <circle cx="132" cy="97" r="5" class="dg147a-dot dg147a-run2"/>
  <circle cx="132" cy="97" r="5" class="dg147a-dot dg147a-run3"/>

  <path d="M 241 158 C 216 134, 174 136, 150 156" class="dg147a-back"/>
  <polygon points="146,150 142,164 156,160" class="dg147a-headb"/>
  <g class="dg147a-repel">
    <circle cx="160" cy="176" r="11" class="dg147a-alb"/>
    <text x="160" y="181" class="dg147a-albt">&#8722;</text>
  </g>
  <text x="32" y="181" class="dg147a-sub">Albumin repelled</text>

  <rect x="150" y="212" width="310" height="62" rx="12" class="dg147a-space"/>
  <ellipse cx="226" cy="246" rx="24" ry="13" class="dg147a-mcell"/>
  <ellipse cx="304" cy="246" rx="24" ry="13" class="dg147a-mcell"/>
  <ellipse cx="382" cy="246" rx="24" ry="13" class="dg147a-mcell"/>
  <text x="162" y="228" class="dg147a-lbl">Mesangium</text>

  <path d="M 110 192 L 110 244 L 480 244 L 480 204" class="dg147a-route"/>
  <polygon points="472,204 480,190 488,204" class="dg147a-head"/>
  <circle cx="110" cy="192" r="5" class="dg147a-dot dg147a-mes"/>
  <text x="496" y="222" class="dg147a-lbl">About 15%</text>
  <text x="496" y="240" class="dg147a-sub">enters the mesangium,</text>
  <text x="496" y="256" class="dg147a-sub">then filters back out to</text>
  <text x="496" y="272" class="dg147a-sub">Bowman's capsule</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv147 - where immune deposits sit, the question electron microscopy answers.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv147-deposit-sites"] = {
  title: "Where immune deposits sit",
  caption:
    "Electron microscopy sorts immune deposits by site, and each site points to a disease. " +
    "Acute PSGN forms subepithelial humps that stay superficial under the foot processes. " +
    "Membranous nephropathy deposits start in the same place but move inward, thickening the GBM. " +
    "Subendothelial deposits lie between the GBM and endothelium in membranoproliferative glomerulonephritis, giving the tram track, and mesangial deposits mark IgA nephropathy. " +
    "Each site lights up in turn. Schematic, not to scale.",
  svg: `
<svg viewBox="0 0 640 316" role="img" aria-label="Section through a glomerular capillary wall with Bowman's space at the top, then podocyte foot processes, the glomerular basement membrane, endothelium and the capillary lumen, and the mesangium at the right. Four deposit sites are marked: a subepithelial hump under a foot process in acute post-streptococcal glomerulonephritis, a subepithelial deposit moving inward through the membrane in membranous nephropathy, a subendothelial deposit between membrane and endothelium in membranoproliferative glomerulonephritis, and mesangial deposits in IgA nephropathy.">
  <style>
    .dg147b-space { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg147b-gbm   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg147b-foot  { fill: var(--dg-accent); opacity: .85; }
    .dg147b-cap   { fill: none; stroke: var(--dg-accent); stroke-width: 7; stroke-linecap: round; opacity: .85; }
    .dg147b-endo  { stroke: var(--dg-ink); stroke-width: 6; stroke-dasharray: 26 8; fill: none; }
    .dg147b-mcell { fill: var(--dg-line); stroke: var(--dg-muted); stroke-width: 1; }
    .dg147b-dep   { fill: var(--dg-warm); }
    .dg147b-arrow { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; }
    .dg147b-ahead { fill: var(--dg-warm); }
    .dg147b-lbl   { font-size: 12.5px; font-weight: 700; }
    .dg147b-sub   { font-size: 12px; fill: var(--dg-muted); }
    .dg147b-c     { text-anchor: middle; }
    .dg147b-s1 { animation: dg147glow 12s ease-in-out infinite; }
    .dg147b-s2 { animation: dg147glow 12s ease-in-out infinite 3s; }
    .dg147b-s3 { animation: dg147glow 12s ease-in-out infinite 6s; }
    .dg147b-s4 { animation: dg147glow 12s ease-in-out infinite 9s; }
    @keyframes dg147glow {
      0%, 100% { opacity: .4 }
      6%, 22%  { opacity: 1 }
      30%      { opacity: .4 }
    }
    .dg147b-sink { animation: dg147sink 12s ease-in-out infinite 3s; }
    @keyframes dg147sink {
      0%, 4%    { transform: translateY(0) }
      24%, 100% { transform: translateY(21px) }
    }
  </style>

  <rect x="20" y="10" width="600" height="72" rx="10" class="dg147b-space"/>
  <text x="610" y="28" class="dg147b-lbl" text-anchor="end">Bowman's space</text>

  <rect x="20" y="152" width="372" height="118" rx="10" class="dg147b-space"/>
  <text x="32" y="260" class="dg147b-lbl">Capillary lumen</text>
  <rect x="400" y="132" width="220" height="138" rx="10" class="dg147b-space"/>
  <text x="412" y="260" class="dg147b-lbl">Mesangium</text>

  <g>
    <rect x="28"  y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="150" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="196" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="272" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="318" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="364" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="410" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="456" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="502" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
    <rect x="548" y="82" width="34" height="20" rx="6" class="dg147b-foot"/>
  </g>

  <rect x="20" y="102" width="600" height="30" class="dg147b-gbm"/>
  <text x="32" y="122" class="dg147b-lbl">GBM</text>
  <line x1="20" y1="146" x2="392" y2="146" class="dg147b-endo"/>
  <text x="32" y="172" class="dg147b-sub">Endothelium, fenestrated</text>

  <ellipse cx="440" cy="196" rx="24" ry="12" class="dg147b-mcell"/>
  <ellipse cx="510" cy="208" rx="24" ry="12" class="dg147b-mcell"/>
  <ellipse cx="580" cy="196" rx="24" ry="12" class="dg147b-mcell"/>

  <g class="dg147b-s1">
    <path d="M 74 100 C 78 66, 134 66, 138 100" class="dg147b-cap"/>
    <ellipse cx="106" cy="91" rx="24" ry="11" class="dg147b-dep"/>
  </g>
  <text x="106" y="30" class="dg147b-lbl dg147b-c">Subepithelial hump</text>
  <text x="106" y="46" class="dg147b-sub dg147b-c">Acute PSGN</text>

  <g class="dg147b-s2">
    <ellipse cx="251" cy="94" rx="15" ry="9" class="dg147b-dep dg147b-sink"/>
    <line x1="251" y1="105" x2="251" y2="120" class="dg147b-arrow"/>
    <polygon points="245,119 257,119 251,130" class="dg147b-ahead"/>
  </g>
  <text x="262" y="30" class="dg147b-lbl dg147b-c">Subepithelial, moves inward</text>
  <text x="262" y="46" class="dg147b-sub dg147b-c">Membranous nephropathy</text>

  <ellipse class="dg147b-dep dg147b-s3" cx="330" cy="137" rx="30" ry="5.5"/>
  <text x="196" y="200" class="dg147b-lbl">Subendothelial</text>
  <text x="196" y="216" class="dg147b-sub">Membranoproliferative GN,</text>
  <text x="196" y="232" class="dg147b-sub">tram track</text>
  <line x1="326" y1="150" x2="288" y2="190" stroke="var(--dg-muted)" stroke-width="1.2"/>

  <g class="dg147b-s4">
    <ellipse cx="470" cy="156" rx="20" ry="10" class="dg147b-dep"/>
    <ellipse cx="545" cy="162" rx="18" ry="9" class="dg147b-dep"/>
    <ellipse cx="478" cy="232" rx="14" ry="7" class="dg147b-dep"/>
  </g>
  <text x="608" y="236" class="dg147b-lbl" text-anchor="end">Mesangial</text>
  <text x="608" y="252" class="dg147b-sub" text-anchor="end">IgA nephropathy</text>

  <text x="20" y="298" class="dg147b-sub">Foot processes, GBM and endothelium form the barrier; the mesangium sits beside it.</text>
</svg>`,
};

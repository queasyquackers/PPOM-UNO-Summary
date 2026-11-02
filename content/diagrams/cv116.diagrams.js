window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv116-temporal-heterogeneity"] = {
  title: "Mixed-age vs same-stage fibrosis",
  caption: "A schematic, not a lecture image: each square is a patch of alveolar septa, and the dot marks time up to the biopsy. In UIP new lesions keep starting while older ones scar, so one field holds fibroblastic foci, dense fibrosis, honeycomb cysts and spared lung together, which is temporal plus spatial heterogeneity (Slides 17-18). In fibrosing NSIP the lesions are at roughly the same stage, and that uniformity is the key distinction from UIP (Slides 20-21).",
  svg: `<svg viewBox="0 0 640 312" role="img" aria-label="Two grids of lung tissue squares over time. In usual interstitial pneumonia, patches are injured in separate waves, so the final field holds honeycomb cysts, dense fibrosis, fibroblastic foci and spared lung together. In fibrosing nonspecific interstitial pneumonia, every patch changes together, so the final field shows one stage of fibrosis.">
  <style>
    .dg116a-hd { font-size: 14px; font-weight: 700; }
    .dg116a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg116a-lbl { font-size: 11px; }
    .dg116a-base rect { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg116a-focus rect { fill: var(--dg-warm); }
    .dg116a-dense rect { fill: var(--dg-accent); }
    .dg116a-same rect { fill: var(--dg-cool); opacity: .7; }
    .dg116a-cyst circle { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1; }
    .dg116a-bar { stroke: var(--dg-line); stroke-width: 3; stroke-linecap: round; }
    .dg116a-dot { fill: var(--dg-ink); animation: dg116atime 12s linear infinite; }
    .dg116a-f1 { opacity: 0; animation: dg116af1 12s linear infinite; }
    .dg116a-d1 { animation: dg116ad1 12s linear infinite; }
    .dg116a-h1 { animation: dg116ah1 12s linear infinite; }
    .dg116a-f2 { opacity: 0; animation: dg116af2 12s linear infinite; }
    .dg116a-d2 { animation: dg116ad2 12s linear infinite; }
    .dg116a-f3 { animation: dg116af3 12s linear infinite; }
    .dg116a-u { animation: dg116au 12s linear infinite; }
    @keyframes dg116atime { 0% { transform: translateX(-560px) } 84%,100% { transform: translateX(0) } }
    @keyframes dg116af1 { 0%,6% { opacity: 0 } 11%,30% { opacity: 1 } 36%,100% { opacity: 0 } }
    @keyframes dg116ad1 { 0%,30% { opacity: 0 } 36%,100% { opacity: 1 } }
    @keyframes dg116ah1 { 0%,58% { opacity: 0 } 64%,100% { opacity: 1 } }
    @keyframes dg116af2 { 0%,30% { opacity: 0 } 35%,54% { opacity: 1 } 60%,100% { opacity: 0 } }
    @keyframes dg116ad2 { 0%,54% { opacity: 0 } 60%,100% { opacity: 1 } }
    @keyframes dg116af3 { 0%,60% { opacity: 0 } 66%,100% { opacity: 1 } }
    @keyframes dg116au { 0%,30% { opacity: 0 } 42%,100% { opacity: 1 } }
  </style>

  <text x="28" y="20" class="dg116a-hd">UIP (IPF)</text>
  <text x="28" y="38" class="dg116a-sub">Patchy, and lesions start at different times</text>
  <text x="348" y="20" class="dg116a-hd">Fibrosing NSIP</text>
  <text x="348" y="38" class="dg116a-sub">Lesions at roughly the same stage</text>

  <g class="dg116a-base"><rect x="28" y="52" width="40" height="32" rx="5"/><rect x="73" y="52" width="40" height="32" rx="5"/><rect x="118" y="52" width="40" height="32" rx="5"/><rect x="163" y="52" width="40" height="32" rx="5"/><rect x="208" y="52" width="40" height="32" rx="5"/><rect x="253" y="52" width="40" height="32" rx="5"/><rect x="28" y="89" width="40" height="32" rx="5"/><rect x="73" y="89" width="40" height="32" rx="5"/><rect x="118" y="89" width="40" height="32" rx="5"/><rect x="163" y="89" width="40" height="32" rx="5"/><rect x="208" y="89" width="40" height="32" rx="5"/><rect x="253" y="89" width="40" height="32" rx="5"/><rect x="28" y="126" width="40" height="32" rx="5"/><rect x="73" y="126" width="40" height="32" rx="5"/><rect x="118" y="126" width="40" height="32" rx="5"/><rect x="163" y="126" width="40" height="32" rx="5"/><rect x="208" y="126" width="40" height="32" rx="5"/><rect x="253" y="126" width="40" height="32" rx="5"/><rect x="28" y="163" width="40" height="32" rx="5"/><rect x="73" y="163" width="40" height="32" rx="5"/><rect x="118" y="163" width="40" height="32" rx="5"/><rect x="163" y="163" width="40" height="32" rx="5"/><rect x="208" y="163" width="40" height="32" rx="5"/><rect x="253" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-dense dg116a-d1"><rect x="28" y="52" width="40" height="32" rx="5"/><rect x="73" y="52" width="40" height="32" rx="5"/><rect x="28" y="89" width="40" height="32" rx="5"/><rect x="253" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-focus dg116a-f1"><rect x="28" y="52" width="40" height="32" rx="5"/><rect x="73" y="52" width="40" height="32" rx="5"/><rect x="28" y="89" width="40" height="32" rx="5"/><rect x="253" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-cyst dg116a-h1"><circle cx="40" cy="63" r="6"/><circle cx="56" cy="63" r="5"/><circle cx="41" cy="76" r="4"/><circle cx="55" cy="76" r="5"/><circle cx="85" cy="63" r="6"/><circle cx="101" cy="63" r="5"/><circle cx="86" cy="76" r="4"/><circle cx="100" cy="76" r="5"/><circle cx="40" cy="100" r="6"/><circle cx="56" cy="100" r="5"/><circle cx="41" cy="113" r="4"/><circle cx="55" cy="113" r="5"/><circle cx="265" cy="174" r="6"/><circle cx="281" cy="174" r="5"/><circle cx="266" cy="187" r="4"/><circle cx="280" cy="187" r="5"/></g>
  <g class="dg116a-dense dg116a-d2"><rect x="118" y="52" width="40" height="32" rx="5"/><rect x="73" y="89" width="40" height="32" rx="5"/><rect x="28" y="126" width="40" height="32" rx="5"/><rect x="208" y="126" width="40" height="32" rx="5"/><rect x="253" y="126" width="40" height="32" rx="5"/><rect x="208" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-focus dg116a-f2"><rect x="118" y="52" width="40" height="32" rx="5"/><rect x="73" y="89" width="40" height="32" rx="5"/><rect x="28" y="126" width="40" height="32" rx="5"/><rect x="208" y="126" width="40" height="32" rx="5"/><rect x="253" y="126" width="40" height="32" rx="5"/><rect x="208" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-focus dg116a-f3"><rect x="208" y="52" width="40" height="32" rx="5"/><rect x="118" y="89" width="40" height="32" rx="5"/><rect x="253" y="89" width="40" height="32" rx="5"/><rect x="73" y="126" width="40" height="32" rx="5"/><rect x="28" y="163" width="40" height="32" rx="5"/><rect x="163" y="163" width="40" height="32" rx="5"/></g>

  <g class="dg116a-base"><rect x="348" y="52" width="40" height="32" rx="5"/><rect x="393" y="52" width="40" height="32" rx="5"/><rect x="438" y="52" width="40" height="32" rx="5"/><rect x="483" y="52" width="40" height="32" rx="5"/><rect x="528" y="52" width="40" height="32" rx="5"/><rect x="573" y="52" width="40" height="32" rx="5"/><rect x="348" y="89" width="40" height="32" rx="5"/><rect x="393" y="89" width="40" height="32" rx="5"/><rect x="438" y="89" width="40" height="32" rx="5"/><rect x="483" y="89" width="40" height="32" rx="5"/><rect x="528" y="89" width="40" height="32" rx="5"/><rect x="573" y="89" width="40" height="32" rx="5"/><rect x="348" y="126" width="40" height="32" rx="5"/><rect x="393" y="126" width="40" height="32" rx="5"/><rect x="438" y="126" width="40" height="32" rx="5"/><rect x="483" y="126" width="40" height="32" rx="5"/><rect x="528" y="126" width="40" height="32" rx="5"/><rect x="573" y="126" width="40" height="32" rx="5"/><rect x="348" y="163" width="40" height="32" rx="5"/><rect x="393" y="163" width="40" height="32" rx="5"/><rect x="438" y="163" width="40" height="32" rx="5"/><rect x="483" y="163" width="40" height="32" rx="5"/><rect x="528" y="163" width="40" height="32" rx="5"/><rect x="573" y="163" width="40" height="32" rx="5"/></g>
  <g class="dg116a-same dg116a-u"><rect x="348" y="52" width="40" height="32" rx="5"/><rect x="393" y="52" width="40" height="32" rx="5"/><rect x="438" y="52" width="40" height="32" rx="5"/><rect x="483" y="52" width="40" height="32" rx="5"/><rect x="528" y="52" width="40" height="32" rx="5"/><rect x="573" y="52" width="40" height="32" rx="5"/><rect x="348" y="89" width="40" height="32" rx="5"/><rect x="393" y="89" width="40" height="32" rx="5"/><rect x="438" y="89" width="40" height="32" rx="5"/><rect x="483" y="89" width="40" height="32" rx="5"/><rect x="528" y="89" width="40" height="32" rx="5"/><rect x="573" y="89" width="40" height="32" rx="5"/><rect x="348" y="126" width="40" height="32" rx="5"/><rect x="393" y="126" width="40" height="32" rx="5"/><rect x="438" y="126" width="40" height="32" rx="5"/><rect x="483" y="126" width="40" height="32" rx="5"/><rect x="528" y="126" width="40" height="32" rx="5"/><rect x="573" y="126" width="40" height="32" rx="5"/><rect x="348" y="163" width="40" height="32" rx="5"/><rect x="393" y="163" width="40" height="32" rx="5"/><rect x="438" y="163" width="40" height="32" rx="5"/><rect x="483" y="163" width="40" height="32" rx="5"/><rect x="528" y="163" width="40" height="32" rx="5"/><rect x="573" y="163" width="40" height="32" rx="5"/></g>

  <line x1="40" y1="222" x2="600" y2="222" class="dg116a-bar"/>
  <circle cx="600" cy="222" r="6" class="dg116a-dot"/>
  <text x="28" y="240" class="dg116a-sub">Earlier</text>
  <text x="612" y="240" text-anchor="end" class="dg116a-sub">Time of biopsy</text>

  <rect x="28" y="254" width="14" height="14" rx="3" fill="var(--dg-panel)" stroke="var(--dg-line)"/>
  <text x="47" y="265" class="dg116a-lbl">Spared lung</text>
  <rect x="136" y="254" width="14" height="14" rx="3" fill="var(--dg-warm)"/>
  <text x="155" y="265" class="dg116a-lbl">Fibroblastic focus (early)</text>
  <rect x="306" y="254" width="14" height="14" rx="3" fill="var(--dg-accent)"/>
  <text x="325" y="265" class="dg116a-lbl">Dense fibrosis (late)</text>
  <rect x="456" y="254" width="14" height="14" rx="3" fill="var(--dg-accent)"/>
  <circle cx="463" cy="261" r="4" fill="var(--dg-surface)" stroke="var(--dg-ink)"/>
  <text x="475" y="265" class="dg116a-lbl">Honeycomb cysts (end)</text>
  <rect x="28" y="280" width="14" height="14" rx="3" fill="var(--dg-cool)" opacity=".7"/>
  <text x="47" y="291" class="dg116a-lbl">NSIP fibrosis, one stage throughout, no or few foci, no honeycombing</text>
</svg>`
};

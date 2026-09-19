window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv69-viscerosomatic-loop"] = {
  title: "Chapman's reflex as a viscerosomatic loop",
  caption:
    "An irritated organ sends visceral afferents into the dorsal horn, where cross-synaptic noise spills onto somatic neurons " +
    "that supply muscle and fascia both anteriorly (the gangliform contraction in the intercostal fascia) and posteriorly " +
    "(the paraspinal point). Treating the somatic point inhibits that tension and reflexively reduces the excess sympathetic " +
    "input to the organ (Slides 5 and 13).",
  svg: `
<svg viewBox="0 0 620 280" role="img" aria-label="Loop diagram: an irritated organ sends afferent signals to the dorsal horn of the spinal cord; somatic efferents go to an anterior intercostal point and a posterior paraspinal point; treating those points sends a dampening effect back that reduces sympathetic input to the organ.">
  <style>
    .dg69a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg69a-cord  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg69a-lbl   { font-size: 13px; font-weight: 700; }
    .dg69a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg69a-aff   { fill: none; stroke: var(--dg-warm); stroke-width: 3; }
    .dg69a-eff   { fill: none; stroke: var(--dg-cool); stroke-width: 3; }
    .dg69a-tx    { fill: none; stroke: var(--dg-good); stroke-width: 3; stroke-dasharray: 7 6; }
    .dg69a-pulse { fill: none; stroke-width: 6; stroke-linecap: round; stroke-dasharray: 14 1000; }
    .dg69a-p1 { stroke: var(--dg-warm); animation: dg69aRun 4.5s linear infinite; }
    .dg69a-p2 { stroke: var(--dg-cool); animation: dg69aRun 4.5s linear infinite 1.2s; }
    .dg69a-p3 { stroke: var(--dg-cool); animation: dg69aRun 4.5s linear infinite 1.2s; }
    .dg69a-p4 { stroke: var(--dg-good); animation: dg69aRunLong 4.5s linear infinite 2.6s; }
    @keyframes dg69aRun {
      0%   { stroke-dashoffset: 14; opacity: 0 }
      8%   { opacity: 1 }
      35%  { stroke-dashoffset: -125; opacity: 1 }
      42%  { opacity: 0 }
      100% { stroke-dashoffset: -125; opacity: 0 }
    }
    @keyframes dg69aRunLong {
      0%   { stroke-dashoffset: 14; opacity: 0 }
      8%   { opacity: 1 }
      40%  { stroke-dashoffset: -590; opacity: 1 }
      46%  { opacity: 0 }
      100% { stroke-dashoffset: -590; opacity: 0 }
    }
    .dg69a-node { fill: var(--dg-warm); animation: dg69aGlow 4.5s ease-in-out infinite; }
    @keyframes dg69aGlow { 0%,100% { opacity: .45 } 30% { opacity: 1 } }
  </style>

  <rect x="20" y="100" width="130" height="70" rx="12" class="dg69a-box"/>
  <text x="40" y="128" class="dg69a-lbl">Irritated organ</text>
  <text x="40" y="148" class="dg69a-sub">visceral afferents</text>

  <rect x="255" y="90" width="120" height="90" rx="14" class="dg69a-cord"/>
  <text x="272" y="118" class="dg69a-lbl">Dorsal horn</text>
  <text x="267" y="138" class="dg69a-sub">cross-synaptic noise</text>
  <text x="270" y="156" class="dg69a-sub">sympathetic arm</text>

  <rect x="470" y="30" width="135" height="70" rx="12" class="dg69a-box"/>
  <circle cx="490" cy="65" r="7" class="dg69a-node"/>
  <text x="503" y="58" class="dg69a-lbl">Anterior point</text>
  <text x="503" y="78" class="dg69a-sub">intercostal fascia</text>

  <rect x="470" y="170" width="135" height="70" rx="12" class="dg69a-box"/>
  <circle cx="490" cy="205" r="7" class="dg69a-node"/>
  <text x="503" y="198" class="dg69a-lbl">Posterior point</text>
  <text x="503" y="218" class="dg69a-sub">paraspinal, stringy</text>

  <path d="M150 135 L255 135" class="dg69a-aff"/>
  <polygon points="247,128 259,135 247,142" fill="var(--dg-warm)"/>
  <path d="M375 115 C420 115 430 65 468 65" class="dg69a-eff"/>
  <polygon points="460,58 472,65 460,72" fill="var(--dg-cool)"/>
  <path d="M375 155 C420 155 430 205 468 205" class="dg69a-eff"/>
  <polygon points="460,198 472,205 460,212" fill="var(--dg-cool)"/>
  <path d="M537 240 C537 272 85 272 85 172" class="dg69a-tx"/>
  <polygon points="78,180 85,168 92,180" fill="var(--dg-good)"/>

  <path d="M150 135 L255 135" class="dg69a-pulse dg69a-p1"/>
  <path d="M375 115 C420 115 430 65 468 65" class="dg69a-pulse dg69a-p2"/>
  <path d="M375 155 C420 155 430 205 468 205" class="dg69a-pulse dg69a-p3"/>
  <path d="M537 240 C537 272 85 272 85 172" class="dg69a-pulse dg69a-p4"/>

  <text x="170" y="125" class="dg69a-sub">afferent</text>
  <text x="392" y="95" class="dg69a-sub">somatic</text>
  <text x="170" y="236" class="dg69a-sub">OMT to the point reduces sympathetic input to the organ</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv69-colon-thigh-map"] = {
  title: "Flip the colon onto the thighs",
  caption:
    "The lower GI points lie on the lateral thighs, as if the colon were flipped down over the legs. " +
    "Following the colon's own path, the highlight runs down the right thigh (cecum, ascending colon, hepatic flexure above the knee), " +
    "crosses as the transverse colon, then climbs the left thigh (splenic flexure above the knee, descending colon, sigmoid at the top). " +
    "All colon points share one posterior area from the L2-L4 transverse processes to the iliac crest (Slide 34).",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Front view of right and left thighs. Right lateral thigh from top to bottom: cecum, ascending colon, hepatic flexure. Left lateral thigh from top to bottom: sigmoid colon, descending colon, splenic flexure. A highlight moves down the right thigh and up the left thigh in the order of colonic flow.">
  <style>
    .dg69b-leg  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg69b-lbl  { font-size: 13px; font-weight: 700; }
    .dg69b-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg69b-seg  { fill: var(--dg-accent); opacity: .25; animation: dg69bLit 6s ease-in-out infinite; }
    .dg69b-s1 { animation-delay: 0s; }
    .dg69b-s2 { animation-delay: 1s; }
    .dg69b-s3 { animation-delay: 2s; }
    .dg69b-s4 { animation-delay: 3s; }
    .dg69b-s5 { animation-delay: 4s; }
    .dg69b-s6 { animation-delay: 5s; }
    @keyframes dg69bLit { 0%,100% { opacity: .25 } 8%,16% { opacity: .95 } 30% { opacity: .25 } }
    .dg69b-tc { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 6 5; }
  </style>

  <text x="140" y="24" class="dg69b-lbl">RIGHT thigh</text>
  <text x="400" y="24" class="dg69b-lbl">LEFT thigh</text>
  <text x="252" y="24" class="dg69b-sub">patient facing you</text>

  <rect x="120" y="36" width="90" height="230" rx="30" class="dg69b-leg"/>
  <rect x="410" y="36" width="90" height="230" rx="30" class="dg69b-leg"/>
  <text x="138" y="286" class="dg69b-sub">knee</text>
  <text x="440" y="286" class="dg69b-sub">knee</text>

  <rect x="104" y="46"  width="22" height="64" rx="8" class="dg69b-seg dg69b-s1"/>
  <rect x="104" y="118" width="22" height="64" rx="8" class="dg69b-seg dg69b-s2"/>
  <rect x="104" y="190" width="22" height="64" rx="8" class="dg69b-seg dg69b-s3"/>
  <rect x="494" y="190" width="22" height="64" rx="8" class="dg69b-seg dg69b-s4"/>
  <rect x="494" y="118" width="22" height="64" rx="8" class="dg69b-seg dg69b-s5"/>
  <rect x="494" y="46"  width="22" height="64" rx="8" class="dg69b-seg dg69b-s6"/>

  <text x="20" y="74" class="dg69b-lbl">Cecum</text>
  <text x="20" y="92" class="dg69b-sub">upper outer</text>
  <text x="20" y="146" class="dg69b-lbl">Ascending</text>
  <text x="20" y="164" class="dg69b-sub">middle outer</text>
  <text x="20" y="218" class="dg69b-lbl">Hepatic</text>
  <text x="20" y="236" class="dg69b-sub">flexure, lower</text>

  <text x="526" y="74" class="dg69b-lbl">Sigmoid</text>
  <text x="526" y="92" class="dg69b-sub">upper outer</text>
  <text x="526" y="146" class="dg69b-lbl">Descending</text>
  <text x="526" y="164" class="dg69b-sub">middle outer</text>
  <text x="526" y="218" class="dg69b-lbl">Splenic</text>
  <text x="526" y="236" class="dg69b-sub">flexure, lower</text>

  <path d="M126 222 C250 262 370 262 494 222" class="dg69b-tc"/>
  <text x="232" y="234" class="dg69b-sub">transverse colon</text>
  <text x="236" y="140" class="dg69b-sub">posterior for all:</text>
  <text x="236" y="156" class="dg69b-sub">L2-L4 TPs to iliac crest</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv159-hyperfiltration-cycle"] = {
  title: "Hyperfiltration: compensation that becomes injury",
  caption:
    "Left: when nephrons are lost, the survivors hypertrophy and hyperfilter, which raises glomerular capillary pressure and radius; the capillary damage spreads focal, then segmental, then global and ends in glomerulosclerosis and interstitial fibrosis, so more nephrons are lost and the cycle repeats. " +
    "Right: that same compensation keeps plasma creatinine close to baseline early, which is why creatinine is an insensitive early marker; by the time about 50% of functioning nephrons are lost, plasma creatinine has doubled. " +
    "The 50% and doubling values are this lecture's (Slide 4); the curve's shape is illustrative.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left, a four-step cycle: nephron loss leads surviving nephrons to hypertrophy and hyperfilter, which raises glomerular capillary pressure and radius, which causes glomerulosclerosis and interstitial fibrosis, which causes more nephron loss. Right, a graph of plasma creatinine against percent of functioning nephrons lost: creatinine stays near baseline early and has doubled when about half the nephrons are lost.">
  <style>
    .dg159a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg159a-lbl { font-size: 12px; font-weight: 700; }
    .dg159a-sub { font-size: 10.5px; fill: var(--dg-muted); }
    .dg159a-arw { stroke: var(--dg-accent); stroke-width: 3; fill: none; }
    .dg159a-head { fill: var(--dg-accent); }
    .dg159a-axis { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg159a-guide { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 4; fill: none; }
    .dg159a-mask { fill: var(--dg-cool); opacity: .14; }
    .dg159a-curve { fill: none; stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 320; stroke-dashoffset: 0; animation: dg159a-draw 6s ease-in-out infinite; }
    .dg159a-dot { fill: var(--dg-warm); }
    .dg159a-key { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg159a-s1 { animation: dg159a-pulse 4s ease-in-out infinite; }
    .dg159a-s2 { animation: dg159a-pulse 4s ease-in-out infinite 1s; }
    .dg159a-s3 { animation: dg159a-pulse 4s ease-in-out infinite 2s; }
    .dg159a-s4 { animation: dg159a-pulse 4s ease-in-out infinite 3s; }
    @keyframes dg159a-pulse { 0%, 100% { opacity: .45 } 18% { opacity: 1 } 40% { opacity: .45 } }
    @keyframes dg159a-draw { 0% { stroke-dashoffset: 320 } 55%, 100% { stroke-dashoffset: 0 } }
  </style>

  <g class="dg159a-s1">
    <rect x="10" y="40" width="150" height="62" rx="10" class="dg159a-box"/>
    <text x="22" y="64" class="dg159a-lbl">Nephron loss</text>
    <text x="22" y="84" class="dg159a-sub">any renal injury</text>
  </g>
  <g class="dg159a-s2">
    <rect x="190" y="40" width="150" height="62" rx="10" class="dg159a-box"/>
    <text x="202" y="62" class="dg159a-lbl">Survivors hypertrophy</text>
    <text x="202" y="77" class="dg159a-lbl">and hyperfilter</text>
    <text x="202" y="94" class="dg159a-sub">supranormal GFR</text>
  </g>
  <g class="dg159a-s3">
    <rect x="190" y="190" width="150" height="62" rx="10" class="dg159a-box"/>
    <text x="202" y="212" class="dg159a-lbl">Capillary pressure</text>
    <text x="202" y="227" class="dg159a-lbl">and radius rise</text>
    <text x="202" y="244" class="dg159a-sub">capillaries are damaged</text>
  </g>
  <g class="dg159a-s4">
    <rect x="10" y="190" width="150" height="62" rx="10" class="dg159a-box"/>
    <text x="22" y="212" class="dg159a-lbl">Sclerosis and</text>
    <text x="22" y="227" class="dg159a-lbl">interstitial fibrosis</text>
    <text x="22" y="244" class="dg159a-sub">focal, segmental, global</text>
  </g>

  <line x1="162" y1="71" x2="180" y2="71" class="dg159a-arw"/>
  <polygon points="180,64 189,71 180,78" class="dg159a-head"/>
  <line x1="265" y1="104" x2="265" y2="180" class="dg159a-arw"/>
  <polygon points="258,180 265,189 272,180" class="dg159a-head"/>
  <line x1="188" y1="221" x2="170" y2="221" class="dg159a-arw"/>
  <polygon points="170,214 161,221 170,228" class="dg159a-head"/>
  <line x1="85" y1="188" x2="85" y2="112" class="dg159a-arw"/>
  <polygon points="78,112 85,103 92,112" class="dg159a-head"/>
  <text x="175" y="142" text-anchor="middle" class="dg159a-sub">more loss,</text>
  <text x="175" y="156" text-anchor="middle" class="dg159a-sub">more overwork</text>

  <rect x="400" y="40" width="77" height="210" class="dg159a-mask"/>
  <text x="405" y="58" class="dg159a-sub">creatinine can</text>
  <text x="405" y="71" class="dg159a-sub">look normal</text>

  <line x1="400" y1="250" x2="628" y2="250" class="dg159a-axis"/>
  <line x1="400" y1="250" x2="400" y2="36" class="dg159a-axis"/>
  <line x1="400" y1="220" x2="500" y2="220" class="dg159a-guide"/>
  <polyline points="400,190 510,190 510,250" class="dg159a-guide"/>
  <path d="M400 220 L455 210 L510 190 L543 164 L565 130 L576 100 L587 50" class="dg159a-curve"/>
  <circle cx="510" cy="190" r="5" class="dg159a-dot"/>
  <text x="518" y="208" class="dg159a-key">50% lost:</text>
  <text x="518" y="222" class="dg159a-key">creatinine doubles</text>

  <text x="394" y="224" text-anchor="end" class="dg159a-sub">1x</text>
  <text x="394" y="194" text-anchor="end" class="dg159a-sub">2x</text>
  <text x="400" y="265" text-anchor="middle" class="dg159a-sub">0</text>
  <text x="510" y="265" text-anchor="middle" class="dg159a-sub">50%</text>
  <text x="514" y="286" text-anchor="middle" class="dg159a-sub">functioning nephrons lost</text>
  <text x="372" y="145" text-anchor="middle" transform="rotate(-90 372 145)" class="dg159a-sub">plasma creatinine</text>
</svg>`,
};

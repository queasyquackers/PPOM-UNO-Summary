window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv149-crescent"] = {
  title: "A crescent takes one glomerulus to GFR 0",
  caption: "A schematic, not a lecture image. Proliferation in Bowman's space builds into a crescent of fibrin, parietal epithelial cells, monocytes and macrophages (Slide 21), which squishes the glomerulus (Slide 22). Once the crescent obliterates Bowman's space, filtrate stops reaching the tubule and that glomerulus has a GFR of zero. Enough of these glomeruli turn a nephritic syndrome into the rapid decline of RPGN. The meter has no units; its end point of 0 is the only lecture value.",
  svg: `<svg viewBox="0 0 640 296" role="img" aria-label="Two sketches of a glomerulus inside Bowman's capsule. Before, Bowman's space is open and filtrate drains to the tubule. Then a crescent of fibrin, parietal epithelial cells, monocytes and macrophages grows inward from the capsule, squishes the glomerulus and obliterates Bowman's space, and a meter for the GFR of that glomerulus falls to zero.">
  <style>
    .dg149a-hd { font-size: 13px; font-weight: 700; }
    .dg149a-sub { font-size: 11px; }
    .dg149a-step { font-size: 12px; }
    .dg149a-cap { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg149a-tube { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg149a-stalk { stroke: var(--dg-ink); stroke-width: 2; }
    .dg149a-tuft circle { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg149a-cres path { fill: var(--dg-warm); fill-opacity: .42; }
    .dg149a-cres circle { fill: var(--dg-ink); opacity: .6; }
    .dg149a-seg { fill: var(--dg-accent); }
    .dg149a-box { fill: none; stroke: var(--dg-line); stroke-width: 1.5; }
    .dg149a-hl { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg149a-drop { fill: var(--dg-cool); animation: dg149adrop 1.8s linear infinite; }
    .dg149a-d2 { animation-delay: -.6s; }
    .dg149a-d3 { animation-delay: -1.2s; }
    .dg149a-flow { opacity: 0; animation: dg149aflow 14s linear infinite; }
    .dg149a-t1 { opacity: 0; animation: dg149at1 14s linear infinite; }
    .dg149a-t2 { animation: dg149at2 14s linear infinite; }
    .dg149a-c1 { animation: dg149ac1 14s linear infinite; }
    .dg149a-c2 { animation: dg149ac2 14s linear infinite; }
    .dg149a-c3 { animation: dg149ac3 14s linear infinite; }
    .dg149a-c4 { animation: dg149ac4 14s linear infinite; }
    .dg149a-h1 { opacity: 0; animation: dg149ah1 14s linear infinite; }
    .dg149a-h2 { opacity: 0; animation: dg149ah2 14s linear infinite; }
    .dg149a-h3 { animation: dg149ah3 14s linear infinite; }
    .dg149a-s1 { opacity: 0; animation: dg149as1 14s linear infinite; }
    .dg149a-s2 { opacity: 0; animation: dg149as2 14s linear infinite; }
    .dg149a-s3 { opacity: 0; animation: dg149as3 14s linear infinite; }
    .dg149a-s4 { opacity: 0; animation: dg149as4 14s linear infinite; }
    @keyframes dg149adrop { 0% { transform: translateY(0); opacity: 0 } 15%,85% { opacity: 1 } 100% { transform: translateY(40px); opacity: 0 } }
    @keyframes dg149aflow { 0%,70% { opacity: 1 } 80%,100% { opacity: 0 } }
    @keyframes dg149at1 { 0%,56% { opacity: 1 } 66%,100% { opacity: 0 } }
    @keyframes dg149at2 { 0%,56% { opacity: 0 } 66%,100% { opacity: 1 } }
    @keyframes dg149ac1 { 0%,14% { opacity: 0 } 20%,100% { opacity: 1 } }
    @keyframes dg149ac2 { 0%,36% { opacity: 0 } 42%,100% { opacity: 1 } }
    @keyframes dg149ac3 { 0%,58% { opacity: 0 } 64%,100% { opacity: 1 } }
    @keyframes dg149ac4 { 0%,74% { opacity: 0 } 80%,100% { opacity: 1 } }
    @keyframes dg149ah1 { 0%,14% { opacity: 0 } 18%,34% { opacity: 1 } 38%,100% { opacity: 0 } }
    @keyframes dg149ah2 { 0%,34% { opacity: 0 } 38%,54% { opacity: 1 } 58%,100% { opacity: 0 } }
    @keyframes dg149ah3 { 0%,54% { opacity: 0 } 58%,100% { opacity: 1 } }
    @keyframes dg149as4 { 0%,16% { opacity: 1 } 20%,100% { opacity: 0 } }
    @keyframes dg149as3 { 0%,38% { opacity: 1 } 42%,100% { opacity: 0 } }
    @keyframes dg149as2 { 0%,60% { opacity: 1 } 64%,100% { opacity: 0 } }
    @keyframes dg149as1 { 0%,76% { opacity: 1 } 80%,100% { opacity: 0 } }
  </style>

  <text x="92" y="16" text-anchor="middle" class="dg149a-hd">Before</text>
  <rect x="85" y="192" width="14" height="40" class="dg149a-tube"/>
  <circle cx="92" cy="125" r="72" class="dg149a-cap"/>
  <line x1="86" y1="26" x2="86" y2="82" class="dg149a-stalk"/>
  <line x1="98" y1="26" x2="98" y2="82" class="dg149a-stalk"/>
  <g class="dg149a-tuft"><circle cx="92" cy="95" r="16"/><circle cx="63" cy="120" r="16"/><circle cx="121" cy="120" r="16"/><circle cx="75" cy="152" r="16"/><circle cx="109" cy="152" r="16"/></g>
  <text x="92" y="250" text-anchor="middle" class="dg149a-sub">Open Bowman's space</text>
  <text x="92" y="266" text-anchor="middle" class="dg149a-sub">Filtrate reaches the tubule</text>

  <text x="300" y="16" text-anchor="middle" class="dg149a-hd">Crescent forming</text>
  <rect x="290" y="216" width="20" height="56" class="dg149a-tube"/>
  <g class="dg149a-flow"><circle cx="300" cy="226" r="3.5" class="dg149a-drop"/><circle cx="300" cy="226" r="3.5" class="dg149a-drop dg149a-d2"/><circle cx="300" cy="226" r="3.5" class="dg149a-drop dg149a-d3"/></g>
  <circle cx="300" cy="125" r="95" class="dg149a-cap"/>
  <g class="dg149a-cres dg149a-c4"><path d="M 205 125 A 95 95 0 1 0 395 125 A 95 95 0 1 0 205 125 Z"/></g>
  <line x1="294" y1="24" x2="294" y2="63" class="dg149a-stalk"/>
  <line x1="306" y1="24" x2="306" y2="63" class="dg149a-stalk"/>
  <g class="dg149a-tuft dg149a-t1"><circle cx="300" cy="85" r="22"/><circle cx="262" cy="118" r="22"/><circle cx="338" cy="118" r="22"/><circle cx="278" cy="160" r="22"/><circle cx="322" cy="160" r="22"/></g>
  <g class="dg149a-tuft dg149a-t2"><circle cx="300" cy="58" r="14"/><circle cx="275" cy="76" r="14"/><circle cx="325" cy="76" r="14"/><circle cx="288" cy="100" r="14"/><circle cx="312" cy="100" r="14"/></g>
  <g class="dg149a-cres dg149a-c1"><path d="M 210.7 92.5 A 95 95 0 1 0 389.3 92.5 A 91.9 91.9 0 1 1 210.7 92.5 Z"/><circle cx="225.5" cy="168" r="2.6"/><circle cx="257" cy="199.5" r="2.6"/><circle cx="300" cy="211" r="2.6"/><circle cx="343" cy="199.5" r="2.6"/><circle cx="374.5" cy="168" r="2.6"/></g>
  <g class="dg149a-cres dg149a-c2"><path d="M 210.7 92.5 A 95 95 0 1 0 389.3 92.5 A 89.3 89.3 0 0 1 210.7 92.5 Z"/><circle cx="252" cy="173" r="2.6"/><circle cx="282" cy="190.7" r="2.6"/><circle cx="317.6" cy="190.7" r="2.6"/><circle cx="348" cy="173" r="2.6"/></g>
  <g class="dg149a-cres dg149a-c3"><path d="M 210.7 92.5 A 95 95 0 1 0 389.3 92.5 A 98.1 98.1 0 0 1 210.7 92.5 Z"/><circle cx="275" cy="168.3" r="2.6"/><circle cx="300" cy="175" r="2.6"/><circle cx="325" cy="168.3" r="2.6"/><circle cx="285.6" cy="155.8" r="2.6"/><circle cx="314.4" cy="155.8" r="2.6"/></g>
  <g class="dg149a-cres dg149a-c4"><path d="M 210.7 92.5 A 95 95 0 1 0 389.3 92.5 A 138.9 138.9 0 0 1 210.7 92.5 Z"/><circle cx="300" cy="143" r="2.6"/><circle cx="278" cy="137" r="2.6"/><circle cx="322" cy="137" r="2.6"/></g>
  <text x="318" y="266" class="dg149a-sub">To tubule</text>

  <rect x="420" y="28" width="214" height="40" rx="6" class="dg149a-hl dg149a-h1"/>
  <rect x="420" y="72" width="214" height="60" rx="6" class="dg149a-hl dg149a-h2"/>
  <rect x="420" y="136" width="214" height="40" rx="6" class="dg149a-hl dg149a-h3"/>
  <text x="428" y="44" class="dg149a-step">1. Cells start proliferating</text>
  <text x="428" y="60" class="dg149a-step">in Bowman's space</text>
  <text x="428" y="88" class="dg149a-step">2. Crescent builds: fibrin, parietal</text>
  <text x="428" y="104" class="dg149a-step">epithelial cells, monocytes,</text>
  <text x="428" y="120" class="dg149a-step">macrophages</text>
  <text x="428" y="152" class="dg149a-step">3. Glomerulus squished,</text>
  <text x="428" y="168" class="dg149a-step">Bowman's space obliterated</text>

  <text x="424" y="204" class="dg149a-hd">GFR of that glomerulus</text>
  <rect x="424" y="212" width="204" height="20" rx="4" class="dg149a-box"/>
  <rect x="427" y="215" width="48" height="14" class="dg149a-seg dg149a-s1"/>
  <rect x="477" y="215" width="48" height="14" class="dg149a-seg dg149a-s2"/>
  <rect x="527" y="215" width="48" height="14" class="dg149a-seg dg149a-s3"/>
  <rect x="577" y="215" width="48" height="14" class="dg149a-seg dg149a-s4"/>
  <text x="424" y="250" class="dg149a-sub">Reaches 0 once Bowman's space</text>
  <text x="424" y="266" class="dg149a-sub">is obliterated (Slide 21)</text>
</svg>`
};

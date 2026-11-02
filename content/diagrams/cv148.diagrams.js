window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv148-charge-barrier"] = {
  title: "Why protein leaks",
  caption:
    "Plasma proteins are negatively charged, and so are the GBM and podocytes, so proteins are normally repelled and stay in the blood. " +
    "In nephrotic syndrome that charge barrier is disrupted and proteins cross into the urine. " +
    "Proteinuria exceeding 3.5 g daily fulfills the syndrome (Slides 4-5).",
  svg: `
<svg viewBox="0 0 640 282" role="img" aria-label="Two panels of the glomerular filtration barrier. Left, normal: negatively charged plasma proteins approach the negatively charged basement membrane and podocyte foot processes and are repelled, so protein stays in the blood. Right, nephrotic syndrome: the charge barrier is disrupted, proteins cross into Bowman's space, and proteinuria exceeds 3.5 grams daily.">
  <style>
    .dg148a-b { font-size: 13.5px; font-weight: 700; }
    .dg148a-s { font-size: 11.5px; }
    .dg148a-zone { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg148a-end { fill: var(--dg-muted); }
    .dg148a-gbm { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg148a-gbmx { stroke: var(--dg-warm); stroke-dasharray: 6 5; }
    .dg148a-foot { fill: var(--dg-accent); }
    .dg148a-neg { stroke: var(--dg-accent); stroke-width: 2.5; stroke-linecap: round; }
    .dg148a-negw { stroke: var(--dg-surface); stroke-width: 2.5; stroke-linecap: round; }
    .dg148a-prot { fill: var(--dg-warm); }
    .dg148a-arr { stroke: var(--dg-accent); stroke-width: 3; }
    .dg148a-hd { fill: var(--dg-accent); }
    .dg148a-arrw { stroke: var(--dg-warm); stroke-width: 3; }
    .dg148a-hdw { fill: var(--dg-warm); }
    @keyframes dg148a-rep { 0% { transform: translateY(0); } 45% { transform: translateY(38px); } 100% { transform: translateY(0); } }
    @keyframes dg148a-cross { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(170px); opacity: 0; } }
    .dg148a-rep1 { animation: dg148a-rep 3.6s ease-in-out infinite; }
    .dg148a-rep2 { animation: dg148a-rep 3.6s ease-in-out infinite .6s; }
    .dg148a-rep3 { animation: dg148a-rep 3.6s ease-in-out infinite 1.2s; }
    .dg148a-leak1 { animation: dg148a-cross 3.6s linear infinite; }
    .dg148a-leak2 { animation: dg148a-cross 3.6s linear infinite .9s; }
    .dg148a-leak3 { animation: dg148a-cross 3.6s linear infinite 1.8s; }
  </style>
  <g transform="translate(10,0)">
  <text x="150" y="16" text-anchor="middle" class="dg148a-b">Normal barrier</text>
  <rect x="0" y="26" width="300" height="92" rx="8" class="dg148a-zone"/>
  <text x="10" y="42" class="dg148a-s">Blood (plasma proteins)</text>
  <rect x="0" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="62" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="124" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="186" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="248" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="0" y="130" width="300" height="32" class="dg148a-gbm"/>
  <text x="8" y="150" class="dg148a-s">GBM</text>
  <line x1="54" y1="146" x2="66" y2="146" class="dg148a-neg"/>
  <line x1="94" y1="146" x2="106" y2="146" class="dg148a-neg"/>
  <line x1="134" y1="146" x2="146" y2="146" class="dg148a-neg"/>
  <line x1="174" y1="146" x2="186" y2="146" class="dg148a-neg"/>
  <line x1="214" y1="146" x2="226" y2="146" class="dg148a-neg"/>
  <line x1="254" y1="146" x2="266" y2="146" class="dg148a-neg"/>
  <rect x="6" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="19" y1="177" x2="31" y2="177" class="dg148a-negw"/>
  <rect x="56" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="69" y1="177" x2="81" y2="177" class="dg148a-negw"/>
  <rect x="106" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="119" y1="177" x2="131" y2="177" class="dg148a-negw"/>
  <rect x="156" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="169" y1="177" x2="181" y2="177" class="dg148a-negw"/>
  <rect x="206" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="219" y1="177" x2="231" y2="177" class="dg148a-negw"/>
  <rect x="256" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <line x1="269" y1="177" x2="281" y2="177" class="dg148a-negw"/>
  <rect x="0" y="192" width="300" height="82" rx="8" class="dg148a-zone"/>
  <text x="10" y="208" class="dg148a-s">Bowman's space (urine)</text>
  <g class="dg148a-rep1"><circle cx="70" cy="62" r="10" class="dg148a-prot"/><line x1="65" y1="62" x2="75" y2="62" class="dg148a-negw"/></g>
  <g class="dg148a-rep2"><circle cx="140" cy="74" r="10" class="dg148a-prot"/><line x1="135" y1="74" x2="145" y2="74" class="dg148a-negw"/></g>
  <g class="dg148a-rep3"><circle cx="205" cy="60" r="10" class="dg148a-prot"/><line x1="200" y1="60" x2="210" y2="60" class="dg148a-negw"/></g>
  <line x1="262" y1="110" x2="262" y2="70" class="dg148a-arr"/>
  <polygon points="262,58 255,72 269,72" class="dg148a-hd"/>
  <text x="262" y="52" text-anchor="middle" class="dg148a-s">repelled</text>
  <text x="150" y="246" text-anchor="middle" class="dg148a-s">protein stays in the blood</text>
  </g>
  <g transform="translate(330,0)">
  <text x="150" y="16" text-anchor="middle" class="dg148a-b">Nephrotic syndrome</text>
  <rect x="0" y="26" width="300" height="92" rx="8" class="dg148a-zone"/>
  <text x="10" y="42" class="dg148a-s">Blood (plasma proteins)</text>
  <rect x="0" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="62" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="124" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="186" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="248" y="118" width="52" height="8" class="dg148a-end"/>
  <rect x="0" y="130" width="300" height="32" class="dg148a-gbm dg148a-gbmx"/>
  <text x="8" y="150" class="dg148a-s">GBM</text>
  <text x="168" y="150" text-anchor="middle" class="dg148a-s">charge barrier disrupted</text>
  <rect x="6" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="56" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="106" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="156" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="206" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="256" y="166" width="38" height="22" rx="8" class="dg148a-foot"/>
  <rect x="0" y="192" width="300" height="82" rx="8" class="dg148a-zone"/>
  <text x="10" y="208" class="dg148a-s">Bowman's space (urine)</text>
  <g><circle cx="80" cy="232" r="10" class="dg148a-prot"/><line x1="75" y1="232" x2="85" y2="232" class="dg148a-negw"/></g>
  <g><circle cx="200" cy="236" r="10" class="dg148a-prot"/><line x1="195" y1="236" x2="205" y2="236" class="dg148a-negw"/></g>
  <g class="dg148a-leak1"><circle cx="60" cy="60" r="10" class="dg148a-prot"/><line x1="55" y1="60" x2="65" y2="60" class="dg148a-negw"/></g>
  <g class="dg148a-leak2"><circle cx="140" cy="60" r="10" class="dg148a-prot"/><line x1="135" y1="60" x2="145" y2="60" class="dg148a-negw"/></g>
  <g class="dg148a-leak3"><circle cx="220" cy="60" r="10" class="dg148a-prot"/><line x1="215" y1="60" x2="225" y2="60" class="dg148a-negw"/></g>
  <line x1="272" y1="66" x2="272" y2="204" class="dg148a-arrw"/>
  <polygon points="272,218 265,204 279,204" class="dg148a-hdw"/>
  <text x="140" y="264" text-anchor="middle" class="dg148a-s">proteinuria exceeding 3.5 g daily</text>
  </g>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv148-deposit-sites"] = {
  title: "Where the deposit sits",
  caption:
    "The same capillary wall, three deposit sites. In MGN deposits sit below the podocytes and the GBM pokes through between them, so the spike is basement membrane and the dome is the deposit. " +
    "In MPGN type I deposits lie just below the endothelial cell, and in type II a ribbon-like deposit lies within the membrane and splits it. " +
    "Location, read on electron microscopy, is what separates these three (Slides 17, 20, 39-41).",
  svg: `
<svg viewBox="0 0 640 262" role="img" aria-label="Three cross-sections of the same glomerular capillary wall. In membranous nephropathy, deposits sit on the urinary side of the basement membrane under effaced foot processes, and the basement membrane grows up between them as spikes. In type I MPGN, deposits sit just below the basement membrane above the endothelium. In type II MPGN, a ribbon-like deposit lies inside the basement membrane.">
  <style>
    .dg148b-b { font-size: 13.5px; font-weight: 700; }
    .dg148b-s { font-size: 11.5px; }
    .dg148b-t { font-size: 10.5px; }
    .dg148b-tw { font-size: 10.5px; }
    .dg148b-foot { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg148b-gbm { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg148b-spike { fill: var(--dg-accent); }
    .dg148b-end { fill: var(--dg-muted); }
    .dg148b-dep { fill: var(--dg-warm); }
    .dg148b-rib { fill: none; stroke: var(--dg-warm); stroke-width: 12; stroke-linecap: round; stroke-dasharray: 200; stroke-dashoffset: 0; }
    @keyframes dg148b-k1 { 0% { opacity: 0; } 10% { opacity: 1; } 100% { opacity: 1; } }
    @keyframes dg148b-k2 { 0%, 14% { transform: translateY(24px); } 32%, 100% { transform: translateY(0); } }
    @keyframes dg148b-k3 { 0%, 38% { opacity: 0; } 48%, 100% { opacity: 1; } }
    @keyframes dg148b-k4 { 0%, 56% { stroke-dashoffset: 200; } 76%, 100% { stroke-dashoffset: 0; } }
    .dg148b-d1 { animation: dg148b-k1 9s ease-out infinite; }
    .dg148b-sp { animation: dg148b-k2 9s ease-out infinite; }
    .dg148b-d2 { animation: dg148b-k3 9s ease-out infinite; }
    .dg148b-rib { animation: dg148b-k4 9s ease-in-out infinite; }
  </style>
  <g transform="translate(8,0)">
  <text x="100" y="14" text-anchor="middle" class="dg148b-b">MGN</text>
  <text x="100" y="30" text-anchor="middle" class="dg148b-s">subepithelial deposits</text>
  <text x="4" y="48" class="dg148b-t">Urinary space</text>
  <rect x="2" y="54" width="196" height="24" rx="10" class="dg148b-foot"/>
  <text x="100" y="70" text-anchor="middle" class="dg148b-tw">Effaced foot processes</text>
  <polygon points="6,106 12,82 18,106" class="dg148b-spike dg148b-sp"/>
  <polygon points="64,106 70,82 76,106" class="dg148b-spike dg148b-sp"/>
  <polygon points="124,106 130,82 136,106" class="dg148b-spike dg148b-sp"/>
  <polygon points="182,106 188,82 194,106" class="dg148b-spike dg148b-sp"/>
  <ellipse cx="41" cy="92" rx="22" ry="11" class="dg148b-dep dg148b-d1"/>
  <ellipse cx="100" cy="92" rx="22" ry="11" class="dg148b-dep dg148b-d1"/>
  <ellipse cx="159" cy="92" rx="22" ry="11" class="dg148b-dep dg148b-d1"/>
  <rect x="2" y="100" width="196" height="46" class="dg148b-gbm"/>
  <text x="8" y="142" class="dg148b-t">GBM</text>
  <rect x="2" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="54" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="106" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="158" y="164" width="40" height="11" class="dg148b-end"/>
  <text x="4" y="192" class="dg148b-t">Capillary lumen (endothelium above)</text>
  <text x="100" y="214" text-anchor="middle" class="dg148b-s">Dome = deposit rising above GBM</text>
  <text x="100" y="230" text-anchor="middle" class="dg148b-s">Spike = GBM poking between deposits</text>
  <text x="100" y="246" text-anchor="middle" class="dg148b-s">Granular IgG, C3; not hypercellular</text>
  </g>
  <g transform="translate(220,0)">
  <text x="100" y="14" text-anchor="middle" class="dg148b-b">MPGN type I</text>
  <text x="100" y="30" text-anchor="middle" class="dg148b-s">subendothelial deposits</text>
  <text x="4" y="48" class="dg148b-t">Urinary space</text>
  <rect x="4" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="54" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="104" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="154" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="2" y="100" width="196" height="46" class="dg148b-gbm"/>
  <text x="8" y="142" class="dg148b-t">GBM</text>
  <rect x="2" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="54" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="106" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="158" y="164" width="40" height="11" class="dg148b-end"/>
  <text x="4" y="192" class="dg148b-t">Capillary lumen (endothelium above)</text>
  <text x="100" y="214" text-anchor="middle" class="dg148b-s">Just below the endothelial cell</text>
  <text x="100" y="230" text-anchor="middle" class="dg148b-s">Mesangial deposits too (not drawn)</text>
  <text x="100" y="246" text-anchor="middle" class="dg148b-s">Hepatitis C; IgG, C3, C1q, C4</text>
  <ellipse cx="41" cy="155" rx="22" ry="8" class="dg148b-dep dg148b-d2"/>
  <ellipse cx="100" cy="155" rx="22" ry="8" class="dg148b-dep dg148b-d2"/>
  <ellipse cx="159" cy="155" rx="22" ry="8" class="dg148b-dep dg148b-d2"/>
  </g>
  <g transform="translate(432,0)">
  <text x="100" y="14" text-anchor="middle" class="dg148b-b">MPGN type II</text>
  <text x="100" y="30" text-anchor="middle" class="dg148b-s">intramembranous deposits</text>
  <text x="4" y="48" class="dg148b-t">Urinary space</text>
  <rect x="4" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="54" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="104" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="154" y="54" width="40" height="24" rx="9" class="dg148b-foot"/>
  <rect x="2" y="100" width="196" height="46" class="dg148b-gbm"/>
  <text x="8" y="142" class="dg148b-t">GBM</text>
  <rect x="2" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="54" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="106" y="164" width="40" height="11" class="dg148b-end"/>
  <rect x="158" y="164" width="40" height="11" class="dg148b-end"/>
  <text x="4" y="192" class="dg148b-t">Capillary lumen (endothelium above)</text>
  <text x="100" y="214" text-anchor="middle" class="dg148b-s">Ribbon-like, splits the membrane</text>
  <text x="100" y="230" text-anchor="middle" class="dg148b-s">C3 nephritic factor</text>
  <text x="100" y="246" text-anchor="middle" class="dg148b-s">C3 and properdin; no IgG usually</text>
  <path d="M14,123 C44,112 70,134 100,123 S156,112 186,123" class="dg148b-rib"/>
  </g>
</svg>`,
};

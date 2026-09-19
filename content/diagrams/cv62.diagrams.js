window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv62 - Lipid Metabolism Part 2: Lipoproteins (D. Zhang, PhD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv62-chylomicron-journey"] = {
  title: "A chylomicron's life, gut to liver",
  caption:
    "Enterocytes rebuild triglyceride from 2-monoacylglycerol and fatty acids, and <strong>MTP</strong> loads it onto " +
    "<strong>apoB-48</strong>. The nascent chylomicron leaves through the <strong>lymph and thoracic duct</strong>, then borrows " +
    "<strong>apoC-II and apoE from HDL</strong>. At the capillary wall, apoC-II switches on <strong>lipoprotein lipase</strong>, and " +
    "fatty acids drop into adipose and muscle. The particle shrinks but gets denser, becoming a <strong>remnant</strong>. ApoC-II goes back to HDL, " +
    "and the remnant uses <strong>apoE</strong> to dock on the hepatocyte receptor for endocytosis and lysosomal digestion (Slides 13-18).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left to right: an intestinal cell makes triglyceride and loads it onto apoB-48 with MTP; the nascent chylomicron travels through lymph and the thoracic duct into blood; an HDL particle donates apoC-II and apoE to make a mature chylomicron; at the capillary wall lipoprotein lipase releases fatty acids into adipose and muscle, leaving a smaller, denser chylomicron remnant; apoC-II returns to HDL; the remnant binds the apoE receptor on a hepatocyte and is taken in by endocytosis to lysosomes.">
  <style>
    .dg62a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg62a-hdr   { font-size: 12px; font-weight: 700; }
    .dg62a-lbl   { font-size: 10.5px; }
    .dg62a-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg62a-link  { stroke: var(--dg-ink); stroke-width: 1.6; fill: none; opacity: .55; }
    .dg62a-dash  { stroke: var(--dg-warm); stroke-width: 1.4; fill: none; stroke-dasharray: 4 4; }
    .dg62a-core  { fill: var(--dg-warm); opacity: .22; stroke: var(--dg-warm); stroke-width: 1.8; }
    .dg62a-hdl   { fill: var(--dg-cool); opacity: .2; stroke: var(--dg-cool); stroke-width: 1.8; }
    .dg62a-c2    { fill: var(--dg-warm); }
    .dg62a-e     { fill: var(--dg-good); }
    .dg62a-b48   { fill: var(--dg-accent); }
    .dg62a-wall  { stroke: var(--dg-ink); stroke-width: 2.5; stroke-dasharray: 7 5; opacity: .7; }
    .dg62a-lpl   { fill: var(--dg-accent); opacity: .85; }
    .dg62a-fa    { fill: var(--dg-warm); }
    .dg62a-rcpt  { fill: var(--dg-good); }
    .dg62a-s1 { animation: dg62aGlow 8s ease-in-out infinite; }
    .dg62a-s2 { animation: dg62aGlow 8s ease-in-out infinite 2s; }
    .dg62a-s3 { animation: dg62aGlow 8s ease-in-out infinite 4s; }
    .dg62a-s4 { animation: dg62aGlow 8s ease-in-out infinite 6s; }
    @keyframes dg62aGlow { 0%,100% { opacity: .55 } 12%,22% { opacity: 1 } }
    .dg62a-hop  { animation: dg62aHop 8s ease-in-out infinite; }
    @keyframes dg62aHop { 0%,20% { transform: translate(-6px,-88px); opacity: 0 } 24% { opacity: 1 } 40%,100% { transform: translate(0,0); opacity: 1 } }
    .dg62a-drop1 { animation: dg62aDrop 2.6s linear infinite; }
    .dg62a-drop2 { animation: dg62aDrop 2.6s linear infinite .9s; }
    .dg62a-drop3 { animation: dg62aDrop 2.6s linear infinite 1.7s; }
    @keyframes dg62aDrop { 0% { transform: translateY(-22px); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(20px); opacity: 0 } }
    .dg62a-back { animation: dg62aBack 8s ease-in-out infinite; }
    @keyframes dg62aBack { 0%,50% { transform: translate(114px,70px); opacity: 0 } 56% { opacity: 1 } 75%,100% { transform: translate(0,0); opacity: 1 } }
    .dg62a-dock { animation: dg62aDock 8s ease-in-out infinite; }
    @keyframes dg62aDock { 0%,60% { transform: translateX(-34px) } 80%,100% { transform: translateX(0) } }
  </style>

  <rect x="10" y="92" width="118" height="116" rx="12" class="dg62a-box"/>
  <text x="22" y="112" class="dg62a-hdr">Enterocyte</text>
  <text x="22" y="132" class="dg62a-lbl">2-MG + FA</text>
  <text x="22" y="147" class="dg62a-lbl">re-made into TG</text>
  <text x="22" y="167" class="dg62a-lbl">MTP loads TG</text>
  <text x="22" y="182" class="dg62a-lbl">onto apoB-48</text>
  <text x="22" y="200" class="dg62a-sub">dietary lipid</text>

  <line x1="130" y1="150" x2="168" y2="150" class="dg62a-link"/>
  <polygon points="168,144 178,150 168,156" fill="var(--dg-ink)" opacity=".55"/>
  <text x="132" y="240" class="dg62a-sub">lymph, then</text>
  <text x="132" y="253" class="dg62a-sub">thoracic duct</text>

  <g class="dg62a-s1">
    <circle cx="206" cy="150" r="26" class="dg62a-core"/>
    <circle cx="206" cy="124" r="4" class="dg62a-b48"/>
    <text x="180" y="196" class="dg62a-lbl" font-weight="700">nascent</text>
  </g>

  <circle cx="300" cy="50" r="15" class="dg62a-hdl"/>
  <text x="279" y="47" class="dg62a-lbl" font-weight="700" text-anchor="end">HDL</text>
  <text x="279" y="60" class="dg62a-sub" text-anchor="end">lends apoC-II + apoE</text>

  <line x1="234" y1="150" x2="262" y2="150" class="dg62a-link"/>
  <polygon points="262,144 272,150 262,156" fill="var(--dg-ink)" opacity=".55"/>

  <g class="dg62a-s2">
    <circle cx="302" cy="150" r="27" class="dg62a-core"/>
    <circle cx="302" cy="123" r="4" class="dg62a-b48"/>
    <text x="276" y="196" class="dg62a-lbl" font-weight="700">mature</text>
  </g>
  <g class="dg62a-hop">
    <circle cx="288" cy="130" r="5" class="dg62a-c2"/>
    <circle cx="318" cy="131" r="5" class="dg62a-e"/>
  </g>

  <line x1="262" y1="222" x2="470" y2="222" class="dg62a-wall"/>
  <rect x="340" y="216" width="22" height="12" rx="3" class="dg62a-lpl"/>
  <rect x="376" y="216" width="22" height="12" rx="3" class="dg62a-lpl"/>
  <text x="346" y="210" class="dg62a-lbl" font-weight="700">LPL</text>
  <text x="404" y="240" class="dg62a-sub">capillary wall</text>
  <circle cx="354" cy="252" r="3.5" class="dg62a-fa dg62a-drop1"/>
  <circle cx="372" cy="252" r="3.5" class="dg62a-fa dg62a-drop2"/>
  <circle cx="390" cy="252" r="3.5" class="dg62a-fa dg62a-drop3"/>
  <text x="300" y="290" class="dg62a-sub">fatty acids into adipose and muscle</text>

  <line x1="331" y1="150" x2="398" y2="150" class="dg62a-link"/>
  <polygon points="398,144 408,150 398,156" fill="var(--dg-ink)" opacity=".55"/>

  <path d="M 432 130 C 430 80, 380 62, 316 58" class="dg62a-dash"/>
  <text x="442" y="92" class="dg62a-sub">apoC-II</text>
  <text x="442" y="104" class="dg62a-sub">returns to HDL</text>
  <circle cx="318" cy="60" r="4" class="dg62a-c2 dg62a-back"/>

  <g class="dg62a-s3">
    <g class="dg62a-dock">
      <circle cx="446" cy="150" r="16" class="dg62a-core"/>
      <circle cx="462" cy="150" r="5" class="dg62a-e"/>
    </g>
    <text x="416" y="186" class="dg62a-lbl" font-weight="700">remnant</text>
    <text x="410" y="199" class="dg62a-sub">smaller, denser</text>
  </g>

  <g class="dg62a-s4">
    <rect x="476" y="92" width="154" height="116" rx="12" class="dg62a-box"/>
    <text x="492" y="112" class="dg62a-hdr">Hepatocyte</text>
    <rect x="470" y="143" width="10" height="14" rx="2" class="dg62a-rcpt"/>
    <text x="492" y="140" class="dg62a-lbl">apoE receptor</text>
    <text x="492" y="160" class="dg62a-lbl">endocytosis</text>
    <text x="492" y="180" class="dg62a-lbl">to lysosomes,</text>
    <text x="492" y="195" class="dg62a-sub">contents reused</text>
  </g>

  <circle cx="30" cy="30" r="4" class="dg62a-c2"/>
  <text x="40" y="34" class="dg62a-sub">apoC-II</text>
  <circle cx="92" cy="30" r="4" class="dg62a-e"/>
  <text x="102" y="34" class="dg62a-sub">apoE</text>
  <circle cx="140" cy="30" r="4" class="dg62a-b48"/>
  <text x="150" y="34" class="dg62a-sub">apoB-48</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv62-reverse-cholesterol-transport"] = {
  title: "Reverse cholesterol transport",
  caption:
    "Four steps return cholesterol from peripheral cells to the liver (Slides 28-31). <strong>ABCA1</strong> flips cholesterol from the " +
    "inner to the outer membrane leaflet, and the disk-shaped, phospholipid-rich <strong>nascent HDL</strong> picks it up. " +
    "<strong>LCAT</strong>, activated by apoA-I, adds a fatty acid from lecithin, trapping it as <strong>cholesterol ester</strong> " +
    "in a now globular HDL. <strong>CETP</strong> passes some cholesterol ester to VLDL in exchange for triglyceride. The rest reaches the " +
    "hepatocyte through <strong>SR-B1</strong> with <strong>no endocytosis</strong>, and the HDL particle goes back into the circulation.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left: a peripheral cell membrane where ABCA1 flips cholesterol from the inner to the outer leaflet. Center: a disk-shaped nascent HDL collects the cholesterol, and LCAT activated by apoA-I converts it to cholesterol ester inside a globular mature HDL. Above, CETP moves cholesterol ester from HDL to VLDL while triglyceride moves from VLDL to HDL. Right: HDL binds the SR-B1 receptor on a hepatocyte; cholesterol ester passes into the cell without endocytosis and the HDL particle leaves to re-enter the circulation.">
  <style>
    .dg62b-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg62b-hdr   { font-size: 12px; font-weight: 700; }
    .dg62b-lbl   { font-size: 10.5px; }
    .dg62b-sub   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg62b-leaf  { stroke: var(--dg-ink); stroke-width: 2; opacity: .6; }
    .dg62b-abc   { fill: var(--dg-accent); opacity: .85; }
    .dg62b-chol  { fill: var(--dg-warm); }
    .dg62b-ce    { fill: var(--dg-good); }
    .dg62b-tg    { fill: var(--dg-cool); }
    .dg62b-hdl   { fill: var(--dg-cool); opacity: .18; stroke: var(--dg-cool); stroke-width: 1.8; }
    .dg62b-vldl  { fill: var(--dg-warm); opacity: .16; stroke: var(--dg-warm); stroke-width: 1.8; }
    .dg62b-link  { stroke: var(--dg-ink); stroke-width: 1.6; fill: none; opacity: .55; }
    .dg62b-rcpt  { fill: var(--dg-good); }
    .dg62b-flip  { animation: dg62bFlip 6s ease-in-out infinite; }
    @keyframes dg62bFlip { 0%,15% { transform: translateX(-30px) } 45%,100% { transform: translateX(0) } }
    .dg62b-load  { animation: dg62bLoad 6s ease-in-out infinite; }
    @keyframes dg62bLoad { 0%,40% { transform: translateX(-46px); opacity: 0 } 50% { opacity: 1 } 70%,100% { transform: translateX(0); opacity: 1 } }
    .dg62b-up    { animation: dg62bUp 4s ease-in-out infinite; }
    @keyframes dg62bUp { 0%,15% { transform: translateY(58px); opacity: 0 } 25% { opacity: 1 } 70%,100% { transform: translateY(0); opacity: 1 } }
    .dg62b-down  { animation: dg62bDown 4s ease-in-out infinite; }
    @keyframes dg62bDown { 0%,15% { transform: translateY(-58px); opacity: 0 } 25% { opacity: 1 } 70%,100% { transform: translateY(0); opacity: 1 } }
    .dg62b-in    { animation: dg62bIn 5s linear infinite; }
    .dg62b-in2   { animation: dg62bIn 5s linear infinite 1.6s; }
    @keyframes dg62bIn { 0% { transform: translateX(-40px); opacity: 0 } 20% { opacity: 1 } 80% { opacity: 1 } 100% { transform: translateX(20px); opacity: 0 } }
    .dg62b-leave { animation: dg62bLeave 5s ease-in-out infinite; }
    @keyframes dg62bLeave { 0%,50% { transform: translate(0,0); opacity: .9 } 90%,100% { transform: translate(-18px,50px); opacity: .25 } }
  </style>

  <rect x="10" y="80" width="58" height="150" rx="10" class="dg62b-box"/>
  <text x="14" y="72" class="dg62b-hdr">Peripheral cell</text>
  <line x1="74" y1="80" x2="74" y2="230" class="dg62b-leaf"/>
  <line x1="86" y1="80" x2="86" y2="230" class="dg62b-leaf"/>
  <rect x="70" y="138" width="20" height="30" rx="4" class="dg62b-abc"/>
  <text x="46" y="255" class="dg62b-lbl" font-weight="700">ABCA1</text>
  <text x="18" y="270" class="dg62b-sub">flips inner to outer leaflet</text>
  <circle cx="100" cy="153" r="5" class="dg62b-chol dg62b-flip"/>

  <ellipse cx="160" cy="153" rx="30" ry="11" class="dg62b-hdl"/>
  <circle cx="160" cy="153" r="4.5" class="dg62b-chol dg62b-load"/>
  <text x="124" y="185" class="dg62b-lbl" font-weight="700">nascent HDL</text>
  <text x="124" y="198" class="dg62b-sub">disk, phospholipid-rich</text>

  <line x1="194" y1="153" x2="246" y2="153" class="dg62b-link"/>
  <polygon points="246,147 256,153 246,159" fill="var(--dg-ink)" opacity=".55"/>
  <text x="200" y="224" class="dg62b-lbl" font-weight="700">LCAT</text>
  <text x="200" y="237" class="dg62b-sub">apoA-I activates;</text>
  <text x="200" y="249" class="dg62b-sub">FA from lecithin</text>
  <text x="200" y="261" class="dg62b-sub">traps cholesterol ester</text>

  <circle cx="296" cy="153" r="28" class="dg62b-hdl"/>
  <circle cx="288" cy="148" r="4.5" class="dg62b-ce"/>
  <circle cx="302" cy="160" r="4.5" class="dg62b-ce"/>
  <text x="276" y="198" class="dg62b-lbl" font-weight="700">HDL3 / HDL2</text>
  <text x="276" y="211" class="dg62b-sub">globular</text>

  <circle cx="296" cy="52" r="26" class="dg62b-vldl"/>
  <text x="330" y="44" class="dg62b-lbl" font-weight="700">VLDL</text>
  <text x="330" y="58" class="dg62b-sub">CETP swap:</text>
  <text x="330" y="70" class="dg62b-sub">CE up, TG down</text>
  <line x1="286" y1="80" x2="286" y2="124" class="dg62b-link"/>
  <line x1="306" y1="80" x2="306" y2="124" class="dg62b-link"/>
  <circle cx="286" cy="62" r="4.5" class="dg62b-ce dg62b-up"/>
  <circle cx="306" cy="140" r="4.5" class="dg62b-tg dg62b-down"/>

  <line x1="328" y1="153" x2="400" y2="153" class="dg62b-link"/>
  <polygon points="400,147 410,153 400,159" fill="var(--dg-ink)" opacity=".55"/>

  <g class="dg62b-leave">
    <circle cx="432" cy="153" r="20" class="dg62b-hdl"/>
  </g>
  <text x="392" y="240" class="dg62b-sub">HDL dissociates,</text>
  <text x="392" y="252" class="dg62b-sub">re-enters circulation</text>

  <rect x="468" y="80" width="162" height="150" rx="12" class="dg62b-box"/>
  <text x="484" y="72" class="dg62b-hdr">Hepatocyte</text>
  <rect x="460" y="143" width="10" height="20" rx="2" class="dg62b-rcpt"/>
  <text x="484" y="118" class="dg62b-lbl" font-weight="700">SR-B1</text>
  <text x="484" y="132" class="dg62b-sub">scavenger receptor</text>
  <circle cx="500" cy="153" r="4.5" class="dg62b-ce dg62b-in"/>
  <circle cx="500" cy="153" r="4.5" class="dg62b-ce dg62b-in2"/>
  <text x="484" y="190" class="dg62b-lbl">C and CE enter</text>
  <text x="484" y="205" class="dg62b-lbl" font-weight="700">no endocytosis</text>
  <text x="484" y="220" class="dg62b-sub">unlike the LDL receptor</text>

  <circle cx="440" cy="276" r="4" class="dg62b-chol"/>
  <text x="450" y="280" class="dg62b-sub">cholesterol</text>
  <circle cx="512" cy="276" r="4" class="dg62b-ce"/>
  <text x="522" y="280" class="dg62b-sub">CE</text>
  <circle cx="552" cy="276" r="4" class="dg62b-tg"/>
  <text x="562" y="280" class="dg62b-sub">TG</text>
</svg>`
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv132-lobar-stages"] = {
  title: "Natural history of lobar pneumonia",
  caption: "A schematic, not a lecture image: one alveolus at each stage, with the panel lighting up as the day marker moves. Edema with few neutrophils and bacteria comes first, then a massive exudate of neutrophils and red cells, then disintegrated red cells with neutrophils and fibrin strands, and last macrophages clearing the exudate (Slides 7-9). Fibrin is left out of the red hepatization panel on purpose: Slide 7 lists it there, but Slide 8 says fibrin nets have not yet formed.",
  svg: `<svg viewBox="0 0 640 306" role="img" aria-label="Four alveoli in a row show the stages of lobar pneumonia. Congestion at days 1 to 2 has edema fluid with few neutrophils and bacteria. Red hepatization at days 3 to 4 is packed with neutrophils and red cells. Gray hepatization at days 5 to 7 has neutrophils, disintegrated red cells and fibrin strands. Resolution from day 8 shows macrophages clearing debris.">
  <style>
    .dg132a-hd { font-size: 13px; font-weight: 700; }
    .dg132a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg132a-lbl { font-size: 11px; }
    .dg132a-fr { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg132a-hl { fill: none; stroke: var(--dg-accent); stroke-width: 2.5; opacity: 0; }
    .dg132a-wall { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg132a-cap { fill: none; stroke: var(--dg-warm); stroke-width: 5; stroke-dasharray: 9 6; opacity: .75; }
    .dg132a-capq { fill: none; stroke: var(--dg-line); stroke-width: 3; stroke-dasharray: 9 6; }
    .dg132a-edema { fill: var(--dg-cool); opacity: .16; }
    .dg132a-exu { fill: var(--dg-muted); opacity: .22; }
    .dg132a-neu circle { fill: var(--dg-accent); }
    .dg132a-rbc circle { fill: var(--dg-warm); }
    .dg132a-lys circle { fill: none; stroke: var(--dg-warm); stroke-width: 1.3; stroke-dasharray: 2 2; }
    .dg132a-bac rect { fill: var(--dg-ink); }
    .dg132a-fib line { stroke: var(--dg-ink); stroke-width: 1.1; opacity: .65; }
    .dg132a-mac circle { fill: var(--dg-good); opacity: .8; }
    .dg132a-deb circle { fill: var(--dg-muted); }
    .dg132a-bar { stroke: var(--dg-line); stroke-width: 3; stroke-linecap: round; }
    .dg132a-tick { fill: var(--dg-line); }
    .dg132a-dot { fill: var(--dg-accent); animation: dg132atime 14s ease-in-out infinite; }
    .dg132a-h1 { animation: dg132ah1 14s linear infinite; }
    .dg132a-h2 { animation: dg132ah2 14s linear infinite; }
    .dg132a-h3 { animation: dg132ah3 14s linear infinite; }
    .dg132a-h4 { animation: dg132ah4 14s linear infinite; }
    .dg132a-s2 { animation: dg132as2 14s linear infinite; }
    .dg132a-s3 { animation: dg132as3 14s linear infinite; }
    .dg132a-s4 { animation: dg132as4 14s linear infinite; }
    .dg132a-lk1 { fill: var(--dg-accent); }
    .dg132a-lk2 { fill: var(--dg-warm); }
    .dg132a-lk3 { fill: none; stroke: var(--dg-warm); stroke-width: 1.3; stroke-dasharray: 2 2; }
    .dg132a-lk4 { stroke: var(--dg-ink); stroke-width: 1.3; }
    .dg132a-lk5 { fill: var(--dg-ink); }
    .dg132a-lk6 { fill: var(--dg-good); opacity: .8; }
    .dg132a-lk7 { fill: var(--dg-cool); opacity: .25; }
    .dg132a-lk8 { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 5 3; opacity: .75; }
    @keyframes dg132atime { 0%,20% { transform: translateX(-450px) } 25%,45% { transform: translateX(-300px) } 50%,70% { transform: translateX(-150px) } 75%,100% { transform: translateX(0) } }
    @keyframes dg132ah1 { 0%,21% { opacity: 1 } 25%,100% { opacity: 0 } }
    @keyframes dg132ah2 { 0%,21% { opacity: 0 } 25%,46% { opacity: 1 } 50%,100% { opacity: 0 } }
    @keyframes dg132ah3 { 0%,46% { opacity: 0 } 50%,71% { opacity: 1 } 75%,100% { opacity: 0 } }
    @keyframes dg132ah4 { 0%,71% { opacity: 0 } 75%,100% { opacity: 1 } }
    @keyframes dg132as2 { 0%,21% { opacity: .1 } 27%,100% { opacity: 1 } }
    @keyframes dg132as3 { 0%,46% { opacity: .1 } 52%,100% { opacity: 1 } }
    @keyframes dg132as4 { 0%,71% { opacity: .1 } 77%,100% { opacity: 1 } }
  </style>

  <text x="95" y="18" text-anchor="middle" class="dg132a-hd">Congestion</text><text x="95" y="34" text-anchor="middle" class="dg132a-sub">Days 1-2</text><text x="245" y="18" text-anchor="middle" class="dg132a-hd">Red hepatization</text><text x="245" y="34" text-anchor="middle" class="dg132a-sub">Days 3-4</text><text x="395" y="18" text-anchor="middle" class="dg132a-hd">Gray hepatization</text><text x="395" y="34" text-anchor="middle" class="dg132a-sub">Days 5-7</text><text x="545" y="18" text-anchor="middle" class="dg132a-hd">Resolution</text><text x="545" y="34" text-anchor="middle" class="dg132a-sub">Day 8 onward</text>
  <rect x="25" y="44" width="140" height="158" rx="10" class="dg132a-fr"/><rect x="25" y="44" width="140" height="158" rx="10" class="dg132a-hl dg132a-h1"/><rect x="175" y="44" width="140" height="158" rx="10" class="dg132a-fr"/><rect x="175" y="44" width="140" height="158" rx="10" class="dg132a-hl dg132a-h2"/><rect x="325" y="44" width="140" height="158" rx="10" class="dg132a-fr"/><rect x="325" y="44" width="140" height="158" rx="10" class="dg132a-hl dg132a-h3"/><rect x="475" y="44" width="140" height="158" rx="10" class="dg132a-fr"/><rect x="475" y="44" width="140" height="158" rx="10" class="dg132a-hl dg132a-h4"/>
  <circle cx="95" cy="118" r="59" class="dg132a-cap"/><circle cx="95" cy="118" r="52" class="dg132a-wall"/><circle cx="245" cy="118" r="59" class="dg132a-cap"/><circle cx="245" cy="118" r="52" class="dg132a-wall"/><circle cx="395" cy="118" r="59" class="dg132a-capq"/><circle cx="395" cy="118" r="52" class="dg132a-wall"/><circle cx="545" cy="118" r="59" class="dg132a-capq"/><circle cx="545" cy="118" r="52" class="dg132a-wall"/>
  <g><circle cx="95" cy="118" r="51" class="dg132a-edema"/><g class="dg132a-neu"><circle cx="121.3" cy="147.6" r="5"/><circle cx="96.9" cy="96.4" r="5"/><circle cx="66.2" cy="118.8" r="5"/></g><g class="dg132a-bac"><rect x="68.9" y="85.4" width="8" height="3" rx="1.5" transform="rotate(0 72.9 86.9)"/><rect x="97.0" y="120.5" width="8" height="3" rx="1.5" transform="rotate(47 101.0 122.0)"/><rect x="96.6" y="157.9" width="8" height="3" rx="1.5" transform="rotate(94 100.6 159.4)"/><rect x="122.2" y="121.5" width="8" height="3" rx="1.5" transform="rotate(141 126.2 123.0)"/></g></g>
  <g class="dg132a-s2"><circle cx="245" cy="118" r="51" class="dg132a-exu"/><g class="dg132a-neu"><circle cx="285.3" cy="106.6" r="5"/><circle cx="256.7" cy="122.4" r="5"/><circle cx="263.9" cy="86.3" r="5"/><circle cx="233.5" cy="97.1" r="5"/><circle cx="218.7" cy="97.3" r="5"/><circle cx="230.1" cy="109.6" r="5"/><circle cx="220.5" cy="129.4" r="5"/><circle cx="237.8" cy="75.7" r="5"/><circle cx="215.4" cy="145.8" r="5"/><circle cx="213.2" cy="112.8" r="5"/></g><g class="dg132a-rbc"><circle cx="245.6" cy="124.6" r="4"/><circle cx="237.8" cy="132.2" r="4"/><circle cx="202.1" cy="115.2" r="4"/><circle cx="275.1" cy="94.2" r="4"/><circle cx="248.1" cy="79.9" r="4"/><circle cx="207.4" cy="101.0" r="4"/><circle cx="240.1" cy="88.4" r="4"/><circle cx="249.3" cy="142.1" r="4"/><circle cx="263.6" cy="105.8" r="4"/><circle cx="244.7" cy="107.6" r="4"/><circle cx="250.9" cy="157.8" r="4"/><circle cx="269.4" cy="137.2" r="4"/><circle cx="270.4" cy="123.1" r="4"/></g><g class="dg132a-bac"><rect x="257.6" y="147.6" width="8" height="3" rx="1.5" transform="rotate(0 261.6 149.1)"/><rect x="277.4" y="137.4" width="8" height="3" rx="1.5" transform="rotate(47 281.4 138.9)"/><rect x="277.3" y="122.3" width="8" height="3" rx="1.5" transform="rotate(94 281.3 123.8)"/></g></g>
  <g class="dg132a-s3"><circle cx="395" cy="118" r="51" class="dg132a-exu"/><g class="dg132a-fib"><line x1="362.0" y1="85.9" x2="428.2" y2="149.9"/><line x1="407.9" y1="73.8" x2="367.6" y2="154.9"/><line x1="392.1" y1="72.1" x2="383.4" y2="162.5"/><line x1="440.2" y1="126.3" x2="351.4" y2="132.5"/><line x1="438.1" y1="102.0" x2="355.3" y2="141.2"/><line x1="432.4" y1="91.2" x2="403.7" y2="163.2"/><line x1="349.9" y1="126.9" x2="416.2" y2="77.2"/><line x1="350.7" y1="105.5" x2="441.0" y2="116.5"/><line x1="440.8" y1="121.8" x2="365.3" y2="153.1"/></g><g class="dg132a-neu"><circle cx="397.4" cy="149.6" r="5"/><circle cx="372.1" cy="142.4" r="5"/><circle cx="387.3" cy="110.2" r="5"/><circle cx="434.2" cy="121.3" r="5"/><circle cx="393.8" cy="138.8" r="5"/><circle cx="424.5" cy="117.2" r="5"/><circle cx="410.3" cy="92.6" r="5"/><circle cx="368.5" cy="88.0" r="5"/><circle cx="358.4" cy="112.6" r="5"/><circle cx="396.7" cy="85.0" r="5"/><circle cx="392.6" cy="125.2" r="5"/><circle cx="387.2" cy="78.5" r="5"/><circle cx="355.9" cy="132.2" r="5"/><circle cx="404.7" cy="108.7" r="5"/><circle cx="408.2" cy="133.1" r="5"/></g><g class="dg132a-lys"><circle cx="378.5" cy="101.1" r="4"/><circle cx="368.3" cy="116.8" r="4"/><circle cx="359.7" cy="97.4" r="4"/><circle cx="421.5" cy="84.4" r="4"/><circle cx="421.8" cy="99.7" r="4"/><circle cx="390.5" cy="98.8" r="4"/><circle cx="427.7" cy="138.3" r="4"/></g></g>
  <g class="dg132a-s4"><g class="dg132a-mac"><circle cx="546.0" cy="128.9" r="11"/><circle cx="571.5" cy="103.0" r="11"/><circle cx="541.4" cy="86.8" r="11"/><circle cx="513.8" cy="109.6" r="11"/></g><g class="dg132a-deb"><circle cx="555.5" cy="80.5" r="2.2"/><circle cx="580.0" cy="118.1" r="2.2"/><circle cx="508.2" cy="125.0" r="2.2"/><circle cx="518.6" cy="145.0" r="2.2"/><circle cx="539.5" cy="156.1" r="2.2"/><circle cx="556.2" cy="148.0" r="2.2"/><circle cx="552.5" cy="97.2" r="2.2"/><circle cx="577.1" cy="139.2" r="2.2"/></g></g>
  <text x="95" y="193" text-anchor="middle" class="dg132a-lbl">Heavy, boggy, red</text><text x="245" y="193" text-anchor="middle" class="dg132a-lbl">Red-brown, liver-like</text><text x="395" y="193" text-anchor="middle" class="dg132a-lbl">Uniformly gray, airless</text><text x="545" y="193" text-anchor="middle" class="dg132a-lbl">Macrophages clear exudate</text>
  <line x1="95" y1="224" x2="545" y2="224" class="dg132a-bar"/><circle cx="95" cy="224" r="3.5" class="dg132a-tick"/><circle cx="245" cy="224" r="3.5" class="dg132a-tick"/><circle cx="395" cy="224" r="3.5" class="dg132a-tick"/><circle cx="545" cy="224" r="3.5" class="dg132a-tick"/><circle cx="545" cy="224" r="7" class="dg132a-dot"/><text x="95" y="244" text-anchor="middle" class="dg132a-sub">Onset</text><text x="545" y="244" text-anchor="middle" class="dg132a-sub">Over a week later</text>
  <circle cx="34" cy="262" r="5" class="dg132a-lk1"/><text x="44" y="266" class="dg132a-lbl">Neutrophil</text><circle cx="124" cy="262" r="4" class="dg132a-lk2"/><text x="134" y="266" class="dg132a-lbl">Red cell</text><circle cx="198" cy="262" r="4" class="dg132a-lk3"/><text x="208" y="266" class="dg132a-lbl">Disintegrated red cell</text><line x1="344" y1="257" x2="362" y2="267" class="dg132a-lk4"/><text x="368" y="266" class="dg132a-lbl">Fibrin strand</text><rect x="458" y="260.5" width="10" height="3" rx="1.5" class="dg132a-lk5"/><text x="474" y="266" class="dg132a-lbl">Bacteria</text><circle cx="540" cy="262" r="7" class="dg132a-lk6"/><text x="552" y="266" class="dg132a-lbl">Macrophage</text><circle cx="34" cy="288" r="7" class="dg132a-lk7"/><text x="48" y="292" class="dg132a-lbl">Edema fluid</text><circle cx="150" cy="288" r="7" class="dg132a-lk8"/><text x="164" y="292" class="dg132a-lbl">Engorged capillary ring (early stages)</text>
</svg>`
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv155-ati-obstruction"] = {
  title: "Sloughed cells plug the tubule",
  caption: "A schematic, not a lecture image. An injured tubular cell detaches from its basement membrane and joins a cast that blocks the lumen, so pressure builds upstream and little filtrate passes on. Filtrate also leaks back into the interstitium, causing edema. Raised intratubular pressure and vasoconstriction from excess distal sodium both lower GFR, while obstruction and back-leak lower urine output (Slide 5).",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A kidney tubule drawn left to right with filtrate entering from the glomerulus. An injured epithelial cell detaches from the wall and travels to a cast that blocks the lumen. Pressure rises in the tubule upstream of the cast, little filtrate passes beyond it, and filtrate leaks down through the wall into the interstitium. Two boxes below list the results: decreased GFR from raised intratubular pressure and from vasoconstriction caused by excess distal sodium after Na,K-ATPase redistribution, and decreased urine output from obstruction and back-leak.">
  <style>
    .dg155a-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg155a-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg155a-gap { fill: none; stroke: var(--dg-warm); stroke-width: 1.4; stroke-dasharray: 3 3; }
    .dg155a-glom { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg155a-cast { fill: var(--dg-accent); opacity: .85; }
    .dg155a-press { fill: var(--dg-warm); opacity: .22; animation: dg155apress 3s ease-in-out infinite; }
    .dg155a-drop { fill: var(--dg-cool); }
    .dg155a-faint { fill: var(--dg-cool); opacity: .35; }
    .dg155a-inter { fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 6 5; }
    .dg155a-leak { stroke: var(--dg-cool); stroke-width: 2; stroke-dasharray: 4 4; animation: dg155adash 1.2s linear infinite; }
    .dg155a-box { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg155a-hd { font-size: 13px; font-weight: 700; }
    .dg155a-lbl { font-size: 11px; }
    .dg155a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg155a-warm { fill: var(--dg-warm); font-weight: 700; }
    .dg155a-slough { animation: dg155aslough 4s ease-in-out infinite; }
    .dg155a-flow { animation: dg155aflow 2s linear infinite; }
    .dg155a-trickle { animation: dg155aflow 4s linear infinite; }
    .dg155a-seep { animation: dg155aseep 2.4s ease-in infinite; }
    @keyframes dg155apress { 0%,100% { opacity: .12 } 50% { opacity: .38 } }
    @keyframes dg155aslough { 0% { transform: translate(-66px,-26px); opacity: 1 } 15% { transform: translate(-60px,-10px); opacity: 1 } 80% { transform: translate(52px,0); opacity: 1 } 100% { transform: translate(58px,0); opacity: 0 } }
    @keyframes dg155aflow { 0% { transform: translateX(0); opacity: 0 } 20% { opacity: 1 } 80% { opacity: 1 } 100% { transform: translateX(56px); opacity: 0 } }
    @keyframes dg155aseep { 0% { transform: translateY(-26px); opacity: 0 } 30% { opacity: 1 } 100% { transform: translateY(10px); opacity: 0 } }
    @keyframes dg155adash { to { stroke-dashoffset: -16 } }
  </style>

  <text x="20" y="20" class="dg155a-hd">Injured tubule, filtrate flowing left to right</text>

  <circle cx="30" cy="100" r="18" class="dg155a-glom"/>
  <line x1="48" y1="100" x2="60" y2="100" stroke="var(--dg-ink)" stroke-width="1.5"/>
  <text x="30" y="134" text-anchor="middle" font-size="10" style="fill: var(--dg-muted)">Glomerulus</text>

  <rect x="60" y="60" width="550" height="80" rx="12" class="dg155a-lumen"/>
  <rect x="72" y="74" width="306" height="52" class="dg155a-press"/>

  <rect x="66" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="94" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="122" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="150" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="178" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="206" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="234" y="62" width="24" height="12" class="dg155a-gap"/>
  <rect x="262" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="290" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="318" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="346" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="430" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="458" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="486" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="514" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="542" y="62" width="24" height="12" class="dg155a-cell"/>
  <rect x="570" y="62" width="24" height="12" class="dg155a-cell"/>

  <rect x="66" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="94" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="122" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="150" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="178" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="206" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="234" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="262" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="290" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="318" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="346" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="430" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="458" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="486" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="514" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="542" y="126" width="24" height="12" class="dg155a-cell"/>
  <rect x="570" y="126" width="24" height="12" class="dg155a-cell"/>

  <rect x="378" y="64" width="48" height="72" rx="9" class="dg155a-cast"/>
  <text x="402" y="104" text-anchor="middle" font-size="11" font-weight="700" style="fill: var(--dg-surface)">Cast</text>

  <g class="dg155a-slough"><rect x="300" y="88" width="24" height="12" class="dg155a-cell"/></g>

  <text x="246" y="52" text-anchor="middle" class="dg155a-lbl">Cell detaches</text>
  <text x="402" y="52" text-anchor="middle" class="dg155a-lbl">Cast blocks the lumen</text>
  <text x="530" y="52" text-anchor="middle" class="dg155a-lbl">Little filtrate passes</text>
  <text x="150" y="96" text-anchor="middle" class="dg155a-lbl dg155a-warm">Intratubular pressure rises</text>

  <g class="dg155a-flow">
    <circle cx="90" cy="114" r="3.5" class="dg155a-drop"/>
    <circle cx="150" cy="110" r="3.5" class="dg155a-drop"/>
    <circle cx="210" cy="116" r="3.5" class="dg155a-drop"/>
    <circle cx="270" cy="112" r="3.5" class="dg155a-drop"/>
  </g>
  <g class="dg155a-trickle">
    <circle cx="450" cy="104" r="3" class="dg155a-faint"/>
    <circle cx="530" cy="110" r="3" class="dg155a-faint"/>
  </g>

  <rect x="60" y="146" width="550" height="42" rx="8" class="dg155a-inter"/>
  <text x="66" y="182" class="dg155a-sub">Interstitium</text>
  <line x1="150" y1="140" x2="150" y2="178" class="dg155a-leak"/>
  <line x1="210" y1="140" x2="210" y2="178" class="dg155a-leak"/>
  <line x1="270" y1="140" x2="270" y2="178" class="dg155a-leak"/>
  <g class="dg155a-seep">
    <circle cx="150" cy="168" r="3.5" class="dg155a-drop"/>
    <circle cx="210" cy="168" r="3.5" class="dg155a-drop"/>
    <circle cx="270" cy="168" r="3.5" class="dg155a-drop"/>
  </g>
  <text x="300" y="166" class="dg155a-lbl">Back-leak: filtrate enters the interstitium,</text>
  <text x="300" y="181" class="dg155a-lbl">causing interstitial edema</text>

  <rect x="20" y="200" width="290" height="92" rx="10" class="dg155a-box"/>
  <text x="32" y="222" class="dg155a-hd dg155a-warm">Decreased GFR</text>
  <text x="32" y="242" class="dg155a-lbl">Raised intratubular pressure behind the cast</text>
  <text x="32" y="262" class="dg155a-lbl">Vasoconstriction: redistributed Na,K-ATPase</text>
  <text x="32" y="278" class="dg155a-lbl">sends excess sodium to the distal tubules</text>

  <rect x="330" y="200" width="290" height="92" rx="10" class="dg155a-box"/>
  <text x="342" y="222" class="dg155a-hd dg155a-warm">Decreased urine output</text>
  <text x="342" y="242" class="dg155a-lbl">Obstruction of the lumen by the cast</text>
  <text x="342" y="262" class="dg155a-lbl">Back-leak of filtrate into the interstitium</text>
  <text x="342" y="280" class="dg155a-sub">Both lower the flow reaching the urine</text>
</svg>`
};
window.LECTURE_DIAGRAMS["cv155-pyelo-routes"] = {
  title: "Two routes to pyelonephritis",
  caption: "A schematic, not a lecture image. In ascending infection, bacteria in an infected bladder travel up the ureter by vesicoureteral reflux and then into the kidney tissue by intrarenal reflux; the common agents are E. coli, Proteus and Enterobacter. In hematogenous infection, bacteria from a distant focus such as septicemia or infective endocarditis reach the kidney through the blood; the common agents are Staphylococcus and E. coli (Slide 12).",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Two panels. Left, ascending infection: bacteria climb from an infected bladder up the ureter by vesicoureteral reflux and into the kidney by intrarenal reflux, with common agents E. coli, Proteus and Enterobacter. Right, hematogenous infection: bacteria travel from a distant focus such as septicemia or infective endocarditis through a blood vessel into the kidney, with common agents Staphylococcus and E. coli.">
  <style>
    .dg155b-kid { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg155b-pel { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg155b-blad { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg155b-ureter { fill: none; stroke: var(--dg-line); stroke-width: 9; stroke-linecap: round; }
    .dg155b-vessel { fill: none; stroke: var(--dg-line); stroke-width: 9; stroke-linecap: round; }
    .dg155b-up { fill: none; stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 6 9; animation: dg155bdash 1.2s linear infinite; }
    .dg155b-blood { fill: none; stroke: var(--dg-warm); stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 6 9; animation: dg155bdash 1.2s linear infinite; }
    .dg155b-head { fill: var(--dg-warm); }
    .dg155b-bug { fill: var(--dg-warm); }
    .dg155b-seed { animation: dg155bpulse 2.2s ease-in-out infinite; }
    .dg155b-box { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg155b-divide { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg155b-hd { font-size: 13px; font-weight: 700; }
    .dg155b-lbl { font-size: 11px; }
    .dg155b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg155b-num { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    @keyframes dg155bdash { to { stroke-dashoffset: -30 } }
    @keyframes dg155bpulse { 0%,100% { opacity: .45 } 50% { opacity: 1 } }
  </style>

  <line x1="320" y1="14" x2="320" y2="290" class="dg155b-divide"/>

  <text x="20" y="22" class="dg155b-hd">Ascending</text>
  <text x="20" y="38" class="dg155b-sub">E. coli, Proteus, Enterobacter</text>

  <path d="M70 62 C 34 70 30 150 70 168 C 104 182 132 150 124 116 C 118 92 108 56 70 62 Z" class="dg155b-kid"/>
  <path d="M112 100 L 136 112 L 112 126 Z" class="dg155b-pel"/>
  <path d="M136 114 C 160 150 170 200 186 226" class="dg155b-ureter"/>
  <ellipse cx="200" cy="252" rx="54" ry="28" class="dg155b-blad"/>

  <path d="M190 236 C 172 204 160 152 136 116 L 96 106" class="dg155b-up"/>
  <polygon points="98,98 82,104 98,114" class="dg155b-head"/>

  <g class="dg155b-seed">
    <circle cx="186" cy="252" r="3.5" class="dg155b-bug"/>
    <circle cx="204" cy="258" r="3.5" class="dg155b-bug"/>
    <circle cx="218" cy="248" r="3.5" class="dg155b-bug"/>
  </g>

  <text x="62" y="282" class="dg155b-lbl"><tspan class="dg155b-num">1</tspan> Bladder infection</text>
  <text x="186" y="160" class="dg155b-lbl"><tspan class="dg155b-num">2</tspan> Vesicoureteral reflux</text>
  <text x="140" y="70" class="dg155b-lbl"><tspan class="dg155b-num">3</tspan> Intrarenal reflux</text>
  <text x="140" y="85" class="dg155b-sub">into the kidney tissue</text>

  <text x="340" y="22" class="dg155b-hd">Hematogenous</text>
  <text x="340" y="38" class="dg155b-sub">Staphylococcus, E. coli</text>

  <rect x="340" y="52" width="270" height="52" rx="10" class="dg155b-box"/>
  <text x="352" y="73" class="dg155b-lbl">Distant focus in the blood:</text>
  <text x="352" y="91" class="dg155b-lbl">septicemia, infective endocarditis</text>

  <path d="M420 104 C 420 140 470 140 498 152" class="dg155b-vessel"/>
  <path d="M420 106 C 420 140 468 140 494 151" class="dg155b-blood"/>
  <polygon points="494,144 508,157 490,158" class="dg155b-head"/>

  <path d="M540 130 C 490 130 476 200 506 226 C 532 248 580 240 588 204 C 596 168 586 130 540 130 Z" class="dg155b-kid"/>
  <g class="dg155b-seed">
    <circle cx="520" cy="172" r="3.5" class="dg155b-bug"/>
    <circle cx="552" cy="156" r="3.5" class="dg155b-bug"/>
    <circle cx="572" cy="196" r="3.5" class="dg155b-bug"/>
    <circle cx="532" cy="220" r="3.5" class="dg155b-bug"/>
  </g>
  <text x="340" y="268" class="dg155b-sub">Also seen with ureteral obstruction</text>
  <text x="340" y="284" class="dg155b-sub">and immunosuppression</text>
</svg>`
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv119-flow-volume-loops"] = {
  title: "Flow-volume loops: obstructive vs restrictive",
  caption:
    "Each loop starts at full inspiration on the left, sweeps right along the top during forced expiration, and returns below the axis on inspiration. " +
    "The obstructive loop sits at higher lung volumes with a characteristic scooped-out curve, because air gets in but cannot get out. " +
    "The restrictive loop is smaller and shifted right, because air is hard to get in and breaths are short and shallow (Slides 6, 21, 35). " +
    "Shapes are schematic, so read position and shape rather than values.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Three flow-volume loops on one axis with lung volume falling from left to right. The dashed normal loop sits in the middle. The obstructive loop sits to the left with a scooped-out expiratory curve. The restrictive loop is smaller and sits to the right. Bright lines trace the obstructive and then the restrictive loop in the direction of breathing.">
  <style>
    .dg119a-axis { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg119a-lab { font-size: 11px; fill: var(--dg-muted); }
    .dg119a-norm { fill: none; stroke: var(--dg-muted); stroke-width: 2.5; stroke-dasharray: 6 5; }
    .dg119a-obsb { fill: var(--dg-warm); fill-opacity: .1; stroke: var(--dg-warm); stroke-opacity: .35; stroke-width: 2.5; }
    .dg119a-resb { fill: var(--dg-cool); fill-opacity: .1; stroke: var(--dg-cool); stroke-opacity: .35; stroke-width: 2.5; }
    .dg119a-tr { fill: none; stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 100; stroke-dashoffset: 0; }
    .dg119a-tro { stroke: var(--dg-warm); animation: dg119atraceo 9s linear infinite; }
    .dg119a-trr { stroke: var(--dg-cool); animation: dg119atracer 9s linear infinite; }
    @keyframes dg119atraceo {
      0% { stroke-dashoffset: 100 }
      40% { stroke-dashoffset: 0 }
      100% { stroke-dashoffset: 0 }
    }
    @keyframes dg119atracer {
      0%, 45% { stroke-dashoffset: 100 }
      85% { stroke-dashoffset: 0 }
      100% { stroke-dashoffset: 0 }
    }
    .dg119a-head { fill: var(--dg-muted); }
    .dg119a-card { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg119a-h { font-size: 14px; font-weight: 700; }
    .dg119a-hw { fill: var(--dg-warm); }
    .dg119a-hc { fill: var(--dg-cool); }
    .dg119a-t { font-size: 11.5px; }
    .dg119a-tag { font-size: 12px; font-weight: 700; }
  </style>

  <line x1="30" y1="16" x2="30" y2="284" class="dg119a-axis"/>
  <line x1="30" y1="150" x2="398" y2="150" class="dg119a-axis"/>
  <text x="38" y="26" class="dg119a-lab">Expiration</text>
  <text x="38" y="282" class="dg119a-lab">Inspiration</text>
  <text x="398" y="282" class="dg119a-lab" text-anchor="end">Volume falls to the right</text>

  <path d="M150,150 C150,62 165,40 186,42 C216,52 270,112 292,150 C276,206 242,226 216,226 C176,226 150,196 150,150 Z" class="dg119a-norm"/>
  <polygon points="-6,-5 6,0 -6,5" transform="translate(240,96) rotate(46)" class="dg119a-head"/>
  <polygon points="-6,-5 6,0 -6,5" transform="translate(216,226) rotate(180)" class="dg119a-head"/>

  <path d="M62,150 C62,112 68,94 84,92 C100,94 112,118 135,128 C160,138 190,143 212,150 C198,190 160,208 130,208 C92,208 62,188 62,150 Z" class="dg119a-obsb"/>
  <path d="M240,150 C240,112 248,90 264,88 C288,94 330,128 352,150 C340,184 316,198 292,198 C262,198 240,180 240,150 Z" class="dg119a-resb"/>
  <path pathLength="100" d="M62,150 C62,112 68,94 84,92 C100,94 112,118 135,128 C160,138 190,143 212,150 C198,190 160,208 130,208 C92,208 62,188 62,150 Z" class="dg119a-tr dg119a-tro"/>
  <path pathLength="100" d="M240,150 C240,112 248,90 264,88 C288,94 330,128 352,150 C340,184 316,198 292,198 C262,198 240,180 240,150 Z" class="dg119a-tr dg119a-trr"/>

  <text x="192" y="34" class="dg119a-tag" fill="var(--dg-muted)">Normal</text>
  <text x="38" y="80" class="dg119a-tag dg119a-hw">Obstructive</text>
  <text x="60" y="60" class="dg119a-lab">scooped-out curve</text>
  <line x1="116" y1="65" x2="123" y2="118" stroke="var(--dg-warm)" stroke-width="1.2"/>
  <text x="300" y="92" class="dg119a-tag dg119a-hc">Restrictive</text>

  <rect x="412" y="10" width="220" height="92" rx="10" class="dg119a-card"/>
  <text x="424" y="30" class="dg119a-h dg119a-hw">Obstructive</text>
  <text x="424" y="48" class="dg119a-t">Air gets in, cannot get out</text>
  <text x="424" y="64" class="dg119a-t">RV, FRC, TLC increased</text>
  <text x="424" y="80" class="dg119a-t">FEV1 falls more than FVC</text>
  <text x="424" y="96" class="dg119a-t">FEV1/FVC decreased</text>

  <rect x="412" y="110" width="220" height="92" rx="10" class="dg119a-card"/>
  <text x="424" y="130" class="dg119a-h dg119a-hc">Restrictive</text>
  <text x="424" y="148" class="dg119a-t">Air is hard to get in, blows out</text>
  <text x="424" y="164" class="dg119a-t">RV, FRC, TLC decreased</text>
  <text x="424" y="180" class="dg119a-t">FEV1 falls in step with FVC</text>
  <text x="424" y="196" class="dg119a-t">FEV1/FVC normal or increased</text>

  <rect x="412" y="210" width="220" height="76" rx="10" class="dg119a-card"/>
  <text x="424" y="230" class="dg119a-h">Reading a loop</text>
  <text x="424" y="248" class="dg119a-t">Left edge = lungs full</text>
  <text x="424" y="264" class="dg119a-t">Top limb = forced expiration</text>
  <text x="424" y="280" class="dg119a-t">Bottom limb = inspiration</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv119-pulsus-paradoxus"] = {
  title: "Pulsus paradoxus in severe asthma",
  caption:
    "With each breath in, the over-inflated lungs press on the veins returning to the heart, blood backs up to the right ventricle, and the extra right-sided pressure pushes against the left side. " +
    "The left side has less room, and blood pressure drops more than 10 on inhalation, then recovers on exhalation (Slide 14). " +
    "The frozen view shows the inhale phase. Chamber and bar sizes are schematic.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Over-inflated lungs beside a heart cross-section and a blood pressure bar. On inhale the lungs enlarge, the right ventricle widens, the septum pushes toward the left ventricle, and the blood pressure bar falls by more than 10. On exhale all three reverse.">
  <style>
    .dg119b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg119b-h { font-size: 13px; font-weight: 700; }
    .dg119b-lbl { font-size: 11.5px; }
    .dg119b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg119b-lung { fill: var(--dg-cool); fill-opacity: .22; stroke: var(--dg-cool); stroke-width: 2; transform-box: fill-box; transform-origin: center; animation: dg119blung 8s ease-in-out infinite; }
    @keyframes dg119blung {
      0%, 40% { transform: scale(1) }
      50%, 90% { transform: scale(.84) }
      100% { transform: scale(1) }
    }
    .dg119b-rv { fill: var(--dg-cool); fill-opacity: .3; stroke: var(--dg-cool); stroke-width: 2; transform-box: fill-box; transform-origin: left center; animation: dg119brv 8s ease-in-out infinite; }
    @keyframes dg119brv {
      0%, 40% { transform: scaleX(1) }
      50%, 90% { transform: scaleX(.745) }
      100% { transform: scaleX(1) }
    }
    .dg119b-lv { fill: var(--dg-warm); fill-opacity: .3; stroke: var(--dg-warm); stroke-width: 2; transform-box: fill-box; transform-origin: right center; animation: dg119blv 8s ease-in-out infinite; }
    @keyframes dg119blv {
      0%, 40% { transform: scaleX(1) }
      50%, 90% { transform: scaleX(1.667) }
      100% { transform: scaleX(1) }
    }
    .dg119b-sept { fill: var(--dg-ink); animation: dg119bsept 8s ease-in-out infinite; }
    @keyframes dg119bsept {
      0%, 40% { transform: translateX(0) }
      50%, 90% { transform: translateX(-28px) }
      100% { transform: translateX(0) }
    }
    .dg119b-bar { fill: var(--dg-warm); transform-box: fill-box; transform-origin: center bottom; animation: dg119bbar 8s ease-in-out infinite; }
    @keyframes dg119bbar {
      0%, 40% { transform: scaleY(1) }
      50%, 90% { transform: scaleY(1.3) }
      100% { transform: scaleY(1) }
    }
    .dg119b-ref { stroke: var(--dg-ink); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg119b-arrow { stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg119b-head { fill: var(--dg-ink); }
    .dg119b-in { font-size: 15px; font-weight: 700; fill: var(--dg-cool); animation: dg119bin 8s linear infinite; }
    .dg119b-ex { font-size: 15px; font-weight: 700; fill: var(--dg-good); opacity: 0; animation: dg119bex 8s linear infinite; }
    @keyframes dg119bin {
      0%, 42% { opacity: 1 }
      48%, 92% { opacity: 0 }
      100% { opacity: 1 }
    }
    @keyframes dg119bex {
      0%, 42% { opacity: 0 }
      48%, 92% { opacity: 1 }
      100% { opacity: 0 }
    }
    .dg119b-n { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
  </style>

  <rect x="10" y="10" width="620" height="196" rx="14" class="dg119b-panel"/>
  <text x="296" y="30" class="dg119b-in" text-anchor="middle">INHALE</text>
  <text x="296" y="30" class="dg119b-ex" text-anchor="middle">EXHALE</text>

  <text x="28" y="34" class="dg119b-h">Over-inflated lungs</text>
  <ellipse cx="72" cy="112" rx="38" ry="62" class="dg119b-lung"/>
  <ellipse cx="156" cy="112" rx="38" ry="62" class="dg119b-lung"/>

  <line x1="202" y1="112" x2="228" y2="112" class="dg119b-arrow"/>
  <polygon points="228,105 240,112 228,119" class="dg119b-head"/>
  <text x="178" y="192" class="dg119b-sub">pressure on returning veins</text>

  <rect x="244" y="52" width="164" height="118" rx="14" fill="none" stroke="var(--dg-ink)" stroke-width="2"/>
  <rect x="252" y="62" width="104" height="98" rx="10" class="dg119b-rv"/>
  <rect x="362" y="62" width="40" height="98" rx="10" class="dg119b-lv"/>
  <rect x="356" y="56" width="6" height="110" class="dg119b-sept"/>
  <text x="272" y="116" class="dg119b-lbl" font-weight="700">RV</text>
  <text x="372" y="116" class="dg119b-lbl" font-weight="700">LV</text>

  <text x="456" y="34" class="dg119b-h">Blood pressure</text>
  <line x1="462" y1="54" x2="530" y2="54" class="dg119b-ref"/>
  <text x="538" y="58" class="dg119b-sub">on exhale</text>
  <rect x="474" y="84" width="44" height="100" class="dg119b-bar"/>
  <line x1="462" y1="184" x2="530" y2="184" stroke="var(--dg-ink)" stroke-width="2"/>
  <text x="538" y="84" class="dg119b-lbl" font-weight="700">drops more</text>
  <text x="538" y="99" class="dg119b-lbl" font-weight="700">than 10 on</text>
  <text x="538" y="114" class="dg119b-lbl" font-weight="700">inhalation</text>

  <text x="16" y="228" class="dg119b-n">1</text>
  <text x="30" y="228" class="dg119b-lbl">Airways tighten and swell, so the lungs over-inflate</text>
  <text x="16" y="248" class="dg119b-n">2</text>
  <text x="30" y="248" class="dg119b-lbl">Pressure on the veins going back to the heart</text>
  <text x="16" y="268" class="dg119b-n">3</text>
  <text x="30" y="268" class="dg119b-lbl">Blood backs up to the right ventricle</text>
  <text x="330" y="228" class="dg119b-n">4</text>
  <text x="344" y="228" class="dg119b-lbl">Extra right-sided pressure pushes against the left side</text>
  <text x="330" y="248" class="dg119b-n">5</text>
  <text x="344" y="248" class="dg119b-lbl">Blood pressure drops more than 10 on inhalation</text>
  <text x="330" y="268" class="dg119b-n">6</text>
  <text x="344" y="268" class="dg119b-lbl">On exhale the septum and the pressure recover</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv119-sarcoid-pathway"] = {
  title: "Sarcoidosis: one antigen, three arms",
  caption:
    "An inhaled foreign antigen drives monocyte differentiation and activates two cell lines. " +
    "Dendritic cells migrate to the mediastinal lymph nodes, and alveolar macrophages split into two arms. " +
    "The T-cell arm runs through Th1 cells and IFN-gamma to epithelioid and giant cells, building the noncaseating granuloma and, through cytokines and fibroblasts, fibrosis. " +
    "The calcium arm raises 1-alpha hydroxylase and calcitriol, which explains hypercalcemia (Slide 25). The highlight follows each arm in sequence.",
  svg: `
<svg viewBox="0 0 650 300" role="img" aria-label="Flowchart of sarcoidosis. Inhaled antigen and monocyte differentiation activate interstitial dendritic cells, which migrate to mediastinal lymph nodes, and pulmonary alveolar macrophages. Macrophages present antigen to T helper cells, activating Th1 cells that release interferon gamma, forming epithelioid and giant cells that produce ACE and cytokines leading to fibrosis. Macrophages also increase 1-alpha hydroxylase, then calcitriol, then hypervitaminosis D, then hypercalcemia, hyperphosphatemia and possible renal failure.">
  <style>
    .dg119c-box { stroke-width: 2; fill: var(--dg-panel); }
    .dg119c-root { stroke: var(--dg-ink); }
    .dg119c-a1 { stroke: var(--dg-muted); }
    .dg119c-a2 { stroke: var(--dg-accent); }
    .dg119c-a3 { stroke: var(--dg-warm); }
    .dg119c-t { font-size: 10.5px; text-anchor: middle; }
    .dg119c-b { font-weight: 700; }
    .dg119c-edge { fill: none; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg119c-head { fill: var(--dg-ink); }
    .dg119c-arm { font-size: 11.5px; font-weight: 700; }
    .dg119c-arm2 { fill: var(--dg-accent); }
    .dg119c-arm3 { fill: var(--dg-warm); }
    .dg119c-brk { fill: none; stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg119c-hi { opacity: 0; animation: dg119chi 11s linear infinite; }
    .dg119c-hi2 { fill: var(--dg-accent); }
    .dg119c-hi3 { fill: var(--dg-warm); }
    .dg119c-hi1 { fill: var(--dg-muted); }
    @keyframes dg119chi {
      0% { opacity: 0 }
      4% { opacity: .35 }
      11% { opacity: .35 }
      17% { opacity: 0 }
      100% { opacity: 0 }
    }
    .dg119c-d0 { animation-delay: 0s; }
    .dg119c-d1 { animation-delay: .8s; }
    .dg119c-d2 { animation-delay: 1.6s; }
    .dg119c-d3 { animation-delay: 2.4s; }
    .dg119c-d4 { animation-delay: 3.2s; }
    .dg119c-d5 { animation-delay: 4s; }
    .dg119c-d6 { animation-delay: 4.8s; }
    .dg119c-d7 { animation-delay: 5.6s; }
  </style>

  <path d="M104,150 L116,150 L116,34 L122,34" class="dg119c-edge"/>
  <polygon points="122,29 130,34 122,39" class="dg119c-head"/>
  <path d="M104,172 L122,172" class="dg119c-edge"/>
  <polygon points="122,167 130,172 122,177" class="dg119c-head"/>
  <path d="M232,34 L242,34" class="dg119c-edge"/>
  <polygon points="242,29 250,34 242,39" class="dg119c-head"/>
  <path d="M234,160 L243,160 L243,122 L246,122" class="dg119c-edge"/>
  <polygon points="246,117 254,122 246,127" class="dg119c-head"/>
  <path d="M234,184 L243,184 L243,250 L246,250" class="dg119c-edge"/>
  <polygon points="246,245 254,250 246,255" class="dg119c-head"/>
  <polygon points="344,117 352,122 344,127" class="dg119c-head"/>
  <polygon points="442,117 450,122 442,127" class="dg119c-head"/>
  <polygon points="540,117 548,122 540,127" class="dg119c-head"/>
  <polygon points="344,245 352,250 344,255" class="dg119c-head"/>
  <polygon points="442,245 450,250 442,255" class="dg119c-head"/>
  <polygon points="540,245 548,250 540,255" class="dg119c-head"/>

  <rect x="8" y="126" width="96" height="70" rx="8" class="dg119c-box dg119c-root"/>
  <rect x="8" y="126" width="96" height="70" rx="8" class="dg119c-hi dg119c-hi1 dg119c-d0"/>
  <text x="56" y="146" class="dg119c-t dg119c-b">Inhaled foreign</text>
  <text x="56" y="160" class="dg119c-t dg119c-b">antigen</text>
  <text x="56" y="174" class="dg119c-t">monocyte</text>
  <text x="56" y="188" class="dg119c-t">differentiation</text>

  <rect x="130" y="12" width="102" height="44" rx="8" class="dg119c-box dg119c-a1"/>
  <rect x="130" y="12" width="102" height="44" rx="8" class="dg119c-hi dg119c-hi1 dg119c-d1"/>
  <text x="181" y="31" class="dg119c-t">Interstitial</text>
  <text x="181" y="45" class="dg119c-t">dendritic cells</text>
  <rect x="250" y="12" width="150" height="44" rx="8" class="dg119c-box dg119c-a1"/>
  <rect x="250" y="12" width="150" height="44" rx="8" class="dg119c-hi dg119c-hi1 dg119c-d2"/>
  <text x="325" y="31" class="dg119c-t">Migrate to mediastinal</text>
  <text x="325" y="45" class="dg119c-t">lymph nodes</text>

  <rect x="130" y="148" width="104" height="48" rx="8" class="dg119c-box dg119c-root"/>
  <rect x="130" y="148" width="104" height="48" rx="8" class="dg119c-hi dg119c-hi2 dg119c-d1"/>
  <text x="182" y="169" class="dg119c-t dg119c-b">Pulmonary alveolar</text>
  <text x="182" y="183" class="dg119c-t dg119c-b">macrophages</text>

  <text x="254" y="86" class="dg119c-arm dg119c-arm2">T-cell arm</text>
  <path d="M450,88 L450,82 L646,82 L646,88" class="dg119c-brk"/>
  <text x="548" y="76" class="dg119c-arm dg119c-arm2" text-anchor="middle">Granuloma formation</text>
  <rect x="254" y="94" width="90" height="56" rx="8" class="dg119c-box dg119c-a2"/>
  <rect x="254" y="94" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi2 dg119c-d2"/>
  <text x="299" y="118" class="dg119c-t">Present antigen</text>
  <text x="299" y="132" class="dg119c-t">to T helper cells</text>
  <rect x="352" y="94" width="90" height="56" rx="8" class="dg119c-box dg119c-a2"/>
  <rect x="352" y="94" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi2 dg119c-d3"/>
  <text x="397" y="112" class="dg119c-t dg119c-b">Th1 cells</text>
  <text x="397" y="126" class="dg119c-t">release</text>
  <text x="397" y="140" class="dg119c-t dg119c-b">IFN-gamma</text>
  <rect x="450" y="94" width="90" height="56" rx="8" class="dg119c-box dg119c-a2"/>
  <rect x="450" y="94" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi2 dg119c-d4"/>
  <text x="495" y="112" class="dg119c-t">Epithelioid and</text>
  <text x="495" y="126" class="dg119c-t">multinucleated</text>
  <text x="495" y="140" class="dg119c-t">giant cells</text>
  <rect x="548" y="94" width="98" height="56" rx="8" class="dg119c-box dg119c-a2"/>
  <rect x="548" y="94" width="98" height="56" rx="8" class="dg119c-hi dg119c-hi2 dg119c-d5"/>
  <text x="597" y="112" class="dg119c-t">ACE; cytokines</text>
  <text x="597" y="126" class="dg119c-t">recruit fibroblasts,</text>
  <text x="597" y="140" class="dg119c-t dg119c-b">fibrosis</text>

  <text x="254" y="214" class="dg119c-arm dg119c-arm3">Calcium arm</text>
  <rect x="254" y="222" width="90" height="56" rx="8" class="dg119c-box dg119c-a3"/>
  <rect x="254" y="222" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi3 dg119c-d4"/>
  <text x="299" y="240" class="dg119c-t">Increased</text>
  <text x="299" y="254" class="dg119c-t">1-alpha</text>
  <text x="299" y="268" class="dg119c-t">hydroxylase</text>
  <rect x="352" y="222" width="90" height="56" rx="8" class="dg119c-box dg119c-a3"/>
  <rect x="352" y="222" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi3 dg119c-d5"/>
  <text x="397" y="247" class="dg119c-t">Increased</text>
  <text x="397" y="261" class="dg119c-t">calcitriol</text>
  <rect x="450" y="222" width="90" height="56" rx="8" class="dg119c-box dg119c-a3"/>
  <rect x="450" y="222" width="90" height="56" rx="8" class="dg119c-hi dg119c-hi3 dg119c-d6"/>
  <text x="495" y="247" class="dg119c-t">Hypervitaminosis</text>
  <text x="495" y="261" class="dg119c-t">D</text>
  <rect x="548" y="222" width="98" height="56" rx="8" class="dg119c-box dg119c-a3"/>
  <rect x="548" y="222" width="98" height="56" rx="8" class="dg119c-hi dg119c-hi3 dg119c-d7"/>
  <text x="597" y="240" class="dg119c-t dg119c-b">Hypercalcemia,</text>
  <text x="597" y="254" class="dg119c-t" style="font-size:10px">hyperphosphatemia,</text>
  <text x="597" y="268" class="dg119c-t">+/- renal failure</text>
</svg>`,
};

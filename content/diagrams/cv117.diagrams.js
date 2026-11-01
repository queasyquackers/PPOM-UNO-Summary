window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv117-plch-cycle"] = {
  title: "PLCH: how smoke feeds the lesion",
  caption:
    "Follow the dots: cigarette smoke acts through two arms. Alveolar macrophages release growth factors that activate fibroblasts, and cytokines that activate dendritic (Langerhans) cells. " +
    "CD4 T cells drive B cells to make IgG and immune complexes, and their abnormal interleukin-2 response also activates the dendritic cells. " +
    "The lecturer calls this a cycle, ending in interstitial inflammation, granuloma formation and lung disease. Smoke is the input, which is why symptoms generally dissipate after smoking cessation (Slide 20).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Flow diagram. Cigarette smoke activates alveolar macrophages and CD4 T cells. Macrophages release fibroblast growth factors, causing fibroblast activation with collagen and fibrosis, and release cytokines that activate Langerhans dendritic cells. CD4 T cells activate B cells, giving IgG and immune complexes, and an abnormal interleukin-2 response activates the Langerhans cells. A cycle around the Langerhans cells leads to interstitial inflammation, granuloma formation and lung disease.">
  <style>
    .dg117a-node { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg117a-src { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg117a-lc { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg117a-out { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg117a-b { font-size: 13px; font-weight: 700; }
    .dg117a-s { font-size: 11.5px; }
    .dg117a-t { font-size: 11.5px; font-style: italic; }
    .dg117a-ln { stroke: var(--dg-muted); stroke-width: 2; }
    .dg117a-hd { fill: var(--dg-muted); }
    .dg117a-ring { fill: none; stroke: var(--dg-accent); stroke-width: 2; stroke-dasharray: 7 7; animation: dg117a-spin 2.4s linear infinite; }
    @keyframes dg117a-spin { to { stroke-dashoffset: -56; } }
    .dg117a-dot { fill: var(--dg-warm); opacity: 0; }
    @keyframes dg117a-k0 { 0%, 2% { opacity: 0; transform: translate(0, 0); } 5% { opacity: 1; } 24% { opacity: 1; } 26%, 100% { opacity: 0; transform: translate(-115px, 34px); } }
    .dg117a-d0 { animation: dg117a-k0 7.5s linear infinite; }
    @keyframes dg117a-k1 { 0%, 2% { opacity: 0; transform: translate(0, 0); } 5% { opacity: 1; } 24% { opacity: 1; } 26%, 100% { opacity: 0; transform: translate(115px, 34px); } }
    .dg117a-d1 { animation: dg117a-k1 7.5s linear infinite; }
    @keyframes dg117a-k2 { 0%, 32% { opacity: 0; transform: translate(0, 0); } 35% { opacity: 1; } 54% { opacity: 1; } 56%, 100% { opacity: 0; transform: translate(0px, 60px); } }
    .dg117a-d2 { animation: dg117a-k2 7.5s linear infinite; }
    @keyframes dg117a-k3 { 0%, 32% { opacity: 0; transform: translate(0, 0); } 35% { opacity: 1; } 54% { opacity: 1; } 56%, 100% { opacity: 0; transform: translate(62px, 28px); } }
    .dg117a-d3 { animation: dg117a-k3 7.5s linear infinite; }
    @keyframes dg117a-k4 { 0%, 32% { opacity: 0; transform: translate(0, 0); } 35% { opacity: 1; } 54% { opacity: 1; } 56%, 100% { opacity: 0; transform: translate(-62px, 28px); } }
    .dg117a-d4 { animation: dg117a-k4 7.5s linear infinite; }
    @keyframes dg117a-k5 { 0%, 32% { opacity: 0; transform: translate(0, 0); } 35% { opacity: 1; } 54% { opacity: 1; } 56%, 100% { opacity: 0; transform: translate(0px, 60px); } }
    .dg117a-d5 { animation: dg117a-k5 7.5s linear infinite; }
    @keyframes dg117a-k6 { 0%, 62% { opacity: 0; transform: translate(0, 0); } 65% { opacity: 1; } 84% { opacity: 1; } 86%, 100% { opacity: 0; transform: translate(0px, 42px); } }
    .dg117a-d6 { animation: dg117a-k6 7.5s linear infinite; }
  </style>
  <rect x="215" y="8" width="210" height="36" rx="8" class="dg117a-src"/><text x="320.0" y="23.0" text-anchor="middle" class="dg117a-b">Cigarette smoke</text><text x="320.0" y="38.0" text-anchor="middle" class="dg117a-s">antigens and toxins</text>
  <rect x="30" y="78" width="170" height="36" rx="8" class="dg117a-node"/><text x="115.0" y="100.5" text-anchor="middle" class="dg117a-b">Alveolar macrophage</text>
  <rect x="440" y="78" width="170" height="36" rx="8" class="dg117a-node"/><text x="525.0" y="100.5" text-anchor="middle" class="dg117a-b">CD4 T cell</text>
  <rect x="8" y="176" width="170" height="40" rx="8" class="dg117a-node"/><text x="93.0" y="193.0" text-anchor="middle" class="dg117a-b">Fibroblast activation</text><text x="93.0" y="208.0" text-anchor="middle" class="dg117a-s">collagen, fibrosis</text>
  <rect x="462" y="176" width="170" height="40" rx="8" class="dg117a-node"/><text x="547.0" y="193.0" text-anchor="middle" class="dg117a-b">B cell activation</text><text x="547.0" y="208.0" text-anchor="middle" class="dg117a-s">IgG, immune complexes</text>
  <ellipse cx="320" cy="175" rx="118" ry="33" class="dg117a-ring"/>
  <rect x="232" y="154" width="176" height="42" rx="8" class="dg117a-lc"/><text x="320.0" y="172.0" text-anchor="middle" class="dg117a-b">Langerhans cells</text><text x="320.0" y="187.0" text-anchor="middle" class="dg117a-s">dendritic cells activated</text>
  <rect x="180" y="252" width="280" height="40" rx="8" class="dg117a-out"/><text x="320.0" y="269.0" text-anchor="middle" class="dg117a-b">Interstitial inflammation,</text><text x="320.0" y="284.0" text-anchor="middle" class="dg117a-s">granuloma formation, lung disease</text>
  <line x1="250" y1="44" x2="135" y2="78" class="dg117a-ln"/><polygon points="135.0,78.0 141.7,71.9 143.9,79.5" class="dg117a-hd"/>
  <line x1="390" y1="44" x2="505" y2="78" class="dg117a-ln"/><polygon points="505.0,78.0 496.1,79.5 498.3,71.9" class="dg117a-hd"/>
  <line x1="93" y1="114" x2="93" y2="174" class="dg117a-ln"/><polygon points="93.0,174.0 89.1,165.9 96.9,165.9" class="dg117a-hd"/>
  <line x1="190" y1="114" x2="252" y2="142" class="dg117a-ln"/><polygon points="252.0,142.0 243.0,142.2 246.2,135.1" class="dg117a-hd"/>
  <line x1="450" y1="114" x2="388" y2="142" class="dg117a-ln"/><polygon points="388.0,142.0 393.8,135.1 397.0,142.2" class="dg117a-hd"/>
  <line x1="547" y1="114" x2="547" y2="174" class="dg117a-ln"/><polygon points="547.0,174.0 543.1,165.9 550.9,165.9" class="dg117a-hd"/>
  <line x1="320" y1="208" x2="320" y2="250" class="dg117a-ln"/><polygon points="320.0,250.0 316.1,241.9 323.9,241.9" class="dg117a-hd"/>
  <text x="101" y="150" class="dg117a-t">growth factors</text>
  <text x="206" y="108" class="dg117a-t">cytokines</text>
  <text x="356" y="108" class="dg117a-t">abnormal IL-2</text>
  <text x="240" y="218" class="dg117a-t">cycle</text>
  <circle cx="250" cy="44" r="5.5" class="dg117a-dot dg117a-d0"/>
  <circle cx="390" cy="44" r="5.5" class="dg117a-dot dg117a-d1"/>
  <circle cx="93" cy="114" r="5.5" class="dg117a-dot dg117a-d2"/>
  <circle cx="190" cy="114" r="5.5" class="dg117a-dot dg117a-d3"/>
  <circle cx="450" cy="114" r="5.5" class="dg117a-dot dg117a-d4"/>
  <circle cx="547" cy="114" r="5.5" class="dg117a-dot dg117a-d5"/>
  <circle cx="320" cy="208" r="5.5" class="dg117a-dot dg117a-d6"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv117-pap-clearance"] = {
  title: "PAP: a clearance failure",
  caption:
    "Surfactant-containing particles are normally made in both panels; what differs is removal. With working GM-CSF, macrophages clear them and the alveolus stays open. " +
    "When GM-CSF is deficient (antibodies against it in 90% of patients, or a hereditary GM-CSF gene mutation), clearance fails and PAS-positive precipitate fills the alveolus. " +
    "That is why treatment washes out the lungs and gives GM-CSF (Slide 29).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two alveoli side by side. On the left, GM-CSF reaches the macrophage, which clears normally made surfactant particles, so the alveolus stays open. On the right, antibodies inactivate GM-CSF, the macrophage cannot clear the particles, and PAS-positive surfactant-rich precipitate fills the alveolus.">
  <style>
    .dg117b-alv { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg117b-mac { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 2.5; }
    .dg117b-macoff { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 4 4; }
    .dg117b-h { font-size: 14px; font-weight: 700; }
    .dg117b-l { font-size: 12px; }
    .dg117b-m { font-size: 11px; }
    .dg117b-b { font-size: 13px; font-weight: 700; }
    .dg117b-ln { stroke: var(--dg-cool); stroke-width: 2.5; }
    .dg117b-hd { fill: var(--dg-cool); }
    .dg117b-sln { stroke: var(--dg-muted); stroke-width: 2; }
    .dg117b-shd { fill: var(--dg-muted); }
    .dg117b-x { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg117b-still { fill: var(--dg-warm); opacity: .35; }
    .dg117b-fill { fill: var(--dg-warm); opacity: .3; animation: dg117b-rise 8s ease-in infinite; }
    @keyframes dg117b-rise { 0% { transform: translateY(185px); } 85%, 100% { transform: translateY(0); } }
    .dg117b-p { fill: var(--dg-warm); opacity: 0; }
    .dg117b-g { fill: var(--dg-cool); opacity: 0; }
    @keyframes dg117b-eat { 0% { opacity: 0; transform: translate(0, 0); } 10% { opacity: 1; } 30% { opacity: 1; transform: translate(-25px, 45px); } 75% { opacity: 1; transform: translate(-72px, 118px); } 85%, 100% { opacity: 0; transform: translate(-72px, 118px); } }
    @keyframes dg117b-stay { 0% { opacity: 0; transform: translate(0, 0); } 10% { opacity: 1; } 40% { opacity: 1; transform: translate(-25px, 45px); } 70%, 80% { opacity: 1; transform: translate(-40px, 90px); } 100% { opacity: 0; transform: translate(-40px, 90px); } }
    @keyframes dg117b-sig { 0% { opacity: 0; transform: translate(0, 0); } 15% { opacity: 1; } 70% { opacity: 1; transform: translate(46px, 20px); } 80%, 100% { opacity: 0; transform: translate(46px, 20px); } }
    @keyframes dg117b-sigstop { 0% { opacity: 0; transform: translate(0, 0); } 15% { opacity: 1; } 55% { opacity: 1; transform: translate(24px, 11px); } 65%, 100% { opacity: 0; transform: translate(24px, 11px); } }
    .dg117b-e1 { animation: dg117b-eat 4s linear infinite; }
    .dg117b-e2 { animation: dg117b-eat 4s linear infinite 1.3s; }
    .dg117b-e3 { animation: dg117b-eat 4s linear infinite 2.6s; }
    .dg117b-s1 { animation: dg117b-stay 4s linear infinite; }
    .dg117b-s2 { animation: dg117b-stay 4s linear infinite 1.3s; }
    .dg117b-s3 { animation: dg117b-stay 4s linear infinite 2.6s; }
    .dg117b-g1 { animation: dg117b-sig 3s linear infinite; }
    .dg117b-g2 { animation: dg117b-sigstop 3s linear infinite; }
  </style>
  <clipPath id="dg117b-clip"><circle cx="490" cy="158" r="90"/></clipPath>
  <text x="160" y="20" class="dg117b-h" text-anchor="middle">Normal: working GM-CSF</text>
  <circle cx="165" cy="158" r="92" class="dg117b-alv"/>
  <text x="232" y="42" class="dg117b-m" text-anchor="middle">surfactant particles, made normally</text>
  <line x1="232" y1="48" x2="212" y2="84" class="dg117b-sln"/><polygon points="212.0,84.0 212.5,75.0 219.4,78.8" class="dg117b-shd"/>
  <circle cx="128" cy="194" r="36" class="dg117b-mac"/>
  <text x="128" y="198" class="dg117b-m" text-anchor="middle">macrophage</text>
  <text x="4" y="148" class="dg117b-b" text-anchor="start">GM-CSF</text>
  <line x1="44" y1="156" x2="92" y2="178" class="dg117b-ln"/><polygon points="92.0,178.0 83.0,178.2 86.3,171.1" class="dg117b-hd"/>
  <circle cx="44" cy="156" r="5" class="dg117b-g dg117b-g1"/>
  <circle cx="212" cy="66" r="6" class="dg117b-p dg117b-e1"/>
  <circle cx="212" cy="66" r="6" class="dg117b-p dg117b-e2"/>
  <circle cx="212" cy="66" r="6" class="dg117b-p dg117b-e3"/>
  <circle cx="178" cy="160" r="5" class="dg117b-still"/>
  <circle cx="188" cy="182" r="5" class="dg117b-still"/>
  <circle cx="182" cy="206" r="5" class="dg117b-still"/>
  <text x="172" y="118" class="dg117b-l" text-anchor="middle">air space open</text>
  <text x="165" y="272" class="dg117b-b" text-anchor="middle">Macrophages clear the particles</text>
  <text x="165" y="290" class="dg117b-l" text-anchor="middle">alveolus stays open</text>
  <line x1="320" y1="30" x2="320" y2="292" stroke="var(--dg-line)" stroke-width="1.5"/>
  <text x="485" y="20" class="dg117b-h" text-anchor="middle">PAP: GM-CSF deficient</text>
  <circle cx="490" cy="158" r="92" class="dg117b-alv"/>
  <g clip-path="url(#dg117b-clip)"><rect x="395" y="62" width="192" height="190" class="dg117b-fill"/></g>
  <text x="557" y="42" class="dg117b-m" text-anchor="middle">surfactant particles, made normally</text>
  <line x1="557" y1="48" x2="537" y2="84" class="dg117b-sln"/><polygon points="537.0,84.0 537.5,75.0 544.4,78.8" class="dg117b-shd"/>
  <circle cx="453" cy="194" r="36" class="dg117b-macoff"/>
  <text x="453" y="198" class="dg117b-m" text-anchor="middle">macrophage</text>
  <text x="329" y="148" class="dg117b-b" text-anchor="start">GM-CSF</text>
  <line x1="369" y1="156" x2="417" y2="178" class="dg117b-sln"/><polygon points="417.0,178.0 408.0,178.2 411.3,171.1" class="dg117b-shd"/>
  <line x1="387" y1="156" x2="403" y2="176" class="dg117b-x"/>
  <line x1="403" y1="156" x2="387" y2="176" class="dg117b-x"/>
  <circle cx="369" cy="156" r="5" class="dg117b-g dg117b-g2"/>
  <text x="329" y="122" class="dg117b-m" text-anchor="start">antibodies</text>
  <text x="329" y="134" class="dg117b-m" text-anchor="start">inactivate</text>
  <circle cx="537" cy="66" r="6" class="dg117b-p dg117b-s1"/>
  <circle cx="537" cy="66" r="6" class="dg117b-p dg117b-s2"/>
  <circle cx="537" cy="66" r="6" class="dg117b-p dg117b-s3"/>
  <text x="497" y="118" class="dg117b-b" text-anchor="middle">PAS+ precipitate</text>
  <text x="490" y="272" class="dg117b-b" text-anchor="middle">Clearance fails, production continues</text>
  <text x="490" y="290" class="dg117b-l" text-anchor="middle">surfactant-rich material fills the alveolus</text>
</svg>`,
};

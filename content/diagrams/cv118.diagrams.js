window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv118-dust-fate"] = {
  title: "Where inhaled dust ends up",
  caption:
    "Each row follows one kind of inhaled dust and stops where this lecture says it stops. " +
    "Large particles do not get deep enough, the smallest are phagocytosed easily, and 1-5 um particles are the most dangerous because macrophages struggle with them and the immune system is stimulated. " +
    "Curved serpentine fibers impact high and ride the mucociliary elevator back out, which is why they are less toxic. " +
    "The deck gives aerodynamic properties and solubility as the reason amphibole fibers are more pathogenic; the path drawn here is only the contrast with serpentine (Slides 4, 6).",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Five rows of inhaled dust crossing three zones of the airway. Particles larger than 5 micrometers stop in the upper airway. Particles of 1 to 5 micrometers reach alveolar macrophages and stimulate the immune system. Particles under 1 micrometer reach the alveolus and are phagocytosed easily. Curly serpentine fibers impact in the upper airway and are carried back out by the mucociliary elevator. Straight amphibole fibers travel on to the alveolus and are more pathogenic.">
  <style>
    .dg118a-zone  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg118a-head  { font-size: 11.5px; font-weight: 700; fill: var(--dg-muted); }
    .dg118a-name  { font-size: 12.5px; font-weight: 700; }
    .dg118a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg118a-fate  { font-size: 11px; }
    .dg118a-warn  { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .dg118a-track { stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 3 4; fill: none; }
    .dg118a-stop  { stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg118a-back  { stroke: var(--dg-good); stroke-width: 2.5; fill: none; stroke-dasharray: 7 5; animation: dg118aback 1.1s linear infinite; }
    .dg118a-backh { fill: var(--dg-good); }
    .dg118a-mac   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg118a-mach  { fill: var(--dg-accent); font-size: 9px; font-weight: 700; }
    .dg118a-hot   { stroke: var(--dg-warm); animation: dg118ahot 6s ease-in-out infinite; }
    .dg118a-big   { fill: var(--dg-muted); animation: dg118abig 6s ease-in-out infinite; }
    .dg118a-mid   { fill: var(--dg-warm); animation: dg118amid 6s ease-in-out infinite; }
    .dg118a-tiny  { fill: var(--dg-cool); animation: dg118atiny 6s ease-in-out infinite; }
    .dg118a-curl  { stroke: var(--dg-good); stroke-width: 2.5; fill: none; stroke-linecap: round; animation: dg118acurl 6s ease-in-out infinite; }
    .dg118a-rod   { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; animation: dg118arod 6s ease-in-out infinite; }
    @keyframes dg118abig  { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 34% { transform: translateX(62px); opacity: 1 } 80% { transform: translateX(62px); opacity: 1 } 100% { transform: translateX(62px); opacity: 0 } }
    @keyframes dg118amid  { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 58% { transform: translateX(216px); opacity: 1 } 100% { transform: translateX(216px); opacity: 1 } }
    @keyframes dg118atiny { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 58% { transform: translateX(216px); opacity: 1 } 70% { transform: translateX(232px); opacity: 0 } 100% { transform: translateX(232px); opacity: 0 } }
    @keyframes dg118acurl { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 34% { transform: translateX(62px); opacity: 1 } 46% { transform: translateX(62px); opacity: 1 } 88% { transform: translateX(0); opacity: 1 } 100% { transform: translateX(-10px); opacity: 0 } }
    @keyframes dg118arod  { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 62% { transform: translateX(216px); opacity: 1 } 100% { transform: translateX(216px); opacity: 1 } }
    @keyframes dg118ahot  { 0%, 50% { stroke-width: 2.5 } 70% { stroke-width: 5 } 100% { stroke-width: 2.5 } }
    @keyframes dg118aback { to { stroke-dashoffset: 24 } }
  </style>

  <rect x="118" y="26" width="86" height="274" rx="8" class="dg118a-zone"/>
  <rect x="210" y="26" width="86" height="274" rx="8" class="dg118a-zone"/>
  <rect x="302" y="26" width="86" height="274" rx="8" class="dg118a-zone"/>
  <text x="161" y="17" text-anchor="middle" class="dg118a-head">Upper airway</text>
  <text x="253" y="17" text-anchor="middle" class="dg118a-head">Small airways</text>
  <text x="345" y="17" text-anchor="middle" class="dg118a-head">Alveolus</text>

  <text x="4" y="52" class="dg118a-name">Over 5 um</text>
  <text x="4" y="66" class="dg118a-sub">larger particles</text>
  <line x1="126" y1="56" x2="186" y2="56" class="dg118a-track"/>
  <line x1="197" y1="42" x2="197" y2="70" class="dg118a-stop"/>
  <circle cx="126" cy="56" r="9" class="dg118a-big"/>
  <text x="398" y="52" class="dg118a-fate">Stops high: does not get</text>
  <text x="398" y="66" class="dg118a-fate">deep enough</text>

  <text x="4" y="106" class="dg118a-name">1 to 5 um</text>
  <text x="4" y="120" class="dg118a-sub">most dangerous</text>
  <line x1="126" y1="110" x2="330" y2="110" class="dg118a-track"/>
  <circle cx="358" cy="110" r="17" class="dg118a-mac dg118a-hot"/>
  <text x="358" y="113" text-anchor="middle" class="dg118a-mach">Mac</text>
  <circle cx="126" cy="110" r="6" class="dg118a-mid"/>
  <text x="398" y="106" class="dg118a-warn">Macrophages try to ingest it:</text>
  <text x="398" y="120" class="dg118a-warn">immune system stimulated</text>

  <text x="4" y="160" class="dg118a-name">Under 1 um</text>
  <text x="4" y="174" class="dg118a-sub">smallest particles</text>
  <line x1="126" y1="164" x2="330" y2="164" class="dg118a-track"/>
  <circle cx="358" cy="164" r="17" class="dg118a-mac"/>
  <text x="358" y="167" text-anchor="middle" class="dg118a-mach">Mac</text>
  <circle cx="126" cy="164" r="3.5" class="dg118a-tiny"/>
  <text x="398" y="160" class="dg118a-fate">Phagocytosed easily</text>

  <text x="4" y="214" class="dg118a-name">Serpentine</text>
  <text x="4" y="228" class="dg118a-sub">curly fiber</text>
  <line x1="126" y1="210" x2="186" y2="210" class="dg118a-track"/>
  <line x1="197" y1="198" x2="197" y2="222" class="dg118a-stop"/>
  <path d="M188 232 H134" class="dg118a-back"/>
  <polygon points="134,226 122,232 134,238" class="dg118a-backh"/>
  <path d="M106 216 q5 -12 10 0 t10 0 t10 0" class="dg118a-curl"/>
  <text x="398" y="208" class="dg118a-fate">Impacted in the upper tract,</text>
  <text x="398" y="222" class="dg118a-fate">removed by the mucociliary</text>
  <text x="398" y="236" class="dg118a-fate">elevator: less toxic</text>

  <text x="4" y="274" class="dg118a-name">Amphibole</text>
  <text x="4" y="288" class="dg118a-sub">straight rod</text>
  <line x1="126" y1="276" x2="346" y2="276" class="dg118a-track"/>
  <line x1="116" y1="276" x2="150" y2="276" class="dg118a-rod"/>
  <text x="398" y="272" class="dg118a-warn">More pathogenic, especially</text>
  <text x="398" y="286" class="dg118a-warn">for mesothelioma</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv118-fibrosis-loop"] = {
  title: "The same story in all four",
  caption:
    "Dust or fiber retained in the lung keeps macrophages trying to phagocytose it, mediators recruit more inflammatory cells, and activated fibroblasts lay down collagen. " +
    "The loop is fed by what stays in the lung, not by new exposure, which is why asbestosis progresses even without further exposure and why established fibrosis is irreversible. " +
    "The lecturer calls this \"the same story here, all four of them\"; the bottom row shows the mediators the deck names for each dust, and berylliosis, whose hallmark is granulomas, has no named mediators here (Slides 8, 10, 29, 42).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="A clockwise loop. Dust or fiber retained in the lung leads to macrophages trying to phagocytose it, then mediators released, then more inflammatory cells and activated fibroblasts, then collagen and interstitial fibrosis, and back to the retained dust. An arrow for inhaled exposure enters the loop and can stop, but the loop keeps turning. Bottom row: asbestos has iron-catalyzed free radicals that disrupt DNA and lead to malignancy; coal has reactive oxygen species, interleukins and TNF; silica has the inflammasome with IL-1 and IL-18.">
  <style>
    .dg118b-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg118b-lbl   { font-size: 12.5px; font-weight: 700; }
    .dg118b-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg118b-ctr   { font-size: 11.5px; fill: var(--dg-accent); font-weight: 700; }
    .dg118b-small { font-size: 11px; }
    .dg118b-head  { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg118b-flow  { stroke: var(--dg-accent); stroke-width: 3; fill: none; stroke-dasharray: 8 6; animation: dg118bflow 1.2s linear infinite; }
    .dg118b-tip   { fill: var(--dg-accent); }
    .dg118b-in    { stroke: var(--dg-cool); stroke-width: 3; fill: none; animation: dg118bin 10s ease-in-out infinite; }
    .dg118b-intip { fill: var(--dg-cool); animation: dg118bin 10s ease-in-out infinite; }
    .dg118b-pulse { stroke: var(--dg-accent); stroke-width: 2.5; fill: none; opacity: 0; animation: dg118bpulse 5s ease-in-out infinite; }
    .dg118b-p2 { animation-delay: 1s; }
    .dg118b-p3 { animation-delay: 2s; }
    .dg118b-p4 { animation-delay: 3s; }
    .dg118b-p5 { animation-delay: 4s; }
    @keyframes dg118bflow  { to { stroke-dashoffset: -28 } }
    @keyframes dg118bin    { 0%, 45% { opacity: 1 } 60%, 90% { opacity: .15 } 100% { opacity: 1 } }
    @keyframes dg118bpulse { 0% { opacity: 0 } 10% { opacity: 1 } 24% { opacity: 1 } 34%, 100% { opacity: 0 } }
  </style>

  <text x="20" y="13" class="dg118b-sub">Inhaled exposure (may stop)</text>
  <line x1="88" y1="18" x2="88" y2="36" class="dg118b-in"/>
  <polygon points="81,36 95,36 88,47" class="dg118b-intip"/>

  <rect x="10"  y="48" width="176" height="56" rx="10" class="dg118b-box"/>
  <rect x="10"  y="48" width="176" height="56" rx="10" class="dg118b-pulse"/>
  <text x="98" y="72" text-anchor="middle" class="dg118b-lbl">Dust or fiber retained</text>
  <text x="98" y="90" text-anchor="middle" class="dg118b-sub">stays in the lung</text>

  <rect x="232" y="48" width="176" height="56" rx="10" class="dg118b-box"/>
  <rect x="232" y="48" width="176" height="56" rx="10" class="dg118b-pulse dg118b-p2"/>
  <text x="320" y="72" text-anchor="middle" class="dg118b-lbl">Macrophages try to</text>
  <text x="320" y="90" text-anchor="middle" class="dg118b-lbl">phagocytose it</text>

  <rect x="454" y="48" width="176" height="56" rx="10" class="dg118b-box"/>
  <rect x="454" y="48" width="176" height="56" rx="10" class="dg118b-pulse dg118b-p3"/>
  <text x="542" y="72" text-anchor="middle" class="dg118b-lbl">Mediators released</text>
  <text x="542" y="90" text-anchor="middle" class="dg118b-sub">persistently, not once</text>

  <rect x="454" y="150" width="176" height="56" rx="10" class="dg118b-box"/>
  <rect x="454" y="150" width="176" height="56" rx="10" class="dg118b-pulse dg118b-p4"/>
  <text x="542" y="174" text-anchor="middle" class="dg118b-lbl">More inflammatory cells,</text>
  <text x="542" y="192" text-anchor="middle" class="dg118b-lbl">fibroblasts activated</text>

  <rect x="120" y="150" width="288" height="56" rx="10" class="dg118b-box"/>
  <rect x="120" y="150" width="288" height="56" rx="10" class="dg118b-pulse dg118b-p5"/>
  <text x="264" y="174" text-anchor="middle" class="dg118b-lbl">Fibroblasts lay down collagen</text>
  <text x="264" y="192" text-anchor="middle" class="dg118b-sub">interstitial fibrosis: irreversible</text>

  <path d="M186 76 H220" class="dg118b-flow"/>
  <polygon points="220,69 232,76 220,83" class="dg118b-tip"/>
  <path d="M408 76 H442" class="dg118b-flow"/>
  <polygon points="442,69 454,76 442,83" class="dg118b-tip"/>
  <path d="M542 104 V138" class="dg118b-flow"/>
  <polygon points="535,138 549,138 542,150" class="dg118b-tip"/>
  <path d="M454 178 H420" class="dg118b-flow"/>
  <polygon points="420,171 420,185 408,178" class="dg118b-tip"/>
  <path d="M120 178 H70 V116" class="dg118b-flow"/>
  <polygon points="63,116 77,116 70,104" class="dg118b-tip"/>

  <text x="264" y="130" text-anchor="middle" class="dg118b-ctr">The loop keeps turning after exposure ends</text>

  <text x="10" y="232" class="dg118b-head">Asbestos</text>
  <text x="10" y="248" class="dg118b-small">Iron-catalyzed free radicals</text>
  <text x="10" y="263" class="dg118b-small">-&gt; disrupt DNA -&gt; malignancy</text>
  <text x="10" y="278" class="dg118b-small">ROS, proteases, cytokines,</text>
  <text x="10" y="293" class="dg118b-small">growth factors</text>

  <text x="232" y="232" class="dg118b-head">Coal</text>
  <text x="232" y="248" class="dg118b-small">Reactive oxygen species</text>
  <text x="232" y="263" class="dg118b-small">-&gt; interleukins, TNF</text>

  <text x="454" y="232" class="dg118b-head">Silica</text>
  <text x="454" y="248" class="dg118b-small">Inflammasome</text>
  <text x="454" y="263" class="dg118b-small">-&gt; especially IL-1, IL-18</text>
</svg>`
};

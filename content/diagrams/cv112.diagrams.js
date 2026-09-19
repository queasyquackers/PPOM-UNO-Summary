window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv112-air-trapping"] = {
  title: "Air trapping in emphysema",
  caption:
    "During exhalation, air leaves the alveoli through the terminal bronchiole. In a normal lung, elastic attachments from the surrounding alveolar walls pull the bronchiole open (radial traction), so air escapes. " +
    "In emphysema that elastic tissue has been destroyed, compliance is increased and elasticity decreased, so the bronchiole collapses on exhalation and air is trapped distally (Slide 14) - the reason RV and TLC rise and FEV1/FVC falls.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Two panels. Left, a normal terminal bronchiole held open by elastic tethers lets exhaled air flow out. Right, in emphysema the tethers are broken, the bronchiole collapses during exhalation and air stays trapped in enlarged alveoli.">
  <style>
    .dg112a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg112a-wall { fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg112a-tether { stroke: var(--dg-good); stroke-width: 2.5; }
    .dg112a-broken { stroke: var(--dg-warm); stroke-width: 2.5; stroke-dasharray: 4 4; }
    .dg112a-alv { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg112a-air { fill: var(--dg-cool); }
    .dg112a-h { font-size: 15px; font-weight: 700; }
    .dg112a-lbl { font-size: 12px; }
    .dg112a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg112a-warn { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg112a-out { animation: dg112aout 3.2s linear infinite; }
    .dg112a-out2 { animation: dg112aout 3.2s linear infinite 1.1s; }
    @keyframes dg112aout {
      0% { transform: translateX(0); opacity: 0 }
      10% { opacity: 1 }
      85% { opacity: 1 }
      100% { transform: translateX(-215px); opacity: 0 }
    }
    .dg112a-stuck { animation: dg112astuck 3.2s ease-in-out infinite; }
    @keyframes dg112astuck {
      0%, 100% { transform: translateX(0) }
      50% { transform: translateX(-62px) }
    }
    .dg112a-pulse { animation: dg112apulse 3.2s ease-in-out infinite; }
    @keyframes dg112apulse { 0%, 100% { opacity: .55 } 50% { opacity: 1 } }
  </style>

  <rect x="10" y="10" width="300" height="270" rx="14" class="dg112a-panel"/>
  <rect x="330" y="10" width="300" height="270" rx="14" class="dg112a-panel"/>
  <text x="26" y="36" class="dg112a-h">Normal lung</text>
  <text x="346" y="36" class="dg112a-h">Emphysema</text>

  <line x1="100" y1="120" x2="100" y2="92" class="dg112a-tether"/>
  <line x1="150" y1="120" x2="150" y2="92" class="dg112a-tether"/>
  <line x1="200" y1="120" x2="200" y2="92" class="dg112a-tether"/>
  <line x1="100" y1="160" x2="100" y2="188" class="dg112a-tether"/>
  <line x1="150" y1="160" x2="150" y2="188" class="dg112a-tether"/>
  <line x1="200" y1="160" x2="200" y2="188" class="dg112a-tether"/>
  <line x1="40" y1="120" x2="240" y2="120" class="dg112a-wall"/>
  <line x1="40" y1="160" x2="240" y2="160" class="dg112a-wall"/>
  <circle cx="262" cy="126" r="16" class="dg112a-alv"/>
  <circle cx="262" cy="158" r="16" class="dg112a-alv"/>
  <circle cx="286" cy="142" r="14" class="dg112a-alv"/>
  <g class="dg112a-out"><circle cx="268" cy="140" r="5" class="dg112a-air"/></g>
  <g class="dg112a-out2"><circle cx="268" cy="140" r="5" class="dg112a-air"/></g>
  <text x="112" y="84" class="dg112a-lbl">elastic tethers</text>
  <text x="40" y="216" class="dg112a-lbl">Radial traction holds the</text>
  <text x="40" y="232" class="dg112a-lbl">bronchiole open on exhalation</text>
  <text x="40" y="256" class="dg112a-sub">air leaves toward the mouth (left)</text>

  <line x1="420" y1="120" x2="420" y2="104" class="dg112a-broken"/>
  <line x1="470" y1="112" x2="470" y2="96" class="dg112a-broken"/>
  <line x1="420" y1="160" x2="420" y2="176" class="dg112a-broken"/>
  <line x1="470" y1="168" x2="470" y2="184" class="dg112a-broken"/>
  <path d="M360,120 L440,120 Q480,139 520,120 L550,120" class="dg112a-wall"/>
  <path d="M360,160 L440,160 Q480,141 520,160 L550,160" class="dg112a-wall"/>
  <circle cx="584" cy="140" r="34" class="dg112a-alv"/>
  <g class="dg112a-stuck">
    <circle cx="578" cy="130" r="5" class="dg112a-air"/>
    <circle cx="592" cy="150" r="5" class="dg112a-air"/>
    <circle cx="570" cy="152" r="5" class="dg112a-air"/>
  </g>
  <text x="400" y="84" class="dg112a-lbl">tethers destroyed</text>
  <text x="462" y="200" class="dg112a-warn dg112a-pulse">collapse</text>
  <text x="360" y="224" class="dg112a-lbl">Compliance up, elasticity down:</text>
  <text x="360" y="240" class="dg112a-lbl">bronchiole collapses on exhalation</text>
  <text x="360" y="262" class="dg112a-warn">air trapped distally</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv112-asthma-phases"] = {
  title: "Early and late phase in atopic asthma",
  caption:
    "On re-exposure, allergen cross-links IgE on submucosal mast cells. The early phase follows within minutes: bronchoconstriction (partly through vagal reflexes), increased mucus, vasodilation and vascular permeability. " +
    "The late phase follows as leukocytes, especially eosinophils, plus neutrophils and T cells are recruited. Repeated cycles remodel the wall, which can leave chronic irreversible obstruction (Slides 34-35, 39-40). The lecture gives no exact late-phase timing, so none is shown.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A graph of airflow obstruction over time after allergen exposure, with a sharp early peak labelled mast cell mediators and bronchoconstriction, followed by a broader late peak labelled eosinophils, neutrophils and T cells, and a note that repeated cycles cause airway remodeling.">
  <style>
    .dg112b-axis { stroke: var(--dg-ink); stroke-width: 2; }
    .dg112b-curve { fill: none; stroke: var(--dg-accent); stroke-width: 4; stroke-linecap: round; }
    .dg112b-early { fill: var(--dg-warm); opacity: .16; }
    .dg112b-late { fill: var(--dg-cool); opacity: .16; }
    .dg112b-h { font-size: 13px; font-weight: 700; }
    .dg112b-lbl { font-size: 12px; }
    .dg112b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg112b-ew { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg112b-lw { font-size: 13px; font-weight: 700; fill: var(--dg-cool); }
    .dg112b-scan { stroke: var(--dg-good); stroke-width: 2; stroke-dasharray: 5 4; animation: dg112bscan 6s linear infinite; }
    @keyframes dg112bscan {
      0% { transform: translateX(0); opacity: 0 }
      5% { opacity: 1 }
      92% { opacity: 1 }
      100% { transform: translateX(470px); opacity: 0 }
    }
    .dg112b-e { animation: dg112bglow 6s ease-in-out infinite; }
    .dg112b-l { animation: dg112bglow 6s ease-in-out infinite 2.6s; }
    @keyframes dg112bglow { 0%, 100% { opacity: .5 } 20% { opacity: 1 } 40% { opacity: .5 } }
  </style>

  <rect x="70" y="60" width="170" height="190" class="dg112b-early"/>
  <rect x="250" y="60" width="300" height="190" class="dg112b-late"/>
  <line x1="70" y1="250" x2="600" y2="250" class="dg112b-axis"/>
  <line x1="70" y1="250" x2="70" y2="50" class="dg112b-axis"/>
  <text x="14" y="44" class="dg112b-lbl">Airflow obstruction</text>
  <text x="520" y="272" class="dg112b-lbl">time</text>
  <text x="60" y="272" class="dg112b-sub">allergen re-exposure</text>

  <path d="M70,240 C110,238 130,90 160,90 C190,90 205,215 250,215 C300,215 340,130 390,130 C450,130 500,228 560,236" class="dg112b-curve"/>
  <line x1="80" y1="56" x2="80" y2="250" class="dg112b-scan"/>

  <g class="dg112b-e">
    <text x="82" y="78" class="dg112b-ew">EARLY PHASE (minutes)</text>
  </g>
  <text x="178" y="112" class="dg112b-lbl">mast cell mediators</text>
  <text x="178" y="128" class="dg112b-lbl">bronchoconstriction</text>
  <text x="178" y="144" class="dg112b-sub">mucus, vasodilation,</text>
  <text x="178" y="158" class="dg112b-sub">vascular permeability</text>

  <g class="dg112b-l">
    <text x="330" y="78" class="dg112b-lw">LATE PHASE</text>
  </g>
  <text x="410" y="118" class="dg112b-lbl">recruited leukocytes:</text>
  <text x="410" y="134" class="dg112b-lbl">eosinophils (IL-5),</text>
  <text x="410" y="150" class="dg112b-lbl">neutrophils, T cells</text>

  <text x="150" y="292" class="dg112b-sub">Repeated cycles -> airway remodeling -> chronic irreversible component</text>
</svg>`,
};

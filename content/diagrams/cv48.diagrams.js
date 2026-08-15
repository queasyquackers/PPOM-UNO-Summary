/*
 * cv48 - Diffusion of Gases Through the Respiratory Membrane
 * (Lecture #48, J. Leheste, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The oxygen cascade: ambient air -> trachea -> alveolus -> artery.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv48-po2-cascade"] = {
  title: "The PO2 cascade, station by station",
  caption:
    "A single parcel of oxygen is followed from room air to the systemic artery, and the step it takes at each station is the point. " +
    "<b>Ambient air</b> is 160 mmHg with essentially no CO2. " +
    "<b>Humidification in the trachea</b> costs 10 mmHg because water vapour occupies 47 mmHg of the 760: (760 &#8722; 47) &#215; 0.21 = 150. " +
    "<b>Alveolar gas</b> falls to 100 with PCO2 now 40, after mixing with dead-space gas and unloading CO2. " +
    "<b>End-capillary blood</b> can run slightly higher, 105&#8211;108 in some texts, yet <b>systemic arterial</b> blood is still 100 because bronchial blood flow and a small portion of coronary venous blood shunt deoxygenated blood back into the freshly oxygenated stream. " +
    "All values are this lecture's (Slides 10&#8211;11).",
  svg: `
<svg viewBox="0 0 640 262" role="img" aria-label="A descending staircase of oxygen partial pressures with a moving marker: ambient air 160 millimetres of mercury, humidified tracheal air 150, alveolar gas 100 with a carbon dioxide partial pressure of 40, end pulmonary capillary blood about 105 to 108, and systemic arterial blood back down to 100 after bronchial and coronary venous blood shunts in.">
  <style>
    .dg48a-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg48a-step { fill: none; stroke: var(--dg-accent); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    .dg48a-node { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.2; }
    .dg48a-drop { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 4; }
    .dg48a-val  { font-size: 14px; font-weight: 700; fill: var(--dg-ink); }
    .dg48a-lbl  { font-size: 10px; fill: var(--dg-ink); }
    .dg48a-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg48a-co2  { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }
    .dg48a-shunt{ stroke: var(--dg-warm); fill: var(--dg-warm); }

    .dg48a-o2 { fill: var(--dg-cool); animation: dg48aTravel 9s ease-in-out infinite; }
    @keyframes dg48aTravel {
      0%   { transform: translate(62px, 70px); opacity: 0 }
      5%   { transform: translate(62px, 70px); opacity: 1 }
      24%  { transform: translate(190px, 79px) }
      48%  { transform: translate(325px, 124px) }
      70%  { transform: translate(452px, 118px) }
      92%  { transform: translate(570px, 124px); opacity: 1 }
      100% { transform: translate(570px, 124px); opacity: 0 }
    }
    .dg48a-mix { animation: dg48aMix 9s ease-in-out infinite; }
    @keyframes dg48aMix { 0%, 66% { opacity: .2 } 76%, 88% { opacity: 1 } 96%, 100% { opacity: .2 } }
  </style>

  <text x="16" y="20" class="dg48a-lbl" font-weight="700">PO2 (mm Hg)</text>
  <rect x="16" y="30" width="608" height="172" rx="8" class="dg48a-plot"/>

  <line x1="30" y1="70" x2="610" y2="70" class="dg48a-drop"/>
  <line x1="30" y1="124" x2="610" y2="124" class="dg48a-drop"/>

  <polyline points="62,70 190,79 325,124 452,118 570,124" class="dg48a-step"/>

  <circle cx="62"  cy="70"  r="6" class="dg48a-node"/>
  <circle cx="190" cy="79"  r="6" class="dg48a-node"/>
  <circle cx="325" cy="124" r="6" class="dg48a-node"/>
  <circle cx="452" cy="118" r="6" class="dg48a-node"/>
  <circle cx="570" cy="124" r="6" class="dg48a-node"/>

  <circle cx="0" cy="0" r="9" class="dg48a-o2" opacity=".85"/>

  <text x="62"  y="58"  class="dg48a-val" text-anchor="middle">160</text>
  <text x="190" y="66"  class="dg48a-val" text-anchor="middle">150</text>
  <text x="325" y="146" class="dg48a-val" text-anchor="middle">100</text>
  <text x="452" y="106" class="dg48a-val" text-anchor="middle">105&#8211;108</text>
  <text x="570" y="146" class="dg48a-val" text-anchor="middle">100</text>

  <text x="62"  y="176" class="dg48a-lbl" text-anchor="middle">ambient air</text>
  <text x="62"  y="189" class="dg48a-tiny" text-anchor="middle">PCO2 ~ 0</text>
  <text x="190" y="176" class="dg48a-lbl" text-anchor="middle">humidified trachea</text>
  <text x="190" y="189" class="dg48a-tiny" text-anchor="middle">(760 &#8722; 47) &#215; 0.21</text>
  <text x="325" y="176" class="dg48a-lbl" text-anchor="middle">alveolar gas</text>
  <text x="325" y="189" class="dg48a-co2" text-anchor="middle">PCO2 40</text>
  <text x="452" y="176" class="dg48a-lbl" text-anchor="middle">end capillary</text>
  <text x="452" y="189" class="dg48a-tiny" text-anchor="middle">some texts</text>
  <text x="570" y="176" class="dg48a-lbl" text-anchor="middle">systemic artery</text>
  <text x="570" y="189" class="dg48a-co2" text-anchor="middle">PCO2 40</text>

  <g class="dg48a-mix">
    <line x1="512" y1="228" x2="536" y2="136" class="dg48a-shunt" stroke-width="4" stroke-linecap="round"/>
    <polygon points="530,140 540,124 545,142" class="dg48a-shunt"/>
  </g>
  <text x="16" y="228" class="dg48a-tiny">Each step down has a named cause; the A/a difference widens with disease.</text>
  <text x="300" y="248" class="dg48a-tiny">shunt: bronchial flow + a portion of coronary venous blood</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Diffusion-limited vs perfusion-limited exchange along the capillary.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv48-diffusion-vs-perfusion"] = {
  title: "Diffusion- vs perfusion-limited exchange",
  caption:
    "A time cursor drags one red cell along the whole pulmonary capillary while three gases try to equilibrate with alveolar gas (dashed line, 100 mmHg). " +
    "<b>Normal O2 and CO2</b> reach the alveolar value after roughly one third of the transit and then flatten &#8212; nothing more can be transferred no matter how long the cell stays, so delivery is limited only by how fast blood arrives: <b>perfusion-limited</b>. " +
    "<b>O2 in fibrosis or emphysema</b> climbs too slowly and the gradient never closes: <b>diffusion-limited</b>. " +
    "<b>Carbon monoxide</b> stays flat at the bottom for a different reason &#8212; it is snatched by haemoglobin the moment it arrives, so it never exists free in solution and never builds a partial pressure. " +
    "Mixed venous PO2 (45 mmHg) and the one-third rule are this lecture's numbers (Slides 12&#8211;13).",
  svg: `
<svg viewBox="0 0 640 286" role="img" aria-label="Partial pressure plotted against distance along the pulmonary capillary. A dashed alveolar line sits at 100 millimetres of mercury. The normal oxygen and carbon dioxide curve rises from a mixed venous value of 45 and meets the alveolar line after one third of the capillary, then runs flat, which is perfusion limitation. The fibrosis and emphysema curve rises far more slowly and never reaches the alveolar line. The carbon monoxide curve stays almost flat near the bottom because carbon monoxide binds haemoglobin immediately and never dissolves. A moving cursor sweeps all three curves at once.">
  <style>
    .dg48b-plot { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg48b-alv  { stroke: var(--dg-accent); stroke-width: 1.6; stroke-dasharray: 6 4; }
    .dg48b-good { fill: none; stroke: var(--dg-good); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg48b-warm { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg48b-cool { fill: none; stroke: var(--dg-cool); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg48b-ax   { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg48b-third{ stroke: var(--dg-accent); stroke-width: 1.2; stroke-dasharray: 4 4; opacity: .8; }
    .dg48b-lbl  { font-size: 10px; fill: var(--dg-ink); }
    .dg48b-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg48b-key  { font-size: 10px; font-weight: 700; }
    .dg48b-cur  { stroke: var(--dg-ink); stroke-width: 1.4; opacity: .45; }

    .dg48b-sweep { animation: dg48bSweep 8s linear infinite; }
    @keyframes dg48bSweep { from { transform: translateX(0) } to { transform: translateX(490px) } }

    .dg48b-dotP { fill: var(--dg-good); animation: dg48bP 8s linear infinite; }
    @keyframes dg48bP {
      0%     { transform: translate(70px, 150px) }
      8.2%   { transform: translate(110px, 105px) }
      16.3%  { transform: translate(150px, 78px) }
      24.5%  { transform: translate(190px, 64px) }
      33.3%  { transform: translate(233px, 60px) }
      100%   { transform: translate(560px, 60px) }
    }
    .dg48b-dotF { fill: var(--dg-warm); animation: dg48bF 8s linear infinite; }
    @keyframes dg48bF {
      0%    { transform: translate(70px, 150px) }
      33.3% { transform: translate(233px, 128px) }
      67.3% { transform: translate(400px, 113px) }
      100%  { transform: translate(560px, 105px) }
    }
    .dg48b-dotC { fill: var(--dg-cool); animation: dg48bC 8s linear infinite; }
    @keyframes dg48bC {
      0%    { transform: translate(70px, 182px) }
      33.3% { transform: translate(233px, 176px) }
      67.3% { transform: translate(400px, 171px) }
      100%  { transform: translate(560px, 168px) }
    }
  </style>

  <text x="14" y="20" class="dg48b-lbl" font-weight="700">partial pressure in capillary blood (mm Hg)</text>
  <rect x="70" y="44" width="490" height="152" rx="6" class="dg48b-plot"/>

  <line x1="70" y1="60" x2="560" y2="60" class="dg48b-alv"/>
  <text x="566" y="56" class="dg48b-tiny">alveolar</text>
  <text x="566" y="68" class="dg48b-tiny">PO2 100</text>

  <line x1="233" y1="44" x2="233" y2="196" class="dg48b-third"/>
  <text x="237" y="88" class="dg48b-tiny">1/3 of transit</text>

  <polyline points="70,150 110,105 150,78 190,64 233,60 560,60" class="dg48b-good"/>
  <polyline points="70,150 233,128 400,113 560,105" class="dg48b-warm"/>
  <polyline points="70,182 233,176 400,171 560,168" class="dg48b-cool"/>

  <g class="dg48b-sweep"><line x1="70" y1="44" x2="70" y2="196" class="dg48b-cur"/></g>
  <circle cx="0" cy="0" r="6" class="dg48b-dotP"/>
  <circle cx="0" cy="0" r="6" class="dg48b-dotF"/>
  <circle cx="0" cy="0" r="6" class="dg48b-dotC"/>

  <text x="34" y="154" class="dg48b-lbl" text-anchor="middle">45</text>
  <text x="14" y="170" class="dg48b-tiny">mixed</text>
  <text x="14" y="181" class="dg48b-tiny">venous</text>

  <line x1="70" y1="196" x2="560" y2="196" class="dg48b-ax"/>
  <text x="70" y="212" class="dg48b-tiny">start of capillary</text>
  <text x="560" y="212" class="dg48b-tiny" text-anchor="end">end of capillary</text>
  <text x="315" y="228" class="dg48b-tiny" text-anchor="middle">transit time 0.75 s at rest, 0.25 s at maximal exercise</text>

  <rect x="70" y="242" width="12" height="4" rx="2" fill="var(--dg-good)"/>
  <text x="90" y="248" class="dg48b-key" fill="var(--dg-good)">O2 &amp; CO2, normal</text>
  <text x="90" y="262" class="dg48b-tiny">equilibrates early &#8594; PERFUSION-limited</text>

  <rect x="252" y="242" width="12" height="4" rx="2" fill="var(--dg-warm)"/>
  <text x="272" y="248" class="dg48b-key" fill="var(--dg-warm)">O2 in fibrosis / emphysema</text>
  <text x="272" y="262" class="dg48b-tiny">gap persists &#8594; DIFFUSION-limited</text>

  <rect x="70" y="272" width="12" height="4" rx="2" fill="var(--dg-cool)"/>
  <text x="90" y="278" class="dg48b-key" fill="var(--dg-cool)">carbon monoxide</text>
  <text x="200" y="278" class="dg48b-tiny">bound to Hb instantly, so it never exerts a partial pressure</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Fick's law read off the barrier: thickness vs surface area.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv48-fick-barrier"] = {
  title: "Fick's law: what fibrosis and emphysema each break",
  caption:
    "The same equation, V = D &#215; A &#215; &#916;P / &#916;x, drawn three times so the two lesions separate cleanly. " +
    "In the <b>normal</b> panel a thin barrier and a large alveolar surface let molecules stream across quickly. " +
    "<b>Fibrosis</b> (and pulmonary oedema) thicken the barrier: &#916;x sits in the denominator, so transfer slows and some molecules never make it. " +
    "<b>Emphysema</b> destroys alveolar walls: A sits in the numerator, so fewer molecules can cross even though the barrier itself is thin. " +
    "Both lower lung diffusion capacity and both push oxygen &#8212; already the poorer diffuser, with a diffusion coefficient about 50 times below CO2 &#8212; toward diffusion limitation (Slides 7&#8211;8, 12).",
  svg: `
<svg viewBox="0 0 640 274" role="img" aria-label="Three side-by-side alveolus and capillary panels. In the normal panel a thin membrane and four alveolar sacs let many gas molecules fall quickly into the capillary. In the fibrosis panel the membrane is drawn much thicker and the molecules cross slowly, some stalling inside the barrier. In the emphysema panel the alveolar walls are destroyed leaving one large sac, so the surface area is small and only a few molecules cross even though the membrane is thin.">
  <style>
    .dg48c-panel { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg48c-air   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg48c-cap   { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 1.4; }
    .dg48c-memb  { fill: var(--dg-accent); opacity: .28; }
    .dg48c-thick { fill: var(--dg-warm); opacity: .34; }
    .dg48c-mol   { fill: var(--dg-cool); }
    .dg48c-hd    { font-size: 11px; font-weight: 700; fill: var(--dg-ink); }
    .dg48c-lbl   { font-size: 9.5px; fill: var(--dg-muted); }
    .dg48c-eq    { font-size: 13px; font-weight: 700; fill: var(--dg-ink); }
    .dg48c-up    { font-size: 10px; font-weight: 700; fill: var(--dg-warm); }

    .dg48c-f1 { animation: dg48cFast 3.2s linear infinite; }
    .dg48c-f2 { animation: dg48cFast 3.2s linear infinite .5s; }
    .dg48c-f3 { animation: dg48cFast 3.2s linear infinite 1s; }
    .dg48c-f4 { animation: dg48cFast 3.2s linear infinite 1.6s; }
    @keyframes dg48cFast {
      0%   { transform: translateY(0); opacity: 0 }
      12%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateY(78px); opacity: 0 }
    }
    .dg48c-s1 { animation: dg48cSlow 6.4s ease-in infinite; }
    .dg48c-s2 { animation: dg48cSlow 6.4s ease-in infinite 2.1s; }
    @keyframes dg48cSlow {
      0%   { transform: translateY(0); opacity: 0 }
      15%  { opacity: 1 }
      70%  { transform: translateY(46px); opacity: .9 }
      100% { transform: translateY(78px); opacity: 0 }
    }
    .dg48c-stall { animation: dg48cStall 6.4s ease-in-out infinite; }
    @keyframes dg48cStall {
      0%   { transform: translateY(0); opacity: 0 }
      20%  { transform: translateY(34px); opacity: 1 }
      75%  { transform: translateY(40px); opacity: .85 }
      100% { transform: translateY(34px); opacity: 0 }
    }
    .dg48c-e1 { animation: dg48cFew 4.6s linear infinite; }
    .dg48c-e2 { animation: dg48cFew 4.6s linear infinite 2.3s; }
    @keyframes dg48cFew {
      0%   { transform: translateY(0); opacity: 0 }
      15%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateY(78px); opacity: 0 }
    }
  </style>

  <text x="16" y="20" class="dg48c-eq">V = D &#215; A &#215; &#916;P / &#916;x</text>
  <text x="196" y="20" class="dg48c-lbl">A = alveolar surface area &#160;&#160; &#916;x = barrier thickness</text>

  <rect x="16" y="32" width="192" height="182" rx="8" class="dg48c-panel"/>
  <rect x="224" y="32" width="192" height="182" rx="8" class="dg48c-panel"/>
  <rect x="432" y="32" width="192" height="182" rx="8" class="dg48c-panel"/>

  <rect x="32" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="74" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="116" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="158" y="46" width="34" height="44" rx="8" class="dg48c-air"/>
  <rect x="32" y="112" width="160" height="9" class="dg48c-memb"/>
  <rect x="32" y="150" width="160" height="40" rx="12" class="dg48c-cap"/>
  <text x="112" y="106" class="dg48c-lbl" text-anchor="middle">&#916;x thin</text>
  <text x="112" y="176" class="dg48c-lbl" text-anchor="middle">capillary</text>
  <text x="112" y="230" class="dg48c-hd" text-anchor="middle">Normal</text>
  <text x="112" y="245" class="dg48c-lbl" text-anchor="middle">large A, thin &#916;x</text>
  <circle cx="50"  cy="96" r="5" class="dg48c-mol dg48c-f1"/>
  <circle cx="92"  cy="96" r="5" class="dg48c-mol dg48c-f2"/>
  <circle cx="134" cy="96" r="5" class="dg48c-mol dg48c-f3"/>
  <circle cx="174" cy="96" r="5" class="dg48c-mol dg48c-f4"/>

  <rect x="240" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="282" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="324" y="46" width="36" height="44" rx="8" class="dg48c-air"/>
  <rect x="366" y="46" width="34" height="44" rx="8" class="dg48c-air"/>
  <rect x="240" y="108" width="160" height="30" class="dg48c-thick"/>
  <rect x="240" y="150" width="160" height="40" rx="12" class="dg48c-cap"/>
  <text x="320" y="104" class="dg48c-up" text-anchor="middle">&#916;x &#8593;&#8593;</text>
  <text x="320" y="230" class="dg48c-hd" text-anchor="middle">Fibrosis / oedema</text>
  <text x="320" y="245" class="dg48c-lbl" text-anchor="middle">thicker barrier &#8594; V &#8595;</text>
  <circle cx="266" cy="96" r="5" class="dg48c-mol dg48c-s1"/>
  <circle cx="342" cy="96" r="5" class="dg48c-mol dg48c-s2"/>
  <circle cx="304" cy="96" r="5" class="dg48c-mol dg48c-stall"/>

  <rect x="448" y="46" width="160" height="44" rx="14" class="dg48c-air"/>
  <rect x="448" y="112" width="160" height="9" class="dg48c-memb"/>
  <rect x="448" y="150" width="160" height="40" rx="12" class="dg48c-cap"/>
  <text x="528" y="72" class="dg48c-up" text-anchor="middle">A &#8595;&#8595;</text>
  <text x="528" y="106" class="dg48c-lbl" text-anchor="middle">walls destroyed</text>
  <text x="528" y="230" class="dg48c-hd" text-anchor="middle">Emphysema</text>
  <text x="528" y="245" class="dg48c-lbl" text-anchor="middle">less surface &#8594; V &#8595;</text>
  <circle cx="486" cy="96" r="5" class="dg48c-mol dg48c-e1"/>
  <circle cx="566" cy="96" r="5" class="dg48c-mol dg48c-e2"/>

  <text x="16" y="266" class="dg48c-lbl">Both lesions lower lung diffusion capacity (DL) and push O2 toward diffusion limitation.</text>
</svg>`,
};

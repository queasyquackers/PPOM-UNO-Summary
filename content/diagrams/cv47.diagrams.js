/*
 * cv47 - Physiology: Airways and Pulmonary Blood Flow
 * (Lecture #47, J. Leheste, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The respiratory tree is a gradient, not a list: one tube narrowing from
//    generation 0 to 23 while total cross-sectional area explodes.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv47-airway-generations"] = {
  title: "Generation 0 to 23: where conduction stops and exchange starts",
  caption:
    "Follow one packet of air from the trachea (generation 0, at the 3rd-4th thoracic vertebra) to the alveolar sacs (generation 23). " +
    "Cartilage support stops at generation 10, so everything past that point depends on smooth muscle tone to stay open. " +
    "Generation 16, the terminal bronchiole, is the hard boundary: everything above it only conducts, everything below it exchanges gas. " +
    "The wedge underneath is the point of the whole design - the individual tube gets smaller, but the total cross-sectional area grows until the unfolded lung is the size of a tennis court, which is what makes diffusion across those tiny distances work (Slides 5, 11).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="The respiratory tree drawn as a single tube narrowing left to right from the trachea at generation zero to the alveolar sacs at generation twenty-three. Cartilage support stops at generation ten. A bar underneath is split at generation sixteen, the terminal bronchiole: the conducting zone runs from generation zero to sixteen and does no gas exchange, while the respiratory zone runs to generation twenty-three and does. A wedge at the bottom shows total cross-sectional area growing from small to enormous toward the respiratory zone.">
  <style>
    .dg47a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg47a-lbl  { font-size: 11px; }
    .dg47a-hd   { font-size: 11.5px; font-weight: 700; letter-spacing: .05em; }
    .dg47a-tube { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg47a-cond { fill: var(--dg-accent); }
    .dg47a-resp { fill: var(--dg-good); }
    .dg47a-area { fill: var(--dg-cool); }
    .dg47a-mark { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 4 4; opacity: .55; }
    .dg47a-air  { animation: dg47aFlow 7s linear infinite; }
    .dg47a-air2 { animation: dg47aFlow 7s linear infinite 2.3s; }
    .dg47a-air3 { animation: dg47aFlow 7s linear infinite 4.6s; }
    @keyframes dg47aFlow {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      88%  { opacity: 1 }
      100% { transform: translateX(494px); opacity: 0 }
    }
    .dg47a-pulse { animation: dg47aPulse 7s ease-in-out infinite; }
    @keyframes dg47aPulse { 0%,100% { opacity: .20 } 55% { opacity: .48 } }
  </style>

  <text x="20" y="16" class="dg47a-sub">one-way trip: each tube gets narrower, the TOTAL cross-section explodes</text>

  <text x="70" y="34" class="dg47a-lbl">trachea (gen 0)</text>
  <text x="287" y="34" class="dg47a-lbl" text-anchor="middle">cartilage ends (gen 10)</text>
  <text x="578" y="34" class="dg47a-lbl" text-anchor="end">alveolar sacs (gen 23)</text>

  <polygon points="70,44 570,65 570,75 70,96" class="dg47a-tube"/>

  <g class="dg47a-air"><circle cx="78" cy="70" r="5" fill="var(--dg-accent)"/></g>
  <g class="dg47a-air2"><circle cx="78" cy="70" r="5" fill="var(--dg-accent)"/></g>
  <g class="dg47a-air3"><circle cx="78" cy="70" r="5" fill="var(--dg-accent)"/></g>

  <line x1="287" y1="42" x2="287" y2="132" class="dg47a-mark"/>
  <line x1="418" y1="42" x2="418" y2="132" class="dg47a-mark"/>

  <text x="418" y="110" class="dg47a-lbl" text-anchor="middle">gen 16 = terminal bronchiole</text>

  <rect x="70" y="118" width="348" height="14" rx="7" class="dg47a-cond"/>
  <rect x="418" y="118" width="152" height="14" rx="7" class="dg47a-resp"/>

  <text x="70" y="150" class="dg47a-hd" fill="var(--dg-accent)">CONDUCTING ZONE</text>
  <text x="70" y="164" class="dg47a-sub">humidify, warm, filter - no gas exchange</text>
  <text x="428" y="150" class="dg47a-hd" fill="var(--dg-good)">RESPIRATORY</text>
  <text x="428" y="164" class="dg47a-sub">gas exchange</text>

  <text x="70" y="196" class="dg47a-sub">total cross-sectional area</text>
  <text x="570" y="196" class="dg47a-sub" text-anchor="end">unfolded lung = a tennis court</text>
  <polygon points="70,210 570,182 570,254 70,214" class="dg47a-area dg47a-pulse"/>
  <text x="70" y="276" class="dg47a-sub">small</text>
  <text x="570" y="276" class="dg47a-sub" text-anchor="end">enormous - short distances, huge area</text>

  <text x="20" y="294" class="dg47a-sub">cilia reach the respiratory bronchioles; smooth muscle reaches the alveolar ducts</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. One smooth muscle ring, two opposite autonomic commands.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv47-airway-tone"] = {
  title: "Autonomic control of airway caliber",
  caption:
    "The same ring of bronchiolar smooth muscle is the target of both divisions. " +
    "Sympathetic outflow from T1-T4 acts on beta-2 adrenergic receptors and widens the lumen - which is why epinephrine, isoproterenol and albuterol are the drugs used to open an airway, and why fight-or-flight comes with easier breathing. " +
    "Parasympathetic outflow travels in the vagus nerve (CN X) to muscarinic acetylcholine receptors and narrows it. " +
    "Both lumens are drawn at their resting size and animate toward their extreme, so the contrast reads even when the animation is stopped (Slides 8-9).",
  svg: `
<svg viewBox="0 0 640 260" role="img" aria-label="Two bronchiole cross-sections side by side. On the left, sympathetic outflow from spinal levels T1 to T4 acting on beta-2 adrenergic receptors, with epinephrine, isoproterenol and albuterol, produces a wide lumen with a thin muscle ring. On the right, parasympathetic outflow in the vagus nerve acting on muscarinic acetylcholine receptors produces a narrow lumen with a thick muscle ring, triggered by allergy, viral infection or reflux.">
  <style>
    .dg47b-sub { font-size: 10.5px; fill: var(--dg-muted); }
    .dg47b-lbl { font-size: 11px; }
    .dg47b-hd  { font-size: 12px; font-weight: 700; letter-spacing: .06em; }
    .dg47b-lum { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg47b-div { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg47b-open { animation: dg47bOpen 5.5s ease-in-out infinite; }
    .dg47b-shut { animation: dg47bShut 5.5s ease-in-out infinite; }
    @keyframes dg47bOpen { 0%,100% { transform: scale(1) } 50% { transform: scale(1.09) } }
    @keyframes dg47bShut { 0%,100% { transform: scale(1) } 50% { transform: scale(.72) } }
    .dg47b-sig { animation: dg47bSig 5.5s ease-in-out infinite; }
    @keyframes dg47bSig { 0%,100% { opacity: .4 } 50% { opacity: 1 } }
  </style>

  <text x="20" y="18" class="dg47b-sub">one smooth muscle ring, two opposite commands</text>

  <text x="20" y="46" class="dg47b-hd" fill="var(--dg-accent)">SYMPATHETIC</text>
  <text x="20" y="64" class="dg47b-lbl">spinal cord T1-T4</text>
  <text x="20" y="80" class="dg47b-lbl">beta-2 adrenergic receptors</text>
  <text x="20" y="96" class="dg47b-sub">epinephrine, isoproterenol, albuterol</text>

  <g transform="translate(160,164)">
    <circle r="54" fill="var(--dg-accent)" opacity=".8"/>
    <g class="dg47b-open"><circle r="46" class="dg47b-lum"/></g>
  </g>
  <text x="160" y="238" class="dg47b-lbl" text-anchor="middle">DILATION - wide lumen, low resistance</text>

  <line x1="320" y1="36" x2="320" y2="246" class="dg47b-div"/>

  <text x="620" y="46" class="dg47b-hd" fill="var(--dg-warm)" text-anchor="end">PARASYMPATHETIC</text>
  <text x="620" y="64" class="dg47b-lbl" text-anchor="end">vagus nerve (CN X)</text>
  <text x="620" y="80" class="dg47b-lbl" text-anchor="end">muscarinic ACh receptors</text>
  <text x="620" y="96" class="dg47b-sub" text-anchor="end">triggers: allergy, viral infection, reflux</text>

  <g transform="translate(480,164)">
    <circle r="54" fill="var(--dg-warm)" opacity=".8"/>
    <g class="dg47b-shut"><circle r="24" class="dg47b-lum"/></g>
  </g>
  <text x="480" y="238" class="dg47b-lbl" text-anchor="middle">CONSTRICTION - bothersome to fatal</text>

  <g class="dg47b-sig">
    <circle cx="160" cy="118" r="4" fill="var(--dg-accent)"/>
    <circle cx="480" cy="118" r="4" fill="var(--dg-warm)"/>
  </g>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Laplace: collapsing pressure is inversely proportional to radius, and
//    surfactant is the way out.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv47-laplace-surfactant"] = {
  title: "Surface tension, Laplace and surfactant",
  caption:
    "Water molecules lining an alveolus pull inward because the ones at the air-liquid boundary have nothing to bond with on the air side. " +
    "That inward pull is the collapsing pressure, and by the Laplace law it is inversely proportional to the radius: the smaller the alveolus, the closer the water molecules, the stronger the pull (middle panel, arrows longest). " +
    "Surfactant - dipalmitoyl phosphatidylcholine, a phospholipid made by type II pneumocytes - inserts between those water molecules and breaks the surface tension the way soap does, so the same small alveolus stays open, compliance rises and over-wetting is prevented (Slides 17-20).",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Three alveoli compared. A large alveolus has short inward arrows and a low collapsing pressure. A small alveolus has long inward arrows and a high collapsing pressure and is shown shrinking. The same small alveolus with surfactant molecules dotted around its lining has short inward arrows again and stays open. The formula for collapsing pressure equals two times surface tension divided by radius is written underneath.">
  <style>
    .dg47c-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg47c-lbl  { font-size: 11px; }
    .dg47c-hd   { font-size: 11.5px; font-weight: 700; }
    .dg47c-alv  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .dg47c-weak { stroke: var(--dg-muted); fill: var(--dg-muted); }
    .dg47c-str  { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg47c-safe { stroke: var(--dg-good); fill: var(--dg-good); }
    .dg47c-arm  { stroke-width: 4; stroke-linecap: round; }
    .dg47c-eq   { font-size: 14px; font-weight: 700; fill: var(--dg-accent); }
    .dg47c-squash { animation: dg47cSquash 6s ease-in-out infinite; }
    @keyframes dg47cSquash { 0%,100% { transform: scale(1) } 55% { transform: scale(.74) } }
    .dg47c-push { animation: dg47cPush 6s ease-in-out infinite; }
    @keyframes dg47cPush { 0%,100% { opacity: .45 } 55% { opacity: 1 } }
    .dg47c-soft { animation: dg47cSoft 6s ease-in-out infinite; }
    @keyframes dg47cSoft { 0%,100% { opacity: .35 } 55% { opacity: .7 } }
    .dg47c-dppc { animation: dg47cDppc 6s ease-in-out infinite; }
    @keyframes dg47cDppc { 0%,100% { opacity: .5 } 50% { opacity: 1 } }
  </style>

  <text x="20" y="18" class="dg47c-sub">same surface tension, three different outcomes</text>

  <circle cx="115" cy="125" r="58" class="dg47c-alv"/>
  <g class="dg47c-weak dg47c-soft">
    <line x1="115" y1="43" x2="115" y2="59" class="dg47c-arm"/>
    <polygon points="109,59 121,59 115,67"/>
    <line x1="115" y1="207" x2="115" y2="191" class="dg47c-arm"/>
    <polygon points="109,191 121,191 115,183"/>
    <line x1="33" y1="125" x2="49" y2="125" class="dg47c-arm"/>
    <polygon points="49,119 49,131 57,125"/>
    <line x1="197" y1="125" x2="181" y2="125" class="dg47c-arm"/>
    <polygon points="181,119 181,131 173,125"/>
  </g>
  <text x="115" y="212" class="dg47c-hd" text-anchor="middle">LARGE alveolus</text>
  <text x="115" y="230" class="dg47c-lbl" text-anchor="middle">big r, molecules far apart</text>
  <text x="115" y="246" class="dg47c-sub" text-anchor="middle">LOW collapsing pressure</text>

  <g transform="translate(320,125)">
    <g class="dg47c-squash"><circle r="32" class="dg47c-alv"/></g>
  </g>
  <g class="dg47c-str dg47c-push">
    <line x1="320" y1="51" x2="320" y2="85" class="dg47c-arm"/>
    <polygon points="314,85 326,85 320,93"/>
    <line x1="320" y1="199" x2="320" y2="165" class="dg47c-arm"/>
    <polygon points="314,165 326,165 320,157"/>
    <line x1="246" y1="125" x2="280" y2="125" class="dg47c-arm"/>
    <polygon points="280,119 280,131 288,125"/>
    <line x1="394" y1="125" x2="360" y2="125" class="dg47c-arm"/>
    <polygon points="360,119 360,131 352,125"/>
  </g>
  <text x="320" y="212" class="dg47c-hd" text-anchor="middle">SMALL alveolus</text>
  <text x="320" y="230" class="dg47c-lbl" text-anchor="middle">small r, molecules crowded</text>
  <text x="320" y="246" class="dg47c-sub" text-anchor="middle">HIGH collapsing pressure - collapses</text>

  <circle cx="525" cy="125" r="32" class="dg47c-alv"/>
  <g class="dg47c-dppc" fill="var(--dg-accent)">
    <circle cx="557" cy="125" r="3.4"/>
    <circle cx="551" cy="144" r="3.4"/>
    <circle cx="535" cy="155" r="3.4"/>
    <circle cx="515" cy="155" r="3.4"/>
    <circle cx="499" cy="144" r="3.4"/>
    <circle cx="493" cy="125" r="3.4"/>
    <circle cx="499" cy="106" r="3.4"/>
    <circle cx="515" cy="95" r="3.4"/>
    <circle cx="535" cy="95" r="3.4"/>
    <circle cx="551" cy="106" r="3.4"/>
  </g>
  <g class="dg47c-safe dg47c-soft">
    <line x1="525" y1="73" x2="525" y2="85" class="dg47c-arm"/>
    <polygon points="519,85 531,85 525,93"/>
    <line x1="525" y1="177" x2="525" y2="165" class="dg47c-arm"/>
    <polygon points="519,165 531,165 525,157"/>
    <line x1="473" y1="125" x2="485" y2="125" class="dg47c-arm"/>
    <polygon points="485,119 485,131 493,125"/>
    <line x1="577" y1="125" x2="565" y2="125" class="dg47c-arm"/>
    <polygon points="565,119 565,131 557,125"/>
  </g>
  <text x="525" y="212" class="dg47c-hd" text-anchor="middle">SMALL + SURFACTANT</text>
  <text x="525" y="230" class="dg47c-lbl" text-anchor="middle">DPPC lowers surface tension</text>
  <text x="525" y="246" class="dg47c-sub" text-anchor="middle">stays open, compliance up</text>

  <text x="20" y="274" class="dg47c-eq">P (collapse) = 2T / r</text>
  <text x="180" y="274" class="dg47c-sub">T = surface tension of the alveolar lining fluid; P is inversely proportional to radius</text>
  <text x="20" y="290" class="dg47c-sub">surfactant is a phospholipid that wedges between the water molecules - chemically and functionally, soap</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. The bronchopulmonary anastomosis: why blood leaving the lung is never
//    quite as oxygenated as blood leaving an alveolus.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv47-bronchopulmonary-shunt"] = {
  title: "The physiologic shunt",
  caption:
    "A shunt is a connection between two circuits that are supposed to stay separate. " +
    "Oxygen-poor blood arrives from the right ventricle in the pulmonary artery, is oxygenated at the alveolus, and heads for the left atrium - but about two-thirds of the bronchial venous blood, which is systemic and oxygen-poor, drains into that stream through bronchopulmonary anastomoses. " +
    "The bar chart is the consequence: oxygen content measured after the anastomosis is slightly lower than it was immediately after gas exchange. The lecture gives no numbers for the drop, only the direction (Slides 15-16).",
  svg: `
<svg viewBox="0 0 640 252" role="img" aria-label="Blood flows left to right along a pipe. The first segment is the pulmonary artery carrying oxygen-poor blood from the right ventricle. It passes an alveolus where gas exchange makes it oxygen-rich. Further along, a branch descends from above carrying oxygen-poor bronchial venous blood, two-thirds of which drains here through a bronchopulmonary anastomosis, and the final segment toward the left atrium is drawn faded to show slightly lower oxygen content. Three bars below compare oxygen content before gas exchange, after gas exchange, and after the shunt.">
  <style>
    .dg47d-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg47d-lbl  { font-size: 11px; }
    .dg47d-hd   { font-size: 11.5px; font-weight: 700; }
    .dg47d-pipe { stroke-width: 14; stroke-linecap: round; fill: none; }
    .dg47d-poor { stroke: var(--dg-cool); }
    .dg47d-rich { stroke: var(--dg-warm); }
    .dg47d-alv  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .dg47d-f1 { animation: dg47dF1 6s linear infinite; }
    .dg47d-f2 { animation: dg47dF1 6s linear infinite 2s; }
    @keyframes dg47dF1 {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(160px); opacity: 0 }
    }
    .dg47d-g1 { animation: dg47dG1 6s linear infinite; }
    .dg47d-g2 { animation: dg47dG1 6s linear infinite 2.6s; }
    @keyframes dg47dG1 {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(286px); opacity: 0 }
    }
    .dg47d-drop { animation: dg47dDrop 6s ease-in infinite 1.2s; }
    @keyframes dg47dDrop {
      0%   { transform: translateY(0);    opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(66px); opacity: 0 }
    }
  </style>

  <text x="20" y="16" class="dg47d-sub">a shunt joins two circuits that are meant to stay apart</text>

  <circle cx="257" cy="62" r="26" class="dg47d-alv"/>
  <text x="257" y="66" class="dg47d-lbl" text-anchor="middle">alveolus</text>
  <text x="257" y="34" class="dg47d-sub" text-anchor="middle">gas exchange</text>

  <line x1="40" y1="126" x2="215" y2="126" class="dg47d-pipe dg47d-poor"/>
  <line x1="215" y1="126" x2="300" y2="126" class="dg47d-pipe" stroke="var(--dg-accent)"/>
  <line x1="300" y1="126" x2="440" y2="126" class="dg47d-pipe dg47d-rich"/>
  <line x1="440" y1="126" x2="600" y2="126" class="dg47d-pipe dg47d-rich" opacity=".5"/>

  <line x1="240" y1="92" x2="240" y2="116" stroke="var(--dg-line)" stroke-width="1.4" stroke-dasharray="3 3"/>
  <line x1="274" y1="92" x2="274" y2="116" stroke="var(--dg-line)" stroke-width="1.4" stroke-dasharray="3 3"/>

  <line x1="440" y1="52" x2="440" y2="119" stroke="var(--dg-cool)" stroke-width="9" stroke-linecap="round"/>
  <text x="452" y="46" class="dg47d-lbl">bronchial vein - systemic, O2-poor</text>
  <text x="452" y="62" class="dg47d-sub">2/3 of bronchial blood drains here</text>
  <text x="452" y="78" class="dg47d-sub">bronchopulmonary anastomosis</text>

  <g class="dg47d-f1"><circle cx="48" cy="126" r="4.5" fill="var(--dg-surface)"/></g>
  <g class="dg47d-f2"><circle cx="48" cy="126" r="4.5" fill="var(--dg-surface)"/></g>
  <g class="dg47d-g1"><circle cx="308" cy="126" r="4.5" fill="var(--dg-surface)"/></g>
  <g class="dg47d-g2"><circle cx="308" cy="126" r="4.5" fill="var(--dg-surface)"/></g>
  <g class="dg47d-drop"><circle cx="440" cy="56" r="4.5" fill="var(--dg-surface)"/></g>

  <text x="40" y="152" class="dg47d-lbl">pulmonary artery</text>
  <text x="40" y="168" class="dg47d-sub">the only artery carrying O2-POOR blood; from the right ventricle</text>
  <text x="600" y="152" class="dg47d-lbl" text-anchor="end">pulmonary vein to left atrium</text>

  <rect x="60" y="212" width="26" height="16" rx="3" fill="var(--dg-cool)"/>
  <rect x="300" y="184" width="26" height="44" rx="3" fill="var(--dg-warm)"/>
  <rect x="470" y="192" width="26" height="36" rx="3" fill="var(--dg-warm)" opacity=".6"/>
  <line x1="40" y1="228" x2="600" y2="228" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="60" y="244" class="dg47d-sub">before exchange</text>
  <text x="300" y="244" class="dg47d-sub">after exchange</text>
  <text x="470" y="244" class="dg47d-sub">after the shunt: slightly lower</text>
  <text x="40" y="200" class="dg47d-sub">blood O2 content</text>
</svg>`,
};

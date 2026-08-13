window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv4 - Solute Transport & Fluid Movement Through Biological Barriers
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv4-iv-fluid-compartment-shift"] = {
  title: "Where the fluid goes, then where the water goes",
  caption:
    "Slide 26's 70-kg person: TBW 42 L = ICF 25 L + ECF 17 L. Each row plays the same two beats in order — " +
    "the load lands in the ECF first, and only then does an osmolality difference move water across the plasma membrane. " +
    "1.5 L isotonic saline: ECF expands by the full 1.5 L, osmolality unchanged, no shift. " +
    "1.5 L isotonic 5% dextrose: the glucose is metabolized to CO₂ + water (gases are not solutes), so it behaves as solute-free water — " +
    "ECF osmolality falls and water moves into cells. ~13.5 g of pure NaCl adds no volume at all: it stays extracellular, " +
    "ECF osmolality rises, and the ECF gains volume only by pulling it out of the cells — the cellular response precedes the total-body response. " +
    "Bar width is proportional to volume, but the changes are drawn exaggerated for visibility; the lecture asks for the generalities, not the decimals, " +
    "so no final compartment volumes are shown. Normal osmolality 280–295 mOsm/kg H₂O.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three intravenous loads compared on a bar split into intracellular and extracellular fluid. One and a half litres of isotonic saline expands the extracellular fluid only, osmolality unchanged, no water shift. One and a half litres of isotonic five percent dextrose behaves as free water: extracellular osmolality falls and water moves into the cells, so the membrane slides toward the extracellular side. About thirteen and a half grams of pure sodium chloride adds no volume, raises extracellular osmolality, and pulls water out of the cells.">
  <style>
    .dg4a-hdr  { font-size: 11px; fill: var(--dg-muted); }
    .dg4a-case { font-size: 10.5px; font-weight: 700; }
    .dg4a-lbl  { font-size: 10px; }
    .dg4a-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg4a-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg4a-ecf  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg4a-icf  { fill: var(--dg-accent); fill-opacity: .20; stroke: var(--dg-accent); stroke-width: 1.2; }
    .dg4a-cut  { fill: var(--dg-panel); }
    .dg4a-add  { fill: var(--dg-cool); fill-opacity: .22; stroke: var(--dg-cool); stroke-width: 1.2; stroke-dasharray: 3 2; }
    .dg4a-mem  { stroke: var(--dg-ink); stroke-width: 2.4; stroke-dasharray: 4 3; opacity: .8; }
    .dg4a-wat  { fill: var(--dg-cool); }
    .dg4a-arw  { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2; }
    .dg4a-gauge{ stroke: var(--dg-line); stroke-width: 1.4; }
    .dg4a-mark { fill: var(--dg-good); }

    .dg4a-inject { animation: dg4a-inject 7s ease-in-out infinite; }
    @keyframes dg4a-inject {
      0%, 6%    { transform: translateY(-18px); opacity: 0 }
      16%       { opacity: 1 }
      26%, 88%  { transform: translateY(0); opacity: 1 }
      97%, 100% { transform: translateY(-18px); opacity: 0 }
    }
    .dg4a-adda { animation: dg4a-adda 7s ease-in-out infinite; }
    @keyframes dg4a-adda { 0%, 26% { opacity: 0 } 38%, 88% { opacity: 1 } 96%, 100% { opacity: 0 } }

    .dg4a-slice { animation: dg4a-slice 7s ease-in-out infinite; }
    @keyframes dg4a-slice { 0%, 52% { opacity: 0 } 66%, 88% { opacity: 1 } 96%, 100% { opacity: 0 } }

    .dg4a-wallL { animation: dg4a-wallL 7s ease-in-out infinite; }
    @keyframes dg4a-wallL {
      0%, 52%   { transform: translateX(0) }
      66%, 88%  { transform: translateX(-14px) }
      96%, 100% { transform: translateX(0) }
    }
    .dg4a-wallR { animation: dg4a-wallR 7s ease-in-out infinite; }
    @keyframes dg4a-wallR {
      0%, 52%   { transform: translateX(0) }
      66%, 88%  { transform: translateX(14px) }
      96%, 100% { transform: translateX(0) }
    }
    .dg4a-osmdn { animation: dg4a-osmdn 7s ease-in-out infinite; }
    @keyframes dg4a-osmdn {
      0%, 38%   { transform: translateY(0) }
      50%, 88%  { transform: translateY(9px) }
      96%, 100% { transform: translateY(0) }
    }
    .dg4a-osmup { animation: dg4a-osmup 7s ease-in-out infinite; }
    @keyframes dg4a-osmup {
      0%, 38%   { transform: translateY(0) }
      50%, 88%  { transform: translateY(-9px) }
      96%, 100% { transform: translateY(0) }
    }
    .dg4a-crossL { animation: dg4a-crossL 7s ease-in-out infinite; }
    @keyframes dg4a-crossL {
      0%, 50%   { transform: translateX(0); opacity: 0 }
      56%       { opacity: 1 }
      74%       { transform: translateX(-52px); opacity: 1 }
      80%, 100% { transform: translateX(-52px); opacity: 0 }
    }
    .dg4a-crossR { animation: dg4a-crossR 7s ease-in-out infinite; }
    @keyframes dg4a-crossR {
      0%, 50%   { transform: translateX(0); opacity: 0 }
      56%       { opacity: 1 }
      74%       { transform: translateX(52px); opacity: 1 }
      80%, 100% { transform: translateX(52px); opacity: 0 }
    }
    .dg4a-d1 { animation-delay: .5s; }
  </style>

  <text x="8" y="18" class="dg4a-hdr">70-kg person — TBW 42 L: ICF 25 L + ECF 17 L (Slide 26)</text>
  <text x="632" y="18" text-anchor="end" class="dg4a-hdr">normal 280–295 mOsm/kg H₂O</text>
  <text x="110" y="44" class="dg4a-sub">ICF 25 L</text>
  <text x="398" y="44" text-anchor="end" class="dg4a-sub">ECF 17 L</text>
  <text x="440" y="44" class="dg4a-sub">ECF osmolality → water shift</text>

  <text x="8" y="70" class="dg4a-case">1.5 L isotonic</text>
  <text x="8" y="82" class="dg4a-case">saline</text>
  <text x="8" y="94" class="dg4a-tiny">stays in the ECF</text>
  <rect x="104" y="62" width="300" height="32" rx="4" class="dg4a-ecf"/>
  <rect x="404" y="62" width="24" height="32" rx="4" class="dg4a-add dg4a-adda"/>
  <rect x="104" y="62" width="179" height="32" rx="4" class="dg4a-icf"/>
  <g class="dg4a-inject">
    <circle cx="352" cy="78" r="7" class="dg4a-wat" fill-opacity=".55"/>
    <circle cx="368" cy="71" r="4.5" class="dg4a-wat" fill-opacity=".45"/>
    <circle cx="368" cy="85" r="4.5" class="dg4a-wat" fill-opacity=".45"/>
  </g>
  <line x1="283" y1="57" x2="283" y2="99" class="dg4a-mem"/>
  <text x="266" y="112" text-anchor="middle" class="dg4a-lbl">no osmotic gradient → no water shift</text>
  <line x1="446" y1="62" x2="446" y2="94" class="dg4a-gauge"/>
  <line x1="441" y1="78" x2="451" y2="78" class="dg4a-gauge"/>
  <polygon points="436,72 446,78 436,84" class="dg4a-mark"/>
  <text x="462" y="75" class="dg4a-lbl">ECF osmolality unchanged</text>
  <text x="462" y="89" class="dg4a-sub">ECF +1.5 L, ICF untouched</text>

  <text x="8" y="158" class="dg4a-case">1.5 L isotonic</text>
  <text x="8" y="170" class="dg4a-case">5% dextrose</text>
  <text x="8" y="182" class="dg4a-tiny">glucose → CO₂ + H₂O</text>
  <rect x="104" y="150" width="300" height="32" rx="4" class="dg4a-ecf"/>
  <rect x="404" y="150" width="24" height="32" rx="4" class="dg4a-add dg4a-adda"/>
  <rect x="104" y="150" width="179" height="32" rx="4" class="dg4a-icf"/>
  <rect x="283" y="150" width="14" height="32" class="dg4a-icf dg4a-slice"/>
  <g class="dg4a-inject">
    <circle cx="352" cy="166" r="7" class="dg4a-wat" fill-opacity=".55"/>
    <circle cx="368" cy="159" r="4.5" class="dg4a-wat" fill-opacity=".45"/>
    <circle cx="368" cy="173" r="4.5" class="dg4a-wat" fill-opacity=".45"/>
  </g>
  <g class="dg4a-crossL"><circle cx="318" cy="160" r="4" class="dg4a-wat"/></g>
  <g class="dg4a-crossL dg4a-d1"><circle cx="324" cy="172" r="3.4" class="dg4a-wat"/></g>
  <line x1="283" y1="145" x2="283" y2="187" class="dg4a-mem dg4a-wallR"/>
  <line x1="330" y1="198" x2="248" y2="198" class="dg4a-arw"/>
  <polygon points="248,192 236,198 248,204" class="dg4a-arw"/>
  <text x="340" y="202" class="dg4a-lbl">H₂O into cells</text>
  <line x1="446" y1="150" x2="446" y2="182" class="dg4a-gauge"/>
  <line x1="441" y1="166" x2="451" y2="166" class="dg4a-gauge"/>
  <polygon points="436,160 446,166 436,172" class="dg4a-mark dg4a-osmdn"/>
  <text x="462" y="163" class="dg4a-lbl">ECF osmolality falls</text>
  <text x="462" y="177" class="dg4a-sub">water moves INTO the ICF</text>

  <text x="8" y="246" class="dg4a-case">~13.5 g NaCl</text>
  <text x="8" y="258" class="dg4a-case">salt load</text>
  <text x="8" y="270" class="dg4a-tiny">no volume added</text>
  <rect x="104" y="238" width="300" height="32" rx="4" class="dg4a-ecf"/>
  <rect x="104" y="238" width="179" height="32" rx="4" class="dg4a-icf"/>
  <rect x="269" y="238" width="14" height="32" class="dg4a-cut dg4a-slice"/>
  <g class="dg4a-inject">
    <rect x="344" y="247" width="32" height="15" rx="3" fill="var(--dg-warm)" fill-opacity=".3" stroke="var(--dg-warm)" stroke-width="1"/>
    <text x="360" y="258" text-anchor="middle" class="dg4a-tiny">NaCl</text>
  </g>
  <g class="dg4a-crossR"><circle cx="252" cy="248" r="4" class="dg4a-wat"/></g>
  <g class="dg4a-crossR dg4a-d1"><circle cx="246" cy="260" r="3.4" class="dg4a-wat"/></g>
  <line x1="283" y1="233" x2="283" y2="275" class="dg4a-mem dg4a-wallL"/>
  <line x1="252" y1="286" x2="330" y2="286" class="dg4a-arw"/>
  <polygon points="330,280 342,286 330,292" class="dg4a-arw"/>
  <text x="242" y="290" text-anchor="end" class="dg4a-lbl">H₂O out of cells</text>
  <line x1="446" y1="238" x2="446" y2="270" class="dg4a-gauge"/>
  <line x1="441" y1="254" x2="451" y2="254" class="dg4a-gauge"/>
  <polygon points="436,248 446,254 436,260" class="dg4a-mark dg4a-osmup"/>
  <text x="462" y="251" class="dg4a-lbl">ECF osmolality rises</text>
  <text x="462" y="265" class="dg4a-sub">water pulled OUT of the ICF</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv4-starling-forces-along-capillary"] = {
  title: "Starling balance along the capillary",
  caption:
    "Capillary hydrostatic pressure (P_c) is highest at the arteriolar end and falls as flow proceeds; plasma oncotic pressure (π_p) — " +
    "from impermeant plasma proteins, albumin ≈54% — stays essentially constant, because electrolytes cross the wall freely and exert no net osmotic force. " +
    "Where the falling line crosses the flat one the net balance changes sign: positive means filtration (fluid leaves), negative means absorption (fluid returns). " +
    "Relaxing the upstream precapillary sphincter — a smooth-muscle cuff that is NOT innervated, driven by local paracrine/autocrine signals — raises P_c " +
    "(dashed line) and pushes the crossover toward the venular end, so more of the vessel filters. " +
    "This lecture (Slide 23) names the five Starling variables — capillary and interstitial hydrostatic pressure, plasma and interstitial oncotic pressure, and K_f — " +
    "but gives no mmHg values, so none are shown here; the numbers arrive with the glomerulus. Line heights are illustrative only.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A capillary from the arteriolar end on the left to the venular end on the right. Above it, capillary hydrostatic pressure is drawn as a line falling from left to right while plasma oncotic pressure is a flat constant line. Left of their crossing point the net force is outward and fluid filters into the interstitium; right of it the net force is inward and fluid is absorbed back. A dashed higher hydrostatic line shows that opening the upstream precapillary sphincter raises capillary pressure and moves the crossover point toward the venular end. No pressure values are given.">
  <style>
    .dg4b-lbl  { font-size: 10px; }
    .dg4b-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg4b-key  { font-size: 10.5px; font-weight: 700; }
    .dg4b-pc   { stroke: var(--dg-cool); stroke-width: 2.6; fill: none; }
    .dg4b-pcg  { stroke: var(--dg-cool); stroke-width: 1.8; stroke-dasharray: 6 4; fill: none; opacity: .55; }
    .dg4b-pi   { stroke: var(--dg-warm); stroke-width: 2.6; fill: none; }
    .dg4b-fil  { fill: var(--dg-cool); opacity: .16; }
    .dg4b-abs  { fill: var(--dg-warm); opacity: .16; }
    .dg4b-cross{ stroke: var(--dg-ink); stroke-width: 1.4; stroke-dasharray: 3 3; opacity: .7; }
    .dg4b-crossg{ stroke: var(--dg-cool); stroke-width: 1.4; stroke-dasharray: 3 3; opacity: .5; }
    .dg4b-vessel{ fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg4b-wall { stroke: var(--dg-ink); stroke-width: 2; opacity: .45; }
    .dg4b-cuff { fill: var(--dg-accent); fill-opacity: .5; stroke: var(--dg-accent); stroke-width: 1.2; }
    .dg4b-rbc  { fill: var(--dg-warm); opacity: .5; }
    .dg4b-out  { fill: var(--dg-cool); }
    .dg4b-in   { fill: var(--dg-warm); }
    .dg4b-oarw { stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 2; }
    .dg4b-iarw { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 2; }
    .dg4b-shift{ stroke: var(--dg-cool); fill: var(--dg-cool); stroke-width: 1.6; opacity: .8; }
    .dg4b-peri { fill: var(--dg-accent); fill-opacity: .55; stroke: var(--dg-accent); stroke-width: 1; }

    .dg4b-flow { animation: dg4b-flow 6s linear infinite; }
    @keyframes dg4b-flow {
      0%   { transform: translateX(0); opacity: 0 }
      8%   { opacity: .55 }
      88%  { opacity: .55 }
      100% { transform: translateX(410px); opacity: 0 }
    }
    .dg4b-f2 { animation-delay: -1.5s; }
    .dg4b-f3 { animation-delay: -3s; }
    .dg4b-f4 { animation-delay: -4.5s; }

    .dg4b-drop { animation: dg4b-drop 6s ease-in-out infinite; }
    @keyframes dg4b-drop {
      0%   { transform: translateY(0); opacity: 0 }
      15%  { opacity: 1 }
      75%  { transform: translateY(46px); opacity: 1 }
      90%, 100% { transform: translateY(46px); opacity: 0 }
    }
    .dg4b-rise { animation: dg4b-rise 6s ease-in-out infinite; }
    @keyframes dg4b-rise {
      0%   { transform: translateY(0); opacity: 0 }
      15%  { opacity: 1 }
      75%  { transform: translateY(-46px); opacity: 1 }
      90%, 100% { transform: translateY(-46px); opacity: 0 }
    }
    .dg4b-d1 { animation-delay: -2s; }
    .dg4b-d2 { animation-delay: -4s; }

    .dg4b-cufftop { animation: dg4b-cufftop 6s ease-in-out infinite; }
    @keyframes dg4b-cufftop { 0%, 25% { transform: translateY(7px) } 45%, 75% { transform: translateY(0) } 95%, 100% { transform: translateY(7px) } }
    .dg4b-cuffbot { animation: dg4b-cuffbot 6s ease-in-out infinite; }
    @keyframes dg4b-cuffbot { 0%, 25% { transform: translateY(-7px) } 45%, 75% { transform: translateY(0) } 95%, 100% { transform: translateY(-7px) } }
    .dg4b-open { animation: dg4b-open 6s ease-in-out infinite; }
    @keyframes dg4b-open { 0%, 25% { opacity: .3 } 45%, 75% { opacity: 1 } 95%, 100% { opacity: .3 } }
    .dg4b-pulse { animation: dg4b-pulse 6s ease-in-out infinite; }
    @keyframes dg4b-pulse { 0%, 100% { opacity: .45 } 50% { opacity: .95 } }
  </style>

  <text x="118" y="24" class="dg4b-lbl" fill="var(--dg-cool)">P_c capillary hydrostatic — falls along the vessel</text>
  <polygon points="118,44 402,82 118,82" class="dg4b-fil"/>
  <polygon points="402,82 566,82 566,104" class="dg4b-abs"/>
  <g class="dg4b-open">
    <line x1="118" y1="30" x2="566" y2="90" class="dg4b-pcg"/>
    <line x1="506" y1="30" x2="506" y2="138" class="dg4b-crossg"/>
    <line x1="406" y1="124" x2="494" y2="124" class="dg4b-shift"/>
    <polygon points="494,119 506,124 494,129" class="dg4b-shift"/>
  </g>
  <line x1="118" y1="44" x2="566" y2="104" class="dg4b-pc"/>
  <line x1="118" y1="82" x2="566" y2="82" class="dg4b-pi"/>
  <line x1="402" y1="26" x2="402" y2="138" class="dg4b-cross"/>
  <text x="240" y="77" text-anchor="middle" class="dg4b-key" fill="var(--dg-cool)">filtration</text>
  <text x="538" y="118" text-anchor="middle" class="dg4b-key" fill="var(--dg-warm)">absorption</text>
  <text x="124" y="98" class="dg4b-lbl" fill="var(--dg-warm)">π_p plasma oncotic — constant (albumin ≈54%)</text>
  <text x="566" y="24" text-anchor="end" class="dg4b-sub">sphincter open → P_c higher</text>

  <text x="118" y="134" class="dg4b-sub">arteriolar end</text>
  <text x="566" y="134" text-anchor="end" class="dg4b-sub">venular end</text>

  <rect x="48" y="148" width="72" height="24" rx="6" class="dg4b-vessel"/>
  <rect x="88" y="142" width="20" height="10" rx="4" class="dg4b-cuff dg4b-cufftop"/>
  <rect x="88" y="168" width="20" height="10" rx="4" class="dg4b-cuff dg4b-cuffbot"/>
  <text x="8" y="196" class="dg4b-sub">precapillary sphincter</text>
  <text x="8" y="207" class="dg4b-sub">(not innervated)</text>

  <rect x="118" y="138" width="448" height="44" rx="10" class="dg4b-vessel"/>
  <line x1="118" y1="138" x2="566" y2="138" class="dg4b-wall"/>
  <line x1="118" y1="182" x2="566" y2="182" class="dg4b-wall"/>
  <ellipse cx="134" cy="160" rx="9" ry="5.5" class="dg4b-rbc dg4b-flow"/>
  <ellipse cx="134" cy="160" rx="9" ry="5.5" class="dg4b-rbc dg4b-flow dg4b-f2"/>
  <ellipse cx="134" cy="160" rx="9" ry="5.5" class="dg4b-rbc dg4b-flow dg4b-f3"/>
  <ellipse cx="134" cy="160" rx="9" ry="5.5" class="dg4b-rbc dg4b-flow dg4b-f4"/>
  <ellipse cx="300" cy="184" rx="11" ry="5" class="dg4b-peri dg4b-pulse"/>
  <ellipse cx="452" cy="184" rx="11" ry="5" class="dg4b-peri dg4b-pulse"/>

  <text x="124" y="214" class="dg4b-sub">interstitium</text>
  <circle cx="200" cy="172" r="4.5" class="dg4b-out dg4b-drop"/>
  <circle cx="250" cy="172" r="4.5" class="dg4b-out dg4b-drop dg4b-d1"/>
  <circle cx="300" cy="172" r="4.5" class="dg4b-out dg4b-drop dg4b-d2"/>
  <circle cx="516" cy="218" r="4.5" class="dg4b-in dg4b-rise"/>
  <circle cx="542" cy="218" r="4.5" class="dg4b-in dg4b-rise dg4b-d1"/>
  <line x1="350" y1="188" x2="350" y2="210" class="dg4b-oarw"/>
  <polygon points="344,210 350,222 356,210" class="dg4b-oarw"/>
  <text x="350" y="236" text-anchor="middle" class="dg4b-sub">fluid out</text>
  <line x1="530" y1="222" x2="530" y2="200" class="dg4b-iarw"/>
  <polygon points="524,200 530,188 536,200" class="dg4b-iarw"/>
  <text x="530" y="236" text-anchor="middle" class="dg4b-sub">fluid back in</text>

  <text x="8" y="256" class="dg4b-sub">K_f = capillary wall permeability × total surface area — the fifth Starling variable</text>
  <text x="8" y="271" class="dg4b-sub">precapillary sphincters adjust P_c; pericytes — and renal mesangial cells — adjust surface area</text>
  <text x="8" y="286" class="dg4b-sub">interstitial P and π act on the same balance; this lecture gives no mmHg values for any of them</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv4-donnan-versus-pump"] = {
  title: "Gibbs-Donnan vs. osmotic work",
  caption:
    "Left, with no pump: impermeant negatively charged cytosolic proteins (X⁻) set off a chain in a fixed order — Cl⁻ enters down its gradient " +
    "(lecture values, Slide 6: 102 mM outside vs 20 inside), Na⁺ follows to preserve bulk electroneutrality (142 vs 15), the membrane turns inside-negative, " +
    "and only then are there more osmotically active particles inside than outside, so water follows and the cell swells and bursts. " +
    "Water entry is the last step, not the first. Right, the Na⁺/K⁺-ATPase performs osmotic work, pumping Na⁺ out and K⁺ in so the cell is " +
    "functionally impermeable to NaCl and volume holds — note the pump never stops: this is a steady state maintained by active transport, " +
    "and the Donnan equilibrium is never actually reached. Digitalis glycosides (foxglove) block the pump, which returns the cell to the left panel. " +
    "The same logic runs the volume-regulation responses: shrinkage triggers solute uptake (RVI), swelling triggers solute efflux (RVD).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two cells side by side. On the left, with the sodium potassium pump blocked, a numbered chain runs in order: chloride enters down its gradient, sodium follows to maintain electroneutrality, the membrane potential becomes inside-negative, more osmotic particles accumulate inside, and finally water enters so the cell swells and bursts. On the right the sodium potassium ATPase runs continuously, pumping sodium out and potassium in, holding cell volume constant as a steady state rather than an equilibrium. An arrow shows digitalis from foxglove blocking the pump and returning the cell to the left-hand outcome.">
  <style>
    .dg4c-ttl  { font-size: 11px; font-weight: 700; }
    .dg4c-lbl  { font-size: 9.5px; }
    .dg4c-sub  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg4c-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg4c-ion  { font-size: 8.5px; }
    .dg4c-box  { fill: none; stroke: var(--dg-line); stroke-width: 1.2; }
    .dg4c-cell { fill: var(--dg-accent); fill-opacity: .12; stroke: var(--dg-ink); stroke-width: 2.2; }
    .dg4c-prot { fill: var(--dg-accent); fill-opacity: .45; stroke: var(--dg-accent); stroke-width: 1; }
    .dg4c-num  { fill: var(--dg-accent); fill-opacity: .85; }
    .dg4c-numt { font-size: 9px; font-weight: 700; fill: var(--dg-surface); }
    .dg4c-cl   { fill: var(--dg-cool); fill-opacity: .3; stroke: var(--dg-cool); stroke-width: 1.2; }
    .dg4c-na   { fill: var(--dg-warm); fill-opacity: .3; stroke: var(--dg-warm); stroke-width: 1.2; }
    .dg4c-k    { fill: var(--dg-good); fill-opacity: .3; stroke: var(--dg-good); stroke-width: 1.2; }
    .dg4c-wat  { fill: var(--dg-cool); }
    .dg4c-burst{ fill: none; stroke: var(--dg-warm); stroke-width: 2.4; stroke-dasharray: 5 5; }
    .dg4c-pill { fill: var(--dg-cool); fill-opacity: .18; stroke: var(--dg-cool); stroke-width: 1.2; }
    .dg4c-pump { fill: var(--dg-good); fill-opacity: .45; stroke: var(--dg-good); stroke-width: 1.4; }
    .dg4c-dig  { fill: var(--dg-warm); fill-opacity: .5; stroke: var(--dg-warm); stroke-width: 1.2; }
    .dg4c-darw { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 1.8; }

    .dg4c-s1 { animation: dg4c-s1 9s ease-in-out infinite; }
    @keyframes dg4c-s1 { 0%, 2% { opacity: .3 } 6%, 16% { opacity: 1 } 22%, 100% { opacity: .3 } }
    .dg4c-s2 { animation: dg4c-s2 9s ease-in-out infinite; }
    @keyframes dg4c-s2 { 0%, 16% { opacity: .3 } 20%, 30% { opacity: 1 } 36%, 100% { opacity: .3 } }
    .dg4c-s3 { animation: dg4c-s3 9s ease-in-out infinite; }
    @keyframes dg4c-s3 { 0%, 30% { opacity: .3 } 34%, 44% { opacity: 1 } 50%, 100% { opacity: .3 } }
    .dg4c-s4 { animation: dg4c-s4 9s ease-in-out infinite; }
    @keyframes dg4c-s4 { 0%, 44% { opacity: .3 } 48%, 56% { opacity: 1 } 62%, 100% { opacity: .3 } }
    .dg4c-s5 { animation: dg4c-s5 9s ease-in-out infinite; }
    @keyframes dg4c-s5 { 0%, 56% { opacity: .3 } 60%, 92% { opacity: 1 } 97%, 100% { opacity: .3 } }

    .dg4c-clin { animation: dg4c-clin 9s ease-in-out infinite; }
    @keyframes dg4c-clin {
      0%, 4%    { transform: translateX(0); opacity: 0 }
      8%        { opacity: 1 }
      16%       { transform: translateX(44px); opacity: 1 }
      20%, 100% { transform: translateX(44px); opacity: 0 }
    }
    .dg4c-nain { animation: dg4c-nain 9s ease-in-out infinite; }
    @keyframes dg4c-nain {
      0%, 18%   { transform: translateX(0); opacity: 0 }
      22%       { opacity: 1 }
      30%       { transform: translateX(44px); opacity: 1 }
      34%, 100% { transform: translateX(44px); opacity: 0 }
    }
    .dg4c-water { animation: dg4c-water 9s ease-in-out infinite; }
    @keyframes dg4c-water {
      0%, 58%   { transform: translateY(0); opacity: 0 }
      62%       { opacity: 1 }
      74%       { transform: translateY(34px); opacity: 1 }
      78%, 100% { transform: translateY(34px); opacity: 0 }
    }
    .dg4c-w2 { animation-delay: .6s; }
    .dg4c-swell { animation: dg4c-swell 9s ease-in-out infinite; }
    @keyframes dg4c-swell { 0%, 58% { r: 38px } 84%, 92% { r: 50px } 97%, 100% { r: 38px } }
    .dg4c-pop { animation: dg4c-pop 9s ease-in-out infinite; }
    @keyframes dg4c-pop { 0%, 84% { opacity: 0; r: 50px } 90% { opacity: 1; r: 57px } 95%, 100% { opacity: 0; r: 62px } }

    .dg4c-naout { animation: dg4c-naout 2.2s ease-in-out infinite; }
    @keyframes dg4c-naout {
      0%        { transform: translateX(0); opacity: 0 }
      15%       { opacity: 1 }
      70%       { transform: translateX(46px); opacity: 1 }
      85%, 100% { transform: translateX(46px); opacity: 0 }
    }
    .dg4c-kin { animation: dg4c-kin 2.2s ease-in-out infinite; animation-delay: -1.1s; }
    @keyframes dg4c-kin {
      0%        { transform: translateX(0); opacity: 0 }
      15%       { opacity: 1 }
      70%       { transform: translateX(-46px); opacity: 1 }
      85%, 100% { transform: translateX(-46px); opacity: 0 }
    }
    .dg4c-glow { animation: dg4c-glow 2.2s ease-in-out infinite; }
    @keyframes dg4c-glow { 0%, 100% { opacity: .5 } 50% { opacity: 1 } }

    .dg4c-trip { animation: dg4c-trip 9s ease-in-out infinite; }
    @keyframes dg4c-trip {
      0%, 10%   { transform: translateX(0); opacity: 0 }
      16%       { opacity: 1 }
      52%       { transform: translateX(-420px); opacity: 1 }
      60%, 100% { transform: translateX(-420px); opacity: 0 }
    }
  </style>

  <rect x="8" y="32" width="308" height="220" rx="10" class="dg4c-box"/>
  <rect x="324" y="32" width="308" height="220" rx="10" class="dg4c-box"/>
  <text x="14" y="24" class="dg4c-ttl">Pump blocked — Gibbs-Donnan alone</text>
  <text x="330" y="24" class="dg4c-ttl">Na⁺/K⁺-ATPase running — osmotic work</text>

  <g class="dg4c-s1"><circle cx="26" cy="54" r="7.5" class="dg4c-num"/><text x="26" y="57.5" text-anchor="middle" class="dg4c-numt">1</text></g>
  <text x="40" y="57.5" class="dg4c-lbl">Cl⁻ enters (102 → 20 mM)</text>
  <g class="dg4c-s2"><circle cx="26" cy="80" r="7.5" class="dg4c-num"/><text x="26" y="83.5" text-anchor="middle" class="dg4c-numt">2</text></g>
  <text x="40" y="83.5" class="dg4c-lbl">Na⁺ follows (142 → 15 mM)</text>
  <g class="dg4c-s3"><circle cx="26" cy="106" r="7.5" class="dg4c-num"/><text x="26" y="109.5" text-anchor="middle" class="dg4c-numt">3</text></g>
  <text x="40" y="109.5" class="dg4c-lbl">inside-negative voltage</text>
  <g class="dg4c-s4"><circle cx="26" cy="132" r="7.5" class="dg4c-num"/><text x="26" y="135.5" text-anchor="middle" class="dg4c-numt">4</text></g>
  <text x="40" y="135.5" class="dg4c-lbl">more particles inside</text>
  <g class="dg4c-s5"><circle cx="26" cy="158" r="7.5" class="dg4c-num"/><text x="26" y="161.5" text-anchor="middle" class="dg4c-numt">5</text></g>
  <text x="40" y="161.5" class="dg4c-lbl">water in → swell → burst</text>
  <text x="40" y="180" class="dg4c-tiny">bulk electroneutrality drives step 2</text>

  <circle cx="250" cy="142" r="38" class="dg4c-cell dg4c-swell"/>
  <circle cx="250" cy="142" r="50" class="dg4c-burst dg4c-pop"/>
  <rect x="228" y="122" width="22" height="12" rx="4" class="dg4c-prot"/>
  <text x="239" y="131" text-anchor="middle" class="dg4c-ion">X⁻</text>
  <rect x="252" y="140" width="22" height="12" rx="4" class="dg4c-prot"/>
  <text x="263" y="149" text-anchor="middle" class="dg4c-ion">X⁻</text>
  <rect x="226" y="156" width="22" height="12" rx="4" class="dg4c-prot"/>
  <text x="237" y="165" text-anchor="middle" class="dg4c-ion">X⁻</text>
  <g class="dg4c-clin"><circle cx="196" cy="122" r="9" class="dg4c-cl"/><text x="196" y="125" text-anchor="middle" class="dg4c-ion">Cl⁻</text></g>
  <g class="dg4c-nain"><circle cx="196" cy="164" r="9" class="dg4c-na"/><text x="196" y="167" text-anchor="middle" class="dg4c-ion">Na⁺</text></g>
  <circle cx="238" cy="98" r="4.5" class="dg4c-wat dg4c-water"/>
  <circle cx="262" cy="98" r="4" class="dg4c-wat dg4c-water dg4c-w2"/>
  <rect x="190" y="206" width="120" height="18" rx="9" class="dg4c-pill dg4c-s3"/>
  <text x="250" y="218" text-anchor="middle" class="dg4c-tiny">V_m turns inside-negative</text>
  <text x="246" y="242" text-anchor="middle" class="dg4c-tiny">X⁻ = impermeant protein anions</text>

  <circle cx="420" cy="142" r="38" class="dg4c-cell"/>
  <rect x="398" y="122" width="22" height="12" rx="4" class="dg4c-prot"/>
  <text x="409" y="131" text-anchor="middle" class="dg4c-ion">X⁻</text>
  <rect x="396" y="152" width="22" height="12" rx="4" class="dg4c-prot"/>
  <text x="407" y="161" text-anchor="middle" class="dg4c-ion">X⁻</text>
  <rect x="450" y="122" width="20" height="40" rx="6" class="dg4c-pump dg4c-glow"/>
  <g class="dg4c-naout"><circle cx="438" cy="130" r="9" class="dg4c-na"/><text x="438" y="133" text-anchor="middle" class="dg4c-ion">Na⁺</text></g>
  <g class="dg4c-kin"><circle cx="496" cy="154" r="9" class="dg4c-k"/><text x="496" y="157" text-anchor="middle" class="dg4c-ion">K⁺</text></g>
  <text x="490" y="114" class="dg4c-tiny">Na⁺ out →</text>
  <text x="512" y="180" text-anchor="end" class="dg4c-tiny">← K⁺ in</text>
  <text x="478" y="200" text-anchor="middle" class="dg4c-lbl">NaCl actively excluded — the cell is</text>
  <text x="478" y="214" text-anchor="middle" class="dg4c-lbl">functionally impermeable to NaCl</text>
  <text x="478" y="230" text-anchor="middle" class="dg4c-tiny">a steady state, not an equilibrium:</text>
  <text x="478" y="243" text-anchor="middle" class="dg4c-tiny">the Donnan equilibrium is never reached</text>

  <text x="348" y="272" text-anchor="middle" class="dg4c-tiny">digitalis glycoside (foxglove) blocks the pump — osmotic work stops and the left panel returns</text>
  <line x1="556" y1="286" x2="142" y2="286" class="dg4c-darw"/>
  <polygon points="142,280 130,286 142,292" class="dg4c-darw"/>
  <g class="dg4c-trip">
    <polygon points="568,278 576,282 576,290 568,294 560,290 560,282" class="dg4c-dig"/>
  </g>
</svg>`,
};

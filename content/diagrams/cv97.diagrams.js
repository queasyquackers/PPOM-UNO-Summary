window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv97-dcm-compensation"] = {
  title: "DCM: compensation that backfires",
  caption: "Impaired contractility lowers stroke volume and cardiac output, which triggers three compensations (Slide 8). Frank-Starling stretch and sympathetic drive prop output up in the short term, which is why early DCM can be asymptomatic. RAAS is the trap: angiotensin II raises SVR so afterload becomes too high for the weak LV, aldosterone expands volume so fluid backs up into the lungs and body, and chronic exposure remodels and fibroses the heart - output falls further and the cycle repeats (Slide 9).",
  svg: `<svg viewBox="0 0 640 310" role="img" aria-label="Flow diagram: impaired contractility lowers stroke volume and cardiac output; Frank-Starling, sympathetic activation and RAAS respond; the first two support output short term while angiotensin II afterload, aldosterone volume overload and remodeling feed back to lower output further.">
  <style>
    .dg97a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg97a-bad { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg97a-ok { fill: var(--dg-panel); stroke: var(--dg-good); stroke-width: 2; }
    .dg97a-t { font-size: 13px; font-weight: 700; }
    .dg97a-s { font-size: 11px; fill: var(--dg-muted); }
    .dg97a-w { font-size: 11px; fill: var(--dg-warm); font-weight: 700; }
    .dg97a-g { font-size: 11px; fill: var(--dg-good); font-weight: 700; }
    .dg97a-ln { stroke: var(--dg-ink); stroke-width: 1.6; fill: none; }
    .dg97a-hd { fill: var(--dg-ink); }
    .dg97a-loop { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; stroke-dasharray: 8 6; animation: dg97a-march 1.6s linear infinite; }
    .dg97a-loophd { fill: var(--dg-warm); }
    .dg97a-p1 { animation: dg97a-pulse 4.8s ease-in-out infinite; }
    .dg97a-p2 { animation: dg97a-pulse 4.8s ease-in-out infinite 1.2s; }
    .dg97a-p3 { animation: dg97a-pulse 4.8s ease-in-out infinite 2.4s; }
    .dg97a-p4 { animation: dg97a-pulse 4.8s ease-in-out infinite 3.6s; }
    @keyframes dg97a-march { to { stroke-dashoffset: -28; } }
    @keyframes dg97a-pulse { 0%, 100% { opacity: 0.55; } 20% { opacity: 1; } }
  </style>
  <g class="dg97a-p1">
    <rect x="20" y="16" width="200" height="46" rx="10" class="dg97a-box"/>
    <text x="34" y="36" class="dg97a-t">Impaired myocyte</text>
    <text x="34" y="53" class="dg97a-t">contractility</text>
  </g>
  <line x1="222" y1="39" x2="262" y2="39" class="dg97a-ln"/>
  <polygon points="262,33 272,39 262,45" class="dg97a-hd"/>
  <g class="dg97a-p1">
    <rect x="274" y="16" width="170" height="46" rx="10" class="dg97a-bad"/>
    <text x="288" y="36" class="dg97a-t">&#8595; SV and &#8595; CO</text>
    <text x="288" y="53" class="dg97a-s">systolic dysfunction</text>
  </g>
  <path d="M359 62 L110 104 M359 62 L320 104 M359 62 L520 104" class="dg97a-ln"/>
  <g class="dg97a-p2">
    <rect x="20" y="106" width="180" height="62" rx="10" class="dg97a-box"/>
    <text x="32" y="126" class="dg97a-t">Frank-Starling</text>
    <text x="32" y="143" class="dg97a-s">&#8593; EDV &#8594; &#8593; fiber stretch</text>
    <text x="32" y="159" class="dg97a-s">&#8594; &#8593; contractile force</text>
    <rect x="230" y="106" width="180" height="62" rx="10" class="dg97a-box"/>
    <text x="242" y="126" class="dg97a-t">Sympathetic</text>
    <text x="242" y="143" class="dg97a-s">&#8593; heart rate and</text>
    <text x="242" y="159" class="dg97a-s">&#8593; contractility</text>
    <rect x="440" y="106" width="180" height="62" rx="10" class="dg97a-box"/>
    <text x="452" y="126" class="dg97a-t">RAAS</text>
    <text x="452" y="143" class="dg97a-s">&#8595; renal perfusion &#8594; renin</text>
    <text x="452" y="159" class="dg97a-s">&#8594; angiotensin II, aldosterone</text>
  </g>
  <path d="M110 168 L150 206 M320 168 L200 206 M530 168 L470 206" class="dg97a-ln"/>
  <g class="dg97a-p3">
    <rect x="20" y="208" width="250" height="62" rx="10" class="dg97a-ok"/>
    <text x="32" y="229" class="dg97a-g">SHORT TERM</text>
    <text x="32" y="246" class="dg97a-s">&#8593; SV and &#8593; CO restored -</text>
    <text x="32" y="262" class="dg97a-s">patient may be asymptomatic early</text>
  </g>
  <g class="dg97a-p4">
    <rect x="300" y="208" width="300" height="80" rx="10" class="dg97a-bad"/>
    <text x="312" y="228" class="dg97a-w">LONG TERM</text>
    <text x="312" y="245" class="dg97a-s">Angiotensin II &#8593; SVR &#8594; afterload too high</text>
    <text x="312" y="261" class="dg97a-s">Aldosterone &#8593; volume &#8594; congestion</text>
    <text x="312" y="277" class="dg97a-s">Chronic exposure &#8594; remodeling and fibrosis</text>
  </g>
  <path d="M600 248 L626 248 L626 39 L456 39" class="dg97a-loop"/>
  <polygon points="458,32 446,39 458,46" class="dg97a-loophd"/>
  <text x="560" y="84" class="dg97a-w">worse output</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv97-hocm-obstruction"] = {
  title: "HCM: cavity size sets the obstruction",
  caption: "In obstructive HCM the thick subaortic septum narrows the outflow tract, and rapid systolic ejection draws the anterior mitral leaflet toward it (systolic anterior motion). Left: anything that shrinks the LV cavity - less venous return, less blood volume, a positive inotrope - brings leaflet and septum together and blocks outflow. Right: more venous return, more volume or a negative inotrope such as a beta blocker or verapamil enlarges the cavity and holds them apart (Slide 30). Drawing is schematic.",
  svg: `<svg viewBox="0 0 640 320" role="img" aria-label="Two schematic left ventricles with a thick septum. In the smaller cavity the anterior mitral leaflet swings into the septum and blocks the outflow tract; in the larger cavity the leaflet stays apart and blood leaves freely.">
  <style>
    .dg97b-cav { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg97b-sep { fill: var(--dg-warm); fill-opacity: 0.3; stroke: var(--dg-warm); stroke-width: 2; }
    .dg97b-ao { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg97b-lf { stroke: var(--dg-cool); stroke-width: 5; stroke-linecap: round; }
    .dg97b-t { font-size: 13px; font-weight: 700; }
    .dg97b-s { font-size: 11px; fill: var(--dg-muted); }
    .dg97b-w { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg97b-g { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg97b-fl { stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; fill: none; stroke-dasharray: 6 8; animation: dg97b-flow 1.2s linear infinite; }
    .dg97b-hd { fill: var(--dg-good); }
    .dg97b-x { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg97b-lfa { transform-box: view-box; transform-origin: 200px 92px; transform: rotate(80deg); animation: dg97b-swingA 2.4s ease-in-out infinite; }
    .dg97b-lfb { transform-box: view-box; transform-origin: 520px 92px; transform: rotate(30deg); animation: dg97b-swingB 2.4s ease-in-out infinite; }
    @keyframes dg97b-swingA { 0%, 15% { transform: rotate(15deg); } 55%, 85% { transform: rotate(80deg); } 100% { transform: rotate(15deg); } }
    @keyframes dg97b-swingB { 0%, 15% { transform: rotate(10deg); } 55%, 85% { transform: rotate(30deg); } 100% { transform: rotate(10deg); } }
    @keyframes dg97b-flow { to { stroke-dashoffset: -28; } }
  </style>
  <text x="20" y="22" class="dg97b-w">SMALLER CAVITY = MORE OBSTRUCTION</text>
  <text x="340" y="22" class="dg97b-g">LARGER CAVITY = LESS OBSTRUCTION</text>
  <line x1="320" y1="34" x2="320" y2="300" stroke="var(--dg-line)" stroke-width="1.5"/>

  <path d="M110 40 L110 70 M200 40 L200 70" class="dg97b-ao"/>
  <text x="208" y="52" class="dg97b-s">LVOT</text>
  <ellipse cx="170" cy="170" rx="70" ry="72" class="dg97b-cav"/>
  <rect x="40" y="70" width="70" height="170" rx="30" class="dg97b-sep"/>
  <text x="46" y="258" class="dg97b-s">thick septum</text>
  <line x1="200" y1="92" x2="200" y2="182" class="dg97b-lf dg97b-lfa"/>
  <path d="M146 50 L164 68 M164 50 L146 68" class="dg97b-x"/>
  <text x="220" y="112" class="dg97b-s">anterior</text>
  <text x="220" y="126" class="dg97b-s">mitral leaflet</text>
  <text x="20" y="282" class="dg97b-s">&#8595; venous return, &#8595; blood volume,</text>
  <text x="20" y="297" class="dg97b-s">positive inotropes (dehydration, heavy exertion)</text>

  <path d="M430 40 L430 70 M520 40 L520 70" class="dg97b-ao"/>
  <text x="528" y="52" class="dg97b-s">LVOT</text>
  <ellipse cx="490" cy="178" rx="100" ry="96" class="dg97b-cav"/>
  <rect x="360" y="70" width="70" height="190" rx="30" class="dg97b-sep"/>
  <line x1="520" y1="92" x2="520" y2="182" class="dg97b-lf dg97b-lfb"/>
  <path d="M455 210 L455 44" class="dg97b-fl"/>
  <polygon points="447,46 455,32 463,46" class="dg97b-hd"/>
  <text x="340" y="282" class="dg97b-s">&#8593; venous return, &#8593; blood volume,</text>
  <text x="340" y="297" class="dg97b-s">negative inotropes (beta blocker, verapamil)</text>
</svg>`
};

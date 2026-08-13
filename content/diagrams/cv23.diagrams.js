window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv23 - Cardiac impulse initiation, propagation and autonomic regulation.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv23-wavefront-to-ecg"] = {
  title: "One beat, from SA node to QRS",
  caption:
    "The wavefront and the ECG pen run on one clock, so you can watch the conduction velocity table (Slide 32) happen instead of memorising it. " +
    "The dot leaves the sinus node at the SVC-RA junction (the &ldquo;high RA&rdquo;), spreads down the right atrium through the internodal pathways and " +
    "across the roof to the left atrium through Bachmann's bundle - which is why the RA lights first and the LA second. Those atrial routes are drawn " +
    "<strong>dashed</strong> because the lecturer stresses they are preferential bundles of ordinary atrial myocytes, not specialised conducting fibres; the His-Purkinje " +
    "system (solid) is. Then the dot nearly stops: the AV node's <strong>~0.1 s</strong> delay occupies most of the beat's screen time at 0.01-0.05 m/sec, and while it crawls " +
    "the pen draws a flat PR segment. His bundle and bundle branches pass at 2 m/sec - still nothing on the surface tracing, which is the lecturer's invisibility rule - " +
    "and only when sub-endocardial Purkinje fibres (2-4 m/sec, fastest in the heart) hand off to ventricular myocardium does the QRS jump. " +
    "Velocities and the numbered order are this lecture's own table; the speed bars are drawn on a <em>logarithmic</em> scale because the range spans 400-fold and a " +
    "linear bar would make the SA and AV nodes invisible. The T wave is drawn to complete the beat but ventricular repolarisation is the next diagram's subject. " +
    "First Aid's ordering (Purkinje &gt; atria &gt; ventricles &gt; AV node) differs slightly from these numbers for atria versus ventricles; the lecturer attributes that to different sources.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A schematic heart with the surface ECG drawn underneath on the same clock. A moving dot leaves the sinoatrial node at the junction of the superior vena cava and right atrium, spreads down the right atrium by the internodal pathways and across the roof to the left atrium by Bachmann's bundle, drawn dashed because they are ordinary atrial muscle; the ECG pen inscribes the P wave at that moment. The dot then almost stops inside the atrioventricular node for about one tenth of a second while the pen draws a flat PR segment, passes quickly through the His bundle and bundle branches with still no deflection, and reaches the sub-endocardial Purkinje fibres at the apex, at which point the ventricles light up and the pen jumps into the QRS complex, followed by a T wave. A ladder on the right lists the lecture's conduction velocities in metres per second: sinoatrial node 0.01, atria 0.5 to 1, atrioventricular node 0.01 to 0.05 and slowest, His bundle 2, bundle branches 2, Purkinje fibres 2 to 4 and fastest, ventricles 0.5 to 1, with logarithmic speed bars that highlight in time with the wavefront.">
  <style>
    .dg23a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg23a-heart { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; opacity: .9; }
    .dg23a-div   { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 4 4; }
    .dg23a-mus   { fill: none; stroke: var(--dg-accent); stroke-width: 1.8; stroke-dasharray: 5 3; opacity: .85; }
    .dg23a-spec  { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linecap: round; }
    .dg23a-gl    { fill: var(--dg-accent); opacity: .10; }
    .dg23a-glw   { fill: var(--dg-warm); opacity: .10; }
    .dg23a-gs    { fill: none; stroke: var(--dg-accent); stroke-width: 9; stroke-linecap: round; opacity: .10; }
    .dg23a-row   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg23a-hl    { opacity: .10; }
    .dg23a-bdg   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.4; }
    .dg23a-num   { font-size: 9px; font-weight: 700; fill: var(--dg-accent); }
    .dg23a-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .dg23a-lbl   { font-size: 9.5px; }
    .dg23a-val   { font-size: 9.5px; font-weight: 700; }
    .dg23a-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg23a-mini  { font-size: 8px; fill: var(--dg-muted); }
    .dg23a-track { fill: var(--dg-line); opacity: .5; }
    .dg23a-trace { fill: none; stroke: var(--dg-ink); stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg23a-cover { fill: var(--dg-panel); transform: translateX(604px); animation: dg23aSweep 11s linear infinite; }
    .dg23a-play  { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .85; transform: translateX(604px); animation: dg23aSweep 11s linear infinite; }
    .dg23a-dot   { transform: translate(112px, 64px); opacity: 0; animation: dg23aRun 11s linear infinite; }
    .dg23a-dotB  { transform: translate(113px, 60px); opacity: 0; animation: dg23aRunB 11s linear infinite; }
    .dg23a-litSA  { animation: dg23aLitSA  11s linear infinite; }
    .dg23a-litRA  { animation: dg23aLitRA  11s linear infinite; }
    .dg23a-litLA  { animation: dg23aLitLA  11s linear infinite; }
    .dg23a-litAtr { animation: dg23aLitAtr 11s linear infinite; }
    .dg23a-litAV  { animation: dg23aLitAV  11s linear infinite; }
    .dg23a-litHis { animation: dg23aLitHis 11s linear infinite; }
    .dg23a-litBB  { animation: dg23aLitBB  11s linear infinite; }
    .dg23a-litPur { animation: dg23aLitPur 11s linear infinite; }
    .dg23a-litVen { animation: dg23aLitVen 11s linear infinite; }
    @keyframes dg23aSweep { 0% { transform: translateX(0) } 88%,100% { transform: translateX(604px) } }
    @keyframes dg23aRun {
      0%,2%  { transform: translate(112px,64px);  opacity: 0 }
      3%,4%  { transform: translate(112px,64px);  opacity: 1 }
      14%    { transform: translate(152px,124px); opacity: 1 }
      38%    { transform: translate(157px,140px); opacity: 1 }
      41%    { transform: translate(157px,160px); opacity: 1 }
      44%    { transform: translate(155px,192px); opacity: 1 }
      47%    { transform: translate(159px,218px); opacity: 1 }
      50%    { transform: translate(159px,218px); opacity: 0 }
      100%   { transform: translate(112px,64px);  opacity: 0 }
    }
    @keyframes dg23aRunB {
      0%,4% { transform: translate(113px,60px); opacity: 0 }
      5%    { transform: translate(113px,60px); opacity: 1 }
      9%    { transform: translate(160px,50px); opacity: 1 }
      13%   { transform: translate(207px,72px); opacity: 1 }
      16%   { transform: translate(207px,72px); opacity: 0 }
      100%  { transform: translate(113px,60px); opacity: 0 }
    }
    @keyframes dg23aLitSA  { 0%,1%  { opacity: .10 } 2%,4%   { opacity: .45 } 7%,100%   { opacity: .10 } }
    @keyframes dg23aLitRA  { 0%,4%  { opacity: .10 } 5%,11%  { opacity: .45 } 14%,100%  { opacity: .10 } }
    @keyframes dg23aLitLA  { 0%,8%  { opacity: .10 } 9%,14%  { opacity: .45 } 17%,100%  { opacity: .10 } }
    @keyframes dg23aLitAtr { 0%,4%  { opacity: .10 } 5%,14%  { opacity: .45 } 17%,100%  { opacity: .10 } }
    @keyframes dg23aLitAV  { 0%,14% { opacity: .10 } 16%,38% { opacity: .50 } 42%,100%  { opacity: .10 } }
    @keyframes dg23aLitHis { 0%,38% { opacity: .10 } 39%,41% { opacity: .45 } 44%,100%  { opacity: .10 } }
    @keyframes dg23aLitBB  { 0%,41% { opacity: .10 } 42%,44% { opacity: .45 } 47%,100%  { opacity: .10 } }
    @keyframes dg23aLitPur { 0%,43% { opacity: .10 } 44%,47% { opacity: .45 } 50%,100%  { opacity: .10 } }
    @keyframes dg23aLitVen { 0%,44% { opacity: .10 } 46%,53% { opacity: .45 } 58%,100%  { opacity: .10 } }
  </style>
  <defs>
    <marker id="cv23aTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-muted)"/></marker>
    <clipPath id="cv23aClip"><rect x="14" y="248" width="632" height="64"/></clipPath>
  </defs>

  <text x="12" y="20" class="dg23a-hdr">ONE BEAT, IN REAL TIME</text>
  <text x="316" y="20" class="dg23a-hdr">CONDUCTION VELOCITY (m/sec) &#8212; SLIDE 32</text>

  <rect x="12" y="26" width="294" height="214" rx="10" class="dg23a-panel"/>
  <text x="20" y="41" class="dg23a-mini">RA fires before LA (Bachmann's) &#183; dashed = ordinary atrial muscle</text>

  <path class="dg23a-heart" d="M160,52 C 116,50 64,70 64,120 C 64,178 110,216 160,234 C 210,216 256,178 256,120 C 256,70 204,50 160,52 Z"/>
  <path class="dg23a-gl dg23a-litRA"  d="M66,130 C 62,80 112,50 160,52 L160,130 Z"/>
  <path class="dg23a-gl dg23a-litLA"  d="M160,52 C 208,50 258,80 254,130 L160,130 Z"/>
  <path class="dg23a-gl dg23a-litVen" d="M68,134 C 72,186 112,218 160,234 C 208,218 248,186 252,134 Z"/>
  <line class="dg23a-div" x1="70" y1="133" x2="250" y2="133"/>
  <line class="dg23a-div" x1="160" y1="56" x2="160" y2="230"/>

  <ellipse class="dg23a-gl dg23a-litSA" cx="112" cy="64" rx="16" ry="13"/>
  <path class="dg23a-gs dg23a-litHis" d="M157,138 L157,166"/>
  <path class="dg23a-gs dg23a-litBB"  d="M157,166 C 150,182 144,196 150,220"/>
  <path class="dg23a-gs dg23a-litBB"  d="M157,166 C 166,182 172,196 168,220"/>
  <path class="dg23a-gs dg23a-litPur" d="M150,220 C 120,216 100,192 92,152"/>
  <path class="dg23a-gs dg23a-litPur" d="M150,220 C 126,222 108,208 98,180"/>
  <path class="dg23a-gs dg23a-litPur" d="M168,220 C 200,216 222,192 230,152"/>
  <path class="dg23a-gs dg23a-litPur" d="M168,220 C 196,224 214,210 224,182"/>

  <path class="dg23a-mus" d="M113,60 Q 160,44 207,72"/>
  <path class="dg23a-mus" d="M114,70 C 110,92 128,110 150,124"/>
  <path class="dg23a-mus" d="M116,71 C 130,90 142,106 154,124"/>
  <path class="dg23a-mus" d="M110,71 C 96,96 110,118 146,127"/>
  <ellipse cx="112" cy="64" rx="9" ry="6.5" fill="var(--dg-accent)"/>
  <ellipse class="dg23a-glw dg23a-litAV" cx="157" cy="127" rx="21" ry="15"/>
  <ellipse cx="157" cy="127" rx="13" ry="8.5" fill="var(--dg-surface)" stroke="var(--dg-warm)" stroke-width="2"/>
  <line class="dg23a-spec" x1="157" y1="138" x2="157" y2="166"/>
  <path class="dg23a-spec" d="M157,166 C 150,182 144,196 150,220"/>
  <path class="dg23a-spec" d="M157,166 C 166,182 172,196 168,220"/>
  <path class="dg23a-spec" d="M150,220 C 120,216 100,192 92,152" stroke-width="1.8"/>
  <path class="dg23a-spec" d="M150,220 C 126,222 108,208 98,180" stroke-width="1.8"/>
  <path class="dg23a-spec" d="M168,220 C 200,216 222,192 230,152" stroke-width="1.8"/>
  <path class="dg23a-spec" d="M168,220 C 196,224 214,210 224,182" stroke-width="1.8"/>

  <text x="80" y="116" class="dg23a-sub">RA</text>
  <text x="222" y="90" class="dg23a-sub">LA</text>
  <text x="108" y="150" class="dg23a-sub">RV</text>
  <text x="206" y="150" class="dg23a-sub">LV</text>
  <text x="16" y="72" class="dg23a-mini">high RA</text>
  <line x1="46" y1="69" x2="95" y2="65" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="262" y="124" class="dg23a-mini" fill="var(--dg-warm)">&#8776;0.1 s</text>
  <text x="262" y="136" class="dg23a-mini" fill="var(--dg-warm)">AV delay</text>
  <line x1="258" y1="128" x2="200" y2="128" stroke="var(--dg-warm)" stroke-width="1"/>

  <circle class="dg23a-gl dg23a-litSA"  cx="132" cy="78"  r="13"/>
  <circle class="dg23a-gl dg23a-litAtr" cx="196" cy="102" r="13"/>
  <circle class="dg23a-glw dg23a-litAV" cx="186" cy="128" r="13"/>
  <circle class="dg23a-gl dg23a-litHis" cx="184" cy="158" r="13"/>
  <circle class="dg23a-gl dg23a-litBB"  cx="192" cy="192" r="13"/>
  <circle class="dg23a-gl dg23a-litPur" cx="120" cy="206" r="13"/>
  <circle class="dg23a-gl dg23a-litVen" cx="216" cy="166" r="13"/>
  <circle class="dg23a-bdg" cx="132" cy="78"  r="8"/><text x="132" y="81"  text-anchor="middle" class="dg23a-num">1</text>
  <circle class="dg23a-bdg" cx="196" cy="102" r="8"/><text x="196" y="105" text-anchor="middle" class="dg23a-num">2</text>
  <circle class="dg23a-bdg" cx="186" cy="128" r="8" stroke="var(--dg-warm)"/><text x="186" y="131" text-anchor="middle" class="dg23a-num" fill="var(--dg-warm)">3</text>
  <circle class="dg23a-bdg" cx="184" cy="158" r="8"/><text x="184" y="161" text-anchor="middle" class="dg23a-num">4</text>
  <circle class="dg23a-bdg" cx="192" cy="192" r="8"/><text x="192" y="195" text-anchor="middle" class="dg23a-num">5</text>
  <circle class="dg23a-bdg" cx="120" cy="206" r="8"/><text x="120" y="209" text-anchor="middle" class="dg23a-num">6</text>
  <circle class="dg23a-bdg" cx="216" cy="166" r="8"/><text x="216" y="169" text-anchor="middle" class="dg23a-num">7</text>

  <g class="dg23a-dotB">
    <circle cx="0" cy="0" r="8" fill="var(--dg-accent)" opacity=".28"/>
    <circle cx="0" cy="0" r="4" fill="var(--dg-accent)"/>
  </g>
  <g class="dg23a-dot">
    <circle cx="0" cy="0" r="10" fill="var(--dg-accent)" opacity=".28"/>
    <circle cx="0" cy="0" r="5.5" fill="var(--dg-accent)"/>
  </g>

  <rect x="316" y="46"  width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="46"  width="332" height="23" rx="7" fill="var(--dg-accent)" class="dg23a-hl dg23a-litSA"/>
  <circle class="dg23a-bdg" cx="330" cy="57.5" r="8"/><text x="330" y="61" text-anchor="middle" class="dg23a-num">1</text>
  <text x="346" y="61" class="dg23a-lbl">SA node</text>
  <rect x="452" y="54.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="54.5" width="3" height="6" rx="3" fill="var(--dg-accent)"/>
  <text x="644" y="61" text-anchor="end" class="dg23a-val">0.01</text>

  <rect x="316" y="72"  width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="72"  width="332" height="23" rx="7" fill="var(--dg-accent)" class="dg23a-hl dg23a-litAtr"/>
  <circle class="dg23a-bdg" cx="330" cy="83.5" r="8"/><text x="330" y="87" text-anchor="middle" class="dg23a-num">2</text>
  <text x="346" y="87" class="dg23a-lbl">Atria</text>
  <rect x="452" y="80.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="80.5" width="77" height="6" rx="3" fill="var(--dg-accent)"/>
  <text x="644" y="87" text-anchor="end" class="dg23a-val">0.5&#8211;1</text>

  <rect x="316" y="98"  width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="98"  width="332" height="23" rx="7" fill="var(--dg-warm)" class="dg23a-hl dg23a-litAV"/>
  <circle class="dg23a-bdg" cx="330" cy="109.5" r="8" stroke="var(--dg-warm)"/><text x="330" y="113" text-anchor="middle" class="dg23a-num" fill="var(--dg-warm)">3</text>
  <text x="346" y="113" class="dg23a-lbl">AV node</text>
  <text x="400" y="113" class="dg23a-mini" fill="var(--dg-warm)">slowest</text>
  <rect x="452" y="106.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="106.5" width="27" height="6" rx="3" fill="var(--dg-warm)"/>
  <text x="644" y="113" text-anchor="end" class="dg23a-val" fill="var(--dg-warm)">0.01&#8211;0.05</text>

  <rect x="316" y="124" width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="124" width="332" height="23" rx="7" fill="var(--dg-accent)" class="dg23a-hl dg23a-litHis"/>
  <circle class="dg23a-bdg" cx="330" cy="135.5" r="8"/><text x="330" y="139" text-anchor="middle" class="dg23a-num">4</text>
  <text x="346" y="139" class="dg23a-lbl">His bundle</text>
  <rect x="452" y="132.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="132.5" width="88" height="6" rx="3" fill="var(--dg-accent)"/>
  <text x="644" y="139" text-anchor="end" class="dg23a-val">2</text>

  <rect x="316" y="150" width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="150" width="332" height="23" rx="7" fill="var(--dg-accent)" class="dg23a-hl dg23a-litBB"/>
  <circle class="dg23a-bdg" cx="330" cy="161.5" r="8"/><text x="330" y="165" text-anchor="middle" class="dg23a-num">5</text>
  <text x="346" y="165" class="dg23a-lbl">Bundle branches</text>
  <rect x="452" y="158.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="158.5" width="88" height="6" rx="3" fill="var(--dg-accent)"/>
  <text x="644" y="165" text-anchor="end" class="dg23a-val">2</text>

  <rect x="316" y="176" width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="176" width="332" height="23" rx="7" fill="var(--dg-good)" class="dg23a-hl dg23a-litPur"/>
  <circle class="dg23a-bdg" cx="330" cy="187.5" r="8" stroke="var(--dg-good)"/><text x="330" y="191" text-anchor="middle" class="dg23a-num" fill="var(--dg-good)">6</text>
  <text x="346" y="191" class="dg23a-lbl">Purkinje fibers</text>
  <text x="428" y="191" class="dg23a-mini" fill="var(--dg-good)">fastest</text>
  <rect x="452" y="184.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="184.5" width="100" height="6" rx="3" fill="var(--dg-good)"/>
  <text x="644" y="191" text-anchor="end" class="dg23a-val" fill="var(--dg-good)">2&#8211;4</text>

  <rect x="316" y="202" width="332" height="23" rx="7" class="dg23a-row"/>
  <rect x="316" y="202" width="332" height="23" rx="7" fill="var(--dg-accent)" class="dg23a-hl dg23a-litVen"/>
  <circle class="dg23a-bdg" cx="330" cy="213.5" r="8"/><text x="330" y="217" text-anchor="middle" class="dg23a-num">7</text>
  <text x="346" y="217" class="dg23a-lbl">Ventricles</text>
  <rect x="452" y="210.5" width="100" height="6" rx="3" class="dg23a-track"/>
  <rect x="452" y="210.5" width="77" height="6" rx="3" fill="var(--dg-accent)"/>
  <text x="644" y="217" text-anchor="end" class="dg23a-val">0.5&#8211;1</text>

  <text x="316" y="238" class="dg23a-mini">Purkinje fastest, AV node slowest &#183; bars are log-scaled</text>

  <rect x="12" y="246" width="636" height="68" rx="10" class="dg23a-panel"/>
  <path class="dg23a-trace" d="M40,294 L64,294 C 78,294 84,282 100,282 C 116,282 122,294 136,294 L340,294 L344,294 L350,300 L360,254 L374,304 L382,294 L448,294 C 468,294 474,272 496,272 C 518,272 524,294 544,294 L640,294"/>
  <path d="M140,282 L140,288 M336,282 L336,288 M140,285 L336,285" fill="none" stroke="var(--dg-warm)" stroke-width="1.2"/>
  <text x="238" y="278" text-anchor="middle" class="dg23a-mini" fill="var(--dg-warm)">AV node + His + branches: pen flat</text>
  <line x1="52" y1="288" x2="52" y2="294" stroke="var(--dg-muted)" stroke-width="1.2"/>
  <text x="44" y="266" class="dg23a-mini">SA node fires &#8212; invisible</text>
  <text x="100" y="310" text-anchor="middle" class="dg23a-val" fill="var(--dg-accent)">P</text>
  <text x="362" y="310" text-anchor="middle" class="dg23a-val" fill="var(--dg-accent)">QRS</text>
  <text x="496" y="310" text-anchor="middle" class="dg23a-val" fill="var(--dg-accent)">T</text>

  <g clip-path="url(#cv23aClip)">
    <rect class="dg23a-cover" x="38" y="248" width="608" height="64"/>
    <line class="dg23a-play" x1="38" y1="250" x2="38" y2="312"/>
  </g>
  <text x="644" y="262" text-anchor="end" class="dg23a-hdr">SURFACE ECG</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv23-transmural-depol-repol"] = {
  title: "Opposite sweeps, same-direction vector",
  caption:
    "Nine blocks of ventricular wall, one clock. Depolarisation lights them <strong>endocardium &#8594; epicardium</strong> and <strong>apex &#8594; base</strong>, because the Purkinje fibres are " +
    "sub-endocardial and reach the apex first; repolarisation switches them off <strong>epicardium &#8594; endocardium</strong> while still running apex &#8594; base. " +
    "Watch a single column: the epicardial blocks light <em>last</em> yet go dark <em>first</em>, so they stay lit for the shortest time - which is the lecture's point that epicardial " +
    "myocytes have a shorter action potential duration (higher Ito density), shown directly by the two action potentials on the right. " +
    "The dashed arrows are the direction each wave <em>travels</em> and they are opposites; the solid arrows are the net vector, and they point the same way both times, which is why an " +
    "upright QRS is normally followed by an upright T wave. Only the transmural component is drawn as the vector arrow: the lecture states the net result (&ldquo;vectors point in generally the " +
    "same direction&rdquo;) rather than resolving apex-to-base and transmural components separately, so nothing beyond that is asserted here. " +
    "Mechanically the same motion explains the pump: contraction starts at the apex and endocardium and drives blood up into the aorta; relaxation starts at the apex and epicardium, because the ventricle cannot dilate until the outer wall lets go.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A ventricular wall cross-section divided into nine blocks, three columns from endocardium to epicardium and three rows from base down to apex, animated on one clock with an action potential panel and an ECG panel on the right. During depolarisation the blocks light from the endocardial column outward and from the apex row upward, and the ECG inscribes the QRS complex. During repolarisation the blocks go dark starting from the epicardial column inward, still apex to base, and the ECG inscribes the T wave. Epicardial blocks are lit for a visibly shorter time than endocardial blocks. The action potential panel shows an endocardial myocyte action potential that starts earlier and ends later, and an epicardial action potential that starts later, has a notch, and ends first because its duration is shorter. Dashed travel arrows point in opposite transmural directions for the two waves while the solid net vector arrows point the same way, which is why the upright QRS is followed by an upright T wave.">
  <style>
    .dg23b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg23b-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg23b-band  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg23b-cell  { fill: var(--dg-accent); opacity: .5; }
    .dg23b-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .dg23b-lbl   { font-size: 9.5px; }
    .dg23b-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg23b-mini  { font-size: 8px; fill: var(--dg-muted); }
    .dg23b-vert  { font-size: 8.5px; fill: var(--dg-muted); letter-spacing: .12em; }
    .dg23b-hl    { opacity: .12; }
    .dg23b-trav  { fill: none; stroke-width: 2.4; stroke-dasharray: 6 4; opacity: .3; }
    .dg23b-vec   { fill: none; stroke: var(--dg-ink); stroke-width: 2.4; }
    .dg23b-ap    { fill: none; stroke-width: 2.2; stroke-linejoin: round; }
    .dg23b-mark  { stroke: var(--dg-muted); stroke-width: 1.1; stroke-dasharray: 4 3; }
    .dg23b-play  { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .8; transform: translateX(280px); animation: dg23bSweep 12s linear infinite; }
    .dg23b-k1 { animation: dg23bK1 12s linear infinite; }
    .dg23b-k2 { animation: dg23bK2 12s linear infinite; }
    .dg23b-k3 { animation: dg23bK3 12s linear infinite; }
    .dg23b-k4 { animation: dg23bK4 12s linear infinite; }
    .dg23b-k5 { animation: dg23bK5 12s linear infinite; }
    .dg23b-k6 { animation: dg23bK6 12s linear infinite; }
    .dg23b-k7 { animation: dg23bK7 12s linear infinite; }
    .dg23b-k8 { animation: dg23bK8 12s linear infinite; }
    .dg23b-k9 { animation: dg23bK9 12s linear infinite; }
    .dg23b-pd { animation: dg23bDep 12s linear infinite; }
    .dg23b-pr { animation: dg23bRep 12s linear infinite; }
    .dg23b-ad { animation: dg23bArrD 12s linear infinite; }
    .dg23b-ar { animation: dg23bArrR 12s linear infinite; }
    @keyframes dg23bSweep { 0% { transform: translateX(0) } 94%,100% { transform: translateX(280px) } }
    @keyframes dg23bK1 { 0%,14% { opacity: 0 } 17%,68% { opacity: 1 } 71%,100% { opacity: 0 } }
    @keyframes dg23bK2 { 0%,11% { opacity: 0 } 14%,65% { opacity: 1 } 68%,100% { opacity: 0 } }
    @keyframes dg23bK3 { 0%,8%  { opacity: 0 } 11%,62% { opacity: 1 } 65%,100% { opacity: 0 } }
    @keyframes dg23bK4 { 0%,20% { opacity: 0 } 23%,62% { opacity: 1 } 65%,100% { opacity: 0 } }
    @keyframes dg23bK5 { 0%,17% { opacity: 0 } 20%,59% { opacity: 1 } 62%,100% { opacity: 0 } }
    @keyframes dg23bK6 { 0%,14% { opacity: 0 } 17%,56% { opacity: 1 } 59%,100% { opacity: 0 } }
    @keyframes dg23bK7 { 0%,26% { opacity: 0 } 29%,56% { opacity: 1 } 59%,100% { opacity: 0 } }
    @keyframes dg23bK8 { 0%,23% { opacity: 0 } 26%,53% { opacity: 1 } 56%,100% { opacity: 0 } }
    @keyframes dg23bK9 { 0%,20% { opacity: 0 } 23%,50% { opacity: 1 } 53%,100% { opacity: 0 } }
    @keyframes dg23bDep  { 0%,7%  { opacity: .12 } 9%,28%  { opacity: .40 } 32%,100% { opacity: .12 } }
    @keyframes dg23bRep  { 0%,48% { opacity: .12 } 50%,72% { opacity: .40 } 76%,100% { opacity: .12 } }
    @keyframes dg23bArrD { 0%,7%  { opacity: .3 }  9%,28%  { opacity: 1 }   32%,100% { opacity: .3 } }
    @keyframes dg23bArrR { 0%,48% { opacity: .3 }  50%,72% { opacity: 1 }   76%,100% { opacity: .3 } }
  </style>
  <defs>
    <marker id="cv23bTipA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-accent)"/></marker>
    <marker id="cv23bTipW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-warm)"/></marker>
    <marker id="cv23bTipK" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-ink)"/></marker>
    <marker id="cv23bTipG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-good)"/></marker>
  </defs>

  <rect x="12" y="26" width="310" height="218" rx="10" class="dg23b-panel"/>
  <text x="162" y="44" text-anchor="middle" class="dg23b-sub">BASE</text>
  <text x="162" y="224" text-anchor="middle" class="dg23b-sub">APEX</text>

  <rect x="36" y="52" width="44" height="156" rx="6" fill="var(--dg-surface)" stroke="var(--dg-line)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="58" y="222" text-anchor="middle" class="dg23b-mini">cavity</text>
  <g class="dg23b-ad">
    <line x1="58" y1="192" x2="58" y2="84" stroke="var(--dg-good)" stroke-width="2.6" marker-end="url(#cv23bTipG)"/>
  </g>
  <text x="58" y="70" text-anchor="middle" class="dg23b-mini">to aorta</text>

  <rect x="94" y="50" width="138" height="160" rx="6" class="dg23b-band"/>
  <rect class="dg23b-cell dg23b-k1" x="96"  y="52"  width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k2" x="96"  y="105" width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k3" x="96"  y="158" width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k4" x="141" y="52"  width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k5" x="141" y="105" width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k6" x="141" y="158" width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k7" x="186" y="52"  width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k8" x="186" y="105" width="42" height="50" rx="5"/>
  <rect class="dg23b-cell dg23b-k9" x="186" y="158" width="42" height="50" rx="5"/>

  <line class="dg23b-trav dg23b-ad" x1="104" y1="200" x2="220" y2="66" stroke="var(--dg-accent)" marker-end="url(#cv23bTipA)"/>
  <line class="dg23b-trav dg23b-ar" x1="222" y1="200" x2="106" y2="66" stroke="var(--dg-warm)" marker-end="url(#cv23bTipW)"/>

  <text transform="rotate(-90 86 130)" x="86" y="130" text-anchor="middle" class="dg23b-vert">ENDOCARDIUM (PURKINJE)</text>
  <text transform="rotate(90 242 130)" x="242" y="130" text-anchor="middle" class="dg23b-vert">EPICARDIUM</text>
  <text x="117" y="236" text-anchor="middle" class="dg23b-mini">endo</text>
  <text x="162" y="236" text-anchor="middle" class="dg23b-mini">mid</text>
  <text x="207" y="236" text-anchor="middle" class="dg23b-mini">epi</text>
  <text x="238" y="196" class="dg23b-mini" fill="var(--dg-cool)">endo fires first,</text>
  <text x="238" y="206" class="dg23b-mini" fill="var(--dg-cool)">resets last</text>
  <text x="238" y="66" class="dg23b-mini" fill="var(--dg-accent)">epi fires last,</text>
  <text x="238" y="76" class="dg23b-mini" fill="var(--dg-accent)">resets first</text>

  <rect x="12" y="250" width="310" height="30" rx="8" class="dg23b-card"/>
  <rect x="12" y="250" width="310" height="30" rx="8" fill="var(--dg-accent)" class="dg23b-hl dg23b-pd"/>
  <text x="24" y="264" class="dg23b-lbl" font-weight="700" fill="var(--dg-accent)">DEPOLARIZATION &#8594; QRS</text>
  <text x="24" y="275" class="dg23b-mini">travels endo &#8594; epi, apex &#8594; base</text>
  <text x="248" y="260" text-anchor="middle" class="dg23b-mini">net vector</text>
  <line class="dg23b-vec" x1="206" y1="271" x2="286" y2="271" marker-end="url(#cv23bTipK)"/>

  <rect x="12" y="284" width="310" height="30" rx="8" class="dg23b-card"/>
  <rect x="12" y="284" width="310" height="30" rx="8" fill="var(--dg-warm)" class="dg23b-hl dg23b-pr"/>
  <text x="24" y="298" class="dg23b-lbl" font-weight="700" fill="var(--dg-warm)">REPOLARIZATION &#8594; T</text>
  <text x="24" y="309" class="dg23b-mini">travels epi &#8594; endo, apex &#8594; base</text>
  <text x="248" y="294" text-anchor="middle" class="dg23b-mini">same net vector</text>
  <line class="dg23b-vec" x1="206" y1="305" x2="286" y2="305" marker-end="url(#cv23bTipK)"/>

  <rect x="332" y="26" width="316" height="146" rx="10" class="dg23b-panel"/>
  <text x="344" y="42" class="dg23b-hdr">ACTION POTENTIAL DURATION</text>
  <line x1="500" y1="39" x2="516" y2="39" stroke="var(--dg-cool)" stroke-width="2.4"/>
  <text x="520" y="42" class="dg23b-mini">endo</text>
  <line x1="562" y1="39" x2="578" y2="39" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="582" y="42" class="dg23b-mini">epi</text>
  <line x1="356" y1="150" x2="636" y2="150" stroke="var(--dg-line)" stroke-width="1.2"/>
  <path class="dg23b-ap" stroke="var(--dg-cool)"   d="M356,150 L381,150 L385,62 L389,76 L394,78 L530,80 C 540,84 546,150 552,150 L636,150"/>
  <path class="dg23b-ap" stroke="var(--dg-accent)" d="M356,150 L417,150 L421,60 L425,86 L430,70 L497,74 C 505,78 509,150 514,150 L636,150"/>
  <line class="dg23b-mark" x1="514" y1="58" x2="514" y2="160"/>
  <line class="dg23b-mark" x1="552" y1="58" x2="552" y2="160"/>
  <text x="516" y="56" class="dg23b-mini" fill="var(--dg-accent)">epi ends first</text>
  <text x="556" y="166" class="dg23b-mini" fill="var(--dg-cool)">endo ends last</text>
  <text x="344" y="166" class="dg23b-mini">epicardium: more Ito &#8594; shorter AP duration</text>

  <rect x="332" y="178" width="316" height="136" rx="10" class="dg23b-panel"/>
  <text x="344" y="196" class="dg23b-hdr">SURFACE ECG</text>
  <path class="dg23b-ap" stroke="var(--dg-ink)" d="M356,272 C 360,272 362,264 366,264 C 370,264 372,272 376,272 L380,272 L384,278 L396,214 L412,284 L420,272 L500,272 C 514,272 518,240 532,240 C 546,240 552,272 566,272 L636,272"/>
  <text x="366" y="290" class="dg23b-mini">P</text>
  <text x="396" y="298" text-anchor="middle" class="dg23b-lbl" font-weight="700">QRS</text>
  <text x="532" y="290" text-anchor="middle" class="dg23b-lbl" font-weight="700">T</text>
  <text x="344" y="308" class="dg23b-mini" fill="var(--dg-good)">upright QRS &#8594; upright T wave (same net vector)</text>

  <line class="dg23b-play" x1="356" y1="32" x2="356" y2="308"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv23-pacemaker-rate-levers"] = {
  title: "Three levers on the pacemaker",
  caption:
    "Rate is a distance-and-speed problem, and only motion shows the &ldquo;time&rdquo; part. On the left, one sinus cell is drawn twice on the same axes: at baseline it climbs from its " +
    "maximum diastolic potential to threshold and fires four times while the vagal version - hyperpolarised further by IKACh and climbing on a flatter phase 4 because less If and " +
    "less ICa-L are available - fires only twice. The two beat rails make the stretched interval literal. On the right each lever moves alone: the pale dot is the reference cell and " +
    "the coloured dot is the altered one, both climbing at the same pace, so the horizontal gap where the coloured dot arrives late <em>is</em> the extra time to threshold. " +
    "Flatter slope = less speed; a more negative maximum diastolic potential or a raised (less negative) threshold = more distance. All three arrive at the same answer: a slower heart rate. " +
    "The lecture supplies no threshold voltage, so none is drawn; the only voltage stated is the roughly &#8722;60 to &#8722;65 mV floor that repolarisation dips below to open the funny channel. " +
    "The four-beats-versus-two ratio and the bar lengths are schematic, not measured values. The lecture phrases the model as &ldquo;heart rate = distance / speed&rdquo;; mechanically, distance divided by speed is the time to the next beat, which is what is animated here.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A pacemaker cell membrane potential plot with three lever cards. On the left, two traces share one set of axes: the baseline sinus trace climbs from its maximum diastolic potential to threshold and fires four times, while the vagal trace starts from a more negative maximum diastolic potential and climbs on a flatter phase 4 slope, firing only twice in the same window. Two beat rails below show the vagal interval is about twice as long. On the right, three cards each move one determinant: card one flattens the phase 4 slope, which is the speed; card two lowers the maximum diastolic potential, which increases the distance; card three raises the threshold to a less negative level, which also increases the distance. In every card a reference dot and an altered dot climb at the same pace and the altered dot reaches threshold later, and the extra time is marked. All three changes slow the heart rate.">
  <style>
    .dg23c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg23c-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg23c-hdr   { font-size: 9.5px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .07em; }
    .dg23c-lbl   { font-size: 9px; }
    .dg23c-mini  { font-size: 8px; fill: var(--dg-muted); }
    .dg23c-tiny  { font-size: 7.5px; fill: var(--dg-muted); }
    .dg23c-tr    { fill: none; stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg23c-ref   { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 5 4; opacity: .8; }
    .dg23c-axis  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg23c-slow  { fill: none; stroke: var(--dg-warm); stroke-width: 2.2; }
    .dg23c-fast  { fill: none; stroke: var(--dg-ink); stroke-width: 1.8; opacity: .55; }
    .dg23c-tick  { stroke-width: 3; stroke-linecap: round; opacity: .38; animation: dg23cFlash 8s linear infinite; }
    .dg23c-t1 { animation-delay: 1.40s }
    .dg23c-t2 { animation-delay: 3.15s }
    .dg23c-t3 { animation-delay: 4.89s }
    .dg23c-t4 { animation-delay: 6.63s }
    .dg23c-v1 { animation-delay: 3.09s }
    .dg23c-v2 { animation-delay: 6.57s }
    .dg23c-play { stroke: var(--dg-accent); stroke-width: 1.4; opacity: .8; transform: translateX(262px); animation: dg23cSweep 8s linear infinite; }
    .dg23c-run0 { transform: translate(0,0); opacity: .9; animation: dg23cRun0 8s linear infinite; }
    .dg23c-run1 { transform: translate(0,0); opacity: .9; animation: dg23cRun1 8s linear infinite; }
    .dg23c-run2 { transform: translate(0,0); opacity: .9; animation: dg23cRun2 8s linear infinite; }
    .dg23c-run3 { transform: translate(0,0); opacity: .9; animation: dg23cRun3 8s linear infinite; }
    @keyframes dg23cFlash { 0% { opacity: 1 } 8%,100% { opacity: .38 } }
    @keyframes dg23cSweep { 0% { transform: translateX(0) } 92%,100% { transform: translateX(262px) } }
    @keyframes dg23cRun0 { 0% { transform: translate(0,0); opacity: 0 } 4% { opacity: 1 } 40% { transform: translate(50px,-34px); opacity: 1 } 48%,100% { transform: translate(50px,-34px); opacity: 0 } }
    @keyframes dg23cRun1 { 0% { transform: translate(0,0); opacity: 0 } 4% { opacity: 1 } 80% { transform: translate(100px,-34px); opacity: 1 } 88%,100% { transform: translate(100px,-34px); opacity: 0 } }
    @keyframes dg23cRun2 { 0% { transform: translate(0,0); opacity: 0 } 4% { opacity: 1 } 56% { transform: translate(70px,-48px); opacity: 1 } 64%,100% { transform: translate(70px,-48px); opacity: 0 } }
    @keyframes dg23cRun3 { 0% { transform: translate(0,0); opacity: 0 } 4% { opacity: 1 } 54% { transform: translate(68px,-46px); opacity: 1 } 62%,100% { transform: translate(68px,-46px); opacity: 0 } }
  </style>
  <defs>
    <marker id="cv23cTip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="var(--dg-warm)"/></marker>
  </defs>

  <text x="12" y="20" class="dg23c-hdr">ONE CELL, TWO STATES</text>
  <text x="340" y="20" class="dg23c-hdr">MOVE ONE LEVER AT A TIME</text>

  <rect x="12" y="26" width="318" height="288" rx="10" class="dg23c-panel"/>
  <line x1="20" y1="40" x2="34" y2="40" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="38" y="43" class="dg23c-mini">sinus baseline</text>
  <line x1="140" y1="40" x2="154" y2="40" stroke="var(--dg-warm)" stroke-width="2.4"/>
  <text x="158" y="43" class="dg23c-mini">with vagal ACh</text>

  <line class="dg23c-ref" x1="56" y1="92" x2="322" y2="92" stroke="var(--dg-accent)"/>
  <line class="dg23c-ref" x1="56" y1="168" x2="322" y2="168"/>
  <line class="dg23c-ref" x1="56" y1="194" x2="322" y2="194" stroke="var(--dg-warm)"/>
  <text x="52" y="89" text-anchor="end" class="dg23c-mini" fill="var(--dg-accent)">threshold</text>
  <text x="52" y="165" text-anchor="end" class="dg23c-mini">MDP</text>
  <text x="52" y="191" text-anchor="end" class="dg23c-mini" fill="var(--dg-warm)">vagal MDP</text>

  <path class="dg23c-tr" stroke="var(--dg-accent)" d="M60,168 L110,92 L112,66 L116,92 L122,168 L172,92 L174,66 L178,92 L184,168 L234,92 L236,66 L240,92 L246,168 L296,92 L298,66 L302,92 L308,168 L322,147"/>
  <path class="dg23c-tr" stroke="var(--dg-warm)"   d="M60,194 L170,92 L172,66 L176,92 L184,194 L294,92 L296,66 L300,92 L308,194 L322,181"/>
  <text x="90" y="158" class="dg23c-mini" fill="var(--dg-accent)">phase 4 (If)</text>
  <line class="dg23c-axis" x1="56" y1="214" x2="322" y2="214"/>
  <text x="322" y="211" text-anchor="end" class="dg23c-mini">time &#8594;</text>

  <text x="16" y="228" class="dg23c-tiny">MDP = maximum diastolic potential (&#8776; &#8722;60 to &#8722;65 mV in this lecture)</text>
  <text x="16" y="238" class="dg23c-tiny" fill="var(--dg-good)">Sympathetic does the reverse: cAMP opens HCN &#8594; steeper phase 4 &#8594; faster</text>

  <line class="dg23c-axis" x1="60" y1="246" x2="322" y2="246"/>
  <text x="52" y="249" text-anchor="end" class="dg23c-mini" fill="var(--dg-accent)">sinus</text>
  <line class="dg23c-tick dg23c-t1" x1="110" y1="238" x2="110" y2="254" stroke="var(--dg-accent)"/>
  <line class="dg23c-tick dg23c-t2" x1="172" y1="238" x2="172" y2="254" stroke="var(--dg-accent)"/>
  <line class="dg23c-tick dg23c-t3" x1="234" y1="238" x2="234" y2="254" stroke="var(--dg-accent)"/>
  <line class="dg23c-tick dg23c-t4" x1="296" y1="238" x2="296" y2="254" stroke="var(--dg-accent)"/>
  <path d="M110,258 L110,264 M172,258 L172,264 M110,261 L172,261" fill="none" stroke="var(--dg-muted)" stroke-width="1.1"/>
  <text x="141" y="274" text-anchor="middle" class="dg23c-tiny">interval</text>

  <line class="dg23c-axis" x1="60" y1="286" x2="322" y2="286"/>
  <text x="52" y="289" text-anchor="end" class="dg23c-mini" fill="var(--dg-warm)">vagal</text>
  <line class="dg23c-tick dg23c-v1" x1="170" y1="278" x2="170" y2="294" stroke="var(--dg-warm)"/>
  <line class="dg23c-tick dg23c-v2" x1="294" y1="278" x2="294" y2="294" stroke="var(--dg-warm)"/>
  <path d="M170,298 L170,304 M294,298 L294,304 M170,301 L294,301" fill="none" stroke="var(--dg-warm)" stroke-width="1.1"/>
  <text x="232" y="311" text-anchor="middle" class="dg23c-tiny" fill="var(--dg-warm)">about twice as long</text>

  <line class="dg23c-play" x1="60" y1="56" x2="60" y2="304"/>

  <rect x="340" y="26" width="308" height="90" rx="10" class="dg23c-card"/>
  <text x="352" y="46" class="dg23c-lbl" font-weight="700" fill="var(--dg-accent)">1 &#183; PHASE 4 SLOPE = SPEED</text>
  <text x="352" y="62" class="dg23c-mini">Flatter slope = slower climb,</text>
  <text x="352" y="74" class="dg23c-mini">so threshold arrives later.</text>
  <text x="352" y="92" class="dg23c-lbl" font-weight="700" fill="var(--dg-warm)">&#8594; slower heart rate</text>
  <line class="dg23c-ref" x1="492" y1="56" x2="640" y2="56" stroke="var(--dg-accent)"/>
  <line class="dg23c-ref" x1="492" y1="90" x2="640" y2="90"/>
  <line class="dg23c-fast" x1="496" y1="90" x2="546" y2="56"/>
  <line class="dg23c-slow" x1="496" y1="90" x2="596" y2="56"/>
  <g class="dg23c-run0"><circle cx="496" cy="90" r="3.6" fill="var(--dg-ink)" opacity=".6"/></g>
  <g class="dg23c-run1"><circle cx="496" cy="90" r="4.4" fill="var(--dg-warm)"/></g>
  <path d="M546,98 L546,104 M596,98 L596,104 M546,101 L596,101" fill="none" stroke="var(--dg-warm)" stroke-width="1.1"/>
  <text x="571" y="112" text-anchor="middle" class="dg23c-tiny" fill="var(--dg-warm)">extra time</text>

  <rect x="340" y="122" width="308" height="90" rx="10" class="dg23c-card"/>
  <text x="352" y="142" class="dg23c-lbl" font-weight="700" fill="var(--dg-accent)">2 &#183; MAX DIASTOLIC POTENTIAL</text>
  <text x="352" y="158" class="dg23c-mini">More negative = greater</text>
  <text x="352" y="170" class="dg23c-mini">distance to cover.</text>
  <text x="352" y="188" class="dg23c-lbl" font-weight="700" fill="var(--dg-warm)">&#8594; slower heart rate</text>
  <line class="dg23c-ref" x1="492" y1="152" x2="640" y2="152" stroke="var(--dg-accent)"/>
  <line class="dg23c-ref" x1="492" y1="186" x2="640" y2="186"/>
  <line class="dg23c-ref" x1="492" y1="200" x2="640" y2="200" stroke="var(--dg-warm)"/>
  <line class="dg23c-fast" x1="496" y1="186" x2="546" y2="152"/>
  <line class="dg23c-slow" x1="496" y1="200" x2="566" y2="152"/>
  <g class="dg23c-run0"><circle cx="496" cy="186" r="3.6" fill="var(--dg-ink)" opacity=".6"/></g>
  <g class="dg23c-run2"><circle cx="496" cy="200" r="4.4" fill="var(--dg-warm)"/></g>
  <path d="M546,166 L546,172 M566,166 L566,172 M546,169 L566,169" fill="none" stroke="var(--dg-warm)" stroke-width="1.1"/>
  <text x="592" y="172" class="dg23c-tiny" fill="var(--dg-warm)">extra time</text>

  <rect x="340" y="218" width="308" height="90" rx="10" class="dg23c-card"/>
  <text x="352" y="238" class="dg23c-lbl" font-weight="700" fill="var(--dg-accent)">3 &#183; THRESHOLD LEVEL</text>
  <text x="352" y="254" class="dg23c-mini">Raised (less negative) =</text>
  <text x="352" y="266" class="dg23c-mini">greater distance to cover.</text>
  <text x="352" y="284" class="dg23c-lbl" font-weight="700" fill="var(--dg-warm)">&#8594; slower heart rate</text>
  <line class="dg23c-ref" x1="492" y1="236" x2="640" y2="236" stroke="var(--dg-warm)"/>
  <line class="dg23c-ref" x1="492" y1="248" x2="640" y2="248" stroke="var(--dg-accent)"/>
  <line class="dg23c-ref" x1="492" y1="282" x2="640" y2="282"/>
  <line class="dg23c-fast" x1="496" y1="282" x2="546" y2="248"/>
  <line class="dg23c-slow" x1="496" y1="282" x2="564" y2="236"/>
  <g class="dg23c-run0"><circle cx="496" cy="282" r="3.6" fill="var(--dg-ink)" opacity=".6"/></g>
  <g class="dg23c-run3"><circle cx="496" cy="282" r="4.4" fill="var(--dg-warm)"/></g>
  <path d="M546,290 L546,296 M564,290 L564,296 M546,293 L564,293" fill="none" stroke="var(--dg-warm)" stroke-width="1.1"/>
  <text x="590" y="296" class="dg23c-tiny" fill="var(--dg-warm)">extra time</text>
  <text x="492" y="228" class="dg23c-tiny" fill="var(--dg-warm)">raised threshold</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv90-ganglia-map"] = {
  title: "Ganglia release on the midline",
  caption:
    "All three collateral ganglia are treated on the mid-abdominal line: celiac just below the xiphoid, superior mesenteric halfway down, inferior mesenteric just above the umbilicus. " +
    "Each pulse is the same move - gentle downward pressure, match the resistance, hold until it softens. " +
    "The right-hand column is the viscerosomatic table from Slide 1 (FOM Lecture #2), which links each region of gut to its spinal level; a post-operative midline scar contraindicates the technique.",
  svg: `
<svg class="dg90a" viewBox="0 0 640 300" role="img" aria-label="Front view of the abdomen with the midline running from xiphoid to umbilicus. Celiac contact just below the xiphoid matches upper GI at T5 to T9, superior mesenteric contact halfway down matches middle GI at T10 to T11, and inferior mesenteric contact just above the umbilicus matches lower GI at T12 to L2.">
  <style>
    .dg90a .dg90a-body { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg90a .dg90a-mid  { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg90a .dg90a-lm   { font-size: 11px; fill: var(--dg-muted); }
    .dg90a .dg90a-lbl  { font-size: 13px; font-weight: 700; }
    .dg90a .dg90a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg90a .dg90a-lvl  { font-size: 14px; font-weight: 700; fill: var(--dg-accent); }
    .dg90a .dg90a-link { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg90a .dg90a-dot  { fill: var(--dg-warm); }
    .dg90a .dg90a-ring { fill: none; stroke: var(--dg-warm); stroke-width: 2; }
    .dg90a .dg90a-p1 { animation: dg90apress 4.5s ease-in-out infinite; }
    .dg90a .dg90a-p2 { animation: dg90apress 4.5s ease-in-out infinite 1.5s; }
    .dg90a .dg90a-p3 { animation: dg90apress 4.5s ease-in-out infinite 3s; }
    @keyframes dg90apress { 0%,100% { opacity: .35 } 15%,30% { opacity: 1 } }
  </style>

  <path d="M70 30 Q150 10 230 30 L250 270 Q150 290 50 270 Z" class="dg90a-body"/>
  <line x1="150" y1="40" x2="150" y2="240" class="dg90a-mid"/>
  <polygon points="140,30 160,30 150,48" fill="var(--dg-muted)"/>
  <text x="166" y="42" class="dg90a-lm">xiphoid</text>
  <circle cx="150" cy="240" r="7" fill="none" stroke="var(--dg-muted)" stroke-width="1.5"/>
  <text x="166" y="244" class="dg90a-lm">umbilicus</text>

  <g class="dg90a-p1">
    <circle cx="150" cy="70" r="6" class="dg90a-dot"/>
    <circle cx="150" cy="70" r="13" class="dg90a-ring"/>
  </g>
  <g class="dg90a-p2">
    <circle cx="150" cy="140" r="6" class="dg90a-dot"/>
    <circle cx="150" cy="140" r="13" class="dg90a-ring"/>
  </g>
  <g class="dg90a-p3">
    <circle cx="150" cy="212" r="6" class="dg90a-dot"/>
    <circle cx="150" cy="212" r="13" class="dg90a-ring"/>
  </g>

  <line x1="166" y1="70" x2="290" y2="70" class="dg90a-link"/>
  <line x1="166" y1="140" x2="290" y2="140" class="dg90a-link"/>
  <line x1="166" y1="212" x2="290" y2="212" class="dg90a-link"/>

  <text x="296" y="66" class="dg90a-lbl">Celiac</text>
  <text x="296" y="82" class="dg90a-sub">just below the xiphoid</text>
  <text x="296" y="136" class="dg90a-lbl">Superior mesenteric</text>
  <text x="296" y="152" class="dg90a-sub">halfway, xiphoid to umbilicus</text>
  <text x="296" y="208" class="dg90a-lbl">Inferior mesenteric</text>
  <text x="296" y="224" class="dg90a-sub">just above the umbilicus</text>

  <text x="486" y="30" class="dg90a-sub">Slide 1 level</text>
  <text x="486" y="66" class="dg90a-lvl">T5-T9</text>
  <text x="486" y="82" class="dg90a-sub">upper GI</text>
  <text x="486" y="136" class="dg90a-lvl">T10-T11</text>
  <text x="486" y="152" class="dg90a-sub">middle GI</text>
  <text x="486" y="208" class="dg90a-lvl">T12-L2</text>
  <text x="486" y="224" class="dg90a-sub">lower GI</text>

  <text x="296" y="280" class="dg90a-sub">Press, match resistance, hold until softening. Not over a midline scar.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv90-colonic-passes"] = {
  title: "Colonic stimulation: three passes",
  caption:
    "Front view, so the patient's right colon is on the left of the picture. " +
    "Pass 1 starts at the splenic flexure and rolls down the descending colon toward the sigmoid; pass 2 starts at the hepatic flexure; pass 3 starts at the cecum. " +
    "Every pass rolls in the direction of colonic flow and ends in the descending colon, so the distal bowel is cleared before anything is pushed into it.",
  svg: `
<svg class="dg90b" viewBox="0 0 640 300" role="img" aria-label="Frame-shaped colon seen from the front. Pass one runs from the splenic flexure down the descending colon. Pass two runs from the hepatic flexure across the transverse colon and down the descending colon. Pass three runs from the cecum up the ascending colon, across and down.">
  <style>
    .dg90b .dg90b-colon { fill: none; stroke: var(--dg-panel); stroke-width: 30; stroke-linejoin: round; stroke-linecap: round; }
    .dg90b .dg90b-edge  { fill: none; stroke: var(--dg-line); stroke-width: 34; stroke-linejoin: round; stroke-linecap: round; }
    .dg90b .dg90b-lm    { font-size: 11px; fill: var(--dg-muted); }
    .dg90b .dg90b-lbl   { font-size: 13px; font-weight: 700; }
    .dg90b .dg90b-t1 { fill: var(--dg-warm); }
    .dg90b .dg90b-t2 { fill: var(--dg-accent); }
    .dg90b .dg90b-t3 { fill: var(--dg-cool); }
    .dg90b .dg90b-pass  { fill: none; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 100; stroke-dashoffset: 0; }
    .dg90b .dg90b-one   { stroke: var(--dg-warm); animation: dg90bdraw 6s linear infinite; }
    .dg90b .dg90b-two   { stroke: var(--dg-accent); animation: dg90bdraw 6s linear infinite 2s; }
    .dg90b .dg90b-three { stroke: var(--dg-cool); animation: dg90bdraw 6s linear infinite 4s; }
    @keyframes dg90bdraw { 0% { stroke-dashoffset: 100 } 30% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: 0 } }
  </style>

  <path d="M90 250 L90 60 L330 60 L330 230 Q330 270 290 262" class="dg90b-edge"/>
  <path d="M90 250 L90 60 L330 60 L330 230 Q330 270 290 262" class="dg90b-colon"/>

  <text x="40" y="274" class="dg90b-lm">cecum</text>
  <text x="30" y="46" class="dg90b-lm">hepatic flexure</text>
  <text x="300" y="36" class="dg90b-lm">splenic flexure</text>
  <text x="250" y="292" class="dg90b-lm">toward sigmoid</text>
  <text x="104" y="160" class="dg90b-lm">ascending</text>
  <text x="180" y="90" class="dg90b-lm">transverse</text>
  <text x="252" y="160" class="dg90b-lm">descending</text>

  <path d="M322 68 L322 240" pathLength="100" class="dg90b-pass dg90b-one"/>
  <polygon points="315,236 329,236 322,252" fill="var(--dg-warm)"/>
  <path d="M98 54 L338 54 L338 236" pathLength="100" class="dg90b-pass dg90b-two"/>
  <polygon points="331,232 345,232 338,248" fill="var(--dg-accent)"/>
  <path d="M82 252 L82 44 L346 44 L346 232" pathLength="100" class="dg90b-pass dg90b-three"/>
  <polygon points="339,228 353,228 346,244" fill="var(--dg-cool)"/>

  <text x="400" y="80" class="dg90b-lbl dg90b-t1">1 - splenic flexure</text>
  <text x="400" y="98" class="dg90b-lm">down the descending colon</text>
  <text x="400" y="140" class="dg90b-lbl dg90b-t2">2 - hepatic flexure</text>
  <text x="400" y="158" class="dg90b-lm">transverse, then descending</text>
  <text x="400" y="200" class="dg90b-lbl dg90b-t3">3 - cecum</text>
  <text x="400" y="218" class="dg90b-lm">ascending, transverse, descending</text>
  <text x="400" y="262" class="dg90b-lm">Roll with colonic flow, one hand's width at a time</text>
</svg>`,
};

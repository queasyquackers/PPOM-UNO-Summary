window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv99-s2-split"] = {
  title: "S2 splitting patterns",
  caption: "Each row shows one heartbeat in expiration (left) and inspiration (right); the sweeping line is the listener moving through the beat. Normally A2 and P2 fuse in expiration and separate on inspiration because extra RV preload delays pulmonic closure. An ASD keeps the gap fixed in both phases, aortic stenosis delays A2 so the split appears in expiration and closes on inspiration, and pulmonary hypertension or pulmonic stenosis widens a split that is present in both phases. Spacing is schematic, not to scale.",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Four rows of heart-sound timelines comparing expiration and inspiration. Normal: single S2 in expiration, A2 then P2 split on inspiration. Fixed split in atrial septal defect: same A2 to P2 gap in both phases. Paradoxical split in aortic stenosis: P2 then A2 split in expiration, single S2 on inspiration. Wide split in pulmonary hypertension or pulmonic stenosis: split in both phases, wider on inspiration.">
  <style>
    .dg99a-head { font-size: 13px; font-weight: 700; }
    .dg99a-lbl { font-size: 12px; font-weight: 700; }
    .dg99a-sub { font-size: 10px; fill: var(--dg-muted); }
    .dg99a-base { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg99a-s1 { stroke: var(--dg-ink); stroke-width: 3; }
    .dg99a-a2 { stroke: var(--dg-warm); stroke-width: 3; }
    .dg99a-p2 { stroke: var(--dg-cool); stroke-width: 3; }
    .dg99a-ta { font-size: 10px; fill: var(--dg-warm); font-weight: 700; }
    .dg99a-tp { font-size: 10px; fill: var(--dg-cool); font-weight: 700; }
    .dg99a-play { stroke: var(--dg-accent); stroke-width: 2; opacity: .8; animation: dg99asweep 3.2s linear infinite; }
    @keyframes dg99asweep { 0% { transform: translateX(0); opacity: 0 } 8% { opacity: .8 } 92% { opacity: .8 } 100% { transform: translateX(190px); opacity: 0 } }
  </style>
  <text x="200" y="22" class="dg99a-head">Expiration</text>
  <text x="430" y="22" class="dg99a-head">Inspiration</text>

  <text x="10" y="66" class="dg99a-lbl">Normal</text>
  <text x="10" y="80" class="dg99a-sub">physiologic split</text>
  <line x1="190" y1="70" x2="390" y2="70" class="dg99a-base"/>
  <line x1="420" y1="70" x2="620" y2="70" class="dg99a-base"/>
  <line x1="205" y1="56" x2="205" y2="84" class="dg99a-s1"/><text x="199" y="50" class="dg99a-sub">S1</text>
  <line x1="330" y1="56" x2="330" y2="84" class="dg99a-a2"/><line x1="334" y1="56" x2="334" y2="84" class="dg99a-p2"/><text x="322" y="50" class="dg99a-sub">single S2</text>
  <line x1="435" y1="56" x2="435" y2="84" class="dg99a-s1"/><text x="429" y="50" class="dg99a-sub">S1</text>
  <line x1="545" y1="56" x2="545" y2="84" class="dg99a-a2"/><text x="538" y="50" class="dg99a-ta">A2</text>
  <line x1="575" y1="56" x2="575" y2="84" class="dg99a-p2"/><text x="568" y="50" class="dg99a-tp">P2</text>

  <text x="10" y="126" class="dg99a-lbl">Fixed</text>
  <text x="10" y="140" class="dg99a-sub">atrial septal defect</text>
  <line x1="190" y1="130" x2="390" y2="130" class="dg99a-base"/>
  <line x1="420" y1="130" x2="620" y2="130" class="dg99a-base"/>
  <line x1="205" y1="116" x2="205" y2="144" class="dg99a-s1"/>
  <line x1="315" y1="116" x2="315" y2="144" class="dg99a-a2"/><text x="308" y="110" class="dg99a-ta">A2</text>
  <line x1="345" y1="116" x2="345" y2="144" class="dg99a-p2"/><text x="338" y="110" class="dg99a-tp">P2</text>
  <line x1="435" y1="116" x2="435" y2="144" class="dg99a-s1"/>
  <line x1="545" y1="116" x2="545" y2="144" class="dg99a-a2"/><text x="538" y="110" class="dg99a-ta">A2</text>
  <line x1="575" y1="116" x2="575" y2="144" class="dg99a-p2"/><text x="568" y="110" class="dg99a-tp">P2</text>

  <text x="10" y="186" class="dg99a-lbl">Paradoxical</text>
  <text x="10" y="200" class="dg99a-sub">aortic stenosis, LBBB</text>
  <line x1="190" y1="190" x2="390" y2="190" class="dg99a-base"/>
  <line x1="420" y1="190" x2="620" y2="190" class="dg99a-base"/>
  <line x1="205" y1="176" x2="205" y2="204" class="dg99a-s1"/>
  <line x1="315" y1="176" x2="315" y2="204" class="dg99a-p2"/><text x="308" y="170" class="dg99a-tp">P2</text>
  <line x1="345" y1="176" x2="345" y2="204" class="dg99a-a2"/><text x="338" y="170" class="dg99a-ta">A2</text>
  <line x1="435" y1="176" x2="435" y2="204" class="dg99a-s1"/>
  <line x1="558" y1="176" x2="558" y2="204" class="dg99a-p2"/><line x1="562" y1="176" x2="562" y2="204" class="dg99a-a2"/><text x="548" y="170" class="dg99a-sub">single S2</text>

  <text x="10" y="246" class="dg99a-lbl">Wide</text>
  <text x="10" y="260" class="dg99a-sub">pulm. HTN, pulmonic stenosis</text>
  <line x1="190" y1="250" x2="390" y2="250" class="dg99a-base"/>
  <line x1="420" y1="250" x2="620" y2="250" class="dg99a-base"/>
  <line x1="205" y1="236" x2="205" y2="264" class="dg99a-s1"/>
  <line x1="315" y1="236" x2="315" y2="264" class="dg99a-a2"/><text x="308" y="230" class="dg99a-ta">A2</text>
  <line x1="340" y1="236" x2="340" y2="264" class="dg99a-p2"/><text x="333" y="230" class="dg99a-tp">P2</text>
  <line x1="435" y1="236" x2="435" y2="264" class="dg99a-s1"/>
  <line x1="535" y1="236" x2="535" y2="264" class="dg99a-a2"/><text x="528" y="230" class="dg99a-ta">A2</text>
  <line x1="590" y1="236" x2="590" y2="264" class="dg99a-p2"/><text x="583" y="230" class="dg99a-tp">P2</text>

  <line x1="195" y1="40" x2="195" y2="275" class="dg99a-play"/>
  <line x1="425" y1="40" x2="425" y2="275" class="dg99a-play"/>
  <text x="190" y="292" class="dg99a-sub">A2 = aortic closure, P2 = pulmonic closure; inspiration adds RV preload and delays P2</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv99-mvp-click"] = {
  title: "MVP click volume",
  caption: "Left ventricular volume falls through systole from end-diastolic volume toward end-systolic volume. The prolapse click fires when the volume drops to a fixed setpoint below end-diastolic volume (dashed line). Starting with more preload (leg raise, squat) the ventricle takes longer to reach that setpoint, so the click moves later toward S2; with less preload (standing, Valsalva) it moves earlier toward S1. This is the lecturer's simplified model, drawn with straight lines rather than true ejection curves.",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Graph of left ventricular volume against time in systole. Two falling lines start at a high and a low end-diastolic volume and cross a dashed fixed click-volume line. The low-preload line crosses earlier, labeled standing or Valsalva, earlier click. The high-preload line crosses later, labeled leg raise or squat, later click.">
  <style>
    .dg99b-axis { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg99b-set { stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 6 5; }
    .dg99b-hi { stroke: var(--dg-cool); stroke-width: 3; fill: none; }
    .dg99b-lo { stroke: var(--dg-warm); stroke-width: 3; fill: none; }
    .dg99b-lbl { font-size: 12px; }
    .dg99b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg99b-thi { font-size: 12px; font-weight: 700; fill: var(--dg-cool); }
    .dg99b-tlo { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg99b-dothi { fill: var(--dg-cool); animation: dg99bhi 4s linear infinite; }
    .dg99b-dotlo { fill: var(--dg-warm); animation: dg99blo 4s linear infinite; }
    @keyframes dg99bhi { 0% { transform: translate(0,0) } 100% { transform: translate(480px,190px) } }
    @keyframes dg99blo { 0% { transform: translate(0,0) } 100% { transform: translate(480px,140px) } }
    .dg99b-clo { fill: var(--dg-warm); animation: dg99bflashlo 4s linear infinite; }
    .dg99b-chi { fill: var(--dg-cool); animation: dg99bflashhi 4s linear infinite; }
    @keyframes dg99bflashlo { 0%, 38% { opacity: .35 } 43% { opacity: 1 } 55%, 100% { opacity: .35 } }
    @keyframes dg99bflashhi { 0%, 53% { opacity: .35 } 58% { opacity: 1 } 70%, 100% { opacity: .35 } }
  </style>
  <line x1="70" y1="40" x2="70" y2="262" class="dg99b-axis"/>
  <line x1="70" y1="262" x2="590" y2="262" class="dg99b-axis"/>
  <text x="14" y="36" class="dg99b-sub">LV volume</text>
  <text x="74" y="282" class="dg99b-lbl">S1</text>
  <text x="552" y="282" class="dg99b-lbl">S2</text>
  <text x="270" y="282" class="dg99b-sub">time through systole</text>

  <line x1="70" y1="170" x2="590" y2="170" class="dg99b-set"/>
  <text x="440" y="164" class="dg99b-sub">fixed click volume</text>

  <line x1="80" y1="60" x2="560" y2="250" class="dg99b-hi"/>
  <line x1="80" y1="110" x2="560" y2="250" class="dg99b-lo"/>
  <text x="90" y="54" class="dg99b-thi">more preload (EDV high)</text>
  <text x="90" y="104" class="dg99b-tlo">less preload (EDV low)</text>

  <circle cx="286" cy="170" r="9" class="dg99b-clo"/>
  <circle cx="358" cy="170" r="9" class="dg99b-chi"/>
  <text x="200" y="200" class="dg99b-tlo">earlier click</text>
  <text x="200" y="215" class="dg99b-sub">standing, Valsalva</text>
  <text x="372" y="140" class="dg99b-thi">later click</text>
  <text x="372" y="125" class="dg99b-sub">leg raise, squat</text>

  <circle cx="80" cy="60" r="6" class="dg99b-dothi"/>
  <circle cx="80" cy="110" r="6" class="dg99b-dotlo"/>
</svg>`
};

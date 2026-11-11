window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv160-obstruction-level"] = {
  title: "Where the problem sits decides the hydronephrosis",
  caption: "A schematic, not a lecture image. Left: in vesicoureteral reflux, urine runs back up from the bladder toward the kidney, carrying bacteria with it; reflux is graded on the VCUG, and the higher the grade, the worse (Slide 8). It is drawn on both sides only for illustration; the lecture ties reflux to its grade, not to a side. Middle: posterior urethral valves, seen only in boys, block the urethra below the bladder, so the bladder distends, both ureters and both kidneys back up (bilateral hydronephrosis), and only a weak dribble gets out (Slide 9). Right: a ureteropelvic junction kink, usually on one side, dams only that kidney (unilateral hydronephrosis) while the other drains normally; stasis alone predisposes to infection (Slide 10).",
  svg: `<svg viewBox="0 0 640 310" role="img" aria-label="Three simplified urinary tracts side by side. In the first, vesicoureteral reflux, urine moves upward from the bladder into both ureters toward the kidneys. In the second, posterior urethral valves block the urethra below the bladder, so the bladder is distended, both ureters are dilated, both kidneys are swollen, and only drops of urine dribble out. In the third, a kink at the junction of one renal pelvis and its ureter leaves that one kidney swollen while urine from the other kidney flows down normally into the bladder.">
  <style>
    .dg160a-hd { font-size: 12.5px; font-weight: 700; }
    .dg160a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg160a-big { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg160a-ok { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg160a-kid { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg160a-pel { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg160a-hyd { fill: var(--dg-warm); stroke: var(--dg-ink); stroke-width: 1.5; opacity: .55; animation: dg160apulse 2.6s ease-in-out infinite; }
    .dg160a-ur { fill: none; stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg160a-urw { fill: none; stroke: var(--dg-ink); stroke-width: 6; stroke-linecap: round; }
    .dg160a-bl { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg160a-blx { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg160a-uth { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg160a-valve { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; }
    .dg160a-kink { fill: none; stroke: var(--dg-warm); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; }
    .dg160a-aw { fill: var(--dg-warm); }
    .dg160a-ac { fill: var(--dg-cool); }
    .dg160a-div { stroke: var(--dg-line); stroke-width: 1; }
    .dg160a-m1 { animation: dg160aupl 3s linear infinite; }
    .dg160a-m2 { animation: dg160aupl 3s linear infinite 1.5s; }
    .dg160a-m3 { animation: dg160aupr 3s linear infinite .7s; }
    .dg160a-m4 { animation: dg160aupr 3s linear infinite 2.2s; }
    .dg160a-s1 { animation: dg160aupl 4.6s linear infinite; }
    .dg160a-s2 { animation: dg160aupr 4.6s linear infinite 2.3s; }
    .dg160a-d1 { animation: dg160adn 3s linear infinite; }
    .dg160a-d2 { animation: dg160adn 3s linear infinite 1.5s; }
    .dg160a-r1 { animation: dg160adrip 3.6s ease-in infinite; }
    .dg160a-r2 { animation: dg160adrip 3.6s ease-in infinite 1.8s; }
    @keyframes dg160apulse { 0%, 100% { opacity: .35 } 50% { opacity: .85 } }
    @keyframes dg160aupl { 0% { transform: translate(0px, 0px); opacity: 0 } 12% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translate(-22px, -88px); opacity: 0 } }
    @keyframes dg160aupr { 0% { transform: translate(0px, 0px); opacity: 0 } 12% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translate(22px, -88px); opacity: 0 } }
    @keyframes dg160adn { 0% { transform: translate(0px, 0px); opacity: 0 } 12% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translate(-22px, 88px); opacity: 0 } }
    @keyframes dg160adrip { 0% { transform: translate(0px, 0px); opacity: 0 } 20% { opacity: .9 } 100% { transform: translate(0px, 18px); opacity: 0 } }
  </style>

  <line x1="215" y1="8" x2="215" y2="302" class="dg160a-div"/>
  <line x1="425" y1="8" x2="425" y2="302" class="dg160a-div"/>

  <text x="16" y="20" class="dg160a-hd">Reflux (VUR)</text>
  <text x="16" y="36" class="dg160a-sub">urine runs back up the ureter</text>
  <path d="M78 108 L100 196" class="dg160a-ur"/>
  <path d="M142 108 L120 196" class="dg160a-ur"/>
  <ellipse cx="62" cy="92" rx="18" ry="28" class="dg160a-kid"/>
  <ellipse cx="74" cy="98" rx="5" ry="8" class="dg160a-pel"/>
  <ellipse cx="158" cy="92" rx="18" ry="28" class="dg160a-kid"/>
  <ellipse cx="146" cy="98" rx="5" ry="8" class="dg160a-pel"/>
  <ellipse cx="110" cy="212" rx="28" ry="20" class="dg160a-bl"/>
  <line x1="110" y1="232" x2="110" y2="262" class="dg160a-uth"/>
  <polygon points="87.1,144.2 94.8,154.7 85.1,157.1" class="dg160a-aw"/>
  <polygon points="132.9,144.2 134.9,157.1 125.2,154.7" class="dg160a-aw"/>
  <circle cx="100" cy="196" r="4" class="dg160a-aw dg160a-m1"/>
  <circle cx="100" cy="196" r="4" class="dg160a-aw dg160a-m2"/>
  <circle cx="120" cy="196" r="4" class="dg160a-aw dg160a-m3"/>
  <circle cx="120" cy="196" r="4" class="dg160a-aw dg160a-m4"/>
  <text x="16" y="286" class="dg160a-big">Backflow toward the kidney</text>
  <text x="16" y="301" class="dg160a-sub">graded on VCUG; higher = worse</text>

  <text x="226" y="20" class="dg160a-hd">Posterior urethral valves</text>
  <text x="226" y="36" class="dg160a-sub">boys; block below the bladder</text>
  <path d="M288 108 L310 194" class="dg160a-urw"/>
  <path d="M352 108 L330 194" class="dg160a-urw"/>
  <ellipse cx="272" cy="92" rx="24" ry="34" class="dg160a-kid"/>
  <ellipse cx="282" cy="96" rx="11" ry="16" class="dg160a-hyd"/>
  <ellipse cx="368" cy="92" rx="24" ry="34" class="dg160a-kid"/>
  <ellipse cx="358" cy="96" rx="11" ry="16" class="dg160a-hyd"/>
  <ellipse cx="320" cy="214" rx="38" ry="28" class="dg160a-blx"/>
  <line x1="320" y1="242" x2="320" y2="268" class="dg160a-uth"/>
  <line x1="310" y1="252" x2="330" y2="252" class="dg160a-valve"/>
  <polygon points="297.1,144.2 304.8,154.7 295.1,157.1" class="dg160a-aw"/>
  <polygon points="342.9,144.2 344.9,157.1 335.2,154.7" class="dg160a-aw"/>
  <circle cx="310" cy="194" r="4" class="dg160a-aw dg160a-s1"/>
  <circle cx="330" cy="194" r="4" class="dg160a-aw dg160a-s2"/>
  <circle cx="320" cy="262" r="2.5" class="dg160a-ac dg160a-r1"/>
  <circle cx="320" cy="262" r="2.5" class="dg160a-ac dg160a-r2"/>
  <text x="226" y="286" class="dg160a-big">BOTH kidneys swell</text>
  <text x="226" y="301" class="dg160a-sub">weak, dribbling stream</text>

  <text x="436" y="20" class="dg160a-hd">UPJ obstruction</text>
  <text x="436" y="36" class="dg160a-sub">kink where pelvis meets ureter</text>
  <polyline points="508,110 515,115 506,120 513,125" class="dg160a-kink"/>
  <path d="M513 125 L530 196" class="dg160a-ur"/>
  <path d="M562 108 L540 196" class="dg160a-ur"/>
  <ellipse cx="488" cy="92" rx="24" ry="34" class="dg160a-kid"/>
  <ellipse cx="498" cy="96" rx="11" ry="16" class="dg160a-hyd"/>
  <ellipse cx="578" cy="92" rx="18" ry="28" class="dg160a-kid"/>
  <ellipse cx="566" cy="98" rx="5" ry="8" class="dg160a-pel"/>
  <ellipse cx="530" cy="212" rx="28" ry="20" class="dg160a-bl"/>
  <line x1="530" y1="232" x2="530" y2="262" class="dg160a-uth"/>
  <polygon points="549.0,160.0 547.1,147.0 556.8,149.4" class="dg160a-ac"/>
  <circle cx="562" cy="108" r="4" class="dg160a-ac dg160a-d1"/>
  <circle cx="562" cy="108" r="4" class="dg160a-ac dg160a-d2"/>
  <text x="436" y="286" class="dg160a-big">ONE kidney swells</text>
  <text x="436" y="301" class="dg160a-sub">stasis alone breeds infection</text>
</svg>`,
};

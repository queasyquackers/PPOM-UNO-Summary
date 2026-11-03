window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv157-vur-valve"] = {
  title: "The ureterovesical flap valve",
  caption: "A schematic, not a lecture image. Left: the intramural (intravesical) ureter crosses the bladder wall as a long oblique tunnel, so its orifice stays closed except when peristalsis raises ureteric pressure and pushes urine through; afterwards rising intravesical pressure squeezes the tunnel shut (Slide 3). Right: in congenital vesicoureteral reflux the ratio of tunnel length to ureteral diameter is less than 5, the orifice stays open, and rising bladder pressure drives urine back up toward the kidney. Proportions are drawn for clarity; the only number is the lecture's ratio of 5.",
  svg: `<svg viewBox="0 0 640 306" role="img" aria-label="Two panels compare how the ureter enters the bladder. On the left, a normal ureter crosses the bladder wall in a long oblique tunnel: peristalsis raises ureteric pressure and urine passes through the orifice into the bladder, then rising bladder pressure squeezes the tunnel shut. On the right, in congenital reflux the tunnel is short, with a length to diameter ratio less than 5, so the orifice stays open and rising bladder pressure drives urine back up the ureter toward the kidney.">
  <style>
    .dg157a-hd { font-size: 13px; font-weight: 700; }
    .dg157a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg157a-lbl { font-size: 11px; }
    .dg157a-step { font-size: 11px; }
    .dg157a-wall { fill: var(--dg-line); }
    .dg157a-lum { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg157a-tubeo { fill: none; stroke: var(--dg-ink); stroke-width: 16; stroke-linejoin: round; }
    .dg157a-tubei { fill: none; stroke: var(--dg-surface); stroke-width: 10; stroke-linejoin: round; }
    .dg157a-shut { fill: none; stroke: var(--dg-surface); stroke-width: 10; animation: dg157ashut 6s linear infinite; }
    .dg157a-div { stroke: var(--dg-line); stroke-width: 1; }
    .dg157a-lead { stroke: var(--dg-muted); stroke-width: 1; }
    .dg157a-cool { fill: var(--dg-cool); }
    .dg157a-coolln { stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg157a-warm { fill: var(--dg-warm); }
    .dg157a-warmln { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg157a-wtxt { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg157a-push { stroke: var(--dg-accent); stroke-width: 3; fill: var(--dg-accent); animation: dg157apush 6s ease-in-out infinite; }
    .dg157a-mk { fill: var(--dg-accent); opacity: .35; }
    .dg157a-m1 { animation: dg157am1 6s linear infinite; }
    .dg157a-m2 { animation: dg157am2 6s linear infinite; }
    .dg157a-m3 { animation: dg157am3 6s linear infinite; }
    .dg157a-d1 { animation: dg157adown 6s linear infinite; }
    .dg157a-d2 { animation: dg157arin 6s linear infinite; }
    .dg157a-r1 { opacity: 0; animation: dg157aref 6s linear infinite; }
    .dg157a-r2 { opacity: 0; animation: dg157aref 6s linear infinite .3s; }
    @keyframes dg157ashut { 0%, 24% { stroke-width: 3px } 30%, 56% { stroke-width: 10px } 64%, 100% { stroke-width: 2px } }
    @keyframes dg157apush { 0%, 56% { opacity: .2 } 64%, 94% { opacity: 1 } 100% { opacity: .2 } }
    @keyframes dg157am1 { 0%, 28% { opacity: 1 } 32%, 100% { opacity: .35 } }
    @keyframes dg157am2 { 0%, 28% { opacity: .35 } 32%, 58% { opacity: 1 } 62%, 100% { opacity: .35 } }
    @keyframes dg157am3 { 0%, 58% { opacity: .35 } 62%, 96% { opacity: 1 } 100% { opacity: .35 } }
    @keyframes dg157adown { 0% { transform: translate(0px, 0px); opacity: 0 } 6% { opacity: 1 } 30% { transform: translate(0px, 78px) } 50% { transform: translate(120px, 126px) } 58% { transform: translate(134px, 148px); opacity: 1 } 66%, 100% { transform: translate(140px, 160px); opacity: 0 } }
    @keyframes dg157arin { 0% { transform: translate(0px, 0px); opacity: 0 } 6% { opacity: 1 } 34% { transform: translate(0px, 90px) } 46% { transform: translate(10px, 126px) } 54% { transform: translate(16px, 148px); opacity: 1 } 60%, 100% { transform: translate(18px, 156px); opacity: 0 } }
    @keyframes dg157aref { 0%, 60% { transform: translate(0px, 0px); opacity: 0 } 64% { opacity: 1 } 72% { transform: translate(-6px, -22px) } 80% { transform: translate(-16px, -58px) } 96% { transform: translate(-16px, -138px); opacity: 1 } 100% { transform: translate(-16px, -146px); opacity: 0 } }
  </style>

  <text x="20" y="20" class="dg157a-hd">Normal: long oblique tunnel</text>
  <text x="20" y="36" class="dg157a-sub">orifice held shut by its obliquity</text>
  <text x="340" y="20" class="dg157a-hd">Congenital VUR: short tunnel</text>
  <text x="340" y="36" class="dg157a-sub">tunnel length / diameter less than 5</text>
  <line x1="320" y1="8" x2="320" y2="300" class="dg157a-div"/>

  <rect x="20" y="140" width="285" height="36" class="dg157a-wall"/>
  <rect x="20" y="176" width="285" height="56" class="dg157a-lum"/>
  <text x="300" y="162" text-anchor="end" class="dg157a-lbl">Bladder wall</text>
  <text x="300" y="200" text-anchor="end" class="dg157a-lbl">Bladder lumen</text>
  <text x="300" y="216" text-anchor="end" class="dg157a-sub">rising pressure</text>

  <path d="M70 46 L70 128 L190 176" class="dg157a-tubeo"/>
  <path d="M70 46 L70 128 L190 176" class="dg157a-tubei"/>
  <path d="M100 140 L190 176" class="dg157a-shut"/>
  <text x="84" y="60" class="dg157a-lbl">Ureter</text>
  <text x="112" y="110" class="dg157a-sub">intramural ureter</text>
  <line x1="130" y1="114" x2="126" y2="146" class="dg157a-lead"/>

  <line x1="44" y1="58" x2="44" y2="104" class="dg157a-coolln"/>
  <polygon points="38,104 50,104 44,114" class="dg157a-cool"/>
  <text x="24" y="52" class="dg157a-sub">urine</text>

  <g class="dg157a-push">
    <line x1="140" y1="226" x2="140" y2="196"/>
    <polygon points="134,198 146,198 140,188"/>
    <line x1="172" y1="226" x2="172" y2="196"/>
    <polygon points="166,198 178,198 172,188"/>
  </g>

  <circle cx="70" cy="50" r="5" class="dg157a-cool dg157a-d1"/>

  <circle cx="12" cy="250" r="4" class="dg157a-mk dg157a-m1"/>
  <text x="20" y="254" class="dg157a-step">1  Peristalsis raises ureteric pressure</text>
  <circle cx="12" cy="268" r="4" class="dg157a-mk dg157a-m2"/>
  <text x="20" y="272" class="dg157a-step">2  Orifice opens; urine enters the bladder</text>
  <circle cx="12" cy="286" r="4" class="dg157a-mk dg157a-m3"/>
  <text x="20" y="290" class="dg157a-step">3  Bladder pressure rises, tunnel squeezed shut</text>

  <rect x="335" y="140" width="290" height="36" class="dg157a-wall"/>
  <rect x="335" y="176" width="290" height="56" class="dg157a-lum"/>
  <text x="620" y="162" text-anchor="end" class="dg157a-lbl">Bladder wall</text>
  <text x="620" y="200" text-anchor="end" class="dg157a-lbl">Bladder lumen</text>
  <text x="620" y="216" text-anchor="end" class="dg157a-sub">rising pressure</text>

  <path d="M400 46 L400 140 L410 176" class="dg157a-tubeo"/>
  <path d="M400 46 L400 140 L410 176" class="dg157a-tubei"/>
  <text x="348" y="60" class="dg157a-lbl">Ureter</text>
  <text x="452" y="134" class="dg157a-sub">short intramural segment</text>
  <line x1="450" y1="138" x2="414" y2="156" class="dg157a-lead"/>

  <line x1="440" y1="124" x2="440" y2="70" class="dg157a-warmln"/>
  <polygon points="432,72 448,72 440,58" class="dg157a-warm"/>
  <text x="454" y="90" class="dg157a-wtxt">Reflux</text>
  <text x="454" y="106" class="dg157a-sub">back toward the kidney</text>

  <g class="dg157a-push">
    <line x1="376" y1="226" x2="376" y2="196"/>
    <polygon points="370,198 382,198 376,188"/>
    <line x1="452" y1="226" x2="452" y2="196"/>
    <polygon points="446,198 458,198 452,188"/>
  </g>

  <circle cx="400" cy="50" r="5" class="dg157a-cool dg157a-d2"/>
  <circle cx="416" cy="200" r="5" class="dg157a-warm dg157a-r1"/>
  <circle cx="416" cy="200" r="4" class="dg157a-warm dg157a-r2"/>

  <text x="340" y="254" class="dg157a-step">Orifice stays open when the tunnel is short</text>
  <text x="340" y="272" class="dg157a-step">Rising bladder pressure drives urine back up</text>
  <text x="340" y="290" class="dg157a-step">the ureter toward the kidney</text>
</svg>`
};

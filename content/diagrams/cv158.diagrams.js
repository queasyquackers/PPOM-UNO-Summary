window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv158-arteriole-tone"] = {
  title: "Low perfusion: who holds glomerular pressure up",
  caption:
    "Left: when renal perfusion pressure falls, the kidney keeps glomerular capillary pressure and GFR normal by dilating the afferent arteriole (more vasodilatory prostaglandins) and constricting the efferent arteriole (more angiotensin II). " +
    "Middle: an NSAID removes the prostaglandins, so the afferent constricts, less blood enters, and glomerular pressure and GFR fall. " +
    "Right: an ACE inhibitor or ARB removes angiotensin II action, so the efferent relaxes, blood runs off, and glomerular pressure and GFR fall. " +
    "Arteriole widths and bar heights are qualitative; the lecture gives no numbers for this figure (Slide 13).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three panels of a glomerulus with an afferent arteriole entering on the left and an efferent arteriole leaving on the right, all under low perfusion. Panel one, compensated: wide afferent, narrow efferent, normal glomerular pressure bar, normal GFR maintained. Panel two, with an NSAID: narrow afferent and narrow efferent, low pressure bar, low GFR. Panel three, with an ACE inhibitor or ARB: slightly wide afferent and wide efferent, low pressure bar, low GFR.">
  <style>
    .dg158a-sep { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg158a-ttl { font-size: 12.5px; font-weight: 700; }
    .dg158a-lbl { font-size: 10.5px; font-weight: 700; }
    .dg158a-sub { font-size: 10px; fill: var(--dg-muted); }
    .dg158a-vessel { stroke: var(--dg-warm); stroke-linecap: round; fill: none; }
    .dg158a-flow { stroke: var(--dg-surface); stroke-linecap: round; fill: none; stroke-dasharray: 3 10; animation: dg158a-move 1.6s linear infinite; }
    .dg158a-slow { animation-duration: 3.2s; }
    .dg158a-glom { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg158a-tuft { fill: none; stroke: var(--dg-warm); stroke-width: 1.5; opacity: .7; }
    .dg158a-gauge { fill: none; stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg158a-ok { fill: var(--dg-good); animation: dg158a-pulse 3s ease-in-out infinite; }
    .dg158a-low { fill: var(--dg-warm); animation: dg158a-pulse 3s ease-in-out infinite; }
    .dg158a-res-ok { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg158a-res-low { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg158a-norm { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 3; }
    @keyframes dg158a-move { from { stroke-dashoffset: 26 } to { stroke-dashoffset: 0 } }
    @keyframes dg158a-pulse { 0%, 100% { opacity: .65 } 50% { opacity: 1 } }
  </style>

  <line x1="213" y1="12" x2="213" y2="292" class="dg158a-sep"/>
  <line x1="426" y1="12" x2="426" y2="292" class="dg158a-sep"/>

  <text x="106" y="24" text-anchor="middle" class="dg158a-ttl">Low perfusion, compensated</text>
  <text x="8" y="58" class="dg158a-lbl">Afferent dilated</text>
  <text x="8" y="71" class="dg158a-sub">more prostaglandins</text>
  <line x1="12" y1="110" x2="78" y2="110" class="dg158a-vessel" stroke-width="16"/>
  <line x1="12" y1="110" x2="78" y2="110" class="dg158a-flow" stroke-width="5"/>
  <circle cx="106" cy="110" r="26" class="dg158a-glom"/>
  <path d="M90 104 q8 -14 16 0 q8 14 16 0 M90 118 q8 -12 16 0 q8 12 16 0" class="dg158a-tuft"/>
  <line x1="134" y1="110" x2="200" y2="110" class="dg158a-vessel" stroke-width="5"/>
  <line x1="134" y1="110" x2="200" y2="110" class="dg158a-flow dg158a-slow" stroke-width="2"/>
  <text x="204" y="150" text-anchor="end" class="dg158a-lbl">Efferent constricted</text>
  <text x="204" y="163" text-anchor="end" class="dg158a-sub">more angiotensin II</text>
  <rect x="86" y="180" width="40" height="60" class="dg158a-gauge"/>
  <rect x="87" y="193" width="38" height="46" class="dg158a-ok"/>
  <line x1="80" y1="193" x2="132" y2="193" class="dg158a-norm"/>
  <text x="106" y="256" text-anchor="middle" class="dg158a-sub">glomerular pressure</text>
  <text x="106" y="282" text-anchor="middle" class="dg158a-res-ok">Normal GFR maintained</text>

  <text x="319" y="24" text-anchor="middle" class="dg158a-ttl">Low perfusion + NSAID</text>
  <text x="221" y="58" class="dg158a-lbl">Afferent constricted</text>
  <text x="221" y="71" class="dg158a-sub">fewer prostaglandins</text>
  <line x1="225" y1="110" x2="291" y2="110" class="dg158a-vessel" stroke-width="5"/>
  <line x1="225" y1="110" x2="291" y2="110" class="dg158a-flow dg158a-slow" stroke-width="2"/>
  <circle cx="319" cy="110" r="26" class="dg158a-glom"/>
  <path d="M303 104 q8 -14 16 0 q8 14 16 0 M303 118 q8 -12 16 0 q8 12 16 0" class="dg158a-tuft"/>
  <line x1="347" y1="110" x2="413" y2="110" class="dg158a-vessel" stroke-width="5"/>
  <line x1="347" y1="110" x2="413" y2="110" class="dg158a-flow dg158a-slow" stroke-width="2"/>
  <text x="417" y="150" text-anchor="end" class="dg158a-lbl">Efferent constricted</text>
  <text x="417" y="163" text-anchor="end" class="dg158a-sub">more angiotensin II</text>
  <rect x="299" y="180" width="40" height="60" class="dg158a-gauge"/>
  <rect x="300" y="221" width="38" height="18" class="dg158a-low"/>
  <line x1="293" y1="193" x2="345" y2="193" class="dg158a-norm"/>
  <text x="319" y="256" text-anchor="middle" class="dg158a-sub">glomerular pressure</text>
  <text x="319" y="282" text-anchor="middle" class="dg158a-res-low">Low GFR</text>

  <text x="532" y="24" text-anchor="middle" class="dg158a-ttl">Low perfusion + ACE-I or ARB</text>
  <text x="434" y="58" class="dg158a-lbl">Afferent slightly dilated</text>
  <text x="434" y="71" class="dg158a-sub">prostaglandins slightly up</text>
  <line x1="438" y1="110" x2="504" y2="110" class="dg158a-vessel" stroke-width="12"/>
  <line x1="438" y1="110" x2="504" y2="110" class="dg158a-flow" stroke-width="4"/>
  <circle cx="532" cy="110" r="26" class="dg158a-glom"/>
  <path d="M516 104 q8 -14 16 0 q8 14 16 0 M516 118 q8 -12 16 0 q8 12 16 0" class="dg158a-tuft"/>
  <line x1="560" y1="110" x2="626" y2="110" class="dg158a-vessel" stroke-width="16"/>
  <line x1="560" y1="110" x2="626" y2="110" class="dg158a-flow" stroke-width="5"/>
  <text x="630" y="150" text-anchor="end" class="dg158a-lbl">Efferent relaxed</text>
  <text x="630" y="163" text-anchor="end" class="dg158a-sub">less angiotensin II</text>
  <rect x="512" y="180" width="40" height="60" class="dg158a-gauge"/>
  <rect x="513" y="221" width="38" height="18" class="dg158a-low"/>
  <line x1="506" y1="193" x2="558" y2="193" class="dg158a-norm"/>
  <text x="532" y="256" text-anchor="middle" class="dg158a-sub">glomerular pressure</text>
  <text x="532" y="282" text-anchor="middle" class="dg158a-res-low">Low GFR</text>
</svg>`,
};

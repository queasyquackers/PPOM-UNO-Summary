window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv79-thoracic-siphon"] = {
  title: "Terminal drainage: the thoracic duct siphon",
  caption: "Sutherland's siphon: the thoracic duct rises from its bulb (the cisterna chyli) and turns down into the junction of two central veins. Each breath does the work - the diaphragm descends and intrathoracic pressure falls, the crus squeezes the bulb like a pump, and the venous junction adds a little suction at the top. Respiration produces about 35-60% of thoracic duct flow in this lecture (Slide 43), which is why the first question is how effectively the patient is breathing.",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="The thoracic duct rises from the cisterna chyli beneath the diaphragm crus, arches over and drains into the junction of the internal jugular and subclavian veins at the thoracic inlet. The diaphragm moves with each breath, the crus squeezes the cisterna chyli, and lymph flows up the duct.">
  <style>
    .dg79a-lbl { font-size: 13px; }
    .dg79a-bold { font-size: 13px; font-weight: 700; }
    .dg79a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg79a-vein { stroke: var(--dg-cool); stroke-width: 12; fill: none; stroke-linecap: round; opacity: .55; }
    .dg79a-duct { stroke: var(--dg-line); stroke-width: 8; fill: none; stroke-linecap: round; }
    .dg79a-flow { stroke: var(--dg-accent); stroke-width: 4; fill: none; stroke-linecap: round; stroke-dasharray: 6 10; animation: dg79aflow 1.6s linear infinite; }
    .dg79a-bulb { fill: var(--dg-accent); opacity: .8; transform-box: fill-box; transform-origin: center; animation: dg79asqueeze 4s ease-in-out infinite; }
    .dg79a-diaph { fill: none; stroke: var(--dg-warm); stroke-width: 7; stroke-linecap: round; animation: dg79abreathe 4s ease-in-out infinite; }
    .dg79a-crus { fill: var(--dg-warm); opacity: .75; animation: dg79abreathe 4s ease-in-out infinite; }
    .dg79a-inlet { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg79a-num { font-size: 12px; font-weight: 700; fill: var(--dg-surface); }
    .dg79a-dot { fill: var(--dg-accent); }
    @keyframes dg79aflow { from { stroke-dashoffset: 0 } to { stroke-dashoffset: -32 } }
    @keyframes dg79abreathe { 0%,100% { transform: translateY(0) } 50% { transform: translateY(12px) } }
    @keyframes dg79asqueeze { 0%,100% { transform: scale(1, 1) } 50% { transform: scale(1.12, .7) } }
  </style>

  <path d="M372 18 L372 112" class="dg79a-vein"/>
  <path d="M372 112 L412 112" class="dg79a-vein"/>
  <text x="380" y="30" class="dg79a-sub">internal jugular</text>
  <text x="352" y="138" class="dg79a-sub">subclavian</text>
  <ellipse cx="340" cy="92" rx="58" ry="36" class="dg79a-inlet"/>
  <text x="252" y="148" class="dg79a-sub">thoracic inlet (crowded)</text>

  <path d="M200 236 L200 96 Q200 44 262 44 Q330 44 364 104" class="dg79a-duct"/>
  <path d="M200 236 L200 96 Q200 44 262 44 Q330 44 364 104" class="dg79a-flow"/>
  <text x="100" y="120" class="dg79a-bold">Thoracic duct</text>

  <path d="M40 206 Q200 146 360 206" class="dg79a-diaph"/>
  <text x="30" y="190" class="dg79a-lbl">Diaphragm</text>
  <rect x="226" y="208" width="26" height="70" rx="8" class="dg79a-crus"/>
  <text x="258" y="270" class="dg79a-lbl">Crus</text>

  <ellipse cx="200" cy="252" rx="22" ry="16" class="dg79a-bulb"/>
  <text x="84" y="258" class="dg79a-bold">Cisterna chyli</text>

  <circle cx="440" cy="60" r="10" class="dg79a-dot"/>
  <text x="440" y="64" text-anchor="middle" class="dg79a-num">1</text>
  <text x="458" y="58" class="dg79a-lbl">Inspiration: negative</text>
  <text x="458" y="74" class="dg79a-lbl">intrathoracic pressure</text>
  <text x="458" y="90" class="dg79a-sub">draws lymph and venous blood up</text>

  <circle cx="440" cy="130" r="10" class="dg79a-dot"/>
  <text x="440" y="134" text-anchor="middle" class="dg79a-num">2</text>
  <text x="458" y="128" class="dg79a-lbl">Crus squeezes the bulb</text>
  <text x="458" y="144" class="dg79a-sub">the pump of the siphon</text>

  <circle cx="440" cy="190" r="10" class="dg79a-dot"/>
  <text x="440" y="194" text-anchor="middle" class="dg79a-num">3</text>
  <text x="458" y="188" class="dg79a-lbl">Suction at the junction</text>
  <text x="458" y="204" class="dg79a-sub">of two central veins</text>

  <text x="430" y="250" class="dg79a-bold">Respiration = 35-60%</text>
  <text x="430" y="266" class="dg79a-bold">of thoracic duct flow</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv79-lymph-formation"] = {
  title: "Forming lymph against an uphill gradient",
  caption: "The initial lymphatic has no pressure gradient in its favour, so it needs a temporary one. When the tissue expands (for example the lung on inhalation), anchoring filaments tied to interstitial collagen pull the lymphatic open: volume goes up, pressure goes down, and fluid pours in between the overlapping endothelial cells. When the tissue relaxes, the lymphatic closes, the overlapping cells shut like a valve, and lymph is pushed past the first valve - the stretch that triggers the lymphangion's peristalsis (Slides 77-81, 90).",
  svg: `
<svg viewBox="0 0 620 300" role="img" aria-label="Two panels of an initial lymphatic capillary. Left: tissue expands, anchoring filaments pull the vessel open, pressure falls and interstitial fluid flows in between overlapping endothelial cells. Right: tissue relaxes, the vessel narrows, the endothelial flaps close and lymph is pushed past the first valve.">
  <style>
    .dg79b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg79b-head { font-size: 13px; font-weight: 700; }
    .dg79b-lbl { font-size: 12px; }
    .dg79b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg79b-wall { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; fill: none; }
    .dg79b-flap { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg79b-fil { stroke: var(--dg-muted); stroke-width: 1.3; fill: none; }
    .dg79b-col { stroke: var(--dg-warm); stroke-width: 2.5; fill: none; opacity: .7; }
    .dg79b-in { fill: var(--dg-cool); animation: dg79bin 2.4s ease-in infinite; }
    .dg79b-in2 { animation-delay: .8s; }
    .dg79b-in3 { animation-delay: 1.6s; }
    .dg79b-lumen { fill: var(--dg-surface); opacity: .8; }
    .dg79b-push { stroke: var(--dg-accent); stroke-width: 4; stroke-dasharray: 8 8; fill: none; animation: dg79bpush 1.2s linear infinite; }
    .dg79b-valve { stroke: var(--dg-good); stroke-width: 3.5; stroke-linecap: round; fill: none; }
    @keyframes dg79bin { 0% { transform: translateY(0); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(46px); opacity: 0 } }
    @keyframes dg79bpush { from { stroke-dashoffset: 0 } to { stroke-dashoffset: -32 } }
  </style>

  <rect x="8" y="30" width="296" height="228" rx="12" class="dg79b-panel"/>
  <text x="20" y="22" class="dg79b-head">1. Tissue expands (inhale)</text>
  <path d="M24 62 Q90 50 160 62 T290 62" class="dg79b-col"/>
  <path d="M24 236 Q90 248 160 236 T290 236" class="dg79b-col"/>
  <text x="206" y="50" class="dg79b-sub">collagen</text>
  <rect x="40" y="110" width="232" height="80" class="dg79b-lumen"/>
  <path d="M40 110 L96 110 M124 110 L166 110 M194 110 L236 110 M264 110 L272 110" class="dg79b-wall"/>
  <line x1="96" y1="110" x2="108" y2="128" class="dg79b-flap"/>
  <line x1="166" y1="110" x2="178" y2="128" class="dg79b-flap"/>
  <line x1="236" y1="110" x2="248" y2="128" class="dg79b-flap"/>
  <line x1="40" y1="190" x2="272" y2="190" class="dg79b-wall"/>
  <path d="M70 110 L60 64 M140 110 L150 64 M210 110 L200 64 M90 190 L80 234 M180 190 L190 234 M250 190 L240 234" class="dg79b-fil"/>
  <circle cx="110" cy="78" r="5" class="dg79b-in"/>
  <circle cx="180" cy="78" r="5" class="dg79b-in dg79b-in2"/>
  <circle cx="250" cy="78" r="5" class="dg79b-in dg79b-in3"/>
  <text x="56" y="146" class="dg79b-lbl">volume up, pressure down</text>
  <text x="56" y="164" class="dg79b-lbl">fluid pours in</text>
  <text x="20" y="276" class="dg79b-sub">anchoring filaments pull the vessel open</text>

  <rect x="316" y="30" width="296" height="228" rx="12" class="dg79b-panel"/>
  <text x="328" y="22" class="dg79b-head">2. Tissue relaxes (exhale)</text>
  <path d="M332 62 Q398 50 468 62 T598 62" class="dg79b-col"/>
  <path d="M332 236 Q398 248 468 236 T598 236" class="dg79b-col"/>
  <rect x="340" y="132" width="200" height="36" class="dg79b-lumen"/>
  <line x1="340" y1="132" x2="540" y2="132" class="dg79b-wall"/>
  <line x1="340" y1="168" x2="540" y2="168" class="dg79b-wall"/>
  <line x1="392" y1="128" x2="416" y2="136" class="dg79b-flap"/>
  <line x1="462" y1="128" x2="486" y2="136" class="dg79b-flap"/>
  <path d="M370 132 Q362 98 368 64 M440 132 Q448 98 440 64 M510 132 Q502 98 508 64 M400 168 Q408 202 400 234 M480 168 Q472 202 480 234" class="dg79b-fil"/>
  <path d="M350 150 L556 150" class="dg79b-push"/>
  <path d="M548 128 L570 150 L548 172" class="dg79b-valve"/>
  <text x="560" y="194" class="dg79b-sub">first valve</text>
  <text x="340" y="96" class="dg79b-lbl">flaps overlap and close</text>
  <text x="340" y="206" class="dg79b-lbl">pressure up, lymph pushed on</text>
  <text x="328" y="276" class="dg79b-sub">stretch past the valve triggers peristalsis</text>
</svg>`
};

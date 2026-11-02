window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv133-lymph-drainage"] = {
  title: "Cardiac lymph: two ducts, one crossing",
  caption:
    "Front view, so the patient's right is on the left of the picture. The endocardium, myocardium and epicardium drain through the right lymphatic duct, " +
    "while the pericardium and the rest of the body drain through the thoracic duct, which starts at the cisterna chyli below the diaphragm on the right and crosses to the left around T5-T6 (Slides 27-30). " +
    "Both ducts run above a lung apex to a subclavian vein, which is why treatment starts at the thoracic inlet, and why a restriction at T5-T6 can decrease drainage.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="Front view of the chest. On the patient's right, lymph from the endocardium, myocardium and epicardium runs up the right lymphatic duct, over the apex of the right lung, into the right subclavian vein. Lymph from below the diaphragm rises from the cisterna chyli on the right, crosses to the left around T5 to T6, is joined by pericardial lymph, and runs over the apex of the left lung into the left subclavian vein. The thoracic inlet at the top is marked as where treatment starts.">
  <style>
    .dg133a-lung  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg133a-spine { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg133a-dia   { fill: none; stroke: var(--dg-muted); stroke-width: 2; }
    .dg133a-vein  { fill: none; stroke: var(--dg-muted); stroke-width: 7; stroke-linecap: round; opacity: .55; }
    .dg133a-inlet { fill: none; stroke: var(--dg-accent); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg133a-heart { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 2.5; }
    .dg133a-peri  { fill: none; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg133a-cis   { fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2.5; }
    .dg133a-rt    { fill: none; stroke: var(--dg-cool); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 11 8; animation: dg133amove 1.5s linear infinite; }
    .dg133a-th    { fill: none; stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 11 8; animation: dg133amove 1.5s linear infinite; }
    .dg133a-tipr  { fill: var(--dg-cool); }
    .dg133a-tipt  { fill: var(--dg-warm); }
    .dg133a-t     { font-size: 11.5px; }
    .dg133a-b     { font-size: 12px; font-weight: 700; }
    .dg133a-m     { font-size: 11px; fill: var(--dg-muted); }
    .dg133a-a     { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg133a-cr    { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg133a-cross { fill: none; stroke: var(--dg-warm); stroke-width: 2; animation: dg133apulse 3s ease-in-out infinite; }
    @keyframes dg133amove { to { stroke-dashoffset: -38; } }
    @keyframes dg133apulse { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
  </style>

  <text x="320" y="15" text-anchor="middle" class="dg133a-a" style="fill: var(--dg-accent)">Thoracic inlet: open the drain here first</text>
  <rect x="14" y="22" width="612" height="42" rx="12" class="dg133a-inlet"/>

  <ellipse cx="135" cy="172" rx="82" ry="102" class="dg133a-lung"/>
  <ellipse cx="505" cy="172" rx="82" ry="102" class="dg133a-lung"/>
  <text x="86" y="160" class="dg133a-m">Right lung</text>
  <text x="508" y="214" class="dg133a-m">Left lung</text>

  <rect x="314" y="46" width="18" height="206" rx="5" class="dg133a-spine"/>

  <path d="M24 52 H286" class="dg133a-vein"/>
  <path d="M360 52 H616" class="dg133a-vein"/>
  <text x="26" y="42" class="dg133a-b">Right subclavian v.</text>
  <text x="614" y="42" text-anchor="end" class="dg133a-b">Left subclavian v.</text>

  <path d="M56 254 Q320 214 584 254" class="dg133a-dia"/>
  <text x="562" y="272" text-anchor="end" class="dg133a-m">Diaphragm</text>

  <circle cx="256" cy="204" r="32" class="dg133a-heart"/>
  <circle cx="256" cy="204" r="39" class="dg133a-peri"/>
  <text x="256" y="200" text-anchor="middle" class="dg133a-t">Endo, myo,</text>
  <text x="256" y="214" text-anchor="middle" class="dg133a-t">epicardium</text>

  <ellipse cx="302" cy="272" rx="16" ry="9" class="dg133a-cis"/>
  <text x="326" y="276" class="dg133a-b">Cisterna chyli</text>
  <text x="326" y="290" class="dg133a-m">below the diaphragm, on the right</text>
  <text x="240" y="312" class="dg133a-m">Rest of body</text>
  <path d="M302 304 V284" class="dg133a-th"/>

  <path d="M250 165 C246 130 240 104 240 84 C240 60 196 58 156 54" class="dg133a-rt"/>
  <polygon points="146,53 160,47 160,60" class="dg133a-tipr"/>
  <text x="72" y="100" class="dg133a-b" style="fill: var(--dg-cool)">Right lymphatic duct</text>

  <path d="M302 262 V176 C302 160 346 164 346 146 V96 C346 66 440 64 488 54" class="dg133a-th"/>
  <polygon points="498,53 484,47 485,60" class="dg133a-tipt"/>
  <text x="362" y="96" class="dg133a-b" style="fill: var(--dg-warm)">Thoracic duct</text>

  <path d="M295 204 H302" class="dg133a-th"/>
  <text x="212" y="214" text-anchor="end" class="dg133a-b" style="fill: var(--dg-warm)">Pericardium (ring)</text>
  <text x="212" y="229" text-anchor="end" class="dg133a-t">joins the thoracic duct</text>

  <circle cx="324" cy="161" r="17" class="dg133a-cross"/>
  <text x="354" y="150" class="dg133a-cr" style="fill: var(--dg-warm)">Crosses around T5-T6</text>
  <text x="354" y="166" class="dg133a-t">Restriction here can</text>
  <text x="354" y="180" class="dg133a-t">decrease lymph drainage</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv133-reflex-arcs"] = {
  title: "Same segment, two directions",
  caption:
    "Both reflexes pass through the spinal segment and differ only in where they start (Slide 36). " +
    "In a viscerosomatic reflex the organ signals in and the muscle spasms, giving the boggy paraspinal area; in a somatovisceral reflex continual muscle dysfunction signals in and the organ is stimulated. " +
    "The organ effect is theoretical and long-term: maybe a slight decrease in perfusion. The numbers mark the order of each arc.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two reflex arcs through a spinal segment. Viscerosomatic: step one, the organ sends a visceral afferent to the spinal segment; step two, a sympathicosomatic efferent goes to the muscle, which spasms and becomes boggy. Somatovisceral: step one, the muscle sends a somatic afferent to the spinal segment; step two, a sympathicovisceral efferent goes to the organ, which may in theory have slightly decreased perfusion.">
  <style>
    .dg133b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg133b-seg  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg133b-h    { font-size: 15px; font-weight: 700; }
    .dg133b-sub  { font-size: 11.5px; fill: var(--dg-muted); }
    .dg133b-lbl  { font-size: 12.5px; font-weight: 700; }
    .dg133b-t    { font-size: 11.5px; }
    .dg133b-g    { fill: var(--dg-good); }
    .dg133b-c    { fill: var(--dg-cool); }
    .dg133b-num  { font-size: 12px; font-weight: 700; fill: var(--dg-surface); }
    .dg133b-ln1  { fill: none; stroke: var(--dg-good); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 11 8; }
    .dg133b-ln2  { fill: none; stroke: var(--dg-cool); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 11 8; }
    .dg133b-s1   { animation: dg133bmove 1.3s linear infinite, dg133bs1 9s linear infinite; }
    .dg133b-s2   { animation: dg133bmove 1.3s linear infinite, dg133bs2 9s linear infinite; }
    .dg133b-s3   { animation: dg133bmove 1.3s linear infinite, dg133bs3 9s linear infinite; }
    .dg133b-s4   { animation: dg133bmove 1.3s linear infinite, dg133bs4 9s linear infinite; }
    .dg133b-r1   { animation: dg133bs2 9s linear infinite; }
    .dg133b-r2   { animation: dg133bs4 9s linear infinite; }
    @keyframes dg133bmove { to { stroke-dashoffset: -38; } }
    @keyframes dg133bs1 { 0%, 22% { opacity: 1; } 28%, 100% { opacity: .25; } }
    @keyframes dg133bs2 { 0%, 22% { opacity: .25; } 28%, 46% { opacity: 1; } 52%, 100% { opacity: .25; } }
    @keyframes dg133bs3 { 0%, 46% { opacity: .25; } 52%, 72% { opacity: 1; } 78%, 100% { opacity: .25; } }
    @keyframes dg133bs4 { 0%, 72% { opacity: .25; } 78%, 96% { opacity: 1; } 100% { opacity: .25; } }
  </style>

  <text x="14" y="22" class="dg133b-h" style="fill: var(--dg-good)">Viscerosomatic</text>
  <text x="14" y="39" class="dg133b-sub">The organ drives the muscle</text>
  <rect x="24" y="60" width="104" height="46" rx="8" class="dg133b-box"/>
  <text x="76" y="88" text-anchor="middle" class="dg133b-lbl">Muscle</text>
  <rect x="24" y="214" width="104" height="52" rx="26" class="dg133b-seg"/>
  <text x="76" y="236" text-anchor="middle" class="dg133b-lbl">Spinal</text>
  <text x="76" y="252" text-anchor="middle" class="dg133b-lbl">segment</text>
  <rect x="210" y="218" width="90" height="46" rx="8" class="dg133b-box"/>
  <text x="255" y="246" text-anchor="middle" class="dg133b-lbl">Organ</text>

  <path d="M208 241 H138" class="dg133b-ln1 dg133b-s1"/>
  <polygon points="130,241 142,234 142,248" class="dg133b-g"/>
  <circle cx="173" cy="214" r="10" class="dg133b-g"/>
  <text x="173" y="218" text-anchor="middle" class="dg133b-num" style="fill: var(--dg-surface)">1</text>
  <text x="173" y="280" text-anchor="middle" class="dg133b-t">Visceral afferent</text>

  <path d="M76 212 V116" class="dg133b-ln1 dg133b-s2"/>
  <polygon points="76,108 69,120 83,120" class="dg133b-g"/>
  <circle cx="76" cy="164" r="10" class="dg133b-g"/>
  <text x="76" y="168" text-anchor="middle" class="dg133b-num" style="fill: var(--dg-surface)">2</text>
  <text x="94" y="160" class="dg133b-t">Sympathicosomatic</text>
  <text x="94" y="174" class="dg133b-t">efferent</text>
  <g class="dg133b-r1">
    <text x="140" y="80" class="dg133b-lbl">Tightens, spasms</text>
    <text x="140" y="96" class="dg133b-t">Boggy paraspinal area</text>
  </g>

  <line x1="320" y1="10" x2="320" y2="290" stroke="var(--dg-line)" stroke-width="1.5"/>

  <text x="334" y="22" class="dg133b-h" style="fill: var(--dg-cool)">Somatovisceral</text>
  <text x="334" y="39" class="dg133b-sub">The muscle drives the organ</text>
  <rect x="344" y="60" width="104" height="46" rx="8" class="dg133b-box"/>
  <text x="396" y="88" text-anchor="middle" class="dg133b-lbl">Muscle</text>
  <rect x="344" y="214" width="104" height="52" rx="26" class="dg133b-seg"/>
  <text x="396" y="236" text-anchor="middle" class="dg133b-lbl">Spinal</text>
  <text x="396" y="252" text-anchor="middle" class="dg133b-lbl">segment</text>
  <rect x="530" y="218" width="90" height="46" rx="8" class="dg133b-box"/>
  <text x="575" y="246" text-anchor="middle" class="dg133b-lbl">Organ</text>

  <path d="M396 108 V204" class="dg133b-ln2 dg133b-s3"/>
  <polygon points="396,212 389,200 403,200" class="dg133b-c"/>
  <circle cx="396" cy="156" r="10" class="dg133b-c"/>
  <text x="396" y="160" text-anchor="middle" class="dg133b-num" style="fill: var(--dg-surface)">1</text>
  <text x="414" y="160" class="dg133b-t">Somatic afferent</text>

  <path d="M450 241 H520" class="dg133b-ln2 dg133b-s4"/>
  <polygon points="528,241 516,234 516,248" class="dg133b-c"/>
  <circle cx="489" cy="214" r="10" class="dg133b-c"/>
  <text x="489" y="218" text-anchor="middle" class="dg133b-num" style="fill: var(--dg-surface)">2</text>
  <text x="489" y="280" text-anchor="middle" class="dg133b-t">Sympathicovisceral efferent</text>
  <g class="dg133b-r2">
    <text x="626" y="178" text-anchor="end" class="dg133b-lbl">Organ stimulated</text>
    <text x="626" y="194" text-anchor="end" class="dg133b-t">In theory, less perfusion</text>
  </g>
</svg>`,
};

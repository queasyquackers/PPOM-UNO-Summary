window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv55-facet-coupling"] = {
  title: "Facet plane decides the motion",
  caption:
    "Gliding on a purely transverse (horizontal) facet surface would give pure rotation; gliding on a purely coronal (vertical) surface would give pure side bending. " +
    "Cervical facets sit about 45 degrees, midway between the two, so every glide along them carries both components at once - side bending and rotation to the same side, the basis of type 2 somatic dysfunction. " +
    "Lumbar facets are sagittal and mostly allow flexion and extension (Slides 8-10).",
  svg: `
<svg viewBox="0 0 630 290" role="img" aria-label="Three facet surfaces. A horizontal surface lets the upper facet glide sideways, labelled pure rotation. A vertical surface lets it glide up and down, labelled pure side bending. A surface tilted 45 degrees makes the glide diagonal, split into a rotation component and a side bending component, labelled cervical facet, side bending and rotation to the same side.">
  <style>
    .dg55a-plane { stroke: var(--dg-ink); stroke-width: 3; stroke-linecap: round; }
    .dg55a-guide { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg55a-blk   { fill: var(--dg-accent); opacity: .85; }
    .dg55a-lbl   { font-size: 13px; font-weight: 700; }
    .dg55a-sub   { font-size: 12px; fill: var(--dg-muted); }
    .dg55a-rot   { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg55a-sb    { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg55a-arw   { stroke-width: 3; }
    .dg55a-key   { font-size: 12px; font-weight: 700; }
    .dg55a-h { animation: dg55aH 3.2s ease-in-out infinite; }
    .dg55a-v { animation: dg55aV 3.2s ease-in-out infinite; }
    .dg55a-d { animation: dg55aH 3.2s ease-in-out infinite; }
    @keyframes dg55aH { 0%,100% { transform: translateX(-26px) } 50% { transform: translateX(26px) } }
    @keyframes dg55aV { 0%,100% { transform: translateY(-26px) } 50% { transform: translateY(26px) } }
  </style>

  <text x="105" y="28" text-anchor="middle" class="dg55a-lbl">Transverse plane</text>
  <line x1="35" y1="130" x2="175" y2="130" class="dg55a-plane"/>
  <g class="dg55a-h"><rect x="85" y="104" width="40" height="24" rx="4" class="dg55a-blk"/></g>
  <line x1="70" y1="160" x2="140" y2="160" class="dg55a-rot dg55a-arw"/>
  <polygon points="140,154 152,160 140,166" class="dg55a-rot"/>
  <polygon points="70,154 58,160 70,166" class="dg55a-rot"/>
  <text x="105" y="200" text-anchor="middle" class="dg55a-key dg55a-rot">pure rotation</text>

  <text x="315" y="28" text-anchor="middle" class="dg55a-lbl">Coronal plane</text>
  <line x1="315" y1="60" x2="315" y2="200" class="dg55a-plane"/>
  <g class="dg55a-v"><rect x="291" y="110" width="22" height="40" rx="4" class="dg55a-blk"/></g>
  <line x1="345" y1="95" x2="345" y2="165" class="dg55a-sb dg55a-arw"/>
  <polygon points="339,95 345,83 351,95" class="dg55a-sb"/>
  <polygon points="339,165 345,177 351,165" class="dg55a-sb"/>
  <text x="315" y="225" text-anchor="middle" class="dg55a-key dg55a-sb">pure side bending</text>

  <text x="525" y="28" text-anchor="middle" class="dg55a-lbl">Cervical facet ~45 degrees</text>
  <line x1="455" y1="200" x2="595" y2="60" class="dg55a-plane"/>
  <g transform="rotate(-45 525 130)">
    <g class="dg55a-d"><rect x="505" y="104" width="40" height="24" rx="4" class="dg55a-blk"/></g>
  </g>
  <line x1="545" y1="175" x2="590" y2="175" class="dg55a-guide"/>
  <line x1="590" y1="175" x2="590" y2="130" class="dg55a-guide"/>
  <line x1="548" y1="185" x2="585" y2="185" class="dg55a-rot dg55a-arw"/>
  <polygon points="585,179 597,185 585,191" class="dg55a-rot"/>
  <line x1="605" y1="172" x2="605" y2="135" class="dg55a-sb dg55a-arw"/>
  <polygon points="599,135 605,123 611,135" class="dg55a-sb"/>
  <text x="525" y="225" text-anchor="middle" class="dg55a-key dg55a-rot">rotation +</text>
  <text x="525" y="242" text-anchor="middle" class="dg55a-key dg55a-sb">side bending, same side</text>

  <text x="315" y="275" text-anchor="middle" class="dg55a-sub">Lumbar facets are sagittal: mostly flexion and extension</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv55-whiplash-phases"] = {
  title: "Whiplash in three phases",
  caption:
    "After a rear impact the neck first flexes as a whole. The mobile upper cervical spine, carrying the weight of the head, rebounds first, so phase 2 is an S shape - lower cervical flexion with upper cervical extension. " +
    "Finally the motion carries through and the lower cervical spine extends too. The dashed line is the neutral neck; the anterior side faces right. This follows the lecture (Slide 33); biomechanical studies usually describe the S phase the other way round, with upper flexion and lower extension.",
  svg: `
<svg viewBox="0 0 630 290" role="img" aria-label="Three side views of the neck with the face to the right. Phase 1, the whole neck bends forward in flexion. Phase 2, the lower neck bends forward while the upper neck bends back, forming an S shape. Phase 3, the lower neck bends back into extension.">
  <style>
    .dg55b-neu  { fill: none; stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 5 5; }
    .dg55b-low  { fill: none; stroke: var(--dg-accent); stroke-width: 9; stroke-linecap: round; }
    .dg55b-up   { fill: none; stroke: var(--dg-warm); stroke-width: 9; stroke-linecap: round; }
    .dg55b-head { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg55b-base { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg55b-lbl  { font-size: 13px; font-weight: 700; }
    .dg55b-sub  { font-size: 12px; fill: var(--dg-muted); }
    .dg55b-p1 { animation: dg55bCyc 6s ease-in-out infinite; }
    .dg55b-p2 { animation: dg55bCyc 6s ease-in-out infinite 2s; }
    .dg55b-p3 { animation: dg55bCyc 6s ease-in-out infinite 4s; }
    @keyframes dg55bCyc { 0%,40%,100% { opacity: .35 } 8%,30% { opacity: 1 } }
  </style>

  <text x="40" y="275" class="dg55b-sub">teal = lower cervical, orange = upper cervical, face to the right</text>

  <g class="dg55b-p1">
    <rect x="60" y="215" width="80" height="22" rx="6" class="dg55b-base"/>
    <path d="M100 215 L100 95" class="dg55b-neu"/>
    <path d="M100 215 Q104 180 118 158" class="dg55b-low"/>
    <path d="M118 158 Q132 138 152 128" class="dg55b-up"/>
    <circle cx="170" cy="120" r="20" class="dg55b-head"/>
    <text x="40" y="30" class="dg55b-lbl">1. Cervical flexion</text>
    <text x="40" y="48" class="dg55b-sub">whole neck forward</text>
  </g>

  <g class="dg55b-p2">
    <rect x="265" y="215" width="80" height="22" rx="6" class="dg55b-base"/>
    <path d="M305 215 L305 95" class="dg55b-neu"/>
    <path d="M305 215 Q309 180 326 160" class="dg55b-low"/>
    <path d="M326 160 Q336 138 322 118" class="dg55b-up"/>
    <circle cx="312" cy="98" r="20" class="dg55b-head"/>
    <text x="245" y="30" class="dg55b-lbl">2. The S shape</text>
    <text x="245" y="48" class="dg55b-sub">lower flexion, upper extension</text>
  </g>

  <g class="dg55b-p3">
    <rect x="470" y="215" width="80" height="22" rx="6" class="dg55b-base"/>
    <path d="M510 215 L510 95" class="dg55b-neu"/>
    <path d="M510 215 Q506 180 490 160" class="dg55b-low"/>
    <path d="M490 160 Q478 140 470 124" class="dg55b-up"/>
    <circle cx="462" cy="106" r="20" class="dg55b-head"/>
    <text x="450" y="30" class="dg55b-lbl">3. Lower cervical extension</text>
    <text x="450" y="48" class="dg55b-sub">motion carries through</text>
  </g>
</svg>`,
};

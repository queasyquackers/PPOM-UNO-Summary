window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv102-lower-cross"] = {
  title: "The lower crossed X",
  caption: "Side view, patient facing right. The tight line (Type I, facilitated) joins the thoracolumbar erector spinae behind to the iliopsoas in front; the weak line (Type II, inhibited) joins the gluteals behind to the abdominals in front. As the shortened iliopsoas pulls, the pelvis tilts anteriorly and the lumbar curve deepens into excessive lordosis while the weak abdominals lose core support (Slide 20). The dashed outline is the neutral posture for comparison.",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Side view of a spine and pelvis with two crossing lines. A tight line joins erector spinae behind to iliopsoas in front; a weak line joins gluteals behind to abdominals in front. The pelvis tilts forward and the lumbar curve deepens into excessive lordosis.">
  <style>
    .dg102a-ghost { fill: none; stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 5 5; opacity: .6; }
    .dg102a-spine { fill: none; stroke: var(--dg-ink); stroke-width: 6; stroke-linecap: round; }
    .dg102a-pelvis { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg102a-tight { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; }
    .dg102a-weak { stroke: var(--dg-cool); stroke-width: 4; stroke-dasharray: 9 7; stroke-linecap: round; }
    .dg102a-tt { fill: var(--dg-warm); font-size: 13px; font-weight: 700; }
    .dg102a-wt { fill: var(--dg-cool); font-size: 13px; font-weight: 700; }
    .dg102a-lbl { fill: var(--dg-ink); font-size: 13px; }
    .dg102a-sub { fill: var(--dg-muted); font-size: 11.5px; }
    .dg102a-head { fill: var(--dg-ink); font-size: 14px; font-weight: 700; }
    .dg102a-res { fill: var(--dg-good); font-size: 13px; font-weight: 700; }
    .dg102a-box { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg102a-tilt { transform-box: fill-box; transform-origin: center; transform: rotate(16deg); animation: dg102atilt 4.8s ease-in-out infinite; }
    .dg102a-curve { opacity: 1; animation: dg102afade 4.8s ease-in-out infinite; }
    .dg102a-pull { animation: dg102apulse 4.8s ease-in-out infinite; }
    .dg102a-fadeweak { animation: dg102aweak 4.8s ease-in-out infinite; }
    @keyframes dg102atilt { 0%, 15% { transform: rotate(0deg); } 55%, 100% { transform: rotate(16deg); } }
    @keyframes dg102afade { 0%, 15% { opacity: 0; } 55%, 100% { opacity: 1; } }
    @keyframes dg102apulse { 0%, 15% { opacity: .35; } 55%, 100% { opacity: 1; } }
    @keyframes dg102aweak { 0%, 15% { opacity: 1; } 55%, 100% { opacity: .45; } }
  </style>
  <text x="40" y="24" class="dg102a-sub">posterior</text>
  <text x="300" y="24" class="dg102a-sub" text-anchor="end">anterior</text>
  <path d="M 185 34 Q 160 85 185 130 Q 204 158 192 182" class="dg102a-ghost"/>
  <ellipse cx="200" cy="205" rx="52" ry="22" class="dg102a-ghost"/>
  <path d="M 185 34 Q 160 85 185 130 Q 226 160 196 186" class="dg102a-spine dg102a-curve"/>
  <ellipse cx="200" cy="205" rx="52" ry="22" class="dg102a-pelvis dg102a-tilt"/>
  <text x="200" y="210" class="dg102a-sub" text-anchor="middle">pelvis</text>
  <line x1="120" y1="112" x2="286" y2="262" class="dg102a-tight dg102a-pull"/>
  <line x1="286" y1="112" x2="120" y2="262" class="dg102a-weak dg102a-fadeweak"/>
  <text x="112" y="100" class="dg102a-tt" text-anchor="end">Tight</text>
  <text x="112" y="116" class="dg102a-lbl" text-anchor="end">erector</text>
  <text x="112" y="131" class="dg102a-lbl" text-anchor="end">spinae</text>
  <text x="294" y="100" class="dg102a-wt">Weak</text>
  <text x="294" y="116" class="dg102a-lbl">abdominals</text>
  <text x="112" y="258" class="dg102a-wt" text-anchor="end">Weak</text>
  <text x="112" y="274" class="dg102a-lbl" text-anchor="end">gluteals</text>
  <text x="294" y="258" class="dg102a-tt">Tight</text>
  <text x="294" y="274" class="dg102a-lbl">iliopsoas</text>
  <text x="232" y="150" class="dg102a-sub">lumbar lordosis</text>
  <rect x="392" y="36" width="236" height="232" rx="12" class="dg102a-box"/>
  <text x="408" y="62" class="dg102a-tt">Tight line: Type I, facilitated</text>
  <text x="408" y="80" class="dg102a-lbl">Erector spinae + iliopsoas</text>
  <text x="408" y="96" class="dg102a-sub">stretch these</text>
  <text x="408" y="126" class="dg102a-wt">Weak line: Type II, inhibited</text>
  <text x="408" y="144" class="dg102a-lbl">Gluteals + abdominals</text>
  <text x="408" y="160" class="dg102a-sub">strengthen these</text>
  <text x="408" y="192" class="dg102a-res">Result</text>
  <text x="408" y="210" class="dg102a-lbl">Anterior pelvic tilt</text>
  <text x="408" y="228" class="dg102a-lbl">Excessive lumbar lordosis</text>
  <text x="408" y="246" class="dg102a-lbl">Lost core support</text>
</svg>`
};

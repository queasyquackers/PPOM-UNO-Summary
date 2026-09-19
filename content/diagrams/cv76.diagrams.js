window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};
window.LECTURE_DIAGRAMS["cv76-lipid-panel"] = {
  title: "Saturated vs trans fat on the lipid panel",
  caption: "Dashed outlines are the starting LDL-C and HDL-C levels; the solid bars show where each fat pushes them. Both fats raise total and LDL cholesterol, but only trans fat also drops HDL - the lecturer's 'worst combination for risk', and the reason trans fat was removed from the food supply (Slide 15, Mensink and Katan). Bar heights are illustrative directions, not measured values.",
  svg: `<svg viewBox="0 0 620 260" role="img" aria-label="Two bar panels. Saturated fat: LDL cholesterol rises, HDL cholesterol stays the same. Trans fat: LDL cholesterol rises and HDL cholesterol falls.">
  <style>
    .dg76a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg76a-head { font-size: 15px; font-weight: 700; fill: var(--dg-ink); }
    .dg76a-lbl { font-size: 13px; font-weight: 700; fill: var(--dg-ink); }
    .dg76a-sub { font-size: 12px; fill: var(--dg-muted); }
    .dg76a-up { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg76a-down { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg76a-same { font-size: 13px; font-weight: 700; fill: var(--dg-good); }
    .dg76a-base { fill: none; stroke: var(--dg-muted); stroke-width: 1.5; stroke-dasharray: 5 4; }
    .dg76a-ldl { fill: var(--dg-warm); opacity: .85; }
    .dg76a-hdl { fill: var(--dg-cool); opacity: .85; }
    .dg76a-axis { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg76a-grow, .dg76a-shrink { transform-box: fill-box; transform-origin: 50% 100%; }
    .dg76a-grow { animation: dg76agrow 4s ease-in-out infinite; }
    .dg76a-shrink { animation: dg76ashrink 4s ease-in-out infinite; }
    @keyframes dg76agrow { 0%, 10% { transform: scaleY(0.667); } 55%, 100% { transform: scaleY(1); } }
    @keyframes dg76ashrink { 0%, 10% { transform: scaleY(1.818); } 55%, 100% { transform: scaleY(1); } }
    @media (prefers-reduced-motion: reduce) { .dg76a-grow, .dg76a-shrink { animation: none; } }
  </style>
  <rect class="dg76a-panel" x="15" y="10" width="285" height="240" rx="10"/>
  <rect class="dg76a-panel" x="320" y="10" width="285" height="240" rx="10"/>
  <text class="dg76a-head" x="157" y="36" text-anchor="middle">Saturated fat</text>
  <text class="dg76a-head" x="462" y="36" text-anchor="middle">Trans fat</text>
  <line class="dg76a-axis" x1="40" y1="210" x2="275" y2="210"/>
  <line class="dg76a-axis" x1="345" y1="210" x2="580" y2="210"/>
  <rect class="dg76a-ldl dg76a-grow" x="75" y="90" width="60" height="120"/>
  <rect class="dg76a-base" x="75" y="130" width="60" height="80"/>
  <rect class="dg76a-hdl" x="180" y="130" width="60" height="80"/>
  <rect class="dg76a-base" x="180" y="130" width="60" height="80"/>
  <text class="dg76a-up" x="105" y="80" text-anchor="middle">LDL-C up</text>
  <text class="dg76a-same" x="210" y="120" text-anchor="middle">HDL-C no drop</text>
  <text class="dg76a-lbl" x="105" y="230" text-anchor="middle">LDL-C</text>
  <text class="dg76a-lbl" x="210" y="230" text-anchor="middle">HDL-C</text>
  <rect class="dg76a-ldl dg76a-grow" x="380" y="90" width="60" height="120"/>
  <rect class="dg76a-base" x="380" y="130" width="60" height="80"/>
  <rect class="dg76a-hdl dg76a-shrink" x="485" y="166" width="60" height="44"/>
  <rect class="dg76a-base" x="485" y="130" width="60" height="80"/>
  <text class="dg76a-up" x="410" y="80" text-anchor="middle">LDL-C up</text>
  <text class="dg76a-down" x="515" y="120" text-anchor="middle">HDL-C down</text>
  <text class="dg76a-lbl" x="410" y="230" text-anchor="middle">LDL-C</text>
  <text class="dg76a-lbl" x="515" y="230" text-anchor="middle">HDL-C</text>
  <text class="dg76a-sub" x="157" y="246" text-anchor="middle">total cholesterol also up</text>
  <text class="dg76a-sub" x="462" y="246" text-anchor="middle">total cholesterol also up</text>
</svg>`
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv103-agr-layering"] = {
  title: "Layering motion to find the barrier",
  caption:
    "The AGR screen adds one plane at a time in a fixed order - side bending from neutral (Type I), then flexion or extension (Type II), then rotation (Type II enhanced). " +
    "By Fryette's Principle III each added motion restricts the others, so the free range (bar) shrinks until physiological locking. " +
    "At that barrier a normal segment still yields and springs back (soft end-feel), while a dysfunctional segment locks earlier and stops dead (hard end-feel) - grade it I, II or III.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four stages of the AGR screen: neutral with full free range, then side bending, then flexion or extension, then rotation, with the free range bar shrinking at each step to physiological locking. Below, a normal segment springs back from its barrier while a dysfunctional segment stops hard at an earlier barrier.">
  <style>
    .dg103a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg103a-track { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1; }
    .dg103a-bar { fill: var(--dg-accent); }
    .dg103a-lbl { font-size: 13px; font-weight: 700; }
    .dg103a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg103a-good { fill: var(--dg-good); }
    .dg103a-warm { fill: var(--dg-warm); }
    .dg103a-wall { stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    .dg103a-wallw { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg103a-arrow { stroke: var(--dg-muted); stroke-width: 2; }
    .dg103a-s1 { animation: dg103aglow 6s ease-in-out infinite; }
    .dg103a-s2 { animation: dg103aglow 6s ease-in-out infinite 1.5s; }
    .dg103a-s3 { animation: dg103aglow 6s ease-in-out infinite 3s; }
    .dg103a-s4 { animation: dg103aglow 6s ease-in-out infinite 4.5s; }
    @keyframes dg103aglow { 0%, 100% { opacity: .55 } 12% { opacity: 1 } 30% { opacity: .55 } }
    .dg103a-spring { animation: dg103aspring 2.4s ease-in-out infinite; }
    @keyframes dg103aspring {
      0% { transform: translateX(0) }
      45% { transform: translateX(150px) }
      55% { transform: translateX(132px) }
      65% { transform: translateX(150px) }
      100% { transform: translateX(0) }
    }
    .dg103a-stop { animation: dg103astop 2.4s ease-in-out infinite; }
    @keyframes dg103astop {
      0% { transform: translateX(0) }
      40% { transform: translateX(96px) }
      70% { transform: translateX(96px) }
      100% { transform: translateX(0) }
    }
  </style>

  <g class="dg103a-s1">
    <rect x="10" y="20" width="145" height="110" rx="10" class="dg103a-panel"/>
    <text x="22" y="44" class="dg103a-lbl">1. Neutral</text>
    <text x="22" y="62" class="dg103a-sub">start position</text>
    <rect x="22" y="90" width="120" height="16" rx="4" class="dg103a-track"/>
    <rect x="22" y="90" width="120" height="16" rx="4" class="dg103a-bar"/>
    <text x="22" y="122" class="dg103a-sub">free range: full</text>
  </g>
  <g class="dg103a-s2">
    <rect x="167" y="20" width="145" height="110" rx="10" class="dg103a-panel"/>
    <text x="179" y="44" class="dg103a-lbl">2. + Side bending</text>
    <text x="179" y="62" class="dg103a-sub">Type I</text>
    <rect x="179" y="90" width="120" height="16" rx="4" class="dg103a-track"/>
    <rect x="179" y="90" width="80" height="16" rx="4" class="dg103a-bar"/>
    <text x="179" y="122" class="dg103a-sub">others restricted</text>
  </g>
  <g class="dg103a-s3">
    <rect x="324" y="20" width="145" height="110" rx="10" class="dg103a-panel"/>
    <text x="336" y="44" class="dg103a-lbl">3. + Flex / Ext</text>
    <text x="336" y="62" class="dg103a-sub">Type II</text>
    <rect x="336" y="90" width="120" height="16" rx="4" class="dg103a-track"/>
    <rect x="336" y="90" width="44" height="16" rx="4" class="dg103a-bar"/>
    <text x="336" y="122" class="dg103a-sub">restricted further</text>
  </g>
  <g class="dg103a-s4">
    <rect x="481" y="20" width="149" height="110" rx="10" class="dg103a-panel"/>
    <text x="493" y="44" class="dg103a-lbl">4. + Rotation</text>
    <text x="493" y="62" class="dg103a-sub">Type II enhanced</text>
    <rect x="493" y="90" width="120" height="16" rx="4" class="dg103a-track"/>
    <rect x="493" y="90" width="10" height="16" rx="4" class="dg103a-bar"/>
    <text x="493" y="122" class="dg103a-sub">physiological locking</text>
  </g>

  <text x="10" y="162" class="dg103a-lbl">Challenge the barrier with the listening hand</text>

  <rect x="10" y="175" width="305" height="115" rx="10" class="dg103a-panel"/>
  <text x="22" y="198" class="dg103a-lbl dg103a-good">Normal segment</text>
  <line x1="22" y1="240" x2="210" y2="240" class="dg103a-arrow" stroke-dasharray="4 4"/>
  <line x1="222" y1="215" x2="222" y2="262" class="dg103a-wall"/>
  <text x="232" y="232" class="dg103a-sub">elastic</text>
  <text x="232" y="246" class="dg103a-sub">barrier</text>
  <g class="dg103a-spring"><circle cx="50" cy="240" r="11" class="dg103a-good"/></g>
  <text x="22" y="280" class="dg103a-sub">yields and springs: soft end-feel</text>

  <rect x="325" y="175" width="305" height="115" rx="10" class="dg103a-panel"/>
  <text x="337" y="198" class="dg103a-lbl dg103a-warm">Dysfunctional segment</text>
  <line x1="337" y1="240" x2="525" y2="240" class="dg103a-arrow" stroke-dasharray="4 4"/>
  <line x1="475" y1="215" x2="475" y2="262" class="dg103a-wallw"/>
  <text x="485" y="232" class="dg103a-sub">restrictive barrier</text>
  <text x="485" y="246" class="dg103a-sub">locks earlier</text>
  <g class="dg103a-stop"><circle cx="365" cy="240" r="11" class="dg103a-warm"/></g>
  <text x="337" y="280" class="dg103a-sub">guarding, no spring: hard end-feel</text>
</svg>`,
};

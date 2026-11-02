window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv115-barrier-paths"] = {
  title: "Through the barrier vs toward balance",
  caption:
    "Rib raising (top) is direct: gentle, repetitive, low-velocity, high-amplitude motion springs through the restrictive barrier again and again while the tissue response is monitored. It is not a thrust. " +
    "BLT of the ribs (bottom) does not force the barrier: after disengaging, the rib is usually exaggerated in the indirect, away from the barrier, to a point of balance, then returned toward neutral and reassessed. " +
    "BLT can also be done direct; the indirect path is drawn because the lecture calls it the usual one (Slides 9 and 15).",
  svg: `
<svg viewBox="0 0 640 306" role="img" aria-label="Two tracks share a restrictive barrier. On the top track, rib raising moves a marker repeatedly back and forth through the barrier. On the bottom track, BLT moves the marker from neutral away from the barrier to a point of balance, holds it there, returns it to neutral and reassesses.">
  <style>
    .dg115a-panel  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg115a-track  { stroke: var(--dg-line); stroke-width: 4; stroke-linecap: round; }
    .dg115a-wall   { stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 7 5; }
    .dg115a-range  { stroke: var(--dg-accent); stroke-width: 2.5; }
    .dg115a-head   { fill: var(--dg-accent); }
    .dg115a-tick   { stroke: var(--dg-ink); stroke-width: 2; }
    .dg115a-ring   { fill: none; stroke: var(--dg-good); stroke-width: 3; }
    .dg115a-dot    { fill: var(--dg-accent); stroke: var(--dg-surface); stroke-width: 2; }
    .dg115a-title  { font-size: 14px; font-weight: 700; }
    .dg115a-lbl    { font-size: 12.5px; }
    .dg115a-step   { font-size: 13px; font-weight: 700; }
    .dg115a-spring { animation: dg115aspring 6s ease-in-out infinite; }
    @keyframes dg115aspring {
      0%, 100% { transform: translateX(0); }
      16.6%    { transform: translateX(200px); }
      33.3%    { transform: translateX(0); }
      50%      { transform: translateX(200px); }
      66.6%    { transform: translateX(0); }
      83.3%    { transform: translateX(200px); }
    }
    .dg115a-seek { animation: dg115aseek 9s ease-in-out infinite; }
    @keyframes dg115aseek {
      0%, 14%   { transform: translateX(0); }
      36%, 62%  { transform: translateX(-140px); }
      80%, 100% { transform: translateX(0); }
    }
    .dg115a-hold { animation: dg115ahold 9s linear infinite; }
    @keyframes dg115ahold {
      0%, 34%   { opacity: .35; }
      40%, 58%  { opacity: 1; }
      64%, 100% { opacity: .35; }
    }
    .dg115a-s1 { animation: dg115as1 9s linear infinite; }
    .dg115a-s2 { animation: dg115as2 9s linear infinite; }
    .dg115a-s3 { animation: dg115as3 9s linear infinite; }
    .dg115a-s4 { animation: dg115as4 9s linear infinite; }
    .dg115a-s5 { animation: dg115as5 9s linear infinite; }
    @keyframes dg115as1 { 0%, 13% { opacity: 1; } 15%, 100% { opacity: .35; } }
    @keyframes dg115as2 { 0%, 14% { opacity: .35; } 16%, 35% { opacity: 1; } 37%, 100% { opacity: .35; } }
    @keyframes dg115as3 { 0%, 36% { opacity: .35; } 38%, 61% { opacity: 1; } 63%, 100% { opacity: .35; } }
    @keyframes dg115as4 { 0%, 62% { opacity: .35; } 64%, 79% { opacity: 1; } 81%, 100% { opacity: .35; } }
    @keyframes dg115as5 { 0%, 80% { opacity: .35; } 82%, 99% { opacity: 1; } 100% { opacity: .35; } }
  </style>

  <rect x="10" y="10" width="620" height="118" rx="12" class="dg115a-panel"/>
  <rect x="10" y="138" width="620" height="158" rx="12" class="dg115a-panel"/>

  <line x1="430" y1="44" x2="430" y2="240" class="dg115a-wall"/>
  <text x="430" y="36" text-anchor="middle" class="dg115a-lbl" font-weight="700" style="fill:var(--dg-warm)">Restrictive barrier</text>

  <text x="26" y="32" class="dg115a-title">Rib raising</text>
  <text x="26" y="50" class="dg115a-lbl" style="fill:var(--dg-muted)">Direct, joint focused</text>
  <line x1="130" y1="82" x2="590" y2="82" class="dg115a-track"/>
  <line x1="312" y1="82" x2="518" y2="82" class="dg115a-range"/>
  <polygon points="312,74 296,82 312,90" class="dg115a-head"/>
  <polygon points="518,74 534,82 518,90" class="dg115a-head"/>
  <circle cx="330" cy="82" r="11" class="dg115a-dot dg115a-spring"/>
  <text x="26" y="114" class="dg115a-lbl">Repetitive, low-velocity, high-amplitude. Not a thrust.</text>

  <text x="26" y="160" class="dg115a-title">BLT of the ribs</text>
  <text x="26" y="178" class="dg115a-lbl" style="fill:var(--dg-muted)">Usually indirect</text>
  <line x1="130" y1="212" x2="590" y2="212" class="dg115a-track"/>
  <line x1="330" y1="198" x2="330" y2="226" class="dg115a-tick"/>
  <text x="330" y="190" text-anchor="middle" class="dg115a-lbl">Neutral</text>
  <circle cx="190" cy="212" r="16" class="dg115a-ring dg115a-hold"/>
  <text x="190" y="190" text-anchor="middle" class="dg115a-lbl" font-weight="700" style="fill:var(--dg-good)">Point of balance</text>
  <line x1="316" y1="212" x2="220" y2="212" class="dg115a-range"/>
  <polygon points="222,204 206,212 222,220" class="dg115a-head"/>
  <circle cx="330" cy="212" r="11" class="dg115a-dot dg115a-seek"/>

  <text x="36" y="272" class="dg115a-step dg115a-s1">1 Disengage</text>
  <text x="150" y="272" class="dg115a-step dg115a-s2">2 Exaggerate</text>
  <text x="272" y="272" class="dg115a-step dg115a-s3">3 Balance</text>
  <text x="372" y="272" class="dg115a-step dg115a-s4">Return to neutral</text>
  <text x="522" y="272" class="dg115a-step dg115a-s5">Reassess</text>
</svg>`,
};

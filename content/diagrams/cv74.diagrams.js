window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv74-supply-demand-mismatch"] = {
  title: "Stable angina: the perfusion-demand mismatch",
  caption:
    "At rest, flow through a coronary artery narrowed by more than 70% still meets myocardial oxygen demand, so the patient has no symptoms and a normal resting ECG. " +
    "With exertion, heart rate, systolic blood pressure, wall tension and contractility push demand up, but the fixed plaque caps supply; the gap is transient ischemia (angina, ST depression). " +
    "Rest or nitroglycerin lowers demand back under the ceiling, which is why the pain resolves within minutes. Bar heights are schematic, not measured values.",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Two bar charts. At rest, the oxygen demand bar and the oxygen supply bar are equal. During exertion the demand bar grows far above a supply ceiling set by a greater than 70 percent coronary plaque, and the excess is labelled ischemia.">
  <style>
    .dg74a-txt { fill: var(--dg-ink); font-size: 13px; }
    .dg74a-head { fill: var(--dg-ink); font-size: 15px; font-weight: 700; }
    .dg74a-sub { fill: var(--dg-muted); font-size: 11px; }
    .dg74a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg74a-base { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg74a-dem { fill: var(--dg-warm); opacity: .85; }
    .dg74a-sup { fill: var(--dg-cool); opacity: .85; }
    .dg74a-ceil { stroke: var(--dg-ink); stroke-width: 2; stroke-dasharray: 6 4; }
    .dg74a-isch { fill: var(--dg-surface); opacity: .55; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg74a-good { fill: var(--dg-good); font-size: 12px; font-weight: 700; }
    .dg74a-bad { fill: var(--dg-warm); font-size: 12px; font-weight: 700; }
    .dg74a-grow { transform-box: fill-box; transform-origin: 50% 100%; animation: dg74agrow 6s ease-in-out infinite; }
    .dg74a-fade { animation: dg74afade 6s ease-in-out infinite; }
    @keyframes dg74agrow {
      0%, 15% { transform: scaleY(.47); }
      50%, 80% { transform: scaleY(1); }
      100% { transform: scaleY(.47); }
    }
    @keyframes dg74afade {
      0%, 30% { opacity: 0; }
      50%, 80% { opacity: 1; }
      100% { opacity: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .dg74a-grow, .dg74a-fade { animation: none; }
    }
  </style>

  <rect x="20" y="30" width="270" height="215" rx="12" class="dg74a-panel"/>
  <rect x="320" y="30" width="280" height="215" rx="12" class="dg74a-panel"/>
  <text x="34" y="22" class="dg74a-head">At rest</text>
  <text x="334" y="22" class="dg74a-head">Exertion or emotion</text>

  <line x1="40" y1="230" x2="270" y2="230" class="dg74a-base"/>
  <rect x="70" y="150" width="60" height="80" class="dg74a-dem"/>
  <rect x="165" y="150" width="60" height="80" class="dg74a-sup"/>
  <text x="100" y="140" text-anchor="middle" class="dg74a-sub">O2 demand</text>
  <text x="195" y="140" text-anchor="middle" class="dg74a-sub">O2 supply</text>
  <text x="155" y="70" text-anchor="middle" class="dg74a-good">Supply meets demand</text>
  <text x="155" y="88" text-anchor="middle" class="dg74a-sub">no pain, normal resting ECG</text>

  <line x1="340" y1="230" x2="585" y2="230" class="dg74a-base"/>
  <rect x="370" y="60" width="60" height="170" class="dg74a-dem dg74a-grow"/>
  <rect x="370" y="60" width="60" height="68" class="dg74a-isch dg74a-fade"/>
  <rect x="470" y="130" width="60" height="100" class="dg74a-sup"/>
  <line x1="355" y1="129" x2="585" y2="129" class="dg74a-ceil"/>
  <text x="500" y="146" text-anchor="middle" class="dg74a-sub">O2 supply</text>
  <text x="400" y="222" text-anchor="middle" class="dg74a-sub" style="fill: var(--dg-surface)">demand</text>
  <text x="440" y="80" class="dg74a-bad dg74a-fade">Gap = ischemia</text>
  <text x="440" y="96" class="dg74a-sub dg74a-fade">angina, ST depression</text>
  <text x="585" y="122" text-anchor="end" class="dg74a-sub">ceiling: over 70% plaque</text>

  <text x="34" y="265" class="dg74a-txt">Demand rises with heart rate, systolic BP, wall tension, contractility.</text>
  <text x="34" y="283" class="dg74a-txt">Rest or nitroglycerin lowers demand under the ceiling, so pain resolves in minutes.</text>
</svg>`
};

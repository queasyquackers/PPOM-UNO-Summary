window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv82-reentry-formation"] = {
  title: "How a premature beat forms reentry",
  caption:
    "Two parallel pathways with different properties: the slow pathway (left) conducts slowly but has a short ERP; the fast pathway (right) conducts quickly but has a long ERP. " +
    "A regular beat (A1) runs down both; the fast front reaches the bottom first, turns up the slow limb and collides with the slow front, so the beat dies. " +
    "A premature beat (A2) finds the fast pathway still refractory (unidirectional block), creeps down the slow pathway, and by the time it reaches the bottom the fast pathway has recovered - so it climbs back up and re-excites the top: reentry (Slides 12-13).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two panels. Left: a regular beat travels down a slow and a fast pathway, and the two wavefronts collide in the slow pathway so the beat dies. Right: a premature beat is blocked at the top of the fast pathway, travels down the slow pathway, returns up the recovered fast pathway and circles back to the top, forming reentry.">
  <style>
    .dg82a-slow  { fill: none; stroke: var(--dg-cool); stroke-width: 10; opacity: .35; }
    .dg82a-fast  { fill: none; stroke: var(--dg-warm); stroke-width: 10; opacity: .35; }
    .dg82a-stem  { stroke: var(--dg-line); stroke-width: 6; }
    .dg82a-lbl   { font-size: 13px; font-weight: 700; }
    .dg82a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg82a-note  { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg82a-block { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg82a-hit   { fill: var(--dg-accent); }
    .dg82a-wave  { fill: none; stroke: var(--dg-accent); stroke-width: 10; stroke-linecap: round; }
    .dg82a-w1 { stroke-dasharray: 30 1000; animation: dg82aw1 3s linear infinite; }
    .dg82a-w2 { stroke-dasharray: 30 1000; animation: dg82aw2 3s linear infinite; }
    .dg82a-w3 { stroke-dasharray: 60 460; animation: dg82aw3 4s linear infinite; }
    @keyframes dg82aw1 { 0% { stroke-dashoffset: 0; opacity: 1 } 80% { stroke-dashoffset: -150; opacity: 1 } 81%,100% { stroke-dashoffset: -150; opacity: 0 } }
    @keyframes dg82aw2 { 0% { stroke-dashoffset: 0; opacity: 1 } 80% { stroke-dashoffset: -370; opacity: 1 } 81%,100% { stroke-dashoffset: -370; opacity: 0 } }
    @keyframes dg82aw3 { 0% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: -520 } }
    .dg82a-pulse { animation: dg82apulse 3s ease-in-out infinite; }
    @keyframes dg82apulse { 0%,70% { opacity: .25 } 85% { opacity: 1 } 100% { opacity: .25 } }
  </style>

  <text x="160" y="22" text-anchor="middle" class="dg82a-lbl">A1 regular beat</text>
  <line x1="160" y1="32" x2="160" y2="80" class="dg82a-stem"/>
  <path d="M160,80 L100,80 L100,220 L160,220" class="dg82a-slow"/>
  <path d="M160,80 L220,80 L220,220 L160,220" class="dg82a-fast"/>
  <line x1="160" y1="220" x2="160" y2="262" class="dg82a-stem"/>
  <text x="92" y="150" text-anchor="end" class="dg82a-sub">slow CV</text>
  <text x="92" y="164" text-anchor="end" class="dg82a-sub">short ERP</text>
  <text x="228" y="150" class="dg82a-sub">fast CV</text>
  <text x="228" y="164" class="dg82a-sub">long ERP</text>
  <path d="M160,80 L100,80 L100,170" class="dg82a-wave dg82a-w1"/>
  <path d="M160,80 L220,80 L220,220 L100,220 L100,170" class="dg82a-wave dg82a-w2"/>
  <circle cx="100" cy="170" r="9" class="dg82a-hit dg82a-pulse"/>
  <text x="112" y="196" class="dg82a-note">fronts collide</text>
  <text x="160" y="284" text-anchor="middle" class="dg82a-sub">beat dies out - no reentry</text>

  <text x="470" y="22" text-anchor="middle" class="dg82a-lbl">A2 premature beat</text>
  <line x1="470" y1="32" x2="470" y2="80" class="dg82a-stem"/>
  <path d="M470,80 L410,80 L410,220 L530,220 L530,80 L470,80" class="dg82a-slow"/>
  <path d="M530,80 L530,220" class="dg82a-fast"/>
  <line x1="470" y1="220" x2="470" y2="262" class="dg82a-stem"/>
  <line x1="516" y1="104" x2="544" y2="104" class="dg82a-block"/>
  <text x="552" y="100" class="dg82a-note">1 block</text>
  <text x="552" y="114" class="dg82a-sub">(long ERP)</text>
  <text x="402" y="150" text-anchor="end" class="dg82a-note">2 slow</text>
  <text x="402" y="164" text-anchor="end" class="dg82a-sub">conduction</text>
  <text x="552" y="170" class="dg82a-note">3 recovered,</text>
  <text x="552" y="184" class="dg82a-sub">conducts back up</text>
  <path d="M470,80 L410,80 L410,220 L530,220 L530,80 L470,80" class="dg82a-wave dg82a-w3"/>
  <text x="470" y="284" text-anchor="middle" class="dg82a-sub">same impulse re-excites the top - reentry</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv82-wavelength-gap"] = {
  title: "Wavelength and the excitable gap",
  caption:
    "A reentry circuit holds a wavelength of refractory tissue (WL = CV x ERP) chasing its own tail, plus an excitable gap of recovered tissue ahead of the head. " +
    "Reentry survives only while WL is shorter than the circuit; a short WL (short QT) lets two or more waves share one circuit. " +
    "Lengthening ERP (many antiarrhythmics) grows WL until the head meets refractory tail, and pacing or a shock into the gap does the same job instantly (Slides 14-16).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left ring: one long refractory wavelength rotates around a reentry circuit, leaving a dashed excitable gap. Middle ring: in short QT the wavelength is short, so two waves circle the same ring. Right: text stating wavelength equals conduction velocity times ERP, that a longer wavelength ends reentry, and that pacing into the gap terminates it.">
  <style>
    .dg82b-track { fill: none; stroke: var(--dg-line); stroke-width: 12; stroke-dasharray: 6 6; }
    .dg82b-wl    { fill: none; stroke: var(--dg-warm); stroke-width: 12; stroke-linecap: round; }
    .dg82b-head  { fill: var(--dg-accent); }
    .dg82b-lbl   { font-size: 13px; font-weight: 700; }
    .dg82b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg82b-key   { font-size: 12px; }
    .dg82b-warm  { fill: var(--dg-warm); font-weight: 700; }
    .dg82b-good  { fill: var(--dg-good); font-weight: 700; }
    .dg82b-acc   { fill: var(--dg-accent); font-weight: 700; }
    .dg82b-spin1 { transform-origin: 130px 140px; animation: dg82bspin 5s linear infinite; }
    .dg82b-spin2 { transform-origin: 340px 140px; animation: dg82bspin 5s linear infinite; }
    @keyframes dg82bspin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
  </style>

  <text x="130" y="30" text-anchor="middle" class="dg82b-lbl">One wave in the circuit</text>
  <circle cx="130" cy="140" r="70" class="dg82b-track"/>
  <g class="dg82b-spin1">
    <circle cx="130" cy="140" r="70" class="dg82b-wl" stroke-dasharray="180 260"/>
    <circle cx="71" cy="178" r="9" class="dg82b-head"/>
  </g>
  <text x="130" y="136" text-anchor="middle" class="dg82b-sub">solid = WL</text>
  <text x="130" y="150" text-anchor="middle" class="dg82b-sub">dashed = gap</text>
  <text x="130" y="238" text-anchor="middle" class="dg82b-key">WL shorter than circuit</text>
  <text x="130" y="254" text-anchor="middle" class="dg82b-key">gap stays open: reentry runs</text>

  <text x="340" y="30" text-anchor="middle" class="dg82b-lbl">Short QT: short WL</text>
  <circle cx="340" cy="140" r="70" class="dg82b-track"/>
  <g class="dg82b-spin2">
    <circle cx="340" cy="140" r="70" class="dg82b-wl" stroke-dasharray="90 130"/>
    <circle cx="360" cy="207" r="9" class="dg82b-head"/>
    <circle cx="320" cy="73" r="9" class="dg82b-head"/>
  </g>
  <text x="340" y="144" text-anchor="middle" class="dg82b-sub">two waves fit</text>
  <text x="340" y="238" text-anchor="middle" class="dg82b-key">short ERP, short WL</text>
  <text x="340" y="254" text-anchor="middle" class="dg82b-key">multiple reentries</text>

  <text x="450" y="70" class="dg82b-lbl">WL = CV x ERP</text>
  <text x="450" y="104" class="dg82b-key dg82b-warm">WL down: risk up</text>
  <text x="450" y="120" class="dg82b-sub">short ERP or slow CV</text>
  <text x="450" y="152" class="dg82b-key dg82b-good">WL up: risk down</text>
  <text x="450" y="168" class="dg82b-sub">antiarrhythmics prolong ERP;</text>
  <text x="450" y="182" class="dg82b-sub">head meets refractory tail</text>
  <text x="450" y="214" class="dg82b-key dg82b-acc">Pace or shock the gap</text>
  <text x="450" y="230" class="dg82b-sub">gap made refractory ahead</text>
  <text x="450" y="244" class="dg82b-sub">of the head: reentry stops</text>
</svg>`,
};

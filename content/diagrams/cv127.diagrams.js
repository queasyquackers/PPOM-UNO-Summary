window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv127-granuloma-fate"] = {
  title: "The two fates of inhaled TB bacilli",
  caption:
    "Inhaled droplet nuclei reach the alveoli and multiply. Within 2 to 8 weeks, activated macrophages wall them off in a granuloma, " +
    "and that contained state is latent TB: no symptoms and no spread. If the immune system cannot keep control, the shell breaks down, " +
    "the bacilli multiply rapidly, and the patient has TB disease. Timing is this lecture's (Slides 11-13).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Three panels. First, rod-shaped bacilli travel down a bronchiole into an alveolus. Second, a ring of macrophages forms a granuloma around the bacilli within 2 to 8 weeks, which is latent TB. Third, the ring breaks open and bacilli escape up the airway and multiply, which is TB disease.">
  <style>
    .dg127a-card  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg127a-air   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 2; }
    .dg127a-head  { font-size: 13px; font-weight: 700; }
    .dg127a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg127a-key   { font-size: 11px; font-weight: 700; fill: var(--dg-accent); }
    .dg127a-bad   { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .dg127a-join  { fill: var(--dg-panel); }
    .dg127a-rod   { stroke: var(--dg-warm); stroke-width: 4; stroke-linecap: round; }
    .dg127a-mac   { fill: var(--dg-accent); opacity: .85; }
    .dg127a-step  { stroke: var(--dg-ink); stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .dg127a-fall  { animation: dg127afall 5s ease-in infinite; }
    .dg127a-fall2 { animation: dg127afall 5s ease-in infinite 1.1s backwards; }
    .dg127a-fall3 { animation: dg127afall 5s ease-in infinite 2.2s backwards; }
    @keyframes dg127afall {
      0%   { transform: translateY(-104px); opacity: 0 }
      12%  { opacity: 1 }
      55%  { transform: translateY(0); opacity: 1 }
      100% { transform: translateY(0); opacity: 1 }
    }
    .dg127a-ring { transform-origin: 320px 158px; animation: dg127aclose 5s ease-out infinite; }
    @keyframes dg127aclose {
      0%   { transform: scale(1.45); opacity: 0 }
      45%  { transform: scale(1); opacity: 1 }
      100% { transform: scale(1); opacity: 1 }
    }
    .dg127a-out1 { animation: dg127aout1 4s ease-out infinite; }
    .dg127a-out2 { animation: dg127aout2 4s ease-out infinite .5s backwards; }
    .dg127a-out3 { animation: dg127aout3 4s ease-out infinite 1s backwards; }
    @keyframes dg127aout1 {
      0%   { transform: translate(0, 56px); opacity: 0 }
      30%  { opacity: 1 }
      70%  { transform: translate(0, 0); opacity: 1 }
      100% { transform: translate(0, 0); opacity: 1 }
    }
    @keyframes dg127aout2 {
      0%   { transform: translate(0, 76px); opacity: 0 }
      30%  { opacity: 1 }
      70%  { transform: translate(0, 0); opacity: 1 }
      100% { transform: translate(0, 0); opacity: 1 }
    }
    @keyframes dg127aout3 {
      0%   { transform: translate(-30px, 34px); opacity: 0 }
      30%  { opacity: 1 }
      70%  { transform: translate(0, 0); opacity: 1 }
      100% { transform: translate(0, 0); opacity: 1 }
    }
    .dg127a-more { animation: dg127amore 2.4s ease-in-out infinite; }
    @keyframes dg127amore { 0%,100% { opacity: .45 } 50% { opacity: 1 } }
  </style>

  <rect x="8" y="8" width="196" height="284" rx="12" class="dg127a-card"/>
  <rect x="222" y="8" width="196" height="284" rx="12" class="dg127a-card"/>
  <rect x="436" y="8" width="196" height="284" rx="12" class="dg127a-card"/>

  <text x="106" y="32" text-anchor="middle" class="dg127a-head">1. Inhaled</text>
  <text x="320" y="32" text-anchor="middle" class="dg127a-head">2. Contained</text>
  <text x="534" y="32" text-anchor="middle" class="dg127a-head">3. Escaped</text>

  <rect x="96" y="44" width="20" height="66" class="dg127a-air"/>
  <circle cx="106" cy="158" r="58" class="dg127a-air"/>
  <rect x="97" y="96" width="18" height="10" class="dg127a-join"/>
  <g>
    <line x1="88" y1="146" x2="100" y2="136" class="dg127a-rod dg127a-fall"/>
    <line x1="112" y1="168" x2="126" y2="160" class="dg127a-rod dg127a-fall2"/>
    <line x1="92" y1="180" x2="104" y2="190" class="dg127a-rod dg127a-fall3"/>
    <line x1="116" y1="136" x2="128" y2="142" class="dg127a-rod"/>
  </g>
  <text x="106" y="240" text-anchor="middle" class="dg127a-sub">Droplet nuclei reach the</text>
  <text x="106" y="256" text-anchor="middle" class="dg127a-sub">alveoli and multiply</text>
  <text x="106" y="276" text-anchor="middle" class="dg127a-key">Cell-mediated immunity critical</text>

  <rect x="310" y="44" width="20" height="66" class="dg127a-air"/>
  <circle cx="320" cy="158" r="58" class="dg127a-air"/>
  <rect x="311" y="96" width="18" height="10" class="dg127a-join"/>
  <g class="dg127a-ring">
    <circle cx="320" cy="116" r="9" class="dg127a-mac"/>
    <circle cx="341" cy="122" r="9" class="dg127a-mac"/>
    <circle cx="356" cy="137" r="9" class="dg127a-mac"/>
    <circle cx="362" cy="158" r="9" class="dg127a-mac"/>
    <circle cx="356" cy="179" r="9" class="dg127a-mac"/>
    <circle cx="341" cy="194" r="9" class="dg127a-mac"/>
    <circle cx="320" cy="200" r="9" class="dg127a-mac"/>
    <circle cx="299" cy="194" r="9" class="dg127a-mac"/>
    <circle cx="284" cy="179" r="9" class="dg127a-mac"/>
    <circle cx="278" cy="158" r="9" class="dg127a-mac"/>
    <circle cx="284" cy="137" r="9" class="dg127a-mac"/>
    <circle cx="299" cy="122" r="9" class="dg127a-mac"/>
  </g>
  <line x1="306" y1="148" x2="318" y2="140" class="dg127a-rod"/>
  <line x1="326" y1="160" x2="340" y2="152" class="dg127a-rod"/>
  <line x1="308" y1="170" x2="320" y2="178" class="dg127a-rod"/>
  <text x="320" y="240" text-anchor="middle" class="dg127a-sub">Macrophages form a granuloma</text>
  <text x="320" y="256" text-anchor="middle" class="dg127a-sub">within 2 to 8 weeks</text>
  <text x="320" y="276" text-anchor="middle" class="dg127a-key">Latent TB: no symptoms or spread</text>

  <rect x="524" y="44" width="20" height="66" class="dg127a-air"/>
  <circle cx="534" cy="158" r="58" class="dg127a-air"/>
  <rect x="525" y="96" width="18" height="10" class="dg127a-join"/>
  <g>
    <circle cx="555" cy="122" r="9" class="dg127a-mac"/>
    <circle cx="570" cy="137" r="9" class="dg127a-mac"/>
    <circle cx="576" cy="158" r="9" class="dg127a-mac"/>
    <circle cx="570" cy="179" r="9" class="dg127a-mac"/>
    <circle cx="555" cy="194" r="9" class="dg127a-mac"/>
    <circle cx="534" cy="200" r="9" class="dg127a-mac"/>
    <circle cx="513" cy="194" r="9" class="dg127a-mac"/>
  </g>
  <line x1="528" y1="66" x2="540" y2="56" class="dg127a-rod dg127a-out1"/>
  <line x1="529" y1="92" x2="541" y2="80" class="dg127a-rod dg127a-out2"/>
  <line x1="490" y1="126" x2="504" y2="118" class="dg127a-rod dg127a-out3"/>
  <line x1="522" y1="150" x2="534" y2="142" class="dg127a-rod dg127a-more"/>
  <line x1="540" y1="166" x2="554" y2="158" class="dg127a-rod dg127a-more"/>
  <line x1="518" y1="172" x2="530" y2="180" class="dg127a-rod dg127a-more"/>
  <line x1="538" y1="130" x2="550" y2="140" class="dg127a-rod dg127a-more"/>
  <line x1="500" y1="150" x2="514" y2="146" class="dg127a-rod dg127a-more"/>
  <text x="534" y="240" text-anchor="middle" class="dg127a-sub">Immune control fails, shell breaks</text>
  <text x="534" y="256" text-anchor="middle" class="dg127a-sub">down, bacilli multiply rapidly</text>
  <text x="534" y="276" text-anchor="middle" class="dg127a-bad">TB disease: symptoms, can spread</text>

  <path d="M207 150 L219 150 M214 145 L219 150 L214 155" class="dg127a-step"/>
  <path d="M421 150 L433 150 M428 145 L433 150 L428 155" class="dg127a-step"/>
</svg>
`
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv86-transcellular-shift"] = {
  title: "Transcellular potassium shifts",
  caption:
    "About 90% of body potassium sits inside cells (76% in skeletal muscle) and only about 0.4% in plasma, so moving a little across the membrane changes the lab value a lot. " +
    "Insulin and beta-2 agonists stimulate the Na+/K+-ATPase and alkalosis trades intracellular H+ for K+, all pushing K+ in and lowering serum K+; " +
    "acidosis, digoxin (pump inhibition) and cell breakdown push K+ out and raise it. Total body potassium does not change in any of these (Slides 10, 13-14, 20, 50).",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="A cell holding about 90 percent of body potassium. On the left, insulin, beta-2 agonists and alkalosis drive potassium into the cell, lowering serum potassium. On the right, acidosis, digoxin and cell breakdown move potassium out of the cell, raising serum potassium.">
  <style>
    .dg86a-cell { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg86a-hd   { font-size: 14px; font-weight: 700; }
    .dg86a-lbl  { font-size: 13px; font-weight: 700; }
    .dg86a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg86a-in   { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg86a-out  { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg86a-tin  { fill: var(--dg-cool); }
    .dg86a-tout { fill: var(--dg-warm); }
    .dg86a-shaft { stroke-width: 5; stroke-linecap: round; }
    .dg86a-k    { font-size: 11px; font-weight: 700; fill: var(--dg-surface); }
    .dg86a-mvin  { animation: dg86ain 3s linear infinite; }
    .dg86a-mvout { animation: dg86aout 3s linear infinite; }
    .dg86a-d2 { animation-delay: .5s; }
    .dg86a-d3 { animation-delay: 1s; }
    @keyframes dg86ain {
      0%   { transform: translateX(0); opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(96px); opacity: 0 }
    }
    @keyframes dg86aout {
      0%   { transform: translateX(0); opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateX(96px); opacity: 0 }
    }
  </style>

  <text x="20" y="30" class="dg86a-hd dg86a-tin">Serum K+ falls</text>
  <text x="470" y="30" class="dg86a-hd dg86a-tout">Serum K+ rises</text>

  <rect x="250" y="48" width="120" height="196" rx="26" class="dg86a-cell"/>
  <text x="310" y="132" text-anchor="middle" class="dg86a-lbl">CELL</text>
  <text x="310" y="152" text-anchor="middle" class="dg86a-sub">about 90% of K+</text>
  <text x="310" y="168" text-anchor="middle" class="dg86a-sub">(76% in muscle)</text>

  <text x="20" y="84" class="dg86a-lbl">Insulin</text>
  <text x="20" y="100" class="dg86a-sub">Na+/K+-ATPase</text>
  <text x="20" y="140" class="dg86a-lbl">Beta-2 agonists</text>
  <text x="20" y="156" class="dg86a-sub">albuterol, epinephrine</text>
  <text x="20" y="196" class="dg86a-lbl">Alkalosis</text>
  <text x="20" y="212" class="dg86a-sub">H+ out, K+ in</text>

  <line x1="150" y1="90" x2="262" y2="90" class="dg86a-in dg86a-shaft"/>
  <polygon points="262,81 280,90 262,99" class="dg86a-in"/>
  <line x1="150" y1="146" x2="262" y2="146" class="dg86a-in dg86a-shaft"/>
  <polygon points="262,137 280,146 262,155" class="dg86a-in"/>
  <line x1="150" y1="202" x2="262" y2="202" class="dg86a-in dg86a-shaft"/>
  <polygon points="262,193 280,202 262,211" class="dg86a-in"/>

  <g class="dg86a-mvin"><circle cx="166" cy="90" r="9" class="dg86a-in"/><text x="166" y="94" text-anchor="middle" class="dg86a-k">K</text></g>
  <g class="dg86a-mvin dg86a-d2"><circle cx="166" cy="146" r="9" class="dg86a-in"/><text x="166" y="150" text-anchor="middle" class="dg86a-k">K</text></g>
  <g class="dg86a-mvin dg86a-d3"><circle cx="166" cy="202" r="9" class="dg86a-in"/><text x="166" y="206" text-anchor="middle" class="dg86a-k">K</text></g>

  <line x1="342" y1="90" x2="446" y2="90" class="dg86a-out dg86a-shaft"/>
  <polygon points="446,81 464,90 446,99" class="dg86a-out"/>
  <line x1="342" y1="146" x2="446" y2="146" class="dg86a-out dg86a-shaft"/>
  <polygon points="446,137 464,146 446,155" class="dg86a-out"/>
  <line x1="342" y1="202" x2="446" y2="202" class="dg86a-out dg86a-shaft"/>
  <polygon points="446,193 464,202 446,211" class="dg86a-out"/>

  <g class="dg86a-mvout"><circle cx="350" cy="90" r="9" class="dg86a-out"/><text x="350" y="94" text-anchor="middle" class="dg86a-k">K</text></g>
  <g class="dg86a-mvout dg86a-d2"><circle cx="350" cy="146" r="9" class="dg86a-out"/><text x="350" y="150" text-anchor="middle" class="dg86a-k">K</text></g>
  <g class="dg86a-mvout dg86a-d3"><circle cx="350" cy="202" r="9" class="dg86a-out"/><text x="350" y="206" text-anchor="middle" class="dg86a-k">K</text></g>

  <text x="474" y="84" class="dg86a-lbl">Acidosis</text>
  <text x="474" y="100" class="dg86a-sub">H+ in, K+ out</text>
  <text x="474" y="140" class="dg86a-lbl">Digoxin</text>
  <text x="474" y="156" class="dg86a-sub">blocks Na+/K+-ATPase</text>
  <text x="474" y="196" class="dg86a-lbl">Cell breakdown</text>
  <text x="474" y="212" class="dg86a-sub">rhabdo, burns, hemolysis</text>

  <text x="310" y="274" text-anchor="middle" class="dg86a-sub">Plasma holds only about 0.4% of body K+ - total body K+ is unchanged by any shift</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv86-cookie-model"] = {
  title: "Heller's Cookie Model for hyperkalemia",
  caption:
    "The jar is the blood and the cookies are potassium. Milk (IV calcium) balances the cookies - it stabilizes the cardiac membrane but leaves serum and total body K+ unchanged. " +
    "Small bags (insulin with glucose, inhaled beta agonists) hide cookies in cells, so serum K+ falls while total body K+ is unchanged. " +
    "Only the trash can (hemodialysis, GI binders, furosemide) removes cookies from the body (Slides 35-38, 42).",
  svg: `
<svg viewBox="0 0 630 300" role="img" aria-label="Three cookie jars. In the first, a glass of milk labelled IV calcium sits beside a full jar that stays full. In the second, cookies move from the jar into a small bag labelled cells, for insulin and albuterol. In the third, cookies move from the jar into a trash can, for dialysis, binders and furosemide.">
  <style>
    .dg86b-jar   { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg86b-ck    { fill: var(--dg-warm); }
    .dg86b-ghost { fill: none; stroke: var(--dg-warm); stroke-width: 1.5; stroke-dasharray: 3 3; }
    .dg86b-milk  { fill: var(--dg-cool); opacity: .35; }
    .dg86b-glass { fill: none; stroke: var(--dg-cool); stroke-width: 2; }
    .dg86b-bag   { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 2; }
    .dg86b-bin   { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 2; }
    .dg86b-arrow { stroke: var(--dg-line); stroke-width: 2; fill: none; }
    .dg86b-hd    { font-size: 14px; font-weight: 700; fill: var(--dg-accent); }
    .dg86b-lbl   { font-size: 12px; font-weight: 700; }
    .dg86b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg86b-good  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg86b-glow  { animation: dg86bglow 2.8s ease-in-out infinite; }
    .dg86b-tobag { animation: dg86bbag 3.2s ease-in-out infinite; }
    .dg86b-tobin { animation: dg86bbin 3.2s ease-in-out infinite; }
    .dg86b-late  { animation-delay: .8s; }
    @keyframes dg86bglow { 0%,100% { stroke-width: 2 } 50% { stroke-width: 5 } }
    @keyframes dg86bbag {
      0%, 15% { transform: translate(0, 0); opacity: 1 }
      75%     { transform: translate(78px, 18px); opacity: 1 }
      100%    { transform: translate(78px, 18px); opacity: 0 }
    }
    @keyframes dg86bbin {
      0%, 15% { transform: translate(0, 0); opacity: 1 }
      45%     { transform: translate(40px, -40px); opacity: 1 }
      80%     { transform: translate(78px, 18px); opacity: .6 }
      100%    { transform: translate(78px, 18px); opacity: 0 }
    }
  </style>

  <text x="20" y="28" class="dg86b-hd">1. Milk - protect</text>
  <text x="230" y="28" class="dg86b-hd">2. Small bags - shift</text>
  <text x="440" y="28" class="dg86b-hd">3. Trash can - remove</text>

  <rect x="20" y="70" width="100" height="130" rx="14" class="dg86b-jar dg86b-glow"/>
  <text x="70" y="62" text-anchor="middle" class="dg86b-sub">jar = blood</text>
  <circle cx="45" cy="182" r="10" class="dg86b-ck"/><circle cx="70" cy="182" r="10" class="dg86b-ck"/><circle cx="95" cy="182" r="10" class="dg86b-ck"/>
  <circle cx="57" cy="158" r="10" class="dg86b-ck"/><circle cx="83" cy="158" r="10" class="dg86b-ck"/>
  <rect x="140" y="110" width="44" height="90" rx="4" class="dg86b-glass"/>
  <rect x="142" y="130" width="40" height="68" rx="3" class="dg86b-milk"/>
  <text x="162" y="100" text-anchor="middle" class="dg86b-lbl">milk</text>
  <text x="20" y="230" class="dg86b-lbl">IV calcium</text>
  <text x="20" y="248" class="dg86b-sub">stabilizes cardiac membrane</text>
  <text x="20" y="266" class="dg86b-good">serum K+ unchanged</text>

  <rect x="230" y="70" width="100" height="130" rx="14" class="dg86b-jar"/>
  <circle cx="255" cy="182" r="10" class="dg86b-ck"/><circle cx="280" cy="182" r="10" class="dg86b-ck"/><circle cx="305" cy="182" r="10" class="dg86b-ck"/>
  <rect x="345" y="140" width="62" height="64" rx="18" class="dg86b-bag"/>
  <text x="376" y="132" text-anchor="middle" class="dg86b-lbl">bag = cells</text>
  <circle cx="365" cy="176" r="10" class="dg86b-ghost"/><circle cx="389" cy="176" r="10" class="dg86b-ghost"/>
  <path d="M 318 150 Q 340 140 352 160" class="dg86b-arrow"/>
  <g class="dg86b-tobag"><circle cx="287" cy="158" r="10" class="dg86b-ck"/></g>
  <g class="dg86b-tobag dg86b-late"><circle cx="311" cy="158" r="10" class="dg86b-ck"/></g>
  <text x="230" y="230" class="dg86b-lbl">Insulin + glucose, albuterol</text>
  <text x="230" y="248" class="dg86b-sub">K+ moves into cells</text>
  <text x="230" y="266" class="dg86b-good">total body K+ unchanged</text>

  <rect x="440" y="70" width="100" height="130" rx="14" class="dg86b-jar"/>
  <circle cx="465" cy="182" r="10" class="dg86b-ck"/><circle cx="490" cy="182" r="10" class="dg86b-ck"/><circle cx="515" cy="182" r="10" class="dg86b-ck"/>
  <rect x="558" y="146" width="48" height="58" rx="4" class="dg86b-bin"/>
  <line x1="552" y1="140" x2="612" y2="140" stroke="var(--dg-muted)" stroke-width="3"/>
  <text x="582" y="130" text-anchor="middle" class="dg86b-lbl">out</text>
  <circle cx="574" cy="180" r="10" class="dg86b-ghost"/><circle cx="592" cy="180" r="10" class="dg86b-ghost"/>
  <path d="M 520 140 Q 545 100 570 136" class="dg86b-arrow"/>
  <g class="dg86b-tobin"><circle cx="497" cy="158" r="10" class="dg86b-ck"/></g>
  <g class="dg86b-tobin dg86b-late"><circle cx="521" cy="158" r="10" class="dg86b-ck"/></g>
  <text x="440" y="230" class="dg86b-lbl">Dialysis, binders, furosemide</text>
  <text x="440" y="248" class="dg86b-sub">K+ leaves the body</text>
  <text x="440" y="266" class="dg86b-good">total body K+ falls</text>
</svg>`,
};

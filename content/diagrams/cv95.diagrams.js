window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv95-neurohormonal-loop"] = {
  title: "Neurohormonal compensation in HFrEF",
  caption: "Because BP = CO x SVR, a fall in cardiac output triggers sympathetic activation, which drives the kidney's renin-angiotensin-aldosterone system and more ADH. Salt and water retention and vasoconstriction keep blood pressure and organ perfusion normal in the short term, so the patient can stay asymptomatic for months to years. Sustained activation causes myocyte hypertrophy, myocyte death and fibrosis, remodeling the ventricle and lowering output further - the loop the HFrEF drug pillars are built to break (Slides 13-14).",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A loop: cardiac output falls, sympathetic activation, RAAS and ADH, salt and water retention with vasoconstriction, which keeps blood pressure up in the short term but with sustained activation causes hypertrophy, myocyte death and fibrosis, which lowers cardiac output again.">
  <style>
    .dg95a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg95a-hot { fill: none; stroke: var(--dg-accent); stroke-width: 3; opacity: 0; animation: dg95aglow 7.5s ease-in-out infinite; }
    .dg95a-h2 { animation-delay: 1.5s; }
    .dg95a-h3 { animation-delay: 3s; }
    .dg95a-h4 { animation-delay: 4.5s; }
    .dg95a-h5 { animation-delay: 6s; }
    @keyframes dg95aglow { 0% { opacity: 0 } 8% { opacity: 1 } 20% { opacity: 1 } 30% { opacity: 0 } 100% { opacity: 0 } }
    .dg95a-t { font-size: 13px; font-weight: 700; }
    .dg95a-s { font-size: 11px; fill: var(--dg-muted); }
    .dg95a-arrow { stroke: var(--dg-ink); stroke-width: 2.5; stroke-dasharray: 7 5; animation: dg95aflow 1.2s linear infinite; }
    .dg95a-head { fill: var(--dg-ink); }
    .dg95a-bad { stroke: var(--dg-warm); }
    .dg95a-badh { fill: var(--dg-warm); }
    .dg95a-ok { stroke: var(--dg-good); }
    .dg95a-okh { fill: var(--dg-good); }
    .dg95a-center { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2; }
    .dg95a-warmtxt { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .dg95a-goodtxt { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    @keyframes dg95aflow { to { stroke-dashoffset: -24 } }
  </style>
  <rect x="20" y="16" width="200" height="54" rx="10" class="dg95a-box"/>
  <rect x="20" y="16" width="200" height="54" rx="10" class="dg95a-hot"/>
  <text x="120" y="39" text-anchor="middle" class="dg95a-t">Cardiac output falls</text>
  <text x="120" y="57" text-anchor="middle" class="dg95a-s">MI, pressure or volume overload</text>

  <rect x="420" y="16" width="200" height="54" rx="10" class="dg95a-box"/>
  <rect x="420" y="16" width="200" height="54" rx="10" class="dg95a-hot dg95a-h2"/>
  <text x="520" y="39" text-anchor="middle" class="dg95a-t">Sympathetic activation</text>
  <text x="520" y="57" text-anchor="middle" class="dg95a-s">defends BP = CO x SVR</text>

  <rect x="420" y="123" width="200" height="54" rx="10" class="dg95a-box"/>
  <rect x="420" y="123" width="200" height="54" rx="10" class="dg95a-hot dg95a-h3"/>
  <text x="520" y="146" text-anchor="middle" class="dg95a-t">RAAS + more ADH</text>
  <text x="520" y="164" text-anchor="middle" class="dg95a-s">renin-angiotensin-aldosterone</text>

  <rect x="420" y="230" width="200" height="54" rx="10" class="dg95a-box"/>
  <rect x="420" y="230" width="200" height="54" rx="10" class="dg95a-hot dg95a-h4"/>
  <text x="520" y="253" text-anchor="middle" class="dg95a-t">Salt + water retention</text>
  <text x="520" y="271" text-anchor="middle" class="dg95a-s">and peripheral vasoconstriction</text>

  <rect x="20" y="230" width="200" height="54" rx="10" class="dg95a-box"/>
  <rect x="20" y="230" width="200" height="54" rx="10" class="dg95a-hot dg95a-h5"/>
  <text x="120" y="253" text-anchor="middle" class="dg95a-t">Hypertrophy, myocyte death</text>
  <text x="120" y="271" text-anchor="middle" class="dg95a-s">fibrosis: LV remodeling</text>

  <rect x="238" y="112" width="164" height="76" rx="12" class="dg95a-center"/>
  <text x="320" y="134" text-anchor="middle" class="dg95a-goodtxt">Short term:</text>
  <text x="320" y="152" text-anchor="middle" class="dg95a-s">BP and organ perfusion kept</text>
  <text x="320" y="170" text-anchor="middle" class="dg95a-s">patient asymptomatic</text>

  <line x1="224" y1="43" x2="408" y2="43" class="dg95a-arrow"/>
  <polygon points="408,36 420,43 408,50" class="dg95a-head"/>
  <line x1="520" y1="72" x2="520" y2="111" class="dg95a-arrow"/>
  <polygon points="513,111 520,123 527,111" class="dg95a-head"/>
  <line x1="520" y1="179" x2="520" y2="218" class="dg95a-arrow"/>
  <polygon points="513,218 520,230 527,218" class="dg95a-head"/>
  <line x1="418" y1="257" x2="232" y2="257" class="dg95a-arrow dg95a-bad"/>
  <polygon points="232,250 220,257 232,264" class="dg95a-badh"/>
  <text x="325" y="248" text-anchor="middle" class="dg95a-warmtxt">sustained activation</text>
  <line x1="120" y1="228" x2="120" y2="84" class="dg95a-arrow dg95a-bad"/>
  <polygon points="113,84 120,72 127,84" class="dg95a-badh"/>
  <text x="130" y="148" class="dg95a-warmtxt">output</text>
  <text x="130" y="162" class="dg95a-warmtxt">falls further</text>
  <line x1="436" y1="228" x2="408" y2="196" class="dg95a-arrow dg95a-ok"/>
  <polygon points="403,203 400,188 414,193" class="dg95a-okh"/>
</svg>`
};

window.LECTURE_DIAGRAMS["cv95-backward-congestion"] = {
  title: "Left to right: how congestion travels backward",
  caption: "Arrows show pressure moving backward, opposite to blood flow. A failing LV raises pressure in the pulmonary veins and capillaries (dyspnea, orthopnea, PND, crackles, pulmonary edema); the raised pulmonary pressure overloads the RV, and systemic venous congestion follows (JVD, hepatomegaly, peripheral edema). That is why left-sided HF is the most common cause of right-sided HF. Lung disease can load the RV directly - isolated right HF, or cor pulmonale, which is infrequent (Slides 18-20).",
  svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Chain of boxes: left ventricle fails, pulmonary veins and capillaries congested, right ventricle overloaded, systemic veins congested. Left-sided signs are dyspnea, orthopnea, PND and crackles; right-sided signs are JVD, hepatomegaly and peripheral edema. Lung disease feeds directly into right ventricular overload as cor pulmonale.">
  <style>
    .dg95b-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg95b-hot { fill: none; stroke: var(--dg-warm); stroke-width: 3; opacity: 0; animation: dg95bwave 6s ease-in-out infinite; }
    .dg95b-d2 { animation-delay: 1.2s; }
    .dg95b-d3 { animation-delay: 2.4s; }
    .dg95b-d4 { animation-delay: 3.6s; }
    @keyframes dg95bwave { 0% { opacity: 0 } 8% { opacity: 1 } 25% { opacity: 1 } 35% { opacity: 0 } 100% { opacity: 0 } }
    .dg95b-t { font-size: 13px; font-weight: 700; }
    .dg95b-s { font-size: 11px; fill: var(--dg-muted); }
    .dg95b-arrow { stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 7 5; animation: dg95bflow 1.2s linear infinite; }
    .dg95b-head { fill: var(--dg-warm); }
    .dg95b-lung { stroke: var(--dg-cool); stroke-width: 2.5; stroke-dasharray: 7 5; animation: dg95bflow 1.2s linear infinite; }
    .dg95b-lungh { fill: var(--dg-cool); }
    .dg95b-lungbox { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 1.5; }
    .dg95b-panel { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.5; }
    .dg95b-ph { font-size: 12px; font-weight: 700; fill: var(--dg-accent); letter-spacing: 0.06em; }
    @keyframes dg95bflow { to { stroke-dashoffset: -24 } }
  </style>
  <rect x="300" y="6" width="200" height="46" rx="10" class="dg95b-lungbox"/>
  <text x="400" y="25" text-anchor="middle" class="dg95b-t">Lung disease alone</text>
  <text x="400" y="42" text-anchor="middle" class="dg95b-s">COPD, ILD, PE: cor pulmonale</text>
  <line x1="400" y1="54" x2="400" y2="80" class="dg95b-lung"/>
  <polygon points="393,80 400,90 407,80" class="dg95b-lungh"/>

  <rect x="10" y="92" width="120" height="60" rx="10" class="dg95b-box"/>
  <rect x="10" y="92" width="120" height="60" rx="10" class="dg95b-hot"/>
  <text x="70" y="118" text-anchor="middle" class="dg95b-t">LV fails</text>
  <text x="70" y="136" text-anchor="middle" class="dg95b-s">HFrEF or HFpEF</text>

  <rect x="170" y="92" width="130" height="60" rx="10" class="dg95b-box"/>
  <rect x="170" y="92" width="130" height="60" rx="10" class="dg95b-hot dg95b-d2"/>
  <text x="235" y="118" text-anchor="middle" class="dg95b-t">Pulmonary veins</text>
  <text x="235" y="136" text-anchor="middle" class="dg95b-s">and capillaries</text>

  <rect x="340" y="92" width="120" height="60" rx="10" class="dg95b-box"/>
  <rect x="340" y="92" width="120" height="60" rx="10" class="dg95b-hot dg95b-d3"/>
  <text x="400" y="118" text-anchor="middle" class="dg95b-t">RV overloaded</text>
  <text x="400" y="136" text-anchor="middle" class="dg95b-s">high lung pressure</text>

  <rect x="500" y="92" width="130" height="60" rx="10" class="dg95b-box"/>
  <rect x="500" y="92" width="130" height="60" rx="10" class="dg95b-hot dg95b-d4"/>
  <text x="565" y="118" text-anchor="middle" class="dg95b-t">Systemic veins</text>
  <text x="565" y="136" text-anchor="middle" class="dg95b-s">congested</text>

  <line x1="132" y1="122" x2="158" y2="122" class="dg95b-arrow"/>
  <polygon points="158,115 168,122 158,129" class="dg95b-head"/>
  <line x1="302" y1="122" x2="328" y2="122" class="dg95b-arrow"/>
  <polygon points="328,115 338,122 328,129" class="dg95b-head"/>
  <line x1="462" y1="122" x2="488" y2="122" class="dg95b-arrow"/>
  <polygon points="488,115 498,122 488,129" class="dg95b-head"/>

  <rect x="10" y="172" width="290" height="76" rx="10" class="dg95b-panel"/>
  <text x="155" y="194" text-anchor="middle" class="dg95b-ph">LEFT-SIDED SIGNS</text>
  <text x="155" y="214" text-anchor="middle" class="dg95b-s">dyspnea, orthopnea, PND</text>
  <text x="155" y="232" text-anchor="middle" class="dg95b-s">crackles, pulmonary edema on x-ray</text>

  <rect x="340" y="172" width="290" height="76" rx="10" class="dg95b-panel"/>
  <text x="485" y="194" text-anchor="middle" class="dg95b-ph">RIGHT-SIDED SIGNS</text>
  <text x="485" y="214" text-anchor="middle" class="dg95b-s">jugular venous distention</text>
  <text x="485" y="232" text-anchor="middle" class="dg95b-s">hepatomegaly, peripheral edema</text>
</svg>`
};

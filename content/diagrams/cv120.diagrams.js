window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv120-loop-shapes"] = {
  title: "Reading the loop shape",
  caption: "The bright segment follows one forced breath: it starts at TLC on the left, runs across the top as exhalation to RV, and returns along the bottom as inhalation. Obstruction is smaller and scooped out because exhaling takes a long time; restriction keeps the normal shape and is simply small. The dashed outline is the normal loop. Shapes are schematic, not to scale, and the ratio cutoffs are this lecture's (Slides 20-25).",
  svg: `<svg viewBox="0 0 640 276" role="img" aria-label="Three flow-volume loops side by side, each starting at total lung capacity on the left with exhalation on top and inhalation below. The normal loop is full with a small knee and a ratio above 70 percent. The obstructive loop is smaller with a scooped expiratory limb and a ratio below 70 percent. The restrictive loop has a normal shape but is small, with a ratio normal or increased.">
  <style>
    .dg120a-head { font-size: 14px; font-weight: 700; }
    .lecture-diagram text.dg120a-sub { font-size: 11.5px; fill: var(--dg-muted); }
    .dg120a-note { font-size: 12px; font-weight: 700; }
    .lecture-diagram text.dg120a-ax { font-size: 10.5px; fill: var(--dg-muted); }
    .dg120a-axis { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg120a-ref { fill: none; stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 4; opacity: .55; }
    .dg120a-loop { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2.2; }
    .dg120a-limb { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; }
    .dg120a-run { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-dasharray: 9 91; animation: dg120atrace 5s linear infinite; }
    @keyframes dg120atrace { 0% { stroke-dashoffset: 100 } 100% { stroke-dashoffset: 0 } }
  </style>

  <g transform="translate(6,0)">
    <text x="28" y="20" class="dg120a-head">Normal</text>
    <line x1="14" y1="138" x2="196" y2="138" class="dg120a-axis"/>
    <path d="M28 138 C30 92 38 54 52 50 C62 48 70 62 84 70 C96 76 104 84 118 98 C138 116 158 128 178 138 C172 174 138 200 98 200 C60 200 34 176 28 138 Z" class="dg120a-loop"/>
    <path d="M28 138 C30 92 38 54 52 50 C62 48 70 62 84 70 C96 76 104 84 118 98 C138 116 158 128 178 138 C172 174 138 200 98 200 C60 200 34 176 28 138 Z" pathLength="100" class="dg120a-run"/>
    <text x="98" y="62" class="dg120a-ax">knee</text>
    <text x="4" y="154" class="dg120a-ax">TLC</text>
    <text x="180" y="154" class="dg120a-ax">RV</text>
    <text x="122" y="84" class="dg120a-ax">exhale &#8594;</text>
    <text x="108" y="216" class="dg120a-ax">&#8592; inhale</text>
    <text x="14" y="236" class="dg120a-note">Ratio above 70%</text>
    <text x="14" y="252" class="dg120a-sub">Full loop; a small knee is normal</text>
  </g>

  <g transform="translate(220,0)">
    <text x="28" y="20" class="dg120a-head">Obstructive</text>
    <line x1="14" y1="138" x2="196" y2="138" class="dg120a-axis"/>
    <path d="M28 138 C30 92 38 54 52 50 C62 48 70 62 84 70 C96 76 104 84 118 98 C138 116 158 128 178 138 C172 174 138 200 98 200 C60 200 34 176 28 138 Z" class="dg120a-ref"/>
    <path d="M28 138 C30 116 36 100 44 98 C54 112 86 134 156 138 C150 166 124 184 92 184 C58 184 34 164 28 138 Z" class="dg120a-loop"/>
    <path d="M44 98 C54 112 86 134 156 138" class="dg120a-limb"/>
    <path d="M28 138 C30 116 36 100 44 98 C54 112 86 134 156 138 C150 166 124 184 92 184 C58 184 34 164 28 138 Z" pathLength="100" class="dg120a-run"/>
    <text x="74" y="106" class="dg120a-ax">scooped out</text>
    <text x="4" y="154" class="dg120a-ax">TLC</text>
    <text x="158" y="154" class="dg120a-ax">RV</text>
    <text x="14" y="236" class="dg120a-note">Ratio below 70%</text>
    <text x="14" y="252" class="dg120a-sub">Smaller; exhaling takes a long time</text>
    <text x="14" y="267" class="dg120a-sub">FEV1 then grades severity</text>
  </g>

  <g transform="translate(434,0)">
    <text x="28" y="20" class="dg120a-head">Restrictive</text>
    <line x1="14" y1="138" x2="196" y2="138" class="dg120a-axis"/>
    <path d="M28 138 C30 92 38 54 52 50 C62 48 70 62 84 70 C96 76 104 84 118 98 C138 116 158 128 178 138 C172 174 138 200 98 200 C60 200 34 176 28 138 Z" class="dg120a-ref"/>
    <path d="M28 138 C30 110 36 86 46 84 C60 84 78 116 104 138 C100 162 80 178 62 178 C42 178 32 160 28 138 Z" class="dg120a-loop"/>
    <path d="M28 138 C30 110 36 86 46 84 C60 84 78 116 104 138 C100 162 80 178 62 178 C42 178 32 160 28 138 Z" pathLength="100" class="dg120a-run"/>
    <text x="84" y="96" class="dg120a-ax">normal shape, just small</text>
    <text x="4" y="154" class="dg120a-ax">TLC</text>
    <text x="106" y="154" class="dg120a-ax">RV</text>
    <text x="14" y="236" class="dg120a-note">Ratio normal or increased</text>
    <text x="14" y="252" class="dg120a-sub">FEV1 and FVC fall proportionally</text>
  </g>
</svg>`
};

window.LECTURE_DIAGRAMS["cv120-upper-airway-limbs"] = {
  title: "Which limb goes flat",
  caption: "Watch the lesion through one breath, the dot being air moving through the airway. Outside the chest, exhaled air splints the lesion open and inhalation snaps it shut, so the inspiratory limb goes flat. Inside the chest the same lesion does the reverse, so the expiratory limb goes flat. A fixed lesion stays the same caliber in both phases, so both limbs are flat and it can sit in either location. Shapes are schematic, without axis values.",
  svg: `<svg viewBox="0 0 640 320" role="img" aria-label="Three columns, each with an airway and a flow-volume loop, over one breath. Variable extrathoracic: lesion above the chest, open on exhalation and shut on inhalation, inspiratory limb flat. Variable intrathoracic: lesion inside the chest, squeezed on exhalation and open on inhalation, expiratory limb flat. Fixed: lesion unchanged in both phases, both limbs flat.">
  <style>
    .dg120b-head { font-size: 13px; font-weight: 700; }
    .dg120b-txt { font-size: 11.5px; }
    .lecture-diagram text.dg120b-sub { font-size: 11.5px; fill: var(--dg-muted); }
    .lecture-diagram text.dg120b-ax { font-size: 9.5px; fill: var(--dg-muted); }
    .lecture-diagram text.dg120b-phase { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg120b-chest { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg120b-wall { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg120b-les { fill: var(--dg-warm); }
    .dg120b-air { fill: var(--dg-cool); animation: dg120bair 6s ease-in-out infinite; }
    .dg120b-axis { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg120b-ok { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg120b-flat { fill: none; stroke: var(--dg-warm); stroke-width: 3; }
    .dg120b-up { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-dasharray: 14 200; stroke-dashoffset: 14; animation: dg120bup 6s linear infinite; }
    .dg120b-dn { fill: none; stroke: var(--dg-accent); stroke-width: 5; stroke-dasharray: 14 200; stroke-dashoffset: 14; animation: dg120bdn 6s linear infinite; }
    .dg120b-ph1 { animation: dg120bph1 6s linear infinite; }
    .dg120b-ph2 { animation: dg120bph2 6s linear infinite; }
    .dg120b-xl { animation: dg120bxl 6s ease-in-out infinite; }
    .dg120b-xr { animation: dg120bxr 6s ease-in-out infinite; }
    .dg120b-il { animation: dg120bil 6s ease-in-out infinite; }
    .dg120b-ir { animation: dg120bir 6s ease-in-out infinite; }
    @keyframes dg120bair { 0% { transform: translateY(0) } 50% { transform: translateY(-92px) } 100% { transform: translateY(0) } }
    @keyframes dg120bup { 0% { stroke-dashoffset: 14 } 50%, 100% { stroke-dashoffset: -100 } }
    @keyframes dg120bdn { 0%, 50% { stroke-dashoffset: 14 } 100% { stroke-dashoffset: -100 } }
    @keyframes dg120bph1 { 0%, 47% { opacity: 1 } 53%, 96% { opacity: .15 } 100% { opacity: 1 } }
    @keyframes dg120bph2 { 0%, 47% { opacity: .15 } 53%, 96% { opacity: 1 } 100% { opacity: .15 } }
    @keyframes dg120bxl { 0%, 42% { transform: translateX(-3px) } 56%, 92% { transform: translateX(6px) } 100% { transform: translateX(-3px) } }
    @keyframes dg120bxr { 0%, 42% { transform: translateX(3px) } 56%, 92% { transform: translateX(-6px) } 100% { transform: translateX(3px) } }
    @keyframes dg120bil { 0%, 42% { transform: translateX(6px) } 56%, 92% { transform: translateX(-3px) } 100% { transform: translateX(6px) } }
    @keyframes dg120bir { 0%, 42% { transform: translateX(-6px) } 56%, 92% { transform: translateX(3px) } 100% { transform: translateX(-6px) } }
  </style>

  <text x="262" y="16" class="dg120b-phase dg120b-ph1">EXHALE</text>
  <text x="330" y="16" class="dg120b-phase dg120b-ph2">INHALE</text>

  <g transform="translate(6,0)">
    <text x="4" y="38" class="dg120b-head">Variable extrathoracic</text>
    <path d="M8 136 C8 118 26 112 42 124 L50 124 C66 112 84 118 84 136 L84 208 C84 222 8 222 8 208 Z" class="dg120b-chest"/>
    <path d="M38 52 L38 150 L20 176 M54 52 L54 150 L72 176" class="dg120b-wall"/>
    <circle cx="46" cy="150" r="4" class="dg120b-air"/>
    <g class="dg120b-xl"><ellipse cx="38" cy="90" rx="5" ry="13" class="dg120b-les"/></g>
    <g class="dg120b-xr"><ellipse cx="54" cy="90" rx="5" ry="13" class="dg120b-les"/></g>
    <line x1="90" y1="148" x2="204" y2="148" class="dg120b-axis"/>
    <path d="M108 148 C110 104 118 88 126 86 C138 84 168 122 190 148" class="dg120b-ok"/>
    <path d="M190 148 C188 160 182 170 176 170 L122 170 C114 170 110 160 108 148" class="dg120b-flat"/>
    <path d="M108 148 C110 104 118 88 126 86 C138 84 168 122 190 148" pathLength="100" class="dg120b-up"/>
    <path d="M190 148 C188 160 182 170 176 170 L122 170 C114 170 110 160 108 148" pathLength="100" class="dg120b-dn"/>
    <text x="88" y="144" class="dg120b-ax">TLC</text>
    <text x="192" y="144" class="dg120b-ax">RV</text>
    <text x="146" y="90" class="dg120b-ax">expiratory</text>
    <text x="130" y="186" class="dg120b-ax">inspiratory</text>
    <text x="4" y="240" class="dg120b-txt">Exhale: air splints it open</text>
    <text x="4" y="256" class="dg120b-txt">Inhale: snaps shut</text>
    <text x="4" y="274" class="dg120b-head">Inspiratory limb flat</text>
    <text x="4" y="290" class="dg120b-sub">Vocal cord paralysis, adhesions,</text>
    <text x="4" y="304" class="dg120b-sub">epiglottic edema, foreign body</text>
  </g>

  <g transform="translate(220,0)">
    <text x="4" y="38" class="dg120b-head">Variable intrathoracic</text>
    <path d="M8 136 C8 118 26 112 42 124 L50 124 C66 112 84 118 84 136 L84 208 C84 222 8 222 8 208 Z" class="dg120b-chest"/>
    <path d="M38 52 L38 150 L20 176 M54 52 L54 150 L72 176" class="dg120b-wall"/>
    <circle cx="46" cy="150" r="4" class="dg120b-air"/>
    <g class="dg120b-il"><ellipse cx="38" cy="136" rx="5" ry="13" class="dg120b-les"/></g>
    <g class="dg120b-ir"><ellipse cx="54" cy="136" rx="5" ry="13" class="dg120b-les"/></g>
    <line x1="90" y1="148" x2="204" y2="148" class="dg120b-axis"/>
    <path d="M108 148 C109 136 114 126 124 126 L174 126 C182 126 188 136 190 148" class="dg120b-flat"/>
    <path d="M190 148 C186 184 166 206 148 206 C126 206 110 184 108 148" class="dg120b-ok"/>
    <path d="M108 148 C109 136 114 126 124 126 L174 126 C182 126 188 136 190 148" pathLength="100" class="dg120b-up"/>
    <path d="M190 148 C186 184 166 206 148 206 C126 206 110 184 108 148" pathLength="100" class="dg120b-dn"/>
    <text x="88" y="144" class="dg120b-ax">TLC</text>
    <text x="192" y="144" class="dg120b-ax">RV</text>
    <text x="130" y="116" class="dg120b-ax">expiratory</text>
    <text x="130" y="220" class="dg120b-ax">inspiratory</text>
    <text x="4" y="240" class="dg120b-txt">Exhale: squished together</text>
    <text x="4" y="256" class="dg120b-txt">Inhale: air splints it open</text>
    <text x="4" y="274" class="dg120b-head">Expiratory limb flat</text>
    <text x="4" y="290" class="dg120b-sub">Polypoid tumor, tracheomalacia,</text>
    <text x="4" y="304" class="dg120b-sub">polychondritis</text>
  </g>

  <g transform="translate(434,0)">
    <text x="4" y="38" class="dg120b-head">Fixed</text>
    <path d="M8 136 C8 118 26 112 42 124 L50 124 C66 112 84 118 84 136 L84 208 C84 222 8 222 8 208 Z" class="dg120b-chest"/>
    <path d="M38 52 L38 150 L20 176 M54 52 L54 150 L72 176" class="dg120b-wall"/>
    <circle cx="46" cy="150" r="4" class="dg120b-air"/>
    <ellipse cx="40" cy="96" rx="4" ry="13" class="dg120b-les"/>
    <ellipse cx="52" cy="96" rx="4" ry="13" class="dg120b-les"/>
    <line x1="90" y1="148" x2="204" y2="148" class="dg120b-axis"/>
    <path d="M108 148 C109 136 114 126 124 126 L174 126 C182 126 188 136 190 148" class="dg120b-flat"/>
    <path d="M190 148 C188 160 182 170 176 170 L122 170 C114 170 110 160 108 148" class="dg120b-flat"/>
    <path d="M108 148 C109 136 114 126 124 126 L174 126 C182 126 188 136 190 148" pathLength="100" class="dg120b-up"/>
    <path d="M190 148 C188 160 182 170 176 170 L122 170 C114 170 110 160 108 148" pathLength="100" class="dg120b-dn"/>
    <text x="88" y="144" class="dg120b-ax">TLC</text>
    <text x="192" y="144" class="dg120b-ax">RV</text>
    <text x="130" y="116" class="dg120b-ax">expiratory</text>
    <text x="130" y="186" class="dg120b-ax">inspiratory</text>
    <text x="4" y="240" class="dg120b-txt">Exhale: same narrow caliber</text>
    <text x="4" y="256" class="dg120b-txt">Inhale: same narrow caliber</text>
    <text x="4" y="274" class="dg120b-head">Both limbs flat</text>
    <text x="4" y="290" class="dg120b-sub">Tracheal stenosis, tracheal goiter,</text>
    <text x="4" y="304" class="dg120b-sub">large tonsils, large foreign body</text>
  </g>
</svg>`
};

window.LECTURE_DIAGRAMS["cv120-reading-sequence"] = {
  title: "From the PFT to the next test",
  caption: "Read left to right, as the highlight does: curves first, then the ratio, then the FEV1. Each step can send you to a further test below it. A flat line asks for the whole loop, obstruction asks for a bronchodilator test, and symptoms without obstruction ask for bronchoprovocation. All cutoffs are this lecture's; the FEV1 grades are as spoken, and Slide 18 prints Normal in the top row.",
  svg: `<svg viewBox="0 0 640 262" role="img" aria-label="Three reading steps left to right: examine the curves, examine the FEV1 over FVC ratio with a cutoff of 70 percent, and examine the FEV1 for severity. Below them, three follow-up tests: see the whole loop if a limb is flat, bronchodilator test needing a 12 percent and over 200 milliliter rise, and bronchoprovocation needing a fall of 20 percent or more.">
  <style>
    .dg120c-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg120c-glow { fill: none; stroke: var(--dg-accent); stroke-width: 3.5; opacity: 0; animation: dg120cglow 9s linear infinite; }
    .dg120c-g2 { animation-delay: 3s; }
    .dg120c-g3 { animation-delay: 6s; }
    @keyframes dg120cglow { 0% { opacity: 0 } 4% { opacity: 1 } 30% { opacity: 1 } 34%, 100% { opacity: 0 } }
    .lecture-diagram text.dg120c-num { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg120c-head { font-size: 13.5px; font-weight: 700; }
    .dg120c-txt { font-size: 11.5px; }
    .lecture-diagram text.dg120c-sub { font-size: 11px; fill: var(--dg-muted); }
    .lecture-diagram text.dg120c-go { font-size: 12.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg120c-line { stroke: var(--dg-ink); stroke-width: 1.6; fill: none; }
    .dg120c-tip { fill: var(--dg-ink); }
  </style>

  <rect x="6" y="8" width="196" height="116" rx="8" class="dg120c-box"/>
  <rect x="222" y="8" width="196" height="116" rx="8" class="dg120c-box"/>
  <rect x="438" y="8" width="196" height="116" rx="8" class="dg120c-box"/>
  <rect x="6" y="8" width="196" height="116" rx="8" class="dg120c-glow"/>
  <rect x="222" y="8" width="196" height="116" rx="8" class="dg120c-glow dg120c-g2"/>
  <rect x="438" y="8" width="196" height="116" rx="8" class="dg120c-glow dg120c-g3"/>

  <text x="16" y="28" class="dg120c-num">STEP 1</text>
  <text x="16" y="47" class="dg120c-head">Examine the curves</text>
  <text x="16" y="67" class="dg120c-txt">Scooped: obstructive</text>
  <text x="16" y="84" class="dg120c-txt">Small, normal shape: restrictive</text>
  <text x="16" y="101" class="dg120c-txt">Straight line: large airway</text>

  <text x="232" y="28" class="dg120c-num">STEP 2</text>
  <text x="232" y="47" class="dg120c-head">Examine FEV1/FVC</text>
  <text x="232" y="67" class="dg120c-txt">Below 70%: obstructive</text>
  <text x="232" y="84" class="dg120c-txt">Normal or increased: fits</text>
  <text x="232" y="101" class="dg120c-txt">restrictive if FEV1, FVC are low</text>

  <text x="448" y="28" class="dg120c-num">STEP 3</text>
  <text x="448" y="47" class="dg120c-head">Examine FEV1</text>
  <text x="448" y="67" class="dg120c-txt">Above 80%: mild</text>
  <text x="448" y="82" class="dg120c-txt">50-80%: moderate</text>
  <text x="448" y="97" class="dg120c-txt">30-50%: severe</text>
  <text x="448" y="112" class="dg120c-txt">Below 30%: very severe</text>

  <path d="M202 66 L216 66" class="dg120c-line"/><polygon points="216,61 222,66 216,71" class="dg120c-tip"/>
  <path d="M418 66 L432 66" class="dg120c-line"/><polygon points="432,61 438,66 432,71" class="dg120c-tip"/>

  <path d="M104 124 L104 146" class="dg120c-line"/><polygon points="99,146 104,152 109,146" class="dg120c-tip"/>
  <path d="M320 124 L320 146" class="dg120c-line"/><polygon points="315,146 320,152 325,146" class="dg120c-tip"/>
  <path d="M536 124 L536 146" class="dg120c-line"/><polygon points="531,146 536,152 541,146" class="dg120c-tip"/>

  <rect x="6" y="152" width="196" height="102" rx="8" class="dg120c-box"/>
  <rect x="222" y="152" width="196" height="102" rx="8" class="dg120c-box"/>
  <rect x="438" y="152" width="196" height="102" rx="8" class="dg120c-box"/>

  <text x="16" y="172" class="dg120c-sub">If a limb looks flat</text>
  <text x="16" y="192" class="dg120c-head">See the rest of the loop</text>
  <text x="16" y="213" class="dg120c-go">Which limb is flat?</text>
  <text x="16" y="232" class="dg120c-sub">Decides variable vs fixed</text>

  <text x="232" y="172" class="dg120c-sub">If obstructed</text>
  <text x="232" y="192" class="dg120c-head">Bronchodilator test</text>
  <text x="232" y="213" class="dg120c-go">Up 12% and over 200 mL</text>
  <text x="232" y="232" class="dg120c-sub">Is the obstruction reversible?</text>

  <text x="448" y="172" class="dg120c-sub">If normal but still symptomatic</text>
  <text x="448" y="192" class="dg120c-head">Bronchoprovocation</text>
  <text x="448" y="213" class="dg120c-go">Down 20% or more</text>
  <text x="448" y="232" class="dg120c-sub">If not: another diagnosis</text>
</svg>`
};

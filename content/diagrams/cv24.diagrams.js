window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv24 - Molecular physiology of vascular endothelial cells.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv24-tone-balance"] = {
  title: "Vasodilators vs vasoconstrictors",
  caption:
    "Vessels are never fully relaxed or fully contracted; they sit in partial tone because two sets of endothelial products " +
    "oppose each other (Slides 10-11). On the dilator arm are nitric oxide and prostacyclin. On the constrictor arm are " +
    "endothelin-1, thromboxane A2 and reactive oxygen species. Endothelial dysfunction is not the arrival of a new molecule - " +
    "it is this beam tipping, because nitric oxide output falls while constrictor and ROS output rises, and the lumen narrows " +
    "with it. The lecturer's working definition follows directly: when ROS production exceeds nitric oxide production, the " +
    "endothelium is dysfunctional.",
  svg: `
<svg viewBox="0 0 620 250" role="img" aria-label="A balance beam pivoting on a fulcrum. The left arm carries nitric oxide and prostacyclin, labelled vasodilators; the right arm carries endothelin-1, thromboxane A2 and reactive oxygen species, labelled vasoconstrictors. The beam starts level, marked balanced, then tips down on the constrictor side, marked dysfunction, and a vessel cross-section drawn to the right narrows its lumen at the same moment.">
  <style>
    .dg24c-beam  { fill: var(--dg-ink); }
    .dg24c-blk   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg24c-cool  { stroke: var(--dg-accent); }
    .dg24c-warm  { stroke: var(--dg-warm); }
    .dg24c-ful   { fill: var(--dg-muted); opacity: .55; }
    .dg24c-lbl   { font-size: 11px; font-weight: 700; text-anchor: middle; }
    .dg24c-sub   { font-size: 9px; fill: var(--dg-muted); text-anchor: middle; }
    .dg24c-note  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg24c-state { font-size: 11px; font-weight: 700; text-anchor: middle; }
    .dg24c-swing {
      transform-box: view-box;
      transform-origin: 230px 150px;
      transform: rotate(0deg);
      animation: dg24cTip 7s ease-in-out infinite;
    }
    @keyframes dg24cTip {
      0%, 28%   { transform: rotate(0deg) }
      50%, 82%  { transform: rotate(11deg) }
      100%      { transform: rotate(0deg) }
    }
    .dg24c-lumen {
      transform-box: view-box;
      transform-origin: 520px 128px;
      transform: scale(1);
      animation: dg24cNarrow 7s ease-in-out infinite;
    }
    @keyframes dg24cNarrow {
      0%, 28%   { transform: scale(1) }
      50%, 82%  { transform: scale(.52) }
      100%      { transform: scale(1) }
    }
    .dg24c-ok   { opacity: 1;  animation: dg24cOk 7s ease-in-out infinite; }
    .dg24c-bad  { opacity: .14; animation: dg24cBad 7s ease-in-out infinite; }
    @keyframes dg24cOk  { 0%,28% { opacity: 1 } 50%,82% { opacity: .14 } 100% { opacity: 1 } }
    @keyframes dg24cBad { 0%,28% { opacity: .14 } 50%,82% { opacity: 1 } 100% { opacity: .14 } }
    .dg24c-flow { animation: dg24cFlow 7s ease-in-out infinite; }
    @keyframes dg24cFlow { 0%,28% { opacity: .85 } 50%,82% { opacity: .18 } 100% { opacity: .85 } }
  </style>

  <polygon points="230,152 212,196 248,196" class="dg24c-ful"/>
  <line x1="200" y1="198" x2="260" y2="198" stroke="var(--dg-muted)" stroke-width="2.5" opacity=".55"/>

  <g class="dg24c-swing">
    <rect x="92" y="146" width="276" height="8" rx="4" class="dg24c-beam"/>
    <line x1="132" y1="152" x2="132" y2="164" class="dg24c-cool" stroke-width="2"/>
    <line x1="328" y1="152" x2="328" y2="164" class="dg24c-warm" stroke-width="2"/>
    <rect x="78" y="164" width="108" height="42" rx="8" class="dg24c-blk"/>
    <text x="132" y="182" class="dg24c-lbl" fill="var(--dg-accent)">NO, PGI2</text>
    <text x="132" y="196" class="dg24c-sub">vasodilators</text>
    <rect x="274" y="164" width="108" height="42" rx="8" class="dg24c-blk"/>
    <text x="328" y="182" class="dg24c-lbl" fill="var(--dg-warm)">ET-1, TXA2, ROS</text>
    <text x="328" y="196" class="dg24c-sub">vasoconstrictors</text>
  </g>

  <text x="230" y="234" class="dg24c-state dg24c-ok" fill="var(--dg-accent)">balanced: physiologic tone</text>
  <text x="230" y="234" class="dg24c-state dg24c-bad" fill="var(--dg-warm)">tipped: endothelial dysfunction</text>

  <line x1="396" y1="128" x2="446" y2="128" stroke="var(--dg-line)" stroke-width="2"/>
  <polygon points="446,122 460,128 446,134" fill="var(--dg-line)"/>
  <text x="398" y="118" class="dg24c-note">sets tone</text>

  <circle cx="520" cy="128" r="52" fill="var(--dg-accent)" opacity=".12"/>
  <circle cx="520" cy="128" r="52" fill="none" stroke="var(--dg-ink)" stroke-width="2.5"/>
  <circle cx="520" cy="128" r="34" fill="var(--dg-panel)" class="dg24c-lumen"/>
  <g class="dg24c-flow">
    <circle cx="508" cy="120" r="3.5" fill="var(--dg-cool)"/>
    <circle cx="530" cy="134" r="3.5" fill="var(--dg-cool)"/>
  </g>
  <text x="520" y="198" class="dg24c-sub">vessel lumen (cross-section)</text>
  <text x="520" y="60" class="dg24c-sub">wall</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv24-edrf-rubbed"] = {
  title: "Intact vs rubbed vessel: the EDRF experiment",
  caption:
    "The myograph experiment that defined endothelium-derived relaxing factor (Slides 12-13). Both rings are pre-contracted " +
    "with phenylephrine, which acts on smooth muscle and therefore works in both. Acetylcholine is then added. The intact ring " +
    "relaxes, because acetylcholine binds muscarinic receptors on endothelial cells and triggers nitric oxide release. The " +
    "rubbed ring - endothelium mechanically removed - stays contracted, because there are no muscarinic receptors to bind and " +
    "no nitric oxide is produced. Same drug, same smooth muscle, opposite result: relaxation to acetylcholine is endothelium-dependent.",
  svg: `
<svg viewBox="0 0 620 285" role="img" aria-label="Two tension recordings stacked on a shared time axis. In the upper trace, labelled intact endothelium, tension rises when phenylephrine is added and then falls back toward baseline when acetylcholine is added. In the lower trace, labelled rubbed with no endothelium, tension rises identically with phenylephrine but does not fall when acetylcholine is added; it stays contracted. A moving pen draws both traces at the same time.">
  <style>
    .dg24b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg24b-good  { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; }
    .dg24b-bad   { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; }
    .dg24b-base  { stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 4 4; }
    .dg24b-evt   { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 3 4; opacity: .55; }
    .dg24b-tag   { font-size: 10px; font-weight: 700; text-anchor: middle; }
    .dg24b-side  { font-size: 11px; font-weight: 700; }
    .dg24b-sub   { font-size: 8.5px; fill: var(--dg-muted); }
    .dg24b-axis  { font-size: 9px; fill: var(--dg-muted); }
    .dg24b-cover { fill: var(--dg-panel); transform: translateX(500px); animation: dg24bSweep 8s linear infinite; }
    .dg24b-pen   { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .8; transform: translateX(500px); animation: dg24bSweep 8s linear infinite; }
    @keyframes dg24bSweep { 0% { transform: translateX(0) } 86%, 100% { transform: translateX(500px) } }
  </style>

  <clipPath id="dg24b-clipA"><rect x="96" y="40" width="500" height="100" rx="8"/></clipPath>
  <clipPath id="dg24b-clipB"><rect x="96" y="160" width="500" height="100" rx="8"/></clipPath>

  <text x="200" y="26" class="dg24b-tag" fill="var(--dg-ink)">PE</text>
  <text x="200" y="35" class="dg24b-sub" text-anchor="middle">phenylephrine</text>
  <text x="370" y="26" class="dg24b-tag" fill="var(--dg-ink)">ACh</text>
  <text x="370" y="35" class="dg24b-sub" text-anchor="middle">acetylcholine</text>

  <rect x="96" y="40" width="500" height="100" rx="8" class="dg24b-panel"/>
  <rect x="96" y="160" width="500" height="100" rx="8" class="dg24b-panel"/>

  <text x="12" y="82" class="dg24b-side" fill="var(--dg-accent)">Intact</text>
  <text x="12" y="96" class="dg24b-sub">endothelium</text>
  <text x="12" y="110" class="dg24b-sub">present</text>
  <text x="12" y="202" class="dg24b-side" fill="var(--dg-warm)">Rubbed</text>
  <text x="12" y="216" class="dg24b-sub">endothelium</text>
  <text x="12" y="230" class="dg24b-sub">removed</text>

  <g clip-path="url(#dg24b-clipA)">
    <line x1="96" y1="128" x2="596" y2="128" class="dg24b-base"/>
    <line x1="200" y1="40" x2="200" y2="140" class="dg24b-evt"/>
    <line x1="370" y1="40" x2="370" y2="140" class="dg24b-evt"/>
    <path d="M96,128 L196,128 C216,128 240,60 268,58 L370,58 C398,58 418,120 450,124 L596,124" class="dg24b-good"/>
    <rect x="96" y="38" width="502" height="104" class="dg24b-cover"/>
    <line x1="96" y1="40" x2="96" y2="140" class="dg24b-pen"/>
  </g>

  <g clip-path="url(#dg24b-clipB)">
    <line x1="96" y1="248" x2="596" y2="248" class="dg24b-base"/>
    <line x1="200" y1="160" x2="200" y2="260" class="dg24b-evt"/>
    <line x1="370" y1="160" x2="370" y2="260" class="dg24b-evt"/>
    <path d="M96,248 L196,248 C216,248 240,180 268,178 L370,178 L596,176" class="dg24b-bad"/>
    <rect x="96" y="158" width="502" height="104" class="dg24b-cover"/>
    <line x1="96" y1="160" x2="96" y2="260" class="dg24b-pen"/>
  </g>

  <text x="604" y="62" class="dg24b-sub" text-anchor="end">relaxes: NO released</text>
  <text x="604" y="200" class="dg24b-sub" text-anchor="end">no relaxation: no NO</text>

  <line x1="96" y1="272" x2="590" y2="272" stroke="var(--dg-line)" stroke-width="1.4"/>
  <polygon points="590,268 602,272 590,276" fill="var(--dg-line)"/>
  <text x="96" y="283" class="dg24b-axis">time</text>
  <text x="14" y="272" class="dg24b-axis">tension</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv24-no-cascade"] = {
  title: "The nitric oxide signaling cascade",
  caption:
    "The lecture's central pathway, run end to end (Slides 15-16). Acetylcholine from cholinergic nerves binds the muscarinic " +
    "M3 receptor on the endothelial cell, intracellular calcium rises and binds calmodulin, and the calcium-calmodulin complex " +
    "activates eNOS, which converts L-arginine into nitric oxide. Note where the cell border is crossed: nitric oxide is a gas " +
    "that is made in the endothelial cell but acts in the smooth muscle cell, where guanylate cyclase converts GTP to cGMP and " +
    "cGMP activates protein kinase G to relax the muscle. PDE-5 degrades cGMP and reverses the whole sequence; sildenafil " +
    "(Viagra) inhibits PDE-5, so cGMP and vasodilation persist. Shear stress activates the same pathway.",
  svg: `
<svg viewBox="0 0 640 292" role="img" aria-label="A two-compartment pathway diagram. In the upper compartment, the endothelial cell, a pulse travels left to right through five steps: acetylcholine at the M3 receptor, a rise in calcium, calcium binding calmodulin, activation of endothelial nitric oxide synthase, and conversion of L-arginine into nitric oxide. A downward arrow labelled nitric oxide diffuses carries the pulse into the lower compartment, the vascular smooth muscle cell, where it travels right to left through guanylate cyclase, conversion of GTP into cyclic GMP, protein kinase G, and finally relaxation and vasodilation. A branch below the cyclic GMP step shows phosphodiesterase type 5 degrading cyclic GMP back to GTP, with sildenafil blocking that branch.">
  <style>
    .dg24a-cell  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg24a-node  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg24a-lit   { fill: var(--dg-accent); opacity: .10; animation: dg24aLit 10s linear infinite; }
    .dg24a-hdr   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); letter-spacing: .06em; }
    .dg24a-txt   { font-size: 10px; text-anchor: middle; }
    .dg24a-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg24a-arw   { fill: var(--dg-ink); opacity: .65; }
    .dg24a-lin   { stroke: var(--dg-ink); stroke-width: 1.6; opacity: .65; }
    .dg24a-dot   { fill: var(--dg-accent); transform: translate(80px, 81px); animation: dg24aRun 10s linear infinite; }
    @keyframes dg24aLit {
      0%   { opacity: .10 }
      5%   { opacity: .42 }
      12%  { opacity: .42 }
      17%  { opacity: .10 }
      100% { opacity: .10 }
    }
    @keyframes dg24aRun {
      0%, 7%    { transform: translate(80px, 81px) }
      12%, 19%  { transform: translate(202px, 81px) }
      24%, 31%  { transform: translate(324px, 81px) }
      36%, 43%  { transform: translate(442px, 81px) }
      48%, 55%  { transform: translate(560px, 81px) }
      62%, 69%  { transform: translate(560px, 207px) }
      74%, 81%  { transform: translate(420px, 207px) }
      86%, 90%  { transform: translate(275px, 207px) }
      95%, 100% { transform: translate(120px, 207px) }
    }
  </style>

  <text x="22" y="34" class="dg24a-hdr">ENDOTHELIAL CELL</text>
  <rect x="18" y="42" width="604" height="78" rx="12" class="dg24a-cell"/>
  <text x="22" y="160" class="dg24a-hdr">VASCULAR SMOOTH MUSCLE CELL</text>
  <rect x="18" y="168" width="604" height="78" rx="12" class="dg24a-cell"/>

  <rect x="32" y="64" width="96" height="34" rx="7" class="dg24a-node"/>
  <rect x="32" y="64" width="96" height="34" rx="7" class="dg24a-lit" style="animation-delay: .2s"/>
  <text x="80" y="79" class="dg24a-txt">ACh</text>
  <text x="80" y="92" class="dg24a-txt">M3 receptor</text>

  <rect x="154" y="64" width="96" height="34" rx="7" class="dg24a-node"/>
  <rect x="154" y="64" width="96" height="34" rx="7" class="dg24a-lit" style="animation-delay: 1.4s"/>
  <text x="202" y="86" class="dg24a-txt">Ca2+ rises</text>

  <rect x="276" y="64" width="96" height="34" rx="7" class="dg24a-node"/>
  <rect x="276" y="64" width="96" height="34" rx="7" class="dg24a-lit" style="animation-delay: 2.6s"/>
  <text x="324" y="86" class="dg24a-txt">Ca-calmodulin</text>

  <rect x="394" y="64" width="96" height="34" rx="7" class="dg24a-node"/>
  <rect x="394" y="64" width="96" height="34" rx="7" class="dg24a-lit" style="animation-delay: 3.8s"/>
  <text x="442" y="86" class="dg24a-txt">eNOS</text>

  <rect x="512" y="64" width="96" height="34" rx="7" class="dg24a-node"/>
  <rect x="512" y="64" width="96" height="34" rx="7" class="dg24a-lit" style="animation-delay: 5s"/>
  <text x="560" y="79" class="dg24a-txt">L-arginine</text>
  <text x="560" y="92" class="dg24a-txt">&#8594; NO</text>

  <polygon points="132,77 146,81 132,85" class="dg24a-arw"/>
  <polygon points="254,77 268,81 254,85" class="dg24a-arw"/>
  <polygon points="376,77 390,81 376,85" class="dg24a-arw"/>
  <polygon points="494,77 508,81 494,85" class="dg24a-arw"/>

  <line x1="560" y1="100" x2="560" y2="180" class="dg24a-lin"/>
  <polygon points="554,180 560,192 566,180" class="dg24a-arw"/>
  <text x="572" y="140" class="dg24a-sub">NO diffuses</text>
  <text x="572" y="152" class="dg24a-sub">across cells</text>

  <rect x="506" y="190" width="108" height="34" rx="7" class="dg24a-node"/>
  <rect x="506" y="190" width="108" height="34" rx="7" class="dg24a-lit" style="animation-delay: 6.4s"/>
  <text x="560" y="205" class="dg24a-txt">guanylate</text>
  <text x="560" y="218" class="dg24a-txt">cyclase</text>

  <rect x="366" y="190" width="108" height="34" rx="7" class="dg24a-node"/>
  <rect x="366" y="190" width="108" height="34" rx="7" class="dg24a-lit" style="animation-delay: 7.6s"/>
  <text x="420" y="212" class="dg24a-txt">GTP &#8594; cGMP</text>

  <rect x="221" y="190" width="108" height="34" rx="7" class="dg24a-node"/>
  <rect x="221" y="190" width="108" height="34" rx="7" class="dg24a-lit" style="animation-delay: 8.8s"/>
  <text x="275" y="212" class="dg24a-txt">PKG</text>

  <rect x="66" y="190" width="108" height="34" rx="7" class="dg24a-node"/>
  <rect x="66" y="190" width="108" height="34" rx="7" class="dg24a-lit" style="animation-delay: 9.6s"/>
  <text x="120" y="205" class="dg24a-txt">relaxation</text>
  <text x="120" y="218" class="dg24a-txt">vasodilation</text>

  <polygon points="500,201 486,207 500,213" class="dg24a-arw"/>
  <polygon points="360,201 346,207 360,213" class="dg24a-arw"/>
  <polygon points="215,201 201,207 215,213" class="dg24a-arw"/>

  <line x1="420" y1="224" x2="420" y2="248" class="dg24a-lin"/>
  <polygon points="414,248 420,258 426,248" class="dg24a-arw"/>
  <line x1="404" y1="238" x2="436" y2="238" stroke="var(--dg-warm)" stroke-width="3.5" stroke-linecap="round"/>
  <text x="398" y="242" class="dg24a-sub" text-anchor="end" fill="var(--dg-warm)">sildenafil blocks</text>
  <rect x="372" y="258" width="96" height="26" rx="7" class="dg24a-node"/>
  <text x="420" y="275" class="dg24a-txt">PDE-5</text>
  <text x="478" y="270" class="dg24a-sub">degrades cGMP back to GTP</text>
  <text x="478" y="282" class="dg24a-sub">and reverses vasodilation</text>

  <circle r="6" class="dg24a-dot"/>
</svg>`,
};

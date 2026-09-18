window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv78 - Aortic Dissection and Aneurysmal Disease (G. Saggio, DO).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv78-infrarenal-diffusion"] = {
  title: "Why AAAs form below the renal arteries",
  caption:
    "The aortic media is fed from two directions: oxygen diffuses inward from the lumen through the intima, and the " +
    "<strong>vasa vasorum</strong> in the adventitia supplies it from outside. The <strong>infrarenal aorta lacks a vasa vasorum</strong> " +
    "(Slide 5), so it depends entirely on diffusion from the lumen. When a thick atherosclerotic plaque sits on the intima, that one " +
    "supply line is cut off: the media becomes ischemic, undergoes <strong>medial necrosis</strong>, and the wall weakens (Slide 27). " +
    "That is why atherosclerosis is the primary etiology of AAA and the infrarenal segment is its most common site.",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Two cross-sections of the aortic wall side by side, each showing lumen, intima, media and adventitia from top to bottom. On the left, the thoracic aorta: oxygen dots diffuse down from the lumen through the intima into the media, and more oxygen dots rise into the media from small vasa vasorum vessels in the adventitia, so the media is supplied from both sides and labelled well perfused. On the right, the infrarenal aorta: there is no vasa vasorum in the adventitia, and a thick atherosclerotic plaque sits on the intima. Oxygen dots from the lumen stop at the plaque, so the media below is labelled ischemic, with medial necrosis and wall weakness leading to an abdominal aortic aneurysm.">
  <style>
    .dg78a-hdr   { font-size: 13px; font-weight: 700; }
    .dg78a-lbl   { font-size: 11px; }
    .dg78a-sub   { font-size: 10px; fill: var(--dg-muted); }
    .dg78a-lumen { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg78a-intima{ fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1; }
    .dg78a-media { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg78a-sick  { fill: var(--dg-warm); opacity: .16; }
    .dg78a-adv   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1; }
    .dg78a-vv    { fill: var(--dg-warm); opacity: .8; }
    .dg78a-plaque{ fill: var(--dg-muted); opacity: .75; }
    .dg78a-o2    { fill: var(--dg-cool); }
    .dg78a-arr   { stroke: var(--dg-cool); stroke-width: 2.2; fill: none; }
    .dg78a-head  { fill: var(--dg-cool); }
    .dg78a-block { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg78a-down  { animation: dg78aDown 3.6s linear infinite; }
    .dg78a-up    { animation: dg78aUp 3.6s linear infinite; }
    .dg78a-stop  { animation: dg78aStop 3.6s linear infinite; }
    .dg78a-d2    { animation-delay: 1.2s; }
    .dg78a-d3    { animation-delay: 2.4s; }
    @keyframes dg78aDown { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateY(78px); opacity: 0 } }
    @keyframes dg78aUp   { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateY(-46px); opacity: 0 } }
    @keyframes dg78aStop { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: 1 } 55% { transform: translateY(22px); opacity: 1 } 75%,100% { transform: translateY(22px); opacity: 0 } }
  </style>

  <text x="20" y="20" class="dg78a-hdr" fill="var(--dg-accent)">THORACIC AORTA</text>
  <text x="20" y="34" class="dg78a-sub">has a vasa vasorum</text>
  <text x="330" y="20" class="dg78a-hdr" fill="var(--dg-warm)">INFRARENAL AORTA</text>
  <text x="330" y="34" class="dg78a-sub">lacks a vasa vasorum</text>

  <rect x="20"  y="44" width="270" height="50" class="dg78a-lumen"/>
  <rect x="20"  y="94" width="270" height="14" class="dg78a-intima"/>
  <rect x="20"  y="108" width="270" height="70" class="dg78a-media"/>
  <rect x="20"  y="178" width="270" height="42" class="dg78a-adv"/>
  <text x="28" y="62" class="dg78a-lbl">Lumen (blood)</text>
  <text x="28" y="105" class="dg78a-sub">intima</text>
  <text x="28" y="124" class="dg78a-lbl">Media</text>
  <text x="28" y="214" class="dg78a-sub">adventitia</text>
  <circle cx="180" cy="200" r="6" class="dg78a-vv"/>
  <circle cx="230" cy="204" r="5" class="dg78a-vv"/>
  <circle cx="260" cy="196" r="4" class="dg78a-vv"/>
  <text x="120" y="214" class="dg78a-sub">vasa vasorum</text>

  <circle cx="90"  cy="70" r="4" class="dg78a-o2 dg78a-down"/>
  <circle cx="130" cy="70" r="4" class="dg78a-o2 dg78a-down dg78a-d2"/>
  <circle cx="110" cy="70" r="4" class="dg78a-o2 dg78a-down dg78a-d3"/>
  <circle cx="200" cy="190" r="4" class="dg78a-o2 dg78a-up"/>
  <circle cx="240" cy="190" r="4" class="dg78a-o2 dg78a-up dg78a-d2"/>
  <circle cx="220" cy="190" r="4" class="dg78a-o2 dg78a-up dg78a-d3"/>
  <line x1="160" y1="72" x2="160" y2="128" class="dg78a-arr"/>
  <polygon points="154,126 160,138 166,126" class="dg78a-head"/>
  <line x1="270" y1="186" x2="270" y2="152" class="dg78a-arr"/>
  <polygon points="264,154 270,142 276,154" class="dg78a-head"/>
  <text x="60" y="160" class="dg78a-lbl" fill="var(--dg-good)">fed from both sides</text>

  <rect x="330" y="44" width="270" height="50" class="dg78a-lumen"/>
  <rect x="330" y="94" width="270" height="14" class="dg78a-intima"/>
  <rect x="330" y="108" width="270" height="70" class="dg78a-media"/>
  <rect x="330" y="108" width="270" height="70" class="dg78a-sick"/>
  <rect x="330" y="178" width="270" height="42" class="dg78a-adv"/>
  <path d="M380,94 C392,66 470,62 500,70 C530,76 552,86 560,94 Z" class="dg78a-plaque"/>
  <text x="430" y="86" class="dg78a-lbl">plaque</text>
  <text x="338" y="62" class="dg78a-lbl">Lumen (blood)</text>
  <text x="338" y="105" class="dg78a-sub">intima</text>
  <text x="338" y="214" class="dg78a-sub">adventitia: no vasa vasorum</text>

  <circle cx="420" cy="40" r="4" class="dg78a-o2 dg78a-stop"/>
  <circle cx="470" cy="38" r="4" class="dg78a-o2 dg78a-stop dg78a-d2"/>
  <circle cx="520" cy="40" r="4" class="dg78a-o2 dg78a-stop dg78a-d3"/>
  <line x1="400" y1="62" x2="540" y2="62" class="dg78a-block" opacity=".0"/>
  <text x="345" y="130" class="dg78a-lbl" fill="var(--dg-warm)">Media ischemic: O2 blocked at plaque</text>
  <text x="345" y="148" class="dg78a-lbl" fill="var(--dg-warm)">-> medial necrosis -> wall weakness</text>
  <text x="345" y="166" class="dg78a-lbl" fill="var(--dg-warm)">-> AAA (most common site)</text>

  <circle cx="30" cy="248" r="4" class="dg78a-o2"/>
  <text x="42" y="252" class="dg78a-sub">oxygen and nutrients</text>
  <text x="20" y="276" class="dg78a-sub">Primary etiology of AAA = atherosclerosis; the abdominal aorta is the vessel most affected by atherosclerosis in the body.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv78-dissection-propagation"] = {
  title: "Stanford A vs B: where the false lumen runs",
  caption:
    "Blood enters an <strong>intimal tear</strong> and splits the inner media from the rest of the wall, creating a " +
    "<strong>false lumen</strong> that can propagate <strong>distally and proximally</strong> (Slide 36). The dividing question is whether the " +
    "<strong>ascending aorta</strong> is involved. <strong>Stanford A</strong> (left) involves it - propagation reaches the pericardium, the " +
    "aortic annulus and the coronaries, so it is treated with <strong>emergent surgery</strong>. <strong>Stanford B</strong> (right) starts " +
    "<strong>distal to the left subclavian artery</strong> and spares the ascending aorta, so it is treated first with " +
    "<strong>beta blockers</strong> to lower blood pressure and stop propagation, with vasodilators later (Slide 40).",
  svg: `
<svg viewBox="0 0 620 310" role="img" aria-label="Two candy-cane shaped aortas side by side, each with an ascending limb, an arch with three branches (brachiocephalic, left common carotid, left subclavian) and a descending limb. In the left aorta, labelled Stanford A, a tear in the ascending aorta opens a false lumen that spreads both back toward the aortic root and forward over the arch and down the descending aorta; the label says it involves the ascending aorta, risks tamponade, aortic regurgitation and MI, and needs emergent surgery. In the right aorta, labelled Stanford B, the tear is just past the left subclavian artery and the false lumen spreads down the descending aorta while the ascending aorta is spared; the label says treat first with beta blockers to lower blood pressure, vasodilators later, and surgery if vitals worsen or complications develop.">
  <style>
    .dg78b-hdr   { font-size: 13px; font-weight: 700; }
    .dg78b-lbl   { font-size: 11px; }
    .dg78b-sub   { font-size: 10px; fill: var(--dg-muted); }
    .dg78b-wall  { fill: none; stroke: var(--dg-ink); stroke-width: 26; stroke-linecap: butt; opacity: .85; }
    .dg78b-lumen { fill: none; stroke: var(--dg-panel); stroke-width: 21; stroke-linecap: butt; }
    .dg78b-br    { stroke: var(--dg-ink); stroke-width: 7; stroke-linecap: round; opacity: .85; }
    .dg78b-false { fill: none; stroke: var(--dg-warm); stroke-width: 8; stroke-linecap: round;
                   stroke-dasharray: 100; stroke-dashoffset: 0; animation: dg78bGrow 5s ease-in-out infinite; }
    .dg78b-tear  { fill: var(--dg-warm); stroke: var(--dg-surface); stroke-width: 1.5; }
    .dg78b-cut   { stroke: var(--dg-accent); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg78b-safe  { fill: none; stroke: var(--dg-good); stroke-width: 3; stroke-linecap: round; opacity: .8; }
    @keyframes dg78bGrow { 0% { stroke-dashoffset: 100 } 60%,100% { stroke-dashoffset: 0 } }
  </style>

  <text x="20" y="20" class="dg78b-hdr" fill="var(--dg-warm)">STANFORD A: involves ascending</text>
  <text x="330" y="20" class="dg78b-hdr" fill="var(--dg-accent)">STANFORD B: spares ascending</text>

  <line x1="95" y1="102" x2="80" y2="72" class="dg78b-br"/>
  <line x1="130" y1="93" x2="130" y2="62" class="dg78b-br"/>
  <line x1="165" y1="102" x2="180" y2="72" class="dg78b-br"/>
  <path d="M60,250 L60,160 A70,70 0 0 1 200,160 L200,275" class="dg78b-wall"/>
  <path d="M60,250 L60,160 A70,70 0 0 1 200,160 L200,275" class="dg78b-lumen"/>
  <path d="M55,205 L55,246" pathLength="100" class="dg78b-false"/>
  <path d="M55,205 L55,160 A75,75 0 0 1 205,160 L205,272" pathLength="100" class="dg78b-false"/>
  <circle cx="55" cy="205" r="6" class="dg78b-tear"/>
  <text x="72" y="208" class="dg78b-lbl">tear</text>
  <text x="18" y="268" class="dg78b-sub">root</text>
  <text x="60" y="62" class="dg78b-sub">L subclavian</text>
  <text x="228" y="140" class="dg78b-lbl">False lumen runs</text>
  <text x="228" y="154" class="dg78b-lbl">proximally AND distally</text>
  <text x="228" y="176" class="dg78b-sub">into pericardium: tamponade</text>
  <text x="228" y="190" class="dg78b-sub">into annulus: aortic regurgitation</text>
  <text x="228" y="204" class="dg78b-sub">into coronaries: MI</text>
  <text x="228" y="232" class="dg78b-lbl" font-weight="700" fill="var(--dg-warm)">-> emergent surgery</text>

  <line x1="405" y1="102" x2="390" y2="72" class="dg78b-br"/>
  <line x1="440" y1="93" x2="440" y2="62" class="dg78b-br"/>
  <line x1="475" y1="102" x2="490" y2="72" class="dg78b-br"/>
  <path d="M370,250 L370,160 A70,70 0 0 1 510,160 L510,275" class="dg78b-wall"/>
  <path d="M370,250 L370,160 A70,70 0 0 1 510,160 L510,275" class="dg78b-lumen"/>
  <path d="M370,250 L370,160 A70,70 0 0 1 470,110" class="dg78b-safe"/>
  <line x1="492" y1="92" x2="530" y2="128" class="dg78b-cut"/>
  <path d="M515,150 L515,272" pathLength="100" class="dg78b-false"/>
  <circle cx="515" cy="150" r="6" class="dg78b-tear"/>
  <text x="530" y="154" class="dg78b-lbl">tear</text>
  <text x="498" y="62" class="dg78b-sub">L subclavian</text>
  <text x="532" y="118" class="dg78b-sub">cut-off</text>
  <text x="330" y="140" class="dg78b-sub">ascending</text>
  <text x="330" y="152" class="dg78b-sub">spared</text>
  <text x="535" y="190" class="dg78b-lbl">distal</text>
  <text x="535" y="204" class="dg78b-lbl">spread</text>
  <text x="330" y="290" class="dg78b-lbl" font-weight="700" fill="var(--dg-accent)">-> beta blockers first (lower BP), vasodilators later;</text>
  <text x="330" y="304" class="dg78b-sub">surgery if vitals worsen or complications develop</text>
</svg>`,
};

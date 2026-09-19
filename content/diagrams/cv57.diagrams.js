window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv57-outside-in-sequence"] = {
  title: "Treating the whiplash case from the outside in",
  caption:
    "The lecturer's suggested order for this patient (Slides 17-18): start at the legs and climb, treating the acutely painful neck last, because the most restricted areas are still aggravated. " +
    "The panel on the right lists the pairs that can hold each other up - if one will not release, treat its partner first. " +
    "This is one approach, not a fixed recipe; treating the area of greatest restriction first and moving out is also valid.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A ladder of six treatment steps climbing from the legs at the bottom to the upper cervical spine at the top, with a side panel listing four pairs of regions that can hold each other up.">
  <style>
    .dg57a-rung { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg57a-glow { fill: var(--dg-accent); opacity: 0; }
    .dg57a-num  { font-size: 15px; font-weight: 700; fill: var(--dg-accent); }
    .dg57a-lbl  { font-size: 13px; font-weight: 700; fill: var(--dg-ink); }
    .dg57a-sub  { font-size: 11px; fill: var(--dg-muted); }
    .dg57a-axis { stroke: var(--dg-accent); stroke-width: 3; fill: none; }
    .dg57a-head { fill: var(--dg-accent); }
    .dg57a-dot  { fill: var(--dg-warm); animation: dg57a-climb 12s linear infinite; }
    .dg57a-box  { fill: none; stroke: var(--dg-line); stroke-width: 1.5; }
    .dg57a-ttl  { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg57a-pair { font-size: 12px; fill: var(--dg-ink); }
    .dg57a-g1 { animation: dg57a-step 12s linear infinite; }
    .dg57a-g2 { animation: dg57a-step 12s linear infinite 2s; }
    .dg57a-g3 { animation: dg57a-step 12s linear infinite 4s; }
    .dg57a-g4 { animation: dg57a-step 12s linear infinite 6s; }
    .dg57a-g5 { animation: dg57a-step 12s linear infinite 8s; }
    .dg57a-g6 { animation: dg57a-step 12s linear infinite 10s; }
    @keyframes dg57a-step { 0% { opacity: 0 } 2% { opacity: .22 } 15% { opacity: .22 } 18% { opacity: 0 } 100% { opacity: 0 } }
    @keyframes dg57a-climb { 0% { transform: translateY(0) } 100% { transform: translateY(-240px) } }
  </style>

  <line class="dg57a-axis" x1="36" y1="300" x2="36" y2="30"/>
  <polygon class="dg57a-head" points="28,34 44,34 36,18"/>
  <circle class="dg57a-dot" cx="36" cy="290" r="6"/>

  <rect class="dg57a-rung" x="60" y="266" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g1" x="60" y="266" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="291">1</text>
  <text class="dg57a-lbl" x="96" y="283">Legs</text>
  <text class="dg57a-sub" x="96" y="298">hamstrings, hip adductors/abductors, fibular head</text>

  <rect class="dg57a-rung" x="60" y="218" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g2" x="60" y="218" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="243">2</text>
  <text class="dg57a-lbl" x="96" y="235">Psoas, L1, R post. innominate, sacrum</text>
  <text class="dg57a-sub" x="96" y="250">Still: L1, innominate. MET/BLT: psoas, sacrum</text>

  <rect class="dg57a-rung" x="60" y="170" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g3" x="60" y="170" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="195">3</text>
  <text class="dg57a-lbl" x="96" y="187">Respiratory diaphragm</text>
  <text class="dg57a-sub" x="96" y="202">doming; rib 12 bilaterally</text>

  <rect class="dg57a-rung" x="60" y="122" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g4" x="60" y="122" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="147">4</text>
  <text class="dg57a-lbl" x="96" y="139">Thoracic outlet: rib 1, clavicles, SCM</text>
  <text class="dg57a-sub" x="96" y="154">rib 1 with Still, BLT or MET - no HVLA yet</text>

  <rect class="dg57a-rung" x="60" y="74" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g5" x="60" y="74" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="99">5</text>
  <text class="dg57a-lbl" x="96" y="91">T1 with C7, then T5</text>
  <text class="dg57a-sub" x="96" y="106">T5: Still, MET, HVLA if tolerated</text>

  <rect class="dg57a-rung" x="60" y="26" width="340" height="40" rx="8"/>
  <rect class="dg57a-glow dg57a-g6" x="60" y="26" width="340" height="40" rx="8"/>
  <text class="dg57a-num" x="74" y="51">6</text>
  <text class="dg57a-lbl" x="96" y="43">OA, AA, C2-C7 - last</text>
  <text class="dg57a-sub" x="96" y="58">Still, MET, BLT; most painful region</text>

  <rect class="dg57a-box" x="420" y="26" width="208" height="280" rx="10"/>
  <text class="dg57a-ttl" x="434" y="52">They hold each other up</text>
  <text class="dg57a-pair" x="434" y="92">Sacrum and innominate</text>
  <text class="dg57a-sub" x="434" y="108">innominate may not release first</text>
  <text class="dg57a-pair" x="434" y="146">Psoas and diaphragm</text>
  <text class="dg57a-sub" x="434" y="162">tendons interdigitate with crura</text>
  <text class="dg57a-pair" x="434" y="200">SCM and rib 1</text>
  <text class="dg57a-sub" x="434" y="216">SCM tension can hold rib 1</text>
  <text class="dg57a-pair" x="434" y="254">C7-T1 and rib 1</text>
  <text class="dg57a-sub" x="434" y="270">treat T1 first, or rib first</text>
</svg>`
};

/*
 * cv42 - Osteopathic Considerations of Lower Back Pain (Lecture #42, P. Noto, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The disc clock: direction of herniation decides which root is hit.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv42-disc-clock"] = {
  title: "Which root the herniation catches",
  caption:
    "An axial disc drawn the way the lecturer describes the clock, with <b>posterior at 12 o'clock</b>. " +
    "A radial tear propagates from the centre outward (the travelling dot), and where it arrives decides the diagnosis: straight back can reach the cord or cauda equina; " +
    "1 and 11 o'clock reach the subarticular recess and catch the <b>traversing</b> root; 2 and 10 o'clock are foraminal and catch the <b>exiting</b> root. " +
    "Numbers shown are the lecture's worked example, the L3-L4 disc: traversing = L4, exiting = L3, because L3 is already lateral and on its way out.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="An axial view of the L3 to L4 intervertebral disc with posterior at the twelve o'clock position. Three herniation directions are drawn as lobes protruding from the disc margin, each with a dot travelling outward from the centre of the disc. A lobe at twelve o'clock reaches the cauda equina. A lobe at one o'clock reaches the subarticular recess and the traversing L4 nerve root. A lobe at two o'clock reaches the foramen and the exiting L3 nerve root. Faint mirror-image lobes are drawn at eleven and ten o'clock. A panel on the right lists the same three directions with the root each one catches.">
  <style>
    .dg42a-disc { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg42a-nuc  { fill: var(--dg-accent); opacity: .22; }
    .dg42a-lobe { fill: var(--dg-warm); opacity: .85; }
    .dg42a-mir  { fill: var(--dg-warm); opacity: .28; }
    .dg42a-root { fill: var(--dg-surface); stroke: var(--dg-cool); stroke-width: 2.4; }
    .dg42a-cau  { fill: var(--dg-cool); }
    .dg42a-tear { fill: var(--dg-warm); }
    .dg42a-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg42a-lbl  { font-size: 11.5px; font-weight: 700; }
    .dg42a-s    { font-size: 10px; fill: var(--dg-muted); }
    .dg42a-row  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg42a-lead { stroke: var(--dg-line); stroke-width: 1.2; }

    .dg42a-p1 { animation: dg42aCyc 9s ease-in-out infinite 0s; }
    .dg42a-p2 { animation: dg42aCyc 9s ease-in-out infinite 3s; }
    .dg42a-p3 { animation: dg42aCyc 9s ease-in-out infinite 6s; }
    @keyframes dg42aCyc {
      0%   { opacity: .22 }
      4%   { opacity: 1 }
      30%  { opacity: 1 }
      35%  { opacity: .22 }
      100% { opacity: .22 }
    }

    .dg42a-t1 { animation: dg42aT1 9s linear infinite 0s; }
    .dg42a-t2 { animation: dg42aT2 9s linear infinite 3s; }
    .dg42a-t3 { animation: dg42aT3 9s linear infinite 6s; }
    @keyframes dg42aT1 {
      0%   { transform: translate(0px, 0px); opacity: 0 }
      5%   { opacity: 1 }
      28%  { transform: translate(0px, -74px); opacity: 1 }
      33%  { transform: translate(0px, -74px); opacity: 0 }
      100% { transform: translate(0px, -74px); opacity: 0 }
    }
    @keyframes dg42aT2 {
      0%   { transform: translate(0px, 0px); opacity: 0 }
      5%   { opacity: 1 }
      28%  { transform: translate(37px, -64px); opacity: 1 }
      33%  { transform: translate(37px, -64px); opacity: 0 }
      100% { transform: translate(37px, -64px); opacity: 0 }
    }
    @keyframes dg42aT3 {
      0%   { transform: translate(0px, 0px); opacity: 0 }
      5%   { opacity: 1 }
      28%  { transform: translate(64px, -37px); opacity: 1 }
      33%  { transform: translate(64px, -37px); opacity: 0 }
      100% { transform: translate(64px, -37px); opacity: 0 }
    }
  </style>

  <text x="16" y="22" class="dg42a-hdr">DIRECTION DECIDES THE ROOT</text>
  <text x="16" y="40" class="dg42a-s">L3-L4 disc, axial. POSTERIOR is at 12 o'clock.</text>

  <circle cx="180" cy="192" r="80" class="dg42a-disc"/>
  <circle cx="180" cy="192" r="33" class="dg42a-nuc"/>
  <text x="180" y="196" class="dg42a-s" text-anchor="middle">nucleus</text>

  <ellipse cx="180" cy="110" rx="25" ry="12" class="dg42a-lobe dg42a-p1"/>
  <ellipse cx="220" cy="123" rx="20" ry="11" transform="rotate(30 220 123)" class="dg42a-lobe dg42a-p2"/>
  <ellipse cx="249" cy="152" rx="20" ry="11" transform="rotate(60 249 152)" class="dg42a-lobe dg42a-p3"/>
  <ellipse cx="140" cy="123" rx="17" ry="9" transform="rotate(-30 140 123)" class="dg42a-mir"/>
  <ellipse cx="111" cy="152" rx="17" ry="9" transform="rotate(-60 111 152)" class="dg42a-mir"/>
  <text x="66" y="288" class="dg42a-s">11 and 10 o'clock mirror the right side</text>

  <circle cx="180" cy="192" r="6" class="dg42a-tear dg42a-t1"/>
  <circle cx="180" cy="192" r="6" class="dg42a-tear dg42a-t2"/>
  <circle cx="180" cy="192" r="6" class="dg42a-tear dg42a-t3"/>

  <g class="dg42a-p1">
    <circle cx="168" cy="82" r="5" class="dg42a-cau"/>
    <circle cx="182" cy="76" r="5" class="dg42a-cau"/>
    <circle cx="195" cy="83" r="5" class="dg42a-cau"/>
    <text x="150" y="62" class="dg42a-s">cauda equina</text>
  </g>
  <circle cx="240" cy="104" r="9" class="dg42a-root dg42a-p2"/>
  <text x="252" y="94" class="dg42a-lbl dg42a-p2">L4</text>
  <circle cx="278" cy="138" r="9" class="dg42a-root dg42a-p3"/>
  <text x="290" y="132" class="dg42a-lbl dg42a-p3">L3</text>

  <rect x="330" y="72" width="296" height="52" rx="8" class="dg42a-row dg42a-p1"/>
  <text x="344" y="94" class="dg42a-lbl">12 o'clock, CENTRAL</text>
  <text x="344" y="112" class="dg42a-s">cord or cauda equina if it is large</text>

  <rect x="330" y="134" width="296" height="52" rx="8" class="dg42a-row dg42a-p2"/>
  <text x="344" y="156" class="dg42a-lbl">1 and 11, SUBARTICULAR RECESS</text>
  <text x="344" y="174" class="dg42a-s">traversing root, L4 at the L3-L4 disc</text>

  <rect x="330" y="196" width="296" height="52" rx="8" class="dg42a-row dg42a-p3"/>
  <text x="344" y="218" class="dg42a-lbl">2 and 10, FORAMINAL</text>
  <text x="344" y="236" class="dg42a-s">exiting root, L3 at the L3-L4 disc</text>

  <line x1="330" y1="266" x2="626" y2="266" class="dg42a-lead"/>
  <text x="330" y="286" class="dg42a-s">A radial tear starts centrally and works its way out.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. The Kirkcaldy-Willis cascade, and its two compressive endpoints.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv42-kw-cascade"] = {
  title: "The Kirkcaldy-Willis cascade",
  caption:
    "The lecture's single organising sequence: losing disc volume costs disc height, so the vertebrae rest closer, bone meets bone with movement and the endplates inflame (Modic changes). " +
    "The compressed facets wear out, become arthritic and lay down bridging osteophytes to splint the painful joint. " +
    "That new bone is what finally crowds the foramen and the central canal, which is why the lecturer stresses that <b>central stenosis is far commoner from degeneration than from a central disc</b> " +
    "and why a patient can have every change here with no back pain at all.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A five-step vertical cascade on the left with arrows pointing down between the steps. Step one, disc herniation with volume lost. Step two, loss of disc height so the vertebrae rest closer. Step three, bone contact with movement causing endplate inflammation, the Modic changes. Step four, the facets are compressed, cartilage wears faster and the arthritic joint refers pain to the legs. Step five, bridging osteophytes laid down to splint the painful joint. A connector leads from step five to two endpoint boxes on the right: foraminal crowding with root compression and neurogenic leg pain, and central canal stenosis affecting both legs with cord compression, which is commoner than from a central disc.">
  <style>
    .dg42b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg42b-end  { fill: var(--dg-surface); stroke: var(--dg-accent); stroke-width: 1.8; }
    .dg42b-hdr  { font-size: 11.5px; font-weight: 700; fill: var(--dg-accent); }
    .dg42b-ttl  { font-size: 12px; font-weight: 700; }
    .dg42b-s    { font-size: 10px; fill: var(--dg-muted); }
    .dg42b-arw  { stroke: var(--dg-ink); fill: var(--dg-ink); stroke-width: 1.6; }
    .dg42b-link { stroke: var(--dg-accent); stroke-width: 2; fill: none; }
    .dg42b-tip  { fill: var(--dg-accent); }

    .dg42b-k1 { animation: dg42bStep 11s ease-in-out infinite 0s; }
    .dg42b-k2 { animation: dg42bStep 11s ease-in-out infinite 1.4s; }
    .dg42b-k3 { animation: dg42bStep 11s ease-in-out infinite 2.8s; }
    .dg42b-k4 { animation: dg42bStep 11s ease-in-out infinite 4.2s; }
    .dg42b-k5 { animation: dg42bStep 11s ease-in-out infinite 5.6s; }
    .dg42b-k6 { animation: dg42bStep 11s ease-in-out infinite 7.2s; }
    @keyframes dg42bStep {
      0%   { opacity: .3 }
      3%   { opacity: 1 }
      14%  { opacity: 1 }
      18%  { opacity: .3 }
      100% { opacity: .3 }
    }
  </style>

  <text x="14" y="18" class="dg42b-hdr">ONE INJURED DISC, FIVE STEPS, TWO ENDPOINTS</text>

  <rect x="14" y="30" width="262" height="44" rx="8" class="dg42b-box dg42b-k1"/>
  <text x="28" y="50" class="dg42b-ttl">1  Disc herniation</text>
  <text x="28" y="66" class="dg42b-s">annulus tears, nucleus escapes, volume lost</text>

  <rect x="14" y="82" width="262" height="44" rx="8" class="dg42b-box dg42b-k2"/>
  <text x="28" y="102" class="dg42b-ttl">2  Loss of disc height</text>
  <text x="28" y="118" class="dg42b-s">the vertebrae now rest closer together</text>

  <rect x="14" y="134" width="262" height="44" rx="8" class="dg42b-box dg42b-k3"/>
  <text x="28" y="154" class="dg42b-ttl">3  Bone contact on movement</text>
  <text x="28" y="170" class="dg42b-s">endplate inflammation = MODIC CHANGES</text>

  <rect x="14" y="186" width="262" height="44" rx="8" class="dg42b-box dg42b-k4"/>
  <text x="28" y="206" class="dg42b-ttl">4  Facets compressed</text>
  <text x="28" y="222" class="dg42b-s">faster wear, arthritis, refers to legs too</text>

  <rect x="14" y="238" width="262" height="44" rx="8" class="dg42b-box dg42b-k5"/>
  <text x="28" y="258" class="dg42b-ttl">5  Bridging osteophytes</text>
  <text x="28" y="274" class="dg42b-s">bone laid down to splint a painful joint</text>

  <polygon points="139,74 149,74 144,82" class="dg42b-arw"/>
  <polygon points="139,126 149,126 144,134" class="dg42b-arw"/>
  <polygon points="139,178 149,178 144,186" class="dg42b-arw"/>
  <polygon points="139,230 149,230 144,238" class="dg42b-arw"/>

  <path class="dg42b-link" d="M276 260 L300 260 L300 118 L322 118"/>
  <path class="dg42b-link" d="M300 208 L322 208"/>
  <polygon points="322,112 334,118 322,124" class="dg42b-tip"/>
  <polygon points="322,202 334,208 322,214" class="dg42b-tip"/>

  <text x="336" y="66" class="dg42b-hdr">WHERE THE NEW BONE GOES</text>

  <rect x="334" y="88" width="292" height="60" rx="8" class="dg42b-end dg42b-k6"/>
  <text x="348" y="110" class="dg42b-ttl">Foraminal crowding</text>
  <text x="348" y="127" class="dg42b-s">nerve root compression, one leg,</text>
  <text x="348" y="141" class="dg42b-s">true neurogenic pain</text>

  <rect x="334" y="176" width="292" height="66" rx="8" class="dg42b-end dg42b-k6"/>
  <text x="348" y="198" class="dg42b-ttl">Central canal stenosis</text>
  <text x="348" y="215" class="dg42b-s">BOTH legs, with cord compression</text>
  <text x="348" y="231" class="dg42b-s">far commoner than from a central disc</text>

  <text x="334" y="272" class="dg42b-s">All of this can happen with no back pain at all,</text>
  <text x="334" y="286" class="dg42b-s">and it is gradual and progressive.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Flexion vs extension: one seesaw, two opposite patients.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv42-flexion-extension"] = {
  title: "Flexion and extension, opposite effects",
  caption:
    "The same two movements help one patient and hurt the other, which is why the positional history is diagnostic. " +
    "<b>Flexion</b> squeezes the anterior disc against an inflamed annulus but opens the intervertebral foramen; <b>extension</b> unloads the disc but closes the foramen onto the root. " +
    "That is exactly why the disc patient hurts bending forward and eases bending back, while the stenosis patient gets leg pain at a predictable walking distance " +
    "(walking is repeated extension) and is relieved by sitting or leaning on a shopping cart. Anterior is to the left of each panel.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two side-by-side lateral views of a lumbar motion segment. In the flexion panel the anterior disc space is wedged narrow, marked disc squeezed, while the intervertebral foramen behind it is drawn wide and open with the nerve root free inside; the strip below reads disc pain worse, stenosis better. In the extension panel the posterior disc space is narrow, the disc is marked unloaded, and the foramen is drawn small with the nerve root pinched inside it; the strip below reads disc pain better, stenosis worse. A line underneath states that walking is repeated extension so claudication starts at a predictable distance, and that sitting or leaning on a cart is flexion and the pain goes.">
  <style>
    .dg42c-pan  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg42c-body { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg42c-disc { fill: var(--dg-accent); opacity: .35; stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg42c-arch { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg42c-open { fill: var(--dg-surface); stroke: var(--dg-good); stroke-width: 2.4; }
    .dg42c-tight{ fill: var(--dg-surface); stroke: var(--dg-warm); stroke-width: 2.4; }
    .dg42c-rootg{ fill: var(--dg-good); }
    .dg42c-rootw{ fill: var(--dg-warm); }
    .dg42c-hdr  { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg42c-ttl  { font-size: 13px; font-weight: 700; }
    .dg42c-s    { font-size: 10px; fill: var(--dg-muted); }
    .dg42c-good { font-size: 10.5px; font-weight: 700; fill: var(--dg-good); }
    .dg42c-warm { font-size: 10.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg42c-sq   { stroke: var(--dg-warm); fill: var(--dg-warm); stroke-width: 2; }
    .dg42c-spot { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; opacity: 0; }

    .dg42c-s1 { animation: dg42cSpot 8s ease-in-out infinite 0s; }
    .dg42c-s2 { animation: dg42cSpot 8s ease-in-out infinite 4s; }
    @keyframes dg42cSpot {
      0%   { opacity: 0 }
      6%   { opacity: 1 }
      44%  { opacity: 1 }
      50%  { opacity: 0 }
      100% { opacity: 0 }
    }
    .dg42c-b1 { animation: dg42cBeat 8s ease-in-out infinite 0s; }
    .dg42c-b2 { animation: dg42cBeat 8s ease-in-out infinite 4s; }
    @keyframes dg42cBeat {
      0%   { opacity: .4 }
      10%  { opacity: 1 }
      24%  { opacity: .4 }
      38%  { opacity: 1 }
      50%  { opacity: .4 }
      100% { opacity: .4 }
    }
  </style>

  <text x="14" y="20" class="dg42c-hdr">ONE SEESAW, TWO OPPOSITE PATIENTS</text>

  <rect x="12" y="30" width="300" height="212" rx="10" class="dg42c-pan"/>
  <text x="28" y="54" class="dg42c-ttl">FLEXION</text>
  <text x="28" y="70" class="dg42c-s">bending forward, sitting, shopping cart</text>
  <polygon points="42,112 146,98 146,138 42,152" class="dg42c-body"/>
  <polygon points="42,152 146,138 146,178 42,178" class="dg42c-disc"/>
  <rect x="42" y="178" width="104" height="40" class="dg42c-body"/>
  <path class="dg42c-arch" d="M146 118 Q186 112 196 132"/>
  <path class="dg42c-arch" d="M146 190 Q186 196 198 178"/>
  <circle cx="216" cy="156" r="21" class="dg42c-open"/>
  <circle cx="216" cy="156" r="7" class="dg42c-rootg"/>
  <text x="196" y="112" class="dg42c-good">foramen OPEN</text>
  <g class="dg42c-b1">
    <line x1="52" y1="156" x2="52" y2="174" class="dg42c-sq"/>
    <polygon points="46,161 58,161 52,150" class="dg42c-sq"/>
    <polygon points="46,169 58,169 52,180" class="dg42c-sq"/>
  </g>
  <text x="66" y="172" class="dg42c-warm">disc SQUEEZED</text>
  <text x="28" y="234" class="dg42c-warm">disc pain WORSE</text>
  <text x="164" y="234" class="dg42c-good">stenosis BETTER</text>
  <rect x="12" y="30" width="300" height="212" rx="10" class="dg42c-spot dg42c-s1"/>

  <rect x="328" y="30" width="300" height="212" rx="10" class="dg42c-pan"/>
  <text x="344" y="54" class="dg42c-ttl">EXTENSION</text>
  <text x="344" y="70" class="dg42c-s">bending back, standing, walking</text>
  <polygon points="358,98 462,112 462,152 358,138" class="dg42c-body"/>
  <polygon points="358,138 462,152 462,178 358,178" class="dg42c-disc"/>
  <rect x="358" y="178" width="104" height="40" class="dg42c-body"/>
  <path class="dg42c-arch" d="M462 130 Q500 126 508 146"/>
  <path class="dg42c-arch" d="M462 190 Q500 192 510 172"/>
  <circle cx="528" cy="159" r="11" class="dg42c-tight"/>
  <circle cx="528" cy="159" r="7" class="dg42c-rootw dg42c-b2"/>
  <text x="486" y="112" class="dg42c-warm">foramen NARROW</text>
  <text x="486" y="126" class="dg42c-warm">root pinched</text>
  <text x="374" y="168" class="dg42c-good">disc UNLOADED</text>
  <text x="344" y="234" class="dg42c-good">disc pain BETTER</text>
  <text x="480" y="234" class="dg42c-warm">stenosis WORSE</text>
  <rect x="328" y="30" width="300" height="212" rx="10" class="dg42c-spot dg42c-s2"/>

  <text x="14" y="268" class="dg42c-s">Walking = repeated EXTENSION, so neurogenic claudication starts at a predictable distance.</text>
  <text x="14" y="286" class="dg42c-s">Sitting or leaning on a cart = FLEXION, the foramen opens, and the pain goes.</text>
</svg>`,
};

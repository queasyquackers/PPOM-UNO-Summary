/*
 * CV3 - Embryology of the Genitourinary System (N. Solounias, Ph.D.)
 *
 * Authoring rules live in the header of lecture_diagrams.js; the shared
 * stylesheet (--dg-* variables, reduced-motion freeze) is defined there too.
 * Every value and label below comes from this lecture's summary.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Ureteric bud meets metanephric blastema (Slides 11-12).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv3-ureteric-bud-blastema-induction"] = {
  title: "Two systems, one kidney",
  caption:
    "The adult kidney is a conglomerate of two tissues, and the exam point is knowing which pipe made which part. " +
    "The ureteric bud (orange) is a diverticulum of the mesonephric duct: it grows in and branches into the ureter, " +
    "renal pelvis, major and minor calyces, collecting ducts and collecting tubules. " +
    "The metanephric blastema (blue; blastema = a growth) condenses as caps on the bud tips and makes Bowman's capsule, " +
    "the proximal convoluted tubule, the loop of Henle and the distal convoluted tubule. " +
    "The two talk to each other - the blastema signals the bud to branch, the bud induces the blastema to condense - " +
    "which is why the branching repeats. The green dot is the junction between the two systems, between the DCT and the " +
    "collecting tubule: the lecturer said outright, memorize this for the exam. " +
    "The whole embryo is about one-eighth of an inch (~4 mm) long at this stage (Slide 11).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="The ureteric bud sprouts from the mesonephric duct and branches into renal pelvis, major and minor calyces, collecting ducts and collecting tubules. Caps of metanephric blastema condense on the bud tips, and one cap is drawn out as a nephron: Bowman's capsule, proximal convoluted tubule, loop of Henle and distal convoluted tubule. The distal convoluted tubule plugs into the tip of a collecting tubule, and that junction between the two tissues is marked.">
  <style>
    .dg3a-duct { fill:none; stroke:var(--dg-warm); stroke-width:7; stroke-linecap:round; }
    .dg3a-b1 { fill:none; stroke:var(--dg-warm); stroke-width:5; stroke-linecap:round; }
    .dg3a-b2 { fill:none; stroke:var(--dg-warm); stroke-width:3.8; stroke-linecap:round; }
    .dg3a-b3 { fill:none; stroke:var(--dg-warm); stroke-width:3; stroke-linecap:round; }
    .dg3a-b4 { fill:none; stroke:var(--dg-warm); stroke-width:2.4; stroke-linecap:round; }
    .dg3a-pel { fill:var(--dg-warm); fill-opacity:.22; stroke:var(--dg-warm); stroke-width:2; }
    .dg3a-blob { fill:var(--dg-cool); fill-opacity:.07; stroke:var(--dg-cool); stroke-width:1.5; stroke-dasharray:7 6; }
    .dg3a-cap { fill:var(--dg-cool); fill-opacity:.3; stroke:var(--dg-cool); stroke-width:2; }
    .dg3a-nef { fill:none; stroke:var(--dg-cool); stroke-width:3; stroke-linecap:round; }
    .dg3a-bow { fill:var(--dg-panel); stroke:var(--dg-cool); stroke-width:3; }
    .dg3a-tuft { fill:none; stroke:var(--dg-accent); stroke-width:2.2; stroke-linecap:round; }
    .dg3a-t { font-size:11px; font-weight:700; }
    .dg3a-s { font-size:10px; fill:var(--dg-muted); }
    .dg3a-k { font-size:10.5px; fill:var(--dg-muted); }
    .dg3a-w { fill:var(--dg-warm); }
    .dg3a-c { fill:var(--dg-cool); }
    .dg3a-gd { fill:var(--dg-good); }
    .dg3a-grow { stroke-dasharray:var(--l); animation:dg3aGrow 12s ease-in-out infinite backwards; }
    .dg3a-fade { animation:dg3aFade 12s ease-in-out infinite backwards; }
    .dg3a-pop { transform-box:fill-box; transform-origin:center; animation:dg3aPop 12s ease-in-out infinite backwards; }
    .dg3a-d1 { animation-delay:.4s }
    .dg3a-d2 { animation-delay:.8s }
    .dg3a-d3 { animation-delay:1.2s }
    .dg3a-d4 { animation-delay:1.6s }
    .dg3a-d5 { animation-delay:2s }
    .dg3a-d6 { animation-delay:2.4s }
    .dg3a-d7 { animation-delay:2.8s }
    .dg3a-d8 { animation-delay:3.2s }
    .dg3a-d9 { animation-delay:3.6s }
    .dg3a-d10 { animation-delay:4s }
    @keyframes dg3aGrow {
      0% { stroke-dashoffset:var(--l); opacity:0 }
      3% { opacity:1 }
      16% { stroke-dashoffset:0 }
      94% { stroke-dashoffset:0; opacity:1 }
      100% { stroke-dashoffset:0; opacity:0 }
    }
    @keyframes dg3aFade {
      0% { opacity:0 }
      5% { opacity:1 }
      94% { opacity:1 }
      100% { opacity:0 }
    }
    @keyframes dg3aPop {
      0% { transform:scale(.15); opacity:0 }
      4% { opacity:1 }
      16% { transform:scale(1) }
      94% { transform:scale(1); opacity:1 }
      100% { transform:scale(1); opacity:0 }
    }
    .dg3a-ring { transform-box:fill-box; transform-origin:center; animation:dg3aRing 2.6s ease-out infinite; }
    @keyframes dg3aRing {
      0% { transform:scale(.55); opacity:.95 }
      100% { transform:scale(2.4); opacity:0 }
    }
  </style>

  <rect class="dg3a-blob" x="336" y="52" width="292" height="190" rx="28"/>

  <path class="dg3a-duct" d="M38,50 L38,246"/>
  <path class="dg3a-b1 dg3a-grow" style="--l:82px" d="M38,142 L114,142"/>
  <path class="dg3a-pel dg3a-fade dg3a-d1" d="M112,132 L148,108 L148,180 L112,152 Z"/>

  <path class="dg3a-b2 dg3a-grow dg3a-d2" style="--l:60px" d="M148,120 L200,100"/>
  <path class="dg3a-b2 dg3a-grow dg3a-d2" style="--l:62px" d="M148,168 L200,190"/>

  <path class="dg3a-b3 dg3a-grow dg3a-d3" style="--l:52px" d="M200,100 L244,82"/>
  <path class="dg3a-b3 dg3a-grow dg3a-d3" style="--l:52px" d="M200,100 L244,124"/>
  <path class="dg3a-b3 dg3a-grow dg3a-d3" style="--l:52px" d="M200,190 L244,168"/>
  <path class="dg3a-b3 dg3a-grow dg3a-d3" style="--l:52px" d="M200,190 L244,212"/>

  <path class="dg3a-b4 dg3a-grow dg3a-d4" style="--l:50px" d="M244,82 L292,76"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d4" style="--l:50px" d="M244,124 L292,126"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d4" style="--l:50px" d="M244,168 L292,170"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d4" style="--l:50px" d="M244,212 L292,220"/>

  <path class="dg3a-b4 dg3a-grow dg3a-d5" style="--l:48px" d="M292,76 L338,74"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d5" style="--l:40px" d="M292,126 L330,128"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d5" style="--l:48px" d="M292,170 L338,172"/>
  <path class="dg3a-b4 dg3a-grow dg3a-d5" style="--l:48px" d="M292,220 L338,222"/>

  <circle class="dg3a-cap dg3a-pop dg3a-d6" cx="354" cy="74" r="15"/>
  <circle class="dg3a-cap dg3a-pop dg3a-d6" cx="354" cy="172" r="15"/>
  <circle class="dg3a-cap dg3a-pop dg3a-d7" cx="354" cy="222" r="15"/>

  <circle class="dg3a-bow dg3a-grow dg3a-d7" style="--l:134px" cx="590" cy="92" r="20"/>
  <path class="dg3a-tuft dg3a-fade dg3a-d8" d="M578,94 q8,-12 15,-4 q7,8 -3,12 q-9,3 -4,8"/>
  <path class="dg3a-nef dg3a-grow dg3a-d8" style="--l:84px" d="M573,104 q-16,10 -6,20 q10,10 -8,17 q-18,7 -10,18"/>
  <path class="dg3a-nef dg3a-grow dg3a-d9" style="--l:132px" d="M549,159 L543,196 C541,216 511,216 509,196 L503,160"/>
  <path class="dg3a-nef dg3a-grow dg3a-d10" style="--l:190px" d="M503,160 q-18,10 -32,2 q-16,-8 -30,4 q-14,12 -30,2 q-16,-14 -30,-14 q-14,0 -24,-8 L332,128"/>

  <circle class="dg3a-ring" cx="331" cy="128" r="7" fill="none" stroke="var(--dg-good)" stroke-width="2.5"/>
  <circle cx="331" cy="128" r="5.5" fill="var(--dg-good)"/>

  <text class="dg3a-t dg3a-w" x="14" y="38">Mesonephric duct</text>
  <text class="dg3a-s dg3a-w" x="46" y="134">ureteric bud</text>
  <text class="dg3a-s" x="130" y="102" text-anchor="middle">pelvis</text>
  <text class="dg3a-s" x="186" y="88" text-anchor="middle">major calyx</text>
  <text class="dg3a-s" x="250" y="60" text-anchor="middle">minor calyces</text>
  <text class="dg3a-s" x="296" y="244" text-anchor="middle">collecting ducts</text>
  <text class="dg3a-t dg3a-c" x="344" y="44">Metanephric blastema</text>
  <text class="dg3a-s" x="614" y="64" text-anchor="end">Bowman's capsule</text>
  <text class="dg3a-s" x="582" y="136">PCT</text>
  <text class="dg3a-s" x="526" y="232" text-anchor="middle">loop of Henle</text>
  <text class="dg3a-s" x="432" y="188" text-anchor="middle">DCT</text>
  <text class="dg3a-s dg3a-gd" x="326" y="108" text-anchor="end" font-weight="700">junction</text>
  <text class="dg3a-s" x="392" y="256">each cap becomes one nephron</text>
  <text class="dg3a-s" x="18" y="256">bud &#8596; blastema: each induces the other</text>

  <rect x="18" y="264" width="14" height="6" rx="3" fill="var(--dg-warm)"/>
  <text class="dg3a-k" x="40" y="270">Ureteric bud, a branch of the mesonephric duct &#8594; ureter, pelvis, calyces, collecting ducts + tubules</text>
  <rect x="18" y="282" width="14" height="6" rx="3" fill="var(--dg-cool)"/>
  <text class="dg3a-k" x="40" y="288">Metanephric blastema &#8594; Bowman's capsule, PCT, loop of Henle, DCT</text>
  <circle cx="25" cy="303" r="5" fill="var(--dg-good)"/>
  <text class="dg3a-k" x="40" y="306" fill="var(--dg-good)">Junction of the two systems: DCT &#8594; collecting tubule &#8212; memorize this one</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Ascent of the metanephric kidney and its serial arteries (Slides 21, 30-31).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv3-kidney-ascent-revascularization"] = {
  title: "The climb and its arteries",
  caption:
    "The metanephric kidney forms at the bottom of the embryo next to the bladder and rises. " +
    "No artery travels with it: per the lecture it is supplied by the internal iliac when low, then at the " +
    "common/external iliac region, and ultimately by the aorta - it vascularizes itself on the way up, each vessel " +
    "regressing as the next takes over (a vessel that fails to regress is why accessory renal arteries exist in adults). " +
    "The ureter simply lengthens behind it. The ascent stops when the kidney reaches the suprarenal (adrenal) gland, " +
    "which never moves from its position. The faint arteries are drawn at all three levels so the sequence still reads " +
    "when the animation is stopped. Two failures of the same climb: fused kidneys cannot get past the inferior mesenteric " +
    "artery (horseshoe kidney), and a kidney that never ascends stays beside the bladder (pelvic kidney) - both are " +
    "asymptomatic and function normally.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="A kidney climbs from beside the bladder to the lumbar region. It is supplied first by the internal iliac artery, then at the common and external iliac level, and finally by a renal artery from the aorta, while its ureter lengthens behind it and the immobile suprarenal gland stops the ascent. Two panels show arrest under the inferior mesenteric artery producing a horseshoe kidney, and no ascent at all producing a pelvic kidney.">
  <style>
    .dg3b-art { fill:none; stroke:var(--dg-warm); stroke-linecap:round; }
    .dg3b-ghost { opacity:.3; }
    .dg3b-kid { fill:var(--dg-accent); fill-opacity:.85; stroke:var(--dg-accent); stroke-width:2; }
    .dg3b-gk { fill:none; stroke:var(--dg-muted); stroke-width:1.5; stroke-dasharray:5 4; opacity:.5; }
    .dg3b-kidt { font-size:8.5px; fill:var(--dg-surface); text-anchor:middle; font-weight:700; }
    .dg3b-ure { fill:var(--dg-cool); }
    .dg3b-bl { fill:var(--dg-panel); stroke:var(--dg-cool); stroke-width:2; }
    .dg3b-adr { fill:var(--dg-good); fill-opacity:.3; stroke:var(--dg-good); stroke-width:2; }
    .dg3b-guide { fill:none; stroke:var(--dg-muted); stroke-width:1.5; stroke-dasharray:5 5; opacity:.7; }
    .dg3b-card { fill:var(--dg-panel); stroke:var(--dg-line); stroke-width:1.5; }
    .dg3b-s { font-size:10px; fill:var(--dg-muted); }
    .dg3b-ti { font-size:10.5px; font-weight:700; }
    .dg3b-n { font-size:9.5px; fill:var(--dg-muted); }
    .dg3b-rise { animation:dg3bRise 13s ease-in-out infinite; }
    @keyframes dg3bRise {
      0% { transform:translateY(140px); opacity:0 }
      4% { transform:translateY(140px); opacity:1 }
      22% { transform:translateY(140px) }
      42% { transform:translateY(76px) }
      54% { transform:translateY(76px) }
      72% { transform:translateY(0) }
      96% { transform:translateY(0); opacity:1 }
      100% { transform:translateY(0); opacity:0 }
    }
    .dg3b-uregrow { transform-box:fill-box; transform-origin:center bottom; animation:dg3bUre 13s ease-in-out infinite; }
    @keyframes dg3bUre {
      0% { transform:scaleY(.04); opacity:0 }
      4% { transform:scaleY(.04); opacity:1 }
      22% { transform:scaleY(.04) }
      42% { transform:scaleY(.48) }
      54% { transform:scaleY(.48) }
      72% { transform:scaleY(1) }
      96% { transform:scaleY(1); opacity:1 }
      100% { transform:scaleY(1); opacity:0 }
    }
    .dg3b-l1 { animation:dg3bL1 13s linear infinite; }
    .dg3b-l2 { animation:dg3bL2 13s linear infinite; }
    .dg3b-l3 { animation:dg3bL3 13s linear infinite; }
    @keyframes dg3bL1 { 0%{opacity:0} 5%{opacity:1} 26%{opacity:1} 34%{opacity:0} 100%{opacity:0} }
    @keyframes dg3bL2 { 0%{opacity:0} 36%{opacity:0} 44%{opacity:1} 60%{opacity:1} 68%{opacity:0} 100%{opacity:0} }
    @keyframes dg3bL3 { 0%{opacity:0} 66%{opacity:0} 74%{opacity:1} 96%{opacity:1} 100%{opacity:0} }
    .dg3b-stop { transform-box:fill-box; transform-origin:center; animation:dg3bStop 13s ease-out infinite; }
    @keyframes dg3bStop {
      0% { opacity:0; transform:scale(.6) }
      70% { opacity:0; transform:scale(.6) }
      77% { opacity:.9; transform:scale(1) }
      93% { opacity:0; transform:scale(1.5) }
      100% { opacity:0; transform:scale(1.5) }
    }
    .dg3b-bump { animation:dg3bBump 2.8s ease-in-out infinite; }
    @keyframes dg3bBump { 0%,100%{transform:translateY(7px)} 42%,58%{transform:translateY(0)} }
  </style>

  <path class="dg3b-art" stroke-width="9" d="M118,40 L118,210"/>
  <path class="dg3b-art dg3b-ghost" stroke-width="6" d="M118,210 L88,258"/>
  <path class="dg3b-art" stroke-width="6" d="M118,210 L156,258"/>
  <path class="dg3b-art" stroke-width="4" d="M114,152 L72,146"/>
  <path class="dg3b-guide" d="M118,146 L250,146"/>
  <text class="dg3b-s" x="66" y="150" text-anchor="end">IMA</text>
  <text class="dg3b-s" x="112" y="46" text-anchor="end">aorta</text>

  <path class="dg3b-art dg3b-ghost" stroke-width="4" d="M156,258 L212,246"/>
  <path class="dg3b-art dg3b-ghost" stroke-width="4" d="M137,234 L210,184"/>
  <path class="dg3b-art dg3b-ghost" stroke-width="5" d="M122,104 L212,104"/>
  <path class="dg3b-art dg3b-l1" stroke-width="4.5" d="M156,258 L212,246"/>
  <path class="dg3b-art dg3b-l2" stroke-width="4.5" d="M137,234 L210,184"/>
  <path class="dg3b-art dg3b-l3" stroke-width="5.5" d="M122,104 L212,104"/>

  <path class="dg3b-guide" d="M222,236 L222,126"/>
  <polygon points="216,128 228,128 222,116" fill="var(--dg-muted)" opacity=".7"/>
  <g transform="translate(222,244)">
    <path class="dg3b-gk" d="M-8,-26 C12,-30 26,-16 26,0 C26,16 12,30 -8,26 C-2,16 -2,-16 -8,-26 Z"/>
  </g>
  <g transform="translate(222,180)">
    <path class="dg3b-gk" d="M-8,-26 C12,-30 26,-16 26,0 C26,16 12,30 -8,26 C-2,16 -2,-16 -8,-26 Z"/>
  </g>

  <path class="dg3b-adr" d="M198,62 C198,38 246,38 246,62 Z"/>
  <ellipse class="dg3b-stop" cx="222" cy="56" rx="28" ry="17" fill="none" stroke="var(--dg-good)" stroke-width="2.5"/>

  <ellipse class="dg3b-bl" cx="226" cy="288" rx="22" ry="13"/>
  <g transform="translate(226,276)">
    <g class="dg3b-uregrow">
      <rect class="dg3b-ure" x="-3.5" y="-146" width="7" height="146" rx="3.5"/>
    </g>
  </g>

  <g transform="translate(222,104)">
    <g class="dg3b-rise">
      <path class="dg3b-kid" d="M-8,-26 C12,-30 26,-16 26,0 C26,16 12,30 -8,26 C-2,16 -2,-16 -8,-26 Z"/>
      <text class="dg3b-kidt" x="8" y="4">kidney</text>
    </g>
  </g>

  <text class="dg3b-s" x="256" y="46" fill="var(--dg-good)" font-weight="700">suprarenal gland</text>
  <text class="dg3b-s" x="256" y="58">never moves = stop</text>
  <text class="dg3b-s" x="256" y="100">aorta &#8594; definitive</text>
  <text class="dg3b-s" x="256" y="112">renal artery</text>
  <text class="dg3b-s" x="256" y="176">common / external</text>
  <text class="dg3b-s" x="256" y="188">iliac level</text>
  <text class="dg3b-s" x="256" y="228" fill="var(--dg-cool)">ureter lengthens</text>
  <text class="dg3b-s" x="256" y="252">internal iliac</text>
  <text class="dg3b-s" x="252" y="292">bladder</text>

  <rect class="dg3b-card" x="360" y="40" width="268" height="112" rx="12"/>
  <text class="dg3b-ti" x="374" y="62">Arrest under the IMA</text>
  <text class="dg3b-n" x="374" y="84">the fused pair cannot climb past</text>
  <text class="dg3b-n" x="374" y="98">the inferior mesenteric artery</text>
  <text class="dg3b-n" x="374" y="120" fill="var(--dg-accent)" font-weight="700">&#8594; horseshoe kidney, asymptomatic</text>
  <path class="dg3b-art" stroke-width="5" d="M546,54 L546,140"/>
  <path class="dg3b-art" stroke-width="3" d="M542,92 L580,92"/>
  <g class="dg3b-bump">
    <path class="dg3b-kid" d="M560,104 C550,118 554,134 570,134 L594,134 C610,134 612,118 602,104 C596,114 566,114 560,104 Z"/>
  </g>

  <rect class="dg3b-card" x="360" y="162" width="268" height="100" rx="12"/>
  <text class="dg3b-ti" x="374" y="184">No ascent at all</text>
  <text class="dg3b-n" x="374" y="206">the kidney never leaves the pelvis</text>
  <text class="dg3b-n" x="374" y="220">short ureter, normal function</text>
  <text class="dg3b-n" x="374" y="242" fill="var(--dg-accent)" font-weight="700">&#8594; pelvic kidney</text>
  <ellipse class="dg3b-bl" cx="566" cy="238" rx="20" ry="11"/>
  <g transform="translate(566,206) scale(.62)">
    <path class="dg3b-kid" d="M-8,-26 C12,-30 26,-16 26,0 C26,16 12,30 -8,26 C-2,16 -2,-16 -8,-26 Z"/>
  </g>
  <path class="dg3b-guide" d="M610,236 L610,196"/>
  <path d="M604,214 L616,226 M616,214 L604,226" stroke="var(--dg-warm)" stroke-width="2.5" stroke-linecap="round" fill="none"/>

  <text class="dg3b-n" x="366" y="280">Each artery serves the kidney only at its own</text>
  <text class="dg3b-n" x="366" y="293">level, then regresses; one that fails to regress</text>
  <text class="dg3b-n" x="366" y="306">persists as an accessory renal artery.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Cloaca partition and the trigone by exstrophy (Slides 17, 19-20).
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv3-cloaca-partition-trigone-exstrophy"] = {
  title: "Cloaca, septum, trigone",
  caption:
    "Left: the urorectal septum grows down into the cloaca (the Roman clay drain) and splits it into two chambers - " +
    "the anterior urogenital sinus, which becomes the bladder and urethra and takes the vaginal opening in the female, " +
    "and the posterior anorectal canal. In the female three tubes open into the undivided cloaca (rectum behind, vagina " +
    "in the middle, bladder in front); in the male only two. Septal dysfunction at the membrane is imperforate anus - the " +
    "newborn who cannot pass meconium, often part of VACTERL. " +
    "Right: the posterior bladder wall face-on. The distal mesonephric ducts are absorbed into it by exstrophy - turned " +
    "inside out, like pulling a sweater over your head - so the lining of the duct becomes the lining of the bladder, " +
    "leaving the triangular mesonephric patch called the trigone (Greek: triangle) on an otherwise urogenital-sinus bladder. " +
    "As they are absorbed the two sets of openings slide past each other. The lecture states only that the mesonephric ducts " +
    "and the ureters/ureteric buds open in the trigone region; the directions drawn here (ureteric openings up-and-out, " +
    "mesonephric openings down-and-in) are the standard description of that absorption.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="On the left, the urorectal septum descends into the cloaca and divides it into an anterior urogenital sinus and a posterior anorectal canal, with the point of septal failure marked as imperforate anus. On the right, the posterior wall of the bladder: the ureteric openings travel up and outwards while the mesonephric duct openings slide down and inwards, leaving a triangular mesonephric patch, the trigone, on a bladder otherwise derived from the urogenital sinus.">
  <style>
    .dg3c-tube { fill:none; stroke-linecap:round; stroke-width:11; }
    .dg3c-cup { fill:var(--dg-panel); stroke:var(--dg-ink); stroke-width:2; }
    .dg3c-mem { stroke:var(--dg-ink); stroke-width:1.5; stroke-dasharray:4 4; opacity:.6; fill:none; }
    .dg3c-sep { fill:var(--dg-accent); fill-opacity:.8; stroke:var(--dg-accent); stroke-width:1.5; }
    .dg3c-bl { fill:var(--dg-panel); stroke:var(--dg-cool); stroke-width:2.5; }
    .dg3c-tri { fill:var(--dg-good); fill-opacity:.22; stroke:var(--dg-good); stroke-width:2; }
    .dg3c-duct { fill:none; stroke:var(--dg-accent); stroke-width:5; stroke-linecap:round; }
    .dg3c-ur { fill:none; stroke:var(--dg-warm); stroke-width:5; stroke-linecap:round; }
    .dg3c-ghost { opacity:.45; stroke-dasharray:5 4; }
    .dg3c-arrow { fill:none; stroke:var(--dg-muted); stroke-width:1.6; stroke-dasharray:4 3; }
    .dg3c-lead { stroke:var(--dg-line); stroke-width:1.2; fill:none; }
    .dg3c-h { font-size:10.5px; font-weight:700; fill:var(--dg-accent); letter-spacing:.06em; }
    .dg3c-s { font-size:9.5px; fill:var(--dg-muted); }
    .dg3c-lb { font-size:10px; font-weight:700; }
    .dg3c-sept { transform-box:fill-box; transform-origin:center top; animation:dg3cSept 13s ease-in-out infinite; }
    @keyframes dg3cSept {
      0% { transform:scaleY(.05); opacity:0 }
      5% { opacity:1 }
      9% { transform:scaleY(.05) }
      52% { transform:scaleY(1) }
      96% { transform:scaleY(1); opacity:1 }
      100% { transform:scaleY(1); opacity:0 }
    }
    .dg3c-tint { animation:dg3cTint 13s ease-in-out infinite; }
    @keyframes dg3cTint { 0%{opacity:0} 14%{opacity:0} 56%{opacity:1} 96%{opacity:1} 100%{opacity:0} }
    .dg3c-move { animation:dg3cMove 13s ease-in-out infinite; }
    @keyframes dg3cMove {
      0% { transform:translate(var(--dx),var(--dy)); opacity:0 }
      22% { transform:translate(var(--dx),var(--dy)); opacity:1 }
      30% { transform:translate(var(--dx),var(--dy)) }
      74% { transform:translate(0,0) }
      96% { transform:translate(0,0); opacity:1 }
      100% { transform:translate(0,0); opacity:0 }
    }
    .dg3c-late { animation:dg3cLate 13s ease-in-out infinite; }
    @keyframes dg3cLate { 0%{opacity:0} 40%{opacity:0} 78%{opacity:1} 96%{opacity:1} 100%{opacity:0} }
    .dg3c-blink { animation:dg3cBlink 2.4s ease-in-out infinite; }
    @keyframes dg3cBlink { 0%,100%{opacity:.35} 50%{opacity:1} }
  </style>

  <line x1="300" y1="36" x2="300" y2="300" stroke="var(--dg-line)" stroke-width="1.5"/>
  <text class="dg3c-h" x="18" y="28">1 &#183; THE CLOACA IS PARTITIONED</text>
  <text class="dg3c-h" x="312" y="28">2 &#183; THE DUCTS ARE ABSORBED</text>

  <path class="dg3c-tube" stroke="var(--dg-cool)" d="M76,50 C76,86 92,102 106,118"/>
  <path class="dg3c-tube" stroke="var(--dg-muted)" d="M204,50 C204,86 188,102 174,118"/>
  <text class="dg3c-s" x="60" y="44" text-anchor="middle">allantois</text>
  <text class="dg3c-s" x="210" y="44" text-anchor="middle">hindgut</text>

  <path class="dg3c-cup" d="M62,138 C62,112 218,112 218,138 L218,206 C218,236 62,236 62,206 Z"/>
  <path class="dg3c-tint" fill="var(--dg-cool)" fill-opacity=".18" d="M66,140 C68,118 136,116 136,120 L136,228 C100,230 66,224 66,206 Z"/>
  <path class="dg3c-tint" fill="var(--dg-ink)" fill-opacity=".14" d="M144,120 C144,116 212,118 214,140 L214,206 C214,224 180,230 144,228 Z"/>
  <path class="dg3c-mem" d="M86,233 L194,233"/>

  <g transform="translate(140,118)">
    <g class="dg3c-sept">
      <path class="dg3c-sep" d="M-15,0 L15,0 L7,110 L-7,110 Z"/>
    </g>
  </g>

  <text class="dg3c-lb" x="102" y="176" text-anchor="middle" fill="var(--dg-cool)">urogenital</text>
  <text class="dg3c-lb" x="102" y="188" text-anchor="middle" fill="var(--dg-cool)">sinus</text>
  <text class="dg3c-lb" x="180" y="176" text-anchor="middle">anorectal</text>
  <text class="dg3c-lb" x="180" y="188" text-anchor="middle">canal</text>

  <g class="dg3c-blink">
    <circle cx="140" cy="232" r="10" fill="none" stroke="var(--dg-warm)" stroke-width="2" stroke-dasharray="3 3"/>
    <path d="M134,226 L146,238 M146,226 L134,238" stroke="var(--dg-warm)" stroke-width="2" stroke-linecap="round" fill="none"/>
  </g>
  <text class="dg3c-s" x="156" y="246" fill="var(--dg-warm)">fails here &#8594; imperforate anus</text>

  <text class="dg3c-s" x="18" y="266">Urorectal septum splits the cloaca in two.</text>
  <text class="dg3c-s" x="18" y="280">Front = urogenital sinus: bladder, urethra, the</text>
  <text class="dg3c-s" x="18" y="294">vagina opens in. Back = rectum + anal canal.</text>

  <text class="dg3c-s" x="474" y="54" text-anchor="middle" fill="var(--dg-cool)">posterior bladder wall = urogenital sinus</text>
  <ellipse class="dg3c-bl" cx="474" cy="136" rx="78" ry="68"/>
  <rect class="dg3c-bl" x="462" y="202" width="24" height="46" rx="6"/>
  <text class="dg3c-s" x="492" y="240">urethra</text>

  <path class="dg3c-duct dg3c-ghost" d="M408,78 C420,106 444,128 458,150"/>
  <path class="dg3c-duct dg3c-ghost" d="M540,78 C528,106 504,128 490,150"/>
  <path class="dg3c-ur dg3c-ghost" d="M458,150 L468,164"/>
  <path class="dg3c-ur dg3c-ghost" d="M490,150 L480,164"/>
  <circle cx="468" cy="164" r="6" fill="none" stroke="var(--dg-warm)" stroke-width="1.8" stroke-dasharray="3 3" opacity=".55"/>
  <circle cx="480" cy="164" r="6" fill="none" stroke="var(--dg-warm)" stroke-width="1.8" stroke-dasharray="3 3" opacity=".55"/>
  <circle cx="458" cy="150" r="5" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="3 3" opacity=".55"/>
  <circle cx="490" cy="150" r="5" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="3 3" opacity=".55"/>

  <polygon class="dg3c-tri dg3c-late" points="432,124 516,124 474,200"/>

  <path class="dg3c-arrow" d="M466,160 Q444,152 439,132"/>
  <polygon points="438,130 446.5,132.9 440.9,138.5" fill="var(--dg-muted)"/>
  <path class="dg3c-arrow" d="M482,160 Q504,152 509,132"/>
  <polygon points="510,130 507.1,138.5 501.5,132.9" fill="var(--dg-muted)"/>
  <path class="dg3c-arrow" d="M458,156 Q460,184 466,202"/>
  <polygon points="467,206 461.7,198.9 469.5,197.5" fill="var(--dg-muted)"/>
  <path class="dg3c-arrow" d="M490,156 Q488,184 482,202"/>
  <polygon points="481,206 486.3,198.9 478.5,197.5" fill="var(--dg-muted)"/>

  <path class="dg3c-ur dg3c-late" d="M410,72 C416,90 422,108 432,124"/>
  <path class="dg3c-ur dg3c-late" d="M538,72 C532,90 526,108 516,124"/>

  <circle class="dg3c-move" style="--dx:36px;--dy:40px" cx="432" cy="124" r="6" fill="var(--dg-warm)"/>
  <circle class="dg3c-move" style="--dx:-36px;--dy:40px" cx="516" cy="124" r="6" fill="var(--dg-warm)"/>
  <circle class="dg3c-move" style="--dx:-11px;--dy:-67px" cx="469" cy="217" r="4.5" fill="var(--dg-accent)"/>
  <circle class="dg3c-move" style="--dx:9px;--dy:-67px" cx="481" cy="217" r="4.5" fill="var(--dg-accent)"/>

  <path class="dg3c-lead" d="M380,152 L426,127"/>
  <text class="dg3c-s" x="310" y="146">ureteric openings</text>
  <text class="dg3c-s" x="310" y="158">move up + out</text>
  <path class="dg3c-lead" d="M556,186 L498,212"/>
  <text class="dg3c-s" x="628" y="166" text-anchor="end">mesonephric duct</text>
  <text class="dg3c-s" x="628" y="178" text-anchor="end">openings move</text>
  <text class="dg3c-s" x="628" y="190" text-anchor="end">down + in</text>
  <path class="dg3c-lead" d="M390,196 L444,178"/>
  <text class="dg3c-lb" x="386" y="196" text-anchor="end" fill="var(--dg-good)">trigone</text>
  <text class="dg3c-s" x="386" y="208" text-anchor="end">(mesonephric)</text>

  <circle cx="322" cy="272" r="5" fill="var(--dg-warm)"/>
  <text class="dg3c-s" x="332" y="275">ureteric opening</text>
  <circle cx="424" cy="272" r="5" fill="var(--dg-accent)"/>
  <text class="dg3c-s" x="434" y="275">mesonephric duct opening</text>
  <circle cx="318" cy="289" r="5" fill="none" stroke="var(--dg-muted)" stroke-width="1.6" stroke-dasharray="3 3"/>
  <text class="dg3c-s" x="330" y="292">start positions; exstrophy = duct wall becomes bladder wall</text>
</svg>`,
};

/*
 * CV8 - Regulation of Sodium & Water Excretion.
 *
 * Authoring rules live in the header of lecture_diagrams.js (CSS keyframes only,
 * var(--dg-*) colours only, viewBox + role + aria-label, nothing hover-only,
 * must still teach when frozen). Class names are prefixed .dg8a-/.dg8b-/.dg8c-
 * so these diagrams cannot style each other or any other lecture's.
 *
 * Every value shown comes from this lecture's own slides. Where the lecture
 * states a mechanism qualitatively (the medullary gradient, glomerular
 * pressure), the diagram stays qualitative rather than importing textbook
 * numbers the lecture never gave.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// The loop of Henle builds the medullary gradient; ADH decides if it is used.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv8-countercurrent-adh-gradient"] = {
  title: "The medullary gradient and the ADH switch",
  caption:
    "Watch the traffic, not the picture: on the way DOWN the descending thin limb water leaves through AQP1 " +
    "(~10% of filtered water) and the tubular fluid concentrates; on the way UP the thick ascending limb NKCC2 " +
    "pumps NaCl out (~25% of filtered sodium) while the wall stays water-impermeable, so the fluid dilutes and " +
    "the medullary interstitium becomes hyperosmotic (the shading deepens downward). That separation of salt " +
    "from water is what lets the collecting duct choose: with ADH, AQP2 goes in and water is pulled sideways " +
    "into the concentrated medulla (concentrated, low-volume urine); without ADH the wall stays sealed and the " +
    "same anatomy makes dilute, high-volume urine. Every few seconds the gradient fades out: that is a loop " +
    "diuretic blocking NKCC2 - it collapses the reservoir itself, which is why the lecture calls loop diuretics " +
    "the most powerful diuretics. This lecture gives no mOsm values for the gradient, so the shading is " +
    "deliberately qualitative; the percentages are the Slide 9-11 segment table.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A hairpin loop of Henle inside a kidney with cortex on top and a medulla whose shading deepens downward. Water arrows leave the descending thin limb through AQP1 and the fluid concentrates; sodium chloride arrows leave the water-impermeable thick ascending limb through NKCC2 and the fluid dilutes, deepening the medullary gradient. To the right two collecting ducts run down through that gradient: with ADH present AQP2 is inserted and water leaves sideways giving concentrated low-volume urine, with ADH absent the wall stays sealed and the urine is dilute and high volume. Periodically the gradient fades to show a loop diuretic blocking NKCC2 and collapsing it.">
  <style>
    .dg8a-box   { fill: none; stroke: var(--dg-line); stroke-width: 1.4; }
    .dg8a-ctx   { fill: var(--dg-panel); }
    .dg8a-band  { fill: var(--dg-accent); }
    .dg8a-tube  { fill: none; stroke: var(--dg-line); stroke-width: 21; stroke-linecap: butt; }
    .dg8a-seal  { fill: none; stroke: var(--dg-ink); stroke-width: 21; stroke-linecap: butt; opacity: .45; }
    .dg8a-lumen { fill: none; stroke: var(--dg-panel); stroke-width: 15; stroke-linecap: butt; }
    .dg8a-h     { font-size: 10px; font-weight: 700; letter-spacing: .03em; }
    .dg8a-t     { font-size: 9.5px; }
    .lecture-diagram svg text.dg8a-s  { font-size: 9px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg8a-ta { fill: var(--dg-accent); }
    .lecture-diagram svg text.dg8a-tc { fill: var(--dg-cool); }
    .lecture-diagram svg text.dg8a-tw { fill: var(--dg-warm); }
    .dg8a-cool  { fill: var(--dg-cool); stroke: var(--dg-cool); }
    .dg8a-warm  { fill: var(--dg-warm); stroke: var(--dg-warm); }
    .dg8a-acc   { fill: var(--dg-accent); stroke: var(--dg-accent); }
    .dg8a-arr   { stroke-width: 3; stroke-linecap: round; }
    .dg8a-grad, .dg8a-salt, .dg8a-cdw { animation: dg8aCollapse 12s ease-in-out infinite; }
    .dg8a-warn  { animation: dg8aWarn 12s ease-in-out infinite; }
    .dg8a-p1 { animation: dg8aPulse 2.4s ease-in-out infinite; }
    .dg8a-p2 { animation: dg8aPulse 2.4s ease-in-out infinite .5s; }
    .dg8a-p3 { animation: dg8aPulse 2.4s ease-in-out infinite 1s; }
    .dg8a-dot { animation: dg8aLoop 7s linear infinite; }
    .dg8a-dot2 { animation: dg8aLoop 7s linear infinite -3.5s; }
    .dg8a-down  { animation: dg8aConc 5s linear infinite; }
    .dg8a-down2 { animation: dg8aConc 5s linear infinite -2.5s; }
    .dg8a-dil  { animation: dg8aDil 4s linear infinite; }
    .dg8a-dil2 { animation: dg8aDil 4s linear infinite -1.3s; }
    .dg8a-dil3 { animation: dg8aDil 4s linear infinite -2.6s; }
    @keyframes dg8aCollapse { 0%, 66% { opacity: 1 } 74%, 90% { opacity: .1 } 98%, 100% { opacity: 1 } }
    @keyframes dg8aWarn { 0%, 62% { opacity: .38 } 74%, 90% { opacity: 1 } 98%, 100% { opacity: .38 } }
    @keyframes dg8aPulse { 0%, 100% { opacity: .2 } 45% { opacity: 1 } }
    @keyframes dg8aLoop {
      0%   { transform: translate(0px, 0px);     opacity: .3 }
      34%  { transform: translate(0px, 168px);   opacity: 1 }
      42%  { transform: translate(12px, 186px);  opacity: 1 }
      50%  { transform: translate(60px, 198px);  opacity: 1 }
      58%  { transform: translate(108px, 186px); opacity: .8 }
      66%  { transform: translate(120px, 168px); opacity: .6 }
      100% { transform: translate(120px, 0px);   opacity: .28 }
    }
    @keyframes dg8aConc {
      0%   { transform: translateY(0px);   opacity: 0 }
      12%  { opacity: .35 }
      85%  { opacity: 1 }
      97%  { transform: translateY(220px); opacity: 1 }
      100% { transform: translateY(228px); opacity: 0 }
    }
    @keyframes dg8aDil {
      0%   { transform: translateY(0px);   opacity: 0 }
      12%  { opacity: .4 }
      88%  { opacity: .4 }
      100% { transform: translateY(228px); opacity: 0 }
    }
  </style>

  <text x="110" y="15" text-anchor="middle" class="dg8a-h">DESCENDING LIMB</text>
  <text x="110" y="27" text-anchor="middle" class="dg8a-s">AQP1 &#183; ~10% of water out</text>
  <text x="230" y="15" text-anchor="middle" class="dg8a-h">THICK ASCENDING LIMB</text>
  <text x="230" y="27" text-anchor="middle" class="dg8a-s">NKCC2 &#183; ~25% of Na+ out</text>
  <text x="370" y="15" text-anchor="middle" class="dg8a-h dg8a-ta">ADH PRESENT</text>
  <text x="370" y="27" text-anchor="middle" class="dg8a-s">AQP2 inserted</text>
  <text x="520" y="15" text-anchor="middle" class="dg8a-h">ADH ABSENT</text>
  <text x="520" y="27" text-anchor="middle" class="dg8a-s">no AQP2 &#183; wall sealed</text>

  <rect x="20" y="36" width="600" height="40" class="dg8a-ctx"/>
  <g class="dg8a-grad">
    <rect x="20" y="76"  width="600" height="40" class="dg8a-band" opacity=".08"/>
    <rect x="20" y="116" width="600" height="40" class="dg8a-band" opacity=".15"/>
    <rect x="20" y="156" width="600" height="40" class="dg8a-band" opacity=".23"/>
    <rect x="20" y="196" width="600" height="40" class="dg8a-band" opacity=".32"/>
    <rect x="20" y="236" width="600" height="40" class="dg8a-band" opacity=".42"/>
  </g>
  <rect x="20" y="36" width="600" height="240" rx="4" class="dg8a-box"/>
  <text x="28" y="60" class="dg8a-s">CORTEX</text>
  <text x="28" y="268" class="dg8a-s">MEDULLA - hyperosmotic interstitium</text>

  <path d="M110 36 V216 C110 254 230 254 230 216 V36" class="dg8a-tube"/>
  <path d="M110 36 V216 C110 254 230 254 230 216 V36" class="dg8a-lumen"/>

  <circle cx="110" cy="48" r="4.5" class="dg8a-acc dg8a-dot"/>
  <circle cx="110" cy="48" r="4.5" class="dg8a-acc dg8a-dot2"/>

  <text x="60" y="88" text-anchor="end" class="dg8a-t dg8a-tc">H2O</text>
  <g class="dg8a-cool">
    <g class="dg8a-p1"><line x1="96" y1="100" x2="74" y2="100" class="dg8a-arr"/><polygon points="74,95 62,100 74,105"/></g>
    <g class="dg8a-p2"><line x1="96" y1="145" x2="74" y2="145" class="dg8a-arr"/><polygon points="74,140 62,145 74,150"/></g>
    <g class="dg8a-p3"><line x1="96" y1="190" x2="74" y2="190" class="dg8a-arr"/><polygon points="74,185 62,190 74,195"/></g>
  </g>

  <text x="284" y="88" class="dg8a-t dg8a-tw">NaCl</text>
  <g class="dg8a-warm dg8a-salt">
    <g class="dg8a-p1"><line x1="244" y1="100" x2="266" y2="100" class="dg8a-arr"/><polygon points="266,95 278,100 266,105"/></g>
    <g class="dg8a-p2"><line x1="244" y1="145" x2="266" y2="145" class="dg8a-arr"/><polygon points="266,140 278,145 266,150"/></g>
    <g class="dg8a-p3"><line x1="244" y1="190" x2="266" y2="190" class="dg8a-arr"/><polygon points="266,185 278,190 266,195"/></g>
  </g>

  <text x="124" y="118" class="dg8a-s">fluid concentrates &#8595;</text>
  <text x="216" y="186" text-anchor="end" class="dg8a-s">&#8593; fluid dilutes</text>
  <text x="170" y="212" text-anchor="middle" class="dg8a-s">TAL: no water leaves</text>

  <path d="M370 36 V284" class="dg8a-tube"/>
  <path d="M370 36 V284" class="dg8a-lumen"/>
  <circle cx="370" cy="48" r="4.5" class="dg8a-acc dg8a-down"/>
  <circle cx="370" cy="48" r="4.5" class="dg8a-acc dg8a-down2"/>
  <g class="dg8a-acc">
    <circle cx="380" cy="120" r="3" class="dg8a-p1"/>
    <circle cx="380" cy="170" r="3" class="dg8a-p2"/>
    <circle cx="380" cy="220" r="3" class="dg8a-p3"/>
  </g>
  <g class="dg8a-cool dg8a-cdw">
    <g class="dg8a-p1"><line x1="388" y1="120" x2="410" y2="120" class="dg8a-arr"/><polygon points="410,115 422,120 410,125"/></g>
    <g class="dg8a-p2"><line x1="388" y1="170" x2="410" y2="170" class="dg8a-arr"/><polygon points="410,165 422,170 410,175"/></g>
    <g class="dg8a-p3"><line x1="388" y1="220" x2="410" y2="220" class="dg8a-arr"/><polygon points="410,215 422,220 410,225"/></g>
  </g>
  <text x="390" y="248" class="dg8a-s">water follows</text>
  <text x="390" y="260" class="dg8a-s">the gradient</text>
  <text x="370" y="294" text-anchor="middle" class="dg8a-t">concentrated, low-volume urine</text>

  <path d="M520 36 V284" class="dg8a-seal"/>
  <path d="M520 36 V284" class="dg8a-lumen"/>
  <circle cx="520" cy="48" r="4.5" class="dg8a-acc dg8a-dil"/>
  <circle cx="520" cy="48" r="4.5" class="dg8a-acc dg8a-dil2"/>
  <circle cx="520" cy="48" r="4.5" class="dg8a-acc dg8a-dil3"/>
  <text x="540" y="248" class="dg8a-s">wall sealed:</text>
  <text x="540" y="260" class="dg8a-s">no water out</text>
  <text x="520" y="294" text-anchor="middle" class="dg8a-t">dilute, high-volume urine</text>

  <g class="dg8a-warn">
    <circle cx="26" cy="309" r="4.5" fill="var(--dg-warm)"/>
    <text x="38" y="313" class="dg8a-s dg8a-tw">Loop diuretic blocks NKCC2 &#8594; the gradient itself collapses &#8594; even with ADH the urine cannot be concentrated</text>
  </g>
</svg>`,
};

// --------------------------------------------------------------------------
// Two valves around one filter: Ang II, prostaglandins, TGF and NSAIDs.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv8-afferent-efferent-gfr-defense"] = {
  title: "Two valves around one filter",
  caption:
    "The same glomerulus in the five states this lecture describes. Vessel thickness is arteriolar calibre " +
    "(orange = constricted, blue = dilated, grey = resting tone), the fill inside the tuft is glomerular " +
    "capillary pressure, moving dots are renal blood flow and falling drops are filtration - so the speed of " +
    "each panel is the teaching. Angiotensin II constricts BOTH arterioles but the efferent more (higher AT1 " +
    "receptor density): blood flow slows, yet pinching downstream of the filter holds pressure inside it up, " +
    "so GFR is preserved. Prostaglandins released by the macula densa in response to Ang II open the afferent " +
    "back up (guardian #1, Goal 1). Tubuloglomerular feedback does the opposite job - high NaCl at the macula " +
    "densa means GFR is too high, so the afferent constricts and brings it back to normal. Block the " +
    "prostaglandins with an NSAID in a volume-depleted patient and afferent constriction is unopposed: " +
    "filtration crashes. The lecture cites the Slide 36 GFR/RBF/filtration-fraction table but does not " +
    "reproduce its numbers, so no numeric values are shown here.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Five panels of the same glomerulus with an afferent arteriole entering and an efferent arteriole leaving. Baseline: normal tone, normal renal blood flow and GFR. Angiotensin II: efferent constricted more than afferent, blood flow falls but glomerular pressure and GFR are held. Prostaglandins from the macula densa dilate the afferent, protecting flow and keeping GFR steady. Tubuloglomerular feedback: high sodium chloride at the macula densa constricts the afferent, lowering a high GFR back to normal. NSAID plus volume depletion: prostaglandin dilation is lost, afferent constriction is unopposed and filtration crashes.">
  <style>
    .dg8b-panel { fill: var(--dg-panel); fill-opacity: .45; stroke: var(--dg-line); stroke-width: 1.2; }
    .dg8b-ttl   { font-size: 9.5px; font-weight: 700; letter-spacing: .02em; }
    .dg8b-ver   { font-size: 10px; font-weight: 700; }
    .lecture-diagram svg text.dg8b-sub  { font-size: 8.5px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg8b-txt  { font-size: 8.5px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg8b-leg  { font-size: 9px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg8b-good { fill: var(--dg-good); }
    .lecture-diagram svg text.dg8b-bad  { fill: var(--dg-warm); }
    .dg8b-note  { font-size: 9.5px; }
    .dg8b-vn    { stroke: var(--dg-ink); opacity: .55; stroke-linecap: round; }
    .dg8b-vc    { stroke: var(--dg-warm); stroke-linecap: round; }
    .dg8b-vd    { stroke: var(--dg-cool); stroke-linecap: round; }
    .dg8b-tuft  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg8b-pr    { fill: var(--dg-cool); }
    .dg8b-blood { fill: var(--dg-accent); }
    .dg8b-drop  { fill: var(--dg-cool); }
    .dg8b-bow   { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg8b-f1 { animation: dg8bFlow 2.2s linear infinite; }
    .dg8b-f2 { animation: dg8bFlow 4.4s linear infinite; }
    .dg8b-f3 { animation: dg8bFlow 2.6s linear infinite; }
    .dg8b-f4 { animation: dg8bFlow 3.6s linear infinite; }
    .dg8b-f5 { animation: dg8bFlow 6.6s linear infinite; }
    .dg8b-g1 { animation: dg8bDrop 1.9s linear infinite; }
    .dg8b-g2 { animation: dg8bDrop 2s linear infinite; }
    .dg8b-g3 { animation: dg8bDrop 1.9s linear infinite; }
    .dg8b-g4 { animation: dg8bDrop 2.2s linear infinite; }
    .dg8b-g5 { animation: dg8bDrop 7s linear infinite; }
    .dg8b-lag  { animation-delay: -1s; }
    .dg8b-lagd { animation-delay: -.9s; }
    @keyframes dg8bFlow {
      0%   { transform: translateX(0px);   opacity: 0 }
      12%  { opacity: 1 }
      88%  { opacity: 1 }
      100% { transform: translateX(104px); opacity: 0 }
    }
    @keyframes dg8bDrop {
      0%   { transform: translateY(0px);  opacity: 0 }
      18%  { opacity: 1 }
      80%  { opacity: .9 }
      100% { transform: translateY(32px); opacity: 0 }
    }
  </style>

  <g>
    <text x="70" y="20" text-anchor="middle" class="dg8b-ttl">BASELINE</text>
    <text x="70" y="32" text-anchor="middle" class="dg8b-sub">resting tone</text>
    <rect x="12" y="48" width="116" height="180" rx="8" class="dg8b-panel"/>
    <text x="34" y="74" text-anchor="middle" class="dg8b-sub">afferent</text>
    <text x="106" y="74" text-anchor="middle" class="dg8b-sub">efferent</text>
    <line x1="18" y1="86" x2="51" y2="86" class="dg8b-vn" stroke-width="9"/>
    <line x1="89" y1="86" x2="122" y2="86" class="dg8b-vn" stroke-width="7"/>
    <circle cx="70" cy="86" r="17" class="dg8b-tuft"/>
    <circle cx="70" cy="86" r="13" class="dg8b-pr" opacity=".3"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f1"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f1 dg8b-lag"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g1"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g1 dg8b-lagd"/>
    <line x1="40" y1="140" x2="100" y2="140" class="dg8b-bow"/>
    <text x="70" y="152" text-anchor="middle" class="dg8b-sub">filtrate</text>
    <text x="70" y="172" text-anchor="middle" class="dg8b-txt">afferent + efferent</text>
    <text x="70" y="183" text-anchor="middle" class="dg8b-txt">both at rest</text>
    <text x="70" y="201" text-anchor="middle" class="dg8b-ver">RBF normal</text>
    <text x="70" y="215" text-anchor="middle" class="dg8b-ver dg8b-good">GFR normal</text>
  </g>

  <g transform="translate(125,0)">
    <text x="70" y="20" text-anchor="middle" class="dg8b-ttl">ANGIOTENSIN II</text>
    <text x="70" y="32" text-anchor="middle" class="dg8b-sub">low-volume state</text>
    <rect x="12" y="48" width="116" height="180" rx="8" class="dg8b-panel"/>
    <line x1="18" y1="86" x2="51" y2="86" class="dg8b-vc" stroke-width="7"/>
    <line x1="89" y1="86" x2="122" y2="86" class="dg8b-vc" stroke-width="3"/>
    <circle cx="70" cy="86" r="17" class="dg8b-tuft"/>
    <circle cx="70" cy="86" r="13" class="dg8b-pr" opacity=".3"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f2"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f2 dg8b-lag"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g2"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g2 dg8b-lagd"/>
    <line x1="40" y1="140" x2="100" y2="140" class="dg8b-bow"/>
    <text x="70" y="172" text-anchor="middle" class="dg8b-txt">efferent squeezed</text>
    <text x="70" y="183" text-anchor="middle" class="dg8b-txt">more (AT1 density)</text>
    <text x="70" y="201" text-anchor="middle" class="dg8b-ver dg8b-bad">RBF falls</text>
    <text x="70" y="215" text-anchor="middle" class="dg8b-ver dg8b-good">GFR held</text>
  </g>

  <g transform="translate(250,0)">
    <text x="70" y="20" text-anchor="middle" class="dg8b-ttl">PROSTAGLANDINS</text>
    <text x="70" y="32" text-anchor="middle" class="dg8b-sub">guardian #1</text>
    <rect x="12" y="48" width="116" height="180" rx="8" class="dg8b-panel"/>
    <line x1="18" y1="86" x2="51" y2="86" class="dg8b-vd" stroke-width="12"/>
    <line x1="89" y1="86" x2="122" y2="86" class="dg8b-vc" stroke-width="3"/>
    <circle cx="70" cy="86" r="17" class="dg8b-tuft"/>
    <circle cx="70" cy="86" r="13" class="dg8b-pr" opacity=".3"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f3"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f3 dg8b-lag"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g3"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g3 dg8b-lagd"/>
    <line x1="40" y1="140" x2="100" y2="140" class="dg8b-bow"/>
    <text x="70" y="172" text-anchor="middle" class="dg8b-txt">macula densa PGs</text>
    <text x="70" y="183" text-anchor="middle" class="dg8b-txt">open the afferent</text>
    <text x="70" y="201" text-anchor="middle" class="dg8b-ver dg8b-good">RBF protected</text>
    <text x="70" y="215" text-anchor="middle" class="dg8b-ver dg8b-good">GFR steady</text>
  </g>

  <g transform="translate(375,0)">
    <text x="70" y="20" text-anchor="middle" class="dg8b-ttl">TUBULOGLOMERULAR</text>
    <text x="70" y="32" text-anchor="middle" class="dg8b-ttl">FEEDBACK</text>
    <rect x="12" y="48" width="116" height="180" rx="8" class="dg8b-panel"/>
    <line x1="18" y1="86" x2="51" y2="86" class="dg8b-vc" stroke-width="4.5"/>
    <line x1="89" y1="86" x2="122" y2="86" class="dg8b-vn" stroke-width="7"/>
    <circle cx="70" cy="86" r="17" class="dg8b-tuft"/>
    <circle cx="70" cy="86" r="13" class="dg8b-pr" opacity=".17"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f4"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f4 dg8b-lag"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g4"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g4 dg8b-lagd"/>
    <line x1="40" y1="140" x2="100" y2="140" class="dg8b-bow"/>
    <text x="70" y="172" text-anchor="middle" class="dg8b-txt">high NaCl at the</text>
    <text x="70" y="183" text-anchor="middle" class="dg8b-txt">macula densa</text>
    <text x="70" y="201" text-anchor="middle" class="dg8b-ver dg8b-bad">afferent constricts</text>
    <text x="70" y="215" text-anchor="middle" class="dg8b-ver dg8b-good">GFR back to normal</text>
  </g>

  <g transform="translate(500,0)">
    <text x="70" y="20" text-anchor="middle" class="dg8b-ttl">NSAID</text>
    <text x="70" y="32" text-anchor="middle" class="dg8b-sub">+ volume depletion</text>
    <rect x="12" y="48" width="116" height="180" rx="8" class="dg8b-panel"/>
    <line x1="18" y1="86" x2="51" y2="86" class="dg8b-vc" stroke-width="3"/>
    <line x1="89" y1="86" x2="122" y2="86" class="dg8b-vc" stroke-width="3"/>
    <circle cx="70" cy="86" r="17" class="dg8b-tuft"/>
    <circle cx="70" cy="86" r="13" class="dg8b-pr" opacity=".06"/>
    <circle cx="18" cy="86" r="3.5" class="dg8b-blood dg8b-f5"/>
    <circle cx="70" cy="106" r="3" class="dg8b-drop dg8b-g5" opacity=".7"/>
    <line x1="40" y1="140" x2="100" y2="140" class="dg8b-bow"/>
    <text x="70" y="172" text-anchor="middle" class="dg8b-txt">no PG dilation, so</text>
    <text x="70" y="183" text-anchor="middle" class="dg8b-txt">afferent is unopposed</text>
    <text x="70" y="201" text-anchor="middle" class="dg8b-ver dg8b-bad">RBF falls</text>
    <text x="70" y="215" text-anchor="middle" class="dg8b-ver dg8b-bad">GFR crashes</text>
  </g>

  <text x="320" y="250" text-anchor="middle" class="dg8b-leg">thickness = calibre &#183; orange = constricted &#183; blue = dilated &#183; tuft fill = glomerular pressure &#183; drops = filtration</text>
  <text x="320" y="272" text-anchor="middle" class="dg8b-note">Constrict upstream (afferent) &#8594; pressure inside the glomerulus falls. Constrict downstream (efferent) &#8594; it rises.</text>
  <text x="320" y="288" text-anchor="middle" class="dg8b-note">Both lower renal blood flow - which is how RBF and GFR end up moving in opposite directions.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// Heart failure: the loop that never terminates, and the two volumes diverging.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv8-heart-failure-vicious-cycle"] = {
  title: "The loop that never shuts off",
  caption:
    "The lecture's Slide 45-47 cycle, running rather than drawn once: weak pump &#8594; cardiac output falls " +
    "&#8594; effective circulating volume falls &#8594; renal and cardiopulmonary sensors read hypovolemia " +
    "&#8594; RAAS, sympathetics and non-osmotic ADH fire &#8594; the kidney retains sodium and water &#8594; " +
    "ECF rises as pitting edema, ascites and pulmonary edema - and the pump is still weak, so the loop starts " +
    "again. The two bars on the right are the whole paradox: total ECF climbs one step per lap while effective " +
    "circulating volume stays pinned low, which is why an overloaded patient's kidneys behave as if he were " +
    "dehydrated. ANP and BNP rise with cardiac stretch each lap but flatten against a ceiling - they cannot " +
    "overcome RAAS and the sympathetics, so BNP ends up a severity marker rather than a rescue. Water retained " +
    "in excess of sodium drops the serum sodium to the opening case's 128 mEq/L: hypervolemic hyponatremia, " +
    "which the lecture flags as a higher-mortality marker.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A six step ring showing the heart failure vicious cycle: weak pump with falling cardiac output, effective circulating volume falls, sensors read low volume, RAAS and sympathetics and non-osmotic ADH fire, the kidney retains sodium and water, extracellular fluid rises with edema ascites and crackles, and the loop returns to the weak pump. A highlight travels around the ring lap after lap. On the right, three bars: total extracellular fluid climbs one step each lap, effective circulating volume stays low, and BNP rises but flattens against a ceiling labelled cannot break the loop. Serum sodium falls to 128 milliequivalents per litre, a hypervolemic hyponatremia marking higher mortality.">
  <style>
    .dg8c-ring  { fill: none; stroke: var(--dg-accent); stroke-width: 2; opacity: .5;
                  stroke-dasharray: 9 11; animation: dg8cMarch 2.2s linear infinite; }
    .dg8c-node  { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg8c-hi    { fill: var(--dg-accent); opacity: 0; }
    .dg8c-n1 { animation: dg8cChase 6s linear infinite; }
    .dg8c-n2 { animation: dg8cChase 6s linear infinite 1s; }
    .dg8c-n3 { animation: dg8cChase 6s linear infinite 2s; }
    .dg8c-n4 { animation: dg8cChase 6s linear infinite 3s; }
    .dg8c-n5 { animation: dg8cChase 6s linear infinite 4s; }
    .dg8c-n6 { animation: dg8cChase 6s linear infinite 5s; }
    .dg8c-lb  { font-size: 8.5px; font-weight: 700; }
    .dg8c-ct  { font-size: 9px; }
    .lecture-diagram svg text.dg8c-hd { font-size: 9px; font-weight: 700; letter-spacing: .03em; fill: var(--dg-accent); }
    .lecture-diagram svg text.dg8c-sm { font-size: 8.5px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg8c-warn { fill: var(--dg-warm); }
    .dg8c-arw { fill: var(--dg-accent); opacity: .7; }
    .dg8c-bar { fill: none; stroke-linecap: butt; stroke-dasharray: 184; }
    .dg8c-ecf { stroke: var(--dg-warm); stroke-width: 30; stroke-dashoffset: 26; opacity: .85;
                animation: dg8cEcf 24s ease-in-out infinite; }
    .dg8c-ecv { stroke: var(--dg-cool); stroke-width: 30; stroke-dashoffset: 148; opacity: .85;
                animation: dg8cEcv 24s ease-in-out infinite; }
    .dg8c-bnp { stroke: var(--dg-good); stroke-width: 14; stroke-dashoffset: 110; opacity: .9;
                animation: dg8cBnp 24s ease-in-out infinite; }
    .dg8c-cap { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 4 3; }
    @keyframes dg8cMarch { to { stroke-dashoffset: -40 } }
    @keyframes dg8cChase { 0%, 100% { opacity: 0 } 4% { opacity: .22 } 13% { opacity: 0 } }
    @keyframes dg8cEcf {
      0%, 4%   { stroke-dashoffset: 152; opacity: .85 }
      22%, 26% { stroke-dashoffset: 120 }
      47%, 51% { stroke-dashoffset: 88 }
      72%, 76% { stroke-dashoffset: 56 }
      90%      { stroke-dashoffset: 26; opacity: .85 }
      95%      { stroke-dashoffset: 26; opacity: 0 }
      96%      { stroke-dashoffset: 152; opacity: 0 }
      100%     { stroke-dashoffset: 152; opacity: .85 }
    }
    @keyframes dg8cEcv {
      0%, 100% { stroke-dashoffset: 151 }
      12% { stroke-dashoffset: 145 }
      24% { stroke-dashoffset: 152 }
      37% { stroke-dashoffset: 146 }
      49% { stroke-dashoffset: 152 }
      62% { stroke-dashoffset: 145 }
      74% { stroke-dashoffset: 152 }
      87% { stroke-dashoffset: 146 }
    }
    @keyframes dg8cBnp {
      0%, 4%   { stroke-dashoffset: 172; opacity: .9 }
      22%, 26% { stroke-dashoffset: 150 }
      47%, 51% { stroke-dashoffset: 132 }
      72%, 76% { stroke-dashoffset: 118 }
      90%      { stroke-dashoffset: 110; opacity: .9 }
      95%      { stroke-dashoffset: 110; opacity: 0 }
      96%      { stroke-dashoffset: 172; opacity: 0 }
      100%     { stroke-dashoffset: 172; opacity: .9 }
    }
  </style>

  <text x="20" y="20" class="dg8c-hd">THE VICIOUS CYCLE - IT NEVER TERMINATES</text>
  <text x="396" y="20" class="dg8c-hd">TWO VOLUMES, TRACKED AS THE LOOP TURNS</text>

  <circle cx="196" cy="168" r="112" class="dg8c-ring"/>

  <g transform="translate(196,56)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n1"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">WEAK PUMP</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">cardiac output falls</text>
  </g>
  <g transform="translate(293,112)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n2"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">ECV FALLS</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">tissues under-perfused</text>
  </g>
  <g transform="translate(293,224)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n3"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">SENSORS READ</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">low volume</text>
  </g>
  <g transform="translate(196,280)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n4"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">RAAS + SYMPATHETICS</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">+ non-osmotic ADH</text>
  </g>
  <g transform="translate(99,224)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n5"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">KIDNEY RETAINS</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">Na+ and water</text>
  </g>
  <g transform="translate(99,112)">
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-node"/>
    <rect x="-59" y="-17" width="118" height="34" rx="6" class="dg8c-hi dg8c-n6"/>
    <text x="0" y="-3" text-anchor="middle" class="dg8c-lb">ECF RISES</text>
    <text x="0" y="10" text-anchor="middle" class="dg8c-sm">edema, ascites, crackles</text>
  </g>

  <g class="dg8c-arw">
    <polygon points="-5,-4 5,0 -5,4" transform="translate(268,82) rotate(40)"/>
    <polygon points="-5,-4 5,0 -5,4" transform="translate(308,168) rotate(90)"/>
    <polygon points="-5,-4 5,0 -5,4" transform="translate(268,254) rotate(140)"/>
    <polygon points="-5,-4 5,0 -5,4" transform="translate(124,254) rotate(220)"/>
    <polygon points="-5,-4 5,0 -5,4" transform="translate(84,168) rotate(270)"/>
    <polygon points="-5,-4 5,0 -5,4" transform="translate(124,82) rotate(320)"/>
  </g>

  <text x="196" y="155" text-anchor="middle" class="dg8c-ct">the pump is still weak,</text>
  <text x="196" y="169" text-anchor="middle" class="dg8c-ct">so ECV never recovers</text>
  <text x="196" y="183" text-anchor="middle" class="dg8c-ct">and the loop fires again</text>

  <line x1="440" y1="252" x2="632" y2="252" stroke="var(--dg-line)" stroke-width="1.2"/>
  <line x1="456" y1="252" x2="456" y2="68" class="dg8c-bar dg8c-ecf"/>
  <line x1="520" y1="252" x2="520" y2="68" class="dg8c-bar dg8c-ecv"/>
  <line x1="576" y1="252" x2="576" y2="68" class="dg8c-bar dg8c-bnp"/>
  <line x1="552" y1="172" x2="620" y2="172" class="dg8c-cap"/>
  <text x="586" y="166" text-anchor="middle" class="dg8c-sm">ceiling</text>

  <text x="456" y="268" text-anchor="middle" class="dg8c-lb">total ECF</text>
  <text x="456" y="280" text-anchor="middle" class="dg8c-sm">climbs every lap</text>
  <text x="520" y="268" text-anchor="middle" class="dg8c-lb">ECV</text>
  <text x="520" y="280" text-anchor="middle" class="dg8c-sm">stays low</text>
  <text x="580" y="268" text-anchor="middle" class="dg8c-lb">BNP</text>
  <text x="580" y="280" text-anchor="middle" class="dg8c-sm">rises, futile</text>

  <text x="396" y="300" class="dg8c-ct">water retained in excess of salt &#8594; serum Na+ 128 mEq/L</text>
  <text x="396" y="313" class="dg8c-ct dg8c-warn">hypervolemic hyponatremia = higher mortality risk</text>
</svg>`,
};

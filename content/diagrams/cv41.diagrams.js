/*
 * cv41 - Introduction to Normal Chest X-Ray (Lecture #41, J. Mazzie, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The silhouette sign - a border exists only where two densities differ.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv41-silhouette-sign"] = {
  title: "Why a border disappears",
  caption:
    "On the left, air-filled lung sits against the soft-tissue density of the heart, so both heart borders are drawn sharply. " +
    "On the right, the lingula fills with pus, blood or simple fluid - all of which are the same soft-tissue density as the heart (Slides 7-8). " +
    "Watch the consolidation fade in and the left heart border fade out with it: that erased interface is the silhouette sign (Slide 16). " +
    "The right heart border stays crisp because the right middle lobe next to it is still aerated, which is exactly how the lost border tells you the lobe.",
  svg: `
<svg viewBox="0 0 640 288" role="img" aria-label="Two simplified frontal chest diagrams. In the first, aerated lung surrounds the heart and both heart borders are sharp. In the second, a patch of consolidation the same shade as the heart appears against the left heart border and that border fades away, while the right heart border remains sharp.">
  <style>
    .dg41a-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg41a-heart { fill: var(--dg-ink); fill-opacity: .42; stroke: none; }
    .dg41a-bord  { fill: none; stroke: var(--dg-ink); stroke-width: 3.4; stroke-linecap: round; }
    .dg41a-good  { stroke: var(--dg-good); }
    .dg41a-hd    { font-size: 12.5px; font-weight: 700; }
    .dg41a-lbl   { font-size: 11px; fill: var(--dg-muted); }
    .dg41a-warn  { font-size: 11.5px; font-weight: 700; fill: var(--dg-warm); }
    .dg41a-tick  { stroke: var(--dg-good); stroke-width: 2; }
    .dg41a-fill  { animation: dg41aFill 6s ease-in-out infinite; }
    .dg41a-gone  { animation: dg41aGone 6s ease-in-out infinite; }
    @keyframes dg41aFill { 0%, 12% { opacity: 0 } 40%, 74% { opacity: 1 } 100% { opacity: 0 } }
    @keyframes dg41aGone { 0%, 12% { opacity: 1 } 40%, 74% { opacity: .08 } 100% { opacity: 1 } }
  </style>

  <text x="30" y="24" class="dg41a-hd">Aerated lung beside the heart</text>
  <text x="30" y="42" class="dg41a-lbl">air vs soft tissue - two densities</text>
  <rect x="30" y="52" width="265" height="168" rx="20" class="dg41a-box"/>
  <path class="dg41a-heart" d="M132 88 C114 112 118 168 144 194 L182 194 C210 168 214 112 192 88 Z"/>
  <path class="dg41a-bord dg41a-good" d="M132 88 C114 112 118 168 144 194"/>
  <path class="dg41a-bord dg41a-good" d="M192 88 C214 112 210 168 182 194"/>
  <line x1="212" y1="122" x2="240" y2="122" class="dg41a-tick"/>
  <text x="246" y="126" class="dg41a-lbl">left border</text>
  <text x="246" y="140" class="dg41a-lbl">sharp</text>
  <text x="40" y="212" class="dg41a-lbl">lung</text>
  <text x="30" y="243" class="dg41a-lbl">Right heart border = right atrium.</text>
  <text x="30" y="259" class="dg41a-lbl">Left heart border = left ventricle (Slide 34).</text>

  <text x="345" y="24" class="dg41a-hd">Lingula filled with fluid</text>
  <text x="345" y="42" class="dg41a-lbl">soft tissue vs soft tissue - one density</text>
  <rect x="345" y="52" width="265" height="168" rx="20" class="dg41a-box"/>
  <ellipse cx="540" cy="146" rx="36" ry="46" class="dg41a-heart dg41a-fill" opacity="1"/>
  <path class="dg41a-heart" d="M447 88 C429 112 433 168 459 194 L497 194 C525 168 529 112 507 88 Z"/>
  <path class="dg41a-bord dg41a-good" d="M447 88 C429 112 433 168 459 194"/>
  <path class="dg41a-bord dg41a-gone" d="M507 88 C529 112 525 168 497 194" opacity=".08"/>
  <text x="355" y="212" class="dg41a-lbl">right heart border still sharp</text>
  <text x="345" y="243" class="dg41a-warn dg41a-fill" opacity="1">Left heart border LOST</text>
  <text x="345" y="259" class="dg41a-lbl">lost left border = lingula (LUL); lost right border = RML</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. PA vs AP - object-to-detector distance and beam divergence.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv41-pa-vs-ap-magnification"] = {
  title: "PA vs AP magnification",
  caption:
    "The heart is an anterior structure, so the projection decides how far it sits from the cassette. " +
    "On a PA film the patient faces the detector, the heart is close to it, the diverging beam has little room to spread, and the shadow is nearly life size (Slide 20). " +
    "On an AP or portable film the heart is far from the detector, the same divergence has a long throw, and the shadow is magnified (Slide 19) - as is the mediastinum, which is also anterior. " +
    "The tick marks show true heart size; the coloured bars on the cassette show the shadow actually recorded. Shadow sizes here are drawn from the geometry, not from any figure the lecturer quoted.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two beam geometry diagrams. In the posteroanterior setup the heart lies close to the detector and its projected shadow is only slightly larger than the heart. In the anteroposterior setup the heart lies far from the detector and the same diverging beam casts a much taller shadow.">
  <style>
    .dg41b-tube { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.6; }
    .dg41b-body { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg41b-hrt  { fill: var(--dg-ink); fill-opacity: .45; }
    .dg41b-det  { stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; }
    .dg41b-ray  { fill: none; stroke: var(--dg-cool); stroke-width: 2; stroke-dasharray: 9 13;
                  animation: dg41bRay 1.8s linear infinite; }
    @keyframes dg41bRay { from { stroke-dashoffset: 44 } to { stroke-dashoffset: 0 } }
    .dg41b-true { stroke: var(--dg-muted); stroke-width: 2.6; stroke-linecap: round; }
    .dg41b-sh   { stroke-width: 9; stroke-linecap: round;
                  animation: dg41bPulse 1.8s ease-in-out infinite; }
    @keyframes dg41bPulse { 0%, 100% { opacity: .6 } 50% { opacity: 1 } }
    .dg41b-ok   { stroke: var(--dg-good); }
    .dg41b-bad  { stroke: var(--dg-warm); }
    .dg41b-hd   { font-size: 12.5px; font-weight: 700; }
    .dg41b-lbl  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg41b-key  { font-size: 11.5px; font-weight: 700; }
  </style>

  <text x="18" y="24" class="dg41b-hd">PA - patient faces the cassette</text>
  <rect x="18" y="74" width="34" height="32" rx="7" class="dg41b-tube"/>
  <text x="18" y="122" class="dg41b-lbl">tube</text>
  <rect x="150" y="45" width="150" height="90" rx="14" class="dg41b-body"/>
  <text x="152" y="150" class="dg41b-lbl">posterior</text>
  <text x="258" y="150" class="dg41b-lbl">anterior</text>
  <circle cx="282" cy="90" r="20" class="dg41b-hrt"/>
  <path class="dg41b-ray" d="M54 90 L330 66"/>
  <path class="dg41b-ray" d="M54 90 L330 114"/>
  <line x1="330" y1="40" x2="330" y2="140" class="dg41b-det"/>
  <line x1="316" y1="70" x2="316" y2="110" class="dg41b-true"/>
  <line x1="338" y1="66" x2="338" y2="114" class="dg41b-sh dg41b-ok"/>
  <text x="352" y="82" class="dg41b-key">Little magnification</text>
  <text x="352" y="98" class="dg41b-lbl">heart close to the cassette;</text>
  <text x="352" y="112" class="dg41b-lbl">the technically better film</text>

  <text x="18" y="188" class="dg41b-hd">AP / portable - patient's back to the cassette</text>
  <rect x="18" y="204" width="34" height="32" rx="7" class="dg41b-tube"/>
  <text x="18" y="252" class="dg41b-lbl">tube</text>
  <rect x="150" y="175" width="150" height="90" rx="14" class="dg41b-body"/>
  <text x="152" y="280" class="dg41b-lbl">anterior</text>
  <text x="252" y="280" class="dg41b-lbl">posterior</text>
  <circle cx="182" cy="220" r="20" class="dg41b-hrt"/>
  <path class="dg41b-ray" d="M54 220 L330 176"/>
  <path class="dg41b-ray" d="M54 220 L330 264"/>
  <line x1="330" y1="168" x2="330" y2="272" class="dg41b-det"/>
  <line x1="316" y1="200" x2="316" y2="240" class="dg41b-true"/>
  <line x1="338" y1="176" x2="338" y2="264" class="dg41b-sh dg41b-bad"/>
  <text x="352" y="206" class="dg41b-key">More magnification</text>
  <text x="352" y="222" class="dg41b-lbl">heart far from the cassette;</text>
  <text x="352" y="236" class="dg41b-lbl">mediastinum widens too, so do not</text>
  <text x="352" y="250" class="dg41b-lbl">call cardiomegaly on this film</text>
  <line x1="352" y1="264" x2="374" y2="264" class="dg41b-true"/>
  <text x="380" y="268" class="dg41b-lbl">= true heart size</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Penetration - the trade-off between seeing spine and seeing lung.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv41-penetration-window"] = {
  title: "Penetration is a window, not a direction",
  caption:
    "Penetration is how many photons actually reach the cassette, and it is set by the technologist. " +
    "Too few and the film is white: the spine and everything behind the heart are hidden, so a retrocardiac mass or pneumonia is missed. " +
    "Too many and the lungs are burned out: the vertebrae look beautiful but the fine lung markings vanish, so parenchymal disease is missed. " +
    "The optimal film sits between the two, with the thoracic intervertebral disc spaces just visible (Slide 27) - which is why that single check is the one the lecturer uses.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="Three film panels compared. The underpenetrated panel shows faint vertebrae and clear lung markings. The optimal panel shows vertebrae with visible disc spaces and clear lung markings. The overpenetrated panel shows very crisp vertebrae but faded lung markings. A marker steps along an axis from too few photons to too many, and the optimal panel is highlighted.">
  <style>
    .dg41c-pan  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg41c-vert { fill: var(--dg-ink); }
    .dg41c-mark { fill: none; stroke: var(--dg-ink); stroke-width: 1.6; stroke-linecap: round; }
    .dg41c-hd   { font-size: 11.5px; font-weight: 700; }
    .dg41c-lbl  { font-size: 10px; fill: var(--dg-muted); }
    .dg41c-ax   { stroke: var(--dg-line); stroke-width: 2; }
    .dg41c-hl   { fill: none; stroke: var(--dg-accent); stroke-width: 2.6; }
    .dg41c-dot  { fill: var(--dg-accent); animation: dg41cSlide 9s ease-in-out infinite; }
    @keyframes dg41cSlide {
      0%, 24%   { transform: translateX(0) }
      33%, 57%  { transform: translateX(205px) }
      66%, 91%  { transform: translateX(410px) }
      100%      { transform: translateX(0) }
    }
    .dg41c-h1 { animation: dg41cH1 9s ease-in-out infinite; }
    .dg41c-h2 { animation: dg41cH2 9s ease-in-out infinite; }
    .dg41c-h3 { animation: dg41cH3 9s ease-in-out infinite; }
    @keyframes dg41cH1 { 0%, 24% { opacity: 1 } 30%, 100% { opacity: 0 } }
    @keyframes dg41cH2 { 0%, 27% { opacity: 0 } 33%, 57% { opacity: 1 } 63%, 100% { opacity: 0 } }
    @keyframes dg41cH3 { 0%, 60% { opacity: 0 } 66%, 91% { opacity: 1 } 97%, 100% { opacity: 0 } }
  </style>

  <text x="30" y="22" class="dg41c-hd">Underpenetrated</text>
  <text x="30" y="38" class="dg41c-lbl">too few photons - film looks white</text>
  <rect x="30" y="48" width="170" height="150" rx="10" class="dg41c-pan"/>
  <g opacity=".14">
    <rect x="100" y="60" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="100" y="92" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="100" y="124" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="100" y="156" width="30" height="24" rx="4" class="dg41c-vert"/>
  </g>
  <g opacity=".85" class="dg41c-mark">
    <path d="M62 74 L82 96 L70 122"/><path d="M82 96 L96 108"/>
    <path d="M168 74 L148 96 L160 122"/><path d="M148 96 L134 108"/>
  </g>
  <rect x="30" y="48" width="170" height="150" rx="10" class="dg41c-hl dg41c-h1" opacity="0"/>
  <text x="30" y="216" class="dg41c-lbl">spine and retrocardiac area hidden</text>
  <text x="30" y="230" class="dg41c-lbl">lung markings seen</text>

  <text x="235" y="22" class="dg41c-hd">Optimal</text>
  <text x="235" y="38" class="dg41c-lbl">disc spaces just visible</text>
  <rect x="235" y="48" width="170" height="150" rx="10" class="dg41c-pan"/>
  <g opacity=".7">
    <rect x="305" y="60" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="305" y="92" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="305" y="124" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="305" y="156" width="30" height="24" rx="4" class="dg41c-vert"/>
  </g>
  <g opacity=".85" class="dg41c-mark">
    <path d="M267 74 L287 96 L275 122"/><path d="M287 96 L301 108"/>
    <path d="M373 74 L353 96 L365 122"/><path d="M353 96 L339 108"/>
  </g>
  <rect x="235" y="48" width="170" height="150" rx="10" class="dg41c-hl dg41c-h2" opacity=".9"/>
  <text x="235" y="216" class="dg41c-lbl">can see behind the heart</text>
  <text x="235" y="230" class="dg41c-lbl">lung markings seen</text>

  <text x="440" y="22" class="dg41c-hd">Overpenetrated</text>
  <text x="440" y="38" class="dg41c-lbl">too many photons - lungs burned out</text>
  <rect x="440" y="48" width="170" height="150" rx="10" class="dg41c-pan"/>
  <g opacity="1">
    <rect x="510" y="60" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="510" y="92" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="510" y="124" width="30" height="24" rx="4" class="dg41c-vert"/>
    <rect x="510" y="156" width="30" height="24" rx="4" class="dg41c-vert"/>
  </g>
  <g opacity=".1" class="dg41c-mark">
    <path d="M472 74 L492 96 L480 122"/><path d="M492 96 L506 108"/>
    <path d="M578 74 L558 96 L570 122"/><path d="M558 96 L544 108"/>
  </g>
  <rect x="440" y="48" width="170" height="150" rx="10" class="dg41c-hl dg41c-h3" opacity="0"/>
  <text x="440" y="216" class="dg41c-lbl">vertebrae seen too well</text>
  <text x="440" y="230" class="dg41c-lbl">lung parenchyma cannot be assessed</text>

  <line x1="115" y1="256" x2="525" y2="256" class="dg41c-ax"/>
  <circle cx="115" cy="256" r="7" class="dg41c-dot"/>
  <text x="115" y="280" class="dg41c-lbl" text-anchor="middle">few photons</text>
  <text x="320" y="280" class="dg41c-lbl" text-anchor="middle">optimal</text>
  <text x="525" y="280" class="dg41c-lbl" text-anchor="middle">many photons</text>
</svg>`,
};

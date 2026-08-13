/*
 * Animated concept diagrams for lecture summaries.
 *
 * Why a registry instead of inline SVG in the summary markdown:
 * renderMarkdown() runs a chain of line-anchored regex transforms (lines that
 * begin with "-" or "*" become list items, lines with "|" become tables) and
 * finally collapses every newline to a space. Raw multi-line SVG dropped into a
 * summary gets shredded by that chain. Diagrams therefore live here and are
 * pulled in by a ":::diagram <key>:::" directive, which renderMarkdown expands
 * BEFORE those transforms run.
 *
 * Authoring rules (all enforced by scripts/check_diagrams.py):
 *   1. Animation is CSS only. No SMIL (<animate>), no JS timers - CSS keyframes
 *      are what iPad Safari handles reliably, and they pause with the tab.
 *   2. Colors come from the CSS variables below, never hardcoded hex, so every
 *      diagram flips correctly in dark mode.
 *   3. Every <svg> needs a viewBox and NO fixed width/height, so it scales to
 *      the column on a laptop and to a narrow iPad column alike.
 *   4. No hover-only information. Hover may enhance, but anything essential must
 *      be visible at rest, because there is no hover on a touch screen.
 *   5. Respect prefers-reduced-motion: the shared stylesheet freezes all
 *      animation under that query, so a diagram must still read when static.
 *
 * Keys are "<lectureId>-<slug>", e.g. "cv7-filtration-forces".
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// Shared stylesheet - injected once, on first diagram render.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAM_CSS = `
.lecture-diagram {
  --dg-ink:      #2f3542;   /* primary strokes + labels            */
  --dg-muted:    #6b7280;   /* secondary labels                    */
  --dg-surface:  #ffffff;   /* diagram background                  */
  --dg-panel:    #f4f1ea;   /* inset panels / vessel lumen         */
  --dg-line:     #cbd5e1;   /* gridlines, borders                  */
  --dg-accent:   #136f73;   /* CPR block teal - primary highlight  */
  --dg-warm:     #c2410c;   /* "out" / pressure opposing filtration*/
  --dg-cool:     #1d4ed8;   /* "in" / favouring filtration         */
  --dg-good:     #15803d;   /* net / resulting value               */
  margin: 2.25rem 0;
  padding: 1.15rem 1.15rem 0.9rem;
  border: 1px solid var(--dg-line);
  border-radius: 0.9rem;
  background: var(--dg-surface);
  overflow: hidden;
}
html.dark .lecture-diagram {
  --dg-ink:     #e6e3dc;
  --dg-muted:   #9ca3af;
  --dg-surface: #1c1c1f;
  --dg-panel:   #26262b;
  --dg-line:    #3f3f46;
  --dg-accent:  #5fbfc2;
  --dg-warm:    #fb923c;
  --dg-cool:    #7dd3fc;
  --dg-good:    #86efac;
}
.lecture-diagram figcaption {
  margin-top: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--dg-muted);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.lecture-diagram-title {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dg-accent);
  margin-bottom: 0.75rem;
}
.lecture-diagram svg {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  overflow: visible;
}
.lecture-diagram svg text {
  font-family: ui-sans-serif, system-ui, sans-serif;
  fill: var(--dg-ink);
}
/* Rule 5: the diagram must still teach when nothing moves. */
@media (prefers-reduced-motion: reduce) {
  .lecture-diagram * {
    animation: none !important;
    transition: none !important;
  }
}
`;

// --------------------------------------------------------------------------
// cv7 - Starling forces across the glomerular capillary.
// Reference implementation: follow this shape when adding diagrams.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv7-filtration-forces"] = {
  title: "Net filtration pressure",
  caption:
    "Hydrostatic pressure in the glomerular capillary (P_GC, ~60 mmHg) is the only force pushing fluid out. " +
    "Capillary oncotic pressure from albumin (&#960;_GC, ~29) and Bowman's space hydrostatic pressure (P_BS, ~15) " +
    "both push back; Bowman's oncotic pressure is ~0 because protein should not be in the filtrate. " +
    "What is left over is a net +16 mmHg outward, which is why filtration continues along the whole capillary. " +
    "Values are this lecture's (Slide 15).",
  svg: `
<svg viewBox="0 0 620 250" role="img" aria-label="Three arrows across a glomerular capillary wall: outward hydrostatic pressure of 60, inward oncotic pressure of 29 and inward Bowman space pressure of 15, leaving a net outward pressure of 16 millimetres of mercury.">
  <style>
    .dg7-lumen  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg7-wall   { stroke: var(--dg-ink); stroke-width: 2.5; stroke-dasharray: 5 4; opacity: .75; }
    .dg7-lbl    { font-size: 13px; }
    .dg7-val    { font-size: 15px; font-weight: 700; }
    .dg7-sub    { font-size: 11px; fill: var(--dg-muted); }
    .dg7-out    { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg7-in     { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg7-net    { stroke: var(--dg-good); fill: var(--dg-good); }
    .dg7-flow   { stroke-width: 7; stroke-linecap: round; }
    /* Arrow bodies pulse in proportion to the force they represent. */
    .dg7-a1 { animation: dg7pulse 3.4s ease-in-out infinite; }
    .dg7-a2 { animation: dg7pulse 3.4s ease-in-out infinite .35s; }
    .dg7-a3 { animation: dg7pulse 3.4s ease-in-out infinite .7s; }
    @keyframes dg7pulse { 0%,100% { opacity:.45 } 45% { opacity:1 } }
    /* Filtered fluid crossing into Bowman's space. */
    .dg7-drop { animation: dg7cross 3.4s linear infinite; }
    @keyframes dg7cross {
      0%   { transform: translateX(0);     opacity: 0 }
      12%  { opacity: 1 }
      78%  { opacity: 1 }
      100% { transform: translateX(190px); opacity: 0 }
    }
  </style>

  <rect x="20" y="52" width="250" height="132" rx="14" class="dg7-lumen"/>
  <text x="34" y="44" class="dg7-lbl" font-weight="700">Glomerular capillary</text>
  <line x1="286" y1="40" x2="286" y2="200" class="dg7-wall"/>
  <text x="300" y="44" class="dg7-lbl" font-weight="700">Bowman's space</text>

  <g class="dg7-drop">
    <circle cx="120" cy="118" r="6" fill="var(--dg-accent)" opacity=".9"/>
    <circle cx="96"  cy="96"  r="4" fill="var(--dg-accent)" opacity=".6"/>
    <circle cx="96"  cy="140" r="4" fill="var(--dg-accent)" opacity=".6"/>
  </g>

  <g class="dg7-a1">
    <line x1="150" y1="82" x2="266" y2="82" class="dg7-out dg7-flow"/>
    <polygon points="266,72 288,82 266,92" class="dg7-out"/>
    <text x="152" y="72" class="dg7-val dg7-out">P_GC 60</text>
  </g>
  <g class="dg7-a2">
    <line x1="266" y1="126" x2="178" y2="126" class="dg7-in dg7-flow"/>
    <polygon points="178,116 156,126 178,136" class="dg7-in"/>
    <text x="180" y="116" class="dg7-val dg7-in">&#960;_GC 29</text>
  </g>
  <g class="dg7-a3">
    <line x1="266" y1="170" x2="212" y2="170" class="dg7-in dg7-flow"/>
    <polygon points="212,160 190,170 212,180" class="dg7-in"/>
    <text x="214" y="160" class="dg7-val dg7-in">P_BS 15</text>
  </g>

  <line x1="330" y1="112" x2="430" y2="112" stroke="var(--dg-line)" stroke-width="1.5"/>
  <text x="330" y="104" class="dg7-sub">60 &#8722; 15 &#8722; 29</text>
  <text x="330" y="140" class="dg7-val dg7-net">NFP = +16 mmHg</text>
  <text x="330" y="162" class="dg7-sub">outward, along the whole capillary</text>

  <g class="dg7-a1">
    <line x1="452" y1="112" x2="556" y2="112" class="dg7-net dg7-flow"/>
    <polygon points="556,100 582,112 556,124" class="dg7-net"/>
  </g>
  <text x="452" y="140" class="dg7-sub">filtrate</text>
</svg>`,
};

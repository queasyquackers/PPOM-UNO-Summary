window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv67 - Introduction to Clinical Nutrition.
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv67-glycemic-curve"] = {
  title: "Glycemic index: spike and crash vs smooth curve",
  caption:
    "Both meals are carbohydrate, so both raise blood glucose. Simple carbohydrates (monosaccharides absorbed directly, " +
    "disaccharides after one split) are small molecules that raise glucose rapidly and then let it drop just as " +
    "rapidly - the spike and crash of a high glycemic index. Complex carbohydrates are larger molecules that take longer to break down, so the rise " +
    "is slower and the curve stays smooth - a low glycemic index. This is the curve the lecturer wants for patients with " +
    "metabolic syndrome, prediabetes and diabetes (Slide 52). The shapes are qualitative; the lecture gives no glucose values.",
  svg: `
<svg viewBox="0 0 620 290" role="img" aria-label="Blood glucose plotted against time after a meal. A high glycemic index curve from simple carbohydrates rises steeply to a tall peak within the first hour, then drops just as rapidly in a crash before leveling off. A low glycemic index curve from complex carbohydrates rises slowly to a lower, rounded peak and returns gradually to baseline over two hours.">
  <style>
    .dg67a-axis  { stroke: var(--dg-ink); stroke-width: 1.8; fill: none; }
    .dg67a-base  { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 5 5; fill: none; }
    .dg67a-lbl   { font-size: 12px; }
    .dg67a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg67a-hi    { stroke: var(--dg-warm); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg67a-lo    { stroke: var(--dg-good); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg67a-hiT   { font-size: 13px; font-weight: 700; fill: var(--dg-warm); }
    .dg67a-loT   { font-size: 13px; font-weight: 700; fill: var(--dg-good); }
    .dg67a-draw  {
      stroke-dasharray: 100;
      stroke-dashoffset: 0;
      animation: dg67aDraw 7s ease-in-out infinite;
    }
    .dg67a-draw2 {
      stroke-dasharray: 100;
      stroke-dashoffset: 0;
      animation: dg67aDraw 7s ease-in-out infinite .5s;
    }
    @keyframes dg67aDraw {
      0%        { stroke-dashoffset: 100 }
      55%, 90%  { stroke-dashoffset: 0 }
      100%      { stroke-dashoffset: 100 }
    }
    .dg67a-crash { fill: var(--dg-warm); animation: dg67aPulse 7s ease-in-out infinite; }
    @keyframes dg67aPulse {
      0%, 35%   { opacity: 0 }
      45%, 90%  { opacity: 1 }
      100%      { opacity: 0 }
    }
  </style>

  <line x1="70" y1="30" x2="70" y2="240" class="dg67a-axis"/>
  <line x1="70" y1="240" x2="600" y2="240" class="dg67a-axis"/>
  <text x="20" y="140" class="dg67a-lbl" transform="rotate(-90 20 140)" text-anchor="middle">Blood glucose</text>
  <text x="70" y="262" class="dg67a-sub" text-anchor="middle">Meal</text>
  <text x="300" y="262" class="dg67a-sub" text-anchor="middle">1 hour</text>
  <text x="560" y="262" class="dg67a-sub" text-anchor="middle">2 hours</text>
  <text x="335" y="282" class="dg67a-sub" text-anchor="middle">Time after eating</text>

  <line x1="70" y1="190" x2="600" y2="190" class="dg67a-base"/>
  <text x="598" y="184" class="dg67a-sub" text-anchor="end">starting level</text>

  <path pathLength="100" class="dg67a-hi dg67a-draw"
        d="M70,190 C110,190 130,52 175,52 C220,52 235,222 285,222 C335,222 380,196 590,192"/>
  <path pathLength="100" class="dg67a-lo dg67a-draw2"
        d="M70,190 C130,190 170,132 240,128 C320,124 400,138 470,160 C520,176 555,188 590,190"/>

  <circle cx="285" cy="222" r="6" class="dg67a-crash"/>
  <text x="274" y="236" class="dg67a-sub" text-anchor="end">the crash</text>

  <text x="200" y="38" class="dg67a-hiT">Simple CHO: high glycemic index</text>
  <text x="215" y="56" class="dg67a-sub">small molecules, rapid spike then rapid fall</text>
  <text x="360" y="92" class="dg67a-loT">Complex CHO: low glycemic index</text>
  <text x="360" y="108" class="dg67a-sub">larger molecules, slower and smoother rise</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv67-surplus-year"] = {
  title: "The 100-calorie surplus over one year",
  caption:
    "An extra 100 kcal a day looks trivial - about two-thirds of a can of regular soda, 2 tablespoons of maple syrup, or " +
    "1 tablespoon of butter - but it is eaten every day. The bars fill month by month to the lecture's figure of about " +
    "10 pounds of weight gain per year (Slides 58-59). The takeaway is the lecture's energy-balance point: stay within daily " +
    "calorie needs, because small surpluses compound.",
  svg: `
<svg viewBox="0 0 620 280" role="img" aria-label="A bar chart of cumulative weight gain across twelve months from eating 100 extra calories every day. The bars climb steadily from near zero in month one to about ten pounds in month twelve.">
  <style>
    .dg67b-axis  { stroke: var(--dg-ink); stroke-width: 1.8; fill: none; }
    .dg67b-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 5; }
    .dg67b-bar   { fill: var(--dg-accent); opacity: .85; }
    .dg67b-lbl   { font-size: 12px; }
    .dg67b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg67b-big   { font-size: 15px; font-weight: 700; fill: var(--dg-warm); }
    .dg67b-chip  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg67b-cover {
      fill: var(--dg-surface);
      transform-box: fill-box;
      transform-origin: right center;
      transform: scaleX(0);
      animation: dg67bReveal 8s linear infinite;
    }
    @keyframes dg67bReveal {
      0%        { transform: scaleX(1) }
      70%, 100% { transform: scaleX(0) }
    }
    .dg67b-end { opacity: 1; animation: dg67bEnd 8s ease-in-out infinite; }
    @keyframes dg67bEnd {
      0%, 66%   { opacity: 0 }
      74%, 100% { opacity: 1 }
    }
    .dg67b-tick { animation: dg67bTick 1s ease-in-out infinite; }
    @keyframes dg67bTick { 0%, 100% { opacity: .55 } 50% { opacity: 1 } }
  </style>

  <rect x="18" y="26" width="118" height="58" rx="10" class="dg67b-chip"/>
  <text x="77" y="50" class="dg67b-big dg67b-tick" text-anchor="middle">+100 kcal</text>
  <text x="77" y="70" class="dg67b-sub" text-anchor="middle">every day</text>

  <line x1="170" y1="30" x2="170" y2="230" class="dg67b-axis"/>
  <line x1="170" y1="230" x2="600" y2="230" class="dg67b-axis"/>
  <line x1="170" y1="130" x2="600" y2="130" class="dg67b-grid"/>
  <line x1="170" y1="50"  x2="600" y2="50"  class="dg67b-grid"/>
  <text x="160" y="234" class="dg67b-sub" text-anchor="end">0 lb</text>
  <text x="160" y="134" class="dg67b-sub" text-anchor="end">5 lb</text>
  <text x="160" y="54"  class="dg67b-sub" text-anchor="end">10 lb</text>

  <rect x="182" y="215" width="24" height="15"  class="dg67b-bar"/>
  <rect x="216" y="200" width="24" height="30"  class="dg67b-bar"/>
  <rect x="250" y="185" width="24" height="45"  class="dg67b-bar"/>
  <rect x="284" y="170" width="24" height="60"  class="dg67b-bar"/>
  <rect x="318" y="155" width="24" height="75"  class="dg67b-bar"/>
  <rect x="352" y="140" width="24" height="90"  class="dg67b-bar"/>
  <rect x="386" y="125" width="24" height="105" class="dg67b-bar"/>
  <rect x="420" y="110" width="24" height="120" class="dg67b-bar"/>
  <rect x="454" y="95"  width="24" height="135" class="dg67b-bar"/>
  <rect x="488" y="80"  width="24" height="150" class="dg67b-bar"/>
  <rect x="522" y="65"  width="24" height="165" class="dg67b-bar"/>
  <rect x="556" y="50"  width="24" height="180" class="dg67b-bar"/>

  <rect x="176" y="40" width="414" height="189" class="dg67b-cover"/>

  <text x="194" y="250" class="dg67b-sub" text-anchor="middle">1</text>
  <text x="364" y="250" class="dg67b-sub" text-anchor="middle">6</text>
  <text x="568" y="250" class="dg67b-sub" text-anchor="middle">12</text>
  <text x="385" y="270" class="dg67b-lbl" text-anchor="middle">Months of the same daily surplus</text>

  <g class="dg67b-end">
    <text x="548" y="36" class="dg67b-big" text-anchor="end">about 10 lb in a year</text>
  </g>
</svg>`,
};

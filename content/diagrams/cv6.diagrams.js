window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv6-renal-vascular-circuit"] = {
  title: "Arteriole &#8594; capillary &#8594; arteriole",
  caption:
    "One bolus of blood makes the whole trip: renal artery &#8594; arcuate (skirting the corticomedullary junction) &#8594; " +
    "interlobular &#8594; afferent arteriole &#8594; glomerulus &#8594; efferent arteriole &#8594; peritubular capillaries. " +
    "Watch the bolus slow at each of the two high-resistance arterioles (their calibre narrows as it passes) and crawl through the " +
    "low-pressure peritubular bed. The track below shares the same left-to-right axis: pressure stays high through the glomerulus " +
    "&#8212; that is the pressure that pushes ultrafiltrate out &#8212; then falls across the efferent arteriole, so the very next " +
    "capillary bed is a low-pressure one that reabsorbs. This lecture gives no mmHg values (CV7 does), so the pressure track is " +
    "deliberately unnumbered and relative. The thin branch at the arcuate carries the lecture's 10% into the medulla as vasa recta, " +
    "leaving it relatively anoxic &#8212; the set-up for erythropoietin.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A single bolus of blood travels from the renal artery through the arcuate and interlobular arteries, the high-resistance afferent arteriole, the glomerular capillary tuft where ultrafiltrate leaves into Bowman's space, the second high-resistance efferent arteriole, and finally into the low-pressure peritubular capillaries around a tubule. A pressure track underneath shares the same horizontal axis and steps down at each arteriole while staying high across the glomerulus. A thin branch at the arcuate artery carries ten percent of the flow into the medulla as hairpin vasa recta.">
  <style>
    .dg6a-lbl  { font-size: 10px; fill: var(--dg-muted); }
    .dg6a-tiny { font-size: 9px; fill: var(--dg-muted); }
    .dg6a-key  { font-size: 10px; font-weight: 700; fill: var(--dg-ink); }
    .dg6a-vessel { fill: none; stroke: var(--dg-warm); stroke-linecap: round; stroke-linejoin: round; }
    .dg6a-big  { stroke-width: 14; }
    .dg6a-arc  { stroke-width: 11; }
    .dg6a-il   { stroke-width: 9; }
    .dg6a-aa   { stroke-width: 7; animation: dg6aAA 13s ease-in-out infinite; }
    .dg6a-ea   { stroke-width: 6; animation: dg6aEA 13s ease-in-out infinite; }
    .dg6a-tuft { fill: none; stroke: var(--dg-accent); stroke-width: 4.5; stroke-linecap: round; }
    .dg6a-cap  { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-linecap: round; }
    .dg6a-vasa { fill: none; stroke: var(--dg-cool); stroke-width: 2; stroke-linecap: round; }
    .dg6a-dash { fill: none; stroke: var(--dg-line); stroke-width: 1.2; stroke-dasharray: 5 4; }
    .dg6a-mark { fill: var(--dg-good); }
    .dg6a-blood { fill: var(--dg-warm); }
    .dg6a-bolus { animation: dg6aRun 13s linear infinite; }
    .dg6a-press { animation: dg6aPress 13s linear infinite; }
    .dg6a-trick { animation: dg6aTrickle 13s linear infinite; }
    .dg6a-f1 { animation: dg6aFilt1 13s linear infinite; }
    .dg6a-f2 { animation: dg6aFilt2 13s linear infinite; }
    .dg6a-f3 { animation: dg6aFilt3 13s linear infinite; }
    @keyframes dg6aAA {
      0%, 16% { stroke-width: 7 }
      30%     { stroke-width: 3.6 }
      46%     { stroke-width: 7 }
      100%    { stroke-width: 7 }
    }
    @keyframes dg6aEA {
      0%, 54% { stroke-width: 6 }
      70%     { stroke-width: 3 }
      86%     { stroke-width: 6 }
      100%    { stroke-width: 6 }
    }
    @keyframes dg6aRun {
      0%   { transform: translate(26px, 76px);  opacity: 0 }
      3%   { opacity: 1 }
      5%   { transform: translate(92px, 76px) }
      8%   { transform: translate(112px, 104px) }
      12%  { transform: translate(152px, 104px) }
      16%  { transform: translate(186px, 76px) }
      20%  { transform: translate(232px, 76px) }
      34%  { transform: translate(286px, 76px) }
      38%  { transform: translate(300px, 76px) }
      54%  { transform: translate(372px, 76px) }
      58%  { transform: translate(392px, 76px) }
      72%  { transform: translate(436px, 76px) }
      78%  { transform: translate(462px, 88px) }
      96%  { opacity: 1 }
      100% { transform: translate(556px, 88px); opacity: 0 }
    }
    @keyframes dg6aPress {
      0%   { transform: translate(26px, 200px); opacity: 0 }
      3%   { opacity: 1 }
      5%   { transform: translate(92px, 200px) }
      8%   { transform: translate(112px, 202px) }
      12%  { transform: translate(152px, 204px) }
      16%  { transform: translate(186px, 206px) }
      20%  { transform: translate(232px, 208px) }
      34%  { transform: translate(286px, 232px) }
      38%  { transform: translate(300px, 234px) }
      54%  { transform: translate(372px, 248px) }
      58%  { transform: translate(392px, 250px) }
      72%  { transform: translate(436px, 272px) }
      78%  { transform: translate(462px, 274px) }
      96%  { opacity: 1 }
      100% { transform: translate(556px, 276px); opacity: 0 }
    }
    @keyframes dg6aTrickle {
      0%, 10% { transform: translate(152px, 104px); opacity: 0 }
      14%     { opacity: .9 }
      40%     { transform: translate(150px, 134px) }
      55%     { transform: translate(164px, 142px) }
      92%     { transform: translate(170px, 112px); opacity: .9 }
      100%    { transform: translate(170px, 108px); opacity: 0 }
    }
    @keyframes dg6aFilt1 {
      0%, 38% { opacity: 0; transform: translate(0, 0) }
      44%     { opacity: .95 }
      54%     { opacity: 0; transform: translate(-4px, -22px) }
      100%    { opacity: 0; transform: translate(-4px, -22px) }
    }
    @keyframes dg6aFilt2 {
      0%, 42% { opacity: 0; transform: translate(0, 0) }
      48%     { opacity: .95 }
      58%     { opacity: 0; transform: translate(2px, -24px) }
      100%    { opacity: 0; transform: translate(2px, -24px) }
    }
    @keyframes dg6aFilt3 {
      0%, 46% { opacity: 0; transform: translate(0, 0) }
      52%     { opacity: .95 }
      62%     { opacity: 0; transform: translate(6px, -22px) }
      100%    { opacity: 0; transform: translate(6px, -22px) }
    }
  </style>

  <text x="14" y="16" class="dg6a-lbl">CORTEX &#183; 90% of renal blood flow &#183; superficial glomeruli</text>
  <text x="14" y="30" class="dg6a-tiny">renal artery in &#8212; 20&#8211;25% of the cardiac output</text>

  <line x1="8" y1="104" x2="300" y2="104" class="dg6a-dash"/>
  <text x="200" y="99" class="dg6a-tiny">corticomedullary junction</text>

  <path class="dg6a-vasa" d="M152,104 L150,130 Q150,142 160,142 Q170,142 170,130 L170,110"/>
  <text x="124" y="122" class="dg6a-key">10%</text>
  <text x="182" y="124" class="dg6a-lbl">MEDULLA &#183; 10% of flow</text>
  <text x="182" y="137" class="dg6a-tiny">juxtamedullary glomeruli &#8594; vasa recta (hairpin)</text>
  <text x="182" y="150" class="dg6a-tiny">relatively anoxic &#8212; the set-up for erythropoietin</text>

  <path class="dg6a-vessel dg6a-big" d="M26,76 L92,76"/>
  <path class="dg6a-vessel dg6a-arc" d="M92,76 L112,104 L152,104"/>
  <path class="dg6a-vessel dg6a-il"  d="M152,104 L186,76 L232,76"/>
  <path class="dg6a-vessel dg6a-aa"  d="M232,76 L306,76"/>
  <path class="dg6a-vessel dg6a-ea"  d="M366,76 L436,76"/>
  <text x="196" y="68" class="dg6a-key">90%</text>
  <text x="259" y="56" text-anchor="middle" class="dg6a-tiny">1st high-resistance arteriole</text>
  <text x="404" y="56" class="dg6a-tiny">2nd high resistance</text>

  <circle cx="336" cy="76" r="30" class="dg6a-dash"/>
  <path class="dg6a-tuft" d="M306,76 C312,52 336,48 344,62 C352,76 318,86 330,98 C342,110 366,98 366,76"/>

  <g class="dg6a-f1"><circle cx="322" cy="54" r="3.2" fill="var(--dg-accent)"/></g>
  <g class="dg6a-f2"><circle cx="336" cy="50" r="3.2" fill="var(--dg-accent)"/></g>
  <g class="dg6a-f3"><circle cx="350" cy="54" r="3.2" fill="var(--dg-accent)"/></g>
  <path d="M356,50 L370,40" stroke="var(--dg-accent)" stroke-width="1.4" fill="none"/>
  <text x="374" y="40" class="dg6a-tiny">ultrafiltrate out into Bowman's space</text>

  <rect x="456" y="96" width="146" height="26" rx="13" fill="var(--dg-panel)" stroke="var(--dg-line)"/>
  <text x="529" y="112" text-anchor="middle" class="dg6a-tiny">tubule</text>
  <path class="dg6a-cap" d="M436,76 C448,78 452,82 456,88 Q476,80 496,88 Q516,96 536,88 Q556,80 576,88 Q588,92 598,98"/>
  <path class="dg6a-cap" d="M468,130 Q488,138 508,130 Q528,122 548,130 Q568,138 588,130"/>
  <path d="M500,96 L500,90" stroke="var(--dg-cool)" stroke-width="1.6"/>
  <polygon points="497,91 503,91 500,85" fill="var(--dg-cool)"/>
  <path d="M548,96 L548,90" stroke="var(--dg-cool)" stroke-width="1.6"/>
  <polygon points="545,91 551,91 548,85" fill="var(--dg-cool)"/>
  <text x="444" y="152" class="dg6a-tiny">peritubular capillaries (mostly cortical)</text>
  <text x="444" y="164" class="dg6a-tiny">low pressure &#183; reabsorption</text>

  <g class="dg6a-trick" transform="translate(152,104)"><circle r="3.4" class="dg6a-blood"/></g>
  <g class="dg6a-bolus" transform="translate(26,76)"><circle r="6.5" class="dg6a-blood"/></g>

  <line x1="26" y1="286" x2="610" y2="286" stroke="var(--dg-line)" stroke-width="1.2"/>
  <line x1="26" y1="190" x2="610" y2="190" class="dg6a-dash"/>
  <text x="26" y="184" class="dg6a-tiny">pressure along the circuit (relative &#8212; this lecture gives no mmHg values)</text>
  <polygon points="26,200 92,200 112,202 152,204 186,206 232,208 286,232 300,234 372,248 392,250 436,272 462,274 604,277 604,286 26,286"
           fill="var(--dg-warm)" fill-opacity=".12"/>
  <polyline points="26,200 92,200 112,202 152,204 186,206 232,208 286,232 300,234 372,248 392,250 436,272 462,274 604,277"
            fill="none" stroke="var(--dg-warm)" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M259,210 L259,228" stroke="var(--dg-ink)" stroke-width="1.2"/>
  <polygon points="256,227 262,227 259,233" fill="var(--dg-ink)"/>
  <path d="M404,252 L404,268" stroke="var(--dg-ink)" stroke-width="1.2"/>
  <polygon points="401,267 407,267 404,273" fill="var(--dg-ink)"/>
  <text x="40" y="224" class="dg6a-tiny">arterial</text>
  <text x="300" y="226" class="dg6a-tiny">still high &#8212; this is the pressure that filters</text>
  <text x="250" y="264" class="dg6a-tiny">each step down = one high-resistance arteriole</text>
  <text x="472" y="266" class="dg6a-tiny">low &#8212; now it reabsorbs</text>
  <g class="dg6a-press" transform="translate(26,200)"><circle r="5" class="dg6a-mark"/></g>

  <text x="259" y="300" text-anchor="middle" class="dg6a-tiny">afferent arteriole</text>
  <text x="401" y="300" text-anchor="middle" class="dg6a-tiny">efferent arteriole</text>
  <text x="125" y="312" text-anchor="middle" class="dg6a-tiny">renal artery &#183; arcuate &#183; interlobular</text>
  <text x="336" y="312" text-anchor="middle" class="dg6a-tiny">glomerular capillary</text>
  <text x="520" y="312" text-anchor="middle" class="dg6a-tiny">peritubular capillaries</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv6-nephron-transit"] = {
  title: "One volume of filtrate down the tubule",
  caption:
    "The nephron unrolled, with one packet of ultrafiltrate travelling it: dots are water, squares are Na+/Cl&#8722;, " +
    "the leading marker is glucose. In the proximal tubule water and solute leave together &#8212; 67% of the filtered " +
    "water, ALL glucose, amino acids and protein, most bicarbonate &#8212; so the packet shrinks without changing its " +
    "concentration (isosmotic). The thin descending limb takes ~15% more water and no solute, so what is left is " +
    "concentrated by the time it reaches the thick segment. The thin ascending limb and the TAL then remove NaCl while " +
    "water stays put &#8212; that is what makes the TAL the flip point, and it leaves the fluid dilute; the DCT adds no " +
    "water either. Only in the collecting duct does water leave again, through hormone-gated aquaporins. Bar height = " +
    "share of the filtered water still in the tubule (100 &#8722; 67 &#8722; 15 = 18%); bar shade = how concentrated it " +
    "is. The lecture gives no percentage for NaCl removal in the thin ascending limb or TAL and no osmolality values " +
    "anywhere, so those steps and the shading are qualitative.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="An unrolled nephron tubule with a packet of filtrate travelling from the proximal tubule to the collecting duct. Water dots and salt squares leave together in the proximal tubule, water alone leaves in the thin descending limb, salt alone leaves in the thin and thick ascending limbs, no water leaves the distal tubule, and water leaves the collecting duct through a hormone-gated aquaporin gate. Bars underneath show the share of filtered water still in the tubule: one hundred percent, thirty-three percent after the proximal tubule, eighteen percent from the thin descending limb onward, and a variable amount in the collecting duct.">
  <style>
    .dg6b-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg6b-name { font-size: 10px; font-weight: 700; fill: var(--dg-ink); }
    .dg6b-wall { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg6b-div  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg6b-arrow { stroke: var(--dg-line); stroke-width: 1.4; fill: none; }
    .dg6b-head  { fill: var(--dg-line); }
    .dg6b-water { fill: var(--dg-cool); }
    .dg6b-salt  { fill: var(--dg-accent); }
    .dg6b-bar   { fill: var(--dg-cool); stroke: var(--dg-cool); stroke-width: 1.2; }
    .dg6b-pack  { animation: dg6bRun 14s linear infinite; }
    .dg6b-rise  { animation: dg6bRise 14s linear infinite; }
    .dg6b-w1 { animation: dg6bW1 14s linear infinite; }
    .dg6b-w2 { animation: dg6bW2 14s linear infinite; }
    .dg6b-w3 { animation: dg6bW3 14s linear infinite; }
    .dg6b-s1 { animation: dg6bS1 14s linear infinite; }
    .dg6b-s2 { animation: dg6bS2 14s linear infinite; }
    .dg6b-s3 { animation: dg6bS3 14s linear infinite; }
    .dg6b-s4 { animation: dg6bS4 14s linear infinite; }
    .dg6b-g  { animation: dg6bG  14s linear infinite; }
    .dg6b-gl { animation: dg6bGateL 14s ease-in-out infinite; }
    .dg6b-gr { animation: dg6bGateR 14s ease-in-out infinite; }
    .dg6b-caret { animation: dg6bCaret 14s linear infinite; }
    @keyframes dg6bRun {
      0%   { transform: translateX(126px) }
      30%  { transform: translateX(200px) }
      48%  { transform: translateX(290px) }
      60%  { transform: translateX(360px) }
      74%  { transform: translateX(440px) }
      82%  { transform: translateX(500px) }
      100% { transform: translateX(604px) }
    }
    @keyframes dg6bRise {
      0%       { opacity: 0; transform: translateY(0) }
      10%      { opacity: 1 }
      18%      { opacity: 1; transform: translateY(-24px) }
      22%,100% { opacity: 0; transform: translateY(-28px) }
    }
    @keyframes dg6bW1 { 0%, 8%  { opacity: 1 } 11%, 100% { opacity: 0 } }
    @keyframes dg6bW2 { 0%, 22% { opacity: 1 } 25%, 100% { opacity: 0 } }
    @keyframes dg6bW3 { 0%, 38% { opacity: 1 } 41%, 100% { opacity: 0 } }
    @keyframes dg6bS1 { 0%, 11% { opacity: 1 } 14%, 100% { opacity: 0 } }
    @keyframes dg6bS2 { 0%, 24% { opacity: 1 } 27%, 100% { opacity: 0 } }
    @keyframes dg6bS3 { 0%, 53% { opacity: 1 } 56%, 100% { opacity: 0 } }
    @keyframes dg6bS4 { 0%, 67% { opacity: 1 } 70%, 100% { opacity: 0 } }
    @keyframes dg6bG  { 0%, 19% { opacity: 1 } 23%, 100% { opacity: 0 } }
    @keyframes dg6bGateL { 0%, 82% { transform: translateX(0) } 90%, 100% { transform: translateX(-4px) } }
    @keyframes dg6bGateR { 0%, 82% { transform: translateX(0) } 90%, 100% { transform: translateX(4px) } }
    @keyframes dg6bCaret {
      0%   { transform: translateX(130px) }
      30%  { transform: translateX(245px) }
      48%  { transform: translateX(245px) }
      55%  { transform: translateX(400px) }
      82%  { transform: translateX(400px) }
      88%  { transform: translateX(550px) }
      100% { transform: translateX(550px) }
    }
  </style>

  <circle cx="24" cy="10" r="4" class="dg6b-water"/>
  <text x="32" y="14" class="dg6b-tiny">water</text>
  <rect x="74" y="6" width="7" height="7" class="dg6b-salt"/>
  <text x="86" y="14" class="dg6b-tiny">Na+ / Cl&#8722;</text>
  <circle cx="146" cy="10" r="4.5" fill="var(--dg-warm)"/>
  <text x="155" y="14" class="dg6b-tiny">glucose</text>
  <text x="214" y="14" class="dg6b-tiny">&#8593; = reabsorbed into the interstitium / peritubular capillary</text>

  <text x="130" y="30" text-anchor="middle" class="dg6b-tiny">67% of filtered water</text>
  <text x="400" y="30" text-anchor="middle" class="dg6b-tiny">rest of HCO3&#8722;</text>

  <text x="130" y="42" text-anchor="middle" class="dg6b-tiny">water + Na+/Cl&#8722; together (isosmotic)</text>
  <text x="130" y="54" text-anchor="middle" class="dg6b-tiny">ALL glucose, AA, protein &#183; most HCO3&#8722;</text>
  <text x="245" y="42" text-anchor="middle" class="dg6b-tiny">water only</text>
  <text x="245" y="54" text-anchor="middle" class="dg6b-tiny">~15% (AQP)</text>
  <text x="325" y="42" text-anchor="middle" class="dg6b-tiny">NaCl only</text>
  <text x="325" y="54" text-anchor="middle" class="dg6b-tiny">passive</text>
  <text x="400" y="42" text-anchor="middle" class="dg6b-tiny">NaCl via transporters</text>
  <text x="400" y="54" text-anchor="middle" class="dg6b-tiny">Mg++/Ca++ paracell.</text>
  <text x="470" y="42" text-anchor="middle" class="dg6b-tiny">~8% NaCl</text>
  <text x="470" y="54" text-anchor="middle" class="dg6b-tiny">K+/H+ secreted</text>
  <text x="550" y="42" text-anchor="middle" class="dg6b-tiny">water via aquaporins</text>
  <text x="550" y="54" text-anchor="middle" class="dg6b-tiny">hormone-gated</text>

  <path class="dg6b-arrow" d="M122,94 L122,70"/><polygon points="118,71 126,71 122,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M138,94 L138,70"/><polygon points="134,71 142,71 138,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M245,94 L245,70"/><polygon points="241,71 249,71 245,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M325,94 L325,70"/><polygon points="321,71 329,71 325,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M400,94 L400,70"/><polygon points="396,71 404,71 400,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M470,94 L470,70"/><polygon points="466,71 474,71 470,63" class="dg6b-head"/>
  <path class="dg6b-arrow" d="M550,94 L550,70"/><polygon points="546,71 554,71 550,63" class="dg6b-head"/>
  <rect class="dg6b-gl" x="536" y="86" width="11" height="3.4" fill="var(--dg-accent)"/>
  <rect class="dg6b-gr" x="553" y="86" width="11" height="3.4" fill="var(--dg-accent)"/>
  <text x="578" y="90" class="dg6b-tiny">AQP</text>

  <g class="dg6b-rise" opacity="0" style="animation-delay:-0.84s">
    <circle cx="122" cy="96" r="4" class="dg6b-water"/>
    <rect x="135" y="93" width="6" height="6" class="dg6b-salt"/>
  </g>
  <g class="dg6b-rise" opacity="0" style="animation-delay:-4.48s">
    <circle cx="245" cy="96" r="4" class="dg6b-water"/>
  </g>
  <g class="dg6b-rise" opacity="0" style="animation-delay:-6.86s">
    <rect x="322" y="93" width="6" height="6" class="dg6b-salt"/>
  </g>
  <g class="dg6b-rise" opacity="0" style="animation-delay:-8.68s">
    <rect x="397" y="93" width="6" height="6" class="dg6b-salt"/>
  </g>
  <g class="dg6b-rise" opacity="0" style="animation-delay:-10.5s">
    <rect x="467" y="93" width="6" height="6" class="dg6b-salt"/>
  </g>
  <g class="dg6b-rise" opacity="0" style="animation-delay:-11.9s">
    <circle cx="550" cy="96" r="4" class="dg6b-water"/>
  </g>

  <path class="dg6b-wall" d="M58,100 L34,100 Q20,100 20,112 Q20,124 34,124 L58,124"/>
  <text x="18" y="90" class="dg6b-tiny">ultrafiltrate</text>
  <rect x="60" y="100" width="540" height="34" rx="4" class="dg6b-wall"/>
  <line x1="200" y1="100" x2="200" y2="134" class="dg6b-div"/>
  <line x1="290" y1="100" x2="290" y2="134" class="dg6b-div"/>
  <line x1="360" y1="100" x2="360" y2="134" class="dg6b-div"/>
  <line x1="440" y1="100" x2="440" y2="134" class="dg6b-div"/>
  <line x1="500" y1="100" x2="500" y2="134" class="dg6b-div"/>
  <path class="dg6b-arrow" d="M600,117 L622,117"/><polygon points="621,113 631,117 621,121" class="dg6b-head"/>
  <text x="604" y="96" class="dg6b-tiny">urine</text>

  <g class="dg6b-pack" transform="translate(126,0)">
    <circle class="dg6b-g"  cx="6"   cy="117" r="4.5" fill="var(--dg-warm)"/>
    <circle cx="0"   cy="108" r="3.2" class="dg6b-water"/>
    <circle cx="-6"  cy="108" r="3.2" class="dg6b-water"/>
    <circle class="dg6b-w3" cx="-12" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w3" cx="-18" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w2" cx="-24" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w2" cx="-30" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w2" cx="-36" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w2" cx="-42" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w1" cx="-48" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w1" cx="-54" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w1" cx="-60" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <circle class="dg6b-w1" cx="-66" cy="108" r="3.2" fill="var(--dg-cool)"/>
    <rect x="-4"  y="121" width="5" height="5" class="dg6b-salt"/>
    <rect class="dg6b-s4" x="-12" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s3" x="-20" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s2" x="-28" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s2" x="-36" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s1" x="-44" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s1" x="-52" y="121" width="5" height="5" fill="var(--dg-accent)"/>
    <rect class="dg6b-s1" x="-60" y="121" width="5" height="5" fill="var(--dg-accent)"/>
  </g>

  <text x="130" y="152" text-anchor="middle" class="dg6b-name">proximal tubule</text>
  <text x="245" y="152" text-anchor="middle" class="dg6b-name">thin descending</text>
  <text x="325" y="152" text-anchor="middle" class="dg6b-name">thin ascending</text>
  <text x="400" y="152" text-anchor="middle" class="dg6b-name">thick ascending</text>
  <text x="470" y="152" text-anchor="middle" class="dg6b-name">DCT</text>
  <text x="550" y="152" text-anchor="middle" class="dg6b-name">collecting duct</text>
  <text x="130" y="165" text-anchor="middle" class="dg6b-tiny">water: free (AQP1)</text>
  <text x="245" y="165" text-anchor="middle" class="dg6b-tiny">water: 15% (AQP)</text>
  <text x="325" y="165" text-anchor="middle" class="dg6b-tiny">water: none</text>
  <text x="400" y="165" text-anchor="middle" class="dg6b-tiny">water: NONE (TAL)</text>
  <text x="470" y="165" text-anchor="middle" class="dg6b-tiny">water: none</text>
  <text x="550" y="165" text-anchor="middle" class="dg6b-tiny">water: aquaporins, hormonal</text>

  <text x="130" y="180" text-anchor="middle" class="dg6b-tiny">isosmotic</text>
  <text x="245" y="180" text-anchor="middle" class="dg6b-tiny">concentrated</text>
  <text x="400" y="180" text-anchor="middle" class="dg6b-tiny">dilute</text>
  <text x="550" y="180" text-anchor="middle" class="dg6b-tiny">hormone-dependent</text>
  <g class="dg6b-caret" transform="translate(130,0)"><polygon points="-5,186 5,186 0,192" fill="var(--dg-good)"/></g>

  <rect x="22"  y="200" width="34"  height="86" class="dg6b-bar" fill-opacity=".35"/>
  <rect x="68"  y="258" width="124" height="28" class="dg6b-bar" fill-opacity=".35"/>
  <rect x="208" y="270" width="74"  height="16" class="dg6b-bar" fill-opacity=".9"/>
  <rect x="298" y="270" width="54"  height="16" class="dg6b-bar" fill-opacity=".65"/>
  <rect x="368" y="270" width="64"  height="16" class="dg6b-bar" fill-opacity=".3"/>
  <rect x="448" y="270" width="44"  height="16" class="dg6b-bar" fill-opacity=".3"/>
  <rect x="508" y="270" width="84"  height="16" fill="var(--dg-cool)" fill-opacity=".15" stroke="var(--dg-cool)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="18" y1="286" x2="616" y2="286" stroke="var(--dg-line)" stroke-width="1.2"/>
  <text x="39"  y="194" text-anchor="middle" class="dg6b-tiny">100%</text>
  <text x="130" y="252" text-anchor="middle" class="dg6b-tiny">33%</text>
  <text x="245" y="264" text-anchor="middle" class="dg6b-tiny">18%</text>
  <text x="325" y="264" text-anchor="middle" class="dg6b-tiny">18%</text>
  <text x="400" y="264" text-anchor="middle" class="dg6b-tiny">18%</text>
  <text x="470" y="264" text-anchor="middle" class="dg6b-tiny">18%</text>
  <text x="550" y="264" text-anchor="middle" class="dg6b-tiny">variable</text>

  <text x="18" y="300" class="dg6b-tiny">bar height = share of the filtered water still in the tubule; darker bar = more concentrated fluid</text>
  <text x="18" y="312" class="dg6b-tiny">case link: the proximal tubule reabsorbs ALL filtered glucose &#8212; glycosuria with a normal plasma glucose puts the lesion here</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv6-filtration-barrier-selectivity"] = {
  title: "Size filter, then charge filter",
  caption:
    "A mixed stream leaves the capillary lumen and meets the three-part barrier. Water, electrolytes and small peptides " +
    "sail through the 70-nm fenestrations and the slits. Albumin is small enough for those same 70-nm pores &#8212; watch " +
    "it get in, then get turned back at the negatively charged net (glycocalyx plus heparan sulfate in the basement " +
    "membrane), which is why size alone never explains its absence from the filtrate. The red cell is stopped even " +
    "earlier: too large, and its membrane is net-negative too. The slit at the peptide lane opens and closes across the " +
    "lecture's 4&#8211;14 nm range &#8212; that is phosphorylation tuning permeability. The panel on the right replays the " +
    "podocyte layer with a defective slit diaphragm (nephrin, NEPH1/Kirrel1, podocin): the same albumin now slips " +
    "straight through, which is nephrotic syndrome and the proteinuria in the herbal-tea case.",
  svg: `
<svg viewBox="0 0 640 320" role="img" aria-label="A cross-section of the glomerular filtration barrier in four bands: glycocalyx, fenestrated endothelium with 70-nanometre pores, three-layer basement membrane carrying negative charges, and podocyte foot processes with slit diaphragms. Water, electrolytes and small peptides travel all the way through into Bowman's space. Albumin passes the fenestration but is repelled by the negatively charged basement membrane and drifts back. A red blood cell is stopped at the glycocalyx. One slit widens and narrows to show the four to fourteen nanometre range. A side panel shows a defective slit diaphragm through which albumin passes into the urine.">
  <style>
    .dg6c-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg6c-lbl  { font-size: 9.5px; fill: var(--dg-ink); }
    .dg6c-num  { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dg6c-zone { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.1; }
    .dg6c-glyco { fill: var(--dg-accent); fill-opacity: .14; stroke: var(--dg-line); stroke-width: 1.1; }
    .dg6c-block { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.2; }
    .dg6c-pod   { fill: var(--dg-accent); fill-opacity: .28; stroke: var(--dg-accent); stroke-width: 1.2; }
    .dg6c-neg   { font-size: 10px; fill: var(--dg-accent); font-weight: 700; }
    .dg6c-sd    { stroke: var(--dg-accent); stroke-width: 2.4; stroke-linecap: round; }
    .dg6c-water { fill: var(--dg-cool); }
    .dg6c-pep   { fill: var(--dg-good); }
    .dg6c-alb   { fill: var(--dg-warm); }
    .dg6c-rbc   { fill: var(--dg-warm); fill-opacity: .55; stroke: var(--dg-warm); stroke-width: 1.4; }
    .dg6c-p1 { animation: dg6cPass 6s linear infinite; }
    .dg6c-p2 { animation: dg6cPass 6s linear infinite 1.6s; }
    .dg6c-p3 { animation: dg6cPass 6s linear infinite 3.2s; }
    .dg6c-p4 { animation: dg6cPass 7.5s linear infinite .8s; }
    .dg6c-albm { animation: dg6cAlb 9s ease-in-out infinite; }
    .dg6c-flash { animation: dg6cFlash 9s linear infinite; }
    .dg6c-rbcm { animation: dg6cRbc 8s ease-in-out infinite; }
    .dg6c-up { animation: dg6cUp 5s ease-in-out infinite; }
    .dg6c-dn { animation: dg6cDn 5s ease-in-out infinite; }
    .dg6c-leak { animation: dg6cLeak 4.5s linear infinite; }
    @keyframes dg6cPass {
      0%   { transform: translateX(0); opacity: 0 }
      8%   { opacity: 1 }
      92%  { opacity: 1 }
      100% { transform: translateX(392px); opacity: 0 }
    }
    @keyframes dg6cAlb {
      0%   { transform: translateX(0); opacity: 0 }
      6%   { opacity: 1 }
      40%  { transform: translateX(186px) }
      48%  { transform: translateX(176px) }
      56%  { transform: translateX(186px) }
      70%  { transform: translateX(120px) }
      100% { transform: translateX(8px); opacity: 0 }
    }
    @keyframes dg6cFlash {
      0%, 36% { opacity: 0 }
      44%     { opacity: 1 }
      60%     { opacity: 0 }
      100%    { opacity: 0 }
    }
    @keyframes dg6cRbc {
      0%   { transform: translateX(0); opacity: 0 }
      8%   { opacity: 1 }
      40%  { transform: translateX(94px) }
      50%  { transform: translateX(84px) }
      58%  { transform: translateX(94px) }
      75%  { transform: translateX(40px) }
      100% { transform: translateX(0); opacity: 0 }
    }
    @keyframes dg6cUp { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
    @keyframes dg6cDn { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(3px) } }
    @keyframes dg6cLeak {
      0%   { transform: translateX(0); opacity: 0 }
      10%  { opacity: 1 }
      88%  { opacity: 1 }
      100% { transform: translateX(156px); opacity: 0 }
    }
  </style>

  <text x="22" y="18" class="dg6c-tiny">capillary lumen (blood)</text>
  <text x="316" y="18" class="dg6c-tiny">Bowman's space (ultrafiltrate)</text>
  <text x="151" y="34" text-anchor="middle" class="dg6c-num">1</text>
  <text x="179" y="34" text-anchor="middle" class="dg6c-num">2</text>
  <text x="232" y="34" text-anchor="middle" class="dg6c-num">3</text>
  <text x="290" y="34" text-anchor="middle" class="dg6c-num">4</text>

  <rect x="312" y="44" width="114" height="170" class="dg6c-zone"/>
  <rect x="140" y="44" width="22" height="170" class="dg6c-glyco"/>
  <text x="147" y="62"  class="dg6c-neg">&#8722;</text>
  <text x="147" y="92"  class="dg6c-neg">&#8722;</text>
  <text x="147" y="122" class="dg6c-neg">&#8722;</text>
  <text x="147" y="152" class="dg6c-neg">&#8722;</text>
  <text x="147" y="182" class="dg6c-neg">&#8722;</text>

  <rect x="162" y="44"  width="34" height="24" class="dg6c-block"/>
  <rect x="162" y="88"  width="34" height="14" class="dg6c-block"/>
  <rect x="162" y="124" width="34" height="18" class="dg6c-block"/>
  <rect x="162" y="164" width="34" height="20" class="dg6c-block"/>
  <rect x="162" y="206" width="34" height="8"  class="dg6c-block"/>

  <rect x="196" y="44" width="10" height="170" fill="var(--dg-cool)" fill-opacity=".18" stroke="var(--dg-line)" stroke-width="1"/>
  <rect x="206" y="44" width="52" height="170" fill="var(--dg-cool)" fill-opacity=".34" stroke="var(--dg-line)" stroke-width="1"/>
  <rect x="258" y="44" width="10" height="170" fill="var(--dg-cool)" fill-opacity=".18" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="228" y="66"  class="dg6c-neg">&#8722;</text>
  <text x="212" y="98"  class="dg6c-neg">&#8722;</text>
  <text x="238" y="132" class="dg6c-neg">&#8722;</text>
  <text x="214" y="172" class="dg6c-neg">&#8722;</text>
  <text x="240" y="200" class="dg6c-neg">&#8722;</text>

  <rect x="268" y="44"  width="44" height="26" class="dg6c-pod"/>
  <rect x="268" y="162" width="44" height="24" class="dg6c-pod"/>
  <rect x="268" y="202" width="44" height="12" class="dg6c-pod"/>
  <line x1="290" y1="72"  x2="290" y2="76"  class="dg6c-sd"/>
  <line x1="290" y1="80"  x2="290" y2="84"  class="dg6c-sd"/>
  <line x1="290" y1="146" x2="290" y2="150" class="dg6c-sd"/>
  <line x1="290" y1="154" x2="290" y2="158" class="dg6c-sd"/>
  <line x1="290" y1="188" x2="290" y2="192" class="dg6c-sd"/>
  <line x1="290" y1="196" x2="290" y2="200" class="dg6c-sd"/>
  <g class="dg6c-up">
    <rect x="268" y="86" width="44" height="18" class="dg6c-pod"/>
    <line x1="290" y1="104" x2="290" y2="109" class="dg6c-sd"/>
  </g>
  <g class="dg6c-dn">
    <rect x="268" y="122" width="44" height="22" class="dg6c-pod"/>
    <line x1="290" y1="117" x2="290" y2="122" class="dg6c-sd"/>
  </g>
  <path d="M300,113 L318,113" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="320" y="110" class="dg6c-tiny">slit 4&#8211;14 nm,</text>
  <text x="320" y="121" class="dg6c-tiny">phosphorylation-tuned</text>

  <text x="18" y="68"  class="dg6c-lbl">water + electrolytes</text>
  <text x="18" y="102" class="dg6c-lbl">small peptides</text>
  <text x="18" y="132" class="dg6c-lbl">albumin</text>
  <text x="18" y="143" class="dg6c-tiny">large and negatively charged</text>
  <text x="18" y="176" class="dg6c-lbl">red blood cell</text>
  <text x="18" y="212" class="dg6c-tiny">too large &#183; membrane also net-negative</text>

  <g class="dg6c-p1"><circle cx="26" cy="74" r="2.6" class="dg6c-water"/></g>
  <g class="dg6c-p2"><circle cx="26" cy="82" r="2.6" class="dg6c-water"/></g>
  <g class="dg6c-p3"><circle cx="26" cy="78" r="2.6" class="dg6c-water"/></g>
  <g class="dg6c-p4"><circle cx="26" cy="112" r="5" class="dg6c-pep"/></g>
  <g class="dg6c-albm"><ellipse cx="26" cy="152" rx="9" ry="7" class="dg6c-alb"/></g>
  <g class="dg6c-flash">
    <text x="200" y="146" class="dg6c-neg">&#8722;</text>
    <text x="212" y="146" class="dg6c-neg">&#8722;</text>
    <text x="224" y="146" class="dg6c-neg">&#8722;</text>
    <text x="196" y="182" class="dg6c-tiny">repelled</text>
  </g>
  <g class="dg6c-rbcm"><ellipse cx="30" cy="194" rx="16" ry="12" class="dg6c-rbc"/></g>
  <text x="316" y="166" class="dg6c-tiny">no albumin here</text>
  <text x="316" y="212" class="dg6c-tiny">no cells here</text>

  <rect x="448" y="48" width="186" height="174" rx="8" fill="var(--dg-panel)" fill-opacity=".5" stroke="var(--dg-line)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="456" y="66" class="dg6c-lbl">defective slit diaphragm</text>
  <text x="456" y="78" class="dg6c-tiny">nephrin &#183; NEPH1 (Kirrel1) &#183; podocin</text>
  <text x="462" y="98" class="dg6c-tiny">capillary</text>
  <text x="592" y="98" class="dg6c-tiny">urine</text>
  <rect x="520" y="104" width="40" height="22" class="dg6c-pod"/>
  <rect x="520" y="152" width="40" height="22" class="dg6c-pod"/>
  <line x1="540" y1="126" x2="540" y2="132" class="dg6c-sd" stroke-dasharray="2 3"/>
  <line x1="540" y1="146" x2="540" y2="152" class="dg6c-sd" stroke-dasharray="2 3"/>
  <g class="dg6c-leak"><ellipse cx="462" cy="139" rx="9" ry="7" class="dg6c-alb"/></g>
  <text x="456" y="192" class="dg6c-tiny">albumin now slips straight through</text>
  <text x="456" y="204" class="dg6c-tiny">&#8594; albuminuria = nephrotic syndrome</text>
  <text x="456" y="216" class="dg6c-tiny">(and the proteinuria in the tea case)</text>

  <text x="14" y="240" class="dg6c-tiny">1  glycocalyx &#8212; negatively charged GAGs secreted by the endothelium: the charge barrier</text>
  <text x="14" y="254" class="dg6c-tiny">2  fenestrated endothelium &#8212; 70-nm pores; no restriction on water, small solutes, electrolytes or peptides</text>
  <text x="14" y="268" class="dg6c-tiny">3  basement membrane &#8212; lamina rara interna / lamina densa / lamina rara externa, with heparan sulfate (&#8722;)</text>
  <text x="14" y="282" class="dg6c-tiny">4  podocyte foot processes (pedicels) &#8212; filtration slits bridged by slit diaphragms, negatively charged glycoproteins on top</text>
  <text x="14" y="300" class="dg6c-tiny">glycocalyx + basement membrane form one large negative net: it stops large anions such as albumin, and cells, whose membranes are net-negative</text>
</svg>`,
};

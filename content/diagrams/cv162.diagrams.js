window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv162-free-oxalate"] = {
  title: "Free oxalate: why Crohn's and a low-calcium diet both raise urine oxalate",
  caption:
    "Top: calcium eaten with oxalate forms a calcium-oxalate complex in the gut, which limits oxalate absorption and its later excretion in the urine. " +
    "Bottom: when calcium is scarce (a low-calcium diet) or is bound by unabsorbed fat (fat malabsorption in Crohn's disease), oxalate stays free, is absorbed by the colon, reaches the blood and is excreted by the kidney, so urine oxalate rises and calcium oxalate stones form. " +
    "This is the lecture's reason for a low-sodium diet but not a low-calcium diet (Slides 7, 28, 40).",
  svg: `
<svg class="dg162a-root" viewBox="0 0 620 290" role="img" aria-label="Two rows. Top row, enough dietary calcium: calcium binds oxalate in the gut lumen and the complex leaves in stool, so little oxalate crosses the colon wall and less oxalate is excreted in urine. Bottom row, low-calcium diet or fat malabsorption: fat binds the calcium, free oxalate crosses the colon wall into the blood, the kidney excretes it, urine oxalate rises and calcium oxalate stones form.">
  <style>
    .dg162a-root .dg162a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg162a-root .dg162a-wall { stroke: var(--dg-ink); stroke-width: 2.5; stroke-dasharray: 5 4; opacity: .7; }
    .dg162a-root .dg162a-h { font-size: 13px; font-weight: 700; }
    .dg162a-root .dg162a-lbl { font-size: 12px; }
    .dg162a-root .dg162a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg162a-root .dg162a-in { font-size: 10px; font-weight: 700; fill: var(--dg-surface); }
    .dg162a-root .dg162a-ca { fill: var(--dg-cool); }
    .dg162a-root .dg162a-ox { fill: var(--dg-warm); }
    .dg162a-root .dg162a-fat { fill: var(--dg-muted); opacity: .45; }
    .dg162a-root .dg162a-warmt { fill: var(--dg-warm); font-weight: 700; }
    .dg162a-root .dg162a-goodt { fill: var(--dg-good); font-weight: 700; }
    .dg162a-root .dg162a-coolt { fill: var(--dg-cool); font-weight: 700; }
    .dg162a-root .dg162a-ar { stroke: var(--dg-ink); stroke-width: 2; fill: none; }
    .dg162a-root .dg162a-arw { stroke: var(--dg-warm); stroke-width: 3; fill: none; }
    .dg162a-root .dg162a-arm { stroke: var(--dg-muted); stroke-width: 2; stroke-dasharray: 4 4; fill: none; }
    .dg162a-root .dg162a-hd { fill: var(--dg-ink); }
    .dg162a-root .dg162a-hdw { fill: var(--dg-warm); }
    .dg162a-root .dg162a-hdm { fill: var(--dg-muted); }
    .dg162a-root .dg162a-stool { animation: dg162astool 3.8s ease-in-out infinite; }
    @keyframes dg162astool {
      0%   { transform: translateY(0); opacity: 1 }
      65%  { opacity: 1 }
      100% { transform: translateY(24px); opacity: 0 }
    }
    .dg162a-root .dg162a-x1 { animation: dg162across 3.8s linear infinite; }
    .dg162a-root .dg162a-x2 { animation: dg162across 3.8s linear infinite 1.3s; }
    @keyframes dg162across {
      0%   { transform: translateX(0); opacity: 0 }
      10%  { opacity: 1 }
      85%  { opacity: 1 }
      100% { transform: translateX(196px); opacity: 0 }
    }
    .dg162a-root .dg162a-pulse { animation: dg162apulse 3.8s ease-in-out infinite; }
    @keyframes dg162apulse { 0%, 100% { opacity: .5 } 50% { opacity: 1 } }
  </style>

  <text x="20" y="30" class="dg162a-h">Enough dietary calcium</text>
  <rect x="20" y="40" width="230" height="90" rx="12" class="dg162a-box"/>
  <text x="32" y="58" class="dg162a-sub">Gut lumen</text>
  <g class="dg162a-stool">
    <circle cx="74" cy="86" r="11" class="dg162a-ca"/>
    <text x="74" y="90" class="dg162a-in" text-anchor="middle">Ca</text>
    <circle cx="96" cy="86" r="11" class="dg162a-ox"/>
    <text x="96" y="90" class="dg162a-in" text-anchor="middle">Ox</text>
  </g>
  <text x="120" y="82" class="dg162a-lbl">calcium-oxalate</text>
  <text x="120" y="97" class="dg162a-lbl">complex</text>
  <line x1="85" y1="104" x2="85" y2="114" class="dg162a-ar"/>
  <polygon points="80,114 90,114 85,122" class="dg162a-hd"/>
  <text x="98" y="122" class="dg162a-sub">leaves in stool</text>

  <line x1="214" y1="110" x2="274" y2="110" class="dg162a-arm"/>
  <polygon points="274,105 282,110 274,115" class="dg162a-hdm"/>
  <text x="206" y="104" class="dg162a-sub">limited</text>

  <rect x="284" y="56" width="136" height="60" rx="10" class="dg162a-box"/>
  <text x="294" y="80" class="dg162a-lbl">Blood -&gt; kidney</text>
  <text x="294" y="99" class="dg162a-sub">little free oxalate</text>
  <line x1="420" y1="86" x2="430" y2="86" class="dg162a-ar"/>
  <polygon points="430,81 438,86 430,91" class="dg162a-hd"/>
  <rect x="440" y="56" width="172" height="60" rx="10" class="dg162a-box"/>
  <text x="450" y="80" class="dg162a-lbl" font-weight="700">Urine</text>
  <text x="450" y="99" class="dg162a-lbl dg162a-goodt">less oxalate excreted</text>

  <line x1="262" y1="36" x2="262" y2="136" class="dg162a-wall"/>
  <line x1="262" y1="166" x2="262" y2="270" class="dg162a-wall"/>
  <text x="262" y="285" class="dg162a-sub" text-anchor="middle">colon wall</text>

  <text x="20" y="158" class="dg162a-h">Low-calcium diet, or fat malabsorption (Crohn's)</text>
  <rect x="20" y="168" width="230" height="96" rx="12" class="dg162a-box"/>
  <text x="32" y="186" class="dg162a-sub">Gut lumen</text>
  <ellipse cx="66" cy="222" rx="30" ry="17" class="dg162a-fat"/>
  <circle cx="84" cy="212" r="10" class="dg162a-ca"/>
  <text x="84" y="216" class="dg162a-in" text-anchor="middle">Ca</text>
  <text x="34" y="256" class="dg162a-sub">fat binds Ca, or too little eaten</text>
  <text x="120" y="200" class="dg162a-lbl dg162a-warmt">free oxalate</text>
  <g class="dg162a-x1">
    <circle cx="146" cy="222" r="10" class="dg162a-ox"/>
    <text x="146" y="226" class="dg162a-in" text-anchor="middle">Ox</text>
  </g>
  <g class="dg162a-x2">
    <circle cx="170" cy="236" r="10" class="dg162a-ox"/>
    <text x="170" y="240" class="dg162a-in" text-anchor="middle">Ox</text>
  </g>

  <g class="dg162a-pulse">
    <line x1="196" y1="212" x2="274" y2="212" class="dg162a-arw"/>
    <polygon points="274,206 284,212 274,218" class="dg162a-hdw"/>
  </g>
  <text x="210" y="204" class="dg162a-sub">absorbed</text>

  <rect x="284" y="184" width="136" height="60" rx="10" class="dg162a-box"/>
  <text x="294" y="208" class="dg162a-lbl">Blood -&gt; kidney</text>
  <text x="294" y="227" class="dg162a-sub">free oxalate excreted</text>
  <line x1="420" y1="214" x2="430" y2="214" class="dg162a-ar"/>
  <polygon points="430,209 438,214 430,219" class="dg162a-hd"/>
  <rect x="440" y="184" width="172" height="60" rx="10" class="dg162a-box"/>
  <text x="450" y="208" class="dg162a-lbl dg162a-warmt">Urine oxalate rises</text>
  <text x="450" y="227" class="dg162a-lbl dg162a-warmt">calcium oxalate stones</text>
</svg>`,
};

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv122-pelvic-mechanics"] = {
  title: "The pelvis opens in two steps",
  caption:
    "Front view of the pelvis with a side view of the sacrum beside it, schematic and not to scale. " +
    "First, the iliac crests diverge, the ischia converge and the sacrum counternutates (base posterior), which opens the true pelvis for fetal descent. " +
    "Then the opposite happens: the crests converge, the ischial tuberosities move lateral and the sacral base comes forward, which opens the pelvic outlet for parturition. " +
    "Each innominate moves as one piece, so the top and bottom always travel in opposite directions (Slide 23).",
  svg: `
<svg viewBox="0 0 640 282" role="img" aria-label="Two panels of a pelvis seen from the front with a sacrum seen from the side. In the first panel the iliac crests move apart, the ischia move together and the sacral base moves posterior as the fetal head enters the true pelvis. In the second panel the crests move together, the ischial tuberosities move apart and the sacral base moves forward as the fetal head leaves through the pelvic outlet.">
  <style>
    .dg122a-bone { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 2; }
    .dg122a-sac  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg122a-rest { fill: none; stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg122a-fetal { fill: var(--dg-cool); opacity: .3; stroke: var(--dg-cool); stroke-width: 1.5; }
    .dg122a-div  { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .dg122a-open { stroke: var(--dg-accent); fill: var(--dg-accent); }
    .dg122a-shut { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg122a-shaft { stroke-width: 3.5; stroke-linecap: round; }
    .dg122a-head { font-size: 13px; font-weight: 700; }
    .dg122a-lbl  { font-size: 12px; font-weight: 700; }
    .dg122a-sub  { font-size: 11px; }
    .dg122a-res  { font-size: 12px; font-weight: 700; fill: var(--dg-good); }
    .dg122a-iout { transform-origin: 88px 105px; transform: rotate(-6deg); animation: dg122aiout 3.6s ease-in-out infinite alternate; }
    .dg122a-iin  { transform-origin: 88px 105px; transform: rotate(6deg); animation: dg122aiin 3.6s ease-in-out infinite alternate; }
    .dg122a-sback { transform-origin: 268px 130px; transform: rotate(9deg); animation: dg122asback 3.6s ease-in-out infinite alternate; }
    .dg122a-sfwd  { transform-origin: 268px 130px; transform: rotate(-9deg); animation: dg122asfwd 3.6s ease-in-out infinite alternate; }
    .dg122a-fall { animation: dg122afall 3.6s ease-in-out infinite alternate; }
    @keyframes dg122aiout  { 0% { transform: rotate(0deg) } 100% { transform: rotate(-6deg) } }
    @keyframes dg122aiin   { 0% { transform: rotate(0deg) } 100% { transform: rotate(6deg) } }
    @keyframes dg122asback { 0% { transform: rotate(0deg) } 100% { transform: rotate(9deg) } }
    @keyframes dg122asfwd  { 0% { transform: rotate(0deg) } 100% { transform: rotate(-9deg) } }
    @keyframes dg122afall  { 0% { transform: translateY(-44px) } 100% { transform: translateY(0) } }
  </style>

  <line x1="317" y1="4" x2="317" y2="276" class="dg122a-div"/>

  <g>
    <text x="155" y="14" text-anchor="middle" class="dg122a-head">FIRST: descent into the true pelvis</text>
    <text x="110" y="36" text-anchor="middle" class="dg122a-lbl">Iliac crests diverge</text>
    <line x1="62" y1="48" x2="30" y2="48" class="dg122a-open dg122a-shaft"/>
    <polygon points="32,41 18,48 32,55" class="dg122a-open"/>
    <line x1="158" y1="48" x2="190" y2="48" class="dg122a-open dg122a-shaft"/>
    <polygon points="188,41 202,48 188,55" class="dg122a-open"/>

    <g><g class="dg122a-iout"><path class="dg122a-bone" d="M88 84 C70 62 34 58 20 76 C22 104 40 124 52 142 C50 165 56 190 72 204 C84 206 88 196 97 186 L97 170 C88 170 80 160 78 146 C80 124 86 104 88 84 Z"/></g></g>
    <g transform="translate(220 0) scale(-1 1)"><g class="dg122a-iout"><path class="dg122a-bone" d="M88 84 C70 62 34 58 20 76 C22 104 40 124 52 142 C50 165 56 190 72 204 C84 206 88 196 97 186 L97 170 C88 170 80 160 78 146 C80 124 86 104 88 84 Z"/></g></g>
    <polygon class="dg122a-sac" points="86,84 134,84 124,128 110,148 96,128"/>
    <g class="dg122a-fall"><circle cx="110" cy="122" r="21" class="dg122a-fetal"/></g>

    <line x1="48" y1="222" x2="72" y2="222" class="dg122a-shut dg122a-shaft"/>
    <polygon points="70,215 84,222 70,229" class="dg122a-shut"/>
    <line x1="172" y1="222" x2="148" y2="222" class="dg122a-shut dg122a-shaft"/>
    <polygon points="150,215 136,222 150,229" class="dg122a-shut"/>
    <text x="110" y="246" text-anchor="middle" class="dg122a-lbl">Ischia converge</text>

    <text x="268" y="48" text-anchor="middle" class="dg122a-sub">Sacrum, side view</text>
    <text x="236" y="62" text-anchor="middle" class="dg122a-sub">ant.</text>
    <text x="298" y="62" text-anchor="middle" class="dg122a-sub">post.</text>
    <path class="dg122a-rest" d="M255 90 L281 90 C283 120 276 150 262 174 C258 150 252 120 255 90 Z"/>
    <g class="dg122a-sback"><path class="dg122a-sac" d="M255 90 L281 90 C283 120 276 150 262 174 C258 150 252 120 255 90 Z"/></g>
    <line x1="256" y1="76" x2="280" y2="76" class="dg122a-shut dg122a-shaft"/>
    <polygon points="278,69 292,76 278,83" class="dg122a-shut"/>
    <text x="268" y="196" text-anchor="middle" class="dg122a-lbl">Base posterior</text>
    <text x="268" y="211" text-anchor="middle" class="dg122a-sub">counternutation</text>

    <text x="155" y="270" text-anchor="middle" class="dg122a-res">True pelvis opens</text>
  </g>

  <g transform="translate(324 0)">
    <text x="155" y="14" text-anchor="middle" class="dg122a-head">THEN: the opposite, for parturition</text>
    <text x="110" y="36" text-anchor="middle" class="dg122a-lbl">Iliac crests converge</text>
    <line x1="24" y1="48" x2="48" y2="48" class="dg122a-shut dg122a-shaft"/>
    <polygon points="46,41 60,48 46,55" class="dg122a-shut"/>
    <line x1="196" y1="48" x2="172" y2="48" class="dg122a-shut dg122a-shaft"/>
    <polygon points="174,41 160,48 174,55" class="dg122a-shut"/>

    <g><g class="dg122a-iin"><path class="dg122a-bone" d="M88 84 C70 62 34 58 20 76 C22 104 40 124 52 142 C50 165 56 190 72 204 C84 206 88 196 97 186 L97 170 C88 170 80 160 78 146 C80 124 86 104 88 84 Z"/></g></g>
    <g transform="translate(220 0) scale(-1 1)"><g class="dg122a-iin"><path class="dg122a-bone" d="M88 84 C70 62 34 58 20 76 C22 104 40 124 52 142 C50 165 56 190 72 204 C84 206 88 196 97 186 L97 170 C88 170 80 160 78 146 C80 124 86 104 88 84 Z"/></g></g>
    <polygon class="dg122a-sac" points="86,84 134,84 124,128 110,148 96,128"/>
    <g class="dg122a-fall"><circle cx="110" cy="194" r="21" class="dg122a-fetal"/></g>

    <line x1="82" y1="228" x2="52" y2="228" class="dg122a-open dg122a-shaft"/>
    <polygon points="54,221 40,228 54,235" class="dg122a-open"/>
    <line x1="138" y1="228" x2="168" y2="228" class="dg122a-open dg122a-shaft"/>
    <polygon points="166,221 180,228 166,235" class="dg122a-open"/>
    <text x="110" y="250" text-anchor="middle" class="dg122a-lbl">Ischial tuberosities lateral</text>

    <text x="268" y="48" text-anchor="middle" class="dg122a-sub">Sacrum, side view</text>
    <text x="236" y="62" text-anchor="middle" class="dg122a-sub">ant.</text>
    <text x="298" y="62" text-anchor="middle" class="dg122a-sub">post.</text>
    <path class="dg122a-rest" d="M255 90 L281 90 C283 120 276 150 262 174 C258 150 252 120 255 90 Z"/>
    <g class="dg122a-sfwd"><path class="dg122a-sac" d="M255 90 L281 90 C283 120 276 150 262 174 C258 150 252 120 255 90 Z"/></g>
    <line x1="280" y1="76" x2="256" y2="76" class="dg122a-open dg122a-shaft"/>
    <polygon points="258,69 244,76 258,83" class="dg122a-open"/>
    <text x="268" y="196" text-anchor="middle" class="dg122a-lbl">Base forward</text>

    <text x="155" y="270" text-anchor="middle" class="dg122a-res">Pelvic outlet opens</text>
  </g>
</svg>`
};

/*
 * cv38 - Clinical Hypertension Part 1 (Lecture #38, C. Bogdani, OMS III and
 * M. Mourad, D.O.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. RAAS as the engine of primary hypertension - two levers, one feedback loop.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv38-raas-cascade"] = {
  title: "RAAS drives both halves of MAP = CO x TPR",
  caption:
    "The cascade runs left to right and then splits. Renin is released when blood pressure falls, when sodium delivery to the macula densa falls, or when sympathetic tone rises; " +
    "renin converts angiotensinogen to angiotensin I, and ACE converts angiotensin I to angiotensin II (Slide 12). " +
    "Angiotensin II then pushes on <b>both</b> terms of MAP = CO x TPR at once: it raises cardiac output through sympathetic drive (heart rate and contractility, so stroke volume) and through aldosterone and ADH (sodium and water retention, so blood volume and preload), and it raises total peripheral resistance through vasoconstriction. " +
    "The orange loop at the bottom is the part that makes hypertension self-sustaining - the elevated pressure itself causes vascular remodeling, raises endothelin and lowers vasodilators such as nitric oxide, which raises resistance again.",
  svg: `
<svg viewBox="0 0 650 318" role="img" aria-label="A flow diagram. Three renin stimuli - falling blood pressure, falling sodium delivery to the macula densa, and rising sympathetic tone - feed renin, which converts angiotensinogen to angiotensin one; ACE converts angiotensin one to angiotensin two. Angiotensin two splits into two paths: an upper path through sympathetic activation and through aldosterone and antidiuretic hormone that raises cardiac output, and a lower path through vasoconstriction that raises total peripheral resistance. Both paths converge on raised blood pressure, and a feedback arrow returns from raised blood pressure to total peripheral resistance labelled vascular remodeling, increased endothelin and decreased vasodilators.">
  <style>
    .dg38a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg38a-key  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg38a-b    { font-size: 12px; font-weight: 700; }
    .dg38a-t    { font-size: 11px; }
    .dg38a-s    { font-size: 10px; fill: var(--dg-muted); }
    .dg38a-ar   { stroke: var(--dg-ink); stroke-width: 2; fill: none; opacity: .65; }
    .dg38a-ah   { fill: var(--dg-ink); opacity: .65; }
    .dg38a-fb   { stroke: var(--dg-warm); stroke-width: 2.2; fill: none;
                  stroke-dasharray: 8 6; animation: dg38aFlow 1.5s linear infinite; }
    @keyframes dg38aFlow { to { stroke-dashoffset: -28 } }

    .dg38a-s1 { animation: dg38aLit 9s ease-in-out infinite; }
    .dg38a-s2 { animation: dg38aLit 9s ease-in-out infinite 1.1s; }
    .dg38a-s3 { animation: dg38aLit 9s ease-in-out infinite 2.2s; }
    .dg38a-s4 { animation: dg38aLit 9s ease-in-out infinite 3.3s; }
    .dg38a-s5 { animation: dg38aLit 9s ease-in-out infinite 4.4s; }
    @keyframes dg38aLit { 0%, 4% { opacity: .38 } 12%, 66% { opacity: 1 } 88%, 100% { opacity: .38 } }
  </style>

  <text x="14" y="18" class="dg38a-s">Renin is released when:</text>
  <rect x="14"  y="26" width="118" height="24" rx="8" class="dg38a-box"/>
  <text x="24"  y="42" class="dg38a-t">BP falls</text>
  <rect x="140" y="26" width="196" height="24" rx="8" class="dg38a-box"/>
  <text x="150" y="42" class="dg38a-t">Na+ to macula densa falls</text>
  <rect x="344" y="26" width="152" height="24" rx="8" class="dg38a-box"/>
  <text x="354" y="42" class="dg38a-t">sympathetics rise</text>

  <path class="dg38a-ar" d="M73 50 V70 M238 50 V70 M420 50 V70"/>
  <path class="dg38a-ar" d="M73 70 H420"/>
  <path class="dg38a-ar" d="M246 70 V84"/>
  <polygon points="240,84 252,84 246,94" class="dg38a-ah"/>

  <rect x="14"  y="96" width="128" height="30" rx="8" class="dg38a-box dg38a-s1"/>
  <text x="24"  y="116" class="dg38a-t">Angiotensinogen</text>
  <path class="dg38a-ar dg38a-s1" d="M142 111 H186"/>
  <polygon points="186,105 200,111 186,117" class="dg38a-ah dg38a-s1"/>
  <text x="146" y="104" class="dg38a-s">renin</text>

  <rect x="202" y="96" width="94" height="30" rx="8" class="dg38a-box dg38a-s2"/>
  <text x="212" y="116" class="dg38a-t">Angiotensin I</text>
  <path class="dg38a-ar dg38a-s2" d="M296 111 H336"/>
  <polygon points="336,105 350,111 336,117" class="dg38a-ah dg38a-s2"/>
  <text x="300" y="104" class="dg38a-s">ACE</text>

  <rect x="352" y="94" width="100" height="34" rx="8" class="dg38a-key dg38a-s3"/>
  <text x="362" y="116" class="dg38a-b">Angiotensin II</text>

  <path class="dg38a-ar dg38a-s4" d="M452 104 H472 V158"/>
  <polygon points="466,158 478,158 472,168" class="dg38a-ah dg38a-s4"/>
  <path class="dg38a-ar dg38a-s4" d="M452 120 H472 V236"/>
  <polygon points="466,236 478,236 472,246" class="dg38a-ah dg38a-s4"/>

  <rect x="14" y="150" width="300" height="26" rx="8" class="dg38a-box dg38a-s4"/>
  <text x="24" y="168" class="dg38a-t">Sympathetics: HR up, contractility up, SV up</text>
  <rect x="14" y="184" width="300" height="26" rx="8" class="dg38a-box dg38a-s4"/>
  <text x="24" y="202" class="dg38a-t">Aldosterone + ADH: Na+/H2O, volume, preload up</text>
  <path class="dg38a-ar dg38a-s4" d="M314 163 H352 M314 197 H352 M352 163 V197"/>
  <path class="dg38a-ar dg38a-s4" d="M352 180 H400"/>
  <polygon points="400,174 414,180 400,186" class="dg38a-ah dg38a-s4"/>

  <rect x="416" y="164" width="118" height="32" rx="8" class="dg38a-key dg38a-s4"/>
  <text x="440" y="185" class="dg38a-b">CO up</text>

  <rect x="14" y="230" width="300" height="26" rx="8" class="dg38a-box dg38a-s4"/>
  <text x="24" y="248" class="dg38a-t">Vasoconstriction (AT II, sympathetics, ADH)</text>
  <path class="dg38a-ar dg38a-s4" d="M314 243 H400"/>
  <polygon points="400,237 414,243 400,249" class="dg38a-ah dg38a-s4"/>
  <rect x="416" y="228" width="118" height="32" rx="8" class="dg38a-key dg38a-s4"/>
  <text x="436" y="249" class="dg38a-b">TPR up</text>

  <path class="dg38a-ar dg38a-s5" d="M534 180 H566 V228"/>
  <path class="dg38a-ar dg38a-s5" d="M534 244 H566"/>
  <path class="dg38a-ar dg38a-s5" d="M566 244 H592"/>
  <polygon points="592,238 606,244 592,250" class="dg38a-ah dg38a-s5"/>
  <text x="556" y="212" class="dg38a-s">MAP = CO x TPR</text>
  <text x="586" y="272" class="dg38a-b" fill="var(--dg-warm)">BP up</text>

  <path class="dg38a-fb" d="M600 282 V300 H176 V262"/>
  <polygon points="170,262 182,262 176,252" fill="var(--dg-warm)"/>
  <text x="196" y="296" class="dg38a-s" fill="var(--dg-warm)">Vascular remodeling, endothelin up, vasodilators (NO) down &#8212; resistance rises again</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. White coat vs masked hypertension - why the answer is ABPM, not a repeat cuff.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv38-abpm-white-coat-masked"] = {
  title: "White coat vs masked: what ABPM sees",
  caption:
    "Both traces are the same patient's blood pressure sampled across 24 hours by an ambulatory cuff, which the lecturer describes as worn for 24 to 48 hours and reading roughly every 20 minutes by day and hourly at night. " +
    "The shaded column is the office visit. The <b>white coat</b> trace rises above the threshold only inside that column and is normal everywhere else; the <b>masked</b> trace does the exact opposite, sitting normal in clinic and elevated the rest of the day. " +
    "A single office reading &#8212; or a single home reading &#8212; can only sample one point on these curves, which is why ABPM is the indicated test whenever home and office measurements disagree (Slide 15). " +
    "The dashed line is this lecture's stage 1 threshold of 130/80 (Slide 5); the lecture does not give separate out-of-office cutoffs.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="A 24-hour blood pressure trace with a shaded band marking the office visit around midday. The white coat hypertension curve stays below the 130 over 80 threshold all day and rises above it only inside the office band. The masked hypertension curve stays above the threshold all day and dips below it only inside the office band. A moving cursor sweeps across both curves.">
  <style>
    .dg38b-b    { font-size: 12px; font-weight: 700; }
    .dg38b-s    { font-size: 10.5px; fill: var(--dg-muted); }
    .dg38b-ax   { stroke: var(--dg-line); stroke-width: 1.4; }
    .dg38b-thr  { stroke: var(--dg-ink); stroke-width: 1.4; stroke-dasharray: 6 5; opacity: .65; }
    .dg38b-band { fill: var(--dg-accent); opacity: .13; }
    .dg38b-wc   { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linecap: round; stroke-linejoin: round; }
    .dg38b-mk   { fill: none; stroke: var(--dg-cool); stroke-width: 3.2; stroke-linecap: round; stroke-linejoin: round; }

    .dg38b-cur { stroke: var(--dg-accent); stroke-width: 1.6; opacity: .8;
                 animation: dg38bSweep 9s linear infinite; }
    @keyframes dg38bSweep { from { transform: translateX(0) } to { transform: translateX(524px) } }

    .dg38b-cuff { animation: dg38bBeat 2.2s ease-in-out infinite; transform-box: view-box;
                  transform-origin: 300px 34px; }
    @keyframes dg38bBeat { 0%, 100% { transform: scale(1) } 40% { transform: scale(1.14) } }

    .dg38b-flag { animation: dg38bFlag 9s linear infinite; }
    @keyframes dg38bFlag { 0%, 42% { opacity: .25 } 48%, 60% { opacity: 1 } 66%, 100% { opacity: .25 } }
  </style>

  <rect x="286" y="24" width="28" height="20" rx="6" fill="var(--dg-accent)" opacity=".85" class="dg38b-cuff"/>
  <text x="322" y="39" class="dg38b-s">office visit &#8212; one point on a 24-hour curve</text>
  <rect x="14" y="24" width="20" height="5" rx="2" fill="var(--dg-warm)"/>
  <text x="40" y="30" class="dg38b-s">white coat</text>
  <rect x="140" y="24" width="20" height="5" rx="2" fill="var(--dg-cool)"/>
  <text x="166" y="30" class="dg38b-s">masked</text>

  <rect class="dg38b-band" x="286" y="56" width="42" height="168" rx="6"/>
  <text x="292" y="70" class="dg38b-s dg38b-flag">in office</text>

  <line x1="76" y1="140" x2="600" y2="140" class="dg38b-thr"/>
  <text x="70" y="136" class="dg38b-s" text-anchor="end">130/80</text>
  <text x="70" y="150" class="dg38b-s" text-anchor="end">threshold</text>

  <path class="dg38b-wc" d="M76 186 C120 182 180 190 240 186 C264 184 276 170 292 108 L322 104 C338 168 352 184 380 186 C444 190 520 182 600 186"/>
  <path class="dg38b-mk" d="M76 100 C130 104 180 96 240 100 C264 102 276 116 292 176 L322 180 C338 118 352 102 380 100 C444 96 520 104 600 100"/>

  <text x="86"  y="200" class="dg38b-s" fill="var(--dg-warm)">normal out of office</text>
  <text x="440" y="126" class="dg38b-s" fill="var(--dg-cool)">elevated out of office</text>
  <text x="336" y="96"  class="dg38b-s" fill="var(--dg-warm)">high in office</text>
  <text x="336" y="196" class="dg38b-s" fill="var(--dg-cool)">normal in office</text>

  <line x1="76" y1="224" x2="600" y2="224" class="dg38b-ax"/>
  <text x="76"  y="240" class="dg38b-s" text-anchor="middle">0 h</text>
  <text x="248" y="240" class="dg38b-s" text-anchor="middle">8 h</text>
  <text x="424" y="240" class="dg38b-s" text-anchor="middle">16 h</text>
  <text x="600" y="240" class="dg38b-s" text-anchor="middle">24 h</text>

  <text x="14" y="268" class="dg38b-b">Discrepancy between home and office readings = order ABPM (Slide 15).</text>
  <text x="14" y="286" class="dg38b-s">Worn 24&#8211;48 h; about every 20 min by day, hourly at night. Limits: cost, discomfort, interpretation.</text>

  <line x1="76" y1="52" x2="76" y2="228" class="dg38b-cur"/>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Hypertensive nephrosclerosis - the road from chronic pressure to ESRD.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv38-nephrosclerosis"] = {
  title: "How pressure becomes end-stage renal disease",
  caption:
    "Watch the two arterioles. Chronically elevated pressure narrows <b>both</b> the afferent and the efferent arteriole, so the red flow particles thin out and glomerular blood flow falls (Slide 35). " +
    "Reduced flow means glomerular and tubular ischemia, ischemia means nephrosclerosis and fibrosis, and over the long term that is end-stage renal disease. " +
    "The stage bar lights up in the order the lecturer gives it. " +
    "The clinical weight of the diagram is the last line: hypertension is the leading cause of end-stage renal disease, especially in African Americans, which ties this slide directly back to race as a non-modifiable risk factor (Slide 19).",
  svg: `
<svg viewBox="0 0 640 286" role="img" aria-label="Blood flows through an afferent arteriole into a glomerulus and out through an efferent arteriole. As chronic high pressure is applied, both arterioles narrow, the flow particles become sparse, and the glomerulus fades. Below, a four-stage bar lights up in sequence: glomerular blood flow reduced, glomerular and tubular ischemia, nephrosclerosis and fibrosis, and end-stage renal disease.">
  <style>
    .dg38c-b   { font-size: 12px; font-weight: 700; }
    .dg38c-t   { font-size: 11px; }
    .dg38c-s   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg38c-ves { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg38c-glo { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.6; }
    .dg38c-tuft{ fill: none; stroke: var(--dg-warm); stroke-width: 2.4; stroke-linecap: round; }
    .dg38c-cap { fill: none; stroke: var(--dg-line); stroke-width: 1.3; stroke-dasharray: 4 4; }
    .dg38c-stg { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg38c-ar  { stroke: var(--dg-ink); stroke-width: 1.8; fill: none; opacity: .6; }
    .dg38c-ah  { fill: var(--dg-ink); opacity: .6; }

    .dg38c-aff { transform-box: view-box; transform-origin: 150px 122px;
                 animation: dg38cNarrow 11s ease-in-out infinite; }
    .dg38c-eff { transform-box: view-box; transform-origin: 430px 122px;
                 animation: dg38cNarrow 11s ease-in-out infinite .6s; }
    @keyframes dg38cNarrow { 0%, 10% { transform: scaleY(1) } 46%, 100% { transform: scaleY(.32) } }

    .dg38c-p1 { animation: dg38cRun 3s linear infinite, dg38cThin 11s ease-in-out infinite; }
    .dg38c-p2 { animation: dg38cRun 3s linear infinite 1s, dg38cThin 11s ease-in-out infinite; }
    .dg38c-p3 { animation: dg38cRun 3s linear infinite 2s, dg38cThin 11s ease-in-out infinite; }
    @keyframes dg38cRun { from { transform: translateX(0) } to { transform: translateX(400px) } }
    @keyframes dg38cThin { 0%, 12% { opacity: 1 } 52%, 100% { opacity: .22 } }

    .dg38c-fade { animation: dg38cFade 11s ease-in-out infinite; }
    @keyframes dg38cFade { 0%, 30% { opacity: 1 } 70%, 100% { opacity: .3 } }

    .dg38c-g1 { animation: dg38cLit 11s ease-in-out infinite 2.2s; }
    .dg38c-g2 { animation: dg38cLit 11s ease-in-out infinite 3.9s; }
    .dg38c-g3 { animation: dg38cLit 11s ease-in-out infinite 5.6s; }
    .dg38c-g4 { animation: dg38cLit 11s ease-in-out infinite 7.3s; }
    @keyframes dg38cLit { 0%, 4% { opacity: .32 } 14%, 100% { opacity: 1 } }
  </style>

  <rect x="14" y="24" width="214" height="26" rx="8" fill="var(--dg-panel)" stroke="var(--dg-warm)" stroke-width="1.8"/>
  <text x="26" y="42" class="dg38c-t" fill="var(--dg-warm)">Chronically increased blood pressure</text>
  <path class="dg38c-ar" d="M120 50 V70"/>
  <polygon points="114,70 126,70 120,80" class="dg38c-ah"/>

  <text x="76"  y="100" class="dg38c-s">afferent arteriole</text>
  <text x="404" y="100" class="dg38c-s">efferent arteriole</text>

  <rect class="dg38c-ves dg38c-aff" x="76"  y="110" width="148" height="24" rx="10"/>
  <rect class="dg38c-ves dg38c-eff" x="356" y="110" width="148" height="24" rx="10"/>

  <circle class="dg38c-glo dg38c-fade" cx="290" cy="122" r="46"/>
  <path class="dg38c-tuft dg38c-fade" d="M262 112 C276 96 302 96 316 112 M262 122 C278 140 302 140 318 122 M266 134 C282 150 300 148 314 134"/>
  <text x="290" y="184" class="dg38c-s" text-anchor="middle">glomerulus</text>

  <g class="dg38c-p1"><circle cx="92" cy="122" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg38c-p2"><circle cx="92" cy="122" r="5" fill="var(--dg-warm)"/></g>
  <g class="dg38c-p3"><circle cx="92" cy="122" r="5" fill="var(--dg-warm)"/></g>

  <rect class="dg38c-cap" x="530" y="102" width="96" height="42" rx="10"/>
  <text x="540" y="120" class="dg38c-s">tubules also</text>
  <text x="540" y="134" class="dg38c-s">go ischemic</text>

  <rect class="dg38c-stg dg38c-g1" x="14"  y="204" width="140" height="34" rx="8"/>
  <text x="24"  y="219" class="dg38c-t">Glomerular blood</text>
  <text x="24"  y="232" class="dg38c-t">flow reduced</text>
  <rect class="dg38c-stg dg38c-g2" x="166" y="204" width="140" height="34" rx="8"/>
  <text x="176" y="219" class="dg38c-t">Glomerular and</text>
  <text x="176" y="232" class="dg38c-t">tubular ischemia</text>
  <rect class="dg38c-stg dg38c-g3" x="318" y="204" width="140" height="34" rx="8"/>
  <text x="328" y="219" class="dg38c-t">Nephrosclerosis</text>
  <text x="328" y="232" class="dg38c-t">and fibrosis</text>
  <rect x="470" y="204" width="156" height="34" rx="8" class="dg38c-stg dg38c-g4" stroke="var(--dg-warm)" stroke-width="1.8"/>
  <text x="480" y="219" class="dg38c-b" fill="var(--dg-warm)">End-stage renal</text>
  <text x="480" y="232" class="dg38c-b" fill="var(--dg-warm)">disease</text>

  <path class="dg38c-ar" d="M156 221 H162 M308 221 H314 M460 221 H466"/>

  <text x="14" y="264" class="dg38c-s">Hypertension is the leading cause of end-stage renal disease, especially in African Americans (Slide 35).</text>
  <text x="14" y="280" class="dg38c-s">BOTH arterioles narrow, so total glomerular perfusion falls &#8212; not a filtration-pressure trade-off.</text>
</svg>`,
};

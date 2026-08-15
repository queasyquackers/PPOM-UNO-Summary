/*
 * cv51 - Lung Mechanics: Elastic Properties of the Lungs
 * (Lecture #51, J. Leheste, Ph.D., M.Sc.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Hysteresis - the inflation and deflation limbs of the P-V loop.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv51-hysteresis"] = {
  title: "Hysteresis: why inflation costs more",
  caption:
    "The excised lung sits in a saline-filled jar on a vacuum pump (Slide 10). Suction inflates it along the lower limb; " +
    "releasing the vacuum lets natural recoil deflate it along the upper limb. " +
    "The two limbs do not overlap - that separation is <b>hysteresis</b>, and the shaded area between them is the extra work of inflation. " +
    "Compliance is the slope: the inflation limb starts almost flat because the alveolar water film's surface tension has to be overcome first, " +
    "so <b>compliance during inspiration is less than compliance during expiration</b>, and compliance is worst at low lung volumes. " +
    "The lecture gives this loop no numeric axis values, so none are shown.",
  svg: `
<svg viewBox="0 0 620 268" role="img" aria-label="A pressure-volume loop for an excised lung. A marker travels up a lower inflation limb that starts almost flat and then steepens, then returns along a separate upper deflation limb that lies at higher volume for the same pressure. The area enclosed between the two limbs is shaded and labelled hysteresis.">
  <style>
    .dg51a-frame { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg51a-axis  { stroke: var(--dg-line); stroke-width: 1.6; }
    .dg51a-in    { fill: none; stroke: var(--dg-cool); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg51a-out   { fill: none; stroke: var(--dg-warm); stroke-width: 3.2; stroke-linejoin: round; stroke-linecap: round; }
    .dg51a-area  { fill: var(--dg-accent); stroke: none; opacity: .13; }
    .dg51a-lbl   { font-size: 11px; }
    .dg51a-key   { font-size: 11px; font-weight: 700; }
    .dg51a-tiny  { font-size: 10px; fill: var(--dg-muted); }
    .dg51a-cool  { fill: var(--dg-cool); }
    .dg51a-warm  { fill: var(--dg-warm); }

    .dg51a-dot { fill: var(--dg-accent); transform: translate(82px, 212px); animation: dg51aRun 10s ease-in-out infinite; }
    @keyframes dg51aRun {
      0%   { transform: translate(82px, 212px) }
      6%   { transform: translate(140px, 203px) }
      12%  { transform: translate(196px, 186px) }
      18%  { transform: translate(248px, 160px) }
      24%  { transform: translate(300px, 130px) }
      30%  { transform: translate(360px, 100px) }
      36%  { transform: translate(430px, 76px) }
      42%  { transform: translate(500px, 64px) }
      48%  { transform: translate(556px, 58px) }
      54%  { transform: translate(556px, 58px) }
      60%  { transform: translate(496px, 60px) }
      66%  { transform: translate(432px, 66px) }
      72%  { transform: translate(370px, 78px) }
      78%  { transform: translate(312px, 94px) }
      84%  { transform: translate(256px, 118px) }
      90%  { transform: translate(198px, 148px) }
      96%  { transform: translate(140px, 182px) }
      100% { transform: translate(82px, 212px) }
    }
    .dg51a-glowin  { animation: dg51aPhase 10s ease-in-out infinite; }
    .dg51a-glowout { animation: dg51aPhase 10s ease-in-out infinite 5s; }
    @keyframes dg51aPhase { 0%,45% { opacity: 1 } 55%,100% { opacity: .45 } }
  </style>

  <rect x="16" y="26" width="588" height="204" rx="10" class="dg51a-frame"/>
  <line x1="70" y1="26" x2="70" y2="215" class="dg51a-axis"/>
  <line x1="70" y1="215" x2="596" y2="215" class="dg51a-axis"/>
  <text x="24" y="44" class="dg51a-tiny">volume</text>
  <text x="596" y="232" class="dg51a-tiny" text-anchor="end">distending (transpulmonary) pressure</text>

  <polygon class="dg51a-area" points="82,212 140,203 196,186 248,160 300,130 360,100 430,76 500,64 556,58 496,60 432,66 370,78 312,94 256,118 198,148 140,182"/>

  <polyline class="dg51a-in dg51a-glowin" points="82,212 140,203 196,186 248,160 300,130 360,100 430,76 500,64 556,58"/>
  <polyline class="dg51a-out dg51a-glowout" points="556,58 496,60 432,66 370,78 312,94 256,118 198,148 140,182 82,212"/>

  <circle class="dg51a-dot" r="7"/>

  <text x="86" y="56" class="dg51a-key">Hysteresis</text>
  <text x="86" y="74" class="dg51a-lbl">inflation needs more pressure than deflation</text>

  <rect x="376" y="122" width="212" height="82" rx="8" fill="var(--dg-surface)" stroke="var(--dg-line)" stroke-width="1"/>
  <line x1="390" y1="142" x2="418" y2="142" class="dg51a-in"/>
  <text x="426" y="146" class="dg51a-lbl dg51a-cool">Inspiration (harder)</text>
  <line x1="390" y1="166" x2="418" y2="166" class="dg51a-out"/>
  <text x="426" y="170" class="dg51a-lbl dg51a-warm">Expiration (easier)</text>
  <text x="390" y="192" class="dg51a-key">C inspiration &#60; C expiration</text>

  <text x="150" y="252" class="dg51a-tiny">flat start = surface tension threshold at low volume</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Where the intrapleural vacuum comes from, and what a pneumothorax does.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv51-pleural-vacuum"] = {
  title: "The intrapleural vacuum, and losing it",
  caption:
    "Two recoils pull on the intrapleural space in opposite directions and neither wins: alveolar surface tension drags the visceral pleura inward, " +
    "while the spring-like chest wall drags the parietal pleura outward. The unresolved tug is the vacuum, about <b>&#8722;5 cm H2O</b> at rest (Slides 11&#8211;12). " +
    "Puncture the parietal pleura and the space equilibrates with atmosphere at <b>0</b>: nothing opposes either recoil any more, so the chest wall springs outward " +
    "to the dashed outline while the alveolus collapses inward. The lesion is loss of the vacuum, not loss of lung tissue, which is why the two structures move opposite ways.",
  svg: `
<svg viewBox="0 0 640 272" role="img" aria-label="Two side by side panels. In the normal panel the chest wall pulls the parietal pleura outward and alveolar surface tension pulls the visceral pleura inward, creating an intrapleural pressure of minus five centimetres of water. In the pneumothorax panel air enters through a puncture, intrapleural pressure becomes zero, the chest wall springs outward past its old dashed outline and the alveolus collapses to a small circle.">
  <style>
    .dg51b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg51b-rib   { fill: none; stroke: var(--dg-ink); stroke-width: 7; stroke-linecap: round; }
    .dg51b-pleu  { stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg51b-space { fill: var(--dg-accent); opacity: .18; }
    .dg51b-alv   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg51b-tube  { stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; fill: none; }
    .dg51b-hd    { font-size: 12px; font-weight: 700; }
    .dg51b-lbl   { font-size: 10px; }
    .dg51b-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg51b-val   { font-size: 14px; font-weight: 700; }
    .dg51b-out   { stroke: var(--dg-warm); fill: var(--dg-warm); }
    .dg51b-in    { stroke: var(--dg-cool); fill: var(--dg-cool); }
    .dg51b-good  { fill: var(--dg-good); }
    .dg51b-arm   { stroke-width: 5; stroke-linecap: round; }

    .dg51b-pullout { animation: dg51bOut 3.6s ease-in-out infinite; }
    .dg51b-pullin  { animation: dg51bIn 3.6s ease-in-out infinite; }
    @keyframes dg51bOut { 0%,100% { transform: translateX(0) } 50% { transform: translateX(-7px) } }
    @keyframes dg51bIn  { 0%,100% { transform: translateX(0) } 50% { transform: translateX(7px) } }

    .dg51b-was  { opacity: .3; stroke-dasharray: 6 5; animation: dg51bWas 4.4s ease-in-out infinite; }
    .dg51b-now  { opacity: 1;  animation: dg51bNow 4.4s ease-in-out infinite; }
    @keyframes dg51bWas { 0%,25% { opacity: 1 } 45%,100% { opacity: .25 } }
    @keyframes dg51bNow { 0%,25% { opacity: .2 } 45%,100% { opacity: 1 } }

    .dg51b-leak { fill: var(--dg-warm); opacity: .9; transform: translate(402px, 140px); animation: dg51bLeak 4.4s linear infinite; }
    @keyframes dg51bLeak {
      0%   { transform: translate(330px, 140px); opacity: 0 }
      15%  { opacity: 1 }
      60%  { transform: translate(402px, 140px); opacity: 1 }
      75%  { transform: translate(402px, 140px); opacity: 0 }
      100% { transform: translate(402px, 140px); opacity: 0 }
    }
  </style>

  <rect x="10" y="30" width="300" height="212" rx="10" class="dg51b-panel"/>
  <rect x="330" y="30" width="300" height="212" rx="10" class="dg51b-panel"/>
  <text x="18" y="22" class="dg51b-hd">Normal</text>
  <text x="338" y="22" class="dg51b-hd">Pneumothorax</text>

  <path class="dg51b-rib" d="M 52,58 C 30,110 30,168 52,220"/>
  <rect x="76" y="56" width="18" height="166" class="dg51b-space"/>
  <line x1="76" y1="56" x2="76" y2="222" class="dg51b-pleu"/>
  <line x1="94" y1="56" x2="94" y2="222" class="dg51b-pleu"/>
  <circle cx="184" cy="146" r="46" class="dg51b-alv"/>
  <path class="dg51b-tube" d="M 206,112 L 250,72"/>
  <text x="184" y="151" class="dg51b-lbl" text-anchor="middle">alveolus</text>
  <text x="256" y="66" class="dg51b-tiny">airway</text>

  <g class="dg51b-pullout">
    <line x1="72" y1="106" x2="46" y2="106" class="dg51b-out dg51b-arm"/>
    <polygon points="46,98 32,106 46,114" class="dg51b-out"/>
  </g>
  <text x="30" y="92" class="dg51b-tiny">chest wall out</text>
  <g class="dg51b-pullin">
    <line x1="98" y1="188" x2="128" y2="188" class="dg51b-in dg51b-arm"/>
    <polygon points="128,180 142,188 128,196" class="dg51b-in"/>
  </g>
  <text x="98" y="210" class="dg51b-tiny">surface tension in</text>

  <text x="160" y="234" class="dg51b-val dg51b-good" text-anchor="middle">P ip = &#8722;5 cm H2O</text>
  <text x="248" y="234" class="dg51b-tiny">vacuum</text>

  <path class="dg51b-rib dg51b-was" d="M 372,58 C 350,110 350,168 372,220"/>
  <path class="dg51b-rib dg51b-now" d="M 356,44 C 328,110 328,176 356,234"/>
  <rect x="396" y="56" width="18" height="166" class="dg51b-space"/>
  <line x1="396" y1="56" x2="396" y2="222" class="dg51b-pleu"/>
  <line x1="414" y1="56" x2="414" y2="222" class="dg51b-pleu"/>
  <circle cx="504" cy="146" r="46" class="dg51b-alv dg51b-was"/>
  <circle cx="504" cy="146" r="17" class="dg51b-alv dg51b-now"/>
  <path class="dg51b-tube" d="M 526,112 L 570,72"/>
  <text x="504" y="212" class="dg51b-lbl" text-anchor="middle">collapsed</text>

  <circle class="dg51b-leak" r="5"/>
  <polygon points="336,132 348,140 336,148" fill="var(--dg-warm)"/>
  <text x="332" y="122" class="dg51b-tiny">air in through puncture</text>

  <text x="480" y="234" class="dg51b-val" text-anchor="middle" fill="var(--dg-warm)">P ip = 0</text>
  <text x="536" y="234" class="dg51b-tiny">no vacuum</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Transmural pressure through the breathing cycle - always positive.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv51-transmural-cycle"] = {
  title: "Transmural pressure across the breathing cycle",
  caption:
    "Alveolar pressure toggles gently between &#8722;1 and +1 while intrapleural pressure swings from &#8722;5 to a maximum of &#8722;8 cm H2O and back (Slides 20&#8211;21). " +
    "Transmural pressure is alveolar minus intrapleural, and the bars show the four values the lecture works out: " +
    "<b>rest +5, inspiration +5.5, peak inspiration +8, expiration +7.5</b>. " +
    "The bar never touches the zero line - transmural pressure is positive and directed outward at every phase, and that is what holds the lung open.",
  svg: `
<svg viewBox="0 0 640 292" role="img" aria-label="Upper panel: two pressure traces across one breathing cycle, alveolar pressure staying near zero and intrapleural pressure dipping from minus five to minus eight centimetres of water at peak inspiration. Lower panel: four bars of transmural pressure equal to plus five at rest, plus five point five during inspiration, plus eight at peak inspiration and plus seven point five during expiration, none of which reaches the zero line.">
  <style>
    .dg51c-frame { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg51c-zero  { stroke: var(--dg-line); stroke-width: 1.4; stroke-dasharray: 4 4; }
    .dg51c-alv   { fill: none; stroke: var(--dg-cool); stroke-width: 3; stroke-linejoin: round; }
    .dg51c-ip    { fill: none; stroke: var(--dg-warm); stroke-width: 3; stroke-linejoin: round; }
    .dg51c-lbl   { font-size: 10px; }
    .dg51c-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg51c-val   { font-size: 13px; font-weight: 700; }
    .dg51c-key   { font-size: 11px; font-weight: 700; }
    .dg51c-base  { stroke: var(--dg-ink); stroke-width: 1.8; }
    .dg51c-bar   { fill: var(--dg-good); opacity: .8; }

    .dg51c-scan { stroke: var(--dg-accent); stroke-width: 2; opacity: .8; transform: translateX(100px); animation: dg51cScan 8s ease-in-out infinite; }
    @keyframes dg51cScan {
      0%,4%    { transform: translateX(100px) }
      21%,25%  { transform: translateX(210px) }
      46%,50%  { transform: translateX(330px) }
      71%,75%  { transform: translateX(450px) }
      96%,100% { transform: translateX(570px) }
    }
    .dg51c-b1 { animation: dg51cPulse 8s ease-in-out infinite; }
    .dg51c-b2 { animation: dg51cPulse 8s ease-in-out infinite 2s; }
    .dg51c-b3 { animation: dg51cPulse 8s ease-in-out infinite 4s; }
    .dg51c-b4 { animation: dg51cPulse 8s ease-in-out infinite 6s; }
    @keyframes dg51cPulse { 0%,18% { opacity: 1 } 26%,100% { opacity: .55 } }
  </style>

  <rect x="16" y="30" width="608" height="150" rx="10" class="dg51c-frame"/>
  <line x1="64" y1="70" x2="612" y2="70" class="dg51c-zero"/>
  <text x="52" y="74" class="dg51c-tiny" text-anchor="end">0</text>
  <text x="24" y="58" class="dg51c-lbl" fill="var(--dg-cool)">P alv</text>
  <text x="24" y="116" class="dg51c-lbl" fill="var(--dg-warm)">P ip</text>

  <polyline class="dg51c-alv" points="100,70 210,78 330,70 450,62 570,70"/>
  <polyline class="dg51c-ip"  points="100,110 210,122 330,134 450,122 570,110"/>

  <text x="100" y="128" class="dg51c-tiny" text-anchor="middle">&#8722;5</text>
  <text x="330" y="152" class="dg51c-tiny" text-anchor="middle">&#8722;8</text>
  <text x="210" y="96" class="dg51c-tiny" text-anchor="middle">&#8722;1</text>
  <text x="450" y="54" class="dg51c-tiny" text-anchor="middle">+1</text>

  <line x1="0" y1="36" x2="0" y2="160" class="dg51c-scan"/>

  <text x="100" y="172" class="dg51c-tiny" text-anchor="middle">A rest</text>
  <text x="210" y="172" class="dg51c-tiny" text-anchor="middle">B inspiration</text>
  <text x="330" y="172" class="dg51c-tiny" text-anchor="middle">C peak</text>
  <text x="450" y="172" class="dg51c-tiny" text-anchor="middle">D expiration</text>
  <text x="570" y="172" class="dg51c-tiny" text-anchor="middle">A rest</text>

  <text x="16" y="200" class="dg51c-key">Transmural = P alv &#8722; P ip (cm H2O)</text>

  <rect class="dg51c-bar dg51c-b1" x="73"  y="221" width="74" height="31"/>
  <rect class="dg51c-bar dg51c-b2" x="203" y="218" width="74" height="34"/>
  <rect class="dg51c-bar dg51c-b3" x="333" y="202" width="74" height="50"/>
  <rect class="dg51c-bar dg51c-b4" x="463" y="205" width="74" height="47"/>

  <text x="110" y="215" class="dg51c-val" text-anchor="middle">+5</text>
  <text x="240" y="212" class="dg51c-val" text-anchor="middle">+5.5</text>
  <text x="370" y="196" class="dg51c-val" text-anchor="middle">+8</text>
  <text x="500" y="199" class="dg51c-val" text-anchor="middle">+7.5</text>

  <line x1="40" y1="252" x2="612" y2="252" class="dg51c-base"/>
  <text x="30" y="256" class="dg51c-tiny" text-anchor="end">0</text>

  <text x="110" y="266" class="dg51c-tiny" text-anchor="middle">0 &#8722; (&#8722;5)</text>
  <text x="240" y="266" class="dg51c-tiny" text-anchor="middle">&#8722;1 &#8722; (&#8722;6.5)</text>
  <text x="370" y="266" class="dg51c-tiny" text-anchor="middle">0 &#8722; (&#8722;8)</text>
  <text x="500" y="266" class="dg51c-tiny" text-anchor="middle">+1 &#8722; (&#8722;6.5)</text>

  <text x="320" y="284" class="dg51c-key" text-anchor="middle" fill="var(--dg-accent)">positive at every phase &#8594; the lung stays open</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 4. Forced expiration: normal vs emphysema, and dynamic airway collapse.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv51-forced-expiration"] = {
  title: "Forced expiration: normal vs emphysema",
  caption:
    "Forced expiration drives intrapleural pressure <b>positive, to +20 cm H2O</b>, in both people - yet a trumpet player does not collapse a lung, " +
    "because what matters is transmural pressure, not the sign of the intrapleural pressure (Slide 22). " +
    "Normally elastic recoil adds force: airway +25 and alveolus +35 give transmural +5 and +15, both outward. " +
    "In emphysema destroyed elastic fibres mean <b>diminished recoil</b>, so the same effort generates only +15 in the large airway (transmural &#8722;5, it collapses) " +
    "and +25 in the alveolus (transmural +5, it stays open). Air is trapped behind a shut airway, which is why pursed-lip breathing - slower, against resistance - reopens it.",
  svg: `
<svg viewBox="0 0 640 284" role="img" aria-label="Two panels of forced expiration. In the normal panel intrapleural pressure is plus twenty, the large airway is plus twenty-five giving a transmural pressure of plus five, and the alveolus is plus thirty-five giving plus fifteen, so air flows out through an open airway. In the emphysema panel intrapleural pressure is still plus twenty but the large airway is only plus fifteen, giving a transmural pressure of minus five so the airway walls pinch shut, while the alveolus at plus twenty-five keeps a transmural pressure of plus five and stays open.">
  <style>
    .dg51d-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg51d-wall  { fill: none; stroke: var(--dg-ink); stroke-width: 3.4; stroke-linecap: round; }
    .dg51d-alv   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2.2; }
    .dg51d-hd    { font-size: 12px; font-weight: 700; }
    .dg51d-lbl   { font-size: 10px; }
    .dg51d-tiny  { font-size: 9px; fill: var(--dg-muted); }
    .dg51d-val   { font-size: 12px; font-weight: 700; }
    .dg51d-good  { fill: var(--dg-good); }
    .dg51d-bad   { fill: var(--dg-warm); }
    .dg51d-ip    { font-size: 12px; font-weight: 700; fill: var(--dg-cool); }

    .dg51d-puff { fill: var(--dg-accent); opacity: .9; transform: translate(160px, 120px); animation: dg51dUp 2.8s linear infinite; }
    .dg51d-puff2 { fill: var(--dg-accent); opacity: .9; transform: translate(160px, 70px); animation: dg51dUp 2.8s linear infinite 1.4s; }
    @keyframes dg51dUp {
      0%   { transform: translate(160px, 158px); opacity: 0 }
      15%  { opacity: .9 }
      80%  { opacity: .9 }
      100% { transform: translate(160px, 46px); opacity: 0 }
    }

    .dg51d-open { opacity: .18; animation: dg51dOpen 4.6s ease-in-out infinite; }
    .dg51d-shut { opacity: 1; animation: dg51dShut 4.6s ease-in-out infinite; }
    @keyframes dg51dOpen { 0%,20% { opacity: 1 } 45%,100% { opacity: .18 } }
    @keyframes dg51dShut { 0%,20% { opacity: .18 } 45%,100% { opacity: 1 } }

    .dg51d-stuck { fill: var(--dg-warm); opacity: .9; transform: translate(480px, 150px); animation: dg51dStuck 4.6s ease-in-out infinite; }
    @keyframes dg51dStuck {
      0%   { transform: translate(480px, 158px); opacity: 0 }
      12%  { transform: translate(480px, 150px); opacity: .9 }
      30%  { transform: translate(480px, 132px); opacity: .9 }
      55%  { transform: translate(480px, 150px); opacity: .9 }
      100% { transform: translate(480px, 158px); opacity: .5 }
    }
  </style>

  <rect x="10" y="28" width="300" height="224" rx="10" class="dg51d-panel"/>
  <rect x="330" y="28" width="300" height="224" rx="10" class="dg51d-panel"/>
  <text x="18" y="20" class="dg51d-hd">Normal forced expiration</text>
  <text x="338" y="20" class="dg51d-hd">Emphysema</text>

  <text x="24" y="52" class="dg51d-ip">P ip +20</text>
  <line x1="140" y1="52" x2="140" y2="160" class="dg51d-wall"/>
  <line x1="180" y1="52" x2="180" y2="160" class="dg51d-wall"/>
  <circle cx="160" cy="198" r="42" class="dg51d-alv"/>
  <text x="160" y="196" class="dg51d-val" text-anchor="middle">+35</text>
  <text x="160" y="212" class="dg51d-tiny" text-anchor="middle">alveolus</text>
  <circle class="dg51d-puff" r="6"/>
  <circle class="dg51d-puff2" r="6"/>
  <polygon points="152,34 168,34 160,20" fill="var(--dg-accent)"/>

  <text x="196" y="76" class="dg51d-lbl">large airway</text>
  <text x="196" y="92" class="dg51d-val">+25</text>
  <text x="196" y="110" class="dg51d-val dg51d-good">P tm +5</text>
  <text x="196" y="126" class="dg51d-tiny">stays open</text>
  <text x="212" y="196" class="dg51d-val dg51d-good">P tm +15</text>
  <text x="212" y="212" class="dg51d-tiny">stays open</text>

  <text x="344" y="52" class="dg51d-ip">P ip +20</text>
  <g class="dg51d-open">
    <line x1="460" y1="52" x2="460" y2="160" class="dg51d-wall"/>
    <line x1="500" y1="52" x2="500" y2="160" class="dg51d-wall"/>
  </g>
  <g class="dg51d-shut">
    <path class="dg51d-wall" d="M 460,52 C 478,86 478,124 460,160"/>
    <path class="dg51d-wall" d="M 500,52 C 482,86 482,124 500,160"/>
  </g>
  <circle cx="480" cy="198" r="42" class="dg51d-alv"/>
  <text x="480" y="196" class="dg51d-val" text-anchor="middle">+25</text>
  <text x="480" y="212" class="dg51d-tiny" text-anchor="middle">alveolus</text>
  <circle class="dg51d-stuck" r="6"/>

  <text x="516" y="76" class="dg51d-lbl">large airway</text>
  <text x="516" y="92" class="dg51d-val">+15</text>
  <text x="516" y="110" class="dg51d-val dg51d-bad">P tm &#8722;5</text>
  <text x="516" y="126" class="dg51d-tiny">collapses</text>
  <text x="532" y="196" class="dg51d-val dg51d-good">P tm +5</text>
  <text x="532" y="212" class="dg51d-tiny">stays open</text>

  <text x="18" y="272" class="dg51d-tiny">Transmural = airway or alveolar pressure &#8722; intrapleural pressure (+20 in both).</text>
  <text x="380" y="272" class="dg51d-tiny">Reduced recoil, not reduced effort, is what drops the airway number.</text>
</svg>`,
};

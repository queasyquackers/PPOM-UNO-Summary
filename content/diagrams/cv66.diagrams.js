window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv66 - Pathology of Myocardial Infarction and Ischemic Heart Disease (M. Plummer, MD).
// --------------------------------------------------------------------------

window.LECTURE_DIAGRAMS["cv66-biomarker-windows"] = {
  title: "Why a normal CK-MB can still mean an MI",
  caption:
    "Each marker is only useful inside its own window (Slides 13-14). <strong>Myoglobin</strong> rises and falls within a day, which is why it is rarely used. " +
    "<strong>CK-MB</strong> rises within 4 hours, peaks near 24 hours and is <strong>back to normal by 72 hours</strong>. " +
    "<strong>Troponin I/T</strong> rises at 2-4 hours, peaks at 24-48 hours and <strong>stays elevated 7-10 days</strong>. " +
    "As the time cursor passes the day-3 line, CK-MB has already returned to baseline while troponin is still high: " +
    "that combination means an infarct more than about 3 days old (the Slide 54 question), and a new CK-MB rise after this point means reinfarction. " +
    "The time axis is compressed and heights are relative; the lecture gives times, not concentrations.",
  svg: `
<svg viewBox="0 0 640 290" role="img" aria-label="Three serum marker curves plotted against time after myocardial infarction on a compressed axis from zero hours to ten days. Myoglobin rises and falls within the first day. CK-MB rises within about four hours, peaks near twenty-four hours and returns below the normal limit by seventy-two hours. Troponin rises at two to four hours, peaks between twenty-four and forty-eight hours and stays above the normal limit until about seven to ten days. A dashed line at seventy-two hours, day three, marks the point where CK-MB is normal but troponin is still elevated. A vertical cursor sweeps from left to right along the time axis.">
  <style>
    .dg66a-ax    { stroke: var(--dg-ink); stroke-width: 1.3; opacity: .7; }
    .dg66a-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 5; }
    .dg66a-ref   { stroke: var(--dg-muted); stroke-width: 1.2; stroke-dasharray: 6 4; }
    .dg66a-day3  { stroke: var(--dg-good); stroke-width: 1.6; stroke-dasharray: 4 3; }
    .dg66a-lbl   { font-size: 10px; }
    .dg66a-sub   { font-size: 9px; fill: var(--dg-muted); }
    .dg66a-hdr   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dg66a-myo   { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; stroke-linecap: round; }
    .dg66a-ck    { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-linecap: round; }
    .dg66a-tn    { fill: none; stroke: var(--dg-accent); stroke-width: 3.4; stroke-linecap: round; }
    .dg66a-sweep { stroke: var(--dg-ink); stroke-width: 1.4; opacity: .45; animation: dg66aSweep 10s linear infinite; }
    .dg66a-flag  { animation: dg66aFlag 10s ease-in-out infinite; }
    @keyframes dg66aSweep { from { transform: translateX(0) } to { transform: translateX(530px) } }
    @keyframes dg66aFlag { 0%,38% { opacity: .55 } 46%,60% { opacity: 1 } 70%,100% { opacity: .55 } }
  </style>

  <text x="14" y="20" class="dg66a-hdr">SERUM MARKERS AFTER MI (relative level)</text>

  <line x1="70" y1="40" x2="70" y2="222" class="dg66a-ax"/>
  <line x1="70" y1="222" x2="608" y2="222" class="dg66a-ax"/>

  <line x1="130" y1="40" x2="130" y2="222" class="dg66a-grid"/>
  <line x1="180" y1="40" x2="180" y2="222" class="dg66a-grid"/>
  <line x1="250" y1="40" x2="250" y2="222" class="dg66a-grid"/>
  <line x1="470" y1="40" x2="470" y2="222" class="dg66a-grid"/>
  <line x1="560" y1="40" x2="560" y2="222" class="dg66a-grid"/>

  <text x="66" y="238" class="dg66a-sub">0</text>
  <text x="120" y="238" class="dg66a-sub">12 h</text>
  <text x="170" y="238" class="dg66a-sub">24 h</text>
  <text x="240" y="238" class="dg66a-sub">48 h</text>
  <text x="298" y="238" class="dg66a-sub">72 h</text>
  <text x="462" y="238" class="dg66a-sub">7 d</text>
  <text x="550" y="238" class="dg66a-sub">10 d</text>
  <text x="70" y="256" class="dg66a-sub">time after onset (axis compressed after 72 h)</text>

  <line x1="70" y1="200" x2="608" y2="200" class="dg66a-ref"/>
  <text x="530" y="194" class="dg66a-sub">normal limit</text>

  <path class="dg66a-myo" d="M70,220 C86,216 96,130 112,112 C126,98 142,196 176,212 L200,216"/>
  <path class="dg66a-ck" d="M70,220 C88,219 96,200 112,168 C134,122 158,96 180,96 C214,96 252,178 310,214 L330,216"/>
  <path class="dg66a-tn" d="M70,220 C84,219 94,192 114,150 C140,94 172,64 214,60 C262,56 300,92 360,132 C420,172 480,198 540,214 L600,217"/>

  <text x="92" y="104" class="dg66a-lbl" fill="var(--dg-warm)">myoglobin</text>
  <text x="96" y="92" class="dg66a-sub">up and down in a day</text>
  <text x="196" y="112" class="dg66a-lbl" fill="var(--dg-cool)">CK-MB</text>
  <text x="196" y="124" class="dg66a-sub">peak ~24 h, normal by 72 h</text>
  <text x="330" y="100" class="dg66a-lbl" fill="var(--dg-accent)">troponin I / T</text>
  <text x="330" y="112" class="dg66a-sub">rise 2-4 h, peak 24-48 h, up 7-10 days</text>

  <line x1="310" y1="40" x2="310" y2="222" class="dg66a-day3"/>
  <g class="dg66a-flag">
    <rect x="316" y="150" width="148" height="34" rx="6" fill="var(--dg-panel)" stroke="var(--dg-good)"/>
    <text x="324" y="164" class="dg66a-lbl" fill="var(--dg-good)">Day 3: CK-MB normal,</text>
    <text x="324" y="178" class="dg66a-lbl" fill="var(--dg-good)">troponin still elevated</text>
  </g>

  <line x1="70" y1="40" x2="70" y2="222" class="dg66a-sweep"/>

  <text x="70" y="278" class="dg66a-sub">A fresh CK-MB rise days after an MI = reinfarction (troponin is still up from the first event).</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv66-infarct-clock"] = {
  title: "The infarct clock predicts the complication",
  caption:
    "Top row: the microscopic stages from Slides 19-20 and 57. The middle row shows the two inflammatory waves - " +
    "<strong>neutrophils peak at 1-3 days</strong> and <strong>macrophages at 3-7 days</strong> as neutrophils fall - then collagen rising into scar. " +
    "Bottom row: each complication sits under the stage that causes it (Slides 34-47). Arrhythmia/VF comes in the first hours (usually 4-24 h); " +
    "<strong>fibrinous pericarditis at 2-3 days</strong> is the neutrophil phase; <strong>free wall, papillary muscle and septal rupture at 3-7 days</strong> happen when the wall is softest, before collagen; " +
    "<strong>Dressler syndrome at 2 weeks-2 months</strong> must wait for autoantibodies; the <strong>true aneurysm</strong> is a late scar complication. " +
    "Stage boxes are equal width for legibility and are not to scale in time; the lecturer stresses the ranges are a spectrum.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="A timeline of eight equal boxes for the stages of a myocardial infarct: zero to thirty minutes reversible with no change; thirty minutes to four hours wavy fibers; four to twenty-four hours coagulative necrosis beginning; one to three days neutrophils; three to seven days macrophages and the softest wall; seven to fourteen days granulation tissue; two to eight weeks increasing collagen; more than two months dense scar. Beneath the boxes a neutrophil wave peaks at one to three days, a macrophage wave peaks at three to seven days, and a collagen line rises from about one week onward. Beneath that, complication bars: arrhythmia and ventricular fibrillation in the first hours; acute fibrinous pericarditis at one to three days; free wall, papillary muscle and septal rupture at three to seven days; Dressler syndrome from two weeks to two months; true aneurysm with mural thrombus from weeks to months. A highlight steps from stage to stage.">
  <style>
    .dg66b-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg66b-hi    { fill: none; stroke: var(--dg-accent); stroke-width: 2.4; animation: dg66bStep 16s steps(8, end) infinite; }
    .dg66b-time  { font-size: 9.5px; font-weight: 700; }
    .dg66b-lbl   { font-size: 8.6px; }
    .dg66b-sub   { font-size: 8.6px; fill: var(--dg-muted); }
    .dg66b-hdr   { font-size: 10px; font-weight: 700; fill: var(--dg-accent); }
    .dg66b-neu   { fill: var(--dg-warm); opacity: .28; stroke: var(--dg-warm); stroke-width: 1.6; }
    .dg66b-mac   { fill: var(--dg-cool); opacity: .28; stroke: var(--dg-cool); stroke-width: 1.6; }
    .dg66b-col   { fill: none; stroke: var(--dg-good); stroke-width: 2.6; stroke-linecap: round; }
    .dg66b-bar   { stroke-width: 9; stroke-linecap: round; opacity: .85; }
    .dg66b-early { stroke: var(--dg-warm); }
    .dg66b-mid   { stroke: var(--dg-accent); }
    .dg66b-late  { stroke: var(--dg-cool); }
    @keyframes dg66bStep { from { transform: translateX(0) } to { transform: translateX(528px) } }
  </style>

  <text x="14" y="18" class="dg66b-hdr">HISTOLOGY</text>

  <rect x="50"  y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="116" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="182" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="248" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="314" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="380" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="446" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="512" y="26" width="64" height="58" rx="6" class="dg66b-box"/>
  <rect x="49" y="25" width="66" height="60" rx="7" class="dg66b-hi"/>

  <text x="55"  y="42" class="dg66b-time">0-30 min</text>
  <text x="55"  y="56" class="dg66b-lbl">reversible</text>
  <text x="55"  y="68" class="dg66b-sub">no change</text>

  <text x="121" y="42" class="dg66b-time">30 min-4 h</text>
  <text x="121" y="56" class="dg66b-lbl">wavy fibers</text>

  <text x="187" y="42" class="dg66b-time">4-24 h</text>
  <text x="187" y="56" class="dg66b-lbl">coagulative</text>
  <text x="187" y="68" class="dg66b-lbl">necrosis</text>
  <text x="187" y="80" class="dg66b-sub">begins</text>

  <text x="253" y="42" class="dg66b-time">1-3 d</text>
  <text x="253" y="56" class="dg66b-lbl">neutrophils</text>

  <text x="319" y="42" class="dg66b-time">3-7 d</text>
  <text x="319" y="56" class="dg66b-lbl">macrophages</text>
  <text x="319" y="68" class="dg66b-sub">softest wall</text>

  <text x="385" y="42" class="dg66b-time">7-14 d</text>
  <text x="385" y="56" class="dg66b-lbl">granulation</text>
  <text x="385" y="68" class="dg66b-lbl">tissue</text>

  <text x="451" y="42" class="dg66b-time">2-8 wk</text>
  <text x="451" y="56" class="dg66b-lbl">collagen up,</text>
  <text x="451" y="68" class="dg66b-lbl">cells down</text>

  <text x="517" y="42" class="dg66b-time">over 2 mo</text>
  <text x="517" y="56" class="dg66b-lbl">dense scar</text>

  <text x="14" y="104" class="dg66b-hdr">CELLS</text>
  <line x1="50" y1="150" x2="578" y2="150" stroke="var(--dg-line)" stroke-width="1"/>
  <path class="dg66b-neu" d="M200,150 C230,150 250,104 280,104 C310,104 330,140 360,148 L380,150 Z"/>
  <path class="dg66b-mac" d="M280,150 C310,148 325,108 346,108 C370,108 392,140 430,148 L446,150 Z"/>
  <path class="dg66b-col" d="M380,148 C420,146 450,132 478,122 C510,110 540,104 578,102"/>
  <text x="222" y="122" class="dg66b-lbl" fill="var(--dg-warm)">neutrophils</text>
  <text x="360" y="112" class="dg66b-lbl" fill="var(--dg-cool)">macrophages</text>
  <text x="500" y="98" class="dg66b-lbl" fill="var(--dg-good)">collagen</text>

  <text x="14" y="172" class="dg66b-hdr">COMPLICATIONS</text>

  <line x1="100" y1="188" x2="232" y2="188" class="dg66b-bar dg66b-early"/>
  <text x="240" y="191" class="dg66b-lbl">arrhythmia / VF - first hours, #1 pre-hospital killer</text>

  <line x1="256" y1="210" x2="306" y2="210" class="dg66b-bar dg66b-mid"/>
  <text x="314" y="213" class="dg66b-lbl">fibrinous pericarditis, 2-3 d</text>

  <line x1="322" y1="232" x2="372" y2="232" class="dg66b-bar dg66b-early"/>
  <text x="380" y="229" class="dg66b-lbl">rupture: free wall (tamponade),</text>
  <text x="380" y="240" class="dg66b-lbl">papillary muscle, septum - 3-7 d</text>

  <line x1="452" y1="260" x2="540" y2="260" class="dg66b-bar dg66b-late"/>
  <text x="300" y="263" class="dg66b-lbl">Dressler syndrome, 2 wk-2 mo</text>

  <line x1="456" y1="282" x2="578" y2="282" class="dg66b-bar dg66b-late"/>
  <text x="222" y="285" class="dg66b-lbl">true aneurysm, mural thrombus - weeks-months</text>

  <text x="50" y="306" class="dg66b-sub">Boxes are equal width, not to time scale; the lecturer calls the ranges a spectrum.</text>
</svg>`,
};

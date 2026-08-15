/*
 * cv50 - Transport of Gases in Blood and Tissue Fluids
 * (Lecture #50, J. R. Leheste, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The dissociation curve sliding left and right. A static curve cannot show
//    that the SAME 50% saturation is reached at three different PO2 values.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv50-bohr-shift"] = {
  title: "Right and left shift at P50",
  caption:
    "The same sigmoidal curve is drawn three times and the highlight cycles through them; the marker on the dashed 50%-saturation line " +
    "slides to show where P50 lands each time. Unshifted, hemoglobin needs the PO2 to fall all the way to 25 mmHg before it gives up half its oxygen - " +
    "lower than the ~40 mmHg the body ever actually reaches. A right shift moves P50 out to 40 mmHg, so working muscle can extract oxygen at a pressure it really sees; " +
    "a left shift pulls P50 in to 12.5 mmHg and makes unloading much harder. Note the flat top: dropping PO2 from 100 to 50 mmHg still leaves ~85% saturation. " +
    "All three P50 values are this lecture's (Slides 10 and 12).",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="An oxygen-hemoglobin dissociation curve plotted as hemoglobin saturation against partial pressure of oxygen, drawn three times. The unshifted sigmoid curve reaches fifty percent saturation at a partial pressure of 25 millimetres of mercury. A right-shifted curve reaches fifty percent saturation at 40 millimetres of mercury, which makes oxygen unloading easier in active tissue. A left-shifted curve reaches fifty percent saturation at only 12.5 millimetres of mercury, which makes unloading harder.">
  <style>
    .dg50a-ax   { stroke: var(--dg-line); stroke-width: 1.8; }
    .dg50a-grid { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 4; opacity: .8; }
    .dg50a-lbl  { font-size: 11px; }
    .dg50a-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg50a-hd   { font-size: 11.5px; font-weight: 700; letter-spacing: .05em; }
    .dg50a-cv   { fill: none; stroke-width: 3.2; stroke-linecap: round; }
    .dg50a-n    { stroke: var(--dg-accent); }
    .dg50a-r    { stroke: var(--dg-warm); }
    .dg50a-l    { stroke: var(--dg-cool); }
    .dg50a-nf   { fill: var(--dg-accent); }
    .dg50a-rf   { fill: var(--dg-warm); }
    .dg50a-lf   { fill: var(--dg-cool); }

    .dg50a-gn { animation: dg50aN 10.5s ease-in-out infinite; }
    .dg50a-gr { animation: dg50aR 10.5s ease-in-out infinite; }
    .dg50a-gl { animation: dg50aL 10.5s ease-in-out infinite; }
    @keyframes dg50aN { 0% { opacity: 1 } 28% { opacity: 1 } 34% { opacity: .28 } 94% { opacity: .28 } 100% { opacity: 1 } }
    @keyframes dg50aR { 0% { opacity: .28 } 30% { opacity: .28 } 36% { opacity: 1 } 61% { opacity: 1 } 67% { opacity: .28 } 100% { opacity: .28 } }
    @keyframes dg50aL { 0% { opacity: .28 } 63% { opacity: .28 } 69% { opacity: 1 } 94% { opacity: 1 } 100% { opacity: .28 } }

    .dg50a-dot { animation: dg50aSlide 10.5s ease-in-out infinite; }
    @keyframes dg50aSlide {
      0%   { transform: translateX(0) }
      30%  { transform: translateX(0) }
      36%  { transform: translateX(60px) }
      61%  { transform: translateX(60px) }
      69%  { transform: translateX(-50px) }
      94%  { transform: translateX(-50px) }
      100% { transform: translateX(0) }
    }
  </style>

  <text x="16" y="20" class="dg50a-sub">P50 = the PO2 at which hemoglobin has released two of its four oxygens</text>

  <line x1="70" y1="55" x2="70" y2="250" class="dg50a-ax"/>
  <line x1="70" y1="250" x2="470" y2="250" class="dg50a-ax"/>

  <line x1="60" y1="152" x2="300" y2="152" class="dg50a-grid"/>
  <text x="52" y="255" class="dg50a-sub" text-anchor="end">0</text>
  <text x="52" y="156" class="dg50a-sub" text-anchor="end">50</text>
  <text x="52" y="88"  class="dg50a-sub" text-anchor="end">85</text>
  <text x="52" y="59"  class="dg50a-sub" text-anchor="end">100</text>
  <text transform="rotate(-90 22 160)" x="22" y="160" class="dg50a-sub" text-anchor="middle">Hb saturation (%)</text>

  <g class="dg50a-gl">
    <path class="dg50a-cv dg50a-l" d="M70,250 C88,236 105,194 120,152 C140,102 170,80 210,72 C290,64 400,58 470,56"/>
  </g>
  <g class="dg50a-gn">
    <path class="dg50a-cv dg50a-n" d="M70,250 C110,247 145,200 170,152 C200,98 230,90 270,84 C335,77 400,66 470,60"/>
  </g>
  <g class="dg50a-gr">
    <path class="dg50a-cv dg50a-r" d="M70,250 C125,248 190,212 230,152 C265,105 300,95 340,88 C385,80 430,72 470,66"/>
  </g>

  <circle cx="270" cy="84" r="4" class="dg50a-nf"/>
  <text x="278" y="78" class="dg50a-sub">85% at PO2 50</text>

  <g class="dg50a-dot">
    <circle cx="170" cy="152" r="7" fill="var(--dg-ink)"/>
    <circle cx="170" cy="152" r="12" fill="none" stroke="var(--dg-ink)" stroke-width="1.2" opacity=".4"/>
  </g>

  <line x1="120" y1="246" x2="120" y2="254" class="dg50a-ax"/>
  <line x1="170" y1="246" x2="170" y2="254" class="dg50a-ax"/>
  <line x1="230" y1="246" x2="230" y2="254" class="dg50a-ax"/>
  <line x1="470" y1="246" x2="470" y2="254" class="dg50a-ax"/>
  <text x="120" y="268" class="dg50a-sub dg50a-lf" text-anchor="middle">12.5</text>
  <text x="170" y="268" class="dg50a-sub dg50a-nf" text-anchor="middle">25</text>
  <text x="230" y="268" class="dg50a-sub dg50a-rf" text-anchor="middle">40</text>
  <text x="470" y="268" class="dg50a-sub" text-anchor="middle">100</text>
  <text x="270" y="290" class="dg50a-lbl" text-anchor="middle">PO2 (mmHg)</text>
  <text x="270" y="306" class="dg50a-sub" text-anchor="middle">lowest PO2 the body normally reaches is about 40</text>

  <g class="dg50a-gr">
    <text x="492" y="72"  class="dg50a-hd dg50a-rf">RIGHT SHIFT</text>
    <text x="492" y="90"  class="dg50a-lbl">easier unloading</text>
    <text x="492" y="106" class="dg50a-sub">high PCO2, low pH, heat,</text>
    <text x="492" y="120" class="dg50a-sub">2,3-DPG - active muscle</text>
  </g>
  <g class="dg50a-gn">
    <text x="492" y="152" class="dg50a-hd dg50a-nf">UNSHIFTED</text>
    <text x="492" y="170" class="dg50a-lbl">P50 = 25 mmHg</text>
  </g>
  <g class="dg50a-gl">
    <text x="492" y="202" class="dg50a-hd dg50a-lf">LEFT SHIFT</text>
    <text x="492" y="220" class="dg50a-lbl">harder unloading</text>
    <text x="492" y="236" class="dg50a-sub">lung, quiet tissue,</text>
    <text x="492" y="250" class="dg50a-sub">fetal Hb (no 2,3-DPG)</text>
  </g>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. One CO2 molecule from muscle into the red cell. The teaching point is the
//    ORDER of the steps and the DIRECTIONS of the two ions crossing band 3.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv50-co2-carriage"] = {
  title: "CO2 into the red cell",
  caption:
    "Follow one CO2 molecule out of exercising muscle. It dissolves into plasma and diffuses into the red cell without binding anything, " +
    "which is why it still counts toward PCO2. Carbonic anhydrase - the only red-cell-bound part of the buffer system - converts it to carbonic acid and then to bicarbonate plus a proton. " +
    "Bicarbonate leaves for the plasma and chloride enters to keep the charge balanced: the chloride shift, run by the band 3 anion exchanger. " +
    "The proton is mopped up by deoxyhemoglobin, which is the better H+ buffer and is exactly what hemoglobin has just become after delivering its oxygen here. " +
    "Every arrow is reversible; in the lung the whole sequence runs backwards (Slides 15-17).",
  svg: `
<svg viewBox="0 0 640 308" role="img" aria-label="Carbon dioxide made by active muscle diffuses through plasma into a red blood cell. Inside, carbonic anhydrase converts carbon dioxide and water to carbonic acid and then to bicarbonate plus a hydrogen ion. Bicarbonate leaves the cell into plasma while a chloride ion enters through the band 3 exchanger, the chloride shift. The hydrogen ion is buffered by deoxyhemoglobin. In the lung all of these reactions reverse.">
  <style>
    .dg50b-lbl  { font-size: 11px; }
    .dg50b-sub  { font-size: 10px; fill: var(--dg-muted); }
    .dg50b-hd   { font-size: 10.5px; font-weight: 700; letter-spacing: .1em; }
    .dg50b-rx   { font-size: 13px; font-weight: 700; }
    .dg50b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg50b-cell { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg50b-ar   { stroke-width: 2.4; fill: none; stroke-linecap: round; }
    .dg50b-ink  { stroke: var(--dg-ink); }
    .dg50b-warm { stroke: var(--dg-warm); }
    .dg50b-warmf{ fill: var(--dg-warm); }
    .dg50b-cool { stroke: var(--dg-cool); }
    .dg50b-coolf{ fill: var(--dg-cool); }
    .dg50b-acc  { stroke: var(--dg-accent); }
    .dg50b-accf { fill: var(--dg-accent); }
    .dg50b-goodf{ fill: var(--dg-good); }

    .dg50b-in { animation: dg50bIn 8s linear infinite; }
    @keyframes dg50bIn {
      0%   { transform: translateX(0);     opacity: 0 }
      8%   { opacity: 1 }
      26%  { opacity: 1 }
      32%  { transform: translateX(140px); opacity: 0 }
      100% { transform: translateX(140px); opacity: 0 }
    }
    .dg50b-s1 { animation: dg50bStep 8s ease-in-out infinite 0.9s; }
    .dg50b-s2 { animation: dg50bStep 8s ease-in-out infinite 2.1s; }
    .dg50b-s3 { animation: dg50bStep 8s ease-in-out infinite 3.3s; }
    @keyframes dg50bStep { 0% { opacity: .35 } 10% { opacity: 1 } 45% { opacity: 1 } 60% { opacity: .35 } 100% { opacity: .35 } }

    .dg50b-outb { animation: dg50bOut 8s ease-in-out infinite; }
    @keyframes dg50bOut {
      0%   { transform: translateX(0);   opacity: 0 }
      45%  { transform: translateX(0);   opacity: 0 }
      52%  { opacity: 1 }
      72%  { transform: translateX(-78px); opacity: 1 }
      80%  { transform: translateX(-78px); opacity: 0 }
      100% { transform: translateX(-78px); opacity: 0 }
    }
    .dg50b-incl { animation: dg50bCl 8s ease-in-out infinite; }
    @keyframes dg50bCl {
      0%   { transform: translateX(0);  opacity: 0 }
      50%  { transform: translateX(0);  opacity: 0 }
      57%  { opacity: 1 }
      77%  { transform: translateX(78px); opacity: 1 }
      85%  { transform: translateX(78px); opacity: 0 }
      100% { transform: translateX(78px); opacity: 0 }
    }
    .dg50b-hplus { animation: dg50bH 8s ease-in-out infinite; }
    @keyframes dg50bH {
      0%   { transform: translate(0,0); opacity: 0 }
      52%  { transform: translate(0,0); opacity: 0 }
      60%  { opacity: 1 }
      82%  { transform: translate(38px,6px); opacity: 1 }
      90%  { transform: translate(38px,6px); opacity: 0 }
      100% { transform: translate(38px,6px); opacity: 0 }
    }
  </style>

  <rect x="108" y="38" width="520" height="224" rx="14" class="dg50b-box"/>
  <text x="120" y="56" class="dg50b-hd" fill="var(--dg-muted)">PLASMA</text>

  <rect x="14" y="95" width="86" height="100" rx="10" class="dg50b-box"/>
  <text x="57" y="128" class="dg50b-hd" text-anchor="middle">ACTIVE</text>
  <text x="57" y="144" class="dg50b-hd" text-anchor="middle">MUSCLE</text>
  <text x="57" y="168" class="dg50b-sub" text-anchor="middle">metabolism</text>
  <text x="57" y="182" class="dg50b-sub" text-anchor="middle">makes CO2</text>

  <line x1="100" y1="145" x2="232" y2="145" class="dg50b-ar dg50b-ink" opacity=".5"/>
  <polygon points="232,139 246,145 232,151" fill="var(--dg-ink)" opacity=".5"/>
  <g class="dg50b-in">
    <circle cx="112" cy="145" r="7" class="dg50b-accf"/>
    <text x="112" y="149" class="dg50b-sub" text-anchor="middle" fill="var(--dg-surface)">CO2</text>
  </g>
  <text x="168" y="132" class="dg50b-sub" text-anchor="middle">diffuses, binds nothing</text>

  <rect x="248" y="58" width="250" height="186" rx="28" class="dg50b-cell"/>
  <text x="373" y="78" class="dg50b-hd" text-anchor="middle">RED BLOOD CELL</text>

  <g class="dg50b-s1">
    <text x="330" y="108" class="dg50b-rx" text-anchor="middle">CO2 + H2O</text>
    <line x1="330" y1="116" x2="330" y2="134" class="dg50b-ar dg50b-acc"/>
    <polygon points="324,134 330,146 336,134" class="dg50b-accf"/>
    <text x="344" y="132" class="dg50b-sub">carbonic anhydrase</text>
  </g>
  <g class="dg50b-s2">
    <text x="330" y="164" class="dg50b-rx" text-anchor="middle">H2CO3</text>
    <line x1="330" y1="172" x2="330" y2="184" class="dg50b-ar dg50b-acc"/>
    <polygon points="324,184 330,194 336,184" class="dg50b-accf"/>
  </g>
  <g class="dg50b-s3">
    <text x="322" y="212" class="dg50b-rx" text-anchor="middle">HCO3-</text>
    <text x="362" y="212" class="dg50b-rx" text-anchor="middle">+  H+</text>
  </g>

  <rect x="240" y="152" width="16" height="60" rx="4" fill="var(--dg-panel)" stroke="var(--dg-ink)" stroke-width="1.6"/>
  <text x="248" y="146" class="dg50b-sub" text-anchor="middle">band 3</text>

  <line x1="236" y1="168" x2="176" y2="168" class="dg50b-ar dg50b-warm"/>
  <polygon points="176,162 164,168 176,174" class="dg50b-warmf"/>
  <text x="200" y="160" class="dg50b-sub" text-anchor="middle">HCO3- out</text>
  <g class="dg50b-outb">
    <circle cx="228" cy="168" r="6" class="dg50b-warmf"/>
  </g>

  <line x1="164" y1="196" x2="236" y2="196" class="dg50b-ar dg50b-cool"/>
  <polygon points="236,190 248,196 236,202" class="dg50b-coolf"/>
  <text x="200" y="216" class="dg50b-sub" text-anchor="middle">Cl- in</text>
  <g class="dg50b-incl">
    <circle cx="170" cy="196" r="6" class="dg50b-coolf"/>
  </g>
  <text x="200" y="234" class="dg50b-sub" text-anchor="middle">chloride shift</text>

  <rect x="398" y="176" width="94" height="52" rx="10" fill="var(--dg-panel)" stroke="var(--dg-good)" stroke-width="1.8"/>
  <text x="445" y="198" class="dg50b-lbl" text-anchor="middle">deoxy-Hb</text>
  <text x="445" y="216" class="dg50b-sub" text-anchor="middle">buffers H+ better</text>
  <g class="dg50b-hplus">
    <circle cx="384" cy="207" r="5" class="dg50b-goodf"/>
  </g>

  <text x="14" y="284" class="dg50b-sub">CO2 inside the cell is not bound to anything - it still counts toward PCO2. Over 80% of blood CO2 travels on as bicarbonate.</text>
  <text x="14" y="300" class="dg50b-sub">In the lung every arrow runs backwards: HCO3- and H+ recombine, CO2 and H2O are regenerated, and the CO2 is blown off.</text>
</svg>`,
};

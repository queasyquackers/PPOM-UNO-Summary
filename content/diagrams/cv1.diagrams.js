/*
 * cv1 - Principles of Balanced Ligamentous Tension (H. Ettlinger, D.O., FAAO).
 * Authoring rules live in the header of ../../lecture_diagrams.js.
 * Colors come only from the shared --dg-* variables; animation is CSS keyframes
 * only; every diagram must still teach with animation frozen.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// cv1 - The point of balanced tension, reached three ways.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv1-point-of-balanced-tension"] = {
  title: "The point of balanced tension",
  caption:
    "The point of balanced tension is defined as the point in an articulation's range of motion where the ligaments are " +
    "'poised between the normal tension present throughout the free range of motion and the increased tension preceding " +
    "the strain' (Slide 41) &#8212; the tinted band between the two dashed levels. Two ligament tensions are plotted as the " +
    "joint is carried through its range: the strained ligament, which slacks with exaggeration and tightens into the strain, " +
    "and its opposite, which is slack around the resting position and tight at either extreme. The two curves cross twice, " +
    "and both crossings fall inside the band. &#9312; is reached indirectly by exaggeration &#8212; the box-lid model, where " +
    "partially closing the lid slacks both straps (Slides 43-44). &#9313; is reached directly by carrying into the strain " +
    "until the slack ligament comes up to match the taut one; the critical rule is that you match tension and never attempt " +
    "to overcome the resistance, so the operator stops at the barrier rather than pushing through it. &#9314; Disengagement " +
    "(Slide 47), a subset of direct action, draws the two parts directly apart and lifts both tensions together. The lecture " +
    "gives no numbers for tension or range, so the scale here is qualitative; only the shapes and the destinations are the lecture's.",
  svg: `
<svg viewBox="0 0 660 310" role="img" aria-label="A graph of ligament tension against an articulation's range of motion. Two curves, the strained ligament and its opposite, cross at two points that both lie between the dashed level for normal free-range tension and the dashed level for the increased tension preceding the strain. The left crossing is reached by exaggeration, the right crossing by carrying into the strain up to but not through the barrier, and a third route, disengagement, lifts both tensions together from the resting position.">
  <style>
    .dg1a-band  { fill: var(--dg-accent); opacity: .09; }
    .dg1a-lvl   { stroke: var(--dg-ink); stroke-width: 1.2; stroke-dasharray: 6 5; opacity: .55; }
    .dg1a-axis  { stroke: var(--dg-line); stroke-width: 1.5; }
    .dg1a-tight { fill: none; stroke: var(--dg-warm); stroke-width: 2.6; stroke-linejoin: round; }
    .dg1a-slack { fill: none; stroke: var(--dg-cool); stroke-width: 2.6; stroke-dasharray: 7 5; stroke-linejoin: round; }
    .dg1a-lbl   { font-size: 10px; fill: var(--dg-muted); }
    .dg1a-tag   { font-size: 9.5px; fill: var(--dg-accent); font-weight: 700; }
    .dg1a-note  { font-size: 9.5px; fill: var(--dg-muted); }
    .dg1a-head  { font-size: 10px; font-weight: 700; }
    .dg1a-num   { font-size: 11px; font-weight: 700; fill: var(--dg-surface); }
    .dg1a-brk   { fill: none; stroke: var(--dg-accent); stroke-width: 1.3; }
    .dg1a-wall  { fill: var(--dg-panel); stroke: var(--dg-ink); stroke-width: 1.4; }
    .dg1a-hatch { stroke: var(--dg-ink); stroke-width: 1; opacity: .55; }
    .dg1a-dis   { stroke: var(--dg-good); stroke-width: 1.6; stroke-dasharray: 4 3; }

    .dg1a-sweep {
      stroke: var(--dg-accent); stroke-width: 1.2; stroke-dasharray: 3 4; opacity: .5;
      transform: translateX(278px);
      animation: dg1aSweep 9s linear infinite alternate;
    }
    .dg1a-dotA {
      fill: var(--dg-warm); stroke: var(--dg-surface); stroke-width: 1.6;
      transform: translate(278px, 127px);
      animation: dg1aRideA 9s linear infinite alternate;
    }
    .dg1a-dotB {
      fill: var(--dg-cool); stroke: var(--dg-surface); stroke-width: 1.6;
      transform: translate(278px, 163px);
      animation: dg1aRideB 9s linear infinite alternate;
    }
    .dg1a-m1 { opacity: 1; animation: dg1aM1 9s linear infinite alternate; }
    .dg1a-m2 { opacity: 1; animation: dg1aM2 9s linear infinite alternate; }
    .dg1a-m3 { opacity: 1; animation: dg1aM3 4.5s ease-in-out infinite alternate; }

    @keyframes dg1aSweep {
      0%   { transform: translateX(104px) }
      8%   { transform: translateX(162px) }
      18%  { transform: translateX(162px) }
      28%  { transform: translateX(220px) }
      38%  { transform: translateX(278px) }
      48%  { transform: translateX(336px) }
      58%  { transform: translateX(394px) }
      68%  { transform: translateX(452px) }
      78%  { transform: translateX(510px) }
      88%  { transform: translateX(510px) }
      100% { transform: translateX(568px) }
    }
    @keyframes dg1aRideA {
      0%   { transform: translate(104px,158px) }
      8%   { transform: translate(162px,146px) }
      18%  { transform: translate(162px,146px) }
      28%  { transform: translate(220px,136px) }
      38%  { transform: translate(278px,127px) }
      48%  { transform: translate(336px,118px) }
      58%  { transform: translate(394px,110px) }
      68%  { transform: translate(452px,101px) }
      78%  { transform: translate(510px,90px)  }
      88%  { transform: translate(510px,90px)  }
      100% { transform: translate(568px,80px)  }
    }
    @keyframes dg1aRideB {
      0%   { transform: translate(104px,133px) }
      8%   { transform: translate(162px,146px) }
      18%  { transform: translate(162px,146px) }
      28%  { transform: translate(220px,157px) }
      38%  { transform: translate(278px,163px) }
      48%  { transform: translate(336px,160px) }
      58%  { transform: translate(394px,150px) }
      68%  { transform: translate(452px,132px) }
      78%  { transform: translate(510px,90px)  }
      88%  { transform: translate(510px,90px)  }
      100% { transform: translate(568px,84px)  }
    }
    @keyframes dg1aM1 {
      0%   { opacity: .6 }
      8%   { opacity: 1 }
      18%  { opacity: 1 }
      30%  { opacity: .6 }
      100% { opacity: .6 }
    }
    @keyframes dg1aM2 {
      0%   { opacity: .6 }
      68%  { opacity: .6 }
      78%  { opacity: 1 }
      100% { opacity: 1 }
    }
    @keyframes dg1aM3 {
      0%   { opacity: .45 }
      100% { opacity: 1 }
    }
  </style>

  <rect class="dg1a-band" x="96" y="78" width="492" height="68"/>
  <line class="dg1a-lvl" x1="96" y1="78" x2="588" y2="78"/>
  <line class="dg1a-lvl" x1="96" y1="146" x2="588" y2="146"/>
  <line class="dg1a-axis" x1="96" y1="178" x2="588" y2="178"/>
  <line class="dg1a-axis" x1="96" y1="54" x2="96" y2="178"/>

  <text class="dg1a-lbl" x="584" y="71" text-anchor="end">increased tension preceding the strain</text>
  <text class="dg1a-lbl" x="584" y="160" text-anchor="end">normal tension of the free range</text>
  <text class="dg1a-lbl" x="30" y="116" text-anchor="middle" transform="rotate(-90 30 116)">ligament tension</text>
  <path class="dg1a-brk" d="M78 78 L70 78 L70 146 L78 146"/>
  <text class="dg1a-tag" x="58" y="112" text-anchor="middle" transform="rotate(-90 58 112)">poised between</text>

  <rect class="dg1a-wall" x="592" y="54" width="16" height="124" rx="3"/>
  <line class="dg1a-hatch" x1="592" y1="72" x2="608" y2="56"/>
  <line class="dg1a-hatch" x1="592" y1="104" x2="608" y2="88"/>
  <line class="dg1a-hatch" x1="592" y1="136" x2="608" y2="120"/>
  <line class="dg1a-hatch" x1="592" y1="168" x2="608" y2="152"/>
  <text class="dg1a-lbl" x="600" y="46" text-anchor="middle">barrier</text>

  <line class="dg1a-sweep" x1="0" y1="56" x2="0" y2="178"/>

  <polyline class="dg1a-tight" points="104,158 162,146 220,136 278,127 336,118 394,110 452,101 510,90 568,80"/>
  <polyline class="dg1a-slack" points="104,133 162,146 220,157 278,163 336,160 394,150 452,132 510,90 568,84"/>

  <g class="dg1a-m3">
    <line class="dg1a-dis" x1="272" y1="157" x2="272" y2="110"/>
    <polygon points="268,112 272,102 276,112" fill="var(--dg-good)"/>
    <line class="dg1a-dis" x1="288" y1="121" x2="288" y2="110"/>
    <polygon points="284,112 288,102 292,112" fill="var(--dg-good)"/>
    <circle cx="278" cy="90" r="9" fill="var(--dg-good)"/>
    <text class="dg1a-num" x="278" y="94" text-anchor="middle">3</text>
    <text class="dg1a-note" x="278" y="70" text-anchor="middle" fill="var(--dg-good)">disengagement</text>
  </g>

  <circle class="dg1a-dotA" r="6"/>
  <circle class="dg1a-dotB" r="6"/>

  <g class="dg1a-m1">
    <circle cx="162" cy="146" r="10" fill="var(--dg-accent)"/>
    <text class="dg1a-num" x="162" y="150" text-anchor="middle">1</text>
    <text class="dg1a-tag" x="162" y="168" text-anchor="middle">balance</text>
  </g>
  <g class="dg1a-m2">
    <circle cx="510" cy="90" r="10" fill="var(--dg-accent)"/>
    <text class="dg1a-num" x="510" y="94" text-anchor="middle">2</text>
    <text class="dg1a-tag" x="510" y="120" text-anchor="middle">balance</text>
  </g>

  <text class="dg1a-lbl" x="96" y="194">&#8592; exaggeration (indirect)</text>
  <text class="dg1a-lbl" x="278" y="194" text-anchor="middle">at rest</text>
  <text class="dg1a-lbl" x="588" y="194" text-anchor="end">into the strain (direct) &#8594;</text>

  <line class="dg1a-axis" x1="16" y1="206" x2="644" y2="206"/>

  <circle cx="24" cy="222" r="8" fill="var(--dg-accent)"/>
  <text class="dg1a-num" x="24" y="226" text-anchor="middle">1</text>
  <text class="dg1a-head" x="38" y="226">INDIRECT &#8212; exaggeration</text>
  <text class="dg1a-note" x="16" y="246">Carry the joint into its ease.</text>
  <text class="dg1a-note" x="16" y="260">The strained ligament slacks and</text>
  <text class="dg1a-note" x="16" y="274">the other comes up: they meet at</text>
  <text class="dg1a-note" x="16" y="288">the free-range tension.</text>

  <circle cx="240" cy="222" r="8" fill="var(--dg-accent)"/>
  <text class="dg1a-num" x="240" y="226" text-anchor="middle">2</text>
  <text class="dg1a-head" x="254" y="226">DIRECT &#8212; into the strain</text>
  <text class="dg1a-note" x="232" y="246">Carry into the strain until the</text>
  <text class="dg1a-note" x="232" y="260">slack ligament rises to match the</text>
  <text class="dg1a-note" x="232" y="274">taut one. Match tension, never</text>
  <text class="dg1a-note" x="232" y="288">overcome the resistance.</text>

  <circle cx="456" cy="222" r="8" fill="var(--dg-good)"/>
  <text class="dg1a-num" x="456" y="226" text-anchor="middle">3</text>
  <text class="dg1a-head" x="470" y="226">DISENGAGEMENT</text>
  <text class="dg1a-note" x="448" y="246">A subset of direct action: draw</text>
  <text class="dg1a-note" x="448" y="260">the two parts directly apart, so</text>
  <text class="dg1a-note" x="448" y="274">both tensions rise together</text>
  <text class="dg1a-note" x="448" y="288">into balance.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv1 - The self-sustaining physiologic loop of somatic dysfunction.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv1-dysfunction-perfusion-loop"] = {
  title: "Why the dysfunction does not clear itself",
  caption:
    "Slides 30-35. Nociceptors fill the joint capsule and ligaments, and their activity produces local segmental tension. " +
    "Because veins and lymphatics are pliable and easily compressed, outflow is what collapses first and the tissue congests; " +
    "arterial inflow can also be limited, so the area runs 'dry' &#8212; Still's 'rivers of life', and his 'we suffer from 2 causes, " +
    "the want of supply and the burden of dead deposits' (Slide 32). The same tension reduces interstitial flow, so cellular " +
    "oxygen and nutrient exchange falls (Slide 33) &#8212; an exchange that depends on small inherent motions the strain itself " +
    "suppresses. That is what closes the loop: the dysfunction limits the very inherent forces that would correct it, which the " +
    "lecturer gives as the reason it does not self-correct. At the point of balanced tension the sequence runs backwards, and " +
    "that reversal is what Slide 35 asks you to palpate for &#8212; the dysfunction's impact on respiration, pulse, the primary " +
    "respiratory mechanism and the sense of congestion, not just 'tight and stiff'. The lecture states no quantities; the flow " +
    "rates and the amount of congestion drawn here are qualitative.",
  svg: `
<svg viewBox="0 0 660 320" role="img" aria-label="A closed loop of five stages: nociceptors fire in capsule and ligament, segmental tension rises, pliable veins and lymphatics are compressed so outflow stalls and the tissue congests, arterial inflow is throttled so the area runs dry, and interstitial flow slows so cellular oxygen and nutrient exchange falls. A return arrow closes the loop because the dysfunction suppresses the inherent motions that would clear it. Below, a schematic shows throttled arterial inflow into a congesting segment and a collapsed venous and lymphatic outflow, beside a panel listing the reversal that occurs at the point of balanced tension.">
  <style>
    .dg1b-box   { fill: var(--dg-surface); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg1b-hl    { fill: var(--dg-warm); opacity: 0; }
    .dg1b-h1    { animation: dg1bHl 8s linear infinite; }
    .dg1b-h2    { animation: dg1bHl 8s linear infinite 1.6s; }
    .dg1b-h3    { animation: dg1bHl 8s linear infinite 3.2s; }
    .dg1b-h4    { animation: dg1bHl 8s linear infinite 4.8s; }
    .dg1b-h5    { animation: dg1bHl 8s linear infinite 6.4s; }
    .dg1b-t1    { font-size: 10px; font-weight: 700; }
    .dg1b-t2    { font-size: 8.5px; fill: var(--dg-muted); }
    .dg1b-arrow { stroke: var(--dg-ink); stroke-width: 2; stroke-dasharray: 5 4; animation: dg1bDash 1.2s linear infinite; }
    .dg1b-loop  { fill: none; stroke: var(--dg-warm); stroke-width: 2; stroke-dasharray: 7 6; animation: dg1bDash2 1.6s linear infinite; }
    .dg1b-loopl { font-size: 10px; fill: var(--dg-warm); font-weight: 600; }
    .dg1b-rule  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg1b-head  { font-size: 10px; font-weight: 700; }
    .dg1b-lbl   { font-size: 9px; fill: var(--dg-muted); }
    .dg1b-warm  { font-size: 9px; fill: var(--dg-warm); font-weight: 600; }
    .dg1b-cool  { font-size: 9px; fill: var(--dg-cool); font-weight: 600; }
    .dg1b-tiss  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg1b-art   { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 1.5; }
    .dg1b-ven   { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 1.5; }
    .dg1b-clamp { fill: var(--dg-ink); opacity: .5; }
    .dg1b-ap    { fill: var(--dg-warm); opacity: .85; animation: dg1bArt 3.6s linear infinite; }
    .dg1b-vp    { fill: var(--dg-cool); opacity: .8; animation: dg1bVein 4.6s ease-out infinite; }
    .dg1b-cong  { fill: var(--dg-cool); opacity: .5; animation: dg1bCong 4.6s ease-in-out infinite; }
    .dg1b-panel { fill: var(--dg-panel); stroke: var(--dg-good); stroke-width: 1.5; }
    .dg1b-good  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg1b-item  { font-size: 9.5px; }
    .dg1b-tick  { fill: var(--dg-good); opacity: 1; animation: dg1bTick 5.2s ease-in-out infinite; }

    @keyframes dg1bDash  { to { stroke-dashoffset: -9 } }
    @keyframes dg1bDash2 { to { stroke-dashoffset: -13 } }
    @keyframes dg1bHl {
      0%   { opacity: 0 }
      6%   { opacity: .18 }
      16%  { opacity: .18 }
      24%  { opacity: 0 }
      100% { opacity: 0 }
    }
    @keyframes dg1bArt {
      0%   { transform: translateX(0px);  opacity: .15 }
      15%  { opacity: .85 }
      85%  { opacity: .85 }
      100% { transform: translateX(32px); opacity: .15 }
    }
    @keyframes dg1bVein {
      0%   { transform: translateX(0px);  opacity: 0 }
      10%  { opacity: .85 }
      45%  { transform: translateX(16px) }
      75%  { transform: translateX(20px) }
      92%  { transform: translateX(20px); opacity: .85 }
      100% { transform: translateX(20px); opacity: 0 }
    }
    @keyframes dg1bCong {
      0%   { opacity: .12 }
      55%  { opacity: .78 }
      100% { opacity: .12 }
    }
    @keyframes dg1bTick {
      0%   { opacity: .35 }
      20%  { opacity: 1 }
      55%  { opacity: 1 }
      75%  { opacity: .35 }
      100% { opacity: .35 }
    }
  </style>

  <rect class="dg1b-box" x="6"   y="34" width="112" height="62" rx="9"/>
  <rect class="dg1b-hl dg1b-h1" x="6"   y="34" width="112" height="62" rx="9"/>
  <text class="dg1b-t1" x="62"  y="53" text-anchor="middle">Nociceptors fire</text>
  <text class="dg1b-t2" x="62"  y="69" text-anchor="middle">capsule and ligament</text>
  <text class="dg1b-t2" x="62"  y="82" text-anchor="middle">are full of them</text>

  <rect class="dg1b-box" x="140" y="34" width="112" height="62" rx="9"/>
  <rect class="dg1b-hl dg1b-h2" x="140" y="34" width="112" height="62" rx="9"/>
  <text class="dg1b-t1" x="196" y="53" text-anchor="middle">Segmental tension</text>
  <text class="dg1b-t2" x="196" y="69" text-anchor="middle">motion limited,</text>
  <text class="dg1b-t2" x="196" y="82" text-anchor="middle">position altered</text>

  <rect class="dg1b-box" x="274" y="34" width="112" height="62" rx="9"/>
  <rect class="dg1b-hl dg1b-h3" x="274" y="34" width="112" height="62" rx="9"/>
  <text class="dg1b-t1" x="330" y="53" text-anchor="middle">Outflow collapses</text>
  <text class="dg1b-t2" x="330" y="69" text-anchor="middle">veins and lymphatics</text>
  <text class="dg1b-t2" x="330" y="82" text-anchor="middle">are pliable: congestion</text>

  <rect class="dg1b-box" x="408" y="34" width="112" height="62" rx="9"/>
  <rect class="dg1b-hl dg1b-h4" x="408" y="34" width="112" height="62" rx="9"/>
  <text class="dg1b-t1" x="464" y="53" text-anchor="middle">Arterial inflow</text>
  <text class="dg1b-t2" x="464" y="69" text-anchor="middle">can also be limited:</text>
  <text class="dg1b-t2" x="464" y="82" text-anchor="middle">the area runs 'dry'</text>

  <rect class="dg1b-box" x="542" y="34" width="112" height="62" rx="9"/>
  <rect class="dg1b-hl dg1b-h5" x="542" y="34" width="112" height="62" rx="9"/>
  <text class="dg1b-t1" x="598" y="53" text-anchor="middle">Interstitial flow</text>
  <text class="dg1b-t2" x="598" y="69" text-anchor="middle">slows, so O&#8322; and</text>
  <text class="dg1b-t2" x="598" y="82" text-anchor="middle">nutrient exchange falls</text>

  <line class="dg1b-arrow" x1="119" y1="65" x2="131" y2="65"/>
  <polygon points="131,60 140,65 131,70" fill="var(--dg-ink)"/>
  <line class="dg1b-arrow" x1="253" y1="65" x2="265" y2="65"/>
  <polygon points="265,60 274,65 265,70" fill="var(--dg-ink)"/>
  <line class="dg1b-arrow" x1="387" y1="65" x2="399" y2="65"/>
  <polygon points="399,60 408,65 399,70" fill="var(--dg-ink)"/>
  <line class="dg1b-arrow" x1="521" y1="65" x2="533" y2="65"/>
  <polygon points="533,60 542,65 533,70" fill="var(--dg-ink)"/>

  <path class="dg1b-loop" d="M598 96 L598 120 Q598 128 590 128 L70 128 Q62 128 62 120 L62 106"/>
  <polygon points="56,108 62,96 68,108" fill="var(--dg-warm)"/>
  <text class="dg1b-loopl" x="330" y="147" text-anchor="middle">the dysfunction suppresses the very inherent motions that would clear it &#8212; so it does not self-correct</text>

  <line class="dg1b-rule" x1="6" y1="162" x2="654" y2="162"/>

  <text class="dg1b-head" x="6" y="181">What the tension does to the flow</text>

  <rect class="dg1b-tiss" x="118" y="196" width="110" height="86" rx="10"/>
  <text class="dg1b-lbl" x="173" y="190" text-anchor="middle">the segment</text>

  <rect class="dg1b-art" x="6" y="215" width="112" height="14" rx="7"/>
  <polygon class="dg1b-clamp" points="52,203 68,203 60,213"/>
  <polygon class="dg1b-clamp" points="52,241 68,241 60,231"/>
  <circle class="dg1b-ap" cx="16" cy="222" r="3.5"/>
  <circle class="dg1b-ap" cx="48" cy="222" r="3.5"/>
  <circle class="dg1b-ap" cx="84" cy="222" r="3.5"/>
  <text class="dg1b-warm" x="6" y="196">arterial inflow: limited</text>
  <text class="dg1b-lbl" x="6" y="254">the area runs 'dry'</text>

  <rect class="dg1b-ven" x="228" y="256" width="108" height="14" rx="7"/>
  <polygon class="dg1b-clamp" points="262,244 286,244 274,260"/>
  <polygon class="dg1b-clamp" points="262,282 286,282 274,266"/>
  <circle class="dg1b-vp" cx="234" cy="263" r="3.5"/>
  <circle class="dg1b-vp" cx="246" cy="263" r="3.5"/>
  <text class="dg1b-cool" x="236" y="238">venous + lymphatic outflow</text>
  <text class="dg1b-lbl" x="236" y="296">pliable: collapses first</text>

  <circle class="dg1b-cong" cx="134" cy="210" r="3"/>
  <circle class="dg1b-cong" cx="152" cy="206" r="3" style="animation-delay:.5s"/>
  <circle class="dg1b-cong" cx="198" cy="208" r="3" style="animation-delay:1s"/>
  <circle class="dg1b-cong" cx="212" cy="226" r="3" style="animation-delay:1.5s"/>
  <circle class="dg1b-cong" cx="136" cy="254" r="3" style="animation-delay:2s"/>
  <circle class="dg1b-cong" cx="158" cy="268" r="3" style="animation-delay:2.5s"/>
  <circle class="dg1b-cong" cx="200" cy="262" r="3" style="animation-delay:3s"/>
  <circle class="dg1b-cong" cx="214" cy="248" r="3" style="animation-delay:3.5s"/>

  <circle cx="173" cy="232" r="12" fill="var(--dg-surface)" stroke="var(--dg-ink)" stroke-width="1.2"/>
  <text x="173" y="235" text-anchor="middle" font-size="8px" fill="var(--dg-muted)">cell</text>
  <text class="dg1b-lbl" x="173" y="278" text-anchor="middle" font-size="8.5px">interstitial flow slows</text>

  <rect class="dg1b-panel" x="356" y="176" width="298" height="130" rx="12"/>
  <text class="dg1b-good" x="370" y="199">At the point of balanced tension</text>
  <polygon class="dg1b-tick" points="372,218 380,222 372,226"/>
  <text class="dg1b-item" x="388" y="226">nociceptors turn down</text>
  <polygon class="dg1b-tick" points="372,240 380,244 372,248" style="animation-delay:.5s"/>
  <text class="dg1b-item" x="388" y="248">segmental tension resets</text>
  <polygon class="dg1b-tick" points="372,262 380,266 372,270" style="animation-delay:1s"/>
  <text class="dg1b-item" x="388" y="270">the congested tissue drains</text>
  <polygon class="dg1b-tick" points="372,284 380,288 372,292" style="animation-delay:1.5s"/>
  <text class="dg1b-item" x="388" y="292">the 'dry' area fills: rivers of life</text>
</svg>`,
};

// --------------------------------------------------------------------------
// cv1 - Respiratory cooperation: the segment that sits out of the breath.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv1-respiratory-cooperation"] = {
  title: "Respiratory cooperation",
  caption:
    "Slide 28. Wales: 'Respiratory co-operation is always with us in operations designed to utilize the powers within the " +
    "patient's body.' In a bad somatic dysfunction the area often does not move with breathing. The finding is a phase " +
    "relationship, not an appearance &#8212; the segment looks ordinary in any single frame and is identifiable only when its " +
    "neighbours are moving and it is not, which is why the dashed outlines (each segment's excursion envelope) are drawn, and " +
    "why the dysfunctional segment has none. Positioning is then used to restore breathing motion, and breathing itself works " +
    "the articulation free, restoring both normal relations and normal tension &#8212; so on the right the treated segment's " +
    "excursion widens breath by breath rather than in a single operator move. The magnitude of the same finding varies " +
    "enormously with the site: obvious at the ribs, incredibly subtle at the ankle, but still there. Amplitudes here are " +
    "illustrative; the lecture gives no measurements.",
  svg: `
<svg viewBox="0 0 660 310" role="img" aria-label="Two panels. On the left, five stacked segments of a region rise and fall with the breath, each drawn with a dashed excursion envelope, except the middle segment which has no envelope and does not move: it sits out of the breath. On the right, after positioning, the middle segment rejoins the excursion and its range widens with each successive breath. A strip underneath compares the same lost excursion at the rib, where it is gross, with the ankle, where it is nearly imperceptible but still present.">
  <style>
    .dg1c-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg1c-head  { font-size: 10.5px; font-weight: 700; }
    .dg1c-lbl   { font-size: 9px; fill: var(--dg-muted); }
    .dg1c-warm  { font-size: 9px; fill: var(--dg-warm); font-weight: 700; }
    .dg1c-good  { font-size: 9px; fill: var(--dg-good); font-weight: 700; }
    .dg1c-bar   { fill: var(--dg-accent); opacity: .85; }
    .dg1c-dead  { fill: var(--dg-muted); opacity: .8; }
    .dg1c-env   { fill: none; stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 4 3; }
    .dg1c-envg  { fill: none; stroke: var(--dg-good); stroke-width: 1; stroke-dasharray: 4 3; }
    .dg1c-ring  { fill: none; stroke: var(--dg-warm); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg1c-ringg { fill: none; stroke: var(--dg-good); stroke-width: 1.4; stroke-dasharray: 5 4; }
    .dg1c-track { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg1c-rule  { stroke: var(--dg-line); stroke-width: 1.2; }
    .dg1c-note  { font-size: 9.5px; fill: var(--dg-muted); }

    .dg1c-move { animation: dg1cBreath 2.2s ease-in-out infinite alternate; }
    .dg1c-dot  { fill: var(--dg-accent); animation: dg1cBreath70 2.2s ease-in-out infinite alternate; }
    .dg1c-grow { animation: dg1cGrow 17.6s ease-in-out infinite; }
    .dg1c-rib  { animation: dg1cRib 2.2s ease-in-out infinite alternate; }
    .dg1c-ank  { animation: dg1cAnkle 2.2s ease-in-out infinite alternate; }

    @keyframes dg1cBreath   { 0% { transform: translateY(-7px) }  100% { transform: translateY(7px) } }
    @keyframes dg1cBreath70 { 0% { transform: translateY(-70px) } 100% { transform: translateY(70px) } }
    @keyframes dg1cRib      { 0% { transform: translateY(-8px) }  100% { transform: translateY(8px) } }
    @keyframes dg1cAnkle    { 0% { transform: translateY(-1.5px) } 100% { transform: translateY(1.5px) } }
    @keyframes dg1cGrow {
      0%    { transform: translateY(-2px) }
      12.5% { transform: translateY(3px) }
      25%   { transform: translateY(-4.5px) }
      37.5% { transform: translateY(5.5px) }
      50%   { transform: translateY(-6.5px) }
      62.5% { transform: translateY(7px) }
      75%   { transform: translateY(-7px) }
      87.5% { transform: translateY(7px) }
      100%  { transform: translateY(-2px) }
    }
  </style>

  <text class="dg1c-head" x="12" y="20">Before &#8212; the segment sits out of the breath</text>
  <text class="dg1c-head" x="344" y="20">After positioning &#8212; it rejoins the excursion</text>

  <rect class="dg1c-panel" x="12" y="30" width="304" height="206" rx="10"/>
  <rect class="dg1c-panel" x="344" y="30" width="304" height="206" rx="10"/>

  <line class="dg1c-track" x1="36" y1="64" x2="36" y2="206"/>
  <text class="dg1c-lbl" x="36" y="52" text-anchor="middle">breath</text>
  <circle class="dg1c-dot" cx="36" cy="135" r="5"/>

  <line class="dg1c-track" x1="368" y1="64" x2="368" y2="206"/>
  <text class="dg1c-lbl" x="368" y="52" text-anchor="middle">breath</text>
  <circle class="dg1c-dot" cx="368" cy="135" r="5"/>

  <rect class="dg1c-env" x="62" y="64" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="78" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="62" y="71" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="96" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="110" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="62" y="103" width="188" height="14" rx="7"/>

  <rect class="dg1c-dead" x="62" y="135" width="188" height="14" rx="7"/>
  <rect class="dg1c-ring" x="56" y="128" width="200" height="28" rx="14"/>
  <text class="dg1c-warm" x="260" y="139">does not</text>
  <text class="dg1c-warm" x="260" y="151">move</text>

  <rect class="dg1c-env" x="62" y="160" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="174" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="62" y="167" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="192" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="62" y="206" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="62" y="199" width="188" height="14" rx="7"/>

  <text class="dg1c-note" x="36" y="230">neighbours rise and fall; this one holds still</text>

  <rect class="dg1c-env" x="394" y="64" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="78" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="394" y="71" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="96" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="110" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="394" y="103" width="188" height="14" rx="7"/>

  <rect class="dg1c-envg" x="394" y="128" width="188" height="14" rx="7"/>
  <rect class="dg1c-envg" x="394" y="142" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-grow" x="394" y="135" width="188" height="14" rx="7"/>
  <rect class="dg1c-ringg" x="388" y="128" width="200" height="28" rx="14"/>
  <text class="dg1c-good" x="592" y="139">rejoins</text>
  <text class="dg1c-good" x="592" y="151">the breath</text>

  <rect class="dg1c-env" x="394" y="160" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="174" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="394" y="167" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="192" width="188" height="14" rx="7"/>
  <rect class="dg1c-env" x="394" y="206" width="188" height="14" rx="7"/>
  <rect class="dg1c-bar dg1c-move" x="394" y="199" width="188" height="14" rx="7"/>

  <text class="dg1c-note" x="368" y="230">each breath widens it &#8212; breathing frees the joint</text>

  <line class="dg1c-rule" x1="12" y1="248" x2="648" y2="248"/>
  <text class="dg1c-head" x="12" y="266">The same finding, very different magnitude</text>

  <text class="dg1c-note" x="12" y="292">at the rib</text>
  <rect class="dg1c-env" x="90" y="276" width="60" height="10" rx="5"/>
  <rect class="dg1c-env" x="90" y="292" width="60" height="10" rx="5"/>
  <rect class="dg1c-bar dg1c-rib" x="90" y="284" width="60" height="10" rx="5"/>

  <text class="dg1c-note" x="200" y="292">at the ankle</text>
  <rect class="dg1c-env" x="286" y="282.5" width="60" height="10" rx="5"/>
  <rect class="dg1c-env" x="286" y="285.5" width="60" height="10" rx="5"/>
  <rect class="dg1c-bar dg1c-ank" x="286" y="284" width="60" height="10" rx="5"/>

  <text class="dg1c-note" x="380" y="292">incredibly subtle, but still there</text>
</svg>`,
};

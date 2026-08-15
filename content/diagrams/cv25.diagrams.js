/*
 * cv25 - Molecular Physiology of Vascular Smooth Muscle Cells
 * (Lecture #25, Maria Alicia Carrillo-Sepulveda, Ph.D.).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. The contraction cascade and the phosphatase that reverses it.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv25-contraction-switch"] = {
  title: "Ca&#178;&#8314; &#8594; calmodulin &#8594; MLCK &#8594; phosphorylated myosin",
  caption:
    "The whole lecture in one loop. <b>1</b> Cytosolic Ca&#178;&#8314; rises. <b>2</b> It binds <b>calmodulin</b> &#8212; four arms, one Ca&#178;&#8314; each, so one calmodulin carries four Ca&#178;&#8314;; " +
    "VSMC has <i>no troponin</i>, which is why calmodulin is the sensor here. <b>3</b> The Ca&#178;&#8314;-calmodulin complex activates <b>myosin light chain kinase (MLCK)</b>. " +
    "<b>4</b> MLCK phosphorylates the <b>myosin light chain</b>. <b>5</b> Only the phosphorylated myosin head can attach to actin, and the filaments slide. " +
    "Watch the return arrow: <b>myosin light chain phosphatase</b> strips that phosphate off and the filaments slide back. " +
    "The asymmetry is the testable part &#8212; MLCK works only while cytosolic Ca&#178;&#8314; is elevated, but the phosphatase is <b>always</b> active, so contraction lasts exactly as long as myosin stays phosphorylated (Slides 16&#8211;18, and the phosphatase note on Slide 17).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A five step cascade runs left to right across the top. Step one, cytosolic calcium rises. Step two, calcium binds calmodulin, which has four arms and carries four calcium ions, because vascular smooth muscle has no troponin. Step three, the calcium calmodulin complex activates myosin light chain kinase. Step four, the kinase places a phosphate on the myosin light chain. Step five, the phosphorylated myosin head attaches to actin and the filaments slide. A curved return arrow beneath the cascade, labelled myosin light chain phosphatase, always active, removes the phosphate and produces relaxation. Below the cascade a thick myosin filament with heads lies between two thin actin filaments anchored to dense bodies; while the phosphate badges are present the whole array shortens, and when they are removed it lengthens again. A side panel states that the kinase is on only when cytosolic calcium is high, that the phosphatase is always active, and that contraction lasts as long as myosin stays phosphorylated.">
  <style>
    .dg25a-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg25a-hl   { fill: var(--dg-accent); opacity: 0; }
    .dg25a-hd   { font-size: 10px; font-weight: 700; }
    .dg25a-md   { font-size: 9.5px; }
    .dg25a-tiny { font-size: 8.5px; fill: var(--dg-muted); }
    .dg25a-arw  { stroke: var(--dg-ink); stroke-width: 1.6; opacity: .5; fill: none; }
    .dg25a-ah   { fill: var(--dg-ink); opacity: .5; }
    .dg25a-ca   { fill: var(--dg-warm); }
    .dg25a-pdot { fill: var(--dg-good); }
    .dg25a-pT   { font-size: 8px; font-weight: 700; fill: var(--dg-surface); }
    .dg25a-bad  { fill: var(--dg-accent); }
    .dg25a-badT { font-size: 9px; font-weight: 700; fill: var(--dg-surface); }
    .dg25a-act  { stroke: var(--dg-cool); stroke-width: 4.5; stroke-linecap: round; }
    .dg25a-myo  { stroke: var(--dg-warm); stroke-width: 8; stroke-linecap: round; }
    .dg25a-head { stroke: var(--dg-warm); stroke-width: 2.2; stroke-linecap: round; }
    .dg25a-dense{ fill: var(--dg-ink); opacity: .55; }
    .dg25a-ret  { stroke: var(--dg-good); stroke-width: 2; fill: none; }
    .dg25a-retH { fill: var(--dg-good); }

    .dg25a-s1 { animation: dg25aS1 10s linear infinite; }
    .dg25a-s2 { animation: dg25aS2 10s linear infinite; }
    .dg25a-s3 { animation: dg25aS3 10s linear infinite; }
    .dg25a-s4 { animation: dg25aS4 10s linear infinite; }
    .dg25a-s5 { animation: dg25aS5 10s linear infinite; }
    @keyframes dg25aS1 { 0%, 2% { opacity: 0 } 5%, 14% { opacity: .18 } 18%, 100% { opacity: 0 } }
    @keyframes dg25aS2 { 0%, 15% { opacity: 0 } 18%, 27% { opacity: .18 } 31%, 100% { opacity: 0 } }
    @keyframes dg25aS3 { 0%, 28% { opacity: 0 } 31%, 40% { opacity: .18 } 44%, 100% { opacity: 0 } }
    @keyframes dg25aS4 { 0%, 41% { opacity: 0 } 44%, 53% { opacity: .18 } 57%, 100% { opacity: 0 } }
    @keyframes dg25aS5 { 0%, 54% { opacity: 0 } 57%, 68% { opacity: .18 } 72%, 100% { opacity: 0 } }

    .dg25a-cain { opacity: 0; animation: dg25aCain 10s linear infinite; }
    @keyframes dg25aCain { 0%, 1% { opacity: 0 } 6%, 72% { opacity: 1 } 80%, 100% { opacity: 0 } }

    .dg25a-pOn { opacity: 0; animation: dg25aPon 10s linear infinite; }
    @keyframes dg25aPon { 0%, 43% { opacity: 0 } 47%, 78% { opacity: 1 } 83%, 100% { opacity: 0 } }

    .dg25a-fil { transform-box: view-box; transform-origin: 196px 228px; transform: scaleX(1); animation: dg25aFil 10s ease-in-out infinite; }
    @keyframes dg25aFil { 0%, 50% { transform: scaleX(1) } 64%, 76% { transform: scaleX(.76) } 90%, 100% { transform: scaleX(1) } }

    .dg25a-mlcp { opacity: .35; animation: dg25aMlcp 10s linear infinite; }
    @keyframes dg25aMlcp { 0%, 74% { opacity: .35 } 79%, 92% { opacity: 1 } 96%, 100% { opacity: .35 } }

    .dg25a-state1 { opacity: 0; animation: dg25aSt1 10s linear infinite; }
    .dg25a-state2 { opacity: 0; animation: dg25aSt2 10s linear infinite; }
    @keyframes dg25aSt1 { 0%, 58% { opacity: 0 } 63%, 76% { opacity: 1 } 80%, 100% { opacity: 0 } }
    @keyframes dg25aSt2 { 0%, 82% { opacity: 0 } 88%, 99% { opacity: 1 } 100% { opacity: 0 } }
  </style>

  <circle class="dg25a-bad" cx="20" cy="30" r="8"/>
  <text x="20" y="33.5" class="dg25a-badT" text-anchor="middle">1</text>
  <circle class="dg25a-bad" cx="148" cy="30" r="8"/>
  <text x="148" y="33.5" class="dg25a-badT" text-anchor="middle">2</text>
  <circle class="dg25a-bad" cx="276" cy="30" r="8"/>
  <text x="276" y="33.5" class="dg25a-badT" text-anchor="middle">3</text>
  <circle class="dg25a-bad" cx="404" cy="30" r="8"/>
  <text x="404" y="33.5" class="dg25a-badT" text-anchor="middle">4</text>
  <circle class="dg25a-bad" cx="532" cy="30" r="8"/>
  <text x="532" y="33.5" class="dg25a-badT" text-anchor="middle">5</text>

  <rect class="dg25a-box" x="10"  y="42" width="108" height="60" rx="8"/>
  <rect class="dg25a-hl dg25a-s1" x="10" y="42" width="108" height="60" rx="8"/>
  <text x="64" y="60" class="dg25a-hd" text-anchor="middle">cytosolic Ca&#178;&#8314; &#8593;</text>
  <text x="64" y="74" class="dg25a-tiny" text-anchor="middle">L-type influx +</text>
  <text x="64" y="85" class="dg25a-tiny" text-anchor="middle">SR release</text>
  <g class="dg25a-ca dg25a-cain">
    <circle cx="46" cy="94" r="3.2"/>
    <circle cx="58" cy="94" r="3.2"/>
    <circle cx="70" cy="94" r="3.2"/>
    <circle cx="82" cy="94" r="3.2"/>
  </g>

  <rect class="dg25a-box" x="138" y="42" width="108" height="60" rx="8"/>
  <rect class="dg25a-hl dg25a-s2" x="138" y="42" width="108" height="60" rx="8"/>
  <text x="192" y="60" class="dg25a-hd" text-anchor="middle">Ca&#178;&#8314; + CALMODULIN</text>
  <text x="192" y="74" class="dg25a-tiny" text-anchor="middle">4 arms &#183; 4 Ca&#178;&#8314; per CaM</text>
  <text x="192" y="86" class="dg25a-tiny" text-anchor="middle">no troponin in VSMC</text>
  <g class="dg25a-ca dg25a-cain">
    <circle cx="174" cy="95" r="3"/>
    <circle cx="186" cy="95" r="3"/>
    <circle cx="198" cy="95" r="3"/>
    <circle cx="210" cy="95" r="3"/>
  </g>

  <rect class="dg25a-box" x="266" y="42" width="108" height="60" rx="8"/>
  <rect class="dg25a-hl dg25a-s3" x="266" y="42" width="108" height="60" rx="8"/>
  <text x="320" y="60" class="dg25a-hd" text-anchor="middle">activates MLCK</text>
  <text x="320" y="74" class="dg25a-tiny" text-anchor="middle">myosin light</text>
  <text x="320" y="85" class="dg25a-tiny" text-anchor="middle">chain kinase</text>
  <text x="320" y="96" class="dg25a-tiny" text-anchor="middle">on only if Ca&#178;&#8314; is high</text>

  <rect class="dg25a-box" x="394" y="42" width="108" height="60" rx="8"/>
  <rect class="dg25a-hl dg25a-s4" x="394" y="42" width="108" height="60" rx="8"/>
  <text x="448" y="60" class="dg25a-hd" text-anchor="middle">myosin light chain</text>
  <text x="448" y="74" class="dg25a-hd" text-anchor="middle">PHOSPHORYLATED</text>
  <circle class="dg25a-pdot dg25a-pOn" cx="448" cy="90" r="8"/>
  <text x="448" y="93" class="dg25a-pT dg25a-pOn" text-anchor="middle">P</text>

  <rect class="dg25a-box" x="522" y="42" width="108" height="60" rx="8"/>
  <rect class="dg25a-hl dg25a-s5" x="522" y="42" width="108" height="60" rx="8"/>
  <text x="576" y="60" class="dg25a-hd" text-anchor="middle">head binds ACTIN</text>
  <text x="576" y="74" class="dg25a-tiny" text-anchor="middle">filaments slide</text>
  <text x="576" y="86" class="dg25a-tiny" text-anchor="middle">past each other</text>
  <text x="576" y="97" class="dg25a-tiny" text-anchor="middle">&#8594; CONTRACTION</text>

  <line class="dg25a-arw" x1="120" y1="72" x2="130" y2="72"/>
  <polygon class="dg25a-ah" points="130,67 138,72 130,77"/>
  <line class="dg25a-arw" x1="248" y1="72" x2="258" y2="72"/>
  <polygon class="dg25a-ah" points="258,67 266,72 258,77"/>
  <line class="dg25a-arw" x1="376" y1="72" x2="386" y2="72"/>
  <polygon class="dg25a-ah" points="386,67 394,72 386,77"/>
  <line class="dg25a-arw" x1="504" y1="72" x2="514" y2="72"/>
  <polygon class="dg25a-ah" points="514,67 522,72 514,77"/>

  <g class="dg25a-mlcp">
    <path class="dg25a-ret" d="M576 104 C576 126 552 132 500 132 H468"/>
    <polygon class="dg25a-retH" points="468,127 456,132 468,137"/>
    <text x="448" y="128" class="dg25a-md" text-anchor="end" fill="var(--dg-good)" font-weight="700">MLC phosphatase removes the P</text>
    <text x="448" y="140" class="dg25a-tiny" text-anchor="end">ALWAYS active &#8594; RELAXATION</text>
  </g>

  <rect class="dg25a-box" x="10" y="152" width="382" height="138" rx="10"/>
  <text x="22" y="170" class="dg25a-hd" fill="var(--dg-accent)">SLIDING FILAMENTS</text>
  <text x="22" y="183" class="dg25a-tiny">actin (thin, blue) &#183; myosin (thick, orange) &#183; anchored at dense bodies</text>

  <g class="dg25a-fil">
    <rect class="dg25a-dense" x="24"  y="196" width="8" height="66" rx="3"/>
    <rect class="dg25a-dense" x="366" y="196" width="8" height="66" rx="3"/>
    <line class="dg25a-act" x1="34" y1="204" x2="364" y2="204"/>
    <line class="dg25a-act" x1="34" y1="254" x2="364" y2="254"/>
    <line class="dg25a-myo" x1="128" y1="229" x2="272" y2="229"/>
    <line class="dg25a-head" x1="148" y1="226" x2="140" y2="209"/>
    <line class="dg25a-head" x1="196" y1="226" x2="188" y2="209"/>
    <line class="dg25a-head" x1="244" y1="226" x2="236" y2="209"/>
    <line class="dg25a-head" x1="148" y1="232" x2="140" y2="249"/>
    <line class="dg25a-head" x1="196" y1="232" x2="188" y2="249"/>
    <line class="dg25a-head" x1="244" y1="232" x2="236" y2="249"/>
    <g class="dg25a-pOn">
      <circle class="dg25a-pdot" cx="140" cy="206" r="6"/>
      <text x="140" y="209" class="dg25a-pT" text-anchor="middle">P</text>
      <circle class="dg25a-pdot" cx="236" cy="252" r="6"/>
      <text x="236" y="255" class="dg25a-pT" text-anchor="middle">P</text>
    </g>
  </g>

  <text x="34" y="278" class="dg25a-tiny">dense body</text>
  <text x="200" y="278" class="dg25a-hd dg25a-state1" text-anchor="middle" fill="var(--dg-warm)">CONTRACTED &#8212; myosin is phosphorylated</text>
  <text x="200" y="278" class="dg25a-hd dg25a-state2" text-anchor="middle" fill="var(--dg-good)">RELAXED &#8212; phosphate removed</text>

  <rect class="dg25a-box" x="404" y="152" width="226" height="138" rx="10"/>
  <text x="416" y="170" class="dg25a-hd" fill="var(--dg-accent)">THE SWITCH</text>
  <text x="416" y="190" class="dg25a-hd">MLCK</text>
  <text x="416" y="203" class="dg25a-tiny">on ONLY when cytosolic Ca&#178;&#8314; is high</text>
  <text x="416" y="223" class="dg25a-hd">MLC phosphatase</text>
  <text x="416" y="236" class="dg25a-tiny">ALWAYS active, Ca&#178;&#8314; or not</text>
  <line x1="416" y1="250" x2="618" y2="250" stroke="var(--dg-line)" stroke-width="1"/>
  <text x="416" y="266" class="dg25a-md">Contraction lasts as long as</text>
  <text x="416" y="279" class="dg25a-md">myosin stays phosphorylated.</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Where the calcium comes from and where it goes.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv25-calcium-traffic"] = {
  title: "Calcium in, calcium out",
  caption:
    "Contraction and relaxation are the same story told twice, in opposite directions. " +
    "<b>In (left):</b> extracellular Ca&#178;&#8314; enters through <b>voltage-gated L-type channels</b> &#8212; opened by anything that depolarizes the cell, including KCl and wall stretch, and the channel every calcium blocker targets &#8212; " +
    "and through <b>voltage-independent</b> channels (ligand-gated, stretch-activated, leak). The internal store adds more: <b>IP&#8323;</b> generated downstream of the &#945;&#8321; receptor opens the IP&#8323; receptor on the <b>sarcoplasmic reticulum</b>, and Ca&#178;&#8314;-induced Ca&#178;&#8314; release amplifies it. " +
    "<b>Out (right):</b> the same cytosolic Ca&#178;&#8314; is cleared by <b>SERCA</b> back into the SR &#8212; the lecturer's single most important route &#8212; plus the plasma-membrane <b>Na&#8314;/Ca&#178;&#8314; exchanger</b> and a plasma-membrane <b>Ca&#178;&#8314; pump</b>. " +
    "The centre bar is cytosolic Ca&#178;&#8314;: it has to fall for relaxation to happen, because without Ca&#178;&#8314; there is no Ca&#178;&#8314;-calmodulin complex and no MLCK activity (Slides 20&#8211;22).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="A vascular smooth muscle cell in cross section. Above the plasma membrane is the extracellular space, where calcium is high. On the left of the membrane sit two entry routes: a voltage-gated L-type calcium channel, opened by depolarization from potassium chloride or stretch and blocked by calcium channel blockers, and a group of voltage-independent channels that are ligand-gated, stretch-activated or leak channels. Calcium ions stream down through both during the contraction half of the cycle. In the cytosol a sarcoplasmic reticulum holds a calcium store; an inositol trisphosphate receptor on its left edge releases calcium into the cytosol when the alpha one receptor pathway generates inositol trisphosphate, and calcium-induced calcium release adds more. During the relaxation half of the cycle calcium moves the other way: SERCA on the right edge of the reticulum pumps calcium back into the store, and on the right of the plasma membrane a sodium calcium exchanger and a plasma membrane calcium pump push calcium out of the cell. A horizontal gauge in the middle shows cytosolic calcium filling during contraction and draining during relaxation.">
  <style>
    .dg25b-ecf   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg25b-mem   { stroke: var(--dg-ink); stroke-width: 5; opacity: .35; stroke-linecap: round; }
    .dg25b-prot  { fill: var(--dg-accent); stroke: var(--dg-ink); stroke-width: 1; opacity: .85; }
    .dg25b-sr    { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg25b-ca    { fill: var(--dg-warm); }
    .dg25b-gauge { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg25b-fill  { fill: var(--dg-warm); opacity: .75; }
    .dg25b-hd    { font-size: 10px; font-weight: 700; }
    .dg25b-md    { font-size: 9.5px; }
    .dg25b-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg25b-lead  { stroke: var(--dg-muted); stroke-width: 1; }
    .dg25b-star  { font-size: 8.5px; font-weight: 700; fill: var(--dg-accent); }

    .dg25b-in1 { transform-box: view-box; opacity: 0; animation: dg25bIn 9s linear infinite; }
    @keyframes dg25bIn {
      0%   { opacity: 0; transform: translateY(0) }
      6%   { opacity: 1; transform: translateY(6px) }
      36%  { opacity: 1; transform: translateY(78px) }
      42%, 100% { opacity: 0; transform: translateY(78px) }
    }
    .dg25b-sr1 { transform-box: view-box; opacity: 0; animation: dg25bSr 9s linear infinite; }
    @keyframes dg25bSr {
      0%, 8% { opacity: 0; transform: translate(0, 0) }
      14%    { opacity: 1; transform: translate(-10px, -6px) }
      38%    { opacity: 1; transform: translate(-56px, -34px) }
      44%, 100% { opacity: 0; transform: translate(-56px, -34px) }
    }
    .dg25b-out1 { transform-box: view-box; opacity: 0; animation: dg25bOut 9s linear infinite; }
    @keyframes dg25bOut {
      0%, 52% { opacity: 0; transform: translateY(0) }
      58%     { opacity: 1; transform: translateY(-8px) }
      88%     { opacity: 1; transform: translateY(-80px) }
      94%, 100% { opacity: 0; transform: translateY(-80px) }
    }
    .dg25b-back { transform-box: view-box; opacity: 0; animation: dg25bBack 9s linear infinite; }
    @keyframes dg25bBack {
      0%, 52% { opacity: 0; transform: translate(0, 0) }
      58%     { opacity: 1; transform: translate(10px, 8px) }
      88%     { opacity: 1; transform: translate(62px, 40px) }
      94%, 100% { opacity: 0; transform: translate(62px, 40px) }
    }
    .dg25b-lvl { transform-box: view-box; transform-origin: 234px 128px; transform: scaleX(.04); animation: dg25bLvl 9s ease-in-out infinite; }
    @keyframes dg25bLvl { 0% { transform: scaleX(.04) } 42%, 52% { transform: scaleX(1) } 92%, 100% { transform: scaleX(.04) } }

    .dg25b-onC { opacity: 0; animation: dg25bOnC 9s linear infinite; }
    .dg25b-onR { opacity: 0; animation: dg25bOnR 9s linear infinite; }
    @keyframes dg25bOnC { 0%, 4% { opacity: 0 } 12%, 48% { opacity: 1 } 54%, 100% { opacity: 0 } }
    @keyframes dg25bOnR { 0%, 54% { opacity: 0 } 62%, 94% { opacity: 1 } 99%, 100% { opacity: 0 } }

    .dg25b-gateI { animation: dg25bGateI 9s linear infinite; }
    .dg25b-gateO { animation: dg25bGateO 9s linear infinite; }
    @keyframes dg25bGateI { 0%, 3% { opacity: .4 } 8%, 40% { opacity: 1 } 46%, 100% { opacity: .4 } }
    @keyframes dg25bGateO { 0%, 53% { opacity: .4 } 58%, 90% { opacity: 1 } 95%, 100% { opacity: .4 } }

    .dg25b-d1 { animation-delay: .5s }
    .dg25b-d2 { animation-delay: 1s }
    .dg25b-d3 { animation-delay: 1.5s }
  </style>

  <rect class="dg25b-ecf" x="8" y="10" width="624" height="34" rx="6"/>
  <text x="18" y="31" class="dg25b-tiny" font-weight="700">EXTRACELLULAR &#8212; Ca&#178;&#8314; HIGH</text>
  <rect x="330" y="20" width="10" height="10" rx="2" class="dg25b-ca"/>
  <text x="344" y="29" class="dg25b-tiny">Ca&#178;&#8314;</text>
  <text x="626" y="29" class="dg25b-tiny" text-anchor="end">plasma membrane below</text>

  <line class="dg25b-mem" x1="10"  y1="50" x2="64"  y2="50"/>
  <line class="dg25b-mem" x1="98"  y1="50" x2="178" y2="50"/>
  <line class="dg25b-mem" x1="212" y1="50" x2="392" y2="50"/>
  <line class="dg25b-mem" x1="426" y1="50" x2="496" y2="50"/>
  <line class="dg25b-mem" x1="530" y1="50" x2="630" y2="50"/>

  <rect class="dg25b-prot dg25b-gateI" x="64"  y="38" width="34" height="24" rx="6"/>
  <rect class="dg25b-prot dg25b-gateI" x="178" y="38" width="34" height="24" rx="6"/>
  <rect class="dg25b-prot dg25b-gateO" x="392" y="38" width="34" height="24" rx="6"/>
  <rect class="dg25b-prot dg25b-gateO" x="496" y="38" width="34" height="24" rx="6"/>

  <text x="12" y="74" class="dg25b-hd">L-type, voltage-gated</text>
  <text x="12" y="86" class="dg25b-tiny">opens on DEPOLARIZATION</text>
  <text x="12" y="97" class="dg25b-tiny">(KCl, stretch) &#183; CCB target</text>
  <text x="150" y="74" class="dg25b-hd">voltage-independent</text>
  <text x="150" y="86" class="dg25b-tiny">ligand-gated, stretch-</text>
  <text x="150" y="97" class="dg25b-tiny">activated, leak</text>

  <text x="628" y="74" class="dg25b-hd" text-anchor="end">Na&#8314;/Ca&#178;&#8314; exchanger</text>
  <text x="628" y="86" class="dg25b-tiny" text-anchor="end">and plasma-membrane Ca&#178;&#8314; pump</text>
  <text x="628" y="97" class="dg25b-tiny" text-anchor="end">push Ca&#178;&#8314; out of the cell</text>

  <g class="dg25b-ca dg25b-in1"><circle cx="81" cy="56" r="4"/></g>
  <g class="dg25b-ca dg25b-in1 dg25b-d1"><circle cx="72" cy="56" r="4"/></g>
  <g class="dg25b-ca dg25b-in1 dg25b-d2"><circle cx="90" cy="56" r="4"/></g>
  <g class="dg25b-ca dg25b-in1"><circle cx="195" cy="56" r="4"/></g>
  <g class="dg25b-ca dg25b-in1 dg25b-d2"><circle cx="186" cy="56" r="4"/></g>

  <g class="dg25b-ca dg25b-out1"><circle cx="409" cy="140" r="4"/></g>
  <g class="dg25b-ca dg25b-out1 dg25b-d1"><circle cx="400" cy="140" r="4"/></g>
  <g class="dg25b-ca dg25b-out1"><circle cx="513" cy="140" r="4"/></g>
  <g class="dg25b-ca dg25b-out1 dg25b-d2"><circle cx="522" cy="140" r="4"/></g>

  <text x="14" y="122" class="dg25b-tiny" font-weight="700">CYTOSOL</text>
  <text x="16" y="112" class="dg25b-star">CONTRACTION half</text>

  <rect class="dg25b-gauge" x="230" y="116" width="184" height="24" rx="12"/>
  <rect class="dg25b-fill dg25b-lvl" x="234" y="120" width="176" height="16" rx="8"/>
  <text x="322" y="110" class="dg25b-hd" text-anchor="middle">cytosolic Ca&#178;&#8314;</text>
  <text x="322" y="158" class="dg25b-hd dg25b-onC" text-anchor="middle" fill="var(--dg-warm)">Ca&#178;&#8314; &#8593; &#8594; Ca&#8722;calmodulin &#8594; MLCK &#8594; CONTRACTION</text>
  <text x="322" y="158" class="dg25b-hd dg25b-onR" text-anchor="middle" fill="var(--dg-good)">Ca&#178;&#8314; &#8595; &#8594; no Ca&#8722;calmodulin &#8594; RELAXATION</text>

  <rect class="dg25b-sr" x="222" y="192" width="200" height="66" rx="18"/>
  <text x="322" y="216" class="dg25b-hd" text-anchor="middle">SARCOPLASMIC RETICULUM</text>
  <text x="322" y="230" class="dg25b-tiny" text-anchor="middle">the internal Ca&#178;&#8314; store</text>
  <text x="322" y="243" class="dg25b-tiny" text-anchor="middle">(the lecturer's slide says SR, not ER)</text>

  <rect class="dg25b-prot dg25b-gateI" x="214" y="206" width="16" height="28" rx="5"/>
  <rect class="dg25b-prot dg25b-gateO" x="414" y="206" width="16" height="28" rx="5"/>

  <text x="206" y="200" class="dg25b-hd" text-anchor="end">IP&#8323; receptor</text>
  <text x="206" y="212" class="dg25b-tiny" text-anchor="end">opened by IP&#8323; downstream</text>
  <text x="206" y="223" class="dg25b-tiny" text-anchor="end">of the &#945;&#8321; receptor;</text>
  <text x="206" y="234" class="dg25b-tiny" text-anchor="end">Ca&#178;&#8314;-induced Ca&#178;&#8314; release too</text>

  <text x="440" y="200" class="dg25b-hd">SERCA</text>
  <text x="440" y="212" class="dg25b-tiny">Ca&#178;&#8314;-ATPase of the SR</text>
  <text x="440" y="223" class="dg25b-tiny">the MOST important way</text>
  <text x="440" y="234" class="dg25b-tiny">to clear cytosolic Ca&#178;&#8314;</text>

  <g class="dg25b-ca dg25b-sr1"><circle cx="238" cy="212" r="4"/></g>
  <g class="dg25b-ca dg25b-sr1 dg25b-d1"><circle cx="244" cy="222" r="4"/></g>
  <g class="dg25b-ca dg25b-sr1 dg25b-d3"><circle cx="234" cy="230" r="4"/></g>

  <g class="dg25b-ca dg25b-back"><circle cx="386" cy="172" r="4"/></g>
  <g class="dg25b-ca dg25b-back dg25b-d1"><circle cx="376" cy="180" r="4"/></g>
  <g class="dg25b-ca dg25b-back dg25b-d3"><circle cx="392" cy="184" r="4"/></g>

  <line class="dg25b-lead" x1="118" y1="58" x2="118" y2="112"/>
  <text x="124" y="112" class="dg25b-tiny">every route ends in the same cytosolic pool</text>

  <text x="14" y="278" class="dg25b-md">IN: L-type + voltage-independent + SR release</text>
  <text x="14" y="291" class="dg25b-md">OUT: SERCA + Na&#8314;/Ca&#178;&#8314; exchanger + Ca&#178;&#8314; pump</text>
  <text x="628" y="278" class="dg25b-tiny" text-anchor="end">Block the L-type channel and the calcium never arrives</text>
  <text x="628" y="291" class="dg25b-tiny" text-anchor="end">&#8212; nifedipine, amlodipine, verapamil (Slide 25)</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Myogenic tone: pressure alone, no nerve and no hormone.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv25-myogenic-tone"] = {
  title: "Myogenic tone &#8212; pressure is the only stimulus",
  caption:
    "Small resistance vessels set their own tone. Raise the pressure inside the lumen and the vessel <i>constricts</i>; drop it and the vessel <i>dilates</i> &#8212; the opposite of what a passive rubber tube would do. " +
    "The chain on the right is why: intraluminal pressure stretches the wall, tension on the membrane depolarizes the VSMC, depolarization opens voltage-gated Ca&#178;&#8314; channels, Ca&#178;&#8314; floods in, and the cell contracts. " +
    "No norepinephrine, no endothelin, no hormone at all &#8212; purely mechanical, which is what makes it <b>myogenic</b>. The lecturer's demonstration used isolated second-order <b>mesenteric arteries</b>, the classic resistance vessel (Slide 14).",
  svg: `
<svg viewBox="0 0 620 272" role="img" aria-label="On the left, a longitudinal section of a small artery. Arrows inside the lumen represent intraluminal pressure. As the pressure rises the arrows grow and the lumen narrows because the muscular wall contracts; as the pressure falls the arrows shrink and the lumen widens again. On the right a four step chain lights up in order: wall stretch creates tension on the vascular smooth muscle membrane, the membrane depolarizes, voltage-gated calcium channels open and calcium enters, and the cell contracts, producing vasoconstriction. A line at the bottom states that rising intraluminal pressure causes vasoconstriction and falling intraluminal pressure causes vasodilation, with no neurotransmitter and no hormone required, as demonstrated in isolated second-order mesenteric arteries.">
  <style>
    .dg25c-wall  { fill: var(--dg-warm); opacity: .45; }
    .dg25c-lum   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1; }
    .dg25c-box   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.2; }
    .dg25c-hl    { fill: var(--dg-accent); opacity: 0; }
    .dg25c-hd    { font-size: 10px; font-weight: 700; }
    .dg25c-md    { font-size: 9.5px; }
    .dg25c-tiny  { font-size: 8.5px; fill: var(--dg-muted); }
    .dg25c-arw   { stroke: var(--dg-ink); stroke-width: 1.6; opacity: .5; fill: none; }
    .dg25c-ah    { fill: var(--dg-ink); opacity: .5; }
    .dg25c-pr    { stroke: var(--dg-cool); stroke-width: 3; stroke-linecap: round; }
    .dg25c-prh   { fill: var(--dg-cool); }
    .dg25c-bad   { fill: var(--dg-accent); }
    .dg25c-badT  { font-size: 9px; font-weight: 700; fill: var(--dg-surface); }

    .dg25c-lumen { transform-box: view-box; transform-origin: 148px 122px; transform: scaleY(1); animation: dg25cLumen 9s ease-in-out infinite; }
    @keyframes dg25cLumen { 0%, 8% { transform: scaleY(1) } 46%, 62% { transform: scaleY(.34) } 96%, 100% { transform: scaleY(1) } }
    .dg25c-wallA { transform-box: view-box; transform-origin: 148px 122px; transform: scaleY(1); animation: dg25cWall 9s ease-in-out infinite; }
    @keyframes dg25cWall { 0%, 8% { transform: scaleY(1) } 46%, 62% { transform: scaleY(1.16) } 96%, 100% { transform: scaleY(1) } }
    .dg25c-push  { transform-box: view-box; transform-origin: 148px 122px; transform: scaleX(.45); animation: dg25cPush 9s ease-in-out infinite; }
    @keyframes dg25cPush { 0%, 6% { transform: scaleX(.45) } 40%, 62% { transform: scaleX(1) } 94%, 100% { transform: scaleX(.45) } }

    .dg25c-s1 { animation: dg25cS1 9s linear infinite; }
    .dg25c-s2 { animation: dg25cS2 9s linear infinite; }
    .dg25c-s3 { animation: dg25cS3 9s linear infinite; }
    .dg25c-s4 { animation: dg25cS4 9s linear infinite; }
    @keyframes dg25cS1 { 0%, 8% { opacity: 0 } 13%, 24% { opacity: .18 } 30%, 100% { opacity: 0 } }
    @keyframes dg25cS2 { 0%, 22% { opacity: 0 } 27%, 38% { opacity: .18 } 44%, 100% { opacity: 0 } }
    @keyframes dg25cS3 { 0%, 36% { opacity: 0 } 41%, 52% { opacity: .18 } 58%, 100% { opacity: 0 } }
    @keyframes dg25cS4 { 0%, 50% { opacity: 0 } 55%, 68% { opacity: .18 } 74%, 100% { opacity: 0 } }

    .dg25c-up { opacity: 0; animation: dg25cUp 9s linear infinite; }
    .dg25c-dn { opacity: 0; animation: dg25cDn 9s linear infinite; }
    @keyframes dg25cUp { 0%, 8% { opacity: 0 } 16%, 62% { opacity: 1 } 70%, 100% { opacity: 0 } }
    @keyframes dg25cDn { 0%, 74% { opacity: 0 } 82%, 97% { opacity: 1 } 100% { opacity: 0 } }
  </style>

  <text x="14" y="26" class="dg25c-hd" fill="var(--dg-accent)">SMALL RESISTANCE VESSEL</text>
  <text x="14" y="39" class="dg25c-tiny">isolated second-order mesenteric artery</text>

  <g class="dg25c-wallA">
    <rect class="dg25c-wall" x="24" y="60" width="248" height="26" rx="8"/>
    <rect class="dg25c-wall" x="24" y="158" width="248" height="26" rx="8"/>
  </g>
  <rect class="dg25c-lum dg25c-lumen" x="24" y="88" width="248" height="68" rx="8"/>

  <g class="dg25c-push">
    <line class="dg25c-pr" x1="148" y1="122" x2="148" y2="104"/>
    <polygon class="dg25c-prh" points="143,106 148,94 153,106"/>
    <line class="dg25c-pr" x1="148" y1="122" x2="148" y2="140"/>
    <polygon class="dg25c-prh" points="143,138 148,150 153,138"/>
    <line class="dg25c-pr" x1="86" y1="122" x2="86" y2="106"/>
    <polygon class="dg25c-prh" points="81,108 86,96 91,108"/>
    <line class="dg25c-pr" x1="210" y1="122" x2="210" y2="106"/>
    <polygon class="dg25c-prh" points="205,108 210,96 215,108"/>
  </g>

  <text x="24" y="200" class="dg25c-tiny">VSMC layer (orange) &#183; lumen (pale)</text>
  <text x="24" y="222" class="dg25c-hd dg25c-up" fill="var(--dg-warm)">&#8593; intraluminal pressure &#8594; VASOCONSTRICTION</text>
  <text x="24" y="222" class="dg25c-hd dg25c-dn" fill="var(--dg-good)">&#8595; intraluminal pressure &#8594; VASODILATION</text>

  <circle class="dg25c-bad" cx="296" cy="60" r="8"/>
  <text x="296" y="63.5" class="dg25c-badT" text-anchor="middle">1</text>
  <rect class="dg25c-box" x="312" y="44" width="296" height="32" rx="8"/>
  <rect class="dg25c-hl dg25c-s1" x="312" y="44" width="296" height="32" rx="8"/>
  <text x="322" y="58" class="dg25c-hd">wall STRETCH</text>
  <text x="322" y="70" class="dg25c-tiny">tension on receptors in the VSMC membrane</text>

  <line class="dg25c-arw" x1="460" y1="78" x2="460" y2="86"/>
  <polygon class="dg25c-ah" points="455,86 460,94 465,86"/>

  <circle class="dg25c-bad" cx="296" cy="112" r="8"/>
  <text x="296" y="115.5" class="dg25c-badT" text-anchor="middle">2</text>
  <rect class="dg25c-box" x="312" y="96" width="296" height="32" rx="8"/>
  <rect class="dg25c-hl dg25c-s2" x="312" y="96" width="296" height="32" rx="8"/>
  <text x="322" y="110" class="dg25c-hd">DEPOLARIZATION</text>
  <text x="322" y="122" class="dg25c-tiny">membrane potential becomes less negative</text>

  <line class="dg25c-arw" x1="460" y1="130" x2="460" y2="138"/>
  <polygon class="dg25c-ah" points="455,138 460,146 465,138"/>

  <circle class="dg25c-bad" cx="296" cy="164" r="8"/>
  <text x="296" y="167.5" class="dg25c-badT" text-anchor="middle">3</text>
  <rect class="dg25c-box" x="312" y="148" width="296" height="32" rx="8"/>
  <rect class="dg25c-hl dg25c-s3" x="312" y="148" width="296" height="32" rx="8"/>
  <text x="322" y="162" class="dg25c-hd">Ca&#178;&#8314; INFLUX</text>
  <text x="322" y="174" class="dg25c-tiny">voltage-gated Ca&#178;&#8314; channels open</text>

  <line class="dg25c-arw" x1="460" y1="182" x2="460" y2="190"/>
  <polygon class="dg25c-ah" points="455,190 460,198 465,190"/>

  <circle class="dg25c-bad" cx="296" cy="216" r="8"/>
  <text x="296" y="219.5" class="dg25c-badT" text-anchor="middle">4</text>
  <rect class="dg25c-box" x="312" y="200" width="296" height="32" rx="8"/>
  <rect class="dg25c-hl dg25c-s4" x="312" y="200" width="296" height="32" rx="8"/>
  <text x="322" y="214" class="dg25c-hd">CONTRACTION</text>
  <text x="322" y="226" class="dg25c-tiny">the lumen narrows &#8212; vasoconstriction</text>

  <text x="14" y="252" class="dg25c-md">Myogenic = the muscle does this by itself.</text>
  <text x="14" y="265" class="dg25c-tiny">No norepinephrine, no endothelin, no hormone &#8212; the stimulus is purely mechanical.</text>
</svg>`,
};

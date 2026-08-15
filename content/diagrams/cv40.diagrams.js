/*
 * cv40 - Shock: Pathophysiology and Management (Lecture #40,
 * N. Chernik, OMS-III, Academic Medicine Scholar).
 * Authoring rules live in the header of lecture_diagrams.js.
 */

window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

// --------------------------------------------------------------------------
// 1. Capillary transit time: why SVR and SVO2 always move in opposite directions.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv40-svr-svo2"] = {
  title: "SVR and SVO2 move in opposite directions",
  caption:
    "The lecturer calls this the counterintuitive one, and it is pure timing. " +
    "In the top lane the arteriole is constricted, so SVR is high and red cells crawl through the capillary; the long transit time gives tissues <b>more</b> time to pull oxygen out, so the blood returning to the right heart is desaturated and <b>SVO2 falls</b> (Slide 13). " +
    "In the bottom lane the arteriole is dilated, SVR is low, and blood races past; there is <b>less</b> time for gas exchange, so <b>SVO2 rises</b> (Slide 23). " +
    "Same capillary, same tissue demand - only the speed changed. Watch the oxygen droplets: three per pass on top, one on the bottom.",
  svg: `
<svg viewBox="0 0 630 292" role="img" aria-label="Two capillary lanes compared. In the upper lane a constricted arteriole makes red cells move slowly through the capillary and three oxygen droplets are released into the tissue, so venous oxygen saturation is low. In the lower lane a dilated arteriole makes red cells move quickly and only one oxygen droplet is released, so venous oxygen saturation is high.">
  <style>
    .dg40a-lbl  { font-size: 12.5px; font-weight: 700; }
    .dg40a-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg40a-cap  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.3; }
    .dg40a-vesL { fill: var(--dg-panel); stroke: var(--dg-warm); stroke-width: 2; }
    .dg40a-vesH { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 2; }
    .dg40a-rbc  { fill: var(--dg-accent); }
    .dg40a-o2   { fill: var(--dg-warm); }
    .dg40a-o2b  { fill: var(--dg-cool); }
    .dg40a-out  { font-size: 13px; font-weight: 700; }

    .dg40a-slow1 { animation: dg40aRun 7.5s linear infinite; }
    .dg40a-slow2 { animation: dg40aRun 7.5s linear infinite 2.5s; }
    .dg40a-slow3 { animation: dg40aRun 7.5s linear infinite 5s; }
    .dg40a-fast1 { animation: dg40aRun 2.5s linear infinite; }
    .dg40a-fast2 { animation: dg40aRun 2.5s linear infinite .83s; }
    .dg40a-fast3 { animation: dg40aRun 2.5s linear infinite 1.66s; }
    @keyframes dg40aRun {
      0%   { transform: translateX(0);     opacity: 0 }
      6%   { opacity: 1 }
      92%  { opacity: 1 }
      100% { transform: translateX(392px); opacity: 0 }
    }

    .dg40a-dA { animation: dg40aDrop 7.5s ease-in infinite .9s; }
    .dg40a-dB { animation: dg40aDrop 7.5s ease-in infinite 2.4s; }
    .dg40a-dC { animation: dg40aDrop 7.5s ease-in infinite 3.9s; }
    .dg40a-dD { animation: dg40aDrop 2.5s ease-in infinite .8s; }
    @keyframes dg40aDrop {
      0%   { transform: translateY(0);    opacity: 0 }
      18%  { opacity: .95 }
      70%  { opacity: .95 }
      100% { transform: translateY(26px); opacity: 0 }
    }
  </style>

  <text x="16" y="24" class="dg40a-lbl" fill="var(--dg-warm)">SVR high &#8212; arteriole constricted</text>
  <text x="16" y="40" class="dg40a-sub">hypovolemic, cardiogenic, obstructive</text>

  <rect class="dg40a-vesL" x="16" y="62" width="72" height="12" rx="6"/>
  <text x="16" y="90" class="dg40a-sub">small radius</text>
  <rect class="dg40a-cap" x="96" y="54" width="404" height="28" rx="14"/>
  <text x="112" y="72" class="dg40a-sub">slow transit &#8212; long time for gas exchange</text>

  <g class="dg40a-slow1"><circle class="dg40a-rbc" cx="108" cy="68" r="6"/></g>
  <g class="dg40a-slow2"><circle class="dg40a-rbc" cx="108" cy="68" r="6"/></g>
  <g class="dg40a-slow3"><circle class="dg40a-rbc" cx="108" cy="68" r="6"/></g>

  <g class="dg40a-dA"><circle class="dg40a-o2" cx="190" cy="88" r="5"/></g>
  <g class="dg40a-dB"><circle class="dg40a-o2" cx="290" cy="88" r="5"/></g>
  <g class="dg40a-dC"><circle class="dg40a-o2" cx="390" cy="88" r="5"/></g>
  <text x="176" y="128" class="dg40a-sub">three loads of O2 handed to the tissue</text>

  <text x="510" y="62" class="dg40a-out" fill="var(--dg-warm)">SVO2 &#8595;</text>
  <text x="510" y="80" class="dg40a-sub">more</text>
  <text x="510" y="94" class="dg40a-sub">extraction</text>

  <line x1="16" y1="150" x2="614" y2="150" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="16" y="176" class="dg40a-lbl" fill="var(--dg-cool)">SVR low &#8212; arteriole dilated</text>
  <text x="16" y="192" class="dg40a-sub">distributive: septic, anaphylactic, neurogenic</text>

  <rect class="dg40a-vesH" x="16" y="206" width="72" height="30" rx="14"/>
  <text x="16" y="252" class="dg40a-sub">large radius</text>
  <rect class="dg40a-cap" x="96" y="207" width="404" height="28" rx="14"/>
  <text x="112" y="225" class="dg40a-sub">fast transit &#8212; little time for gas exchange</text>

  <g class="dg40a-fast1"><circle class="dg40a-rbc" cx="108" cy="221" r="6"/></g>
  <g class="dg40a-fast2"><circle class="dg40a-rbc" cx="108" cy="221" r="6"/></g>
  <g class="dg40a-fast3"><circle class="dg40a-rbc" cx="108" cy="221" r="6"/></g>

  <g class="dg40a-dD"><circle class="dg40a-o2b" cx="290" cy="241" r="5"/></g>
  <text x="176" y="278" class="dg40a-sub">one load of O2 handed to the tissue</text>

  <text x="510" y="215" class="dg40a-out" fill="var(--dg-cool)">SVO2 &#8593;</text>
  <text x="510" y="233" class="dg40a-sub">less</text>
  <text x="510" y="247" class="dg40a-sub">extraction</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 2. Where the obstruction sits decides whether PCWP is low or high.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv40-obstruction-site"] = {
  title: "Obstructive shock: PCWP answers where the block is",
  caption:
    "Both obstructive shocks raise CVP, drop cardiac output, raise SVR and drop SVO2 - so the only measurement that separates them is the post-capillary wedge pressure, which reads left atrial pressure (Slide 5). " +
    "Top: a <b>pulmonary</b> obstruction (pulmonary embolism, tension pneumothorax) blocks flow <i>before</i> the left atrium, so blood piles up behind the right heart while the left atrium stays empty - <b>PCWP low</b>, RV afterload up, LV preload down. " +
    "Bottom: a <b>structural</b> obstruction (cardiac tamponade, constrictive pericarditis) squeezes the whole heart, so both chambers fill against pressure - <b>PCWP high</b>, RV preload down, diastolic filling down (Slide 20).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Two circuits. In the upper circuit blood flows from the veins into the right heart, then meets a clamp in the pulmonary circulation, so blood accumulates in the right heart while the left atrium stays empty and the wedge pressure is low. In the lower circuit a constricting ring squeezes the entire heart, so blood accumulates on both sides and the wedge pressure is high.">
  <style>
    .dg40b-lbl  { font-size: 12.5px; font-weight: 700; }
    .dg40b-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg40b-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg40b-pipe { stroke: var(--dg-line); stroke-width: 2; fill: none; }
    .dg40b-val  { font-size: 12.5px; font-weight: 700; }
    .dg40b-rbc  { fill: var(--dg-accent); }
    .dg40b-clip { stroke: var(--dg-warm); stroke-width: 4.5; stroke-linecap: round; }
    .dg40b-ring { fill: none; stroke: var(--dg-warm); stroke-width: 4; }

    .dg40b-p1 { animation: dg40bQueue 5.5s linear infinite; }
    .dg40b-p2 { animation: dg40bQueue 5.5s linear infinite 1.1s; }
    .dg40b-p3 { animation: dg40bQueue 5.5s linear infinite 2.2s; }
    @keyframes dg40bQueue {
      0%   { transform: translateX(0);     opacity: 0 }
      10%  { opacity: 1 }
      60%  { transform: translateX(150px); opacity: 1 }
      100% { transform: translateX(150px); opacity: 1 }
    }

    .dg40b-blink { animation: dg40bBlink 5.5s ease-in-out infinite; }
    @keyframes dg40bBlink { 0%, 45% { opacity: .45 } 60%, 100% { opacity: 1 } }

    .dg40b-squeeze { transform-box: view-box; transform-origin: 300px 232px;
                     animation: dg40bSqueeze 5s ease-in-out infinite; }
    @keyframes dg40bSqueeze { 0%, 15% { transform: scale(1) } 55%, 100% { transform: scale(.84) } }

    .dg40b-fill1 { animation: dg40bFill 5s ease-in-out infinite; }
    .dg40b-fill2 { animation: dg40bFill 5s ease-in-out infinite .5s; }
    .dg40b-fill3 { animation: dg40bFill 5s ease-in-out infinite 1s; }
    .dg40b-fill4 { animation: dg40bFill 5s ease-in-out infinite 1.5s; }
    @keyframes dg40bFill { 0%, 20% { opacity: .15 } 60%, 100% { opacity: 1 } }
  </style>

  <text x="16" y="22" class="dg40b-lbl">Pulmonary obstruction &#8212; block BEFORE the left atrium</text>
  <text x="16" y="38" class="dg40b-sub">pulmonary embolism, tension pneumothorax</text>

  <line x1="16" y1="76" x2="60" y2="76" class="dg40b-pipe"/>
  <rect class="dg40b-box" x="60" y="54" width="96" height="46" rx="10"/>
  <text x="72" y="76" class="dg40b-lbl">RA / RV</text>
  <text x="72" y="92" class="dg40b-sub">backing up</text>
  <text x="60" y="120" class="dg40b-val" fill="var(--dg-warm)">CVP &#8593;</text>

  <line x1="156" y1="76" x2="288" y2="76" class="dg40b-pipe"/>
  <text x="176" y="66" class="dg40b-sub">pulmonary circulation</text>

  <g class="dg40b-p1"><circle class="dg40b-rbc" cx="30" cy="76" r="5.5"/></g>
  <g class="dg40b-p2"><circle class="dg40b-rbc" cx="30" cy="76" r="5.5"/></g>
  <g class="dg40b-p3"><circle class="dg40b-rbc" cx="30" cy="76" r="5.5"/></g>

  <g class="dg40b-blink">
    <line x1="240" y1="58" x2="264" y2="94" class="dg40b-clip"/>
    <line x1="264" y1="58" x2="240" y2="94" class="dg40b-clip"/>
  </g>
  <text x="222" y="112" class="dg40b-sub" fill="var(--dg-warm)">obstruction</text>

  <line x1="288" y1="76" x2="330" y2="76" class="dg40b-pipe"/>
  <rect class="dg40b-box" x="330" y="54" width="96" height="46" rx="10"/>
  <text x="342" y="76" class="dg40b-lbl">LA / LV</text>
  <text x="342" y="92" class="dg40b-sub">empty</text>
  <text x="330" y="120" class="dg40b-val" fill="var(--dg-cool)">PCWP &#8595;</text>

  <text x="452" y="66" class="dg40b-sub">RV afterload &#8593;</text>
  <text x="452" y="82" class="dg40b-sub">LV preload &#8595;</text>
  <text x="452" y="98" class="dg40b-sub">CO &#8595;, SVR &#8593;, SVO2 &#8595;</text>

  <line x1="16" y1="146" x2="624" y2="146" stroke="var(--dg-line)" stroke-width="1"/>

  <text x="16" y="172" class="dg40b-lbl">Structural obstruction &#8212; the WHOLE heart is squeezed</text>
  <text x="16" y="188" class="dg40b-sub">cardiac tamponade, constrictive pericarditis</text>

  <line x1="16" y1="232" x2="196" y2="232" class="dg40b-pipe"/>
  <g class="dg40b-squeeze">
    <rect class="dg40b-ring" x="196" y="200" width="208" height="64" rx="16"/>
    <rect class="dg40b-box" x="210" y="212" width="82" height="40" rx="9"/>
    <text x="220" y="237" class="dg40b-lbl">RA</text>
    <rect class="dg40b-box" x="308" y="212" width="82" height="40" rx="9"/>
    <text x="318" y="237" class="dg40b-lbl">LA</text>
    <circle class="dg40b-rbc dg40b-fill1" cx="258" cy="226" r="5"/>
    <circle class="dg40b-rbc dg40b-fill2" cx="258" cy="242" r="5"/>
    <circle class="dg40b-rbc dg40b-fill3" cx="356" cy="226" r="5"/>
    <circle class="dg40b-rbc dg40b-fill4" cx="356" cy="242" r="5"/>
  </g>
  <text x="196" y="288" class="dg40b-val" fill="var(--dg-warm)">CVP &#8593;</text>
  <text x="284" y="288" class="dg40b-val" fill="var(--dg-warm)">PCWP &#8593;</text>
  <text x="204" y="192" class="dg40b-sub" fill="var(--dg-warm)">restricted diastole</text>

  <text x="452" y="216" class="dg40b-sub">RV preload &#8595;</text>
  <text x="452" y="232" class="dg40b-sub">diastolic filling &#8595;</text>
  <text x="452" y="248" class="dg40b-sub">CO &#8595;, SVR &#8593;, SVO2 &#8595;</text>
</svg>`,
};

// --------------------------------------------------------------------------
// 3. Septic shock: one endotoxin, three downstream limbs.
// --------------------------------------------------------------------------
window.LECTURE_DIAGRAMS["cv40-lps-cascade"] = {
  title: "From lipid A to a low SVR",
  caption:
    "The signal starts at the <b>lipid A</b> portion of lipopolysaccharide binding <b>toll-like receptor 4</b> on macrophages and B cells, and then splits into three limbs (Slide 25). " +
    "The cytokine limb (IL-1, TNF, IL-6) produces fever and loosens the bonds between endothelial cells, so fluid escapes into the interstitium - the same third spacing seen in hypovolemic shock. " +
    "The nitric oxide limb dilates the vessel and is what actually drops SVR, the primary insult of distributive shock. " +
    "The coagulation limb activates tissue factor and produces DIC. Watch the pulse leave the receptor and light all three limbs in turn.",
  svg: `
<svg viewBox="0 0 640 296" role="img" aria-label="A cascade diagram. Lipopolysaccharide lipid A binds toll-like receptor four on a macrophage. Three arrows leave the receptor: one to interleukin one, tumour necrosis factor and interleukin six, which cause fever and loosen endothelial junctions so fluid leaks into the interstitium; one to nitric oxide, which dilates a vessel that visibly widens and lowers systemic vascular resistance; and one to tissue factor, which causes disseminated intravascular coagulation.">
  <style>
    .dg40c-lbl  { font-size: 12px; font-weight: 700; }
    .dg40c-sub  { font-size: 10.5px; fill: var(--dg-muted); }
    .dg40c-box  { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.4; }
    .dg40c-key  { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 2; }
    .dg40c-arr  { stroke: var(--dg-line); stroke-width: 1.8; fill: none; }
    .dg40c-head { fill: var(--dg-line); }
    .dg40c-val  { font-size: 12.5px; font-weight: 700; }
    .dg40c-ves  { fill: var(--dg-panel); stroke: var(--dg-cool); stroke-width: 2; }

    .dg40c-s1 { animation: dg40cSig 6s ease-in-out infinite .2s; }
    .dg40c-s2 { animation: dg40cSig 6s ease-in-out infinite 1.1s; }
    .dg40c-s3 { animation: dg40cSig 6s ease-in-out infinite 2s; }
    @keyframes dg40cSig { 0%, 6% { opacity: .3 } 18%, 62% { opacity: 1 } 80%, 100% { opacity: .3 } }

    .dg40c-bind { animation: dg40cBind 6s ease-in-out infinite; }
    @keyframes dg40cBind {
      0%   { transform: translateX(-26px); opacity: .2 }
      14%  { transform: translateX(0);     opacity: 1 }
      100% { transform: translateX(0);     opacity: 1 }
    }

    .dg40c-dilate { transform-box: view-box; transform-origin: 556px 168px;
                    animation: dg40cDilate 6s ease-in-out infinite; }
    @keyframes dg40cDilate { 0%, 30% { transform: scaleY(.45) } 62%, 100% { transform: scaleY(1) } }

    .dg40c-lk1 { animation: dg40cLeak 6s ease-in infinite 1.4s; }
    .dg40c-lk2 { animation: dg40cLeak 6s ease-in infinite 1.9s; }
    @keyframes dg40cLeak {
      0%   { transform: translateY(0);    opacity: 0 }
      24%  { opacity: .95 }
      76%  { opacity: .95 }
      100% { transform: translateY(22px); opacity: 0 }
    }
  </style>

  <g class="dg40c-bind">
    <rect class="dg40c-key" x="14" y="128" width="92" height="40" rx="9"/>
    <text x="24" y="146" class="dg40c-lbl">LPS</text>
    <text x="24" y="161" class="dg40c-sub">lipid A</text>
  </g>

  <line x1="106" y1="148" x2="132" y2="148" class="dg40c-arr"/>
  <polygon points="132,142 146,148 132,154" class="dg40c-head"/>

  <rect class="dg40c-key" x="146" y="122" width="132" height="52" rx="10"/>
  <text x="156" y="142" class="dg40c-lbl">TLR-4</text>
  <text x="156" y="157" class="dg40c-sub">macrophages,</text>
  <text x="156" y="169" class="dg40c-sub">B cells</text>

  <g class="dg40c-s1">
    <path class="dg40c-arr" d="M278 138 C304 138 306 70 330 70"/>
    <polygon points="330,64 344,70 330,76" class="dg40c-head"/>
    <rect class="dg40c-box" x="344" y="46" width="142" height="46" rx="9"/>
    <text x="354" y="66" class="dg40c-lbl">IL-1, TNF, IL-6</text>
    <text x="354" y="82" class="dg40c-sub">fever, inflammation</text>
    <text x="500" y="60" class="dg40c-sub">endothelial junctions loosen</text>
    <text x="500" y="74" class="dg40c-sub">fluid leaks out</text>
    <text x="500" y="88" class="dg40c-val" fill="var(--dg-warm)">third spacing</text>
  </g>
  <g class="dg40c-lk1"><circle cx="512" cy="100" r="4.5" fill="var(--dg-warm)"/></g>
  <g class="dg40c-lk2"><circle cx="548" cy="100" r="4.5" fill="var(--dg-warm)"/></g>

  <g class="dg40c-s2">
    <line x1="278" y1="148" x2="330" y2="148" class="dg40c-arr"/>
    <polygon points="330,142 344,148 330,154" class="dg40c-head"/>
    <rect class="dg40c-box" x="344" y="128" width="142" height="40" rx="9"/>
    <text x="354" y="153" class="dg40c-lbl">Nitric oxide</text>
  </g>
  <rect class="dg40c-ves dg40c-dilate" x="502" y="150" width="110" height="36" rx="16"/>
  <text x="502" y="144" class="dg40c-sub">vessel dilates</text>
  <text x="502" y="206" class="dg40c-val" fill="var(--dg-cool)">SVR &#8595;</text>
  <text x="502" y="222" class="dg40c-sub">the primary insult</text>

  <g class="dg40c-s3">
    <path class="dg40c-arr" d="M278 158 C304 158 306 244 330 244"/>
    <polygon points="330,238 344,244 330,250" class="dg40c-head"/>
    <rect class="dg40c-box" x="344" y="224" width="142" height="40" rx="9"/>
    <text x="354" y="249" class="dg40c-lbl">Tissue factor</text>
    <text x="500" y="243" class="dg40c-val" fill="var(--dg-warm)">DIC</text>
    <text x="500" y="258" class="dg40c-sub">coagulation cascade</text>
  </g>

  <text x="14" y="214" class="dg40c-sub">Gram-negative</text>
  <text x="14" y="228" class="dg40c-sub">endotoxin</text>
  <text x="14" y="264" class="dg40c-sub">Treat: cultures and lactate, then</text>
  <text x="14" y="278" class="dg40c-sub">antibiotics within 1 hour (Slide 28)</text>
</svg>`,
};

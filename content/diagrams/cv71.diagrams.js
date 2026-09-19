window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv71-nitrate-pde5-cgmp"] = {
  title: "Nitrates + PDE5 inhibitors: one cGMP pool",
  caption: "Nitrates donate NO, which activates guanylyl cyclase and fills the cGMP pool that relaxes vascular smooth muscle (Slides 5-6). PDE5 normally drains that pool; sildenafil, vardenafil and tadalafil block the drain (Slides 9-10). With both on board, inflow rises while outflow stops, so cGMP overshoots and blood pressure collapses, invoking a reflex sympathetic surge - hence the 48-hour nitrate-free window.",
  svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Nitrate adds NO which activates guanylyl cyclase to fill a cGMP tank; PDE5 drains the tank to GMP but is blocked by sildenafil, so the cGMP level rises to excess, causing profound hypotension and reflex tachycardia.">
  <style>
    .dg71a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg71a-lbl { font-size: 13px; font-weight: 700; }
    .dg71a-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg71a-in { stroke: var(--dg-cool); stroke-width: 5; stroke-linecap: round; }
    .dg71a-inhead { fill: var(--dg-cool); }
    .dg71a-out { stroke: var(--dg-muted); stroke-width: 5; stroke-linecap: round; stroke-dasharray: 6 6; }
    .dg71a-block { stroke: var(--dg-warm); stroke-width: 5; stroke-linecap: round; }
    .dg71a-warn { fill: var(--dg-warm); font-size: 13px; font-weight: 700; }
    .dg71a-tank { fill: none; stroke: var(--dg-ink); stroke-width: 2; }
    .dg71a-normal { stroke: var(--dg-good); stroke-width: 2; stroke-dasharray: 4 3; }
    .dg71a-level { fill: var(--dg-accent); opacity: .75; transform-box: fill-box; transform-origin: 50% 100%; animation: dg71afill 5s ease-in-out infinite; }
    @keyframes dg71afill { 0% { transform: scaleY(.45) } 55% { transform: scaleY(1) } 85% { transform: scaleY(1) } 100% { transform: scaleY(.45) } }
    .dg71a-dot { fill: var(--dg-cool); animation: dg71aflow 1.8s linear infinite; }
    .dg71a-dot2 { animation-delay: .6s; }
    .dg71a-dot3 { animation-delay: 1.2s; }
    @keyframes dg71aflow { 0% { transform: translateX(0); opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { transform: translateX(120px); opacity: 0 } }
  </style>
  <rect x="14" y="96" width="120" height="58" rx="10" class="dg71a-box"/>
  <text x="26" y="120" class="dg71a-lbl">Nitrate</text>
  <text x="26" y="139" class="dg71a-sub">NO donor</text>
  <line x1="138" y1="125" x2="250" y2="125" class="dg71a-in"/>
  <polygon points="250,115 268,125 250,135" class="dg71a-inhead"/>
  <circle cx="146" cy="125" r="5" class="dg71a-dot"/>
  <circle cx="146" cy="125" r="5" class="dg71a-dot dg71a-dot2"/>
  <circle cx="146" cy="125" r="5" class="dg71a-dot dg71a-dot3"/>
  <text x="150" y="108" class="dg71a-sub">guanylyl cyclase</text>
  <text x="150" y="150" class="dg71a-sub">more cGMP made</text>
  <rect x="276" y="50" width="92" height="170" rx="6" class="dg71a-tank"/>
  <rect x="280" y="54" width="84" height="162" rx="4" class="dg71a-level"/>
  <line x1="270" y1="160" x2="374" y2="160" class="dg71a-normal"/>
  <text x="378" y="164" class="dg71a-sub">normal level</text>
  <text x="298" y="42" class="dg71a-lbl">cGMP</text>
  <line x1="322" y1="224" x2="322" y2="252" class="dg71a-out"/>
  <text x="332" y="248" class="dg71a-sub">PDE5 -> GMP (drain)</text>
  <line x1="296" y1="232" x2="348" y2="252" class="dg71a-block"/>
  <line x1="296" y1="252" x2="348" y2="232" class="dg71a-block"/>
  <text x="440" y="236" class="dg71a-warn">Sildenafil blocks the drain</text>
  <rect x="440" y="62" width="186" height="116" rx="10" class="dg71a-box"/>
  <text x="452" y="86" class="dg71a-lbl">Overshoot</text>
  <text x="452" y="106" class="dg71a-sub">extreme smooth muscle relaxation</text>
  <text x="452" y="124" class="dg71a-sub">profound hypotension</text>
  <text x="452" y="142" class="dg71a-sub">reflex sympathetic surge</text>
  <text x="452" y="160" class="dg71a-warn">-> ischemia / MI</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv71-coronary-steal"] = {
  title: "Coronary steal",
  caption: "Beyond a stenosis, local ischemia has already dilated the arterioles as far as they can go, so a vasodilator can only open the normal bed (Slide 13). Resistance falls in the healthy branch, flow follows the path of least resistance, and the ischemic region receives less blood than before - angina can worsen. The lecture applies this to all vasodilators and to dipyridamole.",
  svg: `<svg viewBox="0 0 640 290" role="img" aria-label="Two panels. Before a vasodilator, a narrow normal arteriole and an already dilated ischemic arteriole share flow. After a vasodilator, the normal arteriole widens and takes most of the flow, while flow to the ischemic region beyond the stenosis falls.">
  <style>
    .dg71b-ttl { font-size: 13px; font-weight: 700; }
    .dg71b-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg71b-vessel { stroke: var(--dg-line); stroke-linecap: round; fill: none; }
    .dg71b-sten { fill: var(--dg-warm); }
    .dg71b-isch { fill: var(--dg-warm); opacity: .18; }
    .dg71b-ok { fill: var(--dg-good); opacity: .15; }
    .dg71b-flow { stroke: var(--dg-cool); fill: none; stroke-linecap: round; stroke-dasharray: 3 12; animation: dg71bmove 1.2s linear infinite; }
    .dg71b-slow { animation-duration: 3s; }
    @keyframes dg71bmove { to { stroke-dashoffset: -30; } }
    .dg71b-warn { fill: var(--dg-warm); font-size: 12px; font-weight: 700; }
    .dg71b-divider { stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 4 4; }
  </style>
  <text x="20" y="24" class="dg71b-ttl">Before vasodilator</text>
  <text x="340" y="24" class="dg71b-ttl">After vasodilator</text>
  <line x1="320" y1="14" x2="320" y2="280" class="dg71b-divider"/>

  <rect x="206" y="44" width="96" height="70" rx="10" class="dg71b-ok"/>
  <rect x="206" y="160" width="96" height="70" rx="10" class="dg71b-isch"/>
  <text x="214" y="62" class="dg71b-sub">normal bed</text>
  <text x="214" y="178" class="dg71b-sub">ischemic bed</text>
  <path d="M20 140 L80 140 L130 80 L206 80" class="dg71b-vessel" stroke-width="14"/>
  <path d="M80 140 L130 196 L206 196" class="dg71b-vessel" stroke-width="14"/>
  <line x1="206" y1="80" x2="296" y2="80" class="dg71b-vessel" stroke-width="5"/>
  <line x1="206" y1="196" x2="296" y2="196" class="dg71b-vessel" stroke-width="14"/>
  <rect x="146" y="186" width="16" height="20" class="dg71b-sten"/>
  <path d="M20 140 L80 140 L130 80 L296 80" class="dg71b-flow" stroke-width="4"/>
  <path d="M80 140 L130 196 L296 196" class="dg71b-flow" stroke-width="4"/>
  <text x="214" y="104" class="dg71b-sub">arteriole constricted</text>
  <text x="214" y="222" class="dg71b-sub">already max dilated</text>
  <text x="120" y="250" class="dg71b-sub">stenosis</text>

  <rect x="526" y="44" width="96" height="70" rx="10" class="dg71b-ok"/>
  <rect x="526" y="160" width="96" height="70" rx="10" class="dg71b-isch"/>
  <text x="534" y="62" class="dg71b-sub">normal bed</text>
  <text x="534" y="178" class="dg71b-sub">ischemic bed</text>
  <path d="M340 140 L400 140 L450 80 L526 80" class="dg71b-vessel" stroke-width="14"/>
  <path d="M400 140 L450 196 L526 196" class="dg71b-vessel" stroke-width="14"/>
  <line x1="526" y1="80" x2="616" y2="80" class="dg71b-vessel" stroke-width="14"/>
  <line x1="526" y1="196" x2="616" y2="196" class="dg71b-vessel" stroke-width="14"/>
  <rect x="466" y="186" width="16" height="20" class="dg71b-sten"/>
  <path d="M340 140 L400 140 L450 80 L616 80" class="dg71b-flow" stroke-width="8"/>
  <path d="M400 140 L450 196 L616 196" class="dg71b-flow dg71b-slow" stroke-width="2"/>
  <text x="534" y="104" class="dg71b-sub">arteriole opens</text>
  <text x="534" y="222" class="dg71b-sub">cannot dilate further</text>
  <text x="340" y="262" class="dg71b-warn">Flow diverted away from the ischemic bed</text>
  <text x="340" y="280" class="dg71b-sub">thicker, faster stream = more flow</text>
</svg>`
};

window.LECTURE_DIAGRAMS["cv71-aspirin-platelet-vs-endothelium"] = {
  title: "Why low-dose aspirin spares prostacyclin",
  caption: "Aspirin irreversibly acetylates COX in every cell it reaches (Slides 27-28). Nucleated endothelial cells make new COX and resume prostacyclin, which keeps platelets away; anucleate platelets cannot, so their thromboxane A2 stays off for the life of the platelet, about 7-10 days. The net result is less aggregation. No endothelial recovery time is given in the lecture, so none is drawn.",
  svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Graph of COX activity after one aspirin dose. The endothelial cell line drops then recovers as new COX is made, preserving prostacyclin. The platelet line drops and stays flat at zero for the 7 to 10 day life of the platelet, so thromboxane A2 is lost.">
  <style>
    .dg71c-axis { stroke: var(--dg-ink); stroke-width: 1.5; }
    .dg71c-lbl { font-size: 12px; }
    .dg71c-sub { font-size: 11px; fill: var(--dg-muted); }
    .dg71c-endo { stroke: var(--dg-good); stroke-width: 4; fill: none; stroke-linecap: round; stroke-dasharray: 700; animation: dg71cdraw 6s ease-out infinite; }
    .dg71c-plt { stroke: var(--dg-warm); stroke-width: 4; fill: none; stroke-linecap: round; stroke-dasharray: 700; animation: dg71cdraw 6s ease-out infinite; }
    @keyframes dg71cdraw { 0% { stroke-dashoffset: 700 } 70% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: 0 } }
    .dg71c-endot { fill: var(--dg-good); font-size: 12px; font-weight: 700; }
    .dg71c-pltt { fill: var(--dg-warm); font-size: 12px; font-weight: 700; }
    .dg71c-dose { stroke: var(--dg-accent); stroke-width: 2; stroke-dasharray: 4 4; }
    .dg71c-life { stroke: var(--dg-muted); stroke-width: 1.5; }
  </style>
  <line x1="60" y1="30" x2="60" y2="220" class="dg71c-axis"/>
  <line x1="60" y1="220" x2="600" y2="220" class="dg71c-axis"/>
  <text x="14" y="36" class="dg71c-sub">COX</text>
  <text x="14" y="50" class="dg71c-sub">activity</text>
  <text x="440" y="244" class="dg71c-sub">time after one dose</text>
  <line x1="120" y1="30" x2="120" y2="220" class="dg71c-dose"/>
  <text x="96" y="262" class="dg71c-lbl">aspirin</text>
  <path d="M60 60 L120 60 L140 205 L230 205 L300 64 L600 64" class="dg71c-endo"/>
  <path d="M60 80 L120 80 L136 214 L600 214" class="dg71c-plt"/>
  <text x="312" y="54" class="dg71c-endot">Endothelial cell: nucleus -> new COX</text>
  <text x="312" y="90" class="dg71c-sub">prostacyclin returns, repels platelets</text>
  <text x="220" y="196" class="dg71c-pltt">Platelet: no nucleus -> no new COX, no TXA2</text>
  <line x1="136" y1="236" x2="560" y2="236" class="dg71c-life"/>
  <line x1="560" y1="228" x2="560" y2="244" class="dg71c-life"/>
  <text x="200" y="262" class="dg71c-sub">lost for the platelet's life, about 7-10 days</text>
</svg>`
};

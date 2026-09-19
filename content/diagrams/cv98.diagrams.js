window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv98-restrictive-flow"] = {
  title: "Restrictive physiology",
  caption: "A rigid ventricle barely stretches in diastole, so diastolic pressure rises and filling falls. The pressure travels backward into both atria (biatrial dilation, arrhythmias) and then the veins, where systemic congestion is often more prominent than pulmonary; the poor filling travels forward as low cardiac output. Systolic squeeze is preserved, which is why the heart looks normal-sized (Slides 4-6).",
  svg: `<svg viewBox="0 0 640 290" role="img" aria-label="Flow diagram: a rigid ventricle with raised diastolic pressure sends pressure backward into both dilated atria and then the systemic veins, causing jugular venous distension, edema, ascites and hepatomegaly, and sends a reduced forward output causing fatigue and decreased exercise tolerance.">
  <style>
    .dg98a-box { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg98a-key { fill: var(--dg-panel); stroke: var(--dg-accent); stroke-width: 3; }
    .dg98a-h { font-size: 13px; font-weight: 700; }
    .dg98a-t { font-size: 11.5px; }
    .dg98a-s { font-size: 11px; fill: var(--dg-muted); }
    .dg98a-back { stroke: var(--dg-warm); stroke-width: 5; fill: none; stroke-linecap: round; }
    .dg98a-backhead { fill: var(--dg-warm); }
    .dg98a-fwd { stroke: var(--dg-cool); stroke-width: 2; fill: none; stroke-dasharray: 6 5; }
    .dg98a-fwdhead { fill: var(--dg-cool); }
    .dg98a-wall { transform-origin: 315px 212px; animation: dg98a-try 2.6s ease-in-out infinite; }
    @keyframes dg98a-try { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.025); } }
    .dg98a-dot { animation: dg98a-up 2.6s linear infinite; }
    .dg98a-dot2 { animation: dg98a-left 2.6s linear infinite 1.3s; }
    @keyframes dg98a-up { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(-50px); opacity: 0; } }
    @keyframes dg98a-left { 0% { transform: translateX(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateX(-60px); opacity: 0; } }
    .dg98a-pulse { animation: dg98a-fade 2.6s ease-in-out infinite; }
    @keyframes dg98a-fade { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
  </style>

  <rect x="225" y="30" width="180" height="78" rx="12" class="dg98a-box"/>
  <text x="315" y="54" text-anchor="middle" class="dg98a-h">Both atria dilate</text>
  <text x="315" y="74" text-anchor="middle" class="dg98a-t">left + right heart failure</text>
  <text x="315" y="92" text-anchor="middle" class="dg98a-t">arrhythmias</text>

  <g class="dg98a-wall">
    <rect x="225" y="166" width="180" height="92" rx="14" class="dg98a-key"/>
  </g>
  <text x="315" y="190" text-anchor="middle" class="dg98a-h">Rigid ventricle</text>
  <text x="315" y="209" text-anchor="middle" class="dg98a-t">compliance down, not dilated</text>
  <text x="315" y="227" text-anchor="middle" class="dg98a-t">diastolic pressure UP</text>
  <text x="315" y="245" text-anchor="middle" class="dg98a-s">systole preserved</text>

  <rect x="12" y="30" width="170" height="112" rx="12" class="dg98a-box"/>
  <text x="97" y="54" text-anchor="middle" class="dg98a-h">Venous congestion</text>
  <text x="97" y="74" text-anchor="middle" class="dg98a-t">systemic more than lungs</text>
  <text x="97" y="94" text-anchor="middle" class="dg98a-t">JVD, edema</text>
  <text x="97" y="112" text-anchor="middle" class="dg98a-t">ascites, hepatomegaly</text>
  <text x="97" y="130" text-anchor="middle" class="dg98a-s">plus rales</text>

  <rect x="455" y="166" width="172" height="92" rx="12" class="dg98a-box"/>
  <text x="541" y="190" text-anchor="middle" class="dg98a-h">Cardiac output DOWN</text>
  <text x="541" y="210" text-anchor="middle" class="dg98a-t">filling reduced</text>
  <text x="541" y="228" text-anchor="middle" class="dg98a-t">fatigue, decreased</text>
  <text x="541" y="245" text-anchor="middle" class="dg98a-t">exercise tolerance</text>

  <g class="dg98a-pulse">
    <line x1="315" y1="162" x2="315" y2="124" class="dg98a-back"/>
    <polygon points="305,126 315,110 325,126" class="dg98a-backhead"/>
    <line x1="221" y1="69" x2="200" y2="69" class="dg98a-back"/>
    <polygon points="202,59 186,69 202,79" class="dg98a-backhead"/>
  </g>
  <text x="330" y="146" class="dg98a-s">pressure backs up</text>

  <circle cx="300" cy="158" r="4" fill="var(--dg-warm)" class="dg98a-dot"/>
  <circle cx="220" cy="84" r="4" fill="var(--dg-warm)" class="dg98a-dot2"/>

  <line x1="409" y1="212" x2="440" y2="212" class="dg98a-fwd"/>
  <polygon points="440,205 452,212 440,219" class="dg98a-fwdhead"/>
  <text x="409" y="278" class="dg98a-s">thin forward flow</text>
</svg>`
};

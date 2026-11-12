window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv161-morning-edema"] = {
  title: "Why the eyes are puffy at breakfast",
  caption:
    "In nephrotic syndrome, protein lost in the urine leaves too little oncotic pressure to hold fluid in the vessels. " +
    "Lying flat overnight, that fluid settles around the eyes, so the child wakes with puffy eyes; once upright, gravity pulls it down toward the legs and belly, and the eyes clear later in the day (Slides 7-8). " +
    "Allergic eye swelling runs the other way, usually appearing later in the day after time outdoors.",
  svg: `
<svg viewBox="0 0 620 280" role="img" aria-label="Two panels. Night: the child lies flat in bed and fluid that has leaked out of the vessels drifts toward the head and pools around the eyes, so the eyes are puffy on waking. Day: the child stands upright and gravity pulls the fluid down to the belly and ankles, so the eyes clear later in the day.">
  <style>
    .dg161a-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg161a-bed   { fill: var(--dg-surface); stroke: var(--dg-muted); stroke-width: 1.5; }
    .dg161a-body  { fill: none; stroke: var(--dg-ink); stroke-width: 4; stroke-linecap: round; }
    .dg161a-head  { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg161a-eye   { fill: var(--dg-ink); }
    .dg161a-h     { font-size: 14px; font-weight: 700; }
    .dg161a-lbl   { font-size: 12px; }
    .dg161a-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg161a-key   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg161a-fluid { fill: var(--dg-cool); }
    .dg161a-puff  { fill: var(--dg-cool); opacity: .35; }
    .dg161a-faint { fill: var(--dg-cool); opacity: .12; }
    .dg161a-sun   { fill: var(--dg-warm); }
    .dg161a-ray   { stroke: var(--dg-warm); stroke-width: 2; stroke-linecap: round; }
    .dg161a-moon  { fill: var(--dg-muted); }
    .dg161a-grav  { stroke: var(--dg-muted); stroke-width: 2.5; fill: var(--dg-muted); }
    .dg161a-l1 { animation: dg161a-left 3.6s ease-in infinite; }
    .dg161a-l2 { animation: dg161a-left 3.6s ease-in infinite 1.2s; }
    .dg161a-l3 { animation: dg161a-left 3.6s ease-in infinite 2.4s; }
    @keyframes dg161a-left {
      0%   { transform: translateX(130px); opacity: 0 }
      15%  { opacity: 1 }
      100% { transform: translateX(0); opacity: 1 }
    }
    .dg161a-d1 { animation: dg161a-down 3.6s ease-in infinite; }
    .dg161a-d2 { animation: dg161a-down 3.6s ease-in infinite 1.2s; }
    .dg161a-d3 { animation: dg161a-down 3.6s ease-in infinite 2.4s; }
    @keyframes dg161a-down {
      0%   { transform: translateY(-110px); opacity: 0 }
      15%  { opacity: 1 }
      100% { transform: translateY(0); opacity: 1 }
    }
    .dg161a-swell { animation: dg161a-grow 3.6s ease-in-out infinite; transform-origin: 66px 128px; }
    @keyframes dg161a-grow { 0% { transform: scale(.5) } 100% { transform: scale(1) } }
    .dg161a-clear { animation: dg161a-shrink 3.6s ease-in-out infinite; transform-origin: 455px 63px; }
    @keyframes dg161a-shrink { 0% { transform: scale(2.4); opacity: .35 } 100% { transform: scale(1); opacity: .12 } }
  </style>

  <text x="20" y="26" class="dg161a-h">Night: lying flat</text>
  <rect x="20" y="38" width="280" height="172" rx="12" class="dg161a-panel"/>
  <circle cx="272" cy="64" r="11" class="dg161a-moon"/>
  <circle cx="278" cy="59" r="10" fill="var(--dg-panel)"/>
  <rect x="38" y="150" width="244" height="18" rx="6" class="dg161a-bed"/>
  <ellipse cx="66" cy="148" rx="26" ry="7" class="dg161a-bed"/>
  <line x1="88" y1="134" x2="232" y2="134" class="dg161a-body"/>
  <line x1="232" y1="134" x2="272" y2="138" class="dg161a-body"/>
  <line x1="120" y1="134" x2="160" y2="144" class="dg161a-body"/>
  <circle cx="70" cy="130" r="17" class="dg161a-head"/>
  <ellipse cx="66" cy="128" rx="13" ry="8" class="dg161a-puff dg161a-swell"/>
  <circle cx="64" cy="127" r="1.8" class="dg161a-eye"/>
  <g class="dg161a-l1"><circle cx="94" cy="118" r="4.5" class="dg161a-fluid"/></g>
  <g class="dg161a-l2"><circle cx="100" cy="146" r="4.5" class="dg161a-fluid"/></g>
  <g class="dg161a-l3"><circle cx="88" cy="110" r="3.5" class="dg161a-fluid"/></g>
  <text x="120" y="112" class="dg161a-sub">fluid drifts toward the face</text>

  <text x="20" y="232" class="dg161a-lbl">Low oncotic pressure: fluid leaks from vessels;</text>
  <text x="20" y="250" class="dg161a-lbl">lying flat, it pools around the eyes</text>
  <text x="20" y="270" class="dg161a-key">Puffy eyes on waking</text>

  <text x="320" y="26" class="dg161a-h">Day: upright</text>
  <rect x="320" y="38" width="280" height="172" rx="12" class="dg161a-panel"/>
  <circle cx="574" cy="64" r="10" class="dg161a-sun"/>
  <line x1="574" y1="46" x2="574" y2="50" class="dg161a-ray"/>
  <line x1="574" y1="78" x2="574" y2="82" class="dg161a-ray"/>
  <line x1="556" y1="64" x2="560" y2="64" class="dg161a-ray"/>
  <line x1="588" y1="64" x2="592" y2="64" class="dg161a-ray"/>
  <line x1="460" y1="83" x2="460" y2="150" class="dg161a-body"/>
  <line x1="460" y1="150" x2="446" y2="198" class="dg161a-body"/>
  <line x1="460" y1="150" x2="474" y2="198" class="dg161a-body"/>
  <line x1="460" y1="100" x2="440" y2="132" class="dg161a-body"/>
  <line x1="460" y1="100" x2="480" y2="132" class="dg161a-body"/>
  <circle cx="460" cy="66" r="17" class="dg161a-head"/>
  <ellipse cx="455" cy="63" rx="6" ry="4" class="dg161a-faint dg161a-clear"/>
  <circle cx="454" cy="63" r="1.8" class="dg161a-eye"/>
  <ellipse cx="460" cy="132" rx="15" ry="11" class="dg161a-puff"/>
  <ellipse cx="446" cy="196" rx="11" ry="7" class="dg161a-puff"/>
  <ellipse cx="474" cy="196" rx="11" ry="7" class="dg161a-puff"/>
  <g class="dg161a-d1"><circle cx="447" cy="190" r="4.5" class="dg161a-fluid"/></g>
  <g class="dg161a-d2"><circle cx="474" cy="188" r="4.5" class="dg161a-fluid"/></g>
  <g class="dg161a-d3"><circle cx="462" cy="136" r="3.5" class="dg161a-fluid"/></g>
  <line x1="530" y1="96" x2="530" y2="176" class="dg161a-grav"/>
  <polygon points="522,172 530,190 538,172" class="dg161a-grav"/>
  <text x="540" y="140" class="dg161a-sub">gravity</text>

  <text x="320" y="232" class="dg161a-lbl">Upright, gravity pulls the fluid down</text>
  <text x="320" y="250" class="dg161a-lbl">toward the belly and legs</text>
  <text x="320" y="270" class="dg161a-key">Eyes clear later in the day</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv161-bell-clapper"] = {
  title: "Bell clapper deformity and torsion",
  caption:
    "Normally the tunica vaginalis covers only part of the testis, and the testis is anchored to the scrotal wall. " +
    "In the bell clapper deformity the tunica surrounds the whole testis, so it hangs free and can twist on its cord inside the bag; the twist cuts off its blood supply, and the swollen testis rides high with an absent cremasteric reflex (Slides 22-23). " +
    "Diagnose with testicular ultrasound with Doppler and fix both sides, because the deformity is usually bilateral (Slide 24).",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Left: a normal testis inside the scrotum, partly covered by the tunica vaginalis and anchored to the scrotal wall, with blood flowing down the cord. Right: a bell clapper testis fully surrounded by the tunica, hanging free; it spins on its cord, the cord twists, blood flow stops at the twist, and the testis rides higher than normal. Labels: twists on its cord, blood flow cut off, swollen and high-riding, cremasteric reflex absent. Footer: Doppler ultrasound, then orchiopexy of both sides because the deformity is usually bilateral.">
  <style>
    .dg161b-panel { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg161b-sac   { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2; }
    .dg161b-cord  { stroke: var(--dg-ink); stroke-width: 5; stroke-linecap: round; }
    .dg161b-testis { fill: var(--dg-surface); stroke: var(--dg-ink); stroke-width: 2.5; }
    .dg161b-epi   { fill: none; stroke: var(--dg-accent); stroke-width: 6; stroke-linecap: round; }
    .dg161b-tun   { fill: none; stroke: var(--dg-accent); stroke-width: 2; stroke-dasharray: 5 4; }
    .dg161b-anchor { stroke: var(--dg-good); stroke-width: 3; stroke-linecap: round; }
    .dg161b-twistln { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg161b-x     { stroke: var(--dg-warm); stroke-width: 3; stroke-linecap: round; }
    .dg161b-flow  { fill: var(--dg-warm); }
    .dg161b-lead  { stroke: var(--dg-muted); stroke-width: 1; }
    .dg161b-h     { font-size: 14px; font-weight: 700; }
    .dg161b-lbl   { font-size: 12px; }
    .dg161b-bold  { font-size: 12px; font-weight: 700; }
    .dg161b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg161b-key   { font-size: 12px; font-weight: 700; fill: var(--dg-accent); }
    .dg161b-f1 { animation: dg161b-run 1.8s linear infinite; }
    .dg161b-f2 { animation: dg161b-run 1.8s linear infinite .9s; }
    @keyframes dg161b-run {
      0%   { transform: translateY(0); opacity: 0 }
      15%  { opacity: 1 }
      80%  { opacity: 1 }
      100% { transform: translateY(64px); opacity: 0 }
    }
    .dg161b-rise  { animation: dg161b-up 6s ease-in-out infinite; }
    @keyframes dg161b-up {
      0%, 15%   { transform: translateY(22px) }
      55%, 100% { transform: translateY(0) }
    }
    .dg161b-spin  { animation: dg161b-turn 6s ease-in-out infinite; transform-origin: 365px 132px; }
    @keyframes dg161b-turn {
      0%, 15%   { transform: scaleX(1) }
      25%       { transform: scaleX(-1) }
      35%       { transform: scaleX(1) }
      45%       { transform: scaleX(-1) }
      55%, 100% { transform: scaleX(1) }
    }
    .dg161b-twist { animation: dg161b-show 6s ease-in-out infinite; }
    @keyframes dg161b-show {
      0%, 35%   { opacity: 0 }
      55%, 100% { opacity: 1 }
    }
    .dg161b-g1 { animation: dg161b-stop 6s linear infinite; }
    @keyframes dg161b-stop {
      0%   { transform: translateY(-14px); opacity: 0 }
      8%   { transform: translateY(14px); opacity: 1 }
      12%  { transform: translateY(-14px); opacity: 0 }
      20%  { transform: translateY(14px); opacity: 1 }
      24%  { transform: translateY(-14px); opacity: 0 }
      40%  { transform: translateY(0); opacity: 1 }
      100% { transform: translateY(0); opacity: 1 }
    }
  </style>

  <text x="12" y="24" class="dg161b-h">Normal attachment</text>
  <rect x="10" y="34" width="232" height="210" rx="12" class="dg161b-panel"/>
  <path d="M 60 50 Q 50 222 126 226 Q 202 222 192 50" class="dg161b-sac"/>
  <line x1="126" y1="40" x2="126" y2="122" class="dg161b-cord"/>
  <ellipse cx="126" cy="154" rx="24" ry="32" class="dg161b-testis"/>
  <path d="M 147 128 Q 158 154 147 180" class="dg161b-epi"/>
  <path d="M 116 118 Q 80 154 116 190" class="dg161b-tun"/>
  <line x1="152" y1="144" x2="185" y2="144" class="dg161b-anchor"/>
  <line x1="152" y1="156" x2="186" y2="156" class="dg161b-anchor"/>
  <line x1="152" y1="168" x2="184" y2="168" class="dg161b-anchor"/>
  <g class="dg161b-f1"><circle cx="126" cy="50" r="4" class="dg161b-flow"/></g>
  <g class="dg161b-f2"><circle cx="126" cy="50" r="4" class="dg161b-flow"/></g>
  <text x="80" y="212" class="dg161b-sub">tunica (front only)</text>
  <text x="12" y="264" class="dg161b-lbl">Testis anchored to the scrotal wall:</text>
  <text x="12" y="282" class="dg161b-sub">it cannot spin, and blood flows down the cord</text>

  <text x="257" y="24" class="dg161b-h">Bell clapper deformity</text>
  <rect x="255" y="34" width="375" height="210" rx="12" class="dg161b-panel"/>
  <path d="M 300 50 Q 290 222 366 226 Q 442 222 432 50" class="dg161b-sac"/>
  <line x1="365" y1="40" x2="365" y2="104" class="dg161b-cord"/>
  <g class="dg161b-rise">
    <line x1="365" y1="40" x2="365" y2="100" class="dg161b-cord"/>
    <g class="dg161b-twist">
      <line x1="356" y1="56" x2="374" y2="64" class="dg161b-twistln"/>
      <line x1="356" y1="68" x2="374" y2="76" class="dg161b-twistln"/>
      <line x1="356" y1="80" x2="374" y2="88" class="dg161b-twistln"/>
    </g>
    <ellipse cx="365" cy="132" rx="38" ry="46" class="dg161b-tun"/>
    <g class="dg161b-spin">
      <ellipse cx="365" cy="132" rx="24" ry="32" class="dg161b-testis"/>
      <path d="M 386 106 Q 397 132 386 158" class="dg161b-epi"/>
    </g>
  </g>
  <g class="dg161b-g1"><circle cx="365" cy="44" r="4" class="dg161b-flow"/></g>
  <line x1="378" y1="40" x2="390" y2="52" class="dg161b-x"/>
  <line x1="390" y1="40" x2="378" y2="52" class="dg161b-x"/>

  <line x1="394" y1="46" x2="448" y2="52" class="dg161b-lead"/>
  <text x="452" y="56" class="dg161b-bold">Blood flow cut off</text>
  <text x="452" y="72" class="dg161b-sub">the testis dies within hours</text>
  <line x1="378" y1="76" x2="448" y2="96" class="dg161b-lead"/>
  <text x="452" y="100" class="dg161b-bold">Twists on its cord</text>
  <text x="452" y="116" class="dg161b-sub">inside the tunica, "the bag"</text>
  <line x1="405" y1="150" x2="448" y2="146" class="dg161b-lead"/>
  <text x="452" y="150" class="dg161b-bold">Swollen, high-riding</text>
  <text x="452" y="166" class="dg161b-sub">twisting pulls it upward</text>
  <text x="452" y="198" class="dg161b-bold">Cremasteric reflex</text>
  <text x="452" y="214" class="dg161b-bold">absent</text>
  <text x="332" y="204" class="dg161b-sub">tunica surrounds</text>
  <text x="332" y="218" class="dg161b-sub">the whole testis</text>

  <text x="257" y="264" class="dg161b-key">Doppler ultrasound, then orchiopexy of BOTH sides</text>
  <text x="257" y="282" class="dg161b-sub">the bell clapper deformity is usually bilateral</text>
</svg>`,
};

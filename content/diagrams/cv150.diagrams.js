window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {};

window.LECTURE_DIAGRAMS["cv150-flu-block-points"] = {
  title: "How far the virus gets",
  caption: "Each lane follows influenza through its life cycle (Slide 11). Adamantanes stop it at uncoating, baloxavir at transcription, and neuraminidase inhibitors at the last step, where finished progeny clump at the cell surface instead of leaving. Without a drug, new virions go on to infect other cells.",
  svg: `
<svg viewBox="0 0 640 300" role="img" aria-label="Four lanes follow influenza through six life cycle steps. Without a drug the virus completes every step and is released. Adamantanes stop it at uncoating, baloxavir stops it at transcription, and neuraminidase inhibitors stop it at release, where progeny clump at the cell surface.">
  <style>
    .dg150a-step  { font-size: 12px; font-weight: 700; text-anchor: middle; }
    .dg150a-name  { font-size: 13px; font-weight: 700; }
    .lecture-diagram svg text.dg150a-sub   { font-size: 10.5px; fill: var(--dg-muted); }
    .dg150a-grid  { stroke: var(--dg-line); stroke-width: 1; stroke-dasharray: 3 5; }
    .dg150a-track { stroke: var(--dg-line); stroke-width: 4; stroke-linecap: round; }
    .dg150a-gone  { stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 2 6; opacity: .7; }
    .dg150a-stop  { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; }
    .lecture-diagram svg text.dg150a-note  { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .lecture-diagram svg text.dg150a-free  { font-size: 11px; font-weight: 700; fill: var(--dg-good); }
    .dg150a-dot   { fill: var(--dg-accent); }
    .dg150a-d0 { animation: dg150a-go0 8s linear infinite; }
    .dg150a-d1 { animation: dg150a-go1 8s linear infinite; }
    .dg150a-d2 { animation: dg150a-go2 8s linear infinite; }
    .dg150a-d3 { animation: dg150a-go3 8s linear infinite; }
    .dg150a-s1 { animation: dg150a-hit1 8s linear infinite; }
    .dg150a-s2 { animation: dg150a-hit2 8s linear infinite; }
    .dg150a-s3 { animation: dg150a-hit3 8s linear infinite; }
    .dg150a-clump { fill: var(--dg-accent); animation: dg150a-hit3 8s linear infinite; }
    @keyframes dg150a-go0 {
      0%   { transform: translateX(0); opacity: 0 }
      4%   { opacity: 1 }
      63%  { transform: translateX(452px); opacity: 1 }
      72%  { transform: translateX(512px); opacity: 0 }
      100% { transform: translateX(512px); opacity: 0 }
    }
    @keyframes dg150a-go1 {
      0%   { transform: translateX(0); opacity: 0 }
      4%   { opacity: 1 }
      25%  { transform: translateX(176px); opacity: 1 }
      92%  { transform: translateX(176px); opacity: 1 }
      100% { transform: translateX(176px); opacity: 0 }
    }
    @keyframes dg150a-go2 {
      0%   { transform: translateX(0); opacity: 0 }
      4%   { opacity: 1 }
      38%  { transform: translateX(268px); opacity: 1 }
      92%  { transform: translateX(268px); opacity: 1 }
      100% { transform: translateX(268px); opacity: 0 }
    }
    @keyframes dg150a-go3 {
      0%   { transform: translateX(0); opacity: 0 }
      4%   { opacity: 1 }
      63%  { transform: translateX(452px); opacity: 1 }
      92%  { transform: translateX(452px); opacity: 1 }
      100% { transform: translateX(452px); opacity: 0 }
    }
    @keyframes dg150a-hit1 { 0%, 24% { opacity: .3 } 27%, 100% { opacity: 1 } }
    @keyframes dg150a-hit2 { 0%, 37% { opacity: .3 } 40%, 100% { opacity: 1 } }
    @keyframes dg150a-hit3 { 0%, 62% { opacity: .3 } 65%, 100% { opacity: 1 } }
  </style>
  <text x="130" y="30" class="dg150a-step">Bind</text>
  <line x1="130" y1="40" x2="130" y2="282" class="dg150a-grid"/>
  <text x="222" y="30" class="dg150a-step">Enter</text>
  <line x1="222" y1="40" x2="222" y2="282" class="dg150a-grid"/>
  <text x="314" y="30" class="dg150a-step">Uncoat</text>
  <line x1="314" y1="40" x2="314" y2="282" class="dg150a-grid"/>
  <text x="406" y="30" class="dg150a-step">Transcribe</text>
  <line x1="406" y1="40" x2="406" y2="282" class="dg150a-grid"/>
  <text x="498" y="30" class="dg150a-step">Translate</text>
  <line x1="498" y1="40" x2="498" y2="282" class="dg150a-grid"/>
  <text x="590" y="30" class="dg150a-step">Release</text>
  <line x1="590" y1="40" x2="590" y2="282" class="dg150a-grid"/>
  <text x="0" y="74" class="dg150a-name">No drug</text>
  <text x="0" y="88" class="dg150a-sub">full cycle</text>
  <text x="0" y="134" class="dg150a-name">Adamantanes</text>
  <text x="0" y="148" class="dg150a-sub">block M2</text>
  <text x="0" y="194" class="dg150a-name">Baloxavir</text>
  <text x="0" y="208" class="dg150a-sub">blocks PA protein</text>
  <text x="0" y="254" class="dg150a-name">NAIs</text>
  <text x="0" y="268" class="dg150a-sub">block neuraminidase</text>
  <line x1="130" y1="76" x2="590" y2="76" class="dg150a-track"/>
  <text x="590" y="64" text-anchor="end" class="dg150a-free">new virions released</text>
  <line x1="130" y1="136" x2="304" y2="136" class="dg150a-track"/>
  <line x1="324" y1="136" x2="590" y2="136" class="dg150a-gone"/>
  <line x1="314" y1="123" x2="314" y2="149" class="dg150a-stop dg150a-s1"/>
  <text x="326" y="126" class="dg150a-note">no uncoating, cycle stops here</text>
  <line x1="130" y1="196" x2="396" y2="196" class="dg150a-track"/>
  <line x1="416" y1="196" x2="590" y2="196" class="dg150a-gone"/>
  <line x1="406" y1="183" x2="406" y2="209" class="dg150a-stop dg150a-s2"/>
  <text x="418" y="186" class="dg150a-note">no viral mRNA, no proteins</text>
  <line x1="130" y1="256" x2="580" y2="256" class="dg150a-track"/>
  <line x1="590" y1="243" x2="590" y2="269" class="dg150a-stop dg150a-s3"/>
  <text x="582" y="242" text-anchor="end" class="dg150a-note">progeny clump at the surface, no release</text>
  <circle cx="566" cy="251" r="4.5" class="dg150a-clump"/>
  <circle cx="566" cy="261" r="4.5" class="dg150a-clump"/>
  <circle cx="558" cy="256" r="4.5" class="dg150a-clump"/>
  <circle cx="574" cy="256" r="4.5" class="dg150a-clump"/>
  <circle cx="130" cy="76" r="7" class="dg150a-dot dg150a-d0"/>
  <circle cx="130" cy="136" r="7" class="dg150a-dot dg150a-d1"/>
  <circle cx="130" cy="196" r="7" class="dg150a-dot dg150a-d2"/>
  <circle cx="130" cy="256" r="7" class="dg150a-dot dg150a-d3"/>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv150-cap-snatching"] = {
  title: "Cap snatching",
  caption: "Viral mRNA synthesis needs a primer, and the PA protein gets one by cutting it from host mRNA (Slides 11, 20). The primer starts a positive-sense copy of the viral template, and its host-derived cap gets the message read by host ribosomes. Baloxavir blocks the cut, so the process stops right at the top.",
  svg: `
<svg viewBox="0 0 640 286" role="img" aria-label="The PA protein cuts a capped fragment from host messenger RNA. The fragment moves to the viral negative-sense template and primes a new positive-sense viral messenger RNA. Host ribosomes recognize the host cap and translate it. Baloxavir blocks the cut.">
  <style>
    .dg150b-lbl   { font-size: 12px; font-weight: 700; }
    .lecture-diagram svg text.dg150b-sub   { font-size: 11px; fill: var(--dg-muted); }
    .dg150b-step  { font-size: 11.5px; }
    .lecture-diagram svg text.dg150b-block { font-size: 12px; font-weight: 700; fill: var(--dg-warm); }
    .dg150b-host  { stroke: var(--dg-muted); stroke-width: 6; stroke-linecap: round; }
    .dg150b-tmpl  { stroke: var(--dg-cool); stroke-width: 6; stroke-linecap: round; }
    .dg150b-new   { stroke: var(--dg-good); stroke-width: 6; stroke-dasharray: 240; stroke-dashoffset: 0; animation: dg150b-grow 9s linear infinite; }
    .dg150b-cap   { fill: var(--dg-accent); }
    .dg150b-frag  { stroke: var(--dg-accent); stroke-width: 6; stroke-linecap: round; }
    .dg150b-ghost { opacity: .28; }
    .dg150b-path  { stroke: var(--dg-line); stroke-width: 2; stroke-dasharray: 5 5; fill: none; }
    .dg150b-cut   { stroke: var(--dg-warm); stroke-width: 3; stroke-dasharray: 4 3; animation: dg150b-snip 9s linear infinite; }
    .dg150b-move  { animation: dg150b-carry 9s ease-in-out infinite; }
    @keyframes dg150b-carry {
      0%, 14% { transform: translate(0, 0); opacity: 1 }
      42%     { transform: translate(288px, 100px); opacity: 1 }
      94%     { transform: translate(288px, 100px); opacity: 1 }
      100%    { transform: translate(288px, 100px); opacity: 0 }
    }
    @keyframes dg150b-grow {
      0%, 42% { stroke-dashoffset: 240 }
      84%     { stroke-dashoffset: 0 }
      100%    { stroke-dashoffset: 0 }
    }
    @keyframes dg150b-snip {
      0%, 4%  { opacity: .3 }
      10%, 16% { opacity: 1 }
      30%, 100% { opacity: .55 }
    }
  </style>

  <text x="110" y="30" class="dg150b-block">Baloxavir blocks this cut</text>
  <text x="110" y="46" class="dg150b-sub">PA protein, the viral endonuclease</text>
  <line x1="100" y1="24" x2="100" y2="94" class="dg150b-cut"/>

  <line x1="108" y1="72" x2="290" y2="72" class="dg150b-host"/>
  <text x="110" y="98" class="dg150b-sub">Capped host mRNA</text>
  <text x="34" y="52" class="dg150b-sub">5' cap</text>

  <path d="M 84 84 L 322 172" class="dg150b-path"/>

  <g class="dg150b-ghost">
    <rect x="324" y="162" width="26" height="20" rx="5" class="dg150b-cap"/>
    <line x1="350" y1="172" x2="378" y2="172" class="dg150b-frag"/>
  </g>
  <line x1="384" y1="172" x2="622" y2="172" class="dg150b-new"/>
  <line x1="330" y1="196" x2="622" y2="196" class="dg150b-tmpl"/>
  <text x="384" y="154" class="dg150b-lbl">New viral positive-sense mRNA</text>
  <text x="330" y="216" class="dg150b-sub">Viral negative-sense RNA, the template</text>

  <g class="dg150b-move">
    <rect x="36" y="62" width="26" height="20" rx="5" class="dg150b-cap"/>
    <line x1="62" y1="72" x2="90" y2="72" class="dg150b-frag"/>
  </g>

  <text x="0" y="238" class="dg150b-step">1. PA protein cleaves a capped primer from host mRNA.</text>
  <text x="0" y="256" class="dg150b-step">2. The snatched primer starts viral mRNA on the negative-sense template.</text>
  <text x="0" y="274" class="dg150b-step">3. The cap is host-derived, so host ribosomes recognize it and make viral proteins.</text>
</svg>`,
};

window.LECTURE_DIAGRAMS["cv150-rna-chain-fates"] = {
  title: "Two ways to ruin viral RNA",
  caption: "RdRp takes up both drugs, but the chain ends differently (Slide 35). Remdesivir-TP lets two or three more nucleotides join and then the chain stops. NHC-TP stops nothing: replication keeps going, mutations accumulate with copying, and the mutated RNA is eventually lethal to the virus.",
  svg: `
<svg viewBox="0 0 640 312" role="img" aria-label="Top row: remdesivir triphosphate is incorporated into a growing RNA chain, two or three more nucleotides join, and the chain stops. Lower rows: NHC triphosphate is incorporated, replication keeps going, and each round of copying carries more mutations until the RNA is lethal to the virus.">
  <style>
    .dg150c-lbl  { font-size: 13px; font-weight: 700; }
    .lecture-diagram svg text.dg150c-sub  { font-size: 11px; fill: var(--dg-muted); }
    .lecture-diagram svg text.dg150c-end  { font-size: 11px; font-weight: 700; fill: var(--dg-warm); }
    .lecture-diagram svg text.dg150c-ch   { font-size: 12px; font-weight: 700; text-anchor: middle; fill: var(--dg-surface); }
    .dg150c-nt   { fill: var(--dg-panel); stroke: var(--dg-line); stroke-width: 1.5; }
    .dg150c-none { fill: none; stroke: var(--dg-line); stroke-width: 1.5; stroke-dasharray: 3 4; }
    .dg150c-drug { fill: var(--dg-accent); }
    .dg150c-bad  { fill: var(--dg-warm); }
    .dg150c-stop { stroke: var(--dg-warm); stroke-width: 6; stroke-linecap: round; animation: dg150c-stopper 9s linear infinite; }
    .dg150c-wipe { fill: var(--dg-surface); transform-box: fill-box; transform-origin: 100% 50%; transform: scaleX(0); }
    .dg150c-w0 { animation: dg150c-wa 9s steps(7, end) infinite; }
    .dg150c-w1 { animation: dg150c-wb 9s steps(20, end) infinite; }
    .dg150c-w2 { animation: dg150c-wc 9s steps(20, end) infinite; }
    .dg150c-w3 { animation: dg150c-wd 9s steps(20, end) infinite; }
    @keyframes dg150c-wa { 0% { transform: scaleX(1) } 30% { transform: scaleX(0) } 100% { transform: scaleX(0) } }
    @keyframes dg150c-wb { 0% { transform: scaleX(1) } 30% { transform: scaleX(0) } 100% { transform: scaleX(0) } }
    @keyframes dg150c-wc { 0%, 30% { transform: scaleX(1) } 60% { transform: scaleX(0) } 100% { transform: scaleX(0) } }
    @keyframes dg150c-wd { 0%, 60% { transform: scaleX(1) } 90% { transform: scaleX(0) } 100% { transform: scaleX(0) } }
    @keyframes dg150c-stopper { 0%, 29% { opacity: .25 } 32%, 100% { opacity: 1 } }
  </style>
  <text x="8" y="18" class="dg150c-lbl">Remdesivir: delayed chain termination</text>
  <rect x="8" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="38" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="68" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="98" y="28" width="26" height="26" rx="4" class="dg150c-drug"/>
  <text x="111" y="46" class="dg150c-ch">R</text>
  <rect x="128" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="158" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="188" y="28" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="248" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="278" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="308" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="338" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="368" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="398" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <rect x="428" y="28" width="26" height="26" rx="4" class="dg150c-none"/>
  <line x1="230" y1="25" x2="230" y2="57" class="dg150c-stop"/>
  <rect x="6" y="26" width="210" height="30" class="dg150c-wipe dg150c-w0"/>
  <text x="8" y="70" class="dg150c-sub">R = remdesivir-TP, then 2-3 more nucleotides</text>
  <text x="244" y="70" class="dg150c-end">chain stops; the rest is never made</text>
  <text x="8" y="106" class="dg150c-lbl">Molnupiravir: lethal mutagenesis, viral error catastrophe</text>
  <rect x="8" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="38" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="68" y="116" width="26" height="26" rx="4" class="dg150c-drug"/>
  <text x="81" y="134" class="dg150c-ch">N</text>
  <rect x="98" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="128" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="158" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="188" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="218" y="116" width="26" height="26" rx="4" class="dg150c-drug"/>
  <text x="231" y="134" class="dg150c-ch">N</text>
  <rect x="248" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="278" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="308" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="338" y="116" width="26" height="26" rx="4" class="dg150c-drug"/>
  <text x="351" y="134" class="dg150c-ch">N</text>
  <rect x="368" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="398" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="428" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="458" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="488" y="116" width="26" height="26" rx="4" class="dg150c-drug"/>
  <text x="501" y="134" class="dg150c-ch">N</text>
  <rect x="518" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="548" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="578" y="116" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="6" y="114" width="602" height="30" class="dg150c-wipe dg150c-w1"/>
  <text x="8" y="156" class="dg150c-sub">RNA containing NHC: RdRp took up NHC-TP instead of cytosine-TP or uridine-TP</text>
  <rect x="8" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="38" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="68" y="168" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="81" y="186" class="dg150c-ch">x</text>
  <rect x="98" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="128" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="158" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="188" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="218" y="168" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="231" y="186" class="dg150c-ch">x</text>
  <rect x="248" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="278" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="308" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="338" y="168" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="351" y="186" class="dg150c-ch">x</text>
  <rect x="368" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="398" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="428" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="458" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="488" y="168" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="501" y="186" class="dg150c-ch">x</text>
  <rect x="518" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="548" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="578" y="168" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="6" y="166" width="602" height="30" class="dg150c-wipe dg150c-w2"/>
  <text x="8" y="208" class="dg150c-sub">Copy of that strand: replication keeps going, but mutations are incorporated</text>
  <rect x="8" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="38" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="51" y="238" class="dg150c-ch">x</text>
  <rect x="68" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="81" y="238" class="dg150c-ch">x</text>
  <rect x="98" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="128" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="141" y="238" class="dg150c-ch">x</text>
  <rect x="158" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="188" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="218" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="231" y="238" class="dg150c-ch">x</text>
  <rect x="248" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="278" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="291" y="238" class="dg150c-ch">x</text>
  <rect x="308" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="338" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="351" y="238" class="dg150c-ch">x</text>
  <rect x="368" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="398" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="411" y="238" class="dg150c-ch">x</text>
  <rect x="428" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="458" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="488" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="501" y="238" class="dg150c-ch">x</text>
  <rect x="518" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="548" y="220" width="26" height="26" rx="4" class="dg150c-bad"/>
  <text x="561" y="238" class="dg150c-ch">x</text>
  <rect x="578" y="220" width="26" height="26" rx="4" class="dg150c-nt"/>
  <rect x="6" y="218" width="602" height="30" class="dg150c-wipe dg150c-w3"/>
  <text x="8" y="260" class="dg150c-end">Further copying: mutated RNA accumulates and is eventually lethal to the virus</text>
</svg>`,
};

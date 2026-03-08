"use client";

import { useEffect, useRef, useState } from "react";

export default function PtvFrameworkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto">
      <style>{`
        @keyframes ptvFadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ptvDrawLine { from { stroke-dashoffset:600; } to { stroke-dashoffset:0; } }
        @keyframes ptvGlowPulse { 0%,100% { opacity:0.3; } 50% { opacity:0.7; } }
        .ptv-layer-group { opacity:0; }
        .ptv-visible .ptv-layer-group { animation: ptvFadeInUp 0.8s ease-out forwards; }
        .ptv-visible .ptv-layer-group:nth-child(4) { animation-delay:0.2s; }
        .ptv-visible .ptv-layer-group:nth-child(6) { animation-delay:0.6s; }
        .ptv-visible .ptv-layer-group:nth-child(8) { animation-delay:1.0s; }
        .ptv-visible .ptv-layer-group:nth-child(10) { animation-delay:1.4s; }
        .ptv-connector-line { stroke-dasharray:600; stroke-dashoffset:600; }
        .ptv-visible .ptv-connector-line { animation: ptvDrawLine 2s ease-out forwards; animation-delay:1.8s; }
        .ptv-ambient-glow { animation: ptvGlowPulse 4s ease-in-out infinite; }
        .ptv-node-element { transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); }
        .ptv-node-element:hover { filter: drop-shadow(0 0 14px rgba(248,98,5,0.8)); }
      `}</style>
      <div className={visible ? "ptv-visible" : ""}>
        <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <defs>
            <linearGradient id="ptvOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F86205"/>
              <stop offset="100%" stopColor="#ff8a3d"/>
            </linearGradient>
            <linearGradient id="ptvDimOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F86205" stopOpacity={0.6}/>
              <stop offset="100%" stopColor="#ff8a3d" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="ptvVertFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F86205" stopOpacity={0.8}/>
              <stop offset="50%" stopColor="#F86205" stopOpacity={0.3}/>
              <stop offset="100%" stopColor="#F86205" stopOpacity={0.05}/>
            </linearGradient>
            <radialGradient id="ptvNodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F86205" stopOpacity={0.25}/>
              <stop offset="100%" stopColor="#F86205" stopOpacity={0}/>
            </radialGradient>
            <radialGradient id="ptvCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F86205" stopOpacity={0.12}/>
              <stop offset="100%" stopColor="#F86205" stopOpacity={0}/>
            </radialGradient>
          </defs>

          {/* Background ambient glow */}
          <ellipse cx={500} cy={350} rx={400} ry={300} fill="url(#ptvCenterGlow)" className="ptv-ambient-glow"/>

          {/* Subtle grid */}
          <g opacity={0.04}>
            {[100,200,300,400,500,600,700,800,900].map(x=><line key={`v${x}`} x1={x} y1={0} x2={x} y2={700} stroke="#F86205" strokeWidth={0.5}/>)}
            {[100,200,300,400,500,600].map(y=><line key={`h${y}`} x1={0} y1={y} x2={1000} y2={y} stroke="#F86205" strokeWidth={0.5}/>)}
          </g>

          {/* Vertical flow spine */}
          <path d="M500,55 L500,645" stroke="url(#ptvVertFlow)" strokeWidth={2} opacity={0.4} className="ptv-connector-line"/>
          <path d="M500,105 C420,140 300,155 240,165" stroke="#F86205" strokeWidth={1} opacity={0.15} fill="none" className="ptv-connector-line"/>
          <path d="M500,105 C580,140 700,155 760,165" stroke="#F86205" strokeWidth={1} opacity={0.15} fill="none" className="ptv-connector-line"/>

          {/* Layer 1: Direct the Investment */}
          <g className="ptv-layer-group">
            <rect x={120} y={60} width={760} height={110} rx={4} fill="#F86205" opacity={0.04} stroke="#F86205" strokeWidth={0.5} strokeOpacity={0.15}/>
            <rect x={120} y={60} width={4} height={110} rx={2} fill="#F86205" opacity={0.9}/>
            <g className="ptv-node-element" transform="translate(270,90)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvOrangeGrad)" strokeWidth={2}/>
              <circle cx={0} cy={25} r={8} fill="#F86205" opacity={0.9}/>
              <circle cx={-14} cy={13} r={2.5} fill="#F86205" opacity={0.5}/>
              <circle cx={14} cy={13} r={2.5} fill="#F86205" opacity={0.5}/>
              <circle cx={0} cy={40} r={2.5} fill="#F86205" opacity={0.5}/>
            </g>
            <g className="ptv-node-element" transform="translate(500,90)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvOrangeGrad)" strokeWidth={2}/>
              <path d="M-12,18 Q0,12 12,18 Q0,24 -12,18" fill="none" stroke="#F86205" strokeWidth={1.8} opacity={0.8}/>
              <path d="M-12,32 Q0,26 12,32 Q0,38 -12,32" fill="none" stroke="#F86205" strokeWidth={1.8} opacity={0.5}/>
              <circle cx={0} cy={25} r={3} fill="#F86205"/>
            </g>
            <g className="ptv-node-element" transform="translate(730,90)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvOrangeGrad)" strokeWidth={2}/>
              <line x1={-10} y1={14} x2={-10} y2={36} stroke="#F86205" strokeWidth={1.8} opacity={0.6}/>
              <line x1={0} y1={14} x2={0} y2={36} stroke="#F86205" strokeWidth={1.8} opacity={0.8}/>
              <line x1={10} y1={14} x2={10} y2={36} stroke="#F86205" strokeWidth={1.8} opacity={0.6}/>
              <path d="M-14,25 L14,25" stroke="#F86205" strokeWidth={1.5} opacity={0.4}/>
            </g>
            <line x1={298} y1={115} x2={472} y2={115} stroke="#F86205" strokeWidth={0.8} opacity={0.12} strokeDasharray="4,4"/>
            <line x1={528} y1={115} x2={702} y2={115} stroke="#F86205" strokeWidth={0.8} opacity={0.12} strokeDasharray="4,4"/>
          </g>

          {/* Cross-layer connectors 1→2 */}
          <g opacity={0.12}>
            <path d="M270,140 C270,170 270,190 270,205" stroke="#F86205" strokeWidth={1} fill="none" className="ptv-connector-line"/>
            <path d="M500,140 C500,170 500,190 500,205" stroke="#F86205" strokeWidth={1} fill="none" className="ptv-connector-line"/>
            <path d="M730,140 C730,170 730,190 730,205" stroke="#F86205" strokeWidth={1} fill="none" className="ptv-connector-line"/>
            <path d="M300,140 C380,175 420,185 470,205" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M700,140 C620,175 580,185 530,205" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
          </g>

          {/* Layer 2: Equip the Teams */}
          <g className="ptv-layer-group">
            <rect x={120} y={200} width={760} height={110} rx={4} fill="#F86205" opacity={0.035} stroke="#F86205" strokeWidth={0.5} strokeOpacity={0.12}/>
            <rect x={120} y={200} width={4} height={110} rx={2} fill="#F86205" opacity={0.7}/>
            <g className="ptv-node-element" transform="translate(270,230)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvDimOrange)" strokeWidth={1.8}/>
              <circle cx={0} cy={25} r={14} fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.5}/>
              <circle cx={0} cy={25} r={6} fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.7}/>
              <circle cx={0} cy={25} r={2} fill="#F86205" opacity={0.9}/>
            </g>
            <g className="ptv-node-element" transform="translate(500,230)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvDimOrange)" strokeWidth={1.8}/>
              <circle cx={-8} cy={18} r={4} fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.7}/>
              <circle cx={8} cy={18} r={4} fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.7}/>
              <circle cx={0} cy={33} r={4} fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.5}/>
              <line x1={-4} y1={22} x2={-2} y2={29} stroke="#F86205" strokeWidth={1} opacity={0.3}/>
              <line x1={4} y1={22} x2={2} y2={29} stroke="#F86205" strokeWidth={1} opacity={0.3}/>
            </g>
            <g className="ptv-node-element" transform="translate(730,230)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="url(#ptvDimOrange)" strokeWidth={1.8}/>
              <path d="M-14,20 L-6,30 L2,16 L10,28 L14,22" fill="none" stroke="#F86205" strokeWidth={1.8} opacity={0.7}/>
              <line x1={-14} y1={36} x2={14} y2={36} stroke="#F86205" strokeWidth={1} opacity={0.3}/>
            </g>
            <line x1={298} y1={255} x2={472} y2={255} stroke="#F86205" strokeWidth={0.8} opacity={0.1} strokeDasharray="4,4"/>
            <line x1={528} y1={255} x2={702} y2={255} stroke="#F86205" strokeWidth={0.8} opacity={0.1} strokeDasharray="4,4"/>
          </g>

          {/* Cross-layer connectors 2→3 */}
          <g opacity={0.1}>
            <path d="M270,285 C260,310 240,330 220,345" stroke="#F86205" strokeWidth={0.8} fill="none" className="ptv-connector-line"/>
            <path d="M270,285 C340,315 370,330 400,345" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M500,285 C470,315 440,330 410,345" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M500,285 C540,315 560,330 590,345" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M730,285 C740,310 760,330 780,345" stroke="#F86205" strokeWidth={0.8} fill="none" className="ptv-connector-line"/>
            <path d="M730,285 C660,315 630,330 600,345" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
          </g>

          {/* Layer 3: Enable the System */}
          <g className="ptv-layer-group">
            <rect x={120} y={340} width={760} height={110} rx={4} fill="#F86205" opacity={0.03} stroke="#F86205" strokeWidth={0.5} strokeOpacity={0.1}/>
            <rect x={120} y={340} width={4} height={110} rx={2} fill="#F86205" opacity={0.55}/>
            <g className="ptv-node-element" transform="translate(215,370)">
              <circle cx={0} cy={25} r={34} fill="url(#ptvNodeGlow)"/>
              <rect x={-20} y={5} width={40} height={40} rx={9} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.55}/>
              <rect x={-6} y={12} width={12} height={8} rx={2} fill="none" stroke="#F86205" strokeWidth={1.3} opacity={0.7}/>
              <rect x={-14} y={28} width={10} height={8} rx={2} fill="none" stroke="#F86205" strokeWidth={1.3} opacity={0.5}/>
              <rect x={4} y={28} width={10} height={8} rx={2} fill="none" stroke="#F86205" strokeWidth={1.3} opacity={0.5}/>
              <line x1={0} y1={20} x2={0} y2={24} stroke="#F86205" strokeWidth={1} opacity={0.4}/>
              <line x1={-9} y1={24} x2={9} y2={24} stroke="#F86205" strokeWidth={1} opacity={0.4}/>
              <line x1={-9} y1={24} x2={-9} y2={28} stroke="#F86205" strokeWidth={1} opacity={0.4}/>
              <line x1={9} y1={24} x2={9} y2={28} stroke="#F86205" strokeWidth={1} opacity={0.4}/>
            </g>
            <g className="ptv-node-element" transform="translate(405,370)">
              <circle cx={0} cy={25} r={34} fill="url(#ptvNodeGlow)"/>
              <rect x={-20} y={5} width={40} height={40} rx={9} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.55}/>
              <path d="M-10,18 Q-2,14 2,22 Q6,30 12,25" fill="none" stroke="#F86205" strokeWidth={1.8} opacity={0.65}/>
              <path d="M-10,30 Q-2,26 2,34 Q6,38 12,34" fill="none" stroke="#F86205" strokeWidth={1.3} opacity={0.35}/>
              <circle cx={-10} cy={18} r={2} fill="#F86205" opacity={0.5}/>
              <circle cx={12} cy={25} r={2} fill="#F86205" opacity={0.5}/>
            </g>
            <g className="ptv-node-element" transform="translate(595,370)">
              <circle cx={0} cy={25} r={34} fill="url(#ptvNodeGlow)"/>
              <rect x={-20} y={5} width={40} height={40} rx={9} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.55}/>
              <circle cx={-8} cy={16} r={3.5} fill="#F86205" opacity={0.5}/>
              <circle cx={10} cy={20} r={3.5} fill="#F86205" opacity={0.4}/>
              <circle cx={-4} cy={34} r={3.5} fill="#F86205" opacity={0.4}/>
              <circle cx={8} cy={34} r={3.5} fill="#F86205" opacity={0.3}/>
              <line x1={-6} y1={19} x2={7} y2={21} stroke="#F86205" strokeWidth={0.8} opacity={0.35}/>
              <line x1={-6} y1={19} x2={-3} y2={31} stroke="#F86205" strokeWidth={0.8} opacity={0.35}/>
              <line x1={8} y1={23} x2={7} y2={31} stroke="#F86205" strokeWidth={0.8} opacity={0.35}/>
              <line x1={-1} y1={34} x2={5} y2={34} stroke="#F86205" strokeWidth={0.8} opacity={0.25}/>
            </g>
            <g className="ptv-node-element" transform="translate(785,370)">
              <circle cx={0} cy={25} r={34} fill="url(#ptvNodeGlow)"/>
              <rect x={-20} y={5} width={40} height={40} rx={9} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.55}/>
              <path d="M-14,25 L-6,25 L-3,14 L3,36 L6,25 L14,25" fill="none" stroke="#F86205" strokeWidth={1.8} opacity={0.6}/>
            </g>
            <line x1={243} y1={395} x2={377} y2={395} stroke="#F86205" strokeWidth={0.6} opacity={0.08} strokeDasharray="4,4"/>
            <line x1={433} y1={395} x2={567} y2={395} stroke="#F86205" strokeWidth={0.6} opacity={0.08} strokeDasharray="4,4"/>
            <line x1={623} y1={395} x2={757} y2={395} stroke="#F86205" strokeWidth={0.6} opacity={0.08} strokeDasharray="4,4"/>
          </g>

          {/* Cross-layer connectors 3→4 */}
          <g opacity={0.1}>
            <path d="M215,425 C230,450 250,465 270,485" stroke="#F86205" strokeWidth={0.8} fill="none" className="ptv-connector-line"/>
            <path d="M405,425 C430,450 460,465 490,485" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M595,425 C580,450 540,465 510,485" stroke="#F86205" strokeWidth={0.6} fill="none" className="ptv-connector-line"/>
            <path d="M785,425 C770,450 750,465 730,485" stroke="#F86205" strokeWidth={0.8} fill="none" className="ptv-connector-line"/>
          </g>

          {/* Layer 4: Sustain and Evolve */}
          <g className="ptv-layer-group">
            <rect x={120} y={480} width={760} height={110} rx={4} fill="#F86205" opacity={0.025} stroke="#F86205" strokeWidth={0.5} strokeOpacity={0.08}/>
            <rect x={120} y={480} width={4} height={110} rx={2} fill="#F86205" opacity={0.4}/>
            <g className="ptv-node-element" transform="translate(270,510)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.45}/>
              <path d="M-8,16 A12,12 0 1,1 -12,28" fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.55}/>
              <polygon points="-14,25 -8,28 -10,22" fill="#F86205" opacity={0.55}/>
              <circle cx={4} cy={24} r={3} fill="#F86205" opacity={0.35}/>
            </g>
            <g className="ptv-node-element" transform="translate(500,510)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.45}/>
              <rect x={-12} y={30} width={24} height={4} rx={1} fill="#F86205" opacity={0.25}/>
              <rect x={-9} y={24} width={18} height={4} rx={1} fill="#F86205" opacity={0.35}/>
              <rect x={-6} y={18} width={12} height={4} rx={1} fill="#F86205" opacity={0.5}/>
              <polygon points="0,10 4,16 -4,16" fill="#F86205" opacity={0.6}/>
            </g>
            <g className="ptv-node-element" transform="translate(730,510)">
              <circle cx={0} cy={25} r={38} fill="url(#ptvNodeGlow)"/>
              <rect x={-22} y={3} width={44} height={44} rx={10} fill="none" stroke="#F86205" strokeWidth={1.5} strokeOpacity={0.45}/>
              <polygon points="0,12 14,25 0,38 -14,25" fill="none" stroke="#F86205" strokeWidth={1.5} opacity={0.6}/>
              <polygon points="0,18 7,25 0,32 -7,25" fill="#F86205" opacity={0.25}/>
              <circle cx={0} cy={25} r={2.5} fill="#F86205" opacity={0.7}/>
            </g>
            <line x1={298} y1={535} x2={472} y2={535} stroke="#F86205" strokeWidth={0.6} opacity={0.08} strokeDasharray="4,4"/>
            <line x1={528} y1={535} x2={702} y2={535} stroke="#F86205" strokeWidth={0.6} opacity={0.08} strokeDasharray="4,4"/>
          </g>

          {/* Value flow feedback */}
          <path d="M870,560 C890,400 890,250 870,100" stroke="#F86205" strokeWidth={1} opacity={0.06} fill="none" strokeDasharray="6,6" className="ptv-connector-line"/>
          <polygon points="870,100 866,112 874,112" fill="#F86205" opacity={0.08}/>

          {/* Floating particles */}
          <g>
            <circle r={2.5} fill="#F86205" opacity={0}>
              <animateMotion dur="7s" repeatCount="indefinite" path="M500,80 C480,200 520,350 500,580" begin="0s"/>
              <animate attributeName="opacity" values="0;0.7;0.7;0" dur="7s" repeatCount="indefinite" begin="0s"/>
            </circle>
            <circle r={2} fill="#ff8a3d" opacity={0}>
              <animateMotion dur="8s" repeatCount="indefinite" path="M500,80 C530,180 470,380 500,580" begin="2.5s"/>
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="8s" repeatCount="indefinite" begin="2.5s"/>
            </circle>
            <circle r={1.5} fill="#F86205" opacity={0}>
              <animateMotion dur="9s" repeatCount="indefinite" path="M500,80 C460,240 540,420 500,580" begin="5s"/>
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="9s" repeatCount="indefinite" begin="5s"/>
            </circle>
          </g>

          {/* Corner marks */}
          <g opacity={0.12}>
            <path d="M130,50 L130,42 L138,42" fill="none" stroke="#F86205" strokeWidth={1.5}/>
            <path d="M870,50 L870,42 L862,42" fill="none" stroke="#F86205" strokeWidth={1.5}/>
            <path d="M130,600 L130,608 L138,608" fill="none" stroke="#F86205" strokeWidth={1.5}/>
            <path d="M870,600 L870,608 L862,608" fill="none" stroke="#F86205" strokeWidth={1.5}/>
          </g>
        </svg>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { NINE_FUNCTIONS } from '../data/contentData';
import { AlertTriangle, CheckCircle2, RefreshCw, Info, ArrowRight } from 'lucide-react';

export default function LivingSystemCanvas({ onSelectFunction }) {
  const [systemState, setSystemState] = useState('synchronized'); // 'fragmented' | 'synchronized'
  const [activeNode, setActiveNode] = useState(NINE_FUNCTIONS[8]); // Default to 9th Guardian

  const isFragmented = systemState === 'fragmented';

  // 8 outer nodes distributed evenly on a circle of radius R
  // Center is (250, 250)
  const centerX = 250;
  const centerY = 250;
  const radius = 160;

  // Outer nodes: indices 0 to 7. Center node is index 8 (Function 09 Guardian of Well-Being)
  const outerNodes = NINE_FUNCTIONS.slice(0, 8).map((fn, index) => {
    const angle = (index * (360 / 8) - 90) * (Math.PI / 180);
    // In fragmented state, slightly displace nodes 1, 3, 6 to simulate misalignment
    let offsetX = 0;
    let offsetY = 0;
    let isFrictionNode = false;

    if (isFragmented) {
      if (index === 1) { // F02 Relational
        offsetX = 18;
        offsetY = -12;
        isFrictionNode = true;
      } else if (index === 3) { // F04 Execution
        offsetX = -16;
        offsetY = 16;
        isFrictionNode = true;
      } else if (index === 6) { // F07 Adaptability
        offsetX = 14;
        offsetY = 14;
        isFrictionNode = true;
      }
    }

    const x = centerX + radius * Math.cos(angle) + offsetX;
    const y = centerY + radius * Math.sin(angle) + offsetY;

    return {
      ...fn,
      x,
      y,
      index,
      isFrictionNode
    };
  });

  const centerNode = {
    ...NINE_FUNCTIONS[8],
    x: centerX,
    y: centerY,
    isGuardian: true
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-xl border border-slate-800 p-4 sm:p-8 overflow-hidden relative shadow-2xl">
      {/* Decorative hairline grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest">[ COMPONENT 02 // LIVING SYSTEM ENGINE ]</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-mono">Interactive Vector Node Physics</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            {isFragmented ? 'Diagnostic State: Fragmented System' : 'Diagnostic State: Synchronized System'}
          </h4>
        </div>

        {/* State Toggle Buttons */}
        <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setSystemState('fragmented')}
            className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              isFragmented
                ? 'bg-red-950/80 text-red-300 border border-red-500/50 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>Fragmented System</span>
          </button>
          <button
            onClick={() => setSystemState('synchronized')}
            className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              !isFragmented
                ? 'bg-blue-900/60 text-blue-300 border border-blue-500/50 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Synchronized System</span>
          </button>
        </div>
      </div>

      {/* Diagnostic Callout Badges */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 text-xs font-mono">
        {isFragmented ? (
          <>
            <div className="bg-red-950/40 border border-red-900/60 text-red-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Operational Inefficiencies</span>
            </div>
            <div className="bg-red-950/40 border border-red-900/60 text-red-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Functional Misalignment</span>
            </div>
            <div className="bg-amber-950/40 border border-amber-900/60 text-amber-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Execution Gaps</span>
            </div>
          </>
        ) : (
          <>
            <div className="bg-emerald-950/40 border border-emerald-900/60 text-emerald-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Functional Integrity Restored</span>
            </div>
            <div className="bg-blue-950/40 border border-blue-900/60 text-blue-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Aligned Talent-to-Seat</span>
            </div>
            <div className="bg-amber-950/40 border border-amber-900/60 text-amber-300 px-3 py-2 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Profitable Coordinated Execution</span>
            </div>
          </>
        )}
      </div>

      {/* Interactive Canvas Grid (SVG + Interactive Node Details Panel) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-7 flex justify-center items-center py-4">
          <div className="w-full max-w-[460px] aspect-square relative select-none">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                <radialGradient id="guardianGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D97706" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="frictionGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Orbit Ring */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke={isFragmented ? "#334155" : "#1e293b"}
                strokeWidth={isFragmented ? "1" : "1.5"}
                strokeDasharray={isFragmented ? "4 4" : "none"}
                className="transition-all duration-700"
              />

              {/* Center Halo for Guardian of Well-Being */}
              <circle
                cx={centerX}
                cy={centerY}
                r="64"
                fill="url(#guardianGlow)"
                className="animate-pulse"
              />

              {/* Connecting Vector Lines: Outer nodes to Center */}
              {outerNodes.map((node) => {
                const isSelected = activeNode.code === node.code;
                const isFriction = isFragmented && node.isFrictionNode;

                let strokeColor = "#334155";
                let strokeWidth = "1.5";
                let strokeDash = "none";

                if (isFragmented) {
                  if (isFriction) {
                    strokeColor = "#DC2626";
                    strokeWidth = "2";
                    strokeDash = "6 4";
                  } else {
                    strokeColor = "#475569";
                    strokeDash = "3 3";
                  }
                } else {
                  strokeColor = isSelected ? "#3B82F6" : "#2563EB";
                  strokeWidth = isSelected ? "2.5" : "1.5";
                }

                return (
                  <g key={`line-center-${node.code}`}>
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={node.x}
                      y2={node.y}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDash}
                      className="transition-all duration-500"
                    />
                  </g>
                );
              })}

              {/* Outer Perimeter Lattice Connections (Node to Node) */}
              {outerNodes.map((node, i) => {
                const nextNode = outerNodes[(i + 1) % outerNodes.length];
                const hasFriction = isFragmented && (node.isFrictionNode || nextNode.isFrictionNode);

                return (
                  <line
                    key={`line-perimeter-${i}`}
                    x1={node.x}
                    y1={node.y}
                    x2={nextNode.x}
                    y2={nextNode.y}
                    stroke={
                      isFragmented
                        ? hasFriction ? "#EF4444" : "#1E293B"
                        : "#1E3A8A"
                    }
                    strokeWidth={hasFriction ? "1.5" : "1"}
                    strokeDasharray={isFragmented ? "4 4" : "none"}
                    strokeOpacity={isFragmented ? (hasFriction ? 0.9 : 0.3) : 0.6}
                    className="transition-all duration-500"
                  />
                );
              })}

              {/* Outer Nodes rendering */}
              {outerNodes.map((node) => {
                const isSelected = activeNode.code === node.code;
                const isFriction = isFragmented && node.isFrictionNode;

                return (
                  <g
                    key={node.code}
                    className="cursor-pointer group"
                    onClick={() => {
                      setActiveNode(node);
                      if (onSelectFunction) onSelectFunction(node);
                    }}
                  >
                    {/* Pulsing friction aura if fragmented */}
                    {isFriction && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="24"
                        fill="url(#frictionGlow)"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Circle Ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? "22" : "18"}
                      fill={
                        isFriction
                          ? "#450A0A"
                          : isSelected
                          ? "#1E3A8A"
                          : "#0F172A"
                      }
                      stroke={
                        isFriction
                          ? "#DC2626"
                          : isSelected
                          ? "#60A5FA"
                          : "#334155"
                      }
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      className="transition-all duration-300 group-hover:stroke-blue-400"
                    />

                    {/* Node Text Label (Code) */}
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fill={isFriction ? "#FCA5A5" : isSelected ? "#FFFFFF" : "#94A3B8"}
                      fontSize="10"
                      fontFamily="'JetBrains Mono', monospace"
                      fontWeight="600"
                      className="pointer-events-none"
                    >
                      {node.code}
                    </text>

                    {/* Outer Title tooltip text on perimeter */}
                    <text
                      x={node.x}
                      y={node.y > centerY ? node.y + 30 : node.y - 24}
                      textAnchor="middle"
                      fill={isSelected ? "#93C5FD" : "#64748B"}
                      fontSize="10"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight="500"
                      className="pointer-events-none hidden sm:block"
                    >
                      {node.title.split('&')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Central 9th Node: Guardian of Well-Being */}
              <g
                className="cursor-pointer group"
                onClick={() => {
                  setActiveNode(centerNode);
                  if (onSelectFunction) onSelectFunction(centerNode);
                }}
              >
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={activeNode.isGuardian ? "34" : "30"}
                  fill="#78350F"
                  stroke="#F59E0B"
                  strokeWidth={activeNode.isGuardian ? "3" : "2"}
                  className="transition-all duration-300 group-hover:stroke-amber-300 shadow-lg"
                />

                <circle
                  cx={centerX}
                  cy={centerY}
                  r="24"
                  fill="#0B0F17"
                />

                <text
                  x={centerX}
                  y={centerY - 2}
                  textAnchor="middle"
                  fill="#F59E0B"
                  fontSize="13"
                  fontFamily="'JetBrains Mono', monospace"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  F09
                </text>
                <text
                  x={centerX}
                  y={centerY + 12}
                  textAnchor="middle"
                  fill="#D97706"
                  fontSize="7"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="1"
                  className="pointer-events-none uppercase"
                >
                  GUARDIAN
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Selected Node Details Side Panel */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-6 backdrop-blur flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                {activeNode.isGuardian ? '[ 9TH INTELLIGENCE ANCHOR ]' : `[ FUNCTION ${activeNode.number} ]`}
              </span>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                activeNode.isGuardian
                  ? 'bg-amber-950 text-amber-300 border-amber-800'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {activeNode.code}
              </span>
            </div>

            <h5 className="text-xl font-bold text-white mt-3">{activeNode.title}</h5>
            <p className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wide">{activeNode.role}</p>

            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              {activeNode.desc}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
              <div className="text-xs">
                <span className="text-slate-400 font-mono block mb-1">BUSINESS SYSTEM APPLICATION:</span>
                <span className="text-slate-200">{activeNode.businessContext}</span>
              </div>
              
              {isFragmented && activeNode.isFrictionNode && (
                <div className="mt-2 p-2.5 bg-red-950/60 border border-red-800 rounded text-xs text-red-200 font-mono">
                  <span className="font-semibold block text-red-300">DIAGNOSTIC FRICTION DETECTED:</span>
                  This function is currently misaligned with the central governance node, causing resource drag and slowed velocity.
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Click any node to inspect</span>
            <button
              onClick={() => {
                const nextIndex = (NINE_FUNCTIONS.findIndex(f => f.code === activeNode.code) + 1) % NINE_FUNCTIONS.length;
                setActiveNode(NINE_FUNCTIONS[nextIndex]);
              }}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>Next Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

/**
 * DiagramRenderer2025 Component
 * Renders SVG diagrams for JEE Main 2025 (22 Jan Shift 1) questions.
 */
export default function DiagramRenderer2025({ type }) {
  switch (type) {
    case 'parallel_plates':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Electron Trajectory Between Deflecting Plates:</p>
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="340" height="155" viewBox="0 0 340 155" className="overflow-visible font-sans">
              {/* Top Plate (+) */}
              <rect x="50" y="25" width="180" height="12" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5" rx="2" />
              <text x="140" y="19" fill="#60a5fa" fontSize="11" fontWeight="extrabold" textAnchor="middle">+ + + + + + + + + (Top Positive Plate)</text>
              
              {/* Bottom Plate (-) */}
              <rect x="50" y="110" width="180" height="12" fill="#f43f5e" stroke="#fb7185" strokeWidth="1.5" rx="2" />
              <text x="140" y="135" fill="#fb7185" fontSize="11" fontWeight="extrabold" textAnchor="middle">- - - - - - - - - (Bottom Negative Plate)</text>
              
              {/* Plate Length L = 10 cm dimension line */}
              <text x="140" y="148" fill="#94a3b8" fontSize="9.5" fontWeight="bold" textAnchor="middle">Plate Length L = 10 cm</text>

              {/* Electric Field E pointing downwards */}
              <line x1="140" y1="40" x2="140" y2="105" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3" />
              <polygon points="140,105 136,97 144,97" fill="#a855f7" />
              <text x="152" y="75" fill="#c084fc" fontSize="11" fontWeight="bold">E = 9.1 V/cm</text>
              
              {/* Electron Entry */}
              <circle cx="20" cy="72" r="5" fill="#34d399" />
              <text x="10" y="76" fill="#34d399" fontSize="11" fontWeight="bold">e⁻</text>
              <text x="20" y="58" fill="#38bdf8" fontSize="9.5" fontWeight="bold">v_x = 10⁶ m/s</text>
              
              {/* Electron Parabolic Trajectory Curve */}
              <path d="M 20,72 L 50,72 Q 140,72 230,35" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
              <polygon points="230,35 221,37 224,44" fill="#fbbf24" />
              <text x="238" y="38" fill="#fbbf24" fontSize="11" fontWeight="bold">Exit Beam (v_y = ?)</text>
            </svg>
          </div>
        </div>
      );

    case 'cut_disc':
      return (
        <div className="my-4 flex justify-center">
          <svg width="240" height="240" viewBox="0 0 240 240" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <circle cx="120" cy="120" r="95" fill="#475569" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="167.5" cy="120" r="47.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
            <circle cx="120" cy="120" r="4" fill="#0f172a" />
            <text x="120" y="142" fill="#0f172a" fontSize="14" fontWeight="bold" textAnchor="middle">O</text>
            <line x1="25" y1="120" x2="120" y2="120" stroke="#f8fafc" strokeWidth="2.5" strokeDasharray="5 4" />
            <text x="70" y="110" fill="#f8fafc" fontSize="18" fontWeight="extrabold" textAnchor="middle">R</text>
            <line x1="120" y1="120" x2="167.5" y2="120" stroke="#0f172a" strokeWidth="2.5" strokeDasharray="4 3" />
            <text x="144" y="110" fill="#0f172a" fontSize="15" fontWeight="extrabold" textAnchor="middle">R/2</text>
            <line x1="120" y1="20" x2="120" y2="220" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>
      );

    case 'vertical_circle':
      return (
        <div className="my-4 flex justify-center">
          <svg width="240" height="260" viewBox="0 0 240 260" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <line x1="120" y1="40" x2="120" y2="200" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="120" cy="120" r="80" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="120" cy="120" r="4" fill="#f8fafc" />
            <text x="135" y="125" fill="#f8fafc" fontSize="16" fontWeight="bold">O</text>
            <circle cx="120" cy="200" r="7" fill="#818cf8" />
            <text x="120" y="224" fill="#818cf8" fontSize="15" fontWeight="bold" textAnchor="middle">A (v₀)</text>
            <line x1="120" y1="200" x2="150" y2="200" stroke="#818cf8" strokeWidth="2" />
            <polygon points="150,196 157,200 150,204" fill="#818cf8" />
            <circle cx="120" cy="40" r="7" fill="#f43f5e" />
            <text x="120" y="28" fill="#f43f5e" fontSize="15" fontWeight="bold" textAnchor="middle">D</text>
            <line x1="120" y1="120" x2="189.28" y2="80" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="189.28" cy="80" r="6" fill="#fbbf24" />
            <text x="204" y="85" fill="#fbbf24" fontSize="15" fontWeight="bold">C</text>
            <path d="M 120,95 A 25,25 0 0,1 132.5,98.3" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="138" y="94" fill="#fbbf24" fontSize="12" fontWeight="semibold">60°</text>
            <line x1="120" y1="120" x2="189.28" y2="160" stroke="#34d399" strokeWidth="2" />
            <circle cx="189.28" cy="160" r="6" fill="#34d399" />
            <text x="204" y="165" fill="#34d399" fontSize="15" fontWeight="bold">B</text>
            <path d="M 120,145 A 25,25 0 0,0 132.5,141.7" fill="none" stroke="#34d399" strokeWidth="1.5" />
            <text x="138" y="152" fill="#34d399" fontSize="12" fontWeight="semibold">60°</text>
          </svg>
        </div>
      );

    case 'silvered_lens':
      return (
        <div className="my-4 flex justify-center">
          <svg width="260" height="180" viewBox="0 0 260 180" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            {/* Principal Axis */}
            <line x1="20" y1="90" x2="240" y2="90" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Convex Lens */}
            <path d="M 120,30 Q 150,90 120,150 Q 90,90 120,30 Z" fill="#818cf8" opacity="0.3" stroke="#818cf8" strokeWidth="2.5" />
            {/* Silvered Back Surface */}
            <path d="M 120,30 Q 150,90 120,150" fill="none" stroke="#f8fafc" strokeWidth="3" />
            {/* Mirror Silvering Shading Lines */}
            <line x1="125" y1="40" x2="133" y2="35" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="130" y1="60" x2="138" y2="55" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="135" y1="90" x2="143" y2="85" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="130" y1="120" x2="138" y2="115" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="125" y1="140" x2="133" y2="135" stroke="#f8fafc" strokeWidth="1.5" />
            {/* Object Point O */}
            <circle cx="50" cy="90" r="4" fill="#fbbf24" />
            <text x="45" y="110" fill="#fbbf24" fontSize="13" fontWeight="bold">Object (u = 2F)</text>
            <text x="150" y="130" fill="#f8fafc" fontSize="12" fontWeight="bold">Polished/Silvered Side</text>
          </svg>
        </div>
      );

    case 'diode_circuits':
      return (
        <div className="my-4 flex flex-col items-center space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Diode Circuit Configurations:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl">
            {/* Circuit (A) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center space-x-3">
              <span className="font-extrabold text-amber-400 text-sm">(A)</span>
              <svg width="220" height="55" viewBox="0 0 220 55" className="overflow-visible">
                <line x1="20" y1="30" x2="75" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <polygon points="75,14 75,46 115,30" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                <line x1="115" y1="14" x2="115" y2="46" stroke="#0284c7" strokeWidth="3" />
                <line x1="115" y1="30" x2="180" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="4" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="180" cy="30" r="4" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="20" y="13" fill="#38bdf8" fontSize="13" fontWeight="extrabold" textAnchor="middle">-10V</text>
                <text x="180" y="13" fill="#38bdf8" fontSize="13" fontWeight="extrabold" textAnchor="middle">0V</text>
              </svg>
            </div>

            {/* Circuit (B) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex items-center space-x-3">
              <span className="font-extrabold text-emerald-400 text-sm">(B)</span>
              <svg width="220" height="55" viewBox="0 0 220 55" className="overflow-visible">
                <line x1="20" y1="30" x2="75" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <polygon points="75,14 75,46 115,30" fill="#34d399" stroke="#059669" strokeWidth="2" />
                <line x1="115" y1="14" x2="115" y2="46" stroke="#059669" strokeWidth="3" />
                <line x1="115" y1="30" x2="180" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <circle cx="180" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <text x="20" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">-10V</text>
                <text x="180" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">-15V</text>
              </svg>
            </div>

            {/* Circuit (C) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex items-center space-x-3">
              <span className="font-extrabold text-emerald-400 text-sm">(C)</span>
              <svg width="220" height="55" viewBox="0 0 220 55" className="overflow-visible">
                <line x1="20" y1="30" x2="75" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <polygon points="75,14 75,46 115,30" fill="#34d399" stroke="#059669" strokeWidth="2" />
                <line x1="115" y1="14" x2="115" y2="46" stroke="#059669" strokeWidth="3" />
                <line x1="115" y1="30" x2="180" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <circle cx="180" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <text x="20" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">4V</text>
                <text x="180" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">2V</text>
              </svg>
            </div>

            {/* Circuit (D) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center space-x-3">
              <span className="font-extrabold text-amber-400 text-sm">(D)</span>
              <svg width="220" height="55" viewBox="0 0 220 55" className="overflow-visible">
                <line x1="20" y1="30" x2="75" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <polygon points="75,14 75,46 115,30" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                <line x1="115" y1="14" x2="115" y2="46" stroke="#0284c7" strokeWidth="3" />
                <line x1="115" y1="30" x2="180" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="4" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="180" cy="30" r="4" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="20" y="13" fill="#38bdf8" fontSize="13" fontWeight="extrabold" textAnchor="middle">-5V</text>
                <text x="180" y="13" fill="#38bdf8" fontSize="13" fontWeight="extrabold" textAnchor="middle">-10V</text>
              </svg>
            </div>

            {/* Circuit (E) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex items-center space-x-3 sm:col-span-2 justify-center">
              <span className="font-extrabold text-emerald-400 text-sm">(E)</span>
              <svg width="220" height="55" viewBox="0 0 220 55" className="overflow-visible">
                <line x1="20" y1="30" x2="75" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <polygon points="75,14 75,46 115,30" fill="#34d399" stroke="#059669" strokeWidth="2" />
                <line x1="115" y1="14" x2="115" y2="46" stroke="#059669" strokeWidth="3" />
                <line x1="115" y1="30" x2="180" y2="30" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <circle cx="180" cy="30" r="4" fill="#f8fafc" stroke="#34d399" strokeWidth="1.5" />
                <text x="20" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">2V</text>
                <text x="180" y="13" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">0V</text>
              </svg>
            </div>
          </div>
        </div>
      );

    case 'potentiometer':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Potentiometer Circuit Diagram (Q34):</p>
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="320" height="170" viewBox="0 0 320 170" className="overflow-visible font-sans">
              {/* Top Battery (0.9V) */}
              <line x1="40" y1="30" x2="145" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="160" y1="30" x2="270" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              {/* Long positive plate */}
              <line x1="145" y1="18" x2="145" y2="42" stroke="#f8fafc" strokeWidth="3" />
              {/* Short negative plate */}
              <line x1="153" y1="23" x2="153" y2="37" stroke="#64748b" strokeWidth="2" />
              <text x="149" y="14" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">0.9V</text>

              {/* Vertical side wires down to middle potentiometer wire */}
              <line x1="40" y1="30" x2="40" y2="75" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="270" y1="30" x2="270" y2="75" stroke="#cbd5e1" strokeWidth="2" />

              {/* Middle Potentiometer Wire Rp = 1Ω with Resistor Zigzag */}
              <line x1="40" y1="75" x2="100" y2="75" stroke="#cbd5e1" strokeWidth="2" />
              {/* Middle Resistor Zigzag Rp = 1Ω */}
              <path d="M 100,75 L 108,65 L 122,85 L 136,65 L 150,85 L 164,65 L 178,85 L 192,65 L 200,75" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="200" y1="75" x2="270" y2="75" stroke="#cbd5e1" strokeWidth="2" />
              <text x="150" y="55" fill="#38bdf8" fontSize="14" fontWeight="extrabold" textAnchor="middle">Rₚ = 1Ω</text>

              {/* Bottom External Resistor Re = 2Ω Loop */}
              <line x1="40" y1="75" x2="40" y2="135" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="40" y1="135" x2="70" y2="135" stroke="#cbd5e1" strokeWidth="2" />
              {/* Re = 2Ω Resistor Zigzag */}
              <path d="M 70,135 L 78,125 L 92,145 L 106,125 L 120,145 L 134,125 L 148,145 L 162,125 L 170,135" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
              <line x1="170" y1="135" x2="175" y2="135" stroke="#cbd5e1" strokeWidth="2" />
              <text x="120" y="160" fill="#fbbf24" fontSize="13" fontWeight="extrabold" textAnchor="middle">Rₑ = 2Ω</text>

              {/* Sliding Jockey Contact (Upwards Arrow pointing to middle of Rp) */}
              <line x1="175" y1="135" x2="175" y2="92" stroke="#fbbf24" strokeWidth="2.5" />
              <polygon points="175,77 169,92 181,92" fill="#fbbf24" />
            </svg>
          </div>
        </div>
      );

    case 'cube_charge':
      return (
        <div className="my-4 flex justify-center">
          <svg width="250" height="220" viewBox="0 0 250 220" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <line x1="50" y1="70" x2="150" y2="70" stroke="#94a3b8" strokeWidth="2" />
            <line x1="150" y1="70" x2="150" y2="170" stroke="#f43f5e" strokeWidth="4" />
            <line x1="150" y1="170" x2="50" y2="170" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="170" x2="50" y2="70" stroke="#94a3b8" strokeWidth="2" />
            <line x1="90" y1="30" x2="190" y2="30" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="190" y1="30" x2="190" y2="130" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="190" y1="130" x2="90" y2="130" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="90" y1="130" x2="90" y2="30" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50" y1="70" x2="90" y2="30" stroke="#94a3b8" strokeWidth="2" />
            <line x1="150" y1="70" x2="190" y2="30" stroke="#94a3b8" strokeWidth="2" />
            <line x1="150" y1="170" x2="190" y2="130" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="170" x2="90" y2="130" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="150" cy="120" r="4" fill="#f43f5e" />
            <text x="160" y="125" fill="#f43f5e" fontSize="13" fontWeight="extrabold">Line Charge λ (a/2)</text>
            <text x="35" y="65" fill="#f8fafc" fontSize="14" fontWeight="bold">A</text>
            <text x="155" y="65" fill="#f43f5e" fontSize="14" fontWeight="bold">B</text>
            <text x="155" y="185" fill="#f43f5e" fontSize="14" fontWeight="bold">C</text>
            <text x="35" y="185" fill="#f8fafc" fontSize="14" fontWeight="bold">G</text>
            <text x="80" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold">D</text>
            <text x="195" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold">E</text>
            <text x="195" y="145" fill="#94a3b8" fontSize="13" fontWeight="bold">H</text>
            <text x="80" y="145" fill="#94a3b8" fontSize="13" fontWeight="bold">F</text>
          </svg>
        </div>
      );

    case 'photoelectric_curves':
      return (
        <div className="my-4 flex justify-center">
          <svg width="280" height="190" viewBox="0 0 280 190" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            {/* Axes */}
            <line x1="45" y1="150" x2="260" y2="150" stroke="#94a3b8" strokeWidth="2" />
            <line x1="45" y1="20" x2="45" y2="150" stroke="#94a3b8" strokeWidth="2" />
            <text x="265" y="155" fill="#94a3b8" fontSize="13" fontWeight="bold">ν</text>
            <text x="20" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold">V₀ (eV)</text>

            {/* Cs Curve (Threshold 1.9 eV) */}
            <line x1="90" y1="150" x2="230" y2="30" stroke="#34d399" strokeWidth="2.5" />
            <text x="180" y="55" fill="#34d399" fontSize="12" fontWeight="extrabold">Cesium (Φ = 1.9 eV)</text>

            {/* Li Curve (Threshold 2.5 eV) */}
            <line x1="130" y1="150" x2="260" y2="40" stroke="#f43f5e" strokeWidth="2.5" />
            <text x="205" y="95" fill="#f43f5e" fontSize="12" fontWeight="extrabold">Lithium (Φ = 2.5 eV)</text>

            {/* Incident Light Line (550nm -> 2.25 eV) */}
            <line x1="115" y1="20" x2="115" y2="150" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="100" y="168" fill="#fbbf24" fontSize="11" fontWeight="bold">Incident 550nm (2.25 eV)</text>
          </svg>
        </div>
      );

    case 'lens_stack':
      return (
        <div className="my-4 flex justify-center">
          <svg width="280" height="220" viewBox="0 0 280 220" className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <rect x="50" y="20" width="180" height="180" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="140" y="15" fill="#94a3b8" fontSize="14" fontWeight="extrabold" textAnchor="middle">container</text>
            <line x1="50" y1="50" x2="230" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 4" />
            <path d="M 50,70 Q 140,110 230,70 L 230,150 Q 140,110 50,150 Z" fill="#818cf8" opacity="0.3" stroke="#818cf8" strokeWidth="2.5" />
            <line x1="90" y1="80" x2="90" y2="135" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="120" y1="90" x2="120" y2="125" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="160" y1="90" x2="160" y2="125" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="190" y1="80" x2="190" y2="135" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="140" y="45" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">water (μ = 4/3)</text>
            <text x="140" y="115" fill="#a5b4fc" fontSize="14" fontWeight="extrabold" textAnchor="middle">glass (μ = 3/2)</text>
            <text x="140" y="180" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">water (μ = 4/3)</text>
          </svg>
        </div>
      );

    case 'resistivity_curves':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resistivity (ρ) vs Temperature (T) Graphs (1, 2, 3, 4):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
            {/* Graph (1) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1.5">(1)</span>
              <svg width="210" height="110" viewBox="0 0 210 110" className="overflow-visible font-sans">
                <line x1="30" y1="15" x2="30" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="185" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <polygon points="185,85 179,82 179,88" fill="#cbd5e1" />
                <text x="12" y="50" fill="#cbd5e1" fontSize="10" fontWeight="bold">ρ (Ω cm)</text>
                <text x="185" y="100" fill="#cbd5e1" fontSize="10" fontWeight="bold">T(K)</text>
                <text x="22" y="96" fill="#94a3b8" fontSize="10">0</text>
                <path d="M 35,20 Q 55,75 160,82" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (2) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1.5">(2)</span>
              <svg width="210" height="110" viewBox="0 0 210 110" className="overflow-visible font-sans">
                <line x1="30" y1="15" x2="30" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="185" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <polygon points="185,85 179,82 179,88" fill="#cbd5e1" />
                <text x="12" y="50" fill="#cbd5e1" fontSize="10" fontWeight="bold">ρ (Ω cm)</text>
                <text x="185" y="100" fill="#cbd5e1" fontSize="10" fontWeight="bold">T(K)</text>
                <text x="22" y="96" fill="#94a3b8" fontSize="10">0</text>
                <line x1="30" y1="30" x2="160" y2="70" stroke="#3b82f6" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (3) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1.5">(3)</span>
              <svg width="210" height="110" viewBox="0 0 210 110" className="overflow-visible font-sans">
                <line x1="30" y1="15" x2="30" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="185" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <polygon points="185,85 179,82 179,88" fill="#cbd5e1" />
                <text x="12" y="50" fill="#cbd5e1" fontSize="10" fontWeight="bold">ρ (Ω cm)</text>
                <text x="185" y="100" fill="#cbd5e1" fontSize="10" fontWeight="bold">T(K)</text>
                <text x="22" y="96" fill="#94a3b8" fontSize="10">0</text>
                <path d="M 30,83 Q 110,83 140,20" fill="none" stroke="#eab308" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (4) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1.5">(4)</span>
              <svg width="210" height="110" viewBox="0 0 210 110" className="overflow-visible font-sans">
                <line x1="30" y1="15" x2="30" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="185" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <polygon points="185,85 179,82 179,88" fill="#cbd5e1" />
                <text x="12" y="50" fill="#cbd5e1" fontSize="10" fontWeight="bold">ρ (Ω cm)</text>
                <text x="185" y="100" fill="#cbd5e1" fontSize="10" fontWeight="bold">T(K)</text>
                <text x="22" y="96" fill="#94a3b8" fontSize="10">0</text>
                <line x1="30" y1="50" x2="160" y2="44" stroke="#34d399" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'thermal_conductors':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thermal Conductor Junction Diagram (Q49):</p>
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible font-sans">
              {/* Top Temperature Labels */}
              <text x="40" y="30" fill="#ef4444" fontSize="14" fontWeight="extrabold" textAnchor="middle">100°C</text>
              <text x="130" y="30" fill="#fbbf24" fontSize="14" fontWeight="extrabold" textAnchor="middle">θ°C</text>
              <text x="220" y="30" fill="#38bdf8" fontSize="14" fontWeight="extrabold" textAnchor="middle">0°C</text>

              {/* Conductor 1 (Top Left k1) */}
              <rect x="40" y="42" width="90" height="48" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <text x="52" y="66" fill="#f8fafc" fontSize="15" fontWeight="bold">1.</text>
              <text x="95" y="70" fill="#38bdf8" fontSize="17" fontWeight="bold">k₁</text>

              {/* Conductor 2 (Bottom Left k2) */}
              <rect x="40" y="90" width="90" height="48" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <text x="52" y="114" fill="#f8fafc" fontSize="15" fontWeight="bold">2.</text>
              <text x="95" y="118" fill="#34d399" fontSize="17" fontWeight="bold">k₂</text>

              {/* Conductor 3 (Right Spanning Block k3) */}
              <rect x="130" y="42" width="90" height="96" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <text x="142" y="66" fill="#f8fafc" fontSize="15" fontWeight="bold">3.</text>
              <text x="185" y="98" fill="#c084fc" fontSize="19" fontWeight="bold">k₃</text>

              {/* Junction Line Indicator */}
              <line x1="130" y1="36" x2="130" y2="142" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>
      );

    case 'fehling_compounds':
      return (
        <div className="my-4 flex flex-col items-center space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fehling's Test Compounds (Q57):</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            {/* (A) Benzaldehyde */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center shadow-md">
              <span className="font-bold text-amber-400 text-xs mb-1">(A)</span>
              <svg width="100" height="100" viewBox="0 0 100 100" className="overflow-visible font-sans">
                <polygon points="50,40 68,50 68,70 50,80 32,70 32,50" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="50" cy="60" r="10" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="50" y1="40" x2="50" y2="28" stroke="#cbd5e1" strokeWidth="2" />
                <text x="50" y="22" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">CHO</text>
              </svg>
            </div>

            {/* (B) Acetophenone */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center shadow-md">
              <span className="font-bold text-amber-400 text-xs mb-1">(B)</span>
              <svg width="100" height="110" viewBox="0 0 100 110" className="overflow-visible font-sans">
                <text x="50" y="16" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                <line x1="47" y1="20" x2="47" y2="34" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="53" y1="20" x2="53" y2="34" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="50" y1="34" x2="72" y2="44" stroke="#cbd5e1" strokeWidth="2" />
                <text x="75" y="48" fill="#f8fafc" fontSize="11" fontWeight="bold">CH₃</text>
                <line x1="50" y1="34" x2="50" y2="48" stroke="#cbd5e1" strokeWidth="2" />
                <polygon points="50,48 68,58 68,78 50,78 32,78 32,58" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="50" cy="68" r="10" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              </svg>
            </div>

            {/* (C) HOCH2 - CO - (CHOH)3 - CH2 - OH */}
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex flex-col items-center justify-center shadow-md">
              <span className="font-bold text-emerald-400 text-xs mb-1">(C)</span>
              <div className="text-[11px] font-mono text-emerald-300 font-bold text-center leading-relaxed py-2">
                HOCH₂ — CO — (CHOH)₃ — CH₂ — OH
              </div>
            </div>

            {/* (D) CH3 - C(=O) - H */}
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex flex-col items-center shadow-md">
              <span className="font-bold text-emerald-400 text-xs mb-1">(D)</span>
              <svg width="110" height="75" viewBox="0 0 110 75" className="overflow-visible font-sans">
                <text x="55" y="16" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                <line x1="52" y1="20" x2="52" y2="34" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="58" y1="20" x2="58" y2="34" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="55" y1="34" x2="25" y2="44" stroke="#cbd5e1" strokeWidth="2" />
                <text x="22" y="48" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="end">CH₃</text>
                <line x1="55" y1="34" x2="82" y2="44" stroke="#cbd5e1" strokeWidth="2" />
                <text x="85" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">H</text>
              </svg>
            </div>

            {/* (E) Benzaldehyde ring */}
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 bg-emerald-500/5 flex flex-col items-center sm:col-span-2 shadow-md">
              <span className="font-bold text-emerald-400 text-xs mb-1">(E)</span>
              <svg width="100" height="90" viewBox="0 0 100 90" className="overflow-visible font-sans">
                <polygon points="50,20 68,30 68,50 50,60 32,50 32,30" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="50" cy="40" r="10" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="50" y1="60" x2="50" y2="72" stroke="#cbd5e1" strokeWidth="2" />
                <text x="50" y="84" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">CHO</text>
              </svg>
            </div>
          </div>
        </div>
      );

    case 'ester_structure':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">2D Organic Chemical Bond Structure Diagram:</p>
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg overflow-x-auto w-full max-w-xl flex justify-center">
            <svg width="480" height="130" viewBox="0 0 480 130" className="overflow-visible font-mono">
              {/* C1: HOOC */}
              <text x="35" y="74" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="end">HOOC</text>
              <line x1="38" y1="70" x2="80" y2="70" stroke="#cbd5e1" strokeWidth="2" />
              <text x="20" y="52" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₁</text>

              {/* C2: CH with CH3 branch going down */}
              <text x="92" y="74" fill="#fbbf24" fontSize="13" fontWeight="bold">CH</text>
              <line x1="100" y1="78" x2="100" y2="96" stroke="#cbd5e1" strokeWidth="2" />
              <text x="100" y="112" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">CH₃</text>
              <text x="100" y="52" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₂</text>

              <line x1="112" y1="70" x2="155" y2="70" stroke="#cbd5e1" strokeWidth="2" />

              {/* C3: CH2 */}
              <text x="168" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold">CH₂</text>
              <text x="178" y="52" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₃</text>

              <line x1="198" y1="70" x2="240" y2="70" stroke="#cbd5e1" strokeWidth="2" />

              {/* C4: CH2 */}
              <text x="252" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold">CH₂</text>
              <text x="262" y="52" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₄</text>

              <line x1="282" y1="70" x2="325" y2="70" stroke="#cbd5e1" strokeWidth="2" />

              {/* C5: CH with COOCH3 ester branch going up */}
              <text x="337" y="74" fill="#fbbf24" fontSize="13" fontWeight="bold">CH</text>
              <line x1="345" y1="62" x2="345" y2="42" stroke="#cbd5e1" strokeWidth="2" />
              <text x="345" y="32" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">COOCH₃</text>
              <text x="345" y="92" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₅</text>

              <line x1="358" y1="70" x2="400" y2="70" stroke="#cbd5e1" strokeWidth="2" />

              {/* C6: CH3 */}
              <text x="415" y="74" fill="#38bdf8" fontSize="13" fontWeight="bold">CH₃</text>
              <text x="425" y="52" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">C₆</text>
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
}

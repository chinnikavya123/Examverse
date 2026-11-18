import React from 'react';
import { publicAsset } from '../utils/publicAsset';

export default function DiagramRenderer({ type }) {
  if (!type) return null;

  // Support direct image paths or URLs (e.g. /diagrams/...)
  if (typeof type === 'string' && (type.startsWith('/') || type.startsWith('http') || type.startsWith('data:') || type.includes('.'))) {
    return (
      <div className="my-4 flex flex-col items-center justify-center">
        <div className="p-2 sm:p-3 bg-white rounded-2xl border border-slate-700/80 shadow-md max-w-full overflow-hidden flex justify-center">
          <img 
            src={publicAsset(type)} 
            alt="Question Diagram" 
            className="max-h-64 sm:max-h-72 object-contain" 
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  switch (type) {
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

    case 'nitrobenzene_reaction_q63':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aromatic Reaction Scheme (Q63):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto w-full max-w-xl flex justify-center">
            <svg width="420" height="130" viewBox="0 0 420 130" className="overflow-visible font-sans">
              <defs>
                <marker id="arrowhead63" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
                </marker>
              </defs>

              {/* 1. Nitrobenzene (Start) */}
              <g transform="translate(60, 65)">
                <polygon points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="0" cy="0" r="11" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="0" y1="-22" x2="0" y2="-36" stroke="#fbbf24" strokeWidth="2" />
                <text x="0" y="-40" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="extrabold">NO₂</text>
              </g>

              {/* Reaction Arrow with Reagents */}
              <g>
                <line x1="105" y1="65" x2="310" y2="65" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arrowhead63)" />
                <text x="207" y="25" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(i) Br₂, AcOH</text>
                <text x="207" y="40" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(ii) Sn, HCl</text>
                <text x="207" y="55" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(iii) NaNO₂, HCl, 273 K</text>
                <text x="207" y="78" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(iv) C₂H₅OH</text>
              </g>

              {/* Final Product A + B */}
              <g transform="translate(355, 65)">
                <text x="0" y="6" textAnchor="middle" fill="#60a5fa" fontSize="18" fontWeight="extrabold">A + B</text>
              </g>
            </svg>
          </div>
        </div>
      );

    case 'nitrobenzene_reaction_q73':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aromatic Reaction Scheme (Q73):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto w-full max-w-xl flex justify-center">
            <svg width="420" height="140" viewBox="0 0 420 140" className="overflow-visible font-sans">
              <defs>
                <marker id="arrowhead73" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
                </marker>
              </defs>

              {/* 1. Nitrobenzene (Start) */}
              <g transform="translate(60, 70)">
                <polygon points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="0" cy="0" r="11" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="0" y1="-22" x2="0" y2="-36" stroke="#fbbf24" strokeWidth="2" />
                <text x="0" y="-40" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="extrabold">NO₂</text>
              </g>

              {/* Reaction Arrow with 4 Reagents */}
              <g>
                <line x1="105" y1="70" x2="310" y2="70" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arrowhead73)" />
                <text x="207" y="22" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(i) Sn + HCl</text>
                <text x="207" y="37" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(ii) NaNO₂, HCl, 0°C</text>
                <text x="207" y="52" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(iii) Cu₂Cl₂</text>
                <text x="207" y="86" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">(iv) Na, Ether</text>
              </g>

              {/* Final Product A / Product */}
              <g transform="translate(355, 70)">
                <text x="0" y="-6" textAnchor="middle" fill="#60a5fa" fontSize="18" fontWeight="extrabold">A</text>
                <line x1="-30" y1="2" x2="30" y2="2" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="0" y="20" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">Product</text>
              </g>
            </svg>
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

    case 'v_x_graph':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Potential Energy V(x) vs Distance (x) Graph (Q31):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="300" height="220" viewBox="0 0 300 220" className="overflow-visible font-sans">
              {/* Dashed Grid Lines */}
              {/* Vertical Grid Lines x = 1 to 7 */}
              {[1, 2, 3, 4, 5, 6, 7].map((val) => {
                const posX = 50 + val * 25;
                return (
                  <g key={`vgrid-${val}`}>
                    <line x1={posX} y1="30" x2={posX} y2="180" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={posX} y="196" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">{val}</text>
                  </g>
                );
              })}

              {/* Horizontal Grid Lines V = 1, 3, 5, 7 */}
              {[1, 3, 5, 7].map((val) => {
                const posY = 180 - val * 20;
                return (
                  <g key={`hgrid-${val}`}>
                    <line x1="50" y1={posY} x2="225" y2={posY} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="38" y={posY + 4} fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end">{val}</text>
                  </g>
                );
              })}

              {/* Main Axes */}
              <line x1="50" y1="20" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="50" y1="180" x2="250" y2="180" stroke="#cbd5e1" strokeWidth="2" />
              <polygon points="50,15 46,23 54,23" fill="#cbd5e1" />
              <polygon points="255,180 247,176 247,184" fill="#cbd5e1" />

              <text x="28" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold">V</text>
              <text x="262" y="184" fill="#38bdf8" fontSize="13" fontWeight="bold">x</text>
              <text x="38" y="196" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end">0</text>

              {/* Plot Lines connecting A(0,0) -> B(1,1) -> C(2,5) -> D(4,5) -> E(6,3) */}
              {/* Segment AB */}
              <line x1="50" y1="180" x2="75" y2="160" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Segment BC */}
              <line x1="75" y1="160" x2="100" y2="80" stroke="#f43f5e" strokeWidth="3" />
              {/* Segment CD */}
              <line x1="100" y1="80" x2="150" y2="80" stroke="#34d399" strokeWidth="2.5" />
              {/* Segment DE */}
              <line x1="150" y1="80" x2="200" y2="120" stroke="#fbbf24" strokeWidth="2.5" />

              {/* Points A, B, C, D, E */}
              <circle cx="50" cy="180" r="4" fill="#38bdf8" />
              <text x="50" y="196" fill="#38bdf8" fontSize="12" fontWeight="extrabold" textAnchor="middle">A</text>

              <circle cx="75" cy="160" r="4" fill="#38bdf8" />
              <text x="63" y="163" fill="#38bdf8" fontSize="12" fontWeight="extrabold">B</text>

              <circle cx="100" cy="80" r="4" fill="#f43f5e" />
              <text x="92" y="72" fill="#f43f5e" fontSize="12" fontWeight="extrabold">C</text>

              <circle cx="150" cy="80" r="4" fill="#34d399" />
              <text x="150" y="72" fill="#34d399" fontSize="12" fontWeight="extrabold" textAnchor="middle">D</text>

              <circle cx="200" cy="120" r="4" fill="#fbbf24" />
              <text x="210" y="124" fill="#fbbf24" fontSize="12" fontWeight="extrabold">E</text>
            </svg>
          </div>
        </div>
      );

    case 'rod_suspension':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uniform Rod Suspended by Strings Diagram (Q34):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="280" height="150" viewBox="0 0 280 150" className="overflow-visible font-sans">
              {/* Hashed Ceiling Support */}
              <line x1="40" y1="25" x2="240" y2="25" stroke="#cbd5e1" strokeWidth="2.5" />
              {[50, 70, 90, 110, 130, 150, 170, 190, 210, 230].map((xPos) => (
                <line key={`hash-${xPos}`} x1={xPos} y1="15" x2={xPos + 8} y2="25" stroke="#64748b" strokeWidth="1.5" />
              ))}

              {/* Left String at A */}
              <line x1="60" y1="25" x2="60" y2="85" stroke="#f8fafc" strokeWidth="2" />
              {/* Right String at B */}
              <line x1="220" y1="25" x2="220" y2="85" stroke="#f8fafc" strokeWidth="2" />

              {/* Rod AB */}
              <rect x="50" y="85" width="180" height="12" fill="#334155" stroke="#cbd5e1" strokeWidth="2" rx="2" />
              <circle cx="60" cy="91" r="3" fill="#38bdf8" />
              <circle cx="220" cy="91" r="3" fill="#38bdf8" />

              {/* Labels A and B */}
              <text x="35" y="95" fill="#f8fafc" fontSize="14" fontWeight="extrabold" textAnchor="end">A</text>
              <text x="245" y="95" fill="#f8fafc" fontSize="14" fontWeight="extrabold" textAnchor="start">B</text>

              {/* Dimension Line l under the rod */}
              <line x1="60" y1="118" x2="220" y2="118" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="60" y1="112" x2="60" y2="124" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="220" y1="112" x2="220" y2="124" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="140" y="132" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">l</text>
            </svg>
          </div>
        </div>
      );

    case 'venturimeter':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Venturimeter Flow Tube Diagram (Q37):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="340" height="210" viewBox="0 0 340 210" className="overflow-visible font-sans">
              {/* Streamlines inside liquid (dashed lines) */}
              {[105, 115, 125, 135, 145].map((yVal, idx) => (
                <path
                  key={`streamline-${idx}`}
                  d={`M 30,${yVal} L 100,${yVal} Q 135,${105 + idx * 4} 170,${105 + idx * 4} Q 205,${yVal} 280,${yVal}`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.6"
                />
              ))}

              {/* Water Liquid Filling inside Main Tube */}
              <path
                d="M 30,90 L 100,90 L 140,105 L 200,105 L 240,90 L 280,90 L 280,160 L 240,160 L 200,145 L 140,145 L 100,160 L 30,160 Z"
                fill="#0284c7"
                opacity="0.2"
              />

              {/* Main Outer Tube Outline */}
              <path
                d="M 30,90 L 100,90 L 140,105 L 200,105 L 240,90 L 280,90 M 30,160 L 100,160 L 140,145 L 200,145 L 240,160 L 280,160"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2.5"
              />

              {/* Left Vertical Glass Tube above A */}
              <rect x="65" y="30" width="18" height="60" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              {/* Water Column inside Left Tube */}
              <rect x="66" y="30" width="16" height="60" fill="#38bdf8" opacity="0.4" />
              <line x1="66" y1="30" x2="82" y2="30" stroke="#0284c7" strokeWidth="2" />

              {/* Right Vertical Glass Tube above B */}
              <rect x="161" y="70" width="18" height="35" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              {/* Water Column inside Right Tube */}
              <rect x="162" y="70" width="16" height="35" fill="#38bdf8" opacity="0.4" />
              <line x1="162" y1="70" x2="178" y2="70" stroke="#0284c7" strokeWidth="2" />

              {/* Height Difference Indicator 5 cm */}
              <line x1="82" y1="30" x2="140" y2="30" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="178" y1="70" x2="140" y2="70" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3 3" />

              <line x1="125" y1="30" x2="125" y2="70" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="125,30 121,37 129,37" fill="#fbbf24" />
              <polygon points="125,70 121,63 129,63" fill="#fbbf24" />

              <text x="135" y="54" fill="#fbbf24" fontSize="13" fontWeight="extrabold" textAnchor="start">5 cm</text>

              {/* Circled Labels A and B inside the tube */}
              {/* Point A */}
              <circle cx="74" cy="125" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="74" y="130" fill="#f8fafc" fontSize="12" fontWeight="extrabold" textAnchor="middle">A</text>

              {/* Point B */}
              <circle cx="170" cy="125" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="170" y="129" fill="#f8fafc" fontSize="11" fontWeight="extrabold" textAnchor="middle">B</text>

              {/* Flow Direction Arrow at Bottom Right */}
              <line x1="220" y1="180" x2="260" y2="180" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="265,180 256,175 256,185" fill="#34d399" />
            </svg>
          </div>
        </div>
      );

    case 'rod_on_rails':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Conducting Rod Moving on Rails in Magnetic Field (Q42):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="280" height="170" viewBox="0 0 280 170" className="overflow-visible font-sans">
              {/* Parallel Horizontal Rails */}
              <line x1="50" y1="40" x2="250" y2="40" stroke="#cbd5e1" strokeWidth="2.5" />
              <line x1="50" y1="120" x2="250" y2="120" stroke="#cbd5e1" strokeWidth="2.5" />

              {/* Left Resistor (2Ω) */}
              <line x1="50" y1="40" x2="50" y2="60" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 50,60 L 42,65 L 58,73 L 42,81 L 58,89 L 42,97 L 50,102" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
              <line x1="50" y1="102" x2="50" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <text x="32" y="85" fill="#f8fafc" fontSize="13" fontWeight="extrabold" textAnchor="end">2 Ω</text>

              {/* Moving Vertical Rod AB */}
              <line x1="160" y1="30" x2="160" y2="130" stroke="#f8fafc" strokeWidth="3" />
              <circle cx="160" cy="40" r="4" fill="#38bdf8" />
              <circle cx="160" cy="120" r="4" fill="#38bdf8" />

              {/* Labels A and B */}
              <text x="160" y="20" fill="#f8fafc" fontSize="14" fontWeight="extrabold" textAnchor="middle">A</text>
              <text x="160" y="148" fill="#f8fafc" fontSize="14" fontWeight="extrabold" textAnchor="middle">B</text>

              {/* Velocity Arrow v */}
              <line x1="160" y1="80" x2="205" y2="80" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="210,80 201,75 201,85" fill="#34d399" />
              <text x="185" y="72" fill="#34d399" fontSize="13" fontWeight="extrabold" textAnchor="middle">v</text>

              {/* Circled Magnetic Field Crosses ⊗ */}
              {[[90, 60], [125, 60], [195, 60], [230, 60], [90, 100], [125, 100], [195, 100], [230, 100]].map(([cx, cy], idx) => (
                <g key={`cross-${idx}`}>
                  <circle cx={cx} cy={cy} r="7" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
                  <line x1={cx - 4} y1={cy - 4} x2={cx + 4} y2={cy + 4} stroke="#94a3b8" strokeWidth="1.2" />
                  <line x1={cx - 4} y1={cy + 4} x2={cx + 4} y2={cy - 4} stroke="#94a3b8" strokeWidth="1.2" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      );

    case 'logic_gates':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Logic Gate Circuit Diagram (Q43):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="420" height="170" viewBox="0 0 420 170" className="overflow-visible font-sans">
              {/* Input Label on Far Left */}
              <text x="15" y="85" fill="#94a3b8" fontSize="13" fontWeight="extrabold">Input</text>

              {/* Terminal A */}
              <circle cx="55" cy="45" r="3.5" fill="#f8fafc" />
              <text x="42" y="49" fill="#f8fafc" fontSize="14" fontWeight="extrabold">A</text>

              {/* Branching inputs for NOR Gate 1 (Top Left) */}
              <line x1="55" y1="45" x2="68" y2="45" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="35" x2="68" y2="55" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="35" x2="80" y2="35" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="55" x2="80" y2="55" stroke="#f8fafc" strokeWidth="2" />

              {/* NOR Gate 1 (Top Left) */}
              <path d="M 80,27 Q 92,45 80,63 Q 112,63 125,45 Q 112,27 80,27 Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <circle cx="129" cy="45" r="3.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />

              {/* Terminal B */}
              <circle cx="55" cy="125" r="3.5" fill="#f8fafc" />
              <text x="42" y="129" fill="#f8fafc" fontSize="14" fontWeight="extrabold">B</text>

              {/* Branching inputs for NOR Gate 2 (Bottom Left) */}
              <line x1="55" y1="125" x2="68" y2="125" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="115" x2="68" y2="135" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="115" x2="80" y2="115" stroke="#f8fafc" strokeWidth="2" />
              <line x1="68" y1="135" x2="80" y2="135" stroke="#f8fafc" strokeWidth="2" />

              {/* NOR Gate 2 (Bottom Left) */}
              <path d="M 80,107 Q 92,125 80,143 Q 112,143 125,125 Q 112,107 80,107 Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <circle cx="129" cy="125" r="3.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />

              {/* Connection from NOR Gate 1 and 2 outputs to NOR Gate 3 (Middle) */}
              <line x1="133" y1="45" x2="175" y2="45" stroke="#f8fafc" strokeWidth="2" />
              <line x1="175" y1="45" x2="175" y2="73" stroke="#f8fafc" strokeWidth="2" />
              <line x1="175" y1="73" x2="187" y2="73" stroke="#f8fafc" strokeWidth="2" />

              <line x1="133" y1="125" x2="175" y2="125" stroke="#f8fafc" strokeWidth="2" />
              <line x1="175" y1="125" x2="175" y2="97" stroke="#f8fafc" strokeWidth="2" />
              <line x1="175" y1="97" x2="187" y2="97" stroke="#f8fafc" strokeWidth="2" />

              {/* NOR Gate 3 (Middle) */}
              <path d="M 187,67 Q 199,85 187,103 Q 219,103 232,85 Q 219,67 187,67 Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <circle cx="236" cy="85" r="3.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />

              {/* Connection from NOR Gate 3 output to NOR Gate 4 (Right) */}
              <line x1="240" y1="85" x2="258" y2="85" stroke="#f8fafc" strokeWidth="2" />
              <line x1="258" y1="75" x2="258" y2="95" stroke="#f8fafc" strokeWidth="2" />
              <line x1="258" y1="75" x2="270" y2="75" stroke="#f8fafc" strokeWidth="2" />
              <line x1="258" y1="95" x2="270" y2="95" stroke="#f8fafc" strokeWidth="2" />

              {/* NOR Gate 4 (Right) */}
              <path d="M 270,67 Q 282,85 270,103 Q 302,103 315,85 Q 302,67 270,67 Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
              <circle cx="319" cy="85" r="3.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />

              {/* Final Output Line & Label */}
              <line x1="323" y1="85" x2="355" y2="85" stroke="#f8fafc" strokeWidth="2" />
              <circle cx="355" cy="85" r="3.5" fill="#f8fafc" />
              <text x="365" y="89" fill="#f8fafc" fontSize="14" fontWeight="extrabold">Output</text>
            </svg>
          </div>
        </div>
      );

    case 'two_rods':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Two Connected Thin Rods System (Q46):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="260" height="190" viewBox="0 0 260 190" className="overflow-visible font-sans">
              {/* Point P at top end of vertical rod */}
              <circle cx="130" cy="30" r="5" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2" />
              <text x="130" y="18" fill="#f8fafc" fontSize="16" fontWeight="extrabold" textAnchor="middle">P</text>

              {/* Vertical Rod (M, L) */}
              <rect x="126" y="30" width="8" height="100" fill="#334155" stroke="#cbd5e1" strokeWidth="2" rx="2" />
              <text x="145" y="85" fill="#cbd5e1" fontSize="14" fontWeight="bold">M, L</text>

              {/* Horizontal Rod (M, L) at bottom */}
              <rect x="60" y="130" width="140" height="8" fill="#334155" stroke="#cbd5e1" strokeWidth="2" rx="2" />
              <text x="130" y="160" fill="#cbd5e1" fontSize="14" fontWeight="bold" textAnchor="middle">M, L</text>
            </svg>
          </div>
        </div>
      );

    case 'circuit_ab':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Circuit Diagram Between Points A and B (Q47):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="320" height="220" viewBox="0 0 320 220" className="overflow-visible font-sans">
              {/* Point A Terminal */}
              <circle cx="50" cy="80" r="4" fill="#38bdf8" />
              <text x="36" y="84" fill="#38bdf8" fontSize="15" fontWeight="extrabold">A</text>

              {/* Point B Terminal */}
              <circle cx="230" cy="80" r="4" fill="#38bdf8" />
              <text x="242" y="84" fill="#38bdf8" fontSize="15" fontWeight="extrabold">B</text>

              {/* Top Arm (1Ω and 2Ω) */}
              <line x1="50" y1="80" x2="50" y2="40" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="50" y1="40" x2="70" y2="40" stroke="#cbd5e1" strokeWidth="2" />
              {/* 1Ω Resistor */}
              <path d="M 70,40 L 75,32 L 85,48 L 95,32 L 105,48 L 115,32 L 120,40" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="95" y="24" fill="#f8fafc" fontSize="13" fontWeight="extrabold" textAnchor="middle">1 Ω</text>
              <line x1="120" y1="40" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="2" />
              {/* 2Ω Resistor */}
              <path d="M 160,40 L 165,32 L 175,48 L 185,32 L 195,48 L 205,32 L 210,40" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="185" y="24" fill="#f8fafc" fontSize="13" fontWeight="extrabold" textAnchor="middle">2 Ω</text>
              <line x1="210" y1="40" x2="230" y2="40" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="230" y1="40" x2="230" y2="80" stroke="#cbd5e1" strokeWidth="2" />

              {/* Bottom Arm (2Ω and 4Ω) */}
              <line x1="50" y1="80" x2="50" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="50" y1="120" x2="70" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              {/* 2Ω Resistor */}
              <path d="M 70,120 L 75,112 L 85,128 L 95,112 L 105,128 L 115,112 L 120,120" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="95" y="142" fill="#f8fafc" fontSize="13" fontWeight="extrabold" textAnchor="middle">2 Ω</text>
              <line x1="120" y1="120" x2="160" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              {/* 4Ω Resistor */}
              <path d="M 160,120 L 165,112 L 175,128 L 185,112 L 195,128 L 205,112 L 210,120" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="185" y="142" fill="#f8fafc" fontSize="13" fontWeight="extrabold" textAnchor="middle">4 Ω</text>
              <line x1="210" y1="120" x2="230" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="230" y1="120" x2="230" y2="80" stroke="#cbd5e1" strokeWidth="2" />

              {/* Middle Vertical Arm (1Ω) */}
              <circle cx="140" cy="40" r="3" fill="#cbd5e1" />
              <circle cx="140" cy="120" r="3" fill="#cbd5e1" />
              <line x1="140" y1="40" x2="140" y2="60" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 140,60 L 132,65 L 148,75 L 132,85 L 148,95 L 132,100 L 140,105" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="156" y="85" fill="#f8fafc" fontSize="13" fontWeight="extrabold">1 Ω</text>
              <line x1="140" y1="105" x2="140" y2="120" stroke="#cbd5e1" strokeWidth="2" />

              {/* Outer Loop Battery Connection below */}
              <line x1="50" y1="80" x2="30" y2="80" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="30" y1="80" x2="30" y2="185" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="30" y1="185" x2="120" y2="185" stroke="#cbd5e1" strokeWidth="2" />

              {/* Battery 9V */}
              <line x1="120" y1="173" x2="120" y2="197" stroke="#f8fafc" strokeWidth="3" />
              <line x1="128" y1="178" x2="128" y2="192" stroke="#64748b" strokeWidth="2" />
              <text x="124" y="212" fill="#34d399" fontSize="14" fontWeight="extrabold" textAnchor="middle">9 V</text>

              <line x1="128" y1="185" x2="250" y2="185" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="250" y1="185" x2="250" y2="80" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="250" y1="80" x2="230" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'resonance_structures_q52':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resonance Structures (Q52):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="460" height="340" viewBox="0 0 460 340" className="font-sans">
              {/* Structure (A) */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="215" height="150" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">(A)</text>
                
                {/* Skeletal Backbone A: C1-C2=C3-C4=N */}
                <path d="M 40,75 L 65,55 L 90,75 L 115,55 L 140,75" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
                {/* Double Bond C2=C3 */}
                <line x1="66" y1="47" x2="87" y2="64" stroke="#f8fafc" strokeWidth="2.5" />
                {/* Double Bond C4=N */}
                <line x1="116" y1="47" x2="137" y2="64" stroke="#f8fafc" strokeWidth="2.5" />
                
                {/* Charges & Atoms A */}
                <text x="25" y="78" fill="#38bdf8" fontSize="16" fontWeight="extrabold">+</text>
                <text x="142" y="77" fill="#38bdf8" fontSize="14" fontWeight="extrabold">N</text>
                <text x="147" y="60" fill="#38bdf8" fontSize="14" fontWeight="extrabold">+</text>
                
                {/* N-O⁻ single bonds */}
                <line x1="155" y1="70" x2="175" y2="50" stroke="#f8fafc" strokeWidth="2" />
                <text x="178" y="48" fill="#f8fafc" fontSize="13" fontWeight="bold">O⁻</text>

                <line x1="155" y1="78" x2="175" y2="98" stroke="#f8fafc" strokeWidth="2" />
                <text x="178" y="105" fill="#f8fafc" fontSize="13" fontWeight="bold">O⁻</text>
              </g>

              {/* Structure (B) */}
              <g transform="translate(235, 10)">
                <rect x="0" y="0" width="215" height="150" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">(B)</text>
                
                {/* Skeletal Backbone B: C1=C2-C3-C4-N */}
                <path d="M 40,75 L 65,55 L 90,75 L 115,55 L 140,75" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
                {/* Double Bond C1=C2 */}
                <line x1="42" y1="83" x2="63" y2="66" stroke="#f8fafc" strokeWidth="2.5" />

                {/* Charges & Atoms B */}
                <text x="63" y="45" fill="#38bdf8" fontSize="16" fontWeight="extrabold">+</text>
                <text x="90" y="60" fill="#f43f5e" fontSize="18" fontWeight="extrabold">-</text>
                <text x="142" y="77" fill="#38bdf8" fontSize="14" fontWeight="extrabold">N</text>
                <text x="147" y="60" fill="#38bdf8" fontSize="14" fontWeight="extrabold">+</text>

                {/* N=O double bond (top) */}
                <line x1="153" y1="67" x2="173" y2="47" stroke="#f8fafc" strokeWidth="2" />
                <line x1="159" y1="73" x2="179" y2="53" stroke="#f8fafc" strokeWidth="2" />
                <text x="182" y="48" fill="#f8fafc" fontSize="13" fontWeight="bold">O</text>

                {/* N-O⁻ single bond (bottom) */}
                <line x1="155" y1="78" x2="175" y2="98" stroke="#f8fafc" strokeWidth="2" />
                <text x="178" y="105" fill="#f8fafc" fontSize="13" fontWeight="bold">O⁻</text>
              </g>

              {/* Structure (C) */}
              <g transform="translate(10, 175)">
                <rect x="0" y="0" width="215" height="150" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">(C)</text>
                
                {/* Skeletal Backbone C: C1=C2-C3-C4-N */}
                <path d="M 40,75 L 65,55 L 90,75 L 115,55 L 140,75" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
                {/* Double Bond C1=C2 */}
                <line x1="42" y1="83" x2="63" y2="66" stroke="#f8fafc" strokeWidth="2.5" />

                {/* Charges & Atoms C */}
                <text x="63" y="45" fill="#38bdf8" fontSize="16" fontWeight="extrabold">+</text>
                <text x="88" y="100" fill="#f43f5e" fontSize="18" fontWeight="extrabold">-</text>
                <text x="142" y="77" fill="#38bdf8" fontSize="14" fontWeight="extrabold">N</text>
                <text x="147" y="60" fill="#38bdf8" fontSize="14" fontWeight="extrabold">+</text>

                {/* N=O double bond (top) */}
                <line x1="153" y1="67" x2="173" y2="47" stroke="#f8fafc" strokeWidth="2" />
                <line x1="159" y1="73" x2="179" y2="53" stroke="#f8fafc" strokeWidth="2" />
                <text x="182" y="48" fill="#f8fafc" fontSize="13" fontWeight="bold">O</text>

                {/* N-O⁻ single bond (bottom) */}
                <line x1="155" y1="78" x2="175" y2="98" stroke="#f8fafc" strokeWidth="2" />
                <text x="178" y="105" fill="#f8fafc" fontSize="13" fontWeight="bold">O⁻</text>
              </g>

              {/* Structure (D) */}
              <g transform="translate(235, 175)">
                <rect x="0" y="0" width="215" height="150" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">(D)</text>
                
                {/* Skeletal Backbone D: C1-C2=C3-C4-N */}
                <path d="M 40,75 L 65,55 L 90,75 L 115,55 L 140,75" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
                {/* Double Bond C2=C3 */}
                <line x1="66" y1="47" x2="87" y2="64" stroke="#f8fafc" strokeWidth="2.5" />

                {/* Charges & Atoms D */}
                <text x="30" y="98" fill="#38bdf8" fontSize="16" fontWeight="extrabold">+</text>
                <text x="62" y="42" fill="#f43f5e" fontSize="18" fontWeight="extrabold">-</text>
                <text x="142" y="77" fill="#38bdf8" fontSize="14" fontWeight="extrabold">N</text>
                <text x="147" y="60" fill="#38bdf8" fontSize="14" fontWeight="extrabold">+</text>

                {/* N=O double bond (top) */}
                <line x1="153" y1="67" x2="173" y2="47" stroke="#f8fafc" strokeWidth="2" />
                <line x1="159" y1="73" x2="179" y2="53" stroke="#f8fafc" strokeWidth="2" />
                <text x="182" y="48" fill="#f8fafc" fontSize="13" fontWeight="bold">O</text>

                {/* N-O⁻ single bond (bottom) */}
                <line x1="155" y1="78" x2="175" y2="98" stroke="#f8fafc" strokeWidth="2" />
                <text x="178" y="105" fill="#f8fafc" fontSize="13" fontWeight="bold">O⁻</text>
              </g>
            </svg>
          </div>
        </div>
      );

    case 'p_v_work_isotherms_q54':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pressure vs Volume Graphs (Q54):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="480" height="380" viewBox="0 0 480 380" className="font-sans">
              {/* Graph (A) */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="225" height="170" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(A)</text>
                
                {/* Axes */}
                <line x1="35" y1="25" x2="35" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="200" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points="35,20 31,27 39,27" fill="#94a3b8" />
                <polygon points="205,135 198,131 198,139" fill="#94a3b8" />
                
                <text x="25" y="45" fill="#cbd5e1" fontSize="9">p/bar</text>
                <text x="20" y="58" fill="#f8fafc" fontSize="9" fontWeight="bold">2.0</text>
                <text x="20" y="148" fill="#94a3b8" fontSize="9">(0,0)</text>
                <text x="105" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">22.4</text>
                <text x="175" y="148" fill="#cbd5e1" fontSize="9">V/L →</text>

                {/* Isochoric process */}
                <line x1="35" y1="55" x2="115" y2="55" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="115" y1="55" x2="115" y2="135" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="115,100 111,92 119,92" fill="#38bdf8" />
              </g>

              {/* Graph (B) */}
              <g transform="translate(245, 10)">
                <rect x="0" y="0" width="225" height="170" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(B)</text>
                
                {/* Axes */}
                <line x1="35" y1="25" x2="35" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="200" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points="35,20 31,27 39,27" fill="#94a3b8" />
                <polygon points="205,135 198,131 198,139" fill="#94a3b8" />

                <text x="25" y="45" fill="#cbd5e1" fontSize="9">p/bar</text>
                <text x="18" y="58" fill="#f8fafc" fontSize="9" fontWeight="bold">2.0</text>
                <text x="18" y="95" fill="#f8fafc" fontSize="9" fontWeight="bold">1.0</text>
                <text x="20" y="148" fill="#94a3b8" fontSize="9">(0,0)</text>
                <text x="65" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">22.4</text>
                <text x="145" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">44.8</text>
                <text x="175" y="148" fill="#cbd5e1" fontSize="9">V/L →</text>

                {/* Process B 3-stage Cycle */}
                {/* 1. Isochoric heating 1.0 to 2.0 (upward arrow) */}
                <line x1="75" y1="92" x2="75" y2="55" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="75,70 71,78 79,78" fill="#38bdf8" />

                {/* 2. Expansion curve down-right (down-right arrow) */}
                <path d="M 75,55 Q 110,65 160,92" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="120,73 128,70 123,78" fill="#38bdf8" />

                {/* 3. Isobaric compression 44.8 to 22.4 (leftward arrow) */}
                <line x1="160" y1="92" x2="75" y2="92" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="110,92 118,88 118,96" fill="#38bdf8" />

                {/* Dashed lines */}
                <line x1="35" y1="55" x2="75" y2="55" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="35" y1="92" x2="75" y2="92" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="75" y1="92" x2="75" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="160" y1="92" x2="160" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
              </g>

              {/* Graph (C) */}
              <g transform="translate(10, 195)">
                <rect x="0" y="0" width="225" height="170" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(C)</text>
                
                {/* Axes */}
                <line x1="35" y1="25" x2="35" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="200" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points="35,20 31,27 39,27" fill="#94a3b8" />
                <polygon points="205,135 198,131 198,139" fill="#94a3b8" />

                <text x="25" y="45" fill="#cbd5e1" fontSize="9">p/bar</text>
                <text x="18" y="58" fill="#f8fafc" fontSize="9" fontWeight="bold">2.0</text>
                <text x="18" y="95" fill="#f8fafc" fontSize="9" fontWeight="bold">1.0</text>
                <text x="20" y="148" fill="#94a3b8" fontSize="9">(0,0)</text>
                <text x="65" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">22.4</text>
                <text x="145" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">44.8</text>
                <text x="175" y="148" fill="#cbd5e1" fontSize="9">V/L →</text>

                {/* Process C Closed Lens Loop */}
                <path d="M 75,55 Q 120,60 160,92 Q 100,105 75,55 Z" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="120,70 128,68 124,75" fill="#38bdf8" />
                <polygon points="110,88 116,94 118,85" fill="#38bdf8" />

                {/* Dashed lines */}
                <line x1="35" y1="55" x2="75" y2="55" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="35" y1="92" x2="160" y2="92" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="75" y1="55" x2="75" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="160" y1="92" x2="160" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
              </g>

              {/* Graph (D) */}
              <g transform="translate(245, 195)">
                <rect x="0" y="0" width="225" height="170" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(D)</text>
                
                {/* Axes */}
                <line x1="35" y1="25" x2="35" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="200" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points="35,20 31,27 39,27" fill="#94a3b8" />
                <polygon points="205,135 198,131 198,139" fill="#94a3b8" />

                <text x="25" y="45" fill="#cbd5e1" fontSize="9">p/bar</text>
                <text x="18" y="58" fill="#f8fafc" fontSize="9" fontWeight="bold">2.0</text>
                <text x="18" y="95" fill="#f8fafc" fontSize="9" fontWeight="bold">1.0</text>
                <text x="20" y="148" fill="#94a3b8" fontSize="9">(0,0)</text>
                <text x="65" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">22.4</text>
                <text x="145" y="148" fill="#f8fafc" fontSize="9" fontWeight="bold">44.8</text>
                <text x="175" y="148" fill="#cbd5e1" fontSize="9">V/L →</text>

                {/* Process D Open Expansion Curve down to axis */}
                <path d="M 75,55 Q 110,65 160,92" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <polygon points="120,73 128,70 123,78" fill="#38bdf8" />

                {/* Dashed lines */}
                <line x1="35" y1="55" x2="75" y2="55" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="35" y1="92" x2="160" y2="92" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="75" y1="55" x2="75" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="160" y1="92" x2="160" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
              </g>
            </svg>
          </div>
        </div>
      );

    case 'organic_reduction_dicarboxylic_q65':
      return (
        <div className="my-4 flex flex-col items-center space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reaction & Option Structures (Q65):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="480" height="430" viewBox="0 0 480 430" className="font-sans">
              {/* --- TOP SECTION: REACTION SCHEME --- */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="460" height="145" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="22" fill="#38bdf8" fontSize="12" fontWeight="bold">Reaction Scheme:</text>

                {/* Reactant A */}
                <text x="35" y="76" fill="#f8fafc" fontSize="22" fontWeight="extrabold">A</text>

                {/* Top Branch (2H2, Pt -> Decalin) */}
                <path d="M 60,60 L 90,38 L 135,38" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="135,38 127,34 127,42" fill="#38bdf8" />
                <text x="110" y="30" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">2H₂ / Pt</text>

                {/* Decalin Product */}
                <g transform="translate(145, -5)">
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  <polygon points="56,30 74,15 92,30 92,60 74,75 56,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                </g>

                {/* Bottom Branch (KMnO4, delta -> Dicarboxylic + Oxalic Acid) */}
                <path d="M 60,80 L 90,105 L 135,105" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="135,105 127,101 127,109" fill="#38bdf8" />
                <text x="110" y="122" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">KMnO₄, Δ</text>

                {/* Dicarboxylic Acid Products */}
                <g transform="translate(145, 62)">
                  {/* Cyclohexane Ring */}
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  {/* COOH at top right fusion carbon */}
                  <line x1="56" y1="30" x2="70" y2="20" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="74" y="22" fill="#34d399" fontSize="11" fontWeight="bold">COOH</text>
                  {/* COOH at bottom right fusion carbon */}
                  <line x1="56" y1="60" x2="70" y2="70" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="74" y="74" fill="#34d399" fontSize="11" fontWeight="bold">COOH</text>

                  {/* Plus Sign */}
                  <text x="125" y="48" fill="#cbd5e1" fontSize="14" fontWeight="bold">+</text>

                  {/* Oxalic Acid (HOOC-COOH) */}
                  <g transform="translate(145, 25)">
                    <text x="0" y="12" fill="#c084fc" fontSize="11" fontWeight="bold">COOH</text>
                    <line x1="18" y1="16" x2="18" y2="30" stroke="#f8fafc" strokeWidth="1.5" />
                    <text x="0" y="42" fill="#c084fc" fontSize="11" fontWeight="bold">COOH</text>
                  </g>
                </g>
              </g>

              {/* --- BOTTOM SECTION: OPTIONS (A), (B), (C), (D) --- */}
              {/* Option (A) */}
              <g transform="translate(10, 165)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(A)</text>
                
                {/* Bicyclic structure: left vertical + right vertical double bonds */}
                <g transform="translate(60, 22)">
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  <polygon points="56,30 74,15 92,30 92,60 74,75 56,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  {/* Left vertical double bond */}
                  <line x1="25" y1="33" x2="25" y2="57" stroke="#f8fafc" strokeWidth="2" />
                  {/* Right vertical double bond */}
                  <line x1="87" y1="33" x2="87" y2="57" stroke="#f8fafc" strokeWidth="2" />
                </g>
              </g>

              {/* Option (B) - CORRECT */}
              <g transform="translate(250, 165)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" rx="8" />
                <text x="15" y="25" fill="#34d399" fontSize="13" fontWeight="bold">(B)</text>
                
                {/* Bicyclic structure: 2 conjugated outer double bonds in right ring */}
                <g transform="translate(60, 22)">
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  <polygon points="56,30 74,15 92,30 92,60 74,75 56,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  {/* Top-right outer diagonal double bond */}
                  <line x1="72" y1="23" x2="86" y2="35" stroke="#f8fafc" strokeWidth="2" />
                  {/* Bottom-right outer diagonal double bond */}
                  <line x1="86" y1="55" x2="72" y2="67" stroke="#f8fafc" strokeWidth="2" />
                </g>
              </g>

              {/* Option (C) */}
              <g transform="translate(10, 295)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(C)</text>
                
                {/* Bicyclic structure: top-left diagonal + right vertical double bonds */}
                <g transform="translate(60, 22)">
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  <polygon points="56,30 74,15 92,30 92,60 74,75 56,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  {/* Top-left diagonal double bond */}
                  <line x1="24" y1="33" x2="38" y2="21" stroke="#f8fafc" strokeWidth="2" />
                  {/* Right vertical double bond */}
                  <line x1="87" y1="33" x2="87" y2="57" stroke="#f8fafc" strokeWidth="2" />
                </g>
              </g>

              {/* Option (D) */}
              <g transform="translate(250, 295)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(D)</text>
                
                {/* Bicyclic structure: Tetralin (benzene ring on left: 3 alternating double bonds) */}
                <g transform="translate(60, 22)">
                  <polygon points="20,30 38,15 56,30 56,60 38,75 20,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  <polygon points="56,30 74,15 92,30 92,60 74,75 56,60" fill="none" stroke="#f8fafc" strokeWidth="2" />
                  {/* Top-left diagonal double bond */}
                  <line x1="24" y1="33" x2="38" y2="21" stroke="#f8fafc" strokeWidth="2" />
                  {/* Bottom-left diagonal double bond */}
                  <line x1="38" y1="69" x2="24" y2="57" stroke="#f8fafc" strokeWidth="2" />
                  {/* Central vertical double bond */}
                  <line x1="51" y1="34" x2="51" y2="56" stroke="#f8fafc" strokeWidth="2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      );

    case 'n2o4_free_energy_graph_q67':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gibbs Free Energy Graph (Q67):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="380" height="230" viewBox="0 0 380 230" className="font-sans">
              {/* Y-Axis */}
              <line x1="60" y1="30" x2="60" y2="180" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="60,22 55,32 65,32" fill="#94a3b8" />
              <text x="60" y="15" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">G / kJ mol⁻¹</text>

              {/* X-Axis */}
              <line x1="60" y1="180" x2="350" y2="180" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="358,180 348,175 348,185" fill="#94a3b8" />
              <text x="205" y="215" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Fraction of N₂O₄ dissociated</text>

              {/* X-Axis Ticks: 0.2, 0.4, 0.6, 0.8 */}
              <line x1="110" y1="180" x2="110" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="110" y="198" fill="#cbd5e1" fontSize="10" textAnchor="middle">0.2</text>

              <line x1="170" y1="180" x2="170" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="170" y="198" fill="#cbd5e1" fontSize="10" textAnchor="middle">0.4</text>

              <line x1="230" y1="180" x2="230" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="230" y="198" fill="#cbd5e1" fontSize="10" textAnchor="middle">0.6</text>

              <line x1="290" y1="180" x2="290" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="290" y="198" fill="#cbd5e1" fontSize="10" textAnchor="middle">0.8</text>

              {/* Box Constant p, T */}
              <rect x="120" y="45" width="85" height="22" fill="#0f172a" stroke="#475569" rx="4" />
              <text x="162.5" y="60" fill="#cbd5e1" fontSize="10" fontWeight="bold" textAnchor="middle">Constant p, T</text>

              {/* Free Energy Curve */}
              <path d="M 60,100 Q 140,160 310,40" fill="none" stroke="#f43f5e" strokeWidth="2.5" />

              {/* Point A */}
              <circle cx="60" cy="100" r="4" fill="#38bdf8" />
              <text x="48" y="104" fill="#38bdf8" fontSize="12" fontWeight="extrabold">A</text>

              {/* Point E (Equilibrium Minimum) */}
              <circle cx="160" cy="145" r="4" fill="#34d399" />
              <text x="160" y="162" fill="#34d399" fontSize="12" fontWeight="extrabold" textAnchor="middle">E</text>

              {/* Point B */}
              <circle cx="310" cy="40" r="4" fill="#38bdf8" />
              <text x="320" y="38" fill="#38bdf8" fontSize="12" fontWeight="extrabold">B</text>

              {/* Dashed line for 0.84 height drop from A to E */}
              <line x1="60" y1="100" x2="160" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="160" y1="100" x2="160" y2="145" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
              <text x="168" y="125" fill="#a855f7" fontSize="10" fontWeight="bold">0.84</text>

              {/* Height marker 5.40 between A level and B */}
              <line x1="60" y1="100" x2="310" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="310" y1="40" x2="310" y2="100" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
              <text x="318" y="75" fill="#fbbf24" fontSize="11" fontWeight="bold">5.40</text>
            </svg>
          </div>
        </div>
      );

    case 'acetal_structures_q69':
      return (
        <div className="my-4 flex flex-col items-center space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Option Structures (Q69):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="480" height="270" viewBox="0 0 480 270" className="font-sans">
              {/* --- OPTIONS (A), (B), (C), (D) --- */}
              {/* Option (A) */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(A)</text>
                <g transform="translate(20, 40)">
                  <text x="0" y="30" fill="#f8fafc" fontSize="12" fontWeight="bold">CH₃ – C – CH – CH₂</text>
                  <line x1="42" y1="35" x2="42" y2="52" stroke="#f8fafc" strokeWidth="1.5" />
                  <line x1="46" y1="35" x2="46" y2="52" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="44" y="65" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                  
                  <line x1="82" y1="35" x2="82" y2="52" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="82" y="65" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>

                  <line x1="126" y1="35" x2="126" y2="52" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="126" y="65" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>
                </g>
              </g>

              {/* Option (B) */}
              <g transform="translate(250, 10)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(B)</text>
                <g transform="translate(20, 30)">
                  <text x="44" y="15" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                  <line x1="42" y1="20" x2="42" y2="35" stroke="#f8fafc" strokeWidth="1.5" />
                  <line x1="46" y1="20" x2="46" y2="35" stroke="#f8fafc" strokeWidth="1.5" />

                  <text x="82" y="15" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>
                  <line x1="82" y1="20" x2="82" y2="35" stroke="#f8fafc" strokeWidth="1.5" />

                  <text x="0" y="48" fill="#f8fafc" fontSize="12" fontWeight="bold">CH₃ – C – C – CH₃</text>

                  <line x1="82" y1="52" x2="82" y2="67" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="82" y="79" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>
                </g>
              </g>

              {/* Option (C) - CORRECT */}
              <g transform="translate(10, 140)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" rx="8" />
                <text x="15" y="25" fill="#34d399" fontSize="13" fontWeight="bold">(C)</text>
                <g transform="translate(15, 30)">
                  <text x="44" y="15" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                  <line x1="42" y1="20" x2="42" y2="35" stroke="#f8fafc" strokeWidth="1.5" />
                  <line x1="46" y1="20" x2="46" y2="35" stroke="#f8fafc" strokeWidth="1.5" />

                  <text x="0" y="48" fill="#f8fafc" fontSize="11" fontWeight="bold">CH₃ – C – CH₂ – CH – OCH₃</text>

                  <line x1="124" y1="52" x2="124" y2="67" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="124" y="79" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>
                </g>
              </g>

              {/* Option (D) */}
              <g transform="translate(250, 140)">
                <rect x="0" y="0" width="220" height="120" fill="#0f172a" stroke="#334155" rx="8" />
                <text x="15" y="25" fill="#38bdf8" fontSize="13" fontWeight="bold">(D)</text>
                <g transform="translate(15, 30)">
                  <text x="32" y="15" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
                  <line x1="30" y1="20" x2="30" y2="35" stroke="#f8fafc" strokeWidth="1.5" />
                  <line x1="34" y1="20" x2="34" y2="35" stroke="#f8fafc" strokeWidth="1.5" />

                  <text x="0" y="48" fill="#f8fafc" fontSize="11" fontWeight="bold">H – C – CH₂ – CH₂ – CH – OCH₃</text>

                  <line x1="140" y1="52" x2="140" y2="67" stroke="#f8fafc" strokeWidth="1.5" />
                  <text x="140" y="79" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">OCH₃</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      );

    case 'cro5_butterfly_structure_q73':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Chromium Peroxide (CrO₅) Structure (Q73):</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="340" height="200" viewBox="0 0 340 200" className="font-sans">
              {/* Central Cr */}
              <circle cx="170" cy="110" r="22" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="170" y="115" fill="#f8fafc" fontSize="15" fontWeight="extrabold" textAnchor="middle">Cr</text>

              {/* Top Oxo Oxygen (=O) */}
              <line x1="164" y1="88" x2="164" y2="40" stroke="#f43f5e" strokeWidth="2.5" />
              <line x1="176" y1="88" x2="176" y2="40" stroke="#f43f5e" strokeWidth="2.5" />
              <circle cx="170" cy="30" r="14" fill="#be123c" stroke="#f43f5e" strokeWidth="2" />
              <text x="170" y="34" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">O</text>

              {/* Left Peroxide Ring */}
              <line x1="150" y1="100" x2="90" y2="70" stroke="#38bdf8" strokeWidth="2" />
              <line x1="150" y1="120" x2="90" y2="150" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="85" cy="65" r="13" fill="#047857" stroke="#34d399" strokeWidth="2" />
              <text x="85" y="69" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
              <circle cx="85" cy="155" r="13" fill="#047857" stroke="#34d399" strokeWidth="2" />
              <text x="85" y="159" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
              {/* Peroxide O-O bond */}
              <line x1="85" y1="78" x2="85" y2="142" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="3 2" />

              {/* Right Peroxide Ring */}
              <line x1="190" y1="100" x2="250" y2="70" stroke="#38bdf8" strokeWidth="2" />
              <line x1="190" y1="120" x2="250" y2="150" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="255" cy="65" r="13" fill="#047857" stroke="#34d399" strokeWidth="2" />
              <text x="255" y="69" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
              <circle cx="255" cy="155" r="13" fill="#047857" stroke="#34d399" strokeWidth="2" />
              <text x="255" y="159" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">O</text>
              {/* Peroxide O-O bond */}
              <line x1="255" y1="78" x2="255" y2="142" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="3 2" />

              {/* Parameter Labels */}
              <text x="170" y="190" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Structure of Product C (CrO₅)</text>
            </svg>
          </div>
        </div>
      );

    case 'parabola_chord_angle_q4':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Parabola & Intersecting Line (Q4):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="300" height="200" viewBox="0 0 300 200" className="overflow-visible font-sans">
              <path d="M 50,20 Q 150,180 250,20" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="40" y1="150" x2="260" y2="30" stroke="#f43f5e" strokeWidth="2" />
              <line x1="150" y1="140" x2="70" y2="120" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="150" y1="140" x2="230" y2="45" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="70" cy="120" r="4" fill="#38bdf8" />
              <text x="50" y="125" fill="#f8fafc" fontSize="12" fontWeight="bold">A(-2,3)</text>
              <circle cx="230" cy="45" r="4" fill="#38bdf8" />
              <text x="238" y="45" fill="#f8fafc" fontSize="12" fontWeight="bold">B(4,12)</text>
              <text x="150" y="155" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">O(0,0)</text>
            </svg>
          </div>
        </div>
      );

    case 'circle_arc_ratio_q7':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Circle Arc Vector Geometry (Q7):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="260" height="200" viewBox="0 0 260 200" className="overflow-visible font-sans">
              <path d="M 50,150 A 120,120 0 0,1 210,150" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="130" y1="180" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="130" y1="180" x2="80" y2="70" stroke="#fbbf24" strokeWidth="2" />
              <line x1="130" y1="180" x2="210" y2="150" stroke="#cbd5e1" strokeWidth="2" />
              <text x="130" y="195" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">O</text>
              <text x="35" y="155" fill="#38bdf8" fontSize="13" fontWeight="bold">A</text>
              <text x="75" y="58" fill="#fbbf24" fontSize="13" fontWeight="bold">B</text>
              <text x="220" y="155" fill="#38bdf8" fontSize="13" fontWeight="bold">C</text>
              <text x="95" y="145" fill="#cbd5e1" fontSize="11">15°</text>
              <text x="145" y="140" fill="#cbd5e1" fontSize="11">75°</text>
            </svg>
          </div>
        </div>
      );

    case 'rc_circuit_instant_q32':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">RC Circuit (Q32):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="260" height="150" viewBox="0 0 260 150" className="overflow-visible font-sans">
              <line x1="40" y1="30" x2="100" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 100,30 L 105,25 L 115,35 L 125,25 L 135,35 L 145,25 L 150,30" fill="none" stroke="#f8fafc" strokeWidth="2" />
              <line x1="150" y1="30" x2="180" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="180" y1="30" x2="200" y2="15" stroke="#fbbf24" strokeWidth="2" />
              <line x1="200" y1="30" x2="220" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="220" y1="30" x2="220" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="220" y1="120" x2="40" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="40" y1="120" x2="40" y2="30" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="30" y1="65" x2="30" y2="95" stroke="#38bdf8" strokeWidth="2" />
              <line x1="50" y1="72" x2="50" y2="88" stroke="#38bdf8" strokeWidth="2" />
              <text x="125" y="18" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">R</text>
              <text x="195" y="10" fill="#fbbf24" fontSize="11" fontWeight="bold">Key</text>
              <text x="25" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">A</text>
              <text x="55" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">B</text>
              <text x="120" y="140" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">5V Battery</text>
            </svg>
          </div>
        </div>
      );

    case 'latimer_fe_potentials_q55':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Latimer Diagram for Iron Species (Q55):</p>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
            <svg width="400" height="90" viewBox="0 0 400 90" className="overflow-visible font-sans">
              <text x="30" y="50" fill="#38bdf8" fontSize="14" fontWeight="bold">FeO₄²⁻</text>
              <line x1="80" y1="45" x2="160" y2="45" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="160,45 152,40 152,50" fill="#fbbf24" />
              <text x="120" y="38" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">+2.0V</text>

              <text x="175" y="50" fill="#38bdf8" fontSize="14" fontWeight="bold">Fe³⁺</text>
              <line x1="210" y1="45" x2="280" y2="45" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="280,45 272,40 272,50" fill="#fbbf24" />
              <text x="245" y="38" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">+0.8V</text>

              <text x="295" y="50" fill="#38bdf8" fontSize="14" fontWeight="bold">Fe²⁺</text>
              <line x1="330" y1="45" x2="370" y2="45" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="370,45 362,40 362,50" fill="#fbbf24" />
              <text x="350" y="38" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">-0.5V</text>
              <text x="380" y="50" fill="#38bdf8" fontSize="14" fontWeight="bold">Fe⁰</text>
            </svg>
          </div>
        </div>
      );

    case 'graph_2024_f01_m01':
      return (
        <div className="my-6 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <span>Official Graph Visualizer (2024 Feb 01 Shift 2 - Q1):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
            {/* Graph 1: y = |2x^2 + 5x - 3| */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center space-y-2">
              <span className="text-xs font-bold text-slate-300">Graph of y = |2x² + 5x - 3|</span>
              <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible font-sans">
                {/* Axes */}
                <line x1="20" y1="150" x2="260" y2="150" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="260,150 252,146 252,154" fill="#64748b" />
                <line x1="210" y1="190" x2="210" y2="20" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="210,20 206,28 214,28" fill="#64748b" />
                
                {/* Curve: y = |2x^2 + 5x - 3| */}
                <path d="M 30,25 Q 50,80 70,150" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <path d="M 70,150 Q 130,10 230,150" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <path d="M 230,150 Q 245,100 255,25" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                
                {/* Dotted axis for vertex */}
                <line x1="130" y1="30" x2="130" y2="170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Point dots */}
                <circle cx="70" cy="150" r="4" fill="#f43f5e" />
                <circle cx="130" cy="50" r="4" fill="#fbbf24" />
                <circle cx="230" cy="150" r="4" fill="#f43f5e" />

                {/* Labels */}
                <text x="70" y="168" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">-3</text>
                <text x="130" y="182" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">-5/4</text>
                <text x="230" y="168" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">1/2</text>
              </svg>
            </div>

            {/* Graph 2: Graph of f(x) = |2x^2 + 5|x| - 3| */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center space-y-2">
              <span className="text-xs font-bold text-emerald-400">Graph of f(x) = |2x² + 5|x| - 3|</span>
              <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible font-sans">
                {/* Axes */}
                <line x1="20" y1="150" x2="260" y2="150" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="260,150 252,146 252,154" fill="#64748b" />
                <line x1="140" y1="190" x2="140" y2="20" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="140,20 136,28 144,28" fill="#64748b" />
                
                {/* Symmetric W-shape */}
                <path d="M 30,25 Q 50,80 70,150" fill="none" stroke="#34d399" strokeWidth="2.5" />
                <path d="M 70,150 Q 105,80 140,95" fill="none" stroke="#34d399" strokeWidth="2.5" />
                <path d="M 140,95 Q 175,80 210,150" fill="none" stroke="#34d399" strokeWidth="2.5" />
                <path d="M 210,150 Q 230,80 250,25" fill="none" stroke="#34d399" strokeWidth="2.5" />
                
                {/* Sharp corner dots */}
                <circle cx="70" cy="150" r="4.5" fill="#f43f5e" />
                <circle cx="140" cy="95" r="4.5" fill="#fbbf24" />
                <circle cx="210" cy="150" r="4.5" fill="#f43f5e" />

                {/* Labels */}
                <text x="70" y="168" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">-1/2</text>
                <text x="140" y="172" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">0</text>
                <text x="210" y="168" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">1/2</text>
              </svg>

              {/* Summary Points */}
              <div className="text-[11px] font-semibold text-slate-300 space-y-0.5 text-center pt-1">
                <p className="text-emerald-400">Discontinuity points = <span className="font-extrabold text-white">0 = m</span></p>
                <p className="text-amber-400">Non-differentiability points = <span className="font-extrabold text-white">3 = n</span> (x = -1/2, 0, 1/2)</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'rolling_disc_incline_p35':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physics Q35: Disc Rolling Up Smooth Incline</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="340" height="175" viewBox="0 0 340 175" className="overflow-visible font-sans">
              {/* Ground horizontal track */}
              <line x1="30" y1="135" x2="190" y2="135" stroke="#94a3b8" strokeWidth="2.5" />
              {[40, 60, 80, 100, 120, 140, 160, 180].map(x => (
                <line key={x} x1={x} y1="135" x2={x - 8} y2="145" stroke="#475569" strokeWidth="1.5" />
              ))}
              
              {/* Smooth incline */}
              <path d="M 190,135 L 300,50" stroke="#38bdf8" strokeWidth="3" fill="none" />
              <line x1="300" y1="50" x2="330" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Incline base line */}
              <line x1="190" y1="135" x2="300" y2="135" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Height h vertical indicator */}
              <line x1="300" y1="50" x2="300" y2="135" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
              <polygon points="300,50 296,58 304,58" fill="#f43f5e" />
              <polygon points="300,135 296,127 304,127" fill="#f43f5e" />
              <text x="312" y="96" fill="#f43f5e" fontSize="15" fontWeight="bold">h</text>
              
              {/* Disc rolling on horizontal ground */}
              <circle cx="95" cy="111" r="24" fill="#1e293b" stroke="#34d399" strokeWidth="2.5" />
              <circle cx="95" cy="111" r="3.5" fill="#f8fafc" />
              <line x1="95" y1="111" x2="114" y2="97" stroke="#34d399" strokeWidth="1.5" />
              <text x="108" y="111" fill="#34d399" fontSize="12" fontWeight="bold">R</text>
              <text x="95" y="101" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">M</text>
              
              {/* Linear velocity arrow v */}
              <line x1="75" y1="74" x2="120" y2="74" stroke="#fbbf24" strokeWidth="2.5" />
              <polygon points="120,74 112,70 112,78" fill="#fbbf24" />
              <text x="98" y="68" fill="#fbbf24" fontSize="14" fontWeight="extrabold" textAnchor="middle">v</text>
              
              {/* Curved rotation arrow (clockwise) */}
              <path d="M 125,111 A 15,15 0 0,1 116,123" fill="none" stroke="#a78bfa" strokeWidth="2" />
              <polygon points="116,123 122,123 120,117" fill="#a78bfa" />
              <text x="133" y="127" fill="#a78bfa" fontSize="13" fontWeight="bold">ω</text>
              
              {/* Label for Smooth incline */}
              <text x="215" y="76" fill="#38bdf8" fontSize="12" fontWeight="bold" transform="rotate(-38, 215, 76)">Smooth Incline</text>
            </svg>
            <div className="text-[11px] font-semibold text-slate-400 text-center pt-1">
              {'Horizontal pure rolling ⟹ climbs smooth incline where torque τ = 0'}
            </div>
          </div>
        </div>
      );

    case 'single_slit_diffraction_p41':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physics Q41: Single-Slit Microwave Diffraction</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="340" height="170" viewBox="0 0 340 170" className="overflow-visible font-sans">
              {/* Incident Waves */}
              <line x1="20" y1="50" x2="60" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="60,50 52,46 52,54" fill="#38bdf8" />
              <line x1="20" y1="85" x2="60" y2="85" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="60,85 52,81 52,89" fill="#38bdf8" />
              <line x1="20" y1="120" x2="60" y2="120" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="60,120 52,116 52,124" fill="#38bdf8" />
              <text x="35" y="38" fill="#38bdf8" fontSize="11" fontWeight="bold">λ = 2.0 cm</text>
              
              {/* Slit obstacles */}
              <rect x="80" y="15" width="10" height="50" fill="#64748b" rx="2" />
              <rect x="80" y="105" width="10" height="50" fill="#64748b" rx="2" />
              
              {/* Slit width a = 4.0 cm */}
              <line x1="72" y1="65" x2="72" y2="105" stroke="#fbbf24" strokeWidth="1.5" />
              <polygon points="72,65 69,71 75,71" fill="#fbbf24" />
              <polygon points="72,105 69,99 75,99" fill="#fbbf24" />
              <text x="65" y="88" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="end">a = 4 cm</text>
              
              {/* Screen */}
              <line x1="270" y1="15" x2="270" y2="155" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="270" y="165" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Screen (D = 1.5 m)</text>
              
              {/* Central axis */}
              <line x1="85" y1="85" x2="270" y2="85" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 3" />
              
              {/* Central Maxima Angular Spread Rays */}
              <line x1="85" y1="85" x2="270" y2="35" stroke="#f43f5e" strokeWidth="1.5" />
              <line x1="85" y1="85" x2="270" y2="135" stroke="#f43f5e" strokeWidth="1.5" />
              
              {/* Angle arc for 2θ */}
              <path d="M 135,70 A 55,55 0 0,1 135,100" fill="none" stroke="#34d399" strokeWidth="2" />
              <text x="145" y="89" fill="#34d399" fontSize="13" fontWeight="extrabold">2θ = 60°</text>
              
              {/* Labels for first minima */}
              <circle cx="270" cy="35" r="3.5" fill="#f43f5e" />
              <text x="280" y="38" fill="#f43f5e" fontSize="11" fontWeight="bold">1st Min (θ = 30°)</text>
              <circle cx="270" cy="135" r="3.5" fill="#f43f5e" />
              <text x="280" y="138" fill="#f43f5e" fontSize="11" fontWeight="bold">1st Min (θ = 30°)</text>
            </svg>
            <div className="text-[11px] font-semibold text-slate-400 text-center pt-1">
              {'First minimum: sin θ = λ / a = 2 / 4 = 0.5 ⟹ θ = 30° ⟹ Total angular spread 2θ = 60°'}
            </div>
          </div>
        </div>
      );

    case 'semiconductor_bridge_p32':
      return (
        <div className="my-4 flex flex-col items-center space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physics Q32: Semiconductor Resistivity Bridge</p>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md overflow-x-auto max-w-full">
            <svg width="320" height="200" viewBox="0 0 320 200" className="overflow-visible font-sans">
              {/* Diamond Bridge Nodes: A(40,100), B(160,35), C(280,100), D(160,165) */}
              {/* Arm AB */}
              <line x1="40" y1="100" x2="160" y2="35" stroke="#38bdf8" strokeWidth="2" />
              <text x="88" y="58" fill="#38bdf8" fontSize="12" fontWeight="bold">3 mΩ</text>
              
              {/* Arm BC (Semiconductor Arm) */}
              <line x1="160" y1="35" x2="280" y2="100" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="228" y="58" fill="#f43f5e" fontSize="12" fontWeight="bold">BC (Semiconductor)</text>
              
              {/* Arm AD */}
              <line x1="40" y1="100" x2="160" y2="165" stroke="#38bdf8" strokeWidth="2" />
              <text x="88" y="148" fill="#38bdf8" fontSize="12" fontWeight="bold">1 mΩ</text>
              
              {/* Arm CD */}
              <line x1="160" y1="165" x2="280" y2="100" stroke="#38bdf8" strokeWidth="2" />
              <text x="228" y="148" fill="#38bdf8" fontSize="12" fontWeight="bold">0.8 mΩ</text>
              
              {/* Galvanometer Branch B to D */}
              <line x1="160" y1="35" x2="160" y2="82" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="160" cy="100" r="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />
              <text x="160" y="105" fill="#a78bfa" fontSize="14" fontWeight="extrabold" textAnchor="middle">G</text>
              <line x1="160" y1="118" x2="160" y2="165" stroke="#a78bfa" strokeWidth="1.5" />
              
              {/* Node Labels */}
              <circle cx="40" cy="100" r="4.5" fill="#f8fafc" />
              <text x="24" y="104" fill="#f8fafc" fontSize="14" fontWeight="bold">A</text>
              
              <circle cx="160" cy="35" r="4.5" fill="#f8fafc" />
              <text x="160" y="24" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">B</text>
              
              <circle cx="280" cy="100" r="4.5" fill="#f8fafc" />
              <text x="294" y="104" fill="#f8fafc" fontSize="14" fontWeight="bold">C</text>
              
              <circle cx="160" cy="165" r="4.5" fill="#f8fafc" />
              <text x="160" y="184" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">D</text>
              
              {/* Voltage source 5 mV indicator */}
              <text x="160" y="196" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">V = 5 mV applied between A and C</text>
            </svg>
            <div className="text-[11px] font-semibold text-slate-400 text-center pt-1">
              {'Bridge balance condition: R_AB / R_BC = R_AD / R_CD ⟹ R_BC = 2.4 mΩ'}
            </div>
          </div>
        </div>
      );

    case 'simple_pendulum_lt2':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Length (L) vs Square of Time Period (T²) Candidate Graphs:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
            {/* Graph (1) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(1)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="162" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold">L</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">T²</text>
                <text x="20" y="96" fill="#94a3b8" fontSize="10">O</text>
                <path d="M 30,85 Q 50,30 145,25" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (2) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(2)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="162" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold">L</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">T²</text>
                <text x="20" y="96" fill="#94a3b8" fontSize="10">O</text>
                <line x1="30" y1="25" x2="145" y2="85" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (3) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(3)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="162" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold">L</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">T²</text>
                <text x="20" y="96" fill="#94a3b8" fontSize="10">O</text>
                <line x1="30" y1="85" x2="145" y2="25" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (4) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(4)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="162" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold">L</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">T²</text>
                <text x="20" y="96" fill="#94a3b8" fontSize="10">O</text>
                <path d="M 30,25 Q 45,75 145,80" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'gas_pt_isochoric':
      return (
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-md flex flex-col items-center max-w-full">
            <svg width="340" height="220" viewBox="0 0 340 220" className="overflow-visible">
              {/* Temperature axis */}
              <line x1="30" y1="170" x2="320" y2="170" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="320,166 328,170 320,174" fill="#94a3b8" />
              <text x="325" y="188" fill="#94a3b8" fontSize="11" fontWeight="bold">T (°C)</text>

              {/* Pressure axis at 0 °C */}
              <line x1="170" y1="190" x2="170" y2="25" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="166,25 170,17 174,25" fill="#94a3b8" />
              <text x="165" y="15" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end">P (atm)</text>

              {/* Point K */}
              <circle cx="60" cy="170" r="4.5" fill="#f43f5e" />
              <text x="60" y="190" fill="#f43f5e" fontSize="13" fontWeight="extrabold" textAnchor="middle">K</text>

              {/* 0 °C mark */}
              <line x1="170" y1="166" x2="170" y2="174" stroke="#94a3b8" strokeWidth="2" />
              <text x="170" y="188" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">0°C</text>

              {/* Dashed lines from K to y-axis intercepts */}
              <line x1="60" y1="170" x2="170" y2="115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="60" y1="170" x2="170" y2="90" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="60" y1="170" x2="170" y2="65" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Solid lines for Gas A, B, C */}
              <line x1="170" y1="65" x2="300" y2="30" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="305" y="34" fill="#38bdf8" fontSize="12" fontWeight="bold">Gas A</text>

              <line x1="170" y1="90" x2="300" y2="60" stroke="#a78bfa" strokeWidth="2.5" />
              <text x="305" y="64" fill="#a78bfa" fontSize="12" fontWeight="bold">Gas B</text>

              <line x1="170" y1="115" x2="300" y2="95" stroke="#34d399" strokeWidth="2.5" />
              <text x="305" y="99" fill="#34d399" fontSize="12" fontWeight="bold">Gas C</text>
            </svg>
          </div>
        </div>
      );

    case 'ydse_thin_plate':
      return (
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-md flex flex-col items-center max-w-full">
            <svg width="320" height="200" viewBox="0 0 320 200" className="overflow-visible">
              {/* Slit plane */}
              <line x1="60" y1="20" x2="60" y2="65" stroke="#64748b" strokeWidth="4" />
              <line x1="60" y1="75" x2="60" y2="125" stroke="#64748b" strokeWidth="4" />
              <line x1="60" y1="135" x2="60" y2="180" stroke="#64748b" strokeWidth="4" />

              <text x="45" y="73" fill="#38bdf8" fontSize="12" fontWeight="bold">S₁</text>
              <text x="45" y="133" fill="#38bdf8" fontSize="12" fontWeight="bold">S₂</text>

              {/* Thin plate in front of S1 */}
              <rect x="75" y="62" width="18" height="22" fill="#fbbf24" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="84" y="54" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">t = 10 µm</text>
              <text x="84" y="76" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">µ = 1.2</text>

              {/* Screen */}
              <line x1="260" y1="20" x2="260" y2="180" stroke="#94a3b8" strokeWidth="3" />
              <text x="268" y="30" fill="#94a3b8" fontSize="11" fontWeight="bold">Screen</text>

              {/* Optical rays */}
              <line x1="60" y1="70" x2="260" y2="85" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="60" y1="130" x2="260" y2="85" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Shifted Central Maxima */}
              <circle cx="260" cy="85" r="4" fill="#f43f5e" />
              <text x="268" y="89" fill="#f43f5e" fontSize="11" fontWeight="bold">P (Shifted Central Max)</text>

              {/* Central axis */}
              <line x1="60" y1="100" x2="260" y2="100" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              <text x="268" y="104" fill="#64748b" fontSize="10">O (Original Center)</text>

              <line x1="250" y1="85" x2="250" y2="100" stroke="#34d399" strokeWidth="1.5" />
              <text x="235" y="96" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="end">Δx = xβ₀</text>
            </svg>
          </div>
        </div>
      );

    case 'sn1_rate_concentration':
      return (
        <div className="my-4 flex flex-col items-center space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Candidate Reaction Rate Graphs:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
            {/* Graph (1) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(1)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="145" y="98" fill="#cbd5e1" fontSize="9" fontWeight="bold">[(C₆H₅)₃C-Cl]</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">Rate</text>
                <text x="20" y="96" fill="#64748b" fontSize="10">0</text>
                <line x1="30" y1="45" x2="145" y2="45" stroke="#818cf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (2) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(2)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="155" y="98" fill="#cbd5e1" fontSize="9.5" fontWeight="bold">[OH⁻]</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">Rate</text>
                <text x="20" y="96" fill="#64748b" fontSize="10">0</text>
                <line x1="30" y1="85" x2="145" y2="25" stroke="#818cf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (3) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(3)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="145" y="98" fill="#cbd5e1" fontSize="9" fontWeight="bold">[(C₆H₅)₃C-Cl]</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">Rate</text>
                <text x="20" y="96" fill="#64748b" fontSize="10">0</text>
                <line x1="30" y1="85" x2="145" y2="25" stroke="#818cf8" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Graph (4) */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-start shadow-md">
              <span className="font-extrabold text-amber-400 text-xs mb-1">(4)</span>
              <svg width="180" height="110" viewBox="0 0 180 110" className="overflow-visible font-sans">
                <line x1="30" y1="85" x2="160" y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="30" y1="85" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
                <polygon points="160,85 154,82 154,88" fill="#cbd5e1" />
                <polygon points="30,15 27,21 33,21" fill="#cbd5e1" />
                <text x="145" y="98" fill="#cbd5e1" fontSize="9" fontWeight="bold">[Pyridine]</text>
                <text x="18" y="20" fill="#cbd5e1" fontSize="10" fontWeight="bold">Rate</text>
                <text x="20" y="96" fill="#64748b" fontSize="10">0</text>
                <line x1="30" y1="85" x2="145" y2="25" stroke="#818cf8" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'freundlich_isotherm':
      return (
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-md flex flex-col items-center max-w-full">
            <svg width="300" height="210" viewBox="0 0 300 210" className="overflow-visible">
              {/* Axes */}
              <line x1="50" y1="170" x2="270" y2="170" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="270,166 278,170 270,174" fill="#94a3b8" />
              <line x1="50" y1="170" x2="50" y2="25" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="46,25 50,17 54,25" fill="#94a3b8" />

              <text x="275" y="175" fill="#94a3b8" fontSize="12" fontWeight="bold">log P</text>
              <text x="45" y="20" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="end">log (x/m)</text>
              <text x="36" y="185" fill="#64748b" fontSize="11">0</text>

              {/* Freundlich line */}
              <line x1="50" y1="120" x2="230" y2="40" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="120" r="4" fill="#f59e0b" />
              <circle cx="230" cy="40" r="4" fill="#f59e0b" />

              {/* Intercept bracket */}
              <line x1="38" y1="120" x2="46" y2="120" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="38" y1="170" x2="46" y2="170" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="42" y1="120" x2="42" y2="170" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="35" y="148" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="end">log K</text>

              {/* Slope triangle */}
              <line x1="140" y1="80" x2="190" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="190" y1="80" x2="190" y2="58" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <text x="198" y="72" fill="#38bdf8" fontSize="11" fontWeight="bold">Slope = 1/n</text>
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
}



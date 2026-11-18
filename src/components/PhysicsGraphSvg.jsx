import React from 'react';

export default function PhysicsGraphSvg({ graphId, className = "w-full h-48" }) {
  // SVG ViewBox 0 0 320 200
  switch (graphId) {
    case 'graph_xt_const_v':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          {/* Axes */}
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="285" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Time (t)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Position (x)</text>
          {/* Line */}
          <line x1="40" y1="140" x2="260" y2="40" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="40" cy="140" r="4" fill="#38bdf8" />
          <text x="32" y="144" fill="#a5f3fc" fontSize="12" textAnchor="end" fontWeight="bold">x₀</text>
          <text x="180" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold">Slope = v (const)</text>
        </svg>
      );

    case 'graph_vt_const_a':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Shaded Area under v-t curve */}
          <polygon points="40,130 240,40 240,160 40,160" fill="url(#areaGrad)" />
          {/* Axes */}
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="285" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Time (t)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Velocity (v)</text>
          {/* Line */}
          <line x1="40" y1="130" x2="240" y2="40" stroke="#38bdf8" strokeWidth="3.5" />
          <line x1="240" y1="40" x2="240" y2="160" stroke="#94a3b8" strokeDasharray="4,4" />
          <text x="32" y="134" fill="#a5f3fc" fontSize="12" textAnchor="end" fontWeight="bold">u</text>
          <text x="248" y="42" fill="#a5f3fc" fontSize="12" fontWeight="bold">v</text>
          <text x="110" y="125" fill="#38bdf8" fontSize="12" fontWeight="bold">Area = Displacement (s)</text>
          <text x="115" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold">Slope = a</text>
        </svg>
      );

    case 'graph_projectile_trajectory':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          {/* Axes */}
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="285" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Range (x)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Height (y)</text>
          {/* Parabola */}
          <path d="M 40 160 Q 150 20 260 160" fill="none" stroke="#818cf8" strokeWidth="3.5" />
          {/* Apex H_max */}
          <line x1="150" y1="55" x2="150" y2="160" stroke="#a5b4fc" strokeDasharray="4,4" />
          <circle cx="150" cy="55" r="4" fill="#818cf8" />
          <text x="155" y="50" fill="#a5b4fc" fontSize="11" fontWeight="bold">Apex (H_max)</text>
          <text x="250" y="175" fill="#c084fc" fontSize="11" fontWeight="bold">R (Range)</text>
        </svg>
      );

    case 'graph_friction_applied':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="230" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Applied Force (F)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Friction (f)</text>
          {/* Path: 45 deg line to peak, drop to plateau */}
          <path d="M 40 160 L 150 50 L 170 75 L 270 75" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
          <circle cx="150" cy="50" r="4" fill="#f43f5e" />
          <line x1="40" y1="50" x2="150" y2="50" stroke="#fda4af" strokeDasharray="3,3" />
          <text x="45" y="45" fill="#fda4af" fontSize="10" fontWeight="bold">f_s(max)</text>
          <line x1="40" y1="75" x2="170" y2="75" stroke="#f43f5e" strokeDasharray="3,3" />
          <text x="45" y="88" fill="#f43f5e" fontSize="10" fontWeight="bold">f_k</text>
          <text x="80" y="120" fill="#fb7185" fontSize="11">Static Region</text>
          <text x="200" y="65" fill="#fb7185" fontSize="11">Kinetic Region</text>
        </svg>
      );

    case 'graph_shm_energy':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="280" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="160" x2="160" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="270" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Position (x)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Energy (E)</text>
          {/* Total Energy Line */}
          <line x1="50" y1="40" x2="270" y2="40" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="275" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold">Total E</text>
          {/* U(x) Upright Parabola */}
          <path d="M 50 40 Q 160 160 270 40" fill="none" stroke="#f59e0b" strokeWidth="3" />
          {/* K(x) Inverted Parabola */}
          <path d="M 50 160 Q 160 40 270 160" fill="none" stroke="#10b981" strokeWidth="3" />
          <text x="50" y="180" fill="#94a3b8" fontSize="10">-A</text>
          <text x="155" y="180" fill="#94a3b8" fontSize="10">0</text>
          <text x="265" y="180" fill="#94a3b8" fontSize="10">+A</text>
          <text x="170" y="80" fill="#10b981" fontSize="10" fontWeight="bold">K(x)</text>
          <text x="170" y="130" fill="#f59e0b" fontSize="10" fontWeight="bold">U(x)</text>
        </svg>
      );

    case 'graph_pv_isothermal_adiabatic':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="275" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Volume (V)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Pressure (P)</text>
          {/* Isothermal Curve (flatter) */}
          <path d="M 60 40 Q 120 120 270 145" fill="none" stroke="#38bdf8" strokeWidth="3" />
          {/* Adiabatic Curve (steeper) */}
          <path d="M 60 40 Q 100 135 240 158" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6,2" />
          <text x="180" y="125" fill="#38bdf8" fontSize="11" fontWeight="bold">Isothermal (PV=C)</text>
          <text x="130" y="150" fill="#f43f5e" fontSize="11" fontWeight="bold">Adiabatic (PV^γ=C)</text>
        </svg>
      );

    case 'graph_maxwell_distribution':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="260" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Speed (v)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">N(v)</text>
          {/* Distribution Curve */}
          <path d="M 40 160 C 70 60, 110 30, 140 70 C 180 120, 230 150, 280 158" fill="none" stroke="#a855f7" strokeWidth="3.5" />
          <line x1="105" y1="38" x2="105" y2="160" stroke="#c084fc" strokeDasharray="3,3" />
          <line x1="125" y1="48" x2="125" y2="160" stroke="#38bdf8" strokeDasharray="3,3" />
          <line x1="145" y1="75" x2="145" y2="160" stroke="#f59e0b" strokeDasharray="3,3" />
          <text x="95" y="175" fill="#c084fc" fontSize="9" fontWeight="bold">v_mp</text>
          <text x="120" y="175" fill="#38bdf8" fontSize="9" fontWeight="bold">v_avg</text>
          <text x="142" y="175" fill="#f59e0b" fontSize="9" fontWeight="bold">v_rms</text>
        </svg>
      );

    case 'graph_blackbody_radiation':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="250" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Wavelength (λ)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Intensity E_λ</text>
          {/* T3 High Temp Curve */}
          <path d="M 40 160 C 60 30, 90 20, 120 70 C 160 120, 220 155, 280 158" fill="none" stroke="#f43f5e" strokeWidth="3" />
          {/* T2 Mid Temp Curve */}
          <path d="M 40 160 C 70 80, 110 70, 140 100 C 180 135, 230 156, 280 159" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          {/* T1 Low Temp Curve */}
          <path d="M 40 160 C 80 120, 130 110, 160 130 C 190 148, 240 158, 280 160" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <text x="100" y="30" fill="#f43f5e" fontSize="10" fontWeight="bold">T3 (Highest)</text>
          <text x="120" y="80" fill="#f59e0b" fontSize="10" fontWeight="bold">T2</text>
          <text x="140" y="120" fill="#38bdf8" fontSize="10" fontWeight="bold">T1</text>
        </svg>
      );

    case 'graph_charge_efield_potential':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="260" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Distance (r)</text>
          <text x="15" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Field/Potential</text>
          {/* E ~ 1/r^2 (steeper) */}
          <path d="M 50 30 Q 70 140 280 158" fill="none" stroke="#f43f5e" strokeWidth="3" />
          {/* V ~ 1/r (flatter) */}
          <path d="M 50 30 Q 100 100 280 145" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5,3" />
          <text x="160" y="90" fill="#38bdf8" fontSize="11" fontWeight="bold">V ∝ 1/r</text>
          <text x="100" y="130" fill="#f43f5e" fontSize="11" fontWeight="bold">E ∝ 1/r²</text>
        </svg>
      );

    case 'graph_capacitor_charging':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="260" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Time (t)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Q, I</text>
          {/* Charge Q(t) rising */}
          <path d="M 40 160 Q 80 40 270 40" fill="none" stroke="#10b981" strokeWidth="3" />
          <line x1="40" y1="40" x2="270" y2="40" stroke="#64748b" strokeDasharray="4,4" />
          <text x="275" y="45" fill="#10b981" fontSize="10" fontWeight="bold">Q_0</text>
          {/* Current I(t) falling */}
          <path d="M 40 40 Q 80 150 270 160" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4,2" />
          <text x="160" y="60" fill="#10b981" fontSize="11" fontWeight="bold">Q(t) = Q0(1 - e^-t/τ)</text>
          <text x="130" y="130" fill="#f43f5e" fontSize="11" fontWeight="bold">I(t) = I0 e^-t/τ</text>
        </svg>
      );

    case 'graph_hysteresis_loop':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          {/* Axes at center */}
          <line x1="40" y1="100" x2="280" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="160" y1="180" x2="160" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="275" y="95" fill="#94a3b8" fontSize="11" fontWeight="bold">H</text>
          <text x="165" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">B</text>
          {/* S-shaped Hysteresis Loop */}
          <path d="M 160 100 C 200 40, 240 30, 250 30 C 200 50, 160 60, 160 60 C 120 60, 80 150, 70 170 C 120 150, 160 140, 160 140 C 200 140, 240 50, 250 30" fill="none" stroke="#a855f7" strokeWidth="3" />
          <circle cx="160" cy="60" r="3.5" fill="#f43f5e" />
          <text x="165" y="65" fill="#f43f5e" fontSize="9" fontWeight="bold">Retentivity</text>
          <circle cx="115" cy="100" r="3.5" fill="#38bdf8" />
          <text x="85" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold">Coercivity</text>
        </svg>
      );

    case 'graph_lcr_resonance':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="250" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Frequency (f)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Current (I)</text>
          {/* Low R Sharp Peak */}
          <path d="M 40 155 C 100 150, 140 30, 160 30 C 180 30, 220 150, 280 155" fill="none" stroke="#38bdf8" strokeWidth="3" />
          {/* High R Flat Peak */}
          <path d="M 40 155 C 100 145, 140 90, 160 90 C 180 90, 220 145, 280 155" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
          <line x1="160" y1="30" x2="160" y2="160" stroke="#38bdf8" strokeDasharray="3,3" />
          <text x="150" y="175" fill="#38bdf8" fontSize="10" fontWeight="bold">f_r (Resonance)</text>
          <text x="170" y="45" fill="#38bdf8" fontSize="10" fontWeight="bold">Low R (High Q)</text>
          <text x="170" y="100" fill="#f59e0b" fontSize="10" fontWeight="bold">High R (Low Q)</text>
        </svg>
      );

    case 'graph_prism_deviation':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="230" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Angle of Incidence (i)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Deviation (δ)</text>
          {/* U-Shaped Deviation Curve */}
          <path d="M 60 40 Q 160 180 270 60" fill="none" stroke="#a855f7" strokeWidth="3.5" />
          <line x1="150" y1="110" x2="150" y2="160" stroke="#c084fc" strokeDasharray="3,3" />
          <line x1="40" y1="110" x2="150" y2="110" stroke="#c084fc" strokeDasharray="3,3" />
          <circle cx="150" cy="110" r="4" fill="#f43f5e" />
          <text x="45" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold">δ_min</text>
          <text x="140" y="175" fill="#c084fc" fontSize="10" fontWeight="bold">i = e</text>
        </svg>
      );

    case 'graph_ydse_intensity':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="160" x2="160" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="260" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Position (y)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Intensity (I)</text>
          {/* Cosine Squared Waves */}
          <path d="M 40 160 Q 60 40 80 160 Q 100 40 120 160 Q 140 40 160 160 Q 180 40 200 160 Q 220 40 240 160 Q 260 40 280 160" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <line x1="40" y1="40" x2="280" y2="40" stroke="#64748b" strokeDasharray="4,4" />
          <text x="285" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold">4 I_0</text>
          <text x="145" y="175" fill="#94a3b8" fontSize="10">y=0 (Central)</text>
        </svg>
      );

    case 'graph_photoelectric_stopping_potential':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="130" x2="290" y2="130" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="250" y="150" fill="#94a3b8" fontSize="12" fontWeight="bold">Frequency (ν)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">Stopping Potential (V0)</text>
          {/* Straight line with Intercept */}
          <line x1="110" y1="130" x2="270" y2="30" stroke="#f59e0b" strokeWidth="3.5" />
          <line x1="40" y1="165" x2="110" y2="130" stroke="#f59e0b" strokeDasharray="3,3" />
          <circle cx="110" cy="130" r="4" fill="#f59e0b" />
          <text x="100" y="145" fill="#f59e0b" fontSize="10" fontWeight="bold">ν_0 (Threshold)</text>
          <text x="170" y="65" fill="#fbbf24" fontSize="11" fontWeight="bold">Slope = h/e</text>
          <text x="45" y="160" fill="#f43f5e" fontSize="10" fontWeight="bold">-Φ/e</text>
        </svg>
      );

    case 'graph_binding_energy_curve':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="250" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold">Mass Number (A)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="12" fontWeight="bold">BE/A (MeV)</text>
          {/* Binding Energy Curve */}
          <path d="M 40 160 L 50 110 L 55 130 L 65 70 L 75 90 L 90 40 L 130 35 C 180 45, 230 65, 280 85" fill="none" stroke="#10b981" strokeWidth="3" />
          <circle cx="130" cy="35" r="4" fill="#f43f5e" />
          <text x="135" y="30" fill="#f43f5e" fontSize="10" fontWeight="bold">Fe-56 (8.75 MeV)</text>
          <text x="60" y="150" fill="#34d399" fontSize="10">Fusion Region</text>
          <text x="210" y="100" fill="#34d399" fontSize="10">Fission Region</text>
        </svg>
      );

    case 'graph_diode_iv_characteristic':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          {/* Axes at center */}
          <line x1="40" y1="120" x2="280" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="140" y1="180" x2="140" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="270" y="115" fill="#94a3b8" fontSize="11" fontWeight="bold">V</text>
          <text x="145" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">I (mA)</text>
          {/* Forward Bias Curve */}
          <path d="M 140 120 Q 200 120 250 30" fill="none" stroke="#10b981" strokeWidth="3" />
          <text x="200" y="110" fill="#10b981" fontSize="9" fontWeight="bold">Knee V (0.7V)</text>
          {/* Reverse Bias & Zener Breakdown */}
          <path d="M 140 120 L 70 122 L 70 175" fill="none" stroke="#f43f5e" strokeWidth="3" />
          <text x="50" y="140" fill="#f43f5e" fontSize="9" fontWeight="bold">Zener V_Z</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="40" y1="160" x2="280" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 40 160 Q 120 40 270 140" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <text x="140" y="90" fill="#38bdf8" fontSize="12" fontWeight="bold">Physical Trend Curve</text>
        </svg>
      );
  }
}

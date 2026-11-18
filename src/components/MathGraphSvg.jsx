import React from 'react';

export default function MathGraphSvg({ graphId, className = "w-full h-48" }) {
  // SVG ViewBox 0 0 320 200
  switch (graphId) {
    case 'graph_y_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="118" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="170" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Line y = x */}
          <line x1="60" y1="180" x2="260" y2="20" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="160" cy="100" r="4" fill="#10b981" />
          <text x="210" y="55" fill="#34d399" fontSize="12" fontWeight="bold">y = x (45°)</text>
        </svg>
      );

    case 'graph_y_x2':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="178" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="170" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Parabola y = x^2 */}
          <path d="M 50 20 Q 160 175 270 20" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="160" cy="160" r="4" fill="#10b981" />
          <text x="180" y="90" fill="#34d399" fontSize="12" fontWeight="bold">y = x²</text>
          <text x="165" y="175" fill="#a7f3d0" fontSize="10">Vertex (0,0)</text>
        </svg>
      );

    case 'graph_y_x3':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="118" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="170" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Cubic S-curve */}
          <path d="M 60 180 C 130 160 140 100 160 100 C 180 100 190 40 260 20" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="160" cy="100" r="4" fill="#10b981" />
          <text x="190" y="55" fill="#34d399" fontSize="12" fontWeight="bold">y = x³</text>
        </svg>
      );

    case 'graph_y_abs_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="178" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="170" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* V-Shape y = |x| */}
          <path d="M 40 40 L 160 160 L 280 40" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="160" cy="160" r="4" fill="#10b981" />
          <text x="190" y="80" fill="#34d399" fontSize="12" fontWeight="bold">y = |x|</text>
          <text x="100" y="175" fill="#a7f3d0" fontSize="10">Corner at (0,0)</text>
        </svg>
      );

    case 'graph_y_inv_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="118" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="170" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Branch 1 (Q-I) */}
          <path d="M 175 25 Q 185 85 285 95" fill="none" stroke="#10b981" strokeWidth="3.5" />
          {/* Branch 2 (Q-III) */}
          <path d="M 35 105 Q 135 115 145 175" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <text x="210" y="55" fill="#34d399" fontSize="12" fontWeight="bold">y = 1/x</text>
        </svg>
      );

    case 'graph_y_sqrt_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="160" x2="290" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="50" y1="190" x2="50" y2="10" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="178" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="60" y="20" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Curve y = sqrt(x) */}
          <path d="M 50 160 Q 120 70 280 40" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="50" cy="160" r="4" fill="#10b981" />
          <text x="160" y="75" fill="#34d399" fontSize="12" fontWeight="bold">y = √x</text>
        </svg>
      );

    case 'graph_sin_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="60" y1="180" x2="60" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="290" y="118" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="70" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Sine Curve */}
          <path d="M 60 100 Q 110 30 160 100 T 260 100" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <line x1="60" y1="40" x2="280" y2="40" stroke="#94a3b8" strokeDasharray="3,3" />
          <line x1="60" y1="160" x2="280" y2="160" stroke="#94a3b8" strokeDasharray="3,3" />
          <text x="40" y="45" fill="#a7f3d0" fontSize="10">+1</text>
          <text x="40" y="165" fill="#a7f3d0" fontSize="10">-1</text>
          <text x="160" y="118" fill="#a7f3d0" fontSize="10">π</text>
          <text x="255" y="118" fill="#a7f3d0" fontSize="10">2π</text>
          <text x="115" y="45" fill="#34d399" fontSize="11" fontWeight="bold">y = sin x</text>
        </svg>
      );

    case 'graph_cos_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="60" y1="180" x2="60" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <text x="290" y="118" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
          <text x="70" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
          {/* Cosine Curve */}
          <path d="M 60 40 Q 110 100 160 160 T 260 40" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="60" cy="40" r="4" fill="#10b981" />
          <text x="40" y="45" fill="#a7f3d0" fontSize="10">+1</text>
          <text x="40" y="165" fill="#a7f3d0" fontSize="10">-1</text>
          <text x="180" y="45" fill="#34d399" fontSize="11" fontWeight="bold">y = cos x</text>
        </svg>
      );

    case 'graph_tan_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Asymptotes at x = 80 and x = 240 */}
          <line x1="80" y1="10" x2="80" y2="190" stroke="#f43f5e" strokeDasharray="4,4" />
          <line x1="240" y1="10" x2="240" y2="190" stroke="#f43f5e" strokeDasharray="4,4" />
          {/* Tan curve between asymptotes */}
          <path d="M 90 180 C 130 160 145 100 160 100 C 175 100 190 40 230 20" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <text x="70" y="195" fill="#fda4af" fontSize="10">-π/2</text>
          <text x="230" y="195" fill="#fda4af" fontSize="10">+π/2</text>
          <text x="180" y="60" fill="#34d399" fontSize="11" fontWeight="bold">y = tan x</text>
        </svg>
      );

    case 'graph_abs_sin_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="160" x2="300" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="50" y1="190" x2="50" y2="20" stroke="#94a3b8" strokeWidth="2" />
          {/* Rectified sine lobes */}
          <path d="M 50 160 Q 90 50 130 160 Q 170 50 210 160 Q 250 50 290 160" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <text x="140" y="45" fill="#34d399" fontSize="12" fontWeight="bold">y = |sin x|</text>
          <text x="130" y="175" fill="#a7f3d0" fontSize="10">π</text>
          <text x="210" y="175" fill="#a7f3d0" fontSize="10">2π</text>
        </svg>
      );

    case 'graph_inv_sin_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Arcsin curve */}
          <path d="M 90 170 C 130 150 140 100 160 100 C 180 100 190 50 230 30" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="90" cy="170" r="4" fill="#10b981" />
          <circle cx="230" cy="30" r="4" fill="#10b981" />
          <text x="180" y="55" fill="#34d399" fontSize="12" fontWeight="bold">y = arcsin x</text>
          <text x="165" y="30" fill="#a7f3d0" fontSize="10">π/2</text>
          <text x="165" y="180" fill="#a7f3d0" fontSize="10">-π/2</text>
        </svg>
      );

    case 'graph_inv_tan_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Asymptotes y = π/2 and y = -π/2 */}
          <line x1="20" y1="40" x2="300" y2="40" stroke="#f43f5e" strokeDasharray="4,4" />
          <line x1="20" y1="160" x2="300" y2="160" stroke="#f43f5e" strokeDasharray="4,4" />
          <path d="M 30 150 Q 100 140 160 100 Q 220 60 290 50" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <text x="220" y="75" fill="#34d399" fontSize="12" fontWeight="bold">y = arctan x</text>
          <text x="25" y="35" fill="#fda4af" fontSize="10">y = π/2</text>
          <text x="25" y="175" fill="#fda4af" fontSize="10">y = -π/2</text>
        </svg>
      );

    case 'graph_exp_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="160" x2="300" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="100" y1="190" x2="100" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Curve y = e^x */}
          <path d="M 20 158 Q 100 155 240 20" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="100" cy="120" r="4" fill="#10b981" />
          <text x="110" y="120" fill="#a7f3d0" fontSize="10">(0,1)</text>
          <text x="180" y="50" fill="#34d399" fontSize="12" fontWeight="bold">y = eⁿ</text>
        </svg>
      );

    case 'graph_ln_x':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="80" y1="190" x2="80" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Curve y = ln x */}
          <path d="M 85 185 Q 95 100 280 40" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="140" cy="100" r="4" fill="#10b981" />
          <text x="140" y="118" fill="#a7f3d0" fontSize="10">(1,0)</text>
          <text x="180" y="55" fill="#34d399" fontSize="12" fontWeight="bold">y = ln x</text>
        </svg>
      );

    case 'graph_circle':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="30" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Circle */}
          <circle cx="160" cy="100" r="65" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="160" cy="100" r="4" fill="#10b981" />
          <line x1="160" y1="100" x2="225" y2="100" stroke="#34d399" strokeWidth="2" strokeDasharray="3,3" />
          <text x="185" y="95" fill="#34d399" fontSize="11" fontWeight="bold">r</text>
          <text x="175" y="45" fill="#34d399" fontSize="11" fontWeight="bold">x² + y² = r²</text>
        </svg>
      );

    case 'graph_parabola':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="80" y1="190" x2="80" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Directrix x = -a */}
          <line x1="30" y1="10" x2="30" y2="190" stroke="#f43f5e" strokeDasharray="4,4" />
          {/* Parabola opening right */}
          <path d="M 280 20 Q 80 100 280 180" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="130" cy="100" r="4" fill="#34d399" />
          <text x="130" y="118" fill="#a7f3d0" fontSize="10">Focus (a,0)</text>
          <text x="25" y="195" fill="#fda4af" fontSize="10">x = -a</text>
          <text x="190" y="50" fill="#34d399" fontSize="12" fontWeight="bold">y² = 4ax</text>
        </svg>
      );

    case 'graph_ellipse':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Ellipse */}
          <ellipse cx="160" cy="100" rx="110" ry="60" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <circle cx="100" cy="100" r="4" fill="#f59e0b" />
          <circle cx="220" cy="100" r="4" fill="#f59e0b" />
          <text x="90" y="118" fill="#fcd34d" fontSize="10">F1(-ae,0)</text>
          <text x="210" y="118" fill="#fcd34d" fontSize="10">F2(ae,0)</text>
          <text x="130" y="30" fill="#34d399" fontSize="11" fontWeight="bold">x²/a² + y²/b² = 1</text>
        </svg>
      );

    case 'graph_hyperbola':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
          <line x1="160" y1="190" x2="160" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Asymptotes */}
          <line x1="30" y1="180" x2="290" y2="20" stroke="#94a3b8" strokeDasharray="3,3" />
          <line x1="30" y1="20" x2="290" y2="180" stroke="#94a3b8" strokeDasharray="3,3" />
          {/* Left and Right branches */}
          <path d="M 40 20 Q 110 100 40 180" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <path d="M 280 20 Q 210 100 280 180" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <text x="125" y="45" fill="#34d399" fontSize="11" fontWeight="bold">x²/a² - y²/b² = 1</text>
        </svg>
      );

    case 'graph_max_min':
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <line x1="20" y1="160" x2="300" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="190" x2="40" y2="10" stroke="#94a3b8" strokeWidth="2" />
          {/* Curve with peak and trough */}
          <path d="M 40 140 C 90 20 140 30 180 140 C 210 200 250 180 290 80" fill="none" stroke="#10b981" strokeWidth="3.5" />
          {/* Max Peak */}
          <circle cx="115" cy="40" r="4" fill="#f43f5e" />
          <line x1="75" y1="40" x2="155" y2="40" stroke="#fda4af" strokeWidth="2" strokeDasharray="3,3" />
          <text x="80" y="30" fill="#fda4af" fontSize="10" fontWeight="bold">Local Max (f'' &lt; 0)</text>
          {/* Min Trough */}
          <circle cx="215" cy="170" r="4" fill="#38bdf8" />
          <line x1="175" y1="170" x2="255" y2="170" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="3,3" />
          <text x="180" y="185" fill="#7dd3fc" fontSize="10" fontWeight="bold">Local Min (f'' &gt; 0)</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 200" className={className}>
          <rect width="320" height="200" rx="12" fill="#0f172a" />
          <text x="160" y="105" fill="#94a3b8" fontSize="12" textAnchor="middle">Visual Graph Representation</text>
        </svg>
      );
  }
}

export const MASTER_PHYSICS_GRAPHS = [
  // Mechanics
  {
    id: "graph_xt_const_v",
    title: "Position-Time (x-t) Graph — Uniform Motion",
    category: "Mechanics",
    description: "Straight line with constant positive slope. Slope of $x-t$ graph represents uniform velocity ($v = \\text{constant}$).",
    equation: "x(t) = x_0 + v t",
    keyFeature: "Constant positive slope = Constant velocity"
  },
  {
    id: "graph_vt_const_a",
    title: "Velocity-Time (v-t) Graph — Uniform Acceleration",
    category: "Mechanics",
    description: "Straight inclined line. Slope of $v-t$ graph equals acceleration ($a$). Area under $v-t$ curve equals displacement ($s$).",
    equation: "v(t) = u + a t",
    keyFeature: "Slope = Acceleration, Area = Displacement"
  },
  {
    id: "graph_projectile_trajectory",
    title: "Projectile Parabolic Trajectory (y vs x)",
    category: "Mechanics",
    description: "Inverted parabola. Peak is at $x = R/2, y = H_{\\text{max}}$. Horizontal velocity $v_x = u \\cos\\theta$ is constant throughout.",
    equation: "y = x \\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}",
    keyFeature: "Symmetrical inverted parabola with apex at (R/2, H)"
  },
  {
    id: "graph_friction_applied",
    title: "Friction Force vs Applied External Force",
    category: "Mechanics",
    description: "Linear increase in static region ($f_s = F_{\\text{ext}}$) up to limiting friction $f_{s,\\text{max}} = \\mu_s N$, then slight drop to constant kinetic friction $f_k = \\mu_k N$.",
    equation: "f_s = F_{\\text{ext}} \\quad (F < f_{s,\\text{max}}), \\quad f_k = \\mu_k N",
    keyFeature: "Peak at limiting friction $f_{s,\\text{max}}$, then constant kinetic $f_k$"
  },
  {
    id: "graph_shm_energy",
    title: "SHM Energy vs Position (E, K, U vs x)",
    category: "Mechanics",
    description: "Inverted parabola for Kinetic Energy $K(x)$, upright parabola for Potential Energy $U(x)$, and flat horizontal line for Total Mechanical Energy $E = K + U$. Intersect at $x = \\pm A/\\sqrt{2}$.",
    equation: "K(x) = \\frac{1}{2} m \\omega^2 (A^2 - x^2), \\quad U(x) = \\frac{1}{2} m \\omega^2 x^2, \\quad E = \\frac{1}{2} m \\omega^2 A^2",
    keyFeature: "K is max at x=0; U is max at x=±A; Total E is constant"
  },

  // Thermal Physics
  {
    id: "graph_pv_isothermal_adiabatic",
    title: "P-V Diagram — Isothermal vs Adiabatic Curves",
    category: "Thermal Physics",
    description: "Hyperbolic curves. Adiabatic curve is STEEPER than isothermal curve because slope of adiabatic is $\\gamma$ times the slope of isothermal ($|dP/dV|_{\\text{ad}} = \\gamma |dP/dV|_{\\text{iso}}$).",
    equation: "\\text{Isothermal: } P V = C, \\quad \\text{Adiabatic: } P V^\\gamma = C",
    keyFeature: "Adiabatic slope is steeper by factor $\\gamma = C_p/C_v$"
  },
  {
    id: "graph_maxwell_distribution",
    title: "Maxwell-Boltzmann Speed Distribution Curve",
    category: "Thermal Physics",
    description: "Asymmetric bell-shaped curve starting at origin. Peak corresponds to Most Probable Speed $v_{\\text{mp}}$. As temperature $T$ increases, peak shifts right and flattens.",
    equation: "f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 e^{-\\frac{m v^2}{2 k_B T}}",
    keyFeature: "Peak shifts right and broadens as T increases; RAM order"
  },
  {
    id: "graph_blackbody_radiation",
    title: "Blackbody Radiation Spectrum (E_lambda vs lambda)",
    category: "Thermal Physics",
    description: "Asymmetric curve with peak at $\\lambda_{\\text{max}}$. According to Wien's Law, as temperature increases, $\\lambda_{\\text{max}}$ shifts to shorter wavelengths (higher frequency).",
    equation: "\\lambda_{\\text{max}} T = b = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}",
    keyFeature: "Peak wavelength $\\lambda_{\\text{max}} \\propto 1/T$; total area $\\propto T^4$"
  },

  // Electricity & Magnetism
  {
    id: "graph_charge_efield_potential",
    title: "Electric Field & Potential vs Distance for Point Charge",
    category: "Electricity & Magnetism",
    description: "Electric field falls off as $1/r^2$ while potential falls off as $1/r$. $E$-$r$ curve decreases more rapidly than $V$-$r$ curve.",
    equation: "E(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\propto \\frac{1}{r^2}, \\quad V(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r} \\propto \\frac{1}{r}",
    keyFeature: "E drops as 1/r^2 (steeper), V drops as 1/r"
  },
  {
    id: "graph_capacitor_charging",
    title: "Capacitor Charging Curve (Q and I vs t)",
    category: "Electricity & Magnetism",
    description: "Charge $Q(t)$ increases exponentially approaching asymptote $Q_0 = C V_0$. Current $I(t)$ decays exponentially from initial maximum $I_0 = V_0/R$ toward zero.",
    equation: "Q(t) = Q_0 (1 - e^{-t / \\tau}), \\quad I(t) = I_0 e^{-t / \\tau} \\quad (\\tau = R C)",
    keyFeature: "At t = \\tau = RC, charge reaches 63.2% of maximum Q_0"
  },

  // Magnetism & EMI/AC
  {
    id: "graph_hysteresis_loop",
    title: "Ferromagnetic Hysteresis Loop (B vs H)",
    category: "Electricity & Magnetism",
    description: "Closed loop showing lag of magnetic induction $B$ behind magnetizing field $H$. Key parameters: Retentivity (relict $B$ at $H=0$) and Coercivity (reverse $H$ to make $B=0$). Area = Energy loss per cycle.",
    equation: "B = \\mu (H + M)",
    keyFeature: "Retentivity (Y-intercept), Coercivity (X-intercept), Area = Heat Loss"
  },
  {
    id: "graph_lcr_resonance",
    title: "Series LCR Resonance Curve (Current vs Frequency)",
    category: "Electricity & Magnetism",
    description: "Sharp peak at resonance frequency $f_r = \\frac{1}{2\\pi \\sqrt{LC}}$ where impedance $Z = R$ is minimum and current $I_{\\text{rms}} = V_{\\text{rms}}/R$ is maximum. Peak is sharper for smaller resistance $R$ (higher Q-factor).",
    equation: "I(\\omega) = \\frac{V_0}{\\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}}",
    keyFeature: "Peak at resonance frequency f_r; height = V/R"
  },

  // Optics
  {
    id: "graph_prism_deviation",
    title: "Prism Angle of Deviation vs Angle of Incidence (delta vs i)",
    category: "Optics",
    description: "U-shaped curve. Deviation $\\delta$ decreases as incidence $i$ increases, reaches a unique minimum $\\delta_m$ at $i = e$, then increases.",
    equation: "\\delta = i + e - A \\implies \\delta_{\\text{min}} \\text{ when } i = e",
    keyFeature: "Unique minimum deviation \\delta_m at i = e"
  },
  {
    id: "graph_ydse_intensity",
    title: "YDSE Interference Fringe Intensity Pattern",
    category: "Optics",
    description: "Symmetrical sequence of equally spaced bright and dark fringes of EQUAL INTENSITY ($I_{\\text{max}} = 4 I_0$) and EQUAL WIDTH ($\\beta = \\frac{\\lambda D}{d}$).",
    equation: "I(\\theta) = 4 I_0 \\cos^2\\left(\\frac{\\pi d \\sin\\theta}{\\lambda}\\right)",
    keyFeature: "Equally spaced fringes of uniform max intensity 4I_0"
  },

  // Modern Physics & Semiconductors
  {
    id: "graph_photoelectric_stopping_potential",
    title: "Stopping Potential vs Frequency (V_0 vs nu)",
    category: "Modern Physics",
    description: "Straight line with X-intercept equal to threshold frequency $\\nu_0$ and Y-intercept equal to $-\\Phi/e$. Slope is universal constant $h/e$ for all metals.",
    equation: "V_0 = \\left(\\frac{h}{e}\\right) \\nu - \\frac{\\Phi}{e}",
    keyFeature: "Slope = h/e (constant for all metals), X-intercept = threshold frequency"
  },
  {
    id: "graph_binding_energy_curve",
    title: "Binding Energy per Nucleon vs Mass Number (E_bn vs A)",
    category: "Modern Physics",
    description: "Rises steeply for light nuclei, reaches maximum at Fe-56 ($8.75 \\text{ MeV/nucleon}$), then decreases gradually for heavy nuclei. Drives both Fission (heavy $\\to$ mid) and Fusion (light $\\to$ mid).",
    equation: "E_{bn} = \\frac{E_b}{A}",
    keyFeature: "Peak at Fe-56 (8.75 MeV/nucleon); drives Fission and Fusion"
  },
  {
    id: "graph_diode_iv_characteristic",
    title: "p-n Junction Diode V-I Characteristic Curve",
    category: "Semiconductors",
    description: "Forward bias: Exponential current growth after knee voltage ($0.7\\text{V}$ for Si, $0.3\\text{V}$ for Ge). Reverse bias: Extremely small micro-ampere leakage current until Zener/avalanche breakdown voltage.",
    equation: "I = I_0 \\left(e^{\\frac{e V}{\\eta k_B T}} - 1\\right)",
    keyFeature: "Knee voltage in forward bias; Zener breakdown in reverse bias"
  }
];

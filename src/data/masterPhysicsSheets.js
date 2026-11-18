export const MASTER_PHYSICS_SHEETS = [
  {
    id: "sheet_mech",
    title: "1. Mechanics & Kinematics Master Sheet",
    category: "Mechanics",
    summary: "Essential formulas for 1D/2D kinematics, Newton's laws, work-energy, momentum, rotational dynamics, and gravitation.",
    keyFormulas: [
      { name: "Equations of Motion", formula: "$v = u + a t, \\quad s = u t + \\frac{1}{2} a t^2, \\quad v^2 = u^2 + 2 a s$" },
      { name: "Projectile Motion", formula: "$T = \\frac{2 u \\sin\\theta}{g}, \\quad H = \\frac{u^2 \\sin^2\\theta}{2g}, \\quad R = \\frac{u^2 \\sin(2\\theta)}{g}$" },
      { name: "Friction & Repose", formula: "$f_{s,\\text{max}} = \\mu_s N, \\quad f_k = \\mu_k N, \\quad \\tan\\theta_{\\text{repose}} = \\mu_s$" },
      { name: "Work & Energy", formula: "$W = \\int \\vec{F} \\cdot d\\vec{r} = \\Delta K, \\quad U_{\\text{spring}} = \\frac{1}{2} k x^2$" },
      { name: "Rotational Dynamics", formula: "$\\tau = I \\alpha, \\quad L = I \\omega, \\quad K_{\\text{rot}} = \\frac{1}{2} I \\omega^2$" },
      { name: "Gravitation", formula: "$F = \\frac{G M m}{r^2}, \\quad v_e = \\sqrt{2gR}, \\quad v_o = \\sqrt{gR}$" }
    ],
    shortcut: "Pure Rolling Condition: $v_{cm} = R \\omega$. Acceleration down incline: $a = \\frac{g \\sin\\theta}{1 + k^2/R^2}$."
  },
  {
    id: "sheet_em",
    title: "2. Electromagnetism & Circuits Master Sheet",
    category: "Electricity & Magnetism",
    summary: "Coulomb's law, Gauss's law, capacitance, Ohm's law, Biot-Savart, Ampere's law, EMI, and AC LCR resonance.",
    keyFormulas: [
      { name: "Coulomb & Gauss", formula: "$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2}, \\quad \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\epsilon_0}$" },
      { name: "Capacitor & Energy", formula: "$C = \\frac{K \\epsilon_0 A}{d}, \\quad U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}$" },
      { name: "Current & Resistance", formula: "$I = n e A v_d, \\quad R = \\rho \\frac{L}{A}, \\quad V = \\mathcal{E} - I r$" },
      { name: "Magnetic Fields", formula: "$B_{\\text{wire}} = \\frac{\\mu_0 I}{2\\pi r}, \\quad B_{\\text{center}} = \\frac{\\mu_0 I}{2 R}, \\quad B_{\\text{solenoid}} = \\mu_0 n I$" },
      { name: "EMI & Induction", formula: "$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\quad \\mathcal{E}_{\\text{motional}} = B L v, \\quad U_B = \\frac{1}{2} L I^2$" },
      { name: "AC LCR Resonance", formula: "$Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad f_r = \\frac{1}{2\\pi \\sqrt{LC}}, \\quad Q = \\frac{\\omega_0 L}{R}$" }
    ],
    shortcut: "LOAN Mnemonic: Left, Oxidation, Anode, Negative. At resonance in AC: $Z = R$, current is MAXIMUM."
  },
  {
    id: "sheet_optics",
    title: "3. Optics & Wave Physics Master Sheet",
    category: "Optics",
    summary: "Reflection, refraction, Lens Maker's formula, optical instruments, YDSE interference, diffraction, and polarization.",
    keyFormulas: [
      { name: "Refraction & TIR", formula: "$n_1 \\sin i = n_2 \\sin r, \\quad \\sin i_c = \\frac{1}{n}, \\quad h' = \\frac{h}{n}$" },
      { name: "Lens & Mirror Formulas", formula: "$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad \\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\quad P = P_1 + P_2$" },
      { name: "Prism & Instruments", formula: "$n = \\frac{\\sin\\left(\\frac{A+\\delta_m}{2}\\right)}{\\sin(A/2)}, \\quad M_{\\text{scope}} = -\\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right), \\quad M_{\\text{scope}} = -\\frac{f_o}{f_e}$" },
      { name: "Interference (YDSE)", formula: "$\\beta = \\frac{\\lambda D}{d}, \\quad y_n^{\\text{bright}} = \\frac{n \\lambda D}{d}, \\quad I_{\\text{max}} = 4 I_0$" },
      { name: "Polarization & Malus", formula: "$I = I_0 \\cos^2\\theta, \\quad n = \\tan i_p \\quad (\\text{Brewster's Law})$" }
    ],
    shortcut: "Equiconvex glass lens ($n=1.5$): $f = R$. YDSE fringe width $\\beta$ is independent of fringe order $n$."
  },
  {
    id: "sheet_modern",
    title: "4. Modern Physics & Quantum Master Sheet",
    category: "Modern Physics",
    summary: "Photoelectric effect, de Broglie matter waves, Bohr atom model, binding energy curve, and radioactive decay.",
    keyFormulas: [
      { name: "Photoelectric Effect", formula: "$E = h \\nu = \\frac{hc}{\\lambda} = K_{\\text{max}} + \\Phi, \\quad K_{\\text{max}} = e V_0$" },
      { name: "de Broglie Wavelength", formula: "$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2 m q V}} \\implies \\lambda_e = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$" },
      { name: "Bohr Atom Model", formula: "$r_n = 0.529 \\frac{n^2}{Z} \\text{ \\AA}, \\quad E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}, \\quad \\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$" },
      { name: "Nuclear Binding Energy", formula: "$E_b = \\Delta m \\times 931.5 \\text{ MeV}, \\quad R = R_0 A^{1/3}$" },
      { name: "Radioactive Decay Law", formula: "$N(t) = N_0 e^{-\\lambda t} = N_0 \\left(\\frac{1}{2}\\right)^{t/T_{1/2}}, \\quad T_{1/2} = \\frac{0.693}{\\lambda}$" }
    ],
    shortcut: "Slope of stopping potential $V_0$ vs frequency $\\nu$ graph $= h/e$ (universal constant for all metals)."
  },
  {
    id: "sheet_thermal",
    title: "5. Thermal Physics & Thermodynamics Master Sheet",
    category: "Heat & Thermodynamics",
    summary: "Thermal expansion, calorimetry, heat transfer laws, kinetic theory of gases, first law, and Carnot engine.",
    keyFormulas: [
      { name: "Thermal Expansion", formula: "$\\Delta L = L_0 \\alpha \\Delta T, \\quad \\alpha : \\beta : \\gamma = 1 : 2 : 3, \\quad \\sigma = Y \\alpha \\Delta T$" },
      { name: "Heat Transfer", formula: "$H = \\frac{K A (T_1 - T_2)}{L}, \\quad E = \\epsilon \\sigma T^4, \\quad \\lambda_{\\text{max}} T = b$" },
      { name: "Kinetic Theory Speeds", formula: "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}, \\quad v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}}, \\quad v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$" },
      { name: "1st Law & Processes", formula: "$\\Delta Q = \\Delta U + W, \\quad W_{\\text{iso}} = n R T \\ln(V_2/V_1), \\quad W_{\\text{adi}} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$" },
      { name: "Carnot Engine & COP", formula: "$\\eta = 1 - \\frac{T_2}{T_1}, \\quad \\beta_{\\text{refrig}} = \\frac{T_2}{T_1 - T_2} = \\frac{1 - \\eta}{\\eta}$" }
    ],
    shortcut: "RAM velocity order: $v_{\\text{rms}} > v_{\\text{avg}} > v_{\\text{mp}}$. Adiabatic P-V curve is steeper than Isothermal by factor $\\gamma$."
  }
];

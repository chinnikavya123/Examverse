export const MASTER_PHYSICS_DERIVATIONS = [
  // Class 11 Derivations
  {
    id: "der_kinematics_eq",
    class: 11,
    title: "Equations of Motion under Constant Acceleration",
    category: "Kinematics",
    targetResult: "v = u + a t, \\quad s = u t + \\frac{1}{2} a t^2, \\quad v^2 = u^2 + 2 a s",
    steps: [
      "1. Acceleration definition: $a = \\frac{dv}{dt} \\implies dv = a dt$. Integrate from $0$ to $t$: $\\int_u^v dv = a \\int_0^t dt \\implies v - u = a t \\implies v = u + a t$.",
      "2. Velocity definition: $v = \\frac{ds}{dt} \\implies ds = (u + a t) dt$. Integrate: $\\int_0^s ds = \\int_0^t (u + a t) dt \\implies s = u t + \\frac{1}{2} a t^2$.",
      "3. Eliminate time $t$: Substitute $t = \\frac{v - u}{a}$ into displacement formula $s = \\left(\\frac{u + v}{2}\\right) t = \\left(\\frac{u + v}{2}\\right) \\left(\\frac{v - u}{a}\\right) = \\frac{v^2 - u^2}{2a} \\implies v^2 = u^2 + 2 a s$."
    ],
    examTip: "Always specify that acceleration $a$ MUST be constant for these equations to hold."
  },
  {
    id: "der_projectile_motion",
    title: "Projectile Time of Flight, Max Height & Range",
    category: "Kinematics",
    targetResult: "T = \\frac{2 u \\sin\\theta}{g}, \\quad H = \\frac{u^2 \\sin^2\\theta}{2g}, \\quad R = \\frac{u^2 \\sin(2\\theta)}{g}",
    steps: [
      "1. Initial components: $u_x = u \\cos\\theta, u_y = u \\sin\\theta$. Accelerations: $a_x = 0, a_y = -g$.",
      "2. Time of Flight ($T$): At maximum height $v_y = 0 \\implies v_y = u_y - g t_{\\text{top}} \\implies t_{\\text{top}} = \\frac{u \\sin\\theta}{g}$. Total time $T = 2 t_{\\text{top}} = \\frac{2 u \\sin\\theta}{g}$.",
      "3. Maximum Height ($H$): $v_y^2 = u_y^2 - 2 g H \\implies 0 = (u \\sin\\theta)^2 - 2 g H \\implies H = \\frac{u^2 \\sin^2\\theta}{2g}$.",
      "4. Horizontal Range ($R$): Distance in time $T$: $R = u_x T = (u \\cos\\theta) \\left(\\frac{2 u \\sin\\theta}{g}\\right) = \\frac{u^2 (2 \\sin\\theta \\cos\\theta)}{g} = \\frac{u^2 \\sin(2\\theta)}{g}$."
    ],
    examTip: "Max Range occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
  },
  {
    id: "der_banking_of_roads",
    title: "Optimum Speed for Banked Circular Track",
    category: "Laws of Motion",
    targetResult: "v_{\\text{optimum}} = \\sqrt{r g \\tan\\theta}",
    steps: [
      "1. Consider car of mass $m$ on track banked at angle $\\theta$ with radius $r$. Normal force $N$ resolves into vertical and horizontal components.",
      "2. Vertical equilibrium: $N \\cos\\theta = m g$.",
      "3. Horizontal centripetal force: $N \\sin\\theta = \\frac{m v^2}{r}$.",
      "4. Divide second equation by first: $\\frac{N \\sin\\theta}{N \\cos\\theta} = \\frac{m v^2 / r}{m g} \\implies \\tan\\theta = \\frac{v^2}{r g} \\implies v = \\sqrt{r g \\tan\\theta}$."
    ],
    examTip: "Banked roads eliminate dependence on friction for safety at optimum speed."
  },
  {
    id: "der_work_energy_theorem",
    title: "Work-Energy Theorem ($W_{\\text{net}} = \\Delta K$)",
    category: "Work & Energy",
    targetResult: "W_{\\text{net}} = K_f - K_i = \\frac{1}{2} m v^2 - \\frac{1}{2} m u^2",
    steps: [
      "1. From Newton's 2nd Law: $F = m a = m \\frac{dv}{dt} = m \\frac{dv}{dx} \\frac{dx}{dt} = m v \\frac{dv}{dx}$.",
      "2. Work done by net force: $W_{\\text{net}} = \\int_{x_i}^{x_f} F dx = \\int_{x_i}^{x_f} m v \\frac{dv}{dx} dx = m \\int_u^v v dv$.",
      "3. Integrating: $W_{\\text{net}} = m \\left[ \\frac{v^2}{2} \\right]_u^v = \\frac{1}{2} m v^2 - \\frac{1}{2} m u^2 = K_f - K_i = \\Delta K$."
    ],
    examTip: "Applies to both constant and variable forces, and conservative or non-conservative forces."
  },
  {
    id: "der_escape_velocity",
    title: "Escape Velocity from Earth's Surface",
    category: "Gravitation",
    targetResult: "v_e = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{2 g R} \\approx 11.2 \\text{ km/s}",
    steps: [
      "1. Work done to move mass $m$ from distance $r$ to $r+dr$: $dW = F dr = \\frac{G M m}{r^2} dr$.",
      "2. Total work to move from surface $R$ to infinity $\\infty$: $W = \\int_R^\\infty \\frac{G M m}{r^2} dr = G M m \\left[ -\\frac{1}{r} \\right]_R^\\infty = \\frac{G M m}{R}$.",
      "3. Equate kinetic energy to work done: $\\frac{1}{2} m v_e^2 = \\frac{G M m}{R} \\implies v_e = \\sqrt{\\frac{2 G M}{R}}$.",
      "4. Since $g = \\frac{G M}{R^2} \\implies G M = g R^2$, substitute to get $v_e = \\sqrt{2 g R}$."
    ],
    examTip: "Escape velocity is independent of mass of projected body or angle of projection!"
  },
  {
    id: "der_bernoulli_theorem",
    title: "Bernoulli's Equation for Ideal Fluid Flow",
    category: "Fluid Mechanics",
    targetResult: "P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}",
    steps: [
      "1. Consider incompressible, non-viscous fluid flowing through pipe of varying cross-section. Net work done on fluid element of volume $\\Delta V$ in time $\\Delta t$: $W_{\\text{net}} = (P_1 - P_2) \\Delta V$.",
      "2. Change in kinetic energy: $\\Delta K = \\frac{1}{2} \\Delta m (v_2^2 - v_1^2) = \\frac{1}{2} \\rho \\Delta V (v_2^2 - v_1^2)$.",
      "3. Change in potential energy: $\\Delta U = \\Delta m g (h_2 - h_1) = \\rho \\Delta V g (h_2 - h_1)$.",
      "4. By Work-Energy Theorem ($W_{\\text{net}} = \\Delta K + \\Delta U$): $(P_1 - P_2) \\Delta V = \\frac{1}{2} \\rho \\Delta V (v_2^2 - v_1^2) + \\rho \\Delta V g (h_2 - h_1)$.",
      "5. Divide by $\\Delta V$ and rearrange: $P_1 + \\frac{1}{2} \\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2} \\rho v_2^2 + \\rho g h_2$."
    ],
    examTip: "Valid for incompressible, non-viscous, irrotational, and steady (laminar) fluid flow."
  },
  {
    id: "der_isothermal_work",
    title: "Work Done in Isothermal Expansion of Ideal Gas",
    category: "Thermodynamics",
    targetResult: "W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)",
    steps: [
      "1. Work done for small volume expansion $dV$: $dW = P dV$. Total work $W = \\int_{V_1}^{V_2} P dV$.",
      "2. For ideal gas $P V = n R T \\implies P = \\frac{n R T}{V}$.",
      "3. Substitute $P$ into integral (since $T$ is constant): $W = \\int_{V_1}^{V_2} \\frac{n R T}{V} dV = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T [\\ln V]_{V_1}^{V_2}$.",
      "4. $W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)$."
    ],
    examTip: "Since temperature is constant, $\\Delta U = 0 \\implies Q = W$ for isothermal process."
  },
  {
    id: "der_simple_pendulum_period",
    title: "Time Period of Simple Pendulum",
    category: "Oscillations",
    targetResult: "T = 2\\pi \\sqrt{\\frac{L}{g}}",
    steps: [
      "1. Consider bob of mass $m$ suspended by string of length $L$, displaced by small angle $\\theta$. Restoring torque $\\tau = -m g L \\sin\\theta$.",
      "2. For small angles $\\theta \\ll 1 \\implies \\sin\\theta \\approx \\theta \\implies \\tau = -m g L \\theta$.",
      "3. Rotational 2nd Law: $\\tau = I \\alpha \\implies -m g L \\theta = (m L^2) \\alpha \\implies \\alpha = -\\left(\\frac{g}{L}\\right) \\theta$.",
      "4. Compare with SHM angular acceleration $\\alpha = -\\omega^2 \\theta \\implies \\omega^2 = \\frac{g}{L} \\implies \\omega = \\sqrt{\\frac{g}{L}}$.",
      "5. Time period $T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L}{g}}$."
    ],
    examTip: "Valid for small angular displacements ($\theta < 10^\circ$). Independent of bob mass!"
  },

  // Class 12 Derivations
  {
    id: "der_gauss_line_charge",
    title: "Electric Field due to Infinite Line Charge (Gauss's Law)",
    category: "Electrostatics",
    targetResult: "E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}",
    steps: [
      "1. Consider infinitely long straight wire with linear charge density $\\lambda$. Choose coaxial cylindrical Gaussian surface of radius $r$ and length $L$.",
      "2. Total flux through Gaussian cylinder: $\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = E \\cdot (2\\pi r L)$ (flux through flat circular caps is zero as $\\vec{E} \\perp d\\vec{A}$).",
      "3. Charge enclosed: $q_{\\text{enc}} = \\lambda L$.",
      "4. By Gauss's Law: $\\Phi_E = \\frac{q_{\\text{enc}}}{\\epsilon_0} \\implies E (2\\pi r L) = \\frac{\\lambda L}{\\epsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$."
    ],
    examTip: "Field varies inversely with distance ($E \\propto 1/r$)."
  },
  {
    id: "der_capacitor_dielectric",
    title: "Capacitance of Parallel Plate Capacitor with Dielectric Slab",
    category: "Electrostatics",
    targetResult: "C = \\frac{\\epsilon_0 A}{d - t \\left(1 - \\frac{1}{K}\\right)}",
    steps: [
      "1. Capacitor of plate area $A$, separation $d$, with dielectric slab of thickness $t < d$ and dielectric constant $K$.",
      "2. Electric field in air region of thickness $(d - t)$ is $E_0 = \\frac{\\sigma}{\\epsilon_0} = \\frac{Q}{\\epsilon_0 A}$.",
      "3. Electric field inside dielectric slab is $E = \\frac{E_0}{K}$.",
      "4. Total potential difference $V = E_0 (d - t) + E t = E_0 (d - t) + \\frac{E_0}{K} t = E_0 \\left[ d - t \\left(1 - \\frac{1}{K}\\right) \\right]$.",
      "5. Capacitance $C = \\frac{Q}{V} = \\frac{Q}{\\frac{Q}{\\epsilon_0 A} \\left[ d - t \\left(1 - \\frac{1}{K}\\right) \\right]} = \\frac{\\epsilon_0 A}{d - t \\left(1 - \\frac{1}{K}\\right)}$."
    ],
    examTip: "If slab fills entire space ($t = d$), capacitance becomes $C = K C_0$."
  },
  {
    id: "der_drift_velocity",
    title: "Relation between Electric Current and Drift Velocity ($I = n e A v_d$)",
    category: "Current Electricity",
    targetResult: "I = n e A v_d",
    steps: [
      "1. Consider conductor of cross-sectional area $A$ with electron number density $n$. Electrons move with drift velocity $v_d$.",
      "2. In time interval $\\Delta t$, length of electron column crossing cross-section is $\\Delta x = v_d \\Delta t$.",
      "3. Volume of column = $A \\Delta x = A v_d \\Delta t$.",
      "4. Number of free electrons in volume = $n A v_d \\Delta t$. Total charge $\\Delta Q = (n A v_d \\Delta t) e$.",
      "5. Current $I = \\frac{\\Delta Q}{\\Delta t} = \\frac{n e A v_d \\Delta t}{\\Delta t} = n e A v_d$."
    ],
    examTip: "Current density $J = \\frac{I}{A} = n e v_d$ is a vector quantity."
  },
  {
    id: "der_biot_savart_loop",
    title: "Magnetic Field on Axis of Circular Current Loop",
    category: "Magnetism",
    targetResult: "B_x = \\frac{\\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}}",
    steps: [
      "1. Consider circular loop of radius $R$ carrying current $I$. Point $P$ is on axis at distance $x$ from center.",
      "2. Field due to current element $d l$ at distance $r = \\sqrt{R^2 + x^2}$: $d B = \\frac{\\mu_0}{4\\pi} \\frac{I d l}{r^2}$.",
      "3. Resolve $d\\vec{B}$ into axial component $dB \\sin\\theta$ and perpendicular component $dB \\cos\\theta$. Perpendicular components cancel out by symmetry.",
      "4. Net field $B = \\int dB \\sin\\theta = \\int \\frac{\\mu_0 I d l}{4\\pi r^2} \\left(\\frac{R}{r}\\right) = \\frac{\\mu_0 I R}{4\\pi r^3} \\int d l = \\frac{\\mu_0 I R}{4\\pi r^3} (2\\pi R) = \\frac{\\mu_0 I R^2}{2 r^3}$.",
      "5. Substitute $r = (R^2 + x^2)^{1/2} \\implies B_x = \\frac{\\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}}$."
    ],
    examTip: "At center ($x=0$), field reduces to $B = \\frac{\\mu_0 I}{2R}$."
  },
  {
    id: "der_lens_maker_formula",
    title: "Lens Maker's Formula",
    category: "Optics",
    targetResult: "\\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
    steps: [
      "1. Refraction at 1st spherical surface (radius $R_1$, medium $1 \\to n$): $\\frac{n}{v_1} - \\frac{1}{u} = \\frac{n - 1}{R_1}$.",
      "2. Refraction at 2nd spherical surface (radius $R_2$, medium $n \\to 1$): $\\frac{1}{v} - \\frac{n}{v_1} = \\frac{1 - n}{R_2} = -\\frac{n - 1}{R_2}$.",
      "3. Adding the two refraction equations: $\\left(\\frac{n}{v_1} - \\frac{1}{u}\\right) + \\left(\\frac{1}{v} - \\frac{n}{v_1}\\right) = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) \\implies \\frac{1}{v} - \\frac{1}{u} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.",
      "4. By definition, if $u = \\infty \\implies v = f \\implies \\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$."
    ],
    examTip: "Sign convention: $R_1$ is positive and $R_2$ is negative for biconvex lens."
  },
  {
    id: "der_ydse_fringe_width",
    title: "Young's Double Slit Experiment Fringe Width (\\beta = \\frac{\\lambda D}{d})",
    category: "Optics",
    targetResult: "\\beta = \\frac{\\lambda D}{d}",
    steps: [
      "1. Coherent slits $S_1, S_2$ separated by distance $d$, screen at distance $D$. Point $P$ on screen at distance $y$ from central axis.",
      "2. Path difference $S_2 P - S_1 P = \\Delta x \\approx \\frac{y d}{D}$ (for $d \\ll D$).",
      "3. Position of $n$-th bright fringe: $\\Delta x = n \\lambda \\implies \\frac{y_n d}{D} = n \\lambda \\implies y_n = \\frac{n \\lambda D}{d}$.",
      "4. Fringe width $\\beta = y_{n+1} - y_n = \\frac{(n+1) \\lambda D}{d} - \\frac{n \\lambda D}{d} = \\frac{\\lambda D}{d}$."
    ],
    examTip: "Bright and dark fringes are equally wide ($\beta_{\\text{bright}} = \\beta_{\\text{dark}}$)."
  },
  {
    id: "der_bohr_radius_energy",
    title: "Bohr Radius and Energy Levels of Hydrogen Atom",
    category: "Modern Physics",
    targetResult: "r_n = \\frac{\\epsilon_0 h^2}{\\pi m e^2 Z} n^2 = 0.529 \\frac{n^2}{Z} \\text{ \\AA}, \\quad E_n = -\\frac{m e^4 Z^2}{8 \\epsilon_0^2 h^2 n^2} = -13.6 \\frac{Z^2}{n^2} \\text{ eV}",
    steps: [
      "1. Electrostatic attraction provides centripetal force: $\\frac{1}{4\\pi\\epsilon_0} \\frac{Z e^2}{r^2} = \\frac{m v^2}{r} \\implies m v^2 = \\frac{Z e^2}{4\\pi\\epsilon_0 r}$.",
      "2. Bohr quantization postulate: $m v r = \\frac{n h}{2\\pi} \\implies v = \\frac{n h}{2\\pi m r}$.",
      "3. Substitute $v$ into centripetal relation: $m \\left(\\frac{n h}{2\\pi m r}\\right)^2 = \\frac{Z e^2}{4\\pi\\epsilon_0 r} \\implies r_n = \\frac{\\epsilon_0 h^2 n^2}{\\pi m e^2 Z}$.",
      "4. Total Energy $E = K + U = \\frac{1}{2} m v^2 - \\frac{Z e^2}{4\\pi\\epsilon_0 r} = -\\frac{Z e^2}{8\\pi\\epsilon_0 r}$.",
      "5. Substitute $r_n$ into $E$: $E_n = -\\frac{m e^4 Z^2}{8 \\epsilon_0^2 h^2 n^2} = -13.6 \\frac{Z^2}{n^2} \\text{ eV}$."
    ],
    examTip: "Negative sign indicates electron is bound to nucleus."
  },
  {
    id: "der_radioactive_decay",
    title: "Radioactive Decay Law ($N(t) = N_0 e^{-\\lambda t}$) & Half-Life",
    category: "Modern Physics",
    targetResult: "N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}",
    steps: [
      "1. Rate of decay is proportional to number of active nuclei: $-\\frac{dN}{dt} = \\lambda N \\implies \\frac{dN}{N} = -\\lambda dt$.",
      "2. Integrate from $t=0$ ($N=N_0$) to $t$ ($N=N(t)$): $\\int_{N_0}^{N(t)} \\frac{dN}{N} = -\\lambda \\int_0^t dt \\implies \\ln\\left(\\frac{N(t)}{N_0}\\right) = -\\lambda t$.",
      "3. Take exponential on both sides: $N(t) = N_0 e^{-\\lambda t}$.",
      "4. Half-Life ($T_{1/2}$): Time when $N(T_{1/2}) = \\frac{N_0}{2} \\implies \\frac{N_0}{2} = N_0 e^{-\\lambda T_{1/2}} \\implies e^{\\lambda T_{1/2}} = 2 \\implies \\lambda T_{1/2} = \\ln 2 \\approx 0.693 \\implies T_{1/2} = \\frac{0.693}{\\lambda}$."
    ],
    examTip: "Half-life is constant, independent of initial amount of radioactive substance!"
  }
];

export const CLASS_11_PHYSICS_FORMULAS = [
  {
    id: "ph11_ch1",
    class: 11,
    chapterNumber: 1,
    chapter: "Units and Measurements",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Units, Dimensions & Dimensional Analysis",
        sections: {
          concept: "Physical quantities = numerical value ($n$) $\\times$ unit ($u$). Principle of Homogeneity: Dimensions of terms on both sides of a physical equation must be identical.",
          formulaReaction: "$$[Q] = M^a L^b T^c A^d, \\quad n_1 u_1 = n_2 u_2 \\implies n_2 = n_1 \\left(\\frac{M_1}{M_2}\\right)^a \\left(\\frac{L_1}{L_2}\\right)^b \\left(\\frac{T_1}{T_2}\\right)^c$$",
          shortcuts: "Dimensionless quantities: Strain, Angle, Solid Angle, Relative Density, Refractive Index, Dielectric Constant.",
          importantResults: "Force $[M L T^{-2}]$, Work/Energy $[M L^2 T^{-2}]$, Pressure/Stress $[M L^{-1} T^{-2}]$, Planck's Constant $[M L^2 T^{-1}]$."
        }
      },
      {
        subtopic: "Errors in Measurement & Instrument Least Count",
        sections: {
          concept: "Absolute Error $\\Delta a_i = |a_{\\text{mean}} - a_i|$. Relative Error $= \\frac{\\Delta a_{\\text{mean}}}{a_{\\text{mean}}}$. Percentage Error $= \\text{Relative Error} \\times 100\\%$.",
          formulaReaction: "$$\\text{If } Z = \\frac{A^a B^b}{C^c} \\implies \\frac{\\Delta Z}{Z} = a \\frac{\\Delta A}{A} + b \\frac{\\Delta B}{B} + c \\frac{\\Delta C}{C}$$\n$$\\text{Vernier L.C.} = 1\\text{ MSD} - 1\\text{ VSD} = \\frac{1\\text{ MSD}}{N}$$\n$$\\text{Screw Gauge L.C.} = \\frac{\\text{Pitch}}{\\text{Total Circular Scale Divisions}}$$",
          shortcuts: "Maximum percentage error always ADDS absolute relative errors weighted by exponents.",
          importantResults: "For $Z = A^n$, $\\frac{\\Delta Z}{Z} = n \\frac{\\Delta A}{A}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch2",
    class: 11,
    chapterNumber: 2,
    chapter: "Motion in a Straight Line",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Kinematics Parameters & Kinematic Equations",
        sections: {
          concept: "Position vector $\\vec{r}$, Displacement $\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$. Average Velocity $v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}$, Instantaneous Velocity $v = \\frac{dx}{dt}$.",
          formulaReaction: "$$v = u + a t, \\quad s = u t + \\frac{1}{2} a t^2, \\quad v^2 = u^2 + 2 a s, \\quad s_n = u + \\frac{a}{2}(2n - 1)$$",
          shortcuts: "Slope of $x$-$t$ graph = Velocity ($v$). Slope of $v$-$t$ graph = Acceleration ($a$). Area under $v$-$t$ graph = Displacement.",
          importantResults: "For constant acceleration, distance covered in equal time intervals is in ratio $1 : 3 : 5 : 7 : \\dots$ (Galileo's Law of Odd Numbers)."
        }
      },
      {
        subtopic: "Relative Motion & Free Fall Gravity",
        sections: {
          concept: "Relative velocity of $A$ w.r.t $B$: $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$. Under gravity ($a = -g = -9.8 \\text{ m/s}^2$), motion is symmetric.",
          formulaReaction: "$$t_{\\text{ascent}} = t_{\\text{descent}} = \\frac{u}{g}, \\quad H_{\\text{max}} = \\frac{u^2}{2g}, \\quad T_{\\text{flight}} = \\frac{2u}{g}$$",
          shortcuts: "Speed returning to projection level equals initial projection speed ($v = u$).",
          importantResults: "Velocity at height $h$: $v = \\sqrt{u^2 - 2gh}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch3",
    class: 11,
    chapterNumber: 3,
    chapter: "Motion in a Plane",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Vector Addition, Components & Products",
        sections: {
          concept: "Vector magnitude $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$. Dot product $\\vec{A} \\cdot \\vec{B} = A B \\cos\\theta$. Cross product $|\\vec{A} \\times \\vec{B}| = A B \\sin\\theta$.",
          formulaReaction: "$$R = \\sqrt{A^2 + B^2 + 2 A B \\cos\\theta}, \\quad \\tan\\alpha = \\frac{B \\sin\\theta}{A + B \\cos\\theta}$$\n$$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z$$",
          shortcuts: "Perpendicular vectors $\\implies \\vec{A} \\cdot \\vec{B} = 0$. Parallel vectors $\\implies \\vec{A} \\times \\vec{B} = \\vec{0}$.",
          importantResults: "Unit vector $\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|}$."
        }
      },
      {
        subtopic: "Projectile Motion & Trajectory Equation",
        sections: {
          concept: "2D motion under constant downward acceleration $g$. Horizontal component $v_x = u \\cos\\theta$ remains constant.",
          formulaReaction: "$$T = \\frac{2 u \\sin\\theta}{g}, \\quad H = \\frac{u^2 \\sin^2\\theta}{2g}, \\quad R = \\frac{u^2 \\sin(2\\theta)}{g}$$\n$$\\text{Trajectory Equation: } y = x \\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}$$",
          shortcuts: "Maximum range at $\\theta = 45^\\circ \\implies R_{\\text{max}} = \\frac{u^2}{g}$. Same range for complementary angles $\\theta$ and $(90^\\circ - \\theta)$.",
          importantResults: "Relation between Range and Max Height: $R \\tan\\theta = 4 H$."
        }
      },
      {
        subtopic: "Uniform Circular Motion & Centripetal Acceleration",
        sections: {
          concept: "Motion in circle with constant speed. Velocity direction changes continuously, producing inward radial acceleration.",
          formulaReaction: "$$a_c = \\frac{v^2}{r} = \\omega^2 r = 4 \\pi^2 f^2 r, \\quad v = \\omega r, \\quad T = \\frac{2\\pi}{\\omega}$$",
          shortcuts: "Centripetal force $F_c = m \\omega^2 r$ is NOT a new physical force; provided by friction, tension, gravity, etc.",
          importantResults: "Total acceleration in non-uniform circular motion: $a_{\\text{total}} = \\sqrt{a_c^2 + a_t^2}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch4",
    class: 11,
    chapterNumber: 4,
    chapter: "Laws of Motion",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Newton's Laws, Momentum & Impulse",
        sections: {
          concept: "First Law: Inertia. Second Law: $\\vec{F} = \\frac{d\\vec{p}}{dt} = m \\vec{a}$. Third Law: Action-reaction pair $\\vec{F}_{AB} = -\\vec{F}_{BA}$.",
          formulaReaction: "$$\\vec{p} = m \\vec{v}, \\quad \\vec{J} = \\int \\vec{F} dt = \\Delta \\vec{p} = \\vec{F}_{\\text{avg}} \\Delta t$$",
          shortcuts: "Conservation of Linear Momentum: If $\\vec{F}_{\\text{ext}} = 0 \\implies \\vec{p}_{\\text{total}} = \\text{constant}$.",
          importantResults: "Apparent weight in elevator accelerating upward: $N = m(g + a)$; accelerating downward: $N = m(g - a)$."
        }
      },
      {
        subtopic: "Friction: Static, Kinetic & Angle of Repose",
        sections: {
          concept: "Self-adjusting static friction $f_s \\le f_{s,\\text{max}} = \\mu_s N$. Kinetic friction $f_k = \\mu_k N$. Angle of friction $\\tan\\lambda = \\mu_s$.",
          formulaReaction: "$$f_{s,\\text{max}} = \\mu_s N, \\quad f_k = \\mu_k N, \\quad \\theta_{\\text{repose}} = \\tan^{-1}(\\mu_s)$$",
          shortcuts: "Angle of repose equals angle of friction! Acceleration down rough incline: $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$.",
          importantResults: "Optimum banking angle without friction: $\\tan\\theta = \\frac{v^2}{rg}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch5",
    class: 11,
    chapterNumber: 5,
    chapter: "Work, Energy and Power",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Work-Energy Theorem & Potential Energy",
        sections: {
          concept: "Work $W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$. Work-Energy Theorem: Total work done by all forces equals change in kinetic energy ($W_{\\text{net}} = \\Delta K$).",
          formulaReaction: "$$W = \\int_{x_1}^{x_2} F dx, \\quad K = \\frac{1}{2} m v^2 = \\frac{p^2}{2m}, \\quad U_{\\text{spring}} = \\frac{1}{2} k x^2, \\quad F = -\\frac{dU}{dx}$$",
          shortcuts: "For conservative force: $\\Delta U = -W_{\\text{cons}}$. Mechanical energy conserved ($K + U = \\text{const}$) if non-conservative work is zero.",
          importantResults: "Stable equilibrium: $\\frac{dU}{dx} = 0, \\frac{d^2U}{dx^2} > 0$. Unstable: $\\frac{d^2U}{dx^2} < 0$."
        }
      },
      {
        subtopic: "Power, Collisions & Coefficient of Restitution",
        sections: {
          concept: "Power $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$. Coefficient of restitution $e = \\frac{v_2 - v_1}{u_1 - u_2}$.",
          formulaReaction: "$$P = \\vec{F} \\cdot \\vec{v}, \\quad e = \\frac{\\text{Velocity of separation}}{\\text{Velocity of approach}}$$\n$$\\text{Elastic: } e = 1, \\quad \\text{Inelastic: } 0 < e < 1, \\quad \\text{Perfectly Inelastic: } e = 0$$",
          shortcuts: "1 HP (Horsepower) = 746 W. In 1D elastic collision of equal masses ($m_1=m_2$), velocities interchanged!",
          importantResults: "Head-on elastic collision final velocities: $v_1 = \\frac{m_1-m_2}{m_1+m_2}u_1 + \\frac{2m_2}{m_1+m_2}u_2$."
        }
      }
    ]
  },
  {
    id: "ph11_ch6",
    class: 11,
    chapterNumber: 6,
    chapter: "System of Particles and Rotational Motion",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Center of Mass & Torque-Angular Momentum",
        sections: {
          concept: "Center of Mass $\\vec{r}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{M}$. Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. Angular Momentum $\\vec{L} = \\vec{r} \\times \\vec{p} = I \\vec{\\omega}$.",
          formulaReaction: "$$\\vec{r}_{cm} = \\frac{1}{M} \\int \\vec{r} dm, \\quad \\vec{\\tau} = I \\vec{\\alpha} = \\frac{d\\vec{L}}{dt}, \\quad L = I \\omega$$",
          shortcuts: "Conservation of Angular Momentum: If $\\vec{\\tau}_{\\text{ext}} = 0 \\implies I_1 \\omega_1 = I_2 \\omega_2$.",
          importantResults: "Rotational Kinetic Energy $K_{\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{L^2}{2I}$."
        }
      },
      {
        subtopic: "Moment of Inertia Theorems & Pure Rolling",
        sections: {
          concept: "Moment of Inertia $I = \\sum m_i r_i^2 = k^2 M$ ($k$ = radius of gyration). Parallel Axis: $I = I_{cm} + M d^2$. Perpendicular Axis (planar): $I_z = I_x + I_y$.",
          formulaReaction: "$$\\text{Ring: } I = M R^2, \\quad \\text{Disc: } I = \\frac{1}{2} M R^2, \\quad \\text{Solid Sphere: } I = \\frac{2}{5} M R^2$$\n$$\\text{Hollow Sphere: } I = \\frac{2}{3} M R^2, \\quad \\text{Rod (center): } I = \\frac{1}{12} M L^2$$\n$$\\text{Pure Rolling: } v_{cm} = R \\omega, \\quad K_{\\text{total}} = \\frac{1}{2} M v^2 \\left(1 + \\frac{k^2}{R^2}\\right)$$",
          shortcuts: "Acceleration of body rolling down incline of angle $\\theta$: $a = \\frac{g \\sin\\theta}{1 + k^2/R^2}$.",
          importantResults: "Solid sphere reaches bottom of incline fastest because it has smallest $\\frac{k^2}{R^2} = \\frac{2}{5}$!"
        }
      }
    ]
  },
  {
    id: "ph11_ch7",
    class: 11,
    chapterNumber: 7,
    chapter: "Gravitation",
    category: "Mechanics",
    subtopics: [
      {
        subtopic: "Gravitational Law, Field & Variation of g",
        sections: {
          concept: "Newton's Law $F = \\frac{G m_1 m_2}{r^2}$. Acceleration due to gravity at surface $g = \\frac{GM}{R^2}$.",
          formulaReaction: "$$g_h = g \\left(1 - \\frac{2h}{R}\\right) \\quad (h \\ll R), \\quad g_d = g \\left(1 - \\frac{d}{R}\\right), \\quad g_\\phi = g - \\omega^2 R \\cos^2\\phi$$",
          shortcuts: "At center of Earth ($d = R \\implies g_{\\text{center}} = 0$). Weightlessness at equator if Earth rotates $\\omega = \\sqrt{g/R}$.",
          importantResults: "Gravitational Potential $V = -\\frac{GM}{r}$, Potential Energy $U = -\\frac{GMm}{r}$."
        }
      },
      {
        subtopic: "Kepler's Laws, Escape Velocity & Satellites",
        sections: {
          concept: "Kepler's 3rd Law: $T^2 \\propto a^3$. Escape velocity $v_e$: minimum velocity to escape gravitational pull. Orbital velocity $v_o$.",
          formulaReaction: "$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2 \\text{ km/s (Earth)}$$\n$$v_o = \\sqrt{\\frac{GM}{R}} = \\sqrt{gR} \\approx 7.9 \\text{ km/s}, \\quad v_e = \\sqrt{2} v_o$$\n$$T = \\frac{2\\pi r^{3/2}}{\\sqrt{GM}}, \\quad E_{\\text{total}} = -\\frac{GMm}{2r} = -K = \\frac{1}{2} U$$",
          shortcuts: "Binding energy of satellite $= + \\frac{GMm}{2r}$. Geostationary satellite period $T = 24 \\text{ hours}$, height $h \\approx 36,000 \\text{ km}$.",
          importantResults: "Virial Theorem for satellite orbit: $K = -E_{\\text{total}} = -\\frac{1}{2} U$."
        }
      }
    ]
  },
  {
    id: "ph11_ch8",
    class: 11,
    chapterNumber: 8,
    chapter: "Mechanical Properties of Solids",
    category: "Properties of Matter",
    subtopics: [
      {
        subtopic: "Stress, Strain, Hooke's Law & Elastic Moduli",
        sections: {
          concept: "Stress $\\sigma = \\frac{F}{A}$, Strain $\\epsilon = \\frac{\\Delta L}{L}$. Hooke's Law: Within elastic limit, Stress $\\propto$ Strain.",
          formulaReaction: "$$Y = \\frac{\\text{Tensile Stress}}{\\text{Tensile Strain}} = \\frac{F L}{A \\Delta L}, \\quad B = -\\frac{\\Delta P}{\\Delta V / V}, \\quad \\eta = \\frac{\\text{Shear Stress}}{\\text{Shear Strain}} = \\frac{F / A}{\\theta}$$",
          shortcuts: "Compressibility $K = \\frac{1}{B}$. Poisson's ratio $\\nu = -\\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}}$ (Theoretical limits $-1 < \\nu < 0.5$, Practical $0 < \\nu < 0.5$).",
          importantResults: "Elastic Strain Energy Density $u = \\frac{U}{V} = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} = \\frac{1}{2} Y \\epsilon^2$."
        }
      }
    ]
  },
  {
    id: "ph11_ch9",
    class: 11,
    chapterNumber: 9,
    chapter: "Mechanical Properties of Fluids",
    category: "Properties of Matter",
    subtopics: [
      {
        subtopic: "Fluid Statics: Pascal's Law, Buoyancy & Pressure",
        sections: {
          concept: "Hydrostatic pressure at depth $h$: $P = P_0 + \\rho g h$. Pascal's Law: Pressure applied to enclosed fluid transmitted undiminished.",
          formulaReaction: "$$P = P_0 + \\rho g h, \\quad F_{\\text{buoyant}} = \\rho_{\\text{fluid}} V_{\\text{submerged}} g, \\quad \\text{Fraction submerged} = \\frac{\\rho_{\\text{body}}}{\\rho_{\\text{fluid}}}$$",
          shortcuts: "Hydraulic lift $F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$. Gauge Pressure $P_{\\text{gauge}} = P - P_0 = \\rho g h$.",
          importantResults: "Archimedes' Principle: Buoyant force equals weight of displaced fluid."
        }
      },
      {
        subtopic: "Fluid Dynamics: Continuity, Bernoulli & Viscosity",
        sections: {
          concept: "Continuity Equation (Mass conservation): $A_1 v_1 = A_2 v_2$. Bernoulli's Principle (Energy conservation for ideal fluid).",
          formulaReaction: "$$P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}$$\n$$\\text{Torricelli's Efflux: } v = \\sqrt{2gh}, \\quad \\text{Stokes' Viscous Force: } F_v = 6 \\pi \\eta r v$$\n$$\\text{Terminal Velocity: } v_t = \\frac{2}{9} \\frac{r^2 (\\rho_{\\text{body}} - \\rho_{\\text{fluid}}) g}{\\eta}$$",
          shortcuts: "Reynolds number $Re = \\frac{\\rho v D}{\\eta}$. Laminar flow if $Re < 2000$, Turbulent if $Re > 3000$.",
          importantResults: "Venturimeter measures fluid flow rate $Q = A_1 A_2 \\sqrt{\\frac{2 g h}{A_1^2 - A_2^2}}$."
        }
      },
      {
        subtopic: "Surface Tension, Surface Energy & Capillarity",
        sections: {
          concept: "Surface tension $T = \\frac{F}{L} = \\frac{\\Delta W}{\\Delta A}$. Excess pressure inside curved liquid surfaces due to surface tension.",
          formulaReaction: "$$\\text{Liquid Drop: } \\Delta P = \\frac{2T}{R}, \\quad \\text{Soap Bubble: } \\Delta P = \\frac{4T}{R}$$\n$$\\text{Capillary Rise: } h = \\frac{2 T \\cos\\theta}{r \\rho g}$$",
          shortcuts: "Angle of contact $\\theta < 90^\\circ \\implies$ liquid wets glass (rises). $\\theta > 90^\\circ \\implies$ liquid depresses (mercury).",
          importantResults: "Work done to blow soap bubble of radius $R$: $W = 8 \\pi R^2 T$ (due to 2 free surfaces)."
        }
      }
    ]
  },
  {
    id: "ph11_ch10",
    class: 11,
    chapterNumber: 10,
    chapter: "Thermal Properties of Matter",
    category: "Heat & Thermodynamics",
    subtopics: [
      {
        subtopic: "Thermal Expansion, Calorimetry & State Changes",
        sections: {
          concept: "Thermal expansion parameters: $\\alpha, \\beta, \\gamma$. Relation: $\\alpha : \\beta : \\gamma = 1 : 2 : 3$. Heat capacity $Q = m c \\Delta T$.",
          formulaReaction: "$$\\Delta L = L_0 \\alpha \\Delta T, \\quad \\Delta A = A_0 \\beta \\Delta T, \\quad \\Delta V = V_0 \\gamma \\Delta T$$\n$$Q = m c \\Delta T, \\quad Q_{\\text{latent}} = m L, \\quad \\text{Calorimetry: } Q_{\\text{lost}} = Q_{\\text{gained}}$$",
          shortcuts: "Anomalous expansion of water: Density of water is MAXIMUM at $4^\\circ\\text{C}$ ($1000 \\text{ kg/m}^3$).",
          importantResults: "Thermal Stress $\\sigma = Y \\alpha \\Delta T$, Thermal Force $F = Y A \\alpha \\Delta T$."
        }
      },
      {
        subtopic: "Heat Transfer: Conduction, Radiation & Laws",
        sections: {
          concept: "Conduction heat rate $H = \\frac{dQ}{dt} = -K A \\frac{dT}{dx}$. Stefan-Boltzmann Law: $E = \\epsilon \\sigma T^4$. Wien's Displacement Law: $\\lambda_{\\text{max}} T = b$.",
          formulaReaction: "$$H = \\frac{K A (T_1 - T_2)}{L}, \\quad R_{\\text{thermal}} = \\frac{L}{K A}, \\quad P_{\\text{net}} = \\epsilon \\sigma A (T^4 - T_0^4)$$\n$$\\text{Newton's Law of Cooling: } \\frac{dT}{dt} = -k (T_{\\text{avg}} - T_0), \\quad \\lambda_{\\text{max}} T = b = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$$",
          shortcuts: "Stefan constant $\\sigma = 5.67 \\times 10^{-8} \\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$.",
          importantResults: "Equivalent thermal conductivity in series: $\\frac{L_1+L_2}{K_{eq}} = \\frac{L_1}{K_1} + \\frac{L_2}{K_2}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch11",
    class: 11,
    chapterNumber: 11,
    chapter: "Thermodynamics",
    category: "Heat & Thermodynamics",
    subtopics: [
      {
        subtopic: "First Law, Work Done & Thermodynamic Processes",
        sections: {
          concept: "Zeroth Law: Thermal equilibrium / temperature concept. First Law: $\\Delta Q = \\Delta U + W$. Work done $W = \\int P dV$.",
          formulaReaction: "$$\\text{Isothermal (}T=\\text{const): } W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right), \\quad \\Delta U = 0, \\quad Q = W$$\n$$\\text{Adiabatic (}Q=0\\text{): } P V^\\gamma = \\text{const}, \\quad W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}, \\quad \\Delta U = -W$$\n$$\\text{Isobaric (}P=\\text{const): } W = P (V_2 - V_1), \\quad \\text{Isochoric (}V=\\text{const): } W = 0, \\quad Q = \\Delta U$$",
          shortcuts: "Slope of Adiabatic curve on P-V diagram $= \\gamma \\times$ (Slope of Isothermal curve). Adiabatic curve is STEEPER!",
          importantResults: "Mayer's Relation: $C_p - C_v = R$, $\\gamma = C_p / C_v$."
        }
      },
      {
        subtopic: "Heat Engines, Carnot Cycle & Second Law",
        sections: {
          concept: "Second Law: Heat cannot spontaneously flow from cold to hot body without external work (Clausius). Carnot Engine: Reversible ideal heat engine.",
          formulaReaction: "$$\\eta_{\\text{engine}} = 1 - \\frac{Q_2}{Q_1} = 1 - \\frac{T_2}{T_1}, \\quad \\beta_{\\text{refrigerator}} = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$$\n$$\\text{Relation between efficiency } \\eta \\text{ and COP } \\beta: \\quad \\beta = \\frac{1 - \\eta}{\\eta}$$",
          shortcuts: "Carnot efficiency depends ONLY on source ($T_1$) and sink ($T_2$) absolute temperatures in Kelvin!",
          importantResults: "Efficiency $\\eta < 100\\%$ always for any real or Carnot engine."
        }
      }
    ]
  },
  {
    id: "ph11_ch12",
    class: 11,
    chapterNumber: 12,
    chapter: "Kinetic Theory",
    category: "Heat & Thermodynamics",
    subtopics: [
      {
        subtopic: "Kinetic Theory of Gases & Velocities",
        sections: {
          concept: "Ideal gas assumptions. Gas pressure results from elastic collisions of molecules with vessel walls.",
          formulaReaction: "$$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{N m}{V} v_{\\text{rms}}^2, \\quad K_{\\text{avg}} = \\frac{3}{2} k_B T \\text{ (per molecule)}$$\n$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}, \\quad v_{\\text{avg}} = \\sqrt{\\frac{8 R T}{\\pi M}}, \\quad v_{\\text{mp}} = \\sqrt{\\frac{2 R T}{M}}$$",
          shortcuts: "Ratio of velocities: $v_{\\text{mp}} : v_{\\text{avg}} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{8/\\pi} : \\sqrt{3} \\approx 1 : 1.128 : 1.225$. RAM mnemonic (RMS > Avg > MP).",
          importantResults: "Mean free path $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2} = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$."
        }
      },
      {
        subtopic: "Equipartition of Energy & Specific Heat Ratios",
        sections: {
          concept: "Law of Equipartition: Energy associated with each degree of freedom per molecule is $\\frac{1}{2} k_B T$. Internal energy $U = \\frac{f}{2} n R T$.",
          formulaReaction: "$$C_v = \\frac{f}{2} R, \\quad C_p = \\left(\\frac{f}{2} + 1\\right) R, \\quad \\gamma = \\frac{C_p}{C_v} = 1 + \\frac{2}{f}$$\n$$\\text{Monatomic (}f=3\\text{): } \\gamma = 5/3 = 1.67, \\quad \\text{Diatomic (}f=5\\text{): } \\gamma = 7/5 = 1.40$$\n$$\\text{Polyatomic/Triatomic non-linear (}f=6\\text{): } \\gamma = 4/3 = 1.33$$",
          shortcuts: "Monatomic: $He, Ne, Ar$. Diatomic: $O_2, N_2, H_2$. Polyatomic: $CO_2, H_2O, NH_3$.",
          importantResults: "Mixture of non-reacting gases: $\\gamma_{\\text{mix}} = \\frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch13",
    class: 11,
    chapterNumber: 13,
    chapter: "Oscillations",
    category: "Waves & Oscillations",
    subtopics: [
      {
        subtopic: "Simple Harmonic Motion (SHM) Kinematics & Energy",
        sections: {
          concept: "SHM restoring force $F = -k x \\implies \\frac{d^2x}{dt^2} + \\omega^2 x = 0$. Displacement $x = A \\sin(\\omega t + \\phi)$.",
          formulaReaction: "$$v = \\omega \\sqrt{A^2 - x^2}, \\quad a = -\\omega^2 x, \\quad \\omega = \\sqrt{\\frac{k}{m}} = \\frac{2\\pi}{T}$$\n$$K = \\frac{1}{2} m \\omega^2 (A^2 - x^2), \\quad U = \\frac{1}{2} m \\omega^2 x^2, \\quad E_{\\text{total}} = K + U = \\frac{1}{2} m \\omega^2 A^2 = \\text{constant}$$",
          shortcuts: "At mean position ($x=0$): $v_{\\text{max}} = A \\omega, a=0, U=0, K=E_{\\text{total}}$. At extreme ($x=\\pm A$): $v=0, a_{\\text{max}} = \\omega^2 A, K=0, U=E_{\\text{total}}$.",
          importantResults: "Position where $K = U \\implies x = \\pm \\frac{A}{\\sqrt{2}}$."
        }
      },
      {
        subtopic: "Pendulums, Spring Systems & Combination of SHMs",
        sections: {
          concept: "Simple pendulum period $T = 2\\pi \\sqrt{\\frac{L}{g}}$. Spring-mass system $T = 2\\pi \\sqrt{\\frac{m}{k}}$.",
          formulaReaction: "$$\\text{Simple Pendulum: } T = 2\\pi \\sqrt{\\frac{L}{g}}, \\quad \\text{Seconds Pendulum (}T=2\\text{ s): } L \\approx 1 \\text{ m}$$\n$$\\text{Springs in Series: } \\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2}, \\quad \\text{Springs in Parallel: } k_{eq} = k_1 + k_2$$",
          shortcuts: "In satellite/free-fall ($g_{\\text{eff}} = 0 \\implies T = \\infty$, pendulum stops oscillating!).",
          importantResults: "U-tube liquid column oscillation period: $T = 2\\pi \\sqrt{\\frac{h}{g}}$."
        }
      }
    ]
  },
  {
    id: "ph11_ch14",
    class: 11,
    chapterNumber: 14,
    chapter: "Waves",
    category: "Waves & Oscillations",
    subtopics: [
      {
        subtopic: "Wave Motion, Speed & Superposition",
        sections: {
          concept: "Progressive wave equation $y(x,t) = A \\sin(k x - \\omega t + \\phi)$. Wave speed $v = f \\lambda = \\frac{\\omega}{k}$.",
          formulaReaction: "$$k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = 2\\pi f, \\quad v_{\\text{string}} = \\sqrt{\\frac{T}{\\mu}}, \\quad v_{\\text{sound gas}} = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$$",
          shortcuts: "Laplace correction: Sound in gas is ADIABATIC ($\\gamma P$), not isothermal ($P$).",
          importantResults: "Intensity of wave $I \\propto A^2 f^2 \\rho v$."
        }
      },
      {
        subtopic: "Standing Waves, Organ Pipes, Beats & Doppler Effect",
        sections: {
          concept: "Standing waves formed by superposition of two identical waves traveling in opposite directions. Beats frequency $f_{\\text{beat}} = |f_1 - f_2|$.",
          formulaReaction: "$$\\text{Stretched String (both ends fixed): } f_n = n \\left(\\frac{v}{2L}\\right) = n f_1 \\quad (n=1,2,3...)$$\n$$\\text{Open Organ Pipe (both ends open): } f_n = n \\left(\\frac{v}{2L}\\right) \\quad (\\text{all harmonics})$$\n$$\\text{Closed Organ Pipe (one end closed): } f_n = (2n - 1) \\left(\\frac{v}{4L}\\right) \\quad (\\text{odd harmonics only})$$\n$$\\text{Doppler Effect: } f' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$$",
          shortcuts: "Closed organ pipe produces ONLY ODD harmonics ($1, 3, 5, \\dots$). Fundamental frequency of open pipe is DOUBLE that of closed pipe of same length!",
          importantResults: "End correction for organ pipe: $L_{\\text{eff}} = L + 0.6 r$ (open pipe: $L + 1.2 r$)."
        }
      }
    ]
  }
];

export const CLASS_12_PHYSICS_FORMULAS = [
  {
    id: "ph12_ch1",
    class: 12,
    chapterNumber: 1,
    chapter: "Electric Charges and Fields",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Coulomb's Law, Field & Dipole",
        sections: {
          concept: "Quantization of charge $q = \\pm n e$. Coulomb's Law $F = \\frac{1}{4\\pi\\epsilon_0} \\frac{|q_1 q_2|}{r^2}$. Electric Dipole Moment $\\vec{p} = q \\cdot 2\\vec{a}$.",
          formulaReaction: "$$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2}, \\quad E_{\\text{axial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}, \\quad E_{\\text{equatorial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$$\n$$\\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta$$",
          shortcuts: "$E_{\\text{axial}} = 2 E_{\\text{equatorial}}$ for short dipole at same distance $r$. Torque is maximum when $\\theta = 90^\\circ$.",
          importantResults: "Stable equilibrium: $\\theta = 0^\\circ$ ($U = -pE$). Unstable equilibrium: $\\theta = 180^\\circ$ ($U = +pE$)."
        }
      },
      {
        subtopic: "Gauss's Law & Applications",
        sections: {
          concept: "Electric Flux $\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\epsilon_0}$. Gauss's Law relates flux to enclosed charge.",
          formulaReaction: "$$\\text{Line Charge (infinite): } E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}, \\quad \\text{Plane Sheet (infinite): } E = \\frac{\\sigma}{2\\epsilon_0}$$\n$$\\text{Spherical Shell: } E_{\\text{out}} = \\frac{q}{4\\pi\\epsilon_0 r^2}, \\quad E_{\\text{surface}} = \\frac{q}{4\\pi\\epsilon_0 R^2}, \\quad E_{\\text{in}} = 0$$",
          shortcuts: "Electric field inside a uniformly charged conducting or hollow spherical shell is ZERO ($E_{\\text{in}} = 0$).",
          importantResults: "Solid insulating charged sphere inside field: $E_{\\text{in}} = \\frac{\\rho r}{3\\epsilon_0} \\propto r$."
        }
      }
    ]
  },
  {
    id: "ph12_ch2",
    class: 12,
    chapterNumber: 2,
    chapter: "Electrostatic Potential and Capacitance",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Electric Potential, Equipotential & Dipole Potential",
        sections: {
          concept: "Electric potential $V = \\frac{W_{\\infty \\to r}}{q}$. Relation with field: $\\vec{E} = -\\nabla V = -\\frac{dV}{dr} \\hat{r}$. Equipotential surface: $V = \\text{const}, \\vec{E} \\perp \\text{surface}$.",
          formulaReaction: "$$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r}, \\quad V_{\\text{dipole}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p \\cos\\theta}{r^2}, \\quad U = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r}$$",
          shortcuts: "Potential on equatorial line of dipole is ZERO ($V_{\\text{eq}} = 0$), but electric field is NON-ZERO!",
          importantResults: "Work done moving charge on equipotential surface is ZERO ($W = q \\Delta V = 0$)."
        }
      },
      {
        subtopic: "Capacitance, Dielectrics & Energy Stored",
        sections: {
          concept: "Capacitance $C = \\frac{Q}{V}$. Parallel Plate Capacitor $C_0 = \\frac{\\epsilon_0 A}{d}$. Dielectric constant $K = \\epsilon_r = \\frac{C}{C_0}$.",
          formulaReaction: "$$C = \\frac{K \\epsilon_0 A}{d}, \\quad U = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C}, \\quad u_E = \\frac{1}{2} \\epsilon_0 E^2$$\n$$\\text{Series: } \\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}, \\quad \\text{Parallel: } C_p = C_1 + C_2$$",
          shortcuts: "Inserting dielectric slab ($K$) with battery connected: $V$ constant, $C \\to K C_0, Q \\to K Q_0, U \\to K U_0$. With battery disconnected: $Q$ constant, $C \\to K C_0, V \\to V_0/K, U \\to U_0/K$.",
          importantResults: "Common potential after connecting two charged capacitors: $V_{\\text{common}} = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$."
        }
      }
    ]
  },
  {
    id: "ph12_ch3",
    class: 12,
    chapterNumber: 3,
    chapter: "Current Electricity",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Ohm's Law, Drift Velocity & Resistance",
        sections: {
          concept: "Current density $J = \\frac{I}{A} = n e v_d = \\sigma E$. Drift velocity $v_d = \\frac{e E \\tau}{m}$. Resistance $R = \\rho \\frac{L}{A} = \\frac{m L}{n e^2 \\tau A}$.",
          formulaReaction: "$$v_d = \\frac{e E \\tau}{m} = \\frac{e V \\tau}{m L}, \\quad I = n e A v_d, \\quad R = \\rho \\frac{L}{A}, \\quad R(T) = R_0 (1 + \\alpha \\Delta T)$$",
          shortcuts: "If wire stretched to $n$ times its length ($L' = n L$), resistance becomes $n^2$ times ($R' = n^2 R$) because volume remains constant!",
          importantResults: "Mobility $\\mu = \\frac{v_d}{E} = \\frac{e \\tau}{m}$. Conductance $G = \\frac{1}{R}$, Conductivity $\\sigma = \\frac{1}{\\rho}$."
        }
      },
      {
        subtopic: "Cells, Kirchhoff's Laws & Measuring Instruments",
        sections: {
          concept: "EMF $\\mathcal{E}$, Internal resistance $r$, Terminal voltage $V = \\mathcal{E} - I r$ (discharging), $V = \\mathcal{E} + I r$ (charging). Kirchhoff's Junction & Loop Rules.",
          formulaReaction: "$$V = \\mathcal{E} - I r, \\quad I = \\frac{\\mathcal{E}}{R + r}, \\quad r = R \\left(\\frac{\\mathcal{E}}{V} - 1\\right)$$\n$$\\text{Wheatstone Bridge Balance: } \\frac{P}{Q} = \\frac{R}{S} \\implies V_B = V_D$$\n$$\\text{Potentiometer: } \\frac{\\mathcal{E}_1}{\\mathcal{E}_2} = \\frac{l_1}{l_2}, \\quad r = R \\left(\\frac{l_1 - l_2}{l_2}\\right)$$",
          shortcuts: "Meter Bridge works on Wheatstone principle: $\\frac{R}{S} = \\frac{l}{100 - l}$. Potentiometer is an ideal voltmeter because it draws NO current at balance point!",
          importantResults: "Maximum Power Transfer Theorem: Power delivered to load is maximum when $R = r$, yielding $P_{\\text{max}} = \\frac{\\mathcal{E}^2}{4r}$."
        }
      }
    ]
  },
  {
    id: "ph12_ch4",
    class: 12,
    chapterNumber: 4,
    chapter: "Moving Charges and Magnetism",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Lorentz Force, Cyclotron & Biot-Savart Law",
        sections: {
          concept: "Lorentz Force $\\vec{F} = q (\\vec{E} + \\vec{v} \\times \\vec{B})$. Magnetic force on moving charge $F = q v B \\sin\\theta$. Biot-Savart Law for current element $d\\vec{B}$.",
          formulaReaction: "$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}, \\quad r_{\\text{cyclotron}} = \\frac{m v}{q B} = \\frac{p}{q B}, \\quad T = \\frac{2\\pi m}{q B}$$\n$$\\text{Straight Wire (infinite): } B = \\frac{\\mu_0 I}{2\\pi r}, \\quad \\text{Circular Center: } B = \\frac{\\mu_0 I}{2 R}$$",
          shortcuts: "Cyclotron frequency $f = \\frac{q B}{2\\pi m}$ is INDEPENDENT of speed $v$ and radius $r$! Work done by magnetic force is ALWAYS ZERO ($W = 0$).",
          importantResults: "Axial field of circular coil: $B_x = \\frac{\\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}}$."
        }
      },
      {
        subtopic: "Ampere's Law, Parallel Wires & Galvanometer",
        sections: {
          concept: "Ampere's Circuital Law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$. Solenoid field $B = \\mu_0 n I$. Force per unit length between parallel current wires.",
          formulaReaction: "$$\\text{Solenoid: } B = \\mu_0 n I, \\quad \\text{Parallel Wires: } \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$\n$$\\text{Galvanometer Torque: } \\tau = N I A B = C \\theta \\implies I = \\frac{C}{NAB} \\theta$$\n$$\\text{Shunt for Ammeter: } S = \\frac{I_g G}{I - I_g}, \\quad \\text{Series R for Voltmeter: } R = \\frac{V}{I_g} - G$$",
          shortcuts: "Parallel currents ATTRACT; antiparallel currents REPEL. Ammeter has LOW resistance (ideal = 0); Voltmeter has HIGH resistance (ideal = $\\infty$).",
          importantResults: "Definition of 1 Ampere: Force of $2 \\times 10^{-7} \\text{ N/m}$ between parallel wires 1 meter apart in vacuum."
        }
      }
    ]
  },
  {
    id: "ph12_ch5",
    class: 12,
    chapterNumber: 5,
    chapter: "Magnetism and Matter",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Bar Magnet, Earth's Magnetism & Magnetic Properties",
        sections: {
          concept: "Magnetic Dipole Moment $\\vec{M} = m \\cdot 2\\vec{l} = I \\vec{A}$. Earth's magnetic elements: Declination $\\theta$, Dip angle $\\delta$, Horizontal component $B_H$.",
          formulaReaction: "$$B_H = B_E \\cos\\delta, \\quad B_V = B_E \\sin\\delta, \\quad \\tan\\delta = \\frac{B_V}{B_H}, \\quad B_E = \\sqrt{B_H^2 + B_V^2}$$\n$$\\text{Magnetization: } M = \\frac{m_{\\text{net}}}{V}, \\quad \\text{Susceptibility: } \\chi_m = \\frac{M}{H}, \\quad \\mu_r = 1 + \\chi_m$$",
          shortcuts: "Diamagnetic ($\\chi_m < 0, \\mu_r < 1$, repelled by magnet, independent of T). Paramagnetic ($\\chi_m > 0$, attracted, Curie's Law $\\chi_m \\propto 1/T$). Ferromagnetic ($\\chi_m \\gg 1$, domain structure, hysteresis).",
          importantResults: "At magnetic poles: Dip angle $\\delta = 90^\\circ, B_H = 0$. At magnetic equator: Dip angle $\\delta = 0^\\circ, B_V = 0$."
        }
      }
    ]
  },
  {
    id: "ph12_ch6",
    class: 12,
    chapterNumber: 6,
    chapter: "Electromagnetic Induction",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Faraday's Law, Lenz's Law & Motional EMF",
        sections: {
          concept: "Magnetic Flux $\\Phi_B = \\vec{B} \\cdot \\vec{A} = B A \\cos\\theta$. Faraday's Law: Induced EMF $\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}$. Lenz's Law: Induced current opposes cause.",
          formulaReaction: "$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\quad \\text{Motional EMF: } \\mathcal{E} = B L v, \\quad \\text{Rotating Rod: } \\mathcal{E} = \\frac{1}{2} B \\omega L^2$$",
          shortcuts: "Lenz's law is a direct consequence of Conservation of Energy! Charge flown $q = \\int I dt = \\frac{\\Delta \\Phi_B}{R}$.",
          importantResults: "Eddy currents: Induced circulating currents in bulk conductors; minimized by laminating metal cores."
        }
      },
      {
        subtopic: "Inductance & AC Generator",
        sections: {
          concept: "Self-inductance $L$: $\\Phi = L I \\implies \\mathcal{E} = -L \\frac{dI}{dt}$. Mutual inductance $M$: $\\Phi_2 = M I_1 \\implies \\mathcal{E}_2 = -M \\frac{dI_1}{dt}$.",
          formulaReaction: "$$L_{\\text{solenoid}} = \\mu_0 n^2 A L = \\frac{\\mu_0 N^2 A}{L}, \\quad M = k \\sqrt{L_1 L_2}, \\quad U_{\\text{inductor}} = \\frac{1}{2} L I^2$$\n$$\\text{AC Generator: } \\mathcal{E}(t) = \\mathcal{E}_0 \\sin(\\omega t) = N A B \\omega \\sin(\\omega t)$$",
          shortcuts: "Coupling coefficient $0 \\le k \\le 1$ ($k=1$ for ideal tight coupling). Energy density of magnetic field $u_B = \\frac{B^2}{2\\mu_0}$.",
          importantResults: "Self-inductance behaves as electrical inertia (opposes changes in current)."
        }
      }
    ]
  },
  {
    id: "ph12_ch7",
    class: 12,
    chapterNumber: 7,
    chapter: "Alternating Current",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "AC Parameters, Phasors & Pure Circuits",
        sections: {
          concept: "Sinusoidal AC voltage $V(t) = V_0 \\sin(\\omega t)$. RMS values $V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 V_0$, $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$.",
          formulaReaction: "$$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad I_{\\text{avg (half cycle)}} = \\frac{2 I_0}{\\pi} \\approx 0.637 I_0$$\n$$\\text{Inductive Reactance: } X_L = \\omega L = 2\\pi f L, \\quad \\text{Capacitive Reactance: } X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}$$",
          shortcuts: "Pure Resistor: $V$ and $I$ in phase ($\xFF=0$). Pure Inductor: $V$ leads $I$ by $90^\circ$ ($\xFF=+\pi/2$). Pure Capacitor: $I$ leads $V$ by $90^\circ$ ($\xFF=-\pi/2$).",
          importantResults: "DC voltage blocked by capacitor ($X_C = \\infty$ at $f=0$). Inductor passes DC ($X_L = 0$ at $f=0$)."
        }
      },
      {
        subtopic: "Series LCR Circuit, Resonance & Transformer",
        sections: {
          concept: "Series LCR Impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$. Resonance occurs when $X_L = X_C$, minimizing impedance ($Z_{\\text{min}} = R$).",
          formulaReaction: "$$Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\tan\\phi = \\frac{X_L - X_C}{R}, \\quad f_r = \\frac{1}{2\\pi \\sqrt{L C}}$$\n$$P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi, \\quad \\text{Power Factor: } \\cos\\phi = \\frac{R}{Z}, \\quad Q\\text{-factor} = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$\n$$\\text{Transformer: } \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$$",
          shortcuts: "At resonance: $Z = R$ (purely resistive), current $I$ is MAXIMUM, phase angle $\\phi = 0$, power factor $\\cos\\phi = 1$.",
          importantResults: "Wattless current: Component $I_{\\text{rms}} \\sin\\phi$ that consumes ZERO average power."
        }
      }
    ]
  },
  {
    id: "ph12_ch8",
    class: 12,
    chapterNumber: 8,
    chapter: "Electromagnetic Waves",
    category: "Electricity & Magnetism",
    subtopics: [
      {
        subtopic: "Displacement Current, Maxwell's Equations & EM Spectrum",
        sections: {
          concept: "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ fixes Ampere's Law inconsistency. EM waves are transverse self-propagating $\\vec{E}$ and $\\vec{B}$ fields.",
          formulaReaction: "$$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}, \\quad c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = \\frac{E_0}{B_0}, \\quad v = \\frac{1}{\\sqrt{\\mu \\epsilon}}$$\n$$u_{\\text{total}} = u_E + u_B = \\frac{1}{2} \\epsilon_0 E_{\\text{rms}}^2 + \\frac{B_{\\text{rms}}^2}{2\\mu_0} = \\epsilon_0 E_{\\text{rms}}^2, \\quad I = c u_{\\text{total}}$$",
          shortcuts: "EM Spectrum order (increasing frequency / decreasing wavelength): Radio $\\to$ Microwave $\\to$ IR $\\to$ Visible $\\to$ UV $\\to$ X-rays $\\to$ Gamma rays. Mnemonic: R-M-I-V-U-X-G.",
          importantResults: "Poynting Vector $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ gives direction and magnitude of energy flow rate per unit area."
        }
      }
    ]
  },
  {
    id: "ph12_ch9",
    class: 12,
    chapterNumber: 9,
    chapter: "Ray Optics and Optical Instruments",
    category: "Optics",
    subtopics: [
      {
        subtopic: "Reflection, Refraction, TIR & Lens Maker's Formula",
        sections: {
          concept: "Snell's Law $n_1 \\sin i = n_2 \\sin r$. Total Internal Reflection (TIR) when light travels from denser to rarer medium with $i > i_c$.",
          formulaReaction: "$$\\sin i_c = \\frac{1}{n}, \\quad \\text{Mirror Formula: } \\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}, \\quad \\text{Lens Formula: } \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$$\n$$\\text{Lens Maker's Formula: } \\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\quad P = \\frac{1}{f \\text{ (m)}} = P_1 + P_2$$",
          shortcuts: "Apparent depth $h' = \\frac{h}{n}$. Normal shift $\\Delta d = h \\left(1 - \\frac{1}{n}\\right)$. Focal length of lens immersed in liquid of refractive index $n_l$: $\\frac{f_l}{f_a} = \\frac{n_g - 1}{n_g/n_l - 1}$.",
          importantResults: "Equiconvex lens ($R_1 = +R, R_2 = -R$) of glass ($n=1.5$): $f = R$."
        }
      },
      {
        subtopic: "Prism Dispersion & Optical Instruments",
        sections: {
          concept: "Prism deviation $\\delta = i + e - A$. Minimum deviation $\\delta_m$ occurs when $i = e$ and ray inside prism is parallel to base.",
          formulaReaction: "$$n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}, \\quad \\text{Small Angle Prism: } \\delta = (n - 1) A$$\n$$\\text{Compound Microscope: } M = m_o \\times m_e = -\\frac{L}{f_o} \\left(1 + \\frac{D}{f_e}\\right)$$\n$$\\text{Astronomical Telescope: } M = -\\frac{f_o}{f_e}, \\quad \\text{Tube Length } L = f_o + f_e$$",
          shortcuts: "For telescope in normal adjustment: Magnification $M = \\frac{f_o}{f_e}$, Tube length $L = f_o + f_e$. To increase magnification, make $f_o$ LARGE and $f_e$ SMALL.",
          importantResults: "Dispersive power of prism $\\omega = \\frac{n_v - n_r}{n_y - 1} = \\frac{\\delta_v - \\delta_r}{\\delta_y}$."
        }
      }
    ]
  },
  {
    id: "ph12_ch10",
    class: 12,
    chapterNumber: 10,
    chapter: "Wave Optics",
    category: "Optics",
    subtopics: [
      {
        subtopic: "Huygens' Principle, Interference & YDSE",
        sections: {
          concept: "Huygens' Principle: Every point on wavefront acts as secondary spherical wavelet. Interference: Superposition of coherent light waves.",
          formulaReaction: "$$I = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos\\phi, \\quad I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2, \\quad I_{\\text{min}} = (\\sqrt{I_1} - \\sqrt{I_2})^2$$\n$$\\text{YDSE Fringe Width: } \\beta = \\frac{\\lambda D}{d}, \\quad y_n^{\\text{bright}} = \\frac{n \\lambda D}{d}, \\quad y_n^{\\text{dark}} = \\left(n - \\frac{1}{2}\\right) \\frac{\\lambda D}{d}$$",
          shortcuts: "If identical sources ($I_1 = I_2 = I_0$), $I_{\\text{max}} = 4 I_0, I_{\\text{min}} = 0$, average intensity $I_{\\text{avg}} = 2 I_0$.",
          importantResults: "Shift of fringe pattern by inserting thin film of thickness $t$: $\\Delta y = \\frac{(n - 1) t D}{d}$."
        }
      },
      {
        subtopic: "Diffraction & Polarization",
        sections: {
          concept: "Single slit diffraction bending of light around edges. Polarization restricts electric field vector oscillations to single plane.",
          formulaReaction: "$$\\text{Diffraction Minima: } a \\sin\\theta = n \\lambda, \\quad \\text{Central Maxima Width: } \\beta_0 = \\frac{2 \\lambda D}{a}$$\n$$\\text{Malus' Law: } I = I_0 \\cos^2\\theta, \\quad \\text{Brewster's Law: } n = \\tan i_p \\implies i_p + r_p = 90^\\circ$$",
          shortcuts: "Unpolarized light passing through linear polarizer loses $50\\%$ intensity ($I = I_0 / 2$). At Brewster angle, reflected and refracted rays are PERPENDICULAR ($90^\circ$).",
          importantResults: "Resolving power of microscope $= \\frac{2 n \\sin\\theta}{1.22 \\lambda}$. Telescope $= \\frac{D}{1.22 \\lambda}$."
        }
      }
    ]
  },
  {
    id: "ph12_ch11",
    class: 12,
    chapterNumber: 11,
    chapter: "Dual Nature of Radiation and Matter",
    category: "Modern Physics",
    subtopics: [
      {
        subtopic: "Photoelectric Effect & Einstein's Equation",
        sections: {
          concept: "Emission of electrons when light of frequency $\\nu > \\nu_0$ falls on metal surface. Photoelectric current $\\propto$ intensity.",
          formulaReaction: "$$E = h \\nu = \\frac{hc}{\\lambda}, \\quad K_{\\text{max}} = h \\nu - \\Phi = e V_0, \\quad \\Phi = h \\nu_0 = \\frac{hc}{\\lambda_0}$$\n$$e V_0 = h \\nu - h \\nu_0 \\implies V_0 = \\left(\\frac{h}{e}\\right) \\nu - \\frac{\\Phi}{e}$$",
          shortcuts: "Stopping potential $V_0$ is independent of intensity! Slope of $V_0$ vs $\\nu$ graph equals $\\frac{h}{e}$ (universal constant for all metals).",
          importantResults: "Photon momentum $p = \\frac{E}{c} = \\frac{h}{\\lambda}$."
        }
      },
      {
        subtopic: "de Broglie Wavelength & Matter Waves",
        sections: {
          concept: "Dual nature of matter: Moving particles exhibit wave properties. de Broglie wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{m v}$.",
          formulaReaction: "$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2 m K}} = \\frac{h}{\\sqrt{2 m q V}}$$\n$$\\text{For Electron accelerated through } V \\text{ Volts: } \\lambda_e = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA} = \\sqrt{\\frac{1.5}{V}} \\text{ nm}$$",
          shortcuts: "Electron at $V = 100 \\text{ V} \\implies \\lambda_e = \\frac{12.27}{\\sqrt{100}} = 1.227 \\text{ \\AA}$.",
          importantResults: "Davisson-Germer experiment confirmed wave nature of electrons via diffraction rings."
        }
      }
    ]
  },
  {
    id: "ph12_ch12",
    class: 12,
    chapterNumber: 12,
    chapter: "Atoms",
    category: "Modern Physics",
    subtopics: [
      {
        subtopic: "Rutherford Model, Bohr Postulates & Hydrogen Spectrum",
        sections: {
          concept: "Rutherford alpha scattering. Bohr postulates: Quantized angular momentum $L = m v r = \\frac{n h}{2\\pi}$. Transition energy $\\Delta E = h \\nu = E_2 - E_1$.",
          formulaReaction: "$$r_n = \\frac{n^2 h^2 \\epsilon_0}{\\pi m e^2 Z} = 0.529 \\frac{n^2}{Z} \\text{ \\AA}, \\quad v_n = \\frac{e^2}{2 \\epsilon_0 h} \\frac{Z}{n} = 2.18 \\times 10^6 \\frac{Z}{n} \\text{ m/s}$$\n$$E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}, \\quad K_n = -E_n = +13.6 \\frac{Z^2}{n^2}, \\quad U_n = 2 E_n = -27.2 \\frac{Z^2}{n^2}$$\n$$\\text{Rydberg Formula: } \\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$",
          shortcuts: "Hydrogen ground state ($Z=1, n=1$): $E_1 = -13.6 \\text{ eV}, E_2 = -3.4 \\text{ eV}, E_3 = -1.51 \\text{ eV}, E_4 = -0.85 \\text{ eV}$.",
          importantResults: "Spectral Series: Lyman (UV, $n_1=1$), Balmer (Visible, $n_1=2$), Paschen (IR, $n_1=3$), Brackett (IR, $n_1=4$), Pfund (IR, $n_1=5$)."
        }
      }
    ]
  },
  {
    id: "ph12_ch13",
    class: 12,
    chapterNumber: 13,
    chapter: "Nuclei",
    category: "Modern Physics",
    subtopics: [
      {
        subtopic: "Nuclear Density, Mass Defect & Binding Energy",
        sections: {
          concept: "Nuclear radius $R = R_0 A^{1/3}$ ($R_0 \\approx 1.2 \\text{ fm}$). Nuclear density $\\rho_{\\text{nuc}} \\approx 2.3 \\times 10^{17} \\text{ kg/m}^3$ is INDEPENDENT of mass number $A$!",
          formulaReaction: "$$\\Delta m = [Z m_p + (A - Z) m_n] - M_{\\text{nucleus}}, \\quad E_b = \\Delta m \\cdot c^2 = \\Delta m \\text{ (in amu)} \\times 931.5 \\text{ MeV}$$\n$$\\text{Binding Energy per Nucleon: } E_{bn} = \\frac{E_b}{A}$$",
          shortcuts: "Peak of $E_{bn}$ curve is around Fe-56 ($E_{bn} \\approx 8.75 \\text{ MeV/nucleon}$). High stability at peak!",
          importantResults: "Nuclear Fission (heavy nucleus splits $\\to$ releases energy) and Fusion (light nuclei fuse $\\to$ releases energy) both move toward higher $E_{bn}$ peak."
        }
      },
      {
        subtopic: "Radioactive Decay Law, Half-Life & Nuclear Reactions",
        sections: {
          concept: "Radioactive Decay Law $N(t) = N_0 e^{-\\lambda t}$. Activity $A = -\\frac{dN}{dt} = \\lambda N$. Unit 1 Becquerel (Bq) = 1 decay/sec.",
          formulaReaction: "$$N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}, \\quad \\tau_{\\text{mean}} = \\frac{1}{\\lambda} = \\frac{T_{1/2}}{0.693}$$\n$$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t / T_{1/2}} = N_0 \\left(\\frac{1}{2}\\right)^n$$",
          shortcuts: "After $n$ half-lives, fraction remaining $= \\left(\\frac{1}{2}\\right)^n$. E.g. after $3 T_{1/2}$, $1/8$ remains ($12.5\\%$).",
          importantResults: "Alpha decay ($A \\to A-4, Z \\to Z-2$). Beta minus decay ($n \\to p + e^- + \\bar{\\nu}_e$). Beta plus decay ($p \\to n + e^+ + \\nu_e$)."
        }
      }
    ]
  },
  {
    id: "ph12_ch14",
    class: 12,
    chapterNumber: 14,
    chapter: "Semiconductor Electronics",
    category: "Semiconductors",
    subtopics: [
      {
        subtopic: "Semiconductors, Doping & p-n Junction Diode",
        sections: {
          concept: "Intrinsic ($n_e = n_h = n_i$). Extrinsic n-type (pentavalent donor: $P, As, Sb \\implies n_e \\gg n_h$) & p-type (trivalent acceptor: $B, Al, Ga \\implies n_h \\gg n_e$). Mass Action Law $n_e n_h = n_i^2$.",
          formulaReaction: "$$n_e n_h = n_i^2, \\quad I = I_e + I_h = e A (n_e v_e + n_h v_h)$$\n$$\\text{Diode Equation: } I = I_0 \\left(e^{\\frac{e V}{\\eta k_B T}} - 1\\right), \\quad r_d = \\frac{\\Delta V}{\\Delta I} \\text{ (Dynamic Resistance)}$$",
          shortcuts: "Forward bias ($p \\to +, n \\to -$): depletion layer NARROWS, barrier height DECREASES. Reverse bias ($p \\to -, n \\to +$): depletion layer WIDENS, barrier INCREASES.",
          importantResults: "Rectifiers: Half-wave efficiency $\\eta = 40.6\\%$, Full-wave efficiency $\\eta = 81.2\\%$. Ripple frequency: Half-wave $f_{\\text{ripple}} = f_{\\text{ac}}$, Full-wave $f_{\\text{ripple}} = 2 f_{\\text{ac}}$."
        }
      },
      {
        subtopic: "Special Diodes, Transistor CE & Logic Gates",
        sections: {
          concept: "Zener Diode: Voltage regulator operated in reverse breakdown. Transistor CE currents: $I_E = I_B + I_C$. Current gain $\\beta = \\frac{I_C}{I_B}, \\alpha = \\frac{I_C}{I_E}$.",
          formulaReaction: "$$I_E = I_B + I_C, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}, \\quad \\alpha = \\frac{\\beta}{1 + \\beta}, \\quad A_V = \\beta \\frac{R_L}{R_{\\text{in}}}$$\n$$\\text{Logic Gates: AND (}Y=A\\cdot B\\text{), OR (}Y=A+B\\text{), NOT (}Y=\\bar{A}\\text{), NAND (}Y=\\overline{A\\cdot B}\\text{), NOR (}Y=\\overline{A+B}\\text{)}$$",
          shortcuts: "NAND and NOR are UNIVERSAL logic gates. De Morgan's Laws: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$ and $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$.",
          importantResults: "Transistor as CE amplifier has $180^\\circ$ phase inversion between input and output voltages!"
        }
      }
    ]
  }
];

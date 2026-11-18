export const PHYSICS_CONSTANTS = [
  { name: "Speed of Light in Vacuum", symbol: "c", value: "3.00 \\times 10^8", unit: "\\text{m/s}", usage: "Electromagnetic radiation, relativity, photon momentum." },
  { name: "Universal Gravitational Constant", symbol: "G", value: "6.674 \\times 10^{-11}", unit: "\\text{N}\\cdot\\text{m}^2/\\text{kg}^2", usage: "Newton's law of gravitation, Kepler's third law, satellite motion." },
  { name: "Standard Acceleration due to Gravity", symbol: "g", value: "9.80665 \\approx 9.8", unit: "\\text{m/s}^2", usage: "Free fall, weight, hydrostatic pressure, simple pendulum." },
  { name: "Elementary Charge", symbol: "e", value: "1.602 \\times 10^{-19}", unit: "\\text{C}", usage: "Charge of electron/proton, quantization of charge." },
  { name: "Electron Rest Mass", symbol: "m_e", value: "9.109 \\times 10^{-31}", unit: "\\text{kg}", usage: "Cathode rays, Bohr atom model, photoelectric effect." },
  { name: "Proton Rest Mass", symbol: "m_p", value: "1.6726 \\times 10^{-27}", unit: "\\text{kg}", usage: "Nuclear mass, atomic structure reference." },
  { name: "Neutron Rest Mass", symbol: "m_n", value: "1.6749 \\times 10^{-27}", unit: "\\text{kg}", usage: "Nuclear mass defect, binding energy." },
  { name: "Planck Constant", symbol: "h", value: "6.626 \\times 10^{-34}", unit: "\\text{J}\\cdot\\text{s}", usage: "Photon energy $E = h\\nu$, de Broglie wavelength." },
  { name: "Reduced Planck Constant", symbol: "\\hbar = h / (2\\pi)", value: "1.0545 \\times 10^{-34}", unit: "\\text{J}\\cdot\\text{s}", usage: "Bohr angular momentum quantization $L = n \\hbar$." },
  { name: "Permittivity of Free Space", symbol: "\\epsilon_0", value: "8.854 \\times 10^{-12}", unit: "\\text{C}^2/(\\text{N}\\cdot\\text{m}^2)", usage: "Coulomb's law, capacitance, Gauss's law." },
  { name: "Electrostatic Constant (Coulomb)", symbol: "k = \\frac{1}{4\\pi\\epsilon_0}", value: "8.9875 \\times 10^9 \\approx 9 \\times 10^9", unit: "\\text{N}\\cdot\\text{m}^2/\\text{C}^2", usage: "Electrostatic force and field calculations." },
  { name: "Permeability of Free Space", symbol: "\\mu_0", value: "4\\pi \\times 10^{-7} \\approx 1.257 \\times 10^{-6}", unit: "\\text{T}\\cdot\\text{m/A}", usage: "Biot-Savart law, Ampere's law, magnetic fields." },
  { name: "Avogadro Constant", symbol: "N_A", value: "6.022 \\times 10^{23}", unit: "\\text{mol}^{-1}", usage: "Conversion between moles and molecules." },
  { name: "Boltzmann Constant", symbol: "k_B = R / N_A", value: "1.3806 \\times 10^{-23}", unit: "\\text{J/K}", usage: "Kinetic theory of gases, equipartition of energy." },
  { name: "Universal Gas Constant", symbol: "R", value: "8.314", unit: "\\text{J}/(\\text{mol}\\cdot\\text{K})", usage: "Ideal gas equation $P V = n R T$." },
  { name: "Atomic Mass Unit (1 u)", symbol: "1 \\text{ u}", value: "1.6605 \\times 10^{-27}", unit: "\\text{kg}", usage: "Nuclear mass defect ($1 \\text{ u} \\equiv 931.5 \\text{ MeV}$)." },
  { name: "Rydberg Constant", symbol: "R_H", value: "1.097 \\times 10^7", unit: "\\text{m}^{-1}", usage: "Hydrogen spectral line wavelengths." },
  { name: "Bohr Radius (First orbit)", symbol: "r_1", value: "5.2917 \\times 10^{-11} = 0.529", unit: "\\text{\\AA}", usage: "Ground state radius of hydrogen atom." }
];

export const PHYSICS_CONVERSIONS_AND_APPROX = [
  { name: "Electron-Volt to Joules", relation: "1 \\text{ eV} = 1.602 \\times 10^{-19} \\text{ J}", note: "Energy unit in atomic and nuclear physics." },
  { name: "Angstrom to Meters", relation: "1 \\text{ \\AA} = 10^{-10} \\text{ m}", note: "Wavelength of X-rays, atomic dimensions." },
  { name: "Nanometer to Meters", relation: "1 \\text{ nm} = 10^{-9} \\text{ m}", note: "Wavelength of visible light (400 - 700 nm)." },
  { name: "Femtometer (Fermi) to Meters", relation: "1 \\text{ fm} = 10^{-15} \\text{ m}", note: "Nuclear radius scale." },
  { name: "Pi Constant", relation: "\\pi \\approx 3.14159 \\approx \\frac{22}{7}", note: "Circular and spherical calculations." },
  { name: "Square Root of 2", relation: "\\sqrt{2} \\approx 1.414", note: "RMS calculations ($V_{\\text{rms}} = V_0 / \\sqrt{2}$)." },
  { name: "Square Root of 3", relation: "\\sqrt{3} \\approx 1.732", note: "3-phase AC, vector components." },
  { name: "Sine 30° / Cosine 60°", relation: "\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2} = 0.5", note: "Trigonometric value." },
  { name: "Cosine 30° / Sine 60°", relation: "\\cos 30^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866", note: "Trigonometric value." },
  { name: "Sine 45° / Cosine 45°", relation: "\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}} \\approx 0.707", note: "Trigonometric value." }
];

// Complete & Exhaustive Chemistry Formula & Concept Database
// All 28 Chapters Validated

export const CLASS_11_CHEMISTRY_FORMULAS = [
  {
    "id": "ch11_ch1",
    "class": 11,
    "chapterNumber": 1,
    "chapter": "Some Basic Concepts of Chemistry",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Matter, SI Units & Dimensional Analysis",
        "sections": {
          "concept": "Matter exists as solid, liquid, gas. Base SI units: Mass (kg), Length (m), Time (s), Electric Current (A), Temperature (K), Amount of Substance (mol), Luminous Intensity (cd). Significant figures count non-zero digits, trailing zeros after decimal, zeros between non-zeros.",
          "formulaReaction": "$$\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$$, $$T(K) = T(^\\circ C) + 273.15$$, $$T(^\\circ F) = \\frac{9}{5} T(^\\circ C) + 32$$",
          "shortcuts": "Trailing zeros without decimal are NOT significant (e.g. 100 has 1 sig fig, 100. has 3 sig figs).",
          "importantResults": "1 L = $10^{-3} \\text{ m}^3 = 1 \\text{ dm}^3 = 1000 \\text{ mL}$. 1 amu (u) = $1.66056 \\times 10^{-24} \\text{ g}$.",
          "commonMistakes": "Confusing precision (closeness of values) with accuracy (closeness to true value)."
        }
      },
      {
        "subtopic": "Laws of Chemical Combination",
        "sections": {
          "concept": "1. Law of Conservation of Mass (Lavoisier): Total mass reactants = Total mass products.\n2. Law of Definite Proportions (Proust): Compound always contains same elements in fixed mass ratio.\n3. Law of Multiple Proportions (Dalton): Fixed mass of one element combines with simple whole number ratio mass of second.\n4. Gay-Lussac's Law: Reacting gases combine in simple volume ratios.\n5. Avogadro's Law: Equal gas volumes at same T & P contain equal molecules.",
          "formulaReaction": "$$V \\propto n \\quad (\\text{at constant } T, P)$$\n$$V_{\\text{STP}} = 22.71 \\text{ L/mol (1 bar, 273.15 K)}$$ or $$22.4 \\text{ L (at 1 atm)}$$",
          "shortcuts": "For CO and $CO_2$, mass ratio of Oxygen per 12g Carbon is 16:32 = 1:2 (Multiple Proportions).",
          "importantResults": "Law of definite proportions fails for isotopes (e.g. $H_2O$ vs $D_2O$).",
          "exceptions": "Dalton's atomic theory failed to explain isotopes, isobars, and nuclear reactions."
        }
      },
      {
        "subtopic": "Mole Concept, Molar Mass & Stoichiometry",
        "sections": {
          "concept": "Mole is amount of substance containing $N_A = 6.022 \\times 10^{23}$ particles. Molar mass is mass of 1 mole in grams.",
          "formulaReaction": "$$n = \\frac{w}{M} = \\frac{N}{N_A} = \\frac{V_{\\text{gas at STP (L)}}}{22.4}$$\n$$\\text{Molarity (M)} = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}}, \\quad \\text{Molality (m)} = \\frac{n_{\\text{solute}}}{W_{\\text{solvent (kg)}}}, \\quad \\text{Mole Fraction } (\\chi_A) = \\frac{n_A}{n_A + n_B}$$",
          "shortcuts": "$$M = \\frac{\\text{\\% w/w} \\times 10 \\times d}{M_{\\text{solute}}}$$\nMolality is temperature independent.",
          "importantResults": "Limiting Reagent is consumed completely first in reaction; dictates theoretical yield.",
          "exceptions": "Volume contraction on mixing non-ideal liquid solutions."
        }
      },
      {
        "subtopic": "Empirical & Molecular Formula, Yield & Purity",
        "sections": {
          "concept": "Empirical formula is simplest whole-number ratio. Molecular formula is actual atom count.",
          "formulaReaction": "$$\\text{Molecular Formula} = (\\text{Empirical Formula})_n, \\quad n = \\frac{\\text{Molar Mass}}{\\text{Empirical Formula Mass}}$$\n$$\\text{\\% Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100, \\quad \\text{\\% Purity} = \\frac{\\text{Pure Mass}}{\\text{Impure Mass}} \\times 100$$",
          "shortcuts": "Calculate mole ratio by dividing % mass by atomic mass.",
          "importantResults": "Hydrocarbon combustion $C_xH_y + (x + \\frac{y}{4}) O_2 \\rightarrow x CO_2 + \\frac{y}{2} H_2O$."
        }
      }
    ]
  },
  {
    "id": "ch11_ch2",
    "class": 11,
    "chapterNumber": 2,
    "chapter": "Structure of Atom",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Subatomic Particles & Early Atomic Models",
        "sections": {
          "concept": "Electron ($e^-$): charge $= -1.6 \\times 10^{-19}\\text{ C}$, mass $= 9.1 \\times 10^{-31}\\text{ kg}$. Proton ($p^+$): $+1.6 \\times 10^{-19}\\text{ C}$, mass $= 1.672 \\times 10^{-27}\\text{ kg}$. Neutron ($n^0$): neutral, mass $= 1.675 \\times 10^{-27}\\text{ kg}$. Rutherford alpha-scattering model discovered dense nucleus.",
          "formulaReaction": "$$e/m = 1.758820 \\times 10^{11} \\text{ C/kg}, \\quad r_0 = \\frac{2 Z e^2}{4\\pi \\varepsilon_0 K.E.}$$",
          "shortcuts": "Mass of neutron > Mass of proton > Mass of electron.",
          "importantResults": "Rutherford failed to explain stability of atom and discrete line spectra."
        }
      },
      {
        "subtopic": "Bohr Model & Hydrogen Spectrum",
        "sections": {
          "concept": "Bohr quantized angular momentum $mvr = \\frac{nh}{2\\pi}$. Orbits are stationary.",
          "formulaReaction": "$$r_n = 0.529 \\times \\frac{n^2}{Z} \\text{ \\AA}, \\quad v_n = 2.18 \\times 10^6 \\times \\frac{Z}{n} \\text{ m/s}$$\n$$E_n = -13.6 \\times \\frac{Z^2}{n^2} \\text{ eV} = -2.18 \\times 10^{-18} \\times \\frac{Z^2}{n^2} \\text{ J}$$\n$$\\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\quad (R_H = 109677 \\text{ cm}^{-1})$$",
          "shortcuts": "Lyman ($n_1=1$, UV), Balmer ($n_1=2$, Visible), Paschen ($n_1=3$, IR), Brackett ($n_1=4$, IR), Pfund ($n_1=5$, Far IR).",
          "importantResults": "Total spectral lines from $n_2 \\rightarrow n_1$: $\\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}$.",
          "exceptions": "Applicable ONLY to single-electron species ($H, He^+, Li^{2+}, Be^{3+}$)."
        }
      },
      {
        "subtopic": "de Broglie Wavelength & Heisenberg Uncertainty",
        "sections": {
          "concept": "de Broglie proposed wave-particle duality $\\lambda = h/p$. Heisenberg Uncertainty Principle states position and momentum cannot be measured simultaneously.",
          "formulaReaction": "$$\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m K.E.}} = \\frac{h}{\\sqrt{2m q V}}, \\quad \\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$$",
          "shortcuts": "For electron accelerated by $V$ volts: $\\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$.",
          "importantResults": "Photoelectric Effect: $h\\nu = h\\nu_0 + K.E._{\\max} = h\\nu_0 + e V_s$."
        }
      },
      {
        "subtopic": "Quantum Numbers & Electronic Configuration",
        "sections": {
          "concept": "1. Principal $n=1,2,3...$ (size/energy).\n2. Azimuthal $l=0$ to $n-1$ (shape: $s,p,d,f$).\n3. Magnetic $m_l=-l$ to $+l$ (orientation).\n4. Spin $m_s = +1/2, -1/2$.",
          "formulaReaction": "$$\\text{Orbital angular momentum} = \\sqrt{l(l+1)} \\frac{h}{2\\pi}, \\quad \\mu = \\sqrt{n(n+2)} \\text{ BM}$$",
          "shortcuts": "Radial nodes $= n - l - 1$; Angular nodes $= l$; Total nodes $= n - 1$.",
          "importantResults": "Aufbau $(n+l)$ rule; Pauli Exclusion; Hund's Rule of Maximum Multiplicity.",
          "exceptions": "$Cr ([Ar] 3d^5 4s^1)$ and $Cu ([Ar] 3d^{10} 4s^1)$ half-filled/filled stability."
        }
      }
    ]
  },
  {
    "id": "ch11_ch3",
    "class": 11,
    "chapterNumber": 3,
    "chapter": "Classification of Elements and Periodicity",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Modern Periodic Table & Effective Nuclear Charge",
        "sections": {
          "concept": "Moseley Modern Periodic Law: Properties are periodic functions of atomic number $Z$. 7 periods, 18 groups. $Z_{eff} = Z - \\sigma$ (Slater's rules).",
          "formulaReaction": "$$Z_{eff} = Z - \\sigma, \\quad \\sqrt{\\nu} = a(Z - b)$$",
          "shortcuts": "Across period: $Z_{eff} \\uparrow \\implies$ radius $\\downarrow$. Down group: shells $\\uparrow \\implies$ radius $\\uparrow$.",
          "importantResults": "Isoelectronic series: Higher positive charge $\\implies$ smaller radius ($Al^{3+} < Mg^{2+} < Na^+ < F^- < O^{2-} < N^{3-}$)."
        }
      },
      {
        "subtopic": "Periodic Trends: Radii, IE, EA & Electronegativity",
        "sections": {
          "concept": "1. Radii: $r_{\\text{vdw}} > r_{\\text{metallic}} > r_{\\text{covalent}}$.\n2. Ionization Enthalpy (IE): $IE_1 < IE_2 < IE_3$.\n3. Electron Gain Enthalpy (EGA).\n4. Electronegativity (EN): Pauling scale.",
          "formulaReaction": "$$\\text{Pauling: } |X_A - X_B| = 0.102 \\sqrt{\\Delta \\text{ (kJ/mol)}}, \\quad \\text{Mulliken: } X_M = \\frac{IE + EA}{2}$$",
          "shortcuts": "EN order: $F (4.0) > O (3.5) > N (3.0) \\approx Cl (3.0) > Br (2.8) > I (2.5) > H (2.1)$.",
          "importantResults": "Chlorine has MORE negative electron gain enthalpy than Fluorine ($Cl > F > Br > I$) due to small size of $F$.",
          "exceptions": "$IE_1$ of $N (2p^3) > IE_1$ of $O (2p^4)$ due to half-filled stability. $IE_1$ of $Be > B$."
        }
      }
    ]
  },
  {
    "id": "ch11_ch4",
    "class": 11,
    "chapterNumber": 4,
    "chapter": "Chemical Bonding and Molecular Structure",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Ionic Bond, Lattice Energy & Fajan's Rules",
        "sections": {
          "concept": "Ionic bond favored by low IE, high negative EA, high lattice energy ($U$). Fajan's Rules: Covalent character increases with smaller cation, larger anion, higher charge, pseudo-noble gas configuration ($18 e^-$).",
          "formulaReaction": "$$U \\propto \\frac{|q_1 q_2|}{r_+ + r_-}, \\quad \\mu = q \\times d, \\quad \\text{Formal Charge} = V - L - \\frac{1}{2} B$$",
          "shortcuts": "High polarizing power $\\implies$ high covalent character $\\implies$ lower MP, lower solubility in water.",
          "importantResults": "Dipole moment $\\mu=0$ for symmetrical molecules ($CO_2, BF_3, CCl_4, SF_6, XeF_4$)."
        }
      },
      {
        "subtopic": "VSEPR Theory & Hybridization",
        "sections": {
          "concept": "VSEPR repulsion order: lp-lp > lp-bp > bp-bp. Steric number dictates hybridization and geometry.",
          "formulaReaction": "$$\\text{Steric Number H} = \\frac{1}{2} [V + M - C + A]$$",
          "shortcuts": "H=2 ($sp$ Linear), H=3 ($sp^2$ Trigonal Planar), H=4 ($sp^3$ Tetrahedral), H=5 ($sp^3d$ Trigonal Bipyramidal), H=6 ($sp^3d^2$ Octahedral), H=7 ($sp^3d^3$ Pentagonal Bipyramidal).",
          "importantResults": "In $sp^3d$ ($PCl_5$), axial bonds are longer/weaker than equatorial. Lone pairs prefer equatorial in $sp^3d$ ($SF_4$ seesaw, $ClF_3$ T-shape, $XeF_2$ linear).",
          "exceptions": "Drago's Rule: $PH_3, AsH_3, H_2S, H_2Se$ have unhybridized $p$-orbitals (angles $\\approx 90^\\circ$)."
        }
      },
      {
        "subtopic": "Molecular Orbital Theory (MOT) & H-Bonding",
        "sections": {
          "concept": "LCAO method. For $\\le 14 e^-$ ($N_2$): $\\sigma 1s < \\sigma^* 1s < \\sigma 2s < \\sigma^* 2s < (\\pi 2p_x = \\pi 2p_y) < \\sigma 2p_z$. For $>14 e^-$ ($O_2$): $\\sigma 2p_z$ precedes $\\pi 2p$.",
          "formulaReaction": "$$\\text{Bond Order} = \\frac{N_b - N_a}{2}, \\quad \\text{Bond Length} \\propto \\frac{1}{\\text{Bond Order}}$$",
          "shortcuts": "$N_2$ (14e): B.O.=3.0. $O_2$ (16e): B.O.=2.0 (Paramagnetic, 2 unpaired $e^-$ in $\\pi^*$). $O_2^+$ (15e): B.O.=2.5. $O_2^-$ (17e): B.O.=1.5.",
          "importantResults": "Intermolecular H-bonding increases boiling point ($H_2O > H_2S$). Intramolecular H-bonding ($o$-nitrophenol) lowers BP compared to intermolecular ($p$-nitrophenol)."
        }
      }
    ]
  },
  {
    "id": "ch11_ch5",
    "class": 11,
    "chapterNumber": 5,
    "chapter": "Thermodynamics",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "First Law, Work, Heat & Enthalpy",
        "sections": {
          "concept": "Open, closed, isolated systems. State functions ($U,H,S,G,P,V,T$) vs Path functions ($w,q$). First Law $\\Delta U = q + w$.",
          "formulaReaction": "$$w_{\\text{rev, iso}} = -2.303 n R T \\log\\left(\\frac{V_2}{V_1}\\right), \\quad w_{\\text{irrev}} = -P_{\\text{ext}} \\Delta V, \\quad \\Delta H = \\Delta U + \\Delta n_g R T$$",
          "shortcuts": "Free expansion in vacuum ($P_{\\text{ext}}=0$): $w=0, q=0, \\Delta T=0$.",
          "importantResults": "Adiabatic process ($q=0$): $T V^{\\gamma-1} = \\text{const}$, $\\gamma = C_p/C_v$."
        }
      },
      {
        "subtopic": "Thermochemistry & Hess's Law",
        "sections": {
          "concept": "Standard Enthalpy of Formation $\\Delta_f H^\\circ$. Hess's Law: Enthalpy change is independent of path.",
          "formulaReaction": "$$\\Delta_r H^\\circ = \\sum \\Delta_f H^\\circ(\\text{prod}) - \\sum \\Delta_f H^\\circ(\\text{react}) = \\sum \\text{B.E.}(\\text{react}) - \\sum \\text{B.E.}(\\text{prod})$$",
          "shortcuts": "Neutralization of strong acid + strong base $= -57.1 \\text{ kJ/mol} = -13.7 \\text{ kcal/mol}$.",
          "importantResults": "Kirchhoff's Law: $\\Delta H_2 - \\Delta H_1 = \\Delta C_p (T_2 - T_1)$."
        }
      },
      {
        "subtopic": "Entropy, Spontaneity & Second/Third Laws",
        "sections": {
          "concept": "Entropy $S$ measures disorder. Second Law: $\\Delta S_{\\text{total}} > 0$ for spontaneous process. Gibbs Free Energy $G = H - TS$.",
          "formulaReaction": "$$\\Delta S = \\frac{q_{\\text{rev}}}{T}, \\quad \\Delta G = \\Delta H - T \\Delta S, \\quad \\Delta G^\\circ = -2.303 R T \\log K_{\\text{eq}}$$",
          "shortcuts": "Spontaneous when $\\Delta G < 0$. If $\\Delta H > 0, \\Delta S > 0 \\implies$ spontaneous at HIGH T ($T > \\Delta H / \\Delta S$).",
          "importantResults": "Third Law: Entropy of pure crystalline solid is zero at 0 K.",
          "exceptions": "Residual entropy at 0 K in $CO, N_2O, ice$ due to disorder."
        }
      }
    ]
  },
  {
    "id": "ch11_ch6",
    "class": 11,
    "chapterNumber": 6,
    "chapter": "Equilibrium",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Chemical Equilibrium & Le Chatelier's Principle",
        "sections": {
          "concept": "Dynamic equilibrium. Law of Mass Action $K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$. Pure solids/liquids active mass $= 1$.",
          "formulaReaction": "$$K_p = K_c (R T)^{\\Delta n_g}, \\quad Q_c < K_c \\implies \\text{Forward}, \\quad Q_c > K_c \\implies \\text{Backward}$$",
          "shortcuts": "Le Chatelier's Principle: Increase P $\\rightarrow$ shift to fewer gas moles. Increase T $\\rightarrow$ shift in endothermic direction. Catalyst has NO effect on $K_{eq}$.",
          "importantResults": "Van 't Hoff: $\\log\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{2.303 R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$."
        }
      },
      {
        "subtopic": "Ionic Equilibrium: Acids, Bases, pH & Buffers",
        "sections": {
          "concept": "Arrhenius, Bronsted-Lowry (conjugate acid-base), Lewis (electron pair acceptor/donor) theories. $K_w = 1.0 \\times 10^{-14}$ at $25^\\circ C$.",
          "formulaReaction": "$$pH = -\\log[H^+], \\quad pH + pOH = 14$$\n$$\\text{Weak Acid: } [H^+] = c \\alpha = \\sqrt{K_a c}, \\quad pH = \\frac{1}{2}(pK_a - \\log c)$$\n$$\\text{Acidic Buffer: } pH = pK_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right), \\quad \\text{Basic Buffer: } pOH = pK_b + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Base}]}\\right)$$",
          "shortcuts": "Max buffer capacity when $[\\text{Salt}] = [\\text{Acid}] \\implies pH = pK_a$.",
          "importantResults": "Salt Hydrolysis: Weak Acid + Strong Base salt $pH = 7 + \\frac{1}{2} pK_a + \\frac{1}{2} \\log c$. Weak Acid + Weak Base salt $pH = 7 + \\frac{1}{2} pK_a - \\frac{1}{2} pK_b$ (independent of c)."
        }
      },
      {
        "subtopic": "Solubility Product ($K_{sp}$) & Common Ion Effect",
        "sections": {
          "concept": "Sparingly soluble salt $A_x B_y \\rightleftharpoons x A^{y+} + y B^{x-}$. $K_{sp} = x^x y^y S^{x+y}$. Precipitation occurs when $Q_{sp} > K_{sp}$.",
          "formulaReaction": "$$\\text{For } AgCl: K_{sp} = S^2, \\quad \\text{For } PbCl_2: K_{sp} = 4 S^3, \\quad \\text{For } Al(OH)_3: K_{sp} = 27 S^4$$",
          "shortcuts": "Common ion drastically REDUCES solubility of weak electrolyte.",
          "importantResults": "Qualitative cation analysis groups use differential $K_{sp}$."
        }
      }
    ]
  },
  {
    "id": "ch11_ch7",
    "class": 11,
    "chapterNumber": 7,
    "chapter": "Redox Reactions",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Oxidation Numbers & Redox Titrations",
        "sections": {
          "concept": "Oxidation (loss of $e^-$, O.N. $\\uparrow$). Reduction (gain of $e^-$, O.N. $\\downarrow$). Oxidizing agent gets reduced; Reducing agent gets oxidized.",
          "formulaReaction": "$$n_1 M_1 V_1 = n_2 M_2 V_2, \\quad N = M \\times n\\text{-factor}$$\n$$n\\text{-factor of } KMnO_4 = 5 \\text{ (acidic)}, 3 \\text{ (neutral)}, 1 \\text{ (strongly alkaline)}$$\n$$n\\text{-factor of } K_2Cr_2O_7 = 6 \\text{ (acidic)}$$",
          "shortcuts": "O.N. of $Cr$ in $CrO_5 = +6$; $S$ in $H_2SO_5 = +6$; $S$ in $H_2S_2O_8 = +6$.",
          "importantResults": "Disproportionation: Same element is oxidized and reduced ($2 H_2O_2 \\rightarrow 2 H_2O + O_2$)."
        }
      }
    ]
  },
  {
    "id": "ch11_ch8",
    "class": 11,
    "chapterNumber": 8,
    "chapter": "Hydrogen",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Isotopes, Hydrides & Hydrogen Peroxide ($H_2O_2$)",
        "sections": {
          "concept": "Isotopes: Protium ($^1H$), Deuterium ($^2H$), Tritium ($^3H$, $\\beta^-$ radioactive). Hydrides: Ionic ($NaH$), Covalent ($CH_4, NH_3$), Metallic ($TiH_x$). $H_2O_2$ has non-planar open-book structure.",
          "formulaReaction": "$$\\text{Volume Strength of } H_2O_2 = 11.2 \\times \\text{Molarity} = 5.6 \\times \\text{Normality}$$\n$$2 H_2O_2 \\rightarrow 2 H_2O + O_2$$",
          "shortcuts": "10 Volume $H_2O_2 = 3.035\\% \\text{ w/v } H_2O_2 = 0.89 \\text{ M}$.",
          "importantResults": "Hardness of water: Temporary due to $Ca(HCO_3)_2, Mg(HCO_3)_2$ (boiling/Clark's); Permanent due to chlorides/sulfates (Calgon/Zeolite).",
          "exceptions": "$H_2O_2$ acts as BOTH oxidizing and reducing agent in acidic & basic media."
        }
      }
    ]
  },
  {
    "id": "ch11_ch9",
    "class": 11,
    "chapterNumber": 9,
    "chapter": "s-Block Elements",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Group 1 Alkali Metals & Group 2 Alkaline Earth Metals",
        "sections": {
          "concept": "Group 1 ($ns^1$): Li, Na, K, Rb, Cs. Flame colors: Li (Crimson), Na (Golden Yellow), K (Violet), Rb (Red-Violet), Cs (Blue). Reactivity with $O_2$: Li monoxide ($Li_2O$), Na peroxide ($Na_2O_2$), K/Rb/Cs superoxide ($KO_2$). Group 2 ($ns^2$): Be, Mg, Ca, Sr, Ba.",
          "formulaReaction": "$$KO_2 + CO_2 \\rightarrow K_2CO_3 + O_2 \\quad (\\text{submarines/breathing masks})$$\n$$\\text{Solvay Process: } NaCl + NH_3 + CO_2 + H_2O \\rightarrow NaHCO_3 \\downarrow + NH_4Cl$$\n$$\\text{Plaster of Paris: } CaSO_4 \\cdot \\frac{1}{2} H_2O \\quad (\\text{from Gypsum } CaSO_4 \\cdot 2 H_2O \\text{ at } 393 \\text{ K})$$",
          "shortcuts": "Group 2 Hydroxide solubility INCREASES down group ($Be < Mg < Ca < Ba$). Sulfate solubility DECREASES down group ($Be > Mg > Ca > Ba$).",
          "importantResults": "Diagonal relationships: Li with Mg; Be with Al.",
          "exceptions": "$K_2CO_3$ CANNOT be prepared by Solvay process because $KHCO_3$ is too soluble."
        }
      }
    ]
  },
  {
    "id": "ch11_ch10",
    "class": 11,
    "chapterNumber": 10,
    "chapter": "Some p-Block Elements",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Group 13 (Boron & Aluminium) & Group 14 (Carbon & Silicon)",
        "sections": {
          "concept": "Group 13: Inert pair effect $Tl^+ > Tl^{3+}$. Diborane ($B_2H_6$) has 3c-2e banana bonds. Borax ($Na_2B_4O_7 \\cdot 10 H_2O$). Boric acid ($H_3BO_3$) is monobasic Lewis acid. Group 14: Allotropes of Carbon (Diamond $sp^3$, Graphite $sp^2$, Fullerene $C_{60}$). Silicones $(R_2SiO)_n$. Silicates $[SiO_4]^{4-}$. Zeolites (ZSM-5).",
          "formulaReaction": "$$\\text{Borazine (Inorganic Benzene): } B_2H_6 + 2 NH_3 \\rightarrow B_2H_6 \\cdot 2NH_3 \\xrightarrow{\\Delta} B_3N_3H_6$$\n$$B(OH)_3 + H_2O \\rightleftharpoons [B(OH)_4]^- + H^+ \\quad (\\text{Lewis acid, accepts } OH^-)$$",
          "shortcuts": "Borazine ($B_3N_3H_6$) is isoelectronic with Benzene ($C_6H_6$).",
          "importantResults": "$CO$ binds hemoglobin forming carboxyhemoglobin (300x more stable than oxyhemoglobin).",
          "exceptions": "$CCl_4$ does NOT undergo hydrolysis (no d-orbitals on Carbon), whereas $SiCl_4$ hydrolyzes readily."
        }
      }
    ]
  },
  {
    "id": "ch11_ch11",
    "class": 11,
    "chapterNumber": 11,
    "chapter": "Organic Chemistry — Basic Principles and Techniques",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Classification, IUPAC Nomenclature & Degree of Unsaturation",
        "sections": {
          "concept": "Organic compounds are classified as Aliphatic (acyclic), Alicyclic, Aromatic (benzenoid & non-benzenoid), and Heterocyclic. IUPAC Name = Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix.\nPrincipal Group Priority Order: $-COOH > -SO_3H > -COOR > -COCl > -CONH_2 > -CN > -CHO > >C=O > -OH > -NH_2 > >C=C< > -C\\equiv C-$.",
          "formulaReaction": "$$\\text{Degree of Unsaturation (DU)} = C + 1 - \\frac{H}{2} - \\frac{X}{2} + \\frac{N}{2}$$",
          "shortcuts": "DU = 1 indicates 1 ring or 1 $\\pi$-bond. Benzene ring has DU = 4 (1 ring + 3 $\\pi$-bonds).",
          "importantResults": "Prefixes like iso- and neo- are included in alphabetical order in common names; sec- and tert- are hyphenated and ignored."
        }
      },
      {
        "subtopic": "Isomerism (Structural, Geometrical & Optical)",
        "sections": {
          "concept": "Isomers share same molecular formula but differ in properties. 1. Structural: Chain, Position, Functional, Metamerism, Tautomerism (Keto-Enol), Ring-Chain. 2. Stereoisomerism: Geometrical ($cis/trans$, $E/Z$ via Cahn-Ingold-Prelog CIP rules) and Optical ($d/l$, $R/S$).",
          "formulaReaction": "$$\\text{Keto-Enol Tautomerism: } R-CH_2-C(=O)-R' \\rightleftharpoons R-CH=C(OH)-R'$$\n$$\\text{Optical Activity: } [\\alpha]_D^T = \\frac{\\alpha}{l \\times c}$$",
          "shortcuts": "Enantiomers have identical physical properties except rotation of plane-polarized light. Racemic mixture is optically inactive by external compensation.",
          "importantResults": "Chiral carbon ($sp^3$ hybridized with 4 different substituents) generates optical activity. Meso compounds have chiral centers but are optically inactive due to internal plane of symmetry."
        }
      },
      {
        "subtopic": "Electronic Effects (Inductive, Electromeric, Resonance & Hyperconjugation)",
        "sections": {
          "concept": "1. Inductive Effect ($I$): Permanent $\\sigma$-bond polarization. $+I$: $-alkyl, -COO^-$. $-I$: $-NO_2, -CN, -COOH, -F, -Cl, -Br, -I$.\n2. Resonance / Mesomeric Effect ($M$): Permanent $\\pi$-electron delocalization. $+M$: $-OH, -OR, -NH_2, -X$. $-M$: $-NO_2, -CHO, -COOH, -CN$.\n3. Hyperconjugation (Baker-Nathan Effect): $\\sigma(C-H)-\\pi$ or $\\sigma(C-H)-p$ orbital overlap. Number of hyperconjugative structures $=$ number of $\\alpha$-hydrogens.\n4. Electromeric Effect ($\\pm E$): Temporary complete $\\pi$-electron shift in presence of attacking reagent.",
          "formulaReaction": "$$\\text{Hyperconjugative Structures} = N_{\\alpha\\text{-H}} + 1$$",
          "shortcuts": "Stability of alkenes, carbocations, and free radicals increases with greater number of $\\alpha$-hydrogens.",
          "importantResults": "Ortho-effect: Ortho-substituted benzoic acids are stronger acids than meta/para isomers regardless of substituent nature."
        }
      },
      {
        "subtopic": "Electrophiles, Nucleophiles & Reaction Intermediates",
        "sections": {
          "concept": "Electrophiles ($E^+$): Electron deficient species ($H^+, NO_2^+, R^+, AlCl_3, BF_3$). Nucleophiles ($Nu^-$): Electron rich species with lone pair ($OH^-, CN^-, NH_3, H_2O, RMgX$).\nReaction Intermediates:\n1. Carbocation ($sp^2$, planar, 6 valence $e^-$): Stability order $3^\\circ > 2^\\circ > 1^\\circ > CH_3^+$.\n2. Carbanion ($sp^3$, pyramidal, 8 valence $e^-$): Stability order $CH_3^- > 1^\\circ > 2^\\circ > 3^\\circ$.\n3. Free Radical ($sp^2$, 7 valence $e^-$): Stability order $3^\\circ > 2^\\circ > 1^\\circ > CH_3^\\bullet$.\n4. Carbenes ($:CH_2$, singlet $sp^2$, triplet $sp$) & Nitrenes ($R-\\ddot{N}:$).",
          "formulaReaction": "$$\\text{Carbocation Stability: } (CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3CH_2^+ > CH_3^+$$",
          "shortcuts": "Resonance-stabilized Allyl ($CH_2=CH-CH_2^+$) and Benzyl ($C_6H_5CH_2^+$) carbocations are exceptionally stable.",
          "importantResults": "Carbocations undergo 1,2-hydride or 1,2-methyl shifts to rearrange into more stable carbocations."
        }
      },
      {
        "subtopic": "Types of Organic Reactions, Acidity & Basicity Orders",
        "sections": {
          "concept": "Reactions: Substitution ($S_N, S_E, S_R$), Addition ($A_N, A_E, A_R$), Elimination ($E1, E2, E1cB$), Rearrangement.\nAcidity Order: Carboxylic acids > Phenols > Water > Alcohols > Alkynes > Alkanes. $-I/-M$ groups increase acidity; $+I/+M$ groups decrease acidity.\nBasicity Order: Aliphatic Amines > Ammonia > Aromatic Amines (Aniline).",
          "formulaReaction": "$$\\text{Acidity: } CF_3COOH > CCl_3COOH > CHCl_2COOH > CH_2ClCOOH > CH_3COOH$$\n$$\\text{Phenol Acidity: } p\\text{-nitrophenol} > o\\text{-nitrophenol} > m\\text{-nitrophenol} > \\text{phenol} > p\\text{-cresol}$$",
          "shortcuts": "Intramolecular H-bonding in $o$-nitrophenol makes it volatile (steam distillable) compared to $p$-nitrophenol.",
          "importantResults": "Phenoxide ion is more resonance-stabilized than alkoxide ion, making phenols much more acidic than alcohols."
        }
      },
      {
        "subtopic": "Purification Techniques & Quantitative Characterisation",
        "sections": {
          "concept": "Purification: Crystallisation, Sublimation, Distillation (Simple, Fractional, Steam for aniline, Vacuum/Reduced pressure for glycerol decomposes at B.P.), Chromatography (Column, TLC, Paper, $R_f$ value).\nQualitative Analysis (Lassaigne's Test): Prussian blue $Fe_4[Fe(CN)_6]_3$ confirms N; $AgX$ confirms Halogens; $BaSO_4$ confirms S; Blood red $Fe(SCN)^{2+}$ confirms N+S.\nQuantitative Analysis: Carbon & Hydrogen (Liebig method), Nitrogen (Dumas $N_2$ gas; Kjeldahl $NH_3$ titration), Halogens & Sulfur (Carius method).",
          "formulaReaction": "$$\\text{\\% C} = \\frac{12}{44} \\frac{m_{CO_2}}{m} \\times 100, \\quad \\text{\\% H} = \\frac{2}{18} \\frac{m_{H_2O}}{m} \\times 100$$\n$$\\text{\\% N (Kjeldahl)} = \\frac{1.4 \\times N \\times V}{m}, \\quad \\text{\\% S} = \\frac{32}{233} \\frac{m_{BaSO_4}}{m} \\times 100$$\n$$\\text{\\% Halogen (Carius)} = \\frac{M_X}{M_{AgX}} \\frac{m_{AgX}}{m} \\times 100$$",
          "shortcuts": "Kjeldahl method FAILS for nitro ($-NO_2$), azo ($-N=N-$), and pyridine ring nitrogens.",
          "importantResults": "Steam distillation is used for water-immiscible compounds having high vapor pressure near 100°C."
        }
      }
    ]
  },
  {
    "id": "ch11_ch12",
    "class": 11,
    "chapterNumber": 12,
    "chapter": "Hydrocarbons",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Alkanes, Preparations & Free Radical Substitution Mechanism",
        "sections": {
          "concept": "Alkanes ($C_nH_{2n+2}$): Saturated hydrocarbons with $C(sp^3)-C(sp^3)$ and $C(sp^3)-H(1s)$ $\\sigma$-bonds.\nPreparations: Wurtz Reaction ($2RX + 2Na \\xrightarrow{\\text{Dry Ether}} R-R$), Decarboxylation ($RCOONa + NaOH/CaO \\xrightarrow{\\Delta} R-H + Na_2CO_3$), Kolbe's Electrolysis, Corey-House synthesis ($R_2CuLi + R'X \\to R-R'$).\nFree Radical Chlorination: Initiation ($Cl_2 \\xrightarrow{h\\nu} 2Cl^\\bullet$), Propagation ($R-H + Cl^\\bullet \\to R^\\bullet + HCl$), Termination ($R^\\bullet + Cl^\\bullet \\to RCl$). Reactivity: $F_2 > Cl_2 > Br_2 > I_2$. Replacement: $3^\\circ > 2^\\circ > 1^\\circ$.",
          "formulaReaction": "$$2 R-COONa + 2 H_2O \\xrightarrow{\\text{Electrolysis}} R-R + 2 CO_2\\uparrow (\\text{Anode}) + H_2\\uparrow + 2 NaOH (\\text{Cathode})$$",
          "shortcuts": "Wurtz reaction is unsuitable for preparing unsymmetrical alkanes ($R-R'$) due to mixture of 3 alkanes.",
          "importantResults": "Conformations of ethane: Staggered is more stable than Eclipsed by 12.5 kJ/mol torsional strain."
        }
      },
      {
        "subtopic": "Alkenes, Additions, Markovnikov & Anti-Markovnikov (Peroxide) Rules",
        "sections": {
          "concept": "Alkenes ($C_nH_{2n}$): Contain $C=C$ double bond (1 $\\sigma$-bond + 1 $\\pi$-bond).\nPreparations: Dehydration of Alcohols ($H_2SO_4 / 443K$, Saytzeff rule), Dehydrohalogenation ($alc. KOH$, E2).\nMarkovnikov's Rule: Electrophilic addition of $HX$ adds $H^+$ to carbon with more hydrogens to form more stable carbocation.\nAnti-Markovnikov (Peroxide / Kharasch Effect): Addition of $HBr$ in presence of peroxides ($R-O-O-R$) proceeds via free radical mechanism to yield anti-Markovnikov product. (Applies ONLY to $HBr$, not $HCl$ or $HI$).\nOzonolysis: Reductive ($O_3, Zn/H_2O$) yields aldehydes/ketones; Hydroboration-Oxidation ($B_2H_6, H_2O_2/OH^-$) yields anti-Markovnikov syn-diol/alcohol.",
          "formulaReaction": "$$R-CH=CH_2 + HBr \\xrightarrow{\\text{Peroxide}} R-CH_2-CH_2Br \\quad (\\text{Anti-Markovnikov})$$\n$$R-CH=CH-R' \\xrightarrow[2. Zn/H_2O]{1. O_3} R-CHO + R'-CHO$$\n$$R-CH=CH_2 \\xrightarrow[2. H_2O_2/OH^-]{1. B_2H_6} R-CH_2-CH_2OH$$",
          "shortcuts": "Baeyer's Test: Cold dilute alkaline $KMnO_4$ decolorizes purple solution to form 1,2-syn-diols.",
          "importantResults": "Acid-catalyzed hydration ($H^+/H_2O$) obeys Markovnikov's rule with carbocation rearrangement."
        }
      },
      {
        "subtopic": "Alkynes, Terminal Acidity, Hydration & Polymerization",
        "sections": {
          "concept": "Alkynes ($C_nH_{2n-2}$): Contain $C\\equiv C$ triple bond (1 $\\sigma$-bond + 2 $\\pi$-bonds). $C(sp)$ hybridization with $50\\%$ $s$-character.\nTerminal Alkyne Acidity: $R-C\\equiv C-H + Na \\to R-C\\equiv C^- Na^+ + \\frac{1}{2}H_2$. Tollens' test (white ppt $R-C\\equiv C-Ag$) & Ammoniacal $Cu_2Cl_2$ test (red ppt $R-C\\equiv C-Cu$).\nHydration: $Hg^{2+}/H_2SO_4$ addition of $H_2O$ yields enol which tautomerizes to ketone (acetaldehyde from acetylene).\nCyclic Polymerization: $3 HC\\equiv CH \\xrightarrow{\\text{Red hot Fe tube}, 873K} \\text{Benzene } (C_6H_6)$.",
          "formulaReaction": "$$HC\\equiv CH + H_2O \\xrightarrow{1\\% HgSO_4 / 40\\% H_2SO_4} [CH_2=CH-OH] \\rightleftharpoons CH_3CHO$$\n$$3 HC\\equiv CH \\xrightarrow{\\text{Red hot Fe tube}, 873K} C_6H_6$$",
          "shortcuts": "Lindlar's Catalyst ($H_2 / Pd-CaCO_3 / \\text{quinoline}$) gives cis-alkene; Birch Reduction ($Na / \\text{liq. } NH_3$) gives trans-alkene.",
          "importantResults": "Terminal alkynes react with $Na, NaNH_2, [Ag(NH_3)_2]^+$, non-terminal alkynes do NOT."
        }
      },
      {
        "subtopic": "Aromatic Hydrocarbons, Hückel's Rule (4n+2) & Electrophilic Substitution (EAS)",
        "sections": {
          "concept": "Hückel's Rule: Planar, cyclic, fully conjugated system with $(4n+2)\\pi$ electrons ($n=0,1,2...$, e.g., Benzene $6\\pi$, Cyclopentadienyl anion $6\\pi$, Tropylium cation $6\\pi$). Anti-aromatic: $4n\\pi$ electrons (Cyclobutadiene $4\\pi$). Non-aromatic: Non-planar or non-conjugated.\nElectrophilic Aromatic Substitution (EAS):\n1. Nitration: $\\text{Conc. } HNO_3 + \\text{Conc. } H_2SO_4 \\implies NO_2^+$.\n2. Halogenation: $Cl_2 / FeCl_3 \\implies Cl^+$.\n3. Sulfonation: $\\text{Fuming } H_2SO_4 / SO_3 \\implies SO_3$.\n4. Friedel-Crafts Alkylation: $RCl + AlCl_3 \\implies R^+$.\n5. Friedel-Crafts Acylation: $RCOCl + AlCl_3 \\implies RCO^+$.",
          "formulaReaction": "$$C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4} C_6H_5NO_2 + H_2O$$\n$$C_6H_6 + RCl \\xrightarrow{Anhyd. AlCl_3} C_6H_5-R + HCl$$",
          "shortcuts": "Ortho/para directors (activating): $-OH, -NH_2, -OR, -R$. Meta directors (deactivating): $-NO_2, -CN, -COOH, -CHO, -SO_3H$. Halogens are $o,p$-directing but DEACTIVATING.",
          "importantResults": "Nitrobenzene does NOT undergo Friedel-Crafts reaction due to strong ring deactivation and complexation with $AlCl_3$."
        }
      }
    ]
  }
];

export const CLASS_12_CHEMISTRY_FORMULAS = [
  {
    "id": "ch12_ch1",
    "class": 12,
    "chapterNumber": 1,
    "chapter": "Solid State",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Unit Cells, Density & Defects",
        "sections": {
          "concept": "Primitive ($Z=1$), BCC ($Z=2$, $4r=a\\sqrt{3}$, $68\\%$ pack), FCC ($Z=4$, $4r=a\\sqrt{2}$, $74\\%$ pack). Schottky defect (missing ions $\\implies$ density drops; $NaCl, AgBr$). Frenkel defect (dislocation to interstitial $\\implies$ density unchanged; $ZnS, AgBr$). F-centers (anion vacancies with trapped electrons $\\implies$ color).",
          "formulaReaction": "$$d = \\frac{Z \\cdot M}{a^3 \\cdot N_A}, \\quad \\text{Tetrahedral Voids} = 2N, \\quad \\text{Octahedral Voids} = N$$",
          "shortcuts": "$AgBr$ shows BOTH Schottky and Frenkel defects.",
          "importantResults": "Ferromagnetic ($Fe, Co, Ni, CrO_2$), Ferrimagnetic ($Fe_3O_4$), Antiferromagnetic ($MnO$)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch2",
    "class": 12,
    "chapterNumber": 2,
    "chapter": "Solutions",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Henry's Law, Raoult's Law & Colligative Properties",
        "sections": {
          "concept": "Henry's Law $p = K_H x$. Raoult's Law $p_A = p_A^\\circ x_A$. Colligative properties depend on particle count: 1. RLVP $\\frac{p^\\circ - p}{p^\\circ} = i x_B$. 2. Boiling Point Elevation $\\Delta T_b = i K_b m$. 3. Freezing Point Depression $\\Delta T_f = i K_f m$. 4. Osmotic Pressure $\\pi = i C R T$. Van 't Hoff factor $i$.",
          "formulaReaction": "$$\\alpha_{\\text{dissociation}} = \\frac{i - 1}{n - 1}, \\quad \\alpha_{\\text{association}} = \\frac{1 - i}{1 - 1/n}$$",
          "shortcuts": "Positive deviation $\\implies$ minimum boiling azeotrope (Ethanol+Water). Negative deviation $\\implies$ maximum boiling azeotrope ($HNO_3$+Water).",
          "importantResults": "Isotonic solutions have equal osmotic pressure ($\\pi_1 = \\pi_2$)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch3",
    "class": 12,
    "chapterNumber": 3,
    "chapter": "Electrochemistry",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Nernst Equation, Conductance & Kohlrausch's Law",
        "sections": {
          "concept": "Nernst Eq: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log Q$. $\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2.303 R T \\log K_{\\text{eq}}$. Molar Conductivity $\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$. Kohlrausch's Law $\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$. Faraday's Laws $w = Z q = \\frac{E}{96500} I t$.",
          "formulaReaction": "$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}, \\quad \\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}, \\quad K_a = \\frac{c \\alpha^2}{1 - \\alpha}$$",
          "shortcuts": "More negative SRP $\\implies$ stronger reducing agent ($Li^+/Li = -3.05 V$). More positive SRP $\\implies$ stronger oxidizing agent ($F_2/F^- = +2.87 V$).",
          "importantResults": "Lead storage battery electrolyte is $38\\% H_2SO_4$."
        }
      }
    ]
  },
  {
    "id": "ch12_ch4",
    "class": 12,
    "chapterNumber": 4,
    "chapter": "Chemical Kinetics",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Rate Law, Integrated Rate Equations & Arrhenius",
        "sections": {
          "concept": "Zero order: $k = \\frac{[A]_0 - [A]}{t}, t_{1/2} = \\frac{[A]_0}{2k}$. First order: $k = \\frac{2.303}{t} \\log\\left(\\frac{[A]_0}{[A]}\\right), t_{1/2} = \\frac{0.693}{k}$. Arrhenius Eq: $k = A e^{-E_a/RT}$.",
          "formulaReaction": "$$\\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[ \\frac{T_2 - T_1}{T_1 T_2} \\right], \\quad [A] = \\frac{[A]_0}{2^n}$$",
          "shortcuts": "$t_{99.9\\%} \\approx 10 \\times t_{1/2}$ for 1st order. $t_{75\\%} = 2 \\times t_{1/2}$.",
          "importantResults": "Temperature coefficient $\\approx 2$ to $3$ (rate doubles per $10^\\circ C$ rise)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch5",
    "class": 12,
    "chapterNumber": 5,
    "chapter": "Surface Chemistry",
    "category": "Physical Chemistry",
    "subtopics": [
      {
        "subtopic": "Adsorption, Catalysis & Colloids",
        "sections": {
          "concept": "Physisorption (van der Waals, reversible, low $\\Delta H$) vs Chemisorption (chemical bond, irreversible, high $\\Delta H$). Freundlich Isotherm $\\frac{x}{m} = k P^{1/n}$. Colloids: Tyndall effect, Brownian motion, Electrophoresis. Hardy-Schulze Rule: Coagulation power $\\propto \\text{valency}^4$. Gold Number measures protective colloid power.",
          "formulaReaction": "$$\\text{Coagulation Power: } Al^{3+} > Mg^{2+} > Na^+ \\quad (\\text{for negative sol } As_2S_3)$$",
          "shortcuts": "Smaller Gold Number $\\implies$ HIGHER protective power (Gelatin is best).",
          "importantResults": "Emulsions: Oil in Water (Milk) vs Water in Oil (Butter)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch6",
    "class": 12,
    "chapterNumber": 6,
    "chapter": "General Principles and Processes of Isolation of Metals",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Metallurgy: Concentration, Extraction & Refining",
        "sections": {
          "concept": "Ores: Bauxite ($Al$), Haematite ($Fe$), Copper pyrites ($CuFeS_2$), Zinc blende ($ZnS$). Concentration: Froth flotation (sulfides using xanthate collectors & $NaCN$ depressant), Leaching (Bayer process for Al; Cyanide process for Au, Ag). Calcination vs Roasting. Refining: Liquation ($Bi, Sn$), Distillation ($Zn, Hg$), Electrolytic ($Cu$), Zone Refining ($Si, Ge$), Mond process ($Ni + 4CO \\rightarrow Ni(CO)_4$), van Arkel ($Ti, Zr + I_2$).",
          "formulaReaction": "$$\\text{Mond process: } Ni + 4 CO \\xrightarrow{330K} Ni(CO)_4 \\xrightarrow{450K} Ni + 4 CO$$\n$$\\text{van Arkel: } Ti + 2 I_2 \\xrightarrow{500K} TiI_4 \\xrightarrow{1700K} Ti + 2 I_2$$",
          "shortcuts": "Zone refining relies on higher solubility of impurities in molten state.",
          "importantResults": "Hall-Héroult process uses Cryolite ($Na_3AlF_6$) and $CaF_2$ to lower MP and increase conductivity."
        }
      }
    ]
  },
  {
    "id": "ch12_ch7",
    "class": 12,
    "chapterNumber": 7,
    "chapter": "p-Block Elements",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Groups 15, 16, 17 & 18 Compounds",
        "sections": {
          "concept": "Group 15: Haber $NH_3$, Ostwald $HNO_3$, Phosphine $PH_3$, Oxoacids of P ($H_3PO_4$ tribasic, $H_3PO_3$ dibasic, $H_3PO_2$ monobasic). Group 16: Contact process $H_2SO_4$, Ozone $O_3$, Oxoacids of S ($H_2SO_5$ Caro's, $H_2S_2O_8$ Marshall's). Group 17: Interhalogens, Chlorine oxoacids ($HClO < HClO_2 < HClO_3 < HClO_4$). Group 18: Xenon fluorides ($XeF_2$ linear, $XeF_4$ square planar, $XeF_6$ distorted octahedral).",
          "formulaReaction": "$$P_4 + 3 NaOH + 3 H_2O \\rightarrow PH_3 \\uparrow + 3 NaH_2PO_2 \\quad (\\text{Disproportionation})$$\n$$XeF_4 + 2 H_2O \\rightarrow \\text{hydrolysis products}, \\quad XeF_6 + 3 H_2O \\rightarrow XeO_3 + 6 HF$$",
          "shortcuts": "Brown Ring Test for $NO_3^-$ gives $[Fe(H_2O)_5(NO)]^{2+}$ (Fe oxidation state $+1$).",
          "importantResults": "Concentrated $H_2SO_4$ is dehydrating agent: $C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4} 12 C + 11 H_2O$."
        }
      }
    ]
  },
  {
    "id": "ch12_ch8",
    "class": 12,
    "chapterNumber": 8,
    "chapter": "d- and f-Block Elements",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Transition Metals, $KMnO_4, K_2Cr_2O_7$ & Lanthanides",
        "sections": {
          "concept": "Transition metals $(n-1)d^{1-10} ns^{1-2}$. Variable oxidation states, paramagnetic $\\mu = \\sqrt{n(n+2)}$ BM, colored ions ($d-d$ transitions), catalytic activity. $K_2Cr_2O_7$ (Chromyl chloride test $CrO_2Cl_2$ reddish brown). $KMnO_4$ purple. Lanthanide contraction: $4f$ poor shielding $\\implies$ $Zr \\approx Hf$ radii, difficulty in separation.",
          "formulaReaction": "$$Cr_2O_7^{2-} \\text{ (orange, acid)} \\underset{H^+}{\\overset{OH^-}{\\rightleftharpoons}} 2 CrO_4^{2-} \\text{ (yellow, base)}$$\n$$\\text{Acidic } MnO_4^- + 8 H^+ + 5 e^- \\rightarrow Mn^{2+} + 4 H_2O$$",
          "shortcuts": "$Sc^{3+} (3d^0)$ and $Zn^{2+} (3d^{10})$ are COLORLESS.",
          "importantResults": "$Zn, Cd, Hg$ are NOT transition metals (completely filled $d$-orbitals)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch9",
    "class": 12,
    "chapterNumber": 9,
    "chapter": "Coordination Compounds",
    "category": "Inorganic Chemistry",
    "subtopics": [
      {
        "subtopic": "Werner's Theory, Isomerism, VBT & CFT",
        "sections": {
          "concept": "Werner: Primary (ionizable) vs Secondary (coordination number). Ligands: Monodentate, Bidentate ($en, ox$), Ambidentate ($NO_2^-/ONO^-$), Chelating. Isomerism: Ionization, Linkage, Hydrate, Geometrical (cis/trans), Optical. CFT: Octahedral splitting $t_{2g}$ ($-0.4 \\Delta_o$) and $e_g$ ($+0.6 \\Delta_o$). Spectrochemical series.",
          "formulaReaction": "$$\\text{CFSE} = (-0.4 n_{t2g} + 0.6 n_{eg}) \\Delta_o + P, \\quad \\Delta_t = \\frac{4}{9} \\Delta_o$$",
          "shortcuts": "Strong field ($CN^-, CO, en, NH_3$) $\\rightarrow$ Low Spin; Weak field ($F^-, Cl^-, H_2O$) $\\rightarrow$ High Spin.",
          "importantResults": "$[Ni(CN)_4]^{2-}$ is $dsp^2$ Square Planar (Diamagnetic); $[NiCl_4]^{2-}$ is $sp^3$ Tetrahedral (Paramagnetic)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch10",
    "class": 12,
    "chapterNumber": 10,
    "chapter": "Haloalkanes and Haloarenes",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Classification, Nomenclature & Preparation (Finkelstein, Swarts, Sandmeyer)",
        "sections": {
          "concept": "Haloalkanes ($R-X$) and Haloarenes ($Ar-X$). Preparation from Alcohols ($HX/ZnCl_2$, $PCl_3, PCl_5, SOCl_2$ - Darzen's process is best as $SO_2, HCl$ gases escape).\nFinkelstein Reaction: $R-Cl/Br + NaI \\xrightarrow{\\text{Dry Acetone}} R-I + NaCl/NaBr \\downarrow$.\nSwarts Reaction: $R-Cl/Br + AgF \\xrightarrow{\\Delta} R-F + AgCl \\downarrow$.\nSandmeyer Reaction: $Ar-N_2^+ Cl^- \\xrightarrow{Cu_2Cl_2 / HCl} Ar-Cl + N_2\\uparrow$.",
          "formulaReaction": "$$R-OH + SOCl_2 \\xrightarrow{\\text{Pyridine}} R-Cl + SO_2\\uparrow + HCl\\uparrow$$\n$$Ar-N_2^+ Cl^- \\xrightarrow{Cu_2Cl_2/HCl} Ar-Cl + N_2\\uparrow$$",
          "shortcuts": "Darzen's process with $SOCl_2$ gives pure alkyl chloride.",
          "importantResults": "Aryl halides cannot be prepared by nucleophilic substitution of phenol because $C-O$ bond in phenol has partial double bond character due to resonance."
        }
      },
      {
        "subtopic": "$S_N1$ vs $S_N2$ Nucleophilic Substitution Mechanisms & Stereochemistry",
        "sections": {
          "concept": "$S_N1$ (Unimolecular): 2 steps, via Carbocation intermediate, 1st order kinetics $Rate = k[RX]$, Order $3^\\circ > 2^\\circ > 1^\\circ > CH_3X$, Polar protic solvents ($H_2O, EtOH$), Racemization with partial inversion.\n$S_N2$ (Bimolecular): 1 step, Transition state, 2nd order kinetics $Rate = k[RX][Nu^-]$, Order $CH_3X > 1^\\circ > 2^\\circ > 3^\\circ$, Polar aprotic solvents (DMSO, DMF, Acetone), Complete Walden Inversion.",
          "formulaReaction": "$$\\text{Rate}_{S_N1} = k[R-X] \\quad | \\quad \\text{Rate}_{S_N2} = k[R-X][Nu^-]$$\n$$\\text{Reactivity } S_N1: \\text{Allyl } \\approx \\text{Benzyl } > 3^\\circ > 2^\\circ > 1^\\circ > CH_3$$\n$$\\text{Reactivity } S_N2: CH_3 > 1^\\circ > 2^\\circ > 3^\\circ$$",
          "shortcuts": "Allylic and Benzylic halides are highly reactive towards BOTH $S_N1$ (stable carbocation) and $S_N2$ (low steric hindrance).",
          "importantResults": "Optically active $3^\\circ$ halide undergoing $S_N1$ yields a racemic mixture (50% inversion + 50% retention)."
        }
      },
      {
        "subtopic": "Elimination Reactions (Saytzeff vs Hofmann) & Named Reactions",
        "sections": {
          "concept": "Dehydrohalogenation ($alc. KOH$, E2). Saytzeff (Zaitsev) Rule: More substituted, more stable alkene is major product. Hofmann Rule: Bulkier base ($t-BuO^-K^+$) or fluoride leaving group yields less substituted alkene.\nNamed Reactions: Wurtz-Fittig ($RX + ArX + 2Na \\to Ar-R$), Fittig ($2ArX + 2Na \\to Ar-Ar$), Grignard Formation ($RX + Mg \\xrightarrow{\\text{Dry Ether}} RMgX$), Chloroform oxidation ($2CHCl_3 + O_2 \\xrightarrow{\\text{light}} 2COCl_2 \\text{ (Phosgene)} + 2HCl$).",
          "formulaReaction": "$$C_6H_5Br + CH_3Br + 2 Na \\xrightarrow{\\text{Dry Ether}} C_6H_5-CH_3 + 2 NaBr \\quad (\\text{Wurtz-Fittig})$$\n$$R-X + Mg \\xrightarrow{\\text{Dry Ether}} R-MgX \\quad (\\text{Grignard Reagent})$$",
          "shortcuts": "Grignard reagents react violently with any protic hydrogen source ($H_2O, ROH, RNH_2$) to form alkanes ($R-H$).",
          "importantResults": "DDT (p,p'-dichlorodiphenyltrichloroethane) prepared from Chloral ($CCl_3CHO$) $+$ Chlorobenzene ($2 C_6H_5Cl$) in presence of conc. $H_2SO_4$."
        }
      }
    ]
  },
  {
    "id": "ch12_ch11",
    "class": 12,
    "chapterNumber": 11,
    "chapter": "Alcohols, Phenols and Ethers",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Alcohols: Preparation, Lucas Test, Victor Meyer & Dehydrogenation (Cu/573K)",
        "sections": {
          "concept": "Preparation: Acid-catalyzed hydration, Hydroboration-Oxidation, Reduction of carbonyls ($LiAlH_4, NaBH_4$), Grignard addition ($HCHO \\to 1^\\circ$, $RCHO \\to 2^\\circ$, $R_2CO \\to 3^circ$).\nDistinction Tests:\n1. Lucas Test (Anhydrous $ZnCl_2 + \\text{conc. } HCl$): $3^\\circ$ gives turbidity immediately, $2^\\circ$ in 5 minutes, $1^\\circ$ only on heating.\n2. Victor Meyer Test: Red color ($1^\\circ$), Blue color ($2^\\circ$), Colorless ($3^\\circ$).\n3. Catalytic Dehydrogenation ($Cu / 573K$): $1^\\circ \\to$ Aldehyde, $2^\\circ \\to$ Ketone, $3^\\circ \\to$ Alkene (Dehydration).",
          "formulaReaction": "$$R-CH_2OH \\xrightarrow{Cu / 573K} R-CHO \\quad | \\quad R_2CHOH \\xrightarrow{Cu / 573K} R_2C=O$$\n$$(CH_3)_3C-OH \\xrightarrow{Cu / 573K} (CH_3)_2C=CH_2 + H_2O$$",
          "shortcuts": "$3^\\circ$ alcohols undergo DEHYDRATION (alkene) rather than dehydrogenation with $Cu/573K$.",
          "importantResults": "Glycerol has $3 -OH$ groups; forms Acrolein ($CH_2=CH-CHO$) on heating with $KHSO_4$."
        }
      },
      {
        "subtopic": "Phenols: Acidity, Cumene Process, Kolbe & Reimer-Tiemann Reactions",
        "sections": {
          "concept": "Preparation: Cumene hydroperoxide process (Industrial route: Cumene $+ O_2 \\to$ Cumene hydroperoxide $\\xrightarrow{H^+} \\text{Phenol} + \\text{Acetone}$), Dow Process ($C_6H_5Cl + NaOH \\xrightarrow{623K, 300atm} C_6H_5ONa$).\nAcidity: Phenol ($pK_a = 10$) is more acidic than Alcohols ($pK_a = 16-18$) due to resonance stabilization of Phenoxide ion. Electron-withdrawing groups ($-NO_2$) increase acidity ($p$-nitrophenol > phenol > $p$-cresol).\nNamed Reactions:\n1. Kolbe Reaction: $\\text{Sodium Phenoxide} + CO_2 \\xrightarrow{400K, 4-7atm} \\xrightarrow{H^+} \\text{Salicylic Acid} \\xrightarrow{Ac_2O} \\text{Aspirin}$.\n2. Reimer-Tiemann Reaction: $\\text{Phenol} + CHCl_3 + aq. NaOH \\to \\text{Salicylaldehyde}$ via Dichlorocarbene ($:CCl_2$) electrophile.",
          "formulaReaction": "$$C_6H_5ONa + CO_2 \\xrightarrow[2. H^+]{1. 400K, 4-7 atm} \\text{Salicylic Acid}$$\n$$C_6H_5OH + CHCl_3 + 3 NaOH \\to \\text{Salicylaldehyde} + 3 NaCl + 2 H_2O$$",
          "shortcuts": "Phenol gives violet coloration with neutral $FeCl_3$ solution.",
          "importantResults": "Picric acid ($2,4,6$-trinitrophenol) is extremely acidic despite having no $-COOH$ group due to 3 strong $-M/-I$ $-NO_2$ groups."
        }
      },
      {
        "subtopic": "Ethers: Williamson Synthesis & HX Acid Cleavage",
        "sections": {
          "concept": "Williamson Ether Synthesis: $R-X (1^\\circ) + R'-O^-Na^+ \\to R-O-R' + NaX$ ($S_N2$ mechanism). (3° alkyl halide yields alkene via E2).\nCleavage by $HX$ ($HI / HBr$): Unsymmetric ether $R-O-R' + HI \\to R-I + R'-OH$. If one group is $3^\\circ$ or benzylic, reaction goes via $S_N1$ to form $3^\\circ$ iodide.",
          "formulaReaction": "$$R-O-R' + HI \\xrightarrow{\\text{Cold}} R-I (1^\\circ) + R'-OH$$\n$$(CH_3)_3C-O-CH_3 + HI \\to (CH_3)_3C-I + CH_3OH \\quad (S_N1 \\text{ mechanism})$$",
          "shortcuts": "Anisole ($C_6H_5OCH_3$) $+ HI \\to C_6H_5OH + CH_3I$ (Phenol $C-O$ bond is not cleaved due to partial double bond character).",
          "importantResults": "Ethers form explosive peroxides on standing in air and light; tested with starch-KI solution."
        }
      }
    ]
  },
  {
    "id": "ch12_ch12",
    "class": 12,
    "chapterNumber": 12,
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Aldehydes & Ketones: Preparation & Nucleophilic Addition ($HCN, NaHSO_3, RMgX, NH_2-Z$)",
        "sections": {
          "concept": "Preparation: Oxidation of alcohols ($PCC$ stops at aldehyde), Rosenmund ($RCOCl + H_2/Pd-BaSO_4$), Stephen ($RCN + SnCl_2/HCl$), Etard ($Toluene + CrO_2Cl_2$).\nNucleophilic Addition: Reactivity $HCHO > RCHO > R_2CO$.\n1. $HCN \\to$ Cyanohydrin.\n2. $NaHSO_3 \\to$ White crystalline bisulfite adduct (purification).\n3. $RMgX \\to$ Alcohols ($HCHO \\to 1^\\circ, RCHO \\to 2^\\circ, R_2CO \\to 3^\\circ$).\n4. Addition-Elimination with Ammonia Derivatives ($NH_2-Z$): Hydroxylamine $\\to$ Oxime, Hydrazine $\\to$ Hydrazone, 2,4-DNP $\to$ 2,4-Dinitrophenylhydrazone (Orange/Red ppt test for carbonyl).",
          "formulaReaction": "$$>C=O + HCN \\to >C(OH)(CN) \\quad (\\text{Cyanohydrin})$$\n$$R-CHO + H_2N-OH \\to R-CH=N-OH + H_2O \\quad (\\text{Oxime})$$",
          "shortcuts": "2,4-DNP (Brady's Reagent) test confirms presence of ANY carbonyl group ($C=O$).",
          "importantResults": "Benzaldehyde does not give bisulfite adduct easily due to steric hindrance."
        }
      },
      {
        "subtopic": "Oxidation, Reduction (Clemmensen, Wolff-Kishner) & Distinguishing Tests",
        "sections": {
          "concept": "Oxidation: Tollens' Test ($[Ag(NH_3)_2]^+ \\to$ Silver Mirror), Fehling's Test ($Cu^{2+} \\to Cu_2O$ red ppt, aliphatic aldehydes only).\nReduction: Clemmensen ($Zn(Hg)/\\text{conc. } HCl$, acidic), Wolff-Kishner ($NH_2NH_2/KOH, \\text{glycol}$, basic).\nIodoform Reaction: Carbonyl with $CH_3CO-$ or alcohol with $CH_3CH(OH)-$ $+ I_2/NaOH \\to CHI_3 \\downarrow$ (Yellow ppt with antiseptic odor).",
          "formulaReaction": "$$R-CHO + 2 [Ag(NH_3)_2]^+ + 3 OH^- \\to R-COO^- + 2 Ag\\downarrow (\\text{Silver Mirror}) + 4 NH_3 + 2 H_2O$$\n$$CH_3COR + 3 I_2 + 4 NaOH \\to CHI_3\\downarrow (\\text{Yellow}) + RCOONa + 3 NaI + 3 H_2O$$",
          "shortcuts": "Clemmensen is for acid-stable molecules; Wolff-Kishner is for base-stable molecules.",
          "importantResults": "Benzaldehyde gives Tollens' test BUT FAILS Fehling's test."
        }
      },
      {
        "subtopic": "Aldol Condensation, Cannizzaro Reaction & Carboxylic Acids (HVZ Reaction)",
        "sections": {
          "concept": "Aldol Condensation: Requires $\\alpha$-hydrogen. $2 CH_3CHO \\xrightarrow{\\text{dil. } NaOH} CH_3CH(OH)CH_2CHO \\xrightarrow{\\Delta} CH_3CH=CHCHO$.\nCannizzaro Reaction: Non-enolizable aldehydes (no $\\alpha$-H: $HCHO, C_6H_5CHO$) $+ 50\\% NaOH \\to$ Alcohol + Carboxylate salt (Disproportionation redox).\nCarboxylic Acids: Acidic strength $CF_3COOH > CCl_3COOH > CHCl_2COOH > CH_2ClCOOH > CH_3COOH$.\nHell-Volhard-Zelinsky (HVZ) Reaction: $R-CH_2-COOH + X_2 \\xrightarrow{\\text{Red P}} R-CH(X)-COOH$ ($\\alpha$-halogenation).",
          "formulaReaction": "$$\\text{Aldol: } 2 CH_3CHO \\xrightarrow{\\text{dil. } NaOH} CH_3CH(OH)CH_2CHO \\xrightarrow{\\Delta} CH_3CH=CHCHO$$\n$$\\text{Cannizzaro: } 2 HCHO + \\text{conc. } NaOH \\to CH_3OH + HCOONa$$\n$$\\text{HVZ: } R-CH_2-COOH + X_2 \\xrightarrow{\\text{Red P}} R-CH(X)-COOH$$",
          "shortcuts": "Formic acid ($HCOOH$) has aldehyde group, so it reduces both Tollens' and Fehling's reagents.",
          "importantResults": "Crossed Cannizzaro between Formaldehyde and Benzaldehyde gives Methyl alcohol and Sodium benzoate."
        }
      }
    ]
  },
  {
    "id": "ch12_ch13",
    "class": 12,
    "chapterNumber": 13,
    "chapter": "Amines",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Classification, Preparation (Gabriel Phthalimide, Hoffmann Bromamide) & Basicity Orders",
        "sections": {
          "concept": "Classification ($1^\\circ, 2^\\circ, 3^\\circ$ Amines).\nPreparations: Gabriel Phthalimide Synthesis (pure $1^\\circ$ aliphatic amines only; aryl halides fail), Hoffmann Bromamide Degradation ($RCONH_2 + Br_2 + 4NaOH \\to RNH_2 + Na_2CO_3 + 2NaBr$, loses 1 C), Reduction of Nitriles ($RCN + H_2/Ni \\to RCH_2NH_2$) & Nitro compounds.\nBasicity:\n1. Aqueous phase order:\n   - Methyl substituted: $2^\\circ (213) > 1^\\circ > 3^\\circ > NH_3$.\n   - Ethyl substituted: $2^\\circ (231) > 3^\\circ > 1^\\circ > NH_3$.\n2. Gas phase order: $3^\\circ > 2^\\circ > 1^\\circ > NH_3$.\n3. Aniline is much less basic than aliphatic amines due to lone pair delocalization into benzene ring.",
          "formulaReaction": "$$R-CONH_2 + Br_2 + 4 NaOH \\xrightarrow{\\Delta} R-NH_2 + Na_2CO_3 + 2 NaBr + 2 H_2O$$\n$$\\text{Basicity (Aq): } (CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$$",
          "shortcuts": "Hoffmann Bromamide degradation DECREASES carbon chain length by 1 carbon atom.",
          "importantResults": "Gabriel Phthalimide synthesis CANNOT prepare Aniline because aryl halides do not undergo $S_N2$ substitution with phthalimide anion."
        }
      },
      {
        "subtopic": "Distinction Reactions: Carbylamine Test & Hinsberg Test",
        "sections": {
          "concept": "Carbylamine Test: $1^\\circ$ aliphatic/aromatic amine $+ CHCl_3 + 3 alc. KOH \\xrightarrow{\\Delta} R-NC \\text{ (Foul isocyanide odor)} + 3KCl + 3H_2O$. ($2^\\circ$ & $3^\\circ$ amines do NOT give this test).\nHinsberg Test ($C_6H_5SO_2Cl$):\n- $1^\\circ$ Amine $\\to N$-alkylbenzenesulfonamide (has acidic H, SOLUBLE in $NaOH$).\n- $2^\\circ$ Amine $\\to N,N$-dialkylbenzenesulfonamide (no acidic H, INSOLUBLE in $NaOH$).\n- $3^\\circ$ Amine $\\to$ NO REACTION.",
          "formulaReaction": "$$R-NH_2 + CHCl_3 + 3 KOH \\xrightarrow{\\Delta} R-NC \\uparrow + 3 KCl + 3 H_2O$$\n$$R-NH_2 + C_6H_5SO_2Cl \\to C_6H_5SO_2NHR \\xrightarrow{NaOH} \\text{Soluble sodium salt}$$",
          "shortcuts": "Carbylamine test is specific for $1^\\circ$ amines ONLY.",
          "importantResults": "Acetanilide formation ($C_6H_5NH_2 + Ac_2O \\to C_6H_5NHCOCH_3$) protects $-NH_2$ group during nitration/bromination of aniline."
        }
      },
      {
        "subtopic": "Diazotisation, Diazonium Salts, Sandmeyer & Azo Coupling Dyes",
        "sections": {
          "concept": "Diazotisation: $C_6H_5NH_2 + NaNO_2 + 2HCl \\xrightarrow{273-278K} C_6H_5N_2^+Cl^- + NaCl + 2H_2O$.\nSandmeyer Reaction: $Ar-N_2^+Cl^- \\xrightarrow{Cu_2Cl_2/HCl} Ar-Cl$, $Cu_2Br_2/HBr \\to Ar-Br$, $CuCN/KCN \\to Ar-CN$. (Gattermann uses $Cu/HCl$).\nAzo Coupling Reaction: $C_6H_5N_2^+Cl^- + C_6H_5OH \\xrightarrow{pH 9-10, 0-5^\\circ C} p\\text{-hydroxyazobenzene (Orange Dye)}$; with Aniline $\\xrightarrow{pH 4-5} p\\text{-aminoazobenzene (Yellow Dye)}$.",
          "formulaReaction": "$$C_6H_5N_2^+Cl^- + C_6H_5OH \\xrightarrow{pH 9-10} p\\text{-HO-C}_6\\text{H}_4\\text{-N=N-C}_6\\text{H}_5 \\text{ (Orange Dye)}$$\n$$C_6H_5N_2^+Cl^- + C_6H_5NH_2 \\xrightarrow{pH 4-5} p\\text{-H}_2\\text{N-C}_6\\text{H}_4\\text{-N=N-C}_6\\text{H}_5 \\text{ (Yellow Dye)}$$",
          "shortcuts": "Azo coupling is an Electrophilic Aromatic Substitution ($S_E$) where diazonium cation $Ar-N_2^+$ is weak electrophile.",
          "importantResults": "Fluorobenzene is prepared by Balz-Schiemann reaction ($ArN_2^+BF_4^- \\xrightarrow{\\Delta} Ar-F + BF_3 + N_2$)."
        }
      }
    ]
  },
  {
    "id": "ch12_ch14",
    "class": 12,
    "chapterNumber": 14,
    "chapter": "Biomolecules",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Carbohydrates & Glycosidic Bond (Glucose, Fructose, Sucrose, Starch, Cellulose)",
        "sections": {
          "concept": "Carbohydrates: Monosaccharides (Glucose - Aldohexose, Fructose - Ketohexose). D/L configuration based on lowest chiral C glyceraldehyde. Anomers ($\\alpha$ & $\\beta$ at C-1 in glucose / C-2 in fructose). Mutarotation.\nReducing Sugars (Free $-CHO$ or $-CO-$ group: All monosaccharides, Maltose, Lactose) vs Non-Reducing Sugars (Sucrose).\n**Glycosidic Bond**: Oxide linkage ($-C-O-C-$) formed between two monosaccharide units by loss of $H_2O$.\n- Sucrose: $\\alpha$-D-Glucose + $\\beta$-D-Fructose ($C_1-C_2$ glycosidic linkage, Invert sugar).\n- Maltose: 2 $\\alpha$-D-Glucose ($C_1-C_4'$ linkage).\n- Lactose: $\\beta$-D-Galactose + $\\beta$-D-Glucose ($C_1-C_4'$ linkage).\n- Starch: Amylose ($\\alpha-1,4'$ unbranched) + Amylopectin ($\\alpha-1,4'$ & $\\alpha-1,6'$ branched). Cellulose ($\\beta-1,4'$ linkage).",
          "formulaReaction": "$$\\text{Sucrose} + H_2O \\xrightarrow{H^+ / \\text{Invertase}} \\underset{(+52.5^\\circ)}{\\text{D-(+)-Glucose}} + \\underset{(-92.4^\\circ)}{\\text{D-(-)-Fructose}} \\quad (\\text{Invert Sugar } [\\alpha]_D = -19.9^\\circ)$$",
          "shortcuts": "Sucrose is NON-REDUCING because both reducing groups (C-1 of glucose & C-2 of fructose) are involved in glycosidic bond.",
          "importantResults": "Glucose forms n-hexane with $HI$, gluconic acid with $Br_2$ water, and saccharic acid with $HNO_3$."
        }
      },
      {
        "subtopic": "Proteins, Amino Acids & Chemical Bonds (Peptide & Disulfide Bonds)",
        "sections": {
          "concept": "Amino Acids: $\\alpha$-amino acids $R-CH(NH_2)COOH$. Essential (Val, Leu, Ile, Lys, Met, Phe, Trp, Thr, His, Arg) vs Non-essential. Zwitterion form $+H_3N-CH(R)-COO^-$. Isoelectric Point ($pI$).\n**Peptide Bond**: Amide linkage ($-CO-NH-$) formed between $-COOH$ of one amino acid and $-NH_2$ of another by elimination of $H_2O$.\nProtein Structure:\n- Primary: Linear sequence of amino acids.\n- Secondary: $\\alpha$-helix & $\\beta$-pleated sheet stabilized by **Intramolecular Hydrogen Bonds**.\n- Tertiary: 3D folding stabilized by **Disulfide Bonds ($-S-S-$)**, Ionic bonds, van der Waals, H-bonds.\n- Quaternary: Multi-subunit assembly.\nDenaturation: Loss of secondary & tertiary structure without affecting primary structure (e.g. boiling egg, curdling milk).",
          "formulaReaction": "$$\\text{Amino Acid Zwitterion: } H_2N-CH(R)-COOH \\rightleftharpoons ^+H_3N-CH(R)-COO^-$$",
          "shortcuts": "Glycine is the ONLY natural amino acid that is optically INACTIVE (no chiral carbon).",
          "importantResults": "Fibrous proteins (Keratin, Myosin; insoluble) vs Globular proteins (Insulin, Albumin; soluble)."
        }
      },
      {
        "subtopic": "Enzymes, Vitamins & Deficiency Diseases",
        "sections": {
          "concept": "Enzymes: Biocatalysts, highly specific, optimum pH and temperature. Lock & Key and Induced Fit models.\nVitamins: Water-Soluble (B-complex, C; excreted in urine, require regular supply except $B_{12}$) vs Fat-Soluble (A, D, E, K; stored in liver/adipose tissue).\nDeficiency Diseases:\n- Vitamin A: Night blindness, Xerophthalmia.\n- Vitamin $B_1$ (Thiamine): Beri-beri.\n- Vitamin $B_2$ (Riboflavin): Cheilosis.\n- Vitamin $B_6$ (Pyridoxine): Convulsions.\n- Vitamin $B_{12}$ (Cyanocobalamin): Pernicious anaemia.\n- Vitamin C (Ascorbic Acid): Scurvy.\n- Vitamin D: Rickets in children, Osteomalacia in adults.\n- Vitamin E: Muscular weakness & increased fragility of RBCs.\n- Vitamin K: Increased blood clotting time.",
          "formulaReaction": "$$\\text{Vitamin C} = \\text{L-Ascorbic Acid (Water Soluble)}, \\quad \\text{Vitamin B}_{12} = \\text{Contains Cobalt (Co)}$$",
          "shortcuts": "Fat soluble vitamins: A, D, E, K (Mnemonic: KEDA).",
          "importantResults": "Vitamin C is easily destroyed by cooking and heat."
        }
      },
      {
        "subtopic": "Nucleic Acids (DNA & RNA) & Chemical Bonds (Phosphodiester & H-Bonds)",
        "sections": {
          "concept": "Nucleoside $=$ Nitrogenous Base $+$ Pentose Sugar. Nucleotide $=$ Nucleoside $+$ Phosphate group.\n**Phosphodiester Linkage**: Connects 5'-carbon of one nucleotide to 3'-carbon of adjacent nucleotide in nucleic acid backbone.\nDNA vs RNA: DNA contains $\\beta$-D-2-deoxyribose, Bases A, G, C, T; RNA contains $\\beta$-D-ribose, Bases A, G, C, U.\n**Hydrogen Bonding in Base Pairing**: Watson-Crick double helix held by H-bonds: Adenine pairs with Thymine via 2 H-bonds ($A=T$), Guanine pairs with Cytosine via 3 H-bonds ($G\\equiv C$).",
          "formulaReaction": "$$\\text{DNA Base Pairing: } A = T \\text{ (2 H-bonds)}, \\quad G \\equiv C \\text{ (3 H-bonds)}$$",
          "shortcuts": "RNA contains Uracil (U) instead of Thymine (T).",
          "importantResults": "DNA replication is semi-conservative."
        }
      }
    ]
  },
  {
    "id": "ch12_ch15",
    "class": 12,
    "chapterNumber": 15,
    "chapter": "Polymers",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Classification & Polymerization Types (Addition vs Condensation)",
        "sections": {
          "concept": "Classification based on Source (Natural: Rubber, Cellulose; Synthetic: Nylon, Polythene; Semi-synthetic: Rayon), Structure (Linear, Branched, Cross-linked), Molecular Forces (Elastomers, Fibers, Thermographics, Thermosetting).\nAddition (Chain-growth) vs Condensation (Step-growth) Polymerization.",
          "formulaReaction": "$$\\text{Addition: } n (CH_2=CH_2) \\to -[-CH_2-CH_2-]-_n$$\n$$\\text{Condensation: } n HO-R-OH + n HOOC-R'-COOH \\to -[-O-R-O-CO-R'-CO-]-_n + (2n-1) H_2O$$",
          "shortcuts": "Thermosetting polymers (Bakelite, Melamine) CANNOT be remolded on heating due to cross-links.",
          "importantResults": "Ziegler-Natta catalyst ($Et_3Al + TiCl_4$) produces linear High Density Polythene (HDP)."
        }
      },
      {
        "subtopic": "Important Addition & Condensation Polymers (Monomers & Uses)",
        "sections": {
          "concept": "Addition Polymers:\n- LDP (Low Density Polythene): Ethene, high pressure, branched, flexible (squeeze bottles).\n- HDP (High Density Polythene): Ethene, Ziegler-Natta catalyst, linear (buckets, pipes).\n- Teflon (PTFE): Tetrafluoroethene ($CF_2=CF_2$), non-stick cookware.\n- PAN (Orlon/Acrilan): Acrylonitrile ($CH_2=CH-CN$), wool substitute.\n- PVC: Vinyl chloride ($CH_2=CH-Cl$), raincoats, pipes.\nCondensation Polymers:\n- Nylon-6,6: Hexamethylenediamine $+$ Adipic acid (Amide linkage $-CONH-$).\n- Nylon-6: Caprolactam.\n- Dacron / Terylene: Ethylene glycol $+$ Terephthalic acid (Ester linkage $-COO-$).\n- Bakelite: Phenol $+$ Formaldehyde (Thermosetting).\n- Melamine: Melamine $+$ Formaldehyde (Unbreakable dinnerware).",
          "formulaReaction": "$$\\text{Nylon-6,6 Monomers: } H_2N(CH_2)_6NH_2 + HOOC(CH_2)_4COOH$$\n$$\\text{Teflon Monomer: } CF_2=CF_2$$",
          "shortcuts": "Nylon-6,6 has 6 carbons in hexamethylenediamine and 6 carbons in adipic acid.",
          "importantResults": "Novolac is a linear initial condensation product of Phenol and Formaldehyde used in paints."
        }
      },
      {
        "subtopic": "Rubbers, Vulcanization, Copolymers (Buna-S, Buna-N) & Biodegradable Polymers (PHBV)",
        "sections": {
          "concept": "Natural Rubber: cis-1,4-polyisoprene. Vulcanization adds sulfur cross-links ($1-5\\% S$) at reactive allylic positions to improve elasticity, tensile strength & thermal stability.\nSynthetic Rubbers:\n- Neoprene: Chloroprene ($2$-chloro-$1,3$-butadiene).\n- Buna-N: $1,3$-Butadiene $+$ Acrylonitrile. Oil resistant.\n- Buna-S: $1,3$-Butadiene $+$ Styrene. Auto tires.\nBiodegradable Polymers: PHBV (Poly$\\beta$-hydroxybutyrate-co-$\\beta$-hydroxyvalerate), Nylon-2-nylon-6.",
          "formulaReaction": "$$\\text{Neoprene Monomer: } CH_2=C(Cl)-CH=CH_2$$\n$$\\text{PHBV Monomers: 3-hydroxybutanoic acid } + \\text{3-hydroxypentanoic acid}$$",
          "shortcuts": "Buna-S: 'Bu' for butadiene, 'Na' for sodium catalyst, 'S' for styrene.",
          "importantResults": "PHBV is used in specialty packaging, orthopedic devices, and controlled drug release."
        }
      }
    ]
  },
  {
    "id": "ch12_ch16",
    "class": 12,
    "chapterNumber": 16,
    "chapter": "Chemistry in Everyday Life",
    "category": "Organic Chemistry",
    "subtopics": [
      {
        "subtopic": "Drugs, Receptors & Drug-Target Interactions",
        "sections": {
          "concept": "Drug-Target Interactions: Enzymes as drug targets, Enzyme Inhibitors (Competitive vs Non-competitive), Receptors, Agonists (mimic natural messenger) vs Antagonists (block receptor site).",
          "formulaReaction": "$$\\text{Enzyme} + \\text{Substrate} \\rightleftharpoons \\text{[Enzyme-Substrate Complex]} \\to \\text{Enzyme} + \\text{Product}$$",
          "shortcuts": "Competitive inhibitors bind to active site; Non-competitive inhibitors bind to ALLOSTERIC site.",
          "importantResults": "Antagonists block binding site of natural messenger when signal block is required."
        }
      },
      {
        "subtopic": "Analgesics, Antibiotics, Antiseptics, Disinfectants, Antacids & Tranquilizers",
        "sections": {
          "concept": "Analgesics: Non-narcotic (Aspirin - Acetylsalicylic acid, anti-pyretic & blood thinner; Paracetamol/Acetaminophen); Narcotic (Morphine, Codeine, Heroin - severe pain relief, addictive).\nAntibiotics: Bactericidal (kill: Penicillin, Aminoglycosides, Ofloxacin) vs Bacteriostatic (inhibit: Erythromycin, Tetracycline, Chloramphenicol). Broad Spectrum: Chloramphenicol, Ampicillin, Amoxycillin.\nAntiseptics: Applied to living tissues. Dettol ($Chloroxylenol + Terpineol$), Bithional (added to soap), Tincture Iodine ($2-3\\% I_2$ in alcohol-water), $0.2\\%$ Phenol.\nDisinfectants: Applied to inanimate objects. $1\\%$ Phenol, $0.2-0.4$ ppm $Cl_2$ in water, $SO_2$.\nAntacids & Antihistamines: Antacids (Cimetidine/Tagamet, Ranitidine/Zantac, $Al(OH)_3, Mg(OH)_2$); Antihistamines (Brompheniramine/Dimetapp, Terfenadine/Seldane).\nTranquilizers: Relieve stress/anxiety. Equanil, Barbiturates (Veronal, Amytal, Nembutal, Luminal, Seconal), Valium, Serotonin.",
          "formulaReaction": "$$\\text{Aspirin: Salicylic Acid } + (CH_3CO)_2O \\xrightarrow{H^+} \\text{Acetylsalicylic Acid (Aspirin)} + CH_3COOH$$",
          "shortcuts": "$0.2\\%$ Phenol is ANTISEPTIC; $1.0\\%$ Phenol is DISINFECTANT.",
          "importantResults": "Aspirin inhibits prostaglandin synthesis and acts as anti-blood clotting agent."
        }
      },
      {
        "subtopic": "Soaps, Detergents (Anionic, Cationic, Non-ionic) & Cleansing Action",
        "sections": {
          "concept": "Soaps: Sodium or potassium salts of long chain fatty acids (stearic, oleic, palmitic acids). Saponification: Glyceryl ester $+ NaOH \\to$ Soap $+$ Glycerol. Soft soaps use $KOH$.\nDetergents: Synthetic cleansing agents working in hard water:\n- Anionic: Sodium lauryl sulfate ($CH_3(CH_2)_{10}CH_2OSO_3^- Na^+$), Sodium dodecylbenzenesulfonate (Toothpaste, household).\n- Cationic: Cetyltrimethylammonium bromide (Hair conditioners, germicidal).\n- Non-ionic: Polyethylene glycol stearate (Liquid dishwashing).\nCleansing Action: Hydrophobic hydrocarbon tail dissolves in grease; Hydrophilic polar head stays in water $\\to$ Micelle formation.",
          "formulaReaction": "$$\\text{Saponification: } C_{17}H_{35}COOCH_2-\\dots + 3 NaOH \\to 3 C_{17}H_{35}COONa + \\text{Glycerol}$$",
          "shortcuts": "Soaps fail in hard water because $Ca^{2+}$ and $Mg^{2+}$ form insoluble scum (precipitate).",
          "importantResults": "Detergents with straight-chain alkyl groups are biodegradable; highly branched chains cause persistent water foaming pollution."
        }
      }
    ]
  }
];

export const MASTER_CHEMISTRY_SHEETS = [
  {
    id: "sheet_p1",
    title: "1. Mole Concept & Stoichiometry Master Sheet",
    category: "Physical Chemistry",
    summary: "Essential formulas for mole calculations, gas molar volume, concentration units, and limiting reagent determination.",
    keyFormulas: [
      { name: "Mole Formulae", formula: "$n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V_{\\text{STP}}}{22.4 \\text{ L}}$" },
      { name: "Molarity (M)", formula: "$M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}} = \\frac{\\text{Mass\\%} \\times 10 \\times d}{M_{\\text{solute}}}$" },
      { name: "Molality (m)", formula: "$m = \\frac{n_{\\text{solute}}}{W_{\\text{solvent (kg)}}} = \\frac{1000 M}{1000 d - M M_{\\text{solute}}}$" },
      { name: "Mole Fraction", formula: "$X_A = \\frac{n_A}{n_A + n_B} \\quad (X_A + X_B = 1)$" }
    ],
    shortcut: "Limiting Reagent Trick: Calculate Moles / Stoichiometric Coefficient. Smallest ratio is the limiting reagent!"
  },
  {
    id: "sheet_p2",
    title: "2. Electrochemistry & Nernst Master Sheet",
    category: "Physical Chemistry",
    summary: "Cell EMF, Nernst equation, Gibbs energy relation, conductivity, Kohlrausch's law, and Faraday's laws.",
    keyFormulas: [
      { name: "Standard Cell EMF", formula: "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$" },
      { name: "Nernst Equation", formula: "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q$" },
      { name: "Kohlrausch's Law", formula: "$\\Lambda_m^\\circ = v_+ \\lambda_+^\\circ + v_- \\lambda_-^\\circ$" }
    ],
    shortcut: "LOAN mnemonic: Left, Oxidation, Anode, Negative."
  }
];

export const CHEMISTRY_CONSTANTS = [
  { name: "Avogadro Constant", symbol: "N_A", value: "6.02214076 \\times 10^{23}", unit: "\\text{mol}^{-1}", usage: "Conversion between moles and number of particles." },
  { name: "Universal Gas Constant (SI)", symbol: "R", value: "8.3144626", unit: "\\text{J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}", usage: "Ideal gas equation $PV = nRT$, Gibbs free energy $\\Delta G^0 = -RT \\ln K$." },
  { name: "Universal Gas Constant (L·atm)", symbol: "R", value: "0.082057", unit: "\\text{L}\\cdot\\text{atm}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}", usage: "Gas law calculations with pressure in atm and volume in liters." },
  { name: "Universal Gas Constant (Calories)", symbol: "R", value: "1.987 \\approx 2.0", unit: "\\text{cal}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}", usage: "Thermal chemistry calculations where energy is given in calories." },
  { name: "Boltzmann Constant", symbol: "k_B = R / N_A", value: "1.380649 \\times 10^{-23}", unit: "\\text{J}\\cdot\\text{K}^{-1}", usage: "Gas kinetic theory, equipartition of energy per molecule." },
  { name: "Faraday Constant", symbol: "F = N_A e", value: "96485.33 \\approx 96500", unit: "\\text{C}\\cdot\\text{mol}^{-1}", usage: "Electrolysis, charge carried by 1 mole of electrons ($Q = n F$)." },
  { name: "Planck Constant", symbol: "h", value: "6.62607015 \\times 10^{-34}", unit: "\\text{J}\\cdot\\text{s}", usage: "Photon energy $E = h\\nu = hc/\\lambda$, de Broglie wavelength $\\lambda = h/p$." },
  { name: "Speed of Light in Vacuum", symbol: "c", value: "2.99792458 \\times 10^8", unit: "\\text{m}\\cdot\\text{s}^{-1}", usage: "Electromagnetic radiation frequency-wavelength relation $c = \\nu \\lambda$." },
  { name: "Elementary Charge", symbol: "e", value: "1.602176634 \\times 10^{-19}", unit: "\\text{C}", usage: "Charge of single electron or proton." },
  { name: "Electron Rest Mass", symbol: "m_e", value: "9.1093837 \\times 10^{-31}", unit: "\\text{kg}", usage: "Bohr model, de Broglie wavelength of electron." },
  { name: "Proton Rest Mass", symbol: "m_p", value: "1.6726219 \\times 10^{-27}", unit: "\\text{kg}", usage: "Atomic mass unit scale reference." },
  { name: "Neutron Rest Mass", symbol: "m_n", value: "1.6749275 \\times 10^{-27}", unit: "\\text{kg}", usage: "Nuclear mass defect and mass number." },
  { name: "Atomic Mass Unit (1 u)", symbol: "1 \\text{ u} = \\frac{1}{12} \\text{Mass of } ^{12}\\text{C}", value: "1.660539 \\times 10^{-27}", unit: "\\text{kg}", usage: "Conversion between amu and kilograms ($1 \\text{ u} \\equiv 931.5 \\text{ MeV}$)." },
  { name: "Rydberg Constant for Hydrogen", symbol: "R_H", value: "1.09677 \\times 10^7", unit: "\\text{m}^{-1}", usage: "Hydrogen spectral lines wave number $\\bar{\\nu} = R_H Z^2 (1/n_1^2 - 1/n_2^2)$." },
  { name: "Standard Atmospheric Pressure", symbol: "1 \\text{ atm}", value: "1.01325 \\times 10^5 = 760", unit: "\\text{Pa} = \\text{N/m}^2 = \\text{mmHg}", usage: "Gas law calculations and standard state conditions (STP)." },
  { name: "Standard Temperature & Pressure (STP)", symbol: "T_{\\text{STP}}, P_{\\text{STP}}", value: "273.15 \\text{ K } (0^\\circ\\text{C}), 1 \\text{ atm}", unit: "\\text{K, atm}", usage: "Molar volume of ideal gas at STP = $22.414 \\text{ L/mol}$ ($22.7 \\text{ L}$ at 1 bar)." },
  { name: "Standard Ambient Temp & Pressure (SATP)", symbol: "T_{\\text{SATP}}, P_{\\text{SATP}}", value: "298.15 \\text{ K } (25^\\circ\\text{C}), 1 \\text{ bar}", unit: "\\text{K, bar}", usage: "Standard thermodynamic state calculations." }
];

export const COMMON_ATOMIC_MASSES = [
  { element: "Hydrogen (H)", atomicNumber: 1, mass: 1.008, approx: 1 },
  { element: "Helium (He)", atomicNumber: 2, mass: 4.0026, approx: 4 },
  { element: "Carbon (C)", atomicNumber: 6, mass: 12.011, approx: 12 },
  { element: "Nitrogen (N)", atomicNumber: 7, mass: 14.007, approx: 14 },
  { element: "Oxygen (O)", atomicNumber: 8, mass: 15.999, approx: 16 },
  { element: "Fluorine (F)", atomicNumber: 9, mass: 18.998, approx: 19 },
  { element: "Sodium (Na)", atomicNumber: 11, mass: 22.990, approx: 23 },
  { element: "Magnesium (Mg)", atomicNumber: 12, mass: 24.305, approx: 24 },
  { element: "Aluminium (Al)", atomicNumber: 13, mass: 26.982, approx: 27 },
  { element: "Silicon (Si)", atomicNumber: 14, mass: 28.085, approx: 28 },
  { element: "Phosphorus (P)", atomicNumber: 15, mass: 30.974, approx: 31 },
  { element: "Sulfur (S)", atomicNumber: 16, mass: 32.06, approx: 32 },
  { element: "Chlorine (Cl)", atomicNumber: 17, mass: 35.453, approx: 35.5 },
  { element: "Potassium (K)", atomicNumber: 19, mass: 39.098, approx: 39 },
  { element: "Calcium (Ca)", atomicNumber: 20, mass: 40.078, approx: 40 },
  { element: "Manganese (Mn)", atomicNumber: 25, mass: 54.938, approx: 55 },
  { element: "Iron (Fe)", atomicNumber: 26, mass: 55.845, approx: 56 },
  { element: "Copper (Cu)", atomicNumber: 29, mass: 63.546, approx: 63.5 },
  { element: "Zinc (Zn)", atomicNumber: 30, mass: 65.38, approx: 65 },
  { element: "Bromine (Br)", atomicNumber: 35, mass: 79.904, approx: 80 },
  { element: "Silver (Ag)", atomicNumber: 47, mass: 107.868, approx: 108 },
  { element: "Iodine (I)", atomicNumber: 53, mass: 126.904, approx: 127 },
  { element: "Barium (Ba)", atomicNumber: 56, mass: 137.327, approx: 137 },
  { element: "Gold (Au)", atomicNumber: 79, mass: 196.967, approx: 197 },
  { element: "Lead (Pb)", atomicNumber: 82, mass: 207.2, approx: 207 }
];

export const CHEMISTRY_REAGENTS = [
  { id: "reagent_kmno4", name: "Potassium Permanganate", formula: "\\text{KMnO}_4", function: "Strong Oxidizing Agent", transformations: "1^\\circ \\text{ Alcohols} \\to \\text{Carboxylic Acids} \\quad | \\quad 2^\\circ \\text{ Alcohols} \\to \\text{Ketones} \\quad | \\quad \\text{Alkylbenzenes} \\to \\text{Benzoic Acid}", conditions: "Acidic ($H^+$), Basic ($OH^-$), or Neutral. Cold dilute alkaline $KMnO_4$ for syn-hydroxylation.", selectivity: "Decolorizes purple \\text{KMnO}_4 solution (Baeyer's test for unsaturation).", exampleReaction: "R\\text{-}CH_2OH + 2[O] \\xrightarrow{\\text{KMnO}_4 / \\text{H}^+} R\\text{-}COOH + H_2O" },
  { id: "reagent_k2cr2o7", name: "Potassium Dichromate", formula: "\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4", function: "Strong Oxidizing Agent", transformations: "1^\\circ \\text{ Alcohols} \\to \\text{Carboxylic Acids} \\quad | \\quad 2^\\circ \\text{ Alcohols} \\to \\text{Ketones}", conditions: "Acidic medium (conc. $H_2SO_4$), heat.", selectivity: "Orange \\text{Cr}_2\\text{O}_7^{2-} turns green \\text{Cr}^{3+} upon reduction.", exampleReaction: "3 R\\text{-}CH_2OH + 2 K_2Cr_2O_7 + 8 H_2SO_4 \\to 3 R\\text{-}COOH + 2 Cr_2(SO_4)_3 \\text{ (Green)} + 2 K_2SO_4 + 11 H_2O" },
  { id: "reagent_pcc", name: "Pyridinium Chlorochromate (PCC)", formula: "\\text{C}_5\\text{H}_5\\text{NH}^+ \\text{CrO}_3\\text{Cl}^-", function: "Mild Selective Oxidizing Agent", transformations: "1^\\circ \\text{ Alcohols} \\to \\text{Aldehydes (Stops at Aldehyde)} \\quad | \\quad 2^\\circ \\text{ Alcohols} \\to \\text{Ketones}", conditions: "Anhydrous \\text{CH}_2\\text{Cl}_2 (dichloromethane) solvent.", selectivity: "Does NOT oxidize aldehydes further to carboxylic acids; leaves C=C double bonds intact.", exampleReaction: "R\\text{-}CH_2OH \\xrightarrow{\\text{PCC} / \\text{CH}_2\\text{Cl}_2} R\\text{-}CHO" },
  { id: "reagent_lialh4", name: "Lithium Aluminium Hydride (LAH)", formula: "\\text{LiAlH}_4", function: "Strong Nucleophilic Reducing Agent", transformations: "\\text{Carboxylic Acids, Esters, Aldehydes, Ketones} \\to \\text{Alcohols} \\quad | \\quad \\text{Amides, Nitriles} \\to \\text{Primary Amines}", conditions: "Dry ether or THF solvent followed by acidic aqueous workup (H_3O^+).", selectivity: "Reacts violently with water/moisture releasing H_2 gas. Cannot reduce isolated C=C double bonds.", exampleReaction: "R\\text{-}COOH \\xrightarrow[\\text{2. } H_3O^+]{\\text{1. LiAlH}_4 / \\text{ether}} R\\text{-}CH_2OH" },
  { id: "reagent_nabh4", name: "Sodium Borohydride", formula: "\\text{NaBH}_4", function: "Mild Selective Reducing Agent", transformations: "\\text{Aldehydes} \\to 1^\\circ \\text{ Alcohols} \\quad | \\quad \\text{Ketones} \\to 2^\\circ \\text{ Alcohols} \\quad | \\quad \\text{Acyl Chlorides} \\to 1^\\circ \\text{ Alcohols}", conditions: "Protic solvents (methanol, ethanol, or water).", selectivity: "Safer than LAH; does NOT reduce esters, carboxylic acids, or amides.", exampleReaction: "R\\text{-}CO\\text{-}R' \\xrightarrow{\\text{NaBH}_4 / \\text{CH}_3\\text{OH}} R\\text{-}CH(OH)\\text{-}R'" },
  { id: "reagent_ozonolysis", name: "Ozone with Zinc / Water", formula: "\\text{O}_3 / \\text{Zn}, \\text{H}_2\\text{O}", function: "Reductive Cleavage of C=C Double/Triple Bonds", transformations: "\\text{Alkenes } (R\\text{-}CH=CH\\text{-}R') \\to \\text{Aldehydes / Ketones}", conditions: "Low temp (-78^\\circ\\text{C} in \\text{CH}_2\\text{Cl}_2) followed by \\text{Zn}/\\text{H}_2\\text{O} reduction.", selectivity: "Zinc prevents further oxidation of aldehydes to carboxylic acids.", exampleReaction: "R\\text{-}CH=CH\\text{-}R' \\xrightarrow[\\text{2. Zn / } H_2O]{\\text{1. } O_3} R\\text{-}CHO + R'\\text{-}CHO" },
  { id: "reagent_socl2", name: "Thionyl Chloride", formula: "\\text{SOCl}_2", function: "Chlorinating Agent", transformations: "R\\text{-}OH \\to R\\text{-}Cl \\quad | \\quad R\\text{-}COOH \\to R\\text{-}COCl", conditions: "Reflux, often in presence of pyridine.", selectivity: "Byproducts \\text{SO}_2(g) and \\text{HCl}(g) escape, leaving pure product.", exampleReaction: "R\\text{-}OH + SOCl_2 \\xrightarrow{\\text{Pyridine}} R\\text{-}Cl + SO_2\\uparrow + HCl\\uparrow" },
  { id: "reagent_grignard", name: "Grignard Reagent", formula: "R\\text{-}\\text{MgX}", function: "Strong Carbon Nucleophile & Base", transformations: "\\text{Formaldehyde} \\to 1^\\circ \\text{ Alcohol} \\quad | \\quad \\text{Aldehydes} \\to 2^\\circ \\text{ Alcohol} \\quad | \\quad \\text{Ketones} \\to 3^\\circ \\text{ Alcohol} \\quad | \\quad \\text{CO}_2 \\to \\text{Carboxylic Acid}", conditions: "Dry ether or THF solvent, followed by H_3O^+ hydrolysis.", selectivity: "Protic sources (water, alcohol) destroy Grignard reagents to yield alkanes (R\\text{-}H).", exampleReaction: "R\\text{-}MgX + HCHO \\xrightarrow[\\text{2. } H_3O^+]{\\text{1. Dry Ether}} R\\text{-}CH_2OH" },
  { id: "reagent_tollens", name: "Tollens' Reagent", formula: "[\\text{Ag(NH}_3)_2]^+\\text{OH}^-", function: "Mild Selective Oxidizing Agent", transformations: "\\text{Aliphatic \and Aromatic Aldehydes} \\to \\text{Carboxylate Ions} + \\text{Ag Mirror (Silver)}", conditions: "Warm alkaline solution.", selectivity: "Distinguishes aldehydes (positive silver mirror) from ketones (negative test).", exampleReaction: "R\\text{-}CHO + 2[Ag(NH_3)_2]^+ + 3 OH^- \\to R\\text{-}COO^- + 2 Ag\\downarrow \\text{ (Mirror)} + 4 NH_3 + 2 H_2O" },
  { id: "reagent_fehling", name: "Fehling's Solution", formula: "\\text{Fehling A (CuSO}_4) + \\text{Fehling B (Rochelle Salt + NaOH)}", function: "Mild Oxidizing Agent", transformations: "\\text{Aliphatic Aldehydes} \\to \\text{Carboxylate Ions} + \\text{Cu}_2\\text{O} \\text{ (Red ppt)}", conditions: "Heat in alkaline medium.", selectivity: "Aromatic aldehydes (benzaldehyde) do NOT reduce Fehling's solution.", exampleReaction: "R\\text{-}CHO + 2 Cu^{2+} + 5 OH^- \\to R\\text{-}COO^- + Cu_2O\\downarrow \\text{ (Red ppt)} + 3 H_2O" },
  { id: "reagent_clemmensen", name: "Clemmensen Reduction Reagent", formula: "\\text{Zn(Hg)} / \\text{conc. HCl}", function: "Deoxygenation of Carbonyl Group to Methylene", transformations: "\\text{Carbonyl Group } (C=O) \\to \\text{Methylene Group } (-CH_2-)", conditions: "Strongly acidic conditions, reflux.", selectivity: "Unsuitable for acid-sensitive compounds containing OH, ester, or ether groups.", exampleReaction: "R\\text{-}CO\\text{-}R' \\xrightarrow{\\text{Zn(Hg)} / \\text{conc. HCl}} R\\text{-}CH_2\\text{-}R' + H_2O" },
  { id: "reagent_wolff_kishner", name: "Wolff-Kishner Reduction Reagent", formula: "\\text{NH}_2\\text{NH}_2 / \\text{KOH}, \\text{Ethylene Glycol}", function: "Deoxygenation of Carbonyl Group to Methylene", transformations: "\\text{Carbonyl Group } (C=O) \\to \\text{Methylene Group } (-CH_2-) + N_2\\uparrow", conditions: "Strongly basic medium, high temperature (180-200^\\circ\\text{C}).", selectivity: "Ideal for acid-sensitive compounds; unsuitable for base-sensitive groups.", exampleReaction: "R\\text{-}CO\\text{-}R' \\xrightarrow[\\text{Glycol}, \\Delta]{\\text{NH}_2\\text{NH}_2 / \\text{KOH}} R\\text{-}CH_2\\text{-}R' + N_2\\uparrow" },
  { id: "reagent_lucas", name: "Lucas Reagent", formula: "\\text{Anhydrous ZnCl}_2 + \\text{conc. HCl}", function: "Classification of Alcohols", transformations: "1^\\circ, 2^\\circ, 3^\\circ \\text{ Alcohols} \\to \\text{Insoluble Alkyl Chlorides } (R\\text{-}Cl)", conditions: "Room temperature.", selectivity: "3^\\circ alcohols give immediate turbidity; 2^\\circ within 5 min; 1^\\circ requires heat.", exampleReaction: "R\\text{-}OH + HCl \\xrightarrow{\\text{Anhyd. ZnCl}_2} R\\text{-}Cl\\downarrow \\text{ (Turbidity)} + H_2O" },
  { id: "reagent_hinsberg", name: "Hinsberg Reagent", formula: "\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}", function: "Distinction \& Separation of Amines", transformations: "1^\\circ \\text{ Amine} \\to \\text{Soluble in alkali} \\quad | \\quad 2^\\circ \\text{ Amine} \\to \\text{Insoluble in alkali} \\quad | \\quad 3^\\circ \\text{ Amine} \\to \\text{No reaction}", conditions: "Aqueous \\text{NaOH} medium.", selectivity: "Distinguishes primary, secondary, and tertiary amines.", exampleReaction: "R\\text{-}NH_2 + C_6H_5SO_2Cl \\to C_6H_5SO_2NHR \\text{ (Soluble in NaOH)}" },
  { id: "reagent_lindlar", name: "Lindlar's Catalyst", formula: "\\text{H}_2 / \\text{Pd-CaCO}_3 \\text{ poisoned with quinoline}", function: "Stereoselective Partial Hydrogenation of Alkynes", transformations: "\\text{Alkynes } (R\\text{-}C\\equiv C\\text{-}R') \\to \\text{cis-Alkenes / (Z)-Alkenes}", conditions: "Room temperature under hydrogen gas pressure.", selectivity: "Prevents complete reduction to alkanes.", exampleReaction: "R\\text{-}C\\equiv C\\text{-}R' + H_2 \\xrightarrow{\\text{Pd-CaCO}_3 / \\text{Quinoline}} \\text{cis-}R\\text{-}CH=CH\\text{-}R'" },
  { id: "reagent_birch", name: "Birch Reduction Reagents", formula: "\\text{Na} / \\text{liquid NH}_3 + \\text{C}_2\\text{H}_5\\text{OH}", function: "Stereoselective Partial Reduction", transformations: "\\text{Non-terminal Alkynes} \\to \\text{trans-Alkenes / (E)-Alkenes} \\quad | \\quad \\text{Benzene} \\to 1,4\\text{-Cyclohexadiene}", conditions: "Low temperature (-33^\\circ\\text{C}).", selectivity: "Solvated electrons give trans-alkene geometry.", exampleReaction: "R\\text{-}C\\equiv C\\text{-}R' \\xrightarrow{\\text{Na / Liq. } NH_3} \\text{trans-}R\\text{-}CH=CH\\text{-}R'" },
  { id: "reagent_alcl3", name: "Anhydrous Aluminium Chloride", formula: "\\text{Anhydrous AlCl}_3", function: "Strong Lewis Acid Catalyst", transformations: "\\text{Friedel-Crafts Alkylation } (R\\text{-}Cl) \\text{ and Acylation } (R\\text{-}COCl)", conditions: "Anhydrous medium.", selectivity: "Forms carbocation electrophiles from alkyl/acyl halides.", exampleReaction: "R\\text{-}Cl + AlCl_3 \\rightleftharpoons R^+ + AlCl_4^-" },
  { id: "reagent_koh_comparison", name: "Alcoholic KOH vs Aqueous KOH", formula: "\\text{alc. KOH vs aq. KOH}", function: "Elimination (E2) vs Nucleophilic Substitution (S_N2)", transformations: "\\text{Alc. KOH: Alkyl Halides } \\to \\text{Alkenes} \\quad | \\quad \\text{Aq. KOH: Alkyl Halides } \\to \\text{Alcohols}", conditions: "Heat for alc. KOH; room temp for aq. KOH.", selectivity: "Alc. KOH contains ethoxide ion (\\text{C}_2\\text{H}_5\\text{O}^-), promoting elimination.", exampleReaction: "R\\text{-}CH_2CH_2X \\xrightarrow[\\Delta]{\\text{alc. KOH}} R\\text{-}CH=CH_2 + KX + H_2O" },
  { id: "reagent_sodamide", name: "Sodamide", formula: "\\text{NaNH}_2", function: "Superbase", transformations: "\\text{Terminal Alkynes} \\to \\text{Acetylide Ions } (R\\text{-}C\\equiv C^- \\text{Na}^+) \\quad | \\quad \\text{Dihalides} \\to \\text{Alkynes}", conditions: "Liquid ammonia solvent (-33^\\circ\\text{C}).", selectivity: "Much stronger base than \\text{KOH} or \\text{NaOH}.", exampleReaction: "R\\text{-}C\\equiv CH + NaNH_2 \\xrightarrow{\\text{Liq. } NH_3} R\\text{-}C\\equiv C^- Na^+ + NH_3" }
];

export const CHEMISTRY_NAMED_REACTIONS = [
  { id: "rxn_wurtz", name: "Wurtz Reaction", class: 11, equation: "2 R\\text{-}X + 2\\text{Na} \\xrightarrow{\\text{Dry Ether}} R\\text{-}R + 2\\text{NaX}", reactants: "Alkyl Halides", reagents: "Na / Dry Ether", conditions: "Reflux", product: "Symmetrical Alkane", type: "Free Radical Coupling", mechanism: "Radical coupling via organosodium intermediate.", exceptions: "Unsuitable for unsymmetrical alkanes.", examNotes: "Doubles carbon chain length." },
  { id: "rxn_finkelstein", name: "Finkelstein Reaction", class: 12, equation: "R\\text{-}Cl/Br + \\text{NaI} \\xrightarrow{\\text{Dry Acetone}} R\\text{-}I + \\text{NaCl/NaBr}\\downarrow", reactants: "Alkyl Chlorides/Bromides", reagents: "NaI / Dry Acetone", conditions: "Room temp", product: "Alkyl Iodide", type: "S_N2 Halogen Exchange", mechanism: "Precipitation of NaCl/NaBr in acetone.", exceptions: "Aryl/vinyl halides fail.", examNotes: "Specific route for alkyl iodides." },
  { id: "rxn_swarts", name: "Swarts Reaction", class: 12, equation: "R\\text{-}Cl/Br + \\text{AgF} \\xrightarrow{\\Delta} R\\text{-}F + \\text{AgCl}\\downarrow", reactants: "Alkyl Chlorides/Bromides", reagents: "AgF, Hg2F2, CoF2, SbF3", conditions: "Heat", product: "Alkyl Fluoride", type: "Halogen Exchange", mechanism: "Driven by lattice energy of AgCl.", exceptions: "Direct F2 fluorination explosive.", examNotes: "Best route for alkyl fluorides." },
  { id: "rxn_williamson", name: "Williamson Ether Synthesis", class: 12, equation: "R\\text{-}X (1^\\circ) + R'\\text{-}O^-\\text{Na}^+ \\to R\\text{-}O\\text{-}R' + \\text{NaX}", reactants: "1° Alkyl Halide + Alkoxide", reagents: "NaOR'", conditions: "Heat", product: "Ether", type: "S_N2 Substitution", mechanism: "Alkoxide attacks 1° alkyl halide.", exceptions: "3° alkyl halide yields alkene (E2).", examNotes: "Use 1° alkyl halide for 3° ether." },
  { id: "rxn_kolbe", name: "Kolbe's Reaction", class: 12, equation: "\\text{C}_6\\text{H}_5\\text{ONa} + \\text{CO}_2 \\xrightarrow{400\\text{K, 4-7atm}} \\text{Salicylic Acid}", reactants: "Sodium Phenoxide", reagents: "CO2, NaOH, H+", conditions: "High pressure CO2", product: "Salicylic Acid", type: "Electrophilic Substitution", mechanism: "Phenoxide activates ring.", exceptions: "High temp (>140°C) yields para-isomer.", examNotes: "Precursor for Aspirin." },
  { id: "rxn_reimer_tiemann", name: "Reimer-Tiemann Reaction", class: 12, equation: "\\text{C}_6\\text{H}_5\\text{OH} + \\text{CHCl}_3 + \\text{NaOH} \\to \\text{Salicylaldehyde}", reactants: "Phenol", reagents: "CHCl3 + aq. NaOH", conditions: "60-70°C", product: "Salicylaldehyde", type: "Carbene Addition", mechanism: "Dichlorocarbene (:CCl2) electrophile.", exceptions: "CCl4 yields salicylic acid.", examNotes: "Ortho product predominates via H-bonding." },
  { id: "rxn_aldol", name: "Aldol Condensation", class: 12, equation: "2 CH_3CHO \\xrightarrow{\\text{dil. NaOH}} \\text{Aldol} \\xrightarrow{\\Delta} \\text{Crotonaldehyde}", reactants: "Aldehydes with alpha-H", reagents: "dil. NaOH", conditions: "Warm", product: "alpha,beta-unsaturated aldehyde", type: "Nucleophilic Addition", mechanism: "Enolate ion attacks second carbonyl.", exceptions: "Formaldehyde lacks alpha-H.", examNotes: "Requires alpha-hydrogen." },
  { id: "rxn_cannizzaro", name: "Cannizzaro Reaction", class: 12, equation: "2 HCHO + \\text{conc. NaOH} \\to CH_3OH + HCOONa", reactants: "Aldehydes without alpha-H", reagents: "conc. NaOH (50%)", conditions: "Heat", product: "Alcohol + Carboxylate salt", type: "Disproportionation Redox", mechanism: "Hydride transfer between aldehydes.", exceptions: "Alpha-H aldehydes do Aldol.", examNotes: "Formaldehyde in crossed Cannizzaro is oxidized." },
  { id: "rxn_clemmensen", name: "Clemmensen Reduction", class: 12, equation: ">C=O \\xrightarrow{\\text{Zn(Hg)} / \\text{conc. HCl}} >CH_2", reactants: "Aldehydes or Ketones", reagents: "Zn(Hg) / conc. HCl", conditions: "Acidic reflux", product: "Alkane", type: "Acidic Deoxygenation", mechanism: "Electron transfer from zinc amalgam.", exceptions: "Fails for acid-sensitive groups.", examNotes: "Converts acetophenone to ethylbenzene." },
  { id: "rxn_wolff_kishner", name: "Wolff-Kishner Reduction", class: 12, equation: ">C=O \\xrightarrow{\\text{NH}_2\\text{NH}_2 / \\text{KOH, glycol}} >CH_2 + N_2\\uparrow", reactants: "Aldehydes or Ketones", reagents: "NH2NH2 / KOH / glycol", conditions: "High temp (180-200°C)", product: "Alkane", type: "Basic Deoxygenation", mechanism: "Hydrazone elimination of N2.", exceptions: "Fails for base-sensitive groups.", examNotes: "Complementary to Clemmensen." },
  { id: "rxn_haloform", name: "Iodoform Reaction", class: 12, equation: "R\\text{-}COCH_3 + 3 I_2 + 4 NaOH \\to R\\text{-}COONa + CHI_3\\downarrow \\text{ (Yellow)}", reactants: "Methyl Ketones / Ethanol", reagents: "I2 + NaOH (NaOI)", conditions: "Warm alkaline", product: "Yellow CHI3 ppt", type: "Halogenation Cleavage", mechanism: "Exhaustive alpha-halogenation.", exceptions: "Methanol fails test.", examNotes: "Identifies CH3CO- or CH3CH(OH)- group." },
  { id: "rxn_hvz", name: "Hell-Volhard-Zelinsky (HVZ)", class: 12, equation: "R\\text{-}CH_2\\text{-}COOH + X_2 \\xrightarrow{\\text{Red P}} R\\text{-}CH(X)\\text{-}COOH", reactants: "Carboxylic acids with alpha-H", reagents: "X2 / Red P", conditions: "Catalytic P", product: "Alpha-halo carboxylic acid", type: "Alpha-Halogenation", mechanism: "Acyl halide enolization.", exceptions: "Formic and benzoic acid fail.", examNotes: "Prepares alpha-bromoacids for amino acids." },
  { id: "rxn_gabriel", name: "Gabriel Phthalimide Synthesis", class: 12, equation: "\\text{Phthalimide} \\xrightarrow{\\text{KOH, R-X, NaOH}} R\\text{-}NH_2 (1^\\circ)", reactants: "Phthalimide + 1° Alkyl Halide", reagents: "KOH, R-X, NaOH", conditions: "Heat", product: "Pure 1° Aliphatic Amine", type: "S_N2 Substitution", mechanism: "Phthalimide anion attacks 1° R-X.", exceptions: "Aryl halides fail (no S_N2).", examNotes: "Pure 1° aliphatic amines only." },
  { id: "rxn_hofmann_bromamide", name: "Hofmann Bromamide Degradation", class: 12, equation: "R\\text{-}CONH_2 + Br_2 + 4 NaOH \\to R\\text{-}NH_2 + Na_2CO_3 + 2 NaBr", reactants: "1° Amide", reagents: "Br2 + 4 NaOH", conditions: "Warm alkaline", product: "1° Amine (1 less C)", type: "Rearrangement", mechanism: "Isocyanate intermediate.", exceptions: "2° and 3° amides fail.", examNotes: "Decreases chain length by 1 C." },
  { id: "rxn_carbylamine", name: "Carbylamine Reaction", class: 12, equation: "R\\text{-}NH_2 + CHCl_3 + 3 \\text{alc. KOH} \\to R\\text{-}NC \\text{ (Foul odor)}", reactants: "1° Aliphatic or Aromatic Amine", reagents: "CHCl3 + alc. KOH", conditions: "Gentle warm", product: "Isocyanide (foul smell)", type: "Electrophilic Addition", mechanism: "Dichlorocarbene attacks 1° amine.", exceptions: "2° and 3° amines fail.", examNotes: "Specific test for 1° amines." },
  { id: "rxn_sandmeyer", name: "Sandmeyer Reaction", class: 12, equation: "Ar\\text{-}N_2^+ Cl^- \\xrightarrow{\\text{Cu}_2\\text{Cl}_2 / \\text{HCl}} Ar\\text{-}Cl + N_2\\uparrow", reactants: "Diazonium Salt", reagents: "Cu2Cl2/HCl or Cu2Br2/HBr or CuCN", conditions: "0-50°C", product: "Aryl Halide / Nitrile", type: "Radical Substitution", mechanism: "Cu(I) single electron transfer.", exceptions: "Ar-I does not need Cu catalyst.", examNotes: "Higher yield than Gattermann." },
  { id: "rxn_azo_coupling", name: "Azo Coupling Reaction", class: 12, equation: "C_6H_5N_2^+ Cl^- + C_6H_5OH \\to p\\text{-}\\text{HO-C}_6\\text{H}_4\\text{-N=N-C}_6\\text{H}_5 \\text{ (Orange Dye)}", reactants: "Diazonium Salt + Phenol/Aniline", reagents: "pH 9-10 (Phenol) / pH 4-5 (Aniline)", conditions: "0-5°C ice-cold", product: "Azo Dye (Orange/Yellow)", type: "Electrophilic Substitution", mechanism: "Diazonium cation attacks para position.", exceptions: "If para occupied, couples at ortho.", examNotes: "Dye test for aromatic 1° amines." },
  { id: "rxn_etard", name: "Etard Reaction", class: 12, equation: "C_6H_5CH_3 + 2 CrO_2Cl_2 \\xrightarrow{\\text{CS}_2, H_3O^+} C_6H_5CHO", reactants: "Toluene", reagents: "CrO2Cl2 in CS2, H3O+", conditions: "Controlled oxidation", product: "Benzaldehyde", type: "Side-chain Oxidation", mechanism: "Chromium complex intermediate.", exceptions: "Stops at aldehyde stage.", examNotes: "Converts toluene to benzaldehyde." },
  { id: "rxn_stephen", name: "Stephen Reaction", class: 12, equation: "R\\text{-}CN + SnCl_2 + HCl \\xrightarrow{\\text{Ether, } H_3O^+} R\\text{-}CHO", reactants: "Nitriles", reagents: "SnCl2 + HCl, H3O+", conditions: "Ether, then boiling H2O", product: "Aldehyde", type: "Nitrile Reduction", mechanism: "Aldimine hydrochloride intermediate.", exceptions: "Does not reduce double bonds.", examNotes: "Direct aldehyde from nitrile." },
  { id: "rxn_rosenmund", name: "Rosenmund Reduction", class: 12, equation: "R\\text{-}COCl + H_2 \\xrightarrow{\\text{Pd-BaSO}_4 / \\text{Sulfur}} R\\text{-}CHO", reactants: "Acyl Chloride", reagents: "H2 / Pd-BaSO4 / sulfur", conditions: "Boiling xylene", product: "Aldehyde", type: "Selective Hydrogenation", mechanism: "Poisoned Pd catalyst stops at aldehyde.", exceptions: "Formaldehyde cannot be prepared.", examNotes: "Stops reduction at aldehyde." }
];

export const CHEMISTRY_STRUCTURES = [
  { name: "Methane", formula: "\\text{CH}_4", shape: "Tetrahedral", hybridization: "sp^3", bondAngle: "109.5^\\circ", lonePairs: 0, centralAtomOxidation: "-4", properties: "Non-polar molecule, regular tetrahedral symmetry." },
  { name: "Ammonia", formula: "\\text{NH}_3", shape: "Trigonal Pyramidal", hybridization: "sp^3", bondAngle: "107^\\circ", lonePairs: 1, centralAtomOxidation: "-3", properties: "Lewis base due to 1 lone pair on N." },
  { name: "Water", formula: "\\text{H}_2\\text{O}", shape: "Bent / V-shaped", hybridization: "sp^3", bondAngle: "104.5^\\circ", lonePairs: 2, centralAtomOxidation: "-2", properties: "Highly polar, hydrogen bonding." },
  { name: "Boron Trifluoride", formula: "\\text{BF}_3", shape: "Trigonal Planar", hybridization: "sp^2", bondAngle: "120^\\circ", lonePairs: 0, centralAtomOxidation: "+3", properties: "Incomplete octet (6 valence e-); strong Lewis acid." },
  { name: "Phosphorus Pentachloride", formula: "\\text{PCl}_5", shape: "Trigonal Bipyramidal", hybridization: "sp^3d", bondAngle: "90^\\circ \\text{ and } 120^\\circ", lonePairs: 0, centralAtomOxidation: "+5", properties: "2 axial bonds are longer/weaker than 3 equatorial bonds." },
  { name: "Sulfur Hexafluoride", formula: "\\text{SF}_6", shape: "Octahedral", hybridization: "sp^3d^2", bondAngle: "90^\\circ", lonePairs: 0, centralAtomOxidation: "+6", properties: "Extremely inert hypervalent molecule." },
  { name: "Xenon Difluoride", formula: "\\text{XeF}_2", shape: "Linear", hybridization: "sp^3d", bondAngle: "180^\\circ", lonePairs: 3, centralAtomOxidation: "+2", properties: "3 lone pairs occupy equatorial positions at 120°." },
  { name: "Xenon Tetrafluoride", formula: "\\text{XeF}_4", shape: "Square Planar", hybridization: "sp^3d^2", bondAngle: "90^\\circ", lonePairs: 2, centralAtomOxidation: "+4", properties: "2 lone pairs occupy trans axial positions." },
  { name: "Xenon Hexafluoride", formula: "\\text{XeF}_6", shape: "Distorted Octahedral", hybridization: "sp^3d^3", bondAngle: "< 90^\\circ", lonePairs: 1, centralAtomOxidation: "+6", properties: "Stereochemically active lone pair distorts octahedral geometry." },
  { name: "Benzene", formula: "\\text{C}_6\\text{H}_6", shape: "Planar Hexagonal Ring", hybridization: "sp^2", bondAngle: "120^\\circ", lonePairs: 0, centralAtomOxidation: "-1", properties: "Aromatic, 6 delocalized \\pi electrons obeying Hückel (4n+2) rule. Resonance energy = 150.6 kJ/mol." },
  { name: "Ethene (Ethylene)", formula: "\\text{C}_2\\text{H}_4", shape: "Planar", hybridization: "sp^2", bondAngle: "121.3^\\circ", lonePairs: 0, centralAtomOxidation: "-2", properties: "Contains 1 \\sigma bond and 1 \\pi bond between carbons. Undergoes electrophilic addition." },
  { name: "Ethyne (Acetylene)", formula: "\\text{C}_2\\text{H}_2", shape: "Linear", hybridization: "sp", bondAngle: "180^\\circ", lonePairs: 0, centralAtomOxidation: "-1", properties: "Contains 1 \\sigma bond and 2 \\pi bonds. Acidic hydrogens react with Na and NaNH2." },
  { name: "Phenol", formula: "\\text{C}_6\\text{H}_5\\text{OH}", shape: "Planar Aromatic Ring", hybridization: "sp^2 \\text{ (Ring C)}", bondAngle: "120^\\circ", lonePairs: 2, centralAtomOxidation: "-1", properties: "Weakly acidic due to resonance stabilization of phenoxide ion. Gives violet color with neutral FeCl3." },
  { name: "Aniline", formula: "\\text{C}_6\\text{H}_5\\text{NH}_2", shape: "Planar Aromatic Ring", hybridization: "sp^2 \\text{ (Ring C)}", bondAngle: "120^\\circ", lonePairs: 1, centralAtomOxidation: "-1", properties: "Weak base; lone pair delocalized into benzene ring. Undergoes diazotization with NaNO2 + HCl at 0-5°C." },
  { name: "Benzoic Acid", formula: "\\text{C}_6\\text{H}_5\\text{COOH}", shape: "Planar Aromatic Ring", hybridization: "sp^2", bondAngle: "120^\\circ", lonePairs: 4, centralAtomOxidation: "+3 \\text{ (Carbonyl C)}", properties: "Aromatic carboxylic acid. Symmetrical dimer in non-polar solvents via hydrogen bonding." },
  { name: "Toluene (Methylbenzene)", formula: "\\text{C}_6\\text{H}_5\\text{CH}_3", shape: "Planar Ring + Tetrahedral CH3", hybridization: "sp^2 \\text{ (Ring)}, sp^3 \\text{ (Methyl)}", bondAngle: "120^\\circ / 109.5^\\circ", lonePairs: 0, centralAtomOxidation: "-3 \\text{ (Methyl C)}", properties: "Activating ortho/para-director. Oxidized to benzoic acid by alkaline KMnO4." },
  { name: "Chlorobenzene", formula: "\\text{C}_6\\text{H}_5\\text{Cl}", shape: "Planar Aromatic Ring", hybridization: "sp^2", bondAngle: "120^\\circ", lonePairs: 3, centralAtomOxidation: "0", properties: "Deactivating but ortho/para directing due to +M resonance and -I inductive effect." },
  { name: "D-Glucose (Pyranose Ring)", formula: "\\text{C}_6\\text{H}_{12}\\text{O}_6", shape: "Haworth Chair / Pyranose Ring", hybridization: "sp^3", bondAngle: "109.5^\\circ", lonePairs: 12, centralAtomOxidation: "0", properties: "Aldohexose; reduces Tollens' and Fehling's reagents. Exists as \\alpha and \\beta anomers." },
  { name: "Aspirin (Acetylsalicylic Acid)", formula: "\\text{C}_9\\text{H}_8\\text{O}_4", shape: "Substituted Aromatic Ring", hybridization: "sp^2 / sp^3", bondAngle: "120^\\circ / 109.5^\\circ", lonePairs: 8, centralAtomOxidation: "+3", properties: "Non-narcotic analgesic, antipyretic, anti-inflammatory & anti-blood-clotting agent." }
];

export const ORGANIC_QUALITATIVE_TESTS = [
  { id: "qual_1", testName: "Bromine Water Test", target: "Unsaturation (Alkenes/Alkynes)", reagent: "\\text{Br}_2 / \\text{CCl}_4", observation: "Decolorization of reddish-brown bromine.", inference: "Presence of C=C or C=C bond.", equation: "R-\\text{CH}=\\text{CH}-R' + \\text{Br}_2 \\rightarrow R-\\text{CH(Br)}-\\text{CH(Br)}-R'" },
  { id: "qual_2", testName: "Baeyer's Test", target: "Unsaturation (Alkenes/Alkynes)", reagent: "Cold dilute alkaline \\text{KMnO}_4 (1\%)", observation: "Decolorization of purple KMnO4 with brown MnO2 ppt.", inference: "Presence of unsaturation (syn-1,2-diol).", equation: "R-\\text{CH}=\\text{CH}-R' + [O] + H_2O \\rightarrow R-\\text{CH(OH)}-\\text{CH(OH)}-R'" },
  { id: "qual_3", testName: "Ceric Ammonium Nitrate Test", target: "Alcoholic Group (-OH)", reagent: "(\\text{NH}_4)_2\\text{Ce(NO}_3)_6", observation: "Red or pink color solution.", inference: "Presence of alcoholic hydroxyl group.", equation: "R-\\text{OH} + (\\text{NH}_4)_2\\text{Ce(NO}_3)_6 \\rightarrow \\text{Red alkoxy complex}" },
  { id: "qual_4", testName: "Neutral Ferric Chloride Test", target: "Phenolic Group (Ar-OH)", reagent: "Fresh neutral \\text{FeCl}_3 solution", observation: "Violet, blue, or green coloration.", inference: "Presence of phenolic group.", equation: "3 C_6H_5OH + FeCl_3 \\rightarrow [Fe(OC_6H_5)_3] \\text{ (Violet complex)} + 3 HCl" },
  { id: "qual_5", testName: "2,4-DNP Test (Brady's Test)", target: "Carbonyl Group (C=O)", reagent: "2,4-Dinitrophenylhydrazine", observation: "Yellow, orange, or red crystalline ppt.", inference: "Presence of aldehyde or ketone carbonyl.", equation: "R_2C=O + H_2N-NH-C_6H_3(NO_2)_2 \\rightarrow R_2C=N-NH-C_6H_3(NO_2)_2 + H_2O" },
  { id: "qual_6", testName: "Tollens' Silver Mirror Test", target: "Aldehydes (-CHO)", reagent: "[\\text{Ag(NH}_3)_2]^+\\text{OH}^-", observation: "Shiny silver mirror on test-tube wall.", inference: "Presence of aldehyde group.", equation: "R-\\text{CHO} + 2[Ag(NH_3)_2]^+ + 3OH^- \\rightarrow R-\\text{COO}^- + 2Ag\\downarrow + 4NH_3 + 2H_2O" },
  { id: "qual_7", testName: "Fehling's Test", target: "Aliphatic Aldehydes", reagent: "\\text{Fehling A + Fehling B}", observation: "Reddish-brown precipitate of Cu2O.", inference: "Presence of aliphatic aldehyde.", equation: "R-\\text{CHO} + 2Cu^{2+} + 5OH^- \\rightarrow R-\\text{COO}^- + Cu_2O\\downarrow + 3H_2O" },
  { id: "qual_8", testName: "Iodoform Test", target: "Methyl Ketones / Ethanol", reagent: "\\text{I}_2 + \\text{NaOH (NaOI)}", observation: "Yellow crystalline ppt of CHI3 with antiseptic odor.", inference: "Presence of CH3CO- or CH3CH(OH)- group.", equation: "CH_3COR + 3I_2 + 4NaOH \\rightarrow CHI_3\\downarrow + RCOONa + 3NaI + 3H_2O" },
  { id: "qual_9", testName: "Sodium Bicarbonate Test", target: "Carboxylic Acid (-COOH)", reagent: "Saturated aq. \\text{NaHCO}_3 solution", observation: "Brisk effervescence of CO2 gas.", inference: "Presence of carboxylic acid group.", equation: "R-\\text{COOH} + NaHCO_3 \\rightarrow R-\\text{COONa} + H_2O + CO_2\\uparrow" },
  { id: "qual_10", testName: "Carbylamine Test", target: "Primary Amine (-NH2)", reagent: "\\text{CHCl}_3 + \\text{alcoholic KOH}", observation: "Extremely offensive, foul odor of carbylamine.", inference: "Presence of 1° aliphatic or aromatic amine.", equation: "R-\\text{NH}_2 + CHCl_3 + 3KOH \\rightarrow R-\\text{NC} + 3KCl + 3H_2O" }
];

export const FLAME_COLORS = [
  { element: "Lithium (Li)", ion: "Li+", color: "Crimson Red", wavelength: "670.8 nm", note: "Characteristic alkali metal flame test." },
  { element: "Sodium (Na)", ion: "Na+", color: "Golden Yellow", wavelength: "589.0 nm", note: "Intense D-lines emission." },
  { element: "Potassium (K)", ion: "K+", color: "Violet / Lilac", wavelength: "766.5 nm", note: "Viewed through cobalt blue glass." },
  { element: "Rubidium (Rb)", ion: "Rb+", color: "Reddish Violet", wavelength: "780.0 nm", note: "Alkali metal." },
  { element: "Cesium (Cs)", ion: "Cs+", color: "Sky Blue", wavelength: "455.5 nm", note: "Alkali metal." },
  { element: "Calcium (Ca)", ion: "Ca2+", color: "Brick Red", wavelength: "622.0 nm", note: "Alkaline earth metal." },
  { element: "Strontium (Sr)", ion: "Sr2+", color: "Crimson Red", wavelength: "680.0 nm", note: "Alkaline earth metal." },
  { element: "Barium (Ba)", ion: "Ba2+", color: "Apple Green", wavelength: "553.5 nm", note: "Alkaline earth metal." },
  { element: "Copper (Cu)", ion: "Cu2+", color: "Blue-Green / Emerald Green", wavelength: "510.0 nm", note: "Beilstein test for halides." }
];

export const PRECIPITATE_COLORS = [
  { compound: "Silver Chloride (AgCl)", color: "Curdy White", condition: "Soluble in dil. NH4OH, insoluble in HNO3." },
  { compound: "Silver Bromide (AgBr)", color: "Pale Yellow", condition: "Sparingly soluble in conc. NH4OH." },
  { compound: "Silver Iodide (AgI)", color: "Bright Yellow", condition: "Insoluble in NH4OH." },
  { compound: "Barium Sulfate (BaSO4)", color: "White", condition: "Insoluble in dil. HCl or HNO3." },
  { compound: "Lead Iodide (PbI2)", color: "Golden Yellow (Golden Spangles)", condition: "Soluble in hot water, crystallizes on cooling." },
  { compound: "Copper(II) Sulfide (CuS)", color: "Black", condition: "Insoluble in yellow ammonium sulfide." },
  { compound: "Cadmium Sulfide (CdS)", color: "Yellow", condition: "Insoluble in KCN solution." },
  { compound: "Zinc Sulfide (ZnS)", color: "White / Off-White", condition: "Soluble in dil. HCl." },
  { compound: "Ferric Hydroxide Fe(OH)3", color: "Reddish-Brown", condition: "Precipitated by NH4OH in presence of NH4Cl." },
  { compound: "Ferrous Hydroxide Fe(OH)2", color: "Dirty Green", condition: "Turns brown in air due to oxidation to Fe(OH)3." },
  { compound: "Nickel Dimethylglyoximate", color: "Rosy Red / Scarlet Red", condition: "Specific test for Ni2+ using DMG in ammoniacal medium." }
];

export const TRANSITION_ION_COLORS = [
  { ion: "Ti^3+", electronConfig: "3d^1", color: "Purple / Violet", note: "d-d transition." },
  { ion: "V^3+", electronConfig: "3d^2", color: "Green", note: "d-d transition." },
  { ion: "Cr^3+", electronConfig: "3d^3", color: "Violet / Dark Green", note: "Stable octahedral complex." },
  { ion: "Mn^2+", electronConfig: "3d^5", color: "Pale Pink", note: "High spin d5 spin-forbidden transition." },
  { ion: "Mn^7+ (MnO4^-)", electronConfig: "3d^0", color: "Deep Purple", note: "Charge transfer transition (L → M)." },
  { ion: "Fe^2+", electronConfig: "3d^6", color: "Pale Green", note: "Hydrated ion." },
  { ion: "Fe^3+", electronConfig: "3d^5", color: "Yellowish Brown", note: "Hydrolysis forms brown hydroxo complexes." },
  { ion: "Co^2+", electronConfig: "3d^7", color: "Pink (Hydrated) / Blue (Anhydrous)", note: "Octahedral pink, tetrahedral blue." },
  { ion: "Ni^2+", electronConfig: "3d^8", color: "Green", note: "Hydrated ion [Ni(H2O)6]2+." },
  { ion: "Cu^2+", electronConfig: "3d^9", color: "Blue", note: "Hydrated ion [Cu(H2O)6]2+." },
  { ion: "Zn^2+, Sc^3+, Ti^4+", electronConfig: "3d^0 \\text{ or } 3d^{10}", color: "Colorless", note: "No d-d transition possible." }
];

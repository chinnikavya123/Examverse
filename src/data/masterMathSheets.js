export const MASTER_MATH_SHEETS = [
  {
    id: "ms_trig",
    title: "Trigonometry Master Formula Sheet",
    category: "Trigonometry",
    summary: "Exhaustive compilation of trigonometric identities, compound/double/triple angles, ASTC rule, and exact values.",
    keyFormulas: [
      { name: "Pythagorean Identities", formula: "\\sin^2 x + \\cos^2 x = 1, \\quad 1 + \\tan^2 x = \\sec^2 x, \\quad 1 + \\cot^2 x = \\csc^2 x" },
      { name: "Compound Angle Addition", formula: "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B" },
      { name: "Compound Angle Cosine", formula: "\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B" },
      { name: "Tangent Compound", formula: "\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}" },
      { name: "Double Angle Sine & Cosine", formula: "\\sin 2A = 2\\sin A\\cos A, \\quad \\cos 2A = 1 - 2\\sin^2 A = 2\\cos^2 A - 1" },
      { name: "Half Angle Relations", formula: "\\sin^2\\frac{A}{2} = \\frac{1-\\cos A}{2}, \\quad \\cos^2\\frac{A}{2} = \\frac{1+\\cos A}{2}" }
    ],
    shortcut: "⚡ ASTC Rule: Q-I (All positive), Q-II (Sin positive), Q-III (Tan positive), Q-IV (Cos positive)."
  },
  {
    id: "ms_calculus",
    title: "Calculus Master Sheet (Limits, Derivatives & Integrals)",
    category: "Calculus",
    summary: "Complete reference for differentiation rules, integration techniques, standard forms, and limit laws.",
    keyFormulas: [
      { name: "Standard Limit 1", formula: "\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x\\to 0} \\frac{\\tan x}{x} = 1" },
      { name: "Standard Limit 2", formula: "\\lim_{x\\to 0} \\frac{1-\\cos x}{x^2} = \\frac{1}{2}, \\quad \\lim_{x\\to 0} \\frac{e^x-1}{x} = 1" },
      { name: "Power Rule & Chain Rule", formula: "\\frac{d}{dx}(x^n) = n x^{n-1}, \\quad \\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)" },
      { name: "Product & Quotient Rules", formula: "(uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}" },
      { name: "Integration by Parts", formula: "\\int u v dx = u \\int v dx - \\int (u' \\int v dx) dx" },
      { name: "Standard Integrals", formula: "\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a}, \\quad \\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\sin^{-1}\\frac{x}{a}" }
    ],
    shortcut: "⚡ King's Property: $\\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx$. Symmetry simplifies complex integrals!"
  },
  {
    id: "ms_coord_conics",
    title: "Coordinate Geometry & Conic Sections Sheet",
    category: "Coordinate Geometry",
    summary: "Formulas for Straight Lines, Circles, Parabolas, Ellipses, and Hyperbolas.",
    keyFormulas: [
      { name: "Distance & Section", formula: "d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}, \\quad P = \\left(\\frac{mx_2+nx_1}{m+n}, \\frac{my_2+ny_1}{m+n}\\right)" },
      { name: "Line Forms", formula: "y - y_1 = m(x-x_1), \\quad y = mx+c, \\quad \\frac{x}{a}+\\frac{y}{b} = 1" },
      { name: "Perpendicular Distance", formula: "d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2+B^2}}" },
      { name: "Circle General Equation", formula: "x^2+y^2+2gx+2fy+c=0 \\implies \\text{Center } (-g,-f), \\; r = \\sqrt{g^2+f^2-c}" },
      { name: "Parabola Standard", formula: "y^2 = 4ax \\implies \\text{Focus } (a,0), \\; \\text{Directrix } x = -a, \\; \\text{Latus Rectum } 4a" },
      { name: "Ellipse & Hyperbola", formula: "\\text{Ellipse}: \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1, \\quad \\text{Hyperbola}: \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1" }
    ],
    shortcut: "⚡ Parallel lines have equal slopes ($m_1=m_2$), perpendicular lines have $m_1 m_2 = -1$."
  },
  {
    id: "ms_vectors_3d_matrices",
    title: "Vectors, 3D Geometry & Matrices Master Sheet",
    category: "3D Geometry & Vectors",
    summary: "Dot/cross products, 3D lines & planes, matrix inverse, determinants, and linear systems.",
    keyFormulas: [
      { name: "Dot & Cross Product", formula: "\\vec{a}\\cdot\\vec{b} = |a||b|\\cos\\theta, \\quad |\\vec{a}\\times\\vec{b}| = |a||b|\\sin\\theta" },
      { name: "Scalar Triple Product", formula: "[\\vec{a}\\vec{b}\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) \\quad (\\text{Coplanar if } = 0)" },
      { name: "3D Line Equation", formula: "\\vec{r} = \\vec{a} + \\lambda \\vec{b} \\iff \\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}" },
      { name: "Shortest Distance (Skew)", formula: "d = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|" },
      { name: "Matrix Inverse Formula", formula: "A^{-1} = \\frac{\\text{adj}(A)}{|A|} \\quad (|A| \\neq 0)" },
      { name: "2x2 Inverse Shortcut", formula: "\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}" }
    ],
    shortcut: "⚡ Vector projection of $\\vec{a}$ onto $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|b|}$."
  },
  {
    id: "ms_algebra_shortcuts",
    title: "Algebra, P&C, Binomial & Probability Master Sheet",
    category: "Algebra",
    summary: "Permutations, combinations, binomial general terms, AP/GP, Bayes theorem, and entrance shortcuts.",
    keyFormulas: [
      { name: "P&C Formulas", formula: "^nP_r = \\frac{n!}{(n-r)!}, \\quad ^nC_r = \\frac{n!}{r!(n-r)!}, \\quad ^nP_r = {}^nC_r \\cdot r!" },
      { name: "Binomial General Term", formula: "T_{r+1} = {}^nC_r a^{n-r} b^r \\implies \\text{Sum of coeffs} = (1+1)^n = 2^n" },
      { name: "AP & GP Formulas", formula: "\\text{AP}: a_n = a+(n-1)d, \\; S_n = \\frac{n}{2}[2a+(n-1)d] \\quad | \\quad \\text{Infinite GP}: S_\\infty = \\frac{a}{1-r}" },
      { name: "Quadratic Vertex", formula: "ax^2+bx+c = 0 \\implies \\text{Vertex at } x = -\\frac{b}{2a}" },
      { name: "Bayes Theorem", formula: "P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum P(A_j)P(B|A_j)}" },
      { name: "Binomial Distribution", formula: "P(X=k) = {}^nC_k p^k q^{n-k}, \\quad \\text{Mean} = np, \\quad \\text{Var} = npq" }
    ],
    shortcut: "⚡ Complement Rule: $P(E) = 1 - P(E')$. Always check complement when counting 'at least one'."
  }
];

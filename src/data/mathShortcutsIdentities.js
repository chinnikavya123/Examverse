export const MATH_PYTHAGOREAN_TRIPLES = [
  { triple: "3, 4, 5", multiples: "6-8-10, 9-12-15, 12-16-20, 15-20-25" },
  { triple: "5, 12, 13", multiples: "10-24-26, 15-36-39, 20-48-52" },
  { triple: "7, 24, 25", multiples: "14-48-50, 21-72-75" },
  { triple: "8, 15, 17", multiples: "16-30-34, 24-45-51" },
  { triple: "9, 40, 41", multiples: "18-80-82" },
  { triple: "12, 35, 37", multiples: "24-70-74" }
];

export const MATH_ALGEBRAIC_IDENTITIES = [
  { name: "Square Addition", formula: "(a+b)^2 = a^2 + 2ab + b^2" },
  { name: "Square Subtraction", formula: "(a-b)^2 = a^2 - 2ab + b^2" },
  { name: "Difference of Squares", formula: "a^2 - b^2 = (a-b)(a+b)" },
  { name: "Cube Addition", formula: "(a+b)^3 = a^3 + b^3 + 3ab(a+b)" },
  { name: "Cube Subtraction", formula: "(a-b)^3 = a^3 - b^3 - 3ab(a-b)" },
  { name: "Sum of Cubes", formula: "a^3 + b^3 = (a+b)(a^2 - ab + b^2)" },
  { name: "Difference of Cubes", formula: "a^3 - b^3 = (a-b)(a^2 + ab + b^2)" }
];

export const MATH_LOG_EXP_PROPERTIES = [
  { name: "Log Product Rule", relation: "\\log(ab) = \\log a + \\log b", note: "Converts multiplication inside log to addition." },
  { name: "Log Quotient Rule", relation: "\\log\\left(\\frac{a}{b}\\right) = \\log a - \\log b", note: "Converts division inside log to subtraction." },
  { name: "Log Power Rule", relation: "\\log(a^n) = n \\log a", note: "Exponent moves to front coefficient." },
  { name: "Base Change Formula", relation: "\\log_a b = \\frac{\\log b}{\\log a}", note: "Essential for converting logarithm bases in calculus." },
  { name: "Exponent Addition", relation: "a^m a^n = a^{m+n}", note: "Same base powers add up." },
  { name: "Exponent Subtraction", relation: "\\frac{a^m}{a^n} = a^{m-n}", note: "Same base division subtracts powers." },
  { name: "Power of Power", relation: "(a^m)^n = a^{mn}", note: "Powers multiply." }
];

export const MATH_ENTRANCE_SHORTCUTS = [
  {
    title: "Shortcut 1 — Complement Rule",
    concept: "Instead of counting a complicated event directly, calculate the opposite:",
    formula: "P(E) = 1 - P(E')",
    example: "For 'at least one head in 10 tosses': P = 1 - P(no heads) = 1 - (1/2)^10."
  },
  {
    title: "Shortcut 2 — Combination Symmetry",
    concept: "Use combination symmetry to work with smaller numbers:",
    formula: "^nC_r = {}^nC_{n-r}",
    example: "Compute ¹⁰⁰C₉₇ as ¹⁰⁰C₃ = (100 × 99 × 98)/6 = 161,700."
  },
  {
    title: "Shortcut 3 — Mental Quadratic Roots",
    concept: "For x² - 5x + 6 = 0, find two numbers with sum 5 and product 6 → (2 and 3).",
    formula: "x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0 \\implies x = \\alpha, \\beta",
    example: "Avoid quadratic formula when simple integer factoring works."
  },
  {
    title: "Shortcut 4 — Maximum/Minimum of Quadratic",
    concept: "For ax² + bx + c = 0, turning vertex occurs at:",
    formula: "x = -\\frac{b}{2a} \\quad \\implies \\quad y_{\\text{extrema}} = \\frac{4ac-b^2}{4a}",
    example: "Gives instant min value if a > 0 or max value if a < 0."
  },
  {
    title: "Shortcut 5 — AP and GP Variables",
    concept: "When 3 numbers are in AP, choose them as (a-d, a, a+d). When in GP, choose (a/r, a, ar).",
    formula: "\\text{AP}: (a-d, a, a+d) \\quad | \\quad \\text{GP}: \\left(\\frac{a}{r}, a, ar\\right)",
    example: "Sum of AP terms = 3a (cancels d instantly!). Product of GP terms = a³ (cancels r instantly!)."
  },
  {
    title: "Shortcut 6 — Geometry Reasoning",
    concept: "Before jumping into heavy algebra, check: Symmetry, Similar Triangles, Pythagorean Triples, Midpoint, and Circle Properties.",
    formula: "\\text{Symmetry} \\; \\land \\; \\text{Triples} \\implies \\text{Instant Solution}",
    example: "Saves 5+ minutes per problem in entrance exams."
  }
];

export const MASTER_MATH_GRAPHS = [
  // Algebra & Polynomials
  {
    id: "graph_y_x",
    title: "Linear Function: y = x",
    category: "Algebra",
    equation: "y = x",
    description: "Straight line passing through origin (0,0) at 45° angle (slope m = 1). Odd function, symmetric about origin.",
    keyFeature: "Slope = 1, Domain = (-∞, ∞), Range = (-∞, ∞)"
  },
  {
    id: "graph_y_x2",
    title: "Quadratic Parabola: y = x²",
    category: "Algebra",
    equation: "y = x^2",
    description: "Upward opening parabola with vertex at (0,0). Even function, symmetric about y-axis.",
    keyFeature: "Vertex at (0,0), Domain = (-∞, ∞), Range = [0, ∞)"
  },
  {
    id: "graph_y_x3",
    title: "Cubic Function: y = x³",
    category: "Algebra",
    equation: "y = x^3",
    description: "S-shaped curve passing through origin. Point of inflection at (0,0). Odd function.",
    keyFeature: "Point of inflection at (0,0), Domain = (-∞, ∞), Range = (-∞, ∞)"
  },
  {
    id: "graph_y_abs_x",
    title: "Absolute Value (Modulus): y = |x|",
    category: "Algebra",
    equation: "y = |x|",
    description: "V-shaped graph with corner at (0,0). Continuous everywhere, non-differentiable at x = 0.",
    keyFeature: "Corner at (0,0), Domain = (-∞, ∞), Range = [0, ∞)"
  },
  {
    id: "graph_y_inv_x",
    title: "Reciprocal Hyperbola: y = 1/x",
    category: "Algebra",
    equation: "y = \\frac{1}{x}",
    description: "Rectangular hyperbola in Q-I and Q-III. Vertical asymptote x = 0, horizontal asymptote y = 0.",
    keyFeature: "Asymptotes x = 0 & y = 0, Domain = ℝ \\ {0}, Range = ℝ \\ {0}"
  },
  {
    id: "graph_y_sqrt_x",
    title: "Square Root Function: y = √x",
    category: "Algebra",
    equation: "y = \\sqrt{x}",
    description: "Upper half of horizontal parabola starting at (0,0) and growing to the right.",
    keyFeature: "Starting point (0,0), Domain = [0, ∞), Range = [0, ∞)"
  },

  // Trigonometry
  {
    id: "graph_sin_x",
    title: "Sine Wave: y = sin x",
    category: "Trigonometry",
    equation: "y = \\sin x",
    description: "Continuous wave bounded between -1 and 1. Period T = 2π. Odd function, sin(0) = 0.",
    keyFeature: "Amplitude = 1, Period = 2π, Zeros at x = nπ"
  },
  {
    id: "graph_cos_x",
    title: "Cosine Wave: y = cos x",
    category: "Trigonometry",
    equation: "y = \\cos x",
    description: "Continuous wave bounded between -1 and 1. Period T = 2π. Even function, cos(0) = 1.",
    keyFeature: "Amplitude = 1, Period = 2π, Zeros at x = (2n+1)π/2"
  },
  {
    id: "graph_tan_x",
    title: "Tangent Curve: y = tan x",
    category: "Trigonometry",
    equation: "y = \\tan x",
    description: "Periodic curves separated by vertical asymptotes at x = (2n+1)π/2. Period T = π.",
    keyFeature: "Period = π, Asymptotes at x = ±π/2, ±3π/2"
  },
  {
    id: "graph_abs_sin_x",
    title: "Rectified Sine Wave: y = |sin x|",
    category: "Trigonometry",
    equation: "y = |\\sin x|",
    description: "All negative lobes flipped above x-axis. Periodic function with halved period T = π.",
    keyFeature: "Period = π, Range = [0, 1], Sharp corners at x = nπ"
  },

  // Inverse Trigonometry
  {
    id: "graph_inv_sin_x",
    title: "Inverse Sine: y = arcsin x",
    category: "Inverse Trigonometry",
    equation: "y = \\sin^{-1} x",
    description: "S-shaped curve defined on [-1, 1] with principal range [-π/2, π/2]. Odd function.",
    keyFeature: "Domain = [-1, 1], Range = [-π/2, π/2], Slope = 1 at origin"
  },
  {
    id: "graph_inv_tan_x",
    title: "Inverse Tangent: y = arctan x",
    category: "Inverse Trigonometry",
    equation: "y = \\tan^{-1} x",
    description: "S-shaped curve bounded by horizontal asymptotes y = π/2 and y = -π/2.",
    keyFeature: "Domain = (-∞, ∞), Horizontal Asymptotes y = ±π/2"
  },

  // Exponential & Logarithmic
  {
    id: "graph_exp_x",
    title: "Exponential Curve: y = eⁿ",
    category: "Algebra",
    equation: "y = e^x",
    description: "Strictly increasing curve passing through (0,1). Horizontal asymptote y = 0 as x → -∞.",
    keyFeature: "y-intercept (0,1), Asymptote y = 0, Range = (0, ∞)"
  },
  {
    id: "graph_ln_x",
    title: "Natural Logarithm: y = ln x",
    category: "Algebra",
    equation: "y = \\ln x",
    description: "Inverse of eⁿ. Strictly increasing for x > 0. Passes through (1,0). Vertical asymptote x = 0.",
    keyFeature: "x-intercept (1,0), Vertical Asymptote x = 0, Domain = (0, ∞)"
  },

  // Conic Sections
  {
    id: "graph_circle",
    title: "Circle: x² + y² = r²",
    category: "Conics",
    equation: "x^2 + y^2 = r^2",
    description: "Symmetric closed curve with center at (0,0) and constant radius r.",
    keyFeature: "Center (0,0), Radius r, Intercepts at (±r,0) and (0,±r)"
  },
  {
    id: "graph_parabola",
    title: "Horizontal Parabola: y² = 4ax",
    category: "Conics",
    equation: "y^2 = 4ax",
    description: "Conic section opening to the right with vertex (0,0), focus (a,0), and directrix x = -a.",
    keyFeature: "Vertex (0,0), Focus (a,0), Latus Rectum = 4a"
  },
  {
    id: "graph_ellipse",
    title: "Standard Ellipse: x²/a² + y²/b² = 1",
    category: "Conics",
    equation: "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1",
    description: "Oval-shaped closed conic section with major axis 2a along x-axis and minor axis 2b.",
    keyFeature: "Foci (±ae, 0), Major axis 2a, Minor axis 2b, Eccentricity e < 1"
  },
  {
    id: "graph_hyperbola",
    title: "Standard Hyperbola: x²/a² - y²/b² = 1",
    category: "Conics",
    equation: "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1",
    description: "Two open curves extending infinitely with asymptotes y = ±(b/a)x.",
    keyFeature: "Vertices (±a, 0), Foci (±ae, 0), Asymptotes y = ±(b/a)x, e > 1"
  },

  // Calculus
  {
    id: "graph_max_min",
    title: "Calculus: Turning Points & Curve Extrema",
    category: "Calculus",
    equation: "f'(x) = 0 \\implies f''(x) < 0 \\text{ (Max)}, \\; f''(x) > 0 \\text{ (Min)}",
    description: "Graph depicting local maximum peak, local minimum trough, and horizontal tangents where derivative f'(x) = 0.",
    keyFeature: "Peak (Local Max), Trough (Local Min), Tangent slope = 0 at extrema"
  }
];

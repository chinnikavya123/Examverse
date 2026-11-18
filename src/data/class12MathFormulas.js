export const CLASS_12_MATH_FORMULAS = [
  {
    id: "m12_ch1",
    chapterNumber: 1,
    chapter: "Relations and Functions",
    category: "Algebra",
    class: 12,
    subtopics: [
      {
        subtopic: "Equivalence Relations & Bijective Functions",
        sections: {
          concept: "Relation $R$ on set $A$ is an Equivalence Relation if it is Reflexive ($(a,a) \\in R$), Symmetric ($(a,b) \\in R \\implies (b,a) \\in R$), and Transitive ($(a,b),(b,c) \\in R \\implies (a,c) \\in R$). Functions: One-one (Injective), Onto (Surjective where Range = Codomain), Bijective (Both).",
          formulaReaction: "$f(x_1) = f(x_2) \\implies x_1 = x_2 \\quad (\\text{One-One}) \\quad | \\quad \\text{Range}(f) = \\text{Codomain}(f) \\quad (\\text{Onto})$",
          shortcuts: "⚡ Total bijections from set of size $n$ to itself $= n!$.",
          importantResults: "If $f: A \\to B$ and $g: B \\to C$ are bijective, then $g \\circ f: A \\to C$ is also bijective and $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$."
        }
      }
    ]
  },
  {
    id: "m12_ch2",
    chapterNumber: 2,
    chapter: "Inverse Trigonometric Functions",
    category: "Trigonometry",
    class: 12,
    subtopics: [
      {
        subtopic: "Principal Value Branches & Identities",
        sections: {
          concept: "Inverse trig functions restrict domains to ensure bijectivity and well-defined principal values.",
          formulaReaction: "$\\sin^{-1} x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}] \\quad | \\quad \\cos^{-1} x \\in [0, \\pi] \\quad | \\quad \\tan^{-1} x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ \n\n $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2} \\quad | \\quad \\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2} \\quad | \\quad \\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}$ \n\n $\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) \\; (xy < 1)$",
          shortcuts: "⚡ Negative Argument Rules: $\\sin^{-1}(-x) = -\\sin^{-1} x, \\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1} x, \\quad \\tan^{-1}(-x) = -\\tan^{-1} x$.",
          importantResults: "$2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right) = \\cos^{-1}\\left(\\frac{1-x^2}{1+x^2}\\right) = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right)$."
        }
      }
    ]
  },
  {
    id: "m12_ch3",
    chapterNumber: 3,
    chapter: "Matrices",
    category: "Matrices & Determinants",
    class: 12,
    subtopics: [
      {
        subtopic: "Matrix Algebra & Symmetric Matrices",
        sections: {
          concept: "Rectangular array of numbers. Matrix multiplication $A_{m \\times n} B_{n \\times p} = C_{m \\times p}$ is non-commutative ($AB \\neq BA$). Symmetric: $A^T = A$, Skew-Symmetric: $A^T = -A$.",
          formulaReaction: "$(AB)^T = B^T A^T \\quad | \\quad (A+B)^T = A^T + B^T \\quad | \\quad A = \\frac{1}{2}(A+A^T) + \\frac{1}{2}(A-A^T)$",
          shortcuts: "⚡ Every square matrix $A$ can be uniquely expressed as the sum of a symmetric matrix $\\frac{1}{2}(A+A^T)$ and a skew-symmetric matrix $\\frac{1}{2}(A-A^T)$. Diagonal elements of a skew-symmetric matrix are always 0.",
          importantResults: "If $A$ and $B$ are symmetric matrices of same order, then $AB - BA$ is skew-symmetric."
        }
      }
    ]
  },
  {
    id: "m12_ch4",
    chapterNumber: 4,
    chapter: "Determinants",
    category: "Matrices & Determinants",
    class: 12,
    subtopics: [
      {
        subtopic: "Determinant Properties, Adjoint & Inverse",
        sections: {
          concept: "Scalar value associated with square matrix. Matrix inverse $A^{-1}$ exists if $|A| \\neq 0$ (Non-singular matrix).",
          formulaReaction: "$A^{-1} = \\frac{\\text{adj}(A)}{|A|} \\; (|A| \\neq 0) \\quad | \\quad |AB| = |A||B| \\quad | \\quad |kA_{n\\times n}| = k^n |A| \\quad | \\quad |\\text{adj}(A)| = |A|^{n-1}$",
          shortcuts: "⚡ $2 \\times 2$ Inverse Shortcut: For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, $A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Swap main diagonal elements, negate off-diagonal elements!",
          importantResults: "Cramer's Rule for System of Equations: $X = A^{-1}B$. Unique solution if $|A| \\neq 0$. Infinitely many or no solutions if $|A| = 0$."
        }
      }
    ]
  },
  {
    id: "m12_ch5",
    chapterNumber: 5,
    chapter: "Continuity and Differentiability",
    category: "Calculus",
    class: 12,
    subtopics: [
      {
        subtopic: "Continuity, Differentiation Rules & Parametrics",
        sections: {
          concept: "Function $f(x)$ is continuous at $c$ if $\\lim_{x\\to c} f(x) = f(c)$. Differentiable $\\implies$ Continuous. Differentiation techniques include Chain Rule, Product Rule, Quotient Rule, Logarithmic Differentiation $y = f(x)^{g(x)}$, and Parametric Differentiation.",
          formulaReaction: "$\\text{Product}: (uv)' = u'v + uv' \\quad | \\quad \\text{Quotient}: \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2} \\quad | \\quad \\text{Parametric}: \\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$",
          shortcuts: "⚡ Logarithmic Differentiation: For $y = u^v$, $\\frac{dy}{dx} = u^v \\left( v' \\ln u + \\frac{v u'}{u} \\right)$.",
          importantResults: "Standard Derivatives: $\\frac{d}{dx}(\\tan x) = \\sec^2 x, \\frac{d}{dx}(\\sec x) = \\sec x \\tan x, \\frac{d}{dx}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1-x^2}}, \\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1+x^2}$."
        }
      }
    ]
  },
  {
    id: "m12_ch6",
    chapterNumber: 6,
    chapter: "Applications of Derivatives",
    category: "Calculus",
    class: 12,
    subtopics: [
      {
        subtopic: "Monotonicity, Maxima/Minima & Tangent/Normal",
        sections: {
          concept: "Increasing if $f'(x) > 0$, Decreasing if $f'(x) < 0$. Maxima/Minima critical points occur where $f'(x) = 0$. Slope of tangent $m_t = f'(x_0)$, slope of normal $m_n = -\\frac{1}{f'(x_0)}$.",
          formulaReaction: "$\\text{Second Derivative Test}: f'(c) = 0 \\quad \\implies \\quad f''(c) < 0 \\text{ (Local Max)} \\quad | \\quad f''(c) > 0 \\text{ (Local Min)}$",
          shortcuts: "⚡ Rate of Change: $\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt}$. Tangent Equation: $y - y_0 = f'(x_0)(x - x_0)$.",
          importantResults: "If $f''(c) = 0$, test fails; use First Derivative Test (sign change of $f'(x)$ across $c$)."
        }
      }
    ]
  },
  {
    id: "m12_ch7",
    chapterNumber: 7,
    chapter: "Integrals",
    category: "Calculus",
    class: 12,
    subtopics: [
      {
        subtopic: "Indefinite Integration & Methods",
        sections: {
          concept: "Integration is antiderivative process. Methods: Substitution, Integration by Parts (ILATE rule: Inverse, Log, Algebraic, Trig, Exponential), Partial Fractions.",
          formulaReaction: "$\\int u v dx = u \\int v dx - \\int \\left( u' \\int v dx \\right) dx \\quad | \\quad \\int e^x [f(x) + f'(x)] dx = e^x f(x) + C$",
          shortcuts: "⚡ Standard Integrals: $\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$, $\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\sin^{-1}\\frac{x}{a} + C$, $\\int \\frac{dx}{x^2-a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C$.",
          importantResults: "$\\int \\tan x dx = \\ln|\\sec x| + C, \\quad \\int \\sec x dx = \\ln|\\sec x + \\tan x| + C$."
        }
      },
      {
        subtopic: "Definite Integration & King's Property",
        sections: {
          concept: "Definite integral $\\int_a^b f(x)dx$ measures net signed area. Fundamental Theorem of Calculus: $\\int_a^b f(x)dx = F(b) - F(a)$.",
          formulaReaction: "$\\text{King's Property}: \\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx \\quad | \\quad \\int_0^a f(x) dx = \\int_0^a f(a-x) dx$ \n\n $\\text{Even/Odd}: \\int_{-a}^a f(x) dx = \\begin{cases} 2\\int_0^a f(x)dx & \\text{if } f(-x)=f(x) \\text{ (Even)} \\\\ 0 & \\text{if } f(-x)=-f(x) \\text{ (Odd)} \\end{cases}$",
          shortcuts: "⚡ Odd function over symmetric interval $[-a,a]$ always integrates to $0$!",
          importantResults: "$\\int_0^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx = \\frac{\\pi}{4}$ for any $n$."
        }
      }
    ]
  },
  {
    id: "m12_ch8",
    chapterNumber: 8,
    chapter: "Applications of Integrals",
    category: "Calculus",
    class: 12,
    subtopics: [
      {
        subtopic: "Area Under Curve & Between Curves",
        sections: {
          concept: "Area bounded by curve $y=f(x)$, $x$-axis and lines $x=a, x=b$ is $A = \\int_a^b |f(x)| dx$. Area between curves $y_1=f(x)$ and $y_2=g(x)$ is $A = \\int_a^b |f(x) - g(x)| dx$.",
          formulaReaction: "$A = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}}) dx \\quad | \\quad A = \\int_c^d (x_{\\text{right}} - x_{\\text{left}}) dy$",
          shortcuts: "⚡ Area of Ellipse $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ is $\\pi a b$. Area of Circle $x^2+y^2=r^2$ is $\\pi r^2$. Area bounded between parabola $y^2=4ax$ and line $y=mx$ is $\\frac{8a^2}{3m^3}$.",
          importantResults: "Area enclosed between parabolas $y^2=4ax$ and $x^2=4by$ is $\\frac{16ab}{3}$."
        }
      }
    ]
  },
  {
    id: "m12_ch9",
    chapterNumber: 9,
    chapter: "Differential Equations",
    category: "Calculus",
    class: 12,
    subtopics: [
      {
        subtopic: "Order, Degree & Solution Methods",
        sections: {
          concept: "Order is highest derivative present. Degree is power of highest derivative when polynomial in derivatives. Methods: Variable Separable, Homogeneous $y=vx$, First Order Linear.",
          formulaReaction: "$\\text{Linear DE}: \\frac{dy}{dx} + P(x)y = Q(x) \\implies \\text{IF} = e^{\\int P(x) dx} \\implies y \\cdot \\text{IF} = \\int (Q(x) \\cdot \\text{IF}) dx + C$",
          shortcuts: "⚡ Variable Separable: Rearrange as $f(y)dy = g(x)dx$ and integrate both sides.",
          importantResults: "Homogeneous DE $\\frac{dy}{dx} = f(y/x)$: Substitute $y = v x \\implies \\frac{dy}{dx} = v + x \\frac{dv}{dx}$."
        }
      }
    ]
  },
  {
    id: "m12_ch10",
    chapterNumber: 10,
    chapter: "Vector Algebra",
    category: "3D Geometry & Vectors",
    class: 12,
    subtopics: [
      {
        subtopic: "Dot, Cross & Scalar Triple Product",
        sections: {
          concept: "Vectors have magnitude and direction. Dot product (scalar output), Cross product (vector output perpendicular to both). Scalar Triple Product $[\\vec{a}\\vec{b}\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$.",
          formulaReaction: "$\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta \\quad | \\quad |\\vec{a} \\times \\vec{b}| = |a||b|\\sin\\theta \\quad | \\quad \\text{Projection of } \\vec{a} \\text{ on } \\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|b|}$ \n\n $\\text{STP}: [\\vec{a}\\vec{b}\\vec{c}] = \\begin{vmatrix} a_x & a_y & a_z \\\\ b_x & b_y & b_z \\\\ c_x & c_y & c_z \\end{vmatrix}$",
          shortcuts: "⚡ Perpendicular Vectors $\\iff \\vec{a} \\cdot \\vec{b} = 0$. Parallel Vectors $\\iff \\vec{a} \\times \\vec{b} = \\vec{0}$. Coplanar Vectors $\\iff [\\vec{a}\\vec{b}\\vec{c}] = 0$.",
          importantResults: "Area of Triangle $= \\frac{1}{2}|\\vec{a} \\times \\vec{b}|$. Area of Parallelogram $= |\\vec{a} \\times \\vec{b}|$."
        }
      }
    ]
  },
  {
    id: "m12_ch11",
    chapterNumber: 11,
    chapter: "Three-Dimensional Geometry",
    category: "3D Geometry & Vectors",
    class: 12,
    subtopics: [
      {
        subtopic: "Lines, Planes & Shortest Distance",
        sections: {
          concept: "Direction Cosines $(l,m,n)$ satisfy $l^2+m^2+n^2=1$. Direction Ratios $(a,b,c)$. Line equation: Vector $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$, Cartesian $\\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}$.",
          formulaReaction: "$\\text{Shortest Distance (Skew Lines)}: d = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$ \n\n $\\text{Plane Equation}: \\vec{r} \\cdot \\hat{n} = d \\quad \\text{or} \\quad Ax+By+Cz+D = 0$",
          shortcuts: "⚡ Angle between lines: $\\cos\\theta = \\frac{\\vec{b}_1 \\cdot \\vec{b}_2}{|\\vec{b}_1||\\vec{b}_2|}$. Distance of point $(x_1,y_1,z_1)$ from plane $Ax+By+Cz+D=0$ is $\\frac{|Ax_1+By_1+Cz_1+D|}{\\sqrt{A^2+B^2+C^2}}$.",
          importantResults: "If lines intersect or are coplanar, shortest distance $d = 0$."
        }
      }
    ]
  },
  {
    id: "m12_ch12",
    chapterNumber: 12,
    chapter: "Linear Programming",
    category: "Algebra",
    class: 12,
    subtopics: [
      {
        subtopic: "Feasible Region & Corner Point Method",
        sections: {
          concept: "LPP optimizes objective function $Z = ax + by$ subject to linear inequality constraints $x \\ge 0, y \\ge 0$. The feasible region is convex polygon.",
          formulaReaction: "$Z = ax + by \\quad \\text{at corner points } (x_i, y_i)$",
          shortcuts: "⚡ Corner-Point Theorem: Optimal value of $Z$ (maximum or minimum) always occurs at one of the corner points (vertices) of the bounded feasible region.",
          importantResults: "If feasible region is unbounded, optimal value must be checked by plotting $ax+by > M$ or $ax+by < m$."
        }
      }
    ]
  },
  {
    id: "m12_ch13",
    chapterNumber: 13,
    chapter: "Probability",
    category: "Probability & Statistics",
    class: 12,
    subtopics: [
      {
        subtopic: "Conditional Probability, Bayes Theorem & Binomial Distribution",
        sections: {
          concept: "Probability rules, conditional probability $P(A|B)$, independent events $P(A \\cap B) = P(A)P(B)$, Bayes' Theorem for inverse probability, Binomial Distribution $B(n,p)$.",
          formulaReaction: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\; (P(B)>0) \\quad | \\quad \\text{Bayes Theorem}: P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum_{j=1}^k P(A_j)P(B|A_j)}$ \n\n $\\text{Binomial Dist}: P(X=k) = {}^nC_k p^k q^{n-k} \\quad | \\quad \\text{Mean } \\mu = np, \\quad \\text{Variance } \\sigma^2 = npq$",
          shortcuts: "⚡ Complement Shortcut: $P(\\text{At least one}) = 1 - P(\\text{None}) = 1 - P(E')$.",
          importantResults: "For independent events: $P(A \\cup B) = 1 - P(A')P(B')$."
        }
      }
    ]
  }
];

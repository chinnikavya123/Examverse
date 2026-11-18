export const MASTER_MATH_DERIVATIONS = [
  // Class 11 Proofs
  {
    id: "proof_set_demorgan",
    title: "Proof of De Morgan's Law: (A ∪ B)' = A' ∩ B'",
    class: 11,
    category: "Sets & Relations",
    targetResult: "(A \\cup B)' = A' \\cap B'",
    steps: [
      "Let $x \\in (A \\cup B)'$.",
      "By definition of complement: $x \\notin (A \\cup B)$.",
      "This implies $x \\notin A$ and $x \\notin B$.",
      "Since $x \\notin A \\implies x \\in A'$, and $x \\notin B \\implies x \\in B'$.",
      "Thus, $x \\in A'$ and $x \\in B' \\implies x \\in (A' \\cap B')$.",
      "Hence, $(A \\cup B)' \\subseteq A' \\cap B'$.",
      "Similarly, taking $y \\in (A' \\cap B')$ proves $(A' \\cap B') \\subseteq (A \\cup B)'$.",
      "Conclusion: $(A \\cup B)' = A' \\cap B'$. $\\blacksquare$"
    ],
    examTip: "Exam favorite! Use double containment ($X \\subseteq Y$ and $Y \\subseteq X$) to establish set equality."
  },
  {
    id: "proof_comb_identity",
    title: "Proof of Pascal's Identity: ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ",
    class: 11,
    category: "Algebra",
    targetResult: "^nC_r + {}^nC_{r-1} = {}^{n+1}C_r",
    steps: [
      "Start with Left Hand Side (LHS): $\\text{LHS} = \\frac{n!}{r!(n-r)!} + \\frac{n!}{(r-1)!(n-r+1)!}$.",
      "Factor out common terms $n!$ and $(r-1)!(n-r)!$: $\\text{LHS} = \\frac{n!}{(r-1)!(n-r)!} \\left[ \\frac{1}{r} + \\frac{1}{n-r+1} \\right]$.",
      "Take common denominator inside brackets: $\\frac{1}{r} + \\frac{1}{n-r+1} = \\frac{(n-r+1) + r}{r(n-r+1)} = \\frac{n+1}{r(n-r+1)}$.",
      "Multiply back: $\\text{LHS} = \\frac{n! \\cdot (n+1)}{[(r-1)! \\cdot r] \\cdot [(n-r)! \\cdot (n-r+1)]}$.",
      "Simplify factorials: $\\frac{(n+1)!}{r!(n+1-r)!} = {}^{n+1}C_r = \\text{RHS}$. $\\blacksquare$"
    ],
    examTip: "Essential identity used for constructing Pascal's Triangle and solving Binomial series."
  },
  {
    id: "proof_distance_point_line",
    title: "Derivation of Perpendicular Distance of Point from Line",
    class: 11,
    category: "Coordinate Geometry",
    targetResult: "d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}",
    steps: [
      "Let the line equation be $L: Ax + By + C = 0$ and the point be $P(x_1, y_1)$.",
      "Let $N$ be the foot of the perpendicular from $P$ to line $L$. Line $PN$ is perpendicular to $L$.",
      "Slope of line $L$ is $m = -\\frac{A}{B}$. Slope of $PN$ is $m' = \\frac{B}{A}$ since $m \\cdot m' = -1$.",
      "Equation of line $PN$: $y - y_1 = \\frac{B}{A}(x - x_1) \\implies Bx - Ay - (Bx_1 - Ay_1) = 0$.",
      "Solving equations for $PN$ and $L$ yields coordinates of foot $N$.",
      "Calculating distance $d = PN = \\sqrt{(x_N - x_1)^2 + (y_N - y_1)^2}$ yields $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$. $\\blacksquare$"
    ],
    examTip: "Remember to keep absolute value $|\\dots|$ as distance cannot be negative."
  },
  {
    id: "proof_derivative_sinx",
    title: "Derivative of sin x from First Principles",
    class: 11,
    category: "Calculus",
    targetResult: "\\frac{d}{dx}(\\sin x) = \\cos x",
    steps: [
      "By first principles definition: $f'(x) = \\lim_{h\\to 0} \\frac{\\sin(x+h) - \\sin x}{h}$.",
      "Use trigonometric transformation formula: $\\sin C - \\sin D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$.",
      "Substitute $C = x+h$ and $D = x$: $\\sin(x+h) - \\sin x = 2\\cos\\left(x + \\frac{h}{2}\\right)\\sin\\left(\\frac{h}{2}\\right)$.",
      "Expression becomes: $f'(x) = \\lim_{h\\to 0} \\frac{2\\cos(x + h/2)\\sin(h/2)}{h} = \\lim_{h\\to 0} \\cos\\left(x + \\frac{h}{2}\\right) \\cdot \\lim_{h\\to 0} \\frac{\\sin(h/2)}{h/2}$.",
      "Using standard limit $\\lim_{\\theta \\to 0}\\frac{\\sin\\theta}{\\theta} = 1$: $f'(x) = \\cos(x + 0) \\cdot 1 = \\cos x$. $\\blacksquare$"
    ],
    examTip: "Standard 4-mark CBSE/Board question! Ensure all limit notation steps are explicitly written."
  },

  // Class 12 Proofs
  {
    id: "proof_matrix_inverse",
    title: "Proof of Matrix Inverse Formula: A⁻¹ = adj(A) / |A|",
    class: 12,
    category: "Matrices & Determinants",
    targetResult: "A^{-1} = \\frac{\\text{adj}(A)}{|A|} \\quad (|A| \\neq 0)",
    steps: [
      "Let $A$ be a non-singular square matrix of order $n$ (so $|A| \\neq 0$).",
      "Recall fundamental property of adjoint: $A \\cdot \\text{adj}(A) = \\text{adj}(A) \\cdot A = |A| I_n$, where $I_n$ is the identity matrix.",
      "Since $|A| \\neq 0$, divide both sides by scalar $|A|$: $A \\left( \\frac{\\text{adj}(A)}{|A|} \\right) = I_n$.",
      "By definition of matrix inverse $A \\cdot A^{-1} = I_n$.",
      "Comparing terms proves $A^{-1} = \\frac{\\text{adj}(A)}{|A|}$. $\\blacksquare$"
    ],
    examTip: "Always state pre-condition $|A| \\neq 0$ before computing matrix inverse."
  },
  {
    id: "proof_integration_parts",
    title: "Derivation of Integration by Parts Formula",
    class: 12,
    category: "Calculus",
    targetResult: "\\int u v dx = u \\int v dx - \\int \\left( u' \\int v dx \\right) dx",
    steps: [
      "Let $u = f(x)$ and $w = \\int g(x) dx \\implies \\frac{dw}{dx} = g(x)$.",
      "Differentiate product $(f \\cdot w)$ using product rule: $\\frac{d}{dx}[f(x) \\cdot w(x)] = f'(x) w(x) + f(x) w'(x)$.",
      "Substitute $w'(x) = g(x)$: $\\frac{d}{dx}[f(x) w(x)] = f'(x) w(x) + f(x) g(x)$.",
      "Integrate both sides with respect to $x$: $f(x) w(x) = \\int f'(x) w(x) dx + \\int f(x) g(x) dx$.",
      "Rearrange terms: $\\int f(x) g(x) dx = f(x) w(x) - \\int f'(x) w(x) dx$.",
      "Substitute $w(x) = \\int g(x) dx$: $\\int f(x)g(x)dx = f(x)\\int g(x)dx - \\int \\left( f'(x) \\int g(x)dx \\right) dx$. $\\blacksquare$"
    ],
    examTip: "Choose first function $u$ using ILATE priority rule (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential)."
  },
  {
    id: "proof_shortest_distance_skew",
    title: "Derivation of Shortest Distance Between Skew Lines",
    class: 12,
    category: "3D Geometry & Vectors",
    targetResult: "d = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|",
    steps: [
      "Let $L_1: \\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ and $L_2: \\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$ be two skew lines.",
      "Vector $\\vec{b}_1 \\times \\vec{b}_2$ is perpendicular to both lines $L_1$ and $L_2$.",
      "Unit vector along line of shortest distance is $\\hat{n} = \\frac{\\vec{b}_1 \\times \\vec{b}_2}{|\\vec{b}_1 \\times \\vec{b}_2|}$.",
      "The shortest distance $d$ is the magnitude of the projection of vector $(\\vec{a}_2 - \\vec{a}_1)$ onto $\\hat{n}$.",
      "Projection formula: $d = |(\\vec{a}_2 - \\vec{a}_1) \\cdot \\hat{n}| = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$. $\\blacksquare$"
    ],
    examTip: "If numerator $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$, lines are coplanar and intersect!"
  },
  {
    id: "proof_bayes_theorem",
    title: "Proof of Bayes' Theorem",
    class: 12,
    category: "Probability & Statistics",
    targetResult: "P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum_{j=1}^k P(A_j)P(B|A_j)}",
    steps: [
      "Let $A_1, A_2, \\dots, A_k$ be a partition of sample space $S$ ($A_i \\cap A_j = \\emptyset$ and $\\bigcup A_i = S$).",
      "By definition of conditional probability: $P(A_i|B) = \\frac{P(A_i \\cap B)}{P(B)}$.",
      "By multiplication theorem of probability: $P(A_i \\cap B) = P(A_i) \\cdot P(B|A_i)$.",
      "By Total Probability Theorem: $P(B) = \\sum_{j=1}^k P(A_j \\cap B) = \\sum_{j=1}^k P(A_j) \\cdot P(B|A_j)$.",
      "Substitute terms into conditional probability: $P(A_i|B) = \\frac{P(A_i) \\cdot P(B|A_i)}{\\sum_{j=1}^k P(A_j) \\cdot P(B|A_j)}$. $\\blacksquare$"
    ],
    examTip: "Core formula for 5-mark probability questions! Always write events $A_i$ and event $B$ clearly before applying."
  }
];

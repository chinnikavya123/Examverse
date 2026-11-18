export const CLASS_11_MATH_FORMULAS = [
  {
    id: "m11_ch1",
    chapterNumber: 1,
    chapter: "Sets",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Representation & Types of Sets",
        sections: {
          concept: "A set is a well-defined collection of distinct objects. Sets are represented in Roster (Tabular) form or Set-Builder form. Types include Empty (Null/Void) $\\emptyset$, Singleton $\\{a\\}$, Finite, Infinite, Universal set $U$, and Power Set $P(A)$ containing all subsets.",
          formulaReaction: "$\\text{Subsets of } A: 2^n \\quad | \\quad \\text{Proper Subsets}: 2^n - 1 \\quad | \\quad |P(A)| = 2^{n(A)}$",
          shortcuts: "⚡ Empty set $\\emptyset$ is a subset of every set. Every set is a subset of itself.",
          importantResults: "If $A \\subseteq B$ and $B \\subseteq A \\implies A = B$."
        }
      },
      {
        subtopic: "Set Operations, Venn Diagrams & Cardinality",
        sections: {
          concept: "Operations on sets include Union ($A \\cup B$), Intersection ($A \\cap B$), Difference ($A \\setminus B$), and Complement ($A'$ or $A^c = U \\setminus A$). De Morgan's Laws state $(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$.",
          formulaReaction: "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ \n\n $n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$",
          shortcuts: "⚡ For disjoint sets ($A \\cap B = \\emptyset$): $n(A \\cup B) = n(A) + n(B)$.",
          importantResults: "$n(A \\setminus B) = n(A) - n(A \\cap B) = n(A \\cap B')$."
        }
      }
    ]
  },
  {
    id: "m11_ch2",
    chapterNumber: 2,
    chapter: "Relations and Functions",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Cartesian Product & Relations",
        sections: {
          concept: "Cartesian Product $A \\times B = \\{(a,b) : a \\in A, b \\in B\\}$. A relation $R$ from $A$ to $B$ is a subset of $A \\times B$. Number of relations $= 2^{n(A) \\cdot n(B)}$.",
          formulaReaction: "$\\text{Domain}(R) = \\{a \\in A : (a,b) \\in R\\}, \\quad \\text{Range}(R) = \\{b \\in B : (a,b) \\in R\\}$",
          shortcuts: "⚡ Types of Relations on set $A$: Reflexive ($(a,a) \\in R$), Symmetric ($(a,b) \\in R \\implies (b,a) \\in R$), Transitive ($(a,b),(b,c) \\in R \\implies (a,c) \\in R$). Equivalence Relation satisfies all three.",
          importantResults: "The total number of reflexive relations on a set of size $n$ is $2^{n(n-1)}$."
        }
      },
      {
        subtopic: "Functions, Composite & Inverse Functions",
        sections: {
          concept: "A function $f: A \\to B$ associates every element in $A$ with a unique element in $B$. Types: One-One (Injective), Many-One, Onto (Surjective where Range = Codomain), Bijective (Both One-One and Onto).",
          formulaReaction: "$\\text{Composite}: (f \\circ g)(x) = f(g(x)) \\quad | \\quad \\text{Inverse}: f^{-1}(f(x)) = x \\iff f(x) \\text{ is bijective}$",
          shortcuts: "⚡ Horizontal Line Test: If any horizontal line cuts the graph of $f(x)$ at most once, $f(x)$ is One-One (Injective).",
          importantResults: "$(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$."
        }
      }
    ]
  },
  {
    id: "m11_ch3",
    chapterNumber: 3,
    chapter: "Trigonometric Functions",
    category: "Trigonometry",
    class: 11,
    subtopics: [
      {
        subtopic: "Radian Measure, Ratios & ASTC Rule",
        sections: {
          concept: "Angle in Radians $\\theta = \\frac{l}{r}$. Conversion: $\\pi \\text{ rad} = 180^\\circ$. ASTC Quadrant Rule: Q-I (All +), Q-II (Sin, Csc +), Q-III (Tan, Cot +), Q-IV (Cos, Sec +).",
          formulaReaction: "$\\sin^2 x + \\cos^2 x = 1 \\quad | \\quad 1 + \\tan^2 x = \\sec^2 x \\quad | \\quad 1 + \\cot^2 x = \\csc^2 x$",
          shortcuts: "⚡ ASTC Memory Trick: 'Add Sugar To Coffee' or 'All Silver Tea Cups'.",
          importantResults: "$\\sin(-x) = -\\sin x, \\quad \\cos(-x) = \\cos x, \\quad \\tan(-x) = -\\tan x$."
        }
      },
      {
        subtopic: "Compound, Multiple & Half-Angle Formulas",
        sections: {
          concept: "Formulas for addition/subtraction of angles and double/triple angle identities.",
          formulaReaction: "$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$ \n\n $\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$ \n\n $\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$ \n\n $\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1+\\tan^2 A}$ \n\n $\\cos 2A = \\cos^2 A - \\sin^2 A = 1 - 2\\sin^2 A = 2\\cos^2 A - 1 = \\frac{1-\\tan^2 A}{1+\\tan^2 A}$",
          shortcuts: "⚡ Half-angle: $\\sin^2 \\frac{A}{2} = \\frac{1-\\cos A}{2}$ and $\\cos^2 \\frac{A}{2} = \\frac{1+\\cos A}{2}$.",
          importantResults: "$\\sin 3A = 3\\sin A - 4\\sin^3 A, \\quad \\cos 3A = 4\\cos^3 A - 3\\cos A$."
        }
      }
    ]
  },
  {
    id: "m11_ch4",
    chapterNumber: 4,
    chapter: "Principle of Mathematical Induction",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Induction Steps & Methodology",
        sections: {
          concept: "PMI proves a statement $P(n)$ for all natural numbers $n \\in \\mathbb{N}$. Steps: 1. Base Case: Prove $P(1)$ is true. 2. Inductive Hypothesis: Assume $P(k)$ is true for some $k \\ge 1$. 3. Inductive Step: Prove $P(k+1)$ is true using $P(k)$.",
          formulaReaction: "$P(1) \\text{ holds} \\land [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}$",
          shortcuts: "⚡ Essential for proving summation formulas $\\sum n, \\sum n^2, \\sum n^3$ and divisibility statements like $a^n - b^n$ is divisible by $a-b$.",
          importantResults: "$1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$."
        }
      }
    ]
  },
  {
    id: "m11_ch5",
    chapterNumber: 5,
    chapter: "Complex Numbers and Quadratic Equations",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Complex Numbers & Argand Plane",
        sections: {
          concept: "Complex number $z = a + ib$ where $i = \\sqrt{-1}$. Modulus $|z| = \\sqrt{a^2+b^2}$, Conjugate $\\bar{z} = a - ib$, Polar form $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$ where $r = |z|$ and $\\theta = \\text{arg}(z)$.",
          formulaReaction: "$z \\cdot \\bar{z} = |z|^2 \\quad | \\quad |z_1 z_2| = |z_1||z_2| \\quad | \\quad z^{-1} = \\frac{\\bar{z}}{|z|^2}$",
          shortcuts: "⚡ Powers of $i$: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$. Sum of 4 consecutive powers of $i$ is always $0$: $i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0$.",
          importantResults: "Euler's Formula: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."
        }
      },
      {
        subtopic: "Quadratic Equations & Roots Properties",
        sections: {
          concept: "For $ax^2+bx+c=0$, roots are $\\alpha, \\beta = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$. Discriminant $D = b^2-4ac$. $D > 0$ (Real & distinct), $D = 0$ (Real & equal), $D < 0$ (Complex conjugate roots).",
          formulaReaction: "$\\alpha + \\beta = -\\frac{b}{a} \\quad | \\quad \\alpha\\beta = \\frac{c}{a} \\quad | \\quad \\text{Equation}: x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0$",
          shortcuts: "⚡ Vertex of parabola $y = ax^2+bx+c$ is at $x = -\\frac{b}{2a}$. Minimum value (if $a>0$) or Maximum value (if $a<0$) is $\\frac{4ac-b^2}{4a}$.",
          importantResults: "If one complex root is $p + iq$, the other must be $p - iq$ (for real coefficients)."
        }
      }
    ]
  },
  {
    id: "m11_ch6",
    chapterNumber: 6,
    chapter: "Linear Inequalities",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Algebraic & Modulus Inequalities",
        sections: {
          concept: "Rules: Multiplying or dividing an inequality by a negative number reverses the inequality sign. Modulus properties dictate distance from origin on number line.",
          formulaReaction: "$|x| \\le a \\iff -a \\le x \\le a \\quad | \\quad |x| \\ge a \\iff x \\le -a \\text{ or } x \\ge a$",
          shortcuts: "⚡ Triangle Inequality: $|a + b| \\le |a| + |b|$.",
          importantResults: "Interval notation: $[a,b]$ (inclusive bounds), $(a,b)$ (exclusive bounds)."
        }
      }
    ]
  },
  {
    id: "m11_ch7",
    chapterNumber: 7,
    chapter: "Permutations and Combinations",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Permutations & Circular Arrangements",
        sections: {
          concept: "Permutation is an ordered arrangement. Fundamental Principle of Counting: If event A can occur in $m$ ways and B in $n$ ways, together they occur in $m \\times n$ ways (Multiplication principle).",
          formulaReaction: "$^nP_r = \\frac{n!}{(n-r)!} \\quad | \\quad \\text{Repeated Objects}: \\frac{n!}{p! q! r!} \\quad | \\quad \\text{Circular}: (n-1)!$",
          shortcuts: "⚡ For circular permutations with no distinction between clockwise and counter-clockwise (e.g., necklace/garland), ways $= \\frac{(n-1)!}{2}$.",
          importantResults: "$^nP_n = n!$ and $^nP_0 = 1$."
        }
      },
      {
        subtopic: "Combinations & Key Properties",
        sections: {
          concept: "Combination is a selection without regard to order.",
          formulaReaction: "$^nC_r = \\frac{n!}{r!(n-r)!} = \\frac{^nP_r}{r!} \\quad | \\quad ^nC_r = {}^nC_{n-r} \\quad | \\quad ^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$",
          shortcuts: "⚡ Useful values: $^nC_0 = 1$, $^nC_1 = n$, $^nC_2 = \\frac{n(n-1)}{2}$, $^nC_3 = \\frac{n(n-1)(n-2)}{6}$. Always pick smaller $r$: $^{100}C_{97} = ^{100}C_3 = 161,700$.",
          importantResults: "If $^nC_x = {}^nC_y \\implies x = y \\text{ or } x + y = n$."
        }
      }
    ]
  },
  {
    id: "m11_ch8",
    chapterNumber: 8,
    chapter: "Binomial Theorem",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Binomial Expansion & General Term",
        sections: {
          concept: "Binomial expansion for positive integral index $n$. Total terms in expansion of $(a+b)^n$ is $n+1$.",
          formulaReaction: "$(a+b)^n = \\sum_{r=0}^{n} {}^nC_r a^{n-r} b^r \\quad | \\quad \\text{General Term }: T_{r+1} = {}^nC_r a^{n-r} b^r$",
          shortcuts: "⚡ Sum of Binomial Coefficients: Put $a=1, b=1 \\implies C_0 + C_1 + C_2 + \\dots + C_n = 2^n$. Alternating sum $= 0$.",
          importantResults: "Middle Term: If $n$ is even, middle term is $T_{\\frac{n}{2}+1}$. If $n$ is odd, middle terms are $T_{\\frac{n+1}{2}}$ and $T_{\\frac{n+3}{2}}$."
        }
      }
    ]
  },
  {
    id: "m11_ch9",
    chapterNumber: 9,
    chapter: "Sequences and Series",
    category: "Algebra",
    class: 11,
    subtopics: [
      {
        subtopic: "Arithmetic & Geometric Progressions",
        sections: {
          concept: "AP has constant common difference $d$. GP has constant common ratio $r$. Infinite GP converges when $|r| < 1$.",
          formulaReaction: "$\\text{AP}: a_n = a+(n-1)d, \\; S_n = \\frac{n}{2}[2a+(n-1)d] \\quad | \\quad \\text{GP}: a_n = ar^{n-1}, \\; S_n = a\\frac{r^n-1}{r-1} \\quad | \\quad S_\\infty = \\frac{a}{1-r} \\; (|r|<1)$",
          shortcuts: "⚡ Arithmetic Mean $\\text{AM} = \\frac{a+b}{2}$, Geometric Mean $\\text{GM} = \\sqrt{ab}$. Relation: $\\text{AM} \\ge \\text{GM} \\ge \\text{HM}$.",
          importantResults: "Special sums: $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$, $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum_{k=1}^n k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$."
        }
      }
    ]
  },
  {
    id: "m11_ch10",
    chapterNumber: 10,
    chapter: "Straight Lines",
    category: "Coordinate Geometry",
    class: 11,
    subtopics: [
      {
        subtopic: "Forms of Straight Line & Slopes",
        sections: {
          concept: "Slope $m = \\tan\\theta = \\frac{y_2-y_1}{x_2-x_1}$. Parallel lines $m_1 = m_2$, Perpendicular lines $m_1 m_2 = -1$.",
          formulaReaction: "$\\text{Point-Slope}: y-y_1 = m(x-x_1) \\quad | \\quad \\text{Slope-Intercept}: y = mx+c \\quad | \\quad \\text{Intercept}: \\frac{x}{a}+\\frac{y}{b}=1$",
          shortcuts: "⚡ Angle between lines: $\\tan\\theta = \\left|\\frac{m_1-m_2}{1+m_1 m_2}\\right|$.",
          importantResults: "General Form: $Ax+By+C=0$ has slope $m = -\\frac{A}{B}$."
        }
      },
      {
        subtopic: "Distance Formulas & Triangle Area",
        sections: {
          concept: "Perpendicular distance from point to line and distance between parallel lines.",
          formulaReaction: "$d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}} \\quad | \\quad d_{\\text{parallel}} = \\frac{|C_1-C_2|}{\\sqrt{A^2+B^2}} \\quad | \\quad \\text{Area} = \\frac{1}{2}|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$",
          shortcuts: "⚡ Distance from origin $(0,0)$ to line $Ax+By+C=0$ is $d = \\frac{|C|}{\\sqrt{A^2+B^2}}$.",
          importantResults: "Three points are collinear if the area of the triangle formed by them is 0."
        }
      }
    ]
  },
  {
    id: "m11_ch11",
    chapterNumber: 11,
    chapter: "Conic Sections",
    category: "Coordinate Geometry",
    class: 11,
    subtopics: [
      {
        subtopic: "Circle & Parabola Equations",
        sections: {
          concept: "Circle is locus of points at constant distance $r$ from center $(h,k)$. Parabola is locus of points equidistant from focus and directrix.",
          formulaReaction: "$\\text{Circle}: (x-h)^2+(y-k)^2=r^2, \\; x^2+y^2+2gx+2fy+c=0 \\implies \\text{Center } (-g,-f), r = \\sqrt{g^2+f^2-c}$ \n\n $\\text{Parabola } y^2=4ax: \\text{Focus } (a,0), \\text{Directrix } x=-a, \\text{Latus Rectum } 4a$",
          shortcuts: "⚡ For $x^2=4ay$: Focus is at $(0,a)$, directrix is $y=-a$, opens upwards.",
          importantResults: "Parametric coordinates of $y^2=4ax$ are $(at^2, 2at)$."
        }
      },
      {
        subtopic: "Ellipse & Hyperbola Equations",
        sections: {
          concept: "Ellipse: Sum of distances from two foci is constant $2a$. Hyperbola: Absolute difference of distances from two foci is constant $2a$.",
          formulaReaction: "$\\text{Ellipse}: \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1 \\; (a>b), \\; b^2=a^2(1-e^2), \\; e=\\sqrt{1-\\frac{b^2}{a^2}}, \\; \\text{Foci } (\\pm ae, 0)$ \n\n $\\text{Hyperbola}: \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1, \\; b^2=a^2(e^2-1), \\; e=\\sqrt{1+\\frac{b^2}{a^2}}, \\; \\text{Foci } (\\pm ae, 0)$",
          shortcuts: "⚡ Latus Rectum length for both Ellipse and Hyperbola is $\\frac{2b^2}{a}$.",
          importantResults: "Asymptotes of hyperbola $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ are $y = \\pm \\frac{b}{a}x$."
        }
      }
    ]
  },
  {
    id: "m11_ch12",
    chapterNumber: 12,
    chapter: "Introduction to 3D Geometry",
    category: "3D Geometry & Vectors",
    class: 11,
    subtopics: [
      {
        subtopic: "3D Coordinates & Distance Formula",
        sections: {
          concept: "3D space is divided into 8 octants by coordinate planes. Point $P(x,y,z)$.",
          formulaReaction: "$d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2} \\quad | \\quad \\text{Section Formula}: \\left(\\frac{mx_2+nx_1}{m+n}, \\frac{my_2+ny_1}{m+n}, \\frac{mz_2+nz_1}{m+n}\\right)$",
          shortcuts: "⚡ Midpoint in 3D: $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)$.",
          importantResults: "Distance of point $(x,y,z)$ from origin is $\\sqrt{x^2+y^2+z^2}$."
        }
      }
    ]
  },
  {
    id: "m11_ch13",
    chapterNumber: 13,
    chapter: "Limits and Derivatives",
    category: "Calculus",
    class: 11,
    subtopics: [
      {
        subtopic: "Standard Limits & First Principles",
        sections: {
          concept: "Limit exists if LHL = RHL. Derivative $f'(x)$ represents instantaneous rate of change or slope of tangent.",
          formulaReaction: "$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1, \\; \\lim_{x\\to 0}\\frac{\\tan x}{x} = 1, \\; \\lim_{x\\to 0}\\frac{1-\\cos x}{x^2} = \\frac{1}{2}, \\; \\lim_{x\\to 0}\\frac{e^x-1}{x} = 1, \\; \\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1$ \n\n $\\text{First Principle}: f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}$",
          shortcuts: "⚡ Power Rule Limit: $\\lim_{x\\to a}\\frac{x^n-a^n}{x-a} = n a^{n-1}$. L'Hopital's Rule applies to $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ forms.",
          importantResults: "Standard derivatives: $\\frac{d}{dx}(x^n) = n x^{n-1}, \\frac{d}{dx}(\\sin x) = \\cos x, \\frac{d}{dx}(\\cos x) = -\\sin x$."
        }
      }
    ]
  }
];

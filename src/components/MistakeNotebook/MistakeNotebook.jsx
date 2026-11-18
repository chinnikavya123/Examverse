import React, { useState, useEffect } from 'react';
import { 
  BookMarked, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Filter, 
  Sparkles, 
  Search, 
  BrainCircuit, 
  Trash2,
  Award,
  ChevronRight
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import DiagramRenderer from '../DiagramRenderer';

export default function MistakeNotebook({ pyqQuestions = [] }) {
  // Persistent Mistakes state from localStorage
  const [mistakes, setMistakes] = useState(() => {
    const saved = localStorage.getItem('exam_verse_mistakes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Deduplicate by question ID
          return Array.from(new Map(parsed.map(item => [item.id, item])).values());
        }
      } catch (e) {
        console.error("Error parsing mistakes:", e);
      }
    }
    // Default initial seed of mistakes from paper if empty
    return [
      {
        id: 'PYQ-2025-P34',
        subject: 'Physics',
        chapter: 'Current Electricity',
        difficulty: 'Medium',
        question: 'Sliding contact of a potentiometer is in middle of wire having resistance $R_p = 1\\Omega$ as shown in figure. External resistance $R_e = 2\\Omega$ connected via sliding contact under $0.9\\text{ V}$ supply. Electric current in circuit is:',
        options: ['0.9 A', '1.35 A', '0.3 A', '1.0 A'],
        correctOption: 3,
        userAns: 0,
        diagramType: 'potentiometer',
        status: 'UNRESOLVED',
        errorTag: 'Incorrect Equivalent Resistance Calculation',
        addedAt: new Date().toLocaleDateString(),
        solutions: {
          beginner: "### 🟢 Beginner Level\n#### 1. Formulas:\n- Resistance of half wire: $R_1 = R_2 = R_p / 2 = 0.5\\Omega$\n- Parallel combination: $R_{p,eq} = \\frac{R_1 R_e}{R_1 + R_e}$\n- Total circuit resistance: $R_{total} = R_{p,eq} + R_2$\n\n#### 2. Step-by-Step Derivation:\n- **Step 1:** $R_1 = 0.5\\Omega$ in parallel with $R_e = 2\\Omega$.\n  $$R_{p,eq} = \\frac{0.5 \\times 2}{0.5 + 2} = \\frac{1}{2.5} = 0.4\\Omega$$\n- **Step 2:** Add remaining half wire resistance $R_2 = 0.5\\Omega$.\n  $$R_{total} = 0.4\\Omega + 0.5\\Omega = 0.9\\Omega$$\n- **Step 3:** Current $I = \\frac{V}{R_{total}} = \\frac{0.9\\text{ V}}{0.9\\Omega} = 1.0\\text{ A}$.\n\n#### 3. Answer:\n- **Option (D): 1.0 A**",
          intermediate: "### 🟡 Intermediate Level\n#### 1. Derivation:\n- $R_{parallel} = 0.5 || 2 = 0.4\\Omega$\n- $R_{total} = 0.4 + 0.5 = 0.9\\Omega$\n- $I = 0.9 / 0.9 = 1.0\\text{ A}$\n\n#### 2. Answer:\n- **Option (D): 1.0 A**",
          advanced: "### 🔴 Advanced Level (Topper Hack)\n⚡ **Fast Math:**\n- $R_{eq} = (0.5 || 2) + 0.5 = 0.4 + 0.5 = 0.9\\Omega$\n- $I = V / R = 0.9 / 0.9 = 1.0\\text{ A}$\n\n🎯 **Pick:** **Option (D): 1.0 A**"
        }
      },
      {
        id: 'PYQ-2025-P33',
        subject: 'Physics',
        chapter: 'Semiconductor Electronics',
        difficulty: 'Easy',
        question: 'Which of the following circuit configurations represents a forward biased P-N junction diode?',
        options: ['(A) and (D) only', '(B), (D) and (E) only', '(C) and (E) only', '(B), (C) and (E) only'],
        correctOption: 3,
        userAns: 1,
        diagramType: 'diode_circuits',
        status: 'UNRESOLVED',
        errorTag: 'Misidentified Cathode Potential Sign',
        addedAt: new Date().toLocaleDateString(),
        solutions: {
          beginner: "### 🟢 Beginner Level\n#### 1. Core Concept:\n- A P-N junction diode is **forward biased** when the potential at the P-side ($V_P$) is higher than the potential at the N-side ($V_N$), i.e., $V_P > V_N$.\n\n#### 2. Circuit Analysis:\n- **Circuit B:** $V_P = 0\\text{ V}, V_N = -2\\text{ V} \\implies V_P > V_N$ (Forward Biased)\n- **Circuit C:** $V_P = 2\\text{ V}, V_N = 0\\text{ V} \\implies V_P > V_N$ (Forward Biased)\n- **Circuit E:** $V_P = -1\\text{ V}, V_N = -3\\text{ V} \\implies V_P > V_N$ (Forward Biased)\n\n#### 3. Answer:\n- **Option (D): (B), (C) and (E) only**",
          intermediate: "### 🟡 Intermediate Level\n#### 1. Condition:\n- Forward bias requires $V_P - V_N > 0$.\n- B: $0 - (-2) = +2\\text{ V} > 0$\n- C: $2 - 0 = +2\\text{ V} > 0$\n- E: $-1 - (-3) = +2\\text{ V} > 0$\n\n#### 2. Answer:\n- **Option (D): (B), (C) and (E) only**",
          advanced: "### 🔴 Advanced Level (Topper Hack)\n⚡ **Rule:** $V_P > V_N$ for forward bias.\n- Check potential drops: B, C, E all have $V_P > V_N$.\n\n🎯 **Pick:** **Option (D): (B), (C) and (E) only**"
        }
      },
      {
        id: 'PYQ-2025-M01',
        subject: 'Mathematics',
        chapter: 'Sequences & Series',
        difficulty: 'Medium',
        question: 'Let $a_1, a_2, a_3, \\dots$ be a G.P. of increasing positive terms. If $a_1 a_5 = 28$ and $a_2 + a_4 = 29$, then $a_6$ is equal to:',
        options: ['628', '812', '526', '784'],
        correctOption: 3,
        userAns: null,
        status: 'UNRESOLVED',
        errorTag: 'Skipped - Time Management',
        addedAt: new Date().toLocaleDateString(),
        solutions: {
          beginner: "### 🟢 Beginner Level\n#### 1. Formulas:\n- G.P. $n$-th term $a_n = a_1 r^{n-1}$\n- Property: $a_1 a_5 = a_3^2 = a_2 a_4$\n\n#### 2. Step-by-Step Solution:\n- **Step 1:** $a_2 a_4 = a_1 a_5 = 28$.\n- **Step 2:** Given $a_2 + a_4 = 29$. Form quadratic equation:\n  $$t^2 - 29t + 28 = 0 \\implies (t - 1)(t - 28) = 0$$\n- **Step 3:** Since terms are increasing ($r > 1$), $a_2 = 1$ and $a_4 = 28$.\n- **Step 4:** Common ratio squared $r^2 = a_4 / a_2 = 28$.\n- **Step 5:** Calculate $a_6 = a_4 r^2 = 28 \\times 28 = 784$.\n\n#### 3. Answer:\n- **Option (D): 784**",
          intermediate: "### 🟡 Intermediate Level\n#### 1. Key Relations:\n- $a_2 a_4 = 28$, $a_2 + a_4 = 29 \\implies a_2 = 1, a_4 = 28$.\n- $r^2 = 28 \\implies a_6 = a_4 r^2 = 28 \\times 28 = 784$.\n\n#### 2. Answer:\n- **Option (D): 784**",
          advanced: "### 🔴 Advanced Level (Topper Hack)\n⚡ **Instant Trick:**\n- $a_2 + a_4 = 29$, $a_2 a_4 = 28 \\implies (1, 28)$.\n- $a_6 = a_4 \\cdot r^2 = 28 \\cdot 28 = 784$.\n\n🎯 **Pick:** **Option (D): 784**"
        }
      }
    ];
  });

  // Save deduplicated mistakes to localStorage
  useEffect(() => {
    const deduplicated = Array.from(new Map(mistakes.map(item => [item.id, item])).values());
    localStorage.setItem('exam_verse_mistakes', JSON.stringify(deduplicated));
  }, [mistakes]);

  // Filters & State
  const [selectedSubject, setSelectedSubject] = useState('ALL'); // ALL, Mathematics, Physics, Chemistry
  const [statusFilter, setStatusFilter] = useState('UNRESOLVED'); // UNRESOLVED, MASTERED
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Retry & Solution State
  const [retryAnswers, setRetryAnswers] = useState({}); // { [qId]: optionIdx }
  const [revealedSolutions, setRevealedSolutions] = useState({}); // { [qId]: bool }
  const [solutionLevels, setSolutionLevels] = useState({}); // { [qId]: 'beginner' | 'intermediate' | 'advanced' }

  const setLevelForQ = (qId, level) => {
    setSolutionLevels(prev => ({ ...prev, [qId]: level }));
  };

  const toggleSolution = (qId) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleRetrySelect = (qId, optionIdx) => {
    setRetryAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleMasteredStatus = (qId) => {
    setMistakes(prev => prev.map(m => {
      if (m.id === qId) {
        const nextStatus = m.status === 'MASTERED' ? 'UNRESOLVED' : 'MASTERED';
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  const removeMistake = (qId) => {
    setMistakes(prev => prev.filter(m => m.id !== qId));
  };

  // Filtered list
  const filteredMistakes = mistakes.filter(m => {
    const matchesSubject = selectedSubject === 'ALL' || m.subject === selectedSubject;
    const matchesStatus = m.status === statusFilter;
    const matchesSearch = searchQuery === '' || 
      m.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.chapter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesStatus && matchesSearch;
  });

  // Counts
  const unresolvedCount = mistakes.filter(m => m.status === 'UNRESOLVED').length;
  const masteredCount = mistakes.filter(m => m.status === 'MASTERED').length;
  const mathCount = mistakes.filter(m => m.subject === 'Mathematics' && m.status === 'UNRESOLVED').length;
  const physicsCount = mistakes.filter(m => m.subject === 'Physics' && m.status === 'UNRESOLVED').length;
  const chemCount = mistakes.filter(m => m.subject === 'Chemistry' && m.status === 'UNRESOLVED').length;

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 p-6 sm:p-8 border border-red-500/20 shadow-2xl overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                <BookMarked className="w-3.5 h-3.5" />
                <span>Error Log & Revision Vault</span>
              </span>
              <span className="text-xs font-semibold text-slate-400">JEE Main Smart Revision</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Personal <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">Mistake Notebook</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every mistake is an opportunity to learn. All incorrect or skipped questions from your mock tests & practice sessions are automatically logged here with 3-Level Solutions for rapid concept revision.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-red-500/30 backdrop-blur-md text-center">
              <span className="block text-2xl font-extrabold text-red-400">{unresolvedCount}</span>
              <span className="text-[11px] font-semibold text-slate-400">Needs Revision</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md text-center">
              <span className="block text-2xl font-extrabold text-emerald-400">{masteredCount}</span>
              <span className="text-[11px] font-semibold text-slate-400">Mastered ✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Subject Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        
        {/* Subject Filter Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedSubject('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSubject === 'ALL'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            All Subjects ({mistakes.length})
          </button>
          <button
            onClick={() => setSelectedSubject('Mathematics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSubject === 'Mathematics'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            📐 Math ({mathCount})
          </button>
          <button
            onClick={() => setSelectedSubject('Physics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSubject === 'Physics'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            ⚡ Physics ({physicsCount})
          </button>
          <button
            onClick={() => setSelectedSubject('Chemistry')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSubject === 'Chemistry'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            🧪 Chemistry ({chemCount})
          </button>
        </div>

        {/* Status Toggle & Search */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setStatusFilter('UNRESOLVED')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                statusFilter === 'UNRESOLVED'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🔴 Unresolved ({unresolvedCount})
            </button>
            <button
              onClick={() => setStatusFilter('MASTERED')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                statusFilter === 'MASTERED'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🟢 Revised ({masteredCount})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Mistake Cards List */}
      <div className="space-y-4">
        {filteredMistakes.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-slate-200">No Mistakes Found!</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              {statusFilter === 'UNRESOLVED' 
                ? 'Great job! You have revised and mastered all logged mistakes in this subject.'
                : 'No mastered mistakes yet. Attempt unresolved questions and mark them as mastered!'}
            </p>
          </div>
        ) : (
          filteredMistakes.map((item, idx) => {
            const isRevealed = revealedSolutions[item.id];
            const userRetryPick = retryAnswers[item.id];

            // Direct dynamic lookup from pyqQuestions dataset to guarantee solutions exist
            const fullQ = pyqQuestions.find(q => q.id === item.id) || item;
            const solutionsObj = fullQ.solutions || item.solutions;
            const fallbackSolution = fullQ.solution || item.solution;
            const activeLevel = solutionLevels[item.id] || 'beginner';
            const solutionText = solutionsObj 
              ? (solutionsObj[activeLevel] || solutionsObj['beginner']) 
              : fallbackSolution;

            return (
              <div 
                key={item.id || idx}
                className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-xl"
              >
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {item.subject} • {item.chapter}
                    </span>
                    {item.errorTag && (
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-red-400" />
                        <span>{item.errorTag}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleMasteredStatus(item.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                        item.status === 'MASTERED'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.status === 'MASTERED' ? 'Mastered ✅' : 'Mark as Mastered'}</span>
                    </button>

                    <button
                      onClick={() => removeMistake(item.id)}
                      className="p-1.5 rounded-xl bg-slate-950 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors"
                      title="Remove from notebook"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Statement */}
                <div className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
                  <KatexRenderer text={item.question || fullQ.question} />
                </div>

                {/* SVG Vector Diagram if present */}
                {(item.diagramType || fullQ.diagramType) && (
                  <DiagramRenderer type={item.diagramType || fullQ.diagramType} />
                )}

                {/* Interactive Options Grid (Retry Mode) */}
                {(fullQ.options || item.options) && (
                  <div className="grid gap-2 text-xs pt-1">
                    {(fullQ.options || item.options).map((opt, oIdx) => {
                      const targetCorrectOpt = fullQ.correctOption !== undefined ? fullQ.correctOption : item.correctOption;
                      const isCorrect = oIdx === targetCorrectOpt;
                      const isUserInitialPick = oIdx === item.userAns;
                      const isUserRetryPick = userRetryPick === oIdx;

                      let style = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                      if (isRevealed) {
                        if (isCorrect) {
                          style = "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold";
                        } else if (isUserRetryPick && !isCorrect) {
                          style = "bg-red-500/15 border-red-500/40 text-red-300";
                        }
                      } else if (isUserRetryPick) {
                        style = "bg-indigo-600/20 border-indigo-500/50 text-indigo-200 font-semibold";
                      }

                      return (
                        <div
                          key={oIdx}
                          onClick={() => handleRetrySelect(item.id, oIdx)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${style}`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="font-mono font-bold text-slate-400">({String.fromCharCode(65 + oIdx)})</span>
                            <KatexRenderer text={opt} />
                          </div>
                          
                          <div className="flex items-center space-x-2 text-[10px] font-bold">
                            {isUserInitialPick && (
                              <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">Past Error</span>
                            )}
                            {isRevealed && isCorrect && (
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Correct Answer</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* NVQ Numerical Input Display if present */}
                {!(item.options || fullQ.options) && (item.correctValue !== undefined || fullQ.correctValue !== undefined) && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-amber-300">
                    Numerical Correct Answer: <strong className="font-mono text-white text-sm"><KatexRenderer text={String(item.correctValue || fullQ.correctValue)} inline={true} /></strong>
                  </div>
                )}

                {/* Action Row: Solution Toggle */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => toggleSolution(item.id)}
                    className="flex items-center space-x-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>{isRevealed ? 'Hide 3-Level Solution' : 'Explore 3-Level Solution (Beginner / Inter / Adv)'}</span>
                  </button>
                </div>

                {/* Step-by-step 3-Level Solution Box */}
                {isRevealed && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4 shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                      <h5 className="font-extrabold text-emerald-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>3-Level Solution Explorer:</span>
                      </h5>

                      {/* Level Selector Tabs */}
                      <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px]">
                        <button
                          onClick={() => setLevelForQ(item.id, 'beginner')}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            activeLevel === 'beginner'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🟢 Beginner
                        </button>
                        <button
                          onClick={() => setLevelForQ(item.id, 'intermediate')}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            activeLevel === 'intermediate'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🟡 Intermediate
                        </button>
                        <button
                          onClick={() => setLevelForQ(item.id, 'advanced')}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            activeLevel === 'advanced'
                              ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🔴 Advanced (Topper Hack)
                        </button>
                      </div>
                    </div>

                    <div className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                      <KatexRenderer text={solutionText} />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

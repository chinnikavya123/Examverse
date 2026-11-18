import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import KatexRenderer from '../KatexRenderer';
import DiagramRenderer from '../DiagramRenderer';
import { publicAsset } from '../../utils/publicAsset';

export default function PostTestAnalysis({ resultData, preset, onRetakeTest }) {
  const {
    testMode,
    totalScore,
    maxMarks,
    correctCount,
    incorrectCount,
    unattemptedCount,
    userAnswers,
    questions,
    subjectBreakup,
    timeTakenSecs
  } = resultData;

  const totalQuestions = questions.length;
  const accuracy = (correctCount + incorrectCount) > 0 
    ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
    : 0;

  // Rank predictor heuristic
  const scorePercent = maxMarks > 0 ? Math.max(0, (totalScore / maxMarks) * 100) : 0;
  let predictedRank = "AIR 15,000+";
  if (scorePercent >= 85) predictedRank = "AIR 100 - 500 🚀";
  else if (scorePercent >= 70) predictedRank = "AIR 500 - 2,000 🔥";
  else if (scorePercent >= 50) predictedRank = "AIR 2,000 - 8,000 ⭐";
  else if (scorePercent >= 35) predictedRank = "AIR 8,000 - 20,000";

  // Helper to check if user's answer is correct
  const checkQuestionCorrect = (q, ans) => {
    if (ans === undefined || ans === '' || (Array.isArray(ans) && ans.length === 0)) {
      return false;
    }
    if (q.type === 'MULTI' || q.type === 'MCQ') {
      const target = Array.isArray(q.correctOption) ? q.correctOption : (q.correctOptions || []);
      return Array.isArray(ans) && JSON.stringify(ans.slice().sort()) === JSON.stringify(target.slice().sort());
    }
    if (q.type === 'NUMERICAL' || q.type === 'NVQ' || (!q.options || q.options.length === 0)) {
      const numAns = parseFloat(ans);
      const targetNum = parseFloat(q.correctValue !== undefined ? q.correctValue : q.correctAnswer);
      return !isNaN(numAns) && !isNaN(targetNum) && Math.abs(numAns - targetNum) <= (q.tolerance || 0.1);
    }
    return ans === q.correctOption;
  };

  // Trigger celebration confetti on good score & Auto-log mistakes to Mistake Notebook
  useEffect(() => {
    if (scorePercent >= 50) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    try {
      const savedMistakes = localStorage.getItem('exam_verse_mistakes');
      let currentMistakes = savedMistakes ? JSON.parse(savedMistakes) : [];

      (questions || []).forEach(q => {
        const uAns = userAnswers ? userAnswers[q.id] : undefined;
        const isCorrect = checkQuestionCorrect(q, uAns);
        const isAttempted = uAns !== undefined && uAns !== null && (!Array.isArray(uAns) || uAns.length > 0);

        if (!isCorrect) {
          const errorTag = !isAttempted ? 'Skipped in Test' : 'Incorrect Option Chosen';
          const exists = currentMistakes.find(m => m.id === q.id);
          if (!exists) {
            currentMistakes.push({
              id: q.id,
              subject: q.subject,
              chapter: q.chapter,
              difficulty: q.difficulty || 'Medium',
              question: q.question,
              options: q.options,
              correctOption: q.correctOption,
              correctValue: q.correctValue || q.correctAnswer,
              solutions: q.solutions,
              solution: q.solution,
              solutionDiagram: q.solutionDiagram,
              userAns: uAns,
              diagramType: q.diagramType || q.diagram || q.diagramUrl,
              status: 'UNRESOLVED',
              errorTag: errorTag,
              addedAt: new Date().toLocaleDateString()
            });
          }
        }
      });

      localStorage.setItem('exam_verse_mistakes', JSON.stringify(currentMistakes));
    } catch (e) {
      console.error("Error auto-logging mistakes:", e);
    }
  }, []);

  // Filter solutions
  const [filterType, setFilterType] = useState('ALL'); // ALL, CORRECT, INCORRECT, UNATTEMPTED
  const [expandedSolutions, setExpandedSolutions] = useState({});
  const [solutionLevels, setSolutionLevels] = useState({});

  const setLevelForQ = (qId, level) => {
    setSolutionLevels(prev => ({ ...prev, [qId]: level }));
  };

  const toggleSolution = (qId) => {
    setExpandedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const filteredQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    const isUnattempted = ans === undefined || ans === '' || (Array.isArray(ans) && ans.length === 0);
    
    if (filterType === 'CORRECT') {
      return !isUnattempted && checkQuestionCorrect(q, ans);
    } else if (filterType === 'INCORRECT') {
      return !isUnattempted && !checkQuestionCorrect(q, ans);
    } else if (filterType === 'UNATTEMPTED') {
      return isUnattempted;
    }
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-indigo-500/20 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Completed & Evaluated</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">{preset?.title || testMode} Performance Report</h2>
            <p className="text-slate-300 text-xs mt-1">Detailed analysis of accuracy, rank prediction, and step-by-step solutions.</p>
          </div>

          <button
            onClick={onRetakeTest}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Test</span>
          </button>
        </div>

        {/* Primary Score KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Score */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Total Score</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">
              {totalScore} <span className="text-sm font-normal text-slate-400">/ {maxMarks}</span>
            </div>
          </div>

          {/* Accuracy */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Accuracy Rate</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              {accuracy}%
            </div>
          </div>

          {/* AIR Rank Predictor */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Predicted Rank</span>
            <div className="text-lg sm:text-xl font-extrabold text-amber-400 mt-1">
              {predictedRank}
            </div>
          </div>

          {/* Time Taken */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Time Taken</span>
            <div className="text-xl sm:text-2xl font-extrabold text-purple-400 mt-1 font-mono">
              {Math.floor(timeTakenSecs / 60)}m {timeTakenSecs % 60}s
            </div>
          </div>
        </div>
      </div>

      {/* MPC Subject Breakup */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Subject-wise Score Breakup (MPC)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['Physics', 'Chemistry', 'Mathematics'].map((sub) => {
            const subScore = subjectBreakup[sub] || 0;
            return (
              <div key={sub} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300">{sub}</span>
                  <span className="text-indigo-400">{subScore} Marks</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500 rounded-full" 
                    style={{ width: `${Math.max(0, Math.min(100, (subScore / Math.max(1, maxMarks / 3)) * 100))}%` }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Solution Reviewer Section */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Step-by-Step Solutions & Review</span>
            </h3>
            <p className="text-xs text-slate-400">Inspect full explanations and key concepts for every question.</p>
          </div>

          {/* Solution Filters */}
          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {['ALL', 'CORRECT', 'INCORRECT', 'UNATTEMPTED'].map((f) => (
              <button
                key={f}
                onClick={() => setFilterType(f)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  filterType === f 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Question Solutions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isUnattempted = userAns === undefined || userAns === '' || (Array.isArray(userAns) && userAns.length === 0);
            const isCorrect = checkQuestionCorrect(q, userAns);

            const isExpanded = expandedSolutions[q.id] !== false; // expanded by default

            const posMark = q.marking?.correct || q.marking?.positive || (preset?.category === 'AP EAPCET' ? 1 : 4);
            const negMark = q.marking?.incorrect !== undefined ? Math.abs(q.marking.incorrect) : (preset?.category === 'AP EAPCET' ? 0 : 1);

            return (
              <div key={q.id} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
                {/* Question Header */}
                <div 
                  onClick={() => toggleSolution(q.id)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-850 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-sm font-bold text-white">
                      Q{idx + 1}. [{q.subject} • {q.chapter}]
                    </span>
                    {q.section && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
                        {q.section}
                      </span>
                    )}
                    {isUnattempted ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                        Unattempted
                      </span>
                    ) : isCorrect ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Correct (+{posMark})
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/30 flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> Incorrect ({negMark === 0 ? '0' : `-${negMark}`})
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSolution(q.id);
                    }}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Expanded Question Body & KaTeX Solution */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 space-y-4 border-t border-slate-800/80 bg-slate-950/60">
                    <div className="text-sm text-slate-200 leading-relaxed">
                      <KatexRenderer text={q.question} />
                    </div>

                    {/* Question Diagram if present */}
                    {(q.diagramType || q.diagram || q.diagramUrl) && (
                      <DiagramRenderer type={q.diagramType || q.diagram || q.diagramUrl} />
                    )}

                    {/* Given options */}
                    {q.options && q.options.length > 0 && (
                      <div className="grid gap-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const targetMulti = Array.isArray(q.correctOption) ? q.correctOption : (q.correctOptions || []);
                          const isMulti = q.type === 'MULTI' || q.type === 'MCQ';
                          const isOptionCorrect = isMulti ? targetMulti.includes(oIdx) : oIdx === q.correctOption;
                          const isUserPicked = isMulti ? (Array.isArray(userAns) && userAns.includes(oIdx)) : userAns === oIdx;

                          let optionClass = "bg-slate-900 border-slate-800 text-slate-300";
                          if (isOptionCorrect) {
                            optionClass = "bg-emerald-600/15 border-emerald-500/40 text-emerald-300 font-medium";
                          } else if (isUserPicked && !isOptionCorrect) {
                            optionClass = "bg-red-600/15 border-red-500/40 text-red-300";
                          }

                          return (
                            <div key={oIdx} className={`p-3 rounded-xl border flex items-center justify-between ${optionClass}`}>
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-slate-400">({String.fromCharCode(65 + oIdx)})</span>
                                <KatexRenderer text={opt} />
                              </div>
                              <div className="flex items-center gap-2">
                                {isOptionCorrect && <span className="text-[10px] font-bold text-emerald-400">Correct Choice</span>}
                                {isUserPicked && !isOptionCorrect && <span className="text-[10px] font-bold text-red-400">Your Choice</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Numerical / Value Answer Display */}
                    {(!q.options || q.options.length === 0) && (
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <span className="text-slate-400">Correct Value: </span>
                          <span className="font-mono font-bold text-emerald-400">{q.correctValue !== undefined ? q.correctValue : q.correctAnswer}</span>
                        </div>
                        {userAns !== undefined && userAns !== '' && (
                          <div>
                            <span className="text-slate-400">Your Answer: </span>
                            <span className={`font-mono font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>{userAns}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Solution Diagram if present */}
                    {q.solutionDiagram && (
                      <div className="my-3 flex flex-col items-center">
                        <div className="bg-white rounded-2xl p-3 border border-slate-700 shadow-md max-w-xl w-full flex items-center justify-center">
                          <img src={publicAsset(q.solutionDiagram)} alt="Solution Diagram" className="max-h-72 object-contain rounded-lg" />
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1">Figure for Solution</span>
                      </div>
                    )}

                    {/* Step-by-step Solution */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs space-y-3">
                      {q.solutions && Object.keys(q.solutions).length > 1 ? (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                          <h4 className="font-bold text-emerald-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span>3-Level Solution Explorer:</span>
                          </h4>
                          
                          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[10px]">
                            <button
                              onClick={() => setLevelForQ(q.id, 'beginner')}
                              className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                                (solutionLevels[q.id] || 'beginner') === 'beginner'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              🟢 Basic
                            </button>
                            <button
                              onClick={() => setLevelForQ(q.id, 'intermediate')}
                              className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                                solutionLevels[q.id] === 'intermediate'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              🟡 Intermediate
                            </button>
                            <button
                              onClick={() => setLevelForQ(q.id, 'advanced')}
                              className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                                solutionLevels[q.id] === 'advanced'
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              🔴 Advanced
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-b border-slate-800 pb-2">
                          <h4 className="font-bold text-emerald-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Step-by-Step Solution:</span>
                          </h4>
                        </div>
                      )}

                      <div className="text-slate-200 leading-relaxed font-sans overflow-x-auto space-y-3">
                        <KatexRenderer 
                          text={
                            (q.solutions && q.solutions[solutionLevels[q.id] || 'beginner'])
                              || (q.solutions && q.solutions.beginner)
                              || q.solution
                              || "Official solution is available."
                          } 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
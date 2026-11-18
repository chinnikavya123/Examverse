import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  User, 
  HelpCircle, 
  Send, 
  RotateCcw, 
  Bookmark, 
  FileText, 
  Maximize2, 
  X, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CheckSquare,
  Square
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import DiagramRenderer from '../DiagramRenderer';
import QuestionPalette from './QuestionPalette';

export default function CbtPlayer({ testMode, preset, questionsData, onCompleteTest }) {
  const allPool = Array.isArray(questionsData) ? questionsData : [];

const normalizeTag = (value) => String(value || '')
  .replace(/[^a-z0-9]/gi, '')
  .toLowerCase();

const targetTag = normalizeTag(preset?.shiftTag);
const yearMatch = String(preset?.id || '').match(/20\d{2}/);
const targetYear = yearMatch ? yearMatch[0] : null;

let questions = [];

if (preset?.category === 'JEE Main') {
  questions = allPool.filter(q => {
    const questionShift = normalizeTag(q.shift);

    return (
      (q.exam === 'JEE Main' || !q.exam) &&
      (!q.year || String(q.year) === targetYear) &&
      questionShift.length > 0 &&
      targetTag.endsWith(questionShift)
    );
  });
} else if (preset?.category === 'JEE Advanced') {
  questions = allPool.filter(q =>
    (q.exam === 'JEE Advanced' || q.exam === 'JEE (Advanced)') &&
    normalizeTag(q.paper) === targetTag
  );
} else if (preset?.category === 'AP EAPCET') {
  questions = allPool.filter(q =>
    q.exam === 'AP EAPCET' &&
    String(q.year) === targetYear &&
    normalizeTag(q.shift) === targetTag
  );
}

  const subjects = ['Mathematics', 'Physics', 'Chemistry'];
  
  // Set default subject to first one with questions
  const [currentSubject, setCurrentSubject] = useState(() => {
    for (const sub of ['Physics', 'Mathematics', 'Chemistry']) {
      if (questions.some(q => q.subject === sub)) return sub;
    }
    return 'Physics';
  });

  // Find index of questions for current subject
  const subjectQuestions = questions.filter(q => q.subject === currentSubject);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // User state
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: selectedOption / numericValue / [selectedOptions] }
  const [questionStatus, setQuestionStatus] = useState({}); // { [qId]: 'notVisited' | 'notAnswered' | 'answered' | 'markedReview' | 'ansMarkedReview' }
  const [questionTimeSpent, setQuestionTimeSpent] = useState({}); // { [qId]: seconds }

  // Modals
  const [showQuestionPaper, setShowQuestionPaper] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Timer (3 Hours = 10800 s, configurable for live test)
  const [timeLeft, setTimeLeft] = useState(10800);

  // Current active question
  const currentQuestion = subjectQuestions[activeQuestionIndex] || questions[0];

  // Auto-mark visited on load of current question
  useEffect(() => {
    if (currentQuestion) {
      setQuestionStatus(prev => {
        const currentSt = prev[currentQuestion.id];
        if (!currentSt || currentSt === 'notVisited') {
          return { ...prev, [currentQuestion.id]: 'notAnswered' };
        }
        return prev;
      });
    }
  }, [currentQuestion?.id]);

  // Timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });

      // Track time spent per active question
      if (currentQuestion) {
        setQuestionTimeSpent(prev => ({
          ...prev,
          [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion?.id]);

  // Format timer HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Exam type detection
  const isEapcet = testMode?.toUpperCase().includes('EAPCET') || preset?.category === 'AP EAPCET';
  const isAdvanced = testMode?.toUpperCase().includes('ADVANCED') || preset?.category === 'JEE Advanced';

  const getPosMark = (q) => {
    if (isEapcet) return 1;
    if (isAdvanced) {
      if (q?.marking?.correct !== undefined) return q.marking.correct;
      if (q?.type === 'MCQ') return 4;
      if (q?.type === 'NUMERICAL') return 4;
      return 3;
    }
    return 4; // JEE Main
  };

  const getNegMark = (q) => {
    if (isEapcet) return 0;
    if (isAdvanced) {
      if (q?.marking?.incorrect !== undefined) return Math.abs(q.marking.incorrect);
      if (q?.type === 'MCQ') return 2;
      if (q?.type === 'NUMERICAL') return 0;
      return 1;
    }
    return 1; // JEE Main
  };

  const isMulti = currentQuestion?.type === 'MULTI' || currentQuestion?.type === 'MCQ';

  // Handlers for user interactions
  const handleOptionSelect = (optionIdx) => {
    if (isMulti) {
      const currentArr = Array.isArray(userAnswers[currentQuestion.id]) ? userAnswers[currentQuestion.id] : [];
      const exists = currentArr.includes(optionIdx);
      const newArr = exists ? currentArr.filter(i => i !== optionIdx) : [...currentArr, optionIdx];
      setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: newArr }));
    } else {
      setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIdx }));
    }
  };

  const handleNumericChange = (val) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handleClearResponse = () => {
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
    setQuestionStatus(prev => ({ ...prev, [currentQuestion.id]: 'notAnswered' }));
  };

  const handleSaveAndNext = () => {
    const ans = userAnswers[currentQuestion.id];
    const isAnswered = ans !== undefined && ans !== '' && (!Array.isArray(ans) || ans.length > 0);

    setQuestionStatus(prev => ({
      ...prev,
      [currentQuestion.id]: isAnswered ? 'answered' : 'notAnswered'
    }));

    // Advance index
    if (activeQuestionIndex < subjectQuestions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    const ans = userAnswers[currentQuestion.id];
    const isAnswered = ans !== undefined && ans !== '' && (!Array.isArray(ans) || ans.length > 0);

    setQuestionStatus(prev => ({
      ...prev,
      [currentQuestion.id]: isAnswered ? 'ansMarkedReview' : 'markedReview'
    }));

    if (activeQuestionIndex < subjectQuestions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const handleFinalSubmit = () => {
    let totalScore = 0;
    let maxMarks = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const subjectBreakup = { Physics: 0, Chemistry: 0, Mathematics: 0 };

    questions.forEach(q => {
      const ans = userAnswers[q.id];
      const isUnattempted = ans === undefined || ans === '' || (Array.isArray(ans) && ans.length === 0);

      const posMark = getPosMark(q);
      const negMark = getNegMark(q);

      maxMarks += posMark;

      if (isUnattempted) {
        unattemptedCount++;
      } else {
        let isCorrect = false;

        if (q.type === 'MULTI' || q.type === 'MCQ') {
          const target = Array.isArray(q.correctOption) ? q.correctOption : (q.correctOptions || []);
          isCorrect = Array.isArray(ans) && JSON.stringify(ans.slice().sort()) === JSON.stringify(target.slice().sort());
        } else if (q.type === 'NUMERICAL' || q.type === 'NVQ' || (!q.options || q.options.length === 0)) {
          const numAns = parseFloat(ans);
          const targetNum = parseFloat(q.correctValue !== undefined ? q.correctValue : q.correctAnswer);
          if (!isNaN(numAns) && !isNaN(targetNum)) {
            isCorrect = Math.abs(numAns - targetNum) <= (q.tolerance || 0.1);
          }
        } else {
          isCorrect = ans === q.correctOption;
        }

        if (isCorrect) {
          totalScore += posMark;
          correctCount++;
          subjectBreakup[q.subject] = (subjectBreakup[q.subject] || 0) + posMark;
        } else {
          totalScore -= negMark;
          incorrectCount++;
          subjectBreakup[q.subject] = (subjectBreakup[q.subject] || 0) - negMark;
        }
      }
    });

    onCompleteTest({
      testMode: preset?.title || testMode,
      totalScore,
      maxMarks,
      correctCount,
      incorrectCount,
      unattemptedCount,
      userAnswers,
      questionStatus,
      questionTimeSpent,
      questions,
      subjectBreakup,
      timeTakenSecs: 10800 - timeLeft
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Top CBT Header Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-4">
          <div className="px-3 py-1 rounded-lg bg-indigo-600/20 border border-indigo-500/30">
            <span className="text-xs font-extrabold text-indigo-300 tracking-wide uppercase">
              {preset?.title || testMode}
            </span>
          </div>

          {/* Subject Switcher Tabs */}
          <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {subjects.map((sub) => {
              const count = questions.filter(q => q.subject === sub).length;
              if (count === 0) return null;
              return (
                <button
                  key={sub}
                  onClick={() => {
                    setCurrentSubject(sub);
                    setActiveQuestionIndex(0);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    currentSubject === sub
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{sub}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    currentSubject === sub ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Info: Timer & Candidate Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800">
            <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
            <div className="text-right leading-none">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Time Remaining</span>
              <span className={`font-mono text-sm font-extrabold ${timeLeft < 300 ? 'text-red-400' : 'text-amber-400'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 border-l border-slate-800 pl-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-xs">
              <User className="w-4 h-4" />
            </div>
            <div className="leading-tight text-xs">
              <span className="font-bold text-white block">Candidate</span>
              <span className="text-[10px] text-slate-400">Roll: 2026-CBT-ENGINE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Question Area */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Question Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-extrabold text-white">
                Question No. {activeQuestionIndex + 1}
              </span>

              {currentQuestion?.section && (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {currentQuestion.section}
                </span>
              )}

              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {currentQuestion?.type === 'MCQ' || currentQuestion?.type === 'MULTI'
                  ? 'Multiple Correct (MCQ)'
                  : currentQuestion?.type === 'NUMERICAL' || currentQuestion?.type === 'NVQ'
                  ? 'Numerical Value'
                  : currentQuestion?.type === 'MATCHING'
                  ? 'Match List'
                  : 'Single Choice (SCQ)'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                +{getPosMark(currentQuestion)} Marks
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 font-bold">
                {getNegMark(currentQuestion) === 0 ? '0 Mark (No -ve)' : `-${getNegMark(currentQuestion)} Mark`}
              </span>
            </div>
          </div>

          {/* Question Text Box with KaTeX */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 text-sm sm:text-base leading-relaxed space-y-4 shadow-sm">
            <KatexRenderer text={currentQuestion?.question} />
            {(currentQuestion?.diagramType || currentQuestion?.diagram || currentQuestion?.diagramUrl) && (
              <DiagramRenderer type={currentQuestion.diagramType || currentQuestion.diagram || currentQuestion.diagramUrl} />
            )}
          </div>

          {/* Options / Answer Input Area */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Answer:</p>
            
            {/* Multiple Choice Notice */}
            {isMulti && (
              <div className="text-xs text-amber-400 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <span>⚠️ One or more than one option may be correct. Check all correct options.</span>
              </div>
            )}

            {/* Single / Multiple Choice Options */}
            {(currentQuestion?.options && currentQuestion.options.length > 0) && (
              <div className="grid gap-3">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = isMulti
                    ? Array.isArray(userAnswers[currentQuestion.id]) && userAnswers[currentQuestion.id].includes(idx)
                    : userAnswers[currentQuestion.id] === idx;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 ${
                        isSelected 
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/50' 
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className={`w-6 h-6 ${isMulti ? 'rounded-md' : 'rounded-full'} border flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700 text-slate-400'
                      }`}>
                        {isSelected && isMulti ? '✓' : String.fromCharCode(65 + idx)}
                      </div>
                      <div className="text-sm font-medium flex-1">
                        <KatexRenderer text={opt} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Numerical Value Input */}
            {(!currentQuestion?.options || currentQuestion.options.length === 0) && (
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 max-w-md">
                <label className="text-xs font-bold text-slate-300 block">
                  Enter Numerical Value (e.g. 13 or 5.92):
                </label>
                <input
                  type="number"
                  step="any"
                  value={userAnswers[currentQuestion.id] || ''}
                  onChange={(e) => handleNumericChange(e.target.value)}
                  placeholder="Type numerical answer..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar Question Palette */}
        <div className="w-80 hidden lg:block p-4 bg-slate-950 border-l border-slate-800">
          <QuestionPalette
            questions={subjectQuestions}
            userAnswers={userAnswers}
            questionStatus={questionStatus}
            currentSubject={currentSubject}
            activeQuestionIndex={activeQuestionIndex}
            onSelectQuestion={(idx) => setActiveQuestionIndex(idx)}
          />
        </div>
      </div>

      {/* Bottom Action Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleMarkForReviewAndNext}
            className="px-4 py-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 text-xs font-bold hover:bg-purple-600/30 transition-colors"
          >
            Mark for Review & Next
          </button>
          <button
            onClick={handleClearResponse}
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            Clear Response
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Question Paper</span>
          </button>

          <button
            onClick={handleSaveAndNext}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
          >
            Save & Next
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
          >
            Submit Test
          </button>
        </div>
      </footer>

      {/* Question Paper Full View Modal */}
      {showQuestionPaper && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <h3 className="text-base font-bold text-white">Full Question Paper View ({currentSubject})</h3>
              <button onClick={() => setShowQuestionPaper(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
              {subjectQuestions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-indigo-400">Q{idx + 1}</div>
                  <div className="text-sm text-slate-200">
                    <KatexRenderer text={q.question} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Submit Test Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
              <h3 className="text-lg font-extrabold text-white">Submit Exam Confirmation</h3>
            </div>
            <p className="text-xs text-slate-300">Are you sure you want to finish and submit your test? Here is your question summary:</p>

            <div className="grid grid-cols-2 gap-3 text-xs font-medium text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div>Total Questions: <span className="font-bold text-white">{questions.length}</span></div>
              <div>Answered: <span className="font-bold text-emerald-400">{Object.values(questionStatus).filter(s => s === 'answered' || s === 'ansMarkedReview').length}</span></div>
              <div>Not Answered: <span className="font-bold text-red-400">{Object.values(questionStatus).filter(s => s === 'notAnswered').length}</span></div>
              <div>Marked for Review: <span className="font-bold text-purple-400">{Object.values(questionStatus).filter(s => s === 'markedReview').length}</span></div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Resume Test
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 shadow-lg shadow-emerald-600/30"
              >
                Final Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
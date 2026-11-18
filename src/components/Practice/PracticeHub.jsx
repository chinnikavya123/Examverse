import React, { useState, useMemo } from 'react';
import { 
  Atom, 
  Calculator, 
  FlaskConical, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  Maximize2, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Target,
  HelpCircle
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import { publicAsset } from '../../utils/publicAsset';
import practiceData from '../../data/practiceQuestionsData.json';

export default function PracticeHub({ bookmarks = [], onToggleBookmark }) {
  const [activeSubject, setActiveSubject] = useState('physics');
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(50);

  // Interactivity state
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({}); // { [qId]: optionLetter }
  const [mcqSelections, setMcqSelections] = useState({});     // { [qId]: [optionLetter, ...] }
  const [mcqSubmitted, setMcqSubmitted] = useState({});       // { [qId]: true }
  const [numericalInputs, setNumericalInputs] = useState({}); // { [qId]: string }
  const [numericalSubmitted, setNumericalSubmitted] = useState({}); // { [qId]: true }
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Subject question list: all questions belonging to currently active subject
  const currentSubjectQuestions = useMemo(() => {
    return practiceData[activeSubject] || [];
  }, [activeSubject]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return currentSubjectQuestions.filter(q => {
      if (selectedType !== 'ALL' && q.type !== selectedType) return false;
      if (showBookmarksOnly && !bookmarks.includes(q.id)) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const textMatch = q.question.toLowerCase().includes(query);
        const sourceMatch = q.examSource?.toLowerCase().includes(query);
        if (!textMatch && !sourceMatch) return false;
      }
      return true;
    });
  }, [currentSubjectQuestions, selectedType, showBookmarksOnly, bookmarks, searchQuery]);

  // Sliced questions for optimal DOM performance
  const displayedQuestions = useMemo(() => {
    return filteredQuestions.slice(0, visibleCount);
  }, [filteredQuestions, visibleCount]);

  // Switch subject cleanly
  const handleSwitchSubject = (subjectKey) => {
    setActiveSubject(subjectKey);
    setSelectedType('ALL');
    setSearchQuery('');
    setVisibleCount(50);
  };

  // Global solution reveal actions
  const toggleSolution = (id) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRevealAll = () => {
    const next = {};
    displayedQuestions.forEach(q => { next[q.id] = true; });
    setRevealedSolutions(next);
  };

  const handleHideAll = () => {
    setRevealedSolutions({});
  };

  const handleSelectScq = (qId, optionLetter) => {
    setSelectedOptions(prev => ({ ...prev, [qId]: optionLetter }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  const handleToggleMcq = (qId, optionLetter) => {
    if (mcqSubmitted[qId]) return;
    setMcqSelections(prev => {
      const current = prev[qId] || [];
      if (current.includes(optionLetter)) {
        return { ...prev, [qId]: current.filter(l => l !== optionLetter) };
      } else {
        return { ...prev, [qId]: [...current, optionLetter].sort() };
      }
    });
  };

  const handleSubmitMcq = (qId) => {
    setMcqSubmitted(prev => ({ ...prev, [qId]: true }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  const handleSubmitNumerical = (qId) => {
    setNumericalSubmitted(prev => ({ ...prev, [qId]: true }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  const handleResetQuestion = (qId) => {
    setSelectedOptions(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setMcqSelections(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setMcqSubmitted(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setNumericalInputs(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setNumericalSubmitted(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setRevealedSolutions(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  // Helper to extract option letter 'A', 'B', 'C', 'D'
  const getOptionLetter = (optText, idx) => {
    if (!optText) return String.fromCharCode(65 + idx);
    const match = optText.match(/^\(([A-D])\)/i);
    if (match) return match[1].toUpperCase();
    return String.fromCharCode(65 + idx);
  };

  // Render option text without the leading (A), (B), etc.
  const getOptionCleanText = (optText, letter = '') => {
    if (!optText) return `Option ${letter}`;
    const rawClean = optText.replace(/^\([A-D]\)\s*/i, '').trim();
    if (!rawClean || rawClean.length === 0) return `Option ${letter}`;
    
    // Filter out metadata lines if any (Topic, Chapter, etc.)
    const lines = rawClean
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0 && !/^(topic|chapter|hydrocarbons|alkenes|alkanes|alkynes|current electricity|equation of a straight)/i.test(l));
      
    if (lines.length === 0) return `Option ${letter}`;

    // If it's a broken column of single letters (like H\nH\nMe) or average line length <= 3.5 with >= 3 lines:
    if (lines.length >= 3) {
      const avgLen = lines.reduce((acc, l) => acc + l.length, 0) / lines.length;
      if (avgLen <= 3.5 || lines.some(l => /^[\|\+\-\=\x01-\x1f]$/.test(l))) {
        return `Option ${letter}`;
      }
    }
    
    // Always collapse all internal whitespace and newlines to a single space
    return lines.join(' ').replace(/\s+/g, ' ');
  };

  // Counts
  const phyCount = (practiceData.physics || []).length;
  const chmCount = (practiceData.chemistry || []).length;
  const mthCount = (practiceData.mathematics || []).length;

  // Subject theme info
  const subjectMeta = {
    physics: {
      title: 'Physics Practice Questions',
      desc: 'All authentic Physics practice questions with comprehensive step-by-step derivations and high-resolution diagrams.',
      badgeColor: 'from-cyan-600 to-indigo-600',
      icon: Atom,
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
    },
    chemistry: {
      title: 'Chemistry Practice Questions',
      desc: 'All authentic Chemistry practice questions with complete solutions and reaction schemes.',
      badgeColor: 'from-emerald-600 to-teal-600',
      icon: FlaskConical,
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
    },
    mathematics: {
      title: 'Mathematics Practice Questions',
      desc: 'All authentic Mathematics practice questions with detailed step-by-step derivations.',
      badgeColor: 'from-amber-600 to-orange-600',
      icon: Calculator,
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400'
    }
  };

  const currentMeta = subjectMeta[activeSubject] || subjectMeta.physics;
  const CurrentIcon = currentMeta.icon;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner & Subject Segregation */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Target className="w-4 h-4 text-indigo-400" />
              <span>Dedicated Practice Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Subject Practice Questions
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Solve high-yield, curated advanced level questions with comprehensive step-by-step derivations and high-resolution diagrams.
            </p>
          </div>

          {/* Subject Switcher Pills */}
          <div className="flex items-center bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => handleSwitchSubject('physics')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubject === 'physics'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Atom className="w-4 h-4" />
              <span>Physics</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 ml-1">
                {phyCount} Qs
              </span>
            </button>

            <button
              onClick={() => handleSwitchSubject('mathematics')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubject === 'mathematics'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Mathematics</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 ml-1">
                {mthCount} Qs
              </span>
            </button>

            <button
              onClick={() => handleSwitchSubject('chemistry')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubject === 'chemistry'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Chemistry</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 ml-1">
                {chmCount} Qs
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Subject Focus Header Bar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${currentMeta.iconBg}`}>
            <CurrentIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-bold text-white">{currentMeta.title}</h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                {filteredQuestions.length} Questions
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {currentMeta.desc}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleRevealAll}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>Show Visible Solutions</span>
          </button>
          <button
            onClick={handleHideAll}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1.5 transition-colors"
          >
            <EyeOff className="w-3.5 h-3.5 text-slate-400" />
            <span>Hide All</span>
          </button>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(25); }}
              placeholder="Search questions by formula, concept, or year (e.g. 2024, drift, skew, alkene)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['ALL', 'SCQ', 'MCQ', 'Numerical'].map(type => (
              <button
                key={type}
                onClick={() => { setSelectedType(type); setVisibleCount(25); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {type === 'ALL' ? 'All Types' : type}
              </button>
            ))}
          </div>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => { setShowBookmarksOnly(!showBookmarksOnly); setVisibleCount(50); }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              showBookmarksOnly
                ? 'bg-pink-600/20 text-pink-300 border-pink-500/40'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-pink-400" />
            <span>Saved ({bookmarks.length})</span>
          </button>
        </div>
      </div>

      {/* Questions Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-slate-200">{displayedQuestions.length}</strong> of {filteredQuestions.length} {activeSubject.charAt(0).toUpperCase() + activeSubject.slice(1)} questions
        </span>
      </div>

      {/* Question Cards List */}
      <div className="space-y-6">
        {displayedQuestions.map((q, index) => {
          const isBookmarked = bookmarks.includes(q.id);
          const isSolutionRevealed = revealedSolutions[q.id];
          const userScqChoice = selectedOptions[q.id];
          const userMcqList = mcqSelections[q.id] || [];
          const isMcqDone = mcqSubmitted[q.id];
          const userNumInput = numericalInputs[q.id] || '';
          const isNumDone = numericalSubmitted[q.id];

          return (
            <div 
              key={q.id} 
              className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-lg transition-all hover:border-slate-700/80"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-bold text-xs">
                    Q{index + 1}
                  </span>
                  {q.examSource && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {q.examSource}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {q.type}
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handleResetQuestion(q.id)}
                    title="Reset attempt"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleBookmark?.(q.id)}
                    title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked 
                        ? 'text-pink-400 bg-pink-500/10 hover:bg-pink-500/20' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Question Statement */}
              <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-3 font-normal mb-4">
                <KatexRenderer text={q.question} />
              </div>

              {/* Question Diagram (if present) */}
              {q.diagram && (
                <div className="my-4 flex flex-col items-center">
                  <div 
                    onClick={() => setEnlargedImage(q.diagram)}
                    className="relative group cursor-pointer bg-white p-3 rounded-xl border border-slate-700 shadow-md inline-block max-w-full overflow-hidden hover:shadow-indigo-500/20 transition-all"
                  >
                    <img 
                      src={publicAsset(q.diagram)} 
                      alt={`Figure for ${q.id}`} 
                      className="max-h-80 object-contain rounded"
                    />
                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                      <span className="bg-slate-900/90 text-white text-xs px-2.5 py-1 rounded-md flex items-center space-x-1 shadow">
                        <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Click to Zoom</span>
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1">Figure for Question {index + 1} (click to expand)</span>
                </div>
              )}

              {/* Options (for SCQ & Matching) */}
              {(q.type === 'SCQ' || q.type === 'Matching') && q.options && q.options.length > 0 && (
                <div className="space-y-2.5 my-4">
                  {q.options.map((opt, optIdx) => {
                    const letter = getOptionLetter(opt, optIdx);
                    const isSelected = userScqChoice === letter;
                    const isCorrectAnswer = q.correctAnswer === letter;
                    
                    let buttonStyle = 'bg-slate-950/70 border-slate-800/90 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700';
                    if (userScqChoice) {
                      if (isCorrectAnswer) {
                        buttonStyle = 'bg-emerald-950/50 border-emerald-500/70 text-emerald-200 shadow-sm shadow-emerald-500/10';
                      } else if (isSelected && !isCorrectAnswer) {
                        buttonStyle = 'bg-rose-950/50 border-rose-500/70 text-rose-200 shadow-sm shadow-rose-500/10';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectScq(q.id, letter)}
                        className={`w-full text-left p-3.5 rounded-xl border flex items-start space-x-3 transition-all ${buttonStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          userScqChoice
                            ? isCorrectAnswer 
                              ? 'bg-emerald-500 text-slate-950 font-extrabold'
                              : isSelected
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-800 text-slate-400'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {letter}
                        </span>
                        <div className="text-sm flex-1 leading-relaxed">
                          <KatexRenderer text={getOptionCleanText(opt, letter)} inline />
                        </div>
                        {userScqChoice && isCorrectAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {userScqChoice && isSelected && !isCorrectAnswer && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Options (for MCQ with multiple choices) */}
              {q.type === 'MCQ' && q.options && q.options.length > 0 && (
                <div className="space-y-2.5 my-4">
                  <p className="text-xs text-indigo-400 font-semibold mb-2">
                    One or more than one option may be correct. Select all correct choices and submit:
                  </p>
                  {q.options.map((opt, optIdx) => {
                    const letter = getOptionLetter(opt, optIdx);
                    const isChecked = userMcqList.includes(letter);
                    const correctLetters = Array.isArray(q.correctAnswer)
                      ? q.correctAnswer
                      : q.correctAnswer.split(/[\s,]+/).map(s => s.trim().toUpperCase());
                    const isTargetCorrect = correctLetters.includes(letter);

                    let style = 'bg-slate-950/70 border-slate-800/90 text-slate-300 hover:bg-slate-800/60';
                    if (isMcqDone) {
                      if (isTargetCorrect) {
                        style = 'bg-emerald-950/50 border-emerald-500/70 text-emerald-200';
                      } else if (isChecked && !isTargetCorrect) {
                        style = 'bg-rose-950/50 border-rose-500/70 text-rose-200';
                      }
                    } else if (isChecked) {
                      style = 'bg-indigo-950/50 border-indigo-500 text-indigo-200';
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleToggleMcq(q.id, letter)}
                        className={`p-3.5 rounded-xl border flex items-start space-x-3 cursor-pointer transition-all ${style}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isMcqDone}
                          onChange={() => {}}
                          className="w-4 h-4 mt-1 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-0 pointer-events-none"
                        />
                        <span className="font-bold text-xs text-slate-400 mt-0.5">({letter})</span>
                        <div className="text-sm flex-1 leading-relaxed">
                          <KatexRenderer text={getOptionCleanText(opt, letter)} inline />
                        </div>
                      </div>
                    );
                  })}

                  {!isMcqDone && (
                    <button
                      onClick={() => handleSubmitMcq(q.id)}
                      disabled={userMcqList.length === 0}
                      className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow transition-colors"
                    >
                      Submit Response ({userMcqList.length} Selected)
                    </button>
                  )}
                </div>
              )}

              {/* Numerical Response Box */}
              {q.type === 'Numerical' && (
                <div className="my-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <label className="text-xs text-slate-400 font-medium">
                      Enter your calculated numerical value:
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={userNumInput}
                        disabled={isNumDone}
                        onChange={(e) => setNumericalInputs(prev => ({ ...prev, [q.id]: e.target.value }))}
                        placeholder="e.g. 1027 or 6"
                        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-36"
                      />
                      {!isNumDone && (
                        <button
                          onClick={() => handleSubmitNumerical(q.id)}
                          disabled={!userNumInput.trim()}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 transition-colors shadow"
                        >
                          Check Answer
                        </button>
                      )}
                    </div>
                  </div>

                  {isNumDone && (
                    <div className="flex items-center space-x-2 text-xs pt-1">
                      {userNumInput.trim() === q.correctAnswer.toString().trim() ? (
                        <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correct! The answer is {q.correctAnswer}</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1.5 text-rose-400 font-bold">
                          <XCircle className="w-4 h-4" />
                          <span>Incorrect. Correct answer is: {q.correctAnswer}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Toggle Solution Button */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 mt-4">
                <button
                  onClick={() => toggleSolution(q.id)}
                  className="flex items-center space-x-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {isSolutionRevealed ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Hide Detailed Solution</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      <span>View Step-by-Step Derivation & Explanation</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-500">
                  Official Key: {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                </span>
              </div>

              {/* Expanded Solution View */}
              {isSolutionRevealed && (
                <div className="mt-4 p-5 rounded-xl bg-slate-950 border border-indigo-500/20 shadow-inner space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <div className="flex items-center space-x-2 text-xs font-extrabold text-amber-300">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>COMPLETE STEP-BY-STEP SOLUTION</span>
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      Answer: {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                    </span>
                  </div>

                  {/* Solution Markdown / LaTeX */}
                  <div className="text-slate-300 text-sm leading-relaxed space-y-2">
                    <KatexRenderer text={q.solution} />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Load More Button */}
        {filteredQuestions.length > visibleCount && (
          <div className="pt-4 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 50)}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all"
            >
              Load 50 More Questions ({filteredQuestions.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {filteredQuestions.length === 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center">
            <HelpCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-300">No questions match your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try clearing your search query or selecting "All Types".
            </p>
            <button
              onClick={() => { setSelectedType('ALL'); setSearchQuery(''); setShowBookmarksOnly(false); setVisibleCount(50); }}
              className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          onClick={() => setEnlargedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white p-6 rounded-2xl shadow-2xl border border-slate-700 overflow-auto"
          >
            <button 
              onClick={() => setEnlargedImage(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={publicAsset(enlargedImage)} 
              alt="Enlarged Diagram" 
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

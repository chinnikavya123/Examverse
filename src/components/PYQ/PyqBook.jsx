import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  Sparkles, 
  BookOpen, 
  Award,
  Clock
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import DiagramRenderer from '../DiagramRenderer';

export default function PyqBook({ pyqData, bookmarks, onToggleBookmark }) {
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedExam, setSelectedExam] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedShift, setSelectedShift] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Solved & Solution Level state per question
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [userSelectedOptions, setUserSelectedOptions] = useState({});
  const [userNumericalInputs, setUserNumericalInputs] = useState({}); // { [qId]: "34" }
  const [solutionLevels, setSolutionLevels] = useState({}); // { [qId]: 'beginner' | 'intermediate' | 'advanced' }

  const setLevelForQ = (id, level) => {
    setSolutionLevels(prev => ({ ...prev, [id]: level }));
  };

  const toggleSolution = (id) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (qId, optionIdx) => {
    setUserSelectedOptions(prev => ({ ...prev, [qId]: optionIdx }));
    // Auto reveal solution upon picking choice
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  // Filter PYQs
  const filteredPyqs = pyqData.filter(item => {
    if (showBookmarksOnly && !bookmarks.includes(item.id)) return false;
    if (selectedSubject !== 'ALL' && item.subject !== selectedSubject) return false;
    if (selectedExam !== 'ALL' && item.exam !== selectedExam) return false;
    if (selectedYear !== 'ALL' && item.year?.toString() !== selectedYear) return false;
    if (selectedShift !== 'ALL' && item.shift !== selectedShift) return false;
    if (selectedDifficulty !== 'ALL' && item.difficulty !== selectedDifficulty) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchText = (item.question + item.chapter + item.subject + (item.shift || '')).toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive PYQ Book • JEE Main (2023 – 2026)</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Previous Years Question Bank</h2>
          <p className="text-slate-400 text-sm mt-1">
            Solve authentic past paper questions with instant 3-tier step-by-step solutions (Basic, Intermediate, Advanced) and bookmarking.
          </p>
        </div>

        {/* View Toggle: All vs Bookmarked */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setShowBookmarksOnly(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !showBookmarksOnly ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All PYQs ({pyqData.length})
          </button>
          <button
            onClick={() => setShowBookmarksOnly(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              showBookmarksOnly ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Saved Bookmarks ({bookmarks.length})</span>
          </button>
        </div>
      </div>

      {/* Question Paper & Shift Selector Hub */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Select Question Paper / Shift:</span>
          </h3>
          <span className="text-xs text-slate-500">8 Official Shifts Available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Card for 2026 (23 Jan Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2026 • 23 Jan Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2026 • 23 Jan Shift 1'
                ? 'bg-fuchsia-600/20 border-fuchsia-500 text-white ring-1 ring-fuchsia-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-extrabold border border-fuchsia-500/30">
                JEE Main 2026
              </span>
              <span className="text-[11px] font-semibold text-fuchsia-400">23 Jan S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2026 Jan 23</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 75 Questions</p>
          </div>

          {/* Card for 2026 (21 Jan Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2026 • 21 Jan Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2026 • 21 Jan Shift 1'
                ? 'bg-purple-600/20 border-purple-500 text-white ring-1 ring-purple-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold border border-purple-500/30">
                JEE Main 2026
              </span>
              <span className="text-[11px] font-semibold text-purple-400">21 Jan S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2026 Jan 21</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 75 Questions</p>
          </div>

          {/* Card for 2025 (25 Jan Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2025 • 25 Jan Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2025 • 25 Jan Shift 1'
                ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold border border-blue-500/30">
                JEE Main 2025
              </span>
              <span className="text-[11px] font-semibold text-cyan-400">25 Jan S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2025 Jan 25</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 75 Questions</p>
          </div>

          {/* Card for 2025 (22 Jan Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2025 • 22 Jan Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2025 • 22 Jan Shift 1'
                ? 'bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold border border-indigo-500/30">
                JEE Main 2025
              </span>
              <span className="text-[11px] font-semibold text-emerald-400">22 Jan S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2025 Jan 22</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 75 Questions</p>
          </div>

          {/* Card for 2024 (04 Apr Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2024 • 04 Apr Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2024 • 04 Apr Shift 1'
                ? 'bg-rose-600/20 border-rose-500 text-white ring-1 ring-rose-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/30">
                JEE Main 2024
              </span>
              <span className="text-[11px] font-semibold text-rose-400">04 Apr S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2024 Apr 04</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 90 Questions</p>
          </div>

          {/* Card for 2024 (01 Feb Shift 2) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2024 • 01 Feb Shift 2');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2024 • 01 Feb Shift 2'
                ? 'bg-amber-600/20 border-amber-500 text-white ring-1 ring-amber-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-extrabold border border-amber-500/30">
                JEE Main 2024
              </span>
              <span className="text-[11px] font-semibold text-amber-400">01 Feb S2</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2024 Feb 01</h4>
            <p className="text-[11px] text-slate-400 mt-1">Official Exam Paper</p>
          </div>

          {/* Card for 2023 (24 Jan Shift 1) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2023 • 24 Jan Shift 1');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2023 • 24 Jan Shift 1'
                ? 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                JEE Main 2023
              </span>
              <span className="text-[11px] font-semibold text-teal-400">24 Jan S1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2023 Jan 24</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 90 Questions</p>
          </div>

          {/* Card for 2023 (01 Feb Shift 2) */}
          <div 
            onClick={() => {
              setSelectedExam('JEE Main');
              setSelectedYear('ALL');
              setSelectedShift('JEE Main 2023 • 01 Feb Shift 2');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'JEE Main 2023 • 01 Feb Shift 2'
                ? 'bg-teal-600/20 border-teal-500 text-white ring-1 ring-teal-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold border border-teal-500/30">
                JEE Main 2023
              </span>
              <span className="text-[11px] font-semibold text-teal-300">01 Feb S2</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">2023 Feb 01</h4>
            <p className="text-[11px] text-slate-400 mt-1">Full 90 Questions</p>
          </div>

          {/* Quick Clear / All Papers Card */}
          <div 
            onClick={() => {
              setSelectedExam('ALL');
              setSelectedYear('ALL');
              setSelectedShift('ALL');
              setSelectedSubject('ALL');
            }}
            className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
              selectedShift === 'ALL' && selectedExam === 'ALL'
                ? 'bg-slate-800 border-slate-700 text-white ring-1 ring-slate-600'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-semibold">
                All Archives
              </span>
              <span className="text-[11px] font-semibold text-slate-400">{pyqData.length} PYQs</span>
            </div>
            <h4 className="font-bold text-sm text-slate-200">Show All</h4>
            <p className="text-[11px] text-slate-400 mt-1">Browse all archives</p>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          <Filter className="w-4 h-4 text-indigo-400" />
          <span>Filters & Search</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Search Box */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic or equation..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Exam Filter */}
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Exam Papers</option>
            <option value="JEE Main">JEE Main (Official Shifts)</option>
          </select>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Subjects (MPC)</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Mathematics">Mathematics</option>
          </select>

          {/* Shift Filter */}
          <select
            value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Paper Shifts</option>
            {Array.from(new Set(pyqData.map(item => item.shift).filter(Boolean))).map(shiftVal => (
              <option key={shiftVal} value={shiftVal}>
                {shiftVal.replace('JEE Main ', '')}
              </option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* PYQ Cards List */}
      <div className="space-y-6">
        {filteredPyqs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-300">No PYQs Found</h4>
            <p className="text-xs text-slate-500">Try adjusting your filters or search keywords.</p>
          </div>
        ) : (
          filteredPyqs.map((item) => {
            const isBookmarked = bookmarks.includes(item.id);
            const isRevealed = revealedSolutions[item.id];
            const userPick = userSelectedOptions[item.id];

            return (
              <div 
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all p-6 space-y-4 shadow-lg"
              >
                {/* PYQ Meta Badge Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      {item.shift || 'JEE Main'}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item.subject} • {item.chapter}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400' :
                      item.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>

                  <button
                    onClick={() => onToggleBookmark(item.id)}
                    className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 rounded-xl transition-colors ${
                      isBookmarked 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isBookmarked ? (
                      <>
                        <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                        <span>Bookmarked</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4 h-4" />
                        <span>Save Bookmark</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Question LaTeX Text */}
                <div className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
                  <KatexRenderer text={item.question} />
                </div>

                {/* SVG Diagram if present */}
                {(item.diagramType || item.diagram) && (
                  <DiagramRenderer type={item.diagramType || item.diagram} />
                )}

                {/* Options Grid */}
                {(item.options && item.options.length > 0) && (
                  <div className="grid gap-2 text-xs pt-2">
                    {item.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === item.correctOption;
                      const isPicked = userPick === oIdx;

                      let style = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                      if (isRevealed) {
                        if (isCorrect) {
                          style = "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold";
                        } else if (isPicked && !isCorrect) {
                          style = "bg-red-500/15 border-red-500/40 text-red-300";
                        }
                      }

                      return (
                        <div
                          key={oIdx}
                          onClick={() => handleSelectOption(item.id, oIdx)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${style}`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="font-mono font-bold text-slate-400">({String.fromCharCode(65 + oIdx)})</span>
                            <KatexRenderer text={opt} />
                          </div>
                          {isRevealed && isCorrect && (
                            <span className="text-[10px] font-bold text-emerald-400">Correct Answer</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Render Interactive Numerical Input Box if NVQ (Integer / Value Question) */}
                {(!item.options || item.options.length === 0) && item.correctValue !== undefined && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
                        Integer / Numerical Value Question (NVQ)
                      </span>
                      <span className="text-xs text-slate-400">Calculate & enter your numerical value:</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="number"
                        step="any"
                        placeholder="Type numerical answer..."
                        value={userNumericalInputs[item.id] || ''}
                        onChange={(e) => setUserNumericalInputs(prev => ({ ...prev, [item.id]: e.target.value }))}
                        disabled={isRevealed}
                        className="w-full max-w-xs px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-mono text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
                      />
                      {!isRevealed && (
                        <button
                          onClick={() => toggleSolution(item.id)}
                          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
                        >
                          Check Answer
                        </button>
                      )}
                    </div>

                    {/* Feedback after reveal */}
                    {isRevealed && (
                      <div className={`p-3 rounded-xl border text-xs flex items-center justify-between font-semibold ${
                        userNumericalInputs[item.id]?.trim() === String(item.correctValue).trim()
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                      }`}>
                        <span className="flex items-center gap-1">Correct Answer: <strong className="font-mono font-bold text-white text-sm"><KatexRenderer text={String(item.correctValue)} inline={true} /></strong></span>
                        {userNumericalInputs[item.id] && (
                          <span>Your Input: <strong className="font-mono">{userNumericalInputs[item.id]}</strong> ({userNumericalInputs[item.id]?.trim() === String(item.correctValue).trim() ? '✅ Correct' : '❌ Incorrect'})</span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons: Reveal Answer & Solution */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => toggleSolution(item.id)}
                    className="flex items-center space-x-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{isRevealed ? 'Hide Solution' : 'Reveal Answer'}</span>
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
                            (solutionLevels[item.id] || 'beginner') === 'beginner'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🟢 Basic
                        </button>
                        <button
                          onClick={() => setLevelForQ(item.id, 'intermediate')}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            solutionLevels[item.id] === 'intermediate'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🟡 Intermediate
                        </button>
                        <button
                          onClick={() => setLevelForQ(item.id, 'advanced')}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            solutionLevels[item.id] === 'advanced'
                              ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          🔴 Advanced
                        </button>
                      </div>
                    </div>

                    <div className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans space-y-4">
                      <KatexRenderer 
                        text={
                          (item.solutions && item.solutions[solutionLevels[item.id] || 'beginner'])
                            || (item.solutions && item.solutions.beginner)
                            || item.solution
                            || "Solution is available for this question."
                        } 
                      />
                      {(item.solutionDiagramType || item.solutionDiagram) && (
                        <DiagramRenderer type={item.solutionDiagramType || item.solutionDiagram} />
                      )}
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

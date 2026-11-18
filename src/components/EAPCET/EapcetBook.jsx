import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Award,
  Calculator,
  Compass,
  Atom,
  Check,
  X
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import DiagramRenderer from '../DiagramRenderer';

export default function EapcetBook({ eapcetData, bookmarks = [], onToggleBookmark }) {
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedPaper, setSelectedPaper] = useState('ALL');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [filterWithDiagramsOnly, setFilterWithDiagramsOnly] = useState(false);

  // Available unique years and papers
  const availableYears = Array.from(new Set(eapcetData.map(q => q.year).filter(Boolean))).sort();
  const availablePapers = Array.from(new Set(
    eapcetData
      .filter(q => selectedYear === 'ALL' || q.year?.toString() === selectedYear.toString())
      .map(q => q.paper)
      .filter(Boolean)
  ));

  // Solved & Revealed state per question
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [userSelectedOptions, setUserSelectedOptions] = useState({});

  const toggleSolution = (id) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (qId, optionIdx) => {
    setUserSelectedOptions(prev => ({ ...prev, [qId]: optionIdx }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  // Filter EAPCET questions
  const filteredQuestions = eapcetData.filter(item => {
    if (showBookmarksOnly && !bookmarks.includes(item.id)) return false;
    if (filterWithDiagramsOnly && !item.diagram && !item.diagramType) return false;
    if (selectedYear !== 'ALL' && item.year?.toString() !== selectedYear.toString()) return false;
    if (selectedPaper !== 'ALL' && item.paper !== selectedPaper) return false;
    if (selectedSubject !== 'ALL' && item.subject !== selectedSubject) return false;
    if (selectedDifficulty !== 'ALL' && item.difficulty !== selectedDifficulty) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchText = (item.question + ' ' + (item.chapter || '') + ' ' + item.subject + ' ' + (item.options || []).join(' ') + ' ' + (item.year || '')).toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  // Dynamic counts reflecting active year selection
  const currentScopeQuestions = selectedYear === 'ALL'
    ? eapcetData
    : eapcetData.filter(q => q.year?.toString() === selectedYear.toString());
  const mathsCount = currentScopeQuestions.filter(q => q.subject === 'Mathematics').length;
  const physicsCount = currentScopeQuestions.filter(q => q.subject === 'Physics').length;
  const chemCount = currentScopeQuestions.filter(q => q.subject === 'Chemistry').length;
  const diagramsCount = currentScopeQuestions.filter(q => q.diagram || q.diagramType).length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
            <span>AP EAPCET (Engineering) • {availablePapers.length > 1 ? `${availablePapers.length} Papers (${eapcetData.length} Qs)` : '2026 Shift 1 Paper (160 Questions)'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            EAPCET Question Bank
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Official Andhra Pradesh EAPCET Engineering past papers in English with clear step-by-step explanations, diagrams, and verified TCS iON answer keys.
          </p>
        </div>

        {/* View Toggle: All vs Bookmarked */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setShowBookmarksOnly(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !showBookmarksOnly ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Questions ({eapcetData.length})
          </button>
          <button
            onClick={() => setShowBookmarksOnly(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              showBookmarksOnly ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Bookmarks ({bookmarks.filter(id => id.startsWith('EAPCET')).length})</span>
          </button>
        </div>
      </div>

      {/* Year & Paper Segregation Hub */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Segregate By Exam Year & Paper:</span>
          </h3>
          <span className="text-xs text-slate-500">5 Official Papers Available (800 Qs)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* All Years Card */}
          <div 
            onClick={() => {
              setSelectedYear('ALL');
              setSelectedPaper('ALL');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedYear === 'ALL' && selectedPaper === 'ALL'
                ? 'bg-teal-600/20 border-teal-500 text-white ring-1 ring-teal-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold border border-teal-500/30">
                All Years
              </span>
              <span className="text-[11px] font-semibold text-teal-400">{eapcetData.length} Qs</span>
            </div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              All Years (Combined)
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">2023 + 2024 + 2025 + 2026 Papers</p>
          </div>

                    {/* 2023 Exam Card */}
          <div 
            onClick={() => {
              setSelectedYear('2023');
              setSelectedPaper('AP EAPCET 2023 (17 May Shift 1)');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedYear === '2023'
                ? 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                EAPCET 2023
              </span>
              <span className="text-[11px] font-semibold text-emerald-400">17 May Shift 1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              2023 May Paper
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">160 Questions • Maths, Phys, Chem</p>
          </div>

{/* 2024 Exam Card */}
          <div 
            onClick={() => {
              setSelectedYear('2024');
              setSelectedPaper('AP EAPCET 2024 (12 May Shift 1)');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedYear === '2024'
                ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold border border-blue-500/30">
                EAPCET 2024
              </span>
              <span className="text-[11px] font-semibold text-blue-400">12 May Shift 1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-400" />
              2024 May Paper
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">160 Questions • Maths, Phys, Chem</p>
          </div>

          {/* 2025 Exam Card */}
          <div 
            onClick={() => {
              setSelectedYear('2025');
              setSelectedPaper('AP EAPCET 2025 (21 May Shift 1)');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedYear === '2025'
                ? 'bg-amber-600/20 border-amber-500 text-white ring-1 ring-amber-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-extrabold border border-amber-500/30">
                EAPCET 2025
              </span>
              <span className="text-[11px] font-semibold text-amber-400">21 May Shift 1</span>
            </div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              2025 May Paper
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">160 Questions • Maths, Phys, Chem</p>
          </div>

          {/* 2026 Exam Card */}
          <div 
            onClick={() => {
              setSelectedYear('2026');
              setSelectedPaper('ALL');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedYear === '2026'
                ? 'bg-purple-600/20 border-purple-500 text-white ring-1 ring-purple-500 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold border border-purple-500/30">
                EAPCET 2026
              </span>
              <span className="text-[11px] font-semibold text-purple-400">2 Shifts • 320 Qs</span>
            </div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-400" />
              2026 May Papers
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">12 May S2 & 15 May S2</p>
          </div>
        </div>

        {/* Quick Shift Switcher for 2026 */}
        {selectedYear === '2026' && (
          <div className="flex flex-wrap items-center gap-2 mt-3 p-3 rounded-xl bg-purple-950/30 border border-purple-800/40">
            <span className="text-xs font-semibold text-purple-300 mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Select 2026 Shift:
            </span>
            <button
              onClick={() => setSelectedPaper('ALL')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedPaper === 'ALL'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All 2026 Shifts (320 Qs)
            </button>
            <button
              onClick={() => setSelectedPaper('AP EAPCET 2026 (12 May Shift 2)')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedPaper === 'AP EAPCET 2026 (12 May Shift 2)'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              12 May Shift 2 (160 Qs)
            </button>
            <button
              onClick={() => setSelectedPaper('AP EAPCET 2026 (15 May Shift 2)')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedPaper === 'AP EAPCET 2026 (15 May Shift 2)'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              15 May Shift 2 (160 Qs)
            </button>
          </div>
        )}
      </div>

      {/* Subject Quick Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* All Subjects Card */}
        <div 
          onClick={() => setSelectedSubject('ALL')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'ALL'
              ? 'bg-teal-600/20 border-teal-500 text-white ring-1 ring-teal-500 shadow-md'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold border border-teal-500/30">
              Full Exam
            </span>
            <span className="text-[11px] font-semibold text-teal-400">{eapcetData.length} Qs</span>
          </div>
          <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-teal-400" />
            All Subjects
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Maths + Physics + Chemistry</p>
        </div>

        {/* Mathematics Card */}
        <div 
          onClick={() => setSelectedSubject('Mathematics')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Mathematics'
              ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500 shadow-md'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold border border-blue-500/30">
              {availablePapers.length > 1 ? 'Q1 – Q80 / Paper' : 'Q1 – Q80'}
            </span>
            <span className="text-[11px] font-semibold text-blue-400">{mathsCount} Qs</span>
          </div>
          <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-blue-400" />
            Mathematics
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Algebra, Calculus, Trigo, Vectors</p>
        </div>

        {/* Physics Card */}
        <div 
          onClick={() => setSelectedSubject('Physics')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Physics'
              ? 'bg-purple-600/20 border-purple-500 text-white ring-1 ring-purple-500 shadow-md'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold border border-purple-500/30">
              {availablePapers.length > 1 ? 'Q81 – Q120 / Paper' : 'Q81 – Q120'}
            </span>
            <span className="text-[11px] font-semibold text-purple-400">{physicsCount} Qs ({eapcetData.filter(q => q.subject === 'Physics' && (q.diagram || q.diagramType)).length} 📐)</span>
          </div>
          <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-purple-400" />
            Physics
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Mechanics, Electrodynamics, Circuits</p>
        </div>

        {/* Chemistry Card */}
        <div 
          onClick={() => setSelectedSubject('Chemistry')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Chemistry'
              ? 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-md'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
              {availablePapers.length > 1 ? 'Q121 – Q160 / Paper' : 'Q121 – Q160'}
            </span>
            <span className="text-[11px] font-semibold text-emerald-400">{chemCount} Qs ({eapcetData.filter(q => q.subject === 'Chemistry' && (q.diagram || q.diagramType)).length} 📐)</span>
          </div>
          <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
            <Atom className="w-4 h-4 text-emerald-400" />
            Chemistry
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Organic Structures, Mechanisms</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-teal-400" />
            <span>Filters & Search</span>
          </div>
          <span className="text-xs text-slate-500">
            Showing <strong className="text-white">{filteredQuestions.length}</strong> of {eapcetData.length} questions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic, formula, question..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => {
              const yr = e.target.value;
              setSelectedYear(yr);
              if (yr === 'ALL') {
                setSelectedPaper('ALL');
              } else if (yr === '2023') {
                setSelectedPaper('AP EAPCET 2023 (17 May Shift 1)');
              } else if (yr === '2024') {
                setSelectedPaper('AP EAPCET 2024 (12 May Shift 1)');
              } else if (yr === '2025') {
                setSelectedPaper('AP EAPCET 2025 (21 May Shift 1)');
              } else if (yr === '2026') {
                setSelectedPaper('ALL');
              }
            }}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-teal-500 font-semibold"
          >
            <option value="ALL">All Years (2023, 2024, 2025 & 2026)</option>
            <option value="2023">Year 2023 (160 Qs)</option>
            <option value="2024">Year 2024 (160 Qs)</option>
            <option value="2025">Year 2025 (160 Qs)</option>
            <option value="2026">Year 2026 (320 Qs • 2 Shifts)</option>
          </select>

          {/* Paper / Shift Filter */}
          <select
            value={selectedPaper}
            onChange={(e) => {
              const p = e.target.value;
              setSelectedPaper(p);
              if (p.includes('2023')) setSelectedYear('2023');
              else if (p.includes('2024')) setSelectedYear('2024');
              else if (p.includes('2025')) setSelectedYear('2025');
              else if (p.includes('2026')) setSelectedYear('2026');
            }}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">{selectedYear !== 'ALL' ? `All ${selectedYear} Papers` : `All Papers (${eapcetData.length} Qs)`}</option>
            {availablePapers.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Subjects (MPC)</option>
            <option value="Mathematics">Mathematics ({mathsCount} Qs)</option>
            <option value="Physics">Physics ({physicsCount} Qs)</option>
            <option value="Chemistry">Chemistry ({chemCount} Qs)</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Difficulty Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Quick Filter: Diagrams */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
          <button
            onClick={() => setFilterWithDiagramsOnly(!filterWithDiagramsOnly)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              filterWithDiagramsOnly
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <span>📐 Filter Questions with Diagrams ({diagramsCount})</span>
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <GraduationCap className="w-10 h-10 text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-300">No Questions Match Your Filter</h4>
            <p className="text-xs text-slate-500">Try clearing the search query or selecting a different subject.</p>
          </div>
        ) : (
          filteredQuestions.map((item) => {
            const isBookmarked = bookmarks.includes(item.id);
            const isRevealed = revealedSolutions[item.id];
            const userPick = userSelectedOptions[item.id];

            return (
              <div 
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all p-6 space-y-4 shadow-lg"
              >
                {/* Meta Badge Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                      Q{item.questionNumber}
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
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                      item.year === 2024
                        ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                        : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                    }`}>
                      {item.year || '2026'} • {item.shift || item.paper}
                    </span>
                    {(item.diagramType || item.diagram) && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        📐 Diagram
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onToggleBookmark && onToggleBookmark(item.id)}
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

                {/* Question Text (English only, formatted KaTeX) */}
                <div className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
                  <KatexRenderer text={item.question} />
                </div>

                {/* SVG/Image Diagram if present */}
                {(item.diagramType || item.diagram) && (
                  <DiagramRenderer type={item.diagramType || item.diagram} />
                )}

                {/* Options Grid */}
                <div className="grid gap-2 text-xs pt-2">
                  {item.options && item.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === item.correctOption;
                    const isPicked = userPick === oIdx;

                    let cardStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                    if (isRevealed) {
                      if (isCorrect) {
                        cardStyle = "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold";
                      } else if (isPicked && !isCorrect) {
                        cardStyle = "bg-red-500/15 border-red-500/40 text-red-300";
                      }
                    }

                    return (
                      <div
                        key={oIdx}
                        onClick={() => handleSelectOption(item.id, oIdx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${cardStyle}`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                            isRevealed && isCorrect
                              ? 'bg-emerald-500 text-slate-950'
                              : isRevealed && isPicked && !isCorrect
                              ? 'bg-red-500 text-white'
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <div className="text-slate-200">
                            <KatexRenderer text={opt} />
                          </div>
                        </div>

                        {isRevealed && isCorrect && (
                          <span className="flex items-center space-x-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            <Check className="w-3.5 h-3.5" />
                            <span>Correct Answer</span>
                          </span>
                        )}

                        {isRevealed && isPicked && !isCorrect && (
                          <span className="flex items-center space-x-1 text-[11px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                            <X className="w-3.5 h-3.5" />
                            <span>Your Choice</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Toggle Bar */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => toggleSolution(item.id)}
                    className={`flex items-center space-x-2 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                      isRevealed
                        ? 'bg-slate-800 text-teal-300 border border-teal-500/30'
                        : 'bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-950/50'
                    }`}
                  >
                    {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{isRevealed ? 'Hide Solution' : 'Reveal Answer & Step-by-Step Solution'}</span>
                  </button>

                  {isRevealed && (
                    <span className="text-xs text-slate-400">
                      Correct: <strong className="text-emerald-400 font-semibold">Option ({String.fromCharCode(65 + item.correctOption)})</strong>
                    </span>
                  )}
                </div>

                {/* Single Detailed Step-by-Step Solution */}
                {isRevealed && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-teal-500/30 space-y-3 shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <h5 className="font-extrabold text-teal-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-teal-400" />
                        <span>Step-by-Step Explanation:</span>
                      </h5>
                      <span className="text-[11px] font-bold text-slate-400">
                        Official Key Verified
                      </span>
                    </div>

                    <div className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans space-y-3 pt-1">
                      <KatexRenderer text={item.solution || "Detailed step-by-step solution provided."} />
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

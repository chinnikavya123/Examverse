import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle,
  Sparkles, 
  BookOpen, 
  Award,
  Layers,
  HelpCircle,
  RotateCcw,
  Maximize2,
  X,
  Compass,
  Atom,
  Calculator,
  Check
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';
import { publicAsset } from '../../utils/publicAsset';

export default function JeeAdvancedBook({ advancedData = [], bookmarks = [], onToggleBookmark }) {
  const [selectedPaper, setSelectedPaper] = useState('2026 Advanced Paper 1');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedSection, setSelectedSection] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [filterWithDiagramsOnly, setFilterWithDiagramsOnly] = useState(false);

  // Interactivity state
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({}); // { [qId]: optionIdx } for SCQ / MATCHING
  const [mcqSelections, setMcqSelections] = useState({});     // { [qId]: [0, 2] }
  const [mcqSubmitted, setMcqSubmitted] = useState({});       // { [qId]: true }
  const [numericalInputs, setNumericalInputs] = useState({}); // { [qId]: "3.14" }
  const [numericalSubmitted, setNumericalSubmitted] = useState({}); // { [qId]: true }
  const [enlargedImage, setEnlargedImage] = useState(null);

  const toggleSolution = (id) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectScq = (qId, optionIdx) => {
    setSelectedOptions(prev => ({ ...prev, [qId]: optionIdx }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));
  };

  const handleToggleMcqOption = (qId, optionIdx) => {
    if (mcqSubmitted[qId]) return; // lock once submitted
    setMcqSelections(prev => {
      const current = prev[qId] || [];
      if (current.includes(optionIdx)) {
        return { ...prev, [qId]: current.filter(i => i !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...current, optionIdx].sort() };
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

  // Section list
  const sections = [
    { id: 'ALL', label: 'All Sections' },
    { id: 'Section 1', label: 'Section 1: Single Correct (SCQ)' },
    { id: 'Section 2', label: 'Section 2: Multi-Correct (MCQ)' },
    { id: 'Section 3', label: 'Section 3: Numerical (+4, 0)' },
    { id: 'Section 4', label: 'Section 4: Matching Lists / Stem (+2 to +4)' },
  ];

  // Filtering
  const filteredQuestions = advancedData.filter(item => {
    if (showBookmarksOnly && !bookmarks.includes(item.id)) return false;
    if (filterWithDiagramsOnly && !item.diagram) return false;
    if (selectedPaper !== 'ALL') {
      const p = item.paperName || item.paper || '';
      if (selectedPaper === '2026 Advanced Paper 1') {
        if (p !== 'Paper 1' && p !== '2026 Advanced Paper 1') return false;
      } else if (selectedPaper === '2026 Advanced Paper 2') {
        if (p !== 'Paper 2' && p !== '2026 Advanced Paper 2') return false;
      } else if (selectedPaper === '2025 Advanced Paper 1') {
        if (p !== '2025 Advanced Paper 1') return false;
      } else if (selectedPaper === '2025 Advanced Paper 2') {
        if (p !== '2025 Advanced Paper 2') return false;
      } else if (selectedPaper === '2024 Advanced Paper 1') {
        if (p !== '2024 Advanced Paper 1') return false;
      } else if (selectedPaper === '2024 Advanced Paper 2') {
        if (p !== '2024 Advanced Paper 2') return false;
      } else if (p !== selectedPaper) {
        return false;
      }
    }
    if (selectedSubject !== 'ALL' && item.subject !== selectedSubject) return false;
    if (selectedSection !== 'ALL' && !item.section.startsWith(selectedSection)) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchText = (item.question + item.chapter + item.subject + (item.paperName || item.paper || '') + (item.solution || '')).toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  // Paper & Subject stats
  const currentPaperQuestions = selectedPaper === 'ALL'
    ? advancedData
    : advancedData.filter(q => {
        const p = q.paperName || q.paper || '';
        if (selectedPaper === '2026 Advanced Paper 1') return p === 'Paper 1' || p === '2026 Advanced Paper 1';
        if (selectedPaper === '2026 Advanced Paper 2') return p === 'Paper 2' || p === '2026 Advanced Paper 2';
        if (selectedPaper === '2025 Advanced Paper 1') return p === '2025 Advanced Paper 1';
        if (selectedPaper === '2025 Advanced Paper 2') return p === '2025 Advanced Paper 2';
        if (selectedPaper === '2024 Advanced Paper 1') return p === '2024 Advanced Paper 1';
        if (selectedPaper === '2024 Advanced Paper 2') return p === '2024 Advanced Paper 2';
        return p === selectedPaper;
      });

  const totalPaperCount = currentPaperQuestions.length;
  const mathCount = currentPaperQuestions.filter(q => q.subject === 'Mathematics').length;
  const physCount = currentPaperQuestions.filter(q => q.subject === 'Physics').length;
  const chemCount = currentPaperQuestions.filter(q => q.subject === 'Chemistry').length;

  const totalPaperMarks = selectedPaper === '2026 Advanced Paper 1' ? 156 
    : selectedPaper === '2026 Advanced Paper 2' ? 180 
    : selectedPaper === '2025 Advanced Paper 1' ? 180
    : selectedPaper === '2025 Advanced Paper 2' ? 180
    : selectedPaper === '2024 Advanced Paper 1' ? 180
    : selectedPaper === '2024 Advanced Paper 2' ? 180
    : 1056;
  const subjectMarks = selectedPaper === '2026 Advanced Paper 1' ? 52 
    : selectedPaper === '2026 Advanced Paper 2' ? 60 
    : selectedPaper === '2025 Advanced Paper 1' ? 60
    : selectedPaper === '2025 Advanced Paper 2' ? 60
    : selectedPaper === '2024 Advanced Paper 1' ? 60
    : selectedPaper === '2024 Advanced Paper 2' ? 60
    : 352;
  const mathRange = selectedPaper === '2026 Advanced Paper 1' ? 'Q1 • Q16 • 52 Marks' 
    : selectedPaper === '2026 Advanced Paper 2' ? 'Q1 • Q18 • 60 Marks' 
    : (selectedPaper === '2024 Advanced Paper 1' || selectedPaper === '2024 Advanced Paper 2') ? 'Q1 • Q17 • 60 Marks'
    : (selectedPaper === '2025 Advanced Paper 1' || selectedPaper === '2025 Advanced Paper 2') ? 'Q1 • Q16 • 60 Marks'
    : 'All Mathematics';
  const physRange = selectedPaper === '2026 Advanced Paper 1' ? 'Q17 • Q32 • 52 Marks' 
    : selectedPaper === '2026 Advanced Paper 2' ? 'Q19 • Q36 • 60 Marks' 
    : (selectedPaper === '2024 Advanced Paper 1' || selectedPaper === '2024 Advanced Paper 2') ? 'Q18 • Q34 • 60 Marks'
    : (selectedPaper === '2025 Advanced Paper 1' || selectedPaper === '2025 Advanced Paper 2') ? 'Q17 • Q32 • 60 Marks'
    : 'All Physics';
  const chemRange = selectedPaper === '2026 Advanced Paper 1' ? 'Q33 • Q48 • 52 Marks' 
    : selectedPaper === '2026 Advanced Paper 2' ? 'Q37 • Q54 • 60 Marks' 
    : (selectedPaper === '2024 Advanced Paper 1' || selectedPaper === '2024 Advanced Paper 2') ? 'Q35 • Q51 • 60 Marks'
    : (selectedPaper === '2025 Advanced Paper 1' || selectedPaper === '2025 Advanced Paper 2') ? 'Q33 • Q48 • 60 Marks'
    : 'All Chemistry';

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 p-6 rounded-3xl shadow-xl">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {selectedPaper === '2026 Advanced Paper 1' && 'JEE (Advanced) 2026 • Official Paper 1 (Morning)'}
              {selectedPaper === '2026 Advanced Paper 2' && 'JEE (Advanced) 2026 • Official Paper 2 (Afternoon)'}
              {selectedPaper === '2025 Advanced Paper 1' && 'JEE (Advanced) 2025 • Official Paper 1 (Morning)'}
              {selectedPaper === '2025 Advanced Paper 2' && 'JEE (Advanced) 2025 • Official Paper 2 (Afternoon)'}
              {selectedPaper === '2024 Advanced Paper 1' && 'JEE (Advanced) 2024 • Official Paper 1 (Morning)'}
              {selectedPaper === '2024 Advanced Paper 2' && 'JEE (Advanced) 2024 • Official Paper 2 (Afternoon)'}
              {selectedPaper === 'ALL' && `JEE (Advanced) • All Papers Combined (${advancedData.length} Qs)`}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            JEE Advanced Question Bank
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            {selectedPaper === '2026 Advanced Paper 1' && 'Complete authentic 48 questions across Mathematics, Physics, and Chemistry (156 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === '2026 Advanced Paper 2' && 'Complete authentic 54 questions across Mathematics, Physics, and Chemistry (180 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === '2025 Advanced Paper 1' && 'Complete authentic 48 questions across Mathematics, Physics, and Chemistry (180 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === '2025 Advanced Paper 2' && 'Complete authentic 48 questions across Mathematics, Physics, and Chemistry (180 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === '2024 Advanced Paper 1' && 'Complete authentic 51 questions across Mathematics, Physics, and Chemistry (180 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === '2024 Advanced Paper 2' && 'Complete authentic 51 questions across Mathematics, Physics, and Chemistry (180 Marks). Practice with interactive answering modes and learn with exhaustive step-by-step solutions.'}
            {selectedPaper === 'ALL' && `Complete collection of ${advancedData.length} authentic questions from 2024, 2025 and 2026 JEE Advanced papers totaling 1056 Marks.`}
          </p>
        </div>

        {/* View Toggle: All vs Bookmarked */}
        <div className="flex items-center space-x-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <button
            onClick={() => setShowBookmarksOnly(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !showBookmarksOnly ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Questions ({advancedData.length})
          </button>
          <button
            onClick={() => setShowBookmarksOnly(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              showBookmarksOnly ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Saved ({bookmarks.filter(b => b.startsWith('ADV-')).length})</span>
          </button>
        </div>
      </div>

      {/* Year & Paper Segregation Hub */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Segregate By Exam Year & Paper:</span>
          </h3>
          <span className="text-xs text-slate-500">
            {selectedPaper === '2026 Advanced Paper 1' && 'Paper 1 (48 Qs • 156 Marks)'}
            {selectedPaper === '2026 Advanced Paper 2' && 'Paper 2 (54 Qs • 180 Marks)'}
            {selectedPaper === '2025 Advanced Paper 1' && 'Paper 1 (48 Qs • 180 Marks)'}
            {selectedPaper === '2025 Advanced Paper 2' && 'Paper 2 (48 Qs • 180 Marks)'}
            {selectedPaper === '2024 Advanced Paper 1' && 'Paper 1 (51 Qs • 180 Marks)'}
            {selectedPaper === '2024 Advanced Paper 2' && 'Paper 2 (51 Qs • 180 Marks)'}
            {selectedPaper === 'ALL' && `Combined Bank (${advancedData.length} Qs • 1056 Marks)`}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3">
          {/* 2026 Advanced Paper 1 */}
          <div 
            onClick={() => {
              setSelectedPaper('2026 Advanced Paper 1');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2026 Advanced Paper 1'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                JEE Adv 2026
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2026 Advanced Paper 1
            </h4>
            <p className="text-xs text-slate-400 mt-1">48 Questions • 16 Math, 16 Phys, 16 Chem • 156 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Morning Session</span>
            </div>
          </div>

          {/* 2024 Advanced Paper 2 */}
          <div 
            onClick={() => {
              setSelectedPaper('2024 Advanced Paper 2');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2024 Advanced Paper 2'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                JEE Adv 2024
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2024 Advanced Paper 2
            </h4>
            <p className="text-xs text-slate-400 mt-1">51 Questions • 17 Math, 17 Phys, 17 Chem • 180 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Afternoon Session</span>
            </div>
          </div>


          {/* 2026 Advanced Paper 2 */}
          <div 
            onClick={() => {
              setSelectedPaper('2026 Advanced Paper 2');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2026 Advanced Paper 2'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                JEE Adv 2026
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2026 Advanced Paper 2
            </h4>
            <p className="text-xs text-slate-400 mt-1">54 Questions • 18 Math, 18 Phys, 18 Chem • 180 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Afternoon Session</span>
            </div>
          </div>

          {/* 2025 Advanced Paper 1 */}
          <div 
            onClick={() => {
              setSelectedPaper('2025 Advanced Paper 1');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2025 Advanced Paper 1'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                JEE Adv 2025
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2025 Advanced Paper 1
            </h4>
            <p className="text-xs text-slate-400 mt-1">48 Questions • 16 Math, 16 Phys, 16 Chem • 180 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Morning Session</span>
            </div>
          </div>

          {/* 2025 Advanced Paper 2 */}
          <div 
            onClick={() => {
              setSelectedPaper('2025 Advanced Paper 2');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2025 Advanced Paper 2'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                JEE Adv 2025
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2025 Advanced Paper 2
            </h4>
            <p className="text-xs text-slate-400 mt-1">48 Questions • 16 Math, 16 Phys, 16 Chem • 180 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Afternoon Session</span>
            </div>
          </div>

          {/* 2024 Advanced Paper 1 */}
          <div 
            onClick={() => {
              setSelectedPaper('2024 Advanced Paper 1');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === '2024 Advanced Paper 1'
                ? 'bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                JEE Adv 2024
              </span>
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Shift
              </span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              2024 Advanced Paper 1
            </h4>
            <p className="text-xs text-slate-400 mt-1">51 Questions • 17 Math, 17 Phys, 17 Chem • 180 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Full Detailed Solutions
              </span>
              <span className="text-indigo-400 font-semibold">Morning Session</span>
            </div>
          </div>

          {/* All Papers Card */}

          <div 
            onClick={() => {
              setSelectedPaper('ALL');
            }}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              selectedPaper === 'ALL'
                ? 'bg-amber-500/15 border-amber-500 text-white ring-1 ring-amber-500 shadow-lg shadow-amber-500/10'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                All Archives
              </span>
              <span className="text-xs font-bold text-slate-400">{advancedData.length} Qs</span>
            </div>
            <h4 className="font-extrabold text-base text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              All Papers (Combined)
            </h4>
            <p className="text-xs text-slate-400 mt-1">Full JEE Advanced Question Bank • 1056 Marks</p>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Paper 1 & Paper 2 Combined</span>
              <span className="text-amber-400 font-semibold">{advancedData.length} Qs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div 
          onClick={() => setSelectedSubject('ALL')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'ALL'
              ? 'bg-indigo-600/15 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>All Subjects</span>
            <Layers className="w-4 h-4 text-indigo-400" />
          </div>
          <p className="text-2xl font-black text-white mt-1">{totalPaperCount}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {selectedPaper === 'ALL' ? 'Combined Bank' : selectedPaper} • {totalPaperMarks} Marks
          </p>
        </div>

        <div 
          onClick={() => setSelectedSubject('Mathematics')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Mathematics'
              ? 'bg-emerald-600/15 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
            <span>Mathematics</span>
            <Calculator className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-1">{mathCount}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">{mathRange}</p>
        </div>

        <div 
          onClick={() => setSelectedSubject('Physics')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Physics'
              ? 'bg-cyan-600/15 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-cyan-400">
            <span>Physics</span>
            <Compass className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-white mt-1">{physCount}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">{physRange}</p>
        </div>

        <div 
          onClick={() => setSelectedSubject('Chemistry')}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            selectedSubject === 'Chemistry'
              ? 'bg-purple-600/15 border-purple-500/50 shadow-lg shadow-purple-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-purple-400">
            <span>Chemistry</span>
            <Atom className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-black text-white mt-1">{chemCount}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">{chemRange}</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, topics, chapters, or concepts..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 rounded-xl border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Paper Selector */}
          <select
            value={selectedPaper}
            onChange={(e) => setSelectedPaper(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-medium text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="2026 Advanced Paper 1">2026 Advanced Paper 1 (48 Qs • Morning)</option>
            <option value="2026 Advanced Paper 2">2026 Advanced Paper 2 (54 Qs • Afternoon)</option>
            <option value="2025 Advanced Paper 1">2025 Advanced Paper 1 (48 Qs • Morning)</option>
            <option value="2025 Advanced Paper 2">2025 Advanced Paper 2 (48 Qs • Afternoon)</option>
            <option value="2024 Advanced Paper 1">2024 Advanced Paper 1 (51 Qs • Morning)</option>
            <option value="2024 Advanced Paper 2">2024 Advanced Paper 2 (51 Qs • Afternoon)</option>
            <option value="ALL">All Papers Combined ({advancedData.length} Qs • 1056 Marks)</option>
          </select>

          {/* Section Selector */}
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-medium text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            {sections.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>

          {/* Diagram Only Filter */}
          <button
            onClick={() => setFilterWithDiagramsOnly(!filterWithDiagramsOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
              filterWithDiagramsOnly
                ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Has Diagrams
          </button>
        </div>
      </div>

      {/* Question Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-white">{filteredQuestions.length}</strong> of {advancedData.length} questions
          {selectedPaper !== 'ALL' && <span className="text-indigo-400 font-semibold ml-1">({selectedPaper})</span>}
        </span>
        {(searchQuery || selectedPaper !== '2026 Advanced Paper 1' || selectedSubject !== 'ALL' || selectedSection !== 'ALL' || filterWithDiagramsOnly) && (
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedPaper('2026 Advanced Paper 1');
              setSelectedSubject('ALL');
              setSelectedSection('ALL');
              setFilterWithDiagramsOnly(false);
            }} 
            className="text-indigo-400 hover:underline"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Question Cards List */}
      <div className="space-y-6">
        {filteredQuestions.map((item) => {
          const isRevealed = revealedSolutions[item.id];
          const isBookmarked = bookmarks.includes(item.id);
          const isScq = item.type === 'SCQ' || item.type === 'MATCHING';
          const isMcq = item.type === 'MCQ';
          const isNumerical = item.type === 'NUMERICAL';

          const chosenScq = selectedOptions[item.id];
          const userMcq = mcqSelections[item.id] || [];
          const isMcqDone = mcqSubmitted[item.id];
          const numInput = numericalInputs[item.id] || '';
          const isNumDone = numericalSubmitted[item.id];

          // Check if numerical answer is correct
          let isNumCorrect = false;
          if (isNumDone) {
            const val = parseFloat(numInput);
            if (item.numericalRange && !isNaN(val) && val >= item.numericalRange[0] && val <= item.numericalRange[1]) {
              isNumCorrect = true;
            } else if (item.correctAnswer && !isNaN(val)) {
              const ansVal = parseFloat(item.correctAnswer);
              if (!isNaN(ansVal) && Math.abs(val - ansVal) < 0.05) {
                isNumCorrect = true;
              }
            }
          }

          // Section coloring
          let subjectColor = 'indigo';
          if (item.subject === 'Mathematics') subjectColor = 'emerald';
          if (item.subject === 'Physics') subjectColor = 'cyan';
          if (item.subject === 'Chemistry') subjectColor = 'purple';

          return (
            <div 
              key={item.id} 
              id={item.id}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-md space-y-5"
            >
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25 text-xs font-bold flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-400" />
                    {item.paperName || item.paper || '2026 Advanced Paper 1'}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-wide bg-${subjectColor}-500/10 text-${subjectColor}-300 border border-${subjectColor}-500/30`}>
                    Q{item.questionNumber}
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {item.subject}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.chapter}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 font-mono">
                    {item.section}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Reset Question Button if attempted */}
                  {(chosenScq !== undefined || isMcqDone || isNumDone) && (
                    <button
                      onClick={() => handleResetQuestion(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Reset answer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleBookmark && onToggleBookmark(item.id)}
                    className={`p-1.5 rounded-lg border transition-all ${
                      isBookmarked
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
                    }`}
                    title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-slate-100 text-sm md:text-base leading-relaxed overflow-x-auto">
                <KatexRenderer text={item.question} />
              </div>

              {/* Embedded Diagram if any */}
              {item.diagram && (
                <div className="my-4 flex flex-col items-center">
                  <div className="relative group max-w-xl w-full bg-white rounded-2xl p-3 border border-slate-700 shadow-md flex items-center justify-center">
                    <img
                      src={publicAsset(item.diagram)}
                      alt={`Diagram for Question ${item.questionNumber}`}
                      className="max-h-80 object-contain rounded-lg"
                    />
                    <button
                      onClick={() => setEnlargedImage(item.diagram)}
                      className="absolute top-3 right-3 p-1.5 bg-slate-900/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-900 shadow-md"
                      title="Enlarge diagram"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1">Figure for Question {item.questionNumber} (click to expand)</span>
                </div>
              )}

              {/* Options Section: SCQ / Matching List */}
              {isScq && Array.isArray(item.options) && (
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {item.options.map((opt, idx) => {
                    const isSelected = chosenScq === idx;
                    const isCorrect = item.correctOption === idx;
                    const showResult = chosenScq !== undefined;

                    let btnStyle = "bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-200";
                    if (showResult) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-950/40 border-emerald-500/80 text-emerald-200 shadow-sm shadow-emerald-500/10";
                      } else if (isSelected && !isCorrect) {
                        btnStyle = "bg-rose-950/40 border-rose-500/80 text-rose-200 shadow-sm shadow-rose-500/10";
                      }
                    } else if (isSelected) {
                      btnStyle = "bg-indigo-600/20 border-indigo-500 text-white";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectScq(item.id, idx)}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all ${btnStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          showResult && isCorrect 
                            ? 'bg-emerald-500 text-slate-950'
                            : showResult && isSelected && !isCorrect
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div className="flex-1 text-sm overflow-x-auto leading-normal">
                          <KatexRenderer text={opt} />
                        </div>
                        {showResult && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 self-center" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0 self-center" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Options Section: MCQ (One or More than One Correct) */}
              {isMcq && Array.isArray(item.options) && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 gap-2.5">
                    {item.options.map((opt, idx) => {
                      const isPicked = userMcq.includes(idx);
                      const correctIndices = Array.isArray(item.correctOption)
                        ? item.correctOption
                        : (typeof item.correctAnswer === 'string'
                            ? item.correctAnswer.split(/[^A-Za-z]/).filter(Boolean).map(c => c.toUpperCase().charCodeAt(0) - 65)
                            : (Array.isArray(item.correctAnswer) ? item.correctAnswer.map(c => typeof c === 'number' ? c : c.toUpperCase().charCodeAt(0) - 65) : []));
                      const isOptionCorrect = correctIndices.includes(idx);

                      let mcqStyle = "bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-200";
                      if (isMcqDone) {
                        if (isOptionCorrect && isPicked) {
                          mcqStyle = "bg-emerald-950/40 border-emerald-500/80 text-emerald-200";
                        } else if (isOptionCorrect && !isPicked) {
                          mcqStyle = "bg-amber-950/30 border-dashed border-amber-500/60 text-amber-200";
                        } else if (!isOptionCorrect && isPicked) {
                          mcqStyle = "bg-rose-950/40 border-rose-500/80 text-rose-200";
                        }
                      } else if (isPicked) {
                        mcqStyle = "bg-indigo-600/20 border-indigo-500 text-white";
                      }

                      return (
                        <div
                          key={idx}
                          onClick={() => handleToggleMcqOption(item.id, idx)}
                          className={`w-full p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all cursor-pointer ${mcqStyle}`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                            isPicked ? 'bg-indigo-600 border-indigo-400 text-white' : 'border-slate-700 bg-slate-800/80'
                          }`}>
                            {isPicked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <span className="font-bold text-xs text-slate-400 mt-0.5">
                            ({String.fromCharCode(65 + idx)})
                          </span>
                          <div className="flex-1 text-sm overflow-x-auto leading-normal">
                            <KatexRenderer text={opt} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {!isMcqDone ? (
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-400">Select one or more options and click Submit</span>
                      <button
                        onClick={() => handleSubmitMcq(item.id)}
                        disabled={userMcq.length === 0}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          userMcq.length > 0
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        Submit Response
                      </button>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300">
                        Official Key: <strong className="text-emerald-400">{Array.isArray(item.correctAnswer) ? item.correctAnswer.join(', ') : item.correctAnswer}</strong>
                      </span>
                      <span className="text-xs text-slate-400">
                        Your Choice: {userMcq.map(i => String.fromCharCode(65 + i)).join(', ') || 'None'}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Numerical Input Section */}
              {isNumerical && (
                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-semibold text-slate-400">Enter Numerical Answer:</span>
                      <input
                        type="text"
                        disabled={isNumDone}
                        value={numInput}
                        onChange={(e) => setNumericalInputs(prev => ({ ...prev, [item.id]: e.target.value }))}
                        placeholder="e.g. 1.73"
                        className="w-32 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-white text-center focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                      />
                    </div>

                    {!isNumDone ? (
                      <button
                        onClick={() => handleSubmitNumerical(item.id)}
                        disabled={!numInput.trim()}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          numInput.trim()
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1 ${
                          isNumCorrect
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        }`}>
                          {isNumCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isNumCorrect ? `Correct (+${item.marking?.correct || 4})` : 'Incorrect (0)'}</span>
                        </span>
                        <span className="text-xs text-slate-300">
                          Official Answer: <strong className="text-emerald-400">{item.correctAnswer}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Solution Toggle & Box */}
              <div className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => toggleSolution(item.id)}
                  className="flex items-center space-x-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{isRevealed ? 'Hide Detailed Solution' : 'View Step-by-Step Solution'}</span>
                </button>

                {isRevealed && (
                  <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Complete Step-by-Step Solution
                        </span>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Official Key: {item.correctAnswer}
                      </span>
                    </div>

                    {/* Solution Diagram if any */}
                    {item.solutionDiagram && (
                      <div className="my-3 flex flex-col items-center">
                        <div className="relative group max-w-xl w-full bg-white rounded-2xl p-3 border border-slate-700 shadow-md flex items-center justify-center">
                          <img
                            src={publicAsset(item.solutionDiagram)}
                            alt={`Solution Diagram for Question ${item.questionNumber}`}
                            className="max-h-80 object-contain rounded-lg"
                          />
                          <button
                            onClick={() => setEnlargedImage(item.solutionDiagram)}
                            className="absolute top-3 right-3 p-1.5 bg-slate-900/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-900 shadow-md"
                            title="Enlarge diagram"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1">Figure for Solution {item.questionNumber} (click to expand)</span>
                      </div>
                    )}

                    <div className="text-slate-200 text-sm leading-relaxed overflow-x-auto space-y-3">
                      <KatexRenderer text={item.solution} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enlarged Diagram Modal */}
      {enlargedImage && (
        <div 
          onClick={() => setEnlargedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-6 shadow-2xl overflow-auto border border-slate-300"
          >
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={publicAsset(enlargedImage)} 
              alt="Enlarged Diagram" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

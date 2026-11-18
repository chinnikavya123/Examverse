import React, { useState, useEffect, useMemo } from 'react';
import MathRenderer from '../renderer/MathRenderer';
import Badge from '../Badge';
import MathGraphSvg from '../MathGraphSvg';
import {
  CLASS_11_MATH_FORMULAS,
  CLASS_12_MATH_FORMULAS,
  MASTER_MATH_GRAPHS,
  MASTER_MATH_DERIVATIONS,
  MASTER_MATH_SHEETS,
  MATH_PYTHAGOREAN_TRIPLES,
  MATH_ALGEBRAIC_IDENTITIES,
  MATH_LOG_EXP_PROPERTIES,
  MATH_ENTRANCE_SHORTCUTS
} from '../../data/allMathData';
import {
  BookOpen,
  Search,
  Star,
  Zap,
  Table,
  ChevronRight,
  Sparkles,
  Layers,
  Check,
  Grid,
  TrendingUp,
  RotateCw,
  RefreshCw,
  FileText,
  HelpCircle,
  Calculator
} from 'lucide-react';

export default function MathFormulaBook({ onSelectSubject }) {
  const navigate = (path) => {
    if (onSelectSubject) {
      if (path.includes('chemistry')) onSelectSubject('Chemistry');
      else if (path.includes('physics')) onSelectSubject('Physics');
      else onSelectSubject('Mathematics');
    }
  };

  const [activeTab, setActiveTab] = useState('handbook'); // 'handbook', 'shortcuts', 'mastersheets', 'graphs', 'derivations', 'quick', 'favorites'
  const [selectedClass, setSelectedClass] = useState(11); // 11 or 12
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sub-tab state for Graphs & Derivations
  const [graphCategory, setGraphCategory] = useState('ALL');
  const [derivationClassFilter, setDerivationClassFilter] = useState('ALL');
  const [expandAllDerivations, setExpandAllDerivations] = useState(false);

  // Accordion state for expanded subtopics and derivations
  const [expandedSubtopics, setExpandedSubtopics] = useState({});
  const [expandedDerivations, setExpandedDerivations] = useState({});

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('examverse_math_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Flashcards state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardFilter, setFlashcardFilter] = useState('All');

  useEffect(() => {
    try {
      localStorage.setItem('examverse_math_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed saving math favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const toggleSubtopicExpand = (subId) => {
    setExpandedSubtopics(prev => ({
      ...prev,
      [subId]: prev[subId] === undefined ? false : !prev[subId]
    }));
  };

  const toggleDerivationExpand = (derId) => {
    setExpandedDerivations(prev => ({
      ...prev,
      [derId]: prev[derId] === undefined ? !expandAllDerivations : !prev[derId]
    }));
  };

  const toggleExpandAllDerivations = () => {
    const nextState = !expandAllDerivations;
    setExpandAllDerivations(nextState);
    const newExpanded = {};
    MASTER_MATH_DERIVATIONS.forEach(d => {
      newExpanded[d.id] = nextState;
    });
    setExpandedDerivations(newExpanded);
  };

  // Combine chapter formula data
  const allChapterData = useMemo(() => {
    return [...CLASS_11_MATH_FORMULAS, ...CLASS_12_MATH_FORMULAS];
  }, []);

  const favoriteItemsMap = useMemo(() => {
    const map = {};
    allChapterData.forEach(ch => {
      ch.subtopics.forEach(sub => {
        const subId = `${ch.id}_${sub.subtopic}`;
        map[subId] = {
          id: subId,
          chapterId: ch.id,
          chapterNumber: ch.chapterNumber,
          chapter: ch.chapter,
          class: ch.class,
          category: ch.category,
          subtopic: sub.subtopic,
          sections: sub.sections
        };
      });
    });
    return map;
  }, [allChapterData]);

  const openFavoriteInHandbook = (item) => {
    if (!item) return;
    setSelectedClass(item.class);
    setSelectedChapter(item.chapterId);
    setExpandedSubtopics(prev => ({
      ...prev,
      [item.id]: true
    }));
    setActiveTab('handbook');
  };

  const currentClassData = useMemo(() => {
    return allChapterData.filter(ch => ch.class === selectedClass);
  }, [allChapterData, selectedClass]);

  const categoriesList = [
    'Algebra',
    'Trigonometry',
    'Coordinate Geometry',
    'Calculus',
    '3D Geometry & Vectors',
    'Matrices & Determinants',
    'Probability & Statistics'
  ];

  // Filtered chapters for Handbook
  const filteredHandbookChapters = useMemo(() => {
    return currentClassData.filter(ch => {
      if (selectedChapter && ch.id !== selectedChapter) return false;
      if (selectedCategory && ch.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesChap = ch.chapter.toLowerCase().includes(q);
        const matchesCategory = ch.category.toLowerCase().includes(q);
        const matchesSubtopics = ch.subtopics.some(sub =>
          sub.subtopic.toLowerCase().includes(q) ||
          Object.values(sub.sections).some(val => val && typeof val === 'string' && val.toLowerCase().includes(q))
        );
        return matchesChap || matchesCategory || matchesSubtopics;
      }
      return true;
    });
  }, [currentClassData, selectedChapter, selectedCategory, searchQuery]);

  // Filtered Master Sheets
  const filteredMasterSheets = useMemo(() => {
    return MASTER_MATH_SHEETS.filter(sheet => {
      if (selectedCategory && sheet.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = sheet.title.toLowerCase().includes(q);
        const summaryMatch = sheet.summary.toLowerCase().includes(q);
        const formulasMatch = sheet.keyFormulas && sheet.keyFormulas.some(f => f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q));
        return titleMatch || summaryMatch || formulasMatch;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Filtered Math Graphs
  const filteredGraphs = useMemo(() => {
    return MASTER_MATH_GRAPHS.filter(g => {
      if (graphCategory !== 'ALL' && g.category !== graphCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.equation.toLowerCase().includes(q) ||
          g.keyFeature.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [graphCategory, searchQuery]);

  // Filtered Derivations / Proofs
  const filteredDerivations = useMemo(() => {
    return MASTER_MATH_DERIVATIONS.filter(d => {
      if (derivationClassFilter !== 'ALL' && d.class !== Number(derivationClassFilter)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          d.title.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.targetResult.toLowerCase().includes(q) ||
          d.steps.some(s => s.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [derivationClassFilter, searchQuery]);

  // Flattened items for Flashcards
  const allFlashcards = useMemo(() => {
    const list = [];
    allChapterData.forEach(ch => {
      ch.subtopics.forEach(sub => {
        if (flashcardFilter !== 'All' && ch.category !== flashcardFilter) return;
        list.push({
          id: `${ch.id}_${sub.subtopic}`,
          chapter: ch.chapter,
          subtopic: sub.subtopic,
          category: ch.category,
          concept: sub.sections.concept,
          formula: sub.sections.formulaReaction,
          shortcuts: sub.sections.shortcuts,
          importantResults: sub.sections.importantResults
        });
      });
    });
    return list;
  }, [allChapterData, flashcardFilter]);

  const currentCard = allFlashcards[currentFlashcardIndex] || allFlashcards[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentFlashcardIndex((prev) => (prev + 1) % (allFlashcards.length || 1));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentFlashcardIndex((prev) => (prev - 1 + allFlashcards.length) % (allFlashcards.length || 1));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Subject Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 font-bold text-xl">📐</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Complete Intermediate Mathematics Formula Bank
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Exhaustive Class 11 & Class 12 Math Reference • Formulas, Master Graphs, Step-by-Step Proofs & Entrance Shortcuts
              </p>
            </div>
          </div>
        </div>

        {/* Subject Switcher Buttons */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => onSelectSubject && onSelectSubject('Mathematics')}
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white shadow-xs transition cursor-pointer flex items-center gap-1.5 font-bold"
          >
            <Calculator className="w-3.5 h-3.5 fill-current text-amber-300" />
            <span>📐 Mathematics Formula Bank</span>
          </button>
          <button
            onClick={() => navigate('/physics-formula-book')}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1.5"
          >
            <span>⚡ Physics Formula Bank</span>
          </button>
          <button
            onClick={() => navigate('/chemistry-formula-book')}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1.5"
          >
            <span>🧪 Chemistry Formula Bank</span>
          </button>
        </div>
      </div>

      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> COMPLETE MATHEMATICS FORMULA HANDBOOK
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Intermediate Class 11 & Class 12 Mathematics Formula Bank
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-3xl leading-relaxed">
              Exhaustive reference covering all 26 Math chapters (13 Class 11 + 13 Class 12), 5 Master Sheets, {MASTER_MATH_GRAPHS.length} Key Graphs with 2D Visuals, {MASTER_MATH_DERIVATIONS.length} Proofs & Derivations, Pythagorean Triples, and Entrance Shortcuts.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { setSelectedClass(11); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 11 ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-200 hover:text-white'}`}
            >
              Class 11 (1st Year)
            </button>
            <button
              onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 12 ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-200 hover:text-white'}`}
            >
              Class 12 (2nd Year)
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 text-emerald-400 absolute left-4 top-5" />
          <input
            type="text"
            placeholder="Search formula, theorem, limit, derivative, integral, identity, conic equation (e.g. De Morgan, Bayes, L'Hopital, Conic, Matrix Inverse)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-medium text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
        {[
          { id: 'handbook', label: '📚 Chapter Handbook', icon: BookOpen },
          { id: 'shortcuts', label: '🔥 Master Shortcuts & Triples', icon: Zap },
          { id: 'mastersheets', label: `📄 Master Sheets (${MASTER_MATH_SHEETS.length})`, icon: Layers },
          { id: 'graphs', label: `📈 Master Graphs (${MASTER_MATH_GRAPHS.length})`, icon: TrendingUp },
          { id: 'derivations', label: `📐 Proofs & Derivations (${MASTER_MATH_DERIVATIONS.length})`, icon: FileText },
          { id: 'quick', label: '⚡ Quick Revision Mode', icon: Zap },
          { id: 'favorites', label: `⭐ Favorites (${favorites.length})`, icon: Star }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Filter & Search Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          {activeTab === 'handbook' && (
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 font-bold">
              <button
                onClick={() => { setSelectedClass(11); setSelectedChapter(''); }}
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 11 ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 11 ({CLASS_11_MATH_FORMULAS.length} Ch)
              </button>
              <button
                onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 12 ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 12 ({CLASS_12_MATH_FORMULAS.length} Ch)
              </button>
            </div>
          )}

          <div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-emerald-500 transition"
            >
              <option value="">All Mathematics Branches (Algebra, Calculus, Conics, etc.)</option>
              {categoriesList.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {activeTab === 'handbook' && (
            <div>
              <select
                value={selectedChapter}
                onChange={e => setSelectedChapter(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-emerald-500 transition"
              >
                <option value="">All Class {selectedClass} Chapters</option>
                {currentClassData.map(ch => (
                  <option key={ch.id} value={ch.id}>{ch.chapterNumber}. {ch.chapter}</option>
                ))}
              </select>
            </div>
          )}

          <div className={`relative ${activeTab !== 'handbook' ? 'md:col-span-3' : ''}`}>
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search formula, theorem, graph, derivation, identity..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 font-medium outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>
      </div>

      {/* TAB 1: HANDBOOK */}
      {activeTab === 'handbook' && (
        <div className="space-y-8">
          {filteredHandbookChapters.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-emerald-400/50" />
              <p className="font-bold text-base text-slate-300">No chapters match your search query or filters.</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing filters or searching for different keywords.</p>
            </div>
          ) : (
            filteredHandbookChapters.map(ch => (
              <div key={ch.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 font-extrabold flex items-center justify-center text-base border border-emerald-500/30">
                      {ch.chapterNumber}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-white">{ch.chapter}</h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant="brand">Class {ch.class}</Badge>
                        <Badge variant="cyan">{ch.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-2">
                  {ch.subtopics.map(sub => {
                    const subId = `${ch.id}_${sub.subtopic}`;
                    const isFav = favorites.includes(subId);
                    const isCollapsed = expandedSubtopics[subId] === false;
                    const { concept, formulaReaction, shortcuts, importantResults } = sub.sections;

                    return (
                      <div key={sub.subtopic} className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <button
                            onClick={() => toggleSubtopicExpand(subId)}
                            className="flex items-center gap-2 text-left font-bold text-slate-200 text-sm hover:text-emerald-400 transition cursor-pointer"
                          >
                            <ChevronRight className={`w-4 h-4 text-emerald-400 transition-transform ${!isCollapsed ? 'rotate-90' : ''}`} />
                            <span>{sub.subtopic}</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleFavorite(subId)}
                              className={`p-1.5 rounded-lg border transition cursor-pointer ${isFav ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-400'}`}
                            >
                              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                            </button>
                          </div>
                        </div>

                        {!isCollapsed && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            {concept && (
                              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                                <h4 className="font-bold text-emerald-300 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Concept Overview
                                </h4>
                                <div className="text-slate-300 leading-relaxed">
                                  <MathRenderer text={concept} />
                                </div>
                              </div>
                            )}

                            {formulaReaction && (
                              <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-1.5">
                                <h4 className="font-bold text-emerald-300 flex items-center gap-1.5">
                                  <Zap className="w-3.5 h-3.5 text-emerald-400" /> Key Equations & Relations
                                </h4>
                                <div className="text-emerald-200 font-semibold leading-relaxed">
                                  <MathRenderer text={formulaReaction} />
                                </div>
                              </div>
                            )}

                            {shortcuts && (
                              <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1.5 md:col-span-2">
                                <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Shortcuts & Exam Tricks
                                </h4>
                                <div className="text-slate-200 font-semibold leading-relaxed">
                                  <MathRenderer text={shortcuts} />
                                </div>
                              </div>
                            )}

                            {importantResults && (
                              <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-1.5 md:col-span-2">
                                <h4 className="font-bold text-indigo-300 flex items-center gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-indigo-400" /> Key Exam Results
                                </h4>
                                <div className="text-indigo-100 leading-relaxed">
                                  <MathRenderer text={importantResults} />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 2: ENTRANCE SHORTCUTS & TRIPLES */}
      {activeTab === 'shortcuts' && (
        <div className="space-y-6">
          {/* Pythagorean Triples */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Essential Pythagorean Triples (Speed Up Geometry)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {MATH_PYTHAGOREAN_TRIPLES.map((t, idx) => (
                <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-amber-300 font-extrabold text-sm">
                    <span>Triple: {t.triple}</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    <span className="text-slate-500">Multiples: </span>
                    <span className="font-mono text-slate-300">{t.multiples}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Entrance Exam Shortcuts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MATH_ENTRANCE_SHORTCUTS.map((s, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
                <h4 className="text-sm font-extrabold text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" /> {s.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.concept}</p>
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-200">
                  <MathRenderer text={s.formula.startsWith('$') ? s.formula : `$${s.formula}$`} />
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-amber-200">
                  <strong className="text-amber-400">Example: </strong>{s.example}
                </div>
              </div>
            ))}
          </div>

          {/* Logarithm & Exponents Properties */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-cyan-400" /> Logarithm & Exponent Properties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {MATH_LOG_EXP_PROPERTIES.map((p, idx) => (
                <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span>{p.name}</span>
                    <span className="text-cyan-300 font-mono"><MathRenderer text={`$${p.relation}$`} /></span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    <MathRenderer text={p.note} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Algebraic Identities */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Grid className="w-5 h-5 text-emerald-400" /> Essential Algebraic Identities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {MATH_ALGEBRAIC_IDENTITIES.map((id, idx) => (
                <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] font-bold block">{id.name}</span>
                  <div className="text-emerald-300 font-mono font-semibold">
                    <MathRenderer text={`$${id.formula}$`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MASTER SHEETS */}
      {activeTab === 'mastersheets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMasterSheets.map((sheet) => (
            <div key={sheet.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-start gap-2">
                <Badge variant="cyan">{sheet.category}</Badge>
              </div>
              <h3 className="text-base font-bold text-white">{sheet.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{sheet.summary}</p>
              {sheet.keyFormulas && sheet.keyFormulas.length > 0 && (
                <div className="space-y-2 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                  {sheet.keyFormulas.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-slate-200 border-b border-slate-800/60 pb-1.5 last:border-none last:pb-0">
                      <span className="font-semibold text-slate-300">{item.name}:</span>
                      <span className="text-emerald-300 font-mono pl-2"><MathRenderer text={item.formula?.startsWith("$") ? item.formula : `$${item.formula}$`} /></span>
                    </div>
                  ))}
                </div>
              )}
              {sheet.shortcut && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                  <span className="text-amber-400 font-bold block mb-1">⚡ Exam Shortcut:</span>
                  <MathRenderer text={sheet.shortcut} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: GRAPHS LIBRARY WITH 2D VISUAL SVGS */}
      {activeTab === 'graphs' && (
        <div className="space-y-6">
          {/* Sub-tab Filter for Graphs */}
          <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 text-xs font-bold overflow-x-auto">
            {['ALL', 'Algebra', 'Trigonometry', 'Inverse Trigonometry', 'Conics', 'Calculus'].map(cat => (
              <button
                key={cat}
                onClick={() => setGraphCategory(cat)}
                className={`px-4 py-2 rounded-lg transition cursor-pointer whitespace-nowrap ${graphCategory === cat ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
              >
                {cat === 'ALL' ? 'All Graphs' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGraphs.map(g => (
              <div key={g.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="brand">{g.category}</Badge>
                  </div>
                  <h3 className="text-base font-extrabold text-white">{g.title}</h3>

                  {/* 2D Visual SVG Graph Renderer */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-center items-center overflow-hidden">
                    <MathGraphSvg graphId={g.id} className="w-full h-48 max-w-sm" />
                  </div>

                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 font-mono">
                    <MathRenderer text={`$${g.equation}$`} />
                  </div>

                  <div className="text-xs text-slate-300 leading-relaxed">
                    <MathRenderer text={g.description} />
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                    <span className="shrink-0">💡 Key Feature:</span>
                    <div><MathRenderer text={g.keyFeature} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: PROOFS & DERIVATIONS */}
      {activeTab === 'derivations' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs font-bold gap-3">
            <span className="text-slate-300 font-bold">
              Class 11 & Class 12 Step-by-Step Proofs & Derivations ({filteredDerivations.length})
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setDerivationClassFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === 'ALL' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                All ({MASTER_MATH_DERIVATIONS.length})
              </button>
              <button
                onClick={() => setDerivationClassFilter('11')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === '11' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Class 11 ({MASTER_MATH_DERIVATIONS.filter(d => d.class === 11).length})
              </button>
              <button
                onClick={() => setDerivationClassFilter('12')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === '12' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Class 12 ({MASTER_MATH_DERIVATIONS.filter(d => d.class === 12).length})
              </button>
              <button
                onClick={toggleExpandAllDerivations}
                className="ml-2 px-3.5 py-1.5 bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded-lg transition cursor-pointer flex items-center gap-1.5"
              >
                {expandAllDerivations ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredDerivations.map(der => {
              const isExpanded = expandedDerivations[der.id] ?? expandAllDerivations;
              return (
                <div key={der.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="cyan">Class {der.class}</Badge>
                      <Badge variant="purple">{der.category}</Badge>
                      <h3 className="text-base font-extrabold text-white">{der.title}</h3>
                    </div>

                    <button
                      onClick={() => toggleDerivationExpand(der.id)}
                      className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                    >
                      <span>{isExpanded ? 'Hide Steps' : 'View Proof'}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs font-semibold text-emerald-200">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Target Result / Theorem:</span>
                    <MathRenderer text={der.targetResult?.startsWith('$') ? der.targetResult : `$${der.targetResult}$`} />
                  </div>

                  {isExpanded && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-emerald-400" /> Step-by-Step Mathematical Proof:
                      </h4>
                      <div className="space-y-2.5">
                        {der.steps.map((step, sIdx) => (
                          <div key={sIdx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
                            <MathRenderer text={step} />
                          </div>
                        ))}
                      </div>

                      {der.examTip && (
                        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                          <strong className="text-amber-400">Exam Note / Tip: </strong>
                          <MathRenderer text={der.examTip} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 6: QUICK REVISION (FLASHCARDS) */}
      {activeTab === 'quick' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">
              Card {currentFlashcardIndex + 1} of {allFlashcards.length}
            </span>
            <div className="flex gap-2 text-xs font-bold overflow-x-auto">
              {['All', 'Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFlashcardFilter(cat); setCurrentFlashcardIndex(0); setIsFlipped(false); }}
                  className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${flashcardFilter === cat ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {currentCard ? (
            <div className="relative min-h-[340px] perspective-1000">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full min-h-[340px] p-8 rounded-3xl border border-emerald-500/30 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isFlipped ? 'bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950' : 'bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="cyan">{currentCard.category}</Badge>
                    <span className="text-xs text-emerald-300 font-semibold">{currentCard.chapter}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-4">{currentCard.subtopic}</h3>

                  {!isFlipped ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
                        <span className="text-emerald-400 font-bold block mb-1">💡 Concept Summary:</span>
                        <MathRenderer text={currentCard.concept || 'Tap to flip card and view math formulas.'} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentCard.formula && (
                        <div className="p-4 bg-emerald-950/80 rounded-2xl border border-emerald-500/40 text-xs text-emerald-100 font-semibold leading-relaxed">
                          <span className="text-emerald-300 font-bold block mb-1">⚡ Key Formulas & Relations:</span>
                          <MathRenderer text={currentCard.formula} />
                        </div>
                      )}
                      {currentCard.shortcuts && (
                        <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                          <span className="text-amber-400 font-bold block mb-1">⚡ Exam Shortcut:</span>
                          <MathRenderer text={currentCard.shortcuts} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1"><RotateCw className="w-3.5 h-3.5 text-emerald-400" /> Tap anywhere to flip card</span>
                  <span className="text-emerald-300">{isFlipped ? 'Answer Side' : 'Question Side'}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 p-8">No flashcards available.</div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrevCard}
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-emerald-500 rounded-xl font-bold text-white text-xs transition cursor-pointer"
            >
              ← Previous Card
            </button>
            <button
              onClick={() => {
                const rand = Math.floor(Math.random() * (allFlashcards.length || 1));
                setCurrentFlashcardIndex(rand);
                setIsFlipped(false);
              }}
              className="px-4 py-3 bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-900 rounded-xl font-bold text-emerald-200 text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Random Card
            </button>
            <button
              onClick={handleNextCard}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-white text-xs transition cursor-pointer shadow-lg shadow-emerald-600/30"
            >
              Next Card →
            </button>
          </div>
        </div>
      )}

      {/* TAB 7: FAVORITES */}
      {activeTab === 'favorites' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> Starred Favorites ({favorites.length})
            </h3>
            {favorites.length > 0 && (
              <button
                onClick={() => setFavorites([])}
                className="px-3 py-1.5 bg-rose-950/40 border border-rose-500/30 text-rose-300 rounded-lg text-xs font-bold hover:bg-rose-900/60 transition cursor-pointer"
              >
                Clear All Favorites
              </button>
            )}
          </div>

          {favorites.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Star className="w-12 h-12 mx-auto mb-3 text-amber-400/40" />
              <p className="font-bold text-base text-slate-300">No favorite items saved yet.</p>
              <p className="text-xs text-slate-500 mt-1">Click the ⭐ icon on any math subtopic, graph, or proof to save it here for quick access.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {favorites.map(favId => {
                const item = favoriteItemsMap[favId];
                if (!item) {
                  return (
                    <div key={favId} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-emerald-400 block mb-1">Starred Math Item</span>
                        <h4 className="text-sm font-extrabold text-white">{favId.replace(/_/g, ' ')}</h4>
                      </div>
                      <button
                        onClick={() => toggleFavorite(favId)}
                        className="p-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold cursor-pointer"
                      >
                        <Star className="w-4 h-4 fill-amber-400" />
                      </button>
                    </div>
                  );
                }

                const { concept, formulaReaction, shortcuts, importantResults } = item.sections;

                return (
                  <div key={favId} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="brand">Class {item.class}</Badge>
                        <Badge variant="cyan">{item.category}</Badge>
                        <span className="text-xs text-slate-400 font-semibold">{item.chapterNumber}. {item.chapter}</span>
                        <h3 className="text-base font-extrabold text-white block w-full sm:w-auto">{item.subtopic}</h3>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          onClick={() => openFavoriteInHandbook(item)}
                          className="px-3.5 py-1.5 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 text-emerald-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Open in Handbook</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleFavorite(favId)}
                          className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 transition cursor-pointer"
                        >
                          <Star className="w-4 h-4 fill-amber-400" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                      {concept && (
                        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                          <h4 className="font-bold text-emerald-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Concept Overview
                          </h4>
                          <div className="text-slate-300 leading-relaxed">
                            <MathRenderer text={concept} />
                          </div>
                        </div>
                      )}

                      {formulaReaction && (
                        <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-1.5">
                          <h4 className="font-bold text-emerald-300 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-emerald-400" /> Key Equations & Relations
                          </h4>
                          <div className="text-emerald-200 font-semibold leading-relaxed">
                            <MathRenderer text={formulaReaction} />
                          </div>
                        </div>
                      )}

                      {shortcuts && (
                        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1.5 md:col-span-2">
                          <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Shortcuts & Exam Tricks
                          </h4>
                          <div className="text-slate-200 font-semibold leading-relaxed">
                            <MathRenderer text={shortcuts} />
                          </div>
                        </div>
                      )}

                      {importantResults && (
                        <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-1.5 md:col-span-2">
                          <h4 className="font-bold text-indigo-300 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-indigo-400" /> Key Exam Results
                          </h4>
                          <div className="text-indigo-100 leading-relaxed">
                            <MathRenderer text={importantResults} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

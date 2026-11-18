import React, { useState, useEffect, useMemo } from 'react';
import MathRenderer from '../renderer/MathRenderer';
import Badge from '../Badge';
import PhysicsGraphSvg from '../PhysicsGraphSvg';
import {
  CLASS_11_PHYSICS_FORMULAS,
  CLASS_12_PHYSICS_FORMULAS,
  MASTER_PHYSICS_GRAPHS,
  MASTER_PHYSICS_DERIVATIONS,
  PHYSICS_CONSTANTS,
  PHYSICS_CONVERSIONS_AND_APPROX,
  MASTER_PHYSICS_SHEETS,
  PHYSICS_DIMENSIONS
} from '../../data/allPhysicsData';
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
  Ruler
} from 'lucide-react';

export default function PhysicsFormulaBook({ onSelectSubject }) {
  const navigate = (path) => {
    if (onSelectSubject) {
      if (path.includes('chemistry')) onSelectSubject('Chemistry');
      else if (path.includes('formula-book')) onSelectSubject('Mathematics');
      else onSelectSubject('Physics');
    }
  };

  const [activeTab, setActiveTab] = useState('handbook'); // 'handbook', 'dimensions', 'mastersheets', 'graphs', 'derivations', 'quick', 'constants', 'favorites'
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
      const saved = localStorage.getItem('examverse_phy_favs');
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
      localStorage.setItem('examverse_phy_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed saving physics favorites to localStorage', e);
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
    MASTER_PHYSICS_DERIVATIONS.forEach(d => {
      newExpanded[d.id] = nextState;
    });
    setExpandedDerivations(newExpanded);
  };

  // Combine chapter formula data
  const allChapterData = useMemo(() => {
    return [...CLASS_11_PHYSICS_FORMULAS, ...CLASS_12_PHYSICS_FORMULAS];
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
    'Mechanics',
    'Properties of Matter',
    'Heat & Thermodynamics',
    'Waves & Oscillations',
    'Electricity & Magnetism',
    'Optics',
    'Modern Physics',
    'Semiconductors'
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

  // Filtered Dimensions
  const filteredDimensions = useMemo(() => {
    return PHYSICS_DIMENSIONS.filter(dim => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          dim.quantity.toLowerCase().includes(q) ||
          dim.symbol.toLowerCase().includes(q) ||
          dim.formula.toLowerCase().includes(q) ||
          dim.siUnit.toLowerCase().includes(q) ||
          dim.dimension.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery]);

  // Filtered Master Sheets
  const filteredMasterSheets = useMemo(() => {
    return MASTER_PHYSICS_SHEETS.filter(sheet => {
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

  // Filtered Physics Graphs
  const filteredGraphs = useMemo(() => {
    return MASTER_PHYSICS_GRAPHS.filter(g => {
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

  // Filtered Derivations
  const filteredDerivations = useMemo(() => {
    return MASTER_PHYSICS_DERIVATIONS.filter(d => {
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
            <span className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 font-bold text-xl">⚡</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Complete Intermediate Physics Formula Bank
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Exhaustive Class 11 & Class 12 Physics Reference • Formulas, Units & Dimensions, Master Graphs, Derivations & Constants
              </p>
            </div>
          </div>
        </div>

        {/* Subject Switcher Buttons */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => navigate('/formula-book')}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1.5"
          >
            <span>📐 Mathematics Formula Bank</span>
          </button>
          <button
            onClick={() => onSelectSubject && onSelectSubject('Physics')}
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white shadow-xs transition cursor-pointer flex items-center gap-1.5 font-bold"
          >
            <Zap className="w-3.5 h-3.5 fill-current text-amber-300" />
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
      <div className="bg-gradient-to-r from-cyan-950 via-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> COMPLETE PHYSICS FORMULA HANDBOOK
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Intermediate Class 11 & Class 12 Physics Formula Bank
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200 mt-1 max-w-3xl leading-relaxed">
              Exhaustive reference covering all 28 Physics chapters (14 Class 11 + 14 Class 12), {PHYSICS_DIMENSIONS.length} Units & Dimensions, 5 Master Sheets, {MASTER_PHYSICS_GRAPHS.length} Key Graphs with 2D Visuals, {MASTER_PHYSICS_DERIVATIONS.length} Derivations, and Physical Constants.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { setSelectedClass(11); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 11 ? 'bg-cyan-600 text-white shadow-xs' : 'text-cyan-200 hover:text-white'}`}
            >
              Class 11 (1st Year)
            </button>
            <button
              onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 12 ? 'bg-cyan-600 text-white shadow-xs' : 'text-cyan-200 hover:text-white'}`}
            >
              Class 12 (2nd Year)
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-5" />
          <input
            type="text"
            placeholder="Search formula, law, dimension, graph, derivation, constant, unit (e.g. Gauss, Projectile, Bernoulli, Carnot, Photoelectric)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-medium text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
        {[
          { id: 'handbook', label: '📚 Chapter Handbook', icon: BookOpen },
          { id: 'dimensions', label: `📏 Units & Dimensions (${PHYSICS_DIMENSIONS.length})`, icon: Ruler },
          { id: 'mastersheets', label: `📄 Master Sheets (${MASTER_PHYSICS_SHEETS.length})`, icon: Layers },
          { id: 'graphs', label: `📈 Master Graphs (${MASTER_PHYSICS_GRAPHS.length})`, icon: TrendingUp },
          { id: 'derivations', label: `📐 Derivations (${MASTER_PHYSICS_DERIVATIONS.length})`, icon: FileText },
          { id: 'quick', label: '⚡ Quick Revision Mode', icon: Zap },
          { id: 'constants', label: '📊 Constants & Conversions', icon: Table },
          { id: 'favorites', label: `⭐ Favorites (${favorites.length})`, icon: Star }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-cyan-600 text-white shadow-sm'
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
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 11 ? 'bg-cyan-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 11 ({CLASS_11_PHYSICS_FORMULAS.length} Ch)
              </button>
              <button
                onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 12 ? 'bg-cyan-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 12 ({CLASS_12_PHYSICS_FORMULAS.length} Ch)
              </button>
            </div>
          )}

          <div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-cyan-500 transition"
            >
              <option value="">All Physics Branches (Mechanics, Optics, Modern, etc.)</option>
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-cyan-500 transition"
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
              placeholder="Search formula, law, graph, derivation, constant, unit..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 font-medium outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>
      </div>

      {/* TAB 1: HANDBOOK */}
      {activeTab === 'handbook' && (
        <div className="space-y-8">
          {filteredHandbookChapters.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-cyan-400/50" />
              <p className="font-bold text-base text-slate-300">No chapters match your search query or filters.</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing filters or searching for different keywords.</p>
            </div>
          ) : (
            filteredHandbookChapters.map(ch => (
              <div key={ch.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 font-extrabold flex items-center justify-center text-base border border-cyan-500/30">
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
                            className="flex items-center gap-2 text-left font-bold text-slate-200 text-sm hover:text-cyan-400 transition cursor-pointer"
                          >
                            <ChevronRight className={`w-4 h-4 text-cyan-400 transition-transform ${!isCollapsed ? 'rotate-90' : ''}`} />
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
                                <h4 className="font-bold text-cyan-300 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Concept Overview
                                </h4>
                                <div className="text-slate-300 leading-relaxed">
                                  <MathRenderer text={concept} />
                                </div>
                              </div>
                            )}

                            {formulaReaction && (
                              <div className="p-3.5 bg-cyan-950/40 border border-cyan-500/30 rounded-xl space-y-1.5">
                                <h4 className="font-bold text-cyan-300 flex items-center gap-1.5">
                                  <Zap className="w-3.5 h-3.5 text-cyan-400" /> Key Equations & Relations
                                </h4>
                                <div className="text-cyan-200 font-semibold leading-relaxed">
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

      {/* TAB 2: UNITS & DIMENSIONS */}
      {activeTab === 'dimensions' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs font-bold gap-3">
            <span className="text-slate-300 font-bold">
              Complete SI Units & Dimensional Formulas Library ({filteredDimensions.length} Physical Quantities)
            </span>
            <div className="text-slate-400 text-[11px] font-normal">
              Dimensions in standard <span className="text-cyan-300 font-mono">[M^a L^b T^c A^d K^e]</span> form
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDimensions.map((dim, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 shadow-xl space-y-3 transition flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm font-extrabold text-white">{dim.quantity}</h3>
                    <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded-md text-[11px] font-mono text-cyan-300 shrink-0">
                      <MathRenderer text={dim.symbol.startsWith('$') ? dim.symbol : `$${dim.symbol}$`} />
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Formula / Relation:</div>
                    <div className="text-slate-200 font-mono">
                      <MathRenderer text={dim.formula.startsWith('$') ? dim.formula : `$${dim.formula}$`} />
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">SI Unit:</div>
                    <div className="text-emerald-300 font-mono">
                      <MathRenderer text={dim.siUnit.startsWith('$') ? dim.siUnit : `$${dim.siUnit}$`} />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-cyan-950/60 border border-cyan-500/40 rounded-xl text-xs text-cyan-200 font-mono flex items-center justify-between">
                  <span className="text-cyan-400 font-bold text-[10px] uppercase">Dimensional Formula:</span>
                  <span className="text-sm font-extrabold text-cyan-300">
                    <MathRenderer text={`$${dim.dimension}$`} />
                  </span>
                </div>
              </div>
            ))}
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
                      <span className="text-cyan-300 font-mono pl-2"><MathRenderer text={item.formula?.startsWith("$") ? item.formula : `$${item.formula}$`} /></span>
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
            {['ALL', 'Mechanics', 'Thermal Physics', 'Electricity & Magnetism', 'Optics', 'Modern Physics', 'Semiconductors'].map(cat => (
              <button
                key={cat}
                onClick={() => setGraphCategory(cat)}
                className={`px-4 py-2 rounded-lg transition cursor-pointer whitespace-nowrap ${graphCategory === cat ? 'bg-cyan-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
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
                    <PhysicsGraphSvg graphId={g.id} className="w-full h-48 max-w-sm" />
                  </div>

                  <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-200 font-mono">
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

      {/* TAB 5: DERIVATIONS */}
      {activeTab === 'derivations' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs font-bold gap-3">
            <span className="text-slate-300 font-bold">
              Class 11 & Class 12 Step-by-Step Derivations ({filteredDerivations.length})
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setDerivationClassFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === 'ALL' ? 'bg-cyan-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                All ({MASTER_PHYSICS_DERIVATIONS.length})
              </button>
              <button
                onClick={() => setDerivationClassFilter('11')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === '11' ? 'bg-cyan-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Class 11 ({MASTER_PHYSICS_DERIVATIONS.filter(d => d.class === 11).length})
              </button>
              <button
                onClick={() => setDerivationClassFilter('12')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${derivationClassFilter === '12' ? 'bg-cyan-600 text-white shadow-xs' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Class 12 ({MASTER_PHYSICS_DERIVATIONS.filter(d => d.class === 12).length})
              </button>
              <button
                onClick={toggleExpandAllDerivations}
                className="ml-2 px-3.5 py-1.5 bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 rounded-lg transition cursor-pointer flex items-center gap-1.5"
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
                      className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-cyan-400 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                    >
                      <span>{isExpanded ? 'Hide Steps' : 'View Derivation'}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  <div className="p-3.5 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-200">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Target Result:</span>
                    <MathRenderer text={der.targetResult?.startsWith('$') ? der.targetResult : `$${der.targetResult}$`} />
                  </div>

                  {isExpanded && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-cyan-400" /> Step-by-Step Derivation:
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
              {['All', 'Mechanics', 'Electricity & Magnetism', 'Optics', 'Modern Physics'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFlashcardFilter(cat); setCurrentFlashcardIndex(0); setIsFlipped(false); }}
                  className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${flashcardFilter === cat ? 'bg-cyan-600 text-white' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
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
                className={`w-full min-h-[340px] p-8 rounded-3xl border border-cyan-500/30 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isFlipped ? 'bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950' : 'bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-950'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="cyan">{currentCard.category}</Badge>
                    <span className="text-xs text-cyan-300 font-semibold">{currentCard.chapter}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-4">{currentCard.subtopic}</h3>

                  {!isFlipped ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
                        <span className="text-cyan-400 font-bold block mb-1">💡 Concept Summary:</span>
                        <MathRenderer text={currentCard.concept || 'Tap to flip card and view physics formulas.'} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentCard.formula && (
                        <div className="p-4 bg-cyan-950/80 rounded-2xl border border-cyan-500/40 text-xs text-cyan-100 font-semibold leading-relaxed">
                          <span className="text-cyan-300 font-bold block mb-1">⚡ Key Equations:</span>
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
                  <span className="flex items-center gap-1"><RotateCw className="w-3.5 h-3.5 text-cyan-400" /> Tap anywhere to flip card</span>
                  <span className="text-cyan-300">{isFlipped ? 'Answer Side' : 'Question Side'}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 p-8">No flashcards available.</div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrevCard}
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-xl font-bold text-white text-xs transition cursor-pointer"
            >
              ← Previous Card
            </button>
            <button
              onClick={() => {
                const rand = Math.floor(Math.random() * (allFlashcards.length || 1));
                setCurrentFlashcardIndex(rand);
                setIsFlipped(false);
              }}
              className="px-4 py-3 bg-cyan-950 border border-cyan-500/40 hover:bg-cyan-900 rounded-xl font-bold text-cyan-200 text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Random Card
            </button>
            <button
              onClick={handleNextCard}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold text-white text-xs transition cursor-pointer shadow-lg shadow-cyan-600/30"
            >
              Next Card →
            </button>
          </div>
        </div>
      )}

      {/* TAB 7: CONSTANTS & CONVERSIONS */}
      {activeTab === 'constants' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-cyan-400" /> Fundamental Physical Constants
            </h3>
            <div className="space-y-3">
              {PHYSICS_CONSTANTS.map((c, i) => (
                <div key={i} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <div className="flex justify-between items-center text-white font-bold gap-2">
                    <span>
                      {c.name}{' '}
                      {c.symbol && (
                        <span className="text-slate-400 font-mono font-normal">
                          (<MathRenderer text={c.symbol.startsWith('$') ? c.symbol : `$${c.symbol}$`} />)
                        </span>
                      )}
                    </span>
                    <span className="text-cyan-300 font-mono text-right shrink-0">
                      <MathRenderer text={`$${c.value} \\; ${c.unit}$`} />
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px] leading-relaxed">
                    <MathRenderer text={c.usage} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Grid className="w-5 h-5 text-emerald-400" /> Units Conversion & Math Approximations
            </h3>
            <div className="space-y-3 text-xs">
              {PHYSICS_CONVERSIONS_AND_APPROX.map((ca, i) => (
                <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span>{ca.name}</span>
                    <span className="text-emerald-400 font-mono"><MathRenderer text={`$${ca.relation}$`} /></span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    <MathRenderer text={ca.note} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 8: FAVORITES */}
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
              <p className="text-xs text-slate-500 mt-1">Click the ⭐ icon on any physics subtopic, graph, or derivation to save it here for quick access.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {favorites.map(favId => {
                const item = favoriteItemsMap[favId];
                if (!item) {
                  return (
                    <div key={favId} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-cyan-400 block mb-1">Starred Physics Item</span>
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
                          className="px-3.5 py-1.5 bg-cyan-950/80 border border-cyan-500/40 hover:bg-cyan-900 text-cyan-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
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
                          <h4 className="font-bold text-cyan-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Concept Overview
                          </h4>
                          <div className="text-slate-300 leading-relaxed">
                            <MathRenderer text={concept} />
                          </div>
                        </div>
                      )}

                      {formulaReaction && (
                        <div className="p-3.5 bg-cyan-950/40 border border-cyan-500/30 rounded-xl space-y-1.5">
                          <h4 className="font-bold text-cyan-300 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-cyan-400" /> Key Equations & Relations
                          </h4>
                          <div className="text-cyan-200 font-semibold leading-relaxed">
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

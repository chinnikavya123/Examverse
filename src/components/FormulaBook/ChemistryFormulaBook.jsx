import React, { useState, useEffect, useMemo } from 'react';
import MathRenderer from '../renderer/MathRenderer';
import VSEPRStructureSvg from '../VSEPRStructureSvg';
import Badge from '../Badge';
import { CLASS_11_CHEMISTRY_FORMULAS } from '../../data/class11ChemistryFormulas';
import { CLASS_12_CHEMISTRY_FORMULAS } from '../../data/class12ChemistryFormulas';
import { MASTER_CHEMISTRY_SHEETS } from '../../data/masterChemistrySheets';
import { CHEMISTRY_CONSTANTS, COMMON_ATOMIC_MASSES } from '../../data/chemistryConstants';
import { CHEMISTRY_REAGENTS } from '../../data/chemistryReagents';
import { CHEMISTRY_NAMED_REACTIONS } from '../../data/chemistryNamedReactions';
import { CHEMISTRY_STRUCTURES } from '../../data/chemistryStructures';
import { ORGANIC_QUALITATIVE_TESTS, FLAME_COLORS, PRECIPITATE_COLORS, TRANSITION_ION_COLORS } from '../../data/chemistryQualitativeTests';
import {
  BookOpen,
  Search,
  Star,
  Zap,
  Table,
  ListFilter,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Copy,
  Check,
  AlertTriangle,
  Flame,
  Atom,
  TestTube,
  Beaker,
  GitCommit,
  Grid,
  TrendingUp,
  RotateCw,
  Bookmark,
  ArrowRight,
  Eye,
  RefreshCw,
  Filter,
  Info
} from 'lucide-react';

export default function ChemistryFormulaBook({ onSelectSubject }) {
  const navigate = (path) => {
    if (onSelectSubject) {
      if (path.includes('physics')) onSelectSubject('Physics');
      else if (path.includes('formula-book')) onSelectSubject('Mathematics');
      else onSelectSubject('Chemistry');
    }
  };

  const [activeTab, setActiveTab] = useState('handbook'); // 'handbook', 'mastersheets', 'quick', 'reactions', 'roadmap', 'reagents', 'vsepr', 'qualitative', 'constants', 'favorites'
  const [selectedClass, setSelectedClass] = useState(11); // 11 or 12
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedFormula, setCopiedFormula] = useState(null);

  // Sub-tab state for Qualitative Tests
  const [qualSubTab, setQualSubTab] = useState('all'); // 'all', 'organic', 'flame', 'precipitate', 'transition'

  // Organic Master Block Filter State
  const [organicClassFilter, setOrganicClassFilter] = useState('All'); // 'All', '11', '12'

  // Accordion state for expanded subtopics
  const [expandedSubtopics, setExpandedSubtopics] = useState({});

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('examverse_chem_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Flashcards state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardFilter, setFlashcardFilter] = useState('All');

  // Organic roadmap state
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('examverse_chem_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed saving favorites to localStorage', e);
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

  const handleCopy = (text, id) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedFormula(id);
      setTimeout(() => setCopiedFormula(null), 2000);
    } catch (e) {
      console.error('Failed copying text to clipboard', e);
    }
  };

  // Combine chapter formula data
  const allChapterData = useMemo(() => {
    return [...CLASS_11_CHEMISTRY_FORMULAS, ...CLASS_12_CHEMISTRY_FORMULAS];
  }, []);

  const currentClassData = useMemo(() => {
    return allChapterData.filter(ch => ch.class === selectedClass);
  }, [allChapterData, selectedClass]);

  const categoriesList = ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'];

  // Filtered chapters for Organic Master Block
  const filteredOrganicChapters = useMemo(() => {
    return allChapterData.filter(ch => {
      if (ch.category !== 'Organic Chemistry') return false;
      if (organicClassFilter !== 'All' && ch.class !== Number(organicClassFilter)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesChap = ch.chapter.toLowerCase().includes(q);
        const matchesSubtopics = ch.subtopics.some(sub =>
          sub.subtopic.toLowerCase().includes(q) ||
          Object.values(sub.sections).some(val => val && typeof val === 'string' && val.toLowerCase().includes(q))
        );
        return matchesChap || matchesSubtopics;
      }
      return true;
    });
  }, [allChapterData, organicClassFilter, searchQuery]);

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
    return MASTER_CHEMISTRY_SHEETS.filter(sheet => {
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

  // Filtered Named Reactions
  const filteredNamedReactions = useMemo(() => {
    return CHEMISTRY_NAMED_REACTIONS.filter(rxn => {
      if (selectedCategory && rxn.category && rxn.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          rxn.name.toLowerCase().includes(q) ||
          (rxn.equation && rxn.equation.toLowerCase().includes(q)) ||
          (rxn.reactants && rxn.reactants.toLowerCase().includes(q)) ||
          (rxn.product && rxn.product.toLowerCase().includes(q)) ||
          (rxn.reagents && rxn.reagents.toLowerCase().includes(q)) ||
          (rxn.type && rxn.type.toLowerCase().includes(q)) ||
          (rxn.mechanism && rxn.mechanism.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Filtered Reagents
  const filteredReagents = useMemo(() => {
    return CHEMISTRY_REAGENTS.filter(reagent => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          reagent.name.toLowerCase().includes(q) ||
          (reagent.formula && reagent.formula.toLowerCase().includes(q)) ||
          (reagent.function && reagent.function.toLowerCase().includes(q)) ||
          (reagent.transformations && reagent.transformations.toLowerCase().includes(q)) ||
          (reagent.conditions && reagent.conditions.toLowerCase().includes(q)) ||
          (reagent.selectivity && reagent.selectivity.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery]);

  // Filtered Structures / VSEPR
  const filteredStructures = useMemo(() => {
    return CHEMISTRY_STRUCTURES.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          (item.formula && item.formula.toLowerCase().includes(q)) ||
          (item.shape && item.shape.toLowerCase().includes(q)) ||
          (item.hybridization && item.hybridization.toLowerCase().includes(q)) ||
          (item.properties && item.properties.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery]);

  // Filtered Qualitative Datasets
  const filteredOrganicTests = useMemo(() => {
    return ORGANIC_QUALITATIVE_TESTS.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.testName.toLowerCase().includes(q) ||
          (item.target && item.target.toLowerCase().includes(q)) ||
          (item.reagent && item.reagent.toLowerCase().includes(q)) ||
          (item.observation && item.observation.toLowerCase().includes(q)) ||
          (item.inference && item.inference.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery]);

  const filteredFlameColors = useMemo(() => {
    return FLAME_COLORS.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.element.toLowerCase().includes(q) || item.color.toLowerCase().includes(q) || item.ion.toLowerCase().includes(q);
      }
      return true;
    });
  }, [searchQuery]);

  const filteredPrecipitateColors = useMemo(() => {
    return PRECIPITATE_COLORS.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.compound.toLowerCase().includes(q) || item.color.toLowerCase().includes(q);
      }
      return true;
    });
  }, [searchQuery]);

  const filteredTransitionColors = useMemo(() => {
    return TRANSITION_ION_COLORS.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.ion.toLowerCase().includes(q) || item.color.toLowerCase().includes(q) || (item.note && item.note.toLowerCase().includes(q));
      }
      return true;
    });
  }, [searchQuery]);

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

  // Organic reaction conversion map data
  const reactionMapData = [
    { step: 1, from: "Alkane (R-H)", to: "Alkyl Halide (R-X)", reagent: "$X_2 / h\\nu$ (Free Radical Halogenation)", conditions: "UV light / Heat", type: "Free Radical Substitution" },
    { step: 2, from: "Alkyl Halide (R-X)", to: "Alkene (R-CH=CH2)", reagent: "Alcoholic KOH / $\\Delta$", conditions: "Heat, Saytzeff elimination", type: "Dehydrohalogenation (E2)" },
    { step: 3, from: "Alkene (R-CH=CH2)", to: "Alcohol (1° or 2°)", reagent: "1. B2H6 / THF  2. H2O2 / OH-", conditions: "Hydroboration-Oxidation (Anti-Markovnikov)", type: "Addition" },
    { step: 4, from: "Alcohol (1° R-CH2OH)", to: "Aldehyde (R-CHO)", reagent: "PCC (Pyridinium Chlorochromate) / CH2Cl2", conditions: "Anhydrous, stops at aldehyde", type: "Mild Oxidation" },
    { step: 5, from: "Aldehyde (R-CHO)", to: "Carboxylic Acid (R-COOH)", reagent: "KMnO4 / H+ or K2Cr2O7 / H+", conditions: "Acidic aqueous oxidation", type: "Strong Oxidation" },
    { step: 6, from: "Carboxylic Acid (R-COOH)", to: "Amide (R-CONH2)", reagent: "NH3 / $\\Delta$", conditions: "Heating ammonium salt", type: "Nucleophilic Acyl Substitution" },
    { step: 7, from: "Amide (R-CONH2)", to: "Primary Amine (R-NH2)", reagent: "Br2 + 4 NaOH (Hoffmann Bromamide)", conditions: "Heat, loses 1 carbon atom", type: "Degradation Rearrangement" },
    { step: 8, from: "Primary Amine (R-NH2)", to: "Diazonium Salt (Ar-N2+ Cl-)", reagent: "NaNO2 + HCl (0-5 °C)", conditions: "Ice-cold aqueous solution", type: "Diazotization" },
    { step: 9, from: "Diazonium Salt", to: "Aryl Halide / Phenol / Cyanide", reagent: "Sandmeyer Reagent (Cu2Cl2/HCl, Cu2Br2/HBr, CuCN/KCN)", conditions: "Room temperature displacement", type: "Nucleophilic Substitution" }
  ];

  // Helper for color rendering
  const getColorStyle = (colorName) => {
    const c = (colorName || '').toLowerCase();
    if (c.includes('red') || c.includes('crimson')) return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    if (c.includes('yellow') || c.includes('golden')) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    if (c.includes('violet') || c.includes('purple')) return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    if (c.includes('blue') || c.includes('cyan')) return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
    if (c.includes('green') || c.includes('apple')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    if (c.includes('white') || c.includes('curdy')) return 'bg-slate-200/20 text-slate-100 border-slate-300/40';
    if (c.includes('black') || c.includes('brown')) return 'bg-amber-950/40 text-amber-200 border-amber-800/40';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Subject Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 font-bold text-xl">🧪</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Complete Intermediate Chemistry Formula Bank
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Exhaustive Class 11 & Class 12 Chemistry Reference • Formulas, Reactions, Named Reactions, Reagents & VSEPR
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
            onClick={() => navigate('/physics-formula-book')}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-current text-cyan-400" />
            <span>⚡ Physics Formula Bank</span>
          </button>
          <button
            onClick={() => onSelectSubject && onSelectSubject('Chemistry')}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white shadow-xs transition cursor-pointer flex items-center gap-1.5 font-bold"
          >
            <TestTube className="w-3.5 h-3.5 text-emerald-300" />
            <span>🧪 Chemistry Formula Bank</span>
          </button>
        </div>
      </div>

      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-500/20 text-purple-300 border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> COMPLETE CHEMISTRY FORMULA HANDBOOK
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Intermediate Class 11 & Class 12 Chemistry Formula Bank
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-3xl leading-relaxed">
              Exhaustive reference covering all 29 Chemistry chapters (13 Class 11 + 16 Class 12), 26 Master Sheets, {CHEMISTRY_NAMED_REACTIONS.length} Named Reactions, {CHEMISTRY_REAGENTS.length} Reagents, VSEPR Structures, Constants, and Qualitative Tests.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { setSelectedClass(11); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 11 ? 'bg-purple-600 text-white shadow-xs' : 'text-purple-200 hover:text-white'}`}
            >
              Class 11 (1st Year)
            </button>
            <button
              onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${selectedClass === 12 ? 'bg-purple-600 text-white shadow-xs' : 'text-purple-200 hover:text-white'}`}
            >
              Class 12 (2nd Year)
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 text-purple-400 absolute left-4 top-5" />
          <input
            type="text"
            placeholder="Search by formula, reaction, reagent, exception, law, acid, catalyst, VSEPR structure..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-medium text-white placeholder:text-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
        {[
          { id: 'handbook', label: '📚 Chapter Handbook', icon: BookOpen },
          { id: 'organic_hub', label: '🧪 Organic Master Block (9)', icon: Sparkles },
          { id: 'mastersheets', label: `📄 Master Sheets (${MASTER_CHEMISTRY_SHEETS.length})`, icon: Layers },
          { id: 'quick', label: '⚡ Quick Revision Mode', icon: Zap },
          { id: 'reactions', label: `🔥 Named Reactions (${CHEMISTRY_NAMED_REACTIONS.length})`, icon: Flame },
          { id: 'roadmap', label: '🔄 Organic Conversion Map', icon: GitCommit },
          { id: 'reagents', label: `🧪 Reagents Library (${CHEMISTRY_REAGENTS.length})`, icon: TestTube },
          { id: 'vsepr', label: `⚛️ VSEPR & Structures (${CHEMISTRY_STRUCTURES.length})`, icon: Atom },
          { id: 'qualitative', label: '🧪 Qualitative Tests & Colors', icon: Beaker },
          { id: 'constants', label: '📊 Constants & Trends', icon: Table },
          { id: 'favorites', label: `⭐ Favorites (${favorites.length})`, icon: Star }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-sm'
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
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 11 ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 11 ({CLASS_11_CHEMISTRY_FORMULAS.length} Ch)
              </button>
              <button
                onClick={() => { setSelectedClass(12); setSelectedChapter(''); }}
                className={`flex-1 py-1.5 rounded-lg transition ${selectedClass === 12 ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-400'}`}
              >
                Class 12 ({CLASS_12_CHEMISTRY_FORMULAS.length} Ch)
              </button>
            </div>
          )}

          <div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-purple-500 transition"
            >
              <option value="">All Chemistry Branches (Physical, Inorganic, Organic)</option>
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium outline-none focus:border-purple-500 transition"
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
              placeholder="Search formula, reaction, reagent, exception, law, acid, catalyst..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 font-medium outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>
      </div>

      {/* TAB 1: HANDBOOK */}
      {activeTab === 'handbook' && (
        <div className="space-y-8">
          {filteredHandbookChapters.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-purple-400/50" />
              <p className="font-bold text-base text-slate-300">No chapters match your search query or filters.</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing filters or searching for different keywords.</p>
            </div>
          ) : (
            filteredHandbookChapters.map(ch => (
              <div key={ch.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-extrabold flex items-center justify-center text-base border border-purple-500/30">
                      {ch.chapterNumber}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-white">{ch.chapter}</h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant="brand">Class {ch.class}</Badge>
                        <Badge variant="purple">{ch.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-2">
                  {ch.subtopics.map(sub => {
                    const subId = `${ch.id}_${sub.subtopic}`;
                    const isFav = favorites.includes(subId);
                    const isCollapsed = expandedSubtopics[subId] === false;
                    const { concept, formulaReaction, conditions, exceptions, importantResults, reagents, namedReactions, constants, trends, shortcuts, commonMistakes } = sub.sections;

                    return (
                      <div key={sub.subtopic} className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <button
                            onClick={() => toggleSubtopicExpand(subId)}
                            className="flex items-center gap-2 text-left font-bold text-slate-200 text-sm hover:text-purple-400 transition cursor-pointer"
                          >
                            <ChevronRight className={`w-4 h-4 text-purple-400 transition-transform ${!isCollapsed ? 'rotate-90' : ''}`} />
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
                                <h4 className="font-bold text-purple-300 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Concept Overview
                                </h4>
                                <div className="text-slate-300 leading-relaxed">
                                  <MathRenderer text={concept} />
                                </div>
                              </div>
                            )}

                            {formulaReaction && (
                              <div className="p-3.5 bg-purple-950/40 border border-purple-500/30 rounded-xl space-y-1.5">
                                <h4 className="font-bold text-purple-300 flex items-center gap-1.5">
                                  <TestTube className="w-3.5 h-3.5 text-purple-400" /> Chemical Formulas & Reactions
                                </h4>
                                <div className="text-purple-200 font-semibold leading-relaxed">
                                  <MathRenderer text={formulaReaction} />
                                </div>
                              </div>
                            )}

                            {shortcuts && (
                              <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1.5 md:col-span-2">
                                <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Exam Shortcuts & Memory Tricks
                                </h4>
                                <div className="text-slate-200 font-semibold leading-relaxed">
                                  <MathRenderer text={shortcuts} />
                                </div>
                              </div>
                            )}

                            {importantResults && (
                              <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-1.5">
                                <h4 className="font-bold text-indigo-300 flex items-center gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-indigo-400" /> Key Exam Results
                                </h4>
                                <div className="text-indigo-100 leading-relaxed">
                                  <MathRenderer text={importantResults} />
                                </div>
                              </div>
                            )}

                            {exceptions && (
                              <div className="p-3.5 bg-rose-950/30 border border-rose-500/30 rounded-xl space-y-1.5">
                                <h4 className="font-bold text-rose-300 flex items-center gap-1.5">
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Exceptions & Limitations
                                </h4>
                                <div className="text-rose-100 leading-relaxed">
                                  <MathRenderer text={exceptions} />
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

      {/* TAB: DEDICATED ORGANIC MASTER BLOCK (9 CHAPTERS) */}
      {activeTab === 'organic_hub' && (
        <div className="space-y-6">
          {/* Organic Master Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> DEDICATED ORGANIC CHEMISTRY BLOCK
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  🧪 Organic Chemistry Master Hub
                </h2>
                <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-3xl leading-relaxed">
                  Exhaustive collection of all 9 Class 11 & Class 12 Organic Chemistry chapters formatted cleanly. Covers IUPAC, Isomerism, Reactions, Tests, Chemical Bonds (Glycosidic, Peptide, Phosphodiester, H-bonds, Disulfide), Polymers & Everyday Life.
                </p>
              </div>

              {/* Class Filter Pills */}
              <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto text-xs font-bold">
                {['All', '11', '12'].map(cls => (
                  <button
                    key={cls}
                    onClick={() => setOrganicClassFilter(cls)}
                    className={`px-3.5 py-2 rounded-lg transition cursor-pointer ${
                      organicClassFilter === cls ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cls === 'All' ? 'All 9 Chapters' : `Class ${cls}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-emerald-900/40 text-xs font-bold">
              <span className="text-emerald-300 mr-2">Quick Shortcuts:</span>
              <button
                onClick={() => setActiveTab('reactions')}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Named Reactions ({CHEMISTRY_NAMED_REACTIONS.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('reagents')}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-purple-300 border border-purple-500/30 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <TestTube className="w-3.5 h-3.5 text-purple-400" />
                <span>Reagents Library ({CHEMISTRY_REAGENTS.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <GitCommit className="w-3.5 h-3.5 text-indigo-400" />
                <span>Organic Conversion Map</span>
              </button>
              <button
                onClick={() => setActiveTab('qualitative')}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <Beaker className="w-3.5 h-3.5 text-emerald-400" />
                <span>Qualitative Tests ({ORGANIC_QUALITATIVE_TESTS.length})</span>
              </button>
            </div>
          </div>

          {/* Chemical Bonds Master Card (Biomolecules Feature) */}
          <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Atom className="w-5 h-5 text-purple-400" />
              <span>Biomolecular Chemical Bonds Breakdown (Key Exam Highlights)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3.5 bg-purple-950/40 border border-purple-500/30 rounded-xl space-y-1">
                <span className="text-purple-300 font-bold block">Peptide Bond</span>
                <div className="text-slate-300">
                  <MathRenderer text="$-CO-NH-$ amide linkage between $\alpha$-amino acids with loss of $\text{H}_2\text{O}$." />
                </div>
              </div>
              <div className="p-3.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl space-y-1">
                <span className="text-indigo-300 font-bold block">Glycosidic Bond</span>
                <div className="text-slate-300">
                  <MathRenderer text="$C-O-C$ acetal link joining monosaccharides ($\alpha$-1,4 in maltose, $\beta$-1,4 in cellulose)." />
                </div>
              </div>
              <div className="p-3.5 bg-sky-950/40 border border-sky-500/30 rounded-xl space-y-1">
                <span className="text-sky-300 font-bold block">Phosphodiester</span>
                <div className="text-slate-300">
                  <MathRenderer text="$3'-5'$ linkage joining $3'$-OH of sugar to $5'$-phosphate in DNA/RNA backbone." />
                </div>
              </div>
              <div className="p-3.5 bg-teal-950/40 border border-teal-500/30 rounded-xl space-y-1">
                <span className="text-teal-300 font-bold block">Hydrogen Bonds</span>
                <div className="text-slate-300">
                  <MathRenderer text="Stabilizes $\alpha$-helix & $\beta$-sheets; Watson-Crick DNA base pairing ($A=T$ 2 H-bonds, $G \equiv C$ 3 H-bonds)." />
                </div>
              </div>
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-1">
                <span className="text-emerald-300 font-bold block">Disulfide Bond</span>
                <div className="text-slate-300">
                  <MathRenderer text="$-S-S-$ covalent linkage between cysteine residues in tertiary protein structure." />
                </div>
              </div>
            </div>
          </div>

          {/* Organic Molecular Structures Gallery */}
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Atom className="w-5 h-5 text-emerald-400" />
                <span>Key Organic Molecular 2D Structures Gallery</span>
              </h3>
              <button
                onClick={() => setActiveTab('vsepr')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>View All Structures in Library</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { name: 'Benzene', formula: '$C_6H_6$', type: 'Aromatic Ring' },
                { name: 'Phenol', formula: '$C_6H_5OH$', type: 'Ar-OH' },
                { name: 'Aniline', formula: '$C_6H_5NH_2$', type: 'Ar-NH2' },
                { name: 'Benzoic Acid', formula: '$C_6H_5COOH$', type: 'Ar-COOH' },
                { name: 'Toluene', formula: '$C_6H_5CH_3$', type: 'Ar-CH3' },
                { name: 'Chlorobenzene', formula: '$C_6H_5Cl$', type: 'Aryl Halide' },
                { name: 'Ethene', formula: '$C_2H_4$', type: 'Alkene' },
                { name: 'Ethyne', formula: '$C_2H_2$', type: 'Alkyne' },
                { name: 'Glucose', formula: '$C_6H_{12}O_6$', type: 'Pyranose Ring' },
                { name: 'Aspirin', formula: '$C_9H_8O_4$', type: 'Analgesic' }
              ].map(item => (
                <div key={item.name} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col items-center justify-between text-center gap-2 hover:border-emerald-500/40 transition">
                  <span className="text-[11px] font-bold text-slate-200">{item.name}</span>
                  <div className="p-1 bg-slate-900 rounded-lg border border-slate-800">
                    <VSEPRStructureSvg moleculeName={item.name} />
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-300">
                    <MathRenderer text={item.formula} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organic Chapters List */}
          <div className="space-y-6">
            {filteredOrganicChapters.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
                <TestTube className="w-12 h-12 mx-auto mb-3 text-emerald-400/50" />
                <p className="font-bold text-base text-slate-300">No organic chemistry chapters found matching search query.</p>
              </div>
            ) : (
              filteredOrganicChapters.map((ch) => (
                <div key={ch.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                        Ch {ch.chapterNumber}
                      </span>
                      <div>
                        <h3 className="text-lg font-extrabold text-white">{ch.chapter}</h3>
                        <p className="text-xs text-slate-400 font-medium">
                          Class {ch.class} • {ch.category} • {ch.subtopics.length} Key Subtopics
                        </p>
                      </div>
                    </div>
                    <Badge variant="emerald">Organic Chemistry Master</Badge>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {ch.subtopics.map((sub) => {
                      const subId = `${ch.id}_${sub.subtopic}`;
                      const isCollapsed = expandedSubtopics[subId] === true;
                      const isFav = favorites.includes(subId);
                      const { concept, formulaReaction, shortcuts, importantResults } = sub.sections;

                      return (
                        <div key={sub.subtopic} className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-4 hover:border-emerald-500/30 transition-all">
                          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                            <button
                              onClick={() => toggleSubtopicExpand(subId)}
                              className="flex items-center gap-2 text-left font-extrabold text-slate-100 text-sm sm:text-base hover:text-emerald-400 transition cursor-pointer"
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
                                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                                    <MathRenderer text={concept} />
                                  </div>
                                </div>
                              )}

                              {formulaReaction && (
                                <div className="p-3.5 bg-purple-950/40 border border-purple-500/30 rounded-xl space-y-1.5">
                                  <h4 className="font-bold text-purple-300 flex items-center gap-1.5">
                                    <TestTube className="w-3.5 h-3.5 text-purple-400" /> Chemical Formulas & Reactions
                                  </h4>
                                  <div className="text-purple-200 leading-relaxed font-mono">
                                    <MathRenderer text={formulaReaction} />
                                  </div>
                                </div>
                              )}

                              {shortcuts && (
                                <div className="p-3.5 bg-amber-950/30 border border-amber-500/30 rounded-xl space-y-1.5">
                                  <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Shortcuts & Mnemonics
                                  </h4>
                                  <div className="text-amber-200 leading-relaxed">
                                    <MathRenderer text={shortcuts} />
                                  </div>
                                </div>
                              )}

                              {importantResults && (
                                <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-1.5">
                                  <h4 className="font-bold text-indigo-300 flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" /> Important Exam Results
                                  </h4>
                                  <div className="text-indigo-200 leading-relaxed">
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
        </div>
      )}

      {/* TAB 2: MASTER SHEETS */}
      {activeTab === 'mastersheets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMasterSheets.map((sheet) => (
            <div key={sheet.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-start gap-2">
                <Badge variant="purple">{sheet.category}</Badge>
              </div>
              <h3 className="text-base font-bold text-white">{sheet.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{sheet.summary}</p>
              {sheet.keyFormulas && sheet.keyFormulas.length > 0 && (
                <div className="space-y-2 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                  {sheet.keyFormulas.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-slate-200 border-b border-slate-800/60 pb-1.5 last:border-none last:pb-0">
                      <span className="font-semibold text-slate-300">{item.name}:</span>
                      <span className="text-indigo-300 font-mono pl-2"><MathRenderer text={item.formula?.startsWith("$") ? item.formula : `$${item.formula}$`} /></span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: QUICK REVISION (FLASHCARDS) */}
      {activeTab === 'quick' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">
              Card {currentFlashcardIndex + 1} of {allFlashcards.length}
            </span>
            <div className="flex gap-2 text-xs font-bold">
              {['All', 'Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFlashcardFilter(cat); setCurrentFlashcardIndex(0); setIsFlipped(false); }}
                  className={`px-3 py-1.5 rounded-lg transition ${flashcardFilter === cat ? 'bg-purple-600 text-white' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
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
                className={`w-full min-h-[340px] p-8 rounded-3xl border border-purple-500/30 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isFlipped ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950' : 'bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="purple">{currentCard.category}</Badge>
                    <span className="text-xs text-purple-300 font-semibold">{currentCard.chapter}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-4">{currentCard.subtopic}</h3>

                  {!isFlipped ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
                        <span className="text-purple-400 font-bold block mb-1">💡 Concept Summary:</span>
                        <MathRenderer text={currentCard.concept || 'Tap to flip card and view chemical formulas.'} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentCard.formula && (
                        <div className="p-4 bg-purple-950/80 rounded-2xl border border-purple-500/40 text-xs text-purple-100 font-semibold leading-relaxed">
                          <span className="text-purple-300 font-bold block mb-1">🧪 Key Formula / Reaction:</span>
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
                  <span className="flex items-center gap-1"><RotateCw className="w-3.5 h-3.5 text-purple-400" /> Tap anywhere to flip card</span>
                  <span className="text-purple-300">{isFlipped ? 'Answer Side' : 'Question Side'}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 p-8">No flashcards available.</div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrevCard}
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-purple-500 rounded-xl font-bold text-white text-xs transition cursor-pointer"
            >
              ← Previous Card
            </button>
            <button
              onClick={() => {
                const rand = Math.floor(Math.random() * (allFlashcards.length || 1));
                setCurrentFlashcardIndex(rand);
                setIsFlipped(false);
              }}
              className="px-4 py-3 bg-purple-950 border border-purple-500/40 hover:bg-purple-900 rounded-xl font-bold text-purple-200 text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Random Card
            </button>
            <button
              onClick={handleNextCard}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-white text-xs transition cursor-pointer shadow-lg shadow-purple-600/30"
            >
              Next Card →
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: NAMED REACTIONS */}
      {activeTab === 'reactions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNamedReactions.length === 0 ? (
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Flame className="w-12 h-12 mx-auto mb-3 text-rose-400/50" />
              <p className="font-bold text-base text-slate-300">No named reactions found for your search query.</p>
            </div>
          ) : (
            filteredNamedReactions.map(rxn => (
              <div key={rxn.id || rxn.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="brand">{rxn.type || 'Organic Reaction'}</Badge>
                    {rxn.class && <span className="text-[11px] font-bold text-slate-400">Class {rxn.class}</span>}
                  </div>

                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{rxn.name}</span>
                  </h3>

                  {rxn.equation && (
                    <div className="p-3.5 bg-purple-950/40 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-200 overflow-x-auto">
                      <MathRenderer text={rxn.equation} />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Reactants:</span>
                      <span className="text-slate-200 font-medium">{rxn.reactants || '—'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Product:</span>
                      <span className="text-emerald-300 font-bold">{rxn.product || '—'}</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-800 pt-2">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Reagent / Catalyst:</span>
                      <span className="text-indigo-300 font-semibold">{rxn.reagents || '—'}</span>
                    </div>
                  </div>

                  {rxn.mechanism && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-purple-300">Mechanism: </strong>
                      {rxn.mechanism}
                    </p>
                  )}

                  {rxn.exceptions && (
                    <div className="p-2.5 bg-rose-950/30 border border-rose-500/30 rounded-lg text-[11px] text-rose-200">
                      <strong className="text-rose-400">Note/Exception: </strong>
                      {rxn.exceptions}
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400 text-[11px]">{rxn.examNotes || ''}</span>
                  <button
                    onClick={() => handleCopy(rxn.equation || rxn.name, rxn.id || rxn.name)}
                    className="p-2 bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-300 font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedFormula === (rxn.id || rxn.name) ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
                    <span>{copiedFormula === (rxn.id || rxn.name) ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 5: ORGANIC CONVERSION MAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-indigo-400" />
              <span>Organic Synthesis & Functional Group Interconversion Pathway</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Essential organic conversions commonly tested in JEE Main & Advanced questions. Follow the step-by-step roadmap from hydrocarbon to amines and diazonium salts.
            </p>

            <div className="space-y-4 pt-4">
              {reactionMapData.map(mapItem => (
                <div
                  key={mapItem.step}
                  onClick={() => setSelectedStep(selectedStep === mapItem.step ? null : mapItem.step)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedStep === mapItem.step
                      ? 'bg-purple-950/50 border-purple-500 shadow-lg'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {mapItem.step}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-sm font-extrabold text-white">
                        <span className="text-indigo-300">{mapItem.from}</span>
                        <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-emerald-300">{mapItem.to}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="purple">{mapItem.type}</Badge>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Reagent Required:</span>
                      <span className="text-amber-300 font-semibold"><MathRenderer text={mapItem.reagent} /></span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Reaction Conditions:</span>
                      <span className="text-slate-200">{mapItem.conditions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: REAGENTS LIBRARY */}
      {activeTab === 'reagents' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReagents.length === 0 ? (
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <TestTube className="w-12 h-12 mx-auto mb-3 text-emerald-400/50" />
              <p className="font-bold text-base text-slate-300">No reagents found for your search query.</p>
            </div>
          ) : (
            filteredReagents.map(reagent => (
              <div key={reagent.id || reagent.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-extrabold text-white">{reagent.name}</h3>
                  {reagent.formula && (
                    <span className="px-3 py-1 bg-purple-950 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-mono font-bold">
                      <MathRenderer text={reagent.formula?.startsWith("$") ? reagent.formula : `$${reagent.formula}$`} />
                    </span>
                  )}
                </div>

                <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-bold">
                  <span>Role: {reagent.function}</span>
                </div>

                {reagent.transformations && (
                  <div className="text-xs text-slate-300 leading-relaxed space-y-1">
                    <span className="text-purple-300 font-bold block">Transformations:</span>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-medium">
                      <MathRenderer text={reagent.transformations} />
                    </div>
                  </div>
                )}

                {reagent.conditions && (
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-300">Conditions: </strong>
                    <MathRenderer text={reagent.conditions} />
                  </div>
                )}

                {reagent.exampleReaction && (
                  <div className="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-indigo-200">
                    <span className="text-indigo-400 font-bold block mb-1">Example Reaction:</span>
                    <MathRenderer text={reagent.exampleReaction} />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 7: VSEPR & STRUCTURES */}
      {activeTab === 'vsepr' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStructures.length === 0 ? (
            <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Atom className="w-12 h-12 mx-auto mb-3 text-cyan-400/50" />
              <p className="font-bold text-base text-slate-300">No molecular structures found matching query.</p>
            </div>
          ) : (
            filteredStructures.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="cyan">{item.hybridization || 'VSEPR'}</Badge>
                    <span className="text-xs font-mono font-bold text-indigo-300"><MathRenderer text={item.formula?.startsWith("$") ? item.formula : `$${item.formula}$`} /></span>
                  </div>

                  <h3 className="text-base font-extrabold text-white">{item.name}</h3>

                  {/* SVG Molecular Graphic */}
                  <div className="flex justify-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <VSEPRStructureSvg moleculeName={item.name || item.formula} />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Geometry:</span>
                      <span className="text-purple-300 font-bold">{item.shape || item.geometry}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Bond Angle:</span>
                      <span className="text-emerald-300 font-bold"><MathRenderer text={item.bondAngle || '—'} /></span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Lone Pairs:</span>
                      <span className="text-amber-300 font-bold">{item.lonePairs !== undefined ? item.lonePairs : '—'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Oxidation State:</span>
                      <span className="text-cyan-300 font-bold">{item.centralAtomOxidation || '—'}</span>
                    </div>
                  </div>

                  {item.properties && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.properties}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 8: QUALITATIVE TESTS & COLORS */}
      {activeTab === 'qualitative' && (
        <div className="space-y-6">
          {/* Internal Qualitative Sub-tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 text-xs font-bold overflow-x-auto">
            {[
              { id: 'all', label: 'All Qualitative Tests & Colors' },
              { id: 'organic', label: `Organic Tests (${filteredOrganicTests.length})` },
              { id: 'flame', label: `Flame Colors (${filteredFlameColors.length})` },
              { id: 'precipitate', label: `Precipitate Colors (${filteredPrecipitateColors.length})` },
              { id: 'transition', label: `Transition Ion Colors (${filteredTransitionColors.length})` }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => setQualSubTab(sub.id)}
                className={`px-4 py-2 rounded-lg transition cursor-pointer whitespace-nowrap ${
                  qualSubTab === sub.id ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Organic Qualitative Tests Section */}
          {(qualSubTab === 'all' || qualSubTab === 'organic') && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Beaker className="w-5 h-5 text-purple-400" /> Organic Functional Group Detection Tests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredOrganicTests.map(test => (
                  <div key={test.id || test.testName} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-extrabold text-white">{test.testName}</h4>
                      <Badge variant="purple">{test.target}</Badge>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div>
                        <span className="text-purple-400 font-bold block">Reagent Used:</span>
                        <span className="text-slate-200 font-medium"><MathRenderer text={test.reagent} /></span>
                      </div>
                      <div>
                        <span className="text-emerald-400 font-bold block">Observation & Color Change:</span>
                        <span className="text-emerald-200 font-semibold">{test.observation}</span>
                      </div>
                      {test.equation && (
                        <div className="pt-1 border-t border-slate-800">
                          <span className="text-slate-400 font-bold block text-[10px] uppercase">Reaction:</span>
                          <span className="text-indigo-300 font-mono"><MathRenderer text={test.equation} /></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flame Colors Section */}
          {(qualSubTab === 'all' || qualSubTab === 'flame') && (
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" /> Alkali & Alkaline Earth Flame Test Colors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredFlameColors.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-extrabold text-white">{item.element}</span>
                      <span className="text-xs font-bold text-indigo-300">{item.ion}</span>
                    </div>
                    <div className={`p-2.5 rounded-xl border font-bold text-xs flex justify-between items-center ${getColorStyle(item.color)}`}>
                      <span>Flame: {item.color}</span>
                      {item.wavelength && <span className="text-[10px] opacity-80">{item.wavelength}</span>}
                    </div>
                    {item.note && <div className="text-[11px] text-slate-400"><MathRenderer text={item.note} /></div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Precipitate Colors Section */}
          {(qualSubTab === 'all' || qualSubTab === 'precipitate') && (
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Grid className="w-5 h-5 text-emerald-400" /> Inorganic Precipitate Colors & Identification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPrecipitateColors.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
                    <h4 className="text-xs font-bold text-white"><MathRenderer text={item.compound} /></h4>
                    <div className={`p-2.5 rounded-xl border font-bold text-xs ${getColorStyle(item.color)}`}>
                      <span>Precipitate: {item.color}</span>
                    </div>
                    {item.condition && <div className="text-[11px] text-slate-400"><MathRenderer text={item.condition} /></div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transition Ion Colors Section */}
          {(qualSubTab === 'all' || qualSubTab === 'transition') && (
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" /> Transition Metal Ion Aqueous Colors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredTransitionColors.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-extrabold text-purple-300"><MathRenderer text={`$${item.ion}$`} /></span>
                      <span className="text-xs font-mono text-slate-400">
                        <MathRenderer text={item.electronConfig?.includes('$') || item.electronConfig?.includes('\\') ? item.electronConfig : `$${item.electronConfig}$`} />
                      </span>
                    </div>
                    <div className={`p-2.5 rounded-xl border font-bold text-xs ${getColorStyle(item.color)}`}>
                      <span>Aqueous Color: {item.color}</span>
                    </div>
                    {item.note && <div className="text-[11px] text-slate-400"><MathRenderer text={item.note} /></div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 9: CONSTANTS & TRENDS */}
      {activeTab === 'constants' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-purple-400" /> Fundamental Chemistry Constants
            </h3>
            <div className="space-y-3">
              {CHEMISTRY_CONSTANTS.map((c, i) => (
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
                    <span className="text-indigo-300 font-mono text-right shrink-0">
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
              <Grid className="w-5 h-5 text-emerald-400" /> Standard Atomic Masses (amu)
            </h3>
            <div className="space-y-2 text-xs">
              {COMMON_ATOMIC_MASSES.map((a, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-200">
                  <span>Z={a.atomicNumber} • {a.element}</span>
                  <span className="font-bold text-emerald-400">{a.approx} u</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 10: FAVORITES */}
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
              <p className="text-xs text-slate-500 mt-1">Click the ⭐ icon on any subtopic, formula, or reaction to save it here for quick access.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favorites.map(favId => (
                <div key={favId} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-purple-400 block mb-1">Starred Item</span>
                    <h4 className="text-sm font-extrabold text-white">{favId.replace(/_/g, ' ')}</h4>
                  </div>
                  <button
                    onClick={() => toggleFavorite(favId)}
                    className="p-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold cursor-pointer"
                  >
                    <Star className="w-4 h-4 fill-amber-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

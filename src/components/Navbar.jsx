import React, { useState, useRef, useEffect } from 'react';
import jeeAdvancedData from '../data/jeeAdvancedData.json';
import practiceData from '../data/practiceQuestionsData.json';
import eapcetData from '../data/eapcetData.json';
import pyqData from '../data/pyqData.json';
import { 
  BookOpen, 
  FileText, 
  LogOut,
  Zap, 
  BarChart2, 
  Award, 
  Sun, 
  Moon, 
  BrainCircuit, 
  Flame, 
  BookMarked, 
  GraduationCap, 
  Target, 
  ChevronDown, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode, onLogout }) {
  const [papersDropdownOpen, setPapersDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let closeTimeoutRef = useRef(null);

  const totalPracticeQs = (practiceData.physics?.length || 0) + (practiceData.chemistry?.length || 0) + (practiceData.mathematics?.length || 0);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPapersDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setPapersDropdownOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setPapersDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setPapersDropdownOpen(false);
    }, 150);
  };

  // Exam Papers Sub-items
  const examPapersList = [
    {
      id: 'pyq',
      title: 'JEE Main PYQ Book',
      subtitle: '8 Shifts • 720 Questions',
      description: 'Official 2024 NTA shifts with 3-tier step-by-step derivations',
      icon: BookOpen,
      iconColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
      badge: '8 Shifts'
    },
    {
      id: 'advanced',
      title: 'JEE Advanced Archives',
      subtitle: `${jeeAdvancedData.length || 300} Questions • High-yield`,
      description: 'Multi-correct, integer numericals & multi-concept depth',
      icon: Award,
      iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
      badge: '300 Qs'
    },
    {
      id: 'eapcet',
      title: 'EAPCET State Papers',
      subtitle: `${eapcetData.length || 800} Questions • AP & TS`,
      description: 'State engineering entrance mock sets with full step-by-step key',
      icon: GraduationCap,
      iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/20',
      badge: '800 Qs'
    }
  ];

  const isPaperActive = ['pyq', 'advanced', 'eapcet'].includes(activeTab);
  const activePaperObj = examPapersList.find(p => p.id === activeTab);

  // Common button class helper
  const getNavLinkClass = (isActive) => {
  return `flex items-center gap-1 px-2 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-indigo-600 dark:text-white bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 shadow-sm shadow-indigo-500/10'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/60'
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Brand Logo */}
          <div 
            onClick={() => {
              setActiveTab('home');
              setPapersDropdownOpen(false);
            }}
            className="flex items-center space-x-3 cursor-pointer group flex-shrink-0 mr-5"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-indigo-500 group-hover:text-pink-500 transition-colors" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400">
                  EXAM VERSE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                  JEE 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">JEE Main Prep Engine</p>
            </div>
          </div>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 min-w-0 justify-center">
            {/* 1. Dashboard */}
            <button
              onClick={() => {
                setActiveTab('home');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'home')}
            >
              <BrainCircuit className={`w-4 h-4 ${activeTab === 'home' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Dashboard</span>
            </button>

            {/* 2. CBT Mock Engine */}
            <button
              onClick={() => {
                setActiveTab('mock');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'mock')}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'mock' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>CBT Mocks</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-500/30">
                19 Tests
              </span>
            </button>

            {/* 3. Exam Papers Dropdown (Groups PYQ Book, JEE Advanced, EAPCET) */}
            <div 
              ref={dropdownRef} 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setPapersDropdownOpen(!papersDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isPaperActive
                    ? 'text-indigo-600 dark:text-white bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                }`}
                aria-expanded={papersDropdownOpen}
              >
                <Layers className={`w-4 h-4 ${isPaperActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>Exam Papers</span>
                {isPaperActive && activePaperObj ? (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/25 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40">
                    {activePaperObj.badge}
                  </span>
                ) : (
                  <span className="text-[9px] font-bold whitespace-nowrap flex-shrink-0 px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    3 Sets
                  </span>
                )}
                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${papersDropdownOpen ? 'rotate-180 text-indigo-500' : 'text-slate-400'}`} />
              </button>

              {/* Floating Dropdown Card */}
              {papersDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-black/80 backdrop-blur-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                      Select Question Bank
                    </span>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 font-medium">
                      1,820+ Questions
                    </span>
                  </div>

                  <div className="space-y-1">
                    {examPapersList.map((paper) => {
                      const Icon = paper.icon;
                      const isSelected = activeTab === paper.id;
                      return (
                        <button
                          key={paper.id}
                          onClick={() => {
                            setActiveTab(paper.id);
                            setPapersDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-150 group ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-600/15 border border-indigo-200 dark:border-indigo-500/30'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent'
                          }`}
                        >
                          <div className={`p-2 rounded-lg border ${paper.iconColor} group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-semibold ${isSelected ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-white'}`}>
                                {paper.title}
                              </span>
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                {paper.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {paper.description}
                            </p>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 self-center" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Practice Questions Hub */}
            <button
              onClick={() => {
                setActiveTab('practice');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'practice')}
            >
              <Target className={`w-4 h-4 ${activeTab === 'practice' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Practice Hub</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                {totalPracticeQs} Qs
              </span>
            </button>

            {/* 5. Mistake Notebook */}
            <button
              onClick={() => {
                setActiveTab('mistakes');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'mistakes')}
            >
              <BookMarked className={`w-4 h-4 ${activeTab === 'mistakes' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Mistake Vault</span>
            </button>

            {/* 6. Formula Hub */}
            <button
              onClick={() => {
                setActiveTab('formulas');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'formulas')}
            >
              <Zap className={`w-4 h-4 ${activeTab === 'formulas' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Formula Hub</span>
            </button>

            {/* 7. Analytics */}
            <button
              onClick={() => {
                setActiveTab('analytics');
                setPapersDropdownOpen(false);
              }}
              className={getNavLinkClass(activeTab === 'analytics')}
            >
              <BarChart2 className={`w-4 h-4 ${activeTab === 'analytics' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Analytics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="Live tracking" />
            </button>
          </nav>

                    {/* Right Action Icons */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 border border-red-200 dark:border-red-500/20 transition-colors"
              title="Logout from your account"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
      </div>
     </div>
      {/* Sub-bar for medium screens (768px to 1024px) where 7 tabs might wrap */}
      <div className="hidden md:flex lg:hidden border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/90 px-4 py-2 overflow-x-auto items-center justify-start gap-1 scrollbar-thin">
        {[
          { id: 'home', label: 'Dashboard' },
          { id: 'mock', label: 'CBT Mocks (19)' },
          { id: 'pyq', label: 'JEE Main PYQs' },
          { id: 'advanced', label: 'JEE Advanced' },
          { id: 'eapcet', label: 'EAPCET' },
          { id: 'practice', label: `Practice (${totalPracticeQs})` },
          { id: 'mistakes', label: 'Mistake Vault' },
          { id: 'formulas', label: 'Formula Hub' },
          { id: 'analytics', label: 'Analytics' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === item.id
                ? 'text-indigo-600 dark:text-white bg-indigo-50 dark:bg-indigo-600/25 border border-indigo-200 dark:border-indigo-500/40'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile navigation bar */}
      <div className="md:hidden flex border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 px-2 py-1.5 overflow-x-auto justify-start gap-1 scrollbar-none">
        {[
          { id: 'home', label: 'Dashboard', icon: BrainCircuit },
          { id: 'mock', label: 'CBT Mocks', icon: FileText },
          { id: 'pyq', label: 'JEE PYQs', icon: BookOpen },
          { id: 'advanced', label: 'Advanced', icon: Award },
          { id: 'eapcet', label: 'EAPCET', icon: GraduationCap },
          { id: 'practice', label: 'Practice', icon: Target },
          { id: 'mistakes', label: 'Mistakes', icon: BookMarked },
          { id: 'formulas', label: 'Formulas', icon: Zap },
          { id: 'analytics', label: 'Analytics', icon: BarChart2 },
        ].map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center px-3 py-1 rounded-md text-xs font-medium flex-shrink-0 ${
                isActive ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}

import React from 'react';
import { 
  FileText, 
  BookOpen, 
  Zap, 
  Award, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Play,
  TrendingUp,
  Brain,
  Clock,
  Bookmark,
  BookMarked,
  ShieldCheck,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import KatexRenderer from '../KatexRenderer';

export default function Dashboard({ setActiveTab, userStats, onLaunchTest }) {
  const officialPapers = [
    {
      exam: 'JEE Main',
      year: '2026',
      shift: 'Jan 23 (Shift 1)',
      questions: 75,
      subjects: '25 Phys • 25 Chem • 25 Math',
      tag: 'Latest 2026 Shift',
      color: 'from-fuchsia-600/20 to-pink-600/10 border-fuchsia-500/30 text-fuchsia-400'
    },
    {
      exam: 'JEE Main',
      year: '2026',
      shift: 'Jan 21 (Shift 1)',
      questions: 75,
      subjects: '25 Phys • 25 Chem • 25 Math',
      tag: 'Latest 2026 Shift',
      color: 'from-purple-600/20 to-indigo-600/10 border-purple-500/30 text-purple-400'
    },
    {
      exam: 'JEE Main',
      year: '2025',
      shift: 'Jan 25 (Shift 1)',
      questions: 75,
      subjects: '25 Phys • 25 Chem • 25 Math',
      tag: 'Official Shift Paper',
      color: 'from-blue-600/20 to-cyan-600/10 border-blue-500/30 text-blue-400'
    },
    {
      exam: 'JEE Main',
      year: '2025',
      shift: 'Jan 22 (Shift 1)',
      questions: 75,
      subjects: '25 Phys • 25 Chem • 25 Math',
      tag: 'Official Shift Paper',
      color: 'from-indigo-600/20 to-blue-600/10 border-indigo-500/30 text-indigo-400'
    },
    {
      exam: 'JEE Main',
      year: '2024',
      shift: 'Apr 04 (Shift 1)',
      questions: 90,
      subjects: '30 Phys • 30 Chem • 30 Math',
      tag: 'Full 90-Q Paper',
      color: 'from-rose-600/20 to-red-600/10 border-rose-500/30 text-rose-400'
    },
    {
      exam: 'JEE Main',
      year: '2024',
      shift: 'Feb 01 (Shift 2)',
      questions: 90,
      subjects: '30 Phys • 30 Chem • 30 Math',
      tag: 'Full 90-Q Paper',
      color: 'from-amber-600/20 to-orange-600/10 border-amber-500/30 text-amber-400'
    },
    {
      exam: 'JEE Main',
      year: '2023',
      shift: 'Jan 24 (Shift 1)',
      questions: 90,
      subjects: '30 Phys • 30 Chem • 30 Math',
      tag: 'Full 90-Q Paper',
      color: 'from-violet-600/20 to-purple-600/10 border-violet-500/30 text-violet-400'
    },
    {
      exam: 'JEE Main',
      year: '2023',
      shift: 'Feb 01 (Shift 2)',
      questions: 90,
      subjects: '30 Phys • 30 Chem • 30 Math',
      tag: 'Full 90-Q Paper',
      color: 'from-fuchsia-600/20 to-pink-600/10 border-fuchsia-500/30 text-fuchsia-400'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10">
          {/* Left Column: Content */}
          <div className="space-y-4 max-w-2xl flex-1">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="text-amber-400">🏆</span>
              <span>Next-Gen Exam Platform • 2026</span>
            </div>
            
            {/* Headline with curved underline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
                Ace Your Dream Rank with{' '}
                <span className="relative inline-block mt-1 sm:mt-0">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
                    Smart Exam Preparation
                  </span>
                  {/* Decorative curved underline */}
                  <svg 
                    className="absolute -bottom-2 left-0 w-full text-indigo-400 overflow-visible" 
                    height="9" 
                    viewBox="0 0 260 9" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M2 6.5C55 2 135 1.5 258 6.5" 
                      stroke="currentColor" 
                      strokeWidth="3.2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </span>
              </h1>
            </div>
            
            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1 max-w-xl">
              Practice with previous year papers, take mock tests, analyze your performance and improve step by step — all in one place.
            </p>
            
            {/* 3 Quick-Feature Icon Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setActiveTab('pyq')}
                title="Practice Shift Papers & Mock Tests"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-indigo-400/60 hover:bg-slate-800 text-indigo-300 flex items-center justify-center transition-all hover:scale-105 shadow-sm group"
              >
                <FileText className="w-5 h-5 group-hover:text-indigo-200 transition-colors" />
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                title="AI Performance Analytics & Rank Trajectory"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-purple-400/60 hover:bg-slate-800 text-purple-300 flex items-center justify-center transition-all hover:scale-105 shadow-sm group"
              >
                <TrendingUp className="w-5 h-5 group-hover:text-purple-200 transition-colors" />
              </button>
              <button
                onClick={() => setActiveTab('formulas')}
                title="KaTeX Formula Hub & Revision Equations"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/60 hover:bg-slate-800 text-cyan-300 flex items-center justify-center transition-all hover:scale-105 shadow-sm group"
              >
                <Zap className="w-5 h-5 group-hover:text-cyan-200 transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Column: Action Buttons (kept in the first place) */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onLaunchTest('JEE Main')}
              className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start CBT Mock Test</span>
            </button>
            <button
              onClick={() => setActiveTab('pyq')}
              className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-indigo-400/40 hover:border-indigo-400/80 text-slate-100 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Explore Exam Papers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Shift Papers Quick-Launch Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>Official Shift Papers • JEE Main (2023 – 2026)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Direct access to 6 authentic NTA shift papers with diagrams & 3-tier solutions
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('pyq')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            <span>View All in PYQ Book</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {officialPapers.map((paper, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab('pyq')}
              className={`p-4 rounded-2xl bg-gradient-to-br ${paper.color} bg-slate-900/60 border hover:border-indigo-400/50 shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between space-y-3`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-white">
                  {paper.exam} {paper.year}
                </span>
                <span className="text-[11px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                  {paper.tag}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {paper.shift}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {paper.subjects}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  {paper.questions} • 3 Tiers
                </span>
                <span className="font-semibold text-indigo-400 flex items-center gap-0.5">
                  Practice <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prominent Core Modules Navigation Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <span>Select Learning & Practice Module</span>
          </h2>
          <span className="text-xs text-slate-400">Everything unlocked & ready</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Module 1: CBT Mock Engine */}
          <div 
            onClick={() => setActiveTab('mock')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    CBT Mock Engine
                  </h3>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  JEE Main CBT
                </span>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Timed tests with official question palette, SCQ/NVQ sections, and real-time marking.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-semibold group-hover:text-indigo-300">
              <span>Launch Mock</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 2: PYQ Book */}
          <div 
            onClick={() => setActiveTab('pyq')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 border border-slate-800 hover:border-emerald-500/50 shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    PYQ Book
                  </h3>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  6 Shift Papers
                </span>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Authentic shift questions with 3-tier solutions (Basic, Inter, Adv) and diagrams.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:text-emerald-300">
              <span>Explore PYQs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 3: Mistake Notebook */}
          <div 
            onClick={() => setActiveTab('mistakes')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookMarked className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    Mistake Notebook
                  </h3>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Error Vault
                </span>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Review bookmarked tricky questions and weak concepts before test day.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
              <span>Open Vault</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 4: Formula Hub */}
          <div 
            onClick={() => setActiveTab('formulas')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 border border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Formula Hub
                  </h3>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  213+ Formulas
                </span>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  KaTeX equation sheets for Physics, Chemistry & Math with search & variables.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
              <span>Revise Formulas</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* MPC Breakdown & Solution Tier Spotlight */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* MPC Subject Mastery Breakdown */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>MPC Subject Proficiency & Question Bank</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Distribution across authentic JEE Main shift questions
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              77% Overall Benchmark
            </span>
          </div>

          <div className="space-y-5">
            {/* Physics */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                  <span>Physics</span>
                  <span className="text-slate-500 font-normal">• Rotational, Electromagnetism, Optics, Modern Phys</span>
                </span>
                <span className="text-cyan-400 font-bold">86% Accuracy</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[86%]" />
              </div>
            </div>

            {/* Chemistry */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  <span>Chemistry</span>
                  <span className="text-slate-500 font-normal">• Organic Mechanisms, Electrochem, Coordination, Kinetics</span>
                </span>
                <span className="text-emerald-400 font-bold">74% Accuracy</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[74%]" />
              </div>
            </div>

            {/* Mathematics */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                  <span>Mathematics</span>
                  <span className="text-slate-500 font-normal">• Calculus, Vectors & 3D, Matrices, Circles & Conics</span>
                </span>
                <span className="text-purple-400 font-bold">72% Accuracy</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-[72%]" />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <span>💡 3-tier solutions ensure zero doubt whether you need fundamentals or speed tricks.</span>
            <button 
              onClick={() => setActiveTab('analytics')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
            >
              <span>Full Analytics Trajectory</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Featured Formula Card & Solution Tier Spotlight */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Formula Spotlight */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-indigo-950/40 border border-indigo-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                Formula Spotlight
              </span>
              <Bookmark 
                onClick={() => setActiveTab('formulas')} 
                title="View in Formula Hub"
                className="w-4 h-4 text-slate-400 cursor-pointer hover:text-indigo-400" 
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Nernst Equation (Electrochemistry)</h4>
              <p className="text-[11px] text-slate-400">Non-standard electrode potential</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-indigo-500/20 text-indigo-200 text-center font-mono overflow-x-auto">
              <KatexRenderer text="$$E = E^\circ - \frac{0.0591}{n} \log_{10} Q$$" />
            </div>
            <div className="text-[11px] text-slate-300 leading-relaxed">
              <KatexRenderer text="Essential for calculating cell potential at $298\text{ K}$ with reaction quotient $Q$." />
            </div>
            <button
              onClick={() => setActiveTab('formulas')}
              className="w-full py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:bg-indigo-600/30 transition-colors"
            >
              Open Formula Hub (213+ Formulas) →
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}

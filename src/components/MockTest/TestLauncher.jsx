import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  HelpCircle, 
  Play, 
  CheckCircle, 
  ShieldAlert, 
  X, 
  FileText,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function TestLauncher({ onStartTest }) {
  const [selectedExam, setSelectedExam] = useState('JEE Main 2026');
  const [activeCategory, setActiveCategory] = useState('ALL'); // 'ALL' | 'JEE Main' | 'JEE Advanced' | 'AP EAPCET'
  const [showInstructions, setShowInstructions] = useState(false);

  const examPresets = [
    // --- 8 OFFICIAL JEE MAIN SHIFTS ---
    {
      id: 'JEE Main 2026',
      category: 'JEE Main',
      title: 'JEE Main 2026 (21 Jan Shift 1)',
      shiftTag: 'JEE Main 2026 • 21 Jan Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '75 Questions (25 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2026 Shift 1 Official Paper',
      description: 'Single Choice Questions (SCQ) and Numerical Value Questions (NVQ) across Physics, Chemistry, and Mathematics.',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'JEE Main 2026 Jan 23',
      category: 'JEE Main',
      title: 'JEE Main 2026 (23 Jan Shift 1)',
      shiftTag: 'JEE Main 2026 • 23 Jan Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '75 Questions (25 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2026 Shift 1 Official Paper',
      description: 'Official 23 Jan 2026 Shift 1 exam paper with authentic questions and comprehensive solutions.',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'JEE Main 2025 Jan 22',
      category: 'JEE Main',
      title: 'JEE Main 2025 (22 Jan Shift 1)',
      shiftTag: 'JEE Main 2025 • 22 Jan Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '75 Questions (25 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2025 Shift 1 Official Paper',
      description: 'Complete 75 Questions with detailed 3-level step-by-step solutions.',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'JEE Main 2025 Jan 25',
      category: 'JEE Main',
      title: 'JEE Main 2025 (25 Jan Shift 1)',
      shiftTag: 'JEE Main 2025 • 25 Jan Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '75 Questions (25 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2025 Shift 1 Official Paper',
      description: 'Complete 75 Questions with detailed 3-level step-by-step solutions.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'JEE Main 2024 Feb 01',
      category: 'JEE Main',
      title: 'JEE Main 2024 (01 Feb Shift 2)',
      shiftTag: 'JEE Main 2024 • 01 Feb Shift 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '90 Questions (30 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2024 Shift 2 Official Paper',
      description: 'Official 01 Feb 2024 Shift 2 paper with complete step-by-step solutions.',
      color: 'from-amber-600 to-orange-600'
    },
    {
      id: 'JEE Main 2024 Apr 04',
      category: 'JEE Main',
      title: 'JEE Main 2024 (04 Apr Shift 1)',
      shiftTag: 'JEE Main 2024 • 04 Apr Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '90 Questions (30 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2024 Session 2 Official Paper',
      description: 'Official 04 Apr 2024 Shift 1 paper from Session 2 with full explanations.',
      color: 'from-orange-600 to-amber-600'
    },
    {
      id: 'JEE Main 2023 Jan 24',
      category: 'JEE Main',
      title: 'JEE Main 2023 (24 Jan Shift 1)',
      shiftTag: 'JEE Main 2023 • 24 Jan Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '90 Questions (30 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2023 Shift 1 Official Paper',
      description: 'Official 24 Jan 2023 Shift 1 paper with complete step-by-step solutions.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'JEE Main 2023 Feb 01',
      category: 'JEE Main',
      title: 'JEE Main 2023 (01 Feb Shift 2)',
      shiftTag: 'JEE Main 2023 • 01 Feb Shift 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 300,
      questionsCount: '90 Questions (30 per MPC subject)',
      markingScheme: '+4 for Correct, -1 for Incorrect (0 for Unattempted)',
      badge: '2023 Shift 2 Official Paper',
      description: 'Official 01 Feb 2023 Shift 2 paper with complete step-by-step solutions.',
      color: 'from-teal-600 to-cyan-600'
    },

    // --- 6 OFFICIAL JEE ADVANCED PAPERS ---
    {
      id: 'ADV-2024-P1',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2024 (Paper 1)',
      shiftTag: '2024 Advanced Paper 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 180,
      questionsCount: '51 Questions (17 Math, 17 Phys, 17 Chem)',
      markingScheme: 'Section 1: SCQ (+3, -1) • Section 2: MCQ (+4, -2) • Section 3: Numerical (+4, 0)',
      badge: '2024 Official Paper 1',
      sessionBadge: 'Morning Session',
      description: 'Official IIT Madras JEE Advanced 2024 Paper 1 with single choice, multi-correct, and numericals.',
      color: 'from-amber-600 to-rose-600'
    },
    {
      id: 'ADV-2024-P2',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2024 (Paper 2)',
      shiftTag: '2024 Advanced Paper 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 180,
      questionsCount: '51 Questions (17 Math, 17 Phys, 17 Chem)',
      markingScheme: 'Section 1: SCQ (+3, -1) • Section 2: MCQ (+4, -2) • Section 3: Numerical (+4, 0)',
      badge: '2024 Official Paper 2',
      sessionBadge: 'Afternoon Session',
      description: 'Official IIT Madras JEE Advanced 2024 Paper 2 with expanded step-by-step solutions.',
      color: 'from-rose-600 to-red-600'
    },
    {
      id: 'ADV-2025-P1',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2025 (Paper 1)',
      shiftTag: '2025 Advanced Paper 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 180,
      questionsCount: '48 Questions (16 Math, 16 Phys, 16 Chem)',
      markingScheme: 'SCQ (+3, -1) • MCQ (+4, -2) • Numerical (+4, 0)',
      badge: '2025 Official Paper 1',
      sessionBadge: 'Morning Session',
      description: 'Official JEE Advanced 2025 Paper 1 with comprehensive step-by-step solutions.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ADV-2025-P2',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2025 (Paper 2)',
      shiftTag: '2025 Advanced Paper 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 180,
      questionsCount: '48 Questions (16 Math, 16 Phys, 16 Chem)',
      markingScheme: 'SCQ (+3, -1) • MCQ (+4, -2) • Numerical (+4, 0)',
      badge: '2025 Official Paper 2',
      sessionBadge: 'Afternoon Session',
      description: 'Official JEE Advanced 2025 Paper 2 with comprehensive step-by-step solutions.',
      color: 'from-pink-600 to-rose-600'
    },
    {
      id: 'ADV-2026-P1',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2026 (Paper 1)',
      shiftTag: '2026 Advanced Paper 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 156,
      questionsCount: '48 Questions (16 Math, 16 Phys, 16 Chem)',
      markingScheme: 'Section 1: SCQ (+3, -1) • Section 2: MCQ (+4, -2) • Section 3: NVQ (+4, 0)',
      badge: '2026 Official Shift',
      sessionBadge: 'Morning Session',
      description: 'Official 2026 Advanced Paper 1 simulation with real scoring and full explanations.',
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 'ADV-2026-P2',
      category: 'JEE Advanced',
      title: 'JEE Advanced 2026 (Paper 2)',
      shiftTag: '2026 Advanced Paper 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 180,
      questionsCount: '54 Questions (18 Math, 18 Phys, 18 Chem)',
      markingScheme: 'Section 1: SCQ (+3, -1) • Section 2: MCQ (+4, -2) • Section 3: NVQ (+4, 0)',
      badge: '2026 Official Shift',
      sessionBadge: 'Afternoon Session',
      description: 'Official 2026 Advanced Paper 2 simulation with 54 authentic questions.',
      color: 'from-purple-600 to-indigo-600'
    },

    // --- 5 OFFICIAL AP EAPCET PAPERS (2023, 2024, 2025, 2026) ---
    {
      id: 'EAPCET-2023-17M-S1',
      category: 'AP EAPCET',
      title: 'AP EAPCET 2023 (17 May Shift 1)',
      shiftTag: '17 May Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 160,
      questionsCount: '160 Questions (80 Math, 40 Phys, 40 Chem)',
      markingScheme: '+1 for Correct, 0 for Incorrect (No Negative Marking)',
      badge: '2023 Official Paper',
      sessionBadge: '17 May Shift 1',
      description: 'Official APSCHE 17 May 2023 Shift 1 paper with 160 authentic engineering questions.',
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 'EAPCET-2024-12M-S1',
      category: 'AP EAPCET',
      title: 'AP EAPCET 2024 (12 May Shift 1)',
      shiftTag: '12 May Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 160,
      questionsCount: '160 Questions (80 Math, 40 Phys, 40 Chem)',
      markingScheme: '+1 for Correct, 0 for Incorrect (No Negative Marking)',
      badge: '2024 Official Paper',
      sessionBadge: '12 May Shift 1',
      description: 'Official APSCHE 12 May 2024 Shift 1 paper with 160 authentic engineering questions.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'EAPCET-2025-21M-S1',
      category: 'AP EAPCET',
      title: 'AP EAPCET 2025 (21 May Shift 1)',
      shiftTag: '21 May Shift 1',
      duration: '3 Hours (180 mins)',
      totalMarks: 160,
      questionsCount: '160 Questions (80 Math, 40 Phys, 40 Chem)',
      markingScheme: '+1 for Correct, 0 for Incorrect (No Negative Marking)',
      badge: '2025 Official Paper',
      sessionBadge: '21 May Shift 1',
      description: 'Official APSCHE 21 May 2025 Shift 1 paper with 160 authentic engineering questions.',
      color: 'from-teal-600 to-emerald-600'
    },
    {
      id: 'EAPCET-2026-12M-S2',
      category: 'AP EAPCET',
      title: 'AP EAPCET 2026 (12 May Shift 2)',
      shiftTag: '12 May Shift 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 160,
      questionsCount: '160 Questions (80 Math, 40 Phys, 40 Chem)',
      markingScheme: '+1 for Correct, 0 for Incorrect (No Negative Marking)',
      badge: '2026 Official Paper',
      sessionBadge: '12 May Shift 2',
      description: 'Official APSCHE 12 May 2026 Shift 2 paper with 160 authentic engineering questions.',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      id: 'EAPCET-2026-15M-S2',
      category: 'AP EAPCET',
      title: 'AP EAPCET 2026 (15 May Shift 2)',
      shiftTag: '15 May Shift 2',
      duration: '3 Hours (180 mins)',
      totalMarks: 160,
      questionsCount: '160 Questions (80 Math, 40 Phys, 40 Chem)',
      markingScheme: '+1 for Correct, 0 for Incorrect (No Negative Marking)',
      badge: '2026 Official Paper',
      sessionBadge: '15 May Shift 2',
      description: 'Official APSCHE 15 May 2026 Shift 2 paper with 160 authentic engineering questions.',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  const categories = [
    { id: 'ALL', label: 'All Tests', count: examPresets.length },
    { id: 'JEE Main', label: 'JEE Main', count: examPresets.filter(p => p.category === 'JEE Main').length },
    { id: 'JEE Advanced', label: 'JEE Advanced', count: examPresets.filter(p => p.category === 'JEE Advanced').length },
    { id: 'AP EAPCET', label: 'AP EAPCET', count: examPresets.filter(p => p.category === 'AP EAPCET').length }
  ];

  const visiblePresets = activeCategory === 'ALL' 
    ? examPresets 
    : examPresets.filter(p => p.category === activeCategory);

  const activePreset = examPresets.find(p => p.id === selectedExam) || visiblePresets[0] || examPresets[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Multi-Exam CBT Mock Test Engine ({examPresets.length} Official Papers & Shifts)</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">CBT Mock Test Launcher</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
          Take authentic full-length computer-based tests for <strong className="text-indigo-600 dark:text-indigo-400">JEE Main (8 Shifts)</strong>, <strong className="text-rose-600 dark:text-rose-400">JEE Advanced (6 Papers)</strong>, and <strong className="text-emerald-600 dark:text-emerald-400">AP EAPCET (5 Papers)</strong> with official marking schemes, countdown timers, and in-depth performance analysis.
        </p>
      </div>

      {/* Exam Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl mx-auto shadow-sm">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id !== 'ALL') {
                  const firstInCat = examPresets.find(p => p.category === cat.id);
                  if (firstInCat) setSelectedExam(firstInCat.id);
                }
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visiblePresets.map((preset) => {
          const isSelected = selectedExam === preset.id;
          const isAdv = preset.category === 'JEE Advanced';
          const isEap = preset.category === 'AP EAPCET';

          let borderActive = 'border-indigo-500 ring-2 ring-indigo-500/40 shadow-xl shadow-indigo-500/10';
          let badgeClass = 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20';

          if (isAdv) {
            borderActive = 'border-rose-500 ring-2 ring-rose-500/40 shadow-xl shadow-rose-500/10';
            badgeClass = 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/20';
          } else if (isEap) {
            borderActive = 'border-emerald-500 ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/10';
            badgeClass = 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20';
          }

          return (
            <div
              key={preset.id}
              onClick={() => setSelectedExam(preset.id)}
              className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all relative flex flex-col justify-between ${
                isSelected 
                  ? `bg-white dark:bg-slate-900 ${borderActive}`
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.01]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${badgeClass}`}>
                    {preset.category}
                  </span>
                  {isSelected && (
                    <CheckCircle className={`w-5 h-5 ${isAdv ? 'text-rose-500 dark:text-rose-400' : isEap ? 'text-emerald-500 dark:text-emerald-400' : 'text-indigo-500 dark:text-indigo-400'}`} />
                  )}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">{preset.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">{preset.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {preset.questionsCount.split(' ')[0]} Qs
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  {preset.totalMarks} Marks
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Exam Overview */}
      <div className={`rounded-2xl p-6 border bg-white dark:bg-slate-900 shadow-md dark:shadow-xl space-y-4 ${
        activePreset.category === 'JEE Advanced' 
          ? 'border-rose-200 dark:border-rose-500/30' 
          : activePreset.category === 'AP EAPCET' 
          ? 'border-emerald-200 dark:border-emerald-500/30' 
          : 'border-indigo-200 dark:border-indigo-500/30'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400">Selected Exam:</span>
            <span className={`text-lg font-black ${
              activePreset.category === 'JEE Advanced' ? 'text-rose-600 dark:text-rose-400' : activePreset.category === 'AP EAPCET' ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'
            }`}>
              {activePreset.title}
            </span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
            {activePreset.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /> Duration:
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{activePreset.duration}</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Total Marks:
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{activePreset.totalMarks} Marks</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> Questions:
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{activePreset.questionsCount.split('(')[0]}</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
          <span><strong>Marking Scheme:</strong> {activePreset.markingScheme}</span>
        </div>
      </div>

      {/* Start Button & Instructions CTA */}
      <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Ready for {activePreset.title}?</span>
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Please read the official CBT instructions and exam rules before starting.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setShowInstructions(true)}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Read Exam Rules
          </button>
          <button
            onClick={() => onStartTest(activePreset.shiftTag, activePreset)}
            className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r ${activePreset.color} text-white text-xs font-bold shadow-lg hover:brightness-110 transition-all hover:scale-[1.02]`}
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Launch CBT Test</span>
          </button>
        </div>
      </div>

      {/* Exam Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Official CBT Instructions — {activePreset.category}</h3>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-300">
                <strong>General Instructions:</strong> Total duration of exam is {activePreset.duration}. The countdown timer in the top right corner of screen will display remaining time. At 00:00:00, the test automatically evaluates and submits.
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Question Palette Symbols & Status:</h4>
              <ul className="space-y-2 list-disc pl-4 text-slate-600 dark:text-slate-300">
                <li><strong className="text-slate-900 dark:text-white">White (Not Visited):</strong> You have not visited the question yet.</li>
                <li><strong className="text-red-600 dark:text-red-400">Red (Not Answered):</strong> You have visited the question but not answered it.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-400">Green (Answered):</strong> You have answered the question.</li>
                <li><strong className="text-purple-600 dark:text-purple-400">Purple (Marked for Review):</strong> You have NOT answered the question, but marked it for review.</li>
                <li><strong className="text-purple-700 dark:text-purple-300">Purple with Green Dot:</strong> Question is answered and marked for review. It WILL be evaluated.</li>
              </ul>

              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Exam Specific Marking Rules:</h4>
              {activePreset.category === 'AP EAPCET' ? (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">APSCHE AP EAPCET Rules:</p>
                  <p>• Total Questions: 160 (Mathematics: 80, Physics: 40, Chemistry: 40).</p>
                  <p>• <strong>+1 Mark</strong> for every correct answer.</p>
                  <p>• <strong>0 Mark (No Negative Marking)</strong> for wrong or unattempted questions.</p>
                </div>
              ) : activePreset.category === 'JEE Advanced' ? (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <p className="text-rose-600 dark:text-rose-400 font-bold">Official IIT JEE Advanced Rules:</p>
                  <p>• <strong>Section 1 (SCQ):</strong> +3 for correct choice, -1 for wrong choice.</p>
                  <p>• <strong>Section 2 (MCQ):</strong> +4 if all correct options are selected, partial marks (+1, +2, +3) if some correct options are chosen with no wrong choice, -2 if any incorrect option is selected.</p>
                  <p>• <strong>Section 3 (Numerical/Integer):</strong> +4 for correct integer, 0 in all other cases.</p>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold">NTA JEE Main Rules:</p>
                  <p>• Single Choice (SCQ) and Numerical Value (NVQ) across Physics, Chemistry, and Mathematics.</p>
                  <p>• <strong>+4 Marks</strong> for correct answer, <strong>-1 Mark</strong> for incorrect answer.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button
                onClick={() => {
                  setShowInstructions(false);
                  onStartTest(activePreset.shiftTag, activePreset);
                }}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors shadow-sm"
              >
                I Understand - Start Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
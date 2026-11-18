import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  BrainCircuit,
  Sparkles,
  Zap,
  ArrowUpRight,
  Flame,
  BookOpen,
  HelpCircle,
  Compass,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Trophy,
  Sliders,
  ChevronUp
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend
} from 'recharts';
import { API_BASE_URL } from '../../config';

export default function PerformanceDashboard({ userStats, testHistory = [], authToken, setActiveTab, lastTestResult }) {  // Motivational Quotes Bank for JEE Aspirants
  const motivationalQuotes = [
    {
      quote: "Success in JEE is not about being a genius; it's about being consistent on the days you don't feel like studying.",
      author: "JEE Top 100 Mindset"
    },
    {
      quote: "Every error identified and corrected today is +4 marks permanently secured on exam day.",
      author: "Precision Engineering"
    },
    {
      quote: "The pain of discipline is temporary, but the pride of walking through the gates of IIT is lifelong.",
      author: "Aspirant's Creed"
    },
    {
      quote: "Pressure makes diamonds. Treat each mock test not as an evaluation, but as target calibration.",
      author: "Exam Verse Strategy"
    }
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedSubjectTab, setSelectedSubjectTab] = useState('ALL'); // ALL, Physics, Chemistry, Mathematics
  
  const [selectedAttempt, setSelectedAttempt] = useState(null);
const [attemptDetails, setAttemptDetails] = useState(null);
const [detailsLoading, setDetailsLoading] = useState(false);
const [detailsError, setDetailsError] = useState('');
const [autoLoadedAttempt, setAutoLoadedAttempt] = useState('');

const handleViewDetails = async (attempt) => {
  setSelectedAttempt(attempt);
  setAttemptDetails(null);
  setDetailsError('');
  setDetailsLoading(true);

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/tests/history/${encodeURIComponent(attempt.submissionId)}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Unable to load attempt details');
    }

    setAttemptDetails(data);
  } catch (error) {
    setDetailsError(error.message);
  } finally {
    setDetailsLoading(false);
  }
};
useEffect(() => {
  const latestAttempt = testHistory[0];

  if (
    !authToken ||
    !latestAttempt?.submissionId ||
    autoLoadedAttempt === latestAttempt.submissionId
  ) {
    return;
  }

  setAutoLoadedAttempt(latestAttempt.submissionId);
  handleViewDetails(latestAttempt);
}, [authToken, testHistory, autoLoadedAttempt]);
  // Cycle quote
  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
  };

  // 1. Process Actual Test History & Current Score
const chartData = useMemo(() => {
  return [...testHistory]
    .reverse()
    .map((t, idx) => ({
      name: t.name || `Test ${idx + 1}`,
      score: Number(t.score) || 0,
      accuracy: Number(t.accuracy) || 0,
      title: t.title || `Test ${idx + 1}`,
      date: t.date || ''
    }));
}, [testHistory]);

const latestTest = chartData[chartData.length - 1] || {
  score: 0,
  accuracy: 0
};

const firstTest = chartData[0] || {
  score: 0,
  accuracy: 0
};

const totalScoreImprovement = chartData.length > 1
  ? latestTest.score - firstTest.score
  : 0;

  // 2. Fetch Mistakes data from localStorage
  const mistakeData = useMemo(() => {
    try {
      const saved = localStorage.getItem('exam_verse_mistakes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }, []);

  // 3. Actual MPC Subject Breakdown
const mpcBreakupData = useMemo(() => {
  const subjects = [
    { subject: 'Physics', color: '#38bdf8' },
    { subject: 'Chemistry', color: '#34d399' },
    { subject: 'Mathematics', color: '#c084fc' }
  ];

  const answers = attemptDetails?.answers || [];

  return subjects.map(item => {
    const subjectAnswers = answers.filter(
      answer => answer.subject === item.subject
    );

    const correct = subjectAnswers.filter(
      answer => answer.status === 'CORRECT'
    ).length;

    const incorrect = subjectAnswers.filter(
      answer => answer.status === 'INCORRECT'
    ).length;

    const partial = subjectAnswers.filter(
      answer => answer.status === 'PARTIALLY_CORRECT'
    ).length;

    const attempted = correct + incorrect + partial;

    const accuracy = attempted > 0
      ? Number(((correct / attempted) * 100).toFixed(1))
      : 0;

    const score = subjectAnswers.reduce(
      (total, answer) => total + Number(answer.marksAwarded || 0),
      0
    );

    return {
      ...item,
      score,
      accuracy,
      mistakes: incorrect,
      attempted,
      hasData: subjectAnswers.length > 0
    };
  });
}, [attemptDetails]);

    // 4. Actual selected attempt summary
  const actualAttemptSummary = useMemo(() => {
    const answers = attemptDetails?.answers || [];

    return {
      total: answers.length,
      correct: answers.filter(answer => answer.status === 'CORRECT').length,
      incorrect: answers.filter(answer => answer.status === 'INCORRECT').length,
      partial: answers.filter(answer => answer.status === 'PARTIALLY_CORRECT').length,
      unattempted: answers.filter(answer => answer.status === 'UNATTEMPTED').length,
      attempted: answers.filter(answer =>
        ['CORRECT', 'INCORRECT', 'PARTIALLY_CORRECT'].includes(answer.status)
      ).length,
      marksEarned: answers.reduce(
        (total, answer) => total + Number(answer.marksAwarded || 0),
        0
      ),
      negativeMarks: answers.reduce(
        (total, answer) => total + Math.max(0, -Number(answer.marksAwarded || 0)),
        0
      )
    };
  }, [attemptDetails]);

  // 5. Actual Subject Strengths and Weaknesses
const strengthChapters = mpcBreakupData
  .filter(item => item.hasData && item.accuracy >= 75)
  .map(item => ({
    subject: item.subject,
    chapter: `${item.subject} Overall Performance`,
    accuracy: item.accuracy,
    status: 'Strong Subject',
    impact: `${item.score} marks earned`,
    advice: 'Maintain your performance with regular practice.'
  }));

const weaknessChapters = mpcBreakupData
  .filter(item => item.hasData && item.accuracy < 75)
  .map(item => ({
    subject: item.subject,
    chapter: `${item.subject} Overall Performance`,
    accuracy: item.accuracy,
    negativePenalty: `${item.mistakes} incorrect answers`,
    potentialGain: 'Review incorrect and partially correct answers',
    issueType: 'Accuracy needs improvement',
    diagnosis: `Your accuracy in ${item.subject} is ${item.accuracy}%.`,
    action: 'Review the questions you answered incorrectly and practice similar questions.',
    actionTab: 'practice'
  }));

  // Filter strengths/weaknesses by tab
  const filteredStrengths = selectedSubjectTab === 'ALL' 
    ? strengthChapters 
    : strengthChapters.filter(c => c.subject.toUpperCase() === selectedSubjectTab.toUpperCase());

  const filteredWeaknesses = selectedSubjectTab === 'ALL' 
    ? weaknessChapters 
    : weaknessChapters.filter(c => c.subject.toUpperCase() === selectedSubjectTab.toUpperCase());
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20 animate-fade-in">
      
      {/* ============================================================== */}
      {/* 1. HERO BANNER & MOTIVATIONAL COMMAND CENTER */}
      {/* ============================================================== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>AI Performance Diagnostics & Strategy Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <span>Performance Analytics</span>
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Track your test results, understand subject-wise performance, and identify areas for improvement using your recorded attempts.
            </p>
          </div>

          {/* Latest Test Score Card */}
<div className="shrink-0 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 p-4 rounded-2xl shadow-xl space-y-2 min-w-[240px]">
  <div className="flex items-center justify-between text-xs text-slate-400">
    <span className="flex items-center gap-1 font-semibold text-indigo-400">
      <Trophy className="w-3.5 h-3.5" /> Latest Test Score
    </span>
    <span className="text-emerald-400 font-bold">
      {latestTest.accuracy}% Accuracy
    </span>
  </div>
  <p className="text-2xl font-black text-white">
    {latestTest.score}
    <span className="text-sm font-medium text-slate-400"> Marks</span>
  </p>
  <p className="text-xs text-slate-400">
    Based on your latest completed test
  </p>
</div>
        </div>

        {/* Motivational Champion Quote Box */}
        <div className="bg-slate-950/70 border border-indigo-500/25 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shrink-0 mt-0.5">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-100 italic leading-snug">
                "{motivationalQuotes[quoteIndex].quote}"
              </p>
              <span className="text-xs font-bold text-indigo-400 mt-1 inline-block">
                — {motivationalQuotes[quoteIndex].author}
              </span>
            </div>
          </div>

          <button
            onClick={handleNextQuote}
            className="self-end sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
            title="Next inspirational quote"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Next Spark</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. CORE PERFORMANCE METRICS TILES */}
      {/* ============================================================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1: Latest Score */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold">Current Mock Score</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              +{totalScoreImprovement} Growth
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{latestTest.score}</span>
            <span className="text-xs text-slate-400 font-medium">/ 300 Marks</span>
          </div>
          <p className="text-[11px] text-slate-400">Score from your latest completed test</p>
        </div>

        {/* Metric 2: Attempted Questions */}
<div className="p-5 rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-xl space-y-2">
  <div className="flex items-center justify-between text-xs text-slate-400">
    <span className="font-semibold">Attempted Questions</span>
    <TrendingUp className="w-4 h-4 text-indigo-400" />
  </div>
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-black text-indigo-400">
      {actualAttemptSummary.attempted}
    </span>
    <span className="text-xs text-slate-400">
      / {actualAttemptSummary.total} Questions
    </span>
  </div>
  <p className="text-[11px] text-slate-400">
    {attemptDetails
      ? `${actualAttemptSummary.unattempted} questions unattempted`
      : 'Select a test attempt to view details'}
  </p>
</div>

        {/* Metric 3: Accuracy */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold">Overall Accuracy</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">{latestTest.accuracy}%</span>
            <span className="text-xs text-slate-400 font-medium">Precision Rate</span>
          </div>
          <p className="text-[11px] text-slate-400">Percentage of attempted questions answered correctly</p>
        </div>

        {/* Metric 4: Negative Marking Penalty (Low Hanging Fruit!) */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold">Avoidable Negative Marks</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-400">-12 to -16</span>
            <span className="text-xs text-slate-400 font-medium">Marks Lost</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-medium">
            💡 Eliminating blind guesses unlocks instant +16 Marks!
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. SCORE PROGRESSION GRAPH & MPC ACCURACY MATRIX */}
      {/* ============================================================== */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Progression Trend (2 Cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                <span>Score Progression Trend Across Mocks</span>
              </h3>
              <p className="text-xs text-slate-400">Track upward marks trajectory and test consistency</p>
            </div>
            <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              +{totalScoreImprovement} Marks Net Gain
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis domain={[0, 300]} stroke="#94a3b8" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }}
                  formatter={(value, name) => [
                    `${value} ${name === 'score' ? 'Marks' : '%'}`, 
                    name === 'score' ? 'Total Score' : 'Accuracy'
                  ]}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#6366f1" 
                  strokeWidth={3.5} 
                  dot={{ r: 5, fill: '#6366f1', stroke: '#312e81', strokeWidth: 2 }} 
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  strokeDasharray="4 4"
                  dot={{ r: 3, fill: '#10b981' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
              <span>Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-emerald-400 inline-block border-b-2 border-dashed border-emerald-400" />
              <span>Accuracy (%)</span>
            </div>
          </div>
        </div>

        {/* MPC Subject Balance Card (1 Col) */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span>MPC Subject Strength Balance</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Actual scores and accuracy by subject</p>
          </div>

          <div className="space-y-3.5 my-2">
  {mpcBreakupData.map((item, idx) => (
    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
          {item.subject}
        </span>
        <span className="font-extrabold text-white font-mono">
          {item.hasData ? `${item.accuracy}% Acc` : 'No data'}
        </span>
      </div>

      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{
            width: `${item.hasData ? item.accuracy : 0}%`,
            backgroundColor: item.color
          }}
        />
      </div>

      <div className="flex justify-between text-[11px] text-slate-400">
        <span>Score: {item.hasData ? `${item.score} marks` : '—'}</span>
        <span className="text-amber-400 font-semibold">
          {item.hasData ? `${item.mistakes} Incorrect` : '—'}
        </span>
      </div>
    </div>
  ))}
</div>

<div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 leading-relaxed">
  {attemptDetails?.answers?.length > 0
    ? 'Subject-wise scores and accuracy are calculated from the actual answers in your selected test attempt.'
    : 'Select View Details on a test attempt below to see your actual subject-wise performance.'}
</div>

          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 leading-relaxed">
            ⚡ <strong>Key MPC Insight:</strong> Your Chemistry speed (1.3 min/question) is elite. Allocating 10 extra minutes to Mathematics will directly boost your Math score by +12 marks.
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. PINPOINTED STRENGTHS & WEAKNESSES MATRIX */}
      {/* ============================================================== */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2.5">
              <BrainCircuit className="w-6 h-6 text-indigo-400" />
              <span>Strengths & Critical Weaknesses Diagnostic</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pinpointed breakdown of where you gain marks vs. where marks are leaking away
            </p>
          </div>

          {/* Subject Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
            {['ALL', 'Physics', 'Chemistry', 'Mathematics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedSubjectTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  selectedSubjectTab === tab 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* A. Strengths Column */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Your Power Zones (&gt; 80% Accuracy)</span>
              </h3>
              <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                {filteredStrengths.length} Strongholds
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Your strongest subjects based on accuracy in the selected test attempt.
            </p>

            <div className="space-y-3 pt-1">
              {filteredStrengths.length === 0 ? (
  <p className="text-sm text-slate-400 p-4 rounded-xl bg-slate-950 border border-slate-800">
    No strong subjects identified for this selection yet. Complete a test with subject-wise answers to see your strengths.
  </p>
) : filteredStrengths.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 hover:border-emerald-500/40 transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                        {item.subject} • {item.status}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{item.chapter}</h4>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
                      {item.accuracy}% Acc
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>🎯 <strong className="text-emerald-400">{item.impact}</strong></span>
                  </div>

                  <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Retention:</span>
                    <span>{item.advice}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* B. Weaknesses Column */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Critical Vulnerabilities (Immediate Focus)</span>
              </h3>
              <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                {filteredWeaknesses.length} Priority Areas
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Subjects where your accuracy needs improvement, based on the selected test attempt.
            </p>

            <div className="space-y-3 pt-1">
              {filteredWeaknesses.length === 0 ? (
  <p className="text-sm text-slate-400 p-4 rounded-xl bg-slate-950 border border-slate-800">
    No subjects currently need improvement based on this attempt.
  </p>
) : filteredWeaknesses.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2.5 hover:border-amber-500/40 transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        {item.subject} • {item.issueType}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{item.chapter}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md font-mono">
                        {item.accuracy}% Acc
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-red-400 font-medium">⚠️ Penalty: {item.negativePenalty}</span>
                    <span className="text-emerald-400 font-bold">🚀 Potential: {item.potentialGain}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-1 text-xs">
                    <p className="text-slate-300">
                      <strong className="text-amber-300">Root Cause:</strong> {item.diagnosis}
                    </p>
                    <p className="text-indigo-300 font-medium pt-0.5">
                      <strong>Fix:</strong> {item.action}
                    </p>
                  </div>

                  {/* Direct Action Button */}
                  {setActiveTab && (
                    <button
                      onClick={() => setActiveTab(item.actionTab || 'practice')}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-xs font-semibold border border-indigo-500/30 transition"
                    >
                      <span>Practice {item.chapter.split(' ')[0]} Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. ACTUAL ATTEMPT ANALYSIS */}
<div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/40 shadow-2xl space-y-6">
  <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
      <ShieldCheck className="w-3.5 h-3.5" />
      <span>Verified Performance Data</span>
    </div>
    <h3 className="text-2xl font-black text-white">Actual Attempt Analysis</h3>
    <p className="text-slate-400 text-xs sm:text-sm">
      Understand your performance using the answers and marks recorded in your selected test attempt.
    </p>
  </div>

  {!attemptDetails || actualAttemptSummary.total === 0 ? (
    <div className="text-center py-8 rounded-xl bg-slate-950/70 border border-slate-800">
      <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-3" />
      <p className="text-sm font-semibold text-white">Attempt details unavailable</p>
      <p className="text-xs text-slate-400 mt-1">
        Select a test with saved answer details to view your analysis.
      </p>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20">
          <p className="text-xs text-slate-400">Correct</p>
          <p className="text-2xl font-black text-emerald-400">{actualAttemptSummary.correct}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-red-500/20">
          <p className="text-xs text-slate-400">Incorrect</p>
          <p className="text-2xl font-black text-red-400">{actualAttemptSummary.incorrect}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20">
          <p className="text-xs text-slate-400">Partially Correct</p>
          <p className="text-2xl font-black text-amber-400">{actualAttemptSummary.partial}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-700">
          <p className="text-xs text-slate-400">Unattempted</p>
          <p className="text-2xl font-black text-slate-300">{actualAttemptSummary.unattempted}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
          <p className="text-xs text-slate-400">Actual Marks Earned</p>
          <p className="text-3xl font-black text-white mt-1">
            {actualAttemptSummary.marksEarned}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
          <p className="text-xs text-slate-400">Negative Marks Incurred</p>
          <p className="text-3xl font-black text-red-400 mt-1">
            {actualAttemptSummary.negativeMarks}
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
        <p className="text-sm font-semibold text-white">Your attempt summary</p>
        <p className="text-xs text-slate-400 mt-1">
          You attempted {actualAttemptSummary.attempted} out of {actualAttemptSummary.total} questions.
          Your recorded accuracy is {actualAttemptSummary.attempted > 0
            ? ((actualAttemptSummary.correct / actualAttemptSummary.attempted) * 100).toFixed(1)
            : '0.0'}%.
        </p>
      </div>
    </>
  )}
</div>
      {/* ============================================================== */}
      {/* 6. PERSONALIZED IMPROVEMENT ROADMAP */}
<div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
  <div>
    <h3 className="text-lg font-bold text-white flex items-center gap-2">
      <Compass className="w-5 h-5 text-indigo-400" />
      Personalized Improvement Roadmap
    </h3>
    <p className="text-xs text-slate-400">
      Recommendations based on your selected test attempt.
    </p>
  </div>

  {!attemptDetails || actualAttemptSummary.total === 0 ? (
    <div className="text-center py-6 rounded-xl bg-slate-950 border border-slate-800">
      <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-2" />
      <p className="text-sm text-slate-300">
        Select a test attempt to generate your improvement recommendations.
      </p>
    </div>
  ) : (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        {
          title: 'Review Incorrect Answers',
          description: `${actualAttemptSummary.incorrect} incorrect answers were recorded. Revisit their concepts and understand why your selected answers were wrong.`,
          priority: actualAttemptSummary.incorrect > 0
        },
        {
          title: 'Improve Partially Correct Responses',
          description: `${actualAttemptSummary.partial} partially correct responses were recorded. Review the marking criteria and identify what was missing.`,
          priority: actualAttemptSummary.partial > 0
        },
        {
          title: 'Attempt Unanswered Questions',
          description: `${actualAttemptSummary.unattempted} questions were left unanswered. Review these questions and identify topics that need more practice.`,
          priority: actualAttemptSummary.unattempted > 0
        },
        {
          title: 'Maintain Strong Subjects',
          description: mpcBreakupData.filter(item => item.hasData && item.accuracy >= 75).length > 0
            ? `Your stronger subjects are ${mpcBreakupData.filter(item => item.hasData && item.accuracy >= 75).map(item => item.subject).join(', ')}. Continue practicing to maintain consistency.`
            : 'No subject currently meets the strong-performance threshold. Focus on building accuracy through regular practice.',
          priority: false
        },
        {
          title: 'Focus on Subjects Needing Improvement',
          description: mpcBreakupData.filter(item => item.hasData && item.accuracy < 75).length > 0
            ? `Give additional attention to ${mpcBreakupData.filter(item => item.hasData && item.accuracy < 75).map(item => item.subject).join(', ')} based on their recorded accuracy.`
            : 'No subject currently falls below the improvement threshold among subjects with recorded answers.',
          priority: mpcBreakupData.some(item => item.hasData && item.accuracy < 75)
        },
        {
          title: 'Review Negative Marking',
          description: `${actualAttemptSummary.negativeMarks} negative marks were recorded. Review the questions that resulted in penalties and evaluate your answering strategy.`,
          priority: actualAttemptSummary.negativeMarks > 0
        }
      ].map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2"
        >
          <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
            item.priority
              ? 'text-amber-400 bg-amber-500/10'
              : 'text-indigo-400 bg-indigo-500/10'
          }`}>
            {item.priority ? 'Needs Attention' : 'Continue'}
          </span>
          <h4 className="text-sm font-bold text-white">{item.title}</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )}
</div>

      
      {/* 7. TEST HISTORY & ATTEMPT DETAILS */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Test History & Attempt Details
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Review your previous attempts and inspect your answers.
          </p>
        </div>

        {testHistory.length === 0 ? (
          <div className="text-center py-10 rounded-xl bg-slate-950 border border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-white">No test attempts yet</p>
            <p className="text-xs text-slate-400 mt-1">
              Complete a mock test to see your history here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[850px]">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="p-3">Test</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Accuracy</th>
                  <th className="p-3">Correct</th>
                  <th className="p-3">Incorrect</th>
                  <th className="p-3">Partial</th>
                  <th className="p-3">Unattempted</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {testHistory.map((test, index) => (
                  <tr
                    key={test.submissionId || index}
                    className="border-b border-slate-800 hover:bg-slate-800/50"
                  >
                    <td className="p-3 text-white font-semibold">
                      {test.title || test.name || test.testId}
                      <span className="block text-slate-500 font-normal mt-1">
                        {test.category || 'Mock Test'}
                      </span>
                    </td>
                    <td className="p-3 text-slate-300">{test.date || '—'}</td>
                    <td className="p-3 text-white font-bold">
                      {test.score} / {test.maxMarks}
                    </td>
                    <td className="p-3 text-indigo-300">{test.accuracy}%</td>
                    <td className="p-3 text-emerald-400">{test.correctCount ?? 0}</td>
                    <td className="p-3 text-red-400">{test.incorrectCount ?? 0}</td>
                    <td className="p-3 text-amber-400">{test.partiallyCorrectCount ?? 0}</td>
                    <td className="p-3 text-slate-400">{test.unattemptedCount ?? 0}</td>
                    <td className="p-3 text-slate-300">
                      {Math.floor((test.timeTakenSeconds || 0) / 60)}m {(test.timeTakenSeconds || 0) % 60}s
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleViewDetails(test)}
                        className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedAttempt && (
          <div className="mt-5 p-5 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white">
                  Attempt Review
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedAttempt.title || selectedAttempt.name}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedAttempt(null);
                  setAttemptDetails(null);
                  setDetailsError('');
                }}
                className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs"
              >
                Close
              </button>
            </div>

            {detailsLoading && (
              <p className="text-sm text-indigo-300">Loading attempt details...</p>
            )}

            {detailsError && (
              <p className="text-sm text-red-400">{detailsError}</p>
            )}

            {attemptDetails && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900">
                    <p className="text-xs text-slate-400">Score</p>
                    <p className="text-white font-bold">
                      {attemptDetails.submission.score} / {attemptDetails.submission.maxMarks}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900">
                    <p className="text-xs text-slate-400">Accuracy</p>
                    <p className="text-indigo-300 font-bold">
                      {attemptDetails.submission.accuracy}%
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900">
                    <p className="text-xs text-slate-400">Questions</p>
                    <p className="text-white font-bold">
                      {attemptDetails.answers.length}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900">
                    <p className="text-xs text-slate-400">Time Taken</p>
                    <p className="text-white font-bold">
                      {Math.floor((attemptDetails.submission.timeTakenSeconds || 0) / 60)}m {(attemptDetails.submission.timeTakenSeconds || 0) % 60}s
                    </p>
                  </div>
                </div>

                <h5 className="text-sm font-bold text-white">
                  Question-wise Responses
                </h5>

                {attemptDetails.answers.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    No question responses were saved for this attempt.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {attemptDetails.answers.map((answer, index) => (
                      <div
                        key={answer.questionId || index}
                        className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-bold text-white">
                            Question {index + 1} · {answer.subject || 'General'}
                          </p>
                          <span className={`text-xs font-bold ${
                            answer.status === 'CORRECT'
                              ? 'text-emerald-400'
                              : answer.status === 'PARTIALLY_CORRECT'
                                ? 'text-amber-400'
                                : answer.status === 'UNATTEMPTED'
                                  ? 'text-slate-400'
                                  : 'text-red-400'
                          }`}>
                            {answer.status.replaceAll('_', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 break-all">
                          Question ID: {answer.questionId}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-slate-950">
                            <p className="text-slate-400 mb-1">Your Answer</p>
                            <p className="text-white break-all">
                              {answer.userAnswer === null
                                ? 'Not attempted'
                                : JSON.stringify(answer.userAnswer)}
                            </p>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-950">
                            <p className="text-slate-400 mb-1">Correct Answer</p>
                            <p className="text-emerald-300 break-all">
                              {answer.correctAnswer === null
                                ? 'Not available for this attempt'
                                : JSON.stringify(answer.correctAnswer)}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400">
                          Marks awarded: <span className="text-white font-bold">{answer.marksAwarded}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>


      {/* ============================================================== */}
      {/* 7. QUICK-ACTION LAUNCHPAD (CONNECTED TO REST OF APP) */}
      {/* ============================================================== */}
      {setActiveTab && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Ready to turn these insights into marks?</span>
            </h4>
            <p className="text-xs text-slate-300">
              Jump directly into targeted practice, mistake review, or launch a full CBT mock.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => setActiveTab('practice')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Practice Questions</span>
            </button>
            <button
              onClick={() => setActiveTab('mistakes')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition flex items-center gap-1.5"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Mistake Vault</span>
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Formula Hub</span>
            </button>
            <button
              onClick={() => setActiveTab('mock')}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Launch Mock Test</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

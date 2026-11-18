import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Dashboard from './components/Home/Dashboard';
import TestLauncher from './components/MockTest/TestLauncher';
import CbtPlayer from './components/MockTest/CbtPlayer';
import PostTestAnalysis from './components/MockTest/PostTestAnalysis';
import PyqBook from './components/PYQ/PyqBook';
import JeeAdvancedBook from './components/JEEAdvanced/JeeAdvancedBook';
import EapcetBook from './components/EAPCET/EapcetBook';
import PracticeHub from './components/Practice/PracticeHub';
import MistakeNotebook from './components/MistakeNotebook/MistakeNotebook';
import FormulaHub from './components/FormulaBook/FormulaHub';
import PerformanceDashboard from './components/Analytics/PerformanceDashboard';
import { API_BASE_URL } from './config';

import mockQuestionsData from './data/mockQuestions.json';
import pyqData from './data/pyqData.json';
import jeeAdvancedData from './data/jeeAdvancedData.json';
import eapcetData from './data/eapcetData.json';
import formulaData from './data/formulaData.json';

export default function App() {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('exam_verse_token'));
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('exam_verse_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authLoading, setAuthLoading] = useState(true);

  const [activeTab, setActiveTab] = useState('home');  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('exam_verse_theme');
    return saved !== null ? saved === 'dark' : true;
  });

    // Verify saved authentication session
  useEffect(() => {
    const verifySession = async () => {
      if (!authToken) {
        setCurrentUser(null);
        setAuthLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error('Session expired');
        }

        setCurrentUser(data.user);
        localStorage.setItem('exam_verse_user', JSON.stringify(data.user));
      } catch (error) {
        localStorage.removeItem('exam_verse_token');
        localStorage.removeItem('exam_verse_user');
        setAuthToken(null);
        setCurrentUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    verifySession();
  }, [authToken]);
  
    const handleLogin = (token, user) => {
    localStorage.setItem('exam_verse_token', token);
    localStorage.setItem('exam_verse_user', JSON.stringify(user));
    setAuthToken(token);
    setCurrentUser(user);
  };
  const handleLogout = () => {
  localStorage.removeItem('exam_verse_token');
  localStorage.removeItem('exam_verse_user');
  setAuthToken(null);
  setCurrentUser(null);
  setTestHistory([]);
  setActiveTab('home');
};
  // Sync documentElement class with darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('exam_verse_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('exam_verse_theme', 'light');
    }
  }, [darkMode]);

  // CBT Test Engine State
  const [mockState, setMockState] = useState('LAUNCHER'); // LAUNCHER, IN_PROGRESS, COMPLETED
  const [currentTestMode, setCurrentTestMode] = useState('JEE Main');
  const [currentPreset, setCurrentPreset] = useState(null);
  const [lastTestResult, setLastTestResult] = useState(null);

  // Persistent User State with localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('exam_verse_bookmarks');
    return saved ? JSON.parse(saved) : ['PYQ-2024-P1'];
  });

  const [masteredFormulas, setMasteredFormulas] = useState(() => {
    const saved = localStorage.getItem('exam_verse_mastered');
    return saved ? JSON.parse(saved) : ['FORM-P-01', 'FORM-C-01'];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('exam_verse_favorites');
    return saved ? JSON.parse(saved) : ['FORM-M-01'];
  });

  const [testHistory, setTestHistory] = useState([]);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('exam_verse_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('exam_verse_mastered', JSON.stringify(masteredFormulas));
  }, [masteredFormulas]);

  useEffect(() => {
    localStorage.setItem('exam_verse_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Load authenticated user's test history from MySQL
useEffect(() => {
  const loadTestHistory = async () => {
    if (!authToken) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/tests/history`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Unable to load test history');
      }

      const formattedHistory = data.history.map(test => ({
  name: test.testTitle || test.testId,
  title: test.testTitle || test.testId,
  testId: test.testId,
  category: test.category,
  score: Number(test.score),
  maxMarks: Number(test.maxMarks),
  accuracy: Number(test.accuracy),
  correctCount: Number(test.correctCount),
  incorrectCount: Number(test.incorrectCount),
  partiallyCorrectCount: Number(test.partiallyCorrectCount),
  unattemptedCount: Number(test.unattemptedCount),
  timeTakenSeconds: Number(test.timeTakenSeconds),
  date: new Date(test.submittedAt).toLocaleString(),
  submissionId: test.submissionId
}));

      setTestHistory(formattedHistory);
    } catch (error) {
      console.error('Test history loading failed:', error);
    }
  };

  loadTestHistory();
}, [authToken]);	

  // Toggle handlers
  const handleToggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleToggleMastered = (id) => {
    setMasteredFormulas(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleToggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Test Engine Handlers
  const getQuestionsForTest = (mode, preset = currentPreset) => {
  if (preset?.category === 'JEE Advanced') {
    return jeeAdvancedData;
  }

  if (preset?.category === 'AP EAPCET') {
    return eapcetData;
  }

  if (preset?.category === 'JEE Main') {
    return pyqData;
  }

  if (!mode) return pyqData;

  const upper = mode.toUpperCase();

  if (upper.includes('ADVANCED') || upper.includes('ADV')) {
    return jeeAdvancedData;
  }

  if (upper.includes('EAPCET')) {
    return eapcetData;
  }

  return pyqData;
};

  const handleStartTest = (mode, preset = null) => {
    setCurrentTestMode(mode);
    setCurrentPreset(preset);
    setMockState('IN_PROGRESS');
  };

  
const handleCompleteTest = async (result) => {
  try {
    if (!currentPreset) {
      alert('Please select an exam paper from the Test Launcher.');
      return;
    }

    const response = await fetch(`${API_BASE_URL}/api/tests/submit`, {
      method: 'POST',
      headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authToken}`
},
      body: JSON.stringify({
        preset: currentPreset,
        userAnswers: result.userAnswers,
        timeTakenSeconds: result.timeTakenSecs
      })
    });

    const apiResponse = await response.json();

    if (!response.ok || !apiResponse.success) {
      throw new Error(apiResponse.error || 'Test evaluation failed');
    }

    const evaluation = apiResponse.data;

    const completedResult = {
      ...result,
      testMode: evaluation.testMode || result.testMode,
      totalScore: evaluation.totalScore,
      maxMarks: evaluation.maxMarks,
      correctCount: evaluation.correctCount,
      incorrectCount: evaluation.incorrectCount,
      partiallyCorrectCount: evaluation.partiallyCorrectCount || 0,
      unattemptedCount: evaluation.unattemptedCount,
      subjectBreakup: evaluation.subjectBreakup,
      backendEvaluation: evaluation
    };

    setLastTestResult(completedResult);
    setMockState('COMPLETED');

    localStorage.setItem(
      'exam_verse_last_result',
      JSON.stringify(completedResult)
    );

    const newEntry = {
      name: `Mock ${testHistory.length + 1}`,
      title: completedResult.testMode,
      score: completedResult.totalScore,
      maxMarks: completedResult.maxMarks,
      accuracy: evaluation.summary.accuracyPercentage,
      correctCount: completedResult.correctCount,
      incorrectCount: completedResult.incorrectCount,
      unattemptedCount: completedResult.unattemptedCount,
      subjectBreakup: completedResult.subjectBreakup,
      timeTakenSecs: completedResult.timeTakenSecs,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    };

    setTestHistory(prev => [...prev, newEntry]);

  } catch (error) {
    console.error('Backend test submission failed:', error);
    alert(`Could not evaluate your test: ${error.message}`);
  }
};

  const handleRetakeTest = () => {
    setMockState('LAUNCHER');
  };

  const handleQuickLaunchFromHome = (mode) => {
  setActiveTab('mock');
  setMockState('LAUNCHER');
};

  // User stats summary for dashboard
  const validTests = testHistory.filter(t => (t.accuracy && t.accuracy > 40) || (t.score && t.score > 50));
  const calculatedAvg = validTests.length > 0 
    ? Math.round(validTests.reduce((acc, curr) => acc + curr.accuracy, 0) / validTests.length)
    : 77;

  const userStats = {
    testsCompleted: validTests.length > 0 ? validTests.length : testHistory.length,
    validTestsCount: validTests.length,
    avgAccuracy: calculatedAvg,
    masteredFormulas: masteredFormulas.length,
    totalFormulas: formulaData.length || 213,
    bookmarksCount: bookmarks.length,
    totalPyqs: pyqData.length,
    totalAdvanced: jeeAdvancedData.length,
    totalEapcet: eapcetData.length,
    totalPapers: 19, // 8 JEE Main + 6 JEE Advanced + 5 AP EAPCET
    strongestSubject: 'Physics (MPC)'
  };

    if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Checking your session...
      </div>
    );
  }

  if (!authToken || !currentUser) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Show Navbar when not in full-screen active test mode */}
      {mockState !== 'IN_PROGRESS' && ( 
          <Navbar
  activeTab={activeTab}
  setActiveTab={(tab) => {
    setActiveTab(tab);
    if (tab === 'mock' && mockState === 'COMPLETED') {
      setMockState('LAUNCHER');
    }
  }}
  onLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}

      {/* Main View Switcher */}
      <main className={mockState === 'IN_PROGRESS' ? 'h-screen overflow-hidden' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'}>
        {activeTab === 'home' && (
          <Dashboard 
            setActiveTab={setActiveTab} 
            userStats={userStats}
            onLaunchTest={handleQuickLaunchFromHome}
          />
        )}

        {activeTab === 'mock' && (
          <>
            {mockState === 'LAUNCHER' && (
              <TestLauncher onStartTest={handleStartTest} />
            )}

            {mockState === 'IN_PROGRESS' && (
              <CbtPlayer 
                testMode={currentTestMode}
                preset={currentPreset}
                questionsData={getQuestionsForTest(currentTestMode, currentPreset)}
                onCompleteTest={handleCompleteTest}
              />
            )}

            {mockState === 'COMPLETED' && lastTestResult && (
              <PostTestAnalysis 
                resultData={lastTestResult}
                preset={currentPreset}
                onRetakeTest={handleRetakeTest}
              />
            )}
          </>
        )}

        {activeTab === 'pyq' && (
          <PyqBook 
            pyqData={pyqData}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'advanced' && (
          <JeeAdvancedBook 
            advancedData={jeeAdvancedData}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'eapcet' && (
          <EapcetBook 
            eapcetData={eapcetData}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeHub 
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakeNotebook pyqQuestions={pyqData} />
        )}

        {activeTab === 'formulas' && (
          <FormulaHub 
            formulaData={formulaData}
            masteredFormulas={masteredFormulas}
            favorites={favorites}
            onToggleMastered={handleToggleMastered}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'analytics' && (
          <PerformanceDashboard
  userStats={userStats}
  testHistory={testHistory}
  authToken={authToken}
  setActiveTab={setActiveTab}
  lastTestResult={lastTestResult}
/>
        )}
      </main>
    </div>
  );
}

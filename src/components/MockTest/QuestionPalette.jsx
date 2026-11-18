import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function QuestionPalette({ 
  questions, 
  userAnswers, 
  questionStatus, 
  currentSubject, 
  activeQuestionIndex, 
  onSelectQuestion 
}) {
  // Legend status counts
  const getStatusCount = (statusType) => {
    return questions.filter((q) => (questionStatus[q.id] || 'notVisited') === statusType).length;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col h-full space-y-4">
      {/* Legend Header */}
      <div className="space-y-3 border-b border-slate-800 pb-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>Question Palette</span>
          <span className="text-[10px] text-indigo-400 font-medium">NTA CBT Legend</span>
        </h4>

        {/* NTA Status Indicators */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-300">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-slate-300 bg-white text-slate-950 font-bold flex items-center justify-center text-xs">
              {getStatusCount('notVisited')}
            </span>
            <span className="text-slate-400">Not Visited</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-red-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
              {getStatusCount('notAnswered')}
            </span>
            <span className="text-slate-400">Not Answered</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
              {getStatusCount('answered')}
            </span>
            <span className="text-slate-400">Answered</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
              {getStatusCount('markedReview')}
            </span>
            <span className="text-slate-400">Marked Review</span>
          </div>

          <div className="col-span-2 flex items-center space-x-2">
            <div className="relative">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                {getStatusCount('ansMarkedReview')}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
            </div>
            <span className="text-slate-300 text-[11px]">Ans & Marked for Review</span>
          </div>
        </div>
      </div>

      {/* Question Number Palette Buttons Grid */}
      <div className="flex-1 overflow-y-auto space-y-2">
        <p className="text-xs font-bold text-slate-300">
          Subject: <span className="text-indigo-400">{currentSubject}</span>
        </p>

        <div className="grid grid-cols-5 gap-2 pt-2">
          {questions.map((q, idx) => {
            const status = questionStatus[q.id] || 'notVisited';
            const isCurrent = idx === activeQuestionIndex;

            let buttonClass = "bg-white text-slate-900 border-slate-300"; // notVisited default
            if (status === 'notAnswered') {
              buttonClass = "bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20";
            } else if (status === 'answered') {
              buttonClass = "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20";
            } else if (status === 'markedReview') {
              buttonClass = "bg-purple-600 text-white border-purple-500 rounded-full";
            } else if (status === 'ansMarkedReview') {
              buttonClass = "bg-purple-600 text-white border-purple-500 rounded-full relative";
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(idx)}
                className={`w-9 h-9 rounded-lg font-bold text-xs flex items-center justify-center transition-all duration-150 ${buttonClass} ${
                  isCurrent ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 scale-110' : 'hover:opacity-90'
                }`}
              >
                {idx + 1}
                {status === 'ansMarkedReview' && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

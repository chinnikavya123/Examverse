
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../../src/data');

const DATA_FILES = {
  'JEE Main': 'pyqData.json',
  'JEE Advanced': 'jeeAdvancedData.json',
  'AP EAPCET': 'eapcetData.json'
};

function normalizeTag(value) {
  return String(value || '')
    .replace(/[^a-z0-9]/gi, '')
    .toLowerCase();
}

function loadQuestions(category) {
  const filename = DATA_FILES[category];

  if (!filename) {
    throw new Error('Unsupported exam category');
  }

  const fullPath = path.join(DATA_DIR, filename);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Question bank not found: ${filename}`);
  }

  const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

  if (!Array.isArray(data)) {
    throw new Error(`Invalid question bank: ${filename}`);
  }

  return data;
}

export function getExamQuestions(preset) {
  if (!preset?.category || !preset?.shiftTag || !preset?.id) {
    throw new Error('A valid exam preset is required');
  }

  const allQuestions = loadQuestions(preset.category);
  const targetTag = normalizeTag(preset.shiftTag);
  const yearMatch = String(preset.id).match(/20\d{2}/);
  const targetYear = yearMatch ? yearMatch[0] : null;

  if (!targetYear) {
    throw new Error('Could not identify the exam year');
  }

  let questions = [];

  if (preset.category === 'JEE Main') {
    questions = allQuestions.filter(q => {
      const questionShift = normalizeTag(q.shift);

      return (
  (q.exam === 'JEE Main' || !q.exam) &&
  (!q.year || String(q.year) === targetYear) &&
  questionShift.length > 0 &&
  targetTag.endsWith(questionShift)
);
    });
  } else if (preset.category === 'JEE Advanced') {
    questions = allQuestions.filter(q =>
  (q.exam === 'JEE Advanced' || q.exam === 'JEE (Advanced)') &&
  normalizeTag(q.paper) === targetTag
);
  } else if (preset.category === 'AP EAPCET') {
    questions = allQuestions.filter(q =>
      q.exam === 'AP EAPCET' &&
      String(q.year) === targetYear &&
      normalizeTag(q.shift) === targetTag
    );
  }

  if (questions.length === 0) {
    throw new Error(
      `No questions found for ${preset.title || preset.id}`
    );
  }

  return questions;
}

export function getPublicQuestions(questions) {
  return questions.map(q => {
    const {
      correctOption,
      correctOptions,
      correctAnswer,
      correctValue,
      solution,
      solutions,
      ...publicQuestion
    } = q;

    return publicQuestion;
  });
}

function getMarking(q, category) {
  if (category === 'AP EAPCET') {
    return { positive: 1, negative: 0, partial: null };
  }

  if (category === 'JEE Main') {
    return { positive: 4, negative: 1, partial: null };
  }

  const marking = q.marking || {};

  if (typeof marking === 'object' && marking !== null) {
    const positive = Number(
      marking.correct ?? marking.positive ?? 0
    );

    const negative = Math.abs(Number(
      marking.incorrect ?? marking.negative ?? 0
    ));

    const partial = marking.partial !== undefined
      ? Number(marking.partial)
      : null;

    if (positive > 0) {
      return { positive, negative, partial };
    }
  }

  if (typeof marking === 'string') {
    const positiveMatch = marking.match(/\+\s*(\d+(?:\.\d+)?)/);
    const negativeMatch = marking.match(/-\s*(\d+(?:\.\d+)?)/);

    if (positiveMatch) {
      return {
        positive: Number(positiveMatch[1]),
        negative: negativeMatch ? Number(negativeMatch[1]) : 0,
        partial: null
      };
    }
  }

  const type = String(q.type || '').toUpperCase();

  if (type === 'SCQ' || type === 'MATCHING') {
    return { positive: 3, negative: 1, partial: null };
  }

  if (type === 'MCQ') {
    return { positive: 4, negative: 2, partial: null };
  }

  return { positive: 4, negative: 0, partial: null };
}

function isUnattempted(answer) {
  return (
    answer === undefined ||
    answer === null ||
    answer === '' ||
    (Array.isArray(answer) && answer.length === 0)
  );
}

function isNumericalQuestion(q) {
  const type = String(q.type || '').toUpperCase();

  return (
    type === 'NUMERICAL' ||
    type === 'NVQ' ||
    !Array.isArray(q.options) ||
    q.options.length === 0
  );
}

function isCorrectAnswer(q, answer) {
  if (isNumericalQuestion(q)) {
    const target = q.correctValue !== undefined
      ? q.correctValue
      : q.correctAnswer;

    const userNumber = Number(answer);
    const targetNumber = Number(target);

    if (
      answer === '' ||
      !Number.isFinite(userNumber) ||
      !Number.isFinite(targetNumber)
    ) {
      return false;
    }

    return (
      Math.abs(userNumber - targetNumber) <=
      Number(q.tolerance ?? 0.1)
    );
  }

  const correct = q.correctOption ?? q.correctOptions;

  if (Array.isArray(correct)) {
    if (!Array.isArray(answer)) {
      return false;
    }

    const selected = answer
      .map(Number)
      .sort((a, b) => a - b);

    const expected = correct
      .map(Number)
      .sort((a, b) => a - b);

    return JSON.stringify(selected) === JSON.stringify(expected);
  }

  return Number(answer) === Number(correct);
}

function getPartialMarks(q, answer, marking) {
  const correct = q.correctOption ?? q.correctOptions;

  if (
    marking.partial === null ||
    !Array.isArray(correct) ||
    !Array.isArray(answer) ||
    answer.length === 0
  ) {
    return null;
  }

  const selected = answer.map(Number);
  const expected = correct.map(Number);

  const hasWrongOption = selected.some(
    option => !expected.includes(option)
  );

  if (hasWrongOption) {
    return null;
  }

  if (
    selected.length < expected.length &&
    selected.length > 0
  ) {
    return marking.partial;
  }

  return null;
}

function normalizeSubject(subject) {
  const value = String(subject || '').toLowerCase();

  if (value.includes('chem')) return 'Chemistry';
  if (value.includes('math')) return 'Mathematics';

  return 'Physics';
}

export function evaluateExam(
  preset,
  userAnswers,
  timeTakenSeconds = 0
) {
  const questions = getExamQuestions(preset);

  let totalScore = 0;
  let maxMarks = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let partiallyCorrectCount = 0;

  const subjectBreakdown = {
    Physics: 0,
    Chemistry: 0,
    Mathematics: 0
  };

  const detailedResponses = [];

  questions.forEach(q => {
    const answer = userAnswers[q.id];
    const marking = getMarking(q, preset.category);
    const subject = normalizeSubject(q.subject);

    maxMarks += marking.positive;

    let status = 'UNATTEMPTED';
    let marksAwarded = 0;

    if (isUnattempted(answer)) {
      unattemptedCount++;
    } else if (isCorrectAnswer(q, answer)) {
      status = 'CORRECT';
      marksAwarded = marking.positive;
      correctCount++;
    } else {
      const partialMarks = getPartialMarks(
        q,
        answer,
        marking
      );

      if (partialMarks !== null) {
        status = 'PARTIALLY_CORRECT';
        marksAwarded = partialMarks;
        partiallyCorrectCount++;
      } else {
        status = 'INCORRECT';
        marksAwarded = -marking.negative;
        incorrectCount++;
      }
    }

    totalScore += marksAwarded;
    subjectBreakdown[subject] += marksAwarded;

            detailedResponses.push({
      questionId: q.id,
      subject,
      userAnswer: answer ?? null,
      correctAnswer: q.correctOption ?? q.correctOptions ?? q.correctValue ?? q.correctAnswer ?? null,
      status,
      marksAwarded
    });
  });

  const attemptedCount =
    correctCount +
    incorrectCount +
    partiallyCorrectCount;

  const accuracy = attemptedCount > 0
    ? Number(
        ((correctCount / attemptedCount) * 100).toFixed(1)
      )
    : 0;

  return {
    testId: preset.id,
    testTitle: preset.title,
    testMode: preset.title || preset.category,
    category: preset.category,
    submittedAt: new Date().toISOString(),
    timeTakenSeconds,

    summary: {
      totalQuestions: questions.length,
      attempted: attemptedCount,
      correct: correctCount,
      incorrect: incorrectCount,
      partiallyCorrect: partiallyCorrectCount,
      unattempted: unattemptedCount,
      totalScore,
      maxMarks,
      accuracyPercentage: accuracy
    },

    totalScore,
    maxMarks,
    correctCount,
    incorrectCount,
    partiallyCorrectCount,
    unattemptedCount,
    subjectBreakup: subjectBreakdown,
    subjectBreakdown,
    detailedResponses
  };
}

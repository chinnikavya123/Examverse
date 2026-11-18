import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../../src/data');

// Helper to safely load JSON
function loadJsonFile(filename, fallback = {}) {
  try {
    const fullPath = path.join(DATA_DIR, filename);
    if (fs.existsSync(fullPath)) {
      return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    }
  } catch (err) {
    console.error(`Error loading ${filename}:`, err.message);
  }
  return fallback;
}

// GET /api/practice/stats
router.get('/practice/stats', (req, res) => {
  const data = loadJsonFile('practiceQuestionsData.json', { physics: [], chemistry: [], mathematics: [] });
  res.json({
    success: true,
    stats: {
      physics: (data.physics || []).length,
      chemistry: (data.chemistry || []).length,
      mathematics: (data.mathematics || []).length,
      totalQuestions: (data.physics || []).length + (data.chemistry || []).length + (data.mathematics || []).length
    }
  });
});

// GET /api/practice/:subject
router.get('/practice/:subject', (req, res) => {
  const subject = req.params.subject.toLowerCase();
  const validSubjects = ['physics', 'chemistry', 'mathematics'];

  if (!validSubjects.includes(subject)) {
    return res.status(400).json({ error: 'Invalid subject. Use physics, chemistry, or mathematics.' });
  }

  const data = loadJsonFile('practiceQuestionsData.json', {});
  let questions = data[subject] || [];

  // Optional query filtering
  const { topic, type, limit } = req.query;
  if (topic) {
    questions = questions.filter(q => q.topic?.toLowerCase().includes(topic.toLowerCase()));
  }
  if (type) {
    questions = questions.filter(q => q.type?.toLowerCase() === type.toLowerCase());
  }
  if (limit) {
    const l = parseInt(limit, 10);
    if (!isNaN(l) && l > 0) {
      questions = questions.slice(0, l);
    }
  }

  res.json({
    success: true,
    subject,
    count: questions.length,
    questions
  });
});

// GET /api/mocks
router.get('/mocks', (req, res) => {
  const data = loadJsonFile('mockQuestions.json', { tests: [] });
  const testsList = Array.isArray(data) 
    ? data.map(t => ({ id: t.id, title: t.title, duration: t.duration, totalMarks: t.totalMarks }))
    : (data.tests || []).map(t => ({ id: t.id, title: t.title, duration: t.duration, totalMarks: t.totalMarks }));

  res.json({
    success: true,
    count: testsList.length,
    tests: testsList
  });
});

// GET /api/mocks/:id
router.get('/mocks/:id', (req, res) => {
  const testId = req.params.id;
  const data = loadJsonFile('mockQuestions.json', []);
  const allTests = Array.isArray(data) ? data : (data.tests || []);
  const test = allTests.find(t => String(t.id) === String(testId));

  if (!test) {
    return res.status(404).json({ error: `Mock test with ID ${testId} not found` });
  }

  res.json({
    success: true,
    test
  });
});

export default router;

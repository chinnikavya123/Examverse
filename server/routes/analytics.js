import { Router } from 'express';

const router = Router();

// Simulated All-India Mock Test Leaderboard
const leaderboard = [
  { rank: 1, name: 'Aditya Sharma', score: 288, percentile: 99.98, accuracy: 96.2, state: 'Rajasthan' },
  { rank: 2, name: 'Ananya Reddy', score: 282, percentile: 99.95, accuracy: 94.8, state: 'Telangana' },
  { rank: 3, name: 'Rohan Gupta', score: 275, percentile: 99.91, accuracy: 93.5, state: 'Maharashtra' },
  { rank: 4, name: 'Priya Patel', score: 270, percentile: 99.87, accuracy: 92.0, state: 'Gujarat' },
  { rank: 5, name: 'Karthik Iyer', score: 265, percentile: 99.82, accuracy: 91.4, state: 'Tamil Nadu' },
  { rank: 6, name: 'Sneha Mukherjee', score: 260, percentile: 99.76, accuracy: 90.5, state: 'West Bengal' },
  { rank: 7, name: 'Harsh Verma', score: 254, percentile: 99.69, accuracy: 89.8, state: 'Uttar Pradesh' },
  { rank: 8, name: 'Tanvi Joshi', score: 248, percentile: 99.58, accuracy: 88.6, state: 'Delhi' }
];

// GET /api/analytics/leaderboard
router.get('/leaderboard', (req, res) => {
  res.json({
    success: true,
    exam: 'JEE Main 2026 Simulation',
    totalCandidates: 145280,
    leaderboard
  });
});

// GET /api/analytics/summary
router.get('/summary', (req, res) => {
  res.json({
    success: true,
    analytics: {
      totalTestsAttempted: 12,
      averageScore: 184,
      highestScore: 236,
      overallAccuracy: 81.4,
      strongestSubject: 'Physics (88% accuracy)',
      focusArea: 'Organic Chemistry (Reaction mechanisms)',
      timeManagement: {
        physicsAvgMinutes: 52,
        chemistryAvgMinutes: 38,
        mathAvgMinutes: 75
      }
    }
  });
});

export default router;

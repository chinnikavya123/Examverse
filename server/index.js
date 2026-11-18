import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import questionsRoutes from './routes/questions.js';
import testsRoutes from './routes/tests.js';
import analyticsRoutes from './routes/analytics.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware for live demo visibility
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[EXAMVERSE-API] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Mount modular REST API routes
app.use('/api/auth', authRoutes);
app.use('/api', questionsRoutes);
app.use('/api/tests', testsRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check / metadata endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ACTIVE',
    service: 'ExamVerse Assessment & Question Engine API',
    version: '1.0.0',
    environment: 'production',
    uptime: `${Math.floor(process.uptime())}s`,
    endpoints: [
      'GET  /api/health',
      'GET  /api/practice/stats',
      'GET  /api/practice/:subject',
      'GET  /api/mocks',
      'GET  /api/mocks/:id',
      'POST /api/tests/submit',
      'GET  /api/tests/history',
      'POST /api/auth/login',
      'POST /api/auth/register',
      'GET  /api/auth/profile',
      'GET  /api/analytics/summary',
      'GET  /api/analytics/leaderboard'
    ]
  });
});

// Root welcome endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ExamVerse Assessment Engine API',
    documentation: '/api/health',
    status: 'Running'
  });
});

// Start Express server
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  EXAMVERSE ASSESSMENT BACKEND SERVER STARTED`);
  console.log(`  Running on: http://localhost:${PORT}`);
  console.log(`  API Health: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});

export default app;

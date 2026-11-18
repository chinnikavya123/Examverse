
import { Router } from 'express';
import { randomUUID } from 'crypto';
import pool from '../db.js';
import { evaluateExam } from '../services/assessment.js';
import { authenticateToken } from './auth.js';

const router = Router();

router.post('/submit', authenticateToken, async (req, res) => {
  let connection;

  try {
    const {
      preset,
      userAnswers = {},
      timeTakenSeconds = 0
    } = req.body;

    if (
      !preset ||
      !preset.id ||
      !preset.category ||
      !preset.shiftTag
    ) {
      return res.status(400).json({
        success: false,
        error: 'A valid exam preset is required'
      });
    }

    if (
      typeof userAnswers !== 'object' ||
      userAnswers === null ||
      Array.isArray(userAnswers)
    ) {
      return res.status(400).json({
        success: false,
        error: 'userAnswers must be an object'
      });
    }

    const result = evaluateExam(
      preset,
      userAnswers,
      Number.isFinite(Number(timeTakenSeconds))
        ? Math.max(0, Number(timeTakenSeconds))
        : 0
    );

    const submissionId = `sub_${randomUUID()}`;

    connection = await pool.getConnection();

    await connection.beginTransaction();

    const [submission] = await connection.execute(
      `INSERT INTO test_submissions (
        submission_uuid,
        user_id,
        test_id,
        test_title,
        category,
        score,
        max_marks,
        correct_count,
        incorrect_count,
        partially_correct_count,
        unattempted_count,
        accuracy,
        time_taken_seconds
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        submissionId,
        req.userId,
        result.testId,
        result.testTitle || result.testMode,
        result.category,
        result.summary.totalScore,
        result.summary.maxMarks,
        result.summary.correct,
        result.summary.incorrect,
        result.summary.partiallyCorrect,
        result.summary.unattempted,
        result.summary.accuracyPercentage,
        result.timeTakenSeconds
      ]
    );

    const databaseSubmissionId = submission.insertId;

    for (const response of result.detailedResponses) {
      await connection.execute(
              `INSERT INTO submission_answers (
        submission_id,
        question_id,
        subject,
        user_answer,
        correct_answer,
        status,
        marks_awarded
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        databaseSubmissionId,
        response.questionId,
        response.subject,
        JSON.stringify(response.userAnswer),
        JSON.stringify(response.correctAnswer),
        response.status,
        response.marksAwarded
      ]
      );
    }

    await connection.commit();

    const submissionResult = {
      submissionId,
      ...result
    };

    return res.status(200).json({
      success: true,
      message: 'Test evaluated and saved successfully',
      data: submissionResult
    });

  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error('Test submission error:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Unable to save test submission'
    });

  } finally {
    if (connection) {
      connection.release();
    }
  }
});

router.get('/history', authenticateToken, async (req, res) => {
  try {
    const [history] = await pool.execute(
      `SELECT
        id,
        submission_uuid AS submissionId,
        test_id AS testId,
        test_title AS testTitle,
        category,
        submitted_at AS submittedAt,
        score,
        max_marks AS maxMarks,
        correct_count AS correctCount,
        incorrect_count AS incorrectCount,
        partially_correct_count AS partiallyCorrectCount,
        unattempted_count AS unattemptedCount,
        accuracy,
        time_taken_seconds AS timeTakenSeconds
      FROM test_submissions
      WHERE user_id = ?
      ORDER BY submitted_at DESC, id DESC`,
      [req.userId]
    );

    return res.json({
      success: true,
      count: history.length,
      history
    });

  } catch (error) {
    console.error('Test history error:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Unable to retrieve test history'
    });
  }
});
router.get('/history/:submissionId', authenticateToken, async (req, res) => {
  try {
    const [submissions] = await pool.execute(
      `SELECT
        id,
        submission_uuid AS submissionId,
        test_id AS testId,
        test_title AS testTitle,
        category,
        submitted_at AS submittedAt,
        score,
        max_marks AS maxMarks,
        correct_count AS correctCount,
        incorrect_count AS incorrectCount,
        partially_correct_count AS partiallyCorrectCount,
        unattempted_count AS unattemptedCount,
        accuracy,
        time_taken_seconds AS timeTakenSeconds
      FROM test_submissions
      WHERE submission_uuid = ? AND user_id = ?
      LIMIT 1`,
      [req.params.submissionId, req.userId]
    );

    if (submissions.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Test attempt not found'
      });
    }

    const submission = submissions[0];

    const [answers] = await pool.execute(
      `SELECT
        question_id AS questionId,
        subject,
        user_answer AS userAnswer,
        correct_answer AS correctAnswer,
        status,
        marks_awarded AS marksAwarded
      FROM submission_answers
      WHERE submission_id = ?
      ORDER BY id ASC`,
      [submission.id]
    );

    return res.json({
      success: true,
      submission,
      answers
    });

  } catch (error) {
    console.error('Attempt details error:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Unable to retrieve attempt details'
    });
  }
});
export default router;

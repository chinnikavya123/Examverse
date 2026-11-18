
import 'dotenv/config';
import pool from './db.js';

try {
  const [rows] = await pool.query(
    'SELECT DATABASE() AS databaseName, NOW() AS currentTime'
  );

  console.log('MySQL connection successful!');
  console.log('Database:', rows[0].databaseName);
  console.log('Server time:', rows[0].currentTime);
} catch (error) {
  console.error('MySQL connection failed:', error.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}

# 🚀 ExamVerse – Smart Exam Preparation & Assessment Platform

<p align="center">
  <strong>Learn. Practice. Assess. Improve. Succeed.</strong>
</p>

<p align="center">
  An all-in-one exam preparation platform designed to make competitive exam preparation smarter, more structured, and more effective.
</p>
---

## 🌟 Overview

**ExamVerse** is a comprehensive web-based exam preparation and assessment platform built to help students prepare for competitive examinations through organized practice, previous year questions, realistic mock assessments, and performance tracking.

The platform brings essential preparation resources together in one place, allowing students to practice subject-wise questions, explore previous examination papers, attempt mock tests, review their performance, and monitor their learning progress.

Instead of switching between multiple resources, students can use ExamVerse as a centralized environment for their preparation journey.

🎯 **Currently focused on:**
- JEE Main
- JEE Advanced
- AP EAPCET

## ✨ Key Features

### 📚 1. Practice Hub
- Access organized practice questions.
- Practice questions across different subjects.
- Strengthen conceptual understanding through regular practice.
- Explore question collections through an organized interface.

### 📖 2. Previous Year Questions (PYQs)
- Access previous year examination questions.
- Practice questions from different examination years.
- Prepare with authentic examination-oriented question collections.
- Improve familiarity with competitive examination patterns.

### 📝 3. Mock Examination System
- Attempt structured mock examinations.
- Experience an examination-oriented testing environment.
- Answer questions and submit assessments.
- Evaluate performance after completing tests.

### 📊 4. Performance Analytics
- Monitor examination performance.
- Review assessment statistics.
- Track progress through performance insights.
- Analyze previous test results.

### 📈 5. Test History
- Maintain a record of completed assessments.
- Access previous test submissions.
- Review past performance and identify areas for improvement.

### 🔐 6. User Authentication
- User registration and login.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- Protected user-specific functionality.

### 🎨 7. Interactive User Interface
- Modern React-based interface.
- Responsive layouts and organized navigation.
- Interactive components and visual feedback.
- Smooth animations and transitions.
- Mathematical formula rendering using KaTeX.
- Data visualization using Recharts.

### 🧮 8. Formula and Learning Resources
- Dedicated formula reference sections.
- Subject-oriented mathematical and scientific resources.
- Organized learning materials for exam preparation.

---

## 🛠️ Technology Stack

ExamVerse uses a modern full-stack architecture with a React frontend, Node.js backend, and MySQL database.

| Category | Technologies |
|---|---|
| Frontend | React.js 18 |
| Build Tool | Vite |
| Styling | CSS, Tailwind CSS |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MySQL |
| Database Driver | mysql2 |
| Authentication | JWT, bcryptjs |
| Charts & Analytics | Recharts |
| Animations | Framer Motion |
| Icons | Lucide React |
| Mathematical Rendering | KaTeX |
| API Communication | Fetch API |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |
| Database Hosting | Aiven MySQL |
| Version Control | Git & GitHub |

---

## 🏗️ System Architecture

ExamVerse follows a client-server architecture in which the React frontend communicates with the Express backend through REST APIs. The backend handles authentication, assessment operations, question retrieval, and database interactions.

```text
                 👨‍🎓 STUDENT
                      |
                      |
                      v
          +------------------------+
          |      EXAMVERSE         |
          |     React + Vite       |
          |       Frontend         |
          +------------------------+
                      |
                      |
                 REST API
                      |
                      v
          +------------------------+
          |      NODE.JS           |
          |      EXPRESS           |
          |       Backend          |
          +------------------------+
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
      Authentication Questions  Assessment
          |           |           |
          +-----------+-----------+
                      |
                      v
          +------------------------+
          |       MySQL            |
          |      Database          |
          |                        |
          | Users                  |
          | Test Submissions       |
          | Submission Answers     |
          +------------------------+
                      |
                      v
          +------------------------+
          |    Performance         |
          |     Analytics          |
          +------------------------+
```

### Deployment Architecture

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend API | Render |
| Production Database | Aiven MySQL |
| Source Code | GitHub |

---

## 📂 Project Structure

```text
Exam_verse/
│
├── public/
│   ├── diagrams/
│   └── favicon.svg
│
├── server/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── questions.js
│   │   ├── tests.js
│   │   └── analytics.js
│   │
│   ├── services/
│   │   └── assessment.js
│   │
│   ├── db.js
│   ├── index.js
│   └── check-db.js
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Practice/
│   │   ├── PYQ/
│   │   ├── FormulaBook/
│   │   ├── EAPCET/
│   │   └── ...
│   │
│   ├── data/
│   │   ├── mockQuestions.json
│   │   ├── practiceQuestionsData.json
│   │   ├── pyqData.json
│   │   ├── jeeAdvancedData.json
│   │   ├── eapcetData.json
│   │   └── ...
│   │
│   ├── utils/
│   ├── App.jsx
│   ├── config.js
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

*Note: The structure above highlights the main application directories and files. Additional components and data resources are included in the repository.*

---

## ⚙️ Getting Started

Follow these instructions to run ExamVerse locally.

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- A code editor such as Visual Studio Code.

### 2. Clone the Repository

```bash
git clone https://github.com/chinnikavya123/Exam_verse.git
```

Navigate to the project directory:

```bash
cd Exam_verse
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Add the following configuration:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=exam_verse

# Authentication Configuration
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=7d
```

For a local MySQL installation, configure the database credentials according to your environment.

**Important:** Never upload `.env` files, passwords, JWT secrets, or database credentials to GitHub.

### 5. Configure the Frontend API URL

The frontend API configuration is available in:

`src/config.js`

```javascript
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

For local development, the frontend uses the local backend by default.

For production, configure `VITE_API_URL` through the frontend hosting provider.

### 6. Start the Backend

Open a terminal and execute:

```bash
npm run server
```

The backend starts on:

```text
http://localhost:5000
```

Check the API health endpoint:

```text
http://localhost:5000/api/health
```

### 7. Start the Frontend

Open another terminal in the project directory:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to access ExamVerse.

---

## 🔌 Backend API Endpoints

The Express backend exposes REST APIs for authentication, questions, assessments, and analytics.

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Backend health and service information |

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/auth/profile` | Retrieve authenticated user profile |

### Practice and Questions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/practice/stats` | Retrieve practice statistics |
| GET | `/api/practice/:subject` | Retrieve subject-specific practice questions |
| GET | `/api/mocks` | Retrieve available mock assessments |
| GET | `/api/mocks/:id` | Retrieve a specific mock assessment |

### Tests and Assessments

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tests/submit` | Submit an assessment |
| GET | `/api/tests/history` | Retrieve test history |

### Analytics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/analytics/summary` | Retrieve performance summary |
| GET | `/api/analytics/leaderboard` | Retrieve leaderboard information |

---

## 🔒 Security Considerations

Security is an important part of the ExamVerse architecture.

The application incorporates:

- Password hashing using bcryptjs.
- JWT-based authentication.
- Environment variables for sensitive configuration.
- Database connectivity through a MySQL connection pool.
- SSL certificate verification for the production Aiven database connection.
- Separation of frontend and backend services.
- Git ignore rules to prevent sensitive files and local configuration from being committed.

**Security best practice:** Use strong production secrets, keep database credentials private, and never disable SSL certificate verification in production.

---

## ☁️ Deployment

ExamVerse is deployed using separate hosting services for its frontend, backend, and database.

### Frontend – Vercel

1. Import the GitHub repository into Vercel.
2. Select Vite as the framework preset.
3. Configure the build command:

```bash
npm run build
```

4. Set the output directory to:

```text
dist
```

5. Configure the production environment variable:

```env
VITE_API_URL=https://your-render-backend-url
```

6. Deploy the application.

### Backend – Render

Configure the Render Web Service with:

| Setting | Value |
|---|---|
| Runtime | Node.js |
| Branch | `main` |
| Root Directory | Project root |
| Build Command | `npm install --omit=dev` |
| Start Command | `npm run server` |

Configure the production environment variables:

```env
DB_HOST=your_aiven_host
DB_PORT=your_aiven_port
DB_USER=your_aiven_username
DB_PASSWORD=your_aiven_password
DB_NAME=exam_verse
DB_SSL_CA=your_aiven_ca_certificate
JWT_SECRET=your_production_jwt_secret
JWT_EXPIRES_IN=7d
NODE_ENV=production
```

Never commit these values to the repository.

### Database – Aiven MySQL

The production database is hosted on Aiven MySQL.

The backend connects to the database through the MySQL driver with SSL certificate verification enabled.

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start the Express backend |
| `npm run build` | Generate the production frontend build |
| `npm run preview` | Preview the production frontend build |
| `npm run lint` | Run ESLint checks |

---

## 🎯 Project Objectives

ExamVerse was developed with the following objectives:

- Make competitive examination preparation more accessible.
- Provide a centralized platform for practice and assessment.
- Organize previous year questions and learning resources.
- Help students evaluate their examination readiness.
- Encourage consistent practice through performance tracking.
- Provide a scalable full-stack web application architecture.

---

## 🚀 Future Enhancements

Potential improvements planned for future versions include:

- 🤖 AI-powered personalized study recommendations.
- 🧠 Intelligent question recommendations based on student performance.
- 📅 Personalized study plans and preparation schedules.
- 📊 More detailed topic-wise performance analysis.
- ⏱️ Advanced examination simulations and time-management insights.
- 🏅 Achievement systems, badges, and learning milestones.
- 📱 Enhanced mobile experience.
- 📈 More comprehensive student progress reports.

---

## 💡 Why ExamVerse?

ExamVerse is more than a collection of practice questions. It combines learning resources, examination practice, assessment management, and performance insights into one integrated platform.

By bringing these capabilities together, it aims to help students prepare with greater structure, understand their progress, identify improvement areas, and approach competitive examinations with confidence.

---

## 👩‍💻 Developer

**Developed with ❤️ and dedication.**

**Project:** ExamVerse – Smart Exam Preparation & Assessment Platform

**GitHub:** [@chinnikavya123](https://github.com/chinnikavya123)

**Repository:** [Examverse](https://github.com/chinnikavya123/Examverse)

---

<p align="center">
  ⭐ If you find ExamVerse useful, consider giving this repository a star!
</p>

<p align="center">
  <strong>🚀 Learn. Practice. Improve. Succeed with ExamVerse!</strong>
</p>

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/chinnikavya123"><strong>Chinni Kavya Sri</strong></a>
  <br/>
  👩‍💻 Owner & Developer of ExamVerse
</p>

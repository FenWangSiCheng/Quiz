# SAP Learning Quiz Web Application

A comprehensive web application for testing SAP knowledge through interactive quizzes. Built with Vue.js 3, this platform helps users validate their understanding of SAP Build technologies including Process Automation, Work Zone, Build Apps, and certification preparation.

## Features

- **Simulation Test Mode**: Select one or multiple question banks for targeted practice
- **Multiple Question Banks**: 
  - SAP Build Process Automation
  - Designing SAP Build Work Zone
  - Developing Apps with SAP Build Apps
  - SAP C_LCNC_2406 Certification
- **Interactive Quiz System**: Multiple question types including true/false, single choice, and multiple choice
- **Progress Tracking**: Automatic saving of quiz progress with localStorage persistence
- **Randomized Questions**: Optional question shuffling for varied quiz experiences
- **Detailed Explanations**: Comprehensive explanations for learning questions (excludes certification questions)
- **Responsive Design**: Full-screen layout optimized for web browsers
- **Real-time Scoring**: Instant feedback and comprehensive result analysis

## How to Use

1. **Access the Application**: Navigate to the homepage where you'll see the "模拟测试" (Simulation Test) option
2. **Select Question Banks**: Click "选择题库" to choose one or multiple question banks for your test session
3. **Start Quiz**: Select your desired question banks and click "开始测试" to begin
4. **Answer Questions**: Navigate through questions using the interface controls
5. **View Results**: After completing the quiz, review your performance and view detailed explanations for incorrect answers
6. **Return Home**: Use the "返回首页" button to start a new quiz session

## Question Bank Details

- **Learning Questions** (Process Automation, Work Zone, Build Apps): Include detailed explanations from official SAP learning materials
- **Certification Questions** (C_LCNC_2406): Exam-style questions without explanations to simulate real certification conditions

## Technical Architecture

- **Frontend Framework**: Vue.js 3 with Composition API and TypeScript
- **UI Library**: Element Plus for consistent component design
- **State Management**: Pinia for quiz progress and data management
- **Routing**: Vue Router for navigation between views
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Scoped CSS with responsive design principles
- **Data Storage**: Browser localStorage for session persistence

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   └── QuestionBankSelector.vue
├── data/               # Question banks and data management
│   ├── questionBanks/  # Individual question bank modules
│   ├── questions.ts    # Main questions export and utilities
│   └── questionBankManager.ts  # Bank selection logic
├── stores/             # Pinia state management
│   └── quiz.ts         # Quiz progress and state
└── views/              # Main application views
    ├── HomeView.vue    # Landing page with test selection
    ├── QuizView.vue    # Interactive quiz interface
    └── ResultView.vue  # Results and performance analysis
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Development Setup

Install dependencies:
```sh
npm install
```

### Run Web Application in Development Mode

Start the development server with hot-reload:
```sh
npm run dev
```

The web application will be available at `http://localhost:5173`

### Build Web Application for Production

Type-check, compile and minify for web deployment:
```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

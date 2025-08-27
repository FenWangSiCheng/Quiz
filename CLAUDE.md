# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains two main components:
1. **Study Notes** (`study-notes/`): SAP learning materials organized by course modules
2. **Quiz Application** (`sap-quiz-app/`): Vue.js 3 application for SAP knowledge testing

## Development Commands

All development commands should be run from the `sap-quiz-app/` directory:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Lint and fix code
npm run lint

# Preview production build
npm preview
```

## Architecture Overview

### Quiz Application Architecture
- **Frontend**: Vue.js 3 with TypeScript and Composition API
- **UI Framework**: Element Plus components
- **State Management**: Pinia stores for quiz state and progress
- **Routing**: Vue Router for navigation between quiz views
- **Build Tool**: Vite with Vue plugin and dev tools

### Key Components
- **Quiz Store** (`src/stores/quiz.ts`): Central state management for quiz functionality
  - Handles question progression, answers, scoring, and local storage persistence
  - Supports both sequential and randomized question ordering
  - Tracks user progress with localStorage for session recovery
- **Question Data** (`src/data/questions.ts`): Static question bank with TypeScript interfaces
  - Contains SAP Build Process Automation questions in multiple formats
  - Supports true/false, single choice, and multiple choice questions
  - Each question includes difficulty level and detailed explanations

### Views Structure
- `HomeView`: Quiz start and configuration
- `QuizView`: Main quiz interface with question display
- `ResultView`: Score summary and quiz completion
- `AboutView`: Project information

## Key Technical Details

### Question Types
The quiz supports three question types defined in the `Question` interface:
- `true_false`: Binary true/false questions
- `single_choice`: Single correct answer from multiple options
- `multiple_choice`: Multiple correct answers from options list

### State Persistence
Quiz progress is automatically saved to localStorage with the key `sap-quiz-progress`, allowing users to resume incomplete quizzes across browser sessions.

### Node.js Version
Requires Node.js version `^20.19.0 || >=22.12.0` as specified in package.json engines field.

## Study Notes Organization

Study notes are organized by SAP course modules:
- `SAP Build Process Automation/`: 6 units of process automation content
- `Designing SAP Build Work Zone/`: Work zone design concepts

## File Path Conventions

- Quiz app uses `@/` alias for `src/` directory (configured in vite.config.ts)
- TypeScript configuration supports Node.js 22 with strict type checking
- ESLint configured with Vue.js and TypeScript rules for code quality
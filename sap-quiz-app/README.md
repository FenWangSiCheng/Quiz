# SAP Learning Quiz Web Application

A comprehensive web application for testing SAP knowledge through interactive quizzes. Built with Vue.js 3, this platform helps users validate their understanding of SAP Build Process Automation and SAP Build Work Zone concepts.

## Features

- **Interactive Quiz System**: Multiple question types including true/false, single choice, and multiple choice
- **Progress Tracking**: Automatic saving of quiz progress with localStorage persistence
- **Randomized Questions**: Optional question shuffling for varied quiz experiences
- **Detailed Explanations**: Comprehensive explanations for each answer to enhance learning
- **Responsive Design**: Web-optimized interface that works across devices
- **Real-time Scoring**: Instant feedback and score calculation

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

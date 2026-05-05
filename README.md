# Week 07: Persistent To-Do List

## Author
- **Name:** xmacua
- **GitHub:** [@xmacua](https://github.com/xmacua)
- **Date:** April 21, 2026

## Project Description
A refactored To-Do List app with localStorage persistence, modular JavaScript, and a clean code structure. This project demonstrates advanced JavaScript concepts like state management, browser storage, and clean code practices, preparing for React development.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6 Modules)
- localStorage API
- Git
- GitHub
- ESLint
- Prettier
- npm

## Features
- Persist todos across page refreshes
- Save completed state and filter preference
- Delete tasks and clear completed items
- Light/Dark theme toggle with persistence
- Organized into modular JavaScript files (`js/app.js`, `js/state.js`, `js/storage.js`, `js/ui.js`, `js/utils.js`)
- Responsive design with accessibility features
- Clean code with ESLint and Prettier integration

## How to Run
1. Clone this repository
2. Open `index.html` in your browser
   OR
   Run `npm install` then use a local server (e.g., `npx serve` or VS Code Live Server extension)

## Lessons Learned
- Mastered localStorage for browser persistence, including JSON serialization and error handling.
- Implemented centralized state management with clean update functions and separation of concerns.
- Organized code into logical modules for better maintainability and readability.
- Applied clean code practices like meaningful names, single-responsibility functions, and avoiding magic numbers.
- Set up ESLint and Prettier for consistent code quality and formatting.
- Gained experience with debugging using console methods and DevTools breakpoints.

## Challenges Faced
- Setting up git and pushing to GitHub required configuring user identity and handling remote URLs.
- Ensuring all UI events triggered re-renders after state changes, which was resolved by calling render functions in event handlers.
- Managing theme persistence across sessions, solved by integrating theme state with localStorage.
- Organizing modular code without circular dependencies, achieved through careful import/export structure.

## Screenshots (optional)
<img width="735" height="570" alt="image" src="https://github.com/user-attachments/assets/5a26f6b1-8a2a-44a7-8643-88ae78344a7f" />


## Live Demo (if deployed)
<!-- [View Live Demo](https://github.com/xmacua/iyf-s10-week-07-xmacua.git) -->

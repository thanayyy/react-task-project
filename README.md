# React Task Project

A simple and intuitive task management application built with React and Vite. This app allows users to add, edit, delete, and organize tasks with different statuses, designed to help individuals and teams track and manage their to-do lists effectively.

## Features

- **Task Management**: Add, edit, and delete tasks with titles and statuses (To Do, In Progress, Done).
- **Status Tracking**: Organize tasks by status for better workflow management.
- **Local Storage**: Persist tasks in the browser's local storage for offline access.
- **Theme Switching**: Toggle between light and dark themes for better user experience.
- **Responsive Design**: Built with CSS for mobile-first, adaptive layouts.
- **Fast Performance**: Powered by Vite for quick development and optimized builds.

## Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Unique IDs**: UUID 11.1.0
- **Linting**: ESLint with React-specific rules
- **TypeScript Support**: Available via dev dependencies (optional)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-task-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (default Vite port).

## Usage

- Add new tasks using the form, specifying title and status.
- Edit existing tasks by clicking on them and updating details.
- Delete tasks as needed.
- Switch themes via the header toggle.
- Customize components in the `src/components/` directory to add features or integrate APIs.
- Build for production:
  ```bash
  npm run build
  ```
  Preview the build:
  ```bash
  npm run preview
  ```

## Scripts

- `npm run dev`: Start the development server with hot module replacement.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.

## Project Structure

```
react-task-project/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and media
│   ├── components/         # Reusable React components
│   │   ├── AddForm.jsx
│   │   ├── Header.jsx
│   │   └── Item.jsx
│   ├── css/                # Stylesheets
│   │   ├── AddForm.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── index.css
│   │   └── Item.css
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure code follows the ESLint rules by running `npm run lint` before committing.

## License

This project is private and not licensed for public use.

# SSC CGL Master Preparation Platform

This repository contains a **Next.js** application that implements the core features described in the SSC CGL preparation blueprint.  The app provides two pages:

1. **Study Hub (`/study`)** – a digital handbook organized by Tier, subject and topic.  It features sections such as overview, core concepts, formula sheets, shortcuts, solved examples, revision capsules and an editable notes section.  Notes and progress are stored in the browser using localStorage via a custom `useLocalStorage` hook.
2. **Mock‑Test Engine (`/mock`)** – allows users to select tier, subject and topic to attempt timed quizzes.  A custom `useInterval` hook powers the countdown timer.  The engine records responses, calculates score and displays a detailed review with explanations.

This code serves as a **skeleton** for further development.  Sample topics and questions are provided in `src/data/topics.ts` and `src/data/questions.ts`.  To extend the platform:

- Populate the data files with full SSC CGL syllabus and past‑year questions.
- Connect a database (e.g., PostgreSQL or Firebase) to persist user progress and analytics.
- Enhance the analytics page with charts summarising accuracy and speed by topic.

## Installation

```bash
# install dependencies
npm install

# run in development mode
npm run dev

# build for production
npm run build
npm start
```

## License

This project is for educational purposes.  Feel free to fork and adapt for personal use.
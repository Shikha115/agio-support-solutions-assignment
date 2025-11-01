# Agio Support Solutions — Assignment

https://www.agiosupport.com/



## Summary

React application that fetches and displays users from the JSONPlaceholder API in a responsive table/card layout. Supports real-time search, dynamic city filter, user detail modal, and favorites stored in localStorage.

Live demo: https://agio-support-solutions-assignment.vercel.app/

PDF of the assignment is included in the repository as `Frontend_Developer_Test.pdf`.

## Features

- Fetch and display users from JSONPlaceholder (https://jsonplaceholder.typicode.com/users).
- Responsive UI: table layout on wide screens, card layout on smaller screens.
- Real-time search by name or email.
- Dynamic city filter (dropdown populated from fetched users).
- Click a user to open a modal with detailed info (email, phone, address, company, etc.).
- Bonus: mark/unmark users as favorites; favorites persisted in localStorage.

## Tech stack

- React (create-react-app)
- Axios (data fetching)
- react-query (optional caching)
- Zustand (state)
- Tailwind CSS (styling)
- Vercel (deployment)

## Getting started (local)

1. Clone the repo:
   ```bash
   git clone https://github.com/Shikha115/agio-support-solutions-assignment.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Notes

- API: The app uses JSONPlaceholder for user data (no API key required).
- Favorites are saved in browser localStorage; clearing storage will remove them.
- The included `Frontend_Developer_Test.pdf` contains the original assignment brief.

## Deployment

- Deployed to Vercel: https://agio-support-solutions-assignment.vercel.app/

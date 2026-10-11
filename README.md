# VIT Vellore Campus Assistance Hub

A ReactJS Single Page Application (SPA) built for BCSE203E Web Programming,
Assignment 7. It lets students browse VIT Vellore's campus services
(Academic Support, Library, Transportation, Hostel, Health & Wellness,
Technical Support) and view details for each one without leaving the page.

## Tech / Concepts used
- ReactJS (Vite setup)
- JSX
- Class component (`App.jsx`) with a **constructor** and the
  **componentDidMount** life-cycle method
- Reusable functional components (`ServiceCard`, `ServiceList`,
  `ServiceDetail`, `Navbar`, `Footer`)
- Props + state for dynamic, single-page interaction

## Project structure
```
campus-hub/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ServiceCard.jsx   (reusable card component)
│   │   ├── ServiceList.jsx   (renders ServiceCard for each service)
│   │   ├── ServiceDetail.jsx (shows the selected service's details)
│   │   └── Footer.jsx
│   ├── data/
│   │   └── services.js       (mock service data)
│   ├── App.jsx                (class component: constructor + lifecycle)
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Running locally
```
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## HOTS / Design Analysis (5 → 50 services)

The application is built so that adding a service never requires writing
new component code - it only requires adding one more object to
`src/data/services.js`. `ServiceList` loops over that array and renders a
`ServiceCard` for each entry, and `ServiceDetail` renders whatever service
object is currently in state.

If the hub grew from 5 to 50 services, the `ServiceCard` component stays
exactly the same: it stays a single, reusable definition instead of being
duplicated 50 times. This keeps duplication low, keeps the UI consistent,
and means a design or bug fix only has to be made once, in one file,
to apply everywhere.

The most important design decision was keeping the service data
(`services.js`) completely separate from the presentation components. This
separation of data and UI is what lets the app scale to any number of
services without the component structure changing at all - only the data
file grows.

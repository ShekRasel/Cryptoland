# Cryptoland

A responsive React frontend with a blue-and-white visual system, Manrope headings, and DM Sans body text.

## Run locally

```sh
npm install
npm run dev
```

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

```sh
npm run build
npm run preview
npm run lint
```

## Project structure

- `src/index.css`: design tokens, component styles, responsive layouts, and reduced-motion preferences.
- `src/components/Design.jsx`: shared page headings, feature cards, getting-started steps, FAQs, and calls to action.
- `src/components/PortfolioPreview.jsx`: illustrative portfolio with selectable chart periods.
- `src/components/AccountForm.jsx`: shared sign-in, sign-up, and password-reset UI.
- `src/data/articles.js`: editable learning-hub content.
- `src/pages`: homepage, About, Contact, learning hub, article, account, and status pages.
- `src/routes/common.route.jsx`: routes, including a catch-all 404. Original route URLs are preserved.

## Frontend behavior

The mobile menu, article search and category filters, FAQ disclosures, chart periods, password visibility, and form validation work locally. Forms do not create accounts, send messages, or store credentials. Portfolio values are sample data; no exchange or wallet is connected.

Fonts load from Google Fonts with local sans-serif fallbacks. Images are served from `public/images`. Production hosting should rewrite application routes to `index.html` for React Router deep links.

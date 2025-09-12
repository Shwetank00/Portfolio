# Shwetank Portfolio (React + Vite + Tailwind)

A clean, responsive portfolio split into modular React files with dark mode, projects, skills, and a contact form.

## Prerequisites
- Node.js 18+ and npm

## Setup
```bash
# install deps
npm install

# run dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Configure Contact Form
- Create a Formspree form and copy your endpoint (looks like `https://formspree.io/f/xxxxxxx`).
- In `src/sections/Contact.jsx`, replace `your_form_id` with your actual form id.

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → New Project → Import.
3. Framework auto-detects **Vite**.
4. Build command: `vite build` (default)
5. Output directory: `dist`
6. Deploy.

**CLI alternative**
```bash
npm i -g vercel
vercel
vercel --prod
```

## Deploy (Netlify)
```bash
npm run build
npm i -g netlify-cli
netlify login
netlify deploy --dir=dist        # draft URL
netlify deploy --prod --dir=dist # production
```

## Customize
- Edit `src/config.js` for your name, socials, projects, and skills.
- Update `<title>` and meta in `index.html` for SEO.
- Dark mode toggle is persisted via `localStorage`.

# Vun Vicheka — Portfolio Cover (React)

The cover/hero section of your portfolio site, built as a React component.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc).

## Structure

```
src/
  App.jsx              # mounts the page, add more sections here
  components/
    Hero.jsx            # the cover section
    Hero.css            # its styles
  assets/
    photo.jpg            # your portrait
```

To add more sections (About, Work, Contact), create new files in `src/components/` and render them under `<Hero />` inside `App.jsx`.

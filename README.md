# Sid Torres — Selected Work

A minimal, modern portfolio site for quick-view work samples.

## Quick Start (Development)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended — Easiest)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Vercel auto-detects Vite and deploys
6. Connect your custom domain in Vercel dashboard

### Option 2: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Connect custom domain

### Option 3: Manual Upload

1. Run `npm run build`
2. Upload the entire `dist/` folder to any static hosting
3. Works with: GitHub Pages, Cloudflare Pages, any web host

## Adding Your Images

Replace placeholder references in `/src/data/projects.js` with actual images:

1. Export images from Figma at 2x resolution
2. Place them in `/public/images/`
3. Update the `thumbnail` and `carouselImages` paths in `projects.js`

### Recommended Image Specs

| Type | Size | Format |
|------|------|--------|
| Thumbnails | 800×500px | PNG or WebP |
| Carousel | 1600×1000px | PNG or WebP |
| Video thumbnails | 1920×1080px | PNG |

## Adding Your Videos

### Option A: Embed (Recommended)

1. Upload video to Loom, Vimeo, or YouTube
2. Replace the `VideoPlaceholder` component in `ProjectPage.jsx` with:

```jsx
<iframe 
  src="YOUR_EMBED_URL"
  width="100%"
  style={{ aspectRatio: '16/9', border: 'none', borderRadius: '16px' }}
  allowFullScreen
/>
```

### Option B: Self-hosted

1. Place MP4 in `/public/videos/`
2. Use HTML5 video tag

## File Structure

```
selected-work-site/
├── public/
│   └── images/         ← Put your images here
├── src/
│   ├── data/
│   │   └── projects.js ← Project content
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors
Edit CSS variables in `src/styles.css`:

```css
:root {
  --bg-primary: #050505;
  --accent: #3b82f6;
  /* ... */
}
```

### Fonts
Current: DM Sans + Space Mono
Change in `index.html` and `styles.css`

### Content
All project data in `src/data/projects.js`

---

Built with Vite + React

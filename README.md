# Rifqi Rizqullah — Personal Portfolio

A modern, animated personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features smooth scroll animations powered by **GSAP ScrollTrigger** and a warm, coral-accented design system.

**Live Website**: [https://hajcmqybivza4.kimi.page](https://hajcmqybivza4.kimi.page)

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool & Dev Server |
| Tailwind CSS | Utility-First Styling |
| GSAP + ScrollTrigger | Scroll Animations |
| Lucide React | Icon Library |
| Formspree | Contact Form Backend |

---

## Project Structure

```
├── public/
│   ├── profile.png          # Your profile photo
│   └── favicon.svg          # Browser tab icon
├── src/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section (name, photo, stats)
│   │   ├── About.tsx        # About Me (two-column layout)
│   │   ├── Projects.tsx     # Featured Projects (2-col grid)
│   │   ├── Experience.tsx   # Work Experience (timeline)
│   │   ├── TechArsenal.tsx  # Skills with animated progress bars
│   │   ├── Contact.tsx      # Contact form + social links
│   │   ├── Navigation.tsx   # Sticky header navigation
│   │   └── Footer.tsx       # Footer with social icons
│   ├── App.tsx              # Main layout & smooth scroll
│   ├── index.css            # Global styles & CSS variables
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

---

## Local Development

### Prerequisites
- **Node.js** 18+ installed on your machine
- **npm** or **yarn** package manager

### Step 1: Clone & Install

```bash
# Navigate to the project folder
cd app

# Install dependencies
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Step 3: Build for Production

```bash
npm run build
```

Production files will be generated in the `dist/` folder.

---

## Deploy to Public

Your portfolio is deployed as a **static website**. The production build is in the `dist/` folder.

### Option A: Deploy via Kimi (Recommended — Already Done!)

Your website is already live at:
**[https://hajcmqybivza4.kimi.page](https://hajcmqybivza4.kimi.page)**

To update after making changes:
1. Edit the source files
2. Run `npm run build` to create a fresh `dist/` folder
3. Ask Kimi to deploy the updated `dist/` folder

### Option B: Deploy to Vercel

1. Push your code to a **GitHub** repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your GitHub repo
4. Vercel will auto-detect Vite settings and deploy
5. Your website will be live at `https://your-project.vercel.app`

### Option C: Deploy to Netlify

1. Push your code to **GitHub**
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy Site"

### Option D: Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

---

## Customization Guide

### Update Your Photo
1. Replace `public/profile.png` with your new photo
2. Keep the same filename or update the `src` path in `src/sections/Hero.tsx`

### Update Contact Info
Edit `src/sections/Contact.tsx`:
- Email address
- Instagram link
- GitHub link
- LinkedIn link

### Update Experience Timeline
Edit `src/sections/Experience.tsx`:
- Add/remove experience entries
- Update bullet points
- Update date ranges

### Update Projects
Edit `src/sections/Projects.tsx`:
- Add/remove project cards
- Update descriptions and tech tags
- Update project links

### Update Skills
Edit `src/sections/TechArsenal.tsx`:
- Modify skill names and percentages
- Update tooltip descriptions

### Change Color Theme
Edit `src/index.css` — the CSS custom properties:
```css
--surface: #fbfcf8;      /* Background */
--surface-dark: #1d1d1f; /* Footer */
--ink: #1d1d1f;          /* Primary text */
--coral: #e07a5f;        /* Accent color */
--coral-light: #f4d4c9;  /* Light accent */
```

---

## Contact Form Setup

Your contact form uses **Formspree** (free tier).

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form named "Contact Form"
3. Copy your form endpoint (e.g., `https://formspree.io/f/mqenjnkr`)
4. Replace the endpoint in `src/sections/Contact.tsx`:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
5. Rebuild and redeploy

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Make sure Node.js is version 18+ (`node -v`) |
| Build fails | Check for TypeScript errors: `npx tsc --noEmit` |
| Styles not loading | Ensure Tailwind directives are in `index.css` |
| Images not showing | Place images in `public/` folder, reference with `/filename` |

---

## License

This project is your personal portfolio. Feel free to customize and use it as you wish.

---

**Built with care by Rifqi Rizqullah** | Web Developer & Robotics Enthusiast

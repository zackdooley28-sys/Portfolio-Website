# Zach's Portfolio

A personal portfolio website built with Next.js, showcasing experience as a Lead Software Engineer specializing in AI, full-stack development, and backend engineering.

## Tech Stack

- **Framework:** Next.js 16 (with Turbopack)
- **UI:** React 19
- **Styling:** Tailwind CSS
- **Fonts:** Outfit, Ovo (Google Fonts)
- **Smooth Scroll:** Lenis

## Features

- **Responsive design** — Mobile-friendly layout across all screen sizes
- **Dark/Light mode** — Theme toggle with system preference detection
- **Smooth scrolling** — Lenis-powered scroll experience
- **Sections:**
  - **Header** — Hero with profile, intro, and CTA buttons
  - **About** — Bio, skills, education, and tools (VS Code, Firebase, MongoDB, Figma, Git)
  - **Services** — Backend & API, AI & LLM, Full-Stack, Design & Mentorship
  - **Work** — Project portfolio with links (Dost, Flexion Inc, Forme Life, Vention)
  - **Contact** — Contact form
  - **Footer** — Links and branding

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd "Zack's Portfolio"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Or use the provided batch script on Windows:

   ```bash
   start-dev.bat
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── layout.js      # Root layout & metadata
│   ├── page.js        # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── Header.jsx     # Hero section
│   ├── Navbar.jsx     # Navigation & theme toggle
│   ├── About.jsx      # About section
│   ├── Services.jsx   # Services grid
│   ├── Work.jsx       # Project showcase
│   ├── Contact.jsx    # Contact form
│   ├── Footer.jsx     # Footer
│   └── LenisScroll.jsx # Smooth scroll wrapper
└── public/assets/     # Images and icons
```

## License

MIT

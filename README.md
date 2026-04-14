# CodingCup Labs - Neobrutalism Landing Page

Welcome to the **CodingCup Labs** landing page! This project is a neat, minimalist website built with a striking **Neobrutalism** design theme. It features bold typography, high-contrast colors, stark borders, and solid hard shadows to create an unapologetically modern and memorable digital experience.

## 🏗️ Code Structure

The project is built using modern web development tools:
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: `lucide-react`

### Directory Layout

```text
├── index.html           # The main HTML entry point, includes Google Fonts (Space Grotesk).
├── package.json         # Project dependencies and npm scripts.
├── vite.config.js       # Vite configuration, integrating the @tailwindcss/vite plugin.
├── src/
│   ├── main.jsx         # React application entry point.
│   ├── App.jsx          # Main application component assembling all page sections.
│   ├── index.css        # Global CSS containing Tailwind configuration and custom Neobrutalism utilities.
│   └── components/      # React components making up the landing page:
│       ├── Navbar.jsx   # Sticky top navigation bar.
│       ├── Hero.jsx     # Main header section with bold value proposition and CTA.
│       ├── Services.jsx # Grid of service offerings presented in neobrutalist cards.
│       └── Footer.jsx   # Minimalist footer with company details and contact links.
```

### Styling Approach (Tailwind v4)

We are utilizing **Tailwind CSS v4** natively through Vite. Instead of a traditional `tailwind.config.js`, all design tokens and theme configurations are handled directly inside `src/index.css` using the new `@theme` directive.

Custom Neobrutalism utility classes defined in `index.css`:
- `.brutal-box`: Applies a solid 2px dark border and a hard, stark drop shadow.
- `.brutal-box-hover`: Adds a hover effect that shifts the element and adjusts the shadow for a tactile feel.
- `.brutal-button`: A styled button class combining brutalist borders, shadows, and click animation.

## 🚀 How to Run Locally

To get this project running on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Setup Instructions

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   Open your browser and navigate to `http://localhost:5173/`. The page will automatically reload as you make edits to the code.

## 🌍 How to Make This Live

Deploying this Vite + React application is simple and can be done for free using modern hosting providers like Vercel or Netlify.

### Option 1: Deploying to Vercel (Recommended)
Vercel offers zero-configuration deployment for Vite projects.

1. Create a free account at [Vercel](https://vercel.com/).
2. Install the Vercel CLI (optional but easy): `npm i -g vercel`.
3. In your project directory, simply run:
   ```bash
   vercel
   ```
4. Follow the prompts. Vercel will automatically detect that it's a Vite project, run `npm run build`, and deploy your site to a live URL.

### Option 2: Deploying to Netlify
1. Create a free account at [Netlify](https://netlify.com/).
2. You can use the Netlify CLI or simply drag and drop the built folder.
3. To build the project locally, run:
   ```bash
   npm run build
   ```
   This will generate a `dist` folder.
4. Log into Netlify, go to "Sites", and drag the `dist` folder directly into the deployment area.
   *(Alternatively, you can connect your GitHub repository to Netlify for continuous deployment).*

### Option 3: GitHub Pages
If you prefer to host it on GitHub Pages:
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update your `vite.config.js` to include your repository base path if it's not a user site (e.g., `base: '/repo-name/'`).
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---
*Crafted with bold intent by CodingCup Labs.*

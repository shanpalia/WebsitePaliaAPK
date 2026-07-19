# PaliaAPK HUB

PaliaAPK HUB is a static, front-end website for browsing and downloading APK files. The project is built entirely with **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build tools, no dependencies. It is designed to be lightweight, fast, and ready to deploy directly on **GitHub Pages**.

## 🚀 Project Status

This repository currently contains the **project scaffold only**: folder structure, boilerplate HTML pages, empty stylesheets with section comments, and empty scripts with initialization stubs. Application logic and styling will be implemented in subsequent commits.

## 📁 Project Structure

```
PaliaAPK-HUB/
│
├── index.html          # Home page
├── app.html             # Individual app details page
├── search.html           # Search results page
├── category.html          # Category listing page
├── about.html            # About us page
├── privacy.html           # Privacy policy page
├── terms.html            # Terms of service page
│
├── css/
│   ├── style.css          # Global styles, resets, variables
│   ├── header.css          # Header / navbar styles
│   ├── footer.css          # Footer styles
│   ├── cards.css           # App/category card styles
│   ├── slider.css          # Hero slider / carousel styles
│   ├── responsive.css        # Media queries
│   └── animations.css        # Keyframes and transitions
│
├── js/
│   ├── app.js             # Main app entry point
│   ├── slider.js           # Slider/carousel logic
│   ├── search.js           # Search functionality
│   ├── theme.js            # Light/dark theme toggle
│   └── ui.js              # General UI interactions
│
├── assets/
│   ├── logo/             # Site logo files
│   ├── icons/             # Icon assets (favicon, UI icons)
│   ├── banners/            # Slider/promo banner images
│   ├── screenshots/         # App screenshot images
│   └── images/            # Miscellaneous images
│
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — modular stylesheets, no preprocessors
- **Vanilla JavaScript (ES6+)** — no frameworks or libraries

## 📦 Getting Started

Since this is a static site with no build step, you can run it locally with any static file server, or simply open `index.html` in your browser.

```bash
# Clone the repository
git clone https://github.com/<your-username>/PaliaAPK-HUB.git
cd PaliaAPK-HUB

# Open index.html directly, or serve it locally, e.g.:
npx serve .
```

## 🌐 Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save, and your site will be published at `https://<your-username>.github.io/PaliaAPK-HUB/`.

## 🗺️ Roadmap

- [ ] Build responsive header with search and theme toggle
- [ ] Implement hero slider
- [ ] Build app and category card components
- [ ] Implement client-side search
- [ ] Populate legal pages (Privacy, Terms, About)
- [ ] Polish responsive design and animations

## 📄 License

This project is licensed under the [MIT License](LICENSE).

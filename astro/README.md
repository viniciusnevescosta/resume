# Vinícius Costa - Resume

[![Live Demo](https://img.shields.io/badge/%F0%9F%9A%80-Live%20Demo-2EA44F)](https://viniciusnevescosta.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A minimalist, responsive curriculum vitae with multi-language support and modern web practices.

## Core Features

- 🌓 **Smart Themes**  
  Light/dark mode toggle with CSS custom properties
- 🌍 **Multi-Lingual**  
  English, Portuguese, and Spanish support
- 📱 **Fluid Responsiveness**  
  Optimized for all screen sizes
- 🖨️ **Print-Ready**  
  Clean formatting for physical copies
- ♿ **Accessibility First**  
  Semantic HTML and ARIA labels

## Stack Overview

- **Languages**:  
  ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
  ![Python](https://img.shields.io/badge/-Python-3178C6?logo=python&logoColor=white)

- **Tooling**:  
  ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
  ![Biome](https://img.shields.io/badge/-Biome-000?logo=biome&logoColor=white)

## Quick Start

1. Clone repo:  
```bash
git clone https://github.com/yourusername/viniciusnevescosta.github.io.git
cd viniciusnevescosta.github.io
```

2. Start dev:  
```bash
pnpm dev
```

### Language Management

Edit JSON files in /src/locales/:

```
├─ en.json  # English
├─ es.json  # Spanish
└─ pt.json  # Portuguese
```

### Theme Customization

Modify CSS variables in src/styles/base/_variables.css:
```css
:root {
	--text-color: rgb(16, 15, 15);
	--text2-color: rgb(111, 110, 105);
  /* ... */
}
```

### Deployment Setup

3. Deploy:  
```bash
git checkout main
pnpm github
```

The deployment script will:

1. Generate production build in ./dist
2. Create gh-pages branch with optimized assets
3. Push branch to GitHub

#### ⚠️ Required Configuration:

1. Enable GitHub Pages for gh-pages branch:
2. Settings → Pages → Build and deployment → Branch: gh-pages

## Attributions

🎨 Flexoki Color Scheme
Base theme colors adapted from [Flexoki](https://github.com/kepano/flexoki) by [Steph Ango](https://stephango.com/) (MIT License)

✨ Remix Icons
Interface icons provided by [Remix Icon](https://remixicon.com/) (Apache-2.0 license)

## License

Distributed under MIT License.
See [LICENSE](LICENSE) file for full terms.

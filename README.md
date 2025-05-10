# Vinícius Costa - Resume

[![Live Demo](https://img.shields.io/badge/%F0%9F%9A%80-Live%20Demo-2EA44F)](https://resume.viniciusnevescosta.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

My minimalist, responsive curriculum vitae with multi-language support and modern web practices.

![image](https://github.com/user-attachments/assets/e9ab59ec-ffce-46cd-ae48-9e583e553247)

## Core Features

- **Smart Themes**: Light/dark mode toggle with CSS custom properties
- **Multi-Lingual**: English, Portuguese, and Spanish support
- **Fluid Responsiveness**: Optimized for all screen sizes
- **Print-Ready**: Clean formatting for physical copies
- **Accessibility First**: Semantic HTML and ARIA labels

## Stack Overview

- **Languages**:
  [![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff)](#)
  [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
  [![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)

- **Tooling**:
  [![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff)](#)
  [![prettier](https://img.shields.io/badge/Prettier-ff69b4?logo=prettier&logoColor=fff)](#)
  [![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)](#)

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

### Locale Management

Edit JSON files in /src/locales/:

```
├─ translations_en.json
├─ translations_es.json
└─ translations_pt.json
```

### Theme Customization

Modify CSS variables in src/styles/utils/_variables.css:

```css
:root {
    --text-color: rgb(16, 15, 15);
    --text2-color: rgb(111, 110, 105);
    /* ... */
}
```

## Attributions

- **Tailwind Color Scheme:**
  Base theme colors adapted from [Tailwind](https://tailwindcss.com/docs/colors)

- **Remix Icons:**
  Interface icons provided by [Remix Icon](https://remixicon.com/)

## License

Distributed under MIT License.
See [LICENSE](LICENSE) file for full terms.

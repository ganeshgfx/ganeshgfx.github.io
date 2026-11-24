# GaneshGFX — Portfolio & Web Hub

[![Website](https://img.shields.io/badge/Live-ganeshgfx.github.io-00f0ff?style=flat-square&logo=googlechrome&logoColor=white)](https://ganeshgfx.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-ganeshgfx-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ganeshgfx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ganeshgfx-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ganeshgfx/)
[![Instagram](https://img.shields.io/badge/Instagram-@ganesh.gfx-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/ganesh.gfx/)

Official portfolio and personal web hub of **Ganesh Ghutiya (GaneshGFX)** — Tech Lead at **Gravity Films**, Filmmaker, VFX Artist, and Full-Stack / Systems Developer based in India.

Live site: **[https://ganeshgfx.github.io/](https://ganeshgfx.github.io/)**

---

## Overview

A showcase of multidisciplinary work bridging creative film/VFX production with systems software, AI inference, and web technologies:

- **Cinematic Production & VFX:** Directing, editing, CGI, 3D motion graphics, color grading, sound engineering, and technical pipeline supervision at Gravity Films.
- **Native & Systems Engineering:** Desktop tools in Rust, C++ Win32 shell extensions, NVENC GPU acceleration, and video pipeline automation with FFmpeg and yt-dlp.
- **Local AI & Compute:** Offline computer vision and watermark removal using ONNX Runtime, WebGPU shaders, and WebCodecs.
- **Adobe Workflow Extensibility:** Adobe CEP extension and ExtendScript automation for Premiere Pro and After Effects.

---

## Featured Projects & Directory Structure

| Path | Project | Description | Tech Stack |
| :--- | :--- | :--- | :--- |
| [`/`](https://ganeshgfx.github.io/) | **Main Portfolio** | Responsive single-page portfolio with custom dark UI, interactive sections, and SEO meta tags. | Vanilla HTML5, CSS3, JS |
| [`/gfxtools/`](https://ganeshgfx.github.io/gfxtools/) | **GFX Tools** | Windows utility & Adobe CEP extension for fast media downloads and timeline-optimized GPU re-encoding. | Rust, Win32, NVENC, yt-dlp, CEP |
| [`/local-ai-logo-remover/`](https://ganeshgfx.github.io/local-ai-logo-remover/) | **Local AI Logo Remover** | Offline desktop tool integrated into Windows Explorer context menu for watermark removal via AI. | Electron, React, WebGPU, ONNX, C++ COM |
| [`/quick-comp-settings/`](https://ganeshgfx.github.io/quick-comp-settings/) | **Quick Comp Settings** | After Effects CEP panel for rapid composition attribute adjustments and single-step undo. | Adobe CEP, ExtendScript, JS |
| [`/sorts/`](https://ganeshgfx.github.io/sorts/) | **Algorithm Visualiser** | Interactive visualizer comparing classic sorting algorithms in real time. | JavaScript, HTML5 Canvas |
| [`/game/`](https://ganeshgfx.github.io/game/) | **Browser Game** | Lightweight, zero-dependency 2D arcade browser game. | Vanilla JavaScript, Canvas API |
| [`/tt/`](https://ganeshgfx.github.io/tt/) | **Experiments** | Sandbox environment for experimental interactive web concepts and design prototypes. | HTML, CSS, JavaScript |

---

## Repository Layout

```text
ganeshgfx.github.io/
├── index.html                  # Main portfolio homepage
├── styles.css                  # Core design tokens and styling
├── script.js                   # Interactive navigation, animations & scroll logic
├── 404.html                    # Custom 404 error page
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Web crawler directives
├── site.webmanifest            # PWA manifest
├── assets/                     # Images, profile photos, icons, and OG previews
├── gfxtools/                   # GFX Tools showcase page
├── local-ai-logo-remover/      # Local AI Logo Remover showcase page
├── quick-comp-settings/        # Quick Comp Settings showcase page
├── sorts/                      # Sorting algorithm visualizer
├── game/                       # Vanilla JS browser game
├── tt/                         # Experiments & sandbox
└── sapna/                      # Additional web project assets
```

---

## Tech Stack & Tools

- **Languages:** Rust, C++, JavaScript (ES6+), TypeScript, ExtendScript, HTML5, CSS3
- **Frameworks & Runtimes:** Electron, React, Node.js, WebGPU, ONNX Runtime
- **Media & Pipelines:** FFmpeg, NVIDIA NVENC, yt-dlp, Adobe CEP SDK
- **Creative Suite:** Adobe Premiere Pro, After Effects, Photoshop, Blender, DaVinci Resolve
- **Hosting & Infrastructure:** GitHub Pages, custom domain routing, HTTPS

---

## Local Development

Run locally using any static file server:

### Python
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Node.js (`npx serve`)
```bash
npx serve .
```

### VS Code Live Server
Right-click `index.html` and select **Open with Live Server**.

---

## Connect

- **Website:** [ganeshgfx.github.io](https://ganeshgfx.github.io/)
- **GitHub:** [@ganeshgfx](https://github.com/ganeshgfx)
- **LinkedIn:** [Ganesh Ghutiya](https://www.linkedin.com/in/ganeshgfx/)
- **Instagram:** [@ganesh.gfx](https://www.instagram.com/ganesh.gfx/)
- **Email:** [ganeshghutiya@gmail.com](mailto:ganeshghutiya@gmail.com)

---

## License & Copyright

© 2026 Ganesh Ghutiya (GaneshGFX). All rights reserved.

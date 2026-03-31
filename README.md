# LSBU 360 — Virtual Campus Tour

A web-based VR application built for London South Bank University's open day virtual tour. Prospective students can explore 360° video walkthroughs of four student accommodation sites and the LSBU Library — all from a standard browser, with optional VR headset support via WebXR.

---

## How to Run Locally

Simply open `index.html` in a modern browser.

> **Note:** Due to browser CORS restrictions, videos may not load when opened directly from the file system (`file://`). Use a local HTTP server instead:
>
> ```bash
> cd vr-app
> python3 -m http.server 8000
> ```
>
> Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## How to Deploy to GitHub Pages

1. Push the contents of the `vr-app/` folder to the root of a GitHub repository (or keep the entire repo and set Pages to the `vr-app/` subfolder).
2. In the repository settings, go to **Pages** → **Source** → select `main` branch / `root` (or `/vr-app` subfolder).
3. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

---

## File Structure

```
vr-app/
├── index.html                  ← Landing page / menu
├── site1-chelsea.html          ← Chelsea Hall 360° tour
├── site2-southwark.html        ← Southwark Hall 360° tour
├── site3-student-centre.html   ← Student Centre 360° tour
├── site4-vauxhall.html         ← Vauxhall Hall 360° tour
├── robot-library.html          ← Library Robot Tour
├── assets/
│   ├── videos/
│   │   ├── site1-chelsea.mp4
│   │   ├── site2-southwark.mp4
│   │   ├── site3-student-centre.mp4
│   │   ├── site4-vauxhall.mp4
│   │   └── robot-library.mp4
│   ├── audio/
│   │   ├── site1-audio.ogg
│   │   ├── site2-audio.ogg
│   │   ├── site3-audio.ogg
│   │   └── site4-audio.ogg
│   └── images/
│       ├── site1/  (photo1–4.jpg — replace with real 360° photos)
│       ├── site2/
│       ├── site3/
│       └── site4/
└── js/
    └── app.js                  ← Shared JavaScript (controls, panels, VR)
```

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **A-Frame** | 1.5.0 | WebXR / 360° VR rendering |
| **HTML5** | — | Page structure |
| **CSS3** | — | Styling, animations, responsive layout |
| **JavaScript** | ES6 (vanilla) | Controls, panel logic, video switching |

---

## Features

- 360° equirectangular video playback in-browser
- VR headset support via WebXR (A-Frame VR mode button)
- Gaze-based cursor for headset navigation (fuse after 1.5 s)
- Play/Pause, Mute/Unmute, Fullscreen controls
- 360° photo gallery with in-scene switching (per site)
- Site info panels with key facts
- CSS loading spinner while A-Frame initialises
- Tap-to-play fallback for mobile autoplay restrictions
- Fully responsive landing page (3-col → 2-col → 1-col)
- Voiceover audio per site

---

## Notes on Large Files

`robot-library.mp4` (876 MB) exceeds GitHub's 100 MB file limit and is excluded from this repository via `.gitignore`. Replace the placeholder in `assets/videos/` with the actual file when running locally or deploying to a server with larger storage.

---

## Credits

CSI_6_ART Group | AR/VR Technologies Module | London South Bank University | 2026

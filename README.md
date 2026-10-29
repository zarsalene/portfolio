# Arsalene Zbidi — AI Engineering Portfolio

Static portfolio built with HTML, CSS, and vanilla JavaScript. It runs directly from a browser and is structured for GitHub Pages project URLs. No build step or backend is required.

## Preview

Open `index.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files

- `index.html`, `styles.css`, `script.js` — portfolio source.
- `assets/Arsalene_Zbidi_CV.pdf` — downloadable refreshed CV.
- `Arsalene_Zbidi_CV.tex` — editable LaTeX source.
- `PROJECT_AUDIT.md` — project evidence, scoring, and selection rationale.
- `DEPLOYMENT.md` — current deployment status and next steps.

Project content and experience are maintained in the `portfolio` object in `script.js`. Keep the CV, project audit, and website aligned when facts change. The site links only to verified personal GitHub, email, and project URLs; internal projects are labeled as such.

## GitHub Pages

1. Create or select a repository for this site. Do not use an existing unrelated repository.
2. From this folder, initialize Git only if it is not already a repository; add and commit the site files.
3. Push to the selected repository and enable **Settings → Pages → Deploy from a branch**, selecting `main` and `/ (root)`, or add a Pages workflow.
4. For a project repository, verify the published URL follows `https://USERNAME.github.io/REPOSITORY/` and test the CV download there.

All local asset and CV links are relative, so they resolve under a project subpath. Google Fonts are optional; the page has system-font fallbacks.

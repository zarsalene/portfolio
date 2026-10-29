# Arsalene Zbidi - AI Engineering Portfolio

Static portfolio built with HTML, CSS, and vanilla JavaScript. It runs directly from a browser and has no build step or backend.

## Preview

Open `index.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files

- `index.html`, `styles.css`, `script.js` - portfolio source.
- `assets/Arsalene_Zbidi_CV.pdf` - downloadable refreshed CV.
- `Arsalene_Zbidi_CV.tex` - editable LaTeX source.
- `build_cv_pdf.py` - local ReportLab PDF generator for systems without LaTeX.
- `PROJECT_AUDIT.md` - project evidence, scoring, and selection rationale.
- `DEPLOYMENT.md` - verified deployment details.

Project content and experience are maintained in the `portfolio` object in `script.js`. Keep the CV, project audit, and website aligned when facts change. The site links only to verified personal and project URLs; internal projects are labeled as such.

## GitHub Pages

This site is published from [`zarsalene/portfolio`](https://github.com/zarsalene/portfolio) using `.github/workflows/pages.yml`. New pushes to `main` that change site files run the workflow. The live site is <https://zarsalene.github.io/portfolio/>.

The workflow publishes an allowlist of the site files and refreshed CV asset. The original supplied CV remains in source history but is excluded from the Pages artifact. All local links are relative and work under a project subpath. Google Fonts are optional; system-font fallbacks are included.

# Deployment status

**Status: deployed and verified on 29 October 2026.**

- Repository: [github.com/zarsalene/portfolio](https://github.com/zarsalene/portfolio), branch `main`.
- Live website: [zarsalene.github.io/portfolio](https://zarsalene.github.io/portfolio/).
- GitHub Pages uses GitHub Actions. Workflow run [40871523050](https://github.com/zarsalene/portfolio/actions/runs/40871523050), attempt 2, completed successfully.
- The original supplied CV PDF remains unchanged in repository history. The workflow publishes only the site HTML, CSS, JavaScript, favicon, and refreshed CV PDF; it excludes the original PDF, LaTeX source, audit, and project files.
- Root-level source and generated CV PDFs are now ignored and untracked; their local copies remain. The refreshed `assets/Arsalene_Zbidi_CV.pdf` stays tracked for the portfolio download. The old source PDF is still present in Git history.
- GitHub CLI (`gh`) is not installed. Git Credential Manager authenticated as `zarsalene`; Git and the GitHub Pages API completed the push and Pages setup.
- `https://github.com/zarsalene/rsearch_pal` is the verified public source for Research Pal. The footfall remote returned 404, and the documented Research Pal demo could not be retrieved, so neither is presented as a working link.

## Deployment configuration

Future pushes to `main` that change the Pages workflow or public site files trigger `.github/workflows/pages.yml`. The workflow publishes an explicit allowlist to GitHub Pages.

## Validation

- Static HTML references, metadata, responsive rules, and reduced-motion support were checked. JavaScript syntax passed Node.
- The CV PDF was visually reviewed, rendered as two pages, and checked for selectable text and working email, GitHub, and LinkedIn links.
- GitHub Pages returned HTTP 200 for the page, stylesheet, JavaScript, favicon, and CV PDF. The served CV was checked for two pages and selectable text.
- Browser automation was not available, so no interactive browser console or viewport screenshot check was performed. LaTeX compilers were not installed; the PDF was rendered with ReportLab. The `.tex` is editable but was not compiled here.

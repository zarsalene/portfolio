# Deployment status

**Status: prepared locally; not deployed.**

- Verified GitHub username from existing repository remotes: `zarsalene`.
- Git is installed. GitHub CLI (`gh`) is unavailable. Git Credential Manager reports a saved GitHub account, but no supported CLI is available here to create/configure a repository or read Pages deployment status safely.
- The current `Portfolio` folder is already a Git repository on branch `main`, has no remote, and contains the user's original CV PDF as an untracked file. That PDF was preserved. No remote was added and no push was attempted.
- `https://github.com/zarsalene/rsearch_pal` is the verified public source for Research Pal; it is not the portfolio target.
- No `zarsalene/portfolio` repository was confirmed from the local check. No live portfolio URL is claimed.

## Remaining deployment steps

After creating or confirming a dedicated, appropriate portfolio repository:

```powershell
git remote add origin https://github.com/zarsalene/portfolio.git
git add index.html styles.css script.js assets PROJECT_AUDIT.md README.md DEPLOYMENT.md Arsalene_Zbidi_CV.tex build_cv_pdf.py
git commit -m "Build AI engineering portfolio"
git push -u origin main
```

Then enable GitHub Pages for `main` / root in repository settings, wait for the Pages workflow, and verify the deployed page and `assets/Arsalene_Zbidi_CV.pdf`. If the repository is named `portfolio`, its expected project URL is `https://zarsalene.github.io/portfolio/`; it is not live until GitHub confirms it.

## Validation completed locally

- Static HTML structure, local paths, link targets, metadata, and responsive/reduced-motion rules were checked.
- JavaScript syntax was checked with Node.
- CV PDF was generated locally from the same curated content as the editable `.tex`; its selectable text and page count were checked.
- No browser automation or remote Pages build was available in this environment. LaTeX compilers were not installed, so the PDF was rendered with ReportLab; the `.tex` remains editable but has not been compiled here.

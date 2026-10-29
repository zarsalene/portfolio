# Project audit

**Audit date:** 29 October 2026  
**Scope:** project folders and repositories immediately inside `C:\Users\zarsa\Desktop\Work`, plus the active `Portfolio` folder. The supplied CV PDF was read as a two-page source document. No source LaTeX file was found in this scope. Existing project files were inspected read-only; several repositories have extensive uncommitted changes.

## Scoring rubric

Each project is scored out of 100: target-role relevance (25), engineering depth (25), inspectable evidence (20), reliability and delivery evidence (20), and distinctiveness (10). Scores reflect the evidence available locally, not estimated business value. A lower score may reflect limited or ambiguous evidence rather than poor engineering.

## Selected projects

| Rank | Project | Score | Evidence, strengths, and limits | Decision |
|---:|---|---:|---|---|
| 1 | Z-orbit (`counting_customers_v2`) | 91 | Inspected README, API/frontend/desktop documentation, source configuration and counting logic, test modules, and performance report. Combines ONNX computer vision, tracking, hysteresis-based crossing logic, a multi-camera API, event reporting, and a desktop packaging path. Includes a broad automated test suite and a documented calibration result of 13/13 crossings at a chosen band width; this is a small calibration sample, not a general accuracy claim. The local v2 folder points to the same GitHub remote as the older `counting_customers` checkout, but both local checkouts have extensive uncommitted changes. The configured GitHub URL returned 404 during remote validation. | Selected for computer vision, edge deployment, and system engineering. Kept the project local-only in the portfolio because its public source URL could not be confirmed. |
| 2 | MicroAI ERP analytics assistant (`ERP_MICROZED/SMART ERP CHATBOT_MCP`) | 89 | Inspected README, architecture, auth/permissions documentation, FastAPI agent files, and MCP tool server. The implementation separates a LangGraph client from a FastMCP tool process, persists sessions/report metadata, and checks employee and AI permissions close to tool execution. README describes 40+ ERP tools. Internal/company project: no public source or demo link is presented. | Selected as direct evidence for enterprise agent architecture and AI team leadership from the supplied CV. Website descriptions avoid operational or customer data. |
| 3 | Research Pal (`research-pal/sprint-14-wt/research-pal`) | 88 | Inspected README and verified the public source repository. Its README lists a live app URL, but the browsing check could not retrieve that app, so this portfolio links the source only. The product grounds reading cards and chat in PDF passages and checks generated quotations against extracted source text. Its own documentation warns that quote matching does not eliminate model errors, especially for tables. | Selected for retrieval, document-grounding, and user-facing AI product work. |
| 4 | ERP order dispatching and recommendation (`ERP projects/AI_powered_Order_dispatching_and _recommandation`) | 82 | Inspected README, endpoint and repository layout, implementation names, and dispatching-selection/forecasting tests. FastAPI service prepares stock data server-side and uses Gemini for order dispatching, sourcing recommendations, and product descriptions; includes TTL caching and parallel DB calls. No measured customer outcomes or public repo URL was found. | Selected for applied AI, business-rule boundaries, and ERP backend integration. |

## Inventory and ranking

### Engineering candidates

| Project / folder | Score | Evidence inspected | Strengths and weaknesses | Outcome |
|---|---:|---|---|---|
| `counting_customers_v2` — Z-orbit | 91 | README, performance report, API/frontend/desktop docs, source, tests | Broad computer-vision and service implementation with tests. Calibration data is small; no general production benchmark established. Configured GitHub remote returned 404; no public link used. | Selected |
| `ERP_MICROZED/SMART ERP CHATBOT_MCP` — MicroAI | 89 | README, auth and permissions docs, agent implementation, MCP server | Strong tool-using agent architecture and permission controls. Private/internal; no public demo. | Selected |
| `research-pal` — Research Pal | 88 | Project README, local source tree, public repository and listed live app | Document retrieval and quote-grounded workflows; source repository is verified. The listed live app was not reachable in the web check; AI/table interpretation still needs human review per README. | Selected |
| `ERP projects/AI_powered_Order_dispatching_and _recommandation` | 82 | README, endpoint/service file inventory, focused tests | Useful applied AI and backend integration; outcomes not measured, no public repository verified. | Selected |
| `studio-video-ia` — Montaj | 79 | README, package/scripts/source inventory | Full-stack AI media workflow with structured output validation, audio/video pipeline, API and end-to-end script. More product-oriented and less aligned to core enterprise AI target than selected work. | Rejected: portfolio space |
| `Quran_rectitaion_APP` — Rattil | 76 | README, plan, Flutter/Dart/model tooling inventory, Git remote | Offline mobile recitation coach, on-device speech work, model integrity checks and tests described. In development, specialized mobile focus, model license conditions apply. | Rejected: portfolio space |
| `counting_customers` | 67 | Tests, perf tools, Git remote and working-tree status | Footfall system with meaningful implementation. Duplicates the stronger v2 checkout; substantial local changes are uncommitted. | Rejected: duplicate |
| `Jobify` | 66 | README, AI and system architecture, backend tests/CI | Thoughtful safety model, provider abstraction, approval flow, and CI. Project docs explicitly say most AI tools and product milestones are not built; current AI tool is limited. | Rejected: early-stage, avoid implying completed product |
| `ERP Chatbot/ERP_chatbot_stagaire` | 65 | README, tests, verification scripts, workflow docs | ERP conversational analytics and forecasting described, with role-based access. Overlaps with the more complete MICRO project; README contains claims not independently measured. | Rejected: overlap |
| `Peak_Project/Peak_Product_recommandation` | 63 | Backend/search/frontend inventory | Recommendation and semantic product search implementation appears substantial. No coherent project README or verified outcomes found in inspected files. | Rejected: weaker evidence |
| `Facebook_chatbot` | 62 | README, workflow JSON, prompt files and integration assets | Multiple WhatsApp/Messenger and Qdrant workflows; useful integration work. Workflows are fragmented and overlap the selected MICRO/ERP work; contribution and maintainability are difficult to establish from exported flows alone. | Rejected: overlap |
| `SALES` | 60 | Workflow exports, dataset and UI files | Multi-agent sales and knowledge-search workflows. Overlaps with Facebook chatbot and ERP projects; limited standalone documentation and contribution evidence. | Rejected: overlap |
| `zorbit_video` | 58 | README, application files and local media/demo inventory | Video tooling and demos exist, but the checked-in media is product/company material and project ownership/outcomes are not established sufficiently for this portfolio. | Rejected: unclear attribution and publication suitability |
| `Forecasting_Project` | 55 | requirements, source and local data inventory | Sales forecasting and database integration are present. Contains local `.env` and data; no polished documentation or verifiable outcome, so nothing copied. | Rejected: evidence and privacy limits |
| `GYM_BOT` | 54 | progress report and directory inventory | Gym assistant project exists with a local environment and progress report. Implementation maturity and public-safe evidence not established in this pass. | Rejected: incomplete evidence |
| `personal/Selection voyage` | 52 | frontend/backend READMEs and backend source layout | Full-stack trip selection application with documented local API and database setup. Less relevant to target AI roles; README describes keyword fallback and live search integration as optional. | Rejected: relevance |
| `ERP projects` (other contents) | 50 | top-level inventory; selected dispatching subproject inspected separately | Contains the selected dispatching module and other work. No separate portfolio candidate established. | Not scored separately |
| `Backend/BACK-clone-pos` | 43 | package files and backend source inventory | Operational Node backend and integrations. No AI-specific evidence or project narrative. | Rejected: target relevance |
| `webscraping` | 38 | README, Streamlit source and requirements | Product-image scraping utility with batch and export features. Limited engineering depth for the target roles. | Rejected: scope |
| `rea` | 15 | README and Git remote | Repository identifies itself as REA and remote owner is `morluto`; it appears to be another author's upstream project, not the user's work. | Rejected: attribution |
| `important` | 0 | directory and text-file names only; contents deliberately not reproduced | Appears to hold operational notes rather than a portfolio project. Not copied. | Excluded |

### Remaining folders and archives

`Portfolio` contains the supplied CV PDF and this deliverable. The `ERP projects` directory is accounted for above. `helpful tricks.txt` and `Youtube_maker_code_backup.zip` are loose notes/archive files, not separately scored engineering projects. `counting_customers` and `counting_customers_v2` share a GitHub remote; that remote/version mismatch is not resolved by assuming the repo reflects v2.

## CV and claim audit

- Name, location, contact details, titles, employers, dates, education, language abilities, and research focus are reproduced from the supplied CV.
- CV bullets citing workload/deployment reductions, accuracy, frame rate, model dataset size, and engagement are not corroborated by the inspected project evidence. Those numeric impact claims were removed from the refreshed CV and site rather than repeated as independently verified results.
- The job titles and descriptions are based on the supplied CV, not employer records. Confirm wording and the current date range before publication if the CV has since changed.
- No source LaTeX CV was found in the work directory; only the two-page PDF was supplied. The refreshed `.tex` is newly reconstructed from that PDF and the audited project evidence.
- Public GitHub identity `zarsalene` is supported by configured project remotes. The LinkedIn handle in the CV could not be verified as a URL, so it is omitted. The two internal ERP case studies are clearly labeled and have no source/demo links.

## Missing or uncertain information

- The GitHub URL configured for the local v2 footfall checkout returned 404 during the check, and its local revision has many uncommitted changes. The exact public source for this local code is unknown.
- Public-safe confirmation that MicroAI, Z-orbit, and dispatching can be named and summarized externally. The portfolio uses the MicroAI sign-in screen and Z-orbit reports interface; it excludes credentials, live camera footage, and customer records.
- Independent evidence for historical CV impact metrics and the exact contribution split for projects built in teams.
- A public live URL for the portfolio; deployment credentials were not exposed via an authenticated GitHub CLI, and no portfolio repository was confirmed during the local audit.

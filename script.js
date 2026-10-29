const portfolio = {
  projects: [
    {
      number: "01", category: "AGENTIC AI · ENTERPRISE SYSTEMS", name: "MICRO — ERP analytics assistant",
      summary: "A natural-language assistant that connects ERP workflows to analytics and reporting tools.",
      details: [
        "Led AI engineering work on an assistant backed by a LangGraph agent and a separate FastMCP server exposing ERP operations.",
        "Implemented a FastAPI service with WebSocket chat, MySQL session and report metadata, plus a React interface.",
        "The repository documents 40+ ERP tools and permission checks that validate employee and AI grants before execution."
      ],
      tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
      diagram: ["EMPLOYEE · ERP UI", "↓", "FASTAPI · LANGGRAPH", "↓", "MCP TOOL SERVER", "↓", "ERP REST API"],
      link: null, linkLabel: "Internal project — source not public"
    },
    {
      number: "02", category: "COMPUTER VISION · EDGE", name: "FootTraffic AI",
      summary: "A doorway entry and exit counter designed for Raspberry Pi CPU deployment and recorded video development.",
      details: [
        "Built a pipeline that combines YOLO26n ONNX detection, ByteTrack tracking, a hysteresis counting band, and event reporting.",
        "Wrapped the pipeline in a FastAPI multi-camera service with live counters, batch jobs, events, and footfall reports.",
        "The project includes synthetic-video ground truth and a test suite; its documented 100% result applies to a 13-crossing calibration sample, not general deployment accuracy."
      ],
      tech: "PYTHON · ONNX RUNTIME · OPENCV · FASTAPI · REACT · SQLITE",
      diagram: ["VIDEO / RTSP", "↓", "YOLO ONNX", "↓", "BYTETRACK + HYSTERESIS", "↓", "EVENTS · API · DASHBOARD"],
      link: "https://github.com/zarsalene/counting_customers", linkLabel: "Repository"
    },
    {
      number: "03", category: "RAG · RESEARCH SOFTWARE", name: "Research Pal",
      summary: "A research-paper workspace that extracts reading cards and connects claims to passages in uploaded PDFs.",
      details: [
        "Built PDF-grounded workflows for paper summaries, search, chat, and cross-paper links.",
        "The API checks generated quotations against extracted PDF text and flags unsupported claims and numbers.",
        "A live application and public source repository are listed in the project README."
      ],
      tech: "PYTHON · PDF EXTRACTION · RETRIEVAL · LLM WORKFLOWS",
      diagram: ["PAPER PDF", "↓", "TEXT + PASSAGES", "↓", "AI DRAFT + QUOTE CHECK", "↓", "REVIEWABLE READING CARD"],
      link: "https://github.com/zarsalene/rsearch_pal", linkLabel: "Source repository", demo: "https://rsearch-pal-7tor.vercel.app/"
    },
    {
      number: "04", category: "APPLIED AI · ERP BACKEND", name: "Order dispatching & sourcing",
      summary: "ERP APIs for stock-aware order assignment, warehouse sourcing, and product description generation.",
      details: [
        "Implemented FastAPI endpoints around Gemini-backed dispatching, inter-warehouse sourcing, and image-aware product descriptions.",
        "Stock calculations are prepared server-side; TTL caching and parallel database calls support the request paths.",
        "The repository includes focused dispatching selection and forecasting tests; customer outcomes are not documented."
      ],
      tech: "FASTAPI · GEMINI · LANGCHAIN · MYSQL · SQLALCHEMY",
      diagram: ["ERP ORDER + STOCK", "↓", "RULES · DATA PREPARATION", "↓", "AI DISPATCH / SOURCING", "↓", "REVIEWABLE ERP ACTION"],
      link: null, linkLabel: "Internal project — source not public"
    }
  ],
  skills: [
    ["AI & AGENTS", "LangGraph · LangChain · MCP · multi-agent systems · LLM applications"],
    ["RETRIEVAL & SEARCH", "RAG · Qdrant · Elasticsearch · semantic and lexical retrieval"],
    ["BACKEND", "Python · FastAPI · REST APIs · WebSockets · Java"],
    ["DATA & INFRASTRUCTURE", "PostgreSQL · MySQL · MongoDB · Redis · Docker · Kubernetes"],
    ["ML & COMPUTER VISION", "PyTorch · TensorFlow · YOLO · OpenCV · ONNX Runtime"],
    ["ENGINEERING", "CI/CD · GitLab CI · Jenkins · ArgoCD · Prometheus · Grafana"]
  ],
  experience: [
    ["Mar 2026 — Present", "Head of AI", "Microzed Solution", "Leads a two-engineer AI team. Works on agents integrated with the Zsolution ERP platform, including cross-module analytics and conversational workflows.", "Megrine, Tunisia"],
    ["Oct 2024 — Mar 2026", "AI Engineer & Solution Architect", "Artificial Insight", "Led technical strategy for a five-person team on PowerSale AI; developed a LangGraph conversational assistant, a hybrid retrieval system for Kuwait Fire Force manuals, and a multilingual meeting-insights pipeline.", "Tunis, Tunisia"],
    ["Feb 2024 — Sep 2024", "Machine Learning Engineer Intern", "Artificial Insight", "Developed vehicle recognition, license-plate OCR, and SORT-based tracking workflows using YOLOv8, OpenCV, EasyOCR, TensorFlow, and MongoDB.", "Tunis, Tunisia"],
    ["Jan 2021 — Jun 2021", "DevOps Engineer Intern", "Polina Group Holding", "Worked on CI/CD pipelines and monitoring with GitLab CI, Jenkins, ArgoCD, Kubernetes, Grafana, Prometheus, and SonarQube.", "Tunis, Tunisia"]
  ]
};

const projectList = document.querySelector("#project-list");
portfolio.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  const details = project.details.map((item) => `<li>${item}</li>`).join("");
  const links = [project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel} ↗</a>` : `<span>${project.linkLabel}</span>`, project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live application ↗</a>` : ""].join("");
  card.innerHTML = `<div class="project-copy"><div class="project-top"><span class="project-number">${project.number} / 04</span><span class="project-category">${project.category}</span></div><h3>${project.name}</h3><p class="project-summary">${project.summary}</p><ul class="project-details">${details}</ul><p class="project-tech">${project.tech}</p><div class="project-links">${links}</div></div><div class="project-art" role="img" aria-label="Architecture overview: ${project.diagram.filter((x) => x !== "↓").join("; ")}"><div class="art-grid" aria-hidden="true"></div><div class="architecture" aria-hidden="true">${project.diagram.map((line) => line === "↓" ? "<i>↓</i>" : `<span class="${line.includes("AI") || line.includes("LANGGRAPH") || line.includes("YOLO") ? "arch-accent" : ""}">${line}</span>`).join("")}</div></div>`;
  projectList.append(card);
});

const skillsGrid = document.querySelector("#skills-grid");
portfolio.skills.forEach(([label, items]) => {
  const group = document.createElement("div"); group.className = "skill-group reveal";
  group.innerHTML = `<span class="skill-label">${label}</span><span class="skill-items">${items}</span>`; skillsGrid.append(group);
});

const experienceList = document.querySelector("#experience-list");
portfolio.experience.forEach(([period, role, company, description, place]) => {
  const item = document.createElement("article"); item.className = "experience-item reveal";
  item.innerHTML = `<span class="experience-period">${period}</span><div><h3>${role}</h3><span class="experience-company">${company}</span><p>${description}</p></div><span class="experience-place">${place}</span>`; experienceList.append(item);
});

document.querySelector("#year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open); });
nav.addEventListener("click", (event) => { if (event.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); } });
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else { document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible")); }

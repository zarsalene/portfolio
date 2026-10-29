const portfolio = {
  projects: [
    {
      number: "01",
      category: "AGENTIC AI · ENTERPRISE SYSTEMS",
      name: "MicroAI — ERP analytics assistant",
      summary: "A conversational layer over ERP data and workflows, built to make complex business questions easier to answer.",
      details: [
        "Built around a LangGraph agent and a separate FastMCP service with more than 40 documented ERP tools.",
        "Implemented a FastAPI service with WebSocket chat, MySQL conversation and report metadata, and a React interface.",
        "Checks employee permissions and AI grants before a tool can perform an ERP operation."
      ],
      tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
      diagram: ["EMPLOYEE QUESTION", "↓", "LANGGRAPH AGENT", "↓", "PERMISSION CHECK", "↓", "MCP · ERP TOOLS"],
      image: {
        src: "assets/microai-screen.webp",
        alt: "The MicroAI ERP assistant sign-in screen, captured from the local application.",
        caption: "MICROAI · ERP ASSISTANT SIGN-IN",
        shape: "portrait"
      },
      proof: ["40+", "ERP tools documented", "LangGraph + MCP", "Permission-aware access"]
    },
    {
      number: "02",
      category: "COMPUTER VISION · EDGE",
      name: "Z-orbit",
      summary: "Retail footfall intelligence that turns camera streams into clear, reviewable entry and exit events.",
      details: [
        "Combines YOLO26n ONNX detection, ByteTrack tracking, and a hysteresis counting band.",
        "Runs through a FastAPI multi-camera service with live counters, batch jobs, events, and reports.",
        "Designed for Raspberry Pi CPU deployment and recorded-video development; the documented 13-crossing calibration is a small sample, not a general accuracy claim."
      ],
      tech: "PYTHON · ONNX RUNTIME · OPENCV · FASTAPI · REACT · SQLITE",
      diagram: ["CAMERA / VIDEO", "↓", "YOLO ONNX", "↓", "TRACK + COUNT", "↓", "EVENTS · REPORTS"],
      image: {
        src: "assets/zorbit-reports.webp",
        alt: "A real Z-orbit reporting screen showing the application's report controls.",
        caption: "Z-ORBIT · REPORTS VIEW",
        shape: "wide"
      },
      link: null,
      linkLabel: "Private project"
    },
    {
      number: "03",
      category: "RAG · RESEARCH SOFTWARE",
      name: "Research Pal",
      summary: "A research-paper workspace that connects AI-generated reading notes back to source passages.",
      details: [
        "Built PDF-grounded workflows for paper summaries, search, chat, and cross-paper links.",
        "Checks generated quotations against extracted PDF text and flags unsupported claims and numbers.",
        "A live application and public source repository are listed in the project README."
      ],
      tech: "PYTHON · PDF EXTRACTION · RETRIEVAL · LLM WORKFLOWS",
      diagram: ["PAPER PDF", "↓", "TEXT + PASSAGES", "↓", "QUOTE CHECK", "↓", "REVIEWABLE NOTES"],
      image: {
        src: "assets/research-pal-mobile.webp",
        alt: "Research Pal on mobile, showing a research question and its guided workflow.",
        caption: "RESEARCH PAL · MOBILE FLOW",
        shape: "portrait"
      },
      link: "https://github.com/zarsalene/rsearch_pal",
      linkLabel: "Source repository"
    },
    {
      number: "04",
      category: "APPLIED AI · ERP BACKEND",
      name: "Order dispatching & sourcing",
      summary: "ERP APIs for stock-aware order assignment, warehouse sourcing, and product description generation.",
      details: [
        "Implemented FastAPI endpoints around Gemini-backed dispatching, inter-warehouse sourcing, and image-aware product descriptions.",
        "Prepares stock calculations server-side; TTL caching and parallel database calls support request paths.",
        "Includes focused dispatching selection and forecasting tests; customer outcomes are not documented."
      ],
      tech: "FASTAPI · GEMINI · LANGCHAIN · MYSQL · SQLALCHEMY",
      diagram: ["ERP ORDER + STOCK", "↓", "RULES · DATA", "↓", "AI DISPATCH", "↓", "REVIEWABLE ACTION"],
      link: null,
      linkLabel: "Private project"
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
  const details = project.details.map((item) => "<li>" + item + "</li>").join("");
  const links = [
    project.link
      ? '<a href="' + project.link + '" target="_blank" rel="noreferrer">' + project.linkLabel + ' ↗</a>'
      : "<span>" + project.linkLabel + "</span>",
    project.demo
      ? '<a href="' + project.demo + '" target="_blank" rel="noreferrer">Live application ↗</a>'
      : ""
  ].join("");

  let visual;
  if (project.image) {
    const image = project.image;
    const proof = project.proof
      ? '<aside class="micro-proof"><span class="proof-kicker">BUILT FOR REAL ERP WORK</span><strong>' + project.proof[0] + '</strong><span class="proof-label">' + project.proof[1] + '</span><div><b>' + project.proof[2] + '</b><b>' + project.proof[3] + '</b></div></aside>'
      : "";
    visual = '<div class="project-art screenshot-art ' + (image.shape === "portrait" ? "portrait-art" : "wide-art") + '"><div class="art-grid" aria-hidden="true"></div><figure class="project-screenshot ' + (image.shape === "portrait" ? "single-screenshot" : "wide-screenshot") + (project.proof ? " micro-screenshot" : "") + '"><img src="' + image.src + '" alt="' + image.alt + '" loading="lazy" decoding="async"><figcaption>' + image.caption + '</figcaption></figure>' + proof + "</div>";
  } else {
    const diagram = project.diagram.map((line) => {
      if (line === "↓") return "<i aria-hidden=\"true\">↓</i>";
      const accent = /AI|LANGGRAPH|YOLO|MCP|TRACK \+ COUNT/.test(line) ? " arch-accent" : "";
      return '<span class="' + accent.trim() + '">' + line + "</span>";
    }).join("");
    visual = '<div class="project-art system-art" role="img" aria-label="System flow: ' + project.diagram.filter((line) => line !== "↓").join(" to ") + '"><div class="art-grid" aria-hidden="true"></div><div class="architecture" aria-hidden="true">' + diagram + "</div></div>";
  }

  card.innerHTML = '<div class="project-copy"><div class="project-top"><span class="project-number">' + project.number + " / 04</span><span class=\"project-category\">" + project.category + '</span></div><h3>' + project.name + '</h3><p class="project-summary">' + project.summary + '</p><ul class="project-details">' + details + '</ul><p class="project-tech">' + project.tech + '</p><div class="project-links">' + links + "</div></div>" + visual;
  projectList.append(card);
});

const skillsGrid = document.querySelector("#skills-grid");
portfolio.skills.forEach(([label, items]) => {
  const group = document.createElement("div");
  group.className = "skill-group reveal";
  group.innerHTML = '<span class="skill-label">' + label + '</span><span class="skill-items">' + items + "</span>";
  skillsGrid.append(group);
});

const experienceList = document.querySelector("#experience-list");
portfolio.experience.forEach(([period, role, company, description, place]) => {
  const item = document.createElement("article");
  item.className = "experience-item reveal";
  item.innerHTML = '<span class="experience-period">' + period + '</span><div><h3>' + role + '</h3><span class="experience-company">' + company + '</span><p>' + description + '</p></div><span class="experience-place">' + place + "</span>";
  experienceList.append(item);
});

document.querySelector("#year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

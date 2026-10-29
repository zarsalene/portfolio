const portfolio = {
  projects: [
    {
      number: "01",
      category: "AGENTIC AI · ENTERPRISE SYSTEMS",
      name: "MicroAI — ERP analytics assistant",
      summary: "A natural-language interface for ERP analytics and operations, with permission checks around tool use.",
      details: [
        "Pairs a LangGraph agent with a separate FastMCP service exposing 40+ documented ERP tools.",
        "Combines FastAPI and WebSocket chat with MySQL session and report metadata and a React client.",
        "Checks employee permissions and AI grants before tools can execute ERP actions."
      ],
      tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
      diagram: ["EMPLOYEE QUESTION", "↓", "LANGGRAPH AGENT", "↓", "PERMISSION CHECK", "↓", "MCP · ERP TOOLS"],
      image: {
        src: "assets/microai-screen.webp",
        alt: "The MicroAI ERP assistant sign-in screen, captured from the local application.",
        caption: "MICROAI · ERP ASSISTANT SIGN-IN",
        shape: "portrait"
      },
      proof: ["40+", "ERP tools", "LangGraph + MCP", "Permission checks before tool use"]
    },
    {
      number: "02",
      category: "COMPUTER VISION · EDGE",
      name: "Z-orbit",
      summary: "Retail footfall monitoring that turns camera streams into reviewable entry and exit counts.",
      details: [
        "Combines YOLO26n ONNX detection, ByteTrack tracking, and a hysteresis band to count crossings.",
        "Provides live counters, batch analysis, events, and reports through a FastAPI multi-camera service.",
        "Targets Raspberry Pi CPU deployment. Its 13-of-13 result came from a small calibration sample, not a broad accuracy study."
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
      summary: "A research-paper workspace that grounds AI-assisted reading in source passages.",
      details: [
        "Supports paper summaries, search, chat, and links between papers using extracted PDF text.",
        "Checks generated quotations against source text and flags unsupported claims and numbers.",
        "The live application and public repository are linked here."
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
      summary: "ERP services for stock-aware order assignment, warehouse sourcing, and AI-assisted product descriptions.",
      details: [
        "Added Gemini-backed FastAPI endpoints for dispatching, inter-warehouse sourcing, and image-aware product descriptions.",
        "Prepares stock calculations server-side, with TTL caching and parallel database calls on request paths.",
        "Includes focused tests for dispatch selection and forecasting."
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
    ["Mar 2026 — Present", "Head of AI", "Microzed Solution", "Leads two AI engineers building agents for Zsolution ERP, including cross-module analytics and conversational workflows.", "Megrine, Tunisia"],
    ["Oct 2024 — Mar 2026", "AI Engineer & Solution Architect", "Artificial Insight", "Led a five-person team on PowerSale AI. Built a LangGraph assistant, hybrid retrieval for Kuwait Fire Force manuals, and a multilingual meeting-insights pipeline.", "Tunis, Tunisia"],
    ["Feb 2024 — Sep 2024", "Machine Learning Engineer Intern", "Artificial Insight", "Developed vehicle recognition and plate OCR, plus SORT tracking, with YOLOv8, OpenCV, EasyOCR, TensorFlow, and MongoDB.", "Tunis, Tunisia"],
    ["Jan 2021 — Jun 2021", "DevOps Engineer Intern", "Polina Group Holding", "Contributed to CI/CD pipelines and monitoring with GitLab CI, Jenkins, ArgoCD, Kubernetes, Grafana, Prometheus, and SonarQube.", "Tunis, Tunisia"]
  ]
};

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  initProjectList();
  initSkillsGrid();
  initExperienceList();
  initYear();
  initRevealAnimations();
  initScrollProgress();
  initSmoothScroll();
  initFocusManagement();
  initSocialIcons();
});

// Project cards
function initProjectList() {
  const projectList = document.querySelector("#project-list");
  if (!projectList) return;

  portfolio.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View ${project.name} project`);

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

    // Add click handler
    card.addEventListener("click", (e) => {
      // Don't navigate if clicking on links inside
      if (e.target.closest("a")) return;
    });

    projectList.append(card);
  });
}

// Skills grid
function initSkillsGrid() {
  const skillsGrid = document.querySelector("#skills-grid");
  if (!skillsGrid) return;

  portfolio.skills.forEach(([label, items]) => {
    const group = document.createElement("div");
    group.className = "skill-group reveal";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", label + " skills");
    group.innerHTML = '<span class="skill-label">' + label + '</span><span class="skill-items">' + items + "</span>";
    skillsGrid.append(group);
  });
}

// Experience list
function initExperienceList() {
  const experienceList = document.querySelector("#experience-list");
  if (!experienceList) return;

  portfolio.experience.forEach(([period, role, company, description, place]) => {
    const item = document.createElement("article");
    item.className = "experience-item reveal";
    item.setAttribute("role", "listitem");
    item.innerHTML = '<span class="experience-period">' + period + '</span><div><h3>' + role + '</h3><span class="experience-company">' + company + '</span><p>' + description + '</p></div><span class="experience-place">' + place + "</span>";
    experienceList.append(item);
  });
}

// Year
function initYear() {
  document.querySelector("#year").textContent = new Date().getFullYear();
}

// Reveal animations with improved IntersectionObserver
function initRevealAnimations() {
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
}

// Scroll progress indicator
function initScrollProgress() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  hero.style.position = "relative";
  hero.style.overflow = "visible";
  hero.insertBefore(progressBar, hero.firstElementChild);

  let maxScroll = document.body.scrollHeight - window.innerHeight;
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const percent = Math.min(Math.max(scroll / maxScroll, 0), 1) * 100;
    progressBar.style.width = percent + "%";
  }, { passive: true });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// Focus management improvements
function initFocusManagement() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      siteNav.classList.toggle("is-open", open);
    });

    // Close nav when a link is clicked
    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
      }
    });

    // Handle escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
        menuToggle.focus();
      }
    });
  }
}

// Social icons initialization
function initSocialIcons() {
  const socialLinks = document.querySelectorAll('.social-row .social-icon');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.transition = 'transform .2s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}
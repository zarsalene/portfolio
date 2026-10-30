/* Multilingual content packs: English, French, Arabic (Rtl).
   Static page chrome is keyed by data-i18n attributes; projects, skills,
   and experience are rebuilt from these packs on every language switch. */
const content = {
  en: {
    meta: {
      title: "Arsalene Zbidi — AI Engineer",
      description: "Arsalene Zbidi is an AI engineer with 2+ years in AI/ML and 3+ years in engineering, building agentic systems and applied AI software."
    },
    ui: {
      skip: "Skip to content",
      menuButton: 'Menu <span class="menu-lines" aria-hidden="true">☰</span>',
      navWork: 'Work<span>01</span>',
      navApproach: 'Approach<span>02</span>',
      navExperience: 'Experience<span>03</span>',
      navCv: 'Get my CV <span aria-hidden="true">↗</span>',
      heroKicker: '<span class="status-dot"></span> AI ENGINEER <span class="kicker-divider">/</span> TUNIS, TUNISIA',
      heroTitle: 'AI systems.<br><span class="hero-title-accent">Engineered.</span>',
      heroLede: "I turn ambitious AI ideas into software people can actually use.",
      heroDescription: "Agentic systems, retrieval, computer vision, and backend architecture built around real workflows.",
      factAi: "YEARS IN AI/ML",
      factEng: "YEARS IN ENGINEERING",
      factTools: "DOCUMENTED ERP TOOLS",
      seeWork: 'See the work <span aria-hidden="true">↓</span>',
      downloadCv: 'Download CV <span aria-hidden="true">↗</span>',
      socialAria: "Professional profiles",
      visualIndex: "AI / SYSTEMS",
      visualTag: 'HUMAN THINKING<br><b>+ MACHINE SCALE</b>',
      orbit1: "01 — AGENTIC AI",
      orbit2: "02 — APPLIED ML",
      heroFigTemplate: 'BUILDING WHAT\'S NEXT <span>↗</span>',
      heroBottomL: "SELECTED ENGINEERING WORK",
      heroBottomR: 'SCROLL TO EXPLORE <b aria-hidden="true">↓</b>',
      workKicker: "01 / SELECTED WORK",
      workTitle: 'Different problems.<br><span>Carefully engineered.</span>',
      workIntro: "From permission-aware ERP agents to edge computer vision, each project solves a concrete workflow challenge.",
      aboutKicker: "02 / HOW I WORK",
      aboutTitle: 'Useful AI is<br><span>good engineering.</span>',
      aboutLede: "I connect models, data, and product workflows.",
      aboutText: "I design around clear system boundaries, verifiable outputs, and permission-aware tool use.",
      researchLabel: "CURRENT RESEARCH",
      researchText: "PhD in Computer Science at SUP'COM <span>·</span> Agentic AI for threat hunting",
      expKicker: "03 / EXPERIENCE",
      expTitle: 'Built with<br><span>ambitious teams.</span>',
      expIntro: "Two-plus years in AI/ML and three-plus in engineering — leading AI teams, architecture, and delivery.",
      contactKicker: "04 / LET'S TALK",
      contactTitle: 'Have a hard<br>problem? <span>Good.</span>',
      contactText: "Let’s talk about agentic AI, applied machine learning, or the systems behind them.",
      contactPrimary: 'Start a conversation <span aria-hidden="true">↗</span>',
      contactCv: 'Download my CV <span>↓</span>',
      contactAddress: "Tunis, Tunisia<br>+216 90 431 500",
      madeIn: "MADE IN TUNIS",
      flowLabel: "System flow: "
    },
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
        clipsKicker: "MORE INTERFACE DEMOS",
        clips: [
          { src: "assets/microai-insights.mp4", poster: "assets/microai-insights-poster.jpg", caption: "10 · INSIGHTS DEMO" },
          { src: "assets/microai-erp-help.mp4", poster: "assets/microai-erp-help-poster.jpg", caption: "20 · ERP HELP DEMO" }
        ],
        video: { src: "assets/microai-vertical-30s.mp4", poster: "assets/microai-screen.webp", shape: "portrait" },
        videoCaption: "MICROAI · 30S PRODUCT WALKTHROUGH",
        proofKicker: "BUILT FOR REAL ERP WORK",
        proof: ["40+", "ERP tools", "LangGraph + MCP", "Permission checks before tool use"],
        tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
        diagram: ["EMPLOYEE QUESTION", "↓", "LANGGRAPH AGENT", "↓", "PERMISSION CHECK", "↓", "MCP · ERP TOOLS"],
        link: null,
        linkLabel: "Private project"
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
        video: { src: "assets/zorbit-demo-60s.mp4", poster: "assets/zorbit-reports.webp", shape: "wide" },
        videoCaption: "Z-ORBIT · 60S LIVE DEMO",
        tech: "PYTHON · ONNX RUNTIME · OPENCV · FASTAPI · REACT · SQLITE",
        diagram: ["CAMERA / VIDEO", "↓", "YOLO ONNX", "↓", "TRACK + COUNT", "↓", "EVENTS · REPORTS"],
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
  },
  fr: {
    meta: {
      title: "Arsalene Zbidi — Ingénieur en IA",
      description: "Arsalene Zbidi, ingénieur en IA : plus de 2 ans en IA/ML et plus de 3 ans en ingénierie — des systèmes agents et des logiciels d'IA appliquée."
    },
    ui: {
      skip: "Aller au contenu",
      menuButton: 'Menu <span class="menu-lines" aria-hidden="true">☰</span>',
      navWork: 'Projets<span>01</span>',
      navApproach: 'Approche<span>02</span>',
      navExperience: 'Parcours<span>03</span>',
      navCv: 'Télécharger le CV <span aria-hidden="true">↗</span>',
      heroKicker: '<span class="status-dot"></span> INGÉNIEUR EN IA <span class="kicker-divider">/</span> TUNIS, TUNISIE',
      heroTitle: 'Des systèmes d\'IA.<br><span class="hero-title-accent">Conçus.</span>',
      heroLede: "Je transforme des idées d'IA ambitieuses en logiciels que les gens utilisent vraiment.",
      heroDescription: "Systèmes agents, recherche sémantique, vision par ordinateur et architecture backend, pensés pour des workflows réels.",
      factAi: "ANS EN IA/ML",
      factEng: "ANS D'INGÉNIERIE",
      factTools: "OUTILS ERP DOCUMENTÉS",
      seeWork: 'Voir les projets <span aria-hidden="true">↓</span>',
      downloadCv: 'Télécharger le CV <span aria-hidden="true">↗</span>',
      socialAria: "Profils professionnels",
      visualIndex: "IA / SYSTÈMES",
      visualTag: 'RÉFLEXION HUMAINE<br><b>+ PUISSANCE MACHINE</b>',
      orbit1: "01 — IA AGENTIQUE",
      orbit2: "02 — ML APPLIQUÉ",
      heroFigTemplate: 'CONSTRUIRE LA SUITE <span>↗</span>',
      heroBottomL: "PROJETS D'INGÉNIERIE SÉLECTIONNÉS",
      heroBottomR: 'DÉFILEZ POUR EXPLORER <b aria-hidden="true">↓</b>',
      workKicker: "01 / PROJETS SÉLECTIONNÉS",
      workTitle: 'Des problèmes différents.<br><span>Conçus avec soin.</span>',
      workIntro: "Des agents ERP sensibles aux permissions jusqu'à la vision par ordinateur embarquée : chaque projet résout un défi de workflow concret.",
      aboutKicker: "02 / MA MÉTHODE",
      aboutTitle: 'L\'IA utile<br><span>est de la bonne ingénierie.</span>',
      aboutLede: "Je relie modèles, données et workflows métier.",
      aboutText: "Je conçois autour de frontières système claires, de sorties vérifiables et d'outils sensibles aux permissions.",
      researchLabel: "RECHERCHE EN COURS",
      researchText: "Doctorat en informatique à SUP'COM <span>·</span> IA agentique pour la chasse aux menaces",
      expKicker: "03 / EXPÉRIENCE",
      expTitle: 'Construit avec<br><span>des équipes ambitieuses.</span>',
      expIntro: "Plus de deux ans en IA/ML, plus de trois ans en ingénierie — direction d'équipes IA, architecture et livraison.",
      contactKicker: "04 / DISCUTONS",
      contactTitle: 'Un problème<br>difficile ? <span>Parfait.</span>',
      contactText: "Parlons d'IA agentique, de machine learning appliqué, ou des systèmes qui les portent.",
      contactPrimary: 'Lancer la conversation <span aria-hidden="true">↗</span>',
      contactCv: 'Télécharger mon CV <span>↓</span>',
      contactAddress: "Tunis, Tunisie<br>+216 90 431 500",
      madeIn: "CONÇU À TUNIS",
      flowLabel: "Flux du système : "
    },
    projects: [
      {
        number: "01",
        category: "IA AGENTIQUE · SYSTÈMES D'ENTREPRISE",
        name: "MicroAI — assistant analytique pour ERP",
        summary: "Une interface en langage naturel pour l'analytique et les opérations ERP, avec vérification des permissions autour de chaque outil.",
        details: [
          "Associe un agent LangGraph à un service FastMCP distinct exposant plus de 40 outils ERP documentés.",
          "Combine FastAPI et un chat WebSocket avec des métadonnées MySQL (sessions, rapports) et un client React.",
          "Vérifie les permissions de l'employé et les autorisations IA avant toute exécution d'action ERP."
        ],
        clipsKicker: "AUTRES DÉMOS D'INTERFACE",
        clips: [
          { src: "assets/microai-insights.mp4", poster: "assets/microai-insights-poster.jpg", caption: "10 · DÉMO INSIGHTS" },
          { src: "assets/microai-erp-help.mp4", poster: "assets/microai-erp-help-poster.jpg", caption: "20 · DÉMO AIDE ERP" }
        ],
        video: { src: "assets/microai-vertical-30s.mp4", poster: "assets/microai-screen.webp", shape: "portrait" },
        videoCaption: "MICROAI · PRÉSENTATION DU PRODUIT (30 S)",
        proofKicker: "CONÇU POUR L'ERP AU QUOTIDIEN",
        proof: ["40+", "outils ERP", "LangGraph + MCP", "Permissions vérifiées avant tout usage"],
        tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
        diagram: ["EMPLOYEE QUESTION", "↓", "LANGGRAPH AGENT", "↓", "PERMISSION CHECK", "↓", "MCP · ERP TOOLS"],
        link: null,
        linkLabel: "Projet privé"
      },
      {
        number: "02",
        category: "VISION PAR ORDINATEUR · EDGE",
        name: "Z-orbit",
        summary: "Surveillance de la fréquentation retail qui transforme les flux caméra en comptages entrée/sortie vérifiables.",
        details: [
          "Combine la détection YOLO26n ONNX, le suivi ByteTrack et une bande d'hystérésis pour compter les passages.",
          "Offre compteurs en direct, analyses par lot, événements et rapports via un service FastAPI multi-caméras.",
          "Conçu pour le déploiement CPU Raspberry Pi. Le résultat 13 sur 13 provient d'un petit échantillon de calibration, pas d'une étude d'exactitude générale."
        ],
        video: { src: "assets/zorbit-demo-60s.mp4", poster: "assets/zorbit-reports.webp", shape: "wide" },
        videoCaption: "Z-ORBIT · DÉMO EN DIRECT (60 S)",
        tech: "PYTHON · ONNX RUNTIME · OPENCV · FASTAPI · REACT · SQLITE",
        diagram: ["CAMERA / VIDEO", "↓", "YOLO ONNX", "↓", "TRACK + COUNT", "↓", "EVENTS · REPORTS"],
        link: null,
        linkLabel: "Projet privé"
      },
      {
        number: "03",
        category: "RAG · LOGICIEL DE RECHERCHE",
        name: "Research Pal",
        summary: "Un espace de travail pour articles scientifiques, avec lecture assistée par IA ancrée dans les passages sources.",
        details: [
          "Prend en charge résumés, recherche, chat et liens entre articles à partir du texte extrait des PDF.",
          "Vérifie les citations générées par rapport au texte source et signale les affirmations et les chiffres non étayés.",
          "L'application en ligne et le dépôt public sont reliés ici."
        ],
        tech: "PYTHON · EXTRACTION PDF · RETRIEVAL · WORKFLOWS LLM",
        diagram: ["PAPER PDF", "↓", "TEXT + PASSAGES", "↓", "QUOTE CHECK", "↓", "REVIEWABLE NOTES"],
        image: {
          src: "assets/research-pal-mobile.webp",
          alt: "Research Pal sur mobile, montrant une question de recherche et son workflow guidé.",
          caption: "RESEARCH PAL · FLUX MOBILE",
          shape: "portrait"
        },
        link: "https://github.com/zarsalene/rsearch_pal",
        linkLabel: "Code source"
      },
      {
        number: "04",
        category: "IA APPLIQUÉE · BACKEND ERP",
        name: "Répartition & approvisionnement des commandes",
        summary: "Services ERP pour l'affectation des commandes selon le stock, le sourcing inter-entrepôts et des descriptions produits assistées par IA.",
        details: [
          "Ajout d'endpoints FastAPI adossés à Gemini pour la répartition, le sourcing inter-entrepôts et des descriptions produits tirées des images.",
          "Prépare les calculs de stock côté serveur, avec cache TTL et appels base de données parallèles sur les chemins de requête.",
          "Inclut des tests ciblés pour la sélection de répartition et la prévision."
        ],
        tech: "FASTAPI · GEMINI · LANGCHAIN · MYSQL · SQLALCHEMY",
        diagram: ["ERP ORDER + STOCK", "↓", "RULES · DATA", "↓", "AI DISPATCH", "↓", "REVIEWABLE ACTION"],
        link: null,
        linkLabel: "Projet privé"
      }
    ],
    skills: [
      ["IA & AGENTS", "LangGraph · LangChain · MCP · systèmes multi-agents · applications LLM"],
      ["RECHERCHE & RÉCUPÉRATION", "RAG · Qdrant · Elasticsearch · retrieval sémantique et lexical"],
      ["BACKEND", "Python · FastAPI · API REST · WebSockets · Java"],
      ["DONNÉES & INFRASTRUCTURE", "PostgreSQL · MySQL · MongoDB · Redis · Docker · Kubernetes"],
      ["ML & VISION", "PyTorch · TensorFlow · YOLO · OpenCV · ONNX Runtime"],
      ["INGÉNIERIE", "CI/CD · GitLab CI · Jenkins · ArgoCD · Prometheus · Grafana"]
    ],
    experience: [
      ["mars 2026 — aujourd'hui", "Directeur IA", "Microzed Solution", "Dirige une équipe de deux ingénieurs IA qui construit des agents pour l'ERP Zsolution, dont l'analytique transversale et les workflows conversationnels.", "Megrine, Tunisie"],
      ["oct. 2024 — mars 2026", "Ingénieur IA & Architecte de solutions", "Artificial Insight", "Direction technique d'une équipe de cinq personnes sur PowerSale AI. A construit un assistant LangGraph, un retrieval hybride pour les manuels des pompiers du Koweït et un pipeline multilingue d'insights de réunions.", "Tunis, Tunisie"],
      ["fév. 2024 — sept. 2024", "Ingénieur ML (stage)", "Artificial Insight", "Reconnaissance de véhicules et OCR de plaques, avec suivi SORT : YOLOv8, OpenCV, EasyOCR, TensorFlow et MongoDB.", "Tunis, Tunisie"],
      ["janv. 2021 — juin 2021", "Ingénieur DevOps (stage)", "Polina Group Holding", "Contribution aux pipelines CI/CD et au monitoring : GitLab CI, Jenkins, ArgoCD, Kubernetes, Grafana, Prometheus et SonarQube.", "Tunis, Tunisie"]
    ]
  },
  ar: {
    meta: {
      title: "أرسلان الزبيدي — مهندس ذكاء اصطناعي",
      description: "أرسلان الزبيدي مهندس ذكاء اصطناعي بخبرة تتجاوز سنتين في الذكاء الاصطناعي وتعلم الآلة وأكثر من ثلاث سنوات في الهندسة — يبني أنظمة وكلاء وبرمجيات ذكاء تطبيقية."
    },
    ui: {
      skip: "تخطَّ إلى المحتوى",
      menuButton: 'القائمة <span class="menu-lines" aria-hidden="true">☰</span>',
      navWork: 'الأعمال<span>01</span>',
      navApproach: 'منهجيتي<span>02</span>',
      navExperience: 'الخبرة<span>03</span>',
      navCv: 'تحميل السيرة الذاتية <span aria-hidden="true">↗</span>',
      heroKicker: '<span class="status-dot"></span> مهندس ذكاء اصطناعي <span class="kicker-divider">/</span> تونس العاصمة، تونس',
      heroTitle: 'أنظمة ذكاء اصطناعي.<br><span class="hero-title-accent">مُهندَسة.</span>',
      heroLede: "أحوّل أفكار الذكاء الاصطناعي الطموحة إلى برمجيات يستخدمها الناس فعلاً.",
      heroDescription: "أنظمة وكلاء ذكية، استرجاع المعلومات، الرؤية الحاسوبية، وهندسة الواجهات الخلفية — كلها مبنية حول سير عمل حقيقية.",
      factAi: "سنوات في الذكاء الاصطناعي وتعلم الآلة",
      factEng: "سنوات في الهندسة",
      factTools: "أداة ERP موثقة",
      seeWork: 'استعرض الأعمال <span aria-hidden="true">↓</span>',
      downloadCv: 'تحميل السيرة الذاتية <span aria-hidden="true">↗</span>',
      socialAria: "الملفات المهنية",
      visualIndex: "ذكاء / أنظمة",
      visualTag: 'تفكير بشري<br><b>+ قدرة الآلة</b>',
      orbit1: "01 — ذكاء وكيلي",
      orbit2: "02 — تعلم آلة تطبيقي",
      heroFigTemplate: 'نبني ما هو قادم <span>↗</span>',
      heroBottomL: "أعمال هندسية مختارة",
      heroBottomR: 'انزل للاستكشاف <b aria-hidden="true">↓</b>',
      workKicker: "01 / أعمال مختارة",
      workTitle: 'مشكلات مختلفة.<br><span>هندسة متقنة.</span>',
      workIntro: "من وكلاء ERP يراعون الصلاحيات إلى الرؤية الحاسوبية الطرفية — كل مشروع يعالج تحدياً تشغيلياً ملموساً.",
      aboutKicker: "02 / منهجيتي",
      aboutTitle: 'الذكاء الاصطناعي المفيد<br><span>هو هندسة جيدة.</span>',
      aboutLede: "أربط النماذج بالبيانات وبسير العمل التشغيلية.",
      aboutText: "أصمم حول حدود واضحة للنظام، ومخرجات قابلة للتحقق، واستخدام أدوات يضبطها نظام الصلاحيات.",
      researchLabel: "بحث حالي",
      researchText: "دكتوراه في العلوم الحاسوبية بـ SUP'COM <span>·</span> ذكاء وكلائي لصيد التهديدات السيبرانية",
      expKicker: "03 / الخبرة",
      expTitle: 'بُنيت مع فرق<br><span>طموحة.</span>',
      expIntro: "أكثر من سنتين في الذكاء الاصطناعي وتعلم الآلة، وأكثر من ثلاث سنوات في الهندسة — قيادة فرق الذكاء الاصطناعي، والهندسة المعمارية للأنظمة، والتسليم.",
      contactKicker: "04 / لنتحدث",
      contactTitle: 'لديك مشكل معقد؟<br><span>ممتاز.</span>',
      contactText: "لنتحدث عن أنظمة الوكلاء الذكية، أو تعلم الآلة التطبيقية، أو الأنظمة التي تقف خلفها.",
      contactPrimary: 'لنبدأ الحديث <span aria-hidden="true">↗</span>',
      contactCv: 'تحميل سيرتي الذاتية <span>↓</span>',
      contactAddress: "تونس العاصمة، تونس<br>+216 90 431 500",
      madeIn: "صُنع في تونس",
      flowLabel: "مسار النظام: "
    },
    projects: [
      {
        number: "01",
        category: "ذكاء وكيلي · أنظمة المؤسسات",
        name: "MicroAI — مساعد تحليلات لأنظمة ERP",
        summary: "واجهة بلغة طبيعية لتحليلات وإجراءات أنظمة ERP، مع فحوصات صلاحيات تسبق استخدام الأدوات.",
        details: [
          "يزوّج وكيل LangGraph مع خدمة FastMCP مستقلة تعرض أكثر من 40 أداة ERP موثقة.",
          "يجمع FastAPI ودردشة عبر WebSocket مع بيانات وصفية في MySQL للجلسات والتقارير، وواجهة React.",
          "يتحقق من صلاحيات الموظف ومنح الذكاء الاصطناعي قبل أن تنفّذ الأدوات أي إجراء ERP."
        ],
        clipsKicker: "عروض واجهة إضافية",
        clips: [
          { src: "assets/microai-insights.mp4", poster: "assets/microai-insights-poster.jpg", caption: "10 · عرض الرؤى" },
          { src: "assets/microai-erp-help.mp4", poster: "assets/microai-erp-help-poster.jpg", caption: "20 · عرض مساعدة ERP" }
        ],
        video: { src: "assets/microai-vertical-30s.mp4", poster: "assets/microai-screen.webp", shape: "portrait" },
        videoCaption: "MicroAI · عرض المنتج (30 ث)",
        proofKicker: "مصمم لعمل ERP اليومي",
        proof: ["+40", "أداة ERP", "LangGraph + MCP", "فحص الصلاحيات قبل الاستخدام"],
        tech: "LANGGRAPH · MCP · FASTAPI · MYSQL · REACT · WEBSOCKETS",
        diagram: ["EMPLOYEE QUESTION", "↓", "LANGGRAPH AGENT", "↓", "PERMISSION CHECK", "↓", "MCP · ERP TOOLS"],
        link: null,
        linkLabel: "مشروع خاص"
      },
      {
        number: "02",
        category: "رؤية حاسوبية · حوسبة طرفية",
        name: "Z-orbit",
        summary: "مراقبة زحام المتاجر التي تحوّل بث الكاميرات إلى عدّ قابل للمراجعة للدخول والخروج.",
        details: [
          "يجمع كاشف YOLO26n بمعيار ONNX مع تتبع ByteTrack وشريط هيستريزيس لعدّ مرات العبور.",
          "يوفر عدّادات مباشرة وتحليلاً دفعياً وأحداثاً وتقارير من خلال خدمة FastAPI متعددة الكاميرات.",
          "موجّه للنشر على معالج CPU في Raspberry Pi، ونتيجة 13/13 جاءت من عينة معايرة صغيرة وليست دراسة دقة شاملة."
        ],
        video: { src: "assets/zorbit-demo-60s.mp4", poster: "assets/zorbit-reports.webp", shape: "wide" },
        videoCaption: "Z-ORBIT · عرض مباشر (60 ث)",
        tech: "PYTHON · ONNX RUNTIME · OPENCV · FASTAPI · REACT · SQLITE",
        diagram: ["CAMERA / VIDEO", "↓", "YOLO ONNX", "↓", "TRACK + COUNT", "↓", "EVENTS · REPORTS"],
        link: null,
        linkLabel: "مشروع خاص"
      },
      {
        number: "03",
        category: "RAG · برمجيات بحثية",
        name: "Research Pal",
        summary: "مساحة عمل للأوراق البحثية تُثبّت القراءة بمساعدة الذكاء الاصطناعي في المقاطع الأصلية.",
        details: [
          "يدعم الملخصات والبحث والدردشة والروابط بين الأوراق اعتماداً على النص المستخرج من ملفات PDF.",
          "يتحقق من الاقتباسات المولّدة مقابل النص الأصلي ويشير إلى الادعاءات والأرقام غير المدعومة.",
          "التطبيق المباشر والمستودع العام موصولان هنا."
        ],
        tech: "PYTHON · EXTRACTION PDF · RETRIEVAL · LLM WORKFLOWS",
        diagram: ["PAPER PDF", "↓", "TEXT + PASSAGES", "↓", "QUOTE CHECK", "↓", "REVIEWABLE NOTES"],
        image: {
          src: "assets/research-pal-mobile.webp",
          alt: "Research Pal على الهاتف، يعرض سؤالاً بحثياً ومساراً إرشادياً للعمل.",
          caption: "RESEARCH PAL · مسار الجوال",
          shape: "portrait"
        },
        link: "https://github.com/zarsalene/rsearch_pal",
        linkLabel: "مستودع الشيفرة"
      },
      {
        number: "04",
        category: "ذكاء تطبيقي · خلفية ERP",
        name: "توزيع الطلبات وتوريد الذكي",
        summary: "خدمات ERP لترتيب الطلبات وفق المخزون، والتوريد بين المستودعات، وأوصاف المنتجات بمساعدة الذكاء الاصطناعي.",
        details: [
          "أضاف نقاط FastAPI مدعومة بـ Gemini للتوزيع، والتوريد بين المستودعات، وأوصاف المنتجات المستخلصة من الصور.",
          "يحضّر حسابات المخزون في الخادم، مع تخزين مؤقت TTL واستدعاءات قاعدة بيانات متوازية في مسارات الطلبات.",
          "يتضمن اختبارات مركزة لاختيار التوزيع والتنبؤ."
        ],
        tech: "FASTAPI · GEMINI · LANGCHAIN · MYSQL · SQLALCHEMY",
        diagram: ["ERP ORDER + STOCK", "↓", "RULES · DATA", "↓", "AI DISPATCH", "↓", "REVIEWABLE ACTION"],
        link: null,
        linkLabel: "مشروع خاص"
      }
    ],
    skills: [
      ["الذكاء الاصطناعي والوكلاء", "LangGraph · LangChain · MCP · أنظمة متعددة الوكلاء · تطبيقات LLM"],
      ["الاسترجاع والبحث", "RAG · Qdrant · Elasticsearch · استرجاع دلالي ومعجمي"],
      ["الواجهة الخلفية", "Python · FastAPI · واجهات REST · WebSockets · Java"],
      ["البيانات والبنية التحتية", "PostgreSQL · MySQL · MongoDB · Redis · Docker · Kubernetes"],
      ["تعلم الآلة والرؤية الحاسوبية", "PyTorch · TensorFlow · YOLO · OpenCV · ONNX Runtime"],
      ["الهندسة", "CI/CD · GitLab CI · Jenkins · ArgoCD · Prometheus · Grafana"]
    ],
    experience: [
      ["مارس 2026 — حالياً", "رئيس قسم الذكاء الاصطناعي", "Microzed Solution", "يقود مهندسَي ذكاء اصطناعي لبناء وكلاء ذكيين لمنصة Zsolution ERP، من التحليلات العابرة للوحدات إلى سير العمل المحادثاتي.", "مقرين، تونس"],
      ["أكتوبر 2024 — مارس 2026", "مهندس ذكاء اصطناعي ومهندس حلول", "Artificial Insight", "قاد فريقاً من خمسة أفراد على PowerSale AI، وبنى مساعداً قائماً على LangGraph، واسترجاعاً هجيناً لكتيبات الدفاع المدني الكويتي، وخطّ معالجة متعدد اللغات لاستخلاصات الاجتماعات.", "تونس العاصمة، تونس"],
      ["فبراير 2024 — سبتمبر 2024", "مهندس تعلم آلة (متدرب)", "Artificial Insight", "طوّر التعرف على المركبات وقراءة لوحات الأرقام مع تتبع SORT باستخدام YOLOv8 وOpenCV وEasyOCR وTensorFlow وMongoDB.", "تونس العاصمة، تونس"],
      ["يناير 2021 — يونيو 2021", "مهندس DevOps (متدرب)", "Polina Group Holding", "أسهم في خطوط CI/CD والمراقبة باستخدام GitLab CI وJenkins وArgoCD وKubernetes وGrafana وPrometheus وSonarQube.", "تونس العاصمة، تونس"]
    ]
  }
};

/* ---------- Language selection ---------- */
const langOrder = ["en", "fr", "ar"];
let storedLang = null;
try { storedLang = localStorage.getItem("portfolio-lang"); } catch (error) {}
const browserLangs = (navigator.languages || [navigator.language || "en"]).join(",").toLowerCase();
const urlLang = new URLSearchParams(window.location.search).get("lang");
let lang = langOrder.find((code) => code === urlLang) || langOrder.find((code) => code === storedLang) || langOrder.find((code) => browserLangs.includes(code)) || "en";
let pack = content[lang];

/* ---------- i18n ---------- */
function applyStatic(ui) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = ui[element.getAttribute("data-i18n")];
    if (value != null) element.innerHTML = value;
  });
}

/* ---------- Renderers ---------- */
function renderProjects(l) {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  l.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    const details = project.details.map((item) => "<li>" + item + "</li>").join("");
    const links = [
      project.link
        ? '<a href="' + project.link + '" target="_blank" rel="noreferrer">' + project.linkLabel + ' ↗</a>'
        : "<span>" + project.linkLabel + "</span>"
    ].join("");

    const proof = project.proof
      ? '<aside class="micro-proof"><span class="proof-kicker">' + (project.proofKicker || "") + '</span><strong>' + project.proof[0] + '</strong><span class="proof-label">' + project.proof[1] + '</span><div><b>' + project.proof[2] + '</b><b>' + project.proof[3] + '</b></div></aside>'
      : "";

    let visual;
    if (project.video) {
      const video = project.video;
      const shape = video.shape === "portrait" ? "portrait-art" : "wide-art";
      const geometry = video.shape === "portrait" ? "single-video" : "wide-video";
      visual = '<div class="project-art screenshot-art ' + shape + '"><div class="art-grid" aria-hidden="true"></div><figure class="project-video ' + geometry + '"><video controls preload="none" playsinline poster="' + video.poster + '" aria-label="' + project.videoCaption + '"><source src="' + video.src + '" type="video/mp4"></video><figcaption>' + project.videoCaption + '</figcaption></figure>' + proof + "</div>";
    } else if (project.image) {
      const image = project.image;
      visual = '<div class="project-art screenshot-art ' + (image.shape === "portrait" ? "portrait-art" : "wide-art") + '"><div class="art-grid" aria-hidden="true"></div><figure class="project-screenshot ' + (image.shape === "portrait" ? "single-screenshot" : "wide-screenshot") + '"><img src="' + image.src + '" alt="' + image.alt + '" loading="lazy" decoding="async"><figcaption>' + image.caption + '</figcaption></figure></div>';
    } else {
      const diagram = project.diagram.map((line) => {
        if (line === "↓") return '<i aria-hidden="true">↓</i>';
        const accent = /AI|LANGGRAPH|YOLO|MCP|TRACK \+ COUNT/.test(line) ? " arch-accent" : "";
        return '<span class="' + accent.trim() + '">' + line + "</span>";
      }).join("");
      visual = '<div class="project-art system-art" role="img" aria-label="' + l.ui.flowLabel + project.diagram.filter((line) => line !== "↓").join(" → ") + '"><div class="art-grid" aria-hidden="true"></div><div class="architecture" aria-hidden="true">' + diagram + "</div></div>";
    }

    const clips = project.clips
      ? '<p class="clips-kicker">' + project.clipsKicker + '</p><div class="project-clips">' + project.clips.map((clip) =>
          '<figure class="project-clip"><video controls preload="none" playsinline poster="' + clip.poster + '" aria-label="' + clip.caption + '"><source src="' + clip.src + '" type="video/mp4"></video><figcaption>' + clip.caption + '</figcaption></figure>'
        ).join("") + '</div>'
      : "";

    card.innerHTML = '<div class="project-copy"><div class="project-top"><span class="project-number">' + project.number + " / 04</span><span class=\"project-category\">" + project.category + '</span></div><h3>' + project.name + '</h3><p class="project-summary">' + project.summary + '</p><ul class="project-details">' + details + '</ul>' + clips + '<p class="project-tech">' + project.tech + '</p><div class="project-links">' + links + "</div></div>" + visual;
    projectList.append(card);
  });
}

function renderSkills(l) {
  const skillsGrid = document.querySelector("#skills-grid");
  skillsGrid.innerHTML = "";
  l.skills.forEach(([label, items]) => {
    const group = document.createElement("div");
    group.className = "skill-group reveal";
    group.innerHTML = '<span class="skill-label">' + label + '</span><span class="skill-items">' + items + "</span>";
    skillsGrid.append(group);
  });
}

function renderExperience(l) {
  const experienceList = document.querySelector("#experience-list");
  experienceList.innerHTML = "";
  l.experience.forEach(([period, role, company, description, place]) => {
    const item = document.createElement("article");
    item.className = "experience-item reveal";
    item.innerHTML = '<span class="experience-period">' + period + '</span><div><h3>' + role + '</h3><span class="experience-company">' + company + '</span><p>' + description + '</p></div><span class="experience-place">' + place + "</span>";
    experienceList.append(item);
  });
}

/* ---------- Reveal on scroll ---------- */
function observeReveals() {
  const targets = document.querySelectorAll(".reveal:not(.is-visible)");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    targets.forEach((element) => observer.observe(element));
  } else {
    targets.forEach((element) => element.classList.add("is-visible"));
  }
}

/* ---------- Full render ---------- */
function renderAll() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = pack.meta.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", pack.meta.description);
  applyStatic(pack.ui);
  const socialRow = document.querySelector(".social-row");
  if (socialRow) socialRow.setAttribute("aria-label", pack.ui.socialAria);
  renderProjects(pack);
  renderSkills(pack);
  renderExperience(pack);
  document.querySelectorAll(".lang-switch button").forEach((button) => {
    const active = button.getAttribute("data-lang") === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  observeReveals();
}

/* ---------- Language switcher ---------- */
function setLanguage(next) {
  if (!content[next] || next === lang) return;
  lang = next;
  pack = content[lang];
  try { localStorage.setItem("portfolio-lang", next); } catch (error) {}
  renderAll();
}

document.querySelectorAll(".lang-switch button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.getAttribute("data-lang")));
});

/* ---------- Mobile menu ---------- */
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

/* ---------- Scroll progress ---------- */
const progress = document.querySelector(".scroll-progress");
if (progress) {
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    progress.style.width = value + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
  updateProgress();
}

renderAll();

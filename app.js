const portfolioData = {
  about: {
    name: "Suhira Balarajan",
    title: "Software Engineer | Full Stack Developer | Backend Specialist",
    subTitle: "BSc (Hons) Information Technology Graduate from University of Moratuwa",
    quote: "Designing digital products with passion, backend precision, & purpose",
    description: "Information Technology Graduate from University of Moratuwa with 6 months of production backend engineering experience at UK-based company Smartzi Lanka. Proficient in Java Spring Boot, React.js, AWS (DynamoDB, EC2, S3), microservices architectures, and modern DevOps practices. Seeking Software Engineer roles to contribute to scalable, high-impact solutions.",
    avatar: "assets/suhiraaaa.png",
    email: "balarajansuhira@gmail.com",
    phoneNumber: "+94 76 642 05 54",
    address: "Colombo, Sri Lanka",
    cvLink: "https://drive.google.com/file/d/1NYe3eNWbbDtp9WfdQBdM_s9azxOP57Hh/view?usp=sharing",
    githubUrl: "https://github.com/Suhira30",
    linkedinUrl: "https://www.linkedin.com/in/suhirabalarajan",
    hackerrankUrl: "https://www.hackerrank.com/profile/Suhira_B",
    mediumUrl: "https://medium.com/@suhirabalarajan",
    stats: [
      { number: "06", label: "Months Industry Backend Experience", sub: "Smartzi Lanka (UK-based)" },
      { number: "500+", label: "Daily Bookings Processed", sub: "GNET & Uber B2B Platform" },
      { number: "06", label: "Core Full-Stack & AI Projects", sub: "Microservices & Multimodal AI" },
      { number: "3.47", label: "Current CGPA", sub: "University of Moratuwa" }
    ]
  },
  skillsMarquee: [
    "JAVA", "SPRING BOOT", "REACT.JS", "PYTHON", "AWS DYNAMODB", "RESTFUL APIS", "MICROSERVICES",
    "SQL", "POSTGRESQL", "DOCKER", "JWT AUTH", "TAILWIND CSS", "FASTAPI", "INTELLIJ IDEA", "VS CODE",
    "CURSOR", "STITCH", "BEAUTIFULSOUP4", "GOOGLE GEMINI API", "NEURAL NETWORKS", "DEEP LEARNING",
    "PROMPT ENGINEERING", "AGILE/SCRUM", "TEST-DRIVEN DEVELOPMENT", "SYSTEM DESIGN", "OOP", "RAILWAY"
  ],
  skillsCategories: [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "C", "SQL"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Svelte", "Tailwind CSS", "Material-UI", "Bootstrap", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "RESTful APIs", "JWT Auth", "Microservices", "Exception Handling", "Web Scraping", "Third-party Integration"]
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MS SQL", "AWS DynamoDB", "Database Design", "Query Optimization"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (DynamoDB)", "CI/CD", "Version Control (Git, GitHub, Bitbucket)", "Railway"]
    },
    {
      category: "Tools",
      skills: ["IntelliJ IDEA", "VS Code", "Postman", "MySQL Workbench", "Figma", "Maven", "Cursor", "Stitch", "BeautifulSoup4"]
    },
    {
      category: "Methodologies",
      skills: ["Agile/Scrum", "OOP", "RESTful Design", "MVC Architecture", "Test-Driven Development"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["Neural Networks", "Deep Learning", "Feature Extraction", "Data Preprocessing", "Model Training", "LLM Integration", "Prompt Engineering"]
    },
    {
      category: "Core",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "System Design", "Code Review", "Technical Documentation"]
    }
  ],
  projects: [
    {
      id: "ai-website-audit",
      title: "AI-Powered Website Audit Tool",
      category: "AI / Full-Stack (Independent)",
      categoryKey: "ai",
      description: "Full-stack web application that scrapes webpage metrics using Python & BeautifulSoup4 and generates AI-driven SEO and UX insights using Google Gemini API.",
      longDescription: "• Built a full-stack web application that scrapes webpage metrics and generates AI-driven SEO and UX insights using Google Gemini API.\n• Extracted factual metrics (word count, headings, CTAs, links, alt text) using Python and BeautifulSoup4; designed structured prompts grounded in scraped data to produce specific, actionable recommendations.\n• Developed a REST API with FastAPI and a responsive React frontend; designed UI mockups in Stitch and implemented the full stack using Claude Code.\n• Deployed on Railway with end-to-end integration between the scraping pipeline and AI inference layer.",
      techStack: ["Python", "FastAPI", "BeautifulSoup4", "React", "Google Gemini API", "Stitch", "Railway"],
      image: "assets/AI-Powered Website Audit Tool.png",
      githubUrl: "https://github.com/Suhira30/Eight25-Assignment.git",
      featured: true,
      metrics: "Google Gemini API, Scraper Pipeline & Railway Deployment"
    },
    {
      id: "emotion-ai-fyp",
      title: "Multimodal Emotional Recognition System with Explainability (FYP || Group)",
      category: "AI / ML Research (FYP)",
      categoryKey: "ai",
      description: "Final Year Research Project: Multimodal emotion recognition integrating EEG, GSR (galvanic skin response), and facial video with bidirectional cross-modal attention neural networks.",
      longDescription: "• Built the physiological module of a multimodal emotion recognition system, outperforming all three classical baselines (SVM, Random Forest, and MLP) on EEG and GSR signals from the DEAP dataset.\n• Designed and implemented a bidirectional cross-modal attention network where EEG and GSR mutually attend to each other, enabling joint classification into 5 emotion classes (stress, calm, happy, sad, angry).\n• Preprocessed and windowed the DEAP dataset (32 subjects, 40 trials each)—baseline trimming, polyphase GSR resampling, z-score normalization, and 4-second non-overlapping windowing.\n• Evaluated under strict Leave-One-Subject-Out (LOSO) cross-validation across 32 folds with no data leakage; applied Model Soup (checkpoint averaging) for stable generalization.\n• Output feeds a standardized physiological prediction dictionary with signal quality flags into the system's gated fusion pipeline. Supervisor: Dr. Firdhous M.F.M.",
      techStack: ["Python", "PyTorch", "MNE", "SciPy", "SHAP", "React", "FastAPI", "DEAP Dataset"],
      image: "assets/Multimodal Emotion Recognition System.png",
      githubUrl: "https://github.com/Vanaiyan/MedOracle/branches",
      featured: true,
      metrics: "5 Emotion Classes, 32-Fold LOSO CV & Gated Fusion Pipeline"
    },
    {
      id: "labor-link",
      title: "Labor Hiring System",
      category: "Full-Stack Project Collaboration with AlphaCodes",
      categoryKey: "fullstack",
      description: "Level 2 software project in collaboration with AlphaCodes. Transparent labor hiring platform featuring admin management dashboard with graphs, widgets, review/rating system, and real-time notifications.",
      longDescription: "• Developed mobile and web applications enabling laborers and customers to access a transparent, efficient hiring platform.\n• Designed UI mockups and prototypes in Figma.\n• Developed the admin panel web application with visual representations, including graphs, widgets, and tables.\n• Implemented user account management, verification, review/rating systems, and real-time notifications.",
      techStack: ["React", "Material-UI", "Spring Boot", "Java", "MySQL", "Figma"],
      image: "assets/labour hiring system.png",
      frontendUrl: "https://github.com/Suhira30/LabourLink_WebAdmin/tree/Update_1",
      backendUrl: "https://github.com/T-Luxshan/LabourLinkBackend/tree/AdminNew_Suhira",
      featured: true,
      metrics: "Dual Platform & Interactive Admin Dashboard"
    },
    {
      id: "food-diary",
      title: "Food Diary - Restaurant Tracking Platform",
      category: "React / Full-Stack (Independent)",
      categoryKey: "fullstack",
      description: "Independent full-stack social platform for tracking restaurant visits with JWT security, role-based authorization (Pro/Free tiers), 15+ REST endpoints, and intelligent fuzzy duplicate detection.",
      longDescription: "• Built a full-stack social platform for tracking restaurant visits and food experiences. Implemented JWT authentication, role-based authorization (Pro/Free tiers), and 15+ secure REST API endpoints.\n• Developed intelligent duplicate detection using fuzzy matching algorithms to maintain database integrity.\n• Created a diary system with ratings, reviews, favorites, and automated restaurant rating aggregation.",
      techStack: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT Auth"],
      image: "assets/Food Diary - Restaurant Tracking Platform.png",
      frontendUrl: "https://github.com/Suhira30/food-diary-frontend",
      backendUrl: "https://github.com/Suhira30/food-diary-backend",
      featured: true,
      metrics: "15+ REST Endpoints, Fuzzy Matching & Pro/Free Tiers"
    },
    {
      id: "targaryen-tea",
      title: "TargaryenTea - E-Commerce Website",
      category: "Microservices (Group Project)",
      categoryKey: "microservices",
      description: "Distributed e-commerce storefront built with Spring Boot Microservices architecture (Eureka Service Discovery, API Gateway routing), integrated Stripe payment processing, and unit testing.",
      longDescription: "• Developed an e-commerce platform using microservices architecture with Eureka service discovery and API Gateway routing.\n• Built user-facing pages (home, product listing, service detail) using React and Material-UI.\n• Integrated Stripe payment gateway for secure transactions; conducted unit testing for critical services.",
      techStack: ["React", "Material-UI", "Spring Boot", "MySQL", "Eureka Server", "API Gateway", "Stripe"],
      image: "assets/TargaryenTea.png",
      frontendUrl: "https://github.com/T-Luxshan/TargaryenTeaFrontend",
      backendUrl: "https://github.com/T-Luxshan/TargaryenTeaBackend",
      featured: true,
      metrics: "Eureka Microservices Architecture & Stripe Gateway"
    },
    {
      id: "milk-checker",
      title: "Fresh Milk Quality Checker",
      category: "Hardware Project",
      categoryKey: "hardware",
      description: "Embedded 3-tank quality testing system using multi-sensor array (pH, temperature, gas, color sensors) driven by Arduino Mega 2560 and C programming.",
      longDescription: "• Designed an automated milk quality inspection hardware system.\n• Built around Arduino Mega 2560, evaluating milk purity using real-time pH, temperature, gas emission, and color sensors with custom IR quantity measurement interface.",
      techStack: ["Arduino Mega 2560", "C / Embedded C", "Sensors", "Hardware Design"],
      image: "assets/Fresh Milk Quality Checker.png",
      githubUrl: "https://github.com/Suhira30/L1_Hardware_project.git",
      featured: false,
      metrics: "Automated 3-Tank Multi-Sensor Testing"
    }
  ],
  services: [
    {
      id: "serv-1",
      name: "Full-Stack Web Engineering",
      startingPrice: "Production Ready",
      desc: "Custom web applications built with React.js, Next.js, FastAPI, and Java Spring Boot. Delivering responsive, high-performance interfaces backed by secure, scalable REST APIs.",
      image: "assets/Food Diary - Restaurant Tracking Platform.png",
      tags: ["React.js", "Spring Boot", "FastAPI", "REST APIs"]
    },
    {
      id: "serv-2",
      name: "Backend & Microservices Architecture",
      startingPrice: "Enterprise Grade",
      desc: "Designing microservices pipelines, Eureka service discovery, B2B API integrations (GNET, Uber), AWS DynamoDB secondary index tuning, and JWT security.",
      image: "assets/TargaryenTea.png",
      tags: ["Spring Boot", "AWS DynamoDB", "Microservices", "REST APIs"]
    },
    {
      id: "serv-3",
      name: "AI-Powered Web Automation & Auditing",
      startingPrice: "AI Solutions",
      desc: "Integrating LLMs (Google Gemini API) with web scraping (BeautifulSoup4) to build automated analysis tools, factual metric extractors, and intelligent prompt engines.",
      image: "assets/AI-Powered Website Audit Tool.png",
      tags: ["Google Gemini API", "FastAPI", "Python", "BeautifulSoup4"]
    },
    {
      id: "serv-4",
      name: "UI/UX Design & Prototyping",
      startingPrice: "Modern Agency Standard",
      desc: "Creating visually compelling dark-themed interfaces, interactive components, micro-animations, and Figma wireframes tailored for seamless user journeys.",
      image: "assets/labour hiring system.png",
      tags: ["Figma", "Tailwind CSS", "Material-UI", "Responsive Design"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      jobTitle: "Software Engineer Intern",
      company: "Smartzi Lanka (Pvt) Ltd",
      companyDetail: "UK-based B2B Transportation Platform",
      location: "Remote",
      period: "Feb 2025 – Aug 2025",
      type: "6 Months Production Internship",
      description: "Backend Software Engineer contributing to real-world B2B ground transportation integrations, high-scale ride booking, and cloud infrastructure deployment.",
      highlights: [
        "Worked as a Backend Software Engineer Intern on real-world B2B transportation integrations in a production environment.",
        "Developed and maintained backend services using Spring Boot, implementing secure REST APIs with token-based authentication, robust exception handling, and third-party integrations (GNET, Uber).",
        "Managed booking, trip, and webhook data using AWS DynamoDB with secondary index queries; gained exposure to EC2 and S3.",
        "Collaborated via Bitbucket for version control and CI workflows within a large-scale cloud deployment environment."
      ],
      skills: ["Spring Boot", "REST API", "AWS DynamoDB", "AWS EC2/S3", "Java", "GNET & Uber APIs", "Bitbucket CI/CD"]
    }
  ],
  education: [
    {
      id: "edu-1",
      number: "01",
      degree: "BSc Hons in Information Technology",
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      period: "Jun 2022 – 2026",
      grade: "CGPA: 3.47 / 4.0",
      details: "Information Technology graduate specializing in Software Engineering, Backend Systems, Web Technologies, Microservices, and AI/ML.",
      highlights: ["Final Year Research Project in Multimodal AI", "6 Months Production Backend Internship"]
    },
    {
      id: "edu-2",
      number: "02",
      degree: "G.C.E Advanced Level (A/L)",
      institution: "J/Vembadi Girls' High School",
      location: "Jaffna, Sri Lanka",
      period: "2017 – 2019",
      grade: "Biology: A, Chemistry: A, Physics: C | Z-Score: 1.7543",
      details: "Biological Science Stream - Outstanding academic performance qualifying for University of Moratuwa IT Faculty.",
      highlights: ["Biology: A, Chemistry: A, Physics: C", "Z-Score: 1.7543"]
    },
    {
      id: "edu-3",
      number: "03",
      degree: "G.C.E Ordinary Level (O/L)",
      institution: "J/Vembadi Girls' High School",
      location: "Jaffna, Sri Lanka",
      period: "2011 – 2016",
      grade: "Results: 9 A's",
      details: "Achieved maximum distinction results across all 9 subjects.",
      highlights: ["Straight 9 A's Distinction Performance"]
    }
  ],
  certifications: [
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "Amazon Web Services",
      url: "https://drive.google.com/file/d/169b9l08NA3dn6HafevSzQH8DNeliJvW7/view?usp=sharing",
      icon: "aws"
    },
    {
      title: "Meta Frontend Developer Professional Certificate",
      provider: "Coursera",
      modules: [
        { name: "HTML and CSS in Depth", url: "https://coursera.org/share/18676f3c7fa6cd35ba4c39ee6a50f9bb" },
        { name: "Programming with JavaScript", url: "https://coursera.org/share/253a27103196ffc5b31560a20ec99f77" },
        { name: "React Basics", url: "https://www.coursera.org/account/accomplishments/verify/8H2KFHX6FLAB" },
        { name: "Version Control", url: "https://coursera.org/share/254d4b831435955ccffbdba34cb7fc27" }
      ],
      icon: "meta"
    },
    {
      title: "Web Designer for Beginners",
      provider: "University of Moratuwa (CODL)",
      url: "https://drive.google.com/file/d/1IWn6Q714kUH1Npiswu5FzwGXUa8SqFwa/view?usp=sharing",
      icon: "uom"
    }
  ],
  badges: [
    { name: "Java Specialist", stars: 5, color: "gold", icon: "java", url: "https://www.hackerrank.com/profile/Suhira_B" },
    { name: "SQL Database Master", stars: 4, color: "silver", icon: "database", url: "https://www.hackerrank.com/profile/Suhira_B" }
  ],
  roles: [
    {
      organization: "SEDS Mora Media Team",
      role: "FIT Moments 23/24 - Content Writer",
      period: "2023 - 2024"
    },
    {
      organization: "AIESEC Colombo South",
      role: "AIESEC 23/24 - Marketing & PR Member",
      period: "2023 - 2024"
    },
    {
      organization: "IEEE Student Branch UoM",
      role: "IEEE 23/24 - Design Committee Member",
      period: "2023 - 2024"
    },
    {
      organization: "ISA Career Fair",
      role: "Career Fair 2024 - Company Coordinator",
      period: "2024"
    },
    {
      organization: "J/Vembadi Girls' High School",
      role: "School Prefect",
      period: "2016, 2017, 2018"
    }
  ],
  socialHandles: [
    { name: "GitHub", url: "https://github.com/Suhira30", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/suhirabalarajan", icon: "linkedin" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/Suhira_B", icon: "hackerrank" },
    { name: "Medium", url: "https://medium.com/@suhirabalarajan", icon: "medium" }
  ]
};

function startApp() {
    safeRun(initPreloader, 'Preloader');
    safeRun(initCustomCursor, 'CustomCursor');
    safeRun(initCurtainMenu, 'CurtainMenu');
    safeRun(initHeroTyping, 'HeroTyping');
    safeRun(renderEducationAccordion, 'EducationAccordion');
    safeRun(renderSkillsMarquee, 'SkillsMarquee');
    safeRun(renderSkillsCategories, 'SkillsCategories');
    safeRun(renderProjects, 'Projects');
    safeRun(initProjectFilters, 'ProjectFilters');
    safeRun(renderServices, 'Services');
    safeRun(renderExperience, 'Experience');
    safeRun(renderCredentials, 'Credentials');
    safeRun(renderSocials, 'Socials');
    safeRun(initContactForm, 'ContactForm');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

function safeRun(fn, name) {
    try {
        fn();
    } catch (e) {
        console.error(`[Portfolio Execution Error] ${name}:`, e);
    }
}

/* ----------------------------------------------------
   0. Initial Terminal Preloader (Emotion Agency Inspired)
---------------------------------------------------- */
function initPreloader() {
    const preloader = document.getElementById('initial-preloader');
    const percentEl = document.getElementById('preloader-percent-num');
    const steps = document.querySelectorAll('.preloader-step');
    if (!preloader || preloader.style.display === 'none' || preloader.classList.contains('opacity-0')) return;

    // Prevent background scrolling while loading
    document.body.style.overflow = 'hidden';

    let currentPercent = 0;
    const duration = 5000; // 5.0 seconds total animation time
    const intervalTime = 30;
    const totalTicks = Math.ceil(duration / intervalTime);
    let tick = 0;
    let dismissed = false;

    function dismissPreloader() {
        if (dismissed) return;
        dismissed = true;
        preloader.classList.add('opacity-0', 'pointer-events-none', '-translate-y-6');
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = '';
        }, 700);
    }

    function updateSteps(percent) {
        if (percentEl) {
            percentEl.textContent = `${percent}%`;
        }

        steps.forEach(step => {
            const min = parseInt(step.getAttribute('data-min'), 10);
            const max = parseInt(step.getAttribute('data-max'), 10);

            if (percent >= min && percent <= max) {
                step.className = 'preloader-step transition-all duration-200 py-1 px-2.5 rounded w-max bg-white text-deepDark font-bold shadow-lg scale-[1.02]';
            } else if (percent > max) {
                step.className = 'preloader-step transition-all duration-200 py-1 px-2.5 rounded w-max text-white/70 font-medium';
            } else {
                step.className = 'preloader-step transition-all duration-200 py-1 px-2.5 rounded w-max text-white/30';
            }
        });
    }

    const timer = setInterval(() => {
        tick++;
        const progress = tick / totalTicks;
        const easedProgress = Math.min(1, Math.sin((progress * Math.PI) / 2));
        currentPercent = Math.min(100, Math.floor(easedProgress * 100));

        updateSteps(currentPercent);

        if (tick >= totalTicks || currentPercent >= 100) {
            clearInterval(timer);
            updateSteps(100);
            setTimeout(dismissPreloader, 500);
        }
    }, intervalTime);

    // Guaranteed safety fallback after 6.5 seconds
    setTimeout(dismissPreloader, 6500);
}

/* ----------------------------------------------------
   1. Custom Glowing Cursor
---------------------------------------------------- */
function initCustomCursor() {
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorHalo = document.getElementById('custom-cursor');
    if (!cursorDot || !cursorHalo) return;

    let mouseX = 0, mouseY = 0;
    let haloX = 0, haloY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateHalo() {
        haloX += (mouseX - haloX) * 0.15;
        haloY += (mouseY - haloY) * 0.15;
        cursorHalo.style.left = `${haloX}px`;
        cursorHalo.style.top = `${haloY}px`;
        requestAnimationFrame(animateHalo);
    }
    animateHalo();
}

/* ----------------------------------------------------
   2. Curtain Menu Navigation Modal
---------------------------------------------------- */
function initCurtainMenu() {
    const menuBtn = document.getElementById('menu-toggle-btn');
    const menuBtnText = document.getElementById('menu-btn-text');
    const curtainMenu = document.getElementById('curtain-menu');

    if (!menuBtn || !curtainMenu) return;

    let isOpen = false;

    function openMenu() {
        isOpen = true;
        curtainMenu.classList.remove('clip-curtain-closed');
        curtainMenu.classList.add('clip-curtain-open');
        menuBtnText.textContent = 'Close';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        isOpen = false;
        curtainMenu.classList.remove('clip-curtain-open');
        curtainMenu.classList.add('clip-curtain-closed');
        menuBtnText.textContent = 'Menu';
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close curtain menu when clicking any nav link & smooth scroll
    document.querySelectorAll('.curtain-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                
                setTimeout(() => {
                    const targetEl = document.querySelector(targetId);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 200);
            }
        });
    });
}

/* ----------------------------------------------------
   3. Hero Role Typing Animation
---------------------------------------------------- */
function initHeroTyping() {
    const roleEl = document.getElementById('hero-typing-role');
    if (!roleEl) return;

    const roles = [
        "Software Engineer",
        "Full-Stack Developer",
        "Backend Specialist",
        "Problem Solver",
        "User-Focused Engineer",
        "Java Spring Boot Developer"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIdx];
        if (isDeleting) {
            roleEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            roleEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 90;

        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2200; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }
    type();
}

/* ----------------------------------------------------
   4. About & Education Accordion
---------------------------------------------------- */
function renderEducationAccordion() {
    const container = document.getElementById('education-accordion');
    if (!container) return;

    container.innerHTML = portfolioData.education.map((item, idx) => `
        <div class="education-item rounded-2xl bg-cardDark border border-borderSubtle overflow-hidden transition-all duration-300">
            <button class="accordion-header w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-cardDarkHover transition-colors" data-index="${idx}">
                <div class="flex items-center gap-4">
                    <span class="w-10 h-10 rounded-full bg-softCyan/10 text-softCyan font-mono text-sm font-bold flex items-center justify-center border border-softCyan/20">
                        ${item.number}
                    </span>
                    <div>
                        <h4 class="text-base md:text-lg font-display font-bold text-white">${item.degree}</h4>
                        <p class="text-xs text-mutedText font-mono">${item.institution} • ${item.period}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="hidden sm:inline-block px-3 py-1 rounded-full bg-deepDark border border-borderSubtle text-xs font-semibold text-accentLime">${item.grade}</span>
                    <i class="fa-solid fa-chevron-down text-mutedText transition-transform duration-300 chevron-icon"></i>
                </div>
            </button>
            <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out bg-deepDark/40">
                <div class="p-6 pt-2 border-t border-borderSubtle/50 space-y-3">
                    <p class="text-xs md:text-sm text-mutedText leading-relaxed">${item.details}</p>
                    <div class="flex flex-wrap gap-2">
                        ${(item.highlights || []).map(h => `
                            <span class="px-3 py-1 rounded-full bg-cardDark border border-borderSubtle text-[11px] font-mono text-softCyan flex items-center gap-1.5">
                                <i class="fa-solid fa-check text-[9px] text-accentLime"></i> ${h}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Toggle logic
    container.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.education-item');
            const content = item.querySelector('.accordion-content');
            const chevron = item.querySelector('.chevron-icon');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Close all
            container.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = '0px');
            container.querySelectorAll('.chevron-icon').forEach(ch => ch.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                content.style.maxHeight = `${content.scrollHeight + 40}px`;
                chevron.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Expand first by default
    const firstHeader = container.querySelector('.accordion-header');
    if (firstHeader) firstHeader.click();
}

/* ----------------------------------------------------
   5. Interactive Skills Marquee & Categories
---------------------------------------------------- */
function renderSkillsMarquee() {
    const row1 = document.getElementById('marquee-row-1');
    const row1Dup = document.getElementById('marquee-row-1-dup');
    const row2 = document.getElementById('marquee-row-2');
    const row2Dup = document.getElementById('marquee-row-2-dup');

    if (!row1 || !row2) return;

    const itemsHtml = portfolioData.skillsMarquee.map(skill => `
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cardDark/80 border border-borderSubtle text-sm font-display font-bold tracking-wider text-white/80 hover:text-softCyan hover:border-softCyan/50 transition-all cursor-default">
            <span class="w-2 h-2 rounded-full bg-softCyan"></span>
            ${skill}
        </div>
    `).join('');

    if (row1) row1.innerHTML = itemsHtml;
    if (row1Dup) row1Dup.innerHTML = itemsHtml;

    const itemsHtmlReverse = [...portfolioData.skillsMarquee].reverse().map(skill => `
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cardDark/80 border border-borderSubtle text-sm font-display font-bold tracking-wider text-white/80 hover:text-accentLime hover:border-accentLime/50 transition-all cursor-default">
            <span class="w-2 h-2 rounded-full bg-accentLime"></span>
            ${skill}
        </div>
    `).join('');

    if (row2) row2.innerHTML = itemsHtmlReverse;
    if (row2Dup) row2Dup.innerHTML = itemsHtmlReverse;
}

function renderSkillsCategories() {
    const grid = document.getElementById('skills-category-grid');
    if (!grid) return;

    grid.innerHTML = portfolioData.skillsCategories.map(cat => `
        <div class="p-6 rounded-3xl bg-cardDark border border-borderSubtle space-y-4 hover:border-softCyan/40 transition-all duration-300 card-glow-hover">
            <h3 class="text-base font-display font-bold text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-softCyan"></span>
                ${cat.category}
            </h3>
            <div class="flex flex-wrap gap-2">
                ${(cat.skills || []).map(s => `
                    <span class="px-3 py-1.5 rounded-xl bg-deepDark border border-borderSubtle text-xs font-mono text-mutedText hover:text-white hover:border-softCyan/30 transition-colors">
                        ${s}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ----------------------------------------------------
   6. Projects Section & Detail Modal Dialog
---------------------------------------------------- */
function formatDescriptionText(text) {
    if (!text) return '';
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const hasBullets = lines.some(l => l.startsWith('•') || l.startsWith('-'));

    if (hasBullets) {
        return `
            <ul class="space-y-3 my-4 border-l-2 border-softCyan/30 pl-4">
                ${lines.map(line => {
                    const cleanLine = line.replace(/^[•\-]\s*/, '');
                    return `
                        <li class="flex items-start gap-3 text-xs md:text-sm text-white/90 leading-relaxed">
                            <i class="fa-solid fa-circle-check text-softCyan mt-1 shrink-0 text-xs"></i>
                            <span>${cleanLine}</span>
                        </li>
                    `;
                }).join('')}
            </ul>
        `;
    }

    return lines.map(p => `<p class="text-sm md:text-base text-mutedText leading-relaxed mb-3">${p}</p>`).join('');
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.categoryKey === filter);

    grid.innerHTML = filtered.map(p => `
        <article class="project-card group rounded-3xl bg-cardDark border border-borderSubtle overflow-hidden space-y-4 card-glow-hover flex flex-col justify-between cursor-pointer" data-id="${p.id}">
            <div>
                <!-- Image Container -->
                <div class="aspect-video w-full overflow-hidden bg-deepDark relative">
                    <img src="${encodeURI(p.image)}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 rounded-full bg-deepDark/80 backdrop-blur-md border border-borderSubtle text-[11px] font-mono text-softCyan font-semibold">
                            ${p.category}
                        </span>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-6 space-y-3">
                    <h3 class="text-xl font-display font-bold text-white group-hover:text-softCyan transition-colors flex items-center justify-between">
                        <span>${p.title}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs text-mutedText group-hover:text-softCyan transition-colors"></i>
                    </h3>
                    <p class="text-xs text-mutedText leading-relaxed line-clamp-3">${p.description}</p>
                </div>
            </div>

            <!-- Footer Tech Tags -->
            <div class="px-6 pb-6 pt-2 flex flex-wrap items-center gap-1.5 border-t border-borderSubtle/50">
                ${(p.techStack || []).map(t => `
                    <span class="px-2.5 py-1 rounded-lg bg-deepDark border border-borderSubtle text-[10px] font-mono text-mutedText">
                        ${t}
                    </span>
                `).join('')}
            </div>
        </article>
    `).join('');

    // Attach Click Event for Modal Dialog
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const project = portfolioData.projects.find(p => p.id === id);
            if (project) openProjectModal(project);
        });
    });
}

function initProjectFilters() {
    const container = document.getElementById('project-filter-tabs');
    if (!container) return;

    const tabs = container.querySelectorAll('.filter-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-content-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="aspect-video w-full rounded-2xl overflow-hidden bg-deepDark border border-borderSubtle">
            <img src="${encodeURI(project.image)}" alt="${project.title}" class="w-full h-full object-cover">
        </div>

        <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <span class="text-xs font-mono text-softCyan uppercase tracking-widest block mb-1">${project.category}</span>
                    <h3 class="text-2xl md:text-4xl font-display font-extrabold text-white">${project.title}</h3>
                </div>
                ${project.metrics ? `
                    <div class="px-4 py-2 rounded-xl bg-deepDark border border-accentLime/30 text-accentLime text-xs font-mono">
                        ⚡ ${project.metrics}
                    </div>
                ` : ''}
            </div>

            <div class="pt-2">
                ${formatDescriptionText(project.longDescription)}
            </div>

            <div class="space-y-2 pt-2">
                <span class="text-xs font-mono text-white uppercase tracking-wider block">Technologies & Tools</span>
                <div class="flex flex-wrap gap-2">
                    ${(project.techStack || []).map(t => `
                        <span class="px-3 py-1.5 rounded-xl bg-deepDark border border-borderSubtle text-xs font-mono text-softCyan">
                            ${t}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-6 border-t border-borderSubtle">
                ${project.frontendUrl ? `
                    <a href="${project.frontendUrl}" target="_blank" class="px-6 py-3 rounded-full bg-softCyan text-deepDark font-display font-bold text-xs hover:bg-softCyan/90 transition-all flex items-center gap-2">
                        <i class="fa-brands fa-github text-sm"></i> ${project.backendUrl ? 'Frontend Repo' : 'GitHub Repository'}
                    </a>
                ` : ''}
                ${project.backendUrl ? `
                    <a href="${project.backendUrl}" target="_blank" class="px-6 py-3 rounded-full bg-cardDark border border-borderSubtle hover:border-softCyan text-white font-display font-bold text-xs transition-all flex items-center gap-2">
                        <i class="fa-brands fa-github text-sm"></i> Backend Repo
                    </a>
                ` : ''}
                ${project.githubUrl ? `
                    <a href="${project.githubUrl}" target="_blank" class="px-6 py-3 rounded-full bg-softCyan text-deepDark font-display font-bold text-xs hover:bg-softCyan/90 transition-all flex items-center gap-2">
                        <i class="fa-brands fa-github text-sm"></i> GitHub Repository
                    </a>
                ` : ''}
            </div>
        </div>
    `;

    modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';

    // Close Handler
    const closeBtn = document.getElementById('close-modal-btn');
    const closeModal = () => {
        modal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

/* ----------------------------------------------------
   7. Services Section
---------------------------------------------------- */
function renderServices() {
    const list = document.getElementById('services-list');
    if (!list) return;

    list.innerHTML = (portfolioData.services || []).map((s, idx) => `
        <div class="p-8 rounded-3xl bg-cardDark border border-borderSubtle hover:border-softCyan/40 transition-all duration-300 space-y-4 group">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <span class="text-xl font-mono font-bold text-softCyan">0${idx + 1}</span>
                    <h3 class="text-xl md:text-2xl font-display font-bold text-white group-hover:text-softCyan transition-colors">${s.name}</h3>
                </div>
                <span class="px-4 py-1.5 rounded-full bg-deepDark border border-borderSubtle text-xs font-mono text-accentLime font-semibold w-fit">
                    ${s.startingPrice}
                </span>
            </div>
            <p class="text-sm text-mutedText leading-relaxed">${s.desc}</p>
            <div class="flex flex-wrap gap-2 pt-2">
                ${(s.tags || []).map(t => `
                    <span class="px-3 py-1 rounded-full bg-deepDark text-[11px] font-mono text-mutedText">#${t}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ----------------------------------------------------
   8. Experience History Section
---------------------------------------------------- */
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = (portfolioData.experience || []).map((exp, idx) => `
        <div class="p-8 rounded-3xl bg-cardDark border border-borderSubtle space-y-6 relative overflow-hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSubtle pb-6">
                <div>
                    <span class="text-xs font-mono text-softCyan uppercase tracking-widest block mb-1">${exp.period} • ${exp.type}</span>
                    <h3 class="text-2xl font-display font-bold text-white">${exp.jobTitle}</h3>
                    <p class="text-sm text-mutedText font-mono">${exp.company} (${exp.companyDetail})</p>
                </div>
                <span class="px-4 py-1.5 rounded-full bg-deepDark border border-borderSubtle text-xs font-mono text-white font-semibold w-fit">
                    <i class="fa-solid fa-location-dot text-softCyan mr-1"></i> ${exp.location}
                </span>
            </div>

            <p class="text-sm text-mutedText leading-relaxed">${exp.description}</p>

            <ul class="space-y-3">
                ${(exp.highlights || []).map(h => `
                    <li class="flex items-start gap-3 text-xs md:text-sm text-white/90 leading-relaxed">
                        <i class="fa-solid fa-circle-check text-softCyan mt-1 shrink-0 text-xs"></i>
                        <span>${h}</span>
                    </li>
                `).join('')}
            </ul>

            <div class="flex flex-wrap gap-2 pt-2">
                ${(exp.skills || []).map(s => `
                    <span class="px-3 py-1 rounded-xl bg-deepDark border border-borderSubtle text-xs font-mono text-softCyan">
                        ${s}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ----------------------------------------------------
   9. Credentials & Socials
---------------------------------------------------- */
function renderCredentials() {
    const certList = document.getElementById('certifications-list');
    const badgeList = document.getElementById('badges-list');
    const roleList = document.getElementById('roles-list');

    if (certList) {
        certList.innerHTML = (portfolioData.certifications || []).map(c => `
            <div class="p-5 rounded-2xl bg-cardDark border border-borderSubtle space-y-3">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-deepDark border border-borderSubtle flex items-center justify-center text-softCyan text-lg">
                            <i class="fa-solid fa-certificate"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-display font-bold text-white">${c.title}</h4>
                            <p class="text-xs text-mutedText font-mono">${c.provider}</p>
                        </div>
                    </div>
                    ${c.url ? `
                        <a href="${c.url}" target="_blank" class="px-3.5 py-1.5 rounded-full bg-deepDark border border-softCyan/30 text-softCyan text-xs font-mono hover:bg-softCyan hover:text-deepDark transition-all flex items-center gap-1.5">
                            Certificate <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                    ` : ''}
                </div>
                ${c.modules ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-borderSubtle/40">
                        ${c.modules.map(m => `
                            <a href="${m.url}" target="_blank" class="px-3 py-2 rounded-xl bg-deepDark/80 border border-borderSubtle hover:border-softCyan/50 text-[11px] font-mono text-white/90 hover:text-softCyan transition-colors flex items-center justify-between gap-2">
                                <span>${m.name}</span>
                                <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-mutedText"></i>
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    if (badgeList) {
        badgeList.innerHTML = (portfolioData.badges || []).map(b => `
            <a href="${b.url || 'https://www.hackerrank.com/profile/Suhira_B'}" target="_blank" rel="noopener noreferrer" 
               class="p-4 rounded-2xl bg-cardDark border border-borderSubtle space-y-2 text-center hover:border-softCyan/50 hover:bg-cardDarkHover transition-all group block">
                <div class="w-10 h-10 mx-auto rounded-full bg-softCyan/10 border border-softCyan/30 flex items-center justify-center text-softCyan text-lg group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-award"></i>
                </div>
                <h4 class="text-xs font-display font-bold text-white group-hover:text-softCyan transition-colors flex items-center justify-center gap-1">
                    <span>${b.name}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-mutedText"></i>
                </h4>
                <div class="flex items-center justify-center gap-1 text-accentLime text-xs">
                    ${Array(b.stars || 5).fill('<i class="fa-solid fa-star"></i>').join('')}
                </div>
            </a>
        `).join('');
    }

    if (roleList) {
        roleList.innerHTML = (portfolioData.roles || []).map(r => `
            <div class="p-4 rounded-2xl bg-cardDark border border-borderSubtle flex items-center justify-between gap-4">
                <div>
                    <h4 class="text-xs font-mono text-softCyan uppercase">${r.organization}</h4>
                    <p class="text-sm font-display font-semibold text-white">${r.role}</p>
                </div>
                <span class="text-xs font-mono text-mutedText shrink-0">${r.period}</span>
            </div>
        `).join('');
    }
}

function renderSocials() {
    const curtainSocials = document.getElementById('curtain-socials');
    const footerSocials = document.getElementById('footer-social-links');

    const html = (portfolioData.socialHandles || []).map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" 
           class="px-4 py-2 rounded-full bg-cardDark border border-borderSubtle hover:border-softCyan hover:text-softCyan text-xs font-mono text-white transition-all">
            ${s.name} <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i>
        </a>
    `).join('');

    if (curtainSocials) curtainSocials.innerHTML = html;
    if (footerSocials) footerSocials.innerHTML = html;
}

/* ----------------------------------------------------
   10. Contact Form with Web3Forms & Animated Toast
---------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const toast = document.getElementById('toast-alert');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                btnText.textContent = 'Message Sent!';
                form.reset();
                showToast('Message Sent!', 'Thank you! Suhira will get back to you shortly.');
            } else {
                btnText.textContent = 'Error Sending';
                showToast('Form Error', 'Could not send message. Please email directly.');
            }
        } catch (err) {
            btnText.textContent = 'Error Sending';
            showToast('Network Error', 'Please send an email directly to balarajansuhira@gmail.com');
        } finally {
            setTimeout(() => {
                btnText.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 4000);
        }
    });

    function showToast(title, msg) {
        if (!toast) return;
        document.getElementById('toast-title').textContent = title;
        document.getElementById('toast-message').textContent = msg;

        toast.classList.remove('translate-y-24', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-24', 'opacity-0');
        }, 5000);
    }
}

export const portfolioData = {
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
    linkedinUrl: "https://www.linkedin.com/in/suhira-balarajan/",
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
    "JAVA", "SPRING BOOT", "REACT.JS", "FASTAPI", "PYTHON", "BEAUTIFULSOUP4", "GOOGLE GEMINI API",
    "TAILWIND CSS", "TYPESCRIPT", "AWS DYNAMODB", "REST APIS", "MYSQL", "POSTGRESQL", "TENSORFLOW",
    "PYTORCH", "MICROSERVICES", "JWT AUTH", "DOCKER", "FIGMA", "RAILWAY", "SYSTEM DESIGN"
  ],
  skillsCategories: [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "C", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Frontend",
      skills: ["Spring Boot", "React.js", "FastAPI", "Svelte", "Tailwind CSS", "Material-UI", "Bootstrap"]
    },
    {
      category: "Databases & Tools",
      skills: ["AWS DynamoDB", "MySQL", "PostgreSQL", "MS SQL", "Docker", "Maven", "Postman", "Git", "Bitbucket", "Figma"]
    },
    {
      category: "Cloud & Architecture",
      skills: ["AWS (EC2, S3, DynamoDB)", "Railway", "CI/CD Pipelines", "RESTful APIs", "Microservices", "JWT Security"]
    },
    {
      category: "AI, ML & Data Extraction",
      skills: ["Google Gemini API", "Python", "PyTorch", "TensorFlow", "BeautifulSoup4", "Deep Learning", "SHAP"]
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
    { name: "LinkedIn", url: "https://www.linkedin.com/in/suhira-balarajan/", icon: "linkedin" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/Suhira_B", icon: "hackerrank" },
    { name: "Medium", url: "https://medium.com/@suhirabalarajan", icon: "medium" }
  ]
};

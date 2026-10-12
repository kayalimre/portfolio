/* ==========================================================================
   PORTFOLIO DATA — edit only this file to update the site content.
   Client names are intentionally anonymised (industry + scope only).
   ========================================================================== */

const DATA = {
  personal: {
    name: "Ali Emre Kaya",
    title: "Senior Software Engineer | AI Native Architect",
    roles: [
      "Senior Software Engineer",
      "AI Native Architect",
      "Claude Certified Architect",
      "Java · Spring Boot · Microservices",
      "Cloud & GitOps Engineer",
    ],
    tagline:
      "I build and operate reliable Java / Spring Boot backends — from legacy modernisation to cloud-native platforms on Kubernetes — and use agentic AI tooling to ship them faster.",
    location: "Istanbul, Türkiye",
    avatar: "", // optional photo path, e.g. "assets/me.jpg" — initials are shown when empty
    initials: "AEK",
  },

  social: {
    github: "https://github.com/kayalimre",
    linkedin: "https://www.linkedin.com/in/ali-emre-kaya-95a0a797/",
  },

  about: {
    paragraphs: [
      "I'm a <strong>Senior Software Engineer and AI Native Architect</strong> with <strong>10 years in IT</strong> (since 2016), working across <strong>automotive, aviation, banking and manufacturing</strong> domains.",
      "Today I develop and operate a regulatory data platform for a global automotive manufacturer — <strong>Java 21, Spring Boot 3, PostgreSQL</strong> on <strong>Kubernetes</strong> with GitOps (ArgoCD, GitHub Actions) — and migrate services from on-premise to <strong>Azure</strong> and <strong>OCI</strong>.",
      "Before that I re-engineered legacy banking components into Spring Boot microservices, built supply-chain SaaS features and modernised airline agency platforms. I care about REST API design, testing and code quality (SonarQube, Fortify), and I'm a <strong>Certified Claude Architect</strong> who applies agentic AI tooling (Claude Code, MCP) in daily engineering work.",
    ],
    stats: [
      { value: "10+", label: "Years in IT" },
      { value: "7", label: "Major projects" },
      { value: "4", label: "Industries" },
    ],
    education: [
      { school: "Istanbul University", degree: "M.Sc., Intelligent Transportation Systems", period: "2019 — 2022" },
      { school: "Anadolu University", degree: "B.Sc., Computer Engineering", period: "2012 — 2017" },
      { school: "Cracow University of Technology", degree: "Erasmus exchange, Computer Science", period: "2014 — 2015" },
    ],
    certifications: [
      { name: "Claude Certified Architect – Foundations", issuer: "Anthropic", year: "Aug 2026", url: "https://www.credly.com/badges/df99e6dc-c8c2-4876-bb6c-d641dbf677c5", highlight: true },
      { name: "Oracle Summer School", issuer: "Experteam / Oracle", year: "Jul 2016" },
    ],
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Fluent (B2)" },
    ],
  },

  skills: [
    {
      group: "Backend",
      icon: "⚙️",
      items: ["Java 21 / 17 / 11", "Spring Boot 3", "Quarkus", "Payara", "Spring Batch", "Spring Security", "JPA / Hibernate", "JAX-RS / Jersey", "REST API design", "Microservices", "HATEOAS", "Maven"],
    },
    {
      group: "Cloud & DevOps",
      icon: "☁️",
      items: ["Docker", "Kubernetes", "ArgoCD / GitOps", "GitHub Actions", "OpenShift", "Azure", "Oracle Cloud (OCI)", "Keycloak", "Git"],
    },
    {
      group: "Data",
      icon: "🗄️",
      items: ["PostgreSQL", "Oracle SQL / PL-SQL", "MS SQL Server", "Flyway", "Data migration"],
    },
    {
      group: "Quality & Observability",
      icon: "🔍",
      items: ["TDD / Unit testing", "BDD / Cucumber", "SonarQube", "Fortify", "Spring AOP logging", "Kibana", "Graylog", "Swagger / OpenAPI", "Code review"],
    },
    {
      group: "AI Native Engineering",
      icon: "🤖",
      items: ["Claude Certified Architect", "Claude Code", "Model Context Protocol (MCP)", "Agentic workflows", "AI-native SDLC", "Prompt engineering"],
    },
    {
      group: "Frontend & Other",
      icon: "🖥️",
      items: ["Vue.js", "JavaScript", "HTML / CSS", "jQuery", "ASP.NET", "Scrum / Agile", "Jira / Confluence"],
    },
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "adesso Turkey",
      period: "Jan 2026 — Present",
      points: [
        "Backend architecture & development for a global automotive manufacturer's regulatory platform that generates vehicle-specific CO₂, consumption, range and official technical data under WLTP.",
        "Microservices with Java 11/17/21, Spring Boot, Quarkus and Payara; database versioning with Flyway for auditability and traceability.",
        "Docker, Kubernetes & GitOps (ArgoCD, GitHub Actions); migrating services to Azure and OCI; BDD/integration tests with Cucumber.",
        "Bringing an AI-native workflow to the team — Claude Code and MCP integrations for analysis, documentation and delivery.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "adesso Turkey",
      period: "Oct 2022 — Jan 2026",
      points: [
        "Spring Boot microservices for a supply-chain sampling SaaS connecting manufacturers, suppliers and laboratories.",
        "Code reviews, monitoring & observability on Azure and ownership of the release process in a Scrum team.",
      ],
    },
    {
      role: "Senior Software Engineer / Full Stack Developer",
      company: "adesso Turkey",
      period: "Aug 2021 — Nov 2022",
      points: [
        "Retail-banking transformation: legacy PL/SQL, C# and C / .NET logic re-engineered as Java 11 / Spring Boot microservices on OpenShift.",
        "New logging mechanism with Spring AOP and Kibana; TDD/BDD, Swagger docs; resolved Fortify and SonarQube findings.",
      ],
    },
    {
      role: "Full Stack Application Programmer",
      company: "Turkish Airlines Technology",
      period: "Jan 2021 — Aug 2021",
      points: [
        "Continued re-platforming of a ~15-year-old agency reservation application with Spring, REST and Vue.js.",
        "Application security (Fortify) and SonarQube bug fixing.",
      ],
    },
    {
      role: "Java Software Specialist",
      company: "Turkish Airlines",
      period: "Jun 2018 — Jan 2021",
      points: [
        "Built an agency sales-development platform with Spring, Hibernate, Spring Batch, Spring Security and Vue.js.",
        "Re-wrote the agency reservation web app with Jersey/REST and Vue.js; integrated Graylog and Swagger.",
      ],
    },
    {
      role: "Software Developer",
      company: "EKS Software Consultancy",
      period: "Nov 2017 — Jun 2018",
      points: [
        "Accounting systems with ASP.NET and MS SQL Server, including a mobile e-signature module.",
      ],
    },
    {
      role: "Internships",
      company: "PİTON R&D · KoçSistem",
      period: "2016 — 2017",
      points: ["Software development intern (PİTON R&D) and network support intern (KoçSistem)."],
    },
  ],

  projects: [
    {
      title: "Automotive Emissions & Technical Data Platform",
      domain: "Automotive",
      period: "2025 — Present",
      featured: true,
      description:
        "Core platform that computes vehicle-specific CO₂, consumption and range values under WLTP regulation and distributes them to downstream systems. Backend development, cloud migration, GitOps operations, identity-realm migration and production incident analysis.",
      tags: ["Java 21", "Spring Boot 3", "Quarkus", "PostgreSQL", "Kubernetes", "ArgoCD", "Flyway", "Cucumber", "Azure", "OCI"],
    },
    {
      title: "Supply-Chain Sampling SaaS",
      domain: "Manufacturing",
      period: "2022 — 2025",
      featured: true,
      description:
        "Digital platform connecting manufacturers, suppliers and laboratories to exchange sampling and test data in uniform formats. Feature development on a Spring Boot microservice architecture, code reviews, Azure monitoring and release ownership.",
      tags: ["Java 17", "Spring Boot 3", "Microservices", "HATEOAS", "Maven", "Azure"],
    },
    {
      title: "Digital Banking Backend Transformation",
      domain: "Banking",
      period: "2021 — 2022",
      featured: true,
      description:
        "Re-engineering of legacy PL/SQL, C# and C components into Java microservices for mobile and online banking channels, running on OpenShift with centralised logging.",
      tags: ["Java 11", "Spring Boot", "OpenShift", "Oracle SQL", "TDD", "Kibana"],
    },
    {
      title: "Agency Reservation Platform Re-write",
      domain: "Aviation",
      period: "2020 — 2021",
      description:
        "Transformed a ~15-year-old agency reservation web application into a modern REST-based application with a Vue.js frontend.",
      tags: ["Java 8", "JAX-RS", "Spring", "Vue.js", "Graylog", "Swagger"],
    },
    {
      title: "Agency Sales-Force Automation",
      domain: "Aviation",
      period: "2018 — 2020",
      description:
        "Platform that helps agencies offer more services for ticket sales, with automated batch services and a secure authentication layer.",
      tags: ["Java", "Hibernate", "Spring Batch", "Spring Security", "Vue.js", "Oracle SQL"],
    },
    {
      title: "Accounting System & Mobile E-Signature",
      domain: "Finance",
      period: "2017 — 2018",
      description:
        "Accounting software with an integrated e-signature module for signing documents from mobile phones.",
      tags: ["ASP.NET", "jQuery", "MS SQL"],
    },
  ],
};

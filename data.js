/* ==========================================================================
   PORTFOLIO DATA — edit only this file to update the site content.
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
    avatar: "", // optional photo path, e.g. "assets/me.jpg" — initials are shown when empty
    initials: "AEK",
  },

  social: {
    email: "kayaaliemre@yahoo.com",
    github: "https://github.com/kayalimre",
    linkedin: "https://www.linkedin.com/in/ali-emre-kaya-95a0a797/",
  },

  about: {
    paragraphs: [
      "I'm a <strong>Senior Software Engineer and AI Native Architect</strong> with <strong>10 years in IT</strong> (since 2016), working across <strong>automotive, aviation, banking and manufacturing</strong> domains.",
      "Today I work on <strong>BMW Group's EC&amp;OTD programme</strong>, developing and operating the WLTP emissions &amp; consumption platform — <strong>Java 21, Spring Boot 3, PostgreSQL</strong> on <strong>Kubernetes</strong> with GitOps (ArgoCD, GitHub Actions) — and migrate services from on-premise to <strong>Azure</strong> and <strong>OCI</strong>.",
      "Before that I built the <strong>material.one</strong> supply-chain platform, re-engineered <strong>ING Bank</strong>'s legacy banking components into Spring Boot microservices and modernised <strong>Turkish Airlines</strong>' agency platforms. I care about REST API design, testing and code quality (SonarQube, Fortify), and I'm a <strong>Certified Claude Architect</strong> who applies agentic AI tooling (Claude Code, MCP) in daily engineering work.",
    ],
    itSince: 2016, // stats (years, projects, industries) are computed from the data below
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

  // Grouped by employer; each role can reference the project(s) it was on.
  experience: [
    {
      company: "adesso Turkey",
      period: "Aug 2021 — Present",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Jan 2026 — Present",
          project: "BMW Group — EC&OTD (Emission & Consumption)",
          points: [
            "Backend architecture & development of systems that generate vehicle-specific CO₂, consumption, range and official technical data under WLTP.",
            "Microservices with Java 11/17/21, Spring Boot, Quarkus and Payara; Flyway-based schema versioning for auditability and traceability.",
            "Docker, Kubernetes & GitOps (ArgoCD, GitHub Actions); migrating services to Azure and OCI; BDD/integration tests with Cucumber.",
            "Driving an AI-native workflow in the team with Claude Code and MCP integrations for analysis, documentation and delivery.",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Oct 2022 — Jan 2026",
          project: "material.one",
          points: [
            "Spring Boot microservice development for a supply-chain sampling platform used by OEMs, suppliers and laboratories.",
            "Code reviews, monitoring & observability on Azure and ownership of the release process in a Scrum team.",
          ],
        },
        {
          title: "Senior Software Engineer · Full Stack Developer",
          period: "Aug 2021 — Nov 2022",
          project: "ING Bank — Transformation Project",
          points: [
            "Re-engineered legacy PL/SQL, C# and C / .NET logic as Java 11 / Spring Boot microservices for mobile & online banking, released on OpenShift.",
            "New logging mechanism with Spring AOP and Kibana; TDD/BDD and Swagger docs; resolved Fortify and SonarQube findings.",
          ],
        },
      ],
    },
    {
      company: "Turkish Airlines",
      period: "Jun 2018 — Aug 2021",
      roles: [
        {
          title: "Full Stack Application Programmer · Turkish Airlines Technology",
          period: "Jan 2021 — Aug 2021",
          project: "Quickres 5.0",
          points: [
            "Migrated pages of a ~15-year-old agency reservation application to a new Spring / REST / Vue.js stack and built new features.",
            "Application security (Fortify) and SonarQube bug fixing.",
          ],
        },
        {
          title: "Java Software Specialist",
          period: "Jun 2018 — Jan 2021",
          project: "ASGO · Quickres 5.0",
          points: [
            "Built the agency sales-development platform with Spring, Hibernate, Spring Batch, Spring Security and Vue.js.",
            "Started the Quickres 5.0 re-write with Jersey/REST and Vue.js; integrated Graylog and Swagger.",
          ],
        },
      ],
    },
    {
      company: "EKS Software Consultancy",
      period: "Nov 2017 — Jun 2018",
      roles: [
        {
          title: "Software Developer",
          period: "Nov 2017 — Jun 2018",
          project: "EdcSistem",
          points: ["Accounting systems with ASP.NET and MS SQL Server, including a mobile e-signature module."],
        },
      ],
    },
    {
      company: "Internships",
      period: "2016 — 2017",
      roles: [
        { title: "Software Developer Intern · PİTON R&D", period: "Sep 2017 — Oct 2017", points: [] },
        { title: "Network Support Intern · KoçSistem", period: "Aug 2016 — Sep 2016", points: [] },
      ],
    },
  ],

  projects: [
    {
      title: "EC&OTD — EVE Platform",
      client: "BMW Group",
      domain: "Automotive",
      period: "2025 — Present",
      role: "Software Engineer · AI Expert · DevOps",
      description:
        "EVE computes vehicle-specific CO₂, consumption and range values under WLTP and feeds downstream systems such as Official Technical Data and vehicle configuration. Backend development, cloud migration, GitOps releases, Keycloak realm migration and production incident analysis.",
      tags: ["Java 21", "Spring Boot 3", "Quarkus", "PostgreSQL", "Kubernetes", "ArgoCD", "Flyway", "Cucumber", "Azure", "OCI"],
    },
    {
      title: "material.one",
      client: "material.one AG",
      domain: "Manufacturing",
      period: "2022 — 2025",
      role: "Software Engineer",
      description:
        "Digitises industrial sampling across the supply chain: OEMs, suppliers and laboratories exchange test plans and results on one platform in uniform formats. Feature development on Spring Boot microservices, code reviews, Azure observability and release ownership.",
      tags: ["Java 17", "Spring Boot 3", "Microservices", "HATEOAS", "Maven", "Azure"],
    },
    {
      title: "ING Bank Transformation",
      client: "ING Bank",
      domain: "Banking",
      period: "2021 — 2022",
      role: "Senior Software Engineer",
      description:
        "Modernisation of the mobile and online banking backend: legacy PL/SQL, C# and C components re-engineered as Java microservices on OpenShift with centralised logging.",
      tags: ["Java 11", "Spring Boot", "OpenShift", "Oracle SQL", "TDD", "Kibana"],
    },
    {
      title: "Quickres 5.0",
      client: "Turkish Airlines",
      domain: "Aviation",
      period: "2020 — 2021",
      role: "Software Engineer",
      description:
        "Re-platforming of a ~15-year-old agency reservation web application into a modern REST-based application with a Vue.js frontend, global exception handling, Graylog and Swagger.",
      tags: ["Java 8", "JAX-RS", "Spring", "Vue.js", "Graylog", "Swagger"],
    },
    {
      title: "ASGO — Agency Sales Development",
      client: "Turkish Airlines",
      domain: "Aviation",
      period: "2018 — 2020",
      role: "Software Engineer",
      description:
        "Sales-force automation that helps agencies offer more services for ticket sales, with reusable Spring Batch jobs and a Spring Security authentication layer.",
      tags: ["Java", "Hibernate", "Spring Batch", "Spring Security", "Vue.js", "Oracle SQL"],
    },
    {
      title: "EdcSistem",
      client: "EKS Software Consultancy",
      domain: "Finance",
      period: "2017 — 2018",
      role: "Software Engineer · Analyst",
      description:
        "Accounting software with an integrated e-signature module for signing documents from mobile phones.",
      tags: ["ASP.NET", "jQuery", "MS SQL"],
    },
  ],
};

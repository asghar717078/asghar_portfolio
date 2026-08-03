export const profile = {
  name: "Syed Asghar Ali",
  role: "Backend Developer",
  tagline: "APIs, data models and automation systems that hold up in production.",
  intro:
    "Backend Developer with 2+ years of professional experience building scalable backend systems, REST APIs and enterprise automation with Python, Django, Django REST Framework, FastAPI, PostgreSQL, MySQL, Redis, Docker and Selenium.",
  email: "asgharialofficial20@gmail.com",
  phone: "+92 303 7170785",
  phoneHref: "tel:+923037170785",
  linkedin: "https://www.linkedin.com/in/syed-asghar-ali",
  github: "https://github.com/syed-asghar-ali",
  whatsapp: "https://wa.me/923037170785",
  location: "Bahawalpur, Punjab, Pakistan",
  resume: "/syed-asghar-ali-backend-developer.txt",
};

export const stats = [
  { value: "2+", label: "Years experience" },
  { value: "3", label: "Backend frameworks" },
  { value: "3", label: "Featured projects" },
  { value: "12+", label: "Portals automated" },
];

export const focusAreas = [
  "Clean Architecture",
  "REST API Development",
  "Performance Optimization",
  "Database Design",
  "Authentication & Authorization",
  "Automation",
  "Problem Solving",
  "Team Collaboration",
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "Code2",
    items: ["Python", "SQL"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Automation",
    icon: "Bot",
    items: ["Selenium", "Browser Automation", "Desktop Automation", "RPA Automation"],
  },
  {
    title: "DevOps & Tools",
    icon: "Container",
    items: ["Docker", "Git", "GitHub", "Linux", "VS Code", "PyCharm"],
  },
  {
    title: "API",
    icon: "ShieldCheck",
    items: ["REST API", "JWT Authentication", "Swagger / OpenAPI"],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Analytical Thinking"],
  },
] as const;

export const tools = [
  { name: "VS Code", icon: "Code2" },
  { name: "PyCharm", icon: "SquareTerminal" },
  { name: "Git", icon: "GitBranch" },
  { name: "GitHub", icon: "Github" },
  { name: "Docker", icon: "Container" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "MySQL", icon: "HardDrive" },
  { name: "Selenium WebDriver", icon: "Bot" },
] as const;

export const experience = [
  {
    role: "Backend Developer",
    company: "Enigmatix Software House",
    period: "2024 — Present",
    current: true,
    points: [
      "Developed scalable REST APIs using Django REST Framework and FastAPI",
      "Built secure authentication and authorization systems",
      "Designed and optimized PostgreSQL and MySQL databases",
      "Integrated third-party APIs and external services",
      "Improved backend performance and application reliability",
      "Collaborated with frontend developers and QA teams",
      "Fixed production bugs and implemented new backend features",
      "Worked with Git, GitHub, Docker, Redis and Linux environments",
      "Developed browser and desktop automation solutions using Selenium and Python",
    ],
  },
  {
    role: "Tele Sales Representative",
    company: "Zameen.com",
    period: "2022 — 2024",
    current: false,
    points: [
      "Specialized in effective customer communication and sales strategies",
      "Built long-term relationships with clients",
      "Consistently achieved sales targets",
      "Delivered exceptional customer service",
      "Helped drive business growth through strategic sales initiatives",
    ],
  },
  {
    role: "Customer Service Agent",
    company: "Citizen Contact Center",
    period: "2021 — 2022",
    current: false,
    points: [
      "Managed inbound customer calls professionally",
      "Resolved customer issues efficiently",
      "Maintained high customer satisfaction",
      "Demonstrated excellent communication and problem-solving skills",
    ],
  },
  {
    role: "Sales Service Agent",
    company: "Milvik (BIMA) Mobile Pakistan",
    period: "2020 — 2021",
    current: false,
    points: [
      "Achieved and exceeded monthly sales targets",
      "Delivered excellent customer service",
      "Built strong client relationships",
      "Contributed to revenue growth",
      "Maintained a consistent performance record",
    ],
  },
];

export const projects = [
  {
    name: "Royal Cloud",
    kind: "E-commerce Backend",
    org: "Enigmatix Software House",
    roleLabel: "Backend Developer",
    summary:
      "Designed and developed backend APIs for a production e-commerce platform — catalog, orders, inventory and payments behind a documented, permission-scoped API.",
    features: [
      "JWT Authentication",
      "Product Management",
      "Categories",
      "Orders",
      "Inventory",
      "Payments Integration",
      "Admin Dashboard",
      "API Documentation",
      "Performance Optimization",
    ],
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Docker"],
    snippet: `POST /api/v1/orders/
Authorization: Bearer <jwt>

201 Created
{
  "id": "ord_18F3",
  "status": "confirmed",
  "total": 249.00,
  "items": 3
}`,
  },
  {
    name: "TCN1 — Eligibility Verification Automation",
    kind: "Healthcare Automation",
    org: "Thoughtful.ai",
    roleLabel: "Automation Developer",
    summary:
      "Enterprise healthcare automation for insurance eligibility verification with Python and Selenium, driving portals including Valant, Availity, Optum, Cigna, UMR, GEHA, Carelon, Humana, Molina, Tufts and UPMC.",
    features: [
      "Browser automation using Selenium",
      "Multi-portal login automation",
      "Healthcare insurance verification",
      "Data extraction and processing",
      "Exception handling",
      "Automation optimization",
      "Production issue fixing",
      "Enterprise workflow automation",
    ],
    stack: ["Python", "Selenium", "Automation", "REST APIs", "Healthcare Integrations"],
    snippet: `$ python -m tcn1.verify --queue daily
[portal] availity   login ok   1.4s
[portal] optum      eligible   2.1s
[portal] cigna      eligible   1.9s
[export] results.csv  42 rows  0 failed`,
  },
  {
    name: "LGH1 — Claim Processing AI Agent",
    kind: "AI Automation Agent",
    org: "Thoughtful.ai",
    roleLabel: "Automation Developer",
    summary:
      "AI-powered claim processing automation that ingests and processes healthcare claims end to end, with deployment automation and ongoing production maintenance.",
    features: [
      "AI agent development",
      "Claim processing automation",
      "Python development",
      "Automation workflow design",
      "Deployment automation",
      "Production maintenance",
    ],
    stack: ["Python", "Automation", "AI Agent", "Selenium", "Git", "CI/CD"],
    snippet: `agent: claim-processor
step 1  parse.claim        ok
step 2  validate.payer     ok
step 3  submit.portal      ok
step 4  reconcile.status   ok
processed 128 claims / run`,
  },
];

export const education = [
  {
    degree: "MS in Information Technology",
    school: "University of Education, Lahore",
    period: "2018 — 2020",
    detail: "Specialization in Information Technology and Software Development.",
  },
  {
    degree: "BSc",
    school: "The Islamia University of Bahawalpur",
    period: "2016 — 2018",
    detail: "Relevant coursework in Computer Science and Information Systems.",
  },
];

export const languages = [
  { name: "Urdu", level: "Fluent" },
  { name: "Saraiki", level: "Fluent" },
  { name: "Punjabi", level: "Fluent" },
  { name: "English", level: "Professional working proficiency" },
];

export const certifications = [
  {
    title: "Experience Letter — Enigmatix Software House",
    detail: "Backend Developer",
  },
  {
    title: "Experience Letter — Zameen.com",
    detail: "Tele Sales Representative",
  },
];

export const whyHireMe = [
  {
    title: "Clean Architecture",
    icon: "Sparkles",
    body: "Layered services, thin views and single-responsibility modules so features land without breaking neighbours.",
  },
  {
    title: "REST API Development",
    icon: "Plug",
    body: "Predictable DRF and FastAPI contracts, versioning and Swagger/OpenAPI docs your frontend team can trust.",
  },
  {
    title: "Database Design",
    icon: "Database",
    body: "Normalised PostgreSQL and MySQL schemas, the right indexes, and queries profiled down to milliseconds.",
  },
  {
    title: "Authentication & Authorization",
    icon: "Layers",
    body: "JWT auth, refresh rotation and role-based permissions applied consistently across every endpoint.",
  },
  {
    title: "Automation",
    icon: "Bot",
    body: "Selenium browser and desktop automation for enterprise workflows — scheduled, retried and monitored.",
  },
  {
    title: "Performance Optimization",
    icon: "Gauge",
    body: "Redis caching, pagination budgets and N+1 elimination keep endpoints fast as the dataset grows.",
  },
  {
    title: "Problem Solving",
    icon: "Puzzle",
    body: "Reproduce, isolate and fix the category — not just the ticket in front of me.",
  },
  {
    title: "Team Collaboration",
    icon: "Users",
    body: "Clear PRs, useful reviews and documentation that keeps frontend, QA and stakeholders aligned.",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Hire Me", href: "#why-hire-me" },
  { label: "Contact", href: "#contact" },
];

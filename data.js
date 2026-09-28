/* ============================================
   PORTFOLIO DATA — Static JS Arrays
   ============================================ */

const OWNER = {
  name: "Zara Voss",
  title: "Creative Developer & Digital Architect",
  location: "Berlin, DE",
  available: true,
  email: "hello@zaravoss.dev",
  socials: {
    github: "github.com/zaravoss",
    dribbble: "dribbble.com/zaravoss",
    linkedin: "linkedin.com/in/zaravoss",
    twitter: "@zaravoss"
  },
  stats: [
    { value: "54", label: "Projects Shipped" },
    { value: "6yr", label: "In The Field" },
    { value: "38", label: "Clients Served" },
    { value: "12", label: "Awards Won" }
  ]
};

/* ─────────────── PROJECTS ─────────────── */
const projects = [
  {
    id: 1,
    title: "Stratum",
    category: "Web App",
    year: "2024",
    featured: true,
    desc: "Enterprise design system platform with live component playground, token management, and team collaboration tools. Used by 200+ designers daily.",
    tech: ["React", "TypeScript", "Storybook", "Figma API", "PostgreSQL"],
    color: "#FF5C1A",
    result: "↑ 60% faster design-to-dev handoff"
  },
  {
    id: 2,
    title: "Meridian",
    category: "FinTech",
    year: "2024",
    featured: true,
    desc: "Wealth management dashboard for a Series-B startup — real-time portfolio tracking, AI-driven insights, and custom charting engine.",
    tech: ["Vue 3", "D3.js", "Python", "FastAPI", "TimescaleDB"],
    color: "#C8FF00",
    result: "↑ 3.2M ARR within 8 months"
  },
  {
    id: 3,
    title: "Hollow",
    category: "Creative Dev",
    year: "2024",
    featured: true,
    desc: "Immersive WebGL music experience for an independent artist — procedural audio visualizations, reactive 3D environments, 40k+ plays.",
    tech: ["Three.js", "WebGL", "GSAP", "Web Audio API", "Vercel"],
    color: "#A855F7",
    result: "Featured on Awwwards SOTD"
  },
  {
    id: 4,
    title: "Fieldwork",
    category: "Mobile",
    year: "2023",
    featured: false,
    desc: "Offline-first field data collection app for environmental researchers — GPS tagging, media capture, and auto-sync on reconnect.",
    tech: ["React Native", "SQLite", "MapBox", "AWS S3", "Expo"],
    color: "#06B6D4",
    result: "1200+ active field researchers"
  },
  {
    id: 5,
    title: "Cipher",
    category: "SaaS",
    year: "2023",
    featured: false,
    desc: "Zero-knowledge encrypted file sharing platform with time-limited links, audit logs, and enterprise SSO support.",
    tech: ["Next.js", "Rust", "WebCrypto API", "Cloudflare Workers", "Redis"],
    color: "#FF5C1A",
    result: "SOC-2 certified at launch"
  },
  {
    id: 6,
    title: "Rhizome",
    category: "Data Viz",
    year: "2023",
    featured: false,
    desc: "Interactive knowledge graph for academic research — visualize citation networks across 2M+ papers with custom force-layout engine.",
    tech: ["D3.js", "GraphQL", "Neo4j", "Python", "WebGL"],
    color: "#C8FF00",
    result: "Used by 4 university labs"
  },
  {
    id: 7,
    title: "Sable",
    category: "E-Commerce",
    year: "2022",
    featured: false,
    desc: "High-fashion e-commerce redesign with AR try-on, curator-style editorial layout, and frictionless checkout flow.",
    tech: ["Next.js", "Shopify", "WebXR", "Sanity CMS", "Stripe"],
    color: "#A855F7",
    result: "↑ 47% conversion rate"
  },
  {
    id: 8,
    title: "Pulse",
    category: "HealthTech",
    year: "2022",
    featured: false,
    desc: "Wearable data aggregation and clinical dashboard — HIPAA-compliant, real-time biometric alerts, and doctor-patient messaging.",
    tech: ["React", "Node.js", "InfluxDB", "AWS", "FHIR API"],
    color: "#06B6D4",
    result: "HIPAA certified in 6 weeks"
  }
];

/* ─────────────── PORTFOLIO ─────────────── */
const portfolio = [
  {
    id: 1,
    title: "Nova Brand System",
    category: "Branding",
    year: "2024",
    size: "large",
    desc: "Full visual identity for a deep-tech AI company — wordmark, icon system, motion principles, and a 72-page brand guidelines document.",
    tools: ["Figma", "Illustrator", "After Effects"],
    color: "#FF5C1A"
  },
  {
    id: 2,
    title: "EchoForm UI",
    category: "UI Design",
    year: "2024",
    size: "small",
    desc: "300+ component design system for a SaaS form builder. Covers 5 themes, full dark mode, and WCAG 2.1 AA accessibility specs.",
    tools: ["Figma", "Storybook"],
    color: "#C8FF00"
  },
  {
    id: 3,
    title: "Dusk Landing",
    category: "Web Design",
    year: "2024",
    size: "small",
    desc: "Award-winning landing page for a climate-tech startup. Scroll-driven animations, custom WebGL background, 98 Lighthouse score.",
    tools: ["Figma", "GSAP", "Three.js"],
    color: "#A855F7"
  },
  {
    id: 4,
    title: "Cortex Dashboard",
    category: "Dashboard",
    year: "2023",
    size: "large",
    desc: "ML ops monitoring interface for a model deployment platform — 30+ chart types, custom alert builder, real-time log streaming.",
    tools: ["Figma", "D3.js", "Principle"],
    color: "#06B6D4"
  },
  {
    id: 5,
    title: "Trek App",
    category: "Mobile",
    year: "2023",
    size: "small",
    desc: "Hiking companion app redesign. Offline-first maps, trail difficulty AI scoring, and community route sharing.",
    tools: ["Figma", "ProtoPie", "Mapbox"],
    color: "#FF5C1A"
  },
  {
    id: 6,
    title: "Luminary Kit",
    category: "Design System",
    year: "2022",
    size: "large",
    desc: "400-component Figma kit with Auto Layout, variables for theming, and a corresponding React component library.",
    tools: ["Figma", "React", "Chromatic"],
    color: "#C8FF00"
  }
];

/* ─────────────── SERVICES ─────────────── */
const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    icon: "⟨/⟩",
    price: "From $2,400",
    timeline: "2–8 weeks",
    highlight: false,
    accent: "#FF5C1A",
    desc: "End-to-end web application development — from database schema to pixel-polished UI, deployed and monitored.",
    features: [
      "React, Next.js, Vue, or Svelte frontend",
      "Node.js / Python / Rust API design",
      "Database architecture & query optimization",
      "Lighthouse 95+ on all metrics",
      "CI/CD, Docker, cloud deployment",
      "6-month support retainer included"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "◈",
    price: "From $1,800",
    timeline: "1–4 weeks",
    highlight: true,
    accent: "#C8FF00",
    desc: "Research-led, pixel-precise design — from messy brief to production-ready Figma handoff with a full design system.",
    features: [
      "User research & competitor audit",
      "Information architecture & user flows",
      "High-fidelity UI in Figma",
      "Interactive prototype for testing",
      "Design system + token documentation",
      "Developer handoff with specs & assets"
    ]
  },
  {
    id: 3,
    title: "Creative Development",
    icon: "✦",
    price: "From $3,000",
    timeline: "2–6 weeks",
    highlight: false,
    accent: "#A855F7",
    desc: "WebGL, Three.js, and GSAP — browser experiences that stop thumbs and win awards. For brands that refuse ordinary.",
    features: [
      "WebGL / Three.js 3D environments",
      "GSAP scroll & timeline animations",
      "Particle systems & shader writing",
      "Audio-reactive experiences",
      "Performance-first (60fps target)",
      "Awwwards-submission ready"
    ]
  },
  {
    id: 4,
    title: "Brand Identity",
    icon: "⬡",
    price: "From $1,200",
    timeline: "1–3 weeks",
    highlight: false,
    accent: "#06B6D4",
    desc: "Visual identities built to last — strategic, distinctive, and ready to stretch across every surface.",
    features: [
      "Logo design (5 directions, 3 revision rounds)",
      "Color system & typography scale",
      "Brand guidelines document (PDF)",
      "Motion & animation principles",
      "Social media & digital asset kit",
      "All source files delivered"
    ]
  }
];

/* ─────────────── TESTIMONIALS ─────────────── */
const testimonials = [
  {
    name: "Cleo Andersen",
    role: "CPO, Meridian",
    quote: "Zara doesn't just build what you describe — she builds what you meant. The product shipped better than our own internal spec.",
    rating: 5
  },
  {
    name: "Kai Obrecht",
    role: "Founder, Hollow",
    quote: "I gave her a track and a feeling. She gave me a living, breathing world. The experience has been viewed 40,000 times.",
    rating: 5
  },
  {
    name: "Priya Sen",
    role: "Design Lead, Stratum",
    quote: "Working with Zara saved our team months. The design system she built became the foundation for everything we shipped that year.",
    rating: 5
  }
];

/* ─────────────── SKILLS ─────────────── */
const skills = [
  { name: "React / Next.js", level: 96, cat: "Frontend" },
  { name: "TypeScript", level: 93, cat: "Language" },
  { name: "Node.js / Express", level: 90, cat: "Backend" },
  { name: "UI / UX Design", level: 92, cat: "Design" },
  { name: "Figma", level: 97, cat: "Design" },
  { name: "Three.js / WebGL", level: 85, cat: "Creative" },
  { name: "PostgreSQL / MongoDB", level: 84, cat: "Database" },
  { name: "Docker / DevOps", level: 79, cat: "Infra" }
];

/* ─────────────── EXPERIENCE ─────────────── */
const experience = [
  {
    year: "2022 — Now",
    role: "Independent Creative Developer",
    company: "Self / Studio Voss",
    desc: "Building digital products and immersive experiences for startups, agencies, and creative studios worldwide. Clients across EU, US, and APAC."
  },
  {
    year: "2020 — 2022",
    role: "Senior Frontend Engineer",
    company: "Lateral Studio, Berlin",
    desc: "Led frontend architecture for a SaaS analytics platform (0→1). Established component-first practices; reduced bundle size 44%, improved TTI by 2.1s."
  },
  {
    year: "2019 — 2020",
    role: "UI Engineer & Designer",
    company: "Fable Digital Agency",
    desc: "Dual role across design and engineering. Shipped 14 client projects; authored the internal design system that cut project kickoff time by 60%."
  },
  {
    year: "2018 — 2019",
    role: "Frontend Developer",
    company: "Seed Ventures, Berlin",
    desc: "Built MVPs for 6 early-stage startups — full ownership from architecture to App Store. Two products still in active use."
  }
];
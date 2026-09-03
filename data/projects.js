// ⚠️ Ye sample/placeholder projects hain — apne real projects ke details se replace karna.
// Har project ka "slug" hi uska URL banata hai: /work/<slug>
// challenge/approach/highlights milke ek proper case-study structure banate hain (Challenge → Approach → Result)

export const PROJECTS = [
  {
    slug: "commerce-platform-rebuild",
    title: "Commerce Platform Rebuild",
    category: "Full-Stack",
    tag: "web",
    year: "2026",
    accent: "#498a9f",
    role: "Full-Stack Developer",
    duration: "6 weeks",
    description:
      "Ek purani, slow e-commerce site ko ground-up rebuild kiya — modern stack pe migrate karke load time 70% tak kam kiya, aur checkout flow ko completely redesign kiya.",
    challenge:
      "Client ki purani e-commerce site ek outdated stack pe thi — page loads 4+ second lete the, checkout drop-off high tha, aur inventory manually update karni padti thi. Peak traffic pe site slow ho jaati thi.",
    approach:
      "Poori site ko Next.js pe rebuild kiya, checkout flow ko simplify kiya, aur admin dashboard se live inventory sync banaya. Migration staged tarike se hui taaki live sales pe koi asar na pade.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    highlights: [
      "Page load time 4.2s se 1.1s tak laaya",
      "Checkout conversion rate 18% improve hua",
      "Fully responsive, mobile-first rebuild",
      "Admin dashboard se real-time inventory sync",
    ],
  },
  {
    slug: "interactive-3d-product-configurator",
    title: "Interactive 3D Product Configurator",
    category: "WebGL / Three.js",
    tag: "3d",
    year: "2026",
    accent: "#6fc7dd",
    role: "3D / Frontend Engineer",
    duration: "4 weeks",
    description:
      "Ek real-time 3D product configurator banaya jisme user colors, materials, aur parts live customize kar sakta hai — koi page reload nahi, sab kuch browser me hi render hota hai.",
    challenge:
      "Client apne product ki har variant ke liye alag-alag static photos khinchwaate the — mehenga aur slow process, aur naya color/material add hote hi poora photoshoot dobara karna padta tha.",
    approach:
      "Ek real-time 3D configurator banaya jo browser me directly render hota hai — material/color swap instant hai, koi naya photoshoot ki zaroorat nahi, aur mobile GPU ke liye bhi optimize kiya.",
    stack: ["React", "Three.js", "React Three Fiber", "GLSL"],
    highlights: [
      "Real-time material/color swapping",
      "Mobile GPU ke liye bhi optimized (60fps)",
      "Custom lighting rig for product photography look",
      "Export-to-image feature add kiya",
    ],
  },
  {
    slug: "saas-dashboard-analytics",
    title: "SaaS Dashboard & Analytics",
    category: "Full-Stack",
    tag: "web",
    year: "2025",
    accent: "#498a9f",
    role: "Full-Stack Developer",
    duration: "8 weeks",
    description:
      "Ek B2B SaaS product ke liye poora analytics dashboard banaya — real-time charts, custom report-builder, aur role-based access control ke saath.",
    challenge:
      "Product ke paas customer data toh tha, par usse dikhane ka koi tareeka nahi tha — team manually spreadsheets bana ke clients ko report bhejti thi, jisme din lag jaate the.",
    approach:
      "Ek real-time analytics dashboard banaya jisme drag-and-drop report builder, live data streaming, aur role-based multi-tenant access hai — clients apni khud ki reports bana sakte hain.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Recharts", "Redis"],
    highlights: [
      "Real-time data streaming with WebSockets",
      "Custom report-builder (drag & drop)",
      "Role-based multi-tenant access system",
      "Sub-200ms query response time",
    ],
  },
  {
    slug: "real-time-booking-system",
    title: "Real-Time Booking System",
    category: "Backend / API",
    tag: "backend",
    year: "2025",
    accent: "#6fc7dd",
    role: "Backend Engineer",
    duration: "5 weeks",
    description:
      "Ek high-concurrency booking/reservation system — double-booking prevent karne ke liye custom locking mechanism aur real-time availability sync.",
    challenge:
      "Existing booking system peak hours me double-bookings kar deta tha — do log ek hi slot book kar paate the, jisse manual cancellations aur customer complaints badh rahi thi.",
    approach:
      "Ek custom locking mechanism design kiya jo high-concurrency ke waqt bhi zero double-booking guarantee karta hai, saath me real-time slot availability aur automated confirmations.",
    stack: ["Node.js", "PostgreSQL", "Redis", "WebSockets"],
    highlights: [
      "Zero double-booking under high concurrency",
      "Real-time slot-availability updates",
      "Automated email/SMS confirmations",
      "Horizontal scaling ready architecture",
    ],
  },
  {
    slug: "brand-portfolio-site",
    title: "Brand Portfolio Site",
    category: "Frontend / Design",
    tag: "web",
    year: "2025",
    accent: "#498a9f",
    role: "Frontend Developer",
    duration: "3 weeks",
    description:
      "Ek design-led portfolio site — scroll-driven animations, custom typography system, aur ek distinctive visual identity ke saath.",
    challenge:
      "Client ki purani portfolio site generic template jaisi lagti thi — na koi distinctive visual identity thi, na performance achhi thi, aur naya kaam add karna mushkil tha.",
    approach:
      "Custom scroll-triggered animation system se ek ground-up distinctive design banaya, performance-first approach ke saath, aur CMS integrate kiya taaki content easily update ho sake.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    highlights: [
      "Custom scroll-triggered animation system",
      "98+ Lighthouse performance score",
      "Fully accessible (WCAG AA compliant)",
      "CMS-integrated content editing",
    ],
  },
  {
    slug: "internal-tooling-suite",
    title: "Internal Tooling Suite",
    category: "Full-Stack / Automation",
    tag: "backend",
    year: "2024",
    accent: "#6fc7dd",
    role: "Full-Stack Developer",
    duration: "10 weeks",
    description:
      "Ek company ke internal operations ke liye custom tooling suite — manual Excel-based workflows ko automate karke daily 4+ hours bachaaye.",
    challenge:
      "Team roz manually Excel sheets update karti thi, cross-check karti thi, aur alag-alag logon ko email karti thi — poora process error-prone aur slow tha, roz kaafi ghante isi me nikal jaate the.",
    approach:
      "Ek custom internal tool banaya jo poore workflow ko automate karta hai — permission-based access, audit logs, aur Docker se easy deployment ke saath.",
    stack: ["Node.js", "React", "PostgreSQL", "Docker"],
    highlights: [
      "Manual workflows fully automated",
      "Daily 4+ hours ki team time bachai",
      "Custom permission & audit-log system",
      "Dockerized deployment pipeline",
    ],
  },
  {
    slug: "ai-assisted-content-engine",
    title: "AI-Assisted Content Engine",
    category: "Backend / AI",
    tag: "backend",
    year: "2024",
    accent: "#6fc7dd",
    role: "Backend Engineer",
    duration: "6 weeks",
    description:
      "Ek AI-powered content generation pipeline — LLM APIs ko custom business logic ke saath integrate karke automated, on-brand content banaya.",
    challenge:
      "Content team har piece manually likh rahi thi — brand voice consistent rakhna mushkil tha, aur volume badhane ke liye zyada log hire karne padte.",
    approach:
      "LLM API ke upar ek custom prompt-engineering layer banayi jo brand-specific guidelines follow karti hai, saath me ek quality-scoring system jo output ko automatically check karta hai.",
    stack: ["Node.js", "Python", "PostgreSQL", "OpenAI API"],
    highlights: [
      "Automated content pipeline end-to-end",
      "Custom prompt-engineering layer",
      "Content-quality scoring system",
      "70% reduction in manual content work",
    ],
  },
  {
    slug: "particle-logo-reveal-system",
    title: "Particle Logo Reveal System",
    category: "WebGL / Three.js",
    tag: "3d",
    year: "2026",
    accent: "#498a9f",
    role: "3D / Creative Developer",
    duration: "2 weeks",
    description:
      "Ek custom 3D preloader system — hazaaron particles se logo assemble hota hai, real-time physics aur curved-path motion ke saath.",
    challenge:
      "Client apni website ka pehla impression bilkul unique aur memorable chahte the — generic loading spinner nahi, kuch aisa jo brand ki technical craftsmanship dikhaye.",
    approach:
      "Ek custom particle-physics system banaya — gravity-based ball drop, phir burst hoke hazaaron particles curved paths follow karte hue logo assemble karte hain, sab kuch real-time WebGL me.",
    stack: ["Three.js", "React Three Fiber", "WebGL"],
    highlights: [
      "4500+ particles, 60fps real-time",
      "Physics-based ball-drop & bounce",
      "Custom curved-path convergence system",
      "Fully responsive across devices",
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
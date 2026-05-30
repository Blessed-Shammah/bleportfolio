/* Curriculum content for course detail pages (course.html?id=slug). */
window.COURSES = {
    fullstack: {
        title: "Full-Stack Web Development",
        tagline: "Go from fundamentals to shipping production web apps — project-based, job-ready, with live mentorship and code reviews.",
        duration: "12 weeks",
        level: "Beginner → Job-ready",
        format: "Live online + projects",
        price: "From KES 10,000 / month",
        outcomes: [
            "Build and deploy complete full-stack web applications",
            "Write clean React/Next.js front ends with Tailwind CSS",
            "Design REST APIs, authentication, and databases",
            "Integrate real payments (M-Pesa, Stripe) and ship to production",
            "Leave with portfolio-ready projects and a deployment workflow"
        ],
        tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "Git", "Vercel"],
        modules: [
            { t: "Web Foundations", items: ["HTML5 & semantic markup", "CSS3, Flexbox & Grid", "Responsive design", "Git & GitHub workflow"] },
            { t: "JavaScript & TypeScript", items: ["ES6+ essentials", "DOM & events", "Async/await & fetch", "TypeScript basics"] },
            { t: "React & Next.js", items: ["Components & props", "Hooks & state", "Routing & layouts", "Styling with Tailwind"] },
            { t: "Backend & APIs", items: ["Node.js / Express (or Laravel)", "Designing REST APIs", "Auth with JWT", "Validation & error handling"] },
            { t: "Databases", items: ["SQL with PostgreSQL/MySQL", "Data modeling", "Prisma ORM", "Migrations & seeding"] },
            { t: "Payments & Integrations", items: ["M-Pesa Daraja API", "Stripe / Razorpay", "Webhooks", "Third-party APIs"] },
            { t: "Deployment & DevOps", items: ["Deploying on Vercel", "Environment variables", "CI/CD basics", "Custom domains"] },
            { t: "Capstone Project", items: ["Plan & build a full-stack app", "Ship it live", "Code review & polish", "Add to your portfolio"] }
        ]
    },
    python: {
        title: "Python & Automation",
        tagline: "Learn Python by building real tools — scripts, scrapers, bots, and data automations you can actually use.",
        duration: "8 weeks",
        level: "Beginner → Intermediate",
        format: "Live online + projects",
        price: "From KES 8,000 / month",
        outcomes: [
            "Write clean, idiomatic Python confidently",
            "Automate repetitive tasks and workflows",
            "Build web scrapers and chat bots",
            "Work with APIs, files, and data",
            "Ship small automation tools end-to-end"
        ],
        tools: ["Python", "Pandas", "Requests", "BeautifulSoup", "Selenium", "FastAPI"],
        modules: [
            { t: "Python Foundations", items: ["Syntax & data types", "Control flow", "Functions", "Virtual environments"] },
            { t: "Data Structures & OOP", items: ["Lists, dicts, sets", "Classes & objects", "Modules & packages", "Error handling"] },
            { t: "Working with Data", items: ["Files & JSON/CSV", "Pandas basics", "Cleaning & transforming data", "Simple visualizations"] },
            { t: "Web Scraping", items: ["HTTP with Requests", "Parsing with BeautifulSoup", "Dynamic sites with Selenium", "Respecting rate limits"] },
            { t: "APIs & Automation", items: ["Consuming REST APIs", "Scheduling & scripts", "Building Telegram/WhatsApp bots", "Environment & secrets"] },
            { t: "Mini-Projects", items: ["Automation tool", "A working bot", "Data pipeline", "Portfolio write-up"] }
        ]
    },
    flutter: {
        title: "Flutter Mobile Development",
        tagline: "Build and ship cross-platform iOS & Android apps from a single Flutter codebase.",
        duration: "10 weeks",
        level: "Beginner → Job-ready",
        format: "Live online + projects",
        price: "From KES 10,000 / month",
        outcomes: [
            "Build beautiful cross-platform mobile UIs",
            "Manage app state and navigation cleanly",
            "Integrate REST APIs, auth, and local storage",
            "Add payments and push notifications",
            "Publish apps to the Play Store / App Store"
        ],
        tools: ["Flutter", "Dart", "Provider/Riverpod", "Firebase", "Supabase", "REST"],
        modules: [
            { t: "Dart Fundamentals", items: ["Dart syntax & types", "Functions & classes", "Async & futures", "Null safety"] },
            { t: "Flutter UI", items: ["Widgets & layouts", "Material design", "Responsive screens", "Theming"] },
            { t: "Navigation & State", items: ["Routing", "setState", "Provider / Riverpod", "App architecture (MVVM)"] },
            { t: "Data & APIs", items: ["HTTP & REST", "JSON parsing", "Local storage", "Caching"] },
            { t: "Backend & Auth", items: ["Firebase / Supabase", "Authentication", "Cloud data", "Security rules"] },
            { t: "Payments & Notifications", items: ["M-Pesa integration", "Push notifications", "In-app flows", "Deep links"] },
            { t: "Publishing", items: ["Build & sign apps", "Testing", "Play Store release", "App Store basics"] },
            { t: "Capstone Project", items: ["Design & build an app", "Ship to a store", "Review & refine", "Portfolio piece"] }
        ]
    },
    "ai-prompt": {
        title: "AI & Prompt Engineering",
        tagline: "Build real AI-powered apps — from prompt design to RAG systems and agents — using Gemini, Claude, and LangChain.",
        duration: "6 weeks",
        level: "Intermediate",
        format: "Live online + projects",
        price: "From KES 8,000 / month",
        outcomes: [
            "Understand how LLMs work and where they fit",
            "Write effective, reliable prompts",
            "Build apps on the Claude & Gemini APIs",
            "Implement RAG over your own data",
            "Create tool-using agents and ship an AI app"
        ],
        tools: ["LangChain", "Google Gemini", "Claude API", "Vector DB", "FastAPI", "Python"],
        modules: [
            { t: "LLM Foundations", items: ["How LLMs work", "Tokens & context", "Model families (Gemini, Claude, GPT)", "Strengths & limits"] },
            { t: "Prompt Engineering", items: ["System prompts", "Few-shot prompting", "Structured output", "Evaluation & iteration"] },
            { t: "Building with APIs", items: ["Claude & Gemini APIs", "Python SDKs", "Streaming & cost control", "Prompt caching"] },
            { t: "RAG Systems", items: ["Embeddings", "Vector databases", "Retrieval pipelines", "Grounding answers"] },
            { t: "Agents & Tools", items: ["Tool use / function calling", "Multi-step workflows", "Automation", "Guardrails"] },
            { t: "Capstone Project", items: ["Build an AI app (chatbot/RAG)", "Deploy it", "Measure quality", "Showcase it"] }
        ]
    }
};

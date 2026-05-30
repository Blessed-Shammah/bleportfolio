/* Case-study content for project detail pages.
   Keyed by the ?id= slug used in case-study.html links. */
window.PROJECTS = {
    assetflow: {
        title: "AssetFlow RFID Asset Tracking Platform",
        badge: "Production",
        year: "2023 – Present",
        link: { label: "View on GitHub", url: "https://github.com/Blessed-Shammah" },
        lead: "An enterprise-grade passive-RFID asset tracking platform built from concept to production deployment as the flagship product of Amband Limited — now live at Kibabii University and Naivasha Sub-County Referral Hospital.",
        tags: ["Laravel", "Python Flask", "Android (Java)", "MySQL", "Retrofit", "Honeywell RFID SDK", "Snipe-IT", "Docker", "Contabo VPS"],
        metrics: [
            { value: "85%", label: "Asset visibility gain" },
            { value: "4–6 hrs", label: "Audit time (was 2–3 weeks)" },
            { value: "1,000+", label: "Tagged assets managed" },
            { value: "95%", label: "RFID read accuracy" }
        ],
        blocks: [
            { h: "The Problem", p: ["Institutions like universities and hospitals manage thousands of physical assets across dozens of locations. Manual, spreadsheet-driven audits took 2–3 weeks, were error-prone, and left huge blind spots in accountability — a serious risk for publicly funded organizations."] },
            { h: "My Role", p: ["As Lead Developer & RFID Systems Architect, I founded and architected AssetFlow end-to-end: designing the three-tier system, building the backend and middleware, developing the native Android client, and managing production deployment and client onboarding."] },
            { h: "What I Built", list: [
                "A Laravel RESTful API backend handling assets, locations, movement workflows, and multi-level approvals.",
                "A Python Flask middleware layer bridging Honeywell passive-UHF RFID readers (IH25 / EDA52) to the API.",
                "A native Android app (Java, MVVM architecture, Retrofit) for field scanning, check-in/check-out, and audits.",
                "Deep integration with Snipe-IT for maintenance tracking and asset lifecycle management.",
                "An asset-movement module with audit trails, real-time GPS tracking, and dashboard visualization."
            ] },
            { h: "Deployment & Impact", p: ["Deployed on Contabo VPS infrastructure with Docker containerization, sustaining 99.9% uptime for enterprise clients. The system cut institutional audit time from weeks to hours and lifted asset visibility by 85% across deployed sites."] }
        ]
    },
    cultiva: {
        title: "Cultiva Restaurant Inventory Management System",
        badge: "Production",
        year: "2024 – Present",
        link: null,
        lead: "A specialized inventory-management platform built as an AssetFlow extension for Cultiva Farm, a high-end Kenyan restaurant — combining barcode workflows with an AI chatbot that acts as an intelligent store manager.",
        tags: ["Laravel", "Flutter", "Barcode Integration", "AI Chatbot", "Google Gemini", "Delivery Notes", "Analytics"],
        metrics: [
            { value: "35%", label: "Reduction in waste" },
            { value: "98%", label: "Stock accuracy" },
            { value: "Real-time", label: "Inventory queries via AI" }
        ],
        blocks: [
            { h: "The Problem", p: ["High-end restaurants run on tight margins where spoilage and stock inaccuracy directly erode profit. Cultiva needed sophisticated consumables tracking across multiple storage locations, plus a way for managers to query stock without learning a complex dashboard."] },
            { h: "What I Built", list: [
                "Barcode scanning modules for rapid product identification and intake.",
                "Pantry management with real-time stock levels across multiple storage locations.",
                "A delivery-note processing system with supplier verification and reconciliation against purchase orders.",
                "Usage-tracking analytics surfacing consumption patterns, waste insights, and automated reorder points.",
                "An AI chatbot (Google Gemini) acting as a virtual store manager — answering inventory queries, raising usage alerts, and giving predictive insights in natural language."
            ] },
            { h: "Impact", p: ["The system reduced waste by 35% and improved stock accuracy to 98%, while the conversational AI layer made the platform accessible to non-technical kitchen and management staff."] }
        ]
    },
    chatbot: {
        title: "AI-Powered Customer Service Chatbot",
        badge: "Project",
        year: "2024",
        link: null,
        lead: "A context-aware conversational support assistant built on a retrieval-augmented generation (RAG) pipeline, grounding every answer in company documentation for accurate, source-driven responses.",
        tags: ["Python", "LangChain", "Google Gemini Flash", "FastAPI", "RAG", "Vector Database"],
        metrics: [
            { value: "RAG", label: "Grounded answers" },
            { value: "24/7", label: "Automated support" },
            { value: "FastAPI", label: "Production-ready API" }
        ],
        blocks: [
            { h: "Overview", p: ["Generic chatbots hallucinate and can't speak to a specific business's policies. I built a RAG system that retrieves relevant passages from a company's own documentation before generating a response, so answers stay accurate and citeable."] },
            { h: "What I Built", list: [
                "A LangChain orchestration layer coordinating retrieval and generation.",
                "Google Gemini Flash for fast, low-cost natural-language understanding and generation.",
                "A vector database storing embedded company documentation for semantic retrieval.",
                "A FastAPI service exposing the assistant over a clean REST interface for easy integration."
            ] },
            { h: "Why It Matters", p: ["This pattern lets any organization stand up a trustworthy support assistant grounded in its real knowledge base — reducing repetitive support load while keeping responses on-brand and factual."] }
        ]
    },
    safaricom: {
        title: "Safaricom RFID Network Scanner Prototype",
        badge: "Prototype",
        year: "2024",
        link: null,
        lead: "A passive-RFID scanner prototype for telecommunications infrastructure monitoring, integrating with Safaricom's network-management systems for real-time equipment verification across network sites.",
        tags: ["Passive RFID", "Telecommunications", "Python", "Hardware Integration", "Network Infrastructure"],
        metrics: [
            { value: "100s", label: "Network sites supported" },
            { value: "Real-time", label: "Equipment verification" },
            { value: "Automated", label: "Alerting" }
        ],
        blocks: [
            { h: "Overview", p: ["Telecom operators maintain equipment across hundreds of geographically dispersed sites. Verifying what hardware is actually present — and flagging missing or moved units — is slow and manual. This prototype applied passive RFID to automate that verification."] },
            { h: "What I Built", list: [
                "An RFID network scanner that reads passive tags on telecom equipment at site level.",
                "Integration hooks into Safaricom's existing network-management systems.",
                "A scalable architecture designed to support hundreds of sites with a centralized monitoring dashboard.",
                "An automated alert system flagging equipment discrepancies for maintenance teams."
            ] },
            { h: "Outcome", p: ["The prototype demonstrated how passive RFID can give telecom operators near real-time visibility over distributed infrastructure, laying groundwork for a production rollout."] }
        ]
    },
    unicef: {
        title: "UNICEF Uganda RFID Asset Tracking System",
        badge: "Technical Proposal",
        year: "2025",
        link: null,
        lead: "A comprehensive technical proposal (RFP LRPS-2026-9202757) for RFID-based asset tracking across the UNICEF/WFP Common Premises in Kampala, Uganda — designed to UN standards.",
        tags: ["Passive RFID", "Enterprise Asset Management", "Cloud Dashboard", "UN Standards", "RFP"],
        metrics: [
            { value: "455", label: "Furniture assets" },
            { value: "13", label: "RFID door portals" },
            { value: "10", label: "Meeting rooms covered" }
        ],
        blocks: [
            { h: "The Brief", p: ["UNICEF Uganda issued an RFP for an enterprise RFID asset-tracking solution covering the UNICEF/WFP Common Premises in Kampala. I authored a full technical proposal demonstrating capability for large-scale UN institutional deployment."] },
            { h: "Proposed Solution", list: [
                "Tracking of 455 furniture assets across 10 meeting rooms.",
                "13 RFID door-portal installations for automated movement detection.",
                "A cloud-based asset-management dashboard with real-time reporting.",
                "Architecture and documentation aligned to UN standards and compliance requirements."
            ] },
            { h: "Significance", p: ["The submission showcased the ability to translate AssetFlow's production experience into a rigorous, standards-compliant proposal for a major international institution."] }
        ]
    },
    treq: {
        title: "TREQ B2B Trade App",
        badge: "Project",
        year: "2024",
        link: null,
        lead: "A cross-platform Flutter application for a global trade alliance, connecting buyers and exporters with real-time chat and push notifications to power B2B matching on the go.",
        tags: ["Flutter", "Dart", "REST API", "Real-time Chat", "Push Notifications"],
        metrics: [
            { value: "Cross-platform", label: "iOS & Android" },
            { value: "Real-time", label: "Buyer–exporter chat" },
            { value: "Push", label: "Live notifications" }
        ],
        blocks: [
            { h: "Overview", p: ["International trade depends on fast, trusted communication between buyers and exporters. TREQ brings that connection into a single mobile app, matching parties and enabling instant conversation wherever they are."] },
            { h: "What I Built", list: [
                "A cross-platform Flutter (Dart) app targeting both iOS and Android from one codebase.",
                "Real-time chat connecting buyers and exporters directly.",
                "Push notifications keeping users responsive to new matches and messages.",
                "A clean, mobile-first UX tailored to B2B trade workflows."
            ] },
            { h: "Outcome", p: ["TREQ demonstrates end-to-end mobile product capability — from architecture to real-time features — for a real international trade use case."] }
        ]
    },
    mchama: {
        title: "MCHAMA — Group Savings App",
        badge: "Project",
        year: "2024",
        link: null,
        lead: "A Flutter mobile app for chamas — Kenyan investment and savings groups — that manages member contributions, payouts, and secure transactions on a Node.js/Express backend with OAuth2 authentication.",
        tags: ["Flutter", "Dart", "Node.js", "Express", "OAuth2", "Secure Transactions"],
        metrics: [
            { value: "Cross-platform", label: "iOS & Android" },
            { value: "OAuth2", label: "Secure authentication" },
            { value: "Real-time", label: "Contribution tracking" }
        ],
        blocks: [
            { h: "Overview", p: ["Chamas (group savings and investment circles) are central to community finance in Kenya, but most still run on manual records. MCHAMA digitizes the whole flow — contributions, payouts, and member accountability — in a mobile-first app."] },
            { h: "What I Built", list: [
                "A cross-platform Flutter (Dart) app for members to track contributions and payouts.",
                "A Node.js/Express backend handling secure transaction processing.",
                "OAuth2 authentication protecting member accounts and financial data.",
                "A financial dashboard giving groups clear visibility over balances and activity."
            ] },
            { h: "Outcome", p: ["MCHAMA shows full-stack mobile delivery — Flutter front end, secure Node backend — applied to a real fintech use case rooted in the local community."] }
        ]
    },
    unifiedevents: {
        title: "Unified Events App",
        badge: "Project",
        year: "2024",
        link: null,
        lead: "A Flutter app for discovering, organizing, and managing events — bringing registration, scheduling, and real-time notifications into one unified mobile experience.",
        tags: ["Flutter", "Dart", "REST API", "Push Notifications"],
        metrics: [
            { value: "Cross-platform", label: "iOS & Android" },
            { value: "Real-time", label: "Event notifications" },
            { value: "All-in-one", label: "Discover & manage" }
        ],
        blocks: [
            { h: "Overview", p: ["Event-goers and organizers usually juggle several disconnected tools. Unified Events brings discovery, registration, and scheduling together in a single Flutter app for a smoother experience on both sides."] },
            { h: "What I Built", list: [
                "A cross-platform Flutter (Dart) app for browsing and registering for events.",
                "Scheduling and agenda features for attendees.",
                "Real-time push notifications for event updates and reminders.",
                "A clean, unified mobile UX across iOS and Android."
            ] },
            { h: "Outcome", p: ["Unified Events rounds out a strong Flutter portfolio, demonstrating consumer-facing mobile product design alongside B2B and fintech apps."] }
        ]
    }
};

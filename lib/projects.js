export const projects = [
  {
    num: "01",
    slug: "installsync",
    category: "Full Stack",
    title: "InstallSync",
    description:
      "InstallSync connects customers who need a job done with nearby installers. Customers create jobs, and eligible installers receive push notifications based on their profile service radius and availability. Installers can submit bids, customers can accept a proposal, and the installer can start and complete the job. Socket-based messaging, Firebase web push notifications, and SMTP email support communication throughout the workflow.",
    overview:
      "A two-sided service marketplace for customers and installers, designed to take a job from its initial posting through proposal, acceptance, and completion.",
    challenge:
      "Customers need to reach available installers near a job location, while installers need to avoid unsuitable or out-of-hours requests. Both sides also need a clear way to agree on work and communicate as it progresses.",
    solution:
      "InstallSync combines location-aware job discovery with installer availability settings, proposal bidding, job status updates, and real-time messaging. Notifications help bring relevant opportunities to installers, while customers manage the proposal and acceptance process.",
    highlights: [
      "Customers create and manage service jobs.",
      "Installer profiles define a service radius, and blocked time represents periods when an installer should not receive jobs.",
      "Push notifications surface relevant job opportunities to installers.",
      "Installers submit proposals; customers review and accept a bid.",
      "Installers can start and complete accepted jobs.",
      "Socket-based messaging supports real-time conversations.",
      "Firebase web push uses VAPID, with SMTP for email notifications.",
    ],
    stack: [
      "React",
      "shadcn/ui",
      "Tailwind CSS",
      "Redux",
      "Leaflet",
      "Django",
      "MySQL",
      "WebSockets",
      "Firebase VAPID",
      "SMTP",
    ],
    image: "/assets/projects/Installsync.png",
    live: "https://app.installsync.com/auth/signin",
    github: "",
  },
  {
    num: "02",
    slug: "driver-transportation",
    category: "Full Stack",
    title: "Driver Transportation",
    description:
      "A driver onboarding and transportation management platform where administrators invite drivers by email. Drivers follow an invitation link to complete a 17-step application with personal and contact information, license details, supporting documents, and a signature. Administrators review submissions and can assign loads to drivers. Brevo handles invitation emails.",
    overview:
      "A driver onboarding portal and admin workflow for inviting candidates, collecting their application information, reviewing submissions, and assigning loads.",
    challenge:
      "Driver onboarding involves collecting many details and supporting documents, while administrators need a way to track invitations, check application progress, review completed submissions, and move approved drivers into load assignment.",
    solution:
      "The platform gives administrators an invitation and application-management view, and gives drivers a guided, multi-step form that can be completed from an invitation link. Submitted applications are available for administrator review before load assignment.",
    highlights: [
      "Administrators create driver invitations and send them by email.",
      "Drivers access their application through an invitation link.",
      "A 17-step form collects driver details, license information, documents, and signature.",
      "Administrators review application progress and submitted information.",
      "Administrators can assign loads after reviewing an application.",
      "Brevo is used to send invitation emails.",
    ],
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Node.js", "MySQL", "Brevo"],
    image: "/assets/projects/driver-transportation.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    slug: "up-invest",
    category: "Full Stack",
    title: "Up-Invest",
    description:
      "A cross-platform React Native and web application for stock-market analytics. It brings together financial API data, live market information, and interactive charts to help users explore market activity and make data-informed decisions.",
    overview:
      "A mobile and web investment experience focused on accessible market information, analytics, and visual exploration.",
    challenge:
      "Market data comes from multiple sources and can be difficult to scan quickly. Users need a consistent way to explore current information and understand it through clear visual summaries.",
    solution:
      "The application integrates financial APIs and presents market information through dashboards and interactive charts, with shared state managed through Context API.",
    highlights: [
      "Cross-platform React Native and web application.",
      "Financial API integrations for market information.",
      "Context API for shared application state.",
      "Interactive charts and analytics dashboards.",
    ],
    stack: ["React Native", "React", "Tailwind CSS", "TypeScript", "Context API"],
    image: "/assets/projects/up-invest.png",
    live: "https://app.upinvest.pk/auth/signin",
    github: "https://github.com",
  },
  {
    num: "04",
    slug: "e-learning-website",
    category: "Full Stack",
    title: "E-Learning Website",
    description:
      "A learning management platform built with Next.js and TypeScript. It supports authenticated learners and administrators, paid courses, course content management, video uploads, messaging, reviews, and analytics.",
    overview:
      "A learning platform that brings course discovery, secure access, paid enrollment, and course administration into one product.",
    challenge:
      "An online learning product needs to support both the learner journey and the operational work of publishing courses, handling payments, and managing course content.",
    solution:
      "The application combines authentication and verification with payment options and an administration dashboard for course creation, video uploads, messaging, reviews, and analytics.",
    highlights: [
      "Responsive interface built with Next.js, TypeScript, and shadcn/ui.",
      "Google and GitHub authentication with token and OTP verification.",
      "Paid courses with Stripe and support for card, PayPal, and cash payments.",
      "Admin tools for courses, video uploads, messaging, reviews, and analytics.",
    ],
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "RTK Query", "Node.js", "Stripe"],
    image: "/assets/projects/lms.png",
    live: "https://lms-rosy-omega.vercel.app/",
    github: "https://github.com/shahzad1ali/LMS-server",
  },
  {
    num: "05",
    slug: "mobile-movie-app",
    category: "Mobile App",
    title: "Mobile Movie App",
    description:
      "A React Native and Expo movie app for browsing, searching, and watching movies. Google OAuth supports sign-in, and movie lists highlight top-rated titles while placing newly added movies first.",
    overview:
      "A mobile movie-browsing experience with search, curated discovery, and personalized access.",
    challenge:
      "Movie catalogs need to make it easy to find familiar favorites and discover new releases without sacrificing a clear mobile browsing experience.",
    solution:
      "The app brings movie browsing and search together with Google sign-in, top-rated selections, and a list order that surfaces newly added titles.",
    highlights: [
      "Built with React Native and Expo.",
      "Movie browsing and search.",
      "Google OAuth authentication.",
      "Top-rated and newly added movie discovery.",
    ],
    stack: ["React Native", "Expo", "Tailwind CSS", "TypeScript"],
    image: "/assets/projects/mobile-app.jpg",
    live: "",
    github: "https://github.com/shahzad1ali/Mobile-Movie-App",
  },
  {
    num: "06",
    slug: "gym-and-yoga-app",
    category: "Frontend",
    title: "Gym and Yoga App",
    description:
      "A responsive React and Tailwind CSS fitness experience showcasing yoga and workout classes, with Framer Motion animations that make browsing feel more interactive.",
    overview:
      "A fitness-focused website designed to present classes and workouts through a clear, engaging interface.",
    challenge:
      "Fitness content should be easy to browse across screen sizes while keeping the experience energetic and visually engaging.",
    solution:
      "The site uses responsive layouts and motion-enhanced interactions to showcase yoga and workout classes.",
    highlights: [
      "React-based user interface.",
      "Responsive layouts styled with Tailwind CSS.",
      "Framer Motion interactions.",
      "Yoga and workout class presentation.",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "/assets/projects/yoga.png",
    live: "https://gym-project-snowy.vercel.app/",
    github: "https://github.com/shahzad1ali/Gym-Project",
  },
  {
    num: "07",
    slug: "mindleap",
    category: "Frontend",
    title: "MindLeap",
    description:
      "A responsive product showcase built with React, Vite, and Tailwind CSS. The interface presents chair products with reusable components, tab-based navigation, and Framer Motion animations.",
    overview:
      "A product-focused browsing experience that combines a clean catalog presentation with lightweight interaction.",
    challenge:
      "A product showcase needs to communicate product choices clearly and remain easy to navigate on both desktop and mobile.",
    solution:
      "Reusable React components, tab-based navigation, and animated transitions organize the product experience into a responsive interface.",
    highlights: [
      "Built with React and Vite.",
      "Responsive Tailwind CSS layout.",
      "Chair product showcase.",
      "Tab navigation and Framer Motion animations.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "/assets/projects/mindleap.png",
    live: "https://mindleap-react-app-black.vercel.app/",
    github: "https://github.com/shahzad1ali/mindleap-react-app",
  },
  {
    num: "08",
    slug: "chaincross",
    category: "Frontend",
    title: "ChainCross",
    description:
      "A responsive React and Vite frontend for the Solana ecosystem, presenting token launches, vesting, and staking features through a fast, streamlined interface.",
    overview:
      "A Web3 product interface focused on making core token and staking workflows approachable.",
    challenge:
      "Blockchain products can expose complex concepts and actions. The interface needs to keep key features understandable while remaining responsive.",
    solution:
      "The frontend uses React, Vite, and Tailwind CSS to organize token launch, vesting, and staking experiences into a responsive interface.",
    highlights: [
      "React and Vite frontend.",
      "Responsive Tailwind CSS UI.",
      "Solana ecosystem product experience.",
      "Interfaces for token launches, vesting, and staking.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Solana"],
    image: "/assets/projects/chaincross.png",
    live: "https://chain-cross-app.vercel.app/",
    github: "https://github.com/shahzad1ali/Chain-Cross-App",
  },
  {
    num: "09",
    slug: "altcabs",
    category: "Mobile App",
    title: "AltCabs",
    description:
      "A React Native and Expo interface for comparing cab fares. Users can enter trip details, choose passenger counts, and review fare quotations in a clean mobile flow.",
    overview:
      "A mobile-first cab comparison interface that guides users from trip details to fare options.",
    challenge:
      "Fare comparison starts with several trip details. A mobile interface should make those inputs straightforward and present quotations clearly.",
    solution:
      "The app focuses on clear trip-entry screens, passenger selection, and a quotation view, styled for a responsive mobile experience.",
    highlights: [
      "React Native and Expo interface.",
      "Trip detail entry.",
      "Passenger selection.",
      "Fare quotation presentation.",
    ],
    stack: ["React Native", "Expo", "Tailwind CSS", "TypeScript"],
    image: "/assets/projects/altcabs.png",
    live: "https://chain-cross-app.vercel.app/",
    github: "https://github.com/dev-numan/altcabs-app-mirror/",
  },
  {
    num: "10",
    slug: "e-commerce-website",
    category: "Full Stack",
    title: "E-commerce Website",
    description:
      "A full-stack MERN e-commerce platform for buying and selling products. It supports Google authentication, token-based verification, multiple payment options, Redux state management, and a reusable custom npm package.",
    overview:
      "An online commerce platform that brings product sales, account access, and payment options together.",
    challenge:
      "A multi-vendor shopping experience must coordinate product and account flows while supporting different payment preferences.",
    solution:
      "The platform combines MERN application features with Google authentication, token verification, Redux-managed state, and multiple payment methods.",
    highlights: [
      "MERN stack application for buying and selling products.",
      "Google authentication and token-based user verification.",
      "Stripe, PayPal, and cash payment options.",
      "Redux state management.",
      "Reusable custom npm package.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Redux", "Stripe", "PayPal"],
    image: "/assets/projects/e-shop.png",
    live: "https://e-shop-zeta-indol.vercel.app/",
    github: "https://github.com/shahzad1ali/multivendor",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

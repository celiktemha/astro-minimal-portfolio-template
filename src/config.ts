import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ahmet Çelik",
  logo: "/logo.webp",
  email: "celiktemha@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Blog", url: "/blog" },
];

export const socialLinks: SocialLink[] = [
  {
    title: "X",
    url: "https://x.com/ahmetcelikdev",
    icon: "mdi:x",
    external: true,
  },
  {
    title: "GitHub",
    url: "https://github.com/celiktemha",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:celiktemha@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ahmet Çelik — Full-stack Mobile Developer",
    description:
      "Full-stack mobile developer building iOS & Android apps end-to-end — from SwiftUI & Jetpack Compose interfaces to custom backend APIs.",
    image: identity.logo,
  },
  role: "Full-stack Mobile Developer",
  description:
    "I’m Ahmet Çelik, a full-stack mobile developer. I design and build iOS and Android apps with SwiftUI, Jetpack Compose. Beyond the frontend, I also write custom backend APIs or integrate services like Firebase and Supabase — delivering complete, production-ready solutions.",
  socialLinks,
  links: [
    { title: "My Projects", url: "/projects" },
    { title: "About Me", url: "/about" },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ahmet Çelik",
    description:
      "Full-stack mobile developer creating iOS and Android apps end-to-end, from frontend UIs to custom backend services.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Ahmet Çelik — a full-stack mobile developer. I work across the stack, from **front-end UIs** in SwiftUI and Jetpack Compose, to **custom backend APIs** or integrations with Firebase/Supabase.  
<br/><br/>
This means I can take an idea from concept to a fully functioning mobile app — UI, architecture, backend, and deployment.`,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Coding & design workflow",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Mobile app previews",
    },
  },
  work: {
    description: `I've built and shipped apps for both iOS and Android, covering the entire development cycle: design, coding, backend, and release.`,
    items: [
      {
        title: "Full-stack Mobile Developer",
        company: {
          name: "Self-employed",
          image: "/logo.webp",
          url: "https://celiktemha.com",
        },
        date: "2023 — Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/celiktemha",
        },
        date: "2019 — 2023",
      },
    ],
  },
  connect: {
    description: `Always open to collaborations and discussions about mobile apps, UI/UX, and full-stack development.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ahmet Çelik",
    description: "Selected iOS and Android projects, side apps, and experiments.",
    image: identity.logo,
  },
  subtitle: "Selected work & mobile projects",
  projects: [
    {
      title: "PennySaved",
      description:
        "An ADHD-friendly savings tracker that shows how much you save by avoiding impulse spending. Built with SwiftUI · SwiftData.",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/celiktemha",
    },
    {
      title: "Payment Tracker (Billy)",
      description:
        "A clean ledger for tracking payments with monthly/summary views, color-coded categories, and currency options. SwiftUI.",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/celiktemha",
    },
    {
      title: "memsa",
      description:
        "A second brain for iOS: save text, images, videos, and URLs directly from the share sheet, with tags and notes. SwiftUI · SwiftData.",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/celiktemha",
    },
    {
      title: "Just Fish Calendar",
      description:
        "A fish seasonality calendar app with grid UI, search, and ordering by 'eatable this month'. SwiftUI.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/celiktemha",
    },
    {
      title: "YÖKDİL 600 Words",
      description:
        "Vocabulary trainer app for the 600 most-used YÖKDİL exam words. Simple UI, spaced practice.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/celiktemha",
    },
    {
      title: "Stoic Focus",
      description:
        "Focus timer with stoic quotes and mountain-climb progress animations for motivation. SwiftUI.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/celiktemha",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Ahmet Çelik",
    description:
      "Writing about SwiftUI, SwiftData, Jetpack Compose, Kotlin, and full-stack mobile development.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories, and build logs.",
};

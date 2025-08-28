import counter_a_left from "@/public/images/counter-app-a-left.png"
import counter_b_portrait from "@/public/images/counter-app-b-portrait.png"
import counter_c_portrait from "@/public/images/counter-app-c-portrait.png"
import leon_a from "@/public/images/leon-display-a.png"
import leon_b from "@/public/images/leon-display-b.png"
import leon_c from "@/public/images/leon-display-c.png"
import punch_a from "@/public/images/punch-display-a.png"
import punch_b from "@/public/images/punch-display-b.png"
import punch_c from "@/public/images/punch-display-c.png"
import krenko_a from "@/public/images/krenko-a-left.png"
import krenko_b from "@/public/images/krenko-b-portrait.png"
import krenko_c from "@/public/images/krenko-c-portrait.png"
import movietrends_a from "@/public/images/movietrend-display-a.png"
import movietrends_b from "@/public/images/movietrend-display-b.png"
import movietrends_c from "@/public/images/movietrend-display-c.png"
import medialog_a from "@/public/images/medialog-display-a.png"
import medialog_b from "@/public/images/medialog-display-b.png"
import medialog_c from "@/public/images/medialog-display-c.png"
import blog_a from "@/public/images/blog-display-a.png"
import blog_b from "@/public/images/blog-display-b.png"
import blog_c from "@/public/images/blog-display-c.png"
import airbnb_a from "@/public/images/airbnb-display-a.png"
import airbnb_b from "@/public/images/airbnb-display-b.png"
import airbnb_c from "@/public/images/airbnb-display-c.png"
import ostermalm_a from "@/public/images/ostermalm-display-a.png"
import ostermalm_b from "@/public/images/ostermalm-display-b.png"
import ostermalm_c from "@/public/images/ostermalm-display-c.png"

export const projects = [
  {
    name: "Östermalms Måleriserice",
    description: [
      "A website for Östermalms Måleriservice,",
      "a painting company based in Stockholm. Me",
      "and my colleague redesigned and enhanced",
      "their previous Wix website to improve user",
      "experience, modernize the design and enhance",
      "SEO.",
    ],
    stack: "web design",
    type: "painter website",
    role: "web developer",
    date: "2025",
    tools: ["wix", "figma", "seo"],
    platform: "website",
    href: "https://www.ostermalmsmaleriservice.se/",
    images: [ostermalm_a, ostermalm_b, ostermalm_c],
  },
  {
    name: "Krenko's Assistant",
    description: [
      "A very niche app for players of the card game Magic: The Gathering. Helps players keep track of their Goblin tokens and other game related info.",
    ],
    stack: "frontend",
    type: "card game app",
    role: "frontend developer",
    date: "2025",
    tools: ["next", "motion", "typescript", "tailwind", "css", "figma", "pwa"],
    platform: "mobile",
    href: "https://krenko-helper.vercel.app/",
    github: "https://github.com/fogelmark/krenko-helper",
    images: [krenko_a, krenko_b, krenko_c],
  },
  {
    name: "Punch Publishing",
    description: [
      "A website for Punch Publishing, a music publishing company based in Stockholm. Showcasing their artists and catalog.",
    ],
    stack: "frontend",
    type: "music publisher website",
    role: "frontend developer",
    date: "2025",
    tools: ["next", "motion", "typescript", "tailwind", "css", "figma"],
    platform: "website",
    href: "https://punchpublishing.vercel.app/",
    github: "https://github.com/fogelmark/trufflepig",
    images: [punch_a, punch_b, punch_c],
  },
  {
    name: "Movie Trends",
    description: [
      "A movie browsing app that uses The Movie Database (TMDb) API to fetch and display trending movies.",
    ],
    stack: "fullstack",
    type: "3hour code test",
    role: "frontend developer",
    date: "2025",
    tools: ["next", "typescript", "tailwind", "sqlite", "prisma", "api"],
    platform: "website",
    github: "https://github.com/fogelmark/code-test-ignite",
    images: [movietrends_a, movietrends_b, movietrends_c],
  },
  {
    name: "MediaLog",
    description: [
      "A fullstack media tracking app where users can log and track movies and TV-shows they have watched or want to watch.",
    ],
    stack: "fullstack",
    type: "media tracker app",
    role: "fullstack developer",
    date: "2025",
    tools: [
      "next",
      "typescript",
      "tailwind",
      "shadcn",
      "mongodb",
      "nodejs",
      "cloudinary",
      "kinde auth",
    ],
    platform: "website",
    github: "https://github.com/fogelmark/media-tracker",
    images: [medialog_a, medialog_b, medialog_c],
  },
  {
    name: "Developer Blog",
    description: [
      "A developer blog where I share my thoughts and experiences as a developer.",
    ],
    stack: "fullstack",
    type: "developer blog",
    role: "fullstack developer",
    date: "2024",
    tools: [
      "next",
      "typescript",
      "tailwind",
      "prisma",
      "postgresql",
      "nodejs",
      "kinde auth",
    ],
    platform: "website",
    href: "https://next-blog-aff8x8bp0-alexs-projects-3d95c78a.vercel.app/",
    github: "https://github.com/fogelmark/next-blog",
    images: [blog_a, blog_b, blog_c],
  },
  {
    name: "Lifelink",
    description: [
      "A Magic: The Gathering themed mobile app used for tracking life totals. PWA with offline support.",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2024",
    tools: ["react", "css", "figma", "pwa"],
    platform: "mobile",
    href: "https://mtgcounterapp.netlify.app/",
    github: "https://github.com/fogelmark/mtg-counter-react",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "LÉON",
    description: [
      "A website for the artist LÉON showcasing her music, tour dates and more.",
    ],
    stack: "frontend",
    type: "artist website",
    role: "design & frontend",
    date: "2023",
    tools: ["next", "motion", "typescript", "tailwind", "css", "figma"],
    platform: "website",
    href: "https://its-leon.netlify.app/",
    github: "https://github.com/fogelmark/leon-site",
    images: [leon_a, leon_b, leon_c],
  },
  {
    name: "Cabin Rental",
    description: [
      "A school project where we built a fullstack cabin rental service featuring user authentication, bookings and more.",
    ],
    stack: "fullstack",
    type: "lodging rental website",
    role: "fullstack developer",
    date: "2023",
    tools: ["react", "vite", "css", "mongodb", "nodejs", "bootstrap"],
    platform: "website",
    github: "https://github.com/fogelmark/cabin-rental",
    images: [airbnb_a, airbnb_b, airbnb_c],
  },
]
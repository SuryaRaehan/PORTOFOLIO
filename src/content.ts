import type {
  Capability,
  EducationItem,
  ExperienceItem,
  FaqItem,
  Metric,
  NavItem,
  ProcessStep,
  Project,
  Service,
  SocialLink,
  StackItem,
} from "./model";

export const NAME = "Surya Raehan Aryudi";
export const ROLE = "Video Editor & Graphic Designer";
export const TAGLINE = "A portfolio for design, motion, and the web.";
export const HERO_LEAD =
  "I'm a visual creator with a strong interest in graphic design, video editing, and digital media development. I like exploring ideas and turning them into visual work — through design and video — while learning new tools in technology and creative practice. Through organizational experience, I'm used to collaborating on content and publication materials.";
export const FOCUS = "Graphic Design · Video Editing · Digital Media";
export const LOCATION = "Bantul, Yogyakarta, ID";
export const EMAIL = "suryaraehan73@gmail.com";
export const PHONE = "+62 882-0064-19310";
export const PHONE_URL = `tel:${PHONE.replace(/[^\d+]/g, "")}`;
export const RESUME_URL = "./media/RESUME%20CV%20SURYA.pdf";
export const GITHUB_URL = "https://github.com/suryaraehan";
export const LINKEDIN_URL = "https://linkedin.com/in/suryaraehan";

export const NAV: NavItem[] = [
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_WORDS = ["designs.", "edits.", "stories.", "websites."];

export const METRICS: Metric[] = [
  { label: "Location", value: LOCATION },
  { label: "Focus", value: "Graphic Design / Video Editing" },
  { label: "Experience", value: "Freelance · 2023–2026" },
  { label: "Education", value: "SMA Negeri 1 Imogiri" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    role: "Head of Digital Media Team",
    org: "Media Digital Organisasi",
    highlights: [
      "Production of a music video for a high school anthem",
      "Creation of an organization website",
      "Additional school photography",
    ],
  },
  {
    period: "2023 – 2026",
    role: "Freelance Visual Creator",
    org: "Freelance",
    highlights: [
      "Video editing and motion graphics",
      "Bumper design and product posters",
      "2D CNC acrylic design",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Creative Contributor",
    org: "Putra Jaya Group",
    highlights: [
      "Poster and video promotion for products",
      "Contributed product branding ideas",
    ],
  },
];

export const EDUCATION: EducationItem = {
  period: "2025 – 2028",
  school: "SMA Negeri 1 Imogiri",
  detail: "Currently studying, with a focus on visual and digital creative work.",
};

export const SKILLS: string[] = [
  "Video Editing",
  "Graphic Design",
  "Photography",
  "Motion Graphics",
  "Full-Stack Web Development",
  "Leadership",
];

export const PROCESS: ProcessStep[] = [
  {
    name: "Frame the brief",
    detail: "Understand the goal, audience, and platform before making anything.",
    previewTitle: "Brief & direction",
    previewBody: "Turn the request into a clear direction for design, edit, or web.",
  },
  {
    name: "Shape the visual",
    detail: "Build posters, product graphics, and identity elements that communicate clearly.",
    previewTitle: "Visual system",
    previewBody: "Typography, color, and composition across posters, social content, and branding.",
  },
  {
    name: "Cut and move",
    detail: "Edit story-first, then refine pacing, motion graphics, and bumpers.",
    previewTitle: "Motion & edit",
    previewBody: "Music videos, promotional edits, and short-form work with purposeful animation.",
  },
  {
    name: "Build the page",
    detail: "Design and code responsive pages with HTML, CSS, and JavaScript.",
    previewTitle: "Web design",
    previewBody: "Organization websites and responsive pages built for digital publications.",
  },
  {
    name: "Deliver and refine",
    detail: "Export the right formats and adjust based on feedback.",
    previewTitle: "Delivery",
    previewBody: "Platform-ready assets and final files, refined after review.",
  },
];

export const SERVICES: Service[] = [
  {
    tag: "design",
    title: "Graphic Design",
    body: "Poster and product design, social media content, branding ideas, and promotional materials.",
  },
  {
    tag: "motion",
    title: "Video Editing",
    body: "Music videos, video promotion, short-form edits, motion graphics, and bumper design.",
  },
  {
    tag: "photo",
    title: "Photography",
    body: "School and product photography captured to support publications and promotions.",
  },
  {
    tag: "code",
    title: "Web Development",
    body: "Organization websites and responsive pages, with front-end work and full-stack fundamentals.",
  },
];

export const STACK: StackItem[] = [
  { name: "Adobe Premiere Pro", cmd: "$ edit --timeline --color" },
  { name: "Adobe After Effects", cmd: "$ motion --graphics --bumper" },
  { name: "CapCut", cmd: "$ cut --short-form" },
  { name: "Affinity by Canva", cmd: "$ design --poster --layout" },
  { name: "Canva", cmd: "$ design --social --fast" },
  { name: "VS Code", cmd: "$ code --web --fullstack" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Creative thinking",
    body: "Exploring ideas and learning new tools in design, editing, and digital media to turn them into better visual work.",
    meta: "idea → output",
  },
  {
    title: "Leadership & collaboration",
    body: "Led a digital media team and worked with peers on content and publication materials for school activities.",
    meta: "team → delivery",
  },
];

export const PROJECTS: Project[] = [
  {
    category: "Video Editing",
    title: "Music video for a school anthem",
    body: "A music video produced for a high school anthem as part of the digital media team.",
    outcome: "Deliverable: music video",
  },
  {
    category: "Web Design",
    title: "Organization website",
    body: "A website created for an organization, with responsive pages for its content and publications.",
    outcome: "Deliverable: website",
  },
  {
    category: "Graphic Design",
    title: "Product promotion",
    body: "Promotional posters and videos for products, developed with branding ideas at Putra Jaya Group.",
    outcome: "Deliverable: posters and video",
  },
  {
    category: "Freelance",
    title: "Design & motion work",
    body: "Bumper design, motion graphics, product posters, and 2D CNC acrylic design for freelance clients.",
    outcome: "Deliverable: design assets",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "What services do you offer?",
    a: "Graphic design, video editing, photography, and web development — including posters, promotional videos, motion graphics, bumpers, and organization websites.",
  },
  {
    q: "Which tools do you work with?",
    a: "Adobe Premiere Pro, Adobe After Effects, CapCut, Affinity by Canva, Canva, and VS Code.",
  },
  {
    q: "What experience do you have?",
    a: "I've worked freelance since 2023, led a digital media team in 2025–2026, and created promotion materials at Putra Jaya Group from 2020 to 2022.",
  },
  {
    q: "Do you work with teams or solo?",
    a: "Both. As head of a digital media team, I'm used to collaborating on content and publication materials, and I also handle freelance projects end-to-end.",
  },
  {
    q: "How do we get started?",
    a: "Send a brief by email or phone with what you're making, your timeline, and what success looks like. I'll reply with next steps.",
  },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Phone", href: PHONE_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
];

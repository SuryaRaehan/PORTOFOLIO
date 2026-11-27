import type {
  Capability,
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
export const ROLE = "Graphic Design · Video Editor · Web Developer";
export const TAGLINE = "A portfolio for design, motion, and the web.";
export const HERO_LEAD =
  "I shape brands, cut stories, and build websites — from first sketch to polished, performant delivery. Focused on visual systems, motion, and detail.";
export const AVAILABILITY = "Available for select projects";
export const LOCATION = "Special Region of Yogyakarta, ID";
export const EMAIL = "suryaraehan73@gmail.com";
export const RESUME_URL = "./resume.pdf";
export const GITHUB_URL = "https://github.com/suryaraehan";
export const LINKEDIN_URL = "https://linkedin.com/in/suryaraehan";

export const NAV: NavItem[] = [
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_WORDS = ["designs.", "films.", "websites.", "experiences."];

export const METRICS: Metric[] = [
  { label: "Location", value: "Special Region of Yogyakarta, ID" },
  { label: "Availability", value: "Q4 2026" },
  { label: "Experience", value: "5+ Years" },
  { label: "Focus", value: "Design / Motion / Web" },
];

export const PROCESS: ProcessStep[] = [
  {
    name: "Frame the brief",
    detail: "Define goals, audience, and success signals before pixels.",
    previewTitle: "Brief & direction",
    previewBody: "Map intent, constraints, and the outcome into one clear direction.",
  },
  {
    name: "Design the system",
    detail: "Build visual tokens, layouts, and interaction rules that scale.",
    previewTitle: "Visual system",
    previewBody: "Typography, spacing, color, and motion form a reusable visual language.",
  },
  {
    name: "Make it move",
    detail: "Storyboard, edit, and time motion with purpose.",
    previewTitle: "Motion & edit",
    previewBody: "Cuts, pacing, sound, and transitions that carry the message.",
  },
  {
    name: "Build for the web",
    detail: "Implement clean, accessible interfaces with performance in mind.",
    previewTitle: "Development",
    previewBody: "Typed components, responsive layout, and efficient rendering from day one.",
  },
  {
    name: "Ship and measure",
    detail: "Launch, observe, and iterate on real feedback.",
    previewTitle: "Release",
    previewBody: "Performance checks, QA, and measurable improvements after launch.",
  },
];

export const SERVICES: Service[] = [
  {
    tag: "craft",
    title: "Graphic Design",
    body: "Brand systems, layouts, and visual identities that stay consistent across every touchpoint.",
  },
  {
    tag: "code",
    title: "Web Development",
    body: "Responsive websites and interfaces built with clean, maintainable, performant code.",
  },
  {
    tag: "motion",
    title: "Video Editing",
    body: "Story-led cuts, motion graphics, and finishing that make every second count.",
  },
];

export const STACK: StackItem[] = [
  { name: "Design Tools", cmd: "$ figma --tokens dark" },
  { name: "Video Suite", cmd: "$ premiere --render 4k" },
  { name: "TypeScript / React", cmd: "$ npx tsc --noEmit" },
  { name: "Vite / Web", cmd: "$ npm run dev" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Concept to delivery",
    body: "From rough brief to final asset or live site, with clear communication at every step.",
    meta: "idea → ship",
  },
  {
    title: "Design & technical depth",
    body: "Comfortable across visual design, editing, interface building, and performance polish.",
    meta: "visual → code",
  },
];

export const PROJECTS: Project[] = [
  {
    category: "Brand Identity",
    title: "Surya Studio",
    body: "A visual identity system for a creative studio, spanning marks, type, and brand applications.",
    outcome: "3x faster asset turnaround",
  },
  {
    category: "Video",
    title: "Launch Reel",
    body: "A story-led launch film with motion graphics and sound design for a product release.",
    outcome: "+42% watch-through rate",
  },
  {
    category: "Web",
    title: "Portfolio Site",
    body: "A motion-led website with fast navigation and expressive, responsive layouts.",
    outcome: "+18% inquiry rate",
  },
  {
    category: "Design System",
    title: "Editorial Kit",
    body: "A modular editorial system for teams, focused on clarity, speed, and consistent output.",
    outcome: "Reduced production time by 35%",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "What kind of projects do you take on?",
    a: "Brand identities, video edits, motion graphics, and responsive websites. I work best where visual craft and technical execution both matter.",
  },
  {
    q: "What is your typical process?",
    a: "I start with the brief and constraints, move into a visual system, build or edit iteratively, then polish motion and performance before delivery.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm available for select projects in Q4 2026. Reach out with scope, timeline, and goals.",
  },
  {
    q: "Do you work with teams or solo?",
    a: "Both. I can collaborate with an existing team or own a project end-to-end, depending on what the work needs.",
  },
  {
    q: "How do we get started?",
    a: "Send a brief via email with what you're making, your timeline, and what success looks like. I'll reply with next steps.",
  },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
];

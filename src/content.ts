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
export const ROLE = "Creative Video Editor & Graphic Designer";
export const TAGLINE = "A portfolio for design, motion, and the web.";
export const HERO_LEAD =
  "Creative and detail-oriented, with a strong interest in visual communication, graphic design, and video editing. I turn ideas into engaging content — from promotional materials to edits for digital platforms — with consistency, quality, and care for detail.";
export const FOCUS = "Graphic Design · Video Editing · Web";
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

export const HERO_WORDS = ["designs.", "edits.", "stories.", "websites."];

export const METRICS: Metric[] = [
  { label: "Location", value: LOCATION },
  { label: "Focus", value: "Graphic Design / Video Editing" },
  { label: "Craft", value: "Visual Communication" },
  { label: "Web", value: "HTML / CSS / JavaScript" },
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
    detail: "Build layout, type, and identity elements that communicate clearly.",
    previewTitle: "Visual system",
    previewBody: "Typography, color, and composition across social and promotional materials.",
  },
  {
    name: "Cut and move",
    detail: "Edit story-first, then refine pacing, motion graphics, and color.",
    previewTitle: "Motion & edit",
    previewBody: "Cinematic and short-form edits with grading and purposeful animation.",
  },
  {
    name: "Build the page",
    detail: "Design and code responsive pages with HTML, CSS, and JavaScript.",
    previewTitle: "Web design",
    previewBody: "Basic UI/UX, clean layout, and front-end work for digital platforms.",
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
    body: "Social media content, digital posters and promotional design, branding and visual identity, and marketing materials.",
  },
  {
    tag: "motion",
    title: "Video Editing",
    body: "Cinematic and promotional videos, social reels and short-form edits, event documentation, and video storytelling.",
  },
  {
    tag: "code",
    title: "Digital Development",
    body: "Website design and basic front-end development with HTML, CSS, and JavaScript.",
  },
];

export const STACK: StackItem[] = [
  { name: "Graphic & Social Design", cmd: "$ design --brand --social" },
  { name: "Video & Post-Production", cmd: "$ edit --motion --grade" },
  { name: "Typography & Layout", cmd: "$ type --scale --grid" },
  { name: "Web & UI Basics", cmd: "$ html --css --javascript" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Creative thinking",
    body: "Turning ideas into clear visual work across design, editing, and web, with consistency from first draft to final export.",
    meta: "idea → output",
  },
  {
    title: "Detail and collaboration",
    body: "Attentive, adaptable, and responsible in teamwork and communication, with time management for delivery.",
    meta: "craft → team",
  },
];

export const PROJECTS: Project[] = [
  {
    category: "Graphic Design",
    title: "Social media content",
    body: "Posts, banners, and promotional graphics built for consistent visual communication across platforms.",
    outcome: "Deliverable: social media assets",
  },
  {
    category: "Video Editing",
    title: "Short-form video",
    body: "Reels and short edits with story-led cuts, motion graphics, and color finishing.",
    outcome: "Deliverable: platform-ready edits",
  },
  {
    category: "Branding",
    title: "Visual identity",
    body: "Marks, type, and layout systems for brands that need a consistent look across materials.",
    outcome: "Deliverable: identity guidelines",
  },
  {
    category: "Web Design",
    title: "Website design",
    body: "Responsive pages and basic front-end builds using HTML, CSS, and JavaScript.",
    outcome: "Deliverable: responsive website",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "What services do you offer?",
    a: "Graphic design, video editing, and web design — including social media content, promotional materials, short-form video, and responsive websites.",
  },
  {
    q: "Which skills do you work with?",
    a: "Visual communication, branding, typography and layout, post-production, color grading, motion graphics, basic UI/UX, and HTML, CSS, and JavaScript.",
  },
  {
    q: "What does a typical project look like?",
    a: "I start with the brief and platform, shape the visual direction, then design, edit, or build iteratively before delivering platform-ready files.",
  },
  {
    q: "Do you work with teams or solo?",
    a: "Both. I can collaborate with an existing team or handle a project end-to-end, depending on what the work needs.",
  },
  {
    q: "How do we get started?",
    a: "Send a brief by email with what you're making, your timeline, and what success looks like. I'll reply with next steps.",
  },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
];

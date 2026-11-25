export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface ProcessStep {
  name: string;
  detail: string;
  previewTitle: string;
  previewBody: string;
}

export interface Service {
  tag: string;
  title: string;
  body: string;
}

export interface StackItem {
  name: string;
  cmd: string;
}

export interface Capability {
  title: string;
  body: string;
  meta: string;
}

export interface Project {
  category: string;
  title: string;
  body: string;
  outcome: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

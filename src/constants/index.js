import { send, shield, star, jira, fw, shopify, zoho } from "../assets";

export const navLinks = [
  { id: "home",         title: "Home" },
  { id: "services",     title: "Services" },
  { id: "process",      title: "Process" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact",      title: "Contact" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    tag: "Integration",
    title: "SaaS Integration",
    content:
      "Connect your entire SaaS stack — CRMs, ERPs, marketing platforms, and more. We eliminate data silos so information flows exactly where it needs to go.",
  },
  {
    id: "feature-2",
    icon: shield,
    tag: "Development",
    title: "Custom App Development",
    content:
      "From internal tools to customer-facing products, we build bespoke applications crafted to your exact requirements — no templates, no compromises.",
  },
  {
    id: "feature-3",
    icon: send,
    tag: "Automation",
    title: "Workflow Automation",
    content:
      "Automate repetitive processes, trigger smart actions across platforms, and reclaim dozens of hours of manual work every single week.",
  },
  {
    id: "feature-4",
    icon: shield,
    tag: "API",
    title: "API Development",
    content:
      "Robust, scalable APIs that form the connective tissue of your product ecosystem. We design, build, and document APIs that power your entire operation.",
  },
  {
    id: "feature-5",
    icon: star,
    tag: "Data",
    title: "Data Pipelines",
    content:
      "Unify data from across your stack into a single source of truth. Real-time sync, transformation, and delivery at scale — zero data drift.",
  },
  {
    id: "feature-6",
    icon: send,
    tag: "Partnership",
    title: "Ongoing Partnership",
    content:
      "We don't disappear after launch. We monitor, optimize, and evolve your solutions as your business scales. Your growth is our mission.",
  },
];

export const clients = [
  { id: "client-1", logo: jira },
  { id: "client-2", logo: fw },
  { id: "client-3", logo: shopify },
  { id: "client-4", logo: zoho },
];

export const processSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Discovery & Audit",
    description:
      "We start with a deep-dive into your current stack, workflows, and pain points. No generic prescriptions — just a precise map of where we can drive maximum impact.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Design & Build",
    description:
      "Our team designs and ships your solution with speed and precision. Regular demos, full transparency, and working software delivered in weeks — not months.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Launch & Evolve",
    description:
      "We deploy with zero disruption, monitor performance in production, and iterate as your business grows. Long-term outcomes are the only metric we care about.",
  },
];

export const testimonials = [
  {
    id: "t-1",
    quote:
      "Brainz-Dev automated our Salesforce to HubSpot sync in under two weeks. We reclaimed 20+ hours of manual work every single week. Genuinely transformative for our revenue ops team.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "Growthline",
    initial: "S",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "t-2",
    quote:
      "Their custom Jira extension cut our sprint planning sessions from 3 hours down to 20 minutes. The ROI was obvious within the first month. Every engineer on our team loves it.",
    name: "Marcus Reid",
    role: "VP Engineering",
    company: "Velocity Labs",
    initial: "M",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "t-3",
    quote:
      "We went from concept to production in just 3 weeks. The team's technical depth, communication, and ownership throughout the entire process were all exceptional.",
    name: "Priya Mehta",
    role: "Founder & CEO",
    company: "Stackly",
    initial: "P",
    color: "from-indigo-500 to-violet-600",
  },
];

export const siteStats = [
  { value: 500,  isDecimal: false, suffix: "K+",  label: "API Calls/Day",      sub: "Across client systems" },
  { value: 50,   isDecimal: false, suffix: "+",   label: "Integrations Built", sub: "Tools connected" },
  { value: 99.9, isDecimal: true,  suffix: "%",   label: "Uptime SLA",         sub: "Guaranteed reliability" },
  { value: 3,    isDecimal: false, suffix: "wk",  label: "Avg. Ship Time",     sub: "Idea to production" },
];

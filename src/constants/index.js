import { monday, fw, shopify, zoho } from "../assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "process", title: "Process" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact" },
];

export const features = [
  {
    id: "feature-1",
    tag: "Integration",
    title: "SaaS Integration",
    content:
      "Connect your entire SaaS stack — CRMs, ERPs, marketing platforms, and more. We eliminate data silos so information flows exactly where it needs to go.",
  },
  {
    id: "feature-2",
    tag: "Development",
    title: "Custom App Development",
    content:
      "From internal tools to customer-facing products, we build bespoke applications crafted to your exact requirements — no templates, no compromises.",
  },
  {
    id: "feature-3",
    tag: "Automation",
    title: "Workflow Automation",
    content:
      "Automate repetitive processes, trigger smart actions across platforms, and reclaim dozens of hours of manual work every single week.",
  },
  {
    id: "feature-4",
    tag: "API",
    title: "API Development",
    content:
      "Robust, scalable APIs that form the connective tissue of your product ecosystem. We design, build, and document APIs that power your entire operation.",
  },
  {
    id: "feature-5",
    tag: "Data",
    title: "Data Pipelines",
    content:
      "Unify data from across your stack into a single source of truth. Real-time sync, transformation, and delivery at scale — zero data drift.",
  },
  {
    id: "feature-6",
    tag: "Partnership",
    title: "Ongoing Partnership",
    content:
      "We don't disappear after launch. We monitor, optimize, and evolve your solutions as your business scales. Your growth is our mission.",
  },
];

export const clients = [
  { id: "client-1", logo: fw,      name: "Freshworks" },
  { id: "client-2", logo: zoho,    name: "Zoho" },
  { id: "client-3", logo: shopify, name: "Shopify" },
  { id: "client-4", logo: monday,  name: "monday.com" },
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
      "Zoho Books for Freshdesk put every customer's invoices and payment status right inside the ticket. Our agents stopped switching tabs to answer billing questions, and first-response time on billing tickets dropped noticeably.",
    name: "Sarah Johnson",
    role: "Head of Customer Support",
    initial: "S",
  },
  {
    id: "t-2",
    quote:
      "Kanban Pro turned our Zoho Desk queue into a board the whole team can read at a glance. Dragging a card updates the ticket instantly, and the overdue badges mean nothing slips through anymore.",
    name: "Marcus Reid",
    role: "Support Team Lead",
    initial: "M",
  },
  {
    id: "t-3",
    quote:
      "Insight Lens shows us which product is driving complaints in Freshdesk before it turns into an escalation. The risk score gave our leads a shared view of where to put agents first.",
    name: "Priya Mehta",
    role: "Customer Experience Manager",
    initial: "P",
  },
];

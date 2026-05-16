// ─────────────────────────────────────────────────────────────
// Product data — replace placeholder fields with real content.
// Each `icon` field should be an imported image, e.g.:
//   import myAppIcon from "../assets/my-app-icon.png";
// ─────────────────────────────────────────────────────────────

const products = [
  {
    id: "product-1",
    name: "Product Name",
    tagline: "A short one-line pitch for what this app does.",
    category: "Integration",
    icon: null, // replace with imported image
    description: `Your full app description goes here. Explain what the product does, who it's for, and the core value it delivers. You can use multiple paragraphs.

This second paragraph can cover additional capabilities, supported platforms, or any relevant technical context.`,
    installationGuide: [
      {
        step: 1,
        title: "Install the Extension",
        body: "Describe where and how to install the extension — marketplace link, download page, etc.",
      },
      {
        step: 2,
        title: "Configure Settings",
        body: "Walk through the initial configuration steps the user needs to complete after installation.",
      },
      {
        step: 3,
        title: "Connect Your Account",
        body: "Explain how to authenticate or connect the product to the user's existing account or workspace.",
      },
      {
        step: 4,
        title: "You're Ready",
        body: "Describe what the user can do now and any recommended first steps to get the most out of the product.",
      },
    ],
  },
  {
    id: "product-2",
    name: "Product Name",
    tagline: "A short one-line pitch for what this app does.",
    category: "Automation",
    icon: null,
    description: `Your full app description goes here.`,
    installationGuide: [
      { step: 1, title: "Install the Extension", body: "Step description." },
      { step: 2, title: "Configure Settings",    body: "Step description." },
      { step: 3, title: "Connect Your Account",  body: "Step description." },
    ],
  },
  {
    id: "product-3",
    name: "Product Name",
    tagline: "A short one-line pitch for what this app does.",
    category: "API",
    icon: null,
    description: `Your full app description goes here.`,
    installationGuide: [
      { step: 1, title: "Install the Extension", body: "Step description." },
      { step: 2, title: "Configure Settings",    body: "Step description." },
      { step: 3, title: "Connect Your Account",  body: "Step description." },
    ],
  },
];

export default products;

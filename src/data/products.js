import icon from "../assets/app-icons/insight-lens.png";

const products = [
  {
    id: "product-1",
    slug: "insight-lens",
    name: "Insight Lens",
    tagline:
      "Know which product is on fire before your customers start tweeting about it.",
    category: "Analytics",
    icon,
    description: `Insight Lens is a Freshdesk Marketplace app that turns your support queue into a real-time product health radar. It automatically groups incoming tickets by product, surfaces complaint trends, calculates escalation risk, and shows how your agents are distributed across issues — all without writing a single line of automation or leaving Freshdesk.

Every support team eventually faces the same problem: a wave of similar tickets arrives from customers reporting the same product issue, but agents are triaging them one by one. By the time a team lead notices the pattern, dozens of tickets are open, customers are frustrated, and your product team has heard nothing. Insight Lens closes that gap.

When an agent opens any ticket, the sidebar automatically detects which product it is about and shows the complaint count for the last 7 days, the top recurring issues from similar tickets, and up to 5 similar tickets the agent can navigate to with one click. The full-page dashboard gives team leads a command centre view — a colour-coded bar chart of affected products, an escalation risk score (0–100) computed from complaint volume, priority mix, unresolved ratio, and complaint trend, plus agent workload distribution and resolution time analytics with live SLA compliance tracking.

Insight Lens works the moment it is installed. No spreadsheet mapping, no automation configuration, and no developer involvement required.`,
    installationGuide: [
      {
        step: 1,
        title: "Find the App on the Marketplace",
        body: 'Go to Freshdesk → Admin → Marketplace Apps → Get More Apps and search for "Insight Lens". Click the listing to open it.',
      },
      {
        step: 2,
        title: "Click Install",
        body: "On the app listing page, click Install. The Freshdesk installation screen will open with the Insight Lens configuration page.",
      },
      {
        step: 3,
        title: "Enter Your Freshdesk Domain",
        body: "In the Freshdesk Domain field, type only your subdomain — the part before .freshdesk.com. For example, if your URL is acme.freshdesk.com, enter acme. Do not include https:// or .freshdesk.com.",
      },
      {
        step: 4,
        title: "Enter Your API Key",
        body: "Paste your Freshdesk API key. You can find it under Freshdesk → your profile picture → Profile Settings → scroll down to Your API Key.",
      },
      {
        step: 5,
        title: "Verify and Save",
        body: "Click Save. The installation page contacts your Freshdesk account to verify the credentials. If verification passes, the app is installed immediately. If it fails, an inline error will describe the problem.",
      },
      {
        step: 6,
        title: "Confirm Installation",
        body: "Open any ticket in Freshdesk — the Product Problem Radar card should appear in the right sidebar. Access the full dashboard from Admin → Marketplace Apps → Insight Lens → Open, or from the left navigation Apps section.",
      },
    ],
  },
];

export default products;

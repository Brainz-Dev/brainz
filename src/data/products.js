import icon from "../assets/app-icons/insight-lens.png";
import screenshotSidebar    from "../assets/screenshots/insight-lens/sidebar.png";
import screenshotDashboard  from "../assets/screenshots/insight-lens/dashboard.png";
import screenshotRiskScore  from "../assets/screenshots/insight-lens/risk-score.png";
import screenshotResolution from "../assets/screenshots/insight-lens/resolution-time.png";

const products = [
  {
    id: "product-1",
    slug: "insight-lens",
    name: "Insight Lens",
    tagline:
      "Know which product is on fire before your customers start tweeting about it.",
    category: "Analytics",
    icon,

    description: `Insight Lens is a Freshdesk Marketplace app that gives your support team real-time visibility into product health — directly inside the tickets they are already handling.

When an agent opens any ticket, the sidebar automatically identifies the product it relates to and instantly shows the complaint count for the configured period, the number of open tickets for that product, and up to five similar tickets the agent can navigate to with a single click. Every sidebar load fetches fresh data so counts always reflect the current state of your queue.

The full-page dashboard gives team leads a command-centre view: summary cards showing total complaints, products affected, and the most-complained-about product; a colour-coded bar chart of complaint volume by product; and a full product breakdown table. Clicking any product opens a deep-dive modal with four tabs — Escalation Risk Score (a 0–100 score computed from complaint volume, priority mix, unresolved ratio, and complaint trend), Ticket List, Agent Workload Distribution, and Resolution Time Analytics with SLA compliance tracking broken down by priority.

Insight Lens works the moment it is installed. No spreadsheet mapping, no automation rules, and no developer involvement required.`,

    features: [
      {
        title: "Real-time Sidebar Insights",
        description:
          "Complaint count, open ticket count, and up to 5 similar tickets shown every time an agent opens a ticket — always fresh, never cached.",
        icon: "chart",
      },
      {
        title: "Smart Product Detection",
        description:
          "Automatically matches tickets to products using the Freshdesk product field, tags, or subject line keywords — no manual tagging required.",
        icon: "search",
      },
      {
        title: "Escalation Risk Score",
        description:
          "A 0–100 risk score per product computed from complaint volume, priority mix, unresolved ratio, and complaint trend. Verdicts: Low, Medium, High, Critical.",
        icon: "shield",
      },
      {
        title: "Resolution Time Analytics",
        description:
          "Average resolution time, resolution rate %, and per-priority SLA compliance bars so you know exactly which products are missing SLA targets.",
        icon: "clock",
      },
      {
        title: "Agent Workload Distribution",
        description:
          "See how many tickets each agent is handling per product so team leads can rebalance work before anyone is overwhelmed.",
        icon: "users",
      },
      {
        title: "Configurable Dashboard",
        description:
          "Set the date range (today, yesterday, 3 days, 7 days), manage your product list, and control the minimum complaint threshold from the settings panel.",
        icon: "settings",
      },
      {
        title: "CSV Product Import",
        description:
          "Bulk-import your full product catalogue via a CSV file (one product name per row) instead of adding them one by one.",
        icon: "upload",
      },
      {
        title: "Zero Setup Required",
        description:
          "Works immediately after installation using your existing tickets and product data. No automations, no webhooks, no developer involvement.",
        icon: "lightning",
      },
    ],

    pricing: [
      {
        tier: "Account Plan",
        price: "$10",
        period: "account / month",
        pricingMethod: "Account Per Month",
        pricingMethodNote: "One flat rate covers all agents in your account — no per-seat charges.",
        description: "Billed monthly per account. Every agent gets full access to the sidebar and dashboard.",
        features: [
          "Real-time sidebar for all agents",
          "Full-page analytics dashboard",
          "Escalation Risk Score",
          "Resolution Time Analytics",
          "Agent Workload Distribution",
          "CSV product import",
          "Freshdesk Marketplace support",
        ],
        currencies: [
          { code: "USD", symbol: "$",   amount: "10"   },
          { code: "EUR", symbol: "€",   amount: "10"   },
          { code: "GBP", symbol: "£",   amount: "8"    },
          { code: "AUD", symbol: "A$",  amount: "15"   },
          { code: "INR", symbol: "₹",   amount: "1,000" },
          { code: "BRL", symbol: "R$",  amount: "53"   },
          { code: "ZAR", symbol: "R",   amount: "170"  },
        ],
        cta: "Get on Marketplace",
        ctaHref: "https://www.freshworks.com/apps/freshdesk/",
        highlighted: true,
      },
    ],

    screenshots: [
      {
        title: "Ticket Sidebar",
        image: screenshotSidebar,
        description:
          "Agents see complaint count, open ticket count, and similar tickets the moment they open any ticket — no tab switching, no manual searching.",
      },
      {
        title: "Analytics Dashboard",
        image: screenshotDashboard,
        description:
          "A full-page command centre with summary cards, a colour-coded bar chart by product, and a sortable breakdown table with one-click deep dives.",
      },
      {
        title: "Escalation Risk Score",
        image: screenshotRiskScore,
        description:
          "A 0–100 gauge chart with verdict badge and a list of risk drivers — so team leads know exactly why a product is flagged Critical.",
      },
      {
        title: "Resolution Time Analytics",
        image: screenshotResolution,
        description:
          "Average resolution time cards, per-priority bar charts, and SLA compliance indicators showing which priority tiers are within target.",
      },
    ],

    faq: [
      {
        question: "How much does Insight Lens cost?",
        answer:
          "Insight Lens is priced at $10 USD per account per month (Account Per Month billing). One flat rate covers every agent in your Freshdesk account — there are no per-seat or per-agent charges. Pricing in other currencies: €10 EUR · £8 GBP · A$15 AUD · ₹1,000 INR · R$53 BRL · R170 ZAR.",
      },
      {
        question: "Does Insight Lens work with all Freshdesk plans?",
        answer:
          "Yes. Insight Lens works with any Freshdesk plan that supports the Marketplace. The app uses standard Freshdesk REST APIs and requires only your subdomain and API key.",
      },
      {
        question: "How does product detection work?",
        answer:
          "The app checks the Freshdesk product field first. If no product is set on the ticket, it falls back to ticket tags, then to keywords in the subject line matched against your configured product list.",
      },
      {
        question: "Will it slow down Freshdesk for my agents?",
        answer:
          "No. The sidebar fetches fresh data on each activation and displays results in seconds. The number of API calls made per load is small and well within Freshdesk's standard rate limits for typical support teams.",
      },
      {
        question: "How do I add my products to the app?",
        answer:
          "Open the Dashboard → Settings panel. You can add product names one by one, import a CSV file (one product name per row), or let the app auto-detect products from the Freshdesk product catalogue.",
      },
      {
        question: "How is the Escalation Risk Score calculated?",
        answer:
          "The 0–100 score combines four factors: complaint volume (up to 30 pts), priority mix — percentage of High and Urgent tickets (up to 30 pts), unresolved ratio (up to 25 pts), and complaint trend — whether complaints are accelerating in the last 3 days (up to 15 pts).",
      },
      {
        question: "Where do I access the full dashboard?",
        answer:
          "Go to Freshdesk Admin → Marketplace Apps → Insight Lens → Open. You can also access it from the Apps section in the Freshdesk left navigation bar.",
      },
    ],

    // Sections rendered in this order on the detail page.
    // Remove a key to hide that section for this product.
    videoId: "sPUGq2Bn7Uk",
    videoTitle: "Insight Lens — Product Demo",

    sections: ["about", "video", "features", "methodology", "screenshots", "pricing", "install", "faq"],

    methodology: {
      riskScore: {
        title: "Escalation Risk Score",
        summary:
          "A 0–100 score computed from four independent factors. Each factor contributes a fixed number of points; the total is capped at 100.",
        factors: [
          {
            name: "Complaint Volume",
            max: 30,
            tiers: [
              { condition: "20+ tickets", points: 30, label: "Very high" },
              { condition: "10–19 tickets", points: 20, label: "Elevated" },
              { condition: "5–9 tickets", points: 10, label: "Moderate" },
              { condition: "< 5 tickets", points: 0, label: "Low" },
            ],
          },
          {
            name: "Priority Mix",
            max: 30,
            description: "Percentage of High or Urgent tickets",
            tiers: [
              { condition: "≥ 60% High/Urgent", points: 30, label: "Critical mix" },
              { condition: "≥ 30% High/Urgent", points: 18, label: "Heavy mix" },
              { condition: "≥ 10% High/Urgent", points: 8, label: "Some high priority" },
              { condition: "< 10% High/Urgent", points: 0, label: "Mostly low priority" },
            ],
          },
          {
            name: "Unresolved Ratio",
            max: 25,
            description: "Percentage of Open + Pending tickets",
            tiers: [
              { condition: "≥ 70% unresolved", points: 25, label: "Severely backlogged" },
              { condition: "≥ 40% unresolved", points: 15, label: "Backlogged" },
              { condition: "≥ 20% unresolved", points: 7, label: "Some backlog" },
              { condition: "< 20% unresolved", points: 0, label: "Healthy" },
            ],
          },
          {
            name: "Complaint Trend",
            max: 15,
            description: "Last 3 days vs. earlier in the period",
            tiers: [
              { condition: "More in last 3 days than before (and > 2 recent)", points: 15, label: "Accelerating" },
              { condition: "All complaints in last 3 days only", points: 10, label: "All recent" },
              { condition: "Stable or declining", points: 0, label: "Stable" },
            ],
          },
        ],
        verdicts: [
          { label: "Low",      range: "0 – 25",  color: "emerald", description: "Normal — no immediate action needed" },
          { label: "Medium",   range: "26 – 50", color: "blue",    description: "Watch — monitor for further increases" },
          { label: "High",     range: "51 – 75", color: "amber",   description: "Escalate — assign additional agents" },
          { label: "Critical", range: "76 – 100",color: "red",     description: "Urgent — escalate to management now" },
        ],
      },
      resolutionTime: {
        title: "Resolution Time Analytics",
        summary:
          "Measures how quickly your team resolves tickets per product, broken down by priority, with SLA compliance tracking.",
        howMeasured: [
          {
            metric: "Resolution Time (per ticket)",
            formula: "updated_at − created_at (in hours), for Resolved and Closed tickets only",
            note: "Tickets with negative durations or over 90 days are excluded as data anomalies.",
          },
          {
            metric: "Average Resolution Time",
            formula: "Sum of all resolution hours ÷ number of resolved tickets",
            note: "Displayed as minutes (< 1h), hours with one decimal (< 24h), or days with one decimal (≥ 24h).",
          },
          {
            metric: "Resolution Rate",
            formula: "Resolved tickets ÷ total tickets × 100, rounded to nearest integer",
            note: "A low rate on a large volume product is a strong risk signal.",
          },
          {
            metric: "SLA Compliance (per priority)",
            formula: "Tickets resolved within their priority threshold ÷ total resolved tickets × 100",
            note: "Overall bar turns green ≥ 90%, amber ≥ 70%, red < 70%.",
          },
        ],
        slaThresholds: [
          { priority: "Urgent", threshold: "≤ 4 hours" },
          { priority: "High",   threshold: "≤ 8 hours" },
          { priority: "Medium", threshold: "≤ 24 hours" },
          { priority: "Low",    threshold: "≤ 48 hours" },
        ],
      },
    },

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
        body: "Open any ticket in Freshdesk — the Insight Lens card should appear in the right sidebar. Access the full dashboard from Admin → Marketplace Apps → Insight Lens → Open, or from the Apps section in the left navigation.",
      },
    ],
  },
];

export default products;

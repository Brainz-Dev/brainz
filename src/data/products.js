import icon from "../assets/app-icons/insight-lens.png";
import screenshotSidebar from "../assets/screenshots/insight-lens/sidebar.png";
import screenshotDashboard from "../assets/screenshots/insight-lens/dashboard.png";
import screenshotRiskScore from "../assets/screenshots/insight-lens/risk-score.png";
import screenshotResolution from "../assets/screenshots/insight-lens/resolution-time.png";
import fdZbIcon from "../assets/app-icons/freshdesk-zoho-books.png";
import Fd_zb_sidebar from "../assets/screenshots/fd-zb/side-bar.png";
import Fd_zb_contact from "../assets/screenshots/fd-zb/contact-view.png";
import Fd_zb_sales from "../assets/screenshots/fd-zb/sales.png";
import Fd_zb_contact_form from "../assets/screenshots/fd-zb/contact-form.png";
import kanbanProIcon from "../assets/app-icons/kanban-pro.png";

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
        pricingMethodNote:
          "One flat rate covers all agents in your account — no per-seat charges.",
        description:
          "Billed monthly per account. Every agent gets full access to the sidebar and dashboard.",
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
          { code: "USD", symbol: "$", amount: "10" },
          { code: "EUR", symbol: "€", amount: "10" },
          { code: "GBP", symbol: "£", amount: "8" },
          { code: "AUD", symbol: "A$", amount: "15" },
          { code: "INR", symbol: "₹", amount: "1,000" },
          { code: "BRL", symbol: "R$", amount: "53" },
          { code: "ZAR", symbol: "R", amount: "170" },
        ],
        cta: "Get on Marketplace",
        ctaHref: "https://www.freshworks.com/apps/insight_lens_1/",
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
    videoId: "xp07A7eUFAE",
    videoTitle: "Insight Lens — Product Demo",

    sections: [
      "about",
      "video",
      "features",
      "methodology",
      "screenshots",
      "pricing",
      "install",
      "faq",
    ],

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
              {
                condition: "≥ 60% High/Urgent",
                points: 30,
                label: "Critical mix",
              },
              {
                condition: "≥ 30% High/Urgent",
                points: 18,
                label: "Heavy mix",
              },
              {
                condition: "≥ 10% High/Urgent",
                points: 8,
                label: "Some high priority",
              },
              {
                condition: "< 10% High/Urgent",
                points: 0,
                label: "Mostly low priority",
              },
            ],
          },
          {
            name: "Unresolved Ratio",
            max: 25,
            description: "Percentage of Open + Pending tickets",
            tiers: [
              {
                condition: "≥ 70% unresolved",
                points: 25,
                label: "Severely backlogged",
              },
              {
                condition: "≥ 40% unresolved",
                points: 15,
                label: "Backlogged",
              },
              {
                condition: "≥ 20% unresolved",
                points: 7,
                label: "Some backlog",
              },
              { condition: "< 20% unresolved", points: 0, label: "Healthy" },
            ],
          },
          {
            name: "Complaint Trend",
            max: 15,
            description: "Last 3 days vs. earlier in the period",
            tiers: [
              {
                condition: "More in last 3 days than before (and > 2 recent)",
                points: 15,
                label: "Accelerating",
              },
              {
                condition: "All complaints in last 3 days only",
                points: 10,
                label: "All recent",
              },
              { condition: "Stable or declining", points: 0, label: "Stable" },
            ],
          },
        ],
        verdicts: [
          {
            label: "Low",
            range: "0 – 25",
            color: "emerald",
            description: "Normal — no immediate action needed",
          },
          {
            label: "Medium",
            range: "26 – 50",
            color: "blue",
            description: "Watch — monitor for further increases",
          },
          {
            label: "High",
            range: "51 – 75",
            color: "amber",
            description: "Escalate — assign additional agents",
          },
          {
            label: "Critical",
            range: "76 – 100",
            color: "red",
            description: "Urgent — escalate to management now",
          },
        ],
      },
      resolutionTime: {
        title: "Resolution Time Analytics",
        summary:
          "Measures how quickly your team resolves tickets per product, broken down by priority, with SLA compliance tracking.",
        howMeasured: [
          {
            metric: "Resolution Time (per ticket)",
            formula:
              "updated_at − created_at (in hours), for Resolved and Closed tickets only",
            note: "Tickets with negative durations or over 90 days are excluded as data anomalies.",
          },
          {
            metric: "Average Resolution Time",
            formula: "Sum of all resolution hours ÷ number of resolved tickets",
            note: "Displayed as minutes (< 1h), hours with one decimal (< 24h), or days with one decimal (≥ 24h).",
          },
          {
            metric: "Resolution Rate",
            formula:
              "Resolved tickets ÷ total tickets × 100, rounded to nearest integer",
            note: "A low rate on a large volume product is a strong risk signal.",
          },
          {
            metric: "SLA Compliance (per priority)",
            formula:
              "Tickets resolved within their priority threshold ÷ total resolved tickets × 100",
            note: "Overall bar turns green ≥ 90%, amber ≥ 70%, red < 70%.",
          },
        ],
        slaThresholds: [
          { priority: "Urgent", threshold: "≤ 4 hours" },
          { priority: "High", threshold: "≤ 8 hours" },
          { priority: "Medium", threshold: "≤ 24 hours" },
          { priority: "Low", threshold: "≤ 48 hours" },
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

  {
    id: "product-2",
    slug: "freshdesk-zoho-books",
    name: "Zoho Books for Freshdesk",
    tagline:
      "See the customer's billing history without ever leaving the ticket.",
    category: "Integration",
    icon: fdZbIcon,

    description: `Zoho Books for Freshdesk is a Freshdesk Marketplace app that connects your support tickets directly to your Zoho Books accounting data — right inside the ticket sidebar your agents already use.

The moment an agent opens a ticket, the app matches the requester's email against your Zoho Books contacts. If a match exists, the sidebar shows the contact's name, email, and phone number at a glance, with a one-click "Expand contact" view showing their Customer or Vendor profile, outstanding receivables or payables, unused credits, and quick links to raise a new Invoice, Estimate, Bill, Purchase Order, or Expense for them in Zoho Books.

From the expanded view, agents can also browse Invoices, Estimates, Bills, Purchase Orders, and Expenses, and read or add Comments on the contact — all without switching tabs or asking the customer to repeat account details.

If the requester isn't a Zoho Books contact yet, the app doesn't leave the agent stuck — it offers to create a new Customer or Vendor on the spot, pre-filled with the requester's name, email, and mobile number from the ticket, or to browse the full existing contact list and link an existing one.`,

    features: [
      {
        title: "Instant Contact Match",
        description:
          "Matches the ticket requester's email against Zoho Books contacts automatically — no manual searching, every time the sidebar opens.",
        icon: "search",
      },
      {
        title: "Contact Snapshot in the Sidebar",
        description:
          "Name, email, and phone shown immediately, with one click to expand the full Customer or Vendor profile.",
        icon: "users",
      },
      {
        title: "Receivables, Payables & Credits",
        description:
          "See outstanding receivables or payables and unused credits for the contact, in their own currency, without opening Zoho Books.",
        icon: "chart",
      },
      {
        title: "One-Click Document Creation",
        description:
          "Jump straight into Zoho Books to create a new Invoice, Estimate, Bill, Purchase Order, or Expense — pre-linked to the matched contact.",
        icon: "zap",
      },
      {
        title: "Sales & Purchase History",
        description:
          "Browse a contact's Invoices, Estimates, Bills, Purchase Orders, and Expenses in dedicated tabs, right from the ticket.",
        icon: "clock",
      },
      {
        title: "Contact Comments",
        description:
          "Read and add comments on a Zoho Books contact from the same panel, so account notes stay attached to the right record.",
        icon: "mail",
      },
      {
        title: "Create Customer or Vendor Inline",
        description:
          "When no match is found, create a new Customer or Vendor without leaving the ticket — the form pre-fills from the requester's Freshdesk details.",
        icon: "link",
      },
      {
        title: "Secure OAuth Connection",
        description:
          "Connects to Zoho Books over OAuth, scoped to contacts, invoices, bills, estimates, expenses, and purchase orders — no shared passwords.",
        icon: "lock",
      },
    ],

    pricing: [
      {
        tier: "Account Plan",
        price: "$10",
        period: "account / month",
        pricingMethod: "Account Per Month",
        pricingMethodNote:
          "One flat rate covers all agents in your account — no per-seat charges.",
        description:
          "Billed monthly per account through the Freshdesk Marketplace.",
        features: [
          "Contact match in ticket sidebar",
          "Customer & Vendor creation",
          "Invoices, Estimates, Bills, POs & Expenses",
          "Contact comments",
        ],
        cta: "Get on Marketplace",
        ctaHref: "https://www.freshworks.com/apps/zoho_books_for_freshdesk/",
        highlighted: true,
      },
    ],

    screenshots: [
      {
        title: "Ticket Sidebar Match",
        image: Fd_zb_sidebar,
        description:
          "The instant a ticket opens, the matched Zoho Books contact's name, email, and phone appear in the sidebar.",
      },
      {
        title: "Contact Detail View",
        image: Fd_zb_contact,
        description:
          "Expanded Customer or Vendor profile with receivables/payables, unused credits, and a quick-create menu for new documents.",
      },
      {
        title: "Sales & Purchase Tabs",
        image: Fd_zb_sales,
        description:
          "Invoices, Estimates, Bills, Purchase Orders, and Expenses for the contact, browsable without leaving Freshdesk.",
      },
      {
        title: "Create Customer / Vendor",
        image: Fd_zb_contact_form,
        description:
          "A pre-filled form lets agents add a missing requester as a new Customer or Vendor in a couple of clicks.",
      },
    ],

    faq: [
      {
        question: "How does the app find the right Zoho Books contact?",
        answer:
          "It looks up the ticket requester's email against your Zoho Books contacts the moment the sidebar loads. If a match is found, the contact's details appear immediately; if not, you're offered the option to create one.",
      },
      {
        question: "What do I need to set up before it works?",
        answer:
          "After installing the app, open its settings and select your Zoho Books Data Centre and connect your Organisation via OAuth. Every ticket sidebar checks Zoho Books automatically once that's done.",
      },
      {
        question: "Can I create both Customers and Vendors from Freshdesk?",
        answer:
          'Yes. If the requester isn\'t already a contact, the sidebar offers separate "Add New Customer" and "Add New Vendor" buttons, each opening a form pre-filled with the requester\'s name, email, and mobile number.',
      },
      {
        question: "What Zoho Books data can I see without leaving the ticket?",
        answer:
          "Contact details, outstanding receivables or payables, unused credits, and — from dedicated tabs — Invoices, Estimates, Bills, Purchase Orders, Expenses, and Comments.",
      },
    ],
    videoId: "HZFOScZnlIk",
    videoTitle: "Zoho Books for Freshdesk — Product Demo",
    installationGuide: [
      {
        step: 1,
        title: "Install the App",
        body: 'Go to Freshdesk → Admin → Marketplace Apps → Get More Apps and search for "Zoho Books for Freshdesk". Click the listing, then click Install.',
      },
      {
        step: 2,
        title: "Create a Zoho API Console Client",
        body: "In the Zoho API Console for your data centre, register a Server-based Application to get a Client ID and Client Secret. Set its Redirect URI to https://oauth.freshdev.io/auth/callback.",
        link: {
          href: "https://www.zoho.com/developer/oauth/register-app.html",
          label: "Zoho OAuth app registration guide",
        },
      },
      {
        step: 3,
        title: "Connect Zoho Books via OAuth",
        body: "On the app's OAuth setup screen, enter the Client ID, Client Secret, and your Zoho Books Data Centre extension (e.g. com for US, eu for Europe, in for India). Click Authorize and grant the requested scopes for contacts, invoices, bills, estimates, expenses, and purchase orders.",
      },
      {
        step: 4,
        title: "Connect Your Freshdesk Account",
        body: "Enter your Freshdesk domain (e.g. example.freshdesk.com) and your Freshdesk API key, found under your profile picture → Profile Settings → API Key. Click Verify Connection.",
      },
      {
        step: 5,
        title: "Select Your Zoho Books Organisation",
        body: "Choose the Data Centre and Organisation you connected in step 3 — it must match the account you authorized — then click Save Organisation.",
      },
      {
        step: 6,
        title: "Confirm It's Working",
        body: "Open any ticket in Freshdesk. The sidebar should show the requester's matched Zoho Books contact, or an option to create one if no match is found.",
      },
    ],

    sections: [
      "about",
      "video",
      "features",
      "screenshots",
      "pricing",
      "install",
      "faq",
    ],
  },

  {
    id: "product-3",
    slug: "kanban-pro",
    name: "Kanban Pro for Zoho Desk",
    tagline:
      "Turn your Zoho Desk ticket queue into a drag-and-drop Kanban board.",
    category: "Productivity",
    marketplace: "Zoho Marketplace",
    icon: kanbanProIcon,
    videoId: "Tk4-LRs9a-U",
    videoTitle: "Kanban Pro for Zoho Desk — Product Demo",

    description: `Kanban Pro is a Zoho Desk extension that shows your tickets as a Kanban board. It opens full-screen from the Desk top band, so agents and team leads can see the whole queue at a glance instead of paging through list views.

Group columns by status, priority, team, channel, classification, or any custom picklist field. Narrow the board with filters for status, assignee ("Me" or Unassigned), team, priority, channel, due date, created and modified dates, custom fields, and subject or ticket number.

Drag a card to another column and the ticket is updated in Zoho Desk instantly. Every card also has quick menus for status, priority, and assignee, and a quick-view drawer shows editable properties, the description, and the latest conversations without leaving the board.

For bigger clean-ups, select several cards and bulk-update their status, assignee, or priority in one go. WIP limits per column and SLA badges (overdue / due soon) help teams spot bottlenecks early, and saved views let each agent keep their own layouts while admins publish shared views for the whole team.`,

    features: [
      {
        title: "Group by Any Field",
        description:
          "Build columns from status, priority, team, channel, classification, or any custom picklist field in your Zoho Desk.",
        icon: "chart",
      },
      {
        title: "Drag-and-Drop Updates",
        description:
          "Move a card between columns and the ticket is updated in Zoho Desk straight away, with automatic rollback if the update fails.",
        icon: "zap",
      },
      {
        title: "Powerful Filters",
        description:
          "Filter by status, assignee (including Me and Unassigned), team, priority, channel, due date, created/modified date, custom fields, and subject or #number.",
        icon: "search",
      },
      {
        title: "Quick-View Drawer",
        description:
          "Open any card to see and edit its properties, read the description, and check the latest conversations without leaving the board.",
        icon: "mail",
      },
      {
        title: "Bulk Actions",
        description:
          "Multi-select cards and update status, assignee, or priority for all of them at once.",
        icon: "users",
      },
      {
        title: "WIP Limits & SLA Badges",
        description:
          "Set work-in-progress limits per column and see overdue / due-soon badges on cards so bottlenecks and SLA risks stand out.",
        icon: "clock",
      },
      {
        title: "Saved Views",
        description:
          "Save personal board layouts with your grouping, filters, and sort. Admins can publish shared views for the whole team.",
        icon: "settings",
      },
      {
        title: "Rate-Limit Aware",
        description:
          "Requests are queued and paced to stay within Zoho Desk API limits, and the board auto-refreshes visible columns in the background.",
        icon: "refresh",
      },
    ],

    faq: [
      {
        question: "Where do I open Kanban Pro in Zoho Desk?",
        answer:
          "After installation, open Kanban Pro from the app menu in the Zoho Desk top band. The board opens full-screen inside Desk.",
      },
      {
        question: "Which fields can I group the board by?",
        answer:
          "Status, priority, team, channel, classification, and any single-select custom picklist field. Assignee is available as a filter, card menu, and bulk action rather than as columns, so large teams don't end up with hundreds of columns.",
      },
      {
        question: "Does dragging a card really change the ticket?",
        answer:
          "Yes. Dropping a card on another column updates that field on the ticket in Zoho Desk. If the update fails, the card moves back and you see an error message.",
      },
      {
        question: "Can I share board views with my team?",
        answer:
          "Every agent can save personal views. Zoho Desk administrators can also share a view with everyone in the organisation.",
      },
      {
        question: "Which Zoho Desk data centres are supported?",
        answer:
          "Kanban Pro works with Zoho Desk in the US, EU, India, Australia, Japan, China, Saudi Arabia, and Canada data centres.",
      },
      {
        question: "What permissions does the app need?",
        answer:
          "It reads tickets, contacts, basic organisation data, and settings, and updates tickets. Each agent authorises the connection with their own Zoho Desk account, so the board respects their existing permissions.",
      },
    ],

    installationGuide: [
      {
        step: 1,
        title: "Install the Extension",
        body: 'In Zoho Desk, go to Setup → Marketplace → All, search for "Kanban Pro", and click Install.',
      },
      {
        step: 2,
        title: "Authorise the Connection",
        body: "Approve the requested Zoho Desk permissions (read access to tickets, contacts, basic info, and settings, plus ticket updates). Each agent is asked to authorise their own account the first time they open the board.",
      },
      {
        step: 3,
        title: "Open the Board",
        body: "Click Kanban Pro in the Zoho Desk top-band app menu. The board opens full-screen and loads tickets for your current department.",
      },
      {
        step: 4,
        title: "Set Up Your View",
        body: "Choose a department, pick what to group by, add filters, and click Save to keep the layout as a personal view, or share it with everyone if you're an admin.",
      },
    ],

    sections: ["about", "video", "features", "install", "faq"],
  },
];

export default products;

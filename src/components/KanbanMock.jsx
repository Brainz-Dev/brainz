// Coded replica of the Kanban Pro for Zoho Desk board, used as the hero visual.
// Purely decorative — the wrapper exposes a single accessible label.

const icons = {
  chevron:  "M19.5 8.25l-7.5 7.5-7.5-7.5",
  columns:  "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z",
  sort:     "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
  eyeOff:   "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88",
  search:   "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  refresh:  "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  filter:   "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z",
  plus:     "M12 4.5v15m7.5-7.5h-15",
  close:    "M6 18L18 6M6 6l12 12",
  board:    "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  dots:     "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
  clock:    "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  flag:     "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5",
  thread:   "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",
  // channels
  web:      "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  chat:     "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  email:    "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  phone:    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
};

const Icon = ({ name, className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={icons[name]} />
  </svg>
);

const priorityStyles = {
  High:   { border: "border-l-[#E5484D]", flag: "text-[#E5484D]" },
  Medium: { border: "border-l-[#F5B92E]", flag: "text-[#E0A21B]" },
  Low:    { border: "border-l-[#3DB46D]", flag: "text-[#3DB46D]" },
  None:   { border: "border-l-[#3DB46D]", flag: "text-ink-3" },
};

const statusStyles = {
  Open:      "bg-[#EAF1FE] text-[#2463EB]",
  Escalated: "bg-[#E6ECFA] text-[#1E4FBF]",
  Closed:    "bg-[#E6F6EC] text-[#1F8A4C]",
};

// Assigned agents — picked per ticket so the board shows a mixed team
const agents = [
  { initials: "AK", color: "bg-[#E5484D]" },
  { initials: "RS", color: "bg-[#6E56CF]" },
  { initials: "MT", color: "bg-[#0D9488]" },
  { initials: "JD", color: "bg-[#D97706]" },
  { initials: "NP", color: "bg-[#2463EB]" },
];

const columns = [
  {
    name: "None", count: 25, marker: "bg-[#C9CDD4]",
    cards: [
      { id: 1942, channel: "web",   due: { label: "Overdue 1d", tone: "red" },   subject: "Unable to upgrade subscription plan",   contact: "Daniel Moore",  age: "2h ago",  status: "Open",      priority: "Low",    threads: 3 },
      { id: 1938, channel: "thread",                                              subject: "Request: dark mode for agent portal",   contact: "Sofia Ruiz",    age: "5h ago",  status: "Escalated", priority: "Medium", threads: 2 },
      { id: 1931, channel: "email", due: { label: "Due in 3h", tone: "amber" },   subject: "Invoice PDF missing tax line",          contact: "Liam Carter",   age: "1d ago",  status: "Open",      priority: "Medium", threads: 1 },
    ],
  },
  {
    name: "India", count: 14, marker: "bg-[#8E4EC6]",
    cards: [
      { id: 1940, channel: "chat",  due: { label: "Overdue 2d", tone: "red" },   subject: "Report export returns an empty CSV",    contact: "Priya Nair",    age: "3h ago",  status: "Escalated", priority: "High",   threads: 4 },
      { id: 1927, channel: "chat",                                                subject: "Dashboard slow to load after update",   contact: "Arjun Mehta",   age: "1d ago",  status: "Open",      priority: "High",   threads: 2 },
      { id: 1915, channel: "email", due: { label: "Due in 5h", tone: "amber" },   subject: "App crashes on startup (Android 14)",   contact: "Kavya Iyer",    age: "2d ago",  status: "Open",      priority: "Medium", threads: 1 },
    ],
  },
  {
    name: "USA", count: 11, marker: "bg-[#3BB7E8]",
    cards: [
      { id: 1939, channel: "chat",                                                subject: "Refund not reflected on statement",     contact: "Emily Brooks",  age: "4h ago",  status: "Open",      priority: "Low",    threads: 2 },
      { id: 1933, channel: "thread", due: { label: "Overdue 1d", tone: "red" },  subject: "Wrong item delivered — order #48213",   contact: "Jason Lee",     age: "9h ago",  status: "Escalated", priority: "High",   threads: 5, lifted: true },
      { id: 1920, channel: "thread",                                              subject: "Password reset email not received",     contact: "Megan Ross",    age: "1d ago",  status: "Open",      priority: "Low",    threads: 1 },
    ],
  },
  {
    name: "UK", count: 29, marker: "bg-[#2463EB]",
    cards: [
      { id: 1941, channel: "email", due: { label: "Overdue 3d", tone: "red" },   subject: "Charged twice for March invoice",       contact: "Oliver Hughes", age: "6h ago",  status: "Closed",    priority: "High",   threads: 6 },
      { id: 1929, channel: "thread",                                              subject: "Shipping label fails to generate",      contact: "Amelia Clark",  age: "1d ago",  status: "Open",      priority: "Low",    threads: 2 },
      { id: 1918, channel: "web",   due: { label: "Due in 1h", tone: "amber" },   subject: "SSO login loops back to sign-in",       contact: "Harry Patel",   age: "2d ago",  status: "Escalated", priority: "Medium", threads: 3 },
    ],
  },
  {
    name: "UAE", count: 24, marker: "bg-[#8E4EC6]",
    cards: [
      { id: 1937, channel: "chat",                                                subject: "Dashboard widgets not loading",         contact: "Omar Haddad",   age: "5h ago",  status: "Escalated", priority: "None",   threads: 1 },
      { id: 1925, channel: "phone", due: { label: "Overdue 1d", tone: "red" },   subject: "App freezes when attaching files",      contact: "Layla Saeed",   age: "1d ago",  status: "Escalated", priority: "Low",    threads: 2 },
      { id: 1912, channel: "chat",                                                subject: "Feature request: bulk tag editing",     contact: "Yusuf Rahman",  age: "3d ago",  status: "Open",      priority: "Low",    threads: 1 },
    ],
  },
  {
    name: "Germany", count: 17, marker: "bg-[#F5B92E]",
    cards: [
      { id: 1936, channel: "email",                                               subject: "VAT number not saved on account",       contact: "Lena Fischer",  age: "2h ago",  status: "Open",      priority: "Medium", threads: 2 },
      { id: 1923, channel: "web",   due: { label: "Overdue 2d", tone: "red" },   subject: "Webhook retries flooding the queue",    contact: "Jonas Weber",   age: "1d ago",  status: "Escalated", priority: "High",   threads: 4 },
      { id: 1910, channel: "chat",                                                subject: "Export tickets to CSV by date range",   contact: "Mia Schulz",    age: "3d ago",  status: "Open",      priority: "Low",    threads: 1 },
    ],
  },
];

const dueTones = {
  red:   "text-[#D93636] bg-[#FDECEC]",
  amber: "text-[#A86A00] bg-[#FFF4DB]",
};

function Dropdown({ label, value, icon, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-[#E3E5E8] bg-white text-[11.5px] whitespace-nowrap ${className}`}>
      {icon && <Icon name={icon} className="w-3.5 h-3.5 text-ink-3" />}
      {label && <span className="text-ink-3">{label}</span>}
      {value && <span className="text-ink font-medium">{value}</span>}
      <Icon name="chevron" className="w-3 h-3 text-ink-3" />
    </span>
  );
}

function FilterChip({ label, active }) {
  if (active) {
    return (
      <span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full border border-[#BFD3FB] bg-[#EEF4FF] text-[11px] text-[#2463EB] font-medium whitespace-nowrap">
        {label}
        <Icon name="close" className="w-3 h-3" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 h-6 px-2.5 rounded-full border border-[#E3E5E8] bg-white text-[11px] text-ink-2 whitespace-nowrap">
      {label}
      <Icon name="chevron" className="w-3 h-3 text-ink-3" />
    </span>
  );
}

function TicketCard({ card }) {
  const p = priorityStyles[card.priority];
  const agent = agents[card.id % agents.length];

  return (
    <div
      className={`bg-white rounded-md border border-[#E6E8EB] border-l-[3px] ${p.border} px-3 py-2.5 ${
        card.lifted ? "shadow-[0_12px_28px_rgba(25,25,25,0.16)] rotate-[1.5deg] -translate-y-0.5 relative z-10" : "shadow-[0_1px_2px_rgba(25,25,25,0.05)]"
      }`}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[11px] text-ink-2 font-medium">#{card.id}</span>
        <Icon name={card.channel} className="w-3 h-3 text-ink-3" />
        {card.due && (
          <span className={`ml-auto inline-flex items-center gap-1 text-[10px] font-medium rounded px-1.5 py-px ${dueTones[card.due.tone]}`}>
            <Icon name="clock" className="w-2.5 h-2.5" />
            {card.due.label}
          </span>
        )}
      </div>
      <p className="text-[12px] font-semibold text-ink leading-snug mb-1">{card.subject}</p>
      <p className="text-[10.5px] text-ink-3 mb-2">{card.contact} · {card.age}</p>
      <div className="flex items-center gap-2">
        <span className={`text-[10.5px] font-medium rounded px-1.5 py-px ${statusStyles[card.status]}`}>{card.status}</span>
        <span className="inline-flex items-center gap-1 text-[10.5px] text-ink-2">
          <Icon name="flag" className={`w-3 h-3 ${p.flag}`} />
          {card.priority === "None" ? "—" : card.priority}
        </span>
        <span className="ml-auto inline-flex items-center gap-0.5 text-[10.5px] text-ink-3">
          <Icon name="thread" className="w-3 h-3" />
          {card.threads}
        </span>
        <span className={`w-5 h-5 rounded-full ${agent.color} text-white text-[8.5px] font-semibold flex items-center justify-center`}>
          {agent.initials}
        </span>
      </div>
    </div>
  );
}

function KanbanMock() {
  return (
    <div className="font-poppins text-left select-none" aria-hidden="true">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 h-12 border-b border-[#ECEDEF] bg-white">
        <span className="flex items-center gap-1.5 mr-1">
          <span className="w-5 h-5 rounded bg-[#2463EB] flex items-end justify-center gap-[2px] p-[3px]">
            <span className="w-[3px] h-full bg-white rounded-sm" />
            <span className="w-[3px] h-2/3 bg-white rounded-sm" />
            <span className="w-[3px] h-[85%] bg-white rounded-sm" />
          </span>
          <span className="text-[13px] font-semibold text-ink whitespace-nowrap">Kanban Pro</span>
        </span>
        <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink whitespace-nowrap">
          <Icon name="board" className="w-3.5 h-3.5 text-ink-2" />
          All tickets by status
          <span className="w-1.5 h-1.5 rounded-full bg-[#E0A21B]" />
          <Icon name="chevron" className="w-3 h-3 text-ink-3" />
        </span>
        <span className="hidden sm:inline-flex items-center h-7 px-2.5 rounded-md border border-[#E3E5E8] text-[11.5px] font-medium text-ink whitespace-nowrap">Save as…</span>
        <span className="hidden lg:block w-px h-5 bg-[#ECEDEF] mx-1" />
        <Dropdown label="Department" value="Support" className="hidden lg:inline-flex" />
        <Dropdown label="Group by" value="Country" icon="columns" className="hidden md:inline-flex" />
        <Dropdown label="Sort" value="Recently modified" icon="sort" className="hidden xl:inline-flex" />
        <span className="ml-auto hidden md:inline-flex items-center gap-1.5 h-7 w-[150px] px-2.5 rounded-md border border-[#E3E5E8] text-[11.5px] text-ink-3">
          <Icon name="search" className="w-3.5 h-3.5" />
          Subject or #number
        </span>
        <Icon name="refresh" className="w-4 h-4 text-ink-3 ml-auto md:ml-1" />
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-1.5 px-4 h-10 border-b border-[#ECEDEF] bg-white overflow-hidden">
        <Icon name="filter" className="w-3.5 h-3.5 text-ink-3 flex-shrink-0" />
        <FilterChip label="Status" />
        <FilterChip label="Assignee" />
        <FilterChip label="Priority" />
        <span className="hidden sm:contents">
          <FilterChip label="Channel" />
          <FilterChip label="Due" />
          <FilterChip label="Created" />
        </span>
        <span className="hidden md:inline-flex items-center gap-1 h-6 px-2.5 rounded-full border border-[#E3E5E8] text-[11px] text-ink-2 whitespace-nowrap">
          <Icon name="plus" className="w-3 h-3" />
          More filters
        </span>
        <span className="hidden md:inline text-[11px] font-medium text-[#2463EB] ml-1 whitespace-nowrap">Clear all</span>
      </div>

      {/* Board — fixed-width columns, clipped at the right edge like a real scrolling board */}
      <div className="relative bg-[#F4F5F7] px-3 pt-3 pb-4 overflow-hidden">
        <div className="flex gap-3">
          {columns.map((col) => (
            <div key={col.name} className="w-[236px] flex-shrink-0 rounded-lg bg-[#EBEDF0] p-2">
              <div className="flex items-center gap-2 px-1 pt-0.5 pb-2.5">
                <span className={`w-[3px] h-4 rounded-full ${col.marker}`} />
                <span className="text-[12.5px] font-semibold text-ink">{col.name}</span>
                <span className="text-[10.5px] font-medium text-ink-2 bg-white/80 rounded-full px-1.5">{col.count}</span>
                <Icon name="dots" className="w-4 h-4 text-ink-3 ml-auto" />
              </div>
              <div className="flex flex-col gap-2">
                {col.cards.map((card) => (
                  <TicketCard key={card.id} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Right-edge fade hints at more columns */}
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#F4F5F7] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default KanbanMock;

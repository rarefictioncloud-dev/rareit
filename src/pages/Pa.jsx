// src/pages/pa.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Workflow,
  FileText,
  BarChart3,
  Bell,
  Plug,
  UserPlus,
  Clock,
  ShieldCheck,
  TrendingDown,
  Users,
  Plus,
  Zap,
  Settings,
} from "lucide-react";

/* ---------- STYLE HELPERS (same white theme as Home, About, Careers and Contact) ---------- */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const sectionY = "py-14 sm:py-20 lg:py-24 2xl:py-28";
const h2Cls =
  "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)] 2xl:text-[clamp(48px,3.4vw,68px)]";
const leadCls = "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-3xl 2xl:text-xl";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-full border border-brand/25 bg-white text-brand transition";
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";
const card =
  "relative overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-56px_rgba(11,21,48,0.35)] 2xl:rounded-[32px]";

function PrimaryBtn({ to, children, dark = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition active:scale-[0.98] 2xl:text-base ${
        dark ? "bg-brand hover:bg-brand-dark" : "bg-brand hover:bg-brand-dark"
      } ${focusRing}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5 2xl:size-11">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

/* ---------- DATA ---------- */
const flow = [
  "A new request arrives (form, email or app)",
  "Details are checked and sorted automatically",
  "The right person gets an approval task",
  "Records update across your systems",
  "Everyone is notified, and the log is saved",
];

const parts = [
  {
    icon: Zap,
    title: "Trigger",
    text: "Something happens that starts the workflow: a form is filled, an email arrives, an order is placed or a date is reached.",
    example: "Example: a customer submits an enquiry form.",
  },
  {
    icon: Settings,
    title: "Actions",
    text: "The system does the work for you: it checks the data, looks up records, creates tasks, updates sheets and sends messages.",
    example: "Example: add the lead to your CRM and assign it to a sales person.",
  },
  {
    icon: Check,
    title: "Result",
    text: "The right people are informed, your records are up to date and every step is logged for review.",
    example: "Example: the team gets a WhatsApp alert and the customer gets a confirmation.",
  },
];

const useCases = [
  {
    icon: Workflow,
    title: "Approvals and workflows",
    text: "Leave, purchase, expense and onboarding requests move to the right person on their own, with reminders and a full history.",
  },
  {
    icon: FileText,
    title: "Document and data handling",
    text: "Pull data from invoices, forms and spreadsheets, validate it and push it into your system without retyping.",
  },
  {
    icon: BarChart3,
    title: "Reports and dashboards",
    text: "Daily and weekly reports that build and send themselves, using live data instead of manual copy and paste.",
  },
  {
    icon: Bell,
    title: "Alerts and follow-ups",
    text: "Payment reminders, stock alerts, ticket escalations and customer updates sent at the right moment.",
  },
  {
    icon: Plug,
    title: "System integrations",
    text: "Connect your CRM, accounting, ERP, e-commerce and internal tools so data flows both ways.",
  },
  {
    icon: UserPlus,
    title: "Customer and staff onboarding",
    text: "Accounts, checklists, welcome messages and access set up in one go for every new customer or employee.",
  },
];

const deliverables = [
  "Process mapping and automation roadmap",
  "Custom workflows built around how you work",
  "Integrations with your existing tools and data",
  "Dashboards to track every automated process",
  "Role based access, approvals and audit trails",
  "Testing, team training and documentation",
  "Monitoring, fixes and updates after go-live",
];

// Example tools we can connect, grouped by category. Edit freely.
const appCategories = [
  "All",
  "CRM and sales",
  "Email and chat",
  "Sheets and files",
  "Accounting and payments",
  "Forms and support",
  "Online stores",
  "Projects",
  "Databases and cloud",
];

const apps = [
  { name: "Zoho CRM", cat: "CRM and sales" },
  { name: "HubSpot", cat: "CRM and sales" },
  { name: "Salesforce", cat: "CRM and sales" },
  { name: "Pipedrive", cat: "CRM and sales" },
  { name: "Gmail", cat: "Email and chat" },
  { name: "Outlook", cat: "Email and chat" },
  { name: "WhatsApp Business", cat: "Email and chat" },
  { name: "Slack", cat: "Email and chat" },
  { name: "Google Sheets", cat: "Sheets and files" },
  { name: "Excel", cat: "Sheets and files" },
  { name: "Google Drive", cat: "Sheets and files" },
  { name: "Dropbox", cat: "Sheets and files" },
  { name: "Zoho Books", cat: "Accounting and payments" },
  { name: "QuickBooks", cat: "Accounting and payments" },
  { name: "Razorpay", cat: "Accounting and payments" },
  { name: "Stripe", cat: "Accounting and payments" },
  { name: "Google Forms", cat: "Forms and support" },
  { name: "Typeform", cat: "Forms and support" },
  { name: "Freshdesk", cat: "Forms and support" },
  { name: "Zendesk", cat: "Forms and support" },
  { name: "Shopify", cat: "Online stores" },
  { name: "WooCommerce", cat: "Online stores" },
  { name: "Trello", cat: "Projects" },
  { name: "Asana", cat: "Projects" },
  { name: "Jira", cat: "Projects" },
  { name: "Notion", cat: "Projects" },
  { name: "Firebase", cat: "Databases and cloud" },
  { name: "MySQL", cat: "Databases and cloud" },
  { name: "PostgreSQL", cat: "Databases and cloud" },
  { name: "AWS", cat: "Databases and cloud" },
];

const benefits = [
  { icon: Clock, title: "Hours back every week", text: "Repetitive tasks run in the background so your team can focus on real work." },
  { icon: TrendingDown, title: "Fewer errors and delays", text: "Rules replace manual steps, so data stays consistent and nothing gets forgotten." },
  { icon: Users, title: "Clear ownership", text: "Every task has an owner, a status and a deadline that everyone can see." },
  { icon: ShieldCheck, title: "Control and compliance", text: "Approvals, permissions and logs give you a clean record of who did what." },
];

const steps = [
  { title: "Discover", text: "We study your current process, find where time is lost and pick what to automate first." },
  { title: "Design", text: "We map the new workflow, rules and integrations, and agree the plan with you before building." },
  { title: "Build", text: "We develop and connect the automation in short cycles so you can review progress early." },
  { title: "Test and launch", text: "We test with real scenarios, train your team and release in a safe, staged way." },
  { title: "Support", text: "We monitor, fix and improve the workflows as your business changes." },
];

const tech = [
  "REST APIs",
  "Webhooks",
  "Node.js",
  "Python",
  "React dashboards",
  "Firebase",
  "SQL databases",
  "Google Workspace",
  "Email and SMS",
  "WhatsApp Business",
  "No-code tools (n8n, Zapier, Power Automate)",
];

const faqs = [
  {
    q: "What is process automation?",
    a: "It means using software to run repeatable business tasks, such as approvals, data entry, reports and notifications, without manual effort at every step.",
  },
  {
    q: "Which processes should we automate first?",
    a: "Start with tasks that are frequent, rule based and error prone. In the discovery stage we rank your processes by effort saved and risk, and begin with the easiest win.",
  },
  {
    q: "Which apps and tools can you connect?",
    a: "Most tools that offer an API or standard integration, including CRMs, email, spreadsheets, accounting, payments, forms and online stores. If your tool is not listed, tell us and we will check what is possible.",
  },
  {
    q: "Will it work with the tools we already use?",
    a: "In most cases yes. We connect through APIs, webhooks and standard integrations, so you do not have to replace your current systems.",
  },
  {
    q: "Do we need a technical team to run it?",
    a: "No. We build simple dashboards and controls for your staff, and we handle monitoring and updates for you.",
  },
  {
    q: "Is our data safe?",
    a: "We use role based access, encrypted connections and audit logs, and we only connect the data each workflow needs.",
  },
  {
    q: "How long does a project take?",
    a: "A single workflow can go live in a few weeks. Larger, multi-system automation is planned in phases after discovery.",
  },
];

/* ---------- PAGE ---------- */
export default function PA() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? apps : apps.filter((a) => a.cat === cat);

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-3 sm:pt-5" aria-label="Process Automation">
        <div className={`${wrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] 2xl:rounded-[44px]`}>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]`} />

          <div className="grid items-center gap-10 px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-14 lg:pb-16 lg:pt-20 2xl:gap-24 2xl:px-20 2xl:pb-24 2xl:pt-28">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand 2xl:text-base">Process Automation</p>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(48px,5vw,84px)] lg:leading-[0.98] 2xl:text-[clamp(72px,4.8vw,104px)]">
                Process automation that works while you work<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 2xl:max-w-2xl 2xl:text-xl">
                We turn repetitive, manual business tasks into reliable automated workflows, connected to the tools you
                already use and built around the way your team operates.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
                <PrimaryBtn to="/contact">Automate a process</PrimaryBtn>
              </div>
            </div>

            {/* Workflow card */}
            <div className="min-w-0 rounded-3xl border border-line bg-[#F4F5F8] p-5 sm:p-8 2xl:p-10">
              <p className="text-sm font-semibold text-muted 2xl:text-base">A typical automated workflow</p>
              <ol className="relative mt-5 space-y-3 2xl:space-y-4">
                <span aria-hidden="true" className="absolute bottom-6 left-[34px] top-6 hidden w-px bg-brand/25 sm:block" />
                {flow.map((item, i) => (
                  <li key={item} className="relative flex items-center gap-4 rounded-2xl border border-line bg-white p-3.5 sm:p-4 2xl:p-5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white 2xl:size-11 2xl:text-base">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold leading-snug 2xl:text-lg">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32">
          <h2 className={h2Cls}>
            Less manual work. More done<span className="text-brand">.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
            <p>
              Most businesses lose hours every week to copying data, chasing approvals, sending reminders and building
              reports by hand. Process automation removes that work.
            </p>
            <p>
              We start by understanding your process, then design and build workflows that follow your rules, connect
              your systems and keep a clear record of every step. You stay in control, and the routine work runs by
              itself.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW AN AUTOMATION WORKS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            How an automation works<span className="text-brand">.</span>
          </h2>
          <p className={leadCls}>
            Every automation follows the same simple pattern: something happens, the system acts, and the right people
            see the result.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6 2xl:gap-8">
            {parts.map(({ icon: Icon, title, text, example }, i) => (
              <li key={title} className={`${card} flex flex-col p-6 pt-8 sm:p-8 sm:pt-10 2xl:p-10 2xl:pt-12`}>
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <div className="flex items-center justify-between">
                  <span className={`${iconTile} size-12 2xl:size-14`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 2xl:text-7xl">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight 2xl:text-[32px]">{title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted 2xl:text-lg">{text}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-semibold leading-snug 2xl:text-base">{example}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            What we can automate for you<span className="text-brand">.</span>
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6 2xl:gap-8">
            {useCases.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="group rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-40px_rgba(11,21,48,0.4)] sm:p-8 2xl:rounded-[32px] 2xl:p-10"
              >
                <span className={`${iconTile} size-12 group-hover:bg-brand group-hover:text-white 2xl:size-14`}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight 2xl:text-[28px]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted 2xl:text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== WHAT WE DELIVER (dark panel) ===== */}
      <section className={`${wrap} pb-14 sm:pb-20 lg:pb-24 2xl:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-[24px] bg-ink px-5 py-12 text-white sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-14 lg:py-20 2xl:rounded-[44px] 2xl:px-20 2xl:py-28">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rotate-12 rounded-[48px] bg-white/[0.05]" />
          <div aria-hidden="true" className="absolute -bottom-32 left-10 -z-10 h-[360px] w-[520px] -rotate-6 rounded-[48px] bg-white/[0.04]" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 2xl:gap-28">
            <div className="min-w-0">
              <h2 className={h2Cls}>
                What you get with Rare IT<span className="text-brand">.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg 2xl:max-w-xl 2xl:text-xl">
                A complete, working automation setup, not just a script. We deliver it, train your team and stay with
                you after launch.
              </p>
            </div>
            <ul className="min-w-0 space-y-3 2xl:space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-4 rounded-2xl border border-white/15 p-3.5 sm:p-4 2xl:p-5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand 2xl:size-8">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold leading-snug sm:text-base 2xl:text-lg">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== APPS WE CONNECT ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Apps we can connect<span className="text-brand">.</span>
          </h2>
          <p className={leadCls}>
            Pick a category to see examples of tools we connect into one workflow. Availability depends on each tool's
            API, and we confirm what is possible during discovery.
          </p>

          {/* Chips: one scrolling row on phones, wrapped on larger screens */}
          <div
            className="-mx-3 mt-8 flex gap-2 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter apps by category"
          >
            {appCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition 2xl:px-5 2xl:py-2.5 2xl:text-base ${focusRing} ${
                  cat === c
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white hover:border-brand/50 hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4">
            {shown.map((a) => (
              <li key={a.name} className="rounded-2xl border border-line bg-[#F4F5F8] p-5 2xl:p-6">
                <p className="font-display text-lg font-medium tracking-tight 2xl:text-xl">{a.name}</p>
                <p className="mt-1 text-sm text-muted 2xl:text-base">{a.cat}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-white p-6 sm:flex-row sm:items-center 2xl:p-8">
            <p className="font-semibold 2xl:text-lg">Do not see your tool? If it has an API, we can most likely connect it.</p>
            <Link
              to="/contact"
              className={`group inline-flex items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline 2xl:text-base ${focusRing}`}
            >
              Ask about your tool
              <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Why teams choose automation<span className="text-brand">.</span>
          </h2>
          {/* gap-px over a line coloured background gives clean dividers at every column count */}
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 2xl:rounded-[32px]">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group bg-white p-6 transition hover:bg-ink sm:p-8 2xl:p-10">
                <Icon className="text-brand" size={28} strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight group-hover:text-white 2xl:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-white/70 2xl:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            How we work<span className="text-brand">.</span>
          </h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-5 lg:gap-x-0">
            {steps.map((s, i) => (
              <li key={s.title} className="relative border-t border-ink/15 py-7 lg:pr-8 2xl:pr-12">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-6xl 2xl:text-7xl">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight 2xl:text-[30px]">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted 2xl:max-w-sm 2xl:text-base">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32`}>
          <div>
            <h2 className={h2Cls}>
              Technology we use<span className="text-brand">.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-xl 2xl:text-xl">
              We pick the simplest tool that does the job well. Custom code where you need control, ready-made
              platforms where they save time.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5 sm:gap-3">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition hover:border-brand/50 hover:text-brand sm:px-5 sm:py-2.5 2xl:text-base"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className={h2Cls}>
              Common questions<span className="text-brand">.</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-white px-5 transition open:border-brand/40 open:shadow-[0_24px_50px_-36px_rgba(11,21,48,0.35)] sm:px-6 lg:rounded-3xl lg:px-9 lg:hover:border-ink/25"
              >
                <summary
                  className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden sm:text-lg lg:min-h-24 lg:text-xl 2xl:min-h-28 2xl:text-2xl [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {f.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white lg:size-11">
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-muted lg:pb-9 lg:text-base lg:leading-[1.7] 2xl:text-lg">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className={`${wrap} pb-16 sm:pb-24 2xl:pb-32`}>
        <div className="relative isolate overflow-hidden rounded-[24px] border border-line bg-white px-6 py-12 text-center shadow-[0_40px_90px_-56px_rgba(11,21,48,0.4)] sm:rounded-[32px] sm:px-16 sm:py-20 2xl:rounded-[44px] 2xl:py-28">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]`} />
          <h2 className="mx-auto max-w-3xl text-balance font-display text-[clamp(28px,4vw,52px)] font-medium leading-[1.08] tracking-[-0.03em] 2xl:max-w-4xl 2xl:text-[clamp(48px,3.4vw,68px)]">
            Ready to automate your first process<span className="text-brand">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
            Tell us what slows your team down. We will suggest what to automate and how to start.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
// src/pages/pa.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

function PrimaryBtn({ to, children, dark = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:-translate-y-0.5 ${
        dark ? "bg-ink hover:bg-brand" : "bg-brand hover:bg-brand-dark"
      }`}
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

const flow = [
  "A new request arrives (form, email or app)",
  "Details are checked and sorted automatically",
  "The right person gets an approval task",
  "Records update across your systems",
  "Everyone is notified, and the log is saved",
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

export default function PA() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl">
              Process Automation that <span className="text-brand">works while you work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We turn repetitive, manual business tasks into reliable automated workflows, connected to the tools you
              already use and built around the way your team operates.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Automate a process</PrimaryBtn>
              <Link to="/services" className="border-b-2 border-brand pb-0.5 text-sm font-bold hover:text-brand">
                All services
              </Link>
            </div>
          </div>

          {/* Workflow card */}
          <div className="rounded-[36px] border border-ink/10 bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-muted">A typical automated workflow</p>
            <ol className="mt-5 space-y-3">
              {flow.map((item, i) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl border border-line bg-neutral-50 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 lg:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Less manual work. <span className="text-brand">More done.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
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

      {/* Use cases */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            What we can <span className="text-brand">automate for you.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:border-ink"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver (black band) */}
      <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className={`${wrap} relative grid gap-12 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
              What you get with <span className="text-brand">Rare IT.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              A complete, working automation setup, not just a script. We deliver it, train your team and stay with you
              after launch.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((d) => (
              <li key={d} className="flex items-center gap-4 rounded-2xl border border-white/15 p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand">
                  <Check size={15} />
                </span>
                <span className="font-semibold">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Why teams choose <span className="text-brand">automation.</span>
          </h2>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border-b border-line p-7 transition hover:bg-ink hover:text-white sm:border-r lg:border-b-0 [&:hover_p]:text-white/70"
              >
                <Icon className="text-brand" size={28} />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-white py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            How we <span className="text-brand">work.</span>
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span
                  className="block text-6xl font-extrabold text-transparent"
                  style={{ WebkitTextStroke: "1.5px #0d0d0f" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 border-t-2 border-brand pt-3 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
              Technology we <span className="text-brand">use.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              We pick the simplest tool that does the job well. Custom code where you need control, ready-made
              platforms where they save time.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-3">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-bold">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-16 lg:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Common <span className="text-brand">questions.</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ink/10 bg-neutral-50 p-5 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {f.q}
                  <Plus className="shrink-0 text-brand transition group-open:rotate-45" size={20} />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[36px] bg-ink p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
                Ready to automate your first <span className="text-brand">process?</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Tell us what slows your team down. We will suggest what to automate and how to start.
              </p>
            </div>
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
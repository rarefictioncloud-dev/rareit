// src/pages/cs.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Building2,
  Contact,
  Users,
  Boxes,
  Receipt,
  LayoutDashboard,
  Plug,
  Layers,
  Lock,
  TrendingUp,
  Puzzle,
  Plus,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

const systems = [
  {
    icon: Building2,
    title: "ERP systems",
    text: "One system to run the whole business, built around your processes instead of a fixed template.",
    points: ["Sales and purchase", "Inventory and warehouse", "Accounts and billing", "Production planning"],
  },
  {
    icon: Contact,
    title: "CRM systems",
    text: "Keep every lead, customer and conversation in one place so your team can sell and follow up better.",
    points: ["Lead and deal pipeline", "Customer history", "Follow-up reminders", "Sales reports"],
  },
  {
    icon: Users,
    title: "HR and payroll tools",
    text: "Manage employees, attendance, leave and payroll without spreadsheets.",
    points: ["Employee records", "Attendance and leave", "Payroll support", "Role based access"],
  },
  {
    icon: Boxes,
    title: "Inventory and supply tools",
    text: "Track stock, suppliers and orders in real time, with alerts before you run short.",
    points: ["Stock tracking", "Supplier management", "Purchase orders", "Low stock alerts"],
  },
  {
    icon: Receipt,
    title: "Billing and invoicing",
    text: "Create quotes and invoices, record payments and keep your accounts clear and up to date.",
    points: ["Quotes and invoices", "Payment tracking", "Tax-ready records", "Statements"],
  },
  {
    icon: LayoutDashboard,
    title: "Portals and internal tools",
    text: "Customer, vendor and staff portals, plus admin panels and dashboards for the way you work.",
    points: ["Customer portals", "Vendor portals", "Admin dashboards", "Reports and exports"],
  },
];

const deliverables = [
  "Requirements study and clear scope document",
  "System design, database and user roles",
  "Custom modules built around your workflow",
  "Integrations with accounting, payments and other tools",
  "Data migration from spreadsheets or old systems",
  "Testing, user training and documentation",
  "Hosting setup, support and regular updates",
];

const benefits = [
  { icon: Puzzle, title: "Fits how you work", text: "No forcing your process into someone else's software. The system follows your rules." },
  { icon: Layers, title: "One source of truth", text: "Sales, stock, finance and people data live together instead of in scattered files." },
  { icon: Lock, title: "You own and control it", text: "No per-user licence traps. Access, roles and data stay in your hands." },
  { icon: TrendingUp, title: "Grows with you", text: "Add modules, users and integrations later without starting again." },
];

const steps = [
  { title: "Discover", text: "We study your operations, users and pain points, and define what the software must do." },
  { title: "Design", text: "We plan the modules, screens and data flow, and agree them with you before building." },
  { title: "Build", text: "We develop in short cycles and demo each module so you can give feedback early." },
  { title: "Test and launch", text: "We test with real data and scenarios, migrate your records and train your team." },
  { title: "Support", text: "We fix, improve and extend the system as your business changes." },
];

const tech = [
  "React",
  "Node.js",
  "Python",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Role based access",
  "Cloud hosting",
  "Payment gateways",
  "PDF and Excel export",
];

const faqs = [
  {
    q: "Why choose custom software over ready-made ERP or CRM?",
    a: "Ready-made tools are quick to start but often need workarounds and extra licences. Custom software is built for your exact process, so your team uses fewer tools and fewer workarounds.",
  },
  {
    q: "Can you build just one module first?",
    a: "Yes. Many clients start with one pain point, such as billing or inventory, and add more modules over time on the same foundation.",
  },
  {
    q: "Can you connect it to our existing tools?",
    a: "In most cases yes. We integrate through APIs with accounting software, payment gateways, email, SMS and other systems you already use.",
  },
  {
    q: "What about our existing data?",
    a: "We can import data from spreadsheets and older systems, clean it and check it before go-live.",
  },
  {
    q: "Who owns the software and the data?",
    a: "Your data is yours. Ownership of the code is agreed in the project terms, and we explain it clearly before we start.",
  },
  {
    q: "Will you support it after launch?",
    a: "Yes. We offer maintenance, fixes, backups and new features, so the system stays reliable and useful.",
  },
];

export default function CS() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl">
              Software built for your business, <span className="text-brand">not around it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We build custom ERP, CRM and business software that matches your workflow, connects your data and grows
              with your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Plan your software</PrimaryBtn>
              <Link to="/services" className="border-b-2 border-brand pb-0.5 text-sm font-bold hover:text-brand">
                All services
              </Link>
            </div>
          </div>

          {/* Modules mockup */}
          <div
            className="rounded-[36px] border border-ink/10 bg-white p-6 sm:p-8"
            role="img"
            aria-label="Illustration of connected business modules around one central system"
          >
            <div className="rounded-3xl bg-ink p-5 text-center text-white">
              <p className="text-lg font-extrabold tracking-tight">
                Your <span className="text-brand">Core System</span>
              </p>
              <p className="mt-1 text-sm text-white/60">One database. One login. One view.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Sales", "CRM", "Inventory", "Finance", "HR", "Reports"].map((m) => (
                <div key={m} className="rounded-2xl border border-line bg-neutral-50 p-4">
                  <span className="block h-2 w-8 rounded-full bg-brand" />
                  <p className="mt-3 text-sm font-extrabold">{m}</p>
                  <span className="mt-2 block h-2 w-full rounded-full bg-line" />
                  <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 lg:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            One system. <span className="text-brand">Your rules.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Growing businesses often end up with spreadsheets, chat messages and several tools that do not talk to
              each other. That costs time and creates mistakes.
            </p>
            <p>
              We replace that with software designed for your operations. You get the modules you need, the reports you
              want and the control to change things as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Systems we can <span className="text-brand">build for you.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map(({ icon: Icon, title, text, points }) => (
              <article
                key={title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:border-ink"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold">
                      <Check size={15} className="shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
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
              Working software, your data moved in, your team trained and a partner who stays after launch.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
              <Plug size={16} className="text-brand" />
              Connects with the tools you already use
            </div>
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
            Why build <span className="text-brand">custom.</span>
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
              Reliable, widely supported tools, so your software stays secure, fast and easy to maintain for years.
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
                Ready to build software that <span className="text-brand">fits?</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Describe your process and your biggest bottleneck. We will suggest where to start and what it takes.
              </p>
            </div>
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
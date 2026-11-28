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

/* ---------- STYLE HELPERS (same white theme as Home, About, Careers, Contact and the other service pages) ---------- */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const sectionY = "py-14 sm:py-20 lg:py-24 2xl:py-28";
const h2Cls =
  "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)] 2xl:text-[clamp(48px,3.4vw,68px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-full border border-brand/25 bg-white text-brand transition";
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] 2xl:text-base ${focusRing}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5 2xl:size-11">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

/* ---------- DATA ---------- */
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

/* ---------- PAGE ---------- */
export default function CS() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-3 sm:pt-5" aria-label="Custom Software">
        <div className={`${wrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] 2xl:rounded-[44px]`}>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]`} />

          <div className="grid items-center gap-10 px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-14 lg:pb-16 lg:pt-20 2xl:gap-24 2xl:px-20 2xl:pb-24 2xl:pt-28">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand 2xl:text-base">Custom Software</p>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(48px,5vw,84px)] lg:leading-[0.98] 2xl:text-[clamp(72px,4.8vw,104px)]">
                Software built for your business, not around it<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 2xl:max-w-2xl 2xl:text-xl">
                We build custom ERP, CRM and business software that matches your workflow, connects your data and grows
                with your team.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
                <PrimaryBtn to="/contact">Plan your software</PrimaryBtn>
              </div>
            </div>

            {/* Modules mockup */}
            <div
              className="min-w-0 rounded-3xl border border-line bg-[#F4F5F8] p-5 sm:p-8 2xl:p-10"
              role="img"
              aria-label="Illustration of connected business modules around one central system"
            >
              <div className="relative overflow-hidden rounded-2xl bg-ink p-5 text-center text-white 2xl:p-8">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <p className="font-display text-xl font-medium tracking-tight 2xl:text-3xl">
                  Your Core System
                </p>
                <p className="mt-1 text-sm text-white/60 2xl:text-base">One database. One login. One view.</p>
              </div>
              {/* connector from core to modules */}
              <div aria-hidden="true" className="mx-auto h-4 w-px bg-brand/40 2xl:h-6" />
              <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 2xl:gap-4">
                {["Sales", "CRM", "Inventory", "Finance", "HR", "Reports"].map((m) => (
                  <div key={m} className="rounded-2xl border border-line bg-white p-4 2xl:p-5">
                    <span className="block h-2 w-8 rounded-full bg-brand" />
                    <p className="mt-3 text-sm font-semibold 2xl:text-lg">{m}</p>
                    <span className="mt-2 block h-2 w-full rounded-full bg-line" />
                    <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-line" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32">
          <h2 className={h2Cls}>
            One system. Your rules<span className="text-brand">.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg 2xl:text-xl">
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

      {/* ===== SYSTEMS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Systems we can build for you<span className="text-brand">.</span>
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6 2xl:gap-8">
            {systems.map(({ icon: Icon, title, text, points }) => (
              <li
                key={title}
                className="group flex flex-col rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-40px_rgba(11,21,48,0.4)] sm:p-8 2xl:rounded-[32px] 2xl:p-10"
              >
                <span className={`${iconTile} size-12 group-hover:bg-brand group-hover:text-white 2xl:size-14`}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight 2xl:text-[28px]">{title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted 2xl:text-lg">{text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5 2xl:space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-semibold 2xl:text-base">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full border border-brand/30">
                        <Check size={12} strokeWidth={3} className="text-brand" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
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
                Working software, your data moved in, your team trained and a partner who stays after launch.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 2xl:px-5 2xl:py-2.5 2xl:text-base">
                <Plug size={16} className="shrink-0 text-brand" />
                Connects with the tools you already use
              </div>
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

      {/* ===== BENEFITS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Why build custom<span className="text-brand">.</span>
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
              Reliable, widely supported tools, so your software stays secure, fast and easy to maintain for years.
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
            Ready to build software that fits<span className="text-brand">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
            Describe your process and your biggest bottleneck. We will suggest where to start and what it takes.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
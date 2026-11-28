// src/pages/sap.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Plus,
  Database,
  BarChart3,
  Users,
  Settings,
  Package,
  Wallet,
  Link2,
  RefreshCw,
  Layers,
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
const helps = [
  {
    icon: Layers,
    title: "Implementation and rollout",
    text: "Plan and set up SAP for finance, sales, purchasing and inventory, with the processes mapped to how your team really works.",
    points: ["Process mapping", "Module setup", "User roles and access"],
  },
  {
    icon: Link2,
    title: "Integrations",
    text: "Connect SAP with your website, online store, mobile app, CRM and payment tools so data moves without retyping.",
    points: ["Website and store sync", "CRM and app connections", "Payment and billing links"],
  },
  {
    icon: Settings,
    title: "Custom apps around SAP",
    text: "Build small apps that sit next to SAP, such as approval screens, request forms and field apps for your team.",
    points: ["Approval workflows", "Request and order forms", "Mobile apps for staff"],
  },
  {
    icon: BarChart3,
    title: "Reports and dashboards",
    text: "Turn SAP data into clear dashboards that owners and managers can read in seconds, without exporting sheets.",
    points: ["Sales and stock views", "Finance summaries", "Scheduled report emails"],
  },
  {
    icon: Database,
    title: "Data migration and cleanup",
    text: "Move data from spreadsheets or older software into SAP, with checks so the new system starts clean.",
    points: ["Data review", "Cleanup and mapping", "Test imports"],
  },
  {
    icon: Users,
    title: "Training and support",
    text: "Help your team get comfortable with SAP, and keep someone on call when questions or issues come up.",
    points: ["Team training", "Issue handling", "Ongoing improvements"],
  },
];

const youGet = [
  "A clear plan before any work starts",
  "SAP set up around your processes, not the other way round",
  "Connections to the tools you already use",
  "Dashboards your team can actually read",
  "Plain updates and a direct line to the people building it",
  "Support after go-live",
];

const benefits = [
  { icon: Wallet, title: "Fewer manual entries", text: "Data flows between SAP and your other tools, so your team stops typing the same thing twice." },
  { icon: RefreshCw, title: "One version of the truth", text: "Sales, stock and finance read from the same place, so numbers match across teams." },
  { icon: Package, title: "Smoother operations", text: "Orders, purchases and stock move through clear steps with fewer hand-offs." },
  { icon: Users, title: "A team that adopts it", text: "Simple screens, role based access and training make the system easier to use every day." },
];

const steps = [
  { name: "Discover", text: "We learn how your business runs today and what you want SAP to improve." },
  { name: "Design", text: "We map processes, modules and integrations, and agree the plan with you." },
  { name: "Build", text: "We set up, connect and extend SAP in stages, with regular reviews." },
  { name: "Test and launch", text: "We test with real data and your team, then go live with a clear checklist." },
  { name: "Support", text: "We stay available after launch to fix issues and make improvements." },
];

// Edit this list so it only shows tools you really work with.
const tech = [
  "SAP Business One",
  "SAP S/4HANA",
  "SAP Fiori",
  "REST APIs",
  "OData",
  "SQL databases",
  "React",
  "Firebase",
];

const faqs = [
  {
    q: "Are you an official SAP partner?",
    a: "Rare IT is an independent IT company. We help businesses plan, connect and extend SAP systems. We will always tell you plainly what we can deliver ourselves and where your SAP vendor or licence partner needs to be involved.",
  },
  {
    q: "Do I need to buy SAP before I talk to you?",
    a: "No. We can help you think through whether SAP fits your business and what it would involve, before you commit to anything.",
  },
  {
    q: "Can you connect SAP to our website or mobile app?",
    a: "Yes. We build integrations so orders, customers and stock can move between SAP and your website, store or app.",
  },
  {
    q: "We already use SAP. Can you improve what we have?",
    a: "Yes. We can add dashboards, approval apps, integrations and cleanup work around the system you already run.",
  },
  {
    q: "How long does an SAP project take?",
    a: "It depends on the size and the modules involved. After a first call we share a realistic plan with stages, so you know what to expect.",
  },
  {
    q: "Will you train our team?",
    a: "Yes. Training and support are part of how we work, so your team is comfortable using the system after launch.",
  },
];

/* ---------- HERO MOCKUP ---------- */
function HeroMockup() {
  const left = ["Finance", "Sales", "Purchasing", "Inventory"];
  const right = ["Website orders", "Mobile app", "Approval screens", "Weekly reports"];
  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-50px_rgba(11,21,48,0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-[#F4F5F8] px-4 py-3 sm:px-5 2xl:py-4">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-brand" />
        <span className="ml-3 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-muted 2xl:text-sm">
          SAP landscape
        </span>
      </div>

      <div className="grid items-center gap-4 p-4 sm:p-6 min-[560px]:grid-cols-[1fr_auto_1fr] lg:grid-cols-1 xl:grid-cols-[1fr_auto_1fr] 2xl:gap-6 2xl:p-8">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold text-muted 2xl:text-sm">Your SAP system</p>
          <ul className="space-y-2 2xl:space-y-3">
            {left.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-[#F4F5F8] px-4 py-3 text-sm font-semibold 2xl:px-5 2xl:py-4 2xl:text-base"
              >
                {item}
                <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white 2xl:text-xs">Live</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] sm:size-14 2xl:size-16">
          <RefreshCw size={20} />
        </div>

        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold text-muted 2xl:text-sm">Connected by Rare IT</p>
          <ul className="space-y-2 2xl:space-y-3">
            {right.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold 2xl:px-5 2xl:py-4 2xl:text-base"
              >
                {item}
                <Check size={16} className="shrink-0 text-brand" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line bg-[#F4F5F8] px-4 py-3 text-xs font-semibold text-muted sm:px-6 2xl:px-8 2xl:py-4 2xl:text-sm">
        Data moves both ways, with no retyping.
      </div>
    </div>
  );
}

/* ---------- PAGE ---------- */
export default function SAP() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-3 sm:pt-5" aria-label="SAP">
        <div className={`${wrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] 2xl:rounded-[44px]`}>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]`} />

          <div className="grid items-center gap-10 px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-14 lg:pb-16 lg:pt-20 2xl:gap-24 2xl:px-20 2xl:pb-24 2xl:pt-28">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand 2xl:text-base">SAP</p>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(48px,5vw,84px)] lg:leading-[0.98] 2xl:text-[clamp(72px,4.8vw,104px)]">
                SAP that fits the way you work<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 2xl:max-w-2xl 2xl:text-xl">
                We help businesses set up, connect and extend SAP, so your finance, sales, purchasing and stock work
                from one system your team can actually use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
                <PrimaryBtn to="/contact">Talk to us about SAP</PrimaryBtn>
              </div>
            </div>

            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32">
          <h2 className={h2Cls}>
            One system for the whole business, set up properly<span className="text-brand">.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg 2xl:text-xl">
            <p>
              SAP can run your finance, sales, purchasing and inventory from one place. The value comes from how well it
              is set up and how well it connects to the rest of your tools.
            </p>
            <p>
              Rare IT helps with the practical side: planning the rollout, connecting SAP to your website and apps,
              building small tools around it, and keeping your team supported after launch.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            What we can help you with<span className="text-brand">.</span>
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6 2xl:gap-8">
            {helps.map(({ icon: Icon, title, text, points }) => (
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

      {/* ===== WHAT YOU GET (dark panel) ===== */}
      <section className={`${wrap} pb-14 sm:pb-20 lg:pb-24 2xl:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-[24px] bg-ink px-5 py-12 text-white sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-14 lg:py-20 2xl:rounded-[44px] 2xl:px-20 2xl:py-28">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rotate-12 rounded-[48px] bg-white/[0.05]" />
          <div aria-hidden="true" className="absolute -bottom-32 left-10 -z-10 h-[360px] w-[520px] -rotate-6 rounded-[48px] bg-white/[0.04]" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 2xl:gap-28">
            <h2 className={`${h2Cls} min-w-0`}>
              What you get with Rare IT<span className="text-brand">.</span>
            </h2>
            <ul className="min-w-0 space-y-3 2xl:space-y-4">
              {youGet.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl border border-white/15 p-3.5 sm:p-4 2xl:p-5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand 2xl:size-8">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold leading-snug sm:text-base 2xl:text-lg">{item}</span>
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
            Why it pays off<span className="text-brand">.</span>
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

      {/* ===== HOW WE WORK ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            How we work<span className="text-brand">.</span>
          </h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-5 lg:gap-x-0">
            {steps.map((s, i) => (
              <li key={s.name} className="relative border-t border-ink/15 py-7 lg:pr-8 2xl:pr-12">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-6xl 2xl:text-7xl">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight 2xl:text-[30px]">{s.name}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted 2xl:max-w-sm 2xl:text-base">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Technology we use<span className="text-brand">.</span>
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 2xl:mt-10">
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
              Questions, answered<span className="text-brand">.</span>
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
            Planning SAP for your business? Let’s talk<span className="text-brand">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
            Tell us how your business runs today and we will suggest a clear first step.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-xs text-muted 2xl:text-sm">
            SAP is a trademark of SAP SE. Rare IT is an independent IT company.
          </p>
        </div>
      </section>
    </div>
  );
}
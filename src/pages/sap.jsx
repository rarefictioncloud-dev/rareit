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

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const gridTexture =
  "[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:bg-brand-dark"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

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

function HeroMockup() {
  const left = ["Finance", "Sales", "Purchasing", "Inventory"];
  const right = ["Website orders", "Mobile app", "Approval screens", "Weekly reports"];
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-xl">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="ml-3 rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-muted">
            SAP landscape
          </span>
        </div>

        <div className="grid items-center gap-4 p-5 sm:grid-cols-[1fr_auto_1fr] sm:p-6">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted">Your SAP system</p>
            <div className="space-y-2">
              {left.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-line bg-neutral-50 px-4 py-3 text-sm font-bold"
                >
                  {item}
                  <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-white">Live</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand text-white sm:h-14 sm:w-14">
            <RefreshCw size={20} />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted">Connected by Rare IT</p>
            <div className="space-y-2">
              {right.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3 text-sm font-bold"
                >
                  {item}
                  <Check size={16} className="text-brand" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line bg-neutral-50 px-5 py-3 text-xs font-semibold text-muted sm:px-6">
          Data moves both ways, with no retyping.
        </div>
      </div>
    </div>
  );
}

export default function SAP() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24`}>
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            SAP that <span className="text-brand">fits the way you work.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We help businesses set up, connect and extend SAP, so your finance, sales, purchasing and stock work from
            one system your team can actually use.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryBtn to="/contact">Talk to us about SAP</PrimaryBtn>
            <Link to="/our-work" className="border-b-2 border-brand pb-0.5 text-sm font-bold hover:text-brand">
              See our work
            </Link>
          </div>
        </div>
        <HeroMockup />
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white">
        <div className={`${wrap} grid gap-10 py-16 lg:grid-cols-2 lg:py-20`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
            One system for the whole business, <span className="text-brand">set up properly.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
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

      {/* What we help with */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
          What we can help you <span className="text-brand">with.</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold">
                      <Check size={16} className="text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* What you get */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className={`pointer-events-none absolute inset-0 ${gridTexture}`} aria-hidden="true" />
        <div className={`${wrap} relative grid gap-10 py-16 lg:grid-cols-2 lg:py-24`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
            What you get with <span className="text-brand">Rare IT.</span>
          </h2>
          <ul className="space-y-4">
            {youGet.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
                  <Check size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Why it <span className="text-brand">pays off.</span>
        </h2>
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group border-b border-line p-7 transition hover:bg-ink hover:text-white sm:border-r lg:border-b-0"
              >
                <Icon size={26} className="text-brand" />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition group-hover:text-white/70">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-line bg-white">
        <div className={`${wrap} py-16 lg:py-24`}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            How we <span className="text-brand">work.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.name} className="rounded-3xl border border-ink/10 bg-neutral-50 p-6">
                <span className="text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Technology we <span className="text-brand">use.</span>
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-bold">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} grid gap-10 py-16 lg:grid-cols-[1fr_1.6fr] lg:py-24`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Questions, <span className="text-brand">answered.</span>
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus size={22} className="shrink-0 text-brand transition group-open:rotate-45" />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <div className="relative overflow-hidden rounded-[36px] bg-ink px-8 py-14 text-center text-white sm:px-16">
          <div className={`pointer-events-none absolute inset-0 ${gridTexture}`} aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Planning SAP for your business? <span className="text-brand">Let's talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Tell us how your business runs today and we will suggest a clear first step.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-white/50">
              SAP is a trademark of SAP SE. Rare IT is an independent IT company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
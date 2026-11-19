// src/pages/dis.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Warehouse,
  ClipboardList,
  Truck,
  Package,
  Users,
  BarChart3,
  Eye,
  ShieldCheck,
  Plug,
  TrendingUp,
  Plus,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

const useCases = [
  {
    icon: Warehouse,
    title: "Inventory and warehouse management",
    text: "Know what you have, where it sits and when to reorder, with stock updated as goods move in and out.",
  },
  {
    icon: ClipboardList,
    title: "Order management",
    text: "Capture orders from every channel, check stock, confirm and dispatch from one connected flow.",
  },
  {
    icon: Truck,
    title: "Fleet and delivery tracking",
    text: "Assign routes, follow deliveries live and collect proof of delivery from drivers on their phones.",
  },
  {
    icon: Package,
    title: "Procurement and supplier portals",
    text: "Raise purchase orders, track inbound shipments and keep suppliers informed without endless calls.",
  },
  {
    icon: Users,
    title: "Dealer and customer portals",
    text: "Let dealers and customers place orders, check availability and download invoices on their own.",
  },
  {
    icon: BarChart3,
    title: "Reports and dashboards",
    text: "See sales, stock, delivery performance and outstanding payments in clear, up-to-date dashboards.",
  },
];

const deliverables = [
  "Process review and a clear plan for your supply chain",
  "Inventory, order and dispatch software built around your flow",
  "Mobile apps for drivers, warehouse staff and sales teams",
  "Barcode and QR scanning for picking, packing and receiving",
  "Automated invoices, reminders and customer notifications",
  "Integration with SAP, accounting, CRM and payment tools",
  "Dashboards and reports for owners and managers",
  "Training, support and updates after go-live",
];

const benefits = [
  { icon: Eye, title: "Clear visibility", text: "Everyone sees the same live picture of stock, orders and deliveries." },
  { icon: ShieldCheck, title: "Fewer manual errors", text: "Less re-typing and fewer spreadsheets means fewer wrong shipments and missed invoices." },
  { icon: Plug, title: "Works with your tools", text: "New software connects to the systems you already use instead of replacing them overnight." },
  { icon: TrendingUp, title: "Ready to grow", text: "Add products, warehouses, routes and users as your business expands." },
];

const steps = [
  { title: "Discover", text: "We map how goods, orders and information move today and where time is lost." },
  { title: "Design", text: "We plan workflows and screens for your team to review before anything is built." },
  { title: "Build", text: "We develop in short cycles and share working versions you can test with real data." },
  { title: "Launch", text: "We migrate data, train your people and go live in stages to avoid disruption." },
  { title: "Support", text: "We monitor, fix and improve as your volumes and needs grow." },
];

const tech = [
  "SAP integration",
  "ERP and accounting links",
  "Barcode and QR scanning",
  "GPS and live tracking",
  "Driver mobile apps",
  "WhatsApp and SMS alerts",
  "Payment gateways",
  "REST APIs",
  "React",
  "Node.js",
  "Firebase",
  "Dashboards and reporting",
];

const faqs = [
  {
    q: "Can you work with the software we already use?",
    a: "Yes. We connect to your existing ERP, accounting, CRM and spreadsheets, so your team keeps its familiar tools while gaining a connected flow.",
  },
  {
    q: "We only have spreadsheets today. Is that a problem?",
    a: "Not at all. Many distributors start there. We turn your spreadsheets into a simple system step by step, so the change is easy to adopt.",
  },
  {
    q: "Can drivers and warehouse staff use it on their phones?",
    a: "Yes. We build mobile apps for drivers, pickers and sales teams, with scanning, status updates and proof of delivery.",
  },
  {
    q: "Do you support SAP?",
    a: "Yes. We help set up, connect and extend SAP so finance, sales and stock run from one system, with training and support.",
  },
  {
    q: "How long does a project take?",
    a: "A focused first phase, such as order and stock management, usually takes a few months. We confirm a timeline after the discovery stage.",
  },
  {
    q: "What happens after go-live?",
    a: "We stay with you with monitoring, fixes, updates and new features as your business grows.",
  },
];

const shipments = [
  { id: "Shipment A", route: "Warehouse to dealer", status: "Delivered", tone: "bg-emerald-100 text-emerald-700" },
  { id: "Shipment B", route: "Warehouse to store", status: "In transit", tone: "bg-brand/10 text-brand" },
  { id: "Shipment C", route: "Supplier to warehouse", status: "Picked", tone: "bg-ink/10 text-ink" },
];

export default function DIS() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl">
              Keep stock moving, <span className="text-brand">from warehouse to doorstep.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We build inventory, order and delivery software that gives distributors one clear view of their business,
              connected to the systems you already use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Talk about distribution</PrimaryBtn>
              <a
                href="#use-cases"
                className="text-sm font-bold underline decoration-brand decoration-2 underline-offset-8 hover:text-brand"
              >
                See what we build
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div
            className="rounded-[36px] border border-ink/10 bg-white p-5 sm:p-8"
            role="img"
            aria-label="Illustration of a distribution dashboard with stock levels and shipment statuses"
          >
            <div className="rounded-3xl bg-ink p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Distribution overview</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["Orders", "w-4/5"],
                  ["In transit", "w-3/5"],
                  ["Low stock", "w-2/5"],
                ].map(([label, bar]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs text-white/70">{label}</p>
                    <span className="mt-3 block h-1.5 rounded-full bg-white/15">
                      <span className={`block h-full rounded-full bg-brand ${bar}`} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex h-20 items-end gap-2" aria-hidden="true">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-md bg-white/20 first:bg-white/20 last:bg-brand" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {shipments.map((s) => (
                <li key={s.id} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-100">
                    <Truck size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold">{s.id}</span>
                    <span className="block truncate text-xs text-muted">{s.route}</span>
                  </span>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${s.tone}`}>{s.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 lg:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Every order, every item, <span className="text-brand">always in view.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Distribution runs on timing. When stock counts, orders and deliveries live in different places, teams lose
              hours chasing updates and customers wait for answers.
            </p>
            <p>
              We bring those pieces together: software that fits how you buy, store and deliver, with mobile tools for
              the people in the field. You get a simpler day-to-day and a clear picture of how the business is doing.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="scroll-mt-20 py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            What we can <span className="text-brand">build for you.</span>
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
      <section className="bg-ink py-16 text-white lg:py-24">
        <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
              What you get with <span className="text-brand">Rare IT.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Working software, the integrations behind it and the support to keep your supply chain moving.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((d) => (
              <li key={d} className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4">
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
            Built for <span className="text-brand">busy operations.</span>
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
              Proven tools chosen to connect with your systems, keep costs sensible and make updates easy.
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
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
                Ready to get your supply chain <span className="text-brand">in sync?</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Tell us how your goods and orders move today. We will suggest where software can save the most time and
                how to start.
              </p>
            </div>
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
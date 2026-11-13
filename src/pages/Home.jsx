import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Workflow,
  Palette,
  Code2,
  Smartphone,
  Database,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
  Bot,
  LayoutDashboard,
  Plug,
  ShieldCheck,
  Sparkles,
  Users,
  Eye,
} from "lucide-react";

/* ---------- DATA ---------- */
const pillars = [
  { icon: Sparkles, title: "Built to order", text: "Every solution is designed around your business." },
  { icon: Users, title: "Senior-led teams", text: "Experienced people on every project." },
  { icon: Eye, title: "Transparent delivery", text: "Clear updates, no surprises." },
  { icon: LifeBuoy, title: "Long-term support", text: "We stay with you after launch." },
];

const services = [
  {
    to: "/services/process-automation",
    icon: Workflow,
    title: "Process Automation",
    text: "Automate repetitive workflows, approvals and reporting across your tools, so your team can focus on work that matters.",
    points: ["Workflow automation", "Tool integrations", "Smart reporting"],
  },
  {
    to: "/services/web-designing",
    icon: Palette,
    title: "Web Designing",
    text: "Fast, responsive, brand-led websites and portals that build trust at first glance.",
    points: ["UI/UX design", "Responsive builds", "SEO-ready"],
  },
  {
    to: "/services/custom-software",
    icon: Code2,
    title: "Custom Software",
    text: "ERP, CRM and internal platforms engineered around the way you work.",
    points: ["Web applications", "API integration", "Modernisation"],
  },
  {
    to: "/services/mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Polished iOS and Android apps, designed with real users in mind.",
    points: ["iOS and Android", "Product design", "Launch and updates"],
  },
  {
    to: "/services/sap",
    icon: Database,
    title: "SAP",
    text: "Set up, connect and extend SAP so finance, sales and stock run from one system.",
    points: ["Integrations", "Dashboards", "Training and support"],
  },
];

const flow = ["New order", "Check stock", "Send invoice", "Notify team"];

const smarts = [
  {
    icon: Bot,
    title: "Industry-aware automation",
    text: "Workflows tuned to your sector's data, rules and terminology, so results are precise and easy to audit.",
  },
  {
    icon: LayoutDashboard,
    title: "Adaptive experiences",
    text: "Interfaces that shape themselves around each role, surfacing what matters and automating the routine.",
  },
  {
    icon: Plug,
    title: "Connected workflows",
    text: "Work flows across your existing tools and systems, with people looped in only when judgment is needed.",
  },
  {
    icon: ShieldCheck,
    title: "Governed delivery",
    text: "Security, access control and audit trails are built in from the very first release.",
  },
];

const industries = [
  { icon: HeartPulse, to: "/industries/healthcare", label: "Healthcare", text: "Secure, compliant digital care, from patient portals to clinic workflows." },
  { icon: Factory, to: "/industries/manufacturing", label: "Manufacturing", text: "Connected operations, production tracking and smarter reporting." },
  { icon: ShoppingCart, to: "/industries/retail", label: "Retail and E-commerce", text: "Seamless storefronts, inventory flows and customer journeys." },
  { icon: Landmark, to: "/industries/finance", label: "Finance", text: "Trusted, scalable tools for approvals, records and compliance." },
  { icon: GraduationCap, to: "/industries/education", label: "Education", text: "Learning platforms and admin tools without the paperwork." },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn your goals, users and constraints before writing a line of code." },
  { icon: PenTool, title: "Design", text: "Clear plans, prototypes and architecture you can review and approve." },
  { icon: Rocket, title: "Deliver", text: "Agile builds with regular, visible progress and honest communication." },
  { icon: LifeBuoy, title: "Support", text: "Monitoring, updates and long-term care once you are live." },
];

// Examples of tools we can connect (text only, not a list of partners)
const tools = [
  "Zoho CRM",
  "HubSpot",
  "Gmail",
  "WhatsApp Business",
  "Google Sheets",
  "Razorpay",
  "Shopify",
  "Firebase",
  "Slack",
  "SAP",
];

/* ---------- SMALL PIECES ---------- */
const wrap = "mx-auto w-[min(1760px,100%-64px)]";

const gridTexture =
  "[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]";

const fieldCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand";

const PrimaryBtn = ({ to, children, dark = false }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
  >
    {children}
    <span
      className={`grid size-10 place-items-center rounded-full transition group-hover:translate-x-0.5 ${
        dark ? "bg-ink text-white" : "bg-white text-brand"
      }`}
    >
      <ArrowRight size={16} />
    </span>
  </Link>
);

/* ---------- PAGE ---------- */
export default function Home() {
  const [sent, setSent] = useState(false);
  const [ind, setInd] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to Firebase later
    setSent(true);
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_75%_35%,black,transparent_70%)]" />

        <div className={`${wrap} relative grid items-center gap-14 pb-14 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-20 lg:pt-20`}>
          <div>
     
            <h1 className="text-[clamp(56px,9vw,150px)] font-extrabold leading-[0.88] tracking-tighter">
              Build.
              <br />
              Innovate.
              <br />
              <span className="text-brand">Grow.</span>
            </h1>
            <p className="mt-8 max-w-[520px] text-lg leading-relaxed text-muted">
              A next-gen IT partner helping businesses transform ideas into powerful digital solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Start a project</PrimaryBtn>
              <a href="#services" className="border-b-2 border-ink pb-1 text-sm font-semibold transition hover:border-brand hover:text-brand">
                Explore our services
              </a>
            </div>
          </div>

          {/* live workflow visual */}
          <div className="relative mx-auto w-full max-w-[600px] pb-8 lg:mr-0">
            <div className="relative overflow-hidden rounded-[36px] bg-ink p-7 text-white shadow-[0_40px_90px_rgba(13,13,15,0.25)] sm:p-9">
              <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_70%)]`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/60">Example workflow</p>
                    <h3 className="text-xl font-extrabold tracking-tight">Order to delivery, automated</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand" />
                    </span>
                    Live
                  </span>
                </div>

                <ol className="relative mt-7 space-y-3">
                  <span aria-hidden="true" className="absolute bottom-8 left-[37px] top-8 w-0.5 bg-brand" />
                  {[
                    { icon: ShoppingCart, t: "New order", d: "Received from your store" },
                    { icon: Database, t: "Check stock", d: "Matched with inventory" },
                    { icon: Landmark, t: "Send invoice", d: "Created and emailed" },
                    { icon: Users, t: "Notify team", d: "Right people, right time" },
                  ].map(({ icon: Icon, t, d }, i, arr) => (
                    <li key={t} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4">
                      <span className={`relative grid size-11 shrink-0 place-items-center rounded-full ${i === arr.length - 1 ? "bg-brand" : "bg-white text-ink"}`}>
                        {i === arr.length - 1 && <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand" />}
                        <Icon size={18} strokeWidth={1.8} className="relative" />
                      </span>
                      <div>
                        <p className="text-sm font-bold">{t}</p>
                        <p className="text-xs text-white/60">{d}</p>
                      </div>
                      <Check size={18} strokeWidth={3} className="ml-auto text-brand" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="absolute -left-4 bottom-0 hidden items-center gap-3 rounded-2xl border-2 border-ink bg-white px-4 py-3 shadow-[0_20px_40px_rgba(13,13,15,0.15)] sm:flex lg:-left-10">
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
                <Plug size={16} />
              </span>
              <div>
                <span className="block text-[10px] text-muted">Works with your tools</span>
                <strong className="text-xs">No manual steps</strong>
              </div>
            </div>
            <div className="absolute -right-3 top-16 hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold text-white shadow-[0_16px_30px_rgba(13,13,15,0.2)] sm:flex lg:-right-6">
              <ShieldCheck size={14} /> Secure by design
            </div>
          </div>
        </div>

        {/* quick service links */}
        <ul className={`${wrap} relative grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-5`}>
          {services.map(({ to, icon: Icon, title }, i) => (
            <li key={title} className={i > 0 ? "lg:border-l lg:border-ink/15" : ""}>
              <Link
                to={to}
                className="group flex items-center gap-4 px-5 py-7 transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                <Icon size={26} strokeWidth={1.5} className="text-brand transition group-hover:text-white" />
                <span className="text-[15px] font-bold">{title}</span>
                <ArrowUpRight size={18} className="ml-auto opacity-40 transition group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== PILLARS STRIP ===== */}
      <section className="bg-ink text-white">
        <ul className={`${wrap} grid sm:grid-cols-2 lg:grid-cols-4`}>
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex items-start gap-4 py-9 sm:px-6 ${i > 0 ? "lg:border-l lg:border-white/15" : "lg:pl-0"} ${
                i % 2 === 1 ? "sm:border-l sm:border-white/15 lg:border-l" : ""
              }`}
            >
              <Icon size={26} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <h3 className="text-[15px] font-bold">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/60">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SERVICES (large rows) ===== */}
      <section id="services" className={`${wrap} grid gap-12 py-24 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(38px,4.8vw,64px)] font-extrabold leading-[0.98] tracking-tighter">
            Built for your business. <span className="text-brand">Not retrofitted to it.</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
            Every Rare IT solution is designed from scratch around how your teams work, with software, websites and apps
            that fit from day one.
          </p>
        </div>

        <ul className="border-t-2 border-ink">
          {services.map(({ to, icon: Icon, title, text, points }) => (
            <li key={title} className="border-b border-ink/15">
              <Link
                to={to}
                className="group grid gap-5 px-2 py-9 transition-colors duration-300 hover:bg-ink hover:text-white sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:px-6"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted transition group-hover:text-white/70">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {points.map((p) => (
                      <li key={p} className="rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold text-ink/70 transition group-hover:border-white/30 group-hover:text-white/80">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="grid size-12 place-items-center rounded-full border border-ink/20 transition group-hover:border-brand group-hover:bg-brand">
                  <ArrowUpRight size={20} className="transition group-hover:rotate-12" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SMARTER (black band) ===== */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]`} />
        <div className={`${wrap} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="text-[clamp(38px,5vw,72px)] font-extrabold leading-[0.98] tracking-tighter">
              What makes Rare IT solutions <span className="text-brand">smarter?</span>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/65">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual
              effort.
            </p>
          </div>

          {/* automation flow */}
          <div className="mt-14 flex flex-wrap items-center gap-3 rounded-3xl border border-white/15 p-5 sm:p-6">
            <span className="mr-2 text-sm font-semibold text-white/60">One order, no manual steps</span>
            {flow.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-3">
                <span className={`rounded-full px-4 py-2 text-xs font-bold ${i === flow.length - 1 ? "bg-brand text-white" : "bg-white text-ink"}`}>
                  {s}
                </span>
                {i < flow.length - 1 && <ArrowRight size={14} className="text-brand" />}
              </span>
            ))}
          </div>

          <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {smarts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-ink p-8 transition hover:bg-neutral-900">
                <Icon size={30} strokeWidth={1.5} className="text-brand" />
                <h3 className="mt-8 text-xl font-bold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <PrimaryBtn to="/contact">See it in action</PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES (expanding panels) ===== */}
      <section className={`${wrap} py-24`}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(38px,4.8vw,64px)] font-extrabold leading-[0.98] tracking-tighter">
            Built for your industry. <span className="text-brand">Not retrofitted to it.</span>
          </h2>
          <Link to="/industries" className="inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-semibold">
            View all industries <ArrowRight size={14} />
          </Link>
        </div>

        <ul className="flex flex-col gap-3 lg:h-[460px] lg:flex-row">
          {industries.map(({ icon: Icon, to, label, text }, i) => {
            const open = ind === i;
            return (
              <li
                key={label}
                onMouseEnter={() => setInd(i)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                  open ? "border-brand bg-brand text-white lg:flex-[3]" : "border-ink/15 bg-white text-ink lg:flex-1"
                }`}
              >
                <Link
                  to={to}
                  onFocus={() => setInd(i)}
                  className="flex h-full min-h-28 flex-col justify-between p-7"
                >
                  <Icon size={open ? 44 : 34} strokeWidth={1.3} className={open ? "text-white" : "text-brand"} />
                  <div>
                    <h3 className="text-xl font-bold leading-tight lg:text-2xl">{label}</h3>
                    <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">{text}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                          Explore <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="border-y border-ink/15 bg-neutral-50 py-24">
        <div className={wrap}>
          <h2 className="mb-14 max-w-2xl text-[clamp(38px,4.8vw,64px)] font-extrabold leading-[0.98] tracking-tighter">
            A disciplined process, <span className="text-brand">built for trust.</span>
          </h2>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-0.5 bg-ink lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative">
                <span className="relative grid size-14 place-items-center rounded-full bg-brand text-white ring-8 ring-neutral-50">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <span className="mt-6 block text-sm font-bold text-brand">Step {i + 1}</span>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="py-20">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[0.9fr_1.4fr]`}>
          <div>
            <h2 className="text-[clamp(32px,3.8vw,48px)] font-extrabold leading-[1.02] tracking-tighter">
              Works with the tools <span className="text-brand">you already use.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Examples of tools we can connect. We fit into your setup, not the other way round.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition hover:border-brand hover:bg-brand hover:text-white"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-ink text-white">
        <div className={`${wrap} grid gap-10 py-24 lg:grid-cols-2 lg:gap-20`}>
          <h2 className="text-[clamp(42px,5.6vw,84px)] font-extrabold leading-[0.95] tracking-tighter">
            Technology
            <br />
            with <span className="text-brand">Purpose.</span>
          </h2>
          <div className="lg:pt-3">
            <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-white/70">
              Rare IT is a focused team that believes technology should create meaningful change. We hold ourselves to the
              standards of long-established firms, with the speed and attention of a team that treats every client as a
              partner.
            </p>
            <ul className="mb-9 space-y-3 text-sm font-semibold">
              {["Senior engineers on every project", "Transparent communication, no surprises", "Built to scale with your business"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-5 place-items-center rounded-full bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <PrimaryBtn to="/about">Our Story</PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section className={`${wrap} py-24`}>
        <div className="grid overflow-hidden rounded-[36px] border-2 border-ink lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-brand p-10 text-white sm:p-14">
            <span className="pointer-events-none absolute -bottom-28 -right-28 size-80 rounded-full bg-ink" />
            <div className="relative">
              <h3 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1] tracking-tight">
                Let’s Build Something Great Together.
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/90">
                Partner with Rare IT for innovative, scalable and future-ready solutions. Tell us about your project and
                we’ll get back to you.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12">
            {sent ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white">
                    <Check size={26} strokeWidth={3} />
                  </span>
                  <h4 className="mt-5 text-2xl font-extrabold tracking-tight">Thank you!</h4>
                  <p className="mt-2 text-sm text-muted">We’ve received your details and will be in touch soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <input required name="first" placeholder="First name" className={fieldCls} />
                <input required name="last" placeholder="Last name" className={fieldCls} />
                <input required type="email" name="email" placeholder="Business email address" className={`${fieldCls} sm:col-span-2`} />
                <input name="company" placeholder="Company name" className={fieldCls} />
                <input type="tel" name="phone" placeholder="Phone number" className={fieldCls} />
                <select name="service" defaultValue="" className={`${fieldCls} sm:col-span-2`}>
                  <option value="" disabled>I’m interested in…</option>
                  <option>Process Automation</option>
                  <option>Web Designing</option>
                  <option>Custom Software</option>
                  <option>Mobile App Development</option>
                  <option>SAP</option>
                  <option>Something else</option>
                </select>
                <textarea name="message" rows={3} placeholder="Tell us a little about your project" className={`${fieldCls} resize-none sm:col-span-2`} />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:col-span-2 sm:justify-self-start"
                >
                  Get in Touch
                  <span className="grid size-10 place-items-center rounded-full bg-white text-brand">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            )}
            <p className="mt-6 text-xs text-muted">SAP is a trademark of SAP SE. Rare IT is an independent IT company.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
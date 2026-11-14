import { useEffect, useState } from "react";
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
  Plus,
  Mail,
  Phone,
  MapPin,
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

const heroFlow = [
  { icon: ShoppingCart, t: "New order", d: "Received from your store" },
  { icon: Database, t: "Check stock", d: "Matched with inventory" },
  { icon: Landmark, t: "Send invoice", d: "Created and emailed" },
  { icon: Users, t: "Notify team", d: "Right people, right time" },
];

const flow = ["New order", "Check stock", "Send invoice", "Notify team"];

const smarts = [
  {
    icon: Bot,
    title: "Industry-aware automation",
    text: "Workflows tuned to your sector’s data, rules and terminology, so results are precise and easy to audit.",
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

const faqs = [
  {
    q: "How do we start a project with Rare IT?",
    a: "Send us a short note about what you want to achieve. We reply to set up a call, learn about your goals and users, and then share a clear plan and scope for you to review before any work begins.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Yes. We connect new software to the tools you already rely on, such as CRMs, spreadsheets, payment gateways, messaging apps and SAP, so your team does not have to change how it works overnight.",
  },
  {
    q: "Do you support the product after launch?",
    a: "Yes. We stay with you after go-live with monitoring, fixes, updates and new features as your business grows.",
  },
  {
    q: "Which kinds of businesses do you work with?",
    a: "We work with growing businesses in healthcare, manufacturing, retail and e-commerce, finance and education, as well as teams in other sectors that need software built around their processes.",
  },
];

const contact = [
  { icon: Mail, label: "info@rareit.in", href: "mailto:info@rareit.in" },
  { icon: Phone, label: "+91 79976 58999", href: "tel:+917997658999" },
  {
    icon: MapPin,
    label: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad 500081",
  },
];

/* ---------- SMALL PIECES ---------- */
const wrap = "mx-auto w-[min(1760px,100%-32px)] sm:w-[min(1760px,100%-48px)] lg:w-[min(1760px,100%-64px)]";
const sectionY = "py-16 sm:py-20 lg:py-24";
const h2Cls = "font-extrabold leading-[1.02] tracking-tighter text-[clamp(32px,4.8vw,64px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const gridTexture =
  "[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]";

const fieldCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base outline-none transition placeholder:text-ink/40 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm";

const PrimaryBtn = ({ to, children, dark = false }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:pl-7 ${focusRing}`}
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
  // Starts "all done" so the pre-rendered HTML shows a complete workflow
  const [active, setActive] = useState(heroFlow.length);

  // Animate the hero workflow on the client only, and respect reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % (heroFlow.length + 2)), 1300);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to Firebase later
    setSent(true);
  };

  const progress = (Math.min(active, heroFlow.length - 1) / (heroFlow.length - 1)) * 100;
  const current = industries[ind];
  const CurrentIcon = current.icon;

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_75%_35%,black,transparent_70%)]" />

        <div className={`${wrap} relative grid items-center gap-12 pb-12 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20 lg:pt-20`}>
          <div>
            <h1 className="text-[clamp(52px,11vw,150px)] font-extrabold leading-[0.9] tracking-tighter">
              Build.
              <br />
              Innovate.
              <br />
              <span className="text-brand">Grow.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-muted sm:mt-8 sm:text-lg">
              A next-gen IT partner helping businesses transform ideas into powerful digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5 sm:mt-10">
              <PrimaryBtn to="/contact">Start a project</PrimaryBtn>
              <a
                href="#services"
                className={`border-b-2 border-ink pb-1 text-sm font-semibold transition hover:border-brand hover:text-brand ${focusRing}`}
              >
                Explore our services
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} className="shrink-0 text-brand" />
              Based in Hyderabad, working with businesses across India.
            </p>
          </div>

          {/* live workflow visual */}
          <div className="relative mx-auto w-full max-w-[600px] pb-6 lg:mr-0">
            <div className="relative overflow-hidden rounded-[28px] bg-ink p-5 text-white shadow-[0_40px_90px_rgba(13,13,15,0.25)] sm:rounded-[36px] sm:p-9">
              <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_70%)]`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-white/60">Example workflow</p>
                    <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">Order to delivery, automated</h3>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand motion-reduce:animate-none" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand" />
                    </span>
                    Live
                  </span>
                </div>

                <ol className="relative mt-6 space-y-3 sm:mt-7">
                  <span aria-hidden="true" className="absolute bottom-[38px] left-[37px] top-[38px] w-0.5 bg-white/15">
                    <span className="block w-full bg-brand transition-[height] duration-700 motion-reduce:transition-none" style={{ height: `${progress}%` }} />
                  </span>
                  {heroFlow.map(({ icon: Icon, t, d }, i) => {
                    const done = i < active;
                    const running = i === active;
                    return (
                      <li
                        key={t}
                        className={`relative flex items-center gap-4 rounded-2xl border p-4 transition-colors duration-500 motion-reduce:transition-none ${
                          running ? "border-brand/70 bg-neutral-800" : "border-white/10 bg-neutral-900"
                        }`}
                      >
                        <span
                          className={`relative grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-500 ${
                            done || running ? "bg-brand text-white" : "bg-white text-ink"
                          }`}
                        >
                          {running && (
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60 motion-reduce:animate-none" />
                          )}
                          <Icon size={18} strokeWidth={1.8} className="relative" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold">{t}</p>
                          <p className="truncate text-xs text-white/60">{d}</p>
                        </div>
                        <Check
                          size={18}
                          strokeWidth={3}
                          className={`ml-auto shrink-0 text-brand transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}
                        />
                      </li>
                    );
                  })}
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
        <ul className={`${wrap} relative grid grid-cols-2 border-t-2 border-ink sm:grid-cols-3 lg:grid-cols-5`}>
          {services.map(({ to, icon: Icon, title }, i) => (
            <li
              key={title}
              className={`border-b border-ink/10 lg:border-b-0 ${i % 2 === 1 ? "border-l border-ink/10 sm:border-l-0" : ""} ${
                i === services.length - 1 ? "col-span-2 sm:col-span-1" : ""
              } ${i > 0 ? "lg:border-l lg:border-ink/15" : ""}`}
            >
              <Link
                to={to}
                className={`group flex flex-col items-start gap-3 px-4 py-5 transition-colors duration-300 hover:bg-brand hover:text-white sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-7 ${focusRing}`}
              >
                <Icon size={24} strokeWidth={1.5} className="shrink-0 text-brand transition group-hover:text-white" />
                <span className="text-sm font-bold leading-tight sm:text-[15px]">{title}</span>
                <ArrowUpRight size={18} className="ml-auto hidden opacity-40 transition group-hover:opacity-100 sm:block" />
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
              className={`flex items-start gap-4 border-b border-white/10 py-6 last:border-b-0 sm:px-6 sm:py-9 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 ${
                i > 0 ? "lg:border-l lg:border-white/15" : "lg:pl-0"
              } ${i % 2 === 1 ? "sm:border-l sm:border-white/15" : ""}`}
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
      <section id="services" className={`${wrap} ${sectionY} grid scroll-mt-20 gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2Cls}>
            Built for your business. <span className="text-brand">Not retrofitted to it.</span>
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted sm:mt-6">
            Every Rare IT solution is designed from scratch around how your teams work, with software, websites and apps
            that fit from day one.
          </p>
        </div>

        <ul className="border-t-2 border-ink">
          {services.map(({ to, icon: Icon, title, text, points }) => (
            <li key={title} className="border-b border-ink/15">
              <Link
                to={to}
                className={`group grid grid-cols-[auto_1fr] gap-4 px-1 py-7 transition-colors duration-300 hover:bg-ink hover:text-white sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:px-6 sm:py-9 ${focusRing}`}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand sm:size-14">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold tracking-tight sm:text-3xl">{title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted transition group-hover:text-white/70">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold text-ink/70 transition group-hover:border-white/30 group-hover:text-white/80"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="hidden size-12 place-items-center rounded-full border border-ink/20 transition group-hover:border-brand group-hover:bg-brand sm:grid">
                  <ArrowUpRight size={20} className="transition group-hover:rotate-12" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SMARTER (black band) ===== */}
      <section className={`relative overflow-hidden bg-ink text-white ${sectionY}`}>
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]`} />
        <div className={`${wrap} relative`}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
            <h2 className="font-extrabold leading-[1.02] tracking-tighter text-[clamp(32px,5vw,72px)]">
              What makes Rare IT solutions <span className="text-brand">smarter?</span>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/65">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual
              effort.
            </p>
          </div>

          {/* automation flow */}
          <div className="mt-10 rounded-3xl border border-white/15 p-4 sm:mt-14 sm:p-6">
            <p className="mb-4 text-sm font-semibold text-white/60">One order, no manual steps</p>
            <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              {flow.map((s, i) => (
                <li key={s} className="inline-flex items-center gap-3">
                  <span className={`rounded-full px-4 py-2 text-xs font-bold ${i === flow.length - 1 ? "bg-brand text-white" : "bg-white text-ink"}`}>
                    {s}
                  </span>
                  {i < flow.length - 1 && <ArrowRight size={14} className="rotate-90 text-brand sm:rotate-0" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>

          <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {smarts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-ink p-6 transition hover:bg-neutral-900 sm:p-8">
                <Icon size={30} strokeWidth={1.5} className="text-brand" />
                <h3 className="mt-6 text-xl font-bold leading-tight sm:mt-8">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <PrimaryBtn to="/contact">See it in action</PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES (tabs: list + detail panel) ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <h2 className={`max-w-3xl ${h2Cls}`}>
            Built for your industry. <span className="text-brand">Not retrofitted to it.</span>
          </h2>
          <Link
            to="/industries"
            className={`inline-flex items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold md:self-auto ${focusRing}`}
          >
            View all industries <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <div
            role="tablist"
            aria-label="Industries"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {industries.map(({ icon: Icon, label }, i) => {
              const on = ind === i;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  id={`ind-tab-${i}`}
                  aria-selected={on}
                  aria-controls="ind-panel"
                  onClick={() => setInd(i)}
                  onMouseEnter={() => setInd(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-bold transition lg:py-5 lg:text-lg ${focusRing} ${
                    on ? "border-ink bg-ink text-white" : "border-ink/10 bg-neutral-50 text-ink hover:border-ink/30"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.6} className={on ? "text-brand" : "text-ink/50"} />
                  <span className="whitespace-nowrap">{label}</span>
                  <ArrowRight size={16} className={`ml-auto hidden transition lg:block ${on ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="ind-panel"
            aria-labelledby={`ind-tab-${ind}`}
            className="relative flex min-h-[320px] flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-brand p-7 text-white sm:p-10 lg:min-h-[400px]"
          >
            <span className="pointer-events-none absolute -bottom-32 -right-24 size-96 rounded-full bg-ink/90" />
            <CurrentIcon size={52} strokeWidth={1.2} className="relative" />
            <div className="relative">
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{current.label}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">{current.text}</p>
              <Link
                to={current.to}
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-neutral-100 ${focusRing}`}
              >
                Explore {current.label} <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className={`border-y border-ink/15 bg-neutral-50 ${sectionY}`}>
        <div className={wrap}>
          <h2 className={`mb-12 max-w-2xl sm:mb-14 ${h2Cls}`}>
            A disciplined process, <span className="text-brand">built for trust.</span>
          </h2>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-0.5 bg-ink lg:block" />
            <span aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-0.5 -translate-x-1/2 bg-ink/15 sm:hidden" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative grid grid-cols-[auto_1fr] gap-x-5 sm:block">
                <span className="relative grid size-14 place-items-center rounded-full bg-brand text-white ring-8 ring-neutral-50">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <span className="block text-sm font-bold text-brand sm:mt-6">Step {i + 1}</span>
                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="py-16 sm:py-20">
        <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10`}>
          <div>
            <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.05] tracking-tighter">
              Works with the tools <span className="text-brand">you already use.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Examples of tools we can connect. We fit into your setup, not the other way round.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5 sm:gap-3">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink/20 px-4 py-2 text-sm font-bold transition hover:border-brand hover:bg-brand hover:text-white sm:px-5 sm:py-2.5"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-ink text-white">
        <div className={`${wrap} grid gap-8 ${sectionY} lg:grid-cols-2 lg:gap-20`}>
          <h2 className="text-[clamp(40px,5.6vw,84px)] font-extrabold leading-[0.97] tracking-tighter">
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
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
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

      {/* ===== FAQ ===== */}
      <section className={`${wrap} ${sectionY} grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <h2 className={h2Cls}>
          Questions, <span className="text-brand">answered.</span>
        </h2>
        <div className="border-t-2 border-ink">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-ink/15">
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-bold marker:hidden sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}
              >
                {q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/20 transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} pb-16 sm:pb-20 lg:pb-24`}>
        <div className="grid overflow-hidden rounded-[28px] border-2 border-ink sm:rounded-[36px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-brand p-7 text-white sm:p-14">
            <span className="pointer-events-none absolute -bottom-28 -right-28 size-80 rounded-full bg-ink" />
            <div className="relative">
              <h3 className="text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight">
                Let’s Build Something Great Together.
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/90">
                Partner with Rare IT for innovative, scalable and future-ready solutions. Tell us about your project and
                we’ll get back to you.
              </p>
              <ul className="mt-8 space-y-4 text-sm font-semibold">
                {contact.map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                      <Icon size={16} />
                    </span>
                    {href ? (
                      <a href={href} className="mt-1.5 break-all underline-offset-4 hover:underline">
                        {label}
                      </a>
                    ) : (
                      <address className="mt-1.5 max-w-[260px] font-semibold not-italic leading-snug">{label}</address>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-12">
            {sent ? (
              <div role="status" className="grid h-full min-h-64 place-items-center text-center">
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
                <label className="sr-only" htmlFor="first">First name</label>
                <input id="first" required name="first" autoComplete="given-name" placeholder="First name" className={fieldCls} />
                <label className="sr-only" htmlFor="last">Last name</label>
                <input id="last" required name="last" autoComplete="family-name" placeholder="Last name" className={fieldCls} />
                <label className="sr-only" htmlFor="email">Business email address</label>
                <input id="email" required type="email" name="email" autoComplete="email" placeholder="Business email address" className={`${fieldCls} sm:col-span-2`} />
                <label className="sr-only" htmlFor="company">Company name</label>
                <input id="company" name="company" autoComplete="organization" placeholder="Company name" className={fieldCls} />
                <label className="sr-only" htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="Phone number" className={fieldCls} />
                <label className="sr-only" htmlFor="service">Service you are interested in</label>
                <select id="service" name="service" defaultValue="" className={`${fieldCls} sm:col-span-2`}>
                  <option value="" disabled>I’m interested in…</option>
                  <option>Process Automation</option>
                  <option>Web Designing</option>
                  <option>Custom Software</option>
                  <option>Mobile App Development</option>
                  <option>SAP</option>
                  <option>Something else</option>
                </select>
                <label className="sr-only" htmlFor="message">About your project</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your project" className={`${fieldCls} resize-none sm:col-span-2`} />
                <button
                  type="submit"
                  className={`group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:col-span-2 sm:w-auto sm:justify-self-start ${focusRing}`}
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
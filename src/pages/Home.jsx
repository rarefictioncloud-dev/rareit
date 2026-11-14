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

/* ---------- STYLE HELPERS ---------- */
const wrap = "mx-auto w-[min(1760px,100%-32px)] sm:w-[min(1760px,100%-48px)] lg:w-[min(1760px,100%-64px)]";
const sectionY = "py-14 sm:py-20 lg:py-24";
const h2Cls = "text-balance font-extrabold leading-[1.05] tracking-tighter text-[clamp(32px,4.8vw,64px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
// Lets a horizontal scroller run edge-to-edge on phones, then snap back to the grid on desktop
const bleed = "-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0";
const hideScroll = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const gridTexture =
  "[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]";

const fieldCls =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-4 text-base outline-none transition placeholder:text-ink/40 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:rounded-xl sm:py-3.5 sm:text-sm";

const css = `
@keyframes rit-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.rit-marquee { animation: rit-marquee 32s linear infinite; }
@media (prefers-reduced-motion: reduce) { .rit-marquee { animation: none; } }
`;

const PrimaryBtn = ({ to, children, dark = false, block = false }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(212,15,20,0.8)] transition hover:bg-brand-dark active:scale-[0.98] sm:pl-7 sm:text-sm ${
      block ? "w-full justify-between sm:w-auto sm:justify-start" : ""
    } ${focusRing}`}
  >
    {children}
    <span
      className={`grid size-11 place-items-center rounded-full transition group-hover:translate-x-0.5 sm:size-10 ${
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
  const [showBar, setShowBar] = useState(false);
  // Starts "all done" so the pre-rendered HTML shows a complete workflow
  const [active, setActive] = useState(heroFlow.length);

  // Animate the hero workflow on the client only, and respect reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % (heroFlow.length + 2)), 1300);
    return () => clearInterval(id);
  }, []);

  // Mobile sticky CTA: show after the hero, hide once the contact section comes into view
  useEffect(() => {
    const onScroll = () => {
      const contactEl = document.getElementById("contact");
      const nearContact = contactEl ? contactEl.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setShowBar(window.scrollY > 560 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_75%_35%,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-32 top-10 size-72 rounded-full bg-brand/15 blur-[90px] lg:hidden" />

        <div className={`${wrap} relative grid items-center gap-10 pb-14 pt-8 sm:gap-12 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-24 lg:pt-20`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 py-1.5 pl-2 pr-3.5 text-xs font-semibold text-ink/70 shadow-sm backdrop-blur">
              <span className="grid size-5 place-items-center rounded-full bg-brand text-white">
                <MapPin size={11} />
              </span>
              IT company in Hyderabad
            </p>
            <h1 className="mt-5 text-[clamp(56px,14vw,150px)] font-extrabold leading-[0.9] tracking-tighter sm:mt-6">
              Build.
              <br />
              Innovate.
              <br />
              <span className="text-brand">Grow.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted sm:mt-8 sm:text-lg">
              A next-gen IT partner helping businesses transform ideas into powerful digital solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
              <PrimaryBtn to="/contact" block>
                Start a project
              </PrimaryBtn>
              <a
                href="#services"
                className={`flex items-center justify-center rounded-full border border-ink/15 bg-white py-3.5 text-[15px] font-semibold transition active:scale-[0.98] sm:inline-flex sm:rounded-none sm:border-0 sm:border-b-2 sm:border-ink sm:bg-transparent sm:py-0 sm:pb-1 sm:text-sm sm:hover:border-brand sm:hover:text-brand ${focusRing}`}
              >
                Explore our services
              </a>
            </div>
          </div>

          {/* live workflow visual */}
          <div className="relative mx-auto w-full max-w-[600px] pb-2 lg:mr-0 lg:pb-6">
            <div className="relative overflow-hidden rounded-[28px] bg-ink p-4 text-white shadow-[0_40px_90px_rgba(13,13,15,0.28)] sm:rounded-[36px] sm:p-9">
              <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_70%)]`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3 px-1 pt-1 sm:px-0 sm:pt-0">
                  <div>
                    <p className="text-xs font-semibold text-white/60">Example workflow</p>
                    <h3 className="text-lg font-extrabold leading-tight tracking-tight sm:text-xl">Order to delivery, automated</h3>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand motion-reduce:animate-none" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand" />
                    </span>
                    Live
                  </span>
                </div>

                <ol className="relative mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
                  <span aria-hidden="true" className="absolute bottom-[34px] left-[33px] top-[34px] w-0.5 bg-white/15 sm:bottom-[38px] sm:left-[37px] sm:top-[38px]">
                    <span className="block w-full bg-brand transition-[height] duration-700 motion-reduce:transition-none" style={{ height: `${progress}%` }} />
                  </span>
                  {heroFlow.map(({ icon: Icon, t, d }, i) => {
                    const done = i < active;
                    const running = i === active;
                    return (
                      <li
                        key={t}
                        className={`relative flex items-center gap-3.5 rounded-2xl border p-3 transition-colors duration-500 motion-reduce:transition-none sm:gap-4 sm:p-4 ${
                          running ? "border-brand/70 bg-neutral-800" : "border-white/10 bg-neutral-900"
                        }`}
                      >
                        <span
                          className={`relative grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-500 sm:size-11 ${
                            done || running ? "bg-brand text-white" : "bg-white text-ink"
                          }`}
                        >
                          {running && (
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60 motion-reduce:animate-none" />
                          )}
                          <Icon size={17} strokeWidth={1.8} className="relative" />
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

        {/* quick service links (desktop only, phones go straight to the services below) */}
        <ul className={`${wrap} relative hidden border-t-2 border-ink lg:grid lg:grid-cols-5`}>
          {services.map(({ to, icon: Icon, title }, i) => (
            <li key={title} className={i > 0 ? "border-l border-ink/15" : ""}>
              <Link
                to={to}
                className={`group flex items-center gap-4 px-5 py-7 transition-colors duration-300 hover:bg-brand hover:text-white ${focusRing}`}
              >
                <Icon size={24} strokeWidth={1.5} className="shrink-0 text-brand transition group-hover:text-white" />
                <span className="text-[15px] font-bold leading-tight">{title}</span>
                <ArrowUpRight size={18} className="ml-auto opacity-40 transition group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== PILLARS STRIP ===== */}
      <section className="bg-ink text-white">
        <ul className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex flex-col gap-3 border-white/10 p-5 sm:flex-row sm:gap-4 sm:px-6 sm:py-9 lg:border-b-0 ${i < 2 ? "border-b" : ""} ${
                i % 2 === 1 ? "border-l" : ""
              } ${i > 0 ? "lg:border-l" : "lg:border-l-0 lg:pl-0"}`}
            >
              <Icon size={26} strokeWidth={1.5} className="shrink-0 text-brand sm:mt-0.5" />
              <div>
                <h3 className="text-[15px] font-bold leading-tight">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className={`${wrap} ${sectionY} grid scroll-mt-20 gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2Cls}>
            Built for your business. <span className="text-brand">Not retrofitted to it.</span>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted sm:mt-6">
            Every Rare IT solution is designed from scratch around how your teams work, with software, websites and apps
            that fit from day one.
          </p>
        </div>

        <ul className="flex flex-col gap-3 lg:gap-0 lg:border-t-2 lg:border-ink">
          {services.map(({ to, icon: Icon, title, text, points }) => (
            <li key={title} className="lg:border-b lg:border-ink/15">
              <Link
                to={to}
                className={`group relative grid gap-4 rounded-3xl border border-ink/10 bg-neutral-50 p-5 transition active:scale-[0.99] active:bg-neutral-100 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:py-9 lg:transition-colors lg:duration-300 lg:hover:bg-ink lg:hover:text-white lg:active:scale-100 ${focusRing}`}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-ink text-white transition lg:size-14 lg:group-hover:bg-brand">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-extrabold tracking-tight lg:text-3xl">{title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted transition lg:group-hover:text-white/70">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[11px] font-semibold text-ink/70 transition lg:bg-transparent lg:py-1 lg:group-hover:border-white/30 lg:group-hover:text-white/80"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 bg-white transition sm:right-7 sm:top-7 lg:static lg:size-12 lg:bg-transparent lg:group-hover:border-brand lg:group-hover:bg-brand">
                  <ArrowUpRight size={18} className="transition lg:group-hover:rotate-12" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SMARTER (black band) ===== */}
      <section className={`relative overflow-hidden bg-ink text-white ${sectionY}`}>
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]`} />
        <div className="pointer-events-none absolute -left-24 top-1/2 size-72 rounded-full bg-brand/20 blur-[100px] lg:hidden" />
        <div className={`${wrap} relative`}>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
            <h2 className="text-balance text-[clamp(32px,5vw,72px)] font-extrabold leading-[1.05] tracking-tighter">
              What makes Rare IT solutions <span className="text-brand">smarter?</span>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/65">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual
              effort.
            </p>
          </div>

          {/* automation flow */}
          <div className="mt-8 rounded-3xl border border-white/15 bg-white/[0.03] p-4 sm:mt-14 sm:p-6">
            <p className="mb-3 text-sm font-semibold text-white/60 sm:mb-4">One order, no manual steps</p>
            <ol className={`flex items-center gap-2 overflow-x-auto sm:flex-wrap sm:gap-3 sm:overflow-visible ${hideScroll}`}>
              {flow.map((s, i) => (
                <li key={s} className="inline-flex shrink-0 items-center gap-2 sm:gap-3">
                  <span className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold ${i === flow.length - 1 ? "bg-brand text-white" : "bg-white text-ink"}`}>
                    {s}
                  </span>
                  {i < flow.length - 1 && <ArrowRight size={14} className="shrink-0 text-brand" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>

          {/* swipeable on phones, grid on desktop */}
          <ul
            className={`mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-6 ${bleed} ${hideScroll} lg:grid lg:snap-none lg:grid-cols-4 lg:gap-px lg:overflow-hidden lg:rounded-3xl lg:bg-white/15 lg:pb-0`}
          >
            {smarts.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="w-[82%] shrink-0 snap-start rounded-3xl border border-white/10 bg-neutral-900 p-6 transition sm:w-[46%] sm:p-7 lg:w-auto lg:rounded-none lg:border-0 lg:bg-ink lg:p-8 lg:hover:bg-neutral-900"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 lg:bg-transparent lg:p-0">
                  <Icon size={28} strokeWidth={1.5} className="text-brand" />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-tight lg:mt-8">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-1 text-center text-xs text-white/40 lg:hidden">Swipe to see more</p>

          <div className="mt-8 sm:mt-10">
            <PrimaryBtn to="/contact" block>
              See it in action
            </PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES (tabs: list + detail panel) ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
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

        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <div
            role="tablist"
            aria-label="Industries"
            className={`flex snap-x gap-2 overflow-x-auto pb-1 ${bleed} ${hideScroll} lg:flex-col lg:overflow-visible`}
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
                  className={`flex shrink-0 snap-start items-center gap-2.5 rounded-full border px-4 py-3 text-left text-sm font-bold transition active:scale-[0.97] lg:gap-3 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-lg ${focusRing} ${
                    on ? "border-ink bg-ink text-white" : "border-ink/10 bg-neutral-50 text-ink hover:border-ink/30"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.7} className={on ? "text-brand" : "text-ink/50"} />
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
            className="relative flex min-h-[290px] flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-brand p-6 text-white sm:min-h-[320px] sm:p-10 lg:min-h-[400px]"
          >
            <span className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-ink/90 sm:-bottom-32 sm:-right-24 sm:size-96" />
            <CurrentIcon size={48} strokeWidth={1.2} className="relative" />
            <div className="relative">
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{current.label}</h3>
              <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-white/90 sm:max-w-md sm:text-base">{current.text}</p>
              <Link
                to={current.to}
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-neutral-100 active:scale-[0.98] ${focusRing}`}
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
          <h2 className={`mb-10 max-w-2xl sm:mb-14 ${h2Cls}`}>
            A disciplined process, <span className="text-brand">built for trust.</span>
          </h2>
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-0.5 bg-ink lg:block" />
            <span aria-hidden="true" className="absolute bottom-8 left-7 top-8 w-0.5 -translate-x-1/2 bg-ink/15 sm:hidden" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative grid grid-cols-[auto_1fr] gap-x-5 sm:block">
                <span className="relative grid size-14 place-items-center rounded-full bg-brand text-white ring-8 ring-neutral-50">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <div className="pt-1 sm:pt-0">
                  <span className="block text-sm font-bold text-brand sm:mt-6">Step {i + 1}</span>
                  <h3 className="mt-0.5 text-2xl font-extrabold tracking-tight sm:mt-1">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="overflow-hidden py-14 sm:py-20">
        <div className={`${wrap} grid items-center gap-7 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10`}>
          <div>
            <h2 className="text-balance text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.08] tracking-tighter">
              Works with the tools <span className="text-brand">you already use.</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:mt-4">
              Examples of tools we can connect. We fit into your setup, not the other way round.
            </p>
          </div>

          {/* desktop: wrapped chips */}
          <ul className="hidden flex-wrap gap-3 lg:flex">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition hover:border-brand hover:bg-brand hover:text-white"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* mobile: slow auto-scrolling strip */}
          <div className="relative -mx-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:-mx-6 lg:hidden">
            <ul className="rit-marquee flex w-max gap-2.5 px-4">
              {[...tools, ...tools].map((t, i) => (
                <li
                  key={`${t}-${i}`}
                  aria-hidden={i >= tools.length}
                  className="whitespace-nowrap rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-ink text-white">
        <div className={`${wrap} grid gap-7 ${sectionY} lg:grid-cols-2 lg:gap-20`}>
          <h2 className="text-[clamp(42px,5.6vw,84px)] font-extrabold leading-[0.97] tracking-tighter">
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
            <ul className="mb-8 space-y-3 text-sm font-semibold sm:mb-9">
              {["Senior engineers on every project", "Transparent communication, no surprises", "Built to scale with your business"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <PrimaryBtn to="/about" block>
              Our Story
            </PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <h2 className={h2Cls}>
          Questions, <span className="text-brand">answered.</span>
        </h2>
        <div className="border-t-2 border-ink">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-ink/15">
              <summary
                className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 text-left text-base font-bold leading-snug marker:hidden sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}
              >
                {q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/20 transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white sm:size-9">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-muted sm:pb-6">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} scroll-mt-20 pb-14 sm:pb-20 lg:pb-24`}>
        <div className="grid overflow-hidden rounded-[28px] border-2 border-ink sm:rounded-[36px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-brand p-6 text-white sm:p-14">
            <span className="pointer-events-none absolute -bottom-28 -right-28 hidden size-80 rounded-full bg-ink lg:block" />
            <div className="relative">
              <h3 className="text-balance text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.05] tracking-tight">
                Let’s Build Something Great Together.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-5">
                Partner with Rare IT for innovative, scalable and future-ready solutions. Tell us about your project and
                we’ll get back to you.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold sm:mt-8 lg:space-y-4">
                {contact.map(({ icon: Icon, label, href }) =>
                  href ? (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3.5 text-[15px] transition active:bg-white/25 lg:bg-transparent lg:p-0 lg:text-sm lg:hover:underline lg:underline-offset-4"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                          <Icon size={16} />
                        </span>
                        <span className="break-all">{label}</span>
                      </a>
                    </li>
                  ) : (
                    <li key={label} className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3.5 lg:bg-transparent lg:p-0">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                        <Icon size={16} />
                      </span>
                      <address className="max-w-[280px] pt-1.5 font-semibold not-italic leading-snug">{label}</address>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-12">
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
              <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                  className={`group mt-1 inline-flex w-full items-center justify-between gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:col-span-2 sm:w-auto sm:justify-self-start sm:text-sm ${focusRing}`}
                >
                  Get in Touch
                  <span className="grid size-11 place-items-center rounded-full bg-white text-brand sm:size-10">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            )}
            <p className="mt-5 text-xs text-muted sm:mt-6">SAP is a trademark of SAP SE. Rare IT is an independent IT company.</p>
          </div>
        </div>
      </section>

      {/* ===== MOBILE STICKY CTA ===== */}
      <div
        aria-hidden={!showBar}
        className={`fixed inset-x-0 bottom-0 z-40 px-3 pt-2 transition duration-300 lg:hidden ${
          showBar ? "translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"
        }`}
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-ink/95 p-1.5 shadow-[0_20px_50px_-10px_rgba(13,13,15,0.6)] backdrop-blur">
          <Link
            to="/contact"
            className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white active:scale-[0.98] ${focusRing}`}
          >
            Start a project <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+917997658999"
            aria-label="Call Rare IT"
            className={`grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink active:scale-95 ${focusRing}`}
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
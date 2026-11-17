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

/* =====================================================================
   REQUIRED THEME (tailwind.config.js  ->  theme.extend)
   colors: {
     brand: { DEFAULT: "#C8102E", dark: "#A00D25" },
     ink: "#0B1530",      // deep navy (replaces the old near-black)
     muted: "#5B6475",
     mist: "#F4F6FA",     // light section background
     line: "#E4E8F0",     // hairline borders
   },
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
     display: ['"Space Grotesk"', "Inter", "sans-serif"],
   }
   Fonts (index.html <head>):
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap">
   ===================================================================== */

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
const wrap = "mx-auto w-[min(1280px,100%-40px)] sm:w-[min(1280px,100%-64px)]";
const sectionY = "py-16 sm:py-20 lg:py-28";
const h2Cls = "text-balance font-display font-bold leading-[1.08] tracking-tight text-[clamp(30px,4vw,52px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
// Lets a horizontal scroller run edge-to-edge on phones, then snap back to the grid on desktop
const bleed = "-mx-5 px-5 scroll-pl-5 sm:-mx-8 sm:px-8 sm:scroll-pl-8 lg:mx-0 lg:px-0";
const hideScroll = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const gridTexture =
  "[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px]";

const fieldCls =
  "w-full rounded-lg border border-line bg-white px-4 py-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:py-3.5 sm:text-sm";

const css = `
@keyframes rit-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.rit-marquee { animation: rit-marquee 32s linear infinite; }
@media (prefers-reduced-motion: reduce) { .rit-marquee { animation: none; } }
`;

const PrimaryBtn = ({ to, children, block = false }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-3 rounded-md bg-brand py-3.5 pl-6 pr-5 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:text-sm ${
      block ? "w-full justify-between sm:w-auto sm:justify-start" : ""
    } ${focusRing}`}
  >
    {children}
    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
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

  const filled = Math.min(active + 1, heroFlow.length);
  const stepLabel = active >= heroFlow.length ? "All steps complete" : `Step ${active + 1} of ${heroFlow.length}`;
  const current = industries[ind];
  const CurrentIcon = current.icon;
  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_70%)]`} />
        <div className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full border-[90px] border-white/[0.04]" />

        <div className={`${wrap} relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28 lg:pt-28`}>
          <div>
            <h1 className="font-display text-[clamp(40px,5.6vw,76px)] font-bold leading-[1.04] tracking-tight">
              Engineering the digital future of your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:mt-8 sm:text-xl">
              A next-gen IT partner helping businesses transform ideas into powerful digital solutions. Build, innovate and grow with software that fits the way you work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
              <PrimaryBtn to="/contact" block>
                Start a project
              </PrimaryBtn>
              <a
                href="#services"
                className={`flex items-center justify-center rounded-md border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10 active:scale-[0.98] sm:text-sm ${focusRing}`}
              >
                Explore our services
              </a>
            </div>
          </div>

          {/* live workflow visual */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
            <div className="rounded-2xl bg-white p-5 text-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-muted">Example workflow</p>
                  <h3 className="mt-0.5 font-display text-xl font-semibold leading-tight">Order to delivery, automated</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E3F5EA] px-3 py-1 text-[11px] font-semibold text-[#0B6B3A]">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1E9E5A] motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#1E9E5A]" />
                  </span>
                  Live
                </span>
              </div>

              {/* segmented progress */}
              <div className="mt-5 flex items-center gap-3" aria-hidden="true">
                <div className="flex flex-1 gap-1.5">
                  {heroFlow.map((s, i) => (
                    <span
                      key={s.t}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-500 motion-reduce:transition-none ${i < filled ? "bg-brand" : "bg-line"}`}
                    />
                  ))}
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-muted">{stepLabel}</span>
              </div>

              <ol className="mt-5 space-y-2.5">
                {heroFlow.map(({ icon: Icon, t, d }, i) => {
                  const done = i < active;
                  const running = i === active;
                  return (
                    <li
                      key={t}
                      className={`flex items-center gap-4 rounded-xl border p-3.5 transition-colors duration-500 motion-reduce:transition-none sm:p-4 ${
                        running ? "border-brand bg-brand/5" : "border-line bg-white"
                      }`}
                    >
                      <span
                        className={`relative grid size-11 shrink-0 place-items-center rounded-lg transition-colors duration-500 ${
                          done || running ? "bg-brand text-white" : "bg-mist text-ink/70"
                        }`}
                      >
                        {running && (
                          <span className="absolute inline-flex size-full animate-ping rounded-lg bg-brand/40 motion-reduce:animate-none" />
                        )}
                        <Icon size={18} strokeWidth={1.8} className="relative" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold leading-tight">{t}</p>
                        <p className="mt-0.5 truncate text-xs text-muted">{d}</p>
                      </div>
                      <span
                        className={`ml-auto grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white transition-all duration-500 ${
                          done ? "scale-100 opacity-100" : "scale-75 opacity-0"
                        }`}
                      >
                        <Check size={13} strokeWidth={3.5} />
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="absolute -left-4 -bottom-5 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 text-ink shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:flex lg:-left-10">
              <span className="grid size-9 place-items-center rounded-lg bg-brand text-white">
                <Plug size={16} />
              </span>
              <div>
                <span className="block text-[11px] text-muted">Works with your tools</span>
                <strong className="text-xs">No manual steps</strong>
              </div>
            </div>
            <div className="absolute -right-3 -top-4 hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_30px_rgba(0,0,0,0.3)] sm:flex lg:-right-6">
              <ShieldCheck size={14} /> Secure by design
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="border-b border-line bg-mist">
        <ul className={`${wrap} grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-0`}>
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex gap-4 lg:px-8 lg:py-10 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"}`}
            >
              <Icon size={24} strokeWidth={1.6} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <h3 className="text-[15px] font-semibold leading-tight">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className={`${wrap} ${sectionY} scroll-mt-20`}>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className={h2Cls}>Built for your business, not retrofitted to it.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Every Rare IT solution is designed from scratch around how your teams work, with software, websites and apps that fit from day one.
            </p>
          </div>
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold text-brand md:self-auto ${focusRing}`}
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to={featured.to}
            className={`group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl bg-ink p-7 text-white transition active:scale-[0.99] sm:col-span-2 sm:p-10 ${focusRing}`}
          >
            <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_65%)]`} />
            <div className="relative flex items-start justify-between">
              <span className="grid size-14 place-items-center rounded-xl bg-brand">
                <FeaturedIcon size={26} strokeWidth={1.6} />
              </span>
              <span className="grid size-11 place-items-center rounded-full border border-white/25 transition group-hover:border-brand group-hover:bg-brand">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="relative">
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{featured.title}</h3>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">{featured.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {featured.points.map((p) => (
                  <li key={p} className="rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-medium text-white/85">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Link>

          {rest.map(({ to, icon: Icon, title, text, points }, i) => (
            <Link
              key={title}
              to={to}
              className={`group flex flex-col gap-6 rounded-2xl border border-line bg-white p-7 transition hover:border-brand hover:shadow-[0_20px_40px_-24px_rgba(11,21,48,0.35)] active:scale-[0.99] ${
                i === 0 ? "" : ""
              } ${focusRing}`}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-mist text-ink transition group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <ArrowUpRight size={18} className="text-ink/30 transition group-hover:text-brand" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2">
                {points.map((p) => (
                  <li key={p} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink/75">
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== SMARTER (navy band) ===== */}
      <section className={`relative overflow-hidden bg-ink text-white ${sectionY}`}>
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]`} />
        <div className={`${wrap} relative`}>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
            <h2 className="text-balance font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[1.06] tracking-tight">
              What makes Rare IT solutions smarter?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual effort.
            </p>
          </div>

          {/* automation flow */}
          <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:mt-14 sm:p-7">
            <p className="mb-4 text-sm font-medium text-white/65">One order, no manual steps</p>
            <ol className={`flex items-center gap-2 overflow-x-auto sm:flex-wrap sm:gap-3 sm:overflow-visible ${hideScroll}`}>
              {flow.map((s, i) => (
                <li key={s} className="inline-flex shrink-0 items-center gap-2 sm:gap-3">
                  <span
                    className={`whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold ${
                      i === flow.length - 1 ? "bg-brand text-white" : "bg-white text-ink"
                    }`}
                  >
                    {s}
                  </span>
                  {i < flow.length - 1 && <ArrowRight size={14} className="shrink-0 text-white/50" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>

          {/* swipeable on phones, grid on desktop */}
          <ul
            className={`mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 ${bleed} ${hideScroll} lg:grid lg:snap-none lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0`}
          >
            {smarts.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="w-[82%] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition sm:w-[46%] lg:w-auto lg:p-7 lg:hover:border-white/30 lg:hover:bg-white/[0.08]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-center text-xs text-white/50 lg:hidden">Swipe to see more</p>

          <div className="mt-10">
            <PrimaryBtn to="/contact" block>
              See it in action
            </PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES (tabs: list + detail panel) ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <h2 className={`max-w-3xl ${h2Cls}`}>Deep domain expertise, where it matters.</h2>
          <Link
            to="/industries"
            className={`inline-flex items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold text-brand md:self-auto ${focusRing}`}
          >
            View all industries <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
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
                  className={`flex shrink-0 snap-start items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-sm font-semibold transition active:scale-[0.98] lg:px-6 lg:py-5 lg:text-base ${focusRing} ${
                    on ? "border-ink bg-ink text-white" : "border-line bg-mist text-ink hover:border-ink/30"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.7} className={on ? "text-white" : "text-brand"} />
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
            className="relative flex min-h-[300px] flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-brand p-7 text-white sm:p-10 lg:min-h-[400px]"
          >
            <span className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full border-[56px] border-white/10 sm:size-96" />
            <CurrentIcon size={48} strokeWidth={1.2} className="relative" />
            <div className="relative">
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{current.label}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/90">{current.text}</p>
              <Link
                to={current.to}
                className={`mt-7 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-mist active:scale-[0.98] ${focusRing}`}
              >
                Explore {current.label} <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className={`border-y border-line bg-mist ${sectionY}`}>
        <div className={wrap}>
          <h2 className={`mb-12 max-w-2xl sm:mb-16 ${h2Cls}`}>A disciplined process, built for trust.</h2>
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-ink/20 lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative">
                <span className="relative grid size-14 place-items-center rounded-full bg-ink text-white ring-8 ring-mist">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div className="mt-6 rounded-xl border border-line bg-white p-6">
                  <span className="text-sm font-semibold text-brand">Step {i + 1}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="overflow-hidden py-16 sm:py-20">
        <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12`}>
          <div>
            <h2 className="text-balance font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.1] tracking-tight">
              Works with the tools you already use.
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
                className="rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* mobile: slow auto-scrolling strip */}
          <div className="relative -mx-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:-mx-8 lg:hidden">
            <ul className="rit-marquee flex w-max gap-2.5 px-5">
              {[...tools, ...tools].map((t, i) => (
                <li
                  key={`${t}-${i}`}
                  aria-hidden={i >= tools.length}
                  className="whitespace-nowrap rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full border-[70px] border-white/[0.04]" />
        <div className={`${wrap} relative grid gap-10 ${sectionY} lg:grid-cols-2 lg:gap-20`}>
          <h2 className="font-display text-[clamp(40px,5.2vw,72px)] font-bold leading-[1.02] tracking-tight">
            Technology with purpose.
          </h2>
          <div className="lg:pt-3">
            <p className="mb-7 max-w-lg text-base leading-relaxed text-white/70">
              Rare IT is a focused team that believes technology should create meaningful change. We hold ourselves to the
              standards of long-established firms, with the speed and attention of a team that treats every client as a
              partner.
            </p>
            <ul className="mb-9 space-y-3.5 text-sm font-medium">
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
              Our story
            </PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${wrap} ${sectionY} grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <h2 className={h2Cls}>Questions, answered.</h2>
        <div className="border-t border-ink">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-line">
              <summary
                className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-semibold leading-snug marker:hidden sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}
              >
                {q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white sm:size-9">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} scroll-mt-20 pb-16 sm:pb-20 lg:pb-28`}>
        <div className="grid overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-40px_rgba(11,21,48,0.4)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-brand p-7 text-white sm:p-14">
            <span className="pointer-events-none absolute -bottom-32 -right-24 hidden size-80 rounded-full border-[56px] border-white/10 lg:block" />
            <div className="relative">
              <h3 className="text-balance font-display text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.08] tracking-tight">
                Let’s build something great together.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-5">
                Partner with Rare IT for innovative, scalable and future-ready solutions. Tell us about your project and
                we’ll get back to you.
              </p>
              <ul className="mt-8 space-y-3 text-sm font-medium lg:space-y-4">
                {contact.map(({ icon: Icon, label, href }) =>
                  href ? (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex items-center gap-3 rounded-lg bg-white/15 px-4 py-3.5 text-[15px] transition active:bg-white/25 lg:bg-transparent lg:p-0 lg:text-sm lg:underline-offset-4 lg:hover:underline"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                          <Icon size={16} />
                        </span>
                        <span className="break-all">{label}</span>
                      </a>
                    </li>
                  ) : (
                    <li key={label} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3.5 lg:bg-transparent lg:p-0">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                        <Icon size={16} />
                      </span>
                      <address className="max-w-[280px] pt-1.5 not-italic leading-snug">{label}</address>
                    </li>
                  )
                )}
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
                  <h4 className="mt-5 font-display text-2xl font-semibold tracking-tight">Thank you!</h4>
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
                  className={`group mt-1 inline-flex w-full items-center justify-between gap-3 rounded-md bg-brand py-3.5 pl-6 pr-5 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:col-span-2 sm:w-auto sm:justify-self-start sm:text-sm ${focusRing}`}
                >
                  Get in touch
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </button>
              </form>
            )}
            <p className="mt-6 text-xs text-muted">SAP is a trademark of SAP SE. Rare IT is an independent IT company.</p>
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
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-xl border border-white/10 bg-ink/95 p-1.5 shadow-[0_20px_50px_-10px_rgba(11,21,48,0.6)] backdrop-blur">
          <Link
            to="/contact"
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-sm font-semibold text-white active:scale-[0.98] ${focusRing}`}
          >
            Start a project <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+917997658999"
            aria-label="Call Rare IT"
            className={`grid size-12 shrink-0 place-items-center rounded-lg bg-white text-ink active:scale-95 ${focusRing}`}
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
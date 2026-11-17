import { useEffect, useRef, useState } from "react";
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
     ink: "#0B1530",      // deep navy
     muted: "#5B6475",
     mist: "#F4F6FA",     // light section background
     line: "#E4E8F0",     // hairline borders
   },
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
     display: ['"Fraunces"', "Georgia", "serif"],   // refined serif for headings
   }
   Fonts (index.html <head>):
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=Inter:wght@400;500;600;700&display=swap">

   (Prefer the previous sans look? Set display to Space Grotesk again.)
   ===================================================================== */

/* ---------- DATA ---------- */
const pillars = [
  { icon: Sparkles, title: "Built to order", text: "Every solution is designed around your business." },
  { icon: Users, title: "Senior-led teams", text: "Experienced people on every project." },
  { icon: Eye, title: "Transparent delivery", text: "Clear updates, no surprises." },
  { icon: LifeBuoy, title: "Long-term support", text: "We stay with you after launch." },
];

const heroTrust = [
  { icon: MapPin, label: "Based in Hyderabad" },
  { icon: ShieldCheck, label: "Secure by design" },
  { icon: LifeBuoy, label: "Support after launch" },
];

const services = [
  {
    to: "/services/process-automation",
    icon: Workflow,
    title: "Process Automation",
    short: "Automation",
    text: "Automate repetitive workflows, approvals and reporting across your tools, so your team can focus on work that matters.",
    points: ["Workflow automation", "Tool integrations", "Smart reporting"],
  },
  {
    to: "/services/web-designing",
    icon: Palette,
    title: "Web Designing",
    short: "Web design",
    text: "Fast, responsive, brand-led websites and portals that build trust at first glance.",
    points: ["UI/UX design", "Responsive builds", "SEO-ready"],
  },
  {
    to: "/services/custom-software",
    icon: Code2,
    title: "Custom Software",
    short: "Software",
    text: "ERP, CRM and internal platforms engineered around the way you work.",
    points: ["Web applications", "API integration", "Modernisation"],
  },
  {
    to: "/services/mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    short: "Mobile apps",
    text: "Polished iOS and Android apps, designed with real users in mind.",
    points: ["iOS and Android", "Product design", "Launch and updates"],
  },
  {
    to: "/services/sap",
    icon: Database,
    title: "SAP",
    short: "SAP",
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
const toolsA = ["Zoho CRM", "HubSpot", "Gmail", "WhatsApp Business", "Google Sheets"];
const toolsB = ["Razorpay", "Shopify", "Firebase", "Slack", "SAP"];
const tools = [...toolsA, ...toolsB];

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
  { icon: Phone, label: "+91 79976 58999", sub: "Call us", href: "tel:+917997658999" },
  { icon: Mail, label: "info@rareit.in", sub: "Email us", href: "mailto:info@rareit.in" },
  {
    icon: MapPin,
    label: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad 500081",
  },
];

/* ---------- STYLE HELPERS ---------- */
const wrap = "mx-auto w-[min(1280px,100%-40px)] sm:w-[min(1280px,100%-64px)]";
const sectionY = "py-16 sm:py-20 lg:py-28";
const h2Cls = "text-balance font-display font-medium leading-[1.1] tracking-[-0.015em] text-[clamp(30px,4vw,52px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
// Lets a horizontal scroller run edge-to-edge on phones, then snap back to the grid on desktop
const bleed = "-mx-5 px-5 scroll-pl-5 sm:-mx-8 sm:px-8 sm:scroll-pl-8 lg:mx-0 lg:px-0";
const hideScroll = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const gridTexture =
  "[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px]";

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:rounded-lg sm:py-3.5 sm:text-sm";

const css = `
@keyframes rit-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.rit-marquee { animation: rit-marquee 34s linear infinite; }
.rit-marquee-rev { animation-direction: reverse; animation-duration: 40s; }
@keyframes rit-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
.rit-rise { opacity: 0; animation: rit-rise .8s cubic-bezier(.2,.7,.2,1) forwards; }
@keyframes rit-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.rit-draw { transform-origin: left; animation: rit-draw .9s cubic-bezier(.2,.7,.2,1) .1s both; }
@media (prefers-reduced-motion: reduce) {
  .rit-marquee { animation: none; }
  .rit-rise { opacity: 1; animation: none; }
  .rit-draw { animation: none; }
}
`;

const PrimaryBtn = ({ to, children, block = false }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-3 rounded-xl bg-brand py-4 pl-6 pr-5 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:rounded-md sm:py-3.5 sm:text-sm ${
      block ? "w-full justify-between sm:w-auto sm:justify-start" : ""
    } ${focusRing}`}
  >
    {children}
    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
  </Link>
);

// Tracks which card is snapped into view in a horizontal scroller
function useSnapIndex() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const onScroll = () => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16; // gap-4
    setIndex(Math.min(el.children.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };
  return [ref, index, onScroll];
}

const Dots = ({ count, index, dark = false }) => (
  <div className="mt-5 flex items-center justify-center gap-1.5 lg:hidden" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i === index ? "w-6 bg-brand" : `w-1.5 ${dark ? "bg-white/30" : "bg-ink/20"}`
        }`}
      />
    ))}
  </div>
);

/* ---------- PAGE ---------- */
export default function Home() {
  const [sent, setSent] = useState(false);
  const [ind, setInd] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [progress, setProgress] = useState(0);
  // Starts "all done" so the pre-rendered HTML shows a complete workflow
  const [active, setActive] = useState(heroFlow.length);
  const [svcRef, svcIndex, onSvcScroll] = useSnapIndex();
  const [smartRef, smartIndex, onSmartScroll] = useSnapIndex();

  // Animate the hero workflow on the client only, and respect reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % (heroFlow.length + 2)), 1300);
    return () => clearInterval(id);
  }, []);

  // Scroll progress bar + mobile sticky CTA (shown after the hero, hidden near the contact section)
  useEffect(() => {
    const onScroll = () => {
      const contactEl = document.getElementById("contact");
      const nearContact = contactEl ? contactEl.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setShowBar(window.scrollY > 560 && !nearContact);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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

      {/* mobile reading-progress bar */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] lg:hidden">
        <div
          className="h-full origin-left bg-brand"
          style={{ transform: `scaleX(${progress})`, transition: "transform 80ms linear" }}
        />
      </div>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_85%_15%,black,transparent_65%)]`} />
        <div className="pointer-events-none absolute -right-48 -top-48 size-[460px] rounded-full border border-white/10 sm:size-[620px]" />
        <div className="pointer-events-none absolute -right-28 -top-28 size-[460px] rounded-full border border-white/[0.06] sm:size-[620px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[380px] rounded-full border-[60px] border-brand/15 sm:size-[520px]" />

        <div className={`${wrap} relative grid gap-12 pb-14 pt-8 sm:gap-14 sm:pb-20 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24`}>
          {/* first screen on phones: message + trust, pinned to the fold */}
          <div className="flex min-h-[calc(100svh-5.5rem)] flex-col justify-between gap-12 lg:block lg:min-h-0">
            <div className="pt-4 lg:pt-0">
              <span aria-hidden="true" className="rit-draw mb-7 block h-[3px] w-16 bg-brand sm:mb-9" />
              <h1
                className="rit-rise font-display text-[clamp(40px,11.2vw,66px)] font-medium leading-[1.04] tracking-[-0.02em] lg:text-[clamp(46px,5.2vw,78px)]"
                style={{ animationDelay: "60ms" }}
              >
                Engineering the digital future of your business.
              </h1>
              <p
                className="rit-rise mt-6 max-w-xl text-[17px] leading-relaxed text-white/75 sm:mt-8 sm:text-xl"
                style={{ animationDelay: "200ms" }}
              >
                A next-gen IT partner helping businesses turn ideas into powerful digital solutions, from automation and custom software to websites, apps and SAP.
              </p>
              <div
                className="rit-rise mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
                style={{ animationDelay: "340ms" }}
              >
                <PrimaryBtn to="/contact" block>
                  Start a project
                </PrimaryBtn>
                <a
                  href="#services"
                  className={`flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10 active:scale-[0.98] sm:rounded-md sm:py-3.5 sm:text-sm ${focusRing}`}
                >
                  Explore our services
                </a>
              </div>
            </div>

            <ul
              className="rit-rise grid grid-cols-3 gap-3 border-t border-white/15 pt-6 lg:mt-14 lg:max-w-xl"
              style={{ animationDelay: "480ms" }}
            >
              {heroTrust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col gap-2.5 text-white/85 sm:flex-row sm:items-center sm:gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5">
                    <Icon size={16} strokeWidth={1.7} className="text-white" />
                  </span>
                  <span className="text-[13px] font-medium leading-snug sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* live workflow visual (dark glass) */}
          <div className="rit-rise relative mx-auto w-full max-w-[560px] lg:mr-0" style={{ animationDelay: "560ms" }}>
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-4 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:p-8 lg:rounded-2xl">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-white/60">Example workflow</p>
                  <h3 className="mt-1 font-display text-[22px] font-medium leading-tight sm:text-2xl">Order to delivery, automated</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
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
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-500 motion-reduce:transition-none ${i < filled ? "bg-brand" : "bg-white/15"}`}
                    />
                  ))}
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-white/60">{stepLabel}</span>
              </div>

              <ol className="mt-5 space-y-2.5">
                {heroFlow.map(({ icon: Icon, t, d }, i) => {
                  const done = i < active;
                  const running = i === active;
                  return (
                    <li
                      key={t}
                      className={`flex items-center gap-3.5 rounded-2xl border p-3 transition-colors duration-500 motion-reduce:transition-none sm:gap-4 sm:p-4 ${
                        running ? "border-brand/80 bg-white/10" : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`relative grid size-11 shrink-0 place-items-center rounded-xl transition-colors duration-500 ${
                          done || running ? "bg-brand text-white" : "bg-white/10 text-white/75"
                        }`}
                      >
                        {running && (
                          <span className="absolute inline-flex size-full animate-ping rounded-xl bg-brand/40 motion-reduce:animate-none" />
                        )}
                        <Icon size={18} strokeWidth={1.8} className="relative" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold leading-tight">{t}</p>
                        <p className="mt-0.5 truncate text-xs text-white/60">{d}</p>
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

            {/* tablet and up: floating chips */}
            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 text-ink shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:flex lg:-left-10">
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

      {/* ===== QUICK SERVICE LINKS (phones and tablets) ===== */}
      <nav aria-label="Services" className="border-b border-line bg-white lg:hidden">
        <ul className={`flex gap-2 overflow-x-auto px-5 py-4 sm:px-8 ${hideScroll}`}>
          {services.map(({ to, icon: Icon, short }) => (
            <li key={short} className="shrink-0">
              <Link
                to={to}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold transition active:scale-[0.97] active:border-brand ${focusRing}`}
              >
                <Icon size={16} strokeWidth={1.8} className="text-brand" />
                {short}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== INTRO STATEMENT + PILLARS ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <p className="max-w-4xl text-balance font-display text-[clamp(26px,3.6vw,46px)] font-medium leading-[1.22] tracking-[-0.01em]">
          We design and build software around how your business actually works, then stay with you as it grows.
        </p>
        <ul className="mt-10 divide-y divide-line border-y border-line sm:mt-14 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`flex items-start gap-4 py-5 lg:flex-col lg:gap-5 lg:px-8 lg:py-9 ${i === 0 ? "lg:pl-0" : ""}`}>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/10">
                <Icon size={20} strokeWidth={1.6} className="text-brand" />
              </span>
              <div>
                <h3 className="text-base font-semibold leading-tight">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="scroll-mt-20 bg-mist">
        <div className={`${wrap} ${sectionY}`}>
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end md:gap-6">
            <div className="max-w-2xl">
              <h2 className={h2Cls}>Built for your business, not retrofitted to it.</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Every Rare IT solution is designed from scratch around how your teams work, with software, websites and apps that fit from day one.
              </p>
            </div>
            <Link
              to="/services"
              className={`hidden items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold text-brand md:inline-flex md:self-auto ${focusRing}`}
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>

          {/* phones: swipeable cards */}
          <div className="md:hidden">
            <ul
              ref={svcRef}
              onScroll={onSvcScroll}
              className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 ${bleed} ${hideScroll}`}
            >
              {services.map(({ to, icon: Icon, title, text, points }, i) => {
                const dark = i === 0;
                return (
                  <li key={title} className="w-[84%] shrink-0 snap-start">
                    <Link
                      to={to}
                      className={`relative flex min-h-[350px] flex-col justify-between gap-8 overflow-hidden rounded-3xl p-6 transition active:scale-[0.98] ${
                        dark ? "bg-ink text-white" : "border border-line bg-white text-ink shadow-[0_18px_40px_-28px_rgba(11,21,48,0.45)]"
                      } ${focusRing}`}
                    >
                      {dark && (
                        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_65%)]`} />
                      )}
                      <div className="relative flex items-start justify-between">
                        <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-brand text-white" : "bg-ink text-white"}`}>
                          <Icon size={24} strokeWidth={1.6} />
                        </span>
                        <span className={`grid size-10 place-items-center rounded-full border ${dark ? "border-white/25" : "border-line"}`}>
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                      <div className="relative">
                        <h3 className="font-display text-[26px] font-medium tracking-tight">{title}</h3>
                        <p className={`mt-2.5 text-[14px] leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {points.map((p) => (
                            <li
                              key={p}
                              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                                dark ? "border border-white/25 text-white/85" : "bg-mist text-ink/75"
                              }`}
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Dots count={services.length} index={svcIndex} />
            <Link
              to="/services"
              className={`mt-6 flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white py-4 text-[15px] font-semibold active:scale-[0.98] ${focusRing}`}
            >
              View all services <ArrowRight size={15} className="text-brand" />
            </Link>
          </div>

          {/* tablet and desktop: grid */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            <Link
              to={featured.to}
              className={`group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl bg-ink p-10 text-white transition active:scale-[0.99] md:col-span-2 ${focusRing}`}
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
                <h3 className="font-display text-4xl font-medium tracking-tight">{featured.title}</h3>
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

            {rest.map(({ to, icon: Icon, title, text, points }) => (
              <Link
                key={title}
                to={to}
                className={`group flex flex-col gap-6 rounded-2xl border border-line bg-white p-7 transition hover:border-brand hover:shadow-[0_20px_40px_-24px_rgba(11,21,48,0.35)] active:scale-[0.99] ${focusRing}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-mist text-ink transition group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight size={18} className="text-ink/30 transition group-hover:text-brand" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">{title}</h3>
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
        </div>
      </section>

      {/* ===== SMARTER (navy band) ===== */}
      <section className={`relative overflow-hidden bg-ink text-white ${sectionY}`}>
        <div className={`pointer-events-none absolute inset-0 ${gridTexture} [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]`} />
        <div className={`${wrap} relative`}>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
            <h2 className="text-balance font-display text-[clamp(30px,4.4vw,58px)] font-medium leading-[1.08] tracking-[-0.015em]">
              What makes Rare IT solutions smarter?
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual effort.
            </p>
          </div>

          {/* automation flow */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:mt-14 sm:p-7">
            <p className="mb-3 text-sm font-medium text-white/65 sm:mb-4">One order, no manual steps</p>
            <ol className={`flex items-center gap-2 overflow-x-auto sm:flex-wrap sm:gap-3 sm:overflow-visible ${hideScroll}`}>
              {flow.map((s, i) => (
                <li key={s} className="inline-flex shrink-0 items-center gap-2 sm:gap-3">
                  <span
                    className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold sm:rounded-md ${
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
            ref={smartRef}
            onScroll={onSmartScroll}
            className={`mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-5 ${bleed} ${hideScroll} lg:grid lg:snap-none lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0`}
          >
            {smarts.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="w-[82%] shrink-0 snap-start rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition sm:w-[46%] lg:w-auto lg:rounded-2xl lg:p-7 lg:hover:border-white/30 lg:hover:bg-white/[0.08]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ul>
          <Dots count={smarts.length} index={smartIndex} dark />

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
          <h2 className={`max-w-3xl ${h2Cls}`}>Deep domain expertise, where it matters.</h2>
          <Link
            to="/industries"
            className={`hidden items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold text-brand md:inline-flex md:self-auto ${focusRing}`}
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
                  className={`flex shrink-0 snap-start items-center gap-2.5 rounded-full border px-4 py-3 text-left text-sm font-semibold transition active:scale-[0.97] lg:gap-3 lg:rounded-lg lg:px-6 lg:py-5 lg:text-base ${focusRing} ${
                    on ? "border-ink bg-ink text-white" : "border-line bg-mist text-ink hover:border-ink/30"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.7} className={on ? "text-white" : "text-brand"} />
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
            className="relative flex min-h-[290px] flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-brand p-6 text-white sm:p-10 lg:min-h-[400px] lg:rounded-2xl"
          >
            <span className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full border-[56px] border-white/10 sm:size-96" />
            <CurrentIcon size={44} strokeWidth={1.2} className="relative" />
            <div className="relative">
              <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{current.label}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">{current.text}</p>
              <Link
                to={current.to}
                className={`mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-mist active:scale-[0.98] sm:mt-7 sm:rounded-md ${focusRing}`}
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
          <h2 className={`mb-10 max-w-2xl sm:mb-16 ${h2Cls}`}>A disciplined process, built for trust.</h2>
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-ink/20 lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative pl-[68px] sm:pl-0">
                {/* phones: vertical timeline connector */}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute -bottom-5 left-6 top-12 w-px bg-ink/20 sm:hidden" />
                )}
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full bg-ink text-white ring-4 ring-mist sm:relative sm:size-14 sm:ring-8">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <div className="rounded-2xl border border-line bg-white p-5 sm:mt-6 sm:rounded-xl sm:p-6">
                  <span className="text-sm font-semibold text-brand">Step {i + 1}</span>
                  <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="overflow-hidden py-14 sm:py-20">
        <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12`}>
          <div>
            <h2 className="text-balance font-display text-[clamp(26px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.01em]">
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

          {/* phones and tablets: two strips moving in opposite directions */}
          <div className="relative -mx-5 space-y-2.5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:-mx-8 lg:hidden">
            {[toolsA, toolsB].map((row, r) => (
              <ul key={r} className={`rit-marquee ${r === 1 ? "rit-marquee-rev" : ""} flex w-max gap-2.5 px-5`}>
                {[...row, ...row, ...row, ...row].map((t, i) => (
                  <li
                    key={`${t}-${i}`}
                    aria-hidden={i >= row.length}
                    className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 size-[420px] rounded-full border border-white/[0.06]" />
        <div className={`${wrap} relative grid gap-8 ${sectionY} lg:grid-cols-2 lg:gap-20`}>
          <h2 className="font-display text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.03] tracking-[-0.02em]">
            Technology with purpose.
          </h2>
          <div className="lg:pt-3">
            <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-white/70 sm:mb-7 sm:text-base">
              Rare IT is a focused team that believes technology should create meaningful change. We hold ourselves to the
              standards of long-established firms, with the speed and attention of a team that treats every client as a
              partner.
            </p>
            <ul className="mb-8 space-y-2.5 text-sm font-medium sm:mb-9 sm:space-y-3.5">
              {["Senior engineers on every project", "Transparent communication, no surprises", "Built to scale with your business"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3.5 sm:bg-transparent sm:p-0">
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
      <section className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
        <h2 className={h2Cls}>Questions, answered.</h2>
        <div className="space-y-3 lg:space-y-0 lg:border-t lg:border-ink">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-line bg-white px-5 open:border-brand/40 open:bg-mist lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:px-0 lg:open:bg-transparent"
            >
              <summary
                className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold leading-snug marker:hidden sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}
              >
                {q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white sm:size-9">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-muted sm:pb-6">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} scroll-mt-20 pb-24 sm:pb-20 lg:pb-28`}>
        <div className="grid overflow-hidden rounded-3xl border border-line shadow-[0_30px_70px_-40px_rgba(11,21,48,0.4)] lg:grid-cols-[0.9fr_1.1fr] lg:rounded-2xl">
          <div className="relative overflow-hidden bg-brand p-6 text-white sm:p-14">
            <span className="pointer-events-none absolute -bottom-32 -right-24 hidden size-80 rounded-full border-[56px] border-white/10 lg:block" />
            <div className="relative">
              <h3 className="text-balance font-display text-[clamp(28px,3.6vw,46px)] font-medium leading-[1.1] tracking-[-0.015em]">
                Let’s build something great together.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-5">
                Partner with Rare IT for innovative, scalable and future-ready solutions. Tell us about your project and
                we’ll get back to you.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-3 text-sm font-medium sm:mt-8 lg:block lg:space-y-4">
                {contact.map(({ icon: Icon, label, sub, href }) =>
                  href ? (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex h-full flex-col items-start gap-3 rounded-2xl bg-white/15 p-4 transition active:bg-white/25 lg:flex-row lg:items-center lg:rounded-none lg:bg-transparent lg:p-0 lg:underline-offset-4 lg:hover:underline"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand lg:size-9">
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-medium text-white/75 lg:hidden">{sub}</span>
                          <span className="block break-all text-[13px] font-semibold leading-snug lg:text-sm">{label}</span>
                        </span>
                      </a>
                    </li>
                  ) : (
                    <li key={label} className="col-span-2 flex items-start gap-3 rounded-2xl bg-white/10 p-4 lg:bg-transparent lg:p-0">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand lg:size-9">
                        <Icon size={17} />
                      </span>
                      <address className="max-w-[280px] pt-1.5 not-italic leading-snug">{label}</address>
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
                  <h4 className="mt-5 font-display text-2xl font-medium tracking-tight">Thank you!</h4>
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
                  className={`group mt-1 inline-flex w-full items-center justify-between gap-3 rounded-xl bg-brand py-4 pl-6 pr-5 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:col-span-2 sm:w-auto sm:justify-self-start sm:rounded-md sm:py-3.5 sm:text-sm ${focusRing}`}
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
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-ink/95 p-1.5 shadow-[0_20px_50px_-10px_rgba(11,21,48,0.6)] backdrop-blur">
          <Link
            to="/contact"
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white active:scale-[0.98] ${focusRing}`}
          >
            Start a project <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+917997658999"
            aria-label="Call Rare IT"
            className={`grid size-12 shrink-0 place-items-center rounded-xl bg-white text-ink active:scale-95 ${focusRing}`}
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
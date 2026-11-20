import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, Workflow, Palette, Code2, Smartphone, Database,
  HeartPulse, Factory, ShoppingCart, Landmark, GraduationCap, Truck, Search, PenTool,
  Rocket, LifeBuoy, Bot, LayoutDashboard, Plug, ShieldCheck, Plus, Mail, Phone, MapPin,
  Wrench, Pause, Play,
} from "lucide-react";

/* =====================================================================
   THEME (tailwind.config.js -> theme.extend)  -- unchanged from before
   colors: {
     brand: { DEFAULT: "#C8102E", dark: "#A00D25" },
     ink: "#0B1530", muted: "#5B6475", mist: "#F4F6FA", line: "#E4E8F0",
   },
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
     display: ['"Fraunces"', "Georgia", "serif"],
   }
   ===================================================================== */

/* ---------- DATA ---------- */
const SLIDE_MS = 7000;

const slides = [
  {
    tab: "Software",
    title: "Engineering the digital future of your business.",
    text: "A next-gen IT partner turning ideas into powerful digital solutions, from automation and custom software to websites, apps and SAP.",
    cta: { label: "Talk about your project", to: "/contact" },
    card: { label: "Workflow concept", title: "From order to invoice", rows: [
      [ShoppingCart, "New order", "Order received"],
      [Database, "Check stock", "Inventory matched"],
      [Plug, "Create invoice", "Finance notified"],
    ] },
  },
  {
    tab: "Automation",
    title: "Automate the busywork. Keep your people for the work that matters.",
    text: "Approvals, reporting and hand-offs run on their own across the tools you already use, with people looped in only when judgment is needed.",
    cta: { label: "Explore automation", to: "/services/process-automation" },
    card: { label: "Automation concept", title: "Approvals without the chasing", rows: [
      [Workflow, "Request submitted", "Routed to the right owner"],
      [ShieldCheck, "Rules checked", "Policy applied automatically"],
      [LayoutDashboard, "Report updated", "Dashboard refreshed"],
    ] },
  },
  {
    tab: "SAP",
    title: "One connected system, from finance to stock.",
    text: "We set up, connect and extend SAP so finance, sales and inventory run from a single source of truth, with training and support included.",
    cta: { label: "See our SAP services", to: "/services/sap" },
    card: { label: "SAP concept", title: "Finance, sales and stock in sync", rows: [
      [Landmark, "Finance", "Postings reconciled"],
      [ShoppingCart, "Sales", "Orders flowing in"],
      [Database, "Inventory", "Levels always current"],
    ] },
  },
];

const quick = [
  { icon: Workflow, label: "Process automation", to: "/services/process-automation" },
  { icon: Code2, label: "Custom software", to: "/services/custom-software" },
  { icon: Smartphone, label: "Web and mobile apps", to: "/services/mobile-apps" },
  { icon: Database, label: "SAP services", to: "/services/sap" },
];

const industries = [
  { icon: Factory, to: "/industries/manufacturing", title: "Manufacturing", text: "Connected operations, production tracking and smarter reporting." },
  { icon: Truck, to: "/industries/distribution", title: "Distribution", text: "Keep goods and information moving, from warehouse to doorstep." },
  { icon: ShoppingCart, to: "/industries/retail", title: "Retail and E-commerce", text: "Seamless storefronts, inventory flows and customer journeys." },
  { icon: HeartPulse, to: "/industries/healthcare", title: "Healthcare", text: "Secure, compliant digital care, from patient portals to clinic workflows." },
  { icon: Landmark, to: "/industries/finance", title: "Finance", text: "Trusted, scalable tools for approvals, records and compliance." },
  { icon: GraduationCap, to: "/industries/education", title: "Education", text: "Learning platforms and admin tools without the paperwork." },
];

const smarts = [
  { icon: Bot, title: "Industry-aware automation", text: "Workflows tuned to your sector’s data, rules and terminology, so results are precise and easy to audit." },
  { icon: LayoutDashboard, title: "Adaptive experiences", text: "Interfaces that shape themselves around each role, surfacing what matters and automating the routine." },
  { icon: Plug, title: "Connected workflows", text: "Work flows across your existing tools, with people looped in only when judgment is needed." },
  { icon: ShieldCheck, title: "Governed delivery", text: "Security, access control and audit trails are built in from the very first release." },
];

const services = [
  { icon: Workflow, to: "/services/process-automation", title: "Process Automation", text: "Automate repetitive workflows, approvals and reporting across your tools.", cta: "Explore automation",
    points: ["Approval and routing workflows", "Automated reports and alerts", "Hand-offs between teams and tools", "Audit trail on every action"] },
  { icon: Code2, to: "/services/custom-software", title: "Custom Software", text: "ERP, CRM and internal platforms engineered around the way you work.", cta: "Explore software",
    points: ["ERP and CRM platforms", "Internal tools and admin portals", "APIs and integrations", "Role-based access and security"] },
  { icon: Palette, to: "/services/web-designing", title: "Web Designing", text: "Fast, responsive, brand-led websites and portals that build trust at first glance.", cta: "Explore web design",
    points: ["Brand-led design systems", "Mobile-first, fast-loading pages", "Customer and partner portals", "SEO and accessibility basics"] },
  { icon: Smartphone, to: "/services/mobile-apps", title: "Mobile Apps", text: "Polished iOS and Android apps, designed with real users in mind.", cta: "Explore mobile apps",
    points: ["iOS and Android from one plan", "Offline-friendly field apps", "Push notifications and payments", "Store launch and updates"] },
  { icon: Database, to: "/services/sap", title: "SAP", text: "Set up, connect and extend SAP so finance, sales and stock run from one system.", cta: "Explore SAP",
    points: ["Setup and configuration", "Connect SAP to your other tools", "Custom extensions and reports", "User training and support"] },
  { icon: Wrench, to: "/contact", title: "Support and maintenance", text: "Monitoring, fixes and updates after go-live, so your product keeps getting better.", cta: "Talk to support",
    points: ["Monitoring and quick fixes", "Security and version updates", "Performance tuning", "New features as you grow"] },
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

const faqs = [
  { q: "How do we start a project with Rare IT?", a: "Send us a short note about what you want to achieve. We reply to set up a call, learn about your goals and users, and then share a clear plan and scope for you to review before any work begins." },
  { q: "Can you work with the tools we already use?", a: "Yes. We connect new software to the tools you already rely on, such as CRMs, spreadsheets, payment gateways, messaging apps and SAP, so your team does not have to change how it works overnight." },
  { q: "Do you support the product after launch?", a: "Yes. We stay with you after go-live with monitoring, fixes, updates and new features as your business grows." },
];

const contact = [
  { icon: Phone, label: "+91 79976 58999", href: "tel:+917997658999" },
  { icon: Mail, label: "info@rareit.in", href: "mailto:info@rareit.in" },
  { icon: MapPin, label: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad 500081" },
];

/* ---------- STYLE HELPERS ---------- */
const wrap = "mx-auto w-[min(1240px,100%-32px)] sm:w-[min(1240px,100%-64px)]";
const sectionY = "py-14 sm:py-20 lg:py-24";
const h2Cls = "text-balance font-display font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(28px,4.2vw,50px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const fieldCls = "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm";

const css = `
@keyframes rit-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.rit-marquee { animation: rit-marquee 38s linear infinite; }
.rit-marquee-rev { animation-direction: reverse; animation-duration: 44s; }
@keyframes rit-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.rit-fill { transform-origin: left; animation: rit-fill ${SLIDE_MS}ms linear forwards; }
@keyframes rit-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.rit-in { animation: rit-in .6s cubic-bezier(.2,.7,.2,1) both; }
.rit-snap { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
.rit-snap::-webkit-scrollbar { display: none; }
@media (prefers-reduced-motion: reduce) {
  .rit-marquee, .rit-fill, .rit-in { animation: none; }
  .rit-fill { transform: scaleX(1); }
}
`;

const Btn = ({ to, href, children, variant = "primary", full = false }) => {
  const v = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    ghost: "border border-white/30 text-white hover:border-white hover:bg-white/10",
    outline: "border border-ink/20 text-ink hover:border-ink",
  }[variant];
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition active:scale-[0.98] ${full ? "w-full sm:w-auto" : ""} ${v} ${focusRing}`;
  const arrow = <ArrowRight size={16} className="transition group-hover:translate-x-1" />;
  return href ? (
    <a href={href} className={cls}>{children}{arrow}</a>
  ) : (
    <Link to={to} className={cls}>{children}{arrow}</Link>
  );
};

const SectionHead = ({ title, text, to, link, light = false }) => (
  <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
    <div className="max-w-2xl">
      <h2 className={`${h2Cls} ${light ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-xl text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
    {link && (
      <Link to={to} className={`inline-flex items-center gap-2 self-start border-b-2 border-brand pb-1 text-sm font-semibold text-brand md:self-auto ${focusRing}`}>
        {link} <ArrowRight size={14} />
      </Link>
    )}
  </div>
);

/* ---------- PAGE ---------- */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [done, setDone] = useState(0); // rows ticked in hero card
  const [svc, setSvc] = useState(0);
  const [sent, setSent] = useState(false);
  const [showBar, setShowBar] = useState(false);

  // auto-advance slides
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [slide, paused]);

  // hero card: rows tick off one after another each time the slide changes
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDone(3); return; }
    setDone(0);
    const ids = [1, 2, 3].map((n) => setTimeout(() => setDone(n), 700 + n * 750));
    return () => ids.forEach(clearTimeout);
  }, [slide]);

  // mobile sticky CTA
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("contact");
      const near = el ? el.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setShowBar(window.scrollY > 560 && !near);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to Firebase later
    setSent(true);
  };

  const s = slides[slide];
  const sv = services[svc];
  const SvIcon = sv.icon;

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden bg-ink text-white"
        aria-roledescription="carousel"
        aria-label="Highlights"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(200,16,46,0.35),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className={`${wrap} relative grid items-center gap-10 py-12 sm:py-16 lg:min-h-[640px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20`}>
          <div key={`t${slide}`} className="rit-in" aria-live={paused ? "polite" : "off"}>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium">
              <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
              {s.tab}
            </p>
            <h1 className="text-balance font-display text-[clamp(34px,9vw,56px)] font-medium leading-[1.05] tracking-[-0.025em] lg:text-[clamp(44px,4.6vw,68px)]">
              {s.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">{s.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Btn to={s.cta.to} full>{s.cta.label}</Btn>
              <Btn href="#industries" variant="ghost" full>Explore what we do</Btn>
            </div>
          </div>

          {/* workflow card */}
          <div key={`c${slide}`} className="rit-in mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="rounded-3xl border border-white/10 bg-white p-4 text-ink shadow-[0_40px_90px_-30px_rgba(200,16,46,0.45)] sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted">{s.card.label}</p>
                  <h2 className="mt-1 text-lg font-semibold leading-tight sm:text-2xl">{s.card.title}</h2>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-500 ${done === 3 ? "bg-emerald-50 text-emerald-700" : "bg-mist text-muted"}`}>
                  <span className={`size-2 rounded-full ${done === 3 ? "bg-emerald-500" : "animate-pulse bg-amber-400"}`} />
                  {done === 3 ? "Connected" : "Running"}
                </span>
              </div>
              <ul className="relative mt-5 space-y-2.5">
                {s.card.rows.map(([Icon, t, d], i) => {
                  const ok = done > i;
                  return (
                    <li key={t} className={`flex items-center gap-3 rounded-2xl border p-3 transition-colors duration-500 sm:gap-4 sm:p-3.5 ${ok ? "border-emerald-200/70 bg-emerald-50/30" : "border-line"}`}>
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white sm:size-11">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold leading-tight">{t}</p>
                        <p className="mt-0.5 truncate text-xs text-ink/60">{ok ? d : "Waiting…"}</p>
                      </div>
                      <span className={`ml-auto grid size-6 shrink-0 place-items-center rounded-full transition-all duration-500 ${ok ? "scale-100 bg-emerald-500" : "scale-90 bg-mist"}`}>
                        <Check size={14} strokeWidth={2.8} className={ok ? "text-white" : "text-transparent"} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* slide tabs with progress */}
        <div className={`${wrap} relative pb-6 sm:pb-8`}>
          <div className="flex items-center gap-3">
            <ul className="grid flex-1 grid-cols-3 gap-2 sm:gap-3" role="tablist" aria-label="Choose highlight">
              {slides.map((x, i) => (
                <li key={x.tab}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === slide}
                    onClick={() => setSlide(i)}
                    className={`block min-h-11 w-full text-left ${focusRing}`}
                  >
                    <span className="block h-1 overflow-hidden rounded-full bg-white/15">
                      {i === slide && (
                        <span
                          key={`p${slide}`}
                          className="rit-fill block h-full bg-brand"
                          style={{ animationPlayState: paused ? "paused" : "running" }}
                        />
                      )}
                    </span>
                    <span className={`mt-2 block text-sm font-semibold transition ${i === slide ? "text-white" : "text-white/50"}`}>
                      {x.tab}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play highlights" : "Pause highlights"}
              className={`grid size-11 shrink-0 place-items-center rounded-full border border-white/25 transition hover:bg-white/10 ${focusRing}`}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="border-b border-line bg-white">
        <ul className={`${wrap} grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x`}>
          {quick.map(({ icon: Icon, label, to }, i) => (
            <li key={label} className={`${i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}>
              <Link to={to} className={`group flex min-h-20 flex-col justify-center gap-2 px-3 py-4 transition hover:bg-mist sm:flex-row sm:items-center sm:gap-3 sm:px-6 ${focusRing}`}>
                <Icon size={22} strokeWidth={1.6} className="text-brand" />
                <span className="text-sm font-semibold leading-tight">{label}</span>
                <ArrowUpRight size={15} className="ml-auto hidden text-muted transition group-hover:text-brand sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== MEET RARE IT ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <p className="text-sm font-semibold text-brand">Meet Rare IT</p>
          <div>
            <h2 className="max-w-3xl text-balance font-display text-[clamp(26px,3.8vw,46px)] font-medium leading-[1.15] tracking-[-0.02em]">
              Software and AI-ready automation that know how your business works.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
              Rare IT is a Hyderabad-based team that designs and builds software around the way you actually work, then stays with you as you grow. Senior engineers, transparent delivery and long-term support come as standard.
            </p>
            <ul className="mt-7 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap">
              {["Built around your process", "Clear, collaborative delivery", "Support beyond launch"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-3 text-sm font-medium">
                  <Check size={15} strokeWidth={2.6} className="text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="scroll-mt-20 bg-mist">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead
            title="Built for your industry. Not retrofitted to it."
            text="Every solution starts from the way your sector works: its data, rules, terminology and customers."
          />
          {/* mobile: swipeable row  |  desktop: grid */}
          <ul className="rit-snap -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5">
            {industries.map(({ icon: Icon, to, title, text }) => (
              <li key={title} className="w-[80%] shrink-0 snap-start sm:w-auto">
                <Link
                  to={to}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-28px_rgba(11,21,48,0.4)] ${focusRing}`}
                >
                  <span className="relative grid h-32 place-items-center bg-ink text-white sm:h-36">
                    <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(200,16,46,0.55),transparent_65%)]" />
                    <Icon size={42} strokeWidth={1.2} className="relative transition group-hover:scale-110" />
                  </span>
                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="font-display text-xl font-medium tracking-tight sm:text-2xl">{title}</span>
                    <span className="mt-2 text-sm leading-relaxed text-muted">{text}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand">
                      {title} solutions <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-center text-xs text-muted sm:hidden">Swipe to see more industries</p>
        </div>
      </section>

      {/* ===== SERVICES (tabbed) ===== */}
      <section id="services" className="scroll-mt-20">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead
            title="Software and services for every business need"
            text="Explore what we build. Everything is designed to connect, so each piece works with the rest."
          />
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-0 lg:overflow-hidden lg:rounded-3xl lg:border lg:border-line">
            {/* tab list: scroll pills on mobile, vertical list on desktop */}
            <div role="tablist" aria-label="Services" className="rit-snap -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-0 lg:bg-mist lg:p-3 lg:pb-3">
              {services.map(({ icon: Icon, title }, i) => (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={i === svc}
                  onClick={() => setSvc(i)}
                  className={`flex min-h-12 shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-semibold transition lg:rounded-2xl lg:border-0 lg:px-4 lg:py-4 lg:text-left ${
                    i === svc ? "border-brand bg-brand text-white lg:bg-white lg:text-brand lg:shadow-sm" : "border-line bg-white text-ink hover:border-ink/40 lg:bg-transparent lg:hover:bg-white/60"
                  } ${focusRing}`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span className="whitespace-nowrap">{title}</span>
                  <ArrowRight size={15} className="ml-auto hidden lg:block" />
                </button>
              ))}
            </div>

            <div role="tabpanel" key={sv.title} className="rit-in rounded-3xl border border-line bg-white p-6 sm:p-9 lg:rounded-none lg:border-0 lg:p-12">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand/10 text-brand">
                <SvIcon size={26} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-display text-[clamp(26px,3vw,36px)] font-medium tracking-tight">{sv.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{sv.text}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {sv.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/10">
                      <Check size={12} strokeWidth={3} className="text-brand" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Btn to={sv.to} full>{sv.cta}</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES IT SMARTER ===== */}
      <section className={`${wrap} pb-14 sm:pb-20 lg:pb-24`}>
        <div className="grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-brand p-7 sm:p-12">
            <span className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-white/10" />
            <div className="relative">
              <p className="text-sm font-semibold text-white/80">Our approach</p>
              <h2 className="mt-3 text-balance font-display text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.02em]">
                What makes Rare IT solutions smarter?
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/90">
                Automation, clean design and solid engineering work together, so your business runs faster with less manual effort.
              </p>
            </div>
            <div className="relative">
              <Btn to="/contact" variant="ghost" full>See it in action</Btn>
            </div>
          </div>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
            {smarts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-ink p-6 sm:p-9">
                <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-brand">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium leading-tight sm:mt-6">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS (timeline) ===== */}
      <section className="border-t border-line bg-mist">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead title="A disciplined process, built for trust." text="Four stages, each with something you can see and approve." />
          <ol className="relative grid gap-4 lg:grid-cols-4 lg:gap-5">
            <span aria-hidden="true" className="absolute left-[39px] top-10 hidden h-[calc(100%-5rem)] w-px bg-line max-lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative flex gap-4 rounded-2xl border border-line bg-white p-5 sm:p-7 lg:block">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white lg:mb-6">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
                    <span className="text-sm font-semibold text-brand">Step {i + 1}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="overflow-hidden py-12 sm:py-20">
        <div className={`${wrap} mb-8 max-w-2xl sm:mb-10`}>
          <h2 className="text-balance font-display text-[clamp(24px,3.4vw,38px)] font-medium leading-[1.12] tracking-[-0.015em]">
            Works with the tools you already use.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Examples of tools we can connect. We fit into your setup, not the other way round.
          </p>
        </div>
        <div className="space-y-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          {[toolsA, toolsB].map((row, r) => (
            <ul key={r} className={`rit-marquee ${r === 1 ? "rit-marquee-rev" : ""} flex w-max gap-3 px-3`}>
              {[...row, ...row, ...row, ...row].map((t, i) => (
                <li key={`${t}-${i}`} aria-hidden={i >= row.length} className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold sm:px-6 sm:py-3">
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${wrap} ${sectionY} grid gap-8 pt-0 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20 sm:pt-0 lg:pt-0`}>
        <h2 className={h2Cls}>Questions, answered.</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-line bg-white px-5 transition open:border-brand/40 open:bg-mist sm:px-6">
              <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}>
                {q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} scroll-mt-20 pb-28 lg:pb-28`}>
        <div className="grid overflow-hidden rounded-3xl border border-line shadow-[0_30px_70px_-40px_rgba(11,21,48,0.4)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-brand p-6 text-white sm:p-12">
            <span className="pointer-events-none absolute -bottom-32 -right-24 hidden size-80 rounded-full bg-white/10 lg:block" />
            <div className="relative">
              <h2 className="text-balance font-display text-[clamp(26px,3.6vw,42px)] font-medium leading-[1.1] tracking-[-0.015em]">
                Let’s build something great together.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
                Tell us about your project and we’ll get back to you.
              </p>
              <ul className="mt-7 space-y-4 text-sm font-medium">
                {contact.map(({ icon: Icon, label, href }) => {
                  const inner = (
                    <>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand"><Icon size={17} /></span>
                      {href ? <span className="break-all font-semibold">{label}</span> : <address className="max-w-[280px] pt-1.5 not-italic leading-snug">{label}</address>}
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? <a href={href} className="flex items-center gap-3 underline-offset-4 hover:underline">{inner}</a> : <div className="flex items-start gap-3">{inner}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-12">
            {sent ? (
              <div role="status" className="grid h-full min-h-64 place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white"><Check size={26} strokeWidth={3} /></span>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">Thank you!</h3>
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
                <label className="sr-only" htmlFor="country">Country or region</label>
                <select id="country" required name="country" defaultValue="" className={fieldCls}>
                  <option value="" disabled>Country / region *</option>
                  <option>India</option><option>Singapore</option><option>United Arab Emirates</option>
                  <option>Australia</option><option>United States</option><option>Other</option>
                </select>
                <label className="sr-only" htmlFor="industry">Industry</label>
                <select id="industry" required name="industry" defaultValue="" className={fieldCls}>
                  <option value="" disabled>Industry *</option>
                  {industries.map((i) => <option key={i.title}>{i.title}</option>)}
                  <option>Other</option>
                </select>
                <label className="sr-only" htmlFor="message">About your project</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your project" className={`${fieldCls} resize-none sm:col-span-2`} />
                <button type="submit" className={`group mt-1 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:col-span-2 sm:w-auto sm:justify-self-start ${focusRing}`}>
                  Send message <ArrowRight size={16} className="transition group-hover:translate-x-1" />
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
        className={`fixed inset-x-0 bottom-0 z-40 px-3 pt-2 transition duration-300 lg:hidden ${showBar ? "translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"}`}
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-ink/95 p-1.5 shadow-[0_20px_50px_-10px_rgba(11,21,48,0.6)] backdrop-blur">
          <Link to="/contact" className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white active:scale-[0.98] ${focusRing}`}>
            Start a project <ArrowRight size={16} />
          </Link>
          <a href="tel:+917997658999" aria-label="Call Rare IT" className={`grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink active:scale-95 ${focusRing}`}>
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
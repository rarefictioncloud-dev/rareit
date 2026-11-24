import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Eye,
  Users,
  LifeBuoy,
  Workflow,
  Palette,
  Code2,
  Smartphone,
  Database,
  Target,
  Lightbulb,
  Search,
  PenTool,
  Rocket,
  ShieldCheck,
  Clock,
  MessageSquare,
  HeartPulse,
  Factory,
  Truck,
  ShoppingCart,
  Landmark,
  GraduationCap,
  MapPin,
} from "lucide-react";

/* ---------- STYLE HELPERS (same white theme as Home) ---------- */
const wrap = "mx-auto w-[min(1240px,100%-32px)] sm:w-[min(1240px,100%-64px)] lg:w-[min(1400px,100%-96px)]";
const sectionY = "py-16 sm:py-24 lg:py-28";
const h2Cls = "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-xl border border-brand/20 bg-white text-brand transition";

const founderImg = "https://pub-c068270ff2f94b2691bb54438e646383.r2.dev/DSCF6122.JPG";

/* ---------- DATA ---------- */
const facts = [
  { icon: MapPin, title: "Based in Hyderabad", text: "A local team working with businesses across India." },
  { icon: MessageSquare, title: "Reply within 24 hours", text: "Every enquiry gets an answer within 24 business hours." },
  { icon: LifeBuoy, title: "We stay after launch", text: "Fixes, changes and new ideas are part of the deal." },
];

const missionVision = [
  {
    icon: Target,
    title: "Our mission",
    text: "To help businesses work faster and smarter with software, websites and apps that fit them from day one.",
  },
  {
    icon: Lightbulb,
    title: "Our vision",
    text: "To be the IT partner that growing businesses in India trust for every stage of their digital journey.",
  },
];

const values = [
  { icon: Sparkles, title: "Built around you", text: "We start with how your business works, then build software that fits it." },
  { icon: Eye, title: "Clear communication", text: "Plain language, regular updates and no surprises along the way." },
  { icon: Users, title: "Simple over complicated", text: "The best tool is the one your team actually enjoys using every day." },
  { icon: LifeBuoy, title: "We stay after launch", text: "Fixes, changes and new ideas are part of the relationship, not an extra." },
];

const services = [
  {
    icon: Workflow,
    label: "Process Automation",
    text: "Workflows, approvals and reports that run on their own, so your team stops repeating the same tasks.",
    tags: ["Workflows", "Approvals", "Reports"],
    to: "/services/process-automation",
  },
  {
    icon: Palette,
    label: "Web Designing",
    text: "Fast, modern websites and online stores that build trust the moment someone lands on them.",
    tags: ["Websites", "Portals", "Online stores"],
    to: "/services/web-designing",
  },
  {
    icon: Code2,
    label: "Custom Software",
    text: "ERP, CRM and internal tools built around your process instead of the other way round.",
    tags: ["ERP", "CRM", "Internal tools"],
    to: "/services/custom-software",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    text: "Android and iOS apps that your customers and your team will actually use.",
    tags: ["Android", "iOS", "Customer apps"],
    to: "/services/mobile-apps",
  },
  {
    icon: Database,
    label: "SAP",
    text: "Set up, connect and extend SAP so finance, sales and stock run from one system.",
    tags: ["Set-up", "Integration", "Extensions"],
    to: "/services/sap",
  },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare", to: "/industries/healthcare" },
  { icon: Factory, label: "Manufacturing", to: "/industries/manufacturing" },
  { icon: Truck, label: "Distribution", to: "/industries/distribution" },
  { icon: ShoppingCart, label: "Retail & E-commerce", to: "/industries/retail" },
  { icon: Landmark, label: "Finance", to: "/industries/finance" },
  { icon: GraduationCap, label: "Education", to: "/industries/education" },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn how your team works and what slows it down." },
  { icon: PenTool, title: "Design", text: "We plan screens and flows and agree on them with you." },
  { icon: Code2, title: "Build", text: "We develop in small stages so you see progress early." },
  { icon: Rocket, title: "Launch", text: "We test with real tasks, then go live with training." },
  { icon: LifeBuoy, title: "Support", text: "We stay available for fixes, changes and new features." },
];

const reasons = [
  { icon: MessageSquare, title: "Direct access to the team", text: "You talk to the people building your product, not a sales layer." },
  { icon: ShieldCheck, title: "Security from the start", text: "Access control and sensible data practices are planned in, not added later." },
  { icon: Clock, title: "Quick responses", text: "We reply to every enquiry within 24 business hours." },
  { icon: Workflow, title: "Fits your existing tools", text: "We connect with the tools you already use, so you do not start from zero." },
];

/* ---------- SMALL COMPONENTS ---------- */
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] ${focusRing}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

/* ---------- PAGE ---------- */
export default function About() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-2.5 sm:pt-4" aria-label="About Rare IT">
        <div className="relative isolate mx-auto w-[min(1240px,100%-20px)] overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:w-[min(1240px,100%-40px)] sm:rounded-[32px] lg:w-[min(1720px,100%-64px)] lg:rounded-[44px]">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]`} />

          <div className="px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:px-16 lg:pb-16 lg:pt-24 xl:px-20">
            <p className="text-sm font-semibold text-brand">About Rare IT</p>
            <h1 className="mt-5 max-w-5xl text-balance font-display text-[clamp(36px,8.4vw,60px)] font-medium leading-[1.03] tracking-[-0.04em] lg:text-[clamp(52px,6vw,96px)] lg:leading-[0.98]">
              We build technology that fits how you work<span className="text-brand">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 lg:text-[20px] lg:leading-[1.6]">
              Rare IT is an IT services company in Hyderabad. We help businesses automate routine work, launch strong websites and apps, and run on software made for them.
            </p>
          </div>

          <ul className="grid border-t border-line sm:grid-cols-3">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`flex items-start gap-4 px-5 py-5 sm:px-8 lg:px-12 lg:py-7 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                <span className={`${iconTile} size-10 shrink-0 lg:size-11`}><Icon size={18} strokeWidth={1.8} /></span>
                <div>
                  <p className="text-sm font-semibold leading-snug lg:text-[15px]">{title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== MISSION AND VISION ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {missionVision.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_34px_60px_-36px_rgba(11,21,48,0.4)] sm:p-10 lg:p-14">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
              <Icon aria-hidden="true" strokeWidth={0.7} className="pointer-events-none absolute -bottom-10 -right-10 hidden size-64 text-brand/[0.06] transition duration-700 group-hover:rotate-12 group-hover:scale-110 lg:block" />
              <span className={`${iconTile} relative size-12 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:size-14`}><Icon size={24} strokeWidth={1.6} /></span>
              <h2 className="relative mt-7 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.05]">{title}</h2>
              <p className="relative mt-4 max-w-md text-base leading-relaxed text-muted lg:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUNDER'S MESSAGE ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          <figure className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[40px] [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_78%)]" />
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-50px_rgba(11,21,48,0.45)]">
              <img
                src={founderImg}
                alt="Pallepati Vinayvardhan Reddy, Founder of Rare IT, smiling at his desk"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="flex items-center gap-4 border-t border-line bg-white px-6 py-5">
                <span aria-hidden="true" className="h-10 w-1 shrink-0 rounded-full bg-brand" />
                <span>
                  <strong className="block font-display text-xl font-medium tracking-tight">Pallepati Vinayvardhan Reddy</strong>
                  <span className="text-sm text-muted">Founder, Rare IT</span>
                </span>
              </figcaption>
            </div>
          </figure>

          <div>
            <p className="text-sm font-semibold text-brand">Founder’s message</p>
            <h2 className={`${h2Cls} mt-4`}>Technology should make your work easier, not harder.</h2>
            <div className="mt-8 space-y-5 border-l-2 border-brand pl-6 text-base leading-relaxed text-muted lg:text-lg">
              <p>
                Rare IT exists because many growing businesses are stuck with tools that do not fit them. They pay for software they barely use, or do by hand what a computer could do in seconds.
              </p>
              <p>
                Our promise is simple. We listen first, build what you actually need, explain things in plain language and stay with you after launch. Every client relationship is one we work to earn and to keep.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-sm">
              <strong className="font-semibold">Pallepati Vinayvardhan Reddy</strong>
              <span className="h-0.5 w-8 bg-brand" aria-hidden="true" />
              <span className="text-muted">Founder, Rare IT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BELIEVE ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-2xl`}>What we believe in.</h2>
          <ul className="mt-10 grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 sm:divide-y-0 lg:mt-14 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`group p-7 transition-colors duration-300 hover:bg-white lg:p-9 ${i % 2 ? "sm:border-l sm:border-line" : ""} ${i > 1 ? "sm:border-t sm:border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
                <span className={`${iconTile} size-12 group-hover:border-brand group-hover:bg-brand group-hover:text-white`}><Icon size={22} strokeWidth={1.6} /></span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight lg:text-2xl">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold text-brand">Services</p>
            <h2 className={`${h2Cls} mt-4`}>What we do.</h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted sm:text-base lg:mt-6 lg:text-lg">
              Five focused services, each built around the way your team works and designed to connect with the rest.
            </p>
          </div>

          <ul className="border-t border-line">
            {services.map(({ icon: Icon, label, text, tags, to }) => (
              <li key={to} className="border-b border-line">
                <Link to={to} className={`group relative flex items-start gap-4 py-7 transition sm:gap-6 lg:px-6 lg:py-9 lg:hover:bg-white ${focusRing}`}>
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand transition duration-300 group-hover:scale-y-100 max-lg:hidden" />
                  <span className={`${iconTile} size-12 shrink-0 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:size-14`}><Icon size={22} strokeWidth={1.6} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl font-medium tracking-tight transition lg:text-[34px] lg:leading-none lg:group-hover:translate-x-1">{label}</span>
                    <span className="mt-3 block max-w-lg text-sm leading-relaxed text-muted lg:text-[15px]">{text}</span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="rounded-full border border-line bg-white px-3 py-1 text-[12px] font-medium text-ink/75 transition group-hover:border-brand/30">{t}</span>
                      ))}
                    </span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-12 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:size-12">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* industries */}
        <div className={`${wrap} pb-16 sm:pb-24 lg:pb-28`}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_30px_70px_-48px_rgba(11,21,48,0.35)] sm:p-10 lg:flex lg:items-center lg:gap-14 lg:p-12">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
            <div className="shrink-0 lg:w-64">
              <h3 className="font-display text-2xl font-medium tracking-tight lg:text-3xl">Industries we build for</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Every solution starts from how your sector works.</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              {industries.map(({ icon: Icon, label, to }) => (
                <li key={to}>
                  <Link to={to} className={`group inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-2 pr-5 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}>
                    <span className="grid size-7 place-items-center rounded-full border border-brand/20 text-brand transition group-hover:border-white/40 group-hover:text-white"><Icon size={14} /></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-2xl`}>How we work.</h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-10 lg:mt-14 lg:grid-cols-5 lg:gap-x-0">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative border-t border-ink/15 py-7 lg:pr-8">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl border border-ink/15 bg-white text-ink"><Icon size={20} strokeWidth={1.6} /></span>
                  <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== WHY RARE IT ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>Why businesses choose Rare IT.</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:gap-6">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group flex items-start gap-5 rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_34px_60px_-36px_rgba(11,21,48,0.4)] sm:rounded-3xl sm:p-8">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/25 text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white"><Check size={16} strokeWidth={2.8} /></span>
                <div>
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight lg:text-2xl">
                    <Icon size={18} strokeWidth={1.6} className="text-brand" />{title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className={`${wrap} pb-20 sm:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-white px-6 py-14 text-center shadow-[0_40px_90px_-56px_rgba(11,21,48,0.4)] sm:px-16 sm:py-20">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]`} />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-[clamp(28px,4vw,52px)] font-medium leading-[1.08] tracking-[-0.03em]">
            Let’s build something great together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us about your business. We will suggest where to start.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let’s Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
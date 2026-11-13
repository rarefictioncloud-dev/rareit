import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Check,
  Workflow,
  Palette,
  Code2,
  Smartphone,
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
  Bell,
  Settings,
  Home as HomeIcon,
  BarChart3,
  Clock,
} from "lucide-react";

/* ---------- DATA ---------- */
const heroPoints = ["Process Automation", "Web Designing", "Custom Software", "Mobile Apps"];

const pillars = [
  { icon: Sparkles, title: "Built to order", text: "Every solution is designed around your business." },
  { icon: Users, title: "Senior-led teams", text: "Experienced people on every project." },
  { icon: Eye, title: "Transparent delivery", text: "Clear updates, no surprises." },
  { icon: LifeBuoy, title: "Long-term support", text: "We stay with you after launch." },
];

const services = [
  {
    id: "automation",
    to: "/services/process-automation",
    icon: Workflow,
    title: "Process Automation",
    text: "Automate repetitive workflows, approvals and reporting across your tools, so your team can focus on work that matters.",
    points: ["Workflow automation", "Tool integrations", "Smart reporting"],
  },
  {
    id: "web",
    to: "/services/web-designing",
    icon: Palette,
    title: "Web Designing",
    text: "Fast, responsive, brand-led websites and portals that build trust at first glance and turn visitors into customers.",
    points: ["UI/UX design", "Responsive builds", "SEO-ready"],
  },
  {
    id: "custom",
    to: "/services/custom-software",
    icon: Code2,
    title: "Custom Software",
    text: "Web platforms and internal business software engineered around the way you work, built to grow with you.",
    points: ["Web applications", "API integration", "System modernisation"],
  },
  {
    id: "mobile",
    to: "/services/mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Polished iOS and Android apps, designed with real users in mind and built to last.",
    points: ["iOS & Android", "Product design", "Launch & updates"],
  },
];

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
  { icon: ShoppingCart, to: "/industries/retail", label: "Retail & E-commerce", text: "Seamless storefronts, inventory flows and customer journeys." },
  { icon: Landmark, to: "/industries/finance", label: "Finance", text: "Trusted, scalable tools for approvals, records and compliance." },
  { icon: GraduationCap, to: "/industries/education", label: "Education", text: "Learning platforms and admin tools without the paperwork." },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn your goals, users and constraints before writing a line of code." },
  { icon: PenTool, title: "Design", text: "Clear plans, prototypes and architecture you can review and approve." },
  { icon: Rocket, title: "Deliver", text: "Agile builds with regular, visible progress and honest communication." },
  { icon: LifeBuoy, title: "Support", text: "Monitoring, updates and long-term care once you are live." },
];

/* ---------- SMALL PIECES ---------- */
const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const PrimaryBtn = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
  >
    {children}
    <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
      <ArrowRight size={16} />
    </span>
  </Link>
);

/* Wide software dashboard mockup (pure Tailwind, no images) */
function DashboardMock() {
  const bars = [38, 62, 48, 80, 58, 92, 74, 66, 84, 70, 96, 78];
  const stats = [
    ["Workflows", "12"],
    ["Tasks run", "1,284"],
    ["Hours saved", "38"],
    ["Error rate", "0.2%"],
  ];
  const rows = [
    { name: "Invoice approval", state: "Running", done: false },
    { name: "Customer onboarding", state: "Complete", done: true },
    { name: "Weekly sales report", state: "Complete", done: true },
  ];
  const activity = [
    { text: "Invoice routed for approval", time: "2m ago" },
    { text: "New customer onboarded", time: "14m ago" },
    { text: "Sales report emailed", time: "1h ago" },
    { text: "Orders synced to inventory", time: "3h ago" },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_40px_90px_rgba(13,13,15,0.16)]">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-ink/10 bg-neutral-100 px-4 py-3">
          <span className="size-2.5 rounded-full bg-ink/20" />
          <span className="size-2.5 rounded-full bg-ink/20" />
          <span className="size-2.5 rounded-full bg-brand" />
          <span className="ml-4 rounded-md bg-white px-3 py-1 text-[10px] font-medium text-muted">app.rareit.com / dashboard</span>
        </div>

        <div className="grid grid-cols-[56px_1fr]">
          {/* sidebar */}
          <div className="flex flex-col items-center gap-5 border-r border-ink/10 bg-ink py-6 text-white/60">
            <span className="grid size-9 place-items-center rounded-lg bg-brand text-white"><HomeIcon size={16} /></span>
            <Workflow size={17} />
            <BarChart3 size={17} />
            <Bell size={17} />
            <Settings size={17} className="mt-auto" />
          </div>

          {/* content */}
          <div className="p-5 pb-10 text-left sm:p-7 sm:pb-12">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Overview</p>
                <h4 className="text-lg font-extrabold tracking-tight">Automation dashboard</h4>
              </div>
              <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold text-white">Live</span>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(([k, v]) => (
                <div key={k} className="rounded-xl border border-ink/10 bg-neutral-50 p-4">
                  <span className="block text-[11px] text-muted">{k}</span>
                  <strong className="text-2xl font-extrabold tracking-tighter">{v}</strong>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4">
                <div className="rounded-xl border border-ink/10 p-4">
                  <div className="mb-4 flex items-center justify-between text-xs font-semibold">
                    Tasks automated <span className="text-brand">Last 12 days</span>
                  </div>
                  <div className="flex h-32 items-end gap-2">
                    {bars.map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-t-md ${i === 10 ? "bg-brand" : "bg-ink/15"}`}
                      />
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {rows.map((r) => (
                    <li key={r.name} className="flex items-center justify-between rounded-lg border border-ink/10 px-4 py-2.5 text-xs font-medium">
                      {r.name}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          r.done ? "bg-ink text-white" : "border border-brand text-brand"
                        }`}
                      >
                        {r.done && <Check size={10} strokeWidth={3} />}
                        {r.state}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* activity panel */}
              <div className="hidden rounded-xl border border-ink/10 p-4 lg:block">
                <div className="mb-4 text-xs font-semibold">Recent activity</div>
                <ul className="space-y-4">
                  {activity.map((a) => (
                    <li key={a.text} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <div>
                        <span className="block text-xs font-medium leading-snug">{a.text}</span>
                        <span className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-muted">
                          <Clock size={10} /> {a.time}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips sit on the frame edges, never over content */}
      <div className="absolute -top-5 right-10 hidden items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-left shadow-[0_20px_40px_rgba(13,13,15,0.12)] sm:flex">
        <span className="grid size-9 place-items-center rounded-full bg-brand text-white"><Check size={16} strokeWidth={3} /></span>
        <div>
          <span className="block text-[10px] text-muted">Approval sent</span>
          <strong className="text-xs">No manual steps</strong>
        </div>
      </div>
      <div className="absolute -bottom-5 left-24 hidden items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-left text-white shadow-[0_20px_40px_rgba(13,13,15,0.25)] sm:flex">
        <span className="grid size-9 place-items-center rounded-full bg-brand"><Clock size={16} /></span>
        <div>
          <span className="block text-[10px] text-white/60">Time saved</span>
          <strong className="text-xs">38 hours this week</strong>
        </div>
      </div>
    </div>
  );
}

const fieldCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand";

/* ---------- PAGE ---------- */
export default function Home() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to Firebase later
    setSent(true);
  };

  return (
    <div className="overflow-x-hidden bg-neutral-50 font-sans text-ink">
      {/* ===== HERO (centered) ===== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.1)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_70%)]" />

        <div className={`${wrap} relative pb-24 pt-16 text-center lg:pt-24`}>
          <h1 className="text-[clamp(52px,8vw,108px)] font-extrabold leading-[0.95] tracking-tighter">
            Build. Innovate.
            <br />
            <span className="text-brand">Grow.</span>
          </h1>
          <p className="mx-auto mb-10 mt-8 max-w-[560px] text-lg leading-relaxed text-muted">
            A next-gen IT partner helping businesses transform ideas into
            powerful digital solutions.
          </p>

          
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] font-semibold text-ink/70">
            {heroPoints.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <span className="grid size-4 place-items-center rounded-full bg-brand text-white">
                  <Check size={10} strokeWidth={3.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-16 max-w-[1040px]">
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* ===== PILLARS STRIP ===== */}
      <section className="border-y border-ink/10 bg-white">
        <ul className={`${wrap} grid sm:grid-cols-2 lg:grid-cols-4`}>
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex items-start gap-4 py-8 sm:px-6 ${i > 0 ? "lg:border-l lg:border-ink/10" : "lg:pl-0"} ${
                i % 2 === 1 ? "sm:border-l sm:border-ink/10" : ""
              }`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-white">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[15px] font-bold">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SERVICES ===== */}
      <section className={`${wrap} py-24`}>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(36px,4.6vw,58px)] font-extrabold leading-[1] tracking-tighter">
              Built for your business.
              <br />
              <span className="text-brand">Not retrofitted to it.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Every Rare IT solution is designed from scratch around how your
            teams work, with software, websites and apps that fit from day one.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {services.map(({ id, to, icon: Icon, title, text, points }, i) => (
            <li key={id}>
              <Link
                to={to}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_50px_rgba(13,13,15,0.12)]"
              >
                <span className="absolute right-7 top-6 text-5xl font-extrabold tracking-tighter text-ink/[0.06]">0{i + 1}</span>
                <span className="grid size-14 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li key={p} className="rounded-full border border-ink/10 px-3 py-1 text-[11px] font-semibold text-ink/70">
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Learn more <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

    
      </section>

      {/* ===== WHAT MAKES IT SMARTER (black band) ===== */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]" />
        <div className={`${wrap} relative grid gap-14 lg:grid-cols-[0.9fr_1.4fr]`}>
          <div>
            <h2 className="text-[clamp(34px,4.4vw,54px)] font-extrabold leading-[1.02] tracking-tighter">
              What makes Rare IT
              <br />
              solutions <span className="text-brand">smarter?</span>
            </h2>
            <p className="mb-8 mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              Automation, clean design and solid engineering work together, so
              your business runs faster with less manual effort.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-semibold">
              See it in action <ArrowRight size={14} />
            </Link>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {smarts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-ink p-8 transition hover:bg-white/[0.04]">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="border-b border-ink/10 bg-white py-24">
        <div className={wrap}>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(34px,4.4vw,54px)] font-extrabold leading-[1.02] tracking-tighter">
                Built for your industry. <span className="text-brand">Not retrofitted to it.</span>
              </h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-semibold">
              View all industries <ArrowRight size={14} />
            </Link>
          </div>

          <ul className="grid overflow-hidden rounded-3xl border border-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ icon: Icon, to, label, text }) => (
              <li key={label} className="border-b border-ink/10 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
                <Link
                  to={to}
                  className="group flex h-full min-h-72 flex-col justify-between p-7 transition-colors duration-300 hover:bg-ink"
                >
                  <Icon size={34} strokeWidth={1.3} className="text-brand" />
                  <div>
                    <h3 className="text-lg font-bold leading-tight transition group-hover:text-white">{label}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted transition group-hover:text-white/70">{text}</p>
                    <ArrowRight size={18} className="mt-5 transition group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className={`${wrap} py-24`}>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[clamp(34px,4.4vw,54px)] font-extrabold leading-[1.02] tracking-tighter">
            A disciplined process, <span className="text-brand">built for trust.</span>
          </h2>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative rounded-3xl border border-ink/10 bg-white p-7">
              <span className="text-6xl font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_#0d0d0f]">
                0{i + 1}
              </span>
              <span className="mt-8 grid size-12 place-items-center rounded-2xl bg-brand text-white">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== ABOUT ===== */}
      <section className={`${wrap} grid gap-10 pb-24 lg:grid-cols-2 lg:gap-20`}>
        <div>
          <h2 className="text-[clamp(36px,4.6vw,58px)] font-extrabold leading-[1] tracking-tighter">
            Technology
            <br />
            with <span className="text-brand">Purpose.</span>
          </h2>
        </div>

        <div className="lg:pt-2">
          <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-muted">
            Rare IT is a focused team that believes technology
            should create meaningful change. We hold ourselves to the standards
            of long-established firms, with the speed and attention of a team
            that treats every client as a partner.
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
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section className={`${wrap} pb-24`}>
        <div className="grid overflow-hidden rounded-[36px] bg-ink text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-10 sm:p-14">
            <span className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand" />
            <div className="relative">
              <h3 className="text-[clamp(30px,3.6vw,46px)] font-extrabold leading-[1.05] tracking-tight">
                Let’s Build Something
                <br />
                Great Together.
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Partner with Rare IT for innovative, scalable and future-ready
                solutions. Tell us about your project and we’ll get back to you
                within 24 business hours.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 text-ink sm:p-12">
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
          </div>
        </div>
      </section>
    </div>
  );
}
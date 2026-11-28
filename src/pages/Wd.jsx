// src/pages/wd.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Rocket,
  RefreshCw,
  FilePenLine,
  Smartphone,
  Gauge,
  Search,
  ShieldCheck,
  Plus,
} from "lucide-react";

/* ---------- STYLE HELPERS (same white theme as Home, About, Careers, Contact and Process Automation) ---------- */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const sectionY = "py-14 sm:py-20 lg:py-24 2xl:py-28";
const h2Cls =
  "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)] 2xl:text-[clamp(48px,3.4vw,68px)]";
const leadCls = "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-3xl 2xl:text-xl";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-full border border-brand/25 bg-white text-brand transition";
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] 2xl:text-base ${focusRing}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5 2xl:size-11">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

/* ---------- DATA ---------- */
const useCases = [
  {
    icon: Globe,
    title: "Business websites",
    text: "Clear, professional websites that explain what you do, build trust and make it easy for customers to contact you.",
  },
  {
    icon: ShoppingCart,
    title: "Online stores",
    text: "Product catalogues, carts, secure payments and order management for selling online.",
  },
  {
    icon: LayoutDashboard,
    title: "Web apps and portals",
    text: "Customer portals, booking systems, admin panels and internal tools that run in the browser.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    text: "Focused, fast pages for campaigns, launches and lead generation, built to turn visitors into enquiries.",
  },
  {
    icon: RefreshCw,
    title: "Redesign and upgrades",
    text: "Give an old, slow or outdated website a modern look, better structure and better performance.",
  },
  {
    icon: FilePenLine,
    title: "Content you can edit",
    text: "Simple admin areas so your team can update pages, products and posts without calling a developer.",
  },
];

const deliverables = [
  "Page structure and user journey planning",
  "Custom UI design for desktop, tablet and mobile",
  "Fully responsive development, tested on real devices",
  "On-page SEO setup, fast loading and clean code",
  "Contact forms and integrations with your tools",
  "Secure hosting setup, domain and SSL guidance",
  "Handover, training and ongoing maintenance",
];

const benefits = [
  { icon: Smartphone, title: "Works on every screen", text: "Mobile first layouts that look right on phones, tablets and desktops." },
  { icon: Gauge, title: "Fast by design", text: "Lean code and optimised assets so pages load quickly and keep visitors." },
  { icon: Search, title: "Ready to be found", text: "Clean structure, proper headings and metadata that help search engines." },
  { icon: ShieldCheck, title: "Secure and stable", text: "Safe forms, protected admin areas and code that is easy to maintain." },
];

const steps = [
  { title: "Discover", text: "We learn about your business, customers and goals, and agree what the website needs to achieve." },
  { title: "Design", text: "We plan the structure and create the visual design for you to review before any code is written." },
  { title: "Build", text: "We develop the site in stages, so you can see and test real progress along the way." },
  { title: "Test and launch", text: "We check speed, devices and forms, then take the site live smoothly." },
  { title: "Support", text: "We handle updates, fixes and improvements so the site keeps working for you." },
];

const tech = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Firebase",
  "REST APIs",
  "Payment gateways",
  "Google Analytics",
  "SEO tools",
  "Figma",
  "WordPress (when it fits)",
];

const faqs = [
  {
    q: "Do you design the website or only develop it?",
    a: "Both. We design the look and structure, then build it. If you already have a design, we can develop it as it is.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. Every site we build is responsive and tested on common phone, tablet and desktop sizes.",
  },
  {
    q: "Can I update the content myself?",
    a: "Yes. We can add a simple admin area so you can edit text, images, products or posts without coding.",
  },
  {
    q: "Do you help with domain and hosting?",
    a: "Yes. We guide you through choosing and setting up a domain, hosting and SSL, and can manage it for you.",
  },
  {
    q: "Will the site appear on Google?",
    a: "We build with SEO best practices, such as clean structure, fast loading and proper metadata. Rankings also depend on content and time, so we guide you on that too.",
  },
  {
    q: "How long does a website take?",
    a: "A focused business website usually takes a few weeks. Stores and web apps take longer and are planned in phases after discovery.",
  },
];

/* ---------- PAGE ---------- */
export default function WD() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-3 sm:pt-5" aria-label="Web Designing">
        <div className={`${wrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] 2xl:rounded-[44px]`}>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]`} />

          <div className="grid items-center gap-10 px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-14 lg:pb-16 lg:pt-20 2xl:gap-24 2xl:px-20 2xl:pb-24 2xl:pt-28">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand 2xl:text-base">Web Designing</p>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(48px,5vw,84px)] lg:leading-[0.98] 2xl:text-[clamp(72px,4.8vw,104px)]">
                Websites that look sharp and work hard<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 2xl:max-w-2xl 2xl:text-xl">
                We design and build fast, responsive websites and web apps that present your business well and help you
                win more customers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
                <PrimaryBtn to="/contact">Start your website</PrimaryBtn>
              </div>
            </div>

            {/* Browser mockup */}
            <div
              className="min-w-0 overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-50px_rgba(11,21,48,0.45)]"
              role="img"
              aria-label="Illustration of a website layout in a browser window"
            >
              <div className="flex items-center gap-2 border-b border-line bg-[#F4F5F8] px-4 py-3 sm:px-5 2xl:py-4">
                <span className="size-3 rounded-full bg-ink" />
                <span className="size-3 rounded-full bg-brand" />
                <span className="size-3 rounded-full bg-line" />
                <span className="ml-3 h-6 flex-1 rounded-full bg-white 2xl:h-7" />
              </div>
              <div className="space-y-4 p-4 sm:p-6 2xl:space-y-5 2xl:p-8">
                <div className="flex items-center justify-between">
                  <span className="h-4 w-20 rounded-full bg-ink 2xl:h-5 2xl:w-28" />
                  <span className="flex gap-2">
                    <span className="h-3 w-8 rounded-full bg-line sm:w-10 2xl:w-14" />
                    <span className="h-3 w-8 rounded-full bg-line sm:w-10 2xl:w-14" />
                    <span className="h-3 w-8 rounded-full bg-line sm:w-10 2xl:w-14" />
                  </span>
                </div>
                <div className="rounded-2xl bg-ink p-5 sm:p-6 2xl:p-9">
                  <span className="block h-5 w-3/4 rounded-full bg-white 2xl:h-6" />
                  <span className="mt-3 block h-5 w-1/2 rounded-full bg-brand 2xl:h-6" />
                  <span className="mt-5 block h-3 w-2/3 rounded-full bg-white/30" />
                  <span className="mt-6 inline-block h-9 w-28 rounded-full bg-brand 2xl:h-11 2xl:w-36" />
                </div>
                <div className="grid grid-cols-3 gap-3 2xl:gap-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-2xl border border-line p-3 2xl:p-4">
                      <span className="block size-8 rounded-xl bg-brand 2xl:size-10" />
                      <span className="mt-3 block h-3 w-full rounded-full bg-ink" />
                      <span className="mt-2 block h-2 w-2/3 rounded-full bg-line" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32">
          <h2 className={h2Cls}>
            Your website is your first impression<span className="text-brand">.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg 2xl:text-xl">
            <p>
              Customers check your website before they call, visit or buy. It needs to load fast, look professional
              and make the next step obvious.
            </p>
            <p>
              We handle the whole job: planning, design, development, launch and support. You get a site that fits your
              brand, works on every device and is easy to grow as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            What we can build for you<span className="text-brand">.</span>
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6 2xl:gap-8">
            {useCases.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="group rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-40px_rgba(11,21,48,0.4)] sm:p-8 2xl:rounded-[32px] 2xl:p-10"
              >
                <span className={`${iconTile} size-12 group-hover:bg-brand group-hover:text-white 2xl:size-14`}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight 2xl:text-[28px]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted 2xl:text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== WHAT WE DELIVER (dark panel) ===== */}
      <section className={`${wrap} pb-14 sm:pb-20 lg:pb-24 2xl:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-[24px] bg-ink px-5 py-12 text-white sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-14 lg:py-20 2xl:rounded-[44px] 2xl:px-20 2xl:py-28">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rotate-12 rounded-[48px] bg-white/[0.05]" />
          <div aria-hidden="true" className="absolute -bottom-32 left-10 -z-10 h-[360px] w-[520px] -rotate-6 rounded-[48px] bg-white/[0.04]" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 2xl:gap-28">
            <div className="min-w-0">
              <h2 className={h2Cls}>
                What you get with Rare IT<span className="text-brand">.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg 2xl:max-w-xl 2xl:text-xl">
                A finished, live website with everything around it: design, code, setup and support.
              </p>
            </div>
            <ul className="min-w-0 space-y-3 2xl:space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-4 rounded-2xl border border-white/15 p-3.5 sm:p-4 2xl:p-5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand 2xl:size-8">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold leading-snug sm:text-base 2xl:text-lg">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Built the right way<span className="text-brand">.</span>
          </h2>
          {/* gap-px over a line coloured background gives clean dividers at every column count */}
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 2xl:rounded-[32px]">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group bg-white p-6 transition hover:bg-ink sm:p-8 2xl:p-10">
                <Icon className="text-brand" size={28} strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight group-hover:text-white 2xl:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-white/70 2xl:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            How we work<span className="text-brand">.</span>
          </h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-5 lg:gap-x-0">
            {steps.map((s, i) => (
              <li key={s.title} className="relative border-t border-ink/15 py-7 lg:pr-8 2xl:pr-12">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-6xl 2xl:text-7xl">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight 2xl:text-[30px]">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted 2xl:max-w-sm 2xl:text-base">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-2 lg:gap-20 2xl:gap-32`}>
          <div>
            <h2 className={h2Cls}>
              Technology we use<span className="text-brand">.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-xl 2xl:text-xl">
              Modern, proven tools chosen for speed, security and easy maintenance, not for trends.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5 sm:gap-3">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition hover:border-brand/50 hover:text-brand sm:px-5 sm:py-2.5 2xl:text-base"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className={h2Cls}>
              Common questions<span className="text-brand">.</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-white px-5 transition open:border-brand/40 open:shadow-[0_24px_50px_-36px_rgba(11,21,48,0.35)] sm:px-6 lg:rounded-3xl lg:px-9 lg:hover:border-ink/25"
              >
                <summary
                  className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden sm:text-lg lg:min-h-24 lg:text-xl 2xl:min-h-28 2xl:text-2xl [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {f.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white lg:size-11">
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-muted lg:pb-9 lg:text-base lg:leading-[1.7] 2xl:text-lg">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className={`${wrap} pb-16 sm:pb-24 2xl:pb-32`}>
        <div className="relative isolate overflow-hidden rounded-[24px] border border-line bg-white px-6 py-12 text-center shadow-[0_40px_90px_-56px_rgba(11,21,48,0.4)] sm:rounded-[32px] sm:px-16 sm:py-20 2xl:rounded-[44px] 2xl:py-28">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]`} />
          <h2 className="mx-auto max-w-3xl text-balance font-display text-[clamp(28px,4vw,52px)] font-medium leading-[1.08] tracking-[-0.03em] 2xl:max-w-4xl 2xl:text-[clamp(48px,3.4vw,68px)]">
            Ready to launch your website<span className="text-brand">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
            Tell us about your business and goals. We will suggest the right plan and a clear way to start.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
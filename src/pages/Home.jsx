import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  Palette,
  Plug,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Workflow,
    number: "01",
    title: "Process automation",
    text: "Connect everyday tools and reduce repetitive work for your team.",
    tags: ["Workflows", "Integrations", "Reporting"],
    to: "/services/process-automation",
  },
  {
    icon: Code2,
    number: "02",
    title: "Custom software",
    text: "Business platforms, ERP and CRM tools built around your needs.",
    tags: ["Web apps", "ERP & CRM", "Modernisation"],
    to: "/services/custom-software",
  },
  {
    icon: Palette,
    number: "03",
    title: "Web design",
    text: "Responsive websites that make your business easier to understand and trust.",
    tags: ["UI/UX", "Websites", "Portals"],
    to: "/services/web-designing",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Mobile apps",
    text: "Useful, intuitive mobile experiences for customers and teams.",
    tags: ["iOS", "Android", "Product design"],
    to: "/services/mobile-apps",
  },
  {
    icon: Database,
    number: "05",
    title: "SAP solutions",
    text: "Connect, extend and support SAP systems to keep information moving.",
    tags: ["Integration", "Dashboards", "Support"],
    to: "/services/sap",
  },
];

const industries = [
  { icon: HeartPulse, title: "Healthcare", to: "/industries/healthcare" },
  { icon: Factory, title: "Manufacturing", to: "/industries/manufacturing" },
  { icon: ShoppingCart, title: "Retail & e-commerce", to: "/industries/retail" },
  { icon: Landmark, title: "Finance", to: "/industries/finance" },
  { icon: GraduationCap, title: "Education", to: "/industries/education" },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We learn about your goals, users, systems and the problem you need to solve.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We agree on the scope and make the solution and technical approach clear.",
  },
  {
    number: "03",
    title: "Build",
    text: "You see progress regularly and stay involved as the product takes shape.",
  },
  {
    number: "04",
    title: "Support",
    text: "We can help maintain and improve your solution after launch.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-red-300" : "text-brand"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
        light
          ? "bg-white text-ink hover:bg-red-50"
          : "bg-brand text-white hover:bg-brand-dark"
      }`}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-white font-sans text-ink antialiased">
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#f7f6f3]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-52 -top-56 size-[540px] rounded-full border border-ink/[0.07] sm:size-[700px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-36 size-[540px] rounded-full border border-ink/[0.05] sm:size-[700px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-44 size-[420px] rounded-full bg-red-100/70 blur-3xl"
          />

          <div className="relative mx-auto grid w-[min(1200px,100%-40px)] items-center gap-14 pb-16 pt-14 sm:w-[min(1200px,100%-64px)] sm:pb-20 sm:pt-20 lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-3.5 py-2 text-xs font-semibold text-ink/75 shadow-sm">
                <span className="size-2 rounded-full bg-brand" />
                Digital products · Automation · Hyderabad
              </p>

              <h1 className="mt-7 text-balance text-[clamp(42px,8vw,76px)] font-semibold leading-[0.99] tracking-[-0.065em] text-ink">
                Better software.
                <br />
                <span className="text-brand">Less friction.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                We design and build software around the way your business
                actually works—from connected workflows to custom platforms,
                websites and apps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryLink to="/contact">Talk about your project</PrimaryLink>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Explore what we do <ArrowDown size={15} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-5 text-xs font-medium text-muted sm:mt-12">
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-brand" />
                  Built around your process
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-brand" />
                  Clear, collaborative delivery
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-brand" />
                  Support beyond launch
                </span>
              </div>
            </div>

            {/* Illustrative workflow, not a live product screenshot */}
            <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-200/70 via-orange-100/40 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-white p-4 shadow-[0_35px_90px_-40px_rgba(24,24,27,0.35)] sm:p-6">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Workflow concept
                    </p>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                      From order to invoice
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-800">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Connected
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ["Orders", "Received"],
                    ["Inventory", "Matched"],
                    ["Invoices", "Prepared"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-[#f7f6f3] p-3 sm:p-4"
                    >
                      <p className="text-[10px] font-medium text-muted sm:text-xs">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink sm:text-base">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <ol className="mt-5 space-y-2.5">
                  {[
                    { icon: ShoppingCart, title: "New order", detail: "Order received" },
                    { icon: Database, title: "Check stock", detail: "Inventory matched" },
                    { icon: Plug, title: "Create invoice", detail: "Finance notified" },
                  ].map(({ icon: Icon, title, detail }, index) => (
                    <li
                      key={title}
                      className="flex items-center gap-3 rounded-xl border border-line/80 p-3 sm:gap-4 sm:p-4"
                    >
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                          index === 2
                            ? "bg-brand text-white"
                            : "bg-[#f7f6f3] text-ink"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">
                          {detail}
                        </span>
                      </span>
                      <Check size={17} className="shrink-0 text-emerald-600" />
                    </li>
                  ))}
                </ol>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-ink px-4 py-3.5 text-white">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75">
                    <ShieldCheck size={15} />
                    Designed with control in mind
                  </span>
                  <ArrowUpRight size={16} className="text-red-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid w-[min(1200px,100%-40px)] gap-8 py-12 sm:w-[min(1200px,100%-64px)] sm:py-14 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              A practical technology partner
            </p>
            <p className="text-balance text-xl font-medium leading-relaxed tracking-[-0.025em] text-ink sm:text-2xl">
              Good technology should make work simpler—not add another layer
              your team has to work around.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-[min(1200px,100%-40px)] sm:w-[min(1200px,100%-64px)]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="What we do"
                title="The right tools for the work that matters."
                description="From a focused website to a connected business system, we help you choose and build what fits."
              />
              <Link
                to="/services/process-automation"
                className="group inline-flex items-center gap-2 self-start pb-1 text-sm font-semibold text-ink transition hover:text-brand md:mb-1"
              >
                Explore our services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-3">
              {services.map(
                ({ icon: Icon, number, title, text, tags, to }) => (
                  <Link
                    key={title}
                    to={to}
                    className="group flex min-h-[260px] flex-col rounded-2xl border border-line bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-35px_rgba(13,13,15,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-[#f7f6f3] text-ink transition group-hover:bg-brand group-hover:text-white">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.12em] text-muted/70">
                        {number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f7f6f3] px-3 py-1.5 text-[11px] font-medium text-ink/70"
                        >
                          {tag}
                        </span>
                      ))}
                      <ArrowUpRight
                        size={17}
                        className="ml-auto text-muted transition group-hover:text-brand"
                      />
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* What makes Rare IT different */}
        <section className="bg-ink py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid w-[min(1200px,100%-40px)] gap-12 sm:w-[min(1200px,100%-64px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Built around your business"
                title="Thoughtful engineering, without unnecessary complexity."
                description="We bring design, software and integration work together to solve the problem in front of you—and leave room for what comes next."
                light
              />
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-200"
              >
                Get to know Rare IT
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Workflow,
                  title: "Automation with context",
                  text: "Workflows designed around your rules, people and existing tools.",
                },
                {
                  icon: Palette,
                  title: "Clear user experiences",
                  text: "Interfaces that help people find what they need and take action.",
                },
                {
                  icon: Plug,
                  title: "Connected systems",
                  text: "Thoughtful integrations that help information move between tools.",
                },
                {
                  icon: LifeBuoy,
                  title: "Support after launch",
                  text: "A partner available to help maintain and improve what we build.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-red-200">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-[#f7f6f3] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-[min(1200px,100%-40px)] sm:w-[min(1200px,100%-64px)]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Industries"
                title="Technology shaped by the work you do."
                description="We take time to understand the processes and constraints of the teams we work with."
              />
              <Link
                to="/industries"
                className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-ink transition hover:text-brand"
              >
                View all industries
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-5">
              {industries.map(({ icon: Icon, title, to }) => (
                <Link
                  key={title}
                  to={to}
                  className="group flex min-h-36 items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-brand/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span>
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="text-brand"
                    />
                    <span className="mt-5 block text-sm font-semibold leading-snug">
                      {title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="self-start text-muted transition group-hover:text-brand"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-[min(1200px,100%-40px)] sm:w-[min(1200px,100%-64px)]">
            <SectionHeading
              eyebrow="How we work"
              title="A clear path from first conversation to launch."
              description="Good delivery starts with shared expectations and continues with regular communication."
            />
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-4">
              {steps.map(({ number, title, text }) => (
                <li
                  key={number}
                  className="rounded-2xl border border-line p-5 sm:p-6"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-brand">
                    {number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact call to action */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:pb-28">
          <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[1.75rem] bg-brand px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-36 size-96 rounded-full border-[48px] border-white/[0.08]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Have a project in mind?
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  Let’s make the next step a little clearer.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                  Tell us what you’re trying to improve. We’ll start with a
                  conversation about your goals and what a useful solution
                  could look like.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <PrimaryLink to="/contact" light>
                  Start a conversation
                </PrimaryLink>
                <a
                  href="mailto:info@rareit.in"
                  className="text-sm font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-white"
                >
                  info@rareit.in
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
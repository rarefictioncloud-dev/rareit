 import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Globe,
  Mail,
  Smartphone,
  Workflow,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

/* Red pill with a white circular arrow chip (same pattern as Home.jsx) */
function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:bg-brand-dark"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
        <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}

/* Ids must match the navbar, footer and Home links: /services#id */
const services = [
  {
    id: "automation",
    name: "Process Automation",
    icon: Workflow,
    titleStart: "Remove the repetitive work.",
    titleAccent: "Keep the control.",
    text: "We map how work moves through your business, then automate the slow, manual parts. Approvals, data entry, reminders and reports run on their own, and your team stays in charge of the decisions that matter.",
    deliver: [
      "Workflow mapping and redesign",
      "Approval and notification flows",
      "Document and data handling",
      "Integrations between your existing tools",
      "Dashboards to track every run",
    ],
    steps: [
      ["Map", "We study how the work happens today and find what to automate first."],
      ["Automate", "We build the flows and connect them to your tools."],
      ["Test", "We run real cases with your team and fix the gaps."],
      ["Hand over", "You get documentation, training and ongoing support."],
    ],
    uses: [
      "Invoice and order processing",
      "Employee onboarding",
      "Customer request routing",
      "Scheduled reports",
    ],
  },
  {
    id: "web",
    name: "Web Designing",
    icon: Globe,
    titleStart: "Websites that load fast.",
    titleAccent: "Look sharp. Convert.",
    text: "From a clean company website to a full customer portal, we design and build for every screen size. Clear structure, quick load times and a design that matches your brand.",
    deliver: [
      "Business websites and landing pages",
      "Customer portals and web apps",
      "E-commerce storefronts",
      "Responsive design for phone, tablet and desktop",
      "SEO basics and analytics setup",
    ],
    steps: [
      ["Plan", "We agree on goals, pages and content before any design starts."],
      ["Design", "You review layouts and approve the look and feel."],
      ["Build", "We develop the site and connect forms, payments and tools."],
      ["Launch", "We go live, check performance and stay on for support."],
    ],
    uses: [
      "Company websites",
      "Booking and enquiry portals",
      "Online stores",
      "Admin dashboards",
    ],
  },
  {
    id: "custom",
    name: "Custom Software",
    icon: Braces,
    titleStart: "Software shaped around",
    titleAccent: "how you work.",
    text: "When off-the-shelf tools force you to change your process, we build software that follows it instead. Internal systems, APIs and integrations designed for your team and ready to grow with you.",
    deliver: [
      "Internal tools and business systems",
      "APIs and third-party integrations",
      "Role-based access and audit trails",
      "Reporting and analytics views",
      "Secure cloud deployment",
    ],
    steps: [
      ["Discover", "We document requirements, users and the problems to solve."],
      ["Design", "We plan the architecture and share clickable prototypes."],
      ["Deliver", "We build in short cycles so you see progress every week."],
      ["Support", "We monitor, fix and improve after launch."],
    ],
    uses: [
      "Inventory management",
      "Records and case management",
      "Field team tools",
      "Billing and invoicing systems",
    ],
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    icon: Smartphone,
    titleStart: "Apps your customers",
    titleAccent: "keep on their phones.",
    text: "We build Android and iOS apps that are simple to use and reliable in daily work. Whether it is for your customers or your own staff, we take it from first sketch to the app stores.",
    deliver: [
      "Android and iOS apps",
      "Cross-platform builds from one codebase",
      "Push notifications and in-app messaging",
      "Backend services and APIs",
      "Store publishing support",
    ],
    steps: [
      ["Scope", "We define the must-have features for a first release."],
      ["Design", "We create screens and flows you can tap through."],
      ["Build", "We develop, test on real devices and refine."],
      ["Publish", "We submit to the stores and support updates."],
    ],
    uses: [
      "Customer apps",
      "Field staff apps",
      "Ordering and booking",
      "Loyalty and rewards",
    ],
  },
];

function ServiceSection({ service, index }) {
  const Icon = service.icon;
  const bg = index % 2 === 0 ? "bg-white" : "bg-neutral-50";

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className={`scroll-mt-20 border-b border-line py-20 lg:py-28 ${bg}`}
    >
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
        {/* Left: stays in view while the details scroll */}
        <div className="self-start lg:sticky lg:top-28">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white">
            <Icon size={26} aria-hidden="true" />
          </span>
          <p className="mt-6 text-sm font-bold text-brand">{service.name}</p>
          <h2
            id={`${service.id}-title`}
            className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-5xl"
          >
            {service.titleStart}{" "}
            <span className="text-brand">{service.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {service.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryBtn to="/contact">Discuss this service</PrimaryBtn>
            <Link
              to="/contact"
              className="border-b-2 border-brand pb-0.5 text-sm font-bold text-ink transition hover:text-brand"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Right: details */}
        <div className="space-y-6">
          {/* What we deliver */}
          <div className="rounded-3xl border border-ink/10 bg-white p-7 sm:p-9">
            <h3 className="text-xl font-extrabold tracking-tight text-ink">
              What we deliver
            </h3>
            <ul className="mt-6 space-y-4">
              {service.deliver.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical process (a real sequence, so numbered) */}
          <div className="rounded-3xl border border-ink/10 bg-white p-7 sm:p-9">
            <h3 className="text-xl font-extrabold tracking-tight text-ink">
              How a typical project runs
            </h3>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2">
              {service.steps.map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="select-none text-5xl font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-brand)]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Where it fits */}
          <div className="rounded-3xl bg-ink p-7 text-white sm:p-9">
            <h3 className="text-xl font-extrabold tracking-tight">
              Where it fits
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {service.uses.map((u) => (
                <li
                  key={u}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                >
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-neutral-50 font-sans text-ink">
      {/* Hero */}
      <section className="border-b border-line bg-neutral-50 py-20 lg:py-28">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl">
              Services built around{" "}
              <span className="text-brand">your business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Four focused services, one team. We design, build and support the
              technology that helps your business run faster and grow with
              confidence.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryBtn to="/contact">Talk to Our Experts</PrimaryBtn>
              <a
                href="mailto:info@rareit.in"
                className="inline-flex items-center gap-2 border-b-2 border-brand pb-0.5 text-sm font-bold text-ink transition hover:text-brand"
              >
                <Mail size={16} aria-hidden="true" />
                info@rareit.in
              </a>
            </div>
          </div>

          {/* Jump index */}
          <nav
            aria-label="Jump to a service"
            className="rounded-[36px] border border-ink/10 bg-white p-4"
          >
            <p className="px-4 pb-2 pt-3 text-sm font-bold text-muted">
              Jump to a service
            </p>
            <ul>
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-center gap-4 rounded-3xl px-4 py-4 transition hover:bg-ink hover:text-white focus-visible:bg-ink focus-visible:text-white focus-visible:outline-none"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-neutral-50 text-brand transition group-hover:bg-white group-focus-visible:bg-white">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="flex-1 font-extrabold tracking-tight">
                        {s.name}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-muted transition group-hover:text-white group-focus-visible:text-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      {/* One section per service */}
      {services.map((s, i) => (
        <ServiceSection key={s.id} service={s} index={i} />
      ))}

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className={`${wrap} relative text-center`}>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Not sure which service you need?{" "}
            <span className="text-brand">Let's figure it out.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Describe the problem you want to solve. We will suggest the right
            approach and a clear plan to get started.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <PrimaryBtn to="/contact">Let's Connect</PrimaryBtn>
            <a
              href="mailto:info@rareit.in"
              className="border-b-2 border-brand pb-0.5 text-sm font-bold text-white transition hover:text-brand"
            >
              Email info@rareit.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
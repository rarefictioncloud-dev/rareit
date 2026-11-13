import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Eye,
  Users,
  LifeBuoy,
  Workflow,
  Palette,
  Code2,
  Smartphone,
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
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const founderImg = "https://pub-c068270ff2f94b2691bb54438e646383.r2.dev/DSCF6122.JPG";

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
  {
    icon: Sparkles,
    title: "Built around you",
    text: "We start with how your business works, then build software that fits it.",
  },
  {
    icon: Eye,
    title: "Clear communication",
    text: "Plain language, regular updates and no surprises along the way.",
  },
  {
    icon: Users,
    title: "Simple over complicated",
    text: "The best tool is the one your team actually enjoys using every day.",
  },
  {
    icon: LifeBuoy,
    title: "We stay after launch",
    text: "Fixes, changes and new ideas are part of the relationship, not an extra.",
  },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn how your team works and what slows it down." },
  { icon: PenTool, title: "Design", text: "We plan screens and flows and agree on them with you." },
  { icon: Code2, title: "Build", text: "We develop in small stages so you see progress early." },
  { icon: Rocket, title: "Launch", text: "We test with real tasks, then go live with training." },
  { icon: LifeBuoy, title: "Support", text: "We stay available for fixes, changes and new features." },
];

const reasons = [
  {
    icon: MessageSquare,
    title: "Direct access to the team",
    text: "You talk to the people building your product, not a sales layer.",
  },
  {
    icon: ShieldCheck,
    title: "Security from the start",
    text: "Access control and sensible data practices are planned in, not added later.",
  },
  {
    icon: Clock,
    title: "Quick responses",
    text: "We reply to every enquiry within 24 business hours.",
  },
  {
    icon: Workflow,
    title: "Fits your existing tools",
    text: "We connect with the tools you already use, so you do not start from zero.",
  },
];

const services = [
  {
    icon: Workflow,
    label: "Process Automation",
    text: "Workflows, approvals and reports that run on their own.",
    to: "/services/process-automation",
  },
  {
    icon: Palette,
    label: "Web Designing",
    text: "Fast, modern websites and online stores that build trust.",
    to: "/services/web-designing",
  },
  {
    icon: Code2,
    label: "Custom Software",
    text: "ERP, CRM and internal tools built around your process.",
    to: "/services/custom-software",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    text: "Android and iOS apps your customers and team will use.",
    to: "/services/mobile-apps",
  },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare", to: "/industries/healthcare" },
  { icon: Factory, label: "Manufacturing", to: "/industries/manufacturing" },
  { icon: ShoppingCart, label: "Retail & E-commerce", to: "/industries/retail" },
  { icon: Landmark, label: "Finance", to: "/industries/finance" },
  { icon: GraduationCap, label: "Education", to: "/industries/education" },
];

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:bg-brand-dark"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export default function About() {
  return (
    <div className="bg-neutral-50 font-sans text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.1)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
        <div className={`${wrap} relative py-16 sm:py-24`}>
          <p className="text-sm font-bold text-brand">About Rare IT</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
            We build technology that <span className="text-brand">fits how you work.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Rare IT is an IT services company in Hyderabad. We help businesses
            automate routine work, launch strong websites and apps, and run on
            software made for them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryBtn to="/contact">Talk to us</PrimaryBtn>
            <Link
              to="/services/process-automation"
              className="border-b-2 border-brand pb-0.5 text-sm font-bold transition hover:text-brand"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="pb-16 sm:pb-24">
        <div className={`${wrap} grid gap-6 lg:grid-cols-2`}>
          {missionVision.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`rounded-[36px] p-8 sm:p-12 ${
                i === 0 ? "bg-ink text-white" : "border border-ink/10 bg-white"
              }`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
                <Icon size={26} />
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tighter sm:text-4xl">
                {title}
              </h2>
              <p
                className={`mt-4 text-lg leading-relaxed ${
                  i === 0 ? "text-white/70" : "text-muted"
                }`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's message */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          {/* Photo */}
          <figure className="relative overflow-hidden rounded-[36px] border border-ink/10 bg-neutral-100">
            <img
              src={founderImg}
              alt="Pallepati Vinayvardhan Reddy, Founder of Rare IT, smiling at his desk"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 pt-24 text-white sm:p-8 sm:pt-28">
              <span className="text-sm text-white/70">Rare IT</span>
              <strong className="mt-1 block text-xl font-extrabold tracking-tight sm:text-2xl">
                Pallepati Vinayvardhan Reddy
              </strong>
              <span className="mt-1 block text-sm text-white/70">Founder</span>
            </figcaption>
          </figure>

          {/* Message */}
          <div>
            <p className="text-sm font-bold text-brand">Founder’s message</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tighter sm:text-5xl">
              Technology should make your work{" "}
              <span className="text-brand">easier, not harder.</span>
            </h2>

            <div className="mt-8 space-y-5 border-l-4 border-brand pl-6 text-lg leading-relaxed text-muted">
              <p>
                Rare IT exists because many growing businesses are stuck with
                tools that do not fit them. They pay for software they barely
                use, or do by hand what a computer could do in seconds.
              </p>
              <p>
                Our promise is simple. We listen first, build what you actually
                need, explain things in plain language and stay with you after
                launch. Every client relationship is one we work to earn and
                to keep.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-sm">
              <strong className="font-extrabold">Pallepati Vinayvardhan Reddy</strong>
              <span className="h-0.5 w-8 bg-brand" aria-hidden="true" />
              <span className="text-muted">Founder, Rare IT</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            What we <span className="text-brand">believe in.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do (black band) */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className={`${wrap} relative`}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
                What we <span className="text-brand">do.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
                Four focused services, each built around the way your team works.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {services.map(({ icon: Icon, label, text, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/15 p-6 transition hover:-translate-y-1 hover:border-brand hover:bg-brand"
                  >
                    <span className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white transition group-hover:bg-white group-hover:text-brand">
                        <Icon size={20} />
                      </span>
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                    <span>
                      <span className="block text-lg font-bold tracking-tight">{label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-white/65 group-hover:text-white/85">
                        {text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries strip */}
          <div className="mt-14 border-t border-white/15 pt-10">
            <p className="text-lg font-bold">Industries we build for</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {industries.map(({ icon: Icon, label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-brand hover:bg-brand"
                  >
                    <Icon size={16} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            How we <span className="text-brand">work.</span>
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <span className="text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_#d40f14]">
                  {i + 1}
                </span>
                <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Rare IT */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            Why businesses choose <span className="text-brand">Rare IT.</span>
          </h2>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group border-b border-ink/10 p-7 transition-colors duration-300 last:border-b-0 hover:bg-ink sm:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight transition group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted transition group-hover:text-white/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <div className="rounded-[36px] bg-ink px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Let’s build something <span className="text-brand">great together.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Tell us about your business. We will suggest where to start.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryBtn to="/contact">Let’s Talk</PrimaryBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
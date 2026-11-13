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

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

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

export default function WD() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl">
              Websites that look sharp and <span className="text-brand">work hard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We design and build fast, responsive websites and web apps that present your business well and help you
              win more customers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Start your website</PrimaryBtn>
              <Link to="/services" className="border-b-2 border-brand pb-0.5 text-sm font-bold hover:text-brand">
                All services
              </Link>
            </div>
          </div>

          {/* Browser mockup */}
          <div
            className="overflow-hidden rounded-[36px] border border-ink/10 bg-white"
            role="img"
            aria-label="Illustration of a website layout in a browser window"
          >
            <div className="flex items-center gap-2 border-b border-line px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-ink" />
              <span className="h-3 w-3 rounded-full bg-brand" />
              <span className="h-3 w-3 rounded-full bg-line" />
              <span className="ml-3 h-6 flex-1 rounded-full bg-neutral-100" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <span className="h-4 w-20 rounded-full bg-ink" />
                <span className="flex gap-2">
                  <span className="h-3 w-10 rounded-full bg-line" />
                  <span className="h-3 w-10 rounded-full bg-line" />
                  <span className="h-3 w-10 rounded-full bg-line" />
                </span>
              </div>
              <div className="rounded-3xl bg-ink p-6">
                <span className="block h-5 w-3/4 rounded-full bg-white" />
                <span className="mt-3 block h-5 w-1/2 rounded-full bg-brand" />
                <span className="mt-5 block h-3 w-2/3 rounded-full bg-white/30" />
                <span className="mt-6 inline-block h-9 w-28 rounded-full bg-brand" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-2xl border border-line p-3">
                    <span className="block h-8 w-8 rounded-xl bg-brand" />
                    <span className="mt-3 block h-3 w-full rounded-full bg-ink" />
                    <span className="mt-2 block h-2 w-2/3 rounded-full bg-line" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 lg:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Your website is your <span className="text-brand">first impression.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
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

      {/* Use cases */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            What we can <span className="text-brand">build for you.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:border-ink"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver (black band) */}
      <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className={`${wrap} relative grid gap-12 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
              What you get with <span className="text-brand">Rare IT.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              A finished, live website with everything around it: design, code, setup and support.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((d) => (
              <li key={d} className="flex items-center gap-4 rounded-2xl border border-white/15 p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand">
                  <Check size={15} />
                </span>
                <span className="font-semibold">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Built the <span className="text-brand">right way.</span>
          </h2>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border-b border-line p-7 transition hover:bg-ink hover:text-white sm:border-r lg:border-b-0 [&:hover_p]:text-white/70"
              >
                <Icon className="text-brand" size={28} />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-white py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            How we <span className="text-brand">work.</span>
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span
                  className="block text-6xl font-extrabold text-transparent"
                  style={{ WebkitTextStroke: "1.5px #0d0d0f" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 border-t-2 border-brand pt-3 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
              Technology we <span className="text-brand">use.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Modern, proven tools chosen for speed, security and easy maintenance, not for trends.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-3">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-bold">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-16 lg:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Common <span className="text-brand">questions.</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ink/10 bg-neutral-50 p-5 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {f.q}
                  <Plus className="shrink-0 text-brand transition group-open:rotate-45" size={20} />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[36px] bg-ink p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
                Ready to launch your <span className="text-brand">website?</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Tell us about your business and goals. We will suggest the right plan and a clear way to start.
              </p>
            </div>
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
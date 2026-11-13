import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, CreditCard, Globe, Package, Settings, ShoppingCart, Smartphone, Truck, Zap } from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const mockupTitle = "Store dashboard";

const mockupRows = [
  { icon: ShoppingCart, label: "Online orders", tag: "New" },
  { icon: Package, label: "Inventory", tag: "Synced" },
  { icon: CreditCard, label: "Payments", tag: "Received" },
  { icon: Truck, label: "Delivery", tag: "Tracking" },
];

const challenges = [
  { icon: ShoppingCart, title: "Selling in more than one place", text: "Shop, website and marketplaces need the same stock numbers, or orders get cancelled." },
  { icon: Package, title: "Stock mismatches", text: "Manual counting leads to overselling and dead stock. Live inventory solves both." },
  { icon: CreditCard, title: "Slow checkout and payment issues", text: "A smooth checkout with trusted payment options helps customers finish their purchase." },
  { icon: Smartphone, title: "Customers who shop on mobile", text: "Most shoppers browse on their phones. Your store must be fast and easy there." },
];

const solutions = [
  { icon: Zap, title: "Order and stock automation", text: "New orders update stock, notify your team and message customers automatically.", service: "Process Automation", to: "/services/process-automation" },
  { icon: Globe, title: "Online store", text: "A fast, mobile friendly store with product pages, cart, checkout and easy updates.", service: "Web Designing", to: "/services/web-designing" },
  { icon: Settings, title: "Inventory and billing software", text: "Stock, purchase, billing and reports for your shop or chain of shops.", service: "Custom Software", to: "/services/custom-software" },
  { icon: Smartphone, title: "Shopping app", text: "A branded app for browsing, ordering, tracking and repeat purchases.", service: "Mobile Apps", to: "/services/mobile-apps" },
];

const checklist = [
  "Online and in store stock kept in sync",
  "Simple product and price updates for your team",
  "Payment options your customers trust",
  "Order alerts and delivery updates",
  "Sales and stock reports you can read at a glance",
  "Support after launch for changes and new needs",
];

const steps = [
  { title: "Discover", text: "We learn how your team works today and what slows it down." },
  { title: "Design", text: "We plan the screens and flows and agree on them with you." },
  { title: "Build", text: "We develop in small stages so you can see progress early." },
  { title: "Test and launch", text: "We test with your real tasks, then go live with training." },
  { title: "Support", text: "We stay available for fixes, changes and new features." },
];

const faqs = [
  { q: "Can you build a store I can update myself?", a: "Yes. We set up simple screens so you can add products, change prices and manage orders without a developer." },
  { q: "Can you connect payments and delivery?", a: "In most cases yes. We can connect common payment gateways and delivery tools. Tell us which ones you prefer." },
  { q: "Do I need both a website and an app?", a: "Not always. Many businesses start with a strong website and add an app when customers ask for it. We will advise you honestly." },
];

const otherIndustries = [
  { name: "Healthcare", to: "/industries/healthcare" },
  { name: "Manufacturing", to: "/industries/manufacturing" },
  { name: "Finance", to: "/industries/finance" },
  { name: "Education", to: "/industries/education" },
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

const chipStyles = [
  "bg-ink text-white",
  "border border-ink/15 text-muted",
  "bg-brand text-white",
];

export default function Retail() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <p className="text-sm font-bold text-brand">Retail & E-commerce</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
              Sell more with a store that <span className="text-brand">works everywhere.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Online stores, inventory tools and shopping apps that help retail and e-commerce businesses sell across every channel.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Talk to us</PrimaryBtn>
              <Link
                to="/our-work"
                className="border-b-2 border-brand pb-0.5 text-sm font-bold transition hover:text-brand"
              >
                See our work
              </Link>
            </div>
          </div>

          {/* Mockup */}
          <div
            className="rounded-[36px] border border-ink/10 bg-white p-5 shadow-xl sm:p-6"
            aria-hidden="true"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-ink" />
                <span className="h-3 w-3 rounded-full bg-brand" />
                <span className="h-3 w-3 rounded-full border border-ink/20" />
              </div>
              <span className="text-sm font-bold">{mockupTitle}</span>
            </div>
            <div className="mt-4 space-y-3">
              {mockupRows.map((r, i) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
                      <r.icon size={18} />
                    </span>
                    <span className="text-sm font-bold">{r.label}</span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${chipStyles[i % 3]}`}
                  >
                    {r.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Retail moves fast and <span className="text-brand">so should your systems.</span>
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>Customers expect quick pages, easy checkout and accurate stock. Behind the scenes, teams struggle with orders, returns and counting.</p>
            <p>Rare IT builds storefronts and back office tools that work together, so selling is smooth for customers and simple for your team.</p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Challenges we <span className="text-brand">solve.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <c.icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions from our services */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Solutions we can <span className="text-brand">build for you.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group rounded-3xl border border-ink/10 bg-neutral-50 p-7 transition hover:-translate-y-1 hover:bg-ink hover:text-white"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted group-hover:text-white/70">
                  {s.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 border-b-2 border-brand pb-0.5 text-sm font-bold">
                  {s.service}
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className={`${wrap} relative`}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            What you get with <span className="text-brand">Rare IT.</span>
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
                  <Check size={14} />
                </span>
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            How we <span className="text-brand">work.</span>
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <span className="text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_#d40f14]">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Common <span className="text-brand">questions.</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-ink/10 bg-neutral-50 p-6 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={20}
                    className="shrink-0 text-brand transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Other industries we <span className="text-brand">work with.</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((o) => (
              <Link
                key={o.to}
                to={o.to}
                className="group flex items-center justify-between rounded-3xl border border-ink/10 bg-white p-6 text-lg font-extrabold tracking-tight transition hover:-translate-y-1 hover:bg-ink hover:text-white"
              >
                {o.name}
                <ArrowRight
                  size={18}
                  className="text-brand transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16 sm:pb-24">
        <div className={wrap}>
          <div className="rounded-[36px] bg-ink px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Open your store to <span className="text-brand">more customers.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Tell us what you sell and where. We will suggest the right setup.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// src/pages/ma.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ShoppingBag,
  CalendarCheck,
  Briefcase,
  Truck,
  GraduationCap,
  HeartPulse,
  Layers,
  Zap,
  Bell,
  Cloud,
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
    icon: ShoppingBag,
    title: "Shopping and ordering apps",
    text: "Product browsing, carts, secure payments, order tracking and offers for retail and food businesses.",
  },
  {
    icon: CalendarCheck,
    title: "Booking and appointment apps",
    text: "Let customers book slots, pay and get reminders, while you manage schedules from one dashboard.",
  },
  {
    icon: Briefcase,
    title: "Business and field apps",
    text: "Mobile tools for staff and sales teams: attendance, tasks, forms, approvals and live reports on the go.",
  },
  {
    icon: Truck,
    title: "Delivery and tracking apps",
    text: "Order assignment, live location, status updates and proof of delivery for logistics and service teams.",
  },
  {
    icon: GraduationCap,
    title: "Learning apps",
    text: "Courses, lessons, quizzes and progress tracking for schools, trainers and institutes.",
  },
  {
    icon: HeartPulse,
    title: "Health and service apps",
    text: "Appointments, records access and reminders for clinics and service providers, with privacy in mind.",
  },
];

const deliverables = [
  "App idea review and feature planning",
  "UI and UX design for phones and tablets",
  "Android and iOS development",
  "Backend, database and admin panel",
  "Push notifications, payments and third-party integrations",
  "Testing on real devices and store-ready builds",
  "Help publishing on Google Play and the App Store",
  "Maintenance, updates and support after launch",
];

const benefits = [
  { icon: Layers, title: "One idea, both platforms", text: "Cross-platform development reaches Android and iOS users without building everything twice." },
  { icon: Zap, title: "Smooth and responsive", text: "Fast screens, simple navigation and a feel that users expect from a good app." },
  { icon: Bell, title: "Stay close to customers", text: "Push notifications, offers and reminders bring users back to your business." },
  { icon: Cloud, title: "Connected and secure", text: "Your app talks safely to your backend, with protected logins and data." },
];

const steps = [
  { title: "Discover", text: "We understand your users, goals and must-have features, and decide what goes into the first version." },
  { title: "Design", text: "We create screens and flows for you to review and try before development starts." },
  { title: "Build", text: "We develop the app and backend in short cycles, sharing test builds you can use on your phone." },
  { title: "Test and launch", text: "We test on real devices, fix issues and handle the store submission with you." },
  { title: "Support", text: "We track feedback, fix bugs and release updates as your users and needs grow." },
];

const tech = [
  "React Native",
  "Flutter",
  "Android (Kotlin)",
  "iOS (Swift)",
  "Firebase",
  "Node.js",
  "REST APIs",
  "Push notifications",
  "Payment gateways",
  "Maps and location",
  "Figma",
  "Google Play and App Store",
];

const faqs = [
  {
    q: "Should we build for Android, iOS or both?",
    a: "Most businesses start with both using one cross-platform codebase. If your users are mostly on one platform, we can begin there and add the other later.",
  },
  {
    q: "Can you help if we only have an idea?",
    a: "Yes. We help turn the idea into a feature list, screens and a clear first version, so you can launch without overbuilding.",
  },
  {
    q: "Will the app need a backend and admin panel?",
    a: "Most apps do. We build the backend and an admin panel so you can manage users, content, orders and reports.",
  },
  {
    q: "Do you publish the app on Google Play and the App Store?",
    a: "We guide and assist you through the whole submission process, including store listings and review requirements. The store accounts stay in your name.",
  },
  {
    q: "What happens after launch?",
    a: "We offer support plans for bug fixes, OS updates, performance and new features, so the app stays reliable.",
  },
  {
    q: "How long does an app take?",
    a: "A focused first version usually takes a few months, depending on features. We confirm a timeline after the discovery stage.",
  },
];

export default function MA() {
  return (
    <div className="bg-neutral-50 text-ink">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl">
              Mobile apps your customers <span className="text-brand">keep on their phone.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We design and build Android and iOS apps that are simple to use, connected to your business systems and
              ready for the app stores.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryBtn to="/contact">Build your app</PrimaryBtn>
              <Link to="/services" className="border-b-2 border-brand pb-0.5 text-sm font-bold hover:text-brand">
                All services
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            className="flex justify-center rounded-[36px] border border-ink/10 bg-white p-6 sm:p-8"
            role="img"
            aria-label="Illustration of a mobile app screen with cards and a bottom navigation bar"
          >
            <div className="w-64 rounded-[40px] border-[6px] border-ink bg-neutral-50 p-4">
              <span className="mx-auto block h-1.5 w-16 rounded-full bg-ink" />
              <div className="mt-4 flex items-center justify-between">
                <span className="h-4 w-20 rounded-full bg-ink" />
                <span className="h-8 w-8 rounded-full bg-brand" />
              </div>
              <div className="mt-4 rounded-3xl bg-ink p-4">
                <span className="block h-3 w-2/3 rounded-full bg-white" />
                <span className="mt-2 block h-3 w-1/3 rounded-full bg-brand" />
                <span className="mt-4 inline-block h-7 w-20 rounded-full bg-brand" />
              </div>
              <div className="mt-3 space-y-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3">
                    <span className="h-9 w-9 shrink-0 rounded-xl bg-line" />
                    <span className="flex-1">
                      <span className="block h-2.5 w-3/4 rounded-full bg-ink" />
                      <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-line" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-around rounded-full bg-white p-2">
                <span className="h-3 w-3 rounded-full bg-brand" />
                <span className="h-3 w-3 rounded-full bg-line" />
                <span className="h-3 w-3 rounded-full bg-line" />
                <span className="h-3 w-3 rounded-full bg-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-line bg-white py-16 lg:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Your business, <span className="text-brand">in every pocket.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              People spend much of their day on their phones. A well-built app gives customers a faster way to order,
              book and stay in touch, and gives your team the tools to work from anywhere.
            </p>
            <p>
              We take care of the full journey: planning, design, development, backend, testing and store launch. You
              get an app that feels simple to the user and is easy for you to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Apps we can <span className="text-brand">build for you.</span>
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
              A finished app, the backend behind it and the help to get it live and keep it running.
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
            Built for <span className="text-brand">real users.</span>
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
              Proven mobile tools chosen to give you a smooth app, a sensible budget and easy updates.
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
                Ready to turn your idea into an <span className="text-brand">app?</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Share your idea and your users. We will suggest the features for a strong first version and how to
                launch it.
              </p>
            </div>
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
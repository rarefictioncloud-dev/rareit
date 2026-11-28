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

/* ---------- STYLE HELPERS (same white theme as Home, About, Careers, Contact and the other service pages) ---------- */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const sectionY = "py-14 sm:py-20 lg:py-24 2xl:py-28";
const h2Cls =
  "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)] 2xl:text-[clamp(48px,3.4vw,68px)]";
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

/* ---------- PAGE ---------- */
export default function MA() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-3 sm:pt-5" aria-label="Mobile Apps">
        <div className={`${wrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] 2xl:rounded-[44px]`}>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]`} />

          <div className="grid items-center gap-10 px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-14 lg:pb-16 lg:pt-20 2xl:gap-24 2xl:px-20 2xl:pb-24 2xl:pt-28">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand 2xl:text-base">Mobile Apps</p>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(48px,5vw,84px)] lg:leading-[0.98] 2xl:text-[clamp(72px,4.8vw,104px)]">
                Mobile apps your customers keep on their phone<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 2xl:max-w-2xl 2xl:text-xl">
                We design and build Android and iOS apps that are simple to use, connected to your business systems and
                ready for the app stores.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
                <PrimaryBtn to="/contact">Build your app</PrimaryBtn>
              </div>
            </div>

            {/* Phone mockup */}
            <div
              className="relative flex min-w-0 justify-center overflow-hidden rounded-3xl border border-line bg-[#F4F5F8] p-6 sm:p-10 2xl:p-14"
              role="img"
              aria-label="Illustration of a mobile app screen with cards and a bottom navigation bar"
            >
              <div aria-hidden="true" className="absolute -right-16 -top-16 size-64 rounded-full bg-brand/[0.06] 2xl:size-96" />
              <div className="relative w-60 rounded-[40px] border-[6px] border-ink bg-white p-4 shadow-[0_40px_80px_-40px_rgba(11,21,48,0.5)] sm:w-64 2xl:w-80 2xl:p-5">
                <span className="mx-auto block h-1.5 w-16 rounded-full bg-ink" />
                <div className="mt-4 flex items-center justify-between">
                  <span className="h-4 w-20 rounded-full bg-ink 2xl:h-5 2xl:w-24" />
                  <span className="size-8 rounded-full bg-brand 2xl:size-10" />
                </div>
                <div className="mt-4 rounded-3xl bg-ink p-4 2xl:p-5">
                  <span className="block h-3 w-2/3 rounded-full bg-white" />
                  <span className="mt-2 block h-3 w-1/3 rounded-full bg-brand" />
                  <span className="mt-4 inline-block h-7 w-20 rounded-full bg-brand 2xl:h-9 2xl:w-24" />
                </div>
                <div className="mt-3 space-y-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 2xl:p-4">
                      <span className="size-9 shrink-0 rounded-xl bg-[#F4F5F8] 2xl:size-11" />
                      <span className="flex-1">
                        <span className="block h-2.5 w-3/4 rounded-full bg-ink" />
                        <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-line" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-around rounded-full bg-[#F4F5F8] p-2.5">
                  <span className="size-3 rounded-full bg-brand" />
                  <span className="size-3 rounded-full bg-line" />
                  <span className="size-3 rounded-full bg-line" />
                  <span className="size-3 rounded-full bg-line" />
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
            Your business, in every pocket<span className="text-brand">.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg 2xl:text-xl">
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

      {/* ===== USE CASES ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-3xl`}>
            Apps we can build for you<span className="text-brand">.</span>
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
                A finished app, the backend behind it and the help to get it live and keep it running.
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
            Built for real users<span className="text-brand">.</span>
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
              Proven mobile tools chosen to give you a smooth app, a sensible budget and easy updates.
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
            Ready to turn your idea into an app<span className="text-brand">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
            Share your idea and your users. We will suggest the features for a strong first version and how to launch
            it.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let's Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
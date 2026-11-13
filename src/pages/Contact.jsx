import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Clock,
  Plus,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const EMAIL = "info@rareit.in";
const PHONE = "+91 7997658999";
const PHONE_LINK = "tel:+917997658999";
const ADDRESS = "Rareit, Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const details = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: PHONE_LINK,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
    href: MAP_LINK,
  },
  {
    icon: Clock,
    label: "Reply time",
    value: "Within 24 business hours",
  },
];

const next = [
  { title: "We read your message", text: "Someone from our team reviews what you shared." },
  { title: "We reach out", text: "We reply by email or phone to understand your needs better." },
  { title: "You get a plan", text: "We suggest where to start and what it would involve." },
];

const faqs = [
  {
    q: "Do I need a detailed brief before contacting you?",
    a: "No. A few lines about your business and what slows it down is enough. We will ask the right questions.",
  },
  {
    q: "Can we meet in person?",
    a: "Yes. You are welcome to visit our office in Madhapur, Hyderabad. Please write to us first so we can fix a time.",
  },
  {
    q: "Is the first conversation free?",
    a: "Yes. We are happy to talk through your idea and suggest a starting point before you commit to anything.",
  },
];

const fieldCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to Firebase later
    setSent(true);
  };

  return (
    <div className="bg-neutral-50 font-sans text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(13,13,15,0.1)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
        <div className={`${wrap} relative py-16 sm:py-24`}>
          <p className="text-sm font-bold text-brand">Contact Rare IT</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
            Let’s <span className="text-brand">connect.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Tell us about your project, your team or just an idea. We will reply
            within 24 business hours with clear next steps.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="pb-16 sm:pb-24">
        <div className={`${wrap} grid gap-8 lg:grid-cols-[1.2fr_0.8fr]`}>
          {/* Form */}
          <div className="rounded-[36px] border border-ink/10 bg-white p-8 sm:p-10">
            {sent ? (
              <div className="grid h-full min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                    <Check size={26} strokeWidth={3} />
                  </span>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight">Thank you!</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                    We have received your details and will be in touch within 24 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Fields marked with a star are required.
                </p>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input required name="first" placeholder="First name *" className={fieldCls} />
                  <input required name="last" placeholder="Last name *" className={fieldCls} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Business email address *"
                    className={`${fieldCls} sm:col-span-2`}
                  />
                  <input name="company" placeholder="Company name" className={fieldCls} />
                  <input type="tel" name="phone" placeholder="Phone number" className={fieldCls} />
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className={`${fieldCls} sm:col-span-2`}
                  >
                    <option value="" disabled>
                      I’m interested in *
                    </option>
                    <option>Process Automation</option>
                    <option>Web Designing</option>
                    <option>Custom Software</option>
                    <option>Mobile App Development</option>
                    <option>Something else</option>
                  </select>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your project *"
                    className={`${fieldCls} resize-none sm:col-span-2`}
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:col-span-2 sm:justify-self-start"
                  >
                    Send message
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Details */}
          <aside className="relative overflow-hidden rounded-[36px] bg-ink p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]" />
            <div className="relative">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Reach us <span className="text-brand">directly.</span>
              </h2>
              <ul className="mt-8 space-y-6">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <span className="block text-sm text-white/60">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-0.5 block font-semibold leading-snug transition hover:text-brand"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="mt-0.5 block font-semibold leading-snug">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={wrap}>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Visit our <span className="text-brand">office.</span>
            </h2>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-brand pb-0.5 text-sm font-bold transition hover:text-brand"
            >
              Open in Google Maps
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="mt-10 overflow-hidden rounded-[36px] border border-ink/10">
            <iframe
              title="Rare IT office location on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full grayscale transition hover:grayscale-0 sm:h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            What happens <span className="text-brand">next.</span>
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {next.map(({ title, text }, i) => (
              <li key={title} className="rounded-3xl border border-ink/10 bg-white p-7">
                <span className="text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_#d40f14]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-16 sm:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
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

      {/* Closing panel */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <div className="rounded-[36px] bg-ink px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Looking for a <span className="text-brand">job instead?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              See our open roles and apply to join the Rare IT team.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/careers"
                className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                View careers
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
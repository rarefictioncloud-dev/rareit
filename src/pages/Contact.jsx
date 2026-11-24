import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
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

/* ---------- STYLE HELPERS (same white theme as Home, About and Careers) ---------- */
const wrap = "mx-auto w-[min(1240px,100%-32px)] sm:w-[min(1240px,100%-64px)] lg:w-[min(1400px,100%-96px)]";
const sectionY = "py-16 sm:py-24 lg:py-28";
const h2Cls = "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-full border border-brand/25 bg-white text-brand transition";
const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm lg:py-4 lg:hover:border-ink/25";
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";

/* ---------- DATA ---------- */
const EMAIL = "info@rareit.in";
const PHONE = "+91 7997658999";
const PHONE_LINK = "tel:+917997658999";
const ADDRESS = "Rareit, Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const details = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: PHONE_LINK },
  {
    icon: MapPin,
    label: "Office",
    value: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
    href: MAP_LINK,
  },
  { icon: Clock, label: "Reply time", value: "Within 24 business hours" },
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

/* ---------- PAGE ---------- */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setSending(true);
    setError("");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formEl,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      // TODO: save to Firebase later
      setSent(true);
    } catch (err) {
      setError(`Something went wrong. Please try again or email us at ${EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-2.5 sm:pt-4" aria-label="Contact Rare IT">
        <div className="relative isolate mx-auto w-[min(1240px,100%-20px)] overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:w-[min(1240px,100%-40px)] sm:rounded-[32px] lg:w-[min(1720px,100%-64px)] lg:rounded-[44px]">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]`} />

          <div className="px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:px-16 lg:pb-14 lg:pt-24 xl:px-20">
            <p className="text-sm font-semibold text-brand">Contact Rare IT</p>
            <h1 className="mt-5 max-w-5xl text-balance font-display text-[clamp(40px,10vw,68px)] font-medium leading-[1.02] tracking-[-0.04em] lg:text-[clamp(56px,7vw,110px)] lg:leading-[0.96]">
              Let’s connect<span className="text-brand">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 lg:text-[20px] lg:leading-[1.6]">
              Tell us about your project, your team or just an idea. We will reply within 24 business hours with clear next steps.
            </p>
          </div>

          <ul className="grid border-t border-line sm:grid-cols-3">
            {[details[0], details[1], details[3]].map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className={`${iconTile} size-10 shrink-0 lg:size-11`}><Icon size={18} strokeWidth={1.8} /></span>
                  <span>
                    <span className="block text-[13px] text-muted">{label}</span>
                    <span className="mt-0.5 block text-sm font-semibold leading-snug lg:text-[15px]">{value}</span>
                  </span>
                </>
              );
              const cls = `flex items-center gap-4 px-5 py-5 sm:px-8 lg:px-12 lg:py-7 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`;
              return (
                <li key={label}>
                  {href ? <a href={href} className={`${cls} transition hover:text-brand ${focusRing}`}>{inner}</a> : <div className={cls}>{inner}</div>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ===== FORM + DETAILS ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Form */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 pt-9 shadow-[0_40px_80px_-52px_rgba(11,21,48,0.4)] sm:p-10 sm:pt-12 lg:p-12 lg:pt-14">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
            {sent ? (
              <div role="status" className="grid h-full min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white">
                    <Check size={26} strokeWidth={3} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-medium tracking-tight">Thank you!</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                    We have received your details and will be in touch within 24 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Send us a message</h2>
                <p className="mt-2 text-sm text-muted">Fields marked with a star are required.</p>
                <form onSubmit={onSubmit} className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
                  <label className="sr-only" htmlFor="first">First name</label>
                  <input id="first" required name="first" autoComplete="given-name" placeholder="First name *" className={fieldCls} />
                  <label className="sr-only" htmlFor="last">Last name</label>
                  <input id="last" required name="last" autoComplete="family-name" placeholder="Last name *" className={fieldCls} />
                  <label className="sr-only" htmlFor="email">Business email address</label>
                  <input id="email" required type="email" name="email" autoComplete="email" placeholder="Business email address *" className={`${fieldCls} sm:col-span-2`} />
                  <label className="sr-only" htmlFor="company">Company name</label>
                  <input id="company" name="company" autoComplete="organization" placeholder="Company name" className={fieldCls} />
                  <label className="sr-only" htmlFor="phone">Phone number</label>
                  <input id="phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="Phone number" className={fieldCls} />
                  <label className="sr-only" htmlFor="service">I’m interested in</label>
                  <select id="service" required name="service" defaultValue="" className={`${fieldCls} sm:col-span-2`}>
                    <option value="" disabled>I’m interested in *</option>
                    <option>Process Automation</option>
                    <option>Web Designing</option>
                    <option>Custom Software</option>
                    <option>Mobile App Development</option>
                    <option>Something else</option>
                  </select>
                  <label className="sr-only" htmlFor="message">About your project</label>
                  <textarea id="message" required name="message" rows={5} placeholder="Tell us a little about your project *" className={`${fieldCls} resize-none sm:col-span-2`} />
                  {error && (
                    <p role="alert" className="text-sm text-brand sm:col-span-2">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className={`group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:justify-self-start ${focusRing}`}
                  >
                    {sending ? "Sending..." : "Send message"}
                    <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Details */}
          <aside className="relative isolate overflow-hidden rounded-3xl border border-line bg-white p-6 pt-9 shadow-[0_40px_80px_-52px_rgba(11,21,48,0.3)] sm:p-10 sm:pt-12 lg:self-start lg:p-12 lg:pt-14">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
            <div aria-hidden="true" className={`${dotField} [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]`} />
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Reach us directly.</h2>
            <ul className="mt-8 divide-y divide-line border-t border-line">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-5">
                  <span className={`${iconTile} size-11 shrink-0`}>
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className={`mt-0.5 block break-words font-semibold leading-snug underline-offset-4 transition hover:text-brand hover:underline ${focusRing}`}
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
          </aside>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className={`${h2Cls} max-w-2xl`}>Visit our office.</h2>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className={`group inline-flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}
            >
              Open in Google Maps
              <span className="grid size-8 place-items-center rounded-full border border-brand/25 text-brand transition group-hover:border-white/40 group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-line shadow-[0_40px_80px_-52px_rgba(11,21,48,0.4)] lg:mt-14">
            <iframe
              title="Rare IT office location on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full grayscale transition duration-500 hover:grayscale-0 sm:h-[460px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-2xl`}>What happens next.</h2>
          <ol className="mt-10 grid gap-0 md:grid-cols-3 md:gap-x-10 lg:mt-14 lg:gap-x-0">
            {next.map(({ title, text }, i) => (
              <li key={title} className="relative border-t border-ink/15 py-7 lg:pr-12">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-7xl">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight lg:text-[28px]">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className={h2Cls}>Common questions.</h2>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-white px-5 transition open:border-brand/40 open:shadow-[0_24px_50px_-36px_rgba(11,21,48,0.35)] sm:px-6 lg:rounded-3xl lg:px-9 lg:hover:border-ink/25"
              >
                <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden sm:text-lg lg:min-h-24 lg:text-xl [&::-webkit-details-marker]:hidden ${focusRing}`}>
                  {f.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white lg:size-11">
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted lg:pb-9 lg:text-base lg:leading-[1.7]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING PANEL ===== */}
      <section className={`${wrap} pb-20 sm:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-white px-6 py-14 text-center shadow-[0_40px_90px_-56px_rgba(11,21,48,0.4)] sm:px-16 sm:py-20">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]`} />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-[clamp(28px,4vw,52px)] font-medium leading-[1.08] tracking-[-0.03em]">
            Looking for a job instead?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            See our open roles and apply to join the Rare IT team.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/careers"
              className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] ${focusRing}`}
            >
              View careers
              <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
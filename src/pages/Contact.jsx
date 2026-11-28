import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Clock,
  Plus,
  Rocket,
  RefreshCw,
  LifeBuoy,
  Handshake,
  MessageCircle,
  Briefcase,
} from "lucide-react";

/* ---------- STYLE HELPERS ---------- */
/* Full-width container: small margins on phones, wide on laptops and 24"+ monitors (same width as the other pages' hero cards) */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-full border border-brand/25 bg-white text-brand transition";
const fieldCls =
  "w-full rounded-lg border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm 2xl:py-4 2xl:text-base lg:hover:border-ink/25";
const labelCls = "mb-1.5 block text-sm font-medium text-ink 2xl:text-base";
const tileBase =
  "flex min-h-14 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition 2xl:min-h-16 2xl:text-base";
const h2Cls = "font-display text-3xl font-medium tracking-tight sm:text-4xl 2xl:text-5xl";

/* ---------- DATA ---------- */
const EMAIL = "info@rareit.in";
const PHONE = "+91 7997658999";
const PHONE_LINK = "tel:+917997658999";
const ADDRESS = "Rareit, Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

/* "How can we help?" options. The Careers tile is a link, the rest select the form topic. */
const topics = [
  { id: "New project", icon: Rocket, blurb: "Tell us about a project you want to build or automate." },
  { id: "Project update", icon: RefreshCw, blurb: "Share a change, feedback or an update on a running project." },
  { id: "Support", icon: LifeBuoy, blurb: "Report an issue with something we built for you." },
  { id: "Partnership", icon: Handshake, blurb: "Explore working together as a partner or vendor." },
  { id: "Other", icon: MessageCircle, blurb: "Anything else you would like to ask us." },
];

const details = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: PHONE_LINK },
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

/* ---------- FORM LIMITS (client side, shared with the Home page form) ---------- */
const SENT_KEY = "rareit_contact_sent";
const ATTEMPTS_KEY = "rareit_contact_attempts";
const REPEAT_WINDOW_MS = 2 * 24 * 60 * 60 * 1000; // same email or phone can write again after 2 days
const ATTEMPT_WINDOW_MS = 10 * 60 * 1000; // rate limit window: 10 minutes
const MAX_ATTEMPTS = 3; // max submissions per device inside the window

const readStore = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

const writeStore = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable, skip */
  }
};

const normalizeEmail = (value) => {
  const [local = "", domain = ""] = value.trim().toLowerCase().split("@");
  let name = local.split("+")[0];
  if (domain === "gmail.com" || domain === "googlemail.com") name = name.replace(/\./g, "");
  return `${name}@${domain}`;
};

const normalizePhone = (value) => value.replace(/\D/g, "").slice(-10);

async function fingerprint(value) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    return value;
  }
}

const formatDate = (ms) =>
  new Date(ms).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

/* ---------- PAGE ---------- */
export default function Contact() {
  const [topic, setTopic] = useState(topics[0].id);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const activeTopic = topics.find((t) => t.id === topic);

  /* EmailJS logic below is exactly the same as before */
  const onSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setSending(true);
    setError("");
    try {
      const data = new FormData(formEl);
      const emailKey = `e:${await fingerprint(normalizeEmail(String(data.get("email") || "")))}`;
      const phoneDigits = normalizePhone(String(data.get("phone") || ""));
      const phoneKey = phoneDigits ? `p:${await fingerprint(phoneDigits)}` : null;
      const now = Date.now();

      // Rate limit: max attempts per device in a short window
      const attempts = readStore(ATTEMPTS_KEY).filter((t) => now - t < ATTEMPT_WINDOW_MS);
      if (attempts.length >= MAX_ATTEMPTS) {
        setError("Too many attempts. Please wait a few minutes and try again.");
        return;
      }

      // Same email or phone: try again after 2 days
      const recent = readStore(SENT_KEY).filter((a) => now - a.t < REPEAT_WINDOW_MS);
      const previous = recent.find((a) => a.k === emailKey || (phoneKey && a.k === phoneKey));
      if (previous) {
        setError(
          `You have already contacted us with these details. Please try again after 2 days. You can send another message on ${formatDate(previous.t + REPEAT_WINDOW_MS)}.`
        );
        return;
      }

      writeStore(ATTEMPTS_KEY, [...attempts, now]);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formEl,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      writeStore(
        SENT_KEY,
        [...recent, { k: emailKey, t: now }, ...(phoneKey ? [{ k: phoneKey, t: now }] : [])]
      );
      // TODO: save to Firebase later
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(`Something went wrong. Please try again or email us at ${EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== TOP: LEFT (HERO + OFFICE + MAP) / RIGHT (FORM PANEL) ===== */}
      <section className={`${wrap} pb-14 pt-3 sm:pb-20 sm:pt-5 lg:pb-24`} aria-label="Contact Rare IT">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 2xl:gap-12">
          {/* ---------- LEFT COLUMN ---------- */}
          <div className="flex min-w-0 flex-col">
            {/* Dark hero card */}
            <div className="relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[24px] bg-ink p-6 sm:min-h-[340px] sm:rounded-[32px] sm:p-10 lg:min-h-[380px] lg:p-12 2xl:min-h-[460px] 2xl:rounded-[44px] 2xl:p-16">
              <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rotate-12 rounded-[48px] bg-white/[0.05]" />
              <div aria-hidden="true" className="absolute -bottom-32 right-10 -z-10 h-[360px] w-[520px] -rotate-6 rounded-[48px] bg-white/[0.06]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-1 bg-brand" />

              <h1 className="text-balance font-display text-[clamp(34px,8vw,56px)] font-medium leading-[1.02] tracking-[-0.03em] text-white lg:text-[clamp(44px,5vw,72px)] 2xl:text-[clamp(64px,4.6vw,96px)]">
                Contact Rare IT<span className="text-brand">.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
                Share a project, send an update or ask a question. We reply within 24 business hours with clear next steps.
              </p>
            </div>

            {/* Office */}
            <div className="mt-10 flex flex-1 flex-col sm:mt-14">
              <h2 className={h2Cls}>Our office</h2>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight 2xl:text-2xl">Hyderabad</h3>
              <address className="mt-2 max-w-md text-[15px] not-italic leading-relaxed text-muted 2xl:max-w-lg 2xl:text-base">
                Raghuma Towers, 4th Floor, Phase 2,
                <br />
                Kavuri Hills, Madhapur,
                <br />
                Hyderabad, Telangana 500081
              </address>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`group mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline 2xl:text-base ${focusRing}`}
              >
                Open in Google Maps
                <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <ul className="mt-7 grid divide-y divide-line border-y border-line min-[640px]:grid-cols-3 min-[640px]:divide-x min-[640px]:divide-y-0">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className={`${iconTile} size-10 shrink-0 2xl:size-12`}>
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] text-muted 2xl:text-sm">{label}</span>
                        <span className="mt-0.5 block break-words text-sm font-semibold leading-snug 2xl:text-base">{value}</span>
                      </span>
                    </>
                  );
                  const cls = "flex items-center gap-3 px-1 py-4 min-[640px]:px-4 min-[640px]:first:pl-0 2xl:py-5";
                  return (
                    <li key={label} className="min-w-0">
                      {href ? (
                        <a href={href} className={`${cls} transition hover:text-brand ${focusRing}`}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Map fills the remaining height so both columns end level on desktop */}
              <div className="relative mt-7 min-h-[280px] flex-1 overflow-hidden rounded-2xl border border-line sm:min-h-[340px] lg:min-h-[320px]">
                <iframe
                  title="Rare IT office location on Google Maps"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* ---------- RIGHT COLUMN: FORM PANEL ---------- */}
          <aside className="min-w-0 rounded-[24px] bg-[#F4F5F8] p-5 sm:rounded-[32px] sm:p-8 lg:p-8 xl:p-10 2xl:rounded-[44px] 2xl:p-14">
            {sent ? (
              <div role="status" className="grid min-h-[480px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white">
                    <Check size={26} strokeWidth={3} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-medium tracking-tight 2xl:text-3xl">Thank you!</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-muted 2xl:text-base">
                    We have received your details and will be in touch within 24 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className={h2Cls}>Contact us</h2>
                <h3 className="mt-7 font-display text-xl font-medium tracking-tight sm:text-2xl 2xl:mt-10 2xl:text-3xl">
                  How can we help?
                </h3>

                {/* Topic tiles */}
                <div
                  role="radiogroup"
                  aria-label="How can we help?"
                  className="mt-5 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 2xl:gap-4"
                >
                  {topics.map(({ id, icon: Icon }) => {
                    const active = topic === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setTopic(id)}
                        className={`${tileBase} ${focusRing} ${
                          active
                            ? "border-brand bg-brand text-white"
                            : "border-line bg-white text-ink hover:border-brand/50"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} className="shrink-0" />
                        {id}
                      </button>
                    );
                  })}

                  {/* Careers: redirects to the careers page */}
                  <Link
                    to="/careers"
                    className={`${tileBase} justify-between border-line bg-white text-ink hover:border-brand hover:text-brand ${focusRing}`}
                  >
                    <span className="flex items-center gap-3">
                      <Briefcase size={18} strokeWidth={2} className="shrink-0" />
                      Careers
                    </span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <p className="mt-7 text-[15px] leading-relaxed text-ink 2xl:mt-9 2xl:text-lg">
                  {activeTopic.blurb} Fill out your details below and a Rare IT team member will contact you shortly.
                </p>
                <p className="mt-3 text-sm text-muted 2xl:text-base">
                  <span className="text-brand">*</span> is required for submission
                </p>

                <form
                  onSubmit={onSubmit}
                  className="mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-5"
                >
                  <input type="hidden" name="topic" value={topic} />

                  <div>
                    <label className={labelCls} htmlFor="first">
                      First name <span className="text-brand">*</span>
                    </label>
                    <input id="first" required name="first" autoComplete="given-name" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="last">
                      Last name <span className="text-brand">*</span>
                    </label>
                    <input id="last" required name="last" autoComplete="family-name" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="email">
                      Email address <span className="text-brand">*</span>
                    </label>
                    <input id="email" required type="email" name="email" autoComplete="email" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="company">
                      Company name
                    </label>
                    <input id="company" name="company" autoComplete="organization" className={fieldCls} />
                  </div>
                  <div className="min-[520px]:col-span-2 lg:col-span-1 xl:col-span-2">
                    <label className={labelCls} htmlFor="phone">
                      Phone number
                    </label>
                    <input id="phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" className={fieldCls} />
                  </div>
                  <div className="min-[520px]:col-span-2 lg:col-span-1 xl:col-span-2">
                    <label className={labelCls} htmlFor="service">
                      I’m interested in <span className="text-brand">*</span>
                    </label>
                    <select id="service" required name="service" defaultValue="" className={fieldCls}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Process Automation</option>
                      <option>Web Designing</option>
                      <option>Custom Software</option>
                      <option>Mobile App Development</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="min-[520px]:col-span-2 lg:col-span-1 xl:col-span-2">
                    <label className={labelCls} htmlFor="message">
                      Message <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us a little about your project"
                      className={`${fieldCls} resize-none`}
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-brand min-[520px]:col-span-2 lg:col-span-1 xl:col-span-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className={`group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 min-[520px]:col-span-2 min-[520px]:justify-self-start lg:col-span-1 xl:col-span-2 2xl:text-base ${focusRing}`}
                  >
                    {sending ? "Sending..." : "Send message"}
                    <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </form>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* ===== BOTTOM: WHAT HAPPENS NEXT + FAQ (full width) ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24 2xl:gap-24`}>
          {/* What happens next */}
          <div className="min-w-0">
            <h2 className={h2Cls}>What happens next</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line 2xl:mt-8">
              {next.map(({ title, text }, i) => (
                <li key={title} className="flex gap-5 py-5 2xl:py-7">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white 2xl:size-11 2xl:text-base"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight 2xl:text-2xl">{title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted 2xl:max-w-lg 2xl:text-base">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div className="min-w-0">
            <h2 className={h2Cls}>Common questions</h2>
            <div className="mt-6 space-y-3 2xl:mt-8 2xl:space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-line bg-white px-5 transition open:border-brand/40 sm:px-6 2xl:rounded-2xl 2xl:px-8"
                >
                  <summary
                    className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden 2xl:min-h-20 2xl:text-xl [&::-webkit-details-marker]:hidden ${focusRing}`}
                  >
                    {f.q}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white 2xl:size-11">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted 2xl:pb-8 2xl:text-lg">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
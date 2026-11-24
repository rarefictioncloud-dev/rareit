import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Briefcase,
  Clock,
  Rocket,
  Users,
  MessageSquare,
  TrendingUp,
  Code2,
  Palette,
  Server,
  Layers,
  Workflow,
  Bug,
  GraduationCap,
  Mail,
} from "lucide-react";

/* ---------- STYLE HELPERS (same white theme as Home and About) ---------- */
const wrap = "mx-auto w-[min(1240px,100%-32px)] sm:w-[min(1240px,100%-64px)] lg:w-[min(1400px,100%-96px)]";
const sectionY = "py-16 sm:py-24 lg:py-28";
const h2Cls = "text-balance font-display font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(30px,4vw,56px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const iconTile = "grid place-items-center rounded-xl border border-brand/20 bg-white text-brand transition";
const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm lg:py-4 lg:hover:border-ink/25";
const dotField =
  "pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px]";

/* ---------- DATA ---------- */
const perks = [
  { icon: Rocket, title: "Work on real projects", text: "You build things clients use from your first weeks, not practice work." },
  { icon: Users, title: "Small team, big impact", text: "Your ideas are heard and your work is visible to everyone." },
  { icon: MessageSquare, title: "Honest feedback", text: "Clear, kind and regular feedback so you always know where you stand." },
  { icon: TrendingUp, title: "Room to grow", text: "Learn new tools and take on more responsibility as you are ready." },
];

const roles = [
  { icon: Layers, title: "Full Stack Developer", type: "Full time", text: "Own features from database to interface, building complete web applications for our clients.", skills: ["React", "Node.js", "Databases"] },
  { icon: Code2, title: "Frontend Developer", type: "Full time", text: "Build fast, clean interfaces for websites and web apps using React and Tailwind CSS.", skills: ["React", "JavaScript", "Tailwind CSS"] },
  { icon: Server, title: "Backend Developer", type: "Full time", text: "Design APIs and databases that power our custom software and automation projects.", skills: ["Node.js", "APIs", "Databases"] },
  { icon: Workflow, title: "Process Automation Engineer", type: "Full time", text: "Study how businesses work and automate repetitive tasks with reliable, easy to use workflows.", skills: ["Workflow design", "Scripting", "Integrations"] },
  { icon: Palette, title: "UI/UX Designer", type: "Full time", text: "Turn business needs into clear screens and flows people enjoy using.", skills: ["Figma", "Prototyping", "Design systems"] },
  { icon: Bug, title: "Tester", type: "Full time", text: "Test our websites, apps and automations to catch issues early and keep every release dependable.", skills: ["Manual testing", "Test cases", "Bug reporting"] },
  { icon: GraduationCap, title: "SDE Intern", type: "Internship", text: "Learn on live projects with guidance from our developers and designers.", skills: ["Basics of web", "Eager to learn", "Problem solving"] },
];

const process = [
  { title: "Apply", text: "Send us the form below with a link to your work or profile." },
  { title: "Intro call", text: "A short chat about you, your goals and the role." },
  { title: "Practical round", text: "A simple task or discussion related to the work you would do." },
  { title: "Offer", text: "We share a decision quickly and answer any questions you have." },
];

const facts = [
  { icon: Briefcase, title: `${roles.length} open roles`, text: "Full time positions and an internship." },
  { icon: MapPin, title: "Hyderabad, on site", text: "Work side by side with the whole team." },
  { icon: Check, title: "We read every application", text: "A real person reviews each one." },
];

/* ---------- SMALL COMPONENTS ---------- */
function PrimaryBtn({ to, children }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] ${focusRing}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

/* ---------- APPLICATION LIMITS (client side) ---------- */
const APPLIED_KEY = "rareit_careers_applied";
const ATTEMPTS_KEY = "rareit_careers_attempts";
const APPLY_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000; // one application per person every 30 days
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
export default function Careers() {
  const [role, setRole] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const applyFor = (title) => {
    setRole(title);
    setSent(false);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

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

      // One application per person every 30 days (same email or same phone)
      const applied = readStore(APPLIED_KEY).filter((a) => now - a.t < APPLY_COOLDOWN_MS);
      const previous = applied.find((a) => a.k === emailKey || (phoneKey && a.k === phoneKey));
      if (previous) {
        setError(`You have already applied with these details. You can apply again on ${formatDate(previous.t + APPLY_COOLDOWN_MS)}.`);
        return;
      }

      writeStore(ATTEMPTS_KEY, [...attempts, now]);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
        formEl,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      writeStore(
        APPLIED_KEY,
        [...applied, { k: emailKey, t: now }, ...(phoneKey ? [{ k: phoneKey, t: now }] : [])]
      );
      // TODO: save to Firebase later
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email us at hr@rareit.in.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      {/* ===== HERO ===== */}
      <section className="pt-2.5 sm:pt-4" aria-label="Careers at Rare IT">
        <div className="relative isolate mx-auto w-[min(1240px,100%-20px)] overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:w-[min(1240px,100%-40px)] sm:rounded-[32px] lg:w-[min(1720px,100%-64px)] lg:rounded-[44px]">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]`} />

          <div className="px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:px-16 lg:pb-16 lg:pt-24 xl:px-20">
            <p className="text-sm font-semibold text-brand">Careers at Rare IT</p>
            <h1 className="mt-5 max-w-5xl text-balance font-display text-[clamp(36px,8.4vw,60px)] font-medium leading-[1.03] tracking-[-0.04em] lg:text-[clamp(52px,6vw,96px)] lg:leading-[0.98]">
              Build your career with purpose<span className="text-brand">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mt-8 lg:text-[20px] lg:leading-[1.6]">
              Join a Hyderabad team that builds software, websites and apps for real businesses. We look for curious people who care about doing good work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-10">
              <a
                href="#openings"
                className={`group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] transition hover:bg-brand-dark active:scale-[0.98] ${focusRing}`}
              >
                See open roles
                <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </a>
              <Link to="/about" className={`border-b-2 border-brand pb-0.5 text-sm font-semibold transition hover:text-brand ${focusRing}`}>
                About Rare IT
              </Link>
            </div>
          </div>

          <ul className="grid border-t border-line sm:grid-cols-3">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`flex items-start gap-4 px-5 py-5 sm:px-8 lg:px-12 lg:py-7 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                <span className={`${iconTile} size-10 shrink-0 lg:size-11`}><Icon size={18} strokeWidth={1.8} /></span>
                <div>
                  <p className="text-sm font-semibold leading-snug lg:text-[15px]">{title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <h2 className={`${h2Cls} max-w-2xl`}>Why join Rare IT.</h2>
        <ul className="mt-10 grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 sm:divide-y-0 lg:mt-14 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`group p-7 lg:p-9 ${i % 2 ? "sm:border-l sm:border-line" : ""} ${i > 1 ? "sm:border-t sm:border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
              <span className={`${iconTile} size-12 group-hover:border-brand group-hover:bg-brand group-hover:text-white`}><Icon size={22} strokeWidth={1.6} /></span>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight lg:text-2xl">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== OPEN ROLES ===== */}
      <section id="openings" className="scroll-mt-24 border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <div className="max-w-3xl">
            <h2 className={h2Cls}>Open roles.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base lg:mt-5 lg:text-lg">
              Pick the role that fits you. Do not see one? Send a general application and tell us what you would like to do.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
            {roles.map(({ icon: Icon, title, type, text, skills }) => (
              <li key={title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_34px_60px_-36px_rgba(11,21,48,0.4)] sm:rounded-3xl sm:p-8 lg:p-9">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className={`${iconTile} size-12 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:size-14`}><Icon size={22} strokeWidth={1.6} /></span>
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{type}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight lg:text-[30px] lg:leading-[1.1]">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-white px-3 py-1 text-[12px] font-medium text-ink/75 transition group-hover:border-brand/30">{s}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-brand" /> Hyderabad</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase size={14} className="text-brand" /> On site</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => applyFor(title)}
                      className={`group/b inline-flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}
                    >
                      Apply now
                      <span className="grid size-7 place-items-center rounded-full border border-brand/25 text-brand transition group-hover/b:border-white/40 group-hover/b:text-white"><ArrowUpRight size={14} /></span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== HIRING PROCESS ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <h2 className={`${h2Cls} max-w-2xl`}>How hiring works.</h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-10 lg:mt-14 lg:grid-cols-4 lg:gap-x-0">
            {process.map(({ title, text }, i) => (
              <li key={title} className="relative border-t border-ink/15 py-7 lg:pr-10">
                <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
                <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-6xl">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section id="apply" className="scroll-mt-24 border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className={h2Cls}>Apply to join us.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted lg:text-lg">
              Tell us about yourself and share a link to your work, resume or LinkedIn profile. We read every application.
            </p>
            <p className="mt-8 inline-flex items-center gap-3 text-sm text-muted">
              <span className="grid size-9 place-items-center rounded-full border border-brand/25 text-brand"><Mail size={15} /></span>
              <span>
                Prefer email? Write to{" "}
                <a href="mailto:hr@rareit.in" className={`font-semibold text-brand underline-offset-4 hover:underline ${focusRing}`}>hr@rareit.in</a>
              </span>
            </p>
            <p className="mt-4 inline-flex items-center gap-3 text-sm text-muted">
              <span className="grid size-9 place-items-center rounded-full border border-brand/25 text-brand"><Clock size={15} /></span>
              We will get back to you soon.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 pt-9 shadow-[0_40px_80px_-52px_rgba(11,21,48,0.4)] sm:p-10 sm:pt-12 lg:p-12 lg:pt-14">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
            {sent ? (
              <div role="status" className="grid place-items-center py-10 text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white"><Check size={26} strokeWidth={3} /></span>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">Application received</h3>
                  <p className="mt-2 text-sm text-muted">Thank you for applying. We will review it and get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
                <label className="sr-only" htmlFor="first">First name</label>
                <input id="first" required name="first" autoComplete="given-name" placeholder="First name" className={fieldCls} />
                <label className="sr-only" htmlFor="last">Last name</label>
                <input id="last" required name="last" autoComplete="family-name" placeholder="Last name" className={fieldCls} />
                <label className="sr-only" htmlFor="email">Email address</label>
                <input id="email" required type="email" name="email" autoComplete="email" placeholder="Email address" className={`${fieldCls} sm:col-span-2`} />
                <label className="sr-only" htmlFor="phone">Phone number</label>
                <input id="phone" required type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="Phone number" className={`${fieldCls} sm:col-span-2`} />
                <label className="sr-only" htmlFor="role">Role you are applying for</label>
                <select id="role" required name="role" value={role} onChange={(e) => setRole(e.target.value)} className={`${fieldCls} sm:col-span-2`}>
                  <option value="" disabled>Role you are applying for</option>
                  {roles.map((r) => (
                    <option key={r.title}>{r.title}</option>
                  ))}
                  <option>General application</option>
                </select>
                <label className="sr-only" htmlFor="experience">Experience level</label>
                <select id="experience" required name="experience" defaultValue="" className={`${fieldCls} sm:col-span-2`}>
                  <option value="" disabled>Experience level</option>
                  <option>Fresher</option>
                  <option>Less than 1 year</option>
                  <option>1 to 3 years</option>
                  <option>3 to 5 years</option>
                  <option>More than 5 years</option>
                </select>
                <label className="sr-only" htmlFor="link">Link to resume, portfolio or LinkedIn</label>
                <input id="link" required type="url" name="link" placeholder="Link to resume, portfolio or LinkedIn" className={`${fieldCls} sm:col-span-2`} />
                <label className="sr-only" htmlFor="message">About you</label>
                <textarea id="message" required name="message" rows={4} placeholder="Tell us a little about yourself" className={`${fieldCls} resize-none sm:col-span-2`} />
                <p className="text-xs text-muted sm:col-span-2">You can submit one application every 30 days.</p>
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
                  {sending ? "Sending..." : "Submit application"}
                  <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className={`${wrap} pb-20 sm:pb-28`}>
        <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-white px-6 py-14 text-center shadow-[0_40px_90px_-56px_rgba(11,21,48,0.4)] sm:px-16 sm:py-20">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div aria-hidden="true" className={`${dotField} [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]`} />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-[clamp(28px,4vw,52px)] font-medium leading-[1.08] tracking-[-0.03em]">
            Have a question before you apply?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Talk to our team. We are happy to explain how we work.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn to="/contact">Let’s Talk</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
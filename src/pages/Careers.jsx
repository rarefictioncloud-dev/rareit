import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
  Smartphone,
  Server,
  Megaphone,
  GraduationCap,
} from "lucide-react";

const wrap = "mx-auto w-[min(1180px,100%-48px)]";

const perks = [
  {
    icon: Rocket,
    title: "Work on real projects",
    text: "You build things clients use from your first weeks, not practice work.",
  },
  {
    icon: Users,
    title: "Small team, big impact",
    text: "Your ideas are heard and your work is visible to everyone.",
  },
  {
    icon: MessageSquare,
    title: "Honest feedback",
    text: "Clear, kind and regular feedback so you always know where you stand.",
  },
  {
    icon: TrendingUp,
    title: "Room to grow",
    text: "Learn new tools and take on more responsibility as you are ready.",
  },
];

const roles = [
  {
    icon: Code2,
    title: "Frontend Developer",
    type: "Full time",
    text: "Build fast, clean interfaces for websites and web apps using React and Tailwind CSS.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Developer",
    type: "Full time",
    text: "Design APIs and databases that power our custom software and automation projects.",
    skills: ["Node.js", "APIs", "Databases"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Developer",
    type: "Full time",
    text: "Create Android and iOS apps for customers across different industries.",
    skills: ["React Native", "Flutter", "Firebase"],
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    type: "Full time",
    text: "Turn business needs into clear screens and flows people enjoy using.",
    skills: ["Figma", "Prototyping", "Design systems"],
  },
  {
    icon: Megaphone,
    title: "Business Development Executive",
    type: "Full time",
    text: "Meet new businesses, understand their needs and bring them to our team.",
    skills: ["Communication", "Lead research", "Presentations"],
  },
  {
    icon: GraduationCap,
    title: "Software Intern",
    type: "Internship",
    text: "Learn on live projects with guidance from our developers and designers.",
    skills: ["Basics of web", "Eager to learn", "Problem solving"],
  },
];

const process = [
  { title: "Apply", text: "Send us the form below with a link to your work or profile." },
  { title: "Intro call", text: "A short chat about you, your goals and the role." },
  { title: "Practical round", text: "A simple task or discussion related to the work you would do." },
  { title: "Offer", text: "We share a decision quickly and answer any questions you have." },
];

const fieldCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand";

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

export default function Careers() {
  const [role, setRole] = useState("");
  const [sent, setSent] = useState(false);

  const applyFor = (title) => {
    setRole(title);
    setSent(false);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

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
          <p className="text-sm font-bold text-brand">Careers at Rare IT</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
            Build your career <span className="text-brand">with purpose.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Join a Hyderabad team that builds software, websites and apps for
            real businesses. We look for curious people who care about doing
            good work.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              See open roles
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand transition group-hover:translate-x-0.5">
                <ArrowRight size={16} />
              </span>
            </a>
            <Link
              to="/about"
              className="border-b-2 border-brand pb-0.5 text-sm font-bold transition hover:text-brand"
            >
              About Rare IT
            </Link>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            Why join <span className="text-brand">Rare IT.</span>
          </h2>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, text }) => (
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

      {/* Open roles */}
      <section id="openings" className="scroll-mt-24 py-16 sm:py-24">
        <div className={wrap}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            Open <span className="text-brand">roles.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Pick the role that fits you. Do not see one? Send a general
            application and tell us what you would like to do.
          </p>

          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {roles.map(({ icon: Icon, title, type, text, skills }) => (
              <li
                key={title}
                className="flex flex-col rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-bold text-muted">
                    {type}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-brand" /> Hyderabad
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} className="text-brand" /> On site
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => applyFor(title)}
                    className="group inline-flex items-center gap-2 border-b-2 border-brand pb-0.5 text-sm font-bold transition hover:text-brand"
                  >
                    Apply now
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hiring process (black band) */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className={`${wrap} relative`}>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
            How hiring <span className="text-brand">works.</span>
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ title, text }, i) => (
              <li key={title} className="rounded-3xl border border-white/15 p-7">
                <span className="text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_#d40f14]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 py-16 sm:py-24">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Apply to <span className="text-brand">join us.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Tell us about yourself and share a link to your work, resume or
              LinkedIn profile. We read every application.
            </p>
           
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
              <Clock size={14} className="text-brand" />
              Prefer email? Write to hr@rareit.in
            </p>
          </div>

          <div className="rounded-[36px] border border-ink/10 bg-white p-8 sm:p-10">
            {sent ? (
              <div className="grid place-items-center py-10 text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                    <Check size={26} strokeWidth={3} />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                    Application received
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Thank you for applying. We will review it and get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <input required name="first" placeholder="First name" className={fieldCls} />
                <input required name="last" placeholder="Last name" className={fieldCls} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={`${fieldCls} sm:col-span-2`}
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className={`${fieldCls} sm:col-span-2`}
                />
                <select
                  required
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`${fieldCls} sm:col-span-2`}
                >
                  <option value="" disabled>
                    Role you are applying for
                  </option>
                  {roles.map((r) => (
                    <option key={r.title}>{r.title}</option>
                  ))}
                  <option>General application</option>
                </select>
                <select name="experience" defaultValue="" className={`${fieldCls} sm:col-span-2`}>
                  <option value="" disabled>
                    Experience level
                  </option>
                  <option>Fresher</option>
                  <option>Less than 1 year</option>
                  <option>1 to 3 years</option>
                  <option>3 to 5 years</option>
                  <option>More than 5 years</option>
                </select>
                <input
                  required
                  type="url"
                  name="link"
                  placeholder="Link to resume, portfolio or LinkedIn"
                  className={`${fieldCls} sm:col-span-2`}
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a little about yourself"
                  className={`${fieldCls} resize-none sm:col-span-2`}
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:col-span-2 sm:justify-self-start"
                >
                  Submit application
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16 sm:pb-24">
        <div className={wrap}>
          <div className="rounded-[36px] bg-ink px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Have a question <span className="text-brand">before you apply?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Talk to our team. We are happy to explain how we work.
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Home, Briefcase, Workflow, Mail, X, Search } from "lucide-react";

/* Uses the same theme tokens as the rest of the site:
   brand, ink, mist, line, muted + font-display (Fraunces) */

const quickLinks = [
  { to: "/", icon: Home, title: "Home", text: "Start from the beginning" },
  { to: "/services", icon: Workflow, title: "Services", text: "See what we build" },
  { to: "/our-work", icon: Briefcase, title: "Our Work", text: "Browse our projects" },
  { to: "/contact", icon: Mail, title: "Contact", text: "Talk to our team" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const css = `
@keyframes nf-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
.nf-rise { opacity: 0; animation: nf-rise .8s cubic-bezier(.2,.7,.2,1) forwards; }
@keyframes nf-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.nf-float { animation: nf-float 5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .nf-rise { opacity: 1; animation: none; }
  .nf-float { animation: none; }
}
`;

export default function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const shown = pathname.length > 28 ? `${pathname.slice(0, 27)}…` : pathname;

  // Go back if there is history to return to, otherwise go home
  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/"));

  return (
    <main className="bg-black font-sans text-white">
      <style>{css}</style>

      {/* ===== MAIN MESSAGE ===== */}
      <section className="mx-auto grid w-[min(1180px,100%-40px)] items-center gap-12 py-14 sm:w-[min(1180px,100%-64px)] sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-10">
        <div>
          <p
            aria-hidden="true"
            className="nf-rise font-display text-[clamp(110px,28vw,230px)] font-medium leading-[0.85] tracking-[-0.05em] lg:text-[clamp(120px,min(17vw,30vh),240px)]"
          >
            4<span className="text-brand">0</span>4
          </p>
          <h1
            className="nf-rise mt-6 text-balance font-display text-[clamp(30px,7.5vw,44px)] font-medium leading-[1.08] tracking-[-0.02em] sm:mt-8"
            style={{ animationDelay: "120ms" }}
          >
            This page took a wrong turn.
          </h1>
          <p
            className="nf-rise mt-4 max-w-md text-[17px] leading-relaxed text-white/70"
            style={{ animationDelay: "220ms" }}
          >
            The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
          </p>
          <div
            className="nf-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              to="/"
              className={`group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] sm:py-3.5 sm:text-sm ${focusRing}`}
            >
              Back to home
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={goBack}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.07] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/15 active:scale-[0.98] sm:py-3.5 sm:text-sm ${focusRing}`}
            >
              <ArrowLeft size={15} /> Go back
            </button>
          </div>
        </div>

        {/* workflow that "failed" at the lookup step */}
        <div className="nf-rise mx-auto w-full max-w-[520px] lg:mr-0" style={{ animationDelay: "420ms" }}>
          <div className="nf-float rounded-[28px] bg-white p-5 text-ink shadow-[0_40px_90px_-30px_rgba(255,255,255,0.14)] sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/55">Page lookup</p>
                <h2 className="mt-1.5 text-xl font-semibold leading-tight sm:text-2xl">Finding your page</h2>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
                <span className="size-2 rounded-full bg-brand" />
                Not found
              </span>
            </div>

            <ol className="mt-5 space-y-2.5">
              <li className="flex items-center gap-4 rounded-2xl border border-line p-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist">
                  <Search size={18} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-tight">Request received</p>
                  <p className="mt-0.5 truncate text-xs text-ink/60">{shown}</p>
                </div>
                <span className="ml-auto grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50">
                  <Check size={14} strokeWidth={2.8} className="text-emerald-600" />
                </span>
              </li>

              <li className="flex items-center gap-4 rounded-2xl border border-brand/50 bg-brand/[0.04] p-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                  <X size={18} strokeWidth={2.4} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-tight">Match the address</p>
                  <p className="mt-0.5 truncate text-xs text-ink/60">No page matches this address</p>
                </div>
                <span className="ml-auto grid size-6 shrink-0 place-items-center rounded-full bg-brand/10">
                  <X size={14} strokeWidth={2.8} className="text-brand" />
                </span>
              </li>

              <li className="flex items-center gap-4 rounded-2xl border border-line p-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist">
                  <Home size={18} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-tight">Get you back on track</p>
                  <p className="mt-0.5 truncate text-xs text-ink/60">Pick a link to continue</p>
                </div>
                <ArrowRight size={16} className="ml-auto shrink-0 text-ink/40" />
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="mx-auto w-[min(1180px,100%-40px)] pb-16 sm:w-[min(1180px,100%-64px)] sm:pb-24">
        <h2 className="mb-5 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Where would you like to go?
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {quickLinks.map(({ to, icon: Icon, title, text }) => (
            <li key={to}>
              <Link
                to={to}
                className={`group flex h-full items-center gap-4 rounded-2xl bg-white/[0.06] p-5 transition hover:bg-white/[0.11] active:scale-[0.98] ${focusRing}`}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-semibold">{title}</span>
                  <span className="mt-0.5 block text-sm text-white/60">{text}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
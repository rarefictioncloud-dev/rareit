import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Workflow,
  Palette,
  Code2,
  Smartphone,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";
import Logo from "./Logo";

const serviceItems = [
  { icon: Workflow, label: "Process Automation", to: "/services#automation" },
  { icon: Palette, label: "Web Designing", to: "/services#web" },
  { icon: Code2, label: "Custom Software", to: "/services#custom" },
  { icon: Smartphone, label: "Mobile Apps", to: "/services#mobile" },
];

const industryItems = [
  { icon: HeartPulse, label: "Healthcare", to: "/industries#healthcare" },
  { icon: Factory, label: "Manufacturing", to: "/industries#manufacturing" },
  { icon: ShoppingCart, label: "Retail & E-commerce", to: "/industries#retail" },
  { icon: Landmark, label: "Finance", to: "/industries#finance" },
  { icon: GraduationCap, label: "Education", to: "/industries#education" },
];

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", items: serviceItems },
  { to: "/industries", label: "Industries", items: industryItems },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // shadow + white background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu when the page changes
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 font-sans backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/90 shadow-[0_8px_30px_rgba(13,13,15,0.06)]"
          : "border-b border-transparent bg-neutral-50/80"
      }`}
    >
      <nav className="mx-auto flex h-[76px] w-[min(1180px,100%-48px)] items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {links.map(({ to, label, end, items }) => (
            <li key={to} className="group relative">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative flex h-[76px] items-center gap-1 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-brand after:scale-x-100"
                      : "text-ink after:scale-x-0 hover:text-brand group-hover:after:scale-x-100"
                  }`
                }
              >
                {label}
                {items && (
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </NavLink>

              {/* Dropdown panel */}
              {items && (
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="w-64 rounded-2xl border border-line bg-white p-2 shadow-[0_20px_50px_rgba(13,13,15,0.12)]">
                    {items.map(({ icon: Icon, label: itemLabel, to: itemTo }) => (
                      <li key={itemLabel}>
                        <Link
                          to={itemTo}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-ink transition hover:bg-brand/5 hover:text-brand"
                        >
                          <span className="grid size-8 place-items-center rounded-lg bg-brand/10 text-brand">
                            <Icon size={16} strokeWidth={1.8} />
                          </span>
                          {itemLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(13,13,15,0.18)] transition hover:-translate-y-0.5 hover:bg-brand lg:inline-flex"
        >
          Let’s Talk <ArrowRight size={14} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line bg-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line bg-white px-6 pb-6 pt-2 lg:hidden">
          <ul>
            {links.map(({ to, label, end, items }) => (
              <li key={to} className="border-b border-line/70">
                {items ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === label ? null : label)}
                      aria-expanded={expanded === label}
                      className="flex w-full items-center justify-between py-4 text-sm font-semibold text-ink"
                    >
                      {label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expanded === label ? "rotate-180 text-brand" : ""}`}
                      />
                    </button>
                    {expanded === label && (
                      <ul className="pb-3">
                        <li>
                          <Link to={to} className="block py-2 pl-3 text-[13px] font-semibold text-brand">
                            View all {label.toLowerCase()}
                          </Link>
                        </li>
                        {items.map(({ icon: Icon, label: itemLabel, to: itemTo }) => (
                          <li key={itemLabel}>
                            <Link
                              to={itemTo}
                              className="flex items-center gap-3 py-2 pl-3 text-[13px] text-muted"
                            >
                              <Icon size={15} className="text-brand" />
                              {itemLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `block py-4 text-sm font-semibold ${isActive ? "text-brand" : "text-ink"}`
                    }
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white"
          >
            Let’s Talk <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
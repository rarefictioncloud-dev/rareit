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
  Database,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";
import Logo from "./Logo";

const serviceItems = [
  { icon: Workflow, label: "Process Automation SOP", desc: "Save hours on repeat tasks", to: "/services/process-automation" },
  { icon: Palette, label: "Web Designing", desc: "Fast, modern business websites", to: "/services/web-designing" },
  { icon: Code2, label: "Custom Software", desc: "ERP, CRM and internal tools", to: "/services/custom-software" },
  { icon: Smartphone, label: "Mobile Apps", desc: "Apps for your customers and team", to: "/services/mobile-apps" },
  { icon: Database, label: "SAP", desc: "Set up, connect and extend SAP", to: "/services/sap" },
];

const industryItems = [
  { icon: HeartPulse, label: "Healthcare", desc: "Clinics and care teams", to: "/industries/healthcare" },
  { icon: Factory, label: "Manufacturing", desc: "Production and inventory", to: "/industries/manufacturing" },
  { icon: ShoppingCart, label: "Retail & E-commerce", desc: "Stores and online selling", to: "/industries/retail" },
  { icon: Landmark, label: "Finance", desc: "Billing and approvals", to: "/industries/finance" },
  { icon: GraduationCap, label: "Education", desc: "Schools and institutes", to: "/industries/education" },
];

const links = [
  { to: "/", label: "Home", end: true },
  {
    to: "/services/process-automation",
    label: "Services",
    match: "/services",
    heading: "What we build",
    footer: { label: "Not sure what you need? Talk to us", to: "/contact" },
    items: serviceItems,
  },
  {
    to: "/industries",
    label: "Industries",
    match: "/industries",
    heading: "Who we build for",
    footer: { label: "View all industries", to: "/industries" },
    items: industryItems,
  },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // shadow + white background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the menus when the page changes
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setDesktopOpen(null);
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
          {links.map(({ to, label, end, match, items, heading, footer }) => {
            const isOpen = desktopOpen === label;
            const active = match ? pathname.startsWith(match) : false;

            return (
              <li
                key={to}
                className="relative"
                onMouseEnter={() => items && setDesktopOpen(label)}
                onMouseLeave={() => items && setDesktopOpen(null)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setDesktopOpen(null);
                }}
                onBlur={(e) => {
                  if (items && !e.currentTarget.contains(e.relatedTarget)) {
                    setDesktopOpen(null);
                  }
                }}
              >
                {items ? (
                  /* Dropdown parents are buttons: clicking them never changes the page */
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setDesktopOpen(isOpen ? null : label)}
                    className={`relative flex h-[76px] items-center gap-1 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
                      active
                        ? "text-brand after:scale-x-100"
                        : isOpen
                        ? "text-brand after:scale-x-100"
                        : "text-ink after:scale-x-0 hover:text-brand"
                    }`}
                  >
                    {label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `relative flex h-[76px] items-center gap-1 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
                        isActive
                          ? "text-brand after:scale-x-100"
                          : "text-ink after:scale-x-0 hover:text-brand hover:after:scale-x-100"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                )}

                {/* Dropdown panel */}
                {items && (
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="relative w-[360px] rounded-3xl border border-line bg-white p-3 shadow-[0_24px_60px_rgba(13,13,15,0.14)]">
                      <span
                        aria-hidden="true"
                        className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-l border-t border-line bg-white"
                      />
                      <p className="px-3 pb-1 pt-2 text-xs font-bold text-muted">{heading}</p>
                      <ul>
                        {items.map(({ icon: Icon, label: itemLabel, desc, to: itemTo }) => (
                          <li key={itemLabel}>
                            <Link
                              to={itemTo}
                              onClick={() => setDesktopOpen(null)}
                              className="group/item flex items-center gap-4 rounded-2xl p-3 transition hover:bg-neutral-50"
                            >
                              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-white transition-colors group-hover/item:bg-brand">
                                <Icon size={20} strokeWidth={1.8} />
                              </span>
                              <span className="flex-1">
                                <span className="block text-sm font-bold text-ink">{itemLabel}</span>
                                <span className="block text-xs text-muted">{desc}</span>
                              </span>
                              <ArrowRight
                                size={16}
                                className="-translate-x-1 text-brand opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={footer.to}
                        onClick={() => setDesktopOpen(null)}
                        className="mt-2 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-xs font-bold text-white transition hover:bg-brand"
                      >
                        {footer.label}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="group hidden items-center gap-3 rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(13,13,15,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-dark lg:inline-flex"
        >
          Let’s Talk
          <span className="grid size-8 place-items-center rounded-full bg-brand text-white transition group-hover:bg-white group-hover:text-brand">
            <ArrowRight size={14} />
          </span>
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
            {links.map(({ to, label, end, items, footer }) => (
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
                        {items.map(({ icon: Icon, label: itemLabel, desc, to: itemTo }) => (
                          <li key={itemLabel}>
                            <Link
                              to={itemTo}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-neutral-50"
                            >
                              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-white">
                                <Icon size={18} strokeWidth={1.8} />
                              </span>
                              <span>
                                <span className="block text-sm font-bold text-ink">{itemLabel}</span>
                                <span className="block text-xs text-muted">{desc}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to={footer.to}
                            onClick={() => setOpen(false)}
                            className="mt-1 flex items-center gap-2 p-2 text-[13px] font-semibold text-brand"
                          >
                            {footer.label}
                            <ArrowRight size={14} />
                          </Link>
                        </li>
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
            className="group mt-6 flex items-center justify-between rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-semibold text-white"
          >
            Let’s Talk
            <span className="grid size-10 place-items-center rounded-full bg-white text-brand">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
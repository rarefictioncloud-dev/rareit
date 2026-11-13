import { Link } from "react-router-dom";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Mail, Phone, MapPin, ArrowUp, ArrowUpRight, ArrowRight } from "lucide-react";

const company = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-work", label: "Our Work" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const services = [
  { to: "/services/process-automation", label: "Process Automation" },
  { to: "/services/web-designing", label: "Web Designing" },
  { to: "/services/custom-software", label: "Custom Software" },
  { to: "/services/mobile-apps", label: "Mobile Apps" },
  { to: "/services/sap", label: "SAP" },
];

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/" },
];

// Office details (edit here if anything changes)
const address = [
  "Rareit, Raghuma Towers,",
  "4th Floor, Phase 2, Kavuri Hills,",
  "Madhapur, Hyderabad,",
  "Telangana 500081",
];
const email = "info@rareit.in";
const phone = "+91 7997658999";

const mapQuery = "Raghuma Towers, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081";
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

const Heading = ({ children }) => (
  <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
    {children}
   
  </h4>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
  >
    <ArrowRight
      size={13}
      className="-ml-5 text-brand opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
    />
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink font-sans text-white">
      {/* solid red top line + faint grid texture */}
      <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_85%_0%,black,transparent_60%)]" />

      <div className="relative mx-auto w-[min(1180px,100%-48px)]">
        {/* ===== TOP CTA ===== */}
       

        {/* ===== MAIN GRID ===== */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Rare IT home" className="inline-flex items-baseline gap-1 text-4xl leading-none">
              <span className="font-script text-[1.2em] font-bold text-brand">Rare</span>
              <span className="font-extrabold tracking-tighter text-white">
                IT<span className="text-brand">!</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-white/65">
              A next-gen IT partner helping businesses transform ideas into
              powerful digital solutions.
            </p>
            <ul className="mt-7 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:-translate-y-1 hover:border-brand hover:bg-brand"
                  >
                    <Icon size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Heading>Company</Heading>
            <ul className="space-y-3.5">
              {company.map(({ to, label }) => (
                <li key={label}>
                  <FooterLink to={to}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Heading>Services</Heading>
            <ul className="space-y-3.5">
              {services.map(({ to, label }) => (
                <li key={label}>
                  <FooterLink to={to}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Heading>Contact</Heading>
            <ul className="space-y-5 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                    <Mail size={15} />
                  </span>
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                    <Phone size={15} />
                  </span>
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                  <MapPin size={15} />
                </span>
                <address className="not-italic leading-relaxed">
                  {address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== MAP STRIP ===== */}
        <div className="relative h-56 overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-64">
          <iframe
            title="Rare IT office location"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full border-0 opacity-80 grayscale contrast-110"
          />
          <a
            href={mapLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand"
          >
            Open in Google Maps <ArrowUpRight size={12} />
          </a>
        </div>

        {/* ===== BIG OUTLINED WORDMARK ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none text-center text-[clamp(70px,17vw,230px)] font-extrabold leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)]"
        >
          Rare IT!
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Rare IT.</strong> All
            rights reserved.
          </p>
          <p className="tracking-wide">
            Innovate. Transform. <strong className="text-brand">Grow.</strong>
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-medium text-white/80 transition hover:border-brand hover:text-white"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
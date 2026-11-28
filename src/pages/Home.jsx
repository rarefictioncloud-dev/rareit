import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight, ArrowUpRight, Check, Workflow, Palette, Code2, Smartphone, Database,
  HeartPulse, Factory, ShoppingCart, Landmark, GraduationCap, Truck, Search, PenTool,
  Rocket, LifeBuoy, Bot, LayoutDashboard, Plug, ShieldCheck, Plus, Mail, Phone, MapPin,
  Wrench, Users, MessageCircle, CreditCard, ShoppingBag, Eye,
} from "lucide-react";

/* =====================================================================
   THEME (tailwind.config.js -> theme.extend)  — unchanged
   colors: {
     brand: { DEFAULT: "#C8102E", dark: "#A00D25" },
     ink: "#0B1530", muted: "#5B6475", mist: "#F4F6FA", line: "#E4E8F0",
   },
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
     display: ['"Fraunces"', "Georgia", "serif"],
   }

   LAYOUT NOTES (full-width edition)
   - One shared container (up to 2000px) so the page fills the screen on
     laptops and 24"+ monitors, with small side margins on phones.
   - Breakpoints: base (small phones), sm (large phones / tablets),
     lg (laptops), 2xl (1536px+, big monitors) where type and spacing scale up.
   - Motion respects prefers-reduced-motion.
   ===================================================================== */

/* ---------- DATA ---------- */
const hero = {
  text: "A next-gen IT partner turning ideas into powerful digital solutions, from automation and custom software to websites, apps and SAP.",
};

const hub = [
  { icon: ShoppingBag, name: "Shopify", event: "Store order imported", angle: -90 },
  { icon: CreditCard, name: "Razorpay", event: "Payment captured and matched", angle: -30 },
  { icon: Database, name: "SAP", event: "Invoice posted to SAP", angle: 30 },
  { icon: Users, name: "Zoho CRM", event: "Customer record updated", angle: 90 },
  { icon: Mail, name: "Gmail", event: "Confirmation email sent", angle: 150 },
  { icon: MessageCircle, name: "WhatsApp", event: "Delivery update sent on WhatsApp", angle: 210 },
];

const assurances = [
  { icon: Code2, title: "Senior engineers on every project", text: "The people you meet are the people who build." },
  { icon: Eye, title: "Transparent, visible delivery", text: "Regular demos and honest progress updates." },
  { icon: LifeBuoy, title: "Support well beyond launch", text: "Monitoring, fixes and new features after go-live." },
];

const tools = ["Zoho CRM", "HubSpot", "Gmail", "WhatsApp Business", "Google Sheets", "Razorpay", "Shopify", "Firebase", "Slack", "SAP"];

const principles = [
  { title: "Built around your process", text: "We start from how your team works, then shape the software to fit." },
  { title: "Clear, collaborative delivery", text: "Regular demos and honest updates, so you always know where things stand." },
  { title: "Support beyond launch", text: "Monitoring, fixes and new features once you are live." },
];

const services = [
  { icon: Workflow, to: "/services/process-automation", title: "Process Automation", text: "Automate repetitive workflows, approvals and reporting across your tools.", cta: "Explore automation", span: "sm:col-span-2 lg:col-span-2 lg:row-span-2", feature: true },
  { icon: Code2, to: "/services/custom-software", title: "Custom Software", text: "ERP, CRM and internal platforms engineered around the way you work.", cta: "Explore software", span: "sm:col-span-2 lg:col-span-2", visual: "code" },
  { icon: Palette, to: "/services/web-designing", title: "Web Designing", text: "Fast, responsive, brand-led websites and portals that build trust at first glance.", cta: "Explore web design", span: "", visual: "web" },
  { icon: Smartphone, to: "/services/mobile-apps", title: "Mobile Apps", text: "Polished iOS and Android apps, designed with real users in mind.", cta: "Explore mobile apps", span: "", visual: "mobile" },
  { icon: Database, to: "/services/sap", title: "SAP", text: "Set up, connect and extend SAP so finance, sales and stock run from one system.", cta: "Explore SAP", span: "sm:col-span-2 lg:col-span-2", visual: "sap" },
  { icon: Wrench, to: "/contact", title: "Support and maintenance", text: "Monitoring, fixes and updates after go-live, so your product keeps getting better.", cta: "Talk to support", span: "sm:col-span-2 lg:col-span-2", visual: "support" },
];

const industries = [
  { icon: Factory, to: "/industries/manufacturing", title: "Manufacturing", text: "Connected operations, production tracking and smarter reporting.", examples: ["Production tracking by shift and line", "Maintenance requests with approvals", "Stock-to-dispatch reporting"] },
  { icon: Truck, to: "/industries/distribution", title: "Distribution", text: "Keep goods and information moving, from warehouse to doorstep.", examples: ["Order, picking and dispatch status in one view", "Delivery updates sent to customers", "Automatic low-stock and reorder alerts"] },
  { icon: ShoppingCart, to: "/industries/retail", title: "Retail and E-commerce", text: "Seamless storefronts, inventory flows and customer journeys.", examples: ["Storefront, inventory and payments in sync", "Order updates on WhatsApp and email", "Returns and refund workflows"] },
  { icon: HeartPulse, to: "/industries/healthcare", title: "Healthcare", text: "Secure, compliant digital care, from patient portals to clinic workflows.", examples: ["Patient portals with secure access", "Appointment and clinic workflow tools", "Audit trail for every record change"] },
  { icon: Landmark, to: "/industries/finance", title: "Finance", text: "Trusted, scalable tools for approvals, records and compliance.", examples: ["Multi-level approvals with a clear history", "Reconciliation and reporting automation", "Role-based access and compliance records"] },
  { icon: GraduationCap, to: "/industries/education", title: "Education", text: "Learning platforms and admin tools without the paperwork.", examples: ["Admissions and enrolment workflows", "Fee collection and receipts", "Student and staff portals"] },
];

const smarts = [
  { icon: Bot, title: "Industry-aware automation", text: "Workflows tuned to your sector’s data, rules and terminology, so results are precise and easy to audit." },
  { icon: LayoutDashboard, title: "Adaptive experiences", text: "Interfaces that shape themselves around each role, surfacing what matters and automating the routine." },
  { icon: Plug, title: "Connected workflows", text: "Work flows across your existing tools, with people looped in only when judgment is needed." },
  { icon: ShieldCheck, title: "Governed delivery", text: "Security, access control and audit trails are built in from the very first release." },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn your goals, users and constraints before writing a line of code." },
  { icon: PenTool, title: "Design", text: "Clear plans, prototypes and architecture you can review and approve." },
  { icon: Rocket, title: "Deliver", text: "Agile builds with regular, visible progress and honest communication." },
  { icon: LifeBuoy, title: "Support", text: "Monitoring, updates and long-term care once you are live." },
];

const faqs = [
  { q: "How do we start a project with Rare IT?", a: "Send us a short note about what you want to achieve. We reply to set up a call, learn about your goals and users, and then share a clear plan and scope for you to review before any work begins." },
  { q: "Can you work with the tools we already use?", a: "Yes. We connect new software to the tools you already rely on, such as CRMs, spreadsheets, payment gateways, messaging apps and SAP, so your team does not have to change how it works overnight." },
  { q: "Do you support the product after launch?", a: "Yes. We stay with you after go-live with monitoring, fixes, updates and new features as your business grows." },
];

const contact = [
  { icon: Phone, label: "+91 79976 58999", href: "tel:+917997658999" },
  { icon: Mail, label: "info@rareit.in", href: "mailto:info@rareit.in" },
  { icon: MapPin, label: "Raghuma Towers, 4th Floor, Phase 2, Kavuri Hills, Madhapur, Hyderabad 500081" },
];

const approvalRows = [
  { name: "Purchase request", who: "Stores", status: "Approved" },
  { name: "Leave request", who: "HR", status: "Approved" },
  { name: "Vendor payment", who: "Finance", status: "Waiting" },
  { name: "Stock transfer", who: "Warehouse", status: "Waiting" },
];
const weekBars = [38, 52, 44, 70, 58, 86, 64];

/* ---------- STYLE HELPERS ---------- */
/* One shared full-width container (same as Contact and Process Automation pages) */
const wrap =
  "mx-auto w-[min(2000px,100%-24px)] sm:w-[min(2000px,100%-40px)] lg:w-[min(2000px,100%-64px)] 2xl:w-[min(2000px,100%-96px)]";
const stageWrap = wrap;
const sectionY = "py-14 sm:py-24 lg:py-28 2xl:py-36";
const h2Cls =
  "text-balance font-display font-medium leading-[1.1] tracking-[-0.03em] text-[clamp(28px,4vw,56px)] 2xl:text-[clamp(48px,3.4vw,68px)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const fieldCls = "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-sm lg:py-4 2xl:text-base lg:hover:border-ink/25";
const cardShadow = "shadow-[0_24px_50px_-30px_rgba(11,21,48,0.35)]";

const css = `
@keyframes rit-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.rit-marquee { animation: rit-marquee 46s linear infinite; }
@keyframes rit-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
.rit-in { animation: rit-in .7s cubic-bezier(.2,.7,.2,1) both; }
.rit-in-2 { animation-delay: .1s; }
.rit-in-3 { animation-delay: .22s; }

@keyframes rit-flow { to { stroke-dashoffset: -32; } }
.rit-flow { animation: rit-flow .8s linear infinite; }
@keyframes rit-spin { to { transform: rotate(360deg); } }
.rit-spin { animation: rit-spin 60s linear infinite; }
@keyframes rit-ring { 0% { opacity: .55; transform: scale(1); } 100% { opacity: 0; transform: scale(1.55); } }
.rit-ring { animation: rit-ring 1.3s ease-out both; }
@keyframes rit-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.rit-fade { animation: rit-fade .4s ease-out both; }
@keyframes rit-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.rit-grow { transform-origin: bottom; animation: rit-grow .9s cubic-bezier(.2,.7,.2,1) both; }

.rit-line { transform-origin: left; transform: scaleX(0); transition: transform 1.8s cubic-bezier(.4,0,.2,1); }
.rit-line[data-on="true"] { transform: scaleX(1); }
.rit-node { transition: background-color .4s ease, border-color .4s ease, transform .4s ease; }
.rit-node[data-on="true"] { background-color: #C8102E; border-color: #C8102E; transform: scale(1.15); }
.rit-step { transition: opacity .7s ease, transform .7s ease; }
.rit-step[data-on="false"] { opacity: .35; transform: translateY(10px); }

.rit-spot { background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(200,16,46,.07), transparent 60%); }

.rit-sheen { position: relative; overflow: hidden; }
.rit-sheen::after {
  content: ""; position: absolute; inset: 0; transform: translateX(-120%);
  background: linear-gradient(100deg, transparent 30%, rgba(255,255,255,.28) 50%, transparent 70%);
  transition: transform .7s ease;
}
.rit-sheen:hover::after { transform: translateX(120%); }

@media (min-width: 1024px) { .rit-marquee:hover { animation-play-state: paused; } }

@media (prefers-reduced-motion: reduce) {
  .rit-marquee, .rit-in, .rit-flow, .rit-spin, .rit-ring, .rit-fade, .rit-grow { animation: none; }
  .rit-line, .rit-node, .rit-step { transition: none; }
  .rit-line { transform: scaleX(1); }
  .rit-step[data-on="false"] { opacity: 1; transform: none; }
}
`;

/* ---------- FORM LIMITS (client side) ---------- */
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

/* ---------- HOOKS ---------- */
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

const trackSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/* ---------- SMALL COMPONENTS ---------- */
const SectionHead = ({ title, text }) => (
  <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16 2xl:max-w-4xl">
    <h2 className={h2Cls}>{title}</h2>
    {text && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base lg:mt-5 lg:text-lg 2xl:max-w-2xl 2xl:text-xl">{text}</p>}
  </div>
);

const Visual = ({ name }) => {
  const box = "pointer-events-none absolute right-7 top-7 hidden transition duration-300 group-hover:-translate-y-1 lg:block 2xl:right-10 2xl:top-10";
  const dots = (
    <span className="flex gap-1 border-b border-line px-2 py-1.5">
      <i className="size-1.5 rounded-full bg-line" /><i className="size-1.5 rounded-full bg-line" /><i className="size-1.5 rounded-full bg-line" />
    </span>
  );
  const card = "overflow-hidden rounded-lg border border-line bg-white shadow-[0_12px_26px_-16px_rgba(11,21,48,0.4)]";

  if (name === "web")
    return (
      <div aria-hidden="true" className={`${box} w-28 ${card}`}>
        {dots}
        <div className="space-y-1.5 p-2.5">
          <i className="block h-8 rounded bg-brand/15" />
          <i className="block h-1.5 w-4/5 rounded bg-line" />
          <i className="block h-1.5 w-3/5 rounded bg-line" />
        </div>
      </div>
    );
  if (name === "mobile")
    return (
      <div aria-hidden="true" className={`${box} h-[92px] w-[52px] rounded-xl border-2 border-ink/20 bg-white p-1.5 shadow-[0_12px_26px_-16px_rgba(11,21,48,0.4)]`}>
        <i className="mx-auto block h-1 w-4 rounded-full bg-ink/20" />
        <i className="mt-2 block h-7 rounded bg-brand/15" />
        <i className="mt-1.5 block h-1.5 rounded bg-line" />
        <i className="mt-1.5 block h-1.5 w-2/3 rounded bg-line" />
      </div>
    );
  if (name === "code")
    return (
      <div aria-hidden="true" className={`${box} w-40 ${card}`}>
        {dots}
        <div className="space-y-1.5 p-3">
          <i className="block h-1.5 w-1/3 rounded bg-brand/60" />
          <i className="block h-1.5 w-4/5 rounded bg-line" />
          <i className="ml-3 block h-1.5 w-3/5 rounded bg-line" />
          <i className="ml-3 block h-1.5 w-2/3 rounded bg-brand/30" />
          <i className="block h-1.5 w-2/5 rounded bg-line" />
        </div>
      </div>
    );
  if (name === "sap")
    return (
      <div aria-hidden="true" className={`${box} flex items-center gap-1`}>
        {["Finance", "Sales", "Stock"].map((m, i) => (
          <span key={m} className="flex items-center gap-1">
            {i > 0 && <i className="block h-px w-4 bg-brand/50" />}
            <span className="rounded-md border border-line bg-white px-2.5 py-1.5 text-[11px] font-semibold shadow-[0_8px_18px_-12px_rgba(11,21,48,0.4)]">{m}</span>
          </span>
        ))}
      </div>
    );
  if (name === "support")
    return (
      <div aria-hidden="true" className={box}>
        <div className="flex h-10 items-end gap-1">
          {[40, 65, 50, 80, 60, 90, 70, 55, 85, 60, 75, 95].map((h, i) => (
            <i key={i} className={`block w-1.5 rounded-sm ${i === 11 ? "bg-emerald-500" : "bg-emerald-400/60"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mt-2 text-right text-[11px] font-semibold text-emerald-700">All systems normal</p>
      </div>
    );
  return null;
};

/* ---------- HERO HUB ---------- */
const C = 300;
const R = 228;
const nodePoint = (deg) => {
  const rad = (deg * Math.PI) / 180;
  return { x: C + R * Math.cos(rad), y: C + R * Math.sin(rad), px: 50 + (R / 6) * Math.cos(rad), py: 50 + (R / 6) * Math.sin(rad) };
};

function HeroHub({ tick, animate }) {
  const active = tick % hub.length;
  const current = hub[active];
  const ap = nodePoint(current.angle);

  return (
    <div className="w-full">
      <div
        role="img"
        aria-label="Diagram: Shopify, Razorpay, SAP, Zoho CRM, Gmail and WhatsApp connected into one Rare IT workflow"
        className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[500px] lg:w-[clamp(340px,calc(100svh-22rem),600px)] lg:max-w-full 2xl:w-[clamp(520px,calc(100svh-18rem),780px)]"
      >
        <svg viewBox="0 0 600 600" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx={C} cy={C} r={R} fill="none" stroke="#CBD2E0" strokeWidth="1" strokeDasharray="3 7" strokeLinecap="round" />
          <circle cx={C} cy={C} r="132" fill="none" stroke="#E4E8F0" strokeWidth="1" />
          <g className="rit-spin" style={{ transformOrigin: "300px 300px" }}>
            <circle cx={C} cy={C} r="178" fill="none" stroke="#CBD2E0" strokeWidth="1" strokeDasharray="2 10" strokeLinecap="round" />
            {[20, 140, 260].map((d) => {
              const rad = (d * Math.PI) / 180;
              return <circle key={d} cx={C + 178 * Math.cos(rad)} cy={C + 178 * Math.sin(rad)} r="4" fill="#C8102E" opacity=".75" />;
            })}
          </g>
          {hub.map((n, i) => {
            const p = nodePoint(n.angle);
            return <line key={n.name} x1={C} y1={C} x2={p.x} y2={p.y} stroke="#D5DBE8" strokeWidth="1.5" opacity={i === active ? 0 : 1} />;
          })}
          <g key={tick}>
            <line x1={C} y1={C} x2={ap.x} y2={ap.y} stroke="#C8102E" strokeWidth="9" opacity=".1" strokeLinecap="round" />
            <line x1={C} y1={C} x2={ap.x} y2={ap.y} stroke="#C8102E" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" className="rit-flow" />
            {animate && (
              <circle r="6" fill="#C8102E" opacity="0">
                <animateMotion dur="1.2s" fill="freeze" path={`M ${ap.x} ${ap.y} L ${C} ${C}`} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.2s" fill="freeze" />
              </circle>
            )}
          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 size-[28%] -translate-x-1/2 -translate-y-1/2">
          {animate && <span key={tick} className="rit-ring absolute inset-0 rounded-[30%] border-2 border-brand" style={{ animationDelay: ".9s" }} />}
          <div className="relative grid size-full place-items-center rounded-[30%] bg-brand text-white shadow-[0_30px_60px_-24px_rgba(200,16,46,0.7)] ring-4 ring-white sm:ring-8">
            <span className="text-center font-display text-[clamp(17px,3.5vw,42px)] font-semibold leading-[0.92] tracking-[-0.03em] 2xl:text-[clamp(42px,3vw,56px)]">
              <span className="block">Rare</span>
              <span className="block">IT!</span>
            </span>
          </div>
        </div>

        {hub.map((n, i) => {
          const { px, py } = nodePoint(n.angle);
          const on = i === active;
          const Icon = n.icon;
          return (
            <div
              key={n.name}
              style={{ left: `${px}%`, top: `${py}%` }}
              className={`absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border bg-white py-1 pl-1 pr-2 text-[10.5px] font-semibold transition duration-500 sm:gap-2.5 sm:py-2 sm:pl-2 sm:pr-4 sm:text-sm 2xl:text-base ${
                on
                  ? "scale-110 border-brand/60 shadow-[0_22px_44px_-18px_rgba(200,16,46,0.5)] ring-4 ring-brand/10"
                  : "border-line shadow-[0_14px_30px_-20px_rgba(11,21,48,0.4)]"
              }`}
            >
              <span className={`grid size-5 place-items-center rounded-full transition duration-500 sm:size-8 2xl:size-9 ${on ? "bg-brand text-white" : "bg-white text-ink/60 ring-1 ring-line"}`}>
                <Icon className="size-3 sm:size-[15px] 2xl:size-[17px]" strokeWidth={1.9} />
              </span>
              {n.name}
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-4 flex w-[min(380px,100%)] items-center gap-3 rounded-full border border-line bg-white py-2 pl-2.5 pr-4 shadow-[0_20px_44px_-28px_rgba(11,21,48,0.4)] sm:mt-5 sm:py-2.5 sm:pl-3 sm:pr-5 2xl:w-[min(440px,100%)]" role="status" aria-live="off">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 sm:size-7">
          <Check size={14} strokeWidth={3} />
        </span>
        <span key={tick} className="rit-fade min-w-0 flex-1 truncate text-[13px] font-semibold sm:text-sm 2xl:text-base">{current.event}</span>
        <span className="shrink-0 text-xs font-medium tabular-nums text-muted">{active + 1}/{hub.length}</span>
      </div>
    </div>
  );
}

/* ---------- SAMPLE DASHBOARD (Meet Rare IT) ---------- */
function SampleDashboard() {
  const dots = (
    <span aria-hidden="true" className="flex gap-1">
      <i className="size-2 rounded-full bg-brand/60" /><i className="size-2 rounded-full bg-line" /><i className="size-2 rounded-full bg-line" />
    </span>
  );
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto lg:mr-0 lg:h-[470px] 2xl:max-w-[640px] 2xl:h-[540px]">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[40px] [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_75%)]" />

      <div className={`overflow-hidden rounded-2xl border border-line bg-white ${cardShadow} lg:absolute lg:left-0 lg:top-0 lg:w-[90%]`}>
        <div className="flex items-center justify-between border-b border-line px-4 py-3 2xl:px-5 2xl:py-4">
          <span className="flex items-center gap-3">{dots}<span className="text-[13px] font-semibold 2xl:text-sm">Approvals</span></span>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">2 waiting</span>
        </div>
        <ul className="divide-y divide-line">
          {approvalRows.map((r) => (
            <li key={r.name} className="flex items-center gap-3 px-4 py-3 2xl:px-5 2xl:py-3.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[11px] font-semibold text-ink/70 ring-1 ring-line">{r.who.slice(0, 2)}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold 2xl:text-sm">{r.name}</span>
                <span className="block text-[11px] text-muted 2xl:text-xs">Requested by {r.who}</span>
              </span>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.status === "Approved" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-4 rounded-2xl border border-line bg-white p-4 ${cardShadow} lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[56%] 2xl:p-5`}>
        <p className="text-[13px] font-semibold 2xl:text-sm">Orders this week</p>
        <div className="mt-3 flex h-16 items-end gap-1.5 2xl:h-20" aria-hidden="true">
          {weekBars.map((h, i) => (
            <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} className={`rit-grow block flex-1 rounded-sm ${i === 5 ? "bg-brand" : "bg-brand/20"}`} />
          ))}
        </div>
        <p className="mt-2.5 text-[11px] text-muted">Sample data</p>
      </div>

      <div className={`mt-4 rounded-2xl border border-line bg-white p-4 ${cardShadow} lg:absolute lg:bottom-6 lg:left-0 lg:mt-0 lg:w-[40%] 2xl:p-5`}>
        <p className="text-[13px] font-semibold 2xl:text-sm">Connected</p>
        <ul className="mt-2.5 space-y-2">
          {["Shopify", "SAP", "Gmail"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-[12px] font-medium text-ink/80 2xl:text-[13px]">
              <span className="size-2 rounded-full bg-emerald-500" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- PAGE ---------- */
export default function Home() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [tick, setTick] = useState(0);
  const [ind, setInd] = useState(0);
  const [animate] = useState(() => !prefersReducedMotion());
  const [processRef, processSeen] = useInView(0.3);
  const ActiveIcon = industries[ind].icon;

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, [animate]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("contact");
      const near = el ? el.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setShowBar(window.scrollY > 560 && !near);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        setError(`You have already contacted us with these details. Please try again after 2 days. You can send another message on ${formatDate(previous.t + REPEAT_WINDOW_MS)}.`);
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
      setError("Something went wrong. Please try again or email us at info@rareit.in.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-ink antialiased">
      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="pt-2.5 sm:pt-4 lg:pt-3" aria-label="Introduction">
        <div className={`${stageWrap} relative isolate overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(11,21,48,0.35)] sm:rounded-[32px] lg:rounded-[44px]`}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_78%_45%,black,transparent_68%)]" />
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />

          <div className="grid items-center gap-8 px-5 pb-8 pt-10 sm:gap-10 sm:px-10 sm:pb-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-14 lg:pb-9 lg:pt-10 xl:px-16 2xl:gap-24 2xl:px-24 2xl:pb-14 2xl:pt-16">
            <div className="min-w-0">
              <h1 className="rit-in rit-in-2 text-balance font-display text-[clamp(32px,9.6vw,60px)] font-medium leading-[1.04] tracking-[-0.035em] text-ink lg:text-[clamp(44px,4.7vw,80px)] lg:leading-[1] 2xl:text-[clamp(76px,4.8vw,108px)]">
                Engineering the digital future of your business<span className="text-brand">.</span>
              </h1>
              <p className="rit-in rit-in-3 mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:mt-8 lg:text-[19px] lg:leading-[1.6] 2xl:max-w-2xl 2xl:text-[22px]">{hero.text}</p>
              <ul className="rit-in rit-in-3 mt-7 flex flex-wrap gap-2 lg:mt-9">
                {["Automation", "Custom software", "Websites", "Apps", "SAP"].map((t) => (
                  <li key={t} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink/80 2xl:px-5 2xl:py-2 2xl:text-base">{t}</li>
                ))}
              </ul>
            </div>

            <div className="rit-in rit-in-3 min-w-0">
              <HeroHub tick={tick} animate={animate} />
            </div>
          </div>

          <ul className="grid border-t border-line bg-white sm:grid-cols-3">
            {assurances.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`flex items-start gap-4 px-5 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 2xl:px-24 2xl:py-8 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand/20 bg-white text-brand lg:size-11 2xl:size-14">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug lg:text-[15px] 2xl:text-lg">{title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted 2xl:text-base">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== TOOLS STRIP ===== */}
      <section className="mt-3 overflow-hidden border-b border-line bg-white py-6 sm:mt-4 lg:mt-6 lg:py-9 2xl:py-12" aria-label="Tools we connect with">
        <div className={`${wrap} items-center gap-10 lg:flex`}>
          <p className="mb-4 shrink-0 text-sm font-medium text-muted lg:mb-0 lg:w-56 2xl:w-72 2xl:text-base">Works with the tools you already use</p>
          <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <ul className="rit-marquee flex w-max items-center gap-3 sm:gap-4">
              {[...tools, ...tools, ...tools, ...tools].map((t, i) => (
                <li key={`${t}-${i}`} aria-hidden={i >= tools.length} className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink/70 sm:px-5 sm:py-2.5 sm:text-base lg:text-lg 2xl:px-7 2xl:py-3 2xl:text-xl">
                  <span className="size-1.5 rounded-full bg-brand" />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== MEET RARE IT ===== */}
      <section className={`${wrap} ${sectionY}`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 2xl:gap-32">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brand 2xl:text-base">Meet Rare IT</p>
            <h2 className="mt-4 text-balance font-display text-[clamp(28px,3.7vw,58px)] font-medium leading-[1.1] tracking-[-0.03em] sm:mt-5 2xl:text-[clamp(52px,3.4vw,72px)]">
              Software and AI-ready automation that know how your business works.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-lg lg:text-[19px] lg:leading-[1.65] 2xl:max-w-2xl 2xl:text-[22px]">
              Rare IT is a Hyderabad-based team that designs and builds software around the way you actually work, then stays with you as you grow. Senior engineers, transparent delivery and long-term support come as standard.
            </p>
            <ul className="mt-8 border-t border-line lg:mt-10">
              {principles.map(({ title, text }) => (
                <li key={title} className="flex gap-4 border-b border-line py-5 lg:py-6 2xl:py-8">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/25 text-brand 2xl:size-11"><Check size={16} strokeWidth={2.8} /></span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight lg:text-lg 2xl:text-xl">{title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted lg:text-[15px] 2xl:max-w-xl 2xl:text-lg">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <SampleDashboard />
            <p className="mt-4 text-center text-xs text-muted lg:mt-6 lg:text-right">Illustrative interface, shown with sample data.</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (bento) ===== */}
      <section id="services" className="scroll-mt-20 border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead
            title="Software and services for every business need"
            text="Explore what we build. Everything is designed to connect, so each piece works with the rest."
          />
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6 2xl:gap-8">
            {services.map(({ icon: Icon, to, title, text, cta, span, feature, visual }) => (
              <li key={title} className={span}>
                <Link
                  to={to}
                  onMouseMove={trackSpot}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_34px_60px_-36px_rgba(11,21,48,0.4)] active:scale-[0.99] sm:rounded-3xl sm:p-7 lg:min-h-[270px] lg:p-9 2xl:min-h-[340px] 2xl:rounded-[32px] 2xl:p-12 ${focusRing}`}
                >
                  {feature && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />}
                  <span aria-hidden="true" className="rit-spot pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
                  {feature && (
                    <Icon aria-hidden="true" strokeWidth={0.8} className="pointer-events-none absolute -bottom-10 -right-10 hidden size-72 text-brand/[0.06] transition duration-700 group-hover:rotate-12 group-hover:scale-110 lg:block 2xl:size-96" />
                  )}
                  {visual && <Visual name={visual} />}
                  <span className="relative grid size-11 place-items-center rounded-xl border border-brand/20 bg-white text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:size-12 lg:size-14 2xl:size-16">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className={`relative mt-5 font-display font-medium tracking-tight lg:mt-8 ${feature ? "text-[28px] sm:text-3xl lg:text-[44px] lg:leading-[1.05] 2xl:text-[56px]" : "text-2xl lg:text-[28px] 2xl:text-[34px]"}`}>{title}</h3>
                  <p className={`relative mt-2.5 max-w-md text-sm leading-relaxed text-muted sm:mt-3 lg:text-[15px] 2xl:max-w-lg 2xl:text-lg ${feature ? "lg:text-base 2xl:text-xl" : ""}`}>{text}</p>
                  {feature && (
                    <ul className="relative mt-5 flex flex-wrap gap-2 lg:mt-6">
                      {["Approvals", "Reporting", "Hand-off", "Notifications"].map((c) => (
                        <li key={c} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium transition group-hover:border-brand/30 lg:px-4 lg:py-2 lg:text-sm 2xl:text-base">{c}</li>
                      ))}
                    </ul>
                  )}
                  <span className="relative mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand lg:pt-9 2xl:text-base">
                    {cta} <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== INDUSTRIES (rows + live detail panel) ===== */}
      <section id="industries" className="scroll-mt-20 border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead
            title="Built for your industry. Not retrofitted to it."
            text="Every solution starts from the way your sector works: its data, rules, terminology and customers."
          />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 2xl:gap-28">
            <ul className="min-w-0 border-t border-line">
              {industries.map(({ icon: Icon, to, title, text }, i) => {
                const on = ind === i;
                return (
                  <li key={title} className="border-b border-line">
                    <Link
                      to={to}
                      onMouseEnter={() => setInd(i)}
                      onFocus={() => setInd(i)}
                      className={`group relative flex items-center gap-4 py-5 transition active:bg-white sm:gap-6 sm:py-6 lg:px-5 lg:py-7 2xl:py-9 ${focusRing}`}
                    >
                      <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 origin-top bg-brand transition duration-300 max-lg:hidden ${on ? "scale-y-100" : "scale-y-0"}`} />
                      <span className={`grid size-11 shrink-0 place-items-center rounded-xl border transition sm:size-12 lg:size-14 2xl:size-16 ${on ? "border-brand bg-brand text-white" : "border-brand/20 bg-white text-brand"}`}>
                        <Icon size={22} strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block font-display text-xl font-medium tracking-tight transition sm:text-2xl lg:text-[34px] lg:leading-none 2xl:text-[44px] ${on ? "lg:translate-x-1.5" : "lg:text-ink/50"}`}>{title}</span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-muted sm:text-sm lg:hidden">{text}</span>
                      </span>
                      <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition sm:size-11 lg:size-12 2xl:size-14 ${on ? "border-brand bg-brand text-white lg:rotate-12" : "border-line"}`}>
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <aside className="hidden min-w-0 lg:block" aria-live="polite">
              <div className="sticky top-28 overflow-hidden rounded-3xl border border-line bg-white p-10 shadow-[0_40px_80px_-50px_rgba(11,21,48,0.4)] 2xl:rounded-[32px] 2xl:p-14">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <ActiveIcon aria-hidden="true" strokeWidth={0.8} className="pointer-events-none absolute -bottom-12 -right-12 size-72 text-brand/[0.06] 2xl:size-96" />
                <div key={ind} className="rit-fade relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-[0_18px_36px_-16px_rgba(200,16,46,0.7)] 2xl:size-16">
                    <ActiveIcon size={26} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-7 font-display text-[40px] font-medium leading-[1.05] tracking-tight 2xl:text-[56px]">{industries[ind].title}</h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-muted 2xl:max-w-md 2xl:text-xl">{industries[ind].text}</p>
                  <p className="mt-9 border-t border-line pt-6 text-sm font-semibold text-ink 2xl:text-base">Typical things we build</p>
                  <ul className="mt-4 space-y-3.5 2xl:space-y-5">
                    {industries[ind].examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-3 text-[15px] leading-snug text-ink/85 2xl:text-lg">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-brand/30"><Check size={12} strokeWidth={3} className="text-brand" /></span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 2xl:gap-28`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold text-brand 2xl:text-base">Our approach</p>
            <h2 className={`${h2Cls} mt-4`}>What makes Rare IT solutions smarter?</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base lg:mt-6 lg:text-lg 2xl:max-w-xl 2xl:text-xl">
              Automation, clean design and solid engineering work together, so your business runs faster with less manual effort.
            </p>
          </div>
          <ul className="grid min-w-0 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-2 sm:divide-y-0 sm:rounded-3xl 2xl:rounded-[32px]">
            {smarts.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                onMouseMove={trackSpot}
                className={`group relative overflow-hidden p-6 transition sm:p-8 lg:p-10 2xl:p-14 ${i % 2 ? "sm:border-l sm:border-line" : ""} ${i > 1 ? "sm:border-t sm:border-line" : ""}`}
              >
                <span aria-hidden="true" className="rit-spot pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="relative grid size-11 place-items-center rounded-xl border border-brand/20 bg-white text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:size-12 lg:size-14 2xl:size-16">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-medium leading-tight lg:mt-8 lg:text-2xl 2xl:text-[32px]">{title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted sm:mt-3 lg:text-[15px] 2xl:text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS (timeline) ===== */}
      <section className="border-t border-line bg-white">
        <div className={`${wrap} ${sectionY}`}>
          <SectionHead title="A disciplined process, built for trust." />
          <ol ref={processRef} className="relative grid gap-0 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-0">
            <span aria-hidden="true" className="absolute left-0 right-0 top-0 hidden h-px bg-ink/15 lg:block" />
            <span aria-hidden="true" data-on={processSeen} className="rit-line absolute left-0 right-0 top-0 hidden h-0.5 bg-brand lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-on={processSeen}
                style={{ transitionDelay: `${i * 380}ms` }}
                className="rit-step relative border-l border-ink/15 pb-10 pl-8 last:border-l-transparent last:pb-0 sm:border-l-0 sm:border-t sm:pb-0 sm:pl-0 sm:pt-8 sm:last:border-t lg:border-t-0 lg:pr-10 2xl:pr-16"
              >
                <span
                  aria-hidden="true"
                  data-on={processSeen}
                  style={{ transitionDelay: `${i * 380}ms` }}
                  className="rit-node absolute -left-[7px] top-1 size-3 rounded-full border-2 border-ink/30 bg-white ring-4 ring-white sm:-top-[6px] sm:left-0"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl border border-ink/15 bg-white text-ink sm:size-12 2xl:size-14">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span aria-hidden="true" className="font-display text-5xl font-medium leading-none tracking-tight text-ink/10 lg:text-7xl 2xl:text-8xl">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight lg:mt-8 lg:text-[28px] 2xl:text-[36px]">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted lg:mt-3 lg:text-[15px] 2xl:max-w-sm 2xl:text-lg">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${wrap} ${sectionY} grid gap-8 border-t border-line lg:grid-cols-[0.8fr_1.6fr] lg:gap-20 2xl:gap-28`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2Cls}>Questions, answered.</h2>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted sm:text-base lg:mt-5 2xl:max-w-sm 2xl:text-lg">
            Need something else? Write to{" "}
            <a href="mailto:info@rareit.in" className={`font-semibold text-brand underline-offset-4 hover:underline ${focusRing}`}>info@rareit.in</a>{" "}
            and we’ll reply with a clear answer.
          </p>
        </div>
        <div className="min-w-0 space-y-3 lg:space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-line bg-white px-5 transition open:border-brand/40 open:shadow-[0_24px_50px_-36px_rgba(11,21,48,0.35)] sm:px-6 lg:rounded-3xl lg:px-9 lg:hover:border-ink/25 2xl:px-12">
              <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold leading-snug marker:hidden sm:text-lg lg:min-h-24 lg:text-xl 2xl:min-h-28 2xl:text-2xl [&::-webkit-details-marker]:hidden ${focusRing}`}>
                {q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white lg:size-11">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-muted lg:pb-9 lg:text-base lg:leading-[1.7] 2xl:text-lg">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== LET'S CONNECT ===== */}
      <section id="contact" className={`${wrap} scroll-mt-20 pb-20 sm:pb-24 lg:pb-32 2xl:pb-40`}>
        <div className="relative grid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-44px_rgba(11,21,48,0.35)] sm:rounded-3xl lg:grid-cols-[0.9fr_1.1fr] lg:shadow-[0_50px_100px_-60px_rgba(11,21,48,0.4)] 2xl:rounded-[40px]">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div className="relative isolate overflow-hidden border-b border-line p-6 pt-9 sm:p-12 sm:pt-14 lg:border-b-0 lg:border-r lg:p-16 2xl:p-24">
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(#D5DBE8_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_20%_15%,black,transparent_65%)]" />
            <div className="relative">
              <h2 className="text-balance font-display text-[clamp(26px,3.6vw,48px)] font-medium leading-[1.1] tracking-[-0.025em] lg:text-[clamp(34px,3.3vw,52px)] 2xl:text-[clamp(52px,3.2vw,68px)]">
                Let’s build something great together.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:mt-4 lg:mt-5 lg:text-base 2xl:max-w-md 2xl:text-xl">
                Tell us about your project and we’ll get back to you.
              </p>
              <ul className="mt-7 space-y-4 text-sm font-medium lg:mt-12 lg:space-y-5 2xl:text-lg">
                {contact.map(({ icon: Icon, label, href }) => {
                  const inner = (
                    <>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand/25 bg-white text-brand lg:size-12 lg:transition lg:group-hover/c:border-brand lg:group-hover/c:bg-brand lg:group-hover/c:text-white 2xl:size-14"><Icon size={17} /></span>
                      {href ? <span className="min-w-0 break-words font-semibold">{label}</span> : <address className="max-w-[280px] pt-1.5 not-italic leading-snug text-ink/80 2xl:max-w-sm">{label}</address>}
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? <a href={href} className={`group/c flex items-center gap-3 underline-offset-4 hover:underline lg:gap-4 ${focusRing}`}>{inner}</a> : <div className="flex items-start gap-3 lg:gap-4">{inner}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="min-w-0 bg-white p-5 pt-8 sm:p-12 lg:p-16 2xl:p-24">
            {sent ? (
              <div role="status" className="grid h-full min-h-64 place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white"><Check size={26} strokeWidth={3} /></span>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">Thank you!</h3>
                  <p className="mt-2 text-sm text-muted">We’ve received your details and will be in touch soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:gap-5 2xl:gap-6">
                <input type="hidden" name="service" value="General enquiry" />
                <label className="sr-only" htmlFor="first">First name</label>
                <input id="first" required name="first" autoComplete="given-name" placeholder="First name" className={fieldCls} />
                <label className="sr-only" htmlFor="last">Last name</label>
                <input id="last" required name="last" autoComplete="family-name" placeholder="Last name" className={fieldCls} />
                <label className="sr-only" htmlFor="email">Business email address</label>
                <input id="email" required type="email" name="email" autoComplete="email" placeholder="Business email address" className={`${fieldCls} min-[520px]:col-span-2`} />
                <label className="sr-only" htmlFor="company">Company name</label>
                <input id="company" name="company" autoComplete="organization" placeholder="Company name" className={fieldCls} />
                <label className="sr-only" htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="Phone number" className={fieldCls} />
                <label className="sr-only" htmlFor="country">Country or region</label>
                <select id="country" required name="country" defaultValue="" className={fieldCls}>
                  <option value="" disabled>Country / region *</option>
                  <option>India</option><option>Singapore</option><option>United Arab Emirates</option>
                  <option>Australia</option><option>United States</option><option>Other</option>
                </select>
                <label className="sr-only" htmlFor="industry">Industry</label>
                <select id="industry" required name="industry" defaultValue="" className={fieldCls}>
                  <option value="" disabled>Industry *</option>
                  {industries.map((i) => <option key={i.title}>{i.title}</option>)}
                  <option>Other</option>
                </select>
                <label className="sr-only" htmlFor="message">About your project</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your project" className={`${fieldCls} resize-none min-[520px]:col-span-2`} />
                {error && (
                  <p role="alert" className="text-sm text-brand min-[520px]:col-span-2">
                    {error}
                  </p>
                )}
                <button type="submit" disabled={sending} className={`rit-sheen group mt-1 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 min-[520px]:col-span-2 min-[520px]:w-auto min-[520px]:justify-self-start lg:mt-2 lg:py-4 lg:shadow-[0_14px_30px_-12px_rgba(200,16,46,0.6)] 2xl:text-base ${focusRing}`}>
                  {sending ? "Sending..." : "Submit"} <ArrowRight size={16} className="relative z-10 transition group-hover:translate-x-1" />
                </button>
              </form>
            )}
            <p className="mt-6 text-xs text-muted lg:mt-8 2xl:text-sm">SAP is a trademark of SAP SE. Rare IT is an independent IT company.</p>
          </div>
        </div>
      </section>

      {/* ===== MOBILE QUICK-CALL BAR (phones only; delete this block to remove) ===== */}
      <div
        aria-hidden={!showBar}
        className={`fixed inset-x-0 bottom-0 z-40 px-3 pt-2 transition duration-300 lg:hidden ${showBar ? "translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"}`}
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-line bg-white/95 p-1.5 shadow-[0_20px_50px_-12px_rgba(11,21,48,0.4)] backdrop-blur">
          <Link to="/contact" className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white active:scale-[0.98] ${focusRing}`}>
            Start a project <ArrowRight size={16} />
          </Link>
          <a href="tel:+917997658999" aria-label="Call Rare IT" className={`grid size-12 shrink-0 place-items-center rounded-full border border-line bg-white text-ink active:scale-95 ${focusRing}`}>
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
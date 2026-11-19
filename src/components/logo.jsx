import { Link } from "react-router-dom";

// light = true gives a white "IT!" for dark backgrounds (e.g. the footer)
export default function Logo({ className = "text-4xl", light = false }) {
  return (
    <Link
      to="/"
      aria-label="Rare IT home"
      className={`inline-flex items-baseline gap-[0.18em] font-sans font-extrabold leading-none tracking-tighter ${className}`}
    >
      <span className="text-brand">Rare</span>
      <span className={light ? "text-white" : "text-ink"}>
        IT<span className="text-brand">!</span>
      </span>
    </Link>
  );
}
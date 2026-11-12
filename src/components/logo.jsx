import { Link } from "react-router-dom";

// light = true gives a white "IT!" for dark backgrounds (e.g. the footer)
export default function Logo({ className = "text-4xl", light = false }) {
  return (
    <Link
      to="/"
      aria-label="Rare IT home"
      className={`inline-flex items-baseline gap-1 leading-none ${className}`}
    >
      <span className="font-script text-[1.2em] font-bold text-brand">Rare</span>
      <span
        className={`font-extrabold tracking-tighter ${light ? "text-white" : "text-ink"}`}
      >
        IT<span className="text-brand">!</span>
      </span>
    </Link>
  );
}
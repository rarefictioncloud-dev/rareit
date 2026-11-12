import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto w-[min(1180px,100%-48px)] py-24 font-sans">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tighter">Page not found</h1>
      <p className="mt-3 text-muted">The page you’re looking for doesn’t exist or was moved.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </main>
  );
}
export default function Loader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <div className="size-10 animate-spin rounded-full border-4 border-line border-t-brand motion-reduce:animate-none" />
    </div>
  );
}
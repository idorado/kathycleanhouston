import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className="rounded-lg border px-4 py-2">Go to Home</Link>
        <Link href="/contact" className="rounded-lg bg-black text-white px-4 py-2">Get a Quote</Link>
      </div>
    </main>
  );
}

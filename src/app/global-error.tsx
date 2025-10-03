"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">An unexpected error occurred. Please try again.</p>
          <button onClick={reset} className="mt-6 rounded-lg bg-black text-white px-4 py-2">Reload page</button>
        </main>
      </body>
    </html>
  );
}

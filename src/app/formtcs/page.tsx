import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormTcsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Request a Quote
          </h1>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 py-2 has-[>svg]:px-3 font-medium"
            data-tally-open="wMkPWA"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-hide-title="1"
            data-tally-form-events-forwarding="1"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </main>
  );
}

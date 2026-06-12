"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export type ReviewItem = {
  quote: string;
  author: string;
  service?: string;
  date: string;
};

// Single-row reviews carousel (1 card on mobile, 2 on sm, 3 on lg). Replaces the
// multi-row review grids so reviews never wrap to a second row.
export default function ReviewsCarousel({ reviews }: { reviews: ReviewItem[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full max-w-5xl mx-auto px-2 sm:px-10"
    >
      <CarouselContent className="-ml-4">
        {reviews.map((r, i) => (
          <CarouselItem
            key={`${r.author}-${i}`}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <article className="h-full bg-gray-50 rounded-xl border border-gray-100 p-6 text-left flex flex-col">
              <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-sm text-gray-900">{r.author}</p>
              {r.service ? (
                <p className="text-xs text-gray-500">{r.service}</p>
              ) : null}
              <p className="text-xs text-gray-400">{r.date}</p>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

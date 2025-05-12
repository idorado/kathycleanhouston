"use client"

import { useQuery } from '@tanstack/react-query'
import { client } from "@/lib/client"
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const sampleTestimonials = [
  {
    id: "1",
    quote: "Kathy Clean is great service at a fair price point. Communication is always timely and easy to make schedules around as needed. If something is ever missed there is always an option for a reclean to make it right which I have only had to ask for one time and it was partially my fault because I didn't realize leaving a door closed was code for skip this area. I highly recommend Kathy Clean!",
    author: "Alysha Deaver",
    rating: 5
  },
  {
    id: "2",
    quote: "I was referred by a neighbor. Kathy Clean was very professional and it set an appt to start on a cleaning schedule w/in a few days. Person came yesterday and did an absolutely AMAZING job. You can tell she took great pride in what she does. Very professional. I was very impressed.",
    author: "Donna Whalen",
    rating: 5
  },
  {
    id: "3",
    quote: "Kathy Clean did a 5 star job! The floors and bathroom were spotless, the kitchen squicky clean, and the house smelled amazing. She even went above and beyond and cleaned the baseboards",
    author: "Jessica Dukart",
    rating: 5
  }
]

export function Testimonial() {
  const { data: testimonials, isPending } = useQuery({
    queryKey: ["testimonials-recent"],
    queryFn: async () => {
      try {
        const res = await client.testimonials.recent.$get();
        return res.json()
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        return sampleTestimonials;
      }
    },
    initialData: sampleTestimonials
  })

  if (isPending) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
            <span className="text-sm text-muted-foreground">Loading testimonials...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-12 flex flex-col items-center">
      {testimonials && testimonials.length > 0 ? (
        <div className="w-full">
          <Carousel 
            className="w-full max-w-full md:max-w-4xl lg:max-w-6xl"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            plugins={[AutoPlay({ delay: 2000 })]}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-[500px] flex flex-col relative overflow-hidden">
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">{testimonial.quote}</p>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-semibold text-lg">{testimonial.author[0]}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">Satisfied Customer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#00ffff] hover:bg-[#00e0e0] border-none" />
            <CarouselNext className="bg-[#00ffff] hover:bg-[#00e0e0] border-none" />
          </Carousel>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No testimonials available at the moment.</p>
        </div>
      )}
    </div>
  )
}

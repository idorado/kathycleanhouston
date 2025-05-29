"use client"
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import AutoPlay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Link from "next/link"

const testimonials = [
  {
    id: "fe6c0a96-0add-4234-beca-42bbd7597fd8",
    quote: "I have been with Kathy Clean for years and am totally happy.  They do a great job and I'm highly satisfied.  I would recommend their service!",
    author: "nonya durham",
    role: "Homeowner",
    service: "Residential Cleaning",
    created_at: "2025-03-10 16:35:24.187303+00",
    updated_at: "2025-03-10 16:35:24.187303+00"
  },
  {
    id: "4ef1a912-a011-4cff-bb06-106ddecc7f29",
    quote: "Service is outstanding, the help is professional, courteous and always on time for scheduled cleaning.  I would give Kathy Clean my highest recommendation, you'll be very pleased!",
    author: "Steve Mahlstadt",
    role: "",
    service: "",
    created_at: "2025-04-22 16:24:27+00",
    updated_at: "2025-04-22 16:24:30+00"
  },
  {
    id: "9fbe59dc-8a15-4b81-87ce-5089ca91c437",
    quote: "I've been using Kathy Clean for years and can’t imagine using any other cleaning service. Everyone I've interacted with—whether it's the office staff or the cleaners—has been friendly, professional, and flexible. They always match you with the right person for your home cleaning needs, and they genuinely care about making sure you're happy with the service. I certainly am. They’re the best I've ever used, and my daughter has been using them for years as well.",
    author: "Judy Hawkins",
    role: "",
    service: "",
    created_at: "2025-03-10 16:35:24.187303+00",
    updated_at: "2025-03-10 16:35:24.187303+00"
  },
  {
    id: "752e2df4-8436-471c-a60b-6ab2dc94d686",
    quote: "I was referred to Kathy Clean by a neighbor. They were very professional, and I was able to schedule an appointment to start a regular cleaning service within just a few days. The person who came yesterday did an absolutely AMAZING job. You could really tell she took great pride in her work. Very professional, and I was truly impressed.",
    author: "Donna Whalen",
    role: "",
    service: "",
    created_at: "2025-03-10 16:35:24.187303+00",
    updated_at: "2025-03-10 16:35:24.187303+00"
  },
  {
    id: "51e43889-ccbc-4a21-a007-42495e2bbbab",
    quote: "Alicia has always done a great job",
    author: "Gordon Harvey",
    role: "",
    service: "",
    created_at: "2025-03-10 16:35:24.187303+00",
    updated_at: "2025-03-10 16:36:30+00"
  },
  {
    id: "6cc7ae1b-3b56-41b8-bb15-680068f1350d",
    quote: "Want the best cleaning service in town? Then you want to call Kathy Clean!! They will provide you with outstanding service, and they are very easy to work with.",
    author: "Kerri Norris",
    role: "",
    service: "",
    created_at: "2025-03-10 16:35:24.187303+00",
    updated_at: "2025-03-10 16:35:24.187303+00"
  }
]

export function Testimonial() {

  return (
    <div className="w-full py-12 flex flex-col items-center">
      <Carousel 
        className="w-full max-w-full md:max-w-2xl lg:max-w-3xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        plugins={[AutoPlay({ delay: 2500 })]}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card className="h-auto min-h-[220px] flex flex-col shadow-md">
                <CardContent className="pt-4 pb-4 px-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[15px] text-gray-700 leading-snug mb-4 line-clamp-5">{testimonial.quote}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-base">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base leading-tight">{testimonial.author}</h4>
                      <p className="text-xs text-gray-500">Satisfied Customer</p>
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
      <Button
        variant="default"
        className="mt-6 font-medium mx-auto"
        asChild
      >
        <Link href="/request-quote">REQUEST A QUOTE</Link>
      </Button>
    </div>
  )
}
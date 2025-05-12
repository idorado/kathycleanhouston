"use client"

import { Testimonial as CarouselTestimonial } from "@/components/cards/testimonial"
import { Testimonial as GridTestimonial } from "@/components/cards/testimonial-grid"

export function TestimonialComparison() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonial Comparison</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Carousel Version</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <CarouselTestimonial />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Grid Version</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <GridTestimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

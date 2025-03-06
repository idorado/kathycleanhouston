"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "The deep cleaning service transformed our home. Every surface sparkled!",
    author: "Sarah M.",
    role: "Residential Client",
    service: "Deep Cleaning"
  },
  {
    quote: "Our office has never been cleaner. Reliable and professional service!",
    author: "James R.",
    role: "Business Manager",
    service: "Commercial Cleaning"
  },
  {
    quote: "They handled our post-construction cleanup perfectly. Highly recommend!",
    author: "Emily T.",
    role: "Homeowner",
    service: "Move-In/Move-Out"
  },
  {
    quote: "The medical facility cleaning meets all health regulations. Impressive!",
    author: "Dr. Lisa P.",
    role: "Clinic Director",
    service: "Medical Cleaning"
  }
]

export function Testimonial() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Customer Experiences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
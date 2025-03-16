"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { Star } from 'lucide-react'
import { client } from "@/lib/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonial() {
  const { data: testimonials, isPending } = useQuery({
    queryKey: ["testimonials-recent"],
    queryFn: async () => {
      const res = await client.testimonials.recent.$get();
      return res.json()
    },
  })

  if (isPending) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
            <span className="text-sm text-muted-foreground">Loading testimonials...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {testimonials && testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-base italic mb-2">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  { (
                    <Avatar className="size-10">
                      <AvatarImage 
                        src={`https://xsgames.co/randomusers/avatar.php?g=${testimonial.author.includes("Michael") || testimonial.author.includes("Jessica") || testimonial.author.includes("Maria") || testimonial.author.includes("Samantha") ? "female" : "male"}`}
                        alt={`${testimonial.author} avatar`}
                      />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded inline-block mt-1">{testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials available.</p>
        )}
      </CardContent>
    </Card>
  )
}
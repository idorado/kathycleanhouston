"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { toast } from "sonner"
import { CtaButton } from "@/components/ui/CtaButton"

type EmergencyService = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const emergencyServices: EmergencyService[] = [
  {
    id: "graffiti-removal",
    title: "Graffiti Removal",
    description: "Restore your property's appearance with fast and effective graffiti removal.",
    imageSrc: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomCShrjvWmdS94e3Vt5PNnp8hM7jiI6fuBvsZx"
  },
  {
    id: "biohazard-sanitization",
    title: "Biohazard & Sanitization",
    description: "Ensure safety and compliance with professional biohazard cleanup and deep sanitization.",
    imageSrc: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomfUAvHgMOIyEW8fnCaPxAMTFk0iZhHrQ5NVgb"
  },
  {
    id: "emergency-restroom-cleaning",
    title: "Emergency Restroom Cleaning",
    description: "Rapid response cleaning to keep restrooms hygienic and ready for use at all times.",
    imageSrc: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUR3wKxuxbLyY5TVln2vGePNI6BEHMuo4rXcz"
  }
]

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function EmergencyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Your request has been sent! We'll contact you shortly.")
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency Cleanings</h1>
              <p className="text-lg text-gray-600 mb-6">
                You work hard, so let us handle the cleaning. Enjoy a spotless home and spend your time on what truly matters.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900" asChild>
                <CtaButton href="/request-quote">REQUEST A SERVICE</CtaButton>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNUx2HkE8Qqho34HzWAgdjRlcDPJntsL1f2TI" 
              alt="Professional emergency cleaning service" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Emergency Cleanings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Emergency Cleanings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <div key={service.id} className="flex flex-col">
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    width={500} 
                    height={400}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <section id="request-quote" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Quote</h2>
            <p className="text-gray-600 mb-8">
              For more than a decade, we've been delivering spotless, streak-free windows to homes and businesses. From our humble beginnings as Kathy's Services, we now operate under Kathy Clean, continuing our commitment to excellence with the same trusted quality and expertise.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your question or message" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  )
}

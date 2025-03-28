import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator"
import Image from "next/image"
import Link from "next/link"
import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      
      <section className="relative bg-primary py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-ring">
                Clean <span className="text-secondary">Spaces</span>,<br />
                <span className="text-secondary">Brighter </span>Lives
              </h1>
              <p className="text-lg">
                We transform spaces into welcoming, safe, and productive environments where people thrive.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-ring hover:bg-ring/90 text-primary font-bold">
                  CONTACT US
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image 
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8WFaPuKhMCiFKE7nTrZgcpJWtXBskwHlzmqf" 
                alt="Professional cleaning service" 
                height={500}
                width={600}
                className="relative z-10"
              />
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16 text-fluorescent-cyan">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative star shape" role="img">
                  <title>Decorative star</title>
                  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                </svg>
              </div>
              <div className="absolute bottom-20 left-0 w-10 h-10 text-fluorescent-cyan">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative circle shape" role="img">
                  <title>Decorative circle</title>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="absolute bottom-10 right-20 w-8 h-8 text-fluorescent-cyan">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative small circle shape" role="img">
                  <title>Small decorative circle</title>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-20 right-[5%] w-32 h-32 text-fluorescent-cyan opacity-80">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative large star shape" role="img">
            <title>Large decorative star</title>
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-[10%] w-20 h-20 text-fluorescent-cyan opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative medium star shape" role="img">
            <title>Medium decorative star</title>
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
        </div>
      </section>

      <OurServices />

      <WhyChooseUs />


      {/* Customer Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Experiences</h2>
          <Testimonial />
        </div>
      </section>

    </main>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator"
import Image from "next/image"
import Link from "next/link"
import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import HeroSection from "@/components/HeroSection"

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      
      <HeroSection>
        <div className="space-y-4 md:space-y-6 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            Clean <span className="text-background">Spaces</span>,<br />
            <span className="text-background">Brighter </span>Lives
          </h1>
          <p className="text-base sm:text-lg">
            We transform spaces into welcoming, safe, and productive environments where people thrive.
          </p>
          <div className="pt-4">
            <Button size="lg" className="font-bold w-full sm:w-auto">
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block w-full h-full">
          <Image 
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu" 
            alt="Professional cleaning service" 
            width={400}
            height={400}
            className="relative w-full h-full object-cover rounded-lg "
          />
        </div>
      </HeroSection>

      <OurServices />

      <WhyChooseUs />


      {/* Customer Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Experiences</h2>
          <Testimonial />
        </div>
      </section>

    </main>
  )
}

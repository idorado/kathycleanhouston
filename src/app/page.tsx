import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import HomeHero from "@/components/sections/home-hero"

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />

      <OurServices />

      <WhyChooseUs />

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Experiences</h2>
          <Testimonial />
        </div>
      </section>

    </main>
  )
}

import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ServiceSelector } from "@/components/sections/service-selector"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSelector />
      <ServicesSection />
    </>
  )
}

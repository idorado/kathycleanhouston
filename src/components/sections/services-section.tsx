import { ServiceCard } from "@/components/cards/service-card"
import { Button } from "@/components/ui/button"
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceCalculator } from "@/components/tools/price-calculator"
import { FAQ } from "@/components/sections/faq"
import { Testimonial } from "@/components/cards/testimonial"
import Image from "next/image"

export const services = [
  {
    title: "Standard House Cleaning",
    description: "Comprehensive 50-step cleaning process covering all key areas.",
    category: "residential",
    price: "Starting at $100",
    features: [
      "Kitchen deep clean",
      "Bathroom sanitization",
      "Bedroom and living area dusting",
      "Eco-friendly options available"
    ]
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning beyond standard service for a spotless home.",
    category: "residential",
    price: "Starting at $200",
    features: [
      "All standard cleaning tasks",
      "Inside cabinet cleaning",
      "Baseboards and crown molding",
      "Window sill and rail cleaning"
    ]
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description: "Detailed cleaning for smooth property transitions.",
    category: "residential",
    price: "Starting at $250",
    features: [
      "Deep clean of all rooms",
      "Appliance interior cleaning",
      "Wall spot cleaning",
      "Coordination with real estate agents"
    ]
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning for a productive work environment.",
    category: "commercial",
    price: "Custom quote",
    features: [
      "Workstation sanitization",
      "Common area cleaning",
      "After-hours scheduling",
      "Restroom deep clean"
    ]
  },
  {
    title: "Retail Space Cleaning",
    description: "Enhance customer experience with a spotless retail environment.",
    category: "commercial",
    price: "Custom quote",
    features: [
      "Floor care (sweeping, mopping, vacuuming)",
      "Display and showcase cleaning",
      "Entrance and window cleaning",
      "Restroom sanitation"
    ]
  },
  {
    title: "Medical Facility Cleaning",
    description: "Specialized cleaning adhering to strict health regulations.",
    category: "commercial",
    price: "Custom quote",
    features: [
      "Hospital-grade disinfection",
      "Compliance with health codes",
      "Specialized protocols",
      "Proper medical waste handling"
    ]
  }
] as const

export async function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Residential and Commercial Cleaning Services in Houston and Surroundings</h2>
          <p className="text-lg text-gray-600 mb-6">
            With over 10 years of experience, we deliver top-quality cleaning services
            backed by our 48-hour satisfaction guarantee. Our rigorous cleaning standards
            and eco-friendly options ensure a healthy, sparkling clean environment.
          </p>
        </div>

        <Tabs defaultValue="residential" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="residential">Residential Services</TabsTrigger>
            <TabsTrigger value="commercial">Commercial Services</TabsTrigger>
          </TabsList>
          <TabsContent value="residential">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === "residential")
                .map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="commercial">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === "commercial")
                .map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li>Window Cleaning</li>
            <li>Carpet and Upholstery Cleaning</li>
            <li>Refrigerator and Oven Interior Cleaning</li>
            <li>Linen Changing Service</li>
            <li>Post-Construction Cleaning</li>
            <li>Special Event Cleaning</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Service Frequency Options</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="bg-white p-3 rounded shadow">One-time cleaning</li>
            <li className="bg-white p-3 rounded shadow">Weekly service</li>
            <li className="bg-white p-3 rounded shadow">Bi-weekly service</li>
            <li className="bg-white p-3 rounded shadow">Monthly service</li>
            <li className="bg-white p-3 rounded shadow">Custom scheduling</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Pricing</h3>
          <p className="mb-4">
            Our pricing is transparent and based on factors such as square footage,
            service type, and frequency. Use our calculator for an estimate:
          </p>
          <PriceCalculator />
          <p className="mt-4">
            For accurate pricing, please request a quote for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Customer Testimonials</h3>
            <Testimonial/>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-12">Before & After</h3>
            <div className="relative h-64">
              <Image
                src="/images/before-after-cleaning.jpg"
                alt="Before and after cleaning comparison"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <FAQ />

        <div className="text-center mt-12">
          <RequestQuoteButton location="location_components_sections_services_section" />
          <Button variant="outline" size="lg" className="ml-4">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

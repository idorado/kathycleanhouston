"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface HouseCleaningFAQProps {
  location?: string;
}

const faqItems = [
  {
    question: 'What cleaning services do you offer in {Location}?',
    answer: `Kathy Clean provides professional house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, commercial cleaning, and window cleaning in {Location} and nearby areas. Whether you need a one-time cleaning or recurring service, we’ll make your space shine.`
  },
  {
    question: 'How much does cleaning cost in {Location}?',
    answer: `Pricing depends on your home’s size, condition, and cleaning type.
For reference, a 2,000 sq ft home in {Location} typically costs around $189 for monthly cleaning or $155 for weekly service.
Deep cleans and move-out services are priced individually based on scope.`
  },
  {
    question: 'Do you offer both residential and commercial cleaning in {Location}?',
    answer: `Yes. We clean houses, apartments, offices, clinics, gyms, salons, and retail spaces throughout {Location}. Each client gets a customized cleaning checklist and flexible scheduling.`
  },
  {
    question: 'Are you licensed, bonded, and insured in {Location}?',
    answer: `Absolutely. Kathy Clean is fully licensed, bonded, and insured in the state of Colorado. We protect your home, our cleaners, and your business for complete peace of mind.`
  },
  {
    question: 'Do you bring cleaning supplies and equipment?',
    answer: `Yes. Our cleaners come fully equipped with professional-grade supplies and tools. If you prefer eco-friendly products, just let us know—we offer green cleaning options safe for kids and pets.`
  },
  {
    question: 'Do you offer move-in or move-out cleanings in {Location}?',
    answer: `Yes. We specialize in move-in/move-out cleanings for tenants, landlords, and homeowners across {Location}. The service includes inside appliances, drawers, cabinets, and baseboards to ensure every space is spotless.`
  },
  {
    question: 'Do you clean after construction or remodeling projects in {Location}?',
    answer: `Yes. Our post-construction cleaning removes dust, debris, and paint residue from renovations or new builds. We work with homeowners, contractors, and builders throughout {Location}.`
  },
  {
    question: 'Do you clean windows in {Location}?',
    answer: `Yes. We offer interior and exterior window cleaning for homes, offices, and buildings across {Location}. Add window cleaning to your house or commercial service for a complete shine.`
  },
  {
    question: 'Are your cleaners background checked and trained?',
    answer: `Yes. Every cleaner in {Location} passes a full background check and receives hands-on training. We only hire trustworthy professionals who meet our standards of quality and reliability.`
  },
  {
    question: 'Can I schedule recurring cleaning in {Location}?',
    answer: `Yes. Choose from weekly, bi-weekly, or monthly cleaning. Many clients in {Location} prefer bi-weekly—it’s the best balance between cost and consistency.`
  },
  {
    question: 'Do you serve apartments and condos in {Location}?',
    answer: `Yes. We clean condos, lofts, and apartments, including high-rise buildings in central {Location}. Most clients share access instructions (door codes, concierge, or key) for convenience.`
  },
  {
    question: 'Do you offer discounts for recurring services?',
    answer: `Yes. Clients with weekly or bi-weekly service receive discounted pricing and priority scheduling. Regular cleanings keep your space in great condition and lower long-term costs.`
  },
  {
    question: 'What if I’m not satisfied with my cleaning?',
    answer: `Your satisfaction is guaranteed. If something wasn’t cleaned properly, contact us within 48 hours and we’ll re-clean the area at no extra cost.`
  },
  {
    question: 'How can I get a cleaning quote in {Location}?',
    answer: `You can request a free quote at kathyclean.com or call (346) 488-6044.
We’ll confirm your details and send a customized estimate—usually within minutes.`
  }
]

export function HouseCleaningFAQ({ location = 'Denver' }: HouseCleaningFAQProps) {
  // Replace {Location} placeholder with actual location
  const processedFaqItems = faqItems.map(item => ({
    question: item.question.replace(/{Location}/g, location),
    answer: item.answer.replace(/{Location}/g, location)
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Card className="w-full">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {processedFaqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

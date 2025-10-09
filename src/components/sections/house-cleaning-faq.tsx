"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface HouseCleaningFAQProps {
  location?: string;
}

const faqItems = [
  {
    question: `How much does house cleaning cost in {Location}?`,
    answer: `House cleaning prices in {Location} vary depending on your home's size and frequency. For example, a 2,000 sq ft home usually costs around $189 for monthly cleaning or $155 for weekly service. Request your custom quote today!`
  },
  {
    question: 'Do you offer one-time and recurring cleaning?',
    answer: `Yes! Choose from one-time, weekly, bi-weekly, or monthly cleanings. Most of our {Location} clients prefer bi-weekly. It keeps homes consistently clean and is more affordable long-term.`
  },
  {
    question: "What's the difference between a deep clean and a regular clean?",
    answer: "A deep clean covers hard-to-reach areas like baseboards, vents, and behind furniture. It's ideal before starting a recurring plan, after long gaps, or before special occasions."
  },
  {
    question: `Do you offer move-in and move-out cleanings in {Location}?`,
    answer: `Yes. We handle move-in and move-out cleanings for tenants, landlords, and homeowners across {Location}. These include inside cabinets, drawers, and appliances—everything you need for a fresh start.`
  },
  {
    question: 'Will I always get the same cleaner?',
    answer: 'We aim to send the same cleaner for every visit. When substitutions are needed, we\'ll inform you and make sure your cleaning preferences are fully shared with the replacement.'
  },
  {
    question: 'Do you offer eco-friendly cleaning?',
    answer: 'Yes. If you prefer green cleaning products, just let us know—we have safe, non-toxic options for homes with kids and pets.'
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

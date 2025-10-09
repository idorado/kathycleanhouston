"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface WindowCleaningFAQProps {
  location?: string;
}

const faqItems = [
  {
    question: 'Do you offer residential and commercial window cleaning in {Location}?',
    answer: 'Yes. We clean windows for homes, offices, storefronts, and buildings throughout {Location}.'
  },
  {
    question: 'Do you clean inside and outside windows?',
    answer: 'Yes, our window cleaning includes both sides of the glass, plus tracks and sills. We also offer interior-only cleaning for multi-story homes.'
  },
  {
    question: 'How often should I clean my windows?',
    answer: 'Most {Location} homeowners schedule window cleaning twice per year, while commercial clients often prefer weekly service for best appearance.'
  },
  {
    question: 'Do you clean hard-to-reach or high windows?',
    answer: 'Yes, we use professional extension poles and safety systems for high or hard-to-reach windows.'
  },
  {
    question: 'Can window cleaning be added to a house cleaning?',
    answer: 'Definitely! Many clients in {Location} bundle window cleaning with their deep or move-in/out service for a full home refresh.'
  },
  {
    question: 'Do you use eco-friendly products for window cleaning?',
    answer: 'Yes, all our solutions are non-toxic and safe for pets, plants, and tinted glass.'
  }
]

export function WindowCleaningFAQ({ location = 'Denver' }: WindowCleaningFAQProps) {
  // Replace {Location} placeholder with actual location
  const processedFaqItems = faqItems.map(item => ({
    question: item.question.replace(/{Location}/g, location),
    answer: item.answer.replace(/{Location}/g, location)
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Card className="w-full">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {processedFaqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-gray-600">
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

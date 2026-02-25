"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface CommercialCleaningFAQProps {
  location?: string;
}

const faqItems = [
  {
    question: `What types of commercial spaces do you clean in {Location}?`,
    answer: `We clean offices, clinics, gyms, retail stores, schools, and other commercial buildings throughout {Location}. Each facility receives a tailored scope of service.`
  },
  {
    question: 'Do you provide cleaning after business hours?',
    answer: 'Yes. We offer evening and weekend cleaning schedules so your operations continue uninterrupted.'
  },
  {
    question: 'Are you insured for commercial clients?',
    answer: 'Absolutely. We carry General Liability insurance. Many of our clients request Certificates of Insurance (COIs)—we\'ll gladly provide one.'
  },
  {
    question: 'Can I have the same crew every time?',
    answer: 'Whenever possible, we coordinate for a consistent service experience for familiarity and security.'
  },
  {
    question: 'Do you offer recurring janitorial services?',
    answer: 'Yes. You can choose daily, weekly, or bi-weekly cleaning plans depending on your facility\'s traffic and needs.'
  }
]

export function CommercialCleaningFAQ({ location = 'Houston' }: CommercialCleaningFAQProps) {
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

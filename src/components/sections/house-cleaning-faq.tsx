"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface HouseCleaningFAQProps {
  location?: string;
}

const faqItems = [
  {
    question: "How much does house cleaning cost in {Location}?",
    answer: "Pricing is flat-rate and depends on your home's size and cleaning type. For reference, a 1,500\u20132,000 sq ft home in {Location} typically costs $129/visit for weekly service, $145/visit for bi-weekly, or $179/visit for monthly. Deep cleans and move-in/out services start at $415 for the same size. Prices do not include Sales Tax (8.25%). Get your exact quote free at kathycleanhouston.com/request-quote."
  },
  {
    question: "What cleaning services do you offer in {Location}?",
    answer: "We offer recurring house cleaning (weekly, bi-weekly, monthly), one-time deep cleaning, move-in/move-out cleaning, and post-construction cleaning in {Location} and nearby areas. Whether you need a regular schedule or a one-time refresh, we'll make your space shine."
  },
  {
    question: "Are you licensed, bonded, and insured in {Location}?",
    answer: "Absolutely. Kathy Clean Houston is fully licensed, bonded, and insured. We protect your home and our cleaners for complete peace of mind."
  },
  {
    question: "Can I schedule recurring cleaning in {Location}?",
    answer: "Yes. Choose from weekly, bi-weekly, or monthly cleaning. Many clients in {Location} prefer bi-weekly\u2014it's the best balance between cost and consistency. Most new clients are scheduled within 3\u20135 business days."
  },
  {
    question: "Do you offer discounts for recurring services?",
    answer: "Yes. Clients with weekly or bi-weekly service receive discounted pricing compared to one-time cleans. Weekly service offers the most savings per visit."
  },
  {
    question: "What if I'm not satisfied with my cleaning?",
    answer: "Your satisfaction is guaranteed. If something wasn't cleaned properly, contact us within 48 hours and we'll re-clean the area at no extra cost."
  },
  {
    question: "How can I get a cleaning quote in {Location}?",
    answer: "Request a free quote at kathycleanhouston.com/request-quote or call (346) 488-6044. We'll confirm your details and send a customized estimate\u2014usually within minutes."
  }
]

export function HouseCleaningFAQ({ location = "Houston" }: HouseCleaningFAQProps) {
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

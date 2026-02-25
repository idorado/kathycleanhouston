"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const faqItems = [
  {
    question: "What cleaning services does Kathy Clean Houston offer in the Houston area?",
    answer: "We provide house cleaning, deep cleaning, move in & move out cleaning, post-construction cleaning, and commercial cleaning across Houston, Spring Branch, The Heights, Upper Kirby, and nearby areas."
  },
  {
    question: "Is Kathy Clean Houston licensed, bonded, and insured in Texas?",
    answer: "Yes! Kathy Clean Houston is fully licensed, bonded, and insured for residential and commercial cleaning throughout Texas. We'll gladly provide a Certificate of Insurance upon request."
  },
  {
    question: "How do I get a quote for cleaning services near Houston?",
    answer: "You can request a free, no-obligation quote directly on our website or by calling (346) 488-6044. We'll confirm your address, service type, and home size to give you an exact estimate."
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer: "Cleaning professionals arrive prepared for the service. If you prefer eco-friendly products or have your own products, we're happy to use them."
  },
  {
    question: "Do you offer discounts for recurring cleaning?",
    answer: "Absolutely. Our weekly and bi-weekly clients enjoy discounted rates and priority scheduling—helping you save money while keeping your home spotless year-round."
  },
  {
    question: "Which areas do you serve?",
    answer: "We serve Houston, Spring Branch, The Heights, Upper Kirby, Memorial, Uptown, Bellaire, Medical Center and surrounding communities."
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is guaranteed. If something wasn't cleaned to your expectations, let us know within 48 hours and we'll re-clean the area at no extra cost."
  },
  {
    question: "What makes Kathy Clean Houston different?",
    answer: "We focus on reliability, consistency, and communication. Whenever possible, we aim for a familiar service experience, responsive scheduling support, and quality guaranteed after every visit."
  }
]

interface FAQProps {
  hideTitle?: boolean;
}

export function FAQ({ hideTitle = false }: FAQProps) {
  return (
    <Card className="w-full">
      {!hideTitle && (
        <CardHeader>
          <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
        </CardHeader>
      )}
      <CardContent className={hideTitle ? 'pt-6' : ''}>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
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
  )
}
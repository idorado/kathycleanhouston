// FAQ data for the Houston house-cleaning page. Kept in a plain (non-"use client")
// module so it can be imported by BOTH the client FAQ accordion component and the
// server component that emits the FAQPage JSON-LD. {Location} is substituted at render.

export const houseCleaningFaqItems = [
  {
    question: "How much does house cleaning cost in {Location}?",
    answer:
      "Pricing is flat-rate and depends on your home's size and cleaning type. For reference, a 1,500–2,000 sq ft home in {Location} typically costs $145/visit for weekly service, $159/visit for bi-weekly, or $179/visit for monthly. Deep cleans and move-in/out services start at $359 for the same size. Prices do not include Sales Tax (8.25%). Get your exact quote free at kathycleanhouston.com/request-quote.",
  },
  {
    question: "What cleaning services do you offer in {Location}?",
    answer:
      "We offer recurring house cleaning (weekly, bi-weekly, monthly), one-time deep cleaning, move-in/move-out cleaning, and post-construction cleaning in {Location} and nearby areas. Whether you need a regular schedule or a one-time refresh, we'll make your space shine.",
  },
  {
    question: "Are you licensed, bonded, and insured in {Location}?",
    answer:
      "Absolutely. Kathy Clean Houston is fully licensed, bonded, and insured. We protect your home and our cleaners for complete peace of mind.",
  },
  {
    question: "Can I schedule recurring cleaning in {Location}?",
    answer:
      "Yes. Choose from weekly, bi-weekly, or monthly cleaning. Many clients in {Location} prefer bi-weekly—it's the best balance between cost and consistency. Most new clients are scheduled within 3–5 business days.",
  },
  {
    question: "Do you offer discounts for recurring services?",
    answer:
      "Yes. Clients with weekly or bi-weekly service receive discounted pricing compared to one-time cleans. Weekly service offers the most savings per visit.",
  },
  {
    question: "What if I'm not satisfied with my cleaning?",
    answer:
      "Your satisfaction is guaranteed. If something wasn't cleaned properly, contact us within 48 hours and we'll re-clean the area at no extra cost.",
  },
  {
    question: "How can I get a cleaning quote in {Location}?",
    answer:
      "Request a free quote at kathycleanhouston.com/request-quote or call (346) 488-6044. We'll confirm your details and send a customized estimate—usually within minutes.",
  },
];

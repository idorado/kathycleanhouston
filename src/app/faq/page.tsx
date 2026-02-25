import React from "react";

const faqs = [
  {
    question: "Are you licensed, bonded and insured?",
    answer:
      "Yes! We’re fully covered to protect you and our company. Need proof? Just ask, and we’ll provide a certificate.",
  },
  {
    question: "How many people will clean my home?",
    answer: "Usually, one. Sometimes two. If you have a preference, let us know!",
  },
  {
    question: "Will I always have the same cleaner(s)?",
    answer:
      "We know how important it is to have a familiar face providing service in your home. While occasional changes can happen due to schedule adjustments, we aim for a consistent experience visit after visit. No matter who arrives, we prioritize thorough, consistent results every time.",
  },
  {
    question: "How do you ensure consistent service quality?",
    answer:
      "We prioritize consistent service quality. If something doesn’t meet expectations, we address it promptly.",
  },
  {
    question: "Can you clean high-up areas and behind furniture?",
    answer:
      "Yes, but with limits. For safety reasons, we don’t lift anything over 35 lbs. If you’d like under heavy items cleaned, please move them before we arrive.",
  },
  {
    question: "Are service professionals background checked?",
    answer:
      "Yes. Service professionals are background checked for your peace of mind.",
  },
  {
    question: "Do service professionals speak English?",
    answer:
      "Not all service professionals speak English, but we’ve got you covered. If you ever have a specific request or concern, just let us know—we’ll make sure everything is clear and taken care of.",
  },
  {
    question: "How does service access work? Do I have to be home?",
    answer:
      "Your call! You can be there, leave a key with us (we store it securely), provide a garage code, or arrange another method. If you have an alarm system, you can give us instructions—or simply turn it off for the day.",
  },
  {
    question: "Arrival Notice & Access to Your Home",
    answer:
      "We’ll send you an email reminder one week before your cleaning with an estimated arrival time. While we do our best to stick to it, schedule changes, traffic, or weather may cause slight delays—but don’t worry, we keep you updated!\n\nOur scheduling system keeps appointments organized and transparent. If you ever need an update, just reach out!",
  },
  {
    question: "How do I pay for your services?",
    answer:
      "We accept cash, checks, and major credit cards (Visa, MasterCard, Amex). Payment is due at the time of service. For one-time cleanings, a credit card is required at booking.",
  },
  {
    question: "Do you offer Refunds?",
    answer:
      "We don’t offer refunds, but we stand by our work. If something isn’t right, let us know within 48 hours, and we’ll re-clean the area at no extra cost.",
  },
  {
    question: "What is the cost of my cleaning?",
    answer:
      "Pricing is based on your home and needs. We provide free estimates—by phone, email, or in-person. First-time or deep cleanings may cost more.",
  },
  {
    question: "Is tipping expected?",
    answer:
      "Tips aren’t required, but always appreciated! If you love the service, a small tip is a great way to say thanks.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Life happens! Just give us a heads-up if you need to reschedule. If you cancel after only one cleaning from a recurring plan, you’ll be charged the one-time cleaning rate.",
  },
  {
    question: "What if my cleaning falls on a holiday?",
    answer:
      "We observe New Year’s Day, Memorial Day, July 4th, Labor Day, Thanksgiving, and Christmas. If your cleaning lands on one of these, we’ll contact you to reschedule.",
  },
  {
    question: "What if my cleaning falls when I am on vacation?",
    answer:
      "Let us know! Just reply to your reminder email or call us to adjust your schedule.",
  },
  {
    question: "How do I provide feedback on my cleanings?",
    answer:
      "We love hearing from you! Call, email, or use the feedback form on our website. Your input helps us improve.",
  },
  {
    question: "How should I schedule appointments?",
    answer:
      "For service coordination purposes, appointments should be scheduled through Kathy Clean.",
  },
  {
    question: "What if something gets damaged?",
    answer:
      "Accidents are rare, but they can happen. We’re insured and bonded. However, we’re not liable for cash, jewelry, antiques, sentimental items, or electronics. Please secure valuable or fragile items before we arrive.",
  },
  {
    question: "What if I’m not happy with my cleaning?",
    answer:
      "We offer a 48-hour guarantee. If you’re not satisfied, call us within 48 hours, and we’ll re-clean the area for free.",
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="border rounded-lg p-4 bg-white shadow-sm group">
            <summary className="font-semibold cursor-pointer text-lg focus:outline-none group-open:text-primary">
              {faq.question}
            </summary>
            <div className="mt-2 text-gray-700 whitespace-pre-line">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}

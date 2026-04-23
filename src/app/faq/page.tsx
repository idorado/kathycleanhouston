import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Kathy Clean Houston",
  description: "Get answers to common questions about Kathy Clean Houston house cleaning services. Learn about our cleaning process, pricing, scheduling, and more.",
  alternates: {
    canonical: "/faq",
  },
};

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you licensed, bonded and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We're fully covered to protect you and our company. Need proof? Just ask, and we'll provide a certificate."
      }
    },
    {
      "@type": "Question",
      "name": "How many people will clean my home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually, one. Sometimes two. If you have a preference, let us know!"
      }
    },
    {
      "@type": "Question",
      "name": "Will I always have the same cleaner(s)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We know how important it is to have a familiar face providing service in your home. While occasional changes can happen due to schedule adjustments, we aim for a consistent experience visit after visit. No matter who arrives, we prioritize thorough, consistent results every time."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure consistent service quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize consistent service quality. If something doesn't meet expectations, we address it promptly."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean high-up areas and behind furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with limits. For safety reasons, we don't lift anything over 35 lbs. If you'd like under heavy items cleaned, please move them before we arrive."
      }
    },
    {
      "@type": "Question",
      "name": "Are service professionals background checked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Service professionals are background checked for your peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "Do service professionals speak English?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not all service professionals speak English, but we've got you covered. If you ever have a specific request or concern, just let us know—we'll make sure everything is clear and taken care of."
      }
    },
    {
      "@type": "Question",
      "name": "How does service access work? Do I have to be home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your call! You can be there, leave a key with us (we store it securely), provide a garage code, or arrange another method. If you have an alarm system, you can give us instructions—or simply turn it off for the day."
      }
    },
    {
      "@type": "Question",
      "name": "Arrival Notice & Access to Your Home",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We'll send you an email reminder one week before your cleaning with an estimated arrival time. While we do our best to stick to it, schedule changes, traffic, or weather may cause slight delays—but don't worry, we keep you updated! Our scheduling system keeps appointments organized and transparent. If you ever need an update, just reach out!"
      }
    },
    {
      "@type": "Question",
      "name": "How do I pay for your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash, checks, and major credit cards (Visa, MasterCard, Amex). Payment is due at the time of service. For one-time cleanings, a credit card is required at booking."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Refunds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We don't offer refunds, but we stand by our work. If something isn't right, let us know within 48 hours, and we'll re-clean the area at no extra cost."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of my cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on your home and needs. We provide free estimates—by phone, email, or in-person. First-time or deep cleanings may cost more."
      }
    },
    {
      "@type": "Question",
      "name": "Is tipping expected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tips aren't required, but always appreciated! If you love the service, a small tip is a great way to say thanks."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Life happens! Just give us a heads-up if you need to reschedule. If you cancel after only one cleaning from a recurring plan, you'll be charged the one-time cleaning rate."
      }
    },
    {
      "@type": "Question",
      "name": "What if my cleaning falls on a holiday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We observe New Year's Day, Memorial Day, July 4th, Labor Day, Thanksgiving, and Christmas. If your cleaning lands on one of these, we'll contact you to reschedule."
      }
    },
    {
      "@type": "Question",
      "name": "What if my cleaning falls when I am on vacation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Let us know! Just reply to your reminder email or call us to adjust your schedule."
      }
    },
    {
      "@type": "Question",
      "name": "How do I provide feedback on my cleanings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We love hearing from you! Call, email, or use the feedback form on our website. Your input helps us improve."
      }
    },
    {
      "@type": "Question",
      "name": "How should I schedule appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For service coordination purposes, appointments should be scheduled through Kathy Clean."
      }
    },
    {
      "@type": "Question",
      "name": "What if something gets damaged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Accidents are rare, but they can happen. We're insured and bonded. However, we're not liable for cash, jewelry, antiques, sentimental items, or electronics. Please secure valuable or fragile items before we arrive."
      }
    },
    {
      "@type": "Question",
      "name": "What if I'm not happy with my cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a 48-hour guarantee. If you're not satisfied, call us within 48 hours, and we'll re-clean the area for free."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
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
    </>
  );
}

import React from "react";

const faqs = [
  {
    question: "Are you licensed, bonded and insured?",
    answer:
      "Yes! We’re fully covered to protect you, our cleaners, and our company. Need proof? Just ask, and we’ll provide a certificate.",
  },
  {
    question: "How many people will clean my home?",
    answer: "Usually, one. Sometimes two. If you have a preference, let us know!",
  },
  {
    question: "Will I always have the same cleaner(s)?",
    answer:
      "We know how important it is to have a familiar face cleaning your home. That’s why we have a low turnover and strive to send the same cleaner(s) every time. While occasional changes happen due to vacations or schedule adjustments, most of our customers see the same trusted team visit after visit. No matter who comes, rest assured they’re trained to our high standards, ensuring top-notch service every time.",
  },
  {
    question: "Are your cleaners trained?",
    answer:
      "Absolutely! Every team member gets hands-on training and ongoing supervision. If someone doesn’t meet our standards, they don’t stay with us.",
  },
  {
    question: "Can you clean high-up areas and behind furniture?",
    answer:
      "Yes, but with limits. Our cleaners use long dusters for high spots. We’ll clean behind furniture if it’s easy to move, but we don’t lift anything over 35 lbs for safety reasons. If you’d like us to clean under heavy items, please move them before we arrive.",
  },
  {
    question: "Are your cleaners legal to work in the United States?",
    answer:
      "Yes. Kathy Clean Houston only hires 100% legal workers. We also conduct full background checks on every potential new hire prior to extending a job offer.",
  },
  {
    question: "Do your cleaners speak English?",
    answer:
      "Not all of our cleaners speak English, but we’ve got you covered! Our team is equipped with the right tools and support from our office to ensure smooth communication. If you ever have a specific request or concern, just let us know—we’ll make sure everything is clear and taken care of.",
  },
  {
    question: "How do the cleaners get into my home? Do I have to be home?",
    answer:
      "Your call! You can be there, leave a key with us (we store it securely), provide a garage code, or arrange another method. If you have an alarm system, you can give us instructions—or simply turn it off for the day.",
  },
  {
    question: "Arrival Notice & Access to Your Home",
    answer:
      "We’ll send you an email reminder one week before your cleaning with an estimated arrival time. While we do our best to stick to it, last-minute schedule changes, traffic, or weather may cause slight delays—but don’t worry, we keep you updated!\n\nOur system allows us to track our cleaners in real time, so we know when they check in, check out, and if they’re on their way to your home. If you ever need an update, just reach out!",
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
    question: "Should I tip the cleaners?",
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
    question: "Can I hire your cleaner directly?",
    answer:
      "Nope! When you sign up with us, you agree not to hire our cleaners directly. We work hard to find and train great staff—please respect that.",
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

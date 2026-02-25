import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { redirect } from "next/navigation";

const title = "Reliable House Cleaning Service in Houston";
const description =
  "Looking for reliable house cleaning in Houston, TX? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.";
const canonical = "/service-areas/houston";

export const metadata = {
  title: "House Cleaning in Houston, TX",
  description,
  alternates: {
    canonical,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function HoustonServiceAreaPage() {
  redirect("/service-areas/houston");
  return (
    <LocationServiceAreaPage
      title={title}
      description={description}
      canonical={canonical}
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Houston"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> offers professional home cleaning services in Houston. From recurring maintenance cleanings to deep cleans and move-out cleanings, we focus on consistent quality so your home feels fresh, comfortable, and guest-ready week after week.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why Choose Kathy Clean Houston in Houston?"
      benefitsParagraph="We bring reliability, eco-friendly products, and consistent quality for busy Houston households."
      benefitsItems={[
        {
          title: "Reliable recurring cleaning:",
          body: "Choose weekly, bi-weekly, or monthly service to keep your home consistently clean without the stress.",
        },
        {
          title: "Eco-friendly, family-safe products:",
          body: "We use non-toxic solutions designed to be safe for families and pets while still delivering a detailed clean.",
        },
        {
          title: "Detail-focused pros who respect your home:",
          body: "Service is delivered with clear communication, attention to detail, and consistent results so you can trust the outcome every time.",
        },
      ]}
      benefitsImage={{
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa",
        alt: "Professional house cleaning service in Houston",
      }}
      whyTitle="Why House Cleaning Matters in Houston"
      whyParagraph="Keeping your Houston home clean improves comfort, supports indoor air quality, and saves time for what matters most."
      whyItems={[
        {
          title: "Helps reduce dust and allergens:",
          body: "Routine cleaning supports a healthier home by removing dust and buildup that can affect indoor air quality.",
        },
        {
          title: "Protects surfaces and finishes:",
          body: "Regular upkeep prevents grime buildup and helps extend the life of floors, counters, and fixtures.",
        },
        {
          title: "Makes hosting and daily life easier:",
          body: "A consistently clean home feels better day-to-day and makes it simple to welcome guests at any time.",
        },
      ]}
      whyImage={{
        url: "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKerPRAhrgFAwqQ4Bx97YSaJmXiMCRycHO6sIlv",
        alt: "Cleaning Service in Houston, TX",
      }}
      faqItems={[
        {
          question: "What is included in a house cleaning in Houston?",
          answer:
            "Most cleanings include dusting, vacuuming, mopping, kitchen and bathroom sanitizing, and tidying common areas. We can customize priorities based on your home and goals.",
        },
        {
          question: "Do you offer recurring and one-time cleaning?",
          answer:
            "Yes. We offer recurring weekly/bi-weekly/monthly cleaning, as well as one-time deep cleaning and move-out cleaning depending on your needs.",
        },
        {
          question: "Do I need to provide supplies or equipment?",
          answer:
            "No. Cleaning professionals arrive prepared for the service. If you have specific product preferences, we can accommodate them when possible.",
        },
      ]}
      mapTitle="Find Us in Houston"
      mapParagraph="Serving neighborhoods such as The Heights, Memorial, River Oaks, Montrose, and surrounding areas across Houston."
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55344.694277543644!2d-95.4149766!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d1d5b%3A0x2f8ac5d5b2c5c0a6!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1765585000000!5m2!1sen!2sus"
    >
      <JsonLd data={home()} />
    </LocationServiceAreaPage>
  );
}

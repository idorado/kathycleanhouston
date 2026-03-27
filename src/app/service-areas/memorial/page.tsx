import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Memorial";
const title = `Reliable House Cleaning Service in ${locationName}`;
const description =
  `Looking for reliable house cleaning in ${locationName}, Houston? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.`;
const canonical = "/service-areas/memorial";
const area = getHoustonServiceArea("memorial");

export const metadata = {
  title: `House Cleaning in ${locationName}, Houston`,
  description:
    `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers recurring, deep & move-out cleaning with insured pros. Get a fast quote.`,
  alternates: {
    canonical,
  },
};

export default async function MemorialServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title={title}
      description={description}
      canonical={canonical}
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle={`in ${locationName}`}
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> offers professional home cleaning services in ${locationName}. From recurring maintenance cleanings to deep cleans and move-out cleanings, we focus on consistent quality so your home feels fresh, comfortable, and guest-ready week after week.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle={`Why Choose Kathy Clean Houston in ${locationName}?`}
      benefitsParagraph={`We bring reliability, eco-friendly products, and consistent quality for ${locationName} households.`}
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
        alt: `Professional house cleaning service in ${locationName}`,
      }}
      whyTitle={`Why House Cleaning Matters in ${locationName}`}
      whyParagraph={`Keeping your ${locationName} home clean improves comfort, supports indoor air quality, and saves time for what matters most.`}
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
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      locationSpecificContent={{
        title: "House Cleaning Services in Memorial for Busy Homes",
        content: `<p>Memorial homeowners juggle demanding careers, family commitments, and active social schedules. Our <a href="/house-cleaning-houston">house cleaning in Houston</a> services are designed for busy professionals who value their time. The cleaning professionals we work with understand the unique needs of Memorial's larger homes and townhomes, delivering thorough cleaning that accommodates your hectic lifestyle. Whether you're commuting downtown or managing family activities, our weekly and biweekly cleaning options ensure your home stays pristine without disrupting your schedule. We serve homes across Memorial and nearby Houston neighborhoods including <a href="/service-areas/the-memorial-villages">The Memorial Villages</a> and <a href="/service-areas/spring-branch">Spring Branch</a>, providing consistent service that adapts to your family's needs.</p><p>For Memorial families with children, we focus on creating healthy, clean environments using eco-friendly products that are safe for kids and pets. Our <a href="/recurring-house-cleaning-services">recurring house cleaning services</a> help maintain the high standards expected in Memorial homes, from regular maintenance to deep cleaning preparation for entertaining. Ready to <a href="/request-quote">request a quote</a> for reliable cleaning that fits your Memorial lifestyle?</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning That Fits Your Schedule",
        content: `<p>Recurring cleaning is the most popular choice among Memorial homeowners who want consistent results without the hassle of scheduling each visit. Choose weekly service for constantly pristine homes, biweekly cleaning for the perfect balance of cleanliness and convenience, or monthly maintenance to keep your home in top condition. The cleaning professionals we work with provide reliable scheduling and consistent quality, ensuring your Memorial home maintains its polished appearance week after week. Our recurring service includes detailed cleaning of all living areas, kitchens, and bathrooms, with attention to the specific needs of your home. Flexible scheduling makes it easy to maintain your clean home while managing your busy Memorial lifestyle.</p>`,
      }}
      faqItems={[
        {
          question: `What is included in a house cleaning in ${locationName}?`,
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
      mapTitle={`Find Us in ${locationName}`}
      mapParagraph={`Serving ${locationName} and surrounding neighborhoods across the greater Houston area.`}
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={home()} />
    </LocationServiceAreaPage>
  );
}

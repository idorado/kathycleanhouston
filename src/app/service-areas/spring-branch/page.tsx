import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Spring Branch";
const title = `Reliable House Cleaning Service in ${locationName}`;
const description =
  `Looking for reliable house cleaning in ${locationName}, Houston? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.`;
const canonical = "/service-areas/spring-branch";
const area = getHoustonServiceArea("spring-branch");

export const metadata = {
  title: `House Cleaning in ${locationName}, Houston`,
  description:
    `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers recurring, deep & move-out cleaning with insured pros. Get a fast quote.`,
  alternates: {
    canonical,
  },
};

export default async function SpringBranchServiceAreaPage() {
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
        title: "House Cleaning Services in Spring Branch for Busy Homes",
        content: `<p>Spring Branch families appreciate the perfect balance of suburban comfort and city accessibility, making it ideal for busy professionals and growing families. Our <a href="/house-cleaning-houston">house cleaning in Houston</a> services are designed for Spring Branch residents who juggle work in the Energy Corridor, downtown Houston, or local business centers while managing active household schedules. The cleaning professionals we work with understand the diverse housing in Spring Branch, from single-family homes to townhouses, delivering thorough cleaning that adapts to your family's needs. Whether you're commuting via I-10 or managing school activities along Long Point Road, our weekly and biweekly cleaning options ensure your home stays pristine without disrupting your busy routine. We serve homes across Spring Branch and nearby Houston neighborhoods including <a href="/service-areas/memorial">Memorial</a> and <a href="/service-areas/the-memorial-villages">The Memorial Villages</a>, providing consistent service that supports your family's active lifestyle.</p><p>For Spring Branch families with children and busy schedules, we focus on creating healthy, clean environments using eco-friendly products that are safe for kids and pets. Our <a href="/recurring-house-cleaning-services">recurring house cleaning services</a> help maintain your home's condition while giving you more time for family activities and the neighborhood's excellent parks and recreation. Ready to <a href="/request-quote">request a quote</a> for reliable cleaning that fits your Spring Branch lifestyle?</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning That Fits Your Schedule",
        content: `<p>Recurring cleaning is the most popular choice among Spring Branch homeowners who want consistent results without the hassle of scheduling each visit. Weekly service keeps your home perfectly maintained for busy family life and unexpected guests. Biweekly cleaning provides the ideal balance for professionals who value their weekends for family time and neighborhood activities. Monthly maintenance helps preserve your home's condition between more frequent cleanings. The cleaning professionals we work with understand the practical needs of family homes, ensuring reliable service that accommodates your schedule. Our recurring service includes detailed cleaning of all living areas, with flexible scheduling that works around your Spring Branch family commitments.</p>`,
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
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "The Memorial Villages";
const title = `Reliable House Cleaning Service in ${locationName}`;
const description =
  `Looking for reliable house cleaning in ${locationName}, Houston? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.`;
const canonical = "/service-areas/the-memorial-villages";
const area = getHoustonServiceArea("the-memorial-villages");

export const metadata = {
  title: `House Cleaning in ${locationName}`,
  description:
    `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers recurring, deep & move-out cleaning with insured pros. Get a fast quote.`,
  alternates: {
    canonical,
  },
};

export default async function TheMemorialVillagesServiceAreaPage() {
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
        title: "House Cleaning Services in The Memorial Villages for Busy Homes",
        content: `<p>The Memorial Villages communities feature some of Houston's most prestigious homes, where busy professionals and established families require exceptional cleaning service. Our <a href="/house-cleaning-houston">house cleaning in Houston</a> services are tailored for the distinctive homes in Bunker Hill, Hedwig, Hilshire, Piney Point, and Spring Valley. The cleaning professionals we work with understand the high standards expected in these luxury neighborhoods, delivering meticulous cleaning that respects your privacy and property. Whether you're managing a career in the Energy Corridor or coordinating family activities across the greater Houston area, our weekly and biweekly cleaning options maintain your home's impeccable condition. We serve homes across The Memorial Villages and nearby Houston neighborhoods including <a href="/service-areas/memorial">Memorial</a> and <a href="/service-areas/spring-branch">Spring Branch</a>, providing consistent service that matches the refined lifestyle of these exclusive communities.</p><p>For families in The Memorial Villages, we prioritize thorough cleaning using premium products that protect your fine finishes and furnishings. Our <a href="/recurring-house-cleaning-services">recurring house cleaning services</a> help maintain the pristine condition expected in these luxury homes, from regular maintenance to preparation for entertaining guests. Ready to <a href="/request-quote">request a quote</a> for cleaning service that meets the exacting standards of The Memorial Villages?</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning That Fits Your Schedule",
        content: `<p>Recurring cleaning is the preferred choice for The Memorial Villages homeowners who demand consistently exceptional results. Weekly service ensures your luxury home maintains perfect condition for any occasion, while biweekly cleaning provides the ideal balance of thorough cleaning and convenience. Monthly maintenance visits help preserve your home's pristine appearance between more frequent cleanings. The cleaning professionals we work with understand the unique requirements of luxury homes, from fine surfaces to specialty materials, ensuring every cleaning meets the high standards of The Memorial Villages communities. Our recurring service includes detailed attention to all living spaces, with flexible scheduling that accommodates your busy professional life and social commitments.</p>`,
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

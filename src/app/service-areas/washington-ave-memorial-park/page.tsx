import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Washington Ave. / Memorial Park";
const title = `Reliable House Cleaning Service in ${locationName}`;
const description =
  `Looking for reliable house cleaning in ${locationName}, Houston? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.`;
const canonical = "/service-areas/washington-ave-memorial-park";
const area = getHoustonServiceArea("washington-ave-memorial-park");

export const metadata = {
  title: `House Cleaning in Memorial Park`,
  description:
    `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers deep & move-out cleaning with insured pros. Get a fast quote.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `House Cleaning in Memorial Park`,
    description: `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers deep & move-out cleaning with insured pros. Get a fast quote.`,
    url: `https://kathycleanhouston.com${canonical}`,
  },
};

export default async function WashingtonAveMemorialParkServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title={title}
      description={description}
      canonical={canonical}
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle={`in ${locationName}`}
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> offers professional home cleaning services in the ${locationName} Houston area. From recurring maintenance cleanings to deep cleans and move-out cleanings, we focus on consistent quality so your home feels fresh, comfortable, and guest-ready week after week.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle={`Why Choose Kathy Clean Houston in ${locationName}?`}
      benefitsParagraph={`We bring reliability, eco-friendly products, and consistent quality for homes across the ${locationName} Houston area.`}
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
      whyParagraph={`Keeping your home in the ${locationName} Houston area clean improves comfort, supports indoor air quality, and saves time for what matters most.`}
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
        title: "House Cleaning Services in Washington Ave/Memorial Park for Busy Homes",
        content: `<p>Washington Ave and Memorial Park area residents enjoy one of Houston's most dynamic neighborhoods, combining urban energy with easy access to outdoor recreation. Our <a href="/house-cleaning-houston">house cleaning in Houston</a> services are perfect for active professionals and fitness enthusiasts who balance work in downtown Houston with regular visits to Memorial Park. The cleaning professionals we work with understand the modern apartments and townhomes in this area, delivering thorough cleaning that accommodates your active lifestyle. Whether you're heading to Memorial Park for your morning run or enjoying the vibrant Washington Ave nightlife, our weekly and biweekly cleaning options ensure your home stays pristine without disrupting your busy schedule. We serve homes across Washington Ave/Memorial Park and nearby Houston neighborhoods including <a href="/service-areas/greater-heights">Greater Heights</a>, providing consistent service that supports your active urban lifestyle.</p><p>For Washington Ave/Memorial Park residents who value fitness and outdoor activities, we focus on creating clean, healthy environments using eco-friendly products that complement your active lifestyle. Our <a href="/recurring-house-cleaning-services">recurring house cleaning services</a> help maintain your home's condition while giving you more time for Memorial Park workouts and neighborhood activities. Ready to <a href="/request-quote">request a quote</a> for reliable cleaning that fits your Washington Ave/Memorial Park lifestyle?</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning That Fits Your Schedule",
        content: `<p>Recurring cleaning is the ideal solution for Washington Ave/Memorial Park homeowners who want to maintain their homes while enjoying Houston's most active neighborhood. Weekly service keeps your home perfectly maintained for your active lifestyle and social gatherings. Biweekly cleaning provides the perfect balance for busy professionals who split time between work, Memorial Park activities, and exploring the area's restaurants and entertainment. Monthly maintenance helps preserve your home's condition between more frequent cleanings. The cleaning professionals we work with understand the needs of urban homes, ensuring consistent quality that accommodates your dynamic schedule. Our recurring service includes detailed cleaning of all living spaces, with flexible timing that works around your Memorial Park routine.</p>`,
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
      mapParagraph={`Serving homes across the ${locationName} Houston area.`}
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

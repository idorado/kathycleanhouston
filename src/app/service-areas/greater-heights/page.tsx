import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Greater Heights";
const title = `Reliable House Cleaning Service in ${locationName}`;
const description =
  `Looking for reliable house cleaning in ${locationName}, Houston? Kathy Clean Houston offers recurring, deep, and move-out cleaning with insured professionals and a 48-hour satisfaction guarantee. Get a fast quote.`;
const canonical = "/service-areas/greater-heights";
const area = getHoustonServiceArea("greater-heights");

export const metadata = {
  title: `House Cleaning in ${locationName}`,
  description:
    `Reliable house cleaning in ${locationName}. Kathy Clean Houston offers recurring, deep & move-out cleaning with insured pros. Get a fast quote.`,
  alternates: {
    canonical,
  },
};

export default async function GreaterHeightsServiceAreaPage() {
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
        title: "House Cleaning Services in Greater Heights for Busy Homes",
        content: `<p>Greater Heights attracts creative professionals, young families, and entrepreneurs who thrive in this vibrant Inner Loop neighborhood. Our <a href="/house-cleaning-houston">house cleaning in Houston</a> services are perfect for the active lifestyles of Heights residents who balance work in downtown Houston with enjoying the area's renowned restaurants, parks, and cultural venues. The cleaning professionals we work with understand the diverse housing styles in Greater Heights, from historic bungalows to modern townhomes, delivering thorough cleaning that adapts to your schedule. Whether you're commuting to the Medical Center or managing family activities along 19th Street, our weekly and biweekly cleaning options keep your home ready for spontaneous gatherings. We serve homes across Greater Heights and nearby Houston neighborhoods including <a href="/service-areas/washington-ave-memorial-park">Washington Ave/Memorial Park</a>, providing consistent service that matches the energetic pace of Heights living.</p><p>For Greater Heights families with active lifestyles, we focus on creating clean, healthy environments using eco-friendly products that stand up to the daily demands of urban living. Our <a href="/recurring-house-cleaning-services">recurring house cleaning services</a> help maintain the character and charm of Heights homes while supporting your busy schedule. Ready to <a href="/request-quote">request a quote</a> for reliable cleaning that fits your Greater Heights lifestyle?</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning That Fits Your Schedule",
        content: `<p>Recurring cleaning is the ideal solution for Greater Heights homeowners who want to maintain their homes while enjoying the neighborhood's active social scene. Weekly service keeps your home ready for impromptu gatherings and maintains the polished look expected in this trendy area. Biweekly cleaning provides the perfect balance for busy professionals who value their free time exploring the Heights' attractions. Monthly maintenance helps preserve your home's condition between more frequent cleanings. The cleaning professionals we work with understand the unique needs of historic and modern homes in Greater Heights, ensuring consistent quality that respects your property's character. Our recurring service includes detailed cleaning of all living spaces, with flexible scheduling that accommodates your dynamic Heights lifestyle.</p>`,
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

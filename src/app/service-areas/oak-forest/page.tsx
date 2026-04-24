import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Oak Forest";
const area = getHoustonServiceArea("oak-forest");

export const metadata = {
  title: "House Cleaning Services in Oak Forest, Houston TX | Kathy Clean",
  description:
    "Professional house cleaning in Oak Forest and Garden Oaks, Houston (77018, 77092). Kathy Clean Houston offers recurring, deep & move-out cleaning for Oak Forest homes. Fully insured. Get a fast quote.",
  alternates: {
    canonical: "/service-areas/oak-forest",
  },
  openGraph: {
    title: "House Cleaning Services in Oak Forest, Houston TX | Kathy Clean",
    description: "Professional house cleaning in Oak Forest and Garden Oaks, Houston (77018, 77092). Recurring, deep & move-out cleaning for Oak Forest homes. Fully insured.",
    url: "https://kathycleanhouston.com/service-areas/oak-forest",
  },
};

export default function OakForestServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title="Reliable House Cleaning Service"
      description={metadata.description}
      canonical="/service-areas/oak-forest"
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Oak Forest & Garden Oaks"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides professional home cleaning throughout Oak Forest, Garden Oaks, and Oak Forest East (zip codes 77018 and 77092). From weekly maintenance to deep cleans and move-out services, we serve the young families, renovators, and working professionals who have made Oak Forest one of Houston's most sought-after inner-loop neighborhoods.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why Oak Forest Households Choose Kathy Clean"
      benefitsParagraph="Oak Forest's mix of original mid-century homes and recently renovated properties demands a cleaning service that understands the neighborhood's character — reliable, detail-focused, and flexible around busy Houston schedules."
      benefitsItems={[
        {
          title: "Experience with mid-century and renovated homes:",
          body: "Oak Forest's 1950s–1960s ranch homes and bungalows have distinctive layouts, hardwood floors, and original fixtures. We adapt our cleaning approach to your home's materials and specific priorities — no one-size-fits-all.",
        },
        {
          title: "Flexible scheduling for working families:",
          body: "Most Oak Forest clients are out of the house during the day. We offer morning and midday availability, work with key codes or lockboxes, and have your home clean before you're back from the office or school pickup.",
        },
        {
          title: "Eco-friendly products safe for kids and pets:",
          body: "Non-toxic, biodegradable cleaners that protect your family. Important for Oak Forest households with young children and dogs who spend time at T.C. Jester Park and the White Oak Bayou Greenway.",
        },
      ]}
      benefitsImage={{
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      whyTitle="Why House Cleaning Matters in Oak Forest"
      whyParagraph="Oak Forest's established tree canopy, older home stock, and active family lifestyle creates specific cleaning demands that benefit from consistent professional attention."
      whyItems={[
        {
          title: "Older homes need attentive care:",
          body: "Oak Forest's mid-century ranch homes have hardwood floors, vintage tile bathrooms, and older fixtures that require careful product selection. Regular professional cleaning prevents buildup on surfaces that can be damaged by harsh chemicals.",
        },
        {
          title: "Active families and renovation projects track in more debris:",
          body: "Oak Forest families are active — weekend mornings at T.C. Jester Park, afternoons on the White Oak Bayou trails. Renovation activity in the neighborhood also means more dust and debris. Recurring cleaning keeps your home ahead of the buildup.",
        },
        {
          title: "Growing neighborhood, growing demand for quality service:",
          body: "Oak Forest has attracted a wave of young professionals and families who expect high-quality services. Many of our Oak Forest clients came through neighbor referrals — a testament to the consistency our recurring service delivers.",
        },
      ]}
      whyImage={{
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/OakForestParkHouston.JPG",
        alt: "Oak Forest Park in Houston TX — house cleaning services for Oak Forest families",
      }}
      locationSpecificContent={{
        title: "House Cleaning in Oak Forest and Garden Oaks for Houston Families",
        content: `<p>Oak Forest — spanning zip codes <strong>77018</strong> and <strong>77092</strong> — is one of Houston's most established inner-loop neighborhoods, known for its canopy of mature oaks, mid-century ranch homes, and a community character that has attracted a wave of young families and renovation-focused buyers over the past decade. Our <a href="/house-cleaning-houston">Houston house cleaning</a> service has become a trusted resource for Oak Forest households who want reliable, professional cleaning without the overhead of managing an individual cleaner. We serve Oak Forest proper, Garden Oaks, Oak Forest East, and the communities along the T.C. Jester corridor.</p>
<p>Oak Forest homes present a unique combination of original mid-century features and modern renovations — hardwood floors that need careful dry mopping, vintage tile bathrooms, updated kitchens in older footprints, and open-plan additions built onto 1950s ranch bones. Our recurring service adapts to what your specific home requires, whether that's careful attention to original woodwork and historic finishes or systematic cleaning of a recently renovated open-plan layout. We also serve neighboring <a href="/service-areas/greater-heights">Greater Heights</a> and <a href="/service-areas/spring-branch">Spring Branch</a> for clients who straddle the border between these communities.</p>
<p>For Oak Forest renters and homeowners in transition, our move-out cleaning is thorough and deposit-ready — covering inside appliances, cabinet interiors, baseboards, and all areas required for a full landlord inspection. Move-in cleans make a new Oak Forest home feel genuinely yours before you unpack. If you found us through a neighbor or a quick search, <a href="/request-quote">request a free quote</a> — we respond same-day.</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning Built for Oak Forest Households",
        content: `<p>Biweekly cleaning is the most popular choice among Oak Forest clients — it keeps a home consistently clean without the cost of weekly service, and suits the active-but-not-chaotic pace of most Oak Forest families. For households with young children, multiple pets, or heavy kitchen use, weekly service keeps pace with the activity level. Monthly deep cleans work well for smaller households or young professionals who maintain between visits. Every visit covers full kitchen and bathroom cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, mirrors and glass, and attention to the high-touch areas that accumulate the most grime. For Oak Forest's original hardwood floors and vintage tile, we use appropriate products that protect without damage. Flexible rescheduling is always available — T.C. Jester Park activities, school pickups, and Houston weather don't follow a fixed calendar, and neither do we.</p>`,
      }}
      faqItems={[
        {
          question: "Do you serve Oak Forest and Garden Oaks (77018 and 77092)?",
          answer:
            "Yes. We regularly clean homes throughout Oak Forest, Garden Oaks, and Oak Forest East in zip codes 77018 and 77092. We also serve adjacent neighborhoods including Greater Heights and Spring Branch.",
        },
        {
          question: "Do you have experience cleaning older Oak Forest ranch homes?",
          answer:
            "Yes. We regularly clean 1950s–1960s ranch homes in Oak Forest and understand the care required for original hardwood floors, vintage tile, and older fixtures. We use appropriate products that clean without damaging period finishes.",
        },
        {
          question: "Can you clean my Oak Forest home while I'm at work?",
          answer:
            "Absolutely. Most Oak Forest clients provide a key code or lockbox access. We clean while you're away and lock up securely when done. You'll receive a notification when the team completes the job.",
        },
        {
          question: "What is included in a standard Oak Forest house cleaning?",
          answer:
            "Standard cleanings include kitchen and bathroom deep cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, cleaning mirrors, wiping countertops and appliances, and attention to entry areas. For homes with original hardwood floors, we use dry mopping or an appropriate hardwood-safe cleaner.",
        },
        {
          question: "How much does house cleaning cost in Oak Forest?",
          answer:
            "Most 3-bed/2-bath Oak Forest ranch homes run $155–$195 per biweekly visit. Larger or fully renovated homes range $190–$245. Recurring clients save 15–20% compared to one-time rates. Request a free quote for your specific home.",
        },
        {
          question: "Do you offer move-out cleaning for Oak Forest rentals and home sales?",
          answer:
            "Yes. We specialize in move-out cleaning throughout Oak Forest — covering inside appliances, cabinet interiors, bathrooms, baseboards, and all areas required for a landlord inspection or home sale. We coordinate with landlords and real estate agents on request.",
        },
      ]}
      mapTitle="Serving Oak Forest, Garden Oaks, and Northwest Inner-Loop Houston"
      mapParagraph="Serving Oak Forest and Garden Oaks (77018, 77092), including the T.C. Jester corridor, Oak Forest East, and adjacent Greater Heights and Spring Branch communities."
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

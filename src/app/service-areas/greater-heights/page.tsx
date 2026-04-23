import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Greater Heights";
const area = getHoustonServiceArea("greater-heights");

export const metadata = {
  title: "House Cleaning Services in Houston Heights TX | Kathy Clean",
  description:
    "Professional house cleaning in Houston Heights (77007, 77008, 77009). Kathy Clean Houston offers recurring, deep & move-out cleaning for Heights bungalows and townhomes. Fully insured. Get a fast quote.",
  alternates: {
    canonical: "/service-areas/greater-heights",
  },
};

export default function GreaterHeightsServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title="Reliable House Cleaning Service"
      description={metadata.description}
      canonical="/service-areas/greater-heights"
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Houston Heights"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides professional home cleaning throughout Greater Heights, Houston (zip codes 77007, 77008, and 77009). From weekly maintenance to deep cleans and move-out services, we serve the creative professionals, growing families, and dual-income households that make the Heights one of Houston's most vibrant inner-loop neighborhoods.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why Heights Households Choose Kathy Clean"
      benefitsParagraph="The Heights moves fast — our service keeps up with it. Reliable, consistent cleaning that fits around demanding work schedules and active home lives."
      benefitsItems={[
        {
          title: "Flexible scheduling for busy Heights professionals:",
          body: "Whether you commute to the Energy Corridor, downtown, or the Medical Center, we offer morning and midday slots that have your home clean before you're back. No need to be home.",
        },
        {
          title: "Experience with bungalows and multi-story townhomes:",
          body: "The Heights housing stock is unique — from 1920s craftsman bungalows to modern 3-story townhomes. We adapt our approach to your home's layout, materials, and specific cleaning priorities.",
        },
        {
          title: "Eco-friendly products safe for kids and pets:",
          body: "Non-toxic, biodegradable cleaners that protect your family — important for the Heights families who use White Oak Bayou trails and spend time in their outdoor spaces.",
        },
      ]}
      benefitsImage={{
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      whyTitle="Why House Cleaning Matters in the Heights"
      whyParagraph="The Heights' character — older homes, active families, and year-round Houston humidity — creates specific cleaning challenges that benefit from consistent professional attention."
      whyItems={[
        {
          title: "Older homes accumulate dust differently:",
          body: "The Heights' historic bungalows and craftsman homes have unique architectural details — crown molding, hardwood floors, original fixtures — that require more attentive dusting and cleaning than modern builds.",
        },
        {
          title: "High humidity accelerates bathroom and kitchen buildup:",
          body: "Houston's climate is hard on surfaces. Regular cleaning prevents mold, mildew, and grout discoloration in the bathrooms and kitchens of Heights homes, especially older builds with less ventilation.",
        },
        {
          title: "Active families and pets need a clean home base:",
          body: "Heights families spend their weekends on 19th Street, White Oak Bayou trails, and Donovan Park. That active outdoor life tracks in. Recurring cleaning keeps your home fresh without consuming your downtime.",
        },
      ]}
      whyImage={{
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/HeightsTheater.JPG",
        alt: "Heights Theater and central business district in Houston Heights TX",
      }}
      locationSpecificContent={{
        title: "House Cleaning in Greater Heights for Inner-Loop Houston Households",
        content: `<p>Greater Heights — spanning zip codes <strong>77007</strong>, <strong>77008</strong>, and <strong>77009</strong> — is one of Houston's most sought-after inner-loop neighborhoods, known for its historic architecture, walkable streets, and thriving local business scene along 19th Street and Yale Street. Our <a href="/house-cleaning-houston">Houston house cleaning</a> service has become a go-to for Heights households who want reliable, professional cleaning without the hassle of coordinating with an individual cleaner. We serve neighborhoods throughout the Greater Heights area including Woodland Heights, Norhill, Sunset Heights, Shady Acres, and the Cottage Grove communities along Washington Avenue.</p>
<p>Heights homes range from 1920s craftsman bungalows to new-construction 3-story townhomes — and we've cleaned them all. Historic homes need careful attention to hardwood floors, original woodwork, and older fixtures that don't respond well to harsh chemicals. Modern townhomes need systematic top-to-bottom cleaning that handles stairs, rooftop decks, and open-plan layouts efficiently. Our recurring service adapts to your home's specific needs and your household's schedule. We also serve adjacent neighborhoods including <a href="/service-areas/rice-military">Rice Military</a> and <a href="/service-areas/spring-branch">Spring Branch</a>.</p>
<p>For Heights renters and homeowners in transition, our move-out cleaning service is thorough and landlord-ready — covering inside appliances, cabinet interiors, baseboards, and all areas required for a full deposit return. Move-in cleans make new Heights homes feel genuinely fresh before you unpack. If you're one of the many Heights residents who found us through a neighbor's recommendation or a quick search, <a href="/request-quote">request a free quote</a> — we respond same-day.</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning Built for the Heights Lifestyle",
        content: `<p>Biweekly cleaning is by far the most popular choice among Heights clients — it keeps a home consistently clean and guest-ready without the frequency of weekly service. For households with children, dogs, or heavy kitchen use, weekly service keeps pace with the activity level that Heights family life demands. Monthly deep cleans work for smaller households or young professionals who travel frequently and maintain between visits. Every visit covers full kitchen and bathroom cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, mirrors and glass, and attention to the high-touch areas that accumulate the most grime in a busy Heights home. For historic bungalows, we take extra care with hardwood floors (dry mop or appropriate cleaner only), vintage fixtures, and period woodwork. Flexible rescheduling is always available — the Heights lifestyle doesn't follow a fixed calendar, and neither do we.</p>`,
      }}
      faqItems={[
        {
          question: "Do you serve the Heights zip codes 77007, 77008, and 77009?",
          answer:
            "Yes. We clean homes throughout Greater Heights including Woodland Heights, Norhill, Sunset Heights, Shady Acres, and Cottage Grove. We serve all three Heights zip codes and adjacent areas like Rice Military and Spring Branch.",
        },
        {
          question: "Do you have experience cleaning historic Heights bungalows?",
          answer:
            "Yes. We regularly clean 1920s-1940s craftsman and Victorian bungalows throughout the Heights. We use appropriate products for hardwood floors, original woodwork, and older fixtures — nothing abrasive that could damage period finishes.",
        },
        {
          question: "Can you clean my Heights home while I'm at work?",
          answer:
            "Absolutely. Most Heights clients provide a key code or lockbox access. We clean while you're away and lock up securely. You'll get a notification when the team finishes.",
        },
        {
          question: "What is included in a Heights house cleaning?",
          answer:
            "Standard cleanings include kitchen and bathroom deep cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, cleaning mirrors, wiping countertops and appliances, and attention to entry areas. For bungalows, we include careful hardwood floor treatment. For townhomes, we clean all floors including stairs.",
        },
        {
          question: "How much does house cleaning cost in the Heights?",
          answer:
            "Most 2-bed/1-bath Heights bungalows run $140–$175 per biweekly visit. Larger 3-bed/2-bath homes and 3-story townhomes range $175–$230. Recurring clients save 15–20% vs. one-time rates. Request a free quote for your specific home.",
        },
        {
          question: "Do you offer move-out cleaning for Heights rentals?",
          answer:
            "Yes. We specialize in move-out cleaning throughout the Heights — covering inside appliances, cabinet interiors, bathrooms, baseboards, and everything required for a full deposit return. We coordinate with landlords and property managers on request.",
        },
      ]}
      mapTitle="Serving Greater Heights and Inner-Loop Houston"
      mapParagraph="Serving Greater Heights (77007, 77008, 77009), including Woodland Heights, Norhill, Sunset Heights, Shady Acres, and the Washington Avenue corridor."
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

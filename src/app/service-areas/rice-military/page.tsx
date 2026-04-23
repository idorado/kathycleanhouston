import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Rice Military";
const area = getHoustonServiceArea("rice-military");

export const metadata = {
  title: "House Cleaning Services in Rice Military, Houston TX | Kathy Clean",
  description:
    "Professional house cleaning in Rice Military, Houston (77007). Kathy Clean Houston offers recurring, deep & move-out cleaning for Rice Military townhomes and condos. Fully insured. Get a fast quote.",
  alternates: {
    canonical: "/service-areas/rice-military",
  },
};

export default function RiceMilitaryServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title="Reliable House Cleaning Service"
      description={metadata.description}
      canonical="/service-areas/rice-military"
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Rice Military"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides professional home cleaning throughout Rice Military and the Washington Avenue corridor (zip code 77007). From weekly maintenance to deep cleans and move-out services, we serve the young professionals, dual-income couples, and active households that make Rice Military one of Houston's most energetic urban neighborhoods.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why Rice Military Residents Choose Kathy Clean"
      benefitsParagraph="Rice Military's fast-paced lifestyle demands a cleaning service that's reliable, flexible, and built for homes where the owners are rarely sitting still."
      benefitsItems={[
        {
          title: "Built for busy urban professionals:",
          body: "Most Rice Military clients are out of the house before 8am. We offer morning slots, provide access via key or door code, and have the home spotless before you're back from work.",
        },
        {
          title: "Townhome and condo specialists:",
          body: "We're experienced with the multi-story townhomes and high-density condos that define Rice Military — including stairwells, rooftop decks, and compact layouts that require methodical cleaning.",
        },
        {
          title: "Insured, background-checked, and consistent:",
          body: "Every cleaner is fully vetted and insured. We assign the same team whenever possible so you never have to explain your home twice.",
        },
      ]}
      benefitsImage={{
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      whyTitle="Why House Cleaning Matters in Rice Military"
      whyParagraph="Rice Military's urban density, active social life, and proximity to Memorial Park creates specific cleaning demands that benefit from regular professional service."
      whyItems={[
        {
          title: "Post-workout and weekend traffic adds up fast:",
          body: "With Memorial Park trails and Washington Avenue venues steps away, Rice Military homes see heavy foot traffic. Regular cleaning keeps floors, entryways, and bathrooms ahead of the buildup.",
        },
        {
          title: "Townhomes need top-to-bottom attention:",
          body: "Multi-story layouts mean dust and debris migrate between floors. Our teams clean systematically — top to bottom, room by room — so nothing gets pushed around instead of removed.",
        },
        {
          title: "Hosting-ready on demand:",
          body: "Rice Military has one of Houston's most active social scenes. Recurring cleaning means your home is always ready for last-minute guests without a panic clean the night before.",
        },
      ]}
      whyImage={{
        url: "https://upload.wikimedia.org/wikipedia/commons/0/08/MemorialParkHouston.JPG",
        alt: "Memorial Park Houston TX near Rice Military neighborhood",
      }}
      locationSpecificContent={{
        title: "House Cleaning in Rice Military for Houston's Urban Professionals",
        content: `<p>Rice Military — centered on zip code <strong>77007</strong> along Washington Avenue between Memorial Park and downtown Houston — is one of the city's premier addresses for young professionals and dual-income couples. Bounded by Buffalo Bayou to the south and Memorial Park to the north, it combines walkable urban amenities with immediate access to Houston's best green space. Our <a href="/house-cleaning-houston">Houston house cleaning</a> service is tailored for Rice Military's specific housing stock: three-story townhomes, lock-and-leave condos, and the occasional renovated bungalow tucked between newer developments.</p>
<p>Rice Military residents work hard — many commute to the Energy Corridor, the Galleria, or downtown's legal and finance district — and their homes reflect that pace. Kitchens get real use, bathrooms see early-morning rush, and the open-plan living areas that front Washington Avenue collect city dust faster than suburban homes. Our biweekly service is the most popular choice here: it keeps the home consistently clean without the cost of weekly service, and our teams work efficiently in compact multi-story layouts. We also serve the adjacent <a href="/service-areas/greater-heights">Greater Heights</a> and <a href="/service-areas/spring-branch">Spring Branch</a> neighborhoods for clients who straddle the border.</p>
<p>Move-out cleaning is a Rice Military specialty for us — this is one of Houston's highest-turnover rental neighborhoods, and we handle the full end-of-lease deep clean that gets deposits back. We coordinate directly with landlords and property managers on request. For new arrivals to the neighborhood, our move-in clean removes prior-tenant residue and makes your new Rice Military home feel genuinely yours from day one. <a href="/request-quote">Request a free quote</a> — we typically respond within the hour.</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning Built for the Rice Military Lifestyle",
        content: `<p>Biweekly cleaning is the standard for Rice Military — it keeps a townhome or condo in consistent, presentable shape without the frequency of weekly service. For households where both partners work full-time, or for smaller condos with high foot traffic from the Washington Avenue scene, weekly service keeps surfaces truly fresh. Monthly deep cleans work well for single professionals who maintain between visits or travel frequently. Every visit covers full kitchen and bathroom cleaning, vacuuming and mopping all floors (including stairs), dusting surfaces and light fixtures, mirrors and glass, and high-touch surfaces throughout. We're comfortable with rooftop decks, parking garage entry, and the building access protocols common in Rice Military's newer developments. Flexible rescheduling is always available — no penalty for life getting busy.</p>`,
      }}
      faqItems={[
        {
          question: "Do you serve Rice Military and the 77007 zip code?",
          answer:
            "Yes. We clean homes throughout Rice Military, Cottage Grove, Timbergrove, and the Washington Avenue corridor in 77007. We also serve adjacent neighborhoods including Greater Heights (77007/77008) and Spring Branch (77080).",
        },
        {
          question: "Can you clean my townhome while I'm at work?",
          answer:
            "Absolutely. Most Rice Military clients provide a key code or building access instructions. We clean while you're at work and lock up securely when we're done. You'll receive a notification when the team completes the job.",
        },
        {
          question: "Do you handle move-out cleaning for Rice Military rentals?",
          answer:
            "Yes. We specialize in move-out cleaning for Rice Military townhomes and condos. Our service covers inside appliances, cabinet interiors, bathrooms, baseboards, and all areas required for a standard landlord inspection. We can coordinate directly with your property manager.",
        },
        {
          question: "What is included in a standard cleaning in Rice Military?",
          answer:
            "Standard cleanings include kitchen and bathroom deep cleaning, vacuuming and mopping all floors including stairs, dusting all surfaces, cleaning mirrors and glass, and wiping down appliances and countertops. For multi-story townhomes, we clean top to bottom systematically.",
        },
        {
          question: "How much does recurring house cleaning cost in Rice Military?",
          answer:
            "A 2-bed/2-bath Rice Military townhome typically runs $150–$190 per biweekly visit. Larger 3-story townhomes range $185–$240. Recurring clients save 15–20% compared to one-time rates. Request a free quote for your specific address and layout.",
        },
        {
          question: "Do you clean condos in Rice Military high-rises?",
          answer:
            "Yes. We handle building check-in, elevator scheduling, and parking requirements for Rice Military's newer condo buildings. Just let us know your access procedure when booking.",
        },
      ]}
      mapTitle="Serving Rice Military and the Washington Avenue Corridor"
      mapParagraph="Serving Rice Military (77007), Washington Avenue, Cottage Grove, Timbergrove, and surrounding inner-loop Houston neighborhoods."
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

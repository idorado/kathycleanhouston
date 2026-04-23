import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "Katy";
const area = getHoustonServiceArea("katy");

export const metadata = {
  title: "House Cleaning Services in Katy TX | Kathy Clean Houston",
  description:
    "Professional house cleaning in Katy, TX (77449, 77450, 77494). Kathy Clean Houston offers recurring, deep & move-out cleaning for Katy and Cinco Ranch households. Fully insured. Get a fast quote.",
  alternates: {
    canonical: "/service-areas/katy",
  },
};

export default function KatyServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title="Reliable House Cleaning Service"
      description={metadata.description}
      canonical="/service-areas/katy"
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Katy, TX"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides professional home cleaning throughout Katy and Cinco Ranch (zip codes 77449, 77450, and 77494). From weekly maintenance to deep cleans and move-out services, we serve the growing families, new construction homeowners, and dual-income households that make Katy one of Houston's fastest-expanding suburbs.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why Katy Families Choose Kathy Clean"
      benefitsParagraph="Katy homes range from brand-new construction to established neighborhoods — each requiring cleaning that matches the home's size, layout, and the family's schedule."
      benefitsItems={[
        {
          title: "New construction and builder-clean expertise:",
          body: "We specialize in post-construction deep cleans that remove drywall dust, adhesive residue, and debris from newly built Katy and Cinco Ranch homes before move-in.",
        },
        {
          title: "Family-safe, eco-friendly products:",
          body: "Non-toxic cleaners safe for children and pets — important for the large family homes and backyards common throughout Katy's master-planned communities.",
        },
        {
          title: "Flexible scheduling for busy households:",
          body: "We work around Katy ISD school schedules, sports activities, and work commutes with morning and midday availability Monday through Saturday.",
        },
      ]}
      benefitsImage={{
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      whyTitle="Why House Cleaning Matters in Katy"
      whyParagraph="Katy's rapid growth brings large homes, open floor plans, and new construction — a combination that demands consistent, thorough professional cleaning."
      whyItems={[
        {
          title: "Large master-planned homes need consistent upkeep:",
          body: "Homes in Cinco Ranch, Falcon Landing, and Cross Creek Ranch frequently exceed 2,500–4,000 sq ft. Professional recurring cleaning prevents buildup in oversized kitchens, multiple bathrooms, and formal living spaces.",
        },
        {
          title: "New construction generates persistent dust:",
          body: "Even months after move-in, new builds in Katy continue releasing construction particles. Regular deep cleaning keeps HVAC vents, baseboards, and surfaces clear.",
        },
        {
          title: "Busy families deserve a clean home without the effort:",
          body: "With Katy ISD ranking among the state's best, many families prioritize their children's schedules over cleaning. We handle the home so your weekends stay yours.",
        },
      ]}
      whyImage={{
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/2019-07-20_08_32_24_Palm_trees_along_Kingsland_Boulevard_in_Katy%2C_Fort_Bend_County%2C_Texas.jpg",
        alt: "Kingsland Boulevard in Katy TX suburban neighborhood",
      }}
      locationSpecificContent={{
        title: "House Cleaning in Katy and Cinco Ranch for Growing Families",
        content: `<p>Katy — covering zip codes <strong>77449</strong>, <strong>77450</strong>, and <strong>77494</strong> — is one of the Houston area's most family-oriented suburbs, known for top-ranked schools, master-planned communities, and new construction homes along the Grand Parkway. Our <a href="/house-cleaning-houston">Houston house cleaning</a> service is built for households where square footage is generous and schedules are packed. We serve neighborhoods throughout Katy including Cinco Ranch, LaCenterra, Falcon Landing, Cross Creek Ranch, Firethorne, and the communities along Franz Road and Mason Road.</p>
<p>Katy homes frequently feature open-concept great rooms, multiple bathrooms, formal dining rooms, and large covered patios — spaces that require more thorough attention than smaller inner-loop properties. Our recurring service adapts to the size and specific needs of your home. Whether you need a team to handle a 3,500 sq ft home in Cinco Ranch Southwest or a move-in clean for a new build off the Grand Parkway, we deliver consistent results. We also serve adjacent areas including <a href="/service-areas/energy-corridor">Energy Corridor</a> and <a href="/service-areas/memorial">Memorial</a>. Corporate relocations to Katy are a specialty — we offer move-in cleans for families arriving from outside Houston.</p>
<p>For new construction homes along the Grand Parkway expansion areas (77494 and beyond), we offer thorough post-construction cleaning that addresses drywall dust in HVAC vents, adhesive residue on flooring, and paint overspray on fixtures — making your new Katy home truly move-in ready. Ready to simplify your routine? <a href="/request-quote">Request a free quote</a> and we'll match you with the right plan for your Katy home.</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning Built for Katy Family Schedules",
        content: `<p>Biweekly cleaning is the most popular choice among Katy clients — it keeps a large home consistently clean without the cost of weekly service. For households with young children or pets, weekly service provides the level of cleanliness that busy family life demands. Monthly deep cleans work well for smaller households or homeowners who prefer to maintain between professional visits. All recurring clients receive priority scheduling and a consistent team whenever possible. Each visit includes full kitchen and bathroom cleaning, vacuuming and mopping all floors, dusting surfaces and fixtures, wiping down appliances, and attention to the high-touch areas that accumulate the most grime in an active household. We accommodate Katy ISD school holidays and can adjust scheduling when activities change.</p>`,
      }}
      faqItems={[
        {
          question: "Do you serve Katy and Cinco Ranch zip codes 77449, 77450, and 77494?",
          answer:
            "Yes. We regularly clean homes throughout Katy and Cinco Ranch including Falcon Landing, Cross Creek Ranch, Firethorne, LaCenterra, and communities along Mason Road and the Grand Parkway. We also serve adjacent areas like Energy Corridor (77079) and Memorial (77024).",
        },
        {
          question: "Do you offer post-construction cleaning for new Katy homes?",
          answer:
            "Absolutely. We specialize in post-construction deep cleans for new builds throughout Katy and the Grand Parkway corridor. Our service removes drywall dust, adhesive residue, construction debris, and paint overspray to make your new home move-in ready.",
        },
        {
          question: "Can you clean large homes in Cinco Ranch and Falcon Landing?",
          answer:
            "Yes. We regularly clean homes between 2,500 and 5,000+ sq ft throughout Katy's master-planned communities. We send appropriately sized teams for larger homes to ensure thorough cleaning within a reasonable time window.",
        },
        {
          question: "What is included in a standard cleaning in Katy?",
          answer:
            "Standard cleanings include kitchen and bathroom deep cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, cleaning mirrors, wiping countertops and appliances, and tidying common areas. We customize based on your home's size and priorities.",
        },
        {
          question: "How much does recurring house cleaning cost in Katy?",
          answer:
            "Pricing depends on your home's square footage and number of bathrooms. Most 3-bed/2-bath Katy homes run $165–$215 per biweekly visit. Larger 4-bed/3-bath homes in Cinco Ranch typically range $210–$270. Recurring clients save 15–20% compared to one-time rates. Request a free quote for your exact address.",
        },
        {
          question: "Do you offer move-in cleaning for Katy relocations?",
          answer:
            "Yes. We handle move-in and move-out cleanings for families relocating to Katy from across the Houston area and beyond. We can coordinate with relocation timelines and work around closing schedules.",
        },
      ]}
      mapTitle="Serving Katy, Cinco Ranch, and West Harris County"
      mapParagraph="Serving Katy (77449, 77450, 77494), Cinco Ranch, Falcon Landing, Cross Creek Ranch, Firethorne, and surrounding Fort Bend and West Harris County communities."
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

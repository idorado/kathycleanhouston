import JsonLd from "@/components/json-ld";
import { houseCleaning } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import { getHoustonServiceArea } from "@/lib/service-areas/houstonLocations";

const locationName = "The Woodlands";
const area = getHoustonServiceArea("the-woodlands");

export const metadata = {
  title: "House Cleaning Services in The Woodlands TX | Kathy Clean Houston",
  description:
    "Professional house cleaning in The Woodlands, TX (77380–77389). Kathy Clean Houston offers recurring, deep & move-out cleaning for The Woodlands households. Fully insured. Get a fast quote.",
  alternates: {
    canonical: "/service-areas/the-woodlands",
  },
};

export default function TheWoodlandsServiceAreaPage() {
  return (
    <LocationServiceAreaPage
      title="Reliable House Cleaning Service"
      description={metadata.description}
      canonical="/service-areas/the-woodlands"
      robotsIndex={true}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in The Woodlands, TX"
      heroParagraphs={[
        `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides professional home cleaning throughout The Woodlands (zip codes 77380 through 77389). From weekly maintenance to deep cleans and move-out services, we serve the high-income households, corporate relocations, and active families that make The Woodlands one of the Houston region's most sought-after communities.`,
      ]}
      ctaPhone="(346) 488-6044"
      ctaSmsNumber="(346) 488-6044"
      benefitsTitle="Why The Woodlands Households Choose Kathy Clean"
      benefitsParagraph="The Woodlands demands a cleaning service that matches its standards — reliable, professional, and thorough in the homes that line its wooded trails and waterways."
      benefitsItems={[
        {
          title: "Consistent, high-standard cleaning for premium homes:",
          body: "The Woodlands' custom and semi-custom homes expect professional-grade results. We focus on the details — baseboards, crown molding, appliance interiors — that define a thorough clean.",
        },
        {
          title: "Flexible scheduling around ExxonMobil and corporate campuses:",
          body: "Many Woodlands residents work at ExxonMobil, Chevron, HP, or the growing Woodlands Research Forest campus. We offer early-morning availability and work-from-home-friendly cleaning windows.",
        },
        {
          title: "Insured and vetted professionals you can trust:",
          body: "Every cleaner is fully background-checked and insured — important for The Woodlands households with high-value furnishings, home offices, and art collections.",
        },
      ]}
      benefitsImage={{
        url: area.imageUrl,
        alt: area.imageAlt,
      }}
      whyTitle="Why House Cleaning Matters in The Woodlands"
      whyParagraph="The Woodlands' wooded environment, large homes, and active family lifestyle creates a specific cleaning challenge that benefits from consistent professional attention."
      whyItems={[
        {
          title: "Wooded surroundings mean more pollen and debris:",
          body: "The Woodlands' signature tree canopy brings beauty — and significant pollen, leaves, and outdoor debris into homes. Regular professional cleaning manages these constant sources of indoor dust.",
        },
        {
          title: "Large homes across multiple villages need consistent upkeep:",
          body: "Whether you're in Creekside Park, Cochran's Crossing, or Carlton Woods, Woodlands homes often exceed 3,000 sq ft with multiple living areas. Recurring professional service prevents buildup from becoming a project.",
        },
        {
          title: "Corporate housing and relocation cleaning:",
          body: "The Woodlands hosts major corporate campuses and frequent executive relocations. We provide move-in and move-out cleans that meet the highest standards for corporate housing and luxury real estate.",
        },
      ]}
      whyImage={{
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Forest_Bridge_in_The_Woodlands.jpg",
        alt: "Forest bridge trail in The Woodlands TX",
      }}
      locationSpecificContent={{
        title: "House Cleaning in The Woodlands for Premium Houston-Area Households",
        content: `<p>The Woodlands — spanning zip codes <strong>77380</strong>, <strong>77381</strong>, <strong>77382</strong>, <strong>77384</strong>, <strong>77385</strong>, <strong>77386</strong>, <strong>77387</strong>, <strong>77389</strong> — is a master-planned community north of Houston known for its village system, wooded trails, and The Waterway district. Our <a href="/house-cleaning-houston">Houston house cleaning</a> service serves households throughout all Woodlands villages including Grogan's Mill, Panther Creek, Cochran's Crossing, Indian Springs, Alden Bridge, Sterling Ridge, College Park, and Creekside Park.</p>
<p>The Woodlands homes frequently feature custom finishes, formal entertainment spaces, home offices, and outdoor living areas — environments that require attentive, detail-focused cleaning. Our recurring service adapts to the village, home size, and your household's specific priorities. Whether you need a biweekly team for a 4,000 sq ft home in Carlton Woods or a move-in clean for a corporate relocation off Research Forest Drive, we deliver consistent, high-standard results. For ExxonMobil and Chevron employees on assignment rotations or extended travel, we offer flexible rescheduling with no penalty and can clean with access instructions alone. Corporate housing managers can coordinate directly with our team.</p>
<p>The Woodlands' wooded environment introduces specific challenges — pollen accumulation on surfaces, outdoor debris tracked indoors, and higher humidity near Lake Woodlands and The Waterway. Our recurring cleaning program addresses these area-specific factors with appropriate attention to entry points, outdoor-adjacent surfaces, and air quality-affecting dust sources. Ready to bring Kathy Clean into your Woodlands home? <a href="/request-quote">Request a free quote</a> and we'll match you with the right service plan.</p>`,
      }}
      recurringCleaningContent={{
        title: "Recurring Cleaning Built for The Woodlands Households",
        content: `<p>Biweekly cleaning is the most popular choice among Woodlands clients — it maintains a consistently clean home in the wooded environment without the cost of weekly service. For larger homes with children, pets, or high-use entertaining spaces, weekly service provides the level of care those homes demand. Monthly deep cleans are ideal for smaller households or seasonal residents who maintain between professional visits. All recurring clients receive priority scheduling and a consistent team whenever possible. Each visit includes full kitchen and bathroom cleaning, vacuuming and mopping all floors, dusting surfaces and fixtures, cleaning mirrors and glass, and thorough attention to entry areas and outdoor-adjacent spaces that collect the most debris in The Woodlands environment. Flexible rescheduling is always available for corporate travel and ExxonMobil rotation schedules.</p>`,
      }}
      faqItems={[
        {
          question: "Do you serve all Woodlands villages and zip codes 77380–77389?",
          answer:
            "Yes. We serve all Woodlands villages including Grogan's Mill, Panther Creek, Cochran's Crossing, Indian Springs, Alden Bridge, Sterling Ridge, College Park, and Creekside Park. We cover zip codes 77380, 77381, 77382, 77384, 77385, 77386, 77387, and 77389.",
        },
        {
          question: "Can you accommodate ExxonMobil rotation schedules and corporate travel?",
          answer:
            "Absolutely. Many of our Woodlands clients work on corporate rotation schedules or travel frequently. We offer flexible rescheduling with no penalty and can clean while you're away — just provide access instructions. Corporate housing managers can coordinate directly with our scheduling team.",
        },
        {
          question: "Do you offer move-in cleaning for corporate relocations to The Woodlands?",
          answer:
            "Yes. We handle move-in and move-out cleanings for executive and corporate relocations throughout The Woodlands. We can coordinate with relocation coordinators, real estate agents, and property managers to meet tight timelines.",
        },
        {
          question: "What is included in a cleaning in The Woodlands?",
          answer:
            "Standard cleanings include kitchen and bathroom deep cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, cleaning mirrors and glass, wiping countertops and appliances, and attention to entry areas and outdoor-adjacent spaces. We customize scope based on your home's size and priorities.",
        },
        {
          question: "How much does house cleaning cost in The Woodlands?",
          answer:
            "Pricing depends on your home's square footage and number of bathrooms. Most 3-bed/2-bath Woodlands homes run $185–$240 per biweekly visit. Larger 4-5 bedroom homes in Carlton Woods and College Park typically range $240–$340. Recurring clients save 15–20% compared to one-time rates. Request a free quote for your specific address.",
        },
        {
          question: "Do you use eco-friendly products in The Woodlands?",
          answer:
            "Yes. We offer non-toxic, eco-friendly cleaning products that are safe for children, pets, and The Woodlands' natural environment. If you have sensitivities to specific products or prefer all-natural options, just let us know when scheduling.",
        },
      ]}
      mapTitle="Serving The Woodlands and North Houston"
      mapParagraph="Serving The Woodlands (77380–77389) including all villages from Grogan's Mill to Creekside Park, plus surrounding Montgomery County and Spring communities."
      mapEmbedUrl={area.mapEmbedUrl}
    >
      <JsonLd data={houseCleaning(locationName)} />
    </LocationServiceAreaPage>
  );
}

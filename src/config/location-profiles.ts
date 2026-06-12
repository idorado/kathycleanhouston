// Per-neighborhood fact profiles for the programmatic service×location engine.
// Facts are real and conservative (ZIPs, housing stock, landmarks). The `id`
// matches a slug in src/lib/service-areas/houstonLocations.ts so each generated
// page reuses that area's real image + map embed (no broken assets, no
// fabricated coordinates). The `climateAngle` is a genuine, area-specific
// Houston cleaning challenge (humidity/mildew, hard water, storm, pollen) —
// this is what makes each page unique rather than token-swapped.

export interface LocationProfile {
  /** Must match a HoustonServiceAreaSlug for image/map reuse. */
  id: string;
  name: string;
  zips: string[];
  /** Who lives here — one concise phrase. */
  persona: string;
  /** Housing stock description. */
  housing: string;
  /** Area descriptor + real landmarks/streets (1–2 sentences). */
  context: string;
  /** Named sub-neighborhoods within the area. */
  subAreas?: string[];
  /** Genuine, area-specific Houston cleaning challenge. */
  climateAngle: string;
}

export const locationProfiles: Record<string, LocationProfile> = {
  "greater-heights": {
    id: "greater-heights",
    name: "Greater Heights",
    zips: ["77007", "77008", "77009"],
    persona: "creative professionals, growing families, and dual-income households",
    housing: "1920s craftsman and Victorian bungalows alongside new 3-story townhomes",
    context:
      "one of Houston's most sought-after inner-loop neighborhoods, known for historic architecture and the walkable 19th Street and Yale Street business districts",
    subAreas: ["Woodland Heights", "Norhill", "Sunset Heights", "Shady Acres", "Cottage Grove"],
    climateAngle:
      "Older Heights bungalows have original hardwoods and woodwork plus less bathroom ventilation, so Houston's Gulf humidity drives mildew and grout discoloration that needs consistent attention",
  },
  "rice-military": {
    id: "rice-military",
    name: "Rice Military",
    zips: ["77007"],
    persona: "young professionals and couples along the Washington Avenue corridor",
    housing: "dense 3- and 4-story new-construction townhomes",
    context:
      "a fast-growing inner-loop neighborhood between Memorial Park and Washington Avenue, anchored by Buffalo Bayou Park and the Beer Can House",
    subAreas: ["Camp Logan", "Washington Avenue Coalition"],
    climateAngle:
      "Multi-story townhomes mean lots of stairs and tall windows; Houston humidity and hard water leave spots on the large glass and stainless finishes common in these new builds",
  },
  "energy-corridor": {
    id: "energy-corridor",
    name: "Energy Corridor",
    zips: ["77079", "77077"],
    persona: "corporate expats and households tied to Shell, BP, and ConocoPhillips",
    housing: "established single-family homes and a large stock of corporate-lease properties",
    context:
      "a west Houston business district along I-10 and the edge of Terry Hershey Park, home to major energy-company campuses",
    subAreas: ["Nottingham Country", "Bear Creek", "Ashford"],
    climateAngle:
      "Parts of the Energy Corridor flooded during Hurricane Harvey, so move-in/move-out and post-storm cleanups are common here; offshore rotation schedules also make reliable recurring cleaning valuable",
  },
  memorial: {
    id: "memorial",
    name: "Memorial",
    zips: ["77024"],
    persona: "established families and professionals along the Katy Freeway corridor",
    housing: "spacious single-family homes on wooded lots",
    context:
      "an affluent, heavily wooded west Houston area along the Katy Freeway near Memorial City and City Centre",
    subAreas: ["Memorial Bend", "Frostwood", "Nottingham Forest"],
    climateAngle:
      "Mature oak and pine canopy means heavy pollen and leaf litter tracked indoors, and large homes with hard water show mineral buildup on fixtures",
  },
  "the-memorial-villages": {
    id: "the-memorial-villages",
    name: "The Memorial Villages",
    zips: ["77024"],
    persona: "established, high-net-worth families",
    housing: "large estate homes on generous wooded lots",
    context:
      "the cluster of small incorporated cities — Bunker Hill, Piney Point, Hunters Creek, and Hedwig Village — west of Memorial Park",
    subAreas: ["Bunker Hill Village", "Piney Point Village", "Hunters Creek Village", "Hedwig Village"],
    climateAngle:
      "Estate homes with delicate surfaces, extensive millwork, and heavy tree cover need careful dusting and humidity-aware care of woodwork and stone",
  },
  "spring-branch": {
    id: "spring-branch",
    name: "Spring Branch",
    zips: ["77080", "77055"],
    persona: "a mix of long-time residents, families, and young professionals",
    housing: "mid-century ranch homes alongside new-construction townhomes",
    context:
      "a large, diverse area northwest of the Loop bordered by I-10 and the Katy Freeway",
    subAreas: ["Spring Branch East", "Spring Branch Central", "Spring Shadows"],
    climateAngle:
      "Older ranch homes here often have aging bathrooms and kitchens where Houston humidity accelerates mildew, while hard water leaves scale on tubs and fixtures",
  },
  "washington-ave-memorial-park": {
    id: "washington-ave-memorial-park",
    name: "Washington Ave. / Memorial Park",
    zips: ["77007"],
    persona: "young professionals near Houston's largest urban park",
    housing: "new-construction townhomes and low-rise condos",
    context:
      "the corridor linking the Washington Avenue nightlife district to Memorial Park and the Houston Arboretum",
    climateAngle:
      "Townhome living near Memorial Park's trails tracks in dust and pollen; tall stairwell windows and hard water make glass and fixture care a recurring need",
  },
  "greater-uptown": {
    id: "greater-uptown",
    name: "Greater Uptown / Galleria",
    zips: ["77056", "77057"],
    persona: "professionals and downsizers in high-rise and townhome living",
    housing: "luxury high-rise condos and townhomes around the Galleria",
    context:
      "Houston's Uptown district centered on The Galleria and Post Oak Boulevard",
    subAreas: ["Tanglewood-adjacent", "Post Oak"],
    climateAngle:
      "High-rise condos have floor-to-ceiling glass where Houston's hard water spots quickly; tight schedules make reliable recurring service essential",
  },
  bellaire: {
    id: "bellaire",
    name: "Bellaire",
    zips: ["77401"],
    persona: "families drawn to top-rated schools",
    housing: "a fast-turning mix of mid-century homes and new-construction rebuilds",
    context:
      "the independent 'City of Homes' surrounded by Houston, known for its family-friendly streets and schools",
    climateAngle:
      "Bellaire's steady teardown-and-rebuild activity means post-construction dust is common, and new homes with large windows show Houston hard-water spotting",
  },
  "west-university-place": {
    id: "west-university-place",
    name: "West University Place",
    zips: ["77005"],
    persona: "families and Rice University faculty",
    housing: "compact lots with renovated cottages and newer two-story homes",
    context:
      "an affluent independent city next to Rice University and the Texas Medical Center",
    climateAngle:
      "Smaller West U lots pack active family homes close together; Houston humidity and hard water mean kitchens and bathrooms need frequent, careful attention",
  },
  "river-oaks": {
    id: "river-oaks",
    name: "River Oaks",
    zips: ["77019"],
    persona: "established, high-net-worth households",
    housing: "large estate homes and luxury condos",
    context:
      "one of Houston's most prestigious neighborhoods along River Oaks Boulevard between downtown and Uptown",
    climateAngle:
      "Estate homes with fine finishes, marble, and extensive woodwork need gentle, humidity-aware care that protects delicate surfaces",
  },
  "greenway-upper-kirby-area": {
    id: "greenway-upper-kirby-area",
    name: "Greenway / Upper Kirby",
    zips: ["77098", "77027"],
    persona: "young professionals and couples who want a walkable inner-loop base",
    housing: "mid-rise condos and townhomes alongside older bungalows",
    context:
      "a walkable district around Kirby Drive and the Greenway Plaza office complex",
    climateAngle:
      "Condo and townhome living near busy corridors tracks in dust; hard water and humidity make glass, showers, and fixtures a recurring focus",
  },
  "medical-center-area": {
    id: "medical-center-area",
    name: "Medical Center Area",
    zips: ["77030", "77025"],
    persona: "physicians, nurses, researchers, and students on demanding shift schedules",
    housing: "high-rise condos, apartments, and nearby single-family homes",
    context:
      "the residential areas surrounding the Texas Medical Center, the largest medical complex in the world",
    climateAngle:
      "Shift workers need flexible, reliable cleaning while they're at the hospital; condo glass and bathrooms show Houston's hard water and humidity quickly",
  },
  westchase: {
    id: "westchase",
    name: "Westchase",
    zips: ["77042", "77077"],
    persona: "corporate professionals and relocating households in corporate housing",
    housing: "a large stock of apartments and corporate-lease townhomes plus single-family homes",
    context:
      "a major west Houston business district along the Westpark Tollway and Beltway 8",
    climateAngle:
      "High apartment and corporate-housing turnover makes move-in/move-out cleaning frequent, and humidity drives mildew in units that sit between tenants",
  },
  "briar-forest": {
    id: "briar-forest",
    name: "Briar Forest",
    zips: ["77077", "77042"],
    persona: "established families and Energy Corridor professionals",
    housing: "established single-family homes and townhomes",
    context:
      "a west Houston area between the Energy Corridor and Westchase, near Terry Hershey Park",
    climateAngle:
      "Wooded streets near Terry Hershey Park bring in pollen and leaf debris, and Houston humidity calls for steady bathroom and kitchen upkeep",
  },
  "oak-forest": {
    id: "oak-forest",
    name: "Oak Forest",
    zips: ["77018", "77092"],
    persona: "families and professionals in a mature, tree-lined neighborhood",
    housing: "1950s ranch homes alongside new-construction rebuilds",
    context:
      "an established northwest Houston neighborhood next to Garden Oaks, known for its mature oak canopy",
    subAreas: ["Garden Oaks", "Shepherd Park Plaza"],
    climateAngle:
      "The heavy oak canopy that gives the area its name also means heavy pollen and leaf litter indoors; mid-century homes with original bathrooms need humidity-aware mildew control",
  },
  "mid-west": {
    id: "mid-west",
    name: "Mid West",
    zips: ["77063", "77042"],
    persona: "a diverse mix of families, renters, and professionals",
    housing: "apartments and condos alongside ranch-style single-family homes",
    context:
      "a west Houston area near Westchase, the Harwin shopping corridor, and Beltway 8",
    climateAngle:
      "A high share of apartments and condos means frequent move-in/move-out cleaning, with Houston humidity driving mildew in units between tenants",
  },
  katy: {
    id: "katy",
    name: "Katy",
    zips: ["77449", "77450", "77494"],
    persona: "growing families in master-planned communities",
    housing: "new-construction and recent single-family homes",
    context:
      "a fast-growing west suburb along the Grand Parkway, anchored by Cinco Ranch and highly rated Katy ISD schools",
    subAreas: ["Cinco Ranch", "Seven Meadows", "Cross Creek Ranch"],
    climateAngle:
      "New large homes have abundant glass and tile where Houston's notably hard suburban water leaves mineral spots, and growing families generate steady cleaning demand",
  },
  "sugar-land": {
    id: "sugar-land",
    name: "Sugar Land",
    zips: ["77478", "77479", "77498"],
    persona: "dual-income families in master-planned communities",
    housing: "well-kept single-family homes in planned developments",
    context:
      "an affluent Fort Bend County suburb anchored by First Colony, Riverstone, and Sugar Land Town Square",
    subAreas: ["First Colony", "Riverstone", "Telfair", "New Territory"],
    climateAngle:
      "Hard water is pronounced in the Fort Bend suburbs, leaving scale on glass showers and fixtures, while large planned-community homes benefit from consistent recurring care",
  },
  "the-woodlands": {
    id: "the-woodlands",
    name: "The Woodlands",
    zips: ["77380", "77381", "77382", "77384", "77389"],
    persona: "corporate relocation families and executives",
    housing: "single-family homes set among heavily forested villages",
    context:
      "a master-planned community north of Houston organized into villages around The Woodlands Waterway and Market Street, near ExxonMobil's campus",
    subAreas: ["Grogan's Mill", "Cochran's Crossing", "Sterling Ridge", "Creekside Park"],
    climateAngle:
      "The dense pine forest the community is built around brings heavy pollen and needle litter indoors year-round, and humidity calls for steady mildew control",
  },
};

export function getLocationProfile(id: string): LocationProfile | undefined {
  return locationProfiles[id];
}

export const PROFILE_LOCATION_IDS = Object.keys(locationProfiles);

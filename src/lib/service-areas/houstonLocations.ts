export type HoustonServiceAreaSlug =
  | "houston"
  | "spring-branch"
  | "greater-heights"
  | "greenway-upper-kirby-area"
  | "memorial"
  | "greater-uptown"
  | "bellaire"
  | "medical-center-area"
  | "the-memorial-villages"
  | "river-oaks"
  | "mid-west"
  | "briar-forest"
  | "west-university-place"
  | "washington-ave-memorial-park"
  | "energy-corridor"
  | "katy"
  | "sugar-land"
  | "the-woodlands"
  | "westchase"
  | "rice-military"
  | "oak-forest";

export type HoustonServiceArea = {
  name: string;
  slug: HoustonServiceAreaSlug;
  imageUrl: string;
  imageAlt: string;
  mapEmbedUrl: string;
};

export const houstonServiceAreas: HoustonServiceArea[] = [
  {
    name: "Houston",
    slug: "houston",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKerPRAhrgFAwqQ4Bx97YSaJmXiMCRycHO6sIlv",
    imageAlt: "Cleaning Service in Houston, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55344.694277543644!2d-95.4149766!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d1d5b%3A0x2f8ac5d5b2c5c0a6!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1765585000000!5m2!1sen!2sus",
  },
  {
    name: "Spring Branch",
    slug: "spring-branch",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeCJVSdDTbvrsSFZYTU9dOXWt4AK3hpN8y1cQ7",
    imageAlt: "Cleaning Service in Spring Branch, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55391.29912778142!2d-95.61376360302717!3d29.807809860942122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4d1e3fe62e7%3A0x79b1bdebce356dbb!2sSpring%20Branch%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348071659!5m2!1ses-419!2sar",
  },
  {
    name: "Greater Heights",
    slug: "greater-heights",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeHsVvhc03fjtVXkYx94QSdW0bKvNOe6Ms1uUR",
    imageAlt: "Cleaning Service in Houston Heights, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26025.77270994397!2d-95.42226391989185!3d29.800524476055337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c76057440d4d%3A0xbae14d1cb8cfb463!2sGreater%20Heights%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348748461!5m2!1ses-419!2sar",
  },
  {
    name: "Greenway / Upper Kirby Area",
    slug: "greenway-upper-kirby-area",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeqfPmAjrplLSJ5y74UtdbjwOHGFRf2Y86QX0m",
    imageAlt: "Cleaning Service in Upper Kirby, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27716.773061382202!2d-95.4560515584042!3d29.731441405267837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0fc5508eac1%3A0x7c59914200b53250!2sGreenway%20%2F%20Upper%20Kirby%20Area%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764347927565!5m2!1ses-419!2sar",
  },
  {
    name: "Memorial",
    slug: "memorial",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeVwKVGcXSiG9Z87dAevx4W3BMCKN5nR0IhOq1",
    imageAlt: "Cleaning Service in Memorial, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55414.8151185556!2d-95.63740240336168!3d29.765322766504777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640db64ac9edc9f%3A0x63d940de185cbbec!2sMemorial%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348139016!5m2!1ses-419!2sar",
  },
  {
    name: "Greater Uptown",
    slug: "greater-uptown",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKe8EYzrkxtkZSlms1oIuXejnzJNr9D84OidBGh",
    imageAlt: "Cleaning Service in Uptown, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27709.768389757024!2d-95.49527179085372!3d29.756785348249736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3e2ea722ecb%3A0xf2665532978422d4!2sGreater%20Uptown%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764347865055!5m2!1ses-419!2sar",
  },
  {
    name: "Bellaire",
    slug: "bellaire",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeh4p3y3J6MaugieZ84fAlqrsUB1phdGnY7jSW",
    imageAlt: "Cleaning Service in Bellaire, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27723.359449305583!2d-95.48649610845062!3d29.70759295605154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c191b6af63e5%3A0x8697ad801d2d66e6!2sBellaire%2C%20Texas%2077401%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348461757!5m2!1ses-419!2sar",
  },
  {
    name: "Medical Center Area",
    slug: "medical-center-area",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeid10QrZ8JaU1WVTRvhHDklsYA5QFM2r8nOqS",
    imageAlt: "Cleaning Service in Medical Center Area, TX",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42323.2687869725!2d-95.43501498643622!3d29.718174519011658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0765671946f%3A0xdd84c3d5f11628b6!2sMedical%20Center%20Area%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348827047!5m2!1ses-419!2sar",
  },
  {
    name: "The Memorial Villages",
    slug: "the-memorial-villages",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKe05BgK46kZh38MXiI97EpJ5RQsgBuYaOwVrFH",
    imageAlt: "House cleaning services in The Memorial Villages, Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27706.00689558151!2d-95.53633100832845!3d29.770386903990385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c47fe7a8a1d1%3A0xc1b7b2410ed347f8!2sThe%20Memorial%20Villages%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348226378!5m2!1ses-419!2sar",
  },
  {
    name: "River Oaks",
    slug: "river-oaks",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKed3Da8yMpvGO2NaeJolDh9SPIMcn7wWiQB3qg",
    imageAlt: "House cleaning services in River Oaks, Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40081.54182040384!2d-95.46429615855226!3d29.76346986344888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0dfc21771d5%3A0x138195793e80fe8a!2sRiver%20Oaks%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348011278!5m2!1ses-419!2sar",
  },
  {
    name: "Mid West",
    slug: "mid-west",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKetFRjADTXO2pHjNdexwirzUTn9m81q6GJov4K",
    imageAlt: "House cleaning services in Mid West Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48506.37079555597!2d-95.54473072500132!3d29.737612739988165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3a59a546591%3A0x20ce4f0f96e5fbc4!2sMid%20West%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348178239!5m2!1ses-419!2sar",
  },
  {
    name: "Briar Forest",
    slug: "briar-forest",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKekrgrbHE4h6r17lQ0qNKSzn34kubscIgeAvpt",
    imageAlt: "House cleaning services in Briar Forest, Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56716.13259284799!2d-95.56433635120409!3d29.75973506535396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dcbaa335bf8f%3A0x27a273ba1403b58a!2sBriar%20Forest%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348427212!5m2!1ses-419!2sar",
  },
  {
    name: "West University Place",
    slug: "west-university-place",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeTTa3DieTLGytOV85A0uDqRMbgdP6BmKWiaIz",
    imageAlt: "House cleaning services in West University Place, Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13860.559331591601!2d-95.44313323090229!3d29.71570850144992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0537be835c5%3A0xa3c24470dc9e66b!2sWest%20University%20Place%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348611933!5m2!1ses-419!2sar",
  },
  {
    name: "Washington Ave./ Memorial Park",
    slug: "washington-ave-memorial-park",
    imageUrl:
      "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKexwJaLadrdoT0ZUYSJRgMkXBvqI2twapiGLc1",
    imageAlt:
      "House cleaning services in Washington Ave Memorial Park, Houston",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74869.25624181979!2d-95.50892076884148!3d29.782201084014865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c74b7418d3c7%3A0xd51cb2b8600d8d8e!2sWashington%20Ave.%2F%20Memorial%20Park%2C%20Houston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1764348693926!5m2!1ses-419!2sar",
  },
  {
    name: "Energy Corridor",
    slug: "energy-corridor",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/BPAmericasHQ.JPG",
    imageAlt: "BP Americas headquarters in Energy Corridor, Houston TX — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Energy+Corridor,+Houston,+TX+77079&z=13&output=embed",
  },
  {
    name: "Katy",
    slug: "katy",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Katysign.JPG",
    imageAlt: "City of Katy Texas welcome sign — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Katy,+TX+77494&z=12&output=embed",
  },
  {
    name: "Sugar Land",
    slug: "sugar-land",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Sugarland_Town_Square.jpg",
    imageAlt: "Sugar Land Town Square in First Colony, Sugar Land TX — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Sugar+Land,+TX+77479&z=12&output=embed",
  },
  {
    name: "The Woodlands",
    slug: "the-woodlands",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Woodlands_Waterway.jpg",
    imageAlt: "The Woodlands Waterway in The Woodlands TX — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=The+Woodlands,+TX+77380&z=12&output=embed",
  },
  {
    name: "Rice Military",
    slug: "rice-military",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Beer_can_house.jpg",
    imageAlt: "Beer Can House landmark in Rice Military Houston TX — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Rice+Military,+Houston,+TX+77007&z=14&output=embed",
  },
  {
    name: "Westchase",
    slug: "westchase",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Westchase%2C_Houston%2C_TX%2C_USA_-_panoramio.jpg",
    imageAlt: "Westchase district Houston TX urban landscape — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Westchase,+Houston,+TX+77042&z=13&output=embed",
  },
  {
    name: "Oak Forest",
    slug: "oak-forest",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/OakForestHoustonTX.JPG",
    imageAlt: "Oak Forest neighborhood street in Houston TX — professional house cleaning services",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Oak+Forest,+Houston,+TX+77018&z=14&output=embed",
  },
];

export function getHoustonServiceArea(
  slug: HoustonServiceAreaSlug,
): HoustonServiceArea {
  const area = houstonServiceAreas.find((a) => a.slug === slug);
  if (!area) {
    throw new Error(`Houston service area not found for slug: ${slug}`);
  }
  return area;
}

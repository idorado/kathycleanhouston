import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";
import {
  getHoustonServiceArea,
  type HoustonServiceAreaSlug,
} from "@/lib/service-areas/houstonLocations";
import { getLocationProfile } from "@/config/location-profiles";
import { buildServiceLocationProps, type EngineServiceId } from "@/config/service-content";
import { parseServiceLocationSlug, serviceLocationMatrix } from "@/lib/location-seo";
import {
  houseCleaning,
  recurringHouseCleaning,
  deepCleaning,
  moveInOutCleaning,
} from "@/config/json-ld";

const SITE_URL = "https://kathycleanhouston.com";

// Only serve the slugs we explicitly generate; everything else 404s cleanly so
// no thin/on-demand pages leak into the crawl queue.
export const dynamic = "force-static";
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return serviceLocationMatrix().map((c) => ({ slug: c.slug }));
}

function resolve(slug: string) {
  const combo = parseServiceLocationSlug(slug);
  if (!combo) return null;
  const profile = getLocationProfile(combo.locationId);
  if (!profile) return null;
  let area;
  try {
    area = getHoustonServiceArea(combo.locationId as HoustonServiceAreaSlug);
  } catch {
    // Batch-2 neighborhoods aren't in houstonLocations — synthesize the
    // image/map from the profile so they still render (no /service-areas hub).
    if (profile.image && profile.mapEmbedUrl) {
      area = {
        name: profile.name,
        slug: combo.locationId as HoustonServiceAreaSlug,
        imageUrl: profile.image.url,
        imageAlt: profile.image.alt,
        mapEmbedUrl: profile.mapEmbedUrl,
      };
    } else {
      return null;
    }
  }
  return { combo, profile, area };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return { title: "Not Found | Kathy Clean Houston" };
  const props = buildServiceLocationProps(r.combo.serviceId, r.profile, r.area);
  return {
    title: props.title,
    description: props.description,
    alternates: { canonical: props.canonical },
    openGraph: {
      title: props.title,
      description: props.description,
      url: `${SITE_URL}${props.canonical}`,
      siteName: "Kathy Clean Houston",
      locale: "en_US",
      type: "website",
      // Inline OG image — Next merges openGraph shallowly, so setting it here
      // (rather than inheriting the layout's) ensures social/AI previews render.
      images: [
        {
          url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
          width: 1200,
          height: 630,
          alt: `Kathy Clean Houston — ${props.breadcrumbName ?? "house cleaning"}`,
        },
      ],
    },
  };
}

const SCHEMA_BUILDERS: Record<EngineServiceId, (location: string) => Record<string, unknown>> = {
  "house-cleaning": (loc) => houseCleaning(loc) as Record<string, unknown>,
  "recurring-house-cleaning": recurringHouseCleaning,
  "deep-cleaning": deepCleaning,
  "move-in-move-out": moveInOutCleaning,
};

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) notFound();

  const props = buildServiceLocationProps(r.combo.serviceId, r.profile, r.area);

  // Build the service schema, then pin @id/url to this page's real canonical so
  // the JSON-LD URL always matches the page URL (the builders default to their
  // own slug conventions).
  const raw = SCHEMA_BUILDERS[r.combo.serviceId](r.profile.name);
  const schema = {
    ...raw,
    "@id": `${SITE_URL}${props.canonical}#service`,
    url: `${SITE_URL}${props.canonical}`,
  };

  return (
    <LocationServiceAreaPage {...props} relatedServicesLocationId={r.profile.id}>
      <JsonLd data={schema} />
    </LocationServiceAreaPage>
  );
}

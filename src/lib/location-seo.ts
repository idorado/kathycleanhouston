// Programmatic service×location taxonomy for the [slug] engine.
// Locations come from the profile registry (each id matches a
// HoustonServiceArea slug so image/map assets exist). Services are the 4 core
// residential services. Both the [slug] route and the sitemap derive from here.

import {
  ENGINE_SERVICE_IDS,
  serviceLocationSlug,
  type EngineServiceId,
} from "@/config/service-content";
import { PROFILE_LOCATION_IDS } from "@/config/location-profiles";

export const ENGINE_LOCATION_IDS = PROFILE_LOCATION_IDS;

export interface ServiceLocationCombo {
  serviceId: EngineServiceId;
  locationId: string;
  slug: string;
}

export function serviceLocationMatrix(): ServiceLocationCombo[] {
  return ENGINE_SERVICE_IDS.flatMap((serviceId) =>
    ENGINE_LOCATION_IDS.map((locationId) => ({
      serviceId,
      locationId,
      slug: serviceLocationSlug(serviceId, locationId),
    })),
  );
}

export const SERVICE_LOCATION_SLUGS = serviceLocationMatrix().map((c) => c.slug);

/** Parse a top-level slug into a service+location combo, or null if it isn't
 *  a generated engine page. Service ids are distinct at position 0, so prefix
 *  matching is unambiguous. */
export function parseServiceLocationSlug(slug: string): ServiceLocationCombo | null {
  for (const serviceId of ENGINE_SERVICE_IDS) {
    const prefix = `${serviceId}-`;
    if (slug.startsWith(prefix)) {
      const locationId = slug.slice(prefix.length);
      if ((ENGINE_LOCATION_IDS as string[]).includes(locationId)) {
        return { serviceId, locationId, slug };
      }
    }
  }
  return null;
}

import { PrismaClient } from "../generated/prisma/client";

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const toRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
  };
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

export const isWithinRadius = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radiusKm: number
): boolean => {
  const distance = calculateDistance(lat1, lon1, lat2, lon2);
  return distance <= radiusKm;
};
// This is used to get a bounding box around a point (lat, lon) with a given radius in kilometers
export const getBoundingBox = (
  lat: number,
  lon: number,
  radiusKm: number
): { minLat: number; maxLat: number; minLon: number; maxLon: number } => {
  const R = 6371; // Radius of the Earth in kilometers
  const latDelta = (radiusKm / R) * (180 / Math.PI);
  const lonDelta =
    ((radiusKm / R) * (180 / Math.PI)) / Math.cos((lat * Math.PI) / 180);
  return {
    minLat: lat - latDelta,
    maxLat: lat + latDelta,
    minLon: lon - lonDelta,
    maxLon: lon + lonDelta,
  };
};

export const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  return calculateDistance(lat1, lon1, lat2, lon2);
};

export const midpoint = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): { lat: number; lon: number } => {
  const toRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
  };
  const toDegrees = (radians: number): number => {
    return (radians * 180) / Math.PI;
  };
  const dLon = toRadians(lon2 - lon1);

  const Bx = Math.cos(toRadians(lat2)) * Math.cos(dLon);
  const By = Math.cos(toRadians(lat2)) * Math.sin(dLon);
  const midLat = Math.atan2(
    Math.sin(toRadians(lat1)) + Math.sin(toRadians(lat2)),
    Math.sqrt(
      (Math.cos(toRadians(lat1)) + Bx) * (Math.cos(toRadians(lat1)) + Bx) +
        By * By
    )
  );
  const midLon =
    toRadians(lon1) + Math.atan2(By, Math.cos(toRadians(lat1)) + Bx);
  return { lat: toDegrees(midLat), lon: toDegrees(midLon) };
};

export const destinationPoint = (
  lat: number,
  lon: number,
  bearing: number,
  distanceKm: number
): { lat: number; lon: number } => {
  const R = 6371; // Radius of the Earth in kilometers
  const toRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
  };
  const toDegrees = (radians: number): number => {
    return (radians * 180) / Math.PI;
  };

  const angularDistance = distanceKm / R;
  const bearingRad = toRadians(bearing);
  const latRad = toRadians(lat);
  const lonRad = toRadians(lon);

  const destLatRad = Math.asin(
    Math.sin(latRad) * Math.cos(angularDistance) +
      Math.cos(latRad) * Math.sin(angularDistance) * Math.cos(bearingRad)
  );
  const destLonRad =
    lonRad +
    Math.atan2(
      Math.sin(bearingRad) * Math.sin(angularDistance) * Math.cos(latRad),
      Math.cos(angularDistance) - Math.sin(latRad) * Math.sin(destLatRad)
    );
  return { lat: toDegrees(destLatRad), lon: toDegrees(destLonRad) };
};

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org";

export interface LocationResult {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  address: {
    city?: string;
    state?: string;
    country?: string;
    [key: string]: string | undefined;
  };
}

type Location = {
  lat: number;
  lng: number;
  city?: string;
  source: "auto" | "manual";
};

/**
 * Search for location suggestions (autocomplete).
 */
export async function searchLocation(
  query: string,
  limit: number = 5
): Promise<Location[]> {
  const url = new URL(`${NOMINATIM_BASE_URL}/search`);
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  // url.searchParams.set("addressdetails", "1"); // Optional: include address details
  url.searchParams.set("layer", "address");
  url.searchParams.set("countrycodes", "in");
  url.searchParams.set("limit", limit.toString());

  const response = await fetch(url.toString(), {
    headers: {
      "User-Agent": "digital-bazaar-app/1.0 (dev@gmail.com)",
    },
  });

  if (!response.ok) {
    throw new Error(`Nominatim search failed: ${response.statusText}`);
  }

  const locations = await response.json();
  const seen = new Set<string | undefined>();
  return locations
    .map((loc: LocationResult) => ({
      lat: parseFloat(loc.lat),
      lng: parseFloat(loc.lon),
      city:
        loc.display_name ||
        loc.address.city ||
        loc.address.town ||
        loc.address.village ||
        "",
      source: "manual",
    }))
    .filter((loc: Location) => {
      if (seen.has(loc.city)) return false;
      seen.add(loc.city);
      return true;
    });
}

/**
 * Reverse geocode: get address from lat/lon.
 */
export async function reverseLocation(
  lat: number,
  lon: number
): Promise<Location> {
  const url = new URL(`${NOMINATIM_BASE_URL}/reverse`);
  url.searchParams.set("lat", lat.toString());
  url.searchParams.set("lon", lon.toString());
  url.searchParams.set("format", "json");

  const response = await fetch(url.toString(), {
    headers: {
      "User-Agent": "digital-bazaar-app/1.0 (@example.com)",
    },
  });

  if (!response.ok) {
    throw new Error(`Nominatim reverse failed: ${response.statusText}`);
  }

  const location = await response.json();
  return {
    lat,
    lng: lon,
    city:
      location.display_name ||
      location.address.city ||
      location.address.town ||
      location.address.village ||
      "",
    source: "manual",
  };
}
const prisma = new PrismaClient();

type DisplayLocation = {
  lat: string;
  lon: string;
  displayName: string;
  village?: string;
  block?: string;
  district?: string;
  state?: string;
};
export async function searchLocationDB(
  keyword: string,
  limit: number = 10
): Promise<DisplayLocation[]> {
  const results: DisplayLocation[] = await prisma.$queryRaw`
  SELECT *
  FROM "Location"
  WHERE village ILIKE ${"%" + keyword + "%"}
     OR block ILIKE ${"%" + keyword + "%"}
     OR district ILIKE ${"%" + keyword + "%"}
     OR state ILIKE ${"%" + keyword + "%"}
  ORDER BY
    CASE
      WHEN village ILIKE ${"%" + keyword + "%"} THEN 1
      WHEN block ILIKE ${"%" + keyword + "%"} THEN 2
      WHEN district ILIKE ${"%" + keyword + "%"} THEN 3
      WHEN state ILIKE ${"%" + keyword + "%"} THEN 4
      ELSE 5
    END
  LIMIT ${limit};
`;
  return results;
}

const userAgent =
  process.env.USER_AGENT || "MyAppOnCloud<myapponcloud@gmail.com>";

// Function to pick best result (node preferred, relation fallback)
function pickBestResult(results: any) {
  const node = results.find(
    (r: any) =>
      r.osm_type === "node" && ["village", "hamlet", "suburb"].includes(r.type)
  );

  if (node) {
    return {
      lat: parseFloat(node.lat),
      lon: parseFloat(node.lon),
      source: "node",
      api_display_name: node.display_name,
    };
  }

  const relation = results.find(
    (r: any) => r.osm_type === "relation" && r.type === "administrative"
  );
  if (relation) {
    const lat =
      (parseFloat(relation.boundingbox[0]) +
        parseFloat(relation.boundingbox[1])) /
      2;
    const lon =
      (parseFloat(relation.boundingbox[2]) +
        parseFloat(relation.boundingbox[3])) /
      2;

    return {
      lat,
      lon,
      source: "relation",
      api_display_name: relation.display_name,
    };
  }

  return null;
}

// Function to query Nominatim
export async function geocode(address: string) {
  await new Promise((r) => setTimeout(r, 1000)); // pause between batches
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}&countrycodes=in&addressdetails=1`;
  try {
    const res = await fetch(url, {
      // cache: "force-cache",
      headers: {
        "User-Agent": userAgent,
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return pickBestResult(data);
  } catch (error) {
    console.error(`💔${error}`);
    return null;
  }
}

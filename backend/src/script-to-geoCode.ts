import dotenv from "dotenv";

import { PrismaClient } from "./generated/prisma/client";

dotenv.config();

const prisma = new PrismaClient();

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
      api_display_name: node.display_name,
    };
  }

  return null;
}

// Function to query Nominatim
async function geocode(address: any) {
  await new Promise((r) => setTimeout(r, 2000)); // pause between batches
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}&countrycodes=in&addressdetails=1`;
  try {
    const res = await fetch(url, {
      // cache: "force-cache",
      headers: {
        "User-Agent": "DigitalBazar<manugindy@gmail.com>",
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return pickBestResult(data);
  } catch {
    return null;
  }
}

async function processBatch(limit: number = 100) {
  const locations = await prisma.location.findMany({
    where: {
      lat: null,
      lon: null,
    },
    take: limit,
  });

  for (const location of locations) {
    const address =
      location.village +
      ", " +
      location.block +
      ", " +
      location.district +
      ", " +
      location.state +
      ", India";
    const result = await geocode(address);

    if (result) {
      console.log(`Best match for "${address}":`);
      console.log(result);
      await prisma.location.update({
        where: { id: location.id },
        data: {
          lat: result.lat,
          lon: result.lon,
          source: result.source,
          apiDisplayName: result.api_display_name,
        },
      });
    } else {
      console.log(`No match found for "${address} - ${location.id}"`);
      const addressWithNoVillage =
        location.block +
        ", " +
        location.district +
        ", " +
        location.state +
        ", India";

      console.log(
        `Requesting for address with no village ${addressWithNoVillage}`
      );
      await new Promise((r) => setTimeout(r, 1000));
      const result1 = await geocode(addressWithNoVillage);

      if (result1) {
        await prisma.location.update({
          where: { id: location.id },
          data: {
            lat: result1.lat,
            lon: result1.lon,
            source: result1.source,
            apiDisplayName: result1.api_display_name,
          },
        });
      } else {
        console.log(`No match found for "${address} - ${location.id}"`);
      }
    }
  }
}

(async () => {
  // keep running until all records are processed
  while (true) {
    await processBatch(100);
    const remaining = await prisma.location.count({
      where: { lat: null, lon: null },
    });
    if (remaining === 0) break;
    console.log(`${remaining} addresses left...`);
  }
  console.log("Geocoding complete!");
})();

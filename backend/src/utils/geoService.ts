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

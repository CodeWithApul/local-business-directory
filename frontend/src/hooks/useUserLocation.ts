// hooks/useUserLocation.ts
import { useEffect, useState } from "react";

import { fetchCityFromCoords } from "../utils/geoUtils";

// import { dummyLocations } from "../data/dummyData";

export type Location = {
  lat: number;
  lng: number;
  displayName: string;
  village?: string;
  block?: string;
  district?: string;
  state?: string;
  source: "auto" | "manual";
};

export const useUserLocation = () => {
  const [location, setLocation] = useState<Location>();
  // FIXME: Memorize it to avoid re-request API for same co-ordinates
  const detectLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const city = await fetchCityFromCoords(latitude, longitude);
        setLocation({
          lat: latitude,
          lng: longitude,
          displayName: city,
          source: "auto",
        });
        // setLocation({ ...dummyLocations[1] });
      },
      (err) => console.error("Location error:", err),
      { enableHighAccuracy: true }
    );
  };
  const updateLocation = (location: Location) => {
    setLocation(location);
  };
  useEffect(() => detectLocation(), []);

  return { location, detectLocation, updateLocation };
};

// hooks/useUserLocation.ts
import { useEffect, useState } from "react";

import { fetchAddressFromCoords } from "../utils/geoUtils";

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
        const address = await fetchAddressFromCoords(latitude, longitude);
        setLocation({
          lat: latitude,
          lng: longitude,
          displayName: address,
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
  useEffect(() => {
    if (!location) detectLocation();
  }, [location]);

  return { location, detectLocation, updateLocation };
};

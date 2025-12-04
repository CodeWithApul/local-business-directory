// hooks/useUserLocation.ts
import { useEffect, useRef, useState } from "react";

import { geocodeLatLng } from "../utils/geoUtils";

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
  const cachedCoords = useRef<{ lat: number; lng: number } | null>(null);
  const detectLocation = (forced = false) => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        // Skip if same coords as before
        if (
          !forced &&
          cachedCoords.current &&
          cachedCoords.current.lat === latitude &&
          cachedCoords.current.lng === longitude
        ) {
          return;
        }

        cachedCoords.current = { lat: latitude, lng: longitude };

        // const address = await fetchAddressFromCoords({
        //   lat: latitude,
        //   lon: longitude,
        // });
        const address = await geocodeLatLng({ lat: latitude, lon: longitude });
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
    detectLocation();
  }, []);

  return { location, detectLocation, updateLocation };
};

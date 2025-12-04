const GMAP_API_KEY = `${import.meta.env.GMAP_API_KEY}`;
// loadGoogleMaps.ts
export function loadGoogleMaps(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject("Google Maps failed to load");
    document.head.appendChild(script);
  });
}

export const fetchAddressFromCoords = async ({
  lat,
  lon,
}: LatLng): Promise<string> => {
  // const res = await fetch(
  //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  // );
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GMAP_API_KEY}`
  );
  const data = await res.json();
  if (data.status !== "OK" || !data.results.length) return "";

  return data.results[0].formatted_address;
};

export const fetchAddressFromCoordsGMap = async (
  lat: number,
  lng: number
): Promise<google.maps.places.AutocompletePrediction> => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GMAP_API_KEY}`
  );
  return await res.json();
};

export interface LatLng {
  lat: number;
  lon: number;
}

export const geocodeAddress = (address: string): Promise<LatLng> => {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results?.[0]) {
        const location = results?.[0].geometry.location;
        resolve({ lat: location.lat(), lon: location.lng() });
      } else {
        reject(new Error(`Geocode failed: ${status}`));
      }
    });
  });
};

export const geocodeLatLng = (latlng: LatLng): Promise<string> => {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode(
      { location: { lat: latlng.lat, lng: latlng.lon } },
      (results, status) => {
        if (status === "OK" && results?.[0]) {
          console.log("Formatted address: ", results[0].formatted_address);
          resolve(results[0].formatted_address);
        } else {
          console.error("Geocoder failed due to:", status);
          reject(new Error(`Geocode failed: ${status}`));
        }
      }
    );
  });
};

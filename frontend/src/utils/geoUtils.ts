export const fetchAddressFromCoords = async (
  lat: number,
  lng: number
): Promise<string> => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await res.json();
  console.log(data);
  return (
    data.display_name ||
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    ""
  );
};
// const GMAP_API_KEY = `${import.meta.env.GMAP_API_KEY}`;

// export const fetchAddressFromCoordsGMap = async (
//   lat: number,
//   lng: number
// ): Promise<google.maps.places.AutocompletePrediction> => {
//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GMAP_API_KEY}`
//   );
//   return await res.json();
// };

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

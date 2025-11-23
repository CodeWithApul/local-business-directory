export const fetchCityFromCoords = async (
  lat: number,
  lng: number
): Promise<string> => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await res.json();
  console.log(data);
  return (
    data.address?.city || data.address?.town || data.address?.village || ""
  );
};

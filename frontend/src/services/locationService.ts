export const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;
import type { Location } from "../hooks/useUserLocation";

export const getAutocompleteSuggestions = async (
  query: string
): Promise<Location[]> => {
  const res = await fetch(
    `${BASE_API_URL}/locations/autocomplete?q=${encodeURIComponent(query)}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

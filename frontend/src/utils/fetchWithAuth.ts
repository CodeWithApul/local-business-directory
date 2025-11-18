import { getAccessToken, setAccessToken } from "./tokenHelper";

const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

// main fetch wrapper
async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const accessToken = getAccessToken();

  // attach access token
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // if unauthorized, try refresh
  if (res.status === 401) {
    const refreshRes = await fetch(`${BASE_API_URL}/users/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ensures cookies are sent,
    });

    if (!refreshRes.ok) {
      // refresh failed → logout
      localStorage.removeItem("accessToken");
      throw new Error("Session expired. Please log in again.");
    }

    const { accessToken: newToken } = await refreshRes.json();
    setAccessToken(newToken);

    // retry original request with new token
    return fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${newToken}`,
      },
    });
  }

  return res;
}
export default fetchWithAuth;

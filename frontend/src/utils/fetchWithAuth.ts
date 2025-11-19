const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

let token: string | null = null;
let setTokenFn: ((t: string | null) => void) | null = null;

export function initApiClient(
  initialToken: string | null,
  setToken: (t: string | null) => void
) {
  token = initialToken;
  setTokenFn = setToken;
}
// main fetch wrapper
async function fetchWithAuth(url: string, options: RequestInit = {}) {
  // attach access token
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  // if unauthorized, try refresh
  if (res.status === 401) {
    const newToken = await refreshToken();
    token = newToken;
    if (setTokenFn) {
      setTokenFn(newToken);
    }

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

export async function refreshToken(): Promise<string> {
  const refreshRes = await fetch(`${BASE_API_URL}/users/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ensures cookies are sent,
  });

  if (!refreshRes.ok) {
    // refresh failed → logout
    throw new Error("Session expired. Please log in again.");
  }

  const { accessToken } = await refreshRes.json();
  return accessToken;
}

export default fetchWithAuth;

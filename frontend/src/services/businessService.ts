import type { CategoryFormValues } from "../pages/forms/admin/CategoryForm";
import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";
import fetchWithAuth from "../utils/fetchWithAuth";

import type { LoginFormValues } from "../schema/LoginFormSchema";
import type { BusinessBookingValues } from "../schema/BusinessBookingSchema";

const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

export async function getBusinessById(id: string) {
  const res = await fetch(BASE_API_URL + "/business/id/" + id, {
    method: "GET",
  });
  if (!res.ok) throw Error(`Unable to find business details`);

  return await res.json();
}

export async function getBusinessByAuth() {
  const res = await fetchWithAuth(BASE_API_URL + "/business/get", {
    method: "GET",
  });
  if (!res.ok) throw Error(`Unable to find business details`);

  return await res.json();
}

export async function getBusinesses() {
  const res = await fetch(BASE_API_URL + "/business", { method: "GET" });
  return res.json();
}

export async function addBusiness(data: BusinessFormValues) {
  const formData = toFormDataBusiness(data);

  return await fetch(`${BASE_API_URL}/business/create`, {
    method: "POST",
    body: formData,
  });
}

export async function updateBusiness(data: BusinessFormValues) {
  const formData = toFormDataBusiness(data);

  return await fetchWithAuth(`${BASE_API_URL}/business/update`, {
    method: "POST",
    body: formData,
  });
}

export async function sendLoginRequest(data: LoginFormValues): Promise<string> {
  const res = await fetch(`${BASE_API_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  });
  if (!res.ok) {
    throw new Error("Invalid credentials");
  }
  const { accessToken } = await res.json();
  return accessToken;
}

export async function sendLogoutRequest() {
  const res = await fetch(`${BASE_API_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Unable to Logout!");
  }
}

export async function sendOTP(
  email: string,
  phoneNumber: string,
  userId: string
) {
  return await fetch(`${BASE_API_URL}/users/generate-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phoneNumber, userId }),
  });
}

export async function verifyOTP(userId: string, otp: string, password: string) {
  return await fetch(`${BASE_API_URL}/users/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, otp, password }),
  });
}

function toFormDataBusiness(data: BusinessFormValues): FormData {
  return toFormData({
    logo: data.logo,
    businessId: data.businessId,
    businessName: data.businessName,
    ownerName: data.ownerName,
    landmark: data.landmark,
    street: data.street,
    country: data.country,
    city: data.city,
    state: data.state,
    postalCode: data.postalCode,
    lat: data.lat,
    lon: data.lon,
    phoneNumber: data.phoneNumber,
    email: data.email,
    category: data.category,
    description: data.description,
    media: data.media,
  });
}

function toFormData(data: FormEntity): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else {
      formData.append(key, value ?? "");
    }
  }
  return formData;
}

export type FormEntity = BusinessFormValues | CategoryFormValues;

export async function getBookings() {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }
  return res.json();
}

export async function getBookingById(id: number) {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/booking-by-id`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch booking for ID ${id}`);
  }
  return res.json();
}

export async function deleteBookingByBookingId(bookingId: number) {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/delete-booking`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: bookingId,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }
  return res.json();
}

export async function createBooking(businessBooking: BusinessBookingValues) {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/create-booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...businessBooking,
    }),
  });
  if (!res.ok) {
    throw new Error("Unable to create booking");
  }
  return await res.json();
}

export async function updateBooking(businessBooking: BusinessBookingValues) {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/update-booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...businessBooking,
    }),
  });
  if (!res.ok) {
    throw new Error("Unable to create booking");
  }
  return await res.json();
}

export async function getMatchedRecords({
  latitude,
  longitude,
  radiusKm,
  categoryId,
  keyword,
}: {
  latitude?: number;
  longitude?: number;
  radiusKm: number;
  categoryId?: number;
  keyword?: string;
}) {
  if (!latitude || !longitude) {
    throw new Error(`Latitude/Longitude undefined`);
  }
  const res = await fetch(`${BASE_API_URL}/business/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      latitude,
      longitude,
      radiusKm,
      categoryId,
      keyword,
    }),
  });
  return await res.json();
}

export function toDatetimeLocalString(isoString: string) {
  const date = new Date(isoString);
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().slice(0, 16); // "yyyy-MM-ddThh:mm"
}

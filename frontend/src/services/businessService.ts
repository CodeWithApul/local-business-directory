import type { CategoryFormValues } from "../pages/forms/admin/CategoryForm";
import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";
import fetchWithAuth from "../utils/fetchWithAuth";

import type { LoginFormValues } from "../schema/LoginFormSchema";

const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

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

export async function sendLoginRequest(data: LoginFormValues) {
  const res = await fetch(`${BASE_API_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  });
  if (!res.ok) {
    return false;
  }
  const { accessToken } = await res.json();

  localStorage.setItem("accessToken", accessToken);
  return true;
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
    logo: data.logo[0],
    businessName: data.businessName,
    ownerName: data.ownerName,
    street: data.street,
    country: data.country,
    city: data.city,
    state: data.state,
    postalCode: data.postalCode,
    phoneNumber: data.phoneNumber,
    email: data.email,
    category: data.category,
    description: data.description,
    media: data.media,
  });
  // data.media.forEach((file) => formData.append("media", file));
}

function toFormData(data: FormEntity): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value ?? "");
  }
  return formData;
}

export async function getBookingsByBusinessId() {
  const res = await fetchWithAuth(`${BASE_API_URL}/business/bookings`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }
  return res.json();
}

export async function getMatchedRecords({
  latitude,
  longitude,
  radiusKm,
  categoryId,
  keyword,
}: {
  latitude: number;
  longitude: number;
  radiusKm: number;
  categoryId?: string;
  keyword?: string;
}) {
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

export type FormEntity = BusinessFormValues | CategoryFormValues;

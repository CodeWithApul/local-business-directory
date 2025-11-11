import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";

const BASE_API_URL = "${import.meta.env.VITE_BACKEND_URL}/api";

export async function getBusinesses() {
  const res = await fetch(BASE_API_URL + "/business", { method: "GET" });
  return res.json();
}

export async function addBusiness(data: BusinessFormValues) {
  const formData = new FormData();
  formData.append("logo", data.logo[0]);
  formData.append("businessName", data.businessName);
  formData.append("ownerName", data.ownerName);
  formData.append("street", data.street);
  formData.append("country", data.country);
  formData.append("city", data.city);
  formData.append("state", data.state);
  formData.append("postalCode", data.postalCode);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("email", data.email);
  formData.append("category", data.category);
  formData.append("description", data.description ?? "");

  const res = await fetch(`${BASE_API_URL}/business/create`, {
    method: "POST",
    body: formData,
  });

  return res;
}

export async function sendOTP(
  email: string,
  phoneNumber: string,
  userId: string
) {
  const res = await fetch(`${BASE_API_URL}/users/generate-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phoneNumber, userId }),
  });
  return res;
}

export async function verifyOTP(userId: string, otp: string, password: string) {
  const res = await fetch(`${BASE_API_URL}/users/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, otp, password }),
  });
  return res;
}

import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";

const BASE_API_URL = "${import.meta.env.VITE_BACKEND_URL}/api";

export async function getBusinesses() {
  const res = await fetch(BASE_API_URL + "/business", { method: "GET" });
  return res.json();
}

export async function addBusiness(data: BusinessFormValues) {
  const formData = toFormDataTyped(data);

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

function toFormDataTyped(data: BusinessFormValues): FormData {
  const formData = new FormData();
  formData.append("logo", data.logo[0]);
  // data.media.forEach((file) => formData.append("media", file));
  (
    [
      "businessName",
      "ownerName",
      "street",
      "country",
      "city",
      "state",
      "postalCode",
      "phoneNumber",
      "email",
      "category",
    ] as const
  ).forEach((key) => formData.append(key, data[key]));

  formData.append("description", data.description ?? "");
  return formData;
}

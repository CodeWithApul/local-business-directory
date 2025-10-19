import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";

const API_URL = "http://localhost:5000/api/businesses";

export async function getBusinesses() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addBusiness(data: BusinessFormValues) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

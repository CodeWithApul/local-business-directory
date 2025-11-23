const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

export async function sendOTPToVisitor(mobile: string) {
  const result = await fetch(`${BASE_API_URL}/visitor/generate-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile }),
  });
  if (!result.ok) throw Error(`Unable to sent OTP to mobile ${mobile}`);

  const { id } = await result.json();
  return id;
}

export async function verifyOTPToVisitor(
  id: string,
  mobile: string,
  otp: string,
  businessId: string | number
) {
  const result = await fetch(`${BASE_API_URL}/visitor/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, otp, mobile, businessId }),
  });
  if (!result.ok) throw Error(`Unable to verify OTP sent to mobile ${mobile}`);

  const business = await result.json();
  return business.contact;
}

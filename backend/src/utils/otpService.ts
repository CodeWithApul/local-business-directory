import otpGenerator from 'otp-generator';
import twilio from 'twilio';

const sendOTPViaSMS = async (phoneNumber: string, otp: string) => {
  const client = twilio(
    process.env.TWILLIO_SID,
    process.env.TWILLIO_AUTH_TOKEN
  );
  const lookup = await client.lookups.v1
    .phoneNumbers(phoneNumber)
    .fetch({ type: ["carrier"] });

  if (lookup.carrier && lookup.carrier.type === "voip") {
    throw new Error("Cannot send OTP to VOIP numbers");
  }
  if (process.env.ENABLE_SMS_SERVICE !== "true")
    console.log("SMS service is disabled. Skipping sending OTP via SMS.");
  else
    await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: process.env.TWILLIO_PHONE_NUMBER,
      to: phoneNumber,
    });
};

const digitOnlyOTP = (length: number): string => {
  const otp = otpGenerator.generate(length, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return otp;
};

export { digitOnlyOTP, sendOTPViaSMS };

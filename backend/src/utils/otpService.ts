import twilio from "twilio";

const sendOTPViaSMS = async (phoneNumber: string, otp: string) => {
  const client = twilio(
    process.env.TWILLIO_SID,
    process.env.TWILLIO_AUTH_TOKEN
  );
  await client.messages.create({
    body: `Your OTP code is: ${otp}`,
    from: process.env.TWILLIO_PHONE_NUMBER,
    to: phoneNumber,
  });
};

import otpGenerator from "otp-generator";

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

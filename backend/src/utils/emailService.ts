import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";

const sendEmail = async (email: string, otp: string) => {
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       type: "OAuth2",
  //       user: process.env.EMAIL_FROM,
  //       clientId: process.env.GOOGLE_CLIENT_ID,
  //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //       refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  //     },
  //   });
  /* for testing purpose only */
  // console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
  // console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD);
  // console.log("EMAIL_FROM:", process.env.EMAIL_FROM);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  } as SMTPTransport.Options);
  try {
    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`, // sender address
      to: email, // list of receivers
      cc: process.env.EMAIL_FROM + "," + process.env.OTP_CC_EMAIL,
      subject:
        process.env.EMAIL_FROM_NAME + " :: Your One‑Time Passcode (OTP) ✔",
      text: "Use the one‑time passcode to complete your verification: " + otp, // plain‑text body
      html: `<h2>Confirm Your Sign‑In</h2>
  <p>Use the one‑time passcode below to complete your verification:</p>
  <div style="font-size:26px;font-weight:bold;letter-spacing:4px;background:#2563eb;color:#fff;display:inline-block;padding:12px 20px;border-radius:6px;margin:16px 0;">
    ${otp}
  </div>
  <p style="font-size:13px;color:#666;">This code will expire in 15 minutes and can only be used once.</p>
  <p style="font-size:12px;color:#888;">If you didn’t request this code, please ignore this email.</p>`,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    throw new Error("Email could not be sent! Try with a different one.");
  }
};

export default sendEmail;

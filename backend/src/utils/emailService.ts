import nodemailer from "nodemailer";
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
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Maddison Foo Koch" <${process.env.EMAIL_FROM}>`, // sender address
    to: email, // list of receivers
    subject: "OTP Verification ✔",
    text: "Confirm your OTP: " + otp, // plain‑text body
    html: "<b>Confirm your OTP: </b> " + otp, // HTML body
  });

  console.log("Message sent:", info.messageId);
};

export default sendEmail;

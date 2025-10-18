import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import ContactRow from "../../components/ContactRow";
import { ContactType } from "../../types/ContactTypes";

interface ContactDetailsProps {
  phone: string;
  email?: string;
  address: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  phone,
  email,
  address,
}) => {
  const [showContact, setShowContact] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleRevealClick = () => {
    // Simulate verification process
    // setVerified(true);
    setShowOtpForm(true);
  };
  const sendOtp = () => {
    // Simulate sending OTP
    console.log(`Sending OTP to ${mobile}`);
    setOtpSent(true);
  };

  const verifyOtp = async (otp: string) => {
    // const res = await fetch("/api/verify-otp", {
    //   method: "POST",
    //   body: JSON.stringify({ mobile, otp }),
    // });

    // const data = await res.json();
    // if (data.success) setShowContact(true);
    console.log(`Verifying OTP ${otp} for mobile ${mobile}`);
    setShowContact(true);
    setShowOtpForm(false);
    setOtpSent(false);
    setMobile("");
  };

  if (otpSent) return <OTPInput length={6} onComplete={verifyOtp} />;

  if (showOtpForm)
    return (
      <Box>
        <Typography>Enter your mobile number to receive an OTP</Typography>
        <TextField
          label="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Button onClick={sendOtp}>Send OTP</Button>
      </Box>
    );

  if (!showContact)
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Lock color="disabled" />
        <Typography color="text.secondary">Contact details hidden</Typography>
        <Button variant="outlined" onClick={handleRevealClick}>
          View
        </Button>
      </Box>
    );
  else
    return (
      <Card>
        <CardContent sx={{ pt: 1 }}>
          {/* <Typography variant="h6" sx={{ pb: 0, fontWeight: 500 }}>
          Contact Details
        </Typography> */}
          {/* <Divider sx={{ my: 1 }} /> */}
          <Typography variant="body2" color="text.primary" sx={{ pb: 1 }}>
            Reach out to the business via phone, email, or visit their location.
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack spacing={2} sx={{ pt: 1 }}>
            <ContactRow
              href={`tel:${phone}`}
              label={phone}
              type={ContactType.Phone}
            />
            <ContactRow
              href={`mailto:${email}`}
              label={email ?? ""}
              type={ContactType.Email}
            />
            <ContactRow
              aria-label={`Directions to ${address}`}
              href={``}
              label={address}
              type={ContactType.Map}
              target="_blank"
              rel="noopener"
            />
          </Stack>
        </CardContent>
      </Card>
    );
};

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill("")); // Filling array with empty strings
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit !== "")) {
        onComplete(newOtp.join(""));
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      ))}
    </div>
  );
};

export { OTPInput };

export default ContactDetails;

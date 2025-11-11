import {
  Box,
  TextField,
  Stack,
  FormHelperText,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function VerifyBusinessForm({
  onSubmit,
  email,
  userId,
  phoneNumber,
}: {
  onSubmit: (otp: string, password: string) => void;
  email: string;
  userId: string;
  phoneNumber: string;
}) {
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (isButtonDisabled) {
      const interval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // When the countdown reaches 0, enable the button and clear the interval
      if (secondsRemaining === 0) {
        setIsButtonDisabled(false);
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [secondsRemaining, isButtonDisabled]);

  const handleResendOtp = async (
    phoneNumber: string,
    email: string,
    userId: string,
  ) => {
    const otpRes = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/generate-otp`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          userId: userId,
          phoneNumber: phoneNumber,
        }),
      },
    );

    if (!otpRes.ok) {
      return toast.error(`Something went wrong, try again later`);
    }
    setIsButtonDisabled(true);
    setSecondsRemaining(60);
    toast.success("OTP resent successfully.");
  };

  const onSubmitVerification = (e: React.FormEvent) => {
    e.preventDefault();
    const isOTP = !otp;
    if (isOTP) {
      setError(isOTP);
    } else {
      onSubmit(otp, password);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmitVerification}
      sx={{ mb: 10 }}
      noValidate
    >
      <Stack spacing={2}>
        <TextField
          label="OTP Verification"
          required
          variant="outlined"
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {error ? <FormHelperText error>* Enter Valid OTP</FormHelperText> : ""}
        <TextField
          label="Password"
          required
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isButtonDisabled ? (
          <Typography variant="body2" color="textSecondary">
            Resend code in {secondsRemaining}s
          </Typography>
        ) : (
          <Typography variant="body2" color="textSecondary">
            Didn't receive the code?
          </Typography>
        )}

        <Button
          variant="text"
          onClick={() => handleResendOtp(phoneNumber, email, userId)}
          disabled={isButtonDisabled} // MUI Button uses the 'disabled' prop
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Send Again
        </Button>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default VerifyBusinessForm;

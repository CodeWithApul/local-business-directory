import {
  Box,
  TextField,
  Stack,
  FormHelperText,
  Button,
  Typography,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function VerifyBusinessForm({
  onSubmit,
  sendOtpAgain,
}: {
  onSubmit: (otp: string, password: string) => void;
  sendOtpAgain: () => void;
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
          <Box>
            <Typography
              sx={{
                display: "inline-block",
                width: "fit-content",
                margin: "2px",
              }}
              variant="body2"
              color="textSecondary"
            >
              Didn't receive the code?
            </Typography>
            <Link
              component="button"
              sx={{ display: "inline-block", width: "fit-content" }}
              variant="body2"
              onClick={(e) => {
                e.preventDefault();
                sendOtpAgain();
              }}
            >
              Resend OTP
            </Link>
          </Box>
        )}
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default VerifyBusinessForm;

import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function VerifyBusinessForm({
  onSubmit,
  sendOtpAgain,
}: {
  onSubmit: (otp: string, password: string) => void;
  sendOtpAgain: () => void;
}) {
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const isButtonDisabled = secondsRemaining > 0;

  useEffect(() => {
    if (!isButtonDisabled) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isButtonDisabled]);

  const onSubmitVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) setError(true);

    onSubmit(otp, password);
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

import { Box, TextField, Stack, FormHelperText, Button } from "@mui/material";
import React, { useState } from "react";

function VerifyBusinessForm({
  onSubmit,
}: {
  onSubmit: (otp: string, password: string) => void;
}) {
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
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
        <TextField
          label="Password"
          required
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <FormHelperText error>* Enter Valid OTP</FormHelperText> : ""}
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default VerifyBusinessForm;

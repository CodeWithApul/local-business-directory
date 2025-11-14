import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { LoginFormSchema } from "../../schema/LoginFormSchema";
import { sendLoginRequest } from "../../services/businessService";

import type { LoginFormValues } from "../../schema/LoginFormSchema";

function ShopAuthForm() {
  const [isSubmitting, setisSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(LoginFormSchema) });

  const navigate = useNavigate();

  const onAuthSubmit = async (data: LoginFormValues) => {
    setisSubmitting(true);

    try {
      const isLoggedIn = await sendLoginRequest(data);
      if (!isLoggedIn) return toast.error(`Error: Invalid credentials.`);

      toast.success(`Login Successfully.`);
      navigate("/shop");
    } catch (err) {
      toast.error("Something went wrong, try again later.");
      console.error(err);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onAuthSubmit)}
      sx={{ maxWidth: 600, margin: "auto", mt: 2, padding: 2 }}
    >
      <Typography
        component="div"
        sx={{ textAlign: "center", padding: 4, fontWeight: 700 }}
      >
        Login to Shop
      </Typography>
      <Stack spacing={2}>
        <TextField
          type="text"
          label="Email ID / Mobile Number"
          autoComplete="email"
          required
          fullWidth
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          type="password"
          label="Password"
          autoComplete="password"
          required
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging In..." : "Login"}
        </Button>
      </Stack>
    </Box>
  );
}
export default ShopAuthForm;

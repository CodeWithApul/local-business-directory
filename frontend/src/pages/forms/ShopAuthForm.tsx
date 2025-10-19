import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type InferType } from "yup";
// import { toast } from "react-toastify";

const LoginFormSchema = yup.object({
  email: yup.string().required("Please fill email id.").email(),
  password: yup.string().required("Please fill password.").min(6),
});

function ShopAuthForm() {
  const [isSubmitting, setisSubmitting] = useState(false);

  type LoginFormValues = InferType<typeof LoginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(LoginFormSchema) });

  const navigate = useNavigate();

  const onAuthSubmit = async (data: LoginFormValues) => {
    console.log(data);
    setisSubmitting(true);
    // Logic to submit auth details to backend to verify
    // Show Successful LoggedIn message or Incorrect Credentials

    // try {
    //   const res = await fetch("/auth/login", {
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //     method: "POST",
    //   });

    //   if (!res.ok) throw new Error("Auth failed.");

    //   const result = await res.json();
    //   console.log(result);
    navigate("/shop");
    // } catch (error: unknown) {
    //   if (error instanceof Error) toast.error(`Error:  ${error.message}`);
    //   setisSubmitting(false);
    // }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onAuthSubmit)}
      sx={{ maxWidth: 600, margin: "auto", mt: 2, padding: 2 }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", padding: 4, fontWeight: 700 }}
      >
        Login to Shop
      </Typography>
      <Stack spacing={2}>
        <TextField
          type="email"
          label="Email ID"
          autoComplete="email"
          required
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
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

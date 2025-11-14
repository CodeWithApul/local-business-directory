import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../Schema/authRelatedSchema";
import type { LoginFormValues } from "../../types/LoginTypes";
import { sendLoginReq } from "../../services/businessService";
import { toast } from "react-toastify";

function ShopAuthForm() {
  const [isSubmitting, setisSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(LoginFormSchema) });

  const navigate = useNavigate();

  const onAuthSubmit = async (data: LoginFormValues) => {
    console.log(data);
    setisSubmitting(true);

    try {
      const res = await sendLoginReq(data);
      const resData = await res.json();
      if (!res.ok) {
        toast.error(`Error: ${resData.error}`);
        return;
      }
      localStorage.setItem("accessToken", resData.accessToken);
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
          type="email"
          label="Email ID"
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

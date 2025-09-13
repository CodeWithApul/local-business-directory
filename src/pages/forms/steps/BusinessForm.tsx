import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { type InferType } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import { BusinessFormSchema } from "../ValidationSchema.ts";
import { dummyBusiness } from "../../../data/dummyData.ts";

export type BusinessFormValues = InferType<typeof BusinessFormSchema>;

const categories: string[] = Array.from(
  new Set(dummyBusiness.map((b) => b.category))
);
interface BusinessFormProps {
  onSubmit: (data: BusinessFormValues) => void;
}

export default function BusinessForm({ onSubmit }: BusinessFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    resolver: yupResolver(BusinessFormSchema),
  });
  const logoFile = watch("logo");

  /*------- Preview Image */
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  //   const showImagePreview = function (e: ChangeEvent<HTMLInputElement>) {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       const filereader = new FileReader();
  //       filereader.onloadend = () => setImagePreview(filereader.result as string);
  //       filereader.readAsDataURL(file);
  //     }
  //   };
  /* Preview Image ------*/
  useEffect(() => {
    if (logoFile && logoFile.length > 0) {
      const filereader = new FileReader();
      filereader.onloadend = () => setImagePreview(filereader.result as string);
      filereader.readAsDataURL(logoFile[0]);
    } else setImagePreview(null);
  }, [logoFile]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          required
          {...register("businessName")}
          error={!!errors.businessName}
          helperText={errors.businessName?.message}
        />
        <TextField
          label="Business Category"
          variant="outlined"
          fullWidth
          required
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
          select
        >
          {categories.map((c, index) => (
            <MenuItem key={index} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Owner Name"
          variant="outlined"
          fullWidth
          required
          {...register("ownerName")}
          error={!!errors.ownerName}
          helperText={errors.ownerName?.message}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          required
          fullWidth
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="Address"
          variant="outlined"
          multiline
          rows={2}
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <Button variant="outlined" component="label">
          Choose your Logo *
          <input type="file" hidden accept="image/*" {...register("logo")} />
        </Button>
        {errors.logo && (
          <FormHelperText error>{errors.logo.message}</FormHelperText>
        )}
        {imagePreview && (
          <Box
            component="img"
            src={imagePreview}
            alt="Preview"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: 2,
              border: "1px solid #ccc",
            }}
          />
        )}
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

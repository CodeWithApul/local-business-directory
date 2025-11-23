import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import categories from "../../../data/categories.json";
import { BusinessFormSchema } from "../ValidationSchema.ts";

import type { InferType } from "yup";

export type BusinessFormValues = InferType<typeof BusinessFormSchema>;

interface BusinessFormProps {
  initialValues?: Partial<BusinessFormValues>;
  mode: "create" | "edit";
  onSubmit: (data: BusinessFormValues) => void;
}

export default function BusinessForm({
  onSubmit,
  initialValues,
  mode,
}: BusinessFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(BusinessFormSchema) as any,
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
  // const logoFile = watch("logo");
  useEffect(() => {
    if (typeof logoFile === "string") {
      setImagePreview(logoFile);
      return;
    }
    const logo = logoFile?.[0];
    console.log("logoFile changed:", logo, typeof logo);
    if (logoFile?.[0]) {
      // const filereader = new FileReader();
      // filereader.onloadend = () => setImagePreview(filereader.result as string);
      // filereader.readAsDataURL(logoFile?.[0]);
      setImagePreview(URL.createObjectURL(logoFile?.[0]));
    } else {
      setImagePreview(null);
    }
  }, [logoFile]);

  const [files, setFiles] = useState<File[]>([]);
  const [previewMedia, setPreviewMedia] = useState<string[]>([]);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const media = Array.from(e.target.files || []);
    setFiles(media);
    setValue("media", media);
    setPreviewMedia(media.map((m) => URL.createObjectURL(m)));
  };

  useEffect(() => {
    return () => {
      previewMedia.forEach((oldMedia) => URL.revokeObjectURL(oldMedia));
    };
  }, [previewMedia]);

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
          value={watch("category") || initialValues?.category || ""}
        >
          {initialValues?.category && (
            <MenuItem value={initialValues?.category}>
              {
                categories.filter(
                  (c) => c.id === parseInt(initialValues.category ?? "0"),
                )[0]?.name
              }
            </MenuItem>
          )}

          {categories
            .filter((c) => c.id !== parseInt(initialValues?.category ?? "0"))
            .map((category, index) => (
              <MenuItem key={index} value={category.id}>
                {category.name}
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
          disabled={mode === "edit" ? true : false}
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
          disabled={mode === "edit" ? true : false}
          helperText={errors.phoneNumber?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="Street"
          variant="outlined"
          required
          fullWidth
          {...register("street")}
          error={!!errors.street}
          helperText={errors.street?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="City"
          variant="outlined"
          required
          fullWidth
          {...register("city")}
          error={!!errors.city}
          helperText={errors.city?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="State"
          variant="outlined"
          required
          fullWidth
          {...register("state")}
          error={!!errors.state}
          helperText={errors.state?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="Country"
          variant="outlined"
          required
          fullWidth
          {...register("country")}
          error={!!errors.country}
          helperText={errors.country?.message}
          // FIXME: Check for Uniqueness
        />
        <input {...register("businessId")} type="hidden" />

        <TextField
          label="Postal Code"
          variant="outlined"
          required
          fullWidth
          {...register("postalCode")}
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message}
          // FIXME: Check for Uniqueness
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <input {...register("logoUrl")} hidden />
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
        {mode === "edit" && (
          <>
            <Button variant="outlined" component="label">
              Choose your Photos / Videos
              <input
                type="file"
                hidden
                multiple
                accept="image/*,video/*"
                {...register("media")}
                onChange={handleMediaChange}
              />
            </Button>
            {errors.media && (
              <FormHelperText error>
                {errors.media?.message?.toString()}
              </FormHelperText>
            )}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {previewMedia &&
                previewMedia.map((url, idx) =>
                  files[idx].type.startsWith("image") ? (
                    <Box
                      component="img"
                      src={url}
                      alt={`preview-${idx}`}
                      sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 2,
                        border: "1px solid #ccc",
                        display: "flex",
                      }}
                    />
                  ) : (
                    <Box
                      component="video"
                      src={url}
                      controls
                      sx={{ width: 200, height: 200 }}
                    />
                  ),
                )}
            </Box>
          </>
        )}
        <Button variant="contained" color="primary" type="submit">
          {mode === "edit" ? "Update" : "Create"} Business
        </Button>
      </Stack>
    </Box>
  );
}

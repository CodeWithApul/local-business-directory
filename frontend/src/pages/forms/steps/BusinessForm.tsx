import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, FormHelperText, Stack, TextField } from "@mui/material";

import CategoryDropdown from "../../../components/CategoryDropdown.tsx";
import { getCategories } from "../../../services/categoryService.ts";
// import categories from "../../../data/categories.json";
import { BusinessFormSchema } from "../ValidationSchema.ts";

import type { Category } from "../../../types/Category";

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
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    defaultValues: initialValues,
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
  // const logoFile = watch("logo");
  useEffect(() => {
    if (!logoFile || !logoFile.length) return;
    setImagePreview(null);
    const logoURL =
      typeof logoFile === "string"
        ? logoFile
        : URL.createObjectURL(logoFile?.[0]);
    setImagePreview(logoURL);

    // const filereader = new FileReader();
    // filereader.onloadend = () => setImagePreview(filereader.result as string);
    // filereader.readAsDataURL(logoFile?.[0]);
  }, [logoFile]);

  const [previewMedia, setPreviewMedia] = useState<string[]>([]);

  const mediaFiles = watch("media");

  useEffect(() => {
    if (!mediaFiles) {
      setPreviewMedia([]);
      return;
    }
    const urls = mediaFiles.map((m) =>
      typeof m === "string" ? m : URL.createObjectURL(m!)
    );

    setPreviewMedia(urls);

    // cleanup blob URLs
    return () => {
      urls.forEach((url, i) => {
        if (mediaFiles[i] instanceof File) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [mediaFiles]);

  // const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const media = Array.from(e.target.files || []);
  //   setFiles(media);
  //   setValue("media", media);
  //   setPreviewMedia(
  //     media.map((m) => {
  //       if (typeof m === "string") return m;
  //       else return URL.createObjectURL(m);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   return () => {
  //     previewMedia.forEach((oldMedia) => URL.revokeObjectURL(oldMedia));
  //   };
  // }, [previewMedia]);
  // console.log(errors);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const a = async () => {
      const categories = (await getCategories()).filter((c) => c.id !== 0);
      setCategories(categories);
    };
    a();
  }, []);
  const wc = watch("category");
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <input type="hidden" {...register("businessId")} />
        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          required
          {...register("businessName")}
          error={!!errors.businessName}
          helperText={errors.businessName?.message}
        />
        <input type="hidden" {...register("category")} />

        <CategoryDropdown
          categories={categories}
          value={
            // categories.find(
            //   (c) =>
            //     c.id.toString() === wc.toString() ||
            //     c.children?.find((ch) => ch.id.toString() === wc.toString())
            // ) || null
            categories
              .flatMap((c) => [c, ...(c.children ?? [])])
              .find((cat) => cat.id.toString() === wc.toString()) || null
          }
          onChange={(c) =>
            setValue("category", c ? c.id.toString() : "", {
              shouldValidate: true,
            })
          }
        />
        {errors.category && (
          <FormHelperText error>{errors.category.message}</FormHelperText>
        )}

        {/* <TextField
          label="Business Category"
          variant="outlined"
          fullWidth
          required
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
          select
          value={watch("category") || initialValues?.category || ""}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: 200, // limit height
                  overflowY: "auto", // enable scroll
                },
              },
            },
          }}
        >
          {categories?.map((c, index) => (
            <MenuItem key={index} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField> */}
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
          disabled={mode == "edit"}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          required
          fullWidth
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          disabled={mode == "edit"}
        />
        <TextField
          label="Landmark"
          variant="outlined"
          fullWidth
          {...register("landmark")}
          error={!!errors.landmark}
          helperText={errors.landmark?.message}
        />
        <TextField
          label="Village/Area"
          variant="outlined"
          required
          fullWidth
          {...register("street")}
          error={!!errors.street}
          helperText={errors.street?.message}
        />
        <TextField
          label="Town/City/District"
          variant="outlined"
          required
          fullWidth
          {...register("city")}
          error={!!errors.city}
          helperText={errors.city?.message}
        />
        <TextField
          label="State"
          variant="outlined"
          required
          fullWidth
          {...register("state")}
          error={!!errors.state}
          helperText={errors.state?.message}
        />
        <TextField
          label="Country"
          variant="outlined"
          required
          fullWidth
          {...register("country")}
          error={!!errors.country}
          helperText={errors.country?.message}
        />
        <TextField
          label="Postal Code"
          variant="outlined"
          fullWidth
          {...register("postalCode")}
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message}
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
                // onChange={handleMediaChange}
              />
            </Button>
            {errors.media && (
              <FormHelperText error>
                {errors.media?.[0]?.message}
              </FormHelperText>
            )}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {previewMedia.map((url, idx) => {
                const file = mediaFiles?.[idx]; // from watch("media")

                // Case 1: existing URL string from DB
                if (typeof file === "string") {
                  const isImage = file.match(/\.(jpe?g|png|gif|webp)$/i);
                  return isImage ? (
                    <Box
                      component="img"
                      src={url}
                      alt={`preview-${idx}`}
                      sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 2,
                        border: "1px solid #ccc",
                      }}
                    />
                  ) : (
                    <Box
                      component="video"
                      src={url}
                      controls
                      sx={{ width: 200, height: 200 }}
                    />
                  );
                }

                // Case 2: new File object
                if (file instanceof File) {
                  return file.type.startsWith("image/") ? (
                    <Box
                      component="img"
                      src={url}
                      alt={`preview-${idx}`}
                      sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 2,
                        border: "1px solid #ccc",
                      }}
                    />
                  ) : (
                    <Box
                      component="video"
                      src={url}
                      controls
                      sx={{ width: 200, height: 200 }}
                    />
                  );
                }

                return null;
              })}
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

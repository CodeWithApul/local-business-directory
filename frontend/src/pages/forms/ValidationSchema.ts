import * as yup from "yup";

export const BusinessFormSchema = yup.object({
  businessId: yup.string().optional().default(null),
  businessName: yup.string().required("Business Name is required!"),
  category: yup.string().required("Business Category is required!!"),
  ownerName: yup.string().required("Owner name is required!"),
  email: yup.string().email().optional().default(null),
  phoneNumber: yup
    .string()
    .required("Phone Number is required!")
    .matches(
      /^[+]?[0-9]{10,15}$/,
      "Phone number must be valid and contain 10-15 digits (with optional '+')"
    ),
  state: yup.string().required("State Name is required!").default(null),
  street: yup.string().required("Village/Area Name is required!").default(null),
  landmark: yup.string().optional().default(null),
  lat: yup.number().optional().default(0),
  lon: yup.number().optional().default(0),
  city: yup
    .string()
    .required("Town/City/District Name is required!")
    .default(null),
  country: yup.string().required("Country Name is required").default(null),
  postalCode: yup
    .string()
    .trim()
    .optional()
    .default(null)
    .test("invalid", "Postal code should be of 6 digits!", (value) => {
      if (!value) return true;
      else return /^\d{6}$/.test(value);
    }),
  description: yup.string().optional().default(null),
  logo: yup
    .mixed<File | string>()
    .required()
    .test("required", "Logo is mandatory!", (value) => {
      const hasExistingLogo = typeof value === "string" && value.length > 0;
      const hasNewFile = value?.[0] instanceof File;
      return hasExistingLogo || hasNewFile;
    })
    .test("fileType", "Only JPG/PNG allowed!", (value) => {
      if (typeof value === "string") return true;
      if (value?.[0] instanceof File) {
        console.log(
          value?.[0] && ["image/jpeg", "image/png"].includes(value?.[0].type),
          value?.[0]
        );
        return (
          value?.[0] && ["image/jpeg", "image/png"].includes(value?.[0].type)
        );
      }
      return false;
    })
    .test("fileSize", "File size must be less than 1 MB", (value) => {
      if (typeof value === "string") return true; // existing logo URL
      if (value[0] instanceof File) {
        return value[0].size <= 1 * 1024 * 1024; // 1 MB
      }
      return false;
    }),
  media: yup
    .array()
    .of(
      yup
        .mixed<File | string>()
        .test("fileType", "Only images and videos allowed!", (value) => {
          if (typeof value === "string") return true; // existing URL
          if (value instanceof File) {
            return (
              value.type.startsWith("image/") || value.type.startsWith("video/")
            );
          }
          return false;
        })
        .test("fileSize", "Each file must be less than 15 MB", (value) => {
          if (typeof value === "string") return true;
          if (value instanceof File) {
            return value.size <= 15 * 1024 * 1024; // 15 MB
          }
          return false;
        })
    )
    .nullable()
    .default([]),
});

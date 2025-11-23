import * as yup from "yup";

export const BusinessFormSchema = yup.object({
  businessName: yup.string().required("Business Name is required!"),
  category: yup.string().required("Business Category is required!!"),
  ownerName: yup.string().required("Owner name is required!"),
  email: yup.string().email().optional().default(null),
  phoneNumber: yup
    .string()
    .required("Phone Number is required!")
    .matches(
      /^[+]?[0-9]{10,15}$/,
      "Phone number must be valid and contain 10-15 digits (with optional '+')",
    ),
  state: yup.string().required("State Name is required!").default(null),
  street: yup.string().required("Street Name is required!").default(null),

  city: yup.string().required("City Name is required!").default(null),
  country: yup.string().required("Country Name is required").default(null),
  postalCode: yup
    .string()
    .trim()
    .required("Enter your postal code")
    .matches(/^(?:[A-Z0-9][A-Z0-9\s-]{2,10})$/i, "Enter a valid postal code"),
  description: yup.string().optional().default(null),
  // logoUrl: yup.string().nullable().optional(),
  businessId: yup.string().nullable().optional(),
  logo: yup
    .mixed<File>()
    .optional()
    .nullable()
    .test("fileType", "Only JPG/PNG allowed!", (value) => {
      console.log("value", value);
      if (value && typeof value == "string") return true;
      if (!value?.[0]) {
        return true;
      } else {
        return (
          value?.[0] && ["image/jpeg", "image/png"].includes(value?.[0].type)
        );
      }
    }),

  // mediaUrls: yup.array().of(yup.string()).nullable().optional(),
  media: yup
    .mixed<File[]>()
    .default(null)
    .test("fileType", "Only images and Videos allowed!", (value) =>
      value
        ? Array.from(value).every((file) =>
            ["image/", "video/"].some((type) => file.type.startsWith(type)),
          )
        : true,
    ),
});

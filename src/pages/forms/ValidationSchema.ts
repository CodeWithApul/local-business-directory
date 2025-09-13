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
      "Phone number must be valid and contain 10-15 digits (with optional '+')"
    ),
  address: yup.string().optional().default(null),
  description: yup.string().optional().default(null),
  logo: yup
    .mixed<FileList>()
    .required("Logo is mandatory!")
    .test(
      "fileType",
      "Only JPG/PNG allowed!",
      (value) => value && ["image/jpeg", "image/png"].includes(value?.[0]?.type)
    ),
});

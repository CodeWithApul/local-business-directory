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
  logo: yup
    .mixed<File>()
    .required()
    .test("required", "Logo is mandatory!", (value) => {
      return value != null;
    })
    .test(
      "fileType",
      "Only JPG/PNG allowed!",
      (value) =>
        value?.[0] && ["image/jpeg", "image/png"].includes(value?.[0].type)
    ),
  media: yup
    .mixed<File[]>()
    .nullable()
    .default(null)
    .test("fileType", "Only images and Videos allowed!", (value) =>
      value
        ? Array.from(value).every((file) =>
            ["image/", "video/"].some((type) => file.type.startsWith(type))
          )
        : true
    ),
});

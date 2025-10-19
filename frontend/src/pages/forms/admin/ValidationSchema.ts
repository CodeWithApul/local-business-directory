import * as yup from "yup";

export const CategoryFormSchema = yup.object({
  name: yup.string().required("Category Name is mandatory!"),
  isActive: yup.boolean().optional().default(null),
});

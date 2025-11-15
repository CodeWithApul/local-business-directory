import { z } from "zod/v4";

export const CategorySchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string(),
});
export type Category = z.infer<typeof CategorySchema>;

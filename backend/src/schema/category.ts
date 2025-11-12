import { z } from "zod/v4";

export const CategorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
});
export type Category = z.infer<typeof CategorySchema>;

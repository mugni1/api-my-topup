import z from "zod";

export const createUpdateCategoryValidation = z.object({
  name: z.string("name is required").min(2, "name must be at least 2 characters").max(50, "name must be at most 50 characters"),
  code: z.string("code is required").min(2, "code must be at least 2 characters").max(50, "code must be at most 50 characters"),
});
export type CreateUpdateCategoryPayload = z.infer<typeof createUpdateCategoryValidation>;

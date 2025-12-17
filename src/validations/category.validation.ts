import z from "zod";

export const createUpdateCategoryValidation = z.object({
  name: z.string("name is required").min(2, "name must be at least 2 characters").max(50, "name must be at most 50 characters"),
});

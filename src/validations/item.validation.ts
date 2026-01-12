import z from "zod";

export const createUpdateItemValidation = z.object({
  name: z.string("name is required").min(2, "name must be at least 2 characters").max(50, "name must be at most 50 characters"),
  merchant_name: z.string("merchant_name is required").min(2, "merchant_name must be at least 2 characters").max(50, "merchant_name must be at most 50 characters"),
  price: z.coerce.number("price must be a number").min(0, "price must be at least 0"),
  category_id: z.cuid("category_id must be a valid CUID")
})
export type CreateUpdateItemPayload = z.infer<typeof createUpdateItemValidation>;

export const createItemSchema = z.object({
  name: z.string("name is required").min(2, "name must be at least 2 characters").max(50, "name must be at most 50 characters"),
  merchant_name: z.string("merchant_name is required").min(2, "merchant_name must be at least 2 characters").max(50, "merchant_name must be at most 50 characters"),
  price: z.coerce.number("price must be a number").min(0, "price must be at least 0"),
  category_id: z.cuid("category_id must be a valid CUID"),
  image_url: z.url("image_url is required and please input valid image_url"),
  image_id: z.string("image_id is required and please input valid image_id")
})
export type CreateItemPayload = z.infer<typeof createItemSchema>;

export const updateItemSchema = z.object({
  name: z.string("name is required").min(2, "name must be at least 2 characters").max(50, "name must be at most 50 characters").optional(),
  merchant_name: z.string("merchant_name is required").min(2, "merchant_name must be at least 2 characters").max(50, "merchant_name must be at most 50 characters").optional(),
  price: z.coerce.number("price must be a number").min(0, "price must be at least 0").optional(),
  category_id: z.cuid("category_id must be a valid CUID").optional(),
  image_url: z.url("image_url is required and please input valid image_url").optional(),
  image_id: z.string("image_id is required and please input valid image_id").optional()
})
export type UpdateItemPayload = z.infer<typeof updateItemSchema>;
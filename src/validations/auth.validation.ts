import z from "zod";

export const registerValidate = z.object({
  name: z.string("name is required").min(1, "minimum name must have 1 characters"),
  email: z.email("email is required and please input valid email"),
  phone: z.string("please input valid phone number").min(10, "minimum phone number must have 10 characters").max(13, "maximum phone number must have 13 characters"),
  password: z.string("password is required").min(8, "minimum password must have 8 characters").max(20, "maximum password must have 20 characters"),
})
export type RegisterPayload = z.infer<typeof registerValidate>;

export const loginValidate = z.object({
  email: z.email("email is required and please input valid email"),
  password: z.string("password is required").min(8, "minimum password must have 8 characters").max(20, "maximum password must have 20 characters"),
})

export type LoginPayload = z.infer<typeof loginValidate>;

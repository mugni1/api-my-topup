import z from "zod";

export const createGameSchema = z.object({
    title: z.string("title is required").max(50, "maximum title must have 50 characters").min(4, "minimum title must have 4 characters"),
    studio: z.string("studio is required").max(50, "maximum studio must have 50 characters").min(4, "minimum studio must have 4 characters"),
    image_url: z.url("please input valid url"),
    image_id: z.string("image_id is required"),
    cover_url: z.url("please input valid url"),
    cover_id: z.string("image_id is required"),
})
export type CreateGamePayload = z.infer<typeof createGameSchema>

export const updateGameSchema = z.object({
    title: z.string("title is required").max(50, "maximum title must have 50 characters").min(4, "minimum title must have 4 characters").optional(),
    studio: z.string("studio is required").max(50, "maximum studio must have 50 characters").min(4, "minimum studio must have 4 characters").optional(),
    image_url: z.url("please input valid url").optional(),
    image_id: z.string("image_id is required").optional(),
    cover_url: z.url("please input valid url").optional(),
    cover_id: z.string("image_id is required").optional(),
})
export type UpdateGamePayload = z.infer<typeof updateGameSchema>


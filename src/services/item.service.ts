import { prisma } from "../libs/prisma.js";
import { CreateUpdateItemPayload } from "../validations/item.validation.js";

export const createItemService = async (payload: CreateUpdateItemPayload) => {
  return await prisma.item.create({
    data: {
      name: payload.name,
      imageUrl: payload.image_url,
      price: payload.price,
      categoryId: payload.category_id,
      merchantName: payload.merchant_name
    }
  })
}
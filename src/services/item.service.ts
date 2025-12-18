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

export const updateItemSerevice = async (id: string, payload: CreateUpdateItemPayload) => {
  return await prisma.item.update({
    where: {
      id
    },
    data: {
      name: payload.name,
      imageUrl: payload.image_url,
      price: payload.price,
      categoryId: payload.category_id,
      merchantName: payload.merchant_name
    }
  })
}

export const countItemByIdService = async (id: string) => {
  return await prisma.item.count({
    where: {
      id
    }
  })
}
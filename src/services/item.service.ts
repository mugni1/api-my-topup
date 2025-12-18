import { prisma } from "../libs/prisma.js";
import { QueryParams } from "../types/param.type.js";
import { CreateUpdateItemPayload } from "../validations/item.validation.js";

export const getItemsService = async (query: QueryParams) => {
  return await prisma.item.findMany({
    where: {
      OR: [
        { name: { contains: query.search, mode: 'insensitive' } },
        { merchantName: { contains: query.search, mode: 'insensitive' } },
      ]
    },
    skip: query.offset,
    take: query.limit
  });
};

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

export const deleteItemService = async (id: string) => {
  return await prisma.item.delete({
    where: {
      id
    }
  })
}
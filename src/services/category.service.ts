import { prisma } from "../libs/prisma.js";

export const createCategoryService = async (payload: { name: string }) => {
  return await prisma.category.create({
    data: payload
  })
};

export const countCategoryByNameService = async (name: string) => {
  return await prisma.category.count({
    where: {
      name
    }
  });
};
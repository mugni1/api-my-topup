import { prisma } from "../libs/prisma.js";

export const createCategoryService = async (payload: { name: string }) => {
  return await prisma.category.create({
    data: payload
  })
};

export const updateCategoryService = async (id: string, payload: { name: string }) => {
  return await prisma.category.update({
    where: {
      id
    },
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

export const countCategoryByIdService = async (id: string) => {
  return await prisma.category.count({
    where: {
      id
    }
  });
};


export const getCategoryByNameService = async (name: string) => {
  return await prisma.category.findUnique({
    where: {
      name
    }
  });
}

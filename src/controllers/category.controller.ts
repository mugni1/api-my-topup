import { Request, Response } from "express";
import { countCategoryByNameService, createCategoryService } from "../services/category.service.js";
import { response } from "../utils/response.js";
import { createCategoryValidation } from "../validations/category.validation.js";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { success, error, data } = createCategoryValidation.safeParse(body);
    if (!success) {
      const errors = error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return response({ res, status: 400, message: "Invalid input", errors });
    }

    const isExist = await countCategoryByNameService(data.name);
    if (isExist) {
      return response({ res, status: 400, message: "Category already exists" });
    }

    const category = await createCategoryService(data);
    if (!category) {
      return response({ res, status: 500, message: "Failed to create category" });
    }

    return response({ res, status: 201, message: "Category created successfully", data: category });
  } catch (errors: unknown) {
    return response({ res, status: 500, message: "Failed to create category", errors });
  }
};
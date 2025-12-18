import { Request, Response } from "express";
import { response } from "../utils/response.js";
import { createUpdateItemValidation } from "../validations/item.validation.js";
import { countItemByIdService, createItemService, updateItemSerevice } from "../services/item.service.js";
import { countCategoryByIdService } from "../services/category.service.js";

export const createItem = async (req: Request, res: Response) => {
  const body = req.body
  const { data, success, error } = createUpdateItemValidation.safeParse(body)
  if (!success) {
    const errors = error.issues.map(issue => ({ path: issue.path.join('.'), message: issue.message }))
    return response({ res, message: "Invalid input", errors, status: 400 })
  }

  try {
    const isExistCategory = await countCategoryByIdService(data.category_id)
    if (isExistCategory < 1) {
      return response({ res, message: "Category not found", status: 404 })
    }

    const item = await createItemService(data)
    if (!item) {
      return response({ res, message: "Item creation failed", status: 500 })
    }

    response({ res, message: "Item created successfully", status: 201, data: item })
  } catch (error) {
    response({ res, message: "Internal server error", status: 500 })
  }
}

export const updateItem = async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body

  const { data, success, error } = createUpdateItemValidation.safeParse(body)
  if (!success) {
    const errors = error.issues.map(issue => ({ path: issue.path.join('.'), message: issue.message }))
    return response({ res, message: "Invalid input", errors, status: 400 })
  }

  try {
    const isExistItem = await countItemByIdService(id)
    if (isExistItem < 1) {
      return response({ res, message: "Item not found", status: 404 })
    }

    const isExistCategory = await countCategoryByIdService(data.category_id)
    if (isExistCategory < 1) {
      return response({ res, message: "Category not found", status: 404 })
    }

    const item = await updateItemSerevice(id, data)
    if (!item) {
      return response({ res, message: "Item updation failed", status: 500 })
    }

    response({ res, message: "Item updated successfully", status: 201, data: item })
  } catch (error) {
    response({ res, message: "Internal server error", status: 500 })
  }
}
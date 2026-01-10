import { Request, Response } from "express";
import { response } from "../utils/response.js";
import { imageValidateAndUpload } from "../utils/image.js";
import fileUpload from "express-fileupload";
import cloudinary from "../libs/cloudinary.js";

export const upload = async (req: Request, res: Response) => {
    try {
        const image = await imageValidateAndUpload(req.files?.image as fileUpload.UploadedFile, res)
        const data = {
            image_url: image.secure_url,
            public_id: image.public_id
        }
        response({ res, status: 200, message: "Upload file success", data })
    } catch {
        response({ res, status: 500, message: "Internal server error" })
    }
}

export const deleteFile = async (req: Request, res: Response) => {
    const publicId = req.query.public_id as string
    if (!publicId) {
        return response({ res, status: 400, message: "public_id is required" })
    }
    try {
        const results = await cloudinary.uploader.destroy(publicId)
        if (results.result !== 'ok') {
            return response({ res, status: 404, message: "Image not found or already deleted" })
        }
        response({ res, status: 200, message: "Delete file success", data: results })
    } catch {
        response({ res, status: 500, message: "Internal server error" })
    }
}
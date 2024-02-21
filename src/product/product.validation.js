import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const createProduct = joi
  .object({
    category: generalFields.id.required(),
    name: joi.string().min(1).max(255).required(),
    price: joi.number().min(0).max(500000000),
    ingrdients: joi.string().min(1).max(600),
    file: generalFields.file,
  })
  .required();

export const findSingleProduct = joi
  .object({
    id: generalFields.id.required(),
  })
  .required();

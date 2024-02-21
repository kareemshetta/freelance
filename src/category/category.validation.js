import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const createCategory = joi
  .object({
    name: joi.string().min(1).max(255).required(),
    price: joi.number().min(0).max(500000000),
    file: generalFields.file,
  })
  .required();

export const findSingleCategory = joi
  .object({
    id: generalFields.id.required(),
  })
  .required();

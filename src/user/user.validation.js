import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const signUpSchema = joi
  .object({
    firstName: joi.string().min(3).max(20).required(),
    lastName: joi.string().min(3).max(20).required(),
    email: generalFields.email.required(),
    password: generalFields.password.required(),

    // cPassword: generalFields.cPassword.valid(joi.ref("password")),
    // file: generalFields.file,
  })
  .required();

export const signInSchema = joi
  .object({
    email: generalFields.email.required(),
    password: generalFields.password.required(),
  })
  .required();

import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const createFeedback = joi
  .object({
    satisficationTasteAndQualityQuestion: joi
      .string()
      .min(1)
      .max(600)
      .required(),
    satisficationDelivaryQuestion: joi.string().min(1).max(600).required(),
    satisficationOverallExperienceQuestion: joi.number().min(1).max(5),
    receiveMenuQuestion: generalFields.email,
  })
  .required();

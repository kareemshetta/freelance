import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const createFeedback = joi
  .object({
    satisficationTasteAndQualityQuestion: joi.number().min(1).max(5).required(),
    satisficationDelivaryQuestion: joi.number().min(1).max(5).required(),
    satisficationOverallExperienceQuestion: joi.number().min(1).max(5),
    receiveMenuQuestion: generalFields.email,
  })
  .required();

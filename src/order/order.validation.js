import joi from "joi";

export const createComp = joi
  .object({
    name: joi.string().min(1).required(),
    number: joi.string().min(1).max(255).required(),
    pizza: joi.array().min(0).max(20),
    pasta: joi.array().min(0).max(20),
    salad: joi.array().min(0).max(20),
    sides: joi.array().min(0).max(20),
    date: joi.date(),
    notes: joi.string().min(1).max(355),
  })
  .required();
